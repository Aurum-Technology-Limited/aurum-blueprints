#!/usr/bin/env node
// Add a "not professional advice" notice to every blueprint whose subject is
// health, wellbeing, money or law.
//
//   node scripts/add-notices.mjs          write the notices
//   node scripts/add-notices.mjs --check  exit 1 if any blueprint lacks its notice
//
// The notice goes at the end of the FIRST project's description, under
// "## Notes" (the only free-text heading the validator allows after
// Milestones), so it is installed into the user's own files beside the plan
// and read before the first task. Pillar and area descriptions cannot carry
// it: they must equal the taxonomy word for word.
//
// The edit is textual: the description block is a YAML literal scalar, and
// lines are appended at its own indentation, so every other byte of the file
// is unchanged. Each edited file is re-parsed to prove the notice landed.
// Re-running is a no-op: a description that already ends with its notice is
// left alone.

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { REPO_ROOT, libraryPathParts, listBlueprintFiles, loadBlueprint } from "./lib/blueprint.mjs";

const check = process.argv.includes("--check");

export const NOTICES = {
  medical:
    "Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.",
  fitness:
    "Before you start: this plan is general information, not medical advice. Check with a doctor before starting a new training programme, especially if you have a health condition, are pregnant or are coming back from an injury, and stop if you feel pain, dizziness or chest discomfort.",
  mental:
    "Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.",
  financial:
    "Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.",
  legal:
    "Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.",
};

const BY_PILLAR = {
  "physical-health": "medical",
  "food-nutrition": "medical",
  "fitness-sport": "fitness",
  "mental-wellbeing": "mental",
  "personal-finance": "financial",
  "wealth-investing": "financial",
  "quant-finance": "financial",
  "fundraising-investors": "financial",
  "finance-accounting": "financial",
  "real-estate-development": "legal",
};

// Areas inside other pillars whose subject is health, money or law.
const BY_AREA = {
  "family-parenting.pregnancy-antenatal-planning": "medical",
  "family-parenting.birth-plan-hospital-bag": "medical",
  "family-parenting.newborn-first-three-months": "medical",
  "family-parenting.baby-toddler-sleep": "medical",
  "family-parenting.childrens-health-appointments": "medical",
  "family-parenting.supporting-teen-mental-health": "mental",
  "family-parenting.raising-neurodivergent-child": "mental",
  "relationships.leaving-an-unhealthy-relationship": "mental",
  "relationships.divorce-separation-process": "legal",
  "career-growth.workplace-rights-grievances": "legal",
  "caribbean-diaspora.medical-care-trips-home": "medical",
  "caribbean-diaspora.sending-money-home": "financial",
  "caribbean-diaspora.investing-caribbean-stock-markets": "financial",
  "caribbean-diaspora.sou-sou-partner-savings": "financial",
  "caribbean-diaspora.caribbean-tax-residency-pensions": "financial",
  "caribbean-diaspora.dual-citizenship-passports": "legal",
  "caribbean-diaspora.immigration-status-windrush": "legal",
  "caribbean-diaspora.wills-estates-two-countries": "legal",
  "caribbean-diaspora.family-land-succession": "legal",
  "caribbean-diaspora.citizenship-by-investment": "legal",
  "caribbean-diaspora.buying-property-back-home": "legal",
  "caribbean-diaspora.returning-resident-move-home": "legal",
};

export function noticeKind(id) {
  return BY_AREA[id] ?? BY_PILLAR[id.split(".")[0]] ?? null;
}

const MAX_DESCRIPTION = 2200; // validate.mjs validateDescription

/** Append `notice` to the description block that starts at line `start`. */
function appendToBlock(lines, start, notice) {
  // Content runs while lines are blank or indented deeper than the key.
  const keyIndent = lines[start].search(/\S/);
  let end = start + 1;
  let indent = null;
  while (end < lines.length && (lines[end].trim() === "" || lines[end].search(/\S/) > keyIndent)) {
    if (indent === null && lines[end].trim() !== "") indent = lines[end].search(/\S/);
    end++;
  }
  while (end > start + 1 && lines[end - 1].trim() === "") end--; // keep trailing blanks outside
  const pad = " ".repeat(indent);
  const body = lines.slice(start + 1, end).map((l) => l.slice(indent));
  const hasNotes = body.includes("## Notes");
  const add = hasNotes ? ["", notice] : ["", "## Notes", notice];
  lines.splice(end, 0, ...add.map((l) => (l === "" ? "" : pad + l)));
  return body.join("\n").length + add.join("\n").length + 1;
}

let changed = 0, already = 0, missing = 0;
const failures = [];
for (const rel of listBlueprintFiles()) {
  if (!libraryPathParts(rel)) continue;
  const { fm } = loadBlueprint(rel);
  const kind = noticeKind(fm.id);
  if (!kind) continue;
  const notice = NOTICES[kind];
  const projects = fm.starter_structure.pillars[0].areas[0].projects;
  if (projects.some((p) => p.description.trimEnd().endsWith(notice))) { already++; continue; }
  if (check) { missing++; failures.push(`${rel}: no ${kind} notice`); continue; }

  // The first project whose description still fits under the cap.
  const target = projects.findIndex((p) => p.description.length + notice.length + 12 <= MAX_DESCRIPTION);
  if (target < 0) { failures.push(`${rel}: no project description has room for the notice`); continue; }

  const path = join(REPO_ROOT, rel);
  const text = readFileSync(path, "utf8");
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const lines = text.split(eol);
  let seen = -1, at = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^\s+description: \|-?$/.test(lines[i]) && lines[i - 1] && /^\s+- name: /.test(lines[i - 1])) {
      if (++seen === target) { at = i; break; }
    }
  }
  if (at < 0) { failures.push(`${rel}: could not find project ${target + 1}'s description block`); continue; }
  appendToBlock(lines, at, notice);
  writeFileSync(path, lines.join(eol));

  const after = loadBlueprint(rel).fm.starter_structure.pillars[0].areas[0].projects[target].description;
  if (!after.endsWith(notice)) { failures.push(`${rel}: notice did not land where expected`); continue; }
  changed++;
}

if (failures.length) {
  for (const f of failures.slice(0, 40)) console.error(`  x ${f}`);
  if (failures.length > 40) console.error(`  ... and ${failures.length - 40} more`);
}
if (check) {
  console.log(`notices: ${already} present, ${missing} missing`);
  process.exit(missing ? 1 : 0);
}
console.log(`notices: ${changed} added, ${already} already present, ${failures.length} failed`);
process.exit(failures.length ? 1 : 0);
