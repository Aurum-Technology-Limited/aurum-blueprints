---
id: agriculture.tropical-fruit-orchards
name: Tropical Fruit Orchards
description: "Map the trees you have, plant grafted mango, avocado, pawpaw and pineapple that suit your land, keep fruit fly and anthracnose in check, and pick at the right stage for fresh or processed buyers."
category: business
version: 1.0.0
tags: [agriculture, tropical-fruit-orchards, small-business, mango, avocado, pawpaw, pineapple, caribbean]
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
        - name: Tropical Fruit Orchards
          description: "Growing mango, avocado, pawpaw, pineapple and other tropical fruit: varieties, grafted plants, irrigation, harvest windows and fresh or processed markets."
          projects:
            - name: Orchard walk and fruit block map
              description: |-
                ## Purpose
                On most Caribbean farms the fruit trees were planted one or two at a time over decades, so the mango by the gate, the avocado near the drain and the pawpaw patch behind the shed are known only from memory. Walking the land and dividing it into named blocks gives every later record, from fruit fly traps to picking logs, a place to be written against.

                ## Milestones
                1. The boundary walked and checked against the survey plan, lease map or deed sketch you hold.
                2. The orchard divided into named blocks of similar fruit, age or slope, each with an approximate area.
                3. A map drawn or marked on a satellite image showing blocks, access tracks, water points and the packing area.
                4. Each block labelled with a one-line note on what grows there and its condition.

                ## Notes
                A phone mapping app that records a walked track is enough. Paint the block name on a post at each entrance so pickers and workers use the same names.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map of the orchard exists with every block named, its rough area given and a short note on fruit and condition beside it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the survey plan, lease map or deed sketch for the land"
                - "Walk the boundary with a phone recording the track"
                - "Divide the trees into blocks and give each a short name"
                - "Mark tracks, water points and the packing area on the map"
            - name: Tree inventory by fruit, variety and age
              description: |-
                ## Purpose
                Buyers ask how many trees you have and of what, and the honest answer on a mixed orchard is often a guess. Tagging and listing every tree with its fruit, variety where known, approximate age and whether it is grafted or a seedling turns the orchard into something you can plan, borrow against and sell from.

                ## Milestones
                1. Every tree given a number on a tag or painted mark, block by block.
                2. A list with fruit, variety or local name, grafted or seedling, and estimated age for each tree.
                3. Trees scored as bearing well, bearing poorly, young, or for removal.
                4. Totals per fruit and per block worked out and added to the block map.

                ## Notes
                Mark unknown varieties as unknown rather than guessing; a fruit sample shown to an extension officer or an older grower usually settles it during the season.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A numbered list of every orchard tree with fruit, variety, origin, age and a condition score, totalled per block."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Buy weatherproof tags or paint for numbering trees"
                - "Number and list the trees in the first block"
                - "Score each tree as bearing well, poorly, young or for removal"
                - "Total the trees per fruit and per block"
            - name: Choosing which fruits suit your land and buyers
              description: |-
                ## Purpose
                A fruit that grows well on the land but has no buyer is a hobby, and one with a buyer that rots in heavy clay is a loss. Matching elevation, rainfall, drainage and wind exposure against what local markets, hotels and processors actually pay for narrows the choice to two or three fruits worth planting at scale.

                ## Milestones
                1. Elevation, rough annual rainfall, drainage and wind exposure noted for each block.
                2. A shortlist of five candidate fruits with the years each takes to first crop.
                3. At least three buyers asked what fruit, volume and season they want.
                4. Two or three fruits chosen for planting, with the reasons written down.

                ## Notes
                Avocado dislikes wet feet and pineapple prefers free-draining, slightly acid soil, while mango tolerates drier ground once established. Ask your extension officer which fruits do well at your elevation before committing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision naming the two or three fruits to plant, backed by site notes and at least three buyer conversations."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Note elevation, drainage and wind exposure for each block"
                - "List five candidate fruits with years to first crop"
                - "Ask three buyers which fruits and seasons they want"
                - "Write down the fruits you chose and why"
            - name: Planting site check for drainage and hardpan
              description: |-
                ## Purpose
                Grafted fruit trees stay in the ground for twenty years or more, and a hole dug into hardpan or a hollow that holds water after rain will kill avocado and stunt mango no matter how good the plant. Digging test pits and watching where water sits after a heavy shower shows which spots are safe before money goes into grafted plants.

                ## Milestones
                1. Test pits dug to about a metre in each block planned for new trees.
                2. Soil depth, any hard layer and colour or smell of waterlogging noted for each pit.
                3. The pits filled with water and the time to drain recorded.
                4. Each planting spot marked as suitable, needs mounding, or avoid.

                ## Notes
                A soil test for nutrients and pH is a separate job; combine the visit with a lab sample if your extension office offers one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every planned planting block has test pit notes on depth, hard layers and drainage time and a suitable, mound or avoid verdict."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Dig the first test pit where you plan to plant"
                - "Record soil depth and any hard layer in each pit"
                - "Fill each pit with water and time how long it takes to drain"
                - "Mark each planting spot as suitable, mound or avoid"
            - name: Fruit grower registration and extension contact
              description: |-
                ## Purpose
                Planting material schemes, incentive rebates and pest alerts usually reach registered farmers first, and an extension officer who knows your orchard is the quickest route to a diagnosis when trees start dropping fruit. Getting the farmer card and one field visit in place early pays back the first time something goes wrong.

                ## Milestones
                1. Farmer or grower registration with the Ministry of Agriculture current, with the card or number filed.
                2. The extension officer for your district named, with phone and office hours recorded.
                3. One field visit to the orchard completed and the officer's notes kept.
                4. Any fruit tree planting or rehabilitation schemes on offer listed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A current farmer registration is on file and the district extension officer has visited the orchard once, with notes kept."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether your farmer registration is current"
                - "Call the district extension office and get the officer's name"
                - "Book a field visit to walk the orchard together"
                - "Ask about fruit tree planting and rehabilitation schemes"
                - "Renew the farmer registration before it lapses @recurring(yearly)"
            - name: Dry season water needs for the orchard
              description: |-
                ## Purpose
                Young grafted trees can die in their first dry season without water, and bearing mango and avocado drop fruit when stressed at fruit set. Estimating how many litres each block needs per week through the dry months, and checking that against what the tank, pond or standpipe can actually supply, shows whether you need storage or a smaller planting.

                ## Milestones
                1. Trees grouped into young, bearing and pawpaw or pineapple blocks with counts.
                2. A rough weekly dry season water need per group agreed with the extension officer.
                3. The reliable dry season supply from each source measured or estimated.
                4. The gap, if any, written down with options such as storage, mulch or fewer new plants.

                ## Notes
                Choosing and laying the irrigation system itself sits with farm irrigation planning; this project is the orchard's water budget.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page dry season water budget lists weekly need per tree group against measured supply, with any shortfall and the plan for it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count trees in young, bearing and short-crop groups"
                - "Ask the extension officer for a weekly dry season need per group"
                - "Measure how much each water source gives in the dry months"
                - "Write the shortfall and the options to close it"
            - name: Picking poles, ladders and field crates
              description: |-
                ## Purpose
                Knocking mango and avocado down with a stick bruises the fruit so it rots within days, and fruit thrown into feed bags arrives at the buyer scarred. A basket-ended picking pole, a stable orchard ladder and enough ventilated crates for a full picking day are the cheapest quality upgrade an orchard can make.

                ## Milestones
                1. Picks per day in peak season estimated in crates.
                2. Picking poles, a tripod or orchard ladder and secateurs compared on price and safety.
                3. Enough clean, stackable field crates bought or hired for a full picking day.
                4. A dry, shaded spot set aside to store the kit between seasons.

                ## Notes
                Start from the **Purchase decision** template. Tripod ladders are steadier on sloping ground than leaning ladders.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The orchard has picking poles, a safe ladder and enough clean crates for one full peak picking day, bought against a compared shortlist."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate how many crates a peak picking day fills"
                - "Price two picking poles and a tripod ladder"
                - "Buy or hire enough ventilated crates for one full day"
                - "Set aside a dry place to store the picking kit"
            - name: Last season's fruit yield and sales rebuilt
              description: |-
                ## Purpose
                Without numbers it is impossible to tell whether the orchard pays, which trees carry it, or what a lender or buyer should expect. Rebuilding last season from receipts, vendor notes and memory gives a first baseline for crates picked, fruit sold, prices and losses.

                ## Milestones
                1. Receipts, mobile money records and vendor notes from last season gathered in one place.
                2. Crates or kilos sold estimated per fruit and per buyer.
                3. Average price and total income worked out per fruit.
                4. Fruit lost to rot, pests, theft or no buyer estimated as a share of the crop.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of last season's volume, price, income and losses per fruit, built from receipts and records."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather last season's receipts and sales messages"
                - "Estimate crates sold per fruit and per buyer"
                - "Work out average price and income per fruit"
                - "Estimate the share of fruit lost and why"
            - name: Flowering and harvest calendar by fruit
              description: |-
                ## Purpose
                In much of the region mango flowers in the dry months and crops from about April to August, avocado varieties ripen in sequence from mid-year, and pawpaw and pineapple can bear all year if planting is staggered. Writing down when each block flowers, sets and ripens lets you plan labour, crates, buyers and spray decisions months ahead.

                ## Milestones
                1. Flowering, fruit set and harvest months noted for each fruit and variety you grow.
                2. A twelve-month calendar showing when each block is in flower or in harvest.
                3. Gaps in supply identified where no fruit is available to sell.
                4. The calendar checked against your extension officer's local experience.

                ## Notes
                Timings shift with elevation and with a wet or dry year, so treat the first calendar as a draft and correct it after each season.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month calendar shows flowering and harvest windows for every block, with supply gaps marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List flowering and harvest months for each variety you grow"
                - "Draw a twelve-month calendar with a row per block"
                - "Mark the months with nothing to sell"
                - "Ask the extension officer to check the local timings"
                - "Correct the calendar with this season's real dates @recurring(yearly)"
            - name: Monthly orchard walk and tree health score
              description: |-
                ## Purpose
                Problems in fruit trees creep up: scale on a few branches becomes a block-wide infestation, and a tree with root rot looks merely tired for a year before it dies. A monthly walk with a simple score per block catches decline while it is still cheap to treat and gives the extension officer real observations instead of a vague complaint.

                ## Milestones
                1. A walking route and a one-line score sheet per block agreed.
                2. Twelve monthly walks completed with scores and notes.
                3. Any tree scored as declining photographed and reported to the extension officer.
                4. A yearly summary of which blocks improved or slipped.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly block scores are recorded in a year, with every declining tree photographed and reported."
                cadence: rolling
              tasks:
                - "Draw up a one-line score sheet for each block"
                - "Walk every block and score leaf colour, pests and fruit load @recurring(monthly:9)"
                - "Photograph any declining tree and send it to the extension officer"
                - "Summarise which blocks improved or slipped this year @recurring(yearly)"
            - name: Fruit fly trapping and monitoring
              description: |-
                ## Purpose
                Fruit flies lay eggs under the skin of mango, guava, carambola and other soft fruit, and a few maggots found by a hotel buyer or an export inspector can end the account. Baited traps checked on the same day every week show when numbers start rising, which blocks are worst, and whether field sanitation is working.

                ## Milestones
                1. Traps of the type recommended by the extension office hung in each block at the advised spacing.
                2. A weekly count per trap recorded through the fruiting season.
                3. Rising counts compared against the threshold your extension officer uses.
                4. Lures and baits replaced on the schedule printed on the product.

                ## Notes
                Use only lures and baits approved for use in your country and follow the label. A trap count is a warning signal, not a control method on its own.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fruit fly traps are checked weekly through the fruiting season with counts recorded per block and compared to the agreed threshold."
                cadence: cyclic
              tasks:
                - "Ask the extension office which trap and lure they recommend"
                - "Hang traps in each block at the advised spacing"
                - "Count and record flies in every trap @recurring(weekly:mon)"
                - "Replace lures on the date the label gives @recurring(monthly:16)"
            - name: Fallen fruit sanitation rounds
              description: |-
                ## Purpose
                Fruit left rotting under the tree is where the next generation of fruit flies, mango seed weevils and anthracnose spores come from. Collecting and destroying fallen and stung fruit every week in season is unglamorous, but it cuts pest pressure more reliably than anything sprayed.

                ## Milestones
                1. A method for destroying fallen fruit chosen: burying deep, sealed bags in the sun or feeding to pigs where allowed.
                2. Every block cleared of fallen and stung fruit once a week through the season.
                3. Fruit left hanging after harvest stripped from the trees.
                4. Trap counts compared before and after a season of sanitation.

                ## Notes
                Do not compost fly-infested fruit in an open heap; larvae survive and pupate in the soil.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fallen and stung fruit is cleared from every block weekly in season and post-harvest fruit is stripped, with trap counts compared year on year."
                cadence: cyclic
              tasks:
                - "Choose how fallen fruit will be destroyed on the farm"
                - "Collect and destroy fallen fruit in every block @recurring(weekly:thu)"
                - "Strip fruit left hanging after the last harvest"
                - "Compare this season's trap counts with last season's"
            - name: Mango flowering and anthracnose watch
              description: |-
                ## Purpose
                Anthracnose and powdery mildew strike mango at flowering, blackening panicles and young fruit, and a wet spell during flowering can wipe out a season. Watching flowering closely and calling the extension officer as soon as symptoms show lets any protection be timed to the weeks that matter rather than sprayed by habit.

                ## Milestones
                1. The start of flowering recorded for each mango block.
                2. Panicles checked twice a week during flowering for black spots or white powder.
                3. Weather during flowering noted, especially runs of rain or heavy dew.
                4. Any protection agreed with the extension officer, applied to the label and recorded with the date.

                ## Notes
                Never use a product rate from memory or a neighbour; the label and your extension officer set it, along with the pre-harvest interval.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every mango block has a recorded flowering start date, twice-weekly panicle checks and a dated record of any protection used."
                cadence: cyclic
                effort_hours_estimate: "15"
              tasks:
                - "Record the date flowering starts in each mango block"
                - "Check panicles for black spots and white powder twice a week"
                - "Note rain and heavy dew during the flowering weeks"
                - "Call the extension officer when symptoms first appear"
            - name: Dry season orchard watering routine
              description: |-
                ## Purpose
                Trees under two years old and trees setting fruit suffer most in the dry months, and watering everything a little is worse than watering the right trees properly. A weekly routine that puts young trees and fruiting blocks first, with mulch to hold the water, gets the orchard through to the rains.

                ## Milestones
                1. Watering priority set: newly planted trees, then trees at fruit set, then the rest.
                2. Mulch rings laid around young trees before the dry season starts.
                3. A weekly watering day kept through the dry months, with litres or hours per block recorded.
                4. Trees that wilted or dropped fruit noted for next year's plan.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Through the dry season every young tree is watered weekly, mulch rings are in place and water applied per block is recorded."
                cadence: cyclic
              tasks:
                - "Write the watering priority order for your blocks"
                - "Lay mulch rings around trees planted in the last two years"
                - "Water young and fruiting trees by priority order @recurring(weekly:tue)"
                - "Note trees that wilted or dropped fruit this dry season"
            - name: Orchard slashing and ground cover rounds
              description: |-
                ## Purpose
                Grass and vine under fruit trees steal water and nitrogen, hide fallen fruit and give rats and snails cover, but bare ground washes away on a slope. Slashing on a regular round, keeping a clean ring under each canopy and leaving low cover between rows balances both.

                ## Milestones
                1. A clean ring under each tree and a slashed strip between rows agreed as the standard.
                2. A slashing round completed in every block each month in the wet season.
                3. Vines pulled out of canopies before they shade branches.
                4. Bare or eroding patches planted with a low cover the extension officer suggests.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every block is slashed on a monthly round in the wet season with clean tree rings and no vines in the canopies."
                cadence: rolling
              tasks:
                - "Agree the ring width and row strip standard with workers"
                - "Slash every block and clear the tree rings @recurring(monthly:20)"
                - "Pull vines out of any canopy they have reached"
                - "Ask about a low cover crop for bare slopes"
            - name: Fruit tree nutrition from leaf and soil tests
              description: |-
                ## Purpose
                Bearing fruit trees carry a lot of nutrient away in every crate, and yellowing leaves or small fruit are often blamed on age when the real cause is a gap that a test would show. A yearly leaf and soil sample, interpreted with the extension officer, replaces guesswork with a written plan for each block.

                ## Milestones
                1. Soil and leaf samples taken from each main block at the time the lab advises.
                2. Lab results received and filed against the block map.
                3. A written feeding plan per block agreed with the extension officer or agronomist.
                4. Applications recorded with date, product and block.

                ## Notes
                Rates come from the test interpretation and the product label, never from a general list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each main block has a current leaf or soil test and a written feeding plan, with every application recorded."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask the lab which leaf to sample and when for each fruit"
                - "Take soil and leaf samples from each main block @recurring(yearly)"
                - "Agree a feeding plan per block from the results"
                - "Record every feeding with date, product and block"
            - name: In-season harvest rounds and picking log
              description: |-
                ## Purpose
                Timing sets the price: fruit picked a week late splits, drops or is taken by birds and bats, and fruit picked green never ripens properly for the buyer. Fixed picking days in season, with each round logged by block, tell you what each tree really yields and make supply to regular buyers predictable.

                ## Milestones
                1. Picking days set for each fruit in season.
                2. Crates picked per block written down after every round.
                3. Rejects, splits and fruit fly damage counted separately.
                4. A season total per block and per tree number worked out.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every picking round in season is logged with crates and rejects per block, giving a season total per block."
                cadence: cyclic
              tasks:
                - "Set picking days for each fruit coming into season"
                - "Pick ripe blocks and log crates and rejects @recurring(weekly:sat)"
                - "Count fruit fly and split fruit separately from good fruit"
                - "Total the season's crates per block at the end"
            - name: Monthly fruit sales and cost ledger
              description: |-
                ## Purpose
                Mixed orchards sell in small amounts to many people, so income disappears into the household and costs such as crates, transport and labour are forgotten. A monthly ledger of sales and costs per fruit shows which fruits make money and gives a lender or incentive office the records they ask for.

                ## Milestones
                1. A ledger set up with sales and cost columns per fruit.
                2. Every sale and cost written in within the month it happened.
                3. Monthly totals and margin per fruit worked out.
                4. A yearly summary prepared for tax and loan records.

                ## Notes
                Start from the **Metrics log** template. A notebook kept in the vehicle and copied up monthly works better than a spreadsheet nobody opens.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ledger holds every sale and cost for twelve months with a monthly margin per fruit and a yearly summary."
                cadence: rolling
              tasks:
                - "Set up a ledger with sales and costs per fruit"
                - "Copy the month's sales and costs into the ledger @recurring(monthly:28)"
                - "Work out the margin per fruit for the month"
                - "Prepare the yearly summary for tax and loan records @recurring(yearly)"
            - name: Staggered pawpaw planting cycle
              description: |-
                ## Purpose
                Pawpaw bears within a year but its yield falls and the trees grow too tall to pick after two or three years, and ringspot virus often shortens that further. Planting a new block every few months and removing the oldest keeps a steady supply for buyers who want fruit every week, not in gluts.

                ## Milestones
                1. Weekly demand from regular buyers estimated in fruit or kilos.
                2. A planting interval and block size worked out to match that demand.
                3. Seedlings raised or bought for each planting on schedule.
                4. The oldest or worst virus-affected block removed as each new one comes into bearing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "New pawpaw blocks are planted on a fixed interval and the oldest block is removed as each new one bears, with no month without fruit."
                cadence: cyclic
              tasks:
                - "Estimate how many pawpaw your buyers take each week"
                - "Work out how often to plant and how many plants each time"
                - "Sow or order seedlings for the next planting @recurring(quarterly)"
                - "Remove the oldest block once the new one is bearing"
            - name: Pineapple block planting and ratoon schedule
              description: |-
                ## Purpose
                Pineapple takes well over a year from planting to the first fruit, and the ratoon crops that follow get smaller each time. Planning blocks so that one is always being planted, one forced, and one harvested, and deciding when to replant rather than carry another ratoon, keeps the crop steady and the slips coming.

                ## Milestones
                1. Each pineapple block listed with planting date, variety and crop stage.
                2. A rotation drawn so planting, forcing and harvest fall in different months.
                3. Slips and suckers collected and graded by size for the next planting.
                4. A rule written for when a block is replanted instead of ratooned.

                ## Notes
                Plant slips of similar size together so the block flowers and fruits evenly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pineapple block has a recorded stage and the rotation keeps at least one block in harvest in most months of the year."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "List each pineapple block with planting date and stage"
                - "Draw a rotation that spreads planting, forcing and harvest"
                - "Grade slips and suckers by size before planting"
                - "Write the rule for replanting instead of ratooning"
            - name: Learning to graft mango and avocado
              description: |-
                ## Purpose
                Being able to graft your own trees lets you change a poor seedling into a known variety, replace a dead tree from your best one and raise plants far cheaper than buying them. Cleft and side grafting are learnable in a few sessions with an experienced grafter and a sharp knife.

                ## Milestones
                1. A grafting session with an extension officer, nursery or experienced grower attended.
                2. Rootstocks raised in bags ready for practice.
                3. At least twenty practice grafts made and labelled with date and method.
                4. A take rate worked out after six to eight weeks and the failures examined.

                ## Notes
                A clean, very sharp knife and grafting tape matter more than the method. Take budwood from healthy, labelled trees only.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty or more practice grafts are made and labelled, and a take rate is recorded after eight weeks."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the extension office when the next grafting session runs"
                - "Sow seeds in bags to raise practice rootstocks"
                - "Make and label twenty practice grafts"
                - "Count how many grafts took after eight weeks"
            - name: Reading picking maturity for each fruit
              description: |-
                ## Purpose
                Each fruit tells you it is ready differently: mango by shoulder fill and flesh colour near the seed, avocado by dry matter and the skin losing its shine, pawpaw by the first yellow streak, pineapple by eye colour from the base. Learning these signs for your own varieties means fruit that ripens properly at the buyer and fewer rejections.

                ## Milestones
                1. The maturity signs for each fruit you grow written on one sheet.
                2. Sample fruit cut at different stages and the results photographed.
                3. Ripening at room temperature timed for fruit picked at each stage.
                4. A picking standard per fruit agreed with your main buyer.

                ## Notes
                Avocado does not ripen on the tree, so many growers and buyers use a simple dry matter test to decide when a variety may be picked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page picking standard per fruit, backed by photographed cut tests and ripening times, is agreed with the main buyer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the maturity signs for each fruit on one sheet"
                - "Cut sample fruit at three stages and photograph them"
                - "Time how long each stage takes to ripen indoors"
                - "Agree a picking standard with your main buyer"
            - name: Recognising tropical fruit pests and diseases
              description: |-
                ## Purpose
                Mango seed weevil, scale, mealybug, anthracnose, avocado root rot, pawpaw ringspot and pineapple mealybug wilt each look different and need a different response, and spraying the wrong thing wastes money and harms pollinators. A field guide built from your own photographs makes scouting faster and calls to the extension officer more precise.

                ## Milestones
                1. A list of the main pests and diseases of each fruit you grow, from an extension leaflet or guide.
                2. Photographs of each problem found on your own trees, labelled.
                3. Look-alike problems noted, such as nutrient yellowing versus virus mottling.
                4. The guide checked with the extension officer for errors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A photographed field guide covering the main pests and diseases of each fruit on the farm, checked by the extension officer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Get extension leaflets on pests of each fruit you grow"
                - "Photograph and label problems you find on your trees"
                - "Note look-alike symptoms and how to tell them apart"
                - "Ask the extension officer to check the guide"
            - name: Avocado flowering types and pollination
              description: |-
                ## Purpose
                Avocado flowers open as female and male at different times of day, and varieties are grouped into A and B types by that timing. An orchard of only one type can flower heavily and set little, so knowing the types of your trees and whether the other type is nearby explains poor yields and guides the next planting.

                ## Milestones
                1. The A or B flowering type of each avocado variety on the farm found out.
                2. The share of each type in the orchard and in neighbouring trees noted.
                3. Bee activity during flowering observed and recorded.
                4. A decision made on whether to plant or graft the other type.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every avocado variety on the farm is labelled A or B type and a written decision is made on adding the other type."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the flowering type of each avocado variety you grow"
                - "Count trees of each type on and near the farm"
                - "Watch and note bee activity during flowering"
                - "Decide whether to plant or graft the other type"
            - name: Sexing pawpaw seedlings and young plants
              description: |-
                ## Purpose
                Pawpaw plants are female, male or hermaphrodite, and only some carry the elongated fruit most buyers prefer, so a field of unsexed seedlings can end up a third unproductive. Learning to read the flowers, planting more than one seedling per station and thinning to the right sex at first flower protects the yield.

                ## Milestones
                1. Female, male and hermaphrodite flowers identified from photographs and on the plant.
                2. Two or three seedlings set per planting station in the next block.
                3. Plants thinned to one of the preferred sex at first flowering.
                4. The share of each sex recorded to judge your seed source.

                ## Notes
                Seed from a reliable supplier or from fruit of hermaphrodite plants gives a better ratio than seed from market fruit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The next pawpaw block is thinned to one plant of the preferred sex per station at first flowering, with the sex ratio recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Study photographs of female, male and hermaphrodite pawpaw flowers"
                - "Set two or three seedlings at each station in the next block"
                - "Thin to one plant per station at first flowering"
                - "Record how many plants of each sex the seed gave"
            - name: Pruning fruit trees for height and light
              description: |-
                ## Purpose
                Old mango and avocado trees grow fifteen metres tall, so most fruit is out of reach, shaded inside and exposed to wind. Pruning after harvest to open the centre and bring the height down over two or three seasons gives fruit that can be picked from a ladder, sprays that reach and trees that stand better in a storm.

                ## Milestones
                1. A target height and shape agreed for each fruit with the extension officer.
                2. Pruning timed to just after harvest so next season's flowering is not lost.
                3. One block pruned, with large cuts sealed if advised and prunings removed.
                4. A yearly pruning round set for every block.

                ## Notes
                Take a tall tree down in stages over two or three years; cutting it back hard in one go can stop it bearing for a long time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every block has an agreed target height, one block is pruned after harvest, and a yearly pruning round is scheduled."
                cadence: cyclic
                effort_hours_estimate: "24"
              tasks:
                - "Agree target height and shape per fruit with the extension officer"
                - "Prune the first block in the weeks after harvest"
                - "Remove and destroy the prunings from the block"
                - "Prune the next block due after its harvest @recurring(yearly)"
            - name: Pineapple flower forcing with your extension officer
              description: |-
                ## Purpose
                Pineapple growers force flowering so a block fruits together and on a date they choose, which is what lets them promise volumes to a hotel or processor. The timing, plant size and the approved product all matter, and getting any of them wrong gives uneven or tiny fruit, so this is learned alongside someone who has done it locally.

                ## Milestones
                1. The plant size and age at which forcing works for your variety learned from the extension officer.
                2. The approved product, label directions and safety precautions read and filed.
                3. One trial block forced and the date recorded.
                4. Flowering and harvest dates of the trial block compared with an unforced block.

                ## Notes
                Use only a product registered for pineapple in your country, follow the label exactly and wear the protective equipment it lists.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One trial block is forced with an approved product under the label, and its flowering and harvest dates are recorded against an unforced block."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the extension officer when your variety is big enough to force"
                - "Read and file the label of the approved product"
                - "Force one trial block and record the date"
                - "Compare harvest dates with an unforced block"
            - name: Buying grafted plants from a reliable nursery
              description: |-
                ## Purpose
                A mango or avocado tree takes four to six years to show whether it is the variety you paid for, so buying from a nursery that labels budwood sources and keeps plants disease-free saves years. Comparing nurseries on variety names, rootstock, plant health and price before ordering protects the biggest investment in a new block.

                ## Milestones
                1. Three nurseries, including any government propagation station, identified.
                2. Each nursery visited and plants checked for clean roots, a healthy graft union and labelling.
                3. Variety, rootstock, price and delivery date compared side by side.
                4. An order placed with delivery timed for the start of the rains.

                ## Notes
                Start from the **Vendor** template. Pull one plant from its bag to check the roots are not coiled before ordering in bulk.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Grafted plants are ordered from one of three compared nurseries, with variety, rootstock and delivery date confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List three nurseries including the government propagation station"
                - "Visit each and check roots and graft unions on sample plants"
                - "Compare variety, rootstock, price and delivery date"
                - "Place the order with delivery timed for the rains"
            - name: Mango and avocado variety choice for new plantings
              description: |-
                ## Purpose
                Julie and Starch sell well locally, while hotels, processors and export buyers may want firm, fibreless varieties that travel, and avocado buyers want fruit available across many months. Choosing a mix of varieties for flavour, market, season and disease tolerance decides what the block earns for the next twenty years.

                ## Milestones
                1. Varieties available from local nurseries listed with their harvest season.
                2. Each main buyer asked which varieties they want and pay more for.
                3. A shortlist scored on market, season, disease tolerance and tree vigour.
                4. A planting mix chosen that spreads harvest across as many months as possible.

                ## Notes
                Do not pick a variety purely from an overseas catalogue; ask the extension officer how it performs at your elevation and rainfall.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written variety mix for the next planting, scored on market, season and disease tolerance, with buyer views recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List varieties local nurseries can supply with their seasons"
                - "Ask each main buyer which varieties they pay more for"
                - "Score the shortlist on market, season and disease tolerance"
                - "Choose a mix that spreads harvest over more months"
            - name: Orchard layout and tree spacing plan
              description: |-
                ## Purpose
                Traditional wide spacing gives big trees that are hard to pick, while closer, pruned plantings bear earlier per acre but need yearly pruning discipline. Drawing the layout on paper first, with rows across the slope, room for a vehicle and space for windbreaks, avoids mistakes that last for the life of the trees.

                ## Milestones
                1. Spacing options for each fruit compared for trees per acre, years to full crop and pruning work.
                2. Rows marked across the slope with access lanes for vehicles and crates.
                3. Positions of windbreaks, drains and water lines marked.
                4. The final layout drawn and the planting holes pegged.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A drawn layout for the new block shows spacing, rows, access lanes and windbreaks, and every planting hole is pegged on the ground."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Compare two spacing options per fruit for trees per acre"
                - "Mark rows across the slope with access lanes"
                - "Add windbreaks, drains and water lines to the drawing"
                - "Peg every planting hole in the field"
            - name: Top-working old seedling mango trees
              description: |-
                ## Purpose
                A large seedling mango with stringy fruit has a root system that would take a new tree ten years to build. Cutting it back and grafting a better variety onto the regrowth can bring a known, saleable variety into bearing in two to three years, often faster than replanting.

                ## Milestones
                1. Seedling trees worth top-working chosen from the tree inventory.
                2. Budwood of the chosen variety sourced from a healthy, labelled tree.
                3. Trees cut back in stages and new shoots selected for grafting.
                4. Grafts made, labelled and checked until they are clearly growing.

                ## Notes
                Keep some branches on the tree while the grafts establish, and paint exposed bark to stop sun scald if your extension officer advises it.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The chosen seedling trees carry growing grafts of a named variety, each labelled and recorded in the tree inventory."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the seedling trees worth top-working from the inventory"
                - "Arrange budwood from a healthy tree of the chosen variety"
                - "Cut back the first tree and let new shoots grow"
                - "Graft and label the selected shoots on each tree"
            - name: Canopy height limit for wind-exposed blocks
              description: |-
                ## Purpose
                Tall mango and avocado trees on a ridge are the first to split or uproot in a hurricane, and a lost mature tree is years of income. Setting a maximum height for the most exposed blocks and holding it with yearly pruning, plus a living windbreak on the worst side, makes the orchard far more likely to come through a storm bearing.

                ## Milestones
                1. The most wind-exposed blocks identified from the map and past storm damage.
                2. A maximum canopy height set for those blocks with the extension officer.
                3. Trees over the limit scheduled to come down in stages after harvest.
                4. A windbreak species and line chosen for the windward side.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Exposed blocks have a written height limit, a staged plan to bring tall trees down, and a windbreak line chosen."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Mark the most wind-exposed blocks on the map"
                - "Agree a height limit for those blocks"
                - "List trees over the limit and schedule staged cuts"
                - "Choose a windbreak species for the windward side"
            - name: Off-season mango cropping decision
              description: |-
                ## Purpose
                Mango prices fall sharply in the main season glut and rise when few trees are bearing, so some growers try to shift flowering on part of the orchard. Flower induction methods carry real risk to tree health and must be legal and supervised, so this is a decision to research carefully, not a trick to copy from a neighbour.

                ## Milestones
                1. Main season and off-season prices compared from your own records and market checks.
                2. Methods used locally, their risks and the approved products listed with the extension officer.
                3. A small trial on a few trees agreed, or a decision recorded not to try.
                4. Results of any trial recorded against untreated trees.

                ## Notes
                Never use a growth regulator that is not registered for mango in your country, and follow the label and the officer's supervision exactly.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on off-season mango, based on price records and extension advice, with any trial results recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare main season and off-season mango prices"
                - "Ask the extension officer which methods are approved locally"
                - "Decide whether to trial on a few trees"
                - "Record trial results against untreated trees"
            - name: Selling fresh fruit or processing the seconds
              description: |-
                ## Purpose
                Often a fifth or more of the crop is often too small, scarred or ripe to sell fresh, and it is either dumped or sold for almost nothing. Comparing what seconds earn as fresh fruit, sold to a juice or chow maker, or turned into pulp or dried fruit yourself shows whether processing is worth the licence, equipment and time.

                ## Milestones
                1. The volume of seconds per fruit estimated from picking logs.
                2. Prices offered for seconds by juice makers, processors and vendors gathered.
                3. The cost of processing yourself estimated, including a licensed kitchen and packaging.
                4. A decision recorded for each fruit's seconds.

                ## Notes
                Setting up a processing business is its own area; this project decides where the orchard's seconds go.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision for each fruit's seconds, comparing at least two outlets on price per kilo."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate seconds per fruit from the picking logs"
                - "Ask two processors what they pay for seconds"
                - "Estimate the cost of processing seconds yourself"
                - "Write down where each fruit's seconds will go"
            - name: Removing and replacing unproductive trees
              description: |-
                ## Purpose
                Every orchard carries trees that cost slashing, pruning and space but give little fruit: dying avocados, stringy seedling mangoes, trees shaded out by bigger neighbours. Deciding tree by tree whether to rehabilitate, top-work or remove frees space and labour for trees that pay.

                ## Milestones
                1. Trees scored for removal in the inventory checked again in person.
                2. Each one given a verdict: rehabilitate, top-work or remove.
                3. Trees for removal felled and stumps treated or dug as advised.
                4. Replacement plants ordered for the gaps, or the space given to a short crop.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every poorly bearing tree has a recorded verdict and those marked for removal are cleared with replacements planned."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Recheck each tree marked for removal in the inventory"
                - "Give each a verdict of rehabilitate, top-work or remove"
                - "Fell and clear the trees marked for removal"
                - "Order replacements for the gaps"
            - name: Pawpaw ringspot virus response plan
              description: |-
                ## Purpose
                Ringspot virus is spread by aphids and can turn a healthy pawpaw block into mottled, stunted plants within months, often from one infected neighbour. A written plan for spotting, rogueing and isolating, agreed with the extension officer, limits the damage and shapes where and when you plant next.

                ## Milestones
                1. Ringspot symptoms on leaves, stems and fruit photographed for workers.
                2. A rule agreed with the extension officer for removing infected plants.
                3. New blocks sited away from older infected ones and from cucurbit fields where possible.
                4. Infection counts recorded per block to judge the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written ringspot plan with symptom photos, a removal rule and siting rules is in use, with infection counts recorded per block."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Photograph ringspot symptoms for the workers to recognise"
                - "Agree a removal rule with the extension officer"
                - "Site the next pawpaw block away from infected plants"
                - "Count infected plants in each block @recurring(monthly:12)"
            - name: Mango season harvest readiness
              description: |-
                ## Purpose
                Each mango season arrives in a rush, and the first week sets the tone with buyers. Having crates, pickers, transport, buyer orders and a packing spot ready before the first fruit colours avoids fruit falling while you scramble.

                ## Milestones
                1. Expected crates for the season estimated from last year's log.
                2. Pickers booked and briefed on handling and the picking standard.
                3. Crates cleaned, picking poles checked and transport arranged.
                4. First orders confirmed with regular buyers before the first pick.

                ## Notes
                Start from the **Operational checklist** template so the same list is reused every season.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the first mango pick, pickers are booked, crates and transport ready and first orders confirmed with buyers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate crates for the season from last year's log"
                - "Book pickers and brief them on handling"
                - "Clean crates and check picking poles"
                - "Confirm first orders with regular buyers"
            - name: New block planting day
              description: |-
                ## Purpose
                Grafted plants that sit in bags for weeks lose vigour, and trees planted at the end of the rains face a dry season with shallow roots. Preparing holes, stakes, mulch and water before the plants arrive and planting in the first weeks of the rains gives the block its best start.

                ## Milestones
                1. Holes dug and refilled with topsoil and organic matter at the pegged positions.
                2. Stakes, ties, mulch and water ready at the block.
                3. Plants set at the same depth as in the bag with the graft union above ground.
                4. Each tree labelled and its number added to the inventory.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All plants for the new block are in the ground in the early rains, staked, mulched, labelled and added to the inventory."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Dig and refill the planting holes at the pegs"
                - "Bring stakes, ties, mulch and water to the block"
                - "Plant each tree with the graft union above the soil"
                - "Label every tree and add it to the inventory"
            - name: First consignment to a hotel or juice processor
              description: |-
                ## Purpose
                Moving from roadside and market sales to a hotel or processor means meeting a specification, a delivery day and an invoice on terms. Agreeing exactly what they want and delivering a first consignment that matches it builds an account that can take a large share of the crop.

                ## Milestones
                1. The buyer's specification for size, ripeness, packing and volume written down.
                2. A sample delivered and feedback recorded.
                3. The first full consignment graded, packed and delivered on the agreed day.
                4. The invoice sent and payment date noted.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first consignment meeting the buyer's written specification is delivered on time and invoiced, with feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the buyer's size, ripeness and packing specification"
                - "Deliver a sample and record the feedback"
                - "Grade and pack the first consignment to the specification"
                - "Send the invoice and note the payment date"
            - name: Orchard recovery after a storm
              description: |-
                ## Purpose
                After a hurricane or tropical storm, leaning young trees can often be saved if they are straightened and staked within days, and broken limbs left jagged invite rot. A recovery round on fruit trees, with photographs for insurance or relief claims, saves trees that would otherwise be lost.

                ## Milestones
                1. Every block walked and damage photographed tree by tree.
                2. Leaning young trees straightened and staked while the soil is still soft.
                3. Broken limbs cut cleanly and uprooted trees cleared.
                4. A damage list with tree numbers sent for insurance or relief claims.

                ## Notes
                Wait until the site is safe; fallen power lines and unstable trees come first.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within two weeks of a storm every block is photographed, leaning trees staked, broken limbs cut and a numbered damage list filed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Photograph storm damage in every block by tree number"
                - "Straighten and stake leaning young trees"
                - "Cut broken limbs cleanly back to sound wood"
                - "Send the damage list for insurance or relief claims"
            - name: Fruit stall at a mango festival or agricultural show
              description: |-
                ## Purpose
                Thousands of buyers come to mango festivals and agricultural shows ready to taste and pay for unusual varieties, and they are where hotels and processors meet growers. A well-planned stall sells fruit at a premium and collects contacts for the rest of the year.

                ## Milestones
                1. A stall booked and the organiser's rules read.
                2. A display planned with variety names, prices and tasting samples.
                3. Enough ripe fruit picked and packed for the day.
                4. Contacts of interested buyers collected and followed up within a week.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The stall is staffed for the full show, sales are recorded, and every buyer contact collected is followed up within a week."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Book a stall and read the organiser's rules"
                - "Make labels with variety names and prices"
                - "Pick and pack ripe fruit the day before"
                - "Follow up every buyer contact within a week"
            - name: Backyard trees into a small commercial orchard
              description: |-
                ## Purpose
                Many growers start with a few productive trees around the house and a neighbour asking to buy fruit. Turning that into a small business means counting what you have, finding regular buyers and planting a first proper block, without overreaching before the trees prove themselves.

                ## Milestones
                1. Current trees and last season's informal sales listed.
                2. Two regular buyers found who will take fruit each week in season.
                3. A first block of twenty to fifty grafted trees planned on available land.
                4. A simple record of sales started.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two regular buyers are taking fruit and a first planned block of grafted trees is in the ground with sales recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List your trees and what you sold from them last season"
                - "Find two buyers who will take fruit each week"
                - "Plan a first block of twenty to fifty grafted trees"
                - "Start a notebook for every sale"
            - name: Taking on inherited family land with old fruit trees
              description: |-
                ## Purpose
                Inherited land often comes with huge old mango, avocado and breadfruit trees, family members who pick freely and no clear agreement on who owns the fruit. Settling who decides, who picks and how income is shared before investing avoids family conflict and lost fruit.

                ## Milestones
                1. The family members with an interest in the land and its trees listed.
                2. A family meeting held to agree who manages the orchard.
                3. Picking and sharing rules written down and agreed.
                4. The trees inventoried and a first plan shared with the family.

                ## Notes
                Questions of title and inheritance belong with a lawyer; this project is about running the trees fairly in the meantime.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written family agreement names the orchard manager and sets picking and income sharing rules."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List family members with an interest in the trees"
                - "Arrange a family meeting about the orchard"
                - "Write down picking and sharing rules everyone agrees"
                - "Share the tree inventory and first plan with the family"
            - name: Running an orchard alongside a day job
              description: |-
                ## Purpose
                Fruit trees forgive absence better than vegetables, which is why many part-time farmers choose them, but harvest windows and fruit fly do not wait for the weekend. A part-time plan picks fruits with forgiving harvest, sets weekend routines and finds a caretaker or picker for weekday work.

                ## Milestones
                1. Weekly orchard hours available honestly estimated.
                2. Fruits chosen or kept that suit weekend picking.
                3. A trusted caretaker or picker arranged for weekday checks in season.
                4. A weekend routine written covering traps, picking and sales.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written part-time plan shows weekly hours, chosen fruits, a weekday caretaker and a weekend routine."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate the hours you can give the orchard each week"
                - "List which fruits suit weekend picking"
                - "Arrange a caretaker for weekday checks in season"
                - "Write your weekend routine for traps, picking and sales"
            - name: Short crops for income while young trees grow
              description: |-
                ## Purpose
                Grafted mango and avocado take three to five years to give real income, which is a long wait for a new orchard owner with a loan. Interplanting pawpaw, pineapple or short vegetables between young trees can pay for the slashing and watering, provided they do not compete with the trees or carry their pests.

                ## Milestones
                1. Short crops that suit the young orchard and have buyers listed.
                2. A planting plan that keeps a clear ring around each young tree.
                3. Income and costs from the short crop recorded.
                4. A date agreed for ending interplanting as tree canopies close.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A short crop is planted between young trees with clear tree rings, its income and costs recorded and an end date set."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List short crops that suit the young orchard"
                - "Plan interplanting with a clear ring around each tree"
                - "Record income and costs from the short crop"
                - "Agree the year interplanting stops"
            - name: Selling fruit through a growers' group
              description: |-
                ## Purpose
                Few single growers have the volume or the consistency to supply a processor or exporter, but a group of neighbours can. Joining or forming a fruit growers' group shares transport, packing and negotiation, provided the rules on quality and payment are clear from the start.

                ## Milestones
                1. Nearby growers of the same fruits identified.
                2. An existing group joined, or a first meeting held to form one.
                3. Shared quality, packing and payment rules written down.
                4. A first joint sale made and the shares paid out.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A fruit growers' group with written quality and payment rules has made one joint sale with shares paid."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List nearby growers of the same fruits"
                - "Join an existing group or call a first meeting"
                - "Write shared quality, packing and payment rules"
                - "Make a first joint sale and pay out the shares"
            - name: Fruit fly protocols for export mangoes
              description: |-
                ## Purpose
                Importing countries often require fresh mango to come from registered orchards and to be treated against fruit fly, commonly with a hot water dip at an approved facility. Learning the requirements of the target market and preparing the orchard records they demand is the first step before any export contract.

                ## Milestones
                1. The target market's entry requirements for mango confirmed with the plant protection authority.
                2. The nearest approved treatment facility and its intake rules identified.
                3. Orchard registration, trap records and spray records brought up to the required standard.
                4. A trial consignment treated and inspected.

                ## Notes
                Requirements change and vary by market; always confirm with the national plant protection organisation rather than a buyer's summary.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The target market's mango entry rules are confirmed in writing, records meet them, and one trial consignment passes treatment and inspection."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the plant protection authority for the target market's mango rules"
                - "Find the nearest approved treatment facility"
                - "Bring trap and spray records up to the required standard"
                - "Send a trial consignment for treatment and inspection"
            - name: Avocado root rot management plan
              description: |-
                ## Purpose
                Phytophthora root rot is one of the main killers of avocado in wet tropical soils, showing as small pale leaves, dieback and fruit that stays small. A plan built with the extension officer around drainage, mounding, mulch, resistant rootstocks and clean planting material can keep a block alive where it would otherwise fail.

                ## Milestones
                1. Affected trees mapped and samples sent for diagnosis.
                2. Drainage improved around affected trees and new plantings mounded.
                3. Thick mulch kept away from trunks in affected blocks.
                4. Any treatment agreed with the extension officer applied to the label and recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Affected avocado trees are diagnosed and mapped, drainage improved, and any treatment recorded with date and product."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Map trees with pale leaves and dieback"
                - "Send root and soil samples for diagnosis"
                - "Improve drainage around affected trees"
                - "Record any treatment applied with date and product"
            - name: Mother trees and your own budwood block
              description: |-
                ## Purpose
                The best tree on the farm, the one that bears every year with clean, sweet fruit, is worth more than any catalogue variety because it is proven in your soil. Recording its yield over several seasons and keeping a small block of grafted copies gives you budwood for every future planting.

                ## Milestones
                1. Candidate mother trees shortlisted from the picking log.
                2. Yield, fruit quality and disease scored for each over at least two seasons.
                3. The best trees labelled permanently and recorded.
                4. A small budwood block grafted from them and protected.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least two mother trees are recorded with two seasons of yield and quality scores and a grafted budwood block is planted."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Shortlist mother trees from the picking log"
                - "Score yield, fruit quality and disease each season"
                - "Label the best trees permanently"
                - "Graft a small budwood block from them"
            - name: Tree-by-tree yield records
              description: |-
                ## Purpose
                Block totals hide the fact that a few trees often carry most of the crop while others give almost nothing. Recording yield per numbered tree, even roughly, shows which trees to prune, feed, top-work or remove and gives real figures to a buyer or lender.

                ## Milestones
                1. Picking logs extended to record crates per tree number.
                2. A full season of per-tree yields recorded.
                3. Trees ranked within each block by yield.
                4. Actions decided for the bottom tenth of trees.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A full season of yield per tree number is recorded and ranked, with an action chosen for the lowest tenth."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Add tree numbers to the picking log"
                - "Record crates per tree for a full season"
                - "Rank trees within each block by yield"
                - "Choose an action for the lowest tenth"
---

# Tropical Fruit Orchards

Tropical Fruit Orchards is for anyone growing mango, avocado, pawpaw, pineapple, soursop, guava, passion fruit and the other fruit that does well in Caribbean heat, from the family with a dozen old Julie and Starch trees behind the house to the grower planting grafted blocks for hotels and juice processors. The projects start with knowing what you have: a block map, a tree inventory, the fruits and varieties that suit your land, and a flowering and harvest calendar. Then come the routines that protect the crop, the grafting, pruning and picking skills, planting and variety decisions, the harvest and first buyer milestones, situations such as inherited trees or part-time ownership, and specialist work on export fruit fly treatment, root rot and your own budwood.

What repeats is the weekly fruit fly trap check and dry season watering, the harvest round in season, monthly tree walks, sales records and slashing, and yearly leaf tests, pruning and pawpaw and pineapple replanting. The Purchase decision, Vendor, Metrics log and Operational checklist templates pair with the projects that point to them. Fertiliser, fungicide, insecticide and flower induction choices always go through the product label and your extension officer, never a rate from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
