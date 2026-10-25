---
id: engineering-practice.industrial-and-manufacturing-engineering
name: Industrial and Manufacturing Engineering
description: "Plant floor engineering done properly: routings, takt and capacity, time studies, OEE and SPC, standard cost, layouts, kaizen and the specialist work of scheduling and greenfield plant design."
category: business
version: 1.0.0
tags: [engineering-practice, industrial-and-manufacturing-engineering, engineer, lean, time-study, oee, spc, continuous-improvement]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - purchase-decision
    - onboarding-30-60-90
    - compliance-control
    - development-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Industrial and Manufacturing Engineering
          description: "Working as an industrial or manufacturing engineer: line layout, time studies, capacity, quality tools, production cost and continuous improvement on the plant floor."
          projects:
            - name: Gemba walk and process map of one product family
              description: |-
                ## Purpose
                Most plant problems look different on the floor from how they look in the ERP system, so the first job in any new area is to follow one product family from goods-in to dispatch with a notebook. Walking the route, timing a few steps and sketching every queue and hand-off gives you a picture that every later study, layout and cost calculation can be checked against.

                ## Milestones
                1. One product family chosen with the production manager, covering a meaningful share of volume.
                2. Every operation, queue, inspection and transport step from receipt to shipping drawn on one sheet.
                3. Rough cycle times and queue sizes noted at each step from direct observation.
                4. Three surprises from the walk written down and shared with the area supervisor.

                ## Notes
                Ask the supervisor before stopping operators, and say plainly that you are studying the process, not timing people for discipline.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A single-sheet process map of one product family, with observed cycle times and queues, reviewed with the area supervisor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree with the production manager which product family to follow"
                - "Walk the route from goods-in to dispatch with a notebook and stopwatch"
                - "Sketch every operation, queue and transport on one sheet"
                - "Note the three biggest surprises and talk them through with the supervisor"
            - name: Routing and bill of operations accuracy check
              description: |-
                ## Purpose
                Routings in the planning system drive capacity, scheduling and costing, and on many plants they were loaded years ago and never revisited. Comparing the system routing for your top ten parts with what actually happens on the floor exposes missing operations, wrong work centres and standard times that bear no relation to reality.

                ## Milestones
                1. Routings for the ten highest-volume parts exported from the planning system.
                2. Each operation compared with the floor: work centre, sequence, set-up and run time.
                3. A discrepancy list with the evidence for each correction.
                4. Agreed corrections loaded through the plant's change process, with the planner informed.

                ## Notes
                Routing changes ripple into cost and schedule. Send them through whatever approval route the plant uses for master data, not straight into the system.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Ten routings checked against the floor, with a dated discrepancy list and every agreed correction loaded through master data control."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export routings for the ten highest-volume parts"
                - "Check each operation sequence and work centre on the floor"
                - "Record set-up and run time differences with your evidence"
                - "Submit the agreed corrections through master data control"
            - name: Standard work for the bottleneck station
              description: |-
                ## Purpose
                Variation at the constraint costs the whole plant output, and it usually comes from three operators doing the job three ways. Writing standard work for that one station, with the work sequence, takt, standard work-in-process and key quality points, gives a stable base to train against and to improve from.

                ## Milestones
                1. The best current method observed across all shifts and agreed with the operators.
                2. A standard work sheet showing sequence, time per element, takt and standard work-in-process.
                3. Key quality and safety points marked with photos at the station.
                4. Every operator on the station trained and signed off against the sheet.

                ## Notes
                Build it with the operators, not for them. A sheet written in the office and taped to the machine is ignored within a week.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard work sheet for the bottleneck station is posted, and every operator who runs it has a recorded sign-off."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Watch the bottleneck job on each shift and note method differences"
                - "Agree the best sequence with the most experienced operators"
                - "Draft the standard work sheet with element times and takt"
                - "Train and sign off each operator on the new sheet"
            - name: Takt time and customer demand baseline
              description: |-
                ## Purpose
                Takt time is available working time divided by customer demand, and without it nobody can say whether a line is overloaded or idle by design. Working it out for the main line from real shift patterns, planned breaks and the sales forecast gives the reference number that line balancing, staffing and capacity decisions all hang from.

                ## Milestones
                1. Net available time per shift calculated after breaks, meetings and planned stops.
                2. Average daily demand taken from the agreed forecast, with the seasonal high and low noted.
                3. Takt time worked out for normal and peak demand.
                4. The takt figures shown on the line board and explained to the supervisors.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Normal and peak takt times for the main line are calculated from documented shift time and forecast demand and displayed at the line."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the shift pattern, break times and planned stops for the main line"
                - "Ask sales planning for the current twelve-month demand forecast"
                - "Calculate takt for average and peak monthly demand"
                - "Recalculate takt when the demand forecast is updated @recurring(monthly:3)"
            - name: OEE measurement on the constraint machine
              description: |-
                ## Purpose
                Overall equipment effectiveness splits lost output into availability, performance and quality losses, but only if downtime and counts are recorded honestly and with the same definitions every shift. Setting up OEE on the one machine that limits plant output, with agreed loss codes and a simple shift sheet, turns arguments about why output is down into data.

                ## Milestones
                1. Definitions agreed for planned time, ideal cycle time and good parts.
                2. A loss code list of no more than about fifteen reasons, tested with operators.
                3. A shift record sheet or terminal capturing stops, counts and rejects.
                4. Four weeks of OEE data collected and checked against the production report.

                ## Notes
                Start from the **Metrics log** template. Use the nameplate or best demonstrated cycle time as ideal, and write down which one you chose.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four consecutive weeks of OEE for the constraint machine, split into availability, performance and quality, reconciled with reported output."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the definitions for planned time, ideal cycle and good parts"
                - "Draft a loss code list and test it with operators on two shifts"
                - "Set up the shift record sheet in the metrics log"
                - "Reconcile the first week of OEE with the production report"
            - name: Plant capacity model for key resources
              description: |-
                ## Purpose
                Sales will promise volume and the plant will find out later whether it can make it. A capacity model that loads forecast demand onto each key work centre using the routing times, shift patterns and realistic OEE shows which resource saturates first and how much headroom really exists before overtime or a new shift is needed.

                ## Milestones
                1. Key work centres listed with available hours per week under the current shift pattern.
                2. Forecast demand loaded through the routings to give required hours per work centre.
                3. Utilisation shown per work centre, with the constraint identified.
                4. Scenarios for an extra shift and for a ten percent demand rise added.
                5. The model reviewed with operations and planning and its assumptions recorded.

                ## Notes
                Use a planning OEE you have measured, not 100 percent. A model that assumes perfect machines always shows spare capacity that does not exist.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capacity model covering every key work centre, with the constraint named and two demand scenarios, reviewed with operations and planning."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the key work centres and their weekly available hours"
                - "Load the forecast through the routings into a spreadsheet model"
                - "Add measured OEE as the planning efficiency for each resource"
                - "Review the model and its assumptions with operations and planning"
                - "Refresh the capacity model for the new budget year @recurring(yearly)"
            - name: Standard cost build-up for a top product
              description: |-
                ## Purpose
                Pricing, make or buy decisions and improvement business cases all rely on knowing what a unit costs, and many engineers have never seen how the finance number is built. Working through one top-selling product with the cost accountant, from material and labour standards to overhead absorption, shows which inputs engineering controls and where the standard is out of date.

                ## Milestones
                1. The cost card for one top product obtained from finance.
                2. Material, direct labour, machine and overhead elements traced to their sources.
                3. Labour and machine times compared with measured times on the floor.
                4. A short note of the cost drivers engineering can influence, agreed with the cost accountant.

                ## Notes
                Treat cost data as confidential and keep copies inside the company's systems.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A traced cost card for one product with every element linked to its source and a written list of engineering-controlled cost drivers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the cost accountant for the cost card of one top-selling product"
                - "Trace each labour and machine time to its routing operation"
                - "Compare the standard times with what you measure on the floor"
                - "Write a one-page note on the cost drivers engineering controls"
            - name: Scaled floor layout and flow distance baseline
              description: |-
                ## Purpose
                Layout drawings on many plants are years behind the floor, with machines moved and racking added. An accurate scaled layout with aisles, utilities and fire routes marked, plus a spaghetti diagram of how one product actually travels, is the starting point for any layout change and often shows hundreds of metres of needless movement.

                ## Milestones
                1. The current layout drawing checked against the floor and corrected.
                2. Utility drops, fire exits, emergency routes and floor load limits marked.
                3. A spaghetti diagram of one product's travel drawn on the layout.
                4. Total travel distance per unit calculated and recorded.

                ## Notes
                Keep emergency exits, fire equipment and marked walkways clear in every future option. Confirm floor loading with the site's structural records before planning heavy machines.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A corrected scaled layout with utilities and emergency routes, plus a spaghetti diagram giving travel distance per unit for one product."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get the latest layout drawing from facilities or document control"
                - "Walk the floor and mark every difference from the drawing"
                - "Trace one product's travel path as a spaghetti diagram"
                - "Measure and record the travel distance per unit"
            - name: Ergonomics and safety baseline walk of the line
              description: |-
                ## Purpose
                Repetitive lifting, awkward reaches and forklift and pedestrian crossings cause most plant injuries, and an engineer who changes a workstation owns its new risks. Walking each station with the health and safety lead, scoring manual handling and posture with a recognised screening method, gives a ranked list to design against before any improvement work starts.

                ## Milestones
                1. Every station on the main line screened with a recognised manual handling or posture method.
                2. Forklift and pedestrian interaction points marked on the layout.
                3. A ranked list of the ten highest-risk tasks agreed with the safety lead.
                4. Actions for the top three risks owned and dated.

                ## Notes
                Any stop-work concern found on the walk goes to the supervisor immediately, not into the report.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A ranked ergonomic and traffic risk list for the main line, agreed with the safety lead, with owners and dates on the top three."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the safety lead which ergonomic screening method the site uses"
                - "Screen each main line station for lifting, reach and posture"
                - "Mark forklift and pedestrian crossing points on the layout"
                - "Repeat the ergonomics walk on the main line @recurring(quarterly)"
            - name: Daily tiered production meeting and board
              description: |-
                ## Purpose
                Problems on a line are cheapest to fix in the first hour, and a short daily meeting at a board on the floor is how many plants catch them. Setting up tier one at the line and tier two for supervisors and support functions, with safety, quality, delivery and cost measures and an action list, gives you a daily view of where engineering help is needed.

                ## Milestones
                1. A board at the line showing safety, quality, output against plan and open actions.
                2. A fixed time, length and attendee list for tier one and tier two meetings.
                3. An escalation rule for issues the line cannot solve within a shift.
                4. Four weeks of meetings run with actions closed or escalated.

                ## Notes
                Fifteen minutes standing up is plenty. If the meeting regularly runs over, the board is carrying too much.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Tier one and tier two meetings run daily for four weeks, with a visible action list and every action closed or escalated within a week."
                cadence: rolling
              tasks:
                - "Sketch the board layout with the supervisor and team leader"
                - "Agree the meeting times and who attends each tier"
                - "Write the escalation rule for unresolved line issues"
                - "Attend the tier two production meeting and take engineering actions @recurring(daily)"
            - name: Weekly OEE loss review on the constraint
              description: |-
                ## Purpose
                OEE data that nobody acts on is just another report. A short weekly review that ranks the week's losses by minutes lost, picks the top one and assigns a countermeasure turns the constraint machine's numbers into steady gains in output.

                ## Milestones
                1. A Pareto of the week's losses by minutes, prepared before each review.
                2. One countermeasure chosen per week with an owner and a check date.
                3. A running record showing each countermeasure and its effect on OEE.
                4. Twelve weeks of reviews held with the trend shared on the line board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly loss reviews held, each recording a Pareto, one owned countermeasure and its measured effect."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with the area supervisor and maintenance"
                - "Build a loss Pareto template from the OEE data"
                - "Prepare the loss Pareto and run the review @recurring(weekly:tue)"
                - "Check last week's countermeasure against the OEE trend"
            - name: SPC charts on critical characteristics
              description: |-
                ## Purpose
                Inspection at the end of the line finds bad parts after they are made, while statistical process control charts at the process warn that it is drifting before anything goes out of tolerance. Putting control charts on the few characteristics that matter most to the customer, with clear reaction rules for operators, cuts scrap and gives quality audits real evidence.

                ## Milestones
                1. Critical characteristics chosen from the drawing, control plan or customer requirements.
                2. The right chart type chosen for each, with subgroup size and sampling frequency set.
                3. Control limits calculated from a stable run, not from tolerance limits.
                4. Written reaction rules at the station telling operators what to do on each signal.

                ## Notes
                Control limits come from the process, specification limits from the drawing. Mixing them up is the most common SPC mistake.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Control charts with calculated limits and written reaction rules running on at least three critical characteristics, reviewed weekly."
                cadence: rolling
              tasks:
                - "List the critical characteristics from the control plan or drawing"
                - "Choose chart types and sampling plans with the quality engineer"
                - "Calculate control limits from twenty-five subgroups of a stable run"
                - "Review the SPC charts for out-of-control signals @recurring(weekly:thu)"
            - name: Monthly scrap and rework cost report
              description: |-
                ## Purpose
                Scrap counted in pieces sounds small; the same scrap in money, with the material, labour and machine time already sunk into it, usually gets attention from management. A monthly report that prices scrap and rework by product and cause shows where quality improvement pays back fastest.

                ## Milestones
                1. Scrap and rework recorded by part, operation and cause code.
                2. A costing method agreed with finance that values scrap at the operation where it occurred.
                3. A monthly cost report with the top five causes ranked.
                4. Each top cause linked to an open improvement action or a reason it is not being worked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scrap and rework cost reports, each ranking the top five causes with linked actions."
                cadence: rolling
              tasks:
                - "Check that scrap tickets record part, operation and cause"
                - "Agree the scrap valuation method with the cost accountant"
                - "Publish the scrap and rework cost report @recurring(monthly:5)"
                - "Link each top cause to an improvement action owner"
            - name: 5S audit routine for the production area
              description: |-
                ## Purpose
                Sort, set in order, shine, standardise and sustain is easy to launch and hard to keep, and most 5S programmes fade within a year because nobody checks. A short monthly scored audit, rotated among supervisors and with photos of the standard, keeps workplaces organised enough that missing tools, leaks and hazards stand out.

                ## Milestones
                1. A one-page audit sheet with a score for each of the five steps.
                2. Photo standards posted for each zone showing what good looks like.
                3. A rota of auditors so no zone audits itself.
                4. Six months of scores trended with actions for any zone that drops.

                ## Notes
                Start from the **Operational checklist** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly 5S audits completed in every production zone for six months, with scores trended and actions recorded for any drop."
                cadence: rolling
              tasks:
                - "Draft the 5S audit sheet from the operational checklist template"
                - "Photograph the agreed standard in each zone"
                - "Set the auditor rota so supervisors audit other zones"
                - "Run the 5S audits and post the scores @recurring(monthly:12)"
            - name: Shop floor improvement idea system
              description: |-
                ## Purpose
                Operators see more waste in a shift than an engineer sees in a month, but ideas dropped into a box with no reply soon stop coming. A simple idea system with a visible board, a quick response promise and small ideas implemented by the team itself gives a steady stream of low-cost improvements.

                ## Milestones
                1. An idea card and a board where every idea and its status is visible.
                2. A response promise, such as a reply within a week, agreed with supervisors.
                3. A rule for which ideas the team can implement themselves and which need engineering.
                4. A monthly count of ideas raised, implemented and declined, shared with the plant.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An idea board running for six months with every idea answered within the promised time and implementation rates reported monthly."
                cadence: rolling
              tasks:
                - "Design a one-side idea card with the team leaders"
                - "Agree the reply time and approval rule with supervisors"
                - "Review new ideas and post replies on the board @recurring(monthly:18)"
                - "Thank implemented ideas by name at the tier meeting"
            - name: Monthly capacity against demand check
              description: |-
                ## Purpose
                Order books move faster than budgets, and a constraint that had headroom in January can be overloaded by April. Comparing the updated demand plan with the capacity model every month gives planning and management time to add overtime, a shift or outsourcing before delivery dates slip.

                ## Milestones
                1. The latest demand plan loaded into the capacity model each month.
                2. Utilisation for each key work centre over the next three months reported.
                3. Any work centre above an agreed threshold flagged with options.
                4. Decisions on overtime, shifts or subcontracting recorded with dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly three-month capacity outlook issued for six months, with every overload flagged and a recorded decision for each."
                cadence: rolling
              tasks:
                - "Agree the utilisation threshold that triggers a capacity warning"
                - "Load the new demand plan into the capacity model @recurring(monthly:8)"
                - "Send the three-month outlook to planning and operations"
                - "Record the decision taken for each flagged work centre"
            - name: Layered process audits of standard work
              description: |-
                ## Purpose
                Standard work drifts unless someone checks it, and layered process audits spread that checking across team leaders, supervisors and managers with short, frequent visits. A small question set per station, done weekly at each layer, catches skipped checks and missing tools before they become defects.

                ## Milestones
                1. Five to ten yes or no questions per station written from its standard work and control plan.
                2. An audit schedule covering team leaders, supervisors and managers.
                3. Findings logged with immediate fixes or an owner for anything bigger.
                4. Three months of completion rates and repeat findings reviewed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Layered audits completed at three levels for three months, with completion above an agreed rate and repeat findings reviewed."
                cadence: rolling
              tasks:
                - "Write audit questions for the bottleneck station from its standard work"
                - "Build the audit schedule across the three layers"
                - "Complete your own layered process audit @recurring(weekly:wed)"
                - "Review repeat findings with the quality engineer"
            - name: Labour efficiency and utilisation reporting
              description: |-
                ## Purpose
                Labour efficiency compares earned standard hours with hours worked, and when standards are wrong the number misleads everyone who reads it. A monthly report built on checked standards, separating indirect time and waiting from slow working, helps supervisors staff lines properly and keeps the standards honest.

                ## Milestones
                1. Earned hours calculated from good output and checked standard times.
                2. Indirect, waiting and downtime hours separated from direct working time.
                3. A monthly report by line showing efficiency, utilisation and the main losses.
                4. Lines consistently far above or below standard flagged for a standards check.

                ## Notes
                Efficiencies well above 120 percent usually mean the standard is loose, not that the team is exceptional.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly labour efficiency reports by line, each separating indirect and waiting time, with outlier standards scheduled for review."
                cadence: rolling
              tasks:
                - "Ask payroll or the time system for hours booked by line and activity"
                - "Calculate earned hours from good output and standards"
                - "Publish the labour efficiency report by line @recurring(monthly:10)"
                - "Add any line outside the expected band to the time study list"
            - name: Customer complaint and quality escape log
              description: |-
                ## Purpose
                Every part that reaches a customer with a defect means the process and its inspection both failed, and repeat escapes damage the account faster than price. Keeping a log of complaints and escapes with containment, root cause and corrective action status, reviewed monthly, makes sure each one is closed and that the fix reached the control plan.

                ## Milestones
                1. A log with complaint date, part, defect, quantity, containment and action status.
                2. Containment confirmed within one working day for every new complaint.
                3. Corrective actions checked for effectiveness before closure.
                4. Lessons fed into the control plan and process FMEA for the affected part.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complaint and escape log with every entry showing containment, root cause, corrective action and a verified closure date."
                cadence: rolling
              tasks:
                - "Collect the last twelve months of customer complaints into one log"
                - "Set the containment rule for new complaints with quality"
                - "Review open complaints and escape actions @recurring(monthly:22)"
                - "Update the control plan when a corrective action closes"
            - name: Stopwatch and video time study
              description: |-
                ## Purpose
                Standard times underpin cost, capacity, staffing and incentive schemes, so a time study has to stand up to challenge from operators, unions and finance. Learning to break a job into elements, take enough cycles, rate performance and add allowances properly, then practising on a real job, gives you standards you can defend.

                ## Milestones
                1. A job broken into elements with clear start and end points.
                2. Enough cycles timed to give a stated confidence level.
                3. Performance rating applied and recorded for each element.
                4. Personal, fatigue and delay allowances added from the plant's agreed policy.
                5. A standard time calculated and checked by an experienced engineer.

                ## Notes
                Tell the operator what you are doing and why before you start. Video needs consent under the site's policy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One complete time study with element breakdown, ratings and allowances, giving a standard time checked by an experienced engineer."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read the plant's time study and allowance procedure"
                - "Choose a short repetitive job and define its elements"
                - "Time and rate the required number of cycles"
                - "Ask an experienced engineer to check your calculation"
            - name: Value stream map, current and future state
              description: |-
                ## Purpose
                A value stream map shows material and information flow together, and it usually reveals that a part spends days in queues for minutes of actual work. Mapping one value stream with lead time, process time and inventory at each step, then drawing a future state with a short list of loops to work on, gives the plant an improvement plan everyone can see.

                ## Milestones
                1. A current state map drawn from the floor, with cycle time, uptime and inventory per step.
                2. Lead time and value-added time calculated for the whole stream.
                3. A future state map showing the pacemaker, supermarkets and flow loops.
                4. An implementation plan of three to five loops with owners and quarters.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Current and future state maps for one value stream, with lead time figures and a dated loop plan agreed by the operations manager."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Pick the value stream with the operations manager"
                - "Walk it from shipping back to receiving and record data at each step"
                - "Draw the current state and calculate lead and process time"
                - "Run a half-day session to draw the future state with the team"
            - name: Gauge R&R and measurement system analysis
              description: |-
                ## Purpose
                A process cannot be judged with a measurement system that varies as much as the parts do, yet gauges are often trusted without ever being studied. Running a gauge repeatability and reproducibility study on the gauges behind your critical characteristics shows whether their readings can be used for SPC, capability and accept or reject decisions.

                ## Milestones
                1. Gauges used for critical characteristics listed with calibration status.
                2. A study designed with parts spanning the process range, several appraisers and repeat trials.
                3. Results showing repeatability, reproducibility and the number of distinct categories.
                4. Any unacceptable gauge improved, replaced or restricted in use.

                ## Notes
                Choose parts across the full process range. Ten parts that are nearly identical will make a good gauge look bad.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Gauge R&R studies completed for every gauge used on critical characteristics, with each gauge marked acceptable, conditional or rejected."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the gauges used for critical characteristics and check calibration dates"
                - "Select ten parts that span the process range"
                - "Run the study with three appraisers and repeat trials"
                - "Recheck gauge R&R on the critical gauges @recurring(yearly)"
            - name: Process capability study for a key feature
              description: |-
                ## Purpose
                Customers increasingly ask for capability indices such as Cp and Cpk on critical features, and a number produced from an unstable process or a bad gauge means nothing. Running a proper study, with stability confirmed on a control chart first and the data checked for normality, tells you whether the process can hold tolerance or needs work.

                ## Milestones
                1. Measurement system for the feature confirmed acceptable.
                2. Process stability shown on a control chart before indices are calculated.
                3. Data distribution checked and the right capability method chosen.
                4. Cp and Cpk, or the equivalent for non-normal data, reported with sample size and dates.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A capability report for one key feature showing stability evidence, distribution check and indices with sample size and date range."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the gauge for the feature has passed its R&R study"
                - "Collect at least a hundred readings over several shifts"
                - "Plot a control chart and check stability before calculating indices"
                - "Repeat the capability study on the key feature @recurring(quarterly)"
            - name: Designed experiment on a process setting
              description: |-
                ## Purpose
                Changing one setting at a time takes weeks and misses interactions, such as temperature only mattering at high line speed. A small designed experiment, often a two-level factorial on three or four factors, finds which settings drive a defect or yield in a handful of runs and gives a settings window the process can live in.

                ## Milestones
                1. A response, such as a defect rate or dimension, chosen with a working gauge.
                2. Three or four factors and their two levels agreed with operators and the process owner.
                3. A run plan with randomised order and safe limits confirmed.
                4. Main effects and interactions analysed and a confirmation run completed.
                5. New settings issued through the plant's change process.

                ## Notes
                Agree safe operating limits with the process owner before any run. Trial settings changes on production equipment go through the site's change control.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed factorial experiment with analysed effects, a confirmation run and new settings issued through change control."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose one response and confirm its gauge is capable"
                - "List candidate factors with operators and pick three or four"
                - "Write a randomised run plan inside agreed safe limits"
                - "Analyse effects and run a confirmation batch"
            - name: Line balancing with yamazumi charts
              description: |-
                ## Purpose
                When work is unevenly spread, one operator sets the pace while others wait, and adding people rarely helps. Stacking each operator's work elements against takt on a yamazumi chart shows where to move elements, combine stations or remove waste, so the line meets takt with the fewest people.

                ## Milestones
                1. Element times for every station on one line collected or taken from standard work.
                2. A yamazumi chart showing each operator's load against takt.
                3. A rebalanced proposal that moves elements without breaking precedence.
                4. The new balance trialled for a week and its output compared with the old one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A rebalanced line trialled for one week, with before and after yamazumi charts and output per labour hour compared."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Collect element times for every station on the line"
                - "Draw the yamazumi chart against the current takt"
                - "Propose a new balance that respects element precedence"
                - "Trial the new balance for a week and compare output"
            - name: Discrete event simulation of a production line
              description: |-
                ## Purpose
                Spreadsheets average away the breakdowns, batch effects and variation that really decide line output, which is why buffers and staffing are so often wrong. Building a simple discrete event model of one line, validated against a month of real output, lets you test buffer sizes, extra machines or new product mixes before spending money.

                ## Milestones
                1. Process steps, cycle time distributions, breakdowns and buffers documented as model inputs.
                2. A model built in the plant's simulation tool or a suitable alternative.
                3. Model output validated against a month of actual production within an agreed margin.
                4. Two improvement scenarios run and reported with their effect on throughput.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A validated simulation model of one line matching a month of actual output within an agreed margin, with two scenarios reported."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Check which simulation software the company licenses"
                - "Gather cycle time, breakdown and buffer data for one line"
                - "Build the base model and validate it against last month's output"
                - "Run buffer and staffing scenarios and write up the results"
            - name: Design for manufacture and assembly review
              description: |-
                ## Purpose
                Most of a product's cost is fixed at the design stage, long before the plant sees it. Bringing a manufacturing engineer's DFMA review into a new or changed design, counting parts, fasteners and assembly motions and challenging tolerances the process cannot hold, can remove parts and cost before tooling is ordered.

                ## Milestones
                1. The design and its bill of materials obtained at a stage where change is still cheap.
                2. Each part challenged on whether it needs to be separate, with a theoretical minimum part count.
                3. Assembly difficulties and tolerances beyond process capability listed.
                4. Recommendations accepted, rejected or deferred by the design owner in writing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written DFMA review of one design with part count before and after and the design owner's response to every recommendation."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask design engineering for a current design and bill of materials"
                - "Count parts and fasteners and estimate assembly time"
                - "List parts that could be combined, removed or standardised"
                - "Review the recommendations with the design owner and record decisions"
            - name: SMED changeover reduction on one machine
              description: |-
                ## Purpose
                Long changeovers force big batches, which bring high inventory and slow response to customers. Applying single-minute exchange of die to one machine, by filming a changeover, moving work outside the stop and simplifying clamps and adjustments, often halves changeover time and lets the plant run smaller batches.

                ## Milestones
                1. One full changeover filmed and broken into internal and external elements.
                2. External work moved before or after the stop with a checklist and pre-staged kit.
                3. Adjustments and fastenings simplified where possible.
                4. Three changeovers timed under the new method and the standard updated.

                ## Notes
                Keep isolation and lockout steps in the changeover even when cutting time. A faster changeover that skips energy isolation is not an improvement.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Changeover time on one machine cut by a measured amount over three timed changeovers, with a new written changeover standard."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Film one full changeover with the crew's agreement"
                - "Separate internal and external elements on a timeline"
                - "Build a pre-changeover checklist and kit trolley"
                - "Audit changeover times against the new standard @recurring(monthly:15)"
            - name: Functional layout to product cell conversion
              description: |-
                ## Purpose
                Plants grouped by process, with all the lathes in one bay and all the presses in another, move parts long distances and hide queues. Grouping the machines for one product family into a cell can cut lead time and travel sharply, but only if the volumes, machine sharing and people skills support it.

                ## Milestones
                1. A product family identified with similar routings and enough steady volume.
                2. A cell concept with machine positions, flow and operator movement drawn on the layout.
                3. Capacity checked for any machine shared with other families.
                4. A move plan with utilities, foundations and downtime agreed with maintenance and production.
                5. Lead time and travel before and after the move measured.

                ## Notes
                Moving machines involves lifting plans, isolations and often management of change. Agree these with the site's safety and maintenance leads before the move date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A product cell installed with lead time and travel distance measured before and after, and all move work completed under the site's safety controls."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Group parts by routing to find a candidate product family"
                - "Draw the cell concept on the scaled layout"
                - "Check shared machine capacity in the capacity model"
                - "Agree the move plan and downtime with maintenance and production"
            - name: Kanban supermarket for purchased components
              description: |-
                ## Purpose
                Lines that stop for a missing bracket while the stores hold months of other parts have a replenishment problem, not a stock problem. A kanban loop for high-runner purchased components, sized from demand, lead time and safety stock, keeps the line supplied with less inventory and fewer expediting calls.

                ## Milestones
                1. High-runner components chosen by usage and lead time.
                2. Kanban quantities calculated from daily demand, replenishment time and safety stock.
                3. Line-side locations, cards and a replenishment route set up.
                4. Shortages and stock levels compared over two months before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working kanban loop for at least ten components, with two months of shortage and inventory data before and after."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List purchased components by monthly usage and lead time"
                - "Calculate kanban sizes with the materials planner"
                - "Set up line-side locations and the replenishment route"
                - "Recheck kanban card quantities against current demand @recurring(quarterly)"
            - name: Error proofing for a repeat defect
              description: |-
                ## Purpose
                When the same defect keeps coming back despite retraining, the process is making the mistake easy. A poka-yoke device or method, such as a fixture that only accepts the right orientation or a sensor that stops the cycle on a missing part, removes the chance of the error rather than relying on people to catch it.

                ## Milestones
                1. One repeat defect chosen from the complaint log or scrap report.
                2. The point where the error is made, not where it is found, identified.
                3. An error proofing device or method designed and trialled.
                4. Defect rate tracked for two months after installation and the device added to daily checks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An error proofing device installed for one repeat defect, with two months of data showing the defect rate after installation."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick the most repeated defect from the scrap and complaint data"
                - "Watch the operation to find where the error is introduced"
                - "Sketch two error proofing options with the toolroom"
                - "Add a daily check that the device works to the start-up sheet"
            - name: Ergonomic redesign of a high-risk workstation
              description: |-
                ## Purpose
                The highest-scoring station from the ergonomics walk usually combines a heavy lift, a twist and a reach, repeated hundreds of times a shift. Redesigning it with adjustable heights, lift aids or a changed part presentation reduces injury risk and often speeds the job up as well.

                ## Milestones
                1. The workstation's risk score and the operators' own complaints recorded.
                2. Two or three redesign options sketched with the operators and the safety lead.
                3. A mock-up or trial of the chosen option.
                4. The station rescored after the change and the standard work updated.

                ## Notes
                Include operators of different heights in the trial. A station set for the engineer's height suits nobody on the night shift.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One high-risk workstation redesigned and rescored with a lower risk rating, with standard work updated to match."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pull the top-ranked station from the ergonomics risk list"
                - "Ask the operators on each shift what hurts and when"
                - "Build a cardboard or timber mock-up of the preferred option"
                - "Rescore the station after the change with the safety lead"
            - name: Make versus buy analysis for a component
              description: |-
                ## Purpose
                Bringing a part in-house or sending it out changes cost, capacity, quality risk and lead time at once, and the decision often gets made on unit price alone. A structured comparison using full cost, spare capacity, supplier risk and strategic fit gives management a recommendation they can defend.

                ## Milestones
                1. One component chosen where the make or buy question is live.
                2. Full internal cost worked out with finance, including set-up, scrap and overhead.
                3. Supplier quotes and lead times gathered from at least two sources.
                4. A scored comparison and recommendation presented and the decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A make or buy recommendation for one component comparing full cost, capacity and risk, with management's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree with purchasing which component to analyse"
                - "Build the internal full cost with the cost accountant"
                - "Request quotes and lead times from two suppliers"
                - "Present the scored comparison and record the decision"
            - name: Cobot or automation business case for a manual station
              description: |-
                ## Purpose
                Collaborative robots and simple automation are cheaper than they were, but many installations sit idle because the part presentation, cycle time or changeovers were never thought through. A business case that tests the task's fit, includes integration, guarding and support costs and sets a payback threshold avoids buying an expensive ornament.

                ## Milestones
                1. One manual station chosen for its repetition, ergonomic risk or labour shortage.
                2. Cycle time, part variety and presentation requirements written into a short specification.
                3. Two or three integrator proposals compared on cost, cycle and support.
                4. A risk assessment of the proposed cell, including collaborative operation limits.
                5. A payback and recommendation presented to management.

                ## Notes
                Start from the **Purchase decision** template. Robot cells need a documented risk assessment to the relevant ISO machinery and robot safety standards before they run.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An automation business case for one station comparing at least two proposals, with a risk assessment and a recorded go or no-go decision."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Choose the manual station and film a typical hour of work"
                - "Write a one-page specification of cycle time and part variety"
                - "Ask two integrators for budget proposals"
                - "Draft the business case from the purchase decision template"
            - name: Constraint debottleneck study
              description: |-
                ## Purpose
                The theory of constraints says an hour lost at the bottleneck is an hour lost for the whole plant, while an hour saved elsewhere is often worth nothing. A study that confirms the true constraint, exploits it fully with breaks covered and quality checks moved upstream, and only then considers spending money, raises output at the lowest cost.

                ## Milestones
                1. The constraint confirmed from queue build-up, utilisation and OEE data.
                2. Lost time at the constraint listed: breaks, changeovers, starvation and quality losses.
                3. No-cost actions to keep the constraint running put in place.
                4. Capital options to raise constraint capacity costed if still needed.
                5. Output before and after recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A debottleneck report showing the confirmed constraint, actions taken, and plant output before and after over at least four weeks."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Check where work-in-process queues build up on each shift"
                - "List every reason the constraint stops or starves"
                - "Agree break cover and upstream quality checks with the supervisor"
                - "Cost the capital options only after the no-cost actions are in"
            - name: Five-day kaizen event on one cell
              description: |-
                ## Purpose
                Given one focused week, a cross-functional team can redesign a cell, retrain the operators and lock in new standard work faster than months of meetings. The event pays off only if the scope, data and sponsor are settled beforehand and the follow-up list is closed within thirty days.

                ## Milestones
                1. A charter with scope, targets, team members and a sponsor signed off two weeks ahead.
                2. Baseline data collected before the week starts.
                3. Changes made and new standard work trained during the week.
                4. A report-out to management with results against targets.
                5. Every open item closed within thirty days of the event.

                ## Notes
                Any physical change during the week still goes through the site's management of change and permit rules. Book maintenance and electrical support in advance.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kaizen week delivered with a signed charter, results against targets in a report-out and all follow-up items closed within thirty days."
                cadence: one-shot
                effort_hours_estimate: "50"
              tasks:
                - "Draft the kaizen charter and ask the sponsor to sign it"
                - "Collect cycle time, output and quality baseline for the cell"
                - "Book maintenance and electrical support for the event week"
                - "Close the thirty-day follow-up list with the team"
            - name: New product production readiness and launch
              description: |-
                ## Purpose
                New parts that reach the line without proven tooling, trained operators or a control plan become months of firefighting. Running a production readiness plan, with process flow, PFMEA, control plan, capability on a trial run and the customer's approval package where required, lets the launch hit its date at the quality the customer expects.

                ## Milestones
                1. A launch plan with the customer approval date and every readiness gate listed.
                2. Process flow, PFMEA and control plan written and reviewed.
                3. Tooling, gauges and fixtures proven on a trial run with capability recorded.
                4. Operators trained and the approval package submitted where the customer requires one.
                5. A safe launch period with extra checks completed before normal control.

                ## Notes
                Many automotive and aerospace customers require a specific approval package such as PPAP or a first article inspection. Check the customer's own requirements rather than assuming the format.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new product launched on the planned date with control plan, capability results and customer approval, if required, on file."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Ask the customer or programme manager for the approval requirements and dates"
                - "Draft the process flow and launch plan with every readiness gate"
                - "Book the trial run and capability measurement"
                - "Write the safe launch checks with quality"
            - name: Quality management certification audit preparation
              description: |-
                ## Purpose
                Certification and surveillance audits against standards such as ISO 9001 or IATF 16949 check that the plant does what its own procedures say. Preparing the manufacturing engineering evidence ahead of time, from control plans to change records and calibration, turns the audit into a confirmation rather than a scramble.

                ## Milestones
                1. The audit date, scope and the clauses touching manufacturing engineering confirmed.
                2. Control plans, PFMEAs, work instructions and change records checked as current.
                3. Open corrective actions from the last audit closed with evidence.
                4. A mock walk-through of the floor done with the quality manager.
                5. Any findings answered with corrective action plans by the auditor's deadline.

                ## Notes
                Start from the **Compliance control** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit completed with all manufacturing engineering evidence available and every finding answered by the auditor's deadline."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Confirm the audit date and scope with the quality manager"
                - "Check that control plans and work instructions match the floor"
                - "Close the open corrective actions from the last audit"
                - "Walk the floor with the quality manager as a mock audit"
            - name: New equipment installation over a planned shutdown
              description: |-
                ## Purpose
                Installing a new machine or relocating a line over a holiday shutdown leaves no room for missing anchor bolts, late utilities or untrained operators on the first shift back. A detailed installation plan with an hour-by-hour schedule, safety controls and an acceptance test gets production running on the restart date.

                ## Milestones
                1. Equipment, foundations, utilities and guarding requirements confirmed with the supplier.
                2. An hour-by-hour shutdown schedule with contractors, lifting plans and permits.
                3. Site acceptance criteria agreed for output, quality and safety functions.
                4. Operators and maintenance trained before restart.
                5. The machine signed off against acceptance criteria and handed to production.

                ## Notes
                Contractor work, lifting and energy isolation all go under the site's permit to work system. Agree who holds stop-work authority on the day.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "New equipment installed in the shutdown window, signed off against agreed acceptance criteria and running on the first production shift."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Get the supplier's installation and utility requirements in writing"
                - "Draft the hour-by-hour shutdown schedule with maintenance"
                - "Agree the site acceptance criteria with production and quality"
                - "Book operator and maintenance training before restart"
            - name: Annual labour standards and cost rates update
              description: |-
                ## Purpose
                Standards and cost rates are set once a year for the budget, and any that were not updated after last year's improvements will distort pricing and efficiency for the next twelve months. A yearly cycle that reviews changed routings, re-studies flagged jobs and feeds checked times to finance keeps the budget grounded in the floor.

                ## Milestones
                1. Routings changed during the year listed with their new standard times.
                2. Jobs flagged by the efficiency report re-studied.
                3. Updated standards and machine rates sent to finance before the budget deadline.
                4. A short note of the biggest changes and their cost effect issued.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Updated standards and machine rates delivered to finance before the budget deadline, with a written note of the main changes."
                cadence: cyclic
              tasks:
                - "Ask finance for this year's budget timetable"
                - "List routings changed since the last standards update"
                - "Re-study the jobs flagged by the efficiency report"
                - "Send updated standards and rates to finance @recurring(yearly)"
            - name: First 90 days as a plant manufacturing engineer
              description: |-
                ## Purpose
                Joining a new plant, the first three months decide whether supervisors call you when something goes wrong or work around you. A deliberate 30, 60 and 90 day plan, spending time on every shift, learning the product and the systems and delivering one visible fix, builds trust and shows where the real problems are.

                ## Milestones
                1. Time spent on every shift, including nights, in the first month.
                2. Key contacts in production, quality, maintenance, planning and finance met and noted.
                3. One small visible problem solved by day sixty.
                4. A 90-day review with your manager agreeing your first year's priorities.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 30, 60, 90 day plan completed, with every shift visited, one problem solved by day sixty and first-year priorities agreed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft your 30, 60, 90 day plan from the onboarding template"
                - "Arrange to spend a full shift with each crew, including nights"
                - "List the key contacts in each support function"
                - "Book the 90-day review with your manager"
            - name: Sole engineer in a small manufacturing business
              description: |-
                ## Purpose
                In a small plant the industrial engineer is often also the quality, maintenance and projects person, with no department behind them and an owner who wants results this month. Choosing a short list of measures, one improvement at a time and a monthly review with the owner keeps the work focused and visible without drowning in systems built for big companies.

                ## Milestones
                1. Three or four measures agreed with the owner, such as on-time delivery, scrap cost and output per labour hour.
                2. One improvement project chosen per quarter, linked to the biggest loss.
                3. A monthly one-page review with the owner.
                4. A list of what to buy in, such as calibration or training, instead of doing it yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly one-page review held with the owner for six months, tracking agreed measures and one quarterly improvement project."
                cadence: rolling
              tasks:
                - "Agree three or four plant measures with the owner"
                - "Pick the first quarterly improvement from the biggest loss"
                - "List the specialist services worth buying in"
                - "Hold the monthly one-page review with the owner @recurring(monthly:26)"
            - name: Moving up to continuous improvement manager
              description: |-
                ## Purpose
                Leading a plant's improvement programme is less about tools and more about choosing the right projects, coaching others to run them and showing savings finance will accept. Preparing for the step with a development plan covering facilitation, project selection, savings validation and coaching makes the move deliberate rather than accidental.

                ## Milestones
                1. The skills gap between your current role and a CI manager role written down.
                2. Two improvement projects facilitated where someone else held the pen.
                3. A savings validation method agreed with finance and used on one project.
                4. A development plan reviewed with your manager or a mentor.

                ## Notes
                Start from the **Development plan** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A development plan agreed with your manager, two coached projects completed and one saving validated by finance."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask a CI manager you respect what the role really involves"
                - "Draft the development plan from the template"
                - "Volunteer to coach a team leader through an improvement project"
                - "Agree a savings validation method with finance"
            - name: Lean six sigma green belt certification project
              description: |-
                ## Purpose
                Many employers expect manufacturing engineers to hold a green belt, and the certification usually needs a completed project with measured results as well as the training. Picking a project with real data, a clear defect or cycle time measure and a sponsor, and running it through define, measure, analyse, improve and control, earns the belt and a result the plant keeps.

                ## Milestones
                1. A training provider or internal programme chosen and its project requirements noted.
                2. A project charter with a measurable problem and a sponsor signed off.
                3. Baseline, analysis and improvement phases documented with data.
                4. A control plan in place and results confirmed over an agreed period.
                5. The project submitted and certification awarded.

                ## Notes
                Certification bodies differ in their requirements. Check the provider's current rules on project scope and evidence before you start.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A green belt project completed with documented phases, measured results and certification awarded by the chosen provider."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Ask HR or your manager which green belt programmes the company supports"
                - "Note the provider's project and evidence requirements"
                - "Draft a charter for a problem with good data and a willing sponsor"
                - "Submit the completed project for certification review"
            - name: Industrial engineering in a food and beverage plant
              description: |-
                ## Purpose
                Food, drink and bottling plants add hygiene, allergen and shelf-life rules to every layout, changeover and line balance, and many in the Caribbean also face sharp seasonal peaks around holidays and festivals. Adapting your methods to sanitation windows, allergen changeovers and seasonal demand keeps improvement work inside food safety rules.

                ## Milestones
                1. The plant's food safety plan and hygiene zones understood and marked on the layout.
                2. Changeover and sanitation times included in capacity and takt calculations.
                3. Seasonal demand peaks mapped against line capacity and staffing.
                4. Every proposed change checked with the food safety lead before trial.

                ## Notes
                Any change to a process step in a food plant may need the hazard analysis plan reviewed. Ask the food safety team first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A capacity and changeover plan for one line that includes sanitation and allergen time, reviewed and approved by the food safety lead."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the plant's food safety plan and hygiene zone map"
                - "Time a full sanitation and allergen changeover"
                - "Map seasonal demand peaks against the filling line capacity"
                - "Review proposed changes with the food safety lead"
            - name: Setting time standards with a unionised workforce
              description: |-
                ## Purpose
                Where standards affect pay, staffing or discipline, the collective agreement often sets how studies are done, who is present and how disputes are settled. Learning the agreement's rules and building a working relationship with the shop steward lets you set fair standards without a grievance on every study.

                ## Milestones
                1. The clauses in the collective agreement on work measurement and standards read and noted.
                2. The shop steward or union representative met and the study process explained.
                3. One study carried out following the agreed procedure, with the representative informed.
                4. A record kept of each study, its notification and any challenge.

                ## Notes
                Industrial relations rules vary by country and agreement. Check with HR or the industrial relations lead before any study that affects pay.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A summary of the agreement's work measurement clauses and one standard set under that procedure without a formal grievance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask HR for the work measurement clauses of the collective agreement"
                - "Meet the shop steward to explain how you run a study"
                - "Run one study following the agreed procedure"
                - "Keep a study record with notification dates and outcomes"
            - name: Finite capacity scheduling for a job shop
              description: |-
                ## Purpose
                Infinite loading in a planning system promises dates the shop can never meet, and expediting becomes the real scheduling method. Introducing finite capacity scheduling, from a simple drum-buffer-rope rule at the constraint to an advanced planning tool, gives realistic dates and a schedule supervisors trust.

                ## Milestones
                1. Current on-time delivery and schedule adherence measured as a baseline.
                2. A scheduling rule chosen for the constraint, such as drum-buffer-rope or a dispatching rule.
                3. A frozen window agreed with sales and planning.
                4. The new schedule run for three months and on-time delivery compared with the baseline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Finite scheduling in use for three months with schedule adherence and on-time delivery compared against the recorded baseline."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Measure the last three months of on-time delivery and schedule adherence"
                - "Choose a scheduling rule for the constraint with the planner"
                - "Agree the frozen schedule window with sales"
                - "Freeze next week's constraint schedule with planning @recurring(weekly:mon)"
            - name: Systematic layout planning for a greenfield plant
              description: |-
                ## Purpose
                Greenfield buildings are the one chance to get flow, expansion space and material handling right, and mistakes are poured in concrete for decades. Using systematic layout planning, with activity relationships, space requirements and several block layouts scored against agreed criteria, produces a layout the design team and operations can both sign off.

                ## Milestones
                1. Product mix, volumes and growth over ten years agreed as the design basis.
                2. An activity relationship chart and space requirement for every department.
                3. Three block layout options scored against flow, expansion, safety and cost.
                4. The chosen option developed to a detailed layout with the building designers.
                5. Emergency routes, fire separation and loading checked with the fire engineer.

                ## Notes
                Fire codes, building regulations and environmental permits shape the layout. Bring the architect, fire engineer and permit lead in at the block layout stage.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A scored comparison of three block layouts and a chosen detailed layout signed off by operations and the building design team."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Agree the product mix and ten-year volumes as the design basis"
                - "Draw the activity relationship chart with each department head"
                - "Sketch three block layout options with space allowances"
                - "Score the options with operations and the building designers"
            - name: Shop floor data and MES requirements
              description: |-
                ## Purpose
                Manual OEE sheets, paper travellers and spreadsheets hit a limit as a plant grows, and a manufacturing execution system bought without clear requirements can cost a fortune and change little. Writing the plant's requirements from the floor up, covering which data, at what frequency and for whom, lets the business choose a system or a simpler machine connection that answers real questions.

                ## Milestones
                1. The decisions each role needs shop floor data for listed, from operator to plant manager.
                2. Current data sources, paper forms and machine signals mapped.
                3. A requirements document with must-have and nice-to-have items.
                4. A pilot on one line connecting machine signals to OEE and downtime reporting.
                5. Control network security requirements agreed with IT before any machine connection.

                ## Notes
                Ask the agent to draft the first version of the requirements from your role interviews, then check every line against the floor.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A shop floor data requirements document agreed by operations and IT, with a one-line pilot reporting automatic OEE and downtime."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Interview one person in each role about the data decisions they make"
                - "Map every paper form and spreadsheet used on the floor"
                - "Ask the agent to draft requirements from the interview notes"
                - "Agree control network security rules with IT before the pilot"
            - name: Plant-wide productivity improvement roadmap
              description: |-
                ## Purpose
                Senior industrial engineers are asked to say where the next several years of productivity will come from, not just to fix this month's losses. A roadmap that sizes the gap between today's cost and output and the business target, then lays out the projects, capital and skills to close it, turns scattered improvements into a plan the leadership team can fund.

                ## Milestones
                1. Current productivity, cost per unit and OEE baselined across the plant.
                2. The target agreed with the leadership team and the gap sized.
                3. Candidate projects ranked by benefit, cost and difficulty.
                4. A three-year roadmap with capital, skills and resource needs.
                5. The roadmap presented and approved for the budget cycle.

                ## Notes
                Savings in the roadmap need finance's agreement on how they will be measured, or the plan loses credibility in its first year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-year productivity roadmap with a sized gap, ranked projects and resource needs, approved by the leadership team."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Gather plant-wide productivity, cost and OEE figures for the last year"
                - "Ask the plant manager for the business target and timescale"
                - "Rank candidate projects by benefit, cost and difficulty"
                - "Present the roadmap for leadership approval"
---

# Industrial and Manufacturing Engineering

Industrial and Manufacturing Engineering is for the engineers who make a plant floor run: the person who knows the routing, the takt time, the real capacity of the constraint and what a unit actually costs to make. It opens with foundations (a floor walk, routings, takt, OEE, capacity and standard cost), moves into the operating machinery of tier meetings, loss reviews, SPC, 5S and audits, then the core skills of time study, value stream mapping, gauge studies and simulation, the improvement and decision projects such as SMED, cells, kanban and automation cases, dated events like kaizen weeks, launches and certification audits, career situations, and finally specialist work in finite scheduling, greenfield layout and shop floor data.

The rhythm is daily for the tier meeting, weekly for OEE losses, SPC charts and layered audits, monthly for scrap cost, 5S, capacity against demand, labour efficiency and complaints, quarterly for ergonomics, capability and kanban sizing, and yearly for the standards and cost update. The Metrics log, Operational checklist, Purchase decision, Onboarding 30/60/90, Compliance control and Development plan templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
