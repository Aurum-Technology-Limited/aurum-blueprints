---
id: agriculture.hot-pepper-farming
name: Hot Pepper Farming
description: "A hot pepper enterprise run as a business: variety and buyer chosen first, clean seedlings, steady picking rounds, grading to spec, and sales to sauce makers and exporters."
category: business
version: 1.0.0
tags: [agriculture, hot-pepper-farming, small-business, scotch-bonnet, moruga-scorpion, pepper-sauce, capsicum]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - vendor
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Hot Pepper Farming
          description: "Growing Scotch bonnet, Moruga scorpion and other hot peppers: seedlings, spacing, picking cycles, grading, and sales to sauce makers and exporters."
          projects:
            - name: Matching pepper variety to a named buyer
              description: |-
                ## Purpose
                Scotch bonnet, Moruga scorpion, West Indian red and the Caribbean superhots each suit a different buyer: exporters often want uniform yellow or red Scotch bonnets, sauce makers care about heat and volume, and local markets pay for colour and freshness. Choosing the variety after you know who will buy it is the single decision that most often separates a profitable pepper crop from a field of fruit nobody wants. Settle it before a seed is ordered.

                ## Milestones
                1. Three possible buyers listed, each with the variety, colour and heat level they ask for.
                2. One main buyer and one fallback outlet chosen for the first crop.
                3. A variety and colour selected that both outlets will take.
                4. The choice and the reasons written on the first page of the pepper record book.

                ## Notes
                Growing a superhot because it is famous, with no buyer lined up, is the classic first-season mistake. Prices for superhots are high per pound but the outlets are few.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision naming the variety, the main buyer and a fallback outlet, recorded before any seed is bought."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every sauce maker, exporter and market vendor you could sell peppers to"
                - "Call two of them to ask which variety, colour and heat they buy"
                - "Choose a main buyer and a fallback outlet for the first crop"
                - "Write the variety decision and its reasons in the record book"
            - name: Pepper plot site assessment
              description: |-
                ## Purpose
                Peppers hate wet feet: a plot that holds water after a heavy shower will lose plants to root rot and phytophthora within a season. The ground's history matters too, because land that grew tomato, eggplant or peppers recently carries their soil diseases and nematodes. Walking the site in a rainy spell and asking what grew there before saves a crop you have not yet planted.

                ## Milestones
                1. The plot walked during or just after heavy rain, with wet spots marked.
                2. The last three crops grown on the land recorded, with any tomato, eggplant or pepper noted.
                3. Water source, distance to the road and full sun hours checked.
                4. A go, move or fix decision made, with drainage work listed if needed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page site note covering drainage, previous crops, water and access, ending in a recorded decision on the plot."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk the plot after the next heavy shower and mark where water stands"
                - "Ask the landowner or neighbours what grew there in the last three years"
                - "Check the water source and how far it is from the planned rows"
                - "Write the site decision and any drainage work into the record book"
            - name: Cost of production for a quarter acre of peppers
              description: |-
                ## Purpose
                Knowing what one pound of peppers costs you to grow tells you which buyer's price actually pays and how low you can go in a glut. A quarter acre is a sensible unit to cost: seed, trays and media, land preparation, drip line, mulch, stakes, inputs, picking labour, crates and transport all land on one sheet. With that number you can negotiate with a sauce maker instead of accepting whatever is offered.

                ## Milestones
                1. Every cost for one quarter acre crop listed, from seed to the last picking.
                2. Picking labour estimated from the number of rounds and pickers per round.
                3. An expected yield range set with your extension officer or an experienced grower.
                4. A break-even price per pound worked out at low, middle and high yield.

                ## Notes
                Picking labour is the cost most first-time growers underestimate. A pepper crop can be picked forty or more times.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A costed sheet for a quarter acre showing total cost and a break-even price per pound at three yield levels."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down every input, tool and labour cost for one quarter acre"
                - "Price picking labour from the number of rounds you expect"
                - "Ask an experienced grower or extension officer for a realistic yield range"
                - "Calculate break-even price per pound at three yield levels"
            - name: True-to-type pepper seed sourcing
              description: |-
                ## Purpose
                Hot peppers cross freely, so seed saved from an open market fruit or a neighbour's mixed planting often grows plants with the wrong shape, colour or heat, and buyers reject them at grading. Buying from a seed company, a research station or a grower who isolates their plants is worth the higher price. Sourcing good seed is a foundation that decides the whole crop's grade.

                ## Milestones
                1. Two or three seed sources found for the chosen variety, with prices and germination information.
                2. One source chosen, ideally a research station, seed company or a known grower who isolates plants.
                3. Seed bought, labelled with source, variety and date, and stored cool and dry.
                4. A small germination test done before the main sowing.

                ## Notes
                Start from the **Vendor** template to keep each seed supplier's contact details, lot numbers and results.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Labelled seed from a named reliable source is in storage, with a germination test result recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your extension office which seed sources they trust for your variety"
                - "Compare price, lot date and stated germination from two suppliers"
                - "Buy the seed and label the packet with source and date"
                - "Sow twenty seeds on damp paper towel and count how many sprout"
            - name: Pepper seedling nursery set-up
              description: |-
                ## Purpose
                Strong, disease-free transplants are where yield starts, and pepper seedlings grown in open ground beds pick up damping off, insects and virus before they ever reach the field. A small covered nursery with insect netting, raised benches, clean trays and a sterile growing medium produces even seedlings ready in about five to seven weeks. Set it up once and it serves every block you plant.

                ## Milestones
                1. A nursery spot chosen with morning sun, shelter from wind and a clean water supply.
                2. Raised benches built and the area enclosed with fine insect netting.
                3. Seedling trays and a sterile growing medium bought for the first block.
                4. A wash-down routine written for trays between batches.

                ## Notes
                Start from the **Purchase decision** template when comparing netting, trays and media. Keep the nursery away from old pepper and tomato plants, which can carry whitefly and virus into it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A netted nursery with raised benches and clean trays is ready, with the first tray sown inside it."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick a nursery site sheltered from wind with a clean water tap"
                - "Price insect netting, benches, trays and seedling medium"
                - "Build the benches and enclose the nursery with netting"
                - "Sow the first tray and label it with variety and date"
            - name: First pepper crop calendar against the seasons
              description: |-
                ## Purpose
                Planting date decides how much fruit comes in the wet season, when disease pressure peaks, and how much in the dry season, when water is short but prices are often better. Counting back from the months you want to sell gives a sowing date, a transplanting date and a first picking date roughly three months after transplanting. Putting it on one page avoids the common trap of transplanting into the heaviest rains.

                ## Milestones
                1. The months you most want to be picking chosen, using your buyer's demand and local price patterns.
                2. Sowing, transplanting and first pick dates counted back from those months.
                3. Hurricane season months and the usual heavy rain weeks marked on the calendar.
                4. The calendar checked with your extension officer for your district.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page crop calendar with sowing, transplanting and first pick dates, checked against local rains by an extension officer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your buyer which months they are short of peppers"
                - "Count back from those months to a sowing and transplanting date"
                - "Mark the usual heavy rain weeks and hurricane months on the calendar"
                - "Show the calendar to your extension officer and note their changes"
            - name: Pepper record book for every block
              description: |-
                ## Purpose
                Without records you cannot tell which block paid, which variety yielded or when the mites first appeared last year. A simple record book, paper or phone, with one page per block for sowing date, transplant date, plant count, inputs used, pick weights and sales turns guesses into numbers. Buyers and lenders increasingly ask to see it, and exporters need it for traceability.

                ## Milestones
                1. A record book or spreadsheet set up with one section per block.
                2. Headings for planting, inputs, scouting notes, picks and sales on each block page.
                3. The first block's sowing and transplant details entered.
                4. A habit of entering pick weights on the same day they are picked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every active pepper block has a page with planting, input, pick and sales entries no more than a week out of date."
                cadence: rolling
              tasks:
                - "Set up one page per block with planting, inputs, picks and sales headings"
                - "Enter the first block's sowing date, variety and plant count"
                - "Write input applications with product, date and the label's harvest interval"
                - "Bring the record book fully up to date @recurring(monthly:3)"
            - name: Extension officer visit on pepper growing locally
              description: |-
                ## Purpose
                Extension officers see dozens of pepper plots a year and know which pests, viruses and varieties are giving trouble in your district right now. One visit before the first crop gives you a local pest picture, approved product lists, and often access to soil testing and clean planting material. It also puts your farm on their list for training days and early warnings.

                ## Milestones
                1. A field visit booked with the extension office covering your pepper plot.
                2. The main pepper pests and diseases in your district written down from the visit.
                3. Advice on varieties, spacing and soil testing recorded.
                4. Contact details saved and a follow-up visit agreed for the first picking.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A recorded extension visit with a list of local pepper pests, recommended varieties and a follow-up date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Call the district extension office and book a visit to the pepper plot"
                - "Prepare questions on local pests, viruses, varieties and soil testing"
                - "Write down every recommendation during the visit"
                - "Agree a follow-up visit for the first picking weeks"
            - name: Buyer conversations before the first planting
              description: |-
                ## Purpose
                Selling peppers is easier when a buyer expects them: a sauce maker who has budgeted for your volume, or an exporter who has your farm on their supply list. Meeting two or three buyers before planting tells you their grade, packing, price range, payment terms and how they handle a glut. It also stops you planting more than you can sell.

                ## Milestones
                1. Two or three buyers met in person or by phone, each with notes on grade, volume and price.
                2. Payment terms and pickup or delivery arrangements written down for each.
                3. An expected weekly volume agreed in principle with the main buyer.
                4. A planting area set to match that volume plus a margin for rejects.

                ## Notes
                Ask every buyer what they do when everyone has peppers at once. Their answer tells you more than the price they quote.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Notes from at least two buyer conversations and a planting area set from the main buyer's expected weekly volume."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a meeting or call with your main buyer and one other"
                - "Ask each about grade, packing, price range and payment terms"
                - "Agree a likely weekly volume with the main buyer"
                - "Set the planting area to that volume plus a reject margin"
            - name: Seedling raising and hardening-off routine
              description: |-
                ## Purpose
                Seedlings that are watered unevenly or moved straight from shade into full sun stall for weeks after transplanting. A steady nursery routine, daily watering checks, weekly inspection for damping off and insects, and a week of hardening off in brighter light before planting, gives transplants that keep growing from day one. The routine is short, but missing it costs a whole block.

                ## Milestones
                1. A daily watering check in place that keeps trays moist but not soaked.
                2. Weak, stretched or diseased seedlings removed before they spread problems.
                3. Each batch hardened off for about a week before transplanting.
                4. Transplant-ready seedlings counted against the block's plant count.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each batch of seedlings reaches the field even, hardened and at least the planned plant count, recorded for three batches running."
                cadence: rolling
              tasks:
                - "Check seedling trays for moisture and wilting @recurring(daily)"
                - "Remove any seedlings showing damping off or insect damage"
                - "Move trays into brighter light for a week before transplanting"
                - "Count transplant-ready seedlings against the block's plan"
            - name: Transplanting and spacing plan for pepper blocks
              description: |-
                ## Purpose
                Spacing decides airflow, which decides how much leaf disease you fight, and also how easily pickers move along the rows twice a week. Laying out each block with set row widths, raised beds where drainage is poor, drip line positions and a plant count before planting day avoids crowded rows that cannot be picked. Transplant in the late afternoon or on an overcast day to cut the shock.

                ## Milestones
                1. Row width and in-row spacing set for your variety with your extension officer's advice.
                2. Beds formed and drip line laid along each row before planting day.
                3. Seedlings transplanted in the late afternoon and watered in the same day.
                4. Gaps refilled from spare seedlings within ten days.

                ## Notes
                Leave the row width wide enough for a picker with a bucket. Many growers lose fruit to broken branches because rows were set too close.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A block transplanted at the planned spacing with drip in place and gaps refilled within ten days."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Mark row widths and plant positions with string and pegs"
                - "Form raised beds on any part of the block that holds water"
                - "Transplant in the late afternoon and water every plant in"
                - "Refill gaps with spare seedlings within ten days"
            - name: Weekly pepper scouting walk
              description: |-
                ## Purpose
                Thrips, broad mites, aphids, whitefly, gall midge and pepper weevil can all take a pepper field from healthy to stunted or fruit-dropping in two or three weeks. A fixed weekly walk, checking set plants in a zigzag across each block, catches them while choices are still cheap. Integrated pest management only works if someone is looking, so this is the single most important routine on a pepper farm.

                ## Milestones
                1. A fixed zigzag route through each block, with set plants checked each week.
                2. A scouting sheet listing the main pepper pests, diseases and what to look for.
                3. Findings recorded for every block each week, with photos of anything unclear.
                4. An agreed point, set with your extension officer, at which you act on each pest.

                ## Notes
                Check the undersides of young leaves and the growing tips with a hand lens: broad mite and thrips damage shows there first, as curled or bronzed leaves.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scouting sheet completed for every active block each week for twelve weeks, with actions linked to findings."
                cadence: rolling
              tasks:
                - "Buy a hand lens and print a scouting sheet for each block"
                - "Walk the zigzag scouting route and fill in the sheet @recurring(weekly:mon)"
                - "Photograph any damage you cannot identify and send it to the extension officer"
                - "Agree action points for thrips, mites and weevil with your extension officer"
            - name: Twice-weekly picking rounds
              description: |-
                ## Purpose
                Fruit left too long on the plant over-ripens, splits or drops, and the plant slows new fruit set, while fruit picked too early fails the buyer's colour standard. Regular rounds on fixed days, usually twice a week in full production, keep fruit at the right stage and the plants setting. Fixed days also let your buyer plan collections around you.

                ## Milestones
                1. Two picking days a week fixed and shared with pickers and the buyer.
                2. Pickers shown exactly which colour stage to pick for each buyer.
                3. Fruit picked with the stem on and placed in shaded, clean crates.
                4. Each round's weight recorded per block on the same day.

                ## Notes
                Pick in the cool of the morning and get crates into shade straight away. Peppers left in the sun in a crate soften fast.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Picks happen on the two fixed days every week of the production season, with weights logged per block."
                cadence: rolling
              tasks:
                - "Fix two picking days and tell your pickers and buyer"
                - "Show each picker a sample of the right colour stage for each buyer"
                - "Pick every block in production and crate the fruit in shade @recurring(weekly:tue,fri)"
                - "Weigh each block's pick before the crates leave the field"
            - name: Grading and packing to buyer specification
              description: |-
                ## Purpose
                Buyers pay for the grade they asked for, not for what you picked: exporters reject blemished, misshapen or wrong-colour fruit, and sauce makers may refuse rotten or mixed-variety lots. Grading at the farm, with a written spec and a sample board for each buyer, keeps rejects at home where they can still be sold elsewhere. It also builds a record buyers trust.

                ## Milestones
                1. A written grade specification for each buyer covering colour, size, blemishes and stems.
                2. A shaded grading table set up with clean crates for each grade.
                3. Rejects sorted into a second outlet instead of being thrown away.
                4. The share of each pick that made first grade recorded.

                ## Notes
                Start from the **Operational checklist** template for the grading and packing steps, so every packer follows the same sequence.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written grade spec per buyer is in use, and the first-grade share of each pick is recorded for eight weeks."
                cadence: rolling
              tasks:
                - "Ask each buyer for their grade spec in writing or by photo"
                - "Make a sample board showing accepted and rejected fruit"
                - "Set up a shaded grading table with labelled crates"
                - "Find a second outlet for fruit that misses first grade"
            - name: Drip watering and mulch routine for peppers
              description: |-
                ## Purpose
                Hot peppers drop flowers and young fruit when watering swings between dry and wet, and blossom-end problems follow uneven moisture. Drip line under mulch gives even soil moisture, keeps soil off the fruit and cuts weeding. A weekly check of emitters and a simple schedule set to the season keep it working through the dry months.

                ## Milestones
                1. Drip line laid along every pepper row with a filter at the head.
                2. Mulch, plastic or organic, covering the beds around the plants.
                3. A watering schedule for wet and dry season written by the tap.
                4. Emitters and filters checked weekly, with blocked ones cleared.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pepper row has working drip under mulch, with a written seasonal schedule and weekly emitter checks logged."
                cadence: rolling
              tasks:
                - "Write a wet season and a dry season watering schedule by the tap"
                - "Walk the rows checking emitters and clean the filter @recurring(weekly:wed)"
                - "Replace or clear any blocked emitters found"
                - "Top up organic mulch where it has thinned or washed away"
            - name: Pepper feeding plan from soil test results
              description: |-
                ## Purpose
                Yellowing lower leaves, slow growth and small fruit often get blamed on pests when the real cause is feeding, and blanket fertiliser buying wastes money on what the soil already has. A feeding plan built on a soil test, and agreed with your extension officer or a qualified agronomist, says what to apply and when through the crop. Follow the product label for every rate.

                ## Milestones
                1. A soil sample from the pepper block sent to a lab before planting.
                2. Results discussed with your extension officer or agronomist.
                3. A written feeding plan for the crop stages: planting, flowering and picking.
                4. Every application recorded with product, date and the block.

                ## Notes
                Rates come from the soil test, your adviser and the product label, never from a neighbour's habit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written feeding plan based on a current soil test, with every application logged against it."
                cadence: rolling
              tasks:
                - "Take a soil sample from the pepper block and send it to the lab"
                - "Book a time with your extension officer to read the results"
                - "Write the feeding plan by crop stage in the record book"
                - "Compare plant colour and fruit set against the feeding plan @recurring(monthly:12)"
            - name: Weekly pepper yield and price log
              description: |-
                ## Purpose
                A weekly log of pounds picked, pounds sold, grade share and price received per block shows within a month which block, variety and buyer is earning. Over a season it gives you the yield curve for your farm, which is the number every buyer, lender and supply contract will ask about. It takes fifteen minutes a week if picks are weighed in the field.

                ## Milestones
                1. A log with columns for block, pounds picked, first-grade pounds, buyer and price.
                2. Every week's picks and sales entered by the weekend.
                3. A monthly summary of yield per block and average price.
                4. One season's yield curve drawn from the log.

                ## Notes
                Start from the **Metrics log** template and keep one row per block per week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The yield and price log has an entry for every block every week of the season, with monthly summaries."
                cadence: rolling
              tasks:
                - "Set up the log with block, pounds, grade, buyer and price columns"
                - "Enter the week's picks and sales from the field sheets @recurring(weekly:sat)"
                - "Summarise yield per block and average price for the month @recurring(monthly:28)"
                - "Mark the week each block peaked on the yield curve"
            - name: Staggered planting blocks for year-round supply
              description: |-
                ## Purpose
                Sauce makers and exporters want peppers every week, not a flood for two months and nothing after. A single planting peaks and then declines as plants age and pests build, so sowing a new block every month or so keeps one block always in peak production. Staggering also spreads labour and cash flow.

                ## Milestones
                1. The total area split into blocks sized to the buyer's weekly volume.
                2. A sowing date set for each block, about a month apart.
                3. Each new block sown in the nursery on schedule for six months running.
                4. Old blocks removed once yield drops below an agreed level.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three blocks at different stages are in the field, with a sowing made on schedule each month for six months."
                cadence: cyclic
              tasks:
                - "Divide the pepper area into blocks sized to weekly demand"
                - "Write a sowing date for each block on the crop calendar"
                - "Sow the next block's seed trays in the nursery @recurring(monthly:5)"
                - "Set a yield level below which an old block is cleared"
            - name: Staking and weed control in pepper rows
              description: |-
                ## Purpose
                Laden pepper plants, especially Scotch bonnet in full fruit, split and fall over in wind and heavy rain, and fallen plants lose fruit to rot and broken branches. Staking with string between posts along each row keeps plants upright and fruit off the ground, while regular weeding cuts competition and removes hiding places for pests. Both are cheap compared with the fruit they save.

                ## Milestones
                1. Stakes and string bought for every row before plants start to fruit.
                2. Each row staked and strung by the time first fruit sets.
                3. Weeds cleared between rows and around plants on a regular cycle.
                4. Strings raised as plants grow, so branches stay supported.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fruiting row is staked and strung, and weeding is logged on a weekly cycle through the season."
                cadence: rolling
              tasks:
                - "Count the stakes and string needed for every row"
                - "Stake and string each row before the first fruit sets"
                - "Weed between rows and around the plants @recurring(weekly:thu)"
                - "Raise the support strings as the plants grow taller"
            - name: Field hygiene and virus plant removal
              description: |-
                ## Purpose
                One pepper plant with mosaic or leaf curl virus left in a row is a source for aphids and whitefly to spread the virus to the rest of the block. Removing infected plants early, keeping crates and tools clean and clearing fallen fruit that carries weevil larvae are small jobs that protect the whole field. They work best on a fixed weekly day.

                ## Milestones
                1. Pickers and workers shown what virus-infected pepper plants look like.
                2. Infected plants bagged and removed from the field each week.
                3. Fallen and rotten fruit collected and destroyed, not left in the rows.
                4. Crates and knives washed after every picking day.

                ## Notes
                Bag a suspected virus plant before pulling it, so insects on it are not shaken onto neighbouring plants.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly hygiene round is logged, recording infected plants removed and fallen fruit cleared, for twelve weeks."
                cadence: rolling
              tasks:
                - "Show your workers photos of mosaic and leaf curl on pepper"
                - "Bag and remove virus-infected plants and fallen fruit @recurring(weekly:thu)"
                - "Wash crates and picking knives after each picking day"
                - "Record how many plants were removed from each block"
            - name: Identifying hot pepper pests and their damage
              description: |-
                ## Purpose
                Most pepper growers can name the pests but mix up the damage: broad mite and thrips both curl leaves, gall midge and weevil both cause fruit drop, and virus symptoms can look like a feeding problem. Learning to tell them apart, with a hand lens and a photo guide, is what lets you choose the right response. Learn this before the first crop flowers.

                ## Milestones
                1. A photo guide made for thrips, broad mite, aphids, whitefly, gall midge and pepper weevil damage on pepper.
                2. Each pest found and confirmed under a hand lens in your own field or a neighbour's.
                3. The difference between mite, thrips and virus leaf symptoms described in your own words.
                4. The guide checked by your extension officer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A photo guide of six pepper pests and their damage, confirmed in the field and checked by an extension officer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect clear photos of damage from the six main pepper pests"
                - "Find each pest under a hand lens on real plants"
                - "Cut open dropped fruit and look for weevil or midge larvae"
                - "Ask your extension officer to check your guide"
            - name: Recognising pepper diseases in the field
              description: |-
                ## Purpose
                Bacterial leaf spot, anthracnose on ripe fruit, phytophthora blight and bacterial wilt each need a different response, and some, like wilt, mean the block should not grow peppers again for a while. Knowing the signs, and getting a lab or extension diagnosis when unsure, prevents spraying the wrong product or losing a whole block. Wet season is when most of these strike.

                ## Milestones
                1. Signs of the five most common pepper diseases in your district written down with photos.
                2. A simple field test learned for bacterial wilt, such as the cut stem in water test.
                3. A route to a plant diagnostic service found for samples you cannot identify.
                4. Disease findings added as a column on the scouting sheet.

                ## Notes
                Never send a sample in a sealed bag in the heat. Ask the diagnostic service how they want samples wrapped and delivered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written guide to five pepper diseases with photos, a known diagnostic route and a disease column on the scouting sheet."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the pepper diseases your extension officer sees most in your district"
                - "Learn the cut stem in water test for bacterial wilt"
                - "Find out how to send plant samples to a diagnostic lab"
                - "Add a disease column to your scouting sheet"
            - name: Scotch bonnet maturity and colour stages
              description: |-
                ## Purpose
                Colour stage at picking decides shelf life, heat and which buyer will take the fruit: green and breaker fruit travel further, full colour fruit suits local markets and sauce makers wanting full flavour. Learning to read the stages reliably, and teaching pickers the same, is how one block can supply two buyers on the same day. It also cuts arguments at the buyer's gate.

                ## Milestones
                1. A photo chart of your variety from mature green through breaker to full colour.
                2. Each buyer's preferred stage marked on the chart.
                3. Shelf life at room temperature observed for fruit picked at each stage.
                4. The chart laminated and kept at the grading table.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A laminated colour stage chart showing each buyer's preferred stage is in use at the grading table."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Photograph fruit from your variety at each colour stage"
                - "Mark which stage each of your buyers wants"
                - "Keep a few fruit from each stage and note how long they last"
                - "Laminate the chart and pin it at the grading table"
            - name: Saving pepper seed without crossing
              description: |-
                ## Purpose
                Saving your own seed from your best plants can lock in a line that suits your soil and buyers, but only if the flowers are kept from crossing with other peppers. Bagging flowers on selected plants, or isolating a seed block, and then fermenting, drying and storing seed properly gives seed you can trust. It also cuts seed costs on a large planting.

                ## Milestones
                1. Seed parent plants chosen for yield, shape, colour and health, and tagged.
                2. Flowers on those plants bagged before opening to prevent crossing.
                3. Fruit from bagged flowers harvested fully ripe and the seed extracted and dried.
                4. Seed stored labelled in airtight containers, with a germination test done.

                ## Notes
                Wear gloves and avoid touching your face when extracting seed from hot peppers, and work outdoors or with good airflow.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A labelled lot of seed from bagged flowers on tagged parent plants, stored airtight with a germination result recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Tag five to ten of your best plants as seed parents"
                - "Bag unopened flowers on the tagged plants with fine mesh"
                - "Extract and dry seed from fully ripe fruit of bagged flowers"
                - "Store the seed airtight and run a germination test @recurring(yearly)"
            - name: Heat levels and capsaicin testing
              description: |-
                ## Purpose
                Heat is part of what sauce makers and superhot buyers pay for, and a few now ask for a lab figure for capsaicin content or Scoville heat units. Learning how heat varies with variety, stress and ripeness, and where a sample can be tested by a lab, puts you in a stronger position with premium buyers. It also lets you check that your saved seed has kept its heat.

                ## Milestones
                1. How heat varies with variety, plant stress, ripeness and position on the plant understood.
                2. A laboratory found that measures capsaicin content in pepper samples.
                3. Sampling and delivery instructions obtained from the lab.
                4. One sample tested and the result kept with the block record.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab capsaicin result for at least one block, with sampling method recorded alongside it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read how stress and ripeness change pepper heat"
                - "Find a university or food lab that tests capsaicin content"
                - "Ask the lab for sampling and delivery instructions"
                - "Send one sample and file the result with the block record"
            - name: Early flower removal and lower leaf pruning trial
              description: |-
                ## Purpose
                Removing the first flowers after transplanting and clearing the lowest leaves and suckers is said to build a stronger frame and better airflow, but it costs labour and early fruit. A small trial on paired rows in your own field shows whether it pays for your variety and season. Base the decision on your numbers, not on what a neighbour swears by.

                ## Milestones
                1. Two matching sets of rows chosen, one pruned and one left as a control.
                2. First flowers and lowest leaves removed on the pruned rows only.
                3. Picks from both sets weighed separately for the first two months.
                4. A decision written on whether to prune future blocks.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two months of separate pick weights from pruned and control rows, with a recorded decision on pruning."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose two matching sets of rows in the same block"
                - "Remove first flowers and low leaves on one set only"
                - "Weigh picks from each set separately for two months"
                - "Record whether pruning paid for its labour"
            - name: Safe handling of hot peppers by pickers
              description: |-
                ## Purpose
                Capsaicin burns skin, eyes and lungs, and with Moruga scorpion and other superhots a day of picking without gloves can leave hands burning through the night. Pickers, graders and anyone deseeding fruit need gloves, eye protection near crushing or cutting, and a clear rule about touching faces. A short briefing and the right kit on site is a basic duty to the people who work for you.

                ## Milestones
                1. Nitrile gloves and safety glasses bought in sizes for every worker.
                2. A short safety briefing given to every picker and grader.
                3. Soap, clean water and a first aid note for capsaicin exposure kept at the packing area.
                4. Each worker's briefing recorded with date and signature.

                ## Notes
                Water spreads capsaicin rather than removing it. Ask a pharmacist or health worker what first aid to keep on site for eye and skin exposure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every worker has been briefed and signed, and gloves and eye protection are stocked at the packing area."
                cadence: rolling
              tasks:
                - "Buy nitrile gloves and safety glasses for every picker and grader"
                - "Write a one-page capsaicin safety briefing for workers"
                - "Brief every worker and record their signature and date"
                - "Restock gloves and check the first aid kit at the packing area @recurring(monthly:18)"
            - name: Shade house or open field for peppers
              description: |-
                ## Purpose
                Shade houses with insect netting can keep out whitefly, thrips and weevil and protect plants from heavy rain, giving cleaner fruit for export buyers, but they cost far more per square metre and must survive storms. Comparing a costed shade house option with your open field numbers shows whether the extra grade and yield pays it back. Many growers find the answer is a covered nursery and open field crop.

                ## Milestones
                1. Open field yield, grade share and costs taken from your own records.
                2. Quotes for a pepper shade house of a set size, including wind rating and netting.
                3. Payback worked out from the expected rise in first-grade yield.
                4. A decision recorded: build, wait or stay in open field.

                ## Notes
                Start from the **Purchase decision** template. Ask every supplier for the structure's wind rating and what happens to the netting in a storm.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written payback comparison of shade house and open field peppers using your own yields, ending in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull a season's yield and grade share from your records"
                - "Get two shade house quotes with wind ratings for the same size"
                - "Ask the agent to set out payback for both options from your numbers"
                - "Write the decision and the yield rise it depends on"
            - name: Two-selection Scotch bonnet field trial
              description: |-
                ## Purpose
                Two Scotch bonnet selections from different sources can differ widely in yield, fruit shape, heat and disease tolerance on the same farm. Planting them side by side in matched rows for a full season, and recording the same measures for each, tells you which to commit your next planting to. It is the cheapest way to find a better line.

                ## Milestones
                1. Two selections sourced and labelled, with origin recorded.
                2. Matched rows planted the same day with the same care.
                3. Yield, first-grade share and disease notes recorded per selection.
                4. A preferred selection chosen and the result shared with your buyer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One season of side-by-side records for two selections and a written choice of the better one."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Source seed of two Scotch bonnet selections and label both"
                - "Plant matched rows of each on the same day"
                - "Record yield and grade share separately for each selection"
                - "Choose the better selection and tell your buyer why"
            - name: Plastic versus organic mulch trial
              description: |-
                ## Purpose
                Mulch on peppers cuts weeding, steadies moisture and keeps fruit clean, but plastic and organic mulches differ in cost, heat, disposal and how they cope with heavy rain. Running both in the same block for one crop, with labour and yield recorded, gives a decision based on your own soil and season. Reflective plastic is sometimes said to deter some insects, which you can watch for too.

                ## Milestones
                1. One block split, half under plastic mulch and half under organic mulch.
                2. Weeding hours and water use noted for each half.
                3. Yield and first-grade share recorded for each half through the crop.
                4. A mulch decision written for the next season, including disposal of used plastic.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A full crop of side-by-side mulch records with a written decision on which mulch to use next season."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Split one block between plastic and organic mulch"
                - "Note weeding hours spent on each half"
                - "Record yield and grade for each half on the picking sheet"
                - "Decide on next season's mulch and how to dispose of plastic"
            - name: Selling surplus as pepper mash to sauce makers
              description: |-
                ## Purpose
                Surplus peppers in a glut, or fruit that misses fresh grade, can still earn if a sauce maker will take them as mash or bulk fruit. Some processors buy fresh fruit to make their own salted mash, others buy mash from growers who meet their hygiene and salt standards. Knowing your options before the glut arrives turns waste into income.

                ## Milestones
                1. Sauce makers who buy surplus or second-grade peppers listed with their terms.
                2. Each buyer's requirements for fresh bulk fruit or mash written down.
                3. A decision made on whether to sell bulk fresh fruit or meet a mash standard.
                4. A first surplus lot sold and the price recorded.

                ## Notes
                Making mash for sale is food processing and may need a licensed space and food safety checks. Ask the buyer and your public health office before you start.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least one surplus outlet agreed with written terms, and a first surplus sale recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask three sauce makers whether they buy surplus or second-grade peppers"
                - "Write down each buyer's terms for bulk fruit or mash"
                - "Decide between bulk fresh sales and meeting a mash standard"
                - "Sell the first surplus lot and record the price"
            - name: Cutting the reject rate at grading
              description: |-
                ## Purpose
                Every pound graded out has already cost seed, inputs and picking labour, so cutting rejects from a fifth of the pick to a tenth can be worth more than a price rise. The reasons are usually few: weevil and midge damage, sunscald, rots from crates left in the sun, wrong colour stage. Recording why fruit is rejected, then fixing the top two causes, is the fastest margin gain on a pepper farm.

                ## Milestones
                1. Rejects sorted by cause at grading for four weeks.
                2. The top two causes of rejection identified from the tally.
                3. A fix in place for each, in the field, picking or packing.
                4. The reject share compared before and after the fix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A four-week tally of reject causes and a measured drop in reject share after fixing the top two."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sort rejected fruit by cause for four weeks of picks"
                - "Rank the causes and pick the top two"
                - "Change the field, picking or packing step behind each one"
                - "Compare reject share for four weeks after the change"
            - name: Monthly pepper price review
              description: |-
                ## Purpose
                Price per pound for hot peppers swings with season, weather and how many growers planted, and a price fixed at the start of a supply relationship can drift far from the market. Checking market prices, your cost of production and each buyer's price once a month tells you when to renegotiate, when to shift volume to another outlet and when to hold. It turns pricing into a routine instead of a row.

                ## Milestones
                1. A monthly record of wholesale market prices for your variety.
                2. Each buyer's price set beside your break-even price.
                3. Any buyer below break-even flagged for a conversation.
                4. Price changes agreed and written into each buyer's record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly price reviews recorded, comparing market, buyer and break-even prices, with renegotiations noted."
                cadence: rolling
              tasks:
                - "Find where wholesale pepper prices are published or ask market vendors"
                - "Compare market, buyer and break-even prices @recurring(monthly:20)"
                - "Flag any buyer paying below break-even"
                - "Write agreed price changes into the buyer record"
            - name: Crop rotation break after peppers
              description: |-
                ## Purpose
                Tomatoes, eggplant, potatoes and peppers share many soil diseases and nematodes, so planting peppers back on the same land season after season builds problems that no spray will fix. Planning which non-solanaceous crops or cover crops follow a pepper block, and for how long, keeps the land productive. Ask your extension officer how long the break should be in your district.

                ## Milestones
                1. Every block's crop history for the last three seasons recorded.
                2. A rotation crop or cover crop chosen for each block after peppers.
                3. A break length agreed with your extension officer.
                4. A three-season rotation map drawn for the farm.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-season rotation map showing which crop follows peppers on every block, with the break length recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write each block's crops for the last three seasons"
                - "Choose a non-solanaceous crop or cover crop to follow peppers"
                - "Ask your extension officer how long the break should be"
                - "Draw a three-season rotation map for the farm"
            - name: Picking labour plan for the peak flush
              description: |-
                ## Purpose
                When several blocks peak at once, a pepper farm can need twice its usual pickers for a few weeks, and fruit left unpicked during the flush is lost. Planning pickers ahead, with a list of reliable people, agreed rates per pound or per day, and transport if needed, keeps the rounds on schedule. Peak flush is also when buyers judge whether you are dependable.

                ## Milestones
                1. Expected peak weeks marked from the crop calendar and block plan.
                2. Pickers needed per round worked out from the expected pick weight.
                3. A list of reliable extra pickers with agreed rates and dates.
                4. A back-up plan written for a round where pickers do not turn up.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written peak flush labour plan with named pickers, agreed rates and a back-up, ready four weeks before peak."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark the expected peak weeks on the crop calendar"
                - "Work out pickers needed per round from expected pick weight"
                - "Agree rates and dates with a list of extra pickers"
                - "Write a back-up plan for rounds where pickers do not come"
            - name: Signed supply agreement with a sauce maker
              description: |-
                ## Purpose
                Signing a written agreement with a sauce maker gives both sides certainty: you plant to a volume, they plan production around your fruit. It should cover variety, grade, weekly volume, price or price formula, collection, payment days, what happens to surplus and how either side can end it. A clear document now prevents the arguments that end most informal supply deals.

                ## Milestones
                1. The agreement's key terms drafted: variety, grade, volume, price, collection and payment.
                2. Surplus, shortfall and bad weather clauses discussed and written in.
                3. The draft reviewed by someone you trust in business or a lawyer if the volume is large.
                4. The agreement signed by both sides and a copy filed.

                ## Notes
                Start from the **Vendor** template to keep the buyer's contacts, agreement terms and payment history together.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed supply agreement covering volume, grade, price, payment and surplus terms is filed by the target date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the key terms you want in the supply agreement"
                - "Meet the sauce maker to agree surplus and shortfall terms"
                - "Have the draft read by a trusted adviser or a lawyer"
                - "Check in with the sauce maker on volume and payments @recurring(monthly:8)"
            - name: Pepper field storm readiness check
              description: |-
                ## Purpose
                Wind and heavy rain in the hurricane season can split pepper plants, flatten rows and flood beds in a single night. A short storm check focused on the pepper field, firm stakes and strings, clear drains between beds, a decision to strip mature fruit early and secure crates and nursery netting, cuts the damage. Do it before the season starts and again when a storm is forecast.

                ## Milestones
                1. Stakes and strings checked and reinforced on every row before the season.
                2. Drains between beds cleared so heavy rain runs off.
                3. A rule agreed to pick all mature fruit when a storm warning is issued.
                4. Nursery netting and loose crates secured or stored.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed storm check sheet for the pepper field, dated before the start of hurricane season."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Run the pepper field storm check before the season starts @recurring(yearly)"
                - "Reinforce weak stakes and tighten row strings"
                - "Clear the drains between pepper beds"
                - "Write the early picking rule for storm warnings"
            - name: First export consignment of fresh peppers
              description: |-
                ## Purpose
                Exporters shipping hot peppers to the UK, US and Canada need fruit graded tightly, cooled quickly and packed to their standard, with the farm's records ready for phytosanitary inspection. Preparing the first consignment as a dated event, with the exporter's spec in hand and a dry run of grading and packing, avoids a rejected first shipment. The exporter usually handles the certificates; your job is fruit and records they can rely on.

                ## Milestones
                1. The exporter's grade, packing and delivery spec obtained in writing.
                2. Spray and input records for the supplying block checked against harvest intervals.
                3. A dry run of grading and packing done a week before the consignment.
                4. The first consignment delivered on time and the exporter's feedback recorded.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first export consignment delivered to spec on the agreed date, with the exporter's acceptance and feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get the exporter's grade, packing and delivery spec in writing"
                - "Check spray records for the supplying block against harvest intervals"
                - "Do a full grading and packing dry run a week before"
                - "Deliver the consignment and write down the exporter's feedback"
            - name: End-of-block clearance and season review
              description: |-
                ## Purpose
                Old pepper plants left standing after yield drops keep feeding weevil, mites and virus vectors that move straight into your young blocks. Clearing and destroying old plants promptly, then reviewing the block's records, closes the cycle and gives you the numbers for the next planting decision. The review is short if the yield log has been kept.

                ## Milestones
                1. Old plants pulled, removed and destroyed once the block passes its yield cut-off.
                2. Drip line and stakes cleaned and stored for reuse.
                3. Block yield, grade share, costs and income summarised on one page.
                4. Three changes for the next block written down.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A cleared block and a one-page review with yield, margin and three changes for the next planting."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull and destroy old plants from the finished block"
                - "Clean and store drip line and stakes for the next block"
                - "Summarise the block's yield, costs and income on one page"
                - "Write three changes for the next planting"
            - name: Entering a hot pepper show or competition
              description: |-
                ## Purpose
                Competitions at agricultural shows and pepper festivals put your fruit in front of judges, sauce makers and exporters who may become buyers. Preparing an entry, choosing uniform fruit at the right stage and knowing the class rules, also sharpens your eye for grading. A ribbon is a small but real selling point with premium buyers.

                ## Milestones
                1. A show or pepper festival with a hot pepper class chosen and its rules read.
                2. Entry form submitted before the closing date.
                3. Uniform fruit selected and presented to the class rules on the day.
                4. Contacts made with buyers at the event written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An entry presented in a hot pepper class at a show or festival, with buyer contacts from the day recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a show or pepper festival with a hot pepper class"
                - "Read the class rules and send the entry form"
                - "Pick and match the most uniform fruit the day before"
                - "Note every buyer you speak to at the event"
            - name: Pepper plot alongside a day job
              description: |-
                ## Purpose
                Evenings and weekends can run a small pepper plot, but only if the farm is set up to forgive a missed day: drip on a timer, mulch, a planting size you can pick in two short sessions, and a buyer who collects. Growers with day jobs fail most often by planting too much and missing picks. Size the plot to your hours, not your ambition.

                ## Milestones
                1. Weekly hours available to the farm counted honestly.
                2. Plot size set so each picking round fits in your available time.
                3. Drip on a timer and mulch in place to cut daily tasks.
                4. A buyer arranged who collects, or a drop-off on your way to work.

                ## Notes
                A family member or neighbour who can pick once a week when you cannot is worth arranging before the first flush.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A plot sized to your weekly hours, with timed drip, mulch and a collection arrangement, running for one full season."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count the hours you can give the farm each week"
                - "Set the plot size so one picking round fits in a morning"
                - "Fit a timer to the drip line"
                - "Plan the coming week's farm sessions around work @recurring(weekly:sun)"
            - name: Young farmer's first quarter acre of peppers
              description: |-
                ## Purpose
                Starting a pepper business with little capital, often on family or leased land, means every dollar has to show a return in the first season. A quarter acre of Scotch bonnet with a buyer lined up, a youth farmer programme or grant for start-up inputs, and an experienced grower as a mentor is a realistic start. It builds the records that later open the door to loans and bigger contracts.

                ## Milestones
                1. Land access agreed in writing, even if it is family land.
                2. Youth farmer or start-up programmes for inputs and training checked.
                3. An experienced pepper grower asked to mentor through the first season.
                4. A first quarter acre planted with a buyer agreed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A quarter acre of peppers planted on agreed land, with a mentor named and a buyer confirmed for the first crop."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get written permission to use the land for at least two seasons"
                - "Ask your extension office about youth farmer programmes"
                - "Ask an experienced pepper grower to mentor you for a season"
                - "Plant the first quarter acre once a buyer is confirmed"
            - name: Grower group pooling peppers for one buyer
              description: |-
                ## Purpose
                Small growers on their own often cannot meet a sauce maker's or exporter's weekly volume, but five or six growers pooling peppers can. Running a group means a shared grade spec, one collection point and day, a fair way to split payment by weight and grade, and someone keeping the records. Done well, it opens contracts none of the members could win alone.

                ## Milestones
                1. Five or more growers agree in writing to pool peppers to one spec.
                2. A collection point, day and time fixed for all members.
                3. Each member's delivered weight and grade recorded at collection.
                4. Payment split by weight and grade and shared with members every cycle.

                ## Notes
                Agree in writing what happens when a member's fruit fails grade, before the first delivery. That is where most groups fall out.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written group agreement and twelve weeks of collection records showing each member's weight, grade and payment."
                cadence: rolling
              tasks:
                - "Invite nearby pepper growers to a meeting on pooling for one buyer"
                - "Write a group agreement covering grade, collection and payment"
                - "Weigh and grade each member's delivery at the collection point @recurring(weekly:fri)"
                - "Share each member's weight, grade and payment after every cycle"
            - name: Handing the pepper enterprise to the next generation
              description: |-
                ## Purpose
                Handing over a family pepper enterprise works best over two or three seasons, with the successor running blocks, buyers and records while the older grower still advises. What transfers is not only land but buyer relationships, seed lines, picker networks and the know-how in one person's head. Writing it down and introducing the successor to every buyer protects the business through the change.

                ## Milestones
                1. A successor named and a handover timeline agreed in the family.
                2. Buyer contacts, seed sources and picker lists written down in one place.
                3. The successor running at least one block on their own for a full season.
                4. Every buyer introduced to the successor in person.

                ## Notes
                Land ownership, family land and inheritance questions need a lawyer. This project covers the running of the enterprise.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written handover file, a full season run by the successor and every buyer introduced, within the agreed timeline."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree a successor and a handover timeline with the family"
                - "Write down buyers, seed sources, pickers and key routines"
                - "Give the successor one block to run alone for a season"
                - "Introduce the successor to every buyer in person"
            - name: Turning a mixed vegetable farm toward peppers
              description: |-
                ## Purpose
                Mixed vegetable growers who find their peppers outselling everything else often want to make peppers the main crop, but scaling up changes the risk: more picking labour, more dependence on a few buyers and bigger pest pressure. Converting in steps, one or two blocks a season, against a confirmed buyer volume, keeps the farm safe while it changes. Keep a second crop for cash flow.

                ## Milestones
                1. Your margin on peppers compared with your other crops from your records.
                2. A buyer volume confirmed for the larger pepper area.
                3. Pepper area increased by one or two blocks per season, not all at once.
                4. One other crop kept for cash flow and rotation.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A margin comparison, a confirmed buyer volume and a staged conversion plan, with the first extra block planted within a year."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Compare pepper margins with your other crops from last season"
                - "Confirm the extra volume with your main buyer before expanding"
                - "Plan a block-by-block increase over three seasons"
                - "Choose which other crop stays for cash flow and rotation"
            - name: Superhot peppers for niche buyers
              description: |-
                ## Purpose
                Superhots such as the Trinidad Moruga scorpion, 7 pot and other Caribbean superhots fetch high prices from specialist sauce makers, chilli shops and seed buyers, but volumes are small and heat makes picking harder. Growing them well means strict isolation to keep lines pure, extra safety kit for workers and a buyer who wants your exact line. Treat them as a premium side enterprise, not a gamble.

                ## Milestones
                1. One or two specialist buyers found who name the superhot line they want.
                2. Pure seed sourced and a block isolated from other peppers.
                3. Workers briefed and equipped for superhot picking.
                4. A first lot sold and its margin compared with Scotch bonnet.

                ## Notes
                Some buyers pay as much for clean, true seed as for fruit. Ask before you sell all your fruit fresh.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An isolated superhot block supplying a named specialist buyer, with its margin per pound compared with Scotch bonnet."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find specialist buyers who want a named superhot line"
                - "Source pure seed and site the block away from other peppers"
                - "Upgrade gloves and eye protection for superhot picking"
                - "Compare the superhot margin per pound with your Scotch bonnet"
            - name: Year-round supply programme for a sauce maker
              description: |-
                ## Purpose
                Steady weekly supply all year is what large sauce makers want most and what few growers manage, because wet season disease and dry season water both dent yield. Running a year-round programme means a block plan that carries extra area into the hard months, back-up growers for shortfalls and a monthly review of forecast against delivery with the buyer. It is the step from selling peppers to being a supplier.

                ## Milestones
                1. A twelve-month forecast of weekly volume agreed with the sauce maker.
                2. A block plan that adds area ahead of the wet and dry season dips.
                3. One or two back-up growers agreed for shortfall weeks.
                4. Forecast against delivery reviewed with the buyer each month.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Twelve months of weekly deliveries recorded against an agreed forecast, with monthly reviews held with the buyer."
                cadence: cyclic
              tasks:
                - "Agree a twelve-month weekly volume forecast with the sauce maker"
                - "Add extra block area ahead of the wet and dry season dips"
                - "Line up back-up growers for shortfall weeks"
                - "Review forecast against delivery with the buyer @recurring(monthly:15)"
            - name: Selecting your own pepper line over several seasons
              description: |-
                ## Purpose
                Over several seasons of selecting seed from your best plants, with bagged flowers and careful records, a grower can build a line that suits their soil, climate and buyers better than any bought seed. It takes discipline: the same selection criteria every year, records of each generation's yield and fruit traits, and a check that heat and shape stay true. Some growers end up selling the seed itself.

                ## Milestones
                1. Written selection criteria for yield, shape, colour, heat and disease tolerance.
                2. Each generation's parent plants, seed lot and field results recorded.
                3. Three generations grown and compared against bought seed.
                4. A decision on whether the line is ready for full use or sale as seed.
              priority: low
              deadlineOffsetDays: 730
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three recorded generations of a selected line, compared with bought seed, and a written decision on its use."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write your selection criteria for parent plants"
                - "Record each generation's parents, seed lot and field results"
                - "Grow your line beside bought seed for comparison"
                - "Decide whether to use the line widely or sell it as seed"
            - name: Area-wide pepper weevil management with neighbours
              description: |-
                ## Purpose
                Weevils and gall midge move between farms, so one grower's clean field is soon reinfested from a neighbour's abandoned pepper block. Working with nearby growers and the extension office on shared monitoring, prompt clearing of old plants and coordinated timing can cut pressure across the whole area. It needs only a monthly meeting or group chat and a shared map.

                ## Milestones
                1. Nearby pepper growers and the extension officer brought into one group.
                2. A shared map of pepper blocks and their ages.
                3. An agreement on clearing old and abandoned blocks promptly.
                4. Monthly sharing of scouting findings across the group.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A group of at least four neighbouring growers sharing monthly scouting reports and a block map for six months."
                cadence: rolling
              tasks:
                - "Ask neighbouring pepper growers to join a shared pest group"
                - "Map every pepper block in the area with its planting date"
                - "Agree a rule on clearing old and abandoned blocks"
                - "Share scouting findings with the group @recurring(monthly:22)"
            - name: Residue and audit readiness for export peppers
              description: |-
                ## Purpose
                Residue testing on exported peppers can stop shipments, and buyers in the UK, US and Canada increasingly audit the farms behind their exporters. Being ready means every application recorded with the product, block and date, every harvest interval on the label respected, approved product lists followed and a sample tested before you are asked. A clean residue record is a selling point in itself.

                ## Milestones
                1. Every application for the export blocks recorded with product, rate as on the label, date and block.
                2. Only products on your country's approved list for peppers used, as confirmed with your extension officer.
                3. A residue test run on a sample from an export block.
                4. A records review held each quarter, ready for a buyer audit.

                ## Notes
                Ask your exporter which residue limits apply in their destination market, as they differ from one market to another.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Complete application records for export blocks, a passed residue test and four quarterly record reviews held."
                cadence: rolling
              tasks:
                - "Check every product used on export blocks against the approved list"
                - "Ask the exporter which destination residue limits apply"
                - "Send a fruit sample from an export block for residue testing"
                - "Review application records and harvest intervals for audit @recurring(quarterly)"
---

# Hot Pepper Farming

Hot peppers are one of the few Caribbean crops with buyers lining up, from sauce makers who need steady mash volumes to exporters filling diaspora shelves, but the money is lost in off-type seed, thrips and mites, missed picks and fruit graded out at the packhouse. This area starts with the foundations (variety, buyer, site, seed and a costed plan), then the nursery, field and picking routines, the skills of reading pests, disease and maturity, the decisions and trials that lift yield and price, the dated events of a pepper season, variants for part-time, young, family and group growers, and finally superhots, seed selection and year-round supply contracts.

The rhythm is the picking round: scouting every Monday, picks twice a week, a weekly yield and price log, monthly sowings to keep blocks staggered, and monthly check-ins with your main buyer. The Purchase decision, Metrics log, Operational checklist and Vendor templates pair with the shade house choice, the yield log, the packing routine and your sauce maker or exporter record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
