# Riktig säkerhet för Data Room & LP Access — Cloudflare Access

## Varför

Statisk kod (GitHub Pages) kan alltid läsas av vem som helst. Därför får **inga
inloggningsuppgifter ligga i koden**. Riktig säkerhet sker vid **kanten** — hos
Cloudflare, INNAN trafiken når sajten. Cloudflare Access är gratis (upp till 50
användare) och ger e-post-OTP-inloggning (kod skickas till e-post) eller
Google/Microsoft-inloggning.

När detta är på plats:
- `/dataroom/*` och `/lp-access/*` går INTE att nå utan inloggning
- Även dokumentfilerna (`/dataroom/*.md` m.m.) skyddas — ingen kan ladda ner utan auth
- Inga credentials finns i koden — inget att "läsa ut"

## Steg (görs en gång, ~20 min)

### 1. Skapa Cloudflare-konto + lägg in domänen
1. Gå till https://dash.cloudflare.com/sign-up — skapa konto (gratis)
2. "Add a site" → skriv `roialscapital.com` → välj **Free** plan
3. Cloudflare visar **två nameservers** (t.ex. `abc.ns.cloudflare.com`)
4. Gå till din domänregistrar (där du köpte domänen) → ändra nameservers till dessa
5. Vänta tills Cloudflare visar "Active" (kan ta 5 min – 24 h)

### 2. Skydda dataroom-sökvägarna med Access
1. Cloudflare Dashboard → **Zero Trust** (eller access.cloudflare.com) → **Access → Applications**
2. **Add an application** → Self-hosted
3. Application domain: `roialscapital.com` — och i "Path" fyll i:
   - `/dataroom*`
   - `/lp-access*`
   - (lägg båda som två rader)
4. Policy (Add a policy):
   - Policy name: t.ex. "Investors"
   - Action: **Allow**
   - Include: **Emails** → lägg till `jonas@roialscapital.com` (och ev. fler investerare)
5. Save. Klart!

### 3. Slå av demo-läget
- Öppna `config/access.ts` i detta repo
- Sätt `DEMO_MODE = false`
- Bygg + pusha (`npm run build` → git commit → git push)

Nu: besök `roialscapital.com/dataroom` → Cloudflare ber dig logga in (e-post-kod)
→ du kommer in i Data Room. Utan inloggning: blockerad.

## Testa

1. Öppna `https://roialscapital.com/dataroom` i ett privat fönster (inkognito)
2. Du ska mötas av Cloudflare-inloggning
3. Logga in med din e-post → koden skickas → inne

## Noteringar

- Dokument i `public/dataroom/` blir endast nåbara efter Access-inloggning
  (eftersom hela `/dataroom*`-sökvägen skyddas)
- Lägg till fler investerare: Zero Trust → Access → Applications → policyn → lägg
  till deras e-post
- Hela webbplatsen (hem, intelligence osv.) förblir öppen — bara dataroom skyddas
