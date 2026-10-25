---
id: agriculture.aquaponics-systems
name: Aquaponics Systems
description: "Design, cycle and run an aquaponics unit that raises fish and vegetables in one water loop, with water tests, fish care, crop planning, power backup and sales."
category: business
version: 1.0.0
tags: [agriculture, aquaponics-systems, small-business, aquaponics, fish, vegetables, water-quality, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - vendor
    - operational-checklist
    - risk-register
    - remediation-plan
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Aquaponics Systems
          description: "Running an aquaponics system that grows fish and vegetables together: system design, water balance, fish health, crop choice and power backup."
          projects:
            - name: Aquaponics enterprise plan and system scale
              description: |-
                ## Purpose
                Decide what the system is for before buying a single tank: household food, a side income from lettuce and herbs, or a commercial unit with fish sales. That answer sets the tank volume, grow area, daily labour and power bill, and most failed units were sized for enthusiasm rather than for a buyer. A one-page plan written now keeps every later purchase honest.

                ## Milestones
                1. The purpose of the system written in one sentence: food, side income or full business.
                2. A target fish tank volume and grow bed area chosen to match that purpose.
                3. The main crops and fish species named, with at least one likely buyer for each if selling.
                4. A start-up budget and an estimate of daily hands-on time written down.

                ## Notes
                Start small if you have never cycled a system. A unit of one or two tanks teaches the water chemistry cheaply, and the plan can scale once you can keep fish alive for six months.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page plan names the system purpose, tank volume, grow area, species, crops, budget and daily labour hours."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one sentence on what the aquaponics system is for"
                - "List the crops and fish you could eat or sell each week"
                - "Choose a tank volume and grow area that fits the budget"
                - "Estimate the daily minutes the system will need from you"
            - name: Site survey for the tanks and grow beds
              description: |-
                ## Purpose
                Full fish tanks weigh tonnes, pumps need a steady electricity supply and leafy crops bolt under full tropical sun, so the site decides half of what goes wrong. Walking the site for sun hours, prevailing wind, flood risk, ground level and distance to power and water before building avoids moving a full tank later.

                ## Milestones
                1. Sun and shade across the site noted for morning, midday and afternoon.
                2. Flood and runoff paths in heavy rain marked, with the tank pad placed above them.
                3. Distances to the electricity supply and a water source measured.
                4. A sketch of the layout with tanks, beds, sump and walkways drawn to rough scale.

                ## Notes
                Put fish tanks on a level, compacted base or slab. A slight slope that is harmless for beds can crack a loaded tank or make overflows run the wrong way.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated site sketch shows sun, wind, drainage, power and water positions and the chosen spot for tanks and beds."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Photograph the site at eight, noon and four on one sunny day"
                - "Mark where water pools after the next heavy shower"
                - "Measure the distance to the nearest power point and tap"
                - "Sketch the layout of tanks, beds and sump on one page"
            - name: Choosing media bed, raft or NFT
              description: |-
                ## Purpose
                Media beds filled with gravel or expanded clay are forgiving and filter solids, deep water raft beds grow leafy greens fastest at scale, and nutrient film channels are light but unforgiving when the power drops. Comparing the three against your crops, budget and labour stops a costly rebuild after the first season.

                ## Milestones
                1. The three main methods compared on cost, crops suited, filtration needs and power risk.
                2. At least one working system of the preferred type seen in person or on a detailed video tour.
                3. A method or hybrid chosen and the reason recorded in two sentences.
                4. A list of the extra filtration the chosen method needs.

                ## Notes
                Start from the **Purchase decision** template. Many commercial growers run raft beds for greens with a small media bed or mechanical filter ahead of them for solids.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the grow method, the crops it serves and the filtration it requires."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the crops you plan to grow in order of volume"
                - "Compare media bed, raft and NFT on one page"
                - "Visit or watch a full tour of a working system of each type"
                - "Record the chosen method and the filtration it will need"
            - name: Fish tank to grow bed ratio and flow rate
              description: |-
                ## Purpose
                Too many fish for the grow area and ammonia climbs, too few and plants go hungry, and the wrong pump either starves the beds or churns the fish. Working out the volume ratio, the daily feed the beds can absorb and the pump turnover on paper is the cheapest design step in the whole build.

                ## Milestones
                1. Fish tank volume, grow bed area and sump volume written as numbers.
                2. A target stocking density and daily feed amount set from a recognised design guide.
                3. Pump flow chosen to turn the fish tank over at a rate the guide recommends, allowing for head height.
                4. A simple flow diagram showing water from tank to filter to beds to sump and back.

                ## Notes
                Pump curves fall away quickly with height. Read the flow at your actual lift, not the figure printed in large type on the box.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A design sheet lists tank, bed and sump volumes, target stocking, daily feed and pump flow at the real head height."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find a published aquaponics design guide from a university or extension body"
                - "Calculate tank, bed and sump volumes from your layout"
                - "Read the pump curve at your measured head height"
                - "Draw the water flow loop on one sheet"
            - name: Fish keeping and water use permits check
              description: |-
                ## Purpose
                Some countries license fish farming or restrict which species may be kept because escaped fish can invade rivers, and drawing from a well or river can need a water authority permit. Checking with the fisheries division, agriculture ministry and water authority before stocking means the fish you buy are legal to keep and to sell.

                ## Milestones
                1. The fisheries or agriculture office asked whether the unit and species need registration.
                2. Any restrictions on tilapia strains or other species written down.
                3. Water abstraction and wastewater discharge rules confirmed for the site.
                4. Registrations or permits applied for, with reference numbers filed.

                ## Notes
                Ask about discharge too. Draining a tank of nutrient-rich water into a stream can breach environmental rules even on your own land.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every registration or permit the authorities named is held or applied for, with references filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Call the fisheries division and ask what an aquaponics unit must register"
                - "Ask which fish species and strains are allowed on your island"
                - "Confirm water abstraction and discharge rules with the water authority"
                - "Check registrations and permits are still current @recurring(yearly)"
            - name: Source water test before the first fill
              description: |-
                ## Purpose
                Mains water often carries chlorine or chloramine that kills the beneficial bacteria, well water can be very hard or iron-rich, and rainwater has almost no buffering. Testing the water you plan to use before the first fill tells you whether it needs standing, filtering or blending, and what top-up water will do to pH over time.

                ## Milestones
                1. Source water tested for pH, hardness, alkalinity and chlorine or chloramine.
                2. Well or borehole water checked for iron, salinity and contamination if used.
                3. A treatment step chosen for any problem found, such as standing, carbon filtering or blending.
                4. Results filed as the baseline for every later water test.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated source water report covers pH, hardness, alkalinity and chlorine, with a treatment decision for each issue found."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the water utility whether the supply uses chlorine or chloramine"
                - "Test a sample of the source water for pH, hardness and alkalinity"
                - "Send well water to a lab if it will be the main supply"
                - "File the results as the system's water baseline"
            - name: Cycling the biofilter before stocking fish
              description: |-
                ## Purpose
                Nitrifying bacteria take weeks to colonise a new system, and fish added to an uncycled loop sit in rising ammonia and nitrite until they sicken. Cycling first, with a controlled ammonia source and daily tests, means the first fish go into water that can already handle their waste.

                ## Milestones
                1. A cycling method chosen: fishless with an ammonia source, or a very light stocking agreed with an adviser.
                2. Ammonia, nitrite and nitrate tested and logged every day or two through the cycle.
                3. Ammonia and nitrite both falling to near zero within a day of each dose while nitrate rises.
                4. The cycle declared complete and the date written in the system log.

                ## Notes
                Cycling is slower in cool water and faster in tropical heat, but it still commonly takes three to six weeks. A handful of media from a healthy running system can shorten it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A test log shows ammonia and nitrite both at near zero within a day of an ammonia addition, with nitrate present, before any fish are stocked."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a cycling method and an ammonia source"
                - "Ask a local aquaponics grower for a bag of seeded media"
                - "Test ammonia, nitrite and nitrate every second day and log them"
                - "Record the date the cycle is complete"
            - name: Fingerling supplier and first stocking
              description: |-
                ## Purpose
                Fingerlings from a poor hatchery bring disease, stunted growth or mixed sexes that breed in the tank and crowd it out. Choosing a supplier who can show health practices and steady supply, then acclimatising the fish carefully, sets the pace for every harvest after.

                ## Milestones
                1. Two or three hatcheries or suppliers compared on health, size, sex ratio and delivery.
                2. One supplier chosen and the order placed for the planned stocking number.
                3. Fish acclimatised to the system's temperature and pH on arrival and quarantined if advised.
                4. Stocking date, number, average weight and source recorded.

                ## Notes
                Start from the **Vendor** template. Ask whether the fingerlings are all male or mixed sex, since mixed tilapia start breeding within months.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Fish are stocked from a named supplier, with date, count, average weight and source in the stock log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List hatcheries within a day's drive with the fisheries division's help"
                - "Ask each supplier about sex ratio, health checks and size"
                - "Order fingerlings for the planned stocking number"
                - "Float the bags and acclimatise the fish slowly on arrival"
            - name: Water test kit and system logbook
              description: |-
                ## Purpose
                Almost every aquaponics problem shows in the water before it shows in the fish or the leaves, but only if someone tests and writes it down. A reliable liquid test kit, a thermometer and a log with fixed columns turn scattered readings into a trend you and an adviser can read.

                ## Milestones
                1. A liquid test kit bought covering pH, ammonia, nitrite, nitrate and alkalinity.
                2. A thermometer and, if budget allows, a dissolved oxygen meter in place.
                3. A logbook set up with columns for date, time, each reading, feed given and notes.
                4. The first week of readings entered.

                ## Notes
                Start from the **Metrics log** template. Test strips are quick but drift; keep a liquid kit as the reference.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A logbook with fixed columns holds at least seven days of readings taken with an in-date liquid kit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy a liquid test kit and a pond thermometer"
                - "Set up a log with columns for each reading and feed given"
                - "Enter the first reading today with the time"
                - "Check test reagent expiry dates and reorder @recurring(quarterly)"
            - name: Pump, aeration and plumbing parts list
              description: |-
                ## Purpose
                Running one pump and one air pump means two single points of failure, and fittings that are not food safe or UV resistant crack in the sun within a year. A full parts list with spares, chosen for the flow sheet and the climate, keeps the build on budget and the fish alive when a part fails on a holiday.

                ## Milestones
                1. Water pump, air pump, air stones and pipe sizes specified from the flow sheet.
                2. A spare pump and a spare air pump included in the budget.
                3. All tanks and pipes checked as food grade or fish safe and UV stable.
                4. A priced parts list with suppliers ready to order.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A priced parts list includes duty and spare pumps, aeration, pipework and fish safe tanks, with a named supplier for each line."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every pump, pipe, fitting and tank from the design sheet"
                - "Check each tank and liner is food grade and UV stable"
                - "Get prices from two hardware or irrigation suppliers"
                - "Add a spare water pump and air pump to the order"
            - name: Daily fish and system walk
              description: |-
                ## Purpose
                Blocked pipes, failed air stones or fish gasping at the surface can kill a tank in hours, and most losses are found too late by someone who did not look that morning. A five-minute walk at the same time each day, with a short checklist, catches nearly every failure while it can still be fixed.

                ## Milestones
                1. A checklist of ten or fewer daily checks written and posted by the tanks.
                2. The walk done at the same time every morning, including weekends.
                3. Anything abnormal written in the log with the action taken.
                4. A named stand-in who can do the walk when you are away.

                ## Notes
                Start from the **Operational checklist** template. Check water flowing into the beds, bubbles in every tank, fish behaviour, water level and any leaks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The daily checklist is ticked for at least 28 of the last 30 days, with problems and actions written in the log."
                cadence: rolling
              tasks:
                - "Write a daily checklist of no more than ten checks"
                - "Walk the tanks, beds and sump with the checklist @recurring(daily)"
                - "Teach a family member or worker to do the walk"
                - "Note any abnormal sign in the log with what you did"
            - name: Weekly water chemistry routine
              description: |-
                ## Purpose
                Once the system is cycled, ammonia, nitrite, pH and nitrate move slowly enough that a weekly test shows the trend, as long as it happens every week. A fixed test day, the same time of day and every result logged let you see a pH slide or rising nitrite a fortnight before fish or plants complain.

                ## Milestones
                1. A fixed test day and time chosen and kept.
                2. pH, ammonia, nitrite, nitrate and temperature logged each week.
                3. Action levels for each reading written at the top of the log, agreed with an adviser.
                4. Twelve weeks of readings plotted to show the trend.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly tests are logged, each with pH, ammonia, nitrite, nitrate and temperature."
                cadence: rolling
              tasks:
                - "Choose a fixed test day and time for the system"
                - "Test pH, ammonia, nitrite, nitrate and temperature @recurring(weekly:mon)"
                - "Write action levels for each reading at the top of the log"
                - "Plot the last three months of nitrate and pH @recurring(monthly:12)"
            - name: Fish feeding routine and feed records
              description: |-
                ## Purpose
                Feed is the only nutrient input to the whole system and usually the largest running cost, so overfeeding wastes money and fouls the water while underfeeding starves fish and plants alike. Feeding at set times, removing uneaten pellets and writing down every scoop gives you the feed conversion figure that decides whether the fish pay.

                ## Milestones
                1. Feeding times and a feed type suited to the fish size chosen.
                2. Daily feed weighed or measured and written down.
                3. Uneaten feed removed after a set time and appetite noted.
                4. Monthly feed totals compared with fish growth to give a feed conversion ratio.

                ## Notes
                Fish eat less in cooler water and when stressed. A drop in appetite is often the first sign of a water problem, so test before you blame the feed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily feed amounts are logged for a full month and a feed conversion ratio is worked out from it."
                cadence: rolling
              tasks:
                - "Choose a pellet size and protein level suited to your fish size"
                - "Weigh and log the feed given at each meal @recurring(daily)"
                - "Scoop out pellets left uneaten after ten minutes"
                - "Total the month's feed and divide by weight gained @recurring(monthly:28)"
            - name: pH and alkalinity buffering routine
              description: |-
                ## Purpose
                Nitrifying bacteria constantly push pH down, and when buffering runs out pH can crash overnight, stressing fish and stalling the biofilter. A routine of checking carbonate hardness and adding small, measured amounts of a fish safe buffer, as advised, keeps pH in the narrow band where fish, plants and bacteria can all live.

                ## Milestones
                1. A target pH band and alkalinity range agreed with an extension officer or experienced grower.
                2. Fish safe buffers chosen, such as calcium and potassium carbonates used by the supplier's guidance.
                3. Alkalinity checked weekly and any addition recorded with the date and amount.
                4. No pH swing larger than the agreed limit over three months.

                ## Notes
                Change pH slowly. A large single correction can harm fish more than the low pH did. Never use household chemicals in the loop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly alkalinity checks and every buffer addition are logged for three months with pH held inside the agreed band."
                cadence: rolling
              tasks:
                - "Agree a target pH band with an extension officer"
                - "Buy the fish safe buffers the adviser recommends"
                - "Check alkalinity and record any buffer added @recurring(weekly:thu)"
                - "Write the date and amount of each addition in the log"
            - name: Solids removal and filter cleaning schedule
              description: |-
                ## Purpose
                Uneaten feed and fish waste left in the loop settle in beds and pipes, uses up oxygen as it rots and can create pockets that produce toxic gas. A regular schedule for draining the settling tank or swirl filter, rinsing screens and checking bed media keeps the water clear and the roots healthy.

                ## Milestones
                1. Every filter, screen and settling point in the system listed.
                2. A cleaning interval set for each based on how quickly it fills.
                3. Drained solids used on soil crops or composted rather than dumped in a drain.
                4. No blocked pipes or anaerobic smell from beds over three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each filter has a cleaning interval and the cleaning log shows it kept for three months without a blockage."
                cadence: rolling
              tasks:
                - "List every filter, screen and settling point in the loop"
                - "Drain the settler and rinse the screens @recurring(weekly:wed)"
                - "Put the drained solids on the compost or an orchard"
                - "Smell and probe each media bed for dark, sour patches"
            - name: Seedling succession for continuous harvest
              description: |-
                ## Purpose
                Planting a raft bed all at once gives a glut every five weeks and nothing in between, which loses buyers who want lettuce every week. Sowing a fixed number of seedlings on the same day each week, and moving them on a fixed schedule, turns the beds into a conveyor that matches what buyers take.

                ## Milestones
                1. Weekly demand for each crop written as a number of heads or bunches.
                2. A sowing number per week worked out, with a margin for losses.
                3. A nursery area set up for seedlings in plugs or cubes.
                4. Eight weeks of steady weekly harvests within a tenth of the target.

                ## Notes
                Keep the nursery out of the main loop or on a gentle flow. Tiny seedlings dry out or rot if the raft is crowded or flow is strong.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly harvests for eight consecutive weeks are within ten percent of the planned number for each main crop."
                cadence: rolling
              tasks:
                - "Write the weekly number of heads each buyer takes"
                - "Work out how many seeds to sow each week with a loss margin"
                - "Sow the week's seedling trays @recurring(weekly:sun)"
                - "Record transplant and harvest dates for each batch"
            - name: Pump and aeration maintenance calendar
              description: |-
                ## Purpose
                Pump impellers clog with snails and biofilm, air diaphragms wear out and air stones block, usually without warning and often in the hottest week. A maintenance calendar with monthly cleaning and quarterly part checks keeps flow and oxygen steady and tells you when a spare needs ordering.

                ## Milestones
                1. Every pump, air pump and diffuser listed with its install date.
                2. Monthly cleaning steps written for each.
                3. Wear parts such as diaphragms and impellers stocked as spares.
                4. A service record showing each item cleaned on schedule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The service record shows each pump and air pump cleaned monthly for six months and spare wear parts are in stock."
                cadence: rolling
              tasks:
                - "List every pump and air pump with its install date"
                - "Clean the pump intake, impeller and air stones @recurring(monthly:5)"
                - "Inspect air pump diaphragms and pipe joints for wear @recurring(quarterly)"
                - "Order a spare diaphragm kit and impeller"
            - name: Water top-up and evaporation log
              description: |-
                ## Purpose
                Plants transpire and tropical sun evaporates water every day, so the loop needs regular top-ups that can bring chlorine in or shift pH. Logging how much is added and from where shows the real water use, warns of a slow leak, and plans storage for the dry season.

                ## Milestones
                1. A water meter or marked container in place to measure top-ups.
                2. Each top-up logged with volume and source.
                3. Monthly water use worked out per square metre of grow area.
                4. Any jump in use investigated for leaks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of top-up records give a monthly water use figure, with any unexplained rise investigated."
                cadence: rolling
              tasks:
                - "Fit a cheap inline meter or mark a measured top-up container"
                - "Log each top-up with its volume and source"
                - "Total the month's top-up water and compare with last month @recurring(monthly:20)"
                - "Walk every joint and tank wall when use rises"
            - name: Monthly system costs and price per kilo
              description: |-
                ## Purpose
                Aquaponics produce often sells at a premium but costs more to grow than soil crops, mainly because of feed, electricity and seedlings. Adding up those costs every month and dividing by kilos of fish and heads of greens sold shows which product is carrying the system and where the price must sit.

                ## Milestones
                1. Running costs grouped into feed, power, seeds, water, buffers, labour and repairs.
                2. Monthly output recorded in kilos of fish and units of each crop.
                3. A cost per unit worked out for each product.
                4. Prices checked against cost and adjusted where they fall below it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of cost sheets each show a cost per kilo of fish and per unit of each main crop, compared with the selling price."
                cadence: rolling
              tasks:
                - "Set up a sheet with cost groups and monthly output"
                - "Enter the month's receipts and the output sold @recurring(monthly:3)"
                - "Work out the cost per kilo of fish and per head of lettuce"
                - "Ask the agent to summarise six months of costs and flag rising lines"
            - name: Monthly fish sample weighing and biomass
              description: |-
                ## Purpose
                Feed rates, stocking density and harvest dates all depend on how much fish is in the tank, which nobody can judge by eye. Netting and weighing a sample once a month gives an average weight, a total biomass and a growth curve that shows when to harvest and when the tank is getting crowded.

                ## Milestones
                1. A gentle sampling method chosen with a net, bucket and scale.
                2. A sample of fish weighed each month and the average recorded.
                3. Total biomass and density per cubic metre worked out.
                4. A growth curve showing expected harvest date.

                ## Notes
                Handle fish quickly and in water as much as possible, and avoid sampling in the heat of the day.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly sample weights for six months produce a growth curve and a projected harvest date."
                cadence: rolling
              tasks:
                - "Get a landing net, a bucket and a hanging scale"
                - "Weigh a sample of fish early in the morning @recurring(monthly:15)"
                - "Work out total biomass from average weight and count"
                - "Update the projected harvest date on the growth chart"
            - name: Nitrogen cycle and biofilter basics
              description: |-
                ## Purpose
                Every aquaponics decision rests on bacteria turning ammonia into nitrite and then nitrate, and growers who understand it can read a test result instead of panicking. A few weeks of focused study, matched against your own log, turns the cycle from a diagram into something you can manage.

                ## Milestones
                1. One reputable aquaponics manual read on the nitrogen cycle and biofilter surface area.
                2. The roles of temperature, pH and oxygen in nitrification explained in your own words.
                3. Your own cycling log annotated with what was happening at each stage.
                4. Three likely causes of a nitrite spike written down with a response for each.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary explains the nitrogen cycle and lists three nitrite spike causes with responses, checked by an experienced grower."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download a free aquaponics manual from a recognised agriculture body"
                - "Read the chapters on nitrification and biofilter design"
                - "Annotate your cycling log with what each stage showed"
                - "Write three causes of a nitrite spike and what to do"
            - name: Reading plant deficiencies in aquaponics
              description: |-
                ## Purpose
                Pelleted feed supplies plenty of nitrogen but often too little iron, potassium and calcium, so yellowing between veins or burnt leaf edges appear even when fish are thriving. Learning to read these signs and confirm them with a test lets you add only what is missing, in fish safe forms advised by an extension officer.

                ## Milestones
                1. Photos of iron, potassium, calcium and magnesium shortage collected from a trusted guide.
                2. Your own crops inspected and any symptoms matched and photographed.
                3. Fish safe supplements and how to use them confirmed with an adviser.
                4. Any supplement added logged with crop response over the next three weeks.

                ## Notes
                Rule out pH first. Many apparent deficiencies are nutrients locked up by pH sitting too high, not missing from the water.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference sheet of deficiency photos exists and each supplement added is logged with the observed crop response."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect reference photos of common leaf deficiencies"
                - "Photograph any yellowing or scorched leaves in your beds"
                - "Check pH before deciding a nutrient is missing"
                - "Ask an extension officer which supplements are safe for fish"
            - name: Fish behaviour and stress signs
              description: |-
                ## Purpose
                Fish show trouble through behaviour long before they die: gasping at the surface, flashing against walls, clamped fins, sitting on the bottom or ignoring feed. Learning the normal pattern for your species and the common stress signs makes the daily walk a real health check.

                ## Milestones
                1. Normal feeding, swimming and resting behaviour of your species described in a short note.
                2. Common stress and disease signs listed with the likely water or health cause.
                3. A vet or fisheries officer contact saved for fish health questions.
                4. One month of daily walk notes including a behaviour observation.

                ## Notes
                Do not treat fish with salt, medicines or chemicals on a guess. Many treatments harm the biofilter or the plants; ask a vet or fisheries officer first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of stress signs with likely causes is posted by the tanks and a fish health contact is saved."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Watch the fish for ten minutes at feeding and note normal behaviour"
                - "List common stress signs and their likely causes"
                - "Save the number of a vet or fisheries officer who sees fish"
                - "Add a behaviour line to the daily walk checklist"
            - name: Dissolved oxygen and heat in the tropics
              description: |-
                ## Purpose
                Warm water holds less oxygen while fish, bacteria and roots all demand more of it, so a still, hot afternoon or a power cut can drop oxygen to lethal levels fast. Understanding how temperature, stocking and aeration interact helps you set safe densities and know when the system is close to the edge.

                ## Milestones
                1. The link between water temperature and oxygen explained in a short note.
                2. Dissolved oxygen measured at dawn and mid afternoon on a hot day.
                3. A minimum safe oxygen level for your species written in the log.
                4. Stocking or aeration adjusted if dawn readings fall close to that level.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Dawn and afternoon oxygen readings are logged on a hot day and compared with a written minimum for the species."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Borrow or buy a dissolved oxygen meter"
                - "Measure oxygen at dawn and at three in the afternoon"
                - "Write the minimum safe level for your fish in the log"
                - "Add aeration or reduce stocking if dawn readings run low"
            - name: Fish safe pest control for grow beds
              description: |-
                ## Purpose
                Whatever is sprayed on aquaponic plants drips into the fish water, so most ordinary pesticides are off the table and even some organic products harm fish or bacteria. Planning pest control around exclusion, scouting, beneficial insects and products confirmed as fish safe protects the whole loop.

                ## Milestones
                1. The main pests seen on your crops identified and photographed.
                2. Physical controls in place, such as insect netting, sticky traps and hand removal.
                3. Any product considered checked with an extension officer for safety to fish and bacteria.
                4. A scouting record showing pest levels each week for two months.

                ## Notes
                Never spray over open fish tanks. If a product is approved for use, follow its label and keep it away from the water surface.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly scouting is logged for eight weeks and every product used has written confirmation that it is safe for fish."
                cadence: rolling
              tasks:
                - "Photograph pests on your crops and get them identified"
                - "Fit insect netting and yellow sticky traps around the beds"
                - "Scout the undersides of leaves on every bed @recurring(weekly:sat)"
                - "Check any product with an extension officer before it goes near the loop"
            - name: Choosing fish species for the system
              description: |-
                ## Purpose
                Tilapia is the default because it tolerates heat and poor water, but local rules, market demand and price might favour catfish, other freshwater species or ornamental fish. Comparing species on legality, temperature tolerance, growth time, feed and selling price matches the fish to your buyers as well as your tanks.

                ## Milestones
                1. Three candidate species listed with temperature range and time to harvest size.
                2. Legal status of each confirmed with the fisheries division.
                3. Local selling price and demand checked with two buyers or vendors.
                4. A species chosen and the reasons recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three species covers legality, growth, feed and price, with a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three fish species that suit warm water"
                - "Confirm each species is legal to keep with the fisheries division"
                - "Ask two fish vendors what each species sells for"
                - "Record your chosen species and why"
            - name: Crop choice by bed type and season
              description: |-
                ## Purpose
                Lettuce, pak choi, basil and chadon beni thrive on aquaponic nitrogen, while tomatoes, peppers and cucumbers need more potassium and a mature system, and heat makes lettuce bolt in the dry season. Matching each crop to bed type and time of year avoids weeks of bitter, leggy plants nobody will buy.

                ## Milestones
                1. Crops listed as leafy, herb or fruiting with the bed type each suits.
                2. Heat tolerant varieties chosen for the hottest months.
                3. A crop calendar showing what grows in each bed through the year.
                4. Two trial varieties of the main crop grown side by side and compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A twelve-month crop calendar by bed exists and a side-by-side variety trial result is recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Group your crops into leafy, herb and fruiting"
                - "Ask a seed supplier for heat tolerant lettuce varieties"
                - "Draw a twelve-month crop calendar for each bed"
                - "Grow two lettuce varieties side by side and note the winner"
            - name: Hands-on aquaponics training or farm visit
              description: |-
                ## Purpose
                Most aquaponics skills are learned by touching water, fish and roots in a working system, and a day beside an experienced grower saves months of trial and error. Booking a course through an extension service, university or established farm, and arriving with your own questions, gives you a mentor to call later.

                ## Milestones
                1. Training options listed from extension services, universities and working farms.
                2. One course or farm visit booked.
                3. A list of your own system questions taken and answered.
                4. Three changes to your system written down from what you learned.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A course or farm visit is completed and three specific changes to your system are recorded from it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the extension office about aquaponics training in your country"
                - "Book a course or a day visit to a working aquaponics farm"
                - "Write ten questions about your own system to take along"
                - "List three changes you will make after the visit"
            - name: Backup power for pumps and aeration
              description: |-
                ## Purpose
                A heavily stocked tank in warm water can lose its oxygen within an hour of a power cut, and outages after storms or on a grid under strain are common across the region. A battery backup for the air pump, a generator or both, with an alarm, is the single most important insurance an aquaponics grower can buy.

                ## Milestones
                1. The time fish can survive without aeration estimated from stocking and temperature.
                2. Backup options compared: battery air pump, inverter and battery bank, generator.
                3. A backup installed that runs at least the air pumps automatically when power fails.
                4. A power failure alarm or phone alert set up and tested.

                ## Notes
                Air matters more than water flow in a cut. Keep the aeration running first; the water pump can wait if the beds are not drying out.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A tested backup keeps aeration running through a deliberate one-hour power cut and an alarm reaches your phone."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate how long your fish can last without aeration"
                - "Compare battery air pumps, inverters and a generator on cost"
                - "Install the backup and fit a power failure alarm"
                - "Run the backup for an hour with mains power off @recurring(monthly:9)"
            - name: Solar power for the aquaponics unit
              description: |-
                ## Purpose
                Pumps and air pumps run around the clock, so electricity is often the second largest cost after feed, and the Caribbean sun is a strong argument for solar. A sized solar array with batteries can cut the bill and double as backup, but only if the daily load and night hours are measured first.

                ## Milestones
                1. Daily electricity use of every pump and air pump measured or calculated.
                2. Two solar quotes obtained for panels, batteries and inverter sized to that load.
                3. Payback period worked out against current electricity costs.
                4. A decision recorded to install, phase in or wait.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision compares two solar quotes with measured daily load and payback period."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the wattage of every pump and air pump in the system"
                - "Work out daily kilowatt hours including night running"
                - "Get two quotes from solar installers sized to that load"
                - "Record the payback period and your decision"
            - name: Rainwater harvesting for top-up water
              description: |-
                ## Purpose
                Rainwater carries no chlorine and costs nothing, which makes it an ideal top-up if it is stored cleanly and buffered for its low alkalinity. Catching it from the greenhouse or shed roof into covered tanks also gives a reserve for dry spells and water restrictions.

                ## Milestones
                1. Roof area and expected yearly rainfall used to estimate harvestable water.
                2. Gutters, a first flush diverter and a covered tank installed.
                3. Rainwater tested for pH and alkalinity before use.
                4. A share of monthly top-up water supplied from the tank.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A covered rainwater tank with a first flush diverter supplies at least part of the monthly top-up, with its pH tested."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Measure the roof area that could feed a rain tank"
                - "Estimate yearly harvestable water from local rainfall"
                - "Fit gutters, a first flush diverter and a covered tank"
                - "Test the stored rainwater for pH before the first top-up"
            - name: Shade and heat control for tanks and beds
              description: |-
                ## Purpose
                Uncovered tanks can climb past the comfort range of most fish on a dry season afternoon, and lettuce bolts when roots and leaves cook. Shade cloth, insulated or buried tanks and reflective covers lower water temperature, cut algae and keep leafy crops sweet.

                ## Milestones
                1. Water temperature logged at mid afternoon for a week in the hottest month.
                2. Shade cloth of a suitable density fitted over beds and tanks.
                3. Tanks covered or insulated against direct sun.
                4. Afternoon water temperature measured again and the drop recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Afternoon water temperatures are logged before and after shading and show a measured drop."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Log water temperature at three in the afternoon for a week"
                - "Buy shade cloth rated for vegetables and fish tanks"
                - "Cover or paint tank walls to block direct sun"
                - "Log afternoon temperatures again after shading"
            - name: Constant height tank and sump upgrade
              description: |-
                ## Purpose
                Systems that pump straight from the fish tank to the beds let the tank level swing with every bell siphon cycle, and a stuck siphon can drain fish water onto the ground. Moving to a constant height fish tank with a sump at the lowest point keeps the fish level steady and puts the pump where a failure does least harm.

                ## Milestones
                1. The current layout and its failure points drawn.
                2. A sump design sized to hold the volume that drains back when the pump stops.
                3. Plumbing changed so the fish tank stays at constant height.
                4. A pump off test done showing no overflow and no fish tank drop.

                ## Notes
                Size the sump for drain-back. When the pump stops, every pipe and bed above it empties into the sump, and an undersized one floods.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pump off test shows the fish tank level unchanged and the sump holding all drain-back without overflow."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Draw the current plumbing and mark what fails if the pump stops"
                - "Size a sump to hold the full drain-back volume"
                - "Replumb so the fish tank overflows by gravity to the beds"
                - "Switch the pump off and check every level for an hour"
            - name: Alternative fish feed trials
              description: |-
                ## Purpose
                Imported pellet feed prices follow world grain markets and shipping costs, and many growers look at duckweed, black soldier fly larvae or moringa leaf to stretch it. A small, controlled trial with records shows whether an alternative really saves money without slowing growth or fouling the water.

                ## Milestones
                1. One alternative feed chosen and a small production set-up built.
                2. A trial group fed a set share of the alternative while a control group gets pellets only.
                3. Growth, water quality and feed cost compared after eight weeks.
                4. A decision recorded on whether to scale the alternative.

                ## Notes
                Keep pellets as the main ration while trialling. Most alternatives are low in some nutrients and work as a supplement, not a replacement.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An eight-week trial compares growth, water quality and cost between alternative and pellet-fed groups, with a scale-up decision."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose one alternative feed to trial"
                - "Set up a small duckweed tank or larvae bin"
                - "Feed a trial tank the alternative alongside pellets for eight weeks"
                - "Compare growth and cost against the pellet-only tank"
            - name: Scaling to a commercial aquaponics unit
              description: |-
                ## Purpose
                Growing from a hobby unit to one that pays a wage changes everything: the grow area, labour, water and power, food safety and the buyers who must take product every week. A scale-up plan tested against real cost records and signed buyer interest stops an expensive build that produces more than anyone will buy.

                ## Milestones
                1. Twelve months of cost and yield records from the current system summarised.
                2. Weekly volumes agreed in principle with at least two buyers.
                3. A scaled design with grow area, tanks, labour and power costed.
                4. Funding route identified and a go or no go decision recorded.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written scale-up plan cites twelve months of records and two buyer commitments and records a go or no go decision."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Summarise a year of costs, yields and sales from the current unit"
                - "Ask two buyers what weekly volumes they would commit to"
                - "Cost a scaled design including labour and power"
                - "Ask the agent to draft the scale-up plan from your records"
            - name: Water sensors and remote alerts
              description: |-
                ## Purpose
                Low cost sensors for temperature, pH, water level and dissolved oxygen can send an alert to your phone at three in the morning when something fails, which matters most for growers who live away from the system. Choosing sensors that are accurate enough and easy to calibrate is the difference between a useful alarm and constant false alerts.

                ## Milestones
                1. The readings worth monitoring continuously chosen, usually oxygen, level and temperature.
                2. Two sensor systems compared on accuracy, calibration, connectivity and cost.
                3. A system installed with alert thresholds set.
                4. Sensor readings checked against the manual test kit each month.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Installed sensors send phone alerts at set thresholds and monthly checks show them within agreed tolerance of the test kit."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose which readings need a remote alert"
                - "Compare two sensor kits on accuracy and calibration needs"
                - "Install the sensors and set alert thresholds"
                - "Check sensor readings against the test kit @recurring(monthly:22)"
            - name: First fish harvest and processing day
              description: |-
                ## Purpose
                Harvest day sets the reputation of your fish, and fish that are stressed, poorly chilled or cleaned without hygiene lose both quality and buyers. Planning the purge, the harvest, the chilling and the cleaning in advance, and arranging buyers before the net goes in, makes the first harvest a sale rather than a freezer problem.

                ## Milestones
                1. Buyers lined up for the planned harvest weight before harvest day.
                2. Fish purged in clean water and feed withheld as advised.
                3. Ice, clean tables, knives and bags ready, with any processing rules checked with the health authority.
                4. Harvest weight, number and sales recorded, and the tank restocked.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first harvest is processed and sold with weight, count, buyers and income recorded and the tank restocked within two weeks."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm buyers and quantities two weeks before harvest"
                - "Ask the health authority what fish processing rules apply"
                - "Prepare ice, cleaning tables, knives and bags"
                - "Record harvest weight, count and sales"
            - name: First vegetable sale to a regular buyer
              description: |-
                ## Purpose
                Aquaponic greens grown without soil are clean, consistent and often pesticide free, which restaurants, health food shops and supermarkets value if the supply is reliable. Landing a first regular buyer with an agreed weekly order turns a system that grows food into one that earns.

                ## Milestones
                1. Three possible buyers approached with samples.
                2. Product, pack size and price agreed with at least one buyer.
                3. The first delivery made on the agreed day.
                4. Four weeks of deliveries completed and the buyer's feedback recorded.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One buyer has received four consecutive weekly deliveries at an agreed price, with feedback noted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List three restaurants or shops that buy fresh greens"
                - "Take a sample bag of lettuce and herbs to each"
                - "Agree pack size, price and delivery day with one buyer"
                - "Note the buyer's feedback after four deliveries"
            - name: Storm shutdown and restart plan for the system
              description: |-
                ## Purpose
                Hurricanes bring days without power, flying debris and floodwater, and shade cloth or tank lids become sails in strong wind. A written plan for an early fish harvest or reduced stocking, securing covers and tanks, running backup aeration and restarting the biofilter afterwards decides whether the system survives the season.

                ## Milestones
                1. A decision rule written for when to harvest or reduce fish ahead of a storm.
                2. Steps to remove shade cloth, secure tanks and protect pumps listed in order.
                3. Fuel or battery reserves for at least three days of aeration planned.
                4. A restart checklist for testing water and checking fish after the storm.

                ## Notes
                Start from the **Risk register** template. Keep the plan short enough to run in the hours before a storm, with names beside each task.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written storm plan for the system has a harvest rule, securing steps, three days of aeration reserve and a restart checklist."
                cadence: cyclic
              tasks:
                - "Write the rule for harvesting or reducing fish before a storm"
                - "List the steps to take down shade cloth and secure tanks"
                - "Plan fuel or battery for three days of aeration"
                - "Review the storm plan before hurricane season starts @recurring(yearly)"
            - name: School or community open day at the system
              description: |-
                ## Purpose
                Aquaponics draws visitors because it shows fish, bacteria and plants working together, and a planned open day can win customers, students and support from local agencies. Preparing the route, safety rules and a short explanation means visitors learn something and leave with your number.

                ## Milestones
                1. A date chosen and invitations sent to schools, buyers or the community.
                2. A safe visitor route set with rules about hands in tanks and children near water.
                3. A five-minute explanation and simple signs prepared.
                4. Visitor numbers and new contacts recorded after the day.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An open day is held with a safe route and signs, and visitor numbers and new contacts are recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose a date outside harvest week"
                - "Mark a safe route that keeps hands out of the fish tanks"
                - "Make four simple signs explaining fish, filter, bacteria and plants"
                - "Record visitor numbers and contacts after the day"
            - name: Annual system teardown and deep clean
              description: |-
                ## Purpose
                Over a year, sludge builds up in sumps and pipes, roots clog raft holes and media beds compact, and slowly the system holds less water and less oxygen. A planned yearly teardown, done bed by bed so the biofilter survives, restores flow and finds cracked fittings before they fail.

                ## Milestones
                1. A quiet week chosen when fish stocks and sales are lowest.
                2. Beds, pipes and sump cleaned one section at a time, never all at once.
                3. Cracked fittings, worn liners and tired raft boards replaced.
                4. Water tests show the system stable within a week of the clean.

                ## Notes
                Never scrub or sterilise all the media together. That removes the bacteria that keep the fish alive, and the system has to cycle again.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each section is cleaned on a dated schedule and water tests show ammonia and nitrite at near zero a week after."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Pick a week with low fish stock and low sales"
                - "List each bed, pipe run and sump to clean in sequence"
                - "Replace cracked fittings and worn raft boards"
                - "Book the yearly teardown week on the farm calendar @recurring(yearly)"
            - name: Backyard unit for household food
              description: |-
                ## Purpose
                A small unit beside the house can supply a family with salad greens, herbs and a few fish a month, but it has to fit around jobs, school runs and holidays. Keeping it small, low maintenance and simple to hand over to a neighbour makes it a food source rather than a worry.

                ## Milestones
                1. A system size chosen that one person can run in fifteen minutes a day.
                2. A crop list set from what the household actually eats each week.
                3. Fish stocked at a light density that tolerates a missed day.
                4. A neighbour or relative shown the daily checks for holidays.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The family unit runs for three months on fifteen minutes a day, supplying greens weekly with a trained stand-in named."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the greens and herbs the household eats each week"
                - "Choose a tank and bed size for fifteen minutes a day"
                - "Stock fish lightly so a missed feed does no harm"
                - "Show a neighbour how to feed and check the system"
            - name: School aquaponics teaching unit
              description: |-
                ## Purpose
                Schools use aquaponics to teach biology, chemistry and agricultural science with real fish and plants, but units often collapse over the long holidays when nobody is feeding. Setting up a rota, simple test records and a holiday plan with the teacher keeps the system alive and useful for SBA projects and lessons.

                ## Milestones
                1. A system size agreed with the school that suits the space and the budget.
                2. A student rota for daily checks during term time.
                3. A named adult responsible for the system over holidays.
                4. Lesson links listed for biology, chemistry and agricultural science.

                ## Notes
                Keep the stocking light and the backup simple. A school unit must survive weekends and power cuts with nobody on site.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A school unit runs through one full term and one holiday with a student rota and a named holiday caretaker."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Meet the science teacher to agree the system size and site"
                - "Draw up a student rota for daily feeding and checks"
                - "Name the adult who runs the system in holidays"
                - "List lessons the system can support in each subject"
            - name: Running the system around an off-farm job
              description: |-
                ## Purpose
                Many growers run aquaponics alongside another job, which means the system is unattended for ten or more hours a day. Moving checks to before and after work, automating the risky parts and having someone nearby on call lets a part-time grower sleep at night.

                ## Milestones
                1. Morning and evening routines written to fit before and after work.
                2. Feed dispensing on a timer or automatic feeder where it suits the fish.
                3. Remote alerts or a neighbour on call for daytime failures.
                4. One month run on the part-time routine without a fish loss.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written part-time routine has run for one month with automatic feeding or alerts in place and no fish losses."
                cadence: rolling
              tasks:
                - "Write a twenty-minute morning and evening routine"
                - "Fit a timer feeder for the midday feed"
                - "Ask a neighbour to be on call for daytime alerts"
                - "Review fish losses and alarms after the first month"
            - name: Hotel or resort showcase aquaponics unit
              description: |-
                ## Purpose
                Hotels and eco resorts like aquaponics because guests can see where their salad comes from, but kitchens still need a steady volume and the unit must look tidy every day. Agreeing what the kitchen will take, who maintains the unit and how it is shown to guests protects both the supply and the hotel's image.

                ## Milestones
                1. The kitchen's weekly volumes and preferred crops agreed with the chef.
                2. Responsibility for daily care, cleaning and repairs set out in writing.
                3. Guest viewing area designed so the unit looks clean and is safe.
                4. Weekly harvest forecasts sent to the kitchen for two months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written arrangement with the hotel covers volumes, care duties and guest access, and weekly forecasts have run for eight weeks."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Meet the chef to agree crops and weekly volumes"
                - "Write who cleans, feeds and repairs the unit"
                - "Plan a tidy guest viewing area with signs"
                - "Send the week's harvest forecast to the kitchen @recurring(weekly:tue)"
            - name: Recovering after a fish die-off
              description: |-
                ## Purpose
                A sudden die-off from a power failure, ammonia spike or disease is a crisis for the fish, the bacteria and the plants at once, and the wrong response can finish what the cause started. A calm sequence of removing dead fish, testing, finding the cause with an adviser and restocking only when the water is stable limits the loss.

                ## Milestones
                1. Dead fish removed and counted and the time noted.
                2. Water tested immediately and the results logged.
                3. Probable cause identified with a vet or fisheries officer.
                4. Restocking done only after a week of stable test results.

                ## Notes
                Start from the **Remediation plan** template. Keep a few dead fish chilled, not frozen, in case the vet or lab wants them.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A remediation record shows losses counted, water tested, a likely cause recorded with an adviser and restocking after a week of stable results."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Remove and count dead fish and note the time"
                - "Test ammonia, nitrite, pH, oxygen and temperature at once"
                - "Call a vet or fisheries officer with the readings"
                - "Restock only after a week of stable water tests"
            - name: Food safety plan for aquaponic produce
              description: |-
                ## Purpose
                Fish water can carry bacteria that contaminate leaves if splashed or handled carelessly, and supermarkets and hotels increasingly ask suppliers how produce is kept safe. A written plan covering water contact, hand hygiene, harvest tools, warm-blooded animal exclusion and water tests gives buyers confidence and prepares for an audit.

                ## Milestones
                1. Risks listed for water splash, pests, birds, hands and tools.
                2. Rules written for harvesting so leaves do not touch fish water.
                3. Birds, rodents and pets kept out of the system.
                4. Periodic water tests for indicator bacteria arranged with a lab.

                ## Notes
                Never use manure or animal waste in an aquaponic loop. Fish waste is cold-blooded waste; warm-blooded animal waste carries different and more serious risks.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written food safety plan covers splash, hygiene, tools, animal exclusion and water testing, with at least one lab result on file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every way fish water could reach harvested leaves"
                - "Write harvest rules for gloves, clean tools and no splash"
                - "Net the system against birds and keep pets out"
                - "Book a water test for indicator bacteria with a lab"
            - name: Decoupled aquaponics with a separate nutrient loop
              description: |-
                ## Purpose
                Fish prefer near neutral pH while plants take up nutrients best a little lower, and a single loop forces a compromise. Decoupled systems send fish water one way to the plants and supplement it there, so each side can run at its own best conditions, at the cost of extra tanks and more management.

                ## Milestones
                1. The trade-offs of decoupled systems studied from published research.
                2. A design drawn with a one-way flow from fish to a separate plant loop.
                3. Supplements and pH targets for the plant side agreed with an adviser.
                4. Yields compared between coupled and decoupled beds over two crops.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Yields from coupled and decoupled beds are recorded side by side over two crop cycles with a written conclusion."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Read two published studies on decoupled aquaponics"
                - "Draw a one-way flow design for a trial bed"
                - "Agree plant side pH and supplements with an adviser"
                - "Compare yields between the trial and normal beds"
            - name: In-house fingerling breeding
              description: |-
                ## Purpose
                Buying fingerlings for every batch costs money and brings in disease risk, and a reliable supply is not always available on smaller islands. Breeding your own needs separate brood tanks, careful records and, for tilapia, a way to manage mixed sex fish, which is why it suits growers with steady systems already.

                ## Milestones
                1. Any licence needed for breeding fish confirmed with the fisheries division.
                2. Brood tanks and a nursery set up apart from the grow-out system.
                3. Broodstock selected and records kept for spawning and survival.
                4. A batch of home-bred fingerlings raised to stocking size.

                ## Notes
                Sex reversal using hormones is regulated in many countries and may affect buyer acceptance. Ask the fisheries division before considering it.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A batch of home-bred fingerlings reaches stocking size with spawning and survival records kept."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the fisheries division whether breeding needs a licence"
                - "Set up brood and nursery tanks separate from grow-out"
                - "Select healthy broodstock and start a spawning log"
                - "Raise one batch to stocking size and record survival"
            - name: Feed rate ratio and nutrient balance model
              description: |-
                ## Purpose
                Experienced designers balance a system by grams of feed per square metre of grow area per day, which ties fish numbers directly to the crops they can support. Building a simple model from your own feed, nitrate and yield records lets you predict how changes in stocking or crops will play out before you make them.

                ## Milestones
                1. Daily feed and grow area combined into a feed rate ratio for the system.
                2. Nitrate trends compared with the ratio over three months.
                3. A spreadsheet model predicting nitrate from feed and planted area.
                4. One planned change tested against the model's prediction.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spreadsheet model predicts nitrate from feed and grow area, and one change has been compared with its prediction."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work out grams of feed per square metre of grow area per day"
                - "Plot three months of nitrate against the feed rate ratio"
                - "Build a simple spreadsheet that predicts nitrate"
                - "Test one stocking or planting change against the prediction"
---

# Aquaponics Systems

Aquaponics Systems is for anyone running fish tanks and grow beds on one shared water loop, from a backyard unit feeding a family to a commercial greenhouse selling lettuce and tilapia every week. The projects start with foundations: a plan, a site, a system type, sizing, permits, source water, cycling the biofilter and the first fish. Then come the operating routines, the skills of reading water, fish and plants, upgrade decisions such as backup power and solar, dated events like the first harvest, situations from schools to hotel showcase units, and specialist work on decoupled loops, fish breeding and nutrient modelling.

What repeats is the daily walk and feed record, weekly water tests, solids cleaning and seedling sowing, monthly maintenance, fish weighing and costing, and yearly checks of permits, storm plans and a full teardown. The Purchase decision, Metrics log, Vendor, Operational checklist, Risk register and Remediation plan templates pair with the projects that point to them. Fish medicines, water treatments and any product added to the loop are chosen with a vet or extension officer and used by the label, never from a dose in this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
