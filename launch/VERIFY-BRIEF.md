# Verification brief: publish wave 2 (2026-11-09)

The founder's instruction: "do what's necessary for us to legally not be liable but also publish as much verified, grounded in existing professional data blueprints as possible; fix any issues you find along the way."

Work in the worktree `/Users/marcymoo/Downloads/Code/Aurum_Projects/abl-publish` (branch `publish/wave-2`, based on `origin/main`). Several agents edit this tree at the same time, each on its own set of blueprint files. **Touch only the files assigned to you.** Do not commit, push, switch branches, or edit `launch.json`, `catalog.json`, `scripts/`, `taxonomy/` or other agents' files. Do not run `node scripts/add-notices.mjs` in write mode (another agent owns notices). Never edit an existing "Before you start: …" notice paragraph.

## What each blueprint is
`blueprints/<pillar>/<area>.md` (id `<pillar>.<area>`): YAML front matter plus an area → projects → tasks plan, 70–100 KB each. Read `GENERATION.md` and `scripts/validate.mjs` first to learn the format and what the validator enforces (for example, pillar and area descriptions must equal `taxonomy/` word for word). After editing a file, run `node scripts/validate.mjs` (it validates the whole library; it must print OK) and fix anything you broke.

## Your job per blueprint
Decide **publish** (verified as is), **fixed** (you corrected it, now publishable) or **hold** (cannot be made safe/grounded without a professional review), and log it.

1. **Ground the claims.** Extract the claim-bearing statements: numbers with units, doses, thresholds, ages, frequencies, percentages, rates, limits, deadlines, named laws/regulations/standards, exam structures (sections, pass marks, fees), tax rules, named guidelines, and any "always/never/must" instruction with consequences. A quick way: grep for digits, `%`, `mg`, `kcal`, `£|\$|€`, `law|act|regulation|code|rule|tax|IRS|HMRC|FCA|SEC|NHS|NICE|CDC|WHO`, `must|never|always`. Verify each against an authoritative, current source with WebSearch/WebFetch: official bodies first (NHS/NICE, CDC/NIH, WHO, national dietary guidelines, AAP/ACOG/RCOG, gov.uk, IRS/HMRC, SEC/FINRA/FCA, CFA Institute, the official exam or licensing body, national standards bodies), then established professional societies. You don't need a source for every sentence; prioritise claims where being wrong could hurt someone or cost them money or legal standing.
2. **Fix what's wrong or risky**, keeping the plan's voice and structure:
   - Correct wrong or outdated facts (cite the source in your log).
   - Jurisdiction-specific rules (tax, benefits, legal deadlines, licensing) must say which country they apply to, or be generalised to "check the rule in your country" with the official body named.
   - Remove individual dosing, treatment, legal-strategy or specific investment instructions (e.g. "take 2,000 IU", "buy X", "file under section Y to avoid Z"). Replace with "agree the dose/approach with your doctor/lawyer/adviser" style tasks.
   - Where a task involves a real risk (medication, diet changes for a condition, pregnancy, children's health, hard training, large financial decisions, signing legal documents, safety-critical work), make sure a task or note tells the user to check with the right qualified professional first. Mental-health and relationship-safety plans must signpost crisis help.
   - Dieting/weight/calorie-tracking plans need an eating-disorder caution (a short note telling people with a history of disordered eating to talk to a doctor first, and to stop if tracking becomes distressing), like the keto and intermittent-fasting plans already have.
   - Remove anything that promises outcomes ("guaranteed", "will cure", "risk-free", guaranteed returns).
   - Keep edits minimal and textual; don't regenerate whole files.
3. **Hold** when it can't be made safe without a professional: clinical treatment of serious illness, crisis/self-harm, eating disorders, addiction treatment, medication tapering, domestic-abuse safety, securities offerings/syndications, safety-critical engineering calculations, regulated professional duties where errors carry legal liability. Also hold anything you find is an unfixable duplicate of a live blueprint, thin, or not "a goal one person owns".

## Log (required)
Write `launch/verification/<your-name>.json`: a JSON array of
`{"id": "<pillar>.<area>", "status": "publish|fixed|hold", "reason": "<one line>", "changes": ["<one line each>"], "sources": ["<url>", ...]}`
for every blueprint assigned to you. Write the file incrementally (after each blueprint or small batch) so progress isn't lost.

## Final report (short)
Counts of publish / fixed / hold, the most important fixes (a handful of examples with sources), every hold with its reason, and confirmation that `node scripts/validate.mjs` prints OK.
