---
id: engineering-practice.reliability-engineering
name: Reliability Engineering
description: "A working reliability programme for a plant: a clean asset hierarchy, criticality and failure codes, bad actor reviews, Weibull and RCM done properly, condition monitoring follow-up and the KPIs that show it paying off."
category: business
version: 1.0.0
tags: [engineering-practice, reliability-engineering, engineer, weibull, rcm, bad-actors, criticality, condition-monitoring]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - purchase-decision
    - vendor
    - onboarding-30-60-90
    - skills-matrix
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Reliability Engineering
          description: "Improving equipment reliability: failure data, Weibull analysis, criticality ranking, reliability-centred maintenance and bad actor reviews."
          projects:
            - name: Asset hierarchy and equipment register clean-up
              description: |-
                ## Purpose
                Failure history is only as useful as the equipment tags it hangs on, and most CMMS registers carry duplicate tags, orphaned motors and pumps logged against the wrong functional location. Agreeing a hierarchy from site down to maintainable item, in the spirit of the ISO 14224 taxonomy, and cleaning one unit against it, means every later Weibull plot and bad actor ranking counts the right failures.

                ## Milestones
                1. A written hierarchy standard with levels from site to maintainable item and a naming rule for each.
                2. One process unit walked down and its register reconciled with the P&IDs and the field tags.
                3. Duplicate, retired and mislocated tags corrected or flagged to the CMMS administrator.
                4. Equipment class and type filled in for every rotating and static item in that unit.

                ## Notes
                Clean one unit properly before attempting the whole site. A half-cleaned register across ten units is worse than one clean unit you can trust.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One process unit has a reconciled equipment register with class and type on every item, matching the P&IDs and field tags."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Export the CMMS register for one process unit to a spreadsheet"
                - "Draft the hierarchy levels and the naming rule for each level"
                - "Walk the unit with the P&IDs and mark tags that are missing or wrong"
                - "Send the correction list to the CMMS administrator with evidence"
            - name: Equipment criticality ranking matrix
              description: |-
                ## Purpose
                Engineering effort is scarce, and without a criticality ranking it goes to whichever machine made the most noise last week. A matrix that scores each asset on safety, environment, production and repair cost consequence, multiplied by a rough likelihood, gives a defensible A, B and C ranking that decides strategy, spares and monitoring for years.

                ## Milestones
                1. Consequence categories and scoring scales agreed with operations, maintenance and HSE.
                2. Every asset in the cleaned unit scored in a facilitated session, not by one engineer alone.
                3. A, B and C thresholds set so roughly 10 to 20 percent of assets land in A.
                4. The ranking loaded into the CMMS as a criticality field on each asset.

                ## Notes
                Score the consequence of a functional failure with existing redundancy in place. A spared pump with a working standby is rarely an A, however expensive it is.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every asset in at least one unit carries an A, B or C criticality in the CMMS, scored in a recorded cross-functional session."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft consequence scales for safety, environment, production and cost"
                - "Book a half-day scoring session with an operator, a planner and HSE"
                - "Score the unit's assets and record the reasoning for every A"
                - "Revisit criticality scores after plant or process changes @recurring(yearly)"
            - name: Failure mode and cause code library
              description: |-
                ## Purpose
                Closed work orders that say "pump repaired" tell you nothing about why it failed. A short list of failure modes, mechanisms and causes per equipment class, drawn from ISO 14224 and trimmed to what technicians will actually pick, turns every breakdown into data you can trend.

                ## Milestones
                1. Failure mode, mechanism and cause pick lists drafted for the five most common equipment classes.
                2. Each list cut to no more than about fifteen choices so technicians use it.
                3. The codes made mandatory on corrective work order close-out in the CMMS.
                4. Technicians and supervisors briefed with two worked examples each.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Failure mode and cause codes for at least five equipment classes are live and required on corrective work order close-out."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the five equipment classes with the most corrective work orders"
                - "Draft failure mode and cause codes for each class from ISO 14224"
                - "Test the codes on twenty recent work orders with a senior technician"
                - "Agree with the CMMS administrator how to make the codes mandatory"
            - name: Reliability KPI baseline from the last two years
              description: |-
                ## Purpose
                Every improvement claim needs a starting number, and the start of a programme is the only time you can set one without arguing. Calculating MTBF by equipment class, MTTR, unplanned downtime hours and corrective maintenance cost for the last 24 months gives the baseline your annual targets will be measured against.

                ## Milestones
                1. Corrective work orders and downtime events for 24 months extracted and filtered for one site or unit.
                2. MTBF and MTTR calculated for the top ten equipment classes, with the method written down.
                3. Unplanned downtime and corrective cost totalled by year.
                4. A one-page baseline sheet signed off by the maintenance manager.

                ## Notes
                Write down exactly how each figure was calculated, including what counted as a failure. Next year somebody will recalculate it differently and claim a 30 percent improvement.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A signed one-page baseline gives MTBF, MTTR, unplanned downtime and corrective cost for 24 months, with a written calculation method."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Extract 24 months of corrective work orders and downtime events"
                - "Define in writing what counts as a failure for the baseline"
                - "Calculate MTBF and MTTR for the top ten equipment classes"
                - "Review the baseline sheet with the maintenance manager"
            - name: Production loss accounting by equipment cause
              description: |-
                ## Purpose
                Operations usually knows how many tonnes or barrels were lost, and maintenance knows what broke, but the two numbers rarely meet. A simple loss log that ties each rate cut or trip to an asset and a cause makes it possible to rank bad actors by money lost, not by work order count.

                ## Milestones
                1. A loss log format agreed with the shift supervisors, with asset tag, duration, lost volume and cause.
                2. Loss categories separated into equipment, process, external supply and planned.
                3. Four weeks of losses recorded and reconciled with the daily production report.
                4. Lost volume converted to an agreed value per unit so losses can be ranked in money.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production loss above an agreed threshold is logged with an asset tag and cause, and the log reconciles with the production report each month."
                cadence: rolling
              tasks:
                - "Agree the loss log columns with two shift supervisors"
                - "Get finance or planning to agree a value per lost unit of production"
                - "Reconcile the week's losses against the production report @recurring(weekly:mon)"
                - "Ask the agent to summarise the month's losses by asset and cause"
            - name: First bad actor list from work history
              description: |-
                ## Purpose
                On most plants a small number of machines take most of the corrective spend, and naming them is the quickest visible win a new reliability effort can deliver. A Pareto of the last two years by corrective cost, failure count and lost production gives the top ten bad actors to attack first.

                ## Milestones
                1. Corrective cost, failure count and production loss pulled for every asset over 24 months.
                2. A Pareto chart showing what share of corrective cost the top 20 assets carry.
                3. A top ten list agreed with the maintenance and operations leads.
                4. A named owner and first action recorded against each of the ten.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A top ten bad actor list ranked by cost and loss, each with a named owner, is agreed with maintenance and operations."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull 24 months of corrective cost and failure counts by asset"
                - "Build a Pareto chart of corrective cost by asset"
                - "Cross-check the top twenty against the production loss log"
                - "Agree the top ten and an owner for each with the area leads"
            - name: Work order history data quality audit
              description: |-
                ## Purpose
                Before trusting any analysis, find out how bad the data is. Sampling a hundred closed corrective work orders and scoring each for correct asset, failure code, dates and a meaningful description tells you which conclusions you can draw now and which need better data first.

                ## Milestones
                1. A random sample of 100 closed corrective work orders drawn from the last year.
                2. Each scored on five fields: asset, failure code, start and finish dates, labour and description.
                3. A data quality score by craft and by area, with the three most common faults named.
                4. Fixes agreed with supervisors and a monthly spot check in place.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A scored sample of 100 work orders gives a data quality percentage by area, and three agreed fixes have owners."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draw a random sample of 100 closed corrective work orders"
                - "Score each work order on the five quality fields"
                - "Share the score and the worst examples with the supervisors"
                - "Spot check ten newly closed work orders for code quality @recurring(monthly:17)"
            - name: Reliability engineer role charter
              description: |-
                ## Purpose
                Reliability engineers get pulled into breakdown firefighting, planning gaps and project work until no reliability work happens at all. A one-page charter that says what you own, what you support and what you hand back to maintenance and operations protects the time needed for analysis and gives your manager something to point to.

                ## Milestones
                1. A list of what you own, support and do not do, drafted from a week of tracking your own time.
                2. Interfaces with planning, operations, inspection and projects written as one line each.
                3. A target split of time, for example no more than a fifth on breakdown support.
                4. The charter agreed with your manager and shared with the maintenance leads.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page reliability role charter with a target time split is agreed with your manager and shared with maintenance and operations leads."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Track how you spend your time for one working week"
                - "Draft the own, support and hand back lists"
                - "Write one line on each interface with planning, operations and inspection"
                - "Review the charter with your manager and agree the time split"
            - name: Twelve-month reliability improvement plan
              description: |-
                ## Purpose
                Once the baseline and bad actor list exist, the programme needs a plan that management can fund and judge. A one-year plan with three or four measurable targets, the projects behind each and the resources needed turns reliability from a good intention into a line in the site business plan.

                ## Milestones
                1. Three or four targets set against the baseline, for example a 15 percent cut in corrective cost on A assets.
                2. Each target linked to named projects, owners and quarter-by-quarter milestones.
                3. Resource needs costed, including condition monitoring services and training.
                4. The plan approved by the site leadership team and added to the business plan.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-year reliability plan with three or four targets tied to the baseline is approved by site leadership."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose three or four targets that the baseline can measure"
                - "Map each target to projects, owners and quarterly milestones"
                - "Cost the external services and training the plan needs"
                - "Present the plan at the site leadership meeting for approval"
            - name: Monthly bad actor review meeting
              description: |-
                ## Purpose
                Left unreviewed, a bad actor list goes stale within a quarter. A 45-minute monthly meeting with maintenance and operations, working from refreshed rankings, keeps the top ten moving, retires assets once fixed and adds new ones before they become chronic.

                ## Milestones
                1. A standing monthly slot with maintenance, operations and the planner agreed.
                2. A refreshed ranking and the status of each open action sent two days ahead.
                3. A rule for graduating an asset off the list, such as twelve months without a functional failure.
                4. Minutes with decisions and owners filed after every meeting.

                ## Notes
                Start from the **Meeting notes** template. Keep the meeting to decisions; analysis happens before and after it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The bad actor meeting runs at least ten times a year, with minutes, and at least three assets graduate off the list in the first year."
                cadence: rolling
              tasks:
                - "Book a recurring 45-minute slot with maintenance and operations leads"
                - "Write the graduation rule for leaving the bad actor list"
                - "Refresh the bad actor ranking and send the pack @recurring(monthly:9)"
                - "File minutes with each decision, owner and date"
            - name: Weekly breakdown and failure review
              description: |-
                ## Purpose
                Breakdowns are freshest in the week they happen, when the technician still remembers what the bearing looked like and the parts are still in the bin. A short weekly review of every functional failure on A and B assets catches poor failure coding, triggers deeper analysis early and keeps failed parts from being thrown away.

                ## Milestones
                1. A weekly list of functional failures on A and B assets produced from the CMMS.
                2. Each failure checked for correct coding and a short cause note.
                3. Failed components from A assets quarantined and tagged for inspection.
                4. Failures meeting the RCFA trigger flagged to the investigation lead the same week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every functional failure on an A or B asset is reviewed within seven days, with coding corrected and RCFA triggers flagged."
                cadence: rolling
              tasks:
                - "Set up a saved CMMS query for the week's failures on A and B assets"
                - "Agree a quarantine shelf and tag for failed parts from A assets"
                - "Review the week's failures with the maintenance supervisor @recurring(weekly:tue)"
                - "Flag failures that meet the RCFA trigger to the investigation lead"
            - name: Monthly reliability KPI dashboard
              description: |-
                ## Purpose
                Management will judge the programme on a few numbers, so choose them before someone else does. A monthly page with MTBF on key equipment classes, unplanned downtime, corrective cost, repeat failures and condition monitoring compliance, shown as twelve-month trends against the baseline, tells a clear story without a slide deck.

                ## Milestones
                1. Five to seven KPIs chosen, each with a definition and data source.
                2. Twelve-month rolling trends plotted against the baseline and the annual targets.
                3. A short commentary line under each chart saying what moved and why.
                4. The dashboard issued to the maintenance and site leadership teams on a fixed day.

                ## Notes
                Start from the **Metrics log** template. Lead with lagging measures management cares about and two leading ones, such as condition monitoring compliance and bad actor actions closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly KPI page with rolling trends against baseline is issued on the same working day each month for at least ten months a year."
                cadence: rolling
              tasks:
                - "Choose five to seven KPIs and write a one-line definition for each"
                - "Build the trend charts from the baseline data"
                - "Update and issue the reliability dashboard @recurring(monthly:5)"
                - "Add one sentence of commentary under each chart before issue"
            - name: Condition monitoring exception follow-up
              description: |-
                ## Purpose
                Vibration, oil analysis and thermography routes only pay off when their alarms turn into work orders, and on many plants half the exceptions are never acted on. Owning the loop from analyst report to planned repair to confirmed fix closes the gap between detecting a fault and preventing the failure.

                ## Milestones
                1. Every open condition monitoring exception listed with severity, asset and date found.
                2. A rule that each exception above a set severity gets a work order within five working days.
                3. Route coverage of A assets checked against the criticality ranking.
                4. A monthly count of exceptions raised, actioned and confirmed fixed by follow-up reading.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 90 percent of condition monitoring exceptions above the agreed severity have a work order within five working days, tracked monthly."
                cadence: rolling
              tasks:
                - "Collect all open vibration, oil and thermography exceptions in one list"
                - "Agree the five-day work order rule with the planner"
                - "Chase exceptions without a work order and confirm fixes @recurring(weekly:thu)"
                - "Check monitoring route coverage against A-ranked assets @recurring(quarterly)"
            - name: Lubrication programme stewardship
              description: |-
                ## Purpose
                Poor lubrication sits behind a large share of bearing and gearbox failures, and it is usually the cheapest failure cause to remove. Owning the lubricant list, storage and handling, top-up routes and oil sampling results stops the slow damage from wrong grades, contaminated grease guns and dirty oil in open drums.

                ## Milestones
                1. A lubrication schedule listing the lubricant, quantity and frequency for every A and B asset.
                2. The number of lubricant products consolidated where the OEM allows.
                3. The lube store inspected and set up with sealed, labelled containers and filtered transfer.
                4. Oil analysis results reviewed monthly with actions for contamination and degradation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every A and B asset has a lubrication specification on file, the lube store passes a housekeeping check, and oil results are reviewed monthly."
                cadence: rolling
              tasks:
                - "Walk the lube store and photograph open containers and unlabelled guns"
                - "Compile lubricant, quantity and frequency for all A and B assets"
                - "Propose a consolidated lubricant list to the supplier for review"
                - "Review the month's oil analysis results and raise actions @recurring(monthly:14)"
            - name: Preventive maintenance effectiveness review
              description: |-
                ## Purpose
                Many PM tasks were copied from an OEM manual twenty years ago and have never found a fault. Reviewing PM results by task, checking how often each one finds a defect and whether failures still happen between them, shows which tasks to keep, change or stop.

                ## Milestones
                1. PM tasks on A assets listed with their findings rate over the last two years.
                2. Tasks that never find anything and tasks followed by failures flagged.
                3. Recommended changes agreed with the planner and craft supervisors.
                4. Changes made in the CMMS and logged with the reason for each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, the PM tasks on at least one equipment class are reviewed for findings rate and changes are logged with reasons."
                cadence: cyclic
              tasks:
                - "Export PM task results for one equipment class on A assets"
                - "Calculate how often each PM task found a defect"
                - "Agree keep, change or stop for each task with the supervisor"
                - "Review PM findings rates for the next equipment class @recurring(quarterly)"
            - name: Repeat failure tracker and RCFA trigger
              description: |-
                ## Purpose
                Two failures of the same seal in a year is a pattern, and three is a choice to keep paying for it. A tracker that flags any asset with repeat failures of the same mode inside twelve months sends it for root cause failure analysis before the fourth one happens.

                ## Milestones
                1. A repeat failure rule written, such as two failures of the same mode on one asset in twelve months.
                2. A report that applies the rule to the CMMS data each month.
                3. Every flagged asset either sent for RCFA or given a recorded reason not to.
                4. A count of repeat failures trended on the KPI dashboard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The repeat failure report runs monthly, and every flagged asset has an RCFA reference or a recorded decision within 30 days."
                cadence: rolling
              tasks:
                - "Write the repeat failure rule and agree it with the maintenance manager"
                - "Build the monthly repeat failure query from failure codes"
                - "Run the repeat failure report and decide on each flag @recurring(monthly:21)"
                - "Add the repeat failure count to the KPI dashboard"
            - name: Reliability action register and close-out
              description: |-
                ## Purpose
                Bad actor reviews, RCFAs, PM reviews and RCM studies all produce actions, and they die in separate spreadsheets. One register with an owner, due date and verification step for every reliability action, reviewed weekly, is the difference between a programme and a pile of reports.

                ## Milestones
                1. All open reliability actions from every source gathered into one register.
                2. Each action given an owner, a due date and a way to verify it worked.
                3. Overdue actions escalated through an agreed route after 30 days.
                4. A monthly close-out rate reported on the KPI dashboard.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single reliability action register is reviewed weekly, and the close-out rate of actions due that month stays above 80 percent."
                cadence: rolling
              tasks:
                - "Collect open actions from RCFA reports, bad actor minutes and PM reviews"
                - "Give every action an owner, due date and verification method"
                - "Review overdue and due-this-week actions with owners @recurring(weekly:fri)"
                - "Agree the escalation route for actions overdue by 30 days"
            - name: Annual reliability programme review
              description: |-
                ## Purpose
                Once a year the programme needs an honest look at what worked, what did not and what to stop. Comparing the year's KPIs to the baseline and targets, and asking maintenance and operations what they noticed, sets next year's plan on evidence rather than habit.

                ## Milestones
                1. The year's KPIs compared with baseline and targets on one page.
                2. Savings and avoided losses estimated for the three biggest wins, with the method stated.
                3. Feedback gathered from at least three maintenance and three operations people.
                4. Next year's targets and the projects to stop, keep and start agreed with your manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written annual review compares results with targets, estimates three savings with a method, and sets next year's targets."
                cadence: cyclic
              tasks:
                - "Pull the year's KPIs into a comparison with baseline and targets"
                - "Estimate savings for the three biggest improvements"
                - "Ask six people in maintenance and operations what changed for them"
                - "Run the annual reliability programme review @recurring(yearly)"
            - name: Defect elimination with frontline crews
              description: |-
                ## Purpose
                Technicians and operators see small defects every day, such as weeping flanges, loose guards and vibrating pipework, that grow into failures if nobody acts. A monthly defect elimination session where a crew picks one recurring defect, finds its cause and fixes it builds reliability ownership far faster than reports from an office.

                ## Milestones
                1. A simple defect capture card or app form agreed with the crews.
                2. One crew session a month choosing and working one recurring defect.
                3. Each fix recorded with before and after photos and the time it saved.
                4. Twelve defects eliminated in the first year and shared in a site notice.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten crew-led defect eliminations are completed and recorded with photos in a year."
                cadence: rolling
              tasks:
                - "Design a one-page defect capture card with two technicians"
                - "Agree a crew and a slot for the first session with the supervisor"
                - "Run the crew defect elimination session @recurring(monthly:26)"
                - "Post before and after photos of each fix on the site notice board"
            - name: Weibull analysis on real failure data
              description: |-
                ## Purpose
                Weibull analysis tells you whether an equipment class fails early, randomly or from wear-out, and that one fact decides whether time-based replacement makes sense at all. Working through a full analysis on your own plant's data, from times to failure to a fitted beta and eta, turns a textbook method into one you will use.

                ## Milestones
                1. Times to failure for one equipment class built from the work order history.
                2. A two-parameter Weibull fitted by median rank regression and checked against maximum likelihood.
                3. The beta value interpreted as infant mortality, random or wear-out, with the confidence bounds noted.
                4. A one-page note on what the result means for that class's maintenance strategy.

                ## Notes
                A beta near 1 means time-based replacement will not help. Check for mixed failure modes before trusting a single line: a dog-leg on the plot usually means two populations.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Weibull analysis on one equipment class with beta, eta, confidence bounds and a written strategy implication is reviewed by a peer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one equipment class with at least ten recorded failures"
                - "Build the times to failure column from work order dates"
                - "Fit a Weibull by rank regression and by maximum likelihood"
                - "Write a one-page note on beta, eta and the strategy implication"
            - name: Suspensions and censored data in life analysis
              description: |-
                ## Purpose
                Leaving out pumps that were replaced before failing, or are still running, makes equipment look far less reliable than it is. Learning to handle right-censored and interval data properly is what separates a credible life analysis from one a sceptical manager can take apart.

                ## Milestones
                1. The difference between failures, suspensions and interval data explained in your own words.
                2. A previous Weibull analysis rerun with suspensions included.
                3. The change in eta and beta recorded and explained.
                4. A rule written for how suspensions are extracted from the CMMS in future.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One life analysis is rerun with suspensions included, and the change in parameters is documented with an extraction rule."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a reference chapter on censored life data"
                - "Identify suspensions for the class you analysed before"
                - "Rerun the analysis with suspensions and compare the results"
                - "Write the CMMS extraction rule for suspensions"
            - name: Reliability block diagrams for system availability
              description: |-
                ## Purpose
                A spare pump does not double reliability if both share one suction strainer and one power feed. Drawing reliability block diagrams for a real system, with series, parallel and k-out-of-n arrangements, shows where redundancy helps and where a single component quietly controls availability.

                ## Milestones
                1. One production system drawn as a reliability block diagram from its P&ID.
                2. Series, parallel and standby blocks used correctly, with common elements shown.
                3. System availability calculated from block MTBF and MTTR values.
                4. The weakest block identified and a sensitivity check run on it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reliability block diagram for one real system gives a calculated availability and names the block that limits it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a system with some redundancy, such as a cooling water circuit"
                - "Draw its blocks from the P&ID, including shared utilities"
                - "Calculate block and system availability in a spreadsheet"
                - "Test how much availability changes if the weakest block improves"
            - name: Rotating equipment failure mechanisms
              description: |-
                ## Purpose
                Any reliability engineer who cannot read a failed bearing or seal relies on whoever did the repair. Learning the common mechanisms in pumps, compressors, fans and gearboxes, such as fatigue spalling, false brinelling, seal face heat checking and coupling misalignment wear, lets you challenge a diagnosis and pick the right fix.

                ## Milestones
                1. Reference images of the ten most common bearing and seal failure appearances collected.
                2. Three failed components from your own plant examined with a technician and the mechanism named.
                3. Each mechanism linked to its usual causes, such as lubrication, alignment or operation off design point.
                4. A one-page field guide for technicians drafted from what you learned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three failed components from site are examined, their mechanisms recorded with causes, and a one-page field guide is drafted."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Download a bearing manufacturer's failure analysis guide"
                - "Ask the workshop to keep the next three failed bearings or seals"
                - "Examine each failed part with a technician and photograph it"
                - "Draft a one-page failure appearance guide for the workshop"
            - name: P-F intervals and monitoring technique selection
              description: |-
                ## Purpose
                Monitoring a gearbox monthly is pointless if the fault goes from detectable to failed in two weeks. Understanding the P-F interval for each failure mode, and which technique detects it earliest, lets you set route frequencies on reasoning rather than vendor habit.

                ## Milestones
                1. The P-F curve and the half-interval rule for setting inspection frequency understood.
                2. For five failure modes, the earliest detecting technique and a rough P-F interval recorded.
                3. Current route frequencies compared with those intervals.
                4. At least one frequency change proposed with the reasoning written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of five failure modes with technique, estimated P-F interval and route frequency is written, with one change proposed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a reference on the P-F curve and inspection intervals"
                - "List five common failure modes on your A assets"
                - "Note the best detection technique and P-F estimate for each"
                - "Compare route frequencies and propose one change"
            - name: Vibration analysis basics for reliability engineers
              description: |-
                ## Purpose
                You do not need to be a certified analyst, but you do need to read a spectrum well enough to question a report. Learning to recognise unbalance, misalignment, looseness and bearing defect frequencies on your own plant's data makes conversations with the vibration contractor far more productive.

                ## Milestones
                1. Overall levels, spectra and time waveforms explained in your own words.
                2. Signature patterns for unbalance, misalignment, looseness and bearing defects recognised.
                3. Bearing defect frequencies calculated for one machine from its bearing numbers.
                4. Two recent contractor reports reviewed with the analyst and your questions answered.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Bearing defect frequencies are calculated for one machine and two contractor vibration reports are reviewed with the analyst."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Work through an introductory vibration analysis course or text"
                - "Calculate bearing defect frequencies for one critical pump"
                - "Ask the vibration analyst to walk you through two recent spectra"
                - "Note the three questions you will ask on every future report"
            - name: Reliability growth tracking with Crow-AMSAA
              description: |-
                ## Purpose
                After a fix, people want to know if it worked, and MTBF over a short period swings too much to tell. A Crow-AMSAA plot of cumulative failures against cumulative time shows a change in failure rate after an intervention, often within a few failures.

                ## Milestones
                1. The Crow-AMSAA method and the meaning of its slope understood.
                2. A plot built for one bad actor or equipment class covering at least two years.
                3. The date of a known intervention marked and the slope before and after compared.
                4. The plot added to the quarterly reporting for that asset.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A Crow-AMSAA plot for one asset group shows the slope before and after a dated intervention and is updated each quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a reference on Crow-AMSAA reliability growth plots"
                - "Build cumulative failure and time data for one bad actor"
                - "Plot it on log-log axes and mark the intervention date"
                - "Update the reliability growth plot with new failures @recurring(quarterly)"
            - name: RCM analysis on one critical system
              description: |-
                ## Purpose
                Reliability-centred maintenance asks what each function needs, how it fails and what task is worth doing, and on a well chosen system it removes useless PMs while adding the few that matter. Running one RCM analysis to the SAE JA1011 criteria on a single A-ranked system proves the method on your plant before anyone talks about rolling it out.

                ## Milestones
                1. One A-ranked system chosen and its boundaries, functions and performance standards defined.
                2. Functional failures, failure modes and effects recorded with a small team including an operator.
                3. A task chosen for every failure mode using a consequence-based decision logic.
                4. The new maintenance plan compared with the old one in tasks and annual hours.
                5. The new plan loaded into the CMMS and a review date set.

                ## Notes
                Keep the team to four or five people with real plant knowledge and meet in two-hour blocks. RCM fails when it becomes a paper exercise run by a consultant alone.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One system has a completed RCM analysis with a task for every failure mode and a new maintenance plan loaded in the CMMS."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Choose one A-ranked system with a clear boundary and good history"
                - "Name a team of four or five, including an operator and a technician"
                - "Book six two-hour analysis sessions over two months"
                - "Compare the new and old plans in tasks and annual labour hours"
            - name: PM optimisation for one equipment class
              description: |-
                ## Purpose
                Where full RCM is too heavy, PM optimisation reviews the existing task list against known failure modes and is usually done in days, not months. Applying it to a high-volume class such as electric motors or centrifugal pumps can cut PM labour sharply while closing the gaps that let failures through.

                ## Milestones
                1. Existing PM tasks for the class listed with frequency and annual hours.
                2. Each task mapped to the failure mode it is meant to address, or marked as having none.
                3. Failure modes in the history with no task covering them identified.
                4. A revised task list with annual hours compared to the old one, approved by the maintenance manager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One equipment class has a revised PM task list mapped to failure modes, with the change in annual hours approved."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Export all PM tasks for one high-volume equipment class"
                - "Map each task to the failure mode it addresses"
                - "List failure modes from history that no task covers"
                - "Present the revised task list and hours to the maintenance manager"
            - name: Run-to-failure rules for non-critical assets
              description: |-
                ## Purpose
                Some assets cost less to replace when they fail than to inspect, and planning PMs on them wastes time that A assets need. A written run-to-failure policy, with clear rules on which C assets qualify and how spares are held, makes this a deliberate decision rather than neglect.

                ## Milestones
                1. Criteria written for run-to-failure, such as low consequence, cheap replacement and no hidden failure.
                2. C-ranked assets screened and a run-to-failure list drafted.
                3. PM tasks on those assets retired or reduced, with the hours saved recorded.
                4. The list approved and marked in the CMMS so failures are not treated as surprises.

                ## Notes
                Never run to failure an asset whose failure is hidden, such as a standby pump or a protective device, without a test regime. That is where this policy goes wrong.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A run-to-failure policy and an approved asset list are recorded in the CMMS, with the PM hours retired noted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the run-to-failure criteria including the hidden failure exclusion"
                - "Screen C-ranked assets against the criteria"
                - "Agree the list and the PMs to retire with the planner"
                - "Re-screen the run-to-failure list against the year's failures @recurring(yearly)"
            - name: Repair or replace decision for a bad actor
              description: |-
                ## Purpose
                When a pump has been rebuilt six times in four years, the question is whether a seventh rebuild, an upgrade or a new machine is cheapest over the next ten years. A life cycle comparison with real repair costs, downtime losses and the reliability of each option gives a decision you can defend to finance.

                ## Milestones
                1. Repair history, costs and downtime losses for the asset gathered for the last five years.
                2. Three options defined: continue repairs, upgrade components, or replace with a different design.
                3. A ten-year cost comparison of the three, including expected failures and losses.
                4. A recommendation approved and the chosen option scheduled.

                ## Notes
                Start from the **Purchase decision** template. Check whether the asset runs off its best efficiency point before replacing it like for like, or the new one will fail the same way.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ten-year cost comparison of three options for one bad actor is approved, and the chosen option has a scheduled date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect five years of repair cost and downtime for the asset"
                - "Check the asset's operating point against its performance curve"
                - "Ask the OEM and one alternative supplier for upgrade and replacement quotes"
                - "Build the ten-year comparison and write the recommendation"
            - name: Insurance spares decision from failure data
              description: |-
                ## Purpose
                Holding a spare compressor rotor ties up capital, but waiting forty weeks for one after a failure can cost far more. Using failure rates, lead times and downtime cost to decide which high-value insurance spares to hold turns a stores argument into a calculation.

                ## Milestones
                1. High-value, long lead time components on A assets listed with price and lead time.
                2. Failure rate estimates and downtime cost per day recorded for each.
                3. Expected cost of not holding each spare compared with the holding cost.
                4. A hold or do not hold decision recorded for each item and shared with stores.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every high-value long lead spare on A assets has a recorded hold or do not hold decision based on failure rate, lead time and downtime cost."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List components over an agreed value with lead times above twelve weeks"
                - "Estimate a failure rate for each from history or OEM data"
                - "Compare the expected cost of a stockout with the holding cost"
                - "Re-check insurance spares decisions against new lead times @recurring(yearly)"
            - name: Choosing reliability analysis software
              description: |-
                ## Purpose
                Spreadsheets carry you a long way, but Weibull with suspensions, RBD simulation and RCM records eventually need a proper tool. Comparing a few options against your real needs, data sources and budget avoids buying a suite that nobody opens after the training week.

                ## Milestones
                1. Requirements written: life data analysis, RBD, RCM records, CMMS integration and number of users.
                2. Three tools shortlisted, including one free or open-source option.
                3. Each tool trialled on the same real data set.
                4. A choice recorded with cost, licence terms and who will use it.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three reliability tools are trialled on the same data set and a decision with cost and users is recorded."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Write the requirement list with must-haves and nice-to-haves"
                - "Shortlist three tools and request trial licences"
                - "Run the same Weibull data set through each tool"
                - "Record the choice, cost and named users"
            - name: Mechanical seal reliability improvement
              description: |-
                ## Purpose
                Mechanical seals are often the single largest cause of pump failures, and most seal failures come from the system around them rather than the seal itself. Reviewing seal types, flush plans and operating conditions on your worst pumps can lift seal life from months to years.

                ## Milestones
                1. Seal failures for the last two years ranked by pump and failure appearance.
                2. Seal type, flush plan and operating conditions recorded for the worst ten pumps.
                3. Mismatches with the pump's service identified with the seal vendor, for example a wrong API flush plan.
                4. Upgrades agreed for the top three pumps and seal life tracked afterwards.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The ten worst seal applications are reviewed with the vendor and upgrades on the top three are installed and tracked for seal life."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Rank pumps by seal failures over the last two years"
                - "Record seal type and flush plan for the worst ten"
                - "Book a review of the ten applications with the seal vendor"
                - "Track seal life on the upgraded pumps in the bad actor pack"
            - name: Precision alignment and balancing standards
              description: |-
                ## Purpose
                Misalignment and unbalance shorten bearing and seal life on every machine they touch, and a site standard is cheap compared with the failures. Writing tolerances for shaft alignment, soft foot and balancing, and making laser alignment reports part of every job close-out, raises the quality of every repair.

                ## Milestones
                1. Alignment tolerances by speed, soft foot limits and balancing grades written into a site standard.
                2. Laser alignment tools and trained users confirmed for each workshop.
                3. Alignment and soft foot readings made mandatory on rotating equipment work orders.
                4. Six months of results reviewed for compliance and effect on repeat failures.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A precision maintenance standard is issued, and at least 80 percent of rotating equipment jobs in six months have recorded alignment results."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Collect alignment and balancing tolerance tables from OEMs and references"
                - "Draft the site precision maintenance standard"
                - "Check laser alignment tools and trained users in each workshop"
                - "Agree with the planner to require alignment readings on job close-out"
            - name: Reliability input to capital project specifications
              description: |-
                ## Purpose
                Most lifetime reliability is fixed when equipment is specified and bought, long before it reaches maintenance. Getting reliability requirements into project datasheets and purchase specifications, such as seal plans, bearing types, monitoring provisions and spares, avoids designing the next bad actor.

                ## Milestones
                1. A checklist of reliability requirements written for pumps, compressors, motors and gearboxes.
                2. Lessons from the bad actor list turned into specific specification clauses.
                3. The checklist agreed with the projects team as part of design review.
                4. One live project's equipment datasheets reviewed with comments returned.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A reliability specification checklist is agreed with the projects team and applied to the datasheets of at least one live project."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Turn the top five bad actor causes into specification clauses"
                - "Draft the reliability checklist for four equipment types"
                - "Agree with the projects lead where the checklist enters design review"
                - "Review one live project's equipment datasheets against it"
            - name: Teardown inspection of a failed critical machine
              description: |-
                ## Purpose
                When an A-ranked pump or compressor fails, the strip-down is the one chance to see the evidence before it is cleaned and scrapped. Planning and witnessing the teardown, with photographs, measurements and parts kept, gives the RCFA team facts instead of a technician's memory.

                ## Milestones
                1. A teardown plan agreed with the workshop or OEM: sequence, measurements and photo points.
                2. Every stage photographed and clearances, runout and wear measured and recorded.
                3. Failed parts tagged, bagged and kept for laboratory analysis if needed.
                4. A short teardown report issued to the RCFA lead within a week.

                ## Notes
                Ask that nothing is cleaned or washed until it has been photographed. Deposits and discolouration are often the best evidence.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A teardown report with photographs, measurements and retained parts is issued to the RCFA lead within seven days of the strip-down."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a teardown plan with measurement and photo points"
                - "Agree with the workshop that nothing is cleaned before photographs"
                - "Witness the strip-down and record clearances and wear"
                - "Issue the teardown report to the RCFA lead"
            - name: Early-life failure watch after a major overhaul
              description: |-
                ## Purpose
                Machines are most likely to fail in the weeks after they have been worked on, from assembly errors, wrong parts or start-up conditions. A twelve-week watch on assets returned from overhaul, with extra monitoring and quick review of every fault, catches infant mortality before it becomes a second outage.

                ## Milestones
                1. A list of the assets overhauled in the outage, with their baseline readings before shutdown.
                2. Extra vibration and temperature readings scheduled for the first twelve weeks.
                3. Every fault on those assets reviewed within 48 hours.
                4. A close-out note on early failures and their causes, fed to the next outage plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every overhauled asset is watched for twelve weeks with extra readings, and a close-out note on early failures is issued."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the assets overhauled with their pre-shutdown readings"
                - "Ask the monitoring contractor for extra readings for twelve weeks"
                - "Review every fault on the list within two days"
                - "Write the close-out note on early failures for the outage team"
            - name: Annual reliability business case to management
              description: |-
                ## Purpose
                Reliability budgets are cut first when nobody can show what they return. A short, numbers-led presentation each year, showing avoided losses, cost trends and the next year's ask, keeps condition monitoring contracts and engineering time funded.

                ## Milestones
                1. Avoided losses and cost reductions quantified with a method finance accepts.
                2. Next year's requests costed, each with an expected return.
                3. A ten-minute presentation built around three charts and one clear ask.
                4. The session held with site leadership and the decisions recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A reliability business case is presented to site leadership and the funding decisions are recorded in writing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree with finance how avoided losses will be valued"
                - "Cost next year's reliability requests with an expected return"
                - "Ask the agent to draft a ten-minute talk from your three charts"
                - "Book the session with site leadership and record the decisions"
            - name: OEM reliability performance review
              description: |-
                ## Purpose
                Equipment suppliers often hold failure data from many sites but only share it when asked in a structured way. A yearly review with each major OEM, comparing your failure rates to their fleet and pressing on open warranty and upgrade questions, makes the supplier part of the reliability effort.

                ## Milestones
                1. The OEMs behind most A-ranked equipment identified.
                2. A review pack prepared with your failure history and open issues for each.
                3. A meeting held with each of the top three, asking for fleet comparisons and upgrade bulletins.
                4. Agreed actions added to the reliability action register.

                ## Notes
                Start from the **Vendor** template. Ask for service bulletins and known upgrade kits; many sites never hear about them.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Review meetings are held with the top three OEMs and their actions are entered in the reliability action register."
                cadence: cyclic
              tasks:
                - "Identify the OEMs behind most of the A-ranked equipment"
                - "Prepare a failure history pack for each of the top three"
                - "Request service bulletins and fleet failure data before the meeting"
                - "Hold the OEM reliability reviews @recurring(yearly)"
            - name: One-day bad actor improvement workshop
              description: |-
                ## Purpose
                Some bad actors resist months of meetings because nobody gets the right people in the same room. A focused one-day workshop with the operator, technician, planner, vendor and engineer on a single asset often agrees a fix that weeks of email could not.

                ## Milestones
                1. One bad actor chosen and its history and data prepared in a short pack.
                2. Six to eight people booked, including at least one operator and one technician.
                3. The day run to a fixed agenda: history, failure mechanism, options and a chosen fix.
                4. Actions with owners entered in the register before people leave.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-day workshop on one bad actor ends with a chosen fix and owned actions entered in the register."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Choose one bad actor that has resisted earlier fixes"
                - "Prepare a four-page pack of history, photos and data"
                - "Book six to eight people and a room near the plant"
                - "Enter the workshop actions in the register on the day"
            - name: First 90 days as a site reliability engineer
              description: |-
                ## Purpose
                New reliability engineers are often handed a site with no programme and asked to fix the worst machine by Friday. A 90-day plan that balances quick wins on one bad actor with building the hierarchy, criticality and baseline sets you up as the person who makes the plant run better, not just another firefighter.

                ## Milestones
                1. Key people in operations, maintenance, stores and inspection met and their top three problems recorded.
                2. One quick win delivered on a visible bad actor by day 45.
                3. Criticality, baseline and first bad actor list drafted by day 75.
                4. A 90-day review with your manager agreeing the year's plan.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 90-day plan is completed with one quick win, a draft criticality and baseline, and a review with your manager recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the twelve people you need to meet in the first month"
                - "Ask each of them for the three machines that cause them most trouble"
                - "Choose one visible quick win and agree it with your manager"
                - "Book the 90-day review with your manager"
            - name: Moving into reliability from maintenance or planning
              description: |-
                ## Purpose
                Technicians and planners who move into reliability bring plant knowledge most graduates lack, but often miss the statistics and the habit of saying no to breakdown work. A six-month development plan that builds the analytical skills while keeping your craft credibility makes the move stick.

                ## Milestones
                1. A gap list against the reliability role charter, rated honestly with your manager.
                2. Two analytical skills chosen first, such as Weibull and RCM facilitation.
                3. One analysis completed and presented to the maintenance team.
                4. A six-month review of progress with a mentor.

                ## Notes
                Start from the **Skills matrix** template to rate your gaps. Keep one foot on the plant floor; your field knowledge is what makes your analysis believable.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rated skills gap list, two completed learning goals and one presented analysis are reviewed with a mentor after six months."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Rate yourself against the reliability role charter with your manager"
                - "Choose two analytical skills to learn first"
                - "Ask a senior reliability engineer to mentor you for six months"
                - "Present your first analysis at a maintenance team meeting"
            - name: Reliability at a small plant with poor records
              description: |-
                ## Purpose
                Smaller plants often have a basic CMMS, or none, and a maintenance team of six who keep the history in their heads. Starting with an interview-based bad actor list, a paper failure log and simple criticality, you can run a credible reliability effort without waiting years for good data.

                ## Milestones
                1. The top ten problem machines listed from interviews with technicians and operators.
                2. A simple failure log, on paper or a shared sheet, used for every breakdown.
                3. A quick criticality ranking of the main assets done in a two-hour session.
                4. Two improvements made on the worst machines and their effect recorded after six months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A shared failure log has six months of entries, the main assets are ranked, and two improvements show their effect."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Interview four technicians and two operators about problem machines"
                - "Set up a one-page failure log by the workshop door"
                - "Run a two-hour criticality session on the main assets"
                - "Pick the two worst machines and agree a fix for each"
            - name: Leading a reliability team across sites
              description: |-
                ## Purpose
                Once reliability spans several sites, the work shifts from doing analyses to making sure methods, KPIs and lessons are shared. Setting common definitions, a cross-site call and a skills picture for the team stops each site reinventing its own criticality scale and bad actor rules.

                ## Milestones
                1. Common definitions for failure, MTBF, criticality and bad actors agreed across sites.
                2. A skills picture of the team showing strengths and gaps by method.
                3. A monthly cross-site call sharing one bad actor fix and one lesson each time.
                4. A shared KPI page comparing sites on the agreed definitions.

                ## Notes
                Start from the **Skills matrix** template for the team picture.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Common reliability definitions are agreed across sites, a team skills matrix exists, and a cross-site call runs at least ten times a year."
                cadence: rolling
              tasks:
                - "Collect each site's definitions of failure, MTBF and bad actors"
                - "Agree one common set with the site reliability leads"
                - "Build a skills matrix for the team by method"
                - "Host the cross-site reliability call @recurring(monthly:12)"
            - name: Short reliability assignment as a contractor
              description: |-
                ## Purpose
                Contract and consulting reliability engineers are often brought in for eight to twelve weeks with a vague brief and a client who expects quick answers. Agreeing a clear scope, data access and deliverables on day one, and leaving behind something the site can keep using, makes the assignment worth its rate.

                ## Milestones
                1. A written scope with deliverables, data access and who signs off the work.
                2. Data requests sent in the first week with a date for each.
                3. Findings shared in a midpoint review so there are no surprises at the end.
                4. A handover pack left with the site, including the workbook and how to update it.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The assignment ends with signed-off deliverables and a handover pack that a site engineer has walked through."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draft the scope, deliverables and sign-off owner for the client"
                - "Send the data request list on the first day"
                - "Hold a midpoint review of findings with the client"
                - "Walk a site engineer through the handover pack"
            - name: Mentoring a junior engineer in reliability methods
              description: |-
                ## Purpose
                Analytical skills spread slowly unless someone takes time to teach them on live problems. Mentoring a graduate or junior engineer through a real Weibull, a bad actor study and an RCFA over six months builds a successor and sharpens your own methods.

                ## Milestones
                1. Goals and a meeting rhythm agreed with the mentee and their manager.
                2. One Weibull analysis done by the mentee and reviewed together.
                3. One bad actor study led by the mentee and presented at the monthly review.
                4. A short written reflection from the mentee at six months.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "The mentee completes a reviewed Weibull and presents one bad actor study within six months."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Agree goals and a fortnightly meeting with the mentee"
                - "Choose a real data set for the mentee's first Weibull"
                - "Review the mentee's analysis and mark the three biggest gaps"
                - "Give the mentee a slot at the bad actor meeting"
            - name: RAM study for a new or expanded facility
              description: |-
                ## Purpose
                A reliability, availability and maintainability study predicts how much of nameplate capacity a design will deliver, and is the place to argue for a spare compressor or a bigger storage tank before the money is spent. Leading or reviewing a RAM study gives projects a production availability figure built on real failure data.

                ## Milestones
                1. The study basis written: system boundary, failure data sources, repair times and operating philosophy.
                2. The facility modelled as blocks with redundancy, storage and logistics delays.
                3. Production availability calculated for the base case and at least two design options.
                4. Recommendations issued with the uncertainty in the inputs stated.

                ## Notes
                Use your own plant data where you have it and generic databases where you do not, but say which is which. Generic failure rates can be wrong by a factor of several for your service.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A RAM study report gives production availability for a base case and two options, with data sources and uncertainty stated."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Write the study basis and agree it with the project team"
                - "Gather failure and repair data for every major block"
                - "Model the base case and two design options"
                - "Present the availability results and recommendations to the project"
            - name: Monte Carlo availability simulation for a production train
              description: |-
                ## Purpose
                Analytical formulas break down once you add storage, shared spares and repair crew limits. A Monte Carlo simulation of an existing train shows the distribution of annual availability, not just an average, and tests which improvements would actually raise output.

                ## Milestones
                1. The train modelled with failure distributions from your own Weibull work.
                2. Repair resources, spares and intermediate storage included in the model.
                3. The model calibrated so simulated availability matches the last three years within an agreed margin.
                4. Three improvement options simulated and ranked by added production.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A calibrated simulation of one train reproduces historical availability and ranks three improvements by added production."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose the train and list its blocks and storage points"
                - "Fit failure and repair distributions for each block"
                - "Calibrate the model against three years of real availability"
                - "Simulate and rank three improvement options"
            - name: Life cycle cost analysis for equipment selection
              description: |-
                ## Purpose
                The cheapest bid often becomes the most expensive machine once energy, maintenance and downtime are counted over twenty years. A life cycle cost comparison in the spirit of ISO 15663, with reliability figures for each option, gives procurement a sound reason to pay more up front.

                ## Milestones
                1. A cost breakdown covering purchase, installation, energy, maintenance, downtime and disposal.
                2. Reliability and maintenance inputs for each bid based on data, not brochure claims.
                3. Net present cost calculated for each option with the discount rate agreed with finance.
                4. A recommendation with a sensitivity check on the three inputs that matter most.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A life cycle cost comparison with net present cost and a sensitivity check is issued for at least one equipment purchase."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree the cost categories and discount rate with finance"
                - "Request reliability and energy data from each bidder"
                - "Calculate net present cost for each option"
                - "Run sensitivity checks on energy price, failure rate and downtime cost"
            - name: Predictive models from historian data
              description: |-
                ## Purpose
                Process historians hold years of temperatures, pressures and currents that can show a machine drifting long before a vibration route would. Building and running an anomaly detection model on one critical asset, and judging it against what actually happened, shows whether data-driven prediction earns a place in your programme.

                ## Milestones
                1. One critical asset chosen with good historian tags and known past failures.
                2. A model built on normal operation and back-tested against the known failures.
                3. Alert thresholds set so false alarms stay at a level operators will tolerate.
                4. Six months of live alerts reviewed for true and false calls.

                ## Notes
                A model that alarms weekly with nothing found will be ignored within a month. Judge it on lead time and false alarm rate together.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A back-tested anomaly model on one asset has six months of live alerts reviewed, with lead time and false alarm rate recorded."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Choose an asset with good historian tags and at least two past failures"
                - "Extract a year of normal operating data for the model"
                - "Back-test the model against the known failure dates"
                - "Review the week's model alerts with the process engineer @recurring(weekly:wed)"
---

# Reliability Engineering

Reliability Engineering is for engineers who own equipment performance on an operating plant, whether that is a whole site, one unit or a single class of pumps and compressors. It starts with foundations (the asset hierarchy, criticality, failure codes, a loss baseline and the first bad actor list), then the operating machinery of failure reviews, bad actor meetings, condition monitoring follow-up and KPIs, then the core methods from Weibull and reliability block diagrams to P-F intervals, followed by improvement decisions such as RCM, PM optimisation and spares, dated events, situations from your first 90 days to leading a multi-site team, and specialist work on RAM studies, simulation and predictive models.

The rhythm is weekly for breakdown reviews, loss logging, condition monitoring exceptions and the action register, monthly for bad actors, KPIs, lubrication, repeat failures and defect elimination, quarterly for PM effectiveness and reliability growth, and yearly for criticality, spares and the programme review. The Metrics log, Meeting notes, Purchase decision, Vendor, Onboarding 30/60/90 and Skills matrix templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
