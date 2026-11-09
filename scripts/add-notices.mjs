#!/usr/bin/env node
// Add a "not professional advice" notice to every blueprint whose subject is
// health, wellbeing, money, law, physical safety or a regulated profession.
//
//   node scripts/add-notices.mjs                  write the notices
//   node scripts/add-notices.mjs --check          exit 1 if any blueprint lacks its current notice
//   node scripts/add-notices.mjs --list [--ids F] print what a write would do, change nothing
//
// --list (alias --dry-run) prints one line per blueprint that has a notice
// kind: `<action>\t<kind>\t<id>`, where action is `ok` (current notice
// present), `add` (no notice yet), `upgrade` (an earlier wording of the same
// notice, which a write replaces with the current one) or `FAIL`. It then
// prints counts per kind. With `--ids <file>` the counts are also given for
// that set: a JSON array of ids, or an object whose `tier1`/`tier2`/`tier3`
// arrays are the picks (as in launch/publish-list-*.json), always together
// with the live ids in launch.json.
//
// The notice goes at the end of the FIRST project's description, under
// "## Notes" (the only free-text heading the validator allows after
// Milestones), so it is installed into the user's own files beside the plan
// and read before the first task. Pillar and area descriptions cannot carry
// it: they must equal the taxonomy word for word.
//
// The edit is textual: the description block is a YAML literal scalar, and
// lines are appended at its own indentation (or one notice line is swapped for
// its current wording), so every other byte of the file is unchanged. Each
// edited file is re-parsed to prove the notice landed. Re-running is a no-op:
// a description that already ends with its current notice is left alone.
//
// Editing a live blueprint changes its content hash, so after a write the
// marketplace registry must be re-seeded before those blueprints install.

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { REPO_ROOT, launchIds, libraryPathParts, listBlueprintFiles, loadBlueprint, readJson } from "./lib/blueprint.mjs";

const args = process.argv.slice(2);
const check = args.includes("--check");
const list = args.includes("--list") || args.includes("--dry-run");
const idsFile = args.includes("--ids") ? args[args.indexOf("--ids") + 1] : null;

// Plain words, one paragraph each. Every notice says: general information,
// not professional advice, no professional relationship / does not replace the
// professional, check with a qualified person (in your country where rules
// differ), and where relevant what to do in an emergency.
export const NOTICES = {
  medical:
    "Before you start: this plan is general information to help you organise your own health. It is not medical advice, and it does not replace a doctor, nurse, pharmacist or other qualified professional who knows your situation. Check any change to treatment, medicine, diet or activity with them first. If you feel very unwell or think it is an emergency, call your local emergency number now.",
  fitness:
    "Before you start: this plan is general information, not medical advice or personal coaching. Check with a doctor before starting a new training programme, especially if you have a health condition, are pregnant or are coming back from an injury. Stop if you feel pain, dizziness, breathlessness or chest discomfort, and call your local emergency number if it is severe.",
  mental:
    "Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice or therapy, and it does not replace a doctor, therapist or counsellor who knows you. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.",
  financial:
    "Before you start: this plan is general information to help you organise decisions about money. It is not financial, investment, tax or legal advice, and it does not recommend any product, investment or deal. Rules differ between countries, so check decisions that matter with a qualified, licensed adviser in yours. Investing and trading can lose money, and raising or managing other people's money is regulated in most countries.",
  legal:
    "Before you start: this plan is general information to help you organise your own affairs. It is not legal advice, and following it does not make anyone your lawyer. Rules differ between countries and change often, so check decisions that matter, and anything you sign, with a qualified lawyer or the official authority in the country concerned.",
  safety:
    "Before you start: this plan is general information, not a safety manual or a substitute for proper training. Follow the law where you live and work, the manufacturer's and label instructions for machinery, chemicals, animal medicines and equipment, and any site safety rules. Use trained, licensed or certified people for regulated work such as electrical, gas, structural, pesticide or veterinary work, and stop if something seems unsafe.",
  professional:
    "Before you start: this plan is general information to help you organise your own work. It does not replace your professional judgement, the rules of your regulator or professional body, your firm's policies, or advice from a qualified lawyer, accountant or other adviser. Where a law, code or standard applies, use the current official version for your country, and get qualified sign-off on regulated or safety-critical work.",
};

// Team plans (tag `team-plan`) are run by an organisation, so "your own
// money decisions" would read wrongly. They get these wordings instead;
// kinds without a team wording (medical, fitness, mental, safety) keep the
// personal one, which already reads correctly for a team.
const TEAM_NOTICES = {
  financial:
    "Before you start: this plan is general information to help your team organise its work. It is not financial, investment, tax, accounting or legal advice, and it does not recommend any product, investment or deal. Rules differ between countries, so check decisions that matter with qualified, licensed advisers in the countries concerned. Investing can lose money, and raising or managing other people's money is regulated in most countries.",
  legal:
    "Before you start: this plan is general information to help your team organise its work. It is not legal advice, and following it does not make anyone your organisation's lawyer. Rules differ between countries and change often, so check decisions that matter, and anything your organisation signs, with a qualified lawyer or the official authority in the country concerned.",
  professional:
    "Before you start: this plan is general information to help your team organise its work. It does not replace professional judgement, the rules of your regulator or professional body, your organisation's policies, or advice from a qualified lawyer, accountant or other adviser. Where a law, code or standard applies, use the current official version for your country, and get qualified sign-off on regulated or safety-critical work.",
};
for (const [k, n] of Object.entries(TEAM_NOTICES)) NOTICES[`team-${k}`] = n;

// Earlier wordings. A blueprint that ends with one of these is upgraded to the
// current wording of the same kind instead of getting a second notice.
const LEGACY = {
  medical: [
    "Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.",
  ],
  fitness: [
    "Before you start: this plan is general information, not medical advice. Check with a doctor before starting a new training programme, especially if you have a health condition, are pregnant or are coming back from an injury, and stop if you feel pain, dizziness or chest discomfort.",
  ],
  mental: [
    "Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.",
  ],
  financial: [
    "Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.",
  ],
  legal: [
    "Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.",
  ],
  safety: [],
  professional: [],
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
  "family-office": "financial",
  "private-equity-vc": "financial",
  "practice-ownership": "professional",
  "engineering-practice": "professional",
  agriculture: "safety",
};

// Areas whose subject differs from their pillar's default. `null` means no
// notice (a pillar default that does not fit the area).
const BY_AREA = {
  // Family and parenting
  "family-parenting.pregnancy-antenatal-planning": "medical",
  "family-parenting.birth-plan-hospital-bag": "medical",
  "family-parenting.newborn-first-three-months": "medical",
  "family-parenting.baby-toddler-sleep": "medical",
  "family-parenting.childrens-health-appointments": "medical",
  "family-parenting.puberty-growing-up-talks": "medical",
  "family-parenting.supporting-teen-mental-health": "mental",
  "family-parenting.raising-neurodivergent-child": "mental",
  "family-parenting.dealing-with-bullying": "mental",
  "family-parenting.adoption-journey": "legal",
  "family-parenting.foster-caring": "legal",
  "family-parenting.co-parenting-after-separation": "legal",
  "family-parenting.blended-step-family-life": "legal",
  "family-parenting.parental-leave-planning": "legal",
  "family-parenting.family-emergency-plan": "legal",
  "family-parenting.special-educational-needs-support": "legal",
  "family-parenting.home-education": "legal",
  "family-parenting.learner-driver-teen-practice": "safety",

  // Relationships
  "relationships.intimacy-sex-life": "medical",
  "relationships.leaving-an-unhealthy-relationship": "mental",
  "relationships.couples-counselling": "mental",
  "relationships.rebuilding-trust-after-infidelity": "mental",
  "relationships.supporting-a-friend-in-crisis": "mental",
  "relationships.getting-over-a-breakup": "mental",
  "relationships.dating-again-after-loss": "mental",
  "relationships.money-conversations-as-couple": "financial",
  "relationships.divorce-separation-process": "legal",
  "relationships.moving-in-together": "legal",

  // Career
  "career-growth.workplace-rights-grievances": "legal",
  "career-growth.flexible-working-requests": "legal",
  "career-growth.navigating-redundancy-layoffs": "legal",
  "career-growth.toxic-workplace-exit-plan": "legal",
  "career-growth.resignation-counteroffers": "legal",
  "career-growth.international-job-relocation": "legal",
  "career-growth.non-executive-board-roles": "legal",
  "career-growth.late-career-pivot-50-plus": "financial",

  // Caribbean diaspora
  "caribbean-diaspora.medical-care-trips-home": "medical",
  "caribbean-diaspora.caring-for-parents-back-home": "medical",
  "caribbean-diaspora.sending-money-home": "financial",
  "caribbean-diaspora.investing-caribbean-stock-markets": "financial",
  "caribbean-diaspora.sou-sou-partner-savings": "financial",
  "caribbean-diaspora.caribbean-tax-residency-pensions": "financial",
  "caribbean-diaspora.retiring-to-the-caribbean": "financial",
  "caribbean-diaspora.dual-citizenship-passports": "legal",
  "caribbean-diaspora.immigration-status-windrush": "legal",
  "caribbean-diaspora.wills-estates-two-countries": "legal",
  "caribbean-diaspora.family-land-succession": "legal",
  "caribbean-diaspora.citizenship-by-investment": "legal",
  "caribbean-diaspora.buying-property-back-home": "legal",
  "caribbean-diaspora.returning-resident-move-home": "legal",
  "caribbean-diaspora.remote-work-from-caribbean": "legal",
  "caribbean-diaspora.diaspora-business-back-home": "legal",
  "caribbean-diaspora.caribbean-students-abroad": "legal",
  "caribbean-diaspora.shipping-barrels-home": "legal",
  "caribbean-diaspora.caribbean-food-business-abroad": "legal",
  "caribbean-diaspora.hurricane-support-family-home": "safety",

  // Founding a startup
  "founding-startups.incorporating-a-startup": "legal",
  "founding-startups.cofounder-equity-split": "legal",
  "founding-startups.cofounder-separation": "legal",
  "founding-startups.acquiring-a-small-business": "legal",
  "founding-startups.winding-down-a-startup": "legal",
  "founding-startups.founder-visa-and-relocation": "legal",
  "founding-startups.early-stage-layoff-decisions": "legal",
  "founding-startups.first-ten-hires": "legal",
  "founding-startups.side-project-to-company": "legal",
  "founding-startups.startup-naming-and-domain": "legal",
  "founding-startups.founding-a-social-enterprise": "legal",
  "founding-startups.deep-tech-university-spinout": "legal",
  "founding-startups.startup-advisor-board": "legal",
  "founding-startups.startup-runway-management": "financial",
  "founding-startups.leaving-a-job-to-start-up": "financial",
  "founding-startups.founder-burnout-prevention": "mental",
  "founding-startups.hardware-startup-prototyping": "safety",

  // Professions and trades: hands-on work with electrical, gas, refrigerant,
  // heavy plant, vehicle or power-tool hazards.
  "professions-trades.electrician-trade-licence": "safety",
  "professions-trades.plumbing-trade": "safety",
  "professions-trades.air-conditioning-refrigeration-trade": "safety",
  "professions-trades.solar-renewable-technician": "safety",
  "professions-trades.heavy-equipment-operator-trade": "safety",
  "professions-trades.motor-vehicle-mechanic-trade": "safety",
  "professions-trades.carpentry-joinery-trade": "safety",
  "professions-trades.healthcare-jobs-abroad": "legal",

  // Sales, consulting, banking, leadership
  "sales-revenue.cold-calling-phone-outreach": "legal",
  "sales-revenue.cold-email-prospecting-sequences": "legal",
  "sales-revenue.public-sector-selling": "legal",
  "management-consulting.ethics-and-conflicts-in-consulting": "professional",
  "management-consulting.expert-network-calls": "professional",
  "management-consulting.multilateral-donor-funded-consultancies": "professional",
  "management-consulting.going-independent-after-a-firm": "legal",
  "management-consulting.boutique-consulting-firm-building": "legal",
  "management-consulting.subcontracting-to-larger-firms": "legal",
  "investment-banking.health-under-banking-hours": "medical",
  "investment-banking.wall-crossing-and-compliance": "professional",
  "investment-banking.banking-bonus-season": "financial",
  "strategy-leadership.family-business-leadership": "legal",

  // Agriculture: money and law areas; the rest is physical farm work (safety).
  "agriculture.farm-budgets-and-enterprise-costing": "financial",
  "agriculture.farm-finance-and-loans": "financial",
  "agriculture.agricultural-insurance": "financial",
  "agriculture.farm-incentives-and-grants": "financial",
  "agriculture.agricultural-export-compliance": "legal",
  "agriculture.contract-farming-agreements": "legal",
  "agriculture.farm-labour-and-workers": "legal",
  "agriculture.farm-land-tenure-and-leases": "legal",
  "agriculture.supermarket-supply-contracts": "legal",
  "agriculture.praedial-larceny-prevention": "legal",
  "agriculture.using-government-extension-services": null,
  "agriculture.wholesale-market-selling": null,

  // Engineering practice: plant, site and field work is safety first.
  "engineering-practice.energy-contractor-safety-stow": "safety",
  "engineering-practice.lng-plant-operations-and-engineering": "safety",
  "engineering-practice.offshore-platform-engineering": "safety",
  "engineering-practice.point-lisas-petrochemical-plants": "safety",
  "engineering-practice.trinidad-upstream-oil-and-gas": "safety",
  "engineering-practice.petroleum-engineering-practice": "safety",
  "engineering-practice.mining-and-minerals-engineering": "safety",

  // Family office: employment, trusts, property and security.
  "family-office.household-staff-employment": "legal",
  "family-office.estate-manager-and-house-manager": "legal",
  "family-office.staff-vetting-and-background-checks": "legal",
  "family-office.trustee-selection-and-oversight": "legal",
  "family-office.family-privacy-and-public-profile": "legal",
  "family-office.family-records-and-archives": "legal",
  "family-office.multiple-residences-management": "legal",
  "family-office.aircraft-and-yacht-ownership": "legal",
  "family-office.family-security-assessment": "safety",

  // Practice ownership: money and deal areas; the rest is regulated practice.
  "practice-ownership.practice-valuation": "financial",
  "practice-ownership.practice-equipment-finance": "financial",
  "practice-ownership.practice-financial-dashboard": "financial",
  "practice-ownership.work-in-progress-and-lockup": "financial",
  "practice-ownership.practice-fee-schedules": "financial",
  "practice-ownership.partner-profit-sharing-models": "financial",
  "practice-ownership.buying-an-existing-practice": "legal",
  "practice-ownership.selling-a-practice": "legal",
  "practice-ownership.selling-to-a-practice-group": "legal",
  "practice-ownership.partner-retirement-and-exit": "legal",
  "practice-ownership.practice-succession-planning": "legal",
  "practice-ownership.practice-premises-and-fit-out": "legal",
  "practice-ownership.hiring-associates-and-professionals": "legal",
  "practice-ownership.hiring-front-desk-and-support-staff": "legal",
  "practice-ownership.locums-and-contract-professionals": "legal",
  "practice-ownership.professional-indemnity-for-practices": "legal",
  "practice-ownership.starting-a-practice-from-scratch": "legal",
  "practice-ownership.setting-up-a-caribbean-practice": "legal",
};

export function noticeKind(id, tags = []) {
  const kind = Object.hasOwn(BY_AREA, id) ? BY_AREA[id] : BY_PILLAR[id.split(".")[0]] ?? null;
  if (kind && tags.includes("team-plan") && TEAM_NOTICES[kind]) return `team-${kind}`;
  return kind;
}

// A team plan that carries the personal wording (current or earlier) is
// upgraded to the team wording in place.
for (const k of Object.keys(TEAM_NOTICES)) LEGACY[`team-${k}`] = [NOTICES[k], ...LEGACY[k]];

const MAX_DESCRIPTION = 2200; // validate.mjs validateDescription
const ALL_NOTICES = Object.entries(NOTICES).flatMap(([k, n]) => [[k, n], ...LEGACY[k].map((l) => [k, l])]);

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
}

/** Decide what a write would do to one blueprint, without touching it. */
function plan(rel, fm, kind) {
  const notice = NOTICES[kind];
  const projects = fm.starter_structure.pillars[0].areas[0].projects;
  const ends = (p, n) => p.description.trimEnd().endsWith(n);
  if (projects.some((p) => ends(p, notice))) return { action: "ok" };
  const legacy = LEGACY[kind].find((l) => projects.some((p) => ends(p, l)));
  if (legacy) {
    const target = projects.findIndex((p) => ends(p, legacy));
    const length = projects[target].description.length - legacy.length + notice.length;
    if (length > MAX_DESCRIPTION) return { action: "FAIL", why: `upgraded ${kind} notice would push project ${target + 1} over ${MAX_DESCRIPTION} characters` };
    return { action: "upgrade", target, legacy };
  }
  const other = ALL_NOTICES.find(([k, n]) => k !== kind && projects.some((p) => ends(p, n)));
  if (other) return { action: "FAIL", why: `carries a ${other[0]} notice but its subject now maps to ${kind}; decide which one it needs` };
  // The first project whose description still fits under the cap.
  const target = projects.findIndex((p) => p.description.length + notice.length + 12 <= MAX_DESCRIPTION);
  if (target < 0) return { action: "FAIL", why: "no project description has room for the notice" };
  return { action: "add", target };
}

function apply(rel, kind, step) {
  const notice = NOTICES[kind];
  const path = join(REPO_ROOT, rel);
  const text = readFileSync(path, "utf8");
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  if (step.action === "upgrade") {
    // The legacy notice is one line of the literal block; swap it in place.
    const count = text.split(step.legacy).length - 1;
    if (count !== 1) return `found the old ${kind} notice ${count} times, expected once`;
    writeFileSync(path, text.replace(step.legacy, () => notice));
  } else {
    const lines = text.split(eol);
    let seen = -1, at = -1;
    for (let i = 0; i < lines.length; i++) {
      if (/^\s+description: \|-?$/.test(lines[i]) && lines[i - 1] && /^\s+- name: /.test(lines[i - 1])) {
        if (++seen === step.target) { at = i; break; }
      }
    }
    if (at < 0) return `could not find project ${step.target + 1}'s description block`;
    appendToBlock(lines, at, notice);
    writeFileSync(path, lines.join(eol));
  }
  const after = loadBlueprint(rel).fm.starter_structure.pillars[0].areas[0].projects[step.target].description;
  if (!after.trimEnd().endsWith(notice)) return "notice did not land where expected";
  return null;
}

function publishableIds(file) {
  const data = readJson(file);
  const picks = Array.isArray(data) ? data : ["tier1", "tier2", "tier3"].flatMap((t) => data[t] ?? []);
  return new Set([...launchIds(), ...picks]);
}

const counts = { ok: 0, add: 0, upgrade: 0, FAIL: 0 };
const byKind = {};
const inSet = {};
const subset = idsFile ? publishableIds(idsFile) : null;
const failures = [];
let changed = 0;
for (const rel of listBlueprintFiles()) {
  if (!libraryPathParts(rel)) continue;
  const { fm } = loadBlueprint(rel);
  const kind = noticeKind(fm.id, fm.tags ?? []);
  if (!kind) continue;
  const step = plan(rel, fm, kind);
  counts[step.action]++;
  byKind[kind] = (byKind[kind] ?? 0) + 1;
  if (subset?.has(fm.id)) inSet[kind] = (inSet[kind] ?? 0) + 1;
  if (step.action === "FAIL") { failures.push(`${rel}: ${step.why}`); if (list) console.log(`FAIL\t${kind}\t${fm.id}\t${step.why}`); continue; }
  if (list) { console.log(`${step.action}\t${kind}\t${fm.id}`); continue; }
  if (step.action === "ok") continue;
  if (check) { failures.push(`${rel}: ${step.action === "upgrade" ? `old wording of the ${kind} notice` : `no ${kind} notice`}`); continue; }
  const err = apply(rel, kind, step);
  if (err) failures.push(`${rel}: ${err}`);
  else changed++;
}

if (failures.length && !list) {
  for (const f of failures.slice(0, 40)) console.error(`  x ${f}`);
  if (failures.length > 40) console.error(`  ... and ${failures.length - 40} more`);
}
if (list) {
  const fmt = (o) => Object.entries(o).sort().map(([k, v]) => `${k} ${v}`).join(", ");
  console.log(`\nwould: ${counts.add} add, ${counts.upgrade} upgrade, ${counts.ok} already current, ${counts.FAIL} fail`);
  console.log(`all library blueprints with a notice: ${fmt(byKind)}`);
  if (subset) console.log(`of those, in launch.json + ${idsFile} (${subset.size} ids): ${fmt(inSet)}`);
  process.exit(counts.FAIL ? 1 : 0);
}
if (check) {
  console.log(`notices: ${counts.ok} current, ${counts.add} missing, ${counts.upgrade} on old wording, ${counts.FAIL} need a decision`);
  process.exit(failures.length ? 1 : 0);
}
console.log(`notices: ${changed} added or upgraded, ${counts.ok} already current, ${failures.length} failed`);
process.exit(failures.length ? 1 : 0);
