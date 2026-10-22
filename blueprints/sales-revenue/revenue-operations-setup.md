---
id: sales-revenue.revenue-operations-setup
name: Revenue Operations Setup
description: "A RevOps charter, one glossary of lifecycle terms, a system of record for every metric, agreed handoffs and a monthly revenue council, so sales, marketing and success work from the same numbers."
category: business
version: 1.0.0
tags: [sales-revenue, revenue-operations-setup, enterprise, manager, team, revops, lifecycle-stages, data-governance]
author: Aurum Technology
starter_structure:
  templates:
    - remediation-plan
    - metrics-log
    - meeting-notes
    - board-meeting
    - operational-checklist
    - onboarding-30-60-90
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Revenue Operations Setup
          description: "Aligning sales, marketing and customer success data, definitions and handoffs under one revenue operations function that owns process, systems and reporting."
          projects:
            - name: Revenue operations charter and scope
              description: |-
                ## Purpose
                When sales ops, marketing ops and customer success ops each grew up separately, nobody owns the gaps between them: the lead nobody accepted, the renewal nobody planned for, the dashboard three teams dispute. A one-page charter naming what revenue operations owns (process, systems, data and reporting across the customer lifecycle) and what it does not stops the function becoming a ticket desk for every spreadsheet request.

                ## Milestones
                1. A one-page charter stating the mission, the teams served and the four areas owned: process, systems, data and reporting.
                2. An explicit out-of-scope list, such as pricing approval, commission payment and campaign execution, each with its real owner.
                3. The charter signed off by the heads of sales, marketing and customer success.
                4. The charter published where all three teams can find it.

                ## Notes
                Keep the out-of-scope list as long as the in-scope list. Most new RevOps teams struggle because they say yes to everything in the first quarter.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page charter with in-scope and out-of-scope lists, approved by the sales, marketing and customer success leaders and published."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a first draft of the RevOps mission in three sentences"
                - "List what RevOps will own across process, systems, data and reporting"
                - "List the requests RevOps will not take on and who owns them instead"
                - "Book a 45-minute sign-off with the sales, marketing and success leaders"
                - "Publish the signed charter on the company wiki"
            - name: Listening tour with sales, marketing and success leaders
              description: |-
                ## Purpose
                Before redesigning anything, spend two weeks hearing where the revenue process hurts for the people inside it. Twelve to fifteen short interviews across sales, marketing, customer success and finance surface the disputed numbers, dropped handoffs and manual workarounds that should shape the first year's roadmap, and they earn the goodwill a new function badly needs.

                ## Milestones
                1. At least three interviews held in each of sales, marketing, customer success and finance.
                2. A single list of pains, each tagged with the team that raised it and how often it came up.
                3. The five most repeated pains ranked by the revenue they affect.
                4. A short readout shared with everyone interviewed.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least twelve interviews across four teams summarised in a ranked list of pains and shared back with the interviewees."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick twelve to fifteen people across sales, marketing, success and finance"
                - "Write five open questions, starting with where numbers get disputed"
                - "Hold each interview in 30 minutes and take notes in the same format"
                - "Ask the agent to group the interview notes into recurring themes"
                - "Send a one-page readout to everyone you interviewed"
            - name: Map of revenue systems, data flows and owners
              description: |-
                ## Purpose
                Most companies past fifty staff run revenue across a CRM, a marketing automation platform, billing, a support desk, a customer success tool and several spreadsheets, with sync rules nobody fully remembers. A single diagram showing every system, which way data flows, which fields sync and who owns each connection is the reference every later fix depends on.

                ## Milestones
                1. Every system that holds lead, account, deal, subscription or customer data listed.
                2. Each data flow drawn with its direction, frequency and the key fields it carries.
                3. A named business owner and technical owner against every system and connection.
                4. Known breaks and manual uploads marked clearly on the diagram.

                ## Notes
                Draw swimlanes by team rather than by tool; it makes ownership gaps obvious at a glance.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A systems diagram listing every revenue system and data flow, each with a named owner, reviewed by IT and the three revenue teams."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every tool that stores lead, account, deal or customer records"
                - "Draw each connection with its direction and sync frequency"
                - "Name a business owner and a technical owner for every system"
                - "Mark every manual export and upload on the diagram"
                - "Refresh the systems map and its named owners @recurring(yearly)"
            - name: Cross-team revenue data audit
              description: |-
                ## Purpose
                Disputes about the number are usually disputes about the data underneath it: accounts duplicated across tools, deals with no source, customers in billing who never appear in the CRM. Sampling records across systems and scoring completeness and agreement gives a factual baseline, so the fix list is ranked by revenue at risk rather than by who complains loudest.

                ## Milestones
                1. A sample of at least 200 accounts traced across the CRM, billing and the success platform.
                2. Completeness and match rates recorded for ten key fields such as owner, segment, source and contract value.
                3. Every gap tagged with the system and team that should fix it.
                4. A remediation list ranked by the annual revenue each problem touches.

                ## Notes
                Start from the **Remediation plan** template. Audit agreement between systems, not just blanks: a filled field that disagrees with billing does more harm than an empty one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written audit of at least 200 accounts across three systems, with match rates for ten fields and a ranked remediation list."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull a random sample of 200 accounts from the CRM"
                - "Look up each sampled account in billing and the success platform"
                - "Score ten key fields for completeness and agreement across systems"
                - "Rank the gaps by the annual revenue on the affected accounts"
            - name: Shared glossary of revenue lifecycle terms
              description: |-
                ## Purpose
                Marketing counts a lead when a form is filled, sales counts one when a rep accepts it, and finance counts a customer only when the first invoice is paid. A shared glossary with one definition, one owner and one system field for each term (lead, MQL, SQL, opportunity, new customer, expansion, churn) ends the meeting where three slides show three different numbers.

                ## Milestones
                1. Fifteen to twenty-five core terms written with a one-sentence definition each.
                2. Every term tied to the exact field, value or event that marks it in a system.
                3. A named owner for each definition who approves any future change.
                4. The glossary signed off by the sales, marketing, success and finance leaders.

                ## Notes
                Define churn and expansion with finance in the room, because their version goes to the board.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of at least fifteen revenue terms, each with a definition, a system field and an owner, signed off by four leaders."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every lifecycle term used on current dashboards and board slides"
                - "Collect the definitions each team uses today and set them side by side"
                - "Draft one definition per term and the field that records it"
                - "Hold a 90-minute session with the four leaders to agree each wording"
                - "Publish the glossary and link it from every revenue dashboard"
            - name: Customer lifecycle stage model from lead to renewal
              description: |-
                ## Purpose
                Drawn as a bowtie, with acquisition on the left and retention and expansion on the right, a lifecycle model shows every stage a customer passes through and who owns them at each one. Agreeing the stages, the entry rule for each and the owning team turns handoffs from favours into commitments and gives every conversion rate a clear numerator and denominator.

                ## Milestones
                1. A diagram of eight to twelve stages from first touch through renewal and expansion.
                2. An entry rule for every stage that a system can apply without judgement.
                3. One owning team named for every stage.
                4. The model approved by all three revenue leaders.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved lifecycle diagram with eight to twelve stages, each with a system-checkable entry rule and an owning team."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Sketch the stages each team uses today on one page"
                - "Agree where marketing ownership ends and sales ownership begins"
                - "Agree where sales ownership ends and customer success begins"
                - "Write a system-checkable entry rule for every stage"
                - "Review the stage model against how customers really buy @recurring(yearly)"
            - name: System of record for each revenue metric
              description: |-
                ## Purpose
                Annual recurring revenue might live in billing, pipeline in the CRM and customer health in a success tool, yet dashboards often pull the same metric from two places and disagree. Naming one system of record per metric, and refusing to report it from anywhere else, is the quickest single step towards numbers the executive team stops arguing about.

                ## Milestones
                1. A list of the twenty metrics that appear on leadership dashboards.
                2. One system of record chosen for each metric, with the field or calculation used.
                3. Every dashboard pulling a metric from a second source identified and repointed.
                4. The list published alongside the glossary.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every leadership metric has one recorded system of record, and no leadership dashboard reports a metric from any other source."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every metric shown on the executive and board dashboards"
                - "Choose one system of record and calculation for each metric"
                - "Find dashboards that pull a metric from a second source"
                - "Repoint or retire each conflicting dashboard tile"
            - name: Deciding where revenue operations reports
              description: |-
                ## Purpose
                Reporting to the head of sales often gets RevOps seen by marketing and success as sales ops with a new name, while a team under finance can drift away from the field. Comparing the realistic options (a chief revenue officer, chief operating officer or chief financial officer) against neutrality, data access and speed of decisions settles the question before the first hire.

                ## Milestones
                1. Three reporting options written up with their benefits and risks.
                2. Each option scored against neutrality, data access, budget control and speed.
                3. A recommendation agreed with the chief executive.
                4. The decision and its review date recorded in the charter.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the RevOps reporting line, with scored options and a review date, approved by the chief executive."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one paragraph each on reporting to sales, operations and finance"
                - "Score each option on neutrality, data access, budget and speed"
                - "Ask two peers at similar companies where their RevOps reports"
                - "Bring the scored options to the chief executive for a decision"
            - name: Baseline revenue metrics pack
              description: |-
                ## Purpose
                Without a dated baseline, nobody can say whether the new definitions and handoffs made anything better. Capturing a dozen numbers on the day the work starts (new bookings, net and gross revenue retention, win rate, sales cycle length, stage conversion and handoff times) gives the function a before picture to measure itself against at six and twelve months.

                ## Milestones
                1. Twelve baseline metrics calculated using the agreed glossary.
                2. Each metric recorded with its date, source system and method.
                3. Known data quality caveats written beside each number.
                4. The baseline shared with the revenue leaders and stored with the charter.

                ## Notes
                Start from the **Metrics log** template. A baseline with honest caveats is more useful than a polished one that hides them.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated metrics log holding twelve baseline revenue metrics, each with source, method and caveats, shared with the revenue leaders."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the twelve metrics that matter most to the three revenue leaders"
                - "Calculate each one using the glossary definitions"
                - "Write the source system and any caveat beside every number"
                - "Diary a repeat of the baseline at six and twelve months"
            - name: RevOps request intake and prioritisation rules
              description: |-
                ## Purpose
                Within a month of launch, RevOps receives requests by chat, email and corridor conversation, and the loudest requester wins. One intake form, a scoring rule based on revenue impact and effort, and published response times for each request type make the queue visible and the trade-offs explainable.

                ## Milestones
                1. One intake form capturing request type, business impact, deadline and requester.
                2. A scoring rule that ranks requests by revenue impact, people affected and effort.
                3. Published response times for fixes, reports and larger projects.
                4. Every request arriving by chat or email redirected to the form for a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single intake form and written scoring rule in use, with every request over one month logged through it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build an intake form with type, impact, deadline and requester"
                - "Write a scoring rule that weighs revenue impact against effort"
                - "Publish response times for fixes, reports and projects"
                - "Reply to chat requests with a link to the form for the first month"
            - name: Weekly RevOps request triage
              description: |-
                ## Purpose
                An intake queue without a weekly decision becomes a backlog nobody trusts. A 30-minute Monday triage that scores new requests, closes stale ones and tells each requester what happens next keeps the queue honest and protects time for the roadmap work that matters more than any single ticket.

                ## Milestones
                1. A fixed 30-minute triage slot every Monday.
                2. Every new request scored and given an owner or a polite no within a week.
                3. Requests older than 60 days closed or re-confirmed.
                4. A share of team time, such as 30 percent, ring-fenced for roadmap work and tracked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks every new request is scored and answered within five working days."
                cadence: rolling
              tasks:
                - "Score new requests and reply to each requester @recurring(weekly:mon)"
                - "Close or re-confirm every request older than 60 days"
                - "Agree the share of team time kept for roadmap work"
                - "Report queue size and age to the revenue council each month"
            - name: Monthly revenue council with sales, marketing and success
              description: |-
                ## Purpose
                Three leaders reviewing their own dashboards separately will each improve their own stage of the funnel at the expense of the others. A monthly hour where the heads of sales, marketing and customer success look at one shared pack (pipeline creation, conversion, retention and handoff health) and agree three cross-team actions turns RevOps from a reporting service into the place decisions get made.

                ## Milestones
                1. A standing monthly hour with all three revenue leaders and finance.
                2. One shared pack built from the systems of record, sent two days ahead.
                3. Three cross-team actions agreed and owned at each meeting.
                4. Last month's actions reviewed first, every time.

                ## Notes
                Start from the **Meeting notes** template. Leave team-specific slides out; anything worth discussing belongs in the shared pack.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly councils held, each with a shared pack sent two days ahead and three owned actions recorded."
                cadence: rolling
              tasks:
                - "Book a standing monthly hour with the three revenue leaders and finance"
                - "Send the shared revenue pack two days before the council @recurring(monthly:4)"
                - "Record three cross-team actions with owners at every meeting"
                - "Open each council with a review of last month's actions"
            - name: Monthly bookings and ARR reconciliation with finance
              description: |-
                ## Purpose
                If the CRM says the quarter closed at one figure and the finance ledger says another, the board will trust finance and the revenue team loses credibility. Matching closed deals to signed contracts and invoices each month, and explaining every difference, keeps sales and finance reporting the same bookings and recurring revenue.

                ## Milestones
                1. A monthly list of closed-won deals matched to contracts and first invoices.
                2. Every difference above an agreed threshold explained in a sentence.
                3. Corrections made in whichever system was wrong.
                4. Three consecutive months with no unexplained difference.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly reconciliations where every bookings and ARR difference above the agreed threshold is explained and corrected."
                cadence: rolling
              tasks:
                - "Agree a difference threshold with the finance controller"
                - "Match last month's closed-won deals to contracts and invoices @recurring(monthly:7)"
                - "Write a one-line explanation for each difference above threshold"
                - "Correct the source record in whichever system was wrong"
            - name: Handoff service levels between revenue teams
              description: |-
                ## Purpose
                Leads go cold while marketing and sales argue about quality, and new customers wait a fortnight for a kickoff because the success team never saw the contract. Written service levels for each handoff (how fast it is picked up, what it must contain, what happens on rejection) and a monthly report on hits and misses make the gaps between teams measurable.

                ## Milestones
                1. Each handoff in the lifecycle model given a time limit and a minimum content list.
                2. A rejection path agreed for each handoff, with reasons captured.
                3. A monthly report showing the share of handoffs met on time.
                4. Any handoff below its target discussed at the revenue council.

                ## Notes
                Inbound lead speed and routing rules sit with the sales team; this project covers the agreements between teams, not who gets which lead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each lifecycle handoff has a written service level, and a monthly report of on-time percentages has run for three months."
                cadence: rolling
              tasks:
                - "List every handoff in the lifecycle model and its current owner"
                - "Agree a time limit and minimum content for each handoff"
                - "Publish the on-time percentage for each handoff @recurring(monthly:12)"
                - "Raise any handoff under target at the next revenue council"
            - name: Monthly customer count match across systems
              description: |-
                ## Purpose
                The simplest test of revenue data health is whether the CRM, billing and the success platform agree on how many active customers you have. Running the three counts on the same day each month, and chasing every account that appears in one system but not another, catches broken syncs and missed cancellations before they reach a board deck.

                ## Milestones
                1. A saved report of active customers in each of the three systems.
                2. A matched list showing accounts present in one system but missing from another.
                3. Every mismatch assigned to an owner and fixed or explained.
                4. The mismatch count falling for three months running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly counts where the active customer totals in CRM, billing and the success platform match within one percent."
                cadence: rolling
              tasks:
                - "Save an active customer report in each of the three systems"
                - "Run and compare the three active customer counts @recurring(monthly:18)"
                - "Assign every mismatched account to the owner of the faulty system"
                - "Log the mismatch count each month to show the trend"
            - name: Quarterly revenue metrics pack for leadership
              description: |-
                ## Purpose
                Executives need one quarterly view of the whole revenue engine, not three team updates stitched together the night before. A standard pack with the same twelve metrics, the same definitions and a short written commentary each quarter lets leadership see trends and makes the next quarter's priorities obvious.

                ## Milestones
                1. A fixed layout of twelve metrics drawn from the systems of record.
                2. A half-page commentary on what moved and why.
                3. The pack delivered within ten working days of quarter end.
                4. Four consecutive quarters produced in the same format.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The quarterly revenue pack is delivered within ten working days of quarter end, in the same format, for four consecutive quarters."
                cadence: cyclic
              tasks:
                - "Fix the twelve metrics and the layout for the quarterly pack"
                - "Build the quarterly pack after each quarter closes @recurring(quarterly)"
                - "Ask the agent to draft the commentary from the metric changes"
                - "Send the pack to the executive team and file it with past quarters"
            - name: Change control for revenue definitions
              description: |-
                ## Purpose
                Glossaries decay when someone quietly edits a stage rule to flatter a quarter, or a new product needs a term nobody defined. A change log, an approval rule for every definition and a quarterly review keep the glossary trustworthy and let anyone see when a metric's meaning changed and why.

                ## Milestones
                1. A change log recording each edit, its reason, approver and effective date.
                2. A rule that no definition changes without its named owner's approval.
                3. Historical reports annotated where a definition change breaks the trend.
                4. A quarterly glossary review held with the definition owners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every glossary change in the last two quarters appears in the change log with an approver and an effective date."
                cadence: rolling
              tasks:
                - "Add a change log page to the revenue glossary"
                - "Write the approval rule for changing any definition"
                - "Review the glossary with every definition owner @recurring(quarterly)"
                - "Annotate trend charts wherever a definition changed"
            - name: Quarterly RevOps roadmap planning
              description: |-
                ## Purpose
                Answering tickets alone never fixes the structural problems the listening tour and audit found. Setting three to five roadmap outcomes each quarter, agreed with the revenue leaders and sized against team capacity, keeps the bigger work moving and gives the team a clear reason to decline lower-value requests.

                ## Milestones
                1. Three to five quarterly outcomes, each tied to a pain from the listening tour or audit.
                2. Each outcome sized in weeks and checked against team capacity.
                3. The roadmap agreed with the three revenue leaders.
                4. Last quarter's outcomes marked delivered, slipped or dropped, with a reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four consecutive quarterly roadmaps with three to five outcomes each, agreed by the revenue leaders and scored at quarter end."
                cadence: cyclic
              tasks:
                - "List candidate outcomes from the audit, listening tour and request queue"
                - "Size each outcome in weeks against team capacity"
                - "Agree next quarter's three to five outcomes with the revenue leaders @recurring(quarterly)"
                - "Score last quarter's outcomes as delivered, slipped or dropped"
            - name: Monthly churn and contraction reason review
              description: |-
                ## Purpose
                Churn reasons typed into a free-text field by different success managers cannot be added up, so the same preventable cause can cost a dozen customers before anyone notices. A fixed reason list, a monthly review of every cancellation and downgrade, and a route for patterns back to product, sales and marketing turn lost revenue into information.

                ## Milestones
                1. A list of eight to twelve churn and contraction causes, agreed with customer success.
                2. Every cancellation and downgrade tagged with a primary reason.
                3. A monthly summary of lost revenue by reason.
                4. The top reason each quarter sent to the team that can act on it.

                ## Notes
                Prospects who never bought belong in lost deal analysis; this project covers revenue lost from existing customers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every churned or downgraded account in three consecutive months carries a reason from the agreed list, summarised by lost revenue."
                cadence: rolling
              tasks:
                - "Agree eight to twelve churn and contraction reasons with customer success"
                - "Make the reason a required field when a cancellation is recorded"
                - "Summarise last month's lost revenue by reason @recurring(monthly:22)"
                - "Send the top reason to the owning team with the accounts affected"
            - name: Annual go-to-market planning calendar
              description: |-
                ## Purpose
                Annual planning goes badly when targets, territories, headcount, pricing and system changes are decided in the wrong order in the last fortnight of the year. A dated calendar that sequences the inputs (last year's results, market sizing, capacity, targets, territories, compensation, system changes) gives every team a deadline and stops RevOps rebuilding reports on the first working day of the new year.

                ## Milestones
                1. A planning calendar starting at least twelve weeks before the new year.
                2. Each input given an owner and a due date in the right sequence.
                3. A freeze date for system changes before the new year starts.
                4. A short review after planning of what slipped and why.

                ## Notes
                RevOps runs the calendar and the data; the targets, territories and pay plans themselves are decided by their owners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A dated planning calendar with owners for every input is published twelve weeks before year end, and the system freeze date is met."
                cadence: cyclic
              tasks:
                - "List every planning input and the team that owns it"
                - "Order the inputs so each one feeds the next"
                - "Publish the planning calendar twelve weeks before year end @recurring(yearly)"
                - "Hold a 30-minute review of what slipped once planning closes"
            - name: Recurring revenue metrics fluency
              description: |-
                ## Purpose
                Leaders will ask RevOps why net revenue retention fell or what the CAC payback period is, and a wrong answer in board preparation is hard to recover from. Learning how ARR, MRR, gross and net retention, logo churn, CAC payback and sales efficiency are calculated, and where companies define them differently, lets you explain the numbers rather than just report them.

                ## Milestones
                1. A one-page cheat sheet with the formula and a worked example for ten metrics.
                2. Your company's figures recalculated by hand for two of them.
                3. Known definitional differences noted, such as whether retention includes price rises.
                4. The cheat sheet checked by someone in finance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page sheet of ten recurring revenue formulas with worked examples, checked by a finance colleague."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the ten recurring revenue metrics leadership asks about most"
                - "Write the formula and a worked example for each"
                - "Recalculate net revenue retention by hand from billing data"
                - "Ask a finance colleague to check the sheet for errors"
            - name: Funnel and bowtie conversion maths
              description: |-
                ## Purpose
                Conversion rates mislead when the numerator and denominator come from different time windows or cohorts, which is why one team sees 20 percent and another sees 35. Learning cohort versus period conversion, time in stage and how to treat records that skip stages lets you build funnel reports that hold up under questioning.

                ## Milestones
                1. The difference between cohort and period conversion explained in your own words with an example.
                2. Time in stage calculated for one lifecycle stage.
                3. A rule written for counting records that skip or repeat stages.
                4. One existing funnel report rebuilt using the correct method.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One funnel report rebuilt on a cohort basis, with a written rule for skipped stages, reviewed at the revenue council."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a worked example of cohort versus period conversion"
                - "Calculate time in stage for opportunities created last quarter"
                - "Write a rule for records that skip or repeat a stage"
                - "Rebuild one funnel report using cohort conversion"
            - name: Revenue data modelling basics
              description: |-
                ## Purpose
                Most reporting mistakes in revenue come from mixing grains: counting deals when you meant accounts, or summing contract value across overlapping renewals. Learning how accounts, contacts, opportunities, subscriptions and invoices relate, and what one row means in each table, makes every later report and warehouse model cheaper to build and easier to trust.

                ## Milestones
                1. An entity diagram of accounts, contacts, opportunities, subscriptions and invoices with their links.
                2. The grain of each table written in one sentence.
                3. Three common double-counting traps written up with examples from your own data.
                4. The diagram reviewed with whoever runs the data warehouse or CRM.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An entity diagram with the grain of each revenue table stated and three double-counting traps documented from real data."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Draw how accounts, contacts, opportunities, subscriptions and invoices connect"
                - "Write what one row means in each table"
                - "Find three reports that double count and note why"
                - "Walk through the diagram with the data or CRM owner"
            - name: SQL for revenue reporting
              description: |-
                ## Purpose
                Once revenue data sits in a warehouse, the fastest RevOps analysts answer ad hoc questions themselves instead of waiting in the data team's queue. A structured eight-week programme of joins, grouping, window functions and date handling, practised on your own pipeline and billing tables, covers most of what revenue questions need.

                ## Milestones
                1. A course or tutorial chosen and a weekly study slot in the calendar.
                2. Joins, grouping and date functions practised on real pipeline data.
                3. Window functions used to calculate running ARR or stage durations.
                4. Three real requests from the queue answered with your own queries.

                ## Notes
                Practise with a read-only warehouse role, never with write access to production systems.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real RevOps requests answered with your own SQL queries against the warehouse and checked by a data colleague."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose an SQL course and block two hours a week to study"
                - "Ask the data team for read-only access to pipeline and billing tables"
                - "Write a query that joins opportunities to accounts and invoices"
                - "Answer three queue requests with your own queries"
            - name: Revenue recognition basics for operations staff
              description: |-
                ## Purpose
                Bookings, billings and recognised revenue are three different numbers, and RevOps staff who treat them as one create disagreements with finance that take weeks to unwind. Learning the basic accounting ideas behind contract terms, multi-year deals, ramps and refunds lets you design CRM fields and reports that finance can actually use.

                ## Milestones
                1. Bookings, billings and recognised revenue explained in a short note using one example deal.
                2. How your finance team treats multi-year, ramped and prepaid deals written down.
                3. Two CRM fields or reports identified that conflict with finance treatment.
                4. The note checked by the finance controller.

                ## Notes
                This is for understanding, not accounting judgement. Revenue recognition decisions stay with finance and your auditors.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note explaining bookings, billings and recognised revenue for one real deal, checked by the finance controller."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the finance controller for a 30-minute walkthrough of one deal"
                - "Write how bookings, billings and recognised revenue differ for that deal"
                - "Note how finance treats multi-year, ramped and prepaid contracts"
                - "List CRM fields or reports that conflict with that treatment"
            - name: Change management for revenue process rollouts
              description: |-
                ## Purpose
                Rolled out by email, a new stage model or handoff rule is ignored within a month, because reps, marketers and success managers were not asked and cannot see what is in it for them. Studying a simple change approach (case for change, early involvement, training, reinforcement and measurement) gives every later rollout in this area a better chance of sticking.

                ## Milestones
                1. One change management model read and summarised on a page.
                2. A rollout checklist adapted for revenue process changes.
                3. The checklist used on one real change.
                4. Adoption of that change measured four weeks after launch.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rollout checklist adapted from a change model, used on one real change, with adoption measured four weeks later."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short guide to one change management model"
                - "Write a rollout checklist covering case, involvement, training and follow-up"
                - "Use the checklist on the next revenue process change"
                - "Measure adoption four weeks after the change goes live"
            - name: Lead acceptance and recycle agreement with marketing
              description: |-
                ## Purpose
                Where sales can ignore a marketing qualified lead without saying why, marketing keeps sending the same kind and both teams blame each other. A written agreement on what sales must do with every handed-over lead (accept, reject with a reason, or recycle to nurture) and a joint look at rejection reasons turns an argument about quality into data both sides can act on.

                ## Milestones
                1. Accept, reject and recycle defined as the only three outcomes for a handed-over lead.
                2. A fixed list of six to ten rejection reasons agreed by both leaders.
                3. A recycle rule that returns leads to nurture after an agreed number of untouched days.
                4. Rejection reasons reviewed together after the first two months.

                ## Notes
                Leave routing rules and response speed to the inbound team. This agreement covers what counts as accepted and what happens to the rest.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed accept, reject and recycle agreement with a fixed reason list, and two months of rejection reasons reviewed jointly."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull last quarter's handed-over leads and what happened to each"
                - "Draft six to ten rejection reasons with marketing and sales"
                - "Agree the number of untouched days before a lead recycles"
                - "Review the first two months of rejection reasons together"
            - name: Sales to customer success handoff package
              description: |-
                ## Purpose
                New customers repeat their goals, stakeholders and promises to a success manager who was never told what the seller agreed, and the first impression after signature is disorganisation. A standard handoff package (why they bought, success measures, stakeholders, commitments made, contract terms) completed before kickoff protects the first ninety days and, later, the renewal.

                ## Milestones
                1. A handoff template with eight to ten required items agreed by sales and success.
                2. The template built into the system at the closed-won step.
                3. A short handoff call held for every deal above an agreed size.
                4. Success managers rating handoff quality monthly, with the score improving.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every closed-won deal for two months has a completed handoff package before kickoff, with success manager ratings recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask five success managers what they wish they had known at kickoff"
                - "Draft a handoff template with eight to ten required items"
                - "Make the template mandatory at the closed-won step"
                - "Collect a one-to-five handoff rating from each success manager"
            - name: Choosing an attribution model with marketing and finance
              description: |-
                ## Purpose
                Marketing claims most of the pipeline, sales claims the rest, and the totals add up to 160 percent. Agreeing one attribution model for budget decisions, whether first touch, last touch, a weighted multi-touch model or a simple sourced versus influenced split, with its limits written down, lets the company argue about strategy rather than credit.

                ## Milestones
                1. Three candidate models compared using last year's closed deals.
                2. The data each model needs checked against what your systems capture.
                3. One model chosen for budget decisions, with known blind spots written down.
                4. The model's results added to the monthly revenue council pack.

                ## Notes
                Pick the simplest model your data can support. A sophisticated model built on missing touch data is false precision.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One attribution model chosen and recorded with its limits, approved by marketing, sales and finance, and reported monthly."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Run last year's closed deals through three attribution models"
                - "Check which touch data your systems capture reliably"
                - "Agree one model and its limits with marketing, sales and finance"
                - "Review the attribution model against any new channels @recurring(yearly)"
            - name: Customer identity key across CRM, billing and support
              description: |-
                ## Purpose
                Matching names by hand is the hidden step in every cross-system report when the CRM account, the billing customer and the support organisation share no identifier. Choosing one customer key, deciding which system creates it and backfilling it everywhere makes retention, health and expansion reporting possible without a spreadsheet in the middle.

                ## Milestones
                1. One customer identifier chosen and the system that creates it named.
                2. The identifier added as a field in every revenue system.
                3. Existing records backfilled, with at least 98 percent matched.
                4. New records receiving the identifier automatically.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least 98 percent of active customers carry the same identifier in CRM, billing and support, with new records keyed automatically."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose which system creates the customer identifier"
                - "Add the identifier field to each revenue system"
                - "Backfill existing customers and list the unmatched ones"
                - "Test that a new customer receives the key in every system"
            - name: One revenue dashboard of record
              description: |-
                ## Purpose
                Companies with a few hundred staff often have dozens of revenue dashboards, many built by people who have since left and quietly wrong. Building one dashboard of record, fed only from the systems of record and using only glossary definitions, gives executives a default answer and lets you retire the rest with confidence.

                ## Milestones
                1. The ten to twelve questions leadership asks most each week written down.
                2. One dashboard answering them, built only from systems of record.
                3. Every tile linked to its glossary definition.
                4. The dashboard named as the default in the revenue council and executive meetings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single revenue dashboard, with every tile linked to a glossary definition, is the one used in the revenue council and executive meetings."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write down the ten questions leaders ask most each week"
                - "Build a tile for each question from its system of record"
                - "Link every tile to its glossary definition"
                - "Ask the executive team to use only this dashboard in meetings"
            - name: Warehouse or in-app reporting decision
              description: |-
                ## Purpose
                Reports inside the CRM are quick to build but cannot easily join billing, product usage and support data, while a data warehouse can but needs people to maintain it. Comparing the two against your real questions, data volumes and team skills avoids both a stalled warehouse project and years of exporting spreadsheets.

                ## Milestones
                1. Twenty current revenue questions tagged by the systems each one needs.
                2. A cost and skills estimate for staying in-app and for a warehouse approach.
                3. A recommendation agreed with the data or engineering lead.
                4. The decision recorded with the trigger that would make you revisit it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded reporting architecture decision with costs, skills needed and a revisit trigger, agreed with the data lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List twenty revenue questions and the systems each one needs"
                - "Estimate cost and skills for in-app and warehouse reporting"
                - "Discuss the options with the data or engineering lead"
                - "Record the decision and the trigger for revisiting it"
            - name: Deciding who owns renewals
              description: |-
                ## Purpose
                Renewals fall between account executives who want new deals and success managers who were never given a number, and the result is late renewal conversations and avoidable churn. Deciding who owns renewals, who owns expansion and how the two hand over, by segment if needed, closes one of the biggest gaps in most lifecycle models.

                ## Milestones
                1. Current renewal ownership and outcomes documented by segment.
                2. Two or three ownership models compared on retention, cost and customer experience.
                3. One model agreed by the sales and success leaders, with finance sign-off.
                4. Renewal ownership reflected in the lifecycle model and system fields.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded renewal ownership model by segment, approved by sales, success and finance, and reflected in the lifecycle model."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map who handles renewals today in each segment"
                - "Compare renewal rates under each current owner"
                - "Compare two or three ownership models with the leaders"
                - "Update the lifecycle model with the agreed renewal owner"
            - name: Retiring shadow revenue spreadsheets
              description: |-
                ## Purpose
                Every team keeps a private spreadsheet it trusts more than the systems: a marketing pipeline tracker, a success renewal list, a sales manager's own deal sheet. Finding them, learning what each does that the systems cannot, and moving that job into the systems of record removes the second version of the truth.

                ## Milestones
                1. An inventory of shadow spreadsheets with owner, purpose and update frequency.
                2. The missing system capability behind each one written down.
                3. Each sheet either replaced by a system report or formally kept with an owner.
                4. No retired sheet still being updated after one quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every known shadow revenue spreadsheet is replaced by a system report or formally owned, and none of the retired ones is updated after a quarter."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask each revenue leader which spreadsheets their team relies on"
                - "Write down what each sheet does that the systems cannot"
                - "Replace each sheet with a system report or name an owner"
                - "Check each team for new shadow spreadsheets @recurring(quarterly)"
            - name: Customer health score inputs for the success team
              description: |-
                ## Purpose
                Health scores built only on a success manager's instinct miss the accounts that quietly stop logging in. Agreeing four to six data inputs (product usage, support tickets, payment status, stakeholder changes, survey scores) and making RevOps responsible for the feeds gives success managers an early warning they can rely on.

                ## Milestones
                1. Four to six health inputs agreed with customer success, each with a data source.
                2. Each input feeding the success platform automatically.
                3. The score tested against last year's churned accounts.
                4. A monthly check that every feed has updated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A health score built from four to six automated inputs, tested against last year's churned accounts, with feeds checked monthly."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree four to six health inputs and their sources with success"
                - "Connect each input to the success platform"
                - "Test the score against accounts that churned last year"
                - "Check every health score feed updated last month @recurring(monthly:15)"
            - name: Launching revenue operations to the company
              description: |-
                ## Purpose
                A new function announced only in an all-staff email gets ignored or treated with suspicion. A planned launch, with a short talk to each revenue team, the charter, the intake route and three quick wins delivered in the first ninety days, sets expectations and shows the function is there to remove friction rather than add reporting.

                ## Milestones
                1. A 15-minute launch talk given to sales, marketing and customer success separately.
                2. The charter, intake form and glossary linked from one launch page.
                3. Three quick wins from the listening tour delivered within ninety days.
                4. A ninety-day review shared with the revenue leaders.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Launch talks given to all three teams and three quick wins delivered, with a ninety-day review shared, within ninety days of launch."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Pick three quick wins from the listening tour you can deliver in ninety days"
                - "Write a 15-minute launch talk for each revenue team"
                - "Build one launch page linking the charter, intake form and glossary"
                - "Share a ninety-day review with the revenue leaders"
            - name: Board meeting revenue metrics section
              description: |-
                ## Purpose
                Board members compare your retention, efficiency and pipeline numbers quarter to quarter and against their other companies, so changing definitions or formats between meetings invites hard questions. Preparing the revenue section from the systems of record, with consistent definitions and figures reconciled with finance, makes RevOps the team the chief executive relies on before every board meeting.

                ## Milestones
                1. A fixed set of board revenue metrics agreed with the chief executive and finance.
                2. The section prepared from systems of record and reconciled with finance.
                3. Any definition change since the last meeting called out on the slide.
                4. The section delivered at least five working days before the meeting.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The board revenue section is reconciled with finance and delivered five working days before each of four consecutive board meetings."
                cadence: cyclic
              tasks:
                - "Agree the fixed board revenue metrics with the chief executive and finance"
                - "Prepare and reconcile the board revenue section @recurring(quarterly)"
                - "Flag any definition change since the last board meeting"
                - "Send the section five working days before the meeting"
            - name: Lifecycle stage model go-live
              description: |-
                ## Purpose
                Switching every team to new lifecycle stages on the same day touches forms, automations, reports, scoring and training at once, and a half-finished cutover leaves records in limbo. Treating the go-live as an event with a checklist, a change freeze, a rollback plan and a briefing for every frontline team keeps the switch to one weekend rather than one quarter.

                ## Milestones
                1. A cutover checklist covering fields, automations, reports and historical records.
                2. A change freeze agreed for the week before and after go-live, with a rollback plan.
                3. Every frontline team briefed in 20 minutes on what changes for them.
                4. All active records mapped to a new stage within one week of go-live.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All active records sit in a new lifecycle stage within one week of go-live, with every frontline team briefed beforehand."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Write the cutover checklist for fields, automations and reports"
                - "Agree a change freeze and rollback plan around the go-live date"
                - "Brief each frontline team on what changes for them"
                - "Map every active record to a new stage and fix the leftovers"
            - name: New fiscal year revenue systems rollover
              description: |-
                ## Purpose
                On the first day of a new fiscal year, targets, territories, product codes and reporting periods all change, and any one left behind breaks a dashboard. Running a standard rollover checklist in the last fortnight of the year, with owners for each item, means the new year starts with every report pointing at the right periods and targets.

                ## Milestones
                1. A rollover checklist with an owner for each item.
                2. New targets, periods and product codes loaded and tested before year end.
                3. Last year's reports archived with their final figures.
                4. Every leadership dashboard checked on the first working day.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every rollover checklist item is done before year end, and all leadership dashboards show the new year correctly on its first working day."
                cadence: cyclic
              tasks:
                - "Build the rollover checklist with an owner for every item"
                - "Load new targets, periods and product codes into a test view"
                - "Archive last year's final reports with their figures"
                - "Run the fiscal year rollover checklist @recurring(yearly)"
            - name: Cross-team readiness for a pricing change
              description: |-
                ## Purpose
                A new price list or packaging change lands in billing, quoting, the CRM, marketing pages and success playbooks at once, and the team that hears last gives customers the wrong answer. A readiness plan with a single go-live date, a check of every system and a briefing for each team lets the change reach customers without a week of confused invoices.

                ## Milestones
                1. Every system and document touched by the change listed with an owner.
                2. System changes tested end to end on one sample deal before launch.
                3. Sales, marketing, success and support briefed before the go-live date.
                4. A two-week watch list of invoice and quote errors after launch.

                ## Notes
                Pricing decisions and discount rules belong to their owners; RevOps makes sure every system and team is ready on the same day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pricing change goes live on one date with every listed system updated, a sample deal tested end to end and each team briefed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every system and document the pricing change touches"
                - "Test one sample deal from quote to invoice before launch"
                - "Brief sales, marketing, success and support before go-live"
                - "Track quote and invoice errors for two weeks after launch"
            - name: ARR bridge for a fundraise or audit
              description: |-
                ## Purpose
                Investors and auditors ask for an ARR bridge: opening recurring revenue, plus new, plus expansion, minus contraction, minus churn, equals closing, by month or quarter. Building it from reconciled billing and CRM data, with every customer movement traceable, answers diligence questions in hours rather than weeks.

                ## Milestones
                1. A monthly ARR bridge covering at least the last eight quarters.
                2. Every movement traceable to a named customer and contract.
                3. Each period's closing ARR reconciled to finance's figure.
                4. A written note on the definitions used, matching the glossary.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An eight-quarter ARR bridge reconciled to finance, with every movement traceable to a customer, ready for diligence."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Pull customer-level recurring revenue by month from billing"
                - "Classify each monthly change as new, expansion, contraction or churn"
                - "Reconcile each period's closing ARR with finance"
                - "Write a definitions note that matches the glossary"
            - name: Hiring the first revenue operations analyst
              description: |-
                ## Purpose
                The first RevOps hire shapes the function for years, and a common mistake is hiring a CRM administrator when the need is an analyst who can reconcile data and run meetings, or the reverse. Writing the role from the charter and the first-year roadmap, then planning their first ninety days before they arrive, gets the right person productive quickly.

                ## Milestones
                1. A role profile written from the charter and roadmap, stating an analyst or systems focus.
                2. A practical exercise on anonymised real data for final candidates.
                3. An offer accepted.
                4. A ninety-day plan ready on the hire's first day.

                ## Notes
                Start from the **Onboarding 30/60/90** template for the new hire's first ninety days.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first RevOps analyst hired against a written profile, with a ninety-day plan ready on their start date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Decide whether the first hire is analyst-led or systems-led"
                - "Write a role profile from the charter and roadmap"
                - "Build a two-hour exercise on anonymised revenue data"
                - "Write the new hire's ninety-day plan before they start"
            - name: Revenue operations as a sales manager's side duty
              description: |-
                ## Purpose
                In many growing companies a sales manager inherits RevOps as an extra job, with four hours a week and no team. Picking the three activities that matter most at that size (the shared glossary, the monthly finance reconciliation and one handoff agreement) and parking the rest keeps the essentials in place until a dedicated hire is justified.

                ## Milestones
                1. A fixed four-hour weekly block protected in the calendar.
                2. The three priority activities chosen and everything else parked in writing.
                3. The monthly reconciliation running for three months.
                4. A written case for a dedicated hire, with the trigger point named.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of four-hour weekly RevOps blocks kept, with the reconciliation running and a written case for a dedicated hire."
                cadence: rolling
              tasks:
                - "Block four hours a week for revenue operations in your calendar"
                - "Choose three priority activities and park the rest in writing"
                - "Tell your manager which requests you will decline for now"
                - "Write the case and trigger point for a dedicated RevOps hire"
            - name: Merging sales, marketing and success ops teams
              description: |-
                ## Purpose
                Large companies often have three separate operations teams with their own tools, backlogs and loyalties, and merging them into one RevOps function tests trust on every side. Planning the new structure, a shared backlog, cross-training and clear career paths reduces the attrition and turf disputes that usually follow such a reorganisation.

                ## Milestones
                1. A new team structure showing pods by lifecycle stage or by capability.
                2. One shared backlog replacing the three team queues.
                3. Each team member cross-trained on one other team's systems.
                4. Career paths and levels published for every RevOps role.

                ## Notes
                Talk to each ops team member individually before the announcement. Surprises in a reorganisation cost more trust than the change itself.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three ops teams working from one backlog under one structure, with career paths published and cross-training complete within six months."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Meet each ops team member one to one before announcing anything"
                - "Draft two structure options, by lifecycle stage and by capability"
                - "Merge the three request queues into one backlog"
                - "Pair each team member with someone from another team for cross-training"
                - "Publish levels and career paths for every RevOps role"
            - name: Aligning revenue definitions after an acquisition
              description: |-
                ## Purpose
                After an acquisition, two companies' versions of a customer, a booking and churn get added together in the first combined board pack, and the result means nothing. Mapping each definition side by side, agreeing a combined version and restating history where needed gives the merged business numbers that compare like with like.

                ## Milestones
                1. Both companies' glossaries laid side by side, with differences marked.
                2. A combined definition agreed for every core term.
                3. Historical metrics restated for at least four quarters on the combined basis.
                4. The restatement method written up for the board and auditors.

                ## Notes
                The technical merge of the two CRMs is a separate project; settle definitions first so the systems work has a target.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A combined glossary agreed by both leadership teams, with four quarters of history restated on that basis and the method written up."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Collect the acquired company's definitions for every core term"
                - "Mark each difference from your glossary and its effect on the numbers"
                - "Agree combined definitions with both leadership teams"
                - "Restate four quarters of history on the combined basis"
            - name: Multi-region revenue operations rules
              description: |-
                ## Purpose
                Enterprises selling across regions find that fiscal calendars, currencies, tax handling, consent rules and even what counts as a customer vary by country. Deciding what is global and fixed, what each region may adapt and how currency is converted for reporting keeps global numbers comparable while respecting real local differences.

                ## Milestones
                1. A list of revenue rules marked global or regionally adaptable.
                2. One currency conversion method chosen for reporting, agreed with finance.
                3. Each region's local variations documented with an owner.
                4. Global dashboards showing comparable figures for every region.

                ## Notes
                Check consent and data residency requirements for each region with your legal or privacy team rather than assuming.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of global and regional revenue rules with one agreed currency method, and every region reported on a comparable basis."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List revenue rules and mark each one global or regionally adaptable"
                - "Agree a reporting currency conversion method with finance"
                - "Ask each regional leader to document local variations"
                - "Check global dashboards compare every region on the same basis"
            - name: Revenue data stewardship council
              description: |-
                ## Purpose
                Once a company has several hundred users across revenue systems, no central team can police every field. Naming a data steward in each team, with authority over the fields their team creates and a monthly meeting to settle disputes and approve new fields, spreads ownership without losing control.

                ## Milestones
                1. A steward named in sales, marketing, success and finance, with a written remit.
                2. Every core field assigned to a steward.
                3. A monthly stewardship meeting reviewing quality scores and new field requests.
                4. New fields created only after steward approval.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A steward for every core revenue field and six consecutive monthly stewardship meetings, with every new field approved by a steward."
                cadence: rolling
              tasks:
                - "Ask each revenue leader to nominate a data steward"
                - "Assign every core revenue field to a steward"
                - "Hold the stewardship meeting on quality and new field requests @recurring(monthly:9)"
                - "Write the rule that new fields need steward approval"
            - name: Cohort net revenue retention analysis
              description: |-
                ## Purpose
                One net revenue retention figure can hide that recent cohorts retain far worse than older ones, or that a single segment carries the whole number. Breaking retention down by signing cohort, segment and product shows where expansion really comes from and which customers the company should be acquiring more of.

                ## Milestones
                1. Net and gross retention calculated for each quarterly signing cohort.
                2. The same breakdown by segment and lead product.
                3. The three most important differences written up in plain language.
                4. The findings presented at the revenue council with a proposed action.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cohort retention analysis by signing quarter, segment and product, presented at the revenue council with one agreed action."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Group customers by the quarter they first signed"
                - "Calculate net and gross retention for each cohort"
                - "Repeat the breakdown by segment and lead product"
                - "Refresh the cohort retention table with the new quarter @recurring(quarterly)"
            - name: Usage-based revenue data model
              description: |-
                ## Purpose
                Consumption or usage pricing breaks the assumption that a contract value tells you next year's revenue, so pipeline, ARR and retention all need rethinking. Designing how committed spend, actual usage and overage are recorded and reported, together with finance, keeps metrics meaningful when revenue moves every month.

                ## Milestones
                1. Definitions for committed revenue, usage revenue and run rate agreed with finance.
                2. Usage data feeding the CRM or warehouse at account level each month.
                3. Retention and expansion recalculated on a usage basis.
                4. Sales and success shown how to read the new account views.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Committed and usage revenue defined with finance, fed monthly at account level and used in retention reporting."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree definitions of committed, usage and run-rate revenue with finance"
                - "Ask engineering for a monthly account-level usage feed"
                - "Recalculate retention using usage revenue for the last four quarters"
                - "Show sales and success how to read the usage account views"
            - name: Partner-sourced revenue tracking
              description: |-
                ## Purpose
                Resellers, referral partners and marketplaces bring in deals, and the company needs to know which partners produce revenue that renews, not just which ones register the most opportunities. Agreeing how partner involvement is recorded on each deal and account, and reporting partner-sourced and partner-influenced revenue through the full lifecycle, lets partnership spending be judged on results.

                ## Milestones
                1. Partner-sourced and partner-influenced defined in the glossary.
                2. A partner field required on deals and carried onto the customer account.
                3. A monthly report of partner revenue, win rate and retention by partner.
                4. The lowest-performing quarter of partners reviewed with the partnerships lead each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Partner involvement is recorded on every relevant deal, with a monthly report of revenue and retention by partner running for three months."
                cadence: rolling
              tasks:
                - "Define partner-sourced and partner-influenced in the glossary"
                - "Make the partner field required on deals with partner involvement"
                - "Publish revenue, win rate and retention by partner @recurring(monthly:20)"
                - "Review the lowest-performing partners with the partnerships lead"
---

# Revenue Operations Setup

Revenue operations is the work of making sales, marketing and customer success run on one set of definitions, systems and numbers, and this area is for the managers and enterprise teams building that function. It starts with the foundations (a charter, a systems map, a data audit, a shared glossary, the lifecycle model and a system of record for each metric), then the operating rhythms, the analytical skills, the handoff and reporting decisions, dated events such as a board section or a stage model go-live, situations from a first hire to a post-acquisition merge, and specialist work on stewardship, cohort retention, usage pricing and partner revenue.

What repeats is a Monday request triage, a monthly revenue council, the finance reconciliation, handoff and customer count checks, quarterly metrics packs, roadmaps and board sections, and a yearly planning calendar and fiscal rollover. The Remediation plan, Metrics log, Meeting notes, Board meeting, Operational checklist and Onboarding 30/60/90 templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
