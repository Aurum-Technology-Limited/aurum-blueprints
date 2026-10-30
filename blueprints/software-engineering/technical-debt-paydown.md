---
id: software-engineering.technical-debt-paydown
name: Technical Debt Paydown
description: "A shared definition, a scored debt register, an agreed capacity share and the weekly and monthly routines that pay debt down steadily, for engineers, teams and managers."
category: business
version: 1.0.0
tags: [software-engineering, technical-debt-paydown, engineer, team, manager, code-health, debt-register, prioritisation]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - meeting-notes
    - remediation-plan
    - reading-queue
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Technical Debt Paydown
          description: "Identifying, prioritising and steadily paying down technical debt so the codebase stays changeable without stopping feature work."
          projects:
            - name: Shared definition of technical debt for the team
              description: |-
                ## Purpose
                Ask five engineers what counts as technical debt and you get five answers: ugly code, missing tests, an old framework, a product decision someone dislikes. Until the team agrees a one-page definition with examples of what is and is not debt, the register fills with opinions and the conversation with product never lands. Agreeing it first makes every later project faster to run.

                ## Milestones
                1. A one-page definition that describes debt as anything making future change slower, riskier or costlier than it needs to be.
                2. Five worked examples of debt and five of things that are not debt, drawn from your own codebase.
                3. The definition agreed in a team meeting with the product manager present.
                4. The page linked from the repository README and the debt ticket template.

                ## Notes
                Keep bugs and missing features out of the definition. Debt is about the cost of change, not about what the product does wrong today.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page team definition of technical debt with ten local examples is agreed in a meeting and linked from the repository README."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask three teammates for one example each of debt that slowed them down this month"
                - "Ask the agent to draft a one-page definition from those examples"
                - "List five things the team should not log as debt, such as bugs and feature requests"
                - "Agree the wording at the next team meeting and link it from the README"
            - name: Technical debt register in the issue tracker
              description: |-
                ## Purpose
                Debt that lives only in people's heads leaves the company when they do, and debt scattered across chat threads and code comments can never be prioritised. One register in the tool the team already uses, with a consistent set of fields, turns complaints into items that can be scored, scheduled and closed. A register in a separate spreadsheet tends to die within a quarter, so put it where the work happens.

                ## Milestones
                1. A debt issue type or label set up in the tracker the team uses every day.
                2. Required fields agreed: affected area, symptom, cost when touched, rough effort and owner.
                3. The first twenty items entered from existing tickets, comments and notes.
                4. A saved view that shows open debt items sorted by score.

                ## Notes
                Start from the **Risk register** template if you want a page that summarises the top items for people outside the team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The team's issue tracker holds at least twenty debt items with the agreed fields filled in and a saved view sorted by score."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a debt label or issue type in the team's tracker"
                - "Agree the five required fields for every debt item"
                - "Move twenty existing debt notes and tickets into the register"
                - "Merge or close register entries that duplicate or no longer apply @recurring(monthly:28)"
            - name: First debt inventory in a one-hour team session
              description: |-
                ## Purpose
                Putting the team in a room for an hour and asking where the codebase hurts is the quickest way to populate a register. Silent writing first, then grouping, surfaces the debt that everyone works around but nobody has written down. The output is raw, but it gives the register its first real shape within a fortnight of starting.

                ## Milestones
                1. A one-hour session held with every engineer who works in the codebase.
                2. Sticky notes or a shared board grouped into themes such as testing, coupling, tooling and data.
                3. Each theme given a rough sense of pain from the people who touch it most.
                4. Every note entered into the debt register within two days of the session.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A team inventory session has been held and every item raised appears in the debt register within two working days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a one-hour session with every engineer on the team"
                - "Prepare a shared board with columns for testing, coupling, tooling, data and other"
                - "Run ten minutes of silent writing before any discussion"
                - "Enter every item into the register within two days"
            - name: Change hotspot map from version control history
              description: |-
                ## Purpose
                Debt in code nobody touches costs almost nothing; debt in the files changed every week costs you on every change. Combining how often each file changes with how complex it is shows the handful of hotspots where paydown returns the most. Most codebases have fewer than twenty files that matter this much.

                ## Milestones
                1. Commit counts per file for the last twelve months extracted from version control.
                2. A complexity measure gathered for the same files, such as lines of code or cyclomatic complexity.
                3. A ranked list of the top twenty files by change frequency multiplied by complexity.
                4. Each top hotspot checked against the register and added if missing.

                ## Notes
                Exclude generated files, lock files and migrations, or they will crowd out the real hotspots.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of the top twenty change hotspots from the last twelve months exists, and each one is linked to a register item."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export twelve months of per-file commit counts from version control"
                - "Collect a complexity figure for each frequently changed file"
                - "Rank files by change frequency times complexity and keep the top twenty"
                - "Add any hotspot missing from the debt register"
            - name: Cost of debt estimate in engineer hours
              description: |-
                ## Purpose
                Leadership rarely funds work described as making the code nicer, but they do fund work that returns hours. Estimating how many engineer hours the top debt items cost each month, from slowed features, repeated incidents and manual workarounds, turns the register into something a budget holder can weigh. Ranges are fine; a rough figure beats none.

                ## Milestones
                1. The ten highest-scored register items each given a low and high monthly cost in engineer hours.
                2. Each estimate tied to evidence: a ticket that overran, an incident, a manual step.
                3. A total monthly cost range for the top ten written down.
                4. The method recorded so the estimate can be repeated next quarter.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The top ten debt items each carry a monthly cost range in engineer hours backed by at least one piece of evidence."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the ten highest-scored items from the debt register"
                - "Find one ticket, incident or manual step that shows each item's cost"
                - "Write a low and high monthly hour estimate beside each item"
                - "Record the estimation method in the register's description"
            - name: Debt ticket template and labels
              description: |-
                ## Purpose
                A debt ticket that says only 'clean up the payments module' will sit untouched for a year because nobody can tell how big it is or why it matters. A short template that asks for the symptom, where it bites, the cost when touched and a smallest useful first step makes items actionable by anyone on the team. Labels for the type of debt let you see patterns later.

                ## Milestones
                1. A ticket template with fields for symptom, location, cost when touched, first step and effort.
                2. A small label set agreed, for example code, test, architecture, tooling, data and documentation.
                3. The template set as the default for the debt issue type.
                4. Ten existing register items rewritten to the new template as examples.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A debt ticket template and six or fewer type labels are live in the tracker, with ten items already using them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a ticket template with symptom, location, cost, first step and effort"
                - "Agree no more than six debt type labels with the team"
                - "Set the template as the default for debt tickets"
                - "Rewrite ten existing debt items to match the template"
            - name: Baseline of code health indicators
              description: |-
                ## Purpose
                Without a starting point, nobody can say whether a year of paydown made any difference. Recording a few indicators today, such as open debt items, hotspot complexity, build time, test suite duration and the share of time spent on unplanned work, gives every later conversation a reference. Pick numbers you can collect in under an hour each month, or the baseline will never be repeated.

                ## Milestones
                1. Four to six indicators chosen, each with a written definition and data source.
                2. Today's value recorded for every indicator.
                3. A monthly collection routine owned by a named person.
                4. The baseline shared with the team and the product manager.

                ## Notes
                Start from the **Metrics log** template. Avoid lines of code as a goal; it rewards the wrong behaviour.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A metrics log holds today's values for four to six defined code health indicators, each with a named data source and owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose four to six indicators that can be collected in under an hour"
                - "Write a one-line definition and data source for each"
                - "Record today's value for every indicator"
                - "Name the person who collects them each month"
            - name: Agreed capacity share for debt work
              description: |-
                ## Purpose
                Debt work that has to win against every feature request one ticket at a time almost always loses. A standing agreement with product and engineering leadership, such as a fixed share of each sprint or one week in six, removes the weekly negotiation and makes paydown predictable. Without it every other project in this area depends on goodwill.

                ## Milestones
                1. Two or three funding models compared: fixed share per sprint, rotating owner, periodic fix-it weeks.
                2. A proposal with a specific share or schedule and the expected return.
                3. The share agreed in writing by the product manager and the engineering manager.
                4. A review date set to revisit the share after one quarter.

                ## Notes
                Many teams start between 10 and 20 percent of capacity. The number matters less than protecting it when deadlines press.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement names the share of team capacity reserved for debt work, signed off by product and engineering leads, with a review date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down how much capacity went to debt work in the last three sprints"
                - "Draft a proposal with a specific share and the expected return"
                - "Walk the product manager through the proposal before the planning meeting"
                - "Record the agreed share and review date where the team plans its work"
            - name: Debt scoring rubric for impact and effort
              description: |-
                ## Purpose
                When every item is marked urgent, the loudest engineer decides what gets fixed. A simple rubric that scores impact on change speed, risk of incidents and how often the code is touched, against effort to fix, lets anyone rank the register in a consistent way. Scores will be rough, and that is fine as long as they are consistent.

                ## Milestones
                1. A rubric with three impact factors and one effort factor, each on a short scale.
                2. Written anchors for each score so two engineers would give similar numbers.
                3. Every open register item scored at least once.
                4. The top ten by score reviewed by the team for anything that looks obviously wrong.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open debt item carries a rubric score, and the rubric with written anchors is stored with the register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose three impact factors and one effort factor for the rubric"
                - "Write one-line anchors for the low, middle and high score on each"
                - "Score every open register item using the rubric"
                - "Review the top ten as a team and adjust any obvious outliers"
            - name: Weekly debt triage of new register entries
              description: |-
                ## Purpose
                Registers grow fast once people believe they are read, and an untriaged one quickly becomes a dumping ground. Twenty minutes each week to score new items, merge duplicates and give each a first step keeps it usable. Rotating who runs triage spreads knowledge of the debt across the team.

                ## Milestones
                1. A weekly twenty-minute triage slot on the team calendar.
                2. Every new item scored, labelled and given a first step within a week of being raised.
                3. Duplicates merged and vague items sent back to the person who raised them.
                4. A rota showing who runs triage each week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No debt item stays unscored for more than seven days, checked against the register at the end of each month."
                cadence: rolling
              tasks:
                - "Book a recurring twenty-minute triage slot for the team"
                - "Score, label and add a first step to each new debt item @recurring(weekly:tue)"
                - "Set up a rota so a different engineer runs triage each week"
                - "Send vague items back to their author with one clarifying question"
            - name: Monthly debt review with the product manager
              description: |-
                ## Purpose
                Product managers make better trade-offs when they see the debt behind slow estimates, but they will not read a register of two hundred items. A thirty-minute monthly review of the top ten, what was paid down and what is slowing upcoming features keeps debt part of planning rather than a separate engineering complaint.

                ## Milestones
                1. A standing monthly thirty-minute meeting with the product manager.
                2. A one-page summary prepared for each meeting: top ten, recent paydown, debt touching the next roadmap items.
                3. Decisions from each meeting recorded with owners.
                4. At least one debt item pulled into the next sprint because of the review.

                ## Notes
                Start from the **Meeting notes** template. Lead with how debt affects the next three roadmap items; that is what the product manager can act on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly debt review with the product manager has run for three consecutive months, each with recorded decisions."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute review with the product manager"
                - "Prepare the one-page top ten and recent paydown summary @recurring(monthly:12)"
                - "Mark which debt items sit under the next three roadmap features"
                - "Record decisions and owners in the meeting notes"
            - name: Boy scout rule in everyday pull requests
              description: |-
                ## Purpose
                Most debt is paid down not in big projects but in the five-minute improvements made while passing through: a rename, an extracted function, a deleted dead branch. Making that an explicit team norm, with a light way to mark such changes, compounds over months. The rule is to leave the code a little better, not to rewrite whatever you touch.

                ## Milestones
                1. A team norm written down: small, related cleanups are welcome in feature pull requests.
                2. A size limit agreed so cleanups do not swamp the feature change.
                3. A pull request label or checkbox for including a cleanup.
                4. A monthly count of pull requests that carried a cleanup.

                ## Notes
                Keep unrelated cleanup in a separate commit inside the pull request so reviewers can read it on its own.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The cleanup norm is written into the contribution guide and at least a quarter of merged pull requests in a month carry a cleanup label."
                cadence: rolling
              tasks:
                - "Write the cleanup norm and size limit into the contribution guide"
                - "Add a cleanup label or checkbox to the pull request template"
                - "Share one good cleanup from the week in the Friday team update @recurring(weekly:fri)"
                - "Count labelled pull requests at the end of the month"
            - name: Quarterly debt paydown plan
              description: |-
                ## Purpose
                Sprint by sprint, debt work drifts toward whatever is easiest. A quarterly plan that names the two or three debt themes to attack, tied to the roadmap and the hotspot map, gives the capacity share a direction. It also gives the team something specific to report on at the end of the quarter.

                ## Milestones
                1. Two or three paydown themes chosen for the quarter, each linked to register items.
                2. Each theme tied to a roadmap item or hotspot it unblocks.
                3. A measurable target per theme, such as a module's complexity halved or a manual step removed.
                4. An end-of-quarter review of each target recorded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each quarter has a written plan of two or three debt themes with measurable targets, and the previous quarter's targets are marked met or missed."
                cadence: cyclic
              tasks:
                - "Pull the top twenty register items and the latest hotspot list"
                - "Choose two or three themes and write a measurable target for each @recurring(quarterly)"
                - "Check each theme against the next quarter's roadmap"
                - "Mark last quarter's targets as met or missed with a sentence on why"
            - name: Debt interest log during feature work
              description: |-
                ## Purpose
                Evidence for paying down debt is strongest as a record of when it actually cost you: the estimate that doubled, the bug caused by a confusing module, the day lost to a fragile script. A two-minute weekly note of these moments, linked to register items, turns gut feeling into data that scoring and business cases can use.

                ## Milestones
                1. A simple log where engineers add a line when debt slowed or broke their work.
                2. Each entry linked to a register item, or a new item created.
                3. Hours lost estimated per entry, even roughly.
                4. A monthly total of hours lost per register item.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The interest log has entries from at least half the team in a month, and each register item shows its total hours lost."
                cadence: rolling
              tasks:
                - "Set up a shared log with columns for date, item, what happened and hours lost"
                - "Add your own entries for the week before the Thursday standup @recurring(weekly:thu)"
                - "Link each log entry to a debt register item"
                - "Total hours lost per item at the end of each month"
            - name: Monthly code health dashboard update
              description: |-
                ## Purpose
                Indicators collected once are a baseline; indicators collected monthly are a trend that shows whether paydown is winning. A simple dashboard updated on a fixed day, with the baseline beside each line, keeps the team honest and gives managers a picture they can share upward without asking for a report.

                ## Milestones
                1. A dashboard or page showing each baseline indicator with its monthly values.
                2. An update made on the same day each month by the named owner.
                3. A one-line comment beside any indicator that moved sharply.
                4. A quarterly snapshot sent to engineering leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The code health dashboard has six consecutive monthly updates, each with comments on any sharp movement."
                cadence: rolling
              tasks:
                - "Create a dashboard page with the baseline value beside each indicator"
                - "Collect and enter this month's indicator values @recurring(monthly:20)"
                - "Write a one-line note for any indicator that moved sharply"
                - "Send a snapshot to engineering leadership @recurring(quarterly)"
            - name: TODO and FIXME comment sweep
              description: |-
                ## Purpose
                Code comments that say TODO or FIXME are debt that has been recorded in the one place nobody plans from. A monthly sweep that counts them, turns the meaningful ones into register items and deletes the stale ones keeps the codebase honest. Many teams find that half their TODOs refer to code that no longer exists.

                ## Milestones
                1. A script or search that lists every TODO and FIXME comment with file, line and age.
                2. The first full sweep done, with stale comments deleted.
                3. Meaningful comments converted to register items and linked by ticket number.
                4. A monthly count recorded so the trend is visible.

                ## Notes
                Agree a convention that new TODOs must include a ticket number, so the sweep gets easier each month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly TODO count is recorded for six months and every remaining TODO comment references a ticket."
                cadence: rolling
              tasks:
                - "Write a search that lists TODO and FIXME comments with their age from version control"
                - "Delete stale comments and ticket the meaningful ones @recurring(monthly:5)"
                - "Add the ticket-number convention for new TODOs to the contribution guide"
                - "Record the monthly count beside the code health indicators"
            - name: Feature flag retirement routine
              description: |-
                ## Purpose
                Feature flags are cheap to add and easy to forget, and every flag left in place doubles the paths through that code. A monthly look at flags that have been fully on or off for more than a few weeks, with an owner to remove each one, stops them hardening into permanent configuration. Old flags are also a quiet source of incidents when someone flips the wrong one.

                ## Milestones
                1. A list of every flag with owner, creation date and current state.
                2. Flags fully rolled out or abandoned for more than thirty days identified.
                3. A removal ticket with an owner created for each stale flag.
                4. A rule that new flags carry an expected removal date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No feature flag has been fully on or off for more than sixty days without a removal ticket, checked monthly."
                cadence: rolling
              tasks:
                - "Export the list of feature flags with owner, age and state"
                - "Ticket the removal of flags settled for more than thirty days @recurring(monthly:26)"
                - "Add an expected removal date field to the flag creation process"
                - "Remove one stale flag yourself this week"
            - name: Dead code and unused endpoint removal
              description: |-
                ## Purpose
                Code that nothing calls still has to be read, compiled, tested and kept compatible with every upgrade. A quarterly pass using coverage data, call logs and static analysis to find unused functions, endpoints and jobs, followed by careful deletion, is some of the cheapest paydown available. Deleted code has no bugs.

                ## Milestones
                1. A list of candidate dead code from static analysis and production call data.
                2. Each candidate confirmed unused for at least a full business cycle.
                3. Deletions made in small, separately revertable pull requests.
                4. The number of files and lines removed recorded per quarter.

                ## Notes
                Check logs across a full month or quarter before deleting an endpoint; some clients only call once a period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly dead code pass is completed with confirmed-unused items deleted in revertable pull requests and the line count recorded."
                cadence: cyclic
              tasks:
                - "Run a static analysis tool that reports unused exports and functions"
                - "Check production logs for endpoints with no calls in the last quarter"
                - "Delete confirmed dead code in small separate pull requests @recurring(quarterly)"
                - "Record files and lines removed in the code health log"
            - name: Rotating debt owner each sprint
              description: |-
                ## Purpose
                Capacity for debt work that belongs to everyone tends to belong to no one. Naming one engineer per sprint as debt owner, responsible for spending the agreed share and reporting what was done, makes the capacity real and spreads understanding of the codebase's weak spots. It also gives quieter engineers a visible way to contribute.

                ## Milestones
                1. A rota of debt owners published for the next six sprints.
                2. A short brief for the owner: pick from the top of the register, spend the share, report at the review.
                3. Each sprint review including a two-minute report from the debt owner.
                4. Every engineer on the team having held the role at least once.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive sprints have a named debt owner who reports completed paydown at the sprint review."
                cadence: rolling
              tasks:
                - "Publish a debt owner rota for the next six sprints"
                - "Write a five-line brief explaining what the debt owner does"
                - "Hand the debt owner role to the next person at Monday planning @recurring(weekly:mon)"
                - "Add a two-minute debt owner slot to the sprint review agenda"
            - name: Learning the technical debt quadrant
              description: |-
                ## Purpose
                Not all debt is the same: some was taken on deliberately to hit a date, some came from not knowing better, and some only appeared because the domain changed. Learning the reckless and prudent, deliberate and inadvertent quadrant, and how debt accrues interest, helps you talk about it without blame and choose different responses for different kinds.

                ## Milestones
                1. The original articles on the debt metaphor and the debt quadrant read.
                2. Ten register items placed in the quadrant with a sentence on why.
                3. A short note on which quadrant your team's debt mostly sits in.
                4. A ten-minute explainer given to the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten register items have been classified in the debt quadrant and a ten-minute explainer has been given to the team."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the original articles introducing the technical debt metaphor and quadrant"
                - "Place ten register items in the quadrant with a reason for each"
                - "Write a paragraph on where most of your team's debt comes from"
                - "Give a ten-minute explainer at a team meeting"
            - name: Reading list on working with legacy code
              description: |-
                ## Purpose
                Experienced engineers who pay down debt safely have usually read the same few books: working with legacy code, refactoring catalogues, and studies of how codebases decay. Reading them deliberately, one chapter a week with a note of what applies to your codebase, gives you a vocabulary of seams, characterisation tests and safe moves that makes paydown faster and less risky.

                ## Milestones
                1. A reading list of three to five books and essays on legacy code and refactoring.
                2. One chapter read each week with a short note on how it applies locally.
                3. At least three techniques tried on real register items.
                4. A one-page summary of the most useful ideas shared with the team.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three books or long essays on legacy code are finished, with notes, and three techniques have been applied to register items."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List three to five books and essays on legacy code and refactoring"
                - "Read one chapter and note one idea that applies to your codebase"
                - "Try one technique from the reading on a small register item"
                - "Write a one-page summary of the ideas worth adopting"
            - name: Characterisation tests before touching debt
              description: |-
                ## Purpose
                The biggest risk in paying down debt is changing behaviour nobody knew the code relied on. Characterisation tests capture what the code does today, right or wrong, so you can restructure it and know immediately if anything changed. Learning to write them quickly is the skill that makes the rest of this area safe.

                ## Milestones
                1. The idea of characterisation and approval testing understood from a worked example.
                2. Characterisation tests written for one untested hotspot before any change.
                3. A paydown change made on that hotspot with the tests passing throughout.
                4. A short how-to added to the team's engineering notes.

                ## Notes
                Write the test to assert whatever the code returns now, even if it looks wrong. Fixing the behaviour is a separate, deliberate change.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One untested hotspot has characterisation tests written before a paydown change, and a team how-to note exists."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Work through one published example of characterisation or approval testing"
                - "Pick an untested hotspot from the map and record its current outputs as tests"
                - "Make one paydown change on it with the tests passing throughout"
                - "Write a half-page how-to for the team's engineering notes"
            - name: Code health metrics that predict pain
              description: |-
                ## Purpose
                Teams often track the metrics their tools make easy, such as coverage percentage, rather than the ones that predict slow and risky change. Learning what change coupling, churn, cyclomatic complexity and code ownership spread actually tell you, and where each misleads, lets you pick indicators that track real debt and ignore vanity numbers.

                ## Milestones
                1. Short notes on churn, change coupling, complexity and ownership spread, with one limitation each.
                2. Each metric calculated for one module of your codebase.
                3. A comparison of what each metric said against the engineers' own view of that module.
                4. A recommendation on which indicators to keep in the dashboard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four code health metrics have been calculated for one module and a written recommendation on which to track has been shared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a short note on what churn, coupling, complexity and ownership each measure"
                - "Calculate all four for one module you know well"
                - "Ask two teammates whether the numbers match their experience of the module"
                - "Recommend which metrics belong on the code health dashboard"
            - name: Explaining debt to non-engineers in business terms
              description: |-
                ## Purpose
                Engineers who describe debt as messy code lose the argument; those who describe it as features taking twice as long, incidents that keep recurring and people afraid to touch billing usually win it. Practising a two-minute explanation in terms of time, risk and money, tested on a friendly non-engineer, is one of the highest-return skills for anyone who wants paydown funded.

                ## Milestones
                1. Three real debt items rewritten as statements about time, risk or money.
                2. A two-minute verbal explanation drafted and rehearsed.
                3. The explanation tried on a product, sales or finance colleague and their questions noted.
                4. A revised version used in a real planning or review conversation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-minute business-terms explanation of the team's debt has been tested on a non-engineer and used in one real planning conversation."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Rewrite three debt items as sentences about time, risk or money"
                - "Ask the agent to tighten the explanation to two minutes of speech"
                - "Try the explanation on a colleague outside engineering and note their questions"
                - "Use the revised version in the next planning conversation"
            - name: Recognising architecture-level debt
              description: |-
                ## Purpose
                Some of the most expensive debt never shows up in a linter: a module that every change has to pass through, a shared database that couples three services, a layer that leaks everywhere. Learning to spot it from change coupling, the pull requests that touch too many places and the questions new joiners ask lets you log it before it becomes a rewrite.

                ## Milestones
                1. Notes on the common shapes of architecture debt: god modules, shared databases, leaky layers, cyclic dependencies.
                2. A dependency graph of your codebase generated and read for cycles and hubs.
                3. Ten recent pull requests checked for how many modules each had to touch.
                4. Two architecture-level items added to the register with evidence.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two architecture-level debt items with dependency or change-coupling evidence have been added to the register."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Generate a module dependency graph and look for cycles and hubs"
                - "Count how many modules each of the last ten pull requests touched"
                - "Note the questions new joiners ask most about how the system fits together"
                - "Log two architecture-level items with the evidence you found"
            - name: Small refactoring moves practised on katas
              description: |-
                ## Purpose
                Paying down debt safely depends on a handful of small moves done quickly and without breaking anything: extract function, inline variable, introduce parameter object, replace conditional with lookup. Practising them on short katas, with tests running and the IDE's automated refactorings, makes them second nature before you need them on production code under deadline.

                ## Milestones
                1. Three well-known refactoring katas completed with tests running throughout.
                2. The IDE's automated refactorings for rename, extract and inline used from the keyboard.
                3. A list of the ten moves you use most, with a one-line note on when each helps.
                4. One kata session run with a teammate as a pair.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three refactoring katas are completed with passing tests and a personal list of ten moves is written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick three short refactoring katas in your main language"
                - "Complete the first kata with the tests running after every change"
                - "Learn the keyboard shortcuts for rename, extract and inline in your IDE"
                - "Pair with a teammate on the third kata"
            - name: Business case for a major debt item
              description: |-
                ## Purpose
                Some debt is too big for the standing capacity share: a payment module no one dares change, a homegrown framework, a data model blocking the next product line. A short business case with the current cost, the options, the effort and the return lets leadership fund it as a deliberate investment rather than an engineering favour. A good case also says what happens if you do nothing.

                ## Milestones
                1. The item's current cost evidenced from the interest log, incidents and delayed work.
                2. Two or three options compared, including doing nothing and containing it.
                3. Effort, risk and expected return estimated for the preferred option.
                4. A two-page case presented to the budget holder and a decision recorded.

                ## Notes
                Start from the **Remediation plan** template for the delivery plan once the case is approved.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-page business case for one major debt item has been presented to the budget holder and a funding decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the interest log entries and incidents tied to the item"
                - "Write the do nothing, contain and fix options with effort for each"
                - "Draft the two-page case with cost, return and risk"
                - "Book thirty minutes with the budget holder to present it"
            - name: Fix, contain or accept decision for the top ten
              description: |-
                ## Purpose
                Not every debt item should be fixed. Some are best contained behind an interface so they stop spreading, and some are cheaper to live with because the code rarely changes or will be retired soon. Making an explicit fix, contain or accept call on the top ten items, with a reason, stops the team carrying guilt for debt it has chosen to keep.

                ## Milestones
                1. The top ten items each reviewed against touch frequency, cost and planned lifespan.
                2. A fix, contain or accept decision recorded for each with a one-line reason.
                3. Accepted items marked so they drop out of the active list.
                4. A date set to revisit accepted items.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each of the top ten debt items has a recorded fix, contain or accept decision with a reason and a revisit date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check how often each top ten item's code changed in the last year"
                - "Note any item whose code is due to be retired or replaced"
                - "Record fix, contain or accept with a one-line reason for each"
                - "Set a revisit date for every accepted item"
            - name: Choosing a code health analysis tool
              description: |-
                ## Purpose
                Static analysis and behavioural code analysis tools can surface hotspots, complexity trends and change coupling automatically, but they range from free open source scanners to costly platforms with dashboards nobody reads. Trialling two or three against the questions you actually ask, on your own repository, avoids buying a tool that adds noise rather than insight.

                ## Milestones
                1. Three questions the tool must answer written down, such as top hotspots and complexity trend.
                2. Two or three tools shortlisted, including at least one free option.
                3. Each trialled on your repository for a week.
                4. A choice recorded with cost, setup effort and the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A code health tool has been chosen after trialling at least two on the team's repository, with the reasons and cost recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the three questions a code health tool must answer for you"
                - "Shortlist two or three tools including one free option"
                - "Run each on your repository and compare the hotspots it reports"
                - "Record the choice with cost and setup effort"
            - name: Debt funding model comparison
              description: |-
                ## Purpose
                Teams pay for debt in different ways: a fixed share of every sprint, a dedicated fix-it week each quarter, a rotating owner, or a separate platform team. Each suits a different team size and release rhythm. Running one model for a quarter and comparing it honestly against another tells you which actually moves your indicators.

                ## Milestones
                1. Two funding models chosen to compare, with the indicators each should move.
                2. The first model run for a full quarter with debt work tracked.
                3. Results compared on items closed, indicators moved and team sentiment.
                4. A recommendation recorded for the next two quarters.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two debt funding models have been compared on items closed and indicators moved, with a written recommendation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick two funding models that fit your team size and release rhythm"
                - "Agree the indicators that will judge each model"
                - "Track debt items closed and hours spent through the quarter"
                - "Write a one-page comparison with a recommendation"
            - name: Sunsetting a little-used feature to delete its code
              description: |-
                ## Purpose
                Sometimes the cheapest debt paydown is removing the feature that carries it. A feature used by a handful of accounts can still demand upgrades, tests and on-call attention. Pairing usage data with the maintenance cost gives product a clear choice, and if the answer is to retire it, the code goes with it.

                ## Milestones
                1. Usage data for the candidate feature over the last six months gathered.
                2. Maintenance cost estimated from tickets, incidents and dependencies it pins.
                3. A retire or keep decision made with the product manager.
                4. If retired, users notified, the feature switched off and its code deleted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A retire or keep decision on one low-use feature is recorded with usage and cost evidence, and its code is deleted if retired."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull six months of usage data for the candidate feature"
                - "Estimate its yearly maintenance cost from tickets and incidents"
                - "Present the usage and cost to the product manager for a decision"
                - "Delete the code in revertable steps once the feature is switched off"
            - name: Consolidating duplicate implementations
              description: |-
                ## Purpose
                Most mature codebases have three ways to format a date, two HTTP clients and a validation helper copied into five places, each with slightly different bugs. Finding the duplicates, choosing one to keep and migrating callers removes a steady source of inconsistency and doubles the value of every future fix.

                ## Milestones
                1. A list of duplicated helpers and libraries found by search and duplication detection.
                2. One canonical implementation chosen per group, with tests.
                3. Callers migrated in small pull requests.
                4. Removed copies recorded and a lint rule or note added to prevent new ones.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three groups of duplicated helpers have been consolidated to one tested implementation each, with old copies deleted."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Run a duplication detector and search for repeated helper names"
                - "Choose one implementation per group and add tests to it"
                - "Migrate callers in small pull requests"
                - "Add a lint rule or contributor note that points to the kept version"
            - name: Test debt paydown in the riskiest module
              description: |-
                ## Purpose
                Untested modules are where debt compounds fastest, because nobody dares refactor it and every change is done by hand-testing. Choosing the riskiest such module from the hotspot map and bringing it to a level where the team will change it confidently pays back on every feature that passes through it.

                ## Milestones
                1. The riskiest under-tested module chosen from hotspots and incident history.
                2. Its critical paths listed with the current test status of each.
                3. Tests added for every critical path, starting with characterisation tests.
                4. Engineers who change the module asked whether they now feel safe doing so.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every critical path in the chosen module is covered by automated tests and the engineers who change it confirm they can refactor safely."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick the under-tested hotspot with the most incidents in the past year"
                - "List its critical paths and mark which have tests today"
                - "Add characterisation tests for the untested critical paths"
                - "Ask the engineers who change it most whether it now feels safe"
            - name: Configuration and environment variable cleanup
              description: |-
                ## Purpose
                Configuration debt hides well: environment variables nobody reads, settings that differ between environments for reasons no one remembers, and defaults buried in code. Listing every setting, who reads it and why it exists removes a class of 'works on staging' incidents and makes new environments far quicker to stand up.

                ## Milestones
                1. An inventory of every configuration key and environment variable per environment.
                2. Each key matched to the code that reads it, with unused ones flagged.
                3. Unused keys removed and unexplained differences between environments resolved or documented.
                4. A rule that new keys are documented where they are defined.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every configuration key in each environment is either used and documented or removed, with differences between environments explained."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the configuration keys from each environment into one list"
                - "Search the codebase for where each key is read"
                - "Remove unused keys and document the remaining differences between environments"
                - "Add a comment requirement for new configuration keys to the contribution guide"
            - name: Unused database columns and tables removal
              description: |-
                ## Purpose
                Old columns and tables linger because removing them feels risky, yet every one of them confuses new engineers, slows migrations and backups, and may hold data you no longer have a reason to keep. A careful process of proving disuse, stopping writes, waiting and then dropping clears data debt without surprises.

                ## Milestones
                1. Candidate columns and tables listed from schema review and query logs.
                2. Each candidate confirmed unused by code search and a period of query monitoring.
                3. Reads and writes removed from code first, then the objects dropped after a waiting period.
                4. A backup or export kept for any dropped data the business may need.

                ## Notes
                Check retention rules with whoever owns data protection before dropping anything holding personal or financial records.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Confirmed-unused columns and tables have been dropped in two stages, with exports kept where the data owner requires them."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List columns and tables with no references in the codebase"
                - "Monitor query logs for any access to the candidates over a month"
                - "Remove code references, then drop the objects after the waiting period"
                - "Confirm retention needs with the data owner before dropping records"
            - name: Fix-it week for the debt register
              description: |-
                ## Purpose
                A focused week where the whole team works only on debt clears a surprising amount: dozens of small items, one or two medium ones, and the morale boost of seeing the register shrink. It works best with items prepared in advance, sized to finish within the week, and a demo at the end so the work is seen.

                ## Milestones
                1. A week agreed with product and blocked on the team calendar.
                2. A shortlist of items sized to finish within the week, each with an owner.
                3. Daily progress shared in the team channel.
                4. A closing demo of what was paid down, with the register count before and after.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fix-it week has run with a closing demo, and the register shows the number of items closed during it."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree the fix-it week dates with the product manager"
                - "Shortlist register items that can be finished within the week"
                - "Ask each engineer to claim items before the week starts"
                - "Run a closing demo with the before and after register count"
            - name: Debt retrospective after a major release
              description: |-
                ## Purpose
                Big releases are where deliberate debt is taken on: the hardcoded value, the skipped test, the duplicated logic to make the date. A short retrospective soon after launch, while memories are fresh, logs every shortcut taken so they become register items rather than surprises six months later.

                ## Milestones
                1. A forty-five-minute retrospective held within two weeks of the release.
                2. Every deliberate shortcut taken for the release listed.
                3. Each shortcut entered in the register with the reason it was taken.
                4. The most costly two scheduled for paydown in the next quarter's plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within two weeks of a major release, every deliberate shortcut taken for it is in the register and two are scheduled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a forty-five-minute retrospective within two weeks of the release"
                - "Ask everyone to list the shortcuts they took before the meeting"
                - "Enter each shortcut in the register with its reason"
                - "Schedule the two costliest in the next quarterly plan"
            - name: Annual debt review for engineering leadership
              description: |-
                ## Purpose
                Once a year, leadership should see the whole picture: how the indicators moved, what was paid down, what it returned, and what the biggest remaining risks are. A concise annual review keeps debt funding on the agenda and makes it easier to defend the capacity share when budgets are set.

                ## Milestones
                1. Twelve months of indicators summarised with the baseline beside them.
                2. The year's main paydown wins listed with their measured or estimated return.
                3. The top five remaining risks described in business terms.
                4. A presentation given and the next year's capacity share confirmed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An annual debt review with indicator trends, wins and top five risks has been presented and next year's capacity share confirmed."
                cadence: cyclic
              tasks:
                - "Summarise twelve months of code health indicators against the baseline"
                - "List the year's main paydown wins with their return"
                - "Present the annual review to engineering leadership @recurring(yearly)"
                - "Record the confirmed capacity share for the coming year"
            - name: Paydown before a planned launch or scale-up
              description: |-
                ## Purpose
                Launches, marketing pushes and big customer onboardings put weight on exactly the code that debt has weakened. Reviewing the register against the paths that will carry the new load, and paying down the items that could cause an outage or a slow response, is cheaper than fixing them in public. Set the date well ahead so there is time to act.

                ## Milestones
                1. The user paths and services the launch will stress listed.
                2. Register items on those paths identified and rated for launch risk.
                3. High-risk items paid down or contained before the launch freeze.
                4. Remaining known risks written up for the on-call engineers.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All register items rated high launch risk on the affected paths are closed or contained before the launch freeze."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List the user paths and services the launch will put under load"
                - "Find register items on those paths and rate their launch risk"
                - "Schedule high-risk items into the sprints before the freeze"
                - "Write remaining known risks into a note for the on-call engineers"
            - name: Debt handover when an engineer leaves
              description: |-
                ## Purpose
                When the engineer who wrote a tricky subsystem leaves, the debt they knew about leaves too, along with the reasons behind odd decisions. A structured handover session focused on known debt, workarounds and the things they never got round to fixing captures knowledge that no code review will recover.

                ## Milestones
                1. A handover session booked in the leaver's last two weeks.
                2. Their known debt, workarounds and risky areas listed.
                3. Each item entered in the register with their explanation attached.
                4. A named engineer taking ownership of each area they leave behind.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Before an engineer's last day, their known debt and workarounds are in the register and each area they owned has a new named owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a ninety-minute debt handover in the leaver's last two weeks"
                - "Ask them to list known debt, workarounds and areas they avoided"
                - "Enter each item in the register with their explanation"
                - "Name a new owner for every area they leave behind"
            - name: Inheriting a codebase as a new tech lead
              description: |-
                ## Purpose
                A new tech lead often inherits a codebase with a reputation and no map. Spending the first month listening, reading the hotspots and building the register before proposing any fixes earns the team's trust and avoids the classic mistake of announcing a rewrite in week two. The aim is a shared picture and one early win, not a grand plan.

                ## Milestones
                1. One-to-one conversations held with every engineer about where the code hurts.
                2. The hotspot map and register built or refreshed.
                3. One small, visible debt item paid down in the first month.
                4. A thirty-day summary of the debt picture shared with the team and your manager.

                ## Notes
                Resist proposing large changes in the first month. Understanding why the code looks the way it does often changes what you would fix.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within thirty days, every engineer has been interviewed, the register is refreshed and one debt item has been paid down."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Book a thirty-minute conversation with each engineer on the team"
                - "Ask each one which part of the code they avoid and why"
                - "Pick one small, visible debt item to pay down this month"
                - "Share a thirty-day debt summary with the team and your manager"
            - name: Debt plan for an early-stage team after first launch
              description: |-
                ## Purpose
                Early-stage teams take on debt on purpose to find product fit, which is right, but the bill arrives when the first paying customers start depending on the prototype. A deliberate plan after launch separates the shortcuts that now carry real risk, such as missing backups or no tests on billing, from the ones that can wait until the product settles.

                ## Milestones
                1. A list of every shortcut taken during the prototype phase.
                2. Items touching money, data loss or security separated as must-fix.
                3. Must-fix items scheduled into the next six weeks.
                4. A simple rule agreed for which new shortcuts are acceptable and how they are logged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All prototype shortcuts touching money, data loss or security are fixed within six weeks of the plan being written."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every shortcut taken while building the prototype"
                - "Mark the ones that touch money, data loss or security as must-fix"
                - "Schedule the must-fix items across the next six weeks"
                - "Agree a one-line rule for which new shortcuts are acceptable"
            - name: Debt paydown in a team of one or two
              description: |-
                ## Purpose
                With one or two engineers there is no capacity share to negotiate, no rota and no fix-it week, only the same people doing everything. A lightweight system of a short register, a fixed half day each month and a rule to pay down the debt in whatever you are about to change keeps the codebase workable without process overhead.

                ## Milestones
                1. A register of no more than twenty items kept in the same tracker as features.
                2. A half day each month blocked for debt work and protected.
                3. A habit of checking the register before starting any feature in an affected area.
                4. Three months of monthly half days completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly debt half days have been completed and the register stays at twenty items or fewer."
                cadence: rolling
              tasks:
                - "Trim the register to the twenty items that matter most"
                - "Block a half day each month for debt work in your calendar"
                - "Spend the monthly half day on the top register item @recurring(monthly:3)"
                - "Check the register before starting any feature in an affected area"
            - name: Debt alignment after a team merger or acquisition
              description: |-
                ## Purpose
                When two teams or codebases come together, each brings its own debt, conventions and opinions about the other's code. Building one shared register with a common rubric, rather than two competing lists, avoids months of quiet blame and helps decide which parts of each system carry forward.

                ## Milestones
                1. Both teams' existing debt lists gathered in one place.
                2. A single scoring rubric agreed by engineers from both sides.
                3. One merged register with duplicates and overlaps resolved.
                4. A joint top ten agreed and presented to both teams' managers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single debt register scored with one rubric agreed by both teams exists, with a joint top ten presented to both managers."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect both teams' debt lists and notes into one shared space"
                - "Hold a session with engineers from both sides to agree one rubric"
                - "Merge the lists and resolve overlapping items"
                - "Present the joint top ten to both managers"
            - name: Protecting debt capacity under deadline pressure
              description: |-
                ## Purpose
                The capacity share is easiest to agree and hardest to keep: the first tight deadline usually takes it, and it rarely comes back. Managers who want paydown to last need a written rule for when the share can be borrowed, how it is paid back, and a monthly check that the agreed share was actually spent.

                ## Milestones
                1. A written rule for when debt capacity may be borrowed and who approves it.
                2. A payback rule, such as borrowed time returned within two sprints.
                3. Actual debt time compared with the agreed share each month.
                4. Any shortfall raised with product leadership with a payback date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly comparisons of actual versus agreed debt capacity exist for a quarter, and every shortfall has a payback date."
                cadence: rolling
              tasks:
                - "Write the rule for borrowing debt capacity and who can approve it"
                - "Agree a payback window with the product manager"
                - "Compare actual debt time with the agreed share @recurring(monthly:8)"
                - "Raise any shortfall with product leadership along with a payback date"
            - name: Taking agency-built code in-house
              description: |-
                ## Purpose
                Code delivered by an agency or contractors often works but was built to hand over, not to live with: thin tests, no runbooks, dependencies pinned to whatever was current at delivery. Assessing it as debt before the team takes ownership, and agreeing what the supplier fixes before final sign-off, avoids paying for their shortcuts twice.

                ## Milestones
                1. An assessment of tests, documentation, dependency age and build reproducibility.
                2. Findings logged as register items, with those inside the contract scope marked.
                3. In-scope items raised with the supplier before final acceptance.
                4. The remaining items scheduled into the team's first quarter of ownership.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An assessment of the handed-over code is logged in the register and in-scope items have been raised with the supplier before acceptance."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check whether the code builds from a clean checkout using only its own instructions"
                - "Review test coverage, documentation and dependency age"
                - "Log findings in the register and mark those inside the contract scope"
                - "Raise in-scope items with the supplier before signing off"
            - name: Debt fitness functions in the pipeline
              description: |-
                ## Purpose
                Paying debt down is wasted if new debt of the same kind arrives the next week. Fitness functions are automated checks in the pipeline that fail when a known problem returns: a forbidden dependency between layers, a function above a complexity limit, a new cycle in the module graph. They turn hard-won paydown into a rule the build enforces.

                ## Milestones
                1. Three kinds of debt the team has paid down and does not want back chosen.
                2. An automated check written for each, such as dependency rules or complexity thresholds.
                3. The checks running in the pipeline, warning first and then failing builds.
                4. A short note in the repository explaining each check and how to request an exception.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three fitness functions guarding paid-down debt run in the pipeline and fail the build on regression."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick three kinds of paid-down debt the team never wants back"
                - "Write an architecture or complexity check for each"
                - "Run the checks as warnings for two weeks before making them fail"
                - "Document each check and its exception process in the repository"
            - name: Ratcheting down suppressed warnings and type errors
              description: |-
                ## Purpose
                Large codebases often carry thousands of suppressed lint warnings, ignored type errors or skipped tests, too many to fix at once. A ratchet records today's count as a baseline, fails the build if it rises, and lowers the ceiling every time someone removes a few. Progress becomes automatic and nobody has to stop feature work for it.

                ## Milestones
                1. Current counts of suppressions, ignored type errors and skipped tests recorded per module.
                2. A pipeline check that fails when any count rises above its baseline.
                3. The baseline lowered automatically or by hand whenever the count falls.
                4. A monthly record of the counts showing the trend.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pipeline ratchet blocks increases in suppressions, ignored type errors and skipped tests, and monthly counts show a downward trend."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count suppressions, ignored type errors and skipped tests per module"
                - "Add a pipeline step that fails when any count rises"
                - "Lower the baseline file to match the new counts @recurring(monthly:18)"
                - "Share the monthly counts with the team"
            - name: Debt portfolio view across several teams
              description: |-
                ## Purpose
                In a larger organisation, each team's register tells only part of the story: the worst debt often sits in shared libraries, platforms and the seams between teams. A portfolio view that rolls up the top items from every team, with cross-team items owned explicitly, lets an engineering director fund paydown where it matters most rather than where the loudest team sits.

                ## Milestones
                1. A common minimum set of fields agreed so every team's register can be rolled up.
                2. Each team's top five items gathered into one portfolio view.
                3. Cross-team and shared-library items identified and given an owning team.
                4. A monthly portfolio review with team leads and the engineering director.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A portfolio view of every team's top five debt items is reviewed monthly and every cross-team item has an owning team."
                cadence: rolling
              tasks:
                - "Agree the minimum fields every team's register must carry"
                - "Collect each team's top five items into one portfolio page"
                - "Assign an owning team to every cross-team or shared-library item"
                - "Run the portfolio review with team leads and the director @recurring(monthly:15)"
            - name: Measuring the delivery impact of paydown
              description: |-
                ## Purpose
                After a year of steady paydown, the question leadership will ask is whether it made delivery faster or safer. Comparing cycle time, incident counts and estimate accuracy for work in paid-down areas against areas left alone gives an honest answer. Expect noise; the aim is evidence strong enough to keep investing or to change course.

                ## Milestones
                1. Paid-down areas and comparable untouched areas identified.
                2. Cycle time, incident count and estimate overrun gathered for both, before and after.
                3. Differences summarised with the caveats stated plainly.
                4. Findings shared with the team and leadership with a recommendation.

                ## Notes
                Correlation is weak evidence here; other changes happen at the same time. Say so in the summary rather than overclaiming.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A before and after comparison of delivery measures for paid-down versus untouched areas is written up with caveats and shared."
                cadence: cyclic
              tasks:
                - "List the areas paid down this year and two comparable untouched areas"
                - "Gather cycle time, incidents and estimate overrun for each, before and after"
                - "Refresh the comparison with the latest quarter's data @recurring(quarterly)"
                - "Ask the agent to summarise the comparison with its caveats for leadership"
---

# Technical Debt Paydown

Technical debt is every shortcut, outdated decision and half-finished cleanup that makes the next change slower or riskier than it should be, and paying it down is a matter of steady habit rather than one heroic rewrite. These projects start with the foundations (a shared definition, a register, a scoring rubric, a hotspot map and an agreed share of capacity), move through the routines that keep debt visible and shrinking, then the skills that make paydown safe, the decisions worth making on purpose, the events that concentrate effort, situations such as an inherited codebase or a team of two, and specialist work like fitness functions and a portfolio view across teams.

What repeats is a Tuesday triage of new register entries, a Thursday note of where debt slowed you down, a Monday handover of the debt owner role, monthly sweeps of comments, feature flags and the dashboard, a monthly review with product, and a quarterly plan for what gets paid down next. The Risk register, Metrics log, Meeting notes, Remediation plan and Reading queue templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
