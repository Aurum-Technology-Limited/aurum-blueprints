---
id: engineering-practice.electrical-engineering-practice
name: Electrical Engineering Practice
description: "The working kit of an electrical engineer: single-line diagrams you trust, load, fault and protection studies, earthing, equipment specifications, energisation and the site safety habits that keep people clear of arc flash."
category: business
version: 1.0.0
tags: [engineering-practice, electrical-engineering-practice, engineer, power-systems, protection, earthing, arc-flash, switchgear]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - onboarding-30-60-90
    - vendor
    - risk-register
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Electrical Engineering Practice
          description: "Working as an electrical engineer: power distribution, load studies, protection and earthing, motor and switchgear specification, single-line diagrams and site safety."
          projects:
            - name: Electrical standards and reference shelf
              description: |-
                ## Purpose
                Most electrical design arguments end at a clause number, so an engineer who cannot find the right edition of IEC 60364, IEC 61439, IEC 60909 or the NEC and NFPA 70E family quickly loses time and credibility. Building a short, current shelf of the standards your projects are actually designed to, plus two good textbooks and the manufacturer guides you use most, means every calculation can cite its source.

                ## Milestones
                1. A list of the standards your employer or clients design to, with the edition each project uses.
                2. Access confirmed to each standard through the company library, a subscription or a purchased copy.
                3. Two reference texts on power system analysis and protection on your desk or shelf.
                4. Manufacturer application guides for your main switchgear, relay and cable suppliers saved in one folder.
                5. An annual date set to check for superseded editions.

                ## Notes
                Projects are designed to the edition named in the contract or the local wiring regulations, not always the newest one. Note both when they differ.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference list naming each governing standard, its edition and where to access it, saved where your team can find it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the standards named in your current project specifications"
                - "Ask the document controller which editions the company holds"
                - "Save the main switchgear and relay application guides in one folder"
                - "Check the reference list for superseded editions @recurring(yearly)"
            - name: Reading and marking up a single-line diagram
              description: |-
                ## Purpose
                The single-line diagram is the map every electrical decision is made from, and engineers who can read one fluently spot missing protection, wrong ratings and unsafe switching paths in minutes. Working through one real SLD from your site, symbol by symbol and rating by rating, turns it from a picture into a model you can reason about.

                ## Milestones
                1. One current SLD from your site or project printed at full size.
                2. Every symbol identified against the drawing legend or IEC 60617 conventions.
                3. Voltage levels, transformer ratings, fault levels and earthing arrangement noted for each board.
                4. Each protective device traced to the circuit it protects.
                5. A list of questions or apparent errors discussed with a senior engineer.

                ## Notes
                Ask for the latest revision from document control before you start. Marking up a superseded SLD teaches the wrong network.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A marked-up SLD with ratings, protection and earthing annotated, and a question list reviewed with a senior engineer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request the latest SLD revision from document control"
                - "Annotate voltage, fault level and earthing at each board"
                - "Trace every breaker and relay to the circuit it protects"
                - "Review your question list with a senior electrical engineer"
            - name: Electrical authorisation under the site safety rules
              description: |-
                ## Purpose
                On most industrial sites you cannot switch, isolate or issue permits on electrical equipment until you hold a written authorisation at a defined level, and working beyond it is a disciplinary matter as well as a danger. Knowing exactly what your current level allows, and what training and assessment a higher level needs, keeps you safe and makes you useful on site sooner.

                ## Milestones
                1. The site electrical safety rules read in full, including the definitions of each authorisation level.
                2. Your current authorisation level confirmed in writing by the senior authorised person.
                3. The training, assessment and site experience needed for a higher level listed.
                4. Assessment for the appropriate higher level booked or completed.
                5. A refresher date recorded for the authorisation.

                ## Notes
                Stop-work authority applies to you from day one, whatever your authorisation level. If an isolation or switching instruction looks wrong, stop and ask.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written authorisation at a stated level, with its scope and refresher date recorded in your competence file."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the site electrical safety rules end to end"
                - "Ask the senior authorised person what your current level covers"
                - "Book the assessment for a higher authorisation level"
                - "Confirm your authorisation refresher is still in date @recurring(yearly)"
            - name: Arc flash and shock boundaries for site visits
              description: |-
                ## Purpose
                Opening a panel door on a live switchboard can expose you to incident energy high enough to cause fatal burns, and design engineers on site visits are often the least prepared people in the room. Learning to read arc flash labels, keep to the approach boundaries and choose the right arc-rated clothing turns a site visit from a gamble into a planned exposure.

                ## Milestones
                1. The site arc flash labels for your most visited boards read and understood.
                2. Limited, restricted and arc flash boundaries explained back to a senior engineer.
                3. Arc-rated clothing and gloves of the required category issued and fitted.
                4. Test before touch practised with an approved voltage detector and proving unit.

                ## Notes
                NFPA 70E and similar rules treat energised work as the exception that needs justification, not the default. If a task can be done dead, do it dead.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "You can state the boundaries and PPE category for three named boards on your site, and hold the matching arc-rated kit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Photograph the arc flash labels on the boards you visit most"
                - "Ask the site electrical lead to walk you through one label"
                - "Collect arc-rated clothing in the category your work needs"
                - "Inspect your arc-rated clothing, gloves and face shield for damage @recurring(monthly:12)"
            - name: Walkdown of the site electrical network against the drawings
              description: |-
                ## Purpose
                Drawings drift from reality every time someone adds a feeder, swaps a breaker or retires a motor without updating the record. Walking every substation, transformer and motor control centre with the SLD in hand, and recording nameplates as you go, gives you an honest picture of the network and a starting asset list.

                ## Milestones
                1. Every substation and major switchboard visited with the current SLD.
                2. Nameplate data for transformers, switchgear and large motors photographed and tabulated.
                3. Differences between site and drawing marked up in red on a walkdown copy.
                4. The mark-ups passed to document control with a request for revision.
                5. A short list of visible defects such as missing labels, damaged covers or blocked access raised with maintenance.

                ## Notes
                Walk with an authorised person and follow the site's access rules for substations. A walkdown does not need any panel opened.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A nameplate table for all major electrical plant and a red-lined SLD submitted to document control."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Book a substation access escort with the site electrical team"
                - "Photograph transformer and switchgear nameplates at each substation"
                - "Red-line every difference between site and the SLD"
                - "Send the red-lined copy to document control for revision"
            - name: Electrical design basis for a new project
              description: |-
                ## Purpose
                Without an agreed design basis, every engineer on a project quietly assumes a different ambient temperature, fault level and earthing system, and the errors surface at the factory or on site. Writing one short document that fixes voltages, frequency, fault levels, tropical ambient and humidity, earthing arrangement, redundancy and the governing standards prevents months of rework.

                ## Milestones
                1. System voltages, frequency and permitted voltage variation stated.
                2. Design fault levels at each voltage, with the source of the utility data.
                3. Site conditions recorded: ambient temperature, humidity, altitude, corrosive or salt-laden air and hazardous areas.
                4. Earthing system, redundancy philosophy and essential load definitions agreed.
                5. The design basis reviewed by the lead engineer and issued at a controlled revision.

                ## Notes
                Coastal Caribbean sites need explicit allowances for salt, humidity and 40 C ambient on cable derating and enclosure ratings. Write the numbers, not just the words.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An issued electrical design basis document with voltages, fault levels, site conditions and earthing system stated and approved."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Collect the client's specifications and site climate data"
                - "Draft the voltage, fault level and earthing sections"
                - "Circulate the draft to the process and instrument leads for comment"
                - "Issue the design basis at a controlled revision"
            - name: Choosing power system study software
              description: |-
                ## Purpose
                Load flow, short-circuit, protection coordination and arc flash studies are now almost always done in software such as ETAP, SKM PowerTools, DIgSILENT PowerFactory or EasyPower, and switching tools later is expensive because models do not move cleanly. Comparing two or three packages against the studies you actually run, the clients you work for and the licence cost leads to a choice you can live with for years.

                ## Milestones
                1. The studies you run in a typical year listed with their frequency.
                2. Two or three packages shortlisted, including what your main clients use.
                3. Trial licences used to model the same small network in each.
                4. Licence, training and maintenance costs compared over three years.
                5. A recorded decision with the reasons.

                ## Notes
                Start from the **Purchase decision** template. Check that the package's relay and fuse libraries cover the manufacturers you actually specify.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written software decision comparing at least two packages on the same test network, with three-year cost."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the studies you ran in the last twelve months"
                - "Ask your two largest clients which study software they require"
                - "Model the same ten-bus network in each trial package"
                - "Record the decision and the three-year cost comparison"
            - name: Utility interface and fault level data request
              description: |-
                ## Purpose
                Every short-circuit, protection and arc flash result depends on the fault level and X/R ratio at the point of supply, and guessing it can make switchgear underrated or protection too slow. A formal request to the utility or grid operator for maximum and minimum fault levels, protection settings at the interface and supply voltage limits gives your studies a defensible starting point.

                ## Milestones
                1. The point of supply and metering arrangement identified on the SLD.
                2. A written request sent to the utility for fault levels, X/R ratio and interface protection settings.
                3. The utility's response filed with the date and reference.
                4. The data entered in the design basis and study models.

                ## Notes
                Ask for both maximum and minimum fault levels. Maximum sizes the switchgear; minimum decides whether protection will operate.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated utility letter or email giving maximum and minimum fault levels at the point of supply, filed and used in the models."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the point of supply reference on the site SLD"
                - "Write to the utility asking for maximum and minimum fault levels"
                - "Chase the request if no reply arrives within three weeks"
                - "Enter the utility data in the study model and design basis"
            - name: Load list and maximum demand estimate
              description: |-
                ## Purpose
                Transformer, generator and cable sizes all flow from the load list, yet it is often the least checked document on a project. Building a load list with running, standby and intermittent loads, applying diversity factors you can justify, and stating maximum demand at each board gives every later sizing decision a firm base.

                ## Milestones
                1. Every load listed with rating, efficiency, power factor and duty.
                2. Loads assigned to boards matching the SLD.
                3. Diversity and utilisation factors stated with their source.
                4. Maximum demand calculated for each board and the incoming supply.
                5. Spare capacity allowance agreed with the client and recorded.

                ## Notes
                Ask the agent to cross-check the load list against the mechanical equipment list for any motors missing on either side, then confirm each by hand.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checked load list giving maximum demand per board and at the incomer, with diversity factors referenced."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export the mechanical equipment list with motor ratings"
                - "Assign each load to a board on the SLD"
                - "Apply and reference diversity factors for each board"
                - "Ask the agent to compare the load list with the equipment list"
            - name: Cable schedule and routing for a project
              description: |-
                ## Purpose
                Cables are often the largest electrical quantity on a project, and a schedule that misses segregation, route lengths or tray fill causes late redesign and site clashes. Producing a cable schedule tied to the SLD, with routes measured on the layout, segregation between power, control and instrument cables, and tray fill checked, gives procurement and the installer one reliable list.

                ## Milestones
                1. Every cable listed with tag, from and to, type, size, length and route.
                2. Routes measured on the plot plan or 3D model with allowance for drops and terminations.
                3. Segregation between MV, LV, control and instrument cables applied on every tray.
                4. Tray fill checked against the support design and spare capacity left.
                5. The schedule issued at a controlled revision and linked to the SLD.

                ## Notes
                Measured lengths beat estimated ones. Add a fixed allowance at each end and note it in the schedule header.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An issued cable schedule covering every circuit on the SLD with measured lengths, routes and segregation class."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Set up the cable schedule columns from the client template"
                - "Measure each main route on the plot plan or model"
                - "Assign a segregation class to every cable"
                - "Check tray fill on the three busiest routes"
            - name: Protection settings register and audit
              description: |-
                ## Purpose
                Relay settings changed during commissioning or after a nuisance trip are rarely written back to the record, so the settings in service often differ from the study that justified them. Keeping one register of every relay with its approved settings, the study it came from and the date last verified catches drift before it causes a slow clearance or a site-wide trip.

                ## Milestones
                1. Every protection relay listed with location, model, firmware and CT and VT ratios.
                2. Approved settings files stored against each relay with the study reference.
                3. Settings in service compared with approved settings for the critical boards.
                4. Any change to settings routed through management of change.
                5. A quarterly audit routine running.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register covering every relay on site, with in-service settings matched to approved settings for all critical boards."
                cadence: rolling
              tasks:
                - "List every protection relay on the critical boards"
                - "Download the in-service settings from three relays and compare"
                - "Raise a change request for any unapproved setting found"
                - "Audit a sample of relays against approved settings @recurring(quarterly)"
            - name: Thermographic survey of switchboards and connections
              description: |-
                ## Purpose
                Loose and corroded connections heat up for weeks before they fail, and a thermal camera finds them while the equipment is in service and the fix is a planned retorque. Running a regular infrared survey of switchgear, busbar joints, transformer terminals and motor control centres, with findings ranked by temperature rise, prevents the fires and flashovers that follow.

                ## Milestones
                1. A route of boards and connections to survey, with viewing windows or safe access noted.
                2. Baseline thermal images taken at a known load.
                3. Findings ranked by temperature rise above ambient or a similar phase.
                4. Repair work orders raised for every serious finding.
                5. Repeat images taken after repair to confirm.

                ## Notes
                Surveys need a reasonable load to show defects. Record the load current with each image, or the comparison next time is meaningless.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thermal images and a ranked findings list for every board on the route, with work orders for each serious finding."
                cadence: cyclic
              tasks:
                - "Draw up the survey route from the substation list"
                - "Book a thermographer or the site camera and an authorised escort"
                - "Raise work orders for findings above the repair threshold"
                - "Run the infrared survey route at normal load @recurring(quarterly)"
            - name: Battery and UPS health checks
              description: |-
                ## Purpose
                Switchgear tripping supplies and UPS systems depend on batteries that fail quietly, and a dead tripping battery means breakers cannot open on a fault. A short monthly check of float voltage, cell condition, room ventilation and alarms, with an annual discharge or impedance test, keeps the last line of protection working.

                ## Milestones
                1. Every DC tripping battery and UPS on site listed with age and rating.
                2. A monthly check sheet in use covering voltage, visual condition and alarms.
                3. Annual capacity or impedance tests scheduled with results recorded.
                4. A replacement plan for batteries near end of life.

                ## Notes
                Start from the **Operational checklist** template. Battery rooms can hold hydrogen; check ventilation and keep ignition sources out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly battery checks recorded for twelve months with no missed sites, and a dated replacement plan for ageing banks."
                cadence: rolling
              tasks:
                - "List every tripping battery and UPS with install date"
                - "Write a one-page monthly battery check sheet"
                - "Check float voltage, alarms and battery room ventilation @recurring(monthly:9)"
                - "Schedule annual impedance or discharge tests with the vendor"
            - name: Earthing and lightning protection test cycle
              description: |-
                ## Purpose
                Earth electrodes corrode and bonding conductors get cut during civil works, so an earthing system that tested well at handover can be unsafe five years later. A yearly cycle of earth resistance tests, bonding continuity checks and lightning protection inspection, timed before the wet season, keeps touch voltages and lightning risk where the design intended.

                ## Milestones
                1. A list of earth pits, main earth bars and lightning protection down conductors with locations.
                2. Earth electrode resistance measured and compared with design values.
                3. Bonding continuity checked at critical structures and equipment.
                4. Defects repaired and retested, with results filed.

                ## Notes
                Fall of potential and clamp tests give different answers on interconnected grids. Use the same method every year so the trend means something.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly earthing test report covering every listed earth pit and down conductor, with defects closed."
                cadence: cyclic
              tasks:
                - "Map every earth pit and down conductor on a site plan"
                - "Record the test method and instrument used for each point"
                - "Repair and retest any point above the design value"
                - "Test earthing and lightning protection before the wet season @recurring(yearly)"
            - name: Transformer oil analysis and gas trending
              description: |-
                ## Purpose
                Dissolved gas analysis of transformer oil shows overheating, partial discharge and arcing long before a transformer fails, and replacing a large power transformer can take a year. Sampling oil on a fixed cycle and trending gases and moisture, rather than reading each report alone, gives early warning on your most expensive and slowest-to-replace assets.

                ## Milestones
                1. Every oil-filled transformer listed with rating, age and criticality.
                2. A sampling interval agreed for each, shorter for critical units.
                3. Results from the laboratory trended in one sheet per transformer.
                4. Action thresholds agreed with the laboratory or manufacturer.
                5. Any rising trend escalated with a recommended action.

                ## Notes
                Start from the **Metrics log** template for the trend sheets. Sample by the laboratory's method; poor sampling technique produces false alarms.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A gas and moisture trend sheet for every oil-filled transformer, updated after each sampling round."
                cadence: cyclic
              tasks:
                - "List oil-filled transformers and rank them by criticality"
                - "Agree sampling intervals and thresholds with the oil laboratory"
                - "Enter past results into one trend sheet per transformer"
                - "Send the annual oil sampling round to the laboratory @recurring(yearly)"
            - name: Arc flash label and study currency check
              description: |-
                ## Purpose
                Arc flash labels are only true for the network and settings they were calculated on, and a new transformer, a changed relay setting or a higher utility fault level can make them wrong overnight. A yearly check that compares changes since the last study with the labels in the field tells you when a label update or a full restudy is due.

                ## Milestones
                1. The date and revision of the current arc flash study recorded.
                2. Network and settings changes since that study listed from management of change records.
                3. Labels in the field checked for presence, legibility and matching revision.
                4. A decision recorded on whether a restudy is needed.

                ## Notes
                Many standards expect a review at least every five years and after any significant change. Do not wait for the five years if the network has changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly record listing changes since the last arc flash study, label condition and a restudy decision."
                cadence: cyclic
              tasks:
                - "Find the date and revision of the current arc flash study"
                - "Pull electrical change records since that study"
                - "Walk the site and note missing or faded arc flash labels"
                - "Review network changes against the arc flash study @recurring(yearly)"
            - name: Insulation resistance trending for critical motors
              description: |-
                ## Purpose
                Motor windings in humid, dusty plant lose insulation strength gradually, and a single megger reading means little without its history. Trending insulation resistance and polarisation index for the motors whose failure stops production lets you plan a rewind or dry-out during a shutdown instead of after a burnout.

                ## Milestones
                1. Critical motors listed with voltage, rating and spare availability.
                2. Test voltage and method agreed for each motor class.
                3. Readings corrected to a reference temperature and trended.
                4. A threshold set that triggers a dry-out, clean or rewind plan.

                ## Notes
                Insulation tests need the motor isolated and proved dead under a permit. Discharge windings fully after testing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Temperature-corrected insulation trends for every critical motor, each with a stated action threshold."
                cadence: rolling
              tasks:
                - "List the motors whose failure would stop production"
                - "Agree the test voltage for each motor voltage class"
                - "Plot corrected insulation readings for each critical motor"
                - "Test critical motors that are offline for other work @recurring(quarterly)"
            - name: Power quality and energy bill review
              description: |-
                ## Purpose
                Low power factor, harmonic distortion and demand peaks show up first on the electricity bill and in unexplained trips, long before anyone commissions a study. A monthly look at the energy bill, the main meter's demand profile and any power quality analyser data finds penalty charges, overloaded feeders and harmonic problems while they are cheap to fix.

                ## Milestones
                1. Twelve months of bills collected with demand, energy and power factor charges separated.
                2. Main incomer metering data downloaded for at least one typical month.
                3. Total harmonic distortion checked at the main boards against the applicable limits.
                4. A short monthly note of anomalies and actions in use.

                ## Notes
                Start from the **Metrics log** template. IEEE 519 and IEC 61000 limits apply at different points; state which one your utility uses.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly notes on demand, power factor and harmonics, each with any penalty charge and its cause identified."
                cadence: rolling
              tasks:
                - "Ask accounts for the last twelve electricity bills"
                - "Separate demand, energy and power factor charges in a sheet"
                - "Download a month of incomer meter data"
                - "Review the bill, demand peak and power factor @recurring(monthly:14)"
            - name: Standby generator test runs and fuel readiness
              description: |-
                ## Purpose
                Standby generators that only start for a few minutes off load wet-stack, and fuel stored for months grows bacteria and water, so many fail the first real outage. A monthly test run on load through the actual transfer switch, with a quarterly fuel check, proves the essential supply works before a storm or grid fault tests it for you.

                ## Milestones
                1. Each generator listed with rating, essential loads and transfer arrangement.
                2. A monthly on-load test procedure agreed with operations.
                3. Test results logged with start time, load and any alarms.
                4. Fuel sampled and tank water drained on a fixed cycle.
                5. Faults found during tests closed through maintenance.

                ## Notes
                Transferring essential loads during a test is a planned switching operation. Agree the time with operations and follow the switching rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly on-load generator tests logged, with fuel checks recorded each quarter."
                cadence: rolling
              tasks:
                - "Write a one-page on-load generator test procedure"
                - "Agree a monthly test window with operations"
                - "Run the generator on load through the transfer switch @recurring(monthly:5)"
                - "Sample fuel and drain water from the day tank @recurring(quarterly)"
            - name: Short-circuit calculations by hand to IEC 60909
              description: |-
                ## Purpose
                Software gives fault currents to three decimal places whether or not the model is right, and the only defence is an engineer who can estimate the answer by hand. Working a real network through the IEC 60909 method, with impedances, the voltage factor and peak current, builds the instinct to spot a wrong source impedance or a missing motor contribution.

                ## Milestones
                1. A small network of utility source, transformer, cables and motors chosen from your site.
                2. Impedances converted to a common base and the equivalent source found.
                3. Initial symmetrical and peak short-circuit currents calculated at two buses.
                4. Hand results compared with the software model within a stated tolerance.
                5. Differences explained in a short note.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand calculation of fault currents at two buses that agrees with the software model, or with every difference explained."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a five-bus section of your site network to calculate"
                - "Convert every impedance to a common base"
                - "Calculate initial and peak fault current at two buses"
                - "Compare your answers with the study software output"
            - name: Cable sizing from first principles
              description: |-
                ## Purpose
                Cable sizing looks routine until a hot tray, a long run or a high fault level makes the obvious size wrong. Sizing a set of real circuits by current capacity with installation and grouping derating, voltage drop and adiabatic fault withstand teaches which of the three governs and when.

                ## Milestones
                1. Five real circuits chosen: a long LV feeder, a motor, a tray with heavy grouping, a buried MV cable and a final circuit.
                2. Each sized for current capacity with correction factors referenced.
                3. Voltage drop checked under running and starting conditions.
                4. Fault withstand checked against the protective device clearing time.
                5. The governing criterion noted for each circuit.

                ## Notes
                High ambient and grouped trays in tropical plants often make derating the deciding factor. Do not reuse temperate correction tables.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five worked cable sizing calculations, each showing current, voltage drop and fault withstand checks and the governing criterion."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose five circuits that cover different installation methods"
                - "Apply ambient and grouping correction factors to each"
                - "Check voltage drop at motor start for the motor circuit"
                - "Check adiabatic fault withstand against the breaker clearing time"
            - name: Protection coordination with time-current curves
              description: |-
                ## Purpose
                Good coordination means the device nearest a fault clears it and nothing upstream moves, and poor coordination is why a single motor fault can black out a whole plant. Plotting real relays, fuses and breakers on time-current curves, and checking grading margins at each fault level, builds the judgement to set protection and to review other people's settings.

                ## Milestones
                1. One radial path chosen from incomer to a final motor or feeder.
                2. Every device on the path plotted on one time-current chart.
                3. Grading margins checked at maximum and minimum fault levels.
                4. Motor starting and transformer inrush shown clear of the curves.
                5. Proposed settings reviewed with a protection engineer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A time-current chart for a full radial path with grading margins checked at two fault levels and reviewed by a protection engineer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one radial path from incomer to a motor feeder"
                - "Plot every device on that path on one chart"
                - "Check grading margins at maximum and minimum fault level"
                - "Ask a protection engineer to review your chart"
            - name: Motor starting and voltage dip analysis
              description: |-
                ## Purpose
                Starting a large motor direct on line can dip the bus voltage far enough to drop contactors and trip other drives, which is why starting method is a system decision, not a motor one. Analysing one large motor start, comparing direct on line, soft starter and VFD, shows the trade-offs and the numbers your client will ask about.

                ## Milestones
                1. The largest motor on one bus chosen, with locked rotor data from its datasheet.
                2. Voltage dip at the motor and the bus estimated by hand.
                3. The start simulated in study software with the actual source.
                4. Direct on line, soft starter and VFD options compared for dip, cost and starting time.
                5. A recommendation written for that motor.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A short motor starting study showing voltage dip for three starting methods and a recommended method."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get the locked rotor current and torque curve from the motor datasheet"
                - "Estimate the bus voltage dip by hand"
                - "Run a motor starting case in the study software"
                - "Write a one-page comparison of three starting methods"
            - name: Earthing system design for step and touch voltage
              description: |-
                ## Purpose
                A substation earth grid has to keep step and touch voltages within tolerable limits during an earth fault, and an undersized grid is invisible until someone is standing in the wrong place. Working through a grid design using IEEE 80 or the equivalent IEC method, with measured soil resistivity, teaches how grid size, depth, rods and surface layer change the result.

                ## Milestones
                1. Soil resistivity data obtained from a Wenner survey or site report.
                2. Earth fault current and clearing time established for the substation.
                3. Grid resistance and step and touch voltages calculated for a trial layout.
                4. The layout adjusted until calculated voltages fall within tolerable limits.
                5. Assumptions and results set out in a checked calculation.

                ## Notes
                Use a soil model fitted to measured data. Assuming uniform soil can understate touch voltages badly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An earthing calculation for one substation showing step and touch voltages within tolerable limits, reviewed by a senior engineer."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Find soil resistivity results for one substation"
                - "Confirm earth fault current and clearing time for that substation"
                - "Calculate step and touch voltages for a trial grid"
                - "Ask a senior engineer to check the calculation"
            - name: Hazardous area classification and Ex equipment
              description: |-
                ## Purpose
                On gas, oil and chemical sites, a motor or junction box in the wrong zone with the wrong protection concept is an ignition source waiting for a release. Learning to read hazardous area classification drawings, match equipment marking to zone, gas group and temperature class under IEC 60079, and spot common installation faults makes you safe to specify and inspect.

                ## Milestones
                1. The hazardous area classification drawing for one unit read and understood.
                2. Ex markings decoded for ten installed items, including protection concept, gas group and temperature class.
                3. Each item checked as suitable for its zone.
                4. Common faults such as wrong glands, missing stoppers and painted flamepaths recognised on a walk with an inspector.
                5. Recognised Ex competence training booked or completed.

                ## Notes
                Classification is set by the process safety team. Electrical engineers select and install to it; they do not redraw zones on their own.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten installed Ex items checked against the classification drawing with marking decoded, and Ex training booked or completed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Get the hazardous area classification drawing for one unit"
                - "Photograph and decode the Ex marking on ten installed items"
                - "Walk the unit with an Ex inspector to see common faults"
                - "Book a recognised Ex competence course"
            - name: Harmonics from variable speed drives
              description: |-
                ## Purpose
                Variable speed drives save energy but inject harmonic currents that overheat transformers and neutral conductors, upset generators and trip sensitive equipment. Studying how six-pulse, twelve-pulse and active front end drives behave, and how filters and transformer derating respond, prepares you for the harmonic questions every drive project raises.

                ## Milestones
                1. Harmonic spectra for two drive types obtained from manufacturer data.
                2. Voltage distortion at the point of common coupling estimated for a planned drive installation.
                3. Results compared with the limits your utility applies.
                4. Mitigation options listed with cost and effect: line reactors, passive filters, active filters, multi-pulse and active front end.
                5. Transformer derating for harmonic load checked.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked harmonic estimate for one drive installation compared with the applicable limits, with mitigation options costed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a drive supplier for harmonic spectra of two drive types"
                - "Estimate voltage distortion at the point of common coupling"
                - "List mitigation options with indicative cost"
                - "Check transformer derating for the harmonic load"
            - name: Load flow studies and reactive power
              description: |-
                ## Purpose
                Load flow tells you whether voltages stay within limits and equipment stays within ratings across every operating case, from minimum load to a transformer out of service. Building and running load flow cases on a real network, with tap changers and reactive power sources modelled, is the base skill under every other power system study.

                ## Milestones
                1. A network model built from the SLD and nameplate data.
                2. Normal, maximum, minimum and contingency cases defined.
                3. Bus voltages and branch loadings checked against limits in each case.
                4. Transformer taps and capacitor banks set to bring voltages within range.
                5. A short study note issued with the cases and findings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A load flow study note covering at least four operating cases with voltage and loading findings, checked by a senior engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Build the network model from the walkdown nameplate data"
                - "Define normal, maximum, minimum and one contingency case"
                - "Flag every bus outside the voltage limits"
                - "Write a two-page note of cases, findings and tap settings"
            - name: Power transformer specification and bid evaluation
              description: |-
                ## Purpose
                A transformer specification that leaves out impedance, vector group, cooling class, loss capitalisation or tropical ambient invites bids that are cheap to buy and expensive to own. Writing a full specification and evaluating bids on capitalised losses as well as price gets a transformer that fits the network and the budget over thirty years.

                ## Milestones
                1. A specification covering rating, voltages, impedance, vector group, tapping range, cooling, ambient and tests to IEC 60076.
                2. Loss capitalisation rates agreed with the client.
                3. Bids tabulated for compliance, deviations, price and capitalised losses.
                4. Clarifications sent and answered in writing.
                5. A recommendation issued with the evaluation table.

                ## Notes
                Start from the **Vendor** template for each bidder. Impedance affects both fault level downstream and voltage regulation; set it from the studies, not the catalogue.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An issued transformer specification and a bid evaluation ranking at least two bidders on price plus capitalised losses."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Take impedance and fault level limits from the short-circuit study"
                - "Agree loss capitalisation rates with the client"
                - "Tabulate each bid for deviations and capitalised losses"
                - "Issue the recommendation with the evaluation table"
            - name: MV switchgear specification
              description: |-
                ## Purpose
                Medium voltage switchgear is chosen once and lived with for decades, and the wrong short-time rating, internal arc classification or interlocking scheme is almost impossible to fix later. A specification that states ratings, arc classification, metering and protection, interlocks, remote racking and spares to IEC 62271 or the equivalent family gives bidders a clear target.

                ## Milestones
                1. Rated voltage, current, short-time withstand and peak ratings taken from the studies.
                2. Internal arc classification and pressure relief route specified for the room.
                3. Protection, metering, interlocking and control requirements written per panel type.
                4. Factory tests and documentation listed.
                5. The specification reviewed by operations for maintenance access and switching.

                ## Notes
                Ask operations how they switch today. Remote racking and closing reduce arc flash exposure and are cheaper to specify than to retrofit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An MV switchgear specification with ratings traced to studies, arc classification stated and operations comments closed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Pull short-time and peak withstand ratings from the fault study"
                - "Specify internal arc classification for the switchroom layout"
                - "Write panel schedules for incomers, feeders and bus couplers"
                - "Ask operations to review switching and maintenance access"
            - name: LV motor control centre specification
              description: |-
                ## Purpose
                Motor control centres carry most of a plant's drives, and choices about form of separation, withdrawable units and motor protection decide how safely and quickly a bucket can be changed with the rest live. Specifying an MCC to IEC 61439 with clear unit schedules makes the difference between a board maintainers trust and one they fear.

                ## Milestones
                1. Unit schedule listing every starter, feeder and drive with ratings.
                2. Form of separation, withdrawable or plug-in design and enclosure rating chosen and justified.
                3. Motor protection relay functions and communications defined.
                4. Spare units and space allowance set.
                5. Design verification and routine test evidence required from the builder.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An MCC specification with a complete unit schedule, stated form of separation and required IEC 61439 verification evidence."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft the unit schedule from the load list"
                - "Choose the form of separation with maintenance input"
                - "Define motor protection functions for each starter type"
                - "List the design verification evidence the builder must supply"
            - name: Power factor correction business case
              description: |-
                ## Purpose
                Utilities that charge for reactive power or kVA demand can make low power factor one of a site's largest avoidable costs. Sizing a correction scheme from real meter data, checking it against harmonic resonance and putting payback in front of the budget holder turns a line on the bill into a funded project or a clear no.

                ## Milestones
                1. Twelve months of reactive power and penalty charges quantified.
                2. Required correction sized from meter data at the incomer.
                3. Resonance risk with existing drives checked and detuned banks considered.
                4. Capital cost, savings and simple payback calculated.
                5. A decision recorded by the budget holder.

                ## Notes
                Plain capacitor banks on a network with many drives can resonate and fail. Check harmonics before you buy.
              priority: low
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A business case with sizing, resonance check and payback presented to the budget holder, with the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Total the reactive power charges from twelve months of bills"
                - "Size the correction from incomer meter data"
                - "Check resonance risk against the existing drive load"
                - "Present the payback to the budget holder"
            - name: Replacing obsolete protection relays
              description: |-
                ## Purpose
                Electromechanical and early digital relays that are past support have no spares, no settings software and sometimes no one left who understands them. Surveying the installed relays, ranking them by obsolescence and consequence, and phasing replacement with new settings and testing protects the plant without one large risky outage.

                ## Milestones
                1. Every installed relay classed as current, mature, obsolete or unsupported.
                2. Obsolete relays ranked by consequence of failure.
                3. A replacement standard chosen for each relay function.
                4. Replacement phased into planned outages with settings studies and testing.
                5. The first phase completed and the register updated.

                ## Notes
                Each replacement is a change to protection. Route it through management of change, with new settings calculated, applied and tested before energisation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranked relay obsolescence list and a phased replacement plan approved, with the first phase completed and tested."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask relay manufacturers for support status of installed models"
                - "Rank obsolete relays by consequence of failure"
                - "Match each relay function to a current replacement model"
                - "Fit the first replacement phase into the next planned outage"
            - name: Arc flash mitigation for high incident energy boards
              description: |-
                ## Purpose
                Some boards come out of an arc flash study with incident energy so high that no practical PPE covers it, which means nobody should work on them energised. Comparing mitigation options such as maintenance mode switches, arc flash relays, faster upstream settings, current-limiting devices and remote racking lets you bring the energy down to a level where work can be planned safely.

                ## Milestones
                1. Boards above the site's acceptable incident energy listed from the study.
                2. Mitigation options identified for each with effect on incident energy.
                3. Effects on coordination and nuisance tripping checked.
                4. Cost and outage needs compared.
                5. Chosen options approved through management of change.

                ## Notes
                Start from the **Risk register** template to rank the boards. Until mitigation is in, those boards are worked de-energised only.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A mitigation decision for every board above the site's incident energy limit, with recalculated energy and approval recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List boards above the site incident energy limit"
                - "Model a maintenance mode setting on the worst board"
                - "Check each option's effect on protection coordination"
                - "Submit chosen mitigations through management of change"
            - name: Standby generator sizing for essential loads
              description: |-
                ## Purpose
                Generators sized on running kW alone often stalls when the largest motor starts or overheats on harmonic load from UPS and drives. Sizing from a proper essential load list, starting sequence, transient voltage dip and non-linear load gives a set that carries the site through a grid failure.

                ## Milestones
                1. Essential loads agreed with operations and listed with ratings.
                2. Load step sequence defined, including the largest motor start.
                3. Generator size checked for running load, transient dip and non-linear load.
                4. Fuel storage sized for the agreed autonomy.
                5. Sizing recorded and confirmed with the generator supplier.

                ## Notes
                For hurricane exposure, ask how many days the site must run before fuel resupply is realistic. That sets the tank, not the catalogue.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A generator sizing calculation covering running, transient and harmonic load, with autonomy and supplier confirmation recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the essential load list with operations"
                - "Define the load step sequence for an outage"
                - "Ask two suppliers to run their sizing software on your load steps"
                - "Record the chosen rating and fuel autonomy"
            - name: MV switchboard energisation
              description: |-
                ## Purpose
                Energising a new MV board for the first time is the moment errors in cabling, phasing, protection or earthing become dangerous. A dated energisation with a pre-energisation checklist, tested protection, a written switching programme and everyone briefed turns a risky event into a controlled one.

                ## Milestones
                1. Insulation, continuity, phasing and primary injection tests complete and signed.
                2. Protection settings applied and secondary injection tested.
                3. Interlocks, trip circuits and tripping supply proved.
                4. A switching programme approved and the team briefed.
                5. The board energised, phasing confirmed live and handed to operations.

                ## Notes
                Start from the **Operational checklist** template. Any person can stop the energisation if something looks wrong; say so at the briefing.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board energised on the planned date with every pre-energisation test signed and a handover note accepted by operations."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Draft the pre-energisation checklist for the board"
                - "Confirm primary and secondary injection tests are signed"
                - "Get the switching programme approved by the authorised person"
                - "Brief the energisation team, including stop-work authority"
            - name: Planned substation outage for maintenance
              description: |-
                ## Purpose
                Breaker servicing, busbar inspection and relay testing need the substation dead, and an outage has to be negotiated with production, planned to the hour and recovered on time. Preparing scope, isolations, contractors and a restoration sequence in advance means the work gets done in the window and the plant comes back without surprises.

                ## Milestones
                1. Outage scope agreed and frozen with maintenance and operations.
                2. Alternative supplies or load shedding arranged for affected loads.
                3. Isolation and switching programmes written and approved.
                4. Contractors, test equipment and spares confirmed on site before day one.
                5. Restoration completed and lessons noted for the next outage.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The outage completed within its agreed window, with the frozen scope done and restoration signed off."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree the outage window with production planning"
                - "Freeze the outage scope with maintenance"
                - "Arrange temporary supply for loads that must stay live"
                - "Hold a lessons meeting within a week of restoration"
            - name: Writing and rehearsing an HV switching programme
              description: |-
                ## Purpose
                Every switching programme is the step-by-step script for changing the state of an HV network, and errors in order or missing earths are a classic cause of serious incidents. Writing one for a real operation, having it checked independently and walking it through on the drawings before the day builds the precision these documents need.

                ## Milestones
                1. The operation's purpose and end state described in one paragraph.
                2. Every switching step numbered with equipment, action and location.
                3. Points of isolation, proving dead and earthing included.
                4. The programme checked by a second authorised person.
                5. A walk-through on the SLD held with the people who will switch.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An independently checked switching programme rehearsed on the SLD with the switching team before the operation date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Describe the operation's end state in one paragraph"
                - "Number every switching, proving and earthing step"
                - "Ask a second authorised person to check the programme"
                - "Walk the switching team through it on the SLD"
            - name: Hurricane season electrical readiness
              description: |-
                ## Purpose
                In the Caribbean, June to November brings storms that flood substations, cut grid supply for days and drive salt into exposed equipment. A yearly readiness check before the season, covering generators, fuel, flood exposure, spares and a shutdown and restart plan, means the electrical system survives the storm and comes back in order.

                ## Milestones
                1. Substations and switchrooms at flood risk identified with mitigation in place.
                2. Generators tested and fuel stock topped up.
                3. Critical electrical spares counted against the list.
                4. A controlled shutdown and staged restart sequence agreed with operations.
                5. Post-storm inspection checklist ready for drying, insulation testing and re-energisation.

                ## Notes
                Never re-energise flooded switchgear or cables until they are cleaned, dried and insulation tested.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed pre-season checklist each year, with flood risks, fuel, spares and the restart sequence signed off before the season."
                cadence: cyclic
              tasks:
                - "List switchrooms and substations below known flood levels"
                - "Count critical electrical spares against the spares list"
                - "Agree the staged restart sequence with operations"
                - "Run the pre-season electrical readiness check @recurring(yearly)"
            - name: First ninety days as a graduate electrical engineer
              description: |-
                ## Purpose
                Graduates arrive knowing the theory of power systems but not the site's network, its rules or where the drawings live. A deliberate first ninety days, covering the SLD, safety rules, one study under supervision and a mentor relationship, gets a new engineer contributing safely instead of waiting to be given work.

                ## Milestones
                1. A mentor named and weekly meetings in the diary.
                2. The site network and its main substations walked with an authorised person.
                3. Site electrical safety rules training completed.
                4. One small calculation or study completed and checked.
                5. A written note of what you will learn in the next ninety days.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask for one real deliverable early, even a small one; it teaches more than reading.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A checked calculation or study, safety rules training complete and a written plan for the next ninety days, all within ninety days."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your manager to name a mentor this week"
                - "Book safety rules training for the first month"
                - "Ask for one small calculation you can own"
                - "Meet your mentor and bring one question @recurring(weekly:mon)"
            - name: Moving from the design office to a site electrical role
              description: |-
                ## Purpose
                Design engineers who move to site discover that installations differ from drawings, contractors interpret specifications creatively and decisions are needed in hours, not weeks. Preparing for that move, by learning installation practice, test methods and how site queries flow back to design, makes the first months productive rather than painful.

                ## Milestones
                1. Installation details for cable glanding, termination, support and segregation reviewed with an experienced electrician.
                2. Standard pre-commissioning tests understood and witnessed once each.
                3. The site query and technical deviation process mapped.
                4. Contacts made with the design team who will answer your queries.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each standard pre-commissioning test witnessed once and the site query route written down with named design contacts."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Spend a shift with an experienced electrician on terminations"
                - "Witness an insulation resistance and a continuity test"
                - "Map how a site query reaches the design team"
                - "List the design engineers you will raise queries with"
            - name: Leading electrical installation for a contractor
              description: |-
                ## Purpose
                As a contractor's electrical lead, you are judged on whether the installation passes inspection and testing first time, and whether the paperwork is complete at handover. Running an inspection and test plan with hold points, test sheets and a weekly review keeps quality visible and avoids a pile of defects at the end.

                ## Milestones
                1. An inspection and test plan agreed with the client with hold and witness points.
                2. Test sheet formats agreed for every test type.
                3. A weekly review of completed sheets and open defects running.
                4. Installation defects tracked to closure with photos.
                5. A complete test dossier ready for handover.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An agreed inspection and test plan and a complete signed test dossier handed over with every defect closed."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Draft the inspection and test plan with hold points"
                - "Agree test sheet formats with the client engineer"
                - "Review completed test sheets and open defects @recurring(weekly:fri)"
                - "Photograph each defect when found and when closed"
            - name: Distribution network reliability as a utility engineer
              description: |-
                ## Purpose
                Utility engineers are measured on how often customers lose supply and for how long, so feeder faults, vegetation, ageing equipment and protection performance all show up in the reliability indices. Tracking SAIDI and SAIFI by feeder, and targeting the worst performers each year, turns reliability from a report into a work plan.

                ## Milestones
                1. Outage records for the last year grouped by feeder and cause.
                2. SAIDI and SAIFI calculated for each feeder.
                3. The ten worst feeders ranked with their main causes.
                4. An improvement plan for the top three feeders agreed.
                5. A monthly reliability review in place.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feeder-level SAIDI and SAIFI for the past year, with an agreed improvement plan for the three worst feeders."
                cadence: rolling
              tasks:
                - "Export last year's outage records by feeder"
                - "Calculate SAIDI and SAIFI for each feeder"
                - "Rank the ten worst feeders by cause"
                - "Update feeder reliability figures and causes @recurring(monthly:20)"
            - name: Building services electrical design for a commercial building
              description: |-
                ## Purpose
                Building services work brings different priorities from heavy industry: lighting design, small power, fire alarm interfaces, life safety supplies, energy codes and architects who move walls late. Taking one commercial building from distribution design to coordinated drawings teaches the local wiring regulations and the coordination these projects demand.

                ## Milestones
                1. Distribution boards, risers and the main switchboard laid out with the architect.
                2. Lighting designed to the required illuminance with emergency lighting.
                3. Small power, data containment and life safety supplies coordinated with other services.
                4. Cable and protective device schedules calculated to the local wiring regulations.
                5. Drawings issued after a clash check with mechanical services.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A coordinated set of electrical services drawings and schedules issued for one building after a clash check."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Agree riser and switchroom locations with the architect"
                - "Run lighting calculations for typical rooms"
                - "Coordinate life safety supplies with the fire engineer"
                - "Run a clash check with the mechanical services model"
            - name: Sole electrical engineer in a small consultancy
              description: |-
                ## Purpose
                When you are the only electrical engineer in a small firm, there is nobody down the corridor to check your fault calculation or tell you a standard has changed. Setting up an external checker arrangement, a peer network and a steady CPD habit protects your clients and your professional standing.

                ## Milestones
                1. An external engineer agreed to check calculations above a defined risk level.
                2. Professional indemnity cover confirmed for the electrical scope you offer.
                3. A peer group or professional institution branch joined.
                4. A CPD log in use with monthly entries.

                ## Notes
                Write down which work you will not take on alone. Declining a scope outside your competence is part of the professional code, not a lost sale.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A named external checker, confirmed indemnity cover and twelve months of CPD entries in your log."
                cadence: rolling
              tasks:
                - "Ask a trusted senior engineer to act as external checker"
                - "Confirm your indemnity cover includes electrical design"
                - "Write a list of scopes you will not take on alone"
                - "Log one CPD activity and what you learned @recurring(monthly:27)"
            - name: Taking on the site lead electrical engineer role
              description: |-
                ## Purpose
                Becoming the site's lead electrical engineer or senior authorised person makes you answerable for the safety rules, the authorisations of others and the condition of the whole network. Setting out your duties, the records you rely on and a monthly walk of the critical plant in the first months makes the responsibility manageable instead of overwhelming.

                ## Milestones
                1. Your written appointment and its duties read and acknowledged.
                2. The register of authorised persons reviewed and gaps raised.
                3. Key records located: protection settings, arc flash study, earthing tests, battery logs.
                4. A monthly walk of critical substations in the diary.
                5. A list of the top five electrical risks agreed with the site manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An acknowledged appointment, a reviewed authorisation register and a top five risk list agreed with the site manager."
                cadence: rolling
              tasks:
                - "Read your written appointment and list its duties"
                - "Review the register of authorised persons for lapsed authorisations"
                - "Agree the top five electrical risks with the site manager"
                - "Walk the critical substations and note their condition @recurring(monthly:3)"
            - name: Full arc flash study for a site
              description: |-
                ## Purpose
                An arc flash study calculates incident energy at every point where people might work, and the labels, PPE and work rules all depend on it being right. Running a full study to IEEE 1584 from a verified model, with protection settings as found and electrode configurations chosen properly, produces the evidence a site needs to plan energised and de-energised work.

                ## Milestones
                1. A network model verified against the latest walkdown and protection register.
                2. Equipment data gathered: gap, enclosure size and electrode configuration for each location.
                3. Incident energy and arc flash boundary calculated for all operating cases.
                4. Results reviewed with operations and high-energy locations flagged.
                5. Labels produced and a study report issued.

                ## Notes
                Run all realistic operating cases, including generator only and bus coupler closed. The worst case is not always the maximum fault level.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An issued arc flash study report covering every work location and operating case, with labels produced for each location."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Verify the study model against the walkdown and protection register"
                - "Measure enclosure sizes and gaps at each work location"
                - "Run incident energy cases for every operating mode"
                - "Issue the report and label set to operations"
            - name: Stability and islanding study for a site with its own generation
              description: |-
                ## Purpose
                Sites with gas turbines or steam generators running in parallel with the grid can lose everything when the grid trips, unless load shedding and islanding schemes separate them cleanly. A transient stability study with fault clearing, loss of grid and load shedding cases tells you whether the site survives and what the protection must do.

                ## Milestones
                1. Generator, governor and exciter models obtained from manufacturer data.
                2. Critical clearing times found for faults near the generators.
                3. Loss of grid and islanding cases run with the existing load shedding scheme.
                4. Changes to load shedding priorities or settings proposed.
                5. The study peer reviewed and issued.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A peer-reviewed stability study showing critical clearing times and islanding performance, with load shedding recommendations."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Request governor and exciter models from the generator supplier"
                - "Run fault cases to find critical clearing times"
                - "Simulate loss of grid with the existing load shedding scheme"
                - "Arrange a peer review before issuing the study"
            - name: Surge protection and insulation coordination
              description: |-
                ## Purpose
                Lightning on exposed overhead lines and switching surges from vacuum breakers can stress insulation beyond its rating, and tropical sites see high lightning activity. Studying where surges arise and placing arresters and surge protective devices with proper protective margins protects transformers, motors and electronics that cost far more than the protection.

                ## Milestones
                1. Equipment insulation levels collected from datasheets.
                2. Surge sources identified: lightning exposure, vacuum breaker switching of motors, capacitor switching.
                3. Arrester ratings and locations chosen with protective margins checked.
                4. Low voltage surge protective devices specified for control and electronic loads.
                5. Recommendations issued and tracked into installation.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An insulation coordination note with arrester and surge device locations and margins, with recommendations tracked to installation."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Collect insulation levels from transformer and motor datasheets"
                - "List switching surge sources on the MV network"
                - "Check arrester protective margins at each transformer"
                - "Specify surge devices for control panels and UPS supplies"
            - name: Outdoor substation layout and busbar design
              description: |-
                ## Purpose
                Laying out a substation means fitting electrical clearances, busbar ratings, access for maintenance and fire separation into a fenced area the civil team wants smaller. Producing a layout with clearances to the applicable standard, busbar thermal and mechanical checks and maintenance access drawn in gives a design that works for decades.

                ## Milestones
                1. Phase to phase and phase to earth clearances set from the insulation levels.
                2. Busbar current rating and short-circuit mechanical forces calculated.
                3. Transformer fire separation and oil containment allowed for.
                4. Maintenance access and crane routes shown on the layout.
                5. The layout reviewed with civil, fire and operations teams.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A reviewed substation layout with clearances, busbar calculations, fire separation and maintenance access shown."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Set clearances from the insulation levels in the design basis"
                - "Calculate busbar thermal and short-circuit mechanical ratings"
                - "Draw crane and maintenance access routes on the layout"
                - "Review the layout with civil, fire and operations"
            - name: Independent check of another engineer's power system study
              description: |-
                ## Purpose
                Senior electrical engineers are often asked to check studies they did not build, and a quick look at the results page misses wrong source data, missing motors and mis-modelled relays. A structured independent check of inputs, model, cases and conclusions gives the client real assurance and teaches the checker as much as the author.

                ## Milestones
                1. Input data traced to sources: utility letter, nameplates, cable schedules, relay settings.
                2. Model topology compared against the latest SLD.
                3. Two or three key results reproduced by hand or in a separate model.
                4. Operating cases checked for completeness.
                5. Check comments issued and their closure confirmed.

                ## Notes
                Sign only what you actually checked. State the scope of your check in the comment sheet.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A comment sheet stating check scope, with key results independently reproduced and every comment closed or accepted."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree the scope of the check with the author"
                - "Trace every input to its source document"
                - "Reproduce two key fault currents independently"
                - "Issue the comment sheet and track responses"
---

# Electrical Engineering Practice

Electrical engineering practice is the everyday work of keeping power safe, available and correctly specified, whether you design distribution systems, look after a plant's network or lead an installation on site. The projects start with foundations (your references, the single-line diagram, your safety authorisation, a walkdown of the real network and a design basis), move through the operating routines that keep a network healthy, then the core study skills, equipment specifications and decisions, dated events such as energisation and outages, situations for graduates, site leads, utility and building services engineers, and finish with specialist studies.

The recurring rhythm is mostly monthly and quarterly: battery and UPS checks, generator test runs, power quality review, thermographic scans, insulation resistance trends and protection settings audits, with yearly earthing tests, oil analysis, arc flash label checks and hurricane season readiness. The Purchase decision, Metrics log, Operational checklist, Onboarding 30/60/90, Vendor and Risk register templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
