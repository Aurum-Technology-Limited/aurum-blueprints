---
id: agriculture.herbs-and-seasoning-crops
name: Herbs and Seasoning Crops
description: "A seasoning crop business that cuts every week: chadon beni, chive, thyme and celery grown in beds or containers, bunched to a standard, kept fresh and sold to steady buyers."
category: business
version: 1.0.0
tags: [agriculture, herbs-and-seasoning-crops, small-business, chadon-beni, culantro, chive, thyme, green-seasoning]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - vendor
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Herbs and Seasoning Crops
          description: "Growing chadon beni, chive, thyme, celery and other seasoning crops for sale: beds or containers, continuous harvest, bunching, freshness and steady buyers."
          projects:
            - name: Seasoning crop mix matched to named buyers
              description: |-
                ## Purpose
                Chadon beni (culantro, also called shado beni or bandhania), chive (escallion in Jamaica), fine and broad-leaf thyme, local celery and parsley sell to different people in different volumes. A vendor at the market may take twenty bunches of chive a week, a green seasoning maker may want leaf by the pound, and a neighbourhood shop only a few mixed bundles. Deciding which crops to grow, and how many beds of each, after talking to the people who will buy them keeps you from cutting herbs nobody ordered.

                ## Milestones
                1. Five possible buyers listed, each with the herbs, bunch size and weekly volume they mention.
                2. A first crop mix of three to five seasoning crops chosen to suit at least two of those buyers.
                3. The number of beds for each crop worked out from the weekly volumes.
                4. The mix, the buyers and the reasons written on the first page of the herb record book.

                ## Notes
                Start with the crops your buyers already ask for by name. Exotic herbs can come later, once the core bunches sell every week.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written crop mix naming each herb, its number of beds and at least one buyer for it, recorded before planting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask two market vendors which seasoning herbs they run short of each week"
                - "Ask a green seasoning maker or shop what volume of leaf they buy"
                - "Choose three to five herbs and the number of beds for each"
                - "Write the crop mix and buyer list in the record book"
            - name: Herb plot site, sun and shade assessment
              description: |-
                ## Purpose
                Seasoning crops want different light: chadon beni stays leafy in partial shade and bolts quickly in full sun, while thyme and chive want sun but rot in soggy ground. Walking the site in the morning and afternoon, and after a heavy shower, shows you where each crop belongs before you build a single bed. Water within reach of a hose matters more for herbs than for most crops, because they are cut and watered so often.

                ## Milestones
                1. A sketch of the site showing morning sun, afternoon shade and wet spots after rain.
                2. The nearest reliable water point marked, with the distance to each proposed bed.
                3. A sunny, well-drained strip chosen for chive and thyme and a shadier strip for chadon beni.
                4. Access for carrying bunches to a cool packing spot noted on the sketch.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A site sketch marking sun, shade, wet spots, water point and the planned position of each herb crop."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk the site at 8am and 3pm and mark sun and shade on a sketch"
                - "Go back after heavy rain and mark where water stands"
                - "Measure the distance from the water point to each proposed bed"
                - "Mark where chive, thyme and chadon beni will go"
            - name: Raised beds or containers for seasoning crops
              description: |-
                ## Purpose
                You can grow herbs in ground beds, raised beds built from board or block, grow bags or reused drums, and each choice changes your drainage, weeding, back strain and start-up cost. Raised beds and containers drain fast in the wet season and keep chive and thyme roots out of standing water, but they dry out quickly in the dry season. Comparing the options on cost per square metre and on how they behave in both seasons gives you a layout you will not have to rebuild after the first rains.

                ## Milestones
                1. Three bed or container options priced per square metre of growing space.
                2. Each option scored for drainage, water use, weeding, lifespan and ease of cutting.
                3. One option chosen for each crop, with the reasons written down.
                4. A first set of beds or containers built or bought and placed on the site.

                ## Notes
                Start from the **Purchase decision** template. Black containers in full sun can cook roots; light-coloured or shaded ones do better.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of bed or container type for each crop, with prices compared and the first beds in place."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Price board, block, grow bag and drum options per square metre"
                - "Score each option for drainage, water use and weeding"
                - "Choose a bed or container type for each herb"
                - "Build or buy the first three beds and set them in place"
            - name: Cost of a bed of chadon beni, chive and thyme
              description: |-
                ## Purpose
                Each bunch sells for a small sum, so a few unpriced costs, such as bought compost, shade cloth, water, rubber bands and transport, can quietly eat the profit. Working out what one bed of each crop costs to set up and run, and how many bunches it yields a month, tells you the lowest price you can accept. Do it before you agree a price with any buyer.

                ## Milestones
                1. Set-up costs for one bed of each crop listed: frame, soil mix, planting material and irrigation.
                2. Monthly running costs listed: compost, water, bands, labour and transport.
                3. A realistic bunches-per-month figure for each bed, taken from growers or the extension officer.
                4. A cost per bunch and a floor price for each herb written in the record book.

                ## Notes
                Count your own labour at a fair hourly rate, even if you do not pay yourself yet. Otherwise the floor price will be too low to ever hire help.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A costing sheet showing set-up cost, monthly cost, expected bunches and a floor price per bunch for each herb."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every set-up cost for one bed of each herb"
                - "Add monthly running costs including your own hours"
                - "Ask an experienced grower how many bunches a bed gives each month"
                - "Work out the cost per bunch and write down a floor price"
            - name: Clean slips, offsets and seed for the first beds
              description: |-
                ## Purpose
                Chive and thyme are mostly grown from divided clumps and rooted slips, and a clump taken from a sick bed carries its rot and its pests straight into your new one. Chadon beni, celery and parsley come from seed, which loses vigour quickly if it is old or stored in heat. Sourcing healthy, true planting material from a grower or nursery you trust is the cheapest insurance the herb business has.

                ## Milestones
                1. Two or three sources of chive and thyme clumps identified and their beds inspected.
                2. Fresh seed of chadon beni and celery bought from a supplier that dates its packets.
                3. Planting material checked for rot, yellowing and pests before it reaches your site.
                4. Source, date and quantity of every batch written in the record book.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Enough healthy chive and thyme clumps and dated seed for the first beds, each batch logged with its source."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the extension office or other growers who sells clean chive clumps"
                - "Visit a source and look at the parent beds before buying"
                - "Buy dated chadon beni and celery seed and store it somewhere cool"
                - "Log the source, date and quantity of each batch"
            - name: Chadon beni germination tray set-up
              description: |-
                ## Purpose
                Chadon beni seed is notoriously slow and uneven, often taking three to four weeks to come up, and many first-time growers give up or dig the tray over just before it sprouts. A simple tray system, with a fine seed mix, steady moisture and light shade, turns germination from a gamble into a routine. Once it works, you can start a new tray every month and never run out of young plants.

                ## Milestones
                1. A shaded, sheltered spot set aside for seed trays, out of reach of fowl and heavy rain.
                2. Trays or pots filled with a fine, free-draining seed mix.
                3. A first tray sown and labelled with the date and seed batch.
                4. Germination counted at four and six weeks and the rate written down.

                ## Notes
                Keep the mix evenly moist but never waterlogged. Letting it dry out once can stall the whole tray.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sown chadon beni tray with a recorded germination count at six weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a shaded nursery spot protected from rain and animals"
                - "Mix a fine seed compost and fill two trays"
                - "Sow and label a tray with the date and seed batch"
                - "Count seedlings at four and six weeks and record the rate"
            - name: Bed-by-bed herb record book
              description: |-
                ## Purpose
                With a dozen beds cut on different days, memory fails fast: which bed was cut last Tuesday, which was fed, which one keeps yellowing. Numbering every bed and keeping one page or row per bed for planting, cutting, feeding and problems turns guesswork into a plan. It is also what a buyer, a lender or an incentive programme asks to see.

                ## Milestones
                1. Every bed and container numbered with a durable tag.
                2. A record book or spreadsheet with a page or row per bed.
                3. Planting date, crop and source entered for each bed.
                4. Two weeks of cuts, feeds and problems logged without gaps.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Numbered beds and a record book with planting details and at least two weeks of entries for every bed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Number every bed and container with a weatherproof tag"
                - "Set up one page or spreadsheet row per bed"
                - "Enter planting date, crop and source for each bed"
                - "Log every cut, feed and problem for two weeks"
            - name: Soil sample and compost plan for new herb beds
              description: |-
                ## Purpose
                Weekly cutting removes nutrients steadily from herb beds, and beds filled with any dirt that was handy often sit too acid, too heavy or too poor for chive and celery to regrow well. A soil test from the beds before planting, read with the extension officer, tells you what the mix lacks. The plan that comes out of it covers what to add when the beds are made, not a guess at feeding later.

                ## Milestones
                1. A composite soil sample taken from the bed area or bed mix and sent to a lab.
                2. The results read with the extension officer or an agronomist.
                3. A written plan for compost, lime or other amendments when beds are filled.
                4. Beds filled and the amendments used recorded against each bed number.

                ## Notes
                Follow the rates the lab or extension officer gives you and the product label. Do not copy a neighbour's rates from a different soil.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lab soil report and a written amendment plan, with what was added recorded for each bed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension office where to send a soil sample"
                - "Take a mixed sample from five spots in the bed area"
                - "Go through the results with the extension officer"
                - "Write the amendment plan and note what each bed received"
            - name: Extension officer visit on seasoning crops
              description: |-
                ## Purpose
                Extension officers see dozens of herb plots and know which pests are moving through the district this season, which chive selections do well locally and which products are approved for crops cut weekly. A planned visit, with your questions written down and your beds numbered, is worth far more than a chance conversation at the office. It also puts you on their list for training days and planting material.

                ## Milestones
                1. A visit booked with the district extension office.
                2. A list of five questions prepared about your crops, pests and buyers.
                3. The visit held, with advice written against the relevant bed numbers.
                4. One follow-up action from the visit completed within a month.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A completed extension visit with written advice and at least one follow-up action done."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Call the district extension office and request a field visit"
                - "Write five questions about herbs, pests and approved products"
                - "Walk the beds with the officer and note advice per bed"
                - "Complete the first follow-up action within a month"
            - name: Weekly cutting plan for continuous harvest
              description: |-
                ## Purpose
                Continuous harvest only works if no bed is cut too hard and none is left to toughen or flower. A short weekly plan, made from the record book, decides which beds are cut for which buyer and which are rested to regrow. Over a few months it smooths the supply so you can promise the same volume every week.

                ## Milestones
                1. A regrowth interval written down for each crop from your own records.
                2. A weekly plan showing which beds are cut for each order.
                3. No bed cut again before its regrowth interval for a full month.
                4. Weekly volumes within a tenth of the planned figure for four weeks running.

                ## Notes
                Cut chadon beni by taking outer leaves and leaving the centre. Cutting chive and celery too low slows regrowth and invites rot.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written weekly cutting plan used for four weeks, with no bed recut early and volumes within ten percent of plan."
                cadence: rolling
              tasks:
                - "Note the regrowth interval for each crop from the record book"
                - "Plan the week's cuts bed by bed against the orders @recurring(weekly:sun)"
                - "Mark each bed as cut, resting or ready on the plan"
                - "Compare planned and actual bunches at the end of the week"
            - name: Bunch size standard for every herb
              description: |-
                ## Purpose
                Buyers notice when this week's chive bunch is half the size of last week's, and a vendor who cannot sell a consistent product will look for another supplier. Agreeing a standard bunch for each herb, by weight or by stem count, and checking it every month keeps the product steady. It also makes the cost per bunch real.

                ## Milestones
                1. A standard bunch agreed with your main buyer for each herb, by weight or stem count.
                2. A sample bunch of each herb photographed as the reference.
                3. Kitchen scale and bands set at the bunching table.
                4. A monthly spot check of ten bunches showing all within the agreed range.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written bunch standard for each herb and monthly spot checks with every sampled bunch in range."
                cadence: rolling
              tasks:
                - "Agree a bunch weight or stem count for each herb with your main buyer"
                - "Photograph a reference bunch of each herb"
                - "Keep a kitchen scale and bands at the bunching table"
                - "Weigh ten random bunches and record the spread @recurring(monthly:3)"
            - name: Same-morning cutting and cooling routine
              description: |-
                ## Purpose
                Leafy herbs start losing water the moment they are cut, and a bunch left in the midday sun can be limp before it reaches the buyer. Cutting in the cool of the early morning, moving bunches straight into shade, a light rinse in clean water and a cool box for transport add days to shelf life. A written routine means the same care whether you or a helper does the cut.

                ## Milestones
                1. A shaded bunching table set up close to the beds.
                2. A written routine covering cutting time, shade, rinsing, draining and packing.
                3. Cool boxes or insulated crates in use for every delivery.
                4. Four weeks of deliveries with no buyer complaint about wilting.

                ## Notes
                Start from the **Operational checklist** template. Rinse only in water you know is safe for food that is eaten raw.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written cutting and cooling routine followed on every delivery day for four weeks with no wilting complaints."
                cadence: rolling
              tasks:
                - "Set up a shaded bunching table close to the beds"
                - "Write the cutting, rinsing and packing steps on one page"
                - "Cut, shade and pack bunches before 9am on delivery days @recurring(weekly:tue,fri)"
                - "Ask each buyer how the bunches looked on arrival"
            - name: Monthly sowing of chadon beni and celery
              description: |-
                ## Purpose
                Older chadon beni beds slow down and start to bolt after some months of cutting, and celery plants toughen and thin out. A small tray sown every month means a fresh bed is always ready to take over, so supply never dips while an old bed is cleared. Doing it on the same day each month stops it slipping.

                ## Milestones
                1. A monthly sowing date fixed and written in the record book.
                2. One tray each of chadon beni and celery sown every month for three months.
                3. Each tray labelled with date, crop and seed batch.
                4. An old bed replaced by young plants without a gap in supply.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Trays of chadon beni and celery sown on schedule for three consecutive months, and one bed replaced without a supply gap."
                cadence: rolling
              tasks:
                - "Fix a monthly sowing day and write it in the record book"
                - "Sow one tray each of chadon beni and celery @recurring(monthly:5)"
                - "Label each tray with date, crop and seed batch"
                - "Pick the oldest bed to replace when the new plants are ready"
            - name: Monday herb bed scouting walk
              description: |-
                ## Purpose
                Leaf miners, aphids, mites, caterpillars and rots can spoil a whole bed of chive or celery inside a fortnight, and spotted early most problems can be handled by picking off, removing plants or adjusting water. A fixed walk every Monday, turning leaves and checking the base of clumps, catches problems while they are small. Writing what you find against each bed builds a picture of where trouble starts.

                ## Milestones
                1. A scouting route that passes every bed in a fixed order.
                2. A simple scouting sheet listing the common pests and problems for each crop.
                3. Eight weekly walks completed with findings logged per bed.
                4. Any problem beyond what you can handle reported to the extension officer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly scouting walks logged per bed, with any serious problem reported to extension."
                cadence: rolling
              tasks:
                - "Draw a scouting route that passes every bed"
                - "Make a sheet listing common pests and problems per crop"
                - "Walk every bed and log what you find @recurring(weekly:mon)"
                - "Send photos of anything unfamiliar to the extension officer"
            - name: Feeding herb beds between cuts
              description: |-
                ## Purpose
                Every cut takes leaf, and with it nutrients, so beds that were rich at planting run down within a few months and regrowth slows. A monthly round of compost or the feed your soil test and extension officer recommend, logged against each bed, keeps regrowth steady. The record also shows which beds respond and which need a closer look.

                ## Milestones
                1. A feeding plan per crop agreed with the extension officer from the soil test.
                2. Compost or feed applied to every bed on a fixed monthly day.
                3. Each application logged against the bed number.
                4. Regrowth compared between fed beds and any that missed a round.

                ## Notes
                Use only the rates on the product label or from your extension officer. Heavy feeding of leafy herbs can scorch them and push soft growth that pests love.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly feeding round recorded per bed for three months, following the agreed plan."
                cadence: rolling
              tasks:
                - "Agree a feeding plan per crop with the extension officer"
                - "Top-dress or feed every bed and log it per bed @recurring(monthly:18)"
                - "Note any bed that missed a round and why"
                - "Compare regrowth between well-fed and missed beds"
            - name: Weekly bunch count and price log
              description: |-
                ## Purpose
                Without numbers it is hard to tell whether celery earns more per bed than parsley, or whether the price at the market has dropped since last month. A weekly log of bunches cut, sold, returned and the price each buyer paid shows exactly what each crop earns. After a season it answers the questions that decide next year's crop mix.

                ## Milestones
                1. A log with columns for crop, bunches cut, bunches sold, returns and price per buyer.
                2. Twelve weeks of entries without a gap.
                3. Income per bed per month worked out for each crop.
                4. One change to the crop mix or pricing made from what the log shows.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks of bunch and price entries, with income per bed calculated for each crop."
                cadence: rolling
              tasks:
                - "Set up the log with crop, cut, sold, returned and price columns"
                - "Enter the week's bunches and prices @recurring(weekly:sat)"
                - "Work out income per bed for each crop after twelve weeks"
                - "Write down one change to make from what the log shows"
            - name: Standing order book for regular buyers
              description: |-
                ## Purpose
                Regular orders keep a herb business alive: the vendor who takes forty bunches every Friday, the cook shop that wants chive and thyme twice a week. Keeping those orders in one book, confirming each week and noting changes early, lets you plan cuts instead of reacting. It also tells you when one buyer has grown too large a share of your sales.

                ## Milestones
                1. Every regular buyer listed with their usual order, delivery day and contact.
                2. Orders confirmed each week before the cutting plan is made.
                3. Changes and skipped orders noted with the reason.
                4. Each buyer's share of monthly sales worked out.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An order book covering every regular buyer, confirmed weekly for two months, with each buyer's share of sales calculated."
                cadence: rolling
              tasks:
                - "List every regular buyer with their usual order and delivery day"
                - "Message each buyer to confirm next week's order @recurring(weekly:thu)"
                - "Send each regular buyer a monthly statement of bunches and payments @recurring(monthly:28)"
                - "Work out what share of sales your largest buyer takes"
            - name: Weeding and mulch rounds in close-planted beds
              description: |-
                ## Purpose
                Close planting and low growth let grass and nutgrass choke herbs quickly, and the weeds end up tangled in the bunches, which buyers hate. A regular weeding round, and a mulch of dry grass or other clean material between rows, keeps beds tidy, holds moisture and cuts soil splash onto the leaves. It is dull work that pays straight back in cleaner bunches.

                ## Milestones
                1. A clean, weed-free mulch source identified.
                2. Every bed weeded and mulched once.
                3. A weekly weeding round kept up for two months.
                4. Bunching time per bunch reduced because fewer weeds need picking out.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All beds mulched and a weekly weeding round kept for eight weeks, with weeds absent from sampled bunches."
                cadence: rolling
              tasks:
                - "Find a mulch source free of weed seed and chemicals"
                - "Weed and mulch every bed once, starting with chive"
                - "Weed one third of the beds in rotation @recurring(weekly:wed)"
                - "Time how long a bunch takes to clean before and after"
            - name: Dividing and replanting chive and thyme clumps
              description: |-
                ## Purpose
                Chive clumps grow crowded and thin-stemmed after some months, and thyme turns woody and patchy, so yields fall even when the beds look full. Lifting, splitting and replanting the best pieces every few months renews the bed for nothing but labour, and gives you spare planting material to expand or sell. A quarterly round keeps it from being forgotten.

                ## Milestones
                1. The oldest or weakest chive and thyme beds identified from the record book.
                2. One bed of each lifted, split and replanted with the healthiest pieces.
                3. Diseased or weak material discarded away from the beds.
                4. Regrowth of the renewed beds compared with an undivided bed after six weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly division round completed, with renewed beds logged and their regrowth compared after six weeks."
                cadence: cyclic
              tasks:
                - "Mark the oldest chive and thyme beds in the record book"
                - "Lift, split and replant one bed of each crop @recurring(quarterly)"
                - "Throw away rotten or weak pieces far from the beds"
                - "Compare regrowth with an undivided bed after six weeks"
            - name: Keeping chadon beni leafy and slow to bolt
              description: |-
                ## Purpose
                Once chadon beni sends up its spiny flower stalk the leaves turn tough, small and bitter, and the bed is worth far less. Heat, full sun, drought stress and age all push it to bolt. Learning the early signs, and what shade, watering and cutting do to delay it, can double the useful life of a bed.

                ## Milestones
                1. The early signs of bolting identified on your own plants and photographed.
                2. Two beds compared: one in more shade, one in full sun.
                3. Flower stalks removed as they appear on one bed and left on another for a month.
                4. A short note written on what delayed bolting best in your conditions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note, with photos, on which shade, watering and stalk removal practices delayed bolting on your site."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Photograph a chadon beni plant at the first sign of a flower stalk"
                - "Compare bolting between a shaded and a sunny bed"
                - "Pinch out flower stalks on one bed for a month"
                - "Write down what delayed bolting most"
            - name: Identifying pests on seasoning crops
              description: |-
                ## Purpose
                Leaf miner trails on celery, aphids clustering in chive, mites bronzing thyme, caterpillars on parsley and slugs in wet beds all call for different responses, and misidentifying them wastes money. Learning to recognise the common herb pests and the damage they leave lets you act early and describe the problem accurately to the extension officer. A photo guide for your own beds is the result.

                ## Milestones
                1. A list of the common pests of each crop you grow, from extension material.
                2. Photos of each pest or its damage taken on your own beds or a neighbour's.
                3. A one-page guide with each pest, its damage and the first response to try.
                4. The guide checked by the extension officer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page photo guide of the common herb pests and their damage, reviewed by the extension officer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get the extension office's pest sheets for herbs and leafy crops"
                - "Photograph pests or damage you find on the scouting walk"
                - "Make a one-page guide pairing each pest with its damage"
                - "Ask the extension officer to check the guide"
            - name: Recognising rots, spots and rust on herbs
              description: |-
                ## Purpose
                Wet season brings damping off in seed trays, root and crown rot in chive and thyme, leaf spots on celery and rusty streaks on chive leaves. Some respond to better drainage and spacing, some need infected plants removed at once, and some need an approved product chosen with the extension officer. Knowing which is which keeps one bad bed from spreading through the plot.

                ## Milestones
                1. The common diseases of your herbs listed with their symptoms.
                2. Healthy and diseased plants of each crop photographed side by side.
                3. A rule written for when to remove plants and when to call extension.
                4. One disease problem handled using the rule and the outcome logged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written symptom list with photos and a remove-or-report rule, used on at least one real problem."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the common herb diseases with symptoms from extension material"
                - "Photograph healthy and sick plants side by side"
                - "Write a rule for removing plants versus calling extension"
                - "Log how the next disease problem was handled"
            - name: Rooting thyme, broad-leaf thyme and mint cuttings
              description: |-
                ## Purpose
                Fine-leaf thyme, broad-leaf thyme (also called Spanish thyme or big-leaf thyme) and mint all grow readily from cuttings, which means you can multiply your best plants for almost nothing. Getting the cutting length, rooting medium and shade right turns a low strike rate into a reliable one. Spare rooted plants can also be sold to home gardeners.

                ## Milestones
                1. Cuttings taken from three healthy mother plants of each herb.
                2. Two rooting methods tried side by side, such as damp sand and a seed mix.
                3. The rooting rate counted after three weeks for each method.
                4. The better method written down as your standard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recorded rooting rate for two methods and a written standard method for each herb."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose three healthy mother plants of each herb"
                - "Take cuttings and set half in damp sand and half in seed mix"
                - "Count rooted cuttings after three weeks"
                - "Write the better method down as the standard"
            - name: Raising celery seedlings from tiny seed
              description: |-
                ## Purpose
                Local celery seed is dust-fine and slow, and it is easily buried too deep, washed out by rain or lost to damping off. Mastering a careful tray method, with surface sowing, gentle watering and pricking out at the right size, gives you strong seedlings that establish quickly in the bed. It is the skill that separates growers with steady celery from those who buy plants.

                ## Milestones
                1. Seed sown on the surface of a fine mix and lightly covered.
                2. Trays watered from below or with a fine rose until germination.
                3. Seedlings pricked out into cells at the right size.
                4. A transplant success rate recorded for the batch.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A batch of celery seedlings raised and transplanted with its germination and transplant success rates recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Sow celery seed on the surface of a fine seed mix"
                - "Water from below or with a fine rose until seedlings appear"
                - "Prick out seedlings into cells once they have true leaves"
                - "Record how many seedlings survived transplanting"
            - name: Clean water and soil splash on herbs eaten raw
              description: |-
                ## Purpose
                Chadon beni, chive and parsley often go straight into green seasoning or a salad without cooking, so whatever is on the leaf goes into someone's food. Rain and watering splash soil onto low leaves, and rinsing in untested pond or drain water can add more than it removes. Learning where contamination comes from in a herb plot, and fixing the obvious risks, protects your buyers and your name.

                ## Milestones
                1. Water used for irrigation and rinsing identified and its source described.
                2. A water test arranged through the health or agriculture authority if the source is untreated.
                3. Mulch or raised beds in place to reduce soil splash on low leaves.
                4. Animals and manure kept out of the bed area, with any fencing done.

                ## Notes
                For a full food safety programme or certification, see the food safety area. This project covers the herb plot basics.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Rinse water source tested or confirmed safe, soil splash reduced by mulch or beds, and animals kept out of the plot."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down where your irrigation and rinse water come from"
                - "Ask the health or agriculture office about testing untreated water"
                - "Mulch or raise any bed where leaves touch bare soil"
                - "Fence or block animal access to the herb beds"
            - name: Shelf life test of your bunches
              description: |-
                ## Purpose
                Buyers judge you on how your herbs look on day three, not day one. A simple shelf life test, keeping a few bunches of each herb at room temperature and in a chiller and checking them daily, tells you how long each one really lasts and which handling step makes the most difference. The results give you honest answers when a buyer asks how long the chive will keep.

                ## Milestones
                1. Three bunches of each herb set aside from a normal cut.
                2. Bunches kept at room temperature and in a chiller, some bagged and some not.
                3. Condition scored daily until each bunch was unsaleable.
                4. Days of saleable life per herb and storage method written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of saleable days for each herb under at least two storage conditions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set aside three bunches of each herb from a normal cut"
                - "Store some in a chiller and some at room temperature"
                - "Score each bunch daily for colour, firmness and smell"
                - "Write down the saleable days per herb and method"
            - name: Spray decisions for crops cut every week
              description: |-
                ## Purpose
                Spraying herbs is a hard case: a bed cut every seven to ten days may never be clear of a product's pre-harvest interval, and residues sit on the very leaves that are sold. Many products are not approved for leafy herbs at all. Learning to put cultural controls first, and to choose any product only with the extension officer and the label, keeps residues off the plate and your buyers safe.

                ## Milestones
                1. The list of products approved for leafy herbs in your country obtained.
                2. A written order of controls: removal, water and spacing changes, then approved products.
                3. Any product used checked against its label for crop approval and pre-harvest interval.
                4. Cutting held back on a sprayed bed until the interval had passed, and logged.

                ## Notes
                Never use a product on herbs that the label does not list for them. Follow the label and your extension officer on rates and intervals, and keep the full spray record.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written control order for herbs and every spray logged with its label approval and a cutting hold that met the interval."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the extension office for the approved product list for leafy herbs"
                - "Write the order of controls to try before any spray"
                - "Check every product label for herb approval and pre-harvest interval"
                - "Mark sprayed beds as closed to cutting until the interval ends"
            - name: Shade cloth trial over chadon beni
              description: |-
                ## Purpose
                Many growers say chadon beni grown under shade is greener, larger-leafed and slower to bolt, and buyers pay more for it. A shade cloth frame costs money and has to survive wind, so it is worth testing on one or two beds against an open bed before covering the whole crop. Measure the difference in bunches and price, not just appearance.

                ## Milestones
                1. One bed covered with shade cloth and one similar bed left open.
                2. Bunches per bed and days to bolting recorded for both over three months.
                3. Any price difference from buyers noted.
                4. A decision made, with the numbers, on whether to shade more beds.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three months of bunch, bolting and price figures for shaded and open beds, with a recorded decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Price shade cloth and a simple frame for one bed"
                - "Cover one bed and leave a similar bed open"
                - "Record bunches and bolting dates for both beds"
                - "Decide from the numbers whether to shade more beds"
            - name: Drip line or watering can for herb beds
              description: |-
                ## Purpose
                Hand watering a dozen herb beds can take an hour a day in the dry season and wets the leaves, which encourages disease. A simple gravity or pumped drip line can cut that time and water to a fraction, but it costs money and clogs if the water is dirty. Comparing your real watering hours and water use with the cost of a small drip set-up gives you an answer in numbers.

                ## Milestones
                1. Daily watering time and approximate water use measured for two weeks.
                2. A quote or parts list for drip line covering the herb beds.
                3. Payback worked out in hours saved and water saved.
                4. A decision recorded, and drip installed on a first set of beds if it pays.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Measured watering hours and a costed drip option, with a recorded decision on whether to install."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Time your daily watering for two weeks"
                - "Get a parts list and price for drip line on the herb beds"
                - "Work out the hours and water a drip line would save"
                - "Record the decision and install on a first set of beds if it pays"
            - name: Adding basil, mint and fever grass to the line
              description: |-
                ## Purpose
                Once the core seasoning crops sell steadily, a few extra herbs such as basil, mint, fever grass (lemongrass), parsley or broad-leaf thyme can fill a gap for buyers who want one supplier for everything. Each new crop adds work, so test demand with a small bed and one buyer before planting more. Drop anything that does not sell within two months.

                ## Milestones
                1. Three candidate herbs chosen from what buyers have asked for.
                2. One small bed of each planted and its first cut offered to a buyer.
                3. Sales and price for each candidate tracked for two months.
                4. Each candidate kept, expanded or dropped, with the reason written down.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two months of sales for three candidate herbs and a recorded keep, expand or drop decision for each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your buyers which other herbs they would order"
                - "Plant one small bed each of three candidate herbs"
                - "Track sales and price of each for two months"
                - "Keep, expand or drop each one and note why"
            - name: Seasoning peppers beside the herb beds
              description: |-
                ## Purpose
                Mild seasoning peppers (often called pimento peppers in Trinidad) go into the same green seasoning as chadon beni and chive, and buyers often ask for them together. Adding a few rows can lift the value of each delivery without a new buyer, but peppers are a longer crop with their own pests. Test it on a small scale and keep it secondary to the herbs.

                ## Milestones
                1. A buyer confirmed who wants seasoning peppers with the herb order.
                2. A small block of seasoning pepper plants raised and planted.
                3. Pickings and sales logged alongside the herb bunches.
                4. A decision on whether the peppers earn their space.

                ## Notes
                This is a side line for a herb plot. For hot peppers as a main crop, see the hot pepper farming area.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A season of seasoning pepper sales logged with the herb orders and a recorded keep or drop decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your main buyers if they want seasoning peppers with herbs"
                - "Raise and plant a small block of seasoning pepper"
                - "Log pepper pickings and sales with the herb bunches"
                - "Decide whether the peppers earn their space"
            - name: Pricing by the bunch or by the pound
              description: |-
                ## Purpose
                Market vendors and shops usually buy by the bunch, while green seasoning makers and some cooks buy leaf by weight, and the two can pay very differently for the same bed. Working out what a bed earns under each method, from your cost per bunch and actual weights, tells you which buyers to chase and what to quote. It also stops a weight buyer quietly getting your herbs cheaper than a bunch buyer.

                ## Milestones
                1. The average weight of a standard bunch of each herb measured.
                2. Income per bed worked out at current bunch and per-pound prices.
                3. A price list written for both bunch and weight sales.
                4. Prices checked against the floor price from your costing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-column price list by bunch and by weight for each herb, every price above the floor price."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Weigh ten standard bunches of each herb and average them"
                - "Work out income per bed at bunch and per-pound prices"
                - "Write a price list for both ways of selling"
                - "Check every price against your floor price"
            - name: Sleeved and labelled herb bunches
              description: |-
                ## Purpose
                A plain banded bunch sells on the market stall, but shops and some buyers will pay more for a bunch in a sleeve or bag with your name, the herb and a phone number. Packaging adds cost per bunch and time at the bunching table, so price it carefully and test it with one buyer before changing everything. It also helps a returning customer find you again.

                ## Milestones
                1. Two packaging options priced per bunch, such as a printed sleeve and a sealed bag.
                2. A simple label designed with the herb, your farm name and contact.
                3. Sleeved bunches supplied to one buyer for a month.
                4. The extra price and extra cost compared and a decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A month of sleeved bunch sales to one buyer, with the price gain and cost recorded and a decision made."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Price a printed sleeve and a sealed bag per bunch"
                - "Design a label with the herb, farm name and phone number"
                - "Supply sleeved bunches to one buyer for a month"
                - "Compare the extra price with the extra cost"
            - name: Cutting the wilt-and-dump rate
              description: |-
                ## Purpose
                Every bunch that comes back unsold or wilts before delivery is pure loss, and many growers never count them. Measuring how many bunches are dumped each month, and why, usually points to a fixable cause: cutting too early in the day, too much for a slow buyer, or a hot ride in the back of a van. Halving the dump rate is often worth more than finding a new buyer.

                ## Milestones
                1. A count of dumped and returned bunches started, with a reason for each.
                2. The top two causes identified after a month.
                3. One change made for each of those causes.
                4. The monthly dump rate compared before and after the changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Dumped bunches counted with reasons for three months and the monthly rate lower than in the first month."
                cadence: rolling
              tasks:
                - "Start a tally of dumped and returned bunches with reasons"
                - "Total the month's dumped bunches and the top causes @recurring(monthly:21)"
                - "Make one change for each of the top two causes"
                - "Compare the dump rate before and after the changes"
            - name: Mixed seasoning bundle for home cooks
              description: |-
                ## Purpose
                Many households buy chadon beni, chive, thyme, celery and a seasoning pepper together every week for green seasoning or Sunday cooking. A ready-made mixed bundle at a fair price, sold at the market, through a shop or by message to regular customers, saves them stopping at several stalls and moves more of your crop at once. Settle the contents and price so it pays more than selling the bunches separately.

                ## Milestones
                1. A bundle recipe set, listing each herb and its amount.
                2. The bundle priced from your bunch costs with a margin above separate sales.
                3. A trial batch sold to regular customers or through one outlet.
                4. Weekly bundle sales tracked for a month and the recipe adjusted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A priced mixed bundle sold for four weeks, with weekly sales recorded and the contents reviewed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the bundle recipe with each herb and its amount"
                - "Price the bundle from your bunch costs"
                - "Offer a trial batch to regular customers"
                - "Track weekly bundle sales for a month"
            - name: Bulk leaf supply to green seasoning makers
              description: |-
                ## Purpose
                Small makers of bottled green seasoning and marinades need chadon beni, chive, thyme and celery by the pound, every week, often in larger volumes than any market vendor. Their quality needs differ: clean, unbunched leaf, picked over and delivered on a fixed day. A clear written arrangement on volume, price per pound and delivery turns one buyer into a large share of your plot.

                ## Milestones
                1. Two or three seasoning makers contacted and their needs written down.
                2. A sample delivery made and feedback recorded.
                3. Weekly volume, price per pound, delivery day and payment terms agreed in writing.
                4. Monthly volume reviews held with the maker.

                ## Notes
                Start from the **Vendor** template to keep the maker's details, terms and contact history in one place.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written supply arrangement with a seasoning maker, with deliveries and monthly volume reviews recorded for three months."
                cadence: rolling
              tasks:
                - "List seasoning makers in your area and how to reach them"
                - "Deliver a sample of clean picked leaf and ask for feedback"
                - "Agree volume, price per pound and payment terms in writing"
                - "Review next month's volume with the maker @recurring(monthly:9)"
            - name: Christmas seasoning demand plan
              description: |-
                ## Purpose
                Demand for chive, thyme, celery and chadon beni jumps in the weeks before Christmas, when households season hams, pastelles, stews and black cake fruit, and prices rise with it. Herbs cannot be planted in December for December, so the beds and trays for the rush need to be in the ground months earlier. Planning back from the peak lets you catch the best prices of the year.

                ## Milestones
                1. Last season's December sales and prices gathered from your log or buyers.
                2. Extra beds and trays planned and dated so they are ready for the peak.
                3. Buyers' December orders pencilled in by early November.
                4. Holiday cutting and delivery days planned with any extra help arranged.

                ## Notes
                Other festivals bring smaller peaks, such as Easter and Divali. The same back-planning works for each.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Extra beds planted on a dated plan, buyers' December orders recorded and the holiday cutting schedule set."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull last December's sales and prices from your log or buyers"
                - "Date the extra sowings and divisions needed for the peak"
                - "Ask each buyer for their December order by early November"
                - "Plan the holiday cutting days and arrange extra help"
            - name: Wet season bed rebuild for chive and thyme
              description: |-
                ## Purpose
                Chive and fine-leaf thyme hate wet feet, and a few weeks of heavy rain can rot whole beds from the base. Before the wet season, raising low beds, opening drains, thinning crowded clumps and moving thyme to the best-drained spots saves the crop that pays through the rainy months. After the season, a quick check shows which beds held up.

                ## Milestones
                1. Every bed that held water last wet season identified from the record book or a site walk.
                2. Low beds raised or edged and drains cleared before the rains.
                3. Crowded chive and thyme clumps thinned for airflow.
                4. Losses per bed recorded at the end of the wet season.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All low beds raised and drains cleared before the rains, with wet season losses per bed recorded afterwards."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Mark every bed that held water last wet season"
                - "Raise low beds and clear drains before the rains"
                - "Thin crowded chive and thyme clumps for airflow"
                - "Record losses per bed when the wet season ends"
            - name: Dry season water plan for herb beds
              description: |-
                ## Purpose
                Herbs are shallow-rooted and cut often, so they suffer quickly when water is short, and chadon beni bolts the moment it is stressed. A dry season plan sets out how much water the beds need, where it will come from if the supply is cut, which beds come first and which can be rested. Making it before the dry months start is the difference between cutting through the season and starting again in June.

                ## Milestones
                1. Daily water needed for the herb beds estimated.
                2. Storage tanks or drums sized to cover a supply cut of several days.
                3. Beds ranked by value so the best earners are watered first.
                4. Mulch topped up on every bed before the driest months.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written dry season plan with daily water need, storage in place and a ranked list of beds to water first."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Estimate the daily water the herb beds use"
                - "Size and set up tanks or drums for a supply cut"
                - "Rank beds by income so the best are watered first"
                - "Top up mulch on every bed before the driest months"
            - name: Storm readiness for herb beds and shade frames
              description: |-
                ## Purpose
                Herb plants often survive a storm better than the structures around them: shade cloth becomes a sail, light frames fold and seed trays wash away. A short checklist for taking down cloth, tying frames, moving trays and containers under cover and saving clumps of planting material gets you back to cutting within weeks rather than months. Check it at the start of each hurricane season.

                ## Milestones
                1. A storm checklist covering shade cloth, frames, trays, containers and tools.
                2. A sheltered place chosen for trays and containers.
                3. Spare chive and thyme clumps potted and kept as backup planting material.
                4. A recovery plan for replanting from backup material after a storm.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A storm checklist and recovery plan written, with backup planting material potted and a shelter spot chosen."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a checklist for cloth, frames, trays and containers"
                - "Choose a sheltered spot for trays and containers"
                - "Pot spare chive and thyme clumps as backup stock"
                - "Check frame fixings and the checklist before the season starts @recurring(yearly)"
            - name: End-of-year herb plot review
              description: |-
                ## Purpose
                Once a year, the log, the record book and the order book together tell you which crops earned their beds, which buyers paid well and on time, and which problems came back. A short review at the end of the year, with a few clear decisions for the next, keeps the plot improving instead of repeating the same mistakes. It also gives you the figures a lender or incentive programme might ask for.

                ## Milestones
                1. Income per bed per crop for the year totalled.
                2. Each buyer's volume, price and payment record summarised.
                3. The three worst recurring problems listed.
                4. Three decisions for next year written down and dated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review page with income per crop, a buyer summary and three dated decisions for the next year."
                cadence: cyclic
              tasks:
                - "Total income per bed per crop for the year"
                - "Summarise each buyer's volume, price and payment record"
                - "Hold the yearly herb plot review and write three decisions @recurring(yearly)"
                - "List the three problems that came back most often"
            - name: Backyard herb beds alongside a day job
              description: |-
                ## Purpose
                Plenty of herb growers start with a few beds behind the house and a job during the week, selling to neighbours, a nearby shop or a vendor. With only early mornings and weekends, the plan has to fit the time: crops that forgive a missed day, one cutting day a week and buyers who collect or take a fixed order. Done well, a small plot can pay its way and test whether to grow bigger.

                ## Milestones
                1. Weekly hours available for the plot written down honestly.
                2. A crop mix chosen that tolerates a weekly rather than daily routine.
                3. One fixed cutting and delivery day agreed with buyers.
                4. Three months of income and hours logged.

                ## Notes
                Chive and thyme cope with a weekly routine better than chadon beni in full sun, which needs steady water.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A small herb plot run on one fixed cutting day for three months, with hours and income logged."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write down the hours you can give the plot each week"
                - "Choose herbs that cope with a weekly routine"
                - "Agree one cutting and delivery day with your buyers"
                - "Cut and bunch the week's orders on Saturday morning @recurring(weekly:sat)"
            - name: Waist-high table beds for an older grower
              description: |-
                ## Purpose
                Herbs are a good crop for an older or retired grower, but bending to cut and weed low beds every week wears out knees and backs. Table beds, raised containers on stands or tall block beds bring the work up to waist height, and a seat at the bunching table helps too. Planning the plot around your body means you can keep growing for years.

                ## Milestones
                1. The tasks that cause the most strain identified.
                2. A table bed or tall bed design chosen and costed.
                3. At least half the beds converted to working height.
                4. A seated bunching station and a cart for carrying in place.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least half the herb beds at working height and a seated bunching station in use."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Note which herb tasks strain your back or knees most"
                - "Price a table bed or tall block bed design"
                - "Convert half the beds to waist height"
                - "Set up a seated bunching station and a carrying cart"
            - name: Young grower's first herb business
              description: |-
                ## Purpose
                Herbs suit a young grower with little capital: small beds, cheap planting material and money coming in within weeks rather than months. The risk is selling too cheaply and burning out. A plain plan covering a starting budget, a youth farming programme or grant if one exists, two or three buyers and a price above cost gives the business a real chance.

                ## Milestones
                1. A start-up budget for the first ten beds written down.
                2. Youth farming programmes, grants or training in your country checked.
                3. Two or three buyers lined up before the first cut.
                4. Three months of sales with every price above the floor price.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A start-up budget, two or more buyers and three months of sales at prices above cost."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a start-up budget for your first ten beds"
                - "Check for youth farming programmes or grants in your country"
                - "Line up two or three buyers before the first cut"
                - "Review three months of sales against the floor price"
            - name: Neighbourhood grower group selling herbs together
              description: |-
                ## Purpose
                A buyer who wants two hundred bunches of chive a week will rarely deal with five separate small growers, but may deal with one group that supplies all of it to one standard. Pooling herbs means agreeing a shared bunch standard, a cutting rota, a collection point and a fair way to share payments. Written rules from the start avoid most fallings out.

                ## Milestones
                1. Three to six growers agreed to sell together.
                2. Shared rules written on bunch standard, quality checks and payment sharing.
                3. A collection point and delivery rota set.
                4. A first combined order delivered and paid out according to the rules.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Written group rules and a first combined herb order delivered and paid out by those rules."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Invite nearby herb growers to talk about selling together"
                - "Write shared rules on bunch standard and payment sharing"
                - "Choose a collection point and a delivery rota"
                - "Hold a group meeting to check volumes and payments @recurring(monthly:12)"
            - name: Scaling a herb garden to a quarter acre
              description: |-
                ## Purpose
                Going from a dozen beds to a quarter acre changes the work: hand watering stops being possible, cutting takes more than one person and you need buyers for several times the volume. Scaling in stages, with buyers secured before each expansion and irrigation and labour planned, keeps you from growing herbs faster than you can sell them. Measure every stage before taking the next.

                ## Milestones
                1. Buyers confirmed for the extra volume before each stage.
                2. Land, irrigation and labour planned for the full quarter acre.
                3. The first expansion stage planted and selling.
                4. A stage review showing income per bed held up before the next stage.

                ## Notes
                Expanding faster than your buyers grow is the usual way small herb businesses fail. Stage it.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A staged expansion plan with buyers secured for each stage and a review recorded after the first stage."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask current buyers how much more they could take"
                - "Plan land, irrigation and labour for a quarter acre"
                - "Plant and sell from the first expansion stage"
                - "Review income per bed before starting the next stage"
            - name: Adding seasoning crops to a vegetable farm
              description: |-
                ## Purpose
                A farm already growing tomatoes, cabbage or bodi has buyers, water and labour that a few herb beds can share, and the same vendors who buy vegetables often want chive and thyme too. Herbs bring weekly income between the bigger harvests. The challenge is the weekly cutting rhythm, which is different from a field crop, so set aside the beds and time on purpose.

                ## Milestones
                1. Vegetable buyers asked which seasoning crops they would add to their order.
                2. A block of beds near water set aside for herbs.
                3. A weekly herb cutting day fitted around the vegetable work.
                4. Herb income tracked separately for three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A herb block planted on an existing farm, cut weekly and with its income tracked separately for three months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your vegetable buyers which herbs they would also order"
                - "Set aside a block of beds near water for herbs"
                - "Fit a weekly herb cutting day around the vegetable work"
                - "Track herb income separately from vegetables"
            - name: Year-round chadon beni supply for a processor
              description: |-
                ## Purpose
                Processors making green seasoning, sauces or marinades need chadon beni every week of the year, and supply that collapses in the dry season or after heavy rain loses the contract. A year-round programme combines staggered sowings, a mix of shaded and open beds, dry season water and backup growers so the weekly volume holds. It is the most demanding and often the most rewarding herb contract.

                ## Milestones
                1. The processor's weekly volume, specification and price agreed in writing.
                2. A sowing and bed plan that covers the agreed volume in both wet and dry seasons.
                3. One or two backup growers arranged for shortfalls.
                4. Twelve months of weekly deliveries tracked against the agreed volume.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written supply agreement and twelve months of weekly chadon beni deliveries tracked against the agreed volume."
                cadence: cyclic
              tasks:
                - "Agree weekly volume, specification and price with the processor"
                - "Plan sowings and beds to cover wet and dry seasons"
                - "Arrange one or two backup growers for shortfalls"
                - "Check delivered volume against the agreement @recurring(monthly:27)"
            - name: Selecting your own chive and chadon beni stock
              description: |-
                ## Purpose
                Over a few seasons you will notice some chive clumps that grow thicker and resist rot, and some chadon beni plants that stay leafy longer before bolting. Marking and multiplying those plants, and saving seed from the best chadon beni, builds planting stock suited to your own site that you cannot buy. It is slow work that pays back for years.

                ## Milestones
                1. Selection criteria written for each crop, such as stem thickness, rot resistance and slow bolting.
                2. The best plants marked in the beds and recorded.
                3. Selected chive divided into a dedicated mother bed.
                4. Seed saved from the best chadon beni and its germination tested.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A mother bed of selected chive and a tested batch of seed saved from selected chadon beni plants."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the traits you want in chive and chadon beni"
                - "Mark the best plants in the beds with coloured ties"
                - "Divide selected chive into a dedicated mother bed"
                - "Save and test seed from the best chadon beni plants"
            - name: Residue testing for a premium herb buyer
              description: |-
                ## Purpose
                Some hotels, export packers and health-food buyers ask for proof that herbs are free of pesticide residues above permitted limits, and they pay more for it. Meeting that demand means a clean spray record, a sample sent to an accredited lab and a plot run so that results come back clear every time. It suits a grower who already keeps good records and sprays rarely.

                ## Milestones
                1. The buyer's residue requirements and the lab that can test them identified.
                2. Twelve months of spray records checked for gaps.
                3. A first sample tested at an accredited lab and the report filed.
                4. A testing schedule agreed with the buyer.

                ## Notes
                For export rules beyond the lab test, see the agricultural export compliance area.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An accredited lab residue report for your herbs and a testing schedule agreed with the premium buyer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the buyer exactly which residue tests they require"
                - "Find an accredited lab that runs those tests"
                - "Check your spray records for the past year for gaps"
                - "Send a first sample and file the lab report"
---

# Herbs and Seasoning Crops

Chadon beni, chive, thyme and celery are small crops with a big advantage: Caribbean kitchens use them every single day, so a well-run herb plot can be cut and paid for every week of the year. The money is made or lost in the details, from beds that drain, clean planting material and leaves that do not bolt, to bunches of the same size, cut in the cool of the morning and delivered before they wilt. This area starts with the foundations (crop mix, site, beds, costs, planting material and records), then the weekly cutting, cooling, sowing and scouting routines, the skills of keeping herbs leafy and clean, the decisions and trials that lift price and cut waste, the dated events of a herb year, variants for backyard, older, young and group growers, and finally year-round supply, your own planting stock and residue testing.

The rhythm is the cutting week: a Sunday cutting plan, a Monday scouting walk, cuts on delivery mornings, a Thursday call to confirm standing orders and a Saturday bunch and price log, with monthly sowings, feeding and a check on bunch weights and waste, and a quarterly round of dividing chive and thyme. The Purchase decision, Operational checklist, Metrics log and Vendor templates pair with choosing beds or containers, the morning cooling routine, the weekly bunch log and your green seasoning maker's record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
