---
id: engineering-practice.lng-plant-operations-and-engineering
name: LNG Plant Operations and Engineering
description: "The engineering of an LNG plant from feed gas to ship: liquefaction trains understood, cryogenic hazards respected, compressors and cold boxes watched, tanks and loading managed, and the Point Fortin context known."
category: business
version: 1.0.0
tags: [engineering-practice, lng-plant-operations-and-engineering, engineer, lng, liquefaction, cryogenic, point-fortin, trinidad-and-tobago]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - purchase-decision
    - development-plan
    - risk-register
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: LNG Plant Operations and Engineering
          description: "Engineering for LNG production: liquefaction trains, feed gas supply, rotating equipment, storage and ship loading, reliability, and the Atlantic LNG plant at Point Fortin."
          projects:
            - name: LNG value chain and plant layout primer
              description: |-
                ## Purpose
                Anyone joining an LNG plant from another industry meets a new vocabulary on day one: trains, cold boxes, boil-off, heel, cargo windows and annual delivery programmes. Mapping the chain from the upstream gas field to the regasification terminal, and then the main blocks of your own site, gives every later conversation a place to sit.

                ## Milestones
                1. A one-page sketch of the chain from gas field, pipeline and plant to ship and regasification terminal, with the owner of each link named.
                2. The plant's main blocks (inlet, pretreatment, liquefaction, fractionation, storage, loading, utilities) marked on a site plot plan.
                3. A glossary of at least twenty LNG terms written in your own words.
                4. Three questions about the site layout answered by an experienced operator or engineer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A value chain sketch, a marked-up plot plan and a twenty-term glossary, checked by an experienced colleague."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get a current site plot plan from document control"
                - "Sketch the chain from gas field to regasification terminal on one page"
                - "Write a glossary of twenty LNG terms including heel, boil-off and cargo window"
                - "Ask an operator to walk you round the main blocks of one train"
            - name: Liquefaction process technology comparison
              description: |-
                ## Purpose
                Liquefaction processes differ mainly in how they arrange the refrigeration: pure refrigerant cascades in plate-fin cold boxes, propane precooled mixed refrigerant with a spiral-wound main exchanger, single mixed refrigerant for smaller trains, and nitrogen expanders for small scale. Point Fortin's trains use a cascade of propane, ethylene and methane loops, and knowing why that choice was made explains much of how the plant behaves and how it compares with plants elsewhere.

                ## Milestones
                1. A comparison table of four liquefaction process families covering refrigerants, main exchanger type, typical train size and efficiency drivers.
                2. Your own plant's process family and licensor identified, with its refrigeration loops drawn as a simple block diagram.
                3. Two strengths and two weaknesses of your plant's process written down, each backed by a source.
                4. A short note on which process families newer trains around the world have chosen and why.

                ## Notes
                Licensor manuals and process design packages are usually confidential. Use published papers and textbooks for the comparison, and keep licensor material inside the site's document system.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A four-family comparison table and a block diagram of your own plant's refrigeration loops, reviewed by a process engineer."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find two published papers comparing liquefaction process families"
                - "Draw your plant's refrigeration loops as a block diagram"
                - "Fill a comparison table for cascade, propane precooled MR, single MR and expander cycles"
                - "Review your strengths and weaknesses note with a senior process engineer"
            - name: Liquefaction train P&ID walk-down
              description: |-
                ## Purpose
                Drawings only become real once you have stood next to the equipment they show. Walking one train from the inlet slug catcher to the rundown line to storage, with marked-up P&IDs in hand, turns a stack of drawings into a mental map you will use in every upset, permit and design query for years.

                ## Milestones
                1. A set of P&IDs for one train covering inlet to rundown, printed or on a tablet, with the walk route marked.
                2. Every major vessel, exchanger, compressor and pump on the route seen in the field and ticked off.
                3. At least five differences between the drawings and the field noted and passed to document control.
                4. A one-page list of the train's main isolation points and emergency shutdown valves you can locate unaided.

                ## Notes
                Walk with an operator, wear the full site PPE, and keep to the areas your induction covers. Report drawing discrepancies through the site's normal route rather than marking up masters.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One train walked from inlet to rundown with every major item located and at least five drawing discrepancies reported."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the area supervisor to assign an operator for a walk-down"
                - "Print the inlet to rundown P&IDs and mark a walk route"
                - "Tick off each major equipment item as you find it in the field"
                - "Send the drawing discrepancies you found to document control"
            - name: Feed gas specification and contaminant limits sheet
              description: |-
                ## Purpose
                Feed gas quality sets almost everything downstream: carbon dioxide and water freeze in the cold section, mercury attacks brazed aluminium, sulphur compounds hit the product specification, and heavy hydrocarbons can wax out in the exchangers. Pulling the design limits, the contract specification and the actual recent analyses onto one sheet tells you how close to the edge the plant is running today.

                ## Milestones
                1. The design basis limits for carbon dioxide, hydrogen sulphide, total sulphur, mercury, water and heavy hydrocarbons listed in one table.
                2. The gas supply contract specification set beside the design limits, with any gap marked.
                3. Twelve months of feed gas analyses summarised as typical, worst and trend for each component.
                4. Any component running within 20 percent of its limit flagged to the process engineering lead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page feed gas limits sheet comparing design, contract and twelve months of actual analyses, with near-limit components flagged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the feed gas section of the train design basis"
                - "Ask the commercial team for the gas supply quality specification"
                - "Pull twelve months of feed gas analyses from the laboratory system"
                - "Flag any component within 20 percent of its limit to the process lead"
            - name: Cryogenic hazards and personal safety briefing
              description: |-
                ## Purpose
                LNG hazards are not the same as those on a refinery: cold burns and embrittled steel, vapour clouds that hug the ground until they warm, asphyxiation in nitrogen-purged spaces, rapid phase transition when LNG hits water, and pool fires. Every engineer who goes into the field, signs a permit or reviews a design needs these in their head before the first site visit, not after.

                ## Milestones
                1. The six main LNG hazards written in your own words with one example of each from published incident history.
                2. The cryogenic PPE required on your site listed, and your own kit checked and fitted.
                3. The locations of spill containment, gas and cold detection, and safety showers near your work area known.
                4. Your stop-work authority and how to raise a stop explained back to your supervisor.

                ## Notes
                Stop-work authority applies to everyone on site. If a job near cryogenic lines looks wrong, stop it and ask.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of six LNG hazards and the site PPE, signed off by your supervisor before your first unescorted field visit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the site safety rules section on cryogenic work"
                - "Write a short note on each of the six main LNG hazards"
                - "Check your cryogenic gloves and face shield fit and are in date"
                - "Walk your work area and find the nearest detectors and safety shower"
            - name: Personal technical file for an LNG train
              description: |-
                ## Purpose
                Every upset, query and study sends you hunting for the same few documents: the basis of design, the heat and material balance, the operating manual, cause and effect charts and the main equipment datasheets. Building a personal index to the current revisions saves hours each month and stops you working from an out-of-date copy.

                ## Milestones
                1. An index of at least twenty key documents for one train, each with its number, current revision and location.
                2. The heat and material balance cases (design, summer, winter, lean feed) identified and their differences noted.
                3. Links checked against the document register so no superseded revision is listed.
                4. The index shared with one colleague who finds it useful enough to copy.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An index of at least twenty current-revision train documents, checked against the document register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the twenty documents you reach for most often on one train"
                - "Check each against the document register for the current revision"
                - "Note which heat and material balance cases exist and what each assumes"
                - "Share the index with a colleague and ask what is missing"
            - name: Train key performance baseline
              description: |-
                ## Purpose
                Without a baseline, nobody can say whether last month was a good one. Settling on six to eight numbers for each train, such as LNG rundown rate, specific power, fuel and flare as a share of feed, availability and refrigerant make-up, and recording a twelve-month baseline, gives every later improvement project something to beat.

                ## Milestones
                1. Six to eight train performance indicators chosen and defined, with units and data sources.
                2. Twelve months of history pulled from the historian for each indicator.
                3. Normal ranges and best demonstrated values marked for each.
                4. The baseline reviewed with the operations superintendent and agreed as the reference.

                ## Notes
                Start from the **Metrics log** template. Correct rundown rate for ambient temperature before comparing months, or the hot season will always look bad.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month baseline for six to eight defined train indicators, agreed with the operations superintendent."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft definitions for six to eight train performance indicators"
                - "Pull twelve months of each indicator from the plant historian"
                - "Mark the normal range and best demonstrated value for each"
                - "Book thirty minutes with the superintendent to agree the baseline"
            - name: Point Fortin LNG site orientation
              description: |-
                ## Purpose
                New engineers at Point Fortin arrive at a site with four trains of different ages and sizes, shared storage and loading, and a community that lives right next to the fence. Learning which trains share which utilities, how the site connects to the national gas grid and how shipping and community relations work makes the first months far less confusing.

                ## Milestones
                1. The age, nominal capacity and shared systems of each train written in a single table from public and site sources.
                2. The route of feed gas into the site and the main supply pipelines shown on a sketch.
                3. The storage tanks, berths and their shared or dedicated use listed.
                4. One conversation held with the community or public affairs team about how the plant engages its neighbours.

                ## Notes
                Keep anything from internal systems inside the site's documents. A public annual report or sustainability report is a good starting point for the table.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page site summary of trains, feed gas routes, storage and berths, plus notes from a community relations conversation."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the latest public annual or sustainability report for the plant"
                - "Build a table of each train with its start-up year and shared systems"
                - "Sketch how feed gas reaches the site from the national grid"
                - "Ask the public affairs team for a short briefing on community engagement"
            - name: Control room shadowing on a liquefaction train
              description: |-
                ## Purpose
                Most of what an LNG engineer needs to know about how the plant really runs lives in the control room: which alarms are nuisance, how operators nurse a cold box through a feed swing, what they watch before a ship arrives. A planned set of shifts beside a panel operator, with questions prepared, builds that knowledge faster than any manual.

                ## Milestones
                1. Four or more control room shifts completed across days, nights and a ship loading.
                2. A list of the ten displays and trends the panel operator checks most, with why.
                3. Three recurring operator pain points written up and passed to the right engineer.
                4. A thank-you and short summary sent to the shift team.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least four shadow shifts completed, with a list of the ten key displays and three operator pain points written up."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Ask the shift superintendent to schedule four shadow shifts"
                - "Prepare ten questions about upsets, alarms and ship loading"
                - "Record which displays the panel operator checks and why"
                - "Write up three operator pain points and send them to the right engineer"
            - name: Daily liquefaction train health check
              description: |-
                ## Purpose
                A short morning look at the same dozen tags catches most slow problems before they become trips: exchanger temperature approaches, compressor vibration and seal gas, refrigerant levels, pretreatment outlet analysers and rundown temperature. Doing it daily, in the same order, and writing a two-line note makes trends visible to you and to whoever covers your leave.

                ## Milestones
                1. A fixed screen or trend set of about twelve tags for your train, saved in the historian.
                2. Normal ranges and alert levels written beside each tag.
                3. A daily two-line note kept for at least a month without gaps.
                4. One early warning found through the check and acted on.

                ## Notes
                Start from the **Operational checklist** template. Keep it under fifteen minutes or it will not survive a busy week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A saved twelve-tag check run every working day for a month, with daily notes and at least one early warning recorded."
                cadence: rolling
              tasks:
                - "Choose the twelve tags that best show your train's health"
                - "Save them as a single historian trend set"
                - "Run the train health check and write a two-line note @recurring(daily)"
                - "Send a weekly summary of anything trending the wrong way @recurring(weekly:mon)"
            - name: Cold box and cryogenic exchanger performance trending
              description: |-
                ## Purpose
                Fouling, freezing of trace contaminants and maldistribution all show up first as a slowly widening temperature approach or a rising pressure drop across the cryogenic exchangers. A weekly trend of approaches and pressure drops against a clean baseline tells you when a derime, a feed change or a closer look is coming, weeks before production suffers.

                ## Milestones
                1. Clean-condition approaches and pressure drops for each cold box or main exchanger recorded as the baseline.
                2. A weekly trend sheet started, corrected for throughput.
                3. Alert thresholds agreed with the process lead.
                4. A quarterly summary of exchanger condition issued to operations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly exchanger approach and pressure drop trend with agreed alert thresholds, maintained for at least three months."
                cadence: rolling
              tasks:
                - "Find the clean-condition approaches from the last post-derime test"
                - "Set up a trend of approaches and pressure drops corrected for flow"
                - "Update the exchanger trend sheet and note any drift @recurring(weekly:tue)"
                - "Agree alert thresholds with the process engineering lead"
            - name: Refrigerant compressor condition monitoring round
              description: |-
                ## Purpose
                Refrigerant compressors and their gas turbine or motor drivers are the heart of each train, and a single unplanned trip can cost a day of production and a cargo slip. A monthly review of vibration, bearing temperatures, dry gas seal leakage, performance against the curves and turbine exhaust spread gives early warning and a record the rotating equipment specialists can act on.

                ## Milestones
                1. The monitored parameters and alarm limits for each refrigerant compressor string listed.
                2. Actual operating points plotted on the compressor performance curves.
                3. A monthly condition summary issued for three consecutive months.
                4. Any parameter in alert raised with the rotating equipment engineer and tracked to a decision.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly condition summaries for every refrigerant compressor string, with alerts tracked to a decision."
                cadence: rolling
              tasks:
                - "List the monitored parameters and alarm limits for each compressor string"
                - "Plot this month's operating points on the vendor performance curves"
                - "Issue the monthly compressor condition summary @recurring(monthly:9)"
                - "Raise any parameter in alert with the rotating equipment engineer"
            - name: Monthly feed gas quality and volume reconciliation
              description: |-
                ## Purpose
                Gas delivered to an LNG plant is measured at the fence, used as fuel, flared, liquefied and shipped, and the numbers rarely add up first time. Reconciling feed gas volumes and composition against metering, laboratory results and supplier statements each month catches meter drift, analyser faults and contract disputes while they are still small.

                ## Milestones
                1. A monthly balance of feed gas in against LNG, NGL, fuel, flare and losses.
                2. Feed gas composition from the online analyser compared with laboratory spot samples.
                3. Imbalances over an agreed tolerance investigated and explained.
                4. Twelve months of balances kept, showing the trend in unaccounted gas.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly feed gas balance closed within the agreed tolerance, with any larger imbalance explained in writing."
                cadence: rolling
              tasks:
                - "Agree the imbalance tolerance with the metering and commercial teams"
                - "Build the monthly gas balance from fence meters, fuel, flare and rundown"
                - "Close the feed gas balance and explain any imbalance @recurring(monthly:5)"
                - "Compare analyser composition with the month's laboratory samples"
            - name: Mercury removal and dehydration bed tracking
              description: |-
                ## Purpose
                Mercury removal and molecular sieve dehydration beds protect the cold section from damage that cannot be repaired in place, and they degrade quietly. Tracking outlet mercury and water, regeneration temperatures, bed pressure drop and breakthrough history each month lets you plan bed changes during a planned outage instead of after a cold box is attacked.

                ## Milestones
                1. Outlet mercury and water limits, and the analysers or sample points that measure them, listed.
                2. Regeneration cycle data and bed pressure drops trended for each bed.
                3. An estimated remaining bed life written down with its assumptions.
                4. Bed replacement timing agreed with the planner for the next suitable outage.

                ## Notes
                Spent mercury sorbent is hazardous waste. Disposal routes and handling precautions belong in the change-out plan from the start.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly bed performance records for every mercury and dehydration bed, with a written remaining-life estimate and agreed change-out window."
                cadence: rolling
              tasks:
                - "List the outlet mercury and water limits and how each is measured"
                - "Trend regeneration temperatures and pressure drop for each bed"
                - "Update the bed performance log and remaining-life estimate @recurring(monthly:14)"
                - "Agree the next bed change-out window with the maintenance planner"
            - name: Acid gas removal unit health review
              description: |-
                ## Purpose
                Amine units in LNG service must take carbon dioxide down to a few tens of parts per million or it freezes in the cold section, so a struggling unit soon limits the whole train. A monthly look at solvent loading, foaming events, filter changes, heat stable salts and treated gas analysis keeps the unit inside its window and builds the case for solvent reclaiming or replacement.

                ## Milestones
                1. Treated gas carbon dioxide limit and the analyser that measures it confirmed.
                2. A monthly record of rich and lean loading, solvent strength, heat stable salts and foaming events.
                3. Antifoam use and filter changes logged against the foaming events.
                4. A recommendation on solvent condition written after six months of data.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of monthly amine health records and a written recommendation on solvent condition."
                cadence: rolling
              tasks:
                - "Confirm the treated gas carbon dioxide limit for your train"
                - "Ask the laboratory for solvent strength and heat stable salt results"
                - "Review the amine unit loadings, foaming and filter log @recurring(monthly:18)"
                - "Write a solvent condition recommendation after six months of data"
            - name: Flare and boil-off gas monthly reporting
              description: |-
                ## Purpose
                Flaring at an LNG plant is lost product, lost money and a visible emission the regulator and the neighbours both watch. Reporting flare volumes each month by cause (trips, start-ups, ship loading, relief valves passing) shows where the gas goes and gives the improvement projects a target.

                ## Milestones
                1. Flare metering and its accuracy limits understood and written down.
                2. Each month's flare volume split by cause from the operator log and historian.
                3. The top three causes of flaring tracked over twelve months.
                4. Monthly figures matched to what the plant reports externally.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly flare report split by cause, reconciled with external reporting, for twelve consecutive months."
                cadence: rolling
              tasks:
                - "Check the flare meter range and accuracy with the instrument engineer"
                - "Agree a short list of flare cause categories with operations"
                - "Issue the monthly flare volume report by cause @recurring(monthly:3)"
                - "Compare the year's totals with the plant's external emissions report"
            - name: LNG storage tank stratification watch
              description: |-
                ## Purpose
                LNG of different densities can settle into layers in a storage tank, and if the layers mix suddenly the tank can release a large volume of vapour in a rollover. A weekly look at tank density and temperature profiles, boil-off rate and the composition of recent rundown keeps stratification visible and the filling strategy honest.

                ## Milestones
                1. The level, temperature and density gauging on each tank and how to read the profiles understood.
                2. A weekly record of density difference between top and bottom and boil-off rate for each tank.
                3. Alert levels for density difference agreed with the process lead.
                4. Top or bottom filling choice recorded for every tank fill with the reason.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly density and temperature profile records for every LNG tank with agreed alert levels and logged fill decisions."
                cadence: rolling
              tasks:
                - "Ask the tank area operator to show you how the density profile is read"
                - "Agree alert levels for top to bottom density difference"
                - "Record tank density profiles and boil-off rates @recurring(weekly:thu)"
                - "Log the top or bottom filling choice for each tank fill"
            - name: Train operating envelope and alarm limits review
              description: |-
                ## Purpose
                Operating limits drift as plants are debottlenecked, feed gas changes and equipment ages, and an envelope written for the design case can be wrong for today's lean gas and hot afternoons. A quarterly check of integrity limits, alarm settings and the reasons behind them keeps operators trusting the numbers on the screen.

                ## Milestones
                1. A table of the train's integrity operating windows with each limit's source.
                2. Alarm settings compared with the documented limits and mismatches listed.
                3. Changes to any limit routed through management of change.
                4. A quarterly review record signed off by the area superintendent.

                ## Notes
                Never change a limit in the control system without an approved management of change, however obvious the fix looks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly signed review of every integrity operating window and its alarm setting, with mismatches closed through management of change."
                cadence: cyclic
              tasks:
                - "Gather the integrity operating windows document for your train"
                - "Export current alarm settings from the control system database"
                - "Review limits against alarm settings and list mismatches @recurring(quarterly)"
                - "Raise a management of change for every limit that needs to move"
            - name: Monthly LNG production loss accounting
              description: |-
                ## Purpose
                Lost production is the clearest way to rank problems on an LNG plant, because every hour of reduced rundown has a price measured in cargoes. Recording each month's losses against capacity by cause (feed gas shortfall, trips, planned work, exchanger limits, ambient temperature, shipping) shows where engineering effort earns the most.

                ## Milestones
                1. A production loss register with agreed cause categories and a method for estimating lost tonnes.
                2. Each month's losses booked by cause within the first week of the next month.
                3. A twelve-month Pareto of loss causes.
                4. The top loss cause turned into an improvement action with an owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly production loss register with a twelve-month Pareto and the top cause assigned to a named owner."
                cadence: rolling
              tasks:
                - "Agree loss cause categories with operations and planning"
                - "Write the method for converting reduced rates into lost tonnes"
                - "Book last month's production losses by cause @recurring(monthly:7)"
                - "Present the loss Pareto at the operations review"
            - name: Refrigerant inventory and purity management
              description: |-
                ## Purpose
                In a cascade plant each refrigerant loop must stay pure, and in a mixed refrigerant plant the blend must stay on recipe, or the train loses efficiency and capacity. Tracking make-up, losses, composition and storage stocks each month, and knowing how refrigerants are produced or bought, keeps the loops full and points to leaks early.

                ## Milestones
                1. Each refrigerant's design composition or purity, inventory and make-up source written down.
                2. A monthly record of make-up volumes, laboratory composition and storage stocks.
                3. Losses compared with a normal range and unusual losses investigated as possible leaks.
                4. A minimum stock level agreed for each refrigerant before a restart.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly refrigerant inventory and composition records for each loop, with agreed minimum stocks and investigated loss spikes."
                cadence: rolling
              tasks:
                - "List each refrigerant's design purity or recipe and its make-up source"
                - "Ask the laboratory for the latest refrigerant composition results"
                - "Update the refrigerant make-up and stock record @recurring(monthly:22)"
                - "Agree the minimum stock of each refrigerant needed for a restart"
            - name: Hand mass and energy balance across a train
              description: |-
                ## Purpose
                Reading a heat and material balance and closing one by hand is the skill that lets you sanity-check a simulation, a vendor claim or a performance test. Working through one train from inlet gas to LNG rundown, including fuel, NGL and refrigerant compressor duties, builds a feel for where the energy goes.

                ## Milestones
                1. One heat and material balance case read stream by stream with units and conditions understood.
                2. A spreadsheet mass balance across the train closing within one percent.
                3. Refrigeration duty and compressor power estimated and compared with the design figures.
                4. Your workings checked by a senior process engineer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A spreadsheet mass balance closing within one percent and a power estimate checked by a senior process engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose one heat and material balance case and print the stream table"
                - "Build a spreadsheet mass balance from inlet to rundown"
                - "Estimate total refrigeration duty and compressor power"
                - "Book an hour with a senior process engineer to check your workings"
            - name: Gas turbine driver fundamentals for LNG
              description: |-
                ## Purpose
                Turbine output falls as ambient air warms, and in a tropical climate that single fact explains much of the daily and seasonal swing in LNG production. Learning how industrial and aeroderivative gas turbines drive refrigerant compressors, how they are controlled and what limits them, makes you a much better partner to the rotating equipment team.

                ## Milestones
                1. The driver type, rating and control limits of each refrigerant compressor string noted.
                2. A plot of turbine output against ambient temperature from the vendor curve and from plant data.
                3. The main turbine protections and trip causes understood and listed.
                4. Common inlet air cooling and filtration options summarised with their trade-offs.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note on each train's turbine drivers with an output against ambient plot comparing vendor curve and plant data."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the turbine datasheet and performance curves for one train"
                - "Plot a month of turbine output against ambient temperature"
                - "List the main turbine trips and what each protects"
                - "Read one published paper on inlet air cooling for LNG drivers"
            - name: Cryogenic materials and piping behaviour
              description: |-
                ## Purpose
                Cryogenic piping and vessels use austenitic stainless steel, nine percent nickel steel and aluminium because ordinary carbon steel becomes brittle and can shatter. Learning why, and how lines shrink, move and stress as they cool, helps you review supports, flanges, insulation and repairs with an informed eye and know when to call a materials specialist.

                ## Milestones
                1. The materials used in your plant's cold section listed by service temperature.
                2. Thermal contraction of a long stainless line from ambient to minus 160 degrees Celsius worked out by hand.
                3. Three common cryogenic piping problems (frosting, cold spot cracking, flange leaks on cool-down) explained with causes.
                4. Insulation and vapour barrier damage reporting route understood.

                ## Notes
                Material and weld repairs on cold service fall under the piping code and site integrity procedures. Your role is to recognise the problem and route it, not to improvise a fix.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A materials-by-temperature list and a hand calculation of contraction for one cold line, reviewed by a materials or piping engineer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the cold section materials from the piping class specification"
                - "Calculate thermal contraction on one long rundown line"
                - "Walk one cold line and look at supports, guides and insulation"
                - "Ask a piping engineer how cold spring was handled on that line"
            - name: Compressor surge and anti-surge control
              description: |-
                ## Purpose
                Surge in a refrigerant compressor can damage the machine in seconds, and anti-surge control is one of the most important loops on the plant. Understanding the surge line, control margin, recycle valves and how the controller responds to trips and fast load changes lets you read a trip report and ask the right questions of controls and rotating specialists.

                ## Milestones
                1. The surge line and control line for one compressor section drawn from the vendor map.
                2. The anti-surge control scheme and its recycle valves traced on the P&ID.
                3. One recent trip or near-surge event replayed from historian data and explained.
                4. Questions on the event reviewed with the controls engineer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A surge map with control line for one compressor section and a written replay of a real trip or near-surge event."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get the compressor performance map for one refrigerant section"
                - "Trace the anti-surge recycle path on the P&ID"
                - "Replay a recent compressor trip from historian data"
                - "Review your trip replay with the controls engineer"
            - name: Brazed aluminium exchanger thermal stress limits
              description: |-
                ## Purpose
                Brazed aluminium plate-fin exchangers are efficient but unforgiving: fast cool-downs, large temperature differences between streams and repeated trips crack the brazed joints, and a leak inside a cold box is very hard to repair. Knowing the vendor limits on cooling rate and stream temperature difference, and checking how the plant meets them, protects equipment that can take months to replace.

                ## Milestones
                1. The vendor limits on cooling and warming rate and on stream to stream temperature difference listed for each exchanger.
                2. Historian trends from the last three trips or restarts checked against those limits.
                3. Any exceedance reported with its likely cause.
                4. Start-up and restart procedures confirmed to state the limits clearly.

                ## Notes
                Industry guidance on brazed aluminium exchangers, such as the manufacturers' association standard, is a good companion to the vendor manual.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Vendor thermal limits for every plate-fin exchanger documented and the last three trips or restarts checked against them."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the vendor thermal limits for each plate-fin exchanger"
                - "Pull trends of the last three trips or restarts from the historian"
                - "Compare cooling rates and stream differences with the limits"
                - "Check the restart procedure states the limits in plain terms"
            - name: LNG properties and heating value fundamentals
              description: |-
                ## Purpose
                Buyers pay for energy, not volume, so heating value, density and Wobbe index decide what a cargo is worth and whether it can be sold into a given market. Understanding how composition sets these properties, how they shift with ageing during a voyage and how nitrogen and heavies are controlled, links your plant decisions to the commercial result.

                ## Milestones
                1. Density, gross heating value and Wobbe index calculated for a typical rundown composition.
                2. The product specification for your plant's main markets compared with typical production.
                3. The effect of nitrogen and ethane content on heating value shown in a worked example.
                4. A one-page note on ageing (weathering) of LNG during storage and voyage.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A worked calculation of density, heating value and Wobbe index for a real rundown composition, with a note on ageing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get a typical LNG rundown composition from the laboratory"
                - "Calculate density, heating value and Wobbe index from it"
                - "Compare the result with the main market specifications"
                - "Write one page on how LNG composition ages during a voyage"
            - name: Liquefaction train debottleneck screening
              description: |-
                ## Purpose
                Many older trains can produce more than their nameplate if the real limit is found and removed, whether that is refrigerant compressor power, an exchanger area, an amine circulation rate or a rundown line. A screening study that tests each block against the current feed gas and ambient conditions finds the first two constraints and the cheapest way past them.

                ## Milestones
                1. Each major block's capacity estimated against current operating data.
                2. The first and second bottlenecks identified with evidence.
                3. Two or three options to relieve the first bottleneck listed with rough cost and gain.
                4. A screening note presented to the engineering manager with a recommendation.

                ## Notes
                Feed gas availability may make a debottleneck worthless for now. State the gas supply assumption at the top of the note.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A screening note naming the first two bottlenecks with evidence and ranking two or three options, presented to the engineering manager."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List each block and the data that shows its current loading"
                - "Estimate capacity of each block at today's feed gas and ambient"
                - "Rank options to relieve the first bottleneck by cost and gain"
                - "Present the screening note to the engineering manager"
            - name: Specific power and fuel gas reduction study
              description: |-
                ## Purpose
                Fuel gas burned in turbines, heaters and boilers is gas that is not sold, and specific power (kilowatt hours per tonne of LNG) is the best single measure of how efficiently a train liquefies. Reviewing where the energy goes and testing small changes such as refrigerant pressures, compressor operating points and heater firing finds savings without capital.

                ## Milestones
                1. Specific power and fuel use per tonne calculated for each train over twelve months.
                2. The biggest fuel users ranked.
                3. At least five low-cost efficiency ideas assessed with estimated savings.
                4. The best ideas trialled under management of change and results recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Twelve months of specific power per train, five assessed efficiency ideas and recorded results from at least one trial."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Calculate twelve months of specific power for each train"
                - "Rank the plant's fuel gas users by volume"
                - "Ask the agent to draft a one-page summary of five efficiency ideas from your notes"
                - "Review specific power and fuel trends with operations @recurring(quarterly)"
            - name: Lean feed gas impact assessment
              description: |-
                ## Purpose
                As new fields come on line and older ones decline, feed gas can become leaner in ethane, propane and heavier components, which changes refrigerant make-up, NGL production, heating value and even freezing risk in the cold section. Assessing the effect of the expected feed compositions before they arrive lets the plant adjust rather than react.

                ## Milestones
                1. Expected feed gas compositions for the next few years obtained from the supply side.
                2. The effect on LNG heating value, NGL yield and refrigerant balance estimated for each.
                3. Any freezing or wax risk from heavy components checked against the scrub column design.
                4. A short report with operating recommendations issued.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A report estimating the effect of each forecast feed composition on heating value, NGL yield and freezing risk, with recommendations."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Ask the supply team for forecast feed gas compositions"
                - "Run each composition through the simulation or a hand estimate"
                - "Check heavy component removal against the scrub column limits"
                - "Issue the lean feed gas report with recommendations"
            - name: Boil-off gas recovery during ship loading
              description: |-
                ## Purpose
                Ship loading generates large volumes of vapour from the warm ship tanks, the loading lines and displaced vapour, and on many plants some of it still ends up in the flare. Measuring how much vapour each loading produces and where it goes is the first step to recovering more of it as fuel or feed.

                ## Milestones
                1. Vapour generated during three loadings measured or estimated from historian data.
                2. The vapour return and boil-off compressor capacity compared with the peak demand.
                3. Flaring during loading quantified per cargo.
                4. Options to recover more vapour listed with rough cost and benefit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Vapour generation and flaring quantified for three loadings, with recovery options costed and ranked."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pull historian data for three recent ship loadings"
                - "Estimate vapour generated and vapour flared for each loading"
                - "Compare peak vapour with boil-off compressor capacity"
                - "List recovery options with rough cost and benefit"
            - name: Ambient temperature and air cooler performance study
              description: |-
                ## Purpose
                Tropical heat costs an air-cooled LNG train production every afternoon, and fouled or damaged air coolers make it worse. Quantifying the production lost to ambient temperature and to cooler condition, and costing cleaning, fan repairs or upgrades, turns a familiar complaint into a decision with numbers behind it.

                ## Milestones
                1. Production against ambient temperature plotted for a full year.
                2. Air cooler approach temperatures compared with design for the main refrigerant condensers.
                3. Losses split between ambient and cooler condition.
                4. A recommended cleaning interval and repair list agreed with maintenance.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A year of production against ambient plotted, losses split by cause, and an agreed air cooler cleaning interval."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Plot a year of rundown rate against ambient temperature"
                - "Compare condenser approach temperatures with the design values"
                - "Agree an air cooler cleaning interval with maintenance"
                - "Check air cooler fan availability before the hot season @recurring(yearly)"
            - name: Critical cryogenic spares strategy
              description: |-
                ## Purpose
                Some LNG equipment, such as cryogenic pumps, expanders, loading arm swivels and exchanger cores, takes many months to replace and may have no ready spare anywhere. Deciding which items justify a held spare, a shared pool with other plants or a vendor agreement, using failure history and the cost of downtime, protects production at a sensible stock cost.

                ## Milestones
                1. A list of long-lead cryogenic items with lead times and current spares held.
                2. Each item ranked by consequence of failure and likelihood.
                3. A held, pooled or vendor-agreement decision recorded for the top ten.
                4. The spares decisions entered into the maintenance system.

                ## Notes
                Start from the **Purchase decision** template for each item where buying a spare is on the table.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of long-lead cryogenic items with a recorded spares decision for the top ten entered into the maintenance system."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List long-lead cryogenic items with their lead times"
                - "Rank each by consequence and likelihood of failure"
                - "Record a spares decision for the top ten items"
                - "Ask the materials team to enter the decisions in the maintenance system"
            - name: Liquefaction train trip reduction programme
              description: |-
                ## Purpose
                Every train trip flares gas, cycles cold equipment through thermal stress and costs hours of production, and many trips repeat from the same few causes. A programme that reviews every trip each month, classifies the cause and closes repeat offenders, from instrument faults to turbine issues, steadily lifts availability.

                ## Milestones
                1. Two years of trips listed with date, duration, cause and production lost.
                2. Repeat trip causes ranked by count and cost.
                3. Actions for the top three repeat causes owned and dated.
                4. Trip rate trended monthly for a year after the programme starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A two-year trip register, owned actions on the top three repeat causes and a monthly trip rate trend for twelve months."
                cadence: rolling
              tasks:
                - "Build a trip register from two years of shift logs and events"
                - "Rank repeat trip causes by count and production lost"
                - "Assign owners and dates to actions on the top three causes"
                - "Review last month's train trips and update the register @recurring(monthly:28)"
            - name: First LNG ship loading as duty engineer
              description: |-
                ## Purpose
                Your first ship loading brings together tank management, loading arms, vapour return, custody transfer, the ship's crew and a tight cargo window. Preparing beforehand, knowing the sequence from berthing to departure and who decides what, means you can add value on the night instead of watching.

                ## Milestones
                1. The loading procedure and ship-shore safety checklist read and questions noted.
                2. The roles of the loading master, ship staff, surveyor and plant team understood.
                3. One loading observed from berthing to departure with key times recorded.
                4. A short write-up of what went well and what was delayed shared with the loading team.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One full loading observed with key times recorded and a write-up shared with the loading team."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Read the ship loading procedure and ship-shore safety checklist"
                - "Ask the loading master to explain each role during a loading"
                - "Record key times from berthing to departure on one loading"
                - "Share a short write-up with the loading team"
            - name: Liquefaction train restart and cool-down plan
              description: |-
                ## Purpose
                A train restarted warm after a long outage needs a slow, controlled cool-down to protect exchangers and piping, enough refrigerant inventory, dry and clean systems, and coordination with feed gas supply and shipping. A written plan agreed before the outage ends stops the restart from being invented on the night by a tired shift.

                ## Milestones
                1. The restart sequence from purge and dry-out to first LNG written step by step.
                2. Cool-down rate limits and hold points included from vendor data.
                3. Refrigerant stocks, nitrogen supply and feed gas availability confirmed.
                4. The plan walked through with the shift teams and signed off.

                ## Notes
                Start from the **Operational checklist** template. Dew point checks after maintenance are the hold point most often rushed; keep them.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A signed restart and cool-down plan with vendor rate limits, hold points and confirmed refrigerant and nitrogen supplies."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Gather the last restart's sequence and lessons learned"
                - "Write the restart steps with cool-down rate limits and hold points"
                - "Confirm refrigerant and nitrogen stocks with the stores team"
                - "Walk the plan through with each shift team before sign-off"
            - name: Cold box derime campaign
              description: |-
                ## Purpose
                Over months, traces of water, carbon dioxide or heavy hydrocarbons build up in the coldest passages until pressure drop rises and capacity falls, and a derime (warming and purging the cold section) is the cure. Planning one well means knowing when the trend says it is needed, how to warm safely, what the plant loses meanwhile, and how to prove it worked.

                ## Milestones
                1. The trend evidence for a derime written up with the expected gain.
                2. A derime procedure reviewed with warm-up rates, purge medium and dew point targets.
                3. The derime window agreed with planning and shipping.
                4. Post-derime pressure drops and approaches recorded as the new clean baseline.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A derime completed in an agreed window with post-derime pressure drops recorded as the new clean baseline."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write up the pressure drop trend that shows a derime is due"
                - "Review the derime procedure with operations and the vendor"
                - "Agree the derime window with planning and shipping"
                - "Record post-derime pressure drops and approaches as the new baseline"
            - name: Annual loading arm and jetty integrity check
              description: |-
                ## Purpose
                Loading arms, their swivels, emergency release couplings and the jetty they sit on are the single route for every cargo, and a failure on the berth is both dangerous and very public. An annual check that pulls together inspection results, emergency release tests and the jetty's structural and fender condition gives a clear fitness statement before the busiest shipping months.

                ## Milestones
                1. Inspection and test records for every loading arm and emergency release system collected.
                2. Jetty structure, fenders and mooring hooks inspection results reviewed.
                3. Open defects listed with risk and planned repair dates.
                4. A one-page fitness statement issued to the terminal manager.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A yearly fitness statement for the loading arms and jetty, listing every open defect with a risk ranking and repair date."
                cadence: cyclic
              tasks:
                - "Collect the last test records for each emergency release coupling"
                - "Review jetty fender and mooring hook inspection results"
                - "Issue the annual loading arm and jetty fitness statement @recurring(yearly)"
                - "List open defects with a risk ranking and repair date"
            - name: LNG spill and jetty fire emergency drill
              description: |-
                ## Purpose
                An LNG release on the jetty or in a tank bund behaves differently from an oil spill, and the emergency response depends on people knowing when to apply foam, when to let a pool burn and how to stop loading fast. Taking part in, or helping design, a realistic yearly drill tests the plan and your own role in it.

                ## Milestones
                1. Your role in the emergency response plan for jetty and storage areas confirmed.
                2. A drill scenario agreed with the emergency response team.
                3. The drill run with observers and timings recorded.
                4. Findings logged with owners and closed before the next drill.

                ## Notes
                Drills on a live jetty need the terminal manager and ship to agree in advance. Never run a surprise drill during a loading.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly jetty and storage emergency drill run with recorded timings and every finding closed by a named owner."
                cadence: cyclic
              tasks:
                - "Read your role in the jetty and storage emergency response plan"
                - "Agree a drill scenario with the emergency response team"
                - "Run or join the yearly LNG spill and fire drill @recurring(yearly)"
                - "Log drill findings with owners and closure dates"
            - name: Post-outage train capacity test
              description: |-
                ## Purpose
                After a major outage or modification the plant needs to know what the train can now do, both to plan cargoes and to judge whether the work paid off. A capacity test with agreed conditions, steady periods, corrected results and a short report gives a defensible new number.

                ## Milestones
                1. Test conditions, duration and the measurements to be recorded agreed in a test procedure.
                2. Instruments and analysers needed for the test checked before it starts.
                3. Steady test periods recorded and results corrected to reference ambient and feed conditions.
                4. A test report issued comparing the result with the pre-outage capacity.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A capacity test report with results corrected to reference conditions and compared with the pre-outage figure."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Draft the capacity test procedure with conditions and measurements"
                - "Ask instrument technicians to check the test meters and analysers"
                - "Correct the test results to reference ambient and feed conditions"
                - "Issue the capacity test report to operations and planning"
            - name: Moving from refining or petrochemicals into LNG
              description: |-
                ## Purpose
                Engineers arriving from a refinery or a Point Lisas ammonia or methanol plant bring strong fundamentals but meet new things: cryogenic equipment, refrigeration cycles, tank vapour management and a shipping-driven rhythm. A deliberate plan for the first three months closes those gaps and makes your existing experience useful sooner.

                ## Milestones
                1. A list of what transfers directly from your previous plant and what is new.
                2. A three-month learning plan with one LNG topic each fortnight.
                3. A named mentor on the LNG plant who has agreed to meet monthly.
                4. A short self-review at three months shared with your supervisor.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A three-month LNG learning plan, a named mentor and a three-month self-review shared with your supervisor."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List what carries over from your previous plant and what is new"
                - "Plan one LNG topic each fortnight for three months"
                - "Ask an experienced LNG engineer to mentor you monthly"
                - "Write a three-month self-review and share it with your supervisor"
            - name: Operations support engineer first rotation
              description: |-
                ## Purpose
                Shift and operations support engineers on an LNG plant sit between the control room and the technical teams, often on a rotation that includes nights and ship loadings. Setting up the handover habits, contacts and quick references early makes those shifts productive rather than reactive.

                ## Milestones
                1. A personal call list of specialists for rotating equipment, controls, process and integrity.
                2. A shift handover note format agreed with the shift superintendent.
                3. Quick references for the five most common upsets on your train.
                4. A first rotation review held with your supervisor.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A specialist call list, an agreed handover note format and quick references for five common upsets, reviewed after the first rotation."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build a call list of specialists for each discipline"
                - "Agree a handover note format with the shift superintendent"
                - "Write quick references for the five most common upsets"
                - "Book a first rotation review with your supervisor"
            - name: Rotating equipment engineer on an LNG plant
              description: |-
                ## Purpose
                Rotating equipment engineers on LNG plants look after some of the largest machines in the region: refrigerant compressor strings, cryogenic pumps submerged in LNG, boil-off gas compressors and expanders. Building a personal equipment register, vendor relationships and an inspection rhythm early sets you up to own these machines rather than chase them.

                ## Milestones
                1. A register of every critical machine with driver, vendor, model and service history.
                2. Vendor and service contacts confirmed for each critical machine.
                3. The overhaul or inspection interval for each string known and checked against the plan.
                4. A quarterly review of critical machine health held with operations.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete critical machine register with vendor contacts and quarterly health reviews held with operations."
                cadence: rolling
              tasks:
                - "Build a register of every critical rotating machine on site"
                - "Confirm the vendor service contact for each critical machine"
                - "Check each string's overhaul interval against the maintenance plan"
                - "Hold the critical machine health review with operations @recurring(quarterly)"
            - name: Engineering input to the annual delivery programme
              description: |-
                ## Purpose
                Cargo schedules for the year are set months ahead, and they depend on engineering realities: planned outages, derimes, tank availability, capacity forecasts and feed gas assumptions. Giving the commercial and shipping teams a clear, honest capacity forecast with its risks avoids missed cargoes and late changes.

                ## Milestones
                1. A monthly capacity forecast for each train for the coming year with ambient effects included.
                2. Planned outages, derimes and tank work placed on the same calendar.
                3. Key assumptions, especially feed gas supply, written beside the forecast.
                4. The forecast reviewed with the shipping and commercial teams.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A twelve-month capacity forecast with outages and assumptions, reviewed with the shipping and commercial teams."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Build a monthly capacity forecast for each train"
                - "Put outages, derimes and tank work on the forecast calendar"
                - "Write down the feed gas and ambient assumptions behind the forecast"
                - "Review the forecast with the shipping and commercial teams"
            - name: Contract engineer onboarding at an LNG site
              description: |-
                ## Purpose
                Contract and consultancy engineers brought in for a study or an outage often lose their first week to access, inductions and finding documents. Preparing the paperwork, safety training and document access in advance, and agreeing clear deliverables, means billable days go on engineering.

                ## Milestones
                1. Site access, induction and any required energy sector safety training booked before arrival.
                2. Document system access and the key document list requested in advance.
                3. Deliverables, review route and acceptance criteria agreed in writing with the client engineer.
                4. A short end-of-assignment handover note issued.

                ## Notes
                Contractor safety certification and passports are covered in their own area; here the focus is getting productive on an LNG site.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Access and inductions booked before arrival, deliverables agreed in writing and an end-of-assignment handover note issued."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the client engineer which inductions and training are required"
                - "Request document system access and a key document list"
                - "Agree deliverables and acceptance criteria in writing"
                - "Issue a handover note at the end of the assignment"
            - name: Cryogenic exchanger leak detection and management
              description: |-
                ## Purpose
                Leaks between passages in a plate-fin cold box or spiral-wound exchanger, or from the core to the casing, can rarely be fixed quickly and may force a choice between running with a known leak and a long outage. Knowing how leaks are detected, how their size is estimated and what operating limits apply lets you prepare the evidence for that decision.

                ## Milestones
                1. The leak detection methods available on your plant (casing gas analysis, composition tracing, pressure tests) listed.
                2. Baseline casing purge gas readings recorded for each cold box.
                3. A leak response guide drafted covering monitoring, limits and escalation.
                4. The guide reviewed with the vendor or a specialist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Baseline casing gas readings for each cold box and a reviewed leak response guide with monitoring, limits and escalation."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List how exchanger leaks are detected on your plant"
                - "Record baseline casing purge gas readings for each cold box"
                - "Draft a leak response guide with limits and escalation steps"
                - "Review the guide with the exchanger vendor or a specialist"
            - name: LNG tank rollover risk assessment
              description: |-
                ## Purpose
                Rollover is a known cause of serious LNG tank incidents, and the risk depends on how different cargoes, rundown compositions and fill methods interact over weeks. A structured assessment of the scenarios most likely on your plant, the detection in place and the operator response turns the weekly watch into a documented safeguard.

                ## Milestones
                1. Credible stratification scenarios listed, including rundown composition changes and long storage.
                2. Existing detection, mixing methods and relief capacity reviewed for each.
                3. Gaps and actions recorded with owners.
                4. Operator guidance on rollover warning signs updated.

                ## Notes
                Start from the **Risk register** template. Any change to tank relief or operating limits goes through management of change.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A rollover risk register covering credible scenarios, safeguards and owned actions, with updated operator guidance."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Read two published LNG rollover incident reports"
                - "List credible stratification scenarios for your tanks"
                - "Review detection, mixing and relief against each scenario"
                - "Update the operator guidance on rollover warning signs"
            - name: Custody transfer measurement and cargo quantity checks
              description: |-
                ## Purpose
                Custody transfer turns a loaded cargo into an invoice, using tank gauging on the ship, sampling and gas chromatography, and agreed calculation standards. Knowing the measurement chain and checking each cargo's figures for consistency protects the plant in disputes and finds instrument problems early.

                ## Milestones
                1. The measurement chain from ship gauging and sampling to the energy calculation drawn.
                2. The governing measurement standards and contract references listed.
                3. A monthly check of cargo energy against plant rundown and analyser data set up.
                4. Any cargo outside the consistency tolerance investigated and noted.

                ## Notes
                The International Group of LNG Importers' custody transfer handbook is a common industry reference; confirm which edition your contracts cite.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A documented custody transfer measurement chain and a monthly consistency check of every cargo against plant data."
                cadence: rolling
              tasks:
                - "Draw the measurement chain from ship gauging to cargo energy"
                - "List the measurement standards and contract clauses that apply"
                - "Check last month's cargo energy figures against plant data @recurring(monthly:25)"
                - "Investigate any cargo outside the consistency tolerance"
            - name: Dynamic simulation and operator training simulator use
              description: |-
                ## Purpose
                Dynamic models of an LNG train let you test a new start-up sequence, a control change or a trip response before trying it on cold, expensive equipment. Learning to run the plant's dynamic simulator or operator training simulator, and keeping it matched to the plant, makes it a design tool and not just a training room.

                ## Milestones
                1. Access to the dynamic simulator or training simulator arranged and a basic case run.
                2. One known trip replayed and compared with historian data.
                3. Model mismatches listed and passed to the model owner.
                4. One proposed change tested on the simulator before its management of change review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A historian-matched trip replay on the simulator and one proposed change tested before its management of change review."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the training team for simulator access and a starter case"
                - "Replay a known trip and compare it with historian data"
                - "List model mismatches for the simulator owner"
                - "Test one proposed change on the simulator before its review"
            - name: Ageing LNG train life extension review
              description: |-
                ## Purpose
                Trains that started up around the turn of the century are now well into their third decade, with obsolete control systems, ageing exchangers and cold piping, and a steady creep of minor repairs. A structured life extension review of each system's condition, obsolescence and remaining life tells management what it will take to keep the train running for another fifteen or twenty years.

                ## Milestones
                1. A system-by-system list of condition, obsolescence and known degradation for one train.
                2. Remaining life estimates or the evidence still needed for each system.
                3. A prioritised list of life extension work with rough costs.
                4. The review presented to the asset manager and reviewed every year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A life extension review for one train listing condition, remaining life and costed priority work, presented to the asset manager."
                cadence: cyclic
                effort_hours_estimate: "60"
              tasks:
                - "List each system on the train with its age and known degradation"
                - "Ask the controls team for the obsolescence status of the control system"
                - "Rank life extension work by risk and rough cost"
                - "Update the life extension review with the year's findings @recurring(yearly)"
            - name: Preserving an idled liquefaction train
              description: |-
                ## Purpose
                When feed gas falls short, a train may sit idle for months or years, and cryogenic equipment, compressors and control systems deteriorate if they are simply switched off. A preservation plan covering nitrogen blanketing, compressor barring and turning, instrument and control system care, and the evidence needed for a later restart keeps the option to restart affordable.

                ## Milestones
                1. A preservation method agreed for each system, including dry nitrogen blanketing of cold sections.
                2. Preservation checks scheduled in the maintenance system with owners.
                3. A record of preservation readings kept for the whole idle period.
                4. A restart readiness list kept current with the work needed before cool-down.

                ## Notes
                Ask the original equipment manufacturers for their long-term preservation guidance; warranties and service agreements often depend on following it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A preservation plan for every system of the idled train, with scheduled checks, kept readings and a current restart readiness list."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask each equipment vendor for long-term preservation guidance"
                - "Agree a preservation method for each system with maintenance"
                - "Schedule preservation checks with named owners"
                - "Keep a restart readiness list of work needed before cool-down"
---

# LNG Plant Operations and Engineering

An LNG plant takes pipeline gas, strips out everything that would freeze, cools it to about minus 160 degrees Celsius and pumps it into ships, and engineering it well means understanding the whole chain at once. These projects start with the foundations (the value chain, liquefaction technology, the train walk-down, feed gas limits, cryogenic safety and your technical file), then build the operating machinery of daily health checks, exchanger, compressor, pretreatment and tank monitoring, the skills of refrigerant management, cold equipment care and LNG thermodynamics, the improvement and decision work on capacity, fuel, trips and spares, the dated events from ship loading to cool-down, the roles you may hold on site, and the specialist work of leaks, rollover, custody transfer and life extension, with Atlantic LNG at Point Fortin as the regional reference.

The repeating rhythm is a daily train check, weekly exchanger and tank trends, monthly pretreatment, compressor, flare, loss and refrigerant reviews, quarterly envelope and fuel reviews, and yearly loading arm and emergency drills. The Metrics log, Operational checklist, Purchase decision, Development plan and Risk register templates pair with the projects that keep a standing record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
