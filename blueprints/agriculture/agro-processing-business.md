---
id: agriculture.agro-processing-business
name: Agro-Processing Business
description: "A small food processing business built on your produce: one product chosen and costed, a licensed kitchen, safe acidified recipes, compliant labels, batch records and buyers who reorder."
category: business
version: 1.0.0
tags: [agriculture, agro-processing-business, small-business, founder, pepper-sauce, food-processing, value-added, food-labelling]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - vendor
    - marketing-campaign
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Agro-Processing Business
          description: "Turning produce into products such as pepper sauce, chow, jams, dried fruit and cassava flour: scaling recipes, food safety, labelling and a licensed kitchen."
          projects:
            - name: Choosing the first product to process
              description: |-
                ## Purpose
                Pepper sauce, mango chow, guava jam, dried pawpaw, cassava flour and seasoning paste each need different equipment, permits and buyers, and trying four at once is how a new processor ends up with half-filled shelves of everything. Pick one product that uses produce you can reliably get, that people already ask you for, and that keeps for months on a shelf. A second line can wait until the first one sells without you standing beside it.

                ## Milestones
                1. Five candidate products listed with their main raw material and season.
                2. Each candidate scored on raw supply, shelf life, equipment needed and existing demand.
                3. One product chosen, with the reason written in a sentence.
                4. Two people who would buy it at a stated price named before any equipment is bought.

                ## Notes
                Shelf-stable products such as acidified sauces, jams and dried goods are usually simpler to start than anything needing refrigeration, because cold storage and transport add cost at every step.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision naming one first product, its raw material source and two named buyers, made before equipment is bought."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down five products you could make from produce you can get"
                - "Score each one on supply, shelf life, equipment and demand"
                - "Ask three regular customers which one they would buy and at what price"
                - "Record the chosen product and the reason in your business notebook"
            - name: Finding out which food authority licenses you
              description: |-
                ## Purpose
                Selling a bottled or packaged food usually involves more than one office: a public health or environmental health department that registers and inspects food premises, a bureau of standards that sets labelling and product rules, and sometimes a separate permit for each food handler. The rules differ between Trinidad and Tobago, Jamaica, Barbados, Guyana and the OECS islands, so find out exactly which applies to you before you build or rent anything.

                ## Milestones
                1. The office that registers food premises in your area identified, with a contact name.
                2. The standards body that covers food labels and product rules identified.
                3. A written list of every licence, permit and registration you need, with fees and renewal periods.
                4. Any product-specific rules for your first product, such as acidified foods, noted.

                ## Notes
                Ask the extension office or the national small business agency for a contact first: they often know which inspector deals with small processors.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page list of every required licence, permit and registration, with the issuing office, fee and renewal period for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Call the local public health office and ask how food premises are registered"
                - "Ask the standards body which rules cover your product and its label"
                - "Write each licence, its fee and its renewal period on one page"
                - "Renew the premises licence and registrations before they expire @recurring(yearly)"
            - name: Home, shared or commercial kitchen decision
              description: |-
                ## Purpose
                Most authorities will not license a family kitchen used for cooking dinner, so a processor usually chooses between converting a separate room at home, renting time in a shared or incubator kitchen, or leasing a small commercial unit. The choice sets your start-up cost, the hours you can produce and how fast you can grow. Compare the three on real costs and on what the inspector will accept.

                ## Milestones
                1. The inspector's requirements for a processing room written down: surfaces, sinks, screens, water and toilets.
                2. Monthly cost and available hours priced for each option.
                3. At least one shared or incubator kitchen visited, if one exists nearby.
                4. A decision recorded, with the cost to fit out or the rental agreement terms.

                ## Notes
                Shared kitchens run by universities, agricultural agencies or business incubators exist in several islands and can be the cheapest way to produce legally while you test the market.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between a home room, a shared kitchen and a commercial unit, with costs and the inspector's requirements attached."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the inspector what a licensed processing room must have"
                - "Find out whether a shared or incubator kitchen operates near you"
                - "Price fit-out, rent and hours for each kitchen option"
                - "Write the decision and the monthly cost into the business plan"
            - name: Food handler permits for everyone in the kitchen
              description: |-
                ## Purpose
                Inspectors commonly ask to see a current food handler permit or training certificate for every person who touches the product, including relatives who help on busy days. Getting everyone through the course and medical checks early stops a licence being held up for one missing paper. It also gives your helpers the same hygiene habits as you.

                ## Milestones
                1. Every person who will work in the kitchen listed, including occasional helpers.
                2. Each person booked on a food handler course or medical check as required locally.
                3. Copies of every permit kept in one folder in the kitchen.
                4. Expiry dates written on a single list.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A kitchen folder holding a current food handler permit or certificate for every listed worker, with an expiry list on the front."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List everyone who will handle product, even once a month"
                - "Book the food handler course or clinic for each person"
                - "Put copies of every permit in a folder kept in the kitchen"
                - "Check permit expiry dates for every kitchen worker @recurring(quarterly)"
            - name: Costing a batch down to the last cap
              description: |-
                ## Purpose
                Processors often price from the cost of peppers and vinegar and forget jars, caps, labels, shrink bands, gas, water, cartons and their own hours, then discover each bottle earns cents. A full batch costing tells you the real cost per unit and the lowest price you can accept from a shop or distributor. Do it for your first product before you quote anyone.

                ## Milestones
                1. Every ingredient, packaging item and utility in one batch listed with its cost.
                2. Labour hours for prep, cooking, filling, labelling and cleaning counted.
                3. The cost per finished unit worked out from the actual yield of a test batch.
                4. A minimum wholesale price set above that cost.

                ## Notes
                Weigh the yield of a real batch. Recipes lose more to trimming, evaporation and spills than people expect, and the cost per unit moves with it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A batch costing sheet showing ingredients, packaging, utilities, labour and yield, ending in a cost per unit and a minimum wholesale price."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Weigh every ingredient and count every jar used in one test batch"
                - "Add packaging, gas, water and your hours at a stated rate"
                - "Divide by the units actually filled to get the cost per unit"
                - "Re-cost the batch when produce, jar or cap prices move @recurring(quarterly)"
            - name: Raw produce supply plan for the year
              description: |-
                ## Purpose
                Sauce made only from your own peppers stops when your field has a bad month, and mango chow can only be made while mangoes are in. Mapping when each raw material is in season, who else grows it, and what you can freeze, brine or dry for later turns a seasonal hobby into a product shops can rely on all year.

                ## Milestones
                1. Each raw material listed with the months it is available and typical price swings.
                2. At least two growers besides yourself identified for the main ingredient.
                3. A storage method chosen for out-of-season supply, such as freezing, brining or mash.
                4. Expected monthly volumes needed for the next twelve months written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month supply calendar naming sources, expected prices and a storage plan for each raw material."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark the months each ingredient is plentiful and scarce"
                - "Call two neighbouring growers about supplying you at harvest"
                - "Choose how to store the main ingredient for the lean months"
                - "Write expected monthly volumes for the coming year"
            - name: Registering the processing business and its bank account
              description: |-
                ## Purpose
                Shops, hotels and supermarkets want an invoice from a registered business, and lenders and grant schemes ask for one too. Registering a business name or company and opening a separate account for the processing side also lets you see whether the bottles make money apart from the farm. Ask an accountant which structure suits you before you register.

                ## Milestones
                1. A business structure chosen after one conversation with an accountant or business adviser.
                2. The business name registered with the companies or business names registry.
                3. A separate business bank account opened.
                4. Tax registration requirements for sales checked and noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A registered business name or company with its own bank account and a note of the tax registrations that apply."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book an hour with an accountant to choose a business structure"
                - "Check the name you want is free at the business registry"
                - "Open a bank account used only for processing income and costs"
                - "Ask the tax authority whether your sales need a tax registration"
            - name: Product liability cover for bottled foods
              description: |-
                ## Purpose
                Any customer who finds glass in a jar or falls ill after eating your product can claim against you personally if the business is not covered. Farm and home policies usually exclude products you sell, so processors need product and public liability cover, and some supermarkets ask for a certificate before listing you. Get quotes once the product and premises are clear.

                ## Milestones
                1. Two or three quotes for product and public liability insurance obtained.
                2. What each policy excludes, such as export sales or contamination recall, written down.
                3. A policy bought with a limit that meets what your main buyers ask for.
                4. The certificate saved where you can send it to a buyer the same day.

                ## Notes
                Ask your insurer or broker what records they expect you to keep. Batch sheets and cleaning logs often matter when a claim is made.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A product liability policy in force with its certificate on file, chosen from at least two quotes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your main buyers what insurance cover they require from suppliers"
                - "Get quotes for product and public liability from two insurers or a broker"
                - "Note each policy's exclusions before choosing"
                - "Renew product liability cover before it lapses @recurring(yearly)"
            - name: Starter equipment list for a small-batch kitchen
              description: |-
                ## Purpose
                One stainless pot, a food processor, a probe thermometer, a pH meter, a scale, a funnel or filler and jar racks will produce your first few hundred bottles; a steam kettle and a piston filler can wait until volume pays for them. Writing a short list, buying food-grade materials and skipping what you do not yet need protects cash in the first year.

                ## Milestones
                1. An essential list separated from a later list.
                2. Each essential item priced from at least two suppliers.
                3. Food-contact materials confirmed as stainless steel or food-grade plastic.
                4. Essential items bought within the start-up budget.

                ## Notes
                Start from the **Purchase decision** template. Aluminium and chipped enamel pots react with vinegar and lime, so keep them out of acid recipes.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A priced essential equipment list, with every item bought and within the written start-up budget."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the equipment you need for one batch of the first product"
                - "Split the list into buy now and buy when volume grows"
                - "Price each essential item from two suppliers"
                - "Confirm every food-contact item is stainless or food-grade"
            - name: Batch record and lot code for every run
              description: |-
                ## Purpose
                When a shop calls about a swollen bottle, a batch sheet tells you which peppers, which vinegar delivery, what pH and what fill temperature went into it, and the lot code on the label tells you which other bottles to pull. Without them you would have to recall everything you ever made. Start the habit on your first commercial batch.

                ## Milestones
                1. A one-page batch sheet covering ingredients and their sources, quantities, pH, temperatures, yield and who made it.
                2. A lot code system printed or stamped on every unit.
                3. Every batch since the first commercial run recorded.
                4. Sheets filed in date order and kept for longer than the product's shelf life.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production run has a completed batch sheet whose lot code matches the code on the finished units."
                cadence: rolling
              tasks:
                - "Draft a one-page batch sheet with every field you would need in a recall"
                - "Choose a lot code format based on the production date"
                - "Stamp or print the lot code on every jar in the next run"
                - "Check the week's batch sheets are complete and signed @recurring(weekly:fri)"
            - name: Weekly production day routine
              description: |-
                ## Purpose
                Small processors who cook whenever there is time make uneven batches and miss cleaning steps. A fixed production day with a written order of work, from receiving produce to clean-down, means helpers know what to do, the inspector sees the same standard every visit, and you can plan sales around a predictable output.

                ## Milestones
                1. One production day each week fixed and kept for a month.
                2. A written checklist in order: set-up, prep, cook, check, fill, seal, label, clean.
                3. Each helper's role on the day written down.
                4. Output per production day recorded for four weeks in a row.

                ## Notes
                Start from the **Operational checklist** template. Keep the checklist on the wall, laminated, rather than in a phone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive production days run from the written checklist, each with its output recorded."
                cadence: rolling
              tasks:
                - "Choose one fixed production day and tell everyone involved"
                - "Write the production day steps in order on one sheet"
                - "Run the production day checklist from set-up to clean-down @recurring(weekly:tue)"
                - "Record the number of units filled at the end of each production day"
            - name: Kitchen cleaning and sanitising schedule
              description: |-
                ## Purpose
                Pepper oil, sugar and fruit pulp left on surfaces feed ants, flies and moulds, and inspectors look first at drains, corners and the underside of tables. A written schedule of what gets cleaned after each run, each week and each month, with who did it, keeps the room inspection-ready and the product clean.

                ## Milestones
                1. Every surface, tool and drain listed with how often it is cleaned.
                2. The cleaning and sanitising products approved for food areas chosen and stored away from ingredients.
                3. A daily sheet signed after every use of the kitchen.
                4. A monthly deep clean done and logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed cleaning sheet for every day the kitchen is used and a logged deep clean each month."
                cadence: rolling
              tasks:
                - "List every surface, tool and drain and how often each is cleaned"
                - "Store cleaning chemicals on a shelf away from ingredients and jars"
                - "Tick off the cleaning sheet before locking the kitchen @recurring(daily)"
                - "Deep clean shelves, drains and the dry store and log it @recurring(monthly:20)"
            - name: Ingredient and packaging stock control
              description: |-
                ## Purpose
                Jars and caps often come from one importer with a long lead time, and running out of matching caps halfway through a batch wastes a day's cooking. A weekly count of jars, caps, labels, vinegar, sugar and spices, with reorder points, keeps production going and shows how much cash is tied up on the shelves.

                ## Milestones
                1. A stock list with a reorder point for every packaging and dry ingredient item.
                2. Lead times from each supplier written beside the item.
                3. Weekly counts recorded for a month.
                4. No production day lost to a missing item for three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stock list with reorder points and lead times, counted weekly, and three months without a production day lost to a shortage."
                cadence: rolling
              tasks:
                - "List every jar, cap, label and dry ingredient you keep"
                - "Set a reorder point for each item based on its lead time"
                - "Count jars, caps, labels and dry ingredients @recurring(weekly:mon)"
                - "Place packaging orders with the lead time in mind @recurring(monthly:5)"
            - name: Monthly sales and margin review by product
              description: |-
                ## Purpose
                Products can sell well and still lose money once discounts, breakages and distributor margins are counted. Looking at units sold, revenue and gross margin for each product and each outlet every month shows which shops to grow, which sizes to drop and when a price rise is overdue.

                ## Milestones
                1. Units, revenue and cost recorded per product and outlet each month.
                2. Gross margin per product worked out from the batch costing.
                3. The weakest product or outlet named each month with one action.
                4. Six months of figures in one place.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of units, revenue and gross margin per product and outlet, each month ending with one recorded action."
                cadence: rolling
              tasks:
                - "Set up a sheet with units, revenue and cost per product and outlet"
                - "Update sales, cost and margin per product for the month @recurring(monthly:3)"
                - "Name the weakest product or outlet and one thing to change"
                - "Compare this month's margin with the batch costing"
            - name: Retained sample library for shelf-life checks
              description: |-
                ## Purpose
                Keeping two units from every batch on a shelf at room temperature lets you see how colour, separation and flavour change over months, and gives you something to test if a customer complains. It is also the cheapest early warning that a recipe or seal is not holding.

                ## Milestones
                1. Two units from every batch labelled with lot code and stored at room temperature.
                2. A tasting and inspection note made for older samples each month.
                3. Any bulging, leaking, mould or off smell recorded and traced to its batch.
                4. Samples kept until past the stated best-before date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Retained samples from every batch on file, with monthly inspection notes and any faults traced to a lot code."
                cadence: rolling
              tasks:
                - "Clear a shelf for retained samples away from sunlight"
                - "Set aside two units from each batch with the lot code showing"
                - "Open, inspect and taste the oldest retained samples @recurring(monthly:15)"
                - "Write down any change in colour, smell, seal or texture"
            - name: Raw material checks when produce arrives
              description: |-
                ## Purpose
                Bruised mangoes, mouldy peppers or cassava held too long after harvest will spoil a batch however good the recipe. A quick check on arrival, against a short written standard, lets you refuse bad lots before they enter the kitchen and gives growers clear feedback on what you pay for.

                ## Milestones
                1. A written acceptance standard for each raw material: ripeness, damage, rot and foreign matter.
                2. Every delivery checked and the result written on a receiving log.
                3. Rejected lots recorded with the grower and reason.
                4. Rejections discussed with growers each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A receiving log showing a check for every delivery, with rejections and reasons, reviewed with growers each quarter."
                cadence: rolling
              tasks:
                - "Write a short acceptance standard for each raw material"
                - "Check the next delivery against it and log the result"
                - "Tell growers in writing what you accept and what you refuse"
                - "Review the rejection log with each grower @recurring(quarterly)"
            - name: Orders, invoices and getting paid
              description: |-
                ## Purpose
                Shops and hotels that take bottles on consignment or thirty-day terms can owe a small processor more than a month's production without anyone noticing. A simple order book, an invoice for every delivery and a monthly chase of anything overdue keep cash coming in to buy the next lot of jars.

                ## Milestones
                1. Every order written in one order book or sheet with date, outlet and quantity.
                2. An invoice issued for every delivery the same week.
                3. Overdue invoices listed and chased each month.
                4. Average days to get paid known for each outlet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An invoice on file for every delivery and a monthly overdue list showing average days to payment per outlet."
                cadence: rolling
              tasks:
                - "Set up an order sheet with date, outlet, product and quantity"
                - "Send invoices for the week's deliveries @recurring(weekly:thu)"
                - "Chase invoices more than thirty days unpaid @recurring(monthly:25)"
                - "Work out how many days each outlet takes to pay"
            - name: Pest control in the processing room
              description: |-
                ## Purpose
                Ants, cockroaches, rodents and fruit flies find a sugar and fruit kitchen quickly, and a single dropping is enough for an inspector to close a room. Screened windows, sealed gaps, closed bins and a logged check of bait stations, by you or a licensed pest control company, keep the room clean and give you evidence when asked.

                ## Milestones
                1. Gaps, drains and windows sealed or screened.
                2. Bait stations placed outside the food area on a map, by a licensed company if required locally.
                3. A monthly check of stations and screens logged.
                4. No sign of pests recorded at the last two inspections.

                ## Notes
                Keep baits and pest control products out of the processing area itself and follow the label or the contractor's instructions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pest control map and a monthly log of checks, with no pest findings at the last two inspections."
                cadence: rolling
              tasks:
                - "Walk the room and mark every gap where pests could enter"
                - "Fit screens or seals on windows, doors and drains"
                - "Check bait stations and fly screens and log it @recurring(monthly:10)"
                - "Ask a licensed pest control company for a quote if the room needs one"
            - name: Thermometer and pH meter checks
              description: |-
                ## Purpose
                Probe thermometers that read a few degrees high or pH meters that have drifted will tell you a batch is safe when it is not. Checking the thermometer in boiling and iced water and calibrating the pH meter with buffer solutions on a schedule is quick, cheap and the first thing a food technologist will ask about.

                ## Milestones
                1. Buffer solutions and a spare probe battery kept in the kitchen.
                2. The pH meter calibrated before each production day.
                3. The thermometer checked monthly and the reading logged.
                4. Any instrument that fails its check replaced before the next batch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log showing pH meter calibration before every production day and a monthly thermometer check."
                cadence: rolling
              tasks:
                - "Buy buffer solutions recommended by the pH meter maker"
                - "Calibrate the pH meter before each production day @recurring(weekly:tue)"
                - "Check the thermometer in boiling and iced water and log it @recurring(monthly:8)"
                - "Replace any probe or meter that fails its check"
            - name: Scaling a family recipe from pot to batch
              description: |-
                ## Purpose
                Grandmother's pepper sauce made by handfuls in a small pot rarely tastes the same when made twenty times larger, because heat, evaporation and cooking time change. Converting the recipe to weights, scaling it in steps and recording each trial gives a standard recipe anyone in the kitchen can follow and every customer can recognise.

                ## Milestones
                1. The recipe written in grams and millilitres from a weighed home batch.
                2. Trial batches made at two, five and ten times the home quantity.
                3. Taste, colour, thickness and pH recorded for each trial.
                4. A standard recipe card for the production batch size.

                ## Notes
                Change one thing at a time between trials. Peppers vary in heat between crops, so keep a note of the variety and source in every trial.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A standard recipe card in weights for the production batch size, backed by recorded notes from at least three scaling trials."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Weigh every ingredient as the recipe is made at home"
                - "Make a trial at twice the quantity and record the result"
                - "Repeat at five and ten times, adjusting one thing at a time"
                - "Write the final standard recipe card and pin it in the kitchen"
            - name: Acidity and pH basics for sauces and chow
              description: |-
                ## Purpose
                Pepper sauce, chow, pickles and many chutneys are low-acid foods made safe by adding vinegar, lime or other acid, and regulators in many countries treat a pH of 4.6 or below as the line for acidified foods. Understanding how acid, heat and seal work together, and measuring pH on every batch, is the most important safety skill a small processor learns. Have your recipe reviewed by a food technologist rather than relying on taste.

                ## Milestones
                1. A short course or session on acidified foods completed, through the extension service, a university or a standards body.
                2. pH measured and recorded on three batches of your recipe.
                3. Your recipe and process reviewed by a food technologist or process authority.
                4. The target pH and checks they set written on the recipe card.

                ## Notes
                Garlic, onions and oil in a sauce can raise the pH and add risk. Do not change the recipe after it has been reviewed without asking again.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recipe card showing a target pH set by a food technologist, with recorded pH readings from three batches meeting it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the extension office or a university about acidified food training"
                - "Measure and record the pH of your next three batches"
                - "Send the recipe and process to a food technologist for review"
                - "Write the agreed target pH and checks on the recipe card"
            - name: Hot fill and jar sealing technique
              description: |-
                ## Purpose
                Most bottled sauces and jams rely on filling hot, sealing quickly and inverting or cooling in a set way so the lid seals and the headspace is sterile. Practising the fill temperature, headspace and cap torque until every jar seals, and learning to spot one that has not, prevents spoilage and returns.

                ## Milestones
                1. The fill temperature and hold time from the reviewed process written on the wall.
                2. Fill level and headspace measured on a sample of jars.
                3. Seal checked on every jar the day after filling.
                4. Failed seals counted per batch, with the rate falling over four batches.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Four consecutive batches with fill temperature logged and failed seals counted, with the failure rate going down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the fill temperature and headspace from the reviewed process"
                - "Probe the product temperature as each tray is filled"
                - "Check every lid for a proper seal the day after filling"
                - "Count and record failed seals for each batch"
            - name: Drying fruit and peppers for sale
              description: |-
                ## Purpose
                Dried mango, pawpaw, banana chips and dried pepper flakes keep for months and ship light, but drying in the open sun picks up dust, insects and moisture. Learning to dry evenly in a solar or electric dryer, to check that pieces are dry enough, and to pack them airtight opens a product line that uses fruit too ripe for the fresh market.

                ## Milestones
                1. A solar or electric dryer chosen, borrowed or built to a tested design.
                2. Slice thickness, pre-treatment and drying time recorded for each fruit.
                3. A dryness check agreed with a food technologist, such as weight loss or moisture testing.
                4. A packed sample that stays crisp or pliable without mould for three months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Recorded drying settings for at least two products and a packed sample that keeps without mould for three months."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Ask the extension service for a tested solar dryer design"
                - "Dry a small trial of one fruit at two slice thicknesses"
                - "Weigh before and after drying to track moisture loss"
                - "Pack samples airtight and check them each month for three months"
            - name: Making cassava flour and farine safely
              description: |-
                ## Purpose
                Bitter cassava contains natural compounds that must be removed by grating, pressing, fermenting or drying before the flour, farine or cassareep is safe, and sweet varieties still need proper processing. Learning the method from someone experienced, choosing the right varieties and getting the product checked lets you sell gluten-free flour and farine with confidence.

                ## Milestones
                1. The cassava varieties you will use identified as bitter or sweet with the extension officer.
                2. The traditional or improved processing steps learnt from an experienced processor or trainer.
                3. Grating, pressing and drying equipment sourced or shared.
                4. A product sample tested or reviewed by a food technologist before sale.

                ## Notes
                Never shorten pressing or drying to save time. Ask the agricultural research institute in your country whether it offers cassava processing training.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written cassava processing method learnt from a trainer, with a product sample reviewed by a food technologist before first sale."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the extension officer which local cassava varieties are bitter"
                - "Spend a production day with an experienced cassava processor"
                - "Write down every step, time and piece of equipment used"
                - "Have a sample reviewed by a food technologist before selling"
            - name: Jam and jelly set with tropical fruit
              description: |-
                ## Purpose
                Guava, sorrel and tamarind set easily, while mango, pineapple and pawpaw are low in pectin and acid and often end up runny or crystallised. Learning how pectin, sugar and acid interact, and checking set and sugar content with a refractometer, gives a consistent jar and a product line for fruit seasons.

                ## Milestones
                1. Set tests practised with a cold plate and a refractometer.
                2. Pectin and acid needs noted for three local fruits.
                3. A standard recipe for one jam with its target sugar reading recorded.
                4. Three batches in a row with the same set and taste.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A standard jam recipe with a recorded sugar reading target, matched across three consecutive batches."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Buy or borrow a refractometer for sugar readings"
                - "Make small trials of three fruits and record how each sets"
                - "Choose one jam and fix its recipe and target reading"
                - "Make three batches and compare set, colour and taste"
            - name: What a food label must legally show
              description: |-
                ## Purpose
                Most Caribbean labelling standards follow the same broad pattern: product name, ingredients in order of weight, net contents in metric units, the name and address of the maker, a lot code, a date mark and allergen information, often in a minimum type size. Learning your country's version before you design a label saves reprinting thousands of labels.

                ## Milestones
                1. The current food labelling standard for your country obtained from the standards body.
                2. A checklist of every mandatory item and size rule written from it.
                3. Three competing products on local shelves checked against the list.
                4. Questions about your own product answered by the standards body in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written checklist of every mandatory label item for your country, with your open questions answered by the standards body."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request the food labelling standard from your country's standards body"
                - "Turn the standard into a one-page label checklist"
                - "Check three products on a supermarket shelf against it"
                - "Email the standards body your remaining questions"
            - name: Designing a compliant product label
              description: |-
                ## Purpose
                Every label has two jobs: selling the product from a crowded shelf and passing inspection. Working with a designer from your checklist, getting a proof approved by the standards body where they offer it, and printing a small first run lets you fix mistakes cheaply.

                ## Milestones
                1. A design brief with the checklist, label size and jar dimensions given to a designer.
                2. A proof checked line by line against the mandatory items.
                3. The proof reviewed by the standards body or a labelling adviser.
                4. A first run of labels printed in a quantity you will use within six months.

                ## Notes
                Measure the jar and print a paper mock-up before ordering. Labels that wrap the wrong way or cover the seal are a common first mistake.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A printed label that has been checked against the mandatory item list and reviewed by the standards body or an adviser."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Measure the jar and decide the label size and position"
                - "Brief a designer with the checklist and the look you want"
                - "Check the proof line by line against the label checklist"
                - "Order a small first print run after the proof is approved"
            - name: Nutrition panel and lab testing for the recipe
              description: |-
                ## Purpose
                Supermarkets and export buyers increasingly ask for a nutrition panel, and some countries make it mandatory. A food laboratory, a university or the standards body can test a sample or calculate values from the recipe, and the result lets you print accurate figures rather than copying a competitor's.

                ## Milestones
                1. Nutrition labelling requirements for your outlets confirmed.
                2. A lab or nutrition service chosen and quoted.
                3. A sample from a standard batch submitted.
                4. The results turned into a correctly formatted nutrition panel.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A nutrition panel based on lab results or a qualified calculation, filed with the lab report."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your main buyers whether they require a nutrition panel"
                - "Get quotes from two food labs or university services"
                - "Send a sample from a standard batch with its recipe"
                - "Format the results as a nutrition panel for the next label print"
            - name: Shelf-life study with a food lab
              description: |-
                ## Purpose
                A best-before date picked by guesswork can be too short, costing shelf space, or too long, causing complaints. A shelf-life study, where a lab tests stored samples at intervals for microbes, colour and taste, gives you a date you can defend to a supermarket buyer or an inspector.

                ## Milestones
                1. A lab agreed on the tests and intervals for your product.
                2. Samples from one standard batch stored as the lab instructs.
                3. Results received at each interval.
                4. A best-before date set from the results and added to the label.

                ## Notes
                Your retained sample library is a useful early check, but buyers usually want a lab report.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A lab shelf-life report on file and a best-before date on the label that does not exceed it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a food lab to propose a shelf-life study for your product"
                - "Store samples from one standard batch as instructed"
                - "Collect the result after each testing interval"
                - "Set the best-before date from the final report"
            - name: Glass, plastic or pouch packaging choice
              description: |-
                ## Purpose
                Glass looks premium and suits hot fill but is heavy, breaks and costs more to ship; food-grade plastic is lighter but must take the fill temperature; pouches suit dried goods and flour. Comparing options on cost per unit, fill method, shelf appeal and supply reliability before ordering a pallet prevents a costly change later.

                ## Milestones
                1. Three packaging options sampled with prices per unit at your order size.
                2. Each sample tested with a real fill and seal.
                3. Supply reliability and lead time checked for each supplier.
                4. One container and closure chosen and recorded with the supplier details.

                ## Notes
                Start from the **Purchase decision** template. Buy caps and jars as matched sets from the same supplier where you can.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded packaging choice based on a test fill of at least three options, with unit cost and lead time noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request samples of three containers with matching closures"
                - "Test fill and seal each sample with your product"
                - "Compare unit cost, lead time and breakage risk"
                - "Record the chosen packaging and supplier"
            - name: Price list for retail, wholesale and distributors
              description: |-
                ## Purpose
                Selling the same bottle at the same price to a customer at a market and to a distributor who needs a margin of their own leaves no room for anyone. A price list built up from your unit cost, with a shelf price in mind, gives clear wholesale and distributor prices you can quote without hesitating.

                ## Milestones
                1. A target shelf price set by checking similar products in shops.
                2. Retailer and distributor margins found out by asking.
                3. Wholesale and distributor prices worked back from the shelf price and checked against cost.
                4. A one-page price list with minimum order quantities and terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page price list with retail, wholesale and distributor prices, each above the costed unit price."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note shelf prices of five similar products in local shops"
                - "Ask a retailer and a distributor what margin they expect"
                - "Work wholesale and distributor prices back from the shelf price"
                - "Print a price list with order minimums and payment terms"
            - name: Barcodes for each product and size
              description: |-
                ## Purpose
                Supermarkets and many online shops need a registered barcode on every product and size before they can list it. Barcodes bought from unofficial resellers are often rejected, so most processors join the national or regional barcode numbering organisation and assign numbers to each item themselves.

                ## Milestones
                1. The official barcode numbering organisation for your country identified.
                2. Membership and fees understood and paid.
                3. A barcode number assigned to each product and size and recorded.
                4. Barcodes printed on the label and test-scanned.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A registered barcode for each product and size, recorded in a list and scanning correctly from the printed label."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the official barcode numbering organisation that serves your country"
                - "Apply for membership for the number of products you plan"
                - "Assign and record a number for each product and size"
                - "Test-scan the printed barcode at a shop or with a scanner app"
            - name: Co-packer or own kitchen as volumes grow
              description: |-
                ## Purpose
                Once orders outgrow one production day a week, you either expand your own kitchen or pay a licensed co-packer to make your recipe. A co-packer saves capital and brings their licences, but you share your recipe and depend on their schedule. Compare both on cost per unit, control and risk before a big order forces the decision.

                ## Milestones
                1. Two co-packers contacted with your volumes and recipe needs.
                2. Their price per unit, minimum run and lead time compared with the cost of expanding.
                3. Recipe confidentiality and quality checks covered in a draft agreement.
                4. A decision recorded, with the volume at which you would switch.

                ## Notes
                Start from the **Vendor** template. Ask a lawyer to look at any co-packing agreement before you sign it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between co-packing and expanding, based on quotes from two co-packers and an expansion costing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List licensed co-packers who handle sauces or your product type"
                - "Request quotes for your monthly volume and minimum run"
                - "Cost the equipment and space you would need to expand yourself"
                - "Record the decision and the volume that would change it"
            - name: Using grade-outs and surplus as raw material
              description: |-
                ## Purpose
                Peppers too small for the fresh market, mangoes with skin marks and cassava with broken roots are often sound inside and sell for little or nothing. Turning them into sauce, chow, dried fruit or flour can lower your raw material cost and give your farm, or your growers, an outlet for fruit that would otherwise rot.

                ## Milestones
                1. The volume and type of grade-outs from your farm or growers estimated for a season.
                2. A standard written for which grade-outs are acceptable for processing.
                3. A price agreed with growers for processing grade.
                4. Raw material cost per batch compared before and after.

                ## Notes
                Grade-outs must still be sound: blemishes are fine, rot and mould are not.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written processing-grade standard and price agreed with growers, and a recorded change in raw material cost per batch."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask growers how much produce they grade out each week"
                - "Write which defects are acceptable for processing"
                - "Agree a processing-grade price with two growers"
                - "Compare raw material cost per batch after one month"
            - name: One-way flow layout for the processing room
              description: |-
                ## Purpose
                Raw produce with field soil should never cross the path of finished jars. Arranging the room so work moves in one direction, from receiving and washing to cooking, filling, labelling and storage, reduces contamination and is one of the first things an inspector looks for when a room is expanded or fitted out.

                ## Milestones
                1. A sketch of the room showing current movement of produce, people and finished goods.
                2. Points where raw and finished products cross marked.
                3. A revised layout agreed with the inspector or a food technologist.
                4. Changes made and the new layout posted on the wall.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revised room layout with one-way flow, checked by the inspector or a food technologist and in use."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the room and draw how produce and jars move today"
                - "Mark every point where raw and finished goods cross"
                - "Show the revised layout to the inspector before building"
                - "Move equipment and post the new layout on the wall"
            - name: Passing the pre-opening premises inspection
              description: |-
                ## Purpose
                The first inspection decides whether you can legally sell, and a failed visit can mean weeks before a re-inspection. Walking the room with the inspector's checklist, fixing every item and having all paperwork ready on the day gets you licensed on the first visit.

                ## Milestones
                1. The inspector's checklist obtained and walked through in the room.
                2. Every item on it fixed or explained.
                3. Permits, cleaning log, pest control log and water source documents in one folder.
                4. The inspection passed and the licence displayed.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A premises licence or registration certificate issued and displayed in the processing room."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the health office for its premises inspection checklist"
                - "Walk the room with the checklist and list every fix"
                - "Put permits and logs in one folder for the day"
                - "Book the inspection once every fix is done"
            - name: First licensed production run
              description: |-
                ## Purpose
                The first run in the licensed room is a dress rehearsal for every run after it: it tests the recipe at scale, the batch sheet, the fill, the labels and the clean-down. Plan it as a dated event, keep it small, and review it the next day so the problems are fixed before a buyer's order depends on them.

                ## Milestones
                1. Produce, ingredients, jars, caps and labels in stock for one batch.
                2. The batch made using the recipe card, batch sheet and production checklist.
                3. pH, fill temperature, yield and seal failures recorded.
                4. A review written the next day with three things to change.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One complete batch made in the licensed kitchen with a full batch sheet and a written review listing changes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose the date and confirm produce delivery for that morning"
                - "Check every ingredient and packaging item is in stock"
                - "Make the batch following the checklist and batch sheet"
                - "Write a next-day review with three changes for the next run"
            - name: Launch at a food fair or trade show
              description: |-
                ## Purpose
                Agricultural shows, food and drink expos and trade missions put a new product in front of hundreds of shoppers, chefs and buyers in a weekend. Going with samples, a price list, enough stock and a way to take orders turns a stall into supermarket conversations and repeat customers.

                ## Milestones
                1. A fair or show chosen and the stall booked.
                2. Stock, samples, price lists and an order sheet prepared.
                3. Contact details collected from every interested buyer.
                4. Follow-up messages sent to buyers within a week.

                ## Notes
                Start from the **Marketing campaign** template. Check with the organiser whether sampling food needs a separate permit.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed fair or show with a list of buyer contacts, each followed up within seven days."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List upcoming food fairs, agricultural shows and trade expos"
                - "Book a stall and ask whether sampling needs a permit"
                - "Prepare samples, price lists and an order sheet"
                - "Follow up every buyer contact within a week of the show"
            - name: In-store tasting days with a new stockist
              description: |-
                ## Purpose
                A new sauce on a supermarket or deli shelf can sit unsold beside brands people already know. A few tasting days in the first month after listing, with the store's agreement, get the product into hands and show the store you will help it sell.

                ## Milestones
                1. Tasting dates agreed with the store manager.
                2. Samples, small cups, a clean table and price signs prepared.
                3. Units sold on tasting days recorded against a normal day.
                4. A short note of customer comments shared with the store.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least two tasting days held at a new stockist with sales compared against a normal day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the store manager for two tasting dates"
                - "Pack samples, cups, napkins and a price sign"
                - "Count units sold on the day and on a normal day"
                - "Send the store a short note of customer feedback"
            - name: Mock recall drill from one lot code
              description: |-
                ## Purpose
                If a batch has a problem, you need to know within hours which customers received it and how many units are still out there. Running a mock recall on a random lot code shows whether your batch sheets, invoices and delivery notes actually link up, before a real complaint tests them.

                ## Milestones
                1. A written recall plan naming who calls whom and what customers are told.
                2. A random lot code traced to every outlet that received it.
                3. Units made, sold and still in stock accounted for.
                4. Gaps found in the trace fixed in the records.

                ## Notes
                Start from the **Risk register** template to list what could go wrong and how you would respond.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mock recall that traces a random lot code to every outlet and accounts for all units within four hours."
                cadence: cyclic
              tasks:
                - "Write a one-page recall plan with contacts and steps"
                - "Pick a random lot code and time how long the trace takes"
                - "Account for every unit made, sold and in stock"
                - "Run a trace test on one random batch @recurring(quarterly)"
            - name: Adding a processing line to a working farm
              description: |-
                ## Purpose
                Farmers who process their own crop gain a second income from the same land, but processing days compete with planting, spraying and picking. Planning which months the farm can spare labour, which produce goes to processing and how the two sets of accounts stay separate keeps both sides running.

                ## Milestones
                1. Months of peak farm work marked so production days avoid them.
                2. A rule agreed for which harvest goes to fresh sales and which to processing.
                3. A transfer price set for farm produce sold to the processing side.
                4. Separate records kept for farm and processing for one quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan showing processing months, a produce allocation rule and a transfer price, with one quarter of separate records."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Mark the farm's busiest months on a calendar"
                - "Decide which grades and quantities go to processing"
                - "Set a fair price for produce moved from farm to processing"
                - "Keep processing costs in their own book for three months"
            - name: Weekend processor with a full-time job
              description: |-
                ## Purpose
                Many sauce and preserve businesses begin with a founder who works all week and cooks on Saturdays. With only one day, everything must be prepped, batch sizes fixed and sales handled by message or through one stockist. Planning around that limit makes the business sustainable until it can pay for more time.

                ## Milestones
                1. Weekly hours available for the business written down honestly.
                2. Batch size and frequency set to fit those hours.
                3. Ordering and delivery arranged so they fit evenings or one fixed day.
                4. Three months of production kept within the planned hours.

                ## Notes
                Check your employment contract for any rule about outside work before you start trading.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written weekly schedule for the business that fits the stated hours and was followed for three months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write how many hours a week you can truly give the business"
                - "Set a batch size that one production day can handle"
                - "Choose one delivery evening or pickup day for orders"
                - "Review after three months whether the hours held"
            - name: Community group processing centre
              description: |-
                ## Purpose
                Women's groups, farmer cooperatives and village councils often share one licensed kitchen and pool equipment bought with a grant. Clear rules on who uses the room when, who pays for what, how sales money is shared and who keeps the records stop the arguments that close many shared centres within a few years.

                ## Milestones
                1. A written agreement on kitchen booking, cleaning duties and equipment care.
                2. A way of sharing costs and sales income agreed and minuted.
                3. One person responsible for batch records and one for money.
                4. Six monthly meetings held with accounts presented.

                ## Notes
                Ask the cooperative or community development department about model rules for groups before writing your own.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A signed group agreement on kitchen use and money, with minutes and accounts from six monthly meetings."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the cooperative department for model group rules"
                - "Draft booking, cleaning and cost-sharing rules with the group"
                - "Name a records keeper and a treasurer at a group meeting"
                - "Hold the group's production and money meeting @recurring(monthly:12)"
            - name: Family recipe business with relatives as partners
              description: |-
                ## Purpose
                When a mother's recipe becomes a product, siblings and cousins often help, invest or expect a share, and nothing is written down until the business makes money. Agreeing early who owns the recipe and the brand, who is paid for work and how profits are shared protects the business and the family.

                ## Milestones
                1. Each relative's role, time and money put in written down.
                2. Ownership of the recipe and brand name agreed.
                3. Pay for work and sharing of profits agreed.
                4. A written agreement reviewed by a lawyer and signed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed family agreement covering recipe and brand ownership, pay and profit sharing, reviewed by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each relative's role, hours and money put in so far"
                - "Hold a family meeting on recipe ownership and profit sharing"
                - "Ask the agent to draft a plain summary of what was agreed"
                - "Have a lawyer turn the summary into a signed agreement"
            - name: Online shop and WhatsApp orders for local delivery
              description: |-
                ## Purpose
                Many small processors sell more by WhatsApp, social media and a simple online shop than through stores, especially to office workers and returning diaspora visitors. Fixed dispatch days, a price list with delivery charges and protective packing for glass keep online orders profitable instead of becoming a stream of one-bottle trips.

                ## Milestones
                1. A catalogue with photos, prices and delivery charges published on one channel.
                2. Two fixed dispatch days set and announced.
                3. Bottles packed to survive delivery, tested with one order.
                4. Online orders tracked separately for three months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An online catalogue with delivery charges and two fixed dispatch days, with three months of order records."
                cadence: rolling
              tasks:
                - "Photograph each product and write a short catalogue"
                - "Set delivery charges by area and a minimum order"
                - "Pack and dispatch online orders on the fixed days @recurring(weekly:mon,thu)"
                - "Keep a separate record of online orders and delivery costs"
            - name: Funding the move to a commercial unit
              description: |-
                ## Purpose
                Moving from a home room to a leased unit with a steam kettle, filler and cool store can cost more than the business earns in a year. A short business plan with sales history, costed equipment and cash flow lets you approach development banks, credit unions, small business agencies and grant schemes for processors with something they can assess.

                ## Milestones
                1. Twelve months of sales and batch costs summarised.
                2. Unit rent, fit-out and equipment quoted.
                3. A cash flow forecast for two years prepared with an accountant or adviser.
                4. At least two funders approached with the plan.

                ## Notes
                Ask the small business agency and the agricultural development bank whether they run schemes for agro-processors specifically.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A business plan with sales history, costed expansion and a two-year cash flow, submitted to at least two funders."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Summarise the last twelve months of sales and costs"
                - "Get quotes for a unit, fit-out and the next equipment"
                - "Ask the agent to draft the business plan narrative from your figures"
                - "Book meetings with two lenders or grant schemes"
            - name: Scheduled process review by a process authority
              description: |-
                ## Purpose
                Selling acidified or low-acid canned foods to larger buyers or abroad often requires a scheduled process: a written method set by a recognised process authority stating the pH, temperatures and times that make the product safe. Getting one for your main product removes a common barrier to bigger orders.

                ## Milestones
                1. A recognised process authority or food technology institute identified.
                2. Recipe, formulation and current process data sent to them.
                3. A written scheduled process received for each product.
                4. Production records changed to show every critical step in it.

                ## Notes
                Any recipe change, even a different vinegar or more garlic, may need the process reviewed again.
              priority: high
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written scheduled process from a recognised process authority on file for each main product, with batch sheets updated to match."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the standards body or a university which process authorities they recognise"
                - "Send your recipe and batch records for review"
                - "File the scheduled process with your recipe cards"
                - "Update the batch sheet so it records every critical step"
            - name: Second product development pipeline
              description: |-
                ## Purpose
                Once the first product sells steadily, buyers start asking what else you make, and a second line can share jars, labels and outlets. A short pipeline where ideas are tested, costed and checked for safety one at a time stops you launching three products that nobody reorders.

                ## Milestones
                1. An idea list scored on shared equipment, raw supply and buyer interest.
                2. One idea taken through recipe, costing and tasting with ten customers.
                3. Safety review, label and costing done before launch.
                4. A launch decision recorded, go or not yet.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One second product taken from idea through costing, tasting and safety review to a recorded launch decision."
                cadence: cyclic
              tasks:
                - "Write every product idea buyers or customers have suggested"
                - "Score them on equipment, raw supply and buyer interest"
                - "Give samples of the top idea to ten customers for feedback"
                - "Review the product idea list and pick the next to test @recurring(quarterly)"
            - name: Private label production for a retailer or hotel
              description: |-
                ## Purpose
                Hotels, gift shops and supermarket chains sometimes want a pepper sauce or jam under their own name. Private label work can fill spare production days with large regular orders, but it needs a clear agreement on recipe, specifications, labels, who carries liability and who owns what.

                ## Milestones
                1. The buyer's specification, volumes and label requirements written down.
                2. A price that covers costs and set-up of a separate label costed.
                3. Liability, recipe ownership and exclusivity covered in a written agreement.
                4. A first private label batch delivered and approved.

                ## Notes
                Keep the same batch records and lot codes for private label runs as for your own brand.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed private label agreement and a first batch accepted by the buyer, with batch records filed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Get the buyer's specification and expected volumes in writing"
                - "Cost the private label run including label set-up"
                - "Have a lawyer review the agreement on liability and recipe ownership"
                - "Deliver the first batch and record the buyer's approval"
            - name: Trademark for the brand name and logo
              description: |-
                ## Purpose
                A successful sauce name is easy to copy, and a competitor who registers it first can stop you using it in a market you want to enter. Searching and registering the brand name and logo with the intellectual property office in your country, and in key markets later, protects the value you are building.

                ## Milestones
                1. A search of the trademark register done for your name and logo.
                2. The right classes for your products identified.
                3. An application filed, directly or through an agent.
                4. The registration certificate filed and renewal date noted.

                ## Notes
                An intellectual property agent can advise on which classes and countries are worth the fees.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A filed trademark application for the brand name and logo, with its renewal date recorded once granted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Search the trademark register for your brand name"
                - "Ask the IP office which classes cover your products"
                - "File the application or instruct an IP agent"
                - "Record the renewal date once the mark is granted"
---

# Agro-Processing Business

Agro-processing turns peppers, fruit, cassava and seasoning into bottles, jars and bags that keep for months and sell for several times the price of the raw crop, but small processors lose money on uncosted batches, unlicensed kitchens, labels that fail inspection and sauces nobody tested for acidity. This area starts with the foundations (one product, the regulator, the kitchen, permits, costing and cover), then the production, cleaning, stock and sales routines, the skills of scaling recipes, controlling acidity, sealing jars, drying and making cassava flour, the decisions on labels, packaging, pricing and co-packers, the dated events from inspection to first run and launch, variants for farmers, weekend founders, community groups and families, and finally process reviews, private label work and protecting your brand.

The rhythm is the production week: a fixed production day run from a checklist, batch sheets checked every Friday, a weekly stock count, monthly margin, sample tasting, pest control and thermometer checks, quarterly re-costing and recall trace tests, and yearly licence and insurance renewals. The Purchase decision, Operational checklist, Metrics log, Vendor, Marketing campaign and Risk register templates pair with equipment buying, production day, the margin log, a co-packer, the launch and the recall drill. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
