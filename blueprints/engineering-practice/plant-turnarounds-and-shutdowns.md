---
id: engineering-practice.plant-turnarounds-and-shutdowns
name: Plant Turnarounds and Shutdowns
description: "A turnaround run as a project with gates: scope challenged and frozen on time, contractors mobilised safely, a critical path you trust, costs forecast weekly and a start-up that goes right first time."
category: business
version: 1.0.0
tags: [engineering-practice, plant-turnarounds-and-shutdowns, engineer, manager, turnaround, shutdown, scope-freeze, critical-path]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - metrics-log
    - vendor
    - operational-checklist
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Plant Turnarounds and Shutdowns
          description: "Planning and running a plant turnaround: scope freeze, contractor mobilisation, the critical path, safety on a crowded site, cost control and the start-up after."
          projects:
            - name: Turnaround milestone timeline from T-24 months
              description: |-
                ## Purpose
                Every well-run turnaround works backwards from the shutdown date along a published milestone timeline, often counted as T-24 months to T+3 months. Without one, scope arrives late, long-lead items miss the window and the plan is still being written when contractors arrive. Drawing the timeline first gives every later project a date to aim at and lets the steering group see slippage while it can still be fixed.

                ## Milestones
                1. A target shutdown date and duration agreed with operations and the business planning team.
                2. A timeline with dated milestones for charter, work list cut-off, scope freeze, contract award, plan freeze, mobilisation, shutdown, start-up and close-out.
                3. Each milestone given a named owner and a definition of what done means.
                4. The timeline issued to the steering group and posted where the preparation team works.

                ## Notes
                Industry practice varies, but scope freeze is commonly set around six to nine months before shutdown for a major unit. Agree your site's figure rather than borrowing one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated milestone timeline from T-24 months to T+3 months, each milestone with an owner and a done definition, issued to the steering group."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the target shutdown date and planned duration with operations"
                - "List the milestones your site turnaround procedure requires"
                - "Count back from the shutdown date to set a date for each milestone"
                - "Assign an owner and a done definition to every milestone"
                - "Issue the timeline to the steering group for endorsement"
            - name: Turnaround charter with duration, cost and safety targets
              description: |-
                ## Purpose
                Signed by the plant manager, a charter settles the arguments that otherwise surface in week two of execution: what the turnaround is for, how long it may take, what it may cost and what safety performance is expected. It also names who can approve scope, money and schedule changes, so the team does not have to escalate every decision. Writing it early, before the work list opens, keeps the objectives ahead of the wish list.

                ## Milestones
                1. Business drivers written down, such as statutory inspections, catalyst life, reliability fixes and projects tied in.
                2. Targets agreed for duration, budget, safety, quality of start-up and post start-up run length.
                3. Decision rights recorded for scope, cost and schedule changes, with limits for each role.
                4. The charter signed by the plant manager and the turnaround sponsor.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed turnaround charter states the drivers, numeric targets for duration, cost and safety, and named decision rights with approval limits."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the business drivers from operations, integrity and projects"
                - "Draft numeric targets for duration, cost, safety and start-up"
                - "Write the decision rights table with approval limits by role"
                - "Ask the agent to tighten the charter draft to two pages"
                - "Book the signing meeting with the plant manager and sponsor"
            - name: Lessons from the last turnaround close-out
              description: |-
                ## Purpose
                The same mistakes repeat from one turnaround to the next because the close-out report from four years ago sits unread in a shared drive. Pulling its lessons into the current plan, with an owner for each, is the cheapest improvement available. It also tells you which estimates, contractors and work packs were trusted and which were not.

                ## Milestones
                1. The previous close-out report, schedule, cost report and incident log located.
                2. Every lesson listed with whether it was acted on before.
                3. The ten lessons most likely to repeat turned into actions in the current plan.
                4. Each action given an owner and a milestone from the timeline.

                ## Notes
                If there is no close-out report, interview three people who ran the last one: the turnaround manager, a senior planner and an area coordinator.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of at least ten lessons from the previous turnaround, each converted into an owned action tied to a milestone in the current timeline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the last close-out report and incident log for this unit"
                - "List every lesson and mark whether it was acted on"
                - "Pick the ten lessons most likely to repeat this time"
                - "Turn each chosen lesson into an owned action on the timeline"
            - name: Turnaround organisation and role descriptions
              description: |-
                ## Purpose
                Nobody arrives at a turnaround knowing exactly where their authority stops, and a crowded site punishes that confusion. An organisation chart with one-page role descriptions for the turnaround manager, planners, schedulers, area coordinators, contractor coordinators, safety advisers and cost control settles who decides, who plans and who executes. It also shows early where you are short of people for night shift.

                ## Milestones
                1. An organisation chart covering preparation and execution phases, including night shift.
                2. A one-page description for each role with decisions, deliverables and interfaces.
                3. Every role filled by a named person or flagged as a gap to recruit or contract.
                4. The chart reviewed with operations and maintenance leadership.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An organisation chart for preparation and execution with a role description for every position and each seat either named or logged as a gap."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the preparation and execution organisation on one page"
                - "Write a one-page role description for each position"
                - "Name a person for each seat or log it as a gap"
                - "Review the chart with the operations and maintenance managers"
            - name: Work list intake and scope challenge rules
              description: |-
                ## Purpose
                Most turnaround overruns start as a work list that nobody challenged: jobs that could be done on line, jobs with no justification and duplicates from three departments. Written intake rules state what qualifies for the outage, what information each request needs and how the challenge panel decides. Publishing them before the work list opens means requesters prepare properly instead of arguing afterwards.

                ## Milestones
                1. Criteria written for what must be done in the outage and what can be done on line or deferred.
                2. A request form requiring justification, risk ranking, equipment tag, materials and an estimate.
                3. A challenge panel named with operations, maintenance, integrity and the turnaround manager.
                4. The rules published with the work list opening and cut-off dates.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Published intake rules and a request form, with a named challenge panel and dated work list opening and cut-off, issued to every requesting department."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the criteria for outage, on-line and deferred work"
                - "Build a request form with justification and risk ranking fields"
                - "Name the members of the scope challenge panel"
                - "Publish the rules with the work list opening and cut-off dates"
            - name: Run length and turnaround interval basis
              description: |-
                ## Purpose
                Run length between turnarounds is usually set by whichever comes first: a statutory inspection date, catalyst life, a fouling trend or a known bad actor. Writing down which one actually drives your date, and how much margin it has, stops the interval being set by habit. It also tells you which inspections or repairs could extend the next run if done well this time.

                ## Milestones
                1. Every constraint on run length listed: statutory inspections, catalyst, fouling, known equipment limits.
                2. The controlling constraint identified, with its due date and the margin left.
                3. Options to extend the next run noted, such as on-line inspection or upgraded materials.
                4. A one-page interval basis agreed with integrity and operations.

                ## Notes
                Statutory inspection intervals come from your jurisdiction's pressure equipment rules and your written scheme of examination. Confirm them with your integrity team rather than assuming.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page interval basis naming the controlling constraint, its due date and margin, agreed by the integrity and operations leads."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List statutory inspection due dates for equipment on the unit"
                - "Add catalyst end of life and fouling trend limits to the list"
                - "Mark the controlling constraint and the margin it leaves"
                - "Recheck run length against inspection due dates @recurring(yearly)"
            - name: Turnaround risk register from the first planning meeting
              description: |-
                ## Purpose
                Risks to a turnaround are known early: a single-source compressor part, a crane that only one contractor owns, a hurricane season overlap, a gas supply agreement that limits shutdown dates. A register opened at the first planning meeting and reviewed monthly turns those into mitigations with owners while there is still time to act. Waiting until scope freeze leaves only expensive fixes.

                ## Milestones
                1. A register opened with at least fifteen risks across scope, materials, contractors, safety, weather and start-up.
                2. Each risk scored for likelihood and impact on duration or cost.
                3. Mitigations with owners and dates for every high risk.
                4. A monthly review held and the top five risks reported to the steering group.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk register with at least fifteen scored risks, owned mitigations for every high risk, and monthly reviews recorded from opening to shutdown."
                cadence: rolling
              tasks:
                - "Run a one-hour risk brainstorm with the core preparation team"
                - "Score each risk for its effect on duration and cost"
                - "Assign an owner and a date to each high-risk mitigation"
                - "Review the turnaround risk register and update scores @recurring(monthly:9)"
            - name: Turnaround budget structure and cost codes
              description: |-
                ## Purpose
                Without a cost code structure set up before commitments start, money spent on scaffolding, rentals and emergent work all lands in one bucket and nobody can say where the overrun came from. Matching codes to the work breakdown, the contracts and the capital or expense split lets cost control report by area and by contractor from the first purchase order. Finance will also need to know which items are capital before the year-end close.

                ## Milestones
                1. A work breakdown structure for the turnaround agreed with planning.
                2. Cost codes mapped to that structure, to contracts and to the capital or expense split.
                3. A budget built by code with an explicit contingency line for emergent work.
                4. The code structure loaded in the cost system and tested with a dummy commitment.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cost code structure mapped to the work breakdown and contracts is live in the cost system, with a coded budget and a separate emergent work contingency."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the turnaround work breakdown structure with the lead planner"
                - "Map cost codes to the breakdown, contracts and capital split"
                - "Build the budget by code with an emergent work contingency line"
                - "Test the codes in the cost system with a dummy commitment"
            - name: Safety plan for a crowded turnaround site
              description: |-
                ## Purpose
                On a normal day a unit may have thirty people on it; during a turnaround it can have several hundred, many of them new to the site, working shifts beside live plant. A turnaround safety plan sets the controls for that density: permit office capacity, simultaneous operations with running units, confined space rescue cover, dropped objects, traffic and stop-work authority for every worker. It has to be finished before contractor bids are evaluated, because it sets what contractors must provide.

                ## Milestones
                1. Peak headcount by area and shift estimated from the draft schedule.
                2. Controls defined for permits, simultaneous operations, confined space rescue, dropped objects, traffic and emergency muster.
                3. Contractor safety requirements written into the bid documents.
                4. Stop-work authority stated in plain words for every worker and covered in the induction.
                5. The plan reviewed by the site safety lead and the operations manager.

                ## Notes
                Permit office throughput is often the hidden bottleneck on shutdown day. Size issuers and gas testers to the number of permits you expect in the first 48 hours.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A turnaround safety plan covering headcount, permits, simultaneous operations, rescue, dropped objects, traffic and stop-work authority, reviewed and signed by the site safety lead."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Estimate peak headcount by area and shift from the draft schedule"
                - "Work out permit issuer and gas tester numbers for the first 48 hours"
                - "Write simultaneous operations rules for work beside running units"
                - "Add contractor safety requirements to the bid document set"
                - "Book the plan review with the site safety lead"
            - name: Weekly turnaround preparation meeting
              description: |-
                ## Purpose
                Preparation slips quietly, one late datasheet and one unanswered query at a time, unless one meeting a week forces every workstream to report against the timeline. A short standing meeting with planning, materials, contracts, integrity, operations and safety catches slippage while the fix is still cheap. The weekly dashboard it produces is also what the steering group reads.

                ## Milestones
                1. A standing weekly slot with a fixed attendee list and a one-page agenda.
                2. A dashboard showing milestone status, overdue actions, scope count and materials at risk.
                3. Actions recorded with owners and due dates and reviewed at the next meeting.
                4. The dashboard sent to the steering group every week.

                ## Notes
                Start from the **Meeting notes** template. Keep it to 45 minutes; anything longer than five minutes goes to a separate session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly preparation meetings are held from T-18 months to shutdown, each with recorded actions and a dashboard sent to the steering group."
                cadence: rolling
              tasks:
                - "Book a recurring 45-minute slot with each workstream lead"
                - "Draft a one-page agenda tied to the milestone timeline"
                - "Run the preparation meeting and log actions @recurring(weekly:tue)"
                - "Send the weekly preparation dashboard to the steering group @recurring(weekly:fri)"
            - name: Readiness scoring at each milestone gate
              description: |-
                ## Purpose
                Gate reviews turn the timeline into a test: is scope frozen, are work packs complete, are materials on site, are contracts signed. Scoring readiness monthly against a fixed checklist, rather than asking people how they feel, shows the steering group a trend and gives them time to add resources. A score that stalls for two months is the earliest warning you will get.

                ## Milestones
                1. A readiness checklist with weighted items for each gate on the timeline.
                2. A baseline score taken at the first gate.
                3. Monthly scores plotted with the gap to target for the next gate.
                4. Gaps over a set threshold escalated with a recovery plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weighted readiness score is calculated every month from T-18 months to shutdown and any gate gap above the agreed threshold has a recorded recovery plan."
                cadence: rolling
              tasks:
                - "Write the readiness checklist for each gate with weights"
                - "Take the baseline readiness score at the first gate"
                - "Score readiness against the next gate and plot the trend @recurring(monthly:12)"
                - "Escalate any gap above threshold with a recovery plan"
            - name: Long-lead materials expediting tracker
              description: |-
                ## Purpose
                Exchanger bundles, valves in exotic alloys, compressor spares and catalyst can take six to eighteen months to arrive, and a single late item can hold the critical path. A tracker that lists every long-lead item with order date, promised date, inspection points and the job it feeds lets the expeditor chase the right vendors every week. It also shows which jobs need a fallback if delivery fails.

                ## Milestones
                1. Every material item with a lead time over twelve weeks listed against its job.
                2. Purchase order, promised delivery and vendor inspection dates recorded for each item.
                3. Items at risk flagged with a fallback, such as a repair, a spare from stores or a deferral.
                4. All critical items received and inspected before the plan freeze.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every long-lead item is tracked to its job with order, promise and inspection dates, and every at-risk item has a recorded fallback before plan freeze."
                cadence: rolling
              tasks:
                - "Pull every item with a lead time over twelve weeks from the work list"
                - "Record order, promise and inspection dates for each item"
                - "Chase vendors on items whose promise date has moved @recurring(weekly:thu)"
                - "Agree a fallback for each at-risk item with the job owner"
            - name: Late scope addition control after freeze
              description: |-
                ## Purpose
                Scope that arrives after freeze costs several times more than scope planned on time, because it has no materials, no work pack and no slot in the schedule. A small weekly board that reviews every late addition against the charter criteria, with the cost and schedule effect stated, keeps the freeze meaningful. Safety and statutory items still get in; nice-to-haves wait for the next window.

                ## Milestones
                1. A late addition form requiring justification, consequence of deferral, estimate and schedule effect.
                2. A weekly review board with the authority defined in the charter.
                3. A log of every request with the decision and reason.
                4. Late additions reported as a count and value on the weekly dashboard.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scope request after freeze is logged with a board decision and reason, and the count and value of approved additions appear on each weekly dashboard."
                cadence: rolling
              tasks:
                - "Create the late addition form with a consequence of deferral field"
                - "Confirm board members and their approval limits from the charter"
                - "Review late scope requests with the board @recurring(weekly:wed)"
                - "Add late addition count and value to the weekly dashboard"
            - name: Work pack register and quality checks
              description: |-
                ## Purpose
                Eight hundred jobs need eight hundred work packs, and the incomplete ones are found at three in the morning when a crew cannot start. A register that tracks each pack through draft, review, approved and issued, with a monthly sample check against a quality checklist, tells you how many are truly ready. It also catches packs missing isolation points, blind numbers or quality hold points.

                ## Milestones
                1. A register listing every job with its work pack status and owner.
                2. A quality checklist for packs covering scope, isolations, blinds, materials, steps, hold points and reinstatement.
                3. A monthly sample of packs checked and the findings fed back to planners.
                4. All critical path packs approved before plan freeze.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register shows status for every job, monthly sample checks are recorded, and every critical path work pack is approved before plan freeze."
                cadence: rolling
              tasks:
                - "Set up the work pack register with a status for each job"
                - "Write the work pack quality checklist with the lead planner"
                - "Sample ten work packs against the checklist and log findings @recurring(monthly:16)"
                - "Report packs approved against the plan freeze target"
            - name: Cost tracking and forecast to complete
              description: |-
                ## Purpose
                Turnaround budgets are rarely broken by one big item; they are broken by rentals left on hire, standby hours and emergent work nobody costed. Tracking commitments and actuals by code every month in preparation, and forecasting the final cost, shows the steering group the trend before the money is spent. The same discipline becomes daily during execution.

                ## Milestones
                1. Commitments, actuals and forecast to complete reported by cost code.
                2. A variance explanation for any code more than an agreed percentage off budget.
                3. Contingency drawdown shown separately from base budget.
                4. A quarterly forecast presented to the steering group with the top three cost risks.

                ## Notes
                Start from the **Metrics log** template for the monthly figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly cost report by code with commitments, actuals, forecast to complete and variance notes is issued from first commitment to final close-out."
                cadence: rolling
              tasks:
                - "Pull commitments and actuals by cost code from the cost system"
                - "Update forecast to complete and explain variances by code @recurring(monthly:22)"
                - "Present the forecast and top cost risks to the steering group @recurring(quarterly)"
                - "Show contingency drawdown separately from the base budget"
            - name: Deferred work list between turnarounds
              description: |-
                ## Purpose
                Some work can only be done when the unit is down, and it builds up between turnarounds: a passing isolation valve, a leaking flange clamped on line, a minor inspection finding. Keeping a live deferred list, each item with its risk and the condition that would force an earlier stop, means the next work list starts half written. It also tells operations what they are living with.

                ## Milestones
                1. A deferred list with every item, its equipment tag, risk ranking and source.
                2. An escalation condition written for each item that would justify an earlier outage.
                3. Temporary repairs on the list linked to their management of change records.
                4. The list handed to the work list intake for the next turnaround.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deferred work list with a risk ranking and escalation condition for every item is reviewed monthly and handed in full to the next work list intake."
                cadence: rolling
              tasks:
                - "Collect deferred items from maintenance, operations and inspection"
                - "Write an escalation condition beside each deferred item"
                - "Add new deferrals and close finished items @recurring(monthly:5)"
                - "Review the risk ranking of temporary repairs with integrity @recurring(quarterly)"
            - name: Multi-year turnaround programme across units
              description: |-
                ## Purpose
                Sites with several units or trains need a programme that staggers outages so that contractors, cranes, utilities and the business do not all peak in the same quarter. A five-year view of every planned outage, its duration and its constraints helps the business plan production and lets the turnaround team book scarce resources early. It also shows when two outages could be combined to share fixed costs.

                ## Milestones
                1. Every planned outage for five years on one chart with unit, duration and driver.
                2. Constraints marked, such as gas supply, weather season, product commitments and contractor availability.
                3. Clashes resolved or escalated to the business planning team.
                4. The programme reissued every year after the budget cycle.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A five-year outage programme for every unit, with constraints and clashes resolved or escalated, is reissued each year after the budget cycle."
                cadence: cyclic
              tasks:
                - "List every planned outage for the next five years by unit"
                - "Mark gas supply, weather and product commitment constraints"
                - "Flag quarters where contractor or crane demand clashes"
                - "Reissue the five-year outage programme after the budget cycle @recurring(yearly)"
            - name: Contractor safety performance reviews in preparation
              description: |-
                ## Purpose
                Contractors often start pre-shutdown work, scaffolding and laydown set-up months before the main event, and their safety performance there predicts what you will see at peak. A monthly review of observations, near misses, permit quality and supervision ratios for each contractor flags problems while there is time to change supervisors or add training. It also gives evidence for the mobilisation decision.

                ## Milestones
                1. Safety indicators agreed for each contractor: observations, near misses, permit findings and supervisor ratio.
                2. A monthly review held with each contractor's site lead.
                3. Actions agreed for any contractor below the threshold, with dates.
                4. A pre-mobilisation readiness view of each contractor's safety performance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each contractor's safety indicators are reviewed monthly from first site work to mobilisation, with dated actions for anyone below threshold."
                cadence: rolling
              tasks:
                - "Agree four safety indicators with each contractor site lead"
                - "Walk a contractor work area with their supervisor this week"
                - "Review contractor safety indicators and agree actions @recurring(monthly:25)"
                - "Summarise each contractor's record before the mobilisation decision"
            - name: Emergent work triage process for execution
              description: |-
                ## Purpose
                Once vessels are opened, inspection findings and discovery work arrive by the dozen, and without a process they either swamp the critical path or get approved by whoever shouts loudest. A triage process defines who assesses each finding, how repair options are costed and scheduled, and who approves within what limit. Setting it up before shutdown means the first finding on day three goes through the same route as the fiftieth.

                ## Milestones
                1. A finding form capturing equipment, defect, inspector, proposed repair and urgency.
                2. A triage route with engineering assessment, planning, cost estimate and approval limits.
                3. A twice-daily triage slot in the execution schedule.
                4. An emergent work log feeding the cost forecast and schedule update.

                ## Notes
                Repairs that change design or materials still need management of change. Build the route so that step cannot be skipped under time pressure.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written emergent work triage process with a finding form, approval limits and a log linked to the cost forecast, issued before shutdown."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a finding form with defect, repair option and urgency fields"
                - "Map the triage route from inspector to approver with limits"
                - "Add a twice-daily triage slot to the execution schedule"
                - "Link the emergent work log to the cost forecast"
            - name: Critical path scheduling for turnaround networks
              description: |-
                ## Purpose
                Turnaround schedules are measured in hours, not weeks, and hold thousands of activities with tight logic between isolation, opening, inspection, repair and reinstatement. Knowing how to build logic, read float, level resources and spot the near-critical paths makes you useful to the scheduler and lets you challenge a plan that looks too good. It is a learnable skill, and the scheduling software matters less than the logic.

                ## Milestones
                1. The basics of activity logic, float, constraints and calendars understood and written in your own notes.
                2. A practice schedule built for one exchanger job from isolation to reinstatement.
                3. Resource levelling applied to the practice schedule and the effect on duration recorded.
                4. The critical and near-critical paths of the real turnaround schedule walked through with the scheduler.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice schedule for one exchanger job with resource levelling is complete, and the real schedule's top three critical paths have been reviewed with the scheduler."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read your scheduling tool's guide to logic links and float"
                - "Build a practice schedule for one exchanger bundle job"
                - "Level the practice schedule for a two-fitter crew and compare duration"
                - "Walk the near-critical paths of the real schedule with the scheduler"
            - name: Writing a turnaround work pack
              description: |-
                ## Purpose
                Good work packs let a crew who has never seen the equipment do the job safely and correctly at night. Each one holds the scope, drawings, isolation and blind points, materials and tools, step sequence, quality hold points, rigging plan, test requirements and reinstatement checks. Writing two or three packs yourself, and having them checked, teaches what the planners need from engineers and what crews need from the planners.

                ## Milestones
                1. The site standard pack contents and format obtained and read.
                2. One pack drafted for a typical job such as a pump overhaul or exchanger clean.
                3. The pack checked by a senior planner and the craft supervisor, with comments closed.
                4. A second pack for a pressure equipment repair drafted with inspection hold points.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Two work packs, one routine and one pressure equipment repair, are drafted, checked by a senior planner and supervisor, and approved for use."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Get the site work pack standard and one approved example"
                - "Draft a work pack for a pump overhaul on your unit"
                - "Ask a senior planner and the craft supervisor to mark it up"
                - "Draft a second pack for a pressure equipment repair with hold points"
            - name: Unit blind list and positive isolation register
              description: |-
                ## Purpose
                Isolating a full unit from live headers, flares and neighbouring units can take several hundred blinds and spades, and one missed or wrongly rated blind can let hydrocarbon into a vessel full of people. A numbered blind list tied to marked-up drawings, with rating, size, gasket and status for each point, is the backbone of turnaround isolation. Building it early lets operations walk it before shutdown day.

                ## Milestones
                1. Every isolation boundary of the unit marked on current drawings.
                2. A numbered blind list with location, size, rating, gasket, blind type and the job it protects.
                3. The list walked on the plant by operations and the boundaries confirmed.
                4. Blinds, tags and gaskets procured and staged by number.
                5. A status board ready to track install and removal for every blind.

                ## Notes
                Your permit to work and isolation procedure governs how each isolation is approved and proven; the blind list is the turnaround's master record of it, not a replacement.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbered blind list tied to marked-up drawings is walked and confirmed by operations, with all blinds staged and a status board ready before shutdown."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Get current drawings for every boundary of the unit"
                - "Mark isolation points and number each blind on the drawings"
                - "Record size, rating, gasket and blind type for each point"
                - "Walk the boundaries with an operations supervisor and correct the list"
                - "Stage blinds and tags by number in the laydown area"
            - name: Shutdown, decontamination and gas freeing sequence
              description: |-
                ## Purpose
                Before maintenance can open anything, operations must bring the unit down, drain it, and steam, purge, wash or chemically clean it until it is safe to enter. The sequence often sits on the critical path for the first one to three days and is where many turnaround incidents happen. Writing it step by step, with the acceptance tests for each system, sets a realistic start time for maintenance and avoids rushing the most hazardous phase.

                ## Milestones
                1. The shutdown sequence written by system with targets for rates, temperatures and pressures.
                2. Decontamination methods chosen for each system, with waste and effluent routes agreed.
                3. Acceptance criteria and gas tests defined before each system is handed to maintenance.
                4. The sequence entered in the schedule with realistic durations.
                5. The procedure reviewed with operations shift leads and the environmental lead.

                ## Notes
                Pyrophoric scale, trapped liquids behind valves and hydrogen sulphide release when opening are the classic surprises. Plan for them system by system.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A system-by-system shutdown and decontamination procedure with acceptance tests and durations is reviewed by shift leads and loaded in the schedule."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Split the unit into shutdown systems on a marked-up drawing"
                - "Draft the shutdown steps and targets for each system"
                - "Choose decontamination methods and agree effluent routes"
                - "Write the gas test and acceptance criteria for each handover"
                - "Review the sequence with operations shift leads"
            - name: Heavy lift and crane plan on a congested plot
              description: |-
                ## Purpose
                Pulling exchanger bundles, lifting column internals and changing reactor heads need large cranes on a plot already crowded with scaffolds, laydown and live pipe racks. A lift plan that places every major lift on a site drawing, with crane positions, ground bearing checks, exclusion zones and sequence, prevents two cranes needing the same road on the same day. Critical lifts need an engineered plan from a competent lifting engineer.

                ## Milestones
                1. A list of every lift above the site's critical lift threshold with load, radius and date window.
                2. Crane positions, outrigger loads and ground checks shown on a plot plan.
                3. Exclusion zones and overhead hazards marked for each lift.
                4. The lift sequence reconciled with the schedule and crane hire dates.

                ## Notes
                Critical lift plans must be prepared and approved by the competent people your lifting procedure names. Your part is to give them accurate loads, positions and timing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every critical lift appears on a plot plan with crane position, ground check, exclusion zone and a date reconciled with the schedule and crane hire."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every lift above the critical lift threshold with load and radius"
                - "Mark crane positions and exclusion zones on the plot plan"
                - "Request ground bearing checks for each outrigger position"
                - "Reconcile the lift sequence with crane hire dates"
            - name: Progress measurement and earned value for turnarounds
              description: |-
                ## Purpose
                Percentage complete reported by feel is always ninety percent by day three. Turnaround progress is measured by earned hours against planned hours on weighted steps, with schedule and cost performance indices showing whether the critical path is truly on track. Learning the method before execution lets you read the daily report and ask the right question at the morning meeting.

                ## Milestones
                1. The site's progress measurement rules learned, including step weights for typical jobs.
                2. A worked example of earned value and performance indices on a practice job.
                3. The daily progress report format agreed with planning and cost control.
                4. One day of execution progress calculated by hand to check the reporting tool.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked earned value example is complete and the daily turnaround progress report format, with schedule and cost indices, is agreed with planning and cost control."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Get the progress step weights used for typical turnaround jobs"
                - "Calculate earned hours and indices for a practice job"
                - "Agree the daily progress report format with planning"
                - "Check one day of reported progress by hand"
            - name: Inspection scope and finding decisions in the plan
              description: |-
                ## Purpose
                Static equipment inspection often drives the turnaround's critical path, and the inspection plan comes from the integrity team's risk-based programme. The turnaround's job is to schedule it, give access and decide quickly on what is found. Agreeing in advance which findings trigger which repair, with pre-approved repair procedures and materials on standby, turns a three-day wait for a decision into a three-hour one.

                ## Milestones
                1. The inspection scope from integrity loaded in the schedule with access and cleaning needs.
                2. Likely findings listed for each critical item with a pre-agreed response.
                3. Standby repair materials and procedures ready for the most likely findings.
                4. Inspection results reporting times agreed with the inspection contractor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every critical inspection item has a scheduled slot, a list of likely findings with pre-agreed responses and standby materials for the most likely repairs."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get the inspection scope for the outage from the integrity team"
                - "Add access, cleaning and scaffold needs for each inspection"
                - "List likely findings and agree responses with integrity"
                - "Order standby repair materials for the most likely findings"
            - name: Contracting strategy for the turnaround
              description: |-
                ## Purpose
                Choosing between one main contractor, several specialist contractors, reimbursable rates, unit rates or lump sums decides who carries the risk of emergent work and who manages the interfaces. A short written strategy, with the reasons, aligns procurement, the turnaround manager and the sponsor before bids go out. Changing strategy after tenders are issued costs months.

                ## Milestones
                1. The work packages listed with their size, risk and specialist needs.
                2. Options for each package compared on risk, cost certainty, interfaces and local capacity.
                3. A recommended strategy with the reasons recorded.
                4. The strategy approved by the sponsor and procurement lead.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved contracting strategy names the contract type for each work package and records why, before any turnaround tender is issued."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the turnaround work packages with size and risk"
                - "Compare contract types for each package in one table"
                - "Write the recommended strategy with reasons"
                - "Present the strategy to the sponsor and procurement lead"
            - name: Main contractor bid evaluation and award
              description: |-
                ## Purpose
                The lowest rate rarely gives the lowest turnaround cost: supervision ratios, craft availability, safety record and planning capability matter as much. A bid evaluation that scores technical and commercial offers separately, with clarification meetings and reference checks on past turnarounds, gives an award decision you can defend. Award it in time for the contractor to join planning, not just execution.

                ## Milestones
                1. Evaluation criteria and weights agreed before bids are opened.
                2. Technical and commercial scores recorded separately for each bidder.
                3. Clarification meetings held and references from past turnarounds checked.
                4. An award recommendation approved and the contractor engaged in planning.

                ## Notes
                Start from the **Vendor** template to keep the chosen contractor's contacts, terms and performance record together.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved award recommendation with separate technical and commercial scores, reference checks and clarification records, issued before plan freeze."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Agree evaluation criteria and weights with procurement"
                - "Score technical offers before opening the commercial envelopes"
                - "Call two references from each bidder's recent turnarounds"
                - "Write the award recommendation with the reasons for the choice"
            - name: Moving work into pre-shutdown and post start-up windows
              description: |-
                ## Purpose
                Every job done before the unit comes down or after it is back up is a job off the critical path and off the crowded site. Scaffolding, insulation removal, prefabrication of spools, on-line inspections and some instrument work can often move out of the outage window. A structured review of the work list for these moves can take days off the duration without cutting scope.

                ## Milestones
                1. The work list screened for jobs that can be done before shutdown or after start-up.
                2. Each candidate assessed for safety, operability and permit needs on running plant.
                3. Agreed moves entered in a pre-shutdown and post start-up schedule.
                4. The duration saving on the main outage recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A screened list of jobs moved to pre-shutdown or post start-up windows, each with a safety assessment, and the resulting outage duration saving recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Screen the work list for jobs that do not need the unit down"
                - "Assess each candidate for work beside running plant"
                - "Build a pre-shutdown and post start-up schedule"
                - "Record the outage duration saving from the moves"
            - name: Critical path duration reduction study
              description: |-
                ## Purpose
                Each day of turnaround on a large unit can cost a significant amount in lost production, so taking a day off the critical path is often worth more than any saving on contractor rates. A focused study of the top three critical paths, looking at parallel working, extra shifts, pre-fabrication, faster decontamination and alternative repair methods, finds the realistic options. The result is a costed list the sponsor can choose from.

                ## Milestones
                1. The top three critical and near-critical paths identified from the schedule.
                2. Options to shorten each listed with their cost, risk and hours saved.
                3. Options checked for safety effects such as congestion and fatigue.
                4. A costed recommendation accepted or rejected by the sponsor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed list of duration reduction options for the top three critical paths, each with safety effects noted, decided by the sponsor and recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull the top three critical paths from the schedule"
                - "Hold a one-hour option session for each path with crafts"
                - "Cost each option and note its safety effect"
                - "Ask the agent to summarise the options as a one-page decision note"
            - name: Site logistics, laydown and temporary facilities plan
              description: |-
                ## Purpose
                Hundreds of extra people need parking, buses, toilets, canteens, tool stores, offices and laydown, and the plant was not built for them. A logistics plan that places every temporary facility, traffic route and laydown area on a site map, with power, water and waste for each, stops crews losing an hour a day walking. It also keeps emergency access routes clear.

                ## Milestones
                1. Temporary facility needs estimated from peak headcount.
                2. A site map with laydown, offices, welfare, tool stores, parking and traffic routes.
                3. Emergency access and muster routes checked as clear on the map.
                4. Rental and hire orders placed with on-hire and off-hire dates.

                ## Notes
                Rentals left on hire after start-up are one of the most common small overruns. Put every off-hire date in the close-out plan.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A site logistics map with laydown, welfare, offices, routes and clear emergency access is approved, and every rental has on-hire and off-hire dates."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Estimate welfare, office and parking needs from peak headcount"
                - "Mark laydown, facilities and traffic routes on a site map"
                - "Check emergency access and muster routes with the safety lead"
                - "Place rental orders with on-hire and off-hire dates"
            - name: Shift pattern and fatigue rules for execution
              description: |-
                ## Purpose
                Turnarounds commonly run twelve-hour shifts around the clock for weeks, and fatigue raises the chance of mistakes in exactly the jobs that matter most, such as boxing up and reinstatement. Agreeing the shift pattern, maximum consecutive days, rest rules and overtime limits before mobilisation, and making contractors follow them, is a safety decision as much as a cost one. Write it down so nobody negotiates it at 2 a.m.

                ## Milestones
                1. The shift pattern chosen with handover times and overlap.
                2. Limits written for consecutive days, hours per week and rest between shifts.
                3. A way to monitor hours worked for each person, including contractors.
                4. The rules written into contracts and covered in the induction.

                ## Notes
                Check the limits against your jurisdiction's working time and health and safety rules and your company's fatigue standard.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written shift and fatigue rules with hour and rest limits are included in every turnaround contract and a method to monitor hours worked is in place."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare two shift patterns for coverage and handover overlap"
                - "Draft limits for consecutive days and rest between shifts"
                - "Agree how contractor hours will be monitored each week"
                - "Send the fatigue rules to procurement for the contracts"
            - name: Scope freeze milestone
              description: |-
                ## Purpose
                Scope freeze is the day the work list stops being a list and becomes a plan, and it is the single most important date before shutdown. Holding a formal freeze review, with every job justified, estimated and assigned, and recording the frozen list with its total hours and cost, gives the planners a fixed target. After this date, the late addition board takes over.

                ## Milestones
                1. Every job on the list has justification, estimate, materials status and owner.
                2. A formal freeze review held with the challenge panel and sponsor.
                3. The frozen work list issued with total job count, hours and cost.
                4. The late addition process switched on and announced.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A frozen work list with job count, hours and cost is issued on the planned freeze date and the late addition process is announced the same day."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List jobs still missing justification or estimates"
                - "Chase the owners of incomplete jobs two weeks before freeze"
                - "Hold the freeze review with the challenge panel and sponsor"
                - "Issue the frozen list and announce the late addition route"
            - name: Contractor mobilisation and site induction
              description: |-
                ## Purpose
                Several hundred workers arriving in a fortnight need inductions, permits to work training, site passes, competence checks, tools inspected and supervisors who know the plan. A mobilisation plan with daily arrival numbers and induction capacity stops the gate becoming a queue and keeps anyone without the right certificates off the plant. It is also the first chance to set the tone on safety and stop-work authority.

                ## Milestones
                1. A daily arrival schedule by contractor and craft.
                2. Induction sessions sized to arrivals, covering site rules, permits and stop-work authority.
                3. Competence certificates and medicals checked before passes are issued.
                4. Tools, cranes and rigging inspected and tagged before use.
                5. Supervisors briefed on the plan, their area and the escalation routes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every mobilised worker has a recorded induction and checked competence before receiving a pass, and all tools and lifting gear are inspected and tagged before shutdown."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Get daily arrival numbers by contractor and craft"
                - "Book induction rooms and trainers to match arrivals"
                - "Set up the certificate check at the pass office"
                - "Arrange tool and lifting gear inspection before first use"
                - "Brief contractor supervisors on their area and the plan"
            - name: Shutdown day and handover to maintenance
              description: |-
                ## Purpose
                The first 48 hours set the pace for the whole turnaround: the unit coming down safely, decontamination on time, blinds going in, the permit office keeping up and the first jobs starting. A minute-by-minute plan for shutdown day, with a handover point for each system from operations to maintenance, keeps everyone working to the same clock. Delays here usually come from the permit office and from systems that fail their gas test.

                ## Milestones
                1. A shutdown day plan by hour, with handover points for each system.
                2. Permit office staffing and pre-prepared permits ready for the first wave of jobs.
                3. Blind installation tracked live on the status board.
                4. Each system handed over with its acceptance test recorded.
                5. A 48-hour review of plan against actual with corrective actions.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every system is handed from operations to maintenance with a recorded acceptance test, and a 48-hour plan against actual review is completed."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Write the hour-by-hour shutdown day plan with handover points"
                - "Prepare permits for the first wave of jobs in advance"
                - "Set up the live blind status board in the control room"
                - "Hold a 48-hour plan against actual review"
            - name: Pre-start-up safety review and handback to operations
              description: |-
                ## Purpose
                Before hydrocarbons go back in, every opened system must be boxed up, tested, de-blinded and confirmed as built to its drawings, with every change reviewed under management of change. A pre-start-up safety review with a system-by-system checklist, signed by maintenance, inspection, engineering and operations, is the last control before the plant is live again. Rushing it to recover lost days is how start-up incidents happen.

                ## Milestones
                1. A system checklist covering box-up, leak tests, blind removal, instruments, relief devices and housekeeping.
                2. All changes made in the turnaround checked against their management of change records.
                3. Every blind on the list confirmed removed or recorded as intentionally left.
                4. Punch items classed as must-do before start-up or after, with owners.
                5. Each system signed back to operations by all parties.

                ## Notes
                Start from the **Operational checklist** template and add your site's pre-start-up safety review items.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every system has a signed pre-start-up checklist, every blind is accounted for, every change has a closed management of change review and no must-do punch item is open."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Build the system-by-system pre-start-up checklist"
                - "Reconcile the blind list against removal records"
                - "Check every turnaround change against its management of change record"
                - "Class punch items as before or after start-up with owners"
                - "Collect signatures for each system handback"
            - name: Start-up and first 72 hours on line
              description: |-
                ## Purpose
                Leaks on heat-up, sticking valves, instruments left in bypass and equipment that was overhauled but not aligned all show up in the first three days. A start-up plan with extra engineering cover, leak patrols at set temperatures, hot bolting and a fast route for problems turns those into short delays instead of a second shutdown. It is the turnaround's real finish line.

                ## Milestones
                1. A start-up sequence with hold points for leak checks at set temperatures and pressures.
                2. Engineering and maintenance cover on every shift for the first 72 hours.
                3. A start-up issues log with owner and status for each problem.
                4. Stable operation at planned rates reached and recorded.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The unit reaches stable operation at planned rates with every start-up issue logged and owned, and engineering cover was in place for the first 72 hours."
                cadence: one-shot
                effort_hours_estimate: "36"
              tasks:
                - "Mark leak check hold points in the start-up sequence"
                - "Draw up the engineering and maintenance cover rota for 72 hours"
                - "Set up the start-up issues log with owners"
                - "Record the time stable operation at planned rates is reached"
            - name: Close-out report and lessons workshop
              description: |-
                ## Purpose
                Within weeks of start-up the team disperses, contractors leave and the details are lost. A close-out report with final cost, duration, safety record, scope changes, emergent work and start-up performance, plus a lessons workshop held while memories are fresh, is the main input to the next turnaround. Commit to finishing it within a set number of weeks of start-up.

                ## Milestones
                1. Final cost, duration, safety and scope figures compiled against the charter targets.
                2. A lessons workshop held with operations, maintenance, planning and contractors.
                3. Lessons written as actions with owners for the next turnaround.
                4. The report issued and filed where the next team will find it.
                5. All rentals off hire and contracts closed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A close-out report comparing results with charter targets, with owned lessons and all contracts and rentals closed, is issued within the agreed weeks of start-up."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Book the lessons workshop within two weeks of start-up"
                - "Compile final cost, duration and safety figures against the charter"
                - "Ask the agent to draft the close-out report from the figures and notes"
                - "Confirm every rental is off hire and every contract closed"
                - "File the report in the turnaround library for the next team"
            - name: First turnaround as a seconded engineer
              description: |-
                ## Purpose
                Being pulled from a day job into the turnaround team is a common route for engineers, and the first one is disorienting: new hours, new people and a pace where a wrong answer costs a shift. Knowing your area, its critical jobs, who decides what and how to raise a concern lets you add value from the first week. It is also one of the fastest ways to learn a plant in depth.

                ## Milestones
                1. Your role, area and reporting line written down and confirmed with the turnaround manager.
                2. The critical jobs in your area read in their work packs.
                3. The plant walked with the area coordinator before shutdown.
                4. A personal log kept of decisions, findings and lessons during execution.

                ## Notes
                If something looks unsafe, use your stop-work authority. A turnaround is no reason to hold back.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your role and area are confirmed in writing, you have walked your area and read its critical work packs before shutdown, and a decisions log exists for execution."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Confirm your role and reporting line with the turnaround manager"
                - "Read the work packs for the critical jobs in your area"
                - "Walk your area with the area coordinator before shutdown"
                - "Start a personal log of decisions and findings"
            - name: Night shift area coordinator handover
              description: |-
                ## Purpose
                Night shift often has fewer engineers, fewer managers and the same number of crews, so a poor handover leaves jobs waiting for a decision until morning. A structured handover at each shift change covering progress, permits, safety issues, findings awaiting decisions and the next twelve hours keeps the work moving. Coordinators on both shifts should use the same format.

                ## Milestones
                1. A one-page handover format agreed by day and night coordinators.
                2. A list of decisions the night coordinator may make without calling in.
                3. Face-to-face handover at every shift change, at the job face for critical work.
                4. Open items carried forward until closed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every shift change during execution uses the agreed one-page handover format, and a written list of night shift decision rights is in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page shift handover format with the other coordinator"
                - "Agree what the night coordinator may decide without calling in"
                - "Walk critical jobs together at the first shift change"
                - "Carry open items forward on the format until closed"
            - name: First 90 days as a turnaround manager
              description: |-
                ## Purpose
                Taking over as turnaround manager means inheriting a timeline, a team and a set of promises, often with less than eighteen months to go. Spending the first ninety days learning the unit, the people, the preparation status and the sponsor's expectations, and then resetting what needs resetting, avoids discovering in month nine that scope was never challenged. It is also the window to set the team's habits.

                ## Milestones
                1. One-to-one meetings held with every preparation lead and key stakeholder.
                2. An honest readiness assessment written against the timeline.
                3. The top five risks and gaps presented to the sponsor with a plan.
                4. Team routines set: weekly meeting, dashboard, decision log.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written readiness assessment and a top five risks and gaps plan are presented to the sponsor within 90 days of taking the role."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every preparation lead and stakeholder to meet"
                - "Book one-to-ones with each person in the first month"
                - "Hold a one-to-one with each lead planner @recurring(monthly:8)"
                - "Write the readiness assessment against the timeline"
                - "Present the top five risks and gaps to the sponsor"
            - name: Lean outage plan for a small plant
              description: |-
                ## Purpose
                A small plant or single-unit site may have a maintenance manager, two planners and a handful of contractors rather than a full turnaround team. The same principles still apply at smaller scale: a scope freeze, a simple critical path, a blind list and a start-up check. A lean outage plan scaled to a few people keeps the discipline without paperwork nobody has time for.

                ## Milestones
                1. A one-page outage timeline with five essential milestones.
                2. A work list with a simple justification column and a freeze date.
                3. A simple bar chart schedule with the critical path marked.
                4. A start-up checklist covering blinds, box-up and leak tests.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page timeline, frozen work list, critical path chart and start-up checklist exist for the next outage, maintained by the site's own small team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw a one-page outage timeline with five milestones"
                - "Set a freeze date for the outage work list"
                - "Mark the critical path on a simple bar chart schedule"
                - "Review the lean outage plan with the site team @recurring(quarterly)"
            - name: Forced outage rapid planning playbook
              description: |-
                ## Purpose
                A trip, a failure or a leak can bring a unit down with no warning, and every hour of downtime then costs production. A playbook that says how to stand up a mini turnaround team within hours, pull deferred work that can be done in the window, secure contractors and decide when to restart turns an unplanned stop into a useful one. Writing it in calm times is the only way it gets written.

                ## Milestones
                1. A call-out list for the core forced outage team and key contractors.
                2. Criteria for which deferred work items are pulled into an unplanned outage.
                3. A first-24-hours checklist for safety, scope, materials and schedule.
                4. A decision rule for restart timing agreed with operations.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A forced outage playbook with a call-out list, deferred work selection criteria, a 24-hour checklist and a restart decision rule is approved by operations."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build the call-out list for the forced outage core team"
                - "Write criteria for pulling deferred work into a forced outage"
                - "Draft the first 24 hours checklist"
                - "Agree the restart decision rule with the operations manager"
            - name: Process engineer's shutdown and start-up performance baseline
              description: |-
                ## Purpose
                Process engineers own the questions everyone asks after start-up: did the cleaning work, did the new trays help, is the unit back to design. Taking a pre-shutdown performance baseline of key exchangers, columns and furnaces, and repeating the test after start-up, gives a measured answer. It also supplies data for the next interval and the business case for the repairs.

                ## Milestones
                1. Key performance measures chosen for exchangers, columns, furnaces and compressors.
                2. A pre-shutdown baseline test run and the data stored.
                3. The same tests repeated at stable rates after start-up.
                4. A before and after report issued to operations and the sponsor.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A before and after performance report comparing pre-shutdown and post start-up tests on the agreed equipment is issued within six weeks of start-up."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose performance measures for the key equipment"
                - "Run the pre-shutdown baseline test and store the data"
                - "Repeat the tests at stable rates after start-up"
                - "Write the before and after performance report"
            - name: Catalyst change-out planning
              description: |-
                ## Purpose
                Reactor catalyst change-outs combine inert entry, specialist contractors, pyrophoric or toxic spent catalyst, loading density targets and long-lead fresh catalyst. They are often on the critical path and carry some of the highest risks in the turnaround. A dedicated plan covering cooling and passivation, unloading, inspection, loading method and disposal keeps this specialist work under control.

                ## Milestones
                1. The change-out scope agreed with the catalyst vendor and process engineer.
                2. Inert entry and rescue arrangements planned with the specialist contractor.
                3. Spent catalyst handling, transport and disposal routes arranged.
                4. Loading method and density target set, with a loading record ready.

                ## Notes
                Entry into inert atmospheres is among the most hazardous turnaround tasks. Only specialist contractors with proven procedures and rescue cover should do it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A catalyst change-out plan covering cooling, inert entry with rescue, unloading, disposal and loading with density records is approved before plan freeze."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the change-out scope with the catalyst vendor"
                - "Review the specialist contractor's inert entry and rescue plan"
                - "Arrange spent catalyst transport and disposal"
                - "Prepare the loading record with the density target"
            - name: Schedule risk analysis with duration ranges
              description: |-
                ## Purpose
                A single-point schedule says the turnaround will take 28 days; experience says it might take 26 or 35. Schedule risk analysis puts three-point estimates on key activities and uses a simulation to show the likely spread of finish dates and which activities drive it. Sponsors can then set a realistic date and contingency instead of a hopeful one.

                ## Milestones
                1. Three-point duration estimates collected for critical and near-critical activities.
                2. Key risks from the register linked to the activities they affect.
                3. A simulation run showing the finish date at several confidence levels.
                4. The activities that drive the spread reported with mitigation options.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A schedule risk analysis reports the finish date at three confidence levels and names the top five driving activities, reviewed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect three-point estimates for critical activities"
                - "Link register risks to the activities they affect"
                - "Run the schedule simulation and record the confidence levels"
                - "Present the top drivers and options to the sponsor"
            - name: Site-wide outage with shared utilities
              description: |-
                ## Purpose
                When several units, the utilities plant and shared flares come down together, the interfaces become the critical path: steam, nitrogen, power, cooling water, flare isolation and the order units come back up. A site-wide interface plan sets the shutdown and start-up order, the utilities each unit needs at each stage and who controls the shared systems. Without it, one unit's start-up can wait days for another's steam.

                ## Milestones
                1. Every shared system listed with the units that depend on it.
                2. Shutdown and start-up order agreed across units.
                3. Utility demand by stage checked against what will be available.
                4. One owner named for each shared system during the outage.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A site-wide interface plan sets unit shutdown and start-up order, utility demand by stage and a named owner for each shared system."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every shared utility and flare system with dependent units"
                - "Draft the shutdown and start-up order across units"
                - "Check utility demand by stage against availability"
                - "Name one owner for each shared system"
            - name: Wrench time and productivity study during execution
              description: |-
                ## Purpose
                Crews on a turnaround often spend less than half their shift working on the job, losing time to permits, waiting for scaffolds, travel and tools. A sampling study of what crews are doing at random moments, carried out respectfully with supervisors, shows where the hours go. The findings feed the next turnaround's logistics, permit and planning improvements.

                ## Milestones
                1. A sampling method and categories agreed with supervisors and contractors.
                2. Observations collected across shifts and crafts.
                3. Time lost by category reported with the top three causes.
                4. Improvements for the next turnaround recorded as actions.

                ## Notes
                Explain the study to crews first; it measures the system, not individuals.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A wrench time study across shifts and crafts reports time lost by category and lists the top three causes as owned actions for the next turnaround."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree sampling categories with contractor supervisors"
                - "Brief crews that the study measures the system"
                - "Collect observations across day and night shifts"
                - "Report time lost by category with the top three causes"
            - name: Turnaround maturity assessment and benchmarking
              description: |-
                ## Purpose
                Sites that run turnarounds well tend to score high on a few things: early scope freeze, stable teams, readiness gates, contractor involvement in planning and close-out discipline. A maturity assessment against those practices, plus benchmarks of duration and cost from industry surveys where available, shows where your process is weakest. It turns lessons into a multi-year improvement plan.

                ## Milestones
                1. A maturity model with ten to fifteen practice areas chosen.
                2. Your site scored with evidence for each area.
                3. Duration and cost compared with any available industry or company benchmarks.
                4. Three improvement actions chosen for the next cycle with owners.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored maturity assessment with evidence and three owned improvement actions is issued and reassessed each year."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Choose ten to fifteen practice areas for the maturity model"
                - "Score your site with evidence for each area"
                - "Compare duration and cost with available benchmarks"
                - "Reassess turnaround maturity and update the actions @recurring(yearly)"
            - name: Reusable job pack and estimate library
              description: |-
                ## Purpose
                Exchanger cleans, pump overhauls, valve changes and column entries repeat every turnaround, yet many sites rewrite the packs and estimates from scratch each time. A library of approved standard packs, with actual hours from the last turnaround fed back into the estimates, cuts preparation effort and makes estimates more accurate. It also gives new planners a model to work from.

                ## Milestones
                1. The twenty most common job types identified from past work lists.
                2. A standard pack and estimate for each, approved by the lead planner.
                3. Actual hours from the last turnaround fed back into each estimate.
                4. The library stored and indexed where planners can find it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library of at least twenty approved standard job packs, each with an estimate updated from actual hours, is indexed and in use by planners."
                cadence: rolling
              tasks:
                - "List the twenty most common job types from past work lists"
                - "Turn the best existing pack for each type into a standard"
                - "Feed actual hours from the last turnaround into each estimate"
                - "Review the library and retire outdated packs @recurring(quarterly)"
---

# Plant Turnarounds and Shutdowns

A turnaround is the biggest, most expensive and most crowded few weeks in a plant's cycle, and most of what decides its outcome happens in the eighteen months before the first flange is broken. These projects start with the foundations (the milestone timeline, the charter, last time's lessons, the organisation, the scope rules, the interval basis, the risk register, the budget and the crowded-site safety plan), then build the preparation machinery of weekly meetings, readiness gates, materials expediting and cost forecasts, the skills of scheduling, work packs, blind lists and decontamination, the contracting and duration decisions, the dated events from scope freeze to close-out, the seats an engineer or manager may sit in, and the specialist work of catalyst change-outs, schedule risk and site-wide outages.

The rhythm is a weekly preparation meeting, weekly expediting and late-scope reviews, monthly readiness scoring, risk, work pack, cost and contractor safety reviews, a quarterly look at the deferred work list and the job pack library, and a yearly check of run length and the multi-year programme. The Risk register, Meeting notes, Metrics log, Vendor, Operational checklist and Onboarding 30/60/90 templates pair with the projects that keep a standing record. Your site's turnaround procedure, permit system and management of change process always govern; these projects help you work to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
