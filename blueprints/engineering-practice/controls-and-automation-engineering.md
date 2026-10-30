---
id: engineering-practice.controls-and-automation-engineering
name: Controls and Automation Engineering
description: "The working kit of a controls and automation engineer: an instrument index you trust, loops that stay in automatic, alarms operators can act on, cause and effect charts, safety system bypasses under control and clean loop checks."
category: business
version: 1.0.0
tags: [engineering-practice, controls-and-automation-engineering, engineer, instrumentation, pid-tuning, alarm-management, loop-checks, safety-systems]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
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
        - name: Controls and Automation Engineering
          description: "Working as a controls and automation engineer: instrumentation, control loops and tuning, cause and effect charts, safety systems, alarm management and loop checks."
          projects:
            - name: Controls and instrumentation standards shelf
              description: |-
                ## Purpose
                Arguments about tag letters, alarm priorities or safety system bypasses usually end at a clause number, so a controls engineer needs the right editions to hand. A short, current shelf covering ISA-5.1 symbols, IEC 61511 or ISA 84 for safety instrumented systems, ISA-18.2 or IEC 62682 and EEMUA 191 for alarms, and the IEC 60079 family for hazardous areas means every design note and review comment can cite its source.

                ## Milestones
                1. A list of the standards your site or client designs to, with the edition each project is held to.
                2. Access confirmed to each one through the company library, a subscription or a licensed copy.
                3. The site's own engineering specifications for instruments and control systems filed beside them.
                4. A one-page index noting which standard answers which recurring question.

                ## Notes
                Company specifications often override or tighten the public standard. Read the site specification first, then the standard it calls up.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page index lists every controls standard and site specification in use, with edition, access route and the questions each one answers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your lead which controls standards and site specifications apply here"
                - "Check the edition of each standard named in the current project scope"
                - "Confirm access to each document through the library or subscription"
                - "Write a one-page index of which standard answers which question"
            - name: Reading P&IDs and ISA instrument tags fluently
              description: |-
                ## Purpose
                Every loop check, alarm review and cause and effect chart starts from the piping and instrumentation diagram, and a misread function letter sends people to the wrong device. Learning the ISA-5.1 identification letters, the bubble and line symbols, and your site's local conventions until you can trace any loop from sensor to final element without the legend open saves hours on every job that follows.

                ## Milestones
                1. The ISA-5.1 first and succeeding letters learned well enough to decode tags such as PDIT, LSHH and FV without a reference.
                2. Shared display, safety system and field-mounted symbols recognised on your site's drawings.
                3. Five loops traced end to end on real P&IDs, from sensor to controller to final element.
                4. A crib sheet of site-specific symbol and tagging conventions that differ from the standard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five loops on site P&IDs traced from sensor to final element and checked by a senior engineer, plus a written crib sheet of local tagging conventions."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Print the legend sheet from your site P&ID set and mark unfamiliar symbols"
                - "Decode twenty tags from one P&ID without looking at the legend"
                - "Trace five control loops end to end and have a senior engineer check them"
                - "Write a crib sheet of local conventions that differ from ISA-5.1"
            - name: Instrument index and loop list baseline
              description: |-
                ## Purpose
                The instrument index is the master list everything else hangs from: calibration ranges, alarm limits, loop drawings, spares and hazardous area certificates all key off the tag. On older sites it drifts from reality as devices are swapped and ranges changed, so a baseline that reconciles the index against the control system database and the field gives you a list you can actually work from.

                ## Milestones
                1. The current instrument index exported, with tag, service, type, range, location and loop number for each device.
                2. The index compared against the control system point database, with missing and orphan tags listed.
                3. A sample of field devices checked against the index for model, range and tag plate.
                4. Discrepancies corrected or raised through the site's document change route, with a count recorded.

                ## Notes
                Start with one process unit rather than the whole site. A clean index for one unit is more useful than a half-checked one for ten.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One process unit's instrument index reconciled against the control system database and a field sample, with every discrepancy logged and either fixed or raised."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Export the instrument index for one process unit into a working copy"
                - "Export the matching point list from the control system database"
                - "Match the two lists by tag and flag missing and orphan entries"
                - "Walk the unit and check twenty devices against the index"
                - "Raise each discrepancy through the document change route"
            - name: Control system architecture map
              description: |-
                ## Purpose
                When a controller fails at night, the person on call needs to know which cabinets, I/O cards, network switches and power supplies sit behind the affected loops. Drawing one clear architecture map of the distributed control system, the safety system, packaged unit PLCs, marshalling and power distribution turns a frantic search into a five-minute diagnosis.

                ## Milestones
                1. Every controller, safety logic solver and package PLC listed with its location and redundancy arrangement.
                2. Network topology drawn, including switches, firewalls and links to package systems.
                3. Power supply arrangement for each cabinet shown, including UPS and battery autonomy.
                4. The map reviewed by the system vendor or a senior engineer and issued under a document number.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An issued architecture drawing shows every controller, logic solver, network link and power supply for the site, reviewed and under document control."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect the vendor system architecture drawings and cabinet layouts"
                - "Walk the equipment rooms and note every controller and switch"
                - "Draw the network and power arrangement on one sheet per system"
                - "Ask the system vendor to review the draft map"
                - "Issue the map under a document number"
            - name: Instrumentation and control design basis
              description: |-
                ## Purpose
                Projects that start without a written controls design basis end up with three vendors choosing three signal standards, mixed transmitter brands and no agreed approach to redundancy. Writing the basis early, covering signal types, communication protocols, preferred instrument types, redundancy and voting rules, hazardous area approach, power and the alarm philosophy reference, settles hundreds of later questions in one document.

                ## Milestones
                1. Signal standards, protocols and preferred instrument types agreed and written down.
                2. Rules for redundancy, voting and separation between control and safety systems recorded.
                3. Hazardous area protection method and cable segregation approach stated.
                4. The basis reviewed by operations, maintenance and process safety and issued for use.

                ## Notes
                Keep the basis short and decisive. A design basis that lists every option without choosing one does not settle anything.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An issued controls design basis states signal standards, protocols, redundancy rules, hazardous area method and alarm philosophy reference, signed off by operations and maintenance."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Gather the client specifications and any previous project design basis"
                - "List the decisions the basis must settle for this project"
                - "Draft the basis with one clear choice under each heading"
                - "Hold a review with operations, maintenance and process safety"
                - "Issue the agreed basis and circulate it to all vendors"
            - name: Hazardous area instrument certification check
              description: |-
                ## Purpose
                An instrument installed in a classified area must carry protection that matches the zone or division, gas group and temperature class, and sites often find replacement devices fitted with the wrong certificate after years of like-for-like swaps. Checking a unit's field devices against the area classification drawings closes an ignition risk that inspectors and insurers look for first.

                ## Milestones
                1. The current area classification drawings for the unit located and confirmed as the latest revision.
                2. Each field instrument's protection method, gas group and temperature class recorded from its nameplate.
                3. Mismatches between device certification and area requirement listed with a risk ranking.
                4. Replacement or remediation actions raised for every mismatch, with owners.

                ## Notes
                Only competent people should open enclosures in a classified area, and only under a permit. Nameplate checks can usually be done without opening anything.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every field instrument in one unit checked against the area classification, with all mismatches ranked and assigned for remediation."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Find the latest area classification drawings for the unit"
                - "Build a check sheet with zone, gas group and temperature class columns"
                - "Record nameplate certification for each field instrument on a walkdown"
                - "Rank the mismatches and raise remediation actions with owners"
            - name: Control loop performance baseline survey
              description: |-
                ## Purpose
                On a typical plant a large share of control loops spend time in manual, oscillate or fight each other, and nobody has counted which ones. A survey of every PID loop on one unit, recording mode, output saturation and variability from the historian, gives you a ranked list of where tuning, valve repair or redesign will pay back fastest.

                ## Milestones
                1. Every PID loop on the unit listed with its normal mode and the share of time spent in that mode over a month.
                2. Variability, oscillation and output saturation measured from historian data for each loop.
                3. Loops ranked into keep, retune, repair valve or redesign groups.
                4. The ranked list shared with operations as the starting point for improvement work.

                ## Notes
                Start from the **Metrics log** template to record the loop count in each group, so improvement can be shown later against this baseline.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked list of all PID loops on one unit, with mode, variability and an improvement group for each, shared with operations."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export a month of mode, setpoint, measurement and output data for the unit"
                - "Calculate time in normal mode and variability for each loop"
                - "Sort loops into keep, retune, repair valve and redesign groups"
                - "Review the ranked list with the unit's lead operator"
            - name: Alarm system performance baseline
              description: |-
                ## Purpose
                Operators flooded with alarms miss the one that matters, and most incident reports on upsets mention alarm overload somewhere. Measuring alarm rates per console, floods, chattering alarms, standing alarms and the top ten most frequent tags, against the benchmarks in ISA-18.2 and EEMUA 191, tells you how far your system is from manageable and where to start.

                ## Milestones
                1. A month of alarm journal data extracted for each operator console.
                2. Average alarms per hour, flood periods, standing alarm count and chattering alarms calculated.
                3. The ten most frequent alarms listed, with the share of total load they cause.
                4. Results set beside the published benchmarks and presented to operations leadership.

                ## Notes
                A few bad actors often cause a large share of the load. Fixing those first gives quick relief while the full rationalisation is planned.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A baseline report gives alarm rate, flood count, standing and chattering alarm counts and the top ten alarms for each console, presented to operations leadership."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Extract one month of alarm journal data for each console"
                - "Calculate average rate, floods, standing and chattering alarm counts"
                - "List the ten most frequent alarms and their share of the load"
                - "Ask the agent to draft a two-page summary of the results"
                - "Present the baseline to the operations manager"
            - name: Cause and effect chart register
              description: |-
                ## Purpose
                Cause and effect charts are where operators, process engineers and the safety system programmer meet, and when they drift from the logic actually running in the logic solver, trip testing and troubleshooting go wrong. Building a register of every chart, its revision and the logic version it matches, and checking that each one can be read by an operator, makes them dependable again.

                ## Milestones
                1. Every cause and effect chart for the site listed with its current revision and owning system.
                2. Each chart compared with the running logic or the latest logic printout, with differences recorded.
                3. Charts that are hard to read, such as missing tag descriptions or unclear voting, marked for rework.
                4. Differences and rework raised through the site's change route with named owners.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every cause and effect chart with revision and matching logic version, and every mismatch has an owner."
                cadence: one-shot
                effort_hours_estimate: "18"
              tasks:
                - "List every cause and effect chart held in document control"
                - "Get the latest logic printout or export for each safety system"
                - "Compare one chart line by line with the logic and note differences"
                - "Repeat the comparison across all charts and log mismatches with owners"
            - name: Weekly loops in manual review
              description: |-
                ## Purpose
                Loops left in manual after an upset quietly turn a controlled plant into one run by hand, and their number creeps up week by week unless someone looks. A short Monday review of every loop out of its normal mode, with the reason and an owner for each, keeps automation where it belongs and surfaces failing valves and transmitters early.

                ## Milestones
                1. A standing report or historian query that lists loops out of normal mode.
                2. A weekly list with the reason each loop is out of mode and an owner.
                3. Loops out of mode for more than a month escalated to the area supervisor.
                4. The count of loops out of mode tracked from week to week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly loops-in-manual list with reasons and owners exists for at least twelve consecutive weeks, with the count trended."
                cadence: rolling
              tasks:
                - "Build a historian query listing loops out of their normal mode"
                - "Review loops out of normal mode with the shift supervisor @recurring(weekly:mon)"
                - "Escalate loops in manual for over a month to the area supervisor"
                - "Record the weekly count in a simple trend sheet"
            - name: Monthly bad actor alarm review
              description: |-
                ## Purpose
                Alarm loads rarely stay fixed after a cleanup, because new equipment, changed setpoints and failing instruments bring fresh nuisance alarms. A monthly review of the most frequent, chattering and standing alarms, with a fix agreed for each, keeps the rate per console near the target your alarm philosophy sets.

                ## Milestones
                1. A monthly report of the top ten frequent, chattering and standing alarms per console.
                2. A fix agreed for each bad actor: deadband, delay, setpoint change, repair or removal through the change route.
                3. Fixes tracked to closure in a single log.
                4. A quarterly alarm performance summary sent to operations leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly bad actor reports produced for six consecutive months, each with agreed fixes tracked to closure in one log."
                cadence: rolling
              tasks:
                - "Pull the top ten frequent, chattering and standing alarms for each console @recurring(monthly:8)"
                - "Agree a fix for each bad actor with the operations representative"
                - "Log each fix and its change reference until closed"
                - "Send the quarterly alarm performance summary to operations leadership @recurring(quarterly)"
            - name: Safety system bypass and override register
              description: |-
                ## Purpose
                A bypassed trip is a safety function that is not there, and bypasses forgotten after maintenance are a recurring finding in incident investigations. Keeping a live register of every bypass, force and override on the safety and control systems, with authorisation, reason, compensating measures and an expiry, and walking it each week, makes sure none outstays its welcome.

                ## Milestones
                1. One register covering every active bypass, force and override, cross-checked against the system's own bypass list.
                2. Each entry showing who authorised it, why, the compensating measures and when it expires.
                3. A weekly check that the register matches the live system, with any difference investigated the same day.
                4. Bypasses past expiry escalated to the operations manager.

                ## Notes
                Bypass authorisation rules belong to the site's safety management system. This register records and checks them, it does not replace the permit or the authorisation.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The bypass register matches the live safety and control systems at every weekly check for three months, and no bypass runs past expiry without escalation."
                cadence: rolling
              tasks:
                - "Print the live bypass and force list from each safety system"
                - "Set up one register with authoriser, reason, measures and expiry columns"
                - "Compare the register with the live bypass list @recurring(weekly:thu)"
                - "Report bypasses past expiry to the operations manager @recurring(monthly:28)"
            - name: Instrument calibration programme and as-found records
              description: |-
                ## Purpose
                Calibration intervals set at commissioning are often never revisited, so some transmitters are checked far too often and critical ones drift unseen. Running the programme from the as-found results, recording how far each device had drifted before adjustment, lets you lengthen intervals where devices are stable and shorten them where they are not.

                ## Milestones
                1. Every instrument in the programme listed with interval, tolerance and criticality.
                2. As-found and as-left values recorded for each calibration, not just a pass or fail.
                3. Devices found out of tolerance flagged to the loop owner and, for safety devices, to process safety.
                4. Intervals reviewed once a year against drift history, with changes recorded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "As-found and as-left values are recorded for every calibration for a year, and a dated interval review based on drift history exists."
                cadence: rolling
              tasks:
                - "Export the calibration schedule and check every device has a tolerance"
                - "Review the month's as-found results and flag out-of-tolerance devices @recurring(monthly:14)"
                - "Report out-of-tolerance safety devices to process safety"
                - "Review calibration intervals against a year of drift history @recurring(yearly)"
            - name: Control system backup and restore routine
              description: |-
                ## Purpose
                A controller replaced after a failure is only as good as the last configuration backup, and many sites discover during an outage that their copies are months old or cannot be restored. A monthly backup of every control and safety system configuration, stored off the control network with a checksum, plus a quarterly restore test on a spare or simulator, turns a hope into a tested recovery.

                ## Milestones
                1. A list of every system needing backups, with method, storage location and owner.
                2. Monthly backups taken and stored in two places, one off site or off the control network.
                3. A quarterly restore of at least one system onto a spare controller or simulator, with the result recorded.
                4. A written restore procedure that someone else on the team has followed successfully.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of dated backups exist for every listed system, and four quarterly restore tests have been recorded as successful."
                cadence: rolling
              tasks:
                - "List every control, safety and package system that needs a backup"
                - "Take and store backups of all listed systems in two locations @recurring(monthly:3)"
                - "Restore one system onto a spare controller or simulator @recurring(quarterly)"
                - "Write a restore procedure and have a colleague follow it"
            - name: Weekly control system health check
              description: |-
                ## Purpose
                Controllers, redundant processors, I/O cards and network switches report faults in diagnostic pages that few people open until something trips. A short weekly pass through system diagnostics, controller loading, redundancy status, power supplies and event logs catches a failed backup processor or a dying fan while the plant is still running normally.

                ## Milestones
                1. A checklist of diagnostic pages and readings to review each week.
                2. Weekly results recorded, including controller loading and redundancy status.
                3. Faults raised as work orders the same day they are found.
                4. Trends in controller loading and fault counts reviewed every quarter.

                ## Notes
                Start from the **Operational checklist** template so the weekly check is the same whoever does it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly health checks are recorded for twelve consecutive weeks, and every fault found has a work order number."
                cadence: rolling
              tasks:
                - "List the diagnostic pages and readings to check each week"
                - "Work through the system health checklist and record results @recurring(weekly:wed)"
                - "Raise a work order for every fault found during the check"
                - "Plot controller loading and fault counts for the quarter"
            - name: Online analyser validation routine
              description: |-
                ## Purpose
                Gas chromatographs, oxygen analysers, pH probes and moisture meters often feed product quality decisions or combustion control, yet they drift and fail more than any other field device. A monthly validation against reference gas or lab samples, with results trended, shows which analysers can be trusted and which are quietly misleading operations.

                ## Milestones
                1. Every online analyser listed with its purpose, reference method and validation frequency.
                2. Monthly validation results recorded against lab or reference gas values.
                3. Analysers outside agreed limits taken out of control use until repaired.
                4. Availability of each analyser reported to operations every quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly validation records exist for every listed analyser for six months, with availability reported each quarter."
                cadence: rolling
              tasks:
                - "List every online analyser with its reference method"
                - "Compare analyser readings with lab or reference gas results @recurring(monthly:20)"
                - "Remove failing analysers from control use and raise repairs"
                - "Report analyser availability to operations each quarter"
            - name: Instrument obsolescence and critical spares watch
              description: |-
                ## Purpose
                Vendors withdraw transmitter models, I/O cards and controller families on their own timetable, and the first sign is often a failed card with no spare on the shelf. A quarterly review of vendor lifecycle notices against your installed base and spares holding gives you years of warning to plan replacements rather than days.

                ## Milestones
                1. Installed base of control system hardware and key instrument models listed with vendor lifecycle status.
                2. Critical spares holdings checked against installed quantities and failure history.
                3. Items at end of support ranked by risk with a replacement or last-buy plan.
                4. A quarterly summary shared with maintenance and the asset owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An installed base list with lifecycle status and a risk-ranked replacement plan exists and has been reviewed in four consecutive quarters."
                cadence: rolling
              tasks:
                - "Request current lifecycle notices from your control system vendor"
                - "Match the notices against installed hardware and spares stock"
                - "Rank end-of-support items and propose last buys or replacements"
                - "Review lifecycle status and spares holdings with maintenance @recurring(quarterly)"
            - name: Alarm and trip setpoint change register
              description: |-
                ## Purpose
                Alarm limits and trip setpoints get nudged during upsets and commissioning, and over time the live values stop matching the instrument index and the safety requirements. A register of every setpoint change, checked monthly against the live configuration, shows exactly what changed, when and under which approval.

                ## Milestones
                1. Live alarm and trip setpoints exported and compared with the documented values.
                2. Every difference traced to an approved change or raised as an unauthorised change.
                3. A monthly comparison run and its result recorded.
                4. Documented values updated whenever an approved change is implemented.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly comparisons of live and documented setpoints are recorded for six months, and every difference is traced to an approval or raised."
                cadence: rolling
              tasks:
                - "Export live alarm and trip setpoints from each system"
                - "Compare live setpoints against documented values and log differences @recurring(monthly:25)"
                - "Trace each difference to its approved change reference"
                - "Update the instrument index after each approved change"
            - name: Control valve health monitoring with smart positioners
              description: |-
                ## Purpose
                Most loop performance problems trace back to the final element: sticking stems, worn trim, leaking actuators and positioners hunting. Smart positioners already record travel deviation, friction and air consumption, and a monthly look at those diagnostics for the critical valves catches failures before they show up as an oscillating loop or a spurious trip.

                ## Milestones
                1. Critical control valves with diagnostic positioners listed and connected to the asset management software.
                2. Baseline signatures recorded for each critical valve.
                3. Monthly diagnostic alerts reviewed and turned into work orders where needed.
                4. Valves needing overhaul added to the next shutdown work list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Baseline signatures exist for every critical valve, and six monthly diagnostic reviews are recorded with resulting work orders."
                cadence: rolling
              tasks:
                - "List critical control valves that have diagnostic positioners"
                - "Record a baseline valve signature for each one at the next opportunity"
                - "Review positioner alerts and travel deviation for critical valves @recurring(monthly:11)"
                - "Add valves needing overhaul to the next shutdown work list"
            - name: Gas detector testing and fault follow-up
              description: |-
                ## Purpose
                Fixed gas detectors sit in harsh, salty, hot conditions and lose sensitivity without any outward sign, so a detector that has not been bump tested is an assumption, not a safeguard. Running a monthly test round for a set share of detectors, with faults followed up quickly, keeps the fire and gas system able to see what it is there to see.

                ## Milestones
                1. Every fixed gas detector listed with type, location, test method and last test date.
                2. A monthly test round planned so every detector is tested within the site's required interval.
                3. Failed or slow detectors repaired, with a temporary measure such as portable monitoring in place meanwhile.
                4. Test coverage reported against the plan each quarter.

                ## Notes
                Test frequencies and methods come from the manufacturer and the site's safety requirements, not from this project. Use test gas of the right type and concentration and follow the permit system.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fixed gas detector has a recorded test within its required interval, and every failure has a repair record and a temporary measure noted."
                cadence: rolling
              tasks:
                - "List every fixed gas detector with its last test date"
                - "Plan the test rounds so each detector meets its required interval"
                - "Run the planned detector tests and record the results @recurring(monthly:17)"
                - "Arrange portable monitoring wherever a detector is out of service"
            - name: PID fundamentals and controller algorithm forms
              description: |-
                ## Purpose
                Tuning constants copied between vendors give wildly different results because one uses gain and another proportional band, one repeats per minute and another minutes per repeat, and the ideal, series and parallel forms behave differently. Understanding proportional, integral and derivative action and your own system's algorithm form properly is the base every tuning job builds on.

                ## Milestones
                1. The effect of proportional, integral and derivative action explained in your own words with a trend example of each.
                2. Your control system's PID form, units and options such as derivative on measurement written down.
                3. Conversion between gain and proportional band, and between integral units, done on three real loops.
                4. A one-page reference sheet for your system's PID block.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page reference for the site's PID block, covering form, units and options, checked by a senior controls engineer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find the PID block description in your control system manual"
                - "Note the algorithm form, tuning units and derivative options"
                - "Convert the tuning constants of three real loops between unit forms"
                - "Write a one-page PID reference and have a senior engineer check it"
            - name: Step testing and lambda tuning a real loop
              description: |-
                ## Purpose
                Trial and error tuning wastes shifts and leaves loops either sluggish or oscillating, while a small step test and a lambda calculation give settings you can predict and defend. Tuning one self-regulating loop and one integrating level loop properly, with operations watching, teaches the method and earns the trust needed to do the next twenty.

                ## Milestones
                1. Two loops chosen with operations: one flow or temperature loop and one level loop.
                2. Open loop step tests done within agreed limits, with process gain, dead time and time constant measured.
                3. Lambda tuning calculated and applied, with before and after trends saved.
                4. The method and results written up as a short note for the team.

                ## Notes
                Agree step size, limits and abort conditions with the panel operator before you start, and stay at the console throughout.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two loops retuned by step test and lambda method, with before and after trends and a short method note filed."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose one flow loop and one level loop with the unit operator"
                - "Agree step size, limits and abort conditions before testing"
                - "Run the step tests and measure gain, dead time and time constant"
                - "Apply lambda tuning and save before and after trends"
            - name: Cascade, ratio and feedforward control strategies
              description: |-
                ## Purpose
                Many disturbances a single PID loop cannot handle well, such as a fuel gas pressure swing upsetting a furnace or a feed change upsetting a column, are solved by a well-designed cascade, ratio or feedforward scheme. Learning when each strategy helps, how to commission it in the right order and how it fails gives you a toolkit beyond retuning.

                ## Milestones
                1. The purpose and structure of cascade, ratio, feedforward and override control explained with a site example of each.
                2. One existing cascade loop on site traced and checked for correct inner loop speed and initialisation.
                3. Commissioning order for a cascade written down: inner loop first, then outer.
                4. A short note of improvement candidates where an advanced strategy would help.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Site examples of four control strategies documented, one cascade checked on site, and a list of improvement candidates written."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find one cascade, one ratio and one feedforward scheme on site drawings"
                - "Check that the inner loop of one cascade is clearly faster than the outer"
                - "Write the commissioning order for a cascade scheme"
                - "List three places where an advanced strategy would reduce variability"
            - name: Control valve sizing and selection
              description: |-
                ## Purpose
                An oversized control valve spends its life barely open and controls badly, while an undersized one runs out of capacity at the first rate increase. Learning to size valves to IEC 60534 or ISA-75 methods, check for cavitation, flashing and noise, and choose the right body, trim and actuator lets you challenge vendor datasheets with confidence.

                ## Milestones
                1. Sizing equations worked through for a liquid and a gas valve using real process data.
                2. Cavitation, flashing and noise checks done for one demanding service.
                3. The choice between globe, rotary and specialist trims explained for three site services.
                4. One existing valve datasheet reviewed and comments recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two worked sizing calculations and one datasheet review with written comments are filed and checked by a senior engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one liquid and one gas control valve with good process data"
                - "Work through the sizing calculation for each valve"
                - "Check the liquid valve for cavitation and flashing"
                - "Review one existing valve datasheet and write comments"
            - name: Flow measurement technology selection
              description: |-
                ## Purpose
                Flow meters are chosen by habit far too often, so orifice plates end up on dirty services and magnetic meters on hydrocarbons that cannot be measured that way. Understanding differential pressure, Coriolis, magnetic, vortex and ultrasonic meters, with their straight run, turndown and fluid limits, means the next meter you specify will actually work.

                ## Milestones
                1. The working principle, strengths and limits of five flow technologies summarised in one table.
                2. Orifice sizing to ISO 5167 worked through for one real service.
                3. Installation requirements such as straight run and orientation checked on three existing meters.
                4. A selection guide for your site's common services drafted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table of five flow technologies, one orifice calculation and a site selection guide are filed and reviewed."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Build a comparison table of five flow meter technologies"
                - "Work through an orifice calculation for one real service"
                - "Check straight run and orientation on three installed meters"
                - "Draft a short selection guide for the site's common services"
            - name: Level and pressure measurement pitfalls
              description: |-
                ## Purpose
                Level readings fool operators more than almost any other measurement: density changes, foaming, wet and dry leg errors, blocked impulse lines and radar reflections from internals all give confident wrong numbers. Working through these failure mechanisms on your own vessels helps you diagnose bad readings quickly and design installations that avoid them.

                ## Milestones
                1. Differential pressure level calculations done for one vessel with wet leg and one with dry leg.
                2. The effect of a density change on reading worked out for a vessel that sees it.
                3. Impulse line and seal arrangements checked on three pressure or level installations.
                4. A short list of site level instruments with known reading problems and their likely cause.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Worked level calculations for two vessels and a list of problem level instruments with likely causes are filed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one wet leg and one dry leg level installation on site"
                - "Calculate the range and zero for each from vessel data"
                - "Work out the error a realistic density change would cause"
                - "List level instruments with known problems and their likely cause"
            - name: Intrinsically safe loop verification
              description: |-
                ## Purpose
                An intrinsically safe loop is only safe if the barrier or isolator, the field device and the cable together stay within the certified entity parameters, and swapped devices or longer cable runs can quietly break that. Learning to do the comparison of voltage, current, power, capacitance and inductance, and checking a handful of real loops, closes a gap that inspections often find.

                ## Milestones
                1. The entity parameter comparison method understood and written as a one-page worksheet.
                2. Barrier and field device certificates collected for five real loops.
                3. Cable capacitance and inductance included and each loop confirmed within limits or flagged.
                4. Any loop outside limits raised for remediation with an owner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five intrinsically safe loops verified on a written worksheet with certificate references, and any failing loop raised for remediation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft a one-page entity parameter worksheet"
                - "Collect barrier and device certificates for five loops"
                - "Add cable capacitance and inductance for each run"
                - "Raise any loop found outside its limits"
            - name: HART and fieldbus diagnostics in practice
              description: |-
                ## Purpose
                Smart transmitters carry far more information than the 4 to 20 mA signal: device status, sensor diagnostics, configuration and range, yet many sites only read it with a handheld when something has already gone wrong. Getting comfortable with a HART communicator, the asset management software and, where installed, Foundation Fieldbus or PROFIBUS PA segments turns those diagnostics into daily troubleshooting tools.

                ## Milestones
                1. A HART communicator used to read configuration and diagnostics on three different device types.
                2. The asset management software set up to show device alerts for one unit.
                3. One fieldbus segment, if fitted, checked for signal quality and device count.
                4. A short guide for technicians on reading the most useful diagnostics.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Diagnostics read from three device types, device alerts visible for one unit, and a technician guide written."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Borrow the site HART communicator and read one transmitter's configuration"
                - "Read diagnostics from two other device types"
                - "Set up device alerts for one unit in the asset management software"
                - "Write a one-page technician guide to the most useful diagnostics"
            - name: Temperature measurement and thermowell checks
              description: |-
                ## Purpose
                Thermocouple type, RTD class, response time and the thermowell itself decide whether a temperature reading is fit for control or protection, and thermowells that fail from flow-induced vibration have caused serious releases. Learning sensor selection and running the ASME PTC 19.3 TW wake frequency check on high-velocity services lets you spot the installations most at risk.

                ## Milestones
                1. Thermocouple types and RTD classes compared for accuracy, range and drift.
                2. Response time effects of thermowell design explained with a site example.
                3. Wake frequency and stress checks done for three thermowells in high-velocity service.
                4. Any thermowell failing the check raised for replacement with an owner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thermowell checks for three high-velocity services are filed with results, and any failure is raised with an owner."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Summarise thermocouple types and RTD classes in one table"
                - "Identify three thermowells in high-velocity gas or steam service"
                - "Run the wake frequency check for each one using vendor or in-house tools"
                - "Raise replacement for any thermowell that fails the check"
            - name: Control narrative for a process unit
              description: |-
                ## Purpose
                Operators, programmers and reviewers each carry a different picture of how a unit is meant to be controlled until someone writes it down. A control narrative that describes every loop, sequence, interlock and operator interaction in plain language, unit by unit, becomes the reference the configuration is built and tested against and the first thing a new engineer reads.

                ## Milestones
                1. Each control loop described with its purpose, normal mode, setpoint source and failure response.
                2. Start-up, shutdown and changeover sequences written as numbered steps.
                3. Interlocks and permissives described with a reference to the matching cause and effect chart line.
                4. The narrative reviewed by process, operations and the configuration engineer and issued.

                ## Notes
                Write in the language an operator uses. A narrative that only repeats the logic in words helps nobody.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An issued control narrative for one unit covers every loop, sequence and interlock, reviewed by process, operations and the configuration engineer."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose one unit that has no current control narrative"
                - "Describe each loop with purpose, mode and failure response"
                - "Write start-up and shutdown sequences as numbered steps"
                - "Hold a review with process, operations and the configuration engineer"
            - name: Writing the site alarm philosophy
              description: |-
                ## Purpose
                Without an agreed philosophy every engineer adds alarms by their own judgement and the system fills with duplicates and low-value warnings. A written alarm philosophy following ISA-18.2 or IEC 62682, defining what deserves an alarm, priority rules, response times, shelving, suppression and performance targets, is the rulebook that every rationalisation and every new project must follow.

                ## Milestones
                1. Definitions of an alarm, priorities and the consequence and response time matrix agreed.
                2. Rules for shelving, state-based suppression and alarm changes written.
                3. Performance targets for alarm rate, floods and standing alarms set.
                4. The philosophy approved by operations, process safety and engineering and issued.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved alarm philosophy defines alarms, priorities, response times, shelving rules and performance targets, issued under a document number."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Collect any existing alarm guidelines and the company standard"
                - "Draft the priority matrix from consequence and response time"
                - "Write shelving, suppression and change rules"
                - "Hold a review workshop with operations and process safety"
                - "Issue the approved philosophy under a document number"
            - name: Alarm rationalisation of one process unit
              description: |-
                ## Purpose
                Rationalisation is where the philosophy meets real tags: each alarm on a unit is challenged for cause, consequence, operator action and time to respond, and many are removed, reprioritised or given a proper deadband. Working through one unit fully, with an operator in the room, gives a master alarm database and a model for the rest of the site.

                ## Milestones
                1. Every configured alarm on the unit listed in a master alarm database.
                2. Each alarm reviewed with an experienced operator for cause, consequence, action and response time.
                3. Decisions to keep, change priority, change setpoint or remove recorded with reasons.
                4. Approved changes implemented through the change route and the alarm rate remeasured.

                ## Notes
                Budget roughly a full day per few hundred alarms and keep sessions short. Tired teams wave alarms through.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every alarm on one unit rationalised in a master database with reasons, changes implemented and the post-change alarm rate measured."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Export every configured alarm on the unit into a master database"
                - "Book rationalisation sessions with an experienced operator"
                - "Record cause, consequence, action and response time for each alarm"
                - "Implement approved changes through the change route"
                - "Remeasure the unit's alarm rate one month after implementation"
            - name: Retuning the ten worst loops
              description: |-
                ## Purpose
                The loop baseline usually shows a handful of loops causing most of the variability that operators fight, often on feed, furnace or compressor duty. Working through the ten worst one by one, fixing the valve or measurement first and tuning second, gives operations a calmer unit and shows management what controls work is worth.

                ## Milestones
                1. Ten loops chosen from the baseline survey with operations agreement.
                2. Mechanical and measurement problems fixed before any tuning change.
                3. Each loop retuned with before and after variability recorded.
                4. A summary of results and remaining issues shared with operations.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Ten loops retuned, each with before and after variability figures, and a results summary sent to operations."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the ten worst loops with the unit's operations lead"
                - "Check each loop's valve and transmitter before changing tuning"
                - "Retune each loop and record before and after variability"
                - "Send a results summary to operations"
            - name: Standardising on a transmitter range
              description: |-
                ## Purpose
                Five pressure transmitter brands on one site mean five sets of spares, configuration tools and training needs. Choosing a preferred range for pressure, differential pressure and temperature transmitters, scored on performance, diagnostics, hazardous area approvals, local support and price, cuts spares cost and simplifies every replacement.

                ## Milestones
                1. Installed transmitter population counted by brand and model.
                2. Selection criteria agreed with maintenance and procurement.
                3. Three candidate ranges scored against the criteria with local support confirmed.
                4. A preferred range chosen and written into the site specification.

                ## Notes
                Start from the **Purchase decision** template. Include local service and stockholding in the scoring: in many Caribbean sites the nearest service centre can be weeks away.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A preferred transmitter range chosen on scored criteria, with the decision recorded in the site instrument specification."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Count installed transmitters by brand and model from the index"
                - "Agree selection criteria with maintenance and procurement"
                - "Score three candidate ranges and confirm local support for each"
                - "Write the chosen range into the site instrument specification"
            - name: Wireless instrumentation trial
              description: |-
                ## Purpose
                Wireless transmitters can add measurements to remote tanks, rotating equipment or temporary monitoring at a fraction of the cabling cost, but battery life, update rates and security need proving on your own site. A small trial with a gateway and a few devices on non-critical monitoring duty gives the evidence for a decision on wider use.

                ## Milestones
                1. Trial scope agreed: devices, locations and monitoring-only duty.
                2. Gateway and devices installed with the network and security approach approved by the site's control network owner.
                3. Signal reliability, update rate and battery use recorded over three months.
                4. A recommendation on wider use written, with the duties wireless is and is not suited to.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three months of trial data and a written recommendation on where wireless instruments may be used on site."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick three monitoring-only duties for a wireless trial"
                - "Agree network and security arrangements with the control network owner"
                - "Record signal reliability and battery use each month of the trial"
                - "Write a recommendation on where wireless is suitable"
            - name: Control valve stiction diagnosis
              description: |-
                ## Purpose
                A loop that cycles steadily however it is tuned often has a sticking valve, and retuning only moves the problem around. Learning to recognise stiction patterns in historian trends, confirming them with a manual step or positioner diagnostics, and getting the valve repaired turns a chronic oscillation into a fixed one.

                ## Milestones
                1. Oscillating loops from the baseline screened for the classic stiction pattern.
                2. Suspected valves confirmed by small manual steps or positioner friction data.
                3. Repairs scheduled for confirmed valves, online or at the next shutdown.
                4. Loop performance after repair compared with the baseline.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every oscillating loop from the baseline screened, confirmed stiction cases repaired or scheduled, and post-repair performance recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Screen oscillating loops for the stiction trend pattern"
                - "Confirm suspects with small manual steps agreed with the operator"
                - "Schedule repairs for confirmed sticking valves"
                - "Compare loop performance after repair with the baseline"
            - name: Spurious trip reduction review
              description: |-
                ## Purpose
                Every spurious trip costs production, stresses equipment and, worst of all, teaches people to bypass the system. Reviewing a year of trip history for causes such as single transmitter failures, blocked impulse lines, poor voting or setpoints too close to normal operation gives a ranked list of instrument fixes that make the plant both safer and more available.

                ## Milestones
                1. Twelve months of trips listed with cause, from trip logs and shift reports.
                2. Spurious trips separated from genuine demands, with instrument causes identified.
                3. Fixes proposed, such as better impulse line design, voting changes or setpoint review, each sent through the change route.
                4. The spurious trip count tracked for the following year.

                ## Notes
                Any change to a safety function's voting or setpoint belongs to the site's safety lifecycle and change process. This review proposes, it does not change the logic.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A year of trips classified, spurious trip causes ranked, and each proposed fix raised through the change route."
                cadence: one-shot
                effort_hours_estimate: "18"
              tasks:
                - "Collect twelve months of trip records and shift reports"
                - "Classify each trip as a genuine demand or spurious"
                - "Identify the instrument cause of each spurious trip"
                - "Raise ranked fixes through the change route"
            - name: Loop check campaign for a new installation
              description: |-
                ## Purpose
                Loop checks are the last chance to catch a reversed signal, a wrong range or a mislabelled cable before process fluid arrives, and a rushed campaign leaves faults for start-up. Planning loop checks with signed sheets for every loop, cold checks from the junction box and hot checks from the field to the console, gives operations a system they can trust on day one.

                ## Milestones
                1. A loop check procedure and sheet agreed with the client and the commissioning team.
                2. Loop folders prepared with loop drawings, datasheets and the control system configuration printout.
                3. Every loop checked from field device to console, including alarms and fail-safe action, with sheets signed.
                4. Faults logged, fixed and rechecked, and the loop check register closed.

                ## Notes
                Start from the **Operational checklist** template for the loop check sheet. Check valve fail action on loss of air and loss of signal, not just stroke.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every loop in scope has a signed loop check sheet and every fault found is closed in the loop check register before start-up."
                cadence: one-shot
                effort_hours_estimate: "80"
              tasks:
                - "Agree the loop check procedure and sheet with commissioning"
                - "Prepare loop folders with drawings, datasheets and configuration printouts"
                - "Check each loop from field device to console and sign the sheet"
                - "Log, fix and recheck every fault in the loop check register"
            - name: Interlock and trip function test before start-up
              description: |-
                ## Purpose
                After a shutdown or a new installation, every cause and effect line should be shown to work end to end before the plant starts: initiator, logic, final element and the alarm the operator sees. A planned test against the cause and effect charts, witnessed by operations, catches the wiring change or forgotten force that would otherwise be found during a real demand.

                ## Milestones
                1. A test plan built from the current cause and effect charts, covering every line in scope.
                2. Test sequence agreed with operations so tests do not upset running equipment.
                3. Each function tested end to end with results and witness signatures recorded.
                4. All forces and test bypasses removed and checked against the bypass register before start-up.

                ## Notes
                Formal proof testing intervals and records sit with the safety lifecycle team. This test confirms the system works as charted after work has been done on it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every cause and effect line in scope tested end to end and witnessed, and the bypass register shows zero test bypasses before start-up."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Build a test plan from the current cause and effect charts"
                - "Agree the test sequence and witnesses with operations"
                - "Test each function end to end and record witnessed results"
                - "Confirm every test force and bypass is removed before start-up"
            - name: Control system migration cutover
              description: |-
                ## Purpose
                Replacing an obsolete control system on a running plant is one of the riskiest jobs a controls team does, usually squeezed into a short shutdown with no room to fall back. Preparing the cutover in detail, from converted configuration tested on a simulator, operator training and loop by loop cutover sheets to a written fallback plan, is what keeps the restart on schedule.

                ## Milestones
                1. Converted configuration tested on a simulator against the old system's behaviour.
                2. Operators trained on the new screens and given practice time before cutover.
                3. Cutover sheets prepared for every loop and every I/O point, with a fallback plan.
                4. Cutover completed, loops checked and outstanding issues listed with owners.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Cutover completed within the shutdown window, every I/O point checked on its cutover sheet, and the remaining issue list owned and dated."
                cadence: phased
                effort_hours_estimate: "200"
              tasks:
                - "List every I/O point and loop in the migration scope"
                - "Test the converted configuration on a simulator"
                - "Schedule operator training before the shutdown"
                - "Prepare cutover sheets and a written fallback plan"
                - "Run the cutover and log remaining issues with owners"
            - name: Hurricane season control system readiness
              description: |-
                ## Purpose
                Storms bring power loss, water ingress into field junction boxes and staff who cannot reach site, and control systems that are not ready turn a precautionary shutdown into a damaged restart. A yearly check before hurricane season, covering UPS autonomy, generator transfer, backups, cabinet sealing, spare critical cards and a controlled shutdown and restart plan, keeps the plant recoverable.

                ## Milestones
                1. UPS battery autonomy and generator transfer tested for every control room and equipment room.
                2. Fresh configuration backups taken and stored off site.
                3. Field cabinets and junction boxes inspected for seals, glands and drainage.
                4. A controlled shutdown and restart checklist for the control systems agreed with operations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated readiness record each year before the season shows UPS and generator tests, fresh backups, cabinet inspections and an agreed restart checklist."
                cadence: cyclic
              tasks:
                - "Run the pre-season control system readiness check @recurring(yearly)"
                - "Test UPS autonomy and generator transfer for control rooms"
                - "Inspect field cabinet seals and glands in exposed areas"
                - "Agree the control system shutdown and restart checklist with operations"
            - name: Operator briefing for a new control strategy
              description: |-
                ## Purpose
                Operators switch off a new cascade, override or advanced control scheme at the first surprise if nobody has explained it to them. Holding a short briefing before go-live, showing what the scheme does, how to tell when it is misbehaving and how to take it out safely, keeps the improvement in service.

                ## Milestones
                1. A one-page operator guide covering purpose, normal behaviour, warning signs and how to switch off.
                2. Briefings held for every shift before go-live.
                3. Questions and concerns from each shift recorded and answered.
                4. A check one month after go-live on how often the scheme was taken out of service and why.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every shift briefed before go-live with a one-page guide, and a one-month in-service check recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a one-page operator guide from your design note"
                - "Book a briefing slot with each shift before go-live"
                - "Record each shift's questions and send back answers"
                - "Check the scheme's time in service one month after go-live"
            - name: First 90 days as a site controls engineer
              description: |-
                ## Purpose
                Arriving at a plant as its controls engineer means inheriting systems, backlogs and relationships at once, and the first months set how operations will treat you for years. A 90-day plan to learn the systems, meet the panel operators and technicians, find the worst problems and deliver one visible fix builds credibility quickly.

                ## Milestones
                1. The control and safety systems, key packages and vendor contacts identified in the first 30 days.
                2. Every shift's panel operators and the instrument technicians met and their top complaints listed.
                3. The worst five problems agreed with operations by day 60.
                4. One visible fix delivered by day 90 and a plan for the next six months agreed with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 90-day plan completed with an agreed top five problem list, one delivered fix and a six-month plan signed off by your manager."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write your 30, 60 and 90-day goals and agree them with your manager"
                - "Sit with each shift's panel operator for an hour"
                - "List the top complaints from operators and technicians"
                - "Deliver one visible fix and report it to operations"
            - name: From instrument technician to controls engineer
              description: |-
                ## Purpose
                Experienced instrument technicians know the field better than most graduates ever will, but the move into engineering asks for design calculations, documentation and control theory they may not have needed before. A development plan that builds on field skills while closing the theory and documentation gaps makes the step up realistic alongside shift work and family time.

                ## Milestones
                1. Current skills mapped against a controls engineer role description, with gaps listed.
                2. A study route chosen, such as a part-time degree, a technical diploma or a structured company programme.
                3. Three engineering deliverables completed under a mentor's review, for example a datasheet, a design note and a tuning report.
                4. A conversation with your manager about the role change and timing recorded.

                ## Notes
                Start from the **Development plan** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written development plan with a chosen study route and three mentor-reviewed engineering deliverables completed."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Get a copy of the controls engineer role description from HR"
                - "Map your skills against it and list the gaps"
                - "Choose a study route that fits your shift pattern"
                - "Ask a senior engineer to mentor your first three deliverables"
            - name: Controls engineer at a system integrator
              description: |-
                ## Purpose
                Integrator and contractor engineers move between clients, each with their own standards, control system vendor and approval chain, often against fixed-price deadlines. A personal kit of reusable checklists, a scope assumptions list and a client handover pack makes each new job faster and protects you when the scope argument comes at the end.

                ## Milestones
                1. A standard scope assumptions and exclusions list for controls packages.
                2. Reusable checklists for design review, configuration testing and site handover.
                3. A client handover pack template covering as-built documents, backups and open items.
                4. Lessons from the last two jobs written up and folded into the kit.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A reusable kit of scope assumptions, three checklists and a handover pack template, used on at least one client job."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the scope assumptions and exclusions you repeat on every job"
                - "Turn your last design review comments into a reusable checklist"
                - "Draft a client handover pack template"
                - "Add lessons from the last two jobs to the kit"
            - name: Sole controls engineer on a small plant
              description: |-
                ## Purpose
                On a small plant one engineer may own the control system, the instruments, the alarms and the vendor relationships, with no one to cover holidays. Writing down how the systems are backed up, who to call and what the common faults are, and agreeing a support contract and a realistic on-call arrangement, protects the plant and keeps the role sustainable.

                ## Milestones
                1. A short systems handbook covering architecture, backups, common faults and vendor contacts.
                2. A vendor support arrangement in place with response times written down.
                3. An on-call and holiday cover arrangement agreed with your manager.
                4. A trained technician or neighbouring site engineer able to handle first-line faults.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A systems handbook, a vendor support agreement and a written cover arrangement exist, and one other person has handled a first-line fault using them."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List what only you know about the plant's control systems"
                - "Write a short systems handbook covering backups, faults and contacts"
                - "Agree vendor support response times in writing"
                - "Agree on-call and holiday cover with your manager"
            - name: Automation professional certification plan
              description: |-
                ## Purpose
                Credentials such as the ISA Certified Automation Professional or Certified Control Systems Technician, or a functional safety engineer certificate from a recognised scheme, show clients and employers a tested level of competence. Choosing the one that fits your role, checking the current eligibility and exam details on the awarding body's website and planning study around work gives you a realistic date.

                ## Milestones
                1. Candidate credentials compared for fit with your role and career plan.
                2. Current eligibility, format and fees checked on the awarding body's website and noted.
                3. A study plan with weekly hours and practice questions set against a target sitting.
                4. The application submitted and the exam sat.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "A credential chosen, its current requirements recorded from the awarding body, a study plan followed and the exam sat within twelve months."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Compare two or three controls credentials against your role"
                - "Check the current eligibility, format and fees on each body's website"
                - "Write a weekly study plan aimed at a target sitting"
                - "Submit the application for your chosen credential"
            - name: Model predictive control upkeep
              description: |-
                ## Purpose
                Advanced process control applications deliver steady margin when they are on, but plant changes, failed inferential measurements and stale models drag their service factor down until operators stop using them. A monthly review of service factor, constraint limits and model fit, with the worst controllers re-stepped, keeps the benefit that justified the investment.

                ## Milestones
                1. Service factor and active constraint reports set up for every advanced controller.
                2. Inferential quality estimates checked against lab results.
                3. Controllers with poor model fit identified and scheduled for step testing.
                4. A yearly benefits estimate shared with operations and planning.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly service factor and model fit reviews are recorded for six months, and a yearly benefits estimate is issued."
                cadence: rolling
              tasks:
                - "Set up a service factor report for each advanced controller"
                - "Review service factor, constraints and inferential accuracy @recurring(monthly:5)"
                - "Schedule step tests for controllers with poor model fit"
                - "Write a yearly benefits estimate for operations and planning"
            - name: Gas detector coverage mapping review
              description: |-
                ## Purpose
                Detectors are often placed where the cable was easy rather than where a release would actually travel, leaving gaps that a test programme cannot reveal. Reviewing coverage for one module with a geographic or scenario-based mapping approach, ideally with a specialist, shows whether detector locations and voting give the coverage the fire and gas philosophy expects.

                ## Milestones
                1. The fire and gas philosophy and coverage targets for the module located.
                2. Release scenarios, ventilation and congestion reviewed with process safety.
                3. Coverage assessed by mapping, with gaps marked on a layout drawing.
                4. Detector additions or moves proposed through the change route.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A coverage map for one module shows gaps against the stated targets, and proposed detector changes are raised through the change route."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Find the fire and gas philosophy and its coverage targets"
                - "Mark current detector locations on the module layout"
                - "Review release scenarios and ventilation with process safety"
                - "Raise detector additions or moves through the change route"
            - name: Compressor anti-surge control review
              description: |-
                ## Purpose
                Anti-surge control protects centrifugal compressors that can be damaged in seconds, and it depends on fast transmitters, a correctly mapped surge line, a quick recycle valve and careful tuning. Reviewing the controller against the latest performance curves, with valve stroke times and transmitter response measured, is specialist work that pays off in fewer trips and safer machines.

                ## Milestones
                1. Surge line and control line in the controller compared with current vendor performance curves.
                2. Recycle valve stroke time and transmitter response checked against the design requirement.
                3. Surge events and near misses from the last year reviewed from historian data.
                4. Findings and recommended changes agreed with the machinery engineer and the vendor.

                ## Notes
                Changes to anti-surge settings should involve the compressor vendor or a specialist, and go through the change route.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A review report compares surge settings with current curves, records valve and transmitter response, and lists agreed changes with owners."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Get the current performance curves from the compressor vendor"
                - "Compare the controller's surge line settings with the curves"
                - "Measure recycle valve stroke time at the next opportunity"
                - "Review recycle valve opening and surge margin with the machinery engineer @recurring(quarterly)"
---

# Controls and Automation Engineering

Controls and automation engineering is the work of making a plant measure itself accurately, hold itself steady and shut itself down safely when it must, and these projects are written for the engineer who owns the instruments, the control system and the alarms on a site or project. They start with foundations (your standards, the instrument index, the architecture, the design basis, hazardous area records and baselines for loops and alarms), move through the operating routines, then core skills in tuning, valves and measurement, improvements and decisions, dated events such as loop check campaigns and migrations, situations for new site engineers, technicians stepping up, contractors and lone engineers, and finish with specialist control work.

The rhythm is weekly and monthly: a Monday review of loops in manual, a Wednesday system health check, a Thursday bypass register walk, and monthly passes over bad actor alarms, calibration results, valve diagnostics, analysers, gas detectors, setpoint changes and configuration backups, with quarterly restore tests and obsolescence reviews and a yearly hurricane season readiness check. The Metrics log, Operational checklist, Purchase decision, Onboarding 30/60/90 and Development plan templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
