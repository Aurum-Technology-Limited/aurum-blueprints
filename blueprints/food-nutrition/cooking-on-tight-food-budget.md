---
id: food-nutrition.cooking-on-tight-food-budget
name: Cooking on a Tight Food Budget
description: "An honest food spend figure, a daily cost ceiling, a costed repertoire built on cheap staples, weekly big pots and planned leftovers, and plans for students, renters, families and lean months."
category: personal
version: 1.0.0
tags: [food-nutrition, cooking-on-tight-food-budget, everyone, student, renter, cheap-staples, cost-per-portion, leftovers]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - weekly-meal-plan
    - purchase-decision
    - monthly-budget-bills
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cooking on a Tight Food Budget
          description: "Eating well for less with cheap staples, price comparison, cook-from-scratch meals and leftovers for students, families and anyone squeezed."
          projects:
            - name: Four-week total food spend including takeaways
              description: |-
                ## Purpose
                Most people underestimate what they spend on food by a third or more, because supermarket receipts are only part of it: meal deals, coffees, vending snacks, delivery apps and the corner shop top-up slip past unnoticed. Logging every food and drink purchase for four weeks, from every source, gives the honest figure that every later saving is measured against.

                ## Milestones
                1. Every food and drink purchase for four weeks recorded, including takeaways, snacks and drinks bought out.
                2. Spending split into groceries, eating out, takeaway and delivery, and food and drink on the go.
                3. A weekly average and a per-person figure worked out from the four weeks.
                4. The two biggest leaks outside the main shop named in writing.

                ## Notes
                Bank and card statements catch what receipts miss. Cash is the usual blind spot, so keep a running note on your phone for anything paid in coins or notes.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A four-week log of all food and drink spending exists, split into four categories, with a weekly average and the two biggest leaks named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Start a phone note for every food and drink purchase from today"
                - "Download four weeks of card and bank statements when the period ends"
                - "Sort every food purchase into groceries, eating out, takeaway and on-the-go"
                - "Work out the weekly average and the figure per person"
                - "Name the two biggest leaks outside the main shop"
            - name: Daily food cost ceiling per person
              description: |-
                ## Purpose
                Knowing that a day's food should cost a set amount per person turns a vague wish to spend less into a number you can check any recipe against. Setting the ceiling from what is genuinely left after rent, bills and debt payments, rather than from a figure seen online, makes it one you can keep without going hungry.

                ## Milestones
                1. The money available for food each month worked out after fixed costs.
                2. A daily ceiling per person, with young children counted as a fraction of an adult if that fits your household.
                3. Rough limits for breakfast, lunch and dinner that add up to the daily ceiling.
                4. The ceiling written where meal plans are made.

                ## Notes
                Leave a small margin for the weeks when several staples run out at once or a birthday comes round. A ceiling with no slack gets abandoned in the first bad week.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written daily food cost ceiling per person, split into rough breakfast, lunch and dinner limits, is based on money left after fixed costs."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List rent, bills and debt payments to find what is left for food"
                - "Divide the monthly food money by the days and the people in the household"
                - "Split the daily figure into rough breakfast, lunch and dinner limits"
                - "Pin the ceiling inside a cupboard door or at the top of the meal plan"
                - "Review the ceiling against current income and rent @recurring(yearly)"
            - name: Fifteen cheap staples starter cupboard
              description: |-
                ## Purpose
                Fifteen inexpensive staples, such as rice, oats, pasta, red lentils, tinned tomatoes, tinned beans, onions, carrots, potatoes, eggs, frozen peas, flour, stock cubes, oil and one spice blend, can produce dozens of different meals. Getting this core in place before chasing recipes means most dinners need only one or two fresh extras bought that week.

                ## Milestones
                1. A written list of fifteen staples chosen for your household's tastes and kitchen.
                2. Each staple bought in the largest size you can store and finish before it goes stale.
                3. The cheapest acceptable version of each staple noted, own brand or otherwise.
                4. At least five meals written down that use only the staples plus one fresh item.

                ## Notes
                Build the cupboard over three or four shops rather than one if money is tight, starting with the items that make the most meals: rice, tinned tomatoes, onions and lentils.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fifteen named staples are in the cupboard, with the cheapest acceptable version of each noted and five staples-only meals written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a list of fifteen staples your household will actually eat"
                - "Check what is already in the cupboards before buying any of them"
                - "Buy the missing staples over the next three shops, most versatile first"
                - "Write five meals that use only staples plus one fresh item"
            - name: Costing your regular meals per portion
              description: |-
                ## Purpose
                Until a meal is costed, there is no way to tell whether the cheap-feeling pasta bake really beats the chicken stir-fry it replaced. Working out the cost per portion of the eight to ten dinners you cook most often, from current shelf prices and the amount actually used, shows which ones earn their place and which quietly blow the budget.

                ## Milestones
                1. Eight to ten regular dinners listed with the quantity of every ingredient used.
                2. Each ingredient priced by the amount used, not by the whole pack.
                3. A cost per portion for every dinner, including oil, spices and stock.
                4. The dinners ranked from cheapest to dearest against your dinner limit.

                ## Notes
                Count a spoon of spice or a splash of oil as a small fraction of its pack price rather than zero. Across a month of cooking they add up to a real sum.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Eight to ten regular dinners each have a written cost per portion and are ranked against the dinner limit from the daily ceiling."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the dinners you have cooked most often in the last month"
                - "Write the quantity of each ingredient one batch actually uses"
                - "Price each ingredient by the amount used, from your latest receipts"
                - "Rank the dinners by cost per portion against your dinner limit"
            - name: Ten-dinner budget repertoire
              description: |-
                ## Purpose
                Ten dinners you can cook without a recipe, all under your dinner limit, cover two weeks of evenings with no planning stress and less temptation to order in. Picking them deliberately, with a mix of pulses, eggs, cheap meat and vegetables, keeps the rotation varied enough that the household does not revolt by week three.

                ## Milestones
                1. Ten dinners chosen, each costed under the dinner limit.
                2. The ten spread across at least four main ingredients, so no single one dominates.
                3. Every dinner cooked at least once and judged worth repeating by the people eating it.
                4. The ten written on one page with the staples each one needs.

                ## Notes
                Drop a dinner the moment the household groans at it. A cheap meal nobody eats is the most expensive one on the list.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page list of ten dinners exists, each costed under the dinner limit and cooked at least once, spread across four or more main ingredients."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist fifteen cheap dinners from your costed meals and family favourites"
                - "Cut the list to ten with at least four different main ingredients"
                - "Cook each new dinner once and ask the household for a verdict"
                - "Write the final ten on one page with the staples each needs"
            - name: Protein cost ranking per 20 grams
              description: |-
                ## Purpose
                Protein is usually the dearest part of a plate, and the cheapest sources are not always the obvious ones: dried lentils, eggs, milk, tinned sardines, chicken thighs and peanut butter often beat mince and fillets by a wide margin. Ranking the protein foods your household eats by the cost of 20 grams of protein shows where to shift spending without eating less well.

                ## Milestones
                1. Ten protein foods your household eats listed with pack price and protein per 100 grams from the label.
                2. The cost of 20 grams of protein worked out for each.
                3. A ranked list from cheapest to dearest stuck inside a cupboard door.
                4. Two dearer proteins in the current plan swapped for cheaper ones from the top of the list.

                ## Notes
                Read the protein figure from the nutrition panel for the product as sold. Dried pulses and rice gain weight when cooked, so compare dry weight with dry weight.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of ten protein foods by cost per 20 grams of protein is on display, and two dearer proteins have been swapped out of the plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List ten protein foods your household buys or would happily eat"
                - "Note each pack price and the protein per 100 grams from the label"
                - "Work out the cost of 20 grams of protein for each food"
                - "Swap two dearer proteins in next week's plan for cheaper ones"
                - "Reprice the protein ranking with current shelf prices @recurring(yearly)"
            - name: Energy cost of each cooking method
              description: |-
                ## Purpose
                Running a full electric oven for an hour can cost several times as much as a microwave, slow cooker or air fryer doing a similar job, and in a rented flat on a prepayment meter the difference shows up fast. Checking the power rating of each appliance against your unit rate gives a real cost per use, so cheap ingredients are not undone by expensive cooking.

                ## Milestones
                1. The power rating of the oven, hob, microwave, kettle and any small appliances found from labels or manuals.
                2. Your current energy unit rate taken from a bill or the meter.
                3. A rough cost per typical use worked out for each appliance.
                4. Three dinners moved to a cheaper method, or the oven filled with more than one dish whenever it is on.

                ## Notes
                Lids on pans, boiling only the water you need and cooking two things in one oven session are the free savings. Use them before buying any new gadget.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cost per typical use exists for each cooking appliance in the kitchen, and three dinners have moved to a cheaper method."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the power rating label on the oven, microwave and small appliances"
                - "Look up your current energy unit rate on a bill or the meter"
                - "Work out the cost of a typical session on each appliance"
                - "Move three regular dinners to the cheapest suitable method"
            - name: Three fallback meals instead of a takeaway
              description: |-
                ## Purpose
                Takeaways rarely happen because someone craves one; they happen at eight in the evening when everyone is tired and nothing is defrosted. Three fallback meals that take fifteen minutes from cupboard staples, with their ingredients kept permanently in reserve, give a cheaper answer to that moment than the delivery app.

                ## Milestones
                1. Three meals chosen that take fifteen minutes or less from staples alone.
                2. The ingredients for all three kept as a reserve that is not raided for other cooking.
                3. The three meals written on a card inside a cupboard door.
                4. At least one takeaway in the next month replaced by a fallback meal.

                ## Notes
                Good candidates are egg fried rice with frozen peas, pasta with garlic and tinned tomatoes, cheese and beans on toast, or a tinned fish and rice bowl with soy sauce.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ingredients for three fifteen-minute fallback meals are held in reserve, the meals are on a card, and one takeaway has been replaced in the first month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick three meals you can cook in fifteen minutes from staples"
                - "Buy a reserve set of ingredients for all three"
                - "Write the three meals on a card inside a cupboard door"
                - "Move delivery apps off your phone's home screen"
            - name: Second-hand basic cooking kit
              description: |-
                ## Purpose
                Cheap cooking needs only a short list of equipment: one large lidded pot, a frying pan, a baking tray, a sharp knife, a board, a sieve and a few lidded containers. Finding these second-hand, from charity shops, free-to-collect groups or relatives clearing out, saves money twice: on the kit itself, and on the meals it makes possible.

                ## Milestones
                1. A list of the kit you already have and the gaps against the basic list.
                2. Every gap filled second-hand or cheaply, with the big pot first.
                3. Enough lidded containers to hold four portions of leftovers.
                4. Any duplicate or unused kit passed on or sold.

                ## Notes
                A pot of five litres or more is the single item that makes big batches of soup, dal and chilli possible. Skip second-hand non-stick pans with flaking coating.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A large lidded pot, frying pan, tray, knife, board, sieve and containers for four portions are in the kitchen, with gaps filled second-hand."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your kitchen against the basic kit list and write down the gaps"
                - "Post a wanted request for a large lidded pot on a local free-to-collect group"
                - "Visit two charity shops for the remaining gaps"
                - "Pass on any duplicate kit you will not use"
            - name: Cupboard-first budget meal plan
              description: |-
                ## Purpose
                Planning the week from a recipe book or the shop's offers means buying a fresh set of ingredients every time. Starting each plan from what is already in the cupboard, fridge and freezer, then buying only for the gaps, routinely trims the weekly shop and uses up the half-bags of things before they go stale.

                ## Milestones
                1. A weekly plan written every week, starting from a quick check of cupboard, fridge and freezer.
                2. At least two dinners a week built mainly from food already in.
                3. A shopping list limited to the gaps the plan leaves.
                4. Four weeks of plans kept so the cheap good weeks can be repeated.

                ## Notes
                Start from the **Weekly meal plan** template. Plan dinners first, then fill breakfasts and lunches from leftovers and staples.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly plans exist, each starting from a cupboard check and each with at least two dinners built from food already in."
                cadence: rolling
              tasks:
                - "Check the cupboard, fridge and freezer and list what needs using"
                - "Plan next week's dinners from that list before opening any recipes @recurring(weekly:thu)"
                - "Write the shopping list only for the gaps the plan leaves"
                - "Keep each week's plan so the cheap good weeks can be repeated"
            - name: Cook once, eat twice planned leftovers
              description: |-
                ## Purpose
                Cooking a double quantity costs little more in time and energy than a single one, and the second meal is the cheapest food in the house. Deciding in advance which dinners are cooked twice-sized and what the leftovers become, such as chilli turning into stuffed jacket potatoes or roast vegetables into a pasta sauce, makes leftovers a planned meal rather than a tub at the back of the fridge.

                ## Milestones
                1. Three dinners in the repertoire chosen as reliable double-batch meals.
                2. A second-day version written for each, so the leftovers do not taste like a repeat.
                3. Two double-batch dinners a week on the plan.
                4. Leftovers eaten within the safe fridge time or frozen on the day of cooking.

                ## Notes
                Cool leftovers quickly and follow your food safety authority's guidance on how long they keep. When in doubt, freeze the second portion the same evening.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two double-batch dinners a week appear on the plan for four weeks running, each with a named second-day meal."
                cadence: rolling
              tasks:
                - "Pick three dinners from your repertoire that scale up easily"
                - "Write a second-day version for each of the three"
                - "Cook a double batch and label the second meal with its day @recurring(weekly:tue)"
                - "Freeze any portion not planned for the next two days"
            - name: Month-to-date food spend tally
              description: |-
                ## Purpose
                Money spent on food leaks out in small amounts that only show as a total at the end of the month, when it is too late to adjust. A running tally updated once a week, covering the main shop, top-ups and everything bought out, shows by the second week whether the month is on track and leaves time to switch to cupboard meals if it is not.

                ## Milestones
                1. A tally with one line per week and columns for main shop, top-ups and food bought out.
                2. Every week of the month entered within two days of its end.
                3. A month-end total compared with the ceiling and the difference noted.
                4. One change agreed for the following month whenever the total runs over.

                ## Notes
                Start from the **Metrics log** template. Banking apps that tag spending by category do most of the work, but check them: supermarkets that also sell clothes and fuel confuse the categories.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every week of three consecutive months is in the tally, with each month-end total compared against the food ceiling."
                cadence: rolling
              tasks:
                - "Set up a tally with columns for main shop, top-ups and food bought out"
                - "Add last week's food spending from receipts and the banking app @recurring(weekly:mon)"
                - "Compare the month's food total with your ceiling @recurring(monthly:28)"
                - "Agree one change for next month whenever the total runs over"
            - name: Weekly big pot of pulses
              description: |-
                ## Purpose
                Dried beans, lentils and chickpeas cost a fraction of tinned ones and far less than meat for the same protein, but only if a pot actually gets cooked. One big pot a week on a set day gives tubs of ready pulses for soups, curries, salads, mash and burgers through the following days.

                ## Milestones
                1. A set cooking day and a rotation of four pulses chosen.
                2. A big pot cooked each week and portioned into labelled tubs.
                3. At least three meals a week using that pot's pulses.
                4. A month of pots cooked, with the cost compared against buying tins.

                ## Notes
                Red lentils need no soaking and cook in about twenty minutes, so start there. Dried kidney beans must be boiled hard for at least ten minutes before simmering; follow the packet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A big pot of pulses has been cooked every week for a month, each feeding at least three meals, with the saving against tins written down."
                cadence: rolling
              tasks:
                - "Choose a cooking day and four pulses to rotate"
                - "Soak the next batch of beans or chickpeas the night before"
                - "Cook a big pot of pulses and portion it into labelled tubs @recurring(weekly:sat)"
                - "Compare a month of home-cooked pulses with the price of tins"
            - name: Week-before-payday cupboard menu
              description: |-
                ## Purpose
                The last week before payday is when the money runs thin and expensive emergency shops happen. A pre-written menu for that week, made entirely from long-life staples bought early in the month, means the lean week is planned and fed calmly rather than scrambled through.

                ## Milestones
                1. Seven days of meals written that need only long-life staples.
                2. The ingredients for that week bought in the first shop after payday and kept apart.
                3. One lean week eaten from the menu with no top-up beyond milk and bread.
                4. The menu adjusted after the first run, based on what the household found hard.

                ## Notes
                Keep the reserve on its own shelf or in a labelled box. If it gets raided mid-month, the plan fails exactly when it is needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A seven-day staples-only menu exists, its ingredients are set aside each month, and one lean week has been eaten from it."
                cadence: cyclic
              tasks:
                - "Write seven days of meals from long-life staples only"
                - "Buy the menu's ingredients in the first shop after payday"
                - "Keep the reserve in a labelled box away from everyday food"
                - "Check the reserve box is complete before the lean week @recurring(monthly:20)"
            - name: Friday fakeaway instead of delivery
              description: |-
                ## Purpose
                Delivery apps add fees, tips and higher menu prices to a meal that often costs four or five times its home-made version. Fixing one night a week for a home-cooked copy of the household's favourite takeaway, such as spiced chicken with oven chips, flatbread pizza or a chickpea curry with rice, keeps the treat and drops most of the cost.

                ## Milestones
                1. The household's three most ordered takeaways listed with their usual cost.
                2. A home-made version of each cooked and costed.
                3. One night a week fixed as the home takeaway night.
                4. Takeaway orders cut by at least half over two months, checked against the spend tally.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Takeaway orders over two months are at most half the number in the four-week baseline, with a weekly home takeaway night in place."
                cadence: rolling
              tasks:
                - "List the three takeaways your household orders most and what each costs"
                - "Find a home-made version of each and cost it per portion"
                - "Cook the home takeaway on your chosen night @recurring(weekly:fri)"
                - "Compare two months of takeaway orders with the baseline"
            - name: Low-cost breakfast rotation
              description: |-
                ## Purpose
                Breakfast cereals, pastries and coffees bought on the way can quietly cost more per day than the evening meal. A rotation of three or four cheap breakfasts, such as porridge, overnight oats, eggs on toast and yoghurt with banana, set up so each takes five minutes, cuts that cost to a fraction and keeps people full until lunch.

                ## Milestones
                1. The current cost of a typical breakfast per person worked out.
                2. Three or four cheap breakfasts chosen that everyone will eat.
                3. The rotation's ingredients added to the staples list.
                4. Breakfasts bought on the way to work or class down to one a week or fewer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three or four costed breakfasts are in rotation, and bought breakfasts have been one a week or fewer for a month."
                cadence: rolling
              tasks:
                - "Work out what a typical breakfast costs each person now"
                - "Choose three or four cheap breakfasts everyone will eat"
                - "Add the rotation's ingredients to the staples list"
                - "Make a jar of overnight oats or porridge mix for the week @recurring(weekly:sun)"
            - name: One new cheap recipe a month
              description: |-
                ## Purpose
                Even a good budget repertoire gets boring after a few months, and boredom is what sends people back to ready meals and takeaways. Trying one new recipe a month that fits the dinner limit, and keeping it only if the household rates it, refreshes the rotation slowly without wasting money on ingredients that never get used again.

                ## Milestones
                1. A source of tested cheap recipes chosen, such as a library cookbook or a budget cooking site.
                2. One new recipe cooked and costed each month.
                3. A household verdict recorded for each: keep, tweak or drop.
                4. At least three new keepers added to the repertoire within six months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six new recipes have been cooked and costed over six months, each with a recorded verdict, and at least three added to the repertoire."
                cadence: rolling
              tasks:
                - "Borrow a budget cookbook from the library or bookmark a budget recipe site"
                - "Pick next month's recipe and check its ingredients against the staples"
                - "Cook and cost one new budget recipe @recurring(monthly:12)"
                - "Record the household verdict and add keepers to the repertoire"
            - name: Quarterly recosting of the budget repertoire
              description: |-
                ## Purpose
                Prices for staples like oil, butter, rice and coffee can jump sharply within a single quarter, so a dinner costed in spring may be well over the limit by autumn. Repricing the repertoire every three months catches the meals that have crept up and prompts a swap before the monthly total shows the damage.

                ## Milestones
                1. Current prices noted for every ingredient in the ten-dinner repertoire.
                2. Each dinner's cost per portion updated.
                3. Any dinner now over the limit adjusted with a swap or replaced.
                4. The date and the biggest price movers recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The repertoire's cost per portion has been updated in each of the last two quarters, with every dinner over the limit swapped or replaced."
                cadence: cyclic
              tasks:
                - "Note current shelf prices for every repertoire ingredient @recurring(quarterly)"
                - "Ask the agent to update each dinner's cost per portion from the new prices"
                - "Swap an ingredient in, or replace, any dinner now over the limit"
                - "Write down the three biggest price movers since the last check"
            - name: Four sauces that replace bought jars
              description: |-
                ## Purpose
                Tinned tomatoes cooked down with onion and garlic replace any jarred pasta sauce for a fraction of the price, and the same is true of curry bases, stir-fry sauces and white sauce. Learning four base sauces from staples, well enough to make them without a recipe, removes one of the dearest habits in an otherwise cheap shop.

                ## Milestones
                1. Four base sauces chosen: tomato, curry base, stir-fry and white sauce, or your own four.
                2. Each sauce cooked from staples at least twice.
                3. The cost of each compared with the jar it replaces.
                4. All four made once without looking at a recipe.

                ## Notes
                Make the tomato and curry bases in double quantity and freeze half in portion-sized tubs. They are the two you will reach for most.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four base sauces have each been cooked at least twice from staples, costed against their jar equivalents, and made once without a recipe."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note the four jarred sauces your household buys most"
                - "Cook a tomato sauce from tinned tomatoes, onion and garlic"
                - "Cost each home-made sauce against the jar it replaces"
                - "Make each sauce once without looking at the recipe"
            - name: One whole chicken, three meals
              description: |-
                ## Purpose
                Roasting a whole chicken often costs less per kilo than buying breasts or thighs, and one bird can feed a household three times: a roast, a second meal such as a pie, curry or fried rice, and a pot of soup from the carcass. Learning that sequence turns the most expensive part of many shops into some of its best value.

                ## Milestones
                1. One whole chicken roasted and carved, with meat set aside for a second meal before serving.
                2. A second meal made from the reserved meat within two days.
                3. Stock made from the carcass and turned into soup or frozen.
                4. Cost per portion across all three meals compared with buying portions.

                ## Notes
                Strip the carcass on the evening of the roast and refrigerate the meat promptly. Leaving the bird out overnight is the most common food safety slip with this method.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One whole chicken has fed three separate meals, with the combined cost per portion written down and compared with buying portions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Plan the three meals before buying a whole chicken"
                - "Set aside meat for the second meal before the roast is served"
                - "Simmer the carcass for stock the same evening or the next day"
                - "Work out the cost per portion across all three meals"
            - name: Stretching mince with lentils and vegetables
              description: |-
                ## Purpose
                Mince dishes such as bolognese, chilli, cottage pie and burgers take well to having a third or even half of the meat replaced with red lentils, grated carrot, mushrooms or beans. Most households barely notice the change, the dish gains fibre, and the meat bill on those meals falls sharply.

                ## Milestones
                1. Three regular mince dishes chosen for stretching.
                2. Each cooked with a quarter of the meat replaced, then a third, then a half.
                3. The household's preferred ratio for each dish recorded.
                4. The saving per batch worked out at that ratio.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three mince dishes each have a recorded stretch ratio the household accepts, with the saving per batch written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick three mince dishes you cook regularly"
                - "Cook the first with a quarter of the mince swapped for red lentils"
                - "Raise the swap to a third, then a half, asking for verdicts each time"
                - "Record each dish's preferred ratio and the saving per batch"
            - name: Cooking well with frozen and tinned vegetables
              description: |-
                ## Purpose
                Frozen and tinned vegetables are often a third or more cheaper than fresh, keep for months and are processed soon after picking, so they hold their nutrients well. Learning which ones work in which dishes, such as frozen spinach in curries, tinned sweetcorn in fritters and frozen peas almost everywhere, keeps vegetables on every plate when fresh ones are out of budget.

                ## Milestones
                1. Six frozen or tinned vegetables bought and tried in at least two dishes each.
                2. A short note of which ones work well and which go soggy.
                3. Fresh vegetables replaced by frozen or tinned in three regular dinners.
                4. Tinned vegetables in water chosen over salted brine where available.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six frozen or tinned vegetables have each been tried in two dishes, and three regular dinners have switched from fresh to frozen or tinned."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Buy six frozen or tinned vegetables you rarely use"
                - "Try each in two different dishes over the next fortnight"
                - "Write a note of which ones work and which go soggy"
                - "Switch three regular dinners from fresh to frozen or tinned"
            - name: Five cheap flavour boosters for plain staples
              description: |-
                ## Purpose
                Plain rice, lentils and potatoes taste of very little, and dull food is the main reason cheap cooking gets abandoned. A handful of low-cost boosters, such as soy sauce, garlic, chilli flakes, lemon or vinegar, smoked paprika and stock cubes, used deliberately, make a staples dinner taste like a choice rather than a sacrifice.

                ## Milestones
                1. Five boosters chosen and bought in the cheapest sizes, from world food aisles where possible.
                2. Each one tried in at least three different staple dinners.
                3. A one-line rule written for each, such as acid at the end or garlic warmed in the oil first.
                4. The household rating the boosted versions above the plain ones.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five flavour boosters are in the cupboard, each tried in three staple dinners, with a one-line rule written for each."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose five cheap flavour boosters your household likes"
                - "Buy them in the cheapest size, checking world food aisles first"
                - "Use one booster in each staples dinner for the next fortnight"
                - "Write a one-line rule for how each booster works best"
            - name: Egg dinners for the end of the week
              description: |-
                ## Purpose
                Eggs are among the cheapest complete proteins in most shops, keep for weeks and turn leftover vegetables, rice or potatoes into a meal in ten minutes. Learning four egg dinners, such as a frittata, shakshuka, egg fried rice and a Spanish-style omelette, gives a reliable end-of-week meal when the fresh food has run out.

                ## Milestones
                1. Four egg dinners learned and cooked at least once each.
                2. Each one matched to the leftovers it uses best.
                3. A tray of eggs kept on the staples list at all times.
                4. One end-of-week dinner a week made from eggs and leftovers for a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four egg dinners have each been cooked and matched to the leftovers they use, and one egg dinner a week has been eaten for a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick four egg dinners you have not cooked before"
                - "Cook one each week using whatever leftovers are in the fridge"
                - "Note which leftovers suit each dish best"
                - "Add a tray of eggs to the staples list for good"
            - name: Soup as a cheap dinner, not a starter
              description: |-
                ## Purpose
                Soup thickened with lentils, beans, potato or barley and served with bread is a full meal for a very small cost per bowl, and one pot can cover two dinners and several lunches. Learning three filling soups, each different in character, makes soup a regular dinner rather than something reserved for when someone is ill.

                ## Milestones
                1. Three filling soups chosen, each with a pulse, grain or potato for body.
                2. Each cooked in a big pot and costed per bowl.
                3. Spare portions frozen for lunches or later dinners.
                4. Soup on the dinner plan at least once a week for a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three filling soups have been cooked and costed per bowl, and soup has been a dinner at least once a week for a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose three filling soups with lentils, beans, barley or potato"
                - "Cook the first in your largest pot and cost it per bowl"
                - "Freeze spare bowls in single portions for lunches"
                - "Put soup on the dinner plan once a week for a month"
            - name: Cheap cuts cooked low and slow
              description: |-
                ## Purpose
                Tough, cheap cuts such as beef shin, pork shoulder, lamb neck and chicken thighs on the bone become tender and rich with long, gentle cooking, and cost far less than steaks and fillets. Learning to cook them slowly in a covered pot, low oven or slow cooker means a little meat goes a long way once it is stretched with vegetables and pulses.

                ## Milestones
                1. Three cheap cuts identified at your butcher or supermarket, with their price per kilo.
                2. Each one slow-cooked at least once until tender.
                3. Each dish stretched with vegetables or pulses to at least six portions.
                4. Cost per portion compared with your usual meat dinners.

                ## Notes
                Slow cooking is only cheap if the energy is cheap too. A slow cooker, or a heavy lidded pot on a low hob, usually costs less to run than a full oven for three hours.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three cheap cuts have each been slow-cooked into at least six portions, with cost per portion compared against usual meat dinners."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask at the meat counter which cuts are cheapest for slow cooking"
                - "Slow-cook one cheap cut with vegetables and pulses to make six portions"
                - "Repeat with two more cuts over the following month"
                - "Compare the cost per portion with your usual meat dinners"
            - name: Meals that stay filling until the next one
              description: |-
                ## Purpose
                Hunger between meals sends people to the shop for snacks, and snacks are some of the dearest food for how long they keep anyone full. Meals with protein, fibre and a little fat, such as beans with rice, porridge made with milk or potatoes with eggs, keep people satisfied far longer than white bread and sugary cereal, so building plates that way cuts snack spending.

                ## Milestones
                1. A week of notes on when hunger hits and what was eaten before it.
                2. Your national healthy eating guide's advice on protein, fibre and wholegrains read.
                3. Three regular meals adjusted to add a cheap source of protein or fibre.
                4. Snack spending compared for two weeks before and after.

                ## Notes
                This is about planning cheap, filling meals, not a diet. Anyone with a medical condition that affects what they eat should agree changes with their doctor or a dietitian.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three regular meals have been adjusted for protein or fibre, with two weeks of snack spending compared before and after the change."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note when hunger hits and what you ate before it for one week"
                - "Read your national healthy eating guide's advice on fibre and protein"
                - "Add a cheap protein or fibre source to three regular meals"
                - "Compare two weeks of snack spending before and after"
            - name: Ingredient swaps that cut a recipe's cost
              description: |-
                ## Purpose
                Many recipes call for ingredients that do little for the finished dish but a lot for the bill: pine nuts, fresh herbs bought for one spoonful, parmesan, double cream, butter for frying. A personal list of tested swaps, such as sunflower seeds, dried herbs, mature cheddar, evaporated milk or oil, lets you cook almost any recipe within the dinner limit.

                ## Milestones
                1. Ten recipe ingredients that regularly push dishes over the limit listed.
                2. A cheaper swap found and tested for each.
                3. Swaps the household cannot tell apart kept, and the rest dropped.
                4. The swap list kept with the recipes you cook from.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested swap list of at least eight ingredients, each tried in a real dish, is kept with the household's recipes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List ten ingredients that push recipes over your dinner limit"
                - "Ask the agent to suggest a cheaper swap for each of the ten"
                - "Test each swap in a dish you already know well"
                - "Write the swaps that pass inside your recipe folder"
            - name: Two meat-free dinners a week
              description: |-
                ## Purpose
                Meat and fish are usually the most expensive lines in a shop, and a dinner built on beans, lentils, eggs, cheese or tofu typically costs half as much or less. Making two dinners a week meat-free, using dishes the household already likes such as dal, bean chilli or a vegetable curry, is one of the largest single savings available without eating less.

                ## Milestones
                1. Four meat-free dinners chosen that the household already enjoys or will try.
                2. Two of them on the plan every week for a month.
                3. The month's meat spend compared with the four-week baseline.
                4. Any dish that left people hungry given more protein or replaced.

                ## Notes
                Keep the swaps familiar. A bean chilli served exactly like a beef one, with rice and the same toppings, is an easier sell than a dish nobody recognises.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two meat-free dinners a week were eaten for a month, with the month's meat spend compared against the four-week baseline."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose four meat-free dinners the household likes or will try"
                - "Put two of them on next week's plan"
                - "Compare the month's meat spend with the baseline"
                - "Replace any meat-free dinner that left people hungry"
            - name: Slow cooker, multicooker or neither
              description: |-
                ## Purpose
                Slow cookers and multicookers make cheap cuts and dried pulses practical in a busy week and often cost less to run than an oven, but a gadget bought and left in a cupboard saves nothing. Deciding on evidence, from your cooking habits, energy costs and the space you have, avoids both a wasted purchase and a missed saving.

                ## Milestones
                1. The dinners a slow cooker or multicooker would actually replace listed.
                2. Running cost per use compared with your current method.
                3. Two or three models shortlisted with prices, including second-hand options.
                4. A decision recorded: buy, borrow to trial, or not needed.

                ## Notes
                Start from the **Purchase decision** template. Borrowing one from a friend for a fortnight is the cheapest trial there is.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to buy, borrow or skip a slow cooker or multicooker is recorded, based on listed dinners and a running cost comparison."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the dinners a slow cooker or multicooker would replace"
                - "Compare its running cost per use with your oven or hob"
                - "Shortlist two or three models including second-hand ones"
                - "Record the decision to buy, borrow to trial or skip"
            - name: World food shop for spices, rice and pulses
              description: |-
                ## Purpose
                Shops serving South Asian, Middle Eastern, African, Caribbean, Eastern European or East Asian communities often sell spices, rice, pulses, flour and sauces in larger bags at a much lower price per kilo than the supermarket's world food aisle. Finding the nearest one and comparing a handful of staples can cut the cost of a cupboard that leans on these ingredients.

                ## Milestones
                1. The nearest two or three world food shops or market stalls found.
                2. Per kilo prices for six staples compared with your usual supermarket.
                3. The items worth buying there recorded, in bag sizes you can store.
                4. A first shop done and the saving written down.

                ## Notes
                Big bags of ground spice go stale before they are used up. Split them with a friend, or buy sizes you will finish within six months to a year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Six staples have been compared per kilo between a world food shop and your usual supermarket, with the worthwhile items recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search a map app for world food shops within reach"
                - "Note supermarket per kilo prices for six spices, rice or pulses you buy"
                - "Visit the nearest world food shop and note the same six prices"
                - "Write down which items are worth buying there and in what size"
            - name: Surplus food apps and bags trial
              description: |-
                ## Purpose
                Surplus food apps and schemes let shops, bakeries and cafes sell unsold food at the end of the day for a fraction of its price, and some community apps give food away free. Trying two for a month shows whether the bags suit your household's tastes and routine, or whether they cost more in unwanted food and extra journeys than they save.

                ## Milestones
                1. Two surplus food apps or schemes operating near you chosen.
                2. At least four collections made over a month.
                3. What was used and what was wasted noted for each collection.
                4. A decision recorded on whether to keep using each one.
              priority: low
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four or more surplus food collections over a month are logged with what was used, and a keep or drop decision is recorded for each app."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find two surplus food apps or schemes that operate near you"
                - "Book your first collection on a day you can cook from it"
                - "Note what was used and what went to waste from each bag"
                - "Decide whether to keep each app after a month"
            - name: Windowsill herbs instead of bought packets
              description: |-
                ## Purpose
                Small packs of fresh herbs are among the dearest items per gram in the shop, and most of the pack usually wilts before it is used. Growing two or three easy herbs such as parsley, chives or mint on a windowsill or balcony, from seed or a rooted supermarket pot, can supply a household for months for the price of a couple of packs, and needs nothing a renter would have to ask permission for.

                ## Milestones
                1. Two or three herbs chosen that your household actually uses.
                2. Pots, compost and seeds or rooted plants bought for less than three packs of cut herbs.
                3. Herbs growing on a bright windowsill and being picked.
                4. No fresh herb packs bought for at least two months.

                ## Notes
                Splitting one crowded supermarket growing pot into three or four smaller pots gives plants that last far longer than the original.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two or three herbs are growing on a windowsill and no fresh herb packs have been bought for two months."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose two or three herbs your household uses most"
                - "Split a supermarket herb pot into three smaller pots"
                - "Put the pots on the brightest windowsill you have"
                - "Water the herbs and pick the largest leaves @recurring(weekly:mon,thu)"
            - name: Fruit and vegetable portions on a tight budget
              description: |-
                ## Purpose
                Cheap eating can drift into a diet of pasta, bread and rice with very little fruit or veg, which is a false economy for health. Counting the portions a typical day actually provides, then adding the cheapest ones, such as carrots, cabbage, onions, bananas, apples, frozen mixed vegetables and tinned tomatoes, keeps the budget and the plate in balance.

                ## Milestones
                1. Fruit and vegetable portions counted for three typical days.
                2. The cheapest fruit and vegetables at your shops listed by price per portion.
                3. Two extra portions a day added without raising the weekly spend noticeably.
                4. A recount after a month showing the change has held.

                ## Notes
                Use the portion sizes in your national healthy eating guide. Anyone on a medically prescribed diet should check changes with their clinician first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A typical day provides two more fruit and vegetable portions than at the start, confirmed by a recount a month later."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count the fruit and vegetable portions eaten on three typical days"
                - "List the cheapest fruit and vegetables at your shops per portion"
                - "Add two cheap portions a day through soups, sauces and snacks"
                - "Recount a typical day's fruit and vegetable portions @recurring(quarterly)"
            - name: Two-week cupboard challenge
              description: |-
                ## Purpose
                Most kitchens hold days or even weeks of food that is not being eaten: tins at the back, half-bags of grains, forgotten freezer bags. A two-week challenge to cook mainly from what is already in, buying only milk, bread, fruit and vegetables, frees up money and shows how much of the regular shop was surplus.

                ## Milestones
                1. A full list of what is in the cupboards, fridge and freezer.
                2. Fourteen days of meals planned mainly from that list.
                3. Spending during the fortnight limited to fresh basics and recorded.
                4. The money not spent noted and moved to savings or a bill.

                ## Notes
                Set a small fresh-food allowance before starting. A challenge that bans all shopping leaves people living on plain pasta by day nine, and then they quit.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two weeks of meals have been cooked mainly from existing stock, with spending limited to fresh basics and the money saved recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List everything in the cupboards, fridge and freezer"
                - "Plan fourteen days of meals mainly from that list"
                - "Set a small allowance for milk, bread, fruit and vegetables"
                - "Record the money not spent and move it to savings or a bill"
            - name: Birthday party food for twenty on a budget
              description: |-
                ## Purpose
                Party food bought ready-made, from platters to celebration cakes, can cost several times its home-made equivalent, and much of it ends up left over. Planning a menu for about twenty people around cheap crowd foods, such as a big pot of chilli or curry, tray bakes, home-made pizza and a decorated sponge, keeps the occasion generous on a fixed sum.

                ## Milestones
                1. A fixed spending limit set for the party food.
                2. A menu built around two or three cheap crowd dishes, scaled to the guest count.
                3. The shopping list costed against the limit before anything is bought.
                4. Food made ahead where possible, with leftovers planned into the following days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A party for about twenty has been fed from a costed menu that stayed within the spending limit set beforehand."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set a fixed spending limit for the party food"
                - "Choose two or three cheap crowd dishes and scale them to the guest count"
                - "Cost the shopping list against the limit before buying"
                - "Cook the main dishes the day before and freeze anything left over"
            - name: Festive dinner within a fixed budget
              description: |-
                ## Purpose
                Festive meals, whether for Christmas, Eid, Diwali, Thanksgiving or New Year, bring pressure to buy every traditional extra, and the costs pile up across several shops. Setting a firm total, deciding which dishes matter most to the household and keeping the rest simple or shared keeps the celebration and avoids a lean month afterwards.

                ## Milestones
                1. A total budget for the festive food agreed with the household.
                2. Two or three must-have dishes chosen and the rest kept simple.
                3. Guests asked to bring one dish each where that fits the custom.
                4. Spending tracked across every shop and kept within the total.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The festive meal has been cooked within the agreed total, with spending tracked across every shop."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a total budget for the festive food with the household"
                - "Ask everyone which two or three dishes matter most to them"
                - "Invite each guest to bring one dish where that fits the occasion"
                - "Track every festive food shop against the total"
            - name: Bring-a-dish dinner instead of hosting alone
              description: |-
                ## Purpose
                Hosting friends usually means one person paying for everything, which is often the first social habit to go when money is tight. A bring-a-dish dinner, where the host makes one main and each guest brings a side, dessert or drink, keeps the social life going at a fraction of the cost to any one person.

                ## Milestones
                1. A date set and guests invited with the bring-a-dish idea explained.
                2. A simple sign-up list so dishes do not double up.
                3. The host's main dish chosen and costed.
                4. The dinner held, with a second date pencilled in if it worked.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A bring-a-dish dinner has been held, with a sign-up list of dishes and a costed main from the host."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a date and invite friends to a bring-a-dish dinner"
                - "Share a sign-up list of mains, sides, desserts and drinks"
                - "Choose and cost the main dish you will cook"
                - "Suggest a second date to guests if the evening worked"
            - name: First week of term food plan
              description: |-
                ## Purpose
                The first week of term, with new routines, welcome events and a fresh loan payment in the bank, is when student food budgets usually go wrong for the rest of the semester. Arriving with a planned first shop, a few staples brought from home and three dinners you can already cook sets the pattern for the whole term.

                ## Milestones
                1. A first-shop list costed against the weekly food amount.
                2. Staples and basic kit brought from home where possible.
                3. Three dinners practised so you can cook them confidently before arriving.
                4. The first week's food spending recorded and compared with the budget.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first week of term has been fed from a costed first shop and three known dinners, with spending recorded against the budget."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write and cost a first-shop list for your new kitchen"
                - "Ask family for spare staples and kit to take with you"
                - "Practise three dinners at home before you leave"
                - "Record every food purchase in the first week and compare it with the budget"
            - name: Student food budget for the term
              description: |-
                ## Purpose
                Student loans and grants usually arrive in large instalments, and food is the easiest cost to overspend early and cut too hard later. Dividing the food share of each instalment into a weekly amount, with a small buffer held back for the final weeks before the next payment, keeps eating steady through the whole term.

                ## Milestones
                1. The food share of the term's income worked out after rent and fixed costs.
                2. A weekly food amount set, with a buffer held back for the last three weeks.
                3. The weekly amount kept in a separate account or savings pot where possible.
                4. Spending checked against it every month of the term.

                ## Notes
                Start from the **Monthly budget and bills** template. If the numbers do not work, ask your university or college's student support service about hardship funds and food schemes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weekly food amount for the term is set from the instalment, with a buffer held back for the last three weeks and monthly checks recorded."
                cadence: cyclic
              tasks:
                - "Work out the food share of this term's loan or grant after rent"
                - "Set a weekly food amount and hold back a buffer for the last three weeks"
                - "Move the weekly amount to a separate pot or account if your bank allows"
                - "Check food spending against the term budget @recurring(monthly:5)"
            - name: Shared house dinner rota with split costs
              description: |-
                ## Purpose
                Four people cooking four separate dinners in a shared kitchen spend more on ingredients, energy and wasted half-packs than one person cooking for four. A rota where housemates take turns to cook for everyone on set nights, with costs split evenly, cuts each person's food bill and the queue for the hob.

                ## Milestones
                1. Housemates who want to join agreed, with any dietary needs noted.
                2. Shared dinner nights and a cooking rota set.
                3. A per-head cost limit agreed for each shared dinner.
                4. A simple way of settling up chosen and used every week.

                ## Notes
                Keep the rota to two or three nights a week at first. A rota that tries to cover every night collapses at the first exam week or late shift.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Shared dinners have run on at least two set nights a week for a month, within a per-head limit and with weekly settling up."
                cadence: rolling
              tasks:
                - "Ask housemates who wants to join shared dinners and note dietary needs"
                - "Agree two or three shared nights and a cooking rota"
                - "Set a per-head cost limit for each shared dinner"
                - "Settle up the week's shared dinner costs @recurring(weekly:sun)"
            - name: Budget cooking in a studio or bedsit kitchen
              description: |-
                ## Purpose
                Studio flats, bedsits and rented rooms often come with two hob rings, a microwave and a fridge with a tiny ice box, which rules out many budget tips built around ovens and freezers. Planning a cheap repertoire around the kit you actually have, with one-pot hob meals, microwave cooking and smaller, more frequent shops, makes cheap eating realistic in a small rented space.

                ## Milestones
                1. The kitchen's actual equipment and storage space listed.
                2. Six cheap dinners that need only a hob, microwave or kettle.
                3. Storage for dry staples found or added without drilling walls.
                4. A shopping rhythm that suits the size of the fridge.

                ## Notes
                Check with the landlord before bringing in a large appliance. Some tenancies, or older fuse boards, limit what can safely run at once.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six cheap dinners needing only the kitchen's existing equipment are written down and cooked, with dry storage sorted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the equipment and storage space your kitchen actually has"
                - "Find six cheap dinners that need only a hob, microwave or kettle"
                - "Add free-standing storage for dry staples without drilling walls"
                - "Plan two smaller shops a week to suit the fridge size"
            - name: Family dinners for four on a fixed weekly sum
              description: |-
                ## Purpose
                Families on a tight income often feel the squeeze hardest at dinner, when children's tastes, school timings and growing appetites meet a fixed amount of money. Setting a weekly dinner sum, planning to it with family favourites and holding the money apart each week turns the budget into a routine the whole household can see.

                ## Milestones
                1. A weekly dinner sum for the family set within the overall food ceiling.
                2. Seven dinners planned to that sum, mixing family favourites with cheaper new ones.
                3. The weekly sum kept apart in a pot, envelope or account.
                4. Four weeks run within the sum, with any overspend explained.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks of family dinners have been run within the weekly dinner sum, with any overspend explained in writing."
                cadence: rolling
              tasks:
                - "Set a weekly dinner sum within the overall food ceiling"
                - "Plan seven family dinners to the sum, letting each child choose one"
                - "Keep the weekly sum apart in a pot, envelope or separate account"
                - "Check the dinner pot balance midweek @recurring(weekly:wed)"
            - name: Feeding teenagers without doubling the bill
              description: |-
                ## Purpose
                Teenagers can eat as much as adults or more, and the extra usually arrives as snacks and second helpings of whatever is dearest. Bigger portions of cheap bases such as rice, potatoes and pasta, a help-yourself shelf of toast, bananas and peanut butter, and teenagers cooking one cheap meal a week keep them fed without the bill climbing every month.

                ## Milestones
                1. Current spending on teenager snacks and extras estimated from a fortnight of receipts.
                2. Bigger portions of cheap bases added to dinners.
                3. A help-yourself shelf stocked with cheap, filling snacks.
                4. Each teenager cooking one costed dinner a week.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A cheap help-yourself snack shelf is stocked and each teenager has cooked one costed dinner a week for a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Estimate a fortnight's spending on teenager snacks and extras"
                - "Add an extra portion of rice, pasta or potatoes to dinners"
                - "Stock one shelf with cheap snacks teenagers can help themselves to"
                - "Ask each teenager to choose, cost and cook one dinner a week"
            - name: Food plan for a sudden drop in income
              description: |-
                ## Purpose
                Losing a job, a delayed benefit payment or an unexpected repair bill can cut the money for food overnight, and decisions made in a panic tend to be the expensive ones. A plan written now, with a reduced food figure, a two-week staples menu and a list of where to get help, means the first fortnight after a shock is fed calmly.

                ## Milestones
                1. A reduced weekly food figure for a lean period worked out.
                2. A two-week menu from cheap staples written and costed to that figure.
                3. Free money and debt advice services for your area listed.
                4. The plan kept where the household can find it.

                ## Notes
                Contact a free money advice service early rather than late. They can check entitlements and help with priority bills that would otherwise swallow the food money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written lean-period plan with a reduced food figure, a costed two-week staples menu and local advice contacts is stored where the household can find it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out the smallest weekly food figure your household could manage on"
                - "Write a two-week staples menu costed to that figure"
                - "List the free money and debt advice services that cover your area"
                - "Store the plan with your other household documents"
            - name: Food support and entitlements you can claim
              description: |-
                ## Purpose
                Help with food exists in most places, from free school meals and healthy food vouchers for young children to food banks, community pantries and community fridges, yet many people who qualify never apply. Finding out what you are entitled to, and where the nearest support is, before you need it removes the delay and embarrassment of searching in a crisis.

                ## Milestones
                1. Government and local food entitlements for your household checked, such as school meals or food vouchers.
                2. Any eligible claims made.
                3. The nearest food bank, community pantry and community fridge listed, with how to get a referral or join.
                4. The list shared with anyone in the household who might need it.

                ## Notes
                Eligibility rules and scheme names differ between countries and councils, so your local authority's website or a money advice service is the reliable source. Community pantries often charge a small weekly membership and offer far more choice than a parcel.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Food entitlements for the household have been checked and any eligible claims made, with nearby food support listed and shared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your local authority's website for school meal and food voucher schemes"
                - "Apply for any food entitlement the household qualifies for"
                - "List the nearest food bank, community pantry and community fridge"
                - "Recheck eligibility for school meals and food vouchers @recurring(yearly)"
            - name: Cooking from a food bank or pantry parcel
              description: |-
                ## Purpose
                Food bank and community pantry parcels are built around long-life items such as tinned meat, pasta, rice, tinned vegetables, cereal and long-life milk, often with little fresh food or flavour. A handful of meals that turn a typical parcel into appetising dinners, plus a note of which cheap fresh items to add, makes the help go further and taste better.

                ## Milestones
                1. The contents of a typical local parcel found out from the provider or a past parcel.
                2. Six meals written that use mainly parcel items plus one or two cheap fresh extras.
                3. A small set of flavour boosters kept on hand to lift tinned food.
                4. The meal list offered to the provider or a friend who uses it, if welcome.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six meals built mainly from typical parcel contents, each needing no more than two cheap fresh extras, are written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the food bank or pantry what a typical parcel contains"
                - "Write six meals using mainly parcel items and two fresh extras at most"
                - "Keep a small set of flavour boosters to lift tinned food"
                - "Offer the meal list to the provider for other users if they want it"
            - name: Personal budget cookbook with costed recipes
              description: |-
                ## Purpose
                Recipes scattered across screenshots, websites and memory are hard to plan from, and their costs are never written beside them. A personal cookbook of the household's tested budget recipes, each with a cost per portion, cooking method and leftover idea, becomes the single source for every weekly plan and something worth handing on.

                ## Milestones
                1. Every tested budget recipe gathered in one place, on paper or digital.
                2. Each recipe showing cost per portion, portions made, cooking method and a leftover idea.
                3. Recipes grouped by main ingredient so a cupboard-first plan is quick.
                4. At least twenty recipes in the book.

                ## Notes
                Index by main ingredient, not by meal type. When planning from the cupboard, the question is always what can be made from what is already in.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cookbook of at least twenty tested budget recipes exists, each with a cost per portion and a leftover idea, grouped by main ingredient."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Gather every budget recipe you have tested into one folder"
                - "Ask the agent to lay out each recipe with cost, portions, method and leftover idea"
                - "Group the recipes by main ingredient"
                - "Add new keepers and refresh their costs @recurring(monthly:18)"
            - name: Teaching someone else to cook on a budget
              description: |-
                ## Purpose
                Passing on budget cooking to a school leaver, a new housemate, a relative or a friend going through a hard patch is one of the most useful things an experienced cook can do. Four short sessions covering a staples cupboard, a big pot, pulses or a whole chicken, and costing a meal give them enough to feed themselves cheaply from then on.

                ## Milestones
                1. A person who wants to learn, and a time that suits them, agreed.
                2. Four sessions planned around dishes they will actually eat.
                3. Each session cooked together, with the recipe and its cost written down for them.
                4. A follow-up after a month to see what they still cook.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Four budget cooking sessions have been delivered to one person, with written recipes and costs, and a follow-up held a month later."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the person which dishes they would like to learn"
                - "Plan four sessions around a staples cupboard, a big pot, pulses and costing"
                - "Write each session's recipe and cost on one page for them to keep"
                - "Check in a month later on what they still cook"
            - name: Annual food spend and savings review
              description: |-
                ## Purpose
                Once a year, with twelve months of tallies to hand, it is possible to see what the budget cooking work has actually saved and where the money still goes. A short review comparing the year with the original four-week baseline, adjusted for price rises, shows which habits paid off and which projects deserve attention next year.

                ## Milestones
                1. Twelve months of food spend totals collected from the tally.
                2. The year compared with the original baseline, allowing for general food price rises.
                3. The three habits that saved most named.
                4. One or two priorities set for the coming year.

                ## Notes
                Your national statistics office publishes a food price inflation figure. Use it to adjust the baseline so a rising bill is not mistaken for failure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written annual review compares twelve months of food spend with the inflation-adjusted baseline, naming the top three saving habits and next year's priorities."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Collect twelve months of food spend totals from the tally"
                - "Adjust the original baseline for food price inflation"
                - "Name the three habits that saved the most"
                - "Hold the annual food spend and savings review @recurring(yearly)"
---

# Cooking on a Tight Food Budget

This area is for anyone feeding themselves or a household on less than they would like, whether a student between loan payments, a renter with two hob rings or a family squeezed by rising prices. It begins with the foundations (an honest food spend figure, a daily cost ceiling, a staples cupboard and a costed repertoire), moves to the weekly routines of cupboard-first planning, big pots and planned leftovers, then the cheap cooking skills, the swaps and decisions that cut costs further, occasions on a budget, plans for students, renters, families and lean months, and finally the specialist work of a costed cookbook and teaching others.

What repeats is a Thursday plan from the cupboard, a Saturday pot of pulses, a Friday home takeaway, a Monday spend tally with a month-end check on the 28th, a lean-week reserve check on the 20th, a new recipe on the 12th and a quarterly recosting of the repertoire. The Metrics log, Weekly meal plan, Purchase decision and Monthly budget and bills templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
