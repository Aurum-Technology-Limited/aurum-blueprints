# Aurum Life Blueprints

Public catalog of **starter blueprints** for [Aurum Life](https://aurum-life.com).
The desktop app fetches `catalog.json` from this repo's `main` branch and lets users
seed their Life OS (PAPT: Pillars, Areas, Projects, Tasks) from one of these blueprints.

## Structure

- **`catalog.json`**: the catalog the app fetches. Wrapped form:
  `{ "blueprints": [ ...manifests ] }`. Generated, see below.
- **`blueprints/*.md`**: the three original starters (balanced-life, founder, student).
- **`blueprints/<pillar-id>/<area-id>.md`**: the blueprint library (see below).
- **`taxonomy/`**: the library's master lists of pillars and areas.
- **`scripts/`**: the validator and the catalog builder.
- **`GENERATION.md`**: the spec every library blueprint is written to.

## The blueprint library (branch `library/v1`, NOT merged)

A library of **2,500 blueprints**: 50 pillars covering personal life and work, each
with 50 areas, **one blueprint per area**. Each blueprint installs one pillar, that one
area and 50 full projects (purpose, milestones, success criteria, 3 to 6 starter tasks
with real recurring tasks where they fit, priority, and pointers to the app's built-in
templates).

- `taxonomy/pillars.json`: the 50 pillars (id, name, emoji, category, review cadence,
  description).
- `taxonomy/areas.json`: exactly 50 areas per pillar, with globally unique names (an
  installed area's title is a wikilink target and a folder name), a one-line
  description and persona tags. This is the list the generators consume.
- `GENERATION.md`: the per-area spec, quality bar and cost estimate.

**Status: unmerged, on purpose.** Anything on `main` is live in every user's
Marketplace, and the Marketplace today has no paging and renders every catalog entry
as a card. 2,500 more cards (and a catalog of a few megabytes) must wait until the app
pages and filters the catalog. Until then the library lives on `library/v1` only.
Never push library files to `main`.

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
per library file, with a `starterSummary` (pillar names, area, project and task
counts) and a `contentHash` (`sha256:<hex>` of the file bytes, the form the app's
integrity check accepts). Line endings are pinned to LF so the hash is stable.

## Adding a hand-written starter (main)

1. Create `blueprints/<id>.md` with a `starter_structure:` frontmatter block
   (`pillars` > `areas` > `projects` > `tasks`).
2. Add a matching entry to `catalog.json` (`id`, `name`, `description`, `category`,
   `version`, `path`, and a `starterSummary` whose `totalAreas` / `totalProjects`
   match the file), then run `npm run validate`.
3. Commit to `main`. The app picks it up on the next catalog refresh.
