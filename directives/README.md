# Directives — Roials Capital Portal (Sarev DOE)

Operativlager enligt **Sarev Agentic Architect** (DOE). Alla AI-agenter som arbetar i
detta repo ska följa detta mönster.

## Hur du arbetar här (PTMRO — varje uppgift)

1. **Planning** — bryt ner målet i steg INNAN du agerar. 1% planeringsfel = stora avvikelser.
2. **Tools** — deterministiska skript för allt repetitivt (sortering, filtrering, exakta operationer). ALDRIG LLM-gissningar där kod räcker.
3. **Memory** — lagra inte allt i kontexten. Filerna i detta repo ÄR minnet.
4. **Reflection** — granska ditt eget arbete (bygget, verifieringen) INNAN du rapporterar "klart".
5. **Orchestration** — delegera delar som kan isoleras.

## Self-annealing (självläkande) — obligatoriskt

- Fel uppstår → LÄS felmeddelandet → diagnostisera → uppdatera direktivet/skriptet → försök igen.
- Varje ny edge case → uppdatera direktivet så samma fel ALDRIG uppstår igen.
- Reflektion före rapportering: verifiera med riktiga körningar (build + curl + browser), aldrig "borde funka".

## Token-regler

- Ladda directives **on-demand** — injicera inte hela innehållet i varje session.
- Sammanfatta ständigt. Dumpa aldrig rådata i kontexten.
- Repetitivt arbete → skript (största besparingen).

## Direktiv (ladda efter uppgift)

| Uppgift | Direktiv |
|---------|----------|
| Lägga till/ändra dokument i Data Room | `dataroom-content-update.md` |
| Bygga/förändra portalens sidor | `portal-development.md` |
| Säkerhet (auth, Cloudflare Access, credentials) | `security-model.md` |

## Definition of Done (gäller allt)

Klart = byggt, verifierat live (HTTP 200 + fungerande flöde i browser), pushat,
och direktivet uppdaterat med eventuella nya edge cases. Inte "skrivet".
