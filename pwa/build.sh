#!/usr/bin/env bash
# Bouwt docs/ (GitHub Pages) uit pwa/app.html: voegt doctype, PWA-head en service worker toe.
set -e
cd "$(dirname "$0")"
OUT=../docs
mkdir -p "$OUT"
{
  echo '<!doctype html><html lang="nl"><head><meta charset="utf-8">'
  echo '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
  echo '<link rel="manifest" href="manifest.webmanifest"><meta name="theme-color" content="#2350E6">'
  echo '<link rel="apple-touch-icon" href="apple-touch-icon.png"><meta name="apple-mobile-web-app-capable" content="yes">'
  echo '<meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Reeds">'
  echo '<meta name="apple-mobile-web-app-status-bar-style" content="default"><link rel="icon" href="icon-192.png">'
  echo '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}</style>'
  echo '</head><body>'
  cat app.html
  echo '<script>if("serviceWorker" in navigator){addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))}</script>'
  echo '</body></html>'
} > "$OUT/index.html"
cp manifest.webmanifest sw.js icon.svg "$OUT/"
