# Direktiv: Säkerhetsmodellen

## Clear objective
Säkerställa att Data Room / LP Access är säkra och att inga inloggningsuppgifter ligger i koden.

## Regler (HÅRDA)

1. **INGA credentials, lösenord eller hash i koden/bundlen.** Statisk kod är alltid läsbar för alla. Kontrollera efter varje build:
   `grep -c "<eventuell credential>" dist/assets/index-*.js` → måste vara 0.
2. **Riktig auth = Cloudflare Access** (edge-nivå) som skyddar `/dataroom*` och `/lp-access*`.
   Setup: `docs/SECURE_ACCESS.md`. Kräver användarens Cloudflare-konto + DNS-byte.
3. **`config/access.ts` innehåller ENDAST `DEMO_MODE`**:
   - `true` → demo-login (passkey `ROIALS2026`, tydligt märkt badge). Bara för visning.
   - `false` → portalen visas direkt; Cloudflare Access är grinden.
4. **Känsliga dokument** får inte ligga i `public/dataroom/` om `/dataroom*` inte är skyddat av Access — statiska filer är publikt nedladdningsbara.

## Definition of Done
- `grep` på bundlen: 0 credentials
- `DEMO_MODE` korrekt satt för avsett läge
- (Om Access aktiverat) `/dataroom` kräver inloggning i inkognitofönster

## Edge cases
- Demo-passkeyn `ROIALS2026` finns i bundlen — det är OK bara när demo-läget är på och tydligt märkt.
- Kontaktmejlen (`jonas@roialscapital.com`) i LP-portalen är publik — inte en credential.
- Client-side hash-kontroll (tidigare SHA-256) är BORTTAGEN — återinför den aldrig som "säkerhet".

## Fallback
- Någon lägger in credentials i koden → ta bort dem omedelbart + flagga till Jonas.
- Access inte aktiverat än → håll `DEMO_MODE = true` och lägg inga riktiga känsliga dokument i `public/`.

## Graceful failure
- Om Access inte kan aktiveras: dokumentera status i `docs/SECURE_ACCESS.md`, håll demo tydligt märkt.
