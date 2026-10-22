// Shared helpers for the library tooling. Each one mirrors a specific piece of
// the desktop app (Aurum-Life-Desktop), named in its comment, so a blueprint
// that passes here is read by the app exactly as it is read here.

import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

export const REPO_ROOT = fileURLToPath(new URL("../..", import.meta.url));
export const BLUEPRINTS_DIR = join(REPO_ROOT, "blueprints");
export const CATALOG_PATH = join(REPO_ROOT, "catalog.json");

export function readJson(rel) {
  return JSON.parse(readFileSync(join(REPO_ROOT, rel), "utf8"));
}

/** Every `.md` under blueprints/, as forward-slashed repo-relative paths, sorted. */
export function listBlueprintFiles() {
  const out = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) walk(full);
      else if (name.endsWith(".md")) out.push(relative(REPO_ROOT, full).split(sep).join("/"));
    }
  };
  walk(BLUEPRINTS_DIR);
  return out.sort();
}

/**
 * A library file lives one folder down: blueprints/<pillar-id>/<area-id>.md.
 * The three original starters live at blueprints/<id>.md and are legacy.
 */
export function libraryPathParts(rel) {
  const m = /^blueprints\/([a-z0-9-]+)\/([a-z0-9-]+)\.md$/.exec(rel);
  return m ? { pillarId: m[1], areaId: m[2] } : null;
}

/**
 * Extract the frontmatter YAML the way the app does
 * (src-tauri/src/blueprints/starter.rs::parse_starter_structure): trim leading
 * whitespace, require a leading `---`, then cut at the FIRST "\r\n---" or
 * "\n---" after it. Anything at column 0 starting with `---` inside the
 * frontmatter therefore ends it early, which is why we emulate the cut rather
 * than use a generic frontmatter parser.
 */
export function extractFrontmatter(text) {
  const trimmed = text.replace(/^\s+/, "");
  if (!trimmed.startsWith("---")) return null;
  const search = trimmed.slice(3);
  let end = search.indexOf("\r\n---");
  if (end < 0) end = search.indexOf("\n---");
  if (end < 0) return null;
  const yaml = trimmed.slice(3, end + 3).trim().replace(/\r/g, "");
  const body = trimmed.slice(3 + end).replace(/^\r?\n---\r?\n?/, "");
  return { yaml, body };
}

/**
 * Parse YAML under both the 1.1 and 1.2 schemas and refuse when they differ.
 * The app parses with serde_yml (libyaml, 1.1 heritage), and an unquoted
 * `yes`, `no`, `on`, `08` or `1:30` means different things under the two
 * schemas. A file whose meaning depends on the parser is a bug waiting for a
 * dependency bump, so the difference itself is the error.
 */
export function parseYamlStrict(yaml) {
  const opts = { uniqueKeys: true, prettyErrors: true, maxAliasCount: 0 };
  const a = YAML.parse(yaml, { ...opts, version: "1.1" });
  const b = YAML.parse(yaml, { ...opts, version: "1.2" });
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    throw new Error("frontmatter means different things under YAML 1.1 and 1.2 (quote any yes/no/on/off, times or zero-padded numbers)");
  }
  return b;
}

/**
 * The card summary, computed exactly as manifest.rs::summarize_starter does
 * (pillar names, total areas, total projects). `totalTasks` is an additive
 * extra: StarterSummary does not deny unknown fields, so the app ignores it.
 */
export function summarizeStarter(structure) {
  const pillars = structure?.pillars ?? [];
  let totalAreas = 0;
  let totalProjects = 0;
  let totalTasks = 0;
  for (const p of pillars) {
    const areas = p.areas ?? [];
    totalAreas += areas.length;
    for (const a of areas) {
      const projects = a.projects ?? [];
      totalProjects += projects.length;
      for (const pr of projects) totalTasks += (pr.tasks ?? []).length;
    }
  }
  return { pillars: pillars.map((p) => p.name), totalAreas, totalProjects, totalTasks };
}

/** "sha256:<hex>" over the exact bytes on disk, the form verify_content_hash accepts. */
export function contentHash(rel) {
  const buf = readFileSync(join(REPO_ROOT, rel));
  return "sha256:" + createHash("sha256").update(buf).digest("hex");
}

/** Read a blueprint file and return {text, bytes, fm, body} or throw. */
export function loadBlueprint(rel) {
  const buf = readFileSync(join(REPO_ROOT, rel));
  const text = buf.toString("utf8");
  const ex = extractFrontmatter(text);
  if (!ex) throw new Error("no frontmatter (file must start with --- and close with a --- line)");
  const fm = parseYamlStrict(ex.yaml);
  if (!fm || typeof fm !== "object" || Array.isArray(fm)) throw new Error("frontmatter is not a mapping");
  return { text, bytes: buf.length, fm, body: ex.body };
}
