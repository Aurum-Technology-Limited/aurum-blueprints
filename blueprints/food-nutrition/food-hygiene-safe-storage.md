---
id: food-nutrition.food-hygiene-safe-storage
name: Food Hygiene & Safe Storage
description: "A fridge you have measured, raw and ready-to-eat food kept apart, safe cooling, defrosting and reheating, cleaning routines that actually happen, and a plan for the day someone gets ill."
category: personal
version: 1.0.0
tags: [food-nutrition, food-hygiene-safe-storage, everyone, food-safety, fridge-temperature, cross-contamination, kitchen-cleaning]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - household-chores
    - operational-checklist
    - purchase-decision
    - course
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Food Hygiene & Safe Storage
          description: "Handling, storing, defrosting and reheating food safely, with fridge temperatures, use-by rules and cleaning routines that prevent illness."
          projects:
            - name: Fridge and freezer temperature baseline
              description: |-
                ## Purpose
                The dial inside most fridges is a setting from 1 to 7, not a temperature, and many household fridges run warmer than the 5°C or below that food safety agencies recommend. A cheap fridge thermometer and three days of readings tell you whether chilled food is actually being kept cold, and whether the freezer holds minus 18°C.

                ## Milestones
                1. A fridge thermometer on the middle shelf and a freezer thermometer in the freezer.
                2. Morning and evening readings recorded for three days, taken before the door has been opened for long.
                3. The fridge dial adjusted until the warmest reading sits at or below 5°C.
                4. The setting that achieves it written on a label inside the door.

                ## Notes
                Check the reading your own food safety agency gives; some use 4°C rather than 5°C. Readings straight after a big shop or a long door opening will be high, so judge the settled figure.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three days of fridge and freezer readings recorded, with the fridge settled at 5°C or below and the freezer at minus 18°C or below."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy a fridge thermometer and a freezer thermometer"
                - "Record fridge and freezer readings morning and evening for three days"
                - "Turn the fridge dial colder if the settled reading is above 5°C"
                - "Write the dial setting that works on a label inside the fridge door"
            - name: Raw meat on the bottom shelf fridge zoning
              description: |-
                ## Purpose
                Juices from raw meat, poultry and fish drip, and anything stored beneath them can pick up salmonella or campylobacter without anyone noticing. Giving raw food a sealed home on the lowest shelf, with ready-to-eat food above, is the single cheapest change that prevents cross-contamination in the fridge.

                ## Milestones
                1. The bottom shelf, above the salad drawer, set aside for raw meat, poultry and fish only.
                2. A lidded tub or tray in place so raw packs cannot drip.
                3. Cooked food, dairy and ready-to-eat items moved to the upper shelves.
                4. Everyone who shops or unpacks told where raw food now goes.

                ## Notes
                Salad and fruit in the drawer under the raw shelf are only safe if the raw food is in a sealed container. Never store raw meat in the door.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Raw meat, poultry and fish live in a lidded container on the lowest shelf, with no ready-to-eat food below them, for four straight weeks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Empty the bottom shelf and wipe it with hot soapy water"
                - "Buy a lidded tub or tray that fits the bottom shelf"
                - "Move cooked and ready-to-eat food to the upper shelves"
                - "Tell everyone in the house that raw meat goes in the tub on the bottom shelf"
            - name: Kitchen hygiene walk-through with a checklist
              description: |-
                ## Purpose
                Kitchens collect risks gradually: a cracked board, a cloth used for everything, a bin with no lid, a fridge nobody has measured. Walking through your own kitchen once with a checklist based on what an environmental health officer looks at gives you a ranked list of fixes, so the rest of this area starts with the ones that matter most.

                ## Milestones
                1. A checklist covering temperatures, separation, cleaning, hand washing, pests and storage.
                2. Every item scored as fine, needs work or unsafe.
                3. The three most serious gaps picked out as first fixes.
                4. A date set for the first quarterly self-inspection.

                ## Notes
                Start from the **Operational checklist** template. Many food safety agencies publish the checklist their inspectors use for small businesses; it adapts well to a home kitchen.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A completed, scored checklist of the kitchen exists, with the three most serious gaps named and dated for fixing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a published small-kitchen food hygiene checklist from a food safety agency"
                - "Adapt it into a one-page home checklist"
                - "Walk the kitchen and score every line"
                - "Pick the three most serious gaps and give each a fix date"
            - name: Hand-washing point and kitchen hand routine
              description: |-
                ## Purpose
                Hands carry more food poisoning bugs into food than any surface, and the moments that matter (after raw meat, after the bin, after the toilet, before handling ready-to-eat food) are easy to skip in a hurry. A soap dispenser and towel at the sink, plus an agreed list of when to wash, makes the right thing the easy thing.

                ## Milestones
                1. Liquid soap and a dedicated hand towel or paper towels at the kitchen sink.
                2. The five moments for washing written on a small card by the sink.
                3. A 20-second wash practised with everyone who cooks.
                4. Hand towels kept separate from tea towels used for dishes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Soap and a separate hand towel are at the kitchen sink, and a card listing when to wash hands is posted beside it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Put liquid soap and a dedicated hand towel at the kitchen sink"
                - "Write the five hand-washing moments on a card by the sink"
                - "Show everyone who cooks a full 20-second hand wash"
                - "Hang the hand towel apart from the tea towels"
            - name: Food probe thermometer and safe temperatures card
              description: |-
                ## Purpose
                Colour and clear juices are unreliable signs that chicken, burgers or reheated food are cooked through, and a probe thermometer removes the guesswork for a modest price. Pairing it with a card of the core temperatures your food safety agency recommends means nobody has to look them up with a pan on the heat.

                ## Milestones
                1. A digital probe thermometer bought and its accuracy checked in iced water.
                2. A card listing your agency's core temperatures for poultry, minced meat, reheated food and hot holding.
                3. The card fixed inside a cupboard door near the hob.
                4. The probe used on the next three poultry or mince meals.

                ## Notes
                Figures differ slightly between countries, for example 75°C at the core for reheating in some and 74°C for poultry in others. Use one source and stick to it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A probe thermometer is in the kitchen drawer and a safe temperatures card from one named agency is posted near the hob."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy a digital probe thermometer with a thin tip"
                - "Look up your food safety agency's recommended core temperatures"
                - "Write the temperatures on a card and fix it inside a cupboard by the hob"
                - "Probe the thickest part of the next chicken or mince dish you cook"
            - name: Colour-coded chopping boards for raw and ready-to-eat
              description: |-
                ## Purpose
                One board used for raw chicken and then for salad is a classic route for cross-contamination, and rinsing it under the tap does not fix it. Separate boards, ideally in different colours so the rule is visible, stop raw meat and ready-to-eat food from ever meeting on the same surface.

                ## Milestones
                1. At least two boards, one marked for raw meat and fish and one for ready-to-eat food.
                2. A colour or label rule agreed and written on the safety rules sheet.
                3. Boards stored so the raw board is not stacked face to face with the clean one.
                4. Old, deeply scored boards retired.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Separate, clearly marked boards for raw and ready-to-eat food are in daily use and no deeply scored board remains."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count the boards you own and note which are deeply scored"
                - "Choose a colour for raw meat and fish and one for ready-to-eat food"
                - "Buy or label the boards to match the colours"
                - "Store the raw board apart from the ready-to-eat board"
            - name: Dishcloth, sponge and tea towel system
              description: |-
                ## Purpose
                Damp cloths that wipe the counter, the raw meat board and then the children's plates spread bacteria rather than removing them, and a sponge kept in a warm wet sink grows them. A small stock of cloths, a rule for what each is used for and a fixed day to swap them out keeps the kitchen's cleaning kit from becoming a source of contamination.

                ## Milestones
                1. Enough cloths and tea towels for a clean set every few days.
                2. A separate cloth or disposable towel kept for raw meat spills.
                3. Used cloths washed hot, at 60°C where the fabric allows, and dried fully.
                4. Sponges replaced on a schedule rather than when they smell.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly cloth and sponge swap has happened for eight weeks, with a separate cloth kept for raw meat spills."
                cadence: rolling
              tasks:
                - "Buy a pack of cloths and enough tea towels for two changes a week"
                - "Pick a coloured cloth or kitchen roll for raw meat spills only"
                - "Put all cloths and tea towels in a hot wash and fit a new sponge @recurring(weekly:sun)"
                - "Hang wet cloths to dry fully instead of leaving them in the sink"
            - name: Once-opened shelf life labels
              description: |-
                ## Purpose
                Jars of pesto, cartons of stock, tubs of hummus and opened packs of ham often say 'eat within three days of opening', but nobody remembers which day that was. Writing the opening date on the lid as a habit turns a vague instruction into a date anyone in the house can check before eating.

                ## Milestones
                1. A marker pen and roll of labels kept by the fridge.
                2. Every opened chilled jar, carton and pack dated on the day it is opened.
                3. The fridge door items checked for their 'once opened' instructions.
                4. Anything past its opened window thrown out rather than sniffed.

                ## Notes
                Smell and look are poor guides: listeria and many other bacteria do not change how food smells. The use-by date stops applying once a pack is opened if the label gives a shorter 'once opened' window.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every opened chilled item in the fridge carries a written opening date on the day of a spot check."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Keep a marker pen and labels in a pot beside the fridge"
                - "Read the 'once opened' line on each jar and carton in the fridge door"
                - "Write the opening date on everything opened from today"
                - "Throw out opened items whose window has already passed"
            - name: Food poisoning response card
              description: |-
                ## Purpose
                When someone is vomiting at 2 a.m. nobody wants to search for what to do, who is at most risk, or when to call for help. A one-page card, written from your health service's guidance while everyone is well, covers fluids, the warning signs that need a doctor, keeping the suspect food and reporting a business that served it.

                ## Milestones
                1. Your health service's advice on food poisoning and dehydration found and summarised.
                2. The warning signs that need urgent help listed, including for babies, older people and pregnancy.
                3. A note on keeping any suspect food or packaging in a sealed bag.
                4. How to report suspected food poisoning from a restaurant or shop to your local authority written down.
                5. The card stored with the first aid kit and its location shared.

                ## Notes
                This card organises your health service's advice; it does not replace a call to them. Oral rehydration sachets in the first aid kit are a sensible default.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page food poisoning card, written from named health service guidance, is stored with the first aid kit and the household knows where it is."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your health service's guidance on food poisoning and when to get help"
                - "Write the urgent warning signs and the numbers to call on one page"
                - "Add how to report a suspect restaurant or shop to the local authority"
                - "Put oral rehydration sachets and the card in the first aid kit"
                - "Check the card and the sachet expiry dates @recurring(yearly)"
            - name: One-page household food safety rules
              description: |-
                ## Purpose
                Partners, teenagers, grandparents and babysitters all cook in the same kitchen with different habits, and the rules only work if everyone follows the same ones. A single page on the fridge covering raw food storage, boards, cooling, reheating and the leftovers window settles the arguments before they happen.

                ## Milestones
                1. Eight to ten rules drafted from the fixes made so far.
                2. Each rule written in one plain sentence with a number where there is one.
                3. The page agreed with everyone who cooks and posted on the fridge.
                4. A copy given to regular babysitters or carers.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of household food safety rules is on the fridge and has been read by everyone who regularly cooks there."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the kitchen rules you already follow and the ones you have added"
                - "Ask the agent to tighten them into ten one-sentence rules"
                - "Agree the page with everyone who cooks and stick it on the fridge"
                - "Review the rules page with the household @recurring(yearly)"
            - name: Thursday fridge temperature and date check
              description: |-
                ## Purpose
                Fridges drift warmer when they are overpacked, when the seal ages or when summer arrives, and a once-only check misses all of that. A two-minute weekly look at the thermometer and the use-by dates, done the day before most households shop, catches a warm fridge early and clears out anything that should not be eaten.

                ## Milestones
                1. A weekly reading added to a simple temperature log.
                2. Anything past its use-by date or opened window removed at the same time.
                3. A rule written for what to do if the reading is above 5°C twice running.
                4. Twelve consecutive weekly readings recorded.

                ## Notes
                Start from the **Metrics log** template. A warm reading after a big shop is normal; read it again two hours later before acting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly fridge readings are in the log, with any reading above 5°C followed by a recorded action."
                cadence: rolling
              tasks:
                - "Set up a temperature log with columns for date, fridge, freezer and action"
                - "Read the fridge and freezer thermometers and clear out-of-date food @recurring(weekly:thu)"
                - "Write what you will do if the fridge reads above 5°C twice in a row"
            - name: End-of-day kitchen close-down
              description: |-
                ## Purpose
                Food left on the hob overnight, a raw meat board in the sink and crumbs on the counter all give bacteria and pests eight undisturbed hours. A five-minute close-down routine every evening (food chilled, surfaces wiped, sink emptied, bin closed) means the kitchen starts each morning clean.

                ## Milestones
                1. A five-step close-down list written and posted inside a cupboard.
                2. The routine done after the last meal every evening for a month.
                3. No cooked food left out at room temperature overnight.
                4. Close-down shared between household members on a rota if more than one person cooks.

                ## Notes
                Start from the **Habit tracker** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The evening close-down is ticked off on at least 25 days of a 30-day month, with no cooked food left out overnight."
                cadence: rolling
              tasks:
                - "Write a five-step close-down list and stick it inside a cupboard door"
                - "Chill leftovers, wipe surfaces, empty the sink and close the bin @recurring(daily)"
                - "Agree who closes down on which nights if several people cook"
            - name: Weekly high-touch surface clean
              description: |-
                ## Purpose
                Fridge handles, tap levers, cupboard knobs, light switches and the oven door are touched with raw-meat hands far more often than they are cleaned. Adding them to a weekly clean, with a food-safe disinfectant used at the right contact time, closes a gap that daily counter wiping misses.

                ## Milestones
                1. A list of every handle, switch and lever in the kitchen.
                2. A food-safe disinfectant chosen and its contact time noted.
                3. The surfaces cleaned then disinfected every week for two months.
                4. The task assigned on the household chore list.

                ## Notes
                Start from the **Household chores** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of high-touch surface cleaning are ticked off on the household chore list."
                cadence: rolling
              tasks:
                - "Walk the kitchen and list every handle, switch and tap you touch while cooking"
                - "Read the contact time on your disinfectant label and note it"
                - "Clean and disinfect handles, switches and taps @recurring(weekly:sat)"
            - name: Monthly fridge strip-down and shelf wash
              description: |-
                ## Purpose
                Spills under the salad drawer, sticky jar rings and a blocked drain hole at the back are where mould and listeria settle in a fridge that otherwise looks clean. Emptying it once a month, washing the shelves and clearing the drain keeps the inside as clean as the food you put in it.

                ## Milestones
                1. A monthly date chosen when the fridge is near its emptiest.
                2. Shelves and drawers removed, washed in hot soapy water and dried.
                3. The drain hole at the back cleared.
                4. Food returned to the agreed zones with raw food on the bottom.

                ## Notes
                Keep chilled food in a cool bag with ice packs while the fridge is empty, and aim to be done within 30 minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The fridge has been fully emptied, washed and its drain cleared once a month for three consecutive months."
                cadence: rolling
              tasks:
                - "Find the drain hole at the back of the fridge and buy a cleaning tool if needed"
                - "Empty, wash and dry every fridge shelf and drawer @recurring(monthly:9)"
                - "Put food back in its zones with raw meat on the bottom shelf"
            - name: Dishwasher filter and hot cycle routine
              description: |-
                ## Purpose
                Dishwashers only sanitise boards and utensils if they reach a high temperature and their filters are not full of old food. Cleaning the filter monthly and using the hottest cycle for raw meat boards, baby equipment and anything used for poultry makes the machine a reliable part of your hygiene rather than a warm, damp cupboard.

                ## Milestones
                1. The manual checked for the filter location and the hottest cycle.
                2. Raw meat boards and utensils always run on the hot cycle.
                3. The filter removed and cleaned once a month.
                4. Seals and spray arms checked for trapped food at the same time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The dishwasher filter has been cleaned monthly for three months and the hot cycle is the default for raw meat equipment."
                cadence: rolling
              tasks:
                - "Look up the hottest cycle and the filter location in the dishwasher manual"
                - "Run raw meat boards and utensils on the hot cycle from now on"
                - "Remove and clean the filter and wipe the door seal @recurring(monthly:18)"
            - name: Small appliance hygiene round
              description: |-
                ## Purpose
                The can opener blade, the blender's rubber gasket, the microwave roof, the toaster crumb tray and the ice tray are rarely cleaned and often touched by food. A monthly round through every small appliance stops dried food and mould building up in the places that go straight back into the next meal.

                ## Milestones
                1. A list of every small appliance and its hidden food traps.
                2. The blender gasket and food processor seals removed and washed.
                3. The can opener blade scrubbed and the microwave roof wiped.
                4. The kettle descaled and ice trays washed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every small appliance on the list has been cleaned in each of three consecutive monthly rounds."
                cadence: rolling
              tasks:
                - "List each small appliance and where food gets trapped in it"
                - "Remove the blender gasket and check it for mould"
                - "Clean the can opener, microwave, toaster tray, kettle and ice trays @recurring(monthly:21)"
            - name: Food recall alerts checked against the cupboard
              description: |-
                ## Purpose
                Food safety agencies regularly recall products for listeria, salmonella, undeclared allergens or glass, and the notice reaches the news only for the largest cases. Subscribing to your agency's alerts and checking them against what is in the house once a month means you hear about the jar in your cupboard, not just the one in the headlines.

                ## Milestones
                1. An email, app or feed for your food safety agency's recall notices set up.
                2. A monthly check of the latest notices against the cupboard, fridge and freezer.
                3. Any recalled product returned or disposed of as the notice instructs.
                4. Batch codes kept on packs until they are used, not decanted away.

                ## Notes
                When you decant flour, rice or spices into jars, cut out the batch code and best before date and tape them to the jar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A recall alert subscription is active and a monthly check of notices against the kitchen has been recorded for three months."
                cadence: rolling
              tasks:
                - "Subscribe to your food safety agency's product recall alerts"
                - "Compare the month's recall notices with your cupboard, fridge and freezer @recurring(monthly:3)"
                - "Tape batch codes to any jars you decant food into"
            - name: Pest-proof dry store and monthly pest watch
              description: |-
                ## Purpose
                Pantry moths, flour weevils, mice and cockroaches arrive in packs or through gaps and contaminate far more food than they eat. Moving flour, grains, cereal and pet food into sealed containers and checking for signs once a month keeps a small problem from becoming a full cupboard clear-out.

                ## Milestones
                1. Flour, grains, cereal, nuts and pet food in airtight containers.
                2. Gaps behind appliances and under the sink checked and sealed where possible.
                3. A monthly look for droppings, webbing, larvae or gnawed packs.
                4. A clear rule for when to call a pest controller or your landlord.

                ## Notes
                Renters should report mice or cockroaches to the landlord in writing promptly; it is usually their responsibility to deal with an infestation.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All dry goods are in sealed containers and three monthly pest checks have been completed with findings recorded."
                cadence: rolling
              tasks:
                - "Move flour, grains, cereal and pet food into airtight containers"
                - "Look behind the fridge and under the sink for gaps and droppings"
                - "Check cupboards for webbing, larvae, droppings or gnawed packs @recurring(monthly:24)"
            - name: Quarterly kitchen hygiene self-inspection
              description: |-
                ## Purpose
                Standards slip quietly: the boards drift back together, the thermometer battery dies, the cloth swap stops. Re-running the walk-through checklist every three months gives you a score to compare with last time and a short list of things to put right before they become habits.

                ## Milestones
                1. The original walk-through checklist reused for each inspection.
                2. A score recorded every quarter next to the previous one.
                3. Any item marked unsafe fixed within a week.
                4. Four inspections completed in a year.

                ## Notes
                Start from the **Operational checklist** template, using the same checklist as the first walk-through so scores can be compared.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly self-inspections are recorded in a year, each with a score and every unsafe item fixed within seven days."
                cadence: cyclic
              tasks:
                - "Copy your walk-through checklist into a reusable inspection page"
                - "Score the kitchen against the checklist and compare with last time @recurring(quarterly)"
                - "Fix anything marked unsafe within a week and note the date"
            - name: Annual fridge seal and condenser check
              description: |-
                ## Purpose
                Split door seals or coils thick with dust make a fridge work harder and run warmer, especially in summer, long before it breaks down. A yearly check of the seals, the coils, the door alignment and the freezer's frost keeps the appliance holding temperature and catches failure early.

                ## Milestones
                1. Door seals tested with the paper slip method on every side.
                2. Condenser coils at the back or base vacuumed.
                3. The freezer defrosted if ice is thicker than about 5 mm.
                4. Any fault found booked for repair or noted for replacement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The fridge seals, coils and freezer frost have been checked within the last twelve months and any fault recorded."
                cadence: cyclic
              tasks:
                - "Close the door on a slip of paper at each side to test the seal"
                - "Vacuum the condenser coils and check the seals and frost @recurring(yearly)"
                - "Book a repair or start a replacement decision if a seal has failed"
            - name: The temperature danger zone in plain terms
              description: |-
                ## Purpose
                Most food poisoning bacteria multiply fastest between about 8°C and 63°C, and some can double every 20 minutes in a warm kitchen. Understanding that range, why chilling slows growth without killing anything and why some bacteria leave heat-proof toxins, explains every other rule in this area and makes it easier to judge situations no rule covers.

                ## Milestones
                1. The danger zone figures from your food safety agency written down.
                2. The difference between chilling, freezing and cooking explained in your own words.
                3. Three foods that are higher risk when left warm identified.
                4. One kitchen habit changed as a result.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page note in your own words explains the danger zone, toxins and spores, with one changed habit recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your food safety agency's guidance on temperature control"
                - "Write a half-page note on why cold slows bacteria but heat kills them"
                - "List three foods in your kitchen that are riskiest when left warm"
                - "Choose one habit to change and write it on the rules page"
            - name: Cooling everyday leftovers within two hours
              description: |-
                ## Purpose
                Stew left in the pot on the hob to cool overnight spends hours in the danger zone, and that is how many home outbreaks start. Learning to cool leftovers quickly, in shallow containers, split into portions and into the fridge within one to two hours, makes leftovers a safe second meal rather than a gamble.

                ## Milestones
                1. Your agency's cooling time limit written on the rules page.
                2. Shallow containers in the kitchen for cooling.
                3. Large pots divided and cooled in a cold water bath when needed.
                4. Leftovers dated and eaten within your agency's window, commonly two to four days.

                ## Notes
                Putting warm food in the fridge is better than leaving it out; it is a myth that it must be fully cold first, as long as the fridge is not overloaded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a month, every batch of leftovers has gone into the fridge within two hours of cooking, in shallow dated containers."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up your agency's limit for cooling cooked food and its leftovers window"
                - "Buy three or four shallow containers suitable for cooling"
                - "Divide the next big pot into portions and cool it in a sink of cold water"
                - "Date every leftover container before it goes in the fridge"
            - name: Reheating leftovers once, until steaming hot
              description: |-
                ## Purpose
                Reheated food is only safe if it gets hot all the way through, and microwaves heat unevenly, leaving cold centres. Making 'steaming hot throughout, checked with the probe, reheated only once' the standard for leftovers removes one of the commonest causes of home food poisoning.

                ## Milestones
                1. Your agency's reheating temperature added to the safe temperatures card.
                2. Microwave reheating done with a stir halfway and a rest before eating.
                3. The probe used to check the centre of reheated dishes for two weeks.
                4. A rule that food reheated once is not chilled and reheated again.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two weeks of reheated meals have been probe-checked at the centre, and the reheat-once rule is on the household rules page."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add your agency's reheating temperature to the safe temperatures card"
                - "Stir microwaved food halfway through and let it stand before eating"
                - "Probe the centre of reheated leftovers for the next two weeks"
                - "Add the reheat-once rule to the household rules page"
            - name: Safe defrosting for meat, poultry and fish
              description: |-
                ## Purpose
                Frozen chicken left on the counter all day thaws on the outside while the middle is still frozen, and the surface sits warm for hours. Knowing the three safe ways to defrost (in the fridge, in cold water changed every 30 minutes, or in the microwave and cooked straight away) and how long each takes stops the counter-top habit for good.

                ## Milestones
                1. The three safe defrosting methods and their limits written down.
                2. Rough fridge thawing times noted for a chicken, a joint and mince.
                3. A leak-proof tray kept for defrosting on the bottom shelf.
                4. A rule agreed on refreezing: raw food thawed in the fridge only, cooked food once cooked.

                ## Notes
                Some foods, such as many frozen vegetables and some fish fillets, are labelled to cook from frozen. Follow the pack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A defrosting note with methods, times and the refreezing rule is on the rules page, and no food has been thawed on the counter for a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your agency's guidance on defrosting and refreezing"
                - "Write approximate fridge thaw times for a whole chicken, a joint and mince"
                - "Set aside a deep tray for defrosting on the bottom shelf"
                - "Try the cold water method on the next pack of frozen fish"
            - name: Cooked rice and pasta handling
              description: |-
                ## Purpose
                Rice can carry spores of Bacillus cereus that survive cooking and, if the rice is left warm, produce a toxin that reheating does not destroy. Cooling cooked rice within about an hour, keeping it chilled and eating it within a day is a specific rule many confident cooks have never been told.

                ## Milestones
                1. The rice guidance from your food safety agency read and noted.
                2. Leftover rice spread on a tray to cool and chilled within an hour.
                3. Rice leftovers eaten within 24 hours and reheated only once.
                4. The same care applied to cooked pasta, couscous and grain salads.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The rice rule is written on the household rules page and leftover rice has been chilled within an hour on every occasion for a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your agency's advice on cooling and reheating rice"
                - "Spread the next batch of leftover rice on a tray to cool fast"
                - "Label leftover rice with the day it must be eaten by"
                - "Add the rice rule to the household rules page"
            - name: Order of work to prevent cross-contamination
              description: |-
                ## Purpose
                Most cross-contamination happens in the sequence of a busy cook: the raw chicken is cut, then the salad, then the tap and the phone are touched. Planning the order of work, with ready-to-eat food prepared first, raw food last and a clean-down in between, is a skill professional kitchens drill and home cooks rarely learn.

                ## Milestones
                1. A standard order of work written: ready-to-eat first, raw last.
                2. Raw chicken no longer washed under the tap, as splashes spread bacteria.
                3. Utensils and plates that touched raw meat never reused for cooked food.
                4. The routine practised on three full meals with a raw protein.

                ## Notes
                Washing raw chicken does not make it safer; cooking does. Splashes can travel well beyond the sink.
              priority: high
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written order of work is posted in the kitchen and has been followed on three consecutive meals involving raw meat or fish."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write your order of work with ready-to-eat preparation first and raw last"
                - "Stop washing raw poultry and tell the household why"
                - "Keep a clean plate ready for cooked meat so the raw plate is never reused"
                - "Follow the order on the next three meals with raw meat or fish"
            - name: Eggs, raw flour and sprouted seeds risks
              description: |-
                ## Purpose
                Raw cookie dough, homemade mayonnaise, runny eggs and alfalfa sprouts carry risks that surprise people, and the advice differs by country and by who is eating. Knowing which of these are low risk where you live, and which need care for children, pregnancy or older relatives, lets you keep favourite foods while avoiding the real hazards.

                ## Milestones
                1. Your agency's current advice on raw and lightly cooked eggs noted.
                2. The risk from raw flour and uncooked dough understood and shared with bakers in the house.
                3. Sprouted seeds and beansprouts cooked unless labelled ready to eat.
                4. Any extra precautions for vulnerable household members listed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note covers eggs, raw flour and sprouts as your agency advises, with precautions for vulnerable people listed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your agency's advice on runny and raw eggs where you live"
                - "Read why raw flour and uncooked dough can carry E. coli"
                - "Note which sprouts you buy are labelled ready to eat and which need cooking"
                - "Tell the household's bakers not to taste raw dough or batter"
            - name: Shellfish and raw fish handling at home
              description: |-
                ## Purpose
                Live mussels and clams, oysters and fish for sushi or ceviche each have their own storage and preparation rules, and mistakes are more serious than with most foods. Learning how to keep live shellfish alive, which ones to discard, and when fish needs to have been frozen first means you can cook seafood at home with confidence.

                ## Milestones
                1. Live shellfish stored in the fridge covered with a damp cloth, never sealed in water or plastic.
                2. The rule for discarding open shellfish before cooking and closed ones after written down.
                3. A source agreed for fish to be eaten raw, with your agency's freezing guidance checked.
                4. Seafood bought last on a shopping trip and chilled within 30 minutes.

                ## Notes
                Raw and lightly cooked shellfish are among the foods many health services advise pregnant women, young children and older people to avoid.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A seafood handling note covers storage, discard rules and raw fish sourcing, and one shellfish meal has been prepared following it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your agency's guidance on shellfish and fish eaten raw"
                - "Ask your fishmonger how they recommend storing live mussels or clams"
                - "Write the discard rules for shellfish before and after cooking"
                - "Prepare one shellfish meal following the note"
            - name: Cleaning versus disinfecting in the kitchen
              description: |-
                ## Purpose
                Spraying disinfectant on a greasy board does little, because disinfectants need a clean surface and a set contact time to work. Learning the two-stage method (clean with hot soapy water, then disinfect where raw food has been) and reading product labels for food-safe use and contact time makes every cleaning routine in this area actually effective.

                ## Milestones
                1. The two-stage clean then disinfect method written down.
                2. Products in the cupboard checked for food-surface suitability and contact time.
                3. Any product not suitable for food surfaces moved away from the kitchen.
                4. The method used after every raw meat preparation for two weeks.

                ## Notes
                Look for a recognised bactericidal standard on the label; in Europe, for example, BS EN 1276 or EN 13697. Never mix bleach with other cleaners.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every kitchen cleaning product has been checked for food-surface use and contact time, and the two-stage method is written on the rules page."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Gather every cleaning product used in the kitchen"
                - "Read each label for food-surface use, dilution and contact time"
                - "Move unsuitable products out of the food preparation area"
                - "Write the clean then disinfect method on the household rules page"
            - name: Online food hygiene certificate course
              description: |-
                ## Purpose
                Short food hygiene courses, of the kind required for café staff and many volunteer roles, cover temperatures, cross-contamination, cleaning and allergens in a few hours and give a recognised certificate. Taking it pulls the whole area together and is often asked for before you can help at a school fair, food bank or community kitchen.

                ## Milestones
                1. A recognised course chosen, typically a basic or entry-level food hygiene certificate.
                2. The course completed and the assessment passed.
                3. The certificate saved where you can find it for volunteering or work.
                4. Three things learned that changed your home kitchen written down.

                ## Notes
                Start from the **Course** template. Many employers and organisers ask for the certificate to be refreshed every three years.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recognised food hygiene certificate has been passed and saved, with three resulting changes to the home kitchen recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Compare two or three recognised online food hygiene courses"
                - "Book the course and block three hours to complete it"
                - "Save the certificate as a PDF with your documents"
                - "Write the three things you will change at home"
            - name: Chopping board material and replacement decision
              description: |-
                ## Purpose
                Wood, plastic, bamboo and composite boards each have trade-offs in how they clean, whether they go in the dishwasher and how quickly they score. Choosing deliberately, and setting a rule for when a board is retired, ends the cycle of buying another cheap board and keeping the old, grooved ones in use.

                ## Milestones
                1. The pros and cons of wood, plastic and composite boards compared.
                2. A material chosen for raw meat and one for ready-to-eat food.
                3. A retirement rule set, such as deep grooves that a brush cannot clean.
                4. Boards bought and old ones recycled or used for non-food jobs.

                ## Notes
                Start from the **Purchase decision** template. Plastic boards that fit your dishwasher make the raw meat board easy to sanitise.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on board materials and a retirement rule, with matching boards bought and worn ones removed from food use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare wood, plastic and composite boards on cleaning and wear"
                - "Check which board sizes fit your dishwasher"
                - "Write a rule for when a board must be retired"
                - "Buy the chosen boards and remove the worn ones from food use"
            - name: Repair or replace a fridge that runs warm
              description: |-
                ## Purpose
                When the weekly log shows the fridge above 5°C even on the coldest setting, every chilled item is being stored at a risk. Deciding quickly between a seal or thermostat repair and a replacement, with temporary measures in the meantime, avoids weeks of uncertain food safety.

                ## Milestones
                1. Two weeks of readings showing the fault documented.
                2. Seals, coils, overloading and ventilation ruled out as causes.
                3. A repair quote compared with the cost and running cost of a new fridge.
                4. The decision made and temporary measures used until it is fixed.

                ## Notes
                Renters with a landlord-supplied fridge should report the fault in writing with the readings; a fridge that cannot hold a safe temperature is a reasonable repair request.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A repair or replace decision is recorded with readings and quotes, and the fridge is back at 5°C or below within a month of the fault."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull two weeks of readings from the temperature log"
                - "Check the seals, coils and space around the fridge for simple causes"
                - "Get a repair quote and price a comparable new fridge"
                - "Use a cool box with ice packs for high-risk food until it is fixed"
            - name: Pets and their food out of the preparation zone
              description: |-
                ## Purpose
                Raw pet food, pet bowls washed in the same sink, cats on worktops and litter trays near the kitchen all bring salmonella and other bacteria close to human food. Setting clear rules for where pets eat, where their food is prepared and where their bowls are washed protects the household without banishing the animals.

                ## Milestones
                1. Pet bowls and their washing moved away from the human dish sink, or washed separately after.
                2. Raw pet food stored sealed on the bottom shelf and prepared like raw meat.
                3. A rule on pets and worktops agreed and kept.
                4. Litter trays kept out of the kitchen.

                ## Notes
                Many health services advise extra care with raw pet food in homes with babies, pregnant women or people with weakened immunity.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Pet bowls, pet food preparation and litter have defined places away from human food preparation, written on the rules page."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a spot for pet bowls away from the food preparation area"
                - "Decide where pet bowls are washed and buy a separate brush"
                - "Store any raw pet food sealed on the bottom fridge shelf"
                - "Add the pet rules to the household food safety page"
            - name: Takeaway and delivery food leftovers rule
              description: |-
                ## Purpose
                Half a pizza or a curry left on the table after a late night is one of the commonest ways safe food becomes unsafe at home. Agreeing a household rule for delivered food (eat it, or chill it within two hours in a clean container, then reheat it properly) stops the 'breakfast pizza' gamble.

                ## Milestones
                1. A two-hour limit for takeaway food out of the fridge agreed.
                2. Clean containers used instead of the original foil trays for leftovers.
                3. Takeaway rice included in the one-day rice rule.
                4. The rule added to the household rules page.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A takeaway leftovers rule is on the household rules page and has been followed for every takeaway in a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Agree a two-hour limit for takeaway food left out"
                - "Keep clean containers handy for transferring takeaway leftovers"
                - "Apply the rice rule to takeaway rice"
                - "Write the takeaway rule on the household rules page"
            - name: Slow cooker and sous vide safety settings
              description: |-
                ## Purpose
                Low-temperature cooking is safe when the food reaches temperature quickly enough and is held long enough, and risky when it is not. Slow cookers should not be loaded with frozen meat and need dried red kidney beans boiled first, while sous vide relies on published time and temperature tables. Learning the rules for whichever you own avoids the specific hazards of gentle cooking.

                ## Milestones
                1. The manufacturer's safety guidance for your appliance read.
                2. A rule that meat goes into the slow cooker fully thawed.
                3. Dried kidney beans always boiled hard for at least ten minutes before slow cooking.
                4. For sous vide, a trusted time and temperature table chosen and followed.

                ## Notes
                Sous vide at lower temperatures is generally not advised for pregnant women, young children or people with weakened immunity.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written safety rules for your slow cooker or sous vide are kept with the appliance and followed on the next three uses."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the safety section of your slow cooker or sous vide manual"
                - "Write the thawed-meat and kidney bean rules on a card for the slow cooker"
                - "Pick one published sous vide time and temperature table to follow"
                - "Probe the next slow cooker meal to confirm it reaches temperature"
            - name: Buffet and party food time limits
              description: |-
                ## Purpose
                Party food often sits on the table for four or five hours, which is how a birthday buffet becomes the story of the weekend. Planning hot and cold holding, small serving batches and a clear time limit before food is replaced or thrown away keeps the party generous without the risk.

                ## Milestones
                1. Higher-risk dishes identified: cooked rice, meat, seafood, dairy and egg dishes.
                2. A serving plan with small platters topped up from the fridge or oven.
                3. A time limit agreed, such as two hours, for chilled food on the table.
                4. Hot food kept above 63°C or served and cleared promptly.
                5. Leftovers that sat out past the limit discarded, not saved.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A buffet has been served with a written holding plan, with nothing left out beyond the agreed time limit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the party dishes and mark the higher-risk ones"
                - "Plan small platters and a refill schedule from the fridge and oven"
                - "Set a phone timer for the table's two-hour limit"
                - "Discard any chilled food that sat out past the limit"
            - name: Picnic and day-out cool box plan
              description: |-
                ## Purpose
                Sandwiches, quiche, cold meats and dips can spend hours in a hot car boot on a summer day. A cool box packed straight from the fridge with frozen packs, a thermometer and a plan for what to eat first keeps a day out from ending with someone ill on the drive home.

                ## Milestones
                1. A cool box or insulated bag checked for seal and size.
                2. Enough ice packs frozen the night before.
                3. Food packed cold, straight from the fridge, with high-risk food at the bottom.
                4. Hand wipes and a bag for rubbish packed.
                5. Anything left warm by the end of the day thrown away.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A day out has been fed from a cool box that stayed cold, with leftovers that warmed up discarded rather than brought home."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the cool box seal and buy extra ice packs if needed"
                - "Freeze ice packs and a bottle of water the night before"
                - "Pack the cool box straight from the fridge with high-risk food at the bottom"
                - "Keep the cool box in the shade, not the car boot"
            - name: Defrosting and cooking a large bird for a feast
              description: |-
                ## Purpose
                A large frozen turkey or goose can take three or four days to thaw in the fridge, and a half-thawed bird is the classic route to an undercooked festive meal. Working back from the meal to the day it must come out of the freezer, and probing it before serving, makes the centrepiece safe as well as impressive.

                ## Milestones
                1. The bird's weight known and fridge defrost time worked out from your agency's guidance.
                2. Fridge space cleared for the bird on a deep tray on the bottom shelf.
                3. The bird fully thawed, with no ice crystals in the cavity, before cooking.
                4. The thickest part of the thigh probed to your agency's temperature before serving.
                5. Leftover meat off the bone and chilled within two hours of serving.

                ## Notes
                Roughly a day in the fridge for every 2 to 2.5 kg is a common guide, but check your agency's figure. Cook stuffing separately for a more even result.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A large bird has been thawed in the fridge to a written timetable, probed to the agency temperature and its leftovers chilled within two hours."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Weigh the bird and work out its fridge defrost time"
                - "Write the date it must move from freezer to fridge"
                - "Clear the bottom shelf and set a deep tray ready"
                - "Probe the thickest part of the thigh before carving"
            - name: Move-in kitchen deep clean for a new home
              description: |-
                ## Purpose
                A rented flat or newly bought house comes with someone else's fridge, oven and cupboards, cleaned to their standard, and sometimes with mould, pests or a failing fridge. A deep clean before you unpack food, with a fridge temperature check and a pest look, gives you a known starting point.

                ## Milestones
                1. Fridge, freezer, oven and cupboards emptied, cleaned and dried before unpacking.
                2. Fridge switched on and confirmed at 5°C or below before food goes in.
                3. Signs of pests, damp or mould photographed and reported if renting.
                4. Food unpacked into zones from day one.

                ## Notes
                Renters should include photos of any hygiene problems in the move-in inventory and send them to the landlord or agent in writing.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The kitchen has been deep cleaned and the fridge confirmed at a safe temperature before food was unpacked, with any problems reported in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Switch the fridge on and put a thermometer inside before anything else"
                - "Clean the fridge, freezer, oven and cupboards before unpacking food"
                - "Photograph any mould, damp or pest signs and send them to the landlord"
                - "Unpack food into its zones with raw meat on the bottom shelf"
            - name: Baby bottle and formula hygiene
              description: |-
                ## Purpose
                Babies are far more vulnerable to food poisoning, and powdered formula is not sterile, so bottle preparation has its own specific rules. Setting up a cleaning and sterilising routine and preparing formula exactly as your health service advises, often with water no cooler than 70°C, protects a baby through the months of bottle feeding.

                ## Milestones
                1. Your health service's guidance on sterilising bottles and making up formula read.
                2. A steriliser or sterilising method chosen and set up.
                3. A preparation routine written on a card by the kettle.
                4. Rules agreed for storing expressed breast milk and discarding unfinished feeds.
                5. Everyone who feeds the baby shown the routine.

                ## Notes
                Follow your own health service and the formula manufacturer exactly; do not change water temperature or quantities. Ask your midwife or health visitor if anything is unclear.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written bottle and formula routine from health service guidance is posted by the kettle and every carer has been shown it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's guidance on sterilising bottles and making formula"
                - "Write the preparation steps on a card next to the kettle"
                - "Show every person who feeds the baby how to make up a bottle"
                - "Descale the kettle and clean the steriliser @recurring(monthly:12)"
            - name: Teaching children the kitchen hygiene basics
              description: |-
                ## Purpose
                Children who learn hand washing, raw meat rules and why they should not lick raw cake batter carry those habits for life, and they help more safely in the kitchen now. A few short sessions pitched at their age turn the household rules into things they understand rather than things they are told.

                ## Milestones
                1. Three or four rules chosen that suit the child's age.
                2. Hand washing practised with a song or timer.
                3. The raw and ready-to-eat boards explained during a real cooking session.
                4. The child able to explain two rules back in their own words.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child who cooks can explain at least two kitchen hygiene rules and washes hands before helping without a reminder."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose three hygiene rules that suit each child's age"
                - "Practise a 20-second hand wash together with a timer or song"
                - "Cook one meal together and point out the raw and ready-to-eat boards"
                - "Ask each child to explain two rules back to you"
            - name: Lower-risk kitchen for someone with weakened immunity
              description: |-
                ## Purpose
                Chemotherapy, an organ transplant, some medicines and pregnancy all make listeria and other infections more dangerous. When someone in the household is in this position, their care team usually gives food safety advice, and turning it into specific kitchen rules (what to avoid, stricter leftover windows, thorough reheating) protects them while everyone else keeps eating normally.

                ## Milestones
                1. The care team or midwife asked for their written food safety advice.
                2. A list of foods to avoid or treat with extra care drawn up from that advice.
                3. Stricter rules for leftovers, chilled ready-to-eat food and reheating agreed.
                4. Everyone who cooks for the person given the list.

                ## Notes
                The advice depends on the condition and treatment, so follow the care team rather than general lists. This project organises their guidance; it does not replace it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of food precautions from the person's care team is on the fridge and has been shared with everyone who cooks for them."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the care team or midwife for their written food safety advice"
                - "Turn the advice into a list of foods to avoid and extra precautions"
                - "Agree a shorter leftovers window for the person's meals"
                - "Give the list to everyone who cooks for them"
            - name: Stomach bug in the house, containment and cleaning
              description: |-
                ## Purpose
                Norovirus and similar bugs spread through households fast, and alcohol hand gel does little against them. Knowing the plan before it happens (the sick person stays out of the kitchen until at least 48 hours after symptoms stop, a chlorine-based clean of hard surfaces, hot washes for cloths and bedding) can stop one case becoming four.

                ## Milestones
                1. A short containment plan written from your health service's advice.
                2. A chlorine-based cleaner suitable for the kitchen kept in stock.
                3. A rule that anyone who has been ill does not cook for others for 48 hours after symptoms stop.
                4. Soap and water hand washing, not gel, made the household rule while anyone is ill.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written stomach bug plan and a suitable chlorine-based cleaner are kept with the first aid supplies."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's advice on norovirus at home"
                - "Write a half-page containment plan for the kitchen and bathroom"
                - "Buy a chlorine-based cleaner and check it is safe for food surfaces once rinsed"
                - "Store the plan with the food poisoning card"
            - name: Shared kitchen hygiene agreement for housemates
              description: |-
                ## Purpose
                Five people sharing one fridge and one sink rarely agree on what clean means, and the person with the strictest standard ends up doing everything or giving up. A short written agreement on fridge zones, raw meat storage, the washing-up deadline and a weekly cleaning rota makes a shared kitchen safe without constant reminders.

                ## Milestones
                1. A house meeting held to agree four or five hygiene rules.
                2. Each person given a fridge shelf, with raw meat for everyone on the bottom.
                3. A washing-up deadline agreed, such as before bed.
                4. A weekly cleaning rota posted and kept for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written kitchen agreement is posted and four consecutive weekly rota cleans have been done by the person named."
                cadence: rolling
              tasks:
                - "Suggest a 20-minute house meeting about the kitchen"
                - "Agree fridge shelves, a raw meat shelf and a washing-up deadline"
                - "Post a weekly cleaning rota with names against each week"
                - "Do the rota clean of counters, hob and fridge handles @recurring(weekly:mon)"
            - name: Food hygiene when caring for someone at home
              description: |-
                ## Purpose
                Carers often prepare meals in someone else's kitchen, sometimes in a hurry between other tasks, for a person who may be older, frail or on medicines that affect immunity. Setting up a simple routine for that kitchen (hand washing before personal care and food, a fridge check, dated leftovers and safe reheating of delivered meals) protects them and you.

                ## Milestones
                1. The person's fridge temperature checked and a thermometer left in it.
                2. A hand washing routine between personal care and food preparation agreed.
                3. Delivered or batch-cooked meals labelled with dates and reheating instructions.
                4. Any texture-modified or special diet storage needs noted from their care plan.

                ## Notes
                If several carers or family members share the cooking, a page on the person's fridge with the rules keeps everyone consistent.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The cared-for person's fridge holds 5°C or below, and dated meals with reheating notes have been in place for four weeks."
                cadence: rolling
              tasks:
                - "Put a thermometer in the cared-for person's fridge and read it"
                - "Agree a hand washing routine between personal care and cooking"
                - "Label every meal you leave with the date and how to reheat it"
                - "Read their fridge thermometer and clear old meals on your visit @recurring(weekly:wed)"
            - name: Probe thermometer calibration check
              description: |-
                ## Purpose
                Probes that read two or three degrees out give false reassurance on exactly the foods where accuracy matters. Checking it in iced water, and in boiling water where you live near sea level, each quarter tells you whether to trust it, adjust it or replace it.

                ## Milestones
                1. The ice water method learned: crushed ice and water, probe in the middle, reading 0°C.
                2. The probe checked and the result recorded with the date.
                3. A tolerance set, such as within 1°C, beyond which the probe is recalibrated or replaced.
                4. The battery replaced before it fails.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly calibration readings are recorded in a year, each within the tolerance or followed by recalibration or replacement."
                cadence: cyclic
              tasks:
                - "Make a glass of crushed ice and water and let it stand for three minutes"
                - "Check the probe reads 0°C in iced water and log the result @recurring(quarterly)"
                - "Buy a spare battery for the probe thermometer"
            - name: Two-week fridge temperature logger study
              description: |-
                ## Purpose
                A weekly reading is a snapshot, and fridges can spend hours warm after a big shop, a long door opening or a hot afternoon without anyone seeing it. A cheap data logger recording every few minutes for two weeks shows the real pattern and tells you whether to rearrange, reset or replace.

                ## Milestones
                1. A temperature data logger bought or borrowed and placed on the middle shelf.
                2. Two weeks of readings exported to a graph.
                3. Spikes matched to events such as shopping, cooking for a crowd or hot days.
                4. One change made, such as cooling food before loading or moving the fridge from a heat source.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-week temperature graph exists with the main spikes explained and one change made in response."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Buy or borrow a small temperature data logger"
                - "Place it on the middle shelf and note shopping days for two weeks"
                - "Export the readings and mark when the fridge ran above 5°C"
                - "Make one change in response and recheck with the logger"
            - name: Written food safety plan for a serious home kitchen
              description: |-
                ## Purpose
                Food businesses run on a hazard-based plan that names each step where food could become unsafe, the control at that step and the record that proves it. Writing a light version for a home that cooks a lot, entertains often or feeds vulnerable people turns every routine in this area into one coherent system you can hand to anyone.

                ## Milestones
                1. Each step from shopping to serving listed with its main hazard.
                2. A control and a limit set for each, such as fridge at 5°C or below.
                3. The record that shows each control works named, such as the temperature log.
                4. The plan reviewed once a year and after any illness in the house.

                ## Notes
                Many food safety agencies publish a simplified plan template for small caterers, which adapts well to a home.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written food safety plan covers every step from shopping to serving with a control, a limit and a record for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a simplified food safety plan template from a food safety agency"
                - "List every step from shopping to serving and its main hazard"
                - "Write a control, a limit and a record for each step"
                - "Review the plan against the year's logs and any illness @recurring(yearly)"
            - name: Registering a home kitchen for selling food
              description: |-
                ## Purpose
                Selling cakes, jams or meals from home usually means registering with your local authority before you start, often weeks ahead, and then being open to inspection like any other food business. Getting the registration, the written food safety plan, allergen labelling and records in place first means a hygiene inspection becomes a formality rather than a shock.

                ## Milestones
                1. Your local authority's rules for home food businesses read, including how far ahead to register.
                2. The registration submitted before any food is sold.
                3. A written food safety plan with cleaning, temperature and supplier records in use.
                4. Allergen information prepared for every product.
                5. The kitchen ready for an inspection visit.

                ## Notes
                In the UK, for example, registration is required at least 28 days before trading. Rules on what can be sold from a home kitchen vary widely, so check locally before buying stock.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The home kitchen is registered with the local authority before trading, with a food safety plan, records and allergen information in use."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read your local authority's guidance on running a food business from home"
                - "Submit the food business registration before you sell anything"
                - "Set up cleaning, temperature and supplier records for the business"
                - "Write allergen information for each product you plan to sell"
            - name: Food safety lead for a community kitchen or meal
              description: |-
                ## Purpose
                Community lunches, food bank kitchens, church suppers and school fairs are often run by willing volunteers with very different standards, cooking in large quantities. Acting as the food safety lead, with a briefing, a temperature log and clear rules on donated and leftover food, protects guests who may be among the most vulnerable in the community.

                ## Milestones
                1. The organiser's existing rules and any certificate requirements checked.
                2. A one-page volunteer briefing on hand washing, raw food, cooling and allergens.
                3. Cooking, hot holding and fridge temperatures logged at each session.
                4. A rule for accepting donated food and handling leftovers agreed with the organiser.
                5. A short review after the first session with any changes written down.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A volunteer briefing and a temperature log are in use at the community kitchen, with a donated food and leftovers rule agreed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the organiser what food safety rules and certificates already apply"
                - "Write a one-page briefing for volunteers on hygiene and allergens"
                - "Set up a temperature log for cooking, hot holding and the fridge"
                - "Agree a rule for donated food and leftovers with the organiser"
                - "Hold a short review with volunteers after the first session"
---

# Food Hygiene & Safe Storage

This area is for anyone who cooks for themselves or others and wants to be sure the kitchen is not quietly making people ill. It starts with the foundations (a measured fridge, raw food on the bottom shelf, a probe thermometer, a hand-washing routine and a card for when food poisoning strikes), then the weekly and monthly routines that keep the kitchen clean, the skills of cooling, defrosting and reheating, the decisions about boards, fridges and slow cookers, the occasions that stretch the rules, versions for babies, children, carers, housemates and anyone with weakened immunity, and finally the work of a cook who runs a written food safety plan or feeds the public.

What repeats is a nightly close-down, a Thursday fridge temperature check, a Saturday high-touch surface clean, monthly fridge, dishwasher, appliance, recall and pest rounds on varied days, a quarterly self-inspection and thermometer check, and a yearly look at the fridge seals and your household rules. The Metrics log, Habit tracker, Household chores, Operational checklist, Purchase decision and Course templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
