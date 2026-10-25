---
id: engineering-practice.process-safety-management
name: Process Safety Management
description: "A working process safety management system: covered processes defined, element owners named, process safety information and procedures current, actions closed, audits passed and leading indicators that warn before an incident does."
category: business
version: 1.0.0
tags: [engineering-practice, process-safety-management, engineer, manager, psm, process-safety, leading-indicators, major-accident-hazards]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - compliance-control
    - remediation-plan
    - purchase-decision
    - onboarding-30-60-90
    - development-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Process Safety Management
          description: "Running the elements of a process safety management system: hazard analysis, operating procedures, mechanical integrity, incident investigation, audits and leading indicators."
          projects:
            - name: Covered process and threshold quantity inventory
              description: |-
                ## Purpose
                Every PSM obligation starts with knowing which processes are in scope, and many sites have never refreshed the list since a new tank, a new chemical or a debottleneck changed the inventories. Listing each process, its highly hazardous chemicals and the largest quantity that could be involved in one release, then comparing it with the threshold quantities in the regulations that apply, gives a defensible boundary for the whole system.

                ## Milestones
                1. The regulatory regimes that apply to the site identified, for example OSHA PSM and EPA RMP in the US or a Seveso based regime in Europe and its local equivalents.
                2. Every process unit listed with its hazardous chemicals and maximum intended inventory.
                3. Interconnected and co-located vessels grouped into processes as the regulation defines them.
                4. Each process marked covered or not covered, with the threshold and the calculation behind the call.
                5. The inventory reviewed and signed by the site manager and the process safety lead.

                ## Notes
                Count the largest credible inventory, not the normal operating level. A tank usually run half full is still covered at its full capacity if it can be filled.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A signed covered process inventory lists every unit, its hazardous chemicals, maximum inventory and the threshold comparison that decides its status."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the regulations and permits that impose process safety duties on the site"
                - "Pull maximum tank and vessel capacities from the equipment datasheets"
                - "Group interconnected equipment into processes and total each inventory"
                - "Compare each process inventory with the applicable threshold quantities"
                - "Get the inventory signed by the site manager and process safety lead"
            - name: PSM element ownership and accountability chart
              description: |-
                ## Purpose
                An element without a named owner decays quietly: procedures go uncertified, training lapses and nobody notices until an audit or a fire. Naming one accountable owner for each of the 14 or 20 elements your framework uses, with a deputy and a short written expectation, turns the system from a binder into a set of people who know what they answer for.

                ## Milestones
                1. The element framework chosen and written down, such as the 14 regulatory elements or the 20 CCPS risk based process safety elements.
                2. An owner and a deputy named for every element, each with authority to act.
                3. A one-paragraph expectation for each element, stating what good looks like and how it is measured.
                4. The chart approved by the site leadership team and posted where staff can find it.
                5. A process safety policy statement signed by the site manager referencing the chart.

                ## Notes
                Owners should be line roles, not the process safety engineer for everything. The specialist supports; operations, maintenance and engineering own.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every PSM element has a named owner and deputy with a written expectation, approved by site leadership and published."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the element framework the site will report against"
                - "Draft a table of elements with a proposed owner and deputy for each"
                - "Write a one-paragraph expectation and measure for every element"
                - "Take the chart to the leadership meeting for approval"
                - "Publish the chart and signed policy statement on the site intranet"
            - name: Employee participation plan for process safety
              description: |-
                ## Purpose
                Operators and technicians know where the plant really leaks, which procedures are ignored and which alarms are nuisance, and most PSM regulations require a written plan for consulting them on hazard analyses and the other elements. A plan that names how workers take part in PHAs, audits, investigations and procedure reviews, and how they can see the results, turns a legal duty into the site's best source of hazard knowledge.

                ## Milestones
                1. A written employee participation plan stating how workers are consulted on each element.
                2. Operator and technician seats named for every PHA, audit and investigation team.
                3. A route for any employee to read PHA reports and other process safety information.
                4. Worker representatives briefed on the plan and their role in it.

                ## Notes
                Check that participation is real: a list of names on a PHA attendance sheet is not the same as an operator who spoke at it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written participation plan names worker roles for each element, and employees can access PHA reports through a published route."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the employee participation clause of the regulation that applies"
                - "Draft the participation plan with two worker representatives"
                - "Name operator and technician seats for PHA, audit and investigation teams"
                - "Publish where employees can read PHA reports and process safety information"
            - name: Process safety information gap assessment
              description: |-
                ## Purpose
                Hazard analyses, procedures and inspections are only as good as the information beneath them: safety data sheets, the chemistry, safe upper and lower limits, P&IDs, relief system design basis, electrical classification and materials of construction. Checking each piece of process safety information for each covered process shows where a PHA or a procedure is currently built on missing or out of date facts.

                ## Milestones
                1. A checklist of required process safety information for each covered process, grouped as chemical hazards, technology and equipment.
                2. Each item marked present and current, present but out of date, or missing.
                3. Safe operating limits and consequences of deviation found or flagged for each critical variable.
                4. Relief device design basis and sizing records located for every device in covered service.
                5. A prioritised list of gaps with owners and target dates.

                ## Notes
                The most common gaps are relief system design basis, consequences of deviation and P&IDs that no longer match the plant. Walk a sample of P&IDs before you trust them.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every covered process has a completed information checklist and a dated, owned list of gaps."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Build the process safety information checklist for one covered process"
                - "Ask document control for the current P&IDs and relief system files"
                - "Field walk three P&IDs and mark where the plant differs"
                - "Rank the gaps by the hazard of the process they support"
            - name: Baseline gap assessment against a PSM framework
              description: |-
                ## Purpose
                Before improving anything, a site needs an honest picture of where each element stands, ideally scored the same way every time so progress is visible. A structured gap assessment against your regulation and a recognised framework, with evidence sampled rather than asserted, becomes the baseline every later audit and improvement plan is measured against.

                ## Milestones
                1. An assessment protocol chosen, with questions for each element and a maturity scale.
                2. Interviews held with operators, maintenance technicians, engineers and supervisors, not only managers.
                3. Evidence sampled for each element: records, field checks and document reviews.
                4. Each element scored with a short explanation of the score.
                5. A summary report with the five weakest elements and recommended first actions.

                ## Notes
                Interview the night shift. Paper systems often look strongest where nobody checks how they work at 3 in the morning.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A scored gap assessment covering every PSM element, with sampled evidence and five priority weaknesses, is issued to site leadership."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Choose an assessment protocol and maturity scale for every element"
                - "Schedule interviews across all shifts and crafts"
                - "Sample twenty records per element as evidence"
                - "Score each element and write the reason in two sentences"
                - "Issue the summary report with the five weakest elements"
            - name: Major accident hazard register for the site
              description: |-
                ## Purpose
                Most sites have hundreds of PHA scenarios but cannot say in one page which ten events could kill people, destroy the plant or reach the community. A major accident hazard register lists those events, their worst credible consequences and the barriers that prevent and mitigate them, so leadership attention and money go where the catastrophic risk sits.

                ## Milestones
                1. Candidate major accident events drawn from PHAs, consequence studies and industry incidents.
                2. Each event described with its hazardous material, location, worst credible consequence and people exposed.
                3. Preventive and mitigating barriers listed for each event.
                4. The register reviewed by operations, engineering and the site manager.
                5. A review date set and the register linked from the element ownership chart.

                ## Notes
                Start from the **Risk register** template. Keep the register to the events that matter; a list of 200 is a PHA, not a major hazard register.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed register names each major accident event with its consequence, exposed population and listed barriers, and carries a review date."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pull the highest consequence scenarios from the latest PHAs"
                - "Add relevant industry incidents for the same materials and equipment"
                - "List preventive and mitigating barriers for each major event"
                - "Review the register with the operations and engineering managers"
            - name: PHA register and revalidation schedule
              description: |-
                ## Purpose
                Regulations typically require each covered process hazard analysis to be updated and revalidated at least every five years, and missing that date is one of the most common audit findings. A single register of every PHA, its method, date, team leader and next revalidation date lets the site book facilitators and teams a year ahead instead of scrambling.

                ## Milestones
                1. Every covered process matched to its most recent PHA report.
                2. Method, date, facilitator and number of open recommendations recorded for each.
                3. Revalidation due dates calculated and flagged where less than 18 months remain.
                4. A three-year plan of revalidations agreed with operations for team availability.
                5. The register filed where the PSM coordinator and auditors can both see it.

                ## Notes
                Revalidation is not a rubber stamp. Check that MOCs, incidents and changed process safety information since the last study are fed in.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register shows every covered process PHA with its date, method and revalidation due date, and a three-year revalidation plan is agreed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the latest PHA report for each covered process"
                - "Record method, date, facilitator and open recommendations in one register"
                - "Flag revalidations due within the next 18 months"
                - "Agree a three-year revalidation plan with the operations manager"
                - "Review the register and next year's PHA bookings @recurring(yearly)"
            - name: Operating procedure inventory and status
              description: |-
                ## Purpose
                Operators need written procedures for start-up, normal operation, temporary operation, emergency shutdown and return after shutdown, and those procedures must reflect the plant as it is now. An inventory of every procedure for every covered process, with its status and last certification date, shows where people are working from memory or from a document that describes equipment removed years ago.

                ## Milestones
                1. Every operating phase for each covered process mapped to an existing procedure or marked missing.
                2. Each procedure's revision, owner and last certification date recorded.
                3. Safe operating limits, consequences of deviation and steps to correct deviations checked as present in each procedure.
                4. Missing or overdue procedures listed with owners and target dates.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory lists every required operating procedure per covered process with revision, owner and certification date, and every gap has an owner."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export the procedure list for one covered process from the document system"
                - "Map each operating phase to an existing procedure or mark it missing"
                - "Check five procedures for safe limits and consequences of deviation"
                - "Assign owners and dates to every missing or overdue procedure"
            - name: Mechanical integrity covered equipment list
              description: |-
                ## Purpose
                The mechanical integrity element applies to specific equipment classes: pressure vessels, storage tanks, piping, relief and vent systems, emergency shutdown systems, controls and pumps in covered service. A clear list of which tagged items fall under the element, and which inspection and test programme covers each, is the foundation the inspection and maintenance teams build their plans on.

                ## Milestones
                1. Covered equipment classes defined for the site in a short written basis.
                2. Each tagged item in covered service listed with its class and criticality.
                3. Every item linked to an inspection, test or preventive maintenance plan in the maintenance system.
                4. Items with no plan identified and assigned to the integrity or maintenance lead.

                ## Notes
                This project defines the boundary. Detailed inspection planning belongs to the integrity team; the PSM view is that nothing in covered service is left without a plan.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tagged item in covered service is on the list with its class and a linked inspection or test plan, or an owned gap."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the basis that defines covered equipment classes for the site"
                - "Export tagged equipment in covered processes from the maintenance system"
                - "Check each item has a linked inspection or test plan"
                - "Send the list of unplanned items to the integrity lead"
            - name: Monthly process safety indicator dashboard
              description: |-
                ## Purpose
                Lagging counts of fires and releases arrive too late and too rarely to steer a site, while leading indicators such as overdue inspections, open actions and bypassed safeguards move every month. A dashboard built on the tiered approach in API RP 754 or the IOGP equivalent, with a short commentary, gives managers a monthly signal they can act on before an event.

                ## Milestones
                1. Tier 1 and Tier 2 process safety event definitions adopted and written down.
                2. Six to ten leading indicators chosen, each with a definition, data source and owner.
                3. A one-page dashboard issued each month with trends and a three-line commentary.
                4. Each red indicator linked to an action with an owner.

                ## Notes
                Start from the **Metrics log** template. Pick indicators that link to your major accident barriers; counting safety meetings held does not tell you whether a relief valve will lift.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dashboard with tiered event counts and at least six defined leading indicators is issued every month for six consecutive months."
                cadence: rolling
              tasks:
                - "Write the site definitions for Tier 1 and Tier 2 process safety events"
                - "Choose six leading indicators tied to major accident barriers"
                - "Compile and issue the process safety dashboard @recurring(monthly:5)"
                - "Review whether each indicator still drives action @recurring(quarterly)"
            - name: Recommendation and action tracking system
              description: |-
                ## Purpose
                PHA recommendations, audit findings, incident actions and PSSR punch items are where a site promises to reduce risk, and unclosed promises are exactly what investigators find after a major incident. One tracker for every process safety action, with owners, due dates, risk ranking and evidence of closure, makes overdue items visible and impossible to lose.

                ## Milestones
                1. All open process safety actions from every source loaded into one tracker.
                2. Each action carries a source, risk rank, owner, due date and closure evidence field.
                3. A rule agreed for changing a due date, requiring approval and a reason.
                4. Weekly and monthly reports of overdue actions issued to the relevant managers.

                ## Notes
                Closure means the change is in the field and verified, not that someone wrote a memo. Require a photo, a work order number or a revised document as evidence.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open process safety action sits in one tracker with owner, due date and evidence field, and an overdue report is issued every month."
                cadence: rolling
              tasks:
                - "Collect open actions from PHAs, audits, incidents and PSSRs into one list"
                - "Add risk rank, owner, due date and closure evidence fields"
                - "Chase actions due in the next fortnight with their owners @recurring(weekly:tue)"
                - "Send the overdue action report to the leadership team @recurring(monthly:20)"
            - name: Near miss and process safety event reporting routine
              description: |-
                ## Purpose
                For every serious release there are many small leaks, lifted relief valves and trips on demand that went unreported because nothing bad happened. A reporting routine that is quick, blame free and fed back to the reporter turns those weak signals into the cheapest learning the site will ever get.

                ## Milestones
                1. A short definition of what counts as a process safety near miss, with examples from the site.
                2. A reporting route that takes less than five minutes from the field or control room.
                3. Each report triaged within a week and classified by tier and barrier involved.
                4. A monthly feedback note to the workforce showing what was reported and what changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Near miss reports are triaged within seven days and the monthly feedback note is issued for six months running, with report numbers tracked."
                cadence: rolling
              tasks:
                - "Write a one-page near miss definition with five site examples"
                - "Test the reporting route with two operators and time how long it takes"
                - "Triage the week's near miss reports by tier and barrier @recurring(weekly:fri)"
                - "Publish a short note on what was reported and what was fixed"
            - name: Annual operating procedure certification cycle
              description: |-
                ## Purpose
                Most PSM regimes expect operating procedures to be certified as current and accurate at a set interval, often yearly, and a certification signed without anyone reading the procedure is worse than none. A cycle that spreads reviews across the year, involves the operators who use the procedure and records what changed keeps certification honest and the workload manageable.

                ## Milestones
                1. Procedures split into twelve monthly batches so no month carries the whole load.
                2. Each review done by an experienced operator and a supervisor, with field verification of key steps.
                3. Changes raised through the site change process where they alter the operation.
                4. A certification record signed for every procedure within the year.

                ## Notes
                Ask the reviewer to walk the procedure in the field for at least one critical section. Desk reviews miss valves that have moved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every covered operating procedure carries a certification signed within the last twelve months, with review notes on file."
                cadence: cyclic
              tasks:
                - "Split the procedure inventory into twelve monthly review batches"
                - "Pair each batch with an experienced operator and a supervisor"
                - "Field verify the critical steps of this month's procedures"
                - "Sign and file the annual certification statement @recurring(yearly)"
            - name: Deferral control for safety critical inspections and tests
              description: |-
                ## Purpose
                Inspections, proof tests and maintenance on safety critical equipment get deferred for good reasons, such as a unit that cannot come down, but uncontrolled deferrals are how a relief valve ends up untested for nine years. A deferral process with a risk assessment, temporary measures, a new date and a senior approval keeps every slip deliberate and visible.

                ## Milestones
                1. A written deferral procedure stating who may approve, for how long and with what assessment.
                2. Every current deferral on safety critical equipment listed with its approval and new date.
                3. Temporary measures for each deferral recorded and checked in the field.
                4. Deferral count and age reported as a leading indicator each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deferred safety critical inspection or test has a documented risk assessment, approval and new date, and the deferral count is reported monthly."
                cadence: rolling
              tasks:
                - "Draft a deferral procedure with approval levels and maximum durations"
                - "List all current deferrals on safety critical equipment"
                - "Check temporary measures for three deferrals in the field"
                - "Review new and ageing deferrals with the maintenance manager @recurring(monthly:12)"
            - name: Override and bypass register for safeguards
              description: |-
                ## Purpose
                Inhibited trips, forced instruments and bypassed interlocks are sometimes necessary during start-up or maintenance, but each one removes a layer of protection that the PHA assumed was there. A register of every active override with its reason, approval, compensating measure and expiry stops temporary bypasses from becoming permanent.

                ## Milestones
                1. A rule defining which overrides need approval, by whom and for how long.
                2. A live register of active overrides kept in the control room and checked each shift.
                3. Compensating measures, such as extra operator rounds, written against each override.
                4. Overrides older than the allowed limit escalated to the operations manager.

                ## Notes
                Compare the register against the control system's own list of forced points. The gap between them is often the real finding.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active override is in the register with approval, compensating measure and expiry, and the list matches the control system each week."
                cadence: rolling
              tasks:
                - "Write the approval rule for overrides on trips and interlocks"
                - "Set up the override register in the control room"
                - "Compare the register with the control system forced points list @recurring(weekly:mon)"
                - "Escalate any override past its expiry to the operations manager"
            - name: Contractor process safety management cycle
              description: |-
                ## Purpose
                Contractors carry out much of the highest risk work on a process site, often during turnarounds, and the PSM duty runs both ways: the host informs them of the hazards and checks their safety performance, while they train and control their own people. A cycle of prequalification, site hazard orientation and periodic performance evaluation keeps that duty from depending on whoever happens to manage the contract.

                ## Milestones
                1. Process safety criteria added to contractor prequalification, including safety record and training programme.
                2. A site orientation covering process hazards, emergency actions and the permit system for every contractor worker.
                3. A contractor injury and illness log maintained as the regulation requires.
                4. Each major contractor's process safety performance evaluated and recorded each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All major contractors are prequalified against process safety criteria, oriented on site hazards and evaluated each quarter with records on file."
                cadence: rolling
              tasks:
                - "Add process safety questions to the contractor prequalification form"
                - "Review the hazard orientation content with the operations superintendent"
                - "Check orientation records for one contractor crew on site"
                - "Evaluate major contractors' process safety performance @recurring(quarterly)"
            - name: Process safety training and refresher matrix
              description: |-
                ## Purpose
                Operators must be trained on the process and its procedures before working on it, with refresher training at set intervals, and each employee's competence documented. A matrix of who needs which training, by role and unit, with due dates and evidence of understanding rather than attendance, shows where competence has quietly lapsed.

                ## Milestones
                1. Training requirements set for each role on each covered process.
                2. Every operator and technician matched to their required courses with completion dates.
                3. Refresher intervals agreed with operators and written into the matrix.
                4. Competence checked by observation or test, not just a signature.

                ## Notes
                Ask operators how often they want refresher training. The regulation often expects their input on frequency, and they know which tasks are rarely practised.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A training matrix covers every covered process role with completion and refresher dates, and overdue training is reported monthly."
                cadence: rolling
              tasks:
                - "List required training per role for one covered process"
                - "Match operators to completion dates from the training records"
                - "Agree refresher intervals with a group of operators"
                - "Send overdue and soon-due training to supervisors @recurring(monthly:25)"
            - name: Emergency response drill programme
              description: |-
                ## Purpose
                An emergency plan that has never been exercised is a guess about how people will behave under pressure. A programme of drills that rotates through the major accident scenarios, shifts and response roles, with a short debrief each time, tests alarms, muster points, communications and shutdown actions before they are needed for real.

                ## Milestones
                1. A yearly drill calendar covering each major accident scenario and every shift.
                2. Each drill run with observers and timed against the plan's expectations.
                3. Debrief findings logged in the action tracker with owners.
                4. The emergency plan updated where drills showed it was wrong.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Drills run to the yearly calendar with every shift exercised at least once, and every debrief finding is tracked to closure."
                cadence: cyclic
              tasks:
                - "Draft a yearly drill calendar that covers each shift and major scenario"
                - "Brief two observers on what to time and record"
                - "Run the scheduled emergency drill and hold the debrief @recurring(quarterly)"
                - "Log drill findings in the action tracker with owners"
            - name: Quarterly process safety management review
              description: |-
                ## Purpose
                Leadership attention is the one resource every element depends on, and a standing review is where a site manager sees the indicators, the overdue actions and the weakest elements together. A tight quarterly meeting with a fixed agenda, decisions recorded and resources assigned keeps process safety on the same footing as production and cost.

                ## Milestones
                1. A fixed agenda covering indicators, events, overdue actions, element health and resource requests.
                2. The site manager chairing, with every element owner present or represented.
                3. Decisions and resource commitments minuted and tracked.
                4. Four reviews held in the year with minutes on file.

                ## Notes
                Start from the **Compliance control** template if your organisation tracks management reviews as a control with evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four management reviews are held in a year, chaired by the site manager, with minuted decisions tracked to completion."
                cadence: cyclic
              tasks:
                - "Write the fixed agenda for the process safety management review"
                - "Book the review in the site manager's calendar for the year"
                - "Prepare the pack and hold the management review @recurring(quarterly)"
                - "Ask the agent to draft the minutes and decision list from your notes"
            - name: Pre-startup safety review routine
              description: |-
                ## Purpose
                New and modified facilities must be checked before hazardous materials are introduced: built to design, procedures and training in place, PHA recommendations resolved and process safety information updated. A standard PSSR checklist and a clear rule on which items must close before start-up stop schedule pressure from deciding what is safe to open.

                ## Milestones
                1. A PSSR checklist covering construction, procedures, training, PHA actions and process safety information.
                2. Triggers for a PSSR defined, including new facilities and significant modifications.
                3. A rule separating items that must close before start-up from those that may follow.
                4. Open post-start-up items reviewed until every one is closed.

                ## Notes
                Physically walk the installation. A PSSR done from the office signs off what should have been built, not what was.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every start-up of a new or modified covered facility has a signed PSSR with pre-start items closed, and post-start items are reviewed monthly."
                cadence: rolling
              tasks:
                - "Draft the site PSSR checklist with must-close and may-follow items"
                - "Agree with operations which changes trigger a PSSR"
                - "Walk the next modified installation with the checklist before start-up"
                - "Review open post-start-up PSSR items with their owners @recurring(monthly:15)"
            - name: Process safety leadership field walks
              description: |-
                ## Purpose
                Managers learn more about the health of the PSM system in an hour on the plant than in a month of reports: which procedures are on the desk, which gauges are unreadable, which leaks have been tolerated. A monthly walk with a short theme, conversations with operators and two or three actions recorded keeps leaders connected to the hazards they are accountable for.

                ## Milestones
                1. A list of monthly walk themes, such as relief valves, procedures in use or housekeeping around hazardous inventories.
                2. Each walk done with an operator or technician from the area.
                3. Two or three findings recorded and entered in the action tracker.
                4. Feedback given to the area team within a week of the walk.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A leader completes at least ten themed process safety walks in a year, each with recorded findings and feedback to the area."
                cadence: rolling
              tasks:
                - "Write twelve monthly walk themes linked to your major hazards"
                - "Do this month's themed process safety walk with an area operator @recurring(monthly:17)"
                - "Enter the walk findings in the action tracker"
                - "Feed back what you saw to the area supervisor"
            - name: Learning the process safety regulatory landscape
              description: |-
                ## Purpose
                Engineers and managers new to process safety often know one regulation by reputation and none in detail. Reading the regulation that applies to your site alongside a recognised framework, such as the CCPS risk based process safety guidelines, and comparing them with a regime from another country, builds the understanding needed to explain why each element exists and not just what it demands.

                ## Milestones
                1. The text of the regulation that applies to your site read in full, with each element summarised in a line.
                2. The CCPS risk based process safety pillars and elements mapped against the regulation.
                3. One other regime, such as a Seveso based regime or a safety case regime, compared in a page.
                4. A short briefing given to colleagues on what the regulation requires and where the site is weakest.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written element-by-element summary and comparison exists, and a briefing has been given to at least three colleagues."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Download the full text of the process safety regulation for your site"
                - "Summarise each element of the regulation in one line"
                - "Map the regulation against the CCPS risk based process safety elements"
                - "Give a short briefing to colleagues on what you found"
            - name: Major accident case history study
              description: |-
                ## Purpose
                Almost every failure mode in a PSM system has already killed people somewhere: Flixborough and change control, Piper Alpha and permit handover, Texas City and siting and start-up, Buncefield and tank overfill. Studying a set of investigation reports and mapping each to the failed elements gives you arguments that persuade managers far better than a regulation clause.

                ## Milestones
                1. Six investigation reports read from bodies such as the US Chemical Safety Board or national regulators.
                2. Each incident summarised on one page: what happened, which elements failed and which barriers were missing.
                3. Each lesson checked against your own site, with a question you could ask tomorrow.
                4. One case presented at a toolbox talk or management meeting.

                ## Notes
                Choose incidents that share your materials or equipment. A refinery case lands harder on a refinery than a fertiliser case does.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six one-page case summaries are written with site questions, and one case has been presented to a site audience."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Pick six major incident investigation reports relevant to your site"
                - "Write a one-page summary of the first report with failed elements"
                - "Turn each lesson into a question to ask about your own site"
                - "Present one case at a toolbox talk or leadership meeting"
            - name: Consequence modelling basics for PSM practitioners
              description: |-
                ## Purpose
                Facility siting, emergency planning and major hazard registers all rely on consequence results: toxic dispersion distances, jet fire radiation, overpressure from a vapour cloud explosion. Understanding how those models work, what inputs drive them and where they mislead lets you challenge a consultant's study instead of simply filing it.

                ## Milestones
                1. The main consequence types and their harm criteria explained in your own notes.
                2. Key inputs such as release rate, hole size, weather and congestion understood for each type.
                3. One existing site consequence study read and its assumptions listed.
                4. Three questions raised with the study author about assumptions you found doubtful.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes cover each consequence type and its inputs, and an existing site study has been reviewed with three written questions to its author."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Read an introductory text on consequence analysis for process plants"
                - "Write notes on harm criteria for toxic, fire and explosion effects"
                - "List the assumptions in your site's latest consequence study"
                - "Send three questions on doubtful assumptions to the study author"
            - name: Human factors in process safety
              description: |-
                ## Purpose
                Investigations repeatedly find that people did what the system made easy: procedures were hard to follow, alarms flooded, fatigue was ignored and shift handover was rushed. Learning the core human factors topics and checking how they show up on your site lets you write recommendations that change the work, not just retrain the operator.

                ## Milestones
                1. Notes on the main human factors topics: procedures, workload, fatigue, communication, alarm handling and organisational change.
                2. A site review of one safety critical task, identifying how it could go wrong.
                3. Shift handover practice observed on at least two shifts.
                4. Three practical improvements proposed to the operations manager.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One safety critical task has a written human factors review and three improvement proposals have been made to the operations manager."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read a regulator's guidance on human factors in major hazard industries"
                - "Pick one safety critical task and list how it could go wrong"
                - "Observe shift handover on a day shift and a night shift"
                - "Propose three practical improvements to the operations manager"
            - name: Writing operating procedures operators actually use
              description: |-
                ## Purpose
                Many procedures are written by engineers for auditors, in long paragraphs with the warnings buried, and operators keep their own notes instead. Learning the craft of task-based procedure writing, with one action per step, warnings before the step they apply to and checklists where steps are critical, produces documents that get used at the panel and in the field.

                ## Milestones
                1. A procedure style guide drafted: format, step wording, warnings, cautions and sign-off points.
                2. One existing procedure rewritten to the guide with an experienced operator.
                3. The rewrite trialled in the field and timed against the old version.
                4. Operator feedback recorded and the style guide adjusted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A procedure style guide exists and one rewritten procedure has been trialled in the field with operator feedback recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Collect three procedures operators say they dislike and note why"
                - "Draft a one-page procedure style guide"
                - "Rewrite one procedure to the guide with an experienced operator"
                - "Trial the rewrite in the field and record operator feedback"
            - name: Facility siting of occupied buildings
              description: |-
                ## Purpose
                Control rooms, workshops and temporary trailers placed too close to hazardous inventories are where people die in explosions, as Texas City showed. Learning the siting approach in API RP 752 and 753 or equivalent guidance and applying it to the site's occupied buildings reveals where people sit inside blast, fire or toxic zones.

                ## Milestones
                1. The siting guidance read and its approach to permanent and portable buildings summarised.
                2. Every occupied building and portable cabin on the site listed with its occupancy.
                3. Each building screened against consequence results for blast, fire and toxic exposure.
                4. Buildings needing relocation, upgrade or occupancy limits listed for decision.

                ## Notes
                Turnarounds bring in trailers fast. Agree in advance where portable buildings may go so the decision is not made at mobilisation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every occupied and portable building is screened against consequence zones, with a list of buildings needing action sent to the site manager."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Read the facility siting guidance for permanent and portable buildings"
                - "List every occupied building and portable cabin with its occupancy"
                - "Screen each building against the site consequence results"
                - "Send the list of buildings needing action to the site manager"
            - name: Choosing a PSM software platform
              description: |-
                ## Purpose
                Spreadsheets for actions, procedures, MOCs and PHAs work until the site has 2,000 open items and three versions of every tracker. Comparing dedicated process safety software against the existing maintenance or quality system, on the same criteria, settles whether to buy, extend what you have or stay with well-controlled spreadsheets.

                ## Milestones
                1. Requirements written for action tracking, PHA records, procedures, MOC links, audits and indicators.
                2. Three options shortlisted, including extending an existing site system.
                3. Each option scored on the same criteria, with data migration and user licences costed.
                4. A recommendation approved by the site leadership and IT.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor to demonstrate your own messiest action set, not their sample data.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three options are scored against written requirements and a costed recommendation is approved by site leadership."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Write requirements for the PSM software with element owners"
                - "Shortlist three options including the existing maintenance system"
                - "Ask each vendor to demo with a sample of your real actions"
                - "Score the options and present a costed recommendation"
            - name: Moving from compliance PSM to risk based process safety
              description: |-
                ## Purpose
                Under a compliance mindset, every element and every unit is treated the same, while a risk based approach puts the most effort where the hazard and the weakness are greatest. Deciding how far to adopt a risk based model, and what that means for audit depth, PHA method and resource allocation, gives the site a reasoned plan rather than an even spread of paperwork.

                ## Milestones
                1. The risk based process safety principles summarised against your current practice.
                2. Units ranked by hazard and by element weakness from the gap assessment.
                3. Proposals for where to deepen and where to simplify, element by element.
                4. A decision recorded by the leadership team on the approach and its first changes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the risk based approach, with a unit ranking and element-by-element changes, is recorded by site leadership."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Summarise risk based process safety principles against current practice"
                - "Rank units by hazard and element weakness"
                - "Draft where effort should deepen and where it can simplify"
                - "Present the proposal to the leadership team for a decision"
            - name: Inherently safer design review of hazardous inventories
              description: |-
                ## Purpose
                The safest inventory is the one that is not there: smaller tanks, less toxic substitutes, lower pressures and simpler processes remove hazards rather than guard against them. A structured inherently safer review of the largest inventories, using the minimise, substitute, moderate and simplify strategies, often finds changes that cut both risk and the burden of the rest of the PSM system.

                ## Milestones
                1. The five largest hazardous inventories on the site listed with why each is that size.
                2. Each inventory reviewed against minimise, substitute, moderate and simplify.
                3. Options costed roughly and ranked by risk reduction.
                4. At least one change submitted through the site change process.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The five largest inventories have recorded inherently safer reviews, and at least one change has been raised through the change process."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the five largest hazardous inventories and the reason for each size"
                - "Hold a two-hour inherently safer review for the largest inventory"
                - "Rank options by risk reduction and rough cost"
                - "Raise the strongest option through the site change process"
            - name: Clearing the overdue process safety action backlog
              description: |-
                ## Purpose
                Overdue PHA and audit actions, some older than the last revalidation, are a common finding and a serious one: they are a record that the site knew and did not act. A focused campaign that sorts the backlog by risk, closes or legitimately rejects what it can and resources the rest returns the tracker to something leaders can trust.

                ## Milestones
                1. Every overdue action sorted by risk rank and age.
                2. Actions already done in the field closed with evidence, and duplicates merged.
                3. Actions proposed for rejection documented with a technical justification and approved.
                4. Remaining actions resourced with realistic dates agreed by their owners.
                5. Overdue count reduced by at least half within six months.

                ## Notes
                Start from the **Remediation plan** template. Rejecting an action is legitimate if the reasoning is written and approved; letting it age is not.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The overdue process safety action count falls by at least half within six months, with every closure or rejection evidenced."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export overdue actions and sort them by risk rank and age"
                - "Field check the top twenty overdue actions for work already done"
                - "Write justifications for actions proposed for rejection"
                - "Agree realistic dates for the rest with each owner"
            - name: Conduct of operations and operational discipline
              description: |-
                ## Purpose
                Plants can have every PSM document in place and still drift: procedures skipped, logs half filled, rounds rushed, handovers by text message. Defining what operational discipline means on your site, measuring a few observable behaviours and coaching to them closes the gap between the system on paper and the plant at 3 in the morning.

                ## Milestones
                1. Five to eight conduct of operations expectations written with operations supervisors.
                2. A short observation checklist for rounds, logs, handovers and procedure use.
                3. Observations done across all shifts for a month and the results shared.
                4. Coaching actions agreed with each shift team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Written conduct of operations expectations exist, a month of observations across every shift is complete and each shift has agreed coaching actions."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Draft conduct of operations expectations with two shift supervisors"
                - "Build a short observation checklist for rounds, logs and handovers"
                - "Observe each shift team at least twice in the month"
                - "Share the results and agree coaching actions with each shift"
            - name: Process safety culture survey and action plan
              description: |-
                ## Purpose
                Culture decides whether people stop a job, report a leak or challenge a manager, and it rarely matches what leaders believe. A short validated survey, backed by focus groups across crafts and shifts, gives an evidence based picture of where the culture is weak and what the workforce would change first.

                ## Milestones
                1. A survey instrument chosen, ideally one with published benchmarks.
                2. Response rate above 60 percent across all crafts and shifts.
                3. Focus groups held to explain the lowest scoring areas.
                4. An action plan of no more than five changes agreed and shared with the workforce.

                ## Notes
                Publish the results honestly, including the bad ones. A survey with hidden results makes the next one worthless.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A survey reaches at least 60 percent response, focus groups explain the weakest areas and a five-point action plan is published to the workforce."
                cadence: cyclic
                effort_hours_estimate: "30"
              tasks:
                - "Choose a process safety culture survey with published benchmarks"
                - "Agree survey timing with operations so every shift can respond"
                - "Run focus groups on the three lowest scoring areas"
                - "Publish the results and the five-point action plan"
                - "Plan the next culture survey with the leadership team @recurring(yearly)"
            - name: Preparing for a regulator's process safety inspection
              description: |-
                ## Purpose
                A regulator's PSM inspection samples documents and interviews operators without warning about which, and findings can lead to enforcement notices or penalties. Preparing as if any element could be examined, with evidence filed by element, owners briefed and a mock interview round held, shows the inspectors a system rather than a scramble.

                ## Milestones
                1. Evidence for every element filed in one place, indexed the way the regulation is written.
                2. Element owners briefed on likely questions and how to answer honestly.
                3. A mock inspection held, including unannounced field interviews.
                4. Gaps from the mock closed or covered by an owned action with a date.
                5. A host and escort plan for the inspection days agreed.

                ## Notes
                Never prepare people with scripted answers. Inspectors notice, and it undermines everything else they see.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An indexed evidence file, a completed mock inspection and an owned list of closed or tracked gaps exist before the inspection."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Create an evidence folder for each element in regulation order"
                - "Brief element owners on what inspectors are likely to sample"
                - "Run a mock inspection with field interviews on two shifts"
                - "Close or track every gap the mock inspection found"
            - name: Triennial PSM compliance audit
              description: |-
                ## Purpose
                Many PSM regulations require the employer to certify that compliance has been evaluated at least every three years, by at least one person knowledgeable in the process, and to respond to each finding. Planning the audit properly, with an independent lead, a sampling plan and a written response to every finding, turns a statutory obligation into the site's best health check.

                ## Milestones
                1. An audit team named with at least one member independent of the site and one who knows the process.
                2. A protocol and sampling plan covering every element and covered process.
                3. Fieldwork completed with interviews across shifts.
                4. A report issued and a documented response to every finding.
                5. Findings loaded into the action tracker with owners and dates.

                ## Notes
                Start from the **Compliance control** template. Keep the two most recent audit reports, as many regulations require.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A compliance audit report covering every element is issued, every finding has a documented response, and the certification is signed."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Check the date of the last compliance audit and when the next is due"
                - "Name an audit lead independent of the site"
                - "Write the protocol and sampling plan for every element"
                - "Load every audit finding into the action tracker with owners"
            - name: Process safety incident investigation set-up
              description: |-
                ## Purpose
                When a release, fire or serious near miss happens, the PSM element requires an investigation to start promptly, typically within 48 hours, with a team that includes someone who knows the process, and a report with recommendations. Having the team roles, evidence kit, report format and sharing route ready before the event means the first hours preserve evidence instead of arguing about who leads.

                ## Milestones
                1. An investigation procedure stating triggers, start time, team composition and report contents.
                2. A trained pool of investigation leads with deputies across shifts.
                3. An evidence preservation kit and checklist kept in the control room.
                4. A report template that links each recommendation to the action tracker.
                5. A route for sharing lessons with affected staff and other sites.

                ## Notes
                Detailed root cause methods belong to the investigation itself. This project makes sure the element is ready to run when needed.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written investigation procedure, a trained lead pool, an evidence kit and a report template linked to the action tracker are all in place."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Review the current incident investigation procedure against the regulation"
                - "Name and train a pool of investigation leads across shifts"
                - "Assemble an evidence preservation kit for the control room"
                - "Write a report template that links recommendations to the tracker"
            - name: Major emergency exercise with external responders
              description: |-
                ## Purpose
                When a loss of containment reaches the fence line, it involves the fire service, police, health services and neighbours, and their first contact with your site should not be during a real event. A full-scale exercise with external agencies tests command, communications, community warning and the interface between the site emergency plan and the off-site plan.

                ## Milestones
                1. A credible major accident scenario chosen from the hazard register.
                2. External agencies agreed to take part, with an exercise date and objectives.
                3. The exercise run with independent observers and a timeline recorded.
                4. A joint debrief held and findings assigned to site and agency owners.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full-scale exercise with at least two external agencies is held, debriefed jointly and its findings assigned to named owners."
                cadence: one-shot
                effort_hours_estimate: "50"
              tasks:
                - "Choose a major accident scenario from the hazard register"
                - "Contact the local fire service emergency planning officer to agree a date"
                - "Brief independent observers on the exercise objectives"
                - "Hold the joint debrief and assign findings to named owners"
            - name: Annual process safety performance report to the board
              description: |-
                ## Purpose
                Boards and executives carry ultimate accountability for major accident risk, yet many receive only personal injury rates, which say little about the chance of a catastrophe. An annual report on process safety events, leading indicators, major hazard barrier health, audit findings and next year's priorities gives them the information to ask the right questions.

                ## Milestones
                1. Tier 1 and Tier 2 events for the year summarised with trends.
                2. Leading indicators and barrier health shown against targets.
                3. Audit and inspection findings and their status reported.
                4. Three to five priorities proposed for next year with resource needs.
                5. The report presented and the board's decisions recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An annual process safety report is presented to the board or executive team and its decisions are recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Compile the year's process safety events and indicator trends"
                - "Summarise barrier health for the major accident hazards"
                - "Ask the agent to draft the executive summary from your data"
                - "Present the report and record the board's decisions"
            - name: First 90 days as a PSM coordinator
              description: |-
                ## Purpose
                New PSM coordinators inherit a system of uneven quality, owners who may not know they are owners and a backlog nobody has fully counted. A 90-day plan that spends the first month listening and reading, the second confirming the baseline and the third agreeing priorities stops the new role from becoming a full-time action chaser.

                ## Milestones
                1. Every element owner, shift supervisor and the site manager met in the first 30 days.
                2. Covered processes, open actions, PHA dates and the last audit understood by day 60.
                3. Three priorities for the year agreed with the site manager by day 90.
                4. A reporting rhythm with leadership established.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask every person you meet what worries them most about the plant; the answers are your first hazard register.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within 90 days every element owner has been met, the baseline is documented and three priorities are agreed with the site manager."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every element owner and shift supervisor to meet"
                - "Read the last compliance audit report and its responses"
                - "Ask each person you meet what worries them most about the plant"
                - "Agree three priorities for the year with the site manager"
            - name: Operations manager accountability for a covered process
              description: |-
                ## Purpose
                When an operations manager takes on a covered unit, they inherit its process safety risk whether or not anyone briefs them. Learning the unit's major hazards, its open actions, its overrides and its weakest elements in the first weeks lets the manager make decisions about rates, deferrals and staffing with the risk in view.

                ## Milestones
                1. The unit's major accident scenarios and their barriers explained by the process safety lead.
                2. Open PHA, audit and incident actions for the unit reviewed with their owners.
                3. Active overrides and deferrals on the unit reviewed and challenged.
                4. A personal list of the questions to ask at every production meeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The manager has reviewed the unit's major hazards, open actions, overrides and deferrals and holds a written list of standing process safety questions."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book an hour with the process safety lead on the unit's major hazards"
                - "Review the unit's open process safety actions with their owners"
                - "Walk the unit's active overrides and deferrals with the shift supervisor"
                - "Write your standing process safety questions for production meetings"
            - name: PSM for a small site without a specialist
              description: |-
                ## Purpose
                Small facilities, such as a chlorine water treatment plant, an ammonia refrigeration site or a gas bottling depot, can fall under the same regulations as a refinery with a fraction of the staff. A lean system that covers each element proportionately, with outside help bought only for the studies that need it, keeps a small operator compliant without pretending to be a major hazard corporation.

                ## Milestones
                1. Each required element mapped to a named person who already works on site.
                2. A short PSM manual of no more than 20 pages covering how each element runs.
                3. External support arranged for PHA facilitation and compliance audits.
                4. A monthly hour set aside to review actions, training and inspections.

                ## Notes
                Industry associations for ammonia refrigeration, chlorine and LPG often publish guidance written for small operators. Use it before paying for a bespoke system.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A small site has a written PSM manual under 20 pages, named element holders, external support arranged and a monthly review held for six months."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find industry guidance on PSM for your type of small facility"
                - "Assign every element to someone who already works on site"
                - "Draft a short PSM manual covering how each element runs"
                - "Hold the monthly hour on actions, training and inspections @recurring(monthly:10)"
            - name: Integrating an acquired facility into your PSM system
              description: |-
                ## Purpose
                Acquired sites arrive with their own procedures, trackers and assumptions, and the period after closing is when ownership of risks is most likely to fall between two systems. A structured integration that first confirms the critical elements are working, then aligns standards in an agreed order, protects people while the paperwork catches up.

                ## Milestones
                1. A rapid review of the acquired site's covered processes, open actions, overrides and recent incidents.
                2. Interim arrangements agreed for the highest risk elements during transition.
                3. A gap list between the acquired site's system and the group standard.
                4. An integration plan with dates for aligning each element.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A rapid review, interim arrangements for high risk elements and a dated integration plan for every element exist for the acquired site."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Request the acquired site's covered process list and open actions"
                - "Visit the site to review overrides, deferrals and recent incidents"
                - "Agree interim arrangements for the highest risk elements"
                - "Draft the integration plan with dates for each element"
            - name: Minimum staffing and competence through reorganisation
              description: |-
                ## Purpose
                Restructures, early retirements and hiring freezes can remove the experienced operator who knew how to handle a rare upset, and nobody notices until it is needed. Assessing minimum staffing for normal operation and for upsets, and mapping which critical knowledge sits with only one or two people, gives managers evidence before a reorganisation is finalised.

                ## Milestones
                1. Minimum staffing defined for normal operation, start-up and emergency scenarios.
                2. Critical tasks listed with the people currently competent to do them.
                3. Single points of knowledge identified, with a plan to transfer each one.
                4. Findings presented to the managers designing the reorganisation.

                ## Notes
                Organisational changes that affect process safety usually need to pass through your change process too. Raise it early, not after the announcement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A minimum staffing assessment and critical knowledge map are presented to the managers responsible before the reorganisation is decided."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the critical tasks for normal operation, start-up and upsets"
                - "Record who is currently competent to do each critical task"
                - "Mark tasks that rely on one or two people"
                - "Present the staffing assessment to the reorganisation leads"
            - name: Moving from design engineering into process safety
              description: |-
                ## Purpose
                Many process safety specialists start as process, mechanical or controls engineers and move across after sitting on a few HAZOPs. A deliberate development plan, covering the element knowledge, facilitation experience, case history reading and a recognised certification where your region offers one, makes the move a career step rather than an accident.

                ## Milestones
                1. A competence gap list against a published process safety competency framework.
                2. A mentor in the process safety function agreed.
                3. Hands-on experience gained in at least three elements, such as audit, investigation and PSSR.
                4. A certification or course chosen and booked where it adds value.

                ## Notes
                Start from the **Development plan** template. Professional bodies such as IChemE and CCPS publish competency frameworks and recognised qualifications.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written development plan with gaps, a mentor, experience in three elements and a booked course or certification exists."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Rate yourself against a published process safety competency framework"
                - "Ask a process safety specialist to mentor you for a year"
                - "Volunteer for the next PSSR or compliance audit team"
                - "Choose and book a course or certification that fills a gap"
            - name: Process safety for an idled or mothballed unit
              description: |-
                ## Purpose
                Units taken out of service for months, for feedstock shortages or market reasons, keep their hazards: trapped inventory, corroding equipment, disabled safeguards and procedures that drift out of memory. Running the idle period deliberately, with a preservation plan, safeguards status and a restart readiness checklist, avoids the incidents that cluster around long shutdowns and restarts.

                ## Milestones
                1. The unit's isolation and preservation state recorded, including any remaining inventory.
                2. Safeguards that remain in service and those disabled listed with justification.
                3. A monthly check of the idled unit carried out and recorded.
                4. A restart readiness checklist covering inspections, training refreshers and a PSSR.

                ## Notes
                Treat restart after a long idle period like a new start-up. Refresh operator training and walk the procedures before introducing hydrocarbons or chemicals.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An idled unit has a recorded preservation state, a safeguards list, monthly checks on file and a restart readiness checklist approved."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Record the idled unit's isolations and remaining inventory"
                - "List safeguards kept in service and those disabled, with reasons"
                - "Walk the idled unit and record its condition @recurring(monthly:3)"
                - "Draft the restart readiness checklist with operations and maintenance"
            - name: Bow-tie analysis of major accident hazards
              description: |-
                ## Purpose
                Bow-tie diagrams show, for one major accident event, the threats that can cause it, the consequences that can follow and the barriers on each path, in a form managers and operators can read in a minute. Building bow-ties for the events in the hazard register makes barrier ownership clear and exposes paths with only one weak barrier.

                ## Milestones
                1. Bow-ties built for the top five major accident events in the hazard register.
                2. Every barrier named with an owner and the element that sustains it.
                3. Barriers that depend on a single person, procedure or instrument flagged.
                4. Bow-ties reviewed in a workshop with operations and maintenance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Workshop-reviewed bow-ties exist for the top five major accident events, with every barrier owned and single-barrier paths flagged."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draw the bow-tie for the highest ranked major accident event"
                - "Name an owner and sustaining element for each barrier"
                - "Flag threat paths that rely on one weak barrier"
                - "Review the bow-ties in a workshop with operations and maintenance"
            - name: Safety critical element performance standards
              description: |-
                ## Purpose
                A barrier is only as good as its proof that it works on demand: a deluge system that delivers its design density, a gas detector that alarms at its set point, an emergency shutdown valve that closes in its specified time. Writing performance standards for each safety critical element, and checking test results against them, turns barrier management from a list into evidence.

                ## Milestones
                1. Safety critical elements identified from the bow-ties and hazard register.
                2. A performance standard for each, stating function, reliability, survivability and the test that proves it.
                3. Recent test results compared with each standard.
                4. Elements failing their standard reported with an action and owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every identified safety critical element has a written performance standard and its latest test result compared against it."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "List safety critical elements from the bow-ties and hazard register"
                - "Write a performance standard for the emergency shutdown valves"
                - "Compare the latest test results with each performance standard"
                - "Report failing elements with actions and owners"
            - name: Quantitative risk assessment scope and review
              description: |-
                ## Purpose
                A quantitative risk assessment estimates individual and societal risk from a facility and is often required for new developments, land use planning or a safety case. Writing a clear scope, choosing a competent consultant and reviewing the assumptions properly stops a QRA from becoming an expensive document that nobody believes or uses.

                ## Milestones
                1. The decision the QRA must inform written down, with the risk criteria to be used.
                2. A scope covering scenarios, frequencies, consequence models, population data and deliverables.
                3. A consultant chosen on competence and method, not price alone.
                4. Key assumptions reviewed with operations and engineering before results are accepted.
                5. Results linked to decisions and any risk reduction measures tracked.

                ## Notes
                Ask for the frequency data sources and population assumptions in an appendix. They drive the answer more than the software does.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A QRA is delivered against a written scope, its assumptions are reviewed and recorded, and resulting risk reduction measures are tracked."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the decision the QRA must inform and the risk criteria to use"
                - "Draft the QRA scope with scenarios, data sources and deliverables"
                - "Interview two consultants on their method and frequency data"
                - "Review the frequency and population assumptions with operations"
            - name: Safety case or major accident prevention report
              description: |-
                ## Purpose
                Safety case and Seveso style regimes ask the operator to demonstrate, in a document a regulator accepts, that major accident risks are identified and reduced to an acceptable level. Preparing or revising that report is a multi-month task that pulls together hazard identification, barriers, the management system and emergency arrangements into one argument.

                ## Milestones
                1. The regulator's guidance on structure and content read and the outline agreed.
                2. Hazard identification, risk assessment and barrier sections drafted from existing studies.
                3. The management system section written with evidence from each element.
                4. The draft reviewed internally by operations, engineering and the site manager.
                5. The report submitted and regulator questions logged with responses.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A safety case or major accident prevention report is submitted to the regulator, and every regulator question is logged with a response."
                cadence: phased
                effort_hours_estimate: "200"
              tasks:
                - "Download the regulator's guidance on safety report content"
                - "Agree the report outline and section owners"
                - "Draft the barrier section from the bow-ties and performance standards"
                - "Log regulator questions and responses in one register"
            - name: Multi-site process safety governance and benchmarking
              description: |-
                ## Purpose
                Managers responsible for several sites need to compare them fairly and spot which one is drifting before it has an event. Common indicator definitions, a shared assessment protocol and a quarterly review across sites let lessons, people and good practice move between locations instead of each site learning alone.

                ## Milestones
                1. Indicator and event definitions aligned across every site.
                2. A common assessment protocol and maturity scale adopted.
                3. A quarterly cross-site review held with each site manager and process safety lead.
                4. One lesson or practice transferred between sites each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All sites report on common definitions and a quarterly cross-site review is held four times in a year with transferred lessons recorded."
                cadence: rolling
              tasks:
                - "Compare indicator definitions across sites and list differences"
                - "Agree common definitions with each site's process safety lead"
                - "Hold the cross-site process safety review @recurring(quarterly)"
                - "Record one practice transferred between sites after each review"
---

# Process Safety Management

Process safety management is the set of interlocking elements that keep hazardous materials inside pipes and vessels: hazard analysis, process safety information, operating procedures, training, contractors, mechanical integrity, pre-startup reviews, emergency planning, incident investigation and audit. These projects are for the engineer or manager who has to run those elements, starting with the foundations (covered processes, element owners, a gap assessment, the hazard register and the core inventories), then the operating machinery that keeps them alive, the knowledge a process safety practitioner needs, the improvements and decisions that move a site from paperwork to performance, the audits and incidents that test the system, the situations different roles face, and the specialist work of barrier management, risk assessment and safety cases.

The rhythm is a weekly check of overrides and open actions, a monthly indicator dashboard with deferral, training and near miss reviews, a quarterly management review, drill and contractor evaluation, and a yearly cycle of procedure certification, PHA revalidation planning and culture survey. The Risk register, Metrics log, Compliance control, Remediation plan, Purchase decision, Onboarding 30/60/90 and Development plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
