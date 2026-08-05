# Direktiv: Data Room-innehåll

## Clear objective
Lägga till, uppdatera eller ta bort dokument i Data Room (`roialscapital.com/dataroom`).

## Input spec
- Filen du vill publicera (PDF/DOCX/XLSX/MD/CSV) — ska ligga i `public/dataroom/`
- Metadata: namn, typ, datum, version, storlek, eventuell status (new/updated)

## Step-by-step
1. Lägg filen i `public/dataroom/` (serveras på `/dataroom/<filnamn>`)
2. Öppna `components/DataRoom.tsx` → hitta rätt mapp (10 st, ILPA-struktur)
3. Lägg till filraden med korrekt `type` (pdf/docx/xlsx/md/csv) + **`realPath: '/dataroom/<filnamn>'`**
   (utan `realPath` blir knappen bara en demo-notis)
4. Sätt `status: 'new'` (eller `'updated'`) om relevant
5. `npm run build` — måste passera (tsc + vite + SEO + 404-kopia)
6. `git add -A && git commit && git push origin main`
7. Verifiera live: `curl -s -o /dev/null -w "%{http_code}" https://roialscapital.com/dataroom/<filnamn>` → 200

## Definition of Done
- Filen är nedladdningsbar på `roialscapital.com/dataroom/<filnamn>` (HTTP 200)
- Download-knappen i Data Room är en riktig länk (verifierad i browser)
- Build passerar, commit pushat

## Edge cases
- Fil med mellanslag/åäö i namnet → använd URL-encoded/rena filnamn (bindestreck)
- Känsliga dokument → publikt nåbara som statiska filer; kräver Cloudflare Access på `/dataroom*`
- Filer som ska vara PRIVATA ska INTE läggas i `public/` — de hamnar i en annan lösning

## Fallback
- Om build misslyckas → läs felet, fixa, bygg om (self-annealing). Oftast: fel typ-värde eller trasig JSX.

## Graceful failure
- Om filen inte ska publiceras än: lägg INTE in raden i DataRoom.tsx, behåll filen lokalt.
