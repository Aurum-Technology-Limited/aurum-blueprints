---
id: agriculture.soil-testing-and-fertility
name: Soil Testing and Fertility
description: "Soil managed for yield on a working farm: fields mapped and sampled properly, lab reports understood, pH and organic matter corrected, fertiliser planned from test results, and soil kept on slopes with cover crops and erosion control."
category: business
version: 1.0.0
tags: [agriculture, soil-testing-and-fertility, small-business, soil-testing, fertiliser, liming, cover-crops, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Soil Testing and Fertility
          description: "Managing soil for yield: soil sampling and lab tests, pH and organic matter, fertiliser plans based on test results, cover crops and erosion control."
          projects:
            - name: Block map of every field for soil sampling
              description: |-
                ## Purpose
                A soil test is only useful if you know exactly which ground it describes. Dividing the farm into blocks that share the same soil, slope, cropping history and drainage means each sample speaks for one kind of ground rather than averaging a wet bottom with a dry hillside. Doing it before any sampling saves paying the lab for results nobody can act on.

                ## Milestones
                1. A sketch or satellite printout of the farm with every field boundary marked.
                2. Each field split into blocks of similar soil colour, slope, drainage and past crop.
                3. Every block given a short code and an approximate area in acres or hectares.
                4. Problem spots such as old manure heaps, burn sites and wet hollows marked to keep out of samples.

                ## Notes
                Keep blocks to a size you would manage as one unit. A block too large to fertilise differently is a block too large to sample as one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A farm map shows every sampling block with a code, area and the spots to avoid, ready to hand to whoever takes samples."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Print a satellite image of the farm or sketch the field boundaries"
                - "Walk each field and mark changes in soil colour, slope and wetness"
                - "Give every block a code and estimate its area"
                - "Mark old heaps, burn sites and hollows to leave out of samples"
            - name: Choosing a soil testing laboratory
              description: |-
                ## Purpose
                Labs differ in the tests they run, the extraction methods they use and how fast results come back, and a report from one lab cannot always be compared with another. Picking one lab, whether the Ministry of Agriculture's, a university unit or a private service, and sticking with it gives you results that can be compared year on year. Ask what the standard package covers before sending anything.

                ## Milestones
                1. Two or three labs within reach identified, including any government or regional service.
                2. Each lab's standard soil package, price, turnaround time and sample requirements written down.
                3. One lab chosen, with the reason noted, for routine testing for the next few years.
                4. The lab's sample bags or submission form and delivery instructions in hand.

                ## Notes
                Start from the **Vendor** template. Ask whether the lab gives a fertiliser and lime recommendation for your crop, or only the numbers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One soil lab is chosen and recorded with its package, price, turnaround time and submission instructions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the extension office which labs test soil for farmers in your area"
                - "Phone two labs and note package contents, price and turnaround"
                - "Choose one lab for routine testing and write down why"
                - "Collect sample bags and the submission form from the chosen lab"
            - name: First soil sampling round across the farm
              description: |-
                ## Purpose
                Most poor test results come from poor sampling, not poor soil. Taking fifteen to twenty small cores in a zigzag across each block, at the same depth, and mixing them into one sample gives the lab something that represents the block. One careful round across the whole farm becomes the baseline every later decision is measured against.

                ## Milestones
                1. A clean bucket, a soil auger or spade and labelled bags ready for each block.
                2. Cores taken in a zigzag across every block at a consistent depth, avoiding marked problem spots.
                3. Cores from each block mixed and a single labelled sample bagged with the block code and date.
                4. All samples delivered to the lab within the time it asks, with a copy of the submission form kept.

                ## Notes
                Do not use a galvanised or rusty bucket, which can skew zinc and iron results. Sample before fertilising, not just after.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One composite sample per block, labelled with block code and date, has reached the lab with a copy of the form kept."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather a plastic bucket, an auger or spade and labelled sample bags"
                - "Take fifteen to twenty cores in a zigzag across the first block"
                - "Mix the cores and bag one sample with the block code and date"
                - "Deliver all block samples to the lab and keep the submission copy"
            - name: Reading your first soil test report
              description: |-
                ## Purpose
                Lab reports list pH, organic matter, phosphorus, potassium, calcium, magnesium and often more, each with a unit and a rating that can look like a different language. Learning what each line means, and which few numbers drive most decisions, turns the report from a sheet in a drawer into a plan. Go through it with the extension officer or the lab before buying anything.

                ## Milestones
                1. Each line of the report matched to the nutrient or property it measures and its unit.
                2. Every block's results rated low, adequate or high against the lab's own ranges.
                3. The two or three biggest problems on the farm named, for example acid soil or low potassium.
                4. Questions for the extension officer or lab written and answered.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary rates each block's main results and names the farm's top three soil problems, checked with an adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Highlight pH, organic matter, phosphorus and potassium on each block's report"
                - "Mark each result low, adequate or high using the lab's ranges"
                - "Ask the agent to draft a plain summary of the report for your notes"
                - "Go through the summary with the extension officer or lab adviser"
            - name: Field soil tests with a spade, a jar and a stopwatch
              description: |-
                ## Purpose
                Some of the most useful facts about soil cost nothing to find out. Feeling texture between your fingers, settling a sample in a jar of water to see sand, silt and clay, timing how fast water soaks in and counting earthworms in a spadeful tell you how a block will hold water and nutrients. These checks sit beside the lab report and explain much of what it shows.

                ## Milestones
                1. Texture by feel recorded for each block as sandy, loamy or clayey.
                2. A jar test settled for at least one sample per field, with layer depths noted.
                3. Water infiltration timed on each block using a ring or tin pressed into the soil.
                4. Earthworm counts from one spadeful per block written in the record book.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Texture, jar test layers, infiltration time and earthworm count are recorded for every block."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rub moist soil from each block between your fingers and note its feel"
                - "Shake a soil sample in a jar of water and leave it overnight to settle"
                - "Time how long a tin of water takes to soak into each block"
                - "Count earthworms in one spadeful of soil per block"
            - name: Soil fertility record book
              description: |-
                ## Purpose
                Without records, a farmer cannot tell whether last year's lime did anything or why one block always yields less. A single book or spreadsheet holding test results, amendments, fertiliser applications and yields by block shows cause and effect over the years. It also answers buyers and certifiers who ask what has gone onto the land.

                ## Milestones
                1. A record book or spreadsheet with one section per block.
                2. All existing test results entered with lab name and sample date.
                3. Columns set for each amendment or fertiliser applied, date, product and quantity.
                4. Yield or harvest notes for each block added at the end of each crop.

                ## Notes
                Start from the **Metrics log** template. Keep the original lab reports in a folder in block order beside the book.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A record book holds every block's test results, applications and yields, updated at least monthly."
                cadence: rolling
              tasks:
                - "Set up a book or spreadsheet with one section per block"
                - "Enter every soil test result you already have with its date"
                - "Add columns for products applied, dates, quantities and yields"
                - "Update the soil record book from the week's notes @recurring(monthly:12)"
            - name: Soil history of a new or inherited field
              description: |-
                ## Purpose
                Past use explains much of its present: years of continuous cane, regular burning, heavy herbicide use or an old chicken pen leave their mark in the soil. Asking the previous owner, family members and neighbours what was grown and applied tells you what to test for and what to expect. Write it down before the people who remember move on.

                ## Milestones
                1. The previous owner or user and at least one neighbour asked about past crops and practices.
                2. Known history of burning, flooding, manure heaps, buildings or chemical storage recorded by block.
                3. Any reason for extra tests, such as possible contamination near an old store, noted.
                4. The history added to the front of the soil record book.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written history covers past crops, burning, flooding and chemical use for each block, with any extra tests named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List questions about past crops, burning and chemicals used on the land"
                - "Ask the previous owner or user what was grown and applied"
                - "Talk to a neighbour who has watched the field for years"
                - "Write the history into the front of the soil record book"
            - name: Baseline soil health check by block
              description: |-
                ## Purpose
                Chemistry is only part of fertility: a soil with good structure, plenty of life and steady organic matter makes better use of every bag spread on it. Scoring each block once on crumb structure, slaking, root depth and biology gives a baseline you can repeat every few years. Changes from cover crops or compost then show up as numbers, not impressions.

                ## Milestones
                1. A simple scorecard chosen covering structure, slaking, root depth, compaction and biology.
                2. Every block scored on the same day of the season with photos of a dug profile.
                3. Organic matter from the lab report added beside each block's score.
                4. The weakest two blocks named for priority attention.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each block has a dated soil health score with photos and organic matter, and the weakest two blocks are named."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose a soil health scorecard from an extension or university source"
                - "Dig a small profile in each block and photograph it"
                - "Drop a dry crumb of soil into water and note how fast it falls apart"
                - "Score every block and name the two weakest"
            - name: Yearly soil and fertiliser budget
              description: |-
                ## Purpose
                Soil tests, lime, fertiliser, compost materials and cover crop seed add up to one of the largest input bills on most crop farms. A yearly budget by block, set against expected yields, shows where money returns most and stops panic buying when prices jump. It is also the section lenders and grant officers look at first in a farm plan.

                ## Milestones
                1. Last year's spending on tests, lime, fertiliser and organic inputs totalled from receipts.
                2. This year's planned spend set for each block based on its test results.
                3. Expected yield and value per block written beside its soil spend.
                4. A monthly check of actual spend against the budget running.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A yearly soil and fertiliser budget by block exists, with actual spend compared to it each month."
                cadence: cyclic
              tasks:
                - "Total last year's receipts for tests, lime, fertiliser and compost inputs"
                - "Set a planned soil spend for each block from its test results"
                - "Write expected yield and value beside each block's spend"
                - "Compare soil input spend with the budget @recurring(monthly:28)"
            - name: Soil sampling calendar by block
              description: |-
                ## Purpose
                Results are only comparable if each block is sampled at the same point in its cropping cycle, usually before land preparation and before fertiliser. A calendar that sets when each block is tested, and how often, removes the guesswork. Most annual crop blocks need testing every one to two years and tree crop blocks every two to three.

                ## Milestones
                1. A testing interval set for every block, depending on crop and history.
                2. A sampling month fixed for each block, before land preparation and fertiliser.
                3. Lab turnaround allowed for so results arrive before planting decisions.
                4. The calendar printed and pinned where farm planning happens.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every block has a sampling month and interval on a calendar, and the yearly round is completed on time."
                cadence: cyclic
              tasks:
                - "Set a testing interval for each block based on its crop"
                - "Fix a sampling month for each block ahead of land preparation"
                - "Check which blocks are due for sampling this quarter @recurring(quarterly)"
                - "Run the yearly sampling round for blocks due @recurring(yearly)"
            - name: Fertiliser and amendment application log
              description: |-
                ## Purpose
                Writing down every application on the day it happens is the habit that makes the rest of this area work. Product, block, date, quantity, method and the weather afterwards are enough to explain results later and to answer a buyer's audit. A notebook in the shed or a note on the phone filled in that evening is better than a perfect system filled in once a month.

                ## Milestones
                1. A log format chosen with block, date, product, quantity, method and weather columns.
                2. The log kept where whoever spreads fertiliser can reach it.
                3. Every application for one full season recorded on the day.
                4. Log entries transferred into the soil record book monthly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fertiliser, lime and manure application for a full season appears in the log with block, date, product and quantity."
                cadence: rolling
              tasks:
                - "Draw up a log page with block, date, product, quantity and method"
                - "Hang the log in the store or set up a shared phone note"
                - "Record the week's applications before Saturday ends @recurring(weekly:sat)"
                - "Show workers how to fill in the log after each application"
            - name: Fertiliser store and stock check
              description: |-
                ## Purpose
                Fertiliser that has absorbed damp turns to lumps that clog spreaders, and urea or ammonium products stored near fuel or in the sun can become a hazard. A dry, locked store with stock counted monthly prevents both waste and theft. It also tells you what to order before the planting rush empties the suppliers.

                ## Milestones
                1. Fertiliser kept off the floor on pallets in a dry, shaded, locked space away from fuel.
                2. Bags stacked by product with the oldest at the front.
                3. A stock sheet counting bags of each product kept on the store door.
                4. Damaged, caked or unlabelled bags dealt with as the supplier or label advises.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The store is dry and locked, bags are on pallets and a stock sheet is counted and signed every month."
                cadence: rolling
              tasks:
                - "Move fertiliser bags onto pallets away from walls and fuel"
                - "Stack bags by product with the oldest in front"
                - "Count every bag and update the stock sheet @recurring(monthly:3)"
                - "Fit a lock to the store door and record who holds keys"
            - name: Monthly nutrient symptom walk
              description: |-
                ## Purpose
                Crops show hunger before yields fall: yellowing older leaves, purple tints, scorched leaf edges or pale new growth each point to different problems. Walking each block monthly with a phone camera, and comparing what you see with the last test, catches problems while there is still time to act. Symptoms alone can mislead, so a suspicious pattern is a reason to test, not to spread.

                ## Milestones
                1. A fixed route through every block walked monthly.
                2. Photos of any unusual leaf colour or growth taken and labelled with block and date.
                3. Each observation compared with the block's latest soil test.
                4. Suspected deficiencies confirmed by leaf or soil test, or by the extension officer.

                ## Notes
                Pest damage, disease and waterlogging can look like nutrient problems. Rule them out before changing the fertiliser plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly walk is recorded for every block, with photos of symptoms and a follow-up test or adviser opinion for each concern."
                cadence: rolling
              tasks:
                - "Plan a walking route that passes through every block"
                - "Walk the route and photograph unusual leaves @recurring(monthly:18)"
                - "Compare each symptom with the block's latest soil test"
                - "Send photos of any unclear symptom to the extension officer"
            - name: Compost turning and temperature routine
              description: |-
                ## Purpose
                Left alone, a heap rots slowly and can harbour weed seeds and disease, while a heap turned and checked regularly becomes usable compost in a few months. A thermometer, a fork and a set day each week are all it takes. Good compost is the cheapest organic matter most farms can get.

                ## Milestones
                1. A long-stem compost thermometer or probe on the farm.
                2. Heap temperature recorded weekly with the date of each turn.
                3. Moisture checked by squeezing a handful and water added or cover fitted as needed.
                4. Finished compost judged by smell, crumb and cool temperature before use.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each heap has a weekly temperature and turning record and is used only once cool, dark and crumbly."
                cadence: rolling
              tasks:
                - "Buy a long-stem compost thermometer"
                - "Check heap temperature and moisture and record both @recurring(weekly:wed)"
                - "Turn the heap with a fork when the temperature starts to fall"
                - "Note the start date and expected ready date for each heap"
            - name: Fertiliser price and supplier watch
              description: |-
                ## Purpose
                Imported fertiliser prices in the Caribbean swing with shipping costs, exchange rates and global supply, and the same product can vary widely between agro shops. A monthly price check across two or three suppliers shows when to buy ahead and when to wait. It also reveals which shops reliably have stock in the planting season.

                ## Milestones
                1. Two or three fertiliser and lime suppliers listed with contact details.
                2. Prices for the farm's main products recorded monthly in one table.
                3. Price per unit of nutrient worked out so blends and straights can be compared fairly.
                4. Buying months chosen from the year's price pattern.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A price table holds a monthly price for each main product from at least two suppliers for a full year."
                cadence: rolling
              tasks:
                - "List two or three agro suppliers and their phone numbers"
                - "Record prices for the farm's main products @recurring(monthly:8)"
                - "Work out cost per kilogram of nutrient for each product"
                - "Ask the farmers group whether a bulk order is being organised"
            - name: Leaf tissue testing for tree crops
              description: |-
                ## Purpose
                Citrus, cocoa, mango and other tree crops draw on soil far below where a sample is taken, so leaf analysis often tells more about their nutrition than soil alone. Sampling the right leaf at the right stage each year, and pairing it with a soil test, shows what the trees are actually taking up. Ask the lab which leaf and timing it wants for each crop.

                ## Milestones
                1. The lab's leaf sampling instructions for each tree crop on hand.
                2. The correct leaf position and growth stage identified for each crop.
                3. Leaves collected from a set number of trees per block and sent promptly.
                4. Leaf results recorded beside soil results for the same block.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each tree crop block has a yearly leaf analysis recorded next to its soil test."
                cadence: cyclic
              tasks:
                - "Ask the lab for leaf sampling instructions for each tree crop"
                - "Mark the trees to sample in each block with paint or tags"
                - "Collect and send leaf samples for each tree block @recurring(yearly)"
                - "Record leaf results beside the block's soil results"
            - name: Fertiliser spreader calibration
              description: |-
                ## Purpose
                Uncalibrated spreaders can put out far more or far less than intended, so a good plan becomes a wasted or burnt crop. Checking the output of each spreader, or the scoop size used for hand application, against a measured area every quarter makes the rates in the plan real. Worn parts and new products both change the output.

                ## Milestones
                1. Every spreader, drill and hand scoop used for fertiliser listed.
                2. Each one tested over a measured strip with the product collected and weighed.
                3. Settings or scoop counts written on a card fixed to each machine.
                4. Calibration repeated each quarter and whenever the product changes.

                ## Notes
                Start from the **Operational checklist** template. Wear gloves and follow the product label when handling fertiliser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every spreader and scoop has a dated calibration card, renewed each quarter."
                cadence: rolling
              tasks:
                - "List every spreader, drill and hand scoop used for fertiliser"
                - "Mark out a measured strip for test runs"
                - "Weigh the product delivered over the strip and write the setting on a card"
                - "Recalibrate each spreader and scoop @recurring(quarterly)"
            - name: Season-end soil fertility review
              description: |-
                ## Purpose
                Once the crop is in, the season's soil decisions can be judged against what came out of each block. A review comparing tests, inputs, costs and yields block by block shows which choices paid and which should change. It turns a year of records into next season's plan.

                ## Milestones
                1. Inputs, costs and yields for each block pulled from the record book.
                2. Blocks ranked by return on soil and fertiliser spend.
                3. Three changes for next season agreed and written down.
                4. Quarterly check-ins held to confirm the changes are happening.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written season review ranks every block by return on soil spend and lists three changes for next season."
                cadence: cyclic
              tasks:
                - "Pull each block's inputs, costs and yields from the record book"
                - "Rank the blocks by yield value against soil spend"
                - "Write three soil changes for next season @recurring(yearly)"
                - "Check progress on the season's soil changes @recurring(quarterly)"
            - name: Soil pH and why it controls nutrients
              description: |-
                ## Purpose
                Soil pH decides how much of the nutrient already in the ground a crop can reach. In very acid soils aluminium and manganese can become toxic and phosphorus gets locked up, while in alkaline coral or limestone soils iron and zinc become scarce. Understanding pH explains why fertiliser sometimes seems to do nothing.

                ## Milestones
                1. The pH scale and the difference between acid, neutral and alkaline soil understood.
                2. The preferred pH range for each of the farm's main crops written down from a reliable source.
                3. Each block's pH compared with its crop's preferred range.
                4. Blocks outside the range listed for a liming or acidifying discussion with an adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists each crop's preferred pH range from a reliable source and flags every block outside it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an extension leaflet on soil pH and nutrient availability"
                - "Write down the preferred pH range for each main crop"
                - "Compare every block's pH with its crop's range"
                - "List blocks outside the range to discuss with an adviser"
            - name: Macro and micronutrients for your crops
              description: |-
                ## Purpose
                Nitrogen, phosphorus and potassium get the attention, but calcium, magnesium and sulphur and micronutrients such as boron and zinc limit yield on many Caribbean soils. Knowing what each nutrient does, which crops need more of it and what a shortage looks like gives you better questions for the lab and the supplier. It also helps you spot when a blend is missing what your soil lacks.

                ## Milestones
                1. The role of each major, secondary and micronutrient summarised in one table.
                2. The nutrients each main crop draws on most noted.
                3. Typical deficiency signs for each nutrient listed with a photo source.
                4. The nutrients your soil tests show as low highlighted in the table.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page nutrient table covers role, crop needs and deficiency signs, with the farm's low nutrients highlighted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Make a table of major, secondary and micronutrients"
                - "Add what each nutrient does and the signs of shortage"
                - "Note which nutrients each main crop needs most"
                - "Highlight nutrients your soil tests show as low"
            - name: Reading a fertiliser bag and its analysis
              description: |-
                ## Purpose
                Three numbers on a bag, such as 12-24-12, give the percentage of nitrogen, phosphate and potash, and they decide how much nutrient you are really paying for. Labels also show the form of nitrogen, added secondary nutrients and handling instructions. Reading them properly lets you compare a cheap bag with a dear one on fair terms.

                ## Milestones
                1. The meaning of the three main numbers and of phosphate and potash forms understood.
                2. Labels of the farm's current products photographed and filed.
                3. Nutrient content per bag worked out for each product.
                4. Safety and storage instructions from each label copied into the store notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every fertiliser on the farm has a filed label photo and a worked figure for nutrient per bag."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the label of every fertiliser in the store"
                - "Look up what each of the three analysis numbers means"
                - "Work out kilograms of each nutrient in one bag of each product"
                - "Copy each label's storage and safety lines into the store notes"
            - name: Organic matter and soil biology basics
              description: |-
                ## Purpose
                Organic matter holds water and nutrients, feeds soil life and binds soil into crumbs that roots and rain can move through. Under hot, wet tropical conditions it breaks down fast, so it has to be replaced every season. Knowing how it is built and lost explains why cover crops, compost and mulch earn their cost.

                ## Milestones
                1. How organic matter forms, breaks down and is measured on a lab report understood.
                2. The main groups of soil life and what they do summarised.
                3. Farm practices that add and remove organic matter listed.
                4. One practice to add more chosen for the weakest block.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note lists the practices that build and deplete organic matter on the farm and names one change for the weakest block."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an extension guide on soil organic matter in the tropics"
                - "List the farm's practices that add or remove organic matter"
                - "Pick one practice to add organic matter to the weakest block"
                - "Note organic matter results by block from the latest tests"
            - name: Texture, clay and nutrient holding capacity
              description: |-
                ## Purpose
                Two blocks can show the same nutrient numbers yet behave very differently because one is sandy and the other heavy clay. Cation exchange capacity, the soil's ability to hold onto nutrients, explains why sandy soils need little and often while clays can hold a reserve. Understanding it turns the bottom lines of a lab report into practical choices.

                ## Milestones
                1. Cation exchange capacity and base saturation explained in your own words.
                2. Each block's texture and exchange capacity listed side by side.
                3. Blocks that leach quickly marked for split applications to discuss with an adviser.
                4. Heavy clay blocks noted for structure and drainage care.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every block has texture and exchange capacity recorded with a note on how it holds nutrients."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find exchange capacity and base saturation on each lab report"
                - "List every block's texture beside its exchange capacity"
                - "Mark blocks that are likely to leach nutrients quickly"
                - "Ask the adviser whether leaching blocks need split applications"
            - name: Caribbean soil types on your farm
              description: |-
                ## Purpose
                Caribbean farms sit on very different soils: volcanic soils in the Windwards, heavy clays on the plains, limestone and coral soils in Barbados and the Bahamas, and acid, leached soils on old hillsides. National soil maps and surveys, often held by the Ministry or a university, name the soil series on your land and its known strengths and limits. Knowing your series tells you which problems neighbours have already solved.

                ## Milestones
                1. The national or regional soil map for your area found.
                2. The soil series or type for each field identified.
                3. Known limits of each series, such as acidity, stones or poor drainage, noted.
                4. The extension officer or a local grower asked what works on those soils.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each field is labelled with its soil series and that series' known limits, confirmed with a local source."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the Ministry or a university for the soil map covering your farm"
                - "Find the soil series for each field on the map"
                - "Note the known strengths and limits of each series"
                - "Ask an experienced local grower what works on those soils"
            - name: Nutrient deficiency photo reference for your crops
              description: |-
                ## Purpose
                Textbook pictures rarely match what deficiency looks like on your own dasheen, pepper or citrus under your light. A photo reference built from your fields, each picture confirmed by a test or an adviser, trains your eye and helps workers report problems accurately. Over two seasons it becomes the farm's most practical training tool.

                ## Milestones
                1. A phone album set up with a folder for each main crop.
                2. Photos of healthy leaves from each crop added for comparison.
                3. Each symptom photo labelled with the confirmed cause once known.
                4. A printed sheet of the most common problems pinned in the store.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A labelled photo album covers healthy and deficient leaves for each main crop, with a printed sheet of common problems."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create a phone album with a folder for each main crop"
                - "Photograph healthy leaves of each crop at key growth stages"
                - "Label symptom photos with the cause once a test confirms it"
                - "Print the most common problems on one sheet for the store wall"
            - name: Nutrient removal by harvested crop
              description: |-
                ## Purpose
                Every load of produce that leaves the farm carries nutrients with it, and those must come back from somewhere. Working out roughly what each crop removes per tonne of harvest, from published figures, shows which blocks are being mined and which are being over-fed. It is the logic behind a fertiliser plan that matches what the soil actually loses.

                ## Milestones
                1. Published nutrient removal figures found for each main crop.
                2. Last season's yield per block multiplied out to estimate nutrients removed.
                3. Removal compared with what was applied to each block.
                4. Blocks running a deficit or a large surplus flagged.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows estimated nutrients removed and applied for every block, with deficits and surpluses flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find published nutrient removal figures for each main crop"
                - "Estimate nutrients removed by last season's yield in each block"
                - "Compare removal with the season's applications per block"
                - "Flag blocks with a clear deficit or surplus"
            - name: Liming plan for acid blocks
              description: |-
                ## Purpose
                Acid soils are common on leached Caribbean hillsides and on land fertilised for years with ammonium products. Lime takes months to act and the right type and quantity depend on the test, so the plan must be agreed with the lab or extension officer and applied well before planting. Correcting pH is often the single largest yield gain on a tired farm.

                ## Milestones
                1. Blocks below their crop's preferred pH listed from the latest tests.
                2. A lime recommendation for each block obtained from the lab or extension officer.
                3. Agricultural lime or dolomite chosen based on the block's magnesium level and price.
                4. Lime applied and worked in at the time the adviser recommends, and recorded.

                ## Notes
                Do not guess lime quantities from the internet. The amount depends on your soil's buffering, which only the lab can measure.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every acid block has a written lime recommendation from an adviser and a recorded application date."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List blocks whose pH is below their crop's preferred range"
                - "Ask the lab or extension officer for a lime recommendation per block"
                - "Choose between agricultural lime and dolomite using the magnesium results"
                - "Book lime delivery and the date to spread it ahead of planting"
            - name: Fertiliser plan for each block from test results
              description: |-
                ## Purpose
                Spreading the same blend at the same rate everywhere wastes money on some blocks and starves others. A written plan for each block, built from its test results and crop with the lab or extension officer, sets products, timing and method for the season. It is the document every other decision in this area hangs from.

                ## Milestones
                1. Each block's crop, test results and target yield in one place.
                2. Product, timing and method for each block agreed with an adviser.
                3. Quantities checked against the label and the season's budget.
                4. The plan printed for the store and checked monthly against the application log.

                ## Notes
                Rates must come from the lab recommendation, the label or your extension officer. Split applications usually suit sandy soils and heavy rain.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A printed fertiliser plan names product, timing and method for every block, agreed with an adviser."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Put each block's crop, test results and target yield on one sheet"
                - "Take the sheet to the extension officer or lab to agree products and timing"
                - "Check the plan's quantities against labels and the budget"
                - "Compare the application log with the plan @recurring(monthly:5)"
            - name: Synthetic, organic or blended fertiliser
              description: |-
                ## Purpose
                Straight fertilisers, compound blends, slow-release products, poultry manure pellets and compost all deliver nutrients at different speeds, costs and labour. The right choice depends on your crop, your soil and whether buyers pay a premium for organic or reduced-chemical produce. Comparing them on cost per unit of nutrient and fit with the plan prevents buying on habit.

                ## Milestones
                1. Three or four product options for the main crop listed with price and analysis.
                2. Each option costed per unit of nutrient and per acre at the adviser's recommended rate.
                3. Labour, storage and buyer requirements for each option noted.
                4. One programme chosen for the season, with the reason recorded.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares at least three fertiliser options on nutrient cost, labour and buyer fit and names the chosen one."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three or four fertiliser options with price and analysis"
                - "Work out cost per unit of nutrient for each option"
                - "Ask your main buyer whether organic or reduced-chemical produce earns more"
                - "Record the chosen programme and why"
            - name: On-farm compost system
              description: |-
                ## Purpose
                Crop residues, grass cuttings, manure and market rejects can become the farm's own soil conditioner rather than waste. A compost area sited near where it is needed, with bays, a water supply and shade, makes regular composting realistic. Done well, it cuts fertiliser bills and adds the organic matter tropical soils lose fastest.

                ## Milestones
                1. A compost site chosen on level, well-drained ground away from water sources and housing.
                2. Two or three bays or a windrow area set up with a water supply.
                3. Regular feedstocks and their sources listed with rough quantities.
                4. The first batch built with a balance of green and brown materials.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A compost site with bays and water is working and the first batch is built and recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick a level, drained compost site away from wells and streams"
                - "Build two or three bays from pallets or blocks"
                - "List green and brown materials available each month"
                - "Build the first heap and note the start date"
            - name: Using manure safely as fertiliser
              description: |-
                ## Purpose
                Poultry litter, goat pen sweepings and cow manure are valuable and often cheap, but fresh manure can burn crops, spread weeds and carry pathogens onto food crops. Sourcing it from known farms, composting or ageing it and leaving the interval your food safety scheme requires before harvest keeps the benefit and drops the risk. Buyers with GAP requirements will ask to see the records.

                ## Milestones
                1. Reliable manure sources listed with animal type and bedding used.
                2. Manure composted or aged before use, with dates recorded.
                3. The interval between application and harvest checked against your buyer's or scheme's rules.
                4. Every manure application entered in the application log.

                ## Notes
                Never put fresh manure on leafy or root crops close to harvest. Wash hands and tools after handling it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Manure used on the farm is composted or aged with dates recorded and applied within the buyer's required harvest interval."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List nearby farms that sell or give away manure"
                - "Ask each source what animal and bedding the manure comes from"
                - "Check the required gap between manure and harvest with your buyer"
                - "Set aside a covered spot to age manure before use"
            - name: Cover crop trial on a resting block
              description: |-
                ## Purpose
                Bare ground between crops loses topsoil to rain and organic matter to the sun. Sowing a cover crop such as sunn hemp, cowpea, mucuna or a grass mix protects the soil, adds organic matter and, with legumes, fixes nitrogen for the next crop. A trial on one block shows what grows well on your farm before you commit more land.

                ## Milestones
                1. One resting block chosen and split into a cover crop strip and a bare or weedy control.
                2. A cover crop species chosen with the extension officer for the season and soil.
                3. Growth, weed cover and ground cover recorded during the trial.
                4. The cover crop cut or incorporated and the next crop's growth compared between strips.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A recorded trial compares a cover crop strip with a control strip on one block, including the following crop's growth."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a block that will rest for at least two months"
                - "Agree a cover crop species with the extension officer"
                - "Sow half the block and leave half as a control"
                - "Photograph both strips and note ground cover @recurring(monthly:22)"
            - name: Erosion control on sloping land
              description: |-
                ## Purpose
                On hillside plots one heavy downpour can strip topsoil that took decades to form, along with the fertiliser just spread on it. Contour rows, vetiver or grass strips, mulch and keeping the ground covered slow the water and hold the soil in place. Gullies and soil piling at the foot of the slope are the signs that it is already happening.

                ## Milestones
                1. Slopes over which water runs fast mapped, with existing gullies and soil deposits marked.
                2. Contour lines marked with an A-frame or level on the worst slope.
                3. Grass or vetiver strips, mulch or contour rows established on that slope.
                4. Soil movement checked after heavy rain and further measures added where needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The steepest cropped slope has contour rows or grass strips in place and no new gullies after a season of rain."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Walk slopes during heavy rain and mark where water runs"
                - "Build a simple A-frame and mark contour lines on the worst slope"
                - "Plant vetiver or grass strips along the marked contours"
                - "Check the slopes for gullies and washed soil @recurring(monthly:15)"
            - name: Fixing compacted soil and hardpan
              description: |-
                ## Purpose
                Repeated tractor passes on wet ground and years of ploughing at the same depth create a hard layer that roots cannot get through and water cannot drain past. Yields stall, crops wilt early in dry spells and water ponds after rain. Finding the depth of the layer and breaking it once, then changing the practices that caused it, restores root depth.

                ## Milestones
                1. Compaction checked with a probe or spade in each block and the hard layer depth noted.
                2. Causes identified, such as wet-season traffic, plough depth or livestock.
                3. A deep loosening pass, deep-rooted cover crop or other fix agreed and carried out.
                4. Traffic rules set, such as fixed wheel lanes and no tractor work on wet soil.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Compacted blocks have a recorded hardpan depth, a completed fix and written traffic rules to prevent it returning."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Push a steel rod into each block and note where it stops"
                - "Dig a pit where compaction is worst and measure the hard layer"
                - "Agree a fix with the tractor operator or extension officer"
                - "Write traffic rules for wet-season field work"
            - name: Managing saline or sodic soils near the coast
              description: |-
                ## Purpose
                Coastal fields, land flooded by storm surge and plots watered from brackish wells can build up salt, which stunts crops and scorches leaf edges in a pattern that looks like drought. A salinity or conductivity test confirms it, and the response depends on the water source and drainage. Catching it early prevents good land turning unproductive.

                ## Milestones
                1. Blocks at risk listed, such as low coastal fields and those on well water.
                2. Electrical conductivity and sodium tests requested from the lab for those blocks.
                3. Irrigation water tested for salt where it comes from a well.
                4. A management plan agreed with an adviser, including more salt-tolerant crops if needed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At-risk blocks and their water source have salinity results and a written plan agreed with an adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List low coastal blocks and any watered from a well"
                - "Ask the lab to add conductivity and sodium to those samples"
                - "Send a sample of well water for a salt test"
                - "Discuss results and crop options with the extension officer"
            - name: Soil survey visit from the extension officer
              description: |-
                ## Purpose
                Many Ministries of Agriculture and agencies such as CARDI offer soil advice, and a visit that is prepared for gets far more out of the officer's time. Having the block map, test reports, record book and specific questions ready turns a general chat into recommendations for each block. Follow up in writing so the advice is not lost.

                ## Milestones
                1. A visit date booked with the extension office.
                2. The block map, latest reports and record book ready on the table.
                3. Five specific soil questions written in advance.
                4. The officer's recommendations written up by block and filed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A soil visit has taken place with recommendations written up for each block and filed in the record book."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Phone the extension office to book a soil advice visit"
                - "Lay out the block map, reports and record book for the officer"
                - "Write five specific questions about your worst blocks"
                - "Write up the officer's advice by block the same day"
            - name: Soil preparation before the wet season planting
              description: |-
                ## Purpose
                The start of the rains is when most land is prepared, limed and fertilised, and the farms that test early are the ones ready when the soil is workable. Working back from the expected planting date sets when samples go to the lab, when lime goes on and when fertiliser must be bought. Missing the window can cost a full season.

                ## Milestones
                1. The expected planting date for each block set from the season's calendar.
                2. Soil samples sent early enough for results to return before land preparation.
                3. Lime applied far enough ahead of planting for it to start working.
                4. Fertiliser bought and stored before the planting rush.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every block due for planting has test results, lime applied where needed and fertiliser in store before the planting date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the expected planting date for each block on the calendar"
                - "Count back from planting to set the date samples must reach the lab"
                - "Schedule lime spreading on blocks that need it"
                - "Order the season's fertiliser before the planting rush"
            - name: Soil recovery check after a hurricane or flood
              description: |-
                ## Purpose
                Hurricanes and weeks of flood rain can wash away topsoil, leach nutrients, leave silt or salt behind and compact saturated ground. Checking each block once the water drains, and testing where damage is obvious, shows what needs replacing before replanting. Recovery spending then goes where the soil was actually hurt.

                ## Milestones
                1. Every block walked within two weeks of the event with damage photographed.
                2. Topsoil loss, silt deposits and standing water recorded by block.
                3. Damaged blocks resampled once the soil can be worked.
                4. A replanting and soil repair plan agreed and costed.

                ## Notes
                Keep the photos and notes: insurers and relief programmes often ask for evidence of soil and crop loss.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "After a storm or flood, every block has a damage record with photos and damaged blocks have been retested before replanting."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Walk each block once safe and photograph soil damage"
                - "Record topsoil loss, silt and standing water by block"
                - "Resample damaged blocks once they can be worked"
                - "Cost a soil repair plan before replanting"
            - name: Group bulk order of lime and fertiliser
              description: |-
                ## Purpose
                Small farms pay retail prices bag by bag, while a group order through a farmers group or cooperative can bring a better price and delivery to one point. Organising it ahead of the season, from members' soil plans, also means the right products arrive rather than whatever the shop has. It takes one organiser and a clear list.

                ## Milestones
                1. Interested farmers in the group listed with the products and quantities they need.
                2. Quotes from at least two suppliers for the combined order.
                3. Payment and collection arrangements agreed in writing among members.
                4. The order delivered and shared out, with each member's share recorded.
              priority: low
              deadlineOffsetDays: 75
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A combined lime and fertiliser order is quoted by two suppliers, delivered and shared out with each member's portion recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask members of the farmers group whether they want to order together"
                - "Collect each member's product list from their soil plan"
                - "Get quotes from two suppliers for the combined order"
                - "Record payment and each member's share at delivery"
            - name: Six-month retest of limed and treated blocks
              description: |-
                ## Purpose
                Lime and major amendments are among the larger soil investments, and the only way to know they worked is to test again. Resampling treated blocks at the same depth and season, and comparing results with the baseline, shows whether pH and nutrients moved as expected. It also prevents adding more lime than the soil needs.

                ## Milestones
                1. Treated blocks and their application dates listed.
                2. Samples taken at the same depth and pattern as the baseline.
                3. New results compared side by side with the baseline for each block.
                4. The adviser's view on whether further treatment is needed recorded.
              priority: medium
              deadlineOffsetDays: 210
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Every limed or treated block has a retest compared with its baseline and an adviser's next-step note."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List treated blocks with their application dates"
                - "Resample treated blocks using the baseline depth and pattern"
                - "Put the new and baseline results side by side"
                - "Ask the adviser whether more lime or amendment is needed"
            - name: Soil fertility for a part-time backyard market plot
              description: |-
                ## Purpose
                Growers with a quarter acre and a day job cannot run a full testing programme, but a single composite test, a compost bin and a simple feeding plan cover most of what matters. Small plots are often over-fertilised from habit and under-fed in organic matter. A light routine that fits weekends keeps beds productive season after season.

                ## Milestones
                1. One composite soil test taken across the plot or its two main bed areas.
                2. A compost bin or heap fed with kitchen and garden waste.
                3. A short feeding plan for the main crops written from the test with an adviser.
                4. A weekend routine of mulching and compost top-dressing set.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A small plot has one soil test on file, a working compost bin and a written feeding plan for its main crops."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Take one composite sample across the plot and send it to the lab"
                - "Start a compost bin from kitchen and garden waste"
                - "Write a short feeding plan for the main crops from the test"
                - "Mulch bare beds after each harvest"
            - name: Bringing old cane or abandoned land into production
              description: |-
                ## Purpose
                Former sugar cane estates and land abandoned for years are being returned to food crops across the region, but their soils can be acid, compacted, low in organic matter or full of weeds and old cane roots. Testing, liming, a cover crop season and gradual planting bring them back more reliably than ploughing and planting straight away. Patience in year one pays for years after.

                ## Milestones
                1. The land's history, current vegetation and drainage recorded.
                2. Every block tested before any land preparation.
                3. Lime and a first cover crop season completed where the adviser recommends.
                4. A staged plan setting which blocks are planted in year one and year two.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Rehabilitated land has a soil test per block, recorded lime and cover crop work and a two-year staged planting plan."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Record the land's past use, current cover and drainage"
                - "Test every block before clearing or ploughing"
                - "Agree lime and a cover crop season with the extension officer"
                - "Write a two-year plan for which blocks are planted first"
            - name: Converting a field to organic soil management
              description: |-
                ## Purpose
                Growing for organic buyers means building fertility from compost, manure, cover crops and permitted inputs rather than synthetic fertiliser, usually over a conversion period set by the certifier. The soil plan, input records and approved product list are what an inspector checks first. Starting with one field limits the risk while you learn.

                ## Milestones
                1. The organic standard and certifier your buyer accepts identified, with its conversion period.
                2. One field chosen for conversion and its soil tested.
                3. A fertility plan built only from inputs the standard permits.
                4. Input records kept to the certifier's requirements and reviewed each quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One field has a soil test, a fertility plan using only permitted inputs and quarterly input records ready for a certifier."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your buyer which organic standard and certifier they accept"
                - "Get the certifier's list of permitted soil inputs"
                - "Write a fertility plan for one field using only permitted inputs"
                - "Review organic input records for the field @recurring(quarterly)"
            - name: Soil evidence when buying or leasing farmland
              description: |-
                ## Purpose
                A field that looks green can still be acid, stony, salty or worn out, and the cost of fixing it belongs in the price or the lease terms. Testing before you sign, walking the land in the rains and asking about its history give you evidence for the negotiation. Lenders sometimes ask for the same information.

                ## Milestones
                1. Permission obtained from the owner to take soil samples before signing.
                2. Samples from each distinct part of the land tested.
                3. The land walked during or just after heavy rain.
                4. The cost of correcting any soil problems estimated and raised in the negotiation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A soil test and rain-season walk are on file for the land, with correction costs raised before signing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the owner for permission to sample the soil before signing"
                - "Sample each distinct part of the land and send to the lab"
                - "Walk the land during or just after heavy rain"
                - "Estimate the cost of fixing soil problems and raise it in talks"
            - name: Training farm workers to sample soil and spread fertiliser
              description: |-
                ## Purpose
                When the owner cannot be in every field, sampling and spreading fall to workers, and a few missed steps undo the whole plan. A short practical training on the zigzag sampling pattern, labelling, calibrated scoops and filling in the log means the job is done the same way whoever does it. Include safe handling and washing up afterwards.

                ## Milestones
                1. A one-page instruction sheet for sampling and one for spreading written in plain words.
                2. Each worker shown both tasks in the field and observed doing them.
                3. Protective gear for handling fertiliser and lime issued and its use checked.
                4. Each trained worker's name and date recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every worker who samples or spreads has been trained and observed, with names, dates and instruction sheets on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft one-page sampling and spreading instructions"
                - "Show each worker the sampling pattern in a real block"
                - "Watch each worker spread fertiliser with the calibrated scoop"
                - "Record each trained worker's name and the date"
            - name: Strip trial comparing two fertiliser programmes
              description: |-
                ## Purpose
                Advice and sales talk are no substitute for a side-by-side result on your own soil. Running two programmes in alternating strips on one block, with everything else the same, and weighing the harvest from each, shows which earns more after cost. Replicating the strips at least three times keeps a lucky patch from deciding the answer.

                ## Milestones
                1. Two programmes chosen, such as the current one and the adviser's test-based plan.
                2. A block marked into at least six alternating strips of equal size.
                3. Each strip harvested and weighed separately.
                4. Yield value minus input cost compared between programmes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A replicated strip trial records yields and costs for two programmes and the better one is adopted."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose two fertiliser programmes to compare"
                - "Mark at least six alternating strips of equal size on one block"
                - "Weigh the harvest from each strip separately"
                - "Compare yield value minus input cost for each programme"
            - name: Zone sampling with GPS for larger farms
              description: |-
                ## Purpose
                On farms of tens of acres, a single sample per field hides big differences that cost money in both directions. Sampling by GPS grid or by zones drawn from yield history and soil colour, then mapping the results, shows where to put lime and fertiliser and where to save it. A free phone mapping app is enough to start.

                ## Milestones
                1. A GPS or mapping app set up with field boundaries.
                2. Zones or grid cells defined from soil colour, yield history or a regular grid.
                3. Each zone sampled and geotagged, with results mapped.
                4. Different lime or fertiliser treatment applied to zones where results justify it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map shows test results by zone or grid cell, and treatments differ between zones where results justify it."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Install a mapping app and draw field boundaries"
                - "Define sampling zones from soil colour and yield history"
                - "Take geotagged samples from each zone"
                - "Map results and mark zones needing different treatment"
            - name: Biochar trial from crop residues
              description: |-
                ## Purpose
                Biochar, made by charring crop residues such as coconut husks, cocoa pods or rice hulls with little air, can improve water and nutrient holding in some sandy and acid soils. Results vary widely, so a small replicated trial on your own soil is the honest way to find out. Produce it safely, away from buildings, and charge it with compost before use.

                ## Milestones
                1. A residue source and a safe, simple kiln method chosen.
                2. A batch of biochar produced and mixed with compost before use.
                3. Trial and control plots set up on the same block.
                4. Crop growth and a soil test compared between plots after one season.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A biochar trial records growth and soil results against a control plot for at least one season."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a crop residue the farm produces in quantity"
                - "Learn a simple kiln method and pick a safe site away from buildings"
                - "Mix the biochar with compost and apply it to trial plots"
                - "Test soil and compare crop growth with the control plot"
            - name: Soil carbon baseline for sustainability programmes
              description: |-
                ## Purpose
                Buyers, development banks and climate programmes increasingly ask farms for evidence of improving soil, and some pay for practices that build soil carbon. A carbon baseline measured with consistent depth and bulk density, before practices change, is the evidence they need. Without it, later gains cannot be shown.

                ## Milestones
                1. Programmes or buyers that ask for soil carbon evidence identified with their requirements.
                2. The sampling depth and method required confirmed with the programme or a lab.
                3. Carbon and bulk density measured on each block at fixed points.
                4. The baseline report filed with the sample locations recorded for repeat sampling.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A soil carbon baseline with bulk density, fixed sample points and method notes is on file for every block."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask buyers and lenders whether they want soil carbon evidence"
                - "Confirm the sampling depth and method with the lab"
                - "Mark fixed sampling points in each block"
                - "Sample carbon and bulk density at every fixed point"
            - name: Long-term soil monitoring points
              description: |-
                ## Purpose
                Fertility changes slowly, and a single test cannot show whether a farm's soil is getting better or worse over a decade. A few fixed, marked points sampled the same way every year build a record that reveals trends hidden by season-to-season noise. It is the record a farm successor or a serious buyer will value most.

                ## Milestones
                1. Three to five permanent points marked with posts and GPS coordinates.
                2. A fixed sampling method, depth and month written down.
                3. Each point sampled annually and results added to a trend table.
                4. A five-year trend chart drawn once enough years exist.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Permanent monitoring points are sampled each year by a written method and results kept in a trend table."
                cadence: cyclic
              tasks:
                - "Choose three to five points that represent the main soils"
                - "Mark each point with a post and record its GPS position"
                - "Write down the sampling depth, method and month"
                - "Sample the monitoring points and update the trend table @recurring(yearly)"
---

# Soil Testing and Fertility

This area is for growers who want to stop guessing at the soil: the vegetable farmer buying the same bag of fertiliser every season, the tree crop owner wondering why old blocks have tailed off, and anyone taking on new or tired land. It starts with foundations (a block map, a lab you trust, the first proper sampling round and reading the report), then the recurring machinery of sampling calendars, application logs, store checks and symptom walks, the soil science that makes a report make sense, decisions on lime, fertiliser programmes, compost, manure, cover crops and erosion control, dated events around the planting season and hurricanes, situations from a backyard plot to old cane land, and finally specialist work on trials, zone sampling, biochar and soil carbon.

What repeats is a weekly entry in the application log and turn of the compost, a monthly store count, price check, symptom walk and record update on different days, quarterly calibration and review, and a yearly sampling round and leaf test. The Vendor, Metrics log, Purchase decision and Operational checklist templates pair with the lab, the record book, the fertiliser choice and spreader calibration. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
