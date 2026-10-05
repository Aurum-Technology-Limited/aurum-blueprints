#!/usr/bin/env node
// Renders one area blueprint from a compact JSON draft, so a generator writes
// content and never hand-indents YAML. The two-space indentation GENERATION.md
// calls load-bearing, the quoting rules and the fixed install sentence all live
// here, once.
//
//   node scripts/render-area.mjs drafts/<pillarId>/<areaId>.json [...]
//
// Draft shape (see GENERATION.md section 11):
//   { pillarId, areaId, description, tags: [extra slugs],
//     templates?: [ids], automationRules?: [...],
//     body: [paragraph1, paragraph2WithoutTheInstallSentence],
//     projects: [{ name, purpose, milestones: [..], notes?, priority,
//                  deadlineOffsetDays?, mode, output_kind, success_criteria,
//                  cadence, effort_hours_estimate?, tasks: [..] }] }
//
// Pillar and area names, emoji and descriptions are copied from the taxonomy,
// never from the draft, so a draft cannot drift from them.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const INSTALL_SENTENCE = "Installing adds all 50 projects as active, so archive the ones that are not for you yet.";

const pillarsDoc = JSON.parse(readFileSync(join(ROOT, "taxonomy/pillars.json"), "utf8"));
const pillarList = Array.isArray(pillarsDoc) ? pillarsDoc : pillarsDoc.pillars;
const areasDoc = JSON.parse(readFileSync(join(ROOT, "taxonomy/areas.json"), "utf8"));

// JSON string escapes are a subset of YAML double-quoted escapes, so
// JSON.stringify is a correct YAML double-quoter for one-line strings.
const q = (s) => JSON.stringify(String(s));

function fail(msg) {
  throw new Error(msg);
}

function block(lines, indent) {
  const pad = " ".repeat(indent);
  return lines.map((l) => (l === "" ? "" : pad + l)).join("\n");
}

function descriptionLines(p, where) {
  if (!p.purpose || !Array.isArray(p.milestones)) fail(`${where}: purpose and milestones are required`);
  const out = ["## Purpose", p.purpose.trim(), "", "## Milestones"];
  p.milestones.forEach((m, i) => out.push(`${i + 1}. ${m.trim()}`));
  if (p.notes && p.notes.trim()) {
    out.push("", "## Notes");
    for (const l of p.notes.trim().split("\n")) out.push(l.trimEnd());
  }
  return out;
}

function render(draft, file) {
  const pillar = pillarList.find((x) => x.id === draft.pillarId);
  if (!pillar) fail(`${file}: unknown pillar '${draft.pillarId}'`);
  const area = (areasDoc.pillars[draft.pillarId] ?? []).find((a) => a.id === draft.areaId);
  if (!area) fail(`${file}: unknown area '${draft.areaId}' in '${draft.pillarId}'`);
  if (!Array.isArray(draft.body) || draft.body.length !== 2) fail(`${file}: body must hold two paragraphs`);

  const tags = [draft.pillarId, draft.areaId, ...(draft.tags ?? []).filter((t) => t !== draft.pillarId && t !== draft.areaId)];
  const out = [];
  out.push("---");
  out.push(`id: ${draft.pillarId}.${draft.areaId}`);
  out.push(`name: ${area.name}`);
  out.push(`description: ${q(draft.description)}`);
  out.push(`category: ${pillar.category}`);
  out.push("version: 1.0.0");
  out.push(`tags: [${tags.join(", ")}]`);
  out.push("author: Aurum Technology");
  out.push("starter_structure:");
  if (draft.templates && draft.templates.length) {
    out.push("  templates:");
    for (const t of draft.templates) out.push(`    - ${t}`);
  }
  out.push("  pillars:");
  out.push(`    - name: ${pillar.name}`);
  out.push(`      emoji: ${q(pillar.emoji)}`);
  out.push(`      description: ${q(pillar.description)}`);
  out.push("      pillarFrontmatter:");
  out.push(`        review_cadence: ${pillar.review_cadence}`);
  out.push("      areas:");
  out.push(`        - name: ${area.name}`);
  out.push(`          description: ${q(area.description)}`);
  out.push("          projects:");
  draft.projects.forEach((p, i) => {
    const where = `${file} project ${i + 1} (${p.name})`;
    out.push(`            - name: ${p.name}`);
    out.push("              description: |-");
    out.push(block(descriptionLines(p, where), 16));
    out.push(`              priority: ${p.priority}`);
    if (p.deadlineOffsetDays !== undefined) out.push(`              deadlineOffsetDays: ${p.deadlineOffsetDays}`);
    out.push("              frontmatter:");
    out.push(`                mode: ${p.mode}`);
    out.push(`                output_kind: ${p.output_kind}`);
    out.push(`                success_criteria: ${q(p.success_criteria)}`);
    out.push(`                cadence: ${p.cadence}`);
    if (p.effort_hours_estimate !== undefined) out.push(`                effort_hours_estimate: ${q(p.effort_hours_estimate)}`);
    out.push("              tasks:");
    for (const t of p.tasks) out.push(`                - ${q(t)}`);
  });
  if (draft.automationRules && draft.automationRules.length) {
    // Lives under starter_structure (StarterStructure.automationRules).
    out.push("  automationRules:");
    for (const r of draft.automationRules) {
      out.push(`    - name: ${q(r.name)}`);
      out.push("      trigger:");
      out.push(`        kind: ${r.trigger.kind}`);
      const params = Object.entries(r.trigger.params ?? {});
      if (params.length) {
        out.push("        params:");
        for (const [k, v] of params) out.push(`          ${k}: ${typeof v === "number" ? v : q(v)}`);
      }
      out.push(`      instruction: ${q(r.instruction)}`);
      out.push(`      action: ${r.action ?? "agent_task"}`);
      out.push(`      enabled: ${r.enabled === false ? "false" : "true"}`);
    }
  }
  out.push("---");
  out.push("");
  out.push(`# ${area.name}`);
  out.push("");
  out.push(draft.body[0].trim());
  out.push("");
  const p2 = draft.body[1].trim();
  out.push(p2.includes(INSTALL_SENTENCE) ? p2 : `${p2} ${INSTALL_SENTENCE}`);
  out.push("");
  return out.join("\n");
}

const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node scripts/render-area.mjs drafts/<pillarId>/<areaId>.json [...]");
  process.exit(2);
}
let failed = 0;
for (const f of files) {
  try {
    const draft = JSON.parse(readFileSync(f, "utf8"));
    const target = join(ROOT, "blueprints", draft.pillarId, `${draft.areaId}.md`);
    mkdirSync(dirname(target), { recursive: true });
    const text = render(draft, f);
    writeFileSync(target, text);
    console.log(`wrote ${target.slice(ROOT.length + 1)} (${Buffer.byteLength(text)} bytes)`);
    // The validator enforces the caps; these are the targets it cannot
    // (GENERATION.md 5.1, 5.4, 5.5), printed so a generator can aim for them.
    const ps = draft.projects ?? [];
    const recurring = ps.reduce((n, p) => n + p.tasks.filter((t) => t.includes("@recurring(")).length, 0);
    const high = ps.filter((p) => p.priority === "high").length;
    const deadlines = ps.filter((p) => p.deadlineOffsetDays !== undefined).length;
    const learning = ps.filter((p) => p.mode === "learning").length;
    const notes = [];
    if (ps.length !== 50) notes.push(`${ps.length} projects, need 50`);
    if (recurring < 15 || recurring > 25) notes.push(`${recurring} recurring tasks, aim 15 to 25`);
    if (high < 8 || high > 12) notes.push(`${high} high, aim 8 to 12`);
    if (deadlines < 8 || deadlines > 15) notes.push(`${deadlines} deadlines, aim 8 to 15`);
    if (learning > 10) notes.push(`${learning} learning projects, aim at most 10`);
    console.log(`  recurring ${recurring}, high ${high}, deadlines ${deadlines}, learning ${learning}${notes.length ? ` | off target: ${notes.join("; ")}` : ""}`);
  } catch (e) {
    failed++;
    console.error(e.message);
  }
}
process.exit(failed ? 1 : 0);
