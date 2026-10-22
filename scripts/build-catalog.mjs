#!/usr/bin/env node
// Build catalog.json (wrapped form) from blueprints/**/*.md.
//
//   node scripts/build-catalog.mjs          rewrite catalog.json
//   node scripts/build-catalog.mjs --check  exit 1 if catalog.json is stale
//
// Legacy entries (blueprints/<id>.md, the original three starters) are kept
// as they are, first and in their existing order: they predate the library and
// their hand-written fields (category "starter", copy) are what users see
// today. Library entries (blueprints/<pillar-id>/<area-id>.md) are generated
// from each file's own frontmatter, sorted by id, so the catalog is a pure
// function of the files and two runs produce identical bytes.

import { readFileSync, writeFileSync } from "node:fs";
import {
  CATALOG_PATH,
  contentHash,
  libraryPathParts,
  listBlueprintFiles,
  loadBlueprint,
  summarizeStarter,
} from "./lib/blueprint.mjs";

const check = process.argv.includes("--check");

const existingText = readFileSync(CATALOG_PATH, "utf8");
const existing = JSON.parse(existingText);
const existingList = Array.isArray(existing) ? existing : existing.blueprints ?? [];

// Keep every entry that is not a library file.
const legacy = existingList.filter((m) => !libraryPathParts(m.path ?? ""));

const library = [];
const failures = [];
for (const rel of listBlueprintFiles()) {
  if (!libraryPathParts(rel)) continue;
  try {
    const { fm } = loadBlueprint(rel);
    // Field order follows types.rs::BlueprintManifest so diffs read naturally.
    library.push({
      id: fm.id,
      name: fm.name,
      description: fm.description,
      category: fm.category,
      tags: fm.tags ?? [],
      version: fm.version,
      path: rel,
      author: fm.author,
      starterSummary: summarizeStarter(fm.starter_structure),
      contentHash: contentHash(rel),
    });
  } catch (e) {
    failures.push(`${rel}: ${e.message}`);
  }
}
if (failures.length) {
  console.error("Could not read these blueprints (fix them, then rebuild):");
  for (const f of failures) console.error(`  x ${f}`);
  process.exit(1);
}
library.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));

const out = JSON.stringify({ blueprints: [...legacy, ...library] }, null, 2) + "\n";

if (check) {
  if (out !== existingText) {
    console.error("catalog.json is stale: run `npm run build:catalog` and commit the result.");
    process.exit(1);
  }
  console.log(`catalog.json is current (${legacy.length} legacy + ${library.length} library entries)`);
} else {
  writeFileSync(CATALOG_PATH, out);
  console.log(`catalog.json written: ${legacy.length} legacy + ${library.length} library entries, ${Buffer.byteLength(out)} bytes`);
}
