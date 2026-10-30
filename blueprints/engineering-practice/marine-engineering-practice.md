---
id: engineering-practice.marine-engineering-practice
name: Marine Engineering Practice
description: "Marine engineering as it is really done: knowing the machinery space, keeping the PMS, fuel, oil and emissions records straight, class surveys, dry-docks, overhauls and the step from cadet to chief or superintendent."
category: business
version: 1.0.0
tags: [engineering-practice, marine-engineering-practice, engineer, marine, ship-machinery, class-surveys, dry-docking, propulsion]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - vendor
    - development-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Marine Engineering Practice
          description: "Working as a marine engineer: ship and offshore machinery, propulsion and auxiliary systems, class surveys, dry-docking, maintenance records and shore-based roles."
          projects:
            - name: Marine rules and conventions reference set
              description: |-
                ## Purpose
                Almost every decision in an engine room traces back to a short list of instruments: SOLAS for machinery and fire safety, MARPOL Annexes I, IV, V and VI for oil, sewage, garbage and air, STCW for watchkeeping and competence, the ISM Code for the safety management system, plus the rules of the classification society the vessel is entered with. Knowing which editions and amendments are aboard, and where the company's own procedures sit against them, saves hours when a surveyor or inspector asks why something is done the way it is.

                ## Milestones
                1. A list of the conventions, codes and class rules held aboard or in the office, with edition and amendment status.
                2. The flag state circulars and class notations that apply to your vessel noted against that list.
                3. The safety management system chapters for the engine department located and read once.
                4. Any outdated or missing publication reported to the master or superintendent for replacement.

                ## Notes
                Many publications are now held electronically under a fleet licence. Check the licence covers the vessel you are on, since inspectors do ask for current editions.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference list of at least eight marine conventions, codes and class rule sets with editions, checked against what is held aboard."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the conventions and codes on the engine room bookshelf with their editions"
                - "Find the class society and notations on the vessel's class certificate"
                - "Read the engine department chapters of the safety management system"
                - "Report missing or outdated publications to the superintendent"
            - name: Certificate of competency and STCW document file
              description: |-
                ## Purpose
                A lapsed medical, an expired advanced firefighting course or a missing flag endorsement can stop you signing on, and the gap is usually discovered at the airport. Keeping your certificate of competency, endorsements, seafarer medical, STCW courses and sea service testimonials in one dated file means you see every expiry six months ahead.

                ## Milestones
                1. Every certificate, endorsement and course listed with issue and expiry dates.
                2. Scanned copies stored in two places, one of them reachable offline.
                3. Expiries in the next twelve months listed with the course or renewal booked.
                4. Sea service testimonials collected from every vessel since the last certificate.

                ## Notes
                Requirements differ by flag state and by the maritime administration that issued your certificate. Check renewal rules with that administration, not a crewing agent's summary.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A document file listing every certificate with expiry dates, scanned in two places, with all renewals due within a year booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather every certificate and endorsement into one folder"
                - "Write each issue and expiry date into a single table"
                - "Book the renewal or refresher course for anything expiring within a year"
                - "Ask each past vessel for a missing sea service testimonial"
                - "Check the document table for expiries in the next six months @recurring(quarterly)"
            - name: Tracing machinery systems on a new vessel
              description: |-
                ## Purpose
                Joining a ship you have never sailed on, the fastest way to become useful is to walk every system from tank to consumer with the piping diagrams in hand. Tracing fuel, lube oil, cooling water, compressed air, bilge and fire main within the first two weeks means you can isolate, line up and fault-find without asking where a valve is during an alarm.

                ## Milestones
                1. Fuel oil, lube oil, sea water, fresh water cooling, compressed air, bilge and fire main systems each walked end to end.
                2. Valve numbers and locations checked against the piping diagrams, with discrepancies marked up.
                3. A sketch of each system drawn from memory and checked against the drawing.
                4. Marked-up drawings handed to the chief engineer for the vessel's plan updates.

                ## Notes
                Ask for an escort from the outgoing engineer on unfamiliar spaces, and follow the vessel's permit and enclosed space rules for tank tops, cofferdams and duct keels.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Seven machinery systems traced and sketched within two weeks of joining, with drawing discrepancies passed to the chief engineer."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect the piping diagrams for fuel, lube oil and cooling water systems"
                - "Walk the fuel oil system from bunker tank to main engine with the drawing"
                - "Mark valve numbers that differ from the drawing in red"
                - "Sketch the sea water cooling system from memory and compare"
                - "Hand the marked-up drawings to the chief engineer"
            - name: Engine room drawings and manuals index
              description: |-
                ## Purpose
                Most engine rooms hold hundreds of manufacturer manuals, makers' drawings and yard plans, and the one you need at 0300 is in a box nobody has opened since delivery. An index of what is held, where, and which are electronic copies turns a twenty-minute search into a two-minute one and shows which manuals are missing before a breakdown proves it.

                ## Milestones
                1. Every manual and drawing set in the engine room, control room and workshop listed with location.
                2. Manuals for all critical equipment confirmed present and matched to the installed model.
                3. Missing or illegible manuals requested from the maker or the office.
                4. The index saved on the engine room computer and printed in the control room.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A manuals and drawings index covering every critical machinery item, with missing documents requested in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the manuals on the control room shelf with their equipment"
                - "Compare the list against the vessel's critical equipment list"
                - "Request missing makers' manuals through the superintendent"
                - "Print the index and fix it inside the control room bookcase"
            - name: Emergency machinery familiarisation and test record
              description: |-
                ## Purpose
                The emergency generator, emergency fire pump, quick-closing valves, fuel and ventilation trips, steering gear changeover and emergency air compressor are the equipment you hope never to need and must be able to start blind. Knowing where each is, how it starts and when it was last tested is a basic duty, and a port state officer will often ask a junior engineer to start one.

                ## Milestones
                1. Each item of emergency machinery located and its starting procedure read on site.
                2. The emergency generator and emergency fire pump started under supervision.
                3. Test dates for each item found in the PMS or test log.
                4. Any overdue test or failed start reported to the chief engineer.

                ## Notes
                Steering gear tests before departure and emergency generator tests follow SOLAS and company intervals. Do not skip a scheduled test because the last one passed.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every item of emergency machinery located, the emergency generator and fire pump started once, and last test dates recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk to the emergency generator room and read the starting instructions"
                - "Start the emergency fire pump with the second engineer present"
                - "Locate every quick-closing valve and its remote trip station"
                - "Look up the last test date of each item in the PMS"
            - name: Planned maintenance system health check on joining
              description: |-
                ## Purpose
                The planned maintenance system is the vessel's memory, and class, vetting inspectors and the office all judge the engine department by it. Checking overdue jobs, running hours that have stopped updating and jobs closed without remarks in your first month shows what you inherited and what to fix before the next audit.

                ## Milestones
                1. Overdue jobs counted by system and by responsible engineer.
                2. Running hour counters checked against the actual meters for main and auxiliary engines.
                3. Jobs closed without remarks or spares used identified for the last three months.
                4. A short list of corrections agreed with the chief engineer.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written PMS health note giving overdue job counts, running hour discrepancies and an agreed correction list."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run the overdue jobs report for your equipment"
                - "Compare PMS running hours with the meters on each engine"
                - "Pick ten recently closed jobs and check their remarks and spares"
                - "Agree the correction list with the chief engineer"
            - name: Engine room logbook and watch handover standard
              description: |-
                ## Purpose
                Logbook entries and handovers are legal records and the first thing read after an incident. Agreeing what is recorded each watch (parameters, tank soundings, alarms, machinery changes, bilge and sludge movements) and how a handover is given means the next engineer never inherits a surprise and every entry can stand up in a casualty inquiry.

                ## Milestones
                1. The company's logbook instructions and the chief engineer's standing orders read and signed.
                2. A list of parameters and soundings recorded each watch agreed.
                3. A verbal handover routine written covering running machinery, defects, alarms and planned work.
                4. Two handovers given and received using the routine.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written watch handover routine and agreed logbook parameter list, used on at least two handovers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read and sign the chief engineer's standing orders"
                - "List the parameters the logbook requires each watch"
                - "Write a six-point verbal handover routine"
                - "Use the routine at your next two watch handovers"
            - name: Workshop tools, measuring kit and calibration record
              description: |-
                ## Purpose
                Crankshaft deflection gauges, micrometers, torque wrenches, hydraulic jacks for main bearing studs and feeler gauges all lose accuracy, and an overhaul done with an uncalibrated torque wrench can undo itself at sea. Listing the measuring and special tools aboard, with calibration dates, shows what can be trusted before the next major job.

                ## Milestones
                1. Every measuring instrument and special tool listed with location.
                2. Calibration dates recorded, with overdue items marked.
                3. Hydraulic tools and hoses checked for test dates and condition.
                4. Replacements or calibration ordered for anything out of date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A measuring and special tools list with calibration dates, with every overdue item ordered for calibration or replacement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the micrometers, gauges and torque wrenches in the workshop"
                - "Note each calibration certificate date"
                - "Inspect the hydraulic jack hoses for damage and test tags"
                - "Order calibration for overdue instruments through the stores request"
            - name: Machinery rounds checklist for watch and UMS
              description: |-
                ## Purpose
                An unmanned machinery space only stays safe if the rounds before and after unmanned periods catch the slow leak, the warm bearing and the sounding that has crept up. A checklist built for this engine room, walked in the same order every time, makes rounds faster and much harder to skip a space on.

                ## Milestones
                1. A route through every machinery space drawn in walking order.
                2. Check points written for each space: levels, leaks, temperatures, noises and alarms.
                3. Pre-UMS and post-UMS checks separated with the alarm test included.
                4. The checklist trialled for a week and adjusted with the watch team.

                ## Notes
                Start from the **Operational checklist** template. Always tell the bridge before entering and after leaving the machinery space during unmanned hours.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A space-by-space rounds checklist in use every watch and before each unmanned period, revised after one week of trial."
                cadence: rolling
              tasks:
                - "Draw the walking route through every machinery space"
                - "Write the check points for each space on one sheet"
                - "Walk the machinery rounds checklist before handing over the watch @recurring(daily)"
                - "Review missed or changed check points with the watch team @recurring(monthly:9)"
            - name: PMS job closure and running hours routine
              description: |-
                ## Purpose
                Jobs left open for weeks after the work is done, and running hours entered once a month from memory, are how a good maintenance record turns into an audit finding. A fixed weekly slot to close completed jobs with remarks, spares used and measurements keeps the system honest and the overdue count real.

                ## Milestones
                1. A weekly time agreed for PMS updates.
                2. Running hours entered from the meters, not estimated.
                3. Every completed job closed with remarks, readings and spares consumed.
                4. Overdue jobs either done, rescheduled with a reason or raised to the chief engineer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "PMS updated weekly for twelve weeks, with no completed jobs left open beyond seven days."
                cadence: rolling
              tasks:
                - "Choose a fixed weekly time for PMS updates"
                - "Enter running hours and close completed jobs with remarks @recurring(weekly:sun)"
                - "Write a reason against every rescheduled job"
                - "Raise any job overdue by a month to the chief engineer"
            - name: Main engine performance monitoring log
              description: |-
                ## Purpose
                Falling compression pressure, rising exhaust temperatures and a creeping turbocharger back pressure show up in the numbers weeks before they show up as a breakdown. Taking a full performance set monthly at a steady load, and comparing it with shop test and sea trial values, tells you when a cylinder, injector or turbocharger needs attention.

                ## Milestones
                1. Shop test and sea trial reference values collected for the main engine and turbochargers.
                2. A performance set taken at steady load: firing and compression pressures, exhaust temperatures, scavenge air pressure and fuel index.
                3. Readings corrected for ambient conditions and plotted against the reference.
                4. Cylinders or units outside the maker's limits flagged with a planned action.

                ## Notes
                Start from the **Metrics log** template. Take readings in calm weather at a steady load, or the trend will mostly show sea state.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly main engine performance sets logged for six months against shop test values, with every out-of-limit cylinder given an action."
                cadence: rolling
              tasks:
                - "Find the shop test and sea trial performance values"
                - "Take a full main engine performance set at steady load @recurring(monthly:12)"
                - "Plot exhaust temperatures and pressures per cylinder against the reference"
                - "Send the corrected performance report to the superintendent"
            - name: Bunkering procedure and fuel sample management
              description: |-
                ## Purpose
                Bunkering is one of the highest-risk routine operations aboard: an overflow is a pollution incident, and an off-specification fuel can wreck injectors and purifiers. A written bunker plan, proper sampling at the manifold, retained MARPOL samples and a habit of waiting for the laboratory result before burning new fuel protect the engine and the company.

                ## Milestones
                1. A bunker plan template covering tank allocation, sounding rounds, communication and stopping procedure.
                2. Manifold sampling, sealing and labelling routine agreed with the supplier's representative.
                3. MARPOL retained samples logged with seal numbers and kept for the required period.
                4. Fuel test results reviewed against ISO 8217 limits before the fuel is used.

                ## Notes
                Do not mix new bunkers with fuel already aboard until the test result is back. Compatibility problems often show only when two fuels meet in a tank.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every bunkering in six months done to a written plan, with sealed samples logged and laboratory results reviewed before use."
                cadence: rolling
              tasks:
                - "Draft a bunker plan template with tank allocation and stop signals"
                - "Agree the manifold sampling routine with the chief engineer"
                - "Check retained fuel sample log and dispose of expired samples @recurring(monthly:20)"
                - "Compare each fuel test report against the ISO 8217 grade ordered"
            - name: Lube oil analysis programme
              description: |-
                ## Purpose
                Water in crankcase oil, rising iron in a gearbox or falling base number in system oil all warn of damage long before a bearing goes. Sending samples from the main engine, generators, stern tube and key hydraulics on a fixed cycle, and reading the reports rather than filing them, is one of the cheapest condition monitoring tools aboard.

                ## Milestones
                1. A list of sampled systems with sample points and the laboratory's sampling interval.
                2. Samples taken correctly from running systems and dispatched with full labels.
                3. Each report read with cautions and criticals logged and acted on.
                4. Trends for water, wear metals and base number kept per system.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Lube oil samples sent for every listed system each quarter for a year, with every caution result given a recorded action."
                cadence: rolling
              tasks:
                - "List every system on the lube oil sampling programme"
                - "Draw and dispatch the lube oil samples for all listed systems @recurring(quarterly)"
                - "Record each caution or critical result with the action taken"
                - "Plot water content and iron for the main engine system oil"
            - name: Oil record book and oily water separator routine
              description: |-
                ## Purpose
                MARPOL Annex I entries in the oil record book are checked by port state officers line by line, and mismatches between sludge quantities, incinerator use and separator operation have led to detentions and criminal cases. A weekly routine to reconcile sludge and bilge tank soundings with entries, and to test the 15 ppm alarm, keeps the record and the reality the same.

                ## Milestones
                1. The company's oil record book instructions and the IMO entry codes read.
                2. Sludge and bilge tank capacities and current soundings tabulated.
                3. Each week's entries reconciled against soundings and equipment running hours.
                4. Oily water separator and 15 ppm alarm tested to the maker's procedure with results logged.

                ## Notes
                Never alter or bypass the oily water separator or its monitoring equipment, and report any pressure to do so through the designated person ashore. Entries are signed by the officer in charge and the master.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Oil record book entries reconciled weekly against tank soundings for three months with no unexplained differences."
                cadence: rolling
              tasks:
                - "Read the oil record book entry codes and the company guidance"
                - "Tabulate sludge and bilge tank capacities and current soundings"
                - "Reconcile oil record book entries against tank soundings @recurring(weekly:fri)"
                - "Test the 15 ppm bilge alarm and log the result"
            - name: Fuel and lube oil purifier care
              description: |-
                ## Purpose
                Purifiers are the last defence between catalytic fines in the fuel and the injection pumps, and a purifier with the wrong gravity disc or a dirty bowl passes the problem straight to the engine. A clear routine for bowl cleaning intervals, disc selection, feed rate and temperature keeps fuel clean and separator sludge where it belongs.

                ## Milestones
                1. Gravity disc or settings confirmed against the density of fuel now aboard.
                2. Feed rate and separating temperature set to the maker's guidance for the grade.
                3. Bowl cleaning intervals set from inspection findings rather than habit.
                4. Fuel samples before and after the purifier compared once.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Purifier settings recorded against the current fuel density, with before and after samples showing reduced water and sediment."
                cadence: rolling
              tasks:
                - "Check the fuel density on the latest bunker delivery note"
                - "Confirm the purifier gravity disc or setting matches that density"
                - "Take fuel samples before and after the purifier for comparison"
                - "Inspect the purifier bowl deposits at the next cleaning"
            - name: Boiler and economiser water treatment checks
              description: |-
                ## Purpose
                Auxiliary boilers and exhaust gas economisers fail from the water side more often than the fire side: oxygen pitting, scale and carry-over build slowly until a tube leaks. Testing boiler and feed water to the chemical supplier's programme and keeping the results trended prevents the leak and the economiser soot fire that can follow poor upkeep.

                ## Milestones
                1. The chemical supplier's test kit, procedures and limits available in the engine room.
                2. Boiler water tested and dosing adjusted to the limits.
                3. Results logged and trended with out-of-limit values explained.
                4. Economiser soot blowing and water washing intervals confirmed.

                ## Notes
                Follow the chemical supplier's limits and safety data sheets for dosing chemicals, and wear the stated protective equipment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Boiler water tests logged to the supplier's programme for six months, with every out-of-limit result explained and corrected."
                cadence: rolling
              tasks:
                - "Locate the boiler water test kit and the supplier's limit sheet"
                - "Test boiler and feed water and log the results @recurring(weekly:wed)"
                - "Send the boiler water trend to the chemical supplier @recurring(monthly:25)"
                - "Confirm the economiser soot blowing interval with the chief engineer"
            - name: Ballast water management records and system checks
              description: |-
                ## Purpose
                Under the Ballast Water Management Convention, every ballast operation must match the vessel's approved plan and record book, and the treatment system must actually work when a port asks for a sample. Regular checks of UV lamps, filters or dosing units, plus a record book reconciled with tank soundings, avoid fines and refused discharges.

                ## Milestones
                1. The approved ballast water management plan and treatment system manual read.
                2. Ballast record book entries reconciled against ballast tank soundings.
                3. Treatment system maintenance tasks entered in the PMS with intervals.
                4. System alarms and bypass events reviewed and explained.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ballast record book reconciled monthly for six months, with treatment system maintenance up to date in the PMS."
                cadence: rolling
              tasks:
                - "Read the ballast water treatment system operating manual"
                - "Reconcile ballast record book entries with tank soundings @recurring(monthly:5)"
                - "Check treatment system maintenance tasks are in the PMS"
                - "Review the treatment system alarm history with the chief officer"
            - name: Engine stores and spares requisition cycle
              description: |-
                ## Purpose
                Spares ordered in a hurry at an expensive port, or a stores requisition that misses the delivery window, cost more than almost any other avoidable engine room expense. A monthly cycle that counts critical spares against minimums, checks PMS jobs due in the next three months and sends one clean requisition keeps parts aboard when they are needed.

                ## Milestones
                1. Minimum stock levels confirmed for critical spares.
                2. Spares needed for PMS jobs due in the next three months listed.
                3. One consolidated requisition sent with part numbers and drawing references.
                4. Received spares checked, booked into inventory and stowed in marked locations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A consolidated spares requisition sent monthly for six months, with no critical spare found below minimum at a breakdown."
                cadence: rolling
              tasks:
                - "List the spares needed for PMS jobs due in the next three months"
                - "Count critical spares against minimum stock @recurring(monthly:15)"
                - "Send one consolidated requisition with maker part numbers"
                - "Book received spares into the inventory system"
            - name: Emissions and fuel consumption reporting
              description: |-
                ## Purpose
                Fuel changeover before emission control areas, IMO data collection reporting and carbon intensity ratings all depend on fuel figures the engine department produces. Recording changeover times, positions and sulphur content correctly, and checking consumption reports against tank soundings each month, keeps the vessel compliant and its rating defensible.

                ## Milestones
                1. The changeover procedure for emission control areas read and timings worked out for your fuel system.
                2. Changeover start and finish times, positions and tank contents recorded in the logbook.
                3. Monthly fuel consumption by grade reconciled with soundings and bunker delivery notes.
                4. Discrepancies explained before figures go to the office.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly fuel consumption by grade reconciled within one percent of soundings for six months, with every changeover fully recorded."
                cadence: rolling
              tasks:
                - "Work out how long a full fuel changeover takes on your system"
                - "Record changeover times and positions in the engine logbook"
                - "Reconcile monthly fuel consumption with soundings by grade @recurring(monthly:28)"
                - "Explain any consumption difference to the office before submission"
            - name: Two-stroke slow-speed main engine fundamentals
              description: |-
                ## Purpose
                Large crosshead engines from the major designers dominate deep-sea propulsion, and understanding scavenging, crosshead lubrication, cylinder oil feed and electronic control is what separates someone who follows the manual from someone who can read the engine. A structured study using the maker's manual and your own engine's data makes every later overhaul and fault easier.

                ## Milestones
                1. The scavenging, fuel injection and exhaust valve operation explained in your own words with sketches.
                2. Cylinder oil feed rate setting and its link to fuel sulphur understood and checked on your engine.
                3. Crosshead, main and crankpin bearing arrangements identified on the drawings.
                4. The engine's control and safety system alarms and slowdowns listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A set of own sketches and notes on scavenging, injection, lubrication and safety systems, checked by the second or chief engineer."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read the main engine manual chapter on operation"
                - "Sketch the scavenge air path from turbocharger to exhaust valve"
                - "Check the cylinder oil feed rate against the fuel sulphur content"
                - "List every slowdown and shutdown with its set point"
                - "Ask the chief engineer to review your notes"
            - name: Generator engines and switchboard load sharing
              description: |-
                ## Purpose
                Blackouts at sea usually start at the generators: a sticking governor, a preferential trip that did not shed load, or a manual synchronisation done in a hurry. Knowing the four-stroke generator engines and the main switchboard well enough to synchronise, share load and restore power after a blackout is a core watchkeeping skill.

                ## Milestones
                1. Generator engine fuel, cooling and lube systems traced and understood.
                2. Manual synchronisation done under supervision using the synchroscope.
                3. Load sharing and preferential trip settings found and explained.
                4. The blackout recovery procedure walked through on the switchboard.

                ## Notes
                Work on switchboards only under the vessel's electrical safety rules and permits. High voltage installations need specific training and authorisation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Manual synchronisation done twice under supervision, and the blackout recovery procedure walked through with the electrical officer or second engineer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the blackout recovery procedure posted at the switchboard"
                - "Synchronise a generator manually with the second engineer present"
                - "Find the preferential trip settings and the loads they shed"
                - "Walk the blackout recovery steps on the switchboard with the electrical officer"
            - name: Shafting, stern tube and steering gear systems
              description: |-
                ## Purpose
                Stern tube seals, bearings and steering gear are hard to reach, expensive to repair and often only inspected in dry-dock, so problems are caught through oil consumption, temperatures and noise. Understanding these systems well lets you spot a leaking seal or a worn bearing from the records long before a forced dry-docking.

                ## Milestones
                1. The stern tube lubrication and seal arrangement traced, whether oil or water lubricated.
                2. Stern tube bearing temperature and oil consumption trends found in the logbook.
                3. The steering gear hydraulic circuit and changeover procedure understood.
                4. Shaft earthing device and intermediate bearings inspected and their checks noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Stern tube oil consumption and temperature trends compiled for the last six months, and the steering gear changeover done under supervision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Trace the stern tube oil system from header tank to seals"
                - "Compile six months of stern tube oil top-ups from the logbook"
                - "Practise the steering gear pump changeover under supervision"
                - "Inspect the shaft earthing device brushes and slip ring"
            - name: Refrigeration and air conditioning plant onboard
              description: |-
                ## Purpose
                Provision rooms, accommodation air conditioning and, on reefer ships, cargo refrigeration all depend on plant that leaks refrigerant quietly and fails loudly. Understanding the refrigeration cycle on your actual plant, reading pressures and superheat, and knowing the refrigerant handling rules makes you the engineer the cook and the crew rely on.

                ## Milestones
                1. The provision and air conditioning plants traced with compressor, condenser, expansion valve and evaporators identified.
                2. Suction and discharge pressures read and converted to saturation temperatures.
                3. Refrigerant type, quantity and record book requirements understood.
                4. One common fault, such as a frosted evaporator or short cycling, diagnosed with the plant log.

                ## Notes
                Refrigerant handling and venting are controlled under MARPOL Annex VI and national rules. Keep the refrigerant record current and never vent.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A traced diagram of the provision plant with normal pressures recorded and one fault diagnosis written up."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Trace the provision refrigeration plant against its drawing"
                - "Record normal suction and discharge pressures for each room"
                - "Read the refrigerant record book and note the last top-up"
                - "Write up one fault diagnosis from the plant log"
            - name: Fresh water generator and sewage plant operation
              description: |-
                ## Purpose
                Running out of fresh water on a long passage or failing a sewage discharge inspection are both avoidable with plant that is run and maintained properly. Learning how the fresh water generator, salinity alarm, potable water treatment and sewage treatment plant work together keeps the crew supplied and the vessel within MARPOL Annex IV.

                ## Milestones
                1. Fresh water generator start, vacuum and salinity alarm checks done under supervision.
                2. Potable water treatment and testing routine understood.
                3. Sewage treatment plant process, aeration and discharge limits learned.
                4. Fresh water production and consumption figures compared for a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A month of fresh water production and consumption figures compared, and the generator started and stopped under supervision."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the fresh water generator manual starting procedure"
                - "Start the fresh water generator with the third engineer present"
                - "Test the salinity alarm against a known sample"
                - "Compare a month of fresh water production with consumption"
            - name: Engine room alarm and automation system
              description: |-
                ## Purpose
                Modern engine rooms run on an alarm monitoring system with hundreds of points, and an engineer who cannot read its history, inhibit a sensor properly or trace a signal to the field is half blind. Learning the system's structure, alarm groups and safe ways to override is essential before you keep unmanned watches.

                ## Milestones
                1. Alarm groups, extension alarm panels and the engineer call system understood.
                2. Alarm history exported and the most frequent nuisance alarms identified.
                3. The procedure for inhibiting or overriding an alarm, and who approves it, written down.
                4. One field sensor traced from the alarm point to its transmitter.

                ## Notes
                Inhibited alarms should be logged and reviewed every watch. An alarm left inhibited is a common thread in engine room fires.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of the ten most frequent alarms from the last month and the vessel's approval rule for inhibits, checked by the chief engineer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export the last month of alarm history from the monitoring system"
                - "List the ten most frequent alarms and their causes"
                - "Write down who may approve an alarm inhibit and how it is logged"
                - "Trace one temperature sensor from screen to field"
            - name: Reading class rules and the continuous machinery survey
              description: |-
                ## Purpose
                Class surveyors credit machinery items surveyed under a continuous machinery survey scheme, and chief engineers can be authorised to examine some items themselves. Understanding the survey status report, what is due, what the chief can credit and what needs the surveyor saves days at survey and avoids items falling overdue unnoticed.

                ## Milestones
                1. The latest class survey status report obtained and read.
                2. Machinery items due in the next twelve months listed with their window.
                3. Items the chief engineer may examine under the scheme identified.
                4. Due items linked to PMS jobs so the work and survey happen together.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of continuous machinery survey items due within twelve months, each linked to a PMS job and a planned survey opportunity."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download the latest survey status report from the class portal"
                - "List machinery items due within twelve months"
                - "Mark items the chief engineer is authorised to examine"
                - "Link each due item to its PMS job"
            - name: Turbocharger washing and overhaul interval review
              description: |-
                ## Purpose
                Turbocharger fouling quietly raises exhaust temperatures and fuel consumption, and overhauls done purely by calendar can be too early or dangerously late. Reviewing wash frequency, pressure drop across the air cooler and overhaul findings against the maker's guidance lets you set intervals that fit the fuel and trade the vessel actually runs.

                ## Milestones
                1. Wash frequency and method for turbine and compressor sides compared with maker guidance.
                2. Turbocharger speed, pressure and temperature trends assembled for six months.
                3. Findings from the last overhaul read for fouling and wear patterns.
                4. A revised washing and overhaul interval agreed with the superintendent.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written turbocharger wash and overhaul interval, backed by six months of trend data, approved by the superintendent."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull six months of turbocharger speed and exhaust temperature readings"
                - "Compare current wash frequency with the maker's guidance"
                - "Read the last overhaul report for fouling and blade damage"
                - "Propose a revised interval to the superintendent"
            - name: Hull and propeller performance and cleaning decision
              description: |-
                ## Purpose
                Fouling on the hull and propeller can add a large share to fuel consumption for the same speed, and an underwater cleaning at the wrong port can breach local rules on biofouling discharge. Tracking speed and power over time and deciding when a clean or propeller polish pays back is a decision the engine department should own with data.

                ## Milestones
                1. Speed through water, shaft power and draught collected for comparable voyages.
                2. Performance deviation from the clean-hull baseline estimated.
                3. Cost of cleaning or polishing compared with the extra fuel burned.
                4. A recommendation sent to the office, noting local cleaning rules at the chosen port.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recommendation to clean or wait, showing fuel penalty against cleaning cost for at least three months of voyage data."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect speed, power and draught from the last three months of noon reports"
                - "Estimate the fuel penalty against the sea trial baseline"
                - "Get a cleaning quote and the local rules at the next suitable port"
                - "Send the clean or wait recommendation to the office"
            - name: Slow steaming and auxiliary load reduction measures
              description: |-
                ## Purpose
                Running the main engine at low load saves fuel but brings fouled turbochargers, poor combustion and cylinder liner problems if done carelessly. Reviewing the maker's low-load guidance, auxiliary blower use and electrical load at sea lets you capture the saving without paying for it in overhauls.

                ## Milestones
                1. The maker's low-load operation guidance and any retrofit service letters read.
                2. Current main engine load profile and auxiliary blower running hours reviewed.
                3. Electrical load at sea measured and three reduction measures identified.
                4. Agreed measures trialled for a voyage with fuel figures compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three load reduction measures trialled for one voyage, with fuel consumption before and after recorded and sent to the office."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read the main engine maker's service letters on low-load running"
                - "List the largest electrical consumers running at sea"
                - "Pick three measures to cut auxiliary load and agree them with the chief"
                - "Compare fuel figures for the trial voyage with the previous one"
            - name: Critical spares list review for one vessel
              description: |-
                ## Purpose
                Class and the safety management system expect a list of critical spares, yet many lists were copied from a sister ship and never checked against what fails on this one. Reviewing which failures would stop the vessel or breach a rule, how long each spare takes to arrive and what is held aboard puts money into the right shelves.

                ## Milestones
                1. Critical equipment list compared with the critical spares list.
                2. Lead times obtained for the twenty most important spares.
                3. Failure history from the PMS used to add or remove items.
                4. A revised critical spares list approved by the superintendent.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A revised critical spares list with lead times for at least twenty items, approved and loaded into the inventory system."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export the current critical spares list and stock levels"
                - "Ask the agent to sort the last two years of breakdowns by equipment"
                - "Request lead times for the twenty most important spares"
                - "Review critical spares stock against the approved list @recurring(quarterly)"
            - name: Exhaust gas cleaning versus compliant fuel review
              description: |-
                ## Purpose
                Owners weighing a scrubber, a switch to compliant low-sulphur fuels or alternative fuels need engineering input on space, power, washwater rules, maintenance burden and reliability, not just a price spread. A structured comparison for one vessel gives the office a decision record grounded in how the plant really runs.

                ## Milestones
                1. Options defined: compliant fuel, open, closed or hybrid exhaust gas cleaning, and any alternative fuel readiness.
                2. Space, power, water treatment and maintenance demands listed for each.
                3. Ports and regions on the trading pattern checked for washwater discharge restrictions.
                4. A comparison table with the engineering risks sent to the office.

                ## Notes
                Commercial and charter decisions belong with the owner. Keep this review to engineering facts, risks and assumptions.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table of at least three options with engineering risks and washwater restrictions, delivered to the technical office."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Define the options the office wants compared"
                - "List power, space and maintenance demands for each option"
                - "Check washwater discharge rules for the main trading ports"
                - "Send the comparison table to the technical office"
            - name: Energy efficiency measures for carbon intensity ratings
              description: |-
                ## Purpose
                Carbon intensity ratings and the energy efficiency index for existing ships put engineering choices such as power limitation, energy saving devices and waste heat recovery on the owner's agenda. Assessing which measures fit your vessel's machinery, and what each would cost in maintenance and operating limits, prepares sound input for the ship energy efficiency management plan.

                ## Milestones
                1. The vessel's current rating, efficiency index status and energy efficiency plan read.
                2. Candidate measures listed, such as shaft power limitation, propeller upgrades, waste heat recovery and LED lighting.
                3. Engineering effects of each measure on machinery and safety margins noted.
                4. A ranked shortlist with estimated fuel saving sent to the office.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked shortlist of at least four efficiency measures with estimated fuel savings and machinery effects, sent to the office."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read the vessel's energy efficiency management plan"
                - "List candidate measures that suit the installed machinery"
                - "Note the machinery and safety effects of shaft power limitation"
                - "Send a ranked shortlist with savings estimates to the office"
            - name: Annual class machinery survey preparation
              description: |-
                ## Purpose
                Annual surveys are where unprepared engine rooms collect conditions of class: a failed emergency generator start, an untested quick-closing valve or a bilge alarm that does not trip. Preparing three weeks ahead with the surveyor's likely checks tested and records ready makes the survey a formality.

                ## Milestones
                1. The survey checklist from the class society and company obtained.
                2. Emergency generator, fire pumps, bilge alarms, quick-closing valves and trips tested in advance.
                3. Certificates, test records and PMS histories ready for the surveyor.
                4. Survey completed with findings and any conditions entered in the PMS for closure.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual machinery survey completed with no new condition of class, and any finding entered in the PMS with an owner."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Get the annual survey checklist from the class portal"
                - "Test the emergency generator and bilge alarms before the surveyor arrives"
                - "Lay out test records and certificates in one folder"
                - "Enter every survey finding in the PMS with an owner"
            - name: Port state control readiness in the engine room
              description: |-
                ## Purpose
                Port state officers often go straight to the engine room and look for oil in the bilges, fire hazards, MARPOL records and whether the crew can operate emergency equipment. A readiness walk-through using the regional inspection campaigns and recent detention reasons catches what an inspector would see first.

                ## Milestones
                1. Recent detention reasons and the current concentrated inspection campaign read.
                2. Engine room walked as an inspector with defects listed.
                3. Junior engineers drilled on starting emergency equipment and explaining the oily water separator.
                4. Defects closed or recorded with a plan before the next port.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An inspector-style walk-through completed before arrival, with every defect closed or planned and each junior engineer drilled once."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the current concentrated inspection campaign questionnaire"
                - "Walk the engine room as an inspector and list defects"
                - "Drill each junior engineer on starting the emergency fire pump"
                - "Close or plan every defect before arrival"
            - name: Dry-docking specification and repair list
              description: |-
                ## Purpose
                Dry-dock cost and length are decided by the specification sent to yards months before, and items added on arrival are paid for at the yard's rates. Building a specification from PMS jobs, class items due, defects and owner's projects, with clear quantities and drawings, is how a superintendent gets comparable quotes and a docking that finishes on time.

                ## Milestones
                1. Class items due, PMS jobs, open defects and planned modifications compiled into one list.
                2. Each item written as a specification with quantities, drawings and acceptance criteria.
                3. Owner's supply items and service engineers identified separately from yard work.
                4. Specification issued to the shortlisted yards for quotation.

                ## Notes
                Write each item so a yard estimator who has never seen the ship can price it. Vague items such as overhaul as required become blank cheques.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dry-dock specification covering all class items due and open defects, issued to at least three yards for quotation."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export class items due and open defects into one list"
                - "Write each repair item with quantities and drawing references"
                - "List owner's supply items and service engineer attendances"
                - "Issue the specification to the shortlisted yards"
            - name: Shipyard selection for the next docking
              description: |-
                ## Purpose
                Cheap quotes often hide weak steel prices, long lay days or a yard without the dock size or skills the work needs. Comparing yards on price per item, dock availability, deviation cost, past performance and safety record gives the owner a choice they can defend.

                ## Milestones
                1. Quotes from at least three yards normalised to the same specification.
                2. Deviation distance, fuel cost and off-hire time added for each yard.
                3. Past docking reports and references checked for each yard.
                4. A recommendation with the scoring table sent to the owner.

                ## Notes
                Start from the **Vendor** template, one record per yard, so the scoring is kept for the next docking.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least three yards including deviation and off-hire costs, with a recommendation accepted by the owner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Create a record for each yard that quoted"
                - "Normalise each quote line by line to the specification"
                - "Add deviation, fuel and off-hire costs for each yard"
                - "Send the scored recommendation to the owner"
            - name: Dry-dock attendance and close-out
              description: |-
                ## Purpose
                During a docking the superintendent and chief engineer are deciding daily on extras, inspecting work and protecting the schedule while the yard pushes for more. Running the docking with a daily progress meeting, a tracked extras log and a clear close-out list means the vessel leaves on time with every class item credited.

                ## Milestones
                1. A daily progress meeting held with the yard, class and service engineers.
                2. Every extra work item agreed in writing with a price before work starts.
                3. Class items inspected and credited by the surveyor before undocking.
                4. A close-out report with costs, delays, open items and lessons sent within two weeks.

                ## Notes
                Dry-docks bring hot work, tank entry and staging next to each other. Hold the yard to its permit system and use stop-work authority when it is ignored.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The vessel undocked with all class items credited and a close-out report issued within fourteen days."
                cadence: one-shot
                effort_hours_estimate: "120"
              tasks:
                - "Set the time and attendees for the daily docking meeting"
                - "Open an extras log with price and approval columns"
                - "Walk the dock with the surveyor before undocking"
                - "Write the docking close-out report"
            - name: Main engine unit overhaul and piston pull
              description: |-
                ## Purpose
                A piston overhaul on a large two-stroke engine is a heavy lift in a moving ship, with tight port time, special tools and clearances that decide whether the unit runs for another few thousand hours. Planning the job, the spares and the measurements in advance, then recording everything, turns it from a scramble into a routine.

                ## Milestones
                1. Maker's procedure, special tools and lifting gear checked and certified.
                2. Spares, gaskets and rings confirmed aboard before the port stay.
                3. Liner wear, ring grooves and piston crown measured and recorded.
                4. The unit run in to the maker's schedule and the job closed in the PMS with readings.

                ## Notes
                Isolate turning gear, starting air and fuel before work, and follow the permit and lifting plan. Never stand under a suspended piston.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A unit overhaul completed within the port stay, with liner and ring measurements recorded in the PMS and run-in finished."
                cadence: one-shot
                effort_hours_estimate: "36"
              tasks:
                - "Read the maker's piston overhaul procedure"
                - "Check the lifting gear certificates and the special tools"
                - "Confirm piston rings and gaskets are aboard"
                - "Record liner and ring groove measurements in the PMS"
            - name: Sea trials after major machinery repair
              description: |-
                ## Purpose
                After a dry-dock, engine overhaul or new installation, the guarantee period starts the day you sail, and defects found later are much harder to claim. A sea trial programme with set load steps, recorded readings and a defect list signed by the yard or service engineer protects the owner and gives the crew a clean baseline.

                ## Milestones
                1. A trial programme with load steps, manoeuvres and steering gear tests agreed.
                2. Readings taken at each step and compared with the previous baseline.
                3. A defect list signed by the yard or service engineer before they leave.
                4. Guarantee claims raised in writing for every item within the guarantee period.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed trial record with readings at each load step and a signed defect list, with guarantee claims raised in writing."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the trial programme with load steps and steering tests"
                - "Prepare a readings sheet for each load step"
                - "Get the defect list signed before the service engineer leaves"
                - "Raise guarantee claims in writing for each defect"
            - name: Engine cadet sea time and training record book
              description: |-
                ## Purpose
                Engine cadets must complete approved sea time and a training record book signed off task by task, and many lose months because tasks were never witnessed or the book was left unsigned when an officer signed off. Planning which tasks to complete on this vessel and getting signatures as you go keeps the certificate of competency on schedule.

                ## Milestones
                1. Training record book tasks mapped to what this vessel can offer.
                2. A weekly target of tasks agreed with the training officer or second engineer.
                3. Each completed task signed and dated by the witnessing officer.
                4. Sea service testimonial and book review done before signing off.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Training record book tasks planned for the contract and signed weekly, with a sea service testimonial obtained at sign-off."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Mark the training record book tasks this vessel can cover"
                - "Agree a weekly task target with the second engineer"
                - "Get completed training record book tasks signed and dated @recurring(weekly:sat)"
                - "Request the sea service testimonial before signing off"
            - name: Preparing for the next certificate of competency orals
              description: |-
                ## Purpose
                Moving from watchkeeping officer to second engineer, or second to chief, usually ends in an oral examination where the examiner probes judgement as much as knowledge. Preparing from your own engine room experience, with mock orals and written answers to past themes, is far more effective than cramming notes in the last fortnight.

                ## Milestones
                1. The maritime administration's syllabus and eligibility rules checked and noted.
                2. A study plan covering regulations, machinery, management and emergencies.
                3. Written answers drafted for twenty common oral themes using real examples.
                4. Two mock orals with a senior engineer, with weak areas revised.

                ## Notes
                Check eligibility, sea time and course requirements on the maritime administration's website before booking. They change, and colleagues' advice is often out of date.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty written oral answers prepared and two mock orals completed before the booked examination date."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Check the syllabus and eligibility rules on the administration's website"
                - "Write a study plan with weekly topics"
                - "Draft written answers to twenty common oral themes"
                - "Book two mock orals with a senior engineer"
            - name: First contract as second engineer
              description: |-
                ## Purpose
                Second engineers run the engine room day to day: the work plan, the PMS, the junior engineers and most of the overhauls, while the chief deals with the office. The first contract in the role goes far better with a clear handover, a weekly work plan and an early conversation with the chief about how they want things run.

                ## Milestones
                1. A written handover from the outgoing second covering defects, overdue jobs and spares.
                2. The chief engineer's expectations agreed in the first week.
                3. A weekly work plan issued to the engine team every week.
                4. A personal review at mid-contract with the chief on what to improve.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly engine room work plan issued throughout the contract, with handover and mid-contract review notes kept."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the outgoing second for a written handover"
                - "Agree the chief engineer's expectations in the first week"
                - "Issue the weekly engine room work plan @recurring(weekly:mon)"
                - "Hold a mid-contract review with the chief engineer"
            - name: Stepping up to chief engineer
              description: |-
                ## Purpose
                As chief you sign for the engine department's compliance, budget and people, and the work moves from the deck plates to reports, audits, the office and the master. A development plan covering the safety management system, budgets, crew appraisal and dealing with class and vetting turns a strong second into a trusted chief.

                ## Milestones
                1. Gaps against the chief engineer's duties in the safety management system identified.
                2. Budget, requisition and reporting duties shadowed under a current chief.
                3. Crew appraisal and familiarisation routines practised.
                4. A first contract as chief completed with a review from the superintendent.

                ## Notes
                Start from the **Development plan** template and agree it with your superintendent.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A development plan for the chief engineer role agreed with the superintendent, with each gap closed before the first contract as chief."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the chief engineer duties in the safety management system"
                - "Mark the duties you have never done yourself"
                - "Shadow the chief on the monthly budget and reports"
                - "Ask the superintendent for a review after your first contract as chief"
            - name: Moving ashore as a technical superintendent
              description: |-
                ## Purpose
                Many marine engineers come ashore as superintendents, where the job becomes budgets, dry-dock planning, class and flag liaison and supporting several chiefs at once by email at all hours. Planning the move with the skills, the type of company and the realistic pay and lifestyle in view avoids taking the first shore job and regretting it.

                ## Milestones
                1. Target roles listed: superintendent, fleet manager, surveyor, marine consultant or equipment service engineer.
                2. Gaps in budgeting, contracts and office software identified against job adverts.
                3. A shore CV built around fleet outcomes rather than ranks held.
                4. Three conversations held with engineers who made the move.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on target shore roles with a skills gap list and a shore CV, informed by three conversations."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read five shore job adverts and list the skills they ask for"
                - "Mark the skills you cannot yet show evidence of"
                - "Rewrite your CV around fleet results"
                - "Arrange calls with three engineers who moved ashore"
            - name: Offshore vessel and dynamic positioning machinery role
              description: |-
                ## Purpose
                Offshore supply, construction and dive support vessels run diesel-electric plant, azimuth thrusters and dynamic positioning systems where a single power fault can drive a vessel off position. Engineers moving into this sector need to understand redundancy groups, failure mode analysis of the power plant and the annual DP trials.

                ## Milestones
                1. The vessel's DP class and power plant redundancy concept understood.
                2. The DP failure mode and effects analysis for the power plant read.
                3. Thruster and power management system alarms and operating limits learned.
                4. Participation in the annual DP trials with your observations recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on the vessel's power plant redundancy and DP failure analysis, checked by the chief engineer, and one set of DP trials attended."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find the vessel's DP class on its class certificate"
                - "Read the power plant section of the DP failure analysis"
                - "List the thruster alarms and their limits"
                - "Record your observations from the annual DP trials"
            - name: Returning to sea after a long break ashore
              description: |-
                ## Purpose
                Engineers coming back after a year or more ashore, for family, study or a shore job, find that certificates, courses, fuels and emissions rules have moved on. A structured return covering document revalidation, a refresher on new regulations and a supernumerary period or short first contract rebuilds confidence safely.

                ## Milestones
                1. Certificate revalidation and refresher course needs confirmed with the maritime administration.
                2. Regulation changes since you last sailed listed and read.
                3. A supernumerary trip or shorter first contract agreed with the employer.
                4. A first-contract review held with the chief engineer.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Certificates revalidated, regulation changes noted and a first contract back at sea completed with a review recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Check revalidation rules for your certificate with the administration"
                - "List regulation changes since your last contract"
                - "Ask the crewing manager for a supernumerary trip or shorter contract"
                - "Hold a review with the chief engineer after the first contract"
            - name: Dual-fuel engines and LNG fuel gas systems
              description: |-
                ## Purpose
                Dual-fuel engines burning LNG bring gas valve units, double-walled piping, gas detection and cryogenic hazards into the engine room, under the IGF Code and the vessel's gas fuel manual. Engineers taking a gas-fuelled ship need to know the fuel gas system, the safety shutdowns and the gas mode changeover before they stand a watch.

                ## Milestones
                1. The IGF Code training requirements for your role met and recorded.
                2. Fuel gas supply from tank to engine traced with gas valve unit and ventilation identified.
                3. Gas detection, shutdown logic and changeover between fuel modes understood.
                4. One fuel mode changeover done under supervision.

                ## Notes
                Gas systems are entered only under the gas fuel safety procedures and permits. Cryogenic liquid causes severe burns and embrittles ordinary steel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "IGF training recorded, the fuel gas system traced, and one fuel mode changeover done under supervision."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Confirm your IGF training certificate is valid for the vessel"
                - "Trace the fuel gas line from the tank to the gas valve unit"
                - "List the gas detection set points and the shutdowns they trigger"
                - "Do one fuel mode changeover with the chief engineer present"
            - name: Torsional vibration and shaft alignment review
              description: |-
                ## Purpose
                Barred speed ranges, cracked couplings and hot stern tube bearings often trace back to torsional vibration or a shaft line whose alignment has shifted as the hull flexes with loading. Reviewing the torsional vibration calculation, the barred range and the last alignment record is specialist work that prevents an expensive shaft failure.

                ## Milestones
                1. The approved torsional vibration calculation and barred speed range found.
                2. Bearing reaction or alignment records from build and the last docking compared.
                3. Stern tube bearing temperature trends set against loading condition.
                4. Findings and any recommendation for re-alignment sent to the superintendent and class.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review of torsional vibration limits and shaft alignment records, with a recommendation sent to the superintendent."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Find the torsional vibration calculation in the class documents"
                - "Check that the barred speed range is marked on the engine control panel"
                - "Compare build and last docking alignment records"
                - "Send the review findings to the superintendent"
            - name: Machinery damage report and insurance claim support
              description: |-
                ## Purpose
                When a crankshaft, turbocharger or gearbox fails, the hull and machinery claim depends on evidence the engine department gathers in the first days: photographs, measurements, logs, oil samples and retained parts. A disciplined damage report gives the surveyor, class and underwriters a clear account and speeds the repair decision.

                ## Milestones
                1. A damage evidence checklist kept ready aboard.
                2. Logbook, alarm history and PMS records for the failed equipment secured.
                3. Damaged parts tagged and retained, with photographs and measurements.
                4. A factual damage report sent to the office for the surveyor and underwriters.

                ## Notes
                Keep the report factual. Leave cause and liability conclusions to the investigation and the surveyors.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A factual damage report with secured records, photographs and retained parts sent to the office within seven days of a failure."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-page damage evidence checklist for the engine room"
                - "Secure the alarm history and logbook pages for the failure"
                - "Tag and store damaged parts with photographs"
                - "Ask the agent to draft the factual damage report from your notes"
            - name: Fleet technical budget and maintenance strategy
              description: |-
                ## Purpose
                Superintendents and fleet managers answer for running costs per vessel, and the numbers are driven by spares, service engineers, lubricants, dry-dock accruals and breakdowns. Building a fleet view that ties spend to PMS findings and failure history lets you argue for preventive work instead of paying for repeat failures.

                ## Milestones
                1. Twelve months of technical spend per vessel split by category.
                2. The five most expensive repeat failures across the fleet identified.
                3. A maintenance strategy change proposed for each, with cost and expected saving.
                4. Next year's technical budget submitted with the reasoning attached.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A fleet technical budget submitted with spend by category per vessel and five repeat failures each given a costed strategy change."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export twelve months of technical spend per vessel"
                - "Rank repeat failures across the fleet by total cost"
                - "Propose a strategy change for the five costliest failures"
                - "Submit the technical budget with the reasoning attached @recurring(yearly)"
---

# Marine Engineering Practice

Marine Engineering Practice is for engineers who run, repair and answer for ship and offshore vessel machinery, from the cadet tracing pipework on a first trip to the chief engineer signing the oil record book and the superintendent ashore planning a fleet's dry-docks. It starts with foundations (the rules shelf, certificates, system tracing, emergency machinery and the PMS), moves into the operating routines of watchkeeping, performance, fuel, lubricants and environmental records, then the core skills, improvement studies, dated events such as class surveys, port state inspections and dry-docks, rank and career situations, and finally specialist work such as dual-fuel engines, torsional vibration and damage claims.

The rhythm is daily for machinery rounds, weekly for PMS job closure and the oil record book, monthly for engine performance, fuel samples, boiler water, ballast records, stores and emissions data, and quarterly for lube oil analysis and critical spares. The Operational checklist, Metrics log, Vendor and Development plan templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
