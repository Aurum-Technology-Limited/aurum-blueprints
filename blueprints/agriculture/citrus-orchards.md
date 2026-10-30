---
id: agriculture.citrus-orchards
name: Citrus Orchards
description: "A citrus orchard run block by block: rootstocks and clean nursery trees, greening and psyllid scouting, leaf-led nutrition, water at flowering, maturity testing and harvest sold to juice or fresh buyers."
category: business
version: 1.0.0
tags: [agriculture, citrus-orchards, small-business, citrus, citrus-greening, orchard, rootstocks, juice-fruit]
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
        - name: Citrus Orchards
          description: "Running a citrus orchard: rootstocks and varieties, irrigation, nutrition, watching for disease including citrus greening, harvest, and juice or fresh market sales."
          projects:
            - name: Block map and tree census of the orchard
              description: |-
                ## Purpose
                Most citrus decisions, from where to scout to which trees to reset, are made block by block, and many groves have never been counted since they were planted. A sketch map with numbered blocks and a row by row count of healthy, weak, dead and missing trees turns a vague sense of the place into a baseline you can manage against.

                ## Milestones
                1. A map of the orchard with every block numbered and its boundaries, roads and drains marked.
                2. Each block's row count and planting distance recorded.
                3. Every tree position counted as healthy, declining, dead or missing.
                4. A summary table of trees and gaps per block saved with the map.

                ## Notes
                A phone with a free GPS mapping app is enough. Count in the dry season when you can walk every row, and mark the row ends with paint so next year's count starts in the same place.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbered block map and a per-block count of healthy, declining, dead and missing trees exist and cover the whole orchard."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the orchard boundary and the main roads on paper or in a mapping app"
                - "Number each block and paint a mark on the first tree of every row"
                - "Walk each row and score every tree position as healthy, declining, dead or missing"
                - "Recount every block and update the census table @recurring(yearly)"
            - name: Rootstock and variety record for each block
              description: |-
                ## Purpose
                Rootstock decides how a tree copes with tristeza, foot rot, salty water and heavy clay, yet on older farms nobody remembers what was planted. Writing down the scion variety, rootstock, planting year and nursery source for each block means every later choice about pruning, replanting and selling starts from fact.

                ## Milestones
                1. The variety and rootstock known or reasonably established for every block.
                2. Planting year and nursery source noted where any record or memory exists.
                3. Blocks of unknown rootstock flagged for checking with an extension officer.
                4. The record added beside the block map.

                ## Notes
                Old nursery invoices, a previous owner, neighbours who planted at the same time and the shape of the graft union are the usual clues. Sour orange rootstock is common in old Caribbean groves and is worth knowing about because of tristeza.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every block on the map has a recorded variety, rootstock or a flag saying it is unknown, plus a planting year where known."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the farm office for old nursery invoices and planting notes"
                - "Ask the previous owner or longest-serving worker what each block was planted on"
                - "Photograph the graft union on three trees in every block of unknown rootstock"
                - "Write the variety, rootstock and planting year for each block beside the map"
            - name: Orchard site check for citrus before planting
              description: |-
                ## Purpose
                Citrus planted on a shallow, waterlogged or salty site will struggle for its whole thirty-year life, and foot rot thrives where water sits around the trunk. Checking soil depth, drainage, slope, wind exposure and water quality before buying a single tree tells you which ground suits citrus and which should grow something else.

                ## Milestones
                1. Test pits dug in each proposed block, with the depth to hard layers or standing water noted.
                2. A water sample from the irrigation source sent for salinity and sodium testing.
                3. Wet season ponding and wind corridors marked on the map.
                4. A yes, no or yes with drainage verdict written for each proposed block.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each proposed planting block has recorded soil depth, drainage, water quality and wind notes and a written plant or do not plant verdict."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Dig a test pit in the lowest corner of each proposed block"
                - "Note the depth to clay pan, rock or standing water in each pit"
                - "Send an irrigation water sample to a lab for salinity and sodium"
                - "Walk the land after heavy rain and mark where water ponds"
            - name: Choosing rootstocks for tristeza and foot rot risk
              description: |-
                ## Purpose
                Before ordering trees for a new block or a replant, pick the rootstock to match your soil and disease pressure rather than whatever the nursery has spare. Sour orange suits many soils but is badly hit by tristeza where the brown citrus aphid is present, while Swingle, Carrizo, Cleopatra, Volkamer and newer stocks each trade vigour, fruit quality and soil tolerance differently.

                ## Milestones
                1. The local status of tristeza and its aphid vector confirmed with the extension service.
                2. A shortlist of three rootstocks suited to your soil type and drainage.
                3. Each shortlisted rootstock scored on disease tolerance, vigour, fruit quality and availability.
                4. A rootstock chosen for each planned block and the reason recorded.

                ## Notes
                Ask growers in your district what has survived on soil like yours over twenty years. Their dead trees are better evidence than any catalogue.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rootstock is chosen for every planned block, with a scored comparison of at least three options kept on file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the extension officer whether tristeza and the brown citrus aphid are present locally"
                - "List three rootstocks recommended for your soil and drainage"
                - "Score each rootstock on disease tolerance, vigour, fruit quality and supply"
                - "Visit one neighbouring grove planted on your top choice"
            - name: Variety mix for juice, fresh fruit and limes
              description: |-
                ## Purpose
                Orange, grapefruit, mandarin and lime varieties ripen at different times and suit different buyers, so the mix you plant decides your cash flow for decades. Matching early and late oranges for a juice plant, or limes and specialty fruit for hotels and fresh markets, to the buyers you can actually reach avoids an orchard full of fruit nobody wants in the same three weeks.

                ## Milestones
                1. The buyers within reach listed with the fruit, sizes and months each one wants.
                2. Harvest windows for candidate varieties sketched on a twelve-month chart.
                3. A planting mix chosen that spreads picking over at least two seasons.
                4. The chosen mix and expected harvest months written into the planting plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written variety mix with expected harvest months for each variety and a named buyer type for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every juice plant, packer, hotel and market buyer you could deliver to"
                - "Ask two buyers which citrus varieties and months they pay best for"
                - "Chart the usual harvest window of each candidate variety across a year"
                - "Choose the planting mix and note the reason for each variety"
            - name: Sourcing certified disease-free nursery trees
              description: |-
                ## Purpose
                Greening and tristeza travel into new orchards inside nursery trees, and a cheap budded plant from an open-air nursery can infect a block before it bears. Buying from a certified, insect-screened nursery with traceable budwood costs more per tree and is still the cheapest insurance a new planting has.

                ## Milestones
                1. The national rules on citrus nursery certification and plant movement confirmed.
                2. Two or three screened nurseries visited or contacted, with their budwood source recorded.
                3. Prices, delivery dates and rootstock and variety availability compared.
                4. An order placed with written confirmation of variety, rootstock and certification.

                ## Notes
                Start from the **Purchase decision** template. Order early: certified nurseries often book out a year ahead, and trees are budded to order.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An order for certified trees from a screened nursery is confirmed in writing with variety, rootstock, quantity and delivery date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the plant protection unit for a list of certified citrus nurseries"
                - "Ask each nursery where its budwood comes from and how its screen house is checked"
                - "Compare price, delivery date and certification paperwork for each nursery"
                - "Place the order and file the written confirmation"
            - name: Planting layout, spacing and windbreak plan
              description: |-
                ## Purpose
                Tree spacing fixes how soon the orchard pays back, how machinery and pickers move and how hard it is to spray and scout. A drawn layout with row direction, in-row and between-row spacing, roads, drains and windbreak lines lets you count trees, cost the planting and avoid crowding that turns blocks into dark, unpickable hedges by year twelve.

                ## Milestones
                1. Row direction set for drainage, sun and wind.
                2. In-row and between-row spacing chosen for the rootstock, variety and equipment.
                3. Headlands, access roads and drains drawn so a vehicle can reach every block.
                4. Windbreak lines and species chosen for the exposed sides.
                5. Total tree numbers per block calculated from the layout.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scaled planting layout shows spacing, roads, drains and windbreaks, with tree numbers per block that match the nursery order."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure the width of your tractor and sprayer to set the minimum row spacing"
                - "Draw rows, headlands and drains on the block map"
                - "Choose windbreak species that will not host citrus pests"
                - "Count the trees each block will hold and match it to the nursery order"
            - name: Baseline leaf and soil sampling by block
              description: |-
                ## Purpose
                Leaf analysis is the most reliable guide to what a citrus tree is short of, but only if leaves of the right age are taken from the right flush. A first round of leaf samples, with soil samples from the same blocks, shows which blocks are hungry, which are being overfed and where pH or salt is holding trees back.

                ## Milestones
                1. The lab's instructions for citrus leaf sampling obtained and read.
                2. Leaves of the correct age collected from at least twenty trees per block.
                3. Soil samples taken from the drip line of the same trees.
                4. Lab results received and filed against each block on the map.

                ## Notes
                Most labs want leaves from non-fruiting terminals of a particular flush, a few months old. Ask before you pick, and keep samples cool and dry on the way to the lab.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Leaf and soil results are on file for every bearing block, each sample labelled with block, date and flush."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Call the soil and plant lab and ask how they want citrus leaves sampled"
                - "Tag twenty sample trees in each block in a zigzag pattern"
                - "Pick and bag the leaves and soil the lab asked for, labelled by block"
                - "File the results against each block and note anything outside the normal range"
            - name: Citrus greening and psyllid baseline survey
              description: |-
                ## Purpose
                Huanglongbing, called citrus greening, is spread by the Asian citrus psyllid and has no cure, and many Caribbean growers only realise how far it has spread when yields collapse. A first systematic walk through every block for psyllids, blotchy mottled leaves and lopsided, bitter fruit tells you where you stand and which blocks need action first.

                ## Milestones
                1. Every block walked with a set number of trees checked for psyllids and symptoms.
                2. Suspect trees tagged and their positions marked on the block map.
                3. Leaf samples from the most suspicious trees sent for laboratory testing where available.
                4. An estimated percentage of affected trees recorded for each block.

                ## Notes
                Learn the difference between greening mottle, which is uneven across the leaf midrib, and zinc or manganese deficiency, which looks the same on both sides. The extension service can confirm.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A survey sheet for every block records psyllid presence, tagged suspect trees and an estimated percentage affected."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the extension office for a greening symptom guide and how to submit samples"
                - "Check the same number of trees in each block for psyllids and mottled leaves"
                - "Tag suspect trees with flagging tape and mark them on the map"
                - "Send leaf samples from the five most suspicious trees for testing"
            - name: Orchard calendar for flush, flowering and harvest
              description: |-
                ## Purpose
                In the Caribbean, citrus flowering usually follows the stress of the dry season and new flushes follow rain, so the orchard's year is set by the weather rather than by the month. A one-page calendar showing when each block usually flushes, flowers, sets fruit and is picked lets you time scouting, feeding, water and labour before each moment arrives.

                ## Milestones
                1. Past flowering and harvest dates gathered for each block from records or memory.
                2. Main and secondary flush periods marked against the wet and dry seasons.
                3. Scouting, feeding, pruning and harvest windows placed on a twelve-month chart.
                4. The calendar printed and pinned where the crew meets each morning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month orchard calendar marks flush, flowering, fruit set and harvest for each variety and is posted for the crew."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the months each block flowered and was picked last year"
                - "Mark the usual wet and dry season months on a twelve-month chart"
                - "Place scouting, feeding, pruning and harvest windows on the chart"
                - "Compare the calendar with what actually happened and redraw it @recurring(yearly)"
            - name: Psyllid and new flush scouting round
              description: |-
                ## Purpose
                Psyllids breed only on soft new flush, so a few weeks of missed scouting after rain can let a population explode and spread greening across a block. A fixed weekly walk on a set route, checking flush on a sample of trees in every block, catches the build-up while the extension officer can still help you act on it.

                ## Milestones
                1. A scouting route fixed that samples the same trees in every block.
                2. A simple tally sheet for flush stage, psyllid adults, nymphs and natural enemies in use.
                3. Weekly counts recorded for a full flush cycle.
                4. Action thresholds agreed with the extension officer and written on the sheet.

                ## Notes
                Tap a branch over a white clipboard to count adults. Check the edges of blocks nearest neighbouring groves and wild citrus first, because that is where psyllids arrive.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly psyllid and flush counts for every block are on the tally sheet for at least twelve consecutive weeks."
                cadence: rolling
              tasks:
                - "Mark the scouting trees in each block with a coloured tag"
                - "Walk the scouting route and record flush and psyllid counts @recurring(weekly:tue)"
                - "Add up the month's counts by block and compare with the action threshold @recurring(monthly:5)"
                - "Show the tally to the extension officer at the next visit"
            - name: Monthly greening symptom walk and tree tagging
              description: |-
                ## Purpose
                Greening spreads tree to tree over months, and a block where three trees showed symptoms in January may have thirty by December. A monthly walk looking for new yellow shoots, mottled leaves and misshapen fruit, with each new suspect tagged and mapped, gives you the spread rate that every later decision depends on.

                ## Milestones
                1. A monthly symptom walk covering every block in turn.
                2. New suspect trees tagged with a dated label and added to the map.
                3. A running count of affected trees per block kept month by month.
                4. Blocks where the count is rising fastest flagged for discussion with the extension officer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month by month count of greening suspect trees per block exists for at least six months, with every tree tagged and mapped."
                cadence: rolling
              tasks:
                - "Make a stock of dated tags and a clipboard sheet for symptom walks"
                - "Walk the orchard looking for new greening symptoms and tag each suspect tree @recurring(monthly:12)"
                - "Add each month's new suspect trees to the block count"
                - "Flag any block where suspect trees doubled within three months"
            - name: Irrigation timing for flowering and fruit set
              description: |-
                ## Purpose
                Trees need a dry spell to flower well, then steady moisture from bloom through fruit set, and water stress in those weeks drops young fruit by the bucketful. Watching soil moisture in the bearing blocks and watering to the tree's stage, rather than by habit, protects the crop when it is most fragile.

                ## Milestones
                1. Soil moisture checked with a probe, tensiometer or the hand-feel test in each bearing block.
                2. The dry spell before flowering and the watering start date agreed for each block.
                3. Watering kept steady from bloom until fruit reaches marble size.
                4. Fruit set compared between blocks watered on time and late.

                ## Notes
                The farm irrigation system itself belongs with your pump and drip plans. This project is about when citrus needs water, not how the system is built.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A soil moisture log covers bloom to fruit set for every bearing block, with watering dates matched to flowering dates."
                cadence: cyclic
              tasks:
                - "Choose one check point per bearing block and mark it with a stake"
                - "Check soil moisture at each stake and water blocks that are drying out @recurring(weekly:fri)"
                - "Note the date each block reaches full bloom"
                - "Count fruit set on five tagged branches per block a month after bloom"
            - name: Yearly nutrition programme from leaf analysis
              description: |-
                ## Purpose
                Feeding goes wrong both ways: too little and yields fade, too much and money is washed into the drains while greening-weakened roots cannot use it. Turning each year's leaf results into a written programme, agreed with an agronomist or extension officer, ties every bag and foliar spray to a measured need.

                ## Milestones
                1. This year's leaf results compared with last year's for every block.
                2. A written programme of products and timings agreed with an agronomist or extension officer.
                3. Applications recorded by block and date as they happen.
                4. The programme cost per block totalled at the end of the year.

                ## Notes
                Rates come from the product label and your agronomist, not from a neighbour's routine. Micronutrients such as zinc, manganese and magnesium are often the limiting ones on Caribbean citrus soils.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written nutrition programme based on current leaf results is on file, with every application recorded by block and date."
                cadence: cyclic
              tasks:
                - "Book the yearly citrus leaf sampling with the lab @recurring(yearly)"
                - "Set this year's leaf results beside last year's in one table"
                - "Book a meeting with the agronomist to agree the programme"
                - "Record each application by block, date and product as it goes on"
            - name: Tree row weed control and ground cover
              description: |-
                ## Purpose
                Grass and vines climbing into the canopy compete for water, hide psyllids and keep trunks damp, which invites foot rot. A clear strip under the trees with a managed ground cover between rows keeps competition down, makes scouting easy and protects the soil from heavy rain.

                ## Milestones
                1. A target width of clean strip agreed for young and bearing trees.
                2. Between-row cover chosen and mowing height set.
                3. A mowing and strip cleaning rotation planned block by block.
                4. Vines and grass removed from every trunk.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every block has a clean strip around the trunks and a mown cover between rows on the planned rotation for six months."
                cadence: rolling
              tasks:
                - "Decide the clean strip width for young trees and for bearing trees"
                - "Pull vines out of the canopy in the worst block first"
                - "Mow the inter-rows and clean the tree strips on the rotation @recurring(monthly:20)"
                - "Note which blocks regrow fastest and adjust the rotation"
            - name: Trunk and root health checks for foot rot
              description: |-
                ## Purpose
                Phytophthora foot rot and gummosis kill citrus slowly from the base, and the first signs, gum oozing from cracked bark and a thin canopy, are easy to miss under weeds. A quarterly walk checking trunks, graft unions and the soil around them finds affected trees while treatment advice can still save them.

                ## Milestones
                1. Every trunk in the bearing blocks inspected at the soil line and graft union.
                2. Trees with gumming, cracked bark or exposed rotten roots tagged and mapped.
                3. Soil and mulch pulled back from trunks where it was piled against the bark.
                4. Affected trees discussed with the extension officer and the advice recorded.

                ## Notes
                Wet feet are the main driver. Trees in low spots and those planted too deep or with the graft union buried are the usual first cases.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly trunk inspections are recorded for every bearing block, with affected trees tagged and advice noted."
                cadence: rolling
              tasks:
                - "Learn the signs of gummosis and foot rot from the extension service guide"
                - "Inspect trunks and graft unions in every block and tag affected trees @recurring(quarterly)"
                - "Pull soil and mulch back from any trunk where it touches the bark"
                - "Record the extension officer's advice for each affected tree"
            - name: Sprout, skirt and deadwood pruning rounds
              description: |-
                ## Purpose
                Rootstock sprouts steal vigour, low skirts drag fruit onto wet ground and dead wood harbours fungal disease and slows pickers. Light pruning rounds each quarter, separate from heavy hedging, keep trees open and clean without cutting into the crop.

                ## Milestones
                1. Rootstock sprouts removed from every tree below the graft union.
                2. Skirts lifted so the lowest fruit hangs clear of the ground.
                3. Dead and crossing wood cut out of the bearing blocks.
                4. Prunings removed or chipped away from the tree rows.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pruning log shows each block cleared of sprouts, low skirts and deadwood at least four times in a year."
                cadence: rolling
              tasks:
                - "Sharpen and disinfect secateurs and loppers before the first round"
                - "Remove rootstock sprouts, low skirts and deadwood block by block @recurring(quarterly)"
                - "Chip or remove the prunings from the tree rows"
                - "Note blocks that need heavier pruning for the hedging decision"
            - name: Pre-harvest maturity sampling by block
              description: |-
                ## Purpose
                Citrus does not ripen after picking, and in the tropics green-skinned fruit can be fully mature while coloured fruit can still be sour. Sampling each block for juice content, sugar and acid in the weeks before harvest shows when it meets the buyer's standard and when it will earn the most.

                ## Milestones
                1. The buyer's maturity standard for each variety written down.
                2. A sample of fruit picked from set positions in each block.
                3. Brix, acid and ratio measured or tested by the buyer's lab.
                4. A pick order for the blocks set from the results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Maturity results for every block are recorded at least twice before harvest, and the pick order follows them."
                cadence: cyclic
              tasks:
                - "Ask each buyer for their maturity standard by variety"
                - "Pick a twenty-fruit sample from each block in harvest season and test it @recurring(monthly:8)"
                - "Record Brix, acid and ratio against each block"
                - "Set the pick order from the results"
            - name: Block yield and pound solids log
              description: |-
                ## Purpose
                Without yields by block it is impossible to tell whether a greening programme, new feeding plan or replanting is paying off. A simple log of boxes, tonnes or pound solids delivered from each block, entered as each load leaves, builds the evidence for every investment decision in the orchard.

                ## Milestones
                1. A log set up with block, date, variety, quantity, buyer and price.
                2. Every delivery from the season entered within a day of the delivery slip.
                3. Yield per tree and per acre worked out for each block.
                4. This season compared with last season block by block.

                ## Notes
                Start from the **Metrics log** template. Keep the processor's delivery slips: they carry the weights and juice test results the log depends on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A season's deliveries are logged by block, with yield per tree and per acre calculated and compared with the previous season."
                cadence: rolling
              tasks:
                - "Set up the yield log with block, date, variety, quantity, buyer and price"
                - "Enter the month's delivery slips into the yield log by block @recurring(monthly:28)"
                - "Work out the season's yield per tree and per acre for each block @recurring(yearly)"
                - "Write two sentences on which blocks rose or fell and why"
            - name: Harvest day routine for picking crews
              description: |-
                ## Purpose
                Pickers working fast in the heat bruise fruit, tear stems and drop fruit in the dirt, and the damage shows as rot and peel marks a week later. A written harvest day routine, from ladder safety to bin filling and the clipping rule for fresh fruit, keeps quality and safety the same whoever is leading the crew.

                ## Milestones
                1. A one-page routine covering start time, block order, ladders, bins and breaks.
                2. Clipping and handling rules written separately for juice and fresh fruit.
                3. A count and tally system for each picker's bins or bags agreed.
                4. The routine walked through with the crew lead before the first pick.

                ## Notes
                Start from the **Operational checklist** template. Never pick fresh-market fruit wet: peel oil damage shows up as dark blotches after packing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written harvest checklist is in the crew lead's hands and followed on every pick day of one season."
                cadence: rolling
              tasks:
                - "Write the harvest day order from crew arrival to the last bin loaded"
                - "Add ladder safety and heat break rules to the checklist"
                - "Agree how each picker's bins are counted and recorded for pay"
                - "Walk the checklist through with the crew lead in the field"
            - name: Recognising greening symptoms versus nutrient deficiency
              description: |-
                ## Purpose
                Greening, zinc shortage, manganese shortage and even foot rot all turn citrus leaves yellow, and misreading them leads to the wrong spend or the wrong tree being pulled. Learning to tell the asymmetric blotchy mottle of greening from symmetrical deficiency patterns, alongside lopsided fruit and aborted seeds, makes every symptom walk worth more.

                ## Milestones
                1. A reference set of photos of greening, zinc, manganese, magnesium and nitrogen symptoms collected.
                2. A field session with an extension officer or experienced grower comparing real trees.
                3. Twenty leaves from your own orchard sorted correctly against the reference set.
                4. A short symptom key written for the crew.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can sort twenty mixed leaves from the orchard into greening and deficiency types with the extension officer agreeing on at least eighteen."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download an extension guide with photos of greening and nutrient symptoms"
                - "Collect twenty yellowing leaves from different trees and lay them out"
                - "Ask the extension officer to walk a block with you and check your calls"
                - "Write a one-page symptom key for the crew"
            - name: Common citrus pests and their natural enemies
              description: |-
                ## Purpose
                Rust mites, leafminers, scales, aphids, root weevils and fruit flies each damage citrus differently, and many are kept down by ladybirds, lacewings and parasitic wasps that a careless spray wipes out. Knowing the main pests and their enemies on sight lets you report accurately and decide with your advisor whether anything needs doing.

                ## Milestones
                1. A list of the citrus pests recorded in your country obtained from the extension service.
                2. Each major pest identified on sight, with a photo from your own orchard where possible.
                3. The main natural enemies recognised in the field.
                4. A note made of which pests are a threat to fresh fruit appearance only and which to tree health.

                ## Notes
                A hand lens is essential for rust mites and scale crawlers. Rust mite damage on peel shows as a dull bronze or russet finish.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A photo sheet of at least eight pests and four natural enemies found in your orchard, each correctly named."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Buy a ten-times hand lens and keep it in the scouting bag"
                - "Ask the extension service for the list of citrus pests found locally"
                - "Photograph every pest and natural enemy you find for a month"
                - "Have the extension officer confirm the names on your photo sheet"
            - name: Canopy diseases of scab, melanose and greasy spot
              description: |-
                ## Purpose
                Wet Caribbean seasons favour fungal diseases that scar fruit, drop leaves early and cut the price of fresh fruit sharply. Learning when each infection happens, which varieties are most at risk and how dead wood and canopy airflow affect them lets you plan with your advisor instead of reacting after the damage is visible.

                ## Milestones
                1. The main canopy diseases recognised on leaves, twigs and fruit.
                2. The flush and fruit stages when each disease infects noted on the orchard calendar.
                3. Susceptible varieties and blocks marked.
                4. A prevention plan for the next wet season agreed with an advisor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The infection window for each canopy disease is on the orchard calendar and a prevention plan for the next wet season is agreed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect leaves and fruit with spots or scabs from three different blocks"
                - "Match each sample to scab, melanose, greasy spot or something else"
                - "Mark each disease's infection window on the orchard calendar"
                - "Agree a wet season prevention plan with your advisor"
            - name: How processors grade and pay for juice fruit
              description: |-
                ## Purpose
                Many juice processors pay by the pound solids, the weight of sugar and acid in the juice, rather than by box weight, so two loads of the same size can earn very different money. Understanding how your processor samples, tests and prices fruit shows where better timing and fruit quality add income.

                ## Milestones
                1. The processor's payment formula and sampling method written down.
                2. A delivery slip read line by line and every figure understood.
                3. The difference in pay between your best and worst block per box worked out.
                4. Two changes identified that could raise pay per box.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written explanation of your processor's pricing formula and a per-block comparison of pay per box from last season."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the processor's field officer to explain the payment formula"
                - "Read last season's delivery slips and note juice yield and Brix on each"
                - "Work out pay per box for your best and worst block"
                - "List two changes in timing or quality that could raise pay"
            - name: Reading a citrus leaf analysis report
              description: |-
                ## Purpose
                Lab leaf reports are a page of numbers in units few growers ever learn, and the money is in reading which nutrients are low, high or out of balance. Learning the normal ranges for citrus and how one nutrient affects another lets you ask your agronomist the right questions and catch an obvious error.

                ## Milestones
                1. The lab's citrus reference ranges obtained alongside your report.
                2. Each nutrient on your report marked as low, in range or high.
                3. Interactions such as high potassium suppressing magnesium understood.
                4. Three questions written for your agronomist before the programme meeting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every nutrient on your latest report is marked low, in range or high against citrus reference values, with three questions ready for your agronomist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lab for its citrus leaf reference ranges"
                - "Mark each nutrient on your report as low, in range or high"
                - "Ask the agent to explain the main nutrient interactions on the report in plain language"
                - "Write three questions for the agronomist"
            - name: Budding and grafting citrus by hand
              description: |-
                ## Purpose
                Anyone who can bud and graft can rescue a broken tree, topwork a poor variety and raise replacement trees without waiting a year for a nursery. Learning T-budding and chip budding on practice rootstocks, under the eye of someone experienced, is a skill that pays back over the life of the orchard.

                ## Milestones
                1. A budding knife, tape and practice rootstocks obtained.
                2. A lesson taken from an experienced budder or extension trainer.
                3. Twenty practice buds made and the take rate recorded.
                4. A take rate of at least two thirds reached on a second batch.

                ## Notes
                Only take budwood from trees tested free of greening and tristeza, or from a certified source. Grafting with infected wood spreads disease faster than any insect.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A second batch of at least twenty buds shows a recorded take rate of two thirds or better."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Buy a budding knife and budding tape"
                - "Find an experienced budder or extension course willing to teach you"
                - "Make twenty practice buds and label each with the date"
                - "Record the take rate after four weeks and try a second batch"
            - name: Training young trees into a strong frame
              description: |-
                ## Purpose
                The first three years decide a citrus tree's shape for life, and trees left to grow as they like end up with weak crotches that split under a heavy crop or a strong wind. Learning formative pruning, choosing three or four scaffold branches and protecting young trunks gives each tree a frame that carries fruit and survives storms.

                ## Milestones
                1. The principles of formative pruning for young citrus learned from a guide or trainer.
                2. Scaffold branches chosen and marked on a sample of young trees.
                3. Competing shoots and low growth removed on those trees.
                4. The method written up so the crew can repeat it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written formative pruning method exists and has been applied to every young tree in at least one block."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find an extension guide on pruning young citrus trees"
                - "Choose and mark the scaffold branches on ten young trees"
                - "Remove competing shoots and low growth on those trees"
                - "Write the method on one page for the crew"
            - name: Citrus canker and plant quarantine rules
              description: |-
                ## Purpose
                Citrus canker and other notifiable diseases can bring movement controls on fruit, budwood and nursery trees, and a grower who moves material carelessly can be fined or blamed for an outbreak. Knowing what is notifiable in your country, what permits are needed to move plants, and how to report a suspect case keeps you on the right side of the plant protection unit.

                ## Milestones
                1. The list of notifiable citrus pests and diseases in your country obtained.
                2. The rules on moving citrus plants, budwood and fruit between districts written down.
                3. The reporting contact for a suspect case saved in your phone.
                4. The crew told what to report and to whom.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note lists the notifiable citrus diseases, plant movement rules and the reporting contact, and the crew has seen it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the plant protection unit which citrus diseases are notifiable"
                - "Write down the rules for moving citrus plants and budwood"
                - "Save the reporting phone number in your phone and on the shed wall"
                - "Brief the crew on what to report"
            - name: Diagnosing heavy fruit drop and splitting
              description: |-
                ## Purpose
                When a tree sets well and then drops half its fruit, or splits it open in the rains, it loses the crop after most of the season's costs are spent. Recording when and where drop and splitting happen, and comparing it with rain, irrigation, pests and greening, narrows down the cause so the fix is aimed correctly.

                ## Milestones
                1. Dropped fruit counted under tagged trees in each affected block for a month.
                2. Drop dates set beside rainfall, irrigation and scouting records.
                3. Possible causes listed and discussed with the extension officer.
                4. One change agreed and trialled in the worst block.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A month of drop counts under tagged trees is compared with weather and scouting records, and one agreed change is being trialled."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Tag five trees in the worst block and clear the ground beneath them"
                - "Count and cut open dropped fruit under the tagged trees each week"
                - "Set the drop counts beside rainfall and irrigation dates"
                - "Agree one change with the extension officer and trial it"
            - name: Removing or keeping greening-infected trees
              description: |-
                ## Purpose
                Pulling infected trees removes a source of greening but also removes income, and in heavily affected areas some growers keep trees bearing with intensive care instead. Making the decision deliberately, with tree counts, yields, neighbours' situation and advice from the plant protection unit, avoids both a slow spread and a needless loss.

                ## Milestones
                1. The current percentage of affected trees and the spread rate per block set out.
                2. Yields of affected versus healthy trees compared from your records.
                3. The options of removal, intensive care or replanting costed per block.
                4. A written decision for each block, agreed with your advisor.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written per-block decision on removing, keeping or replanting greening-infected trees, with the costs and advisor's view recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the latest greening counts and spread rate for each block"
                - "Compare yields from affected and healthy trees in the same block"
                - "Cost removal, intensive care and replanting for each block"
                - "Record the decision and the advisor's view for each block"
            - name: Resetting missing and declining trees
              description: |-
                ## Purpose
                Any block with one tree in five missing carries the full cost of roads, drains and weeding for four fifths of the fruit. Planting resets into the gaps with clean nursery trees, protected and watered as carefully as a new block, brings the stand back to full count without replanting the whole orchard.

                ## Milestones
                1. Gaps and trees beyond saving counted per block from the census.
                2. Reset trees ordered from a certified nursery on a suitable rootstock.
                3. Old stumps removed and planting holes prepared.
                4. Resets planted, staked, protected and on a watering routine.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every gap recorded in the latest census has a reset tree planted and recorded with variety, rootstock and planting date."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Count gaps and dead trees in each block from the census"
                - "Order reset trees from a certified nursery to match the count"
                - "Prepare the holes and remove old stumps before the trees arrive"
                - "Plan the next round of resets from the new census @recurring(yearly)"
            - name: Topworking old trees to a better variety
              description: |-
                ## Purpose
                Old, low-value trees on a healthy, tolerant rootstock can be converted to a variety buyers pay more for, often bearing again sooner than a replant. Topworking cuts back the old scion and buds or grafts the new variety onto the trunk, using the established root system to save years.

                ## Milestones
                1. Candidate blocks chosen where the rootstock is healthy and the variety is poor value.
                2. The replacement variety and clean budwood source confirmed.
                3. A trial row topworked and the take rate recorded.
                4. A decision made on topworking the rest of the block.

                ## Notes
                Topworking only makes sense on a disease-tolerant rootstock that is free of greening. On sour orange in a tristeza area, a replant is usually the better choice.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A trial row is topworked with the take rate recorded, and a go or stop decision for the rest of the block is written down."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List blocks with healthy rootstock and a low-value variety"
                - "Confirm clean budwood of the new variety from a certified source"
                - "Topwork one trial row and record the date"
                - "Count the takes after six weeks and decide on the rest of the block"
            - name: Rehabilitating a neglected citrus grove
              description: |-
                ## Purpose
                Abandoned and long-neglected groves are common across the region, overgrown with vines, full of deadwood and with no record of what was done. A phased rescue, starting with clearing and a frank tree-by-tree assessment, tells you within a year whether the grove can be brought back or should be replanted.

                ## Milestones
                1. Access roads and tree rows cleared so every tree can be reached.
                2. Each tree assessed as worth saving, doubtful or beyond saving.
                3. Deadwood, vines and sprouts removed from the trees worth saving.
                4. Leaf samples and a greening check done on the restored blocks.
                5. A go or replant decision made after one full season.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "After one season every tree is assessed, the savable ones cleaned and fed, and a written restore or replant decision is made."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Walk the grove and mark which rows can be reached"
                - "Hire clearing labour for roads and tree rows"
                - "Score every tree as worth saving, doubtful or beyond saving"
                - "Book leaf sampling and a greening check for the restored blocks"
            - name: Hedging and topping for picking height
              description: |-
                ## Purpose
                Trees that grow into each other and up past ladder height shade out their own lower fruit and push picking costs up every year. Deciding whether and how to hedge the sides and top the trees, by hand or by contractor, trades a season of lighter crop for years of easier picking and better spray coverage.

                ## Milestones
                1. Tree height and row gaps measured in each block.
                2. Hand and contractor hedging compared on cost and timing.
                3. A trial block hedged and topped after harvest.
                4. Yield and picking time in the trial block compared with an untouched block.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial block is hedged and topped, with yield and picking hours compared against an untouched block and a decision recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure tree height and the gap between rows in each block"
                - "Get a quote from a hedging contractor"
                - "Hedge and top one trial block straight after harvest"
                - "Compare picking hours and yield with an untouched block"
            - name: Juice or fresh market split for the crop
              description: |-
                ## Purpose
                Fresh fruit can earn several times the juice price but demands blemish-free peel, grading, packing and buyers who will take the volume. Working out what share of each block could go fresh, and what it would cost to get it there, shows whether a split pays more than sending everything to the processor.

                ## Milestones
                1. The share of fruit in each block that meets a fresh grade estimated from a sample.
                2. Fresh prices and volumes confirmed with at least two buyers.
                3. Extra costs of clipping, grading, packing and transport worked out.
                4. A split for next season decided and written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written juice and fresh split for next season, with fresh grade share, buyer prices and extra costs set out per block."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Grade a hundred-fruit sample from each block into fresh and juice quality"
                - "Ask two fresh buyers what grades, sizes and prices they will take"
                - "Work out the extra cost per box of fresh handling"
                - "Write the split for next season and tell the processor"
            - name: Lime off-season cropping through water stress
              description: |-
                ## Purpose
                Limes are often cheap in the main season and scarce and dear a few months later, and growers in dry areas can shift some flowering by controlling when trees get water. Trialling a managed dry spell and rewatering on one block, with careful records, shows whether an off-season crop is possible on your site.

                ## Milestones
                1. The local lime price pattern across the year recorded from buyers or market reports.
                2. A trial block chosen where irrigation is the main water source in the dry season.
                3. Water withheld and restored on a written schedule agreed with an advisor.
                4. Flowering, fruit set and sale price compared with an untreated block.

                ## Notes
                This only works where you control the water. In a wet district, rain will flower the trees whatever the plan says.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One trial block has a recorded stress and rewatering schedule, flowering dates and sale prices compared with an untreated block."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask lime buyers which months they pay the most"
                - "Pick a lime block with full irrigation control for the trial"
                - "Write the stress and rewatering schedule with your advisor"
                - "Record flowering, set and sale prices against an untreated block"
            - name: Protective covers for young trees against psyllids
              description: |-
                ## Purpose
                Young trees flush constantly, which makes them a magnet for psyllids, and a tree infected in its first two years may never pay back. Individual mesh covers over newly planted trees have shown promise in some citrus regions at keeping psyllids out until trees are established, at a cost per tree that needs weighing up.

                ## Milestones
                1. Cover types, suppliers and prices compared.
                2. Cost per tree worked out, including fitting and removal labour.
                3. Covers trialled on one row of new plantings.
                4. Psyllid counts and tree growth compared with an uncovered row.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A covered and uncovered row are compared for psyllid counts and growth over six months and a decision on wider use is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find two suppliers of individual tree covers for citrus"
                - "Work out the full cost per tree including labour"
                - "Fit covers on one row of young trees and leave the next row uncovered"
                - "Compare psyllid counts and growth between the rows after six months"
            - name: Planting day for a new citrus block
              description: |-
                ## Purpose
                Nursery trees arrive on a fixed date, and if holes, water, labour and stakes are not ready they sit drying in the sun. Planning the planting like an event, timed for the start of the rains or with irrigation in place, gets every tree in the ground at the right depth in one or two days.

                ## Milestones
                1. Rows marked, holes dug and water ready before the trees arrive.
                2. Labour, stakes, tree guards and tools booked for the day.
                3. Every tree planted with the graft union well above the soil.
                4. Each tree watered in and the planting recorded on the block map.

                ## Notes
                The most common mistake is planting too deep. A buried graft union invites foot rot within a few years.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All ordered trees are planted within two days of delivery, watered in, with grafts above soil and positions recorded on the map."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Confirm the tree delivery date with the nursery"
                - "Mark rows and dig holes in the week before delivery"
                - "Book planting labour and water for the delivery day"
                - "Record each planted tree on the block map"
            - name: Main crop harvest season with a processor
              description: |-
                ## Purpose
                The main crop is where the year's income comes from, and a season lost to missed delivery slots, crew shortages or broken trucks is hard to recover. Planning the season as a whole, with delivery quotas, crews, transport and pick order agreed weeks ahead, keeps fruit moving at the right maturity.

                ## Milestones
                1. Delivery quotas and slots confirmed with the processor.
                2. Picking crews and crew lead booked for the expected weeks.
                3. Transport, bins and bags checked and ready.
                4. The pick order set from maturity results.
                5. The season closed with every delivery logged and paid.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every block is picked within its maturity window, all deliveries are logged and every payment is matched to a slip."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Ask the processor for this season's quota and delivery slots"
                - "Book picking crews for the expected weeks"
                - "Check the truck, bins and bags and fix anything broken"
                - "Match every payment to its delivery slip when the season closes"
            - name: Annual fruit contract renewal with the processor
              description: |-
                ## Purpose
                Price, quota, payment timing and quality penalties are fixed in the yearly agreement with the processor or packer, and most growers sign whatever is sent. Preparing your numbers before the renewal meeting, with yields, quality results and payment history, puts you in a position to ask for better terms or look elsewhere.

                ## Milestones
                1. Last season's deliveries, quality results and payment dates summarised.
                2. Questions on price, quota, penalties and payment terms written.
                3. The renewal meeting held and the agreed terms recorded.
                4. The signed agreement filed with a note of any changes.

                ## Notes
                Start from the **Vendor** template to keep the processor's contacts, terms and history in one place. Have a lawyer or the growers' association read any new clause you do not understand.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A summary of last season and a written list of asks are taken to the renewal meeting, and the signed agreement is filed."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Summarise last season's deliveries, quality and payment dates on one page"
                - "Ask the agent to draft questions on price, quota and payment terms from the summary"
                - "Hold the renewal meeting and note the agreed terms"
                - "Request the renewal meeting with the processor @recurring(yearly)"
            - name: Post-storm canker and wind damage check
              description: |-
                ## Purpose
                Strong winds bruise leaves and fruit and can spread bacterial canker through wounds, while uprooted and leaning trees die quickly if left. A dated check after every storm, separate from the farm's general recovery plan, finds the citrus-specific damage while it can still be treated or reported.

                ## Milestones
                1. Every block walked within a week of the storm.
                2. Leaning, uprooted and split trees counted and tagged.
                3. Any canker-like lesions photographed and reported to the plant protection unit.
                4. Savable trees staked or propped and broken limbs cut clean.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post-storm damage sheet for every block is completed within a week, with suspect canker reported and leaning trees propped."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Print a post-storm damage sheet and keep it in the farm office"
                - "Walk every block after a storm and tag leaning and split trees"
                - "Photograph any raised, corky lesions with yellow halos and report them"
                - "Stake savable trees and cut broken limbs clean"
            - name: Taking over an inherited family grove
              description: |-
                ## Purpose
                Inheriting a grove usually means inheriting old trees, unclear records, family members with opinions and sometimes unpaid bills to the processor or the workers. Taking stock calmly in the first season, before changing anything big, protects both the trees and family relationships.

                ## Milestones
                1. Ownership papers, leases and any outstanding debts or contracts gathered.
                2. The grove walked with the person who ran it, or the longest-serving worker.
                3. A first-season plan agreed with the family members who have a say.
                4. The processor, workers and neighbours told who is now in charge.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Papers and debts are gathered, a first-season plan is agreed with the family and all buyers and workers know the new contact."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Collect the land papers, leases and processor contracts in one folder"
                - "Walk the grove with whoever ran it and record what they say"
                - "Agree a first-season plan with the family members involved"
                - "Tell the processor and the workers who to call now"
            - name: Buying an existing citrus farm
              description: |-
                ## Purpose
                Groves for sale can look healthy from the road and be riddled with greening, foot rot or tristeza on a failing rootstock. Checking tree health, records, water, contracts and the land title before signing protects one of the biggest purchases a grower makes.

                ## Milestones
                1. A greening and tree health survey done on a sample of every block.
                2. The seller's yield and delivery records checked against processor slips.
                3. Water rights, land title and any processor contracts reviewed with a lawyer.
                4. A price offer based on a realistic yield forecast made.

                ## Notes
                Ask for the seller's delivery slips, not a summary. A sharp fall in yield over the past three seasons is the clearest sign of greening.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written due diligence file covers tree health, three seasons of yields, water, title and contracts before any offer is made."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the seller for three seasons of processor delivery slips"
                - "Survey a sample of trees in every block for greening and foot rot"
                - "Have a lawyer check the title, water rights and existing contracts"
                - "Build a yield forecast and set your offer price from it"
            - name: Running a citrus grove alongside a day job
              description: |-
                ## Purpose
                Many Caribbean groves are run by someone with a full-time job elsewhere, visiting at weekends and relying on a caretaker during the week. Setting up a weekend routine, clear caretaker duties and a simple way to get reports by phone keeps the grove on track without needing you there every day.

                ## Milestones
                1. The tasks that need you and the ones a caretaker can do listed.
                2. Written caretaker duties and a pay arrangement agreed.
                3. A weekly report by phone or photo set up.
                4. A weekend walk routine covering scouting, spending and the week's plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written caretaker duties exist and a weekly photo report and weekend walk have happened for eight weeks in a row."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List which orchard tasks need you and which a caretaker can do"
                - "Write the caretaker's weekly duties on one page"
                - "Ask the caretaker to send photos of scouting tags and problems each week"
                - "Walk the grove and set the coming week's plan with the caretaker @recurring(weekly:sat)"
            - name: Handing the grove on before retirement
              description: |-
                ## Purpose
                A citrus grove takes years to establish, and growers who retire without a plan often watch it decline within a few seasons. Deciding who will take over, sharing the knowledge that lives only in your head and getting the paperwork in order lets the grove outlast your working life.

                ## Milestones
                1. The options of family, sale, lease or a manager compared.
                2. A successor chosen and a handover timeline agreed.
                3. Block records, rootstock notes and buyer contacts written down for the successor.
                4. The successor working alongside you for at least one full season.
                5. Land and contract paperwork updated with a lawyer.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A successor is named, a written handover file of records and contacts exists and the legal paperwork is updated."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write down the options of family, sale, lease or a manager"
                - "Talk with the likely successor about timing and their interest"
                - "Put block records, rootstock notes and buyer contacts in one file"
                - "Book a lawyer to update land and contract paperwork"
            - name: Area-wide psyllid control with neighbouring growers
              description: |-
                ## Purpose
                Psyllids fly between groves, so one grower's careful work is undone by an unmanaged neighbour or a backyard tree next door. Coordinating scouting and control timing across a district, the approach used in citrus health management areas elsewhere, protects every grove more than anyone can alone.

                ## Milestones
                1. Neighbouring growers and the extension officer agreed to meet.
                2. A shared map of groves, abandoned blocks and backyard citrus drawn.
                3. Scouting results shared on a monthly schedule.
                4. Control timing coordinated across the group for at least two flush cycles.

                ## Notes
                Abandoned groves are the hardest problem. Ask the extension service how other districts have dealt with them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "At least three neighbouring growers share monthly scouting results and coordinate control timing for two flush cycles."
                cadence: rolling
              tasks:
                - "Call three neighbouring growers to suggest a meeting with the extension officer"
                - "Draw a shared map of groves and abandoned citrus in the district"
                - "Share scouting results with the group and agree the next control window @recurring(monthly:16)"
                - "Ask the extension service about dealing with abandoned groves"
            - name: Starting a screened citrus nursery
              description: |-
                ## Purpose
                Clean nursery trees are scarce in many Caribbean countries, and a grower with the space and discipline can supply their own replants and their neighbours'. A certified, insect-proof screen house with tested budwood is a serious undertaking and a valuable business once it meets the national standard.

                ## Milestones
                1. The national citrus nursery certification rules and inspection process confirmed.
                2. A screen house design, site and budget drawn up.
                3. A source of tested, certified budwood and rootstock seed secured.
                4. The screen house built and passed its first inspection.
                5. The first batch of budded trees raised and sold.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A screen house passes its certification inspection and the first batch of budded trees is raised from certified budwood."
                cadence: phased
                effort_hours_estimate: "200"
              tasks:
                - "Ask the plant protection unit for the citrus nursery certification rules"
                - "Sketch the screen house layout with a double-door entry"
                - "Secure a certified budwood and rootstock seed source"
                - "Inspect the screen house mesh and doors for gaps @recurring(weekly:thu)"
            - name: High-density planting trial block
              description: |-
                ## Purpose
                Closer spacing brings citrus into bearing sooner and can pay back faster in a greening area where trees may not live as long, but it costs more per acre and needs tighter management. A small trial block, planted and recorded carefully, gives you your own numbers before committing a whole replant.

                ## Milestones
                1. A trial spacing and rootstock chosen with an advisor.
                2. The extra tree, irrigation and pruning costs per acre worked out.
                3. The trial block planted with a standard-spaced block beside it for comparison.
                4. Growth and first yields recorded for both blocks.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A high-density trial and a standard block planted side by side, with costs, growth and first yields recorded for both."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask an advisor about rootstocks and spacings used for high-density citrus"
                - "Cost the trees, irrigation and pruning per acre at the trial spacing"
                - "Plant the trial block beside a standard-spaced block"
                - "Measure trunk size and canopy height in both blocks every six months"
            - name: Ortanique, Ugli and specialty fruit for premium buyers
              description: |-
                ## Purpose
                Distinctive Caribbean citrus such as the Ortanique, Ugli fruit, pummelo and sweet local mandarins can fetch premium prices from hotels, gift box sellers and diaspora buyers, but only with consistent quality and a reliable supply. Testing a small premium line tells you whether the extra care earns its keep.

                ## Milestones
                1. Two or three specialty varieties suited to your site chosen.
                2. Premium buyers identified and their grade and volume needs written down.
                3. A sample supply delivered and buyer feedback recorded.
                4. Price, cost and effort compared with your standard fruit.

                ## Notes
                Some names are trademarks or protected in particular markets. Check before you use one on a label or in a sale description.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sample delivery of specialty fruit has gone to at least two premium buyers and a written price and cost comparison is made."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List specialty citrus varieties that grow well in your district"
                - "Ask two hotel or gift box buyers what grades and volumes they need"
                - "Deliver a sample supply and write down their feedback"
                - "Compare price and cost per box with your standard fruit"
            - name: Degreening and colour for fresh fruit
              description: |-
                ## Purpose
                Tropical nights are too warm for citrus to turn orange on the tree, so fully ripe fruit often stays green and fresh buyers mark it down. Learning how degreening works, what facilities and approvals it needs and whether buyers will take green-skinned fruit decides whether you invest in colouring or sell on taste.

                ## Milestones
                1. Buyers asked whether they accept green or partly coloured ripe fruit.
                2. The degreening process, facility needs and any approvals researched.
                3. The cost of degreening by contract or in your own room compared.
                4. A decision made on degreening, contracting or selling green fruit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on degreening, with buyer views on green fruit and the costed options set out."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask fresh buyers whether they take green-skinned ripe fruit and at what price"
                - "Find out what a degreening room needs and which approvals apply"
                - "Price contract degreening from a nearby packer"
                - "Record the decision and the reasons"
---

# Citrus Orchards

This area is for anyone running a citrus orchard as a business, from a five-acre smallholding of Valencias delivering to a juice plant to a family grove of limes, grapefruit and Ortaniques sold fresh. It starts with the foundations (a block map, a rootstock record, clean nursery trees and a greening baseline), then the routines that keep trees productive, the skills of reading symptoms, leaf reports and juice tests, the hard decisions about infected, old and neglected trees, the dated events of planting and harvest, the situations of inheriting, buying or part-time growing, and finally the specialist work of area-wide psyllid control, nurseries and premium fruit.

What repeats is a weekly psyllid and flush walk, a monthly greening symptom walk and yield log, quarterly trunk checks and pruning rounds, a yearly leaf sample and tree recount, and the harvest season with its maturity sampling. The Purchase decision, Metrics log, Operational checklist and Vendor templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
