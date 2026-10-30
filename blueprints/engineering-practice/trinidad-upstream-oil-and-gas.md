---
id: engineering-practice.trinidad-upstream-oil-and-gas
name: Trinidad Upstream Oil and Gas
description: "A working kit for upstream engineers in Trinidad and Tobago: licences and approvals, legacy wells, field routines, gas delivery, onshore and offshore decisions, campaigns and the specialist work of mature basins."
category: business
version: 1.0.0
tags: [engineering-practice, trinidad-upstream-oil-and-gas, engineer, trinidad-and-tobago, upstream, onshore-fields, gas-development, mature-assets]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - operational-checklist
    - vendor
    - meeting-notes
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Trinidad Upstream Oil and Gas
          description: "Engineering in Trinidad and Tobago's upstream sector: onshore and offshore fields, gas developments, production operations, ageing assets and work with operators and contractors."
          projects:
            - name: Trinidad upstream sector map for your role
              description: |-
                ## Purpose
                New starters in the sector often know their own field well and the rest of the chain hardly at all, which makes it hard to see why a gas buyer, a partner or the Ministry is asking for something. A one-page map of the basins, the main producing areas, the licence types, the gas buyers and where your asset sits in it gives every later conversation a frame.

                ## Milestones
                1. A map or sketch showing the onshore south, the Gulf of Paria, the east coast marine area, the north coast and the deepwater blocks, with your asset marked.
                2. The main oil and gas routes to market noted: the onshore refinery and terminal, the gas transmission system, Point Lisas and the LNG trains at Point Fortin.
                3. The licence and contract types in use listed in a sentence each.
                4. Your own company's place in the chain written in three lines: what it produces, who it sells to and who regulates it.

                ## Notes
                Use published Ministry and industry maps rather than an internal one, so the page can be shared with new starters and contractors.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page sector map with your asset marked, the routes to market and the licence types, reviewed by a senior colleague."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the Ministry's current licence and block map"
                - "Mark your asset and its nearest neighbours on the map"
                - "Trace where your oil and gas physically go after the sales point"
                - "Ask a senior colleague to check the page for gaps"
            - name: Licence and contract terms for your block or lease
              description: |-
                ## Purpose
                An exploration and production licence, a production sharing contract and an onshore lease or farmout each set different work obligations, reporting duties and approval routes, and engineers are expected to know which ones bind their work. Summarising the terms that touch engineering, in plain words and with clause references, stops surprises when a minimum work programme or relinquishment date comes round.

                ## Milestones
                1. The governing document for your block or lease identified, with its type, parties and dates.
                2. Engineering obligations listed: work programme commitments, reporting, approvals, abandonment and environmental duties.
                3. Key dates extracted into a short calendar, including any relinquishment or renewal points.
                4. The summary checked by the contracts or legal team and stored with the licence file.

                ## Notes
                This is a reading aid, not a legal interpretation. Where a clause is unclear, write the question down and send it to the contracts team rather than guessing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page summary of the engineering obligations and key dates in your licence or lease, checked by the contracts team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the contracts team for the current licence or lease and its amendments"
                - "List every clause that creates an engineering or reporting obligation"
                - "Put the key dates into a short obligations calendar"
                - "Send the summary to the contracts team for a check"
            - name: Regulator and agency contact register
              description: |-
                ## Purpose
                Field work in Trinidad and Tobago can need the Ministry of Energy and Energy Industries, the Environmental Management Authority, the Occupational Safety and Health Agency, the Coast Guard or maritime authorities, the fire service, the disaster management office and the regional corporation, sometimes in the same week. A register of who handles what, with the right office and the usual lead time, saves days on every approval and makes an emergency call faster.

                ## Milestones
                1. Each agency your asset deals with listed with the matters it handles for you.
                2. The office, role or inbox to contact for each matter recorded from official sources.
                3. Typical lead times noted for approvals your team requests often.
                4. The register shared with the operations and HSE leads.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared register listing every agency your asset deals with, the matters each handles, the contact route and the usual lead time."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the approvals and notifications your asset made in the last year"
                - "Match each one to the agency and office that handled it"
                - "Add the usual lead time from the last few requests"
                - "Recheck every contact route in the register against official sources @recurring(yearly)"
            - name: Field history file for an ageing Trinidad field
              description: |-
                ## Purpose
                Many of the onshore and Gulf of Paria fields have produced for decades under several owners, and the reasons behind old decisions are scattered across reports nobody has opened in years. A field history file with the discovery, the development phases, past floods and workovers, owners and known problems saves new engineers from repeating failed ideas and points to the ones worth another look.

                ## Milestones
                1. A timeline of the field from discovery to now, with owners and major development phases.
                2. Production history summarised by decade, with the events that changed it.
                3. Past secondary recovery, sand control and lift trials listed with their outcome.
                4. A short list of open questions and ideas the history suggests are worth revisiting.

                ## Notes
                Ask the longest-serving operators and field supervisors for an hour each. Much of the useful history is in people, not reports.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A field history file with a dated timeline, production by decade, past trials and their results, and a list of ideas to revisit."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the field reports and studies held in the library or archive"
                - "Interview two long-serving operators about the field's past problems"
                - "Build the dated timeline of owners, phases and trials"
                - "Ask the agent to draft a summary of past trials from your notes"
            - name: Legacy well status inventory and orphan well flags
              description: |-
                ## Purpose
                Thousands of old wells dot onshore Trinidad, some drilled before modern records, and a well with an unknown status near a house or a watercourse is a real hazard and a real liability. Building an inventory of every well on your lease with its last known status, location check and any sign of leaks lets the team rank which ones need inspection, repair or abandonment first.

                ## Milestones
                1. Every well on the lease listed with its identifier, coordinates and last recorded status.
                2. Wells with missing or conflicting records flagged for a site check.
                3. Site checks completed for flagged wells near homes, roads or watercourses.
                4. A ranked list of wells needing inspection, repair or abandonment, with the reason for each.

                ## Notes
                Start from the **Risk register** template to rank the wells. Never approach a leaking or unknown wellhead without the site's gas testing and permit rules.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory covering every well on the lease, with flagged wells site-checked and a ranked action list agreed with the asset lead."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Export the well list and statuses from the well database"
                - "Compare it with the Ministry's records and old lease maps"
                - "Flag wells with missing, conflicting or no status"
                - "Plan site checks for flagged wells near homes and watercourses"
            - name: Wellhead to sales point flow map
              description: |-
                ## Purpose
                Oil and gas from one well can pass through flowlines, a gathering station, separation, storage, a trunk line and a fiscal meter before it is sold, and every engineering change touches part of that chain. Drawing the whole route for your asset, with the meters and the owners of each section, makes deferment, allocation and leak questions far quicker to answer.

                ## Milestones
                1. A schematic from wells to sales points showing stations, lines, tanks and meters.
                2. Ownership and operating responsibility marked for each section.
                3. Allocation and fiscal meters labelled with their purpose.
                4. The schematic checked against the latest P&IDs and walked down at one station.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checked schematic of the full route from wells to sales points, with meters and ownership marked, filed in document control."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the current P&IDs and pipeline route drawings"
                - "Sketch the route from wells to the sales points on one page"
                - "Mark each meter and who owns each section"
                - "Walk down one gathering station to check the sketch"
            - name: Operator and contractor interface map
              description: |-
                ## Purpose
                Upstream work here usually involves an operator, partners, a leaseholder or the state company, and a ring of service contractors, and confusion over who approves, who supervises and who pays is where many delays and incidents start. An interface map that names each party's role on your asset, and the single contact for each, turns that confusion into a reference.

                ## Milestones
                1. Every party on the asset listed with its contractual role.
                2. Approval, supervision and HSE responsibilities assigned for the common work types.
                3. One named contact recorded for each party.
                4. The map agreed with the operations lead and shared with contractors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page interface map showing each party's role, approvals and HSE responsibilities, agreed with the operations lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every company that worked on the asset in the last six months"
                - "Note who approved, supervised and paid for each type of job"
                - "Mark gaps where two parties think the other is responsible"
                - "Review the map with the operations lead"
            - name: Site emergency arrangements and stop-work briefing
              description: |-
                ## Purpose
                Before your first field visit you should know the muster points, the alarm signals, the nearest medical help, whether hydrogen sulphide is present and how to call a stop to unsafe work. Writing those down for each site you visit, and confirming them with the site supervisor, is the minimum anyone should carry into a station or onto a rig.

                ## Milestones
                1. Muster points, alarms and emergency numbers recorded for each site you visit.
                2. Known hazards noted, including any hydrogen sulphide, shallow gas or flooding risk.
                3. The stop-work authority procedure read and its steps written in your own words.
                4. The briefing confirmed with each site supervisor on your first visit.

                ## Notes
                Stop-work authority applies to everyone on site, including visiting engineers. Using it is never a disciplinary matter in a well-run company.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A briefing sheet for every site you visit, with emergency arrangements, hazards and the stop-work steps, confirmed by the site supervisor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask HSE for the emergency response plan for each site you will visit"
                - "Write the muster points, alarms and numbers on one sheet"
                - "Read the stop-work authority procedure and summarise its steps"
                - "Reconfirm the briefing sheet with each site supervisor @recurring(yearly)"
            - name: South Trinidad field access and security plan
              description: |-
                ## Purpose
                Southern fields often sit among villages, forest and farmland, with roads that flood in the wet season, landowners who need notice and a risk of theft from wellsites and flowlines. A plan covering routes, access agreements, check-in times and what to do when a road is blocked keeps field visits safe and keeps relations with neighbours intact.

                ## Milestones
                1. Approved routes to each station and wellsite cluster recorded, with wet season alternatives.
                2. Access agreements and landowner contacts listed for sites crossing private land.
                3. A check-in and travel rule agreed for lone or late visits.
                4. Security incidents of the last year reviewed and any no-go times noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A field access plan with routes, wet season alternatives, landowner contacts and a travel check-in rule, agreed with security."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask security for the travel and check-in rules for the field"
                - "Map the usual routes and their wet season alternatives"
                - "List the landowners and access agreements for each site"
                - "Review the routes against recent security reports @recurring(quarterly)"
            - name: Morning production and downtime call
              description: |-
                ## Purpose
                Every shut-in well, tripped compressor or full tank costs barrels or gas deliveries, and the morning call is where the field decides what to fix first. Running it with a fixed agenda, a deferment list in barrels and standard cubic feet, and owners for each item turns the call from a chat into a daily priority list.

                ## Milestones
                1. A fixed agenda covering safety, production against target, deferment and today's priorities.
                2. A deferment list kept daily with volume, cause and owner for each item.
                3. A weekly summary of the top deferment causes shared with the asset lead.
                4. Repeat causes from the summary raised as improvement items.

                ## Notes
                Start from the **Metrics log** template to trend daily deferment by cause.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight weeks, the morning call runs to the agenda with a daily deferment list and a weekly cause summary sent to the asset lead."
                cadence: rolling
              tasks:
                - "Agree the morning call agenda with the field supervisor"
                - "Update the deferment list with volume, cause and owner @recurring(daily)"
                - "Send the weekly top deferment causes to the asset lead @recurring(weekly:fri)"
                - "Raise any cause that repeats three weeks running as an improvement item"
            - name: Monthly lease and farmout reporting to the leaseholder
              description: |-
                ## Purpose
                Lease operators and farmout partners on onshore and Gulf of Paria acreage report production, well work and spending to the leaseholder each month, and those reports decide whether the work programme is seen as met. A routine that pulls the numbers from the same sources every month, explains variances and files the submission makes the year-end review a formality instead of a dispute.

                ## Milestones
                1. The leaseholder's reporting format and due date confirmed in writing.
                2. Production, well work and spend pulled from the agreed sources each month.
                3. Variances against the work programme explained in a sentence each.
                4. Every report filed with its working sheet and acknowledgement.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reports submitted to the leaseholder on time, each with variances explained and an acknowledgement filed."
                cadence: rolling
              tasks:
                - "Confirm the leaseholder's current report format and due date"
                - "Prepare and check the monthly leaseholder report @recurring(monthly:8)"
                - "Explain each variance against the work programme in one sentence"
                - "File the report, working sheet and acknowledgement together"
            - name: Gas delivery nominations and shortfall log
              description: |-
                ## Purpose
                Gas producers here sell under contracts with daily delivery commitments, and downstream plants and the LNG trains plan their rates around what the upstream nominates. Checking nominations against field capacity each week, and logging every shortfall with its cause, protects the contract position and gives the commercial team facts rather than estimates.

                ## Milestones
                1. The delivery commitments and nomination rules for your gas sales summarised.
                2. A weekly comparison of nominated, delivered and available gas.
                3. Every shortfall logged with date, volume, cause and notice given.
                4. A quarterly view of shortfall causes shared with the commercial team.

                ## Notes
                Contract interpretation belongs to the commercial and legal teams. The engineer's job is accurate volumes, causes and timing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shortfall log kept for a full quarter, with every shortfall's volume, cause and notice recorded and a summary sent to the commercial team."
                cadence: rolling
              tasks:
                - "Ask the commercial team for the delivery commitments and nomination rules"
                - "Compare nominated, delivered and available gas for the week @recurring(weekly:mon)"
                - "Log each shortfall with its volume, cause and notice given"
                - "Send the quarter's shortfall causes to the commercial team"
            - name: Fiscal and allocation meter verification schedule
              description: |-
                ## Purpose
                Royalties, partner shares and gas sales all depend on meters that drift, foul and get recalibrated on different cycles, and a meter that slips past its verification date weakens every number reported from it. A schedule for each fiscal and allocation meter, with witnessed checks recorded, keeps the measurement defensible to the Ministry and partners.

                ## Milestones
                1. Every fiscal and allocation meter listed with its type, standard and verification interval.
                2. A calendar of verification and calibration dates for the year.
                3. Each check recorded with results, witnesses and any correction applied.
                4. Overdue or failed meters raised and closed with a dated action.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fiscal and allocation meter has a verification record within its interval, with failures closed by a dated action."
                cadence: rolling
              tasks:
                - "List every fiscal and allocation meter with its verification interval"
                - "Check the meter calendar for checks due this month @recurring(monthly:15)"
                - "File each witnessed check with results and any correction applied"
                - "Review meter intervals with the measurement contractor @recurring(yearly)"
            - name: Flowline leak patrol and illegal tapping log
              description: |-
                ## Purpose
                Ageing onshore flowlines corrode, and some lines have also been tapped illegally, which causes spills, fires and lost production. A weekly patrol of the riskiest routes, with every leak, repair and suspected tap logged by location, shows where lines need replacing and where security needs to focus.

                ## Milestones
                1. The highest-risk flowline routes chosen for weekly patrol.
                2. A log of leaks, repairs and suspected taps with coordinates and photos.
                3. Suspected taps reported to security and the police through the agreed route.
                4. A quarterly map of incidents used to rank lines for replacement.

                ## Notes
                Patrol crews should not confront anyone at a suspected tap. Record, withdraw and report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly patrols logged for a quarter, with every leak and suspected tap recorded by location and reported through the agreed route."
                cadence: rolling
              tasks:
                - "Choose the flowline routes with the most leaks in the last year"
                - "Review the patrol log and new incidents with the field crew @recurring(weekly:thu)"
                - "Report suspected taps to security the same day they are found"
                - "Map the quarter's incidents for the replacement ranking"
            - name: Oil spill readiness and drill programme
              description: |-
                ## Purpose
                Spills into a river, a mangrove or the Gulf of Paria are the incidents with the widest public impact an upstream operator can have, and the first hours decide how far one spreads. Keeping the site's spill plan aligned with the national contingency plan, the response equipment checked and the team drilled each quarter means people know their role before it matters.

                ## Milestones
                1. The site spill plan read and its tiers, roles and call-out list confirmed as current.
                2. Response equipment inventoried and its condition checked.
                3. A quarterly drill held, from tabletop to equipment deployment, with lessons recorded.
                4. Actions from each drill closed before the next one.

                ## Notes
                Notification duties to the Ministry and other agencies are set out in the plan and your licence. Check the current requirements rather than relying on memory.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four drills held in a year, each with a lessons record, and every drill action closed before the next drill."
                cadence: rolling
              tasks:
                - "Read the site spill plan and check the call-out list is current"
                - "Inventory the spill response equipment and note any shortfalls"
                - "Run a spill drill and record the lessons @recurring(quarterly)"
                - "Review the spill plan against the national contingency plan @recurring(yearly)"
            - name: Wet season and storm readiness for field facilities
              description: |-
                ## Purpose
                Trinidad's wet season brings flooded access roads, landslips over flowlines, overtopped bunds and power losses, and the hurricane season overlaps it. A yearly readiness check before the rains, covering drains, bunds, tank levels, generators and access, prevents the spills and shutdowns that follow the first heavy downpour.

                ## Milestones
                1. A readiness checklist covering drains, bunds, tank freeboard, generators, slopes and access.
                2. Every station and wellsite cluster inspected against the checklist before the rains.
                3. Defects ranked and the critical ones fixed before the wet season starts.
                4. A post-season review of what flooded, failed or worked.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year, every station is inspected before the wet season, critical defects are closed, and a post-season review is filed."
                cadence: cyclic
              tasks:
                - "Draft the wet season readiness checklist with the field supervisor"
                - "Inspect every station against the readiness checklist @recurring(yearly)"
                - "Fix the critical defects found before the rains start"
                - "Write a short post-season review of floods and failures"
            - name: Monthly contractor work order and performance review
              description: |-
                ## Purpose
                Upstream assets here rely on contractors for well servicing, vacuum trucks, civil work and maintenance, and loose work orders lead to disputed invoices and repeat jobs. Reviewing the month's work orders against what was done, how safely and at what cost gives the engineer grounds to praise, correct or replace a contractor.

                ## Milestones
                1. Every contractor work order for the month matched to a completion record.
                2. Safety observations and incidents recorded against each contractor.
                3. Cost against estimate checked for the larger jobs.
                4. A short monthly scorecard discussed with each main contractor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scorecards issued to the main contractors, each based on matched work orders, safety records and cost."
                cadence: rolling
              tasks:
                - "Agree the scorecard measures with procurement and HSE"
                - "Match the month's work orders to completion records @recurring(monthly:22)"
                - "Note safety observations and incidents against each contractor"
                - "Discuss the scorecard with each main contractor's supervisor"
            - name: Legacy wellhead integrity rounds
              description: |-
                ## Purpose
                Old onshore wells on beam pumps or flowing naturally develop stuffing box leaks, casing vent flows and corroded wellheads, and a neighbour's complaint about oil or gas smell is often the first warning. Monthly rounds on the wells you are responsible for, with a short checklist and photographs, catch these before they become spills or gas releases.

                ## Milestones
                1. A wellhead checklist covering leaks, vent flows, corrosion, signage and fencing.
                2. A monthly round schedule covering every active and suspended well over the cycle.
                3. Findings logged with photographs and a repair owner.
                4. Community complaints linked to the well record and closed with a reply.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every well on the round is checked within the cycle for six months, with findings photographed and repair owners assigned."
                cadence: rolling
              tasks:
                - "Write the wellhead checklist with the field supervisor"
                - "Review the month's wellhead findings and open repairs @recurring(monthly:12)"
                - "Link each community complaint to the well record"
                - "Escalate any wellhead gas release under the site's emergency rules"
            - name: Environmental clearance conditions tracker
              description: |-
                ## Purpose
                A Certificate of Environmental Clearance for a well, pipeline or facility comes with conditions on monitoring, reporting and restoration that outlast the project team that won it. A tracker listing every condition, its owner and evidence of compliance lets the asset answer the authority's questions and avoid breaches nobody remembered.

                ## Milestones
                1. Every clearance held by the asset listed with its conditions.
                2. An owner and an evidence type assigned to each condition.
                3. Due reports and monitoring dates put in a calendar.
                4. Evidence filed for each condition met, and gaps raised with HSE.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker with every clearance condition, an owner and filed evidence, reviewed each quarter with no condition overdue."
                cadence: rolling
              tasks:
                - "Collect every environmental clearance the asset holds"
                - "List each condition with an owner and the evidence it needs"
                - "Review the tracker with HSE for overdue conditions @recurring(quarterly)"
                - "File the evidence for each condition met"
            - name: Produced water handling and disposal records
              description: |-
                ## Purpose
                Mature fields here produce far more water than oil, and the water must be treated, injected or disposed of within permit limits that the regulator can inspect. Keeping monthly records of volumes, quality results and disposal routes for each station shows compliance and highlights where water handling is limiting production.

                ## Milestones
                1. Produced water volumes recorded monthly by station.
                2. Quality results from the agreed sampling points filed against permit limits.
                3. Disposal and injection routes listed with their capacity.
                4. Stations near capacity flagged to the asset lead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of produced water volumes, quality results and disposal routes recorded by station, with capacity limits flagged."
                cadence: rolling
              tasks:
                - "List the sampling points and permit limits for each station"
                - "Record the month's water volumes and quality results @recurring(monthly:26)"
                - "Compare disposal volumes with each route's capacity"
                - "Flag stations where water handling limits oil rates"
            - name: Trinidad petroleum geology essentials
              description: |-
                ## Purpose
                Engineers make better well and facility decisions when they understand why Trinidad's reservoirs behave as they do: the stacked deltaic sands of the Columbus Basin, the faulted and folded onshore Southern Basin, overpressure, sand production and the mud volcanoes and shallow gas found in parts of the south. A short study programme with the asset geologist gives you enough to ask the right questions.

                ## Milestones
                1. The main basins and their reservoir types described in a page of your own notes.
                2. A cross-section through your field explained to you by the asset geologist.
                3. Shallow hazards in your area, such as mud volcanoes or shallow gas, listed with where they occur.
                4. Three implications for your engineering work written down.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A page of notes on the basins, a field cross-section explained by the geologist, and three engineering implications recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book an hour with the asset geologist to walk through a cross-section"
                - "Read a published overview of Trinidad's petroleum basins"
                - "List the shallow hazards recorded near your wells"
                - "Write three ways the geology changes your engineering choices"
            - name: Ministry approvals for well and facility work
              description: |-
                ## Purpose
                Drilling, workovers, recompletions, abandonments, new flowlines and facility changes each need the right notice or approval from the Ministry, and starting work without it can stop a programme. A checklist of which work types need what, with the forms, supporting documents and lead times, means applications go in complete and early.

                ## Milestones
                1. Work types needing Ministry notice or approval listed from the regulations and your licence.
                2. The forms and supporting documents for each work type gathered.
                3. Usual lead times recorded from recent applications.
                4. The checklist reviewed by the regulatory affairs lead.

                ## Notes
                Regulations and forms change. Check the current version with the Ministry or your regulatory affairs team before each application.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approvals checklist covering every work type your asset does, with forms, documents and lead times, signed off by regulatory affairs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask regulatory affairs for the last ten applications the asset made"
                - "List the work types that needed notice or approval"
                - "Note the forms, documents and lead time for each"
                - "Have the regulatory affairs lead review the checklist"
            - name: Mature onshore field operations with beam pumps and gas lift
              description: |-
                ## Purpose
                Most onshore wells in the south are on beam pumps or gas lift, with high water cuts, sand and paraffin, and many engineers arrive having studied lift only in theory. Learning to read dynamometer cards, fluid levels and gas lift surveys on real wells, alongside the operators who run them, turns that theory into skill you use every week.

                ## Milestones
                1. Five dynamometer cards interpreted and checked with an experienced lift engineer.
                2. Fluid level surveys read for the same wells and pump fillage estimated.
                3. One gas lift well's survey reviewed and its injection point identified.
                4. A list of the common lift failures in your field with their usual causes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five dynamometer cards and one gas lift survey interpreted and checked by an experienced lift engineer, with a failure list written."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the lift engineer for five recent dynamometer cards"
                - "Interpret each card and compare with the lift engineer's reading"
                - "Go to a wellsite with the operator for a fluid level shot"
                - "Review one gas lift survey and mark the injection point"
            - name: Columbus Basin gas development concepts
              description: |-
                ## Purpose
                East coast gas fields are developed with a mix of manned hubs, unmanned minimum facility platforms and subsea tie-backs, with compression added as pressures fall, and the choice drives cost and recovery for decades. Studying how recent fields were developed, and why, gives you the vocabulary to take part in concept selection rather than only receiving its results.

                ## Milestones
                1. Three published east coast developments summarised with their concept and the reasons given.
                2. The trade-offs between platform, minimum facility and subsea tie-back written in a table.
                3. The role of compression and hub capacity in late field life explained in your notes.
                4. A short discussion held with a facilities or concept engineer to test your understanding.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table of three development concepts with trade-offs, discussed with a concept engineer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find published papers on three east coast gas developments"
                - "Summarise each concept and the reasons given for it"
                - "Build a table of platform, minimum facility and subsea trade-offs"
                - "Book a discussion with a concept engineer to test the table"
            - name: High-CO2 gas corrosion and materials awareness
              description: |-
                ## Purpose
                Some Trinidad gas carries significant carbon dioxide, and wet CO2 corrodes carbon steel fast, while any hydrogen sulphide brings cracking risks and toxic exposure. Understanding the corrosion mechanisms, the materials and inhibitor choices in use and the limits of your facilities stops engineers proposing changes that quietly shorten equipment life.

                ## Milestones
                1. The CO2 and any H2S content of your streams recorded from current analyses.
                2. The corrosion mechanisms that apply described in your own notes.
                3. Materials and inhibition used on your asset listed by system.
                4. Two current operating limits linked to corrosion identified with the integrity engineer.

                ## Notes
                Material selection for sour service follows the ISO 15156 family of standards. Leave the selection to the materials engineer; your job is to know when to ask.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes recording stream compositions, the applicable mechanisms, materials by system and two corrosion limits, checked by the integrity engineer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get the latest gas analyses for each stream on the asset"
                - "Read an introduction to CO2 and H2S corrosion in production systems"
                - "List the materials and inhibitors used by system"
                - "Ask the integrity engineer which limits are set by corrosion"
            - name: Gas sales contract obligations for engineers
              description: |-
                ## Purpose
                Delivery pressure, gas quality, daily and annual quantities and notice periods in a gas sales contract all turn into engineering limits at the plant gate. Learning which contract terms your facilities must meet, from the commercial team, helps you see why a quality excursion or a planned shutdown date matters so much downstream.

                ## Milestones
                1. The engineering-relevant terms of your gas sales listed: quantities, pressure, quality and notice.
                2. Each term matched to the facility or measurement that controls it.
                3. Past excursions against those terms reviewed with their consequences.
                4. Questions raised with the commercial team and answers recorded.

                ## Notes
                Ask for a summary of the terms, not the full contract, unless your role needs it. Contract interpretation stays with commercial and legal.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of the gas sales terms that bind your facilities, each matched to its controlling equipment, reviewed by the commercial team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the commercial team for a summary of the gas sales terms"
                - "Match each term to the equipment or meter that controls it"
                - "Review the last year's quality or pressure excursions"
                - "Record the commercial team's answers to your questions"
            - name: Reading old well records and paper logs
              description: |-
                ## Purpose
                Well files from the 1940s to the 1980s hold hand-drawn completion sketches, old electric logs, imperial units and drilling reports in a style few engineers now read. Learning to read them accurately matters for reactivations and abandonments, where a wrong casing depth or a missed squeeze job can make a job unsafe or expensive.

                ## Milestones
                1. Three old well files read in full with a senior engineer.
                2. The common abbreviations, units and log types listed in a glossary.
                3. One old completion reconstructed as a modern wellbore diagram.
                4. Known traps, such as unrecorded workovers or depth reference changes, written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of old record terms and one reconstructed wellbore diagram, checked by a senior engineer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull three well files from before 1980 from the archive"
                - "Read them with a senior engineer and note unfamiliar terms"
                - "Redraw one old completion as a modern wellbore diagram"
                - "List the traps that caught past reactivation jobs"
            - name: Gathering station debottlenecking review
              description: |-
                ## Purpose
                Many gathering stations were built for a field's peak and modified piecemeal since, so a separator, a tank, a pump or a water line can quietly cap production. Reviewing one station's capacity against current rates, item by item, finds the cheap fixes and the cases where wells are being held back for no good reason.

                ## Milestones
                1. Current oil, water and gas rates through the station recorded.
                2. The rated capacity of each major item listed against those rates.
                3. The limiting items ranked by production held back.
                4. Two or three fixes costed and proposed through management of change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A capacity table for one station with its limiting items ranked, and at least two costed fixes raised through management of change."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose the station with the most deferment logged"
                - "Record the current rates through each major item"
                - "Compare each item's rating with today's rates"
                - "Cost the top two fixes and raise a change request"
            - name: Lease block idle well reactivation programme
              description: |-
                ## Purpose
                Onshore leases and farmout blocks often carry dozens of idle wells, and reactivating the right ones is usually the cheapest new production available. A programme that screens idle wells on records, integrity and expected rate, then sequences them for the workover unit, turns a long list into a year of planned work.

                ## Milestones
                1. All idle wells on the block screened on records, integrity and rate potential.
                2. A ranked shortlist with expected rate, cost and risk for each.
                3. A sequenced programme matched to workover unit availability.
                4. Results of each reactivation compared with the forecast.

                ## Notes
                Wells that fail screening on integrity belong on the abandonment list, not back in the queue.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A ranked and sequenced reactivation programme approved by the asset lead, with actual results compared with forecasts for each well done."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Export the list of idle wells on the block"
                - "Screen each well on records, integrity and rate potential"
                - "Sequence the shortlist against workover unit availability"
                - "Compare reactivated well results with their forecasts @recurring(monthly:18)"
            - name: Workover rig and service contractor selection
              description: |-
                ## Purpose
                Workover programmes live or die on the rig and service crews, and local contractors differ in equipment age, crew competence, safety record and how they price standby time. Comparing them on the same criteria before the programme starts, rather than taking whoever is free, avoids the delays and incidents that come from a poor match.

                ## Milestones
                1. Scope and technical requirements for the programme written.
                2. Three or more contractors compared on equipment, crew, safety record and rates.
                3. Site visits or rig inspections done for the shortlisted contractors.
                4. A recommendation recorded with the reasons and passed to procurement.

                ## Notes
                Start from the **Vendor** template to keep each contractor's record, certificates and inspection notes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation for the workover contractor, based on a scored comparison of at least three and a rig inspection, passed to procurement."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the technical requirements for the workover programme"
                - "Score three contractors on equipment, crew, safety and rates"
                - "Inspect the shortlisted rigs with an HSE adviser"
                - "Send the recommendation and scores to procurement"
            - name: Grid power versus gas engines for artificial lift
              description: |-
                ## Purpose
                Beam pumps and other lift equipment on onshore fields run on grid electricity where lines reach and on gas engines where they do not, and the choice affects running cost, downtime, emissions and theft risk. Comparing the two for a cluster of wells, with real outage data and fuel gas costs, gives a clear decision rather than habit.

                ## Milestones
                1. A cluster of wells chosen with current power source, uptime and running cost.
                2. Grid connection cost and outage history obtained from the utility or past records.
                3. Gas engine fuel, maintenance and downtime costs compiled.
                4. A comparison and recommendation recorded with the assumptions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on lift power for one well cluster, with costs, uptime and assumptions set out for both options."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a well cluster where the power source is in question"
                - "Pull a year of downtime by cause for those wells"
                - "Get a grid connection estimate from the utility"
                - "Write the comparison and recommendation with assumptions"
            - name: Compression decision for a declining gas field
              description: |-
                ## Purpose
                As east coast and onshore gas fields deplete, wellhead pressure falls towards the pipeline's inlet pressure and production drops off unless compression is added or reconfigured. Framing the decision early, with the forecast, the options and the delivery commitments, gives the team time to build compression before deliveries fall short.

                ## Milestones
                1. The pressure and rate forecast for the field with the date wells reach the inlet pressure.
                2. Options listed: new compression, relocated units, lower inlet pressure or doing nothing.
                3. Each option assessed for recovery, cost, schedule and delivery commitments.
                4. A recommendation and decision record agreed with the asset team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record for field compression with forecast, options and the agreed choice, dated before the forecast pressure crossover."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Get the latest pressure and rate forecast from the reservoir engineer"
                - "Find the date wells reach the pipeline inlet pressure"
                - "List the compression options and their rough costs"
                - "Present the options to the asset team for a decision"
            - name: Paper well records digitisation
              description: |-
                ## Purpose
                Many well files on older Trinidad fields exist only on paper, in a single cabinet, and fade, flood or go missing. Scanning and indexing them in batches, starting with the wells most likely to be worked on, protects the history and saves hours on every proposal.

                ## Milestones
                1. The paper files counted and ranked by how soon each well is likely to be worked on.
                2. A naming and indexing standard agreed with document control.
                3. Files scanned in weekly batches and checked for legibility.
                4. The scanned files linked to the well database.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The top-ranked well files scanned, indexed to the agreed standard and linked from the well database."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Count the paper well files and note their condition"
                - "Agree the file naming standard with document control"
                - "Scan and index the next batch of twenty files @recurring(weekly:wed)"
                - "Link each scanned file to its well record"
            - name: Ageing flowline replacement priority list
              description: |-
                ## Purpose
                Replacing every old flowline at once is never affordable, but replacing them in the order of leak history, consequence and production carried is. A ranked list built from patrol logs, inspection data and the lines' surroundings gives the budget case and the work order sequence for the next two years.

                ## Milestones
                1. Every flowline listed with age, material, leak history and what it carries.
                2. Consequence noted for each line: homes, rivers, roads or mangroves nearby.
                3. A ranked list combining likelihood and consequence.
                4. The top lines costed and put forward for the next budget.

                ## Notes
                Start from the **Risk register** template to keep likelihood and consequence scores consistent.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked flowline replacement list with likelihood and consequence scores, and the top lines costed in the budget submission."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Combine patrol logs and inspection data by flowline"
                - "Note homes, rivers and roads along each route"
                - "Score and rank each line by likelihood and consequence"
                - "Cost the top five lines for the budget"
            - name: Bid round technical application package
              description: |-
                ## Purpose
                When the Ministry opens a competitive bid round for onshore, shallow water or deepwater blocks, the technical part of an application needs a geological case, a work programme and evidence of capability in a fixed window. Preparing the engineering inputs to a plan, with owners and a review date, avoids a rushed submission that undersells the company.

                ## Milestones
                1. The bid round documents read and the technical requirements listed.
                2. A responsibility table naming owners for each technical section.
                3. Draft work programme with wells, facilities and estimated cost.
                4. The technical package reviewed and handed to the bid lead before the internal deadline.

                ## Notes
                Check the current bid round rules on the Ministry's website. Rounds differ in terms and evaluation.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A reviewed technical package covering every requirement in the bid round documents, handed to the bid lead by the internal deadline."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Download the bid round documents and list the technical requirements"
                - "Assign an owner to each technical section"
                - "Draft the work programme with wells, facilities and cost"
                - "Hold a review of the package before the internal deadline"
            - name: Farmout or lease work programme submission
              description: |-
                ## Purpose
                A lease operator or farmout partner usually submits a yearly or multi-year work programme of wells, workovers and facility repairs that the leaseholder approves and later checks against. A programme built from the reactivation list, integrity priorities and realistic rig capacity is easier to approve and easier to deliver.

                ## Milestones
                1. The required format and minimum obligations confirmed with the leaseholder.
                2. Candidate jobs drawn from the reactivation, integrity and abandonment lists.
                3. A programme with dates, costs and expected production, matched to rig capacity.
                4. The submission sent and the approval or comments recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A work programme meeting the leaseholder's format and minimum obligations, submitted on time with the response recorded."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Confirm the format and minimum obligations with the leaseholder"
                - "Pull candidate jobs from the reactivation and integrity lists"
                - "Match the programme to realistic rig and crew capacity"
                - "Ask the agent to draft the programme summary from your job list"
            - name: Legacy well abandonment campaign
              description: |-
                ## Purpose
                Leaking or idle legacy wells near communities need permanent abandonment, and a campaign that plugs several wells in sequence costs far less per well than one-off jobs. Planning the campaign with records checks, Ministry approvals, contractor scope and community notice keeps it safe and lets the asset close liabilities that have sat for years.

                ## Milestones
                1. Wells chosen from the legacy inventory, each with a records review and site check.
                2. Abandonment designs prepared to the applicable standard and approved by the Ministry.
                3. Contractor scope and sequence agreed, with community notice given.
                4. Each well plugged, surface restored and the abandonment report filed.

                ## Notes
                Old wells often hold surprises: missing casing, junk in the hole or gas behind pipe. Build contingency time and cost into each well.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every well in the campaign plugged to an approved design, the surface restored and an abandonment report filed with the Ministry."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Choose the campaign wells from the legacy inventory"
                - "Review each well's records and site check findings"
                - "Submit the abandonment designs for Ministry approval"
                - "Give notice to nearby residents before work starts"
            - name: Onshore drilling campaign readiness
              description: |-
                ## Purpose
                Even a short onshore drilling campaign brings a rig, camps, trucks and dozens of contractors into a quiet rural area, and the weeks before spud decide how smoothly it runs. A readiness plan covering approvals, location builds, water and waste, the community and the rig acceptance means the first well starts on the planned day.

                ## Milestones
                1. Approvals and clearances in hand for every planned location.
                2. Locations built and access roads checked for heavy loads and wet weather.
                3. Water supply, waste handling and community notices arranged.
                4. Rig accepted after inspection, with a pre-spud meeting held for each well.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first well spuds on the planned date with all approvals, locations, logistics and rig acceptance recorded as complete."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "List the approvals and clearances each location needs"
                - "Walk each location and access road with the civil contractor"
                - "Arrange water supply and waste handling for the campaign"
                - "Book the rig acceptance inspection before the first spud"
            - name: Ministry inspection visit preparation
              description: |-
                ## Purpose
                Ministry inspectors visit fields and facilities to check measurement, safety, abandonment and environmental compliance, and a visit can come with short notice. Preparing a visit pack and walking the route in advance means the inspector sees an organised site and the team can answer questions with records rather than recollection.

                ## Milestones
                1. The scope of the visit confirmed and the likely areas of interest listed.
                2. A visit pack with permits, meter records, integrity records and open actions.
                3. The site route walked and housekeeping issues fixed.
                4. Findings recorded after the visit with owners and dates.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An inspection visit completed with a prepared pack, the route walked beforehand, and every finding assigned an owner and date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the visit scope with regulatory affairs"
                - "Assemble the visit pack of permits and records"
                - "Walk the route and fix housekeeping issues"
                - "Log each finding with an owner and a date"
            - name: Joint venture operating committee meeting preparation
              description: |-
                ## Purpose
                Partners in a Trinidad licence or PSC meet at operating committee meetings to approve work programmes, budgets and major decisions, and the engineering slides often carry the debate. Preparing the technical sections early, with the numbers reconciled and the asks clear, gets decisions made in the room instead of deferred.

                ## Milestones
                1. The agenda and decisions sought confirmed with the meeting secretary.
                2. Technical slides drafted with production, work programme progress and cost.
                3. Numbers reconciled with finance and the monthly reports.
                4. Decisions and actions recorded after the meeting with owners.

                ## Notes
                Start from the **Meeting notes** template to record decisions and actions.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Technical sections delivered for an operating committee meeting with reconciled numbers, and decisions recorded with owners afterwards."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the meeting secretary for the agenda and decisions sought"
                - "Draft the production and work programme slides"
                - "Reconcile the numbers with finance before circulation"
                - "Record the decisions and actions with owners"
            - name: Community briefing before field works near homes
              description: |-
                ## Purpose
                Drilling, abandonments, flowline replacements and seismic work in the south often happen within sight of homes, schools and farms, and residents who hear about work first from the trucks have reason to be angry. A short briefing with the community relations team, before work starts, explains the noise, traffic and timing and gives people a named contact.

                ## Milestones
                1. The affected households, schools and businesses identified for the work.
                2. A plain-language summary of what, when and how long agreed with community relations.
                3. A briefing or house-to-house notice delivered before mobilisation.
                4. Questions and complaints logged and answered during the work.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A briefing delivered to affected residents before mobilisation, with a named contact given and every complaint logged and answered."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map the homes and schools near the planned works"
                - "Write a plain-language summary of the work with community relations"
                - "Deliver the briefing or notices before mobilisation"
                - "Answer each complaint logged during the work"
            - name: Graduate first year in a Trinidad upstream company
              description: |-
                ## Purpose
                Graduates from local and overseas universities join upstream operators and service companies expecting design work and often get field rotations, reporting and data cleaning first. A first-year plan that sets the rotations, a mentor, site time and three solid technical outputs turns that year into a record that counts towards professional registration.

                ## Milestones
                1. A 30, 60 and 90 day plan agreed with your supervisor.
                2. A mentor named and monthly conversations booked.
                3. Field rotations completed at a station, a rig or workover and an office team.
                4. Three technical outputs finished and logged as competence evidence.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Keep evidence in the format your national engineering board uses for registration.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed first-year plan with three rotations, a mentor record and three logged technical outputs accepted as competence evidence."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draft a 30, 60 and 90 day plan with your supervisor"
                - "Ask a senior engineer to be your mentor for the year"
                - "Book your first field rotation at a station or rig"
                - "Log each technical output as competence evidence"
            - name: Engineering at a small onshore lease operator
              description: |-
                ## Purpose
                At a small lease operator one engineer can be production, workover, facilities, reporting and HSE support at once, with a small budget and a leaseholder watching the numbers. A monthly checklist of the duties that must not slip, and a clear list of what to hand to contractors, keeps that load manageable.

                ## Milestones
                1. Every recurring duty listed with its due date and the risk if it slips.
                2. Tasks that can go to contractors or the leaseholder identified and agreed.
                3. A monthly checklist used for six months.
                4. A short case to the owner for help where the load is unsafe or unsustainable.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly duty checklist used for six months, with contracted tasks agreed and any unsafe workload raised with the owner in writing."
                cadence: rolling
              tasks:
                - "List every duty you carry with its due date"
                - "Mark the duties a contractor could take on"
                - "Work through the monthly duty checklist @recurring(monthly:5)"
                - "Raise any unsafe workload with the owner in writing"
            - name: Contractor engineer working across several operators
              description: |-
                ## Purpose
                Working at a service or engineering contractor, you may work for three operators in a month, each with its own permit system, document standards and approval chain. Keeping a short profile of each client's rules, contacts and expectations prevents mistakes that cost the contractor its reputation and you your credibility.

                ## Milestones
                1. A profile for each client covering permits, standards, approvals and key contacts.
                2. Each client's site inductions and certificates tracked with expiry dates.
                3. Lessons from each job added to the client profile.
                4. Profiles reviewed with your manager before each new job.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A current profile for each client with rules, contacts, inductions and lessons, reviewed before every new job."
                cadence: rolling
              tasks:
                - "Start a profile for each client you worked for this year"
                - "Record each client's permit system and approval chain"
                - "Track induction and certificate expiry dates per client"
                - "Add lessons to the profile after each job"
            - name: Returning home to work in Trinidad energy
              description: |-
                ## Purpose
                Trinbagonian engineers who studied or worked in the UK, US, Canada or elsewhere often want to come home, but the market, pay, registration and networks have changed since they left. Planning the move with a clear view of roles, registration, salary norms and contacts makes the return a career step rather than a gamble.

                ## Milestones
                1. Target employers and roles listed, with the skills each is hiring for.
                2. Registration with the national engineering board checked and started if needed.
                3. Salary and benefit norms gathered from people currently working there.
                4. Five conversations held with engineers in the sector before deciding.

                ## Notes
                Ask about pensions, medical cover and relocation support, which vary widely between operators and contractors.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision recorded on returning, based on a target list, registration status, salary information and five sector conversations."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the upstream employers and roles that fit your experience"
                - "Check the registration requirements of the national engineering board"
                - "Book five conversations with engineers working in the sector"
                - "Write down your decision and the reasons for it"
            - name: Settling in as an engineer new to Trinidad
              description: |-
                ## Purpose
                Engineers posted to Trinidad from abroad meet a mature, tightly networked sector with its own vocabulary, regulators, holidays and ways of doing business, and a few early missteps can cost trust that takes a long time to rebuild. A settling-in plan that covers the sector, local working norms and the people who matter helps you contribute faster.

                ## Milestones
                1. The sector map, regulator register and interface map read in the first fortnight.
                2. Local working norms discussed with a local colleague, including public holidays and Carnival season planning.
                3. Introductions made to key people in operations, regulatory affairs and partners.
                4. A three-month review held with your manager on what you have learnt.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-month review held with your manager, with the sector documents read and introductions to key people recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the sector map and interface map for your asset"
                - "Ask a local colleague about working norms and holidays"
                - "List the people you need to meet in the first month"
                - "Book a three-month review with your manager"
            - name: CO2 enhanced oil recovery screening for an onshore field
              description: |-
                ## Purpose
                Trinidad has a history of CO2 and thermal floods in its southern fields and a supply of CO2 from the ammonia plants at Point Lisas, which keeps CO2 EOR on the table for mature onshore reservoirs. A screening study on one field, covering reservoir fit, CO2 supply and transport, well integrity and economics, tells the asset whether a pilot is worth proposing.

                ## Milestones
                1. Past CO2 and thermal projects in Trinidad reviewed from published papers and field files.
                2. The candidate reservoir screened against published CO2 EOR criteria.
                3. CO2 supply, transport and well integrity issues listed with rough costs.
                4. A screening note with a go or no-go for a pilot proposal.

                ## Notes
                Old wells in the flood area are the usual weak point. Integrity of every penetration must be assessed before any injection.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A screening note on one reservoir with criteria, supply, integrity and cost covered, ending in a recorded pilot decision."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Find published papers on past Trinidad CO2 and thermal floods"
                - "Screen the candidate reservoir against CO2 EOR criteria"
                - "List every well penetrating the candidate reservoir"
                - "Write the screening note with a pilot recommendation"
            - name: Cross-border reservoir unitisation data preparation
              description: |-
                ## Purpose
                Some fields straddle the maritime boundary with Venezuela and are developed under a bilateral unitisation framework, where each side's share rests on agreed technical data. Engineers on such a field prepare and defend reservoir, production and measurement data that may be audited by the other side and both governments.

                ## Milestones
                1. The unitisation agreement's technical data requirements listed with the commercial team.
                2. A controlled data set prepared with sources, versions and quality checks.
                3. Measurement and allocation methods documented for joint review.
                4. Questions from the other party logged and answered with references.

                ## Notes
                Treat every number as one you may need to defend in a formal redetermination. Version control and source records matter as much as the analysis.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A version-controlled technical data set with documented sources and methods, and every query from the other party answered with references."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List the technical data the unitisation agreement requires"
                - "Set up version control for the unit data set"
                - "Document the measurement and allocation methods"
                - "Log each query from the other party with its reply"
            - name: Deepwater exploration well readiness review
              description: |-
                ## Purpose
                Trinidad's deepwater blocks bring water depths, metocean conditions, shallow hazards and logistics well beyond the shallow-water experience of most local teams. An independent readiness review before spud, covering well design, rig and equipment, emergency response and the supply chain, tests whether the plan is as ready as the schedule says.

                ## Milestones
                1. Review terms and reviewers agreed, with at least one reviewer from outside the well team.
                2. Well design, shallow hazard survey and rig acceptance records reviewed.
                3. Emergency response, well control and spill arrangements checked against the risk.
                4. Findings ranked and closed or accepted by the well manager before spud.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A readiness review report with ranked findings, each closed or formally accepted by the well manager before spud."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree the review terms and reviewers with the well manager"
                - "Review the well design and shallow hazard survey"
                - "Check well control and spill arrangements against the risk"
                - "Rank the findings and agree closure before spud"
            - name: Shallow-water platform decommissioning plan
              description: |-
                ## Purpose
                Platforms in the Gulf of Paria and older east coast fields are reaching the end of their lives, and decommissioning them safely needs years of planning for well plugging, cleaning, removal and seabed restoration. An early plan with an inventory, options, cost range and regulatory route stops the liability from growing while production winds down.

                ## Milestones
                1. An inventory of wells, structures, pipelines and hazardous materials for the facility.
                2. Removal and plugging options listed with their regulatory and environmental implications.
                3. A cost range and schedule prepared for the preferred option.
                4. The plan reviewed with the Ministry and partners and the next steps agreed.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A decommissioning plan with inventory, options, cost range and schedule, reviewed with the Ministry and partners."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Compile the inventory of wells, structures and pipelines"
                - "Ask regulatory affairs for the current decommissioning requirements"
                - "Compare removal options and their environmental implications"
                - "Present the preferred option and cost range to partners"
---

# Trinidad Upstream Oil and Gas

This area is for engineers working in Trinidad and Tobago's upstream sector, from the century-old onshore fields of the south to the gas platforms of the east coast and the deepwater blocks beyond them, whether you work for an operator, a lease operator, the state oil company or a service contractor. It starts with the foundations (the sector map, your licence terms, the agencies, the field history, legacy wells and the flow from wellhead to sales point), moves through the field routines that keep production and gas deliveries honest, then the local knowledge of geology, approvals and mature field operations, the decisions on reactivation, lift power, compression and flowlines, the dated campaigns and submissions, the situations engineers in this sector meet, and finally specialist work such as CO2 floods, cross-border unitisation and decommissioning.

What repeats is a daily production and downtime call, weekly gas nomination checks and flowline patrols, monthly leaseholder reports, meter verification, wellhead integrity rounds, contractor reviews and produced water records, quarterly spill drills and environmental condition checks, and a yearly wet season readiness review. The Metrics log, Risk register, Operational checklist, Vendor, Meeting notes and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
