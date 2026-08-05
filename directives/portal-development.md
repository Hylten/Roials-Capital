# Direktiv: Portal-utveckling

## Clear objective
Förändra eller utöka sidorna i portalen (Data Room, LP Access, Login, navigering) utan att bryta befintlig funktionalitet.

## Input spec
- Vad som ska ändras (sida/komponent) + varför
- Befintlig arkitektur: `App.tsx` (View-typ, `viewToPath`/`pathToView`/`seoTitles`, `handleViewChange`, render-block), `components/` (DataRoom, LpPortal, Login, Header, Footer)

## Step-by-step
1. **Läs först:** relevanta delar av `App.tsx` + komponenten du ska ändra (arkitekturen är historia-baserad — alla views deklareras i View-typen och mappas i tre tabeller)
2. **Planera:** ny view? → lägg till i View-typen + alla tre mappningar + seoTitles + render-block
3. **Bygg:** ändra/ skapa komponent (designspråk: obsidian/platinum/oldgold, font-light, uppercase tracking)
4. **Verifiera lokalt:** `npm run build` (tsc = sanning) + `npx vite preview` + klicka igenom flödet i browser (login → portal → mappar → sök → logout)
5. **Push:** git add/commit/push → Actions deployar
6. **Verifiera live:** polla URL:er till 200, testa direktlänkar (404-status + SPA-innehåll är FÖRVÄNTAT från GitHub Pages — browser funkar)

## Definition of Done
- Build passerar (tsc + vite + SEO + 404-kopia)
- Flödet verifierat i riktig browser (inte bara "borde funka")
- Pushat + live-verifierat

## Edge cases
- Direkt-URL (t.ex. `/dataroom`) → GitHub Pages ger 404-status men SPA-innehåll → funkar i browser. CURL 404 ≠ trasigt.
- Oinloggad vid `/dataroom` i demo-läge → Login visas. Demo av → portalen direkt (Cloudflare Access är grinden).
- `sessionStorage` nollställs mellan browser-sessioner → logga in igen vid test.
- Nya views måste finnas i ALLA tre mappningarna (viewToPath, pathToView, seoTitles) + View-typen — annars tsc-fel eller fel routing.

## Fallback
- tsc-fel → läs exakt felrad, fixa, bygg om. Vanligaste: saknad mapping, fel prop-typ, trasig JSX.
- Routing-bugg → spåra `handleViewChange` → `setCurrentView` → render-block.

## Graceful failure
- Vid osäkerhet om ändringen: bygg + testa lokalt FÖRST, pusha aldrig obekräftad kod.
