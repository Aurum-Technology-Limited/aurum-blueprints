---
id: agriculture.greenhouse-and-shade-house-production
name: Greenhouse and Shade House Production
description: "Covered growing run as a business in the tropics: the right structure and wind rating, cool air through the house, daily drip fertigation checks, clean entry and nets, rotation and cost per kilo."
category: business
version: 1.0.0
tags: [agriculture, greenhouse-and-shade-house-production, small-business, protected-agriculture, shade-house, fertigation, greenhouse-tomato, sweet-pepper]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - metrics-log
    - operational-checklist
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Greenhouse and Shade House Production
          description: "Growing under cover in the tropics: structure choice and wind ratings, ventilation, drip fertigation, crop rotation and keeping pests out."
          projects:
            - name: Choosing between greenhouse, shade house and net house
              description: |-
                ## Purpose
                A plastic-roofed greenhouse keeps rain off tomato leaves but can run 8 to 10 degrees hotter than outside by midday, while a shade house or insect net house stays cooler but lets rain and some pests through. Picking the type to suit the crop, the district's rainfall and the budget is the decision every later cost depends on, so make it on paper before talking to a builder.

                ## Milestones
                1. The main crop for the first three years named, with its temperature and rain tolerance noted.
                2. Greenhouse, shade house and insect net house compared on cost per square metre, heat and pest exclusion.
                3. At least one working structure of each shortlisted type visited and its owner questioned.
                4. A structure type chosen and the reasons written in the house record book.

                ## Notes
                Ask growers what they would build if starting again; the answer is often a taller, better-ventilated house than the one they own.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision naming the structure type and the main crop, backed by at least two site visits to working houses."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the crop you plan to grow under cover for the next three years"
                - "Ask the extension office for two growers running covered structures nearby"
                - "Visit both houses at midday and note how hot it feels inside"
                - "Record the structure type you chose and why in the record book"
            - name: Site and orientation survey for a covered structure
              description: |-
                ## Purpose
                Houses fail where water ponds under the footings, where hills block the morning sun or where the prevailing trade wind hits the long side flat on. A careful survey of slope, drainage, sun path and wind direction lets you place and turn the structure so it ventilates well and survives a blow, and it costs an afternoon rather than a rebuild.

                ## Milestones
                1. The prevailing wind direction confirmed from neighbours, a flag or local weather records.
                2. Slope and drainage checked after heavy rain, with wet spots marked on a sketch.
                3. Sun and shade from trees and buildings noted at morning, noon and afternoon.
                4. A final footprint and ridge orientation pegged out and drawn on the house map.

                ## Notes
                In most of the region the ridge is set to run with the prevailing wind so the roof vent sits on the sheltered side, but follow the builder's design for the model you buy.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pegged footprint and a sketch showing ridge direction, wind, drainage and shade, signed off before any footings are dug."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Tie a ribbon to a tall pole on the site to watch the wind for a week"
                - "Walk the site after the next heavy shower and mark standing water"
                - "Note shade from trees or buildings at three times of day"
                - "Peg out the footprint and draw it with the ridge direction"
            - name: Wind rating and anchoring specification
              description: |-
                ## Purpose
                Structures sold in the region range from light frames rated for a stiff breeze to steel houses with a stated design wind speed and deep footings. Knowing the rating, what the anchors are and how the covering is meant to be released before a storm decides whether a tropical storm costs you a sheet of plastic or the whole house.

                ## Milestones
                1. The design wind speed for each quoted structure obtained in writing from the supplier.
                2. Footing depth, anchor type and post spacing listed for each quote.
                3. The supplier's method for removing or rolling the cover before a storm understood.
                4. A minimum wind rating and anchoring standard agreed and written into the purchase order.

                ## Notes
                Ask for the rating with the cover on and with it off; many frames survive only once the plastic is down. A structural engineer or the extension engineering unit can check a design you are unsure of.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written wind rating and anchoring specification included in the purchase order for the structure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Email each supplier asking for the design wind speed of their structure"
                - "List footing depth, anchor type and post spacing from each quote"
                - "Ask how the cover is released or rolled down before a storm"
                - "Write your minimum wind rating into the purchase order"
            - name: Costed plan for a first covered structure
              description: |-
                ## Purpose
                Building a 500 square metre house with drip and fertigation can cost many times an open-field plot of the same size, and the payback rests on yield per square metre, price and how many crops you fit in a year. Building the numbers before you borrow shows whether the house pays for itself in three seasons or ten, and gives a lender something to read.

                ## Milestones
                1. Capital costs listed for structure, covering, drip, tanks, pump and benches or bags.
                2. Running costs per crop estimated for seedlings, fertiliser, crop protection, labour and power.
                3. Expected yield per square metre and a cautious price taken from growers and buyers.
                4. A simple payback period and a break-even price per kilo calculated.

                ## Notes
                Use a yield figure from a local grower, not a brochure. First crops under cover usually come in well below the advertised number while you learn the house.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page costed plan showing capital, running costs, a conservative yield, break-even price per kilo and payback period."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect written quotes for structure, covering, drip and water tanks"
                - "Ask two covered growers what yield per square metre they get"
                - "Ask the agent to draft a payback table from your costs and yield figures"
                - "Work out the break-even price per kilo and compare it with market prices"
            - name: Covering film and shade net selection
              description: |-
                ## Purpose
                UV-stabilised film, diffused film, anti-drip film, 30 or 50 percent shade cloth and 50-mesh insect net all behave differently under tropical sun, and the wrong one cooks the crop or lets whitefly straight in. Choosing the covering by crop, light level and pest pressure, with the expected life in years, stops a costly swap after the first crop.

                ## Milestones
                1. The roof and side covering options listed with their light transmission, UV life and price.
                2. Shade percentage chosen for the crop with a grower or extension officer.
                3. Insect net mesh size chosen for the pests you expect, with its effect on airflow noted.
                4. Covering ordered from a supplier who states the warranty in years.

                ## Notes
                Start from the **Purchase decision** template. Finer insect net keeps out more thrips but slows air movement, so a finer mesh usually needs more vent area.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A purchase decision recording film type, shade percentage and net mesh, with the warranty period from the supplier."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the film, shade cloth and insect net options your supplier carries"
                - "Ask an extension officer which shade percentage suits your crop"
                - "Check the stated UV life and warranty for each covering"
                - "Order the covering and file the warranty in the record book"
            - name: Structure supplier and installer vetting
              description: |-
                ## Purpose
                Some builders erect sound, well-anchored houses and stand behind them, while others vanish after the last bolt. Checking references, past jobs that have been through a rainy season, the warranty and who repairs storm damage protects the largest single cheque most covered growers will ever write.

                ## Milestones
                1. Three suppliers or installers contacted with the same specification.
                2. At least two past installations per shortlisted builder visited or called.
                3. Warranty terms, payment stages and the after-storm repair offer compared side by side.
                4. One builder chosen with a written contract that names the specification and payment stages.

                ## Notes
                Start from the **Vendor** template. Pay in stages against visible progress rather than in full up front.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed contract with one builder, specifying the structure, wind rating, warranty and staged payments, after reference checks on two past jobs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send the same written specification to three structure suppliers"
                - "Call two past customers of each shortlisted builder"
                - "Compare warranty, payment stages and storm repair terms in a table"
                - "Sign a contract that names the specification and staged payments"
            - name: Water supply and storage sizing for the house
              description: |-
                ## Purpose
                Under cover, a crop of tomatoes or peppers can draw several litres per plant per day at peak, and the house gets no rain on the roots at all, so a dry spell or a mains cut stops production within days. Sizing storage to cover at least a week of peak demand, and testing the water for salts, keeps fertigation running when the supply does not.

                ## Milestones
                1. Peak daily water demand for the house estimated from plant numbers and grower figures.
                2. Water source tested for salinity, pH and hardness at a lab.
                3. Tank storage sized to cover at least seven days of peak demand.
                4. Tanks installed and connected with a filter before the fertigation head.

                ## Notes
                High bicarbonate or salt in bore water changes how the fertiliser recipe behaves. Bring the water test to whoever helps you plan fertigation.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A water test result on file and installed storage covering seven days of estimated peak demand for the house."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count the planned plants and estimate peak litres per day with a grower"
                - "Take a water sample to a lab for salinity, pH and hardness"
                - "Size tanks to hold at least seven days of peak demand"
                - "Fit a filter between the tanks and the fertigation head"
            - name: First crop and buyer for the house
              description: |-
                ## Purpose
                Tomatoes, coloured sweet peppers, seedless cucumbers and seedlings are the usual covered crops, but each needs a buyer willing to pay for the cleaner, more uniform fruit a house produces. Agreeing the crop with a supermarket buyer, hotel chef or wholesaler before planting means the first harvest has somewhere to go at a price that covers the structure.

                ## Milestones
                1. Three possible buyers asked which covered crops they are short of and when.
                2. Their size, colour and volume needs written down per week.
                3. One crop and variety chosen to match the strongest buyer.
                4. A verbal or written understanding on weekly volume and price range recorded.

                ## Notes
                Coloured sweet peppers often command a premium but take longer to first pick than green; plan cash for the wait.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded crop and variety choice linked to a named buyer, with the weekly volume and price range they indicated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List three buyers who might take produce from a covered house"
                - "Ask each which crops, sizes and colours they cannot get reliably"
                - "Pick the crop and variety that fits the strongest buyer"
                - "Write the agreed weekly volume and price range in the record book"
            - name: House map and protected crop record book
              description: |-
                ## Purpose
                Problems under cover start in one corner, one bay or one drip line, so records kept for the whole house hide where things go wrong. Numbering bays and rows on a map and keeping one record book for planting, fertigation, scouting and harvest by bay makes every later decision traceable and answers buyers who ask where produce came from.

                ## Milestones
                1. A map of the house with each bay and row numbered.
                2. A record book or spreadsheet set up with pages for planting, fertigation, scouting, harvest and costs.
                3. Variety, planting date and seedling source recorded for the current crop by bay.
                4. A week of entries completed without gaps.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbered house map and a record book with at least one full week of entries by bay."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw the house and number every bay and row"
                - "Set up record pages for planting, fertigation, scouting, harvest and costs"
                - "Record variety, planting date and seedling source for each bay"
                - "Pin a copy of the map by the door of the house"
            - name: Construction and handover inspection
              description: |-
                ## Purpose
                Loose bolts, short footings, sagging gutters and torn net at the door are far easier to fix while the builder is still on site and unpaid. A structured walk-round at handover, with photos and a snag list, gets the house you paid for and gives a dated record if a warranty claim follows a storm.

                ## Milestones
                1. Footings, anchors and bracing inspected against the contract before the final payment.
                2. Covering tension, gutters, doors and net seals checked bay by bay.
                3. A dated snag list agreed with the builder and every item cleared.
                4. Handover photos, drawings and warranty filed in the record book.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed handover with a cleared snag list, dated photos and the warranty filed before the final payment is released."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a handover checklist from the contract specification"
                - "Photograph footings and anchors before they are backfilled"
                - "Walk every bay with the builder and agree a snag list"
                - "Release the final payment only once the snag list is cleared"
            - name: Daily climate readings inside the house
              description: |-
                ## Purpose
                Midday temperatures above about 32 degrees cause tomato and pepper flowers to drop and pollen to fail, and humidity that stays high overnight brings leaf mould and grey mould. A max and min thermometer with a humidity reading taken at the same time each day shows when the house is too hot or too damp, long before the crop shows it.

                ## Milestones
                1. A max and min thermometer and hygrometer hung at crop height in the middle of the house.
                2. Readings taken and logged at the same time every day for a month.
                3. Days above the crop's comfort range highlighted and linked to vent or shade changes.
                4. A monthly summary of hot and humid days kept with the crop records.

                ## Notes
                Start from the **Metrics log** template. Shade the sensor from direct sun or it will read several degrees high.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily max, min and humidity readings logged, with every out-of-range day linked to an action taken."
                cadence: rolling
              tasks:
                - "Hang a shaded max and min thermometer at crop height mid-house"
                - "Read and reset the thermometer and log temperature and humidity @recurring(daily)"
                - "Highlight days above the crop's comfortable range in the log"
                - "Summarise hot and humid days at the end of each month"
            - name: Ventilation and curtain routine for hot days
              description: |-
                ## Purpose
                Roll-up sides, roof vents and doors are the main cooling tools in most Caribbean houses, and they only work when someone opens them early and closes them before rain or at night. A written routine for when to open, how far and when to close keeps air moving through the crop and protects the cover in squalls.

                ## Milestones
                1. Opening and closing times for sides and vents written down for dry and wet season days.
                2. A rule agreed for closing sides ahead of heavy rain and strong gusts.
                3. Whoever runs the house trained on the routine and the reasons for it.
                4. A month of vent changes logged next to the temperature readings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A posted ventilation routine, followed and logged for a month, with any day above the crop's range showing a vent action."
                cadence: rolling
              tasks:
                - "Write opening and closing times for sides and vents by season"
                - "Agree when sides must come down ahead of rain or gusts"
                - "Walk through the routine with whoever covers the house for you"
                - "Check curtain ropes, rollers and vent arms for wear @recurring(weekly:mon,thu)"
            - name: Daily fertigation run with EC and pH checks
              description: |-
                ## Purpose
                Drip fertigation feeds the crop every day, so a blocked line, an empty stock tank or a drifting solution shows up as stressed plants within a week. Checking that every bay is dripping each day, and measuring EC and pH of the drip and the runoff twice a week, catches a fault while it is still cheap to fix.

                ## Milestones
                1. A calibrated EC meter and pH meter in use, with calibration dates recorded.
                2. Target EC and pH ranges for the crop stage agreed with an adviser and posted at the fertigation head.
                3. Drip and runoff readings logged twice a week for a full crop.
                4. Every reading outside the range followed by a written action.

                ## Notes
                Get the fertiliser recipe and target ranges from the extension officer, the fertiliser supplier's agronomist or a crop adviser, and follow product labels. This project is about running and recording the system, not setting doses.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full crop of twice-weekly drip and runoff EC and pH readings logged, with an action recorded for every out-of-range result."
                cadence: rolling
              tasks:
                - "Calibrate the EC and pH meters and note the date"
                - "Walk each bay and confirm drippers are running @recurring(daily)"
                - "Measure EC and pH of drip and runoff and log them @recurring(weekly:tue,fri)"
                - "Post the agreed target ranges beside the fertigation head"
            - name: Weekly sticky trap and leaf scouting under cover
              description: |-
                ## Purpose
                Whitefly, thrips and mites multiply fast in the warm, sheltered air of a house, and the viruses they carry can take a whole tomato crop. Yellow and blue sticky traps counted weekly, plus a set walk turning leaves in every bay, show the first arrivals and which door or net tear they came through.

                ## Milestones
                1. Yellow and blue sticky traps placed at the doors, the centre and each corner.
                2. A fixed scouting walk that checks a set number of plants in every bay.
                3. Weekly trap counts and leaf findings logged by bay.
                4. Rising counts reported to the extension officer with photos the same week.

                ## Notes
                Any control decision, including products and rates, belongs with the extension officer and the label. The Integrated Pest Management area covers thresholds and controls in depth.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks of trap counts and bay scouting logged, with any rising trend reported to the extension officer."
                cadence: rolling
              tasks:
                - "Hang yellow and blue sticky traps at the doors and each corner"
                - "Count traps and turn leaves in every bay, logging the results @recurring(weekly:wed)"
                - "Replace traps once they are a third covered"
                - "Photograph anything new and send it to the extension officer"
            - name: Entry hygiene and double-door discipline
              description: |-
                ## Purpose
                Most pests and diseases walk into a house on people, tools and seedlings. A double-door porch kept shut, a footbath, clean overalls for the house and a rule that visitors come in only after the house has been worked keep out problems that no spray can fully fix once inside.

                ## Milestones
                1. A double-door porch working, with one door always shut before the other opens.
                2. A footbath and hand wash station at the entry, refreshed on a schedule.
                3. House rules for workers, visitors and tools posted at the door.
                4. Incoming seedlings inspected and held before they go into the house.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A working double door, a dated footbath refresh log and posted entry rules, with a month of compliance checked."
                cadence: rolling
              tasks:
                - "Write and post entry rules for workers, visitors and tools"
                - "Set up a footbath and hand wash at the porch"
                - "Refresh the footbath following the product label @recurring(weekly:sat)"
                - "Inspect incoming seedlings on a bench outside before planting"
            - name: Monthly structure and covering maintenance round
              description: |-
                ## Purpose
                Small faults such as a net tear, a loose wiggle wire or a cracked gutter are a few minutes' work this month and a lost cover or a whitefly outbreak next month. A fixed walk round the frame, covering, gutters, doors and anchors keeps the house sound and gives early warning before storm season.

                ## Milestones
                1. A maintenance checklist covering frame, bolts, cover, net, gutters, doors and anchors.
                2. Repair tape, wiggle wire, spare net and bolts kept in stock.
                3. Monthly rounds completed and faults logged with the date fixed.
                4. A list of jobs for the builder or welder kept and cleared before the storm season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of maintenance rounds logged, with every fault dated as found and fixed."
                cadence: rolling
              tasks:
                - "Write a structure checklist from footings to roof vent"
                - "Walk the checklist and log faults found @recurring(monthly:12)"
                - "Stock repair tape, wiggle wire, spare net and bolts"
                - "Book the welder for any frame jobs before the storm season"
            - name: Pruning, trellising and lowering vine crops
              description: |-
                ## Purpose
                Indeterminate tomatoes and cucumbers under cover grow several metres in a season, and the yield depends on side shoots removed, leaves stripped below the fruit and plants lowered on time. Falling behind for two weeks gives a jungle that holds humidity, hides pests and shades the fruit.

                ## Milestones
                1. A trellis wire and twine or clip system in place for every row.
                2. A weekly crop work routine covering de-shooting, leaf removal, twisting and lowering.
                3. Workers shown the routine on a demonstration row.
                4. Crop work days logged so no row goes more than a week untouched.

                ## Notes
                Disinfect knives and hands between rows where viruses are a risk, and take prunings out of the house rather than leaving them on the floor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full crop where every row is logged as worked at least weekly, with prunings removed from the house each time."
                cadence: rolling
              tasks:
                - "Check trellis wires and hooks are fixed above every row"
                - "Train workers on a demonstration row of tomatoes or cucumbers"
                - "De-shoot, twist and lower each row, logging which rows were done @recurring(weekly:mon)"
                - "Carry prunings out of the house to a compost or burn site"
            - name: Drip line flushing and filter cleaning
              description: |-
                ## Purpose
                Fertiliser salts, algae and sediment slowly block drippers, so plants at the far end of a line get less water and feed than those near the header. Cleaning filters weekly, flushing line ends monthly and measuring dripper output twice a crop keeps the whole house growing evenly.

                ## Milestones
                1. Filters cleaned on a weekly schedule with the date logged.
                2. Line ends flushed until clear on a monthly schedule.
                3. Dripper output measured at the start and end of several lines and compared.
                4. Blocked drippers replaced and uniformity recorded after repair.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log of weekly filter cleans and monthly flushes, plus two uniformity checks per crop showing near and far drippers within a recorded margin."
                cadence: rolling
              tasks:
                - "Clean the screen or disc filter and log the date @recurring(weekly:fri)"
                - "Open line ends and flush until the water runs clear @recurring(monthly:20)"
                - "Catch dripper output for one minute at both ends of five lines"
                - "Replace blocked drippers and record the result"
            - name: Weekly yield per square metre log
              description: |-
                ## Purpose
                Covered growing is judged in kilos per square metre per crop, and that number tells you whether the house is beating open field enough to cover its cost. Weighing harvest by bay every week, and noting grade-outs, shows which bays, varieties and practices are pulling their weight.

                ## Milestones
                1. A scale at the packing point and a harvest sheet by bay.
                2. Weekly totals of marketable and rejected kilos recorded.
                3. Running kilos per square metre calculated for each bay and the whole house.
                4. Weak bays flagged and a likely cause noted from the other records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full crop of weekly harvest weights by bay with a running kilos per square metre figure and reject percentage."
                cadence: rolling
              tasks:
                - "Set up a harvest sheet with a column for each bay"
                - "Weigh marketable and rejected fruit by bay at every pick"
                - "Total the week and update kilos per square metre @recurring(weekly:sun)"
                - "Mark the two weakest bays and note a likely cause"
            - name: Between-crop clean-out and sanitation
              description: |-
                ## Purpose
                Old roots, fallen leaves, weeds at the walls and pests sheltering in the frame carry straight into the next crop if the house goes from pulling out to replanting in a weekend. A proper clean-out with a fallow gap breaks the cycle of whitefly, mites and soil disease and is the cheapest crop protection a covered grower has.

                ## Milestones
                1. All plants, roots, twine and clips removed and taken off site.
                2. Weeds inside and in a strip outside the walls cleared.
                3. Floor, benches, tools and drip lines cleaned following product labels.
                4. A fallow gap of an agreed number of days kept before replanting.

                ## Notes
                Start from the **Operational checklist** template so every clean-out follows the same steps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A completed clean-out checklist with dates, and a recorded fallow gap before the next crop goes in."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Write a clean-out checklist from crop removal to replanting"
                - "Remove plants, roots and twine and take them off the site"
                - "Clear weeds inside and in a strip outside the walls"
                - "Record the date the house was cleaned and the replant date"
            - name: Reading EC, pH and runoff under cover
              description: |-
                ## Purpose
                EC and pH numbers mean little until you know what moves them: fertiliser strength, water quality, plant uptake, the weather and how much drains away. Learning to read drip against runoff, and what a rising runoff EC on a hot week usually means, turns the twice-weekly readings into decisions you can discuss sensibly with an adviser.

                ## Milestones
                1. The meaning of EC, pH and runoff percentage explained in your own words in the record book.
                2. A month of readings reviewed with an extension officer or crop adviser.
                3. Three common patterns written down with the usual causes and the questions to ask.
                4. A runoff collection tray or bag set up to measure drainage reliably.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written one-page guide to your own EC, pH and runoff patterns, reviewed with an adviser against a month of real readings."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a fertigation basics guide from an extension service"
                - "Set up a runoff collection tray under two plants"
                - "Book an adviser to go through a month of your readings"
                - "Write down three patterns you saw and what they usually mean"
            - name: Heat stress and humidity in tropical houses
              description: |-
                ## Purpose
                Most greenhouse know-how is written for cold countries where the problem is keeping heat in, while in the Caribbean the fight is getting heat and moisture out. Understanding vapour pressure, flower abortion, sunscald and how shade, vents and spacing change the air in the house helps you judge equipment claims and spot heat damage early.

                ## Milestones
                1. The signs of heat stress in your crop listed with photos from your own house.
                2. How shade, ventilation and plant density affect house temperature summarised in a page.
                3. A tropical protected agriculture guide or course module completed.
                4. Two changes to try in the house chosen from what was learned.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of heat and humidity control for your structure, with two changes chosen to trial."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find a tropical protected agriculture guide from CARDI, IICA or a university"
                - "Photograph flower drop or sunscald in your house when you see it"
                - "Summarise how shade, vents and spacing change the house climate"
                - "Choose two changes to trial in the next crop"
            - name: Whitefly, thrips, mites and the viruses they carry
              description: |-
                ## Purpose
                Under cover the same few pests do most of the damage, and the viruses they spread, such as tomato yellow leaf curl and tospoviruses, cannot be cured once in the plant. Knowing each pest at every life stage, what its damage looks like and which virus symptoms to pull out at once is what makes the weekly scouting walk worth doing.

                ## Milestones
                1. Whitefly, thrips, mites and aphids identified with a hand lens from your own traps and leaves.
                2. Photos of each pest's damage on your crop kept in the record book.
                3. Virus symptoms for your crop listed with a rule for removing affected plants.
                4. Your identifications checked by an extension officer or plant clinic.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A photo sheet of the main house pests and virus symptoms on your crop, confirmed by an extension officer or plant clinic."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Buy a 10x or 20x hand lens for scouting"
                - "Photograph pests from your sticky traps and leaf undersides"
                - "Take samples to a plant clinic or extension officer for confirmation"
                - "Write the rule for removing virus-affected plants into the record book"
            - name: Nutrient disorders in covered crops
              description: |-
                ## Purpose
                Blossom end rot, fruit cracking, yellowing between veins and purple leaves are common under cover and are often caused by watering, heat or root problems rather than a missing nutrient. Learning to tell them apart, and when to ask for a leaf or solution test, prevents costly guesses with the fertiliser tank.

                ## Milestones
                1. The common disorders for your crop listed with photos and their usual causes.
                2. A leaf tissue or drain solution test arranged through a lab or extension service.
                3. Any disorder seen in the house matched to the readings and weather for that week.
                4. Changes to the recipe agreed only with an adviser and recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A disorder photo sheet for your crop and at least one lab tissue or solution test reviewed with an adviser."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect photos of blossom end rot, cracking and leaf yellowing from guides"
                - "Ask the lab how to send a leaf tissue or drain solution sample"
                - "Match any disorder you see to that week's EC, pH and temperatures"
                - "Review the test result with an adviser before changing the recipe"
            - name: Tomato pollination without bees under cover
              description: |-
                ## Purpose
                Tomatoes inside a sealed insect net house set poorly without the vibration that wind and bees normally give, and bumblebee hives are not available in most of the Caribbean. Learning when and how to shake or vibrate trusses, and why heat and humidity matter for pollen, can lift fruit set noticeably for little cost.

                ## Milestones
                1. The time of day and conditions when pollen is shed best noted for your house.
                2. A routine chosen: trellis tapping, an electric vibrator or a blower.
                3. Fruit set counted on vibrated and unvibrated trusses in one bay.
                4. The routine written into the weekly crop work.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A fruit set comparison between vibrated and unvibrated trusses recorded, and a pollination routine added to weekly crop work."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read how tomato flowers release pollen in warm humid conditions"
                - "Mark ten trusses to vibrate and ten to leave alone"
                - "Count fruit set on both groups after three weeks"
                - "Add the pollination step to the crop work routine"
            - name: Growing in grow bags and coco substrate
              description: |-
                ## Purpose
                Coco coir, rice hull, sawdust and other substrates in bags or troughs let you farm a house whose soil is diseased, rocky or full of nematodes. They also behave differently: they dry fast, hold salts and need more frequent, smaller drip pulses, so the skill has to be learned before a whole house is switched.

                ## Milestones
                1. Local substrate options listed with price, availability and whether they need washing or buffering.
                2. A trial row of bags set up with its own drip timing.
                3. Drip and drain readings from the bag row compared with the soil rows for a crop.
                4. A note on what worked and what to change before scaling up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One crop grown in a substrate trial row with drip and drain readings recorded and a written verdict on scaling up."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Price coco, rice hull and other substrates from local suppliers"
                - "Ask the supplier whether the coco is washed and buffered"
                - "Set up one trial row of bags with its own drip timing"
                - "Compare bag and soil row readings at the end of the crop"
            - name: Grafted seedlings for soil-borne disease
              description: |-
                ## Purpose
                Bacterial wilt, fusarium and root-knot nematodes build up in house soil after a few tomato or pepper crops, and grafting onto a resistant rootstock is one of the main ways covered growers keep using the same ground. Learning how grafts are made, what they cost and where to buy them helps decide if the extra price per plant pays back.

                ## Milestones
                1. The soil-borne problems in your house confirmed by a lab or extension officer.
                2. Rootstocks suited to those problems listed with a supplier or nursery.
                3. A small batch of grafted plants grown beside ungrafted plants in the same bay.
                4. Survival and yield compared and the cost per extra kilo worked out.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-by-side grafted versus ungrafted comparison in one bay, with survival, yield and cost per extra kilo recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Send a soil and root sample to confirm wilt or nematode problems"
                - "Ask nurseries which rootstocks they graft and at what price"
                - "Plant grafted and ungrafted seedlings side by side in one bay"
                - "Compare survival and yield and work out cost per extra kilo"
            - name: Soil beds or substrate for the house
              description: |-
                ## Purpose
                Growing in the house soil is cheaper to start but builds disease, while bags or troughs cost more each crop and demand closer fertigation control. Comparing the two over three years, with your soil test, disease history and labour, settles which system the house will run and what to buy for it.

                ## Milestones
                1. Soil test and disease history for the house floor on file.
                2. Three-year costs compared for soil beds, raised beds with imported soil and bagged substrate.
                3. Labour, water use and fertigation demands noted for each option.
                4. A system chosen and the materials list drawn up.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of growing system for the house, backed by a three-year cost comparison and the soil test result."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a soil test for the house floor"
                - "Price soil beds, raised beds and bagged substrate for three years"
                - "Note labour and water differences for each system"
                - "Record the chosen system and draw up a materials list"
            - name: Natural ventilation versus fans and wet walls
              description: |-
                ## Purpose
                Exhaust fans and evaporative pads can pull a house several degrees cooler, but they need steady power, clean water and pad maintenance, and in very humid weather the cooling is small. Comparing them with taller walls, bigger vents or more shade, on your own temperature log, avoids buying equipment that the climate or the power bill will not support.

                ## Milestones
                1. Three months of house temperature and humidity readings summarised.
                2. Costs and running costs listed for fans, pad and fan, extra vents and higher shade.
                3. Expected cooling for each option checked with growers who use it locally.
                4. A decision recorded with the expected effect on hot days per month.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cooling decision based on three months of house readings and costed options, with the expected reduction in hot days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise three months of house temperature and humidity"
                - "Get prices for fans, pads, extra vents and denser shade"
                - "Ask a grower who runs fans what their power bill is"
                - "Record the cooling option you chose and the expected effect"
            - name: Insect net mesh upgrade and screen repair
              description: |-
                ## Purpose
                Thrips and small whitefly pass easily into a house with 40-mesh net and a gap under the door, and a single unrepaired tear can undo every other control. Checking the mesh against your pest pressure, sealing every gap and inspecting the screens monthly is often the best return of any upgrade to an existing house.

                ## Milestones
                1. Current net mesh confirmed and compared with what your main pests need.
                2. Gaps at doors, base boards, gutters and vents found and sealed.
                3. Any upgrade to finer mesh costed with the extra vent area it may need.
                4. A monthly screen inspection logged with repairs dated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All gaps sealed, the mesh choice recorded against the main pests, and six months of dated screen inspections."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check the mesh rating on the net label or with the supplier"
                - "Walk the house with a torch at dusk to find gaps"
                - "Seal gaps at doors, base boards and vents"
                - "Inspect all screens and patch tears @recurring(monthly:26)"
            - name: Shade percentage trial on one bay
              description: |-
                ## Purpose
                Too little shade cooks plants in the dry season and too much starves them of light in the cloudy wet season, so the right percentage may change through the year. Trying a different shade cloth on one bay for a crop, with temperature and yield measured, gives evidence before re-covering the whole house.

                ## Milestones
                1. One bay fitted with a different shade percentage, the rest left as the control.
                2. Temperature in the trial and control bays logged weekly.
                3. Yield and grade-outs recorded for both through the crop.
                4. A recommendation on shade percentage by season written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A full-crop comparison of trial and control bays covering temperature, yield and grade-outs, ending in a shade recommendation."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Buy shade cloth for one bay at a different percentage"
                - "Hang a second thermometer in the trial bay"
                - "Record yield and grade-outs for trial and control bays"
                - "Write a seasonal shade recommendation from the results"
            - name: Greenhouse variety trial against the current variety
              description: |-
                ## Purpose
                Seed companies sell tomato, pepper and cucumber varieties bred for protected tropical growing with heat tolerance and virus resistance, but performance in your house is the only test that counts. Growing two new varieties beside your current one for a full crop shows whether the higher seed price buys more saleable kilos.

                ## Milestones
                1. Two candidate varieties chosen with stated heat or virus resistance.
                2. Trial rows planted beside the current variety in the same bays.
                3. Yield, fruit size, grade-outs and virus incidence recorded by variety.
                4. A buyer's view of fruit from each variety noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A full-crop trial of two new varieties against the current one, with yield, grade and buyer feedback recorded and a variety chosen."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask seed suppliers for heat-tolerant protected-crop varieties"
                - "Plant two trial varieties beside the current one"
                - "Record yield and grade-outs for each variety every week"
                - "Show fruit from each variety to your buyer"
            - name: Rotation plan across houses and bays
              description: |-
                ## Purpose
                Growing tomato after tomato in the same house soil is the fastest way to build up wilt and nematodes, and peppers and eggplant share many of the same problems. A rotation that moves the solanaceous crops between houses, with cucumber, leafy crops or a green manure in between, slows that build-up while keeping a buyer supplied.

                ## Milestones
                1. The last three years of crops recorded for each house or bay.
                2. Crops grouped by family with the diseases they share noted.
                3. A three-year rotation drawn up that never repeats a family in the same soil back to back.
                4. The rotation checked against buyer demand so supply continues.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-year rotation plan for every house or bay with no back-to-back crops from the same family, checked against buyer needs."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Write down what each house or bay grew in the last three years"
                - "Group your crops by family and note shared diseases"
                - "Draw up a three-year rotation by house or bay"
                - "Review the rotation against buyer demand and soil tests @recurring(yearly)"
            - name: Soil solarisation between crops
              description: |-
                ## Purpose
                Covering moist house soil with clear plastic for several weeks of strong sun can heat the top layer enough to reduce weed seeds, some soil diseases and nematodes, and the house roof already traps extra heat. It costs time out of production, so it is worth trialling on a fallow bay with soil temperatures measured.

                ## Milestones
                1. A fallow window of at least four to six weeks identified in the crop calendar.
                2. Soil in one bay watered and sealed under clear plastic.
                3. Soil temperature at a set depth recorded during the treatment.
                4. Weeds and plant health in the next crop compared with an untreated bay.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One bay solarised with soil temperatures logged and the following crop compared with an untreated bay."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a fallow window in the hottest, driest part of the year"
                - "Water and seal one bay under clear plastic"
                - "Measure soil temperature at a set depth twice a week"
                - "Compare weeds and plant health against an untreated bay"
            - name: Rainwater capture from house gutters
              description: |-
                ## Purpose
                Roof area is an asset: a 500 square metre roof can shed tens of thousands of litres in a heavy wet season month, and that soft water is often better for fertigation than hard bore water. Fitting gutters, a first-flush diverter and covered tanks turns the roof into a free supply that also eases dry season pressure.

                ## Milestones
                1. Roof area and local rainfall used to estimate monthly harvestable water.
                2. Gutters and downpipes fitted or repaired along the house.
                3. A first-flush diverter and covered tank installed and screened against mosquitoes.
                4. Water from the tank tested before it is used in the fertigation mix.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Gutters, a first-flush diverter and a covered tank in use, with a water test on file before use in fertigation."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Measure the roof area and estimate monthly harvestable rain"
                - "Price gutters, a first-flush diverter and a covered tank"
                - "Install the system and screen the tank against mosquitoes"
                - "Clean gutters and the first-flush diverter @recurring(quarterly)"
            - name: Fertigation timers and controller upgrade
              description: |-
                ## Purpose
                Running pumps and dosing by hand ties the grower to the house at fixed times and gives uneven feeding on busy days. A simple irrigation timer, solenoid valves or a dosing injector can deliver small, frequent pulses that suit substrate crops, but only if it is sized right and someone checks it.

                ## Milestones
                1. Current watering and feeding times, volumes and labour recorded for a fortnight.
                2. Timer, injector and controller options priced with installation.
                3. The chosen system installed with a manual override and a written check routine.
                4. Drip and runoff readings compared before and after the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An automated timer or injector running with a manual override, and before-and-after drip and runoff readings recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Log current watering times, volumes and labour for two weeks"
                - "Get quotes for a timer, solenoid valves and a dosing injector"
                - "Install the system with a manual override at the head"
                - "Compare drip and runoff readings before and after the change"
            - name: Power backup for pumps and fans
              description: |-
                ## Purpose
                Power cuts on a hot dry afternoon can stop the drip and the fans together, and a substrate crop can wilt within hours. A small generator, a solar pump or a battery backup sized to the pump and the most important fans keeps the house alive through outages and after storms.

                ## Milestones
                1. The loads that must keep running listed with their wattage.
                2. Generator, solar pump and battery options priced and compared.
                3. The backup installed with a changeover switch fitted by an electrician.
                4. A monthly test run logged.

                ## Notes
                Have a qualified electrician fit any changeover switch so the generator cannot feed back into the grid.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A backup power source sized to the critical loads, fitted by an electrician and tested monthly with the results logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the pump and fans that must run in an outage and their wattage"
                - "Price a generator, a solar pump and a battery backup"
                - "Book an electrician to fit a changeover switch"
                - "Run the backup under load for fifteen minutes @recurring(monthly:5)"
            - name: Pre-storm cover removal drill
              description: |-
                ## Purpose
                Many house designs survive a hurricane only if the plastic and shade cloth come off in time, and that job takes more hands and hours than people expect. Rehearsing the strip-down before the season, with a crew list, tools and a trigger point in the forecast, decides whether the frame is still standing when the wind drops.

                ## Milestones
                1. A written trigger for starting cover removal based on the official forecast.
                2. A crew list with phone numbers and the jobs each person does.
                3. Tools, ladders, ties and dry storage for the covers ready.
                4. A timed practice run on one bay completed before the season.

                ## Notes
                Never work on a roof once winds have picked up. The Hurricane Resilience on the Farm area covers the rest of the farm; this drill is for the structure.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed practice strip-down of at least one bay completed before the season, with a written trigger and crew list on file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the forecast trigger for starting cover removal"
                - "Draw up a crew list with phone numbers and jobs"
                - "Time a practice strip-down of one bay with the crew"
                - "Rerun the drill and check tools before the season @recurring(yearly)"
            - name: Transplanting day for a new house crop
              description: |-
                ## Purpose
                Transplanting a house of 1,500 or more tomato or pepper seedlings is a one-day job that sets up the next six months: drip running, beds or bags wetted, seedlings hardened and healthy, crew briefed. A planned day with a checklist avoids transplant shock and gaps that cost yield for the whole crop.

                ## Milestones
                1. The house cleaned, beds or bags prepared and drip tested the day before.
                2. Seedlings inspected for pests and disease on arrival and the count checked.
                3. Crew briefed on spacing, depth and handling.
                4. Planting date, variety, seedling source and plant count recorded by bay.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full house planted on the planned day with plant counts, variety and seedling source recorded by bay."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Order seedlings with a delivery date and plant count"
                - "Run the drip and wet the beds or bags the day before"
                - "Inspect seedlings on arrival and hold any doubtful trays outside"
                - "Record variety, count and source by bay after planting"
            - name: Cover film replacement day
              description: |-
                ## Purpose
                Greenhouse film loses light transmission and strength as UV breaks it down, typically over a few years in Caribbean sun, and a tired film tears in the first squall. Planning the replacement between crops, outside storm season and on a calm morning, with the crew and fixings ready, gets the new cover on tight in one day.

                ## Milestones
                1. The age of the current film checked against its warranty life.
                2. New film, wiggle wire and fixings delivered and stored out of the sun.
                3. A calm-weather date chosen between crops and outside storm season.
                4. The new cover fitted, tensioned and its install date recorded.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new film fitted and tensioned between crops, with its install date and warranty life recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Check the install date and warranty life of the current film"
                - "Order new film and fixings to arrive before the fitting date"
                - "Book a crew for a calm morning between crops"
                - "Record the new film's install date in the record book"
            - name: End-of-cycle house review
              description: |-
                ## Purpose
                Every covered crop leaves a trail of numbers: kilos per square metre, reject rate, fertigation readings, pest counts, hot days and costs. Sitting down with them at the end of each cycle, before the next crop is ordered, is how a grower moves from a first crop at half the target yield to a house that pays.

                ## Milestones
                1. Yield per square metre, grade-outs and revenue for the crop totalled.
                2. Costs per kilo calculated from the record book.
                3. The three biggest problems of the crop listed with their likely causes.
                4. Three changes agreed for the next crop and written into its plan.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page crop review with yield, cost per kilo, top three problems and three agreed changes, filed before the next crop is ordered."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total yield, grade-outs and revenue for the finished crop"
                - "Ask the agent to summarise a crop's scouting and climate logs into a page"
                - "List the three biggest problems and their likely causes"
                - "Write three changes into the plan for the next crop"
            - name: Hosting an extension field day in the house
              description: |-
                ## Purpose
                Extension services and growers' groups often look for working houses to show others, and hosting a visit brings free advice, builds a name with buyers and officers, and puts you at the front of the queue for trials. A well-run visit needs biosecurity rules so the visitors do not bring in what you have kept out.

                ## Milestones
                1. A date agreed with the extension officer and the number of visitors capped.
                2. Biosecurity rules for visitors set, including clean footwear and no entry after visiting other houses that day.
                3. A short walk-through of the house, records and results prepared.
                4. Feedback and questions from the day written up.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A field day held with visitor biosecurity rules applied and a written note of feedback and follow-ups."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Offer the extension officer a date for a field day visit"
                - "Write biosecurity rules for visitors and send them in advance"
                - "Prepare a short walk-through of the house and its records"
                - "Write up feedback and follow-up questions after the visit"
            - name: One shade house alongside a day job
              description: |-
                ## Purpose
                A single small shade house of peppers, tomatoes or seedlings is a common side business for people with a job in town, but the crop needs checks every day, including the hot afternoons you are at work. Designing the house and routine for a grower who is there before and after work, with timers and a trusted helper, keeps it profitable without taking over your life.

                ## Milestones
                1. The daily, weekly and monthly jobs listed with the time each takes.
                2. A drip timer and float valve fitted so watering does not depend on you being there.
                3. A neighbour or family helper briefed to check the house on workdays.
                4. Weekend crop work and harvest blocks fixed in the calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written routine that fits around a working week, a timer in use and a named helper, kept for three months."
                cadence: rolling
              tasks:
                - "List every house job with how often and how long it takes"
                - "Fit a drip timer and a float valve on the tank"
                - "Agree a workday check with a neighbour or family member"
                - "Block Saturday morning for crop work and harvest @recurring(weekly:sat)"
            - name: Young farmer's first covered structure
              description: |-
                ## Purpose
                Young growers often start with a youth programme house, a shared plot or a family-owned structure that has stood empty, and little cash to spare. Starting small, learning one crop well, borrowing tools and keeping clean records from day one builds a track record that lenders and youth agriculture programmes look for when you want a second house.

                ## Milestones
                1. A small structure secured through a programme, lease or family arrangement in writing.
                2. One crop and buyer chosen for the first season.
                3. A mentor among experienced covered growers agreed.
                4. One full crop recorded with yield, costs and sales.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One full crop grown and recorded with yield, costs and sales, with the use of the structure agreed in writing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the extension office about youth protected agriculture programmes"
                - "Put the arrangement for using the structure in writing"
                - "Ask an experienced covered grower to mentor you for a season"
                - "Keep yield, costs and sales for the first crop in the record book"
            - name: School or community shade house
              description: |-
                ## Purpose
                Schools, churches and community groups often get a shade house through a donor or ministry programme, then struggle when holidays, volunteers moving on and no budget for inputs leave it empty. Setting up a simple rota, a crop calendar around the school terms and a small sales fund keeps the house growing and teaching.

                ## Milestones
                1. A named lead person and a deputy agreed with the school or group.
                2. A crop calendar that avoids harvests falling in the long holidays.
                3. A watering and care rota covering weekends and breaks.
                4. A small fund from produce sales set aside for seed and fertiliser.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written rota and crop calendar that keep the house planted through a full school year, with sales income recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree a lead person and deputy with the school or group"
                - "Plan crops so harvests fall in term time"
                - "Draw up a care rota that covers weekends and holidays"
                - "Open a simple record of produce sales and input spending"
            - name: Moving from open field into protected production
              description: |-
                ## Purpose
                Experienced field growers are often surprised by how different a house is: no rain on the roots, pests that explode in sheltered air, daily fertigation, and crop work that never stops on vine crops. Treating the first house as a learning enterprise, run alongside the field, avoids betting the farm on a system still being learned.

                ## Milestones
                1. The main differences between your field routine and covered growing listed.
                2. The first house sized small enough that a bad crop is survivable.
                3. Field and house records kept separately so the comparison is honest.
                4. After two crops, a decision on whether to add houses, hold or revert.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two crops grown in the first house with separate records, followed by a written decision on expanding, holding or reverting."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List what changes from your field routine under cover"
                - "Size the first house so one failed crop will not sink the farm"
                - "Keep the house's costs and yields apart from the field records"
                - "Compare house and field margins after two crops"
            - name: Grower cluster sharing a propagation house
              description: |-
                ## Purpose
                Five or six covered growers buying film, net, substrate and seed together can win better prices, and a shared propagation house raises clean seedlings for everyone. It works only when cost sharing, hygiene rules and who gets seedlings first are agreed before money changes hands.

                ## Milestones
                1. Members, their houses and their crops listed.
                2. A written agreement on cost sharing, hygiene rules and seedling allocation.
                3. A first bulk order of inputs placed and split.
                4. Regular meetings held with minutes kept.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed cluster agreement, one bulk input order delivered and split, and minutes from monthly meetings."
                cadence: rolling
              tasks:
                - "Call nearby covered growers about buying inputs together"
                - "Draft a cluster agreement on costs, hygiene and seedling turns"
                - "Place one bulk order and split it by member"
                - "Meet the cluster and keep minutes @recurring(monthly:8)"
            - name: Multi-house block with staggered planting
              description: |-
                ## Purpose
                Buyers who want tomatoes or peppers every week of the year cannot be served from one house that is cleaned out for a month at a time. Staggering planting dates across three or more houses, with clean-outs and storm season built in, smooths supply and labour and turns protected growing into a steady contract.

                ## Milestones
                1. Weekly volume your main buyer wants through the year written down.
                2. Crop length, clean-out and fallow time known for each crop and house.
                3. A planting calendar staggered across houses to cover gaps.
                4. Seedling orders placed to match the calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month planting calendar across all houses that covers the buyer's weekly volume, with seedling orders matching it."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Write down the buyer's weekly volume for each month of the year"
                - "List crop length, clean-out and fallow time for each house"
                - "Draw a staggered planting calendar across the houses"
                - "Check the next seedling order against the calendar @recurring(monthly:3)"
            - name: Seedling propagation business under cover
              description: |-
                ## Purpose
                Clean, vigorous, pest-free seedlings are scarce in many islands, and a well-run propagation house can sell trays to field and covered growers every week. It demands strict hygiene, true-to-type seed and reliable delivery dates, because a grower who receives whitefly-infested plants will not come back.

                ## Milestones
                1. Demand from at least ten growers confirmed by crop and month.
                2. A propagation house with benches, insect net and misting or drip set up.
                3. Seed sourced from reputable suppliers with batch numbers recorded.
                4. A weekly order book and delivery schedule running.

                ## Notes
                Check with the plant health or quarantine authority whether a nursery registration applies before selling plants.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A propagation house selling to at least ten growers, with seed batch numbers and a weekly order book recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask ten growers which seedlings they would buy and when"
                - "Check whether nursery registration is needed with the plant health authority"
                - "Record seed source and batch number for every sowing"
                - "Update the order book and confirm next week's deliveries @recurring(weekly:thu)"
            - name: Cost per kilo benchmark across houses
              description: |-
                ## Purpose
                Once there are two or more houses, the question is not whether protected growing pays but which house, crop and practice pays best. Calculating cost per kilo for each house every quarter, including a charge for the structure's wear, shows where to invest, what to change and when a house should be re-covered or retired.

                ## Milestones
                1. A yearly depreciation charge set for each structure and its covering.
                2. Direct costs and yields allocated to each house from the record book.
                3. Cost per kilo and margin per square metre calculated for each house.
                4. A ranking of houses with one action for the weakest.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly table of cost per kilo and margin per square metre for every house, including depreciation, with an action for the weakest."
                cadence: rolling
              tasks:
                - "Set a yearly depreciation charge for each structure and cover"
                - "Allocate costs and yields to each house from the records"
                - "Calculate cost per kilo and margin per square metre @recurring(quarterly)"
                - "Agree one action for the weakest house"
---

# Greenhouse and Shade House Production

A greenhouse or shade house in the Caribbean is a costly machine for growing tomatoes, sweet peppers, cucumbers and seedlings through rain, heat and insects that ruin open-field crops, and it pays back only when the structure, the climate inside and the drip system are run with discipline. This area starts with the foundations (structure type, site, wind rating, covering, water and a costed plan), then the daily and weekly routines of climate, fertigation, scouting, hygiene and crop work, the skills of reading EC, heat stress and pests under cover, the decisions and trials that lift output, the dated events of a crop cycle and a storm season, variants for part-time, young, school and group growers, and finally multi-house blocks, seedling businesses and cost per kilo.

The rhythm is set by the house itself: climate readings and a drip check every day, EC and pH twice a week, scouting on Wednesdays, a footbath change and a yield log at the weekend, a monthly structure and net round, and a yearly storm drill before the season. The Purchase decision, Vendor, Metrics log and Operational checklist templates pair with choosing the covering, vetting the builder, the climate log and the clean-out between crops. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
