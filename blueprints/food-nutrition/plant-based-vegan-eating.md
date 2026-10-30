---
id: food-nutrition.plant-based-vegan-eating
name: Plant-Based & Vegan Eating
description: "A plant-based diet that is balanced, not just meat-free: a B12 and nutrient plan agreed with professionals, a staged switch, pulse and tofu skills, weekly routines, and versions for children, pregnancy, training and later life."
category: personal
version: 1.0.0
tags: [food-nutrition, plant-based-vegan-eating, everyone, vegan, vegetarian, plant-protein, vitamin-b12]
author: Aurum Technology
starter_structure:
  templates:
    - weekly-meal-plan
    - habit-tracker
    - metrics-log
    - purchase-decision
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Plant-Based & Vegan Eating
          description: "Moving to a vegetarian or vegan diet with balanced protein, key nutrients and a repertoire of satisfying plant-based meals."
          projects:
            - name: Choosing your plant-based starting point
              description: |-
                ## Purpose
                Vegetarian, vegan, flexitarian and vegan at home are different commitments with different nutrient gaps, and people who never decide which one they mean tend to drift back within a month. Writing down the version you are aiming for, your reasons and what you will still eat for now gives every later choice in this area a fixed point. It also tells the people you cook for what to expect.

                ## Milestones
                1. A written choice of vegetarian, vegan or a named halfway stage, with a date to revisit it.
                2. Your two or three main reasons recorded in a sentence each.
                3. A short list of foods you are keeping for now and the foods you are dropping first.
                4. The choice shared with the people who cook or shop with you.

                ## Notes
                Reasons shape the rules. Health, animal welfare and climate lead to slightly different answers on honey, wine finings or a slice of a relative's birthday cake, so decide what yours cover before the first awkward moment.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note names your chosen diet, your reasons and the foods kept for now, and has been shared with your household."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one paragraph on why you want to eat more plants"
                - "Choose vegetarian, vegan or a named halfway stage to aim for"
                - "List the animal foods you will drop first and those you keep for now"
                - "Tell the people you share meals with what you have decided"
            - name: Two-week record of the animal foods you eat now
              description: |-
                ## Purpose
                Most people underestimate how often meat, dairy and eggs turn up in a day, from the milk in tea to the butter on toast and the cheese in a lunchtime sandwich. Fourteen days of honest notes show which meals will be easy to switch and which ones carry your protein, calcium and comfort, so the change starts where it is cheapest.

                ## Milestones
                1. Every meal and snack for fourteen days noted, with any meat, fish, dairy or egg marked.
                2. Meals sorted into already plant-based, easy to switch and hard to switch.
                3. The three meals you eat most often identified.
                4. A note of which animal foods currently supply most of your protein and calcium.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fourteen-day food record exists with every meal sorted into plant-based, easy to switch or hard to switch."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Start a food note on your phone and log today's meals"
                - "Mark every meal that contains meat, fish, dairy or eggs"
                - "Sort the fortnight's meals into plant-based, easy and hard to switch"
                - "Circle the three meals you eat most often"
            - name: Vitamin B12 source agreed with your pharmacist
              description: |-
                ## Purpose
                Vitamin B12 is the one nutrient a vegan diet cannot reliably get from unfortified plants, and a shortfall can take years to show while nerve damage builds quietly. Agreeing a reliable source, whether fortified foods, a supplement or both, with your doctor or pharmacist before you cut out animal foods closes the biggest gap on day one.

                ## Milestones
                1. Your doctor or pharmacist asked which B12 source suits you, given your age, medicines and health.
                2. A chosen source written down: product, form and how often, exactly as they advised.
                3. The fortified foods you already buy checked for B12 on the label.
                4. The agreed source in the house and started.

                ## Notes
                Seaweed, spirulina and unwashed vegetables are not reliable B12 sources. Take the amount your clinician or pharmacist recommends rather than a figure copied from a forum.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A B12 source agreed with a doctor or pharmacist is written in your supplement note and has been started."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your pharmacist which vitamin B12 source suits a vegan diet"
                - "Mention any medicines you take, since some affect B12 absorption"
                - "Check the labels of your plant milk and cereal for added B12"
                - "Write the agreed product and routine at the top of a supplement note"
            - name: Plant-based key nutrient checklist
              description: |-
                ## Purpose
                Beyond protein and B12, the nutrients that most often run short when animal foods leave the plate are iodine, calcium, iron, zinc, vitamin D, selenium and long-chain omega-3. A one-page checklist naming your main plant source for each, and the ones with no good source yet, turns vague worry into a short list of gaps to close.

                ## Milestones
                1. A one-page checklist with a row for each of the nine key nutrients.
                2. At least one food you actually eat named against each nutrient.
                3. Gaps with no regular source highlighted.
                4. The highlighted gaps taken to your doctor, pharmacist or a dietitian.

                ## Notes
                Build the checklist from a national health service or dietetic association page, not social media. Vitamin D in winter at higher latitudes is a question for everyone, not just vegans.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page checklist names a regular food source against each of nine nutrients, with any gaps highlighted and raised with a professional."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a dietetic association page on vegan nutrients and save it"
                - "Write the nine key nutrients down the side of one page"
                - "Name a food you eat each week beside each nutrient"
                - "Highlight the nutrients with no regular source yet"
                - "Reread the checklist and update your sources @recurring(yearly)"
            - name: Blood test baseline before cutting out animal foods
              description: |-
                ## Purpose
                Blood results taken before the change give you something to compare against in six or twelve months, instead of guessing whether tiredness is new. Asking your doctor which tests make sense for you, often B12, iron stores, vitamin D and a full blood count, means later results can be read against your own starting point.

                ## Milestones
                1. Your doctor asked whether a baseline blood test is sensible before you change your diet.
                2. The tests they agree to taken.
                3. Results and reference ranges saved in one folder.
                4. Any result outside range followed up before the change begins.

                ## Notes
                Some health services do not test healthy people routinely. If yours declines, record that and ask which symptoms should prompt a test later.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Baseline blood results, or a recorded decision by your doctor not to test, are saved in one folder before the switch begins."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment to ask about a pre-change blood test"
                - "Ask whether B12, iron, vitamin D and a blood count are worth checking"
                - "Save the results and their reference ranges in one folder"
                - "Ask what any out-of-range result means for your plan"
            - name: Plant-based pantry set-up
              description: |-
                ## Purpose
                Plant-based weeknights fall apart when there is nothing in the cupboard but pasta. Stocking the base layer, tinned and dried pulses, whole grains, nuts and seeds, tofu, a plant milk and the flavour builders such as miso, soy sauce and spices, means a filling meal is always fifteen minutes away rather than a trip to the shop.

                ## Milestones
                1. A written list of plant staples split into pulses, grains, nuts and seeds, proteins and flavour builders.
                2. At least three kinds of pulse, two whole grains and a tofu or tempeh in the house.
                3. One shelf or box kept for the staples so gaps are visible.
                4. A standing restock list saved where you write your shopping.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dedicated staples shelf holds at least three pulses, two whole grains and one plant protein, with a written restock list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Clear one cupboard shelf for plant staples"
                - "Write a staples list across pulses, grains, nuts and seeds, proteins and flavour"
                - "Buy three pulses, two whole grains and a block of tofu"
                - "Check the staples shelf and top up what is low @recurring(monthly:3)"
            - name: Ten plant-based dinners you already like
              description: |-
                ## Purpose
                The fastest route is not new food but familiar dishes that are already vegan or need one swap: chilli with beans, dal, a tofu stir-fry, pasta with lentil ragu. Ten tested dinners the household eats without complaint carry you through the first months, when cooking something unfamiliar every night is what sends people back.

                ## Milestones
                1. A long list of twenty candidate dishes, half of them meals you already cook.
                2. Each candidate cooked once and rated by the people eating it.
                3. Ten dinners kept and written up with ingredients and timings.
                4. At least three of the ten cookable in under thirty minutes.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of ten plant-based dinners, each cooked and rated at least three out of five by the household, with three under thirty minutes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List twenty dinners that are vegan already or need one swap"
                - "Cook two candidates this week and score them out of five"
                - "Write the ten winners on one page with ingredients"
                - "Mark which of the ten take under thirty minutes"
            - name: Twelve-week phased switch plan
              description: |-
                ## Purpose
                Going vegan overnight works for some people, but many find a staged switch sticks better: dinners first, then lunches, then breakfasts and snacks, with dairy and eggs going last. A twelve-week plan with a new stage every few weeks gives you time to find replacements you enjoy before each old habit goes.

                ## Milestones
                1. Four stages written out with a start week for each, from dinners through to snacks and treats.
                2. Dinners fully plant-based for four weeks in a row.
                3. Lunches and breakfasts switched, with replacements you look forward to.
                4. Dairy and eggs gone, or held at the level you chose at the start.
                5. A short note at week twelve on what was hard and what was easy.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All four stages of the written plan are completed by week twelve, with a short note recording what was hard and what was easy."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the four stages with a start week for each"
                - "Pick the replacement for your most common breakfast"
                - "Find a plant milk you like in tea or coffee before dairy goes"
                - "Write a week-twelve note on what was hard and what was easy"
            - name: Household agreement on who eats what
              description: |-
                ## Purpose
                Changing your own diet changes everyone's at shared meals, and unspoken assumptions cause the friction: whether the family meat goes in your pan, who buys the cheese, what happens at the in-laws. A short conversation and a written agreement on shared meals, separate items and shopping saves months of small arguments.

                ## Milestones
                1. A conversation held with everyone who shares your meals.
                2. Agreement written down on how many shared dinners each week will be plant-based.
                3. Rules settled for shared pans, boards and fridge space if anyone wants them.
                4. A friendly line agreed for meals at relatives' and friends' homes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A short written household agreement covers shared dinners per week, equipment and shopping, and everyone at the table has seen it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a calm time to talk about meals with your household"
                - "Agree how many shared dinners each week will be plant-based"
                - "Decide whether you want separate pans, boards or a fridge shelf"
                - "Draft a friendly line to use when relatives offer meat or cheese"
            - name: Spotting hidden animal ingredients on labels
              description: |-
                ## Purpose
                Plenty of foods that look plant-based are not: whey and casein in crisps and bread, gelatine in sweets and some yoghurts, carmine colouring, egg in fresh pasta, fish sauce in curry pastes and isinglass in some beer and wine. Learning the twenty or so names to watch for, and the vegan marks your shops use, stops the slow leak of accidental animal products.

                ## Milestones
                1. A list of hidden animal ingredient names kept on your phone.
                2. The vegan and vegetarian marks used in your local shops identified.
                3. Your twenty most-bought products checked and any surprises replaced.
                4. A note of the breads, stocks and sauces that pass.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your twenty most-bought products have been checked against a saved list of hidden animal ingredients, with any failures replaced."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save a list of hidden animal ingredient names to your phone"
                - "Check the labels of the twenty products you buy most often"
                - "Find vegan alternatives for any product that failed"
                - "Recheck your regular products for recipe changes @recurring(quarterly)"
            - name: Weekly plant-based meal plan with protein at every meal
              description: |-
                ## Purpose
                Meals built on vegetables and a carbohydrate alone leave people hungry by mid-afternoon and short on protein by the end of the week. Planning each week with a named protein anchor for every main meal, such as lentils, tofu, beans, tempeh, seitan or soya mince, keeps meals filling and makes the shopping list write itself.

                ## Milestones
                1. A weekly planning slot fixed in your calendar.
                2. Every dinner on the plan naming its protein anchor.
                3. Breakfasts and lunches with a protein listed for at least five days.
                4. The plan and shopping list written together every week for a month.

                ## Notes
                Start from the **Weekly meal plan** template. Add a column headed protein so a gap shows at a glance.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly plans exist in which every dinner names a protein source and a shopping list was written from each."
                cadence: rolling
              tasks:
                - "Set a weekly half hour in your calendar for meal planning"
                - "Add a protein column to your meal plan"
                - "Plan next week's meals with a protein for every main meal @recurring(weekly:thu)"
                - "Write the shopping list straight from the plan"
            - name: Daily B12 and supplement routine
              description: |-
                ## Purpose
                A supplement agreed with your pharmacist only works if it is actually taken, and the most common reason people run low is not diet but a bottle forgotten at the back of a cupboard. Tying it to something you already do every day, with a monthly stock check, makes it automatic.

                ## Milestones
                1. Your agreed supplements kept beside something you use every day.
                2. A habit tracker showing four weeks without a gap.
                3. A reorder point set so stock never runs out.
                4. The routine checked with your pharmacist whenever a medicine changes.

                ## Notes
                Start from the **Habit tracker** template. Supplements can interact with medicines, so mention them at every medication review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A habit tracker shows the agreed supplements taken on at least 26 of the last 28 days, with stock in hand for the next month."
                cadence: rolling
              tasks:
                - "Put your supplements next to the kettle or toothbrush"
                - "Take your agreed supplements @recurring(daily)"
                - "Count what is left and reorder before the last week @recurring(monthly:8)"
                - "Tell your pharmacist about your supplements at each medication review"
            - name: Weekend pulse and grain cook-up
              description: |-
                ## Purpose
                Dried beans and chickpeas cost a fraction of tinned and taste better, but nobody soaks beans on a Tuesday night. One soak on Saturday and a pot of pulses and a pot of grains on Sunday gives you the base for four or five weekday meals and noticeably cuts the cost of plant protein.

                ## Milestones
                1. A soaking bowl and a large lidded pot set aside for the job.
                2. One pulse and one grain cooked every weekend for a month.
                3. Cooked pulses portioned for the fridge and freezer with dates on.
                4. At least four weekday meals each week built on the cook-up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weekends in a row have produced a pot of pulses and a pot of grains, each used in at least four weekday meals."
                cadence: rolling
              tasks:
                - "Choose this week's pulse and grain from the staples shelf"
                - "Put dried pulses in to soak @recurring(weekly:sat)"
                - "Cook a pot of pulses and a pot of grains @recurring(weekly:sun)"
                - "Label cooked portions with the date before freezing"
            - name: Monthly three-day nutrient snapshot
              description: |-
                ## Purpose
                You do not need to track food forever, but checking three typical days a month shows whether protein, calcium, iron and iodine sources are really turning up as your diet settles. Logging them against your checklist catches a drift early, such as a fortified milk quietly swapped for an unfortified one.

                ## Milestones
                1. Three typical days logged each month, including one weekend day.
                2. Each day checked against your key nutrient checklist.
                3. Any nutrient missing on two of the three days noted with a fix.
                4. Six months of snapshots kept in one log.

                ## Notes
                Start from the **Metrics log** template. This is a pattern check, not calorie counting. If logging starts to make you anxious about food, stop and talk to your doctor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A log holds six monthly snapshots of three days each, with every repeated gap matched to a written food change."
                cadence: rolling
              tasks:
                - "Create a log with a row per day and a column per key nutrient"
                - "Log three typical days of food including a weekend day @recurring(monthly:12)"
                - "Mark any nutrient that was missing on two of the three days"
                - "Choose one food change to close the biggest gap"
            - name: Plant-based breakfast and lunch rotation
              description: |-
                ## Purpose
                Dinners get the attention, but breakfast and lunch are where cheese sandwiches and milky cereal hang on longest. A rotation of four breakfasts and five lunches, such as oats with soya milk and seeds, tofu scramble, hummus and falafel wraps or a bean salad jar, ends the daily decision.

                ## Milestones
                1. Four breakfasts and five lunches chosen and written on one card.
                2. Each option including a protein and, where possible, a calcium-rich or fortified food.
                3. The rotation followed for three weeks.
                4. The rotation's ingredients on the standing shopping list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written rotation of four breakfasts and five lunches, each with a named protein, has been followed for three consecutive weeks."
                cadence: rolling
              tasks:
                - "Write four plant-based breakfasts you would happily repeat"
                - "Write five lunches that travel well or suit working from home"
                - "Add the rotation ingredients to your standing shopping list"
                - "Swap out the least-liked breakfast and lunch @recurring(quarterly)"
            - name: Plant-based snack and away-from-home stash
              description: |-
                ## Purpose
                Long days out are where plans unravel: the station kiosk has crisps and a cheese sandwich, and hunger makes the choice. A small stash of roasted chickpeas, nuts, oatcakes, fruit and a shelf-stable plant milk in your bag, car or desk drawer keeps you fed until you reach a decent option.

                ## Milestones
                1. A list of six snacks that keep without a fridge and contain some protein.
                2. A stash in each place where you regularly get caught hungry.
                3. A note of where on your usual routes you can buy a vegan snack.
                4. Every stash restocked once a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Stashes of protein-containing plant snacks are kept in at least two places and have been restocked for three months running."
                cadence: rolling
              tasks:
                - "List six plant-based snacks that keep without a fridge"
                - "Pack a snack pouch for your bag and one for work or the car"
                - "Note shops on your usual routes that sell a vegan snack"
                - "Restock every snack stash @recurring(monthly:24)"
            - name: Annual plant-based blood test and nutrient review
              description: |-
                ## Purpose
                Nutrient shortfalls on a plant-based diet develop slowly, so a yearly check with your doctor, compared against your baseline, catches one before it causes symptoms. Pairing the blood test with a look at your checklist and supplements makes the appointment a proper review rather than a quick read of numbers.

                ## Milestones
                1. The blood tests your doctor recommends booked at about the same time each year.
                2. Results set beside your baseline and last year's figures.
                3. Your supplement routine and nutrient checklist reviewed in the same appointment.
                4. Any change your doctor suggests written down and started.
              priority: high
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each year's blood results sit beside the baseline in one folder, with the doctor's advice on supplements and diet written down."
                cadence: cyclic
              tasks:
                - "Book the annual blood test and review appointment @recurring(yearly)"
                - "Bring your baseline results and supplement list to the appointment"
                - "Put this year's results beside the baseline in your folder"
                - "Write down any change to supplements or diet your doctor suggests"
            - name: Monthly new plant-based recipe night
              description: |-
                ## Purpose
                Boredom is one of the most common reasons people give up plant-based eating within a year, and a small repertoire wears thin fast. One new recipe a month, often from a cuisine with a long vegetarian tradition such as Indian, Ethiopian, Lebanese or Korean temple cooking, adds twelve candidates a year and keeps dinner interesting.

                ## Milestones
                1. A shortlist of recipes to try kept in one place.
                2. One new plant-based recipe cooked each month.
                3. Each recipe rated, with a note of anything to change next time.
                4. Winners moved into your main repertoire.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six new plant-based recipes have been cooked and rated in six months, with at least two added to the regular repertoire."
                cadence: rolling
              tasks:
                - "Start a shortlist of plant-based recipes you want to try"
                - "Cook one new plant-based recipe @recurring(monthly:20)"
                - "Rate it out of five with the people who ate it"
                - "Move any recipe scoring four or more into your repertoire"
            - name: Thirty plants a week variety count
              description: |-
                ## Purpose
                Eating a wide range of plants, counting vegetables, fruit, pulses, whole grains, nuts, seeds, herbs and spices, is linked with a more varied gut microbiome, and a weekly count is a more encouraging target than a list of rules. Thirty different plants a week is a popular benchmark that a varied plant-based diet often reaches with a little attention.

                ## Milestones
                1. A simple tally sheet for the different plants eaten each week.
                2. A first week counted honestly to set your starting number.
                3. The weekly count rising through cheap additions such as mixed seeds and fresh herbs.
                4. Four weeks in a row at or near thirty.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly tallies show at least four consecutive weeks with twenty-five or more different plants eaten."
                cadence: rolling
              tasks:
                - "Make a tally sheet for the plants you eat this week"
                - "Buy a mixed seed bag and a tin of mixed beans for easy variety"
                - "Count this week's different plants and write the total @recurring(weekly:fri)"
                - "Add three plants you have not eaten this month to next week's plan"
            - name: Cooking tofu that people actually enjoy
              description: |-
                ## Purpose
                Tofu has a bad name because most people meet it soft, bland and wet. Learning the four basic treatments, pressing extra-firm tofu, marinating, crisping in a hot pan or oven, and blending silken tofu into sauces and desserts, turns it into the cheapest and most adaptable protein in the kitchen.

                ## Milestones
                1. Extra-firm, firm and silken tofu each bought and cooked at least once.
                2. A crisp pan-fried or baked tofu you would serve to guests.
                3. One marinade and one sauce you can make without a recipe.
                4. A silken tofu dish, sweet or savoury, made and rated.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three styles of tofu have been cooked, and a crisp tofu dish and a silken tofu dish have each been served and rated by others."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Buy a block of extra-firm and a block of silken tofu"
                - "Press and crisp extra-firm tofu in a hot pan with cornflour"
                - "Make a soy, garlic and maple marinade and note the timing"
                - "Blend silken tofu into a creamy pasta sauce"
            - name: Cooking pulses from dried
              description: |-
                ## Purpose
                Cooking beans, chickpeas and lentils from dried is the single biggest money saver in plant-based cooking and gives better texture than tins. Learning soaking, cooking times, when to salt, and how a pressure cooker or slow cooker changes the job lets you cook any pulse without checking a recipe.

                ## Milestones
                1. Lentils, chickpeas and one kind of bean each cooked from dried.
                2. A cooking time chart for the pulses you use, written from your own results.
                3. Cooked pulses frozen in portions and used from frozen.
                4. A pressure cooker or slow cooker batch compared with the hob for texture and time.

                ## Notes
                Dried red kidney beans must be soaked and then boiled hard for at least ten minutes to destroy a natural toxin. A slow cooker alone does not get hot enough, so boil them first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three different pulses have been cooked from dried and a personal cooking time chart for them is written down."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Cook a pan of red lentils from dried, no soaking needed"
                - "Soak and cook a batch of chickpeas and time how long they take"
                - "Write a time chart for each pulse you cook"
                - "Try one batch in a pressure cooker or slow cooker and compare the texture"
            - name: Building savoury depth without meat
              description: |-
                ## Purpose
                Meat and cheese bring savoury depth to a dish, and plant-based food tastes flat until you learn to replace it. Miso, soy sauce, tomato paste, dried mushrooms, nutritional yeast, seaweed, smoked paprika and properly browned onions all add umami, and knowing which to reach for fixes a dull stew in a minute.

                ## Milestones
                1. Six umami ingredients in the cupboard.
                2. A side-by-side taste test of one dish plain and with each addition.
                3. Three go-to fixes for a flat dish written on a card.
                4. A plant-based gravy or stock made without a cube.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six umami ingredients have been taste-tested in one dish and three written fixes for a flat dish are kept in the kitchen."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Buy miso, dried mushrooms and nutritional yeast"
                - "Taste one lentil stew plain, then with miso, then with soy"
                - "Write three fixes for a flat dish on a card inside a cupboard door"
                - "Make a mushroom and onion gravy from scratch"
            - name: Egg and dairy swaps for vegan baking
              description: |-
                ## Purpose
                Baking is where eggs and butter matter most, and straight swaps often fail: a flax egg binds but does not lift, and some soft plant spreads are too watery for pastry. Learning which replacement suits which job, aquafaba for whipping, flax or chia for binding, block plant butter for pastry, makes family favourites possible again.

                ## Milestones
                1. A swap chart showing which egg and dairy replacement suits binding, lifting, whipping and richness.
                2. A plant-based cake that rises and holds together.
                3. Aquafaba whipped into stiff peaks at least once.
                4. One family favourite bake adapted and approved by the usual eaters.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written swap chart exists and at least one adapted family bake has been approved by the people who usually eat it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a swap chart for binding, lifting, whipping and richness"
                - "Bake a simple vegan sponge with plant milk and vinegar"
                - "Whip aquafaba from a tin of chickpeas to stiff peaks"
                - "Adapt one family bake and ask the usual eaters to judge it"
            - name: Plant-based sauces, creams and dressings
              description: |-
                ## Purpose
                Cream, butter and cheese sauces do a lot of quiet work in everyday cooking, and the plant versions are easy once you know a handful of bases: soaked cashews, tahini, peanut, silken tofu, white beans and oat cream. Five sauces you can make from memory cover pasta, salads, grain bowls and curries.

                ## Milestones
                1. A cashew cream, a tahini dressing and a peanut sauce made from memory.
                2. A cheesy sauce made with nutritional yeast or white beans for pasta.
                3. Ratios for each sauce written on one page.
                4. At least one sauce in the fridge most weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five plant-based sauces can be made without a recipe, with their ratios written on a single page."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Soak cashews and blend them into a plain cream"
                - "Make a lemon and garlic tahini dressing and note the ratio"
                - "Make a nutritional yeast cheese sauce for pasta"
                - "Write the five sauce ratios on one page"
            - name: Understanding plant protein portions
              description: |-
                ## Purpose
                Plant foods hold protein in different amounts and mixes, and the old rule of combining proteins at every meal has given way to a simpler idea: eat a variety of protein foods across the day. Knowing roughly how much protein is in your usual portion of tofu, lentils, beans, soya milk and seitan lets you see at a glance whether a day added up.

                ## Milestones
                1. A table of your ten most-eaten protein foods with protein per usual portion.
                2. One typical day added up from the table.
                3. The idea of varied protein sources across a day understood and noted.
                4. Any personal protein target taken from a dietitian or doctor, not the internet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table lists protein per usual portion for your ten most-eaten protein foods and one typical day has been totalled from it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ten protein foods you eat most often"
                - "Look up protein per usual portion for each one"
                - "Add up one typical day from the table"
                - "Ask the agent to check your table against a national food composition database"
            - name: Home-made seitan from wheat gluten
              description: |-
                ## Purpose
                Seitan is the densest plant protein you can make at home, with a chewy, meaty texture that tofu cannot match. Learning the basic dough, steaming versus simmering, and seasoning it for kebabs, roasts and stir-fries gives you a cheap alternative to packaged meat substitutes.

                ## Milestones
                1. A first batch of seitan made from vital wheat gluten.
                2. Steamed and simmered batches compared for texture.
                3. One seasoned version good enough to repeat in a stir-fry or kebab.
                4. Portions frozen and used from frozen.

                ## Notes
                Seitan is almost pure wheat gluten, so it is not for anyone with coeliac disease or a wheat allergy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two batches of seitan have been made by different methods and one seasoned version has been served at least twice."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Buy a bag of vital wheat gluten and some chickpea flour"
                - "Make a first seitan dough with stock, soy and spices"
                - "Steam half the batch and simmer the other half"
                - "Freeze sliced portions and use one in a stir-fry"
            - name: Iron absorption on a plant-based diet
              description: |-
                ## Purpose
                Iron from plants is less easily absorbed than iron from meat, and tea or coffee drunk with meals reduces it further, which is part of why iron is worth watching. Knowing which plant foods are rich in iron and which habits help, such as a vitamin C food at the same meal, makes a difference without any tablet unless your doctor suggests one.

                ## Milestones
                1. A list of iron-rich plant foods you eat at least weekly.
                2. A vitamin C food paired with the main iron source at most dinners.
                3. Tea and coffee moved away from main meals, if that suits you.
                4. Iron results from your blood tests read alongside this list.

                ## Notes
                Do not take iron tablets unless your doctor recommends them. Too much iron is harmful, and tiredness has many causes worth checking.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of weekly iron-rich plant foods exists and most dinners for two weeks have paired one with a vitamin C food."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the iron-rich plant foods you already eat weekly"
                - "Add a vitamin C food such as peppers or citrus to dinners with lentils or beans"
                - "Try moving tea and coffee to between meals for a fortnight"
                - "Ask your doctor whether your iron results need any action"
            - name: Choosing a fortified plant milk and yoghurt
              description: |-
                ## Purpose
                Plant milks vary enormously: some are fortified with calcium, iodine, B12 and vitamin D while organic ones usually are not, and protein ranges from almost none in rice and almond drinks to a fair amount in soya and pea. Choosing one milk and one yoghurt from the label, not the advert, replaces most of what dairy supplied.

                ## Milestones
                1. Five plant milks compared on calcium, iodine, B12, vitamin D, protein and price.
                2. One everyday milk chosen that is fortified with calcium and iodine.
                3. A fortified plant yoghurt chosen the same way.
                4. The chosen products added to the standing shopping list.

                ## Notes
                Start from the **Purchase decision** template. Some health services advise against rice drinks as a main milk for young children, so check yours if children share the fridge.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of five plant milks is recorded and a calcium and iodine fortified milk and yoghurt are on the standing shopping list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the nutrition panels of five plant milks"
                - "Compare them on calcium, iodine, B12, vitamin D, protein and price"
                - "Pick an everyday milk and taste-test it in tea, coffee and cereal"
                - "Choose a fortified plant yoghurt using the same comparison"
            - name: Meat and cheese substitutes, keep, limit or drop
              description: |-
                ## Purpose
                Burgers, sausages, nuggets and vegan cheese from the plant-based aisle make the switch easier, but they vary widely in salt, saturated fat and protein, and many vegan cheeses contain almost no protein or calcium. Reviewing the ones you buy and deciding which are a useful bridge and which to replace with whole foods keeps the convenience without letting it take over.

                ## Milestones
                1. Every substitute product bought in the last month listed.
                2. Each one compared on protein, salt and saturated fat per portion.
                3. A keep, limit or drop decision written for each.
                4. Whole-food replacements chosen for the dropped items.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each substitute product bought in a month has a recorded keep, limit or drop decision, with a whole-food swap named for every drop."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every meat or cheese substitute bought in the last month"
                - "Compare protein, salt and saturated fat per portion from the labels"
                - "Mark each one keep, limit or drop"
                - "Find a whole-food swap for each dropped product"
            - name: Omega-3 source decision
              description: |-
                ## Purpose
                The long-chain omega-3 fats in oily fish are absent from plant foods, and the body converts only a little from the shorter form in flax, chia, hemp and walnuts. Whether an algae-based omega-3 supplement makes sense for you depends on your health and life stage, so it is a question to put to your doctor, pharmacist or a dietitian with the facts in hand.

                ## Milestones
                1. Plant sources of the shorter omega-3 fat in your weekly diet listed.
                2. A daily habit for one of them, such as ground flaxseed on breakfast.
                3. The algae supplement question asked of your doctor, pharmacist or dietitian.
                4. Their answer written in your supplement note.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A professional's answer on algae omega-3 is recorded in your supplement note and one plant omega-3 food is eaten daily."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the flax, chia, hemp and walnuts you eat in a normal week"
                - "Add ground flaxseed or chia to one daily breakfast"
                - "Ask your pharmacist whether an algae omega-3 supplement suits you"
                - "Record the answer in your supplement note"
            - name: Plant-based kitchen kit decision
              description: |-
                ## Purpose
                Three tools do most of the heavy lifting in a plant-based kitchen: a powerful blender for sauces and soups, a pressure cooker or multicooker for pulses, and a tofu press or two heavy boards. Deciding which of these your cooking justifies, and buying once, avoids a cupboard of gadgets used twice.

                ## Milestones
                1. A month of cooking reviewed for jobs that felt slow or messy.
                2. A buy, borrow or skip decision for a blender, a pressure cooker and a tofu press.
                3. Any item you buy compared across three options on price and warranty.
                4. Each new tool used at least four times in its first month.

                ## Notes
                A cheap pressure cooker used weekly beats an expensive blender used monthly. Buy for the job you do most.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written buy, borrow or skip decision exists for three tools and anything bought has been used four times within a month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note which cooking jobs felt slow or messy this month"
                - "Decide buy, borrow or skip for a blender, pressure cooker and tofu press"
                - "Compare three options for any item you decide to buy"
                - "Use each new tool four times in its first month"
            - name: Plant-based food cost comparison
              description: |-
                ## Purpose
                Switching to plant-based food can make the shop cheaper or dearer, depending on whether meals are built on pulses and oats or on branded substitutes. Comparing four weeks of receipts before and after the switch tells you which it is for you, and exactly where the money goes.

                ## Milestones
                1. Four weeks of food spending before the switch totalled from receipts or bank records.
                2. Four weeks after the switch totalled the same way.
                3. The five most expensive plant-based items identified.
                4. A cheaper swap chosen for at least three of them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Before and after four-week food spending totals are recorded, with cheaper swaps chosen for three of the five priciest items."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total four weeks of food spending from before the switch"
                - "Total four weeks after the switch the same way"
                - "Pick out the five most expensive plant-based items"
                - "Find a cheaper swap for at least three of them"
            - name: Easing into more fibre without the bloating
              description: |-
                ## Purpose
                A sudden jump in beans, lentils and whole grains is a common cause of wind and bloating in the first weeks, and some people give up believing plant food disagrees with them. Raising pulses gradually, rinsing tinned ones, cooking dried ones thoroughly and drinking enough water usually lets the gut adjust within a few weeks.

                ## Milestones
                1. Pulse portions started small and raised over three to four weeks.
                2. A simple note of any symptoms and the foods that came before them.
                3. Better-tolerated options found, such as split red lentils, tofu or well-rinsed tinned pulses.
                4. Persistent or severe symptoms taken to your doctor rather than put down to the diet.

                ## Notes
                Ongoing pain, weight loss, blood or a lasting change in bowel habit needs a doctor, whatever you are eating.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Pulses are eaten most days at a full portion after four weeks, or any persistent symptoms have been taken to a doctor."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Start with small portions of lentils or tofu rather than large bean meals"
                - "Rinse tinned pulses well before cooking with them"
                - "Keep a short note of symptoms and the meals before them"
                - "Book a doctor's appointment if symptoms persist beyond a month"
            - name: Iodine source choice
              description: |-
                ## Purpose
                Iodine is easy to overlook because most people get it from dairy and fish without knowing, and many plant milks are not fortified with it. Seaweed is unreliable because some kinds contain far too much, so the choice is usually between fortified foods, iodised salt where it is sold, and a supplement your doctor or pharmacist agrees.

                ## Milestones
                1. Your current iodine sources, if any, identified from labels.
                2. Fortified plant milk and iodised salt checked for availability where you shop.
                3. The supplement question asked of your doctor or pharmacist.
                4. A chosen source written in your supplement note.

                ## Notes
                Avoid kelp and brown seaweed supplements unless a clinician recommends them, as the iodine content varies widely. Anyone with a thyroid condition should take advice before changing iodine intake.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A reliable iodine source, agreed with a doctor or pharmacist where a supplement is involved, is written in your supplement note."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your plant milk and salt labels for iodine"
                - "Look for iodine-fortified plant milk where you shop"
                - "Ask your doctor or pharmacist about a reliable iodine source"
                - "Write your chosen iodine source in the supplement note"
            - name: Local list of places with real vegan mains
              description: |-
                ## Purpose
                Eating out is where new plant-based eaters feel most awkward, ordering chips and a side salad while everyone else has a proper meal. A short list of local places with real vegan mains, and the habit of checking menus before booking, means you can say yes to invitations and still eat well.

                ## Milestones
                1. Ten local cafes, restaurants and takeaways with a proper vegan main listed.
                2. The best dish at each noted after trying it.
                3. A short line ready for asking staff about hidden dairy, egg or fish sauce.
                4. One go-to suggestion ready for group bookings.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A list of ten local places with a vegan main exists, with a tried dish noted for at least five of them."
                cadence: rolling
              tasks:
                - "Search menus for ten local places with a vegan main course"
                - "Write a one-line question to ask staff about hidden dairy or egg"
                - "Note the best dish at each place you try"
                - "Try one new place or dish from the list @recurring(monthly:16)"
            - name: Thirty-day vegan trial month
              description: |-
                ## Purpose
                Thirty days fully vegan, in a January challenge or a month of your choosing, is a low-risk way to see how it fits your life before committing. Planning it in advance, with menus, a B12 source and someone to do it with, turns it into a fair test rather than a month of cheese cravings.

                ## Milestones
                1. A start date set and the first week of meals planned.
                2. A B12 source in place before day one.
                3. A friend or supportive online group signed up alongside you.
                4. Thirty days completed with a one-line daily note.
                5. A written decision on what you keep after the month.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Thirty consecutive vegan days are logged with daily notes, followed by a written decision on what continues."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a start date for your thirty-day vegan trial"
                - "Plan the first seven days of meals before you start"
                - "Ask a friend to join or sign up to a supportive online group"
                - "Write a decision at day thirty on what you will keep"
            - name: Plant-based centrepiece for a holiday feast
              description: |-
                ## Purpose
                The big seasonal meals, Christmas, Thanksgiving, Eid, Diwali or a milestone birthday, are where traditions and diets collide. Planning a plant-based centrepiece and sides well ahead, and test-cooking them once, means you bring something everyone wants to eat rather than a sad plate of vegetables.

                ## Milestones
                1. The occasion, the host and what you are bringing agreed.
                2. A centrepiece chosen, such as a nut roast, mushroom wellington or stuffed squash.
                3. A test cook done at least two weeks before.
                4. Shared sides and gravy checked for butter, meat stock and lard.
                5. The dish served on the day, with the recipe ready for anyone who asks.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A test-cooked plant-based centrepiece is served at the feast and the sides you eat have been checked for animal ingredients."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree with the host what plant-based dish you will bring"
                - "Choose a centrepiece and two sides that suit the occasion"
                - "Test-cook the centrepiece at least two weeks before"
                - "Check the shared sides and gravy for butter and meat stock"
            - name: Hosting a plant-based dinner for meat-eaters
              description: |-
                ## Purpose
                Cooking for friends who eat meat is a chance to show plant-based food at its best, and a nervous host serving an apology on a plate does the opposite. A tested three-course menu built on generous flavours, with nothing presented as a substitute, wins over most guests.

                ## Milestones
                1. A date set and guests asked about allergies.
                2. A three-course menu chosen, with each unfamiliar dish cooked once before.
                3. A prep timeline written so most work is done before guests arrive.
                4. The dinner held and the dishes guests asked about noted.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A three-course plant-based dinner has been served to at least two meat-eating guests, with a written prep timeline used on the day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set a date and ask guests about allergies"
                - "Choose a starter, main and dessert that need no apology"
                - "Practise any dish you have not cooked before"
                - "Note which dishes guests asked for the recipe"
            - name: Travelling abroad as a vegan
              description: |-
                ## Purpose
                Finding vegan food abroad ranges from easy in much of India or Israel to hard in rural areas where meat stock goes into everything. Researching the destination's naturally vegan dishes, saving a translated card that explains what you do not eat and packing emergency food makes a trip enjoyable rather than hungry.

                ## Milestones
                1. Three naturally vegan local dishes found for the destination.
                2. A card in the local language explaining that you eat no meat, fish, dairy or eggs.
                3. Plant-friendly restaurants or markets near your stay saved on a map.
                4. Emergency snacks and enough supplements packed for the trip.

                ## Notes
                Start from the **Trip** template.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before departure, a translated diet card, three local vegan dishes and a map of nearby options are saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up three naturally vegan dishes from your destination"
                - "Save a translated card explaining what you do not eat"
                - "Pin plant-friendly places near where you are staying"
                - "Pack snacks and enough supplements for the whole trip"
            - name: Six-month plant-based check-in
              description: |-
                ## Purpose
                Six months is long enough for energy, digestion, weight and blood results to show where a new diet is working and where it is not. A dated review against your starting notes and baseline turns impressions into a clear list of what to keep, what to fix and what to ask about.

                ## Milestones
                1. Your starting notes, baseline results and early meal plans gathered.
                2. Energy, digestion, weight and enjoyment rated against month one.
                3. Any follow-up blood test your doctor advised done.
                4. Three things to keep and three to change written down.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written six-month review compares how you are now with month one and lists three things to keep and three to change."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather your starting notes, baseline results and early meal plans"
                - "Rate energy, digestion and enjoyment now against month one"
                - "Ask your doctor whether a follow-up blood test is due"
                - "Write three things to keep and three to change"
            - name: Raising vegetarian or vegan children
              description: |-
                ## Purpose
                Children can thrive on well-planned vegetarian and vegan diets, but for their size they need more energy, protein, calcium, iodine, B12, iron and vitamin D, and they have small stomachs. Planning their meals with your health visitor, paediatrician or a paediatric dietitian, and keeping growth checks up to date, gives you evidence to answer the doubters.

                ## Milestones
                1. Your child's health professional told about the diet and asked for guidance.
                2. Energy-dense plant foods, such as nut butters, hummus and fortified soya milk, in regular use.
                3. Supplements for your child agreed with their health professional.
                4. Growth checks kept up to date and recorded.
                5. Nursery or school given a clear note of what your child eats.

                ## Notes
                Agree any supplement for a child with their own health professional rather than giving an adult product. Some health services advise against rice drinks as a main milk for young children.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your child's health professional has reviewed the diet, agreed any supplements, and growth checks are recorded and up to date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a chat with your child's health visitor or doctor about the diet"
                - "Write a list of energy-dense plant foods your child will eat"
                - "Agree any supplements with your child's health professional"
                - "Give nursery or school a written note of what your child eats"
                - "Review the children's week of meals for protein and calcium @recurring(monthly:14)"
            - name: Plant-based pregnancy plan with your midwife
              description: |-
                ## Purpose
                Pregnancy raises the stakes on nutrients a plant-based diet already needs to watch, particularly iodine, B12, iron, vitamin D and omega-3, alongside the usual pregnancy supplements. Raising your diet at the first midwife or doctor appointment means supplements and blood tests are planned around it rather than discovered late.

                ## Milestones
                1. Your midwife or doctor told at booking that you eat plant-based.
                2. A supplement plan agreed with them that covers both your diet and the pregnancy.
                3. Any extra blood tests they suggest booked.
                4. A referral to a dietitian asked about, if you want one.

                ## Notes
                Pregnancy needs are specific, so do not change supplements on general advice. The Pregnancy and Breastfeeding Nutrition area covers the wider picture of eating while pregnant.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A supplement plan covering a plant-based pregnancy has been agreed with your midwife or doctor and written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note your plant-based diet to raise at the booking appointment"
                - "Ask your midwife or doctor which supplements cover your diet"
                - "Book any extra blood tests they recommend"
                - "Ask whether a dietitian referral is available"
            - name: Plant-based fuelling for regular training
              description: |-
                ## Purpose
                People who train hard on plant food often under-eat without noticing, because fibre-rich meals fill you up before energy and protein needs are met. Planning training-day meals and snacks around dense protein sources such as tofu, tempeh, seitan, soya milk and pea protein keeps recovery on track.

                ## Milestones
                1. Your training days and their intensity written down.
                2. An energy and protein target agreed with a sports dietitian or coach, if you want one.
                3. A plant-protein recovery snack planned for after each session.
                4. Two weeks of training-day eating compared against the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two weeks of training days show a planned plant-protein recovery snack after every session."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down your training days and how hard each one is"
                - "Plan a plant-protein snack for after each session"
                - "Ask a sports dietitian or coach about your energy and protein needs"
                - "Check training-day meals against the plan @recurring(weekly:mon)"
            - name: Going plant-based in later life
              description: |-
                ## Purpose
                Older adults need to protect muscle and bone and absorb B12 less well with age, so a plant-based switch after sixty needs a little more planning than one at twenty-five. Protein at every meal, a calcium-fortified food every day and a B12 plan agreed with your doctor let you change your diet without losing strength.

                ## Milestones
                1. Your doctor told about the change, with any medicines that affect nutrients checked.
                2. Protein at each of three meals a day, from soft foods if chewing is hard.
                3. A calcium-fortified food or calcium-set tofu in daily use.
                4. A B12 plan agreed with your doctor or pharmacist.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A B12 plan is agreed with your doctor and a week of meals shows protein at all three meals and a calcium source every day."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tell your doctor you are moving to a plant-based diet"
                - "Plan a soft protein breakfast, such as tofu scramble or soya yoghurt"
                - "Choose a calcium-fortified food to have every day"
                - "Ask your pharmacist whether your medicines affect B12 or other nutrients"
            - name: Cooking for a mixed vegan and omnivore household
              description: |-
                ## Purpose
                When one person eats plant-based and others do not, the cook can end up making two dinners every night. Building meals on a shared plant base, a curry, tacos, a pasta sauce or a grain bowl, with meat or cheese added separately at the end, keeps one pan on the hob and everyone fed.

                ## Milestones
                1. Six shared-base meals written up with the optional add-on for each.
                2. A rule settled for which pans and utensils stay meat-free.
                3. Plant-based dinners for the whole household on at least three nights a week.
                4. A monthly check on whether the arrangement still works for everyone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four weeks running, at least three dinners a week have been cooked once from a shared plant base for the whole household."
                cadence: rolling
              tasks:
                - "List six meals that work with a plant base and an optional add-on"
                - "Agree which pans and utensils are kept meat-free"
                - "Cook a shared-base dinner three nights this week"
                - "Ask the household what is and is not working @recurring(monthly:5)"
            - name: Plant-based eating on a student budget
              description: |-
                ## Purpose
                Students and renters in shared kitchens have little money, small cupboards and housemates' food in every space. A tight plan built on oats, lentils, tinned beans, frozen vegetables, own-brand tofu and a big pot of something on Sunday keeps you fed, often for less than a meat diet, from a single shelf.

                ## Milestones
                1. A weekly food budget and the shelf and freezer space you have written down.
                2. A list of ten cheap plant staples priced at your nearest supermarket.
                3. Three one-pot meals you can cook in a shared kitchen in under forty minutes.
                4. A month of food spending kept within the weekly budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A month of food spending has stayed within your written weekly budget while cooking at least three plant-based one-pot meals a week."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down your weekly food budget and the space you have"
                - "Price ten cheap plant staples at your nearest supermarket"
                - "Learn three one-pot meals you can cook in a shared kitchen"
                - "Compare a month of spending against the budget"
            - name: Plant-based review with a registered dietitian
              description: |-
                ## Purpose
                Experienced plant-based eaters with a health condition, a sport, a pregnancy plan or a history of disordered eating benefit most from a session with a registered dietitian who knows vegan diets. Bringing three days of food records, your blood results and a list of questions makes one appointment worth several.

                ## Milestones
                1. A registered dietitian with plant-based experience found and booked.
                2. Three days of food records, recent blood results and a supplement list brought to the session.
                3. A written plan from the session, with any targets they set.
                4. A follow-up booked or a date set to review progress yourself.

                ## Notes
                Check the title. Dietitian is a protected title in many countries, while nutritionist often is not.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A session with a registered dietitian has taken place and their written plan is saved alongside your food records and results."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your dietetic association register for plant-based experience"
                - "Book a first appointment with the dietitian you choose"
                - "Gather three days of food records, blood results and your supplement list"
                - "Ask the agent to summarise your records into one page for the dietitian"
            - name: Full nutrient analysis of a typical plant-based week
              description: |-
                ## Purpose
                Once the diet has settled, a full week weighed and logged in a detailed nutrition app shows the whole picture: fibre, calcium, iodine, zinc, selenium and the micronutrients the monthly snapshot skips. Done once a year it works as a thorough audit, and it gives a dietitian or doctor hard figures rather than estimates.

                ## Milestones
                1. Seven days of food weighed and logged in an app with a detailed micronutrient database.
                2. A report showing each nutrient against the app's reference values.
                3. Nutrients that stayed low all week marked for discussion with a professional.
                4. One change made and checked in the following month's snapshot.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A seven-day nutrient report is saved, with persistently low nutrients listed and one resulting change checked a month later."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a nutrition app with a detailed micronutrient database"
                - "Weigh and log seven typical days of food"
                - "Export the report of each nutrient against reference values"
                - "Mark any nutrient that stayed low all week to raise with a professional"
            - name: Personal plant-based recipe book
              description: |-
                ## Purpose
                After a year or two of cooking plant-based you will have adapted dozens of recipes, and most of the changes live only in your head. Writing your best thirty into a recipe book, with your own ratios, timings and protein for each, makes them easy to cook again, share with friends or hand to a new vegan in the family.

                ## Milestones
                1. A format chosen, digital or printed, with a set layout for each recipe.
                2. Thirty recipes written up with ingredients, method and protein per portion.
                3. Each of the first ten cooked from the written version by someone else at least once.
                4. The book shared with at least two people.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recipe book of thirty tested plant-based recipes, each with protein per portion, exists and has been shared with two people."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a format and layout for your recipe book"
                - "List the thirty recipes you cook most and have adapted best"
                - "Write up one recipe with ratios and protein per portion @recurring(monthly:28)"
                - "Ask a friend to cook one recipe from your written version"
            - name: Teaching a plant-based cookery session for friends
              description: |-
                ## Purpose
                Showing friends or family how you cook is the best test of what you know, and many curious people would try plant-based meals if someone showed them three easy ones. Running a two-hour session in your kitchen or a community space, with a handout, spreads what you have learned and sharpens your own technique.

                ## Milestones
                1. A date, a place and up to six people confirmed.
                2. Three dishes chosen and timed to fit a two-hour session.
                3. A one-page handout with the recipes, key nutrients and where to buy staples.
                4. The session held and feedback collected.

                ## Notes
                Ask guests about allergies beforehand, especially nuts, soya, sesame and gluten, which are common in plant-based cooking.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A plant-based cookery session for at least three people has been held, with a handout given out and written feedback collected."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask three to six friends whether they want a cooking session"
                - "Choose three dishes that fit in two hours"
                - "Write a one-page handout with recipes and key nutrients"
                - "Collect feedback at the end of the session"
---

# Plant-Based & Vegan Eating

This area is for anyone eating less meat or going fully vegetarian or vegan, whether for health, animals, the climate or the food bill, and for the people they cook with. It starts with the foundations (your starting point, a B12 source, a nutrient checklist, baseline bloods, a stocked pantry and ten dinners you already like), then the weekly planning, pulse cooking and supplement routines that keep the diet balanced, the cooking skills that make tofu, pulses, sauces and vegan baking good, the decisions about fortified milks, substitutes, omega-3 and iodine, dated events from a thirty-day trial to a feast centrepiece, versions for children, pregnancy, training, later life, mixed households and students, and finally the dietitian reviews, full nutrient audits and recipe books of an experienced plant-based cook.

What repeats is a Thursday meal plan with a protein at every meal, a daily supplement, a weekend soak and cook of pulses and grains, a Friday count of the plants you ate, a monthly nutrient snapshot, new recipe and snack restock, a quarterly label recheck and rotation refresh, and an annual blood test review. The Weekly meal plan, Habit tracker, Metrics log, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
