---
id: agriculture.livestock-health-and-vet-care
name: Livestock Health and Vet Care
description: "A working vet relationship, a written health plan, treatment and withdrawal records, biosecurity and isolation pens, and the daily checks that keep a commercial herd or flock healthy and saleable."
category: business
version: 1.0.0
tags: [agriculture, livestock-health-and-vet-care, small-business, animal-health, veterinary, biosecurity, withdrawal-periods, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - operational-checklist
    - metrics-log
    - purchase-decision
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Livestock Health and Vet Care
          description: "Keeping animals healthy on a commercial farm: a vet relationship, vaccination and treatment records, biosecurity, isolation pens and withdrawal periods before sale."
          projects:
            - name: Registering with a farm animal vet practice
              description: |-
                ## Purpose
                Most farm emergencies happen at night or on a public holiday, and that is the worst time to discover no vet knows your animals or will drive out to you. Registering with a practice that treats farm species, private or government, means someone already has your farm on file, has seen your stock and will answer the phone. A vet who knows the herd is also the person who can legally prescribe many of the medicines you will need.

                ## Milestones
                1. Two or three vets who treat farm species in your district identified, including the government veterinary office.
                2. One practice chosen, with call-out fees, working hours and emergency arrangements written down.
                3. The farm registered with that practice, with species and approximate numbers on their file.
                4. The vet's day and emergency numbers saved in every phone on the farm and posted in the feed room.

                ## Notes
                Start from the **Vendor** template to keep the practice's contacts, fees and terms in one place. In many Caribbean islands the Ministry of Agriculture's veterinary division is the main farm vet service, so ask them first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named vet practice has the farm on its books and its day and emergency numbers are posted in the feed room and saved in every worker's phone."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two neighbouring livestock farmers which vet they call out"
                - "Phone the government veterinary office and ask what farm services they offer"
                - "Compare call-out fees, emergency cover and distance for two practices"
                - "Register the farm with your chosen practice and give them your stock numbers"
            - name: Animal identification and individual health cards
              description: |-
                ## Purpose
                A treatment record that says "the brown goat" is useless when you have twelve brown goats and a buyer asks which one was injected last week. Giving every breeding animal and every animal under treatment a permanent number, with a health card or digital record behind it, makes withdrawal checks, vet histories and culling decisions possible. Batch animals such as broilers or weaner pigs can be identified by pen and batch instead.

                ## Milestones
                1. An identification method chosen for each species, such as ear tags, tattoos or pen and batch numbers.
                2. Every breeding animal tagged or marked with a unique number.
                3. A health card or spreadsheet row opened for each numbered animal, with date of birth or arrival and source.
                4. A rule written down that no animal is treated without its number being recorded.

                ## Notes
                Ask the veterinary office whether your country has an official livestock identification or registration scheme before buying tags, so you do not tag twice.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every breeding animal carries a unique number that matches an individual health record, and batch stock are recorded by pen and batch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count the animals on the farm by species, sex and age group"
                - "Ask the veterinary office whether an official tagging scheme applies"
                - "Buy tags or marking equipment and tag every breeding animal"
                - "Open a health card or spreadsheet row for each numbered animal"
            - name: First whole-farm health visit with the vet
              description: |-
                ## Purpose
                Walking the whole farm once with a vet, when nothing is wrong, shows up problems you have stopped noticing: a muddy corner where foot rot starts, thin animals in one pen, a water trough nobody cleans. Booking that visit early gives you a baseline of what normal looks like on your farm and a short list of the risks worth fixing first. It is also the visit that turns a stranger on the phone into your farm vet.

                ## Milestones
                1. A visit booked with a clear request: a walk round the whole farm and every group of animals.
                2. A list of current problems, recent deaths and treatments given to the vet before the visit.
                3. The vet's observations and top three health risks written down on the day.
                4. Agreed next steps, such as tests, vaccinations or changes to housing, recorded with target dates.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written record of the vet's whole-farm visit lists the top three health risks and the agreed next steps with dates."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-page list of recent deaths, sickness and treatments"
                - "Book a whole-farm walk round with your vet on a quiet weekday"
                - "Walk every pen and paddock with the vet and note what they point out"
                - "Write up the top three risks and the next steps agreed"
            - name: Written herd and flock health plan
              description: |-
                ## Purpose
                For each species on the farm, a health plan is the one document that says which diseases matter here, what is vaccinated and when, how parasites are monitored, what biosecurity applies and when the vet is called. Buyers, certification schemes, lenders and insurers increasingly ask to see one. Writing it with your vet turns a set of habits in your head into something a worker can follow when you are away.

                ## Milestones
                1. The main disease risks for each species on the farm listed with the vet.
                2. Vaccination, parasite monitoring and routine procedures set out by species and age group.
                3. Biosecurity rules, isolation arrangements and the point at which the vet must be called written in.
                4. The plan signed or initialled by the vet, dated, and filed with a copy in the feed room.

                ## Notes
                Keep it short: two or three pages per species that workers will actually read beats a binder nobody opens.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated health plan covering every species on the farm, agreed with the vet, is filed in the office with a copy where workers can read it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the vet whether they use a standard health plan format"
                - "Ask the agent to draft headings for the plan from your species and stock numbers"
                - "Fill in the plan with the vet at a planned visit"
                - "Review and re-sign the health plan with the vet @recurring(yearly)"
            - name: Medicine and treatment register
              description: |-
                ## Purpose
                Every vaccine, wormer, antibiotic and injection given on the farm should be written down: date, animal or batch, product, batch number, amount as directed, who gave it, and the date the withdrawal period ends. The register protects consumers and protects you, since abattoirs, processors and veterinary inspectors can ask to see it and a missing entry can stop a sale. Kept properly, it also shows which problems keep coming back.

                ## Milestones
                1. A register format chosen, paper book or spreadsheet, with all the columns inspectors expect.
                2. Every treatment from the past three months entered as far as records allow.
                3. The register kept beside the medicine store so entries are made at the time of treatment.
                4. A monthly check that the register matches what has gone from the medicine store.

                ## Notes
                Ask your vet or the veterinary office which columns your country's rules require. The withdrawal end date column is the one most farmers forget and the one buyers care about most.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A treatment register with date, animal, product, batch number, person and withdrawal end date is in use and has a monthly reconciliation entry."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the vet which columns the treatment register must have"
                - "Set up the register as a bound book or a shared spreadsheet"
                - "Enter every treatment from the last three months you can trace"
                - "Reconcile the register against the medicine store stock @recurring(monthly:14)"
            - name: Locked medicine store and vaccine fridge
              description: |-
                ## Purpose
                Vaccines left in a hot shed lose their effect long before the expiry date, and medicines left on a windowsill can be taken by children or workers who have not been trained. A locked cabinet out of the sun, and a fridge used only for veterinary products with a thermometer inside, keeps products working and out of the wrong hands. In islands where the power fails, the fridge plan also needs a backup.

                ## Milestones
                1. A lockable cabinet fitted in a cool, dry place away from feed and food.
                2. A fridge used only for vaccines and medicines, with a minimum and maximum thermometer.
                3. Keys held by named people only, with the list written down.
                4. A plan for keeping vaccines cool in a power cut, such as a cool box and ice packs on standby.

                ## Notes
                Never store veterinary products in the household food fridge. The label and the data sheet give the storage temperature; follow those, not habit.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All veterinary products sit in a locked cabinet or a dedicated fridge with a thermometer, and the weekly temperature check is logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather every veterinary product on the farm into one place and list it"
                - "Fit a lockable cabinet in a cool spot away from feed and food"
                - "Put a minimum and maximum thermometer in a fridge kept only for medicines"
                - "Read and log the medicine fridge temperature @recurring(weekly:mon)"
            - name: Withdrawal period system before any sale
              description: |-
                ## Purpose
                Milk, eggs or meat from an animal still inside its withdrawal period can carry drug residues, and a positive residue test can cost you a buyer, a contract or a fine. A simple system that flags every treated animal until its withdrawal end date, and a habit of checking it before anything leaves the farm, removes the risk of selling by mistake. It matters most on farms where several people treat and several people sell.

                ## Milestones
                1. Every treated animal marked visibly, such as a coloured spray mark, leg band or pen card, until withdrawal ends.
                2. A whiteboard or list showing each animal under withdrawal and its release date.
                3. A rule that nobody loads animals or sells milk or eggs without checking the list.
                4. The check written into the sale or collection routine for every buyer.

                ## Notes
                Withdrawal periods come from the product label or the vet's prescription and can be longer when a product is used off label. Ask the vet, never guess.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No animal, milk or egg leaves the farm without a recorded check against the withdrawal board, for three straight months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a marking method for treated animals and buy the supplies"
                - "Put up a withdrawal board in the shed where sales are loaded"
                - "Show every worker how to check the board before loading or selling"
                - "Clear expired entries and confirm withdrawal dates on the board @recurring(weekly:fri)"
            - name: Farm biosecurity plan and entry rules
              description: |-
                ## Purpose
                Most new disease arrives on a farm in a bought animal, on a visitor's boots or on a vehicle that has been to another farm. A short biosecurity plan sets one entry point, a footbath or boot change, a parking spot away from the animals and a visitor log, and it costs far less than one outbreak. Feed trucks, buyers, vets and neighbours all follow the same rules.

                ## Milestones
                1. A farm map with one marked entry point, a clean and dirty line and a visitor parking area.
                2. A footbath or boot wash at the entry, with the disinfectant chosen with the vet.
                3. A sign at the gate and a visitor log in use.
                4. Rules written for vehicles, deliveries and workers who keep animals at home.

                ## Notes
                Workers who keep their own pigs or poultry at home are a common route for disease; agree a change of clothes and boots for them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written biosecurity plan is in place with one entry point, a working footbath, a gate sign and a visitor log with at least one month of entries."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch a farm map marking the entry, animal areas and a parking spot"
                - "Ask the vet which disinfectant suits your footbath and diseases"
                - "Put up a gate sign and start a visitor log at the entrance"
                - "Refresh the footbath disinfectant at the farm entrance @recurring(weekly:mon,thu)"
            - name: Isolation pen for sick and new animals
              description: |-
                ## Purpose
                Sick animals left in the main pen infect their neighbours, and a newly bought animal that looks healthy can bring in parasites or disease that take weeks to show. A separate pen, downwind and with its own water, feed scoop and boots, gives you somewhere to put both. Building it before you need it means it is ready at two in the morning.

                ## Milestones
                1. A site chosen away from the main animals, with drainage away from other pens.
                2. An isolation pen built or adapted with shade, water and its own feeding equipment.
                3. Separate boots or overboots and a hand wash kept at the pen.
                4. A written routine: who enters, in what order, and how the pen is cleaned after each use.

                ## Notes
                Start from the **Operational checklist** template for the cleaning and entry routine. Visit the isolation pen last on every round, never first.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An isolation pen with its own water, equipment and boots exists away from the main stock, with a written entry and cleaning checklist."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick a spot downwind of the main pens with good drainage"
                - "Build or adapt the pen with shade, water and a separate feed scoop"
                - "Hang a pair of boots and a hand wash at the isolation pen"
                - "Write the entry and cleaning checklist and post it on the pen gate"
            - name: Farm animal first aid and treatment kit
              description: |-
                ## Purpose
                When a goat gets caught in wire or a cow is bloated, the minutes spent looking for a thermometer or clean gloves matter. A kit with the basics, agreed with the vet and kept in one place, lets you act quickly and safely while the vet is on the way. Checking it each month stops the empty spray can and the dead torch battery.

                ## Milestones
                1. A kit list agreed with the vet: thermometer, gloves, wound spray, bandages, scissors, torch, halter and so on.
                2. Everything on the list bought and kept in one labelled box.
                3. The kit's location known by every worker.
                4. A monthly restock of anything used or out of date.

                ## Notes
                Keep prescription medicines in the locked store, not the kit, unless the vet has agreed otherwise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A labelled first aid kit matching the vet's list is in a known place, with a restock check logged each month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the vet what a farm first aid kit for your species should hold"
                - "Buy the items and pack them in one labelled waterproof box"
                - "Show every worker where the kit lives"
                - "Restock the first aid kit and replace anything out of date @recurring(monthly:3)"
            - name: Daily stock health walk
              description: |-
                ## Purpose
                An animal that is off its feed, standing apart or breathing hard is often treatable on the first morning and dead by the third. A daily walk past every pen and paddock at the same time, looking for the same signs, catches problems early and is the single most valuable health habit on any livestock farm. Writing down what you see turns hunches into records the vet can use.

                ## Milestones
                1. A fixed time and route for the daily walk, covering every group of animals.
                2. A short list of signs to check: appetite, droppings, breathing, lameness, isolation, injuries.
                3. A notebook or phone note where anything unusual is recorded with the animal's number.
                4. A clear rule for when a finding becomes a call to the vet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily walk is recorded on at least 25 days of every month, with any unusual finding linked to an animal number."
                cadence: rolling
              tasks:
                - "Write the six signs you will check on every walk"
                - "Walk every pen and paddock and note any animal that looks off @recurring(daily)"
                - "Agree with the vet which signs mean call immediately"
            - name: Vaccination calendar for every species
              description: |-
                ## Purpose
                Vaccines only work when given at the right age and repeated on time, and on a mixed farm it is easy to lose track of which goats, piglets or calves are due. A single calendar, built from the health plan and the vet's advice, shows what is due each month for every group. It also makes ordering easier, because you know weeks ahead which vaccines to have in the fridge.

                ## Milestones
                1. Every vaccine the vet recommends for each species and age group listed.
                2. A calendar showing due dates by animal or batch for the next twelve months.
                3. Each vaccination entered in the treatment register when given.
                4. A monthly look ahead so vaccines are ordered before they are due.

                ## Notes
                Which vaccines are used, and when, is the vet's decision based on local disease. Some diseases common elsewhere are absent from certain islands, and vaccines for them may be restricted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month vaccination calendar covers every species, and every vaccination given in the last quarter appears in the treatment register."
                cadence: rolling
              tasks:
                - "List the vaccines your vet recommends for each species and age"
                - "Build a twelve-month calendar from birth dates and arrival dates"
                - "Check the calendar for vaccinations due next month and order stock @recurring(monthly:25)"
            - name: Parasite monitoring with faecal egg counts
              description: |-
                ## Purpose
                Worms are the biggest killer of goats and sheep in the Caribbean, and routine worming of every animal on a fixed date is what made so many wormers stop working. Testing dung samples tells you and the vet whether worm burdens are rising and which animals need treatment, so you treat less and the wormers that still work keep working. The test is cheap compared with the products it saves.

                ## Milestones
                1. A lab, vet or trained person found who can run faecal egg counts.
                2. Sampling method agreed with the vet: which animals, how many, and how to store samples.
                3. Monthly results recorded by group, with any treatments decided by the vet.
                4. A check after treatment, if the vet advises, to see whether the wormer worked.

                ## Notes
                Start from the **Metrics log** template to plot egg counts month by month. Some farmers learn to run counts themselves with a microscope after training from the vet or extension service.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Faecal egg counts are recorded for each group at least ten months a year, and every wormer given is backed by a count or a vet instruction."
                cadence: rolling
              tasks:
                - "Ask the vet or extension office where egg counts can be done"
                - "Learn how to collect and store dung samples correctly"
                - "Collect dung samples from each group for a faecal egg count @recurring(monthly:8)"
                - "Record the results and the vet's treatment decision in the metrics log"
            - name: Monthly body condition scoring of breeding stock
              description: |-
                ## Purpose
                Body condition, how much flesh and fat an animal carries over its back and ribs, changes before weight, sickness or poor fertility become obvious. Scoring breeding animals on the same scale each month shows who is slipping, often from worms, bad teeth or chronic disease, while there is still time to act. The score also gives the vet a number instead of "she looks a bit thin".

                ## Milestones
                1. A scoring scale for each species learned from the vet or an extension leaflet.
                2. Every breeding animal scored once and the result recorded on its health card.
                3. A monthly score taken for each breeding animal.
                4. Any animal dropping a full point flagged for a vet check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every breeding animal has a body condition score on its health card for at least ten of the last twelve months."
                cadence: rolling
              tasks:
                - "Get a body condition scoring chart for each species you keep"
                - "Score every breeding animal and write the score on its card"
                - "Score body condition of breeding stock and flag any drop @recurring(monthly:20)"
            - name: Routine quarterly vet visits
              description: |-
                ## Purpose
                A vet who only comes for emergencies sees your farm at its worst and cannot spot slow problems. A planned visit every quarter, with a list of animals to look at and questions ready, catches lameness, poor fertility or rising worm burdens early and usually costs less than the emergencies it prevents. Batching routine jobs such as castration, testing or pregnancy checks into the visit saves call-out fees.

                ## Milestones
                1. A quarterly visit agreed with the vet, with a rough month for each.
                2. A visit list prepared a week before: animals to see, jobs to do, questions to ask.
                3. Notes from each visit filed with the health plan.
                4. Actions from the last visit checked off before the next one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four planned vet visits are held in a year, each with a prepared list beforehand and written notes afterwards."
                cadence: rolling
              tasks:
                - "Agree a quarterly visit pattern and fee with the vet"
                - "Prepare the visit list of animals, jobs and questions a week ahead"
                - "Hold the planned vet visit and file the notes @recurring(quarterly)"
            - name: Tick, fly and vector control rounds
              description: |-
                ## Purpose
                Ticks in the tropics carry heartwater, babesiosis and anaplasmosis, and flies spread pink eye and mastitis and lay eggs in wounds. Checking animals and their surroundings each week, and controlling vectors with methods agreed with the vet, prevents disease that is expensive or impossible to treat. Rotating pasture, clearing bush and managing manure do as much as any product.

                ## Milestones
                1. The tick and fly species and diseases that matter on your farm listed with the vet.
                2. A weekly check of animals' ears, udders, tails and wounds for ticks, flies and larvae.
                3. A control plan agreed with the vet, mixing pasture management with approved products.
                4. Every product used entered in the treatment register with its withdrawal date.

                ## Notes
                Ticks becoming resistant to acaricides is a real problem in the region. Let the vet choose and rotate products, and follow the label exactly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly tick and fly check is logged for at least 40 weeks a year, and every control product used appears in the treatment register."
                cadence: rolling
              tasks:
                - "Ask the vet which tick-borne diseases occur in your district"
                - "Check ears, udders, tails and wounds for ticks and fly strike @recurring(weekly:wed)"
                - "Clear bush and long grass along fences where ticks gather"
                - "Record each control product and its withdrawal date in the register"
            - name: Mortality and cull log with monthly review
              description: |-
                ## Purpose
                Deaths spread across a year are easy to shrug off one at a time, but five deaths in one pen in the same month is a pattern the vet needs to hear about. Logging every death and every animal culled for health reasons, with the likely cause, and reviewing the log monthly turns bad luck into information. It is also the record insurers and lenders ask for.

                ## Milestones
                1. A log with date, animal or batch, age, signs before death and likely cause.
                2. Every death and health cull entered within a day.
                3. A monthly review that looks for clusters by pen, age, season or cause.
                4. Any cluster or rising trend reported to the vet.

                ## Notes
                Start from the **Metrics log** template and plot monthly deaths per hundred animals so changes stand out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every death and health cull is logged with a likely cause, and a monthly review note exists for each of the last six months."
                cadence: rolling
              tasks:
                - "Set up the mortality and cull log with the six columns needed"
                - "Enter every death you can remember from the last three months"
                - "Review mortality and cull records for clusters and trends @recurring(monthly:28)"
            - name: Quarterly biosecurity walk-round audit
              description: |-
                ## Purpose
                Biosecurity slips quietly: the footbath dries out, a fence gap appears, a neighbour's dog starts wandering through, the visitor log stops being filled in. Walking the plan every quarter with a checklist, ideally with a fresh pair of eyes, puts the rules back in place before disease finds the gap. Each audit leaves a short list of fixes with names and dates.

                ## Milestones
                1. An audit checklist made from the biosecurity plan.
                2. A walk round the whole farm each quarter, scoring each item.
                3. Fixes listed with an owner and a date.
                4. The previous quarter's fixes checked as done at the start of each audit.

                ## Notes
                Start from the **Operational checklist** template. Ask a neighbour, extension officer or the vet to walk it with you once a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four dated biosecurity audits exist for the year, each with a fix list and evidence the previous fixes were completed."
                cadence: cyclic
              tasks:
                - "Turn the biosecurity plan into a one-page audit checklist"
                - "Walk the biosecurity checklist around the farm and score each item @recurring(quarterly)"
                - "Give each fix an owner and a date and pin the list in the office"
            - name: Medicine ordering and expiry rotation
              description: |-
                ## Purpose
                Running out of a vaccine on the day a batch is due, or finding a cupboard of expired antibiotics, both cost money and put animals at risk. A short stock list with minimum levels, a monthly order and first-in first-out rotation keeps the right products in date and on hand. It also stops the habit of buying a big bottle that expires half used.

                ## Milestones
                1. A stock list of every product kept, with minimum levels agreed with the vet.
                2. One supplier or the vet named for each product, with lead times.
                3. Stock arranged so the oldest is used first.
                4. Expired or part-used products returned or disposed of as the vet or supplier directs.

                ## Notes
                Ask the vet or the pharmacy how to dispose of expired medicines and used needles safely. Never pour them down the drain or put sharps in household rubbish.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The medicine store holds no expired products and a monthly order record exists for at least six of the last twelve months."
                cadence: rolling
              tasks:
                - "List every product in the store with its expiry date and quantity"
                - "Agree minimum stock levels for each product with the vet"
                - "Set up a sharps container and ask how full ones are collected"
                - "Check stock against minimum levels and place the monthly order @recurring(monthly:16)"
            - name: Foot and hoof care schedule
              description: |-
                ## Purpose
                Lameness cuts weight gain, milk and fertility, and wet season mud in the tropics makes foot rot and overgrown hooves common in goats, sheep and cattle. Checking and trimming feet on a schedule, and fixing the wet spots that cause problems, keeps animals walking to feed and water. Pigs on concrete need their feet checked too.

                ## Milestones
                1. Hoof trimming taught by the vet or an experienced keeper.
                2. Shears, knife and a safe place to restrain animals ready.
                3. Every animal's feet checked each quarter, with problems recorded.
                4. Wet areas around troughs and gateways drained or gravelled.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every adult animal's feet are checked at least four times a year, and lameness cases are recorded on their health cards."
                cadence: cyclic
              tasks:
                - "Ask the vet to show you how to trim a hoof safely"
                - "Buy hoof shears and a hoof knife suited to your species"
                - "Inspect and trim feet in the handling area @recurring(quarterly)"
                - "Gravel or drain the muddiest gateway on the farm"
            - name: Taking temperature, pulse and breathing rate
              description: |-
                ## Purpose
                The first question a vet asks on the phone is usually "what is her temperature?" Knowing how to take a rectal temperature, count breaths and feel a pulse, and knowing the normal range for each species, lets you give the vet facts instead of impressions. It also tells you when an animal that looks off is really ill.

                ## Milestones
                1. Normal temperature, pulse and breathing ranges for each species written on a card in the kit.
                2. Each measurement practised on healthy animals under the vet's guidance.
                3. Readings for at least five healthy animals of each species recorded as your own baseline.
                4. The habit of taking all three readings before phoning the vet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference card of normal ranges sits in the first aid kit, and you have recorded readings on at least five healthy animals of each species."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the vet for normal ranges for each species you keep"
                - "Practise taking a rectal temperature on a calm healthy animal"
                - "Count breaths and pulse on five healthy animals of each species"
                - "Write the ranges on a card and keep it with the thermometer"
            - name: Recognising early signs of sickness by species
              description: |-
                ## Purpose
                Goats hide illness until they are very sick, pigs show it in their droppings and breathing, cattle in their cud chewing and ears. Learning the early signs for each species you keep, and what they might point to, means you call the vet sooner and describe the problem better. This is knowledge for spotting and reporting, not for diagnosing.

                ## Milestones
                1. A list of early warning signs for each species from the vet or extension service.
                2. Pale eyelids, scouring, coughing, lameness and swellings described in your own words.
                3. Two or three past cases on your farm reviewed with the vet against those signs.
                4. Workers walked through the signs during a daily round.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of early sickness signs for every species on the farm has been reviewed with the vet and shown to every worker."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the extension office for animal health leaflets on your species"
                - "Write a one-page list of early warning signs for each species"
                - "Go through two recent cases with the vet against the list"
                - "Walk a worker through the signs on the morning round"
            - name: Safe restraint and low-stress handling
              description: |-
                ## Purpose
                Most injuries to farmers and animals during treatment come from poor restraint: a goat that breaks loose, a cow that kicks, a boar that turns. Learning how to move and hold each species calmly, using pens, hurdles, halters and boards, makes treatments quicker and safer and keeps animals from learning to fear people. The vet can work faster too, which shortens their bill.

                ## Milestones
                1. Basic restraint methods for each species shown by the vet or an experienced handler.
                2. Halters, hurdles and pig boards in place and in good repair.
                3. Animals moved through the handling area at least once a month without treatment, so they learn it.
                4. A rule that nobody handles large animals alone.

                ## Notes
                Never stand directly behind a cow or horse, and never get between a sow and her piglets. Boars and bulls need a written handling rule of their own.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every person who treats animals has been shown restraint for each species, and a written two-person rule for large animals is posted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the vet to show restraint for each species at the next visit"
                - "Check halters, hurdles and boards and replace broken ones"
                - "Run a calm practice move through the handling area"
                - "Post the two-person rule for bulls, boars and large cattle"
            - name: Giving injections and oral treatments correctly
              description: |-
                ## Purpose
                Vets often leave a farmer to finish a course of treatment, and a wrong injection site, a dirty needle or a drench given too fast can cause abscesses, carcass damage or a dead animal. Learning the correct technique for each route, under the vet's supervision and by following the label, makes follow-up treatments safe. Injection site matters for buyers too, since abscesses in prime cuts are cut out and docked.

                ## Milestones
                1. Injection under the skin, into the muscle and oral drenching shown by the vet on your own animals.
                2. Clean needles, syringes and a drench gun kept for each purpose.
                3. Preferred injection sites for each species noted, using the neck rather than the rump where the label allows.
                4. Every treatment you give recorded in the register on the same day.

                ## Notes
                Doses, routes and products always come from the vet or the label. Use a fresh needle for each animal where the label or vet says so, and never put a used needle back in the bottle.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have given each type of treatment under the vet's supervision, and every treatment since is in the register on the day given."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the vet to supervise you giving each type of treatment"
                - "Buy separate syringes, needles and a drench gun and label them"
                - "Write the preferred injection sites for each species on the kit card"
                - "Practise reading a label for route and withdrawal before every use"
            - name: FAMACHA eye scoring for goats and sheep
              description: |-
                ## Purpose
                Barber's pole worm sucks blood, and anaemia shows first in the colour of the inner eyelid. FAMACHA scoring compares that colour against a card, so you can find the goats and sheep that need the vet's attention instead of worming the whole flock. It works alongside egg counts and needs proper training to use well.

                ## Milestones
                1. FAMACHA training completed through the vet, extension service or a recognised course.
                2. A FAMACHA card bought and kept with the scoring records.
                3. Every goat and sheep scored at least monthly in the wet season and recorded.
                4. Scores and egg counts reviewed together with the vet.

                ## Notes
                The card is meant to be used only after training. FAMACHA is for barber's pole worm only and does not show other parasites.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You hold a FAMACHA training record and card, and scores for every goat and sheep are recorded monthly through the wet season."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the vet or extension office where FAMACHA training runs"
                - "Complete the training and get a card"
                - "Score every goat and sheep and record the results"
                - "Review the scores against egg counts with the vet"
            - name: Wound care and knowing when to call the vet
              description: |-
                ## Purpose
                Cuts from wire, dog bites and horn injuries are everyday events on a livestock farm, and in the heat a small wound can fill with fly larvae within a day. Knowing how to clean and protect a minor wound, and the signs that mean it needs the vet, prevents both neglect and panic. Clear rules help workers decide when you are not there.

                ## Milestones
                1. Basic wound cleaning and fly protection shown by the vet.
                2. A written list of wounds that always need the vet: deep, near joints or eyes, heavy bleeding, teats, any wound with larvae.
                3. Wound care supplies in the first aid kit.
                4. Every wound treated recorded on the animal's health card and checked daily until healed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A posted list of wounds that need the vet exists, and every wound treated this year is recorded on a health card with follow-up checks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the vet to show basic wound cleaning on a minor injury"
                - "Write the list of wounds that always need the vet and post it"
                - "Check the first aid kit holds wound cleaning and fly protection supplies"
                - "Find and fix the wire or sharp edges causing most injuries"
            - name: Notifiable and zoonotic diseases you must know
              description: |-
                ## Purpose
                Some animal diseases must by law be reported to the veterinary authorities, and some, such as leptospirosis, brucellosis, rabies in some territories, and ringworm, can pass to people. Knowing which ones apply in your country, what they look like and who to call protects your family, your workers and the national herd. Reporting early is also usually the condition for any compensation.

                ## Milestones
                1. The current list of notifiable diseases for your country obtained from the veterinary authority.
                2. The main zoonotic risks on your farm listed with the vet, with basic precautions.
                3. The reporting phone number posted in the office and feed room.
                4. A monthly check of veterinary authority alerts for outbreaks in the region.

                ## Notes
                Leptospirosis is common in the Caribbean after floods and spreads in rat urine. Gloves, boots and rodent control protect people as well as animals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The notifiable disease list and reporting number are posted on the farm, and a list of zoonotic risks with precautions has been agreed with the vet."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the veterinary authority for the current notifiable disease list"
                - "List the zoonotic risks on your farm with the vet"
                - "Post the disease reporting number in the office and feed room"
                - "Check veterinary authority alerts for disease in the region @recurring(monthly:12)"
            - name: Reading a veterinary medicine label and data sheet
              description: |-
                ## Purpose
                Everything you are allowed to do with a product is on its label and data sheet: the species it is licensed for, the route, storage, the withdrawal period for meat and milk, and the safety warnings for the person giving it. Reading them properly, and keeping the data sheets on file, prevents the most common mistakes, such as using a cattle product on goats without the vet's say. Inspectors also expect you to have them.

                ## Milestones
                1. A data sheet or label copy filed for every product in the medicine store.
                2. The licensed species, route, storage and withdrawal period for each product highlighted.
                3. Products used outside their label listed, each with the vet's written instruction.
                4. Workers shown where to find the withdrawal period on a label.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A data sheet is on file for every product in the store, and every off-label use has a written vet instruction attached."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect the label or data sheet for every product in the store"
                - "Highlight species, route, storage and withdrawal on each sheet"
                - "Ask the vet to put any off-label use in writing"
                - "Show each worker where the withdrawal period appears on a label"
            - name: Handling pen, race and crush for safe treatment
              description: |-
                ## Purpose
                Treating cattle or a large goat herd in an open yard is slow, dangerous and stressful, and it is the reason many routine jobs get skipped. A handling pen with a race and a crush or headgate lets one or two people vaccinate, tag, check feet and load animals safely. The choice is between building from local timber or steel and buying a portable unit, and it depends on herd size and whether you share it with neighbours.

                ## Milestones
                1. The jobs the handling area must support listed, from vaccinating to loading.
                2. Two or three designs or units compared on cost, safety and herd size.
                3. A site chosen on dry, level ground near the loading point.
                4. The handling facility built or bought and used for at least one treatment day.

                ## Notes
                Start from the **Purchase decision** template. The extension service or a cattle association often has tested plans for local materials.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A handling facility suited to the herd size is in place and has been used for a full treatment day with no person or animal injured."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the treatment and loading jobs the handling area must handle"
                - "Ask the extension office for handling pen plans using local materials"
                - "Compare a built pen, a portable crush and sharing with a neighbour"
                - "Build or buy the facility and run a first treatment day through it"
            - name: Reducing antibiotic use with the vet
              description: |-
                ## Purpose
                Antibiotics given routinely to whole groups, or bought over the counter without a diagnosis, are a main driver of resistance, and more buyers and export markets now ask how they are used. Working with the vet to find out why animals are being treated, and fixing the causes such as poor ventilation, dirty water or missed vaccines, cuts use and cost. The aim is responsible use, never withholding treatment from a sick animal.

                ## Milestones
                1. Antibiotic use over the past year totalled from the treatment register.
                2. The top three reasons for treatment identified with the vet.
                3. One management change made for each of those reasons.
                4. Antibiotic use compared a year later, with the result recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison shows antibiotic use this year against last, with the three management changes made recorded beside it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Total every antibiotic treatment in the register for the last year"
                - "Ask the agent to group the treatments by reason and animal age"
                - "Agree the top three causes and one change for each with the vet"
                - "Compare antibiotic use after twelve months and write up the result"
            - name: Animal health cost per head budget
              description: |-
                ## Purpose
                Vet fees, vaccines, wormers and lab tests are a real line in a livestock business, and many farmers have no idea whether they spend too little or are wasting money on treatments that do not work. Totalling a year of health costs per animal, and setting a budget with the vet's routine plan in it, shows the true cost and makes the case for prevention. Pricing and margins sit with the farm budget; this is the health line feeding into it.

                ## Milestones
                1. Every health cost for the past year found in receipts and the treatment register.
                2. Costs split into prevention, treatment, vet fees and tests.
                3. A cost per head figure for each species.
                4. A next-year health budget agreed, with routine items scheduled by month.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written health budget shows last year's cost per head by species and a monthly plan of routine costs for next year."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather vet invoices and medicine receipts from the last twelve months"
                - "Split the costs into prevention, treatment, fees and tests"
                - "Work out the health cost per head for each species"
                - "Write the routine health costs for next year into a monthly plan"
            - name: Vet call-out fees versus a health plan contract
              description: |-
                ## Purpose
                Some vets offer a fixed monthly or yearly fee that covers routine visits and advice, while others charge per call-out and per mile. Comparing the two against your last year of visits, emergencies and distance shows which costs less and which gets the vet out more often. For farms far from a practice, sharing a visit day with neighbours can also halve the travel charge.

                ## Milestones
                1. Last year's vet visits and charges totalled.
                2. A health plan or contract price requested from at least one practice.
                3. A shared visit day with neighbours explored.
                4. A choice made and recorded with the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between per-visit charging and a health plan contract, with last year's costs and the quoted price side by side."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up last year's vet visits and charges from invoices"
                - "Ask your practice whether they offer a farm health plan contract"
                - "Ask two neighbours whether they would share a vet visit day"
                - "Record the choice and the reasons in the vet's vendor record"
            - name: Health checks before buying replacement stock
              description: |-
                ## Purpose
                Buying in a ram, a boar or a group of heifers is the single riskiest thing a farm does for disease, because you buy the seller's problems along with the animal. Asking the right questions, getting a vet check or health certificate where possible, and quarantining on arrival turns that risk into a managed one. It also gives you a record if the animal turns out to be sick.

                ## Milestones
                1. A list of health questions for sellers: vaccinations, worming, testing, deaths and the herd's history.
                2. A vet pre-purchase check or official health certificate arranged where available.
                3. Every bought animal put through the isolation pen for the period the vet advises.
                4. Arrival treatments and tests done as the vet directs and recorded.

                ## Notes
                Buying at a market or from an unknown seller carries the most risk. Where you can, buy from one known farm with a health plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every animal bought this year has a completed seller questionnaire, a quarantine record and arrival treatments logged."
                cadence: rolling
              tasks:
                - "Write a one-page health questionnaire for sellers"
                - "Ask the vet what checks and quarantine period to use for bought stock"
                - "Book a pre-purchase vet check before the next animal is bought"
                - "Record the quarantine dates and arrival treatments for each new animal"
            - name: Dead stock disposal method
              description: |-
                ## Purpose
                A carcass left in the bush draws dogs, rats and flies and can spread disease to the rest of the herd and to neighbours, and dumping in rivers or gullies is often illegal. Deciding in advance how dead animals will be disposed of, by burial pit, composting, incineration or collection, means it is done quickly and within the rules. Some diseases require the authorities to direct disposal, so know who to call.

                ## Milestones
                1. The local rules on carcass disposal confirmed with the veterinary or environmental authority.
                2. A disposal method chosen for small and large animals.
                3. A burial or composting site marked away from water, wells and boundaries, if that is the method.
                4. A rule that any unexplained death is reported to the vet before disposal.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written disposal method that meets local rules is in place, with a marked site or a collection contact, and the vet-first rule is posted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the veterinary office what disposal methods are allowed locally"
                - "Choose a method for small animals and one for large animals"
                - "Mark a disposal site well away from water and boundaries"
                - "Post the rule that unexplained deaths go to the vet first"
            - name: Pre-sale health check and movement paperwork
              description: |-
                ## Purpose
                Abattoirs, processors and buyers in many islands want animals clean, healthy, out of withdrawal and accompanied by the right papers, and moving animals between parishes or islands may need a permit or health certificate. Getting the check and the paperwork right before the truck arrives avoids rejected animals and wasted trips. It is also when your records prove their worth.

                ## Milestones
                1. The documents buyers and the authorities need for moving and selling animals confirmed.
                2. Animals for sale checked against the withdrawal board and their health cards.
                3. A vet or official inspection booked where a certificate is required.
                4. Sale papers filed with the animals' numbers, buyer and date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every animal sold in the period left with a withdrawal check, its health card reviewed and any required movement document on file."
                cadence: rolling
              tasks:
                - "Ask the abattoir and veterinary office what papers a sale needs"
                - "Check each animal for sale against the withdrawal board"
                - "Book the vet inspection where a health certificate is needed"
                - "File the sale papers with the animal numbers and buyer"
            - name: Livestock show or auction health preparation
              description: |-
                ## Purpose
                Taking animals to an agricultural show or a livestock auction puts them beside stock from dozens of other farms, and brings any disease they catch straight back home. Preparing properly means meeting the show's health entry rules, presenting healthy animals, and isolating them on return. Done well, it is also a chance to show buyers a well-kept herd.

                ## Milestones
                1. The show's or auction's health entry rules and paperwork obtained.
                2. Animals chosen, vaccinated and checked as the rules and the vet require.
                3. Own water buckets, feed and equipment packed so nothing is shared.
                4. Returning animals kept in the isolation pen for the period the vet advises.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Animals attended the event with the required health papers and spent the agreed isolation period on return with no new disease in the herd."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Get the show or auction's health entry rules and forms"
                - "Choose the animals and book any vet checks the rules require"
                - "Pack separate buckets, feed and equipment for the trip"
                - "Put returning animals straight into the isolation pen"
            - name: Government testing or vaccination campaign day
              description: |-
                ## Purpose
                Veterinary services run testing and vaccination campaigns for diseases such as brucellosis, tuberculosis or rabies in some territories, and a farm that is not ready wastes the team's time and may miss the round. Getting animals penned, identified and listed before the team arrives makes the day quick and leaves you with official results. Those results can matter to buyers and for any disease-free status later.

                ## Milestones
                1. The campaign date, requirements and the animals to be tested or vaccinated confirmed with the veterinary office.
                2. A list of animals with their numbers ready for the officers.
                3. Animals penned and the handling area ready the morning of the visit.
                4. Official results or certificates filed with the health plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every eligible animal was presented at the campaign, and the official results or certificates are filed with the health plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the veterinary office when the next testing or vaccination round is"
                - "Prepare a list of eligible animals with their numbers"
                - "Pen the animals and set up the handling area the evening before"
                - "File the official results or certificates with the health plan"
            - name: Post-mortem and lab samples after an unexplained death
              description: |-
                ## Purpose
                When an animal dies with no obvious cause, finding out why is the only way to protect the rest, and the answer may be a disease you must report. A post-mortem by the vet or the government laboratory, done quickly while the carcass is fresh, often gives that answer for little cost. Knowing in advance how to keep the body and who to call makes it possible in the heat.

                ## Milestones
                1. The vet's or laboratory's arrangements for post-mortems and samples confirmed, including weekends.
                2. A rule that an unexplained death is reported within hours and the carcass kept shaded and covered.
                3. A post-mortem done and the findings recorded for each unexplained death.
                4. Any action from the findings added to the health plan.

                ## Notes
                Do not open a carcass yourself if anthrax or another serious disease is possible. Sudden death with bleeding from the nose or other openings must be reported at once.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every unexplained death this year was reported to the vet within a day and has a post-mortem result or a recorded reason one was not done."
                cadence: rolling
              tasks:
                - "Ask the vet how and where post-mortems are done, including weekends"
                - "Note the government veterinary laboratory's number and hours"
                - "Keep a tarpaulin ready to shade and cover a carcass"
                - "Record each post-mortem result in the mortality log"
            - name: Disease watch after floods and storms
              description: |-
                ## Purpose
                Floodwater and the weeks after a storm bring their own animal health problems: leptospirosis spread in rat urine, foot rot from standing in mud, contaminated water troughs, stress pneumonia and injuries from debris. A short post-event health routine, agreed with the vet before the season, means you look for the right things in the first fortnight instead of finding deaths a week later. Shelter and evacuation planning sit with hurricane preparation; this project starts once the water goes down.

                ## Milestones
                1. A post-flood health checklist agreed with the vet: water, feet, wounds, breathing, scouring and rodent activity.
                2. Every animal checked and injuries recorded within two days of the event.
                3. Water sources tested or switched to a safe supply before animals drink from them.
                4. Any rise in sickness or deaths in the following fortnight reported to the vet.

                ## Notes
                People are at risk too. Wear boots and gloves when cleaning flooded pens, and see a doctor about fever after flood work.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "After each flood or storm, every animal was checked within two days and a written health record covers the following fortnight."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a post-flood health checklist with the vet before the wet season"
                - "Check every animal for injuries, lameness and breathing within two days"
                - "Flush and refill troughs from a safe water source"
                - "Set rat bait stations around feed stores as the label directs"
            - name: Annual animal health review
              description: |-
                ## Purpose
                Once a year, the farm's health records add up to a clear picture: deaths, treatments, costs, test results, what worked and what did not. Sitting down with the vet to review that year, before rewriting the health plan, turns twelve months of entries into the next year's priorities. It is also the document lenders and certification bodies like to see.

                ## Milestones
                1. Deaths, culls, treatments, vaccinations and health costs for the year totalled.
                2. The year compared with the previous one where records exist.
                3. Three priorities for the coming year agreed with the vet.
                4. The health plan updated with those priorities.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written annual health review with year-on-year figures and three agreed priorities exists, and the health plan has been updated to match."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Total the year's deaths, treatments and health costs from the records"
                - "Book a review meeting with the vet"
                - "Agree three priorities for the coming year and write them down"
                - "Hold the annual health review with the vet @recurring(yearly)"
            - name: Health basics for a first-time livestock keeper
              description: |-
                ## Purpose
                Starting with a few goats, pigs or a couple of calves, most new keepers learn health the hard way, by losing animals to worms, heat or a disease a neighbour could have warned them about. Getting a short set of basics in place before or soon after the animals arrive, a vet's number, a clean pen, a thermometer and a habit of looking daily, prevents most early losses. The rest of this area can wait until those are done.

                ## Milestones
                1. A vet or veterinary office number saved and the first animals seen once.
                2. A clean, dry, shaded pen with fresh water for the new animals.
                3. Animals bought from a known source, with their vaccination and worming history.
                4. A notebook started for treatments and observations.

                ## Notes
                Talk to the extension officer before buying. Many offer free advice and can tell you which species and breeds do well in your district.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The first animals have been seen by a vet, live in a clean shaded pen, and have a treatment notebook started from day one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Phone the extension office and ask for a visit before buying"
                - "Ask the seller for each animal's vaccination and worming history"
                - "Have the vet look at the new animals in their first fortnight"
                - "Start a notebook for every treatment and observation"
            - name: Health plan for a mixed-species smallholding
              description: |-
                ## Purpose
                Goats, pigs, poultry and a cow on the same few acres share water, pasture, rats and the farmer's boots, and some diseases jump between them. A mixed farm needs its health routines to fit together: which species is visited first, which share grazing safely, which can never share housing. Planning that with the vet avoids a pig problem becoming a poultry problem.

                ## Milestones
                1. Diseases and parasites that can pass between your species listed with the vet.
                2. A daily order of visits set, from youngest and healthiest to sick and isolated.
                3. Grazing and housing arrangements checked for risky combinations.
                4. One combined vaccination and treatment calendar for all species.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written mixed-species plan sets the daily visit order, safe grazing and housing arrangements and one combined calendar, agreed with the vet."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every species on the farm and where each lives and grazes"
                - "Ask the vet which diseases can cross between your species"
                - "Set and post the daily order of visits between species"
                - "Merge every species' vaccinations into one calendar"
            - name: Training a stockperson to give treatments
              description: |-
                ## Purpose
                Farm owners with a day job, or more than one site, rely on a worker to give follow-up treatments and spot sickness, and a worker who has never been shown properly is a risk to animals, to residues and to themselves. Training a named stockperson, with the vet's help, and checking in each week means treatments are done right when you are not there. It also gives the worker a skill and responsibility worth keeping.

                ## Milestones
                1. A named stockperson responsible for animal health, with a written role.
                2. Training in observation, restraint, treatments and record keeping given by the vet or an experienced keeper.
                3. A weekly check-in reviewing the treatment register and any sick animals.
                4. A rule for what the stockperson decides alone and what needs a call to you or the vet.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A named stockperson has been trained in observation, treatment and records, and a weekly check-in is held for at least ten weeks in a row."
                cadence: rolling
              tasks:
                - "Write a short animal health role for the stockperson"
                - "Book a training session with the vet on the farm"
                - "Agree what the stockperson can decide alone and what needs a call"
                - "Review the register and sick animals with the stockperson @recurring(weekly:sun)"
            - name: Animal health on a remote farm far from a vet
              description: |-
                ## Purpose
                On a hillside farm, a small island or the interior, the nearest vet may be hours away or only come on certain days, so more must be done on the farm and help must be planned in advance. Building a stronger kit, agreeing remote advice by phone and photo, and arranging transport for emergencies means distance does not decide whether an animal lives. The vet relationship matters even more here, not less.

                ## Milestones
                1. The vet agreed to give advice by phone, photos or video, with how that is billed.
                2. An extended kit and medicine store agreed with the vet for the farm's distance.
                3. A plan for getting an animal or samples to the vet, including transport and timings.
                4. Neighbouring farmers listed who can help with restraint or transport.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written remote-farm plan covers phone advice with the vet, an extended kit, transport for animals or samples, and neighbours to call."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the vet whether they will advise by phone and photo, and the fee"
                - "Agree an extended kit list for a farm far from the practice"
                - "Plan how an animal or sample would reach the vet in a day"
                - "List the neighbours who can help with handling or transport"
            - name: Children, visitors and zoonotic disease safety
              description: |-
                ## Purpose
                Farm tours, school visits, family children and buyers walking through the pens are part of many small farms, and some animal diseases, from ringworm to E. coli and leptospirosis, pass to people. Simple rules, hand washing, no eating in animal areas, keeping young children away from newborn and sick animals, protect visitors and the farm's name. Pregnant visitors need particular care near animals giving birth.

                ## Milestones
                1. The zoonotic risks on the farm reviewed with the vet.
                2. A hand washing point with soap and water near the animal areas.
                3. Visitor rules written and shown to every group before they enter.
                4. Sick, newborn and birthing animals kept out of visitor areas.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A hand wash point is working near the animal areas, and written visitor rules are shown to every group before entry."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the vet which diseases on your farm can pass to people"
                - "Set up a hand wash point with soap and water by the pens"
                - "Write visitor rules and read them to each group at the gate"
                - "Fence off sick, newborn and birthing animals from visitor routes"
            - name: Animal health rules for organic or antibiotic-free sales
              description: |-
                ## Purpose
                Organic certification and antibiotic-free or naturally raised labels come with strict health rules: which treatments are allowed, longer withdrawal periods, and what happens to an animal that must be treated. Understanding the standard before you start, and planning with the vet how sick animals will still be treated, protects both animal welfare and the label. Selling a treated animal under the label can lose the certification.

                ## Milestones
                1. The health and treatment rules of the chosen standard or buyer obtained.
                2. The health plan checked against those rules with the vet.
                3. A process for treating a sick animal and removing it from the label, with marking and records.
                4. A record set up that a certifier or buyer can audit.

                ## Notes
                Welfare comes first: no standard requires leaving an animal untreated. The animal is treated and sold without the label.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The health plan has been checked against the standard's rules, and a written process for treating and removing animals from the label is in use."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Get the health and treatment rules from the standard or buyer"
                - "Go through the health plan against the rules with the vet"
                - "Agree how treated animals are marked and removed from the label"
                - "Set up records a certifier could audit"
            - name: Notifiable disease outbreak contingency plan
              description: |-
                ## Purpose
                African swine fever reached Hispaniola in 2021, and avian influenza and other serious diseases have moved through the Americas, so a Caribbean farm needs to know what it would do if one arrived. A contingency plan sets out how to recognise and report suspicion, lock down the farm, keep feeding and caring for animals under movement controls, and protect cash flow. Writing it calmly now is far better than improvising under quarantine.

                ## Milestones
                1. The serious diseases of concern for your species and region listed with the vet.
                2. Steps for suspicion written: who reports, who stays on farm, what stops moving.
                3. A lockdown plan covering feed deliveries, staff, sales and dead stock under movement controls.
                4. Contacts for the veterinary authority, buyers, feed supplier and insurer in one place.

                ## Notes
                Start from the **Risk register** template. Never move animals off the farm or hide sick animals when a notifiable disease is suspected; report to the veterinary authority.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written outbreak contingency plan covers reporting, lockdown, feeding, staffing and contacts, and every worker has been walked through it once."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the vet which serious diseases are the main threat this year"
                - "Ask the agent to draft a lockdown plan outline from your farm map"
                - "Fill in contacts for the authority, buyers, feed supplier and insurer"
                - "Walk every worker through the plan and what to do on suspicion"
            - name: Herd health records trend analysis
              description: |-
                ## Purpose
                Once a farm has a year or two of treatment registers, mortality logs, egg counts and body condition scores, the data can show what single months hide: rising worm burdens each September, a pen with twice the lameness, a sire whose kids die more often. Analysing the records each quarter turns them into management decisions and better conversations with the vet. It is the work of a farm that has moved beyond firefighting.

                ## Milestones
                1. All health records brought into one spreadsheet or farm software.
                2. A short set of indicators chosen, such as deaths per hundred, treatments per hundred and lameness cases.
                3. A quarterly chart of each indicator by species and group.
                4. One management change made each year from what the trends showed.

                ## Notes
                Start from the **Metrics log** template for the indicators. Five indicators read every quarter are worth more than twenty never looked at.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five health indicators are charted quarterly by species, and at least one recorded management change was made from the trends this year."
                cadence: rolling
              tasks:
                - "Bring the treatment, mortality and scoring records into one sheet"
                - "Choose five indicators to track for each species"
                - "Chart the health indicators and share them with the vet @recurring(quarterly)"
            - name: Fertility and breeding soundness examinations
              description: |-
                ## Purpose
                Poor fertility in a ram, bull or boar can quietly cost a whole breeding season, and cows or does that fail to conceive are often carrying a health problem. Breeding soundness exams for males before the season, pregnancy checks by the vet and records of breeding outcomes show where fertility is lost. The decisions on breeding programmes belong to the vet and the farmer together.

                ## Milestones
                1. Breeding soundness exams booked for every breeding male before the season.
                2. Pregnancy diagnosis by the vet arranged at the right stage after mating.
                3. Conception, abortion and birth outcomes recorded for each female.
                4. Animals with repeated fertility problems reviewed with the vet.

                ## Notes
                Abortions in goats, sheep and cattle can signal diseases that also affect people, such as brucellosis. Wear gloves and report them to the vet.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every breeding male had a soundness exam before the season, and every breeding female has a recorded outcome for the season."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Book breeding soundness exams for males a month before mating"
                - "Ask the vet when to schedule pregnancy checks after mating"
                - "Record conception, abortion and birth outcomes for each female"
                - "Review repeat breeders with the vet and agree what to do"
            - name: Disease-free herd status accreditation
              description: |-
                ## Purpose
                Some veterinary authorities and breed associations run schemes that certify a herd or farm as free of diseases such as brucellosis, tuberculosis or certain pig and poultry diseases, after repeated clean tests. Accredited status can open better breeding stock sales, export of live animals and premium buyers. It takes years of testing, biosecurity and records, so it suits a farm whose foundations are already solid.

                ## Milestones
                1. The schemes available in your country and their conditions confirmed with the veterinary authority.
                2. The farm's records and biosecurity checked against the scheme's requirements.
                3. The first round of official testing completed, with results filed.
                4. A testing calendar set for the scheme's repeat rounds.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The farm is enrolled in a disease-free status scheme, with the first official test results filed and the repeat testing dates on the calendar."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the veterinary authority which herd status schemes exist"
                - "Check your records and biosecurity against the scheme's rules"
                - "Book the first round of official testing"
                - "Put the scheme's repeat testing dates on the farm calendar"
---

# Livestock Health and Vet Care

Livestock Health and Vet Care is for anyone keeping animals for sale, whether that is a goat pen behind the house, a pig unit, a cattle pasture or a mixed smallholding with poultry as well. The projects start with the foundations: a vet you can call, animal identification, a written health plan, a treatment register, a locked medicine store, withdrawal rules, biosecurity and an isolation pen. Then come the routines that keep animals well, the hands-on skills of examining and treating under the vet's direction, decisions about handling facilities, antibiotics and costs, dated events such as sales and testing campaigns, situations from the first-time keeper to the remote farm, and specialist work on outbreak plans, fertility and disease-free status.

What repeats is the daily stock walk, weekly medicine fridge, footbath and tick checks, monthly treatment reconciliations, egg counts, body condition scores and mortality reviews, quarterly vet visits, biosecurity audits and foot care, and the yearly health plan review. The Vendor, Operational checklist, Metrics log, Purchase decision and Risk register templates pair with the projects that name them. Every vaccine, wormer and medicine is chosen and dosed by your vet and the product label, never from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
