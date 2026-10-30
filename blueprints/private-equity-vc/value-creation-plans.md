---
id: private-equity-vc.value-creation-plans
name: Value Creation Plans
description: "Turn an investment thesis into a value creation plan with sized levers, named owners, milestones and leading indicators, then track it monthly and report slips honestly."
category: business
version: 1.0.0
tags: [private-equity-vc, value-creation-plans, knowledge-worker, manager, private-equity, portfolio-operations, ebitda-bridge, initiative-tracking]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - meeting-notes
    - remediation-plan
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Value Creation Plans
          description: "Turning the investment thesis into a value creation plan: revenue, margin and cash levers, owners and milestones, board tracking and honest updates when it slips."
          projects:
            - name: Value creation hypotheses drawn from the IC memo
              description: |-
                ## Purpose
                An approved IC memo usually promises four to eight sources of value, scattered across the thesis, the model and the diligence findings. Pulling each one out as a testable hypothesis with its assumed EBITDA or cash effect gives the plan a starting list that the committee has already signed up to, rather than a fresh wish list written after closing.

                ## Milestones
                1. Every value claim in the final IC memo and model listed as a separate hypothesis.
                2. Each hypothesis carries the EBITDA, revenue or cash figure the base case assumed and the year it lands.
                3. Hypotheses that diligence weakened or contradicted flagged with the source finding.
                4. The list reviewed with the deal lead and agreed as the plan's starting scope.

                ## Notes
                Keep the language of the memo. If the base case assumed 200 basis points of gross margin from procurement, the hypothesis says exactly that, so later tracking compares like with like.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of every value hypothesis in the IC memo, each with its base case figure and timing, agreed with the deal lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Open the final IC memo and highlight every sentence that claims future value"
                - "Match each claim to the line in the base case model that carries it"
                - "Ask the agent to draft a hypothesis table from the highlighted memo extracts"
                - "Review the table with the deal lead and strike anything diligence disproved"
            - name: Entry baseline for EBITDA, cash and operating KPIs
              description: |-
                ## Purpose
                Without a frozen baseline, every later improvement can be argued away as seasonality, a one-off or a restated number. Locking the closing EBITDA, normalised for the quality of earnings adjustments, plus net working capital and ten or so operating KPIs, gives every initiative a fixed point to be measured against.

                ## Milestones
                1. Last twelve months EBITDA at closing recorded, with each QoE adjustment listed.
                2. Net working capital, capex run rate and cash conversion at entry recorded.
                3. Eight to twelve operating KPIs captured at entry with their definitions.
                4. The baseline signed off by the portfolio company CFO and the deal team, then locked.

                ## Notes
                Use the definitions from the QoE report and the credit agreement where they exist, so the baseline matches what lenders and the board already see.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A locked baseline document with LTM EBITDA, working capital, cash conversion and at least eight defined KPIs, signed off by the CFO and the deal team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request the final QoE report and closing balance sheet from the deal folder"
                - "List each normalisation adjustment and the amount behind it"
                - "Agree the definition of each operating KPI with the CFO"
                - "Save the signed baseline as a read-only version with today's date"
            - name: EBITDA bridge from entry to the exit case
              description: |-
                ## Purpose
                Boards and lenders understand a plan fastest as a bridge: entry EBITDA on the left, exit case EBITDA on the right, and one bar for each lever in between. Building it forces the team to show how much of the exit case depends on market growth, how much on management action, and how much is still unexplained.

                ## Milestones
                1. A bridge with entry EBITDA, each lever as a separate bar and the exit case EBITDA.
                2. Market growth separated from management-driven improvement.
                3. One-off costs to achieve shown below the line, not netted into the levers.
                4. Any unexplained gap labelled as such rather than hidden in another bar.
                5. The bridge reconciled to the base case model to the nearest thousand.

                ## Notes
                A large unexplained gap is information, not embarrassment. Label it and make closing it a named initiative.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An EBITDA bridge that reconciles entry to exit case EBITDA, separates market growth from management levers and shows costs to achieve."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull entry and exit year EBITDA from the base case model"
                - "Assign each hypothesis to one bar of the bridge"
                - "Separate market growth using the volume assumptions in the model"
                - "Reconcile the bridge total to the model and note any gap"
            - name: Lever inventory across revenue, margin and cash
              description: |-
                ## Purpose
                Most value creation plans over-rely on the two or three levers named in the thesis and miss cheaper ones sitting in the business. A structured sweep across pricing, volume, mix, cost of goods, overheads, working capital and capex surfaces those gaps before the plan is fixed and resources are committed.

                ## Milestones
                1. A lever list covering revenue, gross margin, overheads, working capital and capex.
                2. Each lever rated for size, confidence and time to first impact.
                3. Levers not in the thesis but visible in the data marked as new opportunities.
                4. A shortlist of eight to twelve levers taken forward to charter.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lever inventory covering five value categories, each lever rated, with a shortlist of eight to twelve chosen for charters."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every lever category on one page before looking at the data"
                - "Ask the CFO for margin by product, customer and site for the last two years"
                - "Rate each lever for size, confidence and months to first impact"
                - "Choose the shortlist with the deal lead and management"
            - name: Initiative charter for each chosen lever
              description: |-
                ## Purpose
                A lever written as one line in a slide has no owner, no scope and no way to tell whether it is working. A one-page charter for each initiative states the problem, the target in pounds or dollars, the scope, the first three milestones, the resources and the risks, so that the board approves something concrete and the owner knows what done looks like.

                ## Milestones
                1. A one-page charter drafted for each shortlisted initiative.
                2. Each charter states a financial target, the year it lands and how it will be measured.
                3. Each charter names its owner, sponsor and the resources it needs.
                4. All charters reviewed by the CEO and deal lead and their targets added up against the bridge.

                ## Notes
                Keep every charter to one page. If it needs more, the initiative is probably two initiatives.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off one-page charter for every chosen initiative, with targets that add up to the management bars of the bridge."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Draft a one-page charter layout with problem, target, scope, owner and risks"
                - "Fill in the first charter with its proposed owner in a one-hour session"
                - "Add up charter targets and compare them with the bridge"
                - "Get CEO and deal lead sign-off on each charter"
            - name: Named owners and decision rights for the plan
              description: |-
                ## Purpose
                Initiatives owned by a committee, or by the CEO by default, drift. Giving each one a single accountable executive, a sponsor and clear decision rights on budget and hiring means that when a number slips there is one person to ask and one person who can act.

                ## Milestones
                1. One accountable owner named for every initiative, with no owner carrying more than three.
                2. A sponsor from the executive team or the board named for each owner.
                3. Decision rights written down: what an owner can spend, hire or change without asking.
                4. Owners confirmed in a meeting and the list shared with the board.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every initiative has one named owner and sponsor, written decision rights and no owner holds more than three initiatives."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List initiatives against the executive team and count how many each holds"
                - "Move initiatives away from anyone holding more than three"
                - "Write spending and hiring limits for owners on one page"
                - "Confirm owners in the next executive team meeting"
            - name: Milestones and leading indicators per initiative
              description: |-
                ## Purpose
                EBITDA arrives months after the work that creates it, so a plan tracked only on financial results finds out about problems a quarter too late. Setting two or three dated milestones and one leading indicator per initiative, such as quotes issued at the new price or suppliers re-tendered, shows progress long before the accounts do.

                ## Milestones
                1. Each initiative has two or three dated milestones written as results.
                2. Each initiative has one leading indicator with a definition and data source.
                3. Targets set for each leading indicator by quarter for the first year.
                4. The indicator list checked to confirm every figure can be produced from existing systems.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every initiative has dated milestones and one leading indicator with a data source and quarterly targets for year one."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each owner for the earliest observable sign their initiative is working"
                - "Write one leading indicator definition per initiative"
                - "Confirm with finance or IT which system produces each indicator"
                - "Set quarterly targets for each indicator for the first year"
            - name: Management alignment workshop on the plan
              description: |-
                ## Purpose
                Plans written by the deal team and handed to management tend to be delivered at arm's length. A half-day workshop where the executive team challenges the targets, adds what the deal team missed and agrees the final numbers turns it into their plan, which is the one they will fight for when it gets hard.

                ## Milestones
                1. A half-day workshop held with the full executive team and the deal lead.
                2. Each owner presented their initiative and challenged its target.
                3. Changes to targets or scope recorded with the reason.
                4. A final version of the plan circulated within a week and acknowledged by every owner.

                ## Notes
                Start from the **Meeting notes** template to capture each challenge and decision. Let management talk more than the investors.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A workshop held with the full executive team, with every target change recorded and the final plan acknowledged by each owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book a half-day slot with the CEO and executive team"
                - "Send the draft charters to attendees five days ahead"
                - "Record each challenged target and the agreed change"
                - "Circulate the final plan and collect acknowledgement from each owner"
            - name: Costs to achieve and resourcing budget
              description: |-
                ## Purpose
                Every initiative costs something before it pays: consultants, systems, severance, new hires, capex. Budgeting those costs to achieve up front, and agreeing how they will be funded from cash or the facility, stops the plan stalling the first time a manager asks who pays for the new pricing tool.

                ## Milestones
                1. One-off costs and capex for each initiative estimated by year.
                2. New roles needed for delivery listed with cost and start date.
                3. Funding source agreed for each cost: operating cash, capex budget or the debt facility.
                4. The costs to achieve shown against expected benefits as a simple payback per initiative.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A costs to achieve budget per initiative with funding sources and payback, approved by the CFO."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each owner for one-off costs, capex and hires their initiative needs"
                - "Check covenant and facility headroom for capex funding with the CFO"
                - "Calculate payback months for each initiative"
                - "Present the budget to the CFO for approval"
            - name: Monthly value creation tracker review
              description: |-
                ## Purpose
                Once the plan is live, the risk is that it becomes a slide refreshed for each board meeting rather than a tool management uses. A monthly review of every initiative against its milestones, leading indicator and benefit, held a week after month-end close, keeps it a working document and catches drift while it is still cheap to fix.

                ## Milestones
                1. A tracker listing each initiative with owner, status, indicator, benefit to date and next milestone.
                2. A monthly review held within ten days of month-end with the CFO and owners.
                3. Status for each initiative set by the owner and challenged against evidence.
                4. Three consecutive months of reviews completed with actions recorded.

                ## Notes
                Rate status on evidence, not mood: an initiative is green only if its milestone was met and its indicator is on target.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker is reviewed every month within ten days of month-end, with each initiative's status backed by its indicator."
                cadence: rolling
              tasks:
                - "Build the tracker with one row per initiative and columns for indicator and benefit"
                - "Update the tracker from the closed month's numbers @recurring(monthly:8)"
                - "Run the review meeting with owners and record actions @recurring(monthly:10)"
                - "Chase any owner whose update is missing two days before the review"
            - name: Value creation section of the board pack
              description: |-
                ## Purpose
                Boards see the plan through two pages at most, so those pages decide whether directors ask the right questions. A standard value creation section with the bridge to date, a status table and the top three issues gives the board the same view every meeting and makes trends visible rather than reinvented each time.

                ## Milestones
                1. A fixed two-page layout agreed with the chair and deal lead.
                2. The bridge showing benefits delivered against plan to date.
                3. A status table for each initiative with the owner's one-line comment.
                4. The top three issues stated with the decision or help needed from the board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every board pack contains the same two-page value creation section with bridge to date, status table and top three issues."
                cadence: rolling
              tasks:
                - "Draft the two-page layout and agree it with the chair"
                - "Produce the section from the latest tracker before each board meeting @recurring(monthly:18)"
                - "Write the top three issues with the specific ask of the board"
                - "Ask the agent to compare this section with last meeting's and list what changed"
            - name: Benefits realisation log reconciled to the accounts
              description: |-
                ## Purpose
                Claimed savings that never show up in the P&L are the commonest way a value creation plan loses credibility with a board. Logging each benefit with its evidence and reconciling the total to the management accounts every month means the number reported is one the CFO and auditors would stand behind.

                ## Milestones
                1. A log recording each benefit, its initiative, amount, month and evidence.
                2. Clear rules for what counts: run rate versus in-year, gross versus net of costs.
                3. The monthly total reconciled to the movement in the management accounts.
                4. Unreconciled claims either evidenced or removed within one month.

                ## Notes
                Start from the **Metrics log** template. Agree counting rules once, in writing, before the first claim is logged.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A benefits log reconciled each month to the management accounts, with written counting rules and no claim unevidenced for more than one month."
                cadence: rolling
              tasks:
                - "Write the counting rules for run rate, in-year and net benefits"
                - "Log each new benefit with the invoice, contract or report that proves it"
                - "Reconcile the benefits total to the management accounts @recurring(monthly:12)"
                - "Remove or evidence any claim left unreconciled from last month"
            - name: Quarterly reprioritisation of initiatives
              description: |-
                ## Purpose
                Markets, people and costs change, and a plan fixed at closing will be wrong in parts within two quarters. A quarterly session that moves resources from stalled initiatives to ones working better than expected, and adds new ones the business has uncovered, keeps effort pointed at the largest remaining value.

                ## Milestones
                1. Each initiative re-rated each quarter for value remaining, confidence and effort.
                2. Resources moved from at least one low-yield initiative where the evidence supports it.
                3. New initiatives proposed with a draft charter before being added.
                4. The changes and reasons recorded and reported to the board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A quarterly reprioritisation record with re-rated initiatives, any resource moves and their reasons, shared with the board."
                cadence: cyclic
              tasks:
                - "Re-rate each initiative for value remaining and confidence @recurring(quarterly)"
                - "Propose one resource move from the weakest to the strongest initiative"
                - "Require a draft charter before adding any new initiative"
                - "Record the decisions and send them to the board secretary"
            - name: Weekly initiative owner stand-up
              description: |-
                ## Purpose
                Between monthly reviews, blockers sit unspoken because owners do not want to escalate small things. A fifteen-minute weekly stand-up for initiative owners, run by the CFO or a transformation lead, clears blockers in days rather than weeks and keeps the plan visible inside the management team.

                ## Milestones
                1. A fixed fifteen-minute weekly slot agreed with all owners.
                2. Each owner states progress, the next step and any blocker in under two minutes.
                3. Blockers assigned to a named person with a date to clear them.
                4. Attendance and actions recorded for eight consecutive weeks.

                ## Notes
                Start from the **Meeting notes** template and keep a running blocker list at the top. Cancel the meeting rather than let it run long.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly fifteen-minute owner stand-up held for eight consecutive weeks with blockers assigned and dated."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute slot with every initiative owner"
                - "Run the stand-up and update the blocker list @recurring(weekly:tue)"
                - "Escalate any blocker older than two weeks to the CEO"
                - "Review attendance after eight weeks and adjust the format"
            - name: Plan risk and dependency register
              description: |-
                ## Purpose
                Initiatives depend on each other and on things outside management's control: an ERP upgrade, a key hire, a supplier contract, a lender consent. A register of these risks and dependencies, reviewed monthly, shows which delays will cascade and lets the team act before one slipped project takes three others with it.

                ## Milestones
                1. Each initiative's top risks and dependencies listed with likelihood and impact.
                2. Dependencies between initiatives mapped, with the critical ones marked.
                3. A mitigation and owner set for each high risk.
                4. The register reviewed monthly and closed risks archived.

                ## Notes
                Start from the **Risk register** template. Include people risks, such as one owner holding too much of the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk and dependency register covering every initiative, with mitigations for high risks and a monthly review record."
                cadence: rolling
              tasks:
                - "Ask each owner for their two largest risks and outside dependencies"
                - "Mark which initiatives cannot start until another finishes"
                - "Review the register and update likelihoods @recurring(monthly:20)"
                - "Archive closed risks with the date and outcome"
            - name: Slip escalation and honest recovery note
              description: |-
                ## Purpose
                When an initiative slips, the temptation is to keep it amber, shift the date quietly and hope the next quarter catches up. A standard recovery note, written within two weeks of a missed milestone and stating the gap, the cause, the new forecast and what has changed, protects the credibility of the whole plan with the board and lenders.

                ## Milestones
                1. A trigger rule agreed: a missed milestone or an indicator below target for two months.
                2. A one-page recovery note layout with gap, cause, new forecast and actions.
                3. Every triggered slip has a note within two weeks, owned by the initiative owner.
                4. Recovery notes reported to the board without softening the forecast.

                ## Notes
                Start from the **Remediation plan** template. A plan with no reported slips is usually a plan nobody is measuring.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every slip that meets the trigger rule has a recovery note within two weeks, and all notes appear in the next board pack."
                cadence: rolling
              tasks:
                - "Write the trigger rule for a slip and agree it with the chair"
                - "Draft the one-page recovery note layout"
                - "Check the tracker for newly triggered slips @recurring(monthly:14)"
                - "Add open recovery notes to the board pack appendix"
            - name: Annual plan reset alongside the budget
              description: |-
                ## Purpose
                The annual budget and the value creation plan are often built by different people in different months, so the budget quietly assumes benefits the plan no longer expects. Resetting the plan in the same cycle as the budget makes both use the same benefit phasing and the same costs to achieve.

                ## Milestones
                1. Benefit phasing for the coming year agreed before budget numbers are locked.
                2. Budget lines tagged to the initiatives that drive them.
                3. Completed initiatives closed and their run rate absorbed into the base budget.
                4. The reset plan and budget approved together at the same board meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The value creation plan and the annual budget are approved at the same board meeting with matching benefit phasing."
                cadence: cyclic
              tasks:
                - "Ask the CFO for the budget timetable for the coming year"
                - "Send owners their benefit phasing to confirm before budget lock @recurring(yearly)"
                - "Tag each budget line driven by an initiative"
                - "Close finished initiatives and move their run rate into the base"
            - name: Leading indicator scorecard for initiatives
              description: |-
                ## Purpose
                Leading indicators only help if someone looks at them on a fixed day and they arrive without a manual scramble. A single scorecard showing each initiative's indicator against its quarterly target, refreshed monthly from source systems, gives owners and the deal team an early read without waiting for the full tracker review.

                ## Milestones
                1. One scorecard with every initiative's leading indicator, target and actual.
                2. Data for each indicator pulled from a named report, not a spreadsheet someone retypes.
                3. Indicators below target highlighted automatically or by a fixed rule.
                4. The scorecard sent to owners and the deal lead by the same day each month.

                ## Notes
                Start from the **Metrics log** template. Keep company-wide KPIs in the portfolio monitoring pack; this scorecard holds only the plan's own indicators.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly scorecard of plan leading indicators against target, produced from named source reports and sent on a fixed day."
                cadence: rolling
              tasks:
                - "List the source report for each leading indicator"
                - "Set the rule for highlighting an indicator as below target"
                - "Refresh and send the scorecard to owners @recurring(monthly:5)"
                - "Retire indicators for initiatives that have closed"
            - name: Price waterfall and discount leakage analysis
              description: |-
                ## Purpose
                Pricing is often the fastest margin lever in a buyout, and most of the opportunity sits in leakage between list price and pocket price: discounts, rebates, free freight, payment terms. Learning to build a price waterfall from invoice data shows where margin escapes and which customers or reps drive it.

                ## Milestones
                1. Twelve months of invoice-level data obtained with list price, discounts and rebates.
                2. A waterfall from list to pocket price built for the top product lines.
                3. Price dispersion for similar customers charted, with outliers named.
                4. Three specific leakage fixes sized and proposed to the commercial owner.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A price waterfall from list to pocket price for the main product lines, with three sized leakage fixes proposed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask finance for twelve months of invoice lines with discounts and rebates"
                - "Build a waterfall for the largest product line first"
                - "Chart pocket price against volume for similar customers"
                - "Rerun the waterfall to check fixes are holding @recurring(quarterly)"
            - name: Procurement and cost of goods lever basics
              description: |-
                ## Purpose
                Spend that has not been re-tendered in years, fragmented suppliers and missing contracts are common in founder-owned businesses. Learning to build a spend cube, segment categories and plan a first wave of re-tenders gives a credible procurement number instead of a guessed percentage in the bridge.

                ## Milestones
                1. A spend cube by supplier, category and site for the last twelve months.
                2. Categories segmented by spend size and how easy they are to switch.
                3. A first wave of three to five categories chosen with savings ranges.
                4. Contract renewal dates for the top twenty suppliers recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twelve-month spend cube with segmented categories, a first wave of re-tenders with savings ranges and renewal dates for top suppliers."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Export twelve months of accounts payable by supplier and cost centre"
                - "Group suppliers into ten to fifteen spend categories"
                - "Pick the first wave of categories by size and ease of switching"
                - "Record contract end dates for the top twenty suppliers"
            - name: Sales force effectiveness diagnostic
              description: |-
                ## Purpose
                Revenue growth in a plan often assumes the sales team will simply sell more, without checking coverage, time spent selling or pipeline conversion. A diagnostic of territories, activity and win rates shows whether the growth lever is about more reps, better reps or better targeting, and each needs a different initiative.

                ## Milestones
                1. Revenue, pipeline and win rate by rep for the last four quarters.
                2. Account coverage mapped against territory potential.
                3. Time spent selling estimated from CRM activity or a short survey.
                4. A written finding on whether growth depends on capacity, capability or targeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A diagnostic of rep performance, coverage and selling time with a written finding on the main constraint to sales growth."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Export four quarters of closed and lost deals by rep from the CRM"
                - "Map top accounts against assigned territories"
                - "Run a five-question survey on how reps spend their week"
                - "Write a one-page finding for the commercial owner"
            - name: Working capital lever on receivables, stock and payables
              description: |-
                ## Purpose
                Cash released from working capital pays down acquisition debt directly and often needs no capex, yet it rarely gets its own owner. Understanding the drivers of debtor days, stock days and creditor days, and the cash each day is worth, turns a vague cash conversion goal into specific actions with a number attached.

                ## Milestones
                1. Debtor, stock and creditor days calculated monthly for the last two years.
                2. The cash value of one day of each worked out.
                3. The largest drivers identified, such as overdue accounts, slow-moving stock or early supplier payments.
                4. A cash release target set and monthly tracking started.

                ## Notes
                Stretching supplier terms has limits: check the effect on key supplier relationships and any supply chain finance arrangements before setting targets.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two years of working capital days calculated, the cash value of a day known for each, and a tracked cash release target in place."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Calculate debtor, stock and creditor days from monthly balance sheets"
                - "Work out the cash released by one fewer debtor day"
                - "List the twenty largest overdue receivables and stock lines over 180 days"
                - "Track working capital days against target @recurring(monthly:16)"
            - name: Lean operations basics for site improvements
              description: |-
                ## Purpose
                Operational levers in manufacturing, distribution and service businesses depend on seeing waste on the floor, not in the accounts. Learning the basics of value stream mapping, overall equipment effectiveness and standard work lets a deal professional or manager judge whether an operations initiative is realistic before it enters the bridge.

                ## Milestones
                1. One introductory course or book on lean operations completed with notes.
                2. A value stream map drawn for one product line at one site.
                3. Overall equipment effectiveness or a service equivalent measured for a key process.
                4. Two improvement ideas written up with an estimated effect on cost or capacity.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A value stream map and one measured efficiency figure for a key process, with two sized improvement ideas."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one introductory lean course or book and schedule the first session"
                - "Spend half a day on site following one order from start to finish"
                - "Draw the value stream map and mark waiting time"
                - "Write up two improvement ideas with estimated savings"
            - name: Digital and automation initiatives sized in EBITDA terms
              description: |-
                ## Purpose
                Digital initiatives, from e-commerce to automation and AI tools, are easy to approve and hard to measure, and many plans carry them as a line with no number. Learning to size them as revenue gained or cost removed, with adoption milestones, keeps them in the plan on the same terms as pricing or procurement.

                ## Milestones
                1. Each digital initiative stated as a revenue or cost effect with a mechanism.
                2. Adoption milestones set, such as share of orders online or hours automated.
                3. Total cost of ownership estimated, including licences and support.
                4. Initiatives that cannot be sized moved out of the bridge into an options list.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every digital initiative in the plan has a sized effect, adoption milestones and total cost of ownership, or has been moved out of the bridge."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every digital or automation initiative currently in the plan"
                - "Write the mechanism by which each one changes revenue or cost"
                - "Ask the IT lead for licence and support costs per initiative"
                - "Move unsized initiatives to an options list"
            - name: Returns attribution across growth, margin, multiple and debt paydown
              description: |-
                ## Purpose
                Investors increasingly ask how much of a return came from operational improvement and how much from multiple expansion or paying down debt. Learning the standard attribution method, and applying it quarterly to the current deal, shows whether the plan is creating value or whether the returns case rests on the exit multiple.

                ## Milestones
                1. The standard attribution split understood: revenue growth, margin change, multiple change and net debt change.
                2. A worked attribution built for the current deal's base case.
                3. The same attribution refreshed using actuals to date.
                4. A short note on how dependent the returns case is on multiple expansion.

                ## Notes
                Methods differ in how they treat the interaction between growth and margin. State which method you used and keep it constant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A returns attribution for the base case and for actuals to date, with a written note on reliance on multiple expansion."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your firm's or a published guide to value creation attribution"
                - "Build the attribution for the base case in a separate model tab"
                - "Refresh the attribution with actuals @recurring(quarterly)"
                - "Write a three-sentence note on dependence on the exit multiple"
            - name: Case studies of plans that worked and plans that failed
              description: |-
                ## Purpose
                Few people see more than a handful of value creation plans run to exit, so pattern recognition comes slowly. Studying six published or internal cases, half successes and half disappointments, and noting where each plan's assumptions broke, builds judgement faster than waiting for your own deals to finish.

                ## Milestones
                1. Six cases gathered from published sources, firm archives or former colleagues.
                2. For each case, the original levers and what actually drove the outcome noted.
                3. Common failure patterns listed, such as late hires or overstated pricing.
                4. Three lessons written into your own plan checklist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six cases summarised with planned versus actual drivers, and three lessons added to your plan checklist."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask a senior colleague for two past deals worth studying"
                - "Find four published case studies on portfolio value creation"
                - "Ask the agent to summarise planned versus actual drivers for each case"
                - "Add three lessons to your plan checklist"
            - name: Prioritisation matrix for value, effort and timing
              description: |-
                ## Purpose
                When management has twenty good ideas and capacity for eight, sequencing matters more than selection. A matrix scoring each initiative on value, effort, time to impact and dependency makes the trade-offs visible, so the plan front-loads quick, cash-generative work and staggers the heavy programmes.

                ## Milestones
                1. Each candidate initiative scored on value, effort, time to impact and dependencies.
                2. A sequenced roadmap with no more than eight initiatives active at once.
                3. Initiatives deferred to year two recorded with a reason.
                4. The sequence agreed with the CEO and deal lead.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sequenced roadmap with at most eight concurrent initiatives and recorded reasons for each deferral, agreed with the CEO."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Score every candidate initiative on four criteria in one sitting"
                - "Plot the scores and mark quick, cash-generative initiatives"
                - "Draft a two-year sequence with a cap on concurrent initiatives"
                - "Agree the sequence with the CEO and deal lead"
            - name: Build, buy or partner decision for a missing capability
              description: |-
                ## Purpose
                Many plans need a capability the business does not have, such as a pricing function, an online channel or a field service team. Comparing building it in-house, buying it through an add-on or partnering with a provider, on cost, time and risk, prevents a default to whichever option the loudest person prefers.

                ## Milestones
                1. The missing capability defined in one paragraph with the value it enables.
                2. Build, buy and partner options each costed with time to working capability.
                3. Risks and reversibility of each option written down.
                4. A recommendation made and the decision recorded by the board.

                ## Notes
                If buying looks best, hand the target work to the add-on programme rather than running it inside this plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded board decision on build, buy or partner for the capability, with each option costed and timed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-paragraph definition of the missing capability"
                - "Get rough costs for hiring a team, partnering and acquiring"
                - "Compare months to working capability for each route"
                - "Present a recommendation for a board decision"
            - name: Deciding where consultants are worth the fee
              description: |-
                ## Purpose
                Consultants can accelerate a pricing or procurement programme, or produce an expensive report nobody implements. Deciding lever by lever whether outside help is needed, and on what terms such as fees partly tied to verified savings, keeps the costs to achieve justified and the capability in the business afterwards.

                ## Milestones
                1. Each initiative marked as internal, supported or consultant-led with a reason.
                2. For consultant-led work, two or three firms compared on scope, team and fee structure.
                3. Knowledge transfer to company staff written into the scope.
                4. Engagement decisions recorded with expected payback.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision per initiative on consultant use, with compared proposals and knowledge transfer terms for any engagement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Mark each initiative internal, supported or consultant-led"
                - "Request proposals from two or three firms for consultant-led levers"
                - "Ask each firm how fees could link to verified benefits"
                - "Record each decision with expected payback"
            - name: Kill or continue review for a stalled initiative
              description: |-
                ## Purpose
                Initiatives rarely get stopped; they fade, still consuming management attention and still sitting in the bridge. A formal kill or continue review, triggered after two recovery notes, forces a clear choice and frees the team to redirect effort or replace the lost value elsewhere.

                ## Milestones
                1. A trigger agreed: two consecutive recovery notes or six months below target.
                2. The case for continuing set against the cost of the next six months.
                3. A decision made to stop, rescope or continue with a final deadline.
                4. If stopped, the bridge updated and a replacement source of value proposed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written kill, rescope or continue decision for the stalled initiative, with the bridge updated to match."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the initiative's recovery notes and indicator history"
                - "Estimate the cost and management time of six more months"
                - "Hold a thirty-minute decision meeting with the owner and sponsor"
                - "Update the bridge and tracker with the decision"
            - name: SKU and customer rationalisation decision
              description: |-
                ## Purpose
                Long tails of low-volume products and unprofitable customers absorb capacity, working capital and management time. Analysing margin after cost to serve, and deciding which items to cut, reprice or keep, often releases more value than chasing new revenue, but it needs a clear decision before sales teams will act.

                ## Milestones
                1. Margin after cost to serve calculated by product and customer.
                2. A tail identified, such as the bottom 20 percent by contribution.
                3. Each tail item marked to cut, reprice or keep, with revenue at risk stated.
                4. The decision approved and a customer communication plan agreed with sales.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved list of products and customers to cut, reprice or keep, with revenue at risk and a communication plan."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Ask finance how cost to serve can be allocated by customer"
                - "Rank products and customers by contribution after cost to serve"
                - "Mark each tail item to cut, reprice or keep"
                - "Agree a customer communication plan with the sales lead"
            - name: Site footprint consolidation decision
              description: |-
                ## Purpose
                Buy-and-build businesses and older companies often run more sites, depots or offices than the volume needs. Comparing consolidation options on savings, one-off cost, service risk and people impact gives the board a decision it can approve, rather than a savings figure that ignores the move.

                ## Milestones
                1. Each site profiled for cost, capacity used, lease terms and headcount.
                2. Two or three consolidation scenarios costed with one-off cost and savings.
                3. Service, customer and people risks set out for each scenario.
                4. A recommended scenario approved, with employment and consultation obligations checked with an employment lawyer.

                ## Notes
                Redundancy and consultation rules differ by country and headcount. Take employment advice before announcing anything.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-approved consolidation scenario with costed savings, one-off costs, risks and legal advice on people obligations."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List every site with cost, utilisation and lease end date"
                - "Cost two or three consolidation scenarios"
                - "Book a call with an employment lawyer on consultation duties"
                - "Present the recommended scenario to the board"
            - name: Growth capex allocation across initiatives
              description: |-
                ## Purpose
                Capex for growth competes with maintenance capex, debt service and covenant headroom. Ranking growth capex requests by payback and strategic fit, and setting a hurdle the board agrees, means capital goes where the plan needs it rather than to whichever site manager asks first.

                ## Milestones
                1. Growth and maintenance capex separated in the budget.
                2. A payback or return hurdle for growth capex agreed with the board.
                3. Each growth request ranked against the hurdle with its link to an initiative.
                4. Approved projects tracked for spend and benefit after six months.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked growth capex list against an agreed hurdle, with approved projects linked to initiatives and reviewed after six months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Split the capex budget into growth and maintenance"
                - "Propose a payback hurdle for growth capex to the CFO"
                - "Rank current growth requests against the hurdle"
                - "Schedule a six-month benefit check on approved projects"
            - name: Organisation changes needed to deliver the plan
              description: |-
                ## Purpose
                Plans often assume a function the company does not yet have, such as a commercial director, a procurement lead or a transformation office. Mapping each initiative to the roles it needs, and the order in which they must be hired, shows whether the organisation can carry the plan or whether the timeline needs to move.

                ## Milestones
                1. Roles needed for each initiative listed against the current organisation.
                2. Gaps ranked by how many initiatives depend on them.
                3. A hiring sequence with start dates that match initiative timelines.
                4. Initiative dates adjusted where the hire cannot arrive in time.

                ## Notes
                Detailed assessment of individual executives belongs with the management assessment work. Keep this to roles and timing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A role gap list ranked by dependent initiatives, a hiring sequence, and initiative dates adjusted to match."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the roles each initiative needs to succeed"
                - "Mark which roles exist today and which are gaps"
                - "Draft a hiring sequence with realistic start dates"
                - "Move initiative dates where hires will land late"
            - name: Value creation plan approval at the board
              description: |-
                ## Purpose
                The first board meeting after closing where the full plan is approved sets the standard for every review that follows. Presenting the bridge, charters, owners, costs to achieve and tracking method in one session, and getting a formal resolution, gives management a mandate and the board a fixed reference.

                ## Milestones
                1. A board paper with bridge, charters summary, owners, costs to achieve and tracking cadence.
                2. Pre-meetings held with the chair and any investor director who has concerns.
                3. The plan approved by board resolution, with any conditions minuted.
                4. The approved version saved as the reference for all later tracking.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The value creation plan approved by board resolution with conditions minuted and the approved version saved as the reference."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the board date for plan approval with the chair"
                - "Draft the board paper from the charters and bridge"
                - "Hold pre-meetings with the chair and investor directors"
                - "Save the approved version as the plan reference"
            - name: Year-one value creation results review
              description: |-
                ## Purpose
                Twelve months in, the plan has met reality: some levers are ahead, some behind, and the deal team knows far more than at closing. A dedicated review comparing year-one benefits with the approved plan, by initiative, resets expectations for the hold period and gives investors an honest read before the fund's annual reporting.

                ## Milestones
                1. Benefits delivered in year one compared with plan for every initiative.
                2. Reasons for each variance over 10 percent written down.
                3. The forecast to exit updated with the revised outlook per lever.
                4. Results presented to the board and the deal team's investment committee.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A year-one review comparing delivered and planned benefits by initiative, with an updated exit forecast presented to the board."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book the year-one review on the board calendar"
                - "Pull twelve months of reconciled benefits from the log"
                - "Write the reason for each variance over 10 percent"
                - "Present the updated forecast to exit"
            - name: Mid-hold value creation reassessment
              description: |-
                ## Purpose
                Around the middle of the hold, the question shifts from delivering the original plan to what the next owner will pay for. A reassessment that asks which levers are exhausted, which have room left and which new ones would change the equity story keeps the second half of the hold from coasting.

                ## Milestones
                1. Each original lever classed as delivered, in progress or exhausted.
                2. Remaining headroom estimated for levers still in progress.
                3. Two or three new levers proposed with draft charters.
                4. A revised plan for the remaining hold approved by the board.
              priority: medium
              deadlineOffsetDays: 730
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A board-approved revised plan for the remaining hold, with each original lever classed and new levers chartered."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Class each original lever as delivered, in progress or exhausted"
                - "Estimate headroom left on the levers still in progress"
                - "Ask management for three new value ideas with rough sizes"
                - "Present the revised plan to the board for approval"
            - name: Plan progress update for lenders
              description: |-
                ## Purpose
                Lenders who backed the deal on the strength of the plan want to see it working, especially before covenant tests, amendments or a refinancing. A clear update showing delivered benefits, cash generation and revised forecasts, consistent with the compliance certificate, maintains trust and makes later requests easier.

                ## Milestones
                1. The lender update scoped with the CFO and the deal team's debt lead.
                2. Delivered benefits and cash generation shown on the credit agreement's definitions.
                3. Forecast changes explained with the reason and the effect on headroom.
                4. The update delivered and lender questions recorded with answers.

                ## Notes
                Check with fund counsel what may be shared under the credit agreement's information covenants before sending anything beyond the required reporting.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A lender update on credit agreement definitions with delivered benefits, cash and forecast changes, with questions logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the CFO which lender reporting dates fall in the next six months"
                - "Restate delivered benefits on the credit agreement definitions"
                - "Draft the forecast change explanation"
                - "Log lender questions and the answers given"
            - name: Annual value creation offsite with management
              description: |-
                ## Purpose
                Monthly reviews keep the plan running but rarely let the team step back and ask whether it is still the right plan. A yearly offsite with the executive team and the deal lead, away from the business, revisits the bridge, celebrates what was delivered and commits to next year's priorities.

                ## Milestones
                1. A one-day agenda covering results, lessons, priorities and people.
                2. Each owner presents what worked, what did not and what they would change.
                3. Next year's top five priorities agreed and owned.
                4. Actions and decisions circulated within a week.

                ## Notes
                Start from the **Meeting notes** template. Invite one or two rising managers below the executive team; they often see the blockers first.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly offsite held with the executive team, top five priorities agreed with owners and actions circulated within a week."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Pick a date for the offsite with the CEO @recurring(yearly)"
                - "Ask each owner to prepare three slides on results and lessons"
                - "Agree the top five priorities for next year in the session"
                - "Circulate actions and owners within a week"
            - name: Owning the plan as portfolio company CEO
              description: |-
                ## Purpose
                For a CEO, the value creation plan is both the investors' scorecard and a tool for running the business, and the two can pull apart. Setting a personal rhythm for reviewing initiatives, protecting owners' time and speaking candidly with the deal team about what is slipping makes the plan something the CEO leads rather than reports on.

                ## Milestones
                1. A personal monthly hour blocked to review every initiative before the tracker meeting.
                2. Each owner's other duties reviewed so plan work has protected time.
                3. A standing call with the deal lead agreed for candid updates between boards.
                4. Plan objectives built into executive team goals for the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly CEO initiative review held, a standing deal lead call in place and plan objectives written into executive goals."
                cadence: rolling
              tasks:
                - "Block a monthly hour to review each initiative before the tracker meeting"
                - "Ask each owner what they have stopped doing to make room for the plan"
                - "Hold a candid call with the deal lead on progress @recurring(monthly:25)"
                - "Write plan objectives into each executive's annual goals"
            - name: CFO's role in quantifying and evidencing the plan
              description: |-
                ## Purpose
                The CFO is usually the person who has to say whether a claimed benefit is real, while also owning reporting, lenders and the audit. Defining that role clearly, including counting rules, evidence standards and finance capacity, prevents the plan's numbers from becoming a negotiation between owners and finance every month.

                ## Milestones
                1. The CFO's responsibilities for the plan written in half a page.
                2. Finance capacity for plan tracking estimated and a gap filled if needed.
                3. Benefit counting rules signed by the CFO and shared with owners.
                4. A monthly finance sign-off on the benefits total in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written CFO responsibilities for the plan, signed counting rules and a monthly finance sign-off on benefits."
                cadence: rolling
              tasks:
                - "Write the CFO's plan responsibilities in half a page"
                - "Estimate monthly finance hours needed for tracking"
                - "Share signed counting rules with every owner"
                - "Sign off the monthly benefits total before the board pack @recurring(monthly:15)"
            - name: Delivering one initiative as a functional leader
              description: |-
                ## Purpose
                Sales directors, operations heads and procurement leads who own an initiative also have day jobs, and the plan rarely says how both fit into the week. Turning the charter into a personal plan with weekly steps, a team, a clear first win and a way to ask for help makes delivery realistic for someone already working full time.

                ## Milestones
                1. The charter broken into monthly steps for the first two quarters.
                2. Team members named and their time agreed with their managers.
                3. A first visible win defined and delivered within ninety days.
                4. A short monthly update sent to the sponsor without being chased.

                ## Notes
                Ask your sponsor early what you can stop doing. Delivery fails more often from lack of time than lack of skill.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A monthly step plan for two quarters, a named team with agreed time and a first win delivered within ninety days."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Break your charter into monthly steps for six months"
                - "Ask your sponsor which duties you can hand off"
                - "Agree team members' time with their line managers"
                - "Send a short progress note to your sponsor @recurring(monthly:27)"
            - name: Building the value creation model as a deal associate
              description: |-
                ## Purpose
                Associates are often asked to turn the plan into a model linked to the operating case, and the model's structure decides how easy every later update will be. Building initiative-level inputs that flow into the operating case, with a toggle between plan and actuals, gives the deal team one source for the bridge, tracker and returns impact.

                ## Milestones
                1. Initiative inputs set up on one tab with phasing, costs to achieve and owner.
                2. Inputs linked into the operating case so EBITDA and cash update automatically.
                3. A plan versus actual toggle and a returns impact output built.
                4. The model checked by a second person against the bridge.

                ## Notes
                Keep the value creation tab separate from the LBO model's core so the deal model remains auditable.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A model tab with initiative inputs linked to the operating case, a plan versus actual toggle and a returns output, checked by a colleague."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Sketch the input tab layout and agree it with the VP"
                - "Link initiative phasing into the operating case EBITDA lines"
                - "Build the returns impact output for each initiative"
                - "Ask a colleague to check the model totals against the bridge"
            - name: Value creation plan for a minority investment
              description: |-
                ## Purpose
                In a minority or growth deal the investor cannot appoint owners or force initiatives, so a plan written like a buyout plan will be ignored. Agreeing a shorter list of shared priorities with the founders, the information rights to track them and the specific help the investor will provide fits the plan to the influence the deal actually gives.

                ## Milestones
                1. The governance and information rights in the shareholder agreement summarised.
                2. Three to five shared priorities agreed with the founders, in their words.
                3. The investor's specific support offer written down, such as introductions or hiring help.
                4. A quarterly check-in on the priorities agreed.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A shared priority list agreed with the founders, a written support offer and a quarterly check-in in place."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise information and consent rights from the shareholder agreement"
                - "Ask the founders which three outcomes matter most to them this year"
                - "Write the specific support your firm will offer"
                - "Hold the quarterly priorities check-in with the founders @recurring(quarterly)"
            - name: Recovery plan when the business misses the base case
              description: |-
                ## Purpose
                When trading falls well short of the base case, the original plan stops being credible and lenders and the board need a new one quickly. A recovery plan that resets the baseline, separates what management can control from market effects and prioritises cash protects the business and the investment.

                ## Milestones
                1. A revised baseline with the reasons for the miss split between market and execution.
                2. Cash protection actions listed with their effect on liquidity.
                3. A reduced set of initiatives focused on cash and margin, with owners.
                4. The recovery plan approved by the board and shared with lenders as required.

                ## Notes
                Start from the **Remediation plan** template. Involve restructuring and legal advisers early if covenant breach is possible; directors' duties change as liquidity tightens.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A board-approved recovery plan with a revised baseline, cash actions and a reduced initiative set, shared with lenders where required."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Build a thirteen-week cash forecast with the CFO"
                - "Split the miss into market and execution causes"
                - "Cut the initiative list to those that protect cash or margin"
                - "Brief fund counsel on lender notification duties"
            - name: Standalone and stranded cost plan for a carve-out
              description: |-
                ## Purpose
                A business bought from a corporate parent starts life without the parent's IT, finance, HR and procurement, and the costs of replacing them often surprise the plan. Mapping transitional service agreements, standalone costs and the savings from designing leaner functions makes these the first value creation initiatives rather than an unplanned drain.

                ## Milestones
                1. Every transitional service listed with its end date and monthly cost.
                2. Standalone cost estimated for each function against the parent's allocation.
                3. An exit plan from each transitional service with an owner and date.
                4. Savings from leaner standalone functions sized and added to the bridge.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A transitional service exit plan with dates and owners, standalone costs by function and sized savings added to the bridge."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List every transitional service with its end date and fee"
                - "Compare parent cost allocations with standalone estimates per function"
                - "Name an owner and exit date for each service"
                - "Add sized standalone savings to the bridge"
            - name: Commercial excellence pilot with test and control groups
              description: |-
                ## Purpose
                Pricing, cross-sell and sales process changes are easy to claim credit for when the market is rising. Running a pilot in some regions or segments with a matched control group gives evidence that the change caused the uplift, which justifies rolling it out and stands up later in the equity story.

                ## Milestones
                1. One commercial change chosen and test and control groups matched on size and history.
                2. Success metric and minimum detectable uplift agreed before launch.
                3. The pilot run for at least one full sales cycle with results recorded.
                4. A roll-out decision made from the measured difference.

                ## Notes
                Agree with the sales team in advance how they will be paid during the pilot, or the control group will not stay clean.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed pilot with matched test and control groups, a measured uplift and a recorded roll-out decision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one commercial change to pilot"
                - "Match test and control regions on revenue and growth history"
                - "Agree the metric and sales pay rules before launch"
                - "Compare results after one sales cycle and decide on roll-out"
            - name: Sustainability levers sized in value terms
              description: |-
                ## Purpose
                Energy efficiency, waste reduction and supply chain changes can cut costs and widen the buyer universe, but they are often reported separately from the plan with no financial figure. Sizing each sustainability initiative in cost, revenue or risk terms puts it in the same tracker and lets the board compare it with other uses of capital.

                ## Milestones
                1. Current energy, waste and emissions data gathered for the main sites.
                2. Two to four sustainability initiatives sized for cost or revenue effect.
                3. Each sized initiative added to the tracker with an owner and indicator.
                4. Progress reported yearly alongside the fund's responsible investment reporting.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Two to four sustainability initiatives with sized financial effects, owners and indicators, tracked within the main plan."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Request energy and waste invoices for the main sites"
                - "Size two to four initiatives in cost or revenue terms"
                - "Add sized initiatives to the tracker with owners"
                - "Report progress for the fund's annual responsible investment survey @recurring(yearly)"
            - name: Plan stress test against downside lever outcomes
              description: |-
                ## Purpose
                A plan that only works if every lever delivers is a plan that will miss. Stress-testing the bridge with each lever at half its target, delayed by two quarters, or both, shows which levers the returns case cannot do without and where contingency initiatives are needed before they are urgent.

                ## Milestones
                1. Three downside cases run: half delivery, two-quarter delay and both combined.
                2. The effect on EBITDA, cash and covenant headroom recorded for each.
                3. Levers the returns case cannot lose without breaching a threshold identified.
                4. Contingency initiatives drafted for the two most critical levers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three downside cases run with effects on EBITDA, cash and headroom, and contingency initiatives drafted for the two most critical levers."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Add half delivery and delay switches to the value creation model"
                - "Run the three downside cases and record headroom"
                - "Identify the two levers the case depends on most"
                - "Rerun the stress test with current forecasts @recurring(yearly)"
            - name: Look-back on past plans versus delivered value
              description: |-
                ## Purpose
                Firms and individuals rarely check how their value creation plans compared with what was delivered by exit, so the same optimism repeats across deals. A look-back across three or more of your realised or late-stage deals, by lever type, shows which levers you tend to overstate and recalibrates the next plan you write.

                ## Milestones
                1. Three or more realised or late-stage deals chosen with original plans available.
                2. Planned versus delivered value compared by lever type for each deal.
                3. Systematic biases noted, such as pricing overstated or timing too early.
                4. Calibration rules written for your next plan, such as haircuts by lever type.

                ## Notes
                Use only deals you worked on and only within your firm's confidentiality rules. Keep the output as personal calibration notes, not a track record claim.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of planned versus delivered value by lever type across at least three deals, with written calibration rules."
                cadence: cyclic
                effort_hours_estimate: "14"
              tasks:
                - "List three deals you worked on with plans and outcomes available"
                - "Compare planned and delivered value by lever type"
                - "Write calibration rules for your next plan"
                - "Add the latest realised deal to the look-back @recurring(yearly)"
---

# Value Creation Plans

This area is for the deal team member who has to turn an approved thesis into a plan, and for the portfolio company executive who has to deliver it. It starts with the foundations (hypotheses from the IC memo, the entry baseline, the bridge to the exit case, lever inventory, charters, owners and resourcing), then the monthly and quarterly machinery that tracks the plan, the lever skills behind pricing, procurement, sales effectiveness and working capital, the decisions about what to fund or stop, the dated reviews, the variants for a CEO, CFO, initiative owner, associate, minority investor or carve-out, and finally the specialist work of stress-testing and calibrating plans.

What repeats is a weekly owner stand-up, a monthly tracker review and benefits reconciliation against the management accounts, a quarterly reprioritisation and attribution check, and a yearly reset alongside the budget and an offsite with management. The Risk register, Metrics log, Meeting notes and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
