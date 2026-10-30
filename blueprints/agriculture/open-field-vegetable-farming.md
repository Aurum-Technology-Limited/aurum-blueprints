---
id: agriculture.open-field-vegetable-farming
name: Open-Field Vegetable Farming
description: "A plot map, a wet and dry season crop calendar, bed standards, a seedling nursery, succession planting for steady harvests and a record for every plot, from the first quarter acre to year-round supply."
category: business
version: 1.0.0
tags: [agriculture, open-field-vegetable-farming, small-business, founder, vegetables, succession-planting, crop-calendar, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - operational-checklist
    - habit-tracker
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Open-Field Vegetable Farming
          description: "Growing vegetables in the open field: crop choice for the season, bed preparation, planting schedules, staggered harvests and records for each plot."
          projects:
            - name: Numbered plot map of the vegetable land
              description: |-
                ## Purpose
                Every later record, from planting dates to harvest weights, needs a fixed name for each piece of ground, and "the bottom piece near the drain" stops working once there are six plantings on the go. A simple map with numbered blocks and beds, the water point, the low wet spots and the access track gives you and any worker the same language for the land.

                ## Milestones
                1. The vegetable land walked and its boundary measured by paces or a phone mapping app.
                2. Blocks numbered and each bed within a block given a code such as B2 bed 7.
                3. Water points, low spots that pond after rain, shade from trees and the access track marked.
                4. A clean copy of the map printed, laminated and pinned in the shed, with a photo kept on your phone.

                ## Notes
                Keep block numbers permanent even when you change what grows in them. Renumbering after a season breaks every record you have already kept.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map showing every block and bed with a permanent code, the water points and the wet spots, is posted in the shed and saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk the boundary of the vegetable land and sketch its shape on paper"
                - "Measure each block by pacing or with a phone mapping app"
                - "Give every block a number and every bed a code"
                - "Mark water points, wet spots, shade and the access track on the map"
                - "Laminate the map, pin it in the shed and photograph it"
            - name: Wet and dry season crop calendar for your district
              description: |-
                ## Purpose
                Most Caribbean vegetable losses come from planting the right crop in the wrong month: tomatoes and cabbage struggle in the heavy rains, while cucumbers and bodi need steady water in the dry season. A calendar built from your district's rainfall pattern, hurricane season and your own planting history tells you what goes in the ground each month and what to hold back.

                ## Milestones
                1. Monthly average rainfall for your district gathered from the meteorological service or extension office.
                2. A rain gauge installed at the plot and readings recorded.
                3. The usual start and end of the rainy season and the hurricane peak marked on a twelve-month calendar.
                4. Each crop you grow placed in its best, possible and avoid months.
                5. The calendar checked with an extension officer or an experienced neighbour.

                ## Notes
                Your own gauge will differ from the national station, sometimes by a lot. After one year, trust your readings over the district average.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A twelve-month calendar marks the wet season, dry season and hurricane peak and places every crop you grow in best, possible or avoid months."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the extension office or met service for monthly rainfall figures for your district"
                - "Install a rain gauge on a post in the open near the vegetable block"
                - "Read and record the rain gauge each morning @recurring(daily)"
                - "Mark the usual wet season, dry season and hurricane peak on a calendar"
                - "Sort each crop into best, possible and avoid months"
            - name: Choosing your first five vegetable crops
              description: |-
                ## Purpose
                New growers often plant a dozen crops at once and learn nothing well. Picking five vegetables that suit the coming season, sell in your nearest markets and range from quick crops like patchoi to longer ones like tomato or melongene keeps the workload manageable and gives you cash early.

                ## Milestones
                1. A long list of ten candidate vegetables, each checked against your season calendar.
                2. Prices and demand for each noted from two market visits and conversations with vendors.
                3. Days to first harvest written beside each crop.
                4. Five crops chosen, with at least two that harvest within eight weeks of planting.
                5. The reason for each choice recorded in a sentence.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Five crops are chosen and written down with days to harvest, season fit and market price, including at least two quick crops."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List ten vegetables you could grow in the coming season"
                - "Visit the nearest wholesale or municipal market and note prices for each"
                - "Ask two vendors which vegetables they struggle to buy enough of"
                - "Write days to first harvest beside every crop on the list"
                - "Choose five crops and record why each made the cut"
            - name: Heat-tolerant variety and seed supplier shortlist
              description: |-
                ## Purpose
                Temperate varieties from imported seed packets often fail to set fruit in Caribbean heat or collapse with disease in the rains. A shortlist of tested, heat-tolerant and disease-resistant varieties for each of your crops, with two reliable seed suppliers, saves a whole season of disappointing yields.

                ## Milestones
                1. Varieties recommended for your conditions gathered from the extension office, a research station and experienced growers.
                2. Two or three varieties per crop shortlisted, with disease resistance noted from the seed catalogue.
                3. Two seed suppliers compared on price, freshness dates and stock reliability.
                4. A first seed order placed with packing dates checked on arrival.

                ## Notes
                Start from the **Purchase decision** template. Check the packing or test date on every packet; old seed is the most common cause of a poor stand.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each of your crops has two or three named varieties shortlisted and a first seed order has arrived from a chosen supplier with packing dates recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension officer which varieties do well locally for each crop"
                - "Note the disease resistance codes listed for each variety in the seed catalogue"
                - "Compare two seed suppliers on price, freshness and stock"
                - "Place the first seed order and check packing dates when it arrives"
            - name: Land clearing and first tillage of new vegetable blocks
              description: |-
                ## Purpose
                Ground coming out of bush or old pasture needs clearing, ploughing and harrowing before a single bed can be formed, and tractor operators are hard to book once the rains begin. Planning the job, the hire and the timing a month ahead means the land is ready when your seedlings are.

                ## Milestones
                1. The area to be cleared marked out with stakes and agreed with the landowner if you rent.
                2. Two quotes obtained from tractor operators for ploughing and harrowing.
                3. Stumps, stones and old fencing wire removed from the blocks.
                4. The ground ploughed and harrowed to a fine tilth at least two weeks before planting.

                ## Notes
                Do not plough wet clay: it forms clods that stay for the whole season. Squeeze a handful; if it holds a ribbon, wait.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The new blocks are cleared, ploughed and harrowed at least two weeks before the planned planting date, with the tractor cost recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Stake out the area to be cleared and confirm it with the landowner"
                - "Get quotes from two tractor operators for ploughing and harrowing"
                - "Clear stumps, stones and old wire from the marked blocks"
                - "Book the tractor for a date when the soil is moist but not sticky"
            - name: Bed and row layout standard
              description: |-
                ## Purpose
                Beds of the same width, length and path spacing make everything easier: drip lines cut once, mulch rolls fit, seed needs are predictable and harvest weights per bed can be compared fairly. Fixing one standard bed size for the whole farm, with row spacing per crop group, turns guesswork into arithmetic.

                ## Milestones
                1. One standard bed width, path width and bed length chosen to suit your tools and drip tape.
                2. In-row and between-row spacing written for each crop group: fruiting crops, leafy crops, vines and brassicas.
                3. Plants per standard bed worked out for each crop.
                4. The standard written on one page and stuck inside the record book.

                ## Notes
                A common starting point is a bed about one metre wide with a path about half a metre, but match it to your wheel hoe and the drip tape you can buy.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page bed standard gives bed width, path width, length and plants per bed for every crop you grow."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure your wheel hoe, mulch roll and drip tape widths"
                - "Choose one bed width, path width and bed length for the farm"
                - "Write in-row and between-row spacing for each crop group"
                - "Calculate plants per standard bed for every crop on your list"
            - name: Seedling nursery for transplant crops
              description: |-
                ## Purpose
                Tomatoes, sweet peppers, melongene and cabbage do far better raised as strong seedlings under shade than sown straight into the field. A small nursery with benches off the ground, seedling trays, a clean potting mix and shade cloth gives you uniform transplants and three to five weeks of extra field time per crop.

                ## Milestones
                1. A nursery site chosen near water, out of flood reach and sheltered from strong wind.
                2. Benches built at waist height with shade cloth overhead and insect netting on the sides.
                3. Seedling trays and a sterile or commercial potting mix in stock.
                4. A first batch of trays sown and labelled with crop, variety and sowing date.

                ## Notes
                Keep the nursery away from field crops of the same family. Whitefly and virus carried in on seedlings will travel to every bed you plant.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A shaded, netted nursery with raised benches has its first labelled batch of seedling trays sown."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick a nursery spot near water and above flood level"
                - "Build waist-high benches and fix shade cloth overhead"
                - "Buy seedling trays and a clean potting mix"
                - "Sow the first trays and label each with crop, variety and date"
            - name: Plot record book for every bed
              description: |-
                ## Purpose
                Without records, every season starts from memory, and memory forgets which variety failed and which bed flooded. A record book with one line per planting, giving bed code, crop, variety, sowing and transplant dates, inputs, harvest weights and sale value, becomes the most valuable tool on the farm within two seasons.

                ## Milestones
                1. A record format chosen: a hardback field book, a spreadsheet or a farm app.
                2. Columns set for bed code, crop, variety, dates, inputs, harvest weight and sales.
                3. Every current planting entered from scratch.
                4. A weekly habit of filling the book in on harvest days running for a month.

                ## Notes
                Start from the **Metrics log** template. A muddy hardback book filled in the field beats a perfect spreadsheet filled in never.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every current planting has a record line with bed code, variety and dates, and the book has been updated weekly for four weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose between a hardback field book, a spreadsheet or a farm app"
                - "Set up columns for bed, crop, variety, dates, inputs, weights and sales"
                - "Enter every planting currently in the ground"
                - "Photograph the record book pages and save them to cloud storage @recurring(monthly:27)"
            - name: Trial planting cycle on a quarter acre
              description: |-
                ## Purpose
                For a founder moving into vegetables, one full cycle on a quarter acre shows what a season really costs in seed, labour, water and lost crop before borrowing to plant five acres. The numbers from that trial, set against what you sold, are what a lender, partner or your own judgement needs.

                ## Milestones
                1. A quarter acre planted with three to five crops, each in its own beds.
                2. Every cost logged against the trial: seed, inputs, hired labour, tractor time and transport.
                3. Harvest weights and sale values recorded for each crop.
                4. A one-page summary of cost, income and lessons per crop written at the end of the cycle.
                5. A decision recorded to scale up, change crops or stop.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page summary shows cost, income and yield per crop for the quarter-acre trial, with a written decision on whether to scale."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Mark out a quarter acre and assign beds to three to five crops"
                - "Open a cost sheet and log every expense against the trial"
                - "Record harvest weights and sale prices for each crop"
                - "Write a one-page summary at the end of the cycle"
                - "Decide whether to scale, change the crop mix or stop"
            - name: Weekly field walk and crop notes
              description: |-
                ## Purpose
                Problems in vegetables move fast: a few yellow leaves on Monday can be a dead bed by Friday. A fixed weekly walk through every block, looking at stand, colour, moisture, weeds, pests and fruit set, and writing three lines per block, catches trouble while it is still cheap to fix.

                ## Milestones
                1. A walking route set that passes every block in under an hour.
                2. A short checklist written for each walk: stand, colour, moisture, weeds, pests, fruit set.
                3. Notes for each block written in the record book after every walk.
                4. Anything unusual photographed and, if unknown, sent to the extension officer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly field walk has been recorded for every block for eight weeks running, with photos of any problem found."
                cadence: rolling
              tasks:
                - "Plan a walking route that passes every block in under an hour"
                - "Walk every block and write three lines of notes per block @recurring(weekly:mon)"
                - "Photograph any plant that looks wrong and note its bed code"
                - "Send unknown problems to the extension officer with photos"
            - name: Succession sowing board for steady harvests
              description: |-
                ## Purpose
                Buyers want lettuce, patchoi and cucumbers every week, not a glut in one fortnight and nothing for a month. A succession board that lists, crop by crop, how often to sow and how many beds each time keeps a steady flow from the field and smooths out your income.

                ## Milestones
                1. Weekly demand for each crop estimated in kilograms, bunches or heads.
                2. Yield per bed and days to harvest written for each crop.
                3. A sowing interval and number of beds per sowing set for each crop.
                4. A whiteboard or calendar in the shed showing the next four sowings per crop.
                5. Two months of sowings made on schedule.

                ## Notes
                Quick leafy crops usually need sowing every one to two weeks; fruiting crops such as tomato and sweet pepper every three to six weeks. Adjust from your own harvest records.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A succession board lists the next four sowings for each crop and eight weeks of sowings have been made on the planned dates."
                cadence: rolling
              tasks:
                - "Estimate how much of each crop you can sell in an average week"
                - "Work out beds per sowing from yield per bed and weekly demand"
                - "Set up a sowing board in the shed with the next four sowings per crop"
                - "Check the board and sow whatever is due this week @recurring(weekly:thu)"
            - name: Daily nursery watering and seedling check
              description: |-
                ## Purpose
                Seedling trays in Caribbean heat can dry out in a single afternoon, and damping off or a whitefly outbreak spreads through a bench in days. A short daily round of watering, checking and noting what is ready to transplant keeps the nursery supplying the field on time.

                ## Milestones
                1. A daily nursery round fixed for early morning, with a second watering on hot afternoons.
                2. A tray label system showing sowing date and expected transplant date.
                3. Losses from damping off or drying out tracked for a month.
                4. Trays ready for hardening off moved out to a separate bench on schedule.

                ## Notes
                Start from the **Habit tracker** template. Water in the morning so leaves dry before evening; wet foliage overnight invites disease.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The nursery is watered and checked daily for a month, with tray losses recorded and every batch transplanted within a week of its target date."
                cadence: rolling
              tasks:
                - "Water and check every seedling tray in the early morning @recurring(daily)"
                - "Label each tray with its sowing date and target transplant date"
                - "Count and record trays lost to damping off or drying out"
                - "Move trays due for hardening off to the outer bench"
            - name: Harvest days with weights by bed
              description: |-
                ## Purpose
                Picking on fixed days lets buyers plan around you and gives workers a rhythm, and weighing each bed's harvest is the only way to know which beds, varieties and planting dates actually paid. Two set harvest days a week, with weights written against bed codes, turn the record book into a yield record.

                ## Milestones
                1. Two harvest days a week agreed with your main buyers.
                2. A scale, clean crates and a harvest sheet with bed codes kept in the shed.
                3. Every harvest weighed and recorded against its bed.
                4. A weekly total by crop and by bed added up each Saturday.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Harvest weights have been recorded by bed on both harvest days for eight consecutive weeks, with weekly totals by crop."
                cadence: rolling
              tasks:
                - "Agree two fixed harvest days with your main buyers"
                - "Harvest, weigh and record each bed's crop @recurring(weekly:tue,fri)"
                - "Total the week's harvest weights by crop and by bed @recurring(weekly:sat)"
                - "Keep a scale, clean crates and blank harvest sheets in the shed"
            - name: Monthly plot performance review
              description: |-
                ## Purpose
                One month of harvest weights and costs tells you more than a season of impressions. A short monthly sit-down comparing yield per bed with what you expected, and price received with the market, shows which crops to sow more of and which beds need attention before the next planting.

                ## Milestones
                1. Yield per bed for the month calculated for each crop.
                2. Each crop compared with its expected yield from your bed standard.
                3. The three best and three worst beds listed with a likely reason.
                4. One change for next month written down and placed on the succession board.

                ## Notes
                Start from the **Metrics log** template if you want one running sheet. The same review, done for several seasons, becomes your benchmark for what a good bed of each crop yields on your land.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each monthly review records yield per bed by crop, the best and worst beds and one change, for at least four months running."
                cadence: rolling
              tasks:
                - "Calculate yield per bed for each crop from the month's harvest sheets"
                - "Hold a one-hour plot review and list the best and worst beds @recurring(monthly:3)"
                - "Write one change for next month on the succession board"
                - "Ask the agent to summarise the month's notes into a short review"
            - name: Crop rotation plan across the blocks
              description: |-
                ## Purpose
                Planting tomatoes after melongene or sweet peppers in the same bed builds up soil-borne diseases such as bacterial wilt and root-knot nematodes. A rotation that moves each crop family to a different block every cycle, recorded on the plot map, is the cheapest disease control there is.

                ## Milestones
                1. Every crop grouped by family: nightshades, brassicas, cucurbits, legumes, leafy greens and others.
                2. A rotation order set so no family returns to the same block within three cycles where land allows.
                3. The rotation drawn onto copies of the plot map for the next three seasons.
                4. Blocks with a known wilt or nematode history marked for longer breaks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-season rotation map shows which crop family goes in each block, with diseased blocks given longer breaks."
                cadence: cyclic
              tasks:
                - "Group every crop you grow by plant family"
                - "Draw three seasons of rotation onto copies of the plot map"
                - "Mark blocks with a history of wilt or nematodes for a longer break"
                - "Review and roll the rotation map forward a year @recurring(yearly)"
            - name: Weeding round between rows
              description: |-
                ## Purpose
                Weeds in the first four to six weeks after planting cost more yield than almost any pest, and in the wet season they can swamp a bed in ten days. A weekly weeding round, by block and in the order beds were planted, keeps every crop clean through its critical early weeks.

                ## Milestones
                1. The weed-critical period for each crop noted from the extension office or your own records.
                2. A weekly weeding order set, starting with the youngest beds.
                3. Wheel hoes and hand tools sharpened and kept in the shed.
                4. Every bed kept free of weeds through its first six weeks for one full cycle.

                ## Notes
                Hoe when weeds are tiny and the soil surface is dry; a weed with two leaves dies on a sunny day, one with ten leaves re-roots.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each new bed is weeded weekly through its first six weeks for a full cycle, with the weeding order recorded."
                cadence: rolling
              tasks:
                - "List the weed-critical weeks for each crop"
                - "Sharpen the wheel hoe and hand hoes"
                - "Hoe the youngest beds first, then work back to the oldest @recurring(weekly:wed)"
                - "Note any bed where weeds escaped and why"
            - name: Dry season watering routine for vegetable beds
              description: |-
                ## Purpose
                From around January to May in much of the region, vegetable beds can lose more water in a day than a light shower replaces, and fruit crops drop flowers within days of stress. A twice-weekly check of soil moisture by feel, drip lines and emitters on every bed keeps plants growing through the driest weeks.

                ## Milestones
                1. Each crop's water-sensitive stages noted: transplant, flowering and fruit fill.
                2. A soil moisture check by squeeze test learned and used on every block.
                3. Drip lines walked for leaks, blockages and dry spots twice a week.
                4. Watering times adjusted so the youngest and flowering beds get priority when water is short.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Drip lines and soil moisture on every bed are checked twice a week through the dry season, with any dry bed fixed within a day."
                cadence: rolling
              tasks:
                - "List each crop's water-sensitive growth stages"
                - "Learn the squeeze test for soil moisture at root depth"
                - "Walk every drip line and check soil moisture in each block @recurring(weekly:wed,sat)"
                - "Rank beds by watering priority for when water runs short"
            - name: Seed stock count and storage
              description: |-
                ## Purpose
                Running out of a variety mid-season breaks the succession plan, and seed kept in a hot shed loses vigour within months. A monthly count of every seed packet, stored cool and dry in a sealed container, with reorder points set, keeps sowings on schedule.

                ## Milestones
                1. All seed moved into a sealed container with desiccant, stored in the coolest place available.
                2. A seed register listing crop, variety, quantity, supplier and packing date.
                3. A reorder point set for each variety based on sowings per month.
                4. Seed older than its useful life tested or discarded.

                ## Notes
                A household fridge at the back of the bottom shelf is fine for most vegetable seed if it is sealed against moisture.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A seed register lists every variety with quantity and packing date, and no planned sowing has been missed for lack of seed in three months."
                cadence: rolling
              tasks:
                - "Move all seed into a sealed container with a desiccant sachet"
                - "Write a seed register with variety, quantity and packing date"
                - "Set a reorder point for each variety"
                - "Count seed stock and reorder anything below its point @recurring(monthly:20)"
            - name: Season-end debrief for each crop
              description: |-
                ## Purpose
                The end of the wet or dry season is when the lessons are freshest and most easily lost. A short debrief per crop, covering yield, price, disease, timing and labour, written before the next season's plan, stops the same mistakes repeating every year.

                ## Milestones
                1. Total yield, income and main problems summarised for each crop.
                2. Planting dates that worked and those that failed noted.
                3. Varieties to keep and to drop listed.
                4. Three changes for next season agreed and added to the crop calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A one-page debrief per crop is written at the end of each season and three agreed changes appear on the next season's calendar."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Total each crop's yield and income for the season from the record book"
                - "List the planting dates that worked and those that did not"
                - "Mark varieties to keep and to drop"
                - "Add three changes to next season's crop calendar"
            - name: Pre-planting bed preparation checklist
              description: |-
                ## Purpose
                Skipped steps before planting show up weeks later as a patchy stand, a dry corner or a bed that floods. A written checklist for every bed, from compost and soil test follow-up to bed forming, drip laying and mulching, means each bed goes in right whoever does the work.

                ## Milestones
                1. Every preparation step written in order with the tool or material it needs.
                2. The checklist used on every bed for one full planting cycle.
                3. Problems found at planting traced back to a step and the checklist updated.
                4. A worker able to prepare a bed from the checklist alone.

                ## Notes
                Start from the **Operational checklist** template. Follow your soil test and the extension officer's advice for any fertiliser or lime; the checklist only records that it was applied.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A bed preparation checklist has been used and ticked for every bed planted in one full cycle."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Write every bed preparation step in order with its tools and materials"
                - "Use the checklist on the next bed you prepare"
                - "Update the checklist after each planting with anything missed"
                - "Walk a worker through preparing one bed from the checklist alone"
            - name: Transplanting and hardening off seedlings
              description: |-
                ## Purpose
                Seedlings moved straight from shade to full Caribbean sun often wilt, stall for a week or die. Learning to harden off over several days, transplant in the cool of the late afternoon at the right depth and water in properly gives an even, fast-growing stand.

                ## Milestones
                1. A hardening off routine practised: less shade and less water over five to seven days.
                2. Transplanting done in late afternoon or on cloudy days, at the right depth for each crop.
                3. Survival rate counted one week after transplanting.
                4. Survival above nine in ten plants on three consecutive plantings.

                ## Notes
                Tomatoes can go in deeper than they sat in the tray; most other crops should sit at the same depth.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three consecutive transplantings each show at least ninety percent survival a week after planting, counted and recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up an outer bench in half shade for hardening off"
                - "Reduce shade and watering on the next batch over a week"
                - "Transplant in the late afternoon and water each plant in"
                - "Count surviving plants one week after transplanting"
            - name: Tomato staking, pruning and trellising
              description: |-
                ## Purpose
                Tomatoes left to sprawl on wet ground rot, crack and pick up disease, and the fruit is hard to find and grade. Learning to stake or string-trellis, prune suckers and keep the plant off the soil lifts marketable yield and makes picking faster.

                ## Milestones
                1. A support system chosen: individual stakes, the stake and weave method or overhead string.
                2. Posts, twine and clips bought for one block.
                3. Suckers removed weekly on a test bed as the extension guide recommends for your variety type.
                4. Marketable yield on the trellised bed compared with an untrellised one.

                ## Notes
                Determinate and indeterminate varieties are pruned differently; check which type you planted before removing suckers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One tomato block has been trellised and pruned through harvest, with marketable yield compared against an untrellised bed."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Check whether your tomato variety is determinate or indeterminate"
                - "Buy posts, twine and clips for one block"
                - "Set up the stake and weave system on a test bed"
                - "Weigh marketable fruit from trellised and untrellised beds"
            - name: Trellis systems for cucumber, bodi and christophene
              description: |-
                ## Purpose
                Vining crops grown on the ground give curved, marked fruit and lose leaves to disease in the rains. A well-built trellis of posts and netting or wire gives straighter cucumbers, cleaner bodi and easier picking, and it can be reused across several plantings.

                ## Milestones
                1. Trellis heights and designs compared for cucumber, bodi and christophene.
                2. One trellis built along a full bed with posts set firm enough for wind.
                3. Vines trained onto the trellis in their first two weeks.
                4. Straight fruit share on the trellised bed recorded at harvest.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A trellised bed of a vining crop is harvested and the share of straight, grade-one fruit is recorded against a ground-grown comparison."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compare trellis designs and heights for each vining crop"
                - "Set posts and stretch netting along one full bed"
                - "Train young vines onto the trellis twice a week until they climb"
                - "Count straight, grade-one fruit at harvest"
            - name: Reading crop symptoms in the field
              description: |-
                ## Purpose
                Yellowing leaves can mean too much water, too little nitrogen, root damage or a virus, and treating the wrong cause wastes money and the crop. Learning to tell common nutrient, water and disease patterns apart, and when to send a sample to the extension service or plant diagnostic lab, makes every field walk more useful.

                ## Milestones
                1. A photo guide of common vegetable symptoms gathered from the extension service.
                2. The difference between old-leaf and new-leaf yellowing, wilting patterns and leaf spots understood.
                3. Three real problems on your farm identified and confirmed by the extension officer.
                4. The steps for sending a plant sample to a diagnostic lab written down.

                ## Notes
                Get a diagnosis confirmed before buying any product. Your extension officer can usually tell nutrient problems from disease on a single visit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three problems on your own beds have been identified and confirmed by an extension officer, and the lab sampling steps are written down."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect a photo guide of vegetable symptoms from the extension service"
                - "Photograph three problems on your beds with their bed codes"
                - "Ask the extension officer to confirm what each one is"
                - "Write down how to package and send a sample to the diagnostic lab"
            - name: Plant population and seed quantity sums
              description: |-
                ## Purpose
                Ordering too little seed leaves beds half planted, and too much ties up cash in packets that lose vigour. Being able to work out plants per bed, seed needed per sowing allowing for germination and cost per bed for any crop takes an hour to learn and saves money every order.

                ## Milestones
                1. Plants per bed worked out from bed length, rows and in-row spacing.
                2. Seed needed calculated with a germination and nursery loss allowance.
                3. Seed cost per bed calculated for each crop.
                4. A simple spreadsheet or table that does the sums for any new crop.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A seed calculator gives plants per bed, seed needed and seed cost per bed for every crop you grow."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out plants per bed for one crop from your bed standard"
                - "Add an allowance for germination and nursery losses"
                - "Calculate seed cost per bed for that crop"
                - "Build a small table that repeats the sums for every crop"
            - name: Harvest maturity signs for each crop
              description: |-
                ## Purpose
                Tomatoes picked green-mature travel well, cucumbers left two days too long turn seedy, and cabbage picked soft will not hold. Learning the exact picking signs for each crop, and teaching them to whoever helps, raises the share of fruit that grades well and lasts to the buyer.

                ## Milestones
                1. Picking signs written for each crop: colour stage, size, firmness, days from flowering.
                2. Photos of correct and incorrect stages taken on your own farm.
                3. Buyer preferences for ripeness noted, for example breaker stage tomatoes for supermarkets.
                4. Every picker shown the signs and checked on one harvest day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page picking guide with photos covers every crop, and every picker has been checked against it on a harvest day."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the picking signs for each crop you grow"
                - "Photograph correct and incorrect maturity stages on your beds"
                - "Ask each buyer what ripeness stage they want"
                - "Walk each picker through the guide on a harvest day"
            - name: Germination test before each sowing
              description: |-
                ## Purpose
                Old, heat-damaged or poorly stored seed is the hidden cause of many patchy beds. A simple wet paper towel test of ten or twenty seeds, a week before sowing, tells you whether to sow as planned, sow thicker or buy fresh seed.

                ## Milestones
                1. The paper towel germination method practised on one packet.
                2. Germination rate recorded for every seed lot in the register.
                3. Sowing rates adjusted for lots that test low.
                4. A rule written for the germination rate below which seed is replaced.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every seed lot in stock has a recorded germination rate and a written rule says when to replace seed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Roll twenty seeds in a damp paper towel inside a sealed bag"
                - "Count sprouted seeds after the number of days the packet suggests"
                - "Write the germination rate beside the lot in the seed register"
                - "Set your own rule for when low-testing seed gets replaced"
            - name: Common pests and diseases by vegetable family
              description: |-
                ## Purpose
                Each crop family has a handful of usual enemies: diamondback moth on cabbage and patchoi, whitefly and early blight on tomato, downy mildew on cucumber, pickleworm on squash. Knowing them on sight for the crops you grow means your weekly walk spots them early and your extension officer gets a precise description.

                ## Milestones
                1. The three to five most common pests and diseases listed for each crop family you grow.
                2. Each one matched to a clear photo and its first visible sign.
                3. The season when each is worst noted on your crop calendar.
                4. The list reviewed with an extension officer and corrected for your district.

                ## Notes
                Management choices belong with your extension officer and the integrated pest management plan; this project is about recognising what you see.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A family-by-family list of common pests and diseases with photos and peak seasons has been checked by an extension officer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the crop families you grow this season"
                - "Gather photos of the main pests and diseases for each family"
                - "Mark the worst season for each on your crop calendar"
                - "Review the list with your extension officer"
            - name: Raised beds versus flat beds for the wet season
              description: |-
                ## Purpose
                Flat beds that work in the dry season can sit waterlogged for days in the rains, killing roots and inviting rot. Comparing raised beds of different heights against flat planting on your own soil shows which shape to use in each season and on each block.

                ## Milestones
                1. Blocks that pond after heavy rain identified from your plot map and field notes.
                2. Two bed heights trialled alongside flat beds in the same block.
                3. Plant survival and yield recorded for each bed type through one wet season.
                4. A decision recorded on bed shape by block and season.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states the bed height to use on each block in the wet and dry seasons, based on one season of trial results."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark the blocks that hold water after heavy rain"
                - "Form raised beds at two heights beside flat beds in one block"
                - "Record survival and yield for each bed type"
                - "Write down which bed shape each block gets in each season"
            - name: Plastic mulch versus organic mulch trial
              description: |-
                ## Purpose
                Plastic mulch cuts weeding, holds moisture and keeps fruit clean, but it costs money, can overheat roots and leaves waste. Grass, bagasse or rice straw mulch is cheaper but takes labour. A side-by-side trial on one crop shows which pays on your farm.

                ## Milestones
                1. Costs per bed gathered for silver or black plastic and for local organic mulch.
                2. Three beds of each mulch and three bare beds planted with the same crop and date.
                3. Weeding hours, water use and yield recorded per bed.
                4. A choice recorded of which mulch to use for which crop and season.

                ## Notes
                Silver-faced plastic is often used to deter whitefly and aphids in hot seasons; ask your extension officer whether it suits your crops.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded mulch choice per crop and season is based on weeding hours, water use and yield measured across nine trial beds."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Price plastic mulch and local organic mulch per bed"
                - "Lay three beds of each mulch beside three bare beds"
                - "Log weeding hours and yield for every trial bed"
                - "Record which mulch you will use for each crop and season"
            - name: Side-by-side tomato variety trial
              description: |-
                ## Purpose
                Seed catalogues promise heat tolerance and disease resistance, but only your field shows how a variety does in your soil, season and market. Growing two or three tomato varieties in the same block on the same day, and weighing what grades, settles the choice with your own numbers.

                ## Milestones
                1. Two or three varieties chosen, each with a stated resistance or heat tolerance.
                2. Equal beds planted on the same day, with the same care.
                3. Yield, grade-one share, disease and buyer feedback recorded for each.
                4. A variety chosen for each season and noted in the seed register.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tomato variety is chosen for each season based on recorded yield, grade-one share and disease scores from a same-day trial."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose two or three tomato varieties to trial"
                - "Plant equal beds of each on the same day in one block"
                - "Weigh total and grade-one fruit from each bed"
                - "Ask your main buyer which variety they prefer and why"
            - name: Choosing bed tools, wheel hoe, push seeder and crates
              description: |-
                ## Purpose
                On one to five acres, a good wheel hoe, a push seeder and enough harvest crates can save more labour than a second worker. Choosing the right hand-scale tools for your bed standard, and buying them before the season peak, pays back within months.

                ## Milestones
                1. Daily jobs that take the most hand labour listed and timed.
                2. Wheel hoes, push seeders and crate types compared on price, fit to your beds and spare parts.
                3. Tools bought or borrowed and tested on one block.
                4. Labour hours on the tested jobs compared before and after.

                ## Notes
                Start from the **Purchase decision** template. Check that a push seeder has plates for the seed sizes you actually sow.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Bed tools are chosen against your bed standard and the hours saved on weeding or sowing are measured on one block."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Time the three most labour-heavy bed jobs for a week"
                - "Compare wheel hoes and push seeders that fit your bed width"
                - "Count how many harvest crates you need on a peak picking day"
                - "Test the chosen tools on one block and log the hours"
            - name: Direct seeding or transplanting for each crop
              description: |-
                ## Purpose
                Some crops, such as carrots, ochro and bodi, usually do best sown straight into the bed, while tomatoes and cabbage gain weeks from transplants. Deciding crop by crop, with your own labour, nursery space and weed pressure in mind, sets how the nursery and the field share the work.

                ## Milestones
                1. Each crop classed as direct seed, transplant or either.
                2. For the either crops, time to harvest and labour compared for both methods.
                3. Nursery space needed for all transplant crops calculated.
                4. The method for each crop written into the bed standard.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The bed standard names direct seeding or transplanting for every crop, with nursery space calculated to match."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Class each crop as direct seed, transplant or either"
                - "Compare both methods on one crop that could go either way"
                - "Work out nursery bench space for all transplant crops"
                - "Write the chosen method for each crop into the bed standard"
            - name: Dropping the weakest crop from the mix
              description: |-
                ## Purpose
                Most vegetable farms carry one crop that takes beds, labour and worry but rarely pays. Using a season of yield, price and labour records to rank your crops by return per bed, and dropping or replacing the bottom one, frees land for crops that earn.

                ## Milestones
                1. Income per bed and labour hours per bed calculated for each crop for the last season.
                2. Crops ranked by income per bed after direct costs.
                3. The bottom crop's problems listed: price, disease, timing or labour.
                4. A decision recorded to drop, replace or fix the weakest crop.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Crops are ranked by income per bed after direct costs and a written decision is made on the bottom crop."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate income per bed for each crop from last season's records"
                - "Subtract seed, inputs and hired labour per bed"
                - "Rank the crops and list the bottom crop's main problems"
                - "Decide whether to drop, replace or fix it next season"
            - name: Plant spacing trial for more yield per bed
              description: |-
                ## Purpose
                Spacing copied from a foreign guide may be too wide for small, intensive beds or too close for humid weather, where crowding spreads leaf disease. Testing a closer and a wider spacing against your standard on one crop shows how many plants a bed can really carry.

                ## Milestones
                1. One crop chosen and three spacings set: standard, closer and wider.
                2. Three beds of each spacing planted on the same day.
                3. Yield, fruit size and leaf disease recorded per bed.
                4. The bed standard updated if a different spacing wins.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A spacing trial on one crop records yield and disease for three spacings and the bed standard is updated with the result."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one crop and set a closer and a wider spacing to test"
                - "Plant three beds at each spacing on the same day"
                - "Record yield, fruit size and disease for each bed"
                - "Update the bed standard if the trial shows a better spacing"
            - name: Intercropping strips and living borders
              description: |-
                ## Purpose
                A row of sweet corn as a windbreak beside cucumbers, marigold or sunflower borders to draw beneficial insects, or pumpkin running under corn can make better use of land and reduce pest pressure. Trialling one or two combinations on a small scale shows whether they help or simply complicate the beds.

                ## Milestones
                1. Two intercrop or border ideas chosen that fit your crops and bed standard.
                2. Each tried on one block with a comparison block nearby.
                3. Pest counts, yield and extra labour recorded.
                4. A decision recorded to adopt, adjust or drop each idea.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two intercropping or border ideas are trialled with a comparison block each and a recorded decision is made on both."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose two intercrop or border combinations to test"
                - "Plant each on one block beside a plain comparison block"
                - "Count pests and record yield and extra labour on each"
                - "Decide which ideas to keep for next season"
            - name: Timing plantings to miss the price glut
              description: |-
                ## Purpose
                When every grower plants tomatoes and cabbage for the dry season, prices crash just as harvest peaks, while the same crops fetch several times more in the wet months. Tracking market prices by week and shifting some plantings to land in short-supply windows can matter more than any yield gain.

                ## Milestones
                1. Weekly market prices for your main crops gathered for at least a year from market reports or your own sales.
                2. Glut and shortage weeks marked for each crop on the crop calendar.
                3. One or two plantings scheduled to harvest in a shortage window.
                4. Price received on the shifted plantings compared with the usual timing.

                ## Notes
                Wet-season vegetables carry more disease and drainage risk; plan raised beds and resistant varieties before chasing the high prices.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Glut and shortage weeks are marked for each main crop and at least one planting is scheduled into a shortage window with its price result recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect weekly market prices for your main crops from reports or sales"
                - "Mark glut and shortage weeks on the crop calendar"
                - "Schedule one planting to harvest in a shortage window"
                - "Compare the price received with your usual harvest timing"
            - name: Lent and Divali vegetable demand plantings
              description: |-
                ## Purpose
                Demand for vegetables rises sharply in Lent and, in Trinidad and Tobago, Guyana and Suriname, around Divali and other religious fasts when many households cook without meat. Counting back from those dates to sow melongene, bodi, pumpkin, ochro and greens in time puts your harvest on the market when buyers want most.

                ## Milestones
                1. The dates of Lent, Divali and other local fasting periods for the coming year noted.
                2. Days to harvest for each target crop counted back to give sowing dates.
                3. Extra beds reserved on the plot map for the demand peak.
                4. Buyers told ahead which crops and volumes you will have.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Sowings for each target crop are made on the counted-back dates so harvest falls within the Lent or Divali demand window."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up the dates of Lent, Divali and other local fasts for the year"
                - "Count back from each date to sowing dates for target crops"
                - "Reserve extra beds for the demand peak on the plot map"
                - "Review the festival sowing dates for next year @recurring(yearly)"
            - name: Christmas harvest window planting
              description: |-
                ## Purpose
                December brings the year's strongest demand for tomatoes, sweet peppers, lettuce, cabbage and cucumbers for salads and the festive table, but it falls at the tail of the rains in much of the region. Planning sowings in September and October with wet-season protection in mind lands crops when prices and demand peak.

                ## Milestones
                1. Christmas demand crops chosen with your main buyers.
                2. Sowing dates counted back from the second and third weeks of December.
                3. Raised beds and resistant varieties assigned for these late wet-season plantings.
                4. Volumes agreed with buyers for the Christmas weeks.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Christmas crops are sown on counted-back dates and volumes for the Christmas weeks are agreed with buyers in writing or by message."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your main buyers which crops they want most for Christmas"
                - "Count back sowing dates from mid December for each crop"
                - "Assign raised beds and resistant varieties to these plantings"
                - "Revisit the Christmas planting plan each year @recurring(yearly)"
            - name: First commercial harvest of the season
              description: |-
                ## Purpose
                The first harvest sets the tone with buyers: arriving on time with graded, clean produce and the agreed volume earns repeat orders. Preparing crates, pickers, scale, transport and the buyer list a week before the first pick means that first delivery goes right.

                ## Milestones
                1. The expected first harvest date set from planting date and days to maturity.
                2. Pickers booked, crates cleaned and the scale checked.
                3. Buyers confirmed with volumes and delivery times.
                4. The first harvest picked, weighed, recorded and delivered on the agreed day.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first harvest of the season is picked, weighed by bed and delivered to confirmed buyers on the agreed day."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set the expected first harvest date from your planting records"
                - "Book pickers and clean enough crates for the first pick"
                - "Confirm volumes and delivery times with each buyer"
                - "Pick, weigh, record and deliver the first harvest"
            - name: Vegetable plantings before the hurricane peak
              description: |-
                ## Purpose
                Tall staked tomatoes and trellised cucumbers in the ground in late August and September are the first things a storm flattens. Choosing what to plant through the hurricane peak, favouring quick and low crops and keeping planting dates staggered, limits how much a single storm can take.

                ## Milestones
                1. The hurricane peak months marked on your crop calendar.
                2. Plantings due to be standing in the peak months listed with their height and value.
                3. Tall, high-value plantings shifted to before or after the peak where possible.
                4. Quick crops such as patchoi and lettuce scheduled for fast replanting after a storm.

                ## Notes
                Farm-wide storm preparation for structures, animals and stores belongs in a separate hurricane plan; this project is only about what is growing in your vegetable beds.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The planting plan for the hurricane peak months is written, with tall high-value crops moved out of the peak where possible and a replant list ready."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark the hurricane peak months on the crop calendar"
                - "List which plantings will be standing during the peak"
                - "Move tall high-value plantings before or after the peak where possible"
                - "Review the hurricane season planting plan each June @recurring(yearly)"
            - name: Starting vegetables on rented land with no facilities
              description: |-
                ## Purpose
                Many new growers start on rented or borrowed land with no shed, no water point and no fence. Working out the minimum set-up that lets you plant, water, store tools and protect crops, without sinking money into a place you may not keep, gets you growing this season.

                ## Milestones
                1. The landowner's terms on water, structures and length of use written down.
                2. A minimum kit listed: water source, a lockable tool box, a shade area and simple fencing.
                3. Only movable or cheap structures chosen, so they can leave with you.
                4. The first beds planted within a month of getting access.

                ## Notes
                Keep a copy of any lease or written agreement before investing in beds or drip lines; a handshake arrangement is fragile.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A minimum, movable set-up is in place on the rented land and the first beds are planted within a month of access."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write down what the landowner allows on water, structures and term"
                - "List the minimum kit needed to plant and water this season"
                - "Choose movable options for storage, shade and fencing"
                - "Plant the first beds within a month of access"
            - name: Part-time vegetable growing around a day job
              description: |-
                ## Purpose
                Growers with a full-time job usually have early mornings, evenings and the weekend, and crops do not wait for days off. Choosing crops, bed numbers and a weekly job plan that fit the hours you really have, with drip on a timer, keeps the plot productive instead of overgrown.

                ## Milestones
                1. Hours available each week counted honestly, including travel time.
                2. Crops chosen that tolerate a few days between visits.
                3. Bed numbers capped to fit the hours available.
                4. A weekly job list planned every Friday and finished on the weekend.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bed numbers match the weekly hours available and the Friday job plan has been completed on the weekend for six weeks running."
                cadence: rolling
              tasks:
                - "Count the hours you can give the plot each week"
                - "Choose crops that cope with gaps between visits"
                - "Put the drip system on a battery timer"
                - "Plan the weekend's field jobs on Friday evening @recurring(weekly:fri)"
            - name: Taking over a family vegetable plot
              description: |-
                ## Purpose
                Inheriting or taking over a parent's or relative's vegetable land often means walking into old habits, unrecorded knowledge and buyers who dealt with someone else. Capturing what the older grower knows, from which corner floods to which vendor pays, before changing anything, keeps the good and gives a clean start on the rest.

                ## Milestones
                1. Two or three long conversations held with the previous grower, with notes taken.
                2. Their planting times, best varieties, problem spots and buyers written down.
                3. The plot map and record book started from those notes.
                4. Buyers visited and introduced to you as the new grower.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The previous grower's planting times, varieties, problem spots and buyers are written down and every regular buyer has met you."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Arrange time with the previous grower to walk the land together"
                - "Write down their planting times, varieties and problem spots"
                - "Start the plot map and record book from those notes"
                - "Visit each regular buyer and introduce yourself"
            - name: Scaling from one acre to five acres of vegetables
              description: |-
                ## Purpose
                Going from one acre to five does not just mean five times the beds: labour peaks, nursery space, water, transport and buyer volumes all hit new limits at once. For a founder or growing small business, planning the step up block by block over several seasons keeps quality and cash flow intact.

                ## Milestones
                1. Current yield, labour and buyer volumes per acre written down from records.
                2. Bottlenecks at five acres listed: labour, nursery, water, transport and sales.
                3. A phased expansion plan adding one or two acres per season.
                4. Each phase checked against buyer demand before planting.
                5. A monthly review of labour peaks during the expansion.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A phased plan shows when each new acre comes into production, with labour, nursery, water and buyer volume checked for each phase."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down current yield, labour and buyer volumes per acre"
                - "List the bottlenecks you would hit at five acres"
                - "Draft a phased plan adding one or two acres per season"
                - "Review labour needs against the harvest calendar @recurring(monthly:12)"
            - name: Restarting after a lost planting
              description: |-
                ## Purpose
                Floods, storms, dry spells and disease outbreaks can wipe out a planting and the cash it was meant to bring. A fast restart plan, with quick crops for early income, cleared and reshaped beds and nursery trays sown at once, shortens the gap before money comes in again.

                ## Milestones
                1. The damage recorded by bed with photos for any insurance or relief claim.
                2. Dead plants cleared and beds reshaped or raised where water caused the loss.
                3. Quick crops sown within two weeks of the loss.
                4. The cause of the loss written into the season debrief and calendar.

                ## Notes
                Photograph damage before you clear it. Insurers and relief schemes often need dated evidence by bed or by area.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Damage is photographed and recorded by bed and quick crops are sown within two weeks of a lost planting."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Photograph damaged beds with their codes before clearing"
                - "Clear dead plants and reshape beds that held water"
                - "Sow quick crops such as patchoi, lettuce and bodi within two weeks"
                - "Write the cause of the loss into the season debrief"
            - name: Year-round weekly volume plan for a buyer
              description: |-
                ## Purpose
                A hotel or supermarket asking for a fixed weekly volume of tomatoes or lettuce every week of the year needs a planting plan worked backwards from that number, through wet and dry seasons. Building that plan from your own yield per bed and loss rates is the step from grower to dependable supplier.

                ## Milestones
                1. Weekly volume needed for each committed crop written down.
                2. Yield per bed for each season and an allowance for losses taken from your records.
                3. Beds per sowing and sowing dates calculated for a full year.
                4. A weekly check of planned against actual harvest running for three months.
                5. The plan adjusted after each season debrief.

                ## Notes
                Plan for the wet-season yield, not the dry-season one; the shortfall weeks are when buyers decide whether to keep you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A year-long sowing plan meets the committed weekly volume and planned against actual harvest is checked weekly for three months."
                cadence: cyclic
              tasks:
                - "Write down the weekly volume committed for each crop"
                - "Calculate beds per sowing for wet and dry seasons with a loss allowance"
                - "Lay out sowing dates for a full year"
                - "Compare planned and actual harvest volumes for the week @recurring(weekly:fri)"
            - name: Grafted tomato and melongene for wilt-prone fields
              description: |-
                ## Purpose
                Bacterial wilt can kill tomatoes within days in warm, wet soils, and rotation alone may not clear a badly infected block. Grafting a market variety onto a resistant rootstock is a specialist technique used across the tropics that can bring wilt-prone land back into nightshade production.

                ## Milestones
                1. Wilt confirmed on your blocks by an extension officer or diagnostic lab.
                2. Resistant rootstocks available locally identified.
                3. Grafting practised on a nursery batch until most grafts take.
                4. Grafted and ungrafted plants compared in an infected block.
                5. A decision recorded on whether grafting pays for your farm.

                ## Notes
                Grafting needs a humid, shaded healing chamber for several days. Ask a research station or experienced grower to show you before trying a full batch.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Grafted and ungrafted plants are compared in a wilt-confirmed block and a decision on grafting is recorded with survival and yield figures."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the extension officer to confirm bacterial wilt on the affected block"
                - "Find which resistant rootstocks are sold or used locally"
                - "Practise grafting on a small nursery batch"
                - "Plant grafted and ungrafted rows side by side in the infected block"
            - name: Soil solarisation and stale seedbeds for weed control
              description: |-
                ## Purpose
                Blocks with a heavy weed seed bank or nematode history can be cleaned without chemicals by solarising under clear plastic in the hottest weeks, or by the stale seedbed method of letting weeds germinate and hoeing them off before sowing. Used well, these cut weeding hours sharply on the following crop.

                ## Milestones
                1. The worst weed or nematode blocks chosen from your field notes.
                2. One block solarised under clear plastic for several weeks in the dry season.
                3. A stale seedbed run on another block before a direct-seeded crop.
                4. Weeding hours on treated and untreated blocks compared on the next crop.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Weeding hours on solarised and stale-seedbed blocks are compared with an untreated block across one following crop."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose the two blocks with the heaviest weed pressure"
                - "Wet one block and cover it tight with clear plastic in the dry season"
                - "Prepare a stale seedbed on the other block and hoe off the first flush"
                - "Compare weeding hours on treated and untreated blocks"
            - name: Saving seed from open-pollinated vegetables
              description: |-
                ## Purpose
                Seed from open-pollinated, locally adapted varieties of pumpkin, bodi, ochro and some tomatoes can be saved, cutting seed costs and keeping strains that suit your conditions. Doing it well means isolating plants, picking the best parents and drying and storing seed properly; hybrid seed will not come true.

                ## Milestones
                1. Open-pollinated varieties on the farm identified and hybrids excluded.
                2. The best plants of each marked as seed parents.
                3. Seed harvested, cleaned, dried and stored with labels.
                4. Germination tested before the next sowing and compared with bought seed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Saved seed of at least one open-pollinated variety is cleaned, labelled, stored and germination tested before sowing."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check which of your varieties are open-pollinated"
                - "Tag the healthiest, truest plants as seed parents"
                - "Harvest, clean and dry the seed in the shade"
                - "Label and store the seed, then germination test it before sowing"
---

# Open-Field Vegetable Farming

This area is for anyone growing vegetables in the open field for sale, from a new grower testing a quarter acre to a small business supplying buyers every week. It starts with the foundations (a numbered plot map, a season calendar for your district, the first crops and varieties, bed standards, a nursery and a record book), then the weekly machinery of field walks, succession sowing, harvest days and plot reviews, the growing skills that lift yield per bed, the decisions about beds, mulch, varieties and planting dates, the demand peaks worth planting for, the situations new and part-time growers face, and finally the specialist work of year-round supply.

What repeats is a daily rain gauge reading and nursery check, a weekly field walk, succession sowing, weeding round and harvest days with weights, a monthly plot review and seed count, and a yearly look at rotation and the festival planting dates. The Metrics log, Purchase decision, Operational checklist and Habit tracker templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
