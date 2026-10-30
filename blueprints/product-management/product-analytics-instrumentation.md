---
id: product-management.product-analytics-instrumentation
name: Product Analytics Instrumentation
description: "A tracking plan the whole team trusts: questions first, one naming convention, clear identity and consent rules, verified events on every platform and weekly checks that catch broken tracking early."
category: business
version: 1.0.0
tags: [product-management, product-analytics-instrumentation, team, engineer, event-tracking, tracking-plan, data-quality, analytics]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - product-spec
    - operational-checklist
    - metrics-log
    - meeting-notes
    - onboarding-plan
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Analytics Instrumentation
          description: "Defining and implementing the events and properties a product needs to track, so usage questions can be answered without guessing."
          projects:
            - name: Inventory of product questions the data must answer
              description: |-
                ## Purpose
                Before anyone names an event, the team needs the list of questions it expects analytics to answer: which plans convert, where new users stall, which settings large accounts change. Writing twenty to forty real questions, each with the decision it would inform, keeps the tracking plan small and prevents the common failure of tracking everything and answering nothing.

                ## Milestones
                1. A list of at least twenty questions collected from product, design, engineering, support and leadership.
                2. Each question paired with the decision or action its answer would change.
                3. Questions ranked into answer this quarter, useful later and nice to know.
                4. The top ten questions agreed as the scope of the first tracking plan.

                ## Notes
                Questions like how engaged are our users are too vague to instrument. Rewrite each one until it names a type of user, an action and a time window.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of at least twenty product questions, each tied to a decision, with the top ten agreed as the first tracking plan's scope."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask five colleagues for the three usage questions they most want answered"
                - "Rewrite each question to name the user, the action and the time window"
                - "Note beside every question the decision its answer would change"
                - "Rank the questions and agree the top ten with the product lead"
                - "Revisit the question list against what the team is now deciding @recurring(quarterly)"
            - name: Audit of events the product already sends
              description: |-
                ## Purpose
                Most products already emit dozens or hundreds of events from old SDK calls, autocapture and long-finished experiments, and nobody is sure which ones are trustworthy. An audit listing every event, its volume, where in the code it fires and whether anyone queries it gives an honest starting point for the tracking plan and shows what can be deleted.

                ## Milestones
                1. An export of every event name with its 30-day volume from the analytics tool.
                2. Each event traced to the code location or integration that sends it.
                3. Every event marked keep, fix, merge or retire with a one-line reason.
                4. Events nobody has queried in 90 days listed as retirement candidates.

                ## Notes
                Use the tool's query history if it has one. What people actually chart is a better signal than anyone's memory of what matters.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A spreadsheet of every live event with its volume, sending code location and a keep, fix, merge or retire verdict."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the full event list with 30-day volumes from the analytics tool"
                - "Search the codebase for every tracking call and map it to an event name"
                - "Flag events with near-identical names or meanings"
                - "Mark each event keep, fix, merge or retire with a one-line reason"
            - name: Event naming convention for the whole product
              description: |-
                ## Purpose
                Signed Up, signup_completed and user-registered living in the same project turn every query into a guessing game. One agreed convention, such as object then past-tense action in a single casing, plus rules for property names and values, lets a new engineer name an event correctly without asking and lets an analyst find it by searching.

                ## Milestones
                1. A written convention covering event names, property names, casing and tense.
                2. A short list of approved objects and actions to build names from.
                3. Rules for property values, including units, enumerations, booleans and empty values.
                4. The convention linked from the tracking plan and the engineering contribution guide.

                ## Notes
                Object then action, for example Report Exported or project_created, scales better than action first because related events sort together in every picker. Choose one casing and never mix it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page naming convention for events, properties and values is published and linked from the engineering contribution guide."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect twenty current event names as examples of what to fix"
                - "Choose the casing, word order and tense for event names"
                - "Write rules for property names, units and allowed values"
                - "Publish the convention and link it from the contribution guide"
            - name: Tracking plan as the single source of truth
              description: |-
                ## Purpose
                A tracking plan lists every event, why it exists, exactly when it fires, its properties with types and allowed values, and the platforms that send it. Keeping it in one shared place that engineering, product and analysts all treat as the spec stops the drift where the code, the dashboard and the product manager's memory each describe a different event.

                ## Milestones
                1. A plan with columns for event, trigger, properties, types, platforms, owner and status.
                2. Every keep and fix event from the audit entered in the plan.
                3. Each event linked to at least one question from the question inventory.
                4. The plan agreed as the place changes are proposed before any code is written.

                ## Notes
                A shared spreadsheet is fine to start. Move to a schema registry or the analytics tool's own plan feature once the shape has settled, not before.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared tracking plan covers every kept event with trigger, typed properties, platforms and owner, each linked to a question it answers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Create the plan with event, trigger, properties, types, platforms and owner columns"
                - "Enter every keep and fix event from the audit"
                - "Write the exact firing condition for each event in one sentence"
                - "Link every event to the product question it serves"
                - "Ask the agent to flag events whose trigger descriptions are ambiguous"
            - name: Choosing a product analytics tool
              description: |-
                ## Purpose
                Product analytics tools differ in pricing unit, warehouse support, identity handling, data residency and how easily non-analysts can build their own funnels. Comparing two or three against your top ten questions, your expected monthly tracked users and your privacy requirements avoids a choice made on the strength of a demo and regretted at renewal.

                ## Milestones
                1. Requirements written: questions to answer, expected volumes, platforms, data residency and budget.
                2. A shortlist of three tools, each scored against the same criteria.
                3. A two-week trial of one or two shortlisted tools using real staging events.
                4. A decision recorded with the price basis, contract length and the route for exporting raw data.

                ## Notes
                Start from the **Purchase decision** template. Ask every vendor in writing how you would export raw events if you left; a tool you cannot leave is a risk you are buying.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool chosen against written criteria, with a scored shortlist, trial notes and the raw data export route recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the requirements: volumes, platforms, residency, budget and top questions"
                - "Shortlist three tools and score each against the same criteria"
                - "Send staging events to one or two tools for a two-week trial"
                - "Ask each vendor in writing how raw events can be exported"
                - "Record the decision with its pricing basis and contract length"
            - name: User identity and anonymous ID strategy
              description: |-
                ## Purpose
                Every visitor starts anonymous, then signs up, logs in on a second device and perhaps shares a laptop with a colleague. Deciding when identify is called, which stable ID to use, how anonymous history merges and what happens on logout prevents the split profiles and inflated user counts that are expensive to repair once months of data exist.

                ## Milestones
                1. The canonical user ID chosen: stable, internal and never an email address.
                2. Rules written for identify on sign-up and login, reset on logout and anonymous history merge.
                3. Behaviour defined for shared devices and people with more than one account.
                4. The rules tested end to end in staging across web and mobile.

                ## Notes
                An email address as the user ID breaks when people change their email. Use the database user ID, and send email as a property only where your privacy rules allow it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written identity rules for identify, reset and merge, verified in staging so one test person appears as one user across two devices."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the stable internal ID that will be the analytics user ID"
                - "Write when identify and reset are called on each platform"
                - "Test sign-up, logout and login on two devices in staging"
                - "Check the test person appears as exactly one user in the tool"
            - name: Owners and decision rights for tracking
              description: |-
                ## Purpose
                Tracking decays when nobody owns it: events get added without review, renamed during a refactor and broken without anyone noticing. Naming who approves new events, who implements them, who checks the data and who may delete them turns analytics from a shared hope into a maintained system.

                ## Milestones
                1. One owner named for the tracking plan as a whole.
                2. An owner named for each product surface or event group.
                3. A written rule for who approves additions, renames and deletions.
                4. The ownership table posted where engineers and analysts both look.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published ownership table naming the plan owner, an owner for each event group and the approval rule for changes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the event groups by product surface"
                - "Name an owner for the plan and for each event group"
                - "Write the approval rule for adding, renaming and deleting events"
                - "Re-confirm event group owners after any team change @recurring(quarterly)"
            - name: Separate analytics projects for development and production
              description: |-
                ## Purpose
                When developers test against the production analytics project, fake sign-ups and test purchases land in the numbers leadership reads. Separate projects or write keys for local, staging and production, chosen automatically by the build, keep real data clean and give engineers a safe place to check new events.

                ## Milestones
                1. Distinct projects or write keys for development, staging and production.
                2. Every build reading its key from configuration, never hard-coded.
                3. Staff and test accounts flagged or filtered out of production reports.
                4. A line in the tracking plan saying where to verify new events before release.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Development, staging and production send to separate destinations, and internal accounts are filtered from production reports."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create separate analytics projects or keys for each environment"
                - "Move the write key into environment configuration for every app"
                - "Add an internal-account property or filter for staff and test users"
                - "Send one test event from staging and confirm it never reaches production"
            - name: Consent and privacy rules for tracking
              description: |-
                ## Purpose
                Analytics events can carry personal data, and many jurisdictions expect consent before non-essential tracking and limits on what is collected and for how long. Agreeing with your privacy or legal lead which events need consent, which properties are forbidden and the retention period, then building those rules into the SDK set-up, stops a quiet compliance problem growing with every release.

                ## Milestones
                1. Your privacy lead's position on consent, retention and personal data in analytics written down.
                2. A list of forbidden properties, such as free-text fields, full names and precise location.
                3. Consent state wired so the SDK only sends what the user has agreed to.
                4. Retention settings in the analytics tool matched to the agreed period.

                ## Notes
                This project organises the work; the rules themselves come from your privacy, legal or data protection lead. Ask them rather than guessing from another company's banner.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Consent behaviour, forbidden properties and retention agreed with the privacy lead and implemented in the SDK and tool settings."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book thirty minutes with the privacy or legal lead about analytics data"
                - "Write the list of properties that must never be sent"
                - "Check the SDK sends nothing beyond essentials before consent is given"
                - "Set the analytics tool's retention period to the agreed value"
                - "Review consent and retention rules with the privacy lead @recurring(yearly)"
            - name: First release of core lifecycle events
              description: |-
                ## Purpose
                Only a handful of events answers most early questions: signed up, logged in, finished onboarding, performed the core action, invited a teammate, started and cancelled a subscription. Shipping those eight to twelve events properly, with typed properties and data checked against the database, is worth more than a hundred half-tested ones.

                ## Milestones
                1. Eight to twelve lifecycle events specified in the tracking plan.
                2. The events implemented on every platform where the action happens.
                3. Each event verified in staging with the correct properties.
                4. A sign-up to core action funnel built and sanity-checked against backend counts.

                ## Notes
                Send account and billing events from the server where you can. Client events are lost to tracker blockers, closed tabs and flaky connections.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Eight to twelve lifecycle events live on all platforms, with weekly sign-up counts within 5% of the database."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick the eight to twelve lifecycle events from the tracking plan"
                - "Implement the events and their properties on each platform"
                - "Verify each event in the staging debugger before merge"
                - "Compare a week of tool sign-up counts with the user table"
            - name: Tracking spec in every ticket's definition of done
              description: |-
                ## Purpose
                Instrumentation added after launch is late, rushed and always missing the first week of data, which is the week everyone asks about. Making a tracking section part of every feature ticket, reviewed in the same pull request as the code, means new features ship measurable on day one.

                ## Milestones
                1. A tracking section added to the feature spec and ticket templates.
                2. Pull request review including a check against the tracking plan.
                3. The definition of done requiring planned events verified in staging.
                4. Three consecutive features shipped with tracking live on release day.

                ## Notes
                Start from the **Product spec** template and add a tracking section listing each event, its trigger and its properties.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive features released with planned events verified in staging before merge and visible in production on launch day."
                cadence: rolling
              tasks:
                - "Add a tracking section to the feature ticket template"
                - "Add a tracking plan check to the pull request review checklist"
                - "Update the definition of done to require verified events in staging"
                - "Check every feature closed this week had its tracking verified @recurring(weekly:fri)"
            - name: Weekly event volume anomaly check
              description: |-
                ## Purpose
                Tracking usually breaks silently: a refactor drops a call, a release renames a property, and nobody notices for a month until a chart looks odd in a board pack. Ten minutes a week looking at volumes for the twenty events that matter most, backed by alerts where the tool offers them, catches breakage within days.

                ## Milestones
                1. The twenty most important events listed for monitoring.
                2. Expected weekly ranges noted for each, allowing for seasonality and holidays.
                3. Volume alerts configured where the tool supports them.
                4. Every out-of-range change either explained or logged as a tracking incident.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly checks of the top twenty events, with every out-of-range change explained or logged."
                cadence: rolling
              tasks:
                - "Choose the twenty events whose breakage would hurt most"
                - "Set alerts for volume drops over 30% where the tool supports them"
                - "Compare this week's top twenty event volumes with last week's @recurring(weekly:mon)"
                - "Log any unexplained change as a tracking incident with an owner"
            - name: Monthly tracking plan review
              description: |-
                ## Purpose
                Plans drift as fast as code does: new events appear outside the process, owners move teams and properties gain values nobody documented. A monthly hour comparing what the tool receives with what the plan says keeps the two in step before the gap needs a full audit to close.

                ## Milestones
                1. A monthly slot booked with the plan owner and one engineer.
                2. Unplanned events received in the month listed and resolved.
                3. Plan entries with no matching data for 30 days investigated.
                4. Six monthly reviews completed with their changes recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews, each listing unplanned and missing events with the action taken on each."
                cadence: rolling
              tasks:
                - "Book a recurring hour with the plan owner and one engineer"
                - "Compare received events with the plan and resolve differences @recurring(monthly:12)"
                - "Investigate plan entries that have had no data for 30 days"
                - "Record each review's changes in the plan's history tab"
            - name: Intake process for new tracking requests
              description: |-
                ## Purpose
                Requests to add tracking for this arrive in chat, in meetings and as comments on old tickets, and they either get lost or bypass the plan entirely. One short request form asking for the question, the decision it informs and the date it is needed lets the plan owner batch, deduplicate and prioritise requests once a week.

                ## Milestones
                1. A request form with fields for question, decision, events wanted and needed-by date.
                2. The form linked from the analytics channel and the tracking plan.
                3. Requests triaged weekly into build, already answerable or decline.
                4. Median time from request to live event measured for a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tracking request for one quarter arrives through the form, is triaged within a week and has a recorded outcome."
                cadence: rolling
              tasks:
                - "Create a request form asking for question, decision, events and date"
                - "Pin the form link in the analytics channel"
                - "Triage new tracking requests into build, answerable now or decline @recurring(weekly:wed)"
                - "Reply to each requester with the outcome and the reason"
            - name: Analytics QA checklist for every release
              description: |-
                ## Purpose
                Releases are when tracking breaks, especially on mobile, where a faulty build stays on users' phones for weeks. A short checklist run on each release candidate, covering lifecycle events, identity calls, consent and any events the release touches, catches problems before they reach the app store or production.

                ## Milestones
                1. A checklist covering lifecycle events, identity, consent and changed events.
                2. The checklist run on each release candidate in staging.
                3. Failures blocking release unless the plan owner signs off a known gap.
                4. Checklist results stored with each release's notes.

                ## Notes
                Start from the **Operational checklist** template. Keep it under fifteen checks or it will be skipped on the first busy release.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The analytics checklist run and recorded for five consecutive releases, with failures fixed or signed off before release."
                cadence: rolling
              tasks:
                - "Draft a checklist of no more than fifteen analytics checks"
                - "Add the checklist as a step in the release candidate process"
                - "Run the checklist in staging on the next release candidate"
                - "Store the checklist result alongside the release notes"
            - name: Quarterly data quality scorecard
              description: |-
                ## Purpose
                Trust in analytics is lost faster than it is earned, and a vague feeling that the numbers are off stops people using data at all. A quarterly scorecard of a few concrete measures, such as the share of events in the plan, property fill rates, duplicate rate and agreement with backend counts, shows whether quality is improving and where to spend effort next.

                ## Milestones
                1. Four or five quality measures defined, each with how it is calculated.
                2. A baseline score taken for the current quarter.
                3. The scorecard shared with product and engineering leads.
                4. Two improvement actions chosen from each quarter's weakest measure.

                ## Notes
                Start from the **Metrics log** template so each quarter's scores sit in one table.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly scorecards recorded, each with five measures and two improvement actions, shared with product and engineering leads."
                cadence: cyclic
              tasks:
                - "Define five data quality measures and how to calculate each"
                - "Take baseline scores for the current quarter"
                - "Produce and share the data quality scorecard @recurring(quarterly)"
                - "Pick two improvement actions from the weakest measures"
            - name: Schema change log for analysts
              description: |-
                ## Purpose
                Analysts and anyone with a saved chart need to know when an event was renamed, a property's meaning changed or one value was split into two, or their numbers jump with no explanation. A dated change log with old and new definitions makes every break in a time series explainable in one lookup.

                ## Milestones
                1. A change log with date, event, change, reason and affected reports.
                2. Every rename, new required property and change of meaning recorded.
                3. A monthly summary posted to the analytics channel.
                4. Annotations added in the analytics tool on the dates of significant changes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every schema change for six months recorded with date and reason, with a monthly summary posted to analysts."
                cadence: rolling
              tasks:
                - "Create the change log with date, event, change, reason and affected reports"
                - "Backfill the log with changes made since the tracking plan began"
                - "Post a summary of the month's schema changes to analysts @recurring(monthly:3)"
                - "Annotate the analytics tool on the date of each significant change"
            - name: Quarterly pruning of unused events
              description: |-
                ## Purpose
                Every event has a cost: volume-based bills, clutter in event pickers and confusion when two look alike. Retiring events nobody has queried for a quarter, after checking with their owners, keeps the list short enough that people pick the right event first time.

                ## Milestones
                1. Query history used to list events with no queries for 90 days.
                2. Owners asked to confirm each candidate can be retired.
                3. Retired events removed from code and marked retired in the plan.
                4. The total event count recorded quarter to quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Unused events reviewed every quarter, with retired events removed from code and the plan and the total count recorded."
                cadence: cyclic
              tasks:
                - "List events with no queries in the last 90 days"
                - "Ask each owner to confirm retirement within a week"
                - "Remove retired events from code and mark them retired in the plan"
                - "Run the unused event review with event owners @recurring(quarterly)"
            - name: Data dictionary for everyone who queries events
              description: |-
                ## Purpose
                The tracking plan is written for the people implementing events; the people building charts need something plainer. A data dictionary inside or beside the analytics tool, saying what each event means in everyday words, which property to filter by and known caveats such as web-only events, cuts the same five questions analysts answer every week.

                ## Milestones
                1. Plain-language descriptions written for the fifty most-used events and their key properties.
                2. Known caveats noted against each event.
                3. Descriptions shown inside the analytics tool where it supports them.
                4. New and changed events added every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The fifty most-used events have plain-language descriptions and caveats visible in the analytics tool, refreshed monthly."
                cadence: rolling
              tasks:
                - "List the fifty most-queried events"
                - "Write a plain-language description and caveats for each"
                - "Copy the descriptions into the analytics tool's event descriptions"
                - "Describe new and changed events in the dictionary @recurring(monthly:20)"
                - "Ask the agent to rewrite jargon-heavy descriptions in plain language"
            - name: Event volume and analytics cost budget
              description: |-
                ## Purpose
                Analytics tools charge by events, tracked users or rows synced, and a single chatty event such as a scroll or heartbeat can double the bill. Watching volume per event against a monthly budget, and agreeing limits for high-frequency events, keeps cost tied to the value of the questions being answered.

                ## Milestones
                1. The tool's pricing unit and current monthly usage understood.
                2. The ten highest-volume events listed with their share of the bill.
                3. A monthly volume budget agreed with whoever holds the budget.
                4. High-frequency events sampled, throttled or removed where they answer no question.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly usage stays within an agreed volume budget for six months, with the top ten events by cost reviewed each month."
                cadence: rolling
              tasks:
                - "Find the pricing unit and the last three months of usage"
                - "Rank the ten events with the highest volume"
                - "Check usage against the monthly volume budget @recurring(monthly:8)"
                - "Propose throttling or removal for high-volume events that answer no question"
            - name: Event data model basics for events, users and groups
              description: |-
                ## Purpose
                Product analytics rests on a small data model: events with properties, users with traits and, in business products, accounts or groups. Learning how your tool stores each one, and which properties are stamped onto events at the time versus looked up later, explains most of the confusing numbers people bring to the team.

                ## Milestones
                1. The difference between event properties and user properties explained in your own words.
                2. How your tool treats a user property that changes over time understood with a real example.
                3. Group or account analytics explained, including events that belong to two groups.
                4. A one-page summary written for new team members.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the event, user and group model as your tool implements it, checked by an analyst."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your tool's documentation on events, user properties and groups"
                - "Find one chart whose numbers change if a user property is current or historical"
                - "Explain the difference to a colleague using that chart"
                - "Write a one-page model summary for new team members"
            - name: Funnel and cohort query fundamentals
              description: |-
                ## Purpose
                Funnels and cohorts look simple, but conversion windows, step ordering, holding a property constant and counting unique users versus totals can move a result by tens of points. Practising on questions where the database already gives you the answer teaches which settings make a chart honest.

                ## Milestones
                1. Three funnels rebuilt with different conversion windows and the differences explained.
                2. Unique users and event totals compared on the same funnel.
                3. A cohort built with its exact definition written beneath it.
                4. One funnel step checked against a database count and the gap explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three practice funnels and one cohort built with written definitions, and one funnel step reconciled to a database count."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Rebuild the sign-up funnel with one-day, seven-day and thirty-day windows"
                - "Compare unique users and total events on the same funnel"
                - "Build one cohort and write its exact definition under the chart"
                - "Reconcile one funnel step against a database query"
            - name: SQL on raw event tables in the warehouse
              description: |-
                ## Purpose
                Some questions outgrow the analytics tool's interface: joining usage to revenue, deduplicating retried events or grouping by a property the tool never indexed. Being able to query raw event tables in SQL, including late-arriving events and merged identities, gives engineers and product managers an answer when the charts cannot.

                ## Milestones
                1. Read access to the raw events schema in the warehouse.
                2. The structure of the events and users tables documented.
                3. Five practice queries saved, including a deduplication and a join to accounts.
                4. One real question answered in SQL and checked against the analytics tool.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five working SQL queries on raw event tables saved in a shared folder, one answering a real question and reconciled to the tool."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Request read access to the raw event tables"
                - "Document the columns of the events and users tables"
                - "Write a query that removes duplicate events by message ID"
                - "Answer one live product question in SQL and compare it with the tool"
            - name: Debugging events with SDK and network tools
              description: |-
                ## Purpose
                When an event looks wrong, guessing from the dashboard wastes an afternoon. Knowing how to watch events leave the browser or app, read the payload and see them land in the tool's live view lets an engineer find the cause in minutes and fix it in the same pull request.

                ## Milestones
                1. Events inspected in the browser network panel for one complete web flow.
                2. The mobile SDK's verbose logging turned on and read in a debug build.
                3. The analytics tool's live event view used to confirm arrival and properties.
                4. A short debugging guide written for the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written debugging guide covering web, mobile and the tool's live view, used to diagnose at least one real issue."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Watch the sign-up flow's events in the browser network panel"
                - "Turn on verbose SDK logging in a debug mobile build"
                - "Confirm the same events arrive in the tool's live view"
                - "Write a one-page debugging guide for the team"
            - name: Time zones, sessions and timestamps
              description: |-
                ## Purpose
                Daily active counts that differ between two tools, sessions that split at midnight and events arriving days late from offline phones all come from how time is handled. Learning which timestamp your pipeline uses, how a session is defined and which time zone each report runs in removes a whole category of arguments about whose number is right.

                ## Milestones
                1. Client, server and received timestamps distinguished in your pipeline.
                2. The project time zone and session timeout setting confirmed.
                3. The share of late-arriving offline events measured for one mobile app.
                4. The time and session rules written into the data dictionary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Timestamp, time zone and session rules written in the data dictionary, with the share of late mobile events measured."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check which timestamp your tool uses when drawing charts"
                - "Confirm the project time zone and session timeout setting"
                - "Measure how many mobile events arrive more than a day late"
                - "Add the time and session rules to the data dictionary"
            - name: Tracker blockers, bots and missing data
              description: |-
                ## Purpose
                Client-side analytics misses some share of people who block trackers, while crawlers and uptime monitors inflate page counts. Estimating both for your own product, by setting tool counts beside database and server log counts, tells you which numbers to treat as exact and which only as trends.

                ## Milestones
                1. Tool sign-up counts set beside database sign-ups for one month.
                2. The gap attributed to blocking, bots or broken tracking.
                3. Bot filtering turned on or written where the tool allows it.
                4. The known undercount recorded in the data dictionary.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The measured gap between tool and database counts for one month, explained by cause and recorded in the data dictionary."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set last month's database sign-ups beside the tool's figure"
                - "Check server logs for crawler and uptime traffic on tracked pages"
                - "Turn on the tool's bot filtering if it offers one"
                - "Record the measured gap and its causes in the data dictionary"
            - name: Mobile SDK batching, offline queues and app versions
              description: |-
                ## Purpose
                Mobile SDKs batch events, hold them while offline and send them later, and every app version still installed may track differently. Understanding flush intervals, queue limits and version tagging stops conclusions being drawn from old builds or from queues that were dropped when the app was killed.

                ## Milestones
                1. The SDK's batching, flush and offline queue settings documented.
                2. App version and build number sent on every mobile event.
                3. Event loss measured for an app force-quit before flushing.
                4. A rule written for excluding outdated app versions from analysis.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "SDK queue settings documented, app version present on every mobile event and a loss rate measured for force-quit sessions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the mobile SDK's batching and offline queue settings"
                - "Confirm app version and build number are sent with every event"
                - "Force-quit the app mid-flow in testing and check what arrives"
                - "Write a rule for which app versions to exclude from analysis"
            - name: Client-side versus server-side tracking decision
              description: |-
                ## Purpose
                Client-side events capture interface detail but get blocked, duplicated and occasionally spoofed; server-side events are reliable but blind to what the user saw. Deciding event by event which side sends what, with billing and account changes always on the server, gives accuracy where it matters and context where it helps.

                ## Milestones
                1. Each lifecycle event assigned to client, server or both.
                2. A rule written that prevents double counting when both sides send.
                3. Server-side sending implemented for billing and account events.
                4. The choice and its reason recorded per event in the tracking plan.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every event in the plan marked client or server with a reason, and billing and account events sent from the server."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark each event in the plan as client, server or both"
                - "Write the rule that stops one action being counted twice"
                - "Move billing and account events to server-side sending"
                - "Record the reason for each choice in the tracking plan"
            - name: Typed tracking code generated from the plan
              description: |-
                ## Purpose
                Hand-written tracking calls drift from the plan through typos, forgotten properties and copied mistakes. Generating typed functions from the tracking plan, so the compiler rejects a missing property or a misspelt event name, moves quality checks from the dashboard into the build where they are cheap to fix.

                ## Milestones
                1. A tool or script chosen to generate typed tracking functions.
                2. Generated code replacing raw tracking calls on one platform.
                3. Continuous integration failing on calls that bypass the generated functions.
                4. A second platform migrated to generated code.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tracking on two platforms uses generated typed functions, and the CI build fails any raw tracking call outside them."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Compare two ways of generating typed tracking code from the plan"
                - "Generate typed tracking functions for the web app"
                - "Replace raw tracking calls on one product surface"
                - "Add a lint rule in CI that flags raw tracking calls"
            - name: Schema validation at ingestion
              description: |-
                ## Purpose
                Even with a good plan, bad data arrives: a number sent as text, an unplanned event, a value outside the agreed list. Validating events against the schema as they arrive, and blocking or flagging violations, keeps bad data out of the reports people rely on and gives engineers a precise list of what to fix.

                ## Milestones
                1. The schema for each planned event loaded into the pipeline or tool's validation feature.
                2. A block, flag or allow setting chosen for each event's violations.
                3. A weekly violation report reviewed by the plan owner.
                4. Violations reduced to half of the first week's count.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ingestion validation runs on all planned events, with weekly violations reviewed and halved from the first week's level."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Load the tracking plan schemas into the validation feature"
                - "Choose block, flag or allow for each event's violations"
                - "Review the schema violation report and assign fixes @recurring(weekly:thu)"
                - "Record the first week's violation count as the baseline"
            - name: Customer data platform or direct SDKs
              description: |-
                ## Purpose
                A customer data platform collects events once and forwards them to analytics, marketing tools and the warehouse, at a price and with another vendor in the data path. Comparing that with sending directly from SDKs, against how many destinations you really have, settles a question teams otherwise reopen every year.

                ## Milestones
                1. Current and planned destinations for event data listed.
                2. Costs of both routes estimated for next year's volume.
                3. Engineering effort to add one new destination estimated for each route.
                4. A decision recorded with its reasons and the conditions that would reopen it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between a data platform and direct SDKs, with costs, destinations and the conditions for revisiting it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every tool that receives or will receive event data"
                - "Estimate next year's cost for a data platform and for direct SDKs"
                - "Estimate the effort of adding one new destination on each route"
                - "Write the decision and what would make you revisit it"
            - name: Warehouse sync of product events
              description: |-
                ## Purpose
                Once product data needs joining to revenue, support tickets or CRM records, events must reach the data warehouse in a shape analysts can query. A dependable sync with known latency and a documented schema makes the warehouse the place cross-team questions get answered, instead of exports pasted into spreadsheets.

                ## Milestones
                1. The sync route chosen and running into a dedicated raw schema.
                2. Latency and completeness measured against the analytics tool.
                3. A modelled table of key events joined to accounts.
                4. Alerts in place for failed or late syncs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Product events sync to the warehouse daily with measured latency, a modelled events-to-accounts table and failure alerts."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose how events will reach the warehouse"
                - "Set up the sync into a dedicated raw events schema"
                - "Compare a week of row counts with the analytics tool"
                - "Build a modelled table joining key events to accounts"
                - "Turn on alerts for failed or late syncs"
            - name: Account-level analytics for business products
              description: |-
                ## Purpose
                In a product sold to companies, the buyer cares whether the account is using it, not whether one person logged in. Attaching an account or workspace ID to events and setting up group analytics lets the team count active accounts and spot large accounts that have gone quiet.

                ## Milestones
                1. The account or workspace ID chosen as the group key.
                2. The group ID attached to every event fired inside an account.
                3. Account traits such as plan and seat count synced to the tool.
                4. Three account-level charts built and checked against CRM figures.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every in-account event carries the group ID, account traits are synced and three account-level charts match CRM figures."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose the account or workspace ID to use as the group key"
                - "Attach the group ID to every event fired inside an account"
                - "Sync plan and seat count as account traits"
                - "Check three account-level charts against the CRM"
            - name: Autocapture versus explicit events
              description: |-
                ## Purpose
                Autocapture records every click and page view without code, which is quick to start but produces events tied to interface selectors that break with each redesign. Deciding where autocapture helps, such as early exploration, and which actions must have explicit named events keeps analysis stable as the interface changes.

                ## Milestones
                1. Current autocapture use and its share of volume reviewed.
                2. A rule written for which actions must have explicit events.
                3. Selector-based charts for key actions rebuilt on explicit events.
                4. Autocapture scope reduced or kept, with the reason recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule on autocapture use, with every key-action chart built on explicit events rather than selectors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List saved charts that depend on autocaptured selectors"
                - "Write the rule for when an action needs an explicit event"
                - "Rebuild selector-based charts for key actions on explicit events"
                - "Record the decision on autocapture scope and the reason"
            - name: Recovering from a tracking gap
              description: |-
                ## Purpose
                Gaps happen: a broken release, an expired key, a consent bug that blocked a week of events. Deciding whether to backfill from server logs or the database, annotate the gap or exclude the period, and telling everyone affected, stops confident conclusions being drawn from a hole in the data.

                ## Milestones
                1. The gap's start, end and affected events established.
                2. Recoverable data identified in server logs or the database.
                3. Backfill completed where it is reliable, with backfilled rows marked.
                4. An annotation added and every affected report owner told.

                ## Notes
                Never backfill by guessing. If an action cannot be reconstructed from a record, leave the gap visible and annotated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The gap's dates and events documented, reliable data backfilled and marked, and every affected report owner notified."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down when the gap started and ended and which events it hit"
                - "Check whether server logs or the database hold the missing actions"
                - "Backfill only events you can reconstruct reliably and mark them"
                - "Annotate the gap in the analytics tool and tell report owners"
            - name: Merging duplicate and inconsistent events
              description: |-
                ## Purpose
                After a few years of growth, the same action is often tracked three ways across web, iOS and Android, with different names and property spellings. Merging each group into one canonical event, using the tool's merge or transformation features for history and code changes going forward, makes cross-platform questions answerable with a single chart.

                ## Milestones
                1. Duplicate event groups listed from the audit.
                2. A canonical name and property set chosen for each group.
                3. Historical data merged or transformed in the tool.
                4. Code on each platform updated to send only the canonical event.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every duplicate group from the audit merged into one canonical event in the tool and sent under that name from all platforms."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List each group of events that record the same action"
                - "Choose the canonical name and properties for each group"
                - "Merge historical data with the tool's transformation features"
                - "Update each platform's code to send only the canonical event"
            - name: Launch-day instrumentation readiness
              description: |-
                ## Purpose
                Big launches bring the questions everyone asks within hours: how many people tried it, where they got stuck, whether anything broke. Having the launch's events specified, implemented, verified and charted a week ahead means those answers exist when leadership asks, not a fortnight later.

                ## Milestones
                1. The launch questions listed with the events that answer them.
                2. Launch events in the tracking plan and implemented behind the release.
                3. A launch dashboard built and tested on staging data.
                4. Sign-off from the plan owner seven days before launch.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch dashboard fed by verified events is ready and signed off at least seven days before launch day."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the questions people will ask in the first 48 hours after launch"
                - "Add the launch events to the tracking plan with owners"
                - "Build the launch dashboard against staging data"
                - "Get the plan owner's sign-off a week before launch"
            - name: Analytics tool migration cutover
              description: |-
                ## Purpose
                Moving from one analytics tool to another is a dated and risky change: history may not transfer, numbers will differ and saved reports must be rebuilt. Running both tools in parallel for several weeks, reconciling key counts and fixing a switch-off date protects the team from losing a quarter of comparable data.

                ## Milestones
                1. A cutover plan with parallel-run dates and a switch-off date.
                2. Both tools receiving identical events during the parallel run.
                3. Key counts reconciled within an agreed tolerance.
                4. Priority reports rebuilt and the old tool switched off on the agreed date.

                ## Notes
                Export the old tool's raw history before switch-off, even if nobody expects to need it. Contracts often end access on the last day.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both tools run in parallel for at least four weeks, key counts reconcile within tolerance and the old tool is off on the set date."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Set the parallel-run start date and the switch-off date"
                - "Send identical events to both tools during the parallel run"
                - "Reconcile the ten key counts between the two tools each week"
                - "Rebuild the priority reports in the new tool"
                - "Export the old tool's raw history before switch-off"
            - name: Tracking plan sign-off workshop
              description: |-
                ## Purpose
                Plans written by one person tend to answer only that person's questions. A ninety-minute workshop where product, design, engineering and an analyst walk the main flows event by event catches missing triggers, ambiguous names and forgotten platforms before anyone writes code.

                ## Milestones
                1. Attendees and the flows to walk agreed in advance.
                2. Each main flow walked with every event and trigger read aloud.
                3. Gaps and disagreements recorded with an owner each.
                4. The revised plan signed off by the product and engineering leads.

                ## Notes
                Start from the **Meeting notes** template and keep one row per gap so nothing is lost after the room empties.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A workshop held with product, design, engineering and analytics, recorded gaps resolved and the plan signed off."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book ninety minutes with product, design, engineering and an analyst"
                - "Choose the three to five main flows to walk"
                - "Read each event and trigger aloud and note the gaps"
                - "Circulate the revised plan for sign-off within a week"
            - name: Annual analytics stack review
              description: |-
                ## Purpose
                Contracts renew, volumes grow and needs change, so the tool that suited a young product may not suit it three years on. A yearly review of cost, usage by team, open pain points and what alternatives now offer, held three months before renewal, leaves time to negotiate or move.

                ## Milestones
                1. The renewal date recorded and the review booked three months ahead.
                2. Cost per tracked user and active seats compared with last year.
                3. Pain points collected from analysts, product managers and engineers.
                4. A renew, renegotiate or replace recommendation written.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written renew, renegotiate or replace recommendation produced at least three months before each renewal for two years."
                cadence: cyclic
              tasks:
                - "Record the analytics contract renewal date and notice period"
                - "Collect pain points from analysts, product managers and engineers"
                - "Review cost, usage and fit three months before renewal @recurring(yearly)"
                - "Write a renew, renegotiate or replace recommendation"
            - name: Instrumentation fix day for the tracking backlog
              description: |-
                ## Purpose
                Small tracking fixes, a missing property here and a misfiring event there, rarely win against feature work in sprint planning, so they pile up. One dedicated day, with engineers and the plan owner working through a pre-sorted list, clears the backlog in a single push and reminds the team that data is part of the product.

                ## Milestones
                1. A date agreed with the engineering leads.
                2. The fix list sorted by impact, with every item under half a day.
                3. Fixes merged and verified in staging on the day.
                4. Results shared with before and after violation counts.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fix day held with at least ten tracking fixes merged and verified, and results shared with before and after counts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree a fix day date with the engineering leads"
                - "Sort the tracking backlog and split any item over half a day"
                - "Give each engineer a list of fixes for the day"
                - "Share before and after violation counts with the team"
            - name: Lean tracking for a small team without an analyst
              description: |-
                ## Purpose
                Small teams of three to ten people with no analyst need answers, not a data platform. Tracking about fifteen events in a free or low-cost tool, with one shared dashboard and an hour a month to read it together, gives a small team most of the value for a fraction of the effort.

                ## Milestones
                1. Fifteen or fewer events chosen from the question inventory.
                2. One tool set up on a free or low-cost plan.
                3. A single shared dashboard with five charts.
                4. A monthly hour booked to read it together and record one decision.

                ## Notes
                Resist adding events because the tool makes it easy. Every event you add is one more thing to check when a number looks wrong.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A small team runs on fifteen or fewer events and one five-chart dashboard, reviewed together monthly for six months."
                cadence: rolling
              tasks:
                - "Choose at most fifteen events from the top questions"
                - "Build one shared dashboard with five charts"
                - "Read the dashboard together and note one decision @recurring(monthly:28)"
                - "Drop any chart nobody has used in three months"
            - name: Engineer onboarding to the tracking codebase
              description: |-
                ## Purpose
                An engineer new to the team will add tracking within weeks, usually by copying the nearest existing call, mistakes included. A short onboarding path through the convention, the plan, the typed functions and the debugging guide gets them shipping correct events in their first sprint.

                ## Milestones
                1. An onboarding page linking the convention, plan, code and debugging guide.
                2. A starter task that adds or fixes one event.
                3. The new engineer's first event reviewed against the plan.
                4. The page improved using the new engineer's feedback.

                ## Notes
                Start from the **Onboarding plan** template and put the tracking steps in the first two weeks.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An onboarding page and starter task exist, and the next new engineer ships one correct planned event within two weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page tracking onboarding guide with links"
                - "Pick a small starter task that adds or fixes one event"
                - "Review the new engineer's first event against the plan"
                - "Ask the new engineer what was confusing and fix the guide"
            - name: Product manager inheriting an instrumented product
              description: |-
                ## Purpose
                Taking over a product means inheriting years of events, dashboards and folklore about which numbers are wrong. Spending the first weeks learning the plan, the known gaps and the five charts that matter avoids presenting a figure to leadership that the engineers already know is broken.

                ## Milestones
                1. The tracking plan and data dictionary read end to end.
                2. Thirty minutes spent with an engineer or analyst on known data gaps.
                3. The five charts leadership uses identified and rebuilt from scratch.
                4. A list of tracking questions and fixes raised through intake.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within the first month, the product manager has rebuilt the five leadership charts and submitted a list of tracking fixes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the tracking plan and data dictionary end to end"
                - "Ask an engineer which numbers they distrust and why"
                - "Rebuild the five charts leadership uses from scratch"
                - "Submit the tracking gaps you found through the request form"
            - name: Tracking across app versions in the wild
              description: |-
                ## Purpose
                Mobile users update slowly, so a property added in version 4.2 is missing for everyone still on 4.1, and a bug fixed last month keeps sending bad data for months. Watching version adoption and filtering analysis by version stops old builds quietly distorting new charts.

                ## Milestones
                1. App version adoption shown in a chart.
                2. Each tracking change tied in the plan to the version that introduced it.
                3. Analysis filters written for events that changed between versions.
                4. A minimum supported version raised with the mobile lead when old builds send harmful data.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tracking change records its first app version, and a monthly check sets version adoption beside the plan."
                cadence: rolling
              tasks:
                - "Build a chart of active users by app version"
                - "Record the first app version for each tracking change in the plan"
                - "Check which app versions still send outdated events @recurring(monthly:25)"
                - "Raise a minimum version with the mobile lead if old builds send bad data"
            - name: Combining tracking after merging two products
              description: |-
                ## Purpose
                When two products come together, through an acquisition or a decision to unify them, each arrives with its own tool, naming and user IDs. Mapping one plan onto the other, choosing shared identity and lifecycle events and agreeing what history to keep lets the combined team compare the products without hand-stitched spreadsheets.

                ## Milestones
                1. Both tracking plans and identity schemes laid side by side.
                2. A shared naming convention and lifecycle event set agreed.
                3. A mapping between the two products' user IDs built.
                4. A dated plan for which product moves first and what history is kept.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shared lifecycle event set, a user ID mapping and a dated consolidation plan agreed by both product teams."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the agent to draft a side-by-side mapping of matching events"
                - "Agree a shared set of lifecycle events and names"
                - "Build the mapping between the two user ID schemes"
                - "Write the dated consolidation plan, including what history to keep"
            - name: Personal data minimisation for sensitive products
              description: |-
                ## Purpose
                Products in health, finance, education or for children carry stricter expectations about what analytics may contain. Classifying every property, removing or generalising what is not needed and rechecking each quarter with your compliance lead keeps product analytics useful without it becoming a liability.

                ## Milestones
                1. Every property classified as safe, sensitive or forbidden.
                2. Sensitive values removed, hashed or generalised as agreed with compliance.
                3. URL and free-text properties checked for leaked personal data.
                4. A quarterly scan of new properties in place.

                ## Notes
                Your compliance or data protection lead sets the rules. This project gathers the evidence they need and makes the agreed changes stick.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every property classified and agreed with the compliance lead, forbidden values removed and a quarterly scan recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Classify each property as safe, sensitive or forbidden"
                - "Agree the treatment of sensitive properties with the compliance lead"
                - "Check URL and free-text properties for email addresses and IDs"
                - "Scan newly added properties for personal data @recurring(quarterly)"
            - name: Data contracts between engineering and analytics
              description: |-
                ## Purpose
                In larger organisations, analysts build models on events that engineers change without warning. A data contract makes each critical event a versioned interface, with an owner, a schema, a change process and automated checks, so breaking changes are caught in code review rather than in the board pack.

                ## Milestones
                1. The twenty most critical events chosen for contracts.
                2. Each contract written with schema, owner, version and change rule.
                3. CI checks failing any change that breaks a contract.
                4. A deprecation window agreed for breaking changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty critical events are under versioned contracts, and CI blocks breaking schema changes without a new version."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose the twenty events that downstream models depend on"
                - "Write a contract for each with schema, owner and version"
                - "Add a CI check that fails on breaking schema changes"
                - "Review the contracts with downstream model owners @recurring(quarterly)"
            - name: Reconciling analytics with billing and backend records
              description: |-
                ## Purpose
                Analytics counts of sign-ups, upgrades and cancellations never match the billing system exactly, and when the size of the gap is unknown nobody trusts either source. A monthly reconciliation of five key counts, with tolerances agreed and differences explained, shows when tracking has drifted and keeps leadership reports consistent.

                ## Milestones
                1. Five counts chosen that exist in both analytics and billing.
                2. An acceptable tolerance agreed for each count.
                3. A monthly comparison recorded in one sheet.
                4. Every breach explained and either fixed or documented.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five key counts reconciled monthly for six months, each within tolerance or with a recorded explanation."
                cadence: rolling
              tasks:
                - "Choose five counts that exist in both analytics and billing"
                - "Agree an acceptable tolerance for each count"
                - "Reconcile the five counts between analytics and billing @recurring(monthly:15)"
                - "Explain or fix every count that breaches tolerance"
            - name: Cross-device identity stitching at scale
              description: |-
                ## Purpose
                Once people routinely move between web, mobile and shared devices, simple identify calls leave a long tail of split and wrongly merged profiles. Measuring the merge rate, auditing false merges and settling deterministic rules before considering any probabilistic matching keeps user counts and paths accurate as the product grows.

                ## Milestones
                1. The share of users seen on more than one device measured.
                2. A sample of fifty merged profiles audited for false merges.
                3. Deterministic merge rules documented and enforced in the pipeline.
                4. A decision recorded, with the privacy lead, on whether any probabilistic matching is acceptable.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A measured multi-device rate, an audit of fifty merged profiles and a recorded decision on merge rules."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Measure how many users appear on more than one device"
                - "Audit fifty merged profiles for wrong merges"
                - "Document the deterministic merge rules the pipeline enforces"
                - "Decide with the privacy lead whether probabilistic matching is allowed"
---

# Product Analytics Instrumentation

This area is for product teams and the engineers who implement tracking, and it covers everything between a usage question and an event you can trust. It starts with the foundations (the questions, an audit of what already fires, a naming convention, the tracking plan, a tool, identity and consent rules), then the operating routines that keep the data clean, the skills behind honest charts, the improvements and decisions that harden the pipeline, the dated events, the situations that change the work and finally the specialist practices of a mature data team.

What repeats is a weekly volume check, request triage and schema violation review, a monthly plan review, dictionary update, cost check and billing reconciliation, a quarterly data quality scorecard and pruning of unused events, and a yearly look at consent rules and the analytics contract. The Purchase decision, Product spec, Operational checklist, Metrics log, Meeting notes and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
