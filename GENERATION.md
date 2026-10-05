# Generating the blueprint library

This is the spec every generator follows to write one area blueprint. The library is
50 pillars x 50 areas = 2,500 files, one blueprint per area, and they must read as one
product, not 2,500 improvisations. Read the whole spec, then the two pilot files under
`blueprints/physical-health/`, before writing anything.

A file is done when `npm run build:catalog && npm run validate` passes. The validator
enforces every MUST below; the rest is the quality bar a reviewer holds you to.

## 1. Inputs and output

You are given one `pillarId` and one `areaId`.

- `taxonomy/pillars.json` gives the pillar's `name`, `emoji`, `category`,
  `review_cadence` and `description`. Copy them exactly.
- `taxonomy/areas.json` (`pillars.<pillarId>[]`) gives the area's `id`, `name`,
  `description` and `personas`. Copy name and description exactly. Read the area's
  49 siblings too: your 50 projects must not wander into a sibling's territory.
- Write exactly one file: `blueprints/<pillarId>/<areaId>.md`, LF line endings, UTF-8.
- Do not edit the taxonomy, `catalog.json` or any other blueprint. Run
  `npm run build:catalog` to index your file.

## 2. File skeleton

Indentation is two spaces per level and is load-bearing. Project fields sit at 14
spaces; the lines inside a `description: |-` block sit at 16.

```yaml
---
id: <pillarId>.<areaId>
name: <area name>
description: "<one sentence, 40 to 240 chars, what installing this gives you>"
category: <the pillar's category>
version: 1.0.0
tags: [<pillarId>, <areaId>, <2 to 6 more slugs: personas, then topic words>]
author: Aurum Technology
starter_structure:
  templates:            # omit the key entirely if no project names a template
    - <built-in template id>
  pillars:
    - name: <pillar name>
      emoji: "<pillar emoji>"
      description: "<pillar description, verbatim>"
      pillarFrontmatter:
        review_cadence: <pillar review_cadence>
      areas:
        - name: <area name>
          description: "<area description, verbatim>"
          projects:
            - name: <project name>
              description: |-
                ## Purpose
                <paragraph>

                ## Milestones
                1. <milestone>
                2. <milestone>
                3. <milestone>

                ## Notes
                <optional paragraph>
              priority: medium
              deadlineOffsetDays: 30      # optional, see 5.4
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "<one checkable sentence>"
                cadence: rolling
                effort_hours_estimate: "6"  # optional, quoted
              tasks:
                - "<task>"
                - "<task> @recurring(monthly:1)"
                - "<task> @priority(high)"
            # ... 49 more projects
---

# <area name>

<Two short paragraphs, see section 7.>
```

Key order inside a project is always: `name`, `description`, `priority`,
`deadlineOffsetDays` (if any), `frontmatter`, `tasks`.

### YAML hygiene (MUST)

- Double-quote every task, every `success_criteria`, both one-line `description`s and
  `effort_hours_estimate`. A plain scalar containing `: ` breaks the parse, and the
  validator rejects anything that means something different under YAML 1.1 and 1.2
  (unquoted `yes`, `no`, `on`, `off`, `08`, `10:30`).
- Inside a double-quoted string, escape `"` as `\"`. Prefer rewording.
- Project descriptions use the literal block `|-`. No line inside it may start at
  column 0, and none may start with `---`.
- No tabs. No trailing whitespace.

## 3. What the app does with this file (so you know why the rules exist)

Installing the blueprint writes:

- `1-Pillars/01 - <pillar>.md` (skipped if it already exists, so the pillar page is
  written by whichever area of that pillar the user installs first; that is why the
  pillar block must be identical in all 50 files of a pillar),
- `2-Areas/<pillar>/<area>.md`,
- `3-Projects/<area>/<project>.md` for each of the 50 projects, with
  `status: active`, your `priority`, a `deadline` computed from `deadlineOffsetDays`,
  your `frontmatter` keys, then `# <project>`, your description, and `## Tasks` with
  one `- [ ] <task>` line per task.

Every task line becomes a real task row. `@recurring(...)` makes it repeat for real
(completing it spawns the next one) and `@priority(...)` sets its priority. Area and
project names become folder and file names and wikilink titles, which is why their
character set is restricted and area names are unique across all 2,500 files.

## 4. Naming

### Project names (MUST)

- 4 to 80 chars, letters, digits, space and `& ' ( ) , + . % -` only. No `/ \ : * ? " < > | # [ ] ^`.
  Must not end in `.` or a space. No double spaces.
- Unique within the area, and never equal to the area or pillar name.

### Project names (quality bar)

- Sentence case, like the app's own blueprints: "Home blood pressure baseline", not
  "Home Blood Pressure Baseline".
- Name the outcome or the system, specifically, in 3 to 8 words. The name should still
  make sense sitting in a list of 300 projects from six different areas.
  - Good: "Seven-day home blood pressure baseline", "Salt audit of the weekly shop",
    "Annual medication review with the pharmacist".
  - Bad: "Getting started", "Research", "Plan", "Track progress", "Level up", "Review".
- Do not prefix with the area name. Do not number projects.

## 5. The 50 projects

### 5.1 Coverage: a path, not a pile

Order the projects so the list reads as a route through the area, beginner to
specialist. Use this mix as a guide (counts are targets, not quotas):

| Kind | Count | Typical cadence | What it is |
|---|---|---|---|
| Foundations | 8 to 10 | one-shot | Get the basics in place: set-up, baseline, first decision. |
| Operating systems | 8 to 10 | rolling or cyclic | The recurring machinery that keeps the area healthy. Carries most of the `@recurring` tasks. |
| Skills and knowledge | 6 to 9 | phased | Learn or practise something specific. |
| Improvements and decisions | 6 to 9 | one-shot or phased | Change something, compare options, choose. |
| Events and milestones | 4 to 7 | one-shot | A dated thing to prepare for or deliver. |
| Life stages and situations | 4 to 7 | phased | Variants for the personas in `areas.json` (a parent, a carer, a founder, a team...). |
| Specialist and advanced | 3 to 6 | any | What an experienced person in this area works on. |

Cover the personas listed for the area: if the area lists `parent` and `retiree`,
some projects must be specifically for them.

### 5.2 Description (the page body)

`## Purpose` then `## Milestones` then an optional `## Notes`. No other headings.
250 to 2,200 chars in total; aim for 500 to 1,000.

- **Purpose**: one paragraph, 2 to 4 sentences. Say who this is for or when it is
  needed, what changes when it is done, and why it is worth doing now. Concrete nouns,
  numbers where they are real.
- **Milestones**: 3 to 6 numbered items (`1. `). Each is a checkable state, written
  as a result ("A shortlist of three providers, each scored against the same five
  criteria."), not an activity ("Research providers.").
- **Notes** (optional): the one or two things people get wrong, a sensible default, a
  safety note, or a template pointer. To point at a template write exactly
  `Start from the **<template name>** template.` using a name from section 6.

MUST NOT appear in a description: checkbox lines (`- [ ]`), `## Tasks`, `<!--`, `{{`,
`[[`, `@due(`, `@recurring(`, `@priority(`. Plain `- ` bullets are allowed in Notes.

### 5.3 Frontmatter

| Key | Values | Guidance |
|---|---|---|
| `mode` (MUST) | `building`, `operating`, `learning`, `research`, `service`, `event` | `learning` puts the project in the app's Learning hub; use it only for genuine study (at most about 10 per area). `service` is for work done for someone else. `event` for a dated occasion. |
| `output_kind` (MUST) | `knowledge`, `artifact`, `decision`, `habit`, `event-completion`, `deliverable` | What exists when it is done. Operating systems are usually `habit`. |
| `success_criteria` (MUST) | 30 to 300 chars, one sentence | Checkable by someone else: a number, a document, a date, a decision recorded. Not "feel better about X". |
| `cadence` (MUST) | `one-shot`, `phased`, `rolling`, `cyclic` | `rolling` never ends; `cyclic` repeats a whole cycle (a season, a year); `phased` has stages. |
| `effort_hours_estimate` | quoted whole number | Optional. Total hands-on hours for one-shot and phased projects. Omit for rolling ones. |

No other keys. Use at least three different modes across the area.

### 5.4 Priority and deadlines

- `priority`: at most 15 `high` per area (aim for 8 to 12): the foundations and the
  things with real consequences. Roughly half `medium`, the rest `low`.
- `deadlineOffsetDays` (days from install, 7 to 730): only on `one-shot` or `phased`
  projects with a natural time box, and on at most 20 projects per area (aim for 8 to
  15). Never on rolling or cyclic ones. A blueprint cannot know real dates; this is
  the only date it can carry.

### 5.5 Tasks

3 to 6 per project; 4 is the sweet spot.

- Each task is the next concrete action, verb first, 6 to 140 chars of text:
  "Book a fasting blood test through the GP surgery", not "Blood test".
- The first task should be doable in under an hour the day the blueprint is installed.
- Tasks inside one project must not repeat, and no two projects in the area should
  share more than one near-identical task.
- Annotations go at the END of the line, separated by single spaces:
  - `@recurring(<pattern>)` where pattern is exactly one of `daily`, `weekly`,
    `weekly:mon,thu` (three-letter days, lower case, comma separated), `monthly`,
    `monthly:<1-31>`, `quarterly`, `yearly`.
  - `@priority(high|medium|low)`, only when it differs from what the project implies.
- **Never `@due(...)`.** The app stores its value verbatim and resolves nothing, so a
  blueprint date is either stale or garbage. Use the project's `deadlineOffsetDays`.
- Recurrence budget, per area: at most 2 recurring tasks per project, at most 30 across
  the area (aim for 15 to 25), at most 3 `daily`. Every recurring task becomes a
  standing obligation for the user, so it must be one they would genuinely keep. Prefer
  `monthly:<day>` with varied days over bare `monthly`, so twenty installed areas do
  not all land on the 1st.
- No `@`, `<`, `>`, `[`, `]`, `{`, `}`, `|`, `#` in task text.

## 6. Templates and automation rules

Built-in templates (id, then the exact name to use in `**...** template`):

| id | name | kind |
|---|---|---|
| board-meeting | Board meeting | project |
| compliance-control | Compliance control | project |
| content-pipeline | Content pipeline | project |
| course | Course | project |
| cover-letter | Cover letter | page |
| development-plan | Development plan | project |
| feedback-themes | Feedback themes | page |
| habit-tracker | Habit tracker | project |
| household-chores | Household chores | project |
| job-application | Job application | project |
| marketing-campaign | Marketing campaign | project |
| meeting-notes | Meeting notes | page |
| metrics-log | Metrics log | page |
| month-end-close | Month-end close | project |
| monthly-budget-bills | Monthly budget and bills | project |
| onboarding-30-60-90 | Onboarding 30/60/90 | project |
| onboarding-plan | Onboarding plan | project |
| one-on-one | 1:1 | page |
| operational-checklist | Operational checklist | project |
| person | Person | project |
| portfolio-piece | Portfolio piece | page |
| product-spec | Product spec | project |
| purchase-decision | Purchase decision | project |
| reading-queue | Reading queue | project |
| remediation-plan | Remediation plan | project |
| resume | Resume | page |
| risk-register | Risk register | page |
| savings-goal | Savings goal | project |
| skills-matrix | Skills matrix | page |
| sleep-review | Sleep review | page |
| training-program | Training program | project |
| trip | Trip | project |
| vendor | Vendor | project |
| weekly-meal-plan | Weekly meal plan | page |

- Point at a template only where a user would genuinely start that project (or keep
  that record) from it: typically 0 to 6 projects per area. Never force it.
- `starter_structure.templates` MUST list exactly the ids your projects point at, each
  once, and nothing else. If none, omit the key.
- `automationRules`: default none. At most one, and only `weekly_on` (an area whose
  real rhythm is weekly) or `review_cadence_due`. Never `project_stale`: with 50
  active projects it would fire 50 times. If you add one, write a specific
  `instruction` naming this area, and `action: agent_task`.

## 7. Body below the frontmatter

```markdown
# <area name>

<Paragraph 1, 2 to 3 sentences: what this area covers and who it is for, in the voice
of a knowledgeable friend. Name the main groups of projects in the order they appear.>

<Paragraph 2, 2 to 3 sentences: what repeats (name the recurring rhythms), which
templates pair with it if any, and this fixed sentence:> Installing adds all 50
projects as active, so archive the ones that are not for you yet.
```

## 8. Quality bar: how to avoid 2,500 files of filler

Write like an expert friend who has done this, not like a brochure.

- **Specific beats general.** Every Purpose names a real situation, number, document,
  tool category or decision. "Book the blood test before the annual review so results
  are back in time" beats "Stay on top of your health".
- **Each project earns its place.** If two projects would share most of their tasks,
  merge them and add something the area is missing.
- **Vary the openings.** No more than three Purposes in a file may start with the same
  word. Do not start Purposes with "This project".
- **Banned words and phrases** (they signal filler): journey, holistic, unlock,
  leverage, empower, embark, seamless, game-changer, next level, dive into, deep dive,
  supercharge, take control, stay on top of, in today's world, it's important to,
  optimize your, transform your, robust, synergy.
- **No em dashes or en dashes** anywhere (the validator rejects them). Use commas,
  colons or full stops.
- **International English**, one spelling system per file (the pilot uses UK spelling:
  organise, programme, colour). Avoid country-specific institutions in names; in
  text, prefer the generic ("your doctor", "the tax authority") and mention a
  country-specific example only as an example.
- **Health, legal, money and safety content is organisational, never advice.** Do not
  give doses, diagnoses, legal conclusions or investment picks. Point to the right
  professional ("agree the target with your clinician") and make the project about
  preparing, recording, asking and following up.
- **Respect the persona.** A project for a carer or a student should sound like it was
  written for that life, with their constraints (time, money, other people).
- **Use the user's agent.** Where a project benefits from an AI drafting or summarising
  step, it is fine for a task to say so ("Ask the agent to draft...") but at most once
  in five projects.

## 9. Checklist before you hand back

1. `npm run build:catalog && npm run validate` passes with your file present.
2. 50 projects, ordered foundations first, specialist last.
3. Each description has Purpose, 3 to 6 Milestones that are states, optional Notes.
4. 15 to 25 recurring tasks, varied days, at most 3 daily.
5. Templates listed match templates mentioned, exactly.
6. No banned phrases, no em or en dashes, no `@due`.
7. Read five random projects aloud: if any would fit equally well in a sibling area,
   rewrite it.

## 10. Cost and size

The two pilot files are the reference for length: about 70 to 90 KB each, which is
roughly 20,000 output tokens per area file. At 2,500 files the fan-out writes on the
order of 50 million output tokens before retries; budget for a 10 to 15 percent retry
rate on validator failures.

## 11. Write a draft, render the file

Do not hand-write the YAML. Write a JSON draft at `drafts/<pillarId>/<areaId>.json`
(the folder is git-ignored) and render it:

```bash
node scripts/render-area.mjs drafts/<pillarId>/<areaId>.json
node scripts/validate.mjs --only blueprints/<pillarId>/<areaId>.md
```

`--only` checks your file without touching `catalog.json`, so many generators can run
at once. Do not run `npm run build:catalog` during a parallel run: whoever coordinates
the run rebuilds the catalog once at the end and runs the full `npm run check`.

The renderer copies the pillar and area blocks from the taxonomy, applies every
indentation and quoting rule in section 2, and appends the fixed install sentence to
the second body paragraph. It also prints the targets the validator cannot enforce
(15 to 25 recurring tasks, 8 to 12 high, 8 to 15 deadlines); fix anything it lists as
off target before you hand back. Draft shape:

```json
{
  "pillarId": "physical-health",
  "areaId": "blood-pressure-management",
  "description": "One sentence, 40 to 240 chars.",
  "tags": ["persona-or-topic", "slugs-beyond-the-pillar-and-area-ids"],
  "templates": ["purchase-decision"],
  "automationRules": [],
  "body": ["Paragraph 1.", "Paragraph 2, without the install sentence."],
  "projects": [
    {
      "name": "Choosing a validated home blood pressure monitor",
      "purpose": "Two to four sentences.",
      "milestones": ["A result, as a state.", "...", "..."],
      "notes": "Optional. May include `Start from the **Purchase decision** template.`",
      "priority": "high",
      "deadlineOffsetDays": 21,
      "mode": "research",
      "output_kind": "decision",
      "success_criteria": "One checkable sentence.",
      "cadence": "one-shot",
      "effort_hours_estimate": "2",
      "tasks": ["Verb-first task", "Recurring task @recurring(monthly:6)"]
    }
  ]
}
```

`templates`, `automationRules`, `notes`, `deadlineOffsetDays` and
`effort_hours_estimate` are optional. The two pilots,
`blueprints/physical-health/annual-health-check-ups.md` and
`blueprints/physical-health/blood-pressure-management.md`, were written this way and
are the reference for tone, length and balance.
