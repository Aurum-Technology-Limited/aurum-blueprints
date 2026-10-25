---
id: agriculture.coconut-farming
name: Coconut Farming
description: "Map and count your palms, harvest water nuts and dry nuts on a steady round, watch for lethal yellowing and red ring, replant old groves and turn nuts into copra, oil and other products buyers pay more for."
category: business
version: 1.0.0
tags: [agriculture, coconut-farming, small-business, coconut, coconut-water, copra, lethal-yellowing, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - training-program
    - purchase-decision
    - operational-checklist
    - vendor
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Coconut Farming
          description: "Managing coconut trees for water, dry nuts, copra and oil: varieties, replanting, harvesting, pest and disease watch and value-added products."
          projects:
            - name: Grove walk and coconut block map
              description: |-
                ## Purpose
                Coconut land is often known only by memory: the palms by the beach, the old piece behind the house, the stretch along the river nobody has cleaned since the last storm. Walking the boundary and dividing the grove into named blocks gives every harvest, sanitation round and replanting decision a place to be written against.

                ## Milestones
                1. The boundary walked and compared with the survey plan, deed sketch or lease map you hold.
                2. The palms divided into named or numbered blocks of similar age and condition, each with an approximate area.
                3. A map drawn or marked on a satellite image showing blocks, access traces, water, roads and buildings.
                4. Each block labelled with a one-line note on age, variety and condition.

                ## Notes
                A phone mapping app that records a walked track is enough to start. Mark every place where palms lean over a road, path or roof, because those become your falling nut hazard list later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map of the grove exists with every block named, its rough area given and a one-line condition note beside it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the survey plan, deed sketch or lease map for the land"
                - "Walk the boundary with a phone recording the track"
                - "Divide the palms into blocks and give each a short name"
                - "Mark roads, paths and roofs that palms overhang on the map"
            - name: Palm census by age and condition
              description: |-
                ## Purpose
                Yield and replanting both depend on how many palms you really have and what state they are in, and most growers guess high. Counting palms block by block and scoring each as bearing, young, senile, sick or dead turns the grove from a rough idea into a number you can plan with.

                ## Milestones
                1. Every palm in each block counted, with gaps and stumps noted.
                2. Each palm scored as young, bearing, senile, sick or dead on a simple scale.
                3. Approximate age bands recorded per block from family memory, records or palm height.
                4. A summary table showing bearing palms per block and per acre.

                ## Notes
                Senile palms are usually tall with a narrowing trunk top, a small crown and few bunches. Spray-paint a small number on sick palms so you can find them again on the pest walk.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A census table gives the count of bearing, young, senile, sick and dead palms for every block."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Make a census sheet with one row per block and five condition columns"
                - "Count and score the palms in the first block this week"
                - "Number sick palms with spray paint so they can be found again"
                - "Total bearing palms per block and per acre in the summary table"
            - name: Identifying the coconut varieties you grow
              description: |-
                ## Purpose
                Tall types, dwarfs such as Malayan yellow, green or red, and hybrids like Maypan differ in when they bear, how big the nuts are, how much water they give and how they stand up to disease and wind. Knowing which you have in each block tells you which to sell for water, which for dry nuts and which to keep as seed.

                ## Milestones
                1. Each block noted as mainly tall, dwarf, hybrid or mixed.
                2. Dwarf palms recorded by nut colour where it can be seen.
                3. The extension officer asked to confirm any type you are unsure of.
                4. Variety added to the block map and census table.

                ## Notes
                Talls usually have a swollen base, bear later and give larger dry nuts. Dwarfs bear earlier with smaller nuts and are often preferred for water. Ask locally which types have held up against lethal yellowing in your area.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every block on the map has its variety type recorded, with any uncertain ones confirmed by an extension officer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Photograph the trunk base, crown and nuts of one palm in each block"
                - "Sort the photos into tall, dwarf and unsure"
                - "Show the unsure photos to your extension officer"
                - "Write the variety beside each block on the map"
            - name: Coconut grower registration and farmer ID
              description: |-
                ## Purpose
                Many incentives, replanting programmes, subsidised seedlings and disaster relief payments go only to growers registered with the agriculture ministry or a coconut industry body. Registering now, with your acreage and palm count on file, means you are on the list before the next storm or programme opens.

                ## Milestones
                1. The office that registers coconut growers in your country identified.
                2. Land documents, ID and the palm census gathered for the application.
                3. Registration submitted and a farmer number or card received.
                4. The renewal date and the officer's contact details recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A current farmer registration number covering the coconut acreage is held, with its renewal date recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Call the agriculture ministry to ask who registers coconut growers"
                - "Gather land papers, ID and the palm census summary"
                - "Submit the registration with the acreage and palm count"
                - "Renew farmer registration and update the palm count @recurring(yearly)"
            - name: Last year's nut sales rebuilt from receipts
              description: |-
                ## Purpose
                Without numbers it is impossible to say whether the grove pays, which buyers are worth keeping or whether replanting would be worth the money. Rebuilding last year's sales from receipts, WhatsApp messages and vendor notebooks gives a baseline that every later decision can be measured against.

                ## Milestones
                1. Every receipt, message and notebook entry for coconut sales gathered in one place.
                2. Sales sorted by product: water nuts, dry nuts, copra and anything else.
                3. Nuts sold and money received totalled by month and by buyer.
                4. An average price per nut for each product worked out.

                ## Notes
                Ask the agent to turn photos of receipts and message screenshots into a simple monthly table if the pile is large.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of last year's coconut sales by month, product and buyer exists, with an average price per nut for each product."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect last year's receipts, vendor notebooks and sales messages"
                - "Ask the agent to draft a monthly sales table from the receipt photos"
                - "Total nuts and money by product and buyer"
                - "Work out the average price per nut for each product"
            - name: Choosing your coconut product mix
              description: |-
                ## Purpose
                A palm can be harvested young for water, left to mature for dry nuts, or carried on to copra, oil or desiccated coconut, and each route needs different labour, buyers and equipment. Deciding which mix suits your palms, location and time stops the grove drifting between all of them and doing none well.

                ## Milestones
                1. The price, labour, transport and waste per nut written down for water nuts, dry nuts and copra.
                2. Nearby buyers listed for each product, with the volume they take.
                3. A share of each block assigned to water, dry nut or processing.
                4. The decision and its reasons written in a short note for the season.

                ## Notes
                Water nuts usually earn more per nut but need a steady round and fast delivery. Dry nuts and copra store and travel better. Many growers keep dwarfs for water and talls for dry nuts.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written product mix assigns each block to water nuts, dry nuts or processing, with the price and buyer evidence behind it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask three buyers what they pay for water nuts and dry nuts"
                - "Estimate labour per hundred nuts for each product"
                - "Assign each block to water, dry nut or processing"
                - "Write the product mix decision with the numbers behind it"
            - name: Climbing and harvest safety baseline
              description: |-
                ## Purpose
                Falls from palms and nuts dropping on workers are the most serious injuries in coconut farming, and many groves run on one experienced climber with no harness and no plan for an accident. Setting a basic safety standard for climbing, pole work and the drop zone protects the people who do the work and the farm that depends on them.

                ## Milestones
                1. Every person who climbs or harvests listed, with their method and experience.
                2. A rule set for harness or climbing device use, and for keeping others out of the drop zone.
                3. A first aid kit and an emergency phone number kept where harvest happens.
                4. Insurance or workers' cover for climbers checked with your insurer.

                ## Notes
                Never send anyone up a palm that has lost its crown, shows a rotting top or has been struck by lightning. Ask your insurer what cover applies to contract climbers who are not on the payroll.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page harvest safety rule sheet exists, a first aid kit is on site and climber insurance cover has been checked and recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List everyone who climbs or harvests and how they do it"
                - "Write a one-page rule for harnesses, drop zones and unsafe palms"
                - "Put a first aid kit and emergency numbers in the harvest kit"
                - "Ask your insurer what covers contract climbers on the farm"
            - name: Lethal yellowing and red ring status in your district
              description: |-
                ## Purpose
                Lethal yellowing has wiped out whole coconut districts in the Caribbean, and red ring kills palms quickly where the palm weevil is active. Finding out which diseases have been confirmed near you, and what the ministry asks growers to do, decides how you scout, what you replant and whom you call first.

                ## Milestones
                1. The plant protection unit or extension office asked which palm diseases are confirmed in your district.
                2. Any movement restrictions on seedlings or palm material noted.
                3. The reporting number for suspected cases saved in your phone.
                4. A one-paragraph summary of the local disease picture written in the farm file.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note records which coconut diseases are confirmed in your district, any restrictions and the number for reporting suspected cases."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Call the extension office about palm diseases confirmed near you"
                - "Ask whether there are rules on moving seedlings or palm material"
                - "Save the suspected disease reporting number in your phone"
                - "Write a short disease status note in the farm file"
            - name: Coconut harvest kit and tools list
              description: |-
                ## Purpose
                Harvest days are lost when the pole knife is blunt, the rope has frayed or there are no clean sacks for the nuts. Listing the kit once, checking its condition and keeping it in one place means the round can go ahead whenever the nuts are ready.

                ## Milestones
                1. A kit list covering harvest poles and knives, climbing gear, ropes, cutlasses, sacks or crates and a cart or vehicle.
                2. Each item checked and marked as good, repair or replace.
                3. Worn or missing items bought or repaired.
                4. The kit stored together in a dry, locked place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written kit list exists with every item marked good, and the kit is stored together in one locked place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a list of every tool used on a harvest day"
                - "Check each item and mark it good, repair or replace"
                - "Repair or buy the items marked for action"
                - "Check climbing ropes and harness straps for wear @recurring(monthly:9)"
            - name: Water nut harvest round
              description: |-
                ## Purpose
                Each coconut palm opens a new bunch roughly every month, so water nuts come on steadily all year rather than in one crop. Harvesting each block on a fixed round, about every four to six weeks, catches bunches at the right stage instead of leaving them to over-mature or fall.

                ## Milestones
                1. A harvest order for the blocks set so each is visited on a regular round.
                2. A target number of nuts per block per round written down from the census.
                3. Each round recorded with date, block and nuts cut.
                4. Blocks that fall well short of target flagged for a closer look.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every block is harvested on a round of no more than six weeks, with each round's date and nut count recorded."
                cadence: rolling
              tasks:
                - "Set the block order for a four to six week harvest round"
                - "Write a nut target per block from the census"
                - "Plan the next week's harvest blocks and climber @recurring(weekly:sun)"
                - "Record date, block and nuts cut after each harvest"
            - name: Monthly nut count and sales ledger
              description: |-
                ## Purpose
                Income from nuts comes in small amounts from many buyers, and it is easy to lose track of who paid, who owes and whether the month made anything after climbers and transport. A monthly ledger of nuts harvested, nuts sold, money in and costs out shows the real return from each block and product.

                ## Milestones
                1. A ledger set up with columns for nuts harvested, sold, price, buyer and costs.
                2. Every sale and cost for the month entered by the first week of the next.
                3. Money owed by buyers listed and followed up.
                4. A monthly net figure per product compared with the same month last year.

                ## Notes
                Start from the **Metrics log** template. Count spoilt and unsold nuts too, because waste is often the biggest hidden cost in water nut sales.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ledger is complete for every month, with nuts, sales, costs and money owed recorded within a week of month end."
                cadence: rolling
              tasks:
                - "Set up the ledger with columns for nuts, sales, buyers and costs"
                - "Enter the month's sales, costs and spoilt nuts @recurring(monthly:3)"
                - "Chase any buyer who owes for more than one delivery"
                - "Compare this month's net figure with the same month last year"
            - name: Crown cleaning and dead frond removal
              description: |-
                ## Purpose
                Dead fronds, old spathes and rotting bunch stalks in the crown hide pests, hold water that rots the bud and add weight that brings palms down in a storm. Cleaning crowns on a regular cycle, often at the same time as harvest, keeps palms healthier and makes them safer to climb and stand under.

                ## Milestones
                1. A crown cleaning cycle set for each block, matched to the harvest round where possible.
                2. Dead fronds, spathes and old stalks removed from crowns on the cycle.
                3. Cut material moved away from palm bases or chopped for mulch.
                4. Palms with signs of bud rot or pest damage noted for the pest walk.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each block has had its crowns cleaned at least three times in the year, with dates recorded."
                cadence: rolling
              tasks:
                - "Agree with the climber to clean crowns during harvest climbs"
                - "Pick one block for a full crown cleaning this month"
                - "Schedule the next block's crown cleaning @recurring(quarterly)"
                - "Note any palm with bud rot or pest damage in the pest log"
            - name: Palm circle weeding and ground cover
              description: |-
                ## Purpose
                Grass and bush right up to the trunk compete for water and nutrients, hide fallen nuts and give snakes and rats cover. Keeping a clean circle around each palm and managing the cover between rows with slashing, grazing or a legume makes harvest, fertiliser and pest work easier.

                ## Milestones
                1. A target circle size around each palm agreed for the grove.
                2. Each block slashed or weeded on a set cycle, with the dates recorded.
                3. A plan chosen for the ground between rows: slashing, grazing or a cover crop.
                4. Any herbicide use agreed with the extension officer and recorded against the label.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every block has a clean palm circle maintained on a recorded cycle, with the between-row cover plan written down."
                cadence: rolling
              tasks:
                - "Mark the circle size on two palms as a guide for workers"
                - "Choose how the ground between rows will be managed"
                - "Slash or weed the next block on the cycle @recurring(monthly:18)"
                - "Record any herbicide used with the product and label reference"
            - name: Monthly coconut pest and disease walk
              description: |-
                ## Purpose
                Rhinoceros beetle holes in young fronds, red palm mite on lower leaves, weevil damage and the first yellowing of a frond are easy to miss from the ground unless someone looks on purpose. A monthly walk along a set route through every block catches problems while they are a few palms, not a block.

                ## Milestones
                1. A walking route through every block set and drawn on the map.
                2. A short checklist of signs to look for written: frond damage, nut drop, yellowing, crown collapse and holes in the trunk.
                3. Each walk recorded with date, block and anything found.
                4. Suspected lethal yellowing or red ring reported to the ministry the same week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pest and disease walk is recorded for every month, and any suspected notifiable disease was reported within a week."
                cadence: rolling
              tasks:
                - "Draw the pest walk route on the block map"
                - "Write the checklist of signs to look for on each walk"
                - "Walk the route and log what you find @recurring(monthly:12)"
                - "Report suspected lethal yellowing or red ring to the ministry"
            - name: Husk, stump and fallen palm sanitation
              description: |-
                ## Purpose
                Rhinoceros beetles breed in rotting palm trunks, stumps and piles of husk, and palm weevils are drawn to wounded or dying palms. Clearing or treating these breeding sites on a regular round is one of the cheapest ways to cut beetle and weevil damage across the grove.

                ## Milestones
                1. Every dead palm, stump and husk pile marked on the block map.
                2. A method agreed with the extension officer for each: chipping, burning where allowed, burying or covering.
                3. Old breeding sites cleared or treated block by block.
                4. New husk piles kept covered, used or moved off site on a set cycle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No uncovered husk pile or standing dead trunk remains in the grove, checked and recorded every two months."
                cadence: rolling
              tasks:
                - "Mark dead palms, stumps and husk piles on the map"
                - "Ask the extension officer the approved way to deal with each"
                - "Clear or treat the breeding sites in the first block"
                - "Check husk piles and dead trunks across the grove @recurring(monthly:25)"
            - name: Coconut nutrition plan from leaf and soil tests
              description: |-
                ## Purpose
                Coconuts on sandy coastal soils often run short of potassium, magnesium and sometimes chlorine, and yellowing or small nuts are easy to blame on the wrong cause. Basing any fertiliser on a leaf and soil test, read with the extension officer, puts money where the palms need it.

                ## Milestones
                1. Soil samples taken from each main block and sent to a lab.
                2. Leaf samples taken from the right frond position, following the lab's instructions.
                3. Results reviewed with the extension officer or an agronomist.
                4. A written nutrition plan per block, with products and timing taken from the label and the adviser.

                ## Notes
                Ask the lab exactly which frond to sample, as the position matters for coconut. Do not apply anything from a general recommendation without checking it against your results and the label.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A nutrition plan for each main block exists, based on lab results reviewed with an adviser and recorded in the farm file."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the lab for coconut leaf and soil sampling instructions"
                - "Take soil and leaf samples from the main blocks"
                - "Review the results with the extension officer"
                - "Repeat leaf sampling on the main blocks @recurring(yearly)"
            - name: Water nut freshness and storage routine
              description: |-
                ## Purpose
                Water nuts start losing quality from the moment it is cut, and nuts left in the sun for a day taste flat and spoil faster. A simple routine for shade, cooling and first-in first-out selling keeps the nuts buyers receive sweet and full.

                ## Milestones
                1. A shaded, ventilated holding spot set up where nuts are gathered after harvest.
                2. A rule set for how long cut nuts may wait before sale or cooling.
                3. Each batch marked with its harvest date.
                4. Customer complaints about flat or spoilt nuts recorded and traced back to the batch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every batch of water nuts is date-marked and sold within the agreed holding time, with complaints traced to batch."
                cadence: rolling
              tasks:
                - "Set up a shaded holding area for nuts after harvest"
                - "Decide the longest time a cut nut may wait before sale"
                - "Mark each batch with chalk or a tag showing its harvest date"
                - "Log any customer complaint with the batch it came from"
            - name: Falling nut and frond hazard checks
              description: |-
                ## Purpose
                Falling coconuts and heavy dry fronds can seriously injure someone and damage cars and roofs, and the landowner is often expected to show they took reasonable care. Checking palms near roads, paths, houses and parking on a regular round and clearing loose nuts and fronds reduces both the risk and the liability.

                ## Milestones
                1. Every palm overhanging a road, path, roof or parking spot listed from the block map.
                2. Those palms cleared of mature nuts and dead fronds on a shorter cycle than the rest.
                3. Warning signs placed where the public passes under palms.
                4. Each check recorded with date and what was removed.

                ## Notes
                Ask your insurer whether public liability covers injury from falling nuts on your land, and keep the check records as evidence of care.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every listed hazard palm has a recorded check at least every two months, and warning signs are in place where the public passes."
                cadence: rolling
              tasks:
                - "List every palm over a road, path, roof or parking spot"
                - "Put up warning signs where people walk under palms"
                - "Clear nuts and dead fronds from the hazard palms @recurring(monthly:6)"
                - "Ask your insurer whether falling nut injuries are covered"
            - name: Husk burial and mulched palm basins
              description: |-
                ## Purpose
                Buried husk holds water like a sponge, and burying husks in trenches or laying them face down around the basin keeps moisture at the roots through the dry season. Doing this before the dry months use a by-product that otherwise becomes a beetle breeding pile.

                ## Milestones
                1. A trial row chosen for husk burial or husk mulch around palm basins.
                2. Husks buried in trenches or laid concave side up between palms, following local extension guidance.
                3. The work finished before the dry season starts.
                4. Nut set on the trial row compared with a neighbouring row after a year.

                ## Notes
                Lay husks so they do not form loose piles, which attract rhinoceros beetles. Ask the extension officer how husk burial is done in your district.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One trial row has husk burial or husk mulch in place before the dry season, with a comparison row recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick a trial row and a comparison row next to it"
                - "Ask the extension officer how husk burial is done locally"
                - "Bury or lay husks around the trial row palms"
                - "Record nut counts on both rows at each harvest"
            - name: Recognising lethal yellowing early
              description: |-
                ## Purpose
                Lethal yellowing usually shows first as early nut drop and blackened flower spikes before the fronds turn yellow from the bottom up, and by the time the whole crown yellows the palm cannot be saved. Learning the sequence of symptoms well enough to spot the first signs gives you and the ministry time to act on neighbouring palms.

                ## Milestones
                1. Pictures and descriptions of each symptom stage gathered from the ministry or a research body.
                2. The difference between lethal yellowing and drought, nutrient yellowing and old frond loss understood.
                3. One field visit made with an officer or experienced grower to see affected palms if any are nearby.
                4. A one-page symptom card made for anyone who walks the grove.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page lethal yellowing symptom card exists and is used on the monthly pest walk."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the ministry's or a research body's lethal yellowing fact sheet"
                - "Note how it differs from drought and nutrient yellowing"
                - "Ask an officer to show you affected palms in the district"
                - "Make a one-page symptom card for the pest walk"
            - name: Red ring and palm weevil recognition
              description: |-
                ## Purpose
                Red ring is spread by the large palm weevil and kills a palm within months, and a single diseased palm left standing becomes a source for the rest. Knowing the signs, from short twisted new fronds to the red band inside a cut trunk, and how weevils are trapped, lets you remove sources quickly.

                ## Milestones
                1. The main signs of red ring and weevil attack learned from extension material.
                2. The ministry's guidance on removing and destroying diseased palms written down.
                3. The extension officer asked whether weevil traps are used or supplied locally.
                4. Red ring signs added to the pest walk checklist.

                ## Notes
                Avoid wounding trunks with cutlasses or climbing spikes, because fresh wounds attract weevils.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Red ring signs are on the pest walk checklist and the ministry's removal guidance is written in the farm file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the extension fact sheet on red ring and palm weevil"
                - "Write the ministry's guidance on removing diseased palms"
                - "Ask whether weevil traps are used or supplied in your district"
                - "Add red ring signs to the pest walk checklist"
            - name: Judging nut maturity for water and dry nuts
              description: |-
                ## Purpose
                Cut too young and the water is thin and the nut light; cut too late and the water turns less sweet as the jelly hardens. Learning to judge bunches by age, colour, sound and the state of the jelly lets you pick the right stage for each buyer and teach it to the climber.

                ## Milestones
                1. Nuts from three bunch stages opened side by side and compared for water volume, taste and jelly.
                2. The bunch age that suits your water buyers noted for each variety.
                3. The sound and colour signs of a mature dry nut learned.
                4. A short stage guide agreed with the climber.

                ## Notes
                Many growers find water nuts best at around six to eight months from flowering and dry nuts at eleven to twelve months, but check against your own varieties and buyers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written stage guide for water and dry nuts, tested on your own palms, is agreed with the climber."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Cut nuts from three bunch stages on the same palm"
                - "Compare water, taste and jelly and note the best stage"
                - "Practise the tap test on mature and immature dry nuts"
                - "Agree the stage guide with your climber"
            - name: Safe climbing and pole harvesting training
              description: |-
                ## Purpose
                Experienced climbers are getting older and fewer, and many groves depend on one person who learned without safety gear. Training a second person, or yourself, in climbing devices or long-pole harvesting keeps the harvest going and makes it safer.

                ## Milestones
                1. A trainer found: an experienced climber, an extension course or an equipment supplier.
                2. The trainee practised on short palms with a harness or climbing device under supervision.
                3. Pole harvesting tried on dwarf palms as an alternative to climbing.
                4. The trainee signed off by the trainer to harvest alone on agreed palms.

                ## Notes
                Start from the **Training program** template. Climbing devices should be used with a safety harness and only on palms the trainer has checked.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A second person is signed off by an experienced trainer to harvest agreed palms safely."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the extension office about climber training courses"
                - "Choose a trainee and agree the training days"
                - "Practise on short palms with a harness under supervision"
                - "Record the trainer's sign-off and the palms approved"
            - name: How copra drying works and where it goes wrong
              description: |-
                ## Purpose
                Copra that is dried slowly or unevenly goes mouldy, smells, and can be rejected for aflatoxin, while overheated copra gives dark, low grade oil. Understanding the drying curve, target moisture and the signs of good copra means fewer rejected lots and a better price.

                ## Milestones
                1. The buyer's or processor's specification for copra moisture and quality obtained.
                2. Sun, kiln and solar drying methods understood, with their typical drying times.
                3. Signs of good and bad copra learned: colour, smell, snap and mould.
                4. A simple way to check dryness on site agreed with the buyer.

                ## Notes
                Buyers commonly ask for copra dried to around six per cent moisture, but take the figure from your buyer's specification.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The buyer's copra specification is on file and you can explain the signs of good and bad copra to a worker."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your copra buyer for their moisture and quality specification"
                - "Read an extension guide on copra drying methods"
                - "Inspect good and rejected copra with the buyer if possible"
                - "Agree a simple on-site dryness check with the buyer"
            - name: Virgin coconut oil methods and costs
              description: |-
                ## Purpose
                Virgin coconut oil sells for many times the value of copra oil, but the cold press, centrifuge and natural fermentation methods need different equipment, hygiene and skill. Understanding each method, its yield per hundred nuts and its costs comes before any purchase or launch.

                ## Milestones
                1. The main virgin coconut oil methods compared on equipment, labour and yield.
                2. A small trial batch made by the simplest method in a clean kitchen.
                3. The yield per hundred nuts and the cost per bottle calculated.
                4. The food safety and labelling rules for selling oil noted from the local bureau of standards.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A trial batch has been made and costed per bottle, with the selling rules for coconut oil noted."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Compare cold press and fermentation methods for virgin oil"
                - "Make a small trial batch from fifty mature nuts"
                - "Work out the yield and cost per bottle"
                - "Note the bureau of standards rules for selling coconut oil"
            - name: Coconut seed nut selection
              description: |-
                ## Purpose
                Every replanted palm will bear for decades, so the seed nut it grows from matters more than almost any other input. Choosing seed nuts from your best bearing palms, or buying from an approved source, avoids passing on low yield or disease.

                ## Milestones
                1. The ministry's rules on moving or sourcing seed nuts checked.
                2. Candidate mother palms chosen by yield record, nut size and health.
                3. Mature seed nuts harvested and stored in shade until sowing.
                4. Each seed nut marked with its mother palm number.

                ## Notes
                Where lethal yellowing is present, the ministry may require seedlings from an approved nursery. Follow that rule over your own seed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A batch of seed nuts, each marked with its mother palm, has been collected from approved palms or sources."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the ministry's rules on seed nuts and seedlings"
                - "Pick candidate mother palms from your yield records"
                - "Harvest fully mature seed nuts and store them in shade"
                - "Mark each seed nut with its mother palm number"
            - name: Coconut seedling nursery bed
              description: |-
                ## Purpose
                Raising your own seedlings lets you choose the best sprouted nuts and have planting material ready when a block is cleared, rather than waiting on a supplier. A small nursery bed of seed nuts, sorted by how fast and strongly they sprout, gives better palms than planting whatever germinates.

                ## Milestones
                1. A shaded, watered nursery bed or bag area set up near water.
                2. Seed nuts laid in the bed and their sowing date recorded.
                3. Late and weak sprouters culled, keeping the early and vigorous ones.
                4. Seedlings ready for transplanting with their mother palm records.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A nursery batch has produced transplant-ready seedlings, with weak sprouters culled and sowing dates recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a shaded nursery site close to water"
                - "Lay out the seed nuts and record the sowing date"
                - "Water the nursery and check for new sprouts @recurring(weekly:wed)"
                - "Cull nuts that have not sprouted by the cut-off date"
            - name: Replanting plan for senile palms
              description: |-
                ## Purpose
                Palms past sixty or seventy years give few nuts, are hard to climb and are often the first to fall in a storm, but cutting a whole block at once stops income. A phased replanting plan, block by block or by underplanting, renews the grove while keeping nuts coming in.

                ## Milestones
                1. Senile and low-yield blocks identified from the census and harvest records.
                2. A replanting method chosen for each: clear and replant, underplant or gap fill.
                3. A phased order set so no more than a share of bearing palms is lost in any year.
                4. Seedling numbers, sources and costs written into the plan.

                ## Notes
                Ask the ministry about replanting programmes or subsidised seedlings before buying. Old trunks left lying become beetle breeding sites, so plan their removal too.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written replanting plan names the blocks, method, order, seedling numbers and cost for the next five years."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List senile and low-yield blocks from the census"
                - "Choose clear, underplant or gap fill for each block"
                - "Set a phased order that protects current income"
                - "Ask the ministry about replanting support and approved seedlings"
            - name: Choosing varieties for replanting
              description: |-
                ## Purpose
                The variety you replant decides when the block first bears, what it sells best as and how it copes with wind and the diseases in your district. Comparing talls, dwarfs and hybrids against your product mix and the local disease picture before ordering seedlings avoids a decades-long mistake.

                ## Milestones
                1. The varieties available from approved nurseries listed.
                2. Each compared on years to first bearing, nut size, water quality, wind and disease reputation locally.
                3. The extension officer's view on tolerance to the diseases in your district recorded.
                4. A variety chosen for each block in the replanting plan.

                ## Notes
                Disease tolerance claims change as diseases spread, so ask what has actually survived in your district in recent years.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each block in the replanting plan has a chosen variety with its reasons and the extension officer's advice recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List varieties sold by approved nurseries in your country"
                - "Compare them on bearing age, nut use and wind tolerance"
                - "Ask the extension officer which varieties have survived locally"
                - "Write the chosen variety beside each replanting block"
            - name: Intercropping under coconut palms
              description: |-
                ## Purpose
                Mature palms spaced at the usual distances leave much of the land and light unused, and many Caribbean groves once carried cocoa, bananas, root crops or cattle underneath. Choosing an intercrop that suits your spacing, labour and market can add income and keep the ground cleaner without hurting nut yield.

                ## Milestones
                1. Light, spacing and access in each block assessed for an intercrop.
                2. Two or three intercrop options compared on labour, market and root competition with the palms.
                3. A trial area planted with the chosen intercrop.
                4. Nut yield on the trial area compared with a nearby block after a year.

                ## Notes
                Keep the palm circle clear of the intercrop and leave harvest paths open so climbers and nut collection are not hindered.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One intercrop trial area is planted, and its income and the palms' nut yield are recorded against a comparison block."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check light and spacing in each block for an intercrop"
                - "Compare three intercrop options on labour and market"
                - "Plant a trial area with the chosen intercrop"
                - "Record nut yield on the trial and comparison blocks"
            - name: Choosing a copra dryer
              description: |-
                ## Purpose
                Sun drying works in the dry season but leaves copra mouldy in wet weather, while a kiln or solar dryer costs money and fuel. Comparing the options against your volume and buyer's quality specification shows whether a dryer pays for itself in better grades and fewer losses.

                ## Milestones
                1. Current copra volume, losses and grade recorded for a season.
                2. Sun, solar and kiln dryer options priced, including fuel and labour.
                3. A payback estimate worked out for each option.
                4. A decision recorded, with the dryer built or bought if it pays.

                ## Notes
                Start from the **Purchase decision** template. Smoke from badly built kilns can taint copra and lower its price.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A copra dryer decision is recorded with costs and payback for each option, and the chosen option is in place."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record copra volume, losses and grade for one season"
                - "Price a solar dryer and a kiln including fuel and labour"
                - "Work out the payback period for each option"
                - "Record the dryer decision with the numbers behind it"
            - name: Uses for husks and shells
              description: |-
                ## Purpose
                Every dry nut leaves a husk and a shell, and on most farms they become a pile that breeds beetles. Buyers for coir, coco peat for nurseries, shell charcoal and husk mulch exist in many places, and turning waste into a small income stream also removes a pest problem.

                ## Milestones
                1. Husk and shell volumes per month estimated from the ledger.
                2. Possible outlets listed: nurseries, coir makers, charcoal, mulch for neighbours.
                3. Prices or terms collected from at least two outlets.
                4. One outlet started, or husks used on the farm on a regular plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Husks and shells have a regular outlet or on-farm use, with no uncovered pile left in the grove."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate husks and shells produced each month"
                - "Ask two plant nurseries whether they buy coco peat or husk"
                - "Price a small batch of shell charcoal with a local buyer"
                - "Start one regular outlet or on-farm use for husks"
            - name: Contract climber versus own harvest costs
              description: |-
                ## Purpose
                Many growers pay a climber per palm or per nut, while others employ their own harvester or switch dwarfs to pole harvesting. Comparing the real cost per hundred nuts for each, including reliability and safety, shows which arrangement suits the grove as it grows.

                ## Milestones
                1. The current cost per hundred nuts harvested worked out from the ledger.
                2. Quotes or terms from at least two contract climbers collected.
                3. The cost of employing or training your own harvester estimated.
                4. A harvest labour arrangement chosen and written down with its terms.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of harvest cost per hundred nuts for each arrangement exists, with the chosen one recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out current harvest cost per hundred nuts"
                - "Ask two climbers for their per palm or per nut rate"
                - "Estimate the cost of your own trained harvester"
                - "Write down the harvest arrangement and its terms"
            - name: Coconut grove hurricane preparation
              description: |-
                ## Purpose
                Heavy, uncleaned crowns catch wind and snap, loose nuts become missiles and climbers are scarce in the days before a storm. Preparing the grove before the season, with crowns cleaned, hazard palms cleared and equipment stored, cuts losses and makes recovery faster.

                ## Milestones
                1. Crowns of palms near buildings and roads cleaned of mature nuts and dead fronds before the season.
                2. Harvest kit, dryer covers and stored nuts secured.
                3. Photos and a palm count taken of every block for insurance and relief claims.
                4. A short storm checklist ready for the last 48 hours before a hurricane.

                ## Notes
                Start from the **Operational checklist** template. Keep the census and photos in cloud storage so they survive the storm.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each hurricane season, hazard crowns are cleaned, kit is secured and dated photos and a palm count of every block are stored off site."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Book climbers to clean hazard crowns before the season @recurring(yearly)"
                - "Photograph every block and update the palm count"
                - "Store the photos and census in cloud storage"
                - "Write the 48-hour storm checklist for the grove"
            - name: Post-storm grove assessment and salvage
              description: |-
                ## Purpose
                After a hurricane, fallen nuts rot, broken palms become beetle breeding sites and relief programmes want a damage count quickly. A planned assessment in the first week records losses for insurance and relief, salvages what can be sold and sets the clean-up order.

                ## Milestones
                1. Damage counted block by block: fallen, snapped, leaning and crown-damaged palms.
                2. Photos taken and the count reported to the ministry and insurer.
                3. Sound fallen nuts gathered and sold or stored.
                4. A clean-up and replanting order written for the damaged blocks.

                ## Notes
                Do not climb storm-damaged palms until they have been checked. Snapped crowns and cracked trunks can give way without warning.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within two weeks of a storm, a block-by-block damage count with photos has been reported to the ministry and insurer."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Make a damage count sheet ready before the season"
                - "Count and photograph damage in each block after a storm"
                - "Report the count to the ministry and your insurer"
                - "Write the clean-up order for the damaged blocks"
            - name: First supply deal with a coconut water bottler
              description: |-
                ## Purpose
                Bottlers and juice makers need a steady weekly volume of water nuts at a set stage, and a grower who can deliver reliably usually gets a better and steadier price than roadside sales. Landing a first supply deal means proving volume, quality and delivery before the buyer commits.

                ## Milestones
                1. Two or three bottlers or juice makers identified with their volumes and specifications.
                2. A trial delivery made at their stated nut stage and volume.
                3. Price, volume, delivery days and payment terms agreed in writing.
                4. The first month of deliveries completed and paid.

                ## Notes
                Start from the **Vendor** template to keep each buyer's terms, contacts and delivery record in one place.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written supply agreement with a bottler is in place and the first month of deliveries has been paid in full."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List bottlers and juice makers who buy water nuts"
                - "Ask each for their volume, nut stage and price"
                - "Make a trial delivery to the most promising buyer"
                - "Agree price, volume and payment terms in writing"
            - name: Weekly deliveries to coconut vendors
              description: |-
                ## Purpose
                Roadside and market coconut vendors want nuts on set days, and a grower who misses deliveries soon loses them to someone else. A fixed weekly delivery routine with each vendor's order, price and payment recorded keeps the outlet steady.

                ## Milestones
                1. Each regular vendor listed with their usual order, price and delivery day.
                2. A weekly delivery route and load plan set.
                3. Every delivery and payment recorded.
                4. Vendors who pay late or cut orders identified each month.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every regular vendor receives deliveries on their agreed day, with each delivery and payment recorded."
                cadence: rolling
              tasks:
                - "List each vendor with their order, price and delivery day"
                - "Plan the delivery route and load"
                - "Confirm the week's orders with each vendor @recurring(weekly:mon)"
                - "Record deliveries and payments in the ledger"
            - name: First batch of virgin coconut oil for sale
              description: |-
                ## Purpose
                Moving from a trial batch to oil on a shop shelf needs a licensed kitchen or approved premises, labels that meet the rules and a buyer ready to take it. Setting a date for a first saleable batch turns the oil idea into a test of whether customers will pay.

                ## Milestones
                1. Premises, licensing and labelling requirements met for selling oil.
                2. A batch made to the method and hygiene standard set in the trial.
                3. Bottles labelled and a sample sent for any test the buyer or regulator asks for.
                4. The batch sold through at least two outlets, with feedback recorded.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A labelled batch of virgin coconut oil made in approved premises has been sold through at least two outlets."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Check what licence and premises are needed to sell oil"
                - "Book the kitchen and make the first full batch"
                - "Label the bottles to the local labelling rules"
                - "Offer the batch to two shops and record their feedback"
            - name: Replanting day for the first block
              description: |-
                ## Purpose
                Replanting fails when seedlings sit too long in the nursery, holes are dug too late or nobody waters through the first dry season. Treating the first block's planting as a dated event, with holes, seedlings, labour and watering ready, gives the young palms their best start.

                ## Milestones
                1. The block cleared and old trunks removed or chipped.
                2. Planting positions marked at the chosen spacing and holes dug.
                3. Seedlings planted on the day with each position recorded.
                4. A watering and protection plan in place for the first dry season.

                ## Notes
                Plant early in the rainy season where possible, so seedlings establish before the dry months.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first replanting block is planted at the chosen spacing, with positions recorded and a first dry season watering plan in place."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Clear the block and remove old trunks"
                - "Mark planting positions at the chosen spacing"
                - "Dig holes and plant the seedlings on the set day"
                - "Check young palms for water stress and damage @recurring(weekly:fri)"
            - name: Reviving an inherited coastal coconut estate
              description: |-
                ## Purpose
                Old family coconut estates along the coast are often overgrown, full of senile palms and shared between relatives who disagree on what to do. Getting the family to agree a plan, clearing access and starting harvest again turns a neglected asset into something that pays its own way.

                ## Milestones
                1. The family members with an interest in the land identified and their views heard.
                2. Access traces cleared and the grove walked, mapped and counted.
                3. A short plan agreed: what to harvest now, what to replant and who manages it.
                4. Income and costs shared in a way the family has written down.

                ## Notes
                Where the land title is unclear or held by many heirs, get advice from a lawyer before signing leases or selling nuts on a large scale.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written family plan for the estate names who manages it, what is harvested and replanted, and how income is shared."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List family members with a claim or interest in the land"
                - "Clear an access trace and walk the grove"
                - "Hold a family meeting to agree a first plan"
                - "Write down how income and costs will be shared"
            - name: Running a smallholding of a few dozen palms
              description: |-
                ## Purpose
                With twenty to a hundred palms, coconuts are usually a side income alongside a job or other crops, and the risk is either neglect or spending more on climbers than the nuts bring. A light routine and one reliable outlet keep the palms healthy and the money positive.

                ## Milestones
                1. Every palm numbered and its bearing state noted.
                2. One reliable outlet chosen: a vendor, a neighbour's shop or your own roadside stall.
                3. A harvest arrangement with one climber at an agreed rate.
                4. Income and climber costs tracked for a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The smallholding has one regular outlet and one climber arrangement, with a year of income and costs recorded."
                cadence: rolling
              tasks:
                - "Number every palm and note whether it is bearing"
                - "Agree one regular outlet for your nuts"
                - "Agree a per palm rate with one climber"
                - "Total the season's nut income against climber costs @recurring(quarterly)"
            - name: Palms on beachfront and hotel grounds
              description: |-
                ## Purpose
                Hotels, guesthouses and beachfront homes keep coconut palms for the view, but every one is a falling nut risk over guests, cars and pools. Managing palms on these grounds, often by removing nuts before they mature, is a different job from farming them, and some owners also sell the nuts.

                ## Milestones
                1. Every palm on the property mapped and listed with what it overhangs.
                2. A de-nutting or crown cleaning schedule set for palms over guest areas.
                3. A contractor or staff member trained and insured for the work.
                4. A decision recorded on whether harvested nuts are sold, used or given away.

                ## Notes
                Ask your insurer what they expect for falling nut prevention on a property open to guests.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every palm over a guest area is on a recorded de-nutting schedule carried out by an insured contractor or trained staff member."
                cadence: rolling
              tasks:
                - "Map every palm on the grounds and what it overhangs"
                - "Find an insured contractor for de-nutting and crown cleaning"
                - "Set the de-nutting schedule for palms over guest areas"
                - "Inspect guest area palms for nuts and loose fronds @recurring(monthly:15)"
            - name: Managing a coconut grove from abroad
              description: |-
                ## Purpose
                Many coconut estates belong to family members living in the UK, US or Canada, and the grove is run by a relative or caretaker with little reporting. Clear arrangements for harvest, sales, payment and monthly photos let an absent owner know what is happening without being there.

                ## Milestones
                1. A caretaker or manager agreed, with their duties and pay written down.
                2. A monthly report agreed: nuts harvested, sales, costs and photos of each block.
                3. Sales money paid into a farm account the owner can see.
                4. A visit planned at least once a year to walk the grove.

                ## Notes
                A shared photo album and a simple shared spreadsheet usually work better than long phone calls.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The caretaker sends a monthly report with sales, costs and photos, and sales money goes into an account the owner can see."
                cadence: rolling
              tasks:
                - "Write the caretaker's duties and pay in a short agreement"
                - "Set up a shared sheet and photo album for reports"
                - "Review the caretaker's monthly report and photos @recurring(monthly:28)"
                - "Plan a yearly visit to walk the grove"
            - name: Handing the coconut estate to the next generation
              description: |-
                ## Purpose
                Coconut palms outlive their planters, and estates are often lost when the person who knew every block dies without a plan. Writing down what you know and agreeing who takes over, with a lawyer for the land side, keeps the grove productive across the change.

                ## Milestones
                1. The successor or successors named and willing.
                2. A written farm file covering blocks, buyers, climbers, routines and records.
                3. The successor walked through a full harvest round and a pest walk.
                4. Land and inheritance arrangements discussed with a lawyer.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A named successor holds a complete farm file and has run a harvest round, with land arrangements discussed with a lawyer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Talk to the family about who might take over"
                - "Write the farm file of blocks, buyers and routines"
                - "Take the successor through a full harvest round"
                - "Book a meeting with a lawyer about the land"
            - name: Coconut cooperative for bulk dry nut sales
              description: |-
                ## Purpose
                Processors and exporters of dry nuts and copra want lots by the container or truckload, which most single growers cannot fill. Joining or forming a group to pool nuts, share a dryer or dehusker and negotiate together gives small growers access to buyers they could not reach alone.

                ## Milestones
                1. Existing coconut groups or cooperatives in the district identified.
                2. Neighbouring growers asked about pooling dry nuts or copra.
                3. Rules for pooling agreed: grading, weighing, payment and shares.
                4. A first pooled lot sold to a processor or exporter.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A first pooled lot of dry nuts or copra has been sold under written pooling rules agreed by the members."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the extension office about coconut groups in the district"
                - "Talk to three neighbouring growers about pooling nuts"
                - "Draft pooling rules for grading, weighing and payment"
                - "Approach a processor about buying a pooled lot"
            - name: Mother palm selection and yield recording
              description: |-
                ## Purpose
                A few palms in every grove bear far more nuts than the rest, year after year, and they are the best source of seed for replanting. Recording bunch and nut counts on candidate palms over several harvests picks them out on evidence rather than impression.

                ## Milestones
                1. Twenty or more candidate palms chosen for heavy, regular bearing and good health.
                2. Each candidate tagged and its nut count recorded at every harvest.
                3. After a year, the top palms ranked by nuts and nut size.
                4. The best palms marked as mother palms on the block map.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least ten mother palms are marked on the map, chosen from a year of recorded nut counts."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Tag twenty candidate palms with heavy, regular bunches"
                - "Record each candidate's nut count at every harvest"
                - "Rank the candidates by nuts and size after a year"
                - "Mark the top palms as mother palms on the map"
            - name: Rhinoceros beetle biological control with extension
              description: |-
                ## Purpose
                Where rhinoceros beetle is a serious problem, some programmes use a beetle virus, a fungus applied to breeding sites, or pheromone traps alongside sanitation. Working with the extension service on a planned control trial reduces damage without relying on chemicals alone.

                ## Milestones
                1. The extension service asked which biological or trap methods are approved locally.
                2. Breeding sites mapped and a trial area agreed with the officer.
                3. The approved method applied or traps installed as the officer directs.
                4. Frond damage and trap catches recorded and compared with an untreated area.

                ## Notes
                Only use products and methods approved in your country, applied as the label and the officer direct.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A biological control or trap trial agreed with extension has run for a season, with damage records compared against an untreated area."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask extension which beetle control methods are approved locally"
                - "Agree a trial area and an untreated comparison area"
                - "Install traps or apply the method as the officer directs"
                - "Check traps and record beetle catches @recurring(weekly:thu)"
            - name: Lethal yellowing surveillance with the ministry
              description: |-
                ## Purpose
                In districts where lethal yellowing is active, quick removal of infected palms and early sampling slow its spread to the rest of the grove and to neighbours. Agreeing a surveillance routine with the plant protection unit, including who removes palms and how samples are taken, turns isolated sightings into a coordinated response.

                ## Milestones
                1. A contact in the plant protection unit agreed for lethal yellowing reports.
                2. The ministry's procedure for sampling and removing suspect palms written down.
                3. Every suspect palm logged with date, location and outcome.
                4. Removed palms replaced in the replanting plan with approved material.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every suspected lethal yellowing palm is logged, reported and its outcome recorded under the procedure agreed with the ministry."
                cadence: rolling
              tasks:
                - "Agree a named contact in the plant protection unit"
                - "Write down the ministry's sampling and removal procedure"
                - "Log every suspect palm with date, location and outcome"
                - "Add removed palms to the replanting plan"
            - name: Bottled coconut water from your own nuts
              description: |-
                ## Purpose
                Selling coconut water in bottles rather than in the nut adds value and reaches shops and gyms, but raw coconut water spoils within hours without chilling or treatment. Planning the process, shelf life, food safety and licensing before buying equipment avoids a costly product that cannot legally be sold.

                ## Milestones
                1. The food safety, premises and labelling rules for bottled coconut water checked with the regulator.
                2. Processing options compared: chilled raw with short shelf life, or treated for longer shelf life.
                3. A small pilot run made and shelf life tested in the cold chain buyers use.
                4. A costed decision recorded on whether to launch, and at what price.

                ## Notes
                Ask the bureau of standards or food safety authority about shelf life testing before setting a best-before date.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pilot run has been shelf life tested and a costed launch decision recorded, with the regulator's requirements on file."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Ask the food safety authority what bottled coconut water needs"
                - "Compare chilled raw and treated processing options"
                - "Run a small pilot batch and test its shelf life"
                - "Cost the product per bottle and record the launch decision"
            - name: Coconut grove yearly review
              description: |-
                ## Purpose
                Once a year it is worth stepping back from the round to see which blocks earned, which declined and whether the product mix, replanting and buyers still make sense. A short yearly review on your ledger, census and pest records sets the priorities for the next twelve months.

                ## Milestones
                1. The year's nut counts and net income totalled by block and product.
                2. The census updated with palms lost, planted and newly bearing.
                3. Pest and disease records summarised.
                4. Three priorities for the coming year written down.

                ## Notes
                Ask the agent to summarise the year's ledger and pest logs into a one-page review before you sit down with it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A one-page yearly review with block results, an updated census and three written priorities is in the farm file."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to summarise the year's ledger and pest logs"
                - "Update the census with palms lost, planted and bearing"
                - "Hold the yearly grove review and set three priorities @recurring(yearly)"
                - "File the review where the next one can find it"
---

# Coconut Farming

Coconut Farming is for anyone with coconut palms to manage in the Caribbean, from the family with a coastal estate of sixty-year-old talls to the grower supplying jelly nuts to roadside vendors every week. The projects start with knowing what you have: a grove map, a palm census, the varieties and last year's sales. Then come the harvest, sanitation and scouting routines, the skills of judging nuts, climbing safely and spotting disease early, replanting and product decisions, the storm and buyer milestones, situations such as smallholdings, beachfront palms and owners abroad, and specialist work on seed palms, biological control and bottled water.

What repeats is the harvest round and weekly vendor deliveries, monthly nut counts, pest walks and sanitation, crown cleaning a few times a year, and the yearly leaf test, hurricane preparation and registration renewal. The Metrics log, Training program, Purchase decision, Operational checklist and Vendor templates pair with the projects that point to them. Pesticide and fertiliser choices always go through the label and your extension officer, never a dose from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
