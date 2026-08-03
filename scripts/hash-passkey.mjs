#!/usr/bin/env node
/* Skapa SHA-256-hash för passkey i config/access.ts
   Användning: node scripts/hash-passkey.mjs 'ditt-lösenord' */
import { createHash } from 'crypto';

const pass = process.argv[2];
if (!pass) {
  console.error('Ange lösenord: node scripts/hash-passkey.mjs "ditt-losenord"');
  process.exit(1);
}
console.log(createHash('sha256').update(pass).digest('hex'));
