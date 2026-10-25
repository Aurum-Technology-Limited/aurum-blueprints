---
id: engineering-practice.mining-and-minerals-engineering
name: Mining and Minerals Engineering
description: "The working kit of a mine planning, production or processing engineer: site data and legal duties in order, mine routines, ground control and tailings checks, core skills, and the bauxite, gold and quarry work of the region."
category: business
version: 1.0.0
tags: [engineering-practice, mining-and-minerals-engineering, engineer, mine-planning, mineral-processing, ground-control, bauxite, gold-mining]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - operational-checklist
    - metrics-log
    - development-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Mining and Minerals Engineering
          description: "Working in mining and minerals engineering: mine planning, extraction methods, mineral processing, ground control, safety, and the bauxite, gold and aggregate sectors in the region."
          projects:
            - name: Mining engineer role and deliverables map
              description: |-
                ## Purpose
                Mining engineer is a title that covers a short-term planner in the pit, a long-term planner in the office, a drill and blast engineer and a process engineer in the plant, and each owns different documents. Writing down which deliverables are yours, who checks them and who acts on them stops you redoing a geologist's work or missing a statutory report. Do it in your first fortnight on site.

                ## Milestones
                1. A one-page list of the plans, reports and designs your role owns, from shift plans to pit designs.
                2. Each deliverable matched to the person who checks it and the person who uses it.
                3. Statutory items, such as reports the mine manager must sign, marked separately.
                4. The list agreed with your superintendent and dated.

                ## Notes
                Ask for the last issued copy of every deliverable on the list. An old version shows the expected standard faster than any job description.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliverables map for your role, with checker, user and statutory status for each item, is agreed with your superintendent and saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every plan, report and design you have been asked for so far"
                - "Ask your superintendent which ones you own and which you only feed"
                - "Collect the latest issued copy of each deliverable you own"
                - "Send the finished map to your superintendent for agreement"
            - name: Mine site fact sheet and life-of-mine summary
              description: |-
                ## Purpose
                New engineers waste weeks piecing together a site from old slide packs and conversations in the crib room. A two-page fact sheet with commodity, deposit type, pits and pushbacks, reserves, strip ratio, fleet, plant capacity, recovery and remaining mine life gives you and everyone you brief one agreed starting point. It also shows quickly where the numbers disagree.

                ## Milestones
                1. Deposit type, ore types and current reserves summarised in one table.
                2. Active pits, planned pushbacks and waste dumps marked on a single site plan.
                3. Fleet list, plant throughput and average recovery recorded with their source.
                4. Remaining mine life and strip ratio taken from the current life-of-mine plan.
                5. Every figure traced to a named report, model or database.

                ## Notes
                Put a date and revision number on the sheet. Fact sheets get forwarded for years after the reserves have changed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated, sourced site fact sheet covering deposit, reserves, pits, fleet, plant and mine life is reviewed by the technical services superintendent."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Download the latest reserve statement and life-of-mine plan summary"
                - "Mark active pits, pushbacks and dumps on one current site plan"
                - "Record fleet, plant throughput and recovery with their sources"
                - "Ask the technical services superintendent to check the sheet"
            - name: Mining law, licence and permit register
              description: |-
                ## Purpose
                A mine runs under a stack of legal instruments: the mining licence or lease, environmental permits, an explosives licence, water abstraction and discharge consents, and the mining safety regulations of the country. Engineers who do not know the conditions can plan a pushback outside the licence boundary or a discharge the permit does not allow. A register of each instrument, its conditions and its renewal date keeps planning inside the law.

                ## Milestones
                1. Every licence, permit and consent for the site listed with issuing authority and expiry date.
                2. Conditions that affect mine planning, such as boundaries, setbacks and blasting hours, highlighted.
                3. An owner named for each renewal and each recurring report to an authority.
                4. The register reviewed with the site environmental and legal contacts.

                ## Notes
                Keep copies of the actual instruments beside the register. Summaries drift from the wording, and the wording is what an inspector reads.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register of all site licences and permits, with conditions, owners and expiry dates, is reviewed by the environmental and legal leads."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect copies of the mining licence and every site permit"
                - "List each instrument with its issuing authority and expiry date"
                - "Highlight conditions that limit pit boundaries, blasting or discharges"
                - "Check every expiry date and renewal owner in the register @recurring(yearly)"
            - name: Pit readiness and site induction record
              description: |-
                ## Purpose
                Working in a pit means sharing roads with haul trucks whose operators cannot see a light vehicle beside the front wheel. Before you walk or drive in the pit you need the site induction, the light vehicle permit, the right radio channel and a clear picture of the exclusion zones around shovels, blasts and crest edges. Recording each item in one place means you never turn up at a blast hold or a face inspection unable to go in.

                ## Milestones
                1. Site induction and pit access training completed and recorded.
                2. Light vehicle permit, radio procedure and haul road rules signed off.
                3. Personal protective equipment issued, including the high visibility pattern the site uses.
                4. Exclusion zones for loading units, blasts and crests walked with a supervisor.

                ## Notes
                Never enter the pit without radio contact with the pit controller. A buggy whip flag and beacon are only useful if the truck operator knows you are there.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Induction, light vehicle permit, radio sign-off and PPE issue are all recorded before your first unaccompanied entry to the pit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the site induction and pit access training with the safety office"
                - "Complete the light vehicle permit and radio procedure assessment"
                - "Walk the loading and blast exclusion zones with a pit supervisor"
                - "File the training records in your personal competence folder"
            - name: Geological and mine data inventory
              description: |-
                ## Purpose
                Mine planning rests on the drillhole database, the block model, the latest survey pickups, the topography and the dispatch or production records, and each usually lives in a different place with a different owner. Knowing which version of each is current, and who changes it, prevents the classic mistake of designing on last year's block model. A short inventory now saves weeks of rework later.

                ## Milestones
                1. Each dataset listed with its location, owner, format and date of last update.
                2. The current block model version and its estimation date confirmed with the resource geologist.
                3. Gaps noted, such as missing density data or old topography.
                4. The inventory saved where the whole technical team can see it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A data inventory naming owner, location and current version for drillholes, block model, survey, topography and production records is shared with the technical team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the resource geologist which block model version is current"
                - "List location and owner for drillhole, survey and production data"
                - "Note datasets that are older than the latest pit surface"
                - "Share the inventory in the technical services folder"
            - name: Mine survey control and pickup standards check
              description: |-
                ## Purpose
                Every tonnage, reconciliation and design check depends on survey: control points, face pickups, stockpile volumes and the end-of-month surface. A coordinate system mix-up or a pickup that misses a toe can put hundreds of thousands of tonnes in the wrong place. Agreeing the standards with the surveyors, and checking them monthly, keeps planning and survey on the same ground.

                ## Milestones
                1. The site coordinate system, datum and grid confirmed in writing.
                2. Pickup frequency agreed for faces, stockpiles, dumps and the monthly end-of-month surface.
                3. Drone or laser scan surfaces checked against conventional points at least once.
                4. A monthly check that the latest surface has been loaded into the planning software.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Written survey standards for coordinates, pickup frequency and surface updates are agreed with the chief surveyor and checked monthly."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the chief surveyor for the site coordinate system and datum note"
                - "Agree pickup frequency for faces, stockpiles and month-end surfaces"
                - "Compare one drone surface against conventional survey points"
                - "Load the month-end surface and check it against the plan @recurring(monthly:26)"
            - name: Mine planning software and template set-up
              description: |-
                ## Purpose
                Most mines use one general mine planning package, one scheduling tool and a set of shared spreadsheets, and each site has its own folder structure, naming rules and design templates. Setting these up properly on day one, with licences, standard layers and the site's design parameters, means your first pit design or dump plan matches what the team expects.

                ## Milestones
                1. Licences for the planning and scheduling software active on your machine.
                2. Site templates for designs, layers and colours loaded.
                3. The shared folder structure and file naming rules written down.
                4. A first test design saved and checked by a senior planner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Planning software, site templates and folder rules are in place and a first test design has been checked by a senior planner."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request licences for the planning and scheduling software"
                - "Load the site design templates and standard layers"
                - "Write the folder structure and file naming rules on one page"
                - "Ask a senior planner to check your first test design"
            - name: Tonnes, density and moisture basis sheet
              description: |-
                ## Purpose
                Wet tonnes, dry tonnes, bank cubic metres and loose cubic metres get mixed up constantly, and bauxite and laterite ores carry so much moisture that the difference changes royalties and shipping. A one-page sheet with the site's densities by material, swell factors, moisture basis and the conversion used in each report stops numbers from silently drifting between the pit, the plant and the port.

                ## Milestones
                1. In situ density by material type listed with its source and test method.
                2. Swell and compaction factors for each material agreed with the planners.
                3. The moisture basis for each report and contract, wet or dry, written down.
                4. Worked examples converting bank volume to wet and dry tonnes.

                ## Notes
                Check which basis each sales contract and royalty return uses. It is often different from the one the mine reports internally.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conversion sheet with densities, swell factors and moisture basis per report is checked by the senior planner and pinned in the planning office."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect density test results for each material type"
                - "Ask planning which swell factors the schedule uses"
                - "Note whether each report and contract uses wet or dry tonnes"
                - "Write three worked conversion examples on the sheet"
            - name: Principal mining hazard register for your area
              description: |-
                ## Purpose
                The hazards that kill people in mines are well known: vehicle interaction, falls from height and crest edges, slope failure, inrush of water, fly rock and misfires, and tailings failures. A register of the principal hazards in your area of responsibility, each with its critical controls and how they are verified, turns safety from a slogan into a short list you can check. Your stop-work authority applies whenever a critical control is missing.

                ## Milestones
                1. Principal hazards for your area listed, from vehicle interaction to wall failure.
                2. Critical controls named for each hazard with the person who owns them.
                3. A verification method agreed for each control, such as an inspection or a field check.
                4. The register reviewed with the site safety lead and the mine manager.

                ## Notes
                Start from the **Risk register** template. Keep the list short enough to check in the field; a register of two hundred hazards is never read.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A principal hazard register with critical controls, owners and verification methods is signed off by the site safety lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the principal hazards in your area with the site safety lead"
                - "Name the critical controls and the owner for each hazard"
                - "Agree how each control will be checked in the field"
                - "Review the register and field checks with the safety lead @recurring(quarterly)"
            - name: Daily production and shift plan check
              description: |-
                ## Purpose
                A mine that only looks at production at month end finds out about a shortfall when it can no longer be recovered. A ten-minute check each morning of tonnes moved, ore delivered, equipment hours and delays against the shift plan shows problems while the next shift can still act on them.

                ## Milestones
                1. A standard morning view of tonnes, ore, hours and delays against plan.
                2. Variances over an agreed threshold flagged to the shift supervisor.
                3. A running note of repeated delay causes kept for the weekly plan.
                4. The check done before the morning production meeting on working days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The morning production check is done on at least 90 percent of working days for a month, with variances raised before the production meeting."
                cadence: rolling
              tasks:
                - "Set up a morning view of tonnes, ore and delays against plan"
                - "Agree the variance threshold that triggers a call to the supervisor"
                - "Check last shift's tonnes, ore and delays before the meeting @recurring(daily)"
                - "Note repeated delay causes for the weekly planning meeting"
            - name: Weekly short-term mine plan
              description: |-
                ## Purpose
                The weekly plan is where the monthly target turns into which shovel digs which block, which drill pattern is next and where each truck goes. When it is late or vague, operators make it up shift by shift and ore quality wanders. A plan issued on the same day every week, agreed with the pit superintendent, keeps loading, drilling and grade on one page.

                ## Milestones
                1. A standard weekly plan layout covering digging, drilling, blasting and dumping.
                2. Ore blocks and expected grades listed for each loading unit.
                3. The plan reviewed with the pit superintendent before issue.
                4. Last week's plan compared with actual and the main gaps recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly plan is issued on the agreed day for eight consecutive weeks, each with a plan versus actual comparison for the previous week."
                cadence: rolling
              tasks:
                - "Agree the weekly plan layout with the pit superintendent"
                - "Issue the short-term plan with digging, drilling and dumping areas @recurring(weekly:thu)"
                - "Compare last week's plan against actual tonnes and grade"
                - "Record the top three reasons the plan was missed"
            - name: Monthly mine-to-mill reconciliation
              description: |-
                ## Purpose
                Reconciliation compares what the resource model predicted, what grade control said, what the mine reported and what the plant received, often called F1, F2 and F3 factors. Persistent gaps point to dilution, ore loss, density errors or a biased model, and they directly affect reserves and cash. Doing it on the same day each month, with the same method, builds a trend the geologists and metallurgists can trust.

                ## Milestones
                1. A reconciliation method written down, with data sources and factor definitions.
                2. Monthly factors for tonnes, grade and metal calculated and plotted.
                3. Explanations recorded for any factor outside the agreed range.
                4. A twelve-month trend shared with geology, mining and processing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly reconciliation factors for tonnes, grade and metal are published for six consecutive months with explanations for every out-of-range factor."
                cadence: rolling
              tasks:
                - "Write down the reconciliation method and factor definitions"
                - "Calculate and plot the month's tonnes, grade and metal factors @recurring(monthly:5)"
                - "Ask geology and processing to explain factors outside range"
                - "Ask the agent to draft the twelve-month reconciliation summary"
            - name: Haul road inspection and repair routine
              description: |-
                ## Purpose
                Haul roads decide truck speed, tyre life, fuel burn and the risk of a runaway or collision. Potholes, poor drainage, missing windrows and steep or narrow sections build up gradually until a tyre fails or a truck slides off a wet ramp. A weekly road walk against a short checklist, with repairs sent straight to the road crew, keeps the network safe and fast.

                ## Milestones
                1. A haul road checklist covering width, grade, windrow height, drainage and surface.
                2. Road sections numbered on a plan so defects can be logged by location.
                3. Defects passed to the road maintenance crew with a target repair date.
                4. A monthly summary of open defects and repeat locations.

                ## Notes
                Start from the **Operational checklist** template. Check windrow height against the largest truck's wheel on the road, not the smallest.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly haul road inspections are recorded for two months, with every defect logged by section and assigned a repair date."
                cadence: rolling
              tasks:
                - "Number the haul road sections on the current site plan"
                - "Write a checklist for width, grade, windrows, drainage and surface"
                - "Walk the haul roads and log defects by section @recurring(weekly:tue)"
                - "Send logged defects to the road crew with repair dates"
            - name: Pit wall and slope monitoring routine
              description: |-
                ## Purpose
                Most slope failures give warning: tension cracks behind the crest, bulging at the toe, increased seepage or a change in displacement rates from prisms or radar. Monitoring only works if someone looks at the data on a fixed rhythm and knows the trigger levels that mean evacuate. A twice-weekly review with written trigger action response plans turns monitoring into protection.

                ## Milestones
                1. Monitoring instruments, from prisms to radar or piezometers, mapped on a plan.
                2. Trigger levels and the response for each level agreed with the geotechnical engineer.
                3. Visual crest and toe inspections recorded alongside the instrument data.
                4. Any trigger exceedance escalated within the shift it was seen.

                ## Notes
                If a trigger is reached, people leave first and the cause is studied afterwards. Use your stop-work authority without waiting for a second reading.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Slope monitoring data and visual inspections are reviewed twice weekly against written trigger levels, with every exceedance escalated the same shift."
                cadence: rolling
              tasks:
                - "Map every slope monitoring instrument on the current pit plan"
                - "Get the trigger action response plan from the geotechnical engineer"
                - "Review displacement data and walk the crests and toes @recurring(weekly:mon,thu)"
                - "Report any crack, bulge or trigger exceedance to the pit superintendent"
            - name: Blast performance and fragmentation review
              description: |-
                ## Purpose
                Every blast is an experiment: the design sets burden, spacing, stemming and timing, and the result shows up as fragmentation, diggability, crusher throughput, back break and vibration at the nearest house. Reviewing each week's blasts against their design, with photos and loader feedback, is how a drill and blast engineer improves patterns instead of repeating them.

                ## Milestones
                1. A blast record for each shot with design, as-drilled depths and loading notes.
                2. Fragmentation photos or image analysis results attached to each record.
                3. Vibration and airblast readings checked against the permitted limits.
                4. Pattern changes agreed from the review and recorded with their reason.

                ## Notes
                Misfires and fly rock are reported immediately under the site's blasting rules, never held for the weekly review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week's blasts are reviewed against design, fragmentation and vibration results for two months, with any pattern changes recorded."
                cadence: rolling
              tasks:
                - "Set up a blast record with design, drilling and loading fields"
                - "Collect fragmentation photos and loader feedback after each shot"
                - "Review the week's blasts against design and vibration limits @recurring(weekly:fri)"
                - "Record agreed pattern changes with the reason for each"
            - name: Pit dewatering and water management routine
              description: |-
                ## Purpose
                Caribbean pits can take a month of rain in an afternoon, and a flooded sump or a saturated wall stops production and raises the risk of slope failure. A monthly check of pump capacity, sump levels, diversion drains and discharge points, stepped up before the wet season, keeps water out of the working benches and within the discharge permit.

                ## Milestones
                1. Pumps, sumps, drains and discharge points marked on the pit plan.
                2. Installed pumping capacity compared with the design storm inflow.
                3. Spare pumps, pipe and fuel for the rainy months confirmed.
                4. Discharge sampling results checked against the permit conditions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly dewatering check is recorded for six months, with pumping capacity compared against design inflow and discharge results within permit."
                cadence: rolling
              tasks:
                - "Mark pumps, sumps, drains and discharge points on the pit plan"
                - "Compare installed pump capacity with the design storm inflow"
                - "Check pumps, sump levels and drains across the pit @recurring(monthly:12)"
                - "Confirm spare pumps and pipe are on site before the wet season"
            - name: Tailings storage facility surveillance
              description: |-
                ## Purpose
                Tailings dam failures are among the worst disasters in mining, and they usually follow years of small signs: rising phreatic levels, reduced freeboard, seepage or beach changes nobody reported. A disciplined surveillance routine, with readings checked against the limits in the operations manual and an annual review by the engineer of record, is the core of tailings safety. Engineers who work near the facility should know its limits by heart.

                ## Milestones
                1. The tailings operations manual and its trigger levels read and summarised.
                2. Monthly checks of freeboard, piezometers, seepage and beach position recorded.
                3. Exceedances escalated to the responsible person and engineer of record.
                4. Quarterly summaries filed for the annual dam safety inspection.

                ## Notes
                International good practice, such as the Global Industry Standard on Tailings Management, sets clear roles for an accountable executive, a responsible engineer and an independent reviewer. Learn who holds each role on your site.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly tailings surveillance readings are recorded against the operations manual limits for six months, with quarterly summaries sent to the engineer of record."
                cadence: rolling
              tasks:
                - "Read the tailings operations manual and note every trigger level"
                - "Record freeboard, piezometer and seepage readings @recurring(monthly:18)"
                - "Send the quarterly surveillance summary to the engineer of record @recurring(quarterly)"
                - "Walk the embankment crest and toe with the tailings supervisor"
            - name: Fleet productivity and cycle time review
              description: |-
                ## Purpose
                Truck and shovel productivity is where most mining cost sits, and small losses add up: long queues at the shovel, slow spotting, short loads, and trucks waiting at the crusher. A monthly review of cycle times, payloads, availability and utilisation, by fleet and by route, shows which loss is worth attacking next.

                ## Milestones
                1. A monthly table of availability, utilisation, payload and cycle time by fleet.
                2. Queue, spot, load, haul and dump times broken down for the main routes.
                3. The largest single loss identified and an owner given an action.
                4. Six months of results kept in one log to show the trend.

                ## Notes
                Start from the **Metrics log** template. Check payloads against the truck manufacturer's rated load before celebrating a bigger bucket.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly fleet productivity figures by fleet and route are logged for six months, each month naming the largest loss and an owner."
                cadence: rolling
              tasks:
                - "Pull availability, utilisation and payload data from dispatch"
                - "Break down cycle times for the three busiest haul routes"
                - "Log the month's fleet figures and name the largest loss @recurring(monthly:22)"
                - "Agree one action on the largest loss with the maintenance lead"
            - name: Grade control sampling and ore mark-out
              description: |-
                ## Purpose
                Grade control decides, block by block, whether a truck goes to the crusher, the stockpile or the waste dump. Poor sampling, late assays or mark-out pegs that operators cannot see send ore to waste and waste to the mill, and that loss never comes back. A daily routine linking blasthole or trench samples, assays, ore polygons and field mark-out keeps the right material going to the right place.

                ## Milestones
                1. The sampling method and sample spacing written down and agreed with geology.
                2. Assay turnaround time measured against the time before digging starts.
                3. Ore polygons marked in the field and in dispatch before the loader arrives.
                4. Misdirected loads tracked and their causes recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ore polygons are marked in the field and loaded to dispatch before digging on at least 95 percent of shifts over a month, with misdirected loads recorded."
                cadence: rolling
              tasks:
                - "Agree the sampling method and spacing with the grade control geologist"
                - "Measure assay turnaround against the planned digging date"
                - "Check today's ore polygons are marked in the field and in dispatch @recurring(daily)"
                - "Record each misdirected load with its cause"
            - name: Monthly mine safety performance review
              description: |-
                ## Purpose
                Injury rates arrive too late and too rarely to steer a mine. Leading indicators, such as critical control checks completed, vehicle interaction near misses, berm and windrow defects found and closed, and overdue corrective actions, show where the next serious incident is building. A monthly review that pairs both kinds of number keeps attention on the work that prevents fatalities.

                ## Milestones
                1. Five or six leading indicators chosen with the safety lead.
                2. Monthly figures collected for leading indicators and injury rates.
                3. High potential incidents and near misses reviewed for repeat patterns.
                4. Overdue corrective actions listed with owners and new dates.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly safety review with leading indicators, high potential incidents and overdue actions is produced for six consecutive months."
                cadence: rolling
              tasks:
                - "Choose five leading safety indicators with the site safety lead"
                - "Compile the month's leading indicators and incidents @recurring(monthly:8)"
                - "Review high potential incidents for repeat causes"
                - "Chase owners of overdue corrective actions for new dates"
            - name: Resource and reserve reporting codes
              description: |-
                ## Purpose
                Public statements of mineral resources and ore reserves follow codes in the CRIRSCO family, such as JORC, NI 43-101 and SAMREC, and each requires a competent or qualified person to stand behind the numbers. Engineers who understand the difference between measured, indicated and inferred resources, and the modifying factors that turn resources into reserves, write better plans and avoid reporting claims the data cannot support.

                ## Milestones
                1. The reporting code your company uses identified and read in full.
                2. Resource categories and modifying factors summarised on one page.
                3. Your site's last public statement read and its key tables understood.
                4. The role and duties of the competent person explained to a colleague.

                ## Notes
                Inferred resources generally cannot be converted to reserves. Plans that rely on them must say so plainly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of resource categories, modifying factors and competent person duties under your company's code is checked by a senior geologist."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find out which reporting code your company reports under"
                - "Read the code and note the resource and reserve definitions"
                - "Read your site's latest public resource and reserve statement"
                - "Ask a senior geologist to check your one-page summary"
            - name: Open pit design fundamentals
              description: |-
                ## Purpose
                Bench height, berm width, face angle, ramp grade and minimum mining width are set by the fleet, the rock and the geotechnical recommendations, and together they decide strip ratio and safety. Designing a small pushback by hand, then checking it in software, teaches why each parameter is there and what happens when someone shaves a berm to save waste.

                ## Milestones
                1. Site design parameters listed with their source report.
                2. A small pushback designed with benches, berms and a ramp.
                3. Tonnes, grade and strip ratio of the design calculated.
                4. The design checked by a senior planner against the geotechnical criteria.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice pushback design meeting site geotechnical criteria, with tonnes, grade and strip ratio, is reviewed by a senior planner."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List the site's bench, berm, face angle and ramp parameters"
                - "Design a small practice pushback in the planning software"
                - "Calculate tonnes, grade and strip ratio for the design"
                - "Book a review of the design with a senior planner"
            - name: Drill and blast design basics
              description: |-
                ## Purpose
                Blast design ties rock properties, hole diameter, burden, spacing, stemming, explosive type and initiation timing to the fragmentation the loaders and crusher need. Learning to design a production pattern, calculate powder factor and predict vibration at the nearest structure lets a mining engineer talk on equal terms with the shotfirer and the explosives supplier. The shotfirer holds the licence and the final say on site.

                ## Milestones
                1. The main blast design parameters and their effects explained in your own notes.
                2. A production pattern designed for one bench using site rock data.
                3. Powder factor and charge per delay calculated for the pattern.
                4. The design reviewed with the senior drill and blast engineer and shotfirer.

                ## Notes
                Explosives handling, storage and firing are licensed activities. Learning design does not authorise you to handle or fire them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice blast design with powder factor and charge per delay is reviewed by the senior drill and blast engineer and the site shotfirer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect the site's rock data and current pattern standards"
                - "Design a production pattern for one bench on paper"
                - "Calculate powder factor and charge per delay for the pattern"
                - "Review the design with the drill and blast engineer and shotfirer"
            - name: Rock mechanics and slope stability primer
              description: |-
                ## Purpose
                Slopes fail along structures, through weak rock or in saturated soil, and bauxite and saprolite pits in the region often behave more like soil than rock. Understanding rock mass classification, the main failure mechanisms and how pore pressure lowers the factor of safety lets a mine engineer read a geotechnical report critically and spot danger in the field.

                ## Milestones
                1. Planar, wedge, toppling and circular failure modes described with site examples.
                2. A rock mass classification completed for one exposed face with a geotechnical engineer.
                3. The effect of water pressure on factor of safety explained in your notes.
                4. The site's latest geotechnical report read and its recommendations summarised.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of failure modes, one field rock mass classification and the site geotechnical recommendations is reviewed by the geotechnical engineer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the site's latest geotechnical design report"
                - "Map structures on one exposed face with the geotechnical engineer"
                - "Write notes on each failure mode with a site example"
                - "Summarise the report's recommendations on one page"
            - name: Mineral processing fundamentals
              description: |-
                ## Purpose
                Mining engineers who never visit the plant design mine plans that the plant cannot treat. Learning the flowsheet from crushing and grinding through gravity, flotation, leaching or washing and screening, and how ore hardness and clay content change throughput and recovery, makes every blend and schedule decision better. The flowsheet differs completely between a gold mill, a bauxite drying plant and an aggregate screening plant.

                ## Milestones
                1. The site flowsheet drawn from memory and checked by a metallurgist.
                2. The main throughput and recovery drivers for your ore listed.
                3. A shift spent in the plant control room and on the plant floor.
                4. One recent plant upset traced back to ore feed characteristics.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-drawn flowsheet with throughput and recovery drivers is checked by a site metallurgist after a shift in the plant."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the plant metallurgist for the current process flowsheet"
                - "Arrange a shift shadowing the plant control room operator"
                - "List what in the ore feed changes throughput and recovery"
                - "Draw the flowsheet from memory and have it checked"
            - name: Mine ventilation, dust and noise basics
              description: |-
                ## Purpose
                Open pits still carry exposure risks: diesel exhaust in deep pits on still days, silica dust from drilling and crushing, and noise from fleets and plant. Underground workings in the region's gold mines add ventilation design, gases and heat. Knowing the hazards, the monitoring and the controls lets you plan work that keeps exposures down, with occupational hygienists setting the limits.

                ## Milestones
                1. The main airborne and noise hazards on your site listed by area.
                2. The site's dust, diesel and noise monitoring results read for the last year.
                3. Engineering controls, such as water carts, cab filters and drill dust collectors, checked in the field.
                4. Gaps in controls raised with the occupational hygiene lead.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A site summary of airborne and noise hazards, monitoring results and controls is reviewed with the occupational hygiene lead and gaps raised."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the hygiene lead for the last year's exposure monitoring"
                - "List airborne and noise hazards by area of the site"
                - "Check dust controls on drills, crushers and haul roads"
                - "Raise any missing controls with the hygiene lead"
            - name: Mine economics, cut-off grade and NPV
              description: |-
                ## Purpose
                Cut-off grade, pit limits and mining sequence are economic decisions as much as engineering ones. Working through a breakeven cut-off calculation, a simple discounted cash flow for a pushback and the effect of metal price and recovery on both teaches you why planners argue about a few cents a tonne. It also prepares you to read a feasibility study critically.

                ## Milestones
                1. A breakeven cut-off grade calculated from site costs and recovery.
                2. A simple discounted cash flow built for one pushback.
                3. Sensitivity to price, recovery and cost shown on one chart.
                4. The model reviewed with the senior planner or site finance analyst.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cut-off grade calculation and pushback cash flow model with sensitivities are reviewed by a senior planner or finance analyst."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Collect site mining, processing and overhead costs per tonne"
                - "Calculate a breakeven cut-off grade with current recovery"
                - "Build a simple cash flow model for one pushback"
                - "Review the model with a senior planner"
            - name: Haul fleet sizing and match factor study
              description: |-
                ## Purpose
                Too few trucks leave shovels idle, too many leave trucks queuing, and both waste money. A study that uses actual cycle times, payloads and availability to calculate the match factor, and the truck count for next year's haul profile, gives the mine manager a defensible fleet decision before equipment orders or contracts are placed.

                ## Milestones
                1. Current cycle times, payloads and availability taken from dispatch.
                2. Next year's haul distances and lifts estimated from the mine plan.
                3. Match factor and truck requirement calculated for each period.
                4. A recommendation with fleet count and cost presented to the mine manager.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fleet sizing study with match factor by period and a costed recommendation is presented to the mine manager and the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Extract twelve months of cycle time and payload data"
                - "Estimate haul distances and lifts for next year's plan"
                - "Calculate match factor and truck needs for each quarter"
                - "Ask the agent to draft the fleet recommendation summary"
            - name: Cut-off grade and stockpile strategy review
              description: |-
                ## Purpose
                Stockpiles of low grade ore can be a valuable option or a slowly oxidising liability, depending on recovery over time and whether the plant ever has spare capacity. Reviewing the current cut-off policy and stockpile balances against plant capacity and price assumptions tells the site whether to mine harder, process stockpiles sooner, or stop adding to them.

                ## Milestones
                1. Current stockpile tonnes, grades and ages recorded by pile.
                2. The cut-off grade policy and its assumptions written down.
                3. Options for elevated cut-off or stockpile processing compared on value.
                4. A recommendation agreed with planning, processing and finance.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A stockpile and cut-off review comparing at least two options on value is agreed with planning, processing and finance."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Record tonnes, grade and age for each stockpile"
                - "Write down the current cut-off policy and its assumptions"
                - "Compare the value of two stockpile processing options"
                - "Present the recommendation to planning, processing and finance"
            - name: Contractor versus owner mining comparison
              description: |-
                ## Purpose
                Many mines in the region use mining contractors for the fleet, especially in the first years or for waste stripping campaigns. Comparing contractor rates against the full cost of owning, operating and maintaining a fleet, including capital, skills, spares and risk, gives management a clear basis for renewing a contract or bringing mining in-house.

                ## Milestones
                1. The scope of the current or proposed contract defined in tonnes and activities.
                2. A full owner cost built with capital, operating, maintenance and overheads.
                3. Non-cost factors, such as local skills, flexibility and safety record, scored.
                4. A recommendation presented with its main assumptions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of contractor and owner mining with full costs and scored non-cost factors is presented to management and the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Define the mining scope in tonnes and activities for comparison"
                - "Build a full owner fleet cost including capital and maintenance"
                - "Score both options on skills, flexibility and safety record"
                - "Write up the recommendation with its key assumptions"
            - name: Crushing and grinding bottleneck study
              description: |-
                ## Purpose
                When the plant cannot keep up with the mine, the constraint is usually in crushing, grinding or screening, and blasting harder can be cheaper than buying a new mill. A study that measures throughput, power draw and feed size at each stage finds the real bottleneck and tests whether mine-to-mill changes, such as finer fragmentation or blending of hard and soft ore, can lift it.

                ## Milestones
                1. Throughput, availability and power draw measured for each comminution stage.
                2. Feed size distribution measured at the primary crusher.
                3. The limiting stage identified and agreed with the plant metallurgist.
                4. Mine-side and plant-side options costed and a trial agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bottleneck study names the limiting comminution stage and an agreed trial, with costs for mine-side and plant-side options."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Collect a month of throughput and power data by plant stage"
                - "Measure feed size distribution at the primary crusher"
                - "Agree the limiting stage with the plant metallurgist"
                - "Cost a fragmentation trial and a plant-side fix side by side"
            - name: Gold recovery improvement trial
              description: |-
                ## Purpose
                A one percent gain in gold recovery can be worth more than a year of cost savings. Common opportunities include better gravity recovery of coarse gold, grind size, leach residence time, carbon management and dealing with preg-robbing or clay-rich ore, all tested by a controlled trial rather than a hunch. Reagent and cyanide decisions sit with the metallurgist and the site's chemical safety rules.

                ## Milestones
                1. Recovery losses broken down by size fraction and ore type from tails assays.
                2. One improvement chosen and a trial plan written with a control period.
                3. The trial run and results compared with the control period.
                4. A decision recorded to adopt, adjust or drop the change.

                ## Notes
                Any change to reagents, cyanide handling or process conditions goes through the site's management of change process before the trial starts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recovery trial with a control period and documented results leads to a recorded decision to adopt, adjust or drop the change."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the metallurgist for tails assays by size fraction"
                - "Choose one recovery improvement to trial"
                - "Write the trial plan with a control period and success measure"
                - "Submit the trial through management of change before starting"
            - name: Bauxite moisture and shipping quality control
              description: |-
                ## Purpose
                Bauxite from Guyana, Jamaica and Suriname is often sold dried or calcined, and moisture, alumina, silica and size decide price, penalties and whether a cargo can be loaded safely. A weekly check from pit blend through the dryer to the stockpile and ship loader keeps product inside contract specification and avoids a rejected or penalised shipment.

                ## Milestones
                1. Contract specifications for moisture, chemistry and size listed by customer.
                2. Sampling points from pit to ship loader agreed with the laboratory.
                3. Weekly quality results tracked against specification by stockpile.
                4. Corrective actions for any out-of-specification stockpile recorded.

                ## Notes
                Wet bulk cargoes can shift at sea. Moisture limits for safe carriage are set by shipping rules and the master of the vessel, not only by the sales contract.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly bauxite quality results are tracked against contract specification for each stockpile for three months, with every exceedance actioned."
                cadence: rolling
              tasks:
                - "List each customer's moisture, chemistry and size specification"
                - "Agree sampling points from pit to ship loader with the laboratory"
                - "Check stockpile quality results against specification @recurring(weekly:wed)"
                - "Record corrective actions for any stockpile out of specification"
            - name: Aggregate product specification and quarry mix review
              description: |-
                ## Purpose
                Quarries in Trinidad, Guyana, Jamaica and the smaller islands sell crushed stone, sand and base course to contractors whose specifications cover grading, strength, flakiness and cleanliness. A review of which products sell, which pile up and which keep failing tests lets the quarry adjust crusher settings and blasting to make more of what customers pay for.

                ## Milestones
                1. Each product listed with its specification, sales volume and margin.
                2. Monthly test results for grading and quality compared against specification.
                3. Slow-moving stockpiles and their causes identified.
                4. Crusher and screen settings changed where the review justifies it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A product mix review with specification results, sales and stockpile ages leads to recorded changes in crusher or screen settings."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List each product with its specification, volume and margin"
                - "Compare grading and quality tests against specification @recurring(monthly:15)"
                - "Identify stockpiles that have not moved in three months"
                - "Agree crusher or screen setting changes with the plant foreman"
            - name: Annual life-of-mine plan and budget update
              description: |-
                ## Purpose
                Each year the mine updates its life-of-mine plan and the next year's budget from the new reserve model, cost actuals and price assumptions. Engineers who start early, freeze inputs on a set date and document every assumption produce a plan that survives board scrutiny instead of being rebuilt in a panic the week before submission.

                ## Milestones
                1. Input freeze date, model versions and price and cost assumptions agreed.
                2. Pit designs and schedule updated for the new reserve model.
                3. Budget tonnes, grade, costs and fleet hours reconciled with the schedule.
                4. An assumptions register issued with the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An updated life-of-mine plan and budget with an assumptions register is submitted on the agreed date each year."
                cadence: cyclic
              tasks:
                - "Agree the input freeze date and price assumptions with finance"
                - "Start the life-of-mine and budget update cycle @recurring(yearly)"
                - "Update pit designs and schedule to the new reserve model"
                - "Issue the assumptions register with the submitted plan"
            - name: Wet season and hurricane readiness for the mine
              description: |-
                ## Purpose
                Heavy rain and tropical storms flood pits, cut access roads, overtop sediment ponds and raise tailings pond levels. Getting ready before the wet season, with pumps serviced, drains cleared, freeboard checked, fuel and food stocked for interior sites and a clear trigger for stopping work, turns a storm from an emergency into a planned shutdown and restart.

                ## Milestones
                1. Pumps, drains, sediment ponds and culverts inspected and cleared.
                2. Tailings and water dam freeboard confirmed against the wet season requirement.
                3. Weather triggers for stopping pit work and evacuating low areas agreed.
                4. Fuel, food, spares and communications for isolated sites confirmed.

                ## Notes
                Start from the **Operational checklist** template. Interior gold and bauxite sites can be cut off for days, so plan for being alone.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed wet season readiness checklist with dam freeboard, drainage, stop-work triggers and supplies is signed by the mine manager before the season."
                cadence: cyclic
              tasks:
                - "Start the wet season readiness checklist for the site @recurring(yearly)"
                - "Inspect pumps, drains, culverts and sediment ponds"
                - "Agree rainfall and wind triggers for stopping pit work"
                - "Confirm fuel, food and radio supplies for isolated camps"
            - name: Mine closure plan and progressive rehabilitation
              description: |-
                ## Purpose
                Regulators increasingly expect a costed closure plan from the start of mining, and rehabilitation done as the mine goes is cheaper and more convincing than a promise for the end. An annual update of the closure plan, the cost estimate and the area rehabilitated, with landform, topsoil and revegetation records, keeps the liability honest and the community informed.

                ## Milestones
                1. The current closure plan and cost estimate read and checked against site changes.
                2. Areas available for progressive rehabilitation identified on the site plan.
                3. Topsoil stockpiles and revegetation trials recorded.
                4. The updated plan and cost sent to the environmental lead for submission.

                ## Notes
                Mined-out bauxite land in the region is often returned to forestry, agriculture or community use. Agree the end land use with stakeholders before shaping the landform.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An updated closure plan, cost estimate and rehabilitation record is issued to the environmental lead each year."
                cadence: cyclic
              tasks:
                - "Read the current closure plan and cost estimate"
                - "Mark areas ready for progressive rehabilitation on the site plan"
                - "Record topsoil stockpiles and revegetation trial results"
                - "Update the closure plan and cost estimate @recurring(yearly)"
            - name: New pit or pushback start-up
              description: |-
                ## Purpose
                Opening a new pit or pushback means clearing, topsoil stripping, access ramps, drainage, first blasts and often a new haul route past existing operations. Treating the start-up as a dated project, with a readiness check before the first truck moves, avoids the common problems of starting without drainage, without survey control or with an unsafe interaction between the new and old traffic.

                ## Milestones
                1. Design, permits and geotechnical sign-off in place for the new area.
                2. Clearing, topsoil stripping and drainage completed and surveyed.
                3. Access ramp and traffic management plan approved.
                4. A readiness review held and signed before mining starts.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new pit or pushback starts on a signed readiness review covering design, permits, drainage, survey and traffic management."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Confirm design, permits and geotechnical sign-off for the new area"
                - "Plan clearing, topsoil stripping and drainage with the earthworks crew"
                - "Write the traffic management plan for new and old haul routes"
                - "Hold the readiness review with the mine manager before first dig"
            - name: Mines inspectorate visit preparation
              description: |-
                ## Purpose
                Mines inspectors check that the site follows the mining safety regulations, its own plans and the conditions of its licences, and they read records as closely as they look at benches. Preparing the documents an inspector usually asks for, walking the route they will walk and closing obvious defects beforehand makes the visit a check rather than a surprise.

                ## Milestones
                1. A list of records an inspector usually requests compiled and located.
                2. The likely inspection route walked and defects closed out.
                3. Open actions from the last inspection confirmed closed with evidence.
                4. Findings from the visit recorded with owners and dates.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All actions from the previous inspection are evidenced closed before the visit, and every new finding is recorded with an owner and date."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Collect the findings and actions from the last inspection"
                - "Compile the records an inspector usually asks for"
                - "Walk the likely inspection route and close obvious defects"
                - "Record every finding from the visit with an owner and date"
            - name: Mine emergency response drill
              description: |-
                ## Purpose
                Wall collapses, vehicle rollovers, haul truck fires and pit floods need people who know their role without thinking. A drill run against a realistic scenario tests alarms, muster points, radio procedures, mine rescue and links with the nearest hospital, which can be hours away from an interior site. Each drill should leave a short list of fixes.

                ## Milestones
                1. A realistic scenario chosen from the principal hazard register.
                2. Roles, communications and medical evacuation routes confirmed before the drill.
                3. The drill run and timings recorded against the emergency plan.
                4. Gaps found in the drill turned into actions with owners.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A drill based on a principal hazard is run and recorded each quarter, with every gap assigned an owner and closing date."
                cadence: cyclic
              tasks:
                - "Pick a drill scenario from the principal hazard register"
                - "Confirm medical evacuation routes and contacts for the site"
                - "Run a drill and record timings and gaps @recurring(quarterly)"
                - "Assign owners and dates to each gap found"
            - name: First-year plan for a graduate mining engineer
              description: |-
                ## Purpose
                Graduate mining engineers learn fastest when the first year deliberately covers the pit, drill and blast, short-term planning, survey and a spell in the plant, rather than a year stuck on one spreadsheet. A written plan agreed with a mentor, with competences to evidence and a mid-year check, turns rotations into progress towards professional registration and a statutory certificate.

                ## Milestones
                1. Rotations agreed for production, drill and blast, planning, survey and processing.
                2. A mentor named and monthly meetings booked.
                3. Competences to evidence listed against the registration body's framework.
                4. A mid-year review held and the second half adjusted.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first-year rotation plan with a named mentor and competences is agreed, and a mid-year review is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft the rotation plan covering pit, blasting, planning and plant"
                - "Ask a senior engineer to act as your mentor"
                - "List the competences you must evidence for registration"
                - "Book the mid-year review with your mentor and manager"
            - name: Fly-in fly-out camp rotation handover
              description: |-
                ## Purpose
                Interior gold and bauxite sites often run on rotations such as two weeks in and two out, with engineers sharing one role across swings. A poor handover loses the reasons behind plan changes, open safety actions and half-finished designs. A standard written handover at each swing change, and a short call with the incoming engineer, keeps the work continuous.

                ## Milestones
                1. A handover template covering plan status, safety actions, designs and contacts.
                2. Handover written before each swing change and saved in a shared place.
                3. A call held with the incoming engineer at each changeover.
                4. Open items from the previous handover confirmed closed or carried.

                ## Notes
                Plan for camp life too: fatigue rules, fitness for work and keeping in touch with family on limited connections.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written handover is saved and a handover call held at every swing change for three consecutive rotations."
                cadence: rolling
              tasks:
                - "Agree a handover template with your back-to-back engineer"
                - "Write the handover on the last day of each swing"
                - "Hold a handover call with the incoming engineer"
                - "Check the previous handover's open items are closed or carried"
            - name: Engineering support for small-scale gold miners
              description: |-
                ## Purpose
                Small-scale and artisanal gold mining is a major employer in Guyana and Suriname, and it carries serious risks from unstable pit walls, mercury use and land degradation. Engineers working with miners' associations, government extension programmes or a company's community team can help with safer pit layouts, mercury-free recovery options and rehabilitation. The work is advisory and depends on trust built over repeated visits.

                ## Milestones
                1. The main safety and environmental problems at partner sites recorded on a visit.
                2. Simple guidance on pit wall angles, benches and setbacks agreed with the partner organisation.
                3. Mercury-free recovery options described with the costs and support available.
                4. A follow-up visit plan agreed with the miners or their association.

                ## Notes
                Work through the national mining authority or a recognised programme. Respect the miners' knowledge; advice imposed from outside is rarely followed.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A site visit report with agreed safety and recovery guidance and a follow-up plan is delivered to the partner organisation."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Contact the miners' association or programme you will work with"
                - "Record pit safety and environmental problems on a first visit"
                - "Prepare simple guidance on wall angles, benches and setbacks"
                - "Agree a follow-up visit plan with the miners"
            - name: Running engineering at a small aggregate quarry
              description: |-
                ## Purpose
                In a small quarry one engineer, or the owner, often covers planning, blasting contracts, plant, safety, permits and sales. A simple system with a quarry face plan, a blasting contractor record, a plant maintenance list and a monthly permit and safety check lets one person cover it all without something important slipping.

                ## Milestones
                1. A face and bench plan drawn for the next twelve months of extraction.
                2. The blasting contractor's licence, method statement and vibration records filed.
                3. A basic plant maintenance list for crusher, screens and conveyors.
                4. A monthly check of permit conditions, safety items and stock levels.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month face plan, contractor file, plant maintenance list and monthly check are in place and used for three months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Sketch the quarry faces and benches for the next twelve months"
                - "File the blasting contractor's licence and method statement"
                - "List maintenance items for the crusher, screens and conveyors"
                - "Write a one-page monthly permit, safety and stock check"
            - name: Professional registration and mine manager certificate
              description: |-
                ## Purpose
                Senior mining roles usually require professional registration and, in many countries, a statutory certificate of competency to manage a mine or quarry. Requirements differ by country, so the first step is to check the current rules with the mines authority and the engineering registration body, then build an experience record and study plan that meets them.

                ## Milestones
                1. Current requirements for registration and the statutory certificate confirmed with the official bodies.
                2. An experience record started against the required competences.
                3. Study plan for legislation and technical papers set with dates.
                4. Application or examination booked once experience requirements are met.

                ## Notes
                Check the current rules, fees and dates on the bodies' websites. They change and differ between countries in the region.
              priority: medium
              deadlineOffsetDays: 540
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Registration and certificate requirements are confirmed in writing and an application or examination is booked within eighteen months."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Check registration and certificate rules on the official websites"
                - "Start an experience record against the required competences"
                - "Add the month's experience to your competence record @recurring(monthly:28)"
                - "Book the application or examination when eligible"
            - name: Stepping up to mine technical services lead
              description: |-
                ## Purpose
                Leading technical services means owning the plans, reconciliation, geotechnical and survey outputs of a team rather than doing them yourself. The shift is from accuracy in your own work to setting standards, checking others' work, defending the plan to operations and finance, and growing the next engineers.

                ## Milestones
                1. The team's deliverables, standards and checking responsibilities written down.
                2. One-to-ones set with each team member.
                3. A single plan review meeting agreed with operations and finance.
                4. A development need recorded for each team member.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written team charter with deliverables, standards and checking roles is in place, with one-to-ones and development needs recorded for every team member."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the team's deliverables and who checks each one"
                - "Book a first one-to-one with each team member"
                - "Agree a monthly plan review with operations and finance"
                - "Record one development need for each person"
            - name: Tailings dam breach and emergency preparedness review
              description: |-
                ## Purpose
                Good tailings practice expects every facility to have a credible breach analysis that shows where a flow would go, who and what is in its path, and how fast people must be warned. Reviewing that study, the inundation maps and the emergency preparedness plan with the engineer of record and the community team, and testing the warning system, is specialist work with consequences for everyone downstream.

                ## Milestones
                1. The latest breach analysis and inundation maps read and their assumptions noted.
                2. People, homes, roads and water supplies in the path listed.
                3. Warning systems and evacuation routes checked with the community team.
                4. Gaps raised with the accountable executive and engineer of record.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A review of the breach analysis, downstream exposure and warning arrangements is sent to the accountable executive with every gap recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Obtain the latest breach analysis and inundation maps"
                - "List the people and infrastructure downstream of the facility"
                - "Test the warning system and evacuation routes with the community team"
                - "Send gaps to the accountable executive and engineer of record"
            - name: Geometallurgical model for plant performance
              description: |-
                ## Purpose
                Recovery, throughput and reagent use vary with ore type, hardness, clay content and mineralogy, and a mine plan that assumes one average recovery hides money and risk. Building a geometallurgical model that links test work to domains in the block model lets the schedule predict plant performance, and lets blending decisions be made with real numbers.

                ## Milestones
                1. Ore domains defined with geology and metallurgy.
                2. Hardness and recovery test results assigned to each domain.
                3. Throughput and recovery estimates added to the block model.
                4. Predictions compared with plant actuals for at least three months.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A block model with domain-based throughput and recovery estimates is compared with three months of plant actuals and the error reported."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Agree ore domains with the resource geologist and metallurgist"
                - "Assign hardness and recovery test results to each domain"
                - "Add throughput and recovery fields to the block model"
                - "Compare predicted and actual plant performance monthly"
            - name: Pit optimisation and schedule sensitivity study
              description: |-
                ## Purpose
                Pit optimisation finds the economic pit shell for a given price, cost and recovery, and the schedule decides the order and timing of mining. A sensitivity study that reruns both across price, cost, slope angle and recovery cases shows which assumption the plan is most exposed to, and where the final pit wall should sit to keep value without excessive risk.

                ## Milestones
                1. A base case optimisation run with documented inputs.
                2. Sensitivity cases run for price, cost, slope angle and recovery.
                3. Nested shells and schedule value compared on one chart.
                4. A recommended pit shell and its key risks presented to management.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pit optimisation with at least four sensitivity cases and a recommended shell is presented to management and the choice recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Document base case price, cost, slope and recovery inputs"
                - "Run the base case optimisation and save the shells"
                - "Run sensitivity cases for price, cost, slope and recovery"
                - "Present the recommended shell and its risks to management"
            - name: Independent peer review of a mine plan
              description: |-
                ## Purpose
                Experienced mining engineers are often asked to review another site's or a consultant's mine plan before an investment or reserve statement. A structured review that checks the model, design parameters, schedule realism, costs and modifying factors, and writes findings by severity, protects the owner from optimistic plans and builds your standing as a senior reviewer.

                ## Milestones
                1. Review scope, documents and timeline agreed with the client or owner.
                2. Model, design, schedule and cost assumptions checked against a checklist.
                3. Findings rated by severity with evidence.
                4. The review report issued and discussed with the plan authors.

                ## Notes
                Declare any conflict of interest before accepting, and only sign findings you have checked yourself.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A peer review report with findings rated by severity is issued to the owner and discussed with the plan authors."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree scope, documents and timeline with the plan owner"
                - "Check model, design, schedule and costs against a review checklist"
                - "Rate each finding by severity with supporting evidence"
                - "Issue the report and hold a call with the plan authors"
---

# Mining and Minerals Engineering

This area is for engineers working in open pits, quarries and processing plants, from a graduate on their first rotation to the person who signs the life-of-mine plan. It starts with foundations (your role, a site fact sheet, the legal register, induction, data, survey, units and the principal hazards), moves through the routines that keep a mine honest, then the core skills in reserves, pit design, blasting, rock mechanics, processing and mine economics, the decisions about fleets, cut-off grades and recovery, the dated events of the mining year, the situations mining engineers meet across Guyana, Jamaica, Suriname and the wider region, and finally specialist work such as tailings breach studies and geometallurgy.

What repeats is a daily production and grade control check, twice-weekly slope monitoring, weekly short-term plans, haul road walks and blast reviews, monthly reconciliation, dewatering, tailings, fleet, survey and safety reviews, quarterly hazard and drill reviews, and the yearly life-of-mine, wet season and closure updates. The Risk register, Operational checklist, Metrics log and Development plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
