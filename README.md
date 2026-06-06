# Aurum Life — Blueprints

Public catalog of **starter blueprints** for [Aurum Life](https://aurum-life.com).
During onboarding the desktop app fetches `catalog.json` from this repo and lets
new users seed their Life OS (PAPT — Pillars → Areas → Projects → Tasks) from one
of these templates.

## Structure
- **`catalog.json`** — the catalog the app fetches (raw, `main` branch). Wrapped
  form: `{ "blueprints": [ ...manifests ] }`.
- **`blueprints/*.md`** — one markdown file per blueprint. Starter blueprints
  declare their PAPT seed in a `starter_structure:` frontmatter block.

## Adding a blueprint
1. Create `blueprints/<id>.md` with a `starter_structure:` frontmatter block
   (`pillars → areas → projects → tasks`).
2. Add a matching entry to `catalog.json` (`id`, `name`, `description`,
   `category: "starter"`, `version`, `path`, and a `starterSummary` whose
   `totalAreas` / `totalProjects` match the file).
3. Commit to `main`. The app picks it up on the next catalog refresh.
