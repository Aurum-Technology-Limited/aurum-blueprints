---
id: food-nutrition.kitchen-food-waste-reduction
name: Kitchen Food Waste Reduction
description: "A two-week bin diary and a target, a fridge with an eat-first shelf, weekly use-it-up meals, portions that match real appetites and a freezer that rescues food instead of burying it."
category: personal
version: 1.0.0
tags: [food-nutrition, kitchen-food-waste-reduction, everyone, food-waste, leftovers, freezing, fridge-organisation]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - weekly-meal-plan
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Kitchen Food Waste Reduction
          description: "Cutting household food waste with fridge organisation, use-it-up meals, portion planning and smart freezing."
          projects:
            - name: Two-week kitchen bin diary
              description: |-
                ## Purpose
                Most households guess they waste very little, then find a bag of salad, half a loaf and a pot of rice in the bin every week. Writing down every item that goes in the bin or the caddy for fourteen days, with a rough amount and the reason, replaces that guess with evidence and shows where effort will pay off first.

                ## Milestones
                1. A diary with columns for date, item, rough amount, whether it was edible and why it went.
                2. Fourteen consecutive days logged, including a weekend and a big shop.
                3. Each entry tagged with one reason: forgot it, cooked too much, went off, did not like it or past the date.
                4. A one-paragraph summary of what the fortnight showed, shared with the household.

                ## Notes
                Start from the **Metrics log** template. Count inedible parts such as peel and bones separately, so the diary shows the waste you can actually prevent.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A diary covering fourteen consecutive days, every binned item tagged with a reason, and a written summary shared with the household."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a bin diary with date, item, amount, edible or not and reason"
                - "Stick a pen and a note on the fridge door so anyone can log an item"
                - "Log every item that goes in the bin or caddy for fourteen days"
                - "Write a short summary of the fortnight and read it out at dinner"
            - name: Top five wasted foods and why they go
              description: |-
                ## Purpose
                Waste is rarely spread evenly: in most homes a handful of foods such as bread, bagged salad, milk, potatoes and cooked rice make up the bulk of it. Naming your own top five, and the specific reason each one is lost, turns a vague wish to waste less into five problems that each have an obvious fix.

                ## Milestones
                1. The bin diary sorted by item and the five most wasted foods named.
                2. One main reason recorded for each of the five, from the diary tags.
                3. A fix chosen for each, such as freezing, buying smaller or moving it to the eat-first shelf.
                4. The five foods and their fixes written on one page and pinned inside a cupboard door.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page list of the household's five most wasted foods, each with its main reason and one chosen fix."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sort the bin diary entries by food and count how often each appears"
                - "Pick the five foods that turn up most or in the largest amounts"
                - "Ask the agent to suggest two fixes for each food based on its waste reason"
                - "Choose one fix per food and pin the list inside a cupboard door"
            - name: Household food waste target
              description: |-
                ## Purpose
                A number gives everyone in the house something to aim at and a way to tell whether the new habits are working. Agreeing a realistic cut, such as halving the edible waste in the bin diary within three months, keeps the effort proportionate and stops it becoming one person's crusade.

                ## Milestones
                1. The starting figure taken from the bin diary, in items or kilograms per week.
                2. A target agreed with everyone who eats at home, with a date to check it.
                3. The target written on the fridge or in the shared household notes.
                4. A check date in the calendar three months from now.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly waste target agreed by the whole household, based on the bin diary, with a check date set three months ahead."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Work out the weekly edible waste figure from the bin diary"
                - "Propose a target cut and agree it with everyone who eats at home"
                - "Write the target and the check date where the household will see it"
                - "Revisit the target against a fresh week of logging @recurring(yearly)"
            - name: Fridge layout with an eat-first shelf
              description: |-
                ## Purpose
                Food at the back of the fridge is food nobody sees until it smells. Giving each shelf a job, with one clearly marked eat-first shelf or box at eye level for opened jars, leftovers and anything near its date, means the first thing anyone sees when they open the door is what needs eating next.

                ## Milestones
                1. The fridge emptied, wiped and anything spoiled removed.
                2. Each shelf and drawer given a job, with raw meat on the bottom shelf.
                3. An eat-first shelf or clear box placed at eye level and labelled.
                4. A simple map of the layout taped inside a cupboard so everyone puts shopping back the same way.

                ## Notes
                Check the fridge is cold enough while it is empty: a warm fridge shortens the life of everything in it. The Food hygiene and safe storage area covers temperatures in detail.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every fridge shelf has an agreed job, an eat-first shelf is labelled at eye level and a layout map is posted for the household."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Empty the fridge onto the counter and bin anything spoiled"
                - "Decide a job for each shelf, door rack and drawer"
                - "Label an eye-level eat-first shelf or clear box"
                - "Draw the layout and tape it inside the nearest cupboard door"
            - name: Freezer contents list and labelling kit
              description: |-
                ## Purpose
                Unlabelled tubs of brown sauce and foil parcels of who-knows-what are where freezer food goes to die. A labelling kit kept by the freezer and a contents list on the door mean every item goes in with a name and a date, and everyone can see what is there without digging.

                ## Milestones
                1. A labelling kit by the freezer: freezer tape or labels, a permanent marker and bags in two sizes.
                2. Every item currently in the freezer identified, labelled and dated, with mysteries eaten or binned.
                3. A contents list on the freezer door or in a shared note, grouped by drawer.
                4. A house rule that nothing goes in without a name and a date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every item in the freezer carries a name and date, and a contents list grouped by drawer is posted on the freezer or shared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy freezer labels, a permanent marker and bags in two sizes"
                - "Take everything out one drawer at a time and label or bin it"
                - "Write a contents list grouped by drawer and stick it on the freezer"
                - "Agree the no-label, no-freezer rule with the household"
            - name: Best before versus use by household rule
              description: |-
                ## Purpose
                Plenty of edible food is binned because someone read a best before date as a deadline. Learning the difference, then agreeing a household rule (use by is about safety, best before is about quality, so look, smell and taste after it) stops perfectly good yoghurt, crackers and eggs going in the bin.

                ## Milestones
                1. Your national food safety agency's guidance on date labels read.
                2. A written house rule covering use by, best before and display until dates.
                3. A short list of foods where the use by date must always be followed, such as raw meat, fish and soft cheese.
                4. The rule shared with everyone who clears the fridge.

                ## Notes
                Never stretch a use by date. This project is about the far larger pile of food binned on a best before date that only signals quality.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written household rule on date labels, based on your food safety agency's guidance, shared with everyone who clears the fridge."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your food safety agency's page on use by and best before dates"
                - "Write a three-line house rule for use by, best before and display until"
                - "List the foods where the use by date is always followed"
                - "Explain the rule to everyone who clears out the fridge"
            - name: Portion measures for rice, pasta and oats
              description: |-
                ## Purpose
                Cooked rice and pasta are among the most binned foods because they are poured by eye straight from the bag. Weighing what each person actually eats once, then marking a mug, scoop or jar to that amount, makes the right quantity the easy one for anyone who cooks.

                ## Milestones
                1. Dry portions for rice, pasta, couscous and oats weighed for each adult and child.
                2. A mug, scoop or measuring cup matched to each portion and marked.
                3. A note of the portions taped inside the cupboard where the grains live.
                4. A week of meals cooked with the measures and leftovers checked.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Marked measures exist for rice, pasta and oats, a portion note is in the cupboard and a week of cooking with them left no grain waste."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Weigh the dry rice and pasta each person eats at one meal"
                - "Find a mug or scoop that holds one portion and mark the level"
                - "Tape a portion note inside the grains cupboard"
                - "Cook with the measures for a week and note any leftover grain"
            - name: Food waste caddy and collection set-up
              description: |-
                ## Purpose
                Even a careful kitchen produces peelings, bones, coffee grounds and tea bags, and in general rubbish they rot in landfill. Setting up a caddy that is easy to reach, with liners and a clear idea of what your local collection accepts, keeps unavoidable waste separate and makes the edible waste in the bin easier to spot.

                ## Milestones
                1. Your council or local service's food waste rules checked, including what they accept.
                2. A lidded caddy within reach of the chopping board, with a supply of the right liners.
                3. A list of what goes in the caddy pinned near it.
                4. The caddy emptied into the outdoor bin or compost on the collection day.

                ## Notes
                If there is no food waste collection where you live, go straight to the home composting project instead.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lidded caddy with liners is set up within reach of the prep area, with the local collection rules posted beside it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check what your local food waste collection accepts"
                - "Get a lidded caddy and the liners your service allows"
                - "Place the caddy next to where you chop and peel"
                - "Pin a short list of what goes in the caddy beside it"
            - name: Friday fridge sweep before the shop
              description: |-
                ## Purpose
                Ten minutes with the fridge door open before writing the shopping list is the single habit that prevents most waste. Moving anything that needs eating to the eat-first shelf, planning it into the next two dinners and leaving it off the list stops a second bag of spinach arriving while the first one wilts.

                ## Milestones
                1. A fixed sweep time agreed, the evening before the main shop.
                2. Everything near its date moved to the eat-first shelf at each sweep.
                3. Those items written into the next two or three meals.
                4. The shopping list written after the sweep, never before.

                ## Notes
                Take a photo of the fridge at the end of the sweep. It answers the in-shop question of whether there is any milk left.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The sweep happens before at least four out of five main shops, logged in the habit tracker, with near-date food planned into named meals."
                cadence: rolling
              tasks:
                - "Pick the evening before your main shop as sweep night"
                - "Sweep the fridge, move near-date food to the eat-first shelf and plan it in @recurring(weekly:fri)"
                - "Photograph the fridge shelves before leaving for the shop"
                - "Cross off list items the sweep shows you already have"
            - name: Wednesday use-it-up dinner
              description: |-
                ## Purpose
                One fixed night a week where dinner is built only from what needs eating gives every stray carrot, heel of cheese and spoonful of leftover curry a guaranteed outlet. Midweek works best because the fresh food from the weekend shop is starting to turn and the next shop is still days away.

                ## Milestones
                1. One night a week agreed as use-it-up night, with no shopping for it.
                2. A short list of go-to formats on the fridge: omelette, soup, fried rice, loaded jacket potatoes, pasta bake.
                3. At least three use-it-up dinners in a row cooked from the eat-first shelf.
                4. The night kept for eight weeks and ticked off in a habit tracker.

                ## Notes
                Start from the **Habit tracker** template. A use-it-up dinner does not need to be a recipe; it needs a format that forgives whatever goes in it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A use-it-up dinner is cooked from leftover and near-date food on at least seven of eight consecutive weeks, ticked in a habit tracker."
                cadence: rolling
              tasks:
                - "Agree with the household which night becomes use-it-up night"
                - "Write five forgiving dinner formats on a card for the fridge"
                - "Cook dinner only from the eat-first shelf and cupboard @recurring(weekly:wed)"
                - "Tick the night off in the habit tracker"
            - name: Leftovers labelled and eaten within a set window
              description: |-
                ## Purpose
                Leftovers are only a saving if they are eaten, and a tub with no date gets binned out of doubt. Labelling every tub with the day it was cooked, keeping them all on the eat-first shelf and checking that shelf before deciding what to cook turns leftovers into tomorrow's lunch instead of next week's guilt.

                ## Milestones
                1. The eating window your food safety agency recommends for cooked leftovers noted, commonly about two days in the fridge.
                2. A roll of labels and a pen kept by the containers.
                3. Every leftover tub labelled with what it is and the day it was cooked.
                4. Leftovers either eaten or frozen within the window for four straight weeks.

                ## Notes
                If a leftover will not be eaten within the window, freeze it on day one, not on its last day. Cooked rice needs extra care; check your food safety agency's advice on cooling and reheating it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks no labelled leftover is binned for passing its window, with every tub either eaten or frozen in time."
                cadence: rolling
              tasks:
                - "Look up your food safety agency's window for eating cooked leftovers"
                - "Keep labels and a pen in the drawer with the food containers"
                - "Check the leftovers shelf before deciding what to cook @recurring(daily)"
                - "Freeze any tub that will not be eaten in time on the day it is cooked"
            - name: Monthly freezer eat-down week
              description: |-
                ## Purpose
                Freezers fill steadily and empty slowly, until the bottom drawer holds things nobody remembers buying and frost has ruined half of them. A week each month where the meal plan starts from the freezer list keeps stock moving, frees space for bargains and catches food before freezer burn wins.

                ## Milestones
                1. The freezer contents list brought up to date at the start of each eat-down week.
                2. At least four meals that week built mainly from freezer stock.
                3. The oldest items, anything over six months, eaten first.
                4. A drawer or shelf visibly freed by the end of the week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the freezer list is updated and at least four meals are built from freezer stock, oldest items first."
                cadence: rolling
              tasks:
                - "Update the freezer contents list and plan four meals from it @recurring(monthly:12)"
                - "Move the oldest items to the top drawer so they are seen first"
                - "Defrost the next day's freezer meal in the fridge overnight"
                - "Note any item that came out freezer burnt and how long it had been in"
            - name: Monthly food waste tally
              description: |-
                ## Purpose
                Without a regular count, early enthusiasm fades and nobody knows whether the bin is lighter than it was. A one-week spot check each month, using the same diary columns as the original fortnight, shows whether the household is on track for its target and which food has crept back into the bin.

                ## Milestones
                1. One week a month logged with the same columns as the first bin diary.
                2. The weekly figure compared against the starting figure and the target.
                3. The worst offender each month named and one fix tried for it.
                4. Six monthly figures in one table, showing the trend.

                ## Notes
                Weighing the caddy contents on kitchen scales is quicker than listing items, if your household prefers a number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly tallies are recorded in one table alongside the starting figure and the target."
                cadence: rolling
              tasks:
                - "Add a monthly tally table to the bin diary"
                - "Log one week of binned food and compare it with the target @recurring(monthly:26)"
                - "Name the month's worst offender and choose one fix for it"
                - "Share the trend with the household after every third tally"
            - name: Freezing bread the day it is bought
              description: |-
                ## Purpose
                Bread is among the most wasted foods in many countries, usually as the last few slices of a loaf that went stale or mouldy. Slicing and freezing part of every loaf on the day it comes home, and toasting slices straight from frozen, means the end of the loaf is as good as the start.

                ## Milestones
                1. A household rule on how much of each loaf goes straight into the freezer.
                2. Loaves, rolls and wraps frozen in portions that suit how they are eaten.
                3. Everyone shown how to toast or defrost single slices.
                4. A month with no bread in the bin diary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of bin diary entries shows no binned bread, with part of every loaf frozen on the day it was bought."
                cadence: rolling
              tasks:
                - "Count how many slices the household eats before a loaf goes stale"
                - "Freeze the rest of each new loaf in bags of four slices"
                - "Show everyone how to toast slices straight from the freezer"
                - "Separate rolls and wraps with baking paper before freezing"
            - name: Fruit bowl rotation and the use-today bowl
              description: |-
                ## Purpose
                Fruit bowls look generous and quietly waste a lot: bananas blacken, soft fruit bruises under apples and a single mouldy satsuma spoils its neighbours. Splitting fruit into a small use-today bowl and keeping the rest where it lasts longest, with a weekly check, turns the fruit bowl from a display into a queue.

                ## Milestones
                1. A small use-today bowl next to the main fruit bowl.
                2. Fruit that keeps better chilled, such as berries and grapes, moved to the fridge.
                3. Bananas kept apart from other fruit so they do not speed its ripening.
                4. Fruit that is turning either eaten, cooked or frozen within two days.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six weeks no whole fruit is binned in the monthly tally, with turning fruit moved to the use-today bowl each week."
                cadence: rolling
              tasks:
                - "Put a small bowl labelled use today next to the fruit bowl"
                - "Move berries and grapes into the fridge after shopping"
                - "Sort turning fruit into the use-today bowl or the freezer @recurring(weekly:tue)"
                - "Keep a freezer bag for peeled banana pieces and soft berries"
            - name: Cupboard-only cooking week each quarter
              description: |-
                ## Purpose
                Cupboards quietly collect the half-bag of lentils, the special-occasion tin and the jar bought for one recipe. One week each quarter where dinners are planned from the cupboard first, with only fresh top-ups bought, turns that slow collection into meals before it passes its best.

                ## Milestones
                1. A list of the cupboard items that have been there longest or are nearest their dates.
                2. Five dinners planned that each use at least two of them.
                3. Only fresh items bought that week, with the spend noted.
                4. At least ten long-standing cupboard items used up by the end of the week.

                ## Notes
                This is about cooking the stock, not counting it. The Grocery shopping and pantry stock area covers the audit and restocking side.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter one cooking week uses at least ten long-standing cupboard items, with only fresh top-ups bought."
                cadence: cyclic
              tasks:
                - "List the ten cupboard items that have been there longest"
                - "Plan five dinners that each use at least two of them @recurring(quarterly)"
                - "Shop only for fresh top-ups during the cupboard week"
                - "Note which forgotten items the household would buy again"
            - name: Weekly dinner headcount check
              description: |-
                ## Purpose
                Cooking for four when two are out is a reliable way to fill the fridge with food nobody will eat. A quick Monday check of who is home for dinner each night, with an agreed way to say when plans change, lets the cook scale meals to the people actually at the table.

                ## Milestones
                1. One place, such as a family chat or a whiteboard, where everyone marks nights they are out.
                2. The headcount checked at the start of each week and before each shop.
                3. A house rule that late changes are flagged before cooking starts.
                4. Meals scaled to the headcount for four weeks running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks the dinner headcount is set each Monday and meals are cooked for that number."
                cadence: rolling
              tasks:
                - "Choose the whiteboard or chat where nights out get marked"
                - "Ask everyone which nights they are home for dinner @recurring(weekly:mon)"
                - "Agree a cut-off time for flagging a change of plan"
                - "Scale the week's recipes to the confirmed headcount"
            - name: Cook once, eat twice planned leftovers
              description: |-
                ## Purpose
                Planned leftovers are deliberate: a larger roast that becomes Tuesday's pie, a pot of chilli that becomes Thursday's burritos. Building two or three of these pairs into the week's plan means extra food is cooked with a job already waiting for it, rather than drifting to the back of the fridge.

                ## Milestones
                1. A list of at least six cook once, eat twice pairs the household likes.
                2. Two pairs written into the meal plan each week.
                3. The second meal scheduled within the leftovers window of the first.
                4. Four weeks of plans showing the pairs cooked as written.

                ## Notes
                Start from the **Weekly meal plan** template and mark the second meal of each pair so the cook knows to make extra.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly meal plans each contain two cook once, eat twice pairs, with both meals of each pair eaten."
                cadence: rolling
              tasks:
                - "List six base dishes and the second meal each could become"
                - "Write two pairs into the weekly meal plan @recurring(weekly:sun)"
                - "Mark on the plan how much extra to cook for the second meal"
                - "Swap out any pair the household found dull after two goes"
            - name: Storing fruit and vegetables so they last
              description: |-
                ## Purpose
                Where fruit and veg are kept changes how long they last more than most people realise: potatoes sprout in the light, cut herbs wilt in the drawer and apples hurry everything near them. Learning where each of your regular buys keeps best, and writing it down, can add days or weeks to the most wasted fresh foods.

                ## Milestones
                1. A storage guide from your food safety agency or a waste-reduction charity read.
                2. A one-page chart for your twenty most bought fruit and veg: fridge, cupboard or counter, and how.
                3. Herbs kept in water or wrapped damp, and salad leaves stored with kitchen paper.
                4. Potatoes and onions stored apart in a cool, dark place.

                ## Notes
                Plastic packaging on some produce slows drying out. Remove it only if your diary shows the item sweating or going slimy in the bag.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A storage chart covering the household's twenty most bought fruit and vegetables is posted in the kitchen and followed when unpacking."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the twenty fruits and vegetables you buy most often"
                - "Look up the best storage place for each in a reputable guide"
                - "Make a one-page chart and stick it inside a cupboard door"
                - "Try the jar of water method for parsley, coriander and mint"
            - name: Household chart of what freezes well
              description: |-
                ## Purpose
                Far more freezes well than most kitchens use: grated cheese, milk, cooked grains, egg whites, ginger, chillies, wine, even mashed potato. A chart of what freezes well, what needs preparing first and what does not freeze at all, kept by the freezer, gives every near-date item a second chance.

                ## Milestones
                1. Guidance on freezing everyday foods gathered from your food safety agency or a waste-reduction charity.
                2. A chart of thirty foods marked freezes well, freezes with preparation, or does not freeze.
                3. Notes on how to defrost and use each item afterwards.
                4. The chart posted on or near the freezer.

                ## Notes
                Freezing pauses food rather than refreshing it. Freeze things while they are still good, not on the day they turn.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A freezing chart covering at least thirty everyday foods, with preparation and defrosting notes, is posted by the freezer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a reputable guide to freezing everyday foods"
                - "Sort thirty foods you buy into freezes well, needs prep and does not freeze"
                - "Add a line on how each is defrosted and used"
                - "Freeze one item this week that you would normally have binned"
            - name: Blanching and open-freezing vegetables
              description: |-
                ## Purpose
                Vegetables frozen raw often turn grey, limp or bitter, which is why so many people say freezing veg does not work. Learning to blanch briefly in boiling water, chill fast and open-freeze on a tray before bagging means a surplus of beans, broccoli or peppers comes out of the freezer loose and usable months later.

                ## Milestones
                1. Blanching times for the vegetables you most often have spare looked up and written down.
                2. One batch blanched, chilled in iced water, dried and open-frozen on a tray.
                3. The frozen pieces bagged loose, labelled and dated.
                4. The batch cooked from frozen and the result noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two different vegetables blanched and open-frozen, then cooked from frozen with the result recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down blanching times for your three most often surplus vegetables"
                - "Blanch, ice and open-freeze one batch on a lined tray"
                - "Bag the frozen pieces once they are solid and label them"
                - "Cook a portion from frozen and note the texture"
            - name: Root-to-stem vegetable cooking
              description: |-
                ## Purpose
                Broccoli stalks, cauliflower leaves, beetroot tops and herb stems are all good food that goes straight in the caddy in most kitchens. Learning a handful of ways to cook them, such as slicing stalks into stir-fries, roasting leaves and blending stems into sauces, cuts waste without changing what you buy.

                ## Milestones
                1. A list of the parts your household usually throws away and what each can become.
                2. Five root-to-stem dishes cooked, one per week.
                3. Two of them adopted as regular uses.
                4. Edible trimmings visibly reduced in the next monthly tally.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five dishes using normally discarded vegetable parts are cooked and two become regular, with trimmings down in the next tally."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the vegetable parts that usually go in your caddy"
                - "Find one recipe or method for each of the five most common parts"
                - "Cook one root-to-stem dish each week for five weeks"
                - "Keep the two the household liked on the use-it-up card"
            - name: Stock from a freezer scrap bag
              description: |-
                ## Purpose
                Onion skins, carrot ends, celery leaves, parmesan rinds and a roast chicken carcass make better stock than most cubes. Keeping a bag in the freezer that fills up over a few weeks, then simmering it into stock and freezing that in useful portions, turns trimmings into the base for soups, risottos and gravy.

                ## Milestones
                1. A labelled scrap bag in the freezer, with a note of what goes in and what stays out.
                2. The first full bag simmered into stock, strained and cooled quickly.
                3. Stock frozen in portions that match how you cook, such as 500 ml tubs or ice cube trays.
                4. The stock used in at least two meals.

                ## Notes
                Leave out brassica trimmings such as cabbage and broccoli, which make stock bitter, and anything already past its best.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full scrap bag has been turned into strained stock, frozen in labelled portions and used in at least two meals."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Start a labelled scrap bag in the freezer"
                - "Write what goes in and what stays out on the bag"
                - "Simmer the full bag into stock, strain it and cool it quickly"
                - "Freeze the stock in portions sized for how you cook"
            - name: Stale bread repertoire
              description: |-
                ## Purpose
                Stale bread is not waste in most of the world's cuisines; it is an ingredient for breadcrumbs, croutons, bread salads, French toast, ribollita and bread pudding. Building a repertoire of four or five dishes means the dry end of a loaf or a bag of rolls always has somewhere to go.

                ## Milestones
                1. A bag of breadcrumbs blitzed, dried and frozen for coatings and toppings.
                2. Four stale bread dishes cooked, one savoury salad or soup among them.
                3. The household's favourite two added to the use-it-up card.
                4. No stale bread in the bin diary for a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four stale bread dishes cooked, two added to the use-it-up card, and a month passes with no stale bread binned."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Blitz the next stale ends into breadcrumbs and freeze them"
                - "Bake a tray of croutons from a dry loaf"
                - "Cook a bread salad or bread soup with stale bread"
                - "Try bread and butter pudding or French toast at the weekend"
            - name: Five leftover formulas cooked without a recipe
              description: |-
                ## Purpose
                Recipes rarely fit what is left in the fridge, so leftovers need formats instead: a frittata, a fried rice, a blended soup, a pie or crumble topping, a quesadilla or toastie. Practising five formulas until they can be cooked from memory gives the cook a way to turn almost any odds and ends into dinner.

                ## Milestones
                1. Five formulas chosen, each written as a ratio or method rather than an ingredients list.
                2. Each formula cooked at least twice with different leftovers.
                3. A one-page card of the five formulas on the fridge.
                4. Two household members able to cook at least one formula without help.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five leftover formulas each cooked twice with different ingredients, written on a fridge card, with two household members able to cook one alone."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose five formulas and write each as a short method"
                - "Cook each formula twice over the next five weeks with different leftovers"
                - "Teach one formula to another member of the household"
                - "Put the finished formula card on the fridge"
            - name: Overripe fruit rescue recipes
              description: |-
                ## Purpose
                Black bananas, soft pears, wrinkly apples and squashed berries are often at their sweetest when they look their worst. A small set of rescue recipes such as banana bread, smoothie packs, compote, crumble and frozen fruit for porridge lets fruit go from the bowl to a dish instead of the caddy.

                ## Milestones
                1. Four rescue recipes picked that suit the fruit you most often waste.
                2. Each recipe made once from fruit that would otherwise have been binned.
                3. Smoothie or porridge packs ready in the freezer.
                4. A month with no whole fruit in the bin diary.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Four fruit rescue recipes made from overripe fruit, freezer packs in stock, and a month of tallies with no whole fruit binned."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick four rescue recipes for the fruit you waste most"
                - "Bake banana bread or muffins from the next black bananas"
                - "Cook a compote from soft apples or pears and freeze half"
                - "Bag smoothie packs from turning fruit and freeze them flat"
            - name: Using up milk, cream and cheese ends
              description: |-
                ## Purpose
                Half a pot of cream, a carton of milk on its date, the hard end of a block of cheese and a spoon of yoghurt are classic fridge casualties. Knowing which dairy freezes, which goes into sauces, baking or soups, and which must follow its use by date keeps dairy out of the bin.

                ## Milestones
                1. A note of which dairy products your household wastes most, from the bin diary.
                2. Milk and grated hard cheese tried in the freezer and the results noted.
                3. Three dishes cooked that use up cream, milk or cheese ends.
                4. A dairy line added to the freezing chart.

                ## Notes
                Follow the use by date on soft cheese and fresh cream without exception. Freezing changes the texture of cream and yoghurt, so use frozen ones in cooking.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three dishes made from dairy ends, milk and cheese freezing tested, and dairy guidance added to the household freezing chart."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check the bin diary for which dairy products get wasted"
                - "Grate a cheese end and freeze it for toppings"
                - "Freeze a carton of milk near its date and test it in tea and baking"
                - "Cook a sauce, soup or bake that uses up leftover cream"
            - name: Scaling recipes to real appetites
              description: |-
                ## Purpose
                Recipe serving counts are guesses, and a dish that serves four in a cookbook may feed three hungry adults or six small children. Noting how far each regular recipe actually goes in your house, then writing the scaled quantities on the recipe, stops the same surplus appearing every time it is cooked.

                ## Milestones
                1. The ten most cooked recipes listed with their printed serving count.
                2. The real number of portions each produced in your house noted.
                3. Scaled quantities written on each recipe or saved in your recipe app.
                4. Each scaled recipe cooked once and checked for leftovers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten regular recipes carry scaled quantities for the household, each tested once with leftovers noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the ten recipes the household cooks most often"
                - "Note how many portions each actually produces next time it is cooked"
                - "Write scaled quantities on each recipe card or in the app"
                - "Cook each scaled recipe once and note what was left"
            - name: Clear storage containers for leftovers
              description: |-
                ## Purpose
                Opaque tubs and odd ice cream boxes hide what is inside, so leftovers stay unseen until they are past saving. Choosing a matched set of clear, stackable, freezer-safe containers in two or three sizes makes leftovers visible, easier to label and quicker to put away than to bin.

                ## Milestones
                1. The current container cupboard sorted, with lidless and cracked tubs recycled.
                2. Two or three container types compared on clarity, freezer safety, stacking and lid fit.
                3. A set bought in sizes that match a single portion and a family meal.
                4. Containers stored nested with lids in one place.

                ## Notes
                Start from the **Purchase decision** template. Glass is clearer and lasts longer; light plastic is better for lunches carried to work or school.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A matched set of clear, freezer-safe containers in at least two sizes is chosen against written criteria and in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Empty the container cupboard and recycle anything without a lid"
                - "Write four criteria: clear, freezer safe, stackable, lids that fit"
                - "Compare two or three container ranges against the criteria"
                - "Buy the chosen set in portion and family sizes"
            - name: Vacuum sealer worth-it decision
              description: |-
                ## Purpose
                Vacuum sealers promise longer freezer life and less freezer burn, but they cost money, take cupboard space and need their own bags. Weighing how much your household actually freezes, and how often freezer burn shows up in the tally, decides whether one would earn its keep or whether good bags and squeezing out the air are enough.

                ## Milestones
                1. The share of freezer waste caused by freezer burn estimated from the tally.
                2. The cost of a sealer and a year of bags worked out.
                3. The press-out-the-air and water displacement methods tried first.
                4. A decision recorded, with the reason.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on whether to buy a vacuum sealer, based on freezer burn in the tally and a full year cost."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how many freezer items were binned for freezer burn in the last tally"
                - "Price a sealer and twelve months of bags"
                - "Try the water displacement method with a zip bag for a month"
                - "Record the decision and the reason in the area notes"
            - name: Smaller-pack and frozen swaps for top wasted items
              description: |-
                ## Purpose
                If the diary shows a large bag of salad half eaten every week, the fix may be at the shelf, not in the fridge. Switching your top wasted items to smaller packs, loose quantities or frozen versions such as frozen spinach, berries and herbs often costs little more per portion actually eaten.

                ## Milestones
                1. Each of the top five wasted foods checked for a smaller, loose or frozen option.
                2. The cost per portion eaten compared, not just the shelf price.
                3. At least three swaps made on the shopping list.
                4. The swapped items checked in the next two monthly tallies.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least three of the top five wasted foods are swapped to a smaller, loose or frozen version, with the effect checked over two tallies."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the shop or website for smaller, loose or frozen versions of your top five"
                - "Work out the cost per portion actually eaten for each option"
                - "Change the master shopping list for at least three items"
                - "Compare those items in the next two tallies"
            - name: Serving smaller portions with seconds on offer
              description: |-
                ## Purpose
                Plate waste, the food left on plates after a meal, is the one kind that can never be saved for later. Serving slightly smaller first portions, leaving the rest in the pan or on the table for seconds and letting people serve themselves where possible means uneaten food stays fit for tomorrow's lunch.

                ## Milestones
                1. Plate scrapings noted for one week to see who leaves what.
                2. First portions served a little smaller, with the rest kept in the pan.
                3. Self-serving tried at meals where it works, such as pasta, stews and salads.
                4. Plate scrapings noticeably lower after four weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "After four weeks of smaller first portions and self-serving, a week of plate scrapings is lower than the starting week."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Note what gets scraped off plates for one week"
                - "Serve smaller first portions and leave the rest in the pan"
                - "Put serving dishes on the table for meals that suit it"
                - "Repeat the plate scraping count after four weeks"
            - name: Choosing a home composting method
              description: |-
                ## Purpose
                Home composting turns peelings, coffee grounds and tea leaves into something useful instead of rubbish, but the right method depends on space and what you cook. Comparing an open compost bin, a hot composter, a bokashi bucket and a wormery against your garden, balcony or kitchen gives a choice you will keep using after the first summer.

                ## Milestones
                1. The space available and the weekly volume of scraps from the caddy recorded.
                2. Four methods compared on space, cost, what they accept, smell and effort.
                3. Any subsidised compost bin scheme from your local council checked.
                4. A method chosen and set up, or a decision to rely on kerbside collection.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A composting method is chosen against written criteria and set up, or kerbside collection is recorded as the decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure the space you have and weigh a week of caddy scraps"
                - "Compare a compost bin, hot composter, bokashi bucket and wormery"
                - "Check whether your council offers a discounted compost bin"
                - "Set up the chosen method and note what goes in it"
                - "Turn or check the compost and add dry material if it is wet @recurring(monthly:5)"
            - name: Trying a surplus food sharing app
              description: |-
                ## Purpose
                Surplus that your household will not eat, such as the gift hamper of things nobody likes or a glut of courgettes, can feed someone nearby. Trying a local food sharing app or community group for a month shows whether giving food away is practical where you live and how quickly items are collected.

                ## Milestones
                1. One or two local food sharing apps or community groups identified.
                2. At least three items listed and collected over a month.
                3. Notes on how fast items went and any hassle involved.
                4. A decision on whether to keep using it.

                ## Notes
                Share only sealed food, or food the platform's rules allow. Do not list anything past its use by date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least three surplus items are given away through a sharing app or group in one month, and a keep-or-drop decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find which food sharing apps or groups are active near you"
                - "Read the platform's rules on what food can be shared"
                - "List the next sealed item you will not eat"
                - "Decide after a month whether to keep the app"
            - name: Freezing in single portions instead of family blocks
              description: |-
                ## Purpose
                Freezing a whole pot of soup or chilli in one tub means it only comes out when the whole family wants it, and a frozen block cannot be split. Switching to flat-frozen bags and single portions means leftovers can come out for one lunch or four dinners, and defrost far faster.

                ## Milestones
                1. Bags and small tubs in single and double portion sizes in the labelling kit.
                2. Soups, sauces and stews frozen flat in bags, then stood upright like files.
                3. Mince, chicken pieces and bacon frozen in portions with paper between them.
                4. At least five single portions in the freezer ready for lunches.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least five single portions are in the freezer at any time, with liquids frozen flat and meat divided before freezing."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add single and double portion bags to the labelling kit"
                - "Freeze the next batch of soup flat in single portion bags"
                - "Divide the next pack of mince or chicken before freezing"
                - "File frozen flat bags upright in one freezer drawer"
            - name: Fridge run-down before a holiday
              description: |-
                ## Purpose
                Coming home from a week away to a fridge of slimy lettuce and soured milk is one of the biggest single waste moments of the year. Running stock down in the last few days, freezing what cannot be eaten and leaving a short list for the return shop means the fridge is nearly empty and clean when you leave.

                ## Milestones
                1. A run-down checklist that starts five days before departure.
                2. No fresh shopping in the last three days except essentials.
                3. Milk, bread, cheese and leftovers frozen or eaten before leaving.
                4. A short list for the first shop home written and saved on a phone.

                ## Notes
                Start from the **Operational checklist** template so the same list works for every trip.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On return from the next trip of four nights or more, nothing in the fridge needs binning and a return shopping list is ready."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a five-day run-down checklist from the operational checklist template"
                - "Plan the last three dinners around what is already in the fridge"
                - "Freeze milk, bread and any leftovers the day before leaving"
                - "Save a return shopping list on your phone"
            - name: Catering quantities for a party without the surplus
              description: |-
                ## Purpose
                Hosts tend to cater for the fear of running out, which is why parties end with trays of untouched sandwiches and bowls of salad nobody wants tomorrow. Working out quantities per guest from a reliable guide, and planning foods that keep or freeze, matches the spread to the crowd.

                ## Milestones
                1. The guest count confirmed, with children and light eaters noted.
                2. Quantities worked out per guest using a catering guide.
                3. At least half the menu made of food that freezes or keeps well.
                4. Containers, labels and a plan for leftovers ready before the party.

                ## Notes
                A small reserve that freezes, such as sausage rolls from frozen, covers the worry of running short without cooking extra.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Party food is ordered or cooked to per-guest quantities, and less than a tenth of it is binned after the event."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the guest count and how many are children"
                - "Calculate per-guest quantities from a catering guide"
                - "Swap one fragile dish for one that keeps or freezes"
                - "Set out containers and labels for leftovers before guests arrive"
            - name: Leftovers plan after a festive feast
              description: |-
                ## Purpose
                The day after a big festive meal, the fridge is full of roast meat, vegetables, sauces and desserts, and much of it is binned a week later. A plan made before the feast, with the next three days' meals already decided and freezer space cleared, means the leftovers have a schedule.

                ## Milestones
                1. Freezer space cleared in the week before the feast.
                2. Three post-feast meals planned, such as a pie, a curry and a soup.
                3. Leftovers portioned, labelled and fridged or frozen within a couple of hours of the meal.
                4. Leftovers eaten or frozen within the safe window.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "For each year's main feast, three leftover meals are planned in advance and nothing from the feast is binned for going off."
                cadence: cyclic
              tasks:
                - "Clear a freezer drawer in the week before the feast"
                - "Plan three meals for the days after the feast @recurring(yearly)"
                - "Portion and label the leftovers once the meal is cleared"
                - "Send guests home with boxed leftovers if they want them"
            - name: Thirty-day zero food waste challenge
              description: |-
                ## Purpose
                Thirty days with a target of no edible food in the bin is long enough to test every new habit at once and short enough for the household to commit. A dated start, a visible tally and a small reward at the end make it a shared project rather than a lecture.

                ## Milestones
                1. A start date set and agreed by everyone at home.
                2. A daily tally on the fridge of any edible food binned.
                3. A mid-point check on what is still slipping through.
                4. A final count and a small celebration meal made from what was saved.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A thirty-day challenge runs to its end date with a daily tally and finishes with less than a fifth of the starting edible waste."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a start date and agree it with the household"
                - "Put a daily tally sheet on the fridge door"
                - "Hold a five-minute check-in at the halfway point"
                - "Cook a celebration meal from saved food at the end"
            - name: Freezer power cut plan
              description: |-
                ## Purpose
                A full freezer can be worth a lot of money and many hours of cooking, and a long power cut or a failed appliance can lose it all. Knowing in advance how long your freezer stays cold, what to do with partly thawed food and who could take some in means fewer decisions made in a hurry.

                ## Milestones
                1. Your freezer manual checked for how long it holds temperature if the door stays shut.
                2. Your food safety agency's advice on thawed and refrozen food saved.
                3. A neighbour, friend or relative with freezer space identified.
                4. A one-page plan taped inside a cupboard near the freezer.

                ## Notes
                When in doubt about thawed food, follow your food safety agency's advice rather than guessing. Check your home insurance for freezer contents cover.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page freezer power cut plan, based on the manual and food safety guidance, is posted near the freezer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find how long your freezer holds temperature in its manual"
                - "Save your food safety agency's guidance on thawed food"
                - "Ask a nearby friend if they could take some food in a power cut"
                - "Write a one-page plan and tape it near the freezer"
                - "Check whether the home insurance policy covers freezer contents @recurring(yearly)"
            - name: Garden or allotment glut plan
              description: |-
                ## Purpose
                Courgettes, runner beans, apples and tomatoes all arrive at once, and a good harvest can become a compost heap within a fortnight. Planning in spring which crops tend to glut and how each will be eaten, frozen, preserved or given away means the surplus is expected rather than overwhelming.

                ## Milestones
                1. The crops that glutted last year listed with rough quantities.
                2. A plan for each: eat fresh, freeze, preserve or give away.
                3. Freezer space and jars ready before the glut arrives.
                4. Friends, neighbours or a community fridge lined up to take surplus.

                ## Notes
                Jams, pickles and ferments belong to the Fermenting and preserving area. Here the aim is simply that nothing grown is wasted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each growing season has a written glut plan for every crop that over-produced the year before, and no harvested produce is binned."
                cadence: cyclic
              tasks:
                - "List last year's glut crops and how much went to waste"
                - "Write a plan for each crop: eat, freeze, preserve or give away"
                - "Review the glut plan before the first harvest @recurring(yearly)"
                - "Line up two neighbours or friends who will take surplus"
            - name: Cutting plate waste with young children
              description: |-
                ## Purpose
                Small children's appetites swing from day to day, so a full plate of food often means half a plate in the bin. Serving toddler-sized portions, offering more rather than insisting on finishing and saving untouched food for later keeps waste down without turning meals into a battle.

                ## Milestones
                1. A week of what the children leave noted, by food and meal.
                2. Starter portions set at about half the amount usually served.
                3. Untouched food from the serving dish kept for later, not scraped.
                4. Uneaten snacks and lunchbox items brought home and reused where safe.

                ## Notes
                Food a child has bitten or handled is usually best binned. The saving comes from serving less to start with, not from rescuing plates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "After four weeks of smaller starter portions, a week of notes shows children's plate waste roughly halved from the first week."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Note what each child leaves at every meal for a week"
                - "Serve starter portions of about half the usual amount"
                - "Keep a small plate of untouched extras for the next snack"
                - "Repeat the week of notes after four weeks"
            - name: Shared fridge waste pact for housemates
              description: |-
                ## Purpose
                In a shared fridge food is lost twice over: everyone buys their own milk and bread, and nobody feels able to touch another person's food before it goes off. A short pact on shared staples, a shelf each and a weekly clear-out keeps the fridge usable and stops four half-used cartons going sour.

                ## Milestones
                1. A list of staples the house agrees to share and split the cost of.
                2. A shelf or labelled box for each person and one shared shelf.
                3. An agreed rule for what happens to food left past a set point.
                4. A clear-out rota running for at least a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Housemates agree a written pact covering shared staples, shelf allocation and a clear-out rule, with the rota followed for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Propose a shared staples list in the house chat"
                - "Allocate a shelf or labelled box to each person"
                - "Agree what happens to food left past its date for two days"
                - "Run the shared fridge clear-out on the agreed day @recurring(monthly:1)"
            - name: Food waste plan for shift workers and irregular weeks
              description: |-
                ## Purpose
                Night shifts, rotas, travel and on-call weeks wreck a normal shopping rhythm, so fresh food bought on Monday is often still there untouched on Friday. Building shopping and cooking around the rota, with more frozen and long-life basics and smaller fresh top-ups, matches food to the days you are actually home.

                ## Milestones
                1. The next rota mapped against which meals will be eaten at home.
                2. A frozen and long-life base list for the busiest weeks.
                3. Fresh food bought in small amounts only for the days at home.
                4. Single portions in the freezer for the first day after a run of shifts.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Across two full rota cycles, fresh food is bought only for days at home and no fresh produce is binned in the tally."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark on the next rota which meals you will eat at home"
                - "Write a frozen and long-life base list for heavy weeks"
                - "Shop for fresh food only to cover the days at home"
                - "Freeze two single portions before each long run of shifts"
            - name: Checking an older relative's fridge on visits
              description: |-
                ## Purpose
                An older relative's fridge can fill with out-of-date food when shopping habits outlast appetite, or when eyesight makes dates hard to read. A gentle, regular check on visits, agreed with them first, keeps their food fresh, cuts their waste and spots changes in eating that their family or doctor may want to know about.

                ## Milestones
                1. The idea agreed with your relative, so the check is done with them, not to them.
                2. A routine for each visit: dates checked, near-date food moved forward, out-of-date food removed.
                3. Their regular shopping adjusted to what they actually eat.
                4. Large-print date labels or a marker for writing dates bigger, if it helps.

                ## Notes
                A fridge that is suddenly empty or full of untouched meals can be a sign worth mentioning to their doctor or care team.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "With your relative's agreement, their fridge is checked on each weekly visit for two months and their regular shop is resized to what they eat."
                cadence: rolling
              tasks:
                - "Talk with your relative about checking the fridge together"
                - "Check dates and move near-date food forward on each visit @recurring(weekly:thu)"
                - "Shrink their regular shopping order to what they finish"
                - "Write dates in large marker on items they struggle to read"
            - name: Annual food waste cost estimate
              description: |-
                ## Purpose
                Putting a price on what is wasted turns an abstract habit into a household budget line, and it is often the number that keeps everyone motivated. Pricing one logged week of edible waste and multiplying it out gives a yearly figure to compare against last year and against the starting diary.

                ## Milestones
                1. One week of edible waste logged with an approximate price for each item.
                2. The weekly cost multiplied out to a yearly estimate.
                3. The figure compared with the cost from the original bin diary.
                4. The saving written in the household budget notes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly food waste cost estimate is calculated from a priced week of logging and compared with the original baseline."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Price each item in the original bin diary from recent receipts"
                - "Log and price one fresh week of edible waste @recurring(yearly)"
                - "Multiply the weekly cost out to a yearly estimate"
                - "Record the saving against the baseline in the budget notes"
            - name: Donating surplus to a community fridge or food bank
              description: |-
                ## Purpose
                Community fridges and food banks turn surplus that one household cannot use into meals for others, but each has its own rules on what it can accept. Finding the nearest ones, learning what they take and setting a monthly habit of donating unwanted sealed food puts surplus to work locally.

                ## Milestones
                1. The nearest community fridge and food bank found, with their opening times.
                2. Each one's rules on fresh, chilled and date-close food noted.
                3. A donation box in a cupboard for sealed food the household will not eat.
                4. At least three donations made over three months.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three donations are made over three months to a community fridge or food bank, each within that site's acceptance rules."
                cadence: rolling
              tasks:
                - "Find your nearest community fridge and food bank"
                - "Note what each will accept and when they are open"
                - "Set up a donation box for sealed food you will not eat"
                - "Drop the donation box off when you pass @recurring(monthly:19)"
            - name: Running a wormery or bokashi bin
              description: |-
                ## Purpose
                Wormeries and bokashi bins handle food scraps that a garden heap struggles with, and bokashi can take cooked food, meat and dairy in a sealed kitchen bucket. Keeping one going through a full year, with feeding, draining and harvesting done on schedule, turns kitchen scraps into compost or liquid feed for pots and beds.

                ## Milestones
                1. The chosen system set up with bedding or bran and a feeding guide.
                2. A feeding and draining routine kept for three months without smell or flies.
                3. The first compost or bokashi pre-compost dug into soil or a pot.
                4. A note of what the system handles well and what it does not.

                ## Notes
                Overfeeding is the usual cause of smells. Add less, more often, and keep a supply of dry bedding or bran to hand.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wormery or bokashi bin runs for twelve months on a fixed routine and produces at least one harvest of compost."
                cadence: rolling
              tasks:
                - "Read the feeding guide for your wormery or bokashi bin"
                - "Feed the bin and drain any liquid on a fixed day @recurring(weekly:thu)"
                - "Keep a note of scraps that cause smells or flies"
                - "Harvest the first compost and use it in a pot or bed"
            - name: Zero-waste kitchen audit for an experienced household
              description: |-
                ## Purpose
                Once the obvious waste has gone, what remains tends to hide in less visible places: drinks, sauces, the bottom of cereal boxes, coffee and the food eaten out of guilt rather than appetite. A yearly audit, looking at every stage from shopping to the caddy, finds the next layer and keeps a well-run kitchen from slipping.

                ## Milestones
                1. Two weeks of detailed logging including drinks, condiments and partly used packets.
                2. Waste traced to its stage: buying, storing, cooking, serving or leftovers.
                3. Three new changes chosen for the coming year.
                4. Last year's changes reviewed and kept, adjusted or dropped.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly audit records two weeks of detailed logging, sorts waste by stage and names three changes for the coming year."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Log every partial jar, drink and packet that is thrown away for two weeks"
                - "Sort the log by stage: buying, storing, cooking, serving, leftovers"
                - "Choose three changes for the coming year"
                - "Run the audit and review last year's changes @recurring(yearly)"
            - name: Teaching a use-it-up cooking session
              description: |-
                ## Purpose
                People who have cut their own waste often find friends, a parents' group or a community centre want to know how. Running a short session that cooks two dishes from typical fridge leftovers and hands out a storage and freezing sheet passes on the habits that took you months to build.

                ## Milestones
                1. A venue and audience agreed, such as friends at home, a school group or a community kitchen.
                2. Two dishes chosen that can be cooked from typical odds and ends in under an hour.
                3. A one-page handout of storage, freezing and date label tips.
                4. The session run and feedback gathered for the next one.

                ## Notes
                Check the venue's food hygiene requirements before cooking for a group outside your home.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One use-it-up cooking session is delivered to at least four people, with a handout given out and feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a group or friends whether they would like a session"
                - "Pick two dishes that work with whatever leftovers people bring"
                - "Write a one-page handout drawing on your storage and freezing charts"
                - "Run the session and note what people asked about"
---

# Kitchen Food Waste Reduction

This area is for any household that keeps scraping good food into the bin and wants to stop paying for it twice. It starts with the foundations (a bin diary, a list of the foods you waste most, a target, a fridge with an eat-first shelf, a labelled freezer and a clear rule on date labels), moves to the weekly routines that catch food before it turns, then the skills of storing, freezing and cooking with odds and ends, the decisions about containers, pack sizes and composting, the occasions that create surplus, versions for children, housemates, shift workers and older relatives, and finally the work of a household that already wastes little, from pricing what is left to teaching others.

What repeats is a Friday fridge sweep before the shop, a Wednesday use-it-up dinner, a Sunday plan for leftovers, a monthly freezer eat-down on the 12th, a waste tally on the 26th and a quarterly cupboard-only week. The Metrics log, Habit tracker, Weekly meal plan, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
