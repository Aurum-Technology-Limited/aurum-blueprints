---
id: product-management.product-operations
name: Product Operations
description: "The machinery behind a growing product org: a charter and operating model, tool stack and templates, intake, review and planning rhythms, trustworthy product data and the specialist work of scaling product ops."
category: business
version: 1.0.0
tags: [product-management, product-operations, enterprise, manager, team, product-ops, tooling, operating-model]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - purchase-decision
    - risk-register
    - onboarding-30-60-90
    - skills-matrix
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Operations
          description: "Building the systems, templates, tooling and data access that let product managers work consistently across a growing product organisation."
          projects:
            - name: Product operations charter and remit
              description: |-
                ## Purpose
                Nothing sinks product ops faster than nobody agreeing what it is for, so the role drifts into note-taking, tool admin and whatever the loudest product manager asks. A one-page charter that names the problems product ops owns, the ones it does not, who it serves and how success will be judged gives the function a remit leadership has signed and a polite way to say no.

                ## Milestones
                1. Three to five problems product ops owns written as outcomes, such as faster planning or usage data people trust.
                2. An explicit out-of-scope list, for example people management, writing specs for PMs and project managing launches.
                3. The draft reviewed with the head of product and two or three product managers.
                4. A signed-off charter published in the product documentation space.

                ## Notes
                Keep it to one page. A charter that tries to cover research ops, data, tooling, programme management and enablement at once usually delivers none of them in the first year, so pick two to lead with.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page product ops charter listing owned problems, out-of-scope work and success measures is approved by the head of product and published."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the three biggest problems product managers raised last quarter"
                - "Draft an in-scope and out-of-scope list for product ops on one page"
                - "Review the draft charter with the head of product and two product managers"
                - "Publish the signed-off charter in the product documentation space"
            - name: Product manager time audit and pain-point survey
              description: |-
                ## Purpose
                Before building any process, find out where product managers' weeks actually go. A two-week time sample plus a short survey usually shows the same pattern: hours lost chasing data, rebuilding status decks and hunting for the latest version of a document, and those findings become the first product ops backlog.

                ## Milestones
                1. A survey of no more than ten questions sent to every product manager, with at least 70 percent responding.
                2. A two-week time sample from at least five product managers, sorted into discovery, delivery, reporting, meetings and admin.
                3. The top five pain points ranked by hours lost and number of people affected.
                4. A findings summary shared back with the product managers who took part.

                ## Notes
                Share results back within two weeks. People stop answering product ops surveys the moment they see nothing change.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A findings summary ranks the top five product manager pain points by hours lost, based on survey responses from at least 70 percent of PMs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a ten-question survey on time sinks, tools and missing information"
                - "Ask five product managers to log their time in half-day blocks for two weeks"
                - "Ask the agent to group free-text survey answers into themes with counts"
                - "Rank the top five pain points by hours lost and share the summary"
            - name: Product tool stack inventory and cost map
              description: |-
                ## Purpose
                Growing product orgs collect tools by accident: two roadmapping apps, three survey tools and a whiteboard licence nobody remembers buying. A single inventory with owner, cost, renewal date, active users and what each tool is the source of truth for is the starting point for every later consolidation and access decision.

                ## Milestones
                1. Every tool used by the product org listed, including ones paid on team or personal cards.
                2. Each tool tagged with an owner, annual cost, renewal date and active user count.
                3. Overlaps marked where two or more tools do the same job.
                4. Renewals in the next six months flagged to finance and procurement.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A tool inventory covering every product tool with owner, annual cost, renewal date and active users is published, with overlaps marked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance for a list of software spend coded to the product department"
                - "Survey PMs and designers for tools paid on team or personal cards"
                - "Pull active user counts from each tool's admin console"
                - "Mark overlapping tools and flag renewals due in the next six months"
            - name: Product ownership map of every surface
              description: |-
                ## Purpose
                When a customer reports a bug in billing settings or sales asks who owns the mobile login screen, nobody should need three messages to find out. An ownership map that names the product manager, engineering lead and designer for every product surface, service and integration settles routing questions and exposes the areas no one owns.

                ## Milestones
                1. A list of product surfaces, services and integrations agreed with engineering leads.
                2. A named product manager, engineering lead and designer against each one.
                3. Unowned or double-owned areas listed and raised with the head of product.
                4. The map published where support, sales and engineering can search it.

                ## Notes
                Map at the level people ask questions about, such as checkout or user permissions, not individual microservices. Engineering usually keeps a service catalogue that can be linked rather than copied.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A searchable ownership map names a PM, engineering lead and designer for every product surface, with unowned areas assigned or escalated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the list of product surfaces from the navigation and service catalogue"
                - "Fill in the PM, engineering lead and designer for each surface"
                - "Raise every unowned or double-owned surface with the head of product"
                - "Publish the map and link it from the support and sales handbooks"
            - name: One-page product operating model
              description: |-
                ## Purpose
                Any product org of more than three teams needs a shared answer to how work flows: when planning happens, which documents exist at each stage, which forums make which decisions and who attends. Drawing that operating model on one page replaces tribal knowledge with something a new hire can read in ten minutes and a leader can change deliberately.

                ## Milestones
                1. Current cadences mapped, covering planning, reviews, launches and retrospectives, with frequency and owner.
                2. Each stage of the product lifecycle paired with its expected artefact and decision forum.
                3. Gaps and duplicated forums marked for the head of product.
                4. A one-page diagram with a one-paragraph explanation approved and published.

                ## Notes
                Describe what actually happens first, then the target. Publishing an idealised model that nobody follows costs product ops credibility it will need later.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page operating model showing cadences, lifecycle artefacts and decision forums is approved by product leadership and published."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every recurring product meeting with its frequency, owner and attendees"
                - "Map lifecycle stages to the artefact and forum each one uses today"
                - "Draft a one-page diagram of the current and target operating model"
                - "Walk the head of product through the draft and record agreed changes"
            - name: Product ops request intake and queue
              description: |-
                ## Purpose
                Without a front door, product ops work arrives through direct messages and corridor asks, and the busiest product manager gets all of it. A short intake form feeding one visible queue, with categories and a promised response time, makes demand measurable and lets the team prioritise against the charter instead of the inbox.

                ## Milestones
                1. An intake form with no more than six fields: requester, team, problem, deadline, impact and category.
                2. One queue in the work tracker with statuses from received to done.
                3. A response time promise, such as acknowledgement within two working days, published with the form.
                4. Every request from the past month logged in the queue retrospectively.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An intake form and single queue are live, with a published response time and every request from the past month entered."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a six-field intake form for product ops requests"
                - "Set up a queue in the work tracker with received, accepted, in progress and done"
                - "Publish the form link and response time in the product channel"
                - "Log last month's requests from messages and email into the queue"
            - name: Product documentation home and folder structure
              description: |-
                ## Purpose
                Ask five product managers where the latest strategy, spec or research readout lives and you will get five answers. One documentation home with a predictable structure by product area and document type, plus a rule for archiving, makes documents findable for engineers, sales and new hires as well as product.

                ## Milestones
                1. A top-level structure agreed, organised by product area then document type.
                2. A naming pattern for documents, such as area, type, title and quarter.
                3. Live documents from the last two quarters moved or linked into the structure.
                4. Old spaces marked read-only with a pointer to the new home.

                ## Notes
                Resist building more than three folder levels. Search does most of the work once titles follow a pattern.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active product document from the last two quarters sits in one structured documentation home, with old spaces marked read-only."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch a three-level folder structure by product area and document type"
                - "Agree a document naming pattern with two product managers"
                - "Move or link active documents from the last two quarters into the new home"
                - "Mark retired spaces read-only with a link to the new location"
            - name: Product glossary and naming conventions
              description: |-
                ## Purpose
                When one team calls them workspaces, another calls them accounts and the billing system calls them organisations, every metric, spec and support article gets harder to read. A shared glossary of product terms, with the customer-facing name, the internal name and the data field for each, removes a surprising amount of confusion between product, engineering and support.

                ## Milestones
                1. The 30 to 50 most-used product terms listed with a one-line definition each.
                2. Customer-facing name, internal name and data field recorded for each term.
                3. Conflicting terms resolved with the relevant product managers.
                4. The glossary linked from the documentation home and the onboarding pack.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A glossary of at least 30 product terms with customer-facing name, internal name and data field is published and linked from onboarding."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect terms that cause confusion from support tickets and spec comments"
                - "Write a one-line definition and data field for each term"
                - "Resolve conflicting names with the product managers who own them"
                - "Link the glossary from the documentation home and onboarding pack"
            - name: Product ops baseline measures
              description: |-
                ## Purpose
                Budget reviews cut product ops easily because its results are spread across other people's work. Choosing four or five measures now, such as time to answer a usage question, planning cycle length, template adoption and PM satisfaction, and recording their starting values gives the function evidence of its own value in six months.

                ## Milestones
                1. Four or five measures chosen that tie to the charter's owned problems.
                2. A starting value recorded for each, with the method used to measure it.
                3. A twelve-month target agreed with the head of product.
                4. A quarterly re-measure scheduled and the first one completed.

                ## Notes
                Start from the **Metrics log** template. A PM satisfaction score from a three-question pulse is crude but tracks the trend well enough.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four or five product ops measures each have a recorded baseline, a measurement method and a twelve-month target agreed with the head of product."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick four or five measures that map to the charter's owned problems"
                - "Record a baseline value and the method for each measure"
                - "Agree twelve-month targets with the head of product"
                - "Re-measure every product ops baseline and note the change @recurring(quarterly)"
            - name: Weekly product ops intake triage
              description: |-
                ## Purpose
                A queue only builds trust if requests get looked at on a fixed day and requesters hear back. A 30-minute weekly triage that accepts, declines or redirects each new request against the charter keeps the queue honest and stops product ops quietly turning into a help desk.

                ## Milestones
                1. Every new request triaged within a week of arriving.
                2. Each request accepted, declined with a reason or redirected to the right team.
                3. Requesters told the outcome within the published response time.
                4. A monthly count of requests by category kept to show where demand comes from.

                ## Notes
                Declining is part of the job. A short reason that points back to the charter lands better than silence or a vague maybe later.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every request in the product ops queue has a triage outcome within seven days, and monthly counts by category are recorded."
                cadence: rolling
              tasks:
                - "Block 30 minutes in the calendar each week for intake triage"
                - "Triage new requests as accept, decline or redirect @recurring(weekly:tue)"
                - "Reply to each requester with the outcome and a reason"
                - "Count requests by category and requester team @recurring(monthly:2)"
            - name: Monthly product review pack production
              description: |-
                ## Purpose
                Leadership product reviews go badly when each product manager pulls numbers from a different dashboard the night before. Producing one standard pack each month, with the same metrics, definitions and layout for every product area, lets the review spend its hour on decisions rather than reconciling figures.

                ## Milestones
                1. A standard pack layout agreed: headline metrics, progress against goals, risks and asks.
                2. Data pulled from the agreed sources for every product area by a fixed day.
                3. PMs given two working days to add commentary before the review.
                4. Decisions and actions from each review recorded in the pack.

                ## Notes
                Lock the metric definitions before the first pack. Changing a definition mid-year silently breaks every trend line.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A monthly review pack using the same layout and metric definitions for every product area is ready two working days before each review."
                cadence: rolling
              tasks:
                - "Agree the review pack layout with the head of product"
                - "Pull metrics for every product area into the pack @recurring(monthly:6)"
                - "Send the pack to PMs for commentary @recurring(monthly:8)"
                - "Record decisions and actions from the review in the pack"
            - name: Quarterly planning cycle run
              description: |-
                ## Purpose
                Quarterly planning eats two to four weeks of product time when dates, inputs and templates are reinvented every cycle. Running the same published calendar each quarter, with input deadlines, a standard planning template and a fixed readout, makes planning predictable enough that teams can prepare for it rather than scramble.

                ## Milestones
                1. A planning calendar published four weeks before the quarter starts, with input deadlines.
                2. Inputs collected from every team in the same template.
                3. Cross-team dependencies listed and owners agreed before plans are final.
                4. A planning readout delivered and a short retrospective held after each cycle.

                ## Notes
                Start from the **Operational checklist** template. Product ops runs the process; product leaders own the content and the trade-offs.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter's planning runs to a calendar published four weeks ahead, with every team's plan submitted in the standard template by the deadline."
                cadence: cyclic
              tasks:
                - "Publish next quarter's planning calendar with input deadlines @recurring(quarterly)"
                - "Send the planning template and a worked example to every product team"
                - "Collect cross-team dependencies into one list with owners"
                - "Run a 30-minute planning retrospective after the readout"
            - name: Product tool licence and access hygiene
              description: |-
                ## Purpose
                Seats for people who left months ago, contractors with admin rights and a contract that auto-renews at list price are the normal state of a product tool stack. A monthly access sweep and a renewal calendar save real money and close the gap where former staff can still see the roadmap.

                ## Milestones
                1. Each product tool's admin and user lists checked against the current staff list.
                2. Leavers removed and inactive seats downgraded.
                3. A renewal calendar kept with a reminder 90 days before each contract date.
                4. Licence savings recorded each quarter in the tool inventory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every product tool's users match the current staff list each month, and no renewal arrives without a review at least 90 days ahead."
                cadence: rolling
              tasks:
                - "Compare each tool's user list with the staff directory @recurring(monthly:20)"
                - "Remove leavers and downgrade seats unused for 60 days"
                - "Review renewals due in the next 90 days with procurement @recurring(quarterly)"
                - "Record licence savings in the tool inventory"
            - name: Product template library upkeep
              description: |-
                ## Purpose
                Templates rot: fields nobody fills, sections that duplicate each other and three versions of the same one-pager in different folders. A small curated library with an owner and version for each template, reviewed each quarter against how teams actually use them, keeps the library worth opening.

                ## Milestones
                1. One library holding every official product template, each with owner, version and last-reviewed date.
                2. Duplicate and unofficial copies removed or redirected.
                3. Usage checked for each template and unused ones retired.
                4. Changes announced with a short note on what changed and why.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every template in the product library shows an owner, a version and a last-reviewed date within the past quarter."
                cadence: rolling
              tasks:
                - "Add owner, version and last-reviewed date to every template"
                - "Search the documentation home for stray copies and redirect them"
                - "Retire templates nobody used in the last quarter @recurring(quarterly)"
                - "Post a short note on template changes in the product channel"
            - name: Product data quality and dashboard checks
              description: |-
                ## Purpose
                One broken dashboard in a leadership review can undo months of work persuading people to trust product data. A weekly ten-minute check of the core dashboards for gaps, sudden drops and stale refresh times catches pipeline problems before a product manager presents a number that is wrong.

                ## Milestones
                1. A list of the five to ten core product dashboards with owner and data source.
                2. A weekly check covering refresh time, missing days and implausible jumps.
                3. Issues logged with the data team, with dashboard, symptom and date.
                4. A visible note on any dashboard with a known issue until it is fixed.

                ## Notes
                Event design and tracking plans sit with analytics and engineering. Product ops looks after the consumption side: whether people can find the numbers and trust them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The core product dashboards are checked every week, and every data issue found is logged with the data team and flagged on the dashboard."
                cadence: rolling
              tasks:
                - "List the core product dashboards with owner and data source"
                - "Check refresh times, missing days and sudden jumps @recurring(weekly:mon)"
                - "Log each data issue with the data team, with dashboard and symptom"
                - "Add a known-issue banner to affected dashboards until fixed"
            - name: Product decision log upkeep
              description: |-
                ## Purpose
                Six months after a pricing or scope call, nobody remembers who decided, what evidence they used or which options were rejected, so the same debate restarts. A lightweight decision log across the product org, with a standard entry and a monthly check that big calls were recorded, gives teams an institutional memory.

                ## Milestones
                1. A decision log with fields for date, decision, owner, options considered, evidence and review date.
                2. Decisions from leadership reviews and planning entered within a week.
                3. A monthly scan of review notes for decisions not yet logged.
                4. Decisions due for review flagged to their owners.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every decision taken in leadership reviews and planning appears in the decision log within a week, with owner and options considered."
                cadence: rolling
              tasks:
                - "Create a decision log with date, owner, options, evidence and review date"
                - "Enter decisions from the last two leadership reviews"
                - "Scan review notes for decisions missing from the log @recurring(monthly:12)"
                - "Remind owners of decisions that have reached their review date"
            - name: Research participant panel and consent records
              description: |-
                ## Purpose
                Finding customers to talk to can cost a product manager days, and the same five friendly accounts get interviewed every quarter. A shared research panel with consent recorded, contact limits per person and a sign-up route lets teams book participants in hours while respecting customers' time and data protection rules.

                ## Milestones
                1. A panel list with consent date, contact preferences, segment and last contacted date.
                2. A contact limit, such as one research request per person per quarter, agreed and enforced.
                3. A request route for PMs to ask for participants by segment.
                4. Consent records reviewed and expired entries removed each month.

                ## Notes
                Agree the consent wording and retention period with your privacy or legal team before recruiting anyone. Interview guides and synthesis stay with the product teams; product ops runs the panel.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A research panel with recorded consent and last-contacted dates serves PM requests within three working days, with expired consents removed monthly."
                cadence: rolling
              tasks:
                - "Agree consent wording and retention period with the privacy team"
                - "Build the panel list with consent, segment and last contacted fields"
                - "Publish a request route for PMs to ask for participants by segment"
                - "Remove expired consents and over-contacted people @recurring(monthly:3)"
            - name: Cross-team release calendar upkeep
              description: |-
                ## Purpose
                Support, sales enablement and marketing all plan around release dates, and they usually learn them from a customer. One release calendar fed from the work tracker, checked weekly with engineering managers, gives every downstream team a single place to see what ships when, without product ops running the launches themselves.

                ## Milestones
                1. A calendar view showing planned releases by product area, with a confidence level.
                2. Dates pulled from the tracker rather than retyped wherever the tools allow.
                3. A weekly check of changed or slipped dates with engineering managers.
                4. Support, sales and marketing leads subscribed to the calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A release calendar fed from the tracker is updated every week, and support, sales and marketing leads are subscribed to it."
                cadence: rolling
              tasks:
                - "Build a release calendar view by product area with a confidence field"
                - "Connect release dates from the work tracker where the tools allow"
                - "Check slipped or changed dates with engineering managers @recurring(weekly:thu)"
                - "Subscribe support, sales and marketing leads to the calendar"
            - name: Monthly process and tooling changelog for PMs
              description: |-
                ## Purpose
                Product managers ignore process changes they only hear about in passing, then get caught out at planning. A short monthly changelog of what product ops changed, retired or launched, with the reason and what PMs need to do, keeps the org current without another meeting.

                ## Milestones
                1. A fixed format: what changed, why, what you need to do and who to ask.
                2. Each month's edition sent on a predictable day.
                3. Past editions archived in the documentation home.
                4. Replies and reads checked to see whether people use it.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A product ops changelog in a fixed format goes to every product manager each month, with past editions archived."
                cadence: rolling
              tasks:
                - "Draft a four-part changelog format: change, reason, action, contact"
                - "Ask the agent to draft the changelog from closed queue items @recurring(monthly:25)"
                - "Archive each edition in the documentation home"
                - "Check replies and reads after three editions and adjust the format"
            - name: Quarterly process retrospective with product managers
              description: |-
                ## Purpose
                Processes built for twenty product managers start to chafe at forty, and nobody says so until it is a crisis. A quarterly retrospective where PMs score each core process and name one thing to stop, start and keep gives product ops a regular, structured signal on what to fix next.

                ## Milestones
                1. A short pre-survey scoring each core process from one to five.
                2. A 45-minute session with a cross-section of PMs, including new and senior ones.
                3. Three actions agreed, each with an owner and a date.
                4. Last quarter's actions reported back at the start of each session.

                ## Notes
                Invite people who have joined in the last six months. They still notice the friction that long-serving PMs have learned to work around.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a PM retrospective produces three owned actions, and the previous quarter's actions are reported on at the next session."
                cadence: cyclic
              tasks:
                - "Send a one-to-five score survey on each core process @recurring(quarterly)"
                - "Invite a mix of new and senior product managers to the session"
                - "Agree three actions with owners and dates"
                - "Report last quarter's actions at the start of the session"
            - name: Product data model and SQL basics for product ops
              description: |-
                ## Purpose
                Half of product ops requests are some version of asking for one more number, and a product ops lead who can query the warehouse answers in an hour instead of waiting a week for the data team. Learning the core tables, how users, accounts and events join, and enough SQL to count and group is the most practical skill in the role.

                ## Milestones
                1. The five to ten core tables named, with what one row in each means.
                2. A diagram of how users, accounts, subscriptions and events join.
                3. Ten real past requests answered with your own queries and checked against existing dashboards.
                4. A personal library of saved, commented queries.

                ## Notes
                Ask the data team for read access to a modelled layer rather than raw tables, and have your first few queries reviewed. A wrong join produces confident nonsense.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past product data requests are answered with your own queries, each matching the existing dashboard figure or with the difference explained."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the data team for read access to the modelled product tables"
                - "Draw how users, accounts, subscriptions and events join"
                - "Answer ten past data requests with your own queries"
                - "Have the data team review your first three queries"
            - name: Change management for process rollouts
              description: |-
                ## Purpose
                Most product ops initiatives fail at adoption, not design: a better planning template that half the org ignores is worse than the old one. Studying a simple change model, covering awareness, early adopters, training and reinforcement, and applying it to one real rollout teaches the part of the job no tool solves.

                ## Milestones
                1. One change management model studied and summarised on a page.
                2. A real upcoming rollout planned with stakeholders, champions and a training step.
                3. Two or three PM champions recruited for that rollout.
                4. Adoption measured at four and twelve weeks, with lessons written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real process rollout is planned with a written change model, champions and training, and its adoption is measured at four and twelve weeks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read one change management model and summarise it on a page"
                - "Map stakeholders and likely resistance for the next process rollout"
                - "Recruit two PM champions to pilot the change first"
                - "Measure adoption at four and twelve weeks and note the lessons"
            - name: Facilitating planning and prioritisation workshops
              description: |-
                ## Purpose
                Planning sessions, roadmap reviews and offsites often fall to product ops to facilitate, and a weak facilitator lets the most senior voice win. Practising agendas, timeboxing, silent writing, dot voting and parking lots on low-stakes sessions first builds the skill before the annual plan depends on it.

                ## Milestones
                1. Three facilitation techniques learned and tried, such as silent brainstorming, dot voting and a parking lot.
                2. Two low-stakes team sessions facilitated with a written agenda and timebox.
                3. Feedback collected from participants after each session.
                4. One cross-team planning workshop facilitated end to end.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sessions, including one cross-team planning workshop, are facilitated with written agendas and participant feedback recorded for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick three facilitation techniques and write when each one fits"
                - "Offer to facilitate a low-stakes team retrospective or review"
                - "Ask two participants for specific feedback after each session"
                - "Facilitate one cross-team planning workshop end to end"
            - name: Work tracker administration skills
              description: |-
                ## Purpose
                The work tracker is product ops' main instrument: custom fields, workflows, permissions, automations and reports decide whether planning data is clean or chaotic. Getting properly trained as an administrator, through the vendor's courses or certification, saves the org from fragile configuration made by whoever had admin rights first.

                ## Milestones
                1. The vendor's administrator learning path or certification completed.
                2. The current configuration documented: projects, fields, workflows and permission schemes.
                3. A sandbox or test project used for every change before production.
                4. Three configuration fixes made that remove known pain points.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The administrator course is complete, the tracker configuration is documented, and three fixes have been tested in a sandbox and released."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Enrol in the work tracker vendor's administrator learning path"
                - "Document current fields, workflows and permission schemes"
                - "Set up a sandbox project for testing configuration changes"
                - "Ship three tested configuration fixes from the PM pain-point list"
            - name: Studying how other companies run product ops
              description: |-
                ## Purpose
                Startups of 40 people, scale-ups with ten product teams and enterprises with business units each need a different kind of product ops, and copying the wrong model wastes a year. Reading published case studies and talking to three or four peers in similar organisations gives you a menu of patterns and the mistakes that came with them.

                ## Milestones
                1. Five published accounts of product ops functions read and summarised.
                2. Three or four conversations held with product ops leads at companies of similar size.
                3. Patterns sorted into what fits your organisation and what does not.
                4. A one-page note of ideas to try, shared with the head of product.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five case studies and at least three peer conversations are summarised in a one-page note of patterns to try, shared with the head of product."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect five published accounts of product ops teams at similar companies"
                - "Ask your network for three product ops leads willing to talk for 30 minutes"
                - "Sort what you learn into fits, maybe and does not fit"
                - "Share a one-page note of ideas with the head of product"
            - name: Writing process documentation people use
              description: |-
                ## Purpose
                A 14-page process guide gets read once, at launch, by the person who wrote it. Learning to write process docs as short task-based pages, with the trigger, the steps, the owner and an example, makes it far more likely that a product manager follows the process on a busy Thursday.

                ## Milestones
                1. A simple house style for process pages: trigger, owner, steps, example and contact.
                2. The three most-used process documents rewritten in that style.
                3. Each rewritten page tested by a PM who has not used the process before.
                4. Questions about each process compared before and after the rewrite.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three core process documents are rewritten in a task-based house style and each has been tested by a PM new to that process."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a five-part house style for process pages"
                - "Rewrite the three most-used process documents in the new style"
                - "Ask a PM new to each process to follow the page and note confusion"
                - "Compare questions about each process before and after the rewrite"
            - name: No-code automation between product tools
              description: |-
                ## Purpose
                Copying ticket status into a roadmap, pasting feedback into a spreadsheet and chasing PMs for updates are jobs software can do. Learning the automation built into your tracker and a general integration tool lets product ops remove hours of manual work each week, as long as each automation has an owner and a note explaining it.

                ## Milestones
                1. The built-in automation features of the work tracker and documentation tool learned.
                2. One integration platform tried on a test workflow.
                3. Two manual workflows from the pain-point list automated.
                4. Every automation listed with owner, trigger and what to do if it breaks.

                ## Notes
                Check with IT or security before connecting tools that hold customer data. An automation nobody documented becomes the next mystery when it fails.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Two manual product workflows are automated and every automation is listed with an owner, trigger and failure procedure."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work through the tracker's built-in automation tutorials"
                - "Pick two manual workflows from the pain-point findings"
                - "Build and test each automation in a sandbox first"
                - "List every automation with owner, trigger and failure steps"
            - name: Roadmap and planning tool consolidation
              description: |-
                ## Purpose
                Two or three roadmapping tools in one org mean leadership never sees a single picture and PMs maintain the same plan twice. Choosing one tool, or deciding the work tracker plus documents is enough, against criteria agreed in advance ends a recurring argument and usually saves licence spend.

                ## Milestones
                1. Five to seven selection criteria agreed with PMs and engineering, weighted by importance.
                2. Two or three options, including doing without a dedicated tool, scored against the criteria.
                3. A pilot with two teams on the leading option for one planning cycle.
                4. A recorded decision with a migration date and retirement dates for the other tools.

                ## Notes
                Start from the **Purchase decision** template. Include the cost of migrating and retraining, not just the licence price.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool decision scored against agreed criteria is recorded after a one-cycle pilot, with migration and retirement dates set."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree five to seven weighted selection criteria with PMs and engineering"
                - "Score two or three options, including no dedicated tool"
                - "Run a one-cycle pilot with two product teams"
                - "Record the decision with migration and retirement dates"
            - name: Standard product artefact template set
              description: |-
                ## Purpose
                When every team writes briefs, one-pagers and review documents in its own shape, leaders spend the first ten minutes of every review working out where the important part is. A small standard set, perhaps an opportunity brief, a spec, a launch readiness check and a review update, co-designed with PMs, gives consistency without forcing every document into one mould.

                ## Milestones
                1. The artefacts the org actually needs listed, capped at five.
                2. Each template drafted with two or three PMs who will use it.
                3. Each template piloted on a real piece of work and revised.
                4. The set published in the template library with an example for each.

                ## Notes
                Mark which sections are required and which are optional. Templates that make every field mandatory get abandoned.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Up to five standard product templates, each piloted on real work and published with an example, are in the template library."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List the documents PMs produce and pick no more than five to standardise"
                - "Draft each template with two PMs who will use it"
                - "Pilot each template on one real piece of work"
                - "Publish the set with a filled-in example of each"
            - name: Field request routing from sales and support
              description: |-
                ## Purpose
                Sales and support escalate customer asks through every channel they can find, and product managers either drown or ignore them. A defined route, with a short form, required fields such as account, revenue at stake and workaround, and an owner looked up from the ownership map, gets requests to the right PM with enough context to decide.

                ## Milestones
                1. One route for sales and support requests, with required fields agreed with their leads.
                2. Requests routed to owners using the ownership map.
                3. A response expectation published, for example an acknowledgement within five working days.
                4. Requesters able to see the status of their request without asking.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Sales and support submit product requests through one route with required fields, and each request reaches the named owner from the ownership map."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the required request fields with the sales and support leads"
                - "Build the request form and route it using the ownership map"
                - "Publish the acknowledgement time for field requests"
                - "Give requesters a view of their request status"
            - name: Product manager meeting load audit
              description: |-
                ## Purpose
                Meetings often take more than half a product manager's week, many of them recurring forums that outlived their purpose. Auditing the recurring product meetings for purpose, attendees and decisions made, then cutting or merging the weakest, returns hours to discovery work that no new process can.

                ## Milestones
                1. Every recurring product meeting listed with purpose, attendees, length and frequency.
                2. Each meeting rated on whether it made decisions or only shared information in the last month.
                3. A proposal to cut, merge, shorten or move to written updates agreed with leadership.
                4. PM meeting hours re-measured six weeks after the changes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Recurring product meetings are audited and reduced, with PM meeting hours re-measured six weeks later and the change recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export recurring meetings from PM calendars with attendees and length"
                - "Mark each meeting as decision, information or unclear"
                - "Propose cuts, merges and written alternatives to product leadership"
                - "Re-measure PM meeting hours six weeks after the changes"
            - name: Automated status reporting from the work tracker
              description: |-
                ## Purpose
                Weekly status decks assembled by hand are stale by the time they are read and cost each PM an hour or two a week. Building status views straight from the tracker, with a short written note on top, turns status into something people look up rather than something PMs produce.

                ## Milestones
                1. The questions leaders actually ask in status updates listed.
                2. Tracker fields and views set up so those answers come from data.
                3. One manual status report replaced by a live view plus a short note.
                4. Hours saved per PM estimated and recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one manual weekly status report is replaced by a live tracker view, with the hours saved per PM recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the five questions leaders ask most in status updates"
                - "Add or clean up the tracker fields needed to answer them"
                - "Build a live status view and retire one manual report"
                - "Ask affected PMs how much time the change saved each week"
            - name: Product metric dictionary
              description: |-
                ## Purpose
                Active users means something different in finance, marketing and each product team, and reviews stall while people argue about whose number is right. A metric dictionary with one owner, a written definition, the exact query or source and known caveats for each metric settles the argument once.

                ## Milestones
                1. The 20 to 30 metrics used in reviews and plans listed.
                2. Each metric given a definition, owner, source and known caveats.
                3. Conflicting definitions resolved with the owners and finance.
                4. Changes to any definition logged with date and reason.

                ## Notes
                Choosing which metric matters most is a strategy call for product leaders. The dictionary only makes sure everyone means the same thing by it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every metric used in product reviews appears in the dictionary with owner, definition, source and caveats, and definition changes are logged."
                cadence: rolling
              tasks:
                - "List every metric that appears in review packs and plans"
                - "Write a definition, owner, source and caveats for each one"
                - "Resolve conflicting definitions with metric owners and finance"
                - "Check the dictionary against live dashboards for drift @recurring(quarterly)"
            - name: Product tooling security and data retention review
              description: |-
                ## Purpose
                Product tools quietly collect customer data: interview recordings, screenshots in tickets and exports of user lists in shared drives. Reviewing each tool with your security and privacy team for what customer data it holds, who can see it and how long it is kept closes risks that otherwise surface in an audit or a breach.

                ## Milestones
                1. Each product tool rated for the customer data it holds.
                2. Access, sharing and retention settings checked for the tools holding sensitive data.
                3. Risks logged with an owner and a fix date.
                4. Retention rules agreed with the privacy team and applied to recordings and exports.

                ## Notes
                Start from the **Risk register** template. Security and privacy teams decide the rules; product ops makes sure the tools follow them.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every product tool holding customer data has been reviewed with security, with risks logged and retention rules applied to recordings and exports."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a review session with the security and privacy team"
                - "Rate each product tool for the customer data it stores"
                - "Log each risk with an owner and a fix date"
                - "Apply agreed retention rules to interview recordings and exports"
            - name: Retiring stale processes and duplicate documents
              description: |-
                ## Purpose
                Product orgs add process far faster than they remove it, and every abandoned checklist still confuses someone new. A deliberate sweep that lists every documented process, checks whether anyone still follows it and retires or merges the rest makes the operating model smaller and easier to trust.

                ## Milestones
                1. Every documented product process listed with owner and last use.
                2. Each one marked keep, merge, rewrite or retire.
                3. Retired processes archived with a note pointing to what replaced them.
                4. The operating model page updated to match.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every documented product process is marked keep, merge, rewrite or retire, and retired ones are archived with a pointer to their replacement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every documented product process with owner and last use"
                - "Ask each owner whether the process is still followed"
                - "Archive retired processes with a pointer to their replacement"
                - "Update the operating model page to match"
            - name: Annual product planning season preparation
              description: |-
                ## Purpose
                Annual planning collides with budgets, headcount and strategy, and product ops is usually the one holding the calendar, templates and inputs together. Preparing eight weeks out, with inputs from finance, sales and the data team scheduled before teams start writing, makes the difference between a plan and a scramble.

                ## Milestones
                1. An annual planning calendar agreed with the head of product and finance, eight weeks ahead.
                2. Input packs ready for teams: last year's results, customer themes, capacity and financial targets.
                3. Templates and examples published before kick-off.
                4. The final plan compiled and a process retrospective held.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual planning calendar and input packs are published eight weeks before plans are due, and the compiled plan is delivered on the agreed date."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Agree the annual planning timeline with the head of product and finance"
                - "Request input data from finance, sales and the data team with dates"
                - "Publish templates and a worked example before kick-off"
                - "Start annual planning preparation eight weeks before plans are due @recurring(yearly)"
            - name: Product organisation offsite
              description: |-
                ## Purpose
                Offsites cost a lot of people's time and often end with a good dinner and no decisions. Planning the product offsite around two or three questions leadership wants answered, with pre-reads sent a week ahead and outcomes written up within two days, makes the time worth spending.

                ## Milestones
                1. Two or three questions the offsite must answer agreed with the head of product.
                2. Venue, budget, travel and agenda confirmed four weeks ahead.
                3. Pre-reads sent at least a week before.
                4. Decisions and actions written up and shared within two working days.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The offsite answers its two or three agreed questions, with decisions and actions shared within two working days."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the two or three questions the offsite must answer"
                - "Confirm venue, budget and travel with the operations team"
                - "Send pre-reads at least a week before the offsite"
                - "Write up and share decisions within two working days"
            - name: New product tool rollout day
              description: |-
                ## Purpose
                Switching on a new tool with an email and a login link gets half-hearted adoption and parallel use of the old one for a year. Treating the rollout as a dated event, with data migrated, training booked, champions ready and the old tool set to read-only, gets the org across in one move.

                ## Milestones
                1. Data migrated and spot-checked by the teams who own it.
                2. Training sessions booked by role, with recordings saved.
                3. Champions in each team briefed to answer first questions.
                4. The old tool set to read-only on rollout day and cancelled at renewal.

                ## Notes
                Start from the **Operational checklist** template. Freeze changes in the old tool a few days before, or the migration chases a moving target.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On rollout day all teams have trained access, migrated data is spot-checked and the old tool is read-only, with its cancellation scheduled."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Set the rollout date and announce a change freeze in the old tool"
                - "Migrate data and ask each team to spot-check its own records"
                - "Book role-based training sessions and record them"
                - "Set the old tool to read-only on rollout day"
            - name: Product ops first-year review
              description: |-
                ## Purpose
                Twelve months in, product ops needs to show what moved and decide what it does next, before someone else decides for it. A review that compares the baseline measures with today, lists what was shipped and retired, and proposes next year's focus turns a support function into one with a track record.

                ## Milestones
                1. Baseline measures compared with current values.
                2. A list of what product ops shipped, retired and declined during the year.
                3. Feedback gathered from PMs and product leaders.
                4. Next year's two or three focus areas agreed with the head of product.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A first-year review comparing baseline and current measures, with next year's focus areas agreed, is presented to product leadership."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull current values for every baseline measure"
                - "List what product ops shipped, retired and declined this year"
                - "Ask the agent to summarise PM feedback into strengths and gaps"
                - "Present the review and agree next year's focus with the head of product"
            - name: Product org reorganisation transition
              description: |-
                ## Purpose
                Reorganisations break the quiet plumbing: ownership maps go stale, tracker projects belong to teams that no longer exist and permissions follow old reporting lines. Running a transition checklist the day a new structure is announced keeps routing, reporting and access working while people settle in.

                ## Milestones
                1. The ownership map updated to the new teams within a week.
                2. Tracker projects, boards and dashboards renamed or reassigned.
                3. Tool permissions and groups changed to match the new structure.
                4. Open requests and decisions re-homed with their new owners.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within two weeks of a reorganisation the ownership map, tracker projects, tool permissions and open requests all reflect the new team structure."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Get the new team structure and effective date from product leadership"
                - "Update the ownership map and notify support and sales"
                - "Reassign tracker projects, boards and dashboards to new teams"
                - "Move open queue items and decisions to their new owners"
            - name: Hiring the first dedicated product ops person
              description: |-
                ## Purpose
                For a head of product with six to fifteen PMs, the first product ops hire is a big bet, and the wrong profile, a pure project manager or a tool administrator, can leave the real problems untouched. Writing the role from the charter's owned problems and testing candidates on a realistic exercise gives the hire a fair chance of working.

                ## Milestones
                1. A role description built from the two or three problems the hire will own first.
                2. A work sample exercise, such as redesigning a messy planning process.
                3. An interview panel including at least two PMs.
                4. A 90-day plan ready for the new hire's first day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A product ops hire is made using a role description tied to the charter and a work sample exercise, with a 90-day plan ready."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write the role description from the charter's owned problems"
                - "Design a two-hour work sample on a messy planning process"
                - "Include two product managers on the interview panel"
                - "Draft a 90-day plan for the hire's first day"
            - name: Product ops as a side role for a product manager
              description: |-
                ## Purpose
                Many teams cannot fund a product ops hire, so a senior PM or a product lead picks it up alongside a full roadmap. Agreeing a fixed time allowance, a short list of the highest-value fixes and a protected weekly block keeps the side role from either eating the day job or quietly vanishing.

                ## Milestones
                1. A time allowance agreed with your manager, such as one day a week.
                2. A list of no more than three product ops fixes for the next quarter.
                3. A protected weekly block in the calendar.
                4. A one-page case written on whether the work justifies a dedicated hire.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written time allowance and three-item fix list exist, and at least two fixes are complete by the end of the quarter."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree a weekly time allowance for product ops with your manager"
                - "Pick no more than three fixes from the pain-point findings"
                - "Spend the protected product ops block on the fix list @recurring(weekly:fri)"
                - "Write a one-page case for or against a dedicated hire"
            - name: New product manager onboarding programme
              description: |-
                ## Purpose
                New PMs in a large product org can take three months to learn where documents live, how planning works and who to ask, and every one reinvents the same notes. A standard onboarding programme, with a reading list, people to meet, tools to set up and a first-month deliverable, gets new PMs useful sooner and frees their managers from repeating it.

                ## Milestones
                1. A standard onboarding checklist covering tools, documents, processes and people.
                2. A buddy assigned to each new PM from another team.
                3. A first-month deliverable, such as a written read-out of their area's metrics and open questions.
                4. Feedback from each cohort used to update the programme.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Keep team-specific onboarding with the hiring manager; product ops owns the shared part.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every new PM receives the standard onboarding checklist and a buddy, and each cohort's feedback is reflected in the next version."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the tools, documents, processes and people every new PM needs"
                - "Draft the standard onboarding checklist with two recent hires"
                - "Set up a buddy rota from experienced PMs in other teams"
                - "Collect feedback at day 30 from each new PM"
            - name: Merging product orgs after an acquisition
              description: |-
                ## Purpose
                After an acquisition, two product orgs arrive with different trackers, planning calendars, templates and metric definitions, and the combined roadmap is unreadable. A merger plan that decides early which systems and rituals survive, and on what date, avoids a year of running two operating models in parallel.

                ## Milestones
                1. Both orgs' tools, cadences, templates and metric definitions compared side by side.
                2. A decision recorded for each: keep ours, keep theirs or replace both.
                3. A migration calendar agreed with both product leaders.
                4. One combined planning cycle run on the merged process.

                ## Notes
                Do not change everything at once. Shared planning dates and shared metric definitions usually come first; tool migrations can follow.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A side-by-side comparison and a keep or replace decision exist for each system, and one combined planning cycle has run on the merged process."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Compare both orgs' tools, cadences and templates side by side"
                - "Decide keep ours, keep theirs or replace for each item"
                - "Agree a migration calendar with both product leaders"
                - "Run the first combined planning cycle on the merged process"
            - name: Product rituals across time zones
              description: |-
                ## Purpose
                Once a product org spans more than six hours of time difference, the same people always join at midnight and decisions happen while half the team sleeps. Moving default rituals to written formats, recording the rest and rotating live meeting times shares the cost fairly and keeps distant teams in the loop.

                ## Milestones
                1. Each recurring ritual marked as must be live, can be written or can be recorded.
                2. Written formats in place for status, planning inputs and review pre-reads.
                3. A rotation for live meetings so no region always takes the late slot.
                4. Distant teams surveyed on whether they feel included after a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every recurring product ritual has a written or recorded option, and live meeting times rotate so no region always takes the late slot."
                cadence: rolling
              tasks:
                - "Mark each recurring ritual as live, written or recorded"
                - "Set up written formats for status and planning inputs"
                - "Rotate live meeting times between regions @recurring(monthly:15)"
                - "Survey distant teams on inclusion after one quarter"
            - name: Federated product ops across business units
              description: |-
                ## Purpose
                In an enterprise with several business units, a central product ops team cannot run every unit's process, and letting each unit invent its own makes cross-unit planning impossible. Agreeing a small core that is standard everywhere, such as metric definitions, planning dates and the ownership map, while units keep their local rituals, gives consistency where it matters.

                ## Milestones
                1. A short list of standards that apply to every business unit.
                2. A named product ops contact in each unit.
                3. A monthly community call for unit product ops leads.
                4. An exceptions process for units that need to differ from the core.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written core standard covers every business unit, each unit has a named product ops contact and exceptions follow a recorded process."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft the short list of standards every business unit must follow"
                - "Name a product ops contact in each business unit"
                - "Hold a call for business unit product ops leads @recurring(monthly:18)"
                - "Write an exceptions process for units that need to differ"
            - name: Product ops maturity assessment and three-year plan
              description: |-
                ## Purpose
                Once the basics run, the question becomes what product ops should look like in three years: more self-serve data, a research ops function, programme management or a smaller team that maintains standards. Scoring the current function against a maturity model across tooling, data, process, research ops and enablement, then sequencing the gaps, gives leadership a plan it can fund.

                ## Milestones
                1. A maturity model with four levels across five capabilities, adapted to your organisation.
                2. Current scores agreed with PMs and product leaders.
                3. A three-year sequence of capability investments with rough headcount and cost.
                4. The plan reviewed and approved in the annual planning cycle.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A scored maturity assessment and three-year plan with headcount and cost estimates is approved by product leadership."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Adapt a maturity model with five capabilities and four levels"
                - "Score current maturity with a group of PMs and product leaders"
                - "Sequence the capability gaps over three years with rough costs"
                - "Rescore product ops maturity before annual planning @recurring(yearly)"
            - name: PM capacity and coverage model
              description: |-
                ## Purpose
                Headcount moves between product areas are mostly decided on feel, and coverage gaps show up as burnt-out PMs or orphaned products. A model showing each PM's areas, engineering team size, open commitments and ratio of PMs to engineers gives leaders the facts for headcount conversations, while the allocation choices stay theirs.

                ## Milestones
                1. Each PM listed with owned areas, engineering team size and designer coverage.
                2. Ratios of PMs to engineers and designers calculated by area.
                3. Areas with stretched or missing coverage flagged.
                4. The model refreshed each quarter before headcount planning.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A coverage model showing PM to engineer ratios by area is refreshed each quarter and used in headcount planning."
                cadence: rolling
              tasks:
                - "List each PM's owned areas, engineering team size and designer"
                - "Calculate PM to engineer and designer ratios by area"
                - "Flag stretched or uncovered areas for product leadership"
                - "Refresh the coverage model before headcount planning @recurring(quarterly)"
            - name: Guidelines for AI assistants in product workflows
              description: |-
                ## Purpose
                PMs are already pasting interview notes, specs and customer data into AI assistants, with or without a policy. Writing practical guidelines with security and legal, covering which tools are approved, what data may go in and where AI drafts need a human check, lets teams keep the time savings without leaking customer data.

                ## Milestones
                1. Current AI tool use across the product org surveyed.
                2. Approved tools and data rules agreed with security and legal.
                3. Guidelines published with examples of good and bad uses.
                4. A review date set, since tools and policy change quickly.

                ## Notes
                This covers the product team's own working tools. Building AI features into the product is a separate discipline with its own area.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written guidelines naming approved AI tools, data rules and required human checks are published after sign-off from security and legal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Survey PMs on which AI tools they use and for what"
                - "Agree approved tools and data rules with security and legal"
                - "Publish guidelines with examples of allowed and banned uses"
                - "Set a six-month review date for the guidelines"
            - name: Product ops team structure and career ladder
              description: |-
                ## Purpose
                As product ops grows past two or three people, questions about specialisms, levels and promotion arrive fast, and without a ladder good people leave for clearer roles. Defining the team's specialisms, such as tooling, data, research ops and planning, with levels and expectations for each, gives managers a fair basis for hiring and promotion.

                ## Milestones
                1. Specialisms defined with a one-paragraph scope each.
                2. Three or four levels described by scope, autonomy and impact.
                3. The ladder checked against comparable roles with HR.
                4. Every team member placed on the ladder with a development goal.

                ## Notes
                Start from the **Skills matrix** template. Keep a path for generalists; small teams need people who can cover several specialisms.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A product ops career ladder with specialisms and three or four levels is agreed with HR, and every team member has a placement and development goal."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Define product ops specialisms with a paragraph of scope each"
                - "Describe three or four levels by scope, autonomy and impact"
                - "Check the ladder with HR against comparable roles"
                - "Place each team member on the ladder with a development goal"
---

# Product Operations

Product operations is the machinery behind a growing product organisation, written for product ops leads, heads of product and the product teams they support in larger companies. It starts with foundations (a charter, a pain-point survey, the tool inventory, an ownership map and an operating model), moves to the routines that keep intake, reviews, planning, data and tooling healthy, then skills such as warehouse queries, facilitation and change management, improvement decisions, dated events like annual planning and tool rollouts, situations from a first hire to an acquisition, and finally maturity planning and a career ladder.

What repeats is weekly intake triage, dashboard checks and release calendar updates, monthly review packs, access sweeps, decision log and research panel upkeep and a changelog for product managers, quarterly planning, template reviews and retrospectives, and a yearly maturity rescore and planning season. The Metrics log, Operational checklist, Purchase decision, Risk register, Onboarding 30/60/90 and Skills matrix templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
