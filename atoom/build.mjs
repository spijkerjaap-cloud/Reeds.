// Bouwt index.html (installeerbare PWA) uit app.html.
import { readFileSync, writeFileSync } from "node:fs";
const src = readFileSync(new URL("./app.html", import.meta.url), "utf8");
const [head, body] = src.split("<!--BODY-->");
const html = `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#2F45D3">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Atoom">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
${head.trim()}
</head>
<body>
${body.trim()}
<script>if("serviceWorker" in navigator){addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))}</script>
</body>
</html>
`;
writeFileSync(new URL("./index.html", import.meta.url), html);
console.log("index.html gebouwd");
