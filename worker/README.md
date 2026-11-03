# Reeds-server: video-analyse instellen

De app stuurt een Instagram-link naar deze kleine server. De server haalt de reel op
(onderschrift + gesproken tekst via Apify), laat Claude de stappen eruit halen en
stuurt dat terug naar de app. Alles is in te stellen vanaf je iPhone.

Kosten: Cloudflare gratis. Apify ongeveer €0,01–0,03 per video (je krijgt maandelijks
gratis tegoed). Claude ongeveer €0,02–0,04 per video.

## 1. Vijf sleutels verzamelen

| Naam | Waar | Hoe |
|---|---|---|
| `ANTHROPIC_API_KEY` | platform.claude.com | Account maken → Billing: tegoed toevoegen (€5 is genoeg voor ruim 100 video's) → API Keys → Create key |
| `APIFY_TOKEN` | console.apify.com | Account maken → Settings → API & Integrations → kopieer je Personal API token |
| `CLOUDFLARE_ACCOUNT_ID` | dash.cloudflare.com | Account maken → Workers & Pages → rechts staat je Account ID |
| `CLOUDFLARE_API_TOKEN` | dash.cloudflare.com → My Profile → API Tokens | Create Token → sjabloon **Edit Cloudflare Workers** → Create |
| `APP_TOKEN` | zelf verzinnen | Een lang wachtwoord, bijv. 4 willekeurige woorden. Dit vul je straks ook in de app in. |

## 2. Sleutels in GitHub zetten

Repo op github.com → **Settings → Secrets and variables → Actions → New repository secret**.
Voeg alle vijf toe met precies de namen uit de tabel.

## 3. Server live zetten

Repo → **Actions → Deploy Reeds-server → Run workflow**. (Of laat Claude een commit pushen.)
Na ±1 minuut staat in de log een adres zoals `https://reeds.<jouwnaam>.workers.dev`.

## 4. App koppelen

App → Vandaag → **Instellingen → Video-analyse**: vul het server-adres en je `APP_TOKEN` in
→ **Test verbinding**.

## Gebruik

Instagram → **Deel → Link kopiëren** → open Reeds → **Plak Instagram-link**.

## Technisch

- `src/index.ts` — `POST /analyze { url, context }` met header `x-reeds-token`.
- Ophalen: Apify-actor `apify/instagram-reel-scraper` met `includeTranscript`.
- Analyse: Claude (`claude-opus-5-5`, effort medium) met gestructureerde output. Server-side
  fallback staat aan: als het model een verzoek afwijst, probeert de API het automatisch met
  een ander model.
- Lokaal: `npm i`, maak `.dev.vars` met de drie sleutels, `npx wrangler dev`.
