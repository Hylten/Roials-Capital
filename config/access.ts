// ═══════════════════════════════════════════════════════════════
//  ÅTKOMSTKONFIGURATION — Roials Capital LP Access / Data Room
// ═══════════════════════════════════════════════════════════════
//  DEMO_MODE = true  → vilken e-post som helst + passkey ROIALS2026 (demo)
//  DEMO_MODE = false → ENDAST kontona i CREDENTIALS nedan kan logga in
//
//  Lägg till konto:  node scripts/hash-passkey.mjs "ditt-losenord"
//  → klistra in hash-värdet som passhash + välj roll:
//     'lp'       → hamnar i LP-portalen
//     'dataroom' → hamnar i Data Room
// ═══════════════════════════════════════════════════════════════

export const DEMO_MODE = true;

export interface AccessCredential {
    email: string;
    passhash: string;
    role: 'lp' | 'dataroom';
    label: string;
}

export const CREDENTIALS: AccessCredential[] = [
    {
        email: 'jonas@roialscapital.com',
        passhash: '09b1147b9ec7c279550e248bef053dd359ead460412eb50e747dcc1d7d38b7b3',
        role: 'dataroom',
        label: 'Managing Partner',
    },
];
