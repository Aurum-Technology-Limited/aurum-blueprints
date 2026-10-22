---
id: food-nutrition.cooking-for-one
name: Cooking for One
description: "Satisfying meals for one without the waste: small pans, a freezer of labelled single portions, recipes scaled down properly, a cook-once-eat-twice week, and versions for retirees and anyone newly living alone."
category: personal
version: 1.0.0
tags: [food-nutrition, cooking-for-one, everyone, retiree, single-portions, freezer-meals, leftovers, living-alone]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - weekly-meal-plan
    - metrics-log
    - habit-tracker
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cooking for One
          description: "Making satisfying meals for a single person without waste, with scaled recipes, freezer portions and simple weeknight cooking."
          projects:
            - name: Fortnight audit of what you eat alone
              description: |-
                ## Purpose
                People cooking only for themselves often have no clear picture of how many evenings end in toast, a takeaway or a supermarket meal deal, or how much fresh food goes in the bin. Two weeks of plain notes on every evening meal, its cost and anything thrown away gives you a baseline to change from, instead of a vague feeling that you ought to cook more.

                ## Milestones
                1. A note for each of fourteen evening meals: what it was, where it came from and roughly what it cost.
                2. Every item of food thrown away in the fortnight listed with the reason.
                3. A count of cooked, assembled, ready-made and takeaway meals.
                4. The two changes that would matter most written at the bottom of the audit.

                ## Notes
                Change nothing during the audit fortnight. The point is an honest starting picture, not a flattering one.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fourteen-day record of evening meals, costs and binned food, ending with two named changes to make first."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Start a phone note for tonight's evening meal and what it cost"
                - "Record every evening meal and where it came from for fourteen days"
                - "List any food thrown away with the reason it went off"
                - "Ask the agent to count meal types from your notes and suggest two changes"
            - name: Cookware sized for one person
              description: |-
                ## Purpose
                A family casserole and a 28 cm frying pan make single portions harder: sauces boil away, one egg spreads paper thin, and a tray built for six dries out a single chicken leg. A small, deliberate set (a 20 cm frying pan, a 1.5 litre saucepan, a quarter sheet tray, a small lidded casserole) makes cooking for one quicker and less wasteful, and frees cupboard space.

                ## Milestones
                1. Current pans and trays listed with sizes, and the ones actually used in the last month marked.
                2. A shortlist of the small pieces you are missing, each with a price ceiling.
                3. The missing pieces bought, borrowed or found second-hand.
                4. Oversized pieces you never use donated or stored out of the way.

                ## Notes
                Start from the **Purchase decision** template. Charity shops and house clearances are full of small, good-quality pans; you rarely need new ones.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A small frying pan, a small saucepan, a quarter sheet tray and a small lidded pot are in regular use, with unused large pieces moved out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure the diameter of every pan you own and list them"
                - "Mark the pans and trays you have used in the last month"
                - "Shortlist the small pieces you are missing with a price limit for each"
                - "Buy or source the missing pieces, checking second-hand first"
                - "Donate or box up large pans you have not used in a year"
            - name: Freezer set up for single portions
              description: |-
                ## Purpose
                For one person, the freezer is what makes a full recipe worth cooking: four portions become one dinner tonight and three later. Without flat bags, portion-sized containers, labels and a list on the door, those portions turn into frosty unidentified blocks that end up in the bin six months later.

                ## Milestones
                1. The freezer emptied, defrosted if needed, and anything unlabelled or older than six months dealt with.
                2. A stock of single-portion containers and freezer bags in two sizes.
                3. Contents, date and a reheating note on every item.
                4. A running list on the freezer door or in your phone showing what is inside.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every item in the freezer is labelled with contents and date and appears on a written inventory."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Take everything out of the freezer and bin anything you cannot identify"
                - "Buy single-portion containers, flat freezer bags and a roll of labels"
                - "Label each item with contents, date and how to reheat it"
                - "Start a freezer list on the door or in a phone note"
            - name: Store cupboard of small, long-life flavour
              description: |-
                ## Purpose
                When you cook for one, fresh ingredients are often bought for a single recipe and the rest wasted. A cupboard stocked with long-lasting, small-format flavour (tinned fish, jarred roasted peppers, stock concentrate, miso, chilli crisp, capers, small tins of beans and coconut milk) lets two or three fresh items become a proper dinner on any night.

                ## Milestones
                1. Current cupboard contents checked and out-of-date items cleared.
                2. A list of twelve to fifteen long-life flavour items chosen for the food you like.
                3. Those items bought in the smallest sensible sizes.
                4. Three dinners cooked that rely mainly on the cupboard plus one fresh item.

                ## Notes
                Small tins and tubes cost more per gram but less per meal you actually eat. Tomato paste and garlic in tubes beat opened tins that grow mould at the back of the fridge.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of at least twelve long-life flavour staples, all in stock, and three cupboard-led dinners cooked from them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check dates in the cupboard and clear anything expired"
                - "Choose twelve long-life flavour items that suit the food you like"
                - "Buy the items in the smallest sizes on offer"
                - "Cook three dinners led by the cupboard plus one fresh ingredient"
            - name: Rules for scaling recipes down to one
              description: |-
                ## Purpose
                Dividing a four-person recipe by four rarely works as written: cooking times do not shrink in proportion, a quarter of an egg is awkward, liquids evaporate faster in a small pan and seasoning needs tasting rather than dividing. A one-page card of your own scaling rules saves every new recipe from guesswork.

                ## Milestones
                1. Two family recipes scaled down to one or two servings, with notes on what went wrong.
                2. A card covering pan size, liquid, eggs, seasoning and cooking times.
                3. A rule for which recipes to cook in full and freeze instead of scaling.
                4. The card kept where you cook and used on three new recipes.

                ## Notes
                A sensible default is to halve to two portions rather than quarter to one, then eat one and keep one. Baking is the exception: cook the full batch and freeze slices.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written scaling card covering at least five rules, tested on three recipes scaled down from family size."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick two family-size recipes you already like"
                - "Cook each at half or quarter quantity and note what changed"
                - "Write a scaling card for pan size, liquids, eggs and timings"
                - "Use the card on three new recipes and add what you learn"
            - name: Buying fresh food in single quantities
              description: |-
                ## Purpose
                Supermarkets price for families, so the solo shopper is nudged toward six chicken thighs or a bag of eight peppers. Knowing where to buy loose vegetables, a single fillet from the fish counter, two slices of ham from the deli and half a loaf from a bakery means paying only for what you will eat.

                ## Milestones
                1. Shops and counters near you that sell loose or by weight identified.
                2. A list of the items you regularly over-buy in packs.
                3. A single-quantity source found for each of those items.
                4. Price per meal compared, loose against packed, on three staples.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of at least six regular items, each with a named place to buy it in single quantities."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the packed items you regularly throw half of away"
                - "Ask at the meat, fish and deli counters about single portions"
                - "Find a market stall or greengrocer selling vegetables loose"
                - "Compare price per meal on three staples bought loose and packed"
            - name: Choosing your weekly cooking rhythm
              description: |-
                ## Purpose
                Cooks living alone tend to settle into one of three patterns: cook fresh most nights, cook once and eat twice, or prepare components at the weekend and assemble during the week. Choosing deliberately, based on your evenings, energy and freezer space, stops the week sliding into snacks by Wednesday.

                ## Milestones
                1. Your typical weekday evenings described: time free, energy, nights out.
                2. The three rhythms compared against those evenings.
                3. One rhythm chosen and written down with named cooking days.
                4. The rhythm tried for two weeks and adjusted once.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen cooking rhythm written down with named cooking days, tried for two weeks and adjusted once."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what a typical weekday evening looks like for you"
                - "Compare cooking fresh nightly, cooking once to eat twice and weekend components"
                - "Choose a rhythm and name your cooking days"
                - "Review after two weeks and change one thing"
            - name: Ten dependable solo dinners
              description: |-
                ## Purpose
                Most confident solo cooks rely on about ten dinners they can make without a recipe or a special shop. Building that list deliberately, mixing quick, cupboard, freezer-friendly and comforting meals, ends the nightly question of what to eat and becomes the base for every plan that follows.

                ## Milestones
                1. Ten dinners chosen, each cheaper than a takeaway and under 40 minutes of cooking.
                2. Each one cooked at least twice at single or double quantity.
                3. An ingredient card written for each dinner.
                4. The ten sorted into fresh-night, cupboard and freezer meals.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten named dinners, each cooked at least twice for one, with an ingredient card for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the meals you already cook and like without a recipe"
                - "Add new dinners until there are ten, mixing quick and comforting"
                - "Cook each dinner twice at single or double quantity"
                - "Write an ingredient card for each of the ten"
            - name: A proper place to eat alone
              description: |-
                ## Purpose
                Eating standing at the counter or in front of a screen makes solo meals feel like refuelling and often leads to grazing later in the evening. A cleared spot at a table, a plate rather than the pan and a glass of something turns the meal into an occasion worth cooking for, which is half the reason to cook at all.

                ## Milestones
                1. A spot at a table cleared and kept clear for eating.
                2. Two or three plates and bowls you like kept within reach.
                3. Most evening meals eaten at the table for two weeks.
                4. A note on whether it changed how much you cook or snack.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least ten of fourteen evening meals eaten at a cleared table, with a note on what changed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Clear one spot at a table and keep it for meals"
                - "Put your favourite plate and bowl within reach of the hob"
                - "Eat at the table without a screen on ten evenings in two weeks"
                - "Write a line on whether your cooking or snacking changed"
            - name: Weekly solo meal plan with cook-once pairings
              description: |-
                ## Purpose
                A plan for one works best in pairs: a dinner that deliberately leaves a second portion or a component for another night, such as a roast chicken leg on Monday and chicken fried rice on Thursday. Planning five dinners as two or three pairs keeps the shop small and the fridge empty of fresh food by the weekend.

                ## Milestones
                1. A weekly plan with five dinners, at least two of them planned pairs.
                2. A short shopping list built from the plan.
                3. The fridge nearly empty of fresh food at the end of each week.
                4. The plan kept for eight consecutive weeks.

                ## Notes
                Start from the **Weekly meal plan** template. Leave one night blank for an invitation, a leftover or a fallback plate.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly plans, each with at least two cook-once pairs and a matching shopping list."
                cadence: rolling
              tasks:
                - "Create a weekly meal plan page from the template"
                - "Plan five dinners as pairs and write the shopping list @recurring(weekly:sat)"
                - "Leave one night free for an invitation or leftovers"
                - "Mark the pairs that worked so you can reuse them next month"
            - name: Perishables-first eating order
              description: |-
                ## Purpose
                Fish and salad leaves last two days, broccoli four, carrots and cabbage a fortnight, so the order you eat things in matters more than what you buy. Ordering the week's dinners by shelf life right after each shop means the delicate food gets eaten while it is good and the hardy food waits its turn.

                ## Milestones
                1. A shelf-life list for the fresh foods you buy most often.
                2. Each week's dinners ordered with the most perishable first.
                3. A midweek check of what must be eaten by the weekend.
                4. Fresh food thrown away down to one item a week or fewer for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of shopping weeks with dinners ordered by shelf life and no more than one fresh item thrown away a week."
                cadence: rolling
              tasks:
                - "Write a shelf-life list for the fresh foods you buy most"
                - "Put fish and leaves first when ordering the week's dinners after a shop"
                - "Check the fridge for what must be eaten by the weekend @recurring(weekly:wed)"
                - "Move anything about to turn into the next meal or the freezer"
            - name: Splitting family packs into single portions
              description: |-
                ## Purpose
                Meat, fish and bread are often cheapest in family packs, and that only helps a solo cook if the pack is split before anything goes off. Twenty minutes on shopping day with freezer bags and a marker turns six chicken thighs into three bags of two, frozen flat so they thaw in hours rather than a day.

                ## Milestones
                1. The packs you regularly buy that are worth splitting listed.
                2. Bags, labels and a marker kept where you unpack shopping.
                3. Meat and fish frozen flat in single or double portions on the day of purchase.
                4. Bread sliced and frozen so single slices can be toasted from frozen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks every family pack bought has been split and frozen in labelled portions on the day of purchase."
                cadence: rolling
              tasks:
                - "List the family packs you buy that work out cheaper than single portions"
                - "Keep bags, labels and a marker next to where you unpack shopping"
                - "Split and freeze each pack flat on the day you buy it"
                - "Slice a loaf and freeze it so single slices toast from frozen"
            - name: Freezer portion inventory and rotation
              description: |-
                ## Purpose
                Single portions are small, so they get buried under frozen peas and forgotten. A monthly look through the freezer list, eating the oldest portions first and noting what is running low, keeps the stash useful and stops the slow build-up of mystery tubs.

                ## Milestones
                1. The freezer list matches what is actually in the freezer.
                2. The oldest portions moved to the front each month.
                3. Portions older than three months eaten or thrown out.
                4. A note made of what to cook next to restock.

                ## Notes
                Most cooked dishes are at their best within about three months. Follow your food safety agency's guidance for anything you are unsure of.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly checks with the list matching the freezer and no portion older than three months."
                cadence: rolling
              tasks:
                - "Compare the freezer list with what is actually inside"
                - "Check the freezer and move the oldest portions to the front @recurring(monthly:14)"
                - "Plan two dinners this week from the oldest portions"
                - "Add the dishes that are running low to next week's plan"
            - name: Second-night remix routine
              description: |-
                ## Purpose
                Eating the same stew four nights running is why many solo cooks give up on cooking in quantity. Planning the second portion as a different meal (stew into a pie filling, roast vegetables into a frittata, chilli into a baked potato topping) keeps cook-once-eat-twice from becoming a chore.

                ## Milestones
                1. Six remix pairs written down for dishes you cook often.
                2. Each remix tried at least once.
                3. One remix night a week kept for a month.
                4. The best pairs added to the weekly plan as standard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six remix pairs written down and a remix night kept every week for four weeks."
                cadence: rolling
              tasks:
                - "Write six pairs of a first dinner and its second-night remix"
                - "Cook a remix dinner from earlier leftovers @recurring(weekly:thu)"
                - "Mark the remixes worth repeating in your dinner list"
            - name: Half-tin and half-pack rescue list
              description: |-
                ## Purpose
                Half a tin of coconut milk, most of a pot of cream, a bunch of coriander after one garnish: the leftovers of single-portion cooking are partial ingredients, not whole dishes. A written list of what to do with each common half-used item, and a weekly look at the open-jar shelf, saves the money and the guilt.

                ## Milestones
                1. A list of the partial ingredients you most often throw away.
                2. Two uses written down for each, including whether it freezes.
                3. A shelf or tray in the fridge kept only for open items.
                4. The open-item shelf cleared every week for a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rescue list covering at least eight partial ingredients and four consecutive weeks of a cleared open-item shelf."
                cadence: rolling
              tasks:
                - "List the half-used ingredients you most often throw away"
                - "Write two uses for each, including whether it freezes"
                - "Give open tins, jars and cartons their own fridge shelf"
                - "Use or freeze everything on the open-item shelf @recurring(weekly:mon)"
            - name: Sunday component prep
              description: |-
                ## Purpose
                Component prep suits people who like variety: one hour at the weekend produces a pot of grain, a tray of roasted vegetables, a protein and a sauce, which become four different assembled dinners rather than four boxes of the same thing. It is the lightest form of meal prep and works well in a small kitchen.

                ## Milestones
                1. Four components chosen that combine into at least three dinners.
                2. A one-hour prep session done at the weekend.
                3. Components stored in clear containers at the front of the fridge.
                4. Three weeknight dinners assembled from them in under 15 minutes each.

                ## Notes
                Keep cooked rice and grains cold and eat them within a day or two, or freeze them. Cooked rice left warm is a common cause of food poisoning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weekends of component prep, each giving at least three assembled weeknight dinners."
                cadence: rolling
              tasks:
                - "Choose a grain, a vegetable tray, a protein and a sauce that mix well"
                - "Cook the week's components in one hour @recurring(weekly:sun)"
                - "Store components in clear tubs at the front of the fridge"
                - "Note the best combinations after three assembled dinners"
            - name: Too-tired-to-cook fallback plates
              description: |-
                ## Purpose
                Some evenings nobody wants to cook, and without a plan the answer is a takeaway, a bowl of cereal or nothing. A short written list of ten-minute plates (tinned fish on toast with lemon, an omelette, beans with chilli crisp on rice, a cheese toastie with a handful of leaves) and the ingredients always in stock make the bad nights decent.

                ## Milestones
                1. Six fallback plates written down, each under ten minutes.
                2. Their ingredients added to the standing shopping list.
                3. The list stuck inside a cupboard door.
                4. Takeaways on tired nights cut by half over a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of six ten-minute plates with all ingredients in stock, and tired-night takeaways halved over one month."
                cadence: rolling
              tasks:
                - "Write six plates you could make in ten minutes when exhausted"
                - "Add the fallback ingredients to your standing shopping list"
                - "Stick the list inside the cupboard door nearest the hob"
                - "Restock the fallback ingredients @recurring(monthly:3)"
            - name: Monthly cost per meal check
              description: |-
                ## Purpose
                Cooking for one can feel expensive because the shop is small and full-price, and that feeling pushes people toward meal deals and delivery apps. A monthly sum of food spending divided by meals cooked, set against what takeaways cost, shows the real figures and where the money leaks.

                ## Milestones
                1. A simple log of grocery and takeaway spending.
                2. Cost per home-cooked dinner worked out each month.
                3. The comparison with an average takeaway written down.
                4. One change made each month based on the numbers.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of cost per home-cooked dinner logged beside takeaway spending, with one change recorded each month."
                cadence: rolling
              tasks:
                - "Create a spending log from the metrics log template"
                - "Add up the month's grocery and takeaway spending @recurring(monthly:22)"
                - "Divide grocery spend by the number of home-cooked dinners"
                - "Write one change for next month based on the result"
            - name: Seasonal refresh of the solo repertoire
              description: |-
                ## Purpose
                Ten dependable dinners become ten tired dinners by the third month. Swapping three of them each season for something new, chosen from what is cheap and good at that time of year, keeps cooking interesting without risking a whole week of untested recipes.

                ## Milestones
                1. Three dinners retired from the list each quarter.
                2. Three new dinners tried, each cooked at least twice.
                3. The best of them added to the dependable list.
                4. Four seasonal refreshes completed in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly refreshes completed in twelve months, each adding at least one new tested dinner to the list."
                cadence: cyclic
              tasks:
                - "Mark three dinners on your list you are tired of"
                - "Choose three new seasonal dinners to try @recurring(quarterly)"
                - "Cook each new dinner twice before adding it to the list"
            - name: Annual review of how you cook for one
              description: |-
                ## Purpose
                Circumstances change: a new job with longer hours, a smaller freezer, retirement, a new health condition. A yearly look at your rhythm, freezer, equipment and repertoire keeps the system fitting the life you have now rather than the one you had when you set it up.

                ## Milestones
                1. The year's cost per meal, waste and takeaway figures summarised.
                2. The cooking rhythm, kit and repertoire each judged as working or not.
                3. Three changes chosen for the coming year.
                4. The changes written into the relevant projects.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A written annual review with three changes for the year ahead, completed two years running."
                cadence: cyclic
              tasks:
                - "Book an hour for your annual solo cooking review @recurring(yearly)"
                - "Summarise the year's spending, waste and takeaway numbers"
                - "Choose three changes for the year and add them to the right projects"
            - name: Cooking a single portion of meat or fish well
              description: |-
                ## Purpose
                One chicken breast, one salmon fillet or a single pork chop is easy to overcook, because there is little in the pan to hold the heat steady and no second piece to test. Learning a few reliable methods (pan-roast and rest, a gentle oven bake, poaching) with a probe thermometer gives you well-cooked protein every time.

                ## Milestones
                1. A probe thermometer bought and checked in boiling water.
                2. Safe internal temperatures for poultry, pork, mince and fish noted from your food safety agency.
                3. Chicken, fish and one red meat each cooked three times, with notes.
                4. Your preferred method and timing for each written on a card.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A card with tested methods and safe core temperatures for at least three single-portion proteins, each cooked three times."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Buy a probe thermometer and check it reads close to 100 degrees in boiling water"
                - "Note your food safety agency's safe cooking temperatures"
                - "Cook a single chicken breast three ways and record the results"
                - "Pan-roast a single fish fillet and write down the timing that worked"
            - name: Eggs as the solo cook's backbone
              description: |-
                ## Purpose
                Eggs are cheap, keep for weeks and come in single units, which makes them the most useful ingredient a solo cook owns. Mastering a folded omelette, a small frittata, eggs baked in sauce and a soft-boiled egg on almost anything turns leftovers and a few vegetables into a meal in ten minutes.

                ## Milestones
                1. A two-egg omelette cooked well in a 20 cm pan five times.
                2. A small frittata made from leftover vegetables.
                3. Eggs baked in a tomato or bean sauce for one.
                4. A boiled egg timing written down for the texture you like.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four egg dishes each cooked at least three times for one, with a boiled egg timing written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Cook a two-egg omelette in a small pan five times this month"
                - "Make a frittata for one from leftover vegetables"
                - "Bake two eggs in a tomato or bean sauce in a small dish"
                - "Time boiled eggs from fridge-cold until you find your texture"
            - name: Rice, grains and pasta measured for one
              description: |-
                ## Purpose
                Pasta, rice and grains are where solo cooks waste the most and overeat the most, because nobody judges a single portion well by eye. Learning the usual dry weights (roughly 75 g of rice or 100 g of pasta, adjusted to your appetite) and an absorption method for a small pan gives the right amount every time.

                ## Milestones
                1. Single dry portions weighed for rice, pasta and two grains, and marked on a cup.
                2. Rice cooked by absorption in a small pan with nothing left over.
                3. A double batch of a grain cooked and the second portion frozen.
                4. A card with your portions and cooking times.

                ## Notes
                Cool cooked rice quickly, refrigerate it within about an hour, and reheat it only once until piping hot.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A card with single dry portions and timings for at least four starches, used for a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Weigh a single portion of rice, pasta and two grains and mark a cup"
                - "Cook a single portion of rice by absorption in a small pan"
                - "Cook a double batch of a grain and freeze the second portion"
                - "Write your portions and timings on one card"
            - name: One-pan and traybake dinners for one
              description: |-
                ## Purpose
                Washing up is a real deterrent when you are cooking a single dinner, and one-pan meals remove most of it. A quarter sheet tray of sausage, peppers and potatoes, or a small frying pan of gnocchi with greens, gives a full dinner with one thing to wash, and the method adapts to almost any ingredients in the fridge.

                ## Milestones
                1. Roasting times noted for the vegetables you buy most often.
                2. Four traybakes for one cooked, adding ingredients in stages.
                3. Three one-pan stovetop dinners cooked.
                4. A rule of thumb written down for building your own.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Seven one-pan or traybake dinners cooked for one, with a written guide to timing ingredients on the same tray."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Note roasting times for the vegetables you buy most often"
                - "Cook four traybakes for one, adding slower ingredients first"
                - "Cook three one-pan stovetop dinners in your small frying pan"
                - "Write your own rule of thumb for building a traybake"
            - name: Freezing and reheating single portions safely
              description: |-
                ## Purpose
                Freezer portions are only worth having if they come back safe and still taste good. Knowing which dishes freeze well (stews, soups, sauces, cooked grains) and which do not (cream sauces that split, pasta sitting in sauce, salad), how to cool food quickly and how to reheat it properly protects both your health and the effort you put in.

                ## Milestones
                1. Your food safety agency's guidance on cooling, freezing and reheating read and noted.
                2. A list of the dishes you cook that freeze well and badly.
                3. A quick-cooling method in use, such as shallow containers.
                4. Reheating notes added to every freezer label.

                ## Notes
                A common default is to cool cooked food within about two hours, defrost in the fridge, reheat until steaming hot all the way through, and reheat any portion only once. Check your own agency's wording.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A freezes-well list and written cooling and reheating rules in use, with reheating notes on every freezer label."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your food safety agency's guidance on cooling and reheating"
                - "List dishes you cook that freeze well and ones that do not"
                - "Cool tonight's extra portion in a shallow container before freezing"
                - "Add a reheating note to each new freezer label"
            - name: Jar sauces and dressings for the week
              description: |-
                ## Purpose
                One jar of good dressing, salsa verde, tahini sauce or chilli oil makes plain rice, eggs or grilled vegetables taste of something all week. Learning five that keep for several days in the fridge is the cheapest way to make simple solo food interesting.

                ## Milestones
                1. Five sauces chosen with different characters: sharp, herby, nutty, hot and creamy.
                2. Each made at least twice and its fridge life noted.
                3. One sauce kept on hand most weeks.
                4. A list of what each sauce goes with.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five sauces each made twice, with fridge life and three pairings written down for each."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose five sauces with different flavour profiles"
                - "Make each sauce twice and note how long it keeps"
                - "Write three dishes each sauce goes with"
                - "Make one jar alongside your weekend prep for a month"
            - name: Microwave, air fryer and mini oven cooking for one
              description: |-
                ## Purpose
                Heating a full-size oven for one potato costs more and takes longer than it needs to. Learning what a microwave, an air fryer or a countertop oven does well (steamed fish in the microwave, crisp potatoes and chicken thighs in the air fryer, small bakes in a mini oven) cuts cooking time and energy for single portions.

                ## Milestones
                1. The small appliances you own listed with their wattage or capacity.
                2. Three dishes cooked in each appliance you own.
                3. A list of what each appliance is best at for one.
                4. Times and settings written down for your regular dishes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tested dishes per appliance you own, with times and settings recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List your small appliances with their wattage or capacity"
                - "Steam a single fish fillet with vegetables in the microwave"
                - "Cook three dishes in each appliance you own"
                - "Record times and settings for the dishes you will repeat"
            - name: Cupboard-only dinners for empty-fridge nights
              description: |-
                ## Purpose
                Before a shop, after a holiday or when you are unwell, there is often nothing fresh in the house. Knowing six dinners that need only cupboard and freezer ingredients (pasta with tinned tuna and capers, dal with frozen spinach, bean and tomato soup) keeps you fed without a trip out.

                ## Milestones
                1. Six dinners chosen that need nothing fresh.
                2. Each cooked once from stock alone and adjusted.
                3. Their ingredients added to the standing cupboard list.
                4. The six written on a card inside the cupboard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six cupboard-only dinners cooked and written down, with all their ingredients kept in stock."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose six dinners that need only cupboard and freezer ingredients"
                - "Cook each once from cupboard stock alone"
                - "Add any missing ingredients to your standing cupboard list"
                - "Write the six on a card inside the cupboard door"
            - name: Two-portion soups for tonight and tomorrow
              description: |-
                ## Purpose
                Soup is the most forgiving dish to cook in a small quantity and the best home for the end of a bag of vegetables. Learning a base method (soften an onion, add vegetables and stock, simmer, blend or not) at two-portion scale gives dinner tonight and lunch tomorrow from food that would otherwise be wasted.

                ## Milestones
                1. A two-portion base method written down with quantities.
                2. Four different soups made from leftover vegetables.
                3. A blended, a chunky, a bean and a broth-based soup each tried.
                4. Soup used to clear the vegetable drawer once a week for a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four different two-portion soups made from leftover vegetables, with a written base method."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a two-portion soup method with stock and vegetable quantities"
                - "Make a blended soup from the end of the vegetable drawer"
                - "Try a chunky, a bean and a broth-based soup over a month"
                - "Note which leftover vegetables made the best soups"
            - name: Home versions of your two usual takeaways
              description: |-
                ## Purpose
                Most solo takeaway habits come down to two or three dishes on the same couple of nights. Learning to cook those specific dishes at home for one, with the shortcuts that make them quick (a good curry paste, a stir-fry sauce, frozen flatbreads), replaces the habit rather than fighting it.

                ## Milestones
                1. Your two most-ordered takeaway dishes identified from the audit or order history.
                2. A home version of each found and cooked twice.
                3. Shortcut ingredients for both kept in stock.
                4. Orders for those dishes halved over two months.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Home versions of two regular takeaway dishes cooked at least twice each, and orders of those dishes halved over two months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check your order history for the two dishes you order most"
                - "Find a home recipe for each that takes under 30 minutes"
                - "Cook each one twice and adjust it towards the takeaway taste"
                - "Keep the shortcut ingredients for both in the cupboard"
            - name: Countertop cooker for a one-person household
              description: |-
                ## Purpose
                Choosing one small appliance well can change solo cooking more than any recipe: an air fryer for crisp food without heating the oven, a rice cooker for hands-off grains, a small slow cooker for two-portion stews. Picking one that fits your actual meals, your counter and your budget avoids an expensive gadget gathering dust.

                ## Milestones
                1. At least five meals you would cook in a new appliance listed.
                2. Air fryer, mini oven, rice cooker and small slow cooker compared against those meals.
                3. A shortlist of two models with capacity, footprint and price.
                4. A decision made, including the option of buying nothing.

                ## Notes
                Start from the **Purchase decision** template. For one person, a compact model is usually plenty; large capacities mostly add counter space and preheating time.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on one countertop appliance, or none, made against at least five meals you would cook in it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List five meals you would cook in a new appliance"
                - "Compare an air fryer, mini oven, rice cooker and small slow cooker"
                - "Measure the counter space you can give up"
                - "Record your decision, including the option of buying nothing"
            - name: Meal kit and ready-meal trial for one
              description: |-
                ## Purpose
                Single-serve meal kits, frozen ready meals and cook-at-home boxes promise less waste for solo eaters, at a price. A four-week trial, with cost per meal and waste recorded against your own cooking, answers whether any of them earn a place in your week.

                ## Milestones
                1. Two services or ranges chosen to trial, with prices per meal.
                2. Each used for two weeks with cost, time and taste recorded.
                3. The results compared with your own cost per home-cooked dinner.
                4. A decision made to keep, use occasionally or cancel.

                ## Notes
                Cancel trial subscriptions before the first full-price renewal, and put that date in your calendar the day you sign up.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of two services against home cooking on cost, time and waste, ending in a keep or cancel decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick two meal kits or ready-meal ranges sold in single portions"
                - "Put the renewal date of any trial subscription in your calendar"
                - "Record cost, time and taste for each meal over two weeks"
                - "Compare with your cost per home-cooked dinner and decide"
            - name: Vegetable variety without waste
              description: |-
                ## Purpose
                Solo cooks often eat the same two vegetables because a whole cauliflower or a bag of kale is too much for one. Choosing three vegetables a week with different shelf lives, and planning a use for all of each, gives more variety than buying many and binning half.

                ## Milestones
                1. Three vegetables chosen each week: one fast, one medium and one slow to spoil.
                2. Two dinners planned for each vegetable before buying it.
                3. Ten different vegetables eaten over a month.
                4. No more than two vegetables thrown away that month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Ten different vegetables eaten in a month, three planned per week, with no more than two thrown away."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose three vegetables with different shelf lives for the week @recurring(weekly:fri)"
                - "Plan two dinners for each vegetable before you buy it"
                - "Keep a tally of different vegetables eaten this month"
                - "Note any vegetable thrown away and why"
            - name: Solo breakfast beyond cereal
              description: |-
                ## Purpose
                Breakfast is the meal people living alone most often skip or eat standing up, yet it is the easiest one to cook for one. A rotation of four breakfasts (overnight oats in a jar, eggs on toast, yoghurt with fruit and nuts, a weekend cooked breakfast for one) adds variety and uses up bread, fruit and eggs before they turn.

                ## Milestones
                1. Four breakfasts chosen, including one weekend cooked breakfast.
                2. Ingredients for all four on the standing list.
                3. Breakfast eaten at home on most days for a month.
                4. A note of which breakfasts use up ingredients from dinners.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four breakfasts in rotation and breakfast eaten at home on at least five days a week for a month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose four breakfasts, including one cooked weekend breakfast"
                - "Keep oats, yoghurt, fruit and eggs on the standing list"
                - "Make overnight oats in a jar for tomorrow morning"
                - "Note which breakfasts use up dinner leftovers"
            - name: Windowsill herbs and leaf storage
              description: |-
                ## Purpose
                Fresh herbs and salad leaves are sold in quantities sized for four and wilt within days, so solo cooks either skip them or bin most of the bag. A pot or two of hardy herbs on the windowsill and better leaf storage (dry, wrapped, in a lidded box) mean a handful when you need it and no slimy bags.

                ## Milestones
                1. The two or three herbs you use most potted on a bright sill.
                2. A leaf storage method tested until bags last a week.
                3. Soft herbs that do not grow well indoors chopped and frozen in oil.
                4. Herb and leaf waste down to almost none.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two herbs growing on a windowsill and salad leaves lasting a week in the fridge, kept up for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the two herbs you use most and buy them in pots"
                - "Store salad leaves dry in a lidded box lined with kitchen paper"
                - "Freeze leftover soft herbs chopped in oil in an ice cube tray"
                - "Water and trim the windowsill herbs @recurring(weekly:tue)"
            - name: Thirty days of home-cooked dinners
              description: |-
                ## Purpose
                Committing to a month with a clear rule, a dinner you cooked or assembled yourself on at least 25 of 30 nights, proves that solo cooking is sustainable and shows exactly where your system breaks. Fallback plates, freezer portions and remixes all count; the aim is cooking, not perfection.

                ## Milestones
                1. A start date and the rule written down.
                2. A daily tick recorded for each home-cooked or assembled dinner.
                3. Each missed night noted with the reason.
                4. The month finished with at least 25 ticks and three lessons written down.

                ## Notes
                Start from the **Habit tracker** template. Pick a month without travel or a heavy work deadline.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Thirty nights tracked with at least 25 home-cooked or assembled dinners and three written lessons."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Choose a start date in a month without travel"
                - "Set up a thirty-night tracker from the habit tracker template"
                - "Note the reason beside every night you did not cook"
                - "Write three lessons about where the system broke"
            - name: Sunday roast scaled for one
              description: |-
                ## Purpose
                Roast dinners feel like family food, and many people living alone stop having them. A roast for one is entirely possible with the right cut (a single chicken leg, a poussin, a lamb shank or a thick pork chop), a small tray of potatoes and one pan of gravy, and the leftovers make Monday's dinner.

                ## Milestones
                1. A cut chosen that suits one person and a small tray.
                2. A timing plan written so meat, potatoes and vegetables finish together.
                3. The roast cooked and eaten at the table.
                4. Leftovers turned into a second meal.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A roast dinner for one cooked to a written timing plan, with the leftovers used in a second meal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a single-portion cut and ask the butcher for it"
                - "Write a timing plan working back from when you want to eat"
                - "Cook the roast with potatoes, one vegetable and pan gravy"
                - "Turn the leftovers into Monday's dinner"
            - name: Birthday dinner cooked for yourself
              description: |-
                ## Purpose
                Treating your own birthday as an occasion worth cooking for is a small act of self-respect that many people living alone skip. Planning a menu around something you love but rarely make, buying the best version of one ingredient and setting the table properly turns it into a night to look forward to.

                ## Milestones
                1. A two or three course menu chosen around a favourite dish.
                2. One special ingredient bought, such as a good steak, fresh fish or a cheese.
                3. Prep planned so the evening itself is relaxed.
                4. The meal cooked and a photo or note kept.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planned birthday dinner of at least two courses cooked for yourself and recorded with a photo or note."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a favourite dish you rarely make as the centre of the menu"
                - "Buy one special ingredient from a good shop"
                - "Plan the prep so most of it happens earlier in the day"
                - "Start planning next year's birthday dinner a month ahead @recurring(yearly)"
            - name: Festive day dinner for one
              description: |-
                ## Purpose
                Christmas, Eid, Thanksgiving, Diwali or Lunar New Year can be the hardest days for people eating alone, and a family-scale feast makes no sense for one. Planning a scaled-down festive meal that keeps the dishes that matter most to you, with a short timeline, makes the day feel marked rather than endured.

                ## Milestones
                1. The two or three dishes that make the day feel festive to you named.
                2. Each scaled to one or two portions, with any freezable parts made ahead.
                3. Ingredients ordered or bought before shops close or get busy.
                4. The meal cooked on the day, with an invitation accepted or offered if you want company.

                ## Notes
                If you would like company, many community groups and places of worship host shared meals on festival days. Ask a few weeks ahead.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A festive meal for one or two cooked on the day from a written plan, with key dishes scaled and shopping done in advance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Name the two or three dishes that make the day feel festive"
                - "Scale each to one or two portions and freeze what you can ahead"
                - "Order or buy ingredients before the shops get busy"
                - "Start planning your festive meal four weeks ahead @recurring(yearly)"
            - name: First dinner for a guest from a solo kitchen
              description: |-
                ## Purpose
                After cooking for one for a while, scaling up for a friend can feel daunting, and the small pans may not stretch. Planning a simple menu that doubles cleanly, checking you have enough plates and a big enough pan, and cooking the main dish once in advance takes the nerves out of having someone round.

                ## Milestones
                1. A guest invited and asked about anything they do not eat.
                2. A menu chosen that doubles easily, ideally around one dish you know well.
                3. Equipment checked for two: plates, glasses, pans and chairs.
                4. The dinner hosted, with a note on what to change next time.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dinner for one guest hosted from a menu that was checked for equipment and dietary needs in advance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Invite one friend and ask about anything they do not eat"
                - "Pick a menu built around a dish you already cook well"
                - "Check you have enough plates, glasses and a pan large enough for two"
                - "Write what to change before you next have a guest"
            - name: Cooking again after bereavement or separation
              description: |-
                ## Purpose
                Losing a partner or splitting up often means losing the person you cooked with or for, and appetite and motivation can go with them. Starting gently, with easy foods you like, ready meals without guilt and one simple cooked meal a week, rebuilds the habit at a pace that suits grief rather than a meal plan.

                ## Milestones
                1. A small stock of easy foods and ready meals you enjoy kept in.
                2. One simple cooked meal a week for a month.
                3. One meal a week shared with a friend or relative.
                4. A gradual return toward a solo cooking rhythm that suits you now.

                ## Notes
                If you are eating very little or losing weight without trying, mention it to your doctor. Bereavement services can also help with the practical side of suddenly living alone.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four consecutive weeks with at least one home-cooked meal and one shared meal each week."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Stock the cupboard and freezer with easy foods you enjoy"
                - "Ask a friend or relative to share a meal with you once a week"
                - "Write down two dishes you used to love cooking"
                - "Cook one simple meal you like and note how it went @recurring(weekly:sat)"
            - name: Recalibrating quantities after family cooking
              description: |-
                ## Purpose
                Parents whose children have left home, and anyone who has cooked for a crowd for decades, often keep buying and cooking for four out of habit. Relearning quantities, shopping lists and pan sizes for one or two stops the fridge filling with leftovers nobody eats and the bin filling with the rest.

                ## Milestones
                1. A week of shopping and cooking compared against what was actually eaten.
                2. Five regular family recipes rewritten for one or two.
                3. Standing shopping list quantities cut to match.
                4. Family-size versions kept for when visitors come.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Five regular family recipes rewritten for one or two, with the weekly shopping list cut to match."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note how much of this week's cooking ended up thrown away"
                - "Rewrite five family recipes for one or two portions"
                - "Cut the quantities on your standing shopping list"
                - "Keep the family-size versions in a folder for when visitors come"
            - name: Midday main meal routine for retirees
              description: |-
                ## Purpose
                Many people who live alone in retirement find a cooked meal at lunchtime easier than one in the evening: more energy, daylight shopping and a lighter supper later. A weekly plan built around a midday main, with a simple tea or supper, gives the day a shape and makes cooking feel like less of an effort.

                ## Milestones
                1. A midday main meal tried for two weeks.
                2. A weekly plan of midday mains with simple suppers.
                3. The main food shop moved to quieter daytime hours.
                4. A note on how energy, appetite and sleep feel after a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of planned midday main meals with suppers written down, and a note on how the routine suits you."
                cadence: rolling
              tasks:
                - "Try a cooked main meal at lunchtime for two weeks"
                - "Plan the week's midday mains and light suppers @recurring(weekly:fri)"
                - "Move your main food shop to a quiet weekday morning"
                - "Write a note on energy and appetite after a month"
            - name: Cooking for one with low energy or after an operation
              description: |-
                ## Purpose
                Recovering from surgery, living with a long-term condition or managing fatigue makes standing at the hob hard, and there is nobody else to take over. Preparing ahead, with a freezer of portions, a stool by the counter, pre-chopped vegetables and a list of sit-down meals, means good food continues on the low days.

                ## Milestones
                1. Ten freezer portions ready before a planned operation or expected bad spell.
                2. The kitchen set up for sitting: a stool, everyday items at waist height.
                3. A list of low-effort meals that need little standing or lifting.
                4. Any food instructions from your care team written on the fridge.

                ## Notes
                Ask your care team about lifting limits and any food restrictions after an operation, and say yes to offers of help with shopping.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten freezer portions and a written list of low-effort meals in place, with the kitchen set up for sitting."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Cook and freeze ten single portions before the operation or bad spell"
                - "Put a stool by the counter and move heavy items to waist height"
                - "Write a list of meals that need little standing or lifting"
                - "Ask your care team about any food rules after the operation"
            - name: Shift work meals for one at odd hours
              description: |-
                ## Purpose
                Night shifts and rotating rotas make normal dinner times meaningless and push solo workers toward vending machines and late-night delivery. Planning a main meal before the shift, a packed meal for the break and something light on return, with portions ready in the fridge, keeps you fed around the rota.

                ## Milestones
                1. Meal times fitted to each of your shift patterns.
                2. A cooked meal ready to reheat for the shift break.
                3. A light meal on hand for after a night shift.
                4. Delivery orders on shift days halved over a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A meal plan for each shift pattern and delivery orders on shift days halved over a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write meal times for each shift pattern you work"
                - "Cook a double portion before a shift block and box one for the break"
                - "Keep a light meal ready for when you get home after nights"
                - "Count delivery orders on shift days for a month"
            - name: Regular shared meals with friends or neighbours
              description: |-
                ## Purpose
                Eating alone every night is one of the less talked-about costs of living alone, especially in later life. A regular shared meal, such as a monthly supper with a neighbour, a portion swap with a friend who also lives alone, or a community lunch club, adds company and variety without hosting a dinner party.

                ## Milestones
                1. Two or three people or groups who might share a meal identified.
                2. One regular arrangement agreed: a supper, a swap or a club.
                3. The arrangement kept for three months.
                4. A second arrangement added if the first works.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A regular shared meal or portion swap kept at least monthly for three months."
                cadence: rolling
              tasks:
                - "List neighbours, friends or local clubs who might share a meal"
                - "Suggest a monthly supper or portion swap to one of them"
                - "Look up community lunch clubs near you"
                - "Cook or share the month's shared meal @recurring(monthly:18)"
            - name: Pan sauces and plating for a single plate
              description: |-
                ## Purpose
                Restaurant cooks make one plate at a time, which is exactly the solo cook's situation. Learning a pan sauce from the browned bits left after cooking a single piece of meat (deglaze, reduce, finish with butter) and a few plating habits makes an ordinary weeknight dinner look and taste like a treat for almost no extra cost.

                ## Milestones
                1. A basic pan sauce made five times with different liquids.
                2. Two sauce variations written down: a wine or stock reduction and a cream or mustard one.
                3. Plating habits practised: warm plate, sauce under rather than over, one fresh garnish.
                4. A photo kept of the best plate.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Five pan sauces made after cooking a single portion, with two written variations and a photo of the best plate."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Make a pan sauce from the browned bits after tonight's single portion of meat"
                - "Try wine, stock and cider as the deglazing liquid"
                - "Warm the plate and put the sauce under the meat, not over"
                - "Write your two favourite sauce variations on a card"
            - name: Frozen flavour bases in single-use cubes
              description: |-
                ## Purpose
                Nearly every dinner for one starts with the same slow steps: softening onion, garlic and ginger, making stock, chopping herbs. Freezing these in ice cube trays (a soffritto, ginger and garlic paste, concentrated stock, herb butter coins, a curry base) means each portion of flavour is ready in seconds and nothing is wasted.

                ## Milestones
                1. Four flavour bases chosen for the cuisines you cook most.
                2. Each made in a batch, frozen in a cube tray, then bagged and labelled.
                3. Cubes used in at least two dinners a week for a month.
                4. A restocking routine in place.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four labelled flavour base cubes stocked in the freezer and used in at least eight dinners over a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose four flavour bases for the cuisines you cook most"
                - "Make a batch of each and freeze it in an ice cube tray"
                - "Bag and label the cubes with contents and date"
                - "Make a fresh batch of whichever cube is running out @recurring(monthly:26)"
            - name: Vacuum sealing and sous vide for single portions
              description: |-
                ## Purpose
                For a confident solo cook, a vacuum sealer and an immersion circulator solve two problems: portions keep far longer in the freezer without freezer burn, and a single steak or fillet can go from frozen to evenly cooked with no guesswork. The kit costs real money, so it is worth judging the need and trialling it before buying.

                ## Milestones
                1. A month of freezer burn and wasted portions noted to judge the need.
                2. The kit borrowed or a budget model chosen.
                3. Five single portions sealed, frozen and cooked sous vide.
                4. A time and temperature card for your regular proteins, taken from a reputable published guide.

                ## Notes
                Low-temperature cooking has its own safety rules on time and temperature, especially for poultry. Follow a reputable published guide rather than guessing.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on vacuum sealing and sous vide after five sealed and cooked portions, with a time and temperature card if kept."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note any freezer burn or wasted portions over the next month"
                - "Borrow a vacuum sealer and circulator or choose a budget model"
                - "Seal, freeze and cook five single portions sous vide"
                - "Write a time and temperature card from a published guide"
            - name: Personal single-serve recipe book
              description: |-
                ## Purpose
                Over a year, a solo cook adapts dozens of recipes, and the adjustments live only in memory or scribbled margins. Collecting your tested single-serve and two-portion versions into one book, with quantities, timings, freezer notes and remix ideas, turns that experience into something you can hand to a friend who has just started living alone.

                ## Milestones
                1. A format chosen: a binder, a notes app or a shared document.
                2. Twenty tested recipes written up with single or double quantities.
                3. Each recipe carrying freezer, remix and reheating notes.
                4. A copy shared with someone who has just started cooking for one.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A recipe book of twenty tested single-serve recipes with freezer and remix notes, shared with at least one person."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a format for your recipe book and create the first page"
                - "Ask the agent to turn your scribbled notes into consistent recipe cards"
                - "Add one tested recipe to the book @recurring(monthly:28)"
                - "Share a copy with someone who has just started living alone"
---

# Cooking for One

Cooking for one is its own craft: recipes are written for four, packs are sized for families and nobody else is there to finish the leftovers. This area is for anyone living alone, from a first flat to retirement, and runs from the foundations (an honest audit, small pans, a working freezer, scaling rules and ten dependable dinners) through the weekly machinery of planning, eating in the right order and rotating the freezer, the single-portion skills, the decisions about appliances, meal kits and takeaways, the occasions worth cooking for, the situations that change how you eat, and finally the techniques of an experienced solo cook.

What repeats is a Saturday plan built from cook-once pairs, Sunday component prep, a midweek fridge check and remix night, a monthly freezer rotation and cost per meal check, a seasonal repertoire refresh and a yearly review. The Purchase decision, Weekly meal plan, Metrics log and Habit tracker templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
