---
id: agriculture.layer-egg-production
name: Layer Egg Production
description: "Plan a layer flock that pays, rear or buy pullets, run the house, light and feed routines, collect, grade and cool eggs every day, and keep shops supplied with a steady count of clean trays."
category: business
version: 1.0.0
tags: [agriculture, layer-egg-production, small-business, poultry, eggs, layers, pullets, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - metrics-log
    - operational-checklist
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Layer Egg Production
          description: "Running a layer flock for eggs: pullet rearing, housing, lighting, feed, egg collection and grading, cool storage and supplying shops."
          projects:
            - name: Layer flock size and first-year business plan
              description: |-
                ## Purpose
                Egg farming looks simple until feed is paid weekly and the first saleable egg is five months away. Deciding the flock size from the eggs you can actually sell, the money you can tie up before point of lay and the house you can build turns a hopeful idea into a plan a lender, a partner or your own family can check.

                ## Milestones
                1. A target flock size chosen, with the daily egg count it should produce at peak written beside it.
                2. Start-up costs listed for housing, equipment, birds and feed until eggs start selling.
                3. A month-by-month cash plan for the first 18 months showing the lowest point of the bank balance.
                4. A one-page plan written that names the market, the system, the flock size and the money needed.

                ## Notes
                Plan on the strain's management guide figures, then knock a little off peak lay and add a little to mortality. Plans built on the brochure's best flock run short of cash in month seven.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page plan exists naming flock size, housing system, target market and the cash needed until the flock pays its own feed bill."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down how many trays a week you believe you can sell and to whom"
                - "List the start-up costs for house, cages or nests, birds and equipment"
                - "Build an 18-month cash plan from placement to the end of the first lay"
                - "Write the one-page layer plan and show it to someone who will question it"
            - name: Local egg market and price check
              description: |-
                ## Purpose
                Egg prices in the Caribbean swing with imported feed, imported eggs and the season, and a new farm that floods one village shop learns this the hard way. Visiting the outlets you want to supply, noting shelf prices, tray sizes and who already supplies them, shows you whether there is room for your eggs before you spend on birds.

                ## Milestones
                1. Shelf prices for small, medium, large and extra large eggs recorded in at least eight outlets.
                2. The current suppliers to each outlet noted, with how often they deliver.
                3. Three outlets identified that said they would consider a new local supplier.
                4. A realistic farm-gate price per tray agreed for planning, below the lowest shelf price seen.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A price sheet from at least eight outlets and a planning farm-gate price per tray are written in the farm file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List eight shops, minimarts, bakeries or supermarkets within your delivery range"
                - "Record egg prices by size and tray or carton at each outlet"
                - "Ask each manager who supplies them and how reliable the supply is"
                - "Set a planning price per tray and write down why"
            - name: Choosing a layer strain for the tropics
              description: |-
                ## Purpose
                Commercial brown and white egg strains differ in egg size, feed eaten per dozen, heat tolerance and how long they hold peak lay, and the hatcheries in your country may offer only two or three. Comparing the strains you can actually get, against what your buyers want, settles the choice before the pullet order is placed.

                ## Milestones
                1. The strains available from hatcheries or pullet rearers in your country listed.
                2. The management guide for each shortlisted strain obtained and read for heat tolerance, egg size and feed use.
                3. Buyer preference for brown or white shells confirmed with your main outlets.
                4. One strain chosen, with the reasons written in the farm file.

                ## Notes
                Ask other layer farmers which strain does well in your district's heat. Their flock records beat any brochure.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A strain is chosen from those locally available, with management guide figures and buyer shell colour preference recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Call two hatcheries and ask which layer strains they supply and when"
                - "Download or request the management guide for each strain offered"
                - "Ask your main outlets whether they prefer brown or white eggs"
                - "Ask two layer farmers which strain held up best through the hot months"
            - name: Poultry farm registration and permits
              description: |-
                ## Purpose
                Most Caribbean countries expect a commercial poultry unit to be registered with the ministry of agriculture, cleared for planning and environmental health, and sometimes the veterinary services, and supermarkets ask for proof before they list you. Getting the registrations sorted before building avoids a house in the wrong place or a buyer who cannot accept your eggs.

                ## Milestones
                1. The permits and registrations needed for a layer unit in your country listed from official sources.
                2. Planning or land use clearance confirmed for the site, including setbacks from homes and water courses.
                3. Farmer and premises registration completed with the ministry or veterinary services.
                4. Copies of every registration, licence and inspection letter filed in one folder.

                ## Notes
                Ask the extension office or veterinary services what applies; the rules for manure, distance from neighbours and egg sale labelling vary from island to island.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every registration and permit needed for the layer unit is held, and copies sit in one labelled farm folder."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the extension office which registrations a layer farm needs"
                - "Check the site against planning and environmental health setbacks"
                - "Submit the farmer and premises registration forms"
                - "Scan every permit and letter into one farm folder"
            - name: Layer house site and layout plan
              description: |-
                ## Purpose
                A layer house built across the breeze, on low ground or beside the road costs you eggs in every hot month and every heavy rain. Settling the site, orientation, clean and dirty zones, feed store, egg room and manure area on paper first means the builder puts things where the daily routine needs them.

                ## Milestones
                1. A site chosen on raised, well-drained ground, with the house long axis set east to west where the land allows.
                2. A layout sketch showing the house, egg room, feed store, footbath points, manure store and vehicle access.
                3. Clean and dirty routes marked so feed trucks and egg collection do not cross manure handling.
                4. House dimensions fixed from the planned flock size and the space allowance in the strain guide.

                ## Notes
                Keep the egg room at the clean end of the house, out of direct sun, and close enough that trays do not sit outside waiting.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated layout sketch shows the house, egg room, feed store, manure area and clean and dirty routes, with house dimensions matched to flock size."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk the land after heavy rain and mark ground that stays wet"
                - "Note the direction of the prevailing breeze at the chosen spot"
                - "Sketch the house, egg room, feed store and manure area to scale"
                - "Work out house size from the strain guide's space per bird"
            - name: Cages, colony or floor system choice
              description: |-
                ## Purpose
                The housing system decides labour, egg cleanliness, how many birds fit in the house and which buyers will take your eggs, and it is expensive to change once built. Comparing conventional cages, enriched colonies, deep litter floor and free range against your money, labour and market leads to a choice you can explain to a buyer or a lender.

                ## Milestones
                1. Each system costed per bird housed, including nests, perches, feeders and drinkers.
                2. Labour per day estimated for collection, cleaning and feeding in each system.
                3. Any welfare rules or buyer policies on cage eggs in your market checked.
                4. One system chosen and the reasons recorded.

                ## Notes
                Start from the **Purchase decision** template. Several hotel groups and supermarket chains now publish cage-free egg commitments, so ask before you buy cages.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on housing system with cost per bird, daily labour and buyer requirements compared for at least three options."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get quotes for cages, colony units and floor equipment for your flock size"
                - "Estimate daily labour hours for each system with a farmer who runs it"
                - "Ask your two biggest prospective buyers about cage-free policies"
                - "Record the chosen system and the deciding reasons"
            - name: Poultry vet and pullet supplier relationships
              description: |-
                ## Purpose
                Farms without a named poultry vet find one only when birds are dying, and a pullet supplier found at the last minute sends whatever is left. Agreeing who advises on health and who supplies birds, months before placement, gives you a vaccination programme, a delivery slot and someone to call at night.

                ## Milestones
                1. A vet with poultry experience agreed, with contact details and their call-out terms written down.
                2. A pullet rearer or hatchery chosen, with vaccination history and delivery age confirmed in writing.
                3. The vet's preferred vaccination programme for your district obtained.
                4. Delivery date for the first birds booked.

                ## Notes
                Start from the **Vendor** template for the pullet supplier. Ask for the rearing flock's vaccination and weight records with every delivery.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named poultry vet and pullet supplier are recorded with contact details, and a delivery date and vaccination programme are on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the veterinary services or other farmers for a poultry vet's name"
                - "Meet the vet and ask for their layer vaccination programme"
                - "Visit the pullet rearer and see the rearing house"
                - "Book the delivery date and get the bird specification in writing"
            - name: Cost of producing a tray of eggs
              description: |-
                ## Purpose
                Feed is usually two thirds or more of the cost of an egg, but pullets, labour, trays, power and losses decide whether a tray sells at a profit. Working out the full cost of one tray of thirty at your planned performance gives you a price floor you never sell below.

                ## Milestones
                1. Pullet cost spread over the eggs each bird is expected to lay in one cycle.
                2. Feed cost per tray worked out from feed price and expected feed per dozen eggs.
                3. Labour, trays, power, water, vet costs and losses added per tray.
                4. A cost per tray and a minimum selling price written at the front of the farm file.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A worked cost per tray of thirty exists, listing feed, pullet, labour, packaging, power and loss costs, with a minimum selling price."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Get the current price of a bag of layer feed from two suppliers"
                - "Work out pullet cost per egg over the expected laying cycle"
                - "Add labour, trays, power and loss costs to reach cost per tray"
                - "Write the minimum selling price per tray on the first page of the file"
            - name: Written biosecurity plan for the layer farm
              description: |-
                ## Purpose
                Newcastle disease, infectious bronchitis and avian influenza can stop egg sales overnight, and most outbreaks arrive on boots, crates, egg trays and visitors. A written plan that says who may enter, what they must do at the gate and how trays and vehicles are handled is the cheapest protection a layer farm has.

                ## Milestones
                1. A perimeter fence and a single controlled entry point in place.
                2. Footbath, hand wash and farm-only boots at every house door.
                3. A rule written for returned egg trays: plastic only, washed and disinfected, or new fibre trays only.
                4. A visitor log at the gate and the plan pinned up where staff see it daily.

                ## Notes
                Start from the **Operational checklist** template. Ask your vet which disinfectant suits footbaths in your conditions and follow the label for strength and change interval.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written biosecurity plan is displayed on the farm, with footbaths at every house door and a visitor log in use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk the farm and mark every way people, vehicles and wild birds get in"
                - "Set up a footbath, hand wash and farm boots at each house door"
                - "Write the rule for egg trays coming back from shops"
                - "Start a visitor log at the gate"
                - "Change the footbath solution as the label directs @recurring(weekly:tue)"
            - name: Twice-daily egg collection rounds
              description: |-
                ## Purpose
                Eggs left in nests or on cage fronts in Caribbean heat lose quality by the hour, get dirty, crack and teach hens to peck them. Collecting at fixed times, at least twice a day, with clean trays and a count at the end of every round, keeps quality up and shows a drop in lay the same day it starts.

                ## Milestones
                1. Two or more fixed collection times set, with the first before mid-morning.
                2. Clean collection trays and a cart kept only for eggs.
                3. Every round counted and written on the house sheet, with cracked and dirty eggs separated.
                4. Floor and corner eggs checked on every round in floor or free-range houses.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eggs are collected at least twice daily at fixed times, and every round's count, cracks and dirties are recorded on the house sheet."
                cadence: rolling
              tasks:
                - "Set the collection times and write them on the egg room door"
                - "Collect and count eggs on the morning and afternoon rounds @recurring(daily)"
                - "Separate cracked, dirty and floor eggs into their own trays"
                - "Write each round's count on the house sheet before leaving"
            - name: Weekly flock performance sheet
              description: |-
                ## Purpose
                Hen-day production, egg weight, feed eaten and deaths tell you more about a flock's health than walking the house ever will, but only if they are added up every week and set against the strain's standard curve. A weekly sheet catches a slide of a few percent before it becomes a lost month.

                ## Milestones
                1. A sheet set up with hen-day percentage, eggs per bird housed, average egg weight, feed per bird and mortality by week of age.
                2. The strain's standard figures copied beside your own for every week.
                3. Each week's figures entered by an agreed day.
                4. Any week more than a few points below standard flagged and discussed with the vet.

                ## Notes
                Start from the **Metrics log** template. Weigh a tray of eggs from the same collection each week so egg weight stays comparable.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week's hen-day production, egg weight, feed per bird and mortality are recorded beside the strain standard for the flock's age."
                cadence: rolling
              tasks:
                - "Copy the strain's standard production curve into the sheet"
                - "Enter hen-day percentage, feed and deaths for the week @recurring(weekly:sun)"
                - "Weigh a full tray from the morning collection and note the average"
                - "Flag any week below standard and note a likely cause"
            - name: Layer feed ordering and storage routine
              description: |-
                ## Purpose
                Running out of layer feed for even a day can knock a flock off lay, while feed kept too long in a hot, damp store loses value and grows mould. A fixed ordering day based on actual use, with stock rotated oldest first on pallets off the floor, keeps the right ration in front of the birds without tying up cash.

                ## Milestones
                1. Weekly feed use worked out from the flock size and the feed sheet.
                2. A reorder point set that covers delivery delays, including holidays and port hold-ups.
                3. Bags stored on pallets, away from walls, with batch dates written on the stack.
                4. The correct feed phase for the flock's age checked on every delivery note.

                ## Notes
                Start from the **Vendor** template for each feed mill. Layer rations change with age; follow the mill's or nutritionist's phase plan rather than mixing your own.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feed is ordered on a fixed monthly cycle against a written reorder point, and the store holds no bags past the mill's use-by period."
                cadence: rolling
              tasks:
                - "Work out how many bags the flock eats each week"
                - "Count feed stock and place the next order @recurring(monthly:8)"
                - "Move older bags to the front of the stack on each delivery"
                - "Check the delivery note shows the right feed phase for the flock's age"
            - name: Drinker lines and water quality checks
              description: |-
                ## Purpose
                Each hen drinks roughly twice as much as she eats and more in the heat, so a blocked nipple line or a hot, dirty tank shows up in the egg count within a day. A weekly walk of every line, with the tank cleaned and the water tested on a schedule, protects lay more cheaply than any additive.

                ## Milestones
                1. Every drinker line, nipple or bell drinker checked for flow and leaks each week.
                2. Header tanks shaded and lidded, with a cleaning date written on each.
                3. A water sample tested for bacteria at a lab or through the extension service.
                4. Daily water meter readings or tank levels recorded, if a meter is fitted.

                ## Notes
                A sudden fall in water use is often the first sign of illness or heat trouble. If you can fit a water meter to each house, do.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Drinker lines are checked weekly, tanks are cleaned on a recorded date, and a water test result from the last year is on file."
                cadence: rolling
              tasks:
                - "Run a finger along each nipple line and note any dry or leaking points"
                - "Walk every drinker line and fix blocked or leaking points @recurring(weekly:wed)"
                - "Clean and refill the header tanks and write the date on each lid @recurring(monthly:12)"
                - "Send a water sample for a bacterial test through the extension office"
            - name: Lighting programme and timer checks
              description: |-
                ## Purpose
                Hens lay in response to day length, and in the tropics the natural day shortens enough between June and December to matter. A written lighting programme that brings birds up to their laying day and never lets it fall, with timers checked after every power cut, keeps lay steady through the year.

                ## Milestones
                1. The lighting programme from the strain guide written for rearing, the step-up to lay and the laying period.
                2. Timers set and labelled with the on and off times for each house.
                3. Bulbs checked for even light along the house, with dead bulbs replaced.
                4. A rule written that the laying day is never shortened once lay has started.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each house has a labelled timer matching the written programme, and monthly checks of timers and bulbs are recorded."
                cadence: rolling
              tasks:
                - "Write the house lighting programme on a card by each timer"
                - "Check timers against the card and replace dead bulbs @recurring(monthly:15)"
                - "Reset every timer after a power cut and note it on the house sheet"
                - "Measure light at the darkest end of the house with a phone light meter app"
            - name: Manure, litter and fly control routine
              description: |-
                ## Purpose
                Wet manure under cages or caked litter on the floor breeds flies, raises ammonia and makes eggs dirty, and fly complaints are the fastest way to fall out with neighbours and environmental health. A weekly round that keeps droppings dry, fixes leaks and moves manure on schedule keeps the house and the neighbourhood comfortable.

                ## Milestones
                1. Wet spots under drinkers found and the leaks fixed.
                2. Litter turned or topped up in floor houses so it stays loose and dry.
                3. Manure removed or covered on a fixed schedule, with a dry store away from the houses.
                4. A simple fly count kept, such as fly spots on a white card, so you see the trend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly manure and litter checks are recorded, and a fly card count is kept so any rise is visible within a week."
                cadence: rolling
              tasks:
                - "Pin white index cards in each house to count fly spots"
                - "Walk under cages or across litter and fix any wet patches @recurring(weekly:fri)"
                - "Agree the manure removal schedule and where it goes"
                - "Ask the extension officer about biological fly control options"
            - name: Egg room cooling and temperature log
              description: |-
                ## Purpose
                Eggs held at house temperature in the Caribbean lose freshness several times faster than eggs in a cool room, and shops notice watery whites and weak yolks. A cool, shaded egg room or cold room held at a steady temperature, with a reading written twice a day, is what lets you promise freshness to a buyer.

                ## Milestones
                1. An egg room or cold room set up out of direct sun, with a thermometer that records maximum and minimum.
                2. A target temperature range agreed with your buyer or health authority and written on the door.
                3. Readings recorded morning and afternoon, with action noted when out of range.
                4. Eggs stored pointed end down and rotated so the oldest leave first.

                ## Notes
                Avoid moving eggs from a cold room straight into hot air for long; condensation on the shell lets bacteria in. Keep the chain steady from cool room to shop.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The egg room has a target temperature on the door and a log with two readings a day and any corrective action noted."
                cadence: rolling
              tasks:
                - "Fit a maximum and minimum thermometer in the egg room"
                - "Write the egg room temperature on the log at opening and closing @recurring(daily)"
                - "Label each stack of trays with its collection date"
                - "Note what was done each time the reading is out of range"
            - name: Rodent and wild bird control
              description: |-
                ## Purpose
                Rats eat feed, chew wiring and eggs and carry salmonella, and wild birds bring disease into an open-sided house. A mapped bait station programme and bird-proofing done once properly cut losses and stand up to any buyer or health audit.

                ## Milestones
                1. Bait stations placed around the outside of every house and feed store, numbered on a map.
                2. Stations checked and logged monthly, with activity recorded.
                3. Bird netting or mesh fitted to gaps in eaves and sides.
                4. Spilt feed cleaned up daily so it does not attract pests.

                ## Notes
                Use tamper-resistant stations and follow the bait label strictly. Keep baits away from children, dogs and the birds themselves.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A numbered bait station map exists and a monthly log shows each station checked, with bird-proofing gaps closed."
                cadence: rolling
              tasks:
                - "Draw a map of the houses and mark numbered bait station points"
                - "Check every bait station and record activity @recurring(monthly:20)"
                - "Close eave and side gaps with mesh where wild birds get in"
                - "Clear spilt feed from around feeders and the store"
            - name: Weekly egg orders and delivery run
              description: |-
                ## Purpose
                Shops and bakeries reorder from whoever turns up when they said they would. A fixed order day, a written order book and a delivery route that runs the same way each week keep outlets stocked, keep eggs moving out of the cool room and show you which customers are growing.

                ## Milestones
                1. An order book listing each customer, their usual trays by size and their delivery day.
                2. Orders confirmed by message the day before every run.
                3. A delivery note signed or photographed at every drop.
                4. Returned or rejected eggs recorded with the reason.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "An order book is kept for every customer and each delivery has a signed or photographed note on file."
                cadence: rolling
              tasks:
                - "Write the order book with each customer's usual order and day"
                - "Message every customer to confirm next week's trays @recurring(weekly:mon)"
                - "Photograph the signed delivery note at each drop"
                - "Record any returned eggs and the reason given"
            - name: Monthly layer farm accounts
              description: |-
                ## Purpose
                Layer farms take cash in small amounts every few days and pay for feed in large ones, so they can feel busy and still lose money. Closing the month with eggs sold, money collected, feed bought and cost per tray tells you whether the price is right before the next feed increase lands.

                ## Milestones
                1. All egg sales for the month entered by customer, with unpaid invoices listed.
                2. Feed, pullet, labour, packaging, power and vet costs entered.
                3. Cost per tray and margin per tray worked out for the month.
                4. Customers more than one delivery behind on payment followed up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month has a closed record of sales, costs, cost per tray and a list of unpaid invoices with follow-up dates."
                cadence: rolling
              tasks:
                - "Set up a simple sheet with sales, costs and cost per tray columns"
                - "Close the month's sales, costs and cost per tray @recurring(monthly:28)"
                - "Send reminders to customers with unpaid deliveries"
                - "Compare this month's cost per tray with last month's"
            - name: Vaccination and flock health calendar
              description: |-
                ## Purpose
                Depending on what the vet expects in your district, a layer flock may be vaccinated many times before point of lay and boosted during lay. A calendar built with the vet, with every vaccination recorded by batch number, is what proves a flock was protected and what a buyer or inspector asks to see.

                ## Milestones
                1. The vet's programme written as a calendar against the flock's age in weeks.
                2. Vaccination records from the pullet rearer filed for every flock received.
                3. Each vaccination recorded with date, product, batch number and who gave it.
                4. Vaccines stored in a fridge with a thermometer, as the label requires.

                ## Notes
                Never alter the programme or add treatments without the vet. Follow withdrawal times on any treatment label before eggs are sold.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A vet-agreed calendar exists for the flock and every vaccination given is recorded with date, product and batch number."
                cadence: rolling
              tasks:
                - "Ask the vet to write the programme against weeks of age"
                - "File the rearer's vaccination records for the current flock"
                - "Check the calendar for vaccinations due in the next month @recurring(monthly:3)"
                - "Put a thermometer in the vaccine fridge and note the reading on use"
            - name: Rearing pullets to point of lay
              description: |-
                ## Purpose
                A pullet's frame, body weight and uniformity at 16 to 18 weeks decide how well she lays for the next year, and rearing faults cannot be fixed later. Rearing your own birds from day-old chicks, by stage, with weights and the lighting programme followed, gives you a flock ready to peak rather than one that never quite gets there.

                ## Milestones
                1. Brooding area ready with heat, litter, feeders and drinkers before chicks arrive.
                2. Weekly sample weights taken and compared with the strain's rearing target from week four.
                3. Rearing lighting programme followed without increases before the agreed age.
                4. Birds moved to the laying house at the vet's and guide's recommended age, with the flock record sent with them.
              priority: medium
              deadlineOffsetDays: 140
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pullet flock reaches transfer age with weekly weights recorded against the strain target and the rearing programme followed."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Prepare the brooding area two days before chicks arrive"
                - "Weigh a sample of pullets and compare with the target @recurring(weekly:thu)"
                - "Pin the rearing lighting programme by the brooder timer"
                - "Plan the transfer day to the laying house with the vet"
            - name: Weighing pullets and reading flock uniformity
              description: |-
                ## Purpose
                Average weight hides a flock where a third of the birds are too light to lay well. Learning to weigh a proper sample, work out uniformity and know what to change when it falls is a skill that pays for itself in every flock you raise or buy.

                ## Milestones
                1. A hanging or digital scale bought and checked against a known weight.
                2. A method practised for catching a random sample from several points in the house.
                3. Uniformity worked out as the share of birds within ten percent of the average.
                4. Actions for a low uniformity result discussed with the vet or feed adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can weigh a random sample of at least 50 birds and calculate uniformity, with one sheet completed and reviewed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Buy or borrow a scale and check it with a known weight"
                - "Catch and weigh 50 birds from five points across the house"
                - "Work out the average and the share within ten percent of it"
                - "Ask the feed adviser what a low result would mean for feeding"
            - name: Spotting layers and non-layers in the flock
              description: |-
                ## Purpose
                Every hen that has stopped laying still eats close to a full ration, and in a flock past peak there can be many of them. Learning to read the comb, vent, pubic bones and plumage tells you which birds are laying, so culling decisions rest on evidence rather than guesswork.

                ## Milestones
                1. The signs of a laying hen learned: red, moist comb, moist vent and wide pubic bone spacing.
                2. Twenty birds handled and scored with an experienced farmer or extension officer.
                3. Low-scoring birds checked again a week later before any decision.
                4. Non-layers recorded and sold or culled following the farm's agreed practice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least 20 hens are handled and scored for laying signs alongside an experienced person, with results recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the extension officer or an older farmer to show you the laying signs"
                - "Handle and score twenty birds on a simple sheet"
                - "Recheck the low scorers a week later"
                - "Write down the farm's rule for when non-layers are removed"
            - name: Egg shell and interior quality faults
              description: |-
                ## Purpose
                Thin shells, blood spots, pale yolks, misshapen and wrinkled eggs each point to something: age, heat, disease, feed or stress. Knowing what each fault usually means helps you ask the vet or feed mill the right question instead of losing a buyer over cracks.

                ## Milestones
                1. A reference card made of common shell and interior faults with their usual causes.
                2. Faults counted from one full day's collection.
                3. Eggs candled to check for blood and meat spots before packing.
                4. A pattern in faults raised with the vet or feed supplier with the counts as evidence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A fault reference card exists and one full day's collection has been counted by fault type and recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Make a reference card of common egg faults and their usual causes"
                - "Sort one day's collection into faults and count each"
                - "Candle a tray to look for blood and meat spots"
                - "Take the fault counts to the vet or feed mill if a pattern appears"
            - name: Early signs of illness in a laying flock
              description: |-
                ## Purpose
                Sick flocks show themselves first in the numbers and the sounds: less water drunk, fewer eggs, soft shells, snicking or coughing at night, a few more dead birds. Learning those signs, and having a rule for when to call the vet, catches disease while it can still be managed.

                ## Milestones
                1. A list of early warning signs written: water drop, lay drop, shell changes, breathing sounds, droppings, mortality.
                2. A trigger agreed with the vet for when a call is made, such as deaths above a set number in a day.
                3. A night listen of the house added to the routine once a week.
                4. Dead birds bagged and kept cool for the vet when the trigger is reached.

                ## Notes
                Sudden high deaths, swollen heads, or a crash in lay can be signs of a notifiable disease. Call the vet or veterinary services at once and stop birds and eggs leaving.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of warning signs and a vet-agreed call trigger are posted in the egg room."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the warning signs list and pin it in the egg room"
                - "Agree the mortality and lay-drop trigger for calling the vet"
                - "Listen to each house after lights out for breathing sounds"
                - "Keep sealed bags and a cool box ready for samples"
            - name: Heat stress in the layer house
              description: |-
                ## Purpose
                Above about 30 degrees hens pant, eat less and lay smaller eggs with thinner shells, and a hot afternoon in September can kill heavy birds. Understanding where heat builds in your house and what cools it, from roof paint to fans and sprinklers, protects lay through the hottest months.

                ## Milestones
                1. House temperatures recorded at bird height at midday through one hot week.
                2. Hot spots and dead air areas marked on the house plan.
                3. Changes listed and costed: roof insulation or white paint, curtains, fans, foggers or roof sprinklers.
                4. A hot day routine written: water checked more often, feeding moved to cooler hours and doors opened.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A week of midday house temperatures is recorded, with a costed list of cooling changes and a written hot day routine."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Hang a thermometer at bird height in the middle of each house"
                - "Record the midday reading every day for a hot week"
                - "Mark the hottest spots on the house plan"
                - "Write the hot day routine for staff"
            - name: Candling and grading eggs by size
              description: |-
                ## Purpose
                Buyers pay by size and expect every tray to match its label, while a cracked egg hidden in a tray costs you the whole order's trust. Learning to candle quickly and grade to your country's size bands, by scale or grader, turns a pile of eggs into a product.

                ## Milestones
                1. The legal or trade size bands for your market written on the grading table.
                2. A candling light made or bought and a routine practised.
                3. Fifty eggs graded by hand on a scale and checked against the grader, if you have one.
                4. Grading accuracy checked by reweighing a sample tray of each size.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Size bands are posted at the grading table and a sample tray of each size reweighs within its band."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find your country's egg size bands and write them on the table"
                - "Set up a candling light in a dim corner of the egg room"
                - "Grade fifty eggs by scale and note the time taken"
                - "Reweigh one tray of each size to check accuracy"
            - name: Egg grading and packing table set-up
              description: |-
                ## Purpose
                Packing areas that are cramped, hot or shared with feed sacks slow every day's work and put dust on the eggs. Setting up one clean table with candler, scale or grader, trays by size and a cracked egg bin in a fixed order makes packing quicker and cleaner.

                ## Milestones
                1. A table at working height in the egg room, washable and used only for eggs.
                2. Equipment laid out in work order: incoming trays, candler, scale or grader, packed trays by size.
                3. A clear place for cracked, dirty and reject eggs, with a rule for what happens to each.
                4. A cleaning routine for the table and equipment at the end of each day.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dedicated packing table with candler, scale and size-sorted trays is set up, and a written end-of-day cleaning routine is posted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Clear the egg room of anything that is not for eggs"
                - "Lay out the packing table in work order"
                - "Label the places for cracked, dirty and reject eggs"
                - "Post the end-of-day cleaning routine by the table"
            - name: Egg trays, cartons and your own label
              description: |-
                ## Purpose
                Unbranded loose trays compete on price alone, while a carton with your farm name, size, packing date and phone number earns repeat customers and is often required by supermarkets. Choosing the packaging and label wording carefully makes your eggs recognisable and keeps you within labelling rules.

                ## Milestones
                1. Label requirements for eggs in your country checked with the standards body or health authority.
                2. Prices compared for fibre trays, plastic trays and six or twelve egg cartons.
                3. A label designed showing farm name, size grade, pack date or best-before and contact details.
                4. A first print run ordered in a quantity that suits two to three months' sales.

                ## Notes
                Do not put health or nutrition claims on the label without checking the rules. Pack date and size are what buyers check first.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A label meeting local requirements is printed and in use on cartons or trays, with the packaging supplier recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the standards body what an egg label must show"
                - "Price fibre trays, plastic trays and cartons from two suppliers"
                - "Draft the label with farm name, size, date and phone number"
                - "Order a first print run sized to three months of sales"
            - name: Backup power for lights, water and cooling
              description: |-
                ## Purpose
                Long outages in the evening cut the laying day, stop pumps and let the cool room warm, and Caribbean grids fail most in the storm months. Working out which loads must run and comparing a generator, solar with batteries or both settles how the farm keeps laying when the power goes.

                ## Milestones
                1. Essential loads listed with their power draw: lights, water pump, fans, cool room.
                2. Outage history for the last year noted from your own records or neighbours.
                3. Quotes compared for a generator with changeover switch and for solar with battery storage.
                4. A choice made and an installer booked, or a decision recorded to wait.

                ## Notes
                Start from the **Purchase decision** template. Have any changeover switch fitted by a licensed electrician so it cannot feed back into the grid.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on backup power with essential loads listed and at least two costed quotes compared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the lights, pump, fans and cool room with their wattage"
                - "Write down every outage you remember from the last year"
                - "Get quotes for a generator and for solar with batteries"
                - "Record the choice and book the installer"
            - name: Automatic feeders, drinkers and egg belts upgrade
              description: |-
                ## Purpose
                Hand feeding and hand collection make sense for a few hundred birds but eat the day once the flock passes a thousand or two. Costing automatic feed chains or pans, nipple lines and egg belts against the labour they save shows whether the upgrade pays back within a flock or two.

                ## Milestones
                1. Current daily labour for feeding, watering and collection timed.
                2. Quotes obtained for automatic systems sized to the house.
                3. Payback worked out from labour saved and feed wasted less.
                4. A decision recorded to upgrade now, at the next turnaround or not at all.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A payback calculation for automation is written, based on timed labour and at least two quotes, with the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Time a full day of feeding, watering and collecting"
                - "Get two quotes for automatic systems for your house size"
                - "Work out the payback from labour and feed savings"
                - "Plan any install for the next clean-out between flocks"
            - name: Selling spent hens at end of lay
              description: |-
                ## Purpose
                When a flock drops below the point where eggs cover feed, the hens are still worth money as stewing hens, but only if a buyer is lined up before the house must be emptied. Planning who takes the spent birds, at what price and with which withdrawal times cleared, turns the end of a flock into income.

                ## Milestones
                1. The point of lay at which eggs no longer cover feed worked out from your own figures.
                2. Two or three buyers for spent hens identified: processors, vendors or live bird markets.
                3. Any treatment withdrawal times checked as complete before sale.
                4. A sale date agreed with transport and catching crew booked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A spent hen buyer, price and sale date are agreed in writing before the depopulation date, with withdrawal times checked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work out the lay percentage where eggs stop covering feed"
                - "Call three possible buyers for spent hens and ask their price"
                - "Check the treatment record for any open withdrawal times"
                - "Book the catching crew and transport for the sale date"
            - name: Layer manure as compost or a sale
              description: |-
                ## Purpose
                Layer manure is rich and crop farmers will pay for it, but raw, wet manure piled near the houses is a fly and smell problem. Deciding whether to sell it fresh, compost it first or spread it on your own land turns a disposal cost into a small income stream.

                ## Milestones
                1. Monthly manure volume estimated from flock size and removal records.
                2. Interest and prices checked with crop farmers, nurseries and landscapers.
                3. A covered composting or drying area costed if you choose to process it.
                4. A buyer list or composting routine in place, with any environmental rules met.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice on manure use exists, with monthly volume, price or composting plan and any environmental rules noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate how many sacks of manure the flock produces each month"
                - "Ask three crop farmers or nurseries what they would pay"
                - "Check environmental rules on storing and moving manure"
                - "Set up a covered area or a pickup arrangement"
            - name: Pricing eggs by size and buyer
              description: |-
                ## Purpose
                Selling every size at one price leaves money on the table with large eggs and loses buyers on small ones, and a bakery buying fifty trays a week should not pay what a corner shop pays. A written price list by size and channel, reviewed when feed prices move, protects your margin without guessing.

                ## Milestones
                1. Cost per tray from the farm accounts set as the floor for every price.
                2. Prices set for each size grade, with cracked and small eggs priced for bakeries or processors.
                3. Volume prices set for regular large buyers.
                4. A rule written for when prices are reviewed, such as any feed price rise.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written price list by size grade and buyer type exists, every price above cost per tray, with a review trigger stated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take cost per tray from the latest monthly accounts"
                - "Set a price for each size grade and for cracked eggs"
                - "Set volume prices for buyers taking twenty trays or more a week"
                - "Write the price review rule at the top of the list"
                - "Review the price list against the latest feed price @recurring(quarterly)"
            - name: Placing the first flock of point-of-lay pullets
              description: |-
                ## Purpose
                Delivery day sets the tone for the whole laying cycle: stressed, thirsty birds arriving in a house that is not ready will start late and lay unevenly. Having water, feed, light and records ready, and checking every bird off the truck, gets the flock settled and laying on schedule.

                ## Milestones
                1. House cleaned, disinfected and rested for the time the vet advises before arrival.
                2. Water running and feed in the troughs before the truck arrives.
                3. Birds counted off the truck, a sample weighed and the delivery paperwork checked against the order.
                4. The flock record started with placement date, numbers, age, weight and rearer's vaccination record.

                ## Notes
                Start from the **Operational checklist** template. Ask for birds to arrive early in the morning, not in the midday heat.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first flock is placed with numbers, weights and vaccination papers checked and the flock record started on delivery day."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the placement day checklist and walk the empty house with it"
                - "Fill drinker lines and troughs the evening before delivery"
                - "Count and weigh a sample of birds as they come off the truck"
                - "Open the flock record with date, count, age and vaccination papers"
            - name: First regular shop or bakery supply agreement
              description: |-
                ## Purpose
                A first steady buyer turns eggs from something you sell on the roadside into a business with a known weekly volume. Agreeing trays, sizes, delivery day, price and payment terms in writing, even in a short letter, avoids the arguments that end most small supply arrangements.

                ## Milestones
                1. A buyer chosen whose weekly volume fits your expected production at peak.
                2. Sample trays delivered and feedback received.
                3. A short written agreement covering trays, sizes, price, delivery day and payment terms.
                4. The first four weekly deliveries made on time with payment received.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written supply agreement exists with one regular buyer and four on-time deliveries have been paid for."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the buyer whose weekly volume best fits your peak"
                - "Drop off two sample trays and ask for honest feedback"
                - "Write a one-page agreement with price, volume and payment terms"
                - "Record the first four deliveries and payments"
            - name: Clean-out and turnaround between flocks
              description: |-
                ## Purpose
                The weeks between one flock leaving and the next arriving are the only chance to break the disease cycle in the house. A full clean-out, repair and rest period, done to a checklist every time, means the new flock does not inherit the old flock's mites, bacteria and worn equipment.

                ## Milestones
                1. All birds, manure and litter removed from the house.
                2. House dry cleaned, washed, disinfected as the vet advises and left to dry.
                3. Repairs done to cages, nests, drinkers, curtains and lights while the house is empty.
                4. The house rested for the agreed period and signed off before the next flock arrives.

                ## Notes
                Start from the **Operational checklist** template. Check for red mite in cracks and cage joints; they survive weeks without birds.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A completed turnaround checklist is signed and dated for each house before every new flock is placed."
                cadence: cyclic
              tasks:
                - "Book manure removal for the week the flock leaves"
                - "Wash and disinfect the house following the vet's advice"
                - "List and complete every repair while the house is empty"
                - "Sign off the house after the rest period"
            - name: Layer house hurricane preparation
              description: |-
                ## Purpose
                Open-sided poultry houses and loose roofing sheets fail early in a storm, and a farm that loses power and road access for a week cannot feed, water or sell. Preparing before each season with roof checks, feed and water reserves and a plan for eggs that cannot leave the farm gives the flock its best chance.

                ## Milestones
                1. Roof sheets, purlins and hurricane straps checked and fixed before the season.
                2. Feed for at least two weeks and stored water for several days on hand.
                3. Generator fuelled and tested, with a plan for lights, pumps and the cool room.
                4. A plan written for holding or selling eggs when roads are closed, and for checking birds after the storm.

                ## Notes
                Curtains should drop to let wind pass rather than trap it. Never send staff into a house during the storm itself.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each hurricane season the roof is checked, two weeks of feed and several days of water are stored and the storm plan is written."
                cadence: cyclic
              tasks:
                - "Check every roof sheet and strap on the layer houses @recurring(yearly)"
                - "Order an extra two weeks of feed at the start of the season"
                - "Test the generator under load for an hour"
                - "Write what happens to eggs if roads close for several days"
            - name: Health or veterinary inspection of the farm
              description: |-
                ## Purpose
                Veterinary services, environmental health or a supermarket's auditor may visit to check housing, biosecurity, records and egg handling, and a good visit can open a market. Preparing records and the farm for a planned inspection turns it into a chance to show you run a clean, well-documented unit.

                ## Milestones
                1. The inspection checklist or scope obtained from the agency or buyer.
                2. Flock, vaccination, temperature, pest control and sales records brought up to date.
                3. The farm walked against the checklist and gaps fixed.
                4. The inspection completed and any actions listed with dates.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The inspection is completed with records ready and any required actions written with completion dates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the inspector or buyer for the checklist they use"
                - "Bring every farm record up to date in one folder"
                - "Walk the farm with the checklist and fix gaps"
                - "Write up the actions from the visit with dates"
            - name: From backyard hens to a first commercial unit
              description: |-
                ## Purpose
                Many layer farms begin with fifty hens behind the house and neighbours who ask for eggs, then hit the limits of space, feed bought in small bags and no records. Moving to a first unit of a few hundred birds means a proper house, bulk feed, a vet and sales you can count on.

                ## Milestones
                1. Current flock size, eggs sold and costs written down for one month.
                2. A target size for the first commercial unit set from the market you have.
                3. A house and equipment plan costed for that size.
                4. Finance or savings set aside and the first commercial flock ordered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A month of backyard records and a costed plan for a first commercial unit exist, with a decision to proceed or wait recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write down eggs sold and money spent for this month"
                - "List the neighbours and shops already asking for eggs"
                - "Cost a house and equipment for a few hundred birds"
                - "Decide whether to proceed now or wait and write down why"
            - name: Running a layer farm alongside a day job
              description: |-
                ## Purpose
                Hens need collection, water and a look every day, including the days you are at work, travelling or sick. Designing the routine around your hours, with a trained helper and a written cover plan, lets a part-time farmer keep the flock laying without burning out.

                ## Milestones
                1. The daily jobs split into before-work and after-work tasks with times.
                2. A helper trained for collection, water checks and the egg room log.
                3. A written cover sheet for days you cannot be there.
                4. Automation that saves the most time identified, such as nipple drinkers or timers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written daily routine fits your working hours and a trained helper has covered at least one full day using the cover sheet."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the morning and evening farm jobs with times"
                - "Train a helper on collection and the egg room log"
                - "Write the cover sheet for days you are away"
                - "Let the helper run a full day while you check afterwards"
            - name: Free-range eggs for a premium buyer
              description: |-
                ## Purpose
                Hotels, health food shops and some supermarkets pay more for free-range eggs, but only if the birds really range and the claim can be shown. Planning the range area, shade, fencing against dogs and mongoose, and the records that back the label tells you whether the premium covers the extra cost.

                ## Milestones
                1. Any local or buyer definition of free range checked and written down.
                2. A range area fenced with shade and pop-holes sized for the flock.
                3. Predator protection in place for dogs, mongoose and hawks.
                4. A buyer agreed at a premium price that covers the extra land, labour and losses.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on free range, based on a buyer's definition, a costed range set-up and an agreed premium price."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the premium buyer how they define free range"
                - "Measure the land available next to the house for ranging"
                - "Cost fencing, shade and predator protection"
                - "Compare the premium price with the extra cost per tray"
            - name: Family layer farm roles and rota
              description: |-
                ## Purpose
                On a family farm, everyone helps and nobody is in charge of anything in particular, so the cool room log gets missed and two people order feed. Writing who does what, with a rota for weekends and holidays, keeps the flock cared for and the family on speaking terms.

                ## Milestones
                1. Every regular job listed: collection, grading, feed, water, deliveries, accounts.
                2. Each job given one named person responsible and one backup.
                3. A weekend and holiday rota agreed and posted in the egg room.
                4. How family members are paid or rewarded for their work agreed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A posted list names a responsible person and backup for every regular farm job, with a weekend rota."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every regular job on the layer farm"
                - "Hold a family meeting to agree who owns each job"
                - "Post the weekend and holiday rota in the egg room"
                - "Agree how family members are paid for farm work"
            - name: Taking over an existing layer farm
              description: |-
                ## Purpose
                Buying, leasing or inheriting a running layer farm brings birds of unknown age, equipment of unknown condition and customers who may or may not stay. A structured handover in the first three months, starting with records and the flock's health, avoids paying for problems you did not create.

                ## Milestones
                1. The flock's age, strain, vaccination record and recent production figures obtained.
                2. Houses, equipment, power and water checked and repairs listed with costs.
                3. Customers, prices and payment history handed over and each customer contacted.
                4. A vet visit completed to assess the flock's health.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within 90 days, the flock records, equipment repair list, customer list and a vet's assessment are on file."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask the outgoing owner for flock age, strain and vaccination records"
                - "Walk every house and list equipment repairs with costs"
                - "Call each existing customer to introduce yourself"
                - "Book the vet to assess the flock"
            - name: Growing from one house to several
              description: |-
                ## Purpose
                Going from one flock to several changes everything: staggered placements to keep eggs flowing year round, more staff, bigger feed orders and a cool room that must hold more. Planning the step up before building the second house avoids a farm where all flocks peak and crash together.

                ## Milestones
                1. A placement schedule that staggers flocks so total egg output stays steady.
                2. Extra customers lined up to take the added volume.
                3. Staff, cool room and delivery capacity checked for the larger output.
                4. Finance for the next house arranged and building scheduled.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A staggered placement schedule for multiple houses and a buyer list for the extra volume are written before the next house is built."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draw a placement calendar that staggers flocks across houses"
                - "List buyers for the extra trays a second house would produce"
                - "Check whether cool room and delivery van can handle the volume"
                - "Ask the agricultural lender what they need for the next house"
            - name: In-house pullet rearing unit
              description: |-
                ## Purpose
                Buying point-of-lay pullets ties you to one supplier's prices, timing and rearing standards. Building a separate rearing unit, well away from the laying houses, gives you control over bird quality and placement dates, at the cost of more skill, more biosecurity and capital tied up for months.

                ## Milestones
                1. The cost per pullet of rearing your own compared with buying point of lay.
                2. A rearing site chosen with the separation distance and biosecurity the vet recommends.
                3. Brooding and rearing equipment costed.
                4. A decision recorded and, if yes, the first batch of day-old chicks booked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on in-house rearing exists, with cost per pullet compared against bought birds and a vet-approved site."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work out what each bought point-of-lay pullet really costs you"
                - "Cost chicks, feed, heat and labour to rear your own"
                - "Ask the vet how far the rearing site must be from layers"
                - "Record the decision and the reasons"
            - name: Salmonella monitoring with the vet
              description: |-
                ## Purpose
                Salmonella in eggs is a public health concern, and supermarkets, hotels and export buyers increasingly ask for a monitoring programme. Setting up regular environmental sampling with the vet, and acting on results, protects your customers and the farm's reputation.

                ## Milestones
                1. A sampling plan agreed with the vet: what, where and how often.
                2. Samples taken and sent to an approved lab on the agreed dates.
                3. Results filed with the flock record.
                4. A response plan written for a positive result, agreed with the vet and the health authority where required.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A vet-agreed sampling plan is in place and results for every sampling date are filed with the flock record."
                cadence: rolling
              tasks:
                - "Ask the vet to set up an environmental salmonella sampling plan"
                - "Take and send samples on the agreed schedule @recurring(quarterly)"
                - "File each result with the flock record"
                - "Agree with the vet what happens if a sample is positive"
            - name: Disease outbreak contingency plan
              description: |-
                ## Purpose
                If avian influenza or Newcastle disease is confirmed nearby or on the farm, the authorities may restrict movement of birds, eggs and people within hours. A written contingency plan, worked out with the vet in calm times, tells everyone what to do, who to call and how to protect income while the farm is under restriction.

                ## Milestones
                1. Notifiable poultry diseases in your country and the reporting route written down.
                2. Contact list for vet, veterinary services and buyers posted in the egg room.
                3. Steps written for a suspected case: stop movements, isolate, call the vet, hold samples.
                4. Financial impact of a restriction period estimated and any insurance or compensation scheme checked.

                ## Notes
                Start from the **Risk register** template. Reporting a suspected notifiable disease is usually a legal duty; check the rule with veterinary services.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written outbreak plan with reporting route, contacts and first steps is posted and has been reviewed with the vet."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask veterinary services which poultry diseases must be reported"
                - "Post the emergency contact list in the egg room"
                - "Write the first steps for a suspected case"
                - "Review the plan with the vet and update it"
            - name: Second laying cycle decision for an older flock
              description: |-
                ## Purpose
                When egg prices are high or replacement pullets scarce, some farms keep a flock for a second cycle after a planned rest, rather than replacing it. The decision depends on bird health, shell quality, feed costs and welfare rules, and should be made with the vet using the flock's own figures.

                ## Milestones
                1. The flock's production, shell quality and mortality figures for the last ten weeks summarised.
                2. Cost of a second cycle compared with buying replacement pullets.
                3. Any welfare rules or buyer policies on resting flocks checked.
                4. A decision made with the vet and recorded.

                ## Notes
                Any rest programme must be planned with the vet and follow welfare rules; never withdraw feed or water on your own judgement.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a second cycle, made with the vet and based on the flock's production, shell quality and cost figures."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the last ten weeks of the flock's figures"
                - "Price replacement pullets for the same date"
                - "Check welfare rules and buyer policies on resting flocks"
                - "Make the decision with the vet and record it"
            - name: Yearly layer farm review
              description: |-
                ## Purpose
                Once a year, look at every flock's eggs per hen housed, feed per dozen, mortality, price per tray and profit, and set the targets for next year. A yearly review is where you decide whether to change strain, supplier, price or size, with evidence from your own farm.

                ## Milestones
                1. Each flock's eggs per hen housed, feed per dozen and mortality set against the strain standard.
                2. Full year income, costs and profit per tray worked out.
                3. Three things that worked and three that did not written down.
                4. Targets and changes for next year agreed and written in the farm plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written yearly review exists with each flock's key figures against standard, full-year profit per tray and next year's targets."
                cadence: cyclic
              tasks:
                - "Gather the weekly sheets and monthly accounts for the year"
                - "Hold the yearly review of flocks, costs and buyers @recurring(yearly)"
                - "Write three things to keep and three to change"
                - "Set next year's targets in the farm plan"
---

# Layer Egg Production

Layer Egg Production is for anyone keeping hens for eggs as a business in the Caribbean, from the family moving past a backyard flock of fifty birds to the farm with several houses supplying shops, bakeries and supermarkets every week. The projects start with the decisions that fix your costs for the next two years: flock size, the market, strain, housing system, permits, the vet and biosecurity. Then come the daily and weekly machinery of collection, feed, water, light, manure, cool storage and deliveries, the skills of rearing pullets and reading a flock, the upgrades and pricing choices, the dated milestones of placement, turnaround and hurricane season, situations from part-time farmers to taking over a farm, and specialist work on disease contingency, salmonella monitoring and second laying cycles.

What repeats is twice-daily egg collection and the cool room check, the weekly performance sheet, water and manure rounds and delivery run, monthly feed orders, rodent baiting, lighting checks, accounts and the vaccination calendar, and a yearly review. The Purchase decision, Vendor, Metrics log, Operational checklist and Risk register templates pair with the projects that point to them. Vaccines, medicines and any treatment go through your poultry vet and the product label, never a dose from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
