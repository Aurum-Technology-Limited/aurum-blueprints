---
id: food-nutrition.batch-cooking-freezer-meals
name: Batch Cooking & Freezer Meals
description: "A freezer you can see into, meals that survive freezing and reheating, a monthly cook day, a weekly pull plan, and stashes ready for a new baby, an operation or a hard week."
category: personal
version: 1.0.0
tags: [food-nutrition, batch-cooking-freezer-meals, parent, everyone, freezer, make-ahead, new-baby, meal-stash]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - weekly-meal-plan
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Batch Cooking & Freezer Meals
          description: "Cooking in large batches and building a freezer stash of ready meals for busy weeks, new babies or times of illness."
          projects:
            - name: Freezer clear-out and first stock count
              description: |-
                ## Purpose
                Most freezers hold a layer of unlabelled tubs, half bags of peas and a lasagne nobody remembers making, and that clutter hides both the space and the food you already have. Emptying it once, binning what cannot be identified and counting what is left gives you a true starting point before a single batch is cooked.

                ## Milestones
                1. Every drawer and shelf emptied into cool bags and the freezer wiped out.
                2. Anything unidentifiable or visibly freezer burnt thrown away.
                3. The remaining food sorted into ready meals, components, raw ingredients and treats.
                4. A dated count of each group written down and the food returned in sorted order.

                ## Notes
                Do this the evening before a shopping trip, when the freezer is at its emptiest, and have two cool bags with ice packs ready so nothing starts to thaw.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The freezer has been fully emptied and restocked in groups, with a dated written count of ready meals, components and raw ingredients."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick an evening this week when the freezer will be at its emptiest"
                - "Empty each drawer into cool bags and bin anything you cannot identify"
                - "Sort what is left into ready meals, components, raw ingredients and treats"
                - "Write a dated count of each group and stick it inside a cupboard door"
            - name: Measuring how many meals your freezer holds
              description: |-
                ## Purpose
                Twenty family portions from a cook day are useless if the freezer can only take twelve once the peas and ice lollies are in. Measuring the usable space in litres and testing it with your actual containers tells you the real ceiling for a cook day.

                ## Milestones
                1. The usable volume of each drawer or shelf measured or read from the manual.
                2. Space already committed to staples such as frozen veg, bread and ice packs subtracted.
                3. One full set of your chosen containers test packed into a single drawer.
                4. A number written down: the most four-portion meals the freezer can hold at once.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written figure for the maximum number of family-size meals the freezer holds alongside its everyday staples."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the freezer's capacity in litres from the manual or the model number"
                - "Measure each drawer's width, depth and height with a tape"
                - "Test pack one drawer with filled containers or bags of water"
                - "Write the maximum number of meals on the freezer count sheet"
            - name: Freezer container system that stacks
              description: |-
                ## Purpose
                Mixed takeaway tubs, odd lids and round pots waste a third of the freezer and make every search a dig. Settling on two or three container sizes that stack, survive the freezer and go into the oven or microwave, and buying enough for a full cook day, is the single biggest upgrade to a stash.

                ## Milestones
                1. The meals you freeze most often listed with the portion size each needs.
                2. Three container options compared on stacking, lid fit, reheating method and price.
                3. A set chosen and bought in enough quantity for one full cook day.
                4. Odd tubs and lidless containers recycled or moved out of the kitchen.

                ## Notes
                Start from the **Purchase decision** template. Rectangular beats round for space, and foil trays with card lids suit meals you plan to give away.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One container system in at most three sizes is chosen and enough for a full cook day is in the cupboard, with mismatched tubs cleared out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the five meals you freeze most and the portion size each needs"
                - "Compare three container sets on stacking, lids, reheating and price"
                - "Buy enough containers in your chosen sizes for one full cook day"
                - "Recycle every container that has lost its lid"
                - "Check lids for cracks and replace the damaged ones @recurring(yearly)"
            - name: Label standard for every frozen meal
              description: |-
                ## Purpose
                Frozen chilli and frozen bolognese look the same through a misted lid, and nobody remembers whether the curry is from March or May. Agreeing five things that go on every label, and keeping the kit beside the freezer, means anyone in the house can pick, defrost and reheat a meal without asking.

                ## Milestones
                1. A label format agreed: dish, date frozen, portions, allergens and reheat method.
                2. Freezer-proof labels or tape and a permanent marker kept in one spot by the freezer.
                3. Every meal currently in the freezer relabelled to the standard.
                4. A short note on the freezer door showing an example label for the rest of the household.

                ## Notes
                Write on the lid and the side, so the meal is identifiable whether it is stacked or stood up in a drawer.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every meal in the freezer carries a label showing dish, date frozen, portions, allergens and reheat method."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Buy freezer-proof labels and two permanent markers"
                - "Write an example label showing dish, date, portions, allergens and reheat method"
                - "Relabel every meal already in the freezer to the new format"
                - "Tape the example label to the freezer door for the household"
            - name: Ten freezer-friendly meals the household already eats
              description: |-
                ## Purpose
                Batch cooking fails fastest when the stash is full of worthy recipes nobody fancies on a Tuesday. Starting from the meals your family already asks for, and checking each one freezes and reheats well, gives a repertoire people will actually defrost.

                ## Milestones
                1. Twenty meals the household eats regularly listed from memory and recent shopping.
                2. Each meal marked as freezes well, freezes with changes, or does not freeze.
                3. A final list of ten, with at least two that suit children and two that are vegetarian.
                4. The list saved where the household plans its week.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of ten household favourites confirmed as suitable for freezing, including at least two vegetarian meals."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask everyone at dinner to name three meals they would happily eat again"
                - "Mark each meal as freezes well, needs changes or does not freeze"
                - "Choose the final ten, including two vegetarian and two child favourites"
                - "Save the list next to the household's weekly plan"
            - name: First two-hour batch session
              description: |-
                ## Purpose
                Starting with a whole Saturday of cooking is a big leap and often ends in a sink full of pans and a vow never again. Two focused hours making two recipes at triple quantity proves the routine works in your kitchen and puts about a dozen portions in the freezer.

                ## Milestones
                1. Two recipes from the household list chosen, one hob-based and one oven-based.
                2. Ingredients bought for three times the usual quantity of each.
                3. Both recipes cooked, cooled, portioned and labelled within the two hours.
                4. A note written on what took longest and what to change next time.

                ## Notes
                Pick one meal that simmers on the hob and one that bakes in the oven, so the two use different equipment and can run side by side.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least ten labelled portions from two recipes are in the freezer, with a written note on what to change next time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one hob recipe and one oven recipe from the household list"
                - "Write a shopping list for three times the usual quantity"
                - "Block two hours on a weekend morning for the session"
                - "Write three lines on what slowed you down and what to change"
            - name: Freezer meal list on the door
              description: |-
                ## Purpose
                Food that cannot be seen does not get eaten, and the classic failure is a full freezer and a takeaway on the doorstep. A running list on the freezer door, updated as meals go in and come out, turns the stash into a menu anyone can read at five o'clock.

                ## Milestones
                1. A wipeable board or printed sheet fixed to the freezer door or beside it.
                2. Every ready meal written on it with portions and the date frozen.
                3. A rule agreed that whoever takes a meal crosses it off.
                4. The list matching the freezer contents at a spot check two weeks later.

                ## Notes
                A shared phone note works too, but a physical list on the door is the one tired people actually read.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of every ready meal with portions and date is on or beside the freezer, and a spot check shows it matches the contents."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Fix a wipeable board or printed sheet to the freezer door"
                - "Write every ready meal on it with portions and date frozen"
                - "Agree at dinner that whoever takes a meal crosses it off"
                - "Spot check the list against the freezer two weeks from now"
            - name: Cooling and freezing large batches safely
              description: |-
                ## Purpose
                A ten-litre pot of stew holds its heat for hours, and leaving it on the hob overnight to cool is the most common batch cooking mistake. Learning your food safety agency's guidance on cooling, portioning and freezing quickly, and setting your kitchen up to follow it, protects everyone who eats from the stash.

                ## Milestones
                1. Your national food safety agency's guidance on cooling and freezing cooked food read and saved.
                2. A method for cooling big batches fast chosen, such as shallow trays or splitting into portions.
                3. The freezer temperature checked with a thermometer against the recommended setting.
                4. A short cooling rule written on the batch day run sheet.

                ## Notes
                This organises official guidance; it does not replace it. Where your agency gives a time limit for cooling, use theirs.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The food safety agency's cooling guidance is saved, the freezer temperature has been checked, and a cooling rule is written on the run sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your food safety agency's guidance on cooling and freezing cooked food"
                - "Buy a freezer thermometer and check the temperature after 24 hours"
                - "Choose how you will cool big batches quickly, such as shallow trays"
                - "Write the cooling rule at the top of your batch day run sheet"
            - name: Cost per portion baseline
              description: |-
                ## Purpose
                Batch cooking is often sold as cheaper, but bought containers, extra electricity and a freezer full of steak can quietly cancel the saving. Costing three of your batch meals per portion, against the takeaway or ready meal they replace, tells you where the money is really saved.

                ## Milestones
                1. Three regular batch recipes costed from receipts or online prices.
                2. Each divided by the number of portions it actually produced.
                3. The ready meal or takeaway it replaces priced per portion alongside.
                4. The cheapest and most expensive meals per portion noted for future planning.

                ## Notes
                Start from the **Metrics log** template. Count what you actually got out of the pot, not what the recipe promised.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A log shows cost per portion for three batch meals beside the price of the ready meal or takeaway each replaces."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Keep the receipts from your next batch cooking shop"
                - "Cost three recipes and divide by the portions each produced"
                - "Price the takeaway or ready meal each one replaces"
                - "Recalculate cost per portion for your top three meals @recurring(yearly)"
            - name: Monthly batch cooking day
              description: |-
                ## Purpose
                Stashes only stay full if refilling them is on the calendar rather than left to good intentions. One fixed half day a month, with recipes chosen a week ahead, is enough for most families to keep fifteen to twenty meals in reserve.

                ## Milestones
                1. A recurring half day each month blocked in the household calendar.
                2. Recipes and a scaled shopping list settled a week before each session.
                3. Three monthly sessions completed back to back.
                4. Each session adding at least twelve labelled portions to the freezer.

                ## Notes
                Pick a day that already tends to be quiet, and protect it the way you would a dentist appointment.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly cook days completed, each adding at least twelve labelled portions to the freezer."
                cadence: rolling
              tasks:
                - "Choose a recurring half day each month and block it in the calendar"
                - "Pick next month's cook day recipes and write the scaled shopping list @recurring(monthly:2)"
                - "Run the batch cooking session and update the freezer list @recurring(monthly:9)"
            - name: Cook double, freeze half on weeknights
              description: |-
                ## Purpose
                Doubling a weeknight dinner costs about ten minutes more than cooking it once and needs no extra washing up. Making it a habit on one fixed evening a week builds the stash slowly without ever giving up a weekend.

                ## Milestones
                1. One weeknight chosen when a freezable meal is usually cooked.
                2. Four doubled dinners in a row with the extra half frozen and labelled.
                3. The extra containers kept ready on that evening so portioning is quick.
                4. Eight weeks of doubling done, adding around sixteen portions to the stash.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks in which one weeknight dinner was doubled and the extra half frozen and labelled."
                cadence: rolling
              tasks:
                - "Choose the weeknight when you usually cook a freezable meal"
                - "Set out containers and labels before you start cooking that night"
                - "Double that night's dinner and freeze the second half @recurring(weekly:wed)"
            - name: Sunday freezer pull and defrost plan
              description: |-
                ## Purpose
                Freezer meals save effort only when they come out at the right moment, and most frozen meals need a night in the fridge first. Ten minutes on Sunday matching the week's busy nights to specific freezer meals turns the stash into dinners rather than an insurance policy nobody claims.

                ## Milestones
                1. The week's busiest evenings identified from the calendar.
                2. A freezer meal assigned to each of those evenings, oldest first.
                3. Each meal's defrost night written on the plan.
                4. Six weeks of Sunday pulls with no freezer meal forgotten in the fridge.

                ## Notes
                Start from the **Weekly meal plan** template and mark freezer nights with an F. If fewer than eight meals remain, book the next top-up session before you close the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive Sundays where freezer meals were assigned to busy nights with defrost nights written down."
                cadence: rolling
              tasks:
                - "Mark this week's busiest evenings in the calendar"
                - "Agree a minimum stash level that triggers an extra cook session"
                - "Match busy nights to freezer meals and note each defrost night @recurring(weekly:sun)"
            - name: Overnight defrost habit
              description: |-
                ## Purpose
                Most failed freezer dinners fail at four in the afternoon, when the meal is still a brick and the only option is a hurried microwave defrost. Moving tomorrow's meal to the fridge at the same time every evening makes thawing automatic.

                ## Milestones
                1. A fixed evening moment chosen, such as clearing the dinner table.
                2. A tray or shelf in the fridge kept for defrosting meals.
                3. Thirty evenings in a row checked, whether or not a meal was needed.
                4. Fewer than two emergency microwave defrosts in that month.

                ## Notes
                Defrost on a tray on the lowest shelf so drips cannot reach anything below.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty consecutive evenings of checking the plan and moving any needed meal to the fridge, with no more than two emergency defrosts."
                cadence: rolling
              tasks:
                - "Clear a lipped tray on the bottom fridge shelf for defrosting"
                - "Tie the check to a moment that already happens, like clearing the table"
                - "Move tomorrow's freezer meal to the fridge tray @recurring(daily)"
            - name: Monthly freezer recount
              description: |-
                ## Purpose
                Lists drift: a meal gets eaten without being crossed off, or a gift of soup goes in unrecorded. A ten-minute recount once a month keeps the door list honest, surfaces anything older than three months and shows whether the stash is growing or shrinking.

                ## Milestones
                1. A fixed day each month set aside for the recount.
                2. The door list corrected against what is actually in the freezer.
                3. Anything frozen more than three months ago moved to the front.
                4. A monthly total of ready meals recorded to show the trend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly recounts recorded, each with a corrected door list and a total of ready meals."
                cadence: rolling
              tasks:
                - "Start a simple tally of ready meals by month"
                - "Move anything frozen over three months ago to the front"
                - "Recount the freezer, correct the door list and record the total @recurring(monthly:24)"
            - name: Quarterly freezer eat-down week
              description: |-
                ## Purpose
                Even a well-run stash gathers odd single portions, half tubs of sauce and the experiment nobody loved. One week every quarter where dinners come only from the freezer clears the backlog, frees space and shows which meals people genuinely enjoy.

                ## Milestones
                1. One week each quarter marked in the calendar as an eat-down week.
                2. Dinners for that week planned only from what is already frozen.
                3. Odd portions combined into mix-and-match nights.
                4. Meals nobody finished noted and dropped from future cook days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four eat-down weeks completed in a year, each ending with the freezer below half full and a note of meals to drop."
                cadence: cyclic
              tasks:
                - "Choose a week in each quarter with few social plans"
                - "Plan seven dinners using only food already in the freezer"
                - "Run a freezer-only dinner week and note the meals nobody finished @recurring(quarterly)"
            - name: Bulk protein buy and portioning
              description: |-
                ## Purpose
                Family packs of mince, chicken thighs or fish are far cheaper per kilo, but they go off in the fridge if they are not dealt with the day they arrive. A monthly routine of buying in bulk and portioning raw into recipe-sized bags gives cheaper protein and faster cook days.

                ## Milestones
                1. The three proteins you use most and the quantity per recipe listed.
                2. A supplier chosen for bulk packs at a better price per kilo.
                3. Raw protein portioned into flat, labelled, recipe-sized bags on the day of purchase.
                4. Three months of bulk buys with nothing spoiled before freezing.

                ## Notes
                Keep raw protein on its own drawer or the lowest shelf, away from ready meals, and wash boards and hands between raw and cooked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly bulk buys portioned into labelled recipe-sized bags on the day of purchase."
                cadence: rolling
              tasks:
                - "List the three proteins you use most and the weight each recipe needs"
                - "Compare price per kilo for bulk packs at two shops or a butcher"
                - "Buy bulk protein and portion it into labelled recipe bags that day @recurring(monthly:18)"
            - name: Building-block components in the freezer
              description: |-
                ## Purpose
                Not every busy night wants a complete frozen meal, and a drawer of cooked rice, shredded chicken, tomato base and caramelised onions lets you assemble a fresh-tasting dinner in fifteen minutes. Keeping six components in stock gives far more variety than the same ready meals on rotation.

                ## Milestones
                1. Six components chosen that appear in at least three regular dinners each.
                2. A dedicated drawer or basket set aside for components.
                3. Each component frozen in recipe-sized portions with its uses written on the label.
                4. A month in which components were used for at least four dinners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six components are stocked in recipe-sized portions and at least four dinners a month are built from them."
                cadence: rolling
              tasks:
                - "List six components that turn up in at least three of your regular dinners"
                - "Clear one drawer or basket just for components"
                - "Make and freeze one or two components that are running low @recurring(monthly:16)"
                - "Write three meal ideas for each component on the freezer list"
            - name: Batch day run sheet
              description: |-
                ## Purpose
                Without an order of work a cook day turns into four pans competing for the same hob and the oven sitting empty for an hour. A one-page run sheet listing prep, cooking order, cooling and clean-down in sequence cuts a session by about a third and makes it repeatable.

                ## Milestones
                1. A standard sequence written: clear and prep, oven dishes first, hob dishes, cool, portion, label, clean.
                2. The run sheet tested on a real cook day with actual times noted.
                3. Bottlenecks such as oven space or one large pot adjusted for.
                4. A final version printed and kept with the containers.

                ## Notes
                Start from the **Operational checklist** template. Chop all onions for every recipe at once: grouping identical prep is where most of the time is saved.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A printed run sheet with timed steps has been used on at least one cook day and revised from the actual times."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the batch day steps in order from clearing the worktop to clean-down"
                - "Group identical prep jobs, such as chopping onions, into single steps"
                - "Time each step on your next cook day"
                - "Revise the run sheet and keep a printed copy with the containers"
            - name: Annual freezer defrost and deep clean
              description: |-
                ## Purpose
                Ice build-up steals space, makes the freezer work harder and stops drawers from closing properly, which lets warm air in. A planned defrost once a year, timed for when the stash is at its lowest, keeps the freezer efficient without risking a full load of meals.

                ## Milestones
                1. The manufacturer's defrost and cleaning instructions found and saved.
                2. A defrost date chosen just after an eat-down week, when the freezer is nearly empty.
                3. Remaining food kept frozen in cool bags or a neighbour's freezer during the defrost.
                4. The door seal checked and the freezer back at temperature before restocking.

                ## Notes
                Never chip ice with a knife or sharp tool: punctured cooling pipes end the freezer's life.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One full defrost and clean is completed each year with the seal checked and no food lost."
                cadence: cyclic
              tasks:
                - "Find the defrost instructions for your freezer model"
                - "Line up cool bags or a neighbour's freezer for the day"
                - "Defrost, clean and check the seal straight after an eat-down week @recurring(yearly)"
            - name: What freezes well and what does not
              description: |-
                ## Purpose
                Boiled potatoes go grainy, cream sauces can split, and cooked pasta in sauce turns to mush, while most stews, curries, soups and chillis improve. Knowing the rules for each ingredient group saves a lot of disappointing dinners and tells you which recipes to adapt before freezing.

                ## Milestones
                1. A list of ingredients that freeze poorly in your usual meals, with the reason for each.
                2. A swap or workaround noted for each, such as mashing potato rather than boiling it.
                3. Three household recipes adapted to freeze better.
                4. The list kept with the batch day run sheet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of poor freezers with a workaround for each, and three household recipes adapted and tested."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a reliable guide on which foods freeze well and which do not"
                - "List the poor freezers that appear in your regular meals"
                - "Write a workaround beside each, such as adding cream after reheating"
                - "Adapt and test three household recipes using the workarounds"
            - name: Scaling recipes up for batch volumes
              description: |-
                ## Purpose
                Quadrupling a recipe is not as simple as multiplying everything by four: liquids reduce differently in a bigger pot, spice and salt can overwhelm, and browning ten portions of meat at once makes it steam. Learning how to scale well is what separates a great batch from a large grey one.

                ## Milestones
                1. One favourite recipe scaled to four times with seasoning added in stages.
                2. Meat browned in batches and the difference in flavour noted.
                3. Liquid quantities adjusted for the larger pot and the change recorded.
                4. Scaled versions of three recipes written with the corrected quantities.

                ## Notes
                Start spices and salt at about three quarters of the multiplied amount and taste before adding the rest.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three household recipes have tested scaled versions written down with corrected seasoning and liquid quantities."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose one favourite recipe to scale to four times"
                - "Brown the meat in three or four batches rather than all at once"
                - "Add seasoning in stages and write down the final amounts"
                - "Write scaled versions of two more recipes using what you learned"
            - name: Open freezing and flat-bag freezing
              description: |-
                ## Purpose
                Meatballs frozen in a bag fuse into one lump, and a tub of soup takes all day to thaw. Open freezing on a tray before bagging, and freezing sauces flat in bags, means you can take out six meatballs or one portion of sauce and stack bags like files in a drawer.

                ## Milestones
                1. One batch of something small, such as meatballs or burritos, open frozen on a lined tray then bagged.
                2. One soup or sauce frozen flat in labelled bags and filed upright.
                3. Thaw times of a flat bag and a tub of the same food compared.
                4. Both techniques added to the batch day run sheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both open freezing and flat-bag freezing have been used on real batches and added to the run sheet with notes on thaw time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Line a tray that fits flat in the freezer with baking paper"
                - "Open freeze one batch of meatballs or burritos before bagging"
                - "Freeze one sauce flat in bags and file them upright once solid"
                - "Note how long a flat bag takes to thaw against a tub"
            - name: Keeping freezer burn away
              description: |-
                ## Purpose
                Grey, dry patches and an off taste on frozen food come from air reaching the surface, and they waste meals that took hours to cook. A few habits around headspace, wrapping and removing air keep food tasting right for months rather than weeks.

                ## Milestones
                1. The causes of freezer burn understood: air contact, temperature swings and long storage.
                2. A wrapping method chosen for each container type you use.
                3. Air pressed or sucked out of every bag on the next cook day.
                4. No freezer burnt meals found at the next monthly recount.

                ## Notes
                Leave a little headspace in rigid tubs for liquids to expand, but press bags flat to remove air.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A wrapping method is set for each container type and the next monthly recount finds no freezer burnt meals."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the freezer for any meals already showing freezer burn"
                - "Pick a wrapping method for tubs, bags and foil trays"
                - "Press the air out of every bag on your next cook day"
                - "Note at the next recount whether any meal shows freezer burn"
            - name: Reheating from frozen so it tastes fresh
              description: |-
                ## Purpose
                Even a carefully made lasagne can come out soggy in the middle and burnt at the edges if it goes into a hot oven straight from the freezer. Working out the best reheat method and time for each of your regular meals, and writing it on the label, is the step most batch cooks skip.

                ## Milestones
                1. Reheat guidance from your food safety agency saved, including how to check food is piping hot.
                2. Each of your ten regular freezer meals reheated once by its best method.
                3. A reheat time and method recorded for each.
                4. Those methods added to the labels and the recipe list.

                ## Notes
                Reheat once only, and check the centre is steaming hot all the way through before serving.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each of the ten regular freezer meals has a tested reheat method and time written on its label and in the recipe list."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Save your food safety agency's advice on reheating cooked food"
                - "Note the reheat method and time each time you serve a freezer meal"
                - "Add the tested method to that recipe's label wording"
                - "Buy a food probe thermometer if you do not have one"
            - name: Cooking slightly under for the freezer
              description: |-
                ## Purpose
                A meal that will be reheated is effectively cooked twice, so vegetables and pasta that were perfect on the day come back soft. Pulling dishes a few minutes early, and leaving toppings and fresh herbs until serving, gives frozen meals the texture of a fresh one.

                ## Milestones
                1. The meals in your list most prone to going soft identified.
                2. Pasta, rice and green vegetables cooked a few minutes short on the next cook day.
                3. Toppings such as cheese, crumbs and herbs left off and noted on the label.
                4. One side by side tasting of a fully cooked and an undercooked batch.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Undercooking and late toppings have been applied to at least three freezer meals and compared in one tasting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark which of your freezer meals tend to come back soft"
                - "Cook pasta and green vegetables three minutes short next cook day"
                - "Write add cheese or add herbs at serving on the relevant labels"
                - "Taste a fully cooked and an undercooked portion side by side"
            - name: Slow cooker and pressure cooker dump bags
              description: |-
                ## Purpose
                Dump bags are raw ingredients bagged and frozen together, ready to tip into a slow cooker in the morning or a pressure cooker at six. They take less effort on cook day than finished meals, suit busy parents who leave early, and taste freshly cooked because they are.

                ## Milestones
                1. Four dump bag recipes chosen that suit your slow cooker or pressure cooker.
                2. A prep session where all four are bagged, labelled and frozen flat.
                3. Each one cooked from frozen or thawed, with timing and results noted.
                4. The two best added to the regular batch rotation.

                ## Notes
                Check your appliance manual on cooking from frozen: some slow cookers need ingredients thawed first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four dump bag recipes have been prepped, cooked and rated, with the best two added to the rotation."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check your appliance manual on cooking from frozen"
                - "Choose four dump bag recipes that suit your cooker"
                - "Bag, label and freeze all four flat in one session"
                - "Rate each one after cooking and keep the best two"
            - name: Freezer breakfasts for rushed mornings
              description: |-
                ## Purpose
                School and work mornings are when the toaster and a cereal bar win by default. A drawer of breakfast burritos, egg muffins, pancakes and overnight oat portions that reheat in two minutes means a hot breakfast happens even on the worst Monday.

                ## Milestones
                1. Three breakfast recipes chosen that the household will eat and that reheat in under three minutes.
                2. A breakfast batch made, open frozen and bagged in single portions.
                3. Reheat instructions written for whoever gets up first.
                4. Two weeks of mornings where freezer breakfasts were used at least three times a week.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A drawer of at least twelve single breakfast portions is stocked and used three mornings a week for two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the household which three breakfasts they would eat reheated"
                - "Make one batch of each and open freeze in single portions"
                - "Write two-minute reheat steps on a card by the microwave"
                - "Count how many mornings the drawer was used over two weeks"
            - name: Soups and stocks by the potful
              description: |-
                ## Purpose
                Soup is the most forgiving batch food there is: cheap, nourishing, easy to portion and better after a day. Learning to make a good stock from bones and vegetable trimmings and four reliable soups gives you lunches, sick-day food and recipe bases from one big pot.

                ## Milestones
                1. One stock made from saved bones or vegetable trimmings and frozen in measured portions.
                2. Four soups cooked: one smooth, one chunky, one bean or lentil, one broth.
                3. Each soup frozen in single and family portions with its yield recorded.
                4. A favourite two kept as permanent stash items.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One home-made stock and four soups have been frozen in measured portions, with two chosen as permanent stash items."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Start a freezer bag for vegetable trimmings and chicken bones"
                - "Make a pot of stock and freeze it in measured portions"
                - "Cook four soups of different styles over a month"
                - "Pick two soups to keep in the stash at all times"
            - name: Second freezer decision
              description: |-
                ## Purpose
                Once a family batch cooks regularly, the fridge-freezer drawer becomes the limit, and a second freezer can double the stash. Deciding whether you need one, and if so whether a chest, an upright or an under-counter model fits your space and running-cost budget, avoids buying something that ends up half empty in the garage.

                ## Milestones
                1. Three months of freezer counts reviewed to see whether space is really the constraint.
                2. Available space measured, including any garage or utility room and its temperature range.
                3. Two or three models compared on capacity, energy rating, running cost and climate class.
                4. A decision recorded, either a model chosen or a reason to wait.

                ## Notes
                Start from the **Purchase decision** template. Check the climate class before putting a freezer in a cold garage: some models stop working properly below a certain temperature.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a second freezer, backed by three months of counts and a comparison of at least two models."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Review three months of freezer counts for signs the space is full"
                - "Measure the space where a second freezer could go"
                - "Compare two or three models on capacity, energy use and climate class"
                - "Record the decision and the reason for it"
            - name: Vacuum sealer, worth buying or not
              description: |-
                ## Purpose
                Vacuum sealers promise longer storage and no freezer burn, but bags cost money and the machine takes cupboard space. Trialling the alternatives first, and costing bags against the meals you would actually seal, tells you whether one is worth it for your household.

                ## Milestones
                1. Freezer burn losses over the last three months counted.
                2. The water displacement method for removing air tried on one batch.
                3. Two sealers compared on price, bag cost per use and bag size.
                4. A decision made with the reasoning written down.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a vacuum sealer, including freezer burn losses and the bag cost per meal."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count meals lost to freezer burn in the last three months"
                - "Try the water displacement method to push air out of one batch"
                - "Compare two sealers on machine price and bag cost per use"
                - "Write the decision and the reason in the freezer notes"
            - name: Freezer zones and baskets
              description: |-
                ## Purpose
                In a chest freezer the meal you want is always at the bottom, and in an upright one it is behind the frozen peas. Giving each group its own zone or coloured basket, ready meals, components, raw protein, breakfasts and treats, makes finding a meal take seconds.

                ## Milestones
                1. Zones agreed for each food group based on how often each is used.
                2. Baskets or dividers fitted, with the most used zone easiest to reach.
                3. A zone map added to the door list.
                4. A month later, every item still in its zone at the recount.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every food group has a labelled zone or basket, a map is on the door list, and the next recount finds items in their zones."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide which food groups get their own zone"
                - "Buy baskets or dividers that fit your freezer's dimensions"
                - "Put the most used zone in the easiest spot to reach"
                - "Draw a simple zone map on the door list"
            - name: Twenty-meal rotation to beat freezer fatigue
              description: |-
                ## Purpose
                After a few months of the same five meals, people start ordering takeaway even with a full freezer. Growing the repertoire to twenty tested meals across different cuisines and textures, and rotating through them, keeps the stash something people want to eat.

                ## Milestones
                1. The current ten meals grouped by cuisine and texture to spot the gaps.
                2. Ten new candidates chosen to fill those gaps.
                3. Each new candidate tested once and rated by the household.
                4. A rotation of twenty meals written, with no meal repeating within three weeks.

                ## Notes
                Ask the agent to suggest freezer-friendly meals in cuisines you do not yet cook, then test the ones that sound right.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written rotation of twenty tested freezer meals in which no meal repeats within three weeks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Group your current freezer meals by cuisine and texture"
                - "Ask the agent for ten freezer-friendly meals that fill the gaps"
                - "Test one new candidate each cook day and record the rating"
                - "Swap two tired meals for two new ones in the rotation @recurring(quarterly)"
            - name: More vegetables in every frozen portion
              description: |-
                ## Purpose
                Frozen meals easily become beige: mince, sauce and pasta. Adding grated, puréed or diced vegetables and pulses to the base of each batch recipe raises the vegetable count of every portion without changing what the household thinks it is eating.

                ## Milestones
                1. The vegetable content of your ten regular meals estimated per portion.
                2. One or two extra vegetables or pulses added to each recipe's base.
                3. The changed recipes tested on the household without announcement.
                4. Recipe cards updated with the new quantities.

                ## Notes
                Grated carrot, courgette, lentils and puréed squash vanish into most tomato and curry sauces.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All ten regular freezer recipes include at least one added vegetable or pulse, with updated recipe cards."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Estimate the vegetables per portion in each regular freezer meal"
                - "Pick one extra vegetable or pulse to add to each recipe"
                - "Serve the changed versions and note any complaints"
                - "Update every recipe card with the new quantities"
            - name: Replacing shop-bought ready meals with your own
              description: |-
                ## Purpose
                Many households keep a few supermarket ready meals for emergencies and end up eating them twice a week. Copying the three you buy most as home-made freezer portions, sized and packed the same way, keeps the convenience at lower cost and with ingredients you chose.

                ## Milestones
                1. The ready meals bought in the last month listed with their prices.
                2. The three most bought matched to home-made versions.
                3. Each version frozen in single portions in microwaveable containers.
                4. A month where home-made portions replaced at least half of the ready meals.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Home-made versions of the three most bought ready meals are in the freezer and replaced at least half of ready meal purchases for a month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the ready meals bought in the last month from receipts"
                - "Find or adapt a recipe for each of the top three"
                - "Freeze each one in single microwaveable portions"
                - "Count ready meal purchases at the end of the month"
            - name: Portion sizes matched to who eats them
              description: |-
                ## Purpose
                Freezing everything in four-portion tubs works until one parent is away, a teenager eats late or a toddler needs a small bowl. A mix of single, double and family portions, with a rule for how many of each to keep, makes the stash fit how the household really eats.

                ## Milestones
                1. A typical fortnight reviewed to see how often fewer than all the household eat together.
                2. A target mix of single, double and family portions written.
                3. Child-size portions added for younger children where useful.
                4. The next two cook days portioned to the new mix.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written target mix of portion sizes, applied on the next two cook days."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count how many dinners in the last fortnight had fewer people at the table"
                - "Write a target mix of single, double and family portions"
                - "Buy a few smaller containers for single and child portions"
                - "Portion the next two cook days to the new mix"
            - name: Freezer stash before a new baby arrives
              description: |-
                ## Purpose
                The first six weeks with a newborn leave almost no time or energy for cooking, and visitors bring cake, not dinners. Building a stash of thirty or more one-handed, reheatable meals in the third trimester means the household eats properly while everyone learns to sleep in two-hour blocks.

                ## Milestones
                1. A target of meals worked out for the first six weeks, allowing for help from family.
                2. Freezer space cleared and a menu of one-handed meals agreed.
                3. Cooking spread over four or five sessions from around the seventh month.
                4. The stash complete, listed on the door, two weeks before the due date.

                ## Notes
                Favour meals that can be eaten from a bowl with a spoon, and include a few breakfasts and snacks. Ask your midwife or clinician about any foods to avoid while breastfeeding, if relevant.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least thirty labelled meals are in the freezer and listed on the door two weeks before the due date."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Work out how many dinners you need for six weeks, minus help offered"
                - "Clear freezer space and agree a menu of one-handed meals"
                - "Book four or five cook sessions between month seven and the due date"
                - "Ask a friend or relative to join one session"
                - "Check the door list is complete two weeks before the due date"
            - name: Recovery stash before a planned operation
              description: |-
                ## Purpose
                After surgery, standing at a hob or lifting a heavy casserole dish may be off limits for weeks, and the person who usually cooks may be the patient. Preparing light, easy-to-reheat single portions before the admission date means recovery is not undone by takeaways or skipped meals.

                ## Milestones
                1. Any eating, lifting or mobility guidance from the surgical team noted.
                2. A target number of meals set for the expected recovery period.
                3. Meals frozen in single, light containers that can be reheated without bending or lifting.
                4. The stash complete and the household shown how to reheat it a week before admission.

                ## Notes
                If the team gives specific eating advice after the operation, such as soft foods, plan the stash around that rather than the usual favourites.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A stash of single, light meals sized to the expected recovery period is frozen and the household knows how to reheat it one week before admission."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the surgical team about eating, lifting and standing after the operation"
                - "Set a meal target for the expected recovery period"
                - "Freeze meals in single portions in light containers"
                - "Move the stash to the easiest-to-reach freezer drawer"
                - "Show the household how to defrost and reheat each meal"
            - name: Late-summer freezer fill before school starts
              description: |-
                ## Purpose
                The first weeks of a new school year bring new timetables, clubs and homework, and evenings fill up before anyone notices. Filling the freezer in the last fortnight of the summer holidays, often with children helping, means the September rush starts with a full stash.

                ## Milestones
                1. A date in the last fortnight of the holidays set for the fill.
                2. Freezer space cleared with an eat-down week in early August.
                3. Twenty or more meals and two components cooked over one or two sessions.
                4. The first fortnight of term planned with freezer meals on club nights.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Twenty or more meals are frozen before the first day of term and assigned to the busiest nights of the first fortnight."
                cadence: cyclic
              tasks:
                - "Check the new school year's club and activity timetable"
                - "Clear freezer space with an eat-down week in early August"
                - "Book a late-summer fill day in the last fortnight of the holidays @recurring(yearly)"
                - "Assign freezer meals to club nights in the first fortnight of term"
            - name: Freezer meal swap with three other households
              description: |-
                ## Purpose
                Cooking one recipe in quadruple is barely more work than cooking it once, and swapping with three other families turns one evening into four different meals. A swap with clear rules on portions, labels and allergens adds variety to every stash involved.

                ## Milestones
                1. Three other households recruited and a swap date agreed.
                2. Rules agreed on portion size, containers, labelling and allergens.
                3. Each household cooks one recipe four times and brings it frozen.
                4. A swap completed and a vote taken on whether to repeat it.

                ## Notes
                Collect every household's allergies and dietary rules before anyone chooses a recipe, and list ingredients on every label.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A swap between four households is completed with agreed rules, and each household goes home with four different labelled meals."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask three friends or neighbours if they want to try a freezer meal swap"
                - "Collect every household's allergies and dietary rules"
                - "Agree portion size, container type and label format in a shared message"
                - "Host the swap and ask whether to repeat it next season"
            - name: Meal train for a friend in a hard week
              description: |-
                ## Purpose
                When a friend has a baby, a bereavement or a diagnosis, everyone asks what they can do, and food is almost always the answer. Coordinating a group so meals arrive frozen and labelled on a schedule, rather than five lasagnes on day one, is the most useful kind of help.

                ## Milestones
                1. The family's dietary needs, allergies, freezer space and drop-off preferences confirmed.
                2. A schedule shared with helpers covering two to four weeks.
                3. Rules sent to helpers on disposable containers, labels and reheat notes.
                4. Every slot filled and the family asked halfway through if anything should change.

                ## Notes
                Ask one close contact rather than the person going through it. A free online meal train sign-up sheet does the coordinating for you.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two to four week schedule of labelled frozen meals is filled by helpers and checked with the family halfway through."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a close contact about allergies, freezer space and drop-off times"
                - "Set up a shared sign-up sheet covering two to four weeks"
                - "Send helpers rules on disposable containers, labels and reheat notes"
                - "Check with the family halfway through whether anything should change"
            - name: Freezer meals for a parent living alone
              description: |-
                ## Purpose
                An older parent living alone may stop cooking proper meals long before anyone notices, and a few days of tea and toast becomes a habit. Keeping their freezer stocked with single portions they like, labelled clearly and easy to reheat, is practical care that fits around a busy life.

                ## Milestones
                1. Their favourite meals, appetite, dislikes and any dietary advice from their doctor noted.
                2. Their freezer and microwave checked, and reheating made simple for them.
                3. Labels written in large, clear print with plain reheat steps.
                4. A monthly delivery routine running for three months, with the empties collected.

                ## Notes
                Ask what they would actually like rather than what you think is good for them, and agree it with any other relatives who help.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three consecutive monthly deliveries of clearly labelled single portions, with their stock checked at each visit."
                cadence: rolling
              tasks:
                - "Ask your parent which meals they miss and which they would not eat"
                - "Check their freezer space and that their microwave or oven works"
                - "Write labels in large print with three-line reheat steps"
                - "Deliver a box of single portions and collect the empties @recurring(monthly:12)"
            - name: Batch cooking around shift work
              description: |-
                ## Purpose
                Nights, earlies and rotating rotas break the idea of a family dinner at six, and the canteen or vending machine fills the gap. Matching the freezer stash to the rota, with portable single portions for work and meals the rest of the household can reheat without you, keeps everyone fed whatever the shift.

                ## Milestones
                1. The next month's shift pattern mapped against household mealtimes.
                2. A set of single portions that travel and reheat in a workplace microwave.
                3. Cook sessions scheduled on rest days, not after nights.
                4. A month where every shift had a home-made meal ready.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One full month in which every shift was covered by a home-made freezer meal, with cook sessions only on rest days."
                cadence: rolling
              tasks:
                - "Map the next month's shifts against when the household eats"
                - "Choose four meals that travel well and reheat in a workplace microwave"
                - "Plan cook sessions and freezer pulls as soon as the rota is published @recurring(monthly:27)"
            - name: Sick-day shelf for when the household goes down
              description: |-
                ## Purpose
                When a stomach bug or flu runs through the house, the person who usually cooks is often the next to fall ill. A small shelf of soups, broths, plain rice and simple pasta portions, kept separately and refreshed every autumn, means nobody has to shop or cook while unwell.

                ## Milestones
                1. A list of plain, easy meals the household can face when ill.
                2. One freezer shelf or basket reserved and labelled for sick days.
                3. At least eight portions of broth, soup and plain carbohydrates frozen.
                4. The shelf restocked each autumn before the winter bug season.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A labelled sick-day shelf holds at least eight portions of plain meals and is restocked each autumn."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the household which plain foods they can eat when ill"
                - "Reserve and label one freezer shelf or basket for sick days"
                - "Freeze at least eight portions of broth, soup and plain carbohydrates"
                - "Restock the sick-day shelf before the winter bug season @recurring(yearly)"
            - name: Batch cooking with children as helpers
              description: |-
                ## Purpose
                Children who help make a meal are far more likely to eat it on a busy Thursday, and a cook day is full of safe jobs: washing vegetables, measuring, stirring cold mixtures, writing labels. Giving them real, age-appropriate roles turns the monthly session into a family activity rather than a parent's lost Saturday.

                ## Milestones
                1. A list of safe batch day jobs for each child's age.
                2. One recipe per cook day chosen by a child.
                3. Children trusted with labelling and updating the door list.
                4. Three cook days completed with children involved for at least an hour.

                ## Notes
                Keep children away from large pots of boiling liquid and the oven door. Give them jobs with cold ingredients and the labelling.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three cook days with children involved for at least an hour, each including one recipe chosen by a child."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List safe batch day jobs suited to each child's age"
                - "Let one child pick a recipe for the next cook day"
                - "Hand over labelling and the door list to a child who can write"
                - "Ask the children afterwards which job they want next time"
            - name: One base, several versions for mixed diets
              description: |-
                ## Purpose
                A household with a vegetarian, a child who hates spice and an adult who wants it hot can still batch cook if the base is shared and the split happens late. Cooking one base sauce and dividing it before adding meat, pulses or chilli gives several labelled versions from one pot.

                ## Milestones
                1. The household's different needs and preferences written down.
                2. Three base sauces chosen that split well, such as tomato, curry and chilli bases.
                3. One cook day where a base was divided into at least two labelled versions.
                4. Labels coloured or marked so each version is obvious at a glance.

                ## Notes
                For a serious allergy, cook the allergen-free version first in clean equipment and freeze it before the others are made.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three base recipes have been split into labelled versions that meet each household member's needs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down each household member's dietary needs and preferences"
                - "Choose three base sauces that split cleanly into versions"
                - "Divide one base into two versions on the next cook day"
                - "Use a coloured dot on labels to mark each version"
            - name: Batch cooking in a small kitchen
              description: |-
                ## Purpose
                Renters and flat dwellers with two hob rings, one oven shelf and a freezer the size of a shoebox can still batch cook, but they need a different plan. Smaller, more frequent sessions, one-pot and one-tray recipes, and flat bags instead of tubs make a small kitchen work.

                ## Milestones
                1. Your kitchen's real limits written down: rings, oven shelves, worktop and freezer drawers.
                2. Five one-pot or one-tray recipes chosen that scale to six portions.
                3. A fortnightly mini session of one hour tried twice.
                4. The freezer packed with flat bags filed upright to fit eight or more meals.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two one-hour sessions completed in a small kitchen, with at least eight meals filed in the freezer drawers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down your hob rings, oven shelves, worktop space and freezer drawers"
                - "Choose five one-pot or one-tray recipes that scale to six portions"
                - "Run a one-hour mini session and freeze in flat bags"
                - "Count how many meals now fit in the freezer drawers"
            - name: Thirty-meal production day
              description: |-
                ## Purpose
                Experienced batch cooks often move to a few big days a year, producing thirty or more meals with a helper and a precise plan. Running it like a small production line, with a prep schedule, a cooling station and a packing station, fills the freezer for a month or more from one day of work.

                ## Milestones
                1. Eight to ten recipes chosen that share ingredients and use different equipment.
                2. A timed production plan with prep, cooking, cooling and packing stations.
                3. A helper booked and all containers, labels and ingredients ready the day before.
                4. Thirty or more labelled meals frozen, with a debrief on bottlenecks.

                ## Notes
                Clear the freezer with an eat-down week first, and stagger freezing so warm food does not go in all at once.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One production day yields at least thirty labelled meals and a written debrief on what to change."
                cadence: cyclic
              tasks:
                - "Choose eight to ten recipes that share ingredients and equipment"
                - "Write a timed plan with prep, cooking, cooling and packing stations"
                - "Hold a thirty-meal production day with a helper @recurring(quarterly)"
                - "Write a debrief of bottlenecks within two days of finishing"
            - name: Tested freezer recipe book with reheat notes
              description: |-
                ## Purpose
                After a year of batch cooking you have scaled quantities, freezing quirks and reheat times scattered across notes and memory. Gathering them into one tested book means anyone in the household, or a friend helping out, can run a cook day without you.

                ## Milestones
                1. A standard recipe layout: scaled quantities, yield, freezing method, reheat method and time, allergens.
                2. Twenty recipes written up in that layout from your tested notes.
                3. Two recipes cooked by someone else from the book alone, with gaps fixed.
                4. The book shared in print or digitally with the household.

                ## Notes
                Ask the agent to turn your rough notes into the standard layout, then check every quantity against a real batch.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A book of twenty tested freezer recipes in one layout, with two recipes successfully cooked by someone else from it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Design a recipe layout with yield, freezing method and reheat time"
                - "Ask the agent to convert your rough recipe notes into that layout"
                - "Have someone else cook two recipes from the book alone"
                - "Fix the gaps they found and share the book with the household"
            - name: Three-month stash rotation calendar
              description: |-
                ## Purpose
                Advanced batch cooks plan the freezer like a small warehouse: what goes in when, what must come out by when, and how the stash rises before known busy periods. A three-month calendar of cook days, eat-down weeks and target stash levels keeps quality high and nothing older than three months.

                ## Milestones
                1. Known busy periods in the next three months marked, such as exams, travel or work peaks.
                2. Cook days and eat-down weeks placed so the stash peaks before each busy period.
                3. A target stash level set for each week.
                4. Three months completed with no meal in the freezer over three months old.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-month calendar of cook days, eat-down weeks and stash targets is followed, and no meal exceeds three months in the freezer."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark the busy periods in the next three months"
                - "Place cook days so the stash peaks before each busy period"
                - "Set a weekly target for the number of meals in the freezer"
                - "Compare actual counts against the targets at the end of each month"
            - name: Batch cooking for a community meal rota
              description: |-
                ## Purpose
                Faith groups, school associations and community fridges often run meal rotas for families in difficulty, and an experienced batch cook is exactly who they need. Cooking for people outside your household brings extra responsibilities on allergens, labelling and hygiene, so it is worth setting up properly.

                ## Milestones
                1. The organisation's rules on home-cooked food, allergens and labelling read and followed.
                2. Any food hygiene training or registration the organisation requires completed.
                3. A labelled ingredient list prepared for every dish you contribute.
                4. A regular contribution slot agreed and held for three months.

                ## Notes
                Rules for food given outside your household vary by country and organisation. Follow the organiser's requirements and your food safety agency's guidance for community cooking.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three months of regular contributions to a community meal rota, each with a full ingredient and allergen label."
                cadence: rolling
              tasks:
                - "Ask the organiser for their rules on home-cooked food and labelling"
                - "Complete any food hygiene training the organisation requires"
                - "Prepare a full ingredient and allergen label for each dish you make"
                - "Cook and deliver your agreed rota contribution @recurring(monthly:4)"
---

# Batch Cooking & Freezer Meals

This area is for anyone who wants dinner already made on the nights there is no time or energy to make it, from a parent with three children and two jobs to someone stocking up before an operation. It starts with the foundations (a cleared and counted freezer, containers and labels, a list of meals that freeze well, a first session and the cooling rules), then the routines that keep the stash full and moving, the techniques that make frozen food taste like it was cooked tonight, the decisions about freezers, sealers and variety, the dated stashes for a new baby, a recovery or a friend in need, versions for carers, shift workers, small kitchens and mixed diets, and finally the large production days and tested recipe books of an experienced batch cook.

What repeats is a monthly cook day with its recipe pick a week earlier, a midweek double batch, a Sunday freezer pull, a nightly move of tomorrow's meal to the fridge, a monthly recount, a quarterly eat-down week and a yearly defrost of the freezer itself. The Purchase decision, Metrics log, Operational checklist and Weekly meal plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
