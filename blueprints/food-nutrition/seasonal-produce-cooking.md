---
id: food-nutrition.seasonal-produce-cooking
name: Cooking With Seasonal Produce
description: "A local seasonal calendar and sources, veg box and market routines with weekly plans, cooking skills for each season, buying decisions, harvest events and a cookbook of your own seasonal year."
category: personal
version: 1.0.0
tags: [food-nutrition, seasonal-produce-cooking, everyone, seasonal-eating, farmers-market, veg-box, local-produce]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - weekly-meal-plan
    - metrics-log
    - reading-queue
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cooking With Seasonal Produce
          description: "Planning meals around what is in season, local markets and veg box deliveries for fresher, cheaper and more varied cooking."
          projects:
            - name: Local seasonal produce calendar
              description: |-
                ## Purpose
                Supermarkets sell the same strawberries and asparagus all year, so most people have lost track of when anything is actually at its best. A month-by-month calendar for your own region, with vegetables, fruit and herbs listed by when they peak, becomes the reference every meal plan and shopping trip in this area starts from.

                ## Milestones
                1. A seasonal chart for your country or region found from a growers' association, market or public food body.
                2. A twelve-month calendar listing the vegetables, fruit and herbs that peak in each month.
                3. Produce that is never grown locally, such as citrus or bananas in a cool climate, marked separately.
                4. The calendar pinned where you plan meals.

                ## Notes
                National charts can be several weeks out for your own area, especially in hills or on the coast. Check them against what your nearest market actually sells and adjust.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month produce calendar for your region is pinned where you plan meals and has been checked against at least one local market."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a seasonal produce chart published for your region"
                - "Copy it into a twelve-month calendar grouped by vegetables, fruit and herbs"
                - "Mark the produce that is never grown locally"
                - "Pin the calendar where you plan the week's meals"
                - "Mark what actually turned up at the market against the calendar @recurring(monthly:3)"
            - name: Map of nearby markets, farm shops and growers
              description: |-
                ## Purpose
                Knowing where seasonal food is sold within reach is half the work: farmers' markets, farm shops, greengrocers, pick-your-own farms and community growers all keep different days and hours. A short, mapped list with opening times means a good source is never more than one decision away.

                ## Milestones
                1. Every farmers' market, farm shop and independent greengrocer within 30 minutes listed with days and hours.
                2. Pick-your-own farms and community growing projects that sell produce added.
                3. Each source noted for what it does best, such as eggs, soft fruit or salad leaves.
                4. Two or three sources chosen as your regular places to shop.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of at least five local produce sources with days and hours exists, and two are chosen as regular places to shop."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for farmers' markets and farm shops within 30 minutes of home"
                - "Note each market's day, hours and how you would get there"
                - "Add pick-your-own farms and community gardens that sell produce"
                - "Visit the two most promising sources before choosing your regulars"
                - "Check the list for new markets and changed hours @recurring(yearly)"
            - name: Choosing a veg box or farm share scheme
              description: |-
                ## Purpose
                Veg boxes and farm shares vary far more than the adverts suggest: some are grown on one farm, some are bought in from wholesalers, some let you swap items and some send whatever they have. Comparing three schemes on origin, flexibility, price per kilo and delivery day before signing up avoids a box that ends up half wasted every week.

                ## Milestones
                1. Three local box or farm share schemes shortlisted.
                2. Each scored on origin, choice of items, box sizes, price and delivery day.
                3. The pause, skip and cancellation rules of each written down.
                4. One scheme chosen and a trial delivery booked, or a decision recorded to use markets instead.

                ## Notes
                Start from the **Purchase decision** template. Begin with the smallest box for a month: most households overestimate how much fresh veg they will really cook.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One box scheme is chosen and trialled, or a recorded decision explains why markets suit the household better."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three box schemes that deliver to your address"
                - "Compare origin, swaps, box sizes and price per kilo for each"
                - "Read the skip, pause and cancellation terms for each scheme"
                - "Book a trial of the smallest box from the scheme you prefer"
            - name: Produce storage guide for your kitchen
              description: |-
                ## Purpose
                Good produce bought on Saturday can be limp by Tuesday if it goes in the wrong place: tomatoes lose flavour in the fridge, soft herbs wilt in a bag, and apples give off a gas that ripens everything near them. A one-page guide to where each type of produce lives in your own kitchen keeps market buys at their best for the whole week.

                ## Milestones
                1. Storage rules written for roots, leafy greens, soft herbs, stone fruit, tomatoes, onions and berries.
                2. Produce that ripens its neighbours, such as apples and bananas, given a place apart.
                3. A home agreed for each group: fridge drawer, counter bowl, cool cupboard or jar of water.
                4. The guide stuck inside a cupboard door where the shopping is unpacked.

                ## Notes
                If your fridge drawers have humidity sliders, set one high for leafy greens and one low for fruit.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page produce storage guide covering at least ten items is posted in the kitchen and followed when shopping is unpacked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the ten fresh items you buy most often"
                - "Look up the best storage spot and keeping time for each one"
                - "Clear a cool, dark space for potatoes, onions and squash"
                - "Write the one-page guide and stick it inside a cupboard door"
            - name: Pantry partners for vegetable-led cooking
              description: |-
                ## Purpose
                Seasonal vegetables become a meal when the cupboard holds the right partners: a good olive oil, two vinegars, lemons, a hard cheese, nuts, pulses, grains and a few preserved flavours such as capers or anchovies. Building that small pantry once means a bag of whatever looked best at the market turns into dinner without a special trip.

                ## Milestones
                1. A list of fifteen to twenty pantry partners chosen for vegetable-led cooking.
                2. Gaps in the current cupboard filled.
                3. A shelf or basket set aside so the partners are easy to see.
                4. Three dinners cooked using only the pantry and one fresh seasonal vegetable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pantry of at least fifteen supporting staples is stocked and three dinners have been cooked from it with one seasonal vegetable each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a list of pantry partners for vegetable-led cooking"
                - "Check the cupboard and note which partners are missing"
                - "Buy the missing items on your next shop"
                - "Cook one dinner from the pantry plus a single seasonal vegetable"
            - name: One flexible base dish for each season
              description: |-
                ## Purpose
                Rather than a new recipe for every vegetable, experienced seasonal cooks lean on a few formats that take whatever is good: a spring risotto, a summer tray of roast vegetables with grains, an autumn soup, a winter gratin. Mastering one such base dish per season gives you a reliable answer for most weeks of the year.

                ## Milestones
                1. Four base dishes chosen, one per season, each able to take at least five different vegetables.
                2. The current season's base dish cooked twice with different produce.
                3. Ratios and timings written on one card per dish.
                4. The four cards filed with your seasonal recipes.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Four base dish cards exist, and the current season's dish has been cooked twice with different vegetables."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose four base dishes, one for each season"
                - "Cook the current season's base dish this week"
                - "Write its ratios and timings on a card"
                - "Cook it again with a different vegetable a fortnight later"
            - name: Household likes and dislikes for fresh produce
              description: |-
                ## Purpose
                Seasonal cooking stalls quickly if half the box goes to people who will not eat it. A quick round of the household, asking which vegetables and fruit each person loves, tolerates or refuses, shows what to buy more of and which dislikes might change with a different cooking method.

                ## Milestones
                1. Each household member's loves, tolerated items and refusals listed.
                2. Vegetables everyone eats marked as safe choices for the box.
                3. Refused items checked for whether another method, such as roasting instead of boiling, is worth a try.
                4. The list shared with whoever plans meals and orders produce.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written likes and dislikes list for every household member is shared with the person who plans meals and orders produce."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask each person to sort a list of 30 vegetables and fruit into love, fine and no"
                - "Mark the items everyone is happy to eat"
                - "Pick two refused items to try cooked a different way"
                - "Share the list with whoever orders the box or does the market run"
            - name: First month of eating with the season
              description: |-
                ## Purpose
                Switching everything at once usually ends in a fridge of unfamiliar vegetables and a takeaway. A single month in which four dinners a week are built around something in season, bought from your new sources, shows what works for your household before anything bigger changes.

                ## Milestones
                1. A target set: four seasonal dinners a week for four weeks.
                2. Each week's seasonal dinners noted with their main vegetable or fruit.
                3. At least two ingredients new to the household tried during the month.
                4. A short note written on what to keep, change or drop.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Sixteen seasonal dinners are recorded across four weeks, with a written note on what to keep and what to drop."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the target of four seasonal dinners a week for a month"
                - "Pick this week's four dinners from the seasonal calendar"
                - "Note each seasonal dinner and its main ingredient"
                - "Write a five-line review at the end of the fourth week"
            - name: Seasonal recipe file sorted by month
              description: |-
                ## Purpose
                Good seasonal recipes get lost because they are only needed for six weeks a year, and by next spring nobody remembers which asparagus dish was the hit. A recipe file sorted by month, with a line on what the household thought, means each season starts with proven favourites.

                ## Milestones
                1. A recipe file, paper or digital, organised by month.
                2. Every recipe tagged with its main seasonal ingredient.
                3. A one-line verdict and any changes recorded for each recipe cooked.
                4. At least two proven recipes filed for the current month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A month-sorted recipe file holds at least two tested recipes for the current month, each with a household verdict."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a recipe file with a section for each month"
                - "File two recipes you already cook for the current month"
                - "Add a verdict line to each recipe after cooking it"
                - "Add the best new seasonal recipe of the month @recurring(monthly:28)"
            - name: Weekly meal plan built from the box and market
              description: |-
                ## Purpose
                Most weekly plans start from recipes and then send you hunting for ingredients that are out of season. Turning it round, starting from what the box or market will have and filling in the meals after, gives cheaper, better-tasting dinners and fewer forgotten half bunches.

                ## Milestones
                1. A planning slot fixed each week, after the box contents or market list are known.
                2. Each plan lists the seasonal produce first and the meals second.
                3. At least four dinners a week built around in-season produce.
                4. Produce left from last week carried into the first meals of the new plan.

                ## Notes
                Start from the **Weekly meal plan** template, and add a column for the seasonal ingredient each meal uses.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A seasonal meal plan exists for eight consecutive weeks, each with at least four dinners built around in-season produce."
                cadence: rolling
              tasks:
                - "Pick a fixed planning time after the box contents are known"
                - "Copy the weekly meal plan template and add a seasonal ingredient column"
                - "Plan the week's meals starting from the box and market list @recurring(weekly:sun)"
                - "Put last week's remaining produce into the first two dinners"
            - name: Veg box delivery day routine
              description: |-
                ## Purpose
                A box left unopened in the hall until the weekend loses its most delicate items first. A short routine around delivery day, checking contents in advance, unpacking straight away and noting what must be cooked first, gets the whole box eaten.

                ## Milestones
                1. Box contents checked online before delivery and swaps made where the scheme allows.
                2. Everything unpacked and stored within an hour of arrival.
                3. A use-first list of the most perishable items on the fridge door.
                4. Fewer than two items a week left uncooked by the next delivery.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive boxes are unpacked on arrival with a use-first list, and no more than two items per box go uncooked."
                cadence: rolling
              tasks:
                - "Check next week's box contents online and make any swaps @recurring(weekly:thu)"
                - "Unpack and store the box within an hour of delivery"
                - "Write a use-first list of the most perishable items"
                - "Count anything left uncooked before the next box arrives"
            - name: Weekly farmers' market run
              description: |-
                ## Purpose
                Markets reward regulars: you learn which stall has the best tomatoes, when the first cherries arrive and what goes cheap in the last half hour of trading. A fixed weekly run with a short list and room for one surprise turns the market into the main source of the week's produce instead of an occasional treat.

                ## Milestones
                1. A market day and time fixed in the calendar.
                2. A short list written from the meal plan before each visit.
                3. A spend limit set for each run.
                4. One newly in-season item bought and cooked each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly market runs are completed within a set spend limit, each bringing home one newly in-season item that gets cooked."
                cadence: rolling
              tasks:
                - "Fix a weekly market day and time in your calendar"
                - "Write a short list from the meal plan before leaving"
                - "Set a cash or card limit for each run"
                - "Walk the market and buy one item new to the season this week @recurring(weekly:sat)"
            - name: Ingredient of the month focus
              description: |-
                ## Purpose
                Cooking one seasonal ingredient properly for a month, rhubarb in early spring, broad beans in early summer, quince in autumn, teaches more than dabbling in twenty. A monthly focus gives the household something to look forward to and builds a repertoire one ingredient at a time.

                ## Milestones
                1. An ingredient chosen before each month starts, from the seasonal calendar.
                2. At least three different dishes cooked with it during the month.
                3. The best dish added to the seasonal recipe file.
                4. A running list of past ingredients kept so the year builds a full repertoire.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly ingredients are chosen across a year, each cooked at least three ways, with the best dish filed."
                cadence: cyclic
              tasks:
                - "Choose next month's focus ingredient from the calendar @recurring(monthly:25)"
                - "Find three contrasting recipes for this month's ingredient"
                - "Cook the first of the three this week"
                - "Add the month's best dish to the seasonal recipe file"
            - name: Seasonal produce price log
              description: |-
                ## Purpose
                Seasonal food is often cheaper but not always, and the price of strawberries or courgettes can halve between the first week of the season and the peak. Logging a handful of items each month shows when to buy, when to wait and whether the box or the market is the better deal for each.

                ## Milestones
                1. Five to eight items chosen to track, mixing year-round staples and seasonal favourites.
                2. Prices per kilo logged monthly from two sources.
                3. Best-value weeks for each seasonal item marked after one full season.
                4. A note written on which source wins for which items.

                ## Notes
                Start from the **Metrics log** template. Always log price per kilo, since bunch and punnet sizes shrink and grow through the season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A price log holds at least six months of per-kilo prices from two sources, with best-value months marked for each seasonal item."
                cadence: rolling
              tasks:
                - "Choose five to eight items to track across the year"
                - "Set up a log with columns for item, source, price per kilo and date"
                - "Record this month's prices for the tracked items @recurring(monthly:14)"
                - "Mark the cheapest month for each seasonal item after a full season"
            - name: Change-of-season kitchen reset
              description: |-
                ## Purpose
                Four times a year the produce changes faster than the habits: the summer salad repertoire runs on into October, or the winter roots stay on the list into May. A short reset at each change of season updates the pantry, recipe rotation and storage space to match what is coming.

                ## Milestones
                1. The calendar checked for what is arriving and finishing in the next three months.
                2. Pantry partners adjusted, such as more stock and pulses in autumn and more vinegars in spring.
                3. The next season's recipes moved to the front of the recipe file.
                4. Cool storage cleared for the season's keeping crops.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four change-of-season resets are completed in a year, each recorded with the pantry and recipe changes made."
                cadence: cyclic
              tasks:
                - "Check the calendar for what arrives and finishes in the next three months"
                - "Move next season's recipes to the front of the recipe file"
                - "Adjust the pantry for the coming season's cooking"
                - "Hold a change-of-season kitchen reset @recurring(quarterly)"
            - name: Conversations with growers and stallholders
              description: |-
                ## Purpose
                The people who grow and sell produce know what is coming in a fortnight, which variety roasts best and what to do with a glut, yet few customers ever ask. A habit of one real question per visit builds relationships that bring first pick, cooking tips and the occasional tray of seconds.

                ## Milestones
                1. Two or three growers or stallholders known by name.
                2. A question asked on most visits, such as what is coming next or how they cook it.
                3. Their tips recorded in your seasonal recipe file.
                4. At least one advance order or set-aside arrangement made with a grower.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two growers are known by name, their tips are recorded and one advance order has been placed."
                cadence: rolling
              tasks:
                - "Introduce yourself to the stallholder you buy from most"
                - "Ask one grower what will be ready in the next two weeks @recurring(monthly:9)"
                - "Note each tip in your seasonal recipe file"
                - "Ask a grower about setting aside seconds or an early crop for you"
            - name: Monthly soup and salad rotation
              description: |-
                ## Purpose
                Soups in the cold months and salads in the warm ones are the easiest way to put a lot of seasonal produce into one meal. A rotation that changes each month, leek and potato in winter, pea and mint in spring, panzanella in high summer, keeps lunches and light dinners tied to the calendar.

                ## Milestones
                1. A list of twelve soups and twelve salads, one of each matched to a month.
                2. This month's pair cooked at least once.
                3. A batch of the current soup portioned for lunches.
                4. Pairs that flopped replaced with alternatives in the list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of soup and salad pairs are listed, and each month's pair has been cooked at least once."
                cadence: rolling
              tasks:
                - "Write a list of twelve soups and twelve salads matched to months"
                - "Portion the current soup into lunch-sized containers"
                - "Swap any pair the household did not enjoy for an alternative"
                - "Cook the month's soup and salad pair @recurring(monthly:18)"
            - name: Annual seasonal cooking review
              description: |-
                ## Purpose
                Once a year it is worth asking whether the box, the markets and the recipes are still pulling their weight. A short review with the price log, recipe file and a sample of meal plans in front of you decides what to keep, cancel or try in the coming year.

                ## Milestones
                1. The year's price log, recipe file and meal plans gathered.
                2. Three highlights and three disappointments named.
                3. A decision recorded on keeping, changing or cancelling the box and each regular source.
                4. Two goals set for the coming year, such as a new market or a season to learn properly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review note exists with a decision on each regular source and two goals for the coming year."
                cadence: cyclic
              tasks:
                - "Gather the price log, recipe file and a sample of meal plans"
                - "Name three highlights and three things that did not work"
                - "Decide whether to keep, change or cancel each regular source"
                - "Hold the annual seasonal cooking review @recurring(yearly)"
            - name: Judging ripeness and freshness at the stall
              description: |-
                ## Purpose
                Choosing well is a learnable skill: a ripe melon smells sweet at the stem end, a fresh bean snaps cleanly, a good leek has tight, unbruised leaves. Practising the checks for the twenty items you buy most means you stop paying for fruit that never ripens and leaves that wilt in a day.

                ## Milestones
                1. Freshness and ripeness checks written for the twenty items you buy most.
                2. Each check practised on at least two shopping trips.
                3. Three items bought deliberately at different ripeness and compared at home.
                4. A short cheat sheet kept on your phone for market visits.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ripeness and freshness cheat sheet covering twenty items exists and has been used on at least four shopping trips."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the twenty fresh items you buy most often"
                - "Look up the freshness and ripeness signs for each"
                - "Practise the checks for five items on your next shop"
                - "Save a short cheat sheet on your phone for market visits"
            - name: Cooking the spring arrivals
              description: |-
                ## Purpose
                Spring brings short, sweet seasons that reward simple cooking: asparagus, peas, broad beans, new potatoes, radishes and the first tender salad leaves. Learning how little each one needs, a quick blanch, a hot pan, a spoon of butter, makes the most of weeks that pass quickly.

                ## Milestones
                1. Six spring vegetables cooked at least once each during their season.
                2. Blanching and refreshing practised until timings are reliable.
                3. Broad beans double-podded and asparagus trimmed correctly.
                4. Two spring dishes added to the recipe file.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six spring vegetables are cooked during their season and two spring dishes are filed with notes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick six spring vegetables from your calendar to learn"
                - "Practise blanching and refreshing peas or broad beans"
                - "Cook asparagus three ways: roasted, griddled and shaved raw"
                - "File the two best spring dishes in your recipe file"
            - name: Summer gluts of tomatoes, courgettes and stone fruit
              description: |-
                ## Purpose
                High summer brings more than anyone can eat: courgettes grow overnight, tomatoes arrive by the tray and stone fruit ripens all at once. A few dishes that use a lot in one go, slow-roasted tomatoes, courgette fritters, a fruit galette, turn abundance into good meals rather than compost.

                ## Milestones
                1. Three high-volume dishes learned for tomatoes and courgettes.
                2. Stone fruit served both raw and baked.
                3. Green and runner beans cooked so they keep their colour and snap.
                4. A summer glut list of dishes on the fridge door.

                ## Notes
                Jams, chutneys and bottling belong with fermenting and preserving, which covers the safe methods. This project is about eating the glut fresh.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six summer glut dishes have been cooked in season and a glut dish list is posted in the kitchen."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Slow-roast a full tray of tomatoes and use them in three meals"
                - "Cook courgettes three different ways in one week"
                - "Bake a simple stone fruit galette or crumble"
                - "Write a summer glut dish list for the fridge door"
            - name: Autumn squash, mushrooms, apples and pears
              description: |-
                ## Purpose
                Autumn produce asks for longer cooking and more confidence with a knife: a whole squash, a bag of mixed mushrooms, windfall apples, hard pears. Learning to break down, roast and braise these keeps the season's best food from sitting on the counter as decoration.

                ## Milestones
                1. A whole squash peeled, seeded and cut safely with a heavy knife.
                2. Mushrooms cooked in a hot pan without turning watery.
                3. Apples or pears used in one savoury and one sweet dish.
                4. Two autumn dishes filed with notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Squash, mushrooms and orchard fruit are each cooked at least twice in autumn, with two dishes filed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Buy a whole squash and roast it both in wedges and in cubes"
                - "Cook mushrooms in small batches in a very hot pan"
                - "Make one savoury dish with apples or pears"
                - "File the two best autumn dishes with notes"
            - name: Winter brassicas, roots and bitter leaves
              description: |-
                ## Purpose
                Winter is when seasonal cooking is hardest to love: cabbage, kale, sprouts, celeriac, parsnips and chicory. Cooked well, charred, braised or shredded raw with citrus, they become the dishes people ask for, and the season stops feeling like a wait for spring.

                ## Milestones
                1. Sprouts or cabbage cooked by charring, braising and shredding raw.
                2. A root purée that is not potato added to the repertoire.
                3. A bitter leaf salad balanced with citrus, fat and something sweet.
                4. Two winter dishes filed with notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Brassicas, roots and bitter leaves are each cooked two ways during winter, with two dishes filed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Char sprouts or cabbage wedges in a very hot pan"
                - "Make a celeriac or parsnip purée"
                - "Build a chicory or radicchio salad with orange and a soft cheese"
                - "File the two best winter dishes with notes"
            - name: Cooking the leaves, stems and tops
              description: |-
                ## Purpose
                Market produce often comes whole: beetroot with its leaves, carrots with tops, cauliflower in a jacket of leaves, broccoli with thick stems. Those parts are good food, with beet greens cooking like chard and broccoli stems sweeter than the florets, so learning them stretches every bunch further.

                ## Milestones
                1. Five usually discarded parts cooked, such as beet greens, carrot tops, cauliflower leaves, broccoli stems and leek greens.
                2. A method noted for each part.
                3. Leafy tops separated from roots on the day of purchase so both keep.
                4. Whole-vegetable uses added to the recipe file.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Five usually discarded vegetable parts are cooked and a method for each is recorded in the recipe file."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Buy beetroot or carrots with their tops still on"
                - "Cook the greens like chard with garlic and oil"
                - "Roast cauliflower leaves alongside the florets"
                - "Note a method for each part in the recipe file"
            - name: Seasonal dressings and salads beyond lettuce
              description: |-
                ## Purpose
                A salad can be shaved fennel in spring, peaches and tomatoes in summer, roast squash and lentils in autumn, or raw kale and apple in winter. Learning a handful of dressings and the balance of crunch, acid, fat and salt makes a salad possible in any month, built from what is good.

                ## Milestones
                1. Four dressings learned by heart: a vinaigrette, a creamy one, a warm one and a citrus one.
                2. The oil to acid ratio you prefer written down.
                3. One salad made in each season without leaves as the base.
                4. Two seasonal salads filed in the recipe file.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four dressings can be made without a recipe and two leaf-free seasonal salads are filed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Make a basic vinaigrette and write down the ratio you like"
                - "Learn a creamy dressing and a warm one"
                - "Build a salad this week with no lettuce in it"
                - "File two seasonal salads in the recipe file"
            - name: Cooking the unfamiliar veg box arrivals
              description: |-
                ## Purpose
                Every box scheme eventually sends kohlrabi, celeriac, Jerusalem artichokes, salsify or a huge bunch of chard, and many of them end up in the bin unopened. Learning one reliable dish for each of the usual surprises means the next one gets cooked the same week.

                ## Milestones
                1. A list of the eight least familiar items your box or market sells.
                2. One reliable dish learned for each item.
                3. Preparation notes written, such as peeling celeriac or scrubbing artichokes.
                4. A surprise list on the fridge door naming the dish for each item.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dish is learned and recorded for eight unfamiliar vegetables, and the next box surprise is cooked within three days."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the eight least familiar vegetables your box sends"
                - "Ask the agent to suggest one simple dish for each"
                - "Cook the next unfamiliar item within three days of delivery"
                - "Post the surprise list with one dish per item on the fridge"
            - name: Short-season citrus cooking
              description: |-
                ## Purpose
                Some citrus varieties appear for only a few weeks a year: blood oranges, bergamots, bitter Seville oranges and Meyer lemons. Learning to use them in dressings, salads, roasts and puddings brightens the darkest months and introduces flavours that are gone again within weeks.

                ## Milestones
                1. Three short-season citrus varieties identified and their weeks marked on the calendar.
                2. Citrus zested, segmented and juiced cleanly.
                3. One savoury and one sweet dish cooked with seasonal citrus.
                4. The best citrus dish filed in the recipe file.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three short-season citrus varieties are used in their weeks and one citrus dish is filed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note which short-season citrus varieties appear and when"
                - "Practise cutting citrus into clean segments"
                - "Cook a savoury dish with blood orange or bergamot"
                - "File the best citrus dish in your recipe file"
            - name: Moving one shopping category to a local source
              description: |-
                ## Purpose
                Changing every shop at once rarely sticks, but moving a single category, eggs, apples, salad leaves or soft fruit, to a local grower is easy to keep up. Choosing the category with the biggest gap in quality between the supermarket and local makes the extra stop worth it.

                ## Milestones
                1. Three candidate categories compared on taste, price and convenience.
                2. One category chosen and a local source agreed.
                3. That category bought locally for six weeks.
                4. A decision recorded on keeping it and whether to add a second category.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One category has been bought locally for six weeks and a written decision records whether to continue."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three categories where local produce tastes noticeably better"
                - "Compare price and convenience for each against the supermarket"
                - "Buy the chosen category locally for six weeks"
                - "Record whether to keep it and which category to move next"
            - name: Box, market or supermarket split
              description: |-
                ## Purpose
                After a few months of seasonal shopping it is worth checking the trade-offs honestly: the box saves time but limits choice, the market has the best produce but needs a free morning, the supermarket is easiest but blandest. Comparing them on cost, waste, time and taste over the same month settles where each kind of produce should come from.

                ## Milestones
                1. One month of spend, time and waste recorded by source.
                2. Taste and freshness rated for the same five items from each source.
                3. A split agreed, such as box for roots and greens, market for fruit and supermarket for staples.
                4. The split written beside the meal plan so everyone shops the same way.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written split of which produce comes from which source exists, backed by one month of cost, time and waste figures."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record a month of spend, time spent and items wasted for each source"
                - "Buy the same five items from each source and compare them"
                - "Agree which produce comes from which source"
                - "Write the agreed split beside the meal plan"
            - name: Seasonal swaps for your ten regular dinners
              description: |-
                ## Purpose
                Most households cook the same ten dinners all year, so the quickest route to seasonal eating is changing the vegetables inside them. Writing a spring, summer, autumn and winter version of each regular, the same pasta with asparagus, then courgette, then squash, then kale, changes the diet without changing the routine.

                ## Milestones
                1. The household's ten most-cooked dinners listed.
                2. A seasonal vegetable swap written for each dish in each season.
                3. At least three of the swapped versions cooked and approved.
                4. The swap table kept beside the meal plan.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A swap table covers ten regular dinners across four seasons, with at least three versions cooked and approved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ten dinners your household cooks most often"
                - "Write a spring, summer, autumn and winter swap for each"
                - "Cook three swapped versions over the next fortnight"
                - "Keep the swap table next to the meal plan"
            - name: Deciding what to keep buying out of season
              description: |-
                ## Purpose
                Strict seasonal eating is a choice, not a rule, and most households keep a few out-of-season favourites such as tomatoes in winter or berries in early spring. Listing what you currently buy out of season and deciding item by item, keep, swap for frozen or tinned, or wait, makes the compromise deliberate.

                ## Milestones
                1. Out-of-season fresh items from a month of receipts listed.
                2. Each item marked keep, swap or wait.
                3. Substitutes chosen for each swap, such as tinned tomatoes in winter and frozen berries in spring.
                4. The decisions written beside the seasonal calendar.

                ## Notes
                Frozen peas, tinned tomatoes and frozen berries are picked and packed at their peak, and are often the better choice in the lean months.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every out-of-season item from a month of shopping has a recorded decision of keep, swap or wait."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check a month of receipts for out-of-season fresh produce"
                - "Mark each item keep, swap or wait"
                - "Choose a frozen or tinned substitute for each swap"
                - "Write the decisions beside the seasonal calendar"
            - name: Template dishes for the end of the box
              description: |-
                ## Purpose
                When the box leaves half a cabbage, two leeks and a bunch of chard, a recipe search rarely helps. A handful of template dishes, a frittata, a gratin, a savoury tart, a grain bowl and a stir-fry, will each take almost any vegetable and turn odds and ends into dinner.

                ## Milestones
                1. Five template dishes chosen that accept almost any vegetable.
                2. The core ratio or method for each written on one card.
                3. Each template cooked once with end-of-week produce.
                4. The cards kept where the box is unpacked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five template dish cards exist and each has been cooked at least once from end-of-week produce."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose five template dishes that take almost any vegetable"
                - "Write the core ratio for each, such as eggs to vegetables in a frittata"
                - "Cook one template dish from the end of this week's box"
                - "Keep the template cards where the box gets unpacked"
            - name: Planning for the hungry gap
              description: |-
                ## Purpose
                In temperate climates there is a lean stretch in late spring when the winter crops are finished and the new ones are not ready, and box schemes fill up with imports. Planning for those weeks with stored roots, frozen peas, early greens and pulses keeps seasonal cooking going without pretending the gap is not there.

                ## Milestones
                1. The leanest weeks for your region marked on the calendar.
                2. Early crops that do arrive, such as purple sprouting broccoli, spring greens and forced rhubarb, listed.
                3. Six hungry gap meals planned around those crops and pantry pulses.
                4. A note made of how your box scheme handles the gap.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six hungry gap meals are planned and the lean weeks are marked on the seasonal calendar."
                cadence: cyclic
              tasks:
                - "Ask your box scheme or market which weeks are leanest"
                - "List the early crops available during that gap"
                - "Plan six meals built on early greens, pulses and stored roots"
                - "Review the hungry gap meal plan before the lean weeks begin @recurring(yearly)"
            - name: A small shelf of seasonal cookbooks
              description: |-
                ## Purpose
                Two or three good cookbooks organised by month or by vegetable do more than endless recipe searches, because they are written by cooks who know what arrives together. Borrowing before buying gives you trusted ideas for every month without filling a shelf with books you never open.

                ## Milestones
                1. A shortlist of five seasonal or vegetable-led cookbooks.
                2. Two borrowed from the library and cooked from before buying.
                3. One or two books bought or kept.
                4. Favourite recipes marked and indexed in your recipe file.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two seasonal cookbooks have been cooked from, and a decision on which to buy or keep is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist five seasonal or vegetable-led cookbooks"
                - "Borrow two of them from the library"
                - "Cook three recipes from each borrowed book"
                - "Buy the one you reached for most"
            - name: Pick-your-own fruit day
              description: |-
                ## Purpose
                Picking strawberries, raspberries, apples or plums at a farm is the quickest way to learn what fully ripe fruit tastes like, and it is often cheaper per kilo than the shops. Planning the day around opening dates and a clear use for the haul avoids buckets of fruit softening on the counter.

                ## Milestones
                1. A pick-your-own farm and fruit chosen with opening dates confirmed.
                2. A plan made for eating or cooking the haul within three days.
                3. The day completed and the amount picked weighed.
                4. A date noted for next year's visit.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pick-your-own visit is completed, the haul is weighed and all of it is eaten or cooked within three days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a pick-your-own farm and the fruit open this month"
                - "Check opening times and whether you need to book ahead"
                - "Plan three dishes for the fruit before you go"
                - "Check next season's pick-your-own opening dates @recurring(yearly)"
            - name: Harvest supper from one market haul
              description: |-
                ## Purpose
                Cooking a whole dinner for friends from a single market trip is the best test of seasonal skill, because the menu has to follow the produce. Shopping first and writing the menu after makes a memorable evening and shows how far your cooking has come.

                ## Milestones
                1. A date set and guests invited.
                2. The market visited on the morning of the supper or the day before.
                3. A three-course menu written from what was bought.
                4. The supper served and the menu filed with a note on each dish.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A three-course supper cooked from one market haul is served and the menu is filed with notes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a date and invite four to six guests"
                - "Shop at the market without a fixed menu"
                - "Write a three-course menu from what you bought"
                - "File the menu with a note on each dish after the supper"
            - name: Visit to the farm that grows your food
              description: |-
                ## Purpose
                Seeing the fields behind the box or the market stall changes how you cook: you understand why the carrots are muddy, why the beans stop in September and why a wet spring means fewer strawberries. Many box schemes and community farms run open days, and one visit makes the whole system feel real.

                ## Milestones
                1. A visit arranged with your box scheme, a local farm or a community growing project.
                2. Questions prepared about varieties, seasons and growing methods.
                3. The visit completed with notes on what is planted for the coming months.
                4. One idea from the visit used in your cooking or buying.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A farm visit is completed and notes on what is growing for the coming months are recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your box scheme or market grower about open days"
                - "Book a place or agree a date to visit"
                - "Write five questions about varieties and growing seasons"
                - "Use one idea from the visit in your cooking or buying"
            - name: Food trip timed to a harvest
              description: |-
                ## Purpose
                Some seasons are worth travelling for: olive harvest and new oil, the grape harvest, truffle season, cherry blossom and bamboo shoots. A short trip timed to a harvest, with markets and producers booked, brings back flavours and techniques that change your cooking at home.

                ## Milestones
                1. A harvest season and region chosen with the likely weeks confirmed.
                2. Markets, producers or a cooking class booked for the trip.
                3. The trip taken and new ingredients and techniques noted.
                4. One dish from the trip cooked at home with local produce.

                ## Notes
                Start from the **Trip** template. Harvest dates move with the weather, so confirm with producers a few weeks before booking anything that cannot be changed.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A harvest trip is taken with at least one producer visit, and one dish from it is cooked at home."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Shortlist three harvests you would travel for"
                - "Confirm the harvest weeks with producers in the region"
                - "Book a market tour, producer visit or class for the trip"
                - "Cook one dish from the trip at home within a month of returning"
            - name: Seasonal cookery class or market tour
              description: |-
                ## Purpose
                Chefs and growers who cook with the seasons can teach in three hours what takes a year to work out alone. Booking a seasonal cookery class or a guided market tour with tastings gives you techniques, a few trusted recipes and the confidence to buy things you would have walked past.

                ## Milestones
                1. Two or three classes or tours compared on content, price and season.
                2. One booked for the season you find hardest to cook.
                3. The class attended and three techniques noted.
                4. Each technique practised at home within two weeks.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seasonal class or tour is attended and three techniques from it are practised at home within two weeks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search for seasonal cookery classes or guided market tours nearby"
                - "Pick one focused on the season you find hardest"
                - "Book a place and add it to your calendar"
                - "Practise three techniques from the class at home"
            - name: Neighbourhood produce swap
              description: |-
                ## Purpose
                Gardeners and allotment holders end every summer with too many courgettes, apples and beans, while their neighbours buy the same things wrapped in plastic. A produce swap on a street, at a community hall or through a local group moves the surplus to people who will cook it and connects you to growers nearby.

                ## Milestones
                1. A date, place and format agreed with two or three co-organisers.
                2. The swap advertised to neighbours and local growing groups.
                3. Simple rules set, such as bring what you grew and take what you will cook.
                4. The swap held and contacts kept for the next one.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A produce swap is held with at least ten households taking part, and contacts are kept for a repeat."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two neighbours or a local group to co-organise a produce swap"
                - "Agree a date, place and simple rules"
                - "Advertise the swap on local noticeboards and community groups"
                - "Collect contacts at the swap for next season"
            - name: Seasonal produce adventures with children
              description: |-
                ## Purpose
                Children who pick, choose and cook seasonal produce are far more likely to eat it: a strawberry picked warm, peas popped from the pod, a pumpkin carved and then roasted. A monthly activity tied to what is in season builds that familiarity without turning dinner into a battle.

                ## Milestones
                1. A list of twelve child-friendly seasonal activities, one per month.
                2. Each child given a job they can do safely, such as podding, washing or tearing leaves.
                3. One activity done each month.
                4. Each child's favourite seasonal foods noted for the meal plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A seasonal food activity is done with the children in at least ten months of the year, with their favourites noted."
                cadence: rolling
              tasks:
                - "List one seasonal food activity for each month of the year"
                - "Let each child choose one in-season item at the market"
                - "Give each child a safe kitchen job when cooking it"
                - "Do this month's seasonal food activity with the children @recurring(monthly:12)"
            - name: Seasonal cooking in a small rented kitchen
              description: |-
                ## Purpose
                One shelf in a shared fridge and two rings on the hob make a full veg box hard to store and cook. Choosing a smaller box or two small market buys a week, a few one-tray methods and storage that works in a cupboard keeps seasonal cooking possible without the space.

                ## Milestones
                1. Fridge and cupboard space available for produce counted.
                2. Buying sized to that space, such as the smallest box or two small market trips a week.
                3. Four one-tray or one-pan seasonal dinners learned.
                4. A cool spot found outside the fridge for keeping crops.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Produce buying is sized to the available storage and four one-tray seasonal dinners are in regular use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count the fridge shelf and cupboard space you can use for produce"
                - "Switch to the smallest box size or two small market buys a week"
                - "Learn four one-tray seasonal dinners"
                - "Find a cool spot outside the fridge for onions, potatoes and squash"
            - name: Cooking your own garden or allotment harvest
              description: |-
                ## Purpose
                Growers face the opposite problem to shoppers: nothing for weeks, then thirty courgettes and a row of lettuce bolting at once. Planning the cooking around the harvest, picking little and often, cooking at the first sign of a glut and sharing the rest, makes the effort of growing pay off at the table.

                ## Milestones
                1. Expected harvest weeks for each crop marked on the seasonal calendar.
                2. A glut plan written for the three crops that overproduce most.
                3. Picking done little and often during peak weeks.
                4. Surplus shared or swapped before it spoils.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A glut plan exists for three crops, and through one growing season no harvested crop is left to spoil."
                cadence: cyclic
              tasks:
                - "Mark expected harvest weeks for each crop on the calendar"
                - "Write a glut plan for your three most prolific crops"
                - "Walk the plot and note what will be ready in the next fortnight @recurring(monthly:6)"
                - "Arrange who receives surplus before the peak weeks"
            - name: Relearning the seasons after a move
              description: |-
                ## Purpose
                Moving to a new region, climate or hemisphere means the familiar calendar no longer applies: mangoes may be the summer fruit, asparagus may arrive in October and the markets keep different days. Treating the first year as a study of the local seasons avoids months of hunting for what you used to eat.

                ## Milestones
                1. The main markets found and a local seasonal chart in hand within the first month.
                2. Produce you have never cooked identified and one dish learned for each.
                3. The old seasonal calendar replaced with a local one.
                4. Local cooks or stallholders asked for their seasonal favourites.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A local seasonal calendar replaces the old one within three months of moving, and five new local ingredients have been cooked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the produce you will miss and look for its local equivalent"
                - "Visit the largest local market in your first month"
                - "Ask a stallholder what locals cook with this month's produce"
                - "Replace your old calendar with one for the new region"
            - name: Seasonal dinners on busy weeknights
              description: |-
                ## Purpose
                Full-time work and a commute can leave twenty-five minutes for dinner, which rules out slow braises and whole squash on a Tuesday. A set of fast seasonal methods, quick pan sauces, sheet-pan roasts and raw salads, plus a weekend hour of prep keeps the produce moving through the busiest weeks.

                ## Milestones
                1. Eight seasonal weeknight dinners that take under 30 minutes collected.
                2. A weekend prep hour that washes greens, roasts a tray and makes a dressing.
                3. Slow-cooking produce, such as squash and roots, saved for weekends.
                4. Seasonal weeknight dinners cooked at least three times a week for a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For a month, at least three weeknight dinners a week use seasonal produce and take under 30 minutes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect eight seasonal dinners that take under 30 minutes"
                - "Block a weekend hour for washing greens and roasting a tray"
                - "Move slow-cooking produce to weekend meals"
                - "Count how many seasonal weeknight dinners you cooked this month"
            - name: Safe foraging with an experienced guide
              description: |-
                ## Purpose
                Wild garlic, elderflower, blackberries, nettles and sloes extend the seasonal calendar, but some wild plants and many mushrooms have toxic lookalikes. Learning on a guided walk, picking only what you can identify with certainty and checking local rules on where picking is allowed keeps foraging safe and legal.

                ## Milestones
                1. A guided foraging walk booked with an experienced local forager.
                2. Five common, easily identified plants learned along with their lookalikes.
                3. Local rules on picking from public and private land checked.
                4. One foraged dish cooked from a confirmed identification.

                ## Notes
                Never eat a wild plant or mushroom identified only from an app or a photograph. If there is any doubt, leave it where it grows.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five wild plants can be identified with their lookalikes after a guided walk, and one foraged dish has been cooked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Book a guided foraging walk with an experienced local forager"
                - "Learn five easy plants and the lookalikes for each"
                - "Check the rules on picking in parks and on private land"
                - "Check the foraging calendar for the year's first wild plants @recurring(yearly)"
            - name: Five-course tasting menu from one week's market
              description: |-
                ## Purpose
                Experienced seasonal cooks can build a whole menu around a single moment in the year, with each course showing one ingredient at its peak. Planning a five-course tasting menu from one week's produce, balanced across raw, cooked, sweet and sharp, is a serious test of skill and a striking way to mark a season.

                ## Milestones
                1. A target week chosen when at least five ingredients peak together.
                2. A five-course menu drafted with each course led by one seasonal ingredient.
                3. Each course test-cooked once before the event.
                4. The menu served, with notes on what to change next time.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-course seasonal tasting menu is test-cooked and served, with notes recorded on each course."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a week when five favourite ingredients peak together"
                - "Draft five courses, each led by one ingredient"
                - "Test-cook each course once in the fortnight before"
                - "Serve the menu and write notes on each course"
            - name: Heritage variety tasting
              description: |-
                ## Purpose
                Supermarkets stock a handful of varieties chosen for shelf life, while growers and markets may offer dozens of apples, tomatoes, potatoes or squash with very different flavours and uses. Tasting varieties side by side teaches which to buy for eating raw, which for roasting and which for sauce.

                ## Milestones
                1. One crop chosen and at least five varieties sourced in the same week.
                2. A side-by-side tasting held with notes on flavour, texture and acidity.
                3. The best variety for each use noted, such as raw, roasting or sauce.
                4. Variety notes added to the seasonal calendar.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A side-by-side tasting of at least five varieties of one crop is recorded with the best variety for each use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a crop with many local varieties, such as apples or tomatoes"
                - "Buy at least five varieties in the same week"
                - "Taste them side by side and score flavour, texture and acidity"
                - "Write the best variety for each use beside the calendar"
            - name: Working share at a community farm
              description: |-
                ## Purpose
                Many community-supported farms offer a working share: a few hours in the fields each week or fortnight in return for produce. It is the most direct way to learn the seasons from the soil up, and a good fit for anyone who has outgrown buying and wants to understand how the food is grown.

                ## Milestones
                1. Community farms and working-share schemes nearby found and compared.
                2. Hours, commitment and produce share agreed with one farm.
                3. A full growing season of shifts completed.
                4. Notes kept on what was sown, harvested and cooked each month.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A full growing season of working-share shifts is completed, with monthly notes on crops grown and cooked."
                cadence: cyclic
              tasks:
                - "Search for community farms offering working shares nearby"
                - "Ask about hours, travel and the share you would receive"
                - "Agree a regular shift pattern for one growing season"
                - "Note what was sown and harvested after each shift"
            - name: Your own seasonal cookbook of the year
              description: |-
                ## Purpose
                After a full year of seasonal cooking the recipe file holds the household's real repertoire, tested and annotated. Turning it into a finished book, twelve chapters with the calendar, best dishes and growers' tips, makes something to cook from for decades and to give to family.

                ## Milestones
                1. Twelve monthly chapters with at least four tested recipes each.
                2. Each recipe edited for consistent measures and clear steps.
                3. The calendar, grower tips and variety notes added as reference pages.
                4. The book printed, bound or shared as a finished file.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A twelve-chapter seasonal cookbook with at least 48 tested recipes is printed or shared as a finished file."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Sort the recipe file into twelve monthly chapters"
                - "Ask the agent to standardise measures and steps in each recipe"
                - "Add the calendar and grower tips as reference pages"
                - "Print and bind a copy or share the finished file"
---

# Cooking With Seasonal Produce

This area is for anyone who wants their cooking to follow the calendar, buying from markets, farm shops and veg boxes and eating produce when it tastes best and costs least. It starts with the foundations (a local seasonal calendar, a map of sources, a box scheme decision, storage and a starter month), then the weekly and monthly routines, the cooking skills for each season's produce, decisions about where to buy and what to keep buying out of season, harvest events, variants for different households, and finally the specialist work of foraging, variety tastings and a cookbook of your own year.

What repeats is a weekly meal plan built from the box and the market, a delivery day check and a Saturday market run, a monthly ingredient focus, price log and grower conversation, a reset at each change of season and an annual review. The Purchase decision, Weekly meal plan, Metrics log, Reading queue and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
