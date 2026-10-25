---
id: agriculture.tilapia-aquaculture
name: Tilapia Aquaculture
description: "Plan a tilapia farm, get permits and water right, stock good fingerlings, run daily oxygen, feeding and water tests, then harvest, process and sell every pond at a known cost per kilogram."
category: business
version: 1.0.0
tags: [agriculture, tilapia-aquaculture, small-business, aquaculture, fish-farming, tilapia, water-quality, caribbean]
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
        - name: Tilapia Aquaculture
          description: "Farming tilapia in ponds or tanks: stocking, water quality testing, feeding, harvest, processing and selling to restaurants and fish vendors."
          projects:
            - name: Tilapia production plan and harvest target
              description: |-
                ## Purpose
                Before digging a pond or buying a tank, decide how many kilograms of fish you want to sell a month, at what size and to whom, because pond area, fingerling numbers, feed orders and aeration all follow from that one figure. Growers who stock first and look for buyers later often end up with a pond of half-kilogram fish and nowhere to send them. A one-page plan now turns guesswork into a schedule.

                ## Milestones
                1. A monthly sales target in kilograms and a target harvest size per fish written down.
                2. At least two likely buyers named, such as a restaurant, a fish vendor or a market stall.
                3. The number of fingerlings and the water volume or pond area needed worked back from the target.
                4. A planned first stocking month and expected first harvest month.

                ## Notes
                Most small farms aim for a whole fish of 350 to 600 grams for the plate trade. Fillet buyers want bigger fish, which take longer and more feed, so ask buyers before choosing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written one-page plan names the monthly kilogram target, harvest size, fingerling numbers, first stocking month and at least two buyers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how many kilograms of fish you could sell in a typical week"
                - "Ask two possible buyers what size of fish they want and how often"
                - "Work out fingerling numbers and water volume from the monthly target"
                - "Pick a first stocking month that lands harvest outside the worst of the wet season"
            - name: Aquaculture permits and water rights check
              description: |-
                ## Purpose
                Most countries need some combination of a fisheries or aquaculture licence, permission to take water from a river or well, and approval to discharge pond water, and some restrict which tilapia strains may be imported or stocked at all. Finding out now avoids a stop notice after the ponds are dug, and a licence is often the condition for incentives, extension support and supermarket buyers.

                ## Milestones
                1. The fisheries division or agriculture ministry asked what a tilapia farm must register or license.
                2. The water authority's rules on abstraction and discharge for your source confirmed.
                3. Any restriction on species or strains you may stock noted in writing.
                4. Applications submitted, with reference numbers and renewal dates filed.

                ## Notes
                Ask about discharge into rivers early. Releasing pond water or escaped fish into a waterway is the issue authorities care about most.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every licence and water permit the authorities named for the farm is granted or applied for, with reference numbers and renewal dates on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Call the fisheries division and ask what a tilapia farm must register"
                - "Ask the water authority whether your source needs an abstraction permit"
                - "Confirm which tilapia strains may legally be stocked in your country"
                - "Check fish farm licences and water permits are current @recurring(yearly)"
            - name: Pond site and water source survey
              description: |-
                ## Purpose
                Tilapia farms fail most often on water: a well that runs low in the dry season, a stream that floods the ponds in October, or soil that will not hold water. Walking the site with a spade and a notebook before any digging tells you whether earthen ponds, lined ponds or tanks will work, and where the drain can go.

                ## Milestones
                1. The water source measured or estimated for flow in both the wet and dry season.
                2. A soil sample from pond depth tested for clay content by a simple jar or ribbon test.
                3. The site's slope, flood marks and drainage outlet sketched on one page.
                4. A decision recorded on whether the site suits earthen ponds, lined ponds or tanks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page site sketch shows water source, flow estimate, soil test result, flood line and drain route, with a pond type chosen."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask neighbours how high the water rose in the last big flood"
                - "Dig a hole to pond depth and do a clay ribbon test on the soil"
                - "Time how long the well or stream takes to fill a known container"
                - "Sketch the site with the water inlet, ponds and drain outlet marked"
            - name: Earthen ponds, tanks or cages for your site
              description: |-
                ## Purpose
                Earthen ponds are cheapest per kilogram of fish but need clay soil and space, tanks need power and pumps but fit a backyard, and cages in a reservoir need permission and security. Choosing the system on paper, with costs and running needs side by side, stops you spending your capital on the wrong one.

                ## Milestones
                1. Two or three systems compared on build cost, power need, water need and yearly output.
                2. Quotes or price estimates gathered for the leading option.
                3. Labour and security needs for each option written down.
                4. One system chosen with the reasons recorded.

                ## Notes
                Start from the **Purchase decision** template. A visit to a working farm using each system teaches more than any brochure.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two culture systems on cost, power, water and output ends in one chosen system with reasons."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the culture systems your site and water could support"
                - "Visit one working tilapia farm and note what system they run"
                - "Get prices for liners, tanks or excavation for the leading option"
                - "Record the chosen system and why the others were ruled out"
            - name: Pond construction and water holding test
              description: |-
                ## Purpose
                Leaking banks, a missing drain or a pond that cannot be emptied fully will cost you fish at every harvest. Building with a sloped bottom, a drain pipe with a monk or standpipe, and a freeboard above the highest flood line, then filling and watching it for a week, catches the faults before fish go in.

                ## Milestones
                1. Pond walls, bottom slope and drain structure built to the agreed design.
                2. An inlet screen and an outlet screen fitted to stop wild fish getting in and farmed fish getting out.
                3. The pond filled and its level checked daily for one week with seepage noted.
                4. Leaks or weak walls repaired and the pond signed off as ready to stock.

                ## Notes
                Ask the extension or fisheries officer to look at the design before the contractor starts. Overflow and escape routes matter as much as depth.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each pond holds water with no more than ordinary evaporation loss for seven days, with drain and screens working."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the extension officer to review the pond design and drain layout"
                - "Agree a written scope and price with the excavation contractor"
                - "Fit inlet and outlet screens before the first fill"
                - "Mark the water level on a stake and check it each morning for a week"
            - name: Water quality test kit and baseline readings
              description: |-
                ## Purpose
                Dissolved oxygen, temperature, pH, ammonia, nitrite and alkalinity decide whether tilapia eat, grow or die, and you cannot see any of them. A reliable test kit and a set of baseline readings from the empty or newly filled pond give you something to compare against when fish start behaving oddly.

                ## Milestones
                1. A dissolved oxygen meter or test kit and a kit for pH, ammonia, nitrite and alkalinity in hand.
                2. The source water tested before it goes into the ponds.
                3. Baseline readings for each pond recorded at dawn and mid afternoon.
                4. Safe working ranges for each reading written in the log, agreed with the extension or fisheries officer.

                ## Notes
                Start from the **Metrics log** template. A dissolved oxygen meter is the one instrument worth paying for; the rest can start as colour kits.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A water quality log holds baseline dawn and afternoon readings for every pond plus the source water, with agreed safe ranges written at the top."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Price a dissolved oxygen meter and a freshwater test kit"
                - "Test the source water before it enters any pond"
                - "Take dawn and mid afternoon readings in each pond for three days"
                - "Write the safe range for each reading at the top of the log"
            - name: Choosing a fingerling hatchery and strain
              description: |-
                ## Purpose
                Poor fingerlings, mixed sizes or a high share of females can halve a pond's harvest no matter how well you feed. Comparing hatcheries on strain, sex reversal or all-male guarantee, health record and delivery, and seeing their tanks in person, is the single choice that most decides your first cycle.

                ## Milestones
                1. At least two licensed hatcheries contacted with the same questions.
                2. Each hatchery's strain, typical male percentage, fingerling size and price recorded.
                3. One hatchery visited, with tanks and fish condition seen in person.
                4. A supplier chosen and a booking made for the first stocking.

                ## Notes
                Start from the **Vendor** template. Ask for references from two farmers who bought from them in the last year.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A licensed hatchery is chosen after comparing at least two on strain, male percentage, size and price, and the first batch is booked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List licensed tilapia hatcheries within a day's drive"
                - "Ask each about strain, all-male percentage, fingerling size and price"
                - "Visit the most promising hatchery and look at the tanks"
                - "Book fingerlings for the first stocking date"
            - name: Tilapia feed supplier and pellet size programme
              description: |-
                ## Purpose
                Feed is usually more than half the cost of growing tilapia, and the wrong pellet size or a floating feed that arrives stale wastes money every day. Agreeing a supplier, a starter, grower and finisher feed and a feeding chart before stocking means the right bag is on the shelf when the fish need it.

                ## Milestones
                1. Two feed suppliers compared on protein level, pellet sizes, floating or sinking and price per bag.
                2. A feeding chart by fish weight obtained from the feed maker.
                3. The first cycle's feed need estimated and the first order placed.
                4. A dry, rat-proof feed store set up off the floor.

                ## Notes
                Floating feed lets you see whether fish are eating, which is worth the extra cost for a new grower.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A feed supplier is chosen, a feeding chart by fish weight is on file, and the first cycle's feed is estimated and ordered."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two feed suppliers for tilapia feed prices by pellet size"
                - "Get the feed maker's feeding chart by fish weight"
                - "Estimate the first cycle's feed need in bags"
                - "Set up pallets and a lid or bin system in the feed store"
            - name: Aeration and backup power set-up
              description: |-
                ## Purpose
                Ponds stocked above a few fish per square metre lose oxygen at night, and tanks can drop to lethal levels within an hour of a power cut. A sized aerator or blower and a backup plan for outages, a generator, a battery system or a standby pump, is what stands between one storm and a dead harvest.

                ## Milestones
                1. Aeration need estimated for each pond or tank at full stocking.
                2. Aerators or blowers installed and running on a timer or night schedule.
                3. A backup power source fitted that can run critical aeration for at least a night.
                4. The changeover from mains to backup tested and written as a short procedure.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every stocked pond or tank has working aeration and a tested backup power source that can run it through a night without mains power."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the supplier to size aeration for your stocking and water volume"
                - "Install aerators and set them to run from dusk to after dawn"
                - "Fit a backup generator or battery system for the critical aerators"
                - "Test the backup by switching off mains for an hour @recurring(monthly:15)"
            - name: Cost of production and break-even price per kilogram
              description: |-
                ## Purpose
                Without a cost per kilogram you cannot tell whether a vendor's offer is a good one or whether a bigger pond would make or lose money. Adding up fingerlings, feed, power, labour, ice and losses for one cycle gives a break-even price you can quote from and check every quarter.

                ## Milestones
                1. All costs for one cycle listed, including fingerlings, feed, power, labour, ice and transport.
                2. An expected survival rate and harvest weight agreed as planning figures.
                3. A cost per kilogram and break-even price calculated.
                4. A target selling price set with a margin above break-even.

                ## Notes
                Ask the agent to build a simple cost sheet from your list once you have the numbers.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cost sheet shows the cost per kilogram for one cycle, the break-even price and a target selling price."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every cost for one full cycle with current prices"
                - "Ask the agent to turn the list into a cost per kilogram sheet"
                - "Set a target price per kilogram above break-even"
                - "Update the cost sheet with actual feed and power prices @recurring(quarterly)"
            - name: Dawn oxygen and fish behaviour round
              description: |-
                ## Purpose
                Oxygen in a tilapia pond is lowest just before sunrise, and fish gulping at the surface at dawn are the first warning of a crash that can kill a pond by mid morning. A short round at first light, meter in hand, catches trouble while there is still time to aerate, stop feeding or add water.

                ## Milestones
                1. A dawn round of every pond or tank walked each morning with oxygen and temperature read.
                2. Readings written in the log before breakfast.
                3. An agreed low-oxygen action written on the pond wall or phone: extra aeration, no feed, fresh water.
                4. A helper trained to do the round when you are away.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Dawn oxygen and temperature readings are logged for every pond on at least six mornings a week for a full cycle."
                cadence: rolling
              tasks:
                - "Read dawn oxygen and temperature in every pond and log them @recurring(daily)"
                - "Write the low-oxygen action steps on a card at the pond"
                - "Show a helper how to take and log the dawn reading"
            - name: Weekly water chemistry tests
              description: |-
                ## Purpose
                Ammonia, nitrite, pH and alkalinity drift slowly as fish grow and feed goes up, so a single bad reading is often the end of weeks of change nobody tracked. Testing on the same day each week shows the trend and tells you when to cut feed, exchange water or ask the extension officer for help.

                ## Milestones
                1. Ammonia, nitrite, pH and alkalinity tested in every pond on one fixed day a week.
                2. Readings logged beside the dawn oxygen record.
                3. Any reading outside the agreed range acted on and the action noted.
                4. Test reagents checked for expiry and replaced before they run out.

                ## Notes
                Start from the **Metrics log** template, the same one as your baseline readings, so the trend sits in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly ammonia, nitrite, pH and alkalinity results are logged for every pond for twelve weeks running, with actions noted for any out-of-range reading."
                cadence: rolling
              tasks:
                - "Test ammonia, nitrite, pH and alkalinity in every pond @recurring(weekly:mon)"
                - "Note the action taken beside any reading outside the safe range"
                - "Check the expiry dates on test reagents and reorder early"
            - name: Daily feeding routine and feed log
              description: |-
                ## Purpose
                Overfeeding pollutes the water and wastes the most expensive input, while underfeeding stretches the cycle by weeks. Feeding at fixed times, watching how fast the pellets go and writing down every scoop gives you the feed figure you need for conversion ratio and cost per kilogram.

                ## Milestones
                1. Feeding times fixed, usually two or three a day, and kept to.
                2. Each pond's daily ration set from the feeding chart and the latest sample weight.
                3. Every feeding logged by pond with the amount and how quickly it was eaten.
                4. Feeding cut back on low-oxygen mornings, cloudy days and in cool water.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The feed log shows daily feed per pond for a full cycle, with no gaps longer than two days."
                cadence: rolling
              tasks:
                - "Log feed given to each pond and how fast it was eaten @recurring(daily)"
                - "Set each pond's daily ration from the feeding chart and last sample weight"
                - "Agree the low-oxygen and cloudy-day feeding cut with anyone who feeds"
            - name: Monthly sample weighing and pond biomass update
              description: |-
                ## Purpose
                Feed rations, harvest dates and sales promises all depend on knowing how heavy the fish are, and eyeballing a pond is wrong by a wide margin. Netting and weighing a sample once a month gives an average weight, an estimate of total biomass and an early sign if growth has stalled.

                ## Milestones
                1. A sample of at least 30 fish netted from each pond and weighed.
                2. Average weight and estimated biomass calculated and logged.
                3. Daily feed ration adjusted to the new biomass.
                4. Growth compared with the planned curve and any lag explained.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each pond has a monthly average weight and biomass estimate logged for every month of the cycle, with feed rations updated each time."
                cadence: rolling
              tasks:
                - "Net and weigh a sample of 30 fish from each pond @recurring(monthly:12)"
                - "Calculate average weight and pond biomass from the sample"
                - "Adjust the daily ration to the new biomass figure"
            - name: Fish farm biosecurity rules
              description: |-
                ## Purpose
                Diseases such as streptococcosis and tilapia lake virus travel on fish, nets, boots and water from other farms. Simple rules on where fingerlings come from, who may walk the pond banks and how nets are cleaned cost almost nothing and protect a whole season of stock.

                ## Milestones
                1. A written list of biosecurity rules covering new fish, visitors, nets, boots and vehicles.
                2. A quarantine tank or pond set aside for new or returned fish.
                3. Separate nets and buckets for each pond, or a cleaning step between ponds.
                4. Rules posted at the farm entrance and explained to every worker.

                ## Notes
                Never stock wild-caught fish or fish from an unknown source. Disinfectants for nets and boots are chosen with the vet or fisheries officer and used as the label says.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written biosecurity rules are posted at the farm entrance, a quarantine unit exists, and every worker has been taken through the rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one page of rules for new fish, visitors, nets and boots"
                - "Set aside a tank or small pond as quarantine for new stock"
                - "Mark nets and buckets by pond or set up a rinse station"
                - "Walk the farm and check every biosecurity rule is being kept @recurring(quarterly)"
            - name: Predator and bird control rounds
              description: |-
                ## Purpose
                Herons, egrets, kingfishers, otters in some places and people with a cast net can take a large share of a pond before anyone notices the numbers are short. Regular checks of netting, fencing and the pond banks keep losses down and show you where to strengthen defences.

                ## Milestones
                1. Pond edges, overhead lines or bird netting and fencing checked on a fixed day each week.
                2. Holes, fallen lines and signs of theft logged and repaired.
                3. Bird pressure noted by month to show when netting matters most.
                4. Any protected species on the farm identified so control stays legal.

                ## Notes
                Many fish-eating birds are protected. Ask the wildlife or fisheries office what deterrents you may use before doing anything beyond netting and lines.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly predator and fence check is logged for a full cycle, with every hole or fallen line repaired within a week."
                cadence: rolling
              tasks:
                - "Walk the pond banks and check nets, lines and fences @recurring(weekly:thu)"
                - "Log any damage or signs of theft with the date"
                - "Ask the wildlife office which bird deterrents are allowed"
            - name: Sludge removal and water exchange schedule
              description: |-
                ## Purpose
                Uneaten feed and droppings build into sludge that releases ammonia and eats oxygen, especially in tanks and heavily fed ponds. A planned schedule of partial water exchange, sludge siphoning or settling, and somewhere legal for the waste to go keeps water stable without wasting scarce dry season water.

                ## Milestones
                1. A water exchange and sludge removal plan written for each pond or tank type.
                2. A legal and practical outlet chosen for waste water and sludge, such as irrigating grass or crops.
                3. Exchange and sludge work logged against water test results.
                4. The plan adjusted for the dry season when water is short.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sludge removal and water exchange are logged monthly for every unit, and waste water goes to an outlet the authorities accept."
                cadence: rolling
              tasks:
                - "Siphon or drain sludge and log the water exchanged @recurring(monthly:20)"
                - "Choose a crop or grass area that can take the nutrient-rich waste water"
                - "Write a reduced exchange plan for the dry season"
            - name: Mortality log and dead fish disposal
              description: |-
                ## Purpose
                Seeing a few dead fish a week is normal, but a rising count is the earliest warning of disease or bad water, and dead fish left in a pond spread infection. Counting, recording and disposing of every dead fish the same way shows the trend and keeps the farm clean.

                ## Milestones
                1. Dead fish removed and counted by pond every day they are seen.
                2. Counts logged with any signs such as red patches, popped eyes or fin rot.
                3. A disposal method set up away from the ponds, such as burial with lime or a covered pit.
                4. A threshold agreed with the vet or fisheries officer above which they are called.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mortality log by pond is kept for the whole cycle and weekly totals are reviewed against an agreed call-the-vet threshold."
                cadence: rolling
              tasks:
                - "Dig or build a covered disposal pit away from the ponds"
                - "Agree a weekly mortality count that triggers a call to the vet"
                - "Total the week's dead fish by pond and compare with last week @recurring(weekly:sun)"
            - name: Pump, blower and aerator maintenance schedule
              description: |-
                ## Purpose
                Paddlewheel bearings, blower filters and pump impellers wear out quietly until one fails on the hottest night of the year. A short maintenance checklist done on fixed dates, with spare belts, fuses and a spare pump on the shelf, turns breakdowns into routine jobs.

                ## Milestones
                1. Every pump, blower, aerator and generator listed with its service needs.
                2. A monthly and quarterly checklist written for cleaning, greasing and inspection.
                3. Critical spares bought and stored dry.
                4. Each service logged with the date and any part replaced.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A maintenance log shows monthly checks on all aeration and pumping equipment for six months, with spares in stock."
                cadence: rolling
              tasks:
                - "List every pump, blower, aerator and generator on the farm"
                - "Clean filters and check belts and bearings on all aerators @recurring(monthly:8)"
                - "Service the generator and test-run pumps under load @recurring(quarterly)"
                - "Buy spare belts, fuses and one spare pump"
            - name: Monthly fish sales and payments ledger
              description: |-
                ## Purpose
                Fish sold on credit to vendors and restaurants is easy to lose track of, and a farm can look busy while cash runs out. A simple ledger of every sale, weight, price and payment, closed at the end of each month, shows who owes you and which buyers are worth keeping.

                ## Milestones
                1. Every sale recorded with date, buyer, kilograms, price and payment status.
                2. Unpaid amounts followed up each month.
                3. Monthly totals of kilograms sold and money received calculated.
                4. Average price per kilogram compared with the break-even price.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sales ledger closed at the end of each month shows kilograms sold, money received, money owed and average price against break-even."
                cadence: rolling
              tasks:
                - "Set up a sales book or sheet with columns for buyer, kilograms, price and payment"
                - "Close the month's sales and chase any unpaid amounts @recurring(monthly:28)"
                - "Compare the month's average price with your break-even price"
            - name: Understanding dissolved oxygen and the dawn crash
              description: |-
                ## Purpose
                Algae make oxygen by day and use it at night, so a thick green pond can swing from too much oxygen in the afternoon to almost none at dawn. Understanding that cycle, and what cloudy weather, hot nights and heavy feeding do to it, explains most sudden fish kills and how to prevent them.

                ## Milestones
                1. The daily oxygen cycle in a pond explained in your own words.
                2. Dawn and afternoon readings compared for one pond over a week.
                3. The weather and feeding conditions that raise crash risk listed.
                4. A personal rule written for when to run extra aeration.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains the daily oxygen cycle using a week of your own readings and states your rule for extra aeration."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an extension leaflet on dissolved oxygen in fish ponds"
                - "Take dawn and mid afternoon oxygen readings in one pond for a week"
                - "List the weather and feeding conditions before any low reading"
                - "Write your rule for when extra aeration goes on"
            - name: Ammonia, nitrite and pH basics for fish farmers
              description: |-
                ## Purpose
                The same ammonia reading can be harmless in cool, slightly acid water and deadly in warm water at high pH, which confuses many new growers. Learning how these readings work together lets you read your test kit properly and explain a problem clearly to the extension officer.

                ## Milestones
                1. The difference between total ammonia and the toxic unionised form understood.
                2. How pH and temperature change ammonia risk explained with an example from your log.
                3. The link between overfeeding, sludge and nitrite spikes understood.
                4. A short cheat sheet of what each reading means kept with the test kit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page cheat sheet beside the test kit explains ammonia, nitrite and pH risk, checked by the extension officer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find a fisheries guide that explains ammonia and pH in fish ponds"
                - "Work through one example from your own water log"
                - "Write a one-page cheat sheet and keep it with the test kit"
                - "Ask the extension officer to check the cheat sheet"
            - name: Reading tilapia behaviour at feeding time
              description: |-
                ## Purpose
                Healthy tilapia rush the feed and clear it within minutes; slow, scattered or absent fish are telling you about water, temperature or disease long before the test kit does. Learning what normal looks like in your own ponds turns every feeding into a free health check.

                ## Milestones
                1. Normal feeding behaviour described for each pond: speed, splash and time to clear.
                2. Warning signs listed, such as fish at the surface, flashing, lying on the bottom or ignoring feed.
                3. A week of feeding notes compared with water readings.
                4. Workers shown what to report straight away.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written description of normal and warning behaviour for your ponds is shared with every person who feeds."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Time how long each pond takes to clear its feed for one week"
                - "Write down what normal feeding looks like in each pond"
                - "List the behaviours workers must report the same day"
                - "Go through the list with everyone who feeds the fish"
            - name: Recognising common tilapia diseases early
              description: |-
                ## Purpose
                Streptococcosis, columnaris, parasites such as Trichodina and tilapia lake virus can move through a pond within days, and treatment works best when it starts early and with a correct diagnosis. Knowing the main signs means you call the vet or fisheries officer with a good description and fresh samples, not a bucket of dead fish.

                ## Milestones
                1. The main signs of the common tilapia diseases in your region listed with photos.
                2. The fisheries or veterinary lab that examines fish identified, with its sampling rules.
                3. A sampling kit ready: bags, ice box, labels and a form.
                4. A practice description of a sick fish written as you would give it to the vet.

                ## Notes
                Never treat fish with antibiotics or chemicals without a diagnosis and a vet's direction, and always respect the withdrawal period before sale.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A disease signs sheet, the lab's contact and sampling rules, and a ready sampling kit are kept at the farm."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the fisheries officer which tilapia diseases are seen locally"
                - "Collect photos of the main signs into one sheet"
                - "Find out how the lab wants sick fish packed and delivered"
                - "Pack a sampling kit with bags, labels and an ice box"
            - name: Feed conversion ratio and growth records
              description: |-
                ## Purpose
                Feed conversion ratio, the kilograms of feed used for each kilogram of fish produced, is the number that decides whether a pond made money. Learning to calculate it from your own feed log and harvest weights shows whether feeding, water or fingerlings are the weak link.

                ## Milestones
                1. The formula for feed conversion ratio understood and written down.
                2. Feed conversion calculated for at least one finished pond.
                3. The result compared with the feed maker's target for that feed.
                4. The two biggest causes of a poor ratio on your farm identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Feed conversion ratio is calculated for at least one harvested pond and compared with the feed maker's target, with causes of any gap noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Total the feed used in one pond from the feed log"
                - "Divide total feed by the kilograms of fish harvested"
                - "Ask the feed supplier what ratio their feed should achieve"
                - "Write down the likely causes of any gap"
            - name: Managing green water and plankton blooms
              description: |-
                ## Purpose
                A healthy green colour in an earthen pond feeds the fish and shades out weeds, but a bloom that turns brown, blue-green or crashes overnight can strip the oxygen. Learning to read water colour and a Secchi disc reading lets you manage the bloom with the extension officer rather than react to it.

                ## Milestones
                1. A Secchi disc made or bought and a target visibility range agreed with the extension officer.
                2. Water colour and visibility recorded weekly beside oxygen readings.
                3. The signs of a bloom crash listed with the action to take.
                4. Any pond fertilising plan agreed with the extension officer, not guessed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Weekly Secchi readings and water colour are logged for two months alongside oxygen, with a target range agreed with the extension officer."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Make a Secchi disc from a painted lid on a marked cord"
                - "Agree a target visibility range with the extension officer"
                - "Record water colour and Secchi depth each week for two months"
                - "Write the bloom crash signs and actions on the pond card"
            - name: Netting, grading and moving fish without stress
              description: |-
                ## Purpose
                Rough seining, long time out of water and moving fish in the heat of the day cause scale loss, stress and disease outbreaks a week later. Practising calm handling, grading by size and moving fish in the cool of morning protects the stock you have spent months growing.

                ## Milestones
                1. A seine net and grading tools suited to your pond sizes in hand.
                2. A handling routine written: time of day, water in containers, aeration in transport.
                3. One practice seining and grading done with a helper.
                4. Losses after handling tracked for two weeks and compared with normal.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written handling routine is used for at least one grading, with losses in the following two weeks recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the seine net for holes and the right mesh size"
                - "Write a handling routine for early morning seining and grading"
                - "Run one practice grading with a helper"
                - "Count losses for two weeks after the grading"
            - name: Hygienic gutting, scaling and filleting for small sellers
              description: |-
                ## Purpose
                Restaurants and supermarkets increasingly want tilapia cleaned, scaled or filleted, and they pay more for it, but only if it is done cleanly and kept cold. Learning the basic cuts and a hygiene routine on the farm adds value to every kilogram and is often the first thing a public health inspector asks about.

                ## Milestones
                1. A clean processing table, potable water, knives and ice set up away from the ponds.
                2. Whole cleaned, scaled and filleted cuts practised to a consistent standard.
                3. Fillet yield from a whole fish measured on a sample batch.
                4. The public health or food safety rules for selling processed fish checked.

                ## Notes
                Keep fish on ice from harvest to sale. Warm fish spoil within hours in Caribbean heat, and one bad delivery can cost a restaurant buyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A clean processing station is set up, fillet yield is measured on a sample batch, and the food safety rules for processed fish are on file."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up a washable table, potable water and ice box for processing"
                - "Watch or take a lesson from an experienced fish cleaner"
                - "Weigh whole fish and fillets from a sample batch to get yield"
                - "Ask the public health office what licence processed fish sales need"
            - name: All-male or mixed-sex fingerlings decision
              description: |-
                ## Purpose
                Tilapia breed early, and a mixed-sex pond fills with small fish that compete for feed so few reach plate size. All-male fingerlings cost more but grow more evenly; mixed-sex can work with early harvest or a predator fish. Choosing deliberately, with numbers, avoids a pond full of stunted fish.

                ## Milestones
                1. The costs and expected harvest sizes of all-male and mixed-sex stocking compared.
                2. Local rules on sex-reversal hormones and predator fish checked.
                3. A choice made for the next stocking with reasons.
                4. Harvest size distribution recorded to test the choice.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of all-male and mixed-sex stocking ends in a choice for the next cycle, and harvest size spread is recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the hatchery for all-male and mixed-sex prices and male percentage"
                - "Check local rules on sex-reversed fingerlings and predator fish"
                - "Write the decision and reasons for the next stocking"
                - "Record the size spread at the next harvest"
            - name: Paddlewheel or diffused aeration upgrade
              description: |-
                ## Purpose
                As stocking goes up, the cheap aerator that worked in year one becomes the limit on how much fish a pond can carry. Comparing paddlewheels, aspirators and diffused air blowers on oxygen delivered per unit of power, cost and fit with your ponds lets you raise output without raising risk.

                ## Milestones
                1. Current aeration and power use measured for each pond.
                2. Two or three upgrade options compared on oxygen transfer, power use and price.
                3. Expected extra fish per pond from the upgrade estimated.
                4. An upgrade chosen, or a decision to stay recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least two aeration options on oxygen delivered, power and cost ends in a recorded upgrade decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the power meter for aeration over one week"
                - "Ask two suppliers for aerator specifications and prices"
                - "Estimate the extra stocking each option would allow"
                - "Record the upgrade decision and expected payback"
            - name: Biofloc or recirculating tank system evaluation
              description: |-
                ## Purpose
                Biofloc and recirculating systems grow far more fish per cubic metre than ponds and suit small plots, but they need constant power, careful management and more capital. A sober evaluation, with a visit to a working unit and a cost sheet, shows whether intensifying is right for your farm or a costly experiment.

                ## Milestones
                1. One working biofloc or recirculating tilapia unit visited and its running costs noted.
                2. Capital cost, power cost and labour for a small unit estimated.
                3. Risks listed, especially power cuts and system crashes.
                4. A go, wait or no decision recorded.

                ## Notes
                Most intensive systems can lose all their fish within an hour without power. Backup aeration is not optional.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written evaluation of a biofloc or recirculating unit, including a site visit and a cost sheet, ends in a recorded decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find a biofloc or recirculating tilapia farm willing to show you round"
                - "Note their tank volume, stocking, power use and staffing"
                - "Build a cost sheet for a small trial unit on your site"
                - "Record whether to build, wait or stay with ponds"
            - name: Live, whole fresh or fillet sales decision
              description: |-
                ## Purpose
                Live fish sell at a premium to some communities and restaurants, whole fresh on ice suits vendors and markets, and fillets reach supermarkets and hotels but need processing and a licence. Choosing your main product form decides your harvest gear, labour and buyers for years.

                ## Milestones
                1. Prices per kilogram for live, whole fresh and fillet tilapia gathered from buyers.
                2. Extra costs for each form listed, such as tanks, ice, processing and packaging.
                3. Net return per kilogram of live fish compared across the three forms.
                4. A main product form chosen, with a secondary one if it makes sense.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of net return per kilogram for live, whole fresh and fillet sales ends in a chosen main product form."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask three buyers what they pay for live, whole and fillet tilapia"
                - "List the extra costs of each product form"
                - "Work out net return per kilogram of live fish for each form"
                - "Write down the main product form and why"
            - name: Farm-made feed versus commercial pellets trial
              description: |-
                ## Purpose
                Imported feed prices swing with freight and exchange rates, and some growers try supplementing with farm-made feed from rice bran, cassava or soya meal. A small, fair trial in one pond against a control shows whether it really saves money once slower growth and water quality are counted.

                ## Milestones
                1. A farm-made recipe agreed with a nutritionist or extension officer.
                2. Two similar ponds or tanks set up, one on commercial feed and one on the trial feed.
                3. Feed used, growth and water quality recorded in both for at least eight weeks.
                4. Cost per kilogram of fish compared and a decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An eight-week side-by-side trial records feed, growth and water quality in two units and ends with a cost per kilogram comparison and decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the extension officer for a tested farm-made tilapia feed recipe"
                - "Set up two similar units stocked from the same batch"
                - "Weigh samples from both units every two weeks"
                - "Compare cost per kilogram and record the result"
            - name: Solar power for aerators and pumps
              description: |-
                ## Purpose
                Aeration and pumping can be the largest bill after feed, and grid outages are a direct threat to stock. Sizing a solar system, with batteries where night aeration depends on it, can cut costs and add resilience, but only if the numbers and the storm risk are worked through first.

                ## Milestones
                1. Daily energy use of aerators and pumps measured or estimated.
                2. Quotes for a grid-tied or battery system gathered from two installers.
                3. Payback period and hurricane mounting rating compared.
                4. A decision recorded and any incentive or rebate for renewable energy checked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two solar quotes are compared on cost, payback, battery hours and wind rating, and a decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Add up the daily kilowatt hours used by aerators and pumps"
                - "Ask two installers for quotes including wind-rated mounting"
                - "Check whether any renewable energy incentive covers the farm"
                - "Record the payback period and the decision"
            - name: Off-flavour checks and purging before harvest
              description: |-
                ## Purpose
                Tilapia from green ponds can take on an earthy or muddy taste from algae, and one bad-tasting batch can lose a restaurant buyer for good. Tasting a sample before every harvest and holding fish in clean water for a few days when needed protects your name with chefs.

                ## Milestones
                1. A taste test routine written: a sample fish cooked plainly a few days before harvest.
                2. A clean holding tank or pond identified for purging when needed.
                3. Purge duration and result recorded for any affected batch.
                4. Buyers told that every batch is taste-checked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every harvest for six months has a recorded taste test, and any off-flavour batch is purged and rechecked before sale."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Cook a plain sample fish from the next pond due for harvest"
                - "Set aside a clean tank or pond for purging"
                - "Record taste test results in the harvest log"
                - "Tell restaurant buyers that every batch is taste-checked"
            - name: Stocking day for the first batch
              description: |-
                ## Purpose
                Fingerlings arrive stressed from transport, and the first 48 hours decide how many survive. Preparing the pond, checking the water, floating the bags to match temperature and counting what goes in gives you a clean start and a true stocking number for every later calculation.

                ## Milestones
                1. The pond filled, tested and within safe ranges a day before delivery.
                2. Bags floated and water mixed gradually to match temperature and pH.
                3. Fingerlings counted or weighed in and the number logged.
                4. Losses in the first week recorded and reported to the hatchery if high.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Stocking day is completed with water tested the day before, a recorded stocking count, and first-week losses logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm delivery date, time and count with the hatchery"
                - "Test pond water the day before the fingerlings arrive"
                - "Float the bags and mix pond water in slowly before release"
                - "Log the stocking count and any first-week losses"
            - name: Harvest day for a finished pond
              description: |-
                ## Purpose
                Harvest is when months of work turn into money, and it is also when fish are most easily lost to heat, rough handling or no ice. A planned harvest day, with buyers confirmed, ice ordered, crew briefed and scales ready, gets every kilogram to market in good condition.

                ## Milestones
                1. Buyers confirmed for the expected volume with price and collection times.
                2. Feed stopped a day ahead, ice ordered and harvest crew booked.
                3. Fish seined or drained, graded, weighed and iced within the cool hours.
                4. Total harvest, survival rate and average weight recorded.

                ## Notes
                Harvest early in the morning. Ice in a ratio the buyer expects, and never leave fish in the sun waiting for a truck.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pond is harvested with buyers confirmed in advance and total kilograms, survival and average weight recorded the same day."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm buyers and collection times a week before harvest"
                - "Order ice and book the harvest crew"
                - "Stop feeding the pond the day before harvest"
                - "Weigh and record every crate as it leaves the pond"
            - name: Lent and Good Friday peak sales planning
              description: |-
                ## Purpose
                Demand for fish jumps in many Caribbean communities during Lent and around Good Friday, and again for some at Christmas, and prices follow. Timing a stocking so a pond reaches plate size for that window, and lining up buyers early, can make the year's best batch.

                ## Milestones
                1. Last year's peak dates and prices noted from buyers or market records.
                2. A stocking date worked back from the peak using your growth records.
                3. Peak buyers lined up with volumes at least a month ahead.
                4. Peak sales and prices recorded for next year's plan.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pond is timed to reach plate size for the Lenten peak, buyers are confirmed a month ahead, and peak sales are recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask buyers what they paid and sold during last Lent"
                - "Work back a stocking date from Good Friday using your growth curve"
                - "Line up Lenten buyers and volumes a month ahead @recurring(yearly)"
                - "Record peak volumes and prices after Easter"
            - name: Pond draining, drying and restart between cycles
              description: |-
                ## Purpose
                Restocking straight into a pond full of sludge, wild fish and leftover tilapia passes disease and stunted fish into the next cycle. Draining fully, drying the bottom, repairing banks and treating the soil as the extension officer advises gives each cycle a clean start.

                ## Milestones
                1. The pond drained completely and every remaining fish removed.
                2. The bottom dried until it cracks, and excess sludge removed.
                3. Banks, drain and screens repaired.
                4. Soil treatment agreed with the extension officer and the pond refilled and tested.

                ## Notes
                Agricultural lime and any pond treatment are chosen with the extension officer after a soil or water test, not by habit.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pond is drained, dried, repaired and refilled with water tested in range before the next stocking."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Drain the pond fully and remove every remaining fish"
                - "Leave the bottom to dry until it cracks"
                - "Repair banks, drain pipe and screens"
                - "Ask the extension officer whether the soil needs treating before refill"
            - name: Fisheries and public health inspection visit
              description: |-
                ## Purpose
                Licensing, export or supermarket supply often brings an inspection of the ponds, records, water and processing area. Preparing the paperwork and walking the site with the inspector's eyes beforehand turns a nervous day into a short visit and a signed report.

                ## Milestones
                1. The inspection checklist or likely points obtained from the agency.
                2. Licences, stocking records, water logs, mortality log and sales records filed in one folder.
                3. Processing area, toilets and hand washing checked against the rules.
                4. Any findings from the inspection fixed and the fix recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The inspection is passed or every finding is fixed and recorded within the time the inspector set."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agency what the inspector will look at"
                - "Gather licences and farm logs into one folder"
                - "Walk the processing area against the hygiene rules"
                - "Record each finding and the date it was fixed"
            - name: Hurricane and heavy rain plan for fish ponds
              description: |-
                ## Purpose
                One tropical storm can overtop ponds and wash a year's stock into the river, cut power to aerators for days and block the road to buyers. A written plan for overflow, nets over drains, backup power, fuel, feed and an early harvest if a storm is forecast keeps losses small.

                ## Milestones
                1. Overflow levels, spillways and the flood line marked for every pond.
                2. Fuel, spare feed, nets and repair materials listed and stocked for the season.
                3. A trigger agreed for early harvest when a storm is forecast.
                4. Post-storm checks written: oxygen, banks, escapes and dead fish.

                ## Notes
                Start from the **Risk register** template. Escaped tilapia can harm local rivers, so check spillway screens before the season, not during the storm.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written storm plan with overflow levels, stocked supplies, an early harvest trigger and post-storm checks is in place before hurricane season."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark the overflow level and spillway on every pond"
                - "Stock fuel, nets and spare feed for the season"
                - "Agree an early harvest trigger with your main buyers"
                - "Check spillway screens and the storm plan before the season @recurring(yearly)"
            - name: First standing order with a restaurant
              description: |-
                ## Purpose
                A restaurant that takes 20 kilograms every week is worth more than a vendor who buys a whole pond once, because it pays for planning and smooths cash. Landing and delivering the first standing order, on spec and on time, is the proof you can supply year round.

                ## Milestones
                1. Two or three restaurants approached with a sample and a price list.
                2. Size, cut, delivery day, volume and payment terms agreed in writing.
                3. The first four weekly deliveries made on time and on spec.
                4. Feedback from the chef recorded after the first month.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A restaurant receives four consecutive weekly deliveries on the agreed day and spec, with written terms and chef feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Take a sample of cleaned fish to two restaurants"
                - "Agree size, cut, volume, delivery day and payment terms in writing"
                - "Confirm each week's delivery with the chef @recurring(weekly:tue)"
                - "Ask the chef for feedback after the first month"
            - name: Starting small with one backyard tank
              description: |-
                ## Purpose
                A single tank of a few hundred fish is a cheap way to learn water testing, feeding and harvest before committing land and savings to ponds. Run as a proper trial, with records, it tells you whether you enjoy the work and whether your water and buyers can support more.

                ## Milestones
                1. A tank set up with aeration, a drain and a cover against birds and heat.
                2. A few hundred fingerlings stocked and logged.
                3. Daily feed and weekly water records kept through to harvest.
                4. A decision made after the first harvest on whether to expand.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One backyard tank is grown through to harvest with full feed and water records, and a written expand or stop decision follows."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a shaded spot near power and a water point for the tank"
                - "Set up the tank with aeration, a drain and a bird cover"
                - "Stock a few hundred fingerlings and start the logs"
                - "Write an expand or stop decision after the first harvest"
            - name: Running fish ponds alongside a day job
              description: |-
                ## Purpose
                Many tilapia growers work full time elsewhere, so dawn checks, feeding and harvest have to fit around a commute. Designing the farm around that limit, with timers, automatic feeders, a reliable helper and alarms, keeps fish safe on the days you cannot be there.

                ## Milestones
                1. The tasks that must happen at fixed times listed, with who does each.
                2. Timers, an automatic feeder or a low-oxygen alarm fitted where they help most.
                3. A paid or family helper trained and given a written routine.
                4. A weekend slot set for weighing, tests and repairs.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written weekly routine names who does each fixed-time task, and the farm runs a full month with no missed dawn checks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every task that must happen at a fixed time"
                - "Price an aerator timer, automatic feeder or oxygen alarm"
                - "Train a helper and leave them a written routine"
                - "Do weighing, tests and repairs on a weekend morning @recurring(weekly:sat)"
            - name: Converting a reservoir or old pond to tilapia
              description: |-
                ## Purpose
                Many farms have an irrigation reservoir, an old quarry pit or a disused pond that could grow fish, but these often hold wild fish, weeds and unknown water. Assessing and converting one carefully, sometimes with cages, adds income from water you already have without hurting its main use.

                ## Milestones
                1. The water body measured for depth, area, inflow and dry season level.
                2. Permission confirmed if the water is shared or used for irrigation or drinking.
                3. Wild fish and weeds dealt with and a culture method chosen: open stocking or cages.
                4. A first stocking made and its results recorded.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The reservoir or pond is assessed, permitted where needed and stocked with tilapia, with first cycle results recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure depth, area and dry season level of the water body"
                - "Ask the water authority whether fish may be farmed in it"
                - "Choose between open stocking and cages"
                - "Record growth and harvest from the first cycle"
            - name: Family fish farm with clear roles
              description: |-
                ## Purpose
                Family fish farms often run on goodwill until a missed dawn check or an unpaid vendor causes a row. Writing down who feeds, who tests, who sells and who keeps the money, and how profit is shared, keeps the fish alive and the family talking.

                ## Milestones
                1. Every regular farm task listed with one named person responsible.
                2. A cover plan agreed for illness, travel and holidays.
                3. How money is handled and profit shared written down.
                4. A family farm meeting held each quarter to review the numbers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written roles and money agreement is signed off by every family member involved and reviewed at a quarterly meeting."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every regular task on the fish farm"
                - "Agree one named person and one backup for each task"
                - "Write down how sales money is banked and profit shared"
                - "Hold a family farm meeting to review sales and costs @recurring(quarterly)"
            - name: Weekly supply to fish vendors and restaurants
              description: |-
                ## Purpose
                Supplying several buyers every week means harvesting, icing and delivering on a fixed rhythm, with a plan for when one pond is not ready. Running it as a system, with a standing order list, a harvest roster and a cold box route, is what separates a supplier from someone with fish to sell.

                ## Milestones
                1. A standing order list of buyers, volumes and delivery days.
                2. A weekly harvest roster showing which pond supplies each week.
                3. Insulated boxes, ice supply and a delivery route set up.
                4. Missed or short deliveries tracked with the cause.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "At least three buyers are supplied weekly for three months, with fewer than one in ten deliveries missed or short."
                cadence: rolling
              tasks:
                - "Write a standing order list with every buyer's volume and day"
                - "Plan which pond supplies each week for the next three months"
                - "Agree a regular ice supply and buy insulated delivery boxes"
                - "Log any missed or short delivery with the reason"
            - name: Staggered stocking for year-round harvests
              description: |-
                ## Purpose
                Stocking all the ponds at once leaves a farm with fish to sell for one month and nothing for five. Stocking ponds or tanks at intervals, worked back from your growth curve and weekly demand, gives a harvest every few weeks and steady cash for feed and wages.

                ## Milestones
                1. Weekly or monthly demand in kilograms set from your buyers.
                2. Days from stocking to harvest size taken from your own growth records.
                3. A stocking calendar drawn up for every pond for the next year.
                4. Hatchery bookings made to match the calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A twelve-month stocking calendar covers every pond, hatchery bookings match it, and harvests fall at least every six weeks."
                cadence: cyclic
              tasks:
                - "Total weekly demand from all buyers in kilograms"
                - "Draw a twelve-month stocking calendar from your growth curve"
                - "Book fingerlings with the hatchery to match the calendar"
                - "Check the stocking calendar against current pond status @recurring(monthly:5)"
            - name: Own fingerling production and broodstock unit
              description: |-
                ## Purpose
                Growers who depend on one distant hatchery can lose a whole season when supply fails. Producing your own fingerlings from managed broodstock gives control over timing and cost, but it needs separate tanks, good records, the right licence and a plan for producing all-male fry legally.

                ## Milestones
                1. Licensing rules for a hatchery or broodstock unit confirmed.
                2. Broodstock sourced from a licensed supplier and held in dedicated tanks or hapas.
                3. A fry collection, nursing and grading routine written and trialled.
                4. Fingerling cost per thousand compared with buying in.

                ## Notes
                Inbreeding builds quickly in small broodstock groups. Keep breeding records and bring in new licensed stock regularly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A licensed broodstock unit produces at least one batch of fingerlings with recorded survival and a cost per thousand compared with buying."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the fisheries division what licence a tilapia hatchery needs"
                - "Source broodstock from a licensed supplier"
                - "Write and trial a fry collection and nursing routine"
                - "Check broodstock condition and breeding records @recurring(monthly:25)"
            - name: Yearly cycle review and pond benchmarking
              description: |-
                ## Purpose
                After a year the logs hold the answer to which ponds, feeds and fingerlings made money, but only if someone adds them up. A yearly review of survival, feed conversion, cost per kilogram and price by pond turns the records into next year's plan.

                ## Milestones
                1. Survival, average harvest weight, feed conversion and cost per kilogram calculated for every pond cycle.
                2. Best and worst ponds compared and causes noted.
                3. Prices and buyers reviewed against the break-even price.
                4. Three changes for next year written into the production plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review sheet shows survival, feed conversion and cost per kilogram for every pond cycle and lists three changes for next year."
                cadence: cyclic
              tasks:
                - "Gather the year's stocking, feed, mortality and harvest logs"
                - "Calculate survival, feed conversion and cost per kilogram by pond"
                - "Review the whole year and write three changes for next year @recurring(yearly)"
---

# Tilapia Aquaculture

Tilapia Aquaculture is for anyone farming tilapia to sell, from a single backyard tank to a set of earthen ponds supplying restaurants and fish vendors every week. The projects start with the foundations: a production plan, permits and water rights, the site, the choice of ponds, tanks or cages, fingerlings, feed, aeration and a break-even price. Then come the daily and weekly routines that keep fish alive and growing, the skills of reading water and fish, upgrade and sales decisions, dated events such as stocking day, harvest day and the Lenten peak, situations from part-time growers to family farms, and specialist work on staggered stocking and your own fingerling production.

What repeats is the dawn oxygen round and daily feed log, weekly water chemistry and predator checks, monthly sample weighing, sludge, sales and equipment rounds, and yearly reviews of permits, hurricane readiness and the whole cycle. The Purchase decision, Vendor, Metrics log, Operational checklist and Risk register templates pair with the projects that point to them. Treatments, disinfectants and pond lime are always chosen and used with a vet, the fisheries or extension officer and the product label, never a dose from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
