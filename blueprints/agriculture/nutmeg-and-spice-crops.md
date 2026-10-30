---
id: agriculture.nutmeg-and-spice-crops
name: Nutmeg and Spice Crops
description: "Map and census your spice trees, gather and dry nutmeg, mace, clove, pimento and cinnamon to grade, replant with grafted females after storms, and sell through the board, a cooperative or exporters."
category: business
version: 1.0.0
tags: [agriculture, nutmeg-and-spice-crops, small-business, nutmeg, mace, pimento, cinnamon, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - purchase-decision
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Nutmeg and Spice Crops
          description: "Growing nutmeg, cinnamon, clove, pimento and other spices: tree establishment, harvest, drying and curing, quality grades and selling through boards or exporters."
          projects:
            - name: Spice tree walk and field map
              description: |-
                ## Purpose
                Most spice holdings are known by memory: the nutmeg by the ravine, the clove trees near the road, the pimento walk that nobody has cleaned since the last storm. Walking the land and dividing it into named blocks gives every later record, from gathering rounds to replanting plans, a place to be written against.

                ## Milestones
                1. The boundary walked and checked against the deed sketch, survey plan or lease map you hold.
                2. The land divided into named blocks, each with its main spice and an approximate area.
                3. A map drawn or marked on a satellite image showing blocks, tracks, water, the drying area and the store.
                4. Each block labelled with a one-line note on tree age, slope and condition.

                ## Notes
                A phone mapping app that records a walked track is enough to start. Paint the block name on a post at each entrance so pickers and family use the same names.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map of the holding exists with every spice block named, its main crop and rough area given, and a condition note beside it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the deed sketch, survey plan or lease map for the land"
                - "Walk the boundary with a phone app recording the track"
                - "Divide the land into blocks and give each a short name"
                - "Mark the drying area, store, water and main tracks on the map"
                - "Paint each block name on a post at its entrance"
            - name: Tree census by species, sex and age
              description: |-
                ## Purpose
                Nutmeg and pimento trees are male or female, and only the females bear the crop you sell, so a block of fifty healthy trees can turn out to hold eighteen bearers. Counting every tree by species, sex, rough age and health shows how much crop the land can really give and where the gaps are.

                ## Milestones
                1. Every tree in each block counted and recorded by species.
                2. Nutmeg and pimento trees marked as female, male or not yet flowering.
                3. Each tree given a rough age band and a health score of good, fair or poor.
                4. A one-page summary per block showing bearing females, males, young trees and gaps.

                ## Notes
                A small paint dot on the trunk, one colour for females and another for males, saves recounting every season. Most growers aim to keep only a few males per block for pollination; agree the number with your extension officer.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written census lists every tree by block, species, sex where known, age band and health, with a total of bearing females."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Make a census sheet with columns for block, species, sex, age and health"
                - "Count and score the trees in the first block this week"
                - "Mark female and male nutmeg trees with different paint colours"
                - "Total the bearing females for each block"
                - "Note gaps where dead or missing trees could be replaced"
            - name: Grower registration with the spice board or cooperative
              description: |-
                ## Purpose
                In several islands spices are bought, graded or licensed through a statutory body or cooperative, such as the GCNA in Grenada for nutmeg and mace or JACRA for pimento in Jamaica. Being registered with the right body, the Ministry and your extension office is what lets you deliver, get paid, receive bonuses and qualify for replanting support.

                ## Milestones
                1. The bodies that buy, license or register spice growers in your country listed.
                2. Registration forms completed with land documents and identification attached.
                3. A grower or member number received and written in your records.
                4. The renewal date, if any, and the documents it needs noted.

                ## Notes
                Ask the extension office what applies where you farm: rules differ by island and by spice, and some exporters buy direct without a board.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A grower or member number from each relevant board, cooperative or Ministry register is recorded with its renewal date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension office which bodies register spice growers where you farm"
                - "Gather land documents, identification and your field map"
                - "Submit the registration forms and keep copies"
                - "Write the grower number and renewal date in the front of your records"
                - "Renew the grower registration and update the tree count @recurring(yearly)"
            - name: Last season's spice income rebuilt from receipts
              description: |-
                ## Purpose
                Without numbers it is impossible to tell whether the nutmeg pays for the labour or whether the clove trees are worth keeping. Pulling together last year's delivery slips, board statements and cash sales gives a first figure for weight sold, price per pound and income by spice.

                ## Milestones
                1. Every delivery slip, board statement and sales receipt from the last twelve months gathered in one place.
                2. Weight delivered by spice and grade totalled.
                3. Income per spice and the average price per pound or kilogram worked out.
                4. The main costs of the year, labour, transport and bags, listed beside the income.

                ## Notes
                Board bonus or surplus payments often arrive months after delivery. Count them in the season they belong to.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary shows last season's weight, grade, price and income for each spice beside the main costs."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect last year's delivery slips, board statements and receipts in one folder"
                - "Total the weight delivered for each spice and grade"
                - "Work out the income and average price per pound for each spice"
                - "List labour, transport and bag costs beside the income"
            - name: Rainfall record and spice crop calendar
              description: |-
                ## Purpose
                Rain drives the spice year: nutmeg drops more in wet months, clove buds follow dry spells, and cinnamon peels best in the rainy season. A rain gauge and a simple calendar of flowering, fruiting and picking by month turn years of guesswork into a plan you can staff and sell against.

                ## Milestones
                1. A rain gauge set up in an open spot near the house or store.
                2. Daily rainfall recorded and totalled each month.
                3. A twelve-month calendar showing when each spice flowers, ripens and is picked on your land.
                4. The calendar checked against a year of real records and corrected.

                ## Notes
                Start from the **Metrics log** template for the daily readings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of rainfall totals sit beside a crop calendar showing flowering, ripening and picking months for each spice grown."
                cadence: rolling
              tasks:
                - "Buy or borrow a simple rain gauge and set it up in the open"
                - "Read the gauge each morning and write the figure down @recurring(daily)"
                - "Total the month's rain and note flowering or fruit drop seen @recurring(monthly:28)"
                - "Draft a month by month calendar of flowering and picking for each spice"
            - name: Drying and curing space condition survey
              description: |-
                ## Purpose
                Most quality losses in spices happen after picking, on a leaking drying floor, a rack with no cover or a store where nuts sweat and mould. Checking every drying, curing and storage space before the main crop shows what must be fixed so the season's spices reach grade.

                ## Milestones
                1. Every drying floor, rack, tray and curing room listed with its size.
                2. Each space checked for roof leaks, shade, drainage, rodents and cover from sudden rain.
                3. A repair list priced and ranked by how much crop it protects.
                4. The urgent repairs done before the main gathering season.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A priced repair list for every drying and storage space exists and the urgent items are marked done before the main season."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every drying floor, rack and storage room with its size"
                - "Check each one for leaks, drainage, rodents and rain cover"
                - "Price the repairs and rank them by the crop they protect"
                - "Book or do the urgent repairs before the main season"
            - name: Spice harvest and processing kit list
              description: |-
                ## Purpose
                A gathering day lost to a torn bag, a missing knife for mace or no tarpaulin when the rain comes costs crop that cannot be picked up twice. A written kit list for gathering, separating, drying and bagging, checked before each season, means pickers start on time with what they need.

                ## Milestones
                1. A kit list for each spice written: baskets, bags, knives, tarpaulins, trays, scales and labels.
                2. Every item counted against the list and its condition noted.
                3. Missing or broken items replaced before the season.
                4. The list kept where the kit is stored, with a person named to check it.

                ## Notes
                Start from the **Operational checklist** template. Use food-grade bags and keep them for spices only; old fertiliser bags taint the crop.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written kit list exists for each spice grown, every item is counted, and missing items are replaced before the season opens."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the kit list for gathering, separating, drying and bagging"
                - "Count the kit you have against the list"
                - "Buy or repair the missing and broken items"
                - "Pin the list inside the store and name who checks it"
            - name: Choosing which spices suit your land
              description: |-
                ## Purpose
                Each spice has its own site: nutmeg wants deep, well-drained soil and steady rain in sheltered valleys, clove and pimento handle drier slopes, cinnamon copes with poorer ground, and vanilla needs shade and support trees. Matching each spice to each block before planting saves a decade of trees that never thrive.

                ## Milestones
                1. Each block described by elevation, slope, soil depth, drainage, rainfall and wind exposure.
                2. The site needs of nutmeg, clove, pimento, cinnamon and any other spice considered written down from extension sources.
                3. Each block matched to the one or two spices that suit it best.
                4. The choice checked with an extension officer on a field visit.

                ## Notes
                A soil test before planting tree crops is worth far more than its cost; the soil fertility work is covered in its own area.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every block has a recorded best-fit spice choice with the site reasons, confirmed with an extension officer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note elevation, slope, drainage and wind exposure for each block"
                - "Ask the extension office for site guides for each spice you are considering"
                - "Match each block to the spices whose needs it meets"
                - "Book a field visit to check the choices with an extension officer"
            - name: Buyer map for each spice you grow
              description: |-
                ## Purpose
                Growers often take whatever the nearest buyer offers because they do not know who else is buying. Listing every board, cooperative, exporter, processor, hotel and retail outlet for each spice, with their grades, prices and payment habits, shows your real choices before the crop is dry.

                ## Milestones
                1. Every buyer for each spice in reach listed with contact, location and what they buy.
                2. Each buyer's grades, minimum lots and recent prices noted.
                3. Payment speed and any bonus or second payment recorded for each.
                4. A first and second choice buyer chosen for each spice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A buyer list for each spice shows contacts, grades, prices and payment terms, with a first and second choice marked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every buyer you know of for each spice you grow"
                - "Ask two other growers who they sell to and how fast they are paid"
                - "Call each buyer for their grades, minimum lot and current price"
                - "Mark a first and second choice buyer for each spice"
            - name: Twice-weekly nutmeg gathering rounds
              description: |-
                ## Purpose
                Ripe nutmeg fruit splits and drops the nut with its red mace onto the ground, where rain, insects and rats spoil it within days. Gathering every block on fixed days keeps mace bright and nuts sound, and it is the single habit that most decides the grade you are paid for.

                ## Milestones
                1. Two fixed gathering days set and every picker told.
                2. A gathering order agreed so each block is covered in each round.
                3. Weight gathered per block written down after each round.
                4. Ground under the trees kept clear enough to see fallen nuts.

                ## Notes
                Gathering more often in heavy fall months is worth the labour; mace left on wet ground for a week usually drops a grade.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every block is gathered on two fixed days a week through the season, with weight per block recorded for each round."
                cadence: rolling
              tasks:
                - "Choose two gathering days and tell every picker"
                - "Set the order the blocks are gathered in"
                - "Gather every block and weigh the nuts by block @recurring(weekly:mon,thu)"
                - "Clear leaves under any tree where fallen nuts are hard to see"
            - name: Mace separation and drying routine
              description: |-
                ## Purpose
                Mace is worth far more per pound than the nut it wraps, and it is spoiled most easily: torn blades, mould from slow drying and dirt from the ground all cut its grade. A set routine for peeling, flattening and drying mace the same day it is gathered keeps whole blades and an even colour.

                ## Milestones
                1. Mace separated from the nuts on the day of gathering.
                2. Blades flattened by hand and laid in a single layer to dry.
                3. Drying mace covered or moved inside before rain and at night.
                4. Dry mace weighed and bagged by grade with the date.

                ## Notes
                Ask your buyer or board how they want mace delivered; some take it partly dried and finish curing it themselves.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All mace from each gathering round is separated the same day, dried under cover from rain and bagged by grade with a date."
                cadence: rolling
              tasks:
                - "Ask your buyer how they want mace dried and delivered"
                - "Separate and flatten the mace on each gathering day"
                - "Move drying mace under cover before rain and every evening"
                - "Weigh and bag dry mace by grade and check it for mould @recurring(weekly:sat)"
            - name: Nutmeg in-shell drying and turning log
              description: |-
                ## Purpose
                Nutmegs dry in their shells over several weeks until the kernel rattles, and nuts that dry unevenly or too fast crack, while those kept damp go mouldy and fail the float test. A dated log for each batch, with daily turning, tells you exactly when a batch is ready to crack and sell.

                ## Milestones
                1. Each day's gathered nuts kept as a dated batch on racks or trays.
                2. Every batch turned daily and checked for mould.
                3. The rattle test used to decide when a batch is dry.
                4. Drying days per batch recorded so the next season can be planned.

                ## Notes
                Start from the **Metrics log** template. Keep batches apart: mixing wet and dry nuts spreads mould.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every batch of nuts has a dated log entry showing daily turning and the day it passed the rattle test."
                cadence: rolling
              tasks:
                - "Label racks or trays so each day's nuts stay a separate batch"
                - "Turn every drying batch and look for mould @recurring(daily)"
                - "Shake sample nuts from each batch to test for the rattle"
                - "Write the drying days for each batch in the log when it is ready"
            - name: Clove bud picking and sun drying
              description: |-
                ## Purpose
                Clove buds are worth most when picked just as they turn pink and before they open, and a few days late turns a good crop into headless stems and flowers. Planning the picking, drying and stem separation for each clove season keeps colour dark and buds whole.

                ## Milestones
                1. Trees watched from flowering so the picking start is known a week ahead.
                2. Pickers booked and shown which clusters are ready.
                3. Buds separated from stems and spread thinly to sun dry.
                4. Dry cloves weighed, bagged and the yield per tree recorded.

                ## Notes
                Breaking branches to reach buds damages next season's crop. Use ladders and pick clusters by hand.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each clove season ends with buds picked before opening, dried, bagged and the yield per tree recorded."
                cadence: cyclic
              tasks:
                - "Check the clove trees for pink-tipped buds once flowering starts"
                - "Book pickers and ladders a week before buds are ready"
                - "Separate buds from stems and spread them to dry in thin layers"
                - "Record dry weight per tree at the end of the season"
            - name: Pimento berry harvest and drying
              description: |-
                ## Purpose
                Pimento berries are picked full-sized but still green, and the old habit of breaking whole branches to reach them sets trees back for years. A harvest plan that cuts only small fruiting twigs, dries berries evenly and keeps them clean protects both the crop and the trees.

                ## Milestones
                1. Bearing pimento trees listed with their usual harvest month.
                2. Pickers trained to cut small twigs rather than break branches.
                3. Berries stripped, dried until they rattle and cleaned of stems and leaves.
                4. Dry berries weighed, bagged and the yield per tree recorded.

                ## Notes
                Ask your buyer about moisture and cleanliness standards before the season; pimento for export is often checked for both.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pimento crop is cut by twig, dried to a rattle, cleaned and bagged, with yield per tree recorded and no branches broken."
                cadence: cyclic
              tasks:
                - "List bearing pimento trees and their usual harvest month"
                - "Show each picker how to cut small fruiting twigs"
                - "Dry the berries in thin layers until they rattle"
                - "Clean, weigh and bag the dry berries by tree or block"
            - name: Cinnamon bark cutting and quill drying
              description: |-
                ## Purpose
                Cinnamon bark peels cleanly only when the shoots are full of sap in the rainy season, and quills dried in hot sun crack and lose oil. A cutting rotation over the coppiced stools and a shaded drying routine gives long, even quills and keeps the stools sending up new shoots.

                ## Milestones
                1. Each cinnamon stool listed with when it was last cut.
                2. Shoots cut in the rainy season once the bark peels easily.
                3. Bark scraped, rolled into quills and dried in shade.
                4. Dry quills graded by length and colour and bagged.

                ## Notes
                Cut stools on a rotation so some are always regrowing, and leave a few shoots on young stools.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each rainy season ends with stools cut on rotation, quills dried in shade, graded by length and recorded."
                cadence: cyclic
              tasks:
                - "List each cinnamon stool and when it was last cut"
                - "Test-peel a shoot once the rains start to check the bark lifts"
                - "Cut, scrape and roll the bark into quills"
                - "Dry the quills in shade and grade them by length"
            - name: Dry spice storage, moisture and mould checks
              description: |-
                ## Purpose
                Dried spices pick up moisture from humid air, and a store that is fine in the dry season can grow mould and aflatoxin in a wet month. Regular checks of bags, moisture and pests mean stock that waits for a better price arrives at the buyer still at grade.

                ## Milestones
                1. Bags stored on pallets off the floor and away from walls.
                2. Every bag labelled with spice, grade, batch and date.
                3. A weekly walk-through for damp, insects and rodents done and noted.
                4. A monthly moisture check on sample bags recorded.

                ## Notes
                A simple hygrometer in the store shows when humidity is rising. Ask your buyer what moisture level they test for.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every stored bag is labelled and raised off the floor, with weekly checks and monthly moisture readings in the store log."
                cadence: rolling
              tasks:
                - "Raise all spice bags onto pallets away from the walls"
                - "Label every bag with spice, grade, batch and date"
                - "Walk the store for damp, insects and rodents @recurring(weekly:fri)"
                - "Test moisture in sample bags and log the readings @recurring(monthly:15)"
            - name: Monthly spice sales and cost ledger
              description: |-
                ## Purpose
                Income from spices arrives in small deliveries and late bonuses, and costs leak out in picker pay, transport and bags, so a season can feel busy and still lose money. A monthly ledger by spice shows the margin on each and gives a lender or grant officer the figures they ask for.

                ## Milestones
                1. A ledger with columns for date, spice, grade, weight, price, buyer and costs set up.
                2. Every delivery and payment entered within the month.
                3. Monthly totals of income and costs by spice worked out.
                4. A year-end summary of margin per spice written.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of sales and costs are entered by spice, with monthly totals and a year-end margin for each."
                cadence: rolling
              tasks:
                - "Set up the ledger in a notebook or spreadsheet"
                - "Enter the month's deliveries, payments and costs @recurring(monthly:3)"
                - "Chase any delivery not paid within the buyer's usual time"
                - "Write the year-end margin for each spice"
            - name: Ring weeding and mulching around young trees
              description: |-
                ## Purpose
                Young nutmeg, clove and pimento trees lose years of growth to grass and vines competing at the base, and older trees hide fallen nuts in thick weeds. A regular round of ring weeding and mulching keeps the base clear, holds moisture into the dry season and makes gathering faster.

                ## Milestones
                1. A clear ring around each young tree marked out.
                2. A monthly weeding round across all blocks set up.
                3. Mulch from prunings or grass cuttings laid around young trees before the dry season.
                4. Vines cut from trunks and canopies during each round.

                ## Notes
                Keep mulch a hand's width away from the trunk to avoid collar rot.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every young tree has a clear, mulched ring and a monthly weeding round is logged across all blocks."
                cadence: rolling
              tasks:
                - "Mark out a clear ring around each young tree"
                - "Weed the rings and cut vines from the trunks @recurring(monthly:20)"
                - "Lay mulch around young trees before the dry season starts"
                - "Note any tree that is struggling despite weeding"
            - name: Pruning and shade management in spice blocks
              description: |-
                ## Purpose
                Old spice blocks grow into a closed canopy of tall trees, dead wood and overgrown shade, with fruit too high to pick and too dark to set. A yearly pruning plan that removes dead and crossing wood and thins overhead shade brings light back and keeps trees at a height you can harvest.

                ## Milestones
                1. Trees needing dead wood removal, height control or shade thinning marked block by block.
                2. Pruning done in the season your extension officer recommends.
                3. Cuts kept clean and large wounds treated as advised.
                4. Prunings chipped or stacked as mulch rather than left to harbour pests.

                ## Notes
                Nutmeg does not recover well from heavy cutting; agree how much to take off with your extension officer before starting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly pruning record lists the trees pruned in each block and what was removed, done in the recommended season."
                cadence: cyclic
              tasks:
                - "Walk each block and mark trees for pruning or shade thinning"
                - "Ask the extension officer how hard each spice can be pruned"
                - "Prune the marked trees and record what was removed @recurring(yearly)"
                - "Stack or chip the prunings for mulch"
            - name: Spice tree nutrition plan from soil and leaf tests
              description: |-
                ## Purpose
                On most farms, spice trees are fed by guesswork, with fertiliser bought when cash allows and spread wherever. Testing soil, and leaves where the lab offers it, and building a feeding plan with your extension officer puts money only where the trees will respond.

                ## Milestones
                1. Soil samples taken from each main block and sent to a lab.
                2. Results read through with an extension officer.
                3. A feeding plan written with products and timing taken from the labels and the officer's advice.
                4. Applications recorded with date, block and product.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each main block has a current soil test and a written feeding plan agreed with an extension officer, with applications logged."
                cadence: cyclic
              tasks:
                - "Ask the extension office how to take and send soil samples"
                - "Take and send soil samples from each main block @recurring(yearly)"
                - "Go through the results with your extension officer"
                - "Record every feeding with date, block and product"
            - name: Telling male and female nutmeg trees apart
              description: |-
                ## Purpose
                Nutmeg seedlings give roughly as many males as females, and nobody can tell which is which until they flower years later. Learning the flower differences, and the signs growers use on older trees, lets you plan replacements, choose grafting wood and decide which males to keep.

                ## Milestones
                1. Male and female nutmeg flowers seen and compared in the field.
                2. The female and male trees in one block confirmed by flower.
                3. The census updated with any trees whose sex was wrong or unknown.
                4. A note made of the ratio of males to females your extension officer recommends.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The grower can identify male and female nutmeg flowers and has confirmed the sex of every flowering tree in at least one block."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a flowering male and female nutmeg tree and compare the flowers"
                - "Photograph both flower types for your records"
                - "Confirm the sex of each flowering tree in one block"
                - "Update the census with the corrected trees"
            - name: Recognising spice tree pests and diseases
              description: |-
                ## Purpose
                Nutmeg wilt, clove dieback, pimento rust, thread blight and boring insects all start small and are far easier to contain when spotted early. Knowing what each looks like on your trees, and walking the blocks with that in mind, means a problem reaches the extension officer while one tree is affected, not twenty.

                ## Milestones
                1. The main pests and diseases of each spice you grow listed from extension sources.
                2. Photographs or a field guide of each one kept on your phone.
                3. A monthly scouting walk through every block recorded.
                4. Every suspected case reported to the extension officer with photos and the tree location.

                ## Notes
                Never treat a disease on a guess. Ask the extension officer to confirm it and recommend an approved product, and follow the label exactly.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pest and disease photo guide exists for each spice grown and a monthly scouting record shows every suspected case reported."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the extension office for guides to pests and diseases of your spices"
                - "Save photos of each pest and disease on your phone"
                - "Scout every block for wilt, dieback and borers @recurring(monthly:10)"
                - "Send photos and tree locations of any suspect tree to the extension officer"
            - name: Grafting and marcotting nutmeg for female trees
              description: |-
                ## Purpose
                Grafting or marcotting from a proven female tree is the only way to be sure a young nutmeg will bear, and it brings the first crop forward. Learning the technique, with practice on spare stock under an experienced grafter, gives you planting material you can trust for replanting.

                ## Milestones
                1. Grafting and marcotting demonstrated by an extension officer or skilled grafter.
                2. Twenty practice grafts or marcots made on spare stock.
                3. The success rate after two months recorded.
                4. Your best female mother trees marked as sources of wood.

                ## Notes
                Pick mother trees with heavy, regular crops and large, sound nuts. Mark them clearly so nobody prunes them hard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least twenty practice grafts or marcots are made, the success rate is recorded and mother trees are marked."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the extension office for a grafting demonstration or training day"
                - "Mark three to five of your heaviest-bearing female trees as mother trees"
                - "Make twenty practice grafts or marcots on spare stock"
                - "Record how many took after two months"
            - name: Grading nutmeg and mace to buyer standards
              description: |-
                ## Purpose
                Buyers and boards pay by grade, and growers who do not know the standard leave money on the table by mixing sound nuts with defectives or broken mace with whole blades. Learning how your buyer grades, and sorting to that standard at home, means fewer rejections and a better average price.

                ## Milestones
                1. Your buyer's or board's grades for nutmeg and mace written down.
                2. The float test and visual sorting for nuts practised on one batch.
                3. Mace sorted into whole blades and broken pieces as the buyer grades them.
                4. The grade split of one delivery compared with the buyer's slip.

                ## Notes
                Floaters and defective nuts usually still sell, but at a lower grade or for oil. Keep them separate rather than throwing them away.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One delivery is sorted at home to the buyer's grades and the home grading matches the buyer's slip within a small margin."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the buyer or board for a written list of their grades"
                - "Float test one batch of cracked nuts and sort them"
                - "Sort mace into whole blades and broken pieces"
                - "Compare your sorting with the grades on the delivery slip"
            - name: Preventing mould and aflatoxin in dried spices
              description: |-
                ## Purpose
                Dried nutmeg and other spices can carry aflatoxin from moulds that grow during slow drying and damp storage, and export lots that fail a test can be rejected or destroyed. Understanding where the risk comes from on your farm, and closing those gaps, protects both buyers and your name.

                ## Milestones
                1. The points where mould can start on your farm, from ground to store, listed.
                2. Drying and storage practice checked against the guidance from your buyer or extension office.
                3. Three changes made that cut the risk, such as faster gathering or better rain cover.
                4. Any test results from the buyer filed and read through.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of mould risk points on the farm exists and at least three changes to cut them are in place and recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your buyer what aflatoxin and mould tests they run on spice lots"
                - "List every point from ground to store where nuts can stay damp"
                - "Choose three changes to cut the risk and put them in place"
                - "File any test results the buyer sends back"
            - name: Vanilla vine pollination and curing
              description: |-
                ## Purpose
                Vanilla is a high-value spice that fits under the shade of other trees, but each flower must be hand pollinated on the morning it opens and the beans take months of curing to develop flavour. Learning the full cycle on a small trial planting shows whether it is worth the labour on your farm.

                ## Milestones
                1. A trial of a few vines planted on support trees in light shade.
                2. Hand pollination learnt and practised on the first flowers.
                3. Pollinated flowers counted and marked with the date.
                4. One batch of beans taken through the killing, sweating, drying and conditioning stages.

                ## Notes
                Ask the extension office whether vanilla planting material is available and whether any import rules apply to cuttings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A small vanilla trial has hand-pollinated flowers recorded and at least one batch of beans cured through every stage."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the extension office about vanilla cuttings and growing guides"
                - "Plant a few vines against support trees in light shade"
                - "Practise hand pollination on the first open flowers"
                - "Cure one batch of beans and keep notes at each stage"
            - name: Spice essential oil basics
              description: |-
                ## Purpose
                Defective nutmegs, pimento leaves and West Indian bay leaves can all be distilled for oil, and in some islands bay oil from Dominica or pimento leaf oil has been a steady earner. Learning how small distillers work, what buyers pay and what the leaves are worth helps you decide whether to sell leaves, sell defectives or distil.

                ## Milestones
                1. The oils that can be made from your spices and their main buyers listed.
                2. A visit made to a working distiller or a processor that buys leaves or defectives.
                3. The price per pound for leaves or defectives against the price for oil noted.
                4. A short note written on whether distilling is worth exploring further.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note compares selling leaves or defectives with distilling oil, based on a visit and real prices."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the oils that could come from the spices you grow"
                - "Find a distiller or processor who buys leaves or defective nuts"
                - "Visit them and ask what they pay and what they need"
                - "Write a short note on whether to sell or distil"
            - name: How spice prices and bonuses are set
              description: |-
                ## Purpose
                Prices for spices move with world supply, the exchange rate and what Indonesian or Indian crops did that year, and board growers are often paid an advance and a later bonus. Understanding how your price is built helps you decide when to hold stock, which buyer to use and how to budget the year.

                ## Milestones
                1. How your board, cooperative or exporter sets the price written in plain words.
                2. Advance, bonus and grade price differences for the last three seasons gathered.
                3. The main world producers of your spices and their harvest seasons noted.
                4. A rule written for when you hold stock and when you sell straight away.

                ## Notes
                Holding stock is only worth it if your store can keep it at grade. A small price rise does not cover a dropped grade.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains how your spice price is set, with three seasons of figures and a written hold or sell rule."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your buyer or board how the price and bonus are worked out"
                - "Gather advance and bonus figures for the last three seasons"
                - "Note the main world producers and their harvest months"
                - "Ask the agent to summarise the figures into a one-page price note"
            - name: Replanting after storm loss with grafted females
              description: |-
                ## Purpose
                Hurricanes like Ivan in 2004 flattened most of Grenada's nutmeg, and many holdings never fully replanted because seedlings take years to bear and half turn out male. A replanting plan built on grafted or marcotted females, with shelter and early care, rebuilds the bearing tree count as fast as the crop allows.

                ## Milestones
                1. Gaps and storm-damaged trees counted from the census.
                2. The number of grafted or marcotted plants needed, and where they will come from, agreed.
                3. Planting holes prepared and plants set out at the start of the rains.
                4. Survival at six and twelve months recorded and losses replaced.

                ## Notes
                Ask the extension office and your board about subsidised planting material and replanting programmes before buying.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every gap marked in the census is planted with a grafted or marcotted female, and survival at twelve months is recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Count the gaps and damaged trees from the census"
                - "Ask the board and extension office about replanting support"
                - "Order or produce the grafted plants you need"
                - "Prepare holes and plant at the start of the rains"
                - "Check survival at six months and replace losses"
            - name: Small spice nursery for seedlings and grafts
              description: |-
                ## Purpose
                Buying planting material for every gap is costly and supply runs short after a storm, when every grower wants plants at once. A small shaded nursery for nutmeg rootstocks, grafts, pimento and clove seedlings gives you your own plants and a few to sell to neighbours.

                ## Milestones
                1. A nursery site chosen with shade, water and protection from animals.
                2. Bags, potting mix and shade cloth set up for the first batch.
                3. The first batch of seedlings or rootstocks raised and labelled.
                4. Survival and readiness of the first batch recorded.

                ## Notes
                Some countries require a licence to sell planting material; ask the extension office before selling plants.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shaded nursery holds a labelled first batch of spice seedlings or rootstocks with survival recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a shaded nursery spot near water"
                - "Set up bags, potting mix and shade cloth"
                - "Sow or set the first batch and label it"
                - "Record how many survive to planting size"
            - name: Intercropping young spice trees for early income
              description: |-
                ## Purpose
                Young nutmeg can take seven years or more to bear well, which is a long time to carry costs on land that earns nothing. Choosing short crops such as bananas, pigeon peas or ginger to grow between young trees brings in cash and shade, as long as they do not crowd the trees.

                ## Milestones
                1. Intercrop options listed with time to harvest, shade effect and market.
                2. One or two intercrops chosen for each young block.
                3. A spacing plan drawn that keeps a clear ring around every spice tree.
                4. Intercrop income and labour recorded for the first year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each young spice block has a chosen intercrop, a spacing plan that protects the trees and a first-year income record."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List possible intercrops with time to harvest and market"
                - "Ask the extension officer which suit young spice trees"
                - "Draw a spacing plan that keeps rings around each tree"
                - "Record the intercrop's income and labour for a year"
            - name: Choosing a solar or mechanical spice dryer
              description: |-
                ## Purpose
                Sun drying on open floors loses crop to sudden showers and slows to a crawl in wet months, just when nutmeg drops most. Comparing a covered solar dryer, a mechanical dryer and better racks against your volume and power supply shows which pays back in grade and saved labour.

                ## Milestones
                1. Your peak weekly volume of wet nuts, mace and other spices estimated.
                2. Three drying options priced, including running and repair costs.
                3. Each option scored on capacity, rain protection, power need and quality.
                4. A choice made and recorded with the reasons.

                ## Notes
                Start from the **Purchase decision** template. Ask other growers to show you their dryers in a wet month, not a dry one.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the chosen drying system, with three priced options scored against peak volume and wet season need."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate your peak weekly volume of wet spices"
                - "Get prices for three drying options including running costs"
                - "Visit a grower using a solar or mechanical dryer"
                - "Score the options and record your choice"
            - name: Selling through the board versus private exporters
              description: |-
                ## Purpose
                Board or cooperative sales give a steady market and a bonus, while private exporters and specialty buyers may pay more for top grades but carry more risk. Comparing the real net price, payment speed and rules for each route lets you decide where each spice and grade should go.

                ## Milestones
                1. The rules for selling outside the board or cooperative checked where you farm.
                2. Net price per pound for each route worked out after transport, bags and grading losses.
                3. Payment speed and reliability of each buyer compared.
                4. A route chosen for each spice and grade and reviewed each year.

                ## Notes
                In some islands certain spices may only be exported under licence or through the board. Check before promising a private buyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of net price and payment for each route exists, with a chosen route per spice and grade."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check the rules on selling spices outside the board where you farm"
                - "Work out the net price per pound for each route"
                - "Compare how fast and reliably each buyer pays"
                - "Review the route for each spice before the main season @recurring(yearly)"
            - name: Adding ginger and turmeric as short-cycle spices
              description: |-
                ## Purpose
                Ginger and turmeric give a crop within a year, fit on smaller plots and sell fresh, dried or to processors, which spreads income between tree crop seasons. A small trial plot with clean planting material shows the yield and price before committing more land.

                ## Milestones
                1. Clean, disease-free planting material sourced from a trusted supplier or the extension office.
                2. A trial plot planted on well-drained beds.
                3. Yield, labour and price recorded at harvest.
                4. A decision written on whether to expand, hold or stop.

                ## Notes
                Ginger is prone to rhizome rot in wet ground. Use raised beds and do not replant in the same spot each year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ginger or turmeric trial is harvested with yield, labour and price recorded and a written expand or stop decision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the extension office where to get clean ginger or turmeric seed pieces"
                - "Prepare raised beds on a well-drained plot"
                - "Plant the trial and note the date"
                - "Record yield, labour and price at harvest"
            - name: Black pepper vines on support trees
              description: |-
                ## Purpose
                Black pepper climbs on living supports or posts and fits into a mixed spice holding, adding a crop that dries and stores well. Setting out a small block of vines with good supports and shade gives you a few years of learning before deciding whether to expand.

                ## Milestones
                1. A site with support trees or posts and partial shade chosen.
                2. Rooted cuttings planted and tied to their supports.
                3. Vines trained and tied as they climb through the first year.
                4. First spikes picked, dried and the yield noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A small block of pepper vines is established on supports, trained through its first year and its first dried yield recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a partly shaded site with support trees or posts"
                - "Source rooted pepper cuttings through the extension office"
                - "Plant the cuttings and tie them to their supports"
                - "Tie in new growth on each visit through the first year"
            - name: Nut cracking and sorting setup
              description: |-
                ## Purpose
                Cracking dried nutmegs by hand is slow and breaks kernels, and poor sorting lets defectives drag down a sound lot. Comparing hand crackers, small machines and a better sorting table against your volume shows whether cracking at home pays, or whether to deliver in shell.

                ## Milestones
                1. Whether your buyer pays more for cracked and sorted nuts than for nuts in shell checked.
                2. Cracking and sorting time per hundred pounds measured on your current method.
                3. Two or three cracking options priced.
                4. A decision recorded on how you will crack and sort, or to sell in shell.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on cracking at home or selling in shell exists, based on measured time and the buyer's price difference."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your buyer the price for nuts in shell and cracked"
                - "Time how long cracking and sorting a batch takes now"
                - "Price two or three cracking tools or machines"
                - "Record your decision and the figures behind it"
            - name: Peak nutmeg season readiness
              description: |-
                ## Purpose
                When the heavy fall comes, gathering, mace drying and nut drying all peak in the same weeks, and anything unready shows up as spoiled crop. A readiness check a month before, covering pickers, kit, drying space, bags and buyer arrangements, means the busiest weeks run on a plan.

                ## Milestones
                1. Pickers booked for the peak weeks with rates agreed.
                2. Kit list checked and drying space repaired.
                3. Enough food-grade bags and labels in the store.
                4. Delivery days and transport agreed with the buyer.

                ## Notes
                Start from the **Operational checklist** template and reuse it every season.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One month before peak fall, pickers, kit, drying space, bags and buyer delivery days are all confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the date one month before your usual peak fall"
                - "Book pickers for the peak weeks and agree rates"
                - "Check the kit list and drying space against the season"
                - "Agree delivery days and transport with your buyer"
            - name: Hurricane season plan for spice trees and stock
              description: |-
                ## Purpose
                Losing a spice tree means years of waiting for a replacement, dried stock in the store can be the whole season's income, so a storm with no plan can wipe out both at once. A written plan for securing stock, protecting mother trees and nursery plants, and recording damage for claims and replanting support cuts the loss.

                ## Milestones
                1. Dried stock and its value listed, with a plan to sell or move it before a storm.
                2. Mother trees, young grafts and nursery plants that need protection marked.
                3. Photos of every block and the store taken before the season as a record.
                4. A damage recording sheet ready for after a storm.

                ## Notes
                Start from the **Risk register** template. General farm hurricane preparation is covered in its own area; this one is about the spice trees and stock.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written spice hurricane plan exists before the season, with stock listed, key trees marked and dated photos of each block."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the dried stock in the store and its value"
                - "Plan where stock will be sold or moved if a storm is forecast"
                - "Mark mother trees and nursery plants that need protecting"
                - "Photograph every block and the store before the season"
            - name: First delivery to a receiving station
              description: |-
                ## Purpose
                New growers often lose grade on their first delivery because they did not know how the station weighs, grades and pays. Preparing the first lot to the station's standard and watching how it is graded teaches more in one morning than a season of hearsay.

                ## Milestones
                1. The station's opening days, grading rules and paperwork checked in advance.
                2. A first lot sorted, bagged and labelled to the station's standard.
                3. The lot delivered and the grading watched and noted.
                4. The delivery slip filed and the grades compared with your own sorting.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first lot is delivered to a receiving station, with the slip filed and the station's grades compared with your own."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the receiving station for its days, grades and paperwork"
                - "Sort and bag a first lot to that standard"
                - "Deliver the lot and watch how it is graded"
                - "File the slip and note where your grading differed"
            - name: First sample to a specialty spice buyer
              description: |-
                ## Purpose
                Small spice brands, chocolate makers and diaspora retailers will sometimes pay well above board prices for clean, traceable spice from a named farm. Sending a well-presented sample with the facts they ask for opens a route that a commodity sale never will.

                ## Milestones
                1. Three specialty buyers found and their sample needs noted.
                2. A sample lot prepared, labelled with farm, spice, grade, harvest date and weight.
                3. A one-page farm sheet written to go with the sample.
                4. Buyer feedback received and recorded, with any price offered.

                ## Notes
                Check any export or sample rules for spices before posting abroad; export compliance has its own area.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A labelled sample and farm sheet reach at least one specialty buyer and their feedback and price are recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find three specialty buyers who buy from named farms"
                - "Ask each what sample size and information they want"
                - "Ask the agent to draft a one-page farm sheet from your records"
                - "Send the labelled sample and follow up after two weeks"
            - name: Spice stall at an agricultural show or festival
              description: |-
                ## Purpose
                Agricultural shows and spice or food festivals put your nutmeg, mace and cinnamon in front of locals, visitors and small buyers who may become regulars. A planned stall with clear grades, prices and a way to reorder turns one weekend into lasting contacts.

                ## Milestones
                1. A show or festival chosen and a stall booked.
                2. Stock packed in small, labelled retail packs with prices.
                3. A sign and a way to take contact details or orders prepared.
                4. Sales and contacts gathered recorded after the event.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A stall is run at one show or festival, with sales totalled and at least ten buyer contacts recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose a show or festival and book a stall"
                - "Pack spices in small labelled packs with prices"
                - "Make a sign and a contact sheet for repeat orders"
                - "Record sales and contacts after the event"
            - name: Reviving an inherited family spice estate
              description: |-
                ## Purpose
                Many spice estates sit half abandoned after a storm or a death, with tall trees, bush underneath and nobody sure who owns which piece. Bringing one back starts with clearing the paperwork with family, then the bush, then deciding which trees to keep, cut back or replace.

                ## Milestones
                1. Family members with a claim to the land listed and an agreement on who manages it written down.
                2. Access tracks and the worst bush cleared in each block.
                3. The surviving trees counted and scored.
                4. A first year plan written covering clearing, replanting and the first harvest.

                ## Notes
                Land title questions need a lawyer or the land registry, not a family conversation alone. Get the management arrangement in writing.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written family management agreement, cleared access and a first year revival plan for the estate are all in place."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List family members with a claim to the land"
                - "Agree in writing who manages the estate and how income is shared"
                - "Clear access tracks into each block"
                - "Write a first year plan for clearing, replanting and harvest"
            - name: Running a spice smallholding of a few acres
              description: |-
                ## Purpose
                On two or three acres a family can gather nutmeg, pick clove and cut cinnamon around other work, but only if the week has a rhythm. A simple weekly plan that fits gathering, drying and selling around jobs and school keeps a small holding earning without taking over every day.

                ## Milestones
                1. The tasks each spice needs in a normal week written down.
                2. A weekly plan agreed with the family showing who does what and when.
                3. The plan tested through one full season.
                4. Changes noted for next season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly smallholding plan with named people for each task has run through one full season and been revised."
                cadence: cyclic
              tasks:
                - "List the weekly tasks for each spice you grow"
                - "Agree with the family who does each task and when"
                - "Hold a short Sunday check on the coming week @recurring(weekly:sun)"
                - "Note what to change at the end of the season"
            - name: Managing spice trees from abroad or part time
              description: |-
                ## Purpose
                Owners living in the UK, US, Canada or another island often leave a relative or caretaker in charge, and without records the crop, the money and the trees drift. A clear arrangement with a monthly report and photos keeps the holding productive and the relationship honest.

                ## Milestones
                1. A caretaker or manager agreed with duties, pay or share written down.
                2. A monthly report format agreed: deliveries, payments, costs and photos.
                3. Board or buyer payments set to go to an account you can see.
                4. A visit or video walk of the blocks done at least once a year.

                ## Notes
                Ask the buyer or board whether you can receive statements directly. It saves awkward questions later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written caretaker agreement exists and twelve monthly reports with deliveries, payments and photos are on file."
                cadence: rolling
              tasks:
                - "Write down the caretaker's duties and pay or share"
                - "Agree a monthly report of deliveries, payments, costs and photos"
                - "Review the monthly report and call the caretaker @recurring(monthly:7)"
                - "Arrange for buyer statements to come to you directly"
            - name: Working with a spice farmer group
              description: |-
                ## Purpose
                Small growers acting alone pay more for transport, bags and planting material and have little say with buyers. A farmer group or cooperative branch that shares a truck, buys inputs together and talks with the board as one voice can lift every member's net price.

                ## Milestones
                1. Nearby spice growers interested in working together listed.
                2. A first shared task agreed, such as joint transport or bag buying.
                3. Simple rules for sharing costs and money written down.
                4. Monthly meetings held and notes kept.

                ## Notes
                Keep money matters in writing and shared openly from the first meeting.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A farmer group with written cost-sharing rules has held regular meetings and completed at least one shared task."
                cadence: rolling
              tasks:
                - "List nearby spice growers who might join"
                - "Agree one shared task to start with"
                - "Write simple rules for sharing costs and payments"
                - "Hold the group meeting and keep notes @recurring(monthly:12)"
            - name: Planning a new spice planting on bare land
              description: |-
                ## Purpose
                Starting a spice farm from scratch is a ten-year decision: trees take years to bear, and mistakes in spacing, sex ratio and shelter cannot be undone cheaply. A written planting plan with a budget, planting material sources and years to first income lets a new grower or a founder see the whole cost before the first hole is dug.

                ## Milestones
                1. The land, water and access checked and the spices chosen.
                2. A planting layout drawn with spacing, windbreaks and the male to female ratio set.
                3. Planting material sources and costs confirmed.
                4. A budget written showing costs and expected income year by year to full bearing.

                ## Notes
                Ask the extension office for spacing guides and any planting incentive before buying plants.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written planting plan exists with layout, material sources and a year by year budget to full bearing."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Check the land for water, access and drainage"
                - "Draw a planting layout with spacing and windbreaks"
                - "Confirm where planting material will come from and its cost"
                - "Write a budget from planting to full bearing"
            - name: Handing the spice trees to the next generation
              description: |-
                ## Purpose
                Tree crops outlive their planters, and when the older grower stops, the knowledge of which trees bear best and which buyer pays fairly often goes too. A planned handover, with records, a walk of every block and the board registration moved, keeps the holding going.

                ## Milestones
                1. The person or people taking over named and willing.
                2. Every block walked together and the best trees, problems and buyers explained.
                3. Records, maps and registration details passed on.
                4. Registration and payments moved to the new grower's name.

                ## Notes
                Inheritance and land transfer need a lawyer. This project is about passing on the farm knowledge alongside that.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A named successor has walked every block with the current grower and the registration and records are in their name."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Talk with the family about who will take over the trees"
                - "Walk every block together and note the best trees and problems"
                - "Hand over records, maps and buyer contacts"
                - "Move the registration and payments to the new grower"
            - name: Lot traceability for premium spice buyers
              description: |-
                ## Purpose
                Premium and export buyers increasingly ask where a lot came from, when it was harvested and how it was dried. A lot numbering system that follows each batch from block to bag lets you answer them, trace any complaint and charge for spice that can prove its story.

                ## Milestones
                1. A lot numbering format set that links block, spice and harvest date.
                2. Every batch given a lot number from gathering through drying to bagging.
                3. A lot register kept with weights, dates and buyer for each lot.
                4. One lot traced from bag back to block as a test.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every lot sold for one season carries a number in the register, and one lot is traced from bag to block on request."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set a lot number format linking block, spice and date"
                - "Label each batch with its lot number from gathering on"
                - "Keep a lot register with weights, dates and buyer"
                - "Trace one lot from bag back to block as a test"
            - name: Residue and aflatoxin testing for export lots
              description: |-
                ## Purpose
                Export buyers, especially in Europe, test spices for aflatoxin, pesticide residues and microbes, and a failed lot can be rejected at the port. Knowing which tests your buyers need, where they can be done and what they cost lets you test before shipping rather than after.

                ## Milestones
                1. The tests each export buyer requires listed.
                2. Labs that can run them, their costs and turnaround times found.
                3. One lot sampled and tested before sale.
                4. Results filed against the lot number.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The tests each export buyer needs are listed with lab costs, and at least one lot has been tested and its results filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each export buyer which tests they require"
                - "Find labs that run those tests and their prices"
                - "Sample and send one lot for testing"
                - "File the results against the lot number"
            - name: Organic or fair trade spice certification readiness
              description: |-
                ## Purpose
                Many old spice holdings use few or no chemicals, which puts organic or fair trade certification within reach and opens buyers who pay a premium. Checking the standard, the records it needs and the cost of inspection shows whether certification would pay on your volume.

                ## Milestones
                1. The certification standards relevant to your buyers identified.
                2. Your current practices and records checked against the standard.
                3. Inspection and yearly costs gathered from a certifier.
                4. A decision recorded on whether to apply, alone or as a group.

                ## Notes
                Group certification through a cooperative often costs each grower far less than going alone.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written gap check against one certification standard exists, with certifier costs and a decision on whether to apply."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your buyers which certifications they value"
                - "Read the standard and list where your records fall short"
                - "Get inspection and yearly costs from a certifier"
                - "Decide whether to apply alone, as a group or not yet"
---

# Nutmeg and Spice Crops

Nutmeg and Spice Crops is for growers of nutmeg, mace, clove, cinnamon, pimento and the smaller spices, from the family with forty old nutmeg trees on a Grenadian hillside to the farmer drying pimento in Jamaica for an exporter. The projects open with knowing what you have: a field map, a census that separates male and female trees, your grower registration and a buyer map. Then come the gathering, drying and storage routines, the skills behind clean grades, replanting and equipment decisions, harvest and sale milestones, situations such as inherited estates, smallholdings and owners living abroad, and specialist work on traceability, testing and certification.

What repeats is the twice-weekly nutmeg gathering round, daily turning of drying nuts during the season, weekly and monthly storage checks, a monthly sales ledger and ring weeding, and yearly pruning, soil sampling and registration renewal. The Metrics log, Operational checklist, Purchase decision and Risk register templates pair with the projects that point to them. Fertiliser, fungicide and insecticide choices always go through the product label and your extension officer, never a dose from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
