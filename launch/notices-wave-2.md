# Notices for publish wave 2 (2026-11-08)

`scripts/add-notices.mjs` decides which "Before you start" notice each blueprint carries. This wave widens its subject map so every publishable pick in a health, money, law, physical-safety or regulated-profession subject gets one, adds two notice kinds, and strengthens the wording of all seven. Nothing has been written to blueprint files yet.

Not legal advice: this was prepared by an AI agent working as careful product counsel would, not by a lawyer. See "For a lawyer" below.

## How to apply (after the content agents finish)

```sh
node scripts/add-notices.mjs --list --ids launch/publish-list-2026-11-08.json   # preview, writes nothing
node scripts/add-notices.mjs                                                     # write
node scripts/add-notices.mjs                                                     # second run: must print "0 added or upgraded"
node scripts/add-notices.mjs --check                                             # must pass
npm run build:catalog && npm run check
```

The write edits about 840 files (320 new notices, 522 upgraded to the new wording). Upgrading changes the content hash of live blueprints too, so the production registry has to be re-seeded from the rebuilt catalog before those blueprints install again. Wave 2 needs a re-seed anyway, so do it once, after the write.

`--list` dry run on 2026-11-08: 320 add, 522 upgrade, 0 fail. A tested copy of 12 files (every kind, both add and upgrade, LF files) gave byte-minimal diffs, passed the validator's description rules, and a second run was a no-op.

## Script changes

- **Two new kinds.** `safety` is for hands-on physical work: farming, plant and site engineering, hazardous trades, emergency planning. `professional` is for regulated professional duties: engineering practice, owning a clinic, law firm, pharmacy or accounting firm, and banking and consulting compliance.
- **Stronger wording.** Every notice now says the plan is general information and not advice, that it does not replace a qualified person who knows your situation (or, for legal, "does not make anyone your lawyer"), that you should check with a qualified person in your country where rules differ, and what to do in an emergency where that applies. The financial notice adds that it recommends no product or deal, and that raising or managing other people's money is regulated. The legal notice adds "and anything you sign". The text is in `NOTICES` in the script.
- **Upgrades in place.** The five old wordings are kept in `LEGACY`. A blueprint that ends with an old wording gets that one line replaced, so no plan carries two notices. Re-running is still a no-op.
- **A safety net.** If a blueprint already carries a notice of a different kind from the one its subject now maps to, the script refuses to touch it and reports it as `FAIL` (none today).
- **`--list` / `--dry-run`** prints `ok | add | upgrade | FAIL`, the kind and the id for every blueprint, plus counts per kind. `--ids <file>` also counts the publishable set (`launch.json` plus tiers 1 to 3).
- **Area overrides can say "none".** `BY_AREA[id] = null` switches off a pillar default for an area where it does not fit.

## Counts per notice kind

Publishable set = 553 live (`launch.json`) + 635 picks (tiers 1 to 3) = 1,188.

| Set | medical | fitness | mental | financial | legal | safety | professional | no notice | total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Live (launch.json) | 27 | 50 | 15 | 81 | 39 | 15 | 2 | 324 | 553 |
| Tier 1 | 71 | 0 | 34 | 1 | 7 | 0 | 0 | 60 | 173 |
| Tier 2 | 0 | 0 | 0 | 30 | 3 | 0 | 0 | 76 | 109 |
| Tier 3 | 1 | 0 | 0 | 156 | 62 | 40 | 50 | 44 | 353 |
| **Wave-2 picks (T1 to T3)** | **72** | **0** | **34** | **187** | **72** | **40** | **50** | **180** | **635** |
| **All publishable** | **99** | **50** | **49** | **268** | **111** | **55** | **52** | **504** | **1,188** |

Across every library file, held ones included, 842 carry a notice: financial 361, legal 126, medical 110, professional 79, mental 60, safety 56, fitness 50.

New notices by set: 52 live blueprints that had none, 15 in Tier 1, 3 in Tier 2 and 172 in Tier 3. The rest of the 320 are held files.

## What maps where (beyond the existing pillar defaults)

Pillar defaults (unchanged): physical health and food are `medical`. Fitness is `fitness`. Mental wellbeing is `mental`. Personal finance, wealth, quant, fundraising and finance-accounting are `financial`. Real estate development is `legal`.

New pillar defaults:
- `family-office`: `financial`. Overrides: staff employment, estate and house managers, staff vetting, trustees, privacy, records, multiple residences, aircraft and yachts are `legal`; the security assessment is `safety`.
- `private-equity-vc`: `financial` (all 29 picks, including fund launch, syndicates, search funds and carry).
- `practice-ownership`: `professional`. Overrides: valuation, equipment finance, dashboard, WIP and lock-up, fee schedules and profit sharing are `financial`. Buying, selling, selling to a group, partner exit, succession, premises, hiring (associates, support staff, locums), indemnity, starting from scratch and setting up in the Caribbean are `legal`.
- `engineering-practice`: `professional`. Overrides: contractor safety (STOW), LNG, offshore, Point Lisas petrochemical, upstream oil and gas, petroleum and mining are `safety`.
- `agriculture`: `safety`. Overrides: budgets, finance and loans, insurance and grants are `financial`. Export compliance, contract farming, labour, land tenure, supermarket contracts and praedial larceny are `legal`. Extension services and wholesale market selling get none.

Area overrides:
- **Family and parenting.** `medical`: puberty talks (new), plus the five existing pregnancy and child-health areas. `mental`: dealing with bullying (new), plus teen mental health and neurodivergent child. `legal`: adoption, foster caring, co-parenting, blended families, parental leave, family emergency plan (guardianship wishes), SEN support and home education. `safety`: learner driver practice.
- **Relationships.** `medical`: intimacy and sex life. `mental`: couples counselling, rebuilding trust after infidelity, supporting a friend in crisis, getting over a breakup, dating again after loss, plus leaving an unhealthy relationship (existing). `financial`: money conversations as a couple. `legal`: moving in together, plus divorce (existing).
- **Career.** `legal`: flexible working requests, redundancy, toxic workplace exit, resignation and counteroffers, international relocation, non-executive board roles, plus workplace rights (existing). `financial`: late-career pivot (pensions).
- **Caribbean diaspora.** New: caring for parents back home is `medical`; retiring to the Caribbean is `financial`; remote work, business back home, students abroad, shipping barrels and food business abroad are `legal`; hurricane support is `safety`. Existing ones are unchanged.
- **Founding startups.** `legal`: incorporating, equity split, co-founder separation, acquiring a business, winding down, founder visa, layoffs, first ten hires, side project to company, naming, social enterprise, university spinout and advisor board. `financial`: runway, leaving a job to start up. `mental`: founder burnout. `safety`: hardware prototyping.
- **Professions and trades.** `safety`: electrician, plumbing, air conditioning and refrigeration, solar technician, heavy equipment, motor mechanic and carpentry. `legal`: healthcare jobs abroad.
- **Sales.** `legal`: cold calling and cold email (marketing-consent and call rules) and public-sector selling (procurement and anti-bribery rules).
- **Consulting.** `professional`: ethics and conflicts, expert network calls, donor-funded consultancies. `legal`: going independent, building a boutique, subcontracting.
- **Investment banking.** `medical`: health under banking hours. `professional`: wall-crossing and compliance. `financial`: bonus season.
- **Strategy and leadership.** `legal`: family business leadership.

All the known gaps in the brief are covered: co-parenting, adoption, foster caring, parental leave, family emergency plan, intimacy, puberty, couples counselling, infidelity, money conversations, every family-office and PE/VC pick, practice ownership and health under banking hours.

Left without a notice on purpose: everyday relationship, friendship and parenting logistics; software, data and product craft; sales technique; consulting and banking craft and career steps; exam and certification prep. None of these is advice in a regulated subject. The in-app line and the Terms (below) still cover them.

## Related changes outside this repo

- **In-app line** (aurum-life-desktop#637, draft). The line now shows in the preview dialog, the onboarding picker and once under the Marketplace grid (cards install without opening the preview). It reads: "Blueprints are general information, not medical, financial, legal or other professional advice. Check decisions that matter with a qualified professional." It is followed by a **Terms** link to aurum-life.com/terms. The #635 chat approval step already renders the same component, so it picks this up on rebase.
- **Terms** (aurum-life-www#82, draft). "Blueprints" becomes "Blueprints & templates". It adds: as-is, no professional relationship, the user's decisions, safety, AI-written and reviewed, what "Verified" means, other authors' responsibility, and what an install sets up. It still needs `npm run legal:stamp` on deploy day and a fresh 14-day notice for existing accounts.
- **Recommendation.** The card tooltip says "Verified by Aurum" for every first-party blueprint, because the seed sets `tier=verified` for all of them. The Terms now define "Verified" as "Aurum's own". Consider changing the tooltip to "Published by Aurum" so the label never reads as a promise of correctness.

## For a lawyer

- Whether a general notice is enough for the `professional` and `safety` plans in high-hazard fields (offshore, LNG, petrochemical, electrical), or whether those should stay held until a chartered engineer reviews them. The verification brief already holds safety-critical calculations.
- Whether the PE/VC fund-launch, syndicate and search-fund plans, and the fundraising pillar, are "financial promotion" or investment-advice activity in the UK, US or the Caribbean markets we target. The notice cannot cure that if they are.
- Whether consumer-protection law in the UK and EU limits how far the Terms can exclude liability for these plans for consumers.
- `README.md` still describes the notices as "medical, psychological, financial or legal". Update it to mention safety and professional duties when this script lands (README edits were out of scope for this pass).
