/**
 * Reeds Worker — haalt een Instagram-reel op (Apify), laat Claude de inhoud
 * analyseren en geeft een gestructureerde walkthrough terug aan de PWA.
 *
 * POST /analyze  { url, context? }   header: x-reeds-token
 */
import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";

export interface Env {
  ANTHROPIC_API_KEY: string;
  APIFY_TOKEN: string;
  APP_TOKEN: string; // eigen wachtwoord, zodat alleen jouw app deze server kan gebruiken
}

const CATEGORIES = ["mindset", "training", "voeding", "slaap", "geld", "focus", "relaties", "werk", "overig"] as const;

const Analysis = z.object({
  titel: z.string().describe("Korte titel, max 8 woorden"),
  maker: z.string().describe("Naam of account van de maker, of leeg"),
  samenvatting: z.string().describe("Wat de video zegt in 2-4 zinnen"),
  kernwijsheid: z.string().describe("De ene wijsheid in één zin"),
  categorie: z.enum(CATEGORIES),
  waarom: z.string().describe("Waarom dit zou werken, 1-2 zinnen"),
  kanttekening: z.string().describe("Eerlijke check: klopt het, voor wie niet, wat is overdreven. Leeg als er niets op aan te merken is"),
  stappen: z
    .array(
      z.object({
        titel: z.string(),
        uitleg: z.string().describe("Concreet: wat, hoeveel, wanneer"),
      }),
    )
    .describe("2-5 stappen die Jaap kan nemen, in volgorde"),
  eersteActie: z.string().describe("De kleinste eerste actie, te doen binnen 2 minuten of vandaag"),
  ankerSuggestie: z.string().describe("Bestaand dagelijks moment om de actie aan te koppelen, bijv. 'na mijn eerste koffie'"),
  vraag: z.string().describe("Eén coachvraag die Jaap helpt dit in zijn week te passen"),
  inhoudBron: z.enum(["transcript", "onderschrift", "beide"]),
});
export type AnalysisT = z.infer<typeof Analysis>;

const SYSTEM = `Je bent de persoonlijke kenniscoach in de app Reeds. Je krijgt het onderschrift en (indien beschikbaar) het uitgeschreven gesproken woord van een Instagram-video die de gebruiker heeft opgeslagen.

Je taak: haal de bruikbare kennis eruit en vertaal die naar stappen die de gebruiker echt kan doen. Schrijf in het Nederlands, kort en direct, zonder hype.

Over de gebruiker: Jaap, 46, anesthesiemedewerker met wisselende diensten in Amsterdam UMC en ZZP-werk, vader van twee dochters (20 en 16), traint al 20 jaar bijna dagelijks, belegt in crypto en een wereld-ETF. Houd rekening met wisselende diensten bij tijdstippen en ankers.

Regels:
- Baseer je alleen op wat er in de video zit. Verzin geen inhoud. Is de tekst te mager, zeg dat in de samenvatting en houd de stappen klein.
- Stappen zijn concreet (hoeveel, wanneer, hoe lang), niet "wees vaker dankbaar".
- Bij gezondheid, supplementen, geld of trading: benoem in de kanttekening eerlijk wat onderbouwd is en wat niet. Geen financieel advies; vertaal geld-tips naar principes en gedrag.`;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, x-reeds-token",
};
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json", ...cors } });

function isInstagramUrl(u: string): boolean {
  try {
    const url = new URL(u);
    return /(^|\.)instagram\.com$/.test(url.hostname) && /\/(reel|reels|p|tv)\//.test(url.pathname);
  } catch {
    return false;
  }
}

type ReelItem = Record<string, unknown>;

async function fetchReel(url: string, env: Env): Promise<{ caption: string; transcript: string; owner: string; duration: number | null; thumb: string }> {
  const endpoint = `https://api.apify.com/v2/acts/apify~instagram-reel-scraper/run-sync-get-dataset-items?token=${encodeURIComponent(env.APIFY_TOKEN)}&timeout=240`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username: [url], resultsLimit: 1, includeTranscript: true }),
  });
  if (!res.ok) throw new Error(`Video ophalen mislukt (Apify ${res.status}). Controleer je Apify-sleutel en tegoed.`);
  const items = (await res.json()) as ReelItem[];
  const it = items?.[0];
  if (!it || it.error) throw new Error("Deze video kon niet worden opgehaald. Is het account openbaar?");
  const str = (v: unknown) => (typeof v === "string" ? v : "");
  let transcript = "";
  const t = it.transcript ?? it.transcription ?? it.transcriptText;
  if (typeof t === "string") transcript = t;
  else if (Array.isArray(t)) transcript = t.map((s) => (typeof s === "string" ? s : str((s as ReelItem)?.text))).join(" ");
  return {
    caption: str(it.caption),
    transcript: transcript.trim(),
    owner: str(it.ownerUsername) || str(it.ownerFullName),
    duration: typeof it.videoDuration === "number" ? it.videoDuration : null,
    thumb: str(it.displayUrl),
  };
}

async function analyze(input: { url: string; caption: string; transcript: string; owner: string; context: string }, env: Env): Promise<AnalysisT> {
  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
  const userText = [
    `Link: ${input.url}`,
    input.owner ? `Account: @${input.owner}` : "",
    `Onderschrift:\n${input.caption || "(geen)"}`,
    `Gesproken tekst (transcript):\n${input.transcript || "(niet beschikbaar)"}`,
    input.context ? `Wat de gebruiker in de app over zichzelf heeft ingevuld:\n${input.context}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  const response = await client.beta.messages.parse({
    model: "claude-opus-5-5",
    max_tokens: 16000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "medium", format: betaZodOutputFormat(Analysis) },
    system: SYSTEM,
    messages: [{ role: "user", content: userText }],
  });
  if (response.stop_reason === "refusal") throw new Error("De analyse werd geweigerd voor deze video.");
  if (!response.parsed_output) throw new Error("De analyse gaf geen bruikbaar resultaat. Probeer het opnieuw.");
  return response.parsed_output;
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if (req.method === "OPTIONS") return new Response(null, { headers: cors });
    const { pathname } = new URL(req.url);
    if (pathname === "/" && req.method === "GET") return json({ ok: true, app: "reeds" });
    if (pathname !== "/analyze" || req.method !== "POST") return json({ error: "Niet gevonden" }, 404);
    if (!env.APP_TOKEN || req.headers.get("x-reeds-token") !== env.APP_TOKEN) return json({ error: "Onjuiste app-code. Controleer de code in Instellingen." }, 401);

    let body: { url?: string; context?: string; caption?: string };
    try {
      body = await req.json();
    } catch {
      return json({ error: "Ongeldig verzoek" }, 400);
    }
    const url = String(body.url || "").trim();
    if (!isInstagramUrl(url)) return json({ error: "Dit is geen Instagram-link naar een reel of post." }, 400);

    try {
      const reel = await fetchReel(url, env);
      const caption = reel.caption || String(body.caption || "");
      if (!caption && !reel.transcript) return json({ error: "Er staat geen tekst of gesproken woord in deze video om te analyseren." }, 422);
      const analysis = await analyze({ url, caption, transcript: reel.transcript, owner: reel.owner, context: String(body.context || "").slice(0, 2000) }, env);
      return json({ url, caption, transcript: reel.transcript, owner: reel.owner, duration: reel.duration, thumb: reel.thumb, analysis });
    } catch (err) {
      if (err instanceof Anthropic.AuthenticationError) return json({ error: "Je Anthropic-sleutel klopt niet." }, 502);
      if (err instanceof Anthropic.RateLimitError) return json({ error: "Even te druk bij Claude. Probeer het over een minuut opnieuw." }, 503);
      if (err instanceof Anthropic.APIError) return json({ error: `Claude gaf een fout (${err.status}).` }, 502);
      return json({ error: err instanceof Error ? err.message : "Onbekende fout" }, 502);
    }
  },
};
