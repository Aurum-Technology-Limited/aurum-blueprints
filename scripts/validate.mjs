#!/usr/bin/env node
// Validate the blueprint library: the taxonomy, every blueprint .md, and
// catalog.json. Exits non-zero on any error. Warnings never fail the run.
//
//   node scripts/validate.mjs            validate everything
//   node scripts/validate.mjs --max 200  print up to 200 errors (default 60)
//
// The rules below are the app's own rules where the app has one (named in each
// comment, paths relative to Aurum-Life-Desktop/src-tauri/src) and the
// library's house rules (GENERATION.md) where it does not.

import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  REPO_ROOT,
  CATALOG_PATH,
  contentHash,
  libraryPathParts,
  listBlueprintFiles,
  loadBlueprint,
  readJson,
  summarizeStarter,
} from "./lib/blueprint.mjs";

const args = process.argv.slice(2);
const maxIdx = args.indexOf("--max");
const MAX_PRINT = maxIdx >= 0 ? Number(args[maxIdx + 1]) || 60 : 60;

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const contract = readJson("scripts/data/app-contract.json");
const TEMPLATE_BY_ID = new Map(contract.builtinTemplates.map((t) => [t.id, t]));
const TEMPLATE_BY_NAME = new Map(contract.builtinTemplates.map((t) => [t.name.toLowerCase(), t]));

// ── grammars ────────────────────────────────────────────────────────────────
// blueprints/manifest.rs forbids separators and Windows-reserved characters;
// the library pins the tighter grammar the founder chose.
const BLUEPRINT_ID_RE = /^[a-z0-9][a-z0-9._-]{0,63}$/;
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const SEMVER_RE = /^\d+\.\d+\.\d+$/;
// Area and pillar names become folder and file names (commands/blueprints.rs
// render_starter_files: 2-Areas/{pillar}/{area}.md, 3-Projects/{area}/...) AND
// wikilink titles ([[Area]] in every project's frontmatter), so they exclude
// path characters and wikilink syntax (# | [ ] ^).
const AREA_NAME_RE = /^[A-Za-z0-9][A-Za-z0-9 &'(),+-]{0,46}[A-Za-z0-9)]$/;
const PROJECT_NAME_RE = /^[A-Za-z0-9][A-Za-z0-9 &'(),+.%-]{2,78}[A-Za-z0-9)%]$/;
const WINDOWS_RESERVED = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;
const DASHES = /[–—]/;
const PERSONAS = new Set([
  "everyone", "student", "parent", "carer", "retiree", "homeowner", "renter", "athlete",
  "creative", "knowledge-worker", "manager", "founder", "small-business", "freelancer",
  "agency", "team", "enterprise", "nonprofit", "educator", "researcher", "engineer",
]);
const WEEKDAYS = new Set(["mon", "tue", "wed", "thu", "fri", "sat", "sun"]);

/** store/tasks.rs::validate_recurrence_pattern, verbatim in effect. */
function validRecurrence(p) {
  const s = p.trim().toLowerCase();
  if (["daily", "weekly", "monthly", "quarterly", "yearly"].includes(s)) return true;
  if (s.startsWith("weekly:")) {
    const days = s.slice(7);
    // store/tasks.rs::parse_weekday accepts the three-letter forms only.
    return days.length > 0 && days.split(",").every((d) => WEEKDAYS.has(d));
  }
  if (s.startsWith("monthly:")) {
    const n = Number(s.slice(8).trim());
    return Number.isInteger(n) && n >= 1 && n <= 31;
  }
  return false;
}

const isPlainObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
function onlyKeys(where, obj, allowed) {
  for (const k of Object.keys(obj)) if (!allowed.includes(k)) err(where, `unexpected key '${k}' (allowed: ${allowed.join(", ")})`);
}
function str(where, v, field, { min = 1, max = Infinity, oneLine = true } = {}) {
  if (typeof v !== "string") return err(where, `${field} must be a string`), false;
  if (v !== v.trim()) err(where, `${field} has leading or trailing whitespace`);
  if (v.length < min || v.length > max) err(where, `${field} length ${v.length} outside ${min}..${max}`);
  if (oneLine && /[\r\n]/.test(v)) err(where, `${field} must be one line`);
  if (DASHES.test(v)) err(where, `${field} contains an em or en dash`);
  return true;
}

// ── taxonomy ────────────────────────────────────────────────────────────────
const pillarsDoc = readJson("taxonomy/pillars.json");
const PILLARS = new Map();
{
  const where = "taxonomy/pillars.json";
  const list = pillarsDoc.pillars ?? [];
  if (list.length !== 50) err(where, `expected 50 pillars, found ${list.length}`);
  const names = new Set();
  for (const p of list) {
    const w = `${where} [${p.id}]`;
    onlyKeys(w, p, ["id", "name", "emoji", "category", "review_cadence", "description"]);
    if (!SLUG_RE.test(p.id ?? "") || p.id.length > 26) err(w, "id must be a slug of at most 26 chars");
    if (PILLARS.has(p.id)) err(w, "duplicate pillar id");
    if (!AREA_NAME_RE.test(p.name ?? "")) err(w, `name '${p.name}' is not filename and wikilink safe`);
    if (names.has(p.name?.toLowerCase())) err(w, "duplicate pillar name");
    names.add(p.name?.toLowerCase());
    if (!["personal", "business"].includes(p.category)) err(w, "category must be personal or business");
    if (!contract.pillarReviewCadences.includes(p.review_cadence)) err(w, `review_cadence must be one of ${contract.pillarReviewCadences.join(", ")}`);
    str(w, p.emoji, "emoji", { max: 16 });
    str(w, p.description, "description", { min: 80, max: 400 });
    PILLARS.set(p.id, p);
  }
}

// Names already taken outside the library: the app's 12 built-in blueprints
// and this repo's legacy starters. A library area with the same title would
// share a wikilink with them in any vault that installs both.
const RESERVED_AREA_NAMES = new Set(contract.builtinBlueprintAreaNames.map((n) => n.toLowerCase()));

const AREAS = new Map(); // `${pillarId}/${areaId}` -> area
const AREA_IDS = new Set();
const AREA_NAMES = new Map(); // lower name -> where
const areasPath = join(REPO_ROOT, "taxonomy/areas.json");
if (!existsSync(areasPath)) {
  err("taxonomy/areas.json", "missing");
} else {
  const doc = readJson("taxonomy/areas.json");
  const where = "taxonomy/areas.json";
  const byPillar = doc.pillars ?? {};
  for (const pid of Object.keys(byPillar)) if (!PILLARS.has(pid)) err(where, `unknown pillar '${pid}'`);
  for (const [pid] of PILLARS) {
    const list = byPillar[pid];
    if (!Array.isArray(list)) {
      err(where, `pillar '${pid}' has no area list`);
      continue;
    }
    if (list.length !== 50) err(where, `pillar '${pid}' has ${list.length} areas, expected 50`);
    for (const a of list) {
      const w = `${where} [${pid}/${a.id}]`;
      onlyKeys(w, a, ["id", "name", "description", "personas"]);
      if (!SLUG_RE.test(a.id ?? "") || a.id.length > 40) err(w, "id must be a slug of at most 40 chars");
      if (AREA_IDS.has(a.id)) err(w, "area id is not globally unique");
      AREA_IDS.add(a.id);
      if (`${pid}.${a.id}`.length > 64) err(w, "blueprint id pillar.area exceeds 64 chars");
      if (!AREA_NAME_RE.test(a.name ?? "") || /\s{2}/.test(a.name ?? "")) err(w, `name '${a.name}' is not filename and wikilink safe`);
      if (WINDOWS_RESERVED.test(a.name ?? "")) err(w, "name is a Windows reserved file name");
      const lower = (a.name ?? "").toLowerCase();
      if (AREA_NAMES.has(lower)) err(w, `area name '${a.name}' already used at ${AREA_NAMES.get(lower)}`);
      if (RESERVED_AREA_NAMES.has(lower)) err(w, `area name '${a.name}' is used by a built-in blueprint`);
      if ([...PILLARS.values()].some((p) => p.name.toLowerCase() === lower)) err(w, "area name equals a pillar name");
      AREA_NAMES.set(lower, `${pid}/${a.id}`);
      str(w, a.description, "description", { min: 40, max: 260 });
      if (!Array.isArray(a.personas) || a.personas.length < 1 || a.personas.length > 4) err(w, "personas must list 1 to 4 tags");
      else for (const t of a.personas) if (!PERSONAS.has(t)) err(w, `unknown persona '${t}'`);
      AREAS.set(`${pid}/${a.id}`, { ...a, pillarId: pid });
    }
  }
}

// ── blueprints ──────────────────────────────────────────────────────────────
const files = listBlueprintFiles();
const blueprintIds = new Map();
const fileInfo = new Map(); // rel -> { fm, bytes }
const projectNameCounts = new Map();

// Legacy starters first, so their area names join the reserved set.
for (const rel of files.filter((f) => !libraryPathParts(f))) {
  try {
    const { fm, bytes } = loadBlueprint(rel);
    fileInfo.set(rel, { fm, bytes });
    if (!BLUEPRINT_ID_RE.test(String(fm.id ?? ""))) err(rel, `id '${fm.id}' fails ${BLUEPRINT_ID_RE}`);
    if (blueprintIds.has(fm.id)) err(rel, `duplicate blueprint id (also ${blueprintIds.get(fm.id)})`);
    blueprintIds.set(fm.id, rel);
    for (const p of fm.starter_structure?.pillars ?? [])
      for (const a of p.areas ?? []) RESERVED_AREA_NAMES.add(String(a.name).toLowerCase());
  } catch (e) {
    err(rel, e.message);
  }
}
for (const [lower, where] of AREA_NAMES)
  if (RESERVED_AREA_NAMES.has(lower)) err(`taxonomy/areas.json [${where}]`, `area name collides with a legacy starter's area`);

const seenLibraryAreaNames = new Map();
for (const rel of files.filter((f) => libraryPathParts(f))) {
  const { pillarId, areaId } = libraryPathParts(rel);
  let loaded;
  try {
    loaded = loadBlueprint(rel);
  } catch (e) {
    err(rel, e.message);
    continue;
  }
  const { fm, bytes, text, body } = loaded;
  fileInfo.set(rel, { fm, bytes });
  validateLibraryFile(rel, pillarId, areaId, fm, bytes, text, body);
}

function validateLibraryFile(rel, pillarId, areaId, fm, bytes, text, body) {
  // Size: the whole body is fetched and parsed on preview and install.
  if (bytes >= 1024 * 1024) err(rel, `file is ${bytes} bytes; the limit is 1 MiB`);
  else if (bytes > 200 * 1024) warn(rel, `file is ${Math.round(bytes / 1024)} KiB; aim for under 120 KiB`);
  if (text.includes("\r")) err(rel, "CRLF line endings (the content hash would differ by platform)");
  if (DASHES.test(text)) err(rel, "contains an em or en dash");

  const pillar = PILLARS.get(pillarId);
  const area = AREAS.get(`${pillarId}/${areaId}`);
  if (!pillar) return err(rel, `folder '${pillarId}' is not a pillar in taxonomy/pillars.json`);
  if (!area) return err(rel, `'${areaId}' is not an area of '${pillarId}' in taxonomy/areas.json`);

  onlyKeys(rel, fm, ["id", "name", "description", "category", "version", "tags", "author", "starter_structure"]);
  const expectedId = `${pillarId}.${areaId}`;
  if (fm.id !== expectedId) err(rel, `id must be '${expectedId}' (got '${fm.id}')`);
  if (!BLUEPRINT_ID_RE.test(String(fm.id ?? ""))) err(rel, `id fails ${BLUEPRINT_ID_RE}`);
  if (blueprintIds.has(fm.id)) err(rel, `duplicate blueprint id (also ${blueprintIds.get(fm.id)})`);
  blueprintIds.set(fm.id, rel);
  if (fm.name !== area.name) err(rel, `name must equal the area name '${area.name}'`);
  str(rel, fm.description, "description", { min: 40, max: 240 });
  if (fm.category !== pillar.category) err(rel, `category must be '${pillar.category}' (the pillar's)`);
  if (!SEMVER_RE.test(String(fm.version ?? ""))) err(rel, "version must be MAJOR.MINOR.PATCH");
  if (fm.author !== "Aurum Technology") err(rel, "author must be 'Aurum Technology'");
  if (!Array.isArray(fm.tags) || fm.tags.length < 3 || fm.tags.length > 10) err(rel, "tags must list 3 to 10 entries");
  else {
    for (const t of fm.tags) if (typeof t !== "string" || !SLUG_RE.test(t)) err(rel, `tag '${t}' is not a slug`);
    if (!fm.tags.includes(pillarId) || !fm.tags.includes(areaId)) err(rel, "tags must include the pillar id and the area id");
    if (new Set(fm.tags).size !== fm.tags.length) err(rel, "duplicate tags");
  }
  if (!body.replace(/^\s+/, "").startsWith(`# ${area.name}\n`)) err(rel, `body must start with '# ${area.name}'`);

  const ss = fm.starter_structure;
  if (!isPlainObject(ss)) return err(rel, "starter_structure missing");
  onlyKeys(rel, ss, ["pillars", "templates", "automationRules"]);

  // Templates: built-in ids (life_os/builtin_templates.rs), bare or builtin:.
  const listed = new Set();
  if (ss.templates !== undefined) {
    if (!Array.isArray(ss.templates) || ss.templates.length > 8) err(rel, "templates must be a list of at most 8 ids");
    else
      for (const t of ss.templates) {
        const id = String(t).replace(/^builtin:/, "");
        if (!TEMPLATE_BY_ID.has(id)) err(rel, `unknown built-in template '${t}'`);
        if (listed.has(id)) err(rel, `template '${t}' listed twice`);
        listed.add(id);
      }
  }

  validateRules(rel, ss.automationRules);

  if (!Array.isArray(ss.pillars) || ss.pillars.length !== 1) return err(rel, "starter_structure.pillars must hold exactly one pillar");
  const p = ss.pillars[0];
  const pw = `${rel} pillar`;
  onlyKeys(pw, p, ["name", "emoji", "description", "pillarFrontmatter", "areas"]);
  if (p.name !== pillar.name) err(pw, `name must be '${pillar.name}'`);
  if (p.emoji !== pillar.emoji) err(pw, `emoji must be '${pillar.emoji}'`);
  if (p.description !== pillar.description) err(pw, "description must equal taxonomy/pillars.json (the pillar page is written once, by whichever area installs first)");
  if (JSON.stringify(p.pillarFrontmatter) !== JSON.stringify({ review_cadence: pillar.review_cadence }))
    err(pw, `pillarFrontmatter must be exactly { review_cadence: ${pillar.review_cadence} }`);
  if (!Array.isArray(p.areas) || p.areas.length !== 1) return err(pw, "must hold exactly one area");
  const a = p.areas[0];
  const aw = `${rel} area`;
  onlyKeys(aw, a, ["name", "description", "projects"]);
  if (a.name !== area.name) err(aw, `name must be '${area.name}'`);
  if (a.description !== area.description) err(aw, "description must equal taxonomy/areas.json");
  const lower = String(a.name).toLowerCase();
  if (seenLibraryAreaNames.has(lower)) err(aw, `area name also used by ${seenLibraryAreaNames.get(lower)}`);
  seenLibraryAreaNames.set(lower, rel);

  const projects = a.projects;
  if (!Array.isArray(projects) || projects.length !== 50) return err(aw, `must hold exactly 50 projects (found ${Array.isArray(projects) ? projects.length : 0})`);

  const names = new Set();
  const referenced = new Set();
  let recurring = 0, daily = 0, high = 0, deadlines = 0, learning = 0;
  const modes = new Map();
  for (const [i, pr] of projects.entries()) {
    const w = `${rel} project ${i + 1} '${pr?.name}'`;
    if (!isPlainObject(pr)) { err(w, "not a mapping"); continue; }
    onlyKeys(w, pr, ["name", "description", "priority", "deadlineOffsetDays", "frontmatter", "tasks"]);
    const name = String(pr.name ?? "");
    if (!PROJECT_NAME_RE.test(name) || /\s{2}/.test(name)) err(w, "name is not filename safe (letters, digits, space & ' ( ) , + . % - ; 4 to 80 chars)");
    if (WINDOWS_RESERVED.test(name)) err(w, "name is a Windows reserved file name");
    const ln = name.toLowerCase();
    if (names.has(ln)) err(w, "duplicate project name in this area");
    names.add(ln);
    if (ln === lower || ln === pillar.name.toLowerCase()) err(w, "project name equals the area or pillar name");
    projectNameCounts.set(ln, (projectNameCounts.get(ln) ?? 0) + 1);

    if (!["high", "medium", "low"].includes(pr.priority)) err(w, "priority must be high, medium or low");
    if (pr.priority === "high") high++;

    const f = pr.frontmatter;
    if (!isPlainObject(f)) err(w, "frontmatter missing");
    else {
      onlyKeys(w, f, ["mode", "output_kind", "success_criteria", "cadence", "effort_hours_estimate"]);
      for (const [k, v] of Object.entries(f)) if (typeof v !== "string") err(w, `frontmatter.${k} must be a quoted string (StarterProject.frontmatter is a string map)`);
      if (!contract.projectModes.includes(f.mode)) err(w, `frontmatter.mode must be one of ${contract.projectModes.join(", ")}`);
      if (!contract.projectOutputKinds.includes(f.output_kind)) err(w, `frontmatter.output_kind must be one of ${contract.projectOutputKinds.join(", ")}`);
      if (!contract.projectCadences.includes(f.cadence)) err(w, `frontmatter.cadence must be one of ${contract.projectCadences.join(", ")}`);
      str(w, f.success_criteria, "frontmatter.success_criteria", { min: 30, max: 300 });
      if (f.effort_hours_estimate !== undefined && !/^[1-9][0-9]{0,3}$/.test(f.effort_hours_estimate)) err(w, "effort_hours_estimate must be a whole number of hours, quoted");
      modes.set(f.mode, (modes.get(f.mode) ?? 0) + 1);
      if (f.mode === "learning") learning++;
    }

    if (pr.deadlineOffsetDays !== undefined) {
      deadlines++;
      if (!Number.isInteger(pr.deadlineOffsetDays) || pr.deadlineOffsetDays < 7 || pr.deadlineOffsetDays > 730) err(w, "deadlineOffsetDays must be an integer from 7 to 730");
      if (f && !["one-shot", "phased"].includes(f.cadence)) err(w, "deadlineOffsetDays only makes sense on a one-shot or phased project");
    }

    validateDescription(w, pr.description, referenced);

    const tasks = pr.tasks;
    if (!Array.isArray(tasks) || tasks.length < 3 || tasks.length > 6) { err(w, "tasks must list 3 to 6 entries"); continue; }
    const seen = new Set();
    let projRecurring = 0;
    for (const t of tasks) {
      const r = validateTask(w, t);
      if (!r) continue;
      if (seen.has(r.text.toLowerCase())) err(w, `duplicate task '${r.text}'`);
      seen.add(r.text.toLowerCase());
      if (r.recurring) { projRecurring++; recurring++; if (r.recurring === "daily") daily++; }
    }
    if (projRecurring > 2) err(w, `${projRecurring} recurring tasks; at most 2 per project`);
  }

  // Area-level balance. Every project installs as `status: active`
  // (render_project_md hardcodes it), so these caps bound what one install
  // drops into a user's Today.
  if (recurring > 30) err(rel, `${recurring} recurring tasks across the area; at most 30`);
  if (daily > 3) err(rel, `${daily} daily tasks across the area; at most 3`);
  if (high > 15) err(rel, `${high} high-priority projects; at most 15`);
  if (deadlines > 20) err(rel, `${deadlines} projects carry deadlineOffsetDays; at most 20`);
  if (learning > 12) warn(rel, `${learning} projects use mode: learning (each appears in the Learning hub)`);
  if (modes.size < 3) warn(rel, `projects use only ${modes.size} modes; vary them`);
  for (const id of referenced) if (!listed.has(id)) err(rel, `a project names the '${TEMPLATE_BY_ID.get(id).name}' template but starter_structure.templates does not list '${id}'`);
  for (const id of listed) if (!referenced.has(id)) err(rel, `starter_structure.templates lists '${id}' but no project mentions it`);
}

// A project description is the page body (render_project_md writes it between
// the H1 and `## Tasks`), so it may not contain anything the heal or the
// reconciler would act on: no checkbox lines, no `## Tasks`, no markers.
function validateDescription(w, d, referenced) {
  if (!str(w, d, "description", { min: 250, max: 2200, oneLine: false })) return;
  const lines = d.split("\n");
  const headings = lines.filter((l) => /^#{1,6}\s/.test(l));
  const allowed = ["## Purpose", "## Milestones", "## Notes"];
  for (const h of headings) if (!allowed.includes(h)) err(w, `description heading '${h}' not allowed (use ${allowed.join(", ")})`);
  if (headings[0] !== "## Purpose" || headings[1] !== "## Milestones") err(w, "description must open with '## Purpose' then '## Milestones'");
  if (/^\s*[-*+]\s*\[[ xX]?\]/m.test(d)) err(w, "description contains a checkbox line (it would become a real task)");
  if (/<!--|\{\{|\[\[|^---/m.test(d)) err(w, "description contains a marker, template variable, wikilink or rule line");
  if (/@(due|recurring|priority)\(/.test(d)) err(w, "description contains a task annotation");
  const start = lines.indexOf("## Milestones");
  if (start >= 0) {
    const items = [];
    for (let i = start + 1; i < lines.length && !lines[i].startsWith("## "); i++) if (/^\d+\. \S/.test(lines[i])) items.push(lines[i]);
    if (items.length < 3 || items.length > 6) err(w, `milestones must list 3 to 6 numbered items (found ${items.length})`);
  }
  for (const m of d.matchAll(/\*\*([^*]+)\*\* template/g)) {
    const t = TEMPLATE_BY_NAME.get(m[1].toLowerCase());
    if (!t) err(w, `mentions the '${m[1]}' template, which is not a built-in template name`);
    else referenced.add(t.id);
  }
}

// Task lines are written verbatim as `- [ ] {task}` and the heal
// (store/migration.rs + commands/tasks.rs::parse_annotations) reads
// @recurring() and @priority() into the row. @due() is REJECTED: its value is
// stored verbatim, a blueprint cannot know a date, and nothing resolves a
// relative one, so `@due(+30d)` would land as a due date of "+30d".
function validateTask(w, t) {
  if (typeof t !== "string") return err(w, "task must be a quoted string"), null;
  if (/[\r\n]/.test(t)) return err(w, "task must be one line"), null;
  if (DASHES.test(t)) err(w, `task '${t}' contains an em or en dash`);
  if (/^\s*[-*+]\s*\[/.test(t)) return err(w, `task '${t}' must not include the checkbox`), null;
  if (/@due\(/.test(t)) return err(w, `task '${t}' uses @due(); blueprints cannot carry dates (use the project's deadlineOffsetDays)`), null;
  const m = /^([^@<>\[\]{}|#]+?)((?: @(?:recurring|priority)\([^()]*\))*)$/.exec(t);
  if (!m) return err(w, `task '${t}' has an unsupported annotation or character (@ < > [ ] { } | #)`), null;
  const text = m[1];
  if (text !== text.trim() || text.length < 6 || text.length > 140) err(w, `task text '${text}' must be 6 to 140 chars with no padding`);
  const anns = [...m[2].matchAll(/@(recurring|priority)\(([^()]*)\)/g)];
  let recurring = null;
  const kinds = new Set();
  for (const [, kind, val] of anns) {
    if (kinds.has(kind)) err(w, `task '${t}' repeats @${kind}()`);
    kinds.add(kind);
    if (kind === "recurring") {
      if (!validRecurrence(val)) err(w, `task '${t}': recurrence '${val}' is outside ${contract.recurrenceGrammar}`);
      if (val !== val.trim().toLowerCase()) err(w, `task '${t}': write the recurrence in lower case`);
      recurring = val.trim().toLowerCase();
    } else if (!["high", "medium", "low"].includes(val)) err(w, `task '${t}': priority must be high, medium or low`);
  }
  return { text, recurring };
}

// automations.rs: StarterAutomationRule { name, trigger{kind,params}, instruction, action, enabled }.
function validateRules(rel, rules) {
  if (rules === undefined) return;
  if (!Array.isArray(rules) || rules.length > 2) return err(rel, "automationRules must be a list of at most 2 rules");
  // Only triggers that can fire sensibly on a 50-project starter: the stale,
  // unassigned and dependency triggers would fire for every project at once or
  // never (blueprints set no depends_on and no shared workspace), and
  // area_over_max_projects needs an area frontmatter StarterArea cannot carry.
  const ALLOWED = ["review_cadence_due", "weekly_on", "deadline_within"];
  for (const [i, r] of rules.entries()) {
    const w = `${rel} automationRules[${i}]`;
    if (!isPlainObject(r)) { err(w, "not a mapping"); continue; }
    onlyKeys(w, r, ["name", "trigger", "instruction", "action", "enabled"]);
    str(w, r.name, "name", { min: 4, max: 80 });
    str(w, r.instruction, "instruction", { min: 20, max: 400 });
    if (typeof r.enabled !== "boolean") err(w, "enabled must be true or false");
    const kind = r.trigger?.kind;
    if (!contract.triggerKinds.includes(kind)) err(w, `trigger.kind '${kind}' is not a trigger kind`);
    else if (!ALLOWED.includes(kind)) err(w, `trigger.kind '${kind}' is not allowed in the library (use ${ALLOWED.join(", ")})`);
    if (r.trigger?.params !== undefined) {
      if (!isPlainObject(r.trigger.params)) err(w, "trigger.params must be a mapping");
      else {
        onlyKeys(w, r.trigger.params, contract.triggerParamKeys);
        const { days, minCount, weekday, cooldownHours } = r.trigger.params;
        for (const [k, v] of Object.entries({ days, minCount, cooldownHours })) if (v !== undefined && (!Number.isInteger(v) || v < 0)) err(w, `trigger.params.${k} must be a non-negative integer`);
        if (weekday !== undefined && !WEEKDAYS.has(weekday)) err(w, "trigger.params.weekday must be mon..sun");
      }
    }
    const a = r.action;
    if (a === "agent_task") continue;
    if (isPlainObject(a) && isPlainObject(a.generate_artifact) && Object.keys(a).length === 1) {
      const g = a.generate_artifact;
      onlyKeys(w, g, ["kind", "format", "windowDays"]);
      if (!contract.artifactKinds.includes(g.kind)) err(w, `artifact kind '${g.kind}' unknown`);
      if (g.kind === "project-audit" && !contract.projectScopedTriggerKinds.includes(kind)) err(w, "a project audit needs a project-scoped trigger");
    } else err(w, "action must be 'agent_task' or { generate_artifact: { kind } }");
  }
}

// ── catalog.json ────────────────────────────────────────────────────────────
{
  const where = "catalog.json";
  let cat;
  try {
    cat = readJson("catalog.json");
  } catch (e) {
    err(where, `does not parse: ${e.message}`);
  }
  if (cat) {
    if (!Array.isArray(cat.blueprints)) err(where, "must be the wrapped form { \"blueprints\": [...] }");
    const ids = new Set();
    const paths = new Set();
    for (const m of cat.blueprints ?? []) {
      const w = `${where} [${m.id}]`;
      for (const k of ["id", "name", "description", "category", "version", "path"]) if (typeof m[k] !== "string" || !m[k].trim()) err(w, `missing ${k}`);
      if (!BLUEPRINT_ID_RE.test(m.id ?? "")) err(w, "id fails the id grammar");
      if (ids.has(m.id)) err(w, "duplicate id");
      ids.add(m.id);
      if (!SEMVER_RE.test(m.version ?? "")) err(w, "version must be MAJOR.MINOR.PATCH");
      // manifest.rs::validate_manifest: relative, no '..', ends in .md.
      if (!/^[^/].*\.md$/.test(m.path ?? "") || m.path.includes("..")) err(w, "path must be relative, end in .md and not contain '..'");
      paths.add(m.path);
      const info = fileInfo.get(m.path);
      if (!info) { err(w, `path '${m.path}' has no blueprint file`); continue; }
      if (info.fm.id !== m.id) err(w, `id differs from the file's id '${info.fm.id}'`);
      const lib = libraryPathParts(m.path);
      if (lib) {
        if (!["personal", "business"].includes(m.category)) err(w, "library category must be personal or business");
        for (const k of ["name", "description", "category", "version"]) if (m[k] !== info.fm[k]) err(w, `${k} differs from the file`);
        if (JSON.stringify(m.tags) !== JSON.stringify(info.fm.tags)) err(w, "tags differ from the file");
        if (m.contentHash !== contentHash(m.path)) err(w, "contentHash is stale (run npm run build:catalog)");
      }
      const want = summarizeStarter(info.fm.starter_structure);
      const have = m.starterSummary ?? {};
      for (const k of ["pillars", "totalAreas", "totalProjects"])
        if (JSON.stringify(have[k]) !== JSON.stringify(want[k])) err(w, `starterSummary.${k} is ${JSON.stringify(have[k])}, the file says ${JSON.stringify(want[k])}`);
      if (lib && have.totalTasks !== want.totalTasks) err(w, `starterSummary.totalTasks is ${have.totalTasks}, the file says ${want.totalTasks}`);
    }
    for (const rel of fileInfo.keys()) if (!paths.has(rel)) err(where, `blueprint ${rel} is not in the catalog (run npm run build:catalog)`);
  }
}

// ── report ──────────────────────────────────────────────────────────────────
const dupProjects = [...projectNameCounts].filter(([, n]) => n > 1);
if (dupProjects.length) warn("library", `${dupProjects.length} project names repeat across area files (e.g. '${dupProjects[0][0]}'); prefer names specific to their area`);

const libraryFiles = files.filter((f) => libraryPathParts(f)).length;
console.log(`taxonomy: ${PILLARS.size} pillars, ${AREAS.size} areas`);
console.log(`blueprints: ${files.length} files (${libraryFiles} library, ${files.length - libraryFiles} legacy)`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings.slice(0, 20)) console.log(`  ! ${w}`);
}
if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  for (const e of errors.slice(0, MAX_PRINT)) console.log(`  x ${e}`);
  if (errors.length > MAX_PRINT) console.log(`  ... ${errors.length - MAX_PRINT} more (use --max N)`);
  process.exit(1);
}
console.log("\nOK");
