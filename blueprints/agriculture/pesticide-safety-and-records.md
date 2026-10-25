---
id: agriculture.pesticide-safety-and-records
name: Pesticide Safety and Records
description: "A checked chemical inventory, a locked store, the right protective kit, label-first mixing, spray records and pre-harvest interval checks that keep workers, families and buyers safe."
category: business
version: 1.0.0
tags: [agriculture, pesticide-safety-and-records, small-business, pesticides, spray-records, ppe, pre-harvest-interval, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - vendor
    - training-program
    - compliance-control
    - metrics-log
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Pesticide Safety and Records
          description: "Handling farm chemicals safely: approved product lists, following the label, protective equipment, locked storage, spray records and pre-harvest intervals."
          projects:
            - name: Full count of farm chemicals on the property
              description: |-
                ## Purpose
                Most farms hold more chemicals than the owner thinks: half bottles in the shed, a sack of granules in the pump house, a decanted drink bottle on a shelf. Counting every container in one afternoon, with product name, active ingredient, quantity and condition, is the starting point for the store, the records and any clear-out. Without the list, nobody can say what a child or a dog might find.

                ## Milestones
                1. Every building, vehicle and corner of the farm checked for chemical containers.
                2. A list written of each product with brand, active ingredient, pack size, amount left and where it was found.
                3. Unlabelled, decanted or damaged containers flagged separately and set aside safely.
                4. The list dated and kept where the spray records will live.

                ## Notes
                Wear gloves while counting, and never sniff or open an unlabelled container to identify it. Ask the extension officer or the pesticides authority how to deal with unknowns.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated inventory lists every chemical container on the farm with product, active ingredient, quantity and location, with unknowns flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk the shed, pump house and vehicles and note every chemical container"
                - "Write down product name, active ingredient and amount left for each"
                - "Set aside unlabelled or decanted containers in a marked crate"
                - "Date the inventory and file it with the spray record book"
            - name: Checking products against the registered pesticide list
              description: |-
                ## Purpose
                Most Caribbean countries have a pesticides and toxic chemicals board or similar authority that publishes the products registered for use, and some older products on farm shelves have since been banned or restricted. Checking each item in your inventory against the current list tells you what you may legally use, on which crops, and what has to go. Buyers and inspectors ask this question first.

                ## Milestones
                1. The current registered or approved product list obtained from the pesticides authority or extension office.
                2. Every product in the inventory marked as registered, restricted, banned or not found.
                3. Products registered for some crops but not yours noted, with the crops they are approved for.
                4. A short list of products to remove or replace passed to the clear-out project.

                ## Notes
                Registration is crop specific. A product approved for sugar cane is not automatically approved for hot peppers, so read the crop list on the label as well as the authority's list.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each product in the inventory carries a recorded status from the current registered list, and banned or unapproved items are listed for removal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the extension office for the current registered pesticide list"
                - "Mark each inventory item as registered, restricted, banned or not found"
                - "Check the label crop list for every product you use on food crops"
                - "List the products that must be removed or replaced"
            - name: Label reading for every product on the shelf
              description: |-
                ## Purpose
                The label is the legal instruction for that product, and it carries the crop list, the rate, the protective equipment, the re-entry interval, the pre-harvest interval and the first aid steps. Few people read it past the brand name. Working through each label once and copying the key lines onto a one-page summary means the facts are in front of whoever mixes the tank.

                ## Milestones
                1. Each label read in full, including the small print on the back panel or booklet.
                2. A one-page summary per product listing crops, protective equipment, re-entry interval, pre-harvest interval and first aid.
                3. Any label that is damaged or unreadable replaced with a copy from the supplier.
                4. The summaries kept in a plastic sleeve by the mixing area.

                ## Notes
                Copy the label wording exactly rather than paraphrasing. If a summary and the label ever disagree, the label wins.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page label summary exists for every product in use, with crops, PPE, re-entry and pre-harvest intervals copied exactly from the label."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the full label of the product you use most this week"
                - "Copy its crops, PPE, re-entry and pre-harvest lines onto one page"
                - "Ask the supplier for replacement labels where yours are unreadable"
                - "Put the summaries in a plastic sleeve beside the mixing area"
            - name: Safety data sheet file for every product
              description: |-
                ## Purpose
                Beyond the label, the safety data sheet holds what there was no room for: fire hazards, spill handling, storage conflicts and detailed first aid for the doctor. Suppliers are usually required to provide it on request, and a hospital treating a poisoned worker will want it. Keeping one file with a sheet for each product means it can be grabbed in seconds.

                ## Milestones
                1. A safety data sheet requested or downloaded for each product in the inventory.
                2. The sheets printed and filed in one folder, sorted by product name.
                3. The folder kept outside the store, so it can be reached if the store is on fire or contaminated.
                4. A copy of each sheet saved on a phone that travels with the crew.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder outside the chemical store holds a current safety data sheet for every product in the inventory, with phone copies saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Email your agro-supply shop asking for safety data sheets for your products"
                - "Download any sheets the manufacturer publishes online"
                - "File the printed sheets alphabetically in one folder"
                - "Save a copy of each sheet in a folder on the crew phone"
            - name: Locked chemical store with ventilation and bunding
              description: |-
                ## Purpose
                A drum on the kitchen floor or bottles on an open shelf are how children, animals and thieves get to farm chemicals. A dedicated store that locks, keeps the rain off, lets fumes out and holds spills inside a low wall or tray protects the household, the well and the stock. It is also the first thing an auditor or inspector walks to.

                ## Milestones
                1. A site chosen away from the house, wells, streams and feed stores, above flood level.
                2. A lockable store built or converted, with ventilation, shade and a solid floor.
                3. A bund, sill or spill tray in place that would hold the largest container if it split.
                4. Shelving arranged with liquids below powders and herbicides apart from other products.
                5. A warning sign on the door and the key held by named people only.

                ## Notes
                Ask the extension officer or pesticides authority whether there is a published store standard in your country before you build. A converted shipping container works if it is shaded and ventilated, because an unshaded steel box gets very hot.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All farm chemicals sit in one locked, ventilated, bunded store away from water and the house, with a warning sign and a named keyholder list."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Mark three possible store sites on a sketch of the farm with distances to water"
                - "Ask the extension officer for any published chemical store standard"
                - "Price a lockable store with shelving, vents and a spill tray"
                - "Move every product into the store and fit the warning sign"
                - "Write down who holds a key and keep the list in the spray book"
            - name: Protective equipment kit for each sprayer
              description: |-
                ## Purpose
                Shared, cracked gloves and a dust mask hanging on a nail do not protect anyone, and most poisonings on small farms come through the skin during mixing. Each person who mixes or sprays needs their own kit matched to what the labels on the farm demand. Putting the kit together now means nobody has the excuse that the gloves were missing on spray day.

                ## Milestones
                1. The protective equipment required by each label on the farm listed in one place.
                2. A named kit per sprayer with chemical-resistant gloves, eye protection, boots, coverall and any respirator the labels require.
                3. Respirators fitted to each wearer, with the correct cartridges for the products used.
                4. A clean storage locker for kits, separate from the chemical store.

                ## Notes
                Cotton gloves and leather boots soak chemicals up and hold them against the skin. Nitrile gloves and rubber boots are the usual minimum, but the label sets the standard.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every person who mixes or sprays has a named kit that meets the strictest label on the farm, stored apart from the chemicals."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the protective equipment each label on the farm requires"
                - "Buy a named kit for each person who mixes or sprays"
                - "Have each respirator wearer check the fit and cartridge type"
                - "Set up a clean locker for kits away from the chemical store"
            - name: Spray record book set up
              description: |-
                ## Purpose
                Buyers, exporters, auditors and inspectors all ask the same thing: what was applied, where, when, by whom and when the crop was picked. A record book with the right columns, started today, answers that and shows patterns over a season. Records made from memory a month later are worth very little.

                ## Milestones
                1. A record format chosen, paper book or spreadsheet, with columns for date, field, crop, product, active ingredient, label rate used, water volume, area, applicator, weather, re-entry and pre-harvest intervals.
                2. Each field or block given a fixed name or number that matches a farm sketch.
                3. The first real application recorded in full on the day it happened.
                4. The book kept in a dry place near the store, with a backup photo of each page.

                ## Notes
                Ask your main buyer or the GAP scheme you supply whether they need particular columns, so you only set it up once.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spray record book with all required columns is in use, fields are numbered on a farm sketch, and the latest application is fully recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw a sketch of the farm and number every field or block"
                - "Rule the columns for date, field, crop, product, rate, applicator and intervals"
                - "Ask your main buyer whether they need any extra columns"
                - "Record the next application in full on the same day"
            - name: Pre-harvest interval board for each field
              description: |-
                ## Purpose
                The pre-harvest interval is the minimum number of days on the label between the last spray and picking, and breaking it is how residue failures and sick customers happen. A board or whiteboard showing each field, the last product applied and the first safe harvest date lets pickers and the person taking orders see it at a glance. It turns a number buried in the book into a rule anyone can follow.

                ## Milestones
                1. A board placed where harvest crews gather, with a row for each field.
                2. Each row showing the last product, the spray date and the earliest safe harvest date from the label.
                3. A rule agreed that nobody picks from a field before its date, even for a rush order.
                4. The board updated on every spray day by the person who sprayed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board at the packing or gathering point shows the earliest safe harvest date for every field, updated on each spray day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put up a whiteboard where the harvest crew gathers"
                - "Write each field with its last spray and earliest harvest date"
                - "Tell every picker and order taker the no-early-picking rule"
                - "Add updating the board to the end of each spray day"
            - name: Pesticide poisoning emergency plan
              description: |-
                ## Purpose
                When someone collapses after spraying, minutes matter and panic wastes them. A one-page plan posted at the store and in the vehicle, with the poison centre or hospital number, the nearest clinic, the first aid steps from the labels and who drives, means anyone on the farm can act. It also reminds everyone to take the label or safety data sheet to the doctor.

                ## Milestones
                1. The local emergency number, nearest hospital and any poison information service written down.
                2. The first aid steps from the labels on the farm summarised on one page.
                3. A clean water supply, eyewash bottle and soap kept at the mixing area.
                4. The plan posted at the store, the mixing area and in the farm vehicle.
                5. Every worker shown the plan and told to bring the label to hospital.

                ## Notes
                This plan is about getting help fast, not treating at the farm. Follow the label first aid steps and get medical care for any suspected poisoning.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page poisoning plan with emergency numbers, label first aid steps and a named driver is posted at the store, mixing area and vehicle."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the emergency number, nearest hospital and any poison service"
                - "Summarise the first aid steps from every label onto one page"
                - "Fit an eyewash bottle and soap at the mixing area"
                - "Post the plan at the store, mixing area and farm vehicle"
            - name: Mixing and loading area with spill kit
              description: |-
                ## Purpose
                Most chemical spills happen while filling the tank, and a sprayer filled beside the well or on the river bank puts concentrate straight into water. A fixed mixing spot on hard standing or a tray, away from water, with a spill kit beside it keeps accidents small and contained. It also makes clean-up after each spray day routine.

                ## Milestones
                1. A mixing point chosen well away from wells, streams and drains, on level ground.
                2. A concrete pad, sump or tray in place to catch splashes and overflow.
                3. A spill kit stocked with absorbent material, a shovel, bags and spare gloves.
                4. A water supply that cannot siphon back into the source, such as a separate drum or an air gap.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All tank filling happens at one marked mixing point away from water, with a catch tray, a stocked spill kit and backflow protection."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a mixing spot at a safe distance from the well and drains"
                - "Lay a pad or tray that catches splashes and overflow"
                - "Stock a spill kit with sand or absorbent, shovel and bags"
                - "Fill sprayers from a drum or with an air gap so nothing siphons back"
            - name: Weekly spray record check
              description: |-
                ## Purpose
                Records slip in the busy weeks, which are exactly the weeks a buyer will later ask about. Ten minutes each Friday comparing the book with what was actually sprayed, the stock that left the store and the harvest board keeps gaps from growing. A record is only useful if it is complete and readable.

                ## Milestones
                1. Every application from the past week recorded with all columns filled.
                2. Product used in the book matched against stock that left the store.
                3. The harvest board and the book showing the same dates.
                4. Missing details chased with the applicator the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week's spray records are complete and reconciled with store stock and the harvest board by the following Friday."
                cadence: rolling
              tasks:
                - "Check the week's spray entries for blank columns @recurring(weekly:fri)"
                - "Compare product used with what left the store this week"
                - "Match the harvest board dates against the book"
                - "Photograph the week's pages as a backup @recurring(weekly:sat)"
            - name: Monthly chemical store inspection
              description: |-
                ## Purpose
                Stores decay quietly: a lid cracks, a sack splits, the lock rusts, the rain finds a gap. A short monthly walk through with a checklist catches leaks and damage before they become spills or poisonings. It also keeps the inventory honest between full counts.

                ## Milestones
                1. A store checklist written covering lock, roof, ventilation, bund, labels, leaks and stock levels.
                2. The checklist completed and dated every month.
                3. Every fault found given a fix and a date.
                4. Stock levels updated on the inventory.

                ## Notes
                Start from the **Operational checklist** template so each month uses the same list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve dated store inspections a year, with every fault given a fix date and closed on the next inspection."
                cadence: rolling
              tasks:
                - "Write the store checklist with lock, roof, bund, labels and leaks"
                - "Walk through the store with the checklist @recurring(monthly:7)"
                - "Update the inventory with current stock levels"
                - "Fix or book a fix for every fault found"
            - name: PPE inspection, cleaning and replacement
              description: |-
                ## Purpose
                Gloves wear through at the fingertips, respirator cartridges stop working, and coveralls washed with the family laundry spread residue to children's clothes. A routine for washing, inspecting and replacing protective kit keeps it actually protective. It costs little compared with a single trip to hospital.

                ## Milestones
                1. A washing routine agreed: gloves rinsed before removal, coveralls washed separately from household laundry.
                2. Gloves, boots and eye protection inspected for wear on a fixed day.
                3. Respirator cartridges replaced on the schedule the manufacturer sets, with the date written on them.
                4. A small stock of spare gloves and cartridges kept in the kit locker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every kit is inspected monthly, worn items are replaced the same week, and cartridge change dates are written on each respirator."
                cadence: rolling
              tasks:
                - "Inspect every glove, boot and visor for cracks or holes @recurring(monthly:14)"
                - "Write the fitting date on each new respirator cartridge"
                - "Wash spray coveralls in a separate load from household clothes"
                - "Restock spare gloves and cartridges in the kit locker @recurring(quarterly)"
            - name: Re-entry interval posting for treated fields
              description: |-
                ## Purpose
                Every label gives a re-entry interval: how long people must stay out of a treated field without protective equipment. Pickers, family members and neighbours walking a shortcut cannot see that a field was sprayed this morning. Posting warning signs and telling the crew each time closes the gap.

                ## Milestones
                1. Reusable warning signs made for each field entrance.
                2. Signs put up before spraying and taken down only after the re-entry interval ends.
                3. The crew told at the morning briefing which fields are closed and until when.
                4. Any early entry for urgent work done only with the protective equipment the label requires.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every treated field carries a warning sign from spraying until its re-entry interval ends, recorded in the spray book."
                cadence: rolling
              tasks:
                - "Make durable warning signs for each field entrance"
                - "Put signs up before each spray and note the reopening time"
                - "Announce closed fields at the morning crew briefing"
                - "Remove signs only when the re-entry interval has passed"
                - "Replace faded or missing warning signs at field entrances @recurring(quarterly)"
            - name: Harvest release check against pre-harvest intervals
              description: |-
                ## Purpose
                Sooner or later a hotel order arrives for tomorrow and the best tomatoes are in the field sprayed four days ago. A short check before each harvest, signed by the person in charge, stops the field being picked early under pressure. It also gives buyers a documented release they can rely on.

                ## Milestones
                1. A harvest release line added to the spray book or a separate sheet.
                2. Each harvest checked against the last spray and its pre-harvest interval before picking starts.
                3. Fields not yet clear recorded as held, with the date they clear.
                4. Customers told honestly when an order has to wait.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every harvest has a signed release showing the pre-harvest interval has passed, and no field is picked before its clear date."
                cadence: rolling
              tasks:
                - "Add a harvest release column to the spray book"
                - "Check the coming week's harvests against the board @recurring(weekly:mon)"
                - "Sign off each field before the crew starts picking"
                - "Phone any buyer whose order falls inside a pre-harvest interval"
            - name: Sprayer calibration every quarter
              description: |-
                ## Purpose
                Worn knapsack nozzles and drifting boom pumps apply more or less product than the label rate, wasting money, leaving residues or failing to work. Calibrating with clean water over a measured area tells you the real output. Doing it on a schedule, and after any nozzle change, keeps label rates meaningful.

                ## Milestones
                1. A calibration method written for each sprayer, using clean water and a measured area.
                2. Each sprayer's output per area recorded with the date and nozzle type.
                3. Worn nozzles replaced when output drifts from the new nozzle figure.
                4. Calibration figures copied into the front of the spray book for tank mix calculations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each sprayer has a dated calibration figure no older than three months, recorded in the spray book."
                cadence: cyclic
              tasks:
                - "Mark out a measured test area with pegs and string"
                - "Calibrate every sprayer with clean water over the test area @recurring(quarterly)"
                - "Replace nozzles whose output has drifted"
                - "Write each sprayer's output figure in the spray book"
            - name: Sprayer pre-use check and after-use cleaning
              description: |-
                ## Purpose
                Leaking lances drip concentrate down the sprayer's back, and a tank not rinsed after herbicide can burn the next crop it touches. A two-minute check before each use and a rinse at the mixing area after keep the sprayer and the operator safe. The rinse water goes back onto the treated field, not into a drain.

                ## Milestones
                1. A short pre-use checklist covering straps, seals, hose, lance, nozzle and lid.
                2. A cleaning routine agreed: triple rinse at the mixing area, rinse water sprayed onto the treated area.
                3. A separate sprayer or a thorough cleaning step kept for herbicides.
                4. Faults found tagged and the sprayer kept out of use until fixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every spray day starts with a completed pre-use check and ends with a rinsed sprayer, and faulty sprayers are tagged out of use."
                cadence: rolling
              tasks:
                - "Write a pre-use check for seals, hose, lance and nozzle"
                - "Mark one sprayer as herbicide only with paint or tape"
                - "Rinse each sprayer at the mixing area after use and spray the rinse on the field"
                - "Tag any leaking sprayer out of use until repaired"
                - "Service seals, straps and pressure valves on every sprayer @recurring(monthly:25)"
            - name: Empty container rinsing and return
              description: |-
                ## Purpose
                Empty pesticide bottles end up as water carriers, fuel cans or in the river, and each one still holds residue. Rinsing containers three times at the mixing area, puncturing them so they cannot be reused and taking them to a collection scheme where one exists ends that. Where no scheme exists, the pesticides authority or extension office can say what is allowed.

                ## Milestones
                1. The nearest container collection point or return scheme found, or official guidance obtained where none exists.
                2. Every empty container triple rinsed into the spray tank and punctured.
                3. A covered, locked area in the store for empties awaiting collection.
                4. Containers taken for collection on a fixed day each month, with the number recorded.

                ## Notes
                Never burn plastic chemical containers on the farm, and never give them away for water or food use.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No empty container leaves the farm unrinsed or unpunctured, and monthly returns are recorded with the number of containers."
                cadence: rolling
              tasks:
                - "Ask the extension office where empty containers are collected"
                - "Triple rinse and puncture each container on the day it is emptied"
                - "Take stored empties to the collection point @recurring(monthly:22)"
                - "Record how many containers went for collection"
            - name: Expiry date and stock rotation control
              description: |-
                ## Purpose
                Old products can lose effectiveness, separate in the bottle or have their registration withdrawn, and expired stock is one of the hardest things to dispose of. Writing the purchase date on each container, using the oldest first and buying only what a season needs keeps the store small. A smaller store is cheaper and safer.

                ## Milestones
                1. The purchase date written on every container with a marker.
                2. Stock arranged so the oldest of each product is at the front.
                3. Products near or past their expiry date listed and raised with the supplier or extension office.
                4. A buying rule set: no more than a season's needs of any product.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every container in the store shows a purchase date, and each quarter's check lists anything near expiry with an action."
                cadence: rolling
              tasks:
                - "Write purchase dates on every container in the store"
                - "Move the oldest stock of each product to the front"
                - "Check the store for anything near or past expiry @recurring(quarterly)"
                - "Set a season-sized maximum for each product you buy"
            - name: Weather check before every spray
              description: |-
                ## Purpose
                Spraying in a gusty breeze drifts product onto the house, the neighbour's crop or the pond, and rain soon after can wash it off into drains. A habit of checking wind, rain forecast and temperature before mixing, and recording it in the book, saves product and prevents complaints. Hot middays also make protective kit unbearable, which is when people take it off.

                ## Milestones
                1. Simple limits agreed for wind, rain forecast and heat, taken from the label where it gives them.
                2. A cheap wind indicator, such as a ribbon on a pole, put up near the fields.
                3. The weather recorded in the spray book for each application.
                4. Sprays moved to early morning or late afternoon by default.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every spray record carries a weather note, and sprays are postponed when the agreed wind or rain limits are exceeded."
                cadence: rolling
              tasks:
                - "Copy any weather limits from your labels into the spray book"
                - "Tie a ribbon on a pole by the fields as a wind indicator"
                - "Check the rain forecast before mixing a tank"
                - "Write the wind and weather in the record for every spray"
            - name: Annual pesticide safety review before the wet season
              description: |-
                ## Purpose
                Pest pressure rises with the rains, and that is when spraying peaks and short cuts creep in. A yearly review before the wet season, looking at the records, the store, the kits, any incidents and the registered list, resets the farm's standards. It is also the natural time to retrain and restock protective equipment.

                ## Milestones
                1. The past year's spray records summarised: products used, quantities and any gaps.
                2. The registered product list checked again for changes.
                3. Store, mixing area and kits inspected against the original standards.
                4. Any incidents or near misses reviewed and actions agreed.
                5. A short list of improvements for the coming season written and dated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated annual review note covers records, registered list changes, store and kit condition and incidents, with improvements listed for the season."
                cadence: cyclic
              tasks:
                - "Book a half day for the review before the rains start @recurring(yearly)"
                - "Summarise last year's products and quantities from the book"
                - "Recheck the registered product list for changes"
                - "Write the improvements for the coming season and give each a date"
            - name: Pesticide applicator training and certificate
              description: |-
                ## Purpose
                Several Caribbean countries run applicator training or licensing through the pesticides authority, the Ministry of Agriculture or a college, and some buyers ask for proof of training. A course covers labels, mixing, protective equipment, first aid and disposal properly, with practice. Getting each person who sprays certified, where a scheme exists, is the strongest single safety step.

                ## Milestones
                1. The training or licensing scheme in your country identified, with entry requirements and costs.
                2. Each person who mixes or sprays enrolled on the next available course.
                3. Certificates or licences received and copies kept in the spray book.
                4. Renewal dates written down where the licence expires.

                ## Notes
                Start from the **Training program** template to track who has been trained and when renewals fall. Ask the extension office if there is no formal scheme; they often run short field courses.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every person who mixes or sprays holds a current applicator certificate or completed course record, filed with renewal dates."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the pesticides authority whether an applicator licence scheme exists"
                - "Enrol each person who sprays on the next course"
                - "File copies of certificates in the front of the spray book"
                - "Write each licence renewal date on the training record"
                - "Check licence renewal dates on the training record @recurring(yearly)"
            - name: Understanding toxicity classes and signal words
              description: |-
                ## Purpose
                Labels carry a hazard class, a colour band or signal words such as danger, warning or caution, and these tell you how dangerous the concentrate is to a person. Knowing what each one means on the products you buy helps you choose less hazardous options, set storage rules and decide who should handle what. It takes an evening to learn and changes how you read every shelf.

                ## Milestones
                1. The hazard classification system used on labels in your country understood, including any colour bands.
                2. Each product in the inventory tagged with its hazard class.
                3. The most hazardous products on the farm identified and handling rules tightened for them.
                4. The classes explained to every worker in plain language.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every product in the inventory is tagged with its label hazard class, and the most hazardous ones have written handling rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the label hazard classes and colour bands used in your country"
                - "Tag each inventory line with its hazard class"
                - "Write tighter handling rules for the most hazardous products"
                - "Explain the classes to the crew at the next briefing"
            - name: Recognising pesticide poisoning symptoms
              description: |-
                ## Purpose
                Early signs of poisoning, such as headache, dizziness, sweating, blurred vision or nausea, are easily put down to heat or a long day. Workers who know the signs stop, wash and get help sooner, and supervisors who know them do not send someone back into the field. Learning this from a health professional or the extension service is time well spent.

                ## Milestones
                1. A short session on poisoning signs held with a nurse, doctor or extension officer.
                2. A symptom card in plain language posted beside the poisoning plan.
                3. A rule agreed that anyone with symptoms stops work, washes and is checked.
                4. Every suspected case recorded in an incident log.

                ## Notes
                Symptoms differ between product groups and only a clinician can diagnose poisoning. The aim is to stop work and get help early.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All workers have attended a session on poisoning signs, a symptom card is posted, and an incident log is in use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the local health centre or extension office to run a short session"
                - "Post a plain-language symptom card beside the poisoning plan"
                - "Agree the stop, wash and get checked rule with the crew"
                - "Start an incident log page in the spray book"
            - name: Working out tank mixes from the label rate
              description: |-
                ## Purpose
                Guessing a capful per knapsack is how farms overdose crops, waste money and leave residues. Working from the label rate, your calibrated sprayer output and the area to treat gives the amount of product per tank. Practising the arithmetic with the extension officer, and writing a mix card per product, makes it routine.

                ## Milestones
                1. The method understood: label rate, area to treat, sprayer output and tank size.
                2. A worked mix card written for each product and sprayer, checked by the extension officer.
                3. A dedicated measuring jug and scale kept at the mixing area.
                4. The amount mixed recorded in the spray book each time.

                ## Notes
                The rate comes only from the label for that crop. If the arithmetic gives a strange answer, stop and check before mixing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mix card checked by the extension officer exists for every product and sprayer combination, and measured amounts appear in the records."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write out the mix method using your calibration figure"
                - "Draft a mix card for your most used product and sprayer"
                - "Ask the extension officer to check the cards"
                - "Keep a marked measuring jug and scale at the mixing area"
            - name: Nozzle choice and drift reduction
              description: |-
                ## Purpose
                Fine mist from the wrong nozzle can drift tens of metres onto a neighbour's crop, a school path or a fish pond. Matching the nozzle type and pressure to the job, keeping the lance low and spraying in calm conditions cuts drift and puts more product on the target. Some labels name a nozzle or droplet size; most farmers never check.

                ## Milestones
                1. The nozzles on each sprayer identified by type and size.
                2. Any nozzle or droplet requirement on the labels noted.
                3. Low-drift nozzles fitted where the work allows, and a spare set bought.
                4. The crew shown how lance height and pressure change drift.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each sprayer carries a nozzle that meets the label for its main use, and every applicator has been shown drift reduction practice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Identify the nozzle type and size on every sprayer"
                - "Check your labels for nozzle or droplet requirements"
                - "Buy low-drift nozzles and a spare set from the agro-supply shop"
                - "Show the crew how lance height and pressure change drift"
            - name: Reading residue results and maximum residue limits
              description: |-
                ## Purpose
                Buyers and export markets set maximum residue limits for each product on each crop, and a residue report lists what the lab found against those limits. Understanding the report, and how it relates to your spray records and pre-harvest intervals, lets you trace a problem back to a field and a date. Without that link, a failed test is just bad news.

                ## Milestones
                1. The residue limits that apply to your main crops and markets found, through the buyer, exporter or authority.
                2. A sample residue report read line by line with the extension officer or lab.
                3. A note written on how to trace a result back through the spray book.
                4. A plan agreed for what to do if a result exceeds the limit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain each line of a residue report and trace any result to a field, product and spray date in your records."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your buyer which residue limits they test against"
                - "Get a sample residue report from the lab or extension office"
                - "Practise tracing one result back through the spray book"
                - "Write what you would do if a result came back over the limit"
            - name: Clearing out banned and obsolete chemicals
              description: |-
                ## Purpose
                Old sheds across the region still hold products banned years ago, and they are often the most toxic on the farm. Removing them through the official disposal route, rather than burying, burning or pouring them away, protects the water and removes the temptation to use them. The pesticides authority or ministry usually knows of collection drives or licensed handlers.

                ## Milestones
                1. Every banned, unregistered, expired or unknown product listed with quantity and condition.
                2. The pesticides authority or ministry asked for the approved disposal route.
                3. The products packed safely and handed over, with a receipt or record.
                4. The inventory updated and the space cleaned.

                ## Notes
                Do not mix leftover products together, and do not move leaking containers without protective equipment. Ask for help with anything corroded.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No banned, expired or unknown chemicals remain on the farm, and a disposal receipt or record is filed with the inventory."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every product marked banned, expired or unknown"
                - "Phone the pesticides authority for the approved disposal route"
                - "Pack the products for handover in a lined crate"
                - "File the disposal receipt and update the inventory"
            - name: Choosing a knapsack or motorised sprayer
              description: |-
                ## Purpose
                Cheap knapsacks leak at the seals within a season and soak the operator's back, while a motorised mist blower can drift badly on small plots. Comparing sprayers on leak-free design, spare parts locally, calibration and the area you treat leads to a better buy. Getting it right protects the person carrying it every week.

                ## Milestones
                1. The area, crops and spray volume per week written down.
                2. Three sprayers compared on build, seals, local spares, weight and price.
                3. Users asked to try the shortlisted models for comfort and leaks.
                4. A sprayer chosen and bought, with a spares kit.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sprayer chosen from three compared options, with local spares confirmed and a spares kit bought."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the weekly area and spray volume you need"
                - "Compare three sprayers on seals, spares and weight"
                - "Ask the agro-supply shop which spare parts they keep in stock"
                - "Buy the chosen sprayer with a spares kit"
            - name: Protective clothing that works in tropical heat
              description: |-
                ## Purpose
                Workers take off coveralls and respirators at 33 degrees in the sun, and protection that is not worn protects nobody. Trying lighter chemical-resistant suits, cooling breaks, early spray times and well-fitted respirators finds a set-up people will keep on. The label minimum still applies; comfort is about making it bearable.

                ## Milestones
                1. The crew asked what makes them remove kit and when.
                2. Two or three lighter coverall or apron options tried on a real spray day.
                3. Spray times moved earlier and shade and water breaks scheduled.
                4. A chosen set-up adopted that meets every label requirement.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A protective set-up that meets the labels and that every sprayer agrees they will wear is chosen and bought for the crew."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each sprayer what makes them take kit off"
                - "Trial two lighter coverall options on a spray morning"
                - "Move spraying to the cooler hours of the day"
                - "Schedule shade and water breaks for spray days"
            - name: Replacing highly hazardous products on the shelf
              description: |-
                ## Purpose
                Many farms still rely on one or two very toxic products because they are cheap and familiar. Asking the extension officer which registered alternatives with a lower hazard class do the same job, and trialling them on one field, can remove the worst risk from the store. It is a safety decision first and a pest decision second.

                ## Milestones
                1. The most hazardous products on the farm listed with their uses.
                2. Lower-hazard registered alternatives identified with the extension officer.
                3. One alternative trialled on a single field, with results recorded.
                4. A decision recorded on which hazardous products to phase out.

                ## Notes
                Pest strategy and scouting belong with your integrated pest management plan. This project is about the hazard to people.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on phasing out at least one highly hazardous product, backed by an extension officer's advice and a field trial."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the products in the highest hazard class on your shelf"
                - "Ask the extension officer for lower-hazard registered alternatives"
                - "Trial one alternative on a single field and record results"
                - "Write the phase-out decision in the spray book"
            - name: Digital spray app versus paper record book
              description: |-
                ## Purpose
                Spray apps promise automatic pre-harvest dates and tidy reports for buyers, but they fail when the phone dies in the field or the signal drops. Paper books survive anything except rain and fire. Comparing the two on what your buyers need, who records, and how backups work leads to a choice you will keep.

                ## Milestones
                1. What buyers and auditors require from your records written down.
                2. Two apps or spreadsheet setups tried for two weeks beside the paper book.
                3. Backups, offline use and cost compared.
                4. A decision recorded, with the transfer of past records planned if switching.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on paper or digital spray records, made after a two-week side-by-side trial against buyer requirements."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the record fields your buyers and auditors ask for"
                - "Trial one app or spreadsheet beside the book for two weeks"
                - "Check how each option works offline and backs up"
                - "Record your decision and plan any transfer of old records"
            - name: Hiring a contract spray operator
              description: |-
                ## Purpose
                Larger blocks or tree crops sometimes need a contractor with a mist blower or boom, and the farm remains responsible for what goes on its land. Agreeing in writing what products, labels, protective standards and records the contractor follows, and getting a copy of their spray records, keeps your book complete. It also protects you if drift reaches a neighbour.

                ## Milestones
                1. Two or three spray contractors identified and asked for their training records.
                2. A written agreement covering products, labels, protective equipment, weather limits and record sharing.
                3. Proof of training and any insurance seen and copied.
                4. Contractor applications copied into your spray book on the day.

                ## Notes
                Start from the **Vendor** template to keep contacts, certificates and terms together.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A contractor is engaged under a written agreement, with training proof on file and every contract application copied into the spray book."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask neighbouring farms which spray contractors they trust"
                - "Request training certificates and insurance details from each"
                - "Write an agreement covering labels, PPE, weather limits and records"
                - "Copy each contractor application into your spray book"
            - name: Protecting the well and streams near the mixing site
              description: |-
                ## Purpose
                One spill near a wellhead can contaminate the household's drinking water for a long time. Measuring distances from the store and mixing area to wells, springs and streams, and putting buffers, caps and bunds where they are short, protects the water. Some countries set minimum distances; the extension office or water authority will know.

                ## Milestones
                1. Distances from store, mixing area and sprayer wash point to every water source measured.
                2. Any distance or buffer rule in your country found.
                3. Wellheads capped and sealed, and drains near the mixing area blocked or diverted.
                4. A no-spray buffer strip marked along streams and ponds.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Store, mixing and washing points sit at recorded safe distances from water, wellheads are sealed and stream buffers are marked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure distances from store and mixing point to each water source"
                - "Ask the water authority or extension office about buffer rules"
                - "Seal the wellhead and divert drains away from the mixing area"
                - "Peg a no-spray strip along streams and ponds"
            - name: Preparing spray records for a buyer audit
              description: |-
                ## Purpose
                Supermarkets, hotels and exporters increasingly audit their suppliers' chemical use before signing or renewing. Auditors look for a complete spray book, registered products, a locked store, trained applicators and harvest releases. Preparing the evidence in one folder before the visit turns a stressful day into a short one.

                ## Milestones
                1. The buyer's audit checklist or standard obtained in advance.
                2. Twelve months of spray records checked for gaps and fixed where honestly possible.
                3. Training certificates, inventory, safety data sheets and disposal receipts gathered in one folder.
                4. A walk-through done against the checklist, with weak points fixed before the day.

                ## Notes
                Start from the **Compliance control** template to map each audit point to your evidence.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit is passed or closed with a written action list, with every chemical-related checklist point backed by evidence in one folder."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the buyer for their audit checklist or standard"
                - "Check the last twelve months of spray records for gaps"
                - "Gather certificates, inventory and data sheets in one folder"
                - "Walk the store and mixing area with the checklist a week before"
            - name: Residue test before a new buyer contract
              description: |-
                ## Purpose
                New hotel groups and exporters may want residue results before the first order, and a clean result is a strong selling point. Choosing an accredited lab, sampling the way the lab asks and submitting with your spray records shows you can back up your claims. A poor result found now is far cheaper than one found after shipment.

                ## Milestones
                1. An accredited lab chosen and its sampling instructions, cost and turnaround obtained.
                2. Samples taken from a field that has passed its pre-harvest interval, following the lab's method.
                3. Samples sent with a copy of the field's spray records.
                4. Results received, filed and shared with the buyer.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A residue report from an accredited lab for the contract crop is filed with the matching spray records and sent to the buyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the buyer which lab and test they accept"
                - "Get the lab's sampling instructions, price and turnaround"
                - "Sample a cleared field exactly as the lab instructs"
                - "Send the result and the spray records to the buyer"
            - name: Getting ready for a pesticide inspector visit
              description: |-
                ## Purpose
                Pesticide inspectors may check the products you hold, how they are stored and whether records exist, sometimes with little notice. Knowing what they look for and having the inventory, records and store in order means the visit is routine. Treat it as a free check by someone who sees many farms.

                ## Milestones
                1. The authority asked what an inspection covers.
                2. Inventory, registered list check and spray book up to date.
                3. Store, signage and protective kit checked against the authority's guidance.
                4. Any inspector findings written down with a fix date.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every point the inspector raises is recorded with a fix date and closed within the time the inspector gives."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the pesticides authority what a farm inspection checks"
                - "Bring the inventory and registered list check up to date"
                - "Check signage, locks and kits against their guidance"
                - "Record any findings with a fix date after the visit"
            - name: Securing the chemical store for hurricane season
              description: |-
                ## Purpose
                Storm winds lifting a store roof, or floodwater in a shed, can scatter chemicals over fields and into rivers, and clean-up after the storm is far harder. Raising stock off the floor, sealing containers, cutting stock levels before the season and strapping the structure down limits the damage. It sits alongside the farm's wider storm plan.

                ## Milestones
                1. Stock levels run down before the season, with only what is needed kept.
                2. Containers raised off the floor, lids checked and stood in sealed crates.
                3. The store roof and door strapped or reinforced.
                4. A post-storm check written: inspect for leaks before entering, wear full kit.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the season starts, the store holds minimum stock in sealed raised crates, the roof is secured and a post-storm check is written."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Run store stock down to the minimum before the season starts @recurring(yearly)"
                - "Raise containers onto shelves and seal them in crates"
                - "Strap down the store roof and check the door fastening"
                - "Write a post-storm check for leaks and damaged containers"
            - name: Spill drill with the whole crew
              description: |-
                ## Purpose
                Knowing a spill kit exists is not the same as using it with a split drum in front of you. Running a short drill with water in a container, where the crew goes through stopping the leak, containing it, cleaning up and reporting, shows what is missing. Thirty minutes once a year makes a real spill far less likely to spread.

                ## Milestones
                1. A drill planned with a water-filled container standing in for a product.
                2. The crew practising stop, contain, absorb, bag and report.
                3. Gaps in the kit or the steps noted and fixed.
                4. The drill date and attendees recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A spill drill is held with every worker who handles chemicals, and gaps found are fixed within a month, with attendance recorded."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Pick a date and a water-filled container for the drill"
                - "Walk the crew through stop, contain, absorb, bag and report @recurring(yearly)"
                - "Restock the spill kit with anything that ran short"
                - "Record the drill date and who attended"
            - name: Family farm safety with children and animals
              description: |-
                ## Purpose
                On family farms the store is often beside the house, children help in the fields and dogs drink from puddles. Most child poisonings involve products kept in drink bottles or within reach. Agreeing household rules, moving chemicals out of reach and keeping children away from mixing and treated fields protects the people the farm exists for.

                ## Milestones
                1. Every chemical moved out of the house and away from children's reach.
                2. A household rule that no product is ever kept in a drink or food container.
                3. Children kept away from mixing and out of fields inside their re-entry interval.
                4. Spray clothes kept and washed apart from family clothes.
                5. Animals kept off treated fields and away from rinse water.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "No chemicals are kept in or near the house, children and animals are kept out of mixing areas and treated fields, and the household rules are written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the house, kitchen and yard for any farm chemicals"
                - "Agree the no drink bottles rule with everyone in the household"
                - "Show children which fields are closed and what the signs mean"
                - "Keep animals penned on spray days"
            - name: Starting to sell from a backyard plot
              description: |-
                ## Purpose
                A kitchen garden that starts supplying a neighbour, a market vendor or a restaurant takes on a buyer's expectations, even at small scale. Moving from occasional spraying with whatever was in the shed to registered products, label rates, a small locked box and a simple record is the step up. It is easier to start right than to fix bad habits later.

                ## Milestones
                1. Every product in the backyard store checked against the registered list.
                2. A small lockable cabinet or box in place for chemicals.
                3. A simple notebook recording every spray with product, date and pre-harvest date.
                4. Buyers told how you handle sprays, and pre-harvest intervals kept for every sale.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The backyard grower uses only registered products from a locked box and records every spray with a safe harvest date before selling."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check each backyard product against the registered list"
                - "Buy a small lockable box for chemicals"
                - "Start a notebook for every spray with its safe harvest date"
                - "Tell your first buyers how sprays and harvest dates are handled"
            - name: Taking over a farm with an old chemical shed
              description: |-
                ## Purpose
                Inheriting a family estate or leasing an old farm often comes with a shed full of unlabelled bottles, rusted drums and soil stained beneath them. Treating it as a contaminated site until checked, rather than tidying it by hand, keeps the new owner safe. The authority or extension service can advise on what to do with the shed and the ground.

                ## Milestones
                1. The shed closed off and marked until assessed.
                2. The pesticides authority or extension service asked to advise on the contents.
                3. Contents listed with protective equipment worn, without opening unknowns.
                4. Disposal arranged through the approved route and the ground assessed.
                5. A decision made on reusing, cleaning or demolishing the shed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The inherited shed is assessed with official advice, its contents disposed of through the approved route, and a recorded decision taken on the building."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Padlock and sign the old shed until it is assessed"
                - "Ask the extension service to advise on the contents"
                - "List the contents in full protective equipment without opening unknowns"
                - "Decide whether to clean, reuse or demolish the shed"
            - name: Inducting seasonal workers before spraying or harvest
              description: |-
                ## Purpose
                Harvest crews and seasonal hands arrive in a rush and are sent straight to the fields, often without knowing which fields were sprayed or what the signs mean. A short induction on re-entry signs, washing before eating, symptoms and the emergency plan protects people who may never have worked with chemicals. Only trained staff should mix or spray.

                ## Milestones
                1. A fifteen-minute induction script covering signs, washing, symptoms and emergency contacts.
                2. Every seasonal worker inducted on their first day and signing the attendance sheet.
                3. Hand-washing points with soap at the field edge and packing area.
                4. A rule that seasonal workers do not mix or spray unless trained.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every seasonal worker signs an induction record on their first day, and only trained staff mix or apply chemicals."
                cadence: rolling
              tasks:
                - "Write a fifteen-minute induction on signs, washing and emergencies"
                - "Set up soap and water at the field edge and packing area"
                - "Induct each new worker on day one and keep the signed sheet"
                - "Brief new crews on closed fields at each harvest start @recurring(monthly:3)"
            - name: Pregnant and young workers and chemical exposure
              description: |-
                ## Purpose
                Some products carry label warnings or local rules for pregnant or breastfeeding workers and for young people, and labour law in many countries restricts under-18s from handling hazardous chemicals. A farm policy, agreed with an occupational health adviser or doctor and the labour department guidance, sets who may mix, spray or enter treated fields. It protects workers and the farm.

                ## Milestones
                1. Labour department guidance on young workers and hazardous work found.
                2. Label warnings for pregnancy and breastfeeding noted for each product.
                3. A written policy on who may mix, spray or re-enter, reviewed by a doctor or occupational health adviser.
                4. Alternative tasks listed for workers who should not handle chemicals.

                ## Notes
                This is a work allocation policy, not medical advice. Any worker with health concerns should speak to their own doctor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written policy covering pregnant, breastfeeding and under-18 workers is in place, reviewed by a health adviser, with alternative tasks listed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up labour guidance on young workers and hazardous chemicals"
                - "Note any pregnancy or breastfeeding warnings on your labels"
                - "Draft a policy on who may mix, spray or re-enter fields"
                - "Ask a doctor or occupational health adviser to review it"
            - name: Spraying beside rivers, schools and beehives
              description: |-
                ## Purpose
                Farms that border a river, a school, a road with houses or a beekeeper's hives carry extra risk and attract complaints quickly. Mapping sensitive neighbours, agreeing notice before spraying and keeping wider buffers and calmer conditions near them prevents harm and disputes. Many labels carry specific warnings for bees and fish.

                ## Milestones
                1. Sensitive neighbours and water bodies marked on the farm sketch.
                2. Bee and aquatic warnings on each label noted.
                3. A notice arrangement agreed with neighbours and beekeepers, such as a message the evening before.
                4. Wider buffers and timing rules for sprays near sensitive points written into the spray book.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Sensitive sites are mapped, neighbours and beekeepers get notice before every nearby spray, and buffers are recorded in the spray book."
                cadence: rolling
              tasks:
                - "Mark schools, houses, rivers and hives on your farm sketch"
                - "Note the bee and aquatic warnings on each label"
                - "Agree a message the evening before spraying with nearby beekeepers"
                - "Write buffer distances and timing rules into the spray book"
                - "Confirm neighbour and beekeeper contacts are still current @recurring(quarterly)"
            - name: Health monitoring for regular applicators
              description: |-
                ## Purpose
                People who spray certain product groups every week can build up exposure that only shows in a blood test, and some buyers and standards ask for health checks for regular applicators. Arranging monitoring with an occupational health service or doctor, on the schedule they set, catches problems early. It also shows whether protective measures are working.

                ## Milestones
                1. A doctor or occupational health service asked whether monitoring is advised for the products you use.
                2. Baseline checks arranged for regular applicators before the main spray season, if advised.
                3. Follow-up checks scheduled at the interval the clinician sets.
                4. Results kept confidential, with any advice to move a worker off spraying acted on.

                ## Notes
                Only a clinician decides whether testing is needed and what results mean. Keep health records private and separate from the spray book.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Regular applicators have monitoring arranged as advised by a clinician, results are kept confidential, and any clinical advice is acted on."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask an occupational health service whether monitoring suits your products"
                - "Book baseline checks for regular applicators if advised"
                - "Review the monitoring schedule with the clinician @recurring(yearly)"
                - "Keep results in a private file separate from the spray book"
            - name: Permits for restricted-use products and fumigants
              description: |-
                ## Purpose
                Some products, including many fumigants and the most toxic restricted-use pesticides, may only be bought or applied by licensed people under extra conditions. Running a packhouse, grain store or larger operation may bring these into reach. Knowing the permit rules before buying, and using licensed operators where required, avoids serious harm and legal trouble.

                ## Milestones
                1. The restricted-use and fumigant rules in your country found from the pesticides authority.
                2. A decision made whether the farm needs any such products at all.
                3. Where needed, the permit or licensed operator arranged before purchase.
                4. Extra storage, signage and record rules written for these products.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The farm's position on restricted-use products is written down, and any such product is held and applied only under the required permit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the pesticides authority which products are restricted use"
                - "Decide whether the farm needs any restricted products"
                - "Arrange a licensed operator for any fumigation work"
                - "Write the extra storage and record rules for these products"
            - name: Pesticide use per hectare trend
              description: |-
                ## Purpose
                Totals of active ingredient per hectare per crop, year on year, show whether the farm is using more chemicals, which fields need the most, and whether changes are working. Buyers with sustainability goals increasingly ask for these figures. The spray book already holds the data; the work is adding it up.

                ## Milestones
                1. Each crop and field's area recorded accurately.
                2. Quantity of each active ingredient used per field totalled from the spray book.
                3. Use per hectare calculated per crop for the past season.
                4. The figures compared with the year before and a short note written on the trend.

                ## Notes
                Start from the **Metrics log** template so each season's figures sit in the same table.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of active ingredient used per hectare per crop for at least two seasons, with a written note on the trend."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the area of each field from the farm sketch"
                - "Total each active ingredient used per field from the spray book"
                - "Calculate use per hectare for each crop @recurring(quarterly)"
                - "Compare with last year and write a short trend note"
            - name: Offering a spraying service to neighbouring farms
              description: |-
                ## Purpose
                A trained applicator with good kit can earn extra by spraying for smallholders who lack one, and doing it properly raises standards around you. Running it as a service means using only the client's registered products for that crop, following the label, keeping records and giving the client a copy. Liability and licensing need checking first.

                ## Milestones
                1. Licensing and insurance requirements for contract spraying checked.
                2. A simple service agreement covering products, labels, weather and records.
                3. A client record sheet that copies into the client's spray book.
                4. Prices set to cover kit, time, calibration and travel.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Licensing and insurance are confirmed, a service agreement is in use, and every client receives a signed copy of each application record."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check licensing and insurance rules for contract spraying"
                - "Draft a service agreement covering labels, weather and records"
                - "Design a client application record with a copy for the client"
                - "Work out a price that covers kit, time and travel"
            - name: Written chemical safety plan for a growing farm
              description: |-
                ## Purpose
                Once a farm has a manager, several sprayers and more than one site, safety cannot live in the owner's head. A short written plan pulling together the store rules, kits, training, records, emergency steps and responsibilities lets a supervisor run it and gives buyers and insurers confidence. It also makes handing over the farm far easier.

                ## Milestones
                1. Each existing rule, checklist and plan gathered in one place.
                2. Named responsibilities set for store keys, records, training and inspections.
                3. A plan of no more than ten pages written and dated.
                4. The plan walked through with the farm manager and supervisors.
                5. A review date set each year.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dated written chemical safety plan with named responsibilities is in the farm office and has been walked through with supervisors."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Gather every existing checklist and rule into one folder"
                - "Name who holds store keys, records, training and inspections"
                - "Ask the agent to draft a ten-page plan from the folder"
                - "Walk the plan through with the farm manager and supervisors"
---

# Pesticide Safety and Records

Pesticide Safety and Records is for any farm that keeps herbicides, insecticides or fungicides on the property, from a family plot with a knapsack sprayer to a vegetable operation with a crew and a tractor-mounted boom. The projects begin with the foundations: an honest inventory, a check against the registered product list, label reading, safety data sheets, a locked store, protective kit, a spray record book, pre-harvest interval boards and a poisoning plan. Then come the weekly and monthly routines, the applicator skills, decisions about sprayers, old stock and contractors, dated events such as audits and residue tests, situations from inherited sheds to farms beside rivers, and specialist work such as health monitoring and spraying for neighbours.

What repeats is the weekly spray record check and harvest release, monthly store inspections and container returns, quarterly calibration and expiry checks, PPE inspections, and a yearly safety review before the wet season. The Operational checklist, Purchase decision, Vendor, Training program, Compliance control and Metrics log templates pair with the projects that name them. Every product choice, rate, interval and protective requirement comes from the product label, the pesticides authority and your extension officer, never from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
