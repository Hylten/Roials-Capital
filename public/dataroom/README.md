# Data Room — riktiga dokument

Lägg dina **äkta dokument** i den här mappen (`public/dataroom/`). De serveras sedan på
`roialscapital.com/dataroom/<filnamn>`.

## Så kopplar du ett dokument till Data Room

1. Lägg filen här, t.ex. `PPM_Fund_III.pdf`
2. Öppna `components/DataRoom.tsx`
3. Hitta dokumentet i listan och lägg till `realPath`:
   ```ts
   { name: 'PPM_Fund_III.pdf', type: 'pdf', date: '2026-01-20', version: '2.1', size: '2.4 MB', realPath: '/dataroom/PPM_Fund_III.pdf' }
   ```
4. Bygg + pusha (`npm run build` → git commit → git push)

Då blir Download-knappen en **riktig nedladdning** istället för demo-notisen.

## Så lägger du till ett helt nytt dokument

1. Skapa filen här
2. Lägg till en rad i rätt mapp i `components/DataRoom.tsx` (name/type/date/version/size + realPath)
3. Bygg + pusha

## Säkerhet

Filerna i den här mappen är publikt tillgängliga på webben (statisk hosting).
Känsliga dokument bör ligga bakom riktig auth (t.ex. Cloudflare Access) — kontakta Jonas för det.
