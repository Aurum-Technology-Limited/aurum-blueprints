---
id: agriculture.cocoa-farming
name: Cocoa Farming
description: "Map and rehabilitate old cocoa, keep black pod and witches' broom in check, ferment and dry beans to a buyer's standard, and sell fine flavour cocoa at the price its quality earns."
category: business
version: 1.0.0
tags: [agriculture, cocoa-farming, small-business, cocoa, fine-flavour, fermentation, rehabilitation, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - vendor
    - training-program
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cocoa Farming
          description: "Running a cocoa estate or smallholding: rehabilitating old trees, pruning and shade, pod harvest, fermentation and drying, and selling fine flavour beans."
          projects:
            - name: Estate walk and cocoa block map
              description: |-
                ## Purpose
                Most old estates are known by memory: the cocoa by the river, the piece behind the boucan, the hill nobody has cleaned in years. Walking the boundary and dividing the land into named blocks of roughly similar age and condition gives every later decision, from pruning rounds to harvest records, a place to be written against.

                ## Milestones
                1. The estate boundary walked and checked against the survey plan or deed sketch you hold.
                2. The cocoa divided into named or numbered blocks, each with an approximate area.
                3. A simple map drawn or marked on a satellite image showing blocks, traces, water and the fermentary.
                4. Each block labelled with a one-line note on age, shade and condition.

                ## Notes
                A phone mapping app that records a walked track is enough to start. Keep block names short and paint them on a post at the entrance to each block so workers use the same names.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map of the estate exists with every cocoa block named, its rough area given and a one-line condition note beside it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the survey plan, deed sketch or lease map for the land"
                - "Walk the boundary with a phone recording the track"
                - "Divide the cocoa into blocks and give each a short name"
                - "Mark the fermentary, drying floor, water and main traces on the map"
                - "Paint the block name on a post at each block entrance"
            - name: Tree census and condition score by block
              description: |-
                ## Purpose
                An estate planted decades ago usually carries a mix of productive trees, tall unproductive ones, dead stumps and empty gaps. Counting trees in sample rows and scoring each one healthy, declining or dead turns a vague sense that the cocoa is old into numbers you can plan rehabilitation, labour and borrowing around.

                ## Milestones
                1. A simple scoring sheet agreed: healthy, declining, dead or gap, plus height class.
                2. At least three sample rows counted in every block.
                3. A trees per acre estimate and percentage in each condition worked out for each block.
                4. The census summary added to the block map.

                ## Notes
                Sampling is fine for large estates; a full count is worth it on a smallholding. Count gaps as carefully as trees, because gaps are where infilling money goes.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every block has a recorded tree density and a split of healthy, declining, dead and gap positions from counted sample rows."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Print a scoring sheet with columns for tree condition and height"
                - "Count and score three sample rows in the first block"
                - "Repeat the sample rows in every remaining block"
                - "Work out trees per acre and the condition split for each block"
                - "Add the census figures to the block map"
            - name: Identifying the cocoa types on the estate
              description: |-
                ## Purpose
                Caribbean cocoa is mostly Trinitario, but old estates hold a patchwork of seedling trees, selected hybrids and the odd Criollo or Forastero type, and buyers paying for fine flavour ask what you grow. Getting an extension officer or cocoa research body to look at pods and trees in each block tells you what you have and which trees are worth copying.

                ## Milestones
                1. Photographs taken of typical pods, beans and leaves from each block.
                2. An extension officer or cocoa research specialist asked to visit or review the photographs.
                3. A likely type or origin recorded for each block, with uncertain blocks marked as such.
                4. Any tree that stands out for pod size, health or bean colour tagged for later attention.

                ## Notes
                In Trinidad and Tobago the Cocoa Research Centre at the University of the West Indies holds the International Cocoa Genebank and advises growers; other islands have their own cocoa or agriculture departments. Bean colour when cut is a useful clue, but genetic testing is the only certain answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each block has a recorded likely cocoa type from a specialist's view, and standout trees carry numbered tags."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Photograph three typical pods, cut beans and leaves in each block"
                - "Ask the extension office who can help identify cocoa types"
                - "Record the specialist's view of each block's type"
                - "Tag standout trees with numbered aluminium labels"
            - name: Cocoa grower registration with the board and extension office
              description: |-
                ## Purpose
                Selling to a cocoa board or development company, getting rehabilitation help, subsidised planting material or disaster support usually starts with being a registered grower with a farm file. Registering now, before the crop comes in, avoids being turned away from the buying point or missing a support programme because the paperwork was not in place.

                ## Milestones
                1. The bodies that register cocoa growers in your country identified, such as the cocoa board, cooperative or ministry.
                2. The documents they need gathered, typically identification, proof of land use and a farm location.
                3. A registration or grower number received and written in the estate file.
                4. The renewal date, if any, noted.

                ## Notes
                Registration is separate from general farmer registration in some countries and the same in others. Ask at the extension office which one applies to cocoa.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A cocoa grower or farmer registration number is held in the estate file, with any renewal date recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Phone the extension office to ask how cocoa growers register"
                - "Gather identification, land documents and the farm location"
                - "Submit the registration and keep the receipt"
                - "Write the grower number at the front of the estate file"
                - "Check the registration is still current before each crop @recurring(yearly)"
            - name: Last season's yield rebuilt from receipts
              description: |-
                ## Purpose
                Without a baseline you cannot tell whether pruning, sanitation or a new fermentary made any difference. Rebuilding last season's dry bean weight and income from buying point receipts, notebooks and memory gives a starting figure per acre to judge the rest of this area against.

                ## Milestones
                1. Every receipt, slip or notebook entry from last season gathered in one place.
                2. Total dry bean weight sold and total income worked out.
                3. The yield split across blocks as best the records allow.
                4. A kilograms of dry beans per acre figure recorded as the baseline.

                ## Notes
                If last season's records are missing, ask the buyer for a statement of what you sold. Most boards and buyers can print one.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline dry bean yield per acre and total income for last season is written in the estate file with its sources."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect every sale receipt and notebook from last season"
                - "Ask the buyer for a statement of last season's sales"
                - "Add up dry bean weight and income for the season"
                - "Divide by cocoa acreage to get the baseline yield per acre"
            - name: Rainfall gauge and estate crop calendar
              description: |-
                ## Purpose
                Flowering, pod set, black pod pressure and the timing of the main and mid crop all follow the rain, and the pattern on a hillside estate can differ from the nearest weather station. A gauge read every day and a calendar of when flowers, cherelles and ripe pods appear lets you plan pruning, labour and fermentary work around your own estate rather than a guess.

                ## Milestones
                1. A rain gauge installed in an open spot near the fermentary.
                2. A daily rainfall record kept for at least one full year.
                3. Flowering, cherelle wilt and ripe pod peaks noted against the months.
                4. A one-page crop calendar showing your main crop, mid crop and wettest months.

                ## Notes
                Cherelle wilt, where many young pods blacken and dry on the tree, is normal thinning and not always disease. Note when it happens so you do not mistake it for black pod.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of rainfall totals and flowering and harvest peaks are recorded, and a crop calendar for the estate is written from them."
                cadence: rolling
              tasks:
                - "Buy a simple rain gauge and mount it in the open"
                - "Start a rainfall page in the estate notebook"
                - "Total the month's rainfall and note flowering and pod stages @recurring(monthly:28)"
                - "Draw the crop calendar after twelve months of records"
            - name: Fermentary and drying floor condition survey
              description: |-
                ## Purpose
                Flavour is made or lost in the fermentary and on the drying floor, and many estates still use sweat boxes and boucans built generations ago. Inspecting the boxes, drainage holes, rolling roofs and floor surface before the crop shows whether the beans you work so hard to grow will be spoiled by rotten timber, leaking roofs or rusting rails.

                ## Milestones
                1. Every sweat box checked for rot, drainage holes, lids and capacity.
                2. The drying floor, rolling roof runners and roof sheets inspected for leaks and rust.
                3. A list of repairs ranked by whether they would stop the coming crop.
                4. The urgent repairs done or booked before the first harvest round.

                ## Notes
                Boxes made from local hardwood that has never been treated are preferred. Avoid fresh paint, treated lumber or fuel near the beans, because cocoa absorbs smells easily.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written condition report on the fermentary and drying floor exists, and every repair that would stop the crop is done before the first harvest."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Inspect each sweat box for rot, lids and drainage holes"
                - "Check the drying floor, roof sheets and rolling roof runners"
                - "Rank the repairs by whether they would stop the coming crop"
                - "Book a carpenter for the urgent repairs"
                - "Scrub and sun the empty boxes before each main crop @recurring(yearly)"
            - name: Cocoa harvest tools and kit list
              description: |-
                ## Purpose
                Pods cut badly with a cutlass wound the flower cushions that carry next year's crop, and a missing pole knife means high pods ripen and rot. Putting together the right kit before the crop, with sharp pole knives, secateurs, pod breaking clubs, buckets, crocus bags and a scale, saves both pods and labour.

                ## Milestones
                1. A kit list written with quantities for the size of your harvest crew.
                2. Existing tools checked and worn ones listed for replacement.
                3. Missing items priced at two suppliers.
                4. The full kit bought, labelled and stored in a lockable place.

                ## Notes
                Start from the **Purchase decision** template for the scale, which matters most because every sale and yield figure depends on it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete harvest kit, including a checked scale, is on the estate and stored securely before the first harvest round."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a kit list sized to your harvest crew"
                - "Check existing pole knives, secateurs and buckets for wear"
                - "Price the missing items at two agricultural suppliers"
                - "Check the scale against a known weight before buying more"
            - name: Block by block rehabilitation decision
              description: |-
                ## Purpose
                Every block needs one of three things: maintenance, rehabilitation of the existing trees, or clearing and replanting. Deciding this block by block, using the census, cocoa type and the money and labour you have, stops you spreading effort thinly across the whole estate and seeing no gain anywhere.

                ## Milestones
                1. Each block scored on tree condition, type, access and slope.
                2. A choice recorded for each block: maintain, rehabilitate or replant.
                3. A rough cost and labour estimate for each block's choice.
                4. A three-year order of work agreed, with the best return blocks first.
                5. The plan reviewed with an extension officer.

                ## Notes
                Rehabilitating trees you already have, by pruning, coppicing or grafting, often brings a crop back faster than replanting. Replant only where trees are dead, very sparse or of poor type.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan names maintain, rehabilitate or replant for every block, with costs and a three-year order of work."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Score every block on condition, type, access and slope"
                - "Choose maintain, rehabilitate or replant for each block"
                - "Estimate labour days and cost for each block's choice"
                - "Ask the agent to draft a three-year work order from your block scores"
                - "Book an extension officer to review the plan on site"
            - name: Weekly black pod sanitation round
              description: |-
                ## Purpose
                Black pod spreads from infected pods left hanging or lying under the trees, especially in the wet months, and it can take a large share of the crop on a neglected estate. A weekly round removing every diseased pod from the trees and burying or bagging it cuts the spore load more reliably than any spray on its own.

                ## Milestones
                1. A sanitation route through every block agreed with the crew.
                2. Every diseased, mummified or rotting pod removed from trees on each round.
                3. Removed pods buried, covered or taken out of the block, not left in heaps under trees.
                4. A weekly count of diseased pods recorded per block.

                ## Notes
                If you use a fungicide as well, choose an approved product with your extension officer and follow the label. Sanitation still comes first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A diseased pod removal round runs every week through the wet season, with counts per block recorded for at least six months."
                cadence: rolling
              tasks:
                - "Agree the sanitation route and order of blocks with the crew"
                - "Walk the blocks due removing every diseased pod @recurring(weekly:mon)"
                - "Dig a pit or set aside covered space for removed pods"
                - "Record the diseased pod count for each block"
            - name: Harvest rounds through main and mid crop
              description: |-
                ## Purpose
                Ripe pods left too long start germinating inside or get eaten by rats and squirrels, while unripe pods give poor fermentation. Rounds every ten to fourteen days through the crop, with pods counted and wet beans weighed by block, keep quality steady and build the yield records every other decision depends on.

                ## Milestones
                1. A round schedule set for main crop and mid crop based on your crop calendar.
                2. Each block picked on schedule, with pods counted at the heap.
                3. Wet bean weight recorded per block on each harvest day.
                4. A monthly total of pods and wet weight by block kept for the whole season.

                ## Notes
                Start from the **Metrics log** template for the harvest record. Pod counts let you work out your own pod index, the number of pods it takes to make a kilogram of dry beans.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Harvest rounds run on schedule through both crops, and monthly pod and wet weight totals per block are recorded for a full season."
                cadence: cyclic
              tasks:
                - "Set the round schedule for each block from the crop calendar"
                - "Count pods at the heap on each harvest day"
                - "Weigh the wet beans from each block before fermenting"
                - "Total the month's pods and wet weight by block @recurring(monthly:5)"
            - name: Pod breaking and wet bean handling checklist
              description: |-
                ## Purpose
                Beans left in pods too long, mixed with placenta and husk, or carried in dirty containers start fermenting badly before they reach the box. A written checklist for harvest day, from heaping pods to filling the sweat box the same day, makes sure every worker handles wet beans the same way.

                ## Milestones
                1. A rule set for how long harvested pods may wait before breaking.
                2. Pod breaking done with clubs or blunt tools that do not cut beans.
                3. Placenta, husk and germinated or diseased beans removed before the beans go in the box.
                4. Clean, food-grade containers used only for wet beans.
                5. The checklist posted at the breaking site and followed on every harvest day.

                ## Notes
                Start from the **Operational checklist** template. Husks left in a heap near the trees can harbour black pod, so compost them away from the cocoa or spread and cover them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A harvest day checklist is posted at the breaking site and has been used on every harvest day for a full crop."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the harvest day checklist from heap to sweat box"
                - "Buy food-grade buckets kept only for wet beans"
                - "Show the crew how to break pods without cutting beans"
                - "Post a laminated copy of the checklist at the breaking site"
            - name: Fermentation box routine and log
              description: |-
                ## Purpose
                Trinitario beans usually need several days in the box, turned on a set schedule, to develop the chocolate and fruit notes fine flavour buyers pay for. A routine with a written log of fill date, mass, turns, temperatures and finish date lets you repeat what worked and trace what went wrong when a lot is flat or sour.

                ## Milestones
                1. A standard routine written: box fill depth, cover, turning days and finish signs.
                2. A thermometer in use, with temperatures recorded at each turn.
                3. Every batch logged with its block, wet weight and fermentation days.
                4. The log compared with cut test results each month and the routine adjusted.

                ## Notes
                Five to seven days is common for Trinitario, but ask your buyer or the cocoa research body what suits your beans. Do not top up a box with fresh beans halfway through.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every batch for a full crop is logged with fill date, turns, temperatures and finish date, and the routine has been reviewed against cut tests."
                cadence: rolling
              tasks:
                - "Write the standard fermentation routine on a card in the fermentary"
                - "Buy a long probe thermometer for the boxes"
                - "Log fill date, turns and temperatures for each batch"
                - "Compare the fermentation log with the month's cut tests @recurring(monthly:12)"
            - name: Sun drying on the boucan with moisture checks
              description: |-
                ## Purpose
                Beans dried too fast stay acidic, beans dried too slowly go mouldy, and beans sold wet lose weight and reputation. Spreading, turning and covering on a set routine until the beans reach the moisture your buyer specifies, often around seven percent, protects every week of work before it.

                ## Milestones
                1. A drying routine set: layer depth, turning frequency and when to close the roof.
                2. Someone named to close the rolling roof when rain comes.
                3. A moisture meter or a reliable test agreed with the buyer.
                4. Every lot recorded with drying days and final moisture.

                ## Notes
                Keep animals, fuel and smoke away from the drying floor. Smoky beans are rejected by fine flavour buyers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lot in a full crop is recorded with drying days and a final moisture reading at or below the buyer's specification."
                cadence: rolling
              tasks:
                - "Write the drying routine and post it at the boucan"
                - "Name who closes the roof when rain comes on each day"
                - "Agree a moisture test or meter with your buyer"
                - "Grease the rolling roof runners and check the sheets for leaks @recurring(monthly:18)"
            - name: Cut test on every lot before sale
              description: |-
                ## Purpose
                Buyers judge a lot by cutting a sample of beans in half and counting slaty, purple, mouldy, insect-damaged and well fermented ones. Doing the same test yourself before every sale tells you what the buyer will find, lets you hold back a poor lot, and is the fastest feedback you have on fermentation.

                ## Milestones
                1. A cutting board or guillotine and a record sheet ready.
                2. The standard defect categories your buyer uses written on the sheet.
                3. A sample from every lot cut and scored before sale.
                4. Results kept beside the fermentation and drying log for the same lot.

                ## Notes
                Sample sizes of 100 or 300 beans are common. Ask your buyer which they use so your numbers compare.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lot sold in the season has a cut test record showing counts for each defect category."
                cadence: rolling
              tasks:
                - "Ask your buyer which cut test categories and sample size they use"
                - "Make a cut test record sheet with those categories"
                - "Run a cut test on every lot ready for sale @recurring(monthly:21)"
                - "File each cut test result with its lot's fermentation log"
            - name: Monthly cocoa sales and cost ledger
              description: |-
                ## Purpose
                Cocoa income arrives in lumps at crop time, while labour, tools and repairs run all year, so it is easy to think the estate is doing better or worse than it is. A monthly ledger of beans sold, price per kilogram and cocoa costs shows what each crop really earns and gives lenders and grant officers the figures they ask for.

                ## Milestones
                1. A ledger set up with columns for date, lot, weight, price, buyer and costs.
                2. Every sale and cocoa cost entered each month.
                3. A season total of income, costs and price per kilogram worked out.
                4. The season compared with your baseline yield and income.

                ## Notes
                Keep cocoa separate from any other crops on the farm so you know what cocoa alone earns.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger with every cocoa sale and cost for twelve months exists, with a season total and price per kilogram."
                cadence: rolling
              tasks:
                - "Set up the cocoa ledger in a notebook or spreadsheet"
                - "Enter last month's bean sales and cocoa costs @recurring(monthly:3)"
                - "Keep every buyer receipt in a dated folder"
                - "Work out the season's income per kilogram and per acre"
            - name: Shade canopy management for cocoa
              description: |-
                ## Purpose
                Cocoa needs some shade, especially when young, but too much shade on an old estate means few pods and more black pod in the damp. Thinning tall immortelle, forest trees and overgrown bananas to let in more light before the wet season balances growth, pod set and disease pressure.

                ## Milestones
                1. Shade level in each block estimated as light, medium or heavy.
                2. A target shade level agreed for each block with the extension officer.
                3. Shade trees to thin or remove marked with paint.
                4. Thinning done before the wet season, with any timber or permits handled properly.

                ## Notes
                Felling large trees may need a permit, and some trees protect slopes from slipping. Check both before you cut.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every block has a recorded shade level and target, and the yearly shade thinning is done before the wet season begins."
                cadence: cyclic
              tasks:
                - "Estimate shade as light, medium or heavy in each block"
                - "Agree a target shade level per block with the extension officer"
                - "Mark shade trees to thin with paint"
                - "Plan the shade thinning round before the wet season @recurring(yearly)"
            - name: Cocoa pruning and chupon removal schedule
              description: |-
                ## Purpose
                Unpruned cocoa grows tall and tangled, so pods are out of reach, air does not move and black pod thrives. A main pruning after the crop and regular removal of chupons and water shoots keep trees low, open and putting their effort into pods.

                ## Milestones
                1. A pruning standard written: target height, open centre and what to remove.
                2. Pruners trained on one demonstration tree in each block.
                3. A main pruning completed in every block after the main crop.
                4. Chupons removed from one block each month in rotation.

                ## Notes
                Keep a chupon if you plan to use it to replace an old trunk by coppicing. Mark those with a ribbon so they are not cut.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The main pruning is done in every block after each main crop, and chupon removal has covered every block in rotation for a year."
                cadence: cyclic
              tasks:
                - "Write a one-page pruning standard with target tree height"
                - "Prune a demonstration tree in each block with the crew"
                - "Remove chupons and water shoots across the next block @recurring(monthly:9)"
                - "Schedule the main pruning for when the main crop ends @recurring(yearly)"
            - name: Ground cover and weed slashing rounds
              description: |-
                ## Purpose
                Under mature cocoa, leaf litter and shade keep weeds down, but young plantings and gaps get choked fast, and vines climbing into trees cut light and hide diseased pods. Slashing rounds on a rotation, leaving leaf litter in place for the pollinating midges, keep blocks walkable without stripping the soil bare.

                ## Milestones
                1. Blocks ranked by how fast they get overgrown.
                2. A slashing rotation set, with young plantings visited most often.
                3. Vines cut from every cocoa tree on each round.
                4. Leaf litter left in place and bare soil avoided on slopes.

                ## Notes
                If you consider herbicide, choose an approved product with the extension officer and follow the label closely, keeping drift off cocoa leaves and young stems.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every block has been slashed on its rotation for a year, with young plantings visited at least twice as often as mature blocks."
                cadence: rolling
              tasks:
                - "Rank blocks by how quickly weeds and vines come back"
                - "Set a slashing rotation with young plantings visited most often"
                - "Slash and cut vines in the blocks due this quarter @recurring(quarterly)"
                - "Show the crew why leaf litter stays on the ground"
            - name: Cocoa nutrition plan with leaf and soil tests
              description: |-
                ## Purpose
                Old cocoa soils are often acidic and short of nutrients after decades of cropping without feeding, but guessing at fertiliser wastes money. Taking leaf and soil samples from your main blocks and getting a plan from the extension officer or lab, based on the results, means any money spent on feeding goes where the test says it is needed.

                ## Milestones
                1. Soil and leaf samples taken from the main blocks using the lab's method.
                2. Results received and filed by block.
                3. A written feeding plan from the extension officer or agronomist based on the results.
                4. The plan applied and the date and product recorded for each block.

                ## Notes
                Rates and products must come from your test results, the label and your adviser. Organic matter from pod husk compost and leaf litter matters as much as bought fertiliser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Leaf and soil results for the main blocks are on file with a written feeding plan from an adviser, and every application is recorded."
                cadence: cyclic
              tasks:
                - "Ask the extension office or a lab how to take cocoa samples"
                - "Collect soil and leaf samples from the main blocks"
                - "Get a written feeding plan based on the results"
                - "Book the yearly leaf and soil sampling round @recurring(yearly)"
            - name: Dry bean storage and lot labelling
              description: |-
                ## Purpose
                Dry beans pick up moisture, mould and smells and attract moths and weevils, so a good lot can spoil while waiting for a buyer. Clean bags on pallets off the floor and away from walls, each labelled with a lot number tied back to its fermentation and cut test records, keep quality and traceability until the beans leave.

                ## Milestones
                1. A dry, ventilated storage space cleared of fuel, chemicals and animals.
                2. Pallets in place so bags sit off the floor and away from walls.
                3. Every bag labelled with a lot number, weight and date.
                4. A weekly check for damp, mould and insects running whenever beans are stored.

                ## Notes
                Never store beans with fertiliser, fuel or pesticides, even briefly. Fine flavour buyers can taste contamination.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All stored beans sit on pallets in labelled bags traceable to their lot records, with weekly checks logged during storage."
                cadence: rolling
              tasks:
                - "Clear the storage room of fuel, chemicals and anything with a smell"
                - "Put pallets down so bags sit off the floor and walls"
                - "Label every bag with lot number, weight and date"
                - "Check stored bags for damp, mould and insects @recurring(weekly:thu)"
            - name: Recognising cocoa diseases and pests in the field
              description: |-
                ## Purpose
                Black pod, witches' broom, frosty pod rot where it is present, cocoa beetle and thrips each need a different response, and confusing them wastes time and money. Learning to tell them apart on your own trees, with an extension officer's help and photographs, means problems get caught while they are still small.

                ## Milestones
                1. Photographs or a field guide collected for each main cocoa disease and pest in your region.
                2. A field walk done with an extension officer naming what is on your trees.
                3. Each block scored for the problems found.
                4. A one-page guide made for the crew with photographs and what to do.

                ## Notes
                Cocoa beetle tunnels show as sawdust and gum on trunks and branches. Report anything you cannot identify rather than guessing at a treatment.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A crew guide with photographs of the main cocoa diseases and pests exists, and every block has been scored for them after a field walk with an officer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect photographs of black pod, witches' broom and cocoa beetle damage"
                - "Book a field walk with an extension officer to name what is present"
                - "Score every block for the diseases and pests found"
                - "Make a one-page crew guide with photographs"
            - name: Frosty pod and witches' broom quarantine awareness
              description: |-
                ## Purpose
                Frosty pod rot reached Jamaica in 2016 and is a serious threat to cocoa on islands where it has not yet arrived, while witches' broom moves on planting material and pods. Knowing the signs, refusing pods and budwood from unknown sources and knowing who to report to protects your estate and your neighbours'.

                ## Milestones
                1. The signs of frosty pod and witches' broom learned from official material.
                2. The plant quarantine or plant protection contact for your country written in the estate file.
                3. An estate rule set: no pods, budwood or plants from outside without approval.
                4. Workers and visitors told the rule, with footwear and tool cleaning where advised.

                ## Notes
                If you see white powdery growth on pods, report it at once and do not move the pods. Early reporting matters more than anything you can do alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The estate has a written rule on outside planting material, and the plant protection contact is recorded and known by the crew."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the plant protection service's material on frosty pod"
                - "Write the plant quarantine contact in the estate file"
                - "Set and explain the rule on outside pods and budwood"
                - "Put a tool and boot cleaning point at the estate entrance"
            - name: Learning cocoa grafting and budding
              description: |-
                ## Purpose
                Side-grafting and budding let you put a high-yielding, disease-tolerant clone onto an old rootstock without losing years to replanting. A course or a day with an experienced grafter, then practice on spare chupons, gives you or a worker a skill that cuts rehabilitation costs across the estate.

                ## Milestones
                1. A grafting course or experienced grafter found through the extension office or cocoa research body.
                2. A training day attended, with notes on timing, cuts and tying.
                3. At least twenty practice grafts made on chupons or nursery seedlings.
                4. Take rates recorded and the method adjusted until most grafts take.

                ## Notes
                Budwood should come from a recognised source or your own tagged best trees, never from unknown estates.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty or more practice grafts have been made and their take rate recorded, after formal or hands-on training."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the extension office about cocoa grafting training"
                - "Attend the training day and write notes on each step"
                - "Make twenty practice grafts on spare chupons"
                - "Record which grafts take after six weeks"
            - name: Reading pod ripeness for harvest timing
              description: |-
                ## Purpose
                Pod colour changes differ by type: green pods turn yellow, red ones turn orange, and on dark pods the change is hard to see. Learning to judge ripeness on your own types, and training pickers to do the same, avoids unripe pods that ferment poorly and overripe ones with germinating beans.

                ## Milestones
                1. The colour change of each pod type on the estate photographed at unripe, ripe and overripe stages.
                2. A tapping or scratch test learned for hard to judge pods.
                3. A reference card made for pickers.
                4. Unripe and germinated pods counted at the heap for one crop to check picker accuracy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pod ripeness card for the estate's types exists and picker accuracy has been measured at the heap for a full crop."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Photograph pods of each type at unripe, ripe and overripe stages"
                - "Make a laminated ripeness card for pickers"
                - "Count unripe and germinated pods at each harvest heap"
                - "Retrain any picker whose heaps show many unripe pods"
            - name: Fermentation science for fine flavour
              description: |-
                ## Purpose
                Fermentation is a sequence of yeasts, then lactic and acetic bacteria, working on the pulp and driving acids and heat into the bean, and flavour depends on how that sequence runs. Understanding the stages, what turning does and why temperature rises and falls helps you read your boxes and fix sour, bitter or flat lots instead of copying a routine blindly.

                ## Milestones
                1. A reliable short course, book or research centre paper on cocoa fermentation studied.
                2. The stages of fermentation and their signs written in your own words.
                3. Temperature curves from your log plotted for three batches.
                4. One change to the routine tested on a single box and compared by cut test and tasting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain the fermentation stages on one page and have tested one routine change against a control box with recorded results."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find a short course or research paper on cocoa fermentation"
                - "Write the fermentation stages and their signs on one page"
                - "Plot temperature curves for three logged batches"
                - "Test one routine change on a single box beside a control"
            - name: Tasting your own cocoa liquor
              description: |-
                ## Purpose
                Fine flavour buyers describe beans by fruit, floral, nutty and acidity notes, and a grower who can taste their own cocoa can talk to them as an equal. Roasting, shelling and grinding small samples into liquor and tasting them against good reference beans shows you what your fermentation and drying are producing.

                ## Milestones
                1. A small batch method set up with an oven, a way to shell and a grinder or mortar.
                2. Liquor made from at least three of your own lots.
                3. Tasting notes recorded using a simple flavour wheel.
                4. One session held with a chocolate maker or trained taster to calibrate your notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Tasting notes exist for three or more of your own lots, and at least one session with a trained taster has been held."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Roast a small sample of beans from your best lot"
                - "Shell and grind the sample into liquor"
                - "Record tasting notes against a flavour wheel"
                - "Arrange a tasting session with a local chocolate maker"
            - name: Cocoa flowering and pollination on the estate
              description: |-
                ## Purpose
                Cocoa flowers are pollinated mainly by tiny midges that breed in damp leaf litter and rotting plant material, and many estates set far fewer pods than their flowers allow. Learning how pollination works and testing simple habitat measures, such as leaving litter and banana stem pieces, can lift pod set without any purchased input.

                ## Milestones
                1. The basics of cocoa flowering and midge pollination learned from extension or research material.
                2. Flower and cherelle counts taken on ten marked trees.
                3. Leaf litter or rotting banana stem pieces placed in one trial block.
                4. Pod set in the trial block compared with a nearby block after one season.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pod set has been compared between a pollinator habitat trial block and a control block over one season, with counts recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read extension material on cocoa midge pollination"
                - "Mark ten trees and count flowers and cherelles"
                - "Place rotting banana stem pieces in one trial block"
                - "Compare pod set between trial and control blocks"
            - name: Side-grafting old trees with selected clones
              description: |-
                ## Purpose
                Old trees with good roots but poor yield or heavy disease can be converted to a better clone by grafting onto the trunk or a chupon, then cutting back the old canopy once the graft grows. Doing this block by block keeps some crop coming while the estate's genetics improve.

                ## Milestones
                1. Clones chosen with the extension officer or cocoa research body for your conditions.
                2. Budwood sourced from a recognised supplier or your own tagged trees.
                3. The first block grafted, with each tree tagged and the date recorded.
                4. Take rates checked and failed grafts redone.
                5. Old canopy cut back on trees where grafts are established.

                ## Notes
                Graft in the conditions your trainer recommends, usually not in the driest months. Keep grafted trees shaded until they establish.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one block has been grafted with chosen clones, take rates recorded, and old canopy cut back on established grafts."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Agree clone choices with the extension officer"
                - "Order budwood from a recognised source"
                - "Graft and tag every tree in the first block"
                - "Check graft take and redo failures after six weeks"
            - name: Coppicing tall trees back into production
              description: |-
                ## Purpose
                Old trees that have grown into tall, bare trunks with pods only at the top can be brought back by letting a healthy chupon grow at the base, then cutting the old trunk once the new stem is established. Coppicing keeps the existing root system, costs little more than labour and puts pods back within reach of pickers.

                ## Milestones
                1. Tall, low-bearing trees with sound roots marked in the chosen block.
                2. One strong chupon selected and protected at the base of each marked tree.
                3. Old trunks cut back once the chupon is established, with cuts sealed or treated as your adviser recommends.
                4. New stems shaped by pruning and their first pods recorded.

                ## Notes
                Cut old trunks in stages on steep land or near paths, and use a trained chainsaw operator with protective equipment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every marked tree in the chosen block has a selected chupon, the old trunks have been cut back, and first pods on new stems are recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Mark tall, low-bearing trees with sound roots in one block"
                - "Tie a ribbon on the strongest chupon at each marked tree"
                - "Hire a trained chainsaw operator to cut back the old trunks"
                - "Record the first pods on each new stem"
            - name: Infilling gaps with grafted or rooted plants
              description: |-
                ## Purpose
                Gaps where trees have died let in weeds and lose income on land you already maintain. Planting gaps with grafted plants or rooted cuttings, shaded and watered through their first dry season, raises tree density and yield without opening new land.

                ## Milestones
                1. Gaps counted and marked in each block from the census.
                2. Planting material ordered or grown to match the count.
                3. Temporary shade such as banana or plantain in place at each gap.
                4. Gaps planted at the start of the wet season and survival counted after six months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every marked gap in the chosen blocks has been planted and survival has been counted six months later."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Mark gaps in each block with a stake"
                - "Order or grow planting material for the gap count"
                - "Plant temporary shade at each gap before the cocoa"
                - "Count surviving plants six months after planting"
            - name: Small cocoa nursery for planting material
              description: |-
                ## Purpose
                Buying in plants for a large rehabilitation is expensive and supply runs short when everyone plants at the same time. A small shaded nursery growing seedlings for rootstock or grafted plants from your best trees gives you material when you need it and a source of income from neighbours.

                ## Milestones
                1. A shaded, watered and fenced nursery site chosen near the house or water.
                2. Bags, potting mix and shade cloth in place.
                3. Seedlings raised from approved seed or your selected trees.
                4. The first batch grafted or ready for planting out with records of source and date.

                ## Notes
                Check whether your country requires nurseries selling planting material to register. Clean seed and budwood sources keep disease out.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working nursery holds a batch of cocoa plants with recorded source and date, ready for grafting or planting out."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Choose a nursery site with shade, water and a fence"
                - "Buy nursery bags, potting mix and shade cloth"
                - "Sow seed from approved or selected trees"
                - "Record the source and sowing date of each batch"
            - name: Choosing a drying system for the estate
              description: |-
                ## Purpose
                A traditional boucan with a rolling roof works well, but some estates have lost theirs, outgrown them or face more rain during the crop. Comparing a repaired boucan, a solar or tunnel dryer and a mechanical dryer on cost, capacity and flavour risk leads to a choice that matches your volume.

                ## Milestones
                1. Peak week drying volume estimated from harvest records.
                2. Three options costed: repaired boucan, solar or tunnel dryer, mechanical dryer.
                3. Each option scored on cost, capacity, rain risk and flavour risk.
                4. A choice made and funding route identified.

                ## Notes
                Start from the **Purchase decision** template. Mechanical dryers that let smoke touch beans spoil fine flavour, so check how heat is delivered.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three drying options against peak volume exists, with a choice and a funding route recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate peak week drying volume from the harvest log"
                - "Get prices for a boucan repair, solar dryer and mechanical dryer"
                - "Visit an estate using a solar or tunnel dryer"
                - "Score the options and record the choice"
            - name: Upgrading to cascade fermentation boxes
              description: |-
                ## Purpose
                Single deep boxes turned by hand make even fermentation hard, especially with small or variable batches. A stepped set of cascade boxes, where beans drop from one box to the next at each turn, mixes beans evenly and cuts labour, but only pays off at a certain volume.

                ## Milestones
                1. Current batch sizes and turning labour measured for one crop.
                2. A cascade design sized to your typical batch chosen with advice.
                3. Timber and labour costed against expected quality and labour gains.
                4. A decision recorded to build, adapt existing boxes, or wait.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on cascade boxes exists, based on measured batch sizes and a costed design."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure batch sizes and turning time for a crop"
                - "Get a cascade box design sized to your batches"
                - "Cost the timber and carpentry"
                - "Record whether to build, adapt or wait"
            - name: Selling wet beans or fermenting yourself
              description: |-
                ## Purpose
                Some small growers sell wet beans to a central fermentary, while others ferment and dry on their own estate. Working out the price, weight loss, labour and quality risk of each route shows which pays better for your volume and whether a shared fermentary would serve you better.

                ## Milestones
                1. Wet bean and dry bean prices gathered from local buyers.
                2. Your own wet to dry weight ratio measured on a few lots.
                3. Labour and equipment costs of fermenting and drying worked out.
                4. Net income per acre compared for both routes and a choice recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side net income comparison of selling wet versus dry beans is written, using your own measured weight ratio, with a choice recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask local buyers for current wet and dry bean prices"
                - "Weigh a few lots wet and again when dry"
                - "Cost the labour and equipment for fermenting and drying"
                - "Ask the agent to lay out net income for both routes"
            - name: Choosing between the board, a cooperative and direct buyers
              description: |-
                ## Purpose
                A national board or company gives a guaranteed buyer and price, a cooperative pools volume and a direct chocolate maker may pay a premium but wants consistency and paperwork. Comparing the routes on price, payment speed, quality demands and rules in your country helps you choose one or a mix for the coming crop.

                ## Milestones
                1. The legal routes for selling cocoa in your country confirmed with the board or ministry.
                2. Price, payment terms and quality rules gathered from each route.
                3. Each route scored against your volume and quality records.
                4. A selling plan for the coming crop recorded.

                ## Notes
                Start from the **Vendor** template to keep a page for each buyer. In some countries all cocoa must pass through a licensed buyer or exporter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A selling plan for the coming crop names the chosen route or mix, based on gathered terms from each option."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the legal selling routes with the cocoa board or ministry"
                - "Ask each route for its price, payment terms and quality rules"
                - "Score the routes against your volume and cut test records"
                - "Write the selling plan for the coming crop"
            - name: Income while rehabilitated cocoa recovers
              description: |-
                ## Purpose
                Coppiced, grafted and newly planted cocoa can take a few years to bear well, and an estate with no income in that time often gets abandoned again. Planning short-term income from the temporary shade itself, such as plantain or banana, keeps cash coming while the cocoa grows back.

                ## Milestones
                1. The income gap estimated for each rehabilitated block over three years.
                2. Temporary shade crops chosen that also sell, with an extension officer's advice.
                3. A rough income plan for those crops written.
                4. A rule recorded for when temporary shade is thinned so it does not crowd the cocoa.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-year income gap estimate and a temporary shade crop plan exist for every rehabilitated block."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate lost cocoa income in each rehabilitated block"
                - "Choose temporary shade crops that also sell"
                - "Write a rough income plan for the shade crops"
                - "Set the year when temporary shade gets thinned"
            - name: Main crop harvest readiness
              description: |-
                ## Purpose
                The weeks before the main crop decide whether every pod gets picked, fermented and dried on time. Checking crew, tools, boxes, drying floor, storage, buyer and cash for wages a month ahead avoids losing beans to a broken box or a missing picker at the peak.

                ## Milestones
                1. Pickers and fermentary workers confirmed for the expected peak weeks.
                2. Tools, scale and containers checked and replaced where needed.
                3. Boxes, drying floor and storage ready and clean.
                4. A buyer and first collection or delivery date agreed.
                5. Cash for wages through the first weeks of crop in hand.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Crew, kit, fermentary, drying floor, storage, buyer and wage cash are all confirmed ready before the first main crop round."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm pickers and fermentary workers for the peak weeks"
                - "Check tools, the scale and wet bean containers"
                - "Agree the first collection or delivery date with the buyer"
                - "Set aside cash for the first month of harvest wages"
            - name: Entering a cocoa quality competition
              description: |-
                ## Purpose
                National cocoa awards and international programmes such as Cocoa of Excellence judge beans and liquor from growers around the world, and a placing gives a small estate a story buyers notice. Preparing a carefully fermented, dried and graded sample to the rules, on time, is also a disciplined test of your post-harvest work.

                ## Milestones
                1. Current competitions open to your country identified, with rules and deadlines.
                2. A lot selected from your best block and fermented and dried with full records.
                3. A sample prepared, graded and sent as the rules require.
                4. Judges' feedback received and the lessons written down.

                ## Notes
                Rules and sample requirements change each edition, so check the organiser's current guidelines rather than last year's.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A competition sample has been submitted on time to the current rules, and the judges' feedback is filed with lessons noted."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Find cocoa quality competitions open to growers in your country"
                - "Read the current sample rules and entry deadline"
                - "Select and process a lot from your best block"
                - "Send the sample with the entry paperwork"
            - name: First sample and sale to a chocolate maker
              description: |-
                ## Purpose
                Craft chocolate makers in the region and abroad pay more for traceable fine flavour beans, but most start with a sample and a conversation before any order. Preparing a sample pack with lot records, cut test and tasting notes, then hosting a visit or call, gives you the best chance of turning interest into a first sale.

                ## Milestones
                1. Three or four chocolate makers identified whose sourcing fits your beans.
                2. A sample pack prepared with lot records, cut test results and a short estate profile.
                3. Samples sent and a follow-up call or estate visit held.
                4. A first order agreed with price, volume, quality specification and payment terms in writing.

                ## Notes
                If the buyer is overseas, export permits and phytosanitary paperwork apply. Check with the cocoa board or export authority before promising a delivery date.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written first order from a chocolate maker exists, with price, volume, quality specification and payment terms."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List four chocolate makers whose sourcing suits your beans"
                - "Ask the agent to draft a one-page estate and bean profile"
                - "Prepare a sample pack with lot records and cut test"
                - "Follow up each sample with a call or visit invitation"
            - name: Reviving an inherited or abandoned family estate
              description: |-
                ## Purpose
                Many Caribbean cocoa estates sit half abandoned after an older relative stopped working them, with family members unsure who decides what. Agreeing who is running the estate, clearing access, and bringing back a few blocks first gives the family a working estate before deciding anything bigger.

                ## Milestones
                1. The family members with a say agreed on who manages the estate day to day.
                2. Traces cleared to reach every block safely.
                3. Two blocks chosen for first revival based on the census.
                4. Those blocks pruned, sanitised and harvested for one crop.
                5. A short report to the family on costs, crop and next steps.

                ## Notes
                Ownership and inheritance questions belong with a lawyer and the land registry. Keep a written agreement among family members on who manages and how money is shared.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two blocks of an inherited estate have been revived and harvested for a crop, and a written report has gone to the family."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Call a family meeting to agree who manages the estate"
                - "Clear traces to reach every block"
                - "Choose two blocks for first revival from the census"
                - "Write a short report to the family after the first crop"
            - name: Running a cocoa smallholding under five acres
              description: |-
                ## Purpose
                A smallholder with a few acres of cocoa usually works alongside a job or other crops, with little money for equipment. Picking the routines that matter most, sanitation, pruning and careful fermentation, and sharing tools or a fermentary with neighbours makes a small plot pay without taking over your life.

                ## Milestones
                1. The few routines that matter most chosen and fitted into a weekly schedule.
                2. A decision made to ferment at home, share a fermentary or sell wet.
                3. Shared tools or labour arranged with one or two neighbours.
                4. A season's yield and income recorded and compared with the baseline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly smallholding schedule is in use for a full season, and that season's yield and income are recorded against the baseline."
                cadence: cyclic
              tasks:
                - "Choose the three routines that matter most on your plot"
                - "Fit them into a weekly schedule around your other work"
                - "Talk to neighbours about sharing a fermentary or tools"
                - "Record the season's yield and compare it with the baseline"
            - name: Working with a cocoa cooperative or farmer group
              description: |-
                ## Purpose
                Cooperatives let small growers pool beans for a central fermentary, reach volumes buyers want and share training and equipment. Being an active member, bringing accurate figures and taking a role, gets far more from the group than simply delivering beans and waiting for payment.

                ## Milestones
                1. The cooperative's rules, fees, payment terms and quality standards read and understood.
                2. Your estate's yield and lot records shared in the format the group uses.
                3. One role taken on, such as quality checks, training or records.
                4. A year's deliveries and payments reconciled with the group's statement.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A year of deliveries is reconciled with the cooperative's statement, and you hold a named role in the group."
                cadence: rolling
              tasks:
                - "Read the cooperative's rules, fees and quality standards"
                - "Bring your lot and yield figures to the group meeting @recurring(monthly:14)"
                - "Volunteer for one role such as quality checks or records"
                - "Reconcile the year's deliveries with the group's statement"
            - name: Managing an estate from abroad or part time
              description: |-
                ## Purpose
                Owners living in the diaspora or working full time elsewhere often rely on a caretaker, and estates drift when nobody sees the figures. A written agreement with the caretaker, a weekly report by phone or message, and a visit before each crop keep the estate producing and the money traceable.

                ## Milestones
                1. A written caretaker agreement covering duties, pay and how harvest money is handled.
                2. A weekly report format agreed, with photographs of blocks and the fermentary.
                3. Sales receipts sent to you for every lot.
                4. A visit made before each main crop to walk the estate.

                ## Notes
                Ask the buyer to pay into an account you control where possible, with receipts copied to you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed caretaker agreement exists and weekly reports with photographs have arrived for six months, with every sale receipt received."
                cadence: rolling
              tasks:
                - "Write a caretaker agreement covering duties, pay and harvest money"
                - "Agree a weekly report with photographs of blocks and fermentary"
                - "Review the caretaker's weekly report and receipts @recurring(weekly:sat)"
                - "Book a visit to walk the estate before the main crop"
            - name: Handing the estate to the next generation
              description: |-
                ## Purpose
                Much of what makes an estate's beans good lives in one person's head: which trees bear best, how long the boxes need, which buyer pays fairly. Recording that knowledge and working the crop alongside a successor for a season or two keeps the quality when the older grower steps back.

                ## Milestones
                1. A successor named and willing to spend at least one crop alongside the current grower.
                2. The estate's key knowledge written down: blocks, best trees, fermentation routine, buyers.
                3. A full crop worked together, with the successor running one block alone.
                4. Legal and ownership steps referred to a lawyer and the family agreement updated.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written estate knowledge book exists and the successor has run a block through a full crop."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree with the successor to work a full crop together"
                - "Record the best trees, fermentation routine and buyers in a notebook"
                - "Give the successor one block to run alone for a crop"
                - "Book a lawyer to advise on transfer of ownership"
            - name: Training pickers to protect flower cushions
              description: |-
                ## Purpose
                Pickers paid by the pod sometimes pull or hack pods off, damaging the cushions where next year's flowers and pods form. A short training session at the start of each crop on cutting stalks cleanly, leaving cushions intact and spotting diseased pods protects future yield.

                ## Milestones
                1. A short training plan written covering cutting, cushions and diseased pods.
                2. Every picker trained at the start of the crop, including new hires.
                3. Cushion damage spot-checked on a sample of trees after rounds.
                4. Retraining given to anyone whose trees show damage.

                ## Notes
                Start from the **Training program** template. Paying a fair day rate rather than only per pod can reduce rough picking.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every picker has been trained at the start of the crop, and cushion damage checks after rounds are recorded."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Write a short picker training plan"
                - "Train every picker before the first harvest round"
                - "Spot-check ten trees for cushion damage after each round"
                - "Retrain any picker whose trees show damage"
            - name: Lot traceability and plot mapping for premium buyers
              description: |-
                ## Purpose
                European buyers now ask for proof that cocoa comes from land not recently deforested, often with plot coordinates, and fine flavour buyers want to trace a lot to its block. A lot register linking each sale to blocks, plot boundaries and fermentation records answers both, and is worth setting up before a buyer asks.

                ## Milestones
                1. Plot boundaries recorded as coordinates or a polygon for each cocoa parcel.
                2. Each lot number linked to its blocks, harvest dates and process records.
                3. A one-page traceability statement ready to send to buyers.
                4. Current buyer and regulation requirements checked with the cocoa board or export authority.

                ## Notes
                Regulations such as the European Union deforestation rules change in detail and timing. Confirm what your buyer needs rather than relying on a summary.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every lot sold can be traced in the register to mapped plots and process records, and a traceability statement is ready for buyers."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Record plot boundary coordinates with a phone mapping app"
                - "Set up a lot register linking lots to blocks and process records"
                - "Update the lot register with each sale's plot details @recurring(monthly:7)"
                - "Ask the cocoa board what traceability buyers now require"
            - name: Cadmium and residue testing for export buyers
              description: |-
                ## Purpose
                Some importing markets set limits on cadmium in cocoa products and on pesticide residues, and certain soils give beans naturally higher cadmium. Testing a sample of your beans through an accredited lab, before a premium buyer does, tells you whether there is a problem to manage and gives you a document to show.

                ## Milestones
                1. The limits your target buyers apply confirmed in writing.
                2. An accredited lab found that tests cocoa for cadmium and residues.
                3. Samples from your main blocks tested and results filed.
                4. Any result near a limit discussed with the cocoa research body or extension officer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Accredited lab results for cadmium and residues on beans from your main blocks are on file, with any concern discussed with an adviser."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask target buyers which cadmium and residue limits they apply"
                - "Find an accredited lab that tests cocoa beans"
                - "Send samples from your main blocks for testing"
                - "File the results and discuss any concern with an adviser"
            - name: Organic or ethical certification readiness
              description: |-
                ## Purpose
                Organic, Fairtrade and similar certifications can open premium buyers, but they bring inspections, record keeping and fees that may not pay at small volumes. Checking your current practices against a standard, and pricing the cost against the premium your buyers would pay, tells you whether to apply now, later or never.

                ## Milestones
                1. The certifications your target buyers value identified.
                2. Current practices compared against the chosen standard's requirements.
                3. Costs of certification and any changes priced against the expected premium.
                4. A decision recorded to apply, prepare for later or not pursue.

                ## Notes
                Group certification through a cooperative is often far cheaper than certifying a single small estate.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gap list against a chosen certification standard and a cost versus premium comparison exist, with the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask buyers which certifications they would pay more for"
                - "Get the current standard from the certifying body"
                - "List the gaps between your practices and the standard"
                - "Compare certification cost with the expected premium"
            - name: Finding and recording your best mother trees
              description: |-
                ## Purpose
                Every old estate has a few trees that bear heavily year after year, resist black pod and give beans buyers love, and they are the cheapest source of improved planting material you have. Recording pod counts and disease on tagged candidate trees over two seasons identifies true mother trees for budwood and seed.

                ## Milestones
                1. Twenty to fifty candidate trees tagged across the estate.
                2. Pod counts and diseased pod counts recorded for each tree every quarter.
                3. Bean size and cut colour checked for the leading candidates.
                4. A shortlist of mother trees confirmed after two seasons and shared with the cocoa research body if they are interested.

                ## Notes
                Your best trees may be valuable to national breeding programmes. Ask before sending budwood off the estate.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two seasons of pod and disease counts exist for tagged candidate trees, and a shortlist of mother trees is recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Tag twenty to fifty candidate trees with numbered labels"
                - "Count healthy and diseased pods on each candidate @recurring(quarterly)"
                - "Check bean size and cut colour on the leading candidates"
                - "Confirm the mother tree shortlist after two seasons"
---

# Cocoa Farming

Cocoa Farming is for anyone running a cocoa estate or a few acres of cocoa in the Caribbean, from the family who inherited an overgrown hillside of old Trinitario to the grower already selling dried beans to a chocolate maker. The projects start with knowing what you have: a block map, a tree census, your registration and last season's numbers. Then come the routines that protect the crop and the beans, the skills behind fine flavour, rehabilitation and equipment decisions, the harvest and buyer milestones, situations such as smallholdings, cooperatives and absentee owners, and specialist work on traceability, residue testing and selecting your best trees.

What repeats is the weekly diseased pod round and storage check, monthly harvest, cut test and sales records, chupon removal through the year, and yearly shade pruning, sampling and registration. The Purchase decision, Operational checklist, Metrics log, Vendor and Training program templates pair with the projects that point to them. Pesticide, fungicide and fertiliser choices always go through the label and your extension officer, never a dose from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
