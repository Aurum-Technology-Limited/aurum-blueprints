---
id: finance-accounting.cost-centre-overhead-allocation
name: Cost Centre & Overhead Allocation
description: "Cost centres with named owners, overhead pools and drivers people accept, a monthly allocation run that nets to zero, and unit results managers trust enough to act on."
category: business
version: 1.0.0
tags: [finance-accounting, cost-centre-overhead-allocation, manager, enterprise, team, overheads, cost-allocation, shared-services]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - onboarding-30-60-90
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cost Centre & Overhead Allocation
          description: "Setting up cost centres and allocating shared overheads fairly across teams, products or sites so profitability by unit is visible and credible."
          projects:
            - name: Decisions the overhead allocation must support
              description: |-
                ## Purpose
                Allocations often get built to fill a reporting format and then nobody uses them, because no one asked which decision they were meant to inform. Before touching a driver, write down the three to five questions leadership actually wants answered, such as whether a site earns its rent, whether a product line covers its share of support, or what an internal service really costs. Every later choice of pool, driver and level of detail is then tested against that short list.

                ## Milestones
                1. Conversations held with the finance lead and at least three senior budget holders on what they would decide differently with fully loaded costs.
                2. A written list of no more than five decision questions, each naming who asks it and how often.
                3. Each question tagged as needing full cost, contribution or controllable cost only.
                4. The list agreed by the finance lead and stored alongside the allocation policy.

                ## Notes
                If nobody can name a decision, a clean direct-cost view may be all the business needs. Let the decisions set the allocation effort, not the length of the chart of accounts.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of up to five decision questions the allocation must answer, each with an owner and a cost view, signed off by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the finance lead which decisions allocated costs should inform"
                - "Interview three budget holders on what fuller costs would change for them"
                - "Write each decision question with who asks it and how often"
                - "Tag each question as full cost, contribution or controllable cost"
            - name: Cost centre hierarchy from company to team
              description: |-
                ## Purpose
                Nobody can roll up a flat list of 140 cost centres for a division review or a site comparison, so finance ends up rebuilding the grouping in a spreadsheet every month. One hierarchy, with company, division, department and cost centre levels and a clear rule for what earns its own code, lets every report roll up the same way. Keep it to the levels people actually manage rather than the full org chart.

                ## Milestones
                1. A written rule for when a team gets its own cost centre, for example a named budget holder and annual spend above an agreed threshold.
                2. Every active cost centre placed under exactly one parent, with no orphans and no double parents.
                3. Alternative rollups, such as by site or by function, defined as reporting attributes rather than extra levels.
                4. The hierarchy loaded or mapped in the ledger and a trial report rolled up to the trial balance total.

                ## Notes
                Five levels is usually the most anyone reads. When function and geography compete, keep one as the spine and hold the other as an attribute.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active cost centre sits under one parent in a documented hierarchy, and a rolled-up report reconciles to the trial balance total."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the current cost centre list with twelve months of spend"
                - "Write the rule for when a team earns its own cost centre"
                - "Assign each cost centre to exactly one parent node"
                - "Set up site and function rollups as reporting attributes"
                - "Run a rolled-up report and tie it to the trial balance"
            - name: Cost centre owner and backup register
              description: |-
                ## Purpose
                A cost centre without a named owner collects miscoded invoices and allocated charges that nobody questions until year end. A register naming the accountable budget holder and a backup for each code gives finance someone to send statements to, someone to approve reclasses and someone to answer for the numbers. It also shows quickly where one manager holds twenty codes they cannot realistically watch.

                ## Milestones
                1. Every active cost centre listed with an owner, a backup and the owner's reporting line.
                2. Owners confirmed in writing rather than assumed from last year's list.
                3. Cost centres with no willing owner flagged for merger or closure.
                4. The register published where budget holders and the finance team can both see it.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register gives every active cost centre a confirmed owner and backup, with no code left unowned for more than one month."
                cadence: rolling
              tasks:
                - "List cost centres whose recorded owner has left or changed role"
                - "Email each owner asking them to confirm they accept the cost centre"
                - "Name a backup for every cost centre in the register"
                - "Re-confirm owners after starters, leavers and internal moves @recurring(quarterly)"
            - name: Cost centre rules for each expense account
              description: |-
                ## Purpose
                Some accounts, such as audit fees or group insurance, should never carry a team cost centre, while travel and contractors always should. Writing down which accounts require a cost centre, which take a default and which post only to a central holding code stops the same arguments every month and gives the allocation clean inputs. The rules work best enforced as ledger validation rather than kept in a memo.

                ## Milestones
                1. Every expense account classed as cost centre required, defaulted or central only.
                2. A default cost centre named for each defaulted account.
                3. Ledger validation switched on so required accounts reject a posting with no cost centre.
                4. The rules shared with everyone who codes bills, expenses and journals.

                ## Notes
                Coding individual transactions belongs with bookkeeping. This project sets the rules the coders follow so the allocation starts from the right place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each expense account has a written cost centre rule, and the ledger blocks postings that break the required-cost-centre rule."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the expense accounts with their current cost centre usage"
                - "Class each account as required, defaulted or central only"
                - "Name the default cost centre for each defaulted account"
                - "Ask the system administrator to enforce the required-cost-centre rule"
            - name: Inventory of shared overhead pools
              description: |-
                ## Purpose
                Before deciding how to spread overheads you need to know what they are and how big each one is. Grouping the year's shared costs into a handful of pools, such as premises, IT, people services, finance and insurance, with an annual value for each, shows where allocation effort matters: a pool worth two per cent of overheads rarely deserves a clever driver. The inventory becomes the input list for drivers, the policy and the monthly run.

                ## Milestones
                1. All shared costs from the last full year grouped into no more than ten named pools.
                2. Each pool sized in currency and as a share of total overheads.
                3. The cost centres that hold each pool before allocation identified.
                4. Pools below an agreed size marked for simple treatment or no allocation at all.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A pool list covering every shared cost from the last full year, each with an annual value, a holding cost centre and a treatment flag."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull last year's costs for every central and shared cost centre"
                - "Group the shared costs into no more than ten overhead pools"
                - "Size each pool and its share of total overheads"
                - "Mark the small pools for simple treatment or none"
            - name: Direct, shared and central cost classification
              description: |-
                ## Purpose
                Arguments about allocations often turn out to be arguments about whether a cost was shared at all. A software licence bought for one team is direct, the office internet is shared, and the board's fees are central and arguably belong to no unit. Setting a three-way rule once, with examples from your own ledger, means each new cost lands in the right place without a debate.

                ## Milestones
                1. A written definition of direct, shared and central costs with two real examples of each.
                2. Borderline cost types listed with a recorded decision for each.
                3. Costs currently allocated that could be charged directly identified and moved.
                4. The classification added to the allocation policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A three-way classification with worked examples is in the policy, and the five largest borderline cost types each have a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft one-line definitions of direct, shared and central costs"
                - "Find two examples of each type in last quarter's ledger"
                - "Decide the treatment of the five largest borderline cost types"
                - "Recode shared costs that can be charged directly to the teams using them"
            - name: Cost driver shortlist for each overhead pool
              description: |-
                ## Purpose
                A driver is credible when a budget holder can see why their share went up: more people, more floor space, more support tickets. Shortlisting two candidate drivers per pool and testing each for cause and effect, availability of data and how easily a manager could game it gives you a defensible choice instead of whatever was used last year. Headcount is the default for good reasons, but it is wrong for warehouses and cloud bills.

                ## Milestones
                1. Two candidate drivers listed for every overhead pool.
                2. Each candidate scored for causal link, data availability, cost to collect and resistance to gaming.
                3. One driver chosen per pool with the reason written in a sentence.
                4. The choices walked through with two budget holders before the policy is drafted.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every overhead pool has a chosen driver with a one-sentence rationale and scores against four criteria, reviewed by two budget holders."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List two candidate drivers for each overhead pool"
                - "Score each candidate for cause, data, collection cost and gaming risk"
                - "Choose one driver per pool and write down why"
                - "Walk two budget holders through the choices and note their objections"
            - name: Driver data sources and named suppliers
              description: |-
                ## Purpose
                Allocations break most often because the driver data arrives late or wrong: a headcount report that still includes leavers, a floor plan from before the move. Agreeing where each driver comes from, who supplies it, the date it is cut and its format means the monthly run starts from data you can trust. It also tells HR, facilities and IT that their numbers move money between teams.

                ## Milestones
                1. A source system and a named supplier recorded for each driver.
                2. A cut-off date and delivery day agreed with each supplier.
                3. A standard file layout agreed, keyed on cost centre codes rather than team names.
                4. One trial month of driver data received on time from every source.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each driver has a named supplier, source, cut-off and delivery day, and one full month of data arrived on time in the agreed layout."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the system and the person that supply each driver"
                - "Agree a cut-off and a delivery day with each supplier"
                - "Send each supplier a file layout keyed on cost centre codes"
                - "Run one trial month and note which files arrived late or wrong"
            - name: Written overhead allocation policy
              description: |-
                ## Purpose
                Without a policy, the method lives in one analyst's spreadsheet and shifts whenever someone senior complains. A short document covering pools, drivers, timing, which cost centres receive charges, how queries are handled and who may change the method gives auditors, budget holders and your successor the same answer. Aim for something a new manager can read in fifteen minutes.

                ## Milestones
                1. A policy of no more than six pages covering pools, drivers, timing, receivers, queries and change control.
                2. A worked example showing one pool allocated end to end.
                3. Approval from the finance director or equivalent recorded with a date.
                4. The policy published to all budget holders with a short covering note.

                ## Notes
                State that the method is fixed for the financial year unless the change process is followed. Mid-year driver changes are the commonest source of mistrust.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved allocation policy with a worked example is published to all budget holders, with its approval date and owner recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the agent to draft a policy outline from your pool and driver choices"
                - "Write a worked example allocating one pool end to end"
                - "Get the policy approved by the finance director"
                - "Publish the policy to budget holders with a covering note"
                - "Review the policy before each budget cycle starts @recurring(yearly)"
            - name: Monthly overhead allocation run
              description: |-
                ## Purpose
                Allocation journals posted on different days each month, by whoever has time, produce unit results that shift when someone looks twice. A fixed run on the same working day, using locked driver data and the approved model, gives budget holders a stable statement and the close a predictable step. Posting through dedicated allocation accounts rather than straight into expense lines keeps the original cost visible.

                ## Milestones
                1. A run sheet listing the steps, inputs, checks and approver for the monthly allocation.
                2. Allocations posted through allocation-out and allocation-in accounts so original costs stay visible.
                3. Journals approved by someone other than the preparer.
                4. Three consecutive months posted on the planned working day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Allocation journals have been posted through allocation accounts on the planned working day, with a separate approver, for three months running."
                cadence: rolling
              tasks:
                - "Write the run sheet of steps, inputs, checks and approver"
                - "Set up dedicated allocation-out and allocation-in accounts"
                - "Post the monthly allocation journals from locked driver data @recurring(monthly:4)"
                - "Attach the model output to each journal for the approver"
            - name: Monthly driver data refresh
              description: |-
                ## Purpose
                Last month's headcount allocates this month's IT costs only if somebody remembers to update it. A short routine that collects each driver on its cut-off, compares totals with the prior month and freezes the file before the run makes stale data visible before it moves money. Big swings get a question to the supplier, not a silent posting.

                ## Milestones
                1. Every driver file received and saved to a dated folder before the run.
                2. Each driver total compared with the prior month, with swings above an agreed threshold explained.
                3. Driver files locked read-only once the run starts.
                4. A short note of late or corrected files kept for the quarterly drift review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months every driver file was received, compared with the prior month and locked before the allocation run."
                cadence: rolling
              tasks:
                - "Create a dated folder structure for each month's driver files"
                - "Collect every driver file and compare totals with last month @recurring(monthly:2)"
                - "Query the supplier on any swing above the agreed threshold"
                - "Lock the driver files read-only before the run starts"
            - name: Allocation zero-balance and completeness check
              description: |-
                ## Purpose
                An allocation that leaves a few thousand stranded in a central pool, or charges a closed cost centre, is wrong in a way the company profit total will never reveal. Checking each month that every pool allocated out exactly what it held, that receivers total the same amount and that no excluded code received a charge catches the errors that otherwise surface at audit. Once built, the check takes about ten minutes.

                ## Milestones
                1. A check sheet showing, by pool, the amount held, allocated out and left over.
                2. Allocation-out and allocation-in accounts netting to zero for the month.
                3. A test confirming no closed, excluded or central-only cost centre received a charge.
                4. The signed check filed with the month's close support.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's check shows every pool fully allocated, allocation accounts netting to zero and no charges to excluded codes, signed and filed."
                cadence: rolling
              tasks:
                - "Build a check sheet showing held, allocated and left over by pool"
                - "Confirm the allocation accounts net to zero after the run @recurring(monthly:5)"
                - "Test that no closed or excluded cost centre received a charge"
                - "File the signed check with the month's close support"
            - name: Monthly cost centre statement for budget holders
              description: |-
                ## Purpose
                Managers ignore allocated costs when they arrive as one unexplained line called overhead recharge. A monthly statement that shows the direct costs they control, then each allocated pool with its driver and their share, turns the charge into something they can question or act on. One page per cost centre is the limit if you want it read.

                ## Milestones
                1. A one-page layout separating controllable direct costs from each allocated pool.
                2. Driver quantity and percentage share shown beside every allocated line.
                3. Statements sent to every owner within eight working days of month end.
                4. Feedback gathered from owners on the first three sends and the layout adjusted.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every cost centre owner receives a one-page statement within eight working days of month end, showing direct costs and each allocated pool with its driver."
                cadence: rolling
              tasks:
                - "Design a one-page statement with controllable and allocated sections"
                - "Show the driver quantity and share beside each allocated line"
                - "Send statements to every cost centre owner @recurring(monthly:8)"
                - "Ask owners after the first three sends what is still unclear"
            - name: Cost centre request, change and closure process
              description: |-
                ## Purpose
                Cost centres multiply quietly: a new project, a manager who wants their own code, a team merged two years ago but never closed. A simple request form with criteria and an approver, plus a closure checklist, keeps the hierarchy usable and stops charges landing on codes nobody watches.

                ## Milestones
                1. A request form asking for owner, parent, expected annual spend and reason.
                2. Approval criteria that match the hierarchy rule, with a named approver.
                3. A closure checklist covering open commitments, recurring journals, driver files and the owner register.
                4. Cost centres with no postings for six months reviewed and closed or justified.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every cost centre opened or closed in the last quarter went through the form or checklist, and none has sat dormant six months without a decision."
                cadence: rolling
              tasks:
                - "Write a request form asking for owner, parent, spend and reason"
                - "Draft the closure checklist for commitments, journals and driver files"
                - "Route the next new cost centre request through the form"
                - "Review cost centres with no postings in six months @recurring(quarterly)"
            - name: Pre-allocation cost centre misposting sweep
              description: |-
                ## Purpose
                Fair allocations depend on clean direct costs underneath them: a contractor invoice on the wrong team inflates that team's cost and, where a driver is based on spend, everyone else's share too. A monthly sweep of the largest postings by cost centre just before the run gets corrections made before statements go out, rather than after a manager complains.

                ## Milestones
                1. A report of the twenty largest postings per cost centre for the month.
                2. Mismatches flagged against the owner register and supplier history.
                3. Reclass journals raised and approved before the allocation run.
                4. Repeat causes, such as a supplier always defaulting to the wrong code, fixed at source.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the twenty largest postings per cost centre are reviewed and reclasses posted before the allocation run, with repeat causes fixed."
                cadence: rolling
              tasks:
                - "Build a report of the twenty largest postings per cost centre"
                - "Review the report and flag postings sitting on the wrong team @recurring(monthly:3)"
                - "Raise reclass journals before the allocation run"
                - "Fix supplier defaults that keep landing on the wrong cost centre"
            - name: Allocation query and dispute log
              description: |-
                ## Purpose
                When a budget holder challenges a charge by email, the answer gets lost and the same question returns next quarter. A log of every query, the response, whether anything changed and who decided turns disputes into evidence: either the method holds up, or the pattern shows exactly where it needs work.

                ## Milestones
                1. A log with date, cost centre, query, response, outcome and decider.
                2. A target response time agreed and written into the policy.
                3. Open queries reviewed monthly, with none older than one month.
                4. Recurring themes summarised for the annual policy review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every allocation query in the period is logged with a response and outcome, and none has stayed open for more than a month."
                cadence: rolling
              tasks:
                - "Set up the query log with outcome and decider columns"
                - "Add the target response time to the allocation policy"
                - "Review open queries and chase overdue answers @recurring(monthly:15)"
                - "Ask the agent to summarise the year's query themes for the policy review"
            - name: Internal service rate card
              description: |-
                ## Purpose
                When IT, facilities or a shared finance team recharge by unit, such as per laptop, per desk or per invoice processed, budget holders need a published price before the year starts, not a surprise. A rate card built from each service's budget and planned volumes lets managers plan their consumption and makes the recharge feel like a purchase rather than a tax.

                ## Milestones
                1. A list of recharged services, each with a unit, a rate and what the rate includes.
                2. Each rate built from the service budget divided by planned volume, with workings kept.
                3. Rates approved and published before budget holders submit their plans.
                4. Mid-year rate changes limited to what the policy allows.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rate card for every unit-priced internal service, with workings, is approved and published before the budget submission deadline each year."
                cadence: cyclic
              tasks:
                - "List the internal services that are charged per unit"
                - "Build each rate from the service budget and planned volume"
                - "Write what each rate includes and excludes"
                - "Publish the approved rate card ahead of budget submissions @recurring(yearly)"
            - name: Quarterly driver drift review
              description: |-
                ## Purpose
                Drivers chosen two years ago slowly stop reflecting reality: a hybrid working policy halves desk use, a new system shifts IT effort from sales to operations. Comparing each major driver every quarter with an independent signal, such as badge data against headcount or ticket volume against user counts, shows when a driver needs changing at the next refresh rather than mid-year.

                ## Milestones
                1. One independent check signal named for each major driver.
                2. A quarterly comparison of driver share against the check signal by cost centre.
                3. Gaps above an agreed threshold listed with a likely cause.
                4. Driver changes proposed for the annual refresh, not applied mid-year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each quarter every major driver is compared with an independent signal, and gaps above threshold are listed with a proposal for the annual refresh."
                cadence: rolling
              tasks:
                - "Name an independent check signal for each major driver"
                - "Compare driver shares with their check signals @recurring(quarterly)"
                - "List gaps above the threshold with their likely cause"
                - "Add proposed driver changes to the annual refresh list"
            - name: Recharge under and over recovery tracker
              description: |-
                ## Purpose
                Rate cards set on planned volumes will over or under recover as real usage moves, and a large balance left in a service cost centre at year end becomes an awkward true-up. Tracking recovered against actual cost each month shows early whether rates, volumes or the service's own spending are off, so the conversation happens in month four instead of month twelve.

                ## Milestones
                1. A monthly table of actual service cost, amount recharged and remaining balance for each service.
                2. Year-to-date recovery shown as a percentage against an agreed tolerance band.
                3. Services outside tolerance explained to the service owner and the finance lead.
                4. A forecast of each service's year-end balance updated every quarter.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly recovery tracker shows actual cost, recharge and balance for every rate-carded service, with out-of-tolerance services explained."
                cadence: rolling
              tasks:
                - "Set up a recovery log from the metrics log template"
                - "Record actual cost and amount recharged for each service @recurring(monthly:10)"
                - "Explain services outside the tolerance band to their owners"
                - "Forecast each service's year-end balance at quarter end"
            - name: Allocation model change log and versioning
              description: |-
                ## Purpose
                Six months after a quiet tweak to the IT driver, nobody can explain why the sales team's costs jumped, least of all the auditor. Keeping the model under version control, with a log stating what changed, why, who approved it and from which period, makes every allocation reproducible. It is also what lets a new analyst take the model over without fear.

                ## Milestones
                1. The model stored in one controlled location with dated versions.
                2. A change log recording each change, its reason, approver and effective period.
                3. Any past month's allocation reproducible from the archived version and driver files.
                4. The change log reviewed quarterly against the policy's change rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model change in the last year appears in the log with an approver and effective period, and a sampled past month reproduces exactly."
                cadence: rolling
              tasks:
                - "Move the allocation model to one controlled location"
                - "Start a change log with reason, approver and effective period"
                - "Reproduce one past month from the archived files as a test"
                - "Check the change log against the policy's change rules @recurring(quarterly)"
            - name: Direct, step-down and reciprocal allocation methods
              description: |-
                ## Purpose
                Support departments serve each other as well as the business: IT supports HR, and HR recruits for IT. Knowing how the direct, step-down and reciprocal methods treat those cross-services, and how much the answer changes in your own numbers, lets you choose a method on evidence rather than habit. A worked example on two real pools makes the difference concrete.

                ## Milestones
                1. The three methods explained in your own words, one paragraph each.
                2. A worked example applying each method to two real support pools.
                3. The difference in allocated cost by receiving unit shown side by side.
                4. A recommendation on which method the policy should use, with the reason.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked comparison of direct, step-down and reciprocal methods on two real pools, with a recommendation filed with the policy."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a management accounting chapter on service department allocation"
                - "Pick two support pools that serve each other"
                - "Allocate both pools by the direct, step-down and reciprocal methods"
                - "Write a recommendation on which method the policy should use"
            - name: Cause and effect in choosing cost drivers
              description: |-
                ## Purpose
                Drivers fail when they are chosen for convenience instead of cause: allocating marketing by revenue rewards the slow sellers and penalises the team that grew. Practising the simple test, would a change in this driver actually change the cost, on your own pools builds the judgement to defend a driver in a budget meeting.

                ## Milestones
                1. The difference between cause, benefit received and ability to bear written down with an example of each.
                2. Each current driver tested against the question of what would really change the cost.
                3. Any driver resting on ability to bear rather than cause identified.
                4. A short plain-words note for budget holders explaining the driver logic.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every current driver has been tested for cause and effect, with the results and a plain-words note for budget holders filed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write one example each of cause, benefit and ability-to-bear drivers"
                - "Ask of each current driver what would actually change the cost"
                - "Flag the drivers that rest on ability to bear"
                - "Draft a plain-words note on driver logic for budget holders"
            - name: Activity-based costing fundamentals
              description: |-
                ## Purpose
                Activity-based costing traces overheads to activities such as processing orders or onboarding customers, then to whatever uses those activities. It often shows that small, complex customers or products cost far more to serve than a volume driver suggests. Learning the four steps on one overhead pool tells you whether the extra effort would change any decision you care about.

                ## Milestones
                1. The four steps summarised: resources, activities, activity drivers and cost objects.
                2. One overhead pool mapped to four to six activities with estimated effort shares.
                3. An activity rate calculated for each activity.
                4. The activity-based result compared with the current driver for the same pool.

                ## Notes
                Activity-based costing earns its keep only where overheads are large and the things being costed differ in complexity. Test it on one pool before proposing more.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One overhead pool costed by activity and compared with the current method, with a written view on whether to go further."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Study the four steps of activity-based costing"
                - "Interview the pool's team on how their time splits across activities"
                - "Calculate an activity rate for each activity"
                - "Compare the activity-based result with today's allocation"
            - name: Controllable and non-controllable cost reporting
              description: |-
                ## Purpose
                Holding a manager to account for a rent charge they cannot influence breeds cynicism about every number on their statement. Separating controllable costs, which a manager decides, from allocated costs they can only influence through usage, and from those they cannot touch at all, lets you set targets on the right lines and keep the full allocation for profitability rather than performance.

                ## Milestones
                1. Definitions of controllable, influenceable and non-controllable costs with your own examples.
                2. Each line on the cost centre statement tagged with one of the three.
                3. Performance targets in the budget limited to controllable and influenceable lines.
                4. The tagging explained to budget holders with the next statement send.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every statement line is tagged controllable, influenceable or non-controllable, and budget targets sit only on the first two categories."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write definitions of the three cost categories with real examples"
                - "Tag every line on the statement with one category"
                - "Check that budget targets sit only on controllable and influenceable lines"
                - "Explain the tags in a note sent with the next statements"
            - name: Fixed overheads and the volume effect on allocations
              description: |-
                ## Purpose
                When one division shrinks, the fixed costs it used to absorb move to everyone else, and a manager whose spending fell sees their allocated charge rise. Understanding how fixed overheads behave under volume-based drivers, and modelling one real case, means you can explain the effect before it lands and judge whether a budget-rate method would be fairer.

                ## Milestones
                1. The fixed and variable split estimated for each overhead pool.
                2. A worked example showing how a fall in one unit's driver raises the others' charges.
                3. The size of the effect estimated for next year's planned changes.
                4. A briefing prepared for the budget holders most affected.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example of the volume effect on your own pools, with next year's estimated impact by unit, shared with the affected budget holders."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Estimate the fixed share of each overhead pool"
                - "Model what happens to other units when one unit's driver falls"
                - "Estimate next year's effect from planned volume changes"
                - "Brief the budget holders most affected by the shift"
            - name: Full cost versus contribution in unit decisions
              description: |-
                ## Purpose
                A product line or site that shows a loss after allocations may still be paying for overheads that will not disappear if it closes, and cutting it can leave the rest of the business worse off. Learning to read the same unit at contribution, avoidable cost and full cost, and knowing which decisions call for which view, stops allocations driving closures the numbers do not support.

                ## Milestones
                1. A one-page explanation of contribution, avoidable cost and full cost with an example from your business.
                2. One loss-making unit shown at all three views side by side.
                3. The overheads that would remain if that unit closed listed.
                4. A rule added to the policy on which view to use for exit, pricing and performance decisions.

                ## Notes
                Closing a unit, re-spreading its overheads and finding the next unit now looks unprofitable is a well-known trap, sometimes called the death spiral.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One loss-making unit analysed at contribution, avoidable and full cost, and a policy rule recorded on which view each decision type uses."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write one-page definitions of contribution, avoidable and full cost"
                - "Pick one unit that shows a loss after allocations"
                - "List the overheads that would stay if that unit closed"
                - "Add a rule on which cost view each decision type uses"
            - name: Reading an allocated cost statement as a budget holder
              description: |-
                ## Purpose
                Most managers open their cost centre statement, check the big direct lines and skip the allocated section, then are surprised by it in the budget round. An hour spent learning how each allocated line is built, which driver moves it and what you could change in your own usage gives you real influence over a quarter or more of your cost base.

                ## Milestones
                1. Each allocated line on your statement matched to its pool and driver.
                2. Your driver quantities checked against what you know, such as your own headcount and desks.
                3. One usage change identified that would reduce an allocated charge.
                4. Questions sent to finance through the query log rather than by side email.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The budget holder can name the pool and driver behind every allocated line and has identified one usage change that lowers a charge."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Match every allocated line on your statement to its pool and driver"
                - "Check your driver quantities against your own team records"
                - "Find one usage change that would lower an allocated charge"
                - "Log any questions about the charges with finance"
            - name: Allocation spreadsheet to system decision
              description: |-
                ## Purpose
                Forty tabs and one author make a spreadsheet allocation model a key-person risk and slow to audit, yet an allocation module or planning tool costs money and set-up time. Comparing three options, staying in the spreadsheet, using the ledger's own allocation feature or adopting a separate costing or planning tool, against the same requirements gives a decision you can defend at budget time.

                ## Milestones
                1. Requirements listed: pools, drivers, step order, audit trail, reporting and who runs it.
                2. Three options scored against the requirements, with set-up and running costs.
                3. A demonstration or trial run of the strongest option on one real month.
                4. A recommendation approved and recorded with the reasons and the rejected options.

                ## Notes
                Start from the **Purchase decision** template. Choosing the wider accounting system is a separate exercise; this decision covers only where the allocation logic runs.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on where allocations run, with three options scored, a trial month completed and approval by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List the requirements the allocation tool must meet"
                - "Score the spreadsheet, the ledger feature and a specialist tool"
                - "Run one real month through the strongest option"
                - "Record the decision and why the other options lost"
            - name: Floor space versus headcount driver for premises
              description: |-
                ## Purpose
                Premises costs are often spread by headcount because the data is easy, yet a warehouse team of eight using a third of the building then pays almost nothing. Modelling headcount, occupied floor space and desk bookings on your real numbers shows how far each team's charge would move and whether the extra data effort is worth it.

                ## Milestones
                1. Premises cost allocated three ways: headcount, floor space and desk bookings.
                2. The change in each team's charge shown in currency and as a percentage.
                3. The yearly effort of keeping floor space data current estimated with facilities.
                4. A driver choice recorded and added to the annual refresh.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Premises costs modelled on three drivers with the impact on each team, and a driver choice recorded for the next refresh."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask facilities for square metres occupied by each cost centre"
                - "Allocate premises cost by headcount, floor space and desk bookings"
                - "Show each team's change in charge under each driver"
                - "Record the chosen premises driver for the next annual refresh"
            - name: Showback before chargeback for IT and cloud costs
              description: |-
                ## Purpose
                Charging teams for cloud and software usage overnight causes disputes, because the tagging is never as clean as everyone assumed. Running showback first, sending each team its usage cost for a few months without posting anything, lets teams see and trim their consumption and lets finance prove the data before real money moves.

                ## Milestones
                1. A monthly usage cost report by cost centre for cloud and major software.
                2. Showback statements sent for at least three months with no journal posted.
                3. Disputes and tagging gaps resolved, with the unattributed share below an agreed level.
                4. A decision recorded on whether and from which month to move to chargeback.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three months of showback statements sent, unattributed usage below the agreed level, and a dated decision on moving to chargeback."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree with IT which cloud and software costs to show by cost centre"
                - "Send each team its showback statement @recurring(monthly:9)"
                - "Track unattributed usage and the teams disputing their figures"
                - "Decide whether to move to chargeback and from which month"
            - name: Budget rate versus actual cost allocation decision
              description: |-
                ## Purpose
                Allocating actual overhead each month passes a service team's overspend straight to everyone else, while allocating at a budget or standard rate keeps receivers' charges stable and leaves the variance with the service owner who caused it. Choosing deliberately between the two, and deciding what happens to the variance, settles one of the commonest fairness complaints.

                ## Milestones
                1. Last year's allocations recalculated at budget rates for comparison.
                2. The variance each service cost centre would have kept under budget rates shown.
                3. A rule chosen for the variance: absorbed centrally, trued up yearly or charged back.
                4. The decision written into the policy with an effective date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between budget-rate and actual-cost allocation, with a variance rule, is written into the policy with an effective date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Recalculate last year's allocations at budget rates"
                - "Show the variance each service cost centre would have kept"
                - "Choose how the variance is treated at year end"
                - "Write the decision into the policy with an effective date"
            - name: Pruning overhead pools and drivers
              description: |-
                ## Purpose
                Allocation models grow a pool for every complaint until fourteen drivers each move a few thousand and nobody can explain the result. Merging small pools, retiring drivers that move less than a set amount and cutting steps from the sequence usually changes unit results very little and makes the whole method believable again.

                ## Milestones
                1. Each pool and driver listed with the amount it moves and the effort to maintain it.
                2. Pools and drivers below an agreed threshold proposed for merger or removal.
                3. The simplified model run in parallel for one month, with differences by unit shown.
                4. The simpler model adopted at the next refresh and budget holders told why.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The count of pools or drivers has fallen, a parallel month shows unit differences within tolerance, and the simpler model is adopted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each pool and driver with the amount it moves"
                - "Mark pools and drivers below the threshold for merger or removal"
                - "Run the simplified model in parallel for one month"
                - "Tell budget holders what changed in the model and why"
            - name: Tagging cloud and software spend to cost centres
              description: |-
                ## Purpose
                Cloud bills and software subscriptions are now a large slice of overheads, and one untagged account can leave tens of thousands sitting in a central IT pool. Requiring a cost centre tag on every cloud account and subscription, and chasing the untagged remainder each month, moves cost out of allocation and into direct charges where it belongs.

                ## Milestones
                1. A tagging standard agreed with IT, naming the cost centre field and allowed values.
                2. Every cloud account and major subscription mapped to an owning cost centre.
                3. Untagged spend measured monthly as a share of the total.
                4. The untagged share held below an agreed level for two consecutive months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Untagged cloud and subscription spend has stayed below the agreed share of the total for two consecutive months."
                cadence: rolling
              tasks:
                - "Agree the tagging standard and allowed cost centre values with IT"
                - "Map every cloud account and major subscription to an owner"
                - "Review untagged spend and chase the account owners @recurring(monthly:18)"
                - "Ask procurement to require a cost centre on new subscriptions"
            - name: Allocation sensitivity test on unit results
              description: |-
                ## Purpose
                If changing one driver turns a site from profit to loss, leadership should know that before deciding anything on the number. Rerunning each major pool on its main and its alternative driver, and showing how far each unit's result moves, tells you which conclusions are solid and which depend on a method choice.

                ## Milestones
                1. Each major pool rerun on its alternative driver from the shortlist.
                2. The range of each unit's result shown in a single table.
                3. Units whose profit sign changes under any reasonable method flagged.
                4. A note added to the unit report stating which results are method sensitive.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sensitivity table shows each unit's result range across alternative drivers, and method-sensitive units are flagged in the unit report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Rerun each major pool on its alternative driver"
                - "Build a table of each unit's result range"
                - "Flag the units whose profit sign flips"
                - "Add a method-sensitivity note to the unit report"
            - name: Corporate costs held at the centre
              description: |-
                ## Purpose
                Some costs, such as the board, investor relations, group audit and the chief executive's office, exist because the company exists and would not fall if any one unit closed. Deciding deliberately which of these stay at the centre, shown as a single line below unit results, stops units being charged for things they cannot influence and makes the unit numbers fairer to compare.

                ## Milestones
                1. Candidate corporate costs listed with their annual value.
                2. Each candidate tested on whether it would fall if any single unit closed.
                3. A list of centre-held costs agreed with the finance director.
                4. Unit reports showing a corporate costs line below the unit totals.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of corporate costs held at the centre is approved and shown as one line below unit results in the unit report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List candidate corporate costs with their annual values"
                - "Test whether each would fall if any one unit closed"
                - "Agree the centre-held list with the finance director"
                - "Move the agreed costs to a corporate line in the unit report"
            - name: Annual allocation refresh for the budget
              description: |-
                ## Purpose
                Drivers, pools and rate cards should change once a year, before budgets are set, so managers plan with the charges they will actually receive. Running the refresh in the month before budget submissions, drawing on the drift review, the query log and any reorganisation, keeps the method current without mid-year surprises.

                ## Milestones
                1. Proposed changes from the drift review and query log compiled into one list.
                2. Next year's pools, drivers and rates modelled, with the impact on each unit.
                3. Changes approved and the policy updated with the new effective date.
                4. Indicative allocated charges sent to budget holders before they submit their budgets.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Next year's pools, drivers and rates are approved and indicative charges reach every budget holder before the budget submission date."
                cadence: cyclic
              tasks:
                - "Compile proposed changes from the drift review and query log"
                - "Model next year's allocations and the impact on each unit"
                - "Approve the changes and update the policy's effective date"
                - "Send indicative allocated charges to budget holders @recurring(yearly)"
            - name: Year-end allocation true-up
              description: |-
                ## Purpose
                Allocations made through the year on estimates or budget rates leave balances in service cost centres and drivers that were never corrected. A year-end true-up recalculates the full year on final drivers and actual costs, posts the difference by unit and explains it, so annual unit results match the method that was promised.

                ## Milestones
                1. Full-year driver files finalised and locked.
                2. Full-year allocations recalculated and compared with the twelve monthly postings.
                3. True-up journals posted by cost centre with approval.
                4. A one-page true-up summary sent to budget holders with the year-end statements.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The full-year true-up is recalculated on final drivers, posted with approval and explained to budget holders in a one-page summary."
                cadence: cyclic
              tasks:
                - "Lock the full-year driver files"
                - "Recalculate the full year and compare with the monthly postings"
                - "Post the approved true-up journals by cost centre @recurring(yearly)"
                - "Send budget holders a one-page true-up summary"
            - name: Cost centre remap after a reorganisation
              description: |-
                ## Purpose
                Reorganisations that move teams between divisions break rollups, owner registers, driver files and year-on-year comparisons in one go. Planning the remap before the effective date, with an old-to-new mapping table and restated history for comparison, keeps management reporting continuous through the change.

                ## Milestones
                1. An old-to-new mapping covering every affected cost centre, owner and parent.
                2. Driver files and the allocation model updated for the effective month.
                3. Prior-year comparatives restated on the new structure for management reporting.
                4. The first month on the new structure allocated and checked with no orphan charges.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every affected cost centre is remapped by the effective date, comparatives are restated and the first month allocates with no orphan charges."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Get the new organisation chart and effective date from HR"
                - "Build an old-to-new cost centre mapping table"
                - "Update driver files and the model for the effective month"
                - "Restate prior-year comparatives on the new structure"
            - name: Cost centre set-up for a new site
              description: |-
                ## Purpose
                New warehouses, clinics or offices usually start spending months before they open, and if those costs land in a head office code the site's first year looks better than it was. Setting up its cost centres, owners, driver entries and a pre-opening cost rule before the first invoice keeps its results honest from day one.

                ## Milestones
                1. Cost centres for the new site created under the right parent, with owners named.
                2. A rule agreed for pre-opening costs: held on the site or kept as a separate project.
                3. The site added to every driver file, including floor space and headcount.
                4. The first full month of site costs and allocations reviewed with the site manager.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The new site has cost centres, owners and driver entries before its first invoice, and its first full month is reviewed with the site manager."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the project lead for the site's opening date and first spend"
                - "Create the site's cost centres under the right parent"
                - "Agree the pre-opening cost rule with the finance lead"
                - "Add the site to every driver file before its first full month"
            - name: Allocation walk-through for auditors or the board
              description: |-
                ## Purpose
                Auditors testing segment results, or a board asking why a division's profit fell, will want the allocation method explained and a month proved end to end. A short walk-through pack with the policy, a traced example and the controls over the run turns a stressful meeting into a twenty-minute presentation.

                ## Milestones
                1. A pack with the policy summary, the pool and driver table and the controls over the run.
                2. One month traced from source cost through each pool to unit results.
                3. Likely questions listed with prepared answers.
                4. The meeting held and follow-up actions recorded with owners.

                ## Notes
                Start from the **Meeting notes** template to capture questions and follow-ups.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The walk-through meeting is held with a pack and a traced month, and every follow-up action has an owner and a date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the meeting date and what the auditors or board want to see"
                - "Trace one month from source cost through each pool to unit results"
                - "Ask the agent to draft likely questions from the policy and traced month"
                - "Record follow-up actions with owners after the meeting"
            - name: Cost centre mapping for a ledger migration
              description: |-
                ## Purpose
                Moving to a new ledger or planning system is the one chance to fix a cost centre structure without restating everything twice, and also the easiest moment to lose history. Building an old-to-new mapping, testing it on a full year of data and agreeing how allocations run in the new system protects the comparatives the business relies on.

                ## Milestones
                1. A mapping from every old cost centre to a new code, including merges and retirements.
                2. A full year of history converted through the mapping and reconciled to the old ledger.
                3. The allocation set-up rebuilt in the new system and one month run in parallel.
                4. The mapping archived with the migration file for future reference.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A full year of history reconciles through the mapping table, and one month of allocations matches in parallel within the agreed tolerance."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the migration lead for the new system's cost centre structure"
                - "Map every old cost centre to a new code, including merges"
                - "Convert a full year of history and reconcile it to the old ledger"
                - "Run one month of allocations in both systems and compare"
            - name: First month as a new cost centre owner
              description: |-
                ## Purpose
                Managers promoted into running a team often inherit a cost centre, a budget and a page of allocated charges without anyone explaining them. Using the first month to learn what is coded to you, what is allocated, who to ask and what the forecast assumes means your first budget conversation is about choices rather than surprises.

                ## Milestones
                1. The last six months of your cost centre statements read with your finance contact.
                2. Recurring commitments on your code, such as contracts and subscriptions, listed.
                3. Your backup named in the owner register.
                4. Three questions about allocated charges answered and the answers saved.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The new owner has reviewed six months of statements with finance, listed recurring commitments and named a backup within the first month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book an hour with your finance contact to read your statements"
                - "List the contracts and subscriptions coded to your cost centre"
                - "Put your chosen backup's name in the owner register"
                - "Write three questions about your allocated charges and get answers"
            - name: Taking over the allocation model as a new analyst
              description: |-
                ## Purpose
                Inheriting someone else's allocation model, often days before a close, is one of the riskier hand-overs in a finance team. A structured first ninety days, from shadowing a run to reproducing a month alone to proposing improvements, makes the model yours without breaking anything along the way.

                ## Milestones
                1. One full run shadowed with the previous owner and every step written down.
                2. A past month reproduced independently and matched to the posted journals.
                3. Undocumented steps and hard-coded numbers in the model listed.
                4. A short improvement proposal presented to the finance lead by day ninety.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The new analyst has reproduced a past month alone, matching the posted journals, and presented an improvement proposal by day ninety."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book time to shadow the next allocation run"
                - "Reproduce a past month alone and match it to the posted journals"
                - "List the hard-coded numbers and undocumented steps in the model"
                - "Present an improvement proposal to the finance lead by day ninety"
            - name: First cost centres for a growing company
              description: |-
                ## Purpose
                Companies of forty or fifty people with one finance person often report a single profit and loss, until the board asks what the new product team really costs. Starting with six to ten cost centres, a headcount driver for shared costs and one simple statement per manager gives most of the insight for a fraction of the effort a full model would take.

                ## Milestones
                1. Six to ten cost centres agreed with leadership, each with an owner.
                2. The ledger set to require a cost centre on payroll, contractors, travel and software.
                3. Shared costs allocated monthly by headcount in a simple, documented sheet.
                4. The first quarter of cost centre statements shared with leadership.

                ## Notes
                Resist building pools and drivers you will not maintain. The structure can grow at the next budget once the first one is used.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six to ten owned cost centres are live, shared costs are allocated monthly by headcount, and one quarter of statements has reached leadership."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Sketch six to ten cost centres around the teams leadership manages"
                - "Agree an owner for each cost centre with the leadership team"
                - "Require a cost centre on payroll, contractors, travel and software"
                - "Allocate shared costs by headcount in a one-tab sheet"
            - name: Challenging an allocated charge as a department head
              description: |-
                ## Purpose
                Department heads who think a charge is unfair usually complain in a meeting, get nowhere and resent the number for a year. Making a case with the policy, your own driver data and a proposed alternative, through the query process, gets a real answer and sometimes a change at the next refresh.

                ## Milestones
                1. The policy section and driver behind the disputed charge read and understood.
                2. Your own data for the period assembled, such as headcount, space or usage.
                3. A written query submitted with a specific proposed correction or alternative.
                4. The outcome recorded and any agreed change scheduled for the refresh.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written query with supporting data and a proposed alternative has been answered, and the outcome is recorded with any change scheduled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the policy section and driver behind the disputed charge"
                - "Gather your own headcount, space or usage data for the period"
                - "Submit a written query with a specific proposed alternative"
                - "Record the outcome and any change promised for the refresh"
            - name: Comparing sites on a like-for-like cost basis
              description: |-
                ## Purpose
                Regional and multi-site managers are judged on site results that carry different shares of head office cost, different lease terms and different allocation histories. A like-for-like view, such as cost per square metre, per order or per employee before and after allocations, shows which gaps are operational and which are only the method.

                ## Milestones
                1. Two or three comparison measures agreed with the regional manager.
                2. Each site's direct and allocated costs shown separately for each measure.
                3. Differences explained as operational, contractual or allocation driven.
                4. A quarterly site comparison sent to the regional team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly comparison shows each site's direct and allocated cost on agreed measures, with each large difference explained by type."
                cadence: rolling
              tasks:
                - "Agree two or three comparison measures with the regional manager"
                - "Split each site's costs into direct and allocated for each measure"
                - "Explain each large gap as operational, contractual or method driven"
                - "Send the site comparison to the regional team @recurring(quarterly)"
            - name: Shared service centre recharge set-up
              description: |-
                ## Purpose
                An enterprise moving finance, HR or IT into a shared service centre has to recharge its cost to the businesses it serves, with a service catalogue, agreed volumes and a monthly statement. Setting these up before go-live avoids a first year of charges the businesses refuse to accept.

                ## Milestones
                1. A service catalogue with units, volumes and service levels agreed with each business.
                2. A recharge basis chosen for each service and written into the service agreement.
                3. Monthly recharge statements issued showing volumes, rates and totals.
                4. Recharge disputes resolved through the query log within the agreed time.

                ## Notes
                Recharges between legal entities in different countries raise transfer pricing questions; take those to the group tax lead or an adviser.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each business has a signed service agreement with a recharge basis and has received monthly recharge statements since go-live."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Draft the service catalogue with units and service levels"
                - "Agree volumes and a recharge basis with each business"
                - "Write the recharge basis into each service agreement"
                - "Issue the monthly recharge statement to each business @recurring(monthly:6)"
            - name: Reciprocal allocation with simultaneous equations
              description: |-
                ## Purpose
                Where support departments serve each other heavily, step-down results depend on the order you pick, which is hard to defend. Solving the reciprocal method with simultaneous equations, in a matrix or a spreadsheet solver, gives an order-independent answer and shows how much the step order was distorting results.

                ## Milestones
                1. A service usage matrix showing what share of each support department serves every other.
                2. The equations solved for each support department's total cost.
                3. Results compared with the current step-down order by receiving unit.
                4. A decision recorded on adopting the method, with a check that the model stays auditable.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A reciprocal allocation is solved for all support departments and compared with step-down results, with an adoption decision recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a usage matrix of support departments serving each other"
                - "Solve the simultaneous equations for each department's total cost"
                - "Compare the results with the current step-down order"
                - "Record whether to adopt the method and how it stays auditable"
            - name: Time-driven activity-based costing pilot
              description: |-
                ## Purpose
                Classic activity-based costing relies on staff time surveys that go stale fast. The time-driven version needs only two estimates, the cost per minute of a team's capacity and the minutes each activity takes, and it shows unused capacity directly. Piloting it on one high-cost shared team, such as customer operations, tests whether it beats the current driver.

                ## Milestones
                1. Practical capacity in minutes and the cost per minute calculated for the pilot team.
                2. Time estimates for each main activity agreed with the team lead.
                3. Activity cost by cost object calculated for one quarter, with unused capacity shown.
                4. A recommendation on extending, adjusting or dropping the approach.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One quarter of time-driven costing for a pilot team, showing unused capacity, and a recorded recommendation on extending it."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose a high-cost shared team for the pilot"
                - "Calculate the team's practical capacity and cost per minute"
                - "Agree time estimates for each main activity with the team lead"
                - "Cost one quarter by activity and show the unused capacity"
            - name: Overhead rate support for cost-plus contracts
              description: |-
                ## Purpose
                Contracts priced on cost plus a fee, common with government bodies and some large customers, often let the customer audit the overhead rate you charge. A support pack showing which costs sit in each pool, which are excluded under the contract terms and how the rate was calculated turns a customer audit into a document exchange rather than a dispute.

                ## Milestones
                1. The contract's cost and overhead terms summarised, with excluded cost types listed.
                2. Overhead pools and rates reconciled to the ledger and adjusted for excluded costs.
                3. A rate calculation file with workings, sources and approval.
                4. Interpretation questions taken to the contract manager or an adviser and the answers recorded.

                ## Notes
                Contract cost rules vary by customer and jurisdiction. Treat the contract terms as the authority and confirm interpretations with the contract owner or a specialist adviser.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A rate support file reconciled to the ledger, with excluded costs removed and approval recorded, is ready to hand to the customer's auditor."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Summarise the contract's cost and overhead terms"
                - "List the cost types the contract excludes"
                - "Reconcile overhead pools to the ledger net of excluded costs"
                - "Assemble the rate calculation file with workings and approval"
---

# Cost Centre & Overhead Allocation

This area is for finance teams, budget-holding managers and larger organisations that need shared costs spread fairly enough that results by team, site or product are believed. It starts with foundations (the decisions the allocation must support, a cost centre hierarchy with owners, an inventory of overhead pools, drivers and a written policy), then the monthly machinery of driver refresh, allocation journals, zero-balance checks, owner statements and a query log, the costing skills behind it, decisions such as moving off spreadsheets or running showback before chargeback, dated moments like the annual refresh and a reorganisation, situations for new budget holders, analysts and shared service centres, and finally specialist work such as reciprocal allocation, time-driven activity-based costing and cost-plus contract rates.

What repeats is the monthly cycle: driver data in on the 2nd, a misposting sweep on the 3rd, allocation journals on the 4th, the zero-balance check on the 5th, recharge, showback and owner statements in the first ten days, then recovery tracking, the query log and untagged cloud spend later in the month. Quarterly checks cover owners, dormant cost centres, driver drift, site comparisons and the model change log, while the policy, rate card, driver set and true-up come round once a year. The Purchase decision, Metrics log, Meeting notes and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
