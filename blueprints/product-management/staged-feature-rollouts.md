---
id: product-management.staged-feature-rollouts
name: Staged Feature Rollouts
description: "A flag inventory you can trust, a stage ladder with guardrail metrics and tested kill switches, weekly rollout reviews, drills and flag clean-up, for product teams and engineers releasing features gradually."
category: business
version: 1.0.0
tags: [product-management, staged-feature-rollouts, team, engineer, feature-flags, progressive-delivery, kill-switch, canary]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - operational-checklist
    - product-spec
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Staged Feature Rollouts
          description: "Releasing features gradually with flags, percentage rollouts and kill switches, watching metrics at each stage before going to everyone."
          projects:
            - name: Feature flag inventory with owners and expiry dates
              description: |-
                ## Purpose
                Most codebases that have used flags for a year carry dozens nobody can explain: a toggle from a launch two years ago, a percentage stuck at 50, a kill switch whose owner has left. One inventory listing every flag with its owner, current state and intended removal date is the starting point for every safer rollout, and it usually exposes a handful that are silently serving different code to different customers.

                ## Milestones
                1. Every flag in the flag service and in config files listed in one sheet.
                2. Each flag's purpose described in one plain line.
                3. A named owner on every flag, or the flag marked unowned.
                4. Flags held at a partial percentage for more than 30 days highlighted.

                ## Notes
                Search the code for flag keys as well as the flag tool. Flags read from environment variables or database rows are the ones most often missed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single inventory lists every flag with purpose, owner, state and created date, and every partially rolled out flag older than 30 days is highlighted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the full flag list from the flag service or config files"
                - "Search the codebase for flag keys that do not appear in the export"
                - "Add purpose, owner, state and created date for every flag"
                - "Highlight flags held at a partial percentage for over 30 days"
                - "Refresh the flag inventory and reassign orphaned flags @recurring(yearly)"
            - name: Choosing a feature flag platform
              description: |-
                ## Purpose
                Homegrown toggles in a config file work until the team needs percentage rollouts, targeting by account, an audit trail and a kill switch that does not need a deploy. Comparing two or three platforms, including open source and self-hosted options, against the same requirements avoids buying on demo polish and finding out later that the SDK does not support your mobile client or your data location needs.

                ## Milestones
                1. A requirements list covering SDK languages, targeting, audit log, permissions, latency and data location.
                2. Three options shortlisted, including at least one open source or self-hosted choice.
                3. A one-week trial run in a staging environment with one real flag.
                4. A decision recorded with cost over three years and the reasons.

                ## Notes
                Start from the **Purchase decision** template. Check which user attributes would leave your systems for flag evaluation, and ask your security team before sending personal data to a vendor.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A flag platform is chosen against a written requirements list after a staging trial, with three-year cost and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every language and client the flag SDK must support"
                - "Write the must-have and nice-to-have requirements on one page"
                - "Shortlist three platforms including one open source option"
                - "Run a one-week trial with a real flag in staging"
                - "Review flag platform cost and seat count before renewal @recurring(yearly)"
            - name: Flag naming and lifecycle conventions
              description: |-
                ## Purpose
                A flag called new_flow_v2 tells nobody what it controls, who owns it or when it should go. A one-page convention for names, descriptions, tags and lifecycle states, applied to every new flag from now on, makes search work, makes clean-up possible and makes the dashboard readable at two in the morning.

                ## Milestones
                1. A naming pattern agreed, for example team, product area, purpose and flag type.
                2. Required fields defined for every new flag: owner, description, ticket link and planned removal date.
                3. Lifecycle states written down: created, rolling out, fully on, ready to remove, removed.
                4. The convention linked from the flag tool and the pull request template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written flag naming and lifecycle convention is agreed by engineering leads and linked from the flag tool and the pull request template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect ten current flag names that confuse people and say why"
                - "Draft a naming pattern and the required fields for new flags"
                - "Agree the lifecycle states with the engineering leads"
                - "Add a link to the convention in the pull request template"
            - name: Rollout stage ladder for the team
              description: |-
                ## Purpose
                Without an agreed ladder every rollout is improvised: one engineer jumps from 1 to 100 percent, another sits at 10 percent for a month. A standard set of stages, for example internal staff, 1 percent, 5 percent, 25 percent, 50 percent and everyone, with minimum checks at each, gives product and engineering a shared default that riskier changes can tighten and trivial ones can skip.

                ## Milestones
                1. A default ladder of four to six stages written down with the checks required at each.
                2. Criteria for skipping or compressing stages on low-risk changes agreed.
                3. A stricter ladder defined for payments, data migrations and anything hard to reverse.
                4. The ladder used on the next two rollouts and adjusted from what was learned.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A default and a strict rollout ladder, with stage checks and skip rules, are written down and have been used on two real rollouts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look back at the last five rollouts and note the stages each used"
                - "Draft a default ladder with the checks required at each stage"
                - "Define which change types must use the stricter ladder"
                - "Present the ladder at the next engineering and product leads meeting"
            - name: Guardrail metrics baseline for rollouts
              description: |-
                ## Purpose
                Error rates, latency, crash-free sessions, sign-up completion and support contacts all move a little every day, so a rollout cannot be judged without knowing their normal range. Recording a baseline and a breach threshold for five to eight guardrail metrics means a stage is halted on evidence, not on whoever is most nervous in the channel.

                ## Milestones
                1. Five to eight guardrail metrics chosen, split between system health and customer behaviour.
                2. Four weeks of normal daily ranges recorded for each.
                3. A breach threshold agreed for each metric, with a named person who decides when it is crossed.
                4. The baseline and thresholds pinned in the rollout channel.

                ## Notes
                Start from the **Metrics log** template. Include at least one business metric, such as checkout completion, because many bad rollouts throw no errors at all.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five to eight guardrail metrics have recorded normal ranges and agreed breach thresholds, pinned where every rollout is discussed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick five to eight guardrail metrics with the engineering lead"
                - "Record four weeks of normal daily ranges for each metric"
                - "Agree a breach threshold and decision owner for each metric"
                - "Pin the baseline and thresholds in the rollout channel"
                - "Refresh guardrail baselines after traffic or seasonal shifts @recurring(quarterly)"
            - name: Kill switches for critical user paths
              description: |-
                ## Purpose
                When a new recommendation widget slows the checkout page, the fastest fix is turning it off, not a hotfix and a deploy at midnight. Listing the critical paths, putting a tested kill switch around every risky component on them and writing down who may flip each one cuts the time from noticing a problem to stopping it from hours to minutes.

                ## Milestones
                1. The five to ten critical user paths listed, such as sign-in, checkout, search and data export.
                2. Each risky dependency on those paths wrapped in a kill switch with a safe off state.
                3. Every kill switch tested in staging and its off behaviour documented.
                4. A list of kill switches with owners and who may flip them, linked from the on-call runbook.

                ## Notes
                A kill switch is only useful if the off state is safe and known. Test what users actually see when it is off, not just that the code path disappears.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every risky component on the critical user paths has a tested kill switch, listed with owners in the on-call runbook."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the critical user paths with the engineering lead"
                - "Mark which components on each path have no kill switch today"
                - "Test each kill switch's off state in staging and note what users see"
                - "Add the kill switch list with owners to the on-call runbook"
            - name: Rollout roles and decision rights
              description: |-
                ## Purpose
                Two people watching the same dashboard can reach opposite conclusions, and a rollout stalls while they argue in a thread. Writing down who proposes each stage, who can advance it, who can halt it without asking and who must be told settles the question before the pressure arrives, and gives anyone on call clear permission to stop a bad rollout.

                ## Milestones
                1. Roles named for rollout owner, approver, halt authority and informed teams.
                2. A rule that anyone on call may halt a rollout without approval, written and agreed.
                3. An escalation path for disputed calls agreed with product and engineering leads.
                4. The roles added to the rollout plan template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page decision rights note names the rollout owner, approver and halt authority and is included in the rollout plan template."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down who advanced and who halted the last three rollouts"
                - "Draft roles for owner, approver, halt authority and informed teams"
                - "Agree the halt-without-asking rule with engineering leadership"
                - "Add the roles section to the rollout plan template"
            - name: Flag service outage and fallback defaults
              description: |-
                ## Purpose
                If the flag service is slow or unreachable, every flag falls back to whatever default the code was written with, and that default may switch a half-finished feature on for everyone. Checking default values, timeouts and caching for each SDK, then testing an outage on purpose, means a vendor incident does not turn into your incident.

                ## Milestones
                1. Default values reviewed for every flag that guards unreleased or risky code.
                2. SDK timeout, caching and offline behaviour documented for each client.
                3. A simulated flag service outage run in staging with the results written up.
                4. Unsafe defaults fixed so that the off state is served when evaluation fails.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A staged outage test of the flag service has been run and documented, and every unsafe fallback default has been fixed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the fallback default of every flag guarding unreleased code"
                - "Read the SDK documentation on timeouts, caching and offline behaviour"
                - "Block the flag service in staging and record what breaks"
                - "Fix every default that would switch unreleased code on"
                - "Repeat the flag service outage test in staging @recurring(yearly)"
            - name: Targeting rules and consistent bucketing
              description: |-
                ## Purpose
                Percentage rollouts only work if the same user stays in the same bucket across sessions and devices; otherwise people see a feature appear and vanish and support fills with confused tickets. Understanding how your tool hashes users, which key it buckets on and how targeting rules are ordered prevents the subtle bugs that make staged releases look flaky.

                ## Milestones
                1. The bucketing key for each client documented: user ID, account ID or anonymous ID.
                2. Behaviour checked for logged-out users who later sign in.
                3. Rule ordering and precedence explained in a short team note with one example.
                4. A test confirming that raising the percentage keeps earlier users included.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A team note documents the bucketing key, sign-in behaviour and rule ordering, backed by a test that raising the percentage keeps earlier users in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find which identifier each client sends to the flag service"
                - "Test what a logged-out user sees after signing in"
                - "Write a short note on rule order with one worked example"
                - "Confirm earlier users stay included when the percentage rises"
            - name: Weekly rollout review
              description: |-
                ## Purpose
                Rollouts in flight drift: a feature parked at 25 percent for a quick check is still there six weeks later because nobody owned the next step. A 20-minute weekly review of every active rollout, its stage, its guardrails and its next decision keeps releases moving and catches the stuck ones before customers on two versions start comparing notes.

                ## Milestones
                1. A standing 20-minute slot with product, engineering and support represented.
                2. A single list of active rollouts showing stage, owner, days at stage and next decision.
                3. Every rollout older than its planned time at a stage given a dated decision.
                4. Notes kept for each review with decisions and owners.

                ## Notes
                Start from the **Meeting notes** template. Cancel the meeting when nothing is in flight rather than filling the slot.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review runs from a current list of active rollouts, and no rollout sits past its planned time at a stage without a dated decision."
                cadence: rolling
              tasks:
                - "Book a 20-minute weekly slot with product, engineering and support"
                - "Build the active rollouts list with stage, owner and days at stage"
                - "Run the weekly rollout review and record decisions @recurring(weekly:tue)"
                - "Set a dated decision for every rollout past its planned time at a stage"
            - name: Stale flag clean-up rhythm
              description: |-
                ## Purpose
                Every flag left in the code after it reaches 100 percent doubles the paths to test and adds a branch someone will misread later. A monthly clean-up slot, with a removal ticket raised when a flag has been fully on for 30 days, keeps the count falling instead of quietly climbing.

                ## Milestones
                1. A rule that a removal ticket is raised 30 days after a release flag reaches everyone.
                2. A monthly slot where each team removes the code behind its finished flags.
                3. The flag count tracked each month and trending down or flat.
                4. Removed flags archived in the flag tool, not only deleted from code.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No release flag stays at 100 percent for more than 60 days, and the total flag count is recorded every month."
                cadence: rolling
              tasks:
                - "List every flag that has served 100 percent for over 30 days"
                - "Raise removal tickets for each one with its owning team"
                - "Hold the monthly flag removal slot with each team @recurring(monthly:12)"
                - "Archive removed flags in the flag tool once the code is gone"
            - name: Rollout calendar and freeze windows
              description: |-
                ## Purpose
                Two risky rollouts advancing on the same afternoon make it impossible to tell which one caused the spike. A shared calendar of planned stage changes, freeze windows and big business dates such as marketing pushes or month-end lets teams space out risky steps and avoids advancing a stage on a Friday evening.

                ## Milestones
                1. A shared calendar showing planned stage changes for every active rollout.
                2. Freeze windows agreed and on the calendar, such as holidays and peak trading days.
                3. A rule limiting high-risk stage changes to one per service per day.
                4. The calendar checked at the start of each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared rollout calendar holds every planned stage change and freeze window, and no two high-risk changes to one service land on the same day."
                cadence: rolling
              tasks:
                - "Create a shared rollout calendar visible to product and engineering"
                - "Add agreed freeze windows and major business dates"
                - "Agree a limit of one high-risk stage change per service per day"
                - "Check the coming week's stage changes for clashes @recurring(weekly:mon)"
            - name: Stage gate checklist for every rollout
              description: |-
                ## Purpose
                Rollouts usually go wrong at the same few steps: a dashboard nobody opened, support not told, a kill switch never tested. A short checklist run before each stage advances, covering guardrails, alerts, support notes and the rollback route, catches those misses and makes the call quicker, not slower.

                ## Milestones
                1. A checklist of eight to twelve items, each answerable yes or no in under a minute.
                2. Separate checks for entering the first external stage and for going to everyone.
                3. The checklist linked from the rollout plan template.
                4. A monthly check of whether recent rollouts actually used it.

                ## Notes
                Start from the **Operational checklist** template. Cut any item that has been answered yes on every rollout for three months without ever catching anything.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rollout in the last month has a completed stage gate checklist for each external stage."
                cadence: rolling
              tasks:
                - "Draft eight to twelve yes or no stage gate checks"
                - "Add separate checks for the first external stage and for full release"
                - "Link the checklist from the rollout plan template"
                - "Check last month's rollouts for skipped stage gates @recurring(monthly:20)"
            - name: Flag change audit log review
              description: |-
                ## Purpose
                Flipping a flag in production is a production change, but it often bypasses the review a code change gets. Reviewing the audit log once a month shows who changed what, which changes skipped the agreed process and where edit rights are wider than they need to be.

                ## Milestones
                1. An audit log export or view available to the reviewing lead.
                2. Production flag changes from the last month listed with who, when and why.
                3. Changes made outside the agreed process raised with the team, without blame.
                4. Permission changes requested wherever the log shows unexpected editors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The production flag audit log is reviewed every month, with out-of-process changes and permission fixes recorded."
                cadence: rolling
              tasks:
                - "Confirm the flag tool keeps an audit log of production changes"
                - "Export last month's production flag changes with who, when and why"
                - "Review flag changes for any made outside the process @recurring(monthly:8)"
                - "Raise permission fixes for unexpected editors"
            - name: Rollout dashboard split by flag variation
              description: |-
                ## Purpose
                A rollout dashboard is only useful if its panels still point at live metrics and can compare users who have the feature with users who do not. Keeping one shared dashboard that splits errors, latency and key actions by flag variation, and checking it monthly, means nobody builds a fresh one under pressure during an incident.

                ## Milestones
                1. One shared dashboard showing guardrail metrics split by flag variation.
                2. Panels for both system health and customer behaviour.
                3. Every panel checked to load and show current data.
                4. The dashboard linked from the rollout plan template and the on-call runbook.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared dashboard splits guardrail metrics by flag variation, and every panel has been checked within the last month."
                cadence: rolling
              tasks:
                - "Build one dashboard comparing users with and without the flag"
                - "Add panels for errors, latency and two key customer actions"
                - "Link the dashboard from the rollout plan and the on-call runbook"
                - "Check every rollout dashboard panel still loads current data @recurring(monthly:3)"
            - name: On-call handover for active rollouts
              description: |-
                ## Purpose
                The engineer paged at night needs to know which rollouts are in flight and which switch turns each one off, without reading a week of threads. A short weekly handover note listing active rollouts, their kill switches and their owners makes a halt possible for someone who has never seen the feature.

                ## Milestones
                1. A handover note format with rollout, stage, kill switch, owner and known risks.
                2. The note written at every on-call change.
                3. A new on-caller has found and flipped a kill switch in staging using only the note.
                4. Feedback from on-call engineers used to trim the note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every on-call change for a month has a handover note listing active rollouts with kill switches, and a new on-caller has used it in a staging test."
                cadence: rolling
              tasks:
                - "Draft a handover note format with stage, kill switch and owner"
                - "Write the active rollouts handover note at each on-call change @recurring(weekly:fri)"
                - "Ask a new on-caller to flip a kill switch in staging using only the note"
                - "Trim the handover format from on-call feedback"
            - name: Quarterly kill switch drills
              description: |-
                ## Purpose
                Kill switches that have never been flipped are hopes, not controls: the off state may throw errors, the permission may have lapsed, or the switch may have vanished in a refactor. A quarterly drill flipping two or three switches in staging or a quiet production window proves they still work and keeps the team practised.

                ## Milestones
                1. Two or three kill switches chosen for each drill, rotating through the list.
                2. Each one flipped with the time to take effect measured.
                3. Failures fixed and re-tested within the quarter.
                4. Results recorded against each switch in the kill switch list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every kill switch on a critical path has been drilled within the last 12 months, with any failures fixed and re-tested."
                cadence: cyclic
              tasks:
                - "Pick three kill switches that have not been drilled this year"
                - "Flip each in staging and time how long the effect takes"
                - "Run the kill switch drill and record the results @recurring(quarterly)"
                - "Raise tickets for any switch that failed its drill"
            - name: Flag debt scorecard by team
              description: |-
                ## Purpose
                Flag clean-up loses to feature work unless someone can see the debt. A quarterly scorecard showing each team's flag count, flags older than 90 days and flags without owners turns a vague complaint into a number teams can plan against.

                ## Milestones
                1. Scorecard columns agreed: total flags, older than 90 days, unowned, stuck at a partial percentage.
                2. The first scorecard produced and shared with engineering managers.
                3. A target agreed for flags older than 90 days per team.
                4. The scorecard published each quarter alongside planning.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly scorecard per team shows total, aged, unowned and stuck flags, with an agreed target for aged flags."
                cadence: rolling
              tasks:
                - "Agree the scorecard columns with engineering managers"
                - "Ask the agent to draft the first scorecard from the flag export"
                - "Share the flag debt scorecard before quarterly planning @recurring(quarterly)"
                - "Agree a target for flags older than 90 days per team"
            - name: Rollout incident log and pattern review
              description: |-
                ## Purpose
                Each halted rollout teaches something, but the lesson fades if it lives only in a chat thread. A simple log of every halt, rollback or customer-visible problem during a rollout, reviewed monthly, shows patterns such as missing alerts on one service or the same stage being skipped.

                ## Milestones
                1. A log with date, feature, stage, symptom, time to halt and root cause.
                2. Every halt and rollback from the last quarter added.
                3. A monthly review that names one pattern and one fix.
                4. Agreed fixes tracked until closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every halt and rollback is logged with time to halt and cause, and each monthly review records one pattern and one fix."
                cadence: rolling
              tasks:
                - "Create the rollout incident log with the agreed columns"
                - "Back-fill halts and rollbacks from the last quarter"
                - "Review the incident log for one pattern and one fix @recurring(monthly:24)"
                - "Track each agreed fix to closure"
            - name: Detecting regressions at low traffic percentages
              description: |-
                ## Purpose
                At 1 percent of traffic a doubling of a rare error can look like noise, and a scary spike can be three users. Learning to read rates rather than counts, compare against the control group in the same window and estimate how many sessions a stage needs before a 10 percent change shows up makes early stages useful instead of ceremonial.

                ## Milestones
                1. Counts, rates and confidence intervals understood well enough to explain to a colleague.
                2. A worked example from a past rollout comparing treated and control error rates.
                3. A rough sample size estimate for the main guardrail at each stage.
                4. A half-page guide added to the rollout plan template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page guide with a worked example and sample size estimates for early stages is added to the rollout plan template."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an introduction to confidence intervals for rates"
                - "Rework one past rollout's errors as rates against the control group"
                - "Estimate the sessions needed to see a 10 percent error increase at 1 percent"
                - "Write a half-page guide for reading early-stage numbers"
            - name: Progressive delivery patterns study
              description: |-
                ## Purpose
                Feature flags are one tool among several: canary deployments, blue-green switches, ring deployments, dark launches and shadow traffic each suit different risks. Studying the patterns and mapping each to a change type your team actually makes helps you pick the lightest safe option rather than flagging everything.

                ## Milestones
                1. Five patterns studied: canary, blue-green, rings, dark launch and shadow traffic.
                2. Each pattern described in two sentences with when to use it.
                3. Each pattern mapped to at least one change type from your recent releases.
                4. A one-page summary shared with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of five delivery patterns, each mapped to a real change type, is shared with the team."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose two talks or articles on progressive delivery patterns"
                - "Describe each pattern in two sentences with when to use it"
                - "Map each pattern to a recent change your team shipped"
                - "Share the one-page summary in the team channel"
            - name: Separating deploy from release for product managers
              description: |-
                ## Purpose
                Product managers used to promising a launch date tied to a deploy can find flags disorienting: code is in production weeks before anyone sees it. Learning the distinction, and what it means for announcements, documentation and support readiness, lets a product manager plan the release as a sequence of audience decisions instead of a single date.

                ## Milestones
                1. The deploy, release and launch distinction explained in your own words.
                2. One recent feature's timeline redrawn showing deploy, each stage and the announcement.
                3. A rule agreed on when marketing and docs move: at a named stage, not at deploy.
                4. The product manager's role at each stage written into the rollout plan template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A redrawn release timeline and an agreed announcement trigger stage are written into the rollout plan template."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask an engineer to walk through a recent deploy and release timeline"
                - "Redraw one feature's timeline showing deploy, each stage and announcement"
                - "Agree with marketing which stage triggers announcements"
                - "Write the product manager's role at each stage into the template"
            - name: Testing both sides of every flag
              description: |-
                ## Purpose
                Every flag doubles the paths through a piece of code, and two interacting flags make four. Engineers who learn to test both the on and off states, keep tests for the off path until the flag is removed and avoid testing every combination save themselves from bugs that only appear when someone flips a switch.

                ## Milestones
                1. A team convention for unit tests that cover both on and off states.
                2. A way to force flag values in automated and end-to-end tests.
                3. A rule for which flag combinations need testing and which do not.
                4. Two recent flagged features checked against the convention.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written testing convention for flag states and combinations exists, and two recent features have been checked against it."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find how tests currently force flag values, if at all"
                - "Write the convention for testing on and off states"
                - "Agree a rule for which flag combinations to test"
                - "Check two recent flagged features against the new convention"
            - name: Rollout plan section for every spec
              description: |-
                ## Purpose
                Rollout thinking left to the last day of a project usually means no kill switch and no agreed guardrails. A standard rollout section in the spec, naming the flag, the stage ladder, the guardrails, the halt criteria and who to tell, forces those questions while the design can still change.

                ## Milestones
                1. A rollout section drafted with flag, ladder, guardrails, halt criteria and communications.
                2. The section added to the team's spec template.
                3. The section used on the next three specs and refined.
                4. A rule that engineering review checks the section before build starts.

                ## Notes
                Start from the **Product spec** template and add the rollout section to it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The team spec template has a rollout section, and the next three specs have filled it in before build started."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a rollout section with flag, ladder, guardrails and halt criteria"
                - "Add the section to the team's spec template"
                - "Use the section on the next three specs"
                - "Ask engineering review to check the section before build starts"
            - name: Dwell time rules for each stage
              description: |-
                ## Purpose
                Moving to the next stage after an hour at 5 percent misses anything that only happens daily: batch jobs, weekly emails, end-of-day reports, another time zone waking up. Setting a minimum dwell time per stage, tied to the slowest cycle the feature touches, catches the problems that a busy afternoon cannot.

                ## Milestones
                1. Each common feature type mapped to the slowest cycle it touches.
                2. Minimum dwell times set per stage for each type.
                3. An exception route for urgent fixes agreed.
                4. Dwell times added to the stage ladder.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Minimum dwell times per stage, tied to the slowest cycle each feature type touches, are written into the stage ladder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the batch jobs, emails and reports a typical feature touches"
                - "Map each feature type to its slowest daily or weekly cycle"
                - "Set minimum dwell times per stage for each type"
                - "Add the dwell times and the exception route to the stage ladder"
            - name: Database changes behind flags
              description: |-
                ## Purpose
                A flag can switch code off in seconds, but it cannot undo a dropped column. Learning the expand and contract pattern, where new and old schema live side by side until the rollout is complete, lets engineers release data changes in stages and keep a real rollback route.

                ## Milestones
                1. The expand, migrate and contract sequence written up with one example.
                2. Dual-write and backfill approaches compared for your main datastore.
                3. A rule that destructive schema steps run only after the flag reaches everyone and its dwell time passes.
                4. One past migration reviewed against the pattern.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written expand and contract guide with one example and a rule for destructive schema steps is shared with the engineering team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a worked example of the expand and contract migration pattern"
                - "Compare dual writes and backfills for the main datastore"
                - "Write the rule for when destructive schema steps may run"
                - "Review one past migration against the pattern"
            - name: Automated halt on guardrail breach
              description: |-
                ## Purpose
                Humans notice a breach late, especially overnight and at weekends. Connecting guardrail alerts to the flag service, so a rollout pauses or drops back a stage automatically when a threshold is crossed and pages the owner, limits the damage to minutes and to a small number of affected users.

                ## Milestones
                1. Two or three guardrails chosen as automatic halt triggers, with thresholds from the baseline.
                2. Alert-to-flag automation built and tested in staging.
                3. False halt rate checked on two live rollouts.
                4. The manual override and notification route documented.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two guardrails pause rollouts automatically in production, with the false halt rate measured on two live rollouts and the override documented."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose two guardrails reliable enough to trigger an automatic halt"
                - "Connect the guardrail alerts to the flag service in staging"
                - "Run two live rollouts with automatic halt and count false halts"
                - "Document the manual override and who gets paged"
            - name: Server-side or client-side flag evaluation
              description: |-
                ## Purpose
                Evaluating flags in the browser or app is quick to adopt but exposes flag names and rules to anyone who looks, and can flicker on first load. Evaluating on the server keeps rules private and consistent but adds latency and plumbing. Deciding per client, with the trade-offs written down, prevents a mixture of both that nobody can debug.

                ## Milestones
                1. Each client listed with where its flags are evaluated today.
                2. Trade-offs compared: latency, flicker, privacy of rules, offline behaviour and cost.
                3. A decision per client recorded with reasons.
                4. Any sensitive flag names or rules visible to clients moved server-side.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An evaluation location decision per client is recorded with trade-offs, and no sensitive flag rules remain visible to clients."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each client and where its flags are evaluated today"
                - "Check what flag names and rules a browser can see in network calls"
                - "Compare latency, flicker and privacy for each option"
                - "Record the evaluation decision per client with the reasons"
            - name: Migrating from config toggles to a flag service
              description: |-
                ## Purpose
                Toggles held in config files or environment variables need a deploy to change, which defeats the point of a kill switch. Moving them into the chosen flag service in batches, highest risk first, with old and new reading the same value during the move, gives every toggle an audit trail and instant control.

                ## Milestones
                1. Every config toggle listed and ranked by risk.
                2. The ten highest-risk toggles moved to the flag service and verified.
                3. Remaining toggles moved in batches with the old reads removed.
                4. New config-based toggles blocked by a lint rule or review check.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every config-based toggle has moved to the flag service, and a review check blocks new ones."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every toggle read from config files or environment variables"
                - "Rank the toggles by how risky a slow change would be"
                - "Move the riskiest ten into the flag service and verify each"
                - "Add a review check that blocks new config-based toggles"
            - name: Account-level versus user-level rollouts
              description: |-
                ## Purpose
                In a business product, half of a customer's team seeing a new feature and half not produces confused screenshots and support tickets. Deciding when to bucket by account, workspace or user, and making that the default per feature type, keeps colleagues on the same version while still allowing user-level rollouts where they make sense.

                ## Milestones
                1. The bucketing options available in the flag tool documented.
                2. Feature types mapped to account, workspace or user bucketing.
                3. Very large accounts handled so a single one does not dominate a small percentage.
                4. The default added to the rollout plan template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bucketing default per feature type, including how very large accounts are handled, is written into the rollout plan template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which identifiers the flag tool can bucket on"
                - "Map feature types to account, workspace or user bucketing"
                - "Decide how to treat very large accounts at early stages"
                - "Add the bucketing default to the rollout plan template"
            - name: Rollout status visible to support and sales
              description: |-
                ## Purpose
                Support agents who cannot tell whether a customer has the new editor will answer the wrong question. Giving customer-facing teams a simple way to look up which features an account has, plus a short note before each external stage, turns rollout confusion into a quick answer.

                ## Milestones
                1. A lookup showing the active flags for a given account or user, readable by support.
                2. Support macros updated to check the lookup first.
                3. A short note on upcoming stage changes posted for support and sales before each external stage.
                4. Tickets mentioning missing or changed features tagged for the rollout review.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Support can see the active flags for any account, and a stage change note reaches support and sales before each external stage."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask support which rollout questions they could not answer last month"
                - "Build or enable a flag lookup support can use per account"
                - "Update support macros to check the flag lookup first"
                - "Post a short note on upcoming stage changes for support and sales"
            - name: Shortening time from merge to full release
              description: |-
                ## Purpose
                Staged rollouts can quietly slow a team down: features wait at stages for a review meeting, or sit at 50 percent because nobody planned the final step. Measuring the median days from merge to everyone, stage by stage, shows where the time goes and which waits are buying safety and which are not.

                ## Milestones
                1. Median days at each stage measured for the last 20 rollouts.
                2. The two longest waits explained with causes.
                3. One process change made to remove a wait that bought no safety.
                4. The median tracked monthly and compared with the starting figure.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Median days at each stage are measured for 20 rollouts, one unneeded wait is removed and the median is tracked monthly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull stage change dates for the last 20 rollouts"
                - "Work out the median days spent at each stage"
                - "Pick one wait to remove and agree the change with the team"
                - "Record the median days from merge to full release @recurring(monthly:16)"
            - name: Flag permissions and production change approvals
              description: |-
                ## Purpose
                In many flag tools anyone with a login can turn a production flag to 100 percent. Setting roles by environment, requiring a second person for changes to critical flags and reviewing access each quarter brings flag changes up to the standard of code changes without slowing work in staging.

                ## Milestones
                1. Roles defined per environment: read, edit staging, edit production and admin.
                2. Critical flags tagged and requiring approval for production changes.
                3. Access granted by role, with leavers removed.
                4. A quarterly access review in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Production flag edits are restricted by role, critical flags need a second approver, and access is reviewed every quarter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List everyone who can edit production flags today"
                - "Define roles per environment with the engineering lead"
                - "Turn on approvals for changes to critical production flags"
                - "Review flag tool access and remove leavers @recurring(quarterly)"
            - name: First percentage rollout of a new feature
              description: |-
                ## Purpose
                The first time a team releases a feature in stages, the steps feel slow and the dashboards unfamiliar. Running one real feature through the full ladder, with a written plan and a short review afterwards, turns the process from a document into a habit and surfaces gaps in tooling before a high-stakes release depends on it.

                ## Milestones
                1. A low-risk feature chosen and its rollout plan written.
                2. The feature taken through every stage of the ladder with guardrails checked at each.
                3. The kill switch flipped once at the first external stage.
                4. A short review written with three things to change in the process.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One feature has gone through every stage of the ladder with guardrails checked and the kill switch tested, and a review lists three process changes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a low-risk feature due to ship in the next month"
                - "Write its rollout plan with stages, guardrails and halt criteria"
                - "Flip the kill switch once at the first external stage"
                - "Write three process changes from the rollout in a short review"
            - name: Staged rollout of a checkout or payment change
              description: |-
                ## Purpose
                Changes to checkout, billing or payment flows carry direct revenue risk and are hard to reverse once money has moved. Rolling such a change out on the strict ladder, with completion rate and payment failure rate as guardrails and finance and support ready, limits a bad change to a small, recoverable slice of transactions.

                ## Milestones
                1. The change classed as strict ladder with longer dwell times.
                2. Payment success and checkout completion added as guardrails with tight thresholds.
                3. Finance and support briefed on the stages and how to report problems.
                4. The rollout completed or halted, with every stage decision recorded.

                ## Notes
                Agree with finance, before the first external stage, how any failed or duplicated transactions during the rollout will be found and put right.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A checkout or payment change has moved through the strict ladder with payment guardrails, and every stage decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree checkout completion and payment failure thresholds with finance"
                - "Brief support on each stage and how to escalate payment issues"
                - "Hold the change at internal and 1 percent stages for the full dwell time"
                - "Record every stage decision in the rollout notes"
            - name: Backend migration by traffic share
              description: |-
                ## Purpose
                Swapping a search engine, database or third-party provider is often riskier than any feature, because failures show up as slow pages and wrong results rather than errors. Sending a growing share of real traffic to the new backend, after a period of shadow traffic comparing answers, gives the team evidence before the old system is switched off.

                ## Milestones
                1. Shadow traffic running against the new backend with result differences logged.
                2. The difference rate below an agreed threshold before any users are served.
                3. Traffic share raised in stages with latency and error guardrails.
                4. The old backend switched off only after a full dwell time at 100 percent.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new backend serves 100 percent of traffic after a shadow period below the agreed difference threshold, and the old one is switched off on a recorded date."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the comparison rules for shadow traffic results"
                - "Run shadow traffic and log differences for at least a week"
                - "Raise the traffic share stage by stage with latency guardrails"
                - "Set the date to switch off the old backend after the dwell time"
            - name: Opt-in to default rollout of a redesign
              description: |-
                ## Purpose
                Redesigns of navigation or core screens upset loyal users even when they are better, and a sudden switch for everyone invites a wave of complaints. A sequence of opt-in preview, default with an opt-out, then removal of the old version, each stage with its own feedback route, lets you fix problems while people still have a way back.

                ## Milestones
                1. An opt-in preview live with a feedback link and a target number of opt-ins.
                2. The top complaints from the preview fixed or answered.
                3. The redesign made the default with an opt-out, and the opt-out rate tracked.
                4. The old version removed on a date announced in advance.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The redesign has moved from opt-in to default to sole version, with the opt-out rate tracked and the removal date announced in advance."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set up an opt-in toggle and a feedback link for the redesign"
                - "Group the top complaints from opt-in users"
                - "Make the redesign the default with an opt-out and track the opt-out rate"
                - "Announce the removal date for the old version"
            - name: Rollouts around a peak trading period
              description: |-
                ## Purpose
                The weeks before a seasonal peak, a big sale or a year-end deadline are when a regression costs most and when product teams most want to ship. Deciding in advance which rollouts must finish before the freeze, which wait until after and which kill switches stay ready during the peak avoids a last-minute argument.

                ## Milestones
                1. Peak dates and the freeze window agreed with commercial teams.
                2. Every planned rollout sorted into finish before, pause during or start after.
                3. A short list of kill switches kept ready for the peak, with owners.
                4. A review after the peak noting what was held back and whether it mattered.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every planned rollout is sorted into before, during or after the freeze, standby kill switches are named, and a post-peak review is written."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the peak dates and freeze window with commercial teams"
                - "Sort each planned rollout into before, during or after the freeze"
                - "List the kill switches on standby during the peak with owners"
                - "Review after the peak what was held back and whether it mattered"
            - name: Blameless review of a halted rollout
              description: |-
                ## Purpose
                When a rollout is halted, the instinct is to fix the bug and move on. A blameless review within a week, covering how the problem was found, how long the halt took and whether the ladder and guardrails did their job, turns one bad afternoon into better defences for the next twenty rollouts.

                ## Milestones
                1. A timeline written from first signal to halt to fix.
                2. Time to detect and time to halt measured.
                3. Gaps in guardrails, alerts or stages named.
                4. Two or three actions agreed with owners and dates.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A blameless review of a halted rollout records the timeline, time to detect and halt, and two or three owned actions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the timeline from first signal to halt"
                - "Measure the time to detect and the time to halt"
                - "Hold a 45-minute blameless review with everyone involved"
                - "Add the agreed actions with owners to the rollout incident log"
            - name: Staged rollouts for a small team without a platform
              description: |-
                ## Purpose
                Three engineers do not need an enterprise flag platform to release safely. A small flags table or open source library, a hash of the user ID for percentages, an admin page to change values and one shared dashboard give most of the benefit for a few days of work.

                ## Milestones
                1. A lightweight flag store chosen: a table, a hot-reload file or an open source library.
                2. Percentage rollouts with consistent hashing on user ID working.
                3. An admin page or command that changes flags without a deploy.
                4. The first feature released in stages with the lightweight setup.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lightweight flag setup with consistent percentage rollouts and no-deploy changes has released one real feature in stages."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose between a flags table, a hot-reload file or an open source library"
                - "Implement percentage rollout using a hash of the user ID"
                - "Build an admin page to change flag values without deploying"
                - "Release the next feature in stages using the new setup"
            - name: Inheriting a codebase full of old flags
              description: |-
                ## Purpose
                Joining a team or taking over a service often means finding hundreds of flags, some at odd percentages, some with names nobody recognises. A careful triage, deciding for each flag whether to keep, finish, remove or investigate, avoids both leaving them forever and removing one that a large customer depends on.

                ## Milestones
                1. Every inherited flag sorted into keep, finish rolling out, remove or investigate.
                2. Flags at partial percentages traced to a person or a decision.
                3. Flags that target named accounts checked with account managers before any change.
                4. A removal plan for the remove pile, scheduled in batches.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every inherited flag is sorted into keep, finish, remove or investigate, with named-customer flags checked and removals scheduled."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export the inherited flags with state and last change date"
                - "Sort each flag into keep, finish, remove or investigate"
                - "Ask account managers about flags that target named customers"
                - "Schedule removal of the remove pile in batches of ten"
            - name: Flags across web and app versions
              description: |-
                ## Purpose
                Turning a flag on for everyone can still leave mobile users behind if their installed version lacks the code, or worse, carries an early buggy version of it. Checking minimum app versions, writing flag rules by client and keeping a remote off switch in each released version keeps web and mobile behaviour consistent.

                ## Milestones
                1. Flag rules able to target by client and app version.
                2. The share of users on each app version checked before every cross-client rollout.
                3. Every new mobile release carrying a remote off switch for its riskiest feature.
                4. A rule to retire cross-client flags only after old versions fall below an agreed share.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cross-client flags target by app version, the next mobile release has a remote off switch, and version shares are checked monthly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the flag tool can target rules by client and app version"
                - "Find the share of users on each supported app version"
                - "Add a remote off switch to the riskiest feature in the next app release"
                - "Check app version shares before retiring cross-client flags @recurring(monthly:5)"
            - name: Rollouts for enterprise customers with change windows
              description: |-
                ## Purpose
                Large customers often have contracts or administrators who expect advance notice before their users see changes, and some ask to be last. Keeping an opt-late cohort, a notice schedule and admin controls that let them enable a feature early or late keeps staged rollouts compatible with those commitments.

                ## Milestones
                1. Accounts with notice or change window commitments listed with account managers.
                2. An opt-late cohort excluded from early stages by default.
                3. Notice sent to listed accounts before they enter a rollout.
                4. Admin early or late controls considered for features that change user workflows.

                ## Notes
                Check with account managers and your legal team what notice has actually been promised to each customer. Do not assume either way.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Accounts with change notice commitments sit in an opt-late cohort and receive notice before they enter any rollout stage."
                cadence: rolling
              tasks:
                - "Ask account managers which customers have change notice commitments"
                - "Create an opt-late cohort in the flag tool"
                - "Check upcoming stage changes against the customer notice list @recurring(monthly:18)"
                - "Propose admin early or late controls for workflow-changing features"
            - name: Teaching rollout practice to new engineers
              description: |-
                ## Purpose
                New engineers learn flag habits from whatever code they read first, which is often the worst example. A short onboarding module covering the conventions, the stage ladder, the dashboard and one supervised kill switch flip in staging gets them releasing safely in their first month.

                ## Milestones
                1. A 60-minute module covering conventions, ladder, dashboard and tools.
                2. A supervised kill switch flip in staging included as an exercise.
                3. The module given to the next two new engineers.
                4. Their feedback used to update the module.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two new engineers have completed a rollout onboarding module including a supervised kill switch flip, and the module has been updated from their feedback."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Outline a 60-minute module covering conventions, ladder and dashboard"
                - "Ask the agent to draft exercise steps for a staging kill switch flip"
                - "Run the module with the next new engineer"
                - "Update the module from the new engineers' feedback"
            - name: Rollout risk register for high-stakes releases
              description: |-
                ## Purpose
                For a release that touches money, data or many customers at once, a stage ladder alone is not enough: the team needs to know what could go wrong and what will be done about each risk. A risk register naming each failure mode, its warning sign, its guardrail and its response turns a nervous launch into a set of prepared moves.

                ## Milestones
                1. Failure modes listed with likelihood and impact.
                2. A warning sign and a guardrail named for each high risk.
                3. A prepared response for each, including the kill switch to use.
                4. The register reviewed at each stage gate.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A high-stakes release has a risk register with a warning sign, guardrail and response for each high risk, reviewed at every stage gate."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List failure modes with engineering, support and data leads"
                - "Rate likelihood and impact for each failure mode"
                - "Name the warning sign, guardrail and response for each high risk"
                - "Review the register at every stage gate of the release"
            - name: Flag dependency and prerequisite map
              description: |-
                ## Purpose
                Flags that only make sense together, such as a new API behind one flag and the screen that calls it behind another, break in strange ways when one is flipped without the other. Mapping dependencies and using prerequisite rules where the tool supports them prevents states that were never tested.

                ## Milestones
                1. Dependencies between active flags mapped.
                2. Prerequisite rules set in the flag tool where supported.
                3. Invalid combinations listed and either blocked or tested.
                4. The map refreshed each quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A current map of flag dependencies exists, with prerequisite rules set where supported and invalid combinations blocked or tested."
                cadence: rolling
              tasks:
                - "Ask each team to list flags that depend on another flag"
                - "Draw the dependency map for active flags"
                - "Set prerequisite rules in the flag tool where supported"
                - "Refresh the flag dependency map @recurring(quarterly)"
            - name: Regional and ring-based rollouts
              description: |-
                ## Purpose
                Some changes behave differently by region: a new data store with residency rules, a payment method, local formats, or time zones that shift when the load arrives. Rolling out ring by ring, from internal staff to one region to all regions, with local guardrails and a named contact in each, limits a regional failure to one market.

                ## Milestones
                1. Rings defined, for example internal staff, a small region, a large region, then everyone.
                2. Region-specific guardrails and quiet hours agreed.
                3. A support or operations contact named in each region.
                4. One region-sensitive release taken ring by ring and reviewed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One region-sensitive release has moved through defined rings with regional guardrails and named contacts, and the result is reviewed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Define the rollout rings with the engineering lead"
                - "Agree region-specific guardrails and quiet hours for stage changes"
                - "Name a support contact in each region"
                - "Take the next region-sensitive release through the rings"
            - name: Shadow mode rollouts for model changes
              description: |-
                ## Purpose
                Replacing a ranking, recommendation or classification model changes outputs for every user in ways error rates cannot see. Running the new model in shadow mode alongside the old one, comparing outputs on agreed quality measures and then serving it to a growing share gives the team evidence the change is better before customers notice.

                ## Milestones
                1. Quality measures for comparison agreed, such as click-through, accuracy on a labelled set or complaint rate.
                2. Shadow mode logging both models' outputs for a set period.
                3. Serving share raised in stages with quality and latency guardrails.
                4. A switch back to the previous model version tested.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model change has run in shadow mode, been served in stages against agreed quality measures, and had its rollback tested."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree quality measures for comparing the old and new model"
                - "Log both models' outputs in shadow mode for two weeks"
                - "Raise the serving share stage by stage with quality guardrails"
                - "Test switching back to the previous model version"
            - name: Release, experiment and permanent flag types
              description: |-
                ## Purpose
                When release toggles, test variants, operational switches and plan entitlements all live in one tool under the same rules, clean-up removes something billing depended on and experiments get rolled out without analysis. Defining each type with its owner, lifetime and exit keeps release flags short-lived while protecting the ones meant to stay.

                ## Milestones
                1. Four flag types defined with owner, expected lifetime and exit.
                2. Every existing flag tagged with its type.
                3. Entitlement flags reviewed with billing for whether they belong in the flag tool.
                4. Clean-up rules adjusted to skip permanent operational flags.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four flag types are defined with owners and lifetimes, every flag is tagged, and clean-up rules skip permanent operational flags."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write definitions for release, experiment, operational and entitlement flags"
                - "Tag every existing flag with its type"
                - "Review entitlement flags with the billing team"
                - "Exclude permanent operational flags from clean-up rules"
            - name: Annual progressive delivery maturity review
              description: |-
                ## Purpose
                After a year of staged rollouts, it is easy to keep repeating the same steps without asking whether they still help. A yearly review of halts, time to halt, cycle time, flag debt and drill results, scored against a simple maturity scale, shows the team where to invest next year.

                ## Milestones
                1. A year of rollout data gathered: rollouts, halts, time to halt, median cycle time and flag count.
                2. The team scored on a five-level scale for flags, guardrails, automation and clean-up.
                3. Two improvements chosen for next year with owners.
                4. The review shared with engineering and product leadership.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly maturity review with a year of rollout figures, scores in four areas and two owned improvements is shared with leadership."
                cadence: cyclic
              tasks:
                - "Gather a year of rollout, halt and flag count figures"
                - "Score the team on flags, guardrails, automation and clean-up"
                - "Choose two improvements for next year with owners"
                - "Run the progressive delivery maturity review @recurring(yearly)"
---

# Staged Feature Rollouts

This area is for product teams and engineers who want to release features gradually, with flags, percentage rollouts and kill switches, so a bad change reaches a few users rather than everyone. It starts with foundations (a flag inventory, a platform choice, conventions, a stage ladder, guardrail metrics, kill switches and safe defaults), moves through the operating rhythm of rollout reviews, stage gates, audit logs, drills and flag clean-up, then covers skills such as reading early-stage numbers and expand and contract migrations, improvements like automatic halts, dated rollouts of payment changes, backend migrations and redesigns, situations such as a small team or an inherited codebase, and specialist work on rings, model changes and flag types.

The rhythm is weekly for the rollout review, the calendar check and the on-call handover, monthly for stale flag clean-up, the audit log, dashboard upkeep, stage gate checks, the incident log, cycle time and enterprise notice checks, quarterly for kill switch drills, guardrail baselines, access reviews, the dependency map and the flag debt scorecard, and yearly for the inventory, the platform renewal, the outage test and the maturity review. The Purchase decision, Metrics log, Meeting notes, Operational checklist, Product spec and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
