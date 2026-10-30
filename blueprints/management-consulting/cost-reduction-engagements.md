---
id: management-consulting.cost-reduction-engagements
name: Cost Reduction Engagements
description: "A delivery system for client cost work: a savings definition finance accepts, a reconciled baseline and spend cube, sized levers, an initiative register with gates, and savings traced into the accounts and next year's budget."
category: business
version: 1.0.0
tags: [management-consulting, cost-reduction-engagements, knowledge-worker, cost-reduction, spend-cube, zero-based-budgeting, procurement, savings-tracking]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - vendor
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cost Reduction Engagements
          description: "Delivering cost reduction work for clients: baselines, spend cubes, zero-based reviews, initiative tracking and making savings show up in the accounts."
          projects:
            - name: Savings definition agreed with the client CFO
              description: |-
                ## Purpose
                Arguments in month six about whether a saving is real nearly always come from a definition nobody wrote down in week one. Agreeing with the CFO whether you count run-rate or in-year savings, gross or net of costs to achieve, and whether cost avoidance and volume effects count at all, gives every later number a rule to be tested against.

                ## Milestones
                1. A one-page savings definition covering run-rate versus in-year, gross versus net, cost avoidance and volume adjustments.
                2. Treatment of inflation, currency movements and accounting reclassifications stated explicitly.
                3. The CFO's written sign-off on the definition received and filed.
                4. The definition circulated to every initiative owner before the first estimate is made.

                ## Notes
                Cost avoidance, such as a price rise that was refused, is the item finance most often rejects later. Decide now whether it is reported separately or not at all.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A savings definition signed off by the CFO in writing exists before any initiative value is reported."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft five definition questions for the CFO: run-rate, gross or net, avoidance, volume, inflation"
                - "Book an hour with the CFO and financial controller to settle them"
                - "Write the agreed rules on one page with a worked example for each"
                - "Send the page to the CFO for written sign-off and file the reply"
            - name: Addressable cost baseline from the general ledger
              description: |-
                ## Purpose
                Without a baseline that ties to the audited P&L, every savings claim can be challenged as a moving target. Pulling twelve months of general ledger data by account and cost centre, reconciling it to the reported operating costs and marking what is addressable gives the programme its starting line.

                ## Milestones
                1. Twelve months of ledger data extracted by account, cost centre and month.
                2. The extract reconciled to the reported operating costs within an agreed tolerance.
                3. Each cost line tagged addressable, partly addressable or out of scope, with a reason.
                4. The baseline file locked, versioned and accepted by the financial controller.

                ## Notes
                Agree the baseline period early. A trailing twelve months is common, but a budget year can suit a client whose last year was distorted.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned baseline file reconciles to the reported operating costs and has been accepted by the financial controller in writing."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Request a twelve-month ledger extract by account, cost centre and month"
                - "Reconcile the extract total to the reported operating costs"
                - "Tag every account as addressable, partly addressable or out of scope"
                - "Walk the financial controller through the baseline and get acceptance"
            - name: Baseline normalisation and adjustments log
              description: |-
                ## Purpose
                Most baseline years contain something unusual: a lawsuit settlement, a one-off consultancy bill, an acquisition halfway through or a currency swing. Logging each adjustment with its amount, evidence and approver keeps the baseline honest and stops savings being claimed against a cost that would have vanished anyway.

                ## Milestones
                1. One-off items, part-year acquisitions and disposals identified and quantified.
                2. Each adjustment logged with amount, evidence and the finance person who approved it.
                3. A normalised baseline set beside the reported baseline with a bridge between them.
                4. Rules for future adjustments, such as volume changes, agreed with finance.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An adjustments log and a bridge from reported to normalised baseline have been approved by finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List large single invoices and journal entries above an agreed threshold"
                - "Ask finance which items they regard as one-off and why"
                - "Log each adjustment with its evidence and approver"
                - "Build a bridge chart from reported to normalised baseline"
            - name: Spend cube from accounts payable data
              description: |-
                ## Purpose
                Procurement savings start with knowing who buys what from whom, and the ledger alone rarely shows it. Building a spend cube from the accounts payable and purchase order data, with supplier, category and business unit on its three axes, shows where spend is fragmented, where it is concentrated and where nobody negotiated at all.

                ## Milestones
                1. Twelve months of invoice-level accounts payable data and purchase order data received.
                2. Spend mapped to supplier, category and business unit, with at least 90 percent of value classified.
                3. The cube total reconciled to the addressable baseline.
                4. A first view of the top categories, top suppliers and supplier count per category produced.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spend cube with at least 90 percent of value classified reconciles to the addressable baseline."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Send a precise data request for invoice-level payables and purchase orders"
                - "Classify the top suppliers by value until 90 percent of spend is mapped"
                - "Reconcile the cube total to the addressable baseline"
                - "Produce a one-page view of top categories and supplier counts"
            - name: Supplier name cleansing and category taxonomy
              description: |-
                ## Purpose
                The same supplier often appears under six spellings and three subsidiaries, which hides how much the client really spends with it. Cleansing supplier names into parent groups and agreeing a category taxonomy with procurement turns a messy cube into one the category managers trust.

                ## Milestones
                1. Supplier records grouped into parent companies with a mapping table kept.
                2. A two or three level category taxonomy agreed with the head of procurement.
                3. Unclassified spend reduced below an agreed threshold.
                4. The mapping rules documented so the client can refresh the cube without you.

                ## Notes
                Use an existing taxonomy such as a standard product and service code set as a start, then simplify. Category managers will not use a tree with 400 leaves.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A supplier parent mapping and an agreed category taxonomy are documented and leave unclassified spend below the agreed threshold."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export the distinct supplier names with their total spend"
                - "Group duplicate and subsidiary names into parent suppliers"
                - "Agree the category taxonomy levels with the head of procurement"
                - "Write the mapping rules in a short guide for the client team"
            - name: Labour cost baseline from payroll and HR data
              description: |-
                ## Purpose
                People are often half or more of a client's cost base, yet the HR headcount and the finance payroll rarely agree. A labour baseline that reconciles FTEs, contractors, overtime and fully loaded cost by function and location is the base for every spans, sourcing or automation lever, and it must handle personal data with care.

                ## Milestones
                1. Headcount, FTE, contractors and agency staff counted by function and location.
                2. Fully loaded cost per role family built from pay, benefits, taxes and overtime.
                3. HR headcount reconciled to the payroll cost in the ledger.
                4. Access to individual-level data restricted to the named people agreed with the client.

                ## Notes
                Ask for anonymised or banded data where you can. Individual salaries rarely need to leave the client's HR team for a baseline.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A labour baseline by function and location reconciles HR headcount to ledger payroll cost, with data access limited to named people."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree with HR which fields are needed and how personal data will be protected"
                - "Request headcount, contractor and overtime data by function and location"
                - "Build fully loaded cost per role family"
                - "Reconcile HR headcount cost to the payroll lines in the ledger"
            - name: Volume and rate driver map for the largest cost pools
              description: |-
                ## Purpose
                Every cost line is a volume times a rate, and the lever depends on which one is out of line. Mapping the drivers for the ten largest cost pools, such as trips times fare, licences times price or calls times handling time, points the team at demand levers, price levers or both.

                ## Milestones
                1. The ten largest addressable cost pools listed with their annual value.
                2. A volume driver and a rate driver identified for each pool.
                3. Twelve months of driver data gathered for at least the top five pools.
                4. Each pool marked as mainly a demand problem, a price problem or both.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Driver trees exist for the ten largest cost pools, each labelled as a demand, price or mixed problem."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the ten largest addressable cost pools from the baseline"
                - "Write a volume times rate formula for each pool"
                - "Ask cost pool owners for twelve months of driver data"
                - "Label each pool as a demand, price or mixed problem"
            - name: Savings hypothesis long list across four lever types
              description: |-
                ## Purpose
                Teams that jump straight to supplier negotiation miss the larger savings in buying less or buying differently. A long list organised by demand, specification, price and process levers, built with cost pool owners rather than for them, gives the diagnostic a wide net and early buy-in.

                ## Milestones
                1. At least sixty hypotheses captured across demand, specification, price and process levers.
                2. Each hypothesis tied to a cost pool and a named client contact.
                3. Duplicates merged and obvious non-starters marked with a reason.
                4. The list reviewed with the engagement manager and the sponsor's delegate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A long list of at least sixty savings hypotheses, each tied to a cost pool and a client contact, has been reviewed with the sponsor's delegate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set up a hypothesis sheet with columns for lever type, cost pool and contact"
                - "Ask the agent to draft lever ideas for each cost pool from the driver map"
                - "Run thirty-minute idea sessions with the five largest cost pool owners"
                - "Merge duplicates and mark non-starters with a reason"
            - name: Low and high sizing for each savings opportunity
              description: |-
                ## Purpose
                Sponsors remember the first number they hear, so a single point estimate shown too early becomes a target the team cannot meet. Sizing each opportunity as a range, with the assumption that moves it from low to high, gives a defensible total and shows where the next analysis should go.

                ## Milestones
                1. Each prioritised hypothesis sized with a low and a high annual run-rate value.
                2. The key assumption behind each range written in one sentence.
                3. Overlaps between opportunities removed so the total does not double count.
                4. A summary range for the whole programme checked by the engagement manager.

                ## Notes
                Interactions matter: cutting travel volume and renegotiating the travel agency fee cannot both be sized against the full baseline.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every prioritised opportunity has a low and high value with a stated assumption, and the programme total has been checked for double counting."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose the sizing method for each opportunity: benchmark, driver change or quote"
                - "Calculate a low and high run-rate value for each"
                - "Strip out overlaps between opportunities that touch the same cost pool"
                - "Review the summary range with the engagement manager"
            - name: Ring-fenced costs and no-go areas with the sponsor
              description: |-
                ## Purpose
                Some costs must not be cut however large they look: safety-critical maintenance, regulatory compliance, a flagship customer service or a strategic investment. Agreeing the ring fence with the sponsor before the diagnostic protects the client and saves the team from proposing ideas that will be rejected in the room.

                ## Milestones
                1. A draft list of ring-fenced cost areas with the reason for each.
                2. Safety, regulatory and quality owners consulted on their areas.
                3. The sponsor's agreement to the list recorded.
                4. The ring fence shared with the whole team and initiative owners.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A ring-fenced cost list agreed by the sponsor, with reasons, has been shared with the full team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the cost areas you think should be protected and why"
                - "Ask the safety and compliance leads which costs they consider untouchable"
                - "Confirm the ring fence with the sponsor in a short meeting"
                - "Share the agreed list with the team and initiative owners"
            - name: Initiative register with owners and stage gates
              description: |-
                ## Purpose
                Ideas on a slide do not save money; named initiatives moving through gates do. A register that tracks each initiative from idea through validated, approved, implemented and realised, with a client owner, a value and a date, is the single place the programme reports from.

                ## Milestones
                1. Gate definitions agreed, with the evidence needed to pass each one.
                2. Every approved idea entered with a client owner, value range and target date.
                3. Gate movements only allowed with the evidence attached.
                4. The register used as the only source for programme reporting.

                ## Notes
                Keep the owner a client manager, never a consultant. A register full of consultant names is a sign the savings will leave when you do.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every initiative in the register has a client owner, a value, a gate and evidence for its current gate, updated every week."
                cadence: rolling
              tasks:
                - "Write the definition and required evidence for each gate"
                - "Load approved ideas with a client owner, value and target date"
                - "Update gate status from owners' evidence @recurring(weekly:mon)"
                - "Remove or park initiatives with no movement for six weeks"
            - name: Weekly savings pipeline review with initiative owners
              description: |-
                ## Purpose
                Initiatives stall quietly between gates unless someone asks about them every week. A short pipeline review where each owner states progress, the next step and what is blocking them keeps momentum and surfaces problems while there is still time to act.

                ## Milestones
                1. A standing thirty-minute slot with all initiative owners in the diary.
                2. A one-page pipeline view by gate prepared before each review.
                3. Blockers logged with an owner and a date to clear them.
                4. Pipeline value by gate tracked week on week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review has run for at least eight consecutive weeks, with blockers logged and pipeline value by gate tracked."
                cadence: rolling
              tasks:
                - "Book a standing thirty-minute review with all initiative owners"
                - "Prepare the pipeline by gate and run the review @recurring(weekly:tue)"
                - "Log each blocker with an owner and a clearance date"
                - "Chart pipeline value by gate from week to week"
            - name: Monthly reconciliation of savings to the ledger
              description: |-
                ## Purpose
                Savings that appear in the tracker but not in the management accounts are the fastest way to lose the CFO's trust. Reconciling claimed savings each month against actual spend on the affected accounts, with finance in the room, proves the money is real and catches savings being eaten by other increases.

                ## Milestones
                1. Each realised initiative mapped to the ledger accounts and cost centres it should affect.
                2. A monthly comparison of baseline, forecast and actual spend on those accounts.
                3. Differences explained and either corrected or accepted by finance.
                4. A quarterly restatement of the full-year savings forecast agreed with finance.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Claimed savings are reconciled to actual ledger spend every month and the full-year forecast is restated with finance each quarter."
                cadence: rolling
              tasks:
                - "Map each realised initiative to its ledger accounts and cost centres"
                - "Reconcile claimed savings to actual spend with finance @recurring(monthly:8)"
                - "Restate the full-year savings forecast with the controller @recurring(quarterly)"
                - "Write one line explaining each difference above the agreed tolerance"
            - name: Budget lock-in of agreed savings
              description: |-
                ## Purpose
                If next year's budget is built on last year's actuals plus inflation, the savings are quietly spent again. Taking each agreed saving out of the relevant cost centre budgets during the budget round makes the reduction stick and ties budget holders to it.

                ## Milestones
                1. Agreed run-rate savings allocated to the cost centres that will deliver them.
                2. Budget templates issued with the savings already deducted.
                3. Any budget holder pushback logged and resolved with finance.
                4. The final approved budget checked to confirm the savings are still in it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The approved budget for the next year shows every agreed run-rate saving deducted from the right cost centres."
                cadence: cyclic
              tasks:
                - "Allocate each agreed saving to a cost centre and budget holder"
                - "Ask finance to issue budget templates with savings already deducted"
                - "Check the approved budget still contains every saving @recurring(yearly)"
                - "Log any budget holder challenge with its resolution"
            - name: Leakage watch on spend creeping back
              description: |-
                ## Purpose
                Savings leak away through new suppliers, rate card drift and contractors rehired through a side door, usually within six to nine months. Refreshing the spend cube each month for categories that have already been addressed spots the creep while it is still small enough to reverse.

                ## Milestones
                1. A watch list of addressed categories with their post-saving run-rate.
                2. A monthly refresh of payables data for those categories.
                3. Variances above an agreed threshold sent to the category owner with a question.
                4. A leakage total reported alongside realised savings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Addressed categories are checked monthly, and a leakage figure is reported next to realised savings in the programme report."
                cadence: rolling
              tasks:
                - "List every addressed category with its new expected run-rate"
                - "Refresh payables data for watched categories @recurring(monthly:15)"
                - "Send variances above the threshold to the category owner"
                - "Add a leakage line to the savings report"
            - name: Spend control board for discretionary purchases
              description: |-
                ## Purpose
                When a client needs savings in the current year, a temporary board approving discretionary purchases above a threshold is often the quickest lever. Run well, with clear rules and a fast turnaround, it cuts spend without stopping the business; run badly, it becomes a bottleneck people route around.

                ## Milestones
                1. Categories and thresholds that require board approval agreed with the CFO.
                2. A simple request form and a 48-hour decision promise published.
                3. Weekly decisions logged with value approved, deferred and refused.
                4. An end date or review point for the board agreed in advance.

                ## Notes
                Publish the rules and the end date. Boards with no exit become permanent bureaucracy and teach people to split purchase orders.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A spend control board meets weekly with logged decisions, a 48-hour turnaround and a published end date."
                cadence: rolling
              tasks:
                - "Agree the categories and approval thresholds with the CFO"
                - "Publish a one-page request form and the decision promise"
                - "Run the board and log approved, deferred and refused value @recurring(weekly:thu)"
                - "Check for purchase orders split to stay under the threshold"
            - name: Vacancy approval panel and headcount control
              description: |-
                ## Purpose
                Natural attrition is often the gentlest labour saving, but only if vacancies are challenged before they are refilled. A weekly panel that reviews each vacancy against the target organisation, with the option to refill, redesign or remove the role, captures savings without redundancies.

                ## Milestones
                1. Panel membership, decision criteria and a turnaround time agreed with HR.
                2. Every new vacancy routed to the panel before advertising.
                3. Decisions logged as refill, redesign or remove, with the annual cost of each.
                4. Savings from removed roles reconciled to payroll each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every vacancy passes through the panel before advertising, with decisions and their annual cost logged."
                cadence: rolling
              tasks:
                - "Agree panel members and criteria with the HR director"
                - "Ask recruitment to route every new vacancy to the panel"
                - "Review the week's vacancies and log each decision @recurring(weekly:wed)"
                - "Total the annual cost of removed roles for the savings report"
            - name: Off-contract spend and contract compliance tracking
              description: |-
                ## Purpose
                A renegotiated contract saves nothing if half the business keeps buying from the old supplier on a credit card. Tracking the share of category spend going through the new contract shows where compliance is slipping and which business units need a conversation.

                ## Milestones
                1. Contracted suppliers and prices listed for each renegotiated category.
                2. Monthly on-contract share calculated by business unit.
                3. Business units below the agreed compliance level contacted with their data.
                4. Compliance trends reported to the steering group alongside savings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "On-contract share is reported monthly by business unit for every renegotiated category."
                cadence: rolling
              tasks:
                - "List contracted suppliers and agreed prices for each renegotiated category"
                - "Calculate on-contract share by business unit @recurring(monthly:20)"
                - "Send each low-compliance business unit its own numbers"
                - "Add a compliance chart to the steering group pack"
            - name: Monthly savings dashboard for the steering group
              description: |-
                ## Purpose
                Senior sponsors want three numbers: what was promised, what is banked and what is at risk. A one-page monthly dashboard drawn only from the register and the ledger reconciliation, with the same layout every month, keeps the steering group focused on decisions rather than on arguing about the figures.

                ## Milestones
                1. A fixed one-page layout showing target, pipeline by gate, realised and at risk.
                2. Every figure traceable to the register or the ledger reconciliation.
                3. The top three risks and decisions needed stated on the page.
                4. The dashboard issued on the same working day each month.

                ## Notes
                Start from the **Metrics log** template to keep the monthly figures in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page savings dashboard traceable to the register and ledger has been issued on the same working day for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree the fixed dashboard layout with the engagement manager"
                - "Link every figure to the register or the ledger reconciliation"
                - "Issue the dashboard to the steering group @recurring(monthly:3)"
                - "Write the top three risks and decisions needed in plain words"
            - name: Dependency and risk log for cost initiatives
              description: |-
                ## Purpose
                Cost initiatives depend on things outside the team's control: a system change, a union consultation, a supplier notice period, a legal review. Keeping these in one log with owners and dates lets the manager see which savings are exposed before the monthly numbers show it.

                ## Milestones
                1. Every initiative's dependencies and risks logged with an owner and a date.
                2. Each risk scored for likelihood and value at stake.
                3. Notice periods and contract break dates captured for supplier initiatives.
                4. High risks raised with the engagement manager within a week of being logged.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk and dependency log covering every initiative is reviewed weekly, with high risks escalated within a week."
                cadence: rolling
              tasks:
                - "Ask each initiative owner for their dependencies and risks"
                - "Score each risk for likelihood and savings value at stake"
                - "Add supplier notice periods and contract break dates to the log"
                - "Review the log and escalate high risks @recurring(weekly:fri)"
            - name: Zero-based review of one cost centre, worked end to end
              description: |-
                ## Purpose
                Zero-based budgeting asks budget holders to justify each activity from nothing rather than from last year's number, and it is easy to describe and hard to do well. Working one support cost centre through the full method, from activity list to challenged budget, teaches the steps before you try to run it across a whole client.

                ## Milestones
                1. The method's core steps read and summarised: activities, service levels, cost packages and challenge.
                2. One cost centre's activities and service levels listed with its budget holder.
                3. A rebuilt budget compared with last year's budget, line by line.
                4. Lessons written up for the next zero-based review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A zero-based rebuild of one cost centre's budget is compared line by line with last year's, with written lessons."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read a practitioner guide to zero-based budgeting and summarise its steps"
                - "List the chosen cost centre's activities and service levels with its owner"
                - "Rebuild the budget from the activities and compare it with last year"
                - "Revisit the zero-based lessons before the next budget round @recurring(yearly)"
            - name: Should-cost model for a purchased service
              description: |-
                ## Purpose
                Suppliers negotiate from their price; a should-cost model lets the client negotiate from the supplier's cost. Building a model for one service, such as facilities cleaning or contract logistics, from labour hours, wage rates, materials, overheads and a fair margin shows how far the current price sits from a reasonable one.

                ## Milestones
                1. A service chosen where the cost structure is knowable, with the current price recorded.
                2. Cost elements built from labour hours, wage rates, materials, overheads and margin.
                3. Each input sourced from a quote, a published index or client data, and labelled.
                4. The gap between the modelled cost and the current price explained.

                ## Notes
                Use public wage and index data where you can and label every assumption. A supplier will attack the weakest input first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A should-cost model with every input sourced and labelled shows the gap to the current price for one purchased service."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pick one service with a knowable cost structure and record its current price"
                - "List the cost elements a supplier would carry for that service"
                - "Source each input from quotes, published indices or client data"
                - "Write a one-page note explaining the gap to the current price"
            - name: Demand levers for travel, IT and professional fees
              description: |-
                ## Purpose
                Indirect categories such as travel, software, mobile phones and professional fees grow because nobody owns the demand. Learning the standard demand levers, policy limits, approval rules, usage reviews and substitution, and testing them against one client's data, builds a toolkit you will use on almost every cost project.

                ## Milestones
                1. A lever list for four indirect categories with an example of each.
                2. Each lever tested against the client's spend data for that category.
                3. A short note on which levers suit this client's culture and which would be resisted.
                4. Monthly demand indicators chosen for at least two categories.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested list of demand levers for four indirect categories exists, with monthly indicators set for at least two."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down three demand levers each for travel, software, mobiles and fees"
                - "Test each lever against the client's category spend data"
                - "Note which levers this client's culture would resist"
                - "Check travel bookings against the new policy limits @recurring(monthly:12)"
            - name: Category strategy and sourcing wave basics
              description: |-
                ## Purpose
                Procurement savings come in waves, with categories grouped by readiness, contract dates and value. Learning how a category strategy is written, from market analysis to sourcing approach, and how waves are sequenced, lets you speak the procurement team's language and plan realistic dates.

                ## Milestones
                1. The parts of a category strategy summarised: needs, market, supplier power, approach.
                2. One category strategy drafted for a client category.
                3. Categories grouped into three sourcing waves by contract date and value.
                4. The wave plan reviewed with the head of procurement.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One category strategy and a three-wave sourcing plan have been reviewed with the client's head of procurement."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Summarise the standard sections of a category strategy"
                - "Draft a category strategy for one client category"
                - "Group categories into three waves by contract end date and value"
                - "Review the wave plan with the head of procurement"
            - name: Activity analysis for support functions
              description: |-
                ## Purpose
                Finance, HR and IT costs are hard to challenge until you know what people actually spend their time on. A short activity survey across a support function, turned into cost per activity, shows duplicated work, manual effort and services nobody asked for.

                ## Milestones
                1. An activity dictionary of twenty to forty activities agreed with the function head.
                2. Time allocation collected from staff or team leads, with a response rate above 80 percent.
                3. Cost per activity calculated from the labour baseline.
                4. Duplicated, manual and low-value activities flagged for the hypothesis list.

                ## Notes
                Explain to staff why the survey is running and how results will be used. A survey read as a redundancy exercise will return defensive answers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Cost per activity for one support function is calculated from a survey with at least 80 percent response."
                cadence: one-shot
                effort_hours_estimate: "18"
              tasks:
                - "Agree an activity dictionary with the function head"
                - "Write a short note to staff explaining the survey's purpose"
                - "Collect time allocation and chase until 80 percent have responded"
                - "Calculate cost per activity and flag duplicated or manual work"
            - name: P&L, cash and payback effects of each saving
              description: |-
                ## Purpose
                Cutting operating cost while adding capital spend, or paying a large severance bill first, may not be the win it looks like. Learning to show each initiative's effect on EBITDA, cash and payback, including costs to achieve and any capitalised items, lets you answer the CFO's first question before it is asked.

                ## Milestones
                1. The difference between run-rate, in-year, P&L and cash effects written up with examples.
                2. A standard initiative template showing EBITDA, cash, one-off costs and payback.
                3. The template applied to the five largest initiatives.
                4. The approach checked by a client finance manager.

                ## Notes
                Accounting treatment, such as whether a cost can be capitalised, is the client finance team's call. Record their view rather than assuming one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The five largest initiatives each show EBITDA, cash, one-off costs and payback in a template checked by client finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a short explanation of run-rate, in-year, P&L and cash effects"
                - "Build an initiative template with EBITDA, cash, one-off cost and payback"
                - "Apply the template to the five largest initiatives"
                - "Ask a client finance manager to check the treatment"
            - name: Negotiation fact packs for supplier renegotiations
              description: |-
                ## Purpose
                Renegotiation goes best when the client walks in knowing more than the supplier expects. A fact pack per supplier, covering spend history, price benchmarks, contract terms, the supplier's dependence on the client and realistic alternatives, gives the category manager a clear ask and a walk-away point.

                ## Milestones
                1. Spend history, volumes and price trends for the supplier summarised.
                2. Contract terms, renewal dates and notice periods extracted.
                3. Alternatives and the client's walk-away position stated.
                4. A specific ask and a fallback agreed with the category manager.

                ## Notes
                The negotiation belongs to the client. Consultants prepare and coach; the category manager speaks for the client in the room.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A fact pack with spend history, contract terms, alternatives and a stated ask exists for each supplier in the current renegotiation wave."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pull three years of spend and price history for each wave supplier"
                - "Extract renewal dates, notice periods and price review clauses"
                - "Ask the agent to draft a first fact pack from the spend and contract notes"
                - "Agree the ask and fallback with each category manager"
            - name: Spend analytics practice in a pivot or BI tool
              description: |-
                ## Purpose
                Partners ask questions of the spend cube in the meeting, and an analyst who can answer in two minutes earns a seat at the table. Practising the standard cuts, supplier concentration, price per unit over time, spend by requester and tail analysis, on a real or sample dataset builds that speed.

                ## Milestones
                1. Ten standard spend questions written down.
                2. Each question answered from the cube in a pivot table or BI tool.
                3. A reusable workbook or dashboard with the ten views saved.
                4. Time to answer a new question under five minutes on a practice run.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved workbook answers ten standard spend questions, and a new question can be answered in under five minutes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write ten questions a partner typically asks of a spend cube"
                - "Answer each one from the cube in a pivot table or BI tool"
                - "Save the views in one reusable workbook"
                - "Time yourself answering a new question a colleague sets"
            - name: Value and ease prioritisation of initiatives
              description: |-
                ## Purpose
                A long list of sixty sized ideas needs to become a programme of fifteen to twenty initiatives the client can actually run. Scoring each idea on value and ease, with ease broken into time, investment, risk and stakeholder resistance, makes the cut transparent and easier to defend.

                ## Milestones
                1. Scoring criteria for value and ease agreed with the engagement manager.
                2. Every sized idea scored by at least two team members.
                3. A matrix showing quick wins, major moves and ideas to park.
                4. A prioritised list agreed with the sponsor.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A prioritised initiative list, scored on agreed value and ease criteria, has been agreed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree value and ease criteria with the engagement manager"
                - "Have two team members score each idea independently"
                - "Plot the scores and group quick wins, major moves and parked ideas"
                - "Agree the prioritised list with the sponsor"
            - name: Costs to achieve and one-off investment case
              description: |-
                ## Purpose
                Severance, system changes, contract exit fees, dual running and the consultants themselves all cost money before savings arrive. Building a clear costs to achieve schedule against the savings profile lets the board approve the programme knowing its payback, rather than discovering the one-off bill later.

                ## Milestones
                1. One-off costs listed by initiative: people, systems, contract exits, dual running and advisers.
                2. Timing of costs and savings set out by quarter.
                3. Net cumulative effect and payback period calculated for the programme.
                4. The case reviewed and accepted by the CFO.

                ## Notes
                Severance estimates need HR and employment law input in the client's jurisdiction. Record their figures rather than estimating them yourself.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A quarterly schedule of costs to achieve against savings, with payback, has been accepted by the CFO."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List one-off costs by initiative with their source"
                - "Lay out costs and savings by quarter over two years"
                - "Calculate cumulative net effect and payback"
                - "Review the investment case with the CFO"
            - name: Make or buy review for one support service
              description: |-
                ## Purpose
                Outsourcing or offshoring a service such as payroll processing, IT support or accounts payable can cut cost, but it moves risk and control too. A structured review of keeping, outsourcing or sharing the service, with full costs on both sides and the transition risk named, gives the client a decision rather than a sales pitch.

                ## Milestones
                1. The full internal cost of the service built from the labour baseline and overheads.
                2. Indicative external costs gathered from at least two providers or market data.
                3. Transition costs, service risks and control requirements listed.
                4. A recommendation with its conditions recorded and shared with the sponsor.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A make or buy recommendation compares full internal cost with at least two external options and names transition risks."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Build the full internal cost of the service"
                - "Gather indicative prices from two providers or market data"
                - "List transition costs, service risks and control needs"
                - "Write a recommendation with its conditions for the sponsor"
            - name: Supplier consolidation for a fragmented category
              description: |-
                ## Purpose
                A category spread across forty suppliers, where the top three take less than half the spend, usually pays too much and gets little service. Consolidating to a short list in exchange for better prices and terms is one of the most reliable procurement levers, provided the business keeps a fallback supplier.

                ## Milestones
                1. The fragmented category's suppliers, spend and service issues listed.
                2. A target number of suppliers and a fallback rule agreed.
                3. Preferred suppliers selected through a competitive process.
                4. Spend moved to the preferred suppliers and checked in the payables data.

                ## Notes
                Start from the **Vendor** template for each preferred supplier.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Spend in the chosen category has moved to the agreed number of preferred suppliers, confirmed in payables data."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the category's suppliers with spend and known service issues"
                - "Agree the target supplier count and fallback rule with procurement"
                - "Run a competitive process to choose preferred suppliers"
                - "Review preferred supplier price and service @recurring(quarterly)"
            - name: Software licence rationalisation
              description: |-
                ## Purpose
                Most companies pay for software seats nobody uses and for three tools that do the same job. Matching licence counts to actual log-in data and mapping overlapping tools gives fast savings at renewal and a rule for keeping the estate lean.

                ## Milestones
                1. A list of software contracts with seats, cost and renewal date.
                2. Usage data for the twenty largest tools compared with seats paid for.
                3. Overlapping tools grouped with a recommended keeper in each group.
                4. Unused seats removed or reduced at the next renewal.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Seats for the twenty largest software tools match usage within an agreed margin at their next renewal."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List software contracts with seats, annual cost and renewal date"
                - "Ask IT for log-in data on the twenty largest tools"
                - "Group overlapping tools and pick a keeper in each group"
                - "Compare seats with usage before renewals @recurring(quarterly)"
            - name: Office footprint review for under-used space
              description: |-
                ## Purpose
                With hybrid working, many offices sit below half occupied on most days while rent, service charges and utilities run in full. Measuring real occupancy and lining it up against lease break dates gives the client a dated set of options, from subletting a floor to consolidating sites.

                ## Milestones
                1. Each site listed with area, annual occupancy cost and lease break or expiry dates.
                2. Occupancy measured from badge data or a two-week desk count.
                3. Options set out for each site with savings, one-off costs and timing.
                4. A recommended footprint plan reviewed with the property owner in the client.

                ## Notes
                Lease exits involve legal and property advice. Record dates and options; leave the legal reading of the lease to the client's advisers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A footprint plan with occupancy data, savings and lease dates for each site has been reviewed with the client's property lead."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List each site with area, occupancy cost and lease dates"
                - "Request badge data or organise a two-week desk count"
                - "Set out options, savings and one-off costs for each site"
                - "Review the footprint plan with the client's property lead"
            - name: Tail spend programme with catalogues and purchasing cards
              description: |-
                ## Purpose
                Small suppliers in the long tail are often 5 to 10 percent of spend but most of the invoices, and it is where prices are least controlled. Moving tail purchases to catalogues, a marketplace or purchasing cards with category limits cuts both price and processing cost.

                ## Milestones
                1. Tail suppliers defined by a spend threshold and their invoice count measured.
                2. A catalogue, marketplace or purchasing card route chosen for each tail segment.
                3. Card limits and blocked merchant categories set with finance.
                4. Tail invoice count and spend tracked against the starting position.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tail spend has a defined route for each segment, with invoice count and spend reported against the starting position."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Define the tail by a spend threshold and count its invoices"
                - "Choose a catalogue, marketplace or card route for each tail segment"
                - "Set card limits and blocked categories with finance"
                - "Review purchasing card statements for policy breaches @recurring(monthly:25)"
            - name: Quick wins and structural savings wave plan
              description: |-
                ## Purpose
                Sponsors need early savings to keep support, but quick wins alone rarely reach the target. A wave plan that sequences fast actions in the first ninety days alongside longer structural changes, with resources and dependencies shown, makes the programme both credible and complete.

                ## Milestones
                1. Initiatives sorted into three waves by time to value.
                2. Resource needs from the client for each wave estimated.
                3. Dependencies between initiatives drawn and checked.
                4. A savings profile by quarter agreed with the sponsor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-wave plan with client resources, dependencies and a quarterly savings profile has been agreed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sort initiatives into three waves by time to value"
                - "Estimate client people needed for each wave"
                - "Draw the dependencies between initiatives"
                - "Agree the quarterly savings profile with the sponsor"
            - name: Diagnostic readout of the savings opportunity
              description: |-
                ## Purpose
                Most cost programmes end the diagnostic phase with a readout that sets the target and decides whether implementation goes ahead. Presenting a sized range, the top initiatives, costs to achieve and the ask of the client's people, pre-agreed with the CFO, turns analysis into a funded programme.

                ## Milestones
                1. The savings range, top initiatives and costs to achieve on no more than ten pages.
                2. The CFO and the largest cost owners walked through the numbers before the meeting.
                3. A clear decision requested: target, scope and implementation resources.
                4. The decision and the agreed target recorded in writing after the meeting.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The diagnostic readout has been held and the agreed savings target and implementation decision are recorded in writing."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the ten-page readout around the savings range and top initiatives"
                - "Walk the CFO and largest cost owners through the numbers beforehand"
                - "State the decision you need on target, scope and resources"
                - "Send a written record of the agreed target after the meeting"
            - name: Zero-based budget challenge sessions
              description: |-
                ## Purpose
                In a zero-based programme, each budget holder defends their rebuilt budget in front of a small challenge panel. Preparing the panel's questions, the cost data and a consistent decision record, and running the sessions to time, decides how much of the zero-based saving survives.

                ## Milestones
                1. A schedule of sessions with every in-scope budget holder.
                2. A challenge pack per budget holder with activities, costs and comparison points.
                3. Each session's decisions recorded in the same format.
                4. Agreed reductions totalled and fed into the budget lock-in.

                ## Notes
                Start from the **Meeting notes** template for each session record.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every in-scope budget holder has had a challenge session with decisions recorded in a single format."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Schedule a session with every in-scope budget holder"
                - "Prepare a challenge pack with activities and costs for each"
                - "Record each session's decisions in the same format"
                - "Total agreed reductions and pass them to the budget lock-in"
            - name: Supplier renegotiation wave launch
              description: |-
                ## Purpose
                The first wave of renegotiations sets the tone for every supplier that follows. Launching it with a coordinated letter from the client, a clear timetable, prepared fact packs and a tracker for every offer shows suppliers the client is serious and keeps the team on schedule.

                ## Milestones
                1. Wave suppliers confirmed with fact packs complete.
                2. A launch letter signed by a client executive sent to every wave supplier.
                3. Negotiation meetings held within the timetable.
                4. Offers tracked and accepted savings entered in the register.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every supplier in the wave has received the launch letter, met the client, and had its offer logged in the register."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the wave supplier list and check every fact pack is ready"
                - "Draft the launch letter for a client executive to sign"
                - "Set the negotiation meeting timetable with category managers"
                - "Log each supplier offer and enter accepted savings in the register"
            - name: Annual budget round with savings built in
              description: |-
                ## Purpose
                The budget round is the moment savings either become next year's plan or drift away. Getting the programme's savings, costs to achieve and new policies into the finance calendar's deadlines, from the first templates to board approval, is a dated piece of work worth planning months ahead.

                ## Milestones
                1. The client's budget calendar obtained with each deadline noted.
                2. Savings and costs to achieve submitted to finance by the template deadline.
                3. Budget review meetings attended where programme savings are discussed.
                4. The board-approved budget checked against the programme numbers.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board-approved budget contains the programme's savings and costs to achieve, checked line by line against the register."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get the client's budget calendar and note each deadline"
                - "Submit savings and costs to achieve to finance by the template deadline"
                - "Attend budget reviews where programme savings are discussed"
                - "Check the approved budget against the register line by line"
            - name: Year-end savings audit with the financial controller
              description: |-
                ## Purpose
                At the end of the first full year, the client's finance team or internal audit will want to know what was really saved. Preparing an evidence file per initiative and walking the controller through it before the board asks protects the programme's credibility and any fee linked to results.

                ## Milestones
                1. An evidence file per realised initiative: baseline, actual spend, contract and approvals.
                2. Each claimed saving tested against the agreed savings definition.
                3. Disputed items resolved or removed from the claimed total.
                4. A signed statement of audited savings from the controller.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The financial controller has signed a statement of audited savings backed by an evidence file per initiative."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Create an evidence folder for each realised initiative"
                - "Test every claimed saving against the agreed definition"
                - "Walk the controller through the evidence and resolve disputes"
                - "Run the year-end savings audit with finance @recurring(yearly)"
            - name: Hundred-day savings plan for a portfolio company
              description: |-
                ## Purpose
                When a private equity owner buys a business, the investment case often assumes a cost reduction the management team must deliver in the first year. A hundred-day plan that confirms the baseline, validates the deal model's savings and starts the first initiatives gives management and the owner one shared view.

                ## Milestones
                1. The deal model's cost assumptions obtained and compared with the actual baseline.
                2. Savings in the investment case validated, revised or flagged as at risk.
                3. First-wave initiatives launched with owners by day sixty.
                4. A day-hundred report agreed with the management team for the owner's board.

                ## Notes
                Confidentiality matters twice here: the deal model belongs to the investor, the operating data to the company. Agree what each side can see.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A day-hundred report validating the investment case savings and showing first-wave initiatives under way has gone to the owner's board."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask for the cost assumptions in the deal model and what can be shared"
                - "Compare the deal model's savings with the actual baseline"
                - "Launch first-wave initiatives with management owners by day sixty"
                - "Draft the day-hundred report with the management team"
            - name: First cost reduction project as an analyst
              description: |-
                ## Purpose
                An analyst on a first cost project usually owns the baseline, the spend cube and the tracker, which are the least glamorous and most scrutinised pieces of the work. Setting up clean files, a change log and a habit of tying every number to its source in week one makes you the person the manager trusts with the numbers.

                ## Milestones
                1. A folder structure and naming rule for baseline, cube and tracker files set up.
                2. A change log recording every edit to the baseline and the cube.
                3. Every number on client pages tied to a named source file and tab.
                4. Feedback from the manager on your files gathered at the end of week three.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Baseline, cube and tracker files follow one naming rule with a change log, and manager feedback is recorded by week three."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up the folder structure and file naming rule on day one"
                - "Start a change log for the baseline and spend cube"
                - "Tie every number on your pages to a source file and tab"
                - "Ask your manager for feedback on your files in week three"
            - name: Engagement manager leading a multi-function cost programme
              description: |-
                ## Purpose
                Running cost work across procurement, labour and support functions at once means coordinating several workstreams that each want the same finance and HR people. An engagement manager who sets one calendar, one register and one set of rules across workstreams avoids the client feeling hit from five directions.

                ## Milestones
                1. One shared calendar of client data requests and meetings across workstreams.
                2. A single register and reporting rhythm used by every workstream.
                3. Named contacts in finance and HR agreed so requests are not duplicated.
                4. A monthly check-in with each workstream lead on quality and client load.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All workstreams use one register and one request calendar, and monthly check-ins with each lead are held."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Combine every workstream's data requests into one client calendar"
                - "Agree single points of contact in finance and HR"
                - "Hold a check-in with each workstream lead on quality and load @recurring(monthly:27)"
                - "Ask the sponsor monthly whether the client team feels overloaded"
            - name: Cost actions for a client under cash pressure
              description: |-
                ## Purpose
                When a client is close to breaching a banking covenant or running short of cash, the order of cost actions changes: speed and cash matter more than elegance. Focusing on committed spend, payment timing and discretionary freezes, alongside the client's restructuring and legal advisers, buys time for structural work.

                ## Milestones
                1. Committed and uncommitted spend for the next thirteen weeks listed.
                2. Discretionary freezes and deferrals agreed with the CFO.
                3. Cash effect of each action fed into the client's cash forecast.
                4. Roles of the restructuring adviser, lenders and consultants clarified in writing.

                ## Notes
                Insolvency and director duties are matters for the client's lawyers and restructuring advisers. Keep the cost work inside what they have agreed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Agreed cost actions are reflected in the client's thirteen-week cash forecast, with adviser roles confirmed in writing."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List committed and uncommitted spend for the next thirteen weeks"
                - "Agree freezes and deferrals with the CFO"
                - "Review the committed spend list against the cash forecast @recurring(weekly:mon)"
                - "Confirm in writing who advises on lenders and legal duties"
            - name: Post-merger integration savings capture
              description: |-
                ## Purpose
                Merger announcements promise cost savings from combining the two businesses, and the integration team is then asked to find them. Building a combined baseline, splitting the promised savings by function and lever, and tracking them apart from business-as-usual savings shows investors and the board whether the promise is being kept.

                ## Milestones
                1. A combined baseline of both companies' cost bases on the same account structure.
                2. Announced merger savings broken down by function and lever with owners.
                3. Merger savings tracked apart from ordinary savings, with clear rules for which is which.
                4. Monthly merger savings reports issued to the integration board.

                ## Notes
                Before the deal closes, competition law limits what the two companies may share. Follow the clean team rules the lawyers set.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Announced merger savings are broken down by function and lever with owners, and tracked monthly apart from ordinary savings."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Map both companies' cost bases to one account structure"
                - "Break announced merger savings down by function and lever"
                - "Agree rules separating merger savings from ordinary savings"
                - "Refresh the merger savings tracker for the integration board @recurring(monthly:18)"
            - name: Cost review for an owner-managed mid-sized business
              description: |-
                ## Purpose
                Businesses with a few hundred staff and no procurement team need a lighter approach than a large corporate programme. A short review of the top twenty suppliers, the labour model and the biggest overheads, run with the owner and the finance manager, can deliver real savings in eight weeks without heavy tools.

                ## Milestones
                1. The top twenty suppliers by spend listed with contract status.
                2. Five to eight practical savings ideas sized with the finance manager.
                3. Actions agreed with the owner, each with a named person and date.
                4. A simple monthly tracker the finance manager can keep without you.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An eight-week review delivers five to eight agreed actions and a tracker the client's finance manager maintains."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "List the top twenty suppliers with contract status"
                - "Size five to eight savings ideas with the finance manager"
                - "Agree each action with the owner, a named person and a date"
                - "Hand over a one-sheet tracker the finance manager can keep"
            - name: People impact and consultation planning for role reductions
              description: |-
                ## Purpose
                Role reductions are the part of a cost programme where planning and communication matter as much as the number. Working with the client's HR and employment lawyers on consultation requirements, selection criteria, timelines and support for affected staff protects people and protects the client from claims.

                ## Milestones
                1. The client's legal and HR advisers engaged on consultation requirements for each jurisdiction.
                2. Selection criteria, timeline and communications plan agreed by HR.
                3. Support for affected staff, such as redeployment and outplacement, set out.
                4. Savings timing in the register adjusted to match the consultation timeline.

                ## Notes
                Consultation duties differ by country and sometimes by headcount. The plan belongs to the client's HR and legal advisers; your job is to align the savings plan with theirs.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A people impact plan agreed by client HR and legal advisers is in place, and savings timing in the register matches it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the client's HR director who advises on consultation requirements"
                - "Align selection criteria and timeline with HR and legal advisers"
                - "Set out redeployment and outplacement support for affected staff"
                - "Move savings dates in the register to match the consultation timeline"
            - name: Savings measurement protocol for a fee-at-risk contract
              description: |-
                ## Purpose
                Where part of the consulting fee depends on savings delivered, both sides need a measurement method agreed before work starts. A protocol covering the baseline, the savings definition, adjustments, evidence and a dispute route turns a likely argument into an arithmetic exercise.

                ## Milestones
                1. Baseline, savings definition and adjustment rules written into one protocol.
                2. Evidence required for each type of saving listed.
                3. A named client approver and a dispute route agreed.
                4. The protocol referenced in the engagement contract by the partner and the client.

                ## Notes
                Contract terms are for the firm's partners and legal team to agree. The protocol is the measurement detail they attach to it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A savings measurement protocol with evidence rules and a dispute route is referenced in the signed engagement contract."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the baseline and savings definition into one draft protocol"
                - "List the evidence required for each type of saving"
                - "Agree a named approver and dispute route with the client"
                - "Give the protocol to the partner for the engagement contract"
            - name: Unit cost KPIs in monthly management reporting
              description: |-
                ## Purpose
                Savings last when managers see cost per unit of output every month, not just total spend against budget. Building unit cost measures such as cost per order shipped, per employee supported or per invoice processed into the client's management pack keeps cost visible long after the programme closes.

                ## Milestones
                1. Five to eight unit cost measures chosen with function heads.
                2. Definitions, data sources and owners written for each measure.
                3. Measures added to the client's monthly management pack.
                4. Three months of results reviewed by the leadership team.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five to eight unit cost measures appear in the client's monthly management pack for three consecutive months."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose five to eight unit cost measures with function heads"
                - "Write the definition, data source and owner for each"
                - "Ask finance to add the measures to the monthly pack"
                - "Check the unit cost figures in the management pack @recurring(monthly:10)"
---

# Cost Reduction Engagements

Cost reduction work is judged on one thing: whether the savings appear in the client's accounts a year later, and most programmes that fail do so because the baseline or the definition of a saving was never agreed. This area starts with foundations (the savings definition, a reconciled baseline, the spend cube, the labour baseline, cost drivers and sized hypotheses), then the operating machinery of initiative registers, pipeline reviews, finance reconciliation and spend controls, the skills of zero-based reviews, should-cost models and negotiation fact packs, decisions on priorities, costs to achieve and sourcing, the dated events from diagnostic readout to year-end audit, variants for analysts, managers, mergers, cash-pressured clients and smaller businesses, and finally specialist work on people impact, fee-at-risk measurement and lasting unit cost reporting.

While a programme is live the rhythm is a Monday register update, a Tuesday pipeline review, a Wednesday vacancy panel, a Thursday spend control board and a Friday risk log check, with monthly reconciliation to the ledger, leakage and off-contract reports on varied days, quarterly forecast restatements and licence reviews, and a yearly budget lock-in and savings audit. The Risk register, Metrics log, Vendor, Purchase decision and Meeting notes templates pair with the dependency log, the savings dashboard, supplier consolidation, the make or buy review and the budget challenge sessions. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
