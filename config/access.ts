// ═══════════════════════════════════════════════════════════════
//  ÅTKOMSTKONFIGURATION — Roials Capital LP Access / Data Room
// ═══════════════════════════════════════════════════════════════
//  SÄKERHETSMODELL (viktigt):
//  Riktig säkerhet hanteras AV Cloudflare Access (edge-nivå) — INGA
//  inloggningsuppgifter eller hash får någonsin ligga i denna kod,
//  eftersom all statisk kod är läsbar för alla.
//
//  DEMO_MODE = true  → sajten visar sin egen demo-login
//                      (vilken e-post som helst + passkey ROIALS2026).
//                      ENDAST för visning/demo — inte säkert.
//  DEMO_MODE = false → sajten förutsätter att Cloudflare Access redan
//                      autentiserat besökaren (se docs/SECURE_ACCESS.md).
//                      Då visas portalen direkt, utan egen login.
// ═══════════════════════════════════════════════════════════════

export const DEMO_MODE = true;
