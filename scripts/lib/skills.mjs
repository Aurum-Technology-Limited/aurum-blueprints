// The skills each blueprint trains, for Aurum Life's levels-and-XP feature.
//
// taxonomy/blueprint-skills.json maps every published blueprint id to 2-4 of
// the app's core skills, the first being what the plan is mainly for.
// build-catalog.mjs copies each list onto the catalog entry as `skills`
// (beside `tags`), which the app reads as BlueprintManifest.skills
// (src-tauri/src/blueprints/types.rs) and prefers over its bundled fallback
// map (src-tauri/src/gamification/blueprint_skills.rs).

import { readJson } from "./blueprint.mjs";

export const SKILLS_PATH = "taxonomy/blueprint-skills.json";

/** gamification/blueprint_skills.rs MIN_SKILLS / MAX_SKILLS. */
export const MIN_SKILLS = 2;
export const MAX_SKILLS = 4;

/**
 * gamification/skills.rs CORE_SKILLS, in the app's display order, grouped by
 * its category. The names are what users see and what blueprints carry, so
 * they must match the app's spelling exactly. Copied from Aurum-Life-Desktop
 * branch feat/life-gamification @ 55ddf579; re-copy if the app renames one.
 */
export const CORE_SKILLS = [
  // Health
  "Fitness", "Nutrition", "Self-Care",
  // Mind
  "Learning", "Focus", "Analysis",
  // Career
  "Expertise", "Technology", "Leadership", "Communication", "Entrepreneurship",
  // Wealth
  "Money Management", "Investing",
  // Relationships
  "Connection", "Family", "Community",
  // Creativity
  "Creativity", "Practical Skills",
  // Spirit
  "Mindfulness", "Resilience",
  // Discipline
  "Discipline", "Organisation",
];

/** The id -> skills map, as written. */
export function loadSkillMap() {
  const map = readJson(SKILLS_PATH);
  if (!map || typeof map !== "object" || Array.isArray(map)) {
    throw new Error(`${SKILLS_PATH}: must be an object of { "<blueprint id>": ["Skill", ...] }`);
  }
  return map;
}

/** Problems with one blueprint's skill list, as messages (empty when fine). */
export function skillListProblems(list) {
  if (!Array.isArray(list)) return ["skills must be a list of core skill names"];
  const out = [];
  if (list.length < MIN_SKILLS || list.length > MAX_SKILLS) out.push(`has ${list.length} skill(s), needs ${MIN_SKILLS}-${MAX_SKILLS}`);
  for (const s of list) if (!CORE_SKILLS.includes(s)) out.push(`'${s}' is not a core skill (${CORE_SKILLS.join(", ")})`);
  if (new Set(list).size !== list.length) out.push("lists a skill twice");
  return out;
}
