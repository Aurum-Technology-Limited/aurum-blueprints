---
id: software-engineering.legacy-system-migration
name: Legacy System Migration
description: "An honest inventory of what the old system really does, a chosen migration strategy, reconciled data, rehearsed cutovers, a safe parallel run and a switch-off date that actually arrives."
category: business
version: 1.0.0
tags: [software-engineering, legacy-system-migration, engineer, enterprise, team, cutover, data-migration, decommissioning]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - metrics-log
    - vendor
    - operational-checklist
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Legacy System Migration
          description: "Moving off an old system or platform to a new one, planning the cutover, migrating data and running both in parallel safely."
          projects:
            - name: Inventory of what the legacy system actually does
              description: |-
                ## Purpose
                Old systems quietly do far more than their documentation admits: nightly batch jobs, month-end reports, emails to suppliers, a stored procedure that recalculates prices at midnight. Before anyone estimates a migration, list every capability the system performs today, found from code, schedulers and logs rather than from memory, because the capability you miss is the one that breaks on cutover day.

                ## Milestones
                1. A capability list covering screens, APIs, batch jobs, scheduled reports, outbound files and emails.
                2. Each capability traced to the code, job or table that performs it.
                3. Capabilities nobody can explain flagged as unknown rather than left off the list.
                4. Usage evidence from logs or job history attached to each capability, so dead features are visible.

                ## Notes
                Read the job scheduler and cron tables first. They usually hold the capabilities nobody remembers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shared capability inventory lists every function of the legacy system with its code location and recent usage, and unknowns are flagged."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export the full list of scheduled jobs from the legacy scheduler or crontab"
                - "List every screen, endpoint and report the system exposes to users"
                - "Pull ninety days of access logs to see which capabilities are still used"
                - "Mark each capability as used, unused or unknown in the inventory"
            - name: Map of every system that talks to the legacy platform
              description: |-
                ## Purpose
                Integrations are where migrations fail: a partner who still sends a fixed-width file by SFTP, a finance spreadsheet that queries the production database directly, a warehouse scanner hard-coded to an IP address. A complete map of inbound and outbound connections, with an owner for each, tells you how many other teams have to change before you can switch off.

                ## Milestones
                1. Every inbound and outbound connection listed with protocol, format, frequency and direction.
                2. Direct database readers identified from database connection logs, not just from the architecture diagram.
                3. An owning team or external contact named for each consumer.
                4. Each integration tagged as move, rewrite, retire or keep through a compatibility layer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An integration map lists every connection to the legacy system with its owner and planned treatment, checked against network and database logs."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull a week of database connection logs and list every distinct client"
                - "Ask the network team for firewall rules that point at the legacy hosts"
                - "Contact the owner of each consumer to confirm what they read or send"
                - "Tag each integration as move, rewrite, retire or keep behind a facade"
            - name: Business case and reason for leaving the old system
              description: |-
                ## Purpose
                Migrations that start because the old system feels embarrassing tend to stall when the first hard trade-off arrives. Writing down the real driver, whether end of vendor support, licence cost, hiring difficulty or a capability the old platform cannot offer, with the cost of staying put, gives the sponsor something to defend when the budget is questioned.

                ## Milestones
                1. The primary reason for migrating stated in one sentence with evidence.
                2. The yearly cost of staying on the legacy system estimated, including licences, hardware, specialist staff and incidents.
                3. A rough migration cost range and duration agreed with engineering leads.
                4. A go decision, or a decision to stay and stabilise, recorded with the sponsor's name.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page business case with the cost of staying, a migration cost range and a recorded sponsor decision is filed with the programme."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect last year's licence, hosting and support invoices for the legacy system"
                - "Count incidents and overtime hours the legacy system caused in the last year"
                - "Ask the agent to draft a one-page business case from your notes and figures"
                - "Book thirty minutes with the sponsor to get a recorded go or stay decision"
            - name: Migration scope and non-goals statement
              description: |-
                ## Purpose
                Every migration attracts wish lists: redesign the UI, fix the data model, add the reporting finance always wanted. A written scope that says what moves, what changes on purpose and what is explicitly out of scope keeps the programme from turning into a rewrite of the whole business.

                ## Milestones
                1. A list of capabilities in scope, taken from the capability inventory.
                2. Intentional behaviour changes listed separately from like-for-like moves.
                3. At least five non-goals written down and agreed by the sponsor.
                4. A rule for how new scope requests are logged and decided.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off scope statement lists in-scope capabilities, intentional changes and at least five non-goals, with a route for new requests."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the in-scope capabilities from the inventory into a scope document"
                - "List every behaviour that will deliberately change after migration"
                - "Write at least five non-goals and circulate them to stakeholders"
                - "Agree with the sponsor how new scope requests get logged and decided"
            - name: Choosing the migration strategy for each component
              description: |-
                ## Purpose
                Rehost, replatform, refactor, replace with a package, or strangle piece by piece: the right answer usually differs by component, and choosing one strategy for everything is how a simple lift becomes a three-year rewrite. Scoring each major component against risk, cost, timeline and the skills you have produces a strategy you can explain in a single table.

                ## Milestones
                1. Major components listed with their size, change rate and business criticality.
                2. Each component scored against the candidate strategies on the same four criteria.
                3. One strategy chosen per component, with the runner-up and why it lost.
                4. The overall sequence of moves agreed, smallest safe step first.

                ## Notes
                A big-bang cutover is sometimes right for small systems with simple data. For anything users depend on all day, prefer an incremental route you can pause.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A strategy table records the chosen approach, runner-up and reasoning for every major component, plus an agreed order of moves."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the major components with size, change rate and criticality"
                - "Score each component for rehost, replatform, refactor, replace and strangle"
                - "Hold a review with the tech leads to challenge the scores"
                - "Record the chosen strategy and sequence in an architecture decision record"
            - name: Legacy data store inventory and ownership
              description: |-
                ## Purpose
                Data outlives code, and legacy systems often hide it in places nobody expects: flat files on a shared drive, a second database used only by reports, BLOBs holding scanned documents. Knowing every store, its size, its growth and who owns its correctness tells you how big the data migration really is.

                ## Milestones
                1. Every database, schema, file share and object store used by the system listed.
                2. Row counts, sizes and growth rates recorded for each store.
                3. A business owner named for the correctness of each data set.
                4. Personal and regulated data identified and marked for special handling.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A data inventory lists every legacy store with size, growth, owner and sensitivity, reviewed by each named data owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Query the database catalogue for every table with its row count and size"
                - "Search shared drives and object storage for files the system writes"
                - "Ask each business area to name an owner for its data set"
                - "Mark tables that hold personal, payment or regulated data"
            - name: Migration owner, sponsor and decision rights
              description: |-
                ## Purpose
                Long migrations die from diffused ownership: three teams each own a piece and nobody can decide to delay cutover by a week. Naming one accountable owner, one sponsor with budget authority and writing down who decides what, from scope changes to the go-live call, saves weeks of escalation later.

                ## Milestones
                1. A single accountable migration owner named and announced.
                2. A sponsor with budget authority confirmed in writing.
                3. A decision rights table covering scope, schedule, go-live, rollback and switch-off.
                4. An escalation path published for blocked decisions.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published decision rights table names the owner, sponsor and decider for scope, schedule, go-live, rollback and switch-off."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down who currently believes they own the migration"
                - "Draft a decision rights table for scope, schedule, go-live and rollback"
                - "Confirm the owner and sponsor names with engineering leadership"
                - "Hold a quarterly check-in with the sponsor on budget and timeline @recurring(quarterly)"
            - name: Knowledge capture from the people who built the old system
              description: |-
                ## Purpose
                Whoever knows why invoices skip the 31st may retire, leave or simply forget before cutover. Recorded interviews with long-serving developers, operators and power users turn tribal knowledge into notes the migration team can search, and they usually surface three or four undocumented business rules in the first hour.

                ## Milestones
                1. A list of people with deep knowledge of the system, ranked by risk of losing them.
                2. Recorded or written interviews with at least the top five.
                3. Undocumented business rules extracted into a single searchable list.
                4. Each rule linked to the code or data that implements it, where found.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Interviews with at least five key people are recorded, and a searchable list of undocumented business rules links each rule to its code where found."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List everyone who has maintained or heavily used the system for five years or more"
                - "Book a one-hour interview with the person most likely to leave first"
                - "Ask each interviewee to walk through the month-end and year-end processes"
                - "Add every surprising rule to the business rules list with its source"
            - name: Migration risk register
              description: |-
                ## Purpose
                Migrations carry a predictable set of risks: data that will not reconcile, an integration owner who never replies, a vendor contract that renews before switch-off, a cutover window clashing with month-end. Keeping them in one register with likelihood, impact, owner and mitigation, reviewed monthly, turns surprises into things you saw coming.

                ## Milestones
                1. A register seeded with at least fifteen risks from the inventories and interviews.
                2. Each risk scored for likelihood and impact with a named owner.
                3. A mitigation or acceptance decision recorded for every high risk.
                4. The register reviewed monthly and closed risks kept for the retrospective.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register with at least fifteen scored, owned risks exists and shows a monthly review entry for every month of the programme."
                cadence: rolling
              tasks:
                - "Seed the register with risks from the capability and integration inventories"
                - "Score each risk and assign an owner who agrees to it"
                - "Review the register with the owners and update scores @recurring(monthly:15)"
            - name: Exit criteria for retiring the old system
              description: |-
                ## Purpose
                Most failed migrations are not disasters, they are permanent coexistence: the new system goes live and the old one lingers for years because one report still runs on it. Defining the exact conditions for switch-off at the start, such as zero traffic for thirty days and all data archived, gives everyone the same finish line.

                ## Milestones
                1. Measurable switch-off conditions written, covering traffic, data, integrations and contracts.
                2. Each condition given a way to check it, such as a dashboard or a signed confirmation.
                3. The criteria agreed by the sponsor and the data owners.
                4. A target switch-off quarter published with the criteria.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Signed exit criteria list every switch-off condition with its check, and a target switch-off quarter is published."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft switch-off conditions for traffic, data, integrations and contracts"
                - "Name the dashboard, query or sign-off that proves each condition"
                - "Get the sponsor and data owners to approve the criteria"
                - "Publish the target switch-off quarter alongside the criteria"
            - name: Weekly migration steering review
              description: |-
                ## Purpose
                Slippage on a migration spread over months hides in separate team stand-ups unless there is one short meeting where progress, blockers and decisions meet. Thirty minutes a week with the owner, tech leads and a business representative, working from the same tracker and risk register, keeps the programme honest.

                ## Milestones
                1. A fixed weekly slot with a standing agenda: progress, risks, decisions, asks.
                2. Notes and decisions recorded in the same place each week.
                3. Every blocker leaving the meeting with an owner and a date.
                4. Attendance from the business side at least three weeks in four.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Steering notes exist for each week of the programme, and every recorded blocker has an owner and a resolution date."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute steering slot with the core group"
                - "Write a standing agenda covering progress, risks, decisions and asks"
                - "Run the steering review and record decisions and owners @recurring(weekly:tue)"
            - name: Migration progress tracker by capability
              description: |-
                ## Purpose
                Percent-complete figures on a migration are usually guesses. Tracking each capability through fixed states, from not started to built, verified in parallel, cut over and retired on the legacy side, gives a progress figure nobody can argue with and shows which capabilities are stuck.

                ## Milestones
                1. Every in-scope capability listed with the same five progress states.
                2. Each state change backed by evidence, such as a test run or traffic graph.
                3. A weekly count of capabilities per state kept as a trend.
                4. Capabilities stuck in one state for more than a month highlighted.

                ## Notes
                Start from the **Metrics log** template for the weekly counts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows every capability's state with evidence, and a weekly trend of counts per state is kept for the whole programme."
                cadence: rolling
              tasks:
                - "Define the five progress states and what evidence moves a capability on"
                - "Load every in-scope capability into the tracker at not started"
                - "Update states and log the weekly counts per state @recurring(weekly:fri)"
            - name: Data reconciliation runs between old and new
              description: |-
                ## Purpose
                Data migrated once and never checked again drifts the moment both systems take writes. Scheduled reconciliation, comparing row counts, totals and checksums per table and a sample of full records, catches silent loss, truncated fields and rounding differences while they are still small enough to fix.

                ## Milestones
                1. Reconciliation queries written for every migrated table: counts, sums of key amounts and checksums.
                2. A sampled record-by-record comparison for the most important entities.
                3. Results stored with the date so trends are visible.
                4. Agreed tolerances, with any breach raised as a ticket the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Reconciliation results for every migrated table are stored twice weekly, and every breach of tolerance has a ticket."
                cadence: rolling
              tasks:
                - "Write count and sum queries for the five most important migrated tables"
                - "Agree tolerances for each check with the data owners"
                - "Run the reconciliation suite and file a ticket for any breach @recurring(weekly:mon,thu)"
            - name: Parallel run discrepancy triage
              description: |-
                ## Purpose
                Running both systems side by side only helps if someone looks at the differences. A daily triage of discrepancies, sorted into migration bugs, legacy bugs the new system fixed on purpose and acceptable differences, is what turns a parallel run into evidence that the new system is ready.

                ## Milestones
                1. A discrepancy report produced automatically from both systems' outputs.
                2. Three agreed categories: new system defect, intended change, acceptable difference.
                3. Every discrepancy categorised within one working day.
                4. Defect discrepancies trending down for three consecutive weeks before cutover.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every parallel run discrepancy is categorised within a working day, and defects fall for three straight weeks before the go-live decision."
                cadence: rolling
              tasks:
                - "Set up an automated report of output differences between the two systems"
                - "Agree the three discrepancy categories with the business owner"
                - "Triage new discrepancies and categorise each one @recurring(daily)"
            - name: Change freeze and dual maintenance policy
              description: |-
                ## Purpose
                While a migration runs, every change to the old system has to be made twice or it will be lost at cutover. A written policy, deciding what may still change in the legacy system, who approves it and how it gets ported, stops the target from moving under the migration team.

                ## Milestones
                1. A policy stating which legacy changes are allowed: security fixes, legal changes, critical bugs.
                2. An approval route for exceptions with a named approver.
                3. A rule that every approved legacy change has a matching ticket on the new system.
                4. A monthly review of exceptions and their porting status.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published freeze policy exists, and every legacy change approved under it has a linked ticket on the new system."
                cadence: rolling
              tasks:
                - "Draft the list of change types still allowed on the legacy system"
                - "Name the approver for freeze exceptions and publish the policy"
                - "Check every approved legacy change has a ported twin ticket @recurring(monthly:12)"
            - name: Stakeholder and user communication calendar
              description: |-
                ## Purpose
                People forgive a migration that changes their screens far more readily than one that surprises them. A calendar of messages, timed to pilots, training, cutover and switch-off, and written for each audience from call centre staff to partner integrators, avoids the flood of tickets that follows a silent go-live.

                ## Milestones
                1. Audiences listed: internal users, support, partners, customers and leadership.
                2. A message plan per audience tied to each programme milestone.
                3. A monthly update sent to every audience during the programme.
                4. A feedback channel open and monitored for each audience.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A communication calendar covers every audience, and a monthly update is sent for each month of the programme."
                cadence: rolling
              tasks:
                - "List every audience affected by the migration and how they are reached"
                - "Draft the message plan for the pilot, cutover and switch-off milestones"
                - "Send the monthly migration update to each audience @recurring(monthly:8)"
            - name: Legacy keep-alive patching and backups
              description: |-
                ## Purpose
                The old system still runs the business until the day it is switched off, and it is exactly when attention moves elsewhere that patches lapse and backups quietly fail. A small, owned keep-alive routine of security patches, backup restore tests and disk and certificate checks keeps the legacy side safe through the last month.

                ## Milestones
                1. A keep-alive owner named for the legacy platform.
                2. A monthly patch and health check covering OS, database, certificates and disk.
                3. A quarterly restore test from backup with the result recorded.
                4. A list of expiry dates for certificates, licences and support contracts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly health checks and quarterly restore tests are recorded for the legacy system until the day it is switched off."
                cadence: rolling
              tasks:
                - "Name the keep-alive owner and list the legacy hosts they cover"
                - "Run the legacy patch, certificate and disk check @recurring(monthly:20)"
                - "Restore a legacy backup to a scratch host and record the result @recurring(quarterly)"
                - "List every certificate and licence expiry date for the old platform"
            - name: Legacy vendor contract and licence tracking
              description: |-
                ## Purpose
                Legacy vendors know you are leaving, and contracts often auto-renew for a year or require six months' notice. Tracking every licence, support agreement and hosting contract with its renewal date and notice period stops a migration that finishes two weeks late from paying for another full year.

                ## Milestones
                1. Every contract tied to the legacy platform listed with renewal date and notice period.
                2. Each contract given a planned end date matching the switch-off plan.
                3. A short-term extension option negotiated for the riskiest contract.
                4. Notice served on each contract at the right time, with proof filed.

                ## Notes
                Start from the **Vendor** template for each legacy supplier.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A contract list with renewal dates and notice periods exists, and notice is served on time for every contract ending at switch-off."
                cadence: cyclic
              tasks:
                - "Ask procurement for every contract that mentions the legacy platform"
                - "Record renewal dates and notice periods against the switch-off plan"
                - "Ask the riskiest vendor about a month-by-month extension option"
                - "Check upcoming renewal and notice dates for legacy contracts @recurring(yearly)"
            - name: Traffic shift dashboard for incremental migration
              description: |-
                ## Purpose
                When traffic moves to the new system a slice at a time, through a router, proxy or feature flag, you need one view showing the current split, error rates and latency on both sides. Without it, a five percent shift that doubled errors can sit unnoticed until it reaches fifty.

                ## Milestones
                1. A dashboard showing the share of traffic per capability on old and new.
                2. Error rate and latency for both systems on the same graph.
                3. A written rule for when to advance, hold or reverse the split.
                4. A weekly decision recorded for each capability under active shift.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A traffic shift dashboard compares old and new for each capability, and a weekly advance, hold or reverse decision is recorded."
                cadence: rolling
              tasks:
                - "Add per-capability routing counts for both systems to one dashboard"
                - "Write the advance, hold and reverse thresholds for error rate and latency"
                - "Review the split and record a decision for each capability @recurring(weekly:wed)"
            - name: Sync job and dual-write health checks
              description: |-
                ## Purpose
                During coexistence, data usually flows between the two systems through change data capture, a sync job or dual writes, and a stalled sync means users on each side see different truths. A quick daily look at lag, failed records and the dead-letter queue catches breaks before customers do.

                ## Milestones
                1. Sync lag, failure count and queue depth exposed as metrics.
                2. Alerts set on lag and failure thresholds, routed to the migration team.
                3. A runbook for replaying failed records safely.
                4. A daily check recorded throughout the coexistence period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sync lag and failures are alerted on, a replay runbook exists, and daily checks are recorded through coexistence."
                cadence: rolling
              tasks:
                - "Expose sync lag and failed record counts as metrics"
                - "Set alert thresholds for lag and failures with the migration team as receiver"
                - "Write the runbook for replaying records from the dead-letter queue"
                - "Check sync lag and the dead-letter queue first thing @recurring(daily)"
            - name: Strangler fig pattern in practice
              description: |-
                ## Purpose
                Strangling a legacy system means putting a routing layer in front of it and moving one capability at a time behind that layer until nothing is left. Studying worked examples and building one small slice end to end teaches the routing, data sync and rollback mechanics before the team bets the programme on them.

                ## Milestones
                1. Two published case studies of strangler migrations read and summarised.
                2. A routing layer choice made: gateway, reverse proxy or in-app facade.
                3. One low-risk capability routed to new code behind the layer in a test environment.
                4. Lessons written up for the team, including what made rollback easy or hard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One capability runs behind a routing layer in a test environment, and a written summary covers routing, sync and rollback lessons."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read two case studies of strangler fig migrations and note their routing approach"
                - "Pick the lowest-risk read-only capability as the practice slice"
                - "Route that capability to new code behind a proxy in a test environment"
                - "Write up what made rollback easy or hard for the team"
            - name: Reading an unfamiliar legacy codebase
              description: |-
                ## Purpose
                Legacy code is often in a language or framework nobody on the current team writes: COBOL copybooks, Visual Basic forms, a pre-generics Java framework, stored procedures thousands of lines long. A deliberate approach of tracing one transaction end to end, keeping a glossary and drawing call graphs gets a modern engineer reading it usefully within weeks.

                ## Milestones
                1. One business transaction traced from entry point to database write.
                2. A glossary of the codebase's naming conventions, abbreviations and odd terms.
                3. A call graph or dependency diagram for the most-used module.
                4. A short guide written for the next engineer who has to read it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A traced transaction, a glossary and a dependency diagram for the main module exist in a reading guide for the team."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick one common business transaction and find its entry point in the code"
                - "Start a glossary of abbreviations and naming conventions as you read"
                - "Generate a call graph for the most-used module with a static analysis tool"
                - "Write a two-page reading guide for the next engineer"
            - name: Change data capture and data sync techniques
              description: |-
                ## Purpose
                Keeping two databases in step during a long coexistence is one of the hardest parts of a migration, and the options differ a lot: log-based change data capture, triggers, outbox tables, batch delta jobs and dual writes. Learning their failure modes, ordering guarantees and replay behaviour before choosing avoids a sync that loses updates under load.

                ## Milestones
                1. The main sync approaches compared on ordering, latency, load on the source and failure handling.
                2. A log-based capture tool run against a copy of the legacy database.
                3. A test showing what happens to in-flight changes when the sync restarts.
                4. A recommended approach written up for the team's migration.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of sync approaches and a restart test against a database copy support a recorded recommendation."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare triggers, outbox, log-based capture and dual writes in a one-page table"
                - "Check whether the legacy database version supports log-based capture"
                - "Run a capture tool against a copy and restart it mid-load"
                - "Write the recommended sync approach and its known gaps"
            - name: Characterisation tests that pin legacy behaviour
              description: |-
                ## Purpose
                The safest definition of correct during a migration is whatever the old system does today, including its quirks. Characterisation or golden master tests record real inputs and the legacy system's outputs, so the new system can be run against the same inputs and every difference shows up as a failing test rather than a customer complaint.

                ## Milestones
                1. A set of real, anonymised inputs captured for the most important calculations.
                2. Legacy outputs for those inputs stored as golden files.
                3. A harness that runs the new system on the same inputs and diffs the results.
                4. Every diff either fixed or recorded as an intended change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A golden master harness covers the key calculations, and every diff against legacy output is fixed or logged as intended."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Choose the three calculations where a wrong answer would hurt most"
                - "Capture and anonymise a month of real inputs for those calculations"
                - "Store the legacy outputs for those inputs as golden files"
                - "Build a harness that diffs new system output against the golden files"
            - name: Field-by-field data mapping specification
              description: |-
                ## Purpose
                A migration script is only as good as the mapping behind it, and most data defects come from fields whose meaning changed over the years: a status code reused, a date stored as text, a notes field that also holds account numbers. A mapping specification for every target field, with its source, transformation and default, reviewed by the data owner, is the contract for the migration code.

                ## Milestones
                1. Every target field listed with its source field or rule.
                2. Transformations, defaults and lookups written in plain language.
                3. Ambiguous or overloaded legacy fields flagged with a decision.
                4. The mapping signed off by each data owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mapping specification covers every target field with source and rule, and each data owner has signed off their section."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List every target table and field the migration must populate"
                - "Record the source field, transformation and default for each target field"
                - "Profile overloaded legacy fields to see what values they really hold"
                - "Walk each data owner through their section and get sign-off"
            - name: Shadow traffic and output comparison testing
              description: |-
                ## Purpose
                Replaying real production requests against the new system, without returning its answers to users, is the closest you can get to live testing without risk. Learning to mirror traffic, strip side effects and compare responses gives far better coverage than a hand-written test plan for a system whose behaviour nobody fully knows.

                ## Milestones
                1. A traffic mirroring approach chosen: proxy mirroring, log replay or recorded sessions.
                2. Side effects such as emails, payments and writes disabled for shadow calls.
                3. A comparison job that classifies response differences.
                4. One capability shadowed for a full business week with results reviewed.

                ## Notes
                Shadow calls must never send real emails, take payments or write to shared data. Check every outbound integration is stubbed before mirroring.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One capability is shadowed for a business week with side effects disabled, and a comparison report classifies every difference."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose between proxy mirroring and log replay for the first capability"
                - "List every side effect the capability has and stub each one"
                - "Build a comparison job that groups response differences by type"
                - "Shadow the capability for a business week and review the report"
            - name: Uncovering undocumented business rules in legacy code
              description: |-
                ## Purpose
                A rule like customers in one region are never charged interest after the 25th may exist only in a conditional buried in a batch program. Systematically mining the code for hard-coded values, date logic and special cases, then checking each with the business, decides whether the new system must copy it, change it or drop it.

                ## Milestones
                1. Hard-coded constants, magic dates and customer-specific branches extracted from the code.
                2. Each candidate rule written in plain language.
                3. Every rule reviewed with a business owner and marked keep, change or drop.
                4. Kept rules added to the new system's requirements with a test.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rules list extracted from code has a keep, change or drop decision from a business owner for every entry, and kept rules have tests."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Search the code for hard-coded customer IDs, dates and region codes"
                - "Rewrite each candidate rule as a plain-language sentence"
                - "Review the rules with the business owner and mark keep, change or drop"
                - "Add a test to the new system for every rule marked keep"
            - name: Choosing a replacement package or platform
              description: |-
                ## Purpose
                When the strategy for a component is replace rather than rebuild, the choice of package locks you in for the next decade. Scoring a shortlist against the capability inventory, data import tooling, integration options and exit terms, rather than against a sales demo, finds the gaps before contract signature.

                ## Milestones
                1. Requirements drawn from the capability inventory, weighted by business value.
                2. Three candidates scored on fit, data import, integration, cost and exit terms.
                3. A proof of concept run with real migrated sample data on the top choice.
                4. A recommendation with known gaps and workarounds approved by the sponsor.

                ## Notes
                Start from the **Vendor** template. Ask every candidate how you would get your data out again; it is the best predictor of a painful next migration.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of three candidates and a proof of concept with real sample data support a sponsor-approved choice."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Turn the capability inventory into weighted requirements"
                - "Shortlist three candidates and send each the same requirements"
                - "Run a proof of concept importing real anonymised sample data"
                - "Write the recommendation with gaps and workarounds for the sponsor"
            - name: Data cleansing before the move
              description: |-
                ## Purpose
                Duplicate customers, orphaned orders and addresses in the phone field all become someone else's problem once loaded into a strict new schema, usually as load failures on cutover night. Measuring data quality early and cleaning in the legacy system, where users know the data, makes the final load faster and the new system cleaner from day one.

                ## Milestones
                1. Data quality rules defined for key entities: duplicates, nulls, invalid formats, orphans.
                2. A baseline count of rule failures per entity.
                3. Cleansing work assigned to data owners with fixes made at the source.
                4. Failure counts below the agreed threshold before the final rehearsal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Data quality failure counts per entity are tracked monthly and sit below the agreed threshold before the final cutover rehearsal."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write data quality rules for customers, accounts and open transactions"
                - "Run the rules and record a baseline failure count per entity"
                - "Assign cleansing batches to data owners with a clear fix list"
                - "Rerun the quality rules and log the failure counts @recurring(monthly:10)"
            - name: Deciding which history to migrate and which to archive
              description: |-
                ## Purpose
                Moving twenty years of closed transactions multiplies load time, mapping effort and the number of edge cases, often for data that is read twice a year. Deciding per data set whether to migrate in full, migrate a recent window or archive read-only, with legal and business owners in the room, can cut a data migration in half.

                ## Milestones
                1. Each data set classified by how often it is read and by retention requirements.
                2. A cut-off window proposed for history migrated into the new system.
                3. Retention obligations confirmed with legal or compliance for archived data.
                4. A signed decision per data set: migrate, window or archive.

                ## Notes
                Retention periods depend on your jurisdiction and industry. Confirm them with your legal or compliance team rather than assuming.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every legacy data set has a signed migrate, window or archive decision with the retention requirement it satisfies."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure how often each historical table is read using query logs"
                - "Ask legal or compliance for retention requirements by data type"
                - "Propose a migration window for each data set"
                - "Record the signed decision for each data set"
            - name: User account and identity migration plan
              description: |-
                ## Purpose
                Forcing every user to reset their password on go-live day floods support and loses customers. Planning how accounts, roles and credentials move, whether by migrating hashes, rehashing on first login or federating through single sign-on, decides whether people even notice the switch.

                ## Milestones
                1. The legacy credential storage, roles and permissions model documented.
                2. A credential strategy chosen: hash migration, lazy rehash on login or forced reset.
                3. A role and permission mapping from old to new reviewed by security.
                4. A test cohort of accounts migrated and logged in successfully.

                ## Notes
                Weak legacy hashing schemes should be upgraded on first login, not carried over. Ask your security team to review the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A security-reviewed identity plan exists, and a test cohort of migrated accounts logs in with correct roles."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Document how the legacy system stores passwords and assigns roles"
                - "Choose between hash migration, lazy rehash and forced reset"
                - "Map every legacy role to a role in the new system"
                - "Migrate a test cohort of accounts and confirm each can log in"
            - name: Compatibility layer for old clients and URLs
              description: |-
                ## Purpose
                Not every consumer will change on your schedule: partners with fixed integrations, bookmarked URLs, printed QR codes, a desktop client installed on hundreds of machines. A thin compatibility layer of redirects, adapters or a facade that speaks the old protocol lets you switch off the old system without waiting for the slowest consumer.

                ## Milestones
                1. Consumers that cannot change by cutover identified from the integration map.
                2. A facade, adapter or redirect designed for each one.
                3. Contract tests proving the layer returns what old clients expect.
                4. A sunset date for the compatibility layer agreed with each consumer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every consumer that cannot change by cutover is served by a tested compatibility layer with an agreed sunset date."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List consumers from the integration map that cannot change before cutover"
                - "Export the top legacy URLs from access logs for the redirect map"
                - "Write contract tests for each old-format request and response"
                - "Agree a sunset date for the compatibility layer with each consumer"
            - name: Rewiring reports and downstream data feeds
              description: |-
                ## Purpose
                Finance, regulatory and management reports are often built straight on the legacy database, and they break silently after cutover because nobody listed them. Finding every report and feed, rebuilding it on the new source and comparing a month of figures side by side protects the numbers leadership and regulators rely on.

                ## Milestones
                1. Every report, extract and BI dataset that reads legacy data listed with its owner.
                2. Each one rebuilt or repointed to the new system or warehouse.
                3. A month of figures compared old against new, with differences explained.
                4. Report owners signing off before the legacy source is removed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every report and feed on legacy data is rebuilt on the new source and signed off by its owner after a month-long comparison."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the BI team for every dataset that queries the legacy database"
                - "Find scheduled extracts and spreadsheets with live legacy connections"
                - "Rebuild the most critical finance report on the new source first"
                - "Compare a full month of report figures old against new"
            - name: Read-only archive for retired legacy data
              description: |-
                ## Purpose
                Some data must stay available long after the old system is gone, for audits, disputes or regulators, but keeping a whole legacy stack running for that is expensive and risky. A read-only archive in an open format, with a simple search and a tested restore, lets you retire the platform without losing access.

                ## Milestones
                1. Archived data sets exported in an open, documented format with schemas.
                2. A simple search or query interface for the people who need access.
                3. Access controls and retention dates applied to the archive.
                4. A yearly access test proving the archive can still be read and searched.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Archived legacy data is readable in an open format with access controls, and a yearly access test is recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose an open format and storage location for archived data"
                - "Export the first archived data set with its schema documented"
                - "Set access controls and record the retention date for each set"
                - "Run a search against the archive and confirm results match @recurring(yearly)"
            - name: Rollback plan and point of no return
              description: |-
                ## Purpose
                Every cutover plan needs an honest answer to what happens if it goes wrong at 3am, and most migrations have a moment after which rolling back costs more than fixing forward. Defining the rollback steps, the data that would need reverse sync and the exact point of no return turns a go-live into a decision with known exits.

                ## Milestones
                1. Rollback steps written for each cutover stage, with timings.
                2. A plan for writes made on the new system that must flow back if you revert.
                3. The point of no return defined and agreed with the sponsor.
                4. Rollback rehearsed end to end in a test environment at least once.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rehearsed rollback plan covers every cutover stage and reverse data flow, and the point of no return is agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write rollback steps and expected timings for each cutover stage"
                - "Decide how writes on the new system would flow back after a rollback"
                - "Agree the point of no return with the sponsor and record it"
                - "Rehearse the rollback in a test environment and time each step"
            - name: Full dress rehearsal of the cutover
              description: |-
                ## Purpose
                Nobody should execute a cutover runbook for the first time on the real night. A full rehearsal with production-sized data, the real team and a stopwatch reveals the steps that take four hours instead of forty minutes, the missing permissions and the person who did not know they were needed.

                ## Milestones
                1. A rehearsal environment loaded with a recent copy of production-sized data.
                2. The runbook executed end to end by the people who will do it for real.
                3. Actual timings recorded against planned timings for every step.
                4. Every problem found fixed in the runbook, and a second rehearsal run if timings slipped.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full rehearsal on production-sized data finishes within the planned window, with timings and fixes recorded in the runbook."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Book the rehearsal date with every person named in the runbook"
                - "Refresh the rehearsal environment with a recent production-sized copy"
                - "Run the rehearsal with a timekeeper recording every step"
                - "Update the runbook with every problem and revised timing found"
            - name: Cutover weekend runbook and command centre
              description: |-
                ## Purpose
                On cutover night, tired people make decisions in minutes that affect every customer. A step-by-step runbook with owners, timings, checkpoints and go or no-go gates, run from a single command channel with a decision maker present, keeps the night calm and the rollback option real until the point of no return.

                ## Milestones
                1. A runbook with every step numbered, owned and timed, including checkpoints.
                2. Go or no-go gates defined with the evidence each one needs.
                3. A command channel, bridge line and decision maker confirmed for the whole window.
                4. Business verification testers booked for the morning after.

                ## Notes
                Start from the **Operational checklist** template. Avoid month-end, payroll runs and peak trading days when choosing the window.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The cutover is executed from a numbered runbook with recorded go or no-go decisions at every gate and business verification signed off."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Choose a cutover window clear of month-end, payroll and peak trading"
                - "Number every runbook step with an owner and planned duration"
                - "Write the evidence required at each go or no-go gate"
                - "Book business testers to verify key journeys the morning after"
            - name: Pilot migration of one small user group
              description: |-
                ## Purpose
                Piloting with one branch, one region or a handful of friendly customers flushes out the problems no test environment finds: real data shapes, real habits, real integrations. Choosing a group that is small, representative and forgiving, and agreeing what success looks like before it starts, makes the pilot a genuine gate rather than a formality.

                ## Milestones
                1. A pilot group chosen that is small, representative and willing.
                2. Success criteria agreed before the pilot: error rates, support tickets, task times.
                3. The pilot group migrated and supported for at least two weeks.
                4. A go, fix or stop decision recorded against the criteria.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pilot group runs on the new system for two weeks, and a go, fix or stop decision is recorded against criteria set beforehand."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Shortlist three possible pilot groups and pick the most representative"
                - "Write pilot success criteria before anyone is migrated"
                - "Migrate the pilot group and give them a direct support channel"
                - "Record the go, fix or stop decision after two weeks"
            - name: User training and process changes before cutover
              description: |-
                ## Purpose
                Users judge a migration by their first morning on the new system, and staff who learned the old screens over fifteen years will hunt for workarounds if nobody shows them the new way. Training sessions built around real daily tasks, short quick-reference guides and a group of trained champions per team mean fewer support calls and fewer people quietly keeping spreadsheets on the side.

                ## Milestones
                1. Each user group's top ten daily tasks listed and mapped to the new system.
                2. Hands-on training delivered to every group in a sandbox with realistic data.
                3. A one-page quick-reference guide per role, covering what moved and what changed.
                4. At least one trained champion per team, named before go-live.

                ## Notes
                Train as close to cutover as you can. Training given three months early is mostly forgotten by go-live.
              priority: medium
              deadlineOffsetDays: 140
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every user group has attended hands-on training and has a role guide, and each team has a named champion before go-live."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Ask each team lead for their group's ten most common daily tasks"
                - "Load realistic anonymised data into a training sandbox"
                - "Write a one-page guide per role showing what moved and what changed"
                - "Name a champion in each team and train them first"
            - name: Hypercare period after go-live
              description: |-
                ## Purpose
                Expect the first weeks after cutover to produce a burst of defects, data questions and confused users, and the migration team is usually exhausted. A defined hypercare period with extra support staffing, a daily triage, a fast fix lane and clear exit criteria catches problems while the people who know the migration are still on hand.

                ## Milestones
                1. Hypercare length, staffing and exit criteria agreed before go-live.
                2. A dedicated triage channel for migration issues, separate from normal support.
                3. Defects and data issues tracked with a fix lane faster than the normal release cycle.
                4. Hypercare formally closed once exit criteria are met, with handover to normal support.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Hypercare runs with a separate triage channel and fast fix lane, and closes with exit criteria met and a recorded handover to support."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Agree hypercare length and exit criteria with the sponsor"
                - "Open a dedicated triage channel for post-migration issues"
                - "Set up a fix lane that can ship urgent fixes within a day"
                - "Review hypercare tickets against the exit criteria @recurring(weekly:mon)"
            - name: Legacy switch-off and decommissioning day
              description: |-
                ## Purpose
                Switching off is a project in its own right: final data extracts, archive checks, revoking credentials, removing firewall rules and DNS entries, ending contracts and wiping disks to the security standard. Doing it on a planned date against the exit criteria, rather than letting the old servers idle forever, is what actually ends the migration.

                ## Milestones
                1. Every exit criterion confirmed met with evidence.
                2. A final read-only period completed with no unexpected access attempts.
                3. Credentials, network rules, DNS entries and monitoring for legacy hosts removed.
                4. Hardware wiped or cloud resources deleted, with a certificate or record filed.

                ## Notes
                Put the system in read-only mode for a few weeks before power-off. Any access attempt in that window is a consumer you missed.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The legacy system is switched off on a planned date with every exit criterion evidenced and a decommissioning record filed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Check each exit criterion and attach the evidence"
                - "Switch the legacy system to read-only and log any access attempts"
                - "Remove legacy credentials, firewall rules, DNS entries and monitors"
                - "File the disk wipe or resource deletion record with security"
            - name: Post-migration retrospective
              description: |-
                ## Purpose
                Organisations migrate again, often within a decade, and the lessons from this one vanish with the programme team. A blameless retrospective comparing the plan with what happened, covering estimates, data defects, communication and the cost of coexistence, gives the next migration a head start.

                ## Milestones
                1. Planned versus actual dates, costs and effort laid out for each phase.
                2. Input gathered from engineers, business users, support and the sponsor.
                3. Five to ten lessons written up with a recommendation each.
                4. The write-up stored where the next migration team will find it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A retrospective document compares plan with actuals for every phase and records at least five lessons with recommendations."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect planned and actual dates, costs and effort for each phase"
                - "Send a short survey to engineers, users, support and the sponsor"
                - "Run a ninety-minute blameless retrospective session"
                - "Publish the lessons where future programme teams will look"
            - name: Audit-ready evidence for a regulated migration
              description: |-
                ## Purpose
                Banks, insurers, healthcare providers and public bodies often need to prove to auditors or regulators that no records were lost or altered in a migration. Planning the evidence pack from the start, with reconciliation reports, sign-offs, access logs and the approved mapping, avoids reconstructing it months later under pressure.

                ## Milestones
                1. Evidence requirements agreed with internal audit or compliance at the start.
                2. Reconciliation reports, mapping sign-offs and cutover approvals filed as they happen.
                3. Access to production data during migration logged and reviewed.
                4. An evidence pack accepted by internal audit after cutover.

                ## Notes
                Regulatory duties differ by country and sector. Agree the evidence list with your compliance team rather than assuming what a regulator expects.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An evidence pack of reconciliations, sign-offs and access reviews is accepted by internal audit after cutover."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask internal audit which evidence they need for a data migration"
                - "Create an evidence folder with a section per programme phase"
                - "File each reconciliation report and sign-off as it is produced"
                - "Review production data access logs from the migration period"
            - name: Small team migration without a dedicated programme
              description: |-
                ## Purpose
                Plenty of migrations are done by four engineers who also keep the product running, with no programme manager and no budget for a parallel team. Protecting a fixed weekly block, migrating one capability at a time and keeping the plan to one page lets a small team finish without stalling feature work for a year.

                ## Milestones
                1. A one-page plan listing capabilities in migration order.
                2. A protected weekly block of migration time agreed with the product owner.
                3. One capability fully moved and its legacy code path deleted.
                4. A steady pace of capabilities moved per month visible in the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page plan shows capabilities moved each month, with at least one legacy code path deleted in each of three consecutive months."
                cadence: rolling
              tasks:
                - "Write a one-page plan listing capabilities in the order you will move them"
                - "Agree a protected weekly migration block with the product owner"
                - "Spend the migration block moving the next capability @recurring(weekly:thu)"
            - name: Taking over a stalled half-finished migration
              description: |-
                ## Purpose
                Inheriting a migration that is two years in, with both systems live, a sync nobody trusts and a team that has lost faith, is common and very different from starting fresh. A short reset that establishes the true state, cuts scope to what can finish, and sets a new switch-off date restores momentum faster than pushing on with the old plan.

                ## Milestones
                1. The true state documented: what runs where, what syncs, what is half built.
                2. The reasons for the stall identified with the people involved.
                3. A reduced scope and a new switch-off date agreed with the sponsor.
                4. One visible win delivered within six weeks of the reset.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A reset document records the true state, causes of the stall, a reduced scope and a new switch-off date approved by the sponsor."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map what currently runs on each system and what syncs between them"
                - "Interview the original team about why the migration stalled"
                - "Propose a reduced scope and new switch-off date to the sponsor"
                - "Pick one capability that can be fully moved within six weeks"
            - name: Migrating against a vendor end-of-support date
              description: |-
                ## Purpose
                When a vendor announces end of support for your database version, ERP release or operating system, the deadline is fixed and the cost of missing it is unpatched security holes or expensive extended support. Planning backwards from that date, with extended support priced as a fallback, keeps the migration from becoming an emergency.

                ## Milestones
                1. The end-of-support date and what stops on it confirmed from the vendor.
                2. Extended support price and terms obtained as a costed fallback.
                3. A backward plan from the deadline with a buffer of at least three months.
                4. A decision point set for buying extended support if the plan slips.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A backward plan from the vendor's end-of-support date has a three-month buffer, a priced fallback and a dated decision point."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the end-of-support date and its impact in the vendor's notice"
                - "Ask the vendor for extended support pricing and terms"
                - "Plan backwards from the deadline with a three-month buffer"
                - "Set a dated decision point for buying extended support"
            - name: Tenant-by-tenant waves for a multi-customer platform
              description: |-
                ## Purpose
                Business-to-business platforms rarely move every customer at once: large accounts have contractual change windows, custom integrations and nervous IT teams. Grouping tenants into waves by size, complexity and risk appetite, with a readiness check and customer contact before each wave, spreads the risk and builds a track record before the biggest accounts move.

                ## Milestones
                1. Every tenant scored for size, customisation and contractual constraints.
                2. Waves defined with the simplest tenants first and the largest last.
                3. A readiness checklist and customer notice template for each wave.
                4. Each wave completed with tenant sign-off before the next starts.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every tenant is assigned to a wave, and each completed wave has customer sign-off recorded before the next begins."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Score every tenant for size, customisation and contract constraints"
                - "Group tenants into waves with the simplest first"
                - "Draft the customer notice and readiness checklist for wave one"
                - "Run the readiness check for the next wave and contact its tenants @recurring(weekly:mon)"
            - name: Mainframe batch and COBOL workload migration
              description: |-
                ## Purpose
                Mainframe estates carry decades of batch chains with job control, copybooks, EBCDIC files and packed decimal fields, plus overnight windows the business depends on. Moving them means understanding job dependencies, character encoding and numeric precision exactly, and proving each batch chain produces identical output before the mainframe contract ends.

                ## Milestones
                1. Batch job dependency graph built from the job scheduler and job control.
                2. Encoding and packed decimal conversions tested on real files.
                3. Each batch chain run on the new platform with output compared byte for byte or field by field.
                4. Batch window timings on the new platform within the business's overnight limit.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every migrated batch chain produces output matching the mainframe on real files and finishes within the overnight window."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Export job scheduler definitions and build the batch dependency graph"
                - "Convert a sample of EBCDIC files and check packed decimal fields"
                - "Run the first batch chain on the new platform and compare outputs"
                - "Time the full overnight batch on the new platform"
            - name: Cross-engine database platform switch
              description: |-
                ## Purpose
                Moving between database engines, for example from a commercial engine to an open source one, is harder than a copy: stored procedures, sequences, collations, date handling and query plans all differ. Converting code and schema with tooling, then validating behaviour and performance on production-sized data, avoids a switch that works in testing and crawls in production.

                ## Milestones
                1. Schema, stored procedures and functions converted with differences logged.
                2. Collation, time zone and numeric precision differences tested explicitly.
                3. The slowest hundred production queries benchmarked on the target engine.
                4. A near-zero downtime switch planned using replication or change data capture.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Converted schema and code pass behaviour tests, the top hundred queries meet agreed timings, and a replication-based switch plan is approved."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Run a schema conversion tool and log every object it could not convert"
                - "Write tests for collation, time zone and decimal precision differences"
                - "Benchmark the hundred slowest production queries on the target engine"
                - "Plan the switch using replication with a measured catch-up time"
            - name: Migration factory for an application portfolio
              description: |-
                ## Purpose
                Enterprises leaving a data centre or retiring a platform may have dozens or hundreds of applications to move, and treating each as a bespoke project never finishes. A migration factory with standard assessment, patterns per application type, a wave plan and a small expert team that handles the exceptions turns migration into a repeatable throughput.

                ## Milestones
                1. Every application assessed with the same short questionnaire.
                2. Three to five standard migration patterns with runbooks.
                3. A wave plan grouping applications by pattern and dependency.
                4. Monthly throughput of applications migrated tracked against the plan.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All applications are assessed and assigned to waves, and monthly migrated counts are tracked against the plan."
                cadence: cyclic
              tasks:
                - "Write a twenty-question assessment every application owner can answer"
                - "Define the standard patterns and write a runbook for each"
                - "Plan the next wave and review last month's throughput @recurring(monthly:25)"
---

# Legacy System Migration

This area is for engineers, teams and enterprise programmes moving off an old system or platform onto a new one, whether that is a mainframe, a twenty-year-old monolith, an unsupported vendor package or a home-grown database nobody dares touch. It starts with foundations (what the old system really does, who depends on it, why you are leaving and how), moves through the operating routines that keep a long migration honest, the skills of reading old code and proving equivalence, and the decisions about data, identity and compatibility, then the dated events from first pilot to cutover weekend and switch-off, and ends with situations such as inheriting a stalled migration and specialist work like mainframe batch moves and migration factories.

What repeats is a weekly steering review, reconciliation runs and parallel-run triage, a traffic-shift check, monthly risk, freeze and communication reviews, legacy keep-alive patching until the last day, and yearly checks on licences and archived data. The Risk register, Meeting notes, Metrics log, Vendor and Operational checklist templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
