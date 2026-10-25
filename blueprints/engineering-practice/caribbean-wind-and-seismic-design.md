---
id: engineering-practice.caribbean-wind-and-seismic-design
name: Caribbean Wind and Seismic Design
description: "A written hazard basis for every Caribbean job, the right code edition for each island, wind, seismic and flood loads you can defend, detailing that survives a hurricane or an earthquake, and checks after the event."
category: business
version: 1.0.0
tags: [engineering-practice, caribbean-wind-and-seismic-design, engineer, hurricane-design, seismic-design, wind-loads, storm-surge, building-codes]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - reading-queue
    - operational-checklist
    - remediation-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Caribbean Wind and Seismic Design
          description: "Designing for Caribbean hazards: hurricane wind loads, seismic zones, storm surge and flooding, regional codes and checking designs against the right edition."
          projects:
            - name: Written hazard design basis for each Caribbean job
              description: |-
                ## Purpose
                Wind speed, seismic zone, flood level and risk category are the four numbers that size most of a Caribbean structure, and on many jobs they live only in one engineer's spreadsheet. A short hazard design basis, agreed with the client and the architect before any analysis, fixes the code and edition, the hazard values with their sources and the performance expected after a design storm or earthquake.

                ## Milestones
                1. A hazard design basis naming the governing code and edition, the design wind speed, seismic parameters, flood elevation and risk category.
                2. Each hazard value traced to a map, a clause or a site study, not just stated.
                3. The expected post-event performance written in plain words, such as shelter use or reopening within days.
                4. Client and architect agreement to the basis recorded before the first calculation is issued.
                5. A revision table so any later change of use or site is captured against the document.

                ## Notes
                Keep the hazard basis as the first sheet of the calculation file. When a client later asks to turn a warehouse into a shelter, the revision table shows exactly which loads move.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hazard design basis for the current job lists code, edition, wind, seismic and flood values with sources and risk category, agreed before analysis."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Open a hazard design basis for your current job using a one-page outline"
                - "Record the design wind speed, seismic values and flood level with their sources"
                - "State the risk category and the post-event performance the client expects"
                - "Send the basis to the client and architect asking for written agreement"
            - name: Governing building code and edition for each island
              description: |-
                ## Purpose
                Caribbean territories do not share one code: some have adopted an IBC-based national code, others still reference older CUBiC-derived documents, and some simply require ASCE 7 or a Eurocode approach with local annexes. Knowing which document and which edition the building authority on each island will accept prevents a design being rejected at permit or, worse, approved against a superseded hazard map.

                ## Milestones
                1. A table of every island you work on, naming the building authority and the code it currently enforces.
                2. The referenced load standard and its edition noted for each code, including any local amendments.
                3. Wind and seismic maps or tables the authority expects identified and filed.
                4. Uncertain entries confirmed by email or phone with the authority and the reply saved.
                5. The table dated and stored where the whole team uses it.

                ## Notes
                Where the authority has no clear position, write down which code you chose and why, and get the client to accept it in writing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated table names the enforced code, load standard and edition for every island you work on, with uncertain entries confirmed by the authority."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every island where you have designed or bid in the last three years"
                - "Find the enforced building code and edition for each on the authority's website"
                - "Email the building authority where the edition or local amendments are unclear"
                - "Save the table in the shared design standards folder with today's date"
            - name: Regional wind, seismic and flood hazard map library
              description: |-
                ## Purpose
                Hazard maps for the region come from many places: the code annexes, older regional mitigation projects, university seismic research units, national meteorological services and flood mapping by planning agencies. Collecting the current versions in one controlled folder, each with its source and date, stops engineers pulling a map from an old report or a search result.

                ## Milestones
                1. A controlled folder with the wind speed maps, seismic hazard maps and flood maps for each island you work on.
                2. Each map labelled with its source, edition and the code it is tied to.
                3. Superseded maps moved to an archive folder rather than deleted.
                4. A short index sheet listing which map to use for which code and island.

                ## Notes
                A good default is to treat any map without a clear source and date as unusable until you find the original.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A controlled hazard map folder exists with an index naming the source and edition of every wind, seismic and flood map in use."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather every hazard map currently saved in project folders into one place"
                - "Label each map with its source, edition and linked code"
                - "Archive superseded maps and write the index sheet"
                - "Check the map library against the latest code and agency releases @recurring(yearly)"
            - name: Wind exposure and topography assessment of the site
              description: |-
                ## Purpose
                On hilly islands the topographic effect of a ridge or escarpment can add more to wind pressure than the difference between two map speeds, and the exposure category changes as the coastline or the neighbourhood changes. A site assessment with photographs, contours and upwind terrain fixes exposure and topographic factors before the calculation starts.

                ## Milestones
                1. Upwind terrain described for each principal wind direction, with photographs or aerial images.
                2. Exposure category chosen for each direction with the reason written down.
                3. Hill, ridge or escarpment geometry measured from contours and the topographic factor calculated.
                4. Any future change to the surroundings, such as cleared land or a new seafront, noted against the choice.

                ## Notes
                When the site is on a ridge above the sea, check the open-water exposure and the topographic factor together. Many lightly damaged houses and badly damaged neighbours sit only a few hundred metres apart for this reason.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A site wind assessment records exposure category per direction and a calculated topographic factor, with photographs and contour sections."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull aerial images and contours for the site and two kilometres upwind"
                - "Photograph upwind terrain in each principal direction on the site visit"
                - "Calculate the topographic factor from measured hill geometry"
                - "Write the exposure choice and reasons into the hazard design basis"
            - name: Seismic site class from the ground investigation
              description: |-
                ## Purpose
                Soft coastal clays and reclaimed land under many Caribbean towns can amplify ground shaking well beyond what the rock map suggests. Agreeing the site class with the geotechnical engineer, from borehole and shear wave data rather than assumption, sets the spectral values every seismic calculation depends on.

                ## Milestones
                1. Ground investigation scope agreed to include the depth and tests needed for site classification.
                2. Site class assigned from measured data with the geotechnical engineer's written reasoning.
                3. Sites needing a site-specific response analysis, such as liquefiable or very soft soils, identified.
                4. Design spectral values calculated for the agreed site class and entered in the hazard basis.

                ## Notes
                Using a default site class because the investigation was too shallow is a common shortcut. Ask for enough depth at the start; it is cheaper than redesigning a frame.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The site class is assigned from measured ground data, confirmed in writing by the geotechnical engineer and used for the design spectrum."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the geotechnical engineer whether the investigation reaches classification depth"
                - "Request shear wave velocity or standard penetration data for the profile"
                - "Record the agreed site class and the reasoning in the hazard basis"
                - "Calculate the design spectral values for the agreed site class"
            - name: Design flood and storm surge elevation for a coastal site
              description: |-
                ## Purpose
                Storm surge and wave run-up, not wind, cause much of the damage on low-lying Caribbean coasts, and many sites have no published flood map at all. Setting a design flood elevation from the best available surge, rainfall flooding and sea level data, with freeboard agreed with the client, decides floor levels, foundation type and where equipment can sit.

                ## Milestones
                1. Available flood and surge data for the site collected, with gaps listed.
                2. A design flood elevation chosen, including wave effects and a stated freeboard.
                3. Lowest floor, critical equipment and electrical levels set above the design flood elevation.
                4. Foundation scour and wave loading flagged where the site is in a coastal high hazard zone.
                5. The elevation and its sources recorded in the hazard design basis.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A design flood elevation with sources, wave allowance and freeboard is recorded, and floor and equipment levels are set above it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the planning or drainage agency for any flood or surge mapping of the site"
                - "Find historical high water marks from past storms near the site"
                - "Agree freeboard above the design flood with the client in writing"
                - "Mark the design flood elevation on the site sections"
            - name: Risk category for shelters, hospitals and schools
              description: |-
                ## Purpose
                Schools and community centres in the region are routinely used as hurricane shelters, and a building designed as an ordinary occupancy can be expected to hold hundreds of people through a major storm. Settling the risk category early, with the client and the disaster management office, sets the importance factors and the post-event function the design must deliver.

                ## Milestones
                1. The intended use, including any shelter or emergency role, confirmed with the client.
                2. The national disaster office asked whether the building is on, or proposed for, the shelter list.
                3. A risk category chosen with the code clause and importance factors stated.
                4. Any shelter performance requirements, such as protected openings and backup power, added to the brief.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The risk category and importance factors are recorded in the hazard basis, with the shelter or emergency role confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the client whether the building will be used as a shelter or emergency facility"
                - "Contact the disaster management office about the shelter list"
                - "Record the risk category and importance factors in the hazard basis"
                - "Add shelter requirements to the architectural brief"
            - name: Verified wind and seismic load spreadsheet
              description: |-
                ## Purpose
                Most design offices run wind and seismic loads through an in-house spreadsheet that nobody has checked since the edition changed. Verifying it against the published worked examples for the current load standard, and locking the formula cells, makes every later job trustworthy and gives a reviewer something to accept.

                ## Milestones
                1. The spreadsheet's code edition and every hard-coded coefficient listed.
                2. At least three published worked examples reproduced within rounding.
                3. Discrepancies fixed and the changes logged in a version table.
                4. Formula cells locked and the verified version stored as the only copy in use.

                ## Notes
                Keep the worked example comparisons in a tab inside the spreadsheet so a reviewer can see the evidence without asking.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The office load spreadsheet reproduces three published worked examples within rounding and carries a version table and locked formulas."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the office wind and seismic spreadsheet and note its code edition"
                - "Reproduce a published worked example for main wind force pressures"
                - "Reproduce a published worked example for equivalent lateral seismic force"
                - "Re-verify the spreadsheet when a new load standard edition is adopted @recurring(yearly)"
            - name: Delegated design of cladding, glazing and roofing for wind
              description: |-
                ## Purpose
                Windows, curtain walls, metal roofing and their fixings are usually designed by the supplier, yet they are where most hurricane damage starts. Stating the design pressures zone by zone in the specification, and reviewing the supplier's calculations against them, closes the gap between the structural design and what actually gets installed.

                ## Milestones
                1. Components and cladding design pressures shown on a roof and elevation zone drawing.
                2. Specification clauses requiring supplier calculations, test evidence and fixing details.
                3. Every supplier submission reviewed against the zone pressures with comments returned.
                4. Approved fixing patterns marked on the drawings issued for construction.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Zone pressure drawings are issued, and every cladding, glazing and roofing submission has a recorded review against them before installation."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draw roof and wall pressure zones with design pressures for the current job"
                - "Add supplier calculation and test evidence clauses to the specification"
                - "Review open cladding and glazing submittals against the zone pressures @recurring(monthly:12)"
                - "Mark approved fixing patterns on the construction drawings"
            - name: Code edition and amendment watch across islands
              description: |-
                ## Purpose
                Building authorities adopt new editions, issue amendments and publish revised hazard maps with little notice, and a design started under one edition can be submitted under the next. A quarterly check of each authority and the referenced load standards keeps the code table honest and gives early warning of a change that affects work in progress.

                ## Milestones
                1. A named person responsible for checking each island's authority and the referenced standards.
                2. A dated log of each quarterly check, including where nothing changed.
                3. Active jobs affected by a change listed with a decision on transition.
                4. The office code table updated within a month of any adoption.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated quarterly code check log exists, and every change in the last year is reflected in the code table and in decisions on affected jobs."
                cadence: rolling
              tasks:
                - "Name the person who checks each island's building authority"
                - "Check authority sites and standards bodies for new editions and amendments @recurring(quarterly)"
                - "List active jobs affected by any change and agree the transition"
                - "Hold a full review of the code table and hazard basis outline @recurring(yearly)"
            - name: Weekly wind and seismic calculation check register
              description: |-
                ## Purpose
                Lateral load calculations are where small input errors, such as the wrong exposure or a missed importance factor, quietly double or halve a design. A register of every hazard calculation, its checker and its status, reviewed weekly, makes sure nothing reaches a drawing unchecked.

                ## Milestones
                1. A register listing every wind and seismic calculation on active jobs with checker and status.
                2. Independent checks recorded with the checker's comments and the designer's responses.
                3. No drawing issued for construction while its lateral calculation is unchecked.
                4. Common errors found in checks summarised for the team each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lateral calculation on active jobs appears in the register with a checker, and none has reached a construction issue unchecked in the last quarter."
                cadence: rolling
              tasks:
                - "Set up a register of active wind and seismic calculations"
                - "Assign an independent checker to each unchecked calculation"
                - "Review the register and chase overdue checks with the team @recurring(weekly:fri)"
                - "Share a summary of recurring check errors with the team"
            - name: Hurricane season readiness review of active sites
              description: |-
                ## Purpose
                A building under construction is at its weakest in the hurricane season: roofs not yet tied down, formwork and scaffolding up, cranes without a storm procedure and loose materials everywhere. A yearly readiness review before the season, with each site's storm plan checked, turns a forecast into a set of known actions rather than a scramble.

                ## Milestones
                1. Every active site listed with its stage of construction during the coming season.
                2. Site storm plans reviewed for temporary works, cranes, scaffolding and loose materials.
                3. Partially complete roofs and walls checked for temporary bracing or tie-down needs.
                4. Risks and owners recorded for each site with a date for closing them.

                ## Notes
                Start from the **Risk register** template. Ask contractors for crane manufacturers' out-of-service wind guidance rather than assuming a crane can be left weathervaning.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before each season every active site has a reviewed storm plan and a risk register entry with named owners and closure dates."
                cadence: cyclic
              tasks:
                - "List active sites and their construction stage for the coming season"
                - "Ask each contractor for their current site storm plan"
                - "Review site storm plans and temporary works before the hurricane season @recurring(yearly)"
                - "Record each site's risks and owners in the risk register"
            - name: Monthly review of regional earthquake bulletins
              description: |-
                ## Purpose
                The Eastern Caribbean, Jamaica, Hispaniola and the northern Leewards all sit on active plate boundaries, and regional seismic research units publish felt reports, bulletins and revised hazard studies. Reading them monthly keeps you aware of swarms near your sites, of new studies that may move hazard values and of buildings that may need a look after a felt event.

                ## Milestones
                1. The regional seismic research bulletins and alerts you will follow identified and subscribed to.
                2. A short log of notable events near your sites, with magnitude, location and felt reports.
                3. Any event strong enough to warrant a check of your buildings flagged to the client.
                4. New hazard studies noted for the yearly map library review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly event log exists for the last six months, and any felt event near your buildings has a recorded decision on whether to inspect."
                cadence: rolling
              tasks:
                - "Subscribe to the regional seismic research unit's bulletins and alerts"
                - "Read the bulletins and log notable events near your sites @recurring(monthly:9)"
                - "Flag felt events near client buildings with a recommendation"
                - "Note new hazard studies for the map library review"
            - name: Impact rating and product approval file for openings and roofing
              description: |-
                ## Purpose
                Windows, doors, shutters and roof systems sold in the region carry a mix of test reports, product approvals and marketing claims, and approvals expire or change. A controlled file of current approvals and test reports for the products your designs specify lets you check a substitution quickly and reject one that has no evidence.

                ## Milestones
                1. A file of test reports and product approvals for each opening and roofing product you specify.
                2. Each record showing the design pressure, impact rating, test standard and expiry.
                3. A rule that substitutions need equal or better evidence, written into your specification.
                4. Expired or withdrawn approvals flagged and removed from standard specifications.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current product approval file covers every specified opening and roofing product, with expiry dates and no expired approval in use."
                cadence: rolling
              tasks:
                - "List every window, door, shutter and roof product in your standard specifications"
                - "Collect the test report or product approval for each listed product"
                - "Check approval expiry dates and withdraw expired products @recurring(quarterly)"
                - "Add a substitution evidence clause to the standard specification"
            - name: Post-season hurricane lessons learned log
              description: |-
                ## Purpose
                Every hurricane season leaves damage that teaches something specific: a roof sheet fixing that pulled through, a gable end that failed, an overhang that lifted, a ground floor that flooded. A log of what you and your peers observed, with photographs and the change it implies for your details, turns each season into better standard practice.

                ## Milestones
                1. Damage observations from the season collected with photographs, location and building type.
                2. Each observation linked to a cause, such as fixing, connection, opening or flooding.
                3. Changes to your standard details or specifications agreed and dated.
                4. A short note shared with colleagues or the local engineering association.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "After each season a dated lessons log exists with photographs, causes and at least one agreed change to standard details or specifications."
                cadence: cyclic
              tasks:
                - "Create a lessons log with columns for location, building type, damage and cause"
                - "Collect photographs from site visits and colleagues after any storm"
                - "Hold a lessons learned session at the end of the hurricane season @recurring(yearly)"
                - "Update the standard details affected by the season's lessons"
            - name: Roof anchorage and lateral detail hold point inspections
              description: |-
                ## Purpose
                Hurricane straps left out, roof screws at twice the specified spacing and missing confinement ties in columns are invisible once the ceiling and render go on. Hold point inspections of anchorage and lateral details, with photographs before they are covered, are the cheapest protection against a design failing in the first storm.

                ## Milestones
                1. Hold points for roof anchorage, ring beams, column ties and shear wall reinforcement in the inspection plan.
                2. A photograph record for each hold point before it is covered.
                3. Defects recorded with the corrective action and a re-inspection date.
                4. No ceiling or render closed over an anchorage detail without a signed release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every anchorage and lateral hold point on active sites has a photograph record and signed release before being covered."
                cadence: rolling
              tasks:
                - "Add anchorage and lateral detail hold points to each site inspection plan"
                - "Agree photograph requirements for each hold point with the contractor"
                - "Review hold point records and open defects across active sites @recurring(monthly:18)"
                - "Reinspect corrected defects before the covering trade starts"
            - name: Building authority query log for hazard design
              description: |-
                ## Purpose
                Plan reviewers often ask about wind speed sources, site class, shelter use or a non-standard analysis, and the replies drift into email threads nobody can find a year later. A log of every query and agreed answer by authority builds a record of what each one accepts and shortens the next submission.

                ## Milestones
                1. A log of authority queries on hazard design with date, job, question and answer.
                2. Answers that set a precedent marked for reuse on future submissions.
                3. Open queries chased until closed with a written reply.
                4. A short note per authority summarising what it typically asks for.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every hazard design query from an authority in the past year is logged with its answer, and no query is open more than a month without a chase."
                cadence: rolling
              tasks:
                - "Create the query log and enter queries from the last year"
                - "Chase open authority queries and record replies @recurring(monthly:24)"
                - "Mark precedent answers for reuse on future submissions"
                - "Write a one-paragraph summary of each authority's usual questions"
            - name: CPD plan in hurricane and earthquake engineering
              description: |-
                ## Purpose
                Wind and seismic design keep moving: new editions, new research on roof failures, new detailing guidance and lessons from each major event. A yearly CPD plan focused on hazard design, with hours logged monthly, keeps your registration record current and your practice up to date.

                ## Milestones
                1. A yearly CPD plan with hazard design topics, courses and reading.
                2. A reading queue of current guidance, post-event reports and papers.
                3. CPD hours logged monthly with evidence.
                4. The year's record reviewed against your registration body's requirement.

                ## Notes
                Start from the **Reading queue** template. Post-event reconnaissance reports from major Caribbean and Gulf storms and earthquakes are some of the most useful reading in this area.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A yearly hazard design CPD plan exists, hours are logged monthly with evidence, and the total meets your registration requirement."
                cadence: rolling
              tasks:
                - "Check your registration body's CPD requirement for the year"
                - "Build a reading queue of post-event reports and current guidance"
                - "Log CPD hours and evidence for the month @recurring(monthly:27)"
                - "Draft next year's hazard design CPD plan @recurring(yearly)"
            - name: Main wind force resisting system pressures by hand
              description: |-
                ## Purpose
                Software produces wind loads in seconds, but an engineer who cannot reproduce them by hand cannot spot the wrong exposure or a missing internal pressure case. Working one building fully through the directional procedure of the load standard builds the instinct to check every later output.

                ## Milestones
                1. Velocity pressure calculated by height for a real building with exposure and topography.
                2. External and internal pressure coefficients selected for each wind direction and case.
                3. Design pressures on walls and roof summed into storey shears and overturning.
                4. The hand result compared with the software output and any difference explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full hand calculation of main wind force pressures for one building agrees with the software output, or each difference is explained in writing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick a completed two to four storey building to calculate by hand"
                - "Calculate velocity pressure by height with exposure and topography"
                - "Select pressure coefficients for both internal pressure cases"
                - "Compare your storey shears with the software output"
            - name: Components and cladding pressures at roof edges and corners
              description: |-
                ## Purpose
                Roof corners and edges see suction several times the field value, which is why sheets and tiles peel from the edges inwards in a hurricane. Learning to zone a roof correctly, including overhangs, parapets and hip versus gable forms, is the single most useful skill for low-rise Caribbean buildings.

                ## Milestones
                1. Roof zones drawn for gable, hip and monoslope forms with the correct zone widths.
                2. Design pressures calculated for each zone including overhang effects.
                3. Fixing spacing for a typical metal roof derived from pull-through and pull-out capacities.
                4. A worked sheet saved as a reference for the team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A worked reference sheet shows zone layouts, pressures and fixing spacings for gable, hip and monoslope roofs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw the roof zones for a gable, a hip and a monoslope roof"
                - "Calculate zone pressures including the overhang cases"
                - "Derive metal roof fixing spacing for each zone from fixing capacities"
                - "Save the worked sheet in the team reference folder"
            - name: Equivalent lateral force seismic analysis of a regular frame
              description: |-
                ## Purpose
                The equivalent lateral force method still governs most low and mid-rise buildings in the region, and its inputs, such as response modification factor, period and redundancy, are where errors hide. Working one regular concrete frame through the method, including drift and P-delta checks, is the base for every more advanced seismic analysis.

                ## Milestones
                1. Seismic weight assembled with the correct share of imposed and partition loads.
                2. Period, seismic response coefficient and base shear calculated with the code limits.
                3. Storey forces distributed and accidental torsion included.
                4. Storey drifts and stability checked against code limits.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A complete equivalent lateral force calculation for one frame includes base shear, storey forces, torsion, drift and stability checks."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a regular reinforced concrete frame to analyse"
                - "Assemble the seismic weight floor by floor"
                - "Calculate base shear and distribute storey forces with torsion"
                - "Check storey drift and stability against code limits"
            - name: Response spectrum analysis for irregular buildings
              description: |-
                ## Purpose
                Hillside sites, podium and tower forms and open ground floors make many Caribbean buildings irregular, and the code then requires a dynamic analysis. Learning modal response spectrum analysis, including mode combination, scaling to the static base shear and reading the mode shapes, prevents trusting a model you cannot interpret.

                ## Milestones
                1. Irregularity types identified for a real building with the code consequence for each.
                2. A model with enough modes to capture the required mass participation.
                3. Results scaled to the code minimum base shear and combined correctly.
                4. Mode shapes and drifts reviewed for torsion and soft storey behaviour.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A response spectrum analysis of one irregular building reaches the required mass participation and is scaled to the code base shear."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the plan and vertical irregularities of an irregular building"
                - "Build the analysis model and check modal mass participation"
                - "Scale the dynamic base shear to the code minimum"
                - "Review mode shapes for torsion and soft storey behaviour"
            - name: Ductile detailing of reinforced concrete frames
              description: |-
                ## Purpose
                Earthquake damage in the region repeatedly shows the same faults: columns with widely spaced ties, beam bars anchored short at the joint and weak columns under strong beams. Learning the special and intermediate moment frame detailing rules, and checking your own drawings against them, is what lets a frame bend without collapsing.

                ## Milestones
                1. Confinement, lap location and anchorage rules summarised for the frame type you design.
                2. A strong column, weak beam check carried out on a real frame.
                3. Joint shear checked at a typical beam and column connection.
                4. Your standard column and beam details corrected where they fall short.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your standard frame details comply with the ductile detailing rules for the chosen frame type, with a strong column, weak beam and joint shear check on record."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Summarise confinement, lap and anchorage rules for your frame type"
                - "Run a strong column, weak beam check on a current frame"
                - "Check joint shear at a typical connection"
                - "Mark up your standard details where they fall short of the rules"
            - name: Confined and reinforced masonry for houses and small buildings
              description: |-
                ## Purpose
                Most Caribbean homes are hollow concrete block, and their earthquake and hurricane performance depends on filled and reinforced cores, ring beams and tie columns that are often skipped on site. Learning confined and reinforced masonry design and the simple rules that make block walls work lets you design and inspect the buildings most people actually live in.

                ## Milestones
                1. The design and prescriptive rules for reinforced block walls summarised for your code.
                2. Wall density and shear capacity checked for a typical two storey house.
                3. Ring beam, tie column and gable details drawn to the rules.
                4. A site inspection sheet for block wall reinforcement and grouting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A worked check of a two storey block house and a set of ring beam, tie column and gable details exist, with a matching site inspection sheet."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the reinforced and confined masonry rules in your code"
                - "Check wall density and shear for a typical two storey block house"
                - "Draw ring beam, tie column and gable end details"
                - "Write a site sheet for checking core filling and bar placement"
            - name: Continuous uplift load path in timber and steel roofs
              description: |-
                ## Purpose
                A roof only survives a hurricane if uplift travels unbroken from the sheet, through purlins, rafters and straps, into the ring beam and down to the foundation. Tracing and designing that path connection by connection, for both timber and light steel roofs, is the core of low-rise hurricane design in the region.

                ## Milestones
                1. Uplift forces calculated at each connection from roof sheet to foundation.
                2. Connector capacities chosen from manufacturers' data or calculated, with the weakest link identified.
                3. Strap and bolt embedment into ring beams detailed.
                4. A load path diagram added to the drawings for builders and inspectors.

                ## Notes
                Check the connector's rated capacity for the timber species and grade available locally, not the one in the catalogue example.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A load path diagram and calculation show uplift capacity at every connection from roof sheet to foundation, with the weakest link identified."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the roof load path from sheet to foundation for a current job"
                - "Calculate uplift at each connection along the path"
                - "Choose connectors and check embedment into the ring beam"
                - "Add the load path diagram to the construction drawings"
            - name: Wind-borne debris protection of openings
              description: |-
                ## Purpose
                Once a window or door breaks in a hurricane, internal pressure rises and the roof can be lifted from inside. Learning the debris region rules, impact test standards and the choice between impact-rated glazing and tested shutters lets you specify opening protection that matches the building's role.

                ## Milestones
                1. Debris region and opening protection requirements identified for your code and site.
                2. Impact test standards and missile levels understood and summarised.
                3. Options compared for a typical building: impact glazing, permanent shutters and removable panels.
                4. The design internal pressure case linked to the protection choice in the calculations.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short reference covers debris region rules, impact test standards and an opening protection comparison, and the internal pressure case matches the choice made."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check whether your site falls in a wind-borne debris region"
                - "Summarise the impact test standards and missile levels"
                - "Compare impact glazing, permanent shutters and removable panels"
                - "Align the internal pressure case with the chosen protection"
            - name: Liquefaction and landslide screening with the geotechnical engineer
              description: |-
                ## Purpose
                Reclaimed waterfronts, river deltas and steep volcanic slopes put many Caribbean sites at risk of liquefaction or earthquake-triggered landslide. Learning to screen for these hazards and to ask the right questions of the geotechnical engineer prevents a well-detailed frame sitting on ground that fails underneath it.

                ## Milestones
                1. Screening criteria for liquefaction and seismic slope instability summarised.
                2. A current site screened with the borehole logs and groundwater level.
                3. Questions on mitigation, such as ground improvement or deep foundations, put to the geotechnical engineer.
                4. The screening result and any mitigation recorded in the hazard basis.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A screening record for the current site addresses liquefaction and slope instability, with the geotechnical engineer's response on mitigation filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the screening criteria for liquefaction and slope instability"
                - "Screen the current site using borehole logs and groundwater levels"
                - "Send mitigation questions to the geotechnical engineer"
                - "Record the screening result in the hazard basis"
            - name: Flood-resistant construction below the design flood level
              description: |-
                ## Purpose
                Ground floors in coastal and river flood zones need materials that survive soaking, walls that can break away without taking the structure, and services lifted out of reach. Learning flood-resistant construction lets you design the lower levels of coastal buildings so a surge is a clean-up, not a rebuild.

                ## Milestones
                1. Flood damage-resistant materials and their limits listed for your typical specifications.
                2. Breakaway wall or open foundation options sketched for a coastal high hazard site.
                3. Hydrostatic, hydrodynamic and wave loads calculated for a foundation.
                4. Electrical and mechanical equipment positions checked against the design flood elevation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example shows flood loads on a coastal foundation, a breakaway or open foundation option and services set above the design flood level."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List flood damage-resistant materials for your standard specifications"
                - "Sketch a breakaway wall option for a coastal site"
                - "Calculate hydrostatic, hydrodynamic and wave loads on a foundation"
                - "Check equipment positions against the design flood elevation"
            - name: Choosing between ASCE 7 and Eurocode approaches
              description: |-
                ## Purpose
                Clients from North America, Europe and the region bring different code expectations, and some islands accept either family. Comparing the two approaches for a typical building, in wind speed basis, load factors and seismic detailing, lets you choose deliberately and never mix clauses from both in one design.

                ## Milestones
                1. The differences in wind speed basis, return period and load factors summarised.
                2. Seismic design philosophies, behaviour factors and detailing classes compared.
                3. A typical building run under both approaches and the governing results compared.
                4. A written office position on when each family is used and how mixing is prevented.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written office position states when each code family is used, backed by a side-by-side comparison of one building under both."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Summarise the wind speed basis and load factors in both code families"
                - "Compare seismic behaviour factors and detailing classes"
                - "Run one typical building under both approaches"
                - "Write the office position on code family choice"
            - name: Hazard vulnerability ranking of a school or shelter portfolio
              description: |-
                ## Purpose
                Ministries, churches and private owners often hold dozens of older block and timber buildings used as schools and shelters, with no record of how they would perform. A rapid visual screening of each, ranked by wind and seismic vulnerability and occupancy, gives a defensible order for retrofit spending.

                ## Milestones
                1. A screening form covering roof type, anchorage, openings, wall system and irregularities.
                2. Every building in the portfolio screened and photographed.
                3. Buildings ranked by vulnerability and occupancy with the top priorities named.
                4. A retrofit plan for the highest ranked buildings with scope and order of magnitude cost.

                ## Notes
                Start from the **Remediation plan** template. Keep screening scores separate from detailed assessment: a screening ranks, it does not certify a building as safe.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every building in the portfolio has a screening record and rank, and a retrofit plan with scope and cost exists for the top priorities."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Draft a one-page screening form for roof, openings, walls and irregularities"
                - "Get the full list of portfolio buildings from the owner"
                - "Screen and photograph each building"
                - "Rank the buildings and draft the retrofit plan for the top priorities"
            - name: Roof form and pitch comparison for hurricane performance
              description: |-
                ## Purpose
                Hip roofs at a moderate pitch with short overhangs usually perform far better in hurricanes than low-pitch gables with long eaves, but architects and clients often favour the latter. A clear comparison of loads, connection demands and cost for the options on a real project lets you argue the case with numbers.

                ## Milestones
                1. Two or three roof forms and pitches defined for the same building plan.
                2. Zone pressures and uplift at connections compared for each option.
                3. Material and connector quantities and approximate cost compared.
                4. A recommendation recorded and discussed with the architect and client.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least two roof forms on one project shows pressures, connection demands and cost, with the chosen option recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define two or three roof options for the current building plan"
                - "Compare zone pressures and connection uplift for each option"
                - "Estimate connector and material quantities for each option"
                - "Present the comparison and recommendation to the architect"
            - name: Removing soft storeys and short columns at concept stage
              description: |-
                ## Purpose
                Open ground floor parking, shopfronts and partial height infill walls create soft storeys and short columns, two of the most common causes of earthquake collapse. Raising them at concept stage with the architect, when walls can still move, costs far less than strengthening a frame later.

                ## Milestones
                1. Concept drawings reviewed for soft storey, weak storey and short column conditions.
                2. Each condition explained to the architect with a sketch of the risk.
                3. Alternatives agreed, such as added walls, separation joints or full height infill.
                4. The agreed layout reflected in the structural model.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The concept design has a recorded review for soft storeys and short columns, with an agreed solution for each condition reflected in the model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark soft storey and short column conditions on the concept drawings"
                - "Sketch each risk for the architect in plain terms"
                - "Agree alternative layouts or separation joints with the architect"
                - "Update the structural model to the agreed layout"
            - name: Wind anchorage of rooftop solar and equipment
              description: |-
                ## Purpose
                Rooftop solar panels, water tanks, condensers and satellite dishes have become missiles in recent hurricanes, often tearing the roof they sat on. Designing their anchorage for wind, and checking the roof structure can take the concentrated reactions, closes a gap that falls between the mechanical, electrical and structural teams.

                ## Milestones
                1. All rooftop equipment listed with weight, size and location.
                2. Wind loads on each item calculated with the relevant rooftop provisions.
                3. Anchorage and the supporting roof structure checked for the reactions.
                4. Anchorage details added to the drawings and to the supplier's scope.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every rooftop item on the job has a wind anchorage calculation and detail, with roof structure checks for its reactions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the services engineers for a list of all rooftop equipment"
                - "Calculate wind loads on panels, tanks and condensers"
                - "Check anchorage and roof members for the reactions"
                - "Add anchorage details to the drawings and supplier scope"
            - name: Sea level rise allowance for a long-life coastal asset
              description: |-
                ## Purpose
                Ports, coastal roads, hotels and utilities built now will see higher sea levels and possibly stronger storms within their design life. Agreeing a sea level rise and climate allowance with the client, based on published projections and the asset's life, avoids a design that is already under-height in thirty years.

                ## Milestones
                1. The asset's design life and tolerance for flooding agreed with the client.
                2. Published sea level projections for the region gathered with their scenarios.
                3. An allowance chosen and added to the design flood elevation.
                4. Adaptation options, such as future raising, recorded for the operator.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded sea level rise allowance, tied to the asset's design life and a named projection scenario, is included in the design flood elevation."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree the asset's design life and flooding tolerance with the client"
                - "Gather published regional sea level projections and scenarios"
                - "Choose an allowance and add it to the design flood elevation"
                - "Record future adaptation options for the operator"
            - name: Seismic isolation or damping option study
              description: |-
                ## Purpose
                Hospitals, data centres and emergency operations centres in high seismic zones need to function straight after an earthquake, which a conventional ductile frame may not deliver. A feasibility study comparing base isolation, supplemental damping and a conventional design gives the client a clear choice on cost, performance and maintenance.

                ## Milestones
                1. Performance objectives agreed for the building after a design earthquake.
                2. Conventional, isolated and damped options defined at concept level.
                3. Cost, programme, maintenance and supply risks compared, including local availability of devices.
                4. A recommendation recorded with the client's decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A feasibility study compares conventional, isolated and damped options against agreed performance objectives, and the client's decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree post-earthquake performance objectives with the client"
                - "Define conventional, isolated and damped concept options"
                - "Compare cost, maintenance and device supply for each option"
                - "Present the study and record the client's decision"
            - name: Permit submission with wind and seismic calculations
              description: |-
                ## Purpose
                A permit package that leaves the reviewer guessing at wind speed source or site class comes back with queries and weeks of delay. Assembling the hazard basis, calculations, zone drawings and product approvals in the order the authority reviews them gets the structure approved in one round.

                ## Milestones
                1. The authority's checklist for structural submissions obtained and followed.
                2. Hazard basis, lateral calculations and zone drawings bound in one package.
                3. Product approvals for openings and roofing included or referenced.
                4. The package submitted and the reference number recorded.
                5. Queries answered and approval received.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The permit package with hazard basis, calculations, zone drawings and approvals is submitted, and approval is received with all queries closed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get the authority's structural submission checklist"
                - "Bind the hazard basis, calculations and zone drawings in review order"
                - "Add product approvals for openings and roofing to the package"
                - "Submit the package and record the reference number"
            - name: Site shutdown when a hurricane watch is issued
              description: |-
                ## Purpose
                The hours between a watch and a warning are when site decisions matter most, and they go badly when nobody agreed in advance who does what. A pre-agreed shutdown checklist for your sites, covering temporary bracing, cranes, scaffolding, loose materials and drainage, lets the team act quickly and leave the site safely.

                ## Milestones
                1. A shutdown checklist agreed with each contractor, with named responsibilities.
                2. Temporary bracing and tie-down needs identified for partially built structures.
                3. Contact list for the engineer, contractor and client confirmed.
                4. The checklist completed and signed off when a watch is issued.

                ## Notes
                Start from the **Operational checklist** template. Nobody should be on a roof or scaffold once the authorities issue a warning; the checklist exists so the work is done before then.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each active site has a signed shutdown checklist with named responsibilities, completed within the watch period of any storm."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a site shutdown checklist with each contractor"
                - "Identify temporary bracing for partially built walls and roofs"
                - "Confirm the emergency contact list for each site"
                - "Walk the site and sign off the checklist once a watch is issued"
            - name: Rapid damage assessment of buildings after a hurricane
              description: |-
                ## Purpose
                After a major storm, owners, insurers and authorities need fast, consistent answers on which buildings are safe to enter and which need urgent work. A prepared assessment method, form and kit, ready before the season, lets you deliver usable assessments in the first days rather than improvising.

                ## Milestones
                1. An assessment form for roof, walls, openings, foundations and flooding agreed.
                2. A kit ready with personal protective equipment, camera, tape, torch and printed forms.
                3. Assessments completed with photographs and a clear safe, restricted or unsafe outcome.
                4. Urgent temporary works recommendations issued to each owner.

                ## Notes
                Your own safety comes first: do not enter a building with a damaged roof or wall until the hazard is understood, and work in pairs.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "After a storm, each assessed building has a dated form with photographs, a safety outcome and any urgent recommendations issued to the owner."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Adapt a published post-windstorm assessment form for your clients"
                - "Pack the assessment kit and keep it in your vehicle through the season"
                - "Agree with clients the order in which their buildings will be assessed"
                - "Issue urgent temporary works recommendations after each assessment"
            - name: Post-earthquake safety evaluation and placarding
              description: |-
                ## Purpose
                After a damaging earthquake, the decision to reopen a school, clinic or office has to be made quickly, consistently and with aftershocks still coming. Training in a published post-earthquake evaluation method, with placards and a reporting route agreed with the authority, lets you contribute safely and credibly.

                ## Milestones
                1. Training completed in a recognised post-earthquake safety evaluation method.
                2. Your role and reporting route agreed with the building authority or disaster office.
                3. Forms, placards and a kit ready for deployment.
                4. Evaluations recorded with photographs, outcome and any restrictions on use.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Training in a recognised post-earthquake evaluation method is complete, your reporting route is agreed with the authority and a kit is ready."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find a recognised post-earthquake safety evaluation course"
                - "Ask the building authority how engineers are deployed after an earthquake"
                - "Prepare evaluation forms, placards and a kit"
                - "Practise a full evaluation on a damaged building case study"
            - name: Independent peer review of a critical facility design
              description: |-
                ## Purpose
                Hospitals, shelters and emergency operations centres are meant to work after the event that damages everything else, and a single design team can miss what a fresh eye sees. A structured peer review of hazard basis, lateral system, detailing, nonstructural anchorage and flood protection gives the owner confidence and the designer a record.

                ## Milestones
                1. Terms of reference agreed covering hazard basis, lateral system, detailing, nonstructural items and flooding.
                2. Design documents reviewed and comments issued in a numbered log.
                3. Designer responses received and each comment closed or escalated.
                4. A peer review statement issued to the owner.

                ## Notes
                Pay particular attention to nonstructural items, such as ceilings, medical gas, tanks and generators. Hospitals in the region have stayed standing and still closed because these failed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A peer review comment log for the critical facility is fully closed or escalated, and a signed peer review statement is issued to the owner."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree terms of reference for the peer review with the owner"
                - "Review the hazard basis and lateral system first"
                - "Issue comments in a numbered log with a response deadline"
                - "Close out responses and issue the peer review statement"
            - name: Graduate engineer's first hurricane and earthquake design
              description: |-
                ## Purpose
                Graduates often arrive knowing the theory of wind and seismic loads but have never taken a real Caribbean building from hazard basis to detailing. A guided first design, with a mentor checking each step and monthly reviews, builds the competence record needed for registration and the habits that last a career.

                ## Milestones
                1. A suitable small building chosen with a mentor named.
                2. Hazard basis, wind and seismic loads prepared and checked by the mentor.
                3. Lateral system and key details designed and marked up.
                4. A competence record entry written for each stage.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A graduate has completed a mentor-checked hazard design of one building, with a competence record entry for each stage."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose a small building and a mentor for the first design"
                - "Prepare the hazard design basis for the mentor's check"
                - "Review progress and markups with your mentor @recurring(monthly:15)"
                - "Write a competence record entry after each stage"
            - name: Engineer new to Caribbean hazard design
              description: |-
                ## Purpose
                Engineers arriving from countries with little hurricane or seismic exposure, or returning after years abroad, bring strong design skills but not the local hazards, codes, materials and construction habits. A short structured induction avoids the common mistakes, such as under-zoning roofs, missing topographic effects or trusting block wall details from elsewhere.

                ## Milestones
                1. The office code table, hazard map library and standard details read.
                2. Two completed local projects studied with the original designer.
                3. A site visit to a building under construction and one damaged by a past event.
                4. A short note of the differences from your previous practice, reviewed by a senior engineer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of differences from previous practice is reviewed by a senior engineer after two local projects and two site visits are completed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the office code table and hazard map library"
                - "Ask a senior engineer for two completed local projects to study"
                - "Visit a site under construction and a building damaged by a past storm"
                - "Write a note of differences from your previous practice"
            - name: Standard hazard details for a small practice designing houses
              description: |-
                ## Purpose
                Small practices and sole engineers design many of the region's houses on tight fees, and redrawing anchorage, ring beam and opening details on every job invites mistakes. A set of standard details and calculation sheets for typical houses, checked once and reviewed quarterly, keeps quality high without adding hours.

                ## Milestones
                1. Standard details for footings, block walls, ring beams, roof anchorage and openings drawn.
                2. Each detail backed by a calculation sheet for the hazard levels you commonly design for.
                3. Limits of use, such as wind speed, span and site class, written on each detail.
                4. A quarterly review date recorded on the detail set.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checked set of standard house details with calculation sheets and stated limits of use is in use, with a quarterly review recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the house details you redraw on every job"
                - "Draw standard footing, wall, ring beam and roof anchorage details"
                - "Write limits of use on each detail"
                - "Review the standard details against recent lessons and code changes @recurring(quarterly)"
            - name: Plan reviewer checking hazard design submissions
              description: |-
                ## Purpose
                Building authority engineers review many submissions with limited time, and the hazard basis is where an unchecked error can put a whole building at risk. A review checklist and a weekly queue rhythm let a plan reviewer check the critical items consistently and return clear, numbered queries.

                ## Milestones
                1. A review checklist covering code edition, wind speed, exposure, topography, site class, risk category and detailing.
                2. A query template with numbered comments and code references.
                3. A weekly review queue with target turnaround times.
                4. Common submission errors summarised and shared with local engineers.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every hazard design submission is reviewed against the checklist with numbered queries, and the queue meets its target turnaround."
                cadence: rolling
              tasks:
                - "Draft a hazard design review checklist for submissions"
                - "Write a numbered query template with code references"
                - "Clear the submission review queue against target times @recurring(weekly:wed)"
                - "Share a summary of common errors with the local engineering association"
            - name: Engineer on a post-disaster reconstruction programme
              description: |-
                ## Purpose
                After a major hurricane or earthquake, donor and government programmes rebuild hundreds of homes and public buildings quickly, often with stretched supervision and imported labour. An engineer on such a programme needs a clear build-back-better standard, a weekly site rhythm and a way to keep quality while the pressure is on speed.

                ## Milestones
                1. The programme's design standard and minimum hazard requirements written and agreed.
                2. Typical designs and details issued for the main building types.
                3. A weekly site inspection and progress rhythm with hold points.
                4. Quality issues and lessons recorded for the programme's final report.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The programme has an agreed hazard standard, typical designs and a weekly inspection record with hold points for every active site."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Agree the minimum hazard requirements with the programme manager"
                - "Issue typical designs for the main building types"
                - "Run site inspections and update the progress record @recurring(weekly:mon)"
                - "Log quality issues and lessons for the programme report"
            - name: Hazard due diligence for lenders and insurers
              description: |-
                ## Purpose
                Banks, insurers and investors buying or financing Caribbean property increasingly ask an engineer to judge its wind, seismic and flood exposure. A structured due diligence report, separating what was seen, what was assumed and what needs further study, gives them a usable answer without overstating certainty.

                ## Milestones
                1. Scope and reliance terms agreed in writing with the client.
                2. Site visit completed and available drawings and calculations reviewed.
                3. Wind, seismic and flood exposure and the key vulnerabilities described.
                4. A report issued with recommendations ranked by urgency and stated limits.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A due diligence report is issued with scope and reliance terms, observed vulnerabilities, ranked recommendations and stated limits."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Agree scope and reliance terms with the client in writing"
                - "Request existing drawings and calculations from the owner"
                - "Visit the site and record roof, openings, structure and flood exposure"
                - "Ask the agent to draft the report outline from your site notes"
            - name: Wind tunnel testing or CFD for a tall or unusual structure
              description: |-
                ## Purpose
                Tall hotels, long-span roofs, stadia and hillside towers fall outside the code's simple shapes, and the code itself may require testing. Scoping, procuring and interpreting a wind tunnel study, or a carefully validated CFD study, gives design pressures and accelerations the code cannot.

                ## Milestones
                1. The case for testing set out, with the code triggers and the questions it must answer.
                2. A testing laboratory or CFD consultant chosen and scope agreed.
                3. Test results reviewed against code values and any large differences explained.
                4. Design pressures, loads and occupant comfort results adopted into the design.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A wind study report is received, reviewed against code values and its pressures and loads are adopted into the design with differences explained."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the code triggers and questions that call for wind testing"
                - "Request scope and fee proposals from two wind consultants"
                - "Compare the test results with code values"
                - "Adopt the agreed pressures and loads into the design model"
            - name: Site-specific seismic hazard and response analysis
              description: |-
                ## Purpose
                Large or critical projects, and sites on very soft or liquefiable ground, need ground motions specific to the site rather than the code map. Commissioning and reviewing a site-specific probabilistic hazard and ground response study, with selected and scaled time histories, gives design values that reflect the real fault and soil setting.

                ## Milestones
                1. Need for a site-specific study confirmed against code requirements.
                2. A seismologist and geotechnical team appointed with an agreed scope.
                3. Hazard curves, spectra and time histories reviewed against code minimums.
                4. Design spectra adopted with a written review record.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A site-specific seismic study is reviewed against code minimums, and the adopted design spectra and time histories are recorded with a review note."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Check whether the code requires a site-specific study for this site"
                - "Agree the study scope with the seismologist and geotechnical engineer"
                - "Compare the study spectra with the code minimum values"
                - "Record the adopted spectra and review comments"
            - name: Performance-based seismic assessment of an existing building
              description: |-
                ## Purpose
                Older hospitals, government buildings and hotels across the region were built before modern seismic detailing, and code compliance checks alone often condemn them unfairly or miss real weaknesses. A performance-based assessment, using nonlinear analysis and a recognised existing-building standard, shows how the building would actually behave and targets retrofit where it matters.

                ## Milestones
                1. Existing drawings, material tests and condition survey assembled.
                2. Performance objectives agreed with the owner for one or more hazard levels.
                3. Nonlinear analysis completed with deficiencies identified by element.
                4. Retrofit options outlined with their effect on the performance level.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An assessment report states the building's performance level against agreed objectives, lists deficiencies by element and outlines retrofit options."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Gather drawings, test results and condition survey for the building"
                - "Agree performance objectives with the owner"
                - "Build and run the nonlinear analysis model"
                - "Outline retrofit options and their effect on performance"
            - name: Hurricane and seismic resilience of towers, tanks and utilities
              description: |-
                ## Purpose
                Telecommunication towers, water tanks, substations and fuel storage keep islands running after a disaster, and their failure in recent storms has cut communications and water for weeks. Assessing their wind and seismic resilience, including foundations, anchorage and sloshing, protects the services everything else depends on.

                ## Milestones
                1. The critical towers, tanks and utility structures listed with their role after an event.
                2. Wind and seismic checks carried out for the most critical items, including anchorage and sloshing.
                3. Weak links and their consequences ranked.
                4. A strengthening or replacement programme agreed with the owner.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The owner's critical towers, tanks and utility structures are listed and the most critical have wind and seismic checks with a ranked strengthening programme."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List critical towers, tanks and utility structures with the owner"
                - "Check wind and seismic capacity for the most critical items"
                - "Rank weak links by consequence of failure"
                - "Agree a strengthening programme with the owner"
---

# Caribbean Wind and Seismic Design

This area is for engineers designing buildings and structures across the Caribbean, where one site can face a major hurricane, a damaging earthquake and a storm surge within the same design life. It starts with foundations (a hazard basis for each job, the code that actually applies on that island, hazard maps, exposure, site class, flood levels and importance class), then the standing machinery of code watch, calculation checks, product approvals and the hurricane season cycle, the core skills in wind pressures, seismic analysis, ductile detailing, roof load paths and flood-resistant construction, the design choices that decide performance, dated moments from permit submission to post-event safety evaluation, variants for graduates, incoming engineers, small practices, plan reviewers, reconstruction teams and due diligence advisers, and finally specialist work such as wind tunnel testing, site-specific seismic hazard and performance-based assessment.

What repeats is a weekly calculation check register, monthly reviews of seismic bulletins, hold point records, authority queries and CPD hours, quarterly code and product approval checks, and a yearly hurricane season readiness review and lessons learned session after each season. The Risk register, Reading queue, Operational checklist and Remediation plan templates pair with the projects that use them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
