---
id: agriculture.livestock-feed-and-forage
name: Livestock Feed and Forage
description: "Know what your animals eat and what it costs, grow and conserve more of it on the farm as grass, silage and hay, store bought feed safely and plan rations with a nutritionist."
category: business
version: 1.0.0
tags: [agriculture, livestock-feed-and-forage, small-business, livestock, forage, silage, pasture, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - operational-checklist
    - purchase-decision
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Livestock Feed and Forage
          description: "Feeding livestock affordably: imported feed costs, local forage and grasses, silage and hay, feed storage, rations planned with a nutritionist and feed records."
          projects:
            - name: Whole-farm feed budget for the year
              description: |-
                ## Purpose
                Feed is usually 60 to 70 percent of the cost of keeping livestock, and most farms only find out how much they spent when the year is over. Adding up what every group of animals will eat month by month, and how much of it must be bought, shows the cash you need before the dry season and the size of the gap that home-grown forage could close.

                ## Milestones
                1. Every animal group listed with head count, average weight and expected numbers for the next 12 months.
                2. A monthly estimate of bought feed, grazed forage and conserved forage for each group.
                3. Bought feed priced at current supplier rates, with a month-by-month total.
                4. The three most expensive months identified and a cash plan written for them.

                ## Notes
                Build the budget on what animals actually eat, not what the bag says. A first version within a week is worth more than a perfect one in three months; refine it as records come in.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 12-month feed budget exists showing bought and home-grown feed for every animal group, with the three costliest months marked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every animal group on the farm with current head count"
                - "Collect the last three months of feed invoices into one folder"
                - "Estimate monthly bought and home-grown feed for each group"
                - "Rebuild the feed budget from the past year's records @recurring(yearly)"
            - name: Feed cost per animal and per kilo sold
              description: |-
                ## Purpose
                Knowing that feed cost a total sum last month tells you little; knowing it cost a certain amount per kilo of liveweight, litre of milk or dozen eggs tells you whether you made money. Working out that figure for each enterprise is the number every later feed decision gets measured against.

                ## Milestones
                1. Feed used per enterprise for the last full month separated from the farm total.
                2. Output for the same month recorded as kilos sold, litres or dozens.
                3. Feed cost per unit of output calculated for each enterprise.
                4. The figure compared with the selling price, so the margin over feed is visible.

                ## Notes
                Include home-grown forage at a realistic value, such as what the grass would cost to buy as hay, or the figure flatters the grazing animals.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Feed cost per kilo, litre or dozen is written down for each enterprise beside its selling price for the same month."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Split last month's feed purchases by animal group"
                - "Record the kilos, litres or dozens each group produced or sold"
                - "Divide feed cost by output for each enterprise"
                - "Recalculate feed cost per unit of output @recurring(quarterly)"
            - name: Working with a livestock nutritionist
              description: |-
                ## Purpose
                Rations copied from a neighbour or a feed bag rarely suit your animals, your forage and your prices. A nutritionist, whether from a feed company, a university, the extension service or in private practice, can match a ration to what you actually have, and the relationship pays for itself the first time a cheaper ingredient comes along.

                ## Milestones
                1. Two or three possible advisers found, including any free service from the extension office or feed mill.
                2. Terms understood for each: cost, independence from a feed brand and how visits work.
                3. One adviser chosen and a first farm visit booked.
                4. A short farm summary prepared for the visit with animals, forage and current rations.

                ## Notes
                An adviser employed by a feed company can be excellent but will naturally favour their products. Ask plainly how they are paid.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named nutritionist or adviser has agreed to work with the farm and a first visit date is in the diary."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension officer which livestock nutritionists serve your area"
                - "Phone two advisers and ask about cost and how they are paid"
                - "Book a first farm visit with the adviser you choose"
                - "Write a one-page summary of animals, forage and current rations"
            - name: Herd and flock feed demand baseline
              description: |-
                ## Purpose
                Every feed plan rests on how much the animals on the farm eat each day, and few farmers have ever measured it. Weighing what goes into each group's feeders for one week, and what comes back out as refusals, gives a real daily intake to replace guesses.

                ## Milestones
                1. A week of feed offered weighed for each group, morning and evening.
                2. Refusals and waste weighed back for the same week.
                3. Average daily intake per head worked out for each group.
                4. The baseline written into the feed records as the starting point.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Daily intake per head is recorded for every animal group from a full week of weighed feed and refusals."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark a bucket or scoop with its full weight for each feed you use"
                - "Weigh feed offered to each group for seven days"
                - "Weigh back what is left in the troughs each morning"
                - "Work out the daily intake per head for each group"
            - name: Pasture and forage area map
              description: |-
                ## Purpose
                Grazed and cut forage is the cheapest feed on most tropical farms, yet many farmers cannot say how many hectares they have under grass or what is growing on it. A simple map of paddocks, grass types, water points and fences shows how much forage the farm can really carry.

                ## Milestones
                1. Every paddock and forage plot marked on a sketch or satellite image with its area.
                2. The main grass or legume in each paddock named.
                3. Water points, gates and shade trees marked.
                4. Paddocks rated as good, fair or poor and the poorest listed for attention.

                ## Notes
                A free satellite map on a phone is accurate enough to measure paddocks. Walk the boundaries once with a phone tracking app if the map is unclear.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map shows every paddock with its area, main forage, water point and a condition rating."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Print or save a satellite image of the farm boundary"
                - "Walk each paddock and note the main grass growing there"
                - "Mark water points, gates and shade on the map"
                - "Rate each paddock and list the poorest three"
            - name: Dry, rat-proof feed store set-up
              description: |-
                ## Purpose
                Bagged feed that sits on a damp floor or gets opened by rats loses value fast, and mouldy feed can make animals ill. Fixing the store once, with pallets, ventilation, a sealed door and first-in first-out stacking, protects the most expensive thing on the farm.

                ## Milestones
                1. The store cleaned out and any spoiled or caked feed removed.
                2. Pallets in place so no bag touches the floor or wall.
                3. Gaps around doors, eaves and pipes sealed against rodents and birds.
                4. Bags stacked by delivery date with the oldest at the front.
                5. Roof leaks and wet patches fixed before the rains.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All bagged feed sits on pallets in a sealed, dry store, stacked oldest first, with no visible leaks or rodent entry points."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Empty the feed store and throw out caked or mouldy bags"
                - "Source enough pallets to keep every bag off the floor"
                - "Seal gaps at doors, eaves and pipe entries"
                - "Restack bags so the oldest delivery is used first"
            - name: Choosing feed suppliers and opening accounts
              description: |-
                ## Purpose
                Relying on one feed mill or one agro shop leaves you exposed when a ship is late or a price jumps. Comparing two or three suppliers on price per kilo, delivery, credit terms and consistency, then opening accounts with the best two, gives you a fallback before you need one.

                ## Milestones
                1. Three suppliers asked for prices on the feeds you use most.
                2. Prices compared per kilo, including delivery and any bulk discount.
                3. Credit terms, delivery days and minimum orders recorded for each.
                4. Accounts open with a main supplier and a backup.

                ## Notes
                Start from the **Vendor** template. Compare price per kilo, not per bag, because bag weights differ between mills.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two feed suppliers have open accounts, with prices per kilo and terms recorded side by side."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request current prices from three feed suppliers"
                - "Convert every quote to a price per kilo delivered"
                - "Note credit terms and delivery days for each supplier"
                - "Open accounts with your main and backup supplier"
            - name: Scales and weigh tapes for feed and animals
              description: |-
                ## Purpose
                Feed decisions without weights are guesses, and guesses usually overfeed some animals and starve others. A hanging scale for feed, a weigh tape or platform scale for animals and a habit of checking them makes every ration and every growth figure trustworthy.

                ## Milestones
                1. A feed scale chosen that weighs a full bag accurately.
                2. A weigh tape or livestock scale suited to the species on the farm in use.
                3. Scale accuracy checked against a known weight.
                4. Scoops and buckets marked with their weight when full of each feed.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The farm has a checked feed scale and an animal weighing method, and every feed scoop is marked with its weight."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Price a hanging feed scale and a species-specific weigh tape"
                - "Buy the scale and tape that fit your herd and budget"
                - "Weigh one full scoop of each feed and mark the scoop"
                - "Check the scale against a known weight @recurring(monthly:25)"
            - name: Feed records system for every animal group
              description: |-
                ## Purpose
                Most farmers can name their feed price but not how much each group ate last month. A simple record of feed in, feed fed and animals weighed, kept in a notebook or a spreadsheet, is what turns the feed bill from a worry into something you can manage.

                ## Milestones
                1. One record format chosen for deliveries, daily feeding and stock on hand.
                2. Columns for date, group, feed type, kilos fed and refusals set up.
                3. Every delivery from the last month entered.
                4. A weekly total per group that can be read at a glance.

                ## Notes
                Start from the **Metrics log** template. Keep the record in the feed store, not the house, so it gets filled in.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A feed record shows deliveries, kilos fed per group and stock on hand for at least four consecutive weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a notebook or spreadsheet for the feed records"
                - "Set up columns for date, group, feed, kilos and refusals"
                - "Enter last month's deliveries from the invoices"
                - "Total the week's feed used per group @recurring(weekly:sun)"
            - name: Weekly feed stock count and reorder point
              description: |-
                ## Purpose
                Running out of feed on a Saturday with the mill closed until Monday is how animals go hungry and farmers pay retail prices in a panic. Counting stock every week against a reorder point set from daily use means the next order goes in while there are still days in hand.

                ## Milestones
                1. Days of feed on hand worked out for each feed type from daily use.
                2. A reorder point set that covers supplier lead time plus a buffer.
                3. A weekly count done on the same day and written in the records.
                4. No feed run-outs over three months.

                ## Notes
                Island farms should hold a larger buffer than mainland ones: one late ship or a storm warning can close the supply for a week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feed stock is counted weekly against a written reorder point, with no run-outs recorded in three consecutive months."
                cadence: rolling
              tasks:
                - "Work out daily use of each feed from the baseline week"
                - "Ask each supplier their usual delivery lead time"
                - "Write the reorder point on the feed store door"
                - "Count feed stock and place orders below the reorder point @recurring(weekly:fri)"
            - name: Monthly feed cost review
              description: |-
                ## Purpose
                Feed prices, intake and output all move each month, and a creeping rise in cost per kilo sold can eat a margin before anyone notices. A short monthly review of what was bought, what was fed and what was produced catches the drift while it is still cheap to fix.

                ## Milestones
                1. The month's feed purchases totalled by feed type.
                2. Feed cost per unit of output updated for each enterprise.
                3. Any change of more than 5 percent from last month explained.
                4. One action agreed when cost per unit has risen two months running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly note records feed spend, cost per unit of output for each enterprise and an explanation for any large change."
                cadence: rolling
              tasks:
                - "Total last month's feed invoices by feed type"
                - "Update cost per unit of output for each enterprise @recurring(monthly:5)"
                - "Write one line explaining any change over 5 percent"
                - "Ask the agent to chart cost per unit for the last six months"
            - name: Feed store mould and pest inspection
              description: |-
                ## Purpose
                Heat and humidity turn a small leak or a torn bag into mould within days, and rats, weevils and birds take a steady share of stored grain. A fixed weekly walk-through of the store finds damage early and keeps spoiled feed away from animals.

                ## Milestones
                1. A short inspection checklist written for the store.
                2. Weekly checks done for damp, mould, caking, droppings and torn bags.
                3. Rodent bait stations or traps in place and checked.
                4. Any spoiled feed removed and the cause fixed the same week.

                ## Notes
                Start from the **Operational checklist** template. Keep rodent baits in tamper-resistant stations well away from feed and animals, and follow the product label.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The feed store has a written weekly checklist completed for twelve consecutive weeks, with spoiled feed and its cause recorded."
                cadence: rolling
              tasks:
                - "Write a one-page checklist for the feed store"
                - "Inspect the store for damp, mould and pests @recurring(weekly:mon)"
                - "Place rodent stations at the store walls, away from feed"
                - "Empty, sweep and clean the store fully @recurring(quarterly)"
            - name: Rotational grazing paddock moves
              description: |-
                ## Purpose
                Animals left on one paddock graze the best grass to the ground and leave the rest to go stemmy, so the pasture grows less every month. Moving them on a planned rotation, with rest periods long enough for regrowth, can carry more animals on the same land and cut the bought feed bill.

                ## Milestones
                1. Paddocks divided, with temporary electric fence where permanent fencing is missing.
                2. A rotation order and target rest period agreed with your adviser.
                3. Entry and exit grass heights noted for each move.
                4. A season of moves recorded with days grazed and days rested.

                ## Notes
                Rest periods are shorter in the wet season and longer in the dry. Move on grass height, not the calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A grazing record shows every paddock's entry date, exit date and rest period for a full season."
                cadence: rolling
              tasks:
                - "Split the largest paddock into smaller cells with temporary fencing"
                - "Agree a target rest period for each season with your adviser"
                - "Walk the paddocks and decide the next move @recurring(weekly:tue)"
                - "Record entry and exit dates for each paddock"
            - name: Daily feeding round and refusals check
              description: |-
                ## Purpose
                The feeding round is where problems show first: an animal that does not come to the trough, feed left uneaten, or a trough fouled overnight. A consistent round at the same times, with a quick look at refusals, keeps intake steady and spots trouble a day earlier.

                ## Milestones
                1. Fixed feeding times set and written up for whoever does the round.
                2. Troughs and feeders cleaned of stale or wet feed before each feed.
                3. Refusals estimated and noted when they are unusual.
                4. Any animal off its feed reported to the farm manager the same day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feeding happens at fixed times every day, with unusual refusals and animals off feed noted in the records."
                cadence: rolling
              tasks:
                - "Write the feeding times and amounts on a board in the shed"
                - "Clear stale and wet feed from troughs before refilling"
                - "Note refusals and any animal off feed @recurring(daily)"
                - "Tell your vet about any animal off feed for more than a day"
            - name: Body condition scoring every month
              description: |-
                ## Purpose
                Weight alone hides whether an animal is fat, thin or simply big, while a body condition score taken by feeling the spine and ribs tells you whether the ration is working. Scoring a sample of each group monthly shows the trend long before animals look poor.

                ## Milestones
                1. The scoring scale for each species learned from your adviser or a guide.
                2. A fixed sample of animals in each group chosen for scoring.
                3. Monthly scores recorded with the date and group.
                4. Groups trending down flagged for a ration review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly body condition scores for each group are recorded for six months, with any downward trend linked to a ration change."
                cadence: rolling
              tasks:
                - "Ask your adviser to show you the scoring method for your species"
                - "Choose ten animals in each group to score every time"
                - "Score the sample animals and record results @recurring(monthly:12)"
                - "Flag any group whose average score has dropped"
            - name: Grass height and regrowth watch
              description: |-
                ## Purpose
                Pasture growth in the tropics can halve within a few weeks when the rains stop, and farmers who notice late end up buying feed at the worst price. A weekly look at grass height in each paddock gives early warning that the grazing is running ahead of the regrowth.

                ## Milestones
                1. A simple measuring stick or rising plate marked in centimetres.
                2. Grass height measured at the same points in each paddock each week.
                3. Weekly heights logged beside rainfall.
                4. A trigger height agreed at which supplementary feed starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly grass heights for every paddock are logged with rainfall, and a written trigger height for supplementary feeding exists."
                cadence: rolling
              tasks:
                - "Mark a measuring stick in centimetres for grass height"
                - "Choose five fixed measuring points in each paddock"
                - "Measure and log grass height in every paddock @recurring(weekly:wed)"
                - "Agree a trigger height for supplementary feed with your adviser"
            - name: Cut-and-carry forage schedule
              description: |-
                ## Purpose
                Many Caribbean goat, sheep and dairy farmers cut Napier, King grass or guinea grass and carry it to housed animals, and the grass is best at a young stage that passes quickly. A cutting rotation by plot means animals always get forage at a good stage rather than whatever is tallest.

                ## Milestones
                1. Cutting plots numbered and their area recorded.
                2. A cutting interval for each grass agreed with your adviser.
                3. A weekly cutting rota that rotates around the plots.
                4. Plots fertilised or manured after cutting according to a soil-based plan.

                ## Notes
                Grass cut too old is mostly stem and fibre, and animals eat less of it. Grass cut too young yields little. The right interval varies by species and season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every cutting plot appears on a rota with its last cut date, and forage is cut within the agreed interval for three months."
                cadence: rolling
              tasks:
                - "Number each cutting plot and note its area"
                - "Agree a cutting interval for each grass with your adviser"
                - "Cut and carry forage from the next plot on the rota @recurring(weekly:mon,thu)"
                - "Spread manure on plots after cutting where the soil plan allows"
            - name: Feed price tracking and bulk buying windows
              description: |-
                ## Purpose
                Imported corn and soybean meal follow world grain prices, freight and exchange rates, so local feed prices move in steps rather than smoothly. Tracking prices monthly and knowing when a rise has been announced lets you buy ahead when storage allows, instead of always paying the new price.

                ## Milestones
                1. A price log started for each feed you buy.
                2. Monthly prices recorded from your main and backup suppliers.
                3. Your safe storage limit worked out in weeks of feed.
                4. At least one bulk purchase made ahead of an announced rise, within that storage limit.

                ## Notes
                Buying ahead only pays if the feed stays fresh. Most bagged feed has a best-before date; never buy more than you can use before it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly price log for every feed exists for six months, with a written storage limit for buying ahead."
                cadence: rolling
              tasks:
                - "Start a price log for each feed with today's price"
                - "Record supplier prices for every feed @recurring(monthly:20)"
                - "Work out how many weeks of feed the store can hold safely"
                - "Ask suppliers to tell you before the next price change"
            - name: Mineral lick and salt supply checks
              description: |-
                ## Purpose
                Many tropical soils and grasses are short of minerals such as phosphorus and some trace elements, and grazing animals cannot make up the shortfall on grass alone. Keeping the right mineral supply in front of them, chosen with your adviser for your soils and species, is a small cost that protects growth and fertility.

                ## Milestones
                1. A mineral product chosen with your adviser or vet for each species.
                2. Mineral feeders placed under cover near water in each paddock.
                3. Weekly checks that every feeder has fresh, dry supply.
                4. Monthly mineral use recorded to spot under or over consumption.

                ## Notes
                Minerals formulated for cattle can contain copper levels that are dangerous to sheep. Never share a mineral between species without checking the label with your vet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every paddock or pen has a species-appropriate mineral supply checked weekly, with monthly use recorded."
                cadence: rolling
              tasks:
                - "Ask your vet which mineral product suits each species"
                - "Put covered mineral feeders near water in each paddock"
                - "Check and top up every mineral feeder @recurring(weekly:sat)"
                - "Record the kilos of mineral used each month"
            - name: Quarterly ration review with the nutritionist
              description: |-
                ## Purpose
                A ration that was right in the wet season can be wrong three months later when the grass has dried out and feed prices have moved. A short review each quarter, with your records, condition scores and current prices on the table, keeps the ration matched to the forage you actually have.

                ## Milestones
                1. Feed records, condition scores and output for the quarter sent to the nutritionist.
                2. Current forage quality and feed prices summarised on one page.
                3. The ration for each group confirmed or changed in writing.
                4. Any change introduced gradually and its effect noted.

                ## Notes
                Change rations over several days, not overnight, especially for ruminants. Ask your nutritionist how long each change should take.
              priority: high
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Each quarter a written ration for every animal group is confirmed or changed by the nutritionist, with the reason recorded."
                cadence: cyclic
              tasks:
                - "Gather the quarter's feed records and condition scores"
                - "Write a one-page summary of forage and feed prices"
                - "Hold the ration review with your nutritionist @recurring(quarterly)"
                - "Record each ration change and the date it started"
            - name: Reading feed tags and labels
              description: |-
                ## Purpose
                Every bag of commercial feed carries a tag with guaranteed analysis, ingredients and feeding directions, and two feeds at the same price can differ a great deal in what they deliver. Learning to read the tag lets you compare feeds properly and spot a feed meant for another species or stage.

                ## Milestones
                1. The parts of a feed tag understood: crude protein, fat, fibre, ash and moisture.
                2. Tags from the feeds you use photographed and filed.
                3. Two feeds compared on price per kilo of crude protein.
                4. Any feed being used for the wrong species or stage identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Photographs of every feed tag are on file, with a comparison of at least two feeds on price per kilo of crude protein."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Photograph the tag on every feed bag on the farm"
                - "Look up what each line of the guaranteed analysis means"
                - "Calculate price per kilo of crude protein for two feeds"
                - "Check every feed is labelled for the species eating it"
            - name: Ruminant and single-stomach nutrition basics
              description: |-
                ## Purpose
                Cattle, goats and sheep turn grass into meat and milk through fermentation in the rumen, while pigs and poultry need concentrated, carefully balanced feed. Understanding the difference explains why forage can replace bought feed for some animals and barely at all for others, and stops expensive mistakes on mixed farms.

                ## Milestones
                1. How the rumen works explained in your own words in a short note.
                2. The main nutrients listed for each species you keep: energy, protein, fibre, minerals and water.
                3. The share of forage each species can use noted from a reliable source or your adviser.
                4. Three questions about your own animals taken to your nutritionist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains how each species on the farm uses forage and concentrate, checked with your adviser."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find an extension or university guide on livestock nutrition"
                - "Read the sections for each species you keep"
                - "Write a one-page note on how each species uses forage"
                - "Take three questions from the reading to your nutritionist"
            - name: Identifying tropical grasses and forage legumes
              description: |-
                ## Purpose
                Guinea grass, Brachiaria, Pangola, Napier and Tanner grass, and legumes such as Centrosema, Stylosanthes and Leucaena, differ in yield, protein and how they stand up to grazing and drought. Being able to name what is growing in your paddocks, weeds included, is the start of improving it.

                ## Milestones
                1. The main grasses and legumes of your region listed with photographs.
                2. Each species in your paddocks identified on a field walk.
                3. Weeds and plants toxic to livestock in your area noted.
                4. A short list made of species worth planting more of.

                ## Notes
                Ask the extension officer or a local research station for a regional forage guide. Some ornamental and roadside plants are poisonous to livestock, so learn the local ones.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every main forage and weed species in the farm's paddocks is named in a photo log, with toxic plants flagged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the extension office for a regional forage identification guide"
                - "Walk the paddocks and photograph each plant you cannot name"
                - "Identify each species with the guide or your adviser"
                - "List any toxic plants found and where they grow"
            - name: Dry matter, protein and energy in plain numbers
              description: |-
                ## Purpose
                Fresh grass can be 80 percent water, so a tonne of it holds far less feed than a tonne of hay. Learning to think in dry matter, crude protein and energy lets you compare a load of cut grass, a bag of pellets and a drum of molasses on the same footing.

                ## Milestones
                1. Dry matter, crude protein and energy defined in a short note.
                2. Dry matter of fresh grass measured at home with a kitchen scale and an oven or microwave method.
                3. Each feed on the farm converted to cost per kilo of dry matter.
                4. The cheapest source of dry matter and of protein on the farm identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table lists every feed on the farm with its dry matter and cost per kilo of dry matter and protein."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a short definition of dry matter, protein and energy"
                - "Measure dry matter of a fresh grass sample at home"
                - "Convert every feed to cost per kilo of dry matter"
                - "Mark the cheapest dry matter and protein sources in the table"
            - name: How silage ferments and why it spoils
              description: |-
                ## Purpose
                Good silage is grass pickled without air, and almost every bad batch comes from the same few causes: grass too wet or too old, poor compaction, air getting in or opening the pit too early. Understanding the process before your first batch saves a season of forage from rotting.

                ## Milestones
                1. The stages of silage fermentation described in your own words.
                2. The right cutting stage and moisture for your grass noted.
                3. The common faults and how each one shows listed: smell, colour, mould and heat.
                4. A farm already making silage visited, or a demonstration attended.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note covers fermentation stages, cutting stage, moisture and the signs of each common fault, and one working silage operation has been seen."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find an extension guide to making silage in the tropics"
                - "Note the cutting stage and moisture your grass needs"
                - "List the signs of bad silage by smell, colour and heat"
                - "Arrange to visit a farm that makes silage"
            - name: Hay making between tropical showers
              description: |-
                ## Purpose
                Hay needs several dry days in a row to cure, which is why many Caribbean farmers think it cannot be done. With the right grass, a cutting window in the early dry season, a tedder or turning by hand, and fast baling, it can, and hay is easier to store and sell than silage.

                ## Milestones
                1. Grasses on the farm that dry quickly identified, such as Pangola or Brachiaria.
                2. The best cutting window for your area worked out from local rainfall records.
                3. Equipment for cutting, turning and baling sourced, owned or hired.
                4. A small trial plot cut, cured and baled and the result recorded.

                ## Notes
                Hay baled damp heats in the stack and can catch fire. Store new bales loosely, away from buildings, and check them for heat in the first weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One trial plot has been cut, cured and baled, with drying days, bale count and quality recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check past rainfall records for the driest weeks of the year"
                - "Choose a fast-drying grass plot for a hay trial"
                - "Book a mower and baler or line up hand labour"
                - "Cut, turn and bale the trial plot and record the result"
            - name: Forage sampling and lab analysis
              description: |-
                ## Purpose
                Two fields of the same grass can differ widely in protein depending on age, soil and season, and rations built on book values can be well off. Sending forage and silage samples to a lab for analysis gives your nutritionist real numbers to work from.

                ## Milestones
                1. A lab offering forage analysis found, through a university, ministry or feed company.
                2. Sampling method learned so the sample represents the whole field or pit.
                3. Samples taken from the main forages and sent with the right paperwork.
                4. Results shared with your nutritionist and filed with the date and paddock.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Lab results for the farm's main forages are filed and have been used by the nutritionist in a ration."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the extension office or university which lab analyses forage"
                - "Find out how the lab wants samples taken and packed"
                - "Take and send samples of your two main forages"
                - "Send fresh forage samples for analysis @recurring(yearly)"
            - name: Recognising feed-related problems early
              description: |-
                ## Purpose
                Sudden feed changes, mouldy feed, plant poisoning and too much grain can make animals ill quickly, and the first signs are often a change in eating, dung or behaviour. Learning what to look for, and when to call the vet, turns a possible loss into a quick phone call.

                ## Milestones
                1. The common feed-related problems for each species listed with your vet.
                2. Early signs for each written on one card for the feed store.
                3. A rule agreed with the vet on when to call immediately.
                4. Everyone who feeds the animals shown the card.

                ## Notes
                This project is about noticing and calling for help. Diagnosis and any treatment belong to your vet.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A card of feed-related warning signs, agreed with your vet, is posted in the feed store and every feeder has been shown it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your vet which feed problems are most common locally"
                - "Write the early signs on one card for the feed store"
                - "Agree with the vet which signs mean call immediately"
                - "Walk every person who feeds animals through the card"
            - name: Establishing an improved grass pasture
              description: |-
                ## Purpose
                Old pasture overrun with weeds and low-yield grasses can be replaced with improved varieties such as Mombasa guinea grass or a hybrid Brachiaria that yield far more per hectare. Establishing one paddock properly, with soil testing, good land preparation and a rest before grazing, shows whether it pays before you do the whole farm.

                ## Milestones
                1. One paddock chosen and a soil test done with recommendations from the lab or extension officer.
                2. A grass variety chosen for your soil, rainfall and livestock with your adviser.
                3. Seed or planting material sourced from a reliable supplier.
                4. The paddock planted at the start of the rains.
                5. The new pasture rested until established, then its first grazing recorded.

                ## Notes
                Most failures come from grazing too early. A new pasture usually needs a few months before animals go in; ask your adviser for the right stage.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One paddock is planted with an improved grass after a soil test, and its first grazing date and stocking are recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose the paddock to renovate and book a soil test"
                - "Agree the grass variety with your adviser"
                - "Order seed or cuttings in time for the rains"
                - "Record planting date and first grazing date"
            - name: Legume tree fodder bank
              description: |-
                ## Purpose
                Gliricidia, Leucaena and moringa grow fast in the tropics, stand cutting well and give leaf far higher in protein than most grasses. A fodder bank of these trees along fence lines or in a dedicated plot can replace part of a bought protein supplement for goats, sheep and cattle.

                ## Milestones
                1. Species chosen with your adviser for your soil and animals.
                2. A plot or fence line planted with cuttings or seedlings.
                3. Trees established and first cut taken at the recommended height.
                4. A cutting rotation running and leaf fed within the limits your adviser sets.

                ## Notes
                Some legume trees contain compounds that limit how much animals can safely eat. Ask your nutritionist how much of the diet the leaf should make up.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A planted fodder bank is being cut on rotation, with the share of the ration it supplies agreed with your nutritionist."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your adviser which legume trees suit your farm"
                - "Collect Gliricidia cuttings or order Leucaena seedlings"
                - "Plant the fodder bank along a fence line or plot"
                - "Cut one section of the fodder bank in rotation @recurring(monthly:15)"
            - name: Feeding farm-grown crops and crop residues
              description: |-
                ## Purpose
                Cassava roots and leaves, sweet potato vines, reject bananas and plantains, breadfruit and crop stalks are often wasted on mixed farms that buy feed in. Testing how much of these your animals can use, with your nutritionist's guidance, turns waste into feed and lowers the import bill.

                ## Milestones
                1. Crops and residues available on or near the farm listed by month.
                2. Each one checked with your nutritionist for safe use and any preparation it needs.
                3. A small trial run on one group, with intake and condition recorded.
                4. A decision recorded on whether to keep, expand or stop each one.

                ## Notes
                Raw cassava contains compounds that can be toxic; it is normally wilted, dried or ensiled before feeding. Ask your nutritionist how to prepare it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least one farm-grown crop or residue has been trialled on one group, with intake and condition recorded and a decision written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List crops and residues available on the farm by month"
                - "Ask your nutritionist which are safe and how to prepare them"
                - "Run a four-week trial on one group with weighed intake"
                - "Write down whether to keep, expand or stop each feed"
            - name: By-product feed supply from local processors
              description: |-
                ## Purpose
                Brewers spent grain, molasses, rice bran, wheat middlings, citrus pulp and coconut meal come out of Caribbean breweries, mills and factories every week, often cheaper than imported feed. Securing a regular supply, and handling it so it does not spoil, can take a real share off the feed bill.

                ## Milestones
                1. Processors within a practical distance listed with the by-products they produce.
                2. Price, volume, collection times and moisture of each by-product known.
                3. Your nutritionist's view on each one recorded, including how much to feed.
                4. A supply arrangement agreed with at least one processor.
                5. Handling and storage sorted so wet by-products are used before they spoil.

                ## Notes
                Wet by-products such as spent grain can sour within days in the heat. Only collect what you can feed or ensile quickly.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written supply arrangement with at least one local processor is in place, with the nutritionist's approval of how the by-product is fed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List breweries, mills and factories within an hour's drive"
                - "Phone two processors to ask about by-product supply and price"
                - "Ask your nutritionist how each by-product fits the ration"
                - "Agree collection days and volumes with one processor"
            - name: Home-mixed feed versus complete commercial feed
              description: |-
                ## Purpose
                Buying corn, soybean meal and a premix to mix on the farm can cost less than complete feed, but it needs a mixer, storage, accurate weighing and a formula from a nutritionist. Comparing the full cost of both, including your time and the risk of a bad mix, settles whether home mixing makes sense at your scale.

                ## Milestones
                1. The current cost per kilo of complete feed for each group recorded.
                2. A home-mix formula and ingredient costs provided by your nutritionist.
                3. Equipment, storage and labour costs for mixing added up.
                4. A decision recorded with the break-even volume per month.

                ## Notes
                Premixes and additives must be weighed exactly. A small error in a vitamin or mineral premix affects the whole batch.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of home-mixed and complete feed shows the cost per kilo of each and the monthly volume at which mixing breaks even."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record current complete feed cost per kilo for each group"
                - "Ask your nutritionist for a home-mix formula and premix"
                - "Price the ingredients, mixer and extra storage"
                - "Ask the agent to work out the break-even monthly volume"
            - name: Feeders and hay racks that cut waste
              description: |-
                ## Purpose
                Animals can trample, soil or pull out a surprising share of what they are given, especially goats at an open trough or cattle at a round bale on the ground. Better feeder design, raised troughs, keyhole barriers and covered hay racks, often pays back in months.

                ## Milestones
                1. Waste at each feeder estimated by weighing what is left trampled or soiled.
                2. Feeder designs suited to each species found from guides or other farms.
                3. One feeder rebuilt or replaced and waste measured again.
                4. The design rolled out to other pens if it paid.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Feed waste at one feeder has been measured before and after a redesign, with the saving recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Weigh trampled and soiled feed at the worst feeder for a week"
                - "Collect three feeder designs used for your species"
                - "Build or buy one improved feeder"
                - "Weigh waste again for a week after the change"
            - name: Bulk feed bin versus bagged feed decision
              description: |-
                ## Purpose
                Farms buying several tonnes a month can often save per kilo by taking feed in bulk into a bin, but the bin, the delivery access and the risk of condensation in a hot climate all cost something. Comparing the two properly, with your mill's real bulk price, shows when the change pays.

                ## Milestones
                1. Monthly volume of each feed confirmed from records.
                2. Bulk and bagged prices obtained from the mill for the same feed.
                3. Bin cost, installation and truck access priced.
                4. A decision recorded with the payback period.

                ## Notes
                Start from the **Purchase decision** template. Bins in full sun can sweat inside and cake the feed; ask about ventilation and placement.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on bulk versus bagged feed records the price difference, the bin cost and the payback period."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm monthly tonnage of each feed from the records"
                - "Ask the mill for bulk and bagged prices on the same feed"
                - "Get a quote for a bin and check truck access"
                - "Work out the payback period and record the decision"
            - name: Forage chopper purchase decision
              description: |-
                ## Purpose
                Chopping Napier, King grass or sugar cane before feeding reduces waste and makes silage pack tighter, and it saves hours of cutlass work every week. Choosing between a small electric or petrol chopper, a tractor-driven harvester or hiring one depends on your volumes and how often you need it.

                ## Milestones
                1. Weekly volume of forage to chop estimated.
                2. Three options compared on price, capacity, power source and parts availability.
                3. Owners of each option asked about reliability.
                4. A machine bought or a hire arrangement agreed.

                ## Notes
                Start from the **Purchase decision** template. Check that blades and belts can be bought locally; a machine waiting for parts from abroad is a machine not chopping. Fit and use all guards.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chopper has been bought or a hire arrangement agreed, with the comparison of three options recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate how much forage you would chop each week"
                - "Compare three choppers on price, capacity and parts"
                - "Ask two owners how their machine has held up"
                - "Buy the chopper or agree a hire arrangement"
            - name: First batch of bagged silage
              description: |-
                ## Purpose
                Small-scale bagged or drum silage lets a farmer with a chopper and a few hands store wet-season grass for the dry season without a tractor or pit. Making a first batch, then opening it weeks later to judge the result, is the most useful step from learning about silage to relying on it.

                ## Milestones
                1. Grass cut at the right stage and wilted to the right moisture.
                2. Grass chopped, packed tightly and sealed in bags or drums with air pressed out.
                3. Bags stored in shade, off the ground and safe from rats and sharp objects.
                4. One bag opened after the fermentation period and judged by smell and colour.
                5. Animals offered the silage gradually and intake recorded.

                ## Notes
                Any additive or inoculant should follow its label. Throw out silage that is slimy, black, very mouldy or smells rotten.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first batch of silage has been made, opened, judged and fed, with the number of bags, losses and intake recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Buy silage bags or sealable drums and check them for holes"
                - "Cut and wilt one plot of grass at the right stage"
                - "Chop, pack and seal the bags with the air pressed out"
                - "Open the first bag after fermentation and record its quality"
            - name: Wet season forage conservation drive
              description: |-
                ## Purpose
                Grass grows fastest in the rains and slowest when animals need it most, so every bale or bag saved in the wet season is feed you will not buy in the dry. Setting a conservation target each year from your feed budget, and organising the people, equipment and storage to meet it, turns surplus grass into a reserve.

                ## Milestones
                1. A target in tonnes of silage or bales of hay set from the feed budget.
                2. Plots set aside from grazing for conservation.
                3. Labour, equipment, bags or wrap and storage booked in advance.
                4. The season's conservation total recorded against the target.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each year's conservation target, the plots used and the tonnes or bales actually stored are recorded."
                cadence: cyclic
              tasks:
                - "Set this year's conservation target from the feed budget"
                - "Close the chosen plots to grazing ahead of cutting"
                - "Book labour, equipment and storage for the cutting weeks"
                - "Plan the wet season conservation drive @recurring(yearly)"
            - name: Yearly feed contract negotiation with the mill
              description: |-
                ## Purpose
                Farms that buy steady volumes can often agree a better price, credit terms or delivery schedule with a feed mill, but only if they ask with numbers in hand. Preparing a year's volumes and your payment record before the conversation gives you something to negotiate with.

                ## Milestones
                1. Last year's volumes and spend with each supplier totalled.
                2. Next year's expected volumes taken from the feed budget.
                3. Competing quotes obtained for comparison.
                4. A meeting held and agreed terms confirmed in writing.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Written terms for price, credit and delivery have been agreed with the main feed supplier for the coming year."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Total last year's spend and tonnage with each supplier"
                - "Take next year's volumes from the feed budget"
                - "Get one competing quote for your main feeds"
                - "Meet the mill and confirm agreed terms in writing"
            - name: Pasture renovation at the start of the rains
              description: |-
                ## Purpose
                Pastures worn down by a long dry season and heavy grazing recover faster if they get attention as the rains return: weeds controlled, bare patches reseeded, manure spread and grazing held off for a short rest. Doing it every year on the poorest paddocks keeps the whole farm's carrying capacity from slipping.

                ## Milestones
                1. The poorest paddocks chosen from the paddock map and grass height records.
                2. Weeds dealt with by slashing or with a product approved by your extension officer.
                3. Bare patches reseeded or planted with cuttings.
                4. Paddocks rested and the date they return to grazing recorded.

                ## Notes
                Any herbicide must be on your country's approved list and used exactly as the label says, including the grazing interval. Check with your extension officer.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each year at least two of the poorest paddocks are renovated, with work done and return-to-grazing dates recorded."
                cadence: cyclic
              tasks:
                - "Choose the two poorest paddocks from your records"
                - "Slash weeds and reseed bare patches"
                - "Rest the renovated paddocks before grazing again"
                - "Renovate the poorest paddocks as the rains start @recurring(yearly)"
            - name: Forage field day or farmer exchange visit
              description: |-
                ## Purpose
                Seeing a working fodder bank, silage pit or rotational grazing set-up on another farm teaches more in an afternoon than weeks of reading. Extension services, research stations and farmer groups across the region run field days, and a visit with a list of questions is time well spent.

                ## Milestones
                1. Upcoming field days found through the extension office, a research station or a farmer group.
                2. One visit booked with transport arranged.
                3. A list of questions prepared from your own feed problems.
                4. Notes and photographs written up with one idea to try.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A forage field day or farm visit has been attended, with notes and one idea chosen to trial on the farm."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the extension office about upcoming forage field days"
                - "Book a place and arrange transport"
                - "Write five questions from your own feed problems"
                - "Write up notes and pick one idea to try"
            - name: Feeding a small goat and sheep herd on a smallholding
              description: |-
                ## Purpose
                A smallholder with a dozen goats or sheep on a hillside or tethered on roadside grass has little land, little cash and often little time. A plan built around browse, cut grass, a small fodder bank and only as much bought feed as needed keeps the animals growing without the feed bill swallowing the profit.

                ## Milestones
                1. Every available forage source mapped, including tethering spots and permission to cut on neighbouring land.
                2. A small fodder plot or tree line planted.
                3. Bought feed limited to the groups that need it most, such as late pregnancy and young stock, as agreed with your adviser.
                4. Monthly feed cost per head recorded and compared with sale prices.

                ## Notes
                Tethered animals need shade, water and a regular move. Check local rules on grazing along public roads.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written feeding plan for the herd names every forage source and which animals get bought feed, with monthly cost per head recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every place your animals graze or you cut forage"
                - "Ask neighbours for permission to cut grass on idle land"
                - "Plant a small fodder plot or Gliricidia fence line"
                - "Agree with your adviser which animals need bought feed"
            - name: Feeding routine for a part-time farmer
              description: |-
                ## Purpose
                Many Caribbean livestock farmers have a job in town and feed animals before work and after dark. A routine built around what can be done in those hours, with bulk feeders, pre-weighed bags, cut forage stored ahead and a trusted helper for the days you cannot get there, keeps animals fed without the farm taking over your life.

                ## Milestones
                1. A morning and evening routine written that fits the hours you have.
                2. Feed portions pre-weighed for the week on a weekend.
                3. Self-feeders or larger troughs in place where they suit the species.
                4. A helper trained and paid to cover absences.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written feeding routine fits the farmer's working hours and a trained helper has covered at least one absence."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Time your current morning and evening feeding rounds"
                - "Pre-weigh a week of feed portions into marked bags"
                - "Fit a self-feeder or larger trough where it suits"
                - "Train a helper to cover the round when you are away"
            - name: Neighbourhood feed buying group
              description: |-
                ## Purpose
                Small farmers buying a few bags at a time pay the highest price per kilo and get the least attention from mills. Pooling orders with neighbouring farmers, or through a cooperative or farmer group, can reach bulk prices and a delivery truck, as long as the group agrees how orders, payment and splitting work.

                ## Milestones
                1. Three to six nearby farmers interested in buying together.
                2. Combined monthly volumes and feed types listed.
                3. A bulk price and delivery offer obtained from a supplier.
                4. Written rules agreed for ordering, paying in advance and collecting.
                5. The first combined order delivered and split.

                ## Notes
                Agree that everyone pays before the order is placed. Groups break up over one member's unpaid share.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A buying group with written rules has placed and split at least one combined feed order at a lower price per kilo."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask four neighbouring farmers if they would buy feed together"
                - "List the combined monthly volume of each feed"
                - "Get a bulk delivery price from two suppliers"
                - "Collect payments and place the group feed order @recurring(monthly:28)"
            - name: Feeding new animals through the first weeks on farm
              description: |-
                ## Purpose
                Animals bought in from another farm or an auction arrive stressed, often used to different feed, and many go off their food or scour in the first days. A planned transition, starting on familiar feed and moving to your ration over a set period, cuts losses on newly bought stock.

                ## Milestones
                1. The seller asked what the animals were eating before purchase.
                2. A transition plan agreed with your nutritionist or vet.
                3. Newcomers fed separately from the main group during the transition.
                4. Intake and dung watched daily and any problem reported to the vet.

                ## Notes
                Keep new arrivals apart from your herd for the period your vet advises, for health reasons as well as feeding.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Newly bought animals complete a written feed transition plan, with daily intake recorded until they are on the farm ration."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the seller what feed the animals have been on"
                - "Buy a few bags of that feed for the first days"
                - "Agree the transition length with your nutritionist"
                - "Record newcomers' intake daily until fully switched"
            - name: Taking over another farm's feed system
              description: |-
                ## Purpose
                Buying, leasing or inheriting a livestock farm means inheriting its pastures, feed contracts, stores and habits, some good and some costly. Spending the first weeks understanding what the animals eat, where it comes from and what it costs before changing anything avoids upsetting animals and suppliers at once.

                ## Milestones
                1. Current rations, suppliers, contracts and debts with feed suppliers listed.
                2. Pastures, cutting plots and stored forage walked and recorded.
                3. Feed cost per unit of output worked out from the previous owner's records, where available.
                4. A list of changes ranked by saving and risk, agreed with your nutritionist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written summary of the inherited feed system and a ranked list of changes have been agreed with the nutritionist before any ration change."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the previous manager for current rations and suppliers"
                - "Check for unpaid feed accounts or contracts you take on"
                - "Walk every paddock and store and record what is there"
                - "Rank possible changes by saving and risk with your nutritionist"
            - name: Moving from open grazing to cut-and-carry housing
              description: |-
                ## Purpose
                Housing animals and bringing forage to them, often called zero grazing, cuts losses to theft, dogs and parasites and lets a small farm carry more animals, but it needs housing, steady cutting labour and manure handling. Planning the change in stages tests whether the extra work pays off.

                ## Milestones
                1. Forage needed per day for the housed group estimated in fresh weight.
                2. Cutting plots sized to supply that forage year round, including the dry season.
                3. Housing, feeders and water ready for a first group.
                4. One group moved in, with growth and labour hours recorded for three months.
                5. A decision recorded on moving the rest of the herd.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One group has been housed and fed by cut-and-carry for three months, with growth, labour and cost recorded and a decision written."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Estimate daily fresh forage needed for the first group"
                - "Work out the cutting area needed to supply it"
                - "Prepare housing, feeders and water for the first group"
                - "Record growth and labour hours for three months"
            - name: Least-cost ration formulation with the nutritionist
              description: |-
                ## Purpose
                When feed ingredients swing in price, a ration formulated on software to meet the same nutrient targets at the lowest cost can save a large share of the feed bill on a commercial unit. Working with your nutritionist to run least-cost formulations as prices change, with agreed limits on each ingredient, puts that saving to work.

                ## Milestones
                1. Nutrient targets for each group agreed with the nutritionist.
                2. Every ingredient available to you listed with price and analysis.
                3. Upper and lower limits set for each ingredient.
                4. A least-cost ration run and compared with the current one on cost and nutrients.
                5. Reformulation triggered whenever a main ingredient moves by an agreed amount.

                ## Notes
                The cheapest ration on paper can fail in practice if animals will not eat it or the ingredient supply is unreliable. Watch intake closely after any change.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A least-cost ration has been formulated with the nutritionist and compared with the current ration, with a written price trigger for reformulation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Send the nutritionist current ingredient prices and analyses"
                - "Agree nutrient targets and ingredient limits for each group"
                - "Compare the least-cost ration with the current ration"
                - "Agree the price change that triggers a new formulation"
            - name: Mycotoxin testing programme for stored feed
              description: |-
                ## Purpose
                Moulds growing on corn, groundnut meal and other ingredients in hot, humid storage can produce toxins, such as aflatoxin, that reduce growth and fertility and can carry into milk. A testing programme agreed with your nutritionist and vet, with rules for rejecting loads, protects animals and buyers.

                ## Milestones
                1. The feeds and ingredients at most risk identified with your nutritionist.
                2. A lab or rapid test kit for mycotoxins sourced.
                3. A sampling schedule set for deliveries and stored feed.
                4. Written rules agreed with suppliers for rejecting or replacing contaminated loads.

                ## Notes
                Ask suppliers whether they test their own ingredients and request results. Contaminated feed should go back, never be diluted into other feed without professional advice.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written mycotoxin testing schedule is running, with results on file and a rejection rule agreed with each main supplier."
                cadence: rolling
              tasks:
                - "Ask your nutritionist which feeds carry the most mycotoxin risk"
                - "Find a lab or test kit for mycotoxins"
                - "Ask each supplier for their ingredient test results"
                - "Test samples of high-risk feed for mycotoxins @recurring(quarterly)"
            - name: Selling surplus hay or silage
              description: |-
                ## Purpose
                A farm that has mastered forage conservation often ends up with more than it needs, and many neighbours, horse owners and goat farmers pay well for hay or silage in the dry season. Treating the surplus as a small enterprise, with costs, a price and regular buyers, adds income from land already in grass.

                ## Milestones
                1. The cost of producing a bale or bag worked out.
                2. Local buyers and their dry season prices identified.
                3. A price list set with delivery and collection terms.
                4. First sales made and recorded with buyer contact details.

                ## Notes
                Never sell your own reserve. Set the sale quantity only after the farm's dry season needs are covered.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A price list exists for surplus hay or silage, based on production cost, and at least three sales are recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work out what each bale or bag costs to produce"
                - "Ask feed stores and farmers what they pay in the dry season"
                - "Write a price list with delivery terms"
                - "Record each sale and the buyer's contact"
---

# Livestock Feed and Forage

Livestock Feed and Forage is for Caribbean farmers whose feed bill is the biggest cheque they write, whether that is a few goats on a hillside, a beef or dairy herd on pasture, or pigs and poultry living on imported bags. The projects start with the foundations of a feed budget, cost per kilo sold, a nutritionist, a paddock map, a dry store and good records, then move through the weekly and monthly machinery of stock counts, grazing moves, condition scoring and price watching, the skills of reading feed tags, grasses, dry matter, silage and hay, the decisions about pastures, fodder banks, local by-products and home mixing, the dated jobs of a first silage batch and a feed contract, situations from the smallholder to the farmer taking over a farm, and specialist work on least-cost rations and mould toxins.

What repeats is the daily feeding round, the weekly stock count, store inspection, paddock walk and cutting days, the monthly feed cost review, condition scores and price check, the quarterly ration review with your nutritionist and a yearly conservation drive in the wet season. The Vendor, Metrics log, Operational checklist and Purchase decision templates pair with the projects that point to them. Rations, supplements, additives and any feed-related treatment are agreed with your nutritionist or vet and follow the product label, never a rate from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
