---
id: agriculture.broiler-production
name: Broiler Production
description: "Plan batches, set up a clean broiler house, place and grow chicks to target weight with biosecurity and daily records, then process and sell every batch at a known cost."
category: business
version: 1.0.0
tags: [agriculture, broiler-production, small-business, poultry, broilers, biosecurity, meat-chickens, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - operational-checklist
    - metrics-log
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Broiler Production
          description: "Raising broiler chickens for meat: house setup, chick placement, feed and water systems, biosecurity, growth records, processing and buyer contracts."
          projects:
            - name: Broiler enterprise plan and batch size decision
              description: |-
                ## Purpose
                Before a single chick arrives, decide how many birds a batch, how many batches a year and who will buy them, because every other choice from house size to feed orders follows from that number. Growers who start with whatever the hatchery has available often end up with birds at five weeks and no buyer. A one-page plan written now saves that scramble.

                ## Milestones
                1. A target batch size and number of batches a year written down.
                2. At least two likely buyers or sales channels named for the first batch.
                3. All-in all-out chosen as the house rule, with one age of bird on site at a time.
                4. A planned placement date and expected catching date for batch one.

                ## Notes
                All-in all-out matters more than almost anything else for disease control. Mixing ages in one house lets every infection pass from the old birds to the new.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written one-page plan names the batch size, batches per year, first placement date and at least two buyers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how many birds you can sell in one week at your price"
                - "Talk to two possible buyers about volumes and finished weight"
                - "Choose the batch size and number of batches for the first year"
                - "Pick a placement date that lands catching day in a strong sales week"
            - name: Poultry farm registration and approvals check
              description: |-
                ## Purpose
                Many countries require poultry farms to register with the Ministry of Agriculture or the veterinary services, and the local authority may need to approve a new house near homes or water. Knowing the rules before building avoids a stop notice halfway through, and registration is often the condition for disease compensation, incentives and some buyers.

                ## Milestones
                1. The rules for registering a poultry unit confirmed with the veterinary or agriculture office.
                2. Any planning, environmental or public health approval needed for the house identified.
                3. The farm registered, with the registration number filed.
                4. Renewal dates and inspection requirements written on the farm calendar.

                ## Notes
                Ask about setback distances from neighbours, rivers and wells before choosing the site, not after.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The farm holds a current poultry registration number on file, and every other approval the authorities named has been granted or applied for."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Call the veterinary services office and ask what a poultry unit must register"
                - "Ask the local authority whether the house needs planning approval"
                - "Complete and submit the registration forms with any fee"
                - "Check registration and permit renewals are current @recurring(yearly)"
            - name: Broiler house site and orientation survey
              description: |-
                ## Purpose
                In the tropics a broiler house that runs east to west, on raised and well-drained ground with open sides to the prevailing breeze, can be several degrees cooler at two in the afternoon than one turned the wrong way. Surveying the site before building or renovating fixes the most expensive heat problem for free.

                ## Milestones
                1. The prevailing wind direction and the path of the afternoon sun noted on a sketch.
                2. Drainage, flood history and distance to homes and water sources checked.
                3. The house long axis set east to west, or the reason it cannot be noted.
                4. Access for feed trucks and catching crews marked on the site plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A site sketch exists showing house orientation, wind, drainage, setbacks and truck access, with the final position agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Watch where the breeze comes from at midday for three days"
                - "Sketch the site with sun path, drainage and neighbours marked"
                - "Ask neighbours how high water rose in the last heavy rain"
                - "Mark the truck turning area and catching entrance on the sketch"
            - name: House capacity and stocking density calculation
              description: |-
                ## Purpose
                Overcrowding is the quiet cause of heat deaths, wet litter and uneven birds, and in hot climates houses need fewer birds per square metre than temperate guides suggest. Measuring the usable floor and working out a density by finished weight tells you the real batch size the house can carry, which may be smaller than hoped.

                ## Milestones
                1. The usable floor area of each house measured in square metres.
                2. A target density by finished live weight agreed with the extension officer or vet.
                3. Maximum birds per batch worked out for each house.
                4. Feeder and drinker space checked against that number of birds.

                ## Notes
                Plan density on the weight at catching, not on chick numbers. A house that is comfortable at three weeks can be dangerously full at six.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each house has a written maximum bird number based on measured floor area and an agreed density at finished weight."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure the inside length and width of each house"
                - "Subtract space taken by pillars, store rooms and brooding guards"
                - "Ask the extension officer what density suits your climate and finished weight"
                - "Work out the maximum birds per house and write it on the door"
            - name: Brooding and growing equipment kit list
              description: |-
                ## Purpose
                Chicks need heat, chick guards, starter feeders and drinkers in the first week, then growing feeders, more drinkers, fans and a scale later on. Listing every item with quantities for your batch size before buying stops the common mistake of placing chicks with half the drinkers and borrowing the rest in a panic.

                ## Milestones
                1. A full equipment list with quantities for one batch at maximum size.
                2. Prices from at least two agricultural suppliers for the main items.
                3. Brooders, feeders, drinkers, thermometers and a weighing scale bought or sourced.
                4. Spare bulbs, gas fittings or heater parts kept on site.

                ## Notes
                Start from the **Purchase decision** template. A cheap thermometer and hygrometer at chick height is the most useful thing on the list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every item on a written kit list for a full batch is on site before the first placement date, with spares for heaters."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every brooding and growing item with quantities for one full batch"
                - "Get prices for brooders, feeders and drinkers from two suppliers"
                - "Buy a thermometer and hygrometer to hang at chick height"
                - "Store spare bulbs or gas parts in a labelled box in the feed room"
            - name: Choosing a hatchery and day-old chick supplier
              description: |-
                ## Purpose
                Chick quality sets the ceiling for the whole batch: chicks from young or unhealthy breeder flocks, or that sat in a hot van, never catch up. Comparing hatcheries on breeder health, vaccination at the hatchery, delivery conditions and what they do about early deaths gives you a supplier you can book months ahead with confidence.

                ## Milestones
                1. Two or three hatcheries or chick importers listed with prices and lead times.
                2. Each asked about breeder flock health, hatchery vaccination and transport.
                3. Their policy on dead or weak chicks in the first days written down.
                4. One supplier chosen and the first order booked for the planned date.

                ## Notes
                Start from the **Vendor** template. Ask for chick delivery early in the morning, and count and inspect the boxes before signing for them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chick supplier has been chosen against written questions on health, vaccination, transport and replacements, and the first order is confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the hatcheries and chick importers that deliver to your area"
                - "Ask each which vaccines chicks receive at the hatchery"
                - "Ask each what they replace or credit for early chick deaths"
                - "Book the first chick order for your placement date"
            - name: Feed supplier and three-phase feeding programme
              description: |-
                ## Purpose
                Feed is usually two thirds or more of the cost of a broiler, so the supplier, the phase changes from starter to grower to finisher, and how fast you pay for it decide whether the batch makes money. Agreeing the programme with the mill or a nutritionist, and knowing roughly how many bags each phase needs, stops both shortages and stale feed sitting in the store.

                ## Milestones
                1. Starter, grower and finisher feeds chosen from one mill, with the age or weight for each change.
                2. Bags of each phase estimated for a full batch.
                3. Delivery days, credit terms and minimum orders agreed with the supplier.
                4. A dry, raised, rat-proof feed store ready before the first delivery.

                ## Notes
                Follow the mill's or nutritionist's phase programme rather than stretching starter to save money. Any medicated feed must be prescribed and its withdrawal period noted before sale.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written feeding programme names the supplier, the three feed phases and change points, and the bag count per batch, with delivery terms agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the feed mill for its broiler feeding programme in writing"
                - "Estimate bags of starter, grower and finisher for a full batch"
                - "Agree delivery days and credit terms with the supplier"
                - "Raise feed bags on pallets away from the walls in the store"
            - name: Water source test and drinker supply check
              description: |-
                ## Purpose
                Broilers drink roughly twice as much water as they eat in feed, more in the heat, and dirty or salty water quietly cuts growth and spreads disease. Testing the source, checking that supply holds up on the hottest day at full stocking, and storing a day's reserve protects the batch from both bad water and a dry tap.

                ## Milestones
                1. A water sample from the source and the drinker end sent to a laboratory.
                2. Results reviewed with the extension officer or vet and any treatment agreed.
                3. Peak daily water need for a full batch worked out against supply.
                4. A covered storage tank holding at least a day of water at peak demand.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A laboratory water test result is on file, and stored water covers at least one full day at peak demand."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension office where to send a poultry water sample"
                - "Take samples from the source and the furthest drinker"
                - "Work out peak daily water use at full stocking in hot weather"
                - "Repeat the laboratory water test before the dry season @recurring(yearly)"
            - name: Batch cost and break-even price sheet
              description: |-
                ## Purpose
                Chick, feed, litter, gas or electricity, vaccines, labour and transport add up to a cost per kilogram that many growers never work out, so they price by what the neighbour charges. A simple sheet that turns your real inputs into a break-even price per bird and per kilogram shows whether a batch is worth placing at today's feed price.

                ## Milestones
                1. Every cost of one batch listed, including chick, feed, litter, energy, labour and processing.
                2. Expected mortality and average finished weight assumed and written down.
                3. Break-even price per bird and per kilogram worked out.
                4. The sheet updated whenever feed or chick prices change.

                ## Notes
                Include your own labour at a fair rate, even if you do not pay yourself, or the sheet will flatter the business.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A costing sheet shows break-even per bird and per kilogram for one batch, using current chick and feed prices."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every cost from chick order to the bird reaching the buyer"
                - "Get current prices for chicks, each feed phase and litter"
                - "Ask the agent to build a break-even sheet from the cost list"
                - "Update the costing sheet with new feed prices @recurring(monthly:28)"
            - name: Farm biosecurity plan and visitor rules
              description: |-
                ## Purpose
                Disease reaches a broiler house on boots, crates, feed trucks, wild birds and visitors who came from another farm that morning. A written plan with a clean and dirty line at the gate, footbaths, dedicated boots and a visitor log is cheap, and it is what veterinary services and contract buyers ask to see first.

                ## Milestones
                1. A gate or fence that keeps vehicles and visitors from driving up to the house.
                2. Footbaths and house-only boots at every house door.
                3. A visitor log in use, with a rule that no one enters the house from another poultry farm the same day.
                4. The plan written on one page and posted in the feed room.

                ## Notes
                Choose the disinfectant with your vet and follow the label for dilution and contact time. Organic matter left in a footbath makes it useless, so scrub boots first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page biosecurity plan is posted, footbaths and house boots are at every door, and a visitor log has entries."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark a clean and dirty line at the farm gate"
                - "Put house-only boots and a footbath at each house door"
                - "Start a visitor log asking where each person was that day"
                - "Empty, clean and refill the footbaths @recurring(weekly:sat)"
            - name: Cleanout and disinfection between batches
              description: |-
                ## Purpose
                The days between catching and the next placement decide whether the new chicks inherit the last batch's disease. Removing all litter, washing down, disinfecting, fixing what broke and then resting the house empty breaks the cycle, and doing it from the same checklist every time stops steps being skipped when the next chicks are already booked.

                ## Milestones
                1. All old litter and manure removed from the house and site.
                2. House, equipment and drinker lines washed with detergent, then disinfected.
                3. Repairs to curtains, wire and equipment made while the house is empty.
                4. The house rested empty for the period agreed with your vet before new litter goes in.

                ## Notes
                Start from the **Operational checklist** template. Wash first and disinfect second: disinfectant cannot reach germs under dried manure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every batch has a signed cleanout checklist showing litter removed, washing, disinfection and the empty rest days before placement."
                cadence: cyclic
              tasks:
                - "Write the cleanout steps as a checklist in the order you do them"
                - "Book litter removal for the day after catching"
                - "Soak and scrub feeders and drinkers before disinfecting"
                - "Sign and date the checklist when the house is ready"
            - name: Pre-placement house warm-up checklist
              description: |-
                ## Purpose
                Chicks placed on cold litter lose heat through their feet and stop eating, and the first week sets the final weight. Warming the house and litter a day ahead, filling feeders and drinkers and checking temperature at chick height means the chicks find heat, feed and water within minutes of leaving the box.

                ## Milestones
                1. Fresh, dry litter spread evenly at the depth you have chosen.
                2. Brooders running long enough that floor and air are at the target temperature.
                3. Chick guards, paper, starter feed and water set out under the brooder.
                4. Temperature and humidity at chick height recorded before chicks arrive.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each batch, a temperature reading at chick height is logged before placement and every item on the warm-up list is ticked."
                cadence: cyclic
              tasks:
                - "Spread fresh litter and level it with a rake"
                - "Start brooders the day before chicks arrive"
                - "Put water out a few hours early so it reaches house temperature"
                - "Record litter and air temperature at chick height before placement"
            - name: Chick placement day routine
              description: |-
                ## Purpose
                The hour the chicks arrive is busy and easy to rush: boxes stacked in the sun, chicks dumped in one corner, nobody counting. A set routine for checking, counting, placing and watching the chicks through the first hours gives an honest starting number and an early sign of any problem to raise with the hatchery.

                ## Milestones
                1. Boxes counted and a sample of chicks inspected before the delivery note is signed.
                2. Chicks spread gently under the brooders rather than tipped in one place.
                3. Crop fill checked on a sample of chicks a few hours after placement.
                4. Placement count, dead on arrival and chick condition written in the batch record.

                ## Notes
                Feel the crop of twenty chicks: soft and full means they found feed and water. Hard or empty crops mean something about heat, feed or water needs fixing now.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each batch record shows boxes counted, dead on arrival, a crop fill check and the confirmed number placed."
                cadence: cyclic
              tasks:
                - "Unload chick boxes straight into the shaded house"
                - "Count chicks in three boxes and inspect them before signing"
                - "Feel crops of twenty chicks a few hours after placement"
                - "Write the placement count and condition in the batch record"
            - name: Daily flock walk and mortality log
              description: |-
                ## Purpose
                Walking slowly through the whole house every morning, looking at the birds rather than past them, is how growers catch heat stress, a blocked drinker or the first sick birds before a problem doubles overnight. Recording every dead or culled bird by day turns those walks into a number your vet can read.

                ## Milestones
                1. A morning walk route that passes every feeder line and drinker line.
                2. Dead and culled birds removed and counted each day.
                3. Daily mortality written in the batch record with any unusual signs.
                4. A trigger agreed with your vet for when daily deaths mean calling them.

                ## Notes
                Dispose of dead birds the way your veterinary or environmental authority requires, by pit, incinerator or collection, and never in an open drain or bush.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every day of every batch has a mortality count and a note in the batch record, and the vet call trigger is written on the record sheet."
                cadence: rolling
              tasks:
                - "Walk the whole house and record dead and culled birds @recurring(daily)"
                - "Agree with your vet the daily death count that means calling them"
                - "Set up a covered disposal point for dead birds that meets local rules"
                - "Inspect the dead bird disposal pit or bin for flies and smell @recurring(monthly:20)"
            - name: Weekly sample weighing and growth curve
              description: |-
                ## Purpose
                Birds can look fine while running a few days behind target, and by the time it shows by eye the batch has lost money. Weighing the same number of birds from different parts of the house on the same day each week and plotting the average against the strain's target curve shows a slowdown early, along with how even the flock is.

                ## Milestones
                1. A hanging or platform scale that reads to the nearest ten grams.
                2. At least fifty birds weighed from at least three places in the house each week.
                3. Average weight and spread plotted against the breeder's target curve.
                4. Any week more than a few percent behind target discussed with the feed supplier or vet.

                ## Notes
                Start from the **Metrics log** template. Weigh at the same time of day each week, before the birds have been fed heavily, so weeks compare fairly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each batch has a weekly average weight plotted against the target curve from the first week to catching."
                cadence: rolling
              tasks:
                - "Download the target weight curve for the strain you grow"
                - "Make a pen from wire panels for catching weighing samples"
                - "Weigh fifty birds from three parts of the house @recurring(weekly:mon)"
                - "Plot the average on the growth chart beside the target"
            - name: Daily water and feed intake readings
              description: |-
                ## Purpose
                Falling water use is often the first sign of disease or a drinker fault, a day before birds look ill. Reading a water meter on the house supply at the same time daily, and noting feed bags used, gives an early warning and the numbers you need for feed conversion at the end of the batch.

                ## Milestones
                1. A water meter fitted on the supply line to each house.
                2. Meter reading and bags of feed used recorded daily in the batch record.
                3. A simple rule written down for what drop in water use means investigating at once.
                4. Feed stock checked so an order goes in before less than a few days remain.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The batch record holds a daily water meter reading and daily feed use for every day of the batch."
                cadence: rolling
              tasks:
                - "Fit a water meter on the supply pipe into the house"
                - "Read the water meter at the same time each morning @recurring(daily)"
                - "Count feed bags in the store and order before stock runs low @recurring(weekly:tue)"
                - "Mark any sudden fall in water use in red in the record"
            - name: Litter condition management through the batch
              description: |-
                ## Purpose
                Wet, caked litter burns birds' feet and breast skin, raises ammonia and brings coccidiosis, and it is the reason many processors downgrade carcasses. Checking litter weekly, fixing leaking drinkers and turning or topping up wet patches keeps the floor dry through the heavy final weeks.

                ## Milestones
                1. A litter depth and material chosen for your climate and recorded.
                2. A weekly litter check under drinkers and along the walls.
                3. Leaks and wet patches fixed and topped up with fresh material the same day.
                4. Foot and breast condition at catching noted for each batch.

                ## Notes
                The squeeze test works: a handful of litter that holds a ball when squeezed is too wet. Ammonia you can smell at standing height is already harming the birds.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each batch record shows a weekly litter score and the date of every wet patch fixed."
                cadence: rolling
              tasks:
                - "Choose and record the litter material and depth for each batch"
                - "Squeeze-test litter under drinkers and by the walls @recurring(weekly:thu)"
                - "Fix leaking drinkers and replace wet litter the same day"
                - "Note foot and breast condition on a sample of birds at catching"
            - name: Hot afternoon heat stress routine
              description: |-
                ## Purpose
                Heavy broilers in the last two weeks can die in large numbers on a still, hot afternoon, and in the Caribbean that risk lasts most of the year. A routine of opening curtains, running fans, keeping birds from feeding through the hottest hours and walking the house at mid afternoon can save a batch on the worst day.

                ## Milestones
                1. A thermometer read at bird height at the hottest time of day.
                2. Signs of heat stress, such as panting and wings held out, known by everyone on the farm.
                3. A written heat plan: curtains, fans, cool water, feed timing and extra walks.
                4. Fans, belts and curtain ropes checked so the plan works on the day.

                ## Notes
                Ask the feed supplier or vet about adjusting feeding times and water additives for heat. Never disturb or catch heavy birds in the heat of the day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written heat plan is posted in the house, and each batch record shows afternoon temperatures in the final two weeks."
                cadence: rolling
              tasks:
                - "Write a one-page heat plan and post it at the house door"
                - "Show everyone on the farm what panting and wing spreading look like"
                - "Check fans, belts and curtain ropes before each batch reaches three weeks"
                - "Walk the house at mid afternoon on hot days in the final two weeks"
            - name: Rodent, wild bird and fly control rounds
              description: |-
                ## Purpose
                Rats eat feed, chew wiring and carry salmonella between batches, wild birds bring disease in through open sides, and flies breed in wet litter and dead birds. Regular rounds of numbered bait stations, bird-proof netting and fly checks keep these pests from undoing the rest of the biosecurity plan.

                ## Milestones
                1. Numbered, tamper-resistant bait stations placed around each house and the feed store.
                2. Gaps that let wild birds into the house closed with mesh.
                3. Spilled feed and long grass around the house cleared as a standing rule.
                4. A log of each station check, bait taken and any fly hotspots.

                ## Notes
                Use only approved rodent baits in locked stations, kept away from birds, children and dogs, and follow the label. A pest control contractor is worth it for larger units.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A map of numbered bait stations exists and the pest log shows a check of every station each month."
                cadence: rolling
              tasks:
                - "Draw a map of bait station positions around the house and store"
                - "Close holes in the side mesh that let wild birds in"
                - "Check and log every bait station and fly hotspot @recurring(monthly:12)"
                - "Cut the grass back a few metres from the house walls"
            - name: Broiler vaccination schedule agreed with the vet
              description: |-
                ## Purpose
                Which diseases a batch needs protecting against depends on what the hatchery has already given, what is circulating locally and the law in your country, so no generic schedule is safe to copy. Agreeing a written schedule with a poultry vet, and learning to handle and give vaccines correctly, keeps protection real rather than assumed.

                ## Milestones
                1. The hatchery's vaccination record for your chicks obtained.
                2. A written on-farm schedule agreed with a vet for your area's disease risks.
                3. Vaccine storage in a fridge with a thermometer, and the cold chain from shop to farm planned.
                4. Each vaccination recorded with product, batch number, date and who gave it.

                ## Notes
                Water vaccines fail if the water holds chlorine or the lines are dirty; ask your vet how to prepare water for vaccination. The vet sets every product and method.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A vet-agreed vaccination schedule is on file, and every batch record lists each vaccination with product, batch number and date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the hatchery for the vaccination record of your chicks"
                - "Book a poultry vet to agree an on-farm schedule for your area"
                - "Put a thermometer in the fridge used for vaccines"
                - "Review the vaccination schedule with the vet @recurring(yearly)"
            - name: Batch closeout report with FCR and mortality
              description: |-
                ## Purpose
                Each batch ends with numbers that tell you more than any opinion: birds placed and sold, total mortality, average weight, feed used and money in. Writing a one-page closeout within a week of catching, while receipts and memories are fresh, makes each batch a lesson for the next instead of a blur.

                ## Milestones
                1. Birds placed, birds sold, mortality percentage and average live weight recorded.
                2. Total feed used and feed conversion ratio worked out.
                3. Revenue, costs and margin per bird calculated from receipts.
                4. Two things to change next batch written at the bottom of the report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every finished batch has a closeout report with placement, mortality, weight, FCR and margin per bird within seven days of catching."
                cadence: cyclic
              tasks:
                - "Make a one-page closeout form with the key batch figures"
                - "Gather feed, chick and sales receipts for the batch"
                - "Ask the agent to work out FCR and margin from the batch figures"
                - "Write two changes for the next batch at the bottom of the report"
            - name: Monthly broiler sales and payments ledger
              description: |-
                ## Purpose
                Broiler buyers often pay a week or a month after delivery, and a grower selling to shops, a processor and neighbours can easily lose track of who still owes for which batch. A monthly ledger of every sale, invoice and payment keeps cash coming in and shows which buyers pay well enough to keep.

                ## Milestones
                1. A ledger with date, buyer, birds or kilograms, price, invoice number and payment date.
                2. Every sale from the last batch entered.
                3. Overdue payments listed and followed up each month.
                4. Average days to payment worked out for each regular buyer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ledger lists every broiler sale with its payment status, and overdue amounts are reviewed each month."
                cadence: rolling
              tasks:
                - "Set up a sales ledger with buyer, quantity, price and payment columns"
                - "Enter every sale from the most recent batch"
                - "Update the ledger and chase overdue invoices @recurring(monthly:5)"
                - "Work out the average days each buyer takes to pay"
            - name: Reading chick behaviour under the brooder
              description: |-
                ## Purpose
                In the first ten days the chicks tell you whether the heat is right faster than any thermometer: huddled under the heat means too cold, crowded at the walls means too hot, clumped to one side means a draught. Learning to read the spread of chicks at a glance lets you adjust brooders and curtains before growth suffers.

                ## Milestones
                1. The four common chick spread patterns and what each means learned.
                2. Chick distribution checked and photographed morning, afternoon and night for one batch.
                3. Brooder height or curtain adjustments made and their effect noted.
                4. A short guide with photos left in the house for anyone covering for you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A photo guide to chick spread under the brooder, made from your own house, is posted for anyone who covers the brooding period."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find a brooding guide that shows chick spread patterns"
                - "Photograph chick spread at three times of day in the first week"
                - "Note each brooder or curtain change and how the chicks responded"
                - "Print the photos with one-line explanations for the house wall"
            - name: Recognising common broiler diseases early
              description: |-
                ## Purpose
                Coccidiosis, respiratory infections, gumboro and Newcastle disease show different early signs in droppings, breathing, posture and water use, and calling the vet a day earlier can be the difference between treating a few birds and losing a house. Learning the signs well enough to describe them clearly makes every vet call quicker and more useful.

                ## Milestones
                1. The early signs of the main broiler diseases in your region listed with your vet.
                2. Normal and abnormal droppings recognised and photographed.
                3. A checklist of what to tell the vet: age, deaths per day, water use, signs.
                4. Which diseases are notifiable in your country and how to report them noted.

                ## Notes
                Never treat with medicines left over from another batch or bought without advice. Diagnosis and treatment belong to the vet.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of early disease signs and a vet call checklist, agreed with your vet, is kept in the feed room."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your vet which broiler diseases are most common locally"
                - "Attend a poultry health session run by the extension service"
                - "Write a vet call checklist of age, deaths, water use and signs"
                - "Note which diseases must be reported to veterinary services"
            - name: Understanding FCR and production efficiency factor
              description: |-
                ## Purpose
                Feed conversion ratio says how many kilograms of feed made one kilogram of bird, and the production efficiency factor combines liveability, weight and days into one number processors use to rank growers. Understanding both lets you compare your batches with each other and talk on equal terms with a contract buyer.

                ## Milestones
                1. FCR and the production efficiency factor formula written out with a worked example.
                2. Both figures calculated for your last two batches.
                3. The main causes of poor FCR listed: waste, heat, disease, uneven birds, late catching.
                4. One change chosen to improve FCR next batch.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "FCR and production efficiency factor are calculated for at least two batches and one improvement is chosen for the next."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the FCR and efficiency factor formulas with an example"
                - "Calculate both for your last two batches"
                - "Check feeders for spilled feed that inflates FCR"
                - "Choose one change to improve FCR for the next batch"
            - name: Humane catching and crating of broilers
              description: |-
                ## Purpose
                Rough catching causes bruised breasts, broken wings and deaths in the crate, all of which the processor or customer sees and pays less for. Training everyone who catches to work in dim light, hold birds correctly and fill crates to the right number protects welfare and carcass grade together.

                ## Milestones
                1. The correct way to pick up and hold a broiler shown and practised by every catcher.
                2. Crate numbers per crate set for the expected weight and weather.
                3. Lights dimmed and catching done in the cool of night or early morning.
                4. Bruising and dead on arrival figures from the buyer recorded per batch.

                ## Notes
                Many countries have animal welfare rules for transport. Ask veterinary services what applies to poultry, and ask the processor for its crate density rule.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "All catchers have been shown correct handling, and each batch record shows birds per crate and the buyer's bruising and dead on arrival figures."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the processor for its rules on crating and catching times"
                - "Show each catcher how to hold a broiler by both legs or the body"
                - "Set the birds per crate for the expected weight and heat"
                - "Record bruising and dead on arrival from the buyer's report"
            - name: Hygienic slaughter and dressing for small producers
              description: |-
                ## Purpose
                Selling dressed birds earns more per bird than live sales, but carcasses dressed in a yard with poor hygiene carry salmonella and campylobacter to customers and break public health rules. Learning the legal and hygienic way to stun, bleed, scald, pluck, eviscerate and chill, or deciding not to process at all, protects customers and your licence.

                ## Milestones
                1. The rules for on-farm or small-scale poultry processing confirmed with public health and veterinary services.
                2. A training session or supervised day at a licensed processor completed.
                3. A written step-by-step process with clean and dirty areas separated.
                4. Chilling and cold storage confirmed fast enough for the number of birds processed.

                ## Notes
                Rules vary widely and some countries forbid selling birds processed outside a licensed plant. Check before you invest in pluckers or scalders.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The legal position on small-scale processing is recorded, and either a written hygienic process with training completed or a decision not to process is on file."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask public health whether you may sell birds processed on the farm"
                - "Arrange a supervised day at a licensed poultry processor"
                - "Write the processing steps with clean and dirty areas marked"
                - "Check that chillers bring carcasses down to safe temperature quickly"
            - name: Dead bird examination and lab submissions
              description: |-
                ## Purpose
                When deaths rise, the cause is usually found by opening birds, and many veterinary laboratories in the region will examine fresh dead birds for a small fee or free. Knowing how to choose, keep and send birds for examination, and keeping the results, turns a bad week into a diagnosis instead of a guess.

                ## Milestones
                1. The nearest veterinary diagnostic laboratory and its submission rules found.
                2. The way to choose and chill fresh birds for submission agreed with your vet.
                3. A submission form and cooler box kept ready on the farm.
                4. Laboratory results filed with the batch record they belong to.

                ## Notes
                Send birds that died very recently or sick birds the vet chooses, not ones dead for a day in the heat. Do not open birds yourself if a notifiable disease is suspected.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The laboratory's submission rules and a ready cooler box are on the farm, and any results are filed with their batch record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the veterinary laboratory that examines poultry near you"
                - "Ask the lab how to chill and transport birds for submission"
                - "Keep a cooler box and submission forms in the feed room"
                - "File any lab results with the batch record"
            - name: Drinker line flushing and water sanitation
              description: |-
                ## Purpose
                Drinker lines warm up in a hot house and grow a slimy biofilm that harbours bacteria and blocks nipples, and medicines or vitamins put through the water make it worse. Learning to flush lines properly between batches and during them, and to sanitise water as your vet advises, keeps water clean right to the last nipple.

                ## Milestones
                1. A method for flushing each drinker line at high flow learned and written down.
                2. Lines flushed and cleaned between every batch as part of cleanout.
                3. Lines flushed during the batch after any medication or vitamin through the water.
                4. A sanitising product and method chosen with your vet and recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written flushing method is in use, and the batch record shows flushing after each water treatment and at cleanout."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Open the end of a drinker line and look for slime and sediment"
                - "Write the flushing method for your drinker system"
                - "Ask your vet which water sanitiser suits your system"
                - "Flush the lines after every course given through the water"
            - name: Live bird or dressed bird sales decision
              description: |-
                ## Purpose
                Selling live birds at the farm gate is fast and needs no plant, while dressed birds sell for more but bring processing costs, chilling, packaging and stricter rules. Comparing the margin per bird and the work for each route, with real prices from your buyers, settles how each batch will leave the farm.

                ## Milestones
                1. Live and dressed prices per bird or per kilogram from at least three buyers.
                2. Processing, chilling, bag and transport costs per bird worked out for the dressed route.
                3. Margin per bird and hours of work compared for both routes.
                4. A sales route chosen for the next three batches.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of live and dressed sales shows margin per bird for each, and a chosen route is recorded for the next three batches."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask three buyers for live and dressed broiler prices"
                - "Work out processing and chilling cost per dressed bird"
                - "Compare margin per bird and hours of work for both routes"
                - "Record the chosen sales route for the next three batches"
            - name: Upgrading to nipple drinkers and pan feeders
              description: |-
                ## Purpose
                Open bell drinkers and trough feeders spill water into the litter and feed onto the floor, which shows up as wet litter and a poor FCR. Pricing a move to nipple lines and pan feeders, and working out how many batches the savings take to pay it back, tells you whether the upgrade is worth doing now.

                ## Milestones
                1. Current feed waste and wet litter problems noted from recent batches.
                2. Quotes for nipple drinker lines, pressure regulators and pan feeders for one house.
                3. Payback worked out from expected feed and litter savings per batch.
                4. A decision recorded, with the installation booked between batches if yes.

                ## Notes
                Start from the **Purchase decision** template. Nipple lines need clean water and a regulator set to bird height, or birds go thirsty.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A payback calculation for nipple drinkers and pan feeders is written, and the decision with any installation date is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note spilled feed and wet litter seen in the last two batches"
                - "Get quotes for nipple lines and pan feeders for one house"
                - "Work out how many batches the savings take to repay the cost"
                - "Book installation in the gap between two batches if worth it"
            - name: Roof insulation, curtains and fans for heat
              description: |-
                ## Purpose
                An uninsulated zinc roof radiates heat straight onto the birds, and still air in the last weeks is what kills heavy broilers. Comparing roof insulation or reflective paint, better side curtains and extra fans by cost and effect lets you spend on the change that lowers afternoon temperature most for your money.

                ## Milestones
                1. Afternoon temperatures at bird height recorded on several hot days.
                2. Options priced: roof insulation, reflective coating, roof sprinklers, curtains and fans.
                3. Expected temperature or mortality improvement for each option noted from suppliers or other growers.
                4. One upgrade chosen and installed before the hottest months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One heat upgrade is installed, and afternoon temperatures recorded before and after it are compared."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Record bird-height temperature at 2 pm on three hot days"
                - "Price roof insulation, reflective coating and extra fans"
                - "Ask two other growers which change made the biggest difference"
                - "Install the chosen upgrade and repeat the temperature readings"
            - name: Backup power for brooding and ventilation
              description: |-
                ## Purpose
                Losing power on the first night of brooding or a hot afternoon in week six can kill birds within hours, and outages often come with storms. Sizing a generator or other backup for brooders, fans and pumps, wiring it for a quick changeover and testing it monthly means a cut is an inconvenience rather than a loss.

                ## Milestones
                1. The power draw of brooders, fans, lights and water pumps added up.
                2. A generator or backup system sized to run the essentials, with a changeover switch fitted by an electrician.
                3. Fuel for at least a day stored safely away from the house.
                4. A monthly test run recorded in a log.

                ## Notes
                Gas brooders keep chicks warm in a cut, but fans and pumps still need power. Have any changeover switch fitted by a qualified electrician.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A backup power source runs the brooders, fans and pumps, and the test log shows a run every month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the wattage of every essential item in the house"
                - "Get an electrician to quote for a generator and changeover switch"
                - "Store fuel for a day safely away from the house"
                - "Run the generator under load and log the test @recurring(monthly:15)"
            - name: Licensed processing plant or on-farm processing
              description: |-
                ## Purpose
                Once dressed sales are chosen, the next question is where birds are processed: a licensed plant charging per bird, a shared community facility, or your own approved processing room. Comparing cost per bird, booking reliability, distance and the investment and inspections your own room would need settles a decision that is hard to reverse.

                ## Milestones
                1. Licensed plants and shared facilities within reach listed with fees and booking rules.
                2. The cost and approvals needed for an on-farm processing room estimated.
                3. Cost per bird compared at your batch size for each option.
                4. An option chosen, with the first booking or application made.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of processing options with cost per bird is on file, and the chosen option has a first booking or application made."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List licensed poultry plants and shared facilities you could use"
                - "Ask each about fees, minimum numbers and booking notice"
                - "Estimate what an approved on-farm processing room would cost"
                - "Record the chosen option and make the first booking"
            - name: Spent litter and manure as a sideline income
              description: |-
                ## Purpose
                Every batch leaves tonnes of litter and manure that vegetable growers will often pay for, and disposing of it badly brings flies and complaints from neighbours. Composting or selling it properly turns a cleanout chore into a small income and keeps the site clean between batches.

                ## Milestones
                1. The volume of spent litter per batch estimated.
                2. Local rules on storing and spreading poultry manure checked.
                3. Buyers among nearby crop farmers found, or a covered composting area set up.
                4. Litter sales income recorded in the batch closeout.

                ## Notes
                Store litter covered and away from water and the house, and ask the extension officer how long it should compost before use on food crops.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Spent litter from each batch is either sold or composted under cover, with income or disposal recorded in the closeout report."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate how many bags or truckloads of litter each batch leaves"
                - "Ask the extension officer how long litter should compost before use"
                - "Offer bagged litter to three nearby vegetable growers"
                - "Add litter sales to the batch closeout report"
            - name: Comparing fast-growing and coloured broiler strains
              description: |-
                ## Purpose
                Modern white broilers reach market weight fastest on the least feed but suffer in heat and need tight management, while slower coloured or dual-purpose birds tolerate heat and rougher conditions and can sell at a premium to some customers. Trying a small batch side by side gives you your own numbers before switching.

                ## Milestones
                1. Strains available from local hatcheries listed with chick prices and days to market.
                2. Customer demand for coloured or slower-grown birds checked with buyers.
                3. A small trial batch grown and its weight, FCR, mortality and price recorded.
                4. A decision on which strain to grow for each market recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side record of at least one trial batch compares strains on weight, FCR, mortality and price, with a decision noted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the strains local hatcheries offer with days to market"
                - "Ask buyers whether they would pay more for coloured birds"
                - "Grow a small trial batch of the alternative strain"
                - "Compare trial results with your usual birds and record the choice"
            - name: Christmas and Easter peak batch planning
              description: |-
                ## Purpose
                Demand for chicken spikes before Christmas, Easter, Carnival and other holidays, and chicks for those weeks are booked out early. Working backwards from the holiday to the placement date, booking chicks and feed months ahead and lining up buyers turns the peak into the most profitable batch of the year.

                ## Milestones
                1. Peak sales weeks for the year identified from past sales or buyers.
                2. Placement dates calculated backwards from each peak catching date.
                3. Chicks and feed booked for the peak batches.
                4. Buyers confirmed with numbers and finished weights for the peak.

                ## Notes
                Leave a few days of slack: a batch that is ready two days late misses the week people buy.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Chicks and feed are booked for each peak batch, and buyers have confirmed numbers before placement."
                cadence: cyclic
              tasks:
                - "Mark the year's peak chicken sales weeks on the calendar"
                - "Count back from each peak to the latest placement date"
                - "Book peak chicks and feed and confirm buyer numbers @recurring(yearly)"
                - "Ask regular buyers how many extra birds they want for the peak"
            - name: Catching and dispatch day for a finished batch
              description: |-
                ## Purpose
                Catching day brings together feed withdrawal timing, a catching crew, crates, transport and the buyer's slot, and if one piece slips, birds sit hungry in hot crates or arrive full of feed. A plan agreed a week ahead, with a checklist for the night itself, protects the weight you spent six weeks building.

                ## Milestones
                1. Catching time, crew, crates and truck confirmed a week ahead.
                2. Feed withdrawal timing agreed with the buyer or processor and set.
                3. Any medicine withdrawal periods confirmed as complete.
                4. Birds counted out and a dispatch note signed by the buyer or driver.
              priority: high
              deadlineOffsetDays: 49
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The batch is caught at the agreed time with withdrawal periods complete, and a signed dispatch note records birds sent."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm catching time, crew and crates with the buyer a week ahead"
                - "Check every medicine and feed withdrawal period has finished"
                - "Lift feeders at the time the processor asks"
                - "Count birds out and get the dispatch note signed"
            - name: Health inspection visit for the broiler unit
              description: |-
                ## Purpose
                Veterinary services, public health or a buyer's auditor may visit to check housing, biosecurity, records, dead bird disposal and medicine use. Preparing the paperwork and the site ahead of a visit makes it a short, friendly check and builds the reputation that brings incentives and contracts.

                ## Milestones
                1. The inspector's checklist or the points they usually cover obtained.
                2. Batch records, vaccination and medicine records and the visitor log up to date.
                3. Site tidied: no spilled feed, dead birds or standing water.
                4. Any points raised in the visit written down and closed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The inspection is passed or every point raised is written down with a date it was fixed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the inspecting office what a poultry inspection covers"
                - "Bring batch, medicine and visitor records up to date"
                - "Clear spilled feed and standing water around the houses"
                - "Write down each point raised and the date it was fixed"
            - name: First delivery under a processor contract
              description: |-
                ## Purpose
                Processor contracts bring a steady buyer, but also a weight specification, a catching slot, condemnation deductions and a payment cycle that are new to many growers. Treating the first delivery as an event, with every term understood and checked against your records, avoids a disappointing first settlement.

                ## Milestones
                1. The contract's weight range, price basis and deductions understood and noted.
                2. Batch timing planned so birds hit the weight range on the agreed slot.
                3. The processor's settlement sheet checked against your own counts and weights.
                4. Differences raised with the processor within a week.

                ## Notes
                Ask a lawyer or an experienced grower to read the contract before signing if any term is unclear.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first contract batch is delivered on its slot, and the settlement sheet has been checked line by line against your own records."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the contract's weight range, price basis and deductions"
                - "Plan placement so birds reach the weight range on the slot"
                - "Compare the settlement sheet with your own counts and weights"
                - "Raise any difference with the processor in writing"
            - name: Notifiable disease outbreak contingency plan
              description: |-
                ## Purpose
                Avian influenza and Newcastle disease are reportable in most countries, and a suspected case can mean movement restrictions, culling and weeks without sales. A written plan for what to do in the first hour, who to call, how to stop movement on and off the farm and how to keep the business afloat is far easier to write calmly now.

                ## Milestones
                1. The signs that must trigger a call to veterinary services written down.
                2. Emergency contacts: vet, veterinary services, buyers, feed supplier and hatchery.
                3. Steps for stopping all movement on and off the farm listed.
                4. Cash and buyer impact of a lost batch estimated and noted in the risk register.

                ## Notes
                Start from the **Risk register** template. Report a suspected notifiable disease as the law in your country requires; do not move or sell birds while waiting for advice.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written outbreak plan with trigger signs, emergency contacts and movement steps is posted in the feed room, and the risk is logged in the register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask veterinary services which poultry diseases must be reported"
                - "List emergency phone numbers and post them in the feed room"
                - "Write the steps to stop movement on and off the farm"
                - "Walk through the outbreak plan with everyone on the farm @recurring(yearly)"
            - name: Starting with a backyard batch of 100 birds
              description: |-
                ## Purpose
                Around a hundred birds in a small shed is enough to teach brooding, feeding, weighing and selling at low risk, before money goes into a full house. Running it properly, with records, as a real test of whether you and your customers like the business, is better than a casual flock.

                ## Milestones
                1. A small, secure, ventilated shed or pen ready with brooding area.
                2. One hundred chicks placed with feed, water, heat and a simple record sheet.
                3. Weekly weights, deaths and feed used recorded through to sale.
                4. Every bird sold and a profit or loss worked out for the batch.

                ## Notes
                Neighbours and family make good first customers, but write their orders down and take a deposit before placing.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A batch of about 100 birds is raised and sold with a complete record sheet and a profit or loss figure."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Take pre-orders and deposits for the first hundred birds"
                - "Prepare a small shed with a draught-free brooding corner"
                - "Keep a single sheet for daily deaths, feed and weekly weights"
                - "Work out profit or loss once the last bird is sold"
            - name: Scaling from 500 to 5,000 birds a batch
              description: |-
                ## Purpose
                Going from a few hundred birds to several thousand changes almost everything: hand feeding gives way to feed lines, buckets to nipple drinkers, family help to paid workers, and one buyer to several. Planning the step up in stages, with the money and buyers lined up for each, avoids growing the house faster than the sales.

                ## Milestones
                1. Written buyer commitments or sales history covering the larger batch size.
                2. House, equipment, water and power needs for the new size worked out.
                3. Labour and management needs for the larger batch planned.
                4. The step-up split into stages, each with a cost and a go or no-go test.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A staged growth plan shows cost, buyers and a go or no-go test for each step, and the first stage decision is recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down how many more birds current buyers would take"
                - "List the equipment, water and power the larger batch needs"
                - "Split the growth into stages with a cost for each"
                - "Set a sales test that must be met before each stage starts"
            - name: Growing as a contract grower for an integrator
              description: |-
                ## Purpose
                In several Caribbean countries large poultry companies supply chicks, feed and veterinary support to contract growers and pay a fee per bird based on performance. It can mean steady income without marketing worries, but also house standards to meet and a ranking system to understand. Reading the terms closely before committing protects the house investment.

                ## Milestones
                1. Integrators operating in your area contacted and their grower terms obtained.
                2. House specifications, inputs supplied and fee calculation understood for each.
                3. Two current contract growers asked about payment and support.
                4. A decision recorded, with legal review of the contract if going ahead.

                ## Notes
                Ask how the grower fee is calculated, how often growers are ranked and what happens if the company stops placing birds. Get the contract reviewed by a lawyer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Terms from at least one integrator are compared against your own costs, and a recorded decision includes legal review of any contract signed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask local poultry companies whether they take contract growers"
                - "Get the house specification and fee terms in writing"
                - "Speak to two current contract growers about their experience"
                - "Send any contract to a lawyer before signing"
            - name: Running broilers alongside a day job
              description: |-
                ## Purpose
                Many growers raise broilers before and after a full-time job, which works until the hot afternoon or the sick-bird morning arrives while they are at work. Setting up automatic waterers, a reliable helper, phone alerts or a simple camera and a schedule that matches your hours makes the batch manageable without risking the birds.

                ## Milestones
                1. Daily tasks split into before-work, after-work and weekend jobs.
                2. A trained helper who can check the house at midday in the final weeks.
                3. Automatic water and enough feeder space so birds never wait for you.
                4. A temperature alert or camera installed, if power and signal allow.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written daily schedule and a trained midday helper cover every day of a batch, with automatic water in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Split farm jobs into before-work, after-work and weekend lists"
                - "Find and train a neighbour or relative to check at midday"
                - "Fit automatic water to every drinker line"
                - "Price a temperature alarm that sends a text to your phone"
            - name: Family broiler business with clear roles
              description: |-
                ## Purpose
                Family broiler farms run on goodwill until someone feels they do all the night checks and someone else keeps the money. Writing down who does brooding, daily walks, sales, money and catching, and how profits are shared, keeps the family working together and the birds looked after.

                ## Milestones
                1. Every regular job on the farm listed.
                2. A named person and a backup for each job agreed at a family meeting.
                3. How money is handled and profit shared written down.
                4. A review meeting held after each batch.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list gives each farm job an owner and a backup, profit sharing is agreed, and a review is held after each batch."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every job from brooding to collecting payments"
                - "Hold a family meeting to name an owner and backup for each job"
                - "Write down how money is kept and profit shared"
                - "Meet for half an hour after each batch to review"
            - name: Reduced antibiotic programme planned with the vet
              description: |-
                ## Purpose
                Buyers and customers increasingly ask how antibiotics are used, and resistance makes careless use dangerous for everyone. A programme built with your vet around better brooding, water hygiene, vaccination and records, where antibiotics are used only when prescribed, can support a premium label and lower costs.

                ## Milestones
                1. Current antibiotic use for the last three batches listed from records.
                2. A plan agreed with your vet on prevention and when treatment is needed.
                3. Every treatment recorded with prescription, product, dates and withdrawal period.
                4. Any label claim checked against the rules before it appears on packaging.

                ## Notes
                Never withhold treatment from sick birds to protect a label; treat them on the vet's advice and sell them through the normal channel after withdrawal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A vet-agreed reduced antibiotic plan is on file, and every batch record lists any treatment with prescription and withdrawal dates."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every antibiotic used in the last three batches"
                - "Book a meeting with your vet to plan prevention measures"
                - "Add prescription and withdrawal columns to the batch record"
                - "Check labelling rules before printing any antibiotic claim"
            - name: Free-range and pasture broiler niche
              description: |-
                ## Purpose
                Some hotels, restaurants and households pay noticeably more for birds raised with outdoor access, often slower-growing strains. The niche brings higher prices but more predator losses, longer growing time and claims that need to be honest. Testing it with a small batch and named customers shows whether the premium covers the extra cost.

                ## Milestones
                1. Customers willing to pay a premium named, with the price they would pay.
                2. A fenced, shaded range with predator protection set up next to a house.
                3. A trial batch grown and its cost per bird compared with house-reared birds.
                4. A decision on continuing the niche recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial pasture batch is grown and sold, and cost per bird against the premium earned is written down with a decision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask five possible customers what they would pay for pasture birds"
                - "Fence and shade a small range beside the house"
                - "Grow a trial batch and record cost per bird"
                - "Compare the premium earned with the extra cost"
            - name: Staggered multi-house placements for weekly supply
              description: |-
                ## Purpose
                Shops and restaurants want birds every week, not a flood every seven weeks, but all-in all-out still has to hold within each house. Running several houses or sites on staggered placements, with biosecurity between them, gives continuous supply and steadier cash without mixing ages in one house.

                ## Milestones
                1. Weekly demand from regular buyers measured.
                2. A placement calendar giving each house its own start dates and cleanout gaps.
                3. Separate boots, tools and walking order from youngest to oldest birds set up.
                4. Weekly supply delivered for a full cycle of placements.

                ## Notes
                Always visit the youngest birds first and the oldest last in the day, and keep sites far enough apart that one batch's problems do not reach the next.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A placement calendar for all houses is in use, and the sales ledger shows weekly supply through a full cycle."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work out how many birds buyers take each week"
                - "Draw a placement calendar with start and cleanout dates per house"
                - "Set a walking order from youngest to oldest birds"
                - "Give each house its own boots and hand tools"
            - name: Yearly batch benchmarking and house performance review
              description: |-
                ## Purpose
                Once a year of closeout reports exists, patterns appear that single batches hide: the wet season batches with higher deaths, the house that always finishes lighter, the supplier whose chicks start slow. Comparing every batch side by side, and against figures the extension service or processor shares, shows where next year's money is best spent.

                ## Milestones
                1. Every batch of the year in one table with mortality, weight, FCR, days and margin.
                2. Batches compared by season, house and chick supplier.
                3. Your figures set against any regional or processor averages available.
                4. Three priorities for next year written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly table of all batches, compared by season, house and supplier, is written up with three priorities for the coming year."
                cadence: cyclic
              tasks:
                - "Copy every closeout report of the year into one table"
                - "Compare results by season, house and chick supplier"
                - "Ask the extension service or processor for average figures"
                - "Hold the yearly batch benchmarking review @recurring(yearly)"
---

# Broiler Production

Broiler Production is for anyone raising meat chickens to sell, from the first backyard batch of a hundred birds to a grower running several houses on a contract. The projects start with the foundations: a batch plan, approvals, a house sized correctly, a chick supplier, a feed programme, clean water and a biosecurity plan. Then come the routines that run every batch, the skills of reading birds and spotting disease, upgrade and sales decisions, dated events such as catching day and the Christmas peak, situations from part-time growers to contract growers, and specialist work on reduced antibiotic programmes, pasture birds and continuous supply.

What repeats is the daily flock walk and water reading, weekly weighing, litter and feed checks, monthly sales, pest and backup power rounds, and yearly reviews of registration, water quality and vaccination. The Purchase decision, Vendor, Operational checklist, Metrics log and Risk register templates pair with the projects that point to them. Vaccines, medicines and disinfectants are always chosen and used with your vet and the product label, never a dose from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
