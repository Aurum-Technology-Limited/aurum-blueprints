---
id: agriculture.farm-drainage-and-flood-control
name: Farm Drainage and Flood Control
description: "Fields that shed heavy rain instead of drowning: flood lines mapped, drains, culverts and raised beds that work, contour planting on slopes, routines after every storm, and animals and stored crops kept above the water."
category: business
version: 1.0.0
tags: [agriculture, farm-drainage-and-flood-control, small-business, drainage, flooding, raised-beds, culverts, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - remediation-plan
    - purchase-decision
    - vendor
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Farm Drainage and Flood Control
          description: "Dealing with heavy rain and flooding: drainage channels, raised beds, contour planting, culverts, and protecting animals and stored crops."
          projects:
            - name: Wet season flood mark map of the farm
              description: |-
                ## Purpose
                After a heavy downpour the farm tells you exactly where it fails, but the evidence is gone within two days. Walking every field during or straight after a big rain and marking ponding, scoured paths, silt fans and the highest water line gives you the picture every later drainage decision depends on.

                ## Milestones
                1. Every field walked within 48 hours of a heavy rain, with ponded areas paced out.
                2. Flood lines on posts, fences and buildings marked with paint or a tag and photographed.
                3. A sketch map showing ponding, flow paths, scour and silt deposits, dated.
                4. The three worst wet spots ranked by crop loss or lost working days.

                ## Notes
                Take the photos from the same spots each time. A set of fixed photo points lets you compare one wet season with the next.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated sketch map of the farm shows ponding areas, flow paths and marked flood lines, with the three worst wet spots ranked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose four fixed photo points and mark them with painted stakes"
                - "Walk every field after the next heavy rain and pace out the ponded areas"
                - "Paint the high water line on posts and buildings and photograph each"
                - "Draw the ponding, flow paths and silt fans on one sketch map"
                - "Rank the three wet spots that cost the most crop or working time"
            - name: Catchment and outfall survey
              description: |-
                ## Purpose
                Much of the water that floods a field falls on someone else's land first: a road, a hillside above, a neighbour's cleared lot. Knowing where water enters the farm, and where it can legally and physically leave, decides whether the answer is a cut-off drain at the top, bigger outlets at the bottom, or both.

                ## Milestones
                1. Every point where water enters the farm identified: road drains, gullies, upslope land and springs.
                2. Every possible outfall identified: ravines, rivers, public drains and low corners.
                3. Each outfall checked for capacity during a heavy rain, noting whether it backs up.
                4. A one-line note per entry and exit point saying who controls it.

                ## Notes
                A public drain that backs up in a storm is not an outfall you can rely on. Note it, and raise it with the local drainage or works authority.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every water entry and exit point on the farm boundary exists, each with its controller and its behaviour in heavy rain recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk the farm boundary and note every gully, road drain and spring coming in"
                - "Mark every ravine, river, public drain and low corner water could leave by"
                - "Watch the main outfall during a heavy rain and note whether it backs up"
                - "Write beside each point who owns or maintains it"
            - name: Auger hole and percolation test by field
              description: |-
                ## Purpose
                Two fields side by side can behave completely differently: one drains in an hour, the other holds water for three days because of a clay pan at 40 cm. A simple auger hole and percolation test in each field shows whether the problem is surface water, a hard layer or a high water table, and each needs a different fix.

                ## Milestones
                1. At least two auger holes dug to about 1 m in each field, with soil layers noted.
                2. A percolation test run in each field and the drop in water level recorded over an hour.
                3. The depth of any hard pan, clay layer or standing water table written down.
                4. Each field labelled as free draining, slow, or waterlogged from below.

                ## Notes
                Run the tests in the wet season if you can. A water table that is 2 m down in March may be at 30 cm in October.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every field has a recorded percolation rate and soil profile note, and a drainage label of free, slow or waterlogged from below."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Borrow or buy a soil auger and a measuring stick marked in centimetres"
                - "Dig two holes in each field and note the depth of each soil layer"
                - "Fill each hole with water and record how far it drops in one hour"
                - "Label each field free draining, slow or waterlogged from below"
            - name: Ten-year flood history from neighbours and records
              description: |-
                ## Purpose
                One wet season shows you a normal year, not the flood that comes every five or ten. Older farmers, the extension office and local news archives remember the years the river came over the road, and that history tells you how high to build, where not to put the pens, and how often to expect a total loss.

                ## Milestones
                1. At least three long-standing neighbours asked about past floods, with dates and heights noted.
                2. Any flood maps or records from the extension office or disaster agency obtained.
                3. A list of known flood years with how high the water came and how long it stayed.
                4. A rough estimate of how often the farm floods badly, written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written flood history lists at least three past flood events with dates, water heights and duration, and a rough frequency estimate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Visit three long-standing neighbours and ask about the worst floods they remember"
                - "Ask the extension office or disaster agency for any local flood maps"
                - "List each known flood year with water height and days under water"
                - "Write a one-line estimate of how often a bad flood hits the farm"
            - name: Watercourse rules and neighbour outfall agreement
              description: |-
                ## Purpose
                Digging a drain that dumps your water onto a neighbour's land, or straightening a ravine without permission, can start a dispute or break watercourse and environmental rules. Finding out what needs approval and agreeing outfalls with neighbours before any digging saves a costly order to fill it back in.

                ## Milestones
                1. The authority responsible for drains, rivers and watercourses in your area identified, with a contact.
                2. Written confirmation of what works need a permit: river banks, bunds, culverts under roads, outfalls.
                3. Each neighbour affected by a planned outfall spoken to and their agreement noted.
                4. Any agreements or permits filed with the drainage plan.

                ## Notes
                Rules vary by country and sometimes by district. Ask the drainage authority or your extension officer, and keep a written record of what you were told and by whom.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note of which drainage works need approval is on file, with each affected neighbour's agreement recorded before any outfall is dug."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find out which authority controls drains and watercourses in your district"
                - "Ask in writing which works on your list need a permit"
                - "Walk each planned outfall with the neighbour it affects"
                - "File the permit answers and neighbour agreements in one folder"
            - name: Farm levels survey with pegs and a line level
              description: |-
                ## Purpose
                Water only goes downhill, and on flat land the eye cannot tell a 10 cm fall from a 10 cm rise. A simple levels survey with pegs, a string line level or a clear water tube shows which way each field really falls, so drains are dug in the right direction and at a grade that actually moves water.

                ## Milestones
                1. A grid of pegs set out across each problem field, roughly every 10 to 20 m.
                2. Relative heights at each peg measured from one fixed benchmark and recorded.
                3. The direction and approximate fall of each field drawn on the sketch map with arrows.
                4. The lowest points, where drains must lead, circled on the map.

                ## Notes
                A fixed benchmark, such as a nail in a concrete post, lets you repeat the survey later and check that new drains hold their grade.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each problem field has recorded peg heights from a fixed benchmark and an arrow map of fall direction with low points marked."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set a fixed benchmark on a concrete post or large stone"
                - "Peg out a grid every 15 m across the worst wet field"
                - "Measure each peg height against the benchmark with a water tube level"
                - "Draw fall arrows and circle the low points on the sketch map"
            - name: One-page farm drainage plan
              description: |-
                ## Purpose
                Without a plan, drains get dug wherever the water annoyed someone last, and they often fight each other or end in a dead hole. Putting the flood map, levels, outfalls and soil tests together on one page, with each drain, culvert and raised bed area drawn in, turns a list of problems into works you can cost and do in order.

                ## Milestones
                1. One map showing existing drains, planned drains, culverts, outfalls and raised bed areas.
                2. Each planned work given a size, a rough cost and a priority from one to three.
                3. Works sequenced from the outfall upwards, so water always has somewhere to go.
                4. The plan checked by an extension officer or experienced neighbour and signed off.

                ## Notes
                Always build from the outfall up. A field drain that reaches a blocked main drain just moves the pond.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page drainage plan with every planned work sized, costed and ranked is on file and has been reviewed by an extension officer or experienced farmer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Lay the flood map, levels and outfall notes side by side"
                - "Draw every existing and planned drain, culvert and bed area on one sheet"
                - "Give each planned work a size, a rough cost and a priority"
                - "Book the extension officer or a seasoned neighbour to review the plan"
            - name: Drainage tool kit and rain gauge set-up
              description: |-
                ## Purpose
                Drains get neglected when the right tools are not to hand: a long-handled shovel, a ditching spade, a grate hook, a rake for trash screens. A small kit kept in one place, plus a cheap rain gauge on a post, means a blocked culvert gets cleared in ten minutes and every storm is measured.

                ## Milestones
                1. A rain gauge mounted on a post in an open spot away from trees and roofs.
                2. A drainage kit gathered: ditching spade, shovel, hoe, rake, grate hook, gloves and boots.
                3. The kit stored in one marked place near the main drains.
                4. A simple inventory list taped inside the store door.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rain gauge is mounted in the open and a listed drainage tool kit is kept in one marked store."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Buy a plain plastic rain gauge and mount it on a post in the open"
                - "Gather a ditching spade, shovel, rake, grate hook, gloves and boots"
                - "Clear a marked spot in the store for the drainage kit"
                - "Tape an inventory list inside the store door"
            - name: High ground for animals, feed and stored crops
              description: |-
                ## Purpose
                When the water rises there is no time to decide where the goats, the feed bags and the harvested yams should go. Choosing the highest safe ground now, checking it stayed dry in past floods and clearing a route to it means a flood costs a muddy day instead of drowned animals and spoiled stock.

                ## Milestones
                1. The highest spot on or near the farm that stayed dry in known floods identified.
                2. A holding area there for animals, with shade, water and secure fencing or tie points.
                3. A raised platform or shelf space for feed, seed and stored crops agreed.
                4. A clear route to the high ground that stays passable in heavy rain.

                ## Notes
                If the farm has no high ground, agree in advance with a neighbour who does. Write down what you agreed and swap phone numbers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named high-ground holding area for animals and a raised store for feed and crops are agreed, with a passable route to them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the highest spot that stayed dry in the floods neighbours remember"
                - "Check it has shade, water and a way to keep animals secure"
                - "Agree raised shelf or pallet space for feed, seed and harvested crops"
                - "Walk the route to the high ground and clear any low or blocked stretch"
            - name: Rainfall and flood warning alerts
              description: |-
                ## Purpose
                A few hours of warning is enough to lift feed bags, open a sluice or move animals, but only if the warning reaches you. Signing up to the national weather service and disaster agency alerts, and agreeing a phone tree with neighbours along the same river or drain, turns warnings into action.

                ## Milestones
                1. Official weather and flood alerts from the met service and disaster agency set up on your phone.
                2. A list of neighbours along the same river or drain with phone numbers.
                3. A simple trigger agreed: what rainfall or river level means move animals and stores.
                4. The trigger and the phone list posted in the farm store.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Official alerts are active on the farm phone and a posted sheet lists neighbour contacts and the rainfall trigger for moving animals and stores."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sign up to the met service and disaster agency alerts on your phone"
                - "Collect phone numbers of neighbours along the same river or drain"
                - "Agree the rain or river level that means move animals and stores"
                - "Post the trigger and the contact list inside the farm store"
            - name: Daily rain gauge and waterlogging log
              description: |-
                ## Purpose
                Rain figures from the airport an hour away say little about your valley. Reading your own gauge each morning and noting which fields stood wet, and for how long, builds the evidence that shows whether new drains worked, when to plant, and what a claim or loan officer needs to see.

                ## Milestones
                1. A daily rainfall figure recorded for every day of the wet season.
                2. Fields that stood wet for more than 24 hours noted against the rain that caused it.
                3. Monthly totals and wet-day counts written up at the start of each month.
                4. A year of records kept together and backed up.

                ## Notes
                Start from the **Metrics log** template. Read the gauge at the same time each morning and empty it straight after.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rainfall and waterlogging log has an entry for every day of the current wet season and monthly totals for each completed month."
                cadence: rolling
              tasks:
                - "Set up the log with columns for date, rainfall and wet fields"
                - "Read and empty the rain gauge each morning and log the figure @recurring(daily)"
                - "Note any field that stood wet for more than a day after rain"
                - "Total the month's rain and count the wet days @recurring(monthly:2)"
            - name: Drain walk and desilting routine
              description: |-
                ## Purpose
                By September, a drain that worked in June can be choked with grass, silt and fallen branches by September, and the first sign is usually a flooded bed. A short weekly walk of the main drains and a monthly session of desilting the worst stretches keeps water moving for a fraction of the cost of a dig-out every year.

                ## Milestones
                1. A fixed route covering every main drain, outfall and culvert mouth.
                2. Blockages cleared on the day they are found during the weekly walk.
                3. The two or three stretches that silt fastest desilted each month.
                4. Spoil placed on the downhill bank, not back where rain will wash it in.

                ## Notes
                Heap the spoil well back from the edge. Silt dumped on the lip of the drain is back in it after the next storm.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The main drains are walked every week and the fastest-silting stretches are desilted every month, with the dates noted in the drainage log."
                cadence: rolling
              tasks:
                - "Mark the drain walk route on the drainage plan"
                - "Walk the main drains and pull out trash and branches @recurring(weekly:sat)"
                - "Desilt the fastest-filling stretches with a ditching spade @recurring(monthly:12)"
                - "Note any bank slips or scour to repair before the next heavy rain"
            - name: Culvert and grate inspection
              description: |-
                ## Purpose
                One culvert blocked by a coconut husk can back water across a whole field or wash out the farm road. Checking every culvert, grate and trash screen once a month, and straight after any big storm, catches blockages, cracked pipes and undercut headwalls before they fail.

                ## Milestones
                1. Every culvert, grate and trash screen on the farm numbered on the drainage plan.
                2. Each one checked monthly for blockage, cracking, sagging and scour at the outlet.
                3. Any damage logged with a photo and a repair date.
                4. Inlets and outlets kept clear of grass and debris for at least a metre.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every numbered culvert and grate has a monthly check recorded, with any damage photographed and given a repair date."
                cadence: rolling
              tasks:
                - "Number every culvert and grate on the drainage plan"
                - "Check each culvert inlet, outlet and headwall for blockage and scour @recurring(monthly:20)"
                - "Photograph and log any crack, sag or washout found"
                - "Clear grass and debris a metre back from each inlet and outlet"
            - name: Pre-wet-season drainage overhaul
              description: |-
                ## Purpose
                The cheapest time to fix drainage is the last dry month, when drains can be dug out, culverts replaced and beds reshaped on firm ground. A yearly overhaul before the rains starts the season with every drain at full depth and every outfall open.

                ## Milestones
                1. All main and field drains cleared to their design depth.
                2. Damaged culverts, headwalls and bank slips repaired.
                3. Raised beds reshaped and bed furrows connected to field drains.
                4. Outfalls checked open, with neighbours' shared drains cleared by agreement.
                5. The overhaul checklist signed and dated.

                ## Notes
                Start from the **Operational checklist** template. Book any machine hire a month ahead: every farmer wants an excavator in the same few weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed and dated overhaul checklist shows every drain, culvert, bed and outfall checked or repaired before the first wet season rains each year."
                cadence: cyclic
                effort_hours_estimate: "30"
              tasks:
                - "Draft the overhaul checklist from the drainage plan"
                - "Book any excavator or labour for the last dry month"
                - "Run the full pre-wet-season overhaul and sign the checklist @recurring(yearly)"
                - "Agree dates with neighbours for clearing shared drains"
            - name: Post-storm field inspection checklist
              description: |-
                ## Purpose
                Straight after a storm is when damage is easiest to see and cheapest to fix: a breached bed end, a culvert half full of silt, a gully starting across the track. A short checklist walked the morning after any heavy rain catches these while they are small and gives you dated photos if a claim or support scheme needs evidence.

                ## Milestones
                1. A one-page checklist covering drains, culverts, beds, tracks, pens and stores.
                2. The checklist walked within a day of each storm with photos of any damage.
                3. Urgent fixes done within the week and the rest added to the works list.
                4. Each completed checklist filed with the rainfall figure for that storm.

                ## Notes
                Start from the **Operational checklist** template. Photos with a date stamp and a fixed reference point are the most useful evidence later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed, dated post-storm checklist with photos exists for every storm over the rain threshold in the log."
                cadence: rolling
              tasks:
                - "Write a one-page post-storm checklist covering drains, beds, tracks and pens"
                - "Set the rainfall figure that triggers a post-storm walk"
                - "Walk the checklist the morning after the next heavy rain and take photos"
                - "File each checklist with that storm's rainfall reading"
            - name: Raised bed and furrow maintenance
              description: |-
                ## Purpose
                Raised beds only protect roots if the furrows between them stay open and connected to a field drain. Rain, foot traffic and weeding slowly flatten beds and plug furrow ends, so a monthly check and a reshaping at every new planting keeps the root zone above the water.

                ## Milestones
                1. Bed height and furrow depth for each field noted as a standard.
                2. Furrow ends checked monthly and kept open into the field drain.
                3. Beds reshaped to the standard height before each new planting.
                4. Any bed that ponds water marked for regrading.

                ## Notes
                Beds that run across the slope hold water; beds that run straight down it scour. Aim for a gentle fall along the bed towards the field drain.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Furrow ends are checked monthly and every bed is reshaped to the recorded standard height before each new planting."
                cadence: rolling
              tasks:
                - "Measure and record the bed height and furrow depth you want for each field"
                - "Walk the furrow ends and reopen any blocked into the field drain @recurring(monthly:8)"
                - "Reshape beds to the standard height before each new planting"
                - "Mark any bed that holds water for regrading"
            - name: Flood pump and sump maintenance
              description: |-
                ## Purpose
                A pump that has sat idle since last wet season often fails to start on the one night it is needed. Running the flood or sump pump monthly, keeping fuel fresh and the intake screen clean, and servicing it once a year means it moves water when the drains alone cannot.

                ## Milestones
                1. The pump, hoses, intake screen and fuel stored together and ready.
                2. A monthly test run of at least ten minutes logged.
                3. A yearly service done before the wet season, with spark plug, oil and impeller checked.
                4. Spare fuel rotated so it is never more than a few months old.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The flood pump has a logged test run every month and a recorded yearly service before the wet season."
                cadence: rolling
              tasks:
                - "Store the pump, hoses, intake screen and fuel together on high ground"
                - "Run the flood pump for ten minutes and log that it started @recurring(monthly:15)"
                - "Service the pump before the wet season, checking oil, plug and impeller @recurring(yearly)"
                - "Rotate the spare fuel into the farm vehicle or tractor"
            - name: Grassed waterway and drain bank mowing
              description: |-
                ## Purpose
                Grass on drain banks and waterways holds the soil, but left to grow tall it slows the flow, traps silt and hides rat burrows and slips. Cutting it short on a monthly round keeps water moving while the roots keep the banks in place.

                ## Milestones
                1. Every grassed waterway and drain bank shown on the drainage plan.
                2. Banks cut short each month through the wet season.
                3. Bare or slipping patches replanted with a creeping grass.
                4. Burrows, slips and undercut banks noted for repair.

                ## Notes
                Do not spray the banks bare. Roots are what stop the drain from caving in.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All grassed waterways and drain banks are cut each wet season month and any bare patches are replanted."
                cadence: rolling
              tasks:
                - "Mark every grassed waterway and drain bank on the drainage plan"
                - "Cut the drain banks and waterways short with a brushcutter @recurring(monthly:25)"
                - "Replant bare or slipping patches with a creeping grass"
                - "Log burrows, slips and undercut sections for repair"
            - name: Silt trap emptying
              description: |-
                ## Purpose
                Silt traps, small settling pits at the bottom of a field, catch the soil before it fills the main drain or leaves the farm. Emptying each one every quarter, and spreading the silt back on the beds, keeps the trap working and returns topsoil that rain washed away.

                ## Milestones
                1. Silt traps placed where field drains meet the main drain, sized for the field.
                2. Each trap emptied every quarter, or sooner after a big storm.
                3. Removed silt spread back on beds or low spots rather than dumped by the drain.
                4. The depth of silt removed noted, as a rough guide to soil loss.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every silt trap has a recorded quarterly emptying with the silt depth noted and the spoil returned to the field."
                cadence: rolling
              tasks:
                - "Mark where each field drain meets the main drain for a silt trap"
                - "Dig a settling pit at the two busiest junctions"
                - "Empty the silt traps and spread the silt back on the beds @recurring(quarterly)"
                - "Record the silt depth removed from each trap"
            - name: Monthly drainage review
              description: |-
                ## Purpose
                The rain log, inspection notes and post-storm checklists only help if someone reads them together. A short monthly review turns those notes into a short works list for the next month, and a yearly review decides which bigger projects go into next dry season's budget.

                ## Milestones
                1. A fixed half hour each month to read the rain log and inspection notes.
                2. A works list for the coming month with each job given a date.
                3. A yearly review listing what worked, what failed and the next dry season's works.
                4. Spending on drainage for the year totalled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated works list exists for each month and a yearly review records the drainage spending and the next dry season's works."
                cadence: rolling
              tasks:
                - "Read the rain log and inspection notes and set next month's works @recurring(monthly:28)"
                - "Keep a running list of drainage spending with receipts"
                - "Hold the yearly drainage review and choose next dry season's works @recurring(yearly)"
                - "Move any unfinished job to the following month with a reason"
            - name: Reading waterlogging signs in soil and crops
              description: |-
                ## Purpose
                Waterlogged roots suffocate long before the surface looks flooded, and yellowing leaves are often blamed on fertiliser when the real cause is water. Learning to read grey and rusty mottling in the soil, sour smells, rush and sedge weeds and wilting in wet ground lets you diagnose drainage problems early.

                ## Milestones
                1. The main soil signs of poor drainage learnt: grey colours, rust mottles and a sour smell.
                2. Plant signs learnt: yellowing lower leaves, wilting in wet soil and shallow roots.
                3. Weeds that indicate wet ground identified on your own farm.
                4. Each field scored on these signs and compared with the percolation test.

                ## Notes
                Ask your extension officer to look at a soil pit with you once. Ten minutes in a real hole teaches more than any picture.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every field has a written waterlogging score based on soil colour, smell, weeds and crop signs, checked against its percolation result."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Dig a spade-deep pit in a wet field and look for grey and rust colours"
                - "Find an extension leaflet or guide on soil drainage signs"
                - "List the weeds on your farm that point to wet ground"
                - "Score each field on soil, weed and crop signs and compare with test results"
            - name: Sizing drains and culverts with the extension officer
              description: |-
                ## Purpose
                Drains are usually dug as deep as the spade goes and culverts bought in whatever size the hardware has, and both are often too small for a tropical downpour. Learning the basic rule-of-thumb sizing from your extension officer or a drainage engineer, using your field area and slope, stops you paying for works that overflow in the first big storm.

                ## Milestones
                1. The area each main drain and culvert has to carry estimated from the catchment survey.
                2. A sizing method explained by an extension officer or engineer and written down.
                3. Each planned drain and culvert given a depth, width or pipe diameter.
                4. Sizes added to the one-page drainage plan.

                ## Notes
                For anything under a public road or carrying water from beyond your land, get the size from the works authority or an engineer rather than a rule of thumb.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every planned main drain and culvert on the drainage plan has a size based on its catchment area and a method explained by an extension officer or engineer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Estimate the area of land draining to each main drain and culvert"
                - "Book a session with the extension officer on drain and culvert sizing"
                - "Work out a depth, width or pipe size for each planned work"
                - "Write the sizes onto the drainage plan"
            - name: Laying out contour lines with an A-frame
              description: |-
                ## Purpose
                On sloping land, rows planted straight downhill turn every rainstorm into a stream that carries topsoil and seed away. An A-frame made from three sticks and a plumb line marks true contour lines in an afternoon, so beds, hedgerows and cut-off drains follow the land instead of fighting it.

                ## Milestones
                1. An A-frame built and calibrated on level ground.
                2. Contour lines pegged across one sloping field at a set spacing.
                3. Beds or rows planted along the pegged lines.
                4. The method practised until a second person on the farm can do it alone.

                ## Notes
                Recalibrate the A-frame each time you use it. A leg that has sunk or a knot that has slipped will walk your line off the contour.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one sloping field is pegged on contour lines with an A-frame and a second farm worker has laid a line unaided."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build an A-frame from three poles, string and a stone plumb"
                - "Mark the level point on the crossbar using flat ground"
                - "Peg contour lines across one sloping field at your chosen spacing"
                - "Teach a second worker to lay a line and check it together"
            - name: Building raised and cambered beds
              description: |-
                ## Purpose
                On heavy clay a bed 25 to 40 cm high can be the difference between a pepper crop and a field of dead plants after a week of rain. Learning to build beds of even height with a gentle camber and a steady fall towards the field drain is a skill that pays back every planting.

                ## Milestones
                1. Bed width, height and furrow width chosen for each main crop.
                2. One trial block of beds built by hand or with a bed former to those measurements.
                3. The trial beds checked after heavy rain for ponding at the ends and in the furrows.
                4. A written bed standard for the farm based on what worked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written bed standard giving width, height and fall for each main crop exists, based on a trial block checked after heavy rain."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose bed width, height and furrow width for your main crops"
                - "Build a trial block of beds with a slight fall to the field drain"
                - "Check the trial block for ponding after the next heavy rain"
                - "Write a bed standard for the farm from what the trial showed"
            - name: Crop tolerance to waterlogging
              description: |-
                ## Purpose
                Dasheen and rice will sit in wet ground that kills pawpaw, tomato and sweet pepper within days. Knowing how long each of your crops survives with wet roots tells you what to plant in the low field, what needs raised beds and what to keep on the high ground only.

                ## Milestones
                1. Every crop you grow or plan to grow listed.
                2. Each crop rated for waterlogging tolerance from extension advice and your own records.
                3. Each field matched to crops that suit its drainage label.
                4. The planting plan for the next wet season adjusted to the matches.

                ## Notes
                Your own records beat any general list. Note which crops died and which recovered after each wet spell.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table rating every farm crop for waterlogging tolerance exists, and the next wet season planting plan places each crop in a field that suits it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every crop you grow or plan to grow"
                - "Ask the extension office which of them tolerate wet roots and for how long"
                - "Match each field's drainage label to the crops that suit it"
                - "Adjust the next wet season planting plan to those matches"
            - name: Safe work in floodwater and drains
              description: |-
                ## Purpose
                Floodwater carries rat-borne leptospirosis, sewage, snakes, hidden holes and sometimes live electricity, and fast water in a drain can knock an adult off their feet. Agreeing simple safety rules with everyone who works on the farm, and knowing when to seek medical help, protects people during the work that floods bring.

                ## Milestones
                1. Written rules: no wading in moving water, boots and gloves in drains, power off before flood work.
                2. Cuts covered and hands washed after any contact with floodwater.
                3. Everyone told to see a doctor and mention floodwater contact if fever follows.
                4. Rules explained to every worker and refreshed each year.

                ## Notes
                Ask your doctor or public health office about leptospirosis risk where you farm. Do not take or give medicine for it without medical advice.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written floodwater safety rules are posted at the farm and every worker has had them explained, with a yearly refresher recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write five floodwater safety rules for the farm on one sheet"
                - "Stock boots, heavy gloves and wound plasters in the drainage kit"
                - "Explain the rules to every worker and family member who helps"
                - "Refresh the floodwater safety talk before the wet season @recurring(yearly)"
            - name: Open ditch or pipe drain decision
              description: |-
                ## Purpose
                Open ditches are cheap and easy to clean but take land, hinder machines and can be dangerous for animals and children. Perforated pipe drains save space but cost more, need gravel and fail quietly when they block. Comparing both for each wet field, on cost and upkeep, avoids an expensive choice made on habit.

                ## Milestones
                1. Each wet field listed with the drain length it needs.
                2. Rough costs for open ditch and pipe drain options gathered for each field.
                3. Upkeep, land lost, machine access and safety compared side by side.
                4. A choice made and recorded for each field with the reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each wet field has a recorded choice between open ditch and pipe drain, backed by rough costs and an upkeep comparison."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Measure the drain length each wet field needs from the drainage plan"
                - "Get prices for perforated pipe, gravel and ditch digging"
                - "Compare upkeep, land lost and machine access for both options"
                - "Record the chosen drain type and reason for each field"
            - name: Fixing the worst waterlogged field
              description: |-
                ## Purpose
                Spreading effort across every wet patch at once usually leaves all of them half fixed. Taking the single field that costs the most crop and putting it right properly, outfall first, then main drain, then beds, gives a visible result in one season and a method to copy on the rest.

                ## Milestones
                1. The worst field chosen from the flood map ranking, with its yearly loss estimated.
                2. A remediation plan with works, costs and dates, built from the outfall upwards.
                3. Outfall, main drain and field drains finished before the next wet season.
                4. The field's waterlogging after heavy rain compared with the year before.

                ## Notes
                Start from the **Remediation plan** template.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The worst waterlogged field has finished outfall, main and field drains, with before and after wet season observations recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick the worst field from the flood map ranking and estimate its yearly loss"
                - "Write a remediation plan listing each work from the outfall up"
                - "Clear and deepen the outfall and main drain first"
                - "Dig the field drains and reshape the beds to join them"
                - "Compare the field after the first heavy rain with last year's photos"
            - name: Upsizing the farm entrance culvert
              description: |-
                ## Purpose
                The culvert under the farm track or entrance is often a short length of old pipe that floods the road and cuts off the farm in every heavy rain. Replacing it with the right size and a proper headwall keeps the track open for harvest, inputs and an emergency vehicle.

                ## Milestones
                1. The existing culvert measured and its failures noted from the flood map.
                2. A replacement size agreed using the catchment area and extension or engineer advice.
                3. Two or three quotes for pipe, bedding, headwalls and labour compared.
                4. The new culvert installed with headwalls and a protected outlet.

                ## Notes
                Start from the **Purchase decision** template. If the culvert is under a public road, the works authority must be involved first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A correctly sized culvert with headwalls is installed at the farm entrance and the track stays passable through the next heavy rain."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Measure the current entrance culvert's diameter and length"
                - "Agree the replacement size with the extension officer or an engineer"
                - "Collect three quotes for pipe, bedding, headwalls and labour"
                - "Install the new culvert with headwalls and stone at the outlet"
            - name: Choosing a drainage contractor or excavator hire
              description: |-
                ## Purpose
                Machine work is the biggest single drainage cost, and an operator who digs to the wrong grade leaves you with a drain that holds water. Comparing contractors on their past drainage jobs, hourly rate, machine size and willingness to follow your levels protects the money and the result.

                ## Milestones
                1. At least three contractors or hire firms found through neighbours and the extension office.
                2. Each one asked about drainage experience, machine size, rate and travel charge.
                3. One past job of each visited or a neighbour's reference checked.
                4. A contractor chosen and the job, rate and grade written down before work starts.

                ## Notes
                Start from the **Vendor** template. Be on site for the first hour to set the grade with the operator.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A drainage contractor is chosen from at least three compared, with a written job description, rate and grade agreed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask neighbours and the extension office for drainage contractor names"
                - "Call three and note machine size, hourly rate and travel charge"
                - "Visit one drainage job each contractor has done"
                - "Write the agreed job, rate and grade and share it before work starts"
            - name: Cut-off drain above the fields
              description: |-
                ## Purpose
                When water from a hillside or road above sheets across your fields, field drains alone will never keep up. A cut-off drain dug across the slope above the fields, on a gentle grade to a safe outfall, catches that water before it reaches the crop.

                ## Milestones
                1. The line of the cut-off drain pegged across the slope at a gentle fall.
                2. A safe outfall for the drain agreed, with neighbour consent if needed.
                3. The drain dug, with spoil placed on the downhill side as a small bank.
                4. Banks grassed and the drain checked during the next heavy rain.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A grassed cut-off drain intercepts upslope water above the fields and discharges to an agreed outfall without overflowing in heavy rain."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Peg the cut-off drain line across the slope with a gentle fall"
                - "Confirm the outfall is safe and agreed with any affected neighbour"
                - "Dig the drain and bank the spoil on the downhill side"
                - "Plant grass on the banks and watch the drain in the next storm"
            - name: Moving pens or stores off the flood line
              description: |-
                ## Purpose
                Any goat pen, chicken house or crop store built in the low corner years ago may flood every wet season, costing animals, feed and health. Weighing the cost of moving it against raising it or living with the risk gives a clear decision instead of yearly losses.

                ## Milestones
                1. Each building or pen below the flood line listed with its yearly flood losses.
                2. Options costed: move to high ground, raise the floor, or build a bund around it.
                3. A decision made for each building, with timing.
                4. The first move or raise completed before the wet season.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every pen and store below the flood line has a recorded decision to move, raise or protect it, and the first one is done before the wet season."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every pen and store below the marked flood line"
                - "Estimate what each one lost to flooding in the last two years"
                - "Cost moving, raising or bunding each one"
                - "Choose and schedule the first building to move or raise"
            - name: Roof water and yard runoff control
              description: |-
                ## Purpose
                Packing shed roofs and concrete yards can dump thousands of litres of water into one corner in a single storm, flooding the store and turning the yard to mud. Gutters, downpipes, a soakaway or a lined channel to the drain move that water where it does no harm.

                ## Milestones
                1. Every roof and hard yard mapped with where its water goes now.
                2. Gutters and downpipes fitted or repaired on the main buildings.
                3. Downpipes led to a tank, soakaway or lined channel to a drain.
                4. The yard regraded or a channel added so no water ponds by doors.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every main building roof drains through gutters to a tank, soakaway or channel and no water ponds by store or pen doors after heavy rain."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Watch where roof and yard water goes during the next heavy rain"
                - "Fix or fit gutters and downpipes on the store and packing shed"
                - "Lead each downpipe to a tank, soakaway or lined channel"
                - "Regrade the yard so water runs away from doors"
            - name: Choosing a portable flood pump
              description: |-
                ## Purpose
                Some low spots can never drain by gravity, and a portable pump is the only way to clear them before roots die or a store floods. Choosing the right size, fuel type and hose length for the job means you are not borrowing a garden pump that cannot keep up.

                ## Milestones
                1. The volume of water to move and the lift height estimated for each low spot.
                2. Pump types compared: petrol or diesel trash pumps, electric submersibles.
                3. Two or three models shortlisted on flow, solids handling, fuel and price.
                4. A pump bought or a hire arrangement agreed, with hoses to reach the outfall.

                ## Notes
                Start from the **Purchase decision** template. A trash pump handles muddy water with leaves; a clean water pump will clog.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A flood pump suited to the farm's lift, volume and muddy water is bought or on agreed hire, with enough hose to reach the outfall."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate the water volume and lift height at each low spot"
                - "Compare trash pumps and submersibles for muddy water"
                - "Shortlist three models on flow, fuel, solids handling and price"
                - "Buy or arrange hire of the pump and enough hose to reach the outfall"
            - name: Contour hedgerows to slow runoff on slopes
              description: |-
                ## Purpose
                Across a hillside, a line of vetiver, lemongrass or gliricidia planted on the contour slows water, traps soil behind it and over a few years builds natural terraces. Planting hedgerows every few metres of drop and keeping them trimmed turns a field that scours in every storm into one that holds its water and soil.

                ## Milestones
                1. Hedgerow lines pegged on the contour with an A-frame.
                2. Planting material sourced from the extension office or neighbours.
                3. Hedgerows planted along every pegged line on the sloping field.
                4. Hedgerows trimmed each quarter, with trimmings laid as mulch above the line.

                ## Notes
                Ask your extension officer which hedgerow plants suit your rainfall and will not spread into the crop.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every sloping field has contour hedgerows planted along pegged lines and trimmed at least once a quarter."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Peg the hedgerow lines on the contour with the A-frame"
                - "Ask the extension office for vetiver or other hedgerow planting material"
                - "Plant along every pegged line before the rains"
                - "Trim the hedgerows and lay the cuttings as mulch above the line @recurring(quarterly)"
            - name: Commissioning new drains in the first big rain
              description: |-
                ## Purpose
                Every new drain looks finished when the digger leaves, but only a real downpour shows whether it carries water at the grade you paid for. Going out during and after the first heavy rain to watch every new drain, culvert and outfall catches low spots and overflows while the contractor can still put them right.

                ## Milestones
                1. Every new work listed with what it is meant to do.
                2. Each one watched during heavy rain, with photos and notes of flow, overflow and ponding.
                3. Faults listed and sent to the contractor within a week.
                4. Faults fixed and the works marked as commissioned on the drainage plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every new drainage work has been observed in heavy rain, its faults listed and fixed, and is marked commissioned on the plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every new drain, culvert and outfall with its job"
                - "Watch each new work during the first heavy rain and take photos"
                - "Send the list of faults to the contractor within a week"
                - "Mark each work as commissioned once its faults are fixed"
            - name: Flood day action plan
              description: |-
                ## Purpose
                When the river rises at night, people forget the obvious: unplug the pump house, open the sluice, move the feed. A written flood day plan with who does what, in what order, and what triggers each step, means the right things happen fast even if you are not there.

                ## Milestones
                1. A list of flood day actions in order, each with a named person.
                2. Triggers agreed for each stage: watch, prepare, move, leave.
                3. Electricity, fuel and chemicals included in the plan, with safe shut-off points marked.
                4. The plan rehearsed once with everyone who works on the farm.

                ## Notes
                Never stay to save crops or equipment once water is rising fast. People first, then animals, then stores.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written flood day plan names a person and a trigger for each action and has been rehearsed once with the farm team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the flood day actions in order with a name beside each"
                - "Set the triggers for watch, prepare, move and leave"
                - "Mark power, fuel and chemical shut-off points on the farm map"
                - "Rehearse the plan once with everyone who works on the farm"
            - name: After-flood field recovery and replanting
              description: |-
                ## Purpose
                Rushing to replant into soil that is still saturated, or before silt and debris are cleared, often loses the second crop too. A short recovery plan, from damage photos to soil checks to replanting with the right crop, gets the farm earning again and keeps the evidence any support scheme or insurer will ask for.

                ## Milestones
                1. Damage photographed and listed by field before any clean-up.
                2. Silt, debris and dead plants cleared and drains reopened.
                3. Soil checked for workability before cultivation, with extension advice where needed.
                4. A replanting plan with crop, date and inputs for each affected field.

                ## Notes
                Ask the extension office about any flood relief or replanting support, and keep receipts for everything you spend.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "After a flood, every affected field has dated damage photos, cleared drains and a written replanting plan with dates."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Photograph and list damage in each field before clearing anything"
                - "Clear silt and debris and reopen the drains"
                - "Test each field's soil for workability before cultivation"
                - "Write a replanting plan with crop, date and inputs per field"
            - name: Shared drain clearing day with neighbours
              description: |-
                ## Purpose
                A main drain that runs past four farms only works if all four keep their stretch clear, and one choked section floods everyone upstream. A yearly clearing day organised with neighbours, with tools and tasks shared, keeps the shared drain open and builds the goodwill that matters when water is rising.

                ## Milestones
                1. Every farm along the shared drain contacted and a date agreed.
                2. Stretches allocated, with tools, machine time and refreshments arranged.
                3. The full length cleared and photographed on the day.
                4. Any problems needing the drainage authority reported together.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A shared drain clearing day takes place each year with all neighbouring farms, and the cleared length is photographed."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "List every farm along the shared drain with a contact"
                - "Agree a date and split the drain into stretches"
                - "Hold the shared drain clearing day before the rains @recurring(yearly)"
                - "Send a joint note to the drainage authority about any blockage beyond your land"
            - name: Yearly drainage walk with the extension officer
              description: |-
                ## Purpose
                An extension officer sees dozens of farms and often spots in minutes a problem you have walked past for years. A yearly walk of the farm's drains and wet spots, with the drainage plan in hand, gets free expert eyes on the system and builds a relationship that helps when you need support after a flood.

                ## Milestones
                1. A visit booked each year in the late dry season or early wet season.
                2. The drainage plan, flood map and rain log ready for the visit.
                3. The officer's advice written down by field.
                4. Agreed actions added to the next month's works list.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly drainage walk with an extension officer takes place, with written advice and agreed actions added to the works list."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Book a drainage walk with your extension officer @recurring(yearly)"
                - "Print the drainage plan, flood map and rain log totals"
                - "Write down the officer's advice field by field"
                - "Add each agreed action to next month's works list"
            - name: Draining heavy clay on flat coastal land
              description: |-
                ## Purpose
                Flat coastal clay is fertile but holds water for days, with little fall to move it and outfalls that back up at high tide. Growing there needs closely spaced field drains, high beds, careful timing and sometimes a flap gate or pump at the outfall, planned together rather than piece by piece.

                ## Milestones
                1. The fall to the outfall measured and any tidal or river backing up noted.
                2. Field drain spacing and bed height chosen for clay with extension advice.
                3. A flap gate, sluice or pump option chosen where the outfall backs up.
                4. One block drained to the new design and checked through a wet season.

                ## Notes
                Working wet clay with machinery smears and seals it. Do drain and bed work only when the soil is dry enough to crumble.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One block of flat clay land has closely spaced drains, raised beds and an outfall solution, and its wet season performance is recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Measure the fall from the clay field to its outfall"
                - "Note when the outfall backs up with tide or river levels"
                - "Agree drain spacing and bed height for clay with the extension officer"
                - "Drain one block to the new design and record its wet season results"
            - name: Water management on a hillside plot
              description: |-
                ## Purpose
                On steep land the danger is not standing water but fast runoff: gullies across the track, beds washed out and landslips below cleared ground. Combining cut-off drains, contour beds, stone-lined waterways and silt pits keeps the water slow and the soil in place.

                ## Milestones
                1. Gullies, slips and scoured paths mapped across the hillside.
                2. A waterway route chosen to carry water safely down the slope.
                3. Steep sections of the waterway lined with stone or grass, with drop structures where needed.
                4. Contour beds and silt pits in place above the waterway.

                ## Notes
                Clearing trees from steep slopes above a field can increase slips. Ask the extension or forestry office before removing large trees.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A hillside plot has a lined waterway, contour beds and silt pits, and no new gullies form during the next wet season."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Map every gully, slip and scoured path on the hillside"
                - "Choose a safe waterway route down the slope"
                - "Line the steepest stretches with stone and add small drops"
                - "Dig silt pits and contour beds above the waterway"
            - name: Living with river flooding on riverside land
              description: |-
                ## Purpose
                Riverside land floods by design, and fighting the river with bunds and walls is expensive, often needs a permit and can push water onto neighbours. Planning crops, stores and access around the flood pattern, and protecting only what really matters, is usually cheaper and safer.

                ## Milestones
                1. The usual flood months and height recorded from the flood history.
                2. Crops on the lowest strip changed to short-season or flood-tolerant ones, timed around the flood months.
                3. Stores, pens and equipment moved or kept above the known flood height.
                4. Any bund or bank protection discussed with the drainage authority before work.

                ## Notes
                Do not dump spoil or build a bank along the river without asking the drainage authority. It can be illegal and may flood the farm next door.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A riverside farm plan records the flood months, keeps stores and pens above the flood height and times low-strip crops around the floods."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark the usual flood months and height on the farm calendar"
                - "Choose short-season or flood-tolerant crops for the lowest strip"
                - "Move stores and equipment above the known flood height"
                - "Ask the drainage authority before any bund or bank work"
            - name: Mud and drainage in livestock yards and pens
              description: |-
                ## Purpose
                Wet pens and muddy yards bring foot rot, mastitis, parasites and slow growth, and animals standing in mud eat less. Grading yards, raising pen floors, draining water troughs away from shelters and keeping a dry lying area cuts health problems and vet bills in the wet season.

                ## Milestones
                1. Every pen, yard and gateway that turns to mud mapped.
                2. Pen floors raised or slatted and yards graded to shed water.
                3. Trough overflows and roof water led away from lying areas.
                4. A dry lying area available for every group of animals in heavy rain.

                ## Notes
                Talk to your vet about wet-season foot and parasite problems. Better drainage reduces them but does not replace the herd health plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every livestock group has a dry lying area through heavy rain, with yards graded and trough and roof water led away from pens."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map every pen, yard and gateway that turns to mud"
                - "Raise pen floors or fit slats where animals lie"
                - "Lead trough overflows and roof water away from lying areas"
                - "Check pens and gateways for standing water after rain @recurring(weekly:wed)"
            - name: Drainage works on rented or leased land
              description: |-
                ## Purpose
                Digging drains or moving culverts on rented, leased or family land without the owner's say can break the lease or start a family row, and you may lose the investment when the lease ends. Agreeing works, who pays and what happens at the end of the lease protects both sides.

                ## Milestones
                1. The lease or family arrangement read for anything about land changes or improvements.
                2. Planned drainage works shared with the landowner in writing.
                3. Agreement on who pays, and whether any cost is credited at the end of the lease.
                4. The written agreement filed with the lease.

                ## Notes
                For anything costly, ask a lawyer or the land agency how improvements are treated under your lease. This is a record of what was agreed, not legal advice.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The landowner has agreed in writing to the planned drainage works and who pays, and the agreement is filed with the lease."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the lease for any clause on improvements or land changes"
                - "Send the landowner the planned drainage works in writing"
                - "Agree who pays and what happens at the end of the lease"
                - "File the signed agreement with the lease"
            - name: Drainage around a greenhouse or shade house
              description: |-
                ## Purpose
                Every shade house or greenhouse sheds all its roof water onto the ground beside it, and a site that floods inside ruins the crop and rusts the posts. Raising the floor, guttering or channelling the roof run-off and giving the site a perimeter drain keeps the house dry and the structure sound.

                ## Milestones
                1. The site's fall and any ponding inside or beside the house recorded.
                2. Roof run-off from each side measured or estimated and given a route to a drain or tank.
                3. A perimeter drain dug around the house with a safe outfall.
                4. The floor raised or graded so no water stands inside after heavy rain.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The greenhouse or shade house has a perimeter drain and a roof run-off route, and no water stands inside it after heavy rain."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Watch where roof water lands around the house in heavy rain"
                - "Dig a perimeter drain with a fall to a safe outfall"
                - "Lead roof run-off into the drain or a storage tank"
                - "Raise or grade the floor so nothing ponds inside"
            - name: Mounds and drains for orchard trees
              description: |-
                ## Purpose
                Avocado, citrus and pawpaw can die from root rot after a single week of waterlogging, and a lost tree is years of growth gone. Planting on mounds, keeping drains between rows and checking the wettest trees after rain protects the long-term investment in an orchard.

                ## Milestones
                1. Trees in waterlogging-prone spots identified from the flood map.
                2. New trees planted on mounds of a height agreed with the extension officer.
                3. Drains between orchard rows dug to carry water away from the root zones.
                4. Any tree showing root rot signs reported to the extension officer.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every orchard tree in a wet spot is on a mound or served by a row drain, and new plantings go on mounds."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Mark the orchard trees in waterlogging-prone spots on the flood map"
                - "Agree mound height for new trees with the extension officer"
                - "Dig drains between the wettest orchard rows"
                - "Report any tree with root rot signs to the extension officer"
            - name: Subsurface pipe drainage trial
              description: |-
                ## Purpose
                Where a high water table or clay pan keeps roots wet even with good surface drains, buried perforated pipe can lower the water table across a field. A small trial on one block, with water table readings before and after, shows whether the extra cost pays back in yield before you drain the whole farm.

                ## Milestones
                1. A trial block chosen with a known high water table or clay pan.
                2. Pipe depth and spacing designed with an engineer or extension advice.
                3. Observation wells installed and water table depth recorded before the work.
                4. Pipes laid with filter material and an outfall, and readings repeated through a wet season.
                5. Yields from the trial block compared with an undrained block.

                ## Notes
                Pipe drains silt up if laid without a filter or gravel envelope. Leave inspection points so they can be flushed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial block has before and after water table readings and yields compared against an undrained block, with a decision recorded on wider use."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "Choose a trial block with a known high water table"
                - "Install observation wells and record water table depth weekly"
                - "Lay perforated pipe with a gravel envelope and an outfall"
                - "Compare the trial block's yield with an undrained block"
            - name: Drainage pond at the farm outfall
              description: |-
                ## Purpose
                Wet season drainage water leaves the farm just when it is not needed, and a few months later the same farm is short of water. A pond at a suitable low point that catches drainage water slows the flow off the farm and holds water for later use, if it is sited, sized and permitted properly.

                ## Milestones
                1. A low point with suitable soil and safe overflow identified.
                2. Permits and safety requirements checked with the relevant authority.
                3. The pond dug with a stable bank, a spillway and a silt trap at the inlet.
                4. The pond fenced, and the spillway and banks checked every quarter.

                ## Notes
                A pond is a drowning risk for children and animals. Fence it, and keep the spillway clear so the bank is never overtopped.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A fenced pond with a spillway and inlet silt trap catches drainage water, with quarterly bank and spillway checks recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find a low point with clay soil and a safe overflow route"
                - "Check permit and safety rules for farm ponds with the authority"
                - "Dig the pond with a spillway and an inlet silt trap"
                - "Inspect the pond banks and spillway for cracks and seepage @recurring(quarterly)"
            - name: Farm flood risk register and climate outlook
              description: |-
                ## Purpose
                Wet seasons are getting harder to predict, with more intense downpours in many parts of the region. A flood risk register that lists every way water can hurt the farm, how likely and how costly each is, and what you are doing about it, keeps long-term spending on the risks that matter most.

                ## Milestones
                1. Every flood and drainage risk listed: fields, pens, stores, access, people and income.
                2. Each risk scored for likelihood and cost, using the flood history and rain log.
                3. An owner and an action for each high risk.
                4. The register reviewed every year with the latest rainfall and climate outlook.

                ## Notes
                Start from the **Risk register** template. The met service and regional climate bodies publish seasonal outlooks that are worth reading before each wet season.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A flood risk register scores every listed risk for likelihood and cost, names an action for each high risk and has a yearly review date."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a starter list of flood risks for a farm like yours"
                - "Score each risk for likelihood and cost from the flood history and rain log"
                - "Name an owner and an action for every high risk"
                - "Review the register against the seasonal climate outlook @recurring(yearly)"
---

# Farm Drainage and Flood Control

This area is for any grower or livestock farmer who loses crops, animals or working days to standing water, from a vegetable plot on flat coastal clay to a hillside holding where every downpour carries soil down the slope. It starts with foundations (where water comes from and where it can leave, flood marks, soil tests, levels, rights and a one-page plan), then the routines that keep drains, culverts, beds and pumps working, the skills to read wet soil and size a drain, decisions on pipes, culverts, pumps and contractors, dated events such as commissioning and flood day itself, situations from riverside land to rented fields and livestock yards, and finally specialist work on subsurface drains, drainage ponds and a long-term flood risk register.

What repeats is a morning rain gauge reading, a Saturday drain walk, monthly desilting, culvert, bed, pump and waterway checks spread across the month, quarterly silt trap and hedgerow work, and a yearly pre-wet-season overhaul, review and extension visit. The Metrics log, Operational checklist, Remediation plan, Purchase decision, Vendor and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
