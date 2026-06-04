#!/bin/bash
# Hämtar och sparar Roials Capital-bilder lokalt. Tar inte bort befintliga filer vid fel.

set -euo pipefail
DIR="$(cd "$(dirname "$0")/.." && pwd)/public/assets"
mkdir -p "$DIR"

LION_URL="https://i.postimg.cc/rFZDjGDT/Lion-King-ROIALS-Chat-GPT-Image-Mar-26-2025-09-42-11-AM-removebg-preview.png"
MOUNTAIN_URL="https://i.postimg.cc/0y2p2G4p/ivo-ivanov-c-F72u29mc-Ao-unsplash.jpg"

download() {
  local url="$1"
  local dest="$2"
  local tmp="${dest}.tmp"
  echo "→ Hämtar $(basename "$dest")..."
  if curl -fsSL --retry 5 --retry-delay 2 -o "$tmp" "$url"; then
    mv "$tmp" "$dest"
    echo "  ✓ Sparad: $dest ($(wc -c < "$dest") bytes)"
  else
    rm -f "$tmp"
    if [[ -f "$dest" ]]; then
      echo "  ⚠ Misslyckades — befintlig fil behålls: $dest"
    else
      echo "  ✗ Misslyckades — ingen fil att ersätta: $dest"
      return 1
    fi
  fi
}

download "$LION_URL" "$DIR/lion.png"
download "$MOUNTAIN_URL" "$DIR/mountain-bg-postimg.jpg" || true

if [[ ! -f "$DIR/mountain-bg.jpg" ]]; then
  echo "→ mountain-bg.jpg saknas, hämtar Unsplash-reserv..."
  curl -fsSL -o "$DIR/mountain-bg.jpg" \
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85"
fi

echo "Klart."
