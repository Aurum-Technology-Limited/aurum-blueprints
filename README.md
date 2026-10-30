# Aurum Life Blueprints

Public catalog of **starter blueprints** for [Aurum Life](https://aurum-life.com).
The desktop app fetches `catalog.json` from this repo's `main` branch and lets users
seed their Life OS (PAPT: Pillars, Areas, Projects, Tasks) from one of these blueprints.

## Structure

- **`catalog.json`**: the catalog the app fetches. Wrapped form:
  `{ "blueprints": [ ...manifests ] }`. Generated, see below.
- **`launch.json`**: the ids of the library blueprints that are live. Only these go
  into `catalog.json` (and from there into the Marketplace registry); every other
  file is still validated and waits, ready to publish by adding its id.
- **`blueprints/*.md`**: the three original starters (balanced-life, founder, student).
- **`blueprints/<pillar-id>/<area-id>.md`**: the blueprint library (see below).
- **`taxonomy/`**: the library's master lists of pillars and areas.
- **`scripts/`**: the validator and the catalog builder.
- **`GENERATION.md`**: the spec every library blueprint is written to.

## The blueprint library

A library of up to **3,200 blueprints**: 64 pillars covering personal life and work
(the founding 50; Caribbean School Exams, Professions & Trades and Caribbean Life &
Diaspora; and eleven for certifications, engineering, finance, practice ownership,
family office and agriculture), each with 50 areas, **one blueprint per area**. 12 pillars are complete
(600 areas, 30,000 projects); the rest of the taxonomy is a backlog. Each blueprint
installs one pillar, that one area and 50 full projects (purpose, milestones, success
criteria, 3 to 6 starter tasks with real recurring tasks where they fit, priority, and
pointers to the app's built-in templates).

- `taxonomy/pillars.json`: the 64 pillars (id, name, emoji, category, review cadence,
  description).
- `taxonomy/areas.json`: exactly 50 areas per pillar, with globally unique names (an
  installed area's title is a wikilink target and a folder name), a one-line
  description and persona tags. This is the list the generators consume.
- `GENERATION.md`: the per-area spec, quality bar and cost estimate.

**Status: merged to `main`, not yet in the Marketplace registry.** The app lists the
Marketplace registry first and reads this repo's `catalog.json` only when the
registry is empty or unreachable. Builds before aurum-life-desktop #554 also read
just the first 100 registry rows and render every card at once. So the library
reaches users in two steps: ship a release with #554 (registry paging, a paged
grid, a pillar filter and multi-word search), then re-run
`scripts/seed-marketplace-registry.sh` in that repo to publish these entries.

## Working on the library

```bash
npm install
npm run build:catalog   # regenerate catalog.json from the blueprint files
npm run validate        # taxonomy + every blueprint + catalog.json; exits 1 on error
npm run check           # both, failing if catalog.json is stale
```

The validator checks the rules the app itself applies (id grammar, filename-safe
names, the recurrence grammar, trigger kinds, built-in template ids, the
`starterSummary` the app computes) and the library's house rules from
`GENERATION.md`. `scripts/data/app-contract.json` is a copy of the app's vocabularies
with the commit it was copied from; refresh it when the app adds a template, trigger
kind or recurrence form.

`build-catalog` keeps the three original entries as they are and generates one entry
per library file listed in `launch.json`, with a `starterSummary` (pillar names, area, project and task
counts) and a `contentHash` (`sha256:<hex>` of the file bytes, the form the app's
integrity check accepts). Line endings are pinned to LF so the hash is stable.

## Adding a hand-written starter (main)

1. Create `blueprints/<id>.md` with a `starter_structure:` frontmatter block
   (`pillars` > `areas` > `projects` > `tasks`).
2. Add a matching entry to `catalog.json` (`id`, `name`, `description`, `category`,
   `version`, `path`, and a `starterSummary` whose `totalAreas` / `totalProjects`
   match the file), then run `npm run validate`.
3. Commit to `main`. The app picks it up on the next catalog refresh.

## Professional-advice notices

Blueprints about health, wellbeing, money or law carry a notice that they are
general information, not medical, psychological, financial or legal advice. It is
added to the end of the first project's description (so it is installed into the
user's files beside the plan) by `node scripts/add-notices.mjs`, which decides the
notice from the pillar or, for single areas in other pillars, from a short list in
the script. `node scripts/add-notices.mjs --check` fails if any of them is missing;
run it after adding or regenerating a blueprint in those subjects.
