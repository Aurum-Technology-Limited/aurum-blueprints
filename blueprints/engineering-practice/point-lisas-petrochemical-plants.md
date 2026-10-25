---
id: engineering-practice.point-lisas-petrochemical-plants
name: Point Lisas Petrochemical Plants
description: "Know your ammonia, methanol or urea plant from gas inlet to ship, work safely among toxic and flammable inventories, run the monitoring routines and grow from new engineer to technical authority on the estate."
category: business
version: 1.0.0
tags: [engineering-practice, point-lisas-petrochemical-plants, engineer, trinidad-and-tobago, ammonia, methanol, urea, petrochemicals]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - compliance-control
    - metrics-log
    - operational-checklist
    - meeting-notes
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Point Lisas Petrochemical Plants
          description: "Working on the Point Lisas industrial estate: ammonia, methanol and urea plants, gas supply constraints, turnarounds, contractor work and plant safety culture."
          projects:
            - name: Plant process map from gas inlet to product berth
              description: |-
                ## Purpose
                New engineers on an ammonia, methanol or urea plant are often handed a stack of P&IDs before anyone shows them how the whole plant hangs together. A one-page map of your plant, from the natural gas metering station through desulphurisation, reforming, synthesis, purification or finishing to storage and the ship berth, gives you the frame every later conversation in the control room hangs on. Drawing it yourself in the first month, and having an experienced operator mark it up, is faster than any course.

                ## Milestones
                1. A one-page block diagram of the plant from gas inlet to product dispatch, with every major section named.
                2. Design capacity, typical rate and the main rate limits written beside each section.
                3. Utilities shown at the boundary: steam, cooling water, power, nitrogen, instrument air and demineralised water.
                4. The map marked up by a senior operator or process engineer and corrected.

                ## Notes
                Keep it to one page. If it needs two, you are drawing P&IDs rather than understanding the plant.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page block diagram of the plant from gas inlet to berth, with capacities and utilities, reviewed and corrected by a senior operator."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the process flow diagrams and the licensor process description for your plant"
                - "Sketch the block diagram by hand from gas metering to product storage"
                - "Add design capacity, current rate and rate limits for each section"
                - "Walk the map with a senior operator and correct what they mark up"
            - name: Major hazard register for ammonia, syngas and methanol
              description: |-
                ## Purpose
                Every plant on the estate holds inventories that can kill people beyond the fence line: liquid ammonia, hydrogen-rich synthesis gas, carbon monoxide, methanol and high pressure steam. Engineers who can name where each inventory sits, how big it is and what the main safeguards are make better decisions on every permit, change and trip. Building your own register from the plant's safety case or hazard studies takes a few evenings and pays back for a whole career.

                ## Milestones
                1. Each major inventory listed with location, approximate quantity, pressure and temperature.
                2. The worst credible release for each inventory noted from the plant's hazard studies or safety report.
                3. The main preventive and mitigating safeguards recorded beside each hazard.
                4. The register checked by the plant's process safety engineer.

                ## Notes
                Start from the **Risk register** template. Use your plant's own hazard studies as the source; do not invent consequence distances.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register of the plant's major hazardous inventories with quantities, worst credible releases and safeguards, reviewed by the process safety engineer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the process safety engineer for the latest hazard study and safety report"
                - "List every major inventory with location, quantity and conditions"
                - "Note the worst credible release and its safeguards for each one"
                - "Book thirty minutes with the process safety engineer to review the register"
            - name: Personal readiness for a toxic gas release
              description: |-
                ## Purpose
                An ammonia release on a Point Lisas plant, or on the plant next door, gives you minutes to recognise the alarm, check the wind and move crosswind to the right muster point. People who freeze usually never practised the route from their own desk or usual work area. Fixing your personal plan in the first two weeks, with your escape set fitted and tested, is non-negotiable.

                ## Milestones
                1. The site alarm tones for toxic release, fire and all clear recognised without looking them up.
                2. Primary and alternative muster points known for the office, control room and usual field areas.
                3. An escape breathing set or escape hood issued, fitted and its use practised.
                4. Wind socks visible from your usual work areas located and the crosswind rule understood.
                5. Neighbouring plants' alarms and their effect on your site explained by the emergency coordinator.

                ## Notes
                Your site emergency response plan governs. If anything in it is unclear to you, ask the emergency coordinator before your first field week, not after.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "You can name the alarm tones, both muster points for three work areas and the crosswind rule, and you hold a fitted escape set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Listen to the site alarm tone recordings and write down what each means"
                - "Walk the route from your desk to the primary and alternative muster points"
                - "Get an escape set issued and practise donning it with the safety officer"
                - "Ask the emergency coordinator how a neighbouring plant's release is announced"
            - name: Estate shared utilities and interconnection map
              description: |-
                ## Purpose
                Plants on the estate depend on each other more than their fences suggest: gas arrives through shared transmission lines, seawater cooling and power come from common systems, some plants trade hydrogen, CO2 or ammonia across the fence, and the port serves everyone. A map of what crosses your fence, and what happens to your plant if each one fails, explains half the trips and constraints you will hear about. It also tells you who to call when something outside your plant moves.

                ## Milestones
                1. Every stream crossing your plant boundary listed: gas, power, water, product, by-product and effluent.
                2. The supplier or receiver and the interface point recorded for each stream.
                3. The effect on your plant of losing each stream written in one line.
                4. Contacts for each interface noted, with the control room numbers of the neighbouring plants.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A boundary interface list naming every stream crossing the plant fence, its counterpart, the effect of losing it and an interface contact."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the plant's battery limit drawings and utility tie-in list"
                - "List each stream crossing the fence with its supplier or receiver"
                - "Ask the shift supervisor what each loss of supply did the last time it happened"
                - "Add the interface contact and phone number for each stream"
            - name: Feed gas composition and its effect on the process
              description: |-
                ## Purpose
                Gas delivered to the estate varies in methane content, heavier hydrocarbons, CO2, nitrogen and sulphur as the supplying fields change, and each shift moves something in your plant: reformer firing, steam to carbon ratio, CO2 removal load or synthesis loop purge. Knowing the contract specification, where composition is measured and how your plant responds lets you explain swings instead of chasing them. It is a process question; supply volumes and curtailment belong elsewhere.

                ## Milestones
                1. The gas specification your plant receives, with its limits, found and filed.
                2. The analyser or sampling point that measures feed composition located and its update frequency known.
                3. A year of composition history plotted against key plant variables.
                4. Two or three rules of thumb written for how composition changes move your plant.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note giving the gas specification, the measurement point and how composition changes affect reforming and synthesis, backed by a year of data."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the commercial or process lead for the feed gas specification"
                - "Find the feed gas analyser on the P&ID and in the historian"
                - "Plot a year of methane, CO2 and heavier hydrocarbon content against reformer firing"
                - "Write the rules of thumb and check them with the senior process engineer"
            - name: Regulatory obligations register for the plant
              description: |-
                ## Purpose
                A Point Lisas plant carries obligations under Trinidad and Tobago law that land on engineers' desks: conditions in the certificate of environmental clearance, air emission registration and water pollution permits with the Environmental Management Authority, duties under the Occupational Safety and Health Act, and fire, port and pressure equipment requirements. Most surprises come from a condition nobody owned. One register, with each obligation, its source, its owner and its next due date, is the cheapest protection there is.

                ## Milestones
                1. Every permit, certificate and licence the plant holds listed with its issuing body and expiry.
                2. Each reporting or testing condition extracted with its frequency.
                3. A named owner and next due date set for every obligation.
                4. The register reviewed with the plant's HSE lead and legal or compliance contact.

                ## Notes
                Start from the **Compliance control** template. Read the conditions in the certificates themselves rather than relying on someone's summary, and confirm interpretations with your compliance or legal adviser.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register listing every plant permit and condition with source, owner and next due date, reviewed with the HSE lead."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the HSE lead for copies of every current permit and certificate"
                - "Extract each reporting, testing and notification condition into the register"
                - "Agree an owner and next due date for each condition"
                - "Re-check every expiry date and condition in the register against the documents @recurring(yearly)"
            - name: Integrity operating windows for the front end
              description: |-
                ## Purpose
                Reformer tube wall temperatures, steam to carbon ratio, waste heat boiler conditions and shift converter inlet temperatures each have limits beyond which damage starts quietly and shows up years later as a tube failure or a cracked header. Writing down the integrity operating windows for the front end, with the critical and standard limits and what to do on an excursion, gives operations and engineering one shared answer. Plants that have them catch drift in weeks rather than at the next turnaround.

                ## Milestones
                1. Critical variables for the reformer, waste heat boiler and shift section identified with the integrity engineer.
                2. Critical and standard limits recorded for each, with the source of each limit.
                3. The required response to each limit excursion written.
                4. Excursions visible to engineers in the historian or a daily report.

                ## Notes
                API RP 584 describes integrity operating windows. Limits come from the licensor, the metallurgy and your integrity engineer, not from habit.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table of front-end integrity operating windows with limits, sources and excursion responses, issued to operations and visible in the historian."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the front-end variables the integrity engineer considers damage-critical"
                - "Find the licensor or metallurgical source for each limit"
                - "Write the response required for each excursion with operations"
                - "Ask the agent to draft the excursion report layout for the historian"
            - name: Licensor package and as-built record hunt
              description: |-
                ## Purpose
                Many estate plants have changed hands, been revamped and lost staff since start-up, so the licensor's process book, design basis and equipment data sheets may sit in three places or nowhere. Finding the authoritative copies early saves days on every troubleshooting job and stops people designing changes against superseded data. Where a document is missing, knowing that is valuable too.

                ## Milestones
                1. The licensor process book, operating manual and design basis located, with their revision.
                2. Equipment data sheets for the major machines and vessels found for the main sections.
                3. Revamp reports and their changes to the original design listed.
                4. Missing documents recorded and raised with document control.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of the plant's core design documents with location and revision, plus a list of missing items raised with document control."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask document control where the licensor process book and design basis are kept"
                - "Check the electronic and paper copies against each other for revision"
                - "List every revamp report and what it changed"
                - "Send document control the list of missing or conflicting documents"
            - name: Field P&ID walkdown of one plant section
              description: |-
                ## Purpose
                Drawings on an older plant rarely match the field exactly, and the only way to learn a section properly is to trace it line by line with the P&ID in hand. Walking one section, say desulphurisation and the primary reformer, under a work permit or with an operator, teaches you valve positions, bypasses, sample points and the temporary fixes nobody drew. The red-marked P&IDs you hand back are useful to the whole plant.

                ## Milestones
                1. One section chosen with the area operator and the right permit or escort arranged.
                2. Every line, valve and instrument on the section's P&IDs traced in the field.
                3. Differences between drawing and field marked in red on a copy.
                4. The marked-up copies handed to document control for review.

                ## Notes
                Do this in daylight, with your PPE and gas detector, and stay out of any area under permit you are not on.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A red-marked set of P&IDs for one plant section, traced in the field and submitted to document control."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a section with the area operator and agree a time to walk it"
                - "Print the P&IDs for the section at a readable size"
                - "Trace each line in the field and mark differences in red"
                - "Submit the marked-up drawings to document control"
            - name: Daily plant performance check
              description: |-
                ## Purpose
                Ten numbers glanced at every morning let you spot a fouling exchanger, a drifting analyser or a creeping purge rate weeks before anyone else. On an ammonia or methanol plant those numbers are usually rate, gas consumption per tonne, reformer outlet temperature, steam to carbon ratio, methane slip, loop pressure and the main machine loads. A short daily routine, the same every day, is the backbone of the job.

                ## Milestones
                1. Ten key performance variables chosen with the senior process engineer.
                2. A historian trend or dashboard built that shows all ten on one screen.
                3. The check done each working morning before the plant meeting.
                4. Anything unusual raised at the morning meeting with the trend attached.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ten-variable dashboard exists and is reviewed each working morning, with anomalies raised at the plant meeting."
                cadence: rolling
              tasks:
                - "Agree the ten key variables with the senior process engineer"
                - "Build a single historian screen showing all ten with sensible ranges"
                - "Review the ten-variable screen before the morning plant meeting @recurring(daily)"
                - "Note each anomaly and what explained it in a running log"
            - name: Monthly energy per tonne tracking
              description: |-
                ## Purpose
                Gas is the plant's feed and fuel and its biggest cost, so gigajoules per tonne of ammonia or methanol is the number management watches most closely. Calculating it the same way each month, split into feed, fuel and export steam or power, shows whether a change in consumption came from rate, gas quality, fouling or a catalyst near end of life. A consistent monthly figure also feeds benchmarking and every efficiency case.

                ## Milestones
                1. One calculation method agreed and written down, including how steam and power are credited.
                2. Twelve months of history recalculated on that method.
                3. A monthly figure produced within a week of month end.
                4. Each month's movement explained in two or three lines.

                ## Notes
                Start from the **Metrics log** template. Hold the method fixed; changing it quietly makes the trend meaningless.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly energy per tonne figure on a fixed method, with twelve months of history and a short explanation of each movement."
                cadence: rolling
              tasks:
                - "Write down the energy per tonne method with feed, fuel and credits"
                - "Recalculate the last twelve months on the agreed method"
                - "Calculate and explain last month's energy per tonne @recurring(monthly:8)"
                - "Share the trend with the plant manager each quarter"
            - name: Catalyst performance monitoring across the plant
              description: |-
                ## Purpose
                Desulphurisation, primary and secondary reforming, high and low temperature shift, methanation and synthesis each use a catalyst with its own life and its own warning signs: rising pressure drop, approach to equilibrium widening, hot bands, sulphur slip or falling activity. Tracking all of them on one sheet tells you which bed is ageing fastest and gives procurement the lead time a catalyst order really needs. It also turns the next change-out from a surprise into a plan.

                ## Milestones
                1. Every catalyst bed listed with type, supplier, install date and expected life.
                2. One or two health indicators chosen for each bed.
                3. A quarterly review of each indicator recorded.
                4. Predicted change-out dates passed to the turnaround planner and procurement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A catalyst register with health indicators reviewed quarterly and change-out dates passed to planning."
                cadence: rolling
              tasks:
                - "List every catalyst bed with type, supplier and install date"
                - "Choose health indicators for each bed with the catalyst vendor's advice"
                - "Review every catalyst bed's health indicators and update predicted life @recurring(quarterly)"
                - "Send the predicted change-out dates to the turnaround planner"
            - name: Reformer tube wall temperature survey programme
              description: |-
                ## Purpose
                Primary reformer tubes are the most expensive consumable on an ammonia or methanol plant, and running them a little too hot shortens their life dramatically. A regular survey with an optical pyrometer or infrared camera, taken the same way each time and corrected for emissivity and background, catches hot tubes, uneven firing and flue gas maldistribution before a tube fails. The record also supports remaining life decisions at the next turnaround.

                ## Milestones
                1. A survey method written: instrument, peephole order, corrections and who does it.
                2. A tube map with every tube numbered, matching the field.
                3. A monthly survey completed and compared with the previous one.
                4. Hot tubes and firing changes reported to operations with a recommendation.

                ## Notes
                Pyrometer readings vary a lot with technique. One trained person using one method beats many people using several.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written tube survey method, a numbered tube map and monthly survey results compared and reported to operations."
                cadence: rolling
              tasks:
                - "Write the survey method with the instrument, corrections and peephole order"
                - "Draw or update the numbered tube map and check it in the field"
                - "Run the reformer tube temperature survey and compare it with last month @recurring(monthly:14)"
                - "Report hot tubes and firing advice to the shift supervisor"
            - name: Cooling water and seawater system watch
              description: |-
                ## Purpose
                Estate plants cool with seawater or brackish water directly or through closed circuits, and the warm, salty, biologically active water of the Gulf of Paria fouls exchangers and corrodes piping faster than most textbooks expect. A weekly look at exchanger approach temperatures, chlorination, corrosion coupons and water chemistry results gives early warning of a fouled surface condenser or a leaking cooler. Losing vacuum on a turbine condenser in the dry season is the classic preventable rate cut.

                ## Milestones
                1. The critical coolers and condensers listed with their clean approach temperatures.
                2. The water treatment contractor's reports and coupon results gathered in one place.
                3. A weekly review of approach temperatures and chemistry against limits.
                4. Fouling trends turned into cleaning requests before they limit rate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review of cooling performance and water chemistry is recorded, with cleaning requests raised before fouling limits plant rate."
                cadence: rolling
              tasks:
                - "List the critical coolers and condensers with their clean approach temperatures"
                - "Ask the water treatment contractor to send results to you each week"
                - "Review cooler approach temperatures and water chemistry against limits @recurring(weekly:tue)"
                - "Raise a cleaning request for any exchanger trending towards its limit"
            - name: Ammonia storage and refrigeration watch
              description: |-
                ## Purpose
                Refrigerated atmospheric ammonia tanks are the largest toxic inventory on many estate plants, held near minus 33 degrees by boil-off compressors that must keep running through power dips and ship loading. A monthly check of tank pressure history, compressor availability, relief and vacuum protection, level instruments and foundation heating keeps this quiet equipment from being forgotten. Storage incidents worldwide have started with exactly the systems nobody looked at.

                ## Milestones
                1. The tank's protective systems listed: relief valves, vacuum breakers, level and temperature instruments, flare or vent and foundation heating.
                2. A monthly review of pressure history and compressor running hours recorded.
                3. Overdue inspections or tests on the tank's protective systems chased.
                4. The tank's inspection history and next internal inspection date confirmed with integrity.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly storage review covering pressure history, compressor availability and protective system tests, with overdue items chased."
                cadence: rolling
              tasks:
                - "List the tank's protective systems and their test intervals"
                - "Review ammonia tank pressure history and boil-off compressor availability @recurring(monthly:20)"
                - "Chase any protective device that is overdue for test"
                - "Confirm the tank's inspection history with the integrity engineer"
            - name: Product quality and ship loading interface
              description: |-
                ## Purpose
                Most estate output leaves by ship, so a cargo off specification or a late loading costs demurrage and reputation quickly. Methanol buyers usually test against the IMPCA reference specification, ammonia buyers watch water and oil content, and urea buyers care about granule size, moisture and crushing strength. A weekly look at quality trends and the berth schedule lets engineering fix a drifting column or finishing section before a cargo is at risk.

                ## Milestones
                1. The product specifications your plant sells against filed with their test methods.
                2. A trend of the key quality results for the last three months.
                3. A weekly quality and berth schedule review in place with the laboratory and shipping.
                4. Any parameter trending towards its limit raised with a corrective action owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review of product quality trends and the ship schedule, with any drifting parameter assigned an owner before a cargo is at risk."
                cadence: rolling
              tasks:
                - "Ask the laboratory for the product specifications and test methods in use"
                - "Trend the last three months of the key quality results"
                - "Review product quality trends against the coming ship schedule @recurring(weekly:fri)"
                - "Raise any drifting parameter with the area engineer and laboratory"
            - name: Weekly engineering safety walkdown
              description: |-
                ## Purpose
                Safety culture on a plant is set by what engineers and managers notice and act on in the field, not by posters. A short walkdown each week of a different area, looking at housekeeping, temporary repairs, clamps, hoses, bypassed alarms and how permits are displayed, keeps you honest about the real state of the plant. Closing what you find, and telling the operator who pointed it out, is what makes people keep pointing things out.

                ## Milestones
                1. A rota of plant areas so every area is walked at least once a quarter.
                2. A simple checklist covering temporary repairs, leaks, permits, housekeeping and bypasses.
                3. Findings logged with an owner and closed or escalated.
                4. Feedback given to the people who raised each finding.

                ## Notes
                You hold stop-work authority on the walkdown like everyone else. Use it when you see something unsafe, and record that you did.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A walkdown is completed each week to a rota, with findings logged, owned and closed, and every area covered each quarter."
                cadence: rolling
              tasks:
                - "Draw up a rota of plant areas for the quarter"
                - "Write a one-page walkdown checklist with the area supervisors"
                - "Walk this week's area and log every finding with an owner @recurring(weekly:thu)"
                - "Tell the operator who raised each finding what was done about it"
            - name: Contractor work oversight on a live plant
              description: |-
                ## Purpose
                Most hands-on work on the estate is done by local contractors working beside running equipment full of ammonia, syngas and steam. As the engineer responsible for a job, you set the technical scope, confirm isolations make sense, check the work meets the specification and accept it before it goes back to service. A weekly review of every open contractor job you own stops quality and safety gaps from hiding between the permit office and the workshop.

                ## Milestones
                1. Every contractor job you are responsible for listed with scope, permit and inspection points.
                2. Hold and witness points agreed with the contractor for each job.
                3. A weekly review of progress, quality records and safety observations.
                4. Each job formally accepted with records filed before it is closed.

                ## Notes
                Contractor safety certification and prequalification sit with your site's contractor safety process. This project is about the technical oversight you give as the job's engineer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contractor job you own has agreed hold points, a weekly review entry and acceptance records filed before close-out."
                cadence: rolling
              tasks:
                - "List every open contractor job you are the responsible engineer for"
                - "Agree hold and witness points with each contractor supervisor"
                - "Review progress, quality records and safety observations on open contractor jobs @recurring(weekly:mon)"
                - "File acceptance records before signing off each completed job"
            - name: Hurricane and wet season plant readiness
              description: |-
                ## Purpose
                Trinidad sits at the southern edge of the hurricane belt, yet tropical storms, lightning, flash flooding and strong winds still trip plants and flood substations on the estate in the wet season from June to November. A checklist completed before each season, covering drainage, loose items, critical spares, generator fuel, staffing and safe shutdown triggers, means the plant meets the first storm warning ready. The cost of the check is tiny beside one unplanned trip.

                ## Milestones
                1. A pre-season checklist agreed with operations, maintenance and HSE.
                2. Drains, culverts and substation cable trenches inspected and cleared.
                3. Emergency generators, diesel stocks and critical spares confirmed.
                4. Storm staffing, communication and safe shutdown triggers written and briefed.

                ## Notes
                Start from the **Operational checklist** template. Follow the national meteorological service and your site emergency plan for triggers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pre-season checklist is completed and signed off by the end of May each year, with storm triggers briefed to all shifts."
                cadence: cyclic
              tasks:
                - "Draft the pre-season checklist with operations, maintenance and HSE"
                - "Run the wet season readiness checklist and close every gap @recurring(yearly)"
                - "Check drain and trench condition after a heavy rainfall event @recurring(quarterly)"
                - "Brief every shift on storm staffing and shutdown triggers"
            - name: Emissions and effluent monitoring and reporting
              description: |-
                ## Purpose
                Stack emissions, ammonia slip, wastewater discharges and spills are reported to the Environmental Management Authority under your plant's permits and registrations, and the data usually depends on analysers and laboratory results engineers look after. A monthly review of every monitored parameter against its permit limit, with the analyser availability beside it, catches a failing analyser or a creeping discharge before the report is due. Late or wrong reports damage trust with the regulator and the Couva community alike.

                ## Milestones
                1. Every monitored emission and discharge listed with its permit limit and reporting frequency.
                2. The analysers and sampling routines behind each parameter identified with owners.
                3. A monthly review of results and analyser availability recorded.
                4. Each report submitted on time with exceedances explained and actions raised.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly review of emissions and effluent results against permit limits is recorded, and every regulatory report goes in on time."
                cadence: rolling
              tasks:
                - "List every monitored parameter with its limit and reporting frequency"
                - "Review emissions and effluent results and analyser availability @recurring(monthly:25)"
                - "Raise a work order for any analyser below its availability target"
                - "Rehearse the spill and exceedance notification route with HSE @recurring(yearly)"
            - name: Steam reforming fundamentals for ammonia and methanol
              description: |-
                ## Purpose
                Every ammonia and methanol plant on the estate begins with the same chemistry: methane and steam over nickel catalyst in fired tubes, then shift or direct use of the synthesis gas. Understanding equilibrium, the steam to carbon ratio, carbon formation, methane slip and the heat balance of the radiant and convection sections lets you read the front end rather than memorise it. A structured study over six weeks, tied to your own plant data, sticks far better than a single lecture.

                ## Milestones
                1. The main reforming and shift reactions written with their heats of reaction and equilibrium trends.
                2. Your plant's reformer outlet conditions checked against an equilibrium calculation.
                3. Carbon formation risks and their causes explained in your own words.
                4. A one-page summary presented to a senior process engineer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of reforming fundamentals with an equilibrium check of your plant's reformer outlet, reviewed by a senior engineer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a reference text or vendor training course on steam reforming"
                - "Write out the reforming and shift reactions with their equilibrium trends"
                - "Run an equilibrium check of your reformer outlet using plant data"
                - "Present your summary to a senior process engineer"
            - name: Ammonia synthesis loop operation
              description: |-
                ## Purpose
                The synthesis loop is where an ammonia plant makes or loses money: converter bed temperatures, inerts build-up, purge rate, loop pressure and refrigeration all interact. Engineers who understand the loop can explain why production drops when methane or argon builds up and how a converter temperature profile shows catalyst ageing. Studying it with your own converter's design data makes the next loop upset a puzzle you can work through.

                ## Milestones
                1. The loop drawn from make-up gas to product separation with key conditions.
                2. Converter bed temperature profiles at design and today compared.
                3. The effect of inerts and purge rate on production worked through with plant data.
                4. Start-up and trip behaviour of the loop discussed with a shift supervisor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A loop diagram, converter profile comparison and an inerts and purge analysis using plant data, discussed with a shift supervisor."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Draw the synthesis loop with design pressures, temperatures and flows"
                - "Compare today's converter bed profiles with the design profiles"
                - "Plot loop inerts against purge rate and production for the last year"
                - "Ask a shift supervisor to talk you through a loop trip and restart"
            - name: Methanol synthesis and distillation essentials
              description: |-
                ## Purpose
                Engineers on a methanol plant need to understand how synthesis gas stoichiometry, loop recycle, converter type and catalyst ageing drive crude methanol make, and how distillation turns crude into product that passes ethanol, water and permanganate time tests. Many quality problems that look like distillation problems start in the loop. Studying both halves together, with your own plant's data, is the quickest route to being useful in a quality investigation.

                ## Milestones
                1. The stoichiometric number of your synthesis gas calculated from plant data.
                2. Converter type, catalyst and the main ageing indicators described.
                3. The distillation train drawn with the impurities each column removes.
                4. A past quality excursion traced back to its cause in loop or column.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on synthesis gas stoichiometry, converter ageing and the distillation train, with one past quality excursion traced to its cause."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Calculate the synthesis gas stoichiometric number from current analyses"
                - "Draw the distillation train and note what each column removes"
                - "Pick a past quality excursion from the laboratory records"
                - "Trace the excursion's cause with the area process engineer"
            - name: Urea synthesis, carbamate and passivation
              description: |-
                ## Purpose
                Urea plants combine ammonia and CO2 at high pressure into ammonium carbamate, a fluid so corrosive that the stainless steel equipment survives only while passivation air keeps a protective oxide layer in place. Engineers who understand the N to C ratio, stripping efficiency, biuret formation and why passivation must never be lost can make sensible calls during upsets. This study is essential for anyone working on the urea side of the estate.

                ## Milestones
                1. The synthesis and stripping sections drawn with design ratios and conditions.
                2. The role of passivation air and the consequences of losing it written down.
                3. Biuret formation and how plant conditions drive it explained with data.
                4. Upset responses that protect the high pressure loop reviewed with operations.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note on urea synthesis, passivation and biuret control, with upset responses for the high pressure loop reviewed with operations."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the licensor's description of the synthesis and stripping sections"
                - "Write down the passivation air requirements and what loss of air means"
                - "Trend biuret against key plant conditions for three months"
                - "Review high pressure loop upset responses with a shift supervisor"
            - name: Urea granulation and prilling know-how
              description: |-
                ## Purpose
                Customers judge urea by what arrives in the ship's hold: granule size, hardness, moisture and dust. Finishing sections, whether a prill tower or a fluid bed granulator, are sensitive to humidity, melt concentration, formaldehyde dosing and scrubber performance, and the humid Trinidad climate makes caking and dust a constant fight. Learning how the finishing section works helps you answer complaints and plan improvements.

                ## Milestones
                1. The finishing section drawn with melt concentration, additive dosing and air systems.
                2. Product quality parameters linked to the plant variables that drive them.
                3. Dust emission controls and their monitoring understood.
                4. A recent customer complaint or quality issue reviewed against plant data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note linking finishing section variables to product quality and dust, with one recent quality issue explained from plant data."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Walk the finishing section with an area operator"
                - "Draw the finishing flow with melt, additive and air streams"
                - "Match each product quality parameter to the variables that drive it"
                - "Review a recent quality complaint with the laboratory and shipping"
            - name: CO2 removal systems and by-product CO2
              description: |-
                ## Purpose
                Ammonia front ends strip CO2 from synthesis gas using hot potassium carbonate or amine solvents, and the CO2 goes to urea, to food and beverage users or to atmosphere. Solvent foaming, corrosion, degradation and regeneration energy are common causes of rate cuts and high gas consumption. Understanding your system's chemistry and its monitoring points makes you the person who can tell a foaming event from a measurement problem.

                ## Milestones
                1. The absorber and regenerator system drawn with solvent type and design conditions.
                2. Solvent quality tests, their limits and their frequency listed.
                3. The causes and signs of foaming written down with past examples from the plant.
                4. Where the CO2 goes and the specification each user needs recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note on the CO2 removal system with solvent tests, foaming signs and CO2 user specifications, checked by the area engineer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw the absorber and regenerator with design conditions"
                - "List the solvent tests and limits the laboratory reports"
                - "Find two past foaming events in the logs and note their signs"
                - "Record where the CO2 goes and each user's specification"
            - name: Steam system and turbine-driven compressors
              description: |-
                ## Purpose
                Estate plants run on high pressure steam raised from reformer waste heat, and that steam drives the big machines: the synthesis gas compressor, the refrigeration compressor and often the air compressor. A plant engineer who understands the steam balance, letdowns, turbine extraction and how compressor surge and trips propagate can explain most whole-plant trips. It is also where much of the plant's energy is won or lost.

                ## Milestones
                1. A steam balance drawn for the plant at normal rate with each header.
                2. Each major turbine and compressor listed with its drive, duty and trip protections.
                3. The sequence of a typical steam or compressor trip traced from the event logs.
                4. Steam letdowns and venting at normal rate quantified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plant steam balance and a list of major machines with trip protections, plus one traced trip sequence, reviewed by the rotating equipment engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Build a steam balance for normal rate from historian data"
                - "List each major machine with its drive, duty and protections"
                - "Trace one recent trip sequence through the event logs"
                - "Ask the rotating equipment engineer to review your notes"
            - name: Ammonia industry incident lessons study
              description: |-
                ## Purpose
                The ammonia industry has shared its incidents openly for decades, through technical safety symposia and published case studies covering reformer tube ruptures, storage tank failures, synthesis loop fires and toxic releases. Reading a set of these and mapping each lesson onto your own plant is one of the best safety habits an engineer can build. It also gives you credible examples when arguing for a safeguard.

                ## Milestones
                1. Ten published incident case studies relevant to your plant type read and summarised.
                2. Each lesson mapped to the equipment or practice it would apply to on your plant.
                3. Gaps found on your plant written up and raised through the right channel.
                4. Two of the case studies presented at a safety meeting.

                ## Notes
                Industry symposia such as the long-running ammonia safety symposium publish papers that are a good place to start. Raise gaps through your plant's reporting or management of change process, not informally.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten incident case studies summarised and mapped to your plant, with gaps raised formally and two cases presented at a safety meeting."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose ten published incident papers that match your plant's equipment"
                - "Ask the agent to draft a one-page summary template for each case"
                - "Map each lesson to your plant and note any gap"
                - "Raise the gaps through the plant's reporting process"
                - "Present two of the case studies at a safety meeting"
            - name: Energy efficiency study for an ageing plant
              description: |-
                ## Purpose
                Several estate plants were built in the late 1970s and 1980s and use noticeably more gas per tonne than modern designs, which matters more each time gas becomes scarce or expensive. A structured study that benchmarks your plant, maps where the energy goes and ranks projects by gas saved and cost gives management a real list instead of a wish list. Typical candidates include combustion air preheat, convection section recovery, turbine upgrades and better CO2 removal solvents.

                ## Milestones
                1. The plant benchmarked against published industry figures for its process and age.
                2. An energy map showing where feed and fuel energy ends up.
                3. A long list of improvement ideas with estimated gas savings.
                4. A ranked shortlist with rough cost, saving and payback presented to management.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A benchmarked energy study with a ranked shortlist of projects, each with estimated gas saving and cost, presented to the plant manager."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Gather published energy benchmarks for your process and plant age"
                - "Build an energy map of feed, fuel, steam and losses from plant data"
                - "Run an ideas session with operations and maintenance"
                - "Estimate gas saving and rough cost for each idea"
                - "Present the ranked shortlist to the plant manager"
            - name: Purge gas hydrogen recovery evaluation
              description: |-
                ## Purpose
                Ammonia loop purge gas carries hydrogen that many plants burn as fuel, and a membrane or cryogenic recovery unit can return it to the loop for extra production. Whether that pays depends on purge rate, gas price, product price and space on the plot. A careful evaluation either justifies a project or gives a clear reason to stop raising it every year.

                ## Milestones
                1. Current purge rate, composition and fate measured and documented.
                2. Recovery options and vendor indications gathered.
                3. Extra production and fuel replacement calculated for each option.
                4. A recommendation to proceed, defer or drop recorded with its reasoning.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written evaluation of hydrogen recovery options with production gain, fuel impact and a recorded recommendation."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Measure purge gas rate and composition from plant data"
                - "Check whether the plant already has a recovery unit and how it performs"
                - "Request budget indications from two recovery technology vendors"
                - "Write the recommendation with production gain and fuel impact"
            - name: Raw and demineralised water supply resilience
              description: |-
                ## Purpose
                Water supply interruptions are a real constraint in central Trinidad, and a plant that loses demineralised water for its boilers is only hours from a shutdown. Knowing your sources, storage hours, treatment capacity and fallback options, then closing the worst gap, protects production through the dry season. Options may include more storage, a desalination supply or tighter condensate recovery.

                ## Milestones
                1. Raw water sources, contracts and typical reliability recorded.
                2. Storage hours available at normal rate calculated for raw and demineralised water.
                3. Condensate recovery rate measured and losses identified.
                4. A ranked set of resilience options with costs presented.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A water resilience note giving storage hours, condensate recovery and ranked options with costs, presented to the plant manager."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List every raw water source with its contract and outage history"
                - "Calculate storage hours for raw and demineralised water at normal rate"
                - "Measure condensate recovery and list the largest losses"
                - "Present ranked resilience options with rough costs"
            - name: Power dip and grid disturbance trip review
              description: |-
                ## Purpose
                Lightning and grid faults cause voltage dips that can drop motors, contactors and variable speed drives across a plant, and a single dip can trip a whole ammonia train. Recording every disturbance, what tripped and why, and then fixing the weakest links with ride-through settings, relays or supplies, reduces lost production more cheaply than most projects. The evidence also helps your discussions with the utility.

                ## Milestones
                1. A log of power disturbances for the past two years, matched to plant trips.
                2. The loads that tripped on each dip identified with their protection settings.
                3. Ride-through improvements proposed with the electrical engineer.
                4. Disturbance events logged each month going forward.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-year disturbance and trip log with ride-through improvements proposed and monthly logging in place."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect two years of power disturbance records from the electrical team"
                - "Match each disturbance to the plant trips and loads affected"
                - "Propose ride-through improvements with the electrical engineer"
                - "Log the past month's power disturbances and their plant effects @recurring(monthly:11)"
            - name: Spurious trip reduction review
              description: |-
                ## Purpose
                Each trip of an ammonia or methanol plant costs a day or more of production, burns gas without product and stresses the reformer and machines. Many trips come from a failed transmitter, a single sensor voting arrangement or a wrong setting rather than a real process problem. Reviewing every trip each month, classifying it and fixing the repeat offenders is one of the highest-value jobs an engineer can own.

                ## Milestones
                1. Two years of trips listed with initiating cause and lost production.
                2. Trips classified as real process, spurious instrument, electrical or human.
                3. The top five repeat causes given an owner and a fix.
                4. A monthly trip review in place with operations and instrumentation.

                ## Notes
                Changes to trip settings, voting or bypasses go through management of change and the safety instrumented system owner. Never fix a spurious trip by bypassing it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A classified trip log for two years, owners for the top five causes and a monthly trip review recorded."
                cadence: rolling
              tasks:
                - "List two years of plant trips with cause and lost production"
                - "Classify each trip as process, instrument, electrical or human"
                - "Assign an owner and fix for the five most common causes"
                - "Review last month's trips with operations and instrumentation @recurring(monthly:17)"
            - name: Corrosion under insulation in a coastal plant
              description: |-
                ## Purpose
                Hot, humid, salt-laden air from the Gulf of Paria and heavy wet season rain make corrosion under insulation one of the most common causes of leaks on estate plants, often in lines between 50 and 150 degrees or on cyclic service. Deciding where to look, how to prioritise and when to remove insulation for good needs a clear method. A prioritised programme beats waiting for a stain on the cladding.

                ## Milestones
                1. Insulated lines and vessels in the susceptible temperature range listed.
                2. Each item ranked by consequence of leak and likelihood factors such as damaged cladding.
                3. An inspection plan agreed with the integrity engineer for the highest-ranked items.
                4. Decisions recorded for items where insulation could be removed or replaced.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of CUI-susceptible items with an agreed inspection plan and recorded decisions on insulation removal."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List insulated items in the susceptible temperature range from the line list"
                - "Walk the plant and note damaged cladding and missing seals"
                - "Rank items by leak consequence and likelihood with the integrity engineer"
                - "Update the CUI ranking with the latest inspection findings @recurring(yearly)"
            - name: Obsolescence register for a decades-old plant
              description: |-
                ## Purpose
                Control systems, analysers, machine monitoring, switchgear and even some valves on older estate plants are no longer supported by their makers, and spares are bought second-hand or not at all. An obsolescence register that records support status, spares held and the consequence of failure lets you plan replacements into turnarounds instead of reacting to a failure. It also gives management a defensible capital list.

                ## Milestones
                1. Systems and equipment with known support or spares problems listed.
                2. Vendor support status and spares holdings recorded for each.
                3. Each item ranked by consequence of failure and time to replace.
                4. A replacement plan tied to future turnarounds proposed.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked obsolescence register with support status, spares and a turnaround-linked replacement plan, reviewed with maintenance."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask each discipline lead for their known obsolete systems"
                - "Check vendor support status for each item"
                - "Rank items by consequence and time to replace"
                - "Refresh the obsolescence register with vendor notices @recurring(yearly)"
            - name: Catalyst reduction and start-up after a change-out
              description: |-
                ## Purpose
                A fresh ammonia synthesis or low temperature shift catalyst has to be reduced carefully, with temperature, pressure and water content held to the vendor's procedure for days. Errors permanently cut activity or overheat the bed, and the plant cannot make product until it is done. Preparing the procedure, instrument checks, staffing and monitoring sheets well before the turnaround is a dated job with one chance to get right.

                ## Milestones
                1. The vendor's reduction procedure reviewed and adapted to the plant with the vendor's representative.
                2. Critical temperature and analysis instruments checked and calibrated.
                3. Shift staffing and monitoring sheets for the reduction ready.
                4. The reduction completed with records filed and the vendor's report received.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The catalyst reduction completes to the vendor procedure, with records of temperature, water and analysis filed and a vendor report received."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Request the reduction procedure and support schedule from the catalyst vendor"
                - "Review the procedure with operations and adapt it to the plant"
                - "Schedule calibration of every bed thermocouple and moisture analyser"
                - "Build the shift monitoring sheets and staffing plan for the reduction"
            - name: Hosting a licensor technical audit
              description: |-
                ## Purpose
                Licensors and catalyst vendors offer plant audits that compare your operation with their reference plants and spot losses your team has stopped seeing. The value depends almost entirely on preparation: good data, clear questions and the right people in the room. A well-hosted audit leaves you with a ranked list of recommendations and a relationship you can call on later.

                ## Milestones
                1. Audit scope, dates and the questions you most want answered agreed with the licensor.
                2. A data pack of operating data, analyses and recent problems sent ahead.
                3. Audit meetings and field visits held with operations, maintenance and process attending.
                4. Recommendations received, ranked and assigned owners.

                ## Notes
                Start from the **Meeting notes** template for each audit session. Check confidentiality terms before sending data.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A licensor audit held with a data pack sent in advance, and its recommendations ranked with named owners."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree audit scope, dates and confidentiality terms with the licensor"
                - "Write the five questions you most want the audit to answer"
                - "Assemble and send the operating data pack two weeks ahead"
                - "Rank the recommendations and assign owners after the audit"
            - name: First ship loading as duty engineer
              description: |-
                ## Purpose
                Loading ammonia or methanol at the estate berths brings the plant, the port, the ship's crew, surveyors and sometimes the customer together, with toxic or flammable product moving through loading arms. The first time you are duty engineer for a loading you need to know the sequence, the shutdown links between ship and shore and who decides what. Preparing in advance means you are a help on the jetty rather than a spectator.

                ## Milestones
                1. The loading procedure, ship and shore safety checklist and emergency shutdown links read.
                2. One loading shadowed with an experienced duty engineer.
                3. Roles of the terminal, ship, surveyor and plant written down.
                4. Your first loading completed with any issues logged.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You have shadowed one loading and completed one as duty engineer, with roles documented and any issues logged."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read the loading procedure and the ship and shore safety checklist"
                - "Ask to shadow the next loading with an experienced duty engineer"
                - "Write down who decides what between terminal, ship and plant"
                - "Log any issues from your first loading as duty engineer"
            - name: Estate emergency exercise participation
              description: |-
                ## Purpose
                A major release on one plant affects its neighbours, the port and the communities of Couva and California, so estate plants exercise together under mutual aid arrangements. Taking an active role, whether as an observer, a controller or a technical adviser in the emergency control centre, teaches you how a real response flows. Writing up what you saw improves the next plan.

                ## Milestones
                1. Your role in the exercise agreed with the emergency coordinator.
                2. Your plant's emergency plan and the mutual aid arrangements read beforehand.
                3. The exercise attended and your observations recorded.
                4. Your observations and suggested improvements sent to the coordinator.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You take an agreed role in an estate exercise and send written observations with improvements to the emergency coordinator."
                cadence: cyclic
              tasks:
                - "Ask the emergency coordinator when the next estate exercise is planned"
                - "Read the site emergency plan and the mutual aid arrangements"
                - "Take part in the estate emergency exercise and send your observations @recurring(yearly)"
                - "Follow up the actions raised from your observations"
            - name: Ammonia plant turnaround inspection scope
              description: |-
                ## Purpose
                On an ammonia or methanol plant the turnaround inspection scope centres on a few critical items: reformer tubes and outlet headers, the secondary reformer refractory, waste heat boilers, shift and synthesis converters, high pressure piping and the refrigeration system. Getting the scope right a year ahead, based on condition, history and integrity windows, decides whether the plant runs safely to the next turnaround. Your site's turnaround process sets the gates; this project covers the plant-specific technical content.

                ## Milestones
                1. Critical equipment listed with last inspection, findings and current condition indicators.
                2. Inspection methods chosen for each item with the integrity engineer and specialist vendors.
                3. The technical inspection scope submitted before the site scope freeze.
                4. Contingency repairs and spares identified for likely findings.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A technical inspection scope for the plant's critical equipment with methods and contingency spares, submitted before scope freeze."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "List the critical items with their last inspection and findings"
                - "Agree inspection methods with the integrity engineer and specialist vendors"
                - "Identify contingency repairs and spares for likely findings"
                - "Submit the technical inspection scope before the site scope freeze"
            - name: Statutory examination of boilers and pressure vessels
              description: |-
                ## Purpose
                Steam boilers, waste heat boilers and pressure vessels are subject to periodic examination by a competent person under Trinidad and Tobago's occupational safety law and your plant's insurance terms. Missing an examination can stop a unit legally, and examinations often need a shutdown window. Knowing every item's due date and planning the outages around them avoids a forced stop.

                ## Milestones
                1. Every item subject to statutory examination listed with its last and next due date.
                2. The competent person or inspection body confirmed for each item.
                3. Upcoming examinations tied to planned outages or turnarounds.
                4. Certificates filed and the register updated after each examination.

                ## Notes
                Confirm the current legal requirements and intervals with your HSE lead or the regulator; do not rely on what was true when the plant was built.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A statutory examination register with due dates and inspection bodies, each upcoming examination tied to an outage, certificates filed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask HSE for the current statutory examination requirements"
                - "List every item subject to examination with last and next due dates"
                - "Tie each upcoming examination to a planned outage"
                - "Check the statutory examination register for items due in the next twelve months @recurring(yearly)"
            - name: First 90 days as a graduate on a Point Lisas plant
              description: |-
                ## Purpose
                Graduates from the University of the West Indies, the University of Trinidad and Tobago or universities abroad arrive on estate plants knowing the theory and very little about shift life, permits or how a 40-year-old ammonia plant really behaves. A plan for the first 90 days, with a mentor, field time, a small technical project and the safety basics done first, turns those months into a foundation instead of a blur. It also gives you evidence for professional registration later.

                ## Milestones
                1. A mentor named and a weekly meeting agreed.
                2. Site safety induction, permit awareness and emergency readiness completed in the first two weeks.
                3. Two weeks spent shadowing shifts in the control room and field.
                4. A small technical project completed and presented.
                5. A competence record started for professional registration.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "By day 90 you have completed safety inductions, shadowed shifts, presented a small technical project and started a competence record."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your manager to name a mentor and set a weekly meeting"
                - "Complete the site induction and permit awareness training"
                - "Arrange two weeks of shift shadowing with the shift supervisor"
                - "Meet your mentor to review progress and next week's goals @recurring(weekly:wed)"
                - "Agree a small technical project you can finish by day 90"
            - name: Moving to the estate from upstream or abroad
              description: |-
                ## Purpose
                Engineers joining a Point Lisas plant from offshore oil and gas, from a refinery abroad or after years overseas bring real experience but meet a different world: continuous chemical processes, toxic inventories, licensor technology and a tight-knit estate community. A deliberate transition, covering the technical gaps, the local regulatory picture and practical matters such as commuting to Couva, gets you credible quickly. Being honest about what you do not know yet is what earns trust.

                ## Milestones
                1. Your experience mapped against the plant's processes, with gaps listed.
                2. A study plan agreed for the biggest technical gaps.
                3. Introductions made to counterparts on neighbouring plants and in the estate's engineering community.
                4. Practical arrangements for travel, shift cover and family settled.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written gap map and study plan, introductions to neighbouring plants' engineers, and practical arrangements in place within three months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down which plant processes match your past experience and which do not"
                - "Agree a study plan for the two biggest gaps with your manager"
                - "Ask your manager for introductions to engineers on neighbouring plants"
                - "Plan your commute and shift cover around the estate's traffic peaks"
            - name: Shift process engineer call-out routine
              description: |-
                ## Purpose
                On many estate plants an engineer is on call overnight and at weekends, and a call at 2 a.m. about a high converter temperature or a compressor alarm needs a calm, structured response. Agreeing what you will be called for, keeping the key drawings and procedures on hand and handing over cleanly in the morning makes the role sustainable. Reading the night log each morning keeps you ahead of what happened while you slept.

                ## Milestones
                1. The call-out criteria agreed with the shift supervisors.
                2. A call-out pack of key drawings, limits and contacts available off site.
                3. A standard way of recording each call and the advice given.
                4. A morning handover routine to the day team in place.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Agreed call-out criteria, an off-site call-out pack and every call recorded with advice and handed over the next morning."
                cadence: rolling
              tasks:
                - "Agree with the shift supervisors which events justify a call-out"
                - "Assemble a call-out pack of drawings, limits and contacts"
                - "Read the night shift log before the morning meeting @recurring(daily)"
                - "Record each call-out and hand it over to the day team"
            - name: Contractor engineer working across estate plants
              description: |-
                ## Purpose
                Engineers with local engineering and maintenance contractors often work on three or four estate plants in a month, each with its own permit system, standards, approvals and site culture. Keeping a clear record of each client's rules, contacts and open jobs prevents the classic mistakes: following the wrong plant's procedure or missing a client hold point. It also builds the reputation that wins repeat work.

                ## Milestones
                1. A one-page profile for each client plant covering permit system, key standards and contacts.
                2. Each client's site induction and any plant-specific training current.
                3. Open jobs listed by client with hold points and deliverables.
                4. Client feedback gathered after each completed job.

                ## Notes
                Each plant's own procedures govern on its site, even where they differ from your employer's.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A current profile for each client plant, valid inductions for each, an open job list with hold points and feedback recorded after each job."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-page profile for each client plant you work on"
                - "Check your induction and training expiry dates for each site"
                - "List open jobs by client with hold points and deliverables"
                - "Ask each client for feedback when a job closes"
            - name: Engineer on a plant facing mothballing or closure
              description: |-
                ## Purpose
                Gas shortages and economics have led to estate plants being idled, mothballed or closed, and engineers on those plants face two jobs at once: preserving the plant safely and looking after their own careers. Good preservation records, inventory removal plans and a clear account of what a restart would need are valuable to the owner, while an updated competence record and network protect you. Starting both early is better than waiting for the announcement.

                ## Milestones
                1. The plant's preservation requirements by equipment type documented with vendors and integrity.
                2. Hazardous inventory removal and safe isolation plans reviewed with process safety.
                3. A restart requirements note recording what would be needed to bring the plant back.
                4. Your own CV, competence record and network updated.

                ## Notes
                Preservation and decommissioning steps go through management of change. Seek independent advice on any employment questions.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Documented preservation and inventory removal plans, a restart requirements note, and your own CV and competence record updated."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the equipment vendors for their long-term preservation requirements"
                - "Review inventory removal and isolation plans with process safety"
                - "Write the restart requirements note for the owner"
                - "Update your CV and competence record with your plant experience"
            - name: Front-end revamp feasibility study
              description: |-
                ## Purpose
                Revamping the reformer, adding a pre-reformer, upgrading the CO2 removal solvent or replacing the synthesis converter internals can add capacity or cut gas use on an estate plant, but each changes the heat and steam balance across the whole plant. A feasibility study that tests options in a simulation, checks the downstream bottlenecks and gives a cost range at the right estimate class is what an owner needs before spending on FEED. The hard part is being honest about the constraints, gas supply among them.

                ## Milestones
                1. Revamp objectives agreed: capacity, gas use, reliability or emissions.
                2. Two or three options modelled with heat and steam balance impacts.
                3. Downstream bottlenecks identified for each option.
                4. A feasibility report with cost ranges and a recommendation issued.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A feasibility report comparing two or three revamp options with modelled impacts, bottlenecks, cost ranges and a recommendation."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Agree the revamp objectives with the plant manager"
                - "Request technology indications from the licensor and two vendors"
                - "Model each option and check the steam balance and downstream limits"
                - "Ask the agent to draft the comparison table from your model results"
                - "Issue the feasibility report with cost ranges and a recommendation"
            - name: High temperature hydrogen attack and metallurgy review
              description: |-
                ## Purpose
                Synthesis gas lines, shift converters and synthesis loop equipment operate in hydrogen at temperatures where some carbon and low-alloy steels can suffer high temperature hydrogen attack, a damage mechanism that gives little warning before failure. Industry guidance has been revised after serious incidents, and plants built decades ago may have equipment that no longer screens as safe. A review of every hydrogen service item against current guidance is specialist, high-consequence work.

                ## Milestones
                1. Every item in hydrogen service listed with material, operating temperature and hydrogen partial pressure.
                2. Each item screened against the current edition of API RP 941 with the integrity engineer.
                3. Items outside the safe region given an inspection, operating change or replacement plan.
                4. The review recorded and its operating limits added to the integrity operating windows.

                ## Notes
                Inspection for this damage needs specialist techniques. Use qualified inspectors and involve a materials specialist in the conclusions.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every hydrogen service item screened against the current API RP 941, with plans for items outside the safe region and limits added to the IOWs."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List every item in hydrogen service from the line and equipment lists"
                - "Collect materials, temperatures and hydrogen partial pressures for each"
                - "Screen each item against the current API RP 941 with the integrity engineer"
                - "Agree plans for items outside the safe region with a materials specialist"
            - name: Plant technical authority role
              description: |-
                ## Purpose
                Senior engineers on estate plants are often named technical authority for a discipline or a plant section, which means signing off deviations, changes and repairs and saying no when something is not safe. Doing the role well needs a clear scope, a record of every decision and its basis, and a deputy who can step in. A quarterly review of the decisions made and the standards held keeps the role honest and gives the next authority a record to inherit.

                ## Milestones
                1. The scope of your authority and its limits written and approved.
                2. A decision log recording each approval, deviation and refusal with its basis.
                3. A deputy named and briefed on the scope.
                4. A quarterly review of decisions and open deviations held with the plant manager.

                ## Notes
                Sign only what you have checked or had checked by someone competent. Your professional code of conduct applies to every signature.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written authority scope, a complete decision log, a named deputy and a quarterly review held with the plant manager."
                cadence: rolling
              tasks:
                - "Write the scope and limits of your technical authority for approval"
                - "Start a decision log with each approval, deviation and refusal"
                - "Name and brief a deputy on the scope"
                - "Review open deviations and recent decisions with the plant manager @recurring(quarterly)"
            - name: Urea high pressure loop integrity programme
              description: |-
                ## Purpose
                The urea high pressure synthesis loop, with its stripper, carbamate condenser, reactor and liners, is among the most demanding equipment on the estate: carbamate corrosion, liner leaks and tube failures can cause long outages and dangerous releases. An integrity programme that combines leak detection systems, corrosion monitoring, passivation discipline and turnaround inspection with specialist vendors is expert work. Getting it right protects both the plant's run length and the people near it.

                ## Milestones
                1. High pressure loop equipment listed with materials, liners and inspection history.
                2. Leak detection systems and their alarm responses checked and documented.
                3. Corrosion and passivation monitoring reviewed against licensor guidance.
                4. A turnaround inspection plan for the loop agreed with specialist inspectors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented high pressure loop integrity programme with leak detection, corrosion monitoring and a specialist turnaround inspection plan."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "List the loop equipment with materials, liners and inspection history"
                - "Check each leak detection system and document its alarm response"
                - "Review corrosion and passivation records against licensor guidance"
                - "Agree the loop's turnaround inspection plan with specialist inspectors"
---

# Point Lisas Petrochemical Plants

The Point Lisas estate packs ammonia, methanol and urea plants, shared pipelines, seawater cooling and its own port into a few square kilometres beside Couva, and most of those plants are decades old, gas hungry and full of toxic or flammable inventory. These projects start with foundations (the process map, the major hazards, your own emergency readiness, the estate's shared utilities, the gas you receive, the regulatory register and the operating limits), then build the monitoring routines for energy, catalysts, reformer tubes, cooling water, ammonia storage, product quality, walkdowns, contractors, storms and emissions, the process knowledge behind reforming, synthesis loops, urea and finishing, the improvement decisions an ageing plant needs, the dated events from catalyst reductions to statutory examinations, the situations engineers find themselves in, and the specialist work of revamps, hydrogen attack, technical authority and the urea high pressure loop.

The rhythm is a daily look at plant performance, weekly cooling water, product, contractor and walkdown checks, monthly energy, reformer tube, storage, trip and emissions reviews, quarterly catalyst and technical authority reviews, and a yearly cycle of hurricane preparation, regulatory and statutory checks. The Risk register, Compliance control, Metrics log, Operational checklist, Meeting notes and Onboarding 30/60/90 templates pair with the projects that keep a standing record. Your plant's own procedures, permit to work system and management of change process always govern; these projects help you work to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
