---
id: engineering-practice.chemical-and-process-engineering
name: Chemical and Process Engineering
description: "A working process engineer's area: learning the unit from its PFD, closing mass and energy balances, sizing equipment by hand, watching performance and troubleshooting the plant within its operating envelope."
category: business
version: 1.0.0
tags: [engineering-practice, chemical-and-process-engineering, engineer, process-engineering, mass-balance, equipment-sizing, troubleshooting, plant-performance]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - reading-queue
    - vendor
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Chemical and Process Engineering
          description: "Working as a chemical or process engineer: process flow diagrams, mass and energy balances, equipment sizing, plant troubleshooting and operating envelope reviews."
          projects:
            - name: Process engineer's reference and calculation toolkit
              description: |-
                ## Purpose
                Most early mistakes in process work are unit slips, the wrong pressure basis or a property pulled from an unreliable source. Setting up one trusted kit of steam tables, a physical property handbook, a units converter, the site's standard conditions and a calculation sheet layout means every later calculation starts from the same footing and can be checked by someone else.

                ## Milestones
                1. A chosen steam table source and physical property handbook, with editions noted.
                2. The site's standard reference conditions and pressure basis (gauge or absolute) written on one page.
                3. A calculation sheet layout with inputs, assumptions, method, result and checker fields.
                4. Three worked conversions (flow, energy, pressure) checked against a colleague's numbers.

                ## Notes
                Write gauge or absolute against every pressure, every time. It is the most common source of a wrong answer in a process calculation.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference kit and calculation sheet layout are saved in one folder, and three sample conversions have been checked by a colleague."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask a senior process engineer which property handbook the site trusts"
                - "Write the site's standard conditions and pressure basis on one page"
                - "Build a calculation sheet layout with a checker signature field"
                - "Work three unit conversions and have a colleague check them"
            - name: Learning your unit from its process flow diagram
              description: |-
                ## Purpose
                A process flow diagram is the shortest honest description of what a unit does: feeds, products, major equipment, stream numbers and the duties that matter. Redrawing it by hand and explaining it aloud to an operator or senior engineer is the fastest way to stop being new on a unit, usually within the first month.

                ## Milestones
                1. The current issued PFD for the unit located, with its revision recorded.
                2. A hand-drawn simplified PFD showing every major equipment item and key stream number.
                3. Each major item described in one line: what it does and what limits it.
                4. The PFD explained to an operator or senior engineer, with their corrections noted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-drawn PFD with one-line duties for every major item has been explained to a senior engineer or operator and corrected."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the latest issued PFD for the unit from document control"
                - "Redraw the PFD by hand with stream numbers and major equipment"
                - "Write one line on the duty and limit of each major item"
                - "Walk a panel operator through your drawing and note their corrections"
            - name: P&ID line walk of the first unit
              description: |-
                ## Purpose
                Drawings drift from the plant: bypasses get added, valves get locked in different positions, and temporary hoses become permanent. Walking each P&ID in the field with a highlighter, under the site's access rules and with an operator, teaches the plant as built and turns up discrepancies that matter for every later study.

                ## Milestones
                1. The P&ID set for the unit printed and grouped by system.
                2. Every P&ID sheet walked in the field and highlighted line by line.
                3. Discrepancies between drawing and plant listed with tag numbers and photos where allowed.
                4. The discrepancy list handed to document control for as-built correction.

                ## Notes
                Follow the site's rules on field access, gas detectors and photography. Never open or operate a valve during a line walk; that is the operator's job under the permit system.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every P&ID sheet for the unit is highlighted as walked, and a discrepancy list has been submitted to document control."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Print the unit's P&ID set and group the sheets by system"
                - "Book field time with an operator for the first two sheets"
                - "Highlight each line as walked and mark every mismatch"
                - "Send the discrepancy list to document control with tag numbers"
            - name: Design heat and material balance versus today
              description: |-
                ## Purpose
                The heat and material balance shows what the unit was designed to do, and plants rarely run there years later: feed changes, rates rise and exchangers foul. Setting today's measured flows, temperatures and compositions beside the design case shows where the unit has moved and which assumptions in old studies no longer hold.

                ## Milestones
                1. The design heat and material balance table located for the governing case.
                2. Current values for each key stream gathered from the historian and recent lab results.
                3. A side-by-side table with the percentage difference for flow, temperature and composition.
                4. The five largest departures from design explained or flagged for investigation.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A design versus current table covers every key stream, with the five largest departures explained or listed for follow-up."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find the design heat and material balance and its governing case"
                - "Pull a week of averaged historian data for each key stream"
                - "Tabulate design against current with percentage differences"
                - "List the five biggest departures and a likely reason for each"
            - name: Operating envelope and limits sheet for the unit
              description: |-
                ## Purpose
                Operators and engineers need one place that says how hot, how fast, how full and how concentrated the unit may run, and what happens at each boundary. A limits sheet that lists design limits, alarm and trip settings and the process reason for each turns scattered knowledge into something a night shift can use.

                ## Milestones
                1. Key process variables for the unit listed, with normal operating range.
                2. Design limit, alarm and trip settings recorded for each variable from controlled sources.
                3. The process consequence of exceeding each limit written in plain words.
                4. The sheet reviewed by operations and the area's technical authority, then issued.

                ## Notes
                Limits come from design documents and approved studies, not memory. Any change to a limit goes through the site's management of change process.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An issued limits sheet lists normal range, alarm, trip, design limit and consequence for every key variable on the unit."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List the twenty process variables that matter most on the unit"
                - "Pull alarm and trip settings from the controlled instrument database"
                - "Write the consequence of exceeding each limit in one sentence"
                - "Book a review of the draft sheet with the operations superintendent"
            - name: Chemical hazard and property file for the unit
              description: |-
                ## Purpose
                Every chemical on the unit, from main feed to a drum of antifoam, has a flash point, toxicity, reactivity and materials it attacks. Gathering current safety data sheets and building a simple compatibility matrix means you can answer an operator's question about mixing, purging or a leak quickly and correctly.

                ## Milestones
                1. A list of every chemical present on the unit, including additives and utilities.
                2. A current safety data sheet filed for each chemical.
                3. Key properties tabulated: flash point, boiling point, exposure limit, reactivity notes.
                4. A chemical compatibility matrix for the pairs that could realistically meet.

                ## Notes
                Use the supplier's current safety data sheet and your site's industrial hygiene team. Do not rely on a generic internet sheet for a mixture.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A hazard file holds a current safety data sheet for every chemical on the unit plus a compatibility matrix reviewed by the site safety team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every chemical on the unit, including drums and utilities"
                - "Collect the current supplier safety data sheet for each one"
                - "Tabulate flash point, exposure limit and reactivity for each chemical"
                - "Ask the safety team to review the compatibility matrix"
            - name: Overall mass balance closure on one unit
              description: |-
                ## Purpose
                If feed in does not equal product out within a few percent, something is wrong: a meter, a lab result, an unmeasured purge or a real loss. Closing one balance properly teaches you which meters to trust and where the unit's unmeasured streams are, and it is the base for every yield claim you will make.

                ## Milestones
                1. A boundary drawn around the unit with every stream crossing it listed.
                2. A metered, calculated or estimated value assigned to every stream, with its source.
                3. The balance closed over a steady period, with the closure error stated as a percentage.
                4. Suspect meters or missing streams listed with an action to check each one.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mass balance across the unit boundary closes within an agreed percentage, or the gap is traced to named meters or streams."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draw the unit boundary and list every stream that crosses it"
                - "Pick a steady 24-hour period from the historian"
                - "Assign a value and data source to every stream"
                - "Calculate the closure error and list the suspect meters"
            - name: Energy balance around a furnace or exchanger train
              description: |-
                ## Purpose
                Fuel and steam are usually a unit's biggest controllable cost, and energy balances are where wrong thermocouples and stale heat duties hide. Working one balance around a fired heater or preheat train shows where heat goes, how efficient the equipment really is and whether the numbers on the screen can be believed.

                ## Milestones
                1. The equipment boundary and every heat input and output identified.
                2. Duties calculated from flows, temperatures and property data for each stream.
                3. Losses and efficiency estimated, with the assumptions written down.
                4. Results compared with design duty and any large gap explained.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checked energy balance gives the current duty and efficiency of the chosen equipment, compared with design."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose one fired heater or preheat train with good instrumentation"
                - "Collect flows, temperatures and fuel analysis for a steady period"
                - "Calculate stream duties and the overall efficiency"
                - "Compare with design duty and note the size of the gap"
            - name: Written process description of the unit
              description: |-
                ## Purpose
                Operating manuals often hold a process description written for the original design that nobody has touched since. Writing a current one, section by section, forces you to understand the chemistry, the control philosophy and the reasons behind each piece of equipment, and it gives new operators and engineers something accurate to read.

                ## Milestones
                1. An outline agreed covering feeds, chemistry, each section, utilities and products.
                2. A first draft of every section written in plain language.
                3. The draft checked by an experienced operator and a senior engineer.
                4. The description issued through document control as the current version.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A reviewed process description for the unit is issued through document control with a revision number."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Read the existing process description and mark what is out of date"
                - "Agree an outline with your supervisor"
                - "Draft one section a week starting with the feed section"
                - "Send the full draft to an operator and a senior engineer for comment"
            - name: Choosing the unit's key performance indicators
              description: |-
                ## Purpose
                A unit can be measured a hundred ways, and a process engineer who reports thirty numbers is ignored. Agreeing five to eight indicators, such as yield, specific energy per tonne, conversion, on-spec product and a limiting equipment margin, with clear definitions and data sources gives every later report a point.

                ## Milestones
                1. A long list of candidate indicators gathered from management, operations and design targets.
                2. Five to eight indicators chosen, each with a formula and data source.
                3. A target or reference value agreed for each indicator.
                4. The definitions written on one page and shared with operations.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Five to eight unit indicators are defined with formula, data source and target, and the one-page definition has been shared with operations."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your manager and the operations lead what they need to know weekly"
                - "List candidate indicators with a formula for each"
                - "Cut the list to eight or fewer and agree targets"
                - "Publish the one-page definitions sheet"
            - name: Morning trend and shift log review
              description: |-
                ## Purpose
                Most plant problems announce themselves in the trends hours or days before they become upsets. Fifteen minutes each working morning reading the shift log and scanning a fixed set of trends catches drifting temperatures, slow level changes and repeated operator interventions while they are still easy to fix.

                ## Milestones
                1. A saved historian screen with the fifteen trends that matter most.
                2. A habit of reading the shift log and trends before the morning meeting.
                3. A running note of anything abnormal, with date and tag.
                4. At least one early catch per month raised with operations before it became an upset.

                ## Notes
                Keep the trend set fixed for a month before changing it, so you learn what normal looks like.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The trend set and shift log are reviewed on at least four working mornings a week for a month, with abnormal findings noted."
                cadence: rolling
              tasks:
                - "Build a saved historian screen with your fifteen key trends"
                - "Read the shift log and scan the key trends before the morning meeting @recurring(daily)"
                - "Note anything abnormal with the tag number and time"
                - "Raise the week's drifting variables at the Monday operations meeting @recurring(weekly:mon)"
            - name: Weekly unit performance note
              description: |-
                ## Purpose
                Managers and operations leads want one short page a week saying how the unit ran, not a spreadsheet. A weekly note with the agreed indicators, the week's constraints and one recommendation builds trust in the process engineer's voice and gives a running history when someone asks what happened in March.

                ## Milestones
                1. A one-page note format with indicators, constraints, events and one recommendation.
                2. The note issued every week for a month on the same day.
                3. Indicator trends charted over at least eight weeks.
                4. Feedback from readers gathered and the format adjusted once.

                ## Notes
                Start from the **Metrics log** template to keep the indicator history in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly performance notes have been issued on schedule, each with indicators and a recommendation."
                cadence: rolling
              tasks:
                - "Draft the one-page performance note format"
                - "Update the indicator log and issue the weekly note @recurring(weekly:fri)"
                - "Ask two readers what they would change in the format"
                - "Chart each indicator over the last eight weeks"
            - name: Monthly yield accounting and loss review
              description: |-
                ## Purpose
                Yield is where small percentages turn into large sums: a one percent loss on a big unit can pay several engineers' salaries. Closing a monthly balance of feeds, products, flare and fuel losses, and chasing the unexplained gap, keeps losses visible and makes meter faults show up within weeks rather than at the annual audit.

                ## Milestones
                1. A monthly yield sheet linked to metered feeds, products and tank movements.
                2. Losses split into known categories, such as flare, fuel, off-spec and unaccounted.
                3. The unaccounted loss tracked month on month against a set threshold.
                4. Any month above the threshold followed by a written check of meters and tanks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The monthly yield sheet is closed within the first week of each month, and unaccounted losses above threshold have a written follow-up."
                cadence: rolling
              tasks:
                - "Agree the yield sheet layout with the planning or accounting team"
                - "Close the previous month's yield and loss sheet @recurring(monthly:4)"
                - "Set a threshold for unaccounted loss with your manager"
                - "List the meters and tanks to check when the threshold is crossed"
            - name: Heat exchanger fouling monitoring
              description: |-
                ## Purpose
                Fouling creeps up: the overall heat transfer coefficient falls a little each week until the furnace runs out of firing margin or the cooler cannot hold product temperature. Calculating a monthly fouling resistance for the critical exchangers shows the trend early enough to plan cleaning rather than suffer it.

                ## Milestones
                1. A list of critical exchangers with clean design and current duties.
                2. A spreadsheet that calculates the overall coefficient and fouling resistance from historian data.
                3. Monthly fouling trends for each critical exchanger over at least six months.
                4. A cleaning recommendation raised when a set fouling limit is approached.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fouling resistance for every critical exchanger is calculated monthly, with a trend chart and a cleaning trigger value agreed."
                cadence: rolling
              tasks:
                - "List the exchangers whose fouling limits unit rate or energy use"
                - "Build the coefficient and fouling resistance calculation sheet"
                - "Update fouling trends for the critical exchangers @recurring(monthly:12)"
                - "Agree a fouling trigger value for planning a clean"
            - name: Distillation column performance tracking
              description: |-
                ## Purpose
                Columns degrade quietly through damaged trays, fouled packing, flooding margins eaten by higher rates or a reboiler losing duty. Tracking pressure drop, reflux ratio, product purity and energy per unit of product for each column gives early warning and the history you need when a column suddenly will not make specification.

                ## Milestones
                1. Each column's key variables chosen: differential pressure, reflux, reboiler duty, purities.
                2. A baseline set from a period when the column ran well.
                3. Monthly tracking against baseline for at least six months.
                4. Any departure beyond the agreed band investigated and written up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every column on the unit has a baseline and six months of monthly tracking, with departures beyond the band written up."
                cadence: rolling
              tasks:
                - "Pick the key variables to track for each column"
                - "Find a good-running period and record it as the baseline"
                - "Compare each column with its baseline @recurring(monthly:18)"
                - "Write up any column outside its band with likely causes"
            - name: Catalyst and adsorbent life tracking
              description: |-
                ## Purpose
                Catalyst and adsorbent beds are expensive, slow to replace and often set the date of the next shutdown. Tracking activity, temperature rise, pressure drop and breakthrough against the vendor's expected curve tells you months ahead whether the bed will last to the planned change-out or needs a decision sooner.

                ## Milestones
                1. Each bed's install date, vendor, volume and expected life recorded.
                2. Performance indicators chosen for each bed, such as weighted average bed temperature or breakthrough time.
                3. A monthly trend of each indicator against the vendor's expected curve.
                4. A projected end-of-life date for each bed, updated every month.

                ## Notes
                Share the trend with the catalyst vendor's technical service team; most will comment on it at no charge.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every catalyst or adsorbent bed has a monthly performance trend and a projected end-of-life date reviewed with the vendor."
                cadence: rolling
              tasks:
                - "Record install date, vendor and expected life for each bed"
                - "Choose one or two indicators for each bed's activity"
                - "Update bed trends and the projected end-of-life dates @recurring(monthly:22)"
                - "Send the latest trend to the vendor's technical service contact"
            - name: Weekly process engineer field walk
              description: |-
                ## Purpose
                Screens show what the instruments say; the plant shows what is actually happening. A planned weekly walk round the unit, looking at sight glasses, local gauges, leaks, noisy valves and hot spots and talking to the field operator, finds things no trend will and keeps you known on the plant.

                ## Milestones
                1. A walk route and checklist agreed with operations, including access rules.
                2. A weekly walk completed for at least two months.
                3. Findings logged with location, photo where allowed, and owner.
                4. At least three findings closed out with operations or maintenance.

                ## Notes
                Start from the **Operational checklist** template. Wear the full required PPE and gas detector, sign in with the control room, and use your stop-work authority if you see something unsafe.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly field walk has been completed for eight weeks, with findings logged and at least three closed out."
                cadence: rolling
              tasks:
                - "Agree a walk route and checklist with the area supervisor"
                - "Walk the unit with the field operator and log findings @recurring(weekly:wed)"
                - "Assign each finding to an owner in operations or maintenance"
                - "Check last week's findings for closure before the next walk"
            - name: Operator query and technical request log
              description: |-
                ## Purpose
                Operators ask process engineers dozens of questions, and answers given in a corridor get lost or contradicted. Keeping a simple log of each query, the answer and who gave it builds a shared memory of how the unit is run, shows where training is missing and protects you when an answer is challenged later.

                ## Milestones
                1. A shared log with date, requester, question, answer and status columns.
                2. Every operator query in a month recorded in the log.
                3. Repeated questions grouped into themes.
                4. One training note or procedure update written for the most common theme.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A month of operator queries is logged with answers, and the most frequent theme has led to a training note or procedure change request."
                cadence: rolling
              tasks:
                - "Set up a shared query log the control room can see"
                - "Tell each shift supervisor how to add a query"
                - "Clear open queries and reply to each requester @recurring(weekly:tue)"
                - "Group a month of queries into themes"
            - name: Laboratory sampling plan and data review
              description: |-
                ## Purpose
                Lab results drive yield, quality and many troubleshooting conclusions, yet sample points, frequencies and methods are often inherited without question. Reviewing which samples are taken, why, how fast results come back and how much they scatter makes sure the data you lean on is fit for the decisions it supports.

                ## Milestones
                1. A list of every routine sample with point, frequency, analysis and user of the result.
                2. Samples with no clear user flagged for removal or reduced frequency.
                3. Repeatability checked on the five most important analyses.
                4. A revised sampling plan agreed with the lab and operations.

                ## Notes
                Sampling hot, toxic or pressurised streams needs the site's sampling procedure and correct PPE. Never ask for a sample point to be used outside its procedure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A revised sampling plan is agreed with the lab, and lab repeatability on the five key analyses is reviewed every quarter."
                cadence: rolling
              tasks:
                - "Get the current routine sampling schedule from the lab"
                - "Mark who uses each result and for what decision"
                - "Check lab results against online analysers for the key samples @recurring(monthly:8)"
                - "Review repeatability of the five key analyses with the lab lead @recurring(quarterly)"
            - name: Operating envelope excursion log
              description: |-
                ## Purpose
                Every time the unit runs outside its limits sheet, even briefly, it tells you something about the equipment, the control scheme or the feed. Logging excursions weekly, with duration and cause, turns near misses into data and shows which limits are routinely tight before one of them matters.

                ## Milestones
                1. A log format with tag, limit, peak value, duration and cause.
                2. A weekly review of historian data for excursions against the limits sheet.
                3. Repeated excursions grouped and raised with operations and the area technical authority.
                4. An annual review of the limits sheet using the year's excursion data.

                ## Notes
                Excursions beyond a safety limit go into the site's incident reporting system as well as this log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Excursions are logged every week with cause, and the limits sheet has an annual review that uses the log."
                cadence: rolling
              tasks:
                - "Set up the excursion log with tag, limit, peak, duration and cause"
                - "Scan the week's data for excursions against the limits sheet @recurring(weekly:thu)"
                - "Raise repeated excursions at the monthly operations review"
                - "Review the limits sheet against the year's excursion log @recurring(yearly)"
            - name: Utilities consumption tracking
              description: |-
                ## Purpose
                Steam, cooling water, nitrogen, power and fuel gas are often charged to the unit but rarely watched by anyone with process knowledge. Tracking specific consumption per tonne of product each month shows leaks, passing steam traps, idle equipment left running and energy creep that are cheap to fix once seen.

                ## Milestones
                1. Each utility's meter and cost rate identified for the unit.
                2. Specific consumption per tonne of product calculated for each utility.
                3. A monthly trend with a baseline from a good period.
                4. Two savings opportunities written up with an estimated value.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Specific utility consumption is trended monthly against a baseline, and two costed savings ideas have been submitted."
                cadence: rolling
              tasks:
                - "Find the meter and cost rate for each utility the unit uses"
                - "Calculate this month's consumption per tonne of product"
                - "Update the utility trend and flag any rise above baseline @recurring(monthly:26)"
                - "Write up two savings ideas with an estimated annual value"
            - name: Process engineering technical reading programme
              description: |-
                ## Purpose
                Plant work fills the week, and the reading that makes a good process engineer better, such as classic troubleshooting texts, vendor technical papers and incident reports from other sites, gets pushed aside. A monthly hour on a short queue of chosen material keeps knowledge growing and gives you lessons from other people's failures.

                ## Milestones
                1. A queue of at least eight readings chosen for your unit type.
                2. One reading finished each month with a short note on what applies to your plant.
                3. At least one published incident report from another site studied for lessons.
                4. One idea from the reading tested or raised on your unit.

                ## Notes
                Start from the **Reading queue** template. Public incident investigation reports from chemical safety boards are some of the most useful reading in the field.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six readings have been completed with notes, including one external incident report, and one idea has been raised on the unit."
                cadence: rolling
              tasks:
                - "Ask two senior engineers for the books and papers they would recommend"
                - "List eight readings in your queue"
                - "Spend an hour on the next reading and write one applied note @recurring(monthly:15)"
                - "Pick one published incident report and compare it with your unit"
            - name: Centrifugal pump hydraulics and NPSH by hand
              description: |-
                ## Purpose
                Pump problems such as cavitation, low flow, overheating and seal failures are often process problems in disguise. Working system curves, pump curves and net positive suction head available by hand for two real pumps on your unit builds an intuition no simulation screen gives, and it lets you argue with the vendor when it matters.

                ## Milestones
                1. Datasheets and curves gathered for two pumps on the unit.
                2. A system curve built for each pump from line sizes, fittings and elevations.
                3. NPSH available calculated for normal and worst-case conditions and compared with NPSH required.
                4. The operating point checked against the vendor's preferred operating region.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Hand calculations of system curve, operating point and NPSH margin for two unit pumps have been checked by a senior engineer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick two pumps, one of them with a history of problems"
                - "Collect pump curves, datasheets and suction line isometrics"
                - "Calculate NPSH available at normal and worst-case conditions"
                - "Plot the operating point on the curve and have it checked"
            - name: Shell and tube exchanger rating practice
              description: |-
                ## Purpose
                Being able to rate an exchanger by hand, with LMTD, correction factor, film coefficients and fouling, is what lets you judge whether a vendor's thermal design or a software output makes sense. Rating one existing exchanger and checking it against plant data closes the gap between textbook and plant.

                ## Milestones
                1. Datasheet and geometry collected for one existing shell and tube exchanger.
                2. Duty, LMTD and correction factor calculated for current conditions.
                3. Film coefficients and an overall coefficient estimated with stated correlations.
                4. Calculated performance compared with measured plant data and the difference explained.

                ## Notes
                Standards from the tubular exchanger manufacturers' association family define the shell and head types you will see on datasheets; learn the letter codes first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand rating of one plant exchanger is within an explained margin of measured performance and has been checked by a colleague."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose one exchanger with good temperature and flow instruments"
                - "Collect its thermal datasheet and mechanical drawing"
                - "Calculate duty, LMTD and the required overall coefficient"
                - "Compare the hand rating with plant data and explain the gap"
            - name: Two- and three-phase separator sizing
              description: |-
                ## Purpose
                Separators look simple and cause a large share of carryover, foaming and level control trouble. Sizing a knock-out drum and a three-phase separator by hand, using settling velocity, residence time and level allowances, teaches you why the vessels on your plant are shaped as they are and what happens when rates rise.

                ## Milestones
                1. Design method and allowable gas velocity basis chosen from a recognised reference.
                2. A vertical knock-out drum sized for a real stream on the unit.
                3. A three-phase horizontal separator sized with liquid residence times and level settings.
                4. Both results compared with the installed vessels and the differences explained.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Hand sizing of a two-phase and a three-phase separator has been compared with installed vessels and reviewed by a senior engineer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a knock-out drum and a three-phase separator on the unit"
                - "Find a recognised sizing method and note its constants"
                - "Size both vessels from current process conditions"
                - "Compare your sizes with the installed vessels"
            - name: Line sizing and pressure drop for gas, liquid and two-phase
              description: |-
                ## Purpose
                Undersized lines limit capacity and cause erosion or vibration, oversized ones waste money and let solids settle. Working the line sizing criteria your company uses, then checking pressure drop on a few real lines including one two-phase line, makes you quick at the checks every modification needs.

                ## Milestones
                1. The company line sizing criteria (velocity, pressure drop per length, erosional limits) located and summarised.
                2. Pressure drop calculated for one liquid and one gas line on the unit.
                3. One two-phase line checked for flow regime and erosional velocity.
                4. A personal line sizing sheet saved for reuse.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A reusable line sizing sheet exists, and it has been tested on a liquid, a gas and a two-phase line with checked results."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find your company's line sizing criteria document"
                - "Calculate pressure drop for one liquid and one gas line"
                - "Check one two-phase line for flow regime and erosion"
                - "Save the method as a reusable calculation sheet"
            - name: Distillation from McCabe-Thiele to tray hydraulics
              description: |-
                ## Purpose
                Distillation is the backbone of most process plants and the source of many of its puzzles. Working from a McCabe-Thiele diagram for a binary case through to flooding, weeping and downcomer backup checks on a real column gives you the language to talk with tray vendors and the instinct to spot a hydraulic limit.

                ## Milestones
                1. A McCabe-Thiele construction for a binary separation on or near your unit.
                2. Minimum reflux and theoretical stages compared with the installed column.
                3. Flooding and downcomer backup estimated for current rates on one column.
                4. A one-page summary of which limit the column will hit first if rates rise.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary names the first hydraulic limit for one plant column, backed by checked stage and tray hydraulic calculations."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick a column and gather its tray or packing datasheet"
                - "Draw a McCabe-Thiele diagram for its key components"
                - "Estimate percent flood and downcomer backup at current rates"
                - "Write which limit the column will reach first and why"
            - name: Reactor conversion and selectivity from plant data
              description: |-
                ## Purpose
                Reactors decide what the plant makes and how much feed it wastes, but their performance is often reported only as outlet temperature. Calculating conversion, selectivity and yield from plant and lab data, and relating them to temperature, pressure and space velocity, shows how the reactor really responds and where the trade-offs lie.

                ## Milestones
                1. Feed and product compositions collected for at least ten steady periods.
                2. Conversion, selectivity and yield calculated for each period.
                3. Each result plotted against temperature, pressure or space velocity.
                4. A short note on how the reactor responds and what limits it, checked with the licensor's data where available.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Conversion and selectivity for ten steady periods are plotted against the main operating variables, with a written note on the reactor's response."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Find ten steady periods with matching lab analyses"
                - "Calculate conversion, selectivity and yield for each period"
                - "Plot results against reactor temperature and space velocity"
                - "Write a one-page note on the reactor's behaviour"
            - name: Control valve sizing and process datasheets
              description: |-
                ## Purpose
                The process engineer supplies the flows, pressures and fluid properties on every control valve and instrument datasheet, and errors there become valves that run nearly shut or wide open for decades. Learning to size a valve coefficient for minimum, normal and maximum cases makes the datasheets you sign worth trusting.

                ## Milestones
                1. The process datasheet fields for a control valve understood and listed.
                2. Valve coefficient calculated for minimum, normal and maximum flow on one existing valve.
                3. Calculated opening compared with the valve's actual position from the historian.
                4. A checklist for filling in process data on future valve datasheets.

                ## Notes
                Valve and instrument specification is shared with the controls engineer; agree who owns each field on the datasheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Valve coefficients for three flow cases on one valve match its observed openings within an explained margin, and a datasheet checklist exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one control valve that often runs near its limits"
                - "Collect its datasheet and recent historian data"
                - "Calculate the coefficient for minimum, normal and maximum flow"
                - "Write a checklist for the process fields on valve datasheets"
            - name: Relief scenarios and relief valve sizing basics
              description: |-
                ## Purpose
                Pressure relief is the last line of defence, and the process engineer defines the scenarios and loads that set each valve's size. Working through blocked outlet, fire and exchanger tube rupture for one protected system, using the API relief standards family, teaches what a relief study contains and how to read one critically.

                ## Milestones
                1. One protected system chosen and its existing relief documentation located.
                2. Credible overpressure scenarios listed for the system.
                3. Relief loads estimated for the governing scenarios.
                4. The required orifice area compared with the installed valve, and the result reviewed by a qualified relief engineer.

                ## Notes
                This is study practice, not a relief study of record. Any finding that a valve is undersized goes to the relief systems owner straight away.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice relief calculation for one system lists scenarios, loads and required area, and has been reviewed by the site's relief systems engineer."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pick one protected system and find its relief valve datasheet"
                - "List the credible overpressure scenarios for the system"
                - "Estimate relief loads for blocked outlet and fire cases"
                - "Ask the relief systems engineer to review your workings"
            - name: Heat exchanger cleaning interval decision
              description: |-
                ## Purpose
                Cleaning too often wastes maintenance money and production, cleaning too late burns extra fuel or caps throughput. Comparing the cost of fouling over time with the cost of a clean gives a defensible interval for each critical exchanger and turns a yearly argument into a number.

                ## Milestones
                1. The cost of one clean estimated, including lost production and maintenance.
                2. The extra energy or lost throughput cost of fouling estimated from the fouling trend.
                3. An economic cleaning interval calculated for each critical exchanger.
                4. The recommended intervals agreed with operations and maintenance planning.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed cleaning interval for each critical exchanger is recorded, backed by a cost of fouling versus cost of cleaning comparison."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask maintenance planning for the cost of the last two cleans"
                - "Turn the fouling trend into a monthly energy or throughput cost"
                - "Calculate the economic cleaning interval for each exchanger"
                - "Present the intervals to operations and maintenance planning"
            - name: Unit capacity limits map
              description: |-
                ## Purpose
                When the business asks for five percent more throughput, the honest answer depends on which equipment hits its limit first. Mapping every major item's margin to its hydraulic, thermal or mechanical limit at current rates shows the true bottleneck and the order in which the next ones appear.

                ## Milestones
                1. A list of every major equipment item with its limiting parameter.
                2. Current percentage of limit calculated for each item from plant data.
                3. A ranked chart showing which items limit first as rate rises.
                4. A short note on the cheapest step to lift the first two limits.

                ## Notes
                Mechanical and design pressure limits come from the equipment owner; do not estimate them yourself.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked capacity limits map covers every major item on the unit, with the first two bottlenecks and their fixes written up."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the major equipment items and the parameter that limits each"
                - "Calculate each item's current percentage of its limit"
                - "Rank the items by margin and chart them"
                - "Write up options for lifting the first two limits"
            - name: Pinch analysis of the unit's heat recovery
              description: |-
                ## Purpose
                Pinch analysis shows the minimum hot and cold utility a set of streams needs and where the existing exchanger network breaks the rules. Building composite curves for your unit and comparing them with actual utility use gives a target, and a short list of exchanger changes worth studying further.

                ## Milestones
                1. Stream data extracted: supply and target temperatures and heat capacity flowrates.
                2. Composite curves and minimum utility targets produced for a chosen approach temperature.
                3. Existing utility use compared with the targets.
                4. Cross-pinch heat transfer identified and up to three retrofit ideas listed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Composite curves and utility targets for the unit are compared with actual use, and up to three retrofit ideas are written down."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Extract supply and target temperatures for every process stream"
                - "Choose a minimum approach temperature and build composite curves"
                - "Compare actual hot and cold utility with the targets"
                - "List the exchangers that move heat across the pinch"
            - name: Plant troubleshooting case file
              description: |-
                ## Purpose
                Most of a plant process engineer's value is shown when something stops working: a product off specification, a column that will not hold, a pump that keeps tripping. Working each problem through a written case file, with symptoms, hypotheses, the cheapest test for each and the result, gets to the answer faster and leaves a record the next engineer can use.

                ## Milestones
                1. A case file format with symptoms, timeline, hypotheses, tests and conclusion.
                2. One live plant problem worked through the format from first report to fix.
                3. Each hypothesis tested or ruled out with evidence, not opinion.
                4. The closed case shared with operations and filed where others can find it.

                ## Notes
                Change only one variable at a time, and agree every plant test with the shift supervisor first. Where an incident is involved, the site's formal investigation process takes over.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least one plant problem is closed through a written case file with tested hypotheses, and the file is shared with operations."
                cadence: rolling
              tasks:
                - "Set up a case file template with symptoms, hypotheses and tests"
                - "Write the timeline of the current worst plant problem"
                - "List hypotheses and the cheapest test for each"
                - "Agree the first plant test with the shift supervisor"
            - name: Selecting a separation technology for a new duty
              description: |-
                ## Purpose
                New purity specifications, recovered streams and waste reduction targets often open the question of whether to distil, absorb, adsorb, use a membrane or crystallise. Comparing options on the same basis of recovery, energy, cost, operability and experience at similar scale avoids choosing whatever the first vendor offered.

                ## Milestones
                1. The duty written down: feed, required product purity, recovery and constraints.
                2. Three or more candidate technologies listed with a reason each could work.
                3. Each option scored on recovery, energy, capital cost, operability and track record.
                4. A recommended option recorded with the reasons the others were rejected.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three separation options on the same five criteria ends in a recorded recommendation."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the separation duty and constraints on one page"
                - "List three or more candidate technologies"
                - "Ask two vendors for reference installations at similar scale"
                - "Score each option and record the recommendation"
            - name: Chemical treatment programme review
              description: |-
                ## Purpose
                Corrosion inhibitors, antifoams, cooling water and boiler water treatment are usually run by a vendor under a contract nobody reads closely. Reviewing what is injected, at what rate the vendor recommends, what it costs and what results it achieves keeps the programme honest and spots chemicals still being dosed for a problem that ended years ago.

                ## Milestones
                1. A list of every chemical treatment on the unit with vendor, purpose and annual cost.
                2. The vendor's performance reports for the last year collected.
                3. Each treatment's result checked against its target, such as corrosion rate or foam events.
                4. Recommendations agreed: keep, change or stop, with a review date.

                ## Notes
                Start from the **Vendor** template for each treatment supplier. Injection rates are set from the vendor's and the label's instructions; do not change them without the programme owner.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every chemical treatment on the unit has a recorded keep, change or stop decision based on a year of performance data."
                cadence: rolling
              tasks:
                - "List every injected chemical with vendor, purpose and cost"
                - "Request a year of performance reports from each vendor"
                - "Review each vendor's quarterly treatment report against its target @recurring(quarterly)"
                - "Record a keep, change or stop decision for each treatment"
            - name: Steam system and steam trap loss survey
              description: |-
                ## Purpose
                Failed steam traps, leaking tracing and vented low-pressure steam are some of the cheapest energy losses to find and fix. A survey of the unit's steam system, balancing generation against use and checking a sample of traps, gives a costed repair list operations and maintenance can act on in one shutdown.

                ## Milestones
                1. A steam balance for the unit across each pressure level.
                2. Vents and letdowns that waste steam identified with estimated flows.
                3. A sample of traps tested by the site's trap survey method or contractor.
                4. A costed repair list submitted to maintenance planning.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A unit steam balance and a costed trap and leak repair list have been submitted to maintenance planning."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draw the unit's steam balance at each pressure level"
                - "List vents and letdowns with an estimated flow for each"
                - "Arrange a steam trap survey with the site's trap contractor"
                - "Submit the costed repair list to maintenance planning"
            - name: Process design basis for a small plant modification
              description: |-
                ## Purpose
                Every new line, bigger pump or extra exchanger starts with a process design basis: the cases, flows, conditions and margins everyone else will design to. Writing one properly, with the governing case named and every margin justified, saves weeks of rework for the mechanical, piping and controls engineers who follow.

                ## Milestones
                1. The design cases defined: normal, maximum, minimum, start-up and upset.
                2. Flows, conditions and fluid properties tabulated for each case.
                3. Design margins stated with the reason for each.
                4. Process datasheets issued for each new item and reviewed by the other disciplines.

                ## Notes
                The modification itself still needs the site's management of change approval before any work in the field.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An issued process design basis and process datasheets for one modification have been reviewed by every affected discipline."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the design cases the modification must handle"
                - "Tabulate flows and conditions for each case"
                - "Write a one-line justification for each design margin"
                - "Issue the process datasheets for discipline review"
            - name: Plant performance test run
              description: |-
                ## Purpose
                A performance test run proves what a unit can do: a vendor guarantee, a new catalyst, a rate increase or a baseline before a revamp. Planning the test conditions, extra samples, data capture and roles in advance, then reporting it plainly, gives a result everyone will accept rather than a week of disputed numbers.

                ## Milestones
                1. A test procedure agreed with operations, the lab and any vendor, with hold points.
                2. Instruments that matter checked or calibrated before the test.
                3. The test run held at steady conditions for the agreed period, with all samples taken.
                4. A test report issued with measured results, corrections and conclusions.

                ## Notes
                The test must stay inside the operating envelope. Agree in advance who can stop the test and under what conditions.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planned performance test is completed at steady conditions and a report with corrected results is issued within two weeks."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Write the test objective and the result that would count as success"
                - "Draft the test procedure with sample schedule and hold points"
                - "Ask instrument technicians to check the critical meters before the test"
                - "Book a pre-test briefing with every shift involved"
            - name: Process worklist for the next shutdown
              description: |-
                ## Purpose
                Shutdowns are the only time you can see inside the columns, exchangers and reactors you have been diagnosing from outside. Building a process worklist of what to inspect, clean, change or photograph, each item tied to a performance problem you have seen, makes sure the evidence you need is gathered before the unit closes up again.

                ## Milestones
                1. Each item on the list linked to a performance problem or open question.
                2. Inspection and photograph requests sent to the shutdown team before scope freeze.
                3. Internal inspections attended for the most important items, with findings recorded.
                4. A short report linking what was found inside to the performance seen before.

                ## Notes
                Vessel entry is under the confined space permit only; you attend as an observer as the permit allows.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A process worklist was submitted before scope freeze, and a post-shutdown report links inspection findings to observed performance."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the performance problems you would want to see inside the unit"
                - "Turn each into a specific inspection or photo request"
                - "Send the list to the shutdown coordinator before scope freeze"
                - "Write up what was found against each item"
            - name: Catalyst change-out and start-up support
              description: |-
                ## Purpose
                Catalyst changes are rare, expensive events: loading density, sock or dense loading, activation steps and the first days on stream decide years of performance. Preparing the process side, from loading records to activation procedure to start-up monitoring, means the vendor's guarantee is protected and the new charge starts well.

                ## Milestones
                1. Loading plan and vendor activation procedure reviewed and agreed.
                2. Loading records kept: bed heights, weights, densities and pressure drops.
                3. Activation or reduction steps followed and logged against the procedure.
                4. A start-of-run report comparing first-month performance with vendor expectations.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full loading record and a start-of-run report comparing first-month performance with the vendor's expectation are filed."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Get the vendor's loading and activation procedures"
                - "Prepare a loading record sheet for bed heights and densities"
                - "Agree start-up monitoring frequencies with the vendor"
                - "Draft the start-of-run report outline"
            - name: Process support for a restart after a trip
              description: |-
                ## Purpose
                After an unplanned trip, the pressure to restart is high and the plant is in an unusual state, which is when mistakes happen. Having a prepared process checklist of conditions to confirm, known hazards of restarting hot and the order of bringing sections back gives the shift a calm, technical voice at the hardest moment.

                ## Milestones
                1. The unit's restart procedure read and its hold points understood.
                2. A one-page process checklist of conditions to confirm before restart.
                3. The checklist walked through with a shift team in a quiet period.
                4. After the next real trip, the checklist used and improved.

                ## Notes
                The restart procedure and the shift supervisor are in charge. If something does not look right, use your stop-work authority and say so.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A one-page restart checklist has been walked through with a shift team and updated after use in at least one real restart."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the unit's restart procedure and mark the hold points"
                - "Draft a one-page process checklist for restart conditions"
                - "Walk the checklist through with a shift team"
                - "Update the checklist after the next real restart"
            - name: Presenting an improvement case to plant management
              description: |-
                ## Purpose
                Good ideas that cannot win money or shutdown time do nothing. Turning one improvement into a short case with the problem, the evidence, the expected benefit, the cost, the risk and what you need from the room, and presenting it at a dated management meeting, is how process engineers get things built.

                ## Milestones
                1. One improvement chosen with clear evidence behind it.
                2. Benefit and cost estimated with stated assumptions and a range.
                3. A five-slide case reviewed by your manager before the meeting.
                4. The case presented and the decision or next step recorded.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An improvement case has been presented at a management meeting and the decision recorded in writing."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick the improvement with the strongest evidence"
                - "Estimate benefit and cost with a low and high range"
                - "Build a five-slide case and review it with your manager"
                - "Ask for a slot at the next management meeting"
            - name: First 90 days as a plant process engineer
              description: |-
                ## Purpose
                New process engineers on an operating unit are judged quickly by operators on whether they listen and are useful. A plan for the first 90 days covering people to meet, the unit to learn, a first useful piece of work and a check-in with your manager makes the start deliberate instead of reactive.

                ## Milestones
                1. Key people met: shift supervisors, panel operators, maintenance planner, lab lead, area technical authority.
                2. PFD learned, P&IDs walked and limits understood by day 60.
                3. One small, useful piece of work delivered for operations by day 90.
                4. A 90-day review held with your manager, with goals for the next six months.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Spend at least two night shifts in the control room early on.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 90-day review with your manager records the people met, the unit knowledge gained and one delivered piece of work."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the twelve people you need to meet in the first month"
                - "Book two night shifts in the control room"
                - "Ask operations for one small problem you could solve"
                - "Book the 90-day review with your manager"
            - name: Moving between design office and operating plant
              description: |-
                ## Purpose
                Process engineers who move from an EPC design office to an operating plant, or the other way, find the work feels familiar but the priorities differ: design values margins and documentation, operations values availability and speed. Naming the differences and filling the gaps deliberately shortens the awkward first year in the new role.

                ## Milestones
                1. A list of the skills that carry over and the ones that are new in the role.
                2. Two people from the other side identified as sounding boards.
                3. A learning plan for the three biggest gaps, with dates.
                4. A six-month review of what changed in how you work.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written gap list and learning plan exist for the role change, with a six-month review recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the skills that carry over and the ones you lack"
                - "Ask two people who made the same move what surprised them"
                - "Plan how to close your three biggest gaps"
                - "Book a six-month self-review in your calendar"
            - name: Out-of-hours process support rota
              description: |-
                ## Purpose
                Many plants have a process engineer on call at night and at weekends, and a badly handled call can either wake the whole department or leave the shift without help. Preparing a clear call-out guide, a laptop and remote access set-up and a handover routine makes on-call weeks safer for the plant and calmer for you.

                ## Milestones
                1. A call-out guide agreed with operations on what warrants a call.
                2. Remote access to the historian and documents tested from home.
                3. A handover note template for the start and end of each on-call week.
                4. Each call logged with question, advice and follow-up.

                ## Notes
                Advice by phone is limited. If you are unsure, say so, and escalate to the area technical authority rather than guess.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "An agreed call-out guide exists, remote access works, and every on-call week ends with a written handover."
                cadence: rolling
              tasks:
                - "Agree with the shift supervisors which events justify a call"
                - "Test remote access to the historian from home"
                - "Write the on-call handover note and send it to the next engineer @recurring(weekly:mon)"
                - "Log each call with the advice given and any follow-up"
            - name: Process engineering in batch, food or pharmaceutical plants
              description: |-
                ## Purpose
                Batch plants change the work: cycle times, batch records, cleaning between products, scale-up from pilot and quality systems sit where continuous plants have steady-state balances. Engineers moving into these sectors need the vocabulary and the regulated way of working early, before they write their first deviation report.

                ## Milestones
                1. The plant's batch records and cycle time breakdown for one product understood.
                2. The site's quality and deviation procedures read and summarised.
                3. Cleaning and changeover steps mapped for one piece of equipment.
                4. One cycle time or yield improvement proposed through the quality change process.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A cycle time breakdown for one product and a summary of the site's quality procedures exist, and one improvement has been proposed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read three completed batch records for one product"
                - "Break down the batch cycle time into each step"
                - "Summarise the site's deviation and change procedures"
                - "Propose one cycle time improvement through the quality system"
            - name: Column troubleshooting with gamma scans and pressure surveys
              description: |-
                ## Purpose
                When a column misbehaves and the cause is inside, gamma scans, temperature surveys and differential pressure profiles are the tools that see through the shell. Planning a scan with a specialist contractor and interpreting it alongside hydraulic calculations separates flooding from damaged trays or maldistribution without opening the column.

                ## Milestones
                1. The suspected problem and the questions the scan must answer written down.
                2. A contractor scope agreed, with scan lines, operating conditions and radiation safety arrangements.
                3. The scan carried out at stable, recorded operating conditions.
                4. Results interpreted with the contractor and set against hydraulic calculations.

                ## Notes
                Radioactive source work follows the site's radiation safety procedures and permits; the contractor's licensed staff handle the source.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A column scan has been interpreted against hydraulic calculations and a written conclusion on the internal condition is filed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the questions the scan must answer about the column"
                - "Run a temperature and differential pressure survey first"
                - "Agree a scan scope with a specialist contractor"
                - "Hold the column at stable conditions during the scan"
            - name: Reviewing junior engineers' process calculations
              description: |-
                ## Purpose
                Lead process engineers are responsible for numbers they did not work themselves. A consistent way of checking sizing calculations and datasheets, looking at basis, units, governing case, method and reasonableness against plant experience, catches errors before they are built and teaches juniors faster than correcting them in public.

                ## Milestones
                1. A written checking checklist covering basis, units, cases, method and sense check.
                2. A regular slot for calculation reviews agreed with the team.
                3. Every reviewed calculation signed off or returned with written comments.
                4. Recurring errors collected and turned into a short team note.

                ## Notes
                Sign only what you have checked. If you have not had time to check it, say so rather than initial it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A checking checklist is in use, review sessions run monthly, and a note on recurring errors has been shared with the team."
                cadence: rolling
              tasks:
                - "Write a one-page checklist for checking process calculations"
                - "Agree a monthly calculation review slot with the team"
                - "Run the calculation review session and record comments @recurring(monthly:28)"
                - "Write a note on the three most common errors seen"
            - name: Dynamic behaviour and upset response study
              description: |-
                ## Purpose
                Steady-state balances say nothing about what happens in the first ten minutes after a feed pump trips or cooling water fails. Studying how levels, pressures and temperatures moved in past upsets, from historian data, tells you which inventories buy time, which variables run away and what operators need to watch first.

                ## Milestones
                1. Three past upsets selected with good historian data.
                2. For each upset, the sequence and rate of change of the key variables plotted.
                3. Available response time estimated for each upset from inventories and rates.
                4. Findings shared with operations training as an upset response note.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three past upsets have been analysed for sequence and response time, and an upset response note has been given to operations training."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick three past upsets with complete historian records"
                - "Plot the key variables for the first thirty minutes of each"
                - "Estimate how long operators had before limits were reached"
                - "Share an upset response note with the operations trainer"
---

# Chemical and Process Engineering

Chemical and process engineering is the work of knowing what a plant is doing, why, and how far it can be pushed safely. These projects start with the foundations every process engineer needs on a new unit (the PFD, the P&IDs walked in the field, the heat and material balance, the operating envelope and the hazard data), move into the monitoring routines and hand calculations that keep a unit understood, then into troubleshooting, improvement cases, plant events, career situations and the specialist work a lead process engineer is asked to do.

The recurring rhythm is a short daily look at trends and the shift log, a weekly performance note and field walk, monthly yield accounting and exchanger, column, catalyst and utility checks, and a quarterly look at lab data and treatment programmes. The Metrics log, Operational checklist, Reading queue, Vendor and Onboarding 30/60/90 templates pair with the projects that need a standing record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
