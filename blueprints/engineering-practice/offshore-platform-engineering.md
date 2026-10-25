---
id: engineering-practice.offshore-platform-engineering
name: Offshore Platform Engineering
description: "Offshore platform engineering as it is really done: survival certificates and the safety case, topsides and weight control, jacket integrity, boats, helicopters and bed space, SIMOPS, campaigns and life extension."
category: business
version: 1.0.0
tags: [engineering-practice, offshore-platform-engineering, engineer, offshore, topsides, jacket-integrity, simops, offshore-logistics]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - onboarding-30-60-90
    - meeting-notes
    - metrics-log
    - remediation-plan
    - risk-register
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Offshore Platform Engineering
          description: "Engineering for offshore platforms: topsides and facilities, structural integrity, offshore logistics and helicopter travel, simultaneous operations and campaign planning."
          projects:
            - name: Offshore survival training and medical fitness
              description: |-
                ## Purpose
                Nobody boards a helicopter to a platform without a valid offshore survival certificate, helicopter underwater escape training, an offshore medical and whatever site induction the operator requires. Getting these booked early matters because course places fill and medicals can raise questions that take weeks to settle, and an expired certificate on the morning of a flight means a missed mobilisation.

                ## Milestones
                1. The operator's or contractor's list of mandatory offshore certificates obtained in writing.
                2. A survival and helicopter escape course completed, including any compressed air breathing device module required.
                3. An offshore medical passed with the certificate and expiry date on file.
                4. Every certificate scanned, with expiry dates in your calendar three months ahead.

                ## Notes
                Requirements differ by region and operator, for example OPITO survival standards are common but not universal. Check what your operator accepts rather than assuming.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Valid survival, helicopter escape and medical certificates are held, scanned and logged with expiry reminders set."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Ask your coordinator for the operator's mandatory offshore certificate list"
                - "Book the survival and helicopter escape course at an approved centre"
                - "Book an offshore medical with an approved examiner"
                - "Scan every certificate into one folder with expiry dates in the file names"
                - "Check certificate and medical expiry dates against the next six months @recurring(quarterly)"
            - name: Installation safety case and major hazards summary
              description: |-
                ## Purpose
                Every manned installation has a safety case or equivalent that names its major accident hazards, the barriers that control them and the assumptions behind them. Engineers who have read it make better modification and maintenance decisions because they know which equipment the case relies on and which change would need it revised.

                ## Milestones
                1. The current revision of the installation safety case or equivalent obtained from the document system.
                2. A one-page summary of the major accident hazards and the main barriers against each.
                3. The safety critical elements list for the installation located and cross-referenced to the summary.
                4. Questions about any unclear assumption raised with the technical safety engineer.

                ## Notes
                The safety case is a living document. Note its revision and date so you notice when it changes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the installation's major accident hazards and barriers, tied to the current safety case revision, is filed and reviewed with technical safety."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Download the current safety case revision for your installation"
                - "List the major accident hazards and the barriers named for each"
                - "Find the safety critical elements list and match it to the hazards"
                - "Book thirty minutes with technical safety to go through your questions"
            - name: Platform layout and escape route walkdown
              description: |-
                ## Purpose
                On a platform the distance between the wellbay, the separators and the temporary refuge is a matter of metres, and the plot plan explains why equipment sits where it does. Learning the decks, fire zones, escape routes and muster points on paper before the first trip, then walking them offshore, makes every later design and work-pack decision safer.

                ## Milestones
                1. Deck plot plans and the escape and evacuation drawing for each level printed or saved offline.
                2. Fire and blast zones, hazardous area classification and the temporary refuge marked on the plans.
                3. Every deck walked offshore with the primary and secondary escape routes followed.
                4. A personal annotated layout set kept for planning work packs.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An annotated plot plan set showing zones, escape routes and muster points exists and every deck has been walked offshore."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the deck plot plans and the escape and evacuation drawing"
                - "Mark the temporary refuge, lifeboats and muster points on each deck"
                - "Overlay the hazardous area classification drawing on the cellar and main decks"
                - "Walk every escape route on your first day offshore with the medic or safety lead"
            - name: Topsides document set for offline use
              description: |-
                ## Purpose
                Satellite links fail and offshore laptops are often locked down, so the engineer who needs a P&ID at 2 a.m. in the control room wants it already to hand. A curated, current set of the key topsides documents saves calls to the beach and stops people working from a superseded marked-up print found in a drawer.

                ## Milestones
                1. A list of the twenty to forty documents you use most, with current revision numbers.
                2. P&IDs, cause and effect charts, the ESD hierarchy, layout drawings and the weight report included.
                3. The set synced to an approved offline location on your work device.
                4. A revision check that replaces superseded documents when the register changes.

                ## Notes
                Keep offline copies only where your company's information rules allow. Mark printed copies uncontrolled.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An offline set of at least twenty current topsides documents, each with its revision logged against the document register."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the documents you opened most on the last two work packs"
                - "Download current revisions of the P&IDs and cause and effect charts"
                - "Sync the set to the approved offline folder on your laptop"
                - "Compare your offline set against the document register @recurring(monthly:11)"
            - name: One-page topsides systems map
              description: |-
                ## Purpose
                Think of a platform as a chain: wells into the manifold, separation, gas compression and export, oil or condensate export, produced water treatment, then utilities such as power, fuel gas, instrument air, seawater and firewater. Drawing that chain on one page, with design rates and the bottlenecks people talk about, gives you a mental model to hang every query on.

                ## Milestones
                1. A block diagram from wellheads to export with each major system shown.
                2. Design and current operating rates written beside each block.
                3. Utility systems and their main consumers drawn underneath.
                4. The map checked by an experienced operator or production engineer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A single-page systems map from wells to export, with rates and utilities, has been checked and signed off by an experienced operator."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the flow from wellheads to export using the process flow diagrams"
                - "Add design and current rates from the production report"
                - "Draw the utility systems and the equipment each one feeds"
                - "Ask a senior operator to mark what you got wrong"
            - name: Emergency role, POB and muster readiness
              description: |-
                ## Purpose
                Everyone on the persons on board list has an emergency role, a muster station and a lifeboat or evacuation seat. Visitors and engineers on short trips are the most likely to be unsure where to go when the alarm sounds, so knowing the alarm tones, your station and the rules for checking in and out is part of the job, not a formality.

                ## Milestones
                1. The installation's alarm tones and their meanings learned before arrival.
                2. Your muster station, lifeboat or evacuation seat and emergency role confirmed at induction.
                3. Your T-card or electronic POB check-in routine understood for every location change.
                4. At least one drill attended per trip with any confusion raised at the debrief.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Muster station, evacuation seat and emergency role are recorded for each trip, with one drill attended per hitch and issues raised."
                cadence: rolling
              tasks:
                - "Listen to the installation alarm tones in the induction material"
                - "Confirm your muster station and lifeboat seat at the offshore induction"
                - "Write your emergency role on the inside of your notebook"
                - "Raise any drill confusion at the debrief before leaving the muster point"
            - name: First trip offshore planning
              description: |-
                ## Purpose
                First mobilisations go wrong in small ways: a flight manifest without your name, a bag over the weight limit, a laptop that will not connect, a work scope nobody agreed. Planning the trip as a short project, with the scope, the people you need to meet and the travel steps written down, turns the first hitch into useful work rather than orientation.

                ## Milestones
                1. Trip dates, flight booking and bed space confirmed in writing by the logistics team.
                2. A written scope for the trip agreed with your supervisor and the offshore lead.
                3. Bag weight, prohibited items and check-in time rules read and followed.
                4. A short trip report filed within two working days of returning.

                ## Notes
                Start from the **Operational checklist** template for the travel and kit steps.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first trip happens on the planned dates with an agreed scope and a trip report filed within two working days of return."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask logistics to confirm your seat on the manifest and your bed space"
                - "Write a one-page scope for the trip and agree it with your supervisor"
                - "Read the heliport baggage limits and prohibited items list"
                - "File a trip report with findings and actions after you return"
            - name: Offshore and onshore contacts map
              description: |-
                ## Purpose
                Platform engineering runs through a small number of people: the offshore installation manager, the production supervisor, the maintenance lead, the onshore discipline engineers, logistics, the marine and aviation coordinators and the technical authorities. Knowing who decides what, and how to reach them during and outside a hitch, saves days on every query.

                ## Milestones
                1. A contacts sheet with names, roles, rotation pattern and best contact route.
                2. Technical authorities for structures, process, electrical, instruments and safety identified.
                3. The escalation route for urgent offshore technical queries written down.
                4. The sheet updated after every crew change that brings a new face.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contacts map naming at least twelve offshore and onshore roles, technical authorities and an urgent escalation route is kept current."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the offshore leadership team and their back-to-back opposites"
                - "Find the named technical authority for each engineering discipline"
                - "Write the route for urgent technical queries outside office hours"
                - "Add each new crew member's role and rotation after crew change"
            - name: Offshore kit and hitch packing list
              description: |-
                ## Purpose
                Forgotten safety glasses can be borrowed, but a forgotten prescription, laptop charger or field notebook costs a fortnight. A packing list tuned to your installation, with the personal protective equipment the operator issues and what you must bring, means you leave the house in ten minutes and arrive ready to work.

                ## Milestones
                1. The operator's issued and personal equipment lists read and reconciled.
                2. A packing list covering documents, devices, clothing, medicines and work tools.
                3. The bag weighed against the heliport limit before the first trip.
                4. The list revised after each of your first three hitches.

                ## Notes
                Start from the **Operational checklist** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal packing list exists, has been used for three hitches and revised after each one."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the offshore medic or admin what the installation issues on arrival"
                - "Write a packing list in five groups from documents to tools"
                - "Weigh the packed bag against the heliport limit"
                - "Add anything you missed on the last trip to the list"
            - name: Offshore work pack preparation routine
              description: |-
                ## Purpose
                Offshore hours are the most expensive hours in the project and bed space is scarce, so a job that arrives without its drawings, materials, isolations or lifting plan wastes a crew. A standard work pack routine, checked before the pack goes offshore, is how onshore engineers protect the people who have to execute it.

                ## Milestones
                1. A standard work pack contents list agreed with the offshore maintenance and construction leads.
                2. Each pack checked for scope, drawings, materials, permits, isolations, lift plans and risk assessment.
                3. Packs issued to offshore at least two weeks ahead of the planned start.
                4. Rejected or returned packs logged with the reason and fixed at source.

                ## Notes
                Start from the **Operational checklist** template for the contents list.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every work pack issued offshore in a quarter passes the contents check and arrives at least two weeks before its planned start."
                cadence: rolling
              tasks:
                - "Agree the work pack contents list with the offshore leads"
                - "Check each pending pack against the contents list before issue"
                - "Review packs due offshore in the next three weeks for gaps @recurring(weekly:tue)"
                - "Log the reason for every pack returned from offshore"
            - name: Bed space and POB planning for engineering scope
              description: |-
                ## Purpose
                Most platforms have a fixed number of beds and a persons on board limit set by the evacuation means, and production, drilling, maintenance and projects all compete for them. Engineering scope that is not in the POB plan does not happen, so keeping your demand visible and realistic weeks ahead is part of delivering anything offshore.

                ## Milestones
                1. The installation's POB limit and the current bed allocation by department understood.
                2. Your scope's people, durations and skills entered in the POB forecast.
                3. Clashes with drilling, maintenance or other projects resolved before mobilisation.
                4. Actual versus planned bed nights compared after each trip.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Engineering bed demand is in the POB forecast at least four weeks ahead, and actual against planned bed nights is recorded each month."
                cadence: rolling
              tasks:
                - "Ask the logistics coordinator for the POB limit and forecast format"
                - "Enter your next two trips with names, roles and durations"
                - "Update the six-week POB forecast for engineering scope @recurring(weekly:thu)"
                - "Compare planned and actual bed nights for last month"
            - name: Weekly offshore and onshore engineering call
              description: |-
                ## Purpose
                Queries from the platform and decisions from the beach drift apart when they live only in email. A short weekly call with a fixed agenda (open technical queries, work packs due, defects on safety critical equipment, logistics and next week's priorities) keeps both sides working from the same list.

                ## Milestones
                1. A thirty-minute weekly slot agreed with the offshore leads on both rotations.
                2. A standing agenda covering queries, packs, defects, logistics and priorities.
                3. Actions recorded with owners and dates and sent within the day.
                4. Ten consecutive calls held with open actions carried forward.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten consecutive weekly calls are held with notes and an action list issued the same day for each."
                cadence: rolling
              tasks:
                - "Agree a fixed weekly slot that suits both offshore rotations"
                - "Write the standing agenda and share it with attendees"
                - "Run the offshore engineering call and issue actions the same day @recurring(weekly:wed)"
                - "Close or re-date every action older than four weeks"
            - name: Topsides weight and centre of gravity register
              description: |-
                ## Purpose
                Jackets and their topsides were designed for a weight and centre of gravity, and decades of modifications, temporary equipment and laydown creep the numbers upwards. A maintained weight register, updated for every addition and removal, is the evidence that the structure, the deck and any future lift remain within the design basis.

                ## Milestones
                1. The latest weight report located and its baseline weight and centre of gravity noted.
                2. Every modification since the report listed with added and removed weights.
                3. Temporary equipment and laydown loads tracked separately from permanent items.
                4. A monthly register update shared with the structural technical authority.

                ## Notes
                Start from the **Metrics log** template. Weight control practice is set out in industry standards such as ISO 19901-5; use your company's procedure where it exists.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weight register with baseline, modifications and temporary loads is updated monthly and shows margin against the design weight."
                cadence: rolling
              tasks:
                - "Find the latest weight report and note the baseline weight and centre of gravity"
                - "List every modification since that report with its weight change"
                - "Update the weight register and margin for the month @recurring(monthly:8)"
                - "Send the margin summary to the structural technical authority"
            - name: Structural inspection findings tracker
              description: |-
                ## Purpose
                Underwater inspections, splash zone surveys and topsides steel checks produce findings: marine growth over the limit, anode depletion, dents, cracked welds, corroded handrails and gratings. A single tracker that ranks each finding and follows it to closure is what turns an inspection report into a safer structure rather than a filed PDF.

                ## Milestones
                1. Open findings from the last underwater and topsides inspections entered in one tracker.
                2. Each finding ranked by structural consequence with the technical authority.
                3. Owners and target dates set for every high-ranked finding.
                4. Closed findings verified by inspection or photograph and marked closed.

                ## Notes
                Start from the **Remediation plan** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All structural findings from the last inspection cycle sit in one ranked tracker, with every high-ranked item owned and dated."
                cadence: rolling
              tasks:
                - "Collect the last underwater and topsides inspection reports"
                - "Enter every open finding in one tracker with location and photograph"
                - "Rank the findings with the structural technical authority"
                - "Review overdue structural findings with their owners @recurring(monthly:19)"
            - name: Marine and aviation logistics lookahead
              description: |-
                ## Purpose
                Material reaches the platform by supply vessel and people by helicopter or crew boat, each on its own schedule and weather window. A rolling three-week lookahead that ties work packs to cargo sailings and flights catches the missing pallet or the oversized lift before the crew is standing idle.

                ## Milestones
                1. Supply vessel and flight schedules for the installation obtained.
                2. Every planned work pack linked to the sailing or flight that carries its material and people.
                3. Oversize, heavy or dangerous goods flagged to marine logistics early.
                4. Weather-driven slips recorded with the knock-on effect on scope.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A three-week lookahead links every planned offshore job to its cargo and travel, and is refreshed monthly with slips recorded."
                cadence: rolling
              tasks:
                - "Ask marine logistics for the supply vessel schedule and cargo cut-off"
                - "Link each planned work pack to its sailing and flight"
                - "Refresh the three-week logistics lookahead and flag gaps @recurring(monthly:3)"
                - "Send dangerous goods paperwork to logistics before the cut-off"
            - name: Crew change handover notes
              description: |-
                ## Purpose
                Platforms run on back-to-back rotations, and the knowledge in one engineer's head leaves on the helicopter. A short, structured handover at every crew change (open jobs, live permits you raised, defects, promises made, what is due next) stops the incoming person rediscovering the last fortnight.

                ## Milestones
                1. A handover format agreed with your back-to-back.
                2. Handover written before the last day of every hitch.
                3. A call or face-to-face overlap held whenever the rotation allows.
                4. Items carried over three hitches escalated rather than handed over again.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written handover exists for every crew change in six months, and no item has been carried over more than three times without escalation."
                cadence: rolling
              tasks:
                - "Agree a one-page handover layout with your back-to-back"
                - "List live permits, open jobs and promises in the handover"
                - "Hold a twenty-minute handover call with your back-to-back"
                - "Escalate any item handed over three times in a row"
            - name: Safety critical element defects and deferrals watch
              description: |-
                ## Purpose
                Fire pumps, emergency shutdown valves, gas detectors, lifeboats and the temporary refuge are only barriers if they work to their performance standard. Defects and deferred tests on these items erode the safety case quietly, so an engineer who watches the list and pushes for repair or a recorded risk assessment is doing real safety work.

                ## Milestones
                1. The current list of open defects and deferred tests on safety critical elements obtained.
                2. Each item matched to its performance standard and the hazard it protects against.
                3. Deferrals without an approved risk assessment raised with the asset owner.
                4. A monthly count of open items reported with the trend.

                ## Notes
                Never treat a deferral as permission to forget. Each one should carry a reason, an approval, a mitigation and a date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Open safety critical element defects and deferrals are reported monthly, and every deferral has an approved risk assessment and due date."
                cadence: rolling
              tasks:
                - "Pull the open safety critical element defects and deferrals from the maintenance system"
                - "Match each item to its performance standard"
                - "Report open safety critical deferrals and the trend to the asset owner @recurring(monthly:24)"
                - "Raise any deferral that lacks an approved risk assessment"
            - name: Offshore technical query log
              description: |-
                ## Purpose
                Platform crews raise technical queries every day: can this valve be swapped for that one, is this corrosion acceptable, may we run the compressor with this alarm inhibited. A log with a turnaround target and a clear answer for each query builds trust offshore and stops the same question being answered three different ways.

                ## Milestones
                1. A query log with a number, date raised, raiser, discipline, answer and date closed.
                2. A turnaround target agreed for routine and urgent queries.
                3. Every answer recorded in writing, with any change routed through management of change.
                4. Monthly turnaround statistics shared with the offshore leads.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every offshore technical query has a logged written answer, and monthly figures show the agreed turnaround met for at least 80 percent."
                cadence: rolling
              tasks:
                - "Set up a numbered technical query log with the core columns"
                - "Agree routine and urgent turnaround targets with the offshore leads"
                - "Report query turnaround and the oldest open queries @recurring(monthly:14)"
                - "Route any answer that changes plant or procedure into management of change"
            - name: Reading jacket and topsides structural drawings
              description: |-
                ## Purpose
                Jacket elevations, framing plans at each horizontal level, node details, deck framing and module support drawings use conventions that onshore engineers rarely meet. Being able to find a member, its size and its connection on the drawings is the starting point for assessing any finding, clamp, new load or dropped object.

                ## Milestones
                1. The structural drawing index for the installation located.
                2. Jacket legs, rows, levels and member numbering understood on the elevations.
                3. Three inspection findings located on the drawings with member size and joint type.
                4. A new deck load traced from plate to beam to column to leg on paper.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three structural findings and one new deck load have been located and traced on the installation's structural drawings and checked by a structural engineer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Open the structural drawing index and print the jacket elevations"
                - "Learn the leg, row and level numbering used on the drawings"
                - "Locate three recent inspection findings on the drawings"
                - "Ask a structural engineer to check your load path sketch"
            - name: Metocean data and design conditions
              description: |-
                ## Purpose
                Wave height, wave period, current, wind and water depth set the loads on the jacket, the air gap under the deck and the weather windows for boats, cranes and helicopters. Knowing where your installation's metocean design basis sits and what return periods it uses lets you judge an air gap question or a campaign weather risk on evidence.

                ## Milestones
                1. The metocean design basis document for the installation obtained.
                2. Operating and extreme wave, wind and current values summarised by return period.
                3. The deck air gap compared with the extreme crest elevation in the latest assessment.
                4. Weather limits for crane lifts, helicopter flights and vessel operations listed beside the data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the installation's metocean design values and operating weather limits is filed and checked by a structural or marine engineer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request the metocean design basis from the structural technical authority"
                - "Summarise wave, wind and current by return period on one page"
                - "Note the air gap margin from the latest structural assessment"
                - "List the weather limits for lifts, flights and vessel work"
            - name: Offshore lifting operations for engineers
              description: |-
                ## Purpose
                Almost everything a project brings offshore is lifted by the platform crane from a moving supply vessel, and a mistake in weight, rigging or lift category puts people below at risk. Engineers who understand lift planning, certified cargo carrying units, crane capacity charts and laydown areas design modifications that can actually be installed.

                ## Milestones
                1. The installation's lifting operations procedure and lift categories read.
                2. The platform crane load charts and radius limits understood for your laydown areas.
                3. One lift plan for a project item reviewed with the crane operator or lifting engineer.
                4. Item weights and lifting points shown on every design deliverable you issue.

                ## Notes
                Lift planning is done by competent lifting personnel under the operator's procedure. Your part is accurate weights, centres of gravity and lifting points.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One project lift plan has been reviewed with a lifting engineer and all subsequent design deliverables show weight and lifting points."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the installation's lifting operations procedure"
                - "Mark the crane radius limits on your laydown area drawing"
                - "Review one lift plan with the crane operator or lifting engineer"
                - "Add weight and lifting points to your design deliverable checklist"
            - name: Fire, blast and ESD philosophy on a platform
              description: |-
                ## Purpose
                In a confined offshore module a gas release can become a jet fire or an explosion in seconds, so platforms rely on fire and gas detection, emergency shutdown and blowdown, deluge, passive fire protection and blast walls. Knowing the philosophy behind your installation's systems helps you spot when a modification weakens them.

                ## Milestones
                1. The fire and gas philosophy and ESD philosophy documents read for your installation.
                2. The ESD levels and what each one shuts down written as a simple hierarchy.
                3. Passive fire protection and blast wall locations marked on the layout drawings.
                4. One recent modification checked against these philosophies with technical safety.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An ESD hierarchy and annotated fire protection layout are produced and one modification has been checked against them with technical safety."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the fire and gas and ESD philosophy documents"
                - "Draw the ESD hierarchy with what each level trips"
                - "Mark passive fire protection and blast walls on the layout"
                - "Walk one recent modification through the philosophies with technical safety"
            - name: Splash zone corrosion and cathodic protection basics
              description: |-
                ## Purpose
                Below the waterline a jacket is protected by anodes or impressed current, and above it by coatings, but the splash zone between the two takes the worst of both and is the hardest to inspect. Understanding how cathodic protection surveys, anode depletion and coating breakdown are reported helps you read inspection results and plan repairs.

                ## Milestones
                1. The cathodic protection design basis and last survey results obtained.
                2. Anode depletion and protection potential readings explained in your own words.
                3. Splash zone coating condition from the last survey summarised by leg and level.
                4. Questions on remaining anode life raised with the corrosion engineer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note summarising cathodic protection status, anode life and splash zone condition for the installation is reviewed by a corrosion engineer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request the cathodic protection design basis and the last survey report"
                - "Summarise anode depletion and potential readings by leg"
                - "Note the splash zone coating condition by level"
                - "Ask the corrosion engineer about remaining anode life"
            - name: Risers, caissons and conductors condition overview
              description: |-
                ## Purpose
                Risers, J-tubes, seawater and disposal caissons and well conductors hang from or clamp to the jacket, pass through the splash zone and are easy to forget until a clamp fails or a caisson drops. Building one overview of every one of them, with its supports, last inspection and known defects, closes a gap that often sits between the structural, pipeline and wells teams.

                ## Milestones
                1. Every riser, J-tube, caisson and conductor listed with its function and owner.
                2. Clamps, guides and supports for each item located on the structural drawings.
                3. Last inspection date and known defects recorded against each item.
                4. Items with no clear owner or overdue inspection raised with the asset owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An overview lists every riser, caisson and conductor with owner, supports, last inspection and defects, and unowned items are raised with the asset owner."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List every riser, J-tube, caisson and conductor on the installation"
                - "Locate the clamps and guides for each one on the structural drawings"
                - "Record the last inspection date and any defects against each item"
                - "Raise items with no owner or an overdue inspection with the asset owner"
            - name: Helideck and helicopter operations awareness
              description: |-
                ## Purpose
                The helideck is the platform's front door, and its certification depends on things engineers can affect: obstacles near the landing area, turbulence from exhausts and new structures, lighting, firefighting equipment and the surface itself. A new module or vent stack in the wrong place can restrict flights, so knowing the rules early avoids an expensive surprise.

                ## Milestones
                1. The helideck certificate, limitations and the governing helideck standard identified.
                2. The obstacle-free sector and limited obstacle sector drawn on the layout.
                3. Exhaust and vent plumes near the helideck listed with any known turbulence restrictions.
                4. A helideck check added to the design review checklist for modifications.

                ## Notes
                Many operators follow CAP 437 or a national equivalent. Your aviation adviser decides what applies.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The helideck sectors are drawn on the layout and a helideck check sits in the modification design review checklist."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the aviation adviser for the helideck certificate and limitations"
                - "Draw the obstacle sectors on the top deck layout"
                - "List exhausts and vents within range of the helideck"
                - "Add a helideck clearance question to the design review checklist"
            - name: Dropped objects prevention on topsides
              description: |-
                ## Purpose
                Dropped objects remain one of the most frequent causes of serious injury offshore, from a loose bolt at height to a scaffold clip or a lift that swings into steelwork. Engineers reduce the risk at the design stage by specifying secured fixings, safety nets and lanyard points, and by keeping new items clear of crane paths.

                ## Milestones
                1. The installation's dropped objects register or survey results obtained.
                2. Equipment at height in your design scope checked for secondary retention.
                3. Crane paths and lifting zones checked against new equipment locations.
                4. Dropped object findings from your scope fed back to the register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every design you issue in the year includes a dropped objects check, and findings are recorded in the installation register."
                cadence: rolling
              tasks:
                - "Read the latest dropped objects survey for the installation"
                - "Check items at height in your scope for secondary retention"
                - "Add a dropped objects line to your design checklist"
                - "Review the dropped objects register for items in your scope @recurring(quarterly)"
            - name: Brownfield modification space, weight and power check
              description: |-
                ## Purpose
                Most offshore engineering is brownfield: adding a pump, a skid or a new tie-in to a deck that was full twenty years ago. Before anyone draws a detailed design, three questions decide feasibility: is there deck space with access, does the structure and weight register have margin, and is there spare power, cooling and instrument capacity.

                ## Milestones
                1. The proposed modification's footprint, weight and utility demand estimated.
                2. Candidate locations checked for access, escape routes and hazardous area class.
                3. Weight margin and local structural capacity confirmed with the structural engineer.
                4. Spare electrical load, instrument air and control system capacity confirmed.
                5. A feasibility note recording the preferred location and the open risks.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A feasibility note names a preferred location with confirmed space, weight, structural and utility margins, and lists open risks."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Estimate the footprint, weight and utility demand of the modification"
                - "Walk the candidate locations on the plot plan with an operator"
                - "Ask the structural engineer for local deck capacity at each location"
                - "Check spare electrical load and control system capacity"
                - "Write the feasibility note with the preferred location"
            - name: Walk-to-work vessel or helicopter campaign choice
              description: |-
                ## Purpose
                For a large maintenance or construction campaign, bed space on the platform is often the constraint, and a walk-to-work vessel with a motion-compensated gangway can add dozens of beds. The choice against helicopter shuttles and flotels turns on cost per productive hour, weather downtime, POB limits and how the vessel fits around production and drilling.

                ## Milestones
                1. Campaign scope converted to bed nights and productive hours needed.
                2. Helicopter shuttle, walk-to-work vessel and flotel options costed on the same basis.
                3. Weather downtime and gangway limits estimated for the campaign season.
                4. A recommendation recorded with the assumptions and risks behind it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded recommendation compares at least two accommodation options on cost per productive hour, downtime and POB impact."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Convert the campaign scope into bed nights and productive hours"
                - "Get indicative rates for vessel, flotel and helicopter options"
                - "Estimate weather downtime for the campaign window"
                - "Write the recommendation with its assumptions"
            - name: Deck space and laydown area plan
              description: |-
                ## Purpose
                Laydown space on a platform is fought over by scaffolding, containers, project materials, drilling equipment and waste skips, and overloaded or blocked laydown causes structural, escape route and crane problems. A plan with marked areas, rated deck loads and owners keeps the decks safe and the projects moving.

                ## Milestones
                1. Every laydown area drawn on the plot plan with its rated deck load.
                2. Each area given an owner and an allowed use.
                3. Escape routes and firefighting access kept clear on the plan.
                4. A walkdown comparing the plan with what is actually on deck.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A laydown plan with rated loads, owners and clear escape routes is issued and checked against the deck in one walkdown."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Mark every laydown area and its rated deck load on the plot plan"
                - "Agree an owner and allowed use for each area"
                - "Check that escape routes and fire access stay clear"
                - "Walk the laydown areas and compare them with the plan @recurring(monthly:27)"
            - name: Power generation and fuel gas margin review
              description: |-
                ## Purpose
                Offshore power usually comes from gas turbine or reciprocating generators burning fuel gas, and every new consumer eats into a margin that also has to cover a generator trip. Reviewing the load list, running configuration and fuel gas quality shows how much the platform can still take before the next modification needs a new generator or load shedding.

                ## Milestones
                1. The current electrical load list and generator ratings collected.
                2. Running and spare generation capacity worked out for normal and one-generator-down cases.
                3. Fuel gas supply and quality issues affecting generation noted.
                4. A margin statement issued to the projects team for future modifications.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A margin statement gives spare generation capacity in normal and one-generator-down cases and is issued to the projects team."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect the latest electrical load list and generator ratings"
                - "Calculate spare capacity with one generator out of service"
                - "Ask operations about fuel gas quality problems on the generators"
                - "Issue the margin statement to the projects team"
            - name: Laser scan and 3D model of the topsides
              description: |-
                ## Purpose
                As-built drawings on older platforms are often wrong, and a clash found offshore costs far more than one found on screen. A point cloud laser scan of congested modules, tied to a 3D model, lets engineers design brownfield work onshore and cut the number of survey trips.

                ## Milestones
                1. The areas where poor as-built data has caused rework identified.
                2. Scope, accuracy and deliverables for a scan defined.
                3. Scan cost compared with the survey trips and rework it would avoid.
                4. A decision recorded, with the data hosting and update plan if approved.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a topsides laser scan, with cost compared against avoided survey trips and rework."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List modifications where as-built errors caused rework offshore"
                - "Define scan areas and the accuracy needed"
                - "Compare scan cost with avoided survey trips"
                - "Record the decision and who maintains the scan data"
            - name: Remote monitoring to cut offshore trips
              description: |-
                ## Purpose
                Every trip offshore for a reading, a photograph or a simple check costs a seat, a bed and exposure to helicopter travel. Wireless sensors, corrosion probes, cameras and remote access to control system data can replace a share of those trips, but only where the data is trusted and someone looks at it.

                ## Milestones
                1. Last year's engineering trips analysed for those made only to collect information.
                2. Candidate measurements ranked by trips avoided and installation difficulty.
                3. Cybersecurity and hazardous area requirements for new devices confirmed.
                4. A pilot of one remote measurement approved, with an owner for the data.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One remote monitoring pilot is approved, justified by trips avoided, with cybersecurity and hazardous area requirements confirmed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List last year's trips made only to collect readings or photographs"
                - "Rank candidate measurements by trips avoided"
                - "Check device requirements with the control systems and electrical leads"
                - "Propose one pilot with a named data owner"
            - name: Brownfield construction campaign plan
              description: |-
                ## Purpose
                A modification designed onshore becomes a campaign offshore: prefabrication, cargo, scaffolding, hot work, tie-ins during a shutdown window and a crew that must fit in the bed plan. Planning the campaign as an integrated schedule, with offshore productivity rates that reflect weather, permits and travel, is what makes the date believable.

                ## Milestones
                1. Campaign scope broken into work packs with offshore man-hours.
                2. Offshore productivity factors agreed for permits, weather and travel days.
                3. Schedule integrated with shutdowns, drilling, logistics and POB limits.
                4. Readiness review held before mobilisation with all work packs issued.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The campaign mobilises after a readiness review with all work packs issued and an integrated schedule agreed with operations."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Break the campaign scope into work packs with man-hours"
                - "Agree offshore productivity factors with the construction lead"
                - "Integrate the schedule with shutdown, drilling and POB plans"
                - "Hold a readiness review two weeks before mobilisation"
            - name: SIMOPS plan for drilling, production and construction
              description: |-
                ## Purpose
                When a drilling rig works over a producing platform while a construction crew is on deck, the hazards of each activity combine: dropped objects over live wells, hot work near hydrocarbons, crane conflicts and confused emergency roles. A SIMOPS plan sets out who controls what, which combinations are allowed and what stops when an alarm sounds.

                ## Milestones
                1. All activities planned for the period listed with their location and hazards.
                2. A SIMOPS matrix stating which combinations are allowed, restricted or prohibited.
                3. Controlling authority, communication lines and emergency roles agreed.
                4. The plan briefed to every crew and reviewed when scope changes.

                ## Notes
                Start from the **Risk register** template for the hazard list. Anyone may stop the job if conditions differ from the plan.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An approved SIMOPS plan with a matrix, controlling authority and emergency roles is briefed to every crew before overlapping work starts."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List every activity planned on the installation for the period"
                - "Build the SIMOPS matrix with drilling, production and construction leads"
                - "Agree who holds authority for each combination of work"
                - "Brief the plan at each crew's toolbox talk"
            - name: Platform shutdown window scope
              description: |-
                ## Purpose
                Some offshore work, such as tie-ins, valve replacements on main process lines or structural work near hydrocarbons, can only be done with production stopped. Shutdown days are costly in lost production, so the scope must be frozen early, sequenced tightly and backed by materials already offshore.

                ## Milestones
                1. Every job needing a shutdown identified across projects and maintenance.
                2. A frozen scope with durations and critical path agreed with operations.
                3. Materials and pre-work completed offshore before the window opens.
                4. Restart checks and a lessons note completed after the window.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The shutdown completes its frozen scope within the planned window, with restart checks done and a lessons note issued."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Collect every job that needs a production shutdown"
                - "Agree the frozen scope and critical path with operations"
                - "Confirm materials for shutdown jobs are offshore before the window"
                - "Write the lessons note within two weeks of restart"
            - name: Underwater structural inspection campaign
              description: |-
                ## Purpose
                The jacket below the waterline is inspected by ROV or divers on a cycle set by the structural integrity strategy, looking at marine growth, anodes, scour, debris, flooded members and selected welds. A well-planned campaign gets the right scope done in a short vessel window and returns data the structural engineer can use.

                ## Milestones
                1. Inspection scope set from the integrity strategy and the last campaign's findings.
                2. Vessel, ROV or diving contractor and weather window booked.
                3. Inspection procedure and reporting format agreed before mobilisation.
                4. Results reviewed and new findings entered in the structural tracker.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The underwater inspection completes its planned scope and every new finding is entered in the structural tracker within a month."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set the inspection scope from the structural integrity strategy"
                - "Book the vessel and inspection contractor for the weather window"
                - "Agree the inspection procedure and report format"
                - "Enter new findings in the structural tracker after the campaign"
            - name: Hurricane season shut-in and evacuation readiness
              description: |-
                ## Purpose
                Platforms in the Caribbean, the Gulf of Mexico and other storm regions may need to shut in production, secure the topsides and evacuate everyone ahead of a hurricane. Engineers own parts of that plan: securing temporary equipment and scaffolds, the safe shut-in state, and the post-storm inspection that decides when crews can return.

                ## Milestones
                1. The installation's hurricane or severe weather plan read and your role confirmed.
                2. Temporary equipment, scaffolds and laydown items that must be secured listed.
                3. Shut-in sequence and post-storm restart checks reviewed with operations.
                4. A post-storm structural and topsides inspection checklist ready before the season.

                ## Notes
                Evacuation decisions belong to the installation manager and the onshore emergency team. Engineering readiness supports them; it does not replace them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Before each hurricane season, a securing list and post-storm inspection checklist are agreed with operations and your role in the plan is confirmed."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Read the severe weather plan and confirm your role"
                - "List temporary equipment and scaffolds that must be secured"
                - "Review the shut-in and restart sequence with operations"
                - "Run the pre-season hurricane readiness review with operations @recurring(yearly)"
            - name: Module installation by heavy lift vessel
              description: |-
                ## Purpose
                Installing a new module or replacing a large item may need a heavy lift vessel, with a weight and centre of gravity that must be known to within a few percent, lifting points designed into the structure and a sea fastening and lift plan approved by a marine warranty surveyor. Getting the engineering interfaces right months ahead is what keeps an expensive vessel day on schedule.

                ## Milestones
                1. Module weight and centre of gravity confirmed by weighing and checked against the design.
                2. Lifting points, rigging and set-down structure verified by calculation.
                3. Sea fastening, transport and lift procedures approved by the marine warranty surveyor.
                4. Offshore hook-up scope ready to start the day after set-down.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The module is set down within the planned vessel window with warranty surveyor approval and hook-up starting as planned."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Schedule the module weighing at the fabrication yard"
                - "Check lifting point and set-down calculations with the structural engineer"
                - "Send the lift and transport procedures to the marine warranty surveyor"
                - "Prepare the hook-up work packs before the vessel sails"
            - name: Graduate engineer's first year offshore
              description: |-
                ## Purpose
                A graduate on a platform learns fast but can feel lost between operators who know the plant and onshore engineers who know the drawings. A 30, 60 and 90 day plan with a mentor, a set of systems to trace and one small job to own makes the first year count and gives evidence for later professional registration.

                ## Milestones
                1. A mentor named offshore and another onshore.
                2. Three topsides systems traced end to end and checked by an operator.
                3. One small modification or study owned from query to close-out.
                4. Offshore experience recorded in your competence log for registration.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days three systems are traced and checked and one small job is owned, with entries in the competence log."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your supervisor to name an offshore and an onshore mentor"
                - "Pick three systems to trace on your next hitch"
                - "Agree one small job you will own to close-out"
                - "Log your offshore experience in the competence record @recurring(monthly:29)"
            - name: Rotation life and family planning
              description: |-
                ## Purpose
                Rotational work on a fourteen-on, fourteen-off or longer pattern means missing birthdays, school events and sometimes emergencies at home, with storms and helicopter delays stretching hitches. Planning the year around the rota, and agreeing how home will run and how to reach you, protects both the family and your focus offshore.

                ## Milestones
                1. The year's rotation dates shared on a family calendar.
                2. Key family events checked against the rota and swaps requested early.
                3. An emergency contact route via the onshore office written down for the household.
                4. A short check-in after each hitch on what worked at home.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The year's rota is on the family calendar, swaps for key events are requested, and the household holds the emergency contact route."
                cadence: cyclic
              tasks:
                - "Put this year's rotation dates on the family calendar"
                - "Check the next quarter's rota against family events and request swaps @recurring(quarterly)"
                - "Give the household the onshore emergency contact number"
                - "Hold a short home check-in after each hitch"
            - name: Onshore support engineer for several platforms
              description: |-
                ## Purpose
                Many engineers support a group of platforms from the office, going offshore a few times a year. The risk is a queue of queries with no feel for each installation, so a simple portfolio view of each platform's open items, upcoming campaigns and known weak spots keeps support fair and informed.

                ## Milestones
                1. A one-line profile for each supported platform with age, manning and main systems.
                2. Open queries, packs and findings listed per platform.
                3. A visit plan giving each platform at least one trip a year.
                4. A quarterly summary sent to each installation lead.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each supported platform has a profile, an open items list and a planned visit, with a quarterly summary sent to its lead."
                cadence: rolling
              tasks:
                - "Write a one-line profile for each platform you support"
                - "List open queries and findings per platform"
                - "Plan at least one visit a year to each platform"
                - "Send each installation lead a summary of open items @recurring(quarterly)"
            - name: Contractor engineer on an offshore campaign
              description: |-
                ## Purpose
                Contractor engineers arrive on someone else's installation with their own company procedures, a fixed scope and little time to learn the operator's systems. Clarifying which permit, management of change and document rules apply, and who signs what, before mobilising avoids the most common conflicts on a campaign.

                ## Milestones
                1. The bridging document between contractor and operator procedures obtained and read.
                2. Your scope, deliverables and approval routes confirmed with the operator's engineer.
                3. Operator inductions, system access and document access sorted before mobilising.
                4. Daily progress and any scope change recorded in the agreed format.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Before mobilising, the bridging document is read and your scope and approval routes are confirmed in writing with the operator's engineer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask for the bridging document between the two companies' procedures"
                - "Confirm your scope and approval routes with the operator's engineer"
                - "Complete the operator's inductions and system access requests"
                - "Record any scope change in writing on the day it arises"
            - name: Moving from an onshore plant to offshore
              description: |-
                ## Purpose
                Engineers from refineries, gas plants or petrochemical sites already know process safety and equipment, but offshore changes the constraints: weight and space matter, everything travels by boat or air, escape is by lifeboat and the crew lives where it works. Naming the differences early speeds up the transition and avoids designing as if a truck could reach the site.

                ## Milestones
                1. A list of the main design and operating differences between your old site and the platform.
                2. One offshore design or work pack reviewed by an experienced offshore engineer.
                3. Offshore-specific training gaps identified and booked.
                4. A note on what transferred well from onshore and what did not after six months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A differences list and a six-month transition note exist, and at least one offshore deliverable has been reviewed by an experienced offshore engineer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List ten differences between your onshore site and the platform"
                - "Ask an experienced offshore engineer to review your first work pack"
                - "Book any offshore-specific training you are missing"
                - "Write the six-month transition note"
            - name: Stepping up to facility or installation engineer
              description: |-
                ## Purpose
                The facility engineer on a platform becomes the technical point of contact for everything: queries, defects, modifications, campaigns and the integrity of the structure. Taking the role well means agreeing its boundaries, the authority you hold and the onshore support you can call on, and building the handful of registers that make the job manageable.

                ## Milestones
                1. A role description agreed with your manager, including signing authority and limits.
                2. The registers you own listed: queries, findings, deferrals, weight and modifications.
                3. Named onshore technical authorities confirmed for each discipline.
                4. A first-year plan with three improvements you will deliver.

                ## Notes
                Know what you are authorised to approve and what must go to a technical authority. Say so plainly when asked to sign outside it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off role description, list of owned registers and a first-year plan with three named improvements exist within sixty days."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft your role description with signing limits"
                - "List the registers you will own and their current state"
                - "Confirm the onshore technical authority for each discipline"
                - "Pick three improvements for your first year and agree them"
            - name: Structural reassessment for life extension
              description: |-
                ## Purpose
                Many platforms are operating past their original design life, and continuing safely needs evidence: an updated structural assessment using current metocean data, inspection results, as-is weights and any damage. Assessment approaches in standards such as API RP 2A or ISO 19902 give the framework; your job is to make sure the inputs are true and the conclusions acted on.

                ## Milestones
                1. Assessment triggers identified, such as life extension, added weight or damage.
                2. Inputs assembled: metocean, inspection data, weight register and soil data.
                3. Assessment scope and acceptance criteria agreed with the structural technical authority.
                4. Assessment results and required mitigations recorded with owners.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A structural reassessment is complete with inputs documented, acceptance criteria stated and every required mitigation owned and dated."
                cadence: phased
                effort_hours_estimate: "150"
              tasks:
                - "List the triggers that require a structural reassessment"
                - "Assemble metocean, inspection, weight and soil inputs"
                - "Agree the assessment scope and criteria with the technical authority"
                - "Track each mitigation from the assessment to closure"
            - name: Jacket fatigue and reserve strength review
              description: |-
                ## Purpose
                Tubular joints fatigue under millions of wave cycles, and older jackets were designed with less knowledge of joint stress concentrations than today. Reviewing fatigue lives and the reserve strength ratio from pushover analysis shows which joints deserve inspection and how much damage the structure can tolerate before it becomes critical.

                ## Milestones
                1. Joints with the shortest calculated fatigue lives listed.
                2. Inspection history of those joints compared with their fatigue ranking.
                3. Reserve strength ratio and failure sequence understood from the latest analysis.
                4. Inspection scope adjusted to target the critical joints.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of fatigue-critical joints is compared with inspection history and reflected in the next inspection scope."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Extract the joints with the shortest fatigue lives from the analysis"
                - "Compare their inspection history with the ranking"
                - "Review the pushover results and failure sequence"
                - "Feed the critical joints into the next inspection scope"
            - name: Ship collision and dropped object structural assessment
              description: |-
                ## Purpose
                Supply vessels work alongside the jacket every day, and a collision or a heavy object dropped from a crane can dent legs, sever braces or damage risers. Knowing the design collision energy, which members are critical and how to assess damage quickly turns a frightening event into a controlled engineering response.

                ## Milestones
                1. The design vessel impact energy and protected zones found in the design basis.
                2. Riser and conductor protection and critical members identified on the drawings.
                3. A rapid damage assessment procedure for collisions and dropped objects agreed.
                4. Vessel approach and standby rules checked against the structural assumptions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A rapid damage assessment procedure for collisions and dropped objects is agreed with the structural technical authority and marine operations."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Find the design vessel impact energy in the structural design basis"
                - "Mark critical members and riser protection on the drawings"
                - "Draft a rapid damage assessment procedure"
                - "Check the vessel approach rules with marine operations"
            - name: Topsides blast and fire assessment after modifications
              description: |-
                ## Purpose
                Blast and fire studies were run for the platform as built, but new equipment, extra congestion or removed walls change explosion overpressures and fire exposure. Checking whether accumulated modifications invalidate those studies, and commissioning an update when they do, keeps the safety case honest.

                ## Milestones
                1. Modifications since the last blast and fire study listed by module.
                2. Changes in congestion, confinement and inventory screened with technical safety.
                3. A decision recorded on whether the study needs updating.
                4. Any updated results fed into the safety case and structural design loads.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded screening decision on updating the blast and fire study, based on all modifications since the last study."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List modifications in each module since the last blast study"
                - "Screen congestion and inventory changes with technical safety"
                - "Record the decision on updating the study"
                - "Send updated loads to the structural engineer if the study is rerun"
            - name: Normally unmanned installation strategy
              description: |-
                ## Purpose
                Converting a small platform to normally unmanned operation removes people from harm and cuts cost, but it changes everything engineers design for: remote control, reliability of equipment that must run between visits, maintenance campaigns, minimal facilities and walk-to-work access. Testing the idea against the real equipment list is the first step.

                ## Milestones
                1. Current manned tasks listed with how often they are done.
                2. Equipment needing redesign or removal for unattended operation identified.
                3. Visit frequency, access method and emergency arrangements outlined.
                4. A screening decision recorded with cost and safety arguments.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A screening decision on unmanned operation is recorded, with the task list, equipment changes and access method documented."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every manned task on the platform and its frequency"
                - "Identify equipment that cannot run unattended"
                - "Outline visit frequency and access method"
                - "Record the screening decision with cost and safety arguments"
            - name: Late life and decommissioning readiness
              description: |-
                ## Purpose
                Long before a platform stops producing, choices made today affect how it can be removed: what records exist, which hazardous materials are aboard, how conductors and risers are cleaned and isolated, and whether facilities can be reused. Building a late life file early makes the eventual decommissioning programme cheaper and safer.

                ## Milestones
                1. A late life file started with structural, weight, materials and well records.
                2. Known hazardous materials and naturally occurring radioactive material history noted.
                3. Regulatory decommissioning obligations for the jurisdiction identified with the regulatory team.
                4. Options for reuse, partial or full removal listed for later study.

                ## Notes
                Decommissioning obligations depend on the licence and jurisdiction. The regulatory and legal teams confirm what applies.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A late life file holds structural, weight, materials and well records, with regulatory obligations listed after review by the regulatory team."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Start a late life file with the structural and weight records"
                - "Record known hazardous materials and their locations"
                - "Ask the regulatory team to list decommissioning obligations"
                - "Add new records to the late life file after each campaign @recurring(yearly)"
---

# Offshore Platform Engineering

Offshore Platform Engineering is for engineers who design for, work on or support fixed platforms at sea, from the graduate packing for a first hitch to the facility engineer who answers for a thirty-year-old jacket and the campaign it is about to host. It starts with foundations (survival training and medicals, the safety case, your installation's layout and document set, emergency roles and the first trip), moves into the operating machinery of work packs, bed space, weight control, structural findings, logistics and handovers, then the skills of reading the structure, the sea and the topsides, the decisions about modifications and how people and kit get offshore, dated campaigns, shutdowns and hurricane shut-ins, the situations of rotation and contract life, and finally specialist work on life extension, fatigue, collision and late life.

The rhythm is set by the crew change: a handover at the end of every hitch, a weekly offshore and onshore engineering call, a monthly weight report, logistics lookahead and query log review, and quarterly and yearly checks on structural findings, certificates and hurricane readiness. The Operational checklist, Onboarding 30/60/90, Meeting notes, Metrics log, Remediation plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
