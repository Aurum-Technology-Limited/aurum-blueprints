---
id: food-nutrition.low-salt-heart-healthy-cooking
name: Low-Salt Heart-Healthy Cooking
description: "Home cooking with far less salt and saturated fat that still tastes of something: a salt baseline, a flavour shelf, a gradual step-down, weekly routines, and the skills and swaps behind blood pressure and cholesterol goals."
category: personal
version: 1.0.0
tags: [food-nutrition, low-salt-heart-healthy-cooking, everyone, retiree, salt-reduction, saturated-fat, heart-health, flavour]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - weekly-meal-plan
    - habit-tracker
    - metrics-log
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Low-Salt Heart-Healthy Cooking
          description: "Cooking flavourful meals with less salt and saturated fat to support blood pressure and cholesterol goals for the whole household."
          projects:
            - name: Seven-day salt source diary
              description: |-
                ## Purpose
                Most of the salt people eat arrives already inside bread, cheese, cured meat, sauces and ready meals, not from the spoon at the stove. A week of writing down everything the household eats, with a rough salt figure from the label or a nutrition app, shows which five foods to change first instead of guessing.

                ## Milestones
                1. Seven days of meals, snacks and drinks written down for the main cook and anyone else willing.
                2. A salt figure or a high, medium or low rating beside each item, taken from labels or a nutrition database.
                3. The five foods supplying the most salt across the week ranked in order.
                4. One change chosen for each of the top three sources.

                ## Notes
                Weigh nothing and change nothing during the diary week. The point is an honest picture of normal eating, not a good week.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A completed seven-day diary with salt ratings, a ranked list of the top five salt sources and a change written against the top three."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a simple diary page with columns for day, food, amount and salt"
                - "Record every meal and snack for seven ordinary days"
                - "Ask the agent to rank the diary items by likely salt content"
                - "Pick one change for each of the three biggest salt sources"
            - name: Salt and saturated fat goals from your clinician
              description: |-
                ## Purpose
                Advice on salt, fat, alcohol and fluids differs a great deal between someone with borderline cholesterol, someone on several heart medicines and someone with kidney or heart failure. Asking your clinician or a dietitian for the goals that apply to you, in writing, means the cooking changes in this area are aimed at the right target from the start.

                ## Milestones
                1. Your clinician or dietitian asked which salt and saturated fat goals apply to you.
                2. Any limits on fluids, potassium or particular foods noted, with the reason.
                3. The goals written on one page and kept with your recipes.
                4. A date fixed for checking the goals again.

                ## Notes
                Bring a list of your current medicines to the conversation. Some foods and salt substitutes interact with heart and kidney medicines, and only someone who knows your history can say which.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page note of salt, saturated fat and any other dietary limits agreed with your clinician or dietitian, with a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three questions about salt and fat to ask at your next appointment"
                - "Ask whether any fluid, potassium or food limits apply to you"
                - "Write the agreed goals on a single page kept with your recipes"
                - "Confirm the goals still apply at your yearly check-up @recurring(yearly)"
            - name: Cupboard and fridge salt sweep
              description: |-
                ## Purpose
                Stock cubes, gravy granules, soy sauce, jarred pesto, smoked ham and hard cheese sit in most kitchens and quietly decide how salty dinner will be. Going through every shelf once, sorting items into keep, use up and replace, clears the way for the flavour shelf and stops old habits being restocked by default.

                ## Milestones
                1. Every cupboard, fridge and freezer item checked for salt and saturated fat on the label.
                2. Items sorted into keep, use up slowly and replace with a lower-salt version.
                3. A replacement list written for the next shop.
                4. The highest-salt items moved out of easy reach.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every shelf has been checked and a written list exists of items to replace, each with its lower-salt alternative named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Empty the condiment shelf and read the salt figure on every jar"
                - "Sort fridge and cupboard items into keep, use up and replace"
                - "Write a replacement list for the next shop"
                - "Repeat the sweep once a year to catch items that crept back @recurring(yearly)"
            - name: Measuring the salt that goes into the pot
              description: |-
                ## Purpose
                Cooks who salt by eye are often adding two or three times what they think, especially into pasta water, rice and soups. Using a measuring spoon for two weeks and writing down the amount per dish turns a habit into a number you can halve deliberately.

                ## Milestones
                1. A set of measuring spoons kept beside the stove.
                2. Salt measured and noted for every home-cooked dish for two weeks.
                3. The dishes using the most salt per portion identified.
                4. A lower measured amount written into each of those recipes.

                ## Notes
                Count salt added to cooking water too. Pasta and potato water is one of the most overlooked sources at home.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two weeks of measured salt amounts recorded per dish, with a reduced amount written into the three saltiest recipes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put a set of measuring spoons in a pot beside the hob"
                - "Note the salt added to every dish and its cooking water for two weeks"
                - "Divide each amount by the number of portions served"
                - "Write a smaller measured amount into the three saltiest recipes"
            - name: Ten household favourites ranked for salt and fat
              description: |-
                ## Purpose
                Households rotate a small set of meals, and changing those ten matters more than any new recipe. Listing them and scoring each for where its salt and saturated fat come from gives a reworking order that starts with the dishes eaten most often.

                ## Milestones
                1. The ten meals cooked most often in the last two months listed.
                2. Each meal annotated with its main salt sources and main saturated fat sources.
                3. Meals ranked by how often they are eaten and how much there is to change.
                4. The first three meals to rework chosen.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked list of ten household meals, each with its salt and fat sources noted and the first three to rework marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ten dinners cooked most often over the last two months"
                - "Mark the main salt and saturated fat ingredient in each"
                - "Rank the list by frequency and size of the possible change"
                - "Choose the first three meals to rework"
            - name: Lower-salt flavour shelf in the cupboard
              description: |-
                ## Purpose
                Taking salt out without putting something back is why most attempts end with bland food and a quiet return to the old ways. A dedicated shelf of lemons, vinegars, garlic, ginger, chilli, dried mushrooms, tomato purée, smoked paprika and herbs means there is always a salt-free answer to a dish that tastes flat.

                ## Milestones
                1. One shelf or basket cleared and labelled for salt-free flavour.
                2. At least four acids, four aromatics and four dried herbs or spices stocked.
                3. Two umami sources without added salt on the shelf.
                4. A note on the shelf of which item to reach for when a dish tastes flat.

                ## Notes
                Check the labels on spice mixes, curry pastes and seasoning blends. Many list salt as the first ingredient.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A labelled shelf holds at least twelve salt-free flavourings across acids, aromatics, herbs, spices and umami, with none listing salt as an ingredient."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Clear one shelf or basket and label it for salt-free flavour"
                - "Buy two vinegars, lemons, garlic, ginger and fresh chilli"
                - "Add dried mushrooms and tomato purée as salt-free umami"
                - "Restock whatever on the flavour shelf is running low @recurring(monthly:3)"
            - name: Taste-first rule for the salt cellar
              description: |-
                ## Purpose
                Plenty of people salt their plate before the first mouthful out of pure habit, adding salt to food that was already seasoned. Agreeing as a household to taste first, and moving the salt cellar off the table into a cupboard, removes that reflex without banning anything.

                ## Milestones
                1. The household told about the taste-first rule and why it matters.
                2. The salt cellar moved off the table to a cupboard.
                3. Pepper, lemon wedges or a salt-free blend put on the table instead.
                4. A month passed with the cellar fetched only when someone genuinely wants it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The salt cellar has lived in a cupboard rather than on the table for a full month, with a salt-free alternative on the table at meals."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Explain the taste-first rule to everyone at the next shared meal"
                - "Move the salt cellar from the table to a cupboard"
                - "Put a pepper mill and lemon wedges on the table instead"
                - "Check after a month how often anyone fetched the salt"
            - name: Six-week salt step-down for the palate
              description: |-
                ## Purpose
                Taste buds adjust to less salt over a few weeks, but only if the change is gradual enough that nobody notices it happening. Cutting the salt in everyday cooking by about a quarter every fortnight for six weeks brings it down by roughly half while the food keeps tasting normal to the people eating it.

                ## Milestones
                1. A starting amount recorded for the household's regular dishes.
                2. Salt cut by a quarter in weeks one and two.
                3. Salt cut to half the starting amount by week four.
                4. A tasting at week six of an old-style and new-style version of the same dish, with the verdict written down.

                ## Notes
                Do not announce each step. People who know the salt has been cut tend to taste it as flat even when they would not have noticed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Salt in the household's regular cooking is at half its starting measured amount at week six, and a side-by-side tasting has been recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the current measured salt for five regular dishes as the starting point"
                - "Reduce each amount by a quarter for the first fortnight"
                - "Reduce to half the starting amount from week four"
                - "Cook the old and new versions of one dish side by side in week six"
            - name: Everyday cooking oil and spread decision
              description: |-
                ## Purpose
                Butter, lard, ghee, coconut oil and some spreads are high in saturated fat, while olive, rapeseed and sunflower oils are mostly unsaturated, and the everyday choice decides more than any single recipe. Comparing three or four options on fat profile, smoke point, taste and price ends with one oil for cooking, one for dressings and one spread the household will actually use.

                ## Milestones
                1. The fats currently used for frying, roasting, baking and spreading listed.
                2. Three or four alternatives compared on saturated fat per 100 grams, heat use, taste and price.
                3. One cooking oil, one dressing oil and one spread chosen.
                4. The old fats used up or kept only for named occasional dishes.

                ## Notes
                Start from the **Purchase decision** template. Ask your clinician or dietitian if they have a view on spreads with added plant sterols before buying them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of one everyday cooking oil, one dressing oil and one spread, each compared on saturated fat, heat use and price."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every fat currently used for frying, roasting, baking and spreading"
                - "Compare saturated fat per 100 grams on four alternatives"
                - "Choose one cooking oil, one dressing oil and one spread"
                - "Decide which dishes still earn a little butter"
            - name: Salt substitute check with your pharmacist
              description: |-
                ## Purpose
                Potassium-based salt substitutes look like an easy answer, but they can be unsafe for people with kidney problems or who take certain heart and blood pressure medicines. A short conversation with your pharmacist before buying one settles whether it is suitable for you or whether herbs, acid and spice should do the job instead.

                ## Milestones
                1. Your current medicines listed with doses as written on the packets.
                2. Your pharmacist or clinician asked whether a potassium salt substitute is safe for you.
                3. The answer and the reason written on your goals page.
                4. A substitute bought only if it was cleared, or the idea dropped.

                ## Notes
                This applies to everyone in the house who might share the substitute, not only the person with the heart condition.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pharmacist or clinician's answer on potassium salt substitutes is recorded for each adult who eats the household's food."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy the name of every medicine you take from the packets"
                - "Ask your pharmacist whether a potassium salt substitute is safe for you"
                - "Write the answer and the reason on your goals page"
                - "Ask again at your yearly medicines review in case anything changed @recurring(yearly)"
            - name: Sunday heart-healthy dinner plan
              description: |-
                ## Purpose
                Salty food wins on the nights nobody decided what to cook. Twenty minutes on Sunday choosing the week's dinners, with at least five built around vegetables, pulses, fish or lean meat and none relying on a jar or packet sauce, makes the lower-salt meal the easy default on a tired Wednesday.

                ## Milestones
                1. A weekly dinner plan with at least five home-cooked dinners.
                2. No more than one dinner a week built on a ready meal, packet or jar sauce.
                3. The shopping list written from the plan in the same sitting.
                4. Eight consecutive weeks planned.

                ## Notes
                Start from the **Weekly meal plan** template. Plan a cook-once night that leaves a lower-salt lunch for the next day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly plans exist, each with at least five home-cooked dinners and no more than one built on a packet or jar sauce."
                cadence: rolling
              tasks:
                - "Create a weekly dinner plan from the template"
                - "Plan the week's dinners and write the shopping list from them @recurring(weekly:sun)"
                - "Mark one night as a cook-once meal that covers tomorrow's lunch"
            - name: Monthly unsalted stock day
              description: |-
                ## Purpose
                Stock cubes and many ready-made stocks are among the saltiest things in a kitchen, yet they are the base of soups, risottos, stews and gravy. Making a big pot of unsalted stock from bones or vegetable trimmings once a month and freezing it in measured portions takes the salt out of dozens of meals at once.

                ## Milestones
                1. A freezer bag of vegetable trimmings or bones collected through the month.
                2. A large pot of unsalted stock made and cooled safely.
                3. Stock frozen in labelled portions of a known volume.
                4. Shop-bought stock cubes used for no more than one meal a week.

                ## Notes
                Cool stock quickly, ideally in shallow containers, and freeze it within a couple of hours of cooking.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly stock days completed, each leaving labelled frozen portions in the freezer."
                cadence: rolling
              tasks:
                - "Start a freezer bag for onion ends, carrot peel, celery tops and bones"
                - "Make a pot of unsalted stock and freeze it in labelled portions @recurring(monthly:12)"
                - "Note the portion sizes on the freezer list"
            - name: Midweek pot of pulses cooked from dry
              description: |-
                ## Purpose
                Beans, lentils and chickpeas bring soluble fibre and protein with almost no saturated fat, but tinned ones often come in salted water. Cooking one pot from dry each week, unsalted, gives a box of ready pulses for salads, soups and curries and costs a fraction of the tins.

                ## Milestones
                1. Two or three dried pulses bought and stored in labelled jars.
                2. A reliable soak and cook time worked out for each.
                3. One pot cooked each week and kept in the fridge or freezer.
                4. Pulses used in at least three meals a week for a month.

                ## Notes
                Red kidney beans must be soaked and then boiled hard for a few minutes before simmering. Slow cookers alone do not make them safe.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks with a pot of unsalted pulses cooked from dry and used in at least three meals each week."
                cadence: rolling
              tasks:
                - "Buy two kinds of dried pulses and label their jars with cooking times"
                - "Soak the week's pulses the night before cooking day @recurring(weekly:tue)"
                - "Cook the soaked pulses without salt and box them for the week @recurring(weekly:wed)"
            - name: Oily fish on a twice-weekly rhythm
              description: |-
                ## Purpose
                Salmon, mackerel, sardines, trout and herring are a regular part of heart-healthy eating advice in many countries, often around two portions a week. Fixing two fish nights, with simple lower-salt methods such as baking in a parcel with lemon and herbs, turns a recommendation into something that happens.

                ## Milestones
                1. Two fixed fish nights chosen for the week.
                2. Four lower-salt oily fish recipes the household likes.
                3. Smoked and salted fish kept as an occasional choice rather than the default.
                4. Fish eaten on both fish nights for six weeks.

                ## Notes
                Check your health service's advice on fish portions if you are pregnant, planning a pregnancy or cooking for young children.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive weeks with oily fish served on both planned fish nights, cooked without smoked or salted fish as the default."
                cadence: rolling
              tasks:
                - "Choose two fixed fish nights and mark them on the dinner plan"
                - "Find four oily fish recipes that use lemon and herbs rather than salt"
                - "Cook oily fish on the agreed fish nights @recurring(weekly:mon,thu)"
            - name: Oats and soluble fibre breakfast habit
              description: |-
                ## Purpose
                Soluble fibre from oats, barley, pulses and some fruit is one of the dietary changes often suggested for cholesterol, and breakfast is the easiest meal to change because it repeats. A daily oat-based breakfast, made without salt and with fruit instead of sugar, puts that fibre in place before the day starts.

                ## Milestones
                1. Three oat breakfasts the household will eat in rotation.
                2. Porridge cooked without the pinch of salt many recipes include.
                3. An oat breakfast eaten on at least five days a week for a month.
                4. A note of any change in fullness or snacking before lunch.

                ## Notes
                Start from the **Habit tracker** template. Check the salt on instant porridge sachets and granola, which can be surprisingly high.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A habit tracker showing an oat-based breakfast on at least five days a week for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose three oat breakfasts and buy plain rolled oats"
                - "Set up a breakfast row in a habit tracker"
                - "Eat an oat or barley breakfast and tick it off @recurring(daily)"
            - name: Saturday sauce and dressing batch
              description: |-
                ## Purpose
                Shop-bought dressings, ketchup, pasta sauces and marinades carry a large share of salt and often saturated fat. An hour on Saturday making a tomato sauce, a vinaigrette and one herby sauce such as salsa verde or chimichurri without added salt gives the week's meals their flavour from the fridge, not a jar.

                ## Milestones
                1. Three base recipes chosen: a tomato sauce, a vinaigrette and a green herb sauce.
                2. Each recipe adapted to use no added salt.
                3. A Saturday batch made and labelled with the date.
                4. Jar sauces bought no more than twice a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive Saturday batches made, each with at least two salt-free sauces or dressings labelled in the fridge."
                cadence: rolling
              tasks:
                - "Choose a tomato sauce, vinaigrette and green herb sauce recipe"
                - "Cut the added salt from each recipe and note the acid that replaces it"
                - "Make and label the week's sauces and dressings @recurring(weekly:sat)"
            - name: New lower-salt recipe every month
              description: |-
                ## Purpose
                A repertoire of ten safe meals gets boring, and boredom sends people back to takeaways. Trying one new lower-salt recipe each month, and keeping it only if two people would happily eat it again, grows the rotation by about a dozen dishes a year.

                ## Milestones
                1. A list of candidate recipes from reputable heart health and cookery sources.
                2. One new recipe cooked each month.
                3. Each recipe rated by everyone who ate it, with changes noted.
                4. Six keepers added to the household rotation in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly recipe trials recorded with ratings, and at least six recipes added to the regular rotation."
                cadence: rolling
              tasks:
                - "Collect ten candidate recipes from heart health charities or cookbooks"
                - "Cook one new lower-salt recipe and record everyone's rating @recurring(monthly:8)"
                - "Move any recipe rated well by two people into the rotation list"
            - name: Monthly basket check for salt and saturated fat
              description: |-
                ## Purpose
                Shopping baskets drift: a new cheese, a favourite crisp brand, smoked ham back on the list. Looking through one receipt or online order a month for the highest-salt and highest-fat items catches the drift early and keeps the cupboard sweep from needing to be redone.

                ## Milestones
                1. One receipt or online order a month kept for checking.
                2. The three highest-salt and highest-saturated-fat items circled.
                3. A swap or a smaller pack chosen for each.
                4. Six months of checks with the main culprits noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly basket checks recorded, each naming the top three salt or fat items and the swap chosen."
                cadence: rolling
              tasks:
                - "Keep this month's largest shopping receipt or online order"
                - "Circle the three saltiest and three fattiest items and choose swaps @recurring(monthly:22)"
                - "Add the chosen swaps to the next shopping list"
            - name: Half-plate vegetables at dinner
              description: |-
                ## Purpose
                Filling half the plate with vegetables leaves less room for salty sides and fatty meat without anyone being told to eat less. A weekly tally of how many dinners met the half-plate mark shows whether the habit is sticking and which nights it slips.

                ## Milestones
                1. The half-plate rule explained to whoever serves dinner.
                2. Two quick vegetable sides learned for busy nights.
                3. A weekly count kept of dinners that met the rule.
                4. Five or more half-plate dinners a week for a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks with at least five dinners a week served with vegetables covering half the plate."
                cadence: rolling
              tasks:
                - "Learn two vegetable sides that take under ten minutes"
                - "Keep frozen peas, spinach and green beans in stock for rescue nights"
                - "Count the week's half-plate dinners and note where it slipped @recurring(weekly:fri)"
            - name: Quarterly heart-healthy kitchen review
              description: |-
                ## Purpose
                Without a regular look back, changes made in a burst of motivation fade within a few months. A quarterly hour with the salt diary, basket checks and recipe ratings shows what has stuck, what has crept back and what to try next, and gives you something concrete to tell your clinician.

                ## Milestones
                1. A review page with the measures that matter to you: salt per dish, fish nights, fibre breakfasts, takeaway count.
                2. The first quarterly review completed against the starting picture.
                3. One habit to strengthen and one new change chosen each quarter.
                4. Four reviews completed in a year.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews logged in a year, each recording what stuck, what slipped and the one change chosen next."
                cadence: cyclic
              tasks:
                - "Create a metrics log with the four kitchen measures you care about"
                - "Review the quarter's cooking against the log and choose one change @recurring(quarterly)"
                - "Note anything worth mentioning at your next health check"
            - name: Cooking with acid instead of salt
              description: |-
                ## Purpose
                Lemon, lime, vinegar, sumac, tamarind and yoghurt brighten food in a way the tongue reads much like salt. Learning when to add acid, how much, and which kind suits which dish is the single most useful skill for anyone cutting back.

                ## Milestones
                1. Five acids tasted side by side on the same plain dish.
                2. A rule of thumb written for adding acid at the end of cooking.
                3. Acid used in place of part of the salt in three regular dishes.
                4. A short list of which acid suits soups, grains, fish, pulses and greens.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list matching acids to five kinds of dish, and three household dishes cooked with acid replacing part of their salt."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Cook a plain pot of lentils and taste five acids on separate spoonfuls"
                - "Write a rule for when and how much acid to add"
                - "Replace part of the salt with acid in three regular dishes"
                - "Write which acid suits soups, grains, fish, pulses and greens"
            - name: Umami without stock cubes or soy sauce
              description: |-
                ## Purpose
                Savoury depth usually comes from stock cubes, soy sauce, fish sauce and cheese, which are all very salty. Dried mushrooms, slow-cooked onions, roasted tomatoes, tomato purée, seaweed and nutritional yeast give much of the same depth with far less salt once you know how to use them.

                ## Milestones
                1. Six low-salt umami sources tried in a simple broth or sauce.
                2. Mushroom soaking liquid and tomato purée used as stock replacements.
                3. A low-salt savoury base recipe written down for soups and stews.
                4. Soy sauce or fish sauce in two regular dishes reduced or replaced.

                ## Notes
                Reduced-salt soy sauces still contain a lot of salt. Treat them as a smaller step, not a free pass.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written low-salt savoury base recipe in use, and two regular dishes cooked with their soy or fish sauce reduced or replaced."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Soak dried mushrooms and taste the liquid against a stock cube broth"
                - "Roast tomatoes and onions slowly and use them as a sauce base"
                - "Write a low-salt savoury base recipe for soups and stews"
                - "Halve the soy sauce in one regular stir-fry and add mushroom liquid"
            - name: Salt-free herb and spice blends
              description: |-
                ## Purpose
                Shop-bought seasonings, steak rubs and many curry powders list salt among the first ingredients. Mixing three or four salt-free blends at home, each built for a particular job, gives you a jar to reach for that adds flavour rather than sodium.

                ## Milestones
                1. Three or four salt-free blends chosen for jobs you cook often: roasting vegetables, fish, chicken and pulses.
                2. Each blend made in a small batch and labelled with the date.
                3. Each blend tested in two dishes and the proportions adjusted.
                4. Bought seasonings that contain salt used up and not replaced.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three labelled salt-free blends in the cupboard, each tested in at least two dishes, with no salt-containing seasoning repurchased."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check every bought seasoning blend for salt in the ingredients"
                - "Mix a salt-free roasting blend and a salt-free fish blend"
                - "Test each blend in two dishes and adjust the proportions"
                - "Label each jar with the recipe and the date mixed"
            - name: Browning, roasting and charring for depth
              description: |-
                ## Purpose
                Browned onions, roasted vegetables, seared mushrooms and charred peppers taste rich and savoury because of the browning itself, which means they need far less salt. Practising high-heat techniques with only a little oil gives everyday dishes depth that salt used to provide.

                ## Milestones
                1. Onions cooked slowly to deep golden in a small amount of oil.
                2. A tray of vegetables roasted hot until well browned at the edges.
                3. Peppers or aubergine charred on a hob, grill or barbecue.
                4. Two regular dishes rebuilt around a browned base with less added salt.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three browning techniques practised and two regular dishes cooked on a browned base with their added salt reduced."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Cook a pan of onions slowly for thirty minutes until deep golden"
                - "Roast a tray of mixed vegetables until browned at the edges"
                - "Char a pepper over a flame and peel it for a salad"
                - "Rebuild two regular dishes on a browned onion or vegetable base"
            - name: Steaming, poaching and oven cooking in place of frying
              description: |-
                ## Purpose
                Shallow and deep frying add fat that is easy to forget, and the crispy coating often comes with salt too. Learning to steam, poach, bake in a parcel and oven-crisp with a light coat of oil keeps texture and flavour while cutting most of the added fat.

                ## Milestones
                1. Fish or chicken cooked in a sealed parcel with herbs and citrus.
                2. Vegetables steamed to just tender and dressed after cooking.
                3. An oven-crisp method found for one usually fried favourite.
                4. Frying reduced to one or two meals a week.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three lower-fat methods practised and frying limited to two meals or fewer a week for a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Bake a fish fillet in a paper parcel with lemon and herbs"
                - "Steam green vegetables and dress them with oil and acid after cooking"
                - "Find an oven-crisp version of one fried favourite"
                - "Count the week's fried meals and aim for two or fewer"
            - name: Creamy sauces without cream or butter
              description: |-
                ## Purpose
                Cream, butter and cheese sauces are heavy in saturated fat, and cheese adds salt too. Blended white beans, puréed roasted vegetables, thick yoghurt stirred in off the heat and evaporated or lower-fat milk thickened with flour can give a creamy result that most people do not notice has changed.

                ## Milestones
                1. Three creamy bases tried: blended beans, puréed vegetables and yoghurt.
                2. A white sauce made with lower-fat milk and oil rather than butter.
                3. One family favourite with a cream or cheese sauce reworked.
                4. The household's verdict on the reworked dish recorded.

                ## Notes
                Add yoghurt off the heat or with a spoonful of flour stirred in first, or it will split.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three creamy bases tested and one regular cream or cheese sauce dish reworked, with the household's verdict recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Blend white beans with garlic and lemon into a creamy pasta sauce"
                - "Make a white sauce with lower-fat milk and oil instead of butter"
                - "Rework one cream or cheese sauce favourite with a new base"
                - "Ask everyone who ate it whether they would choose it again"
            - name: Lean meat and poultry that stays juicy
              description: |-
                ## Purpose
                Lean cuts and skinless chicken are lower in saturated fat but dry out quickly, which is why people return to fattier cuts. Learning to trim, marinate without salt, cook to the right internal temperature and rest the meat keeps lean cuts tender.

                ## Milestones
                1. Visible fat trimmed and chicken skin removed before cooking.
                2. Two salt-free marinades using acid, garlic and herbs tried.
                3. A meat thermometer used to cook chicken and pork to a safe temperature without overcooking.
                4. Lean cuts replacing fattier ones in two regular meals.

                ## Notes
                Use your food safety authority's recommended internal temperatures. A thermometer is the only reliable way to hit them without drying the meat.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two salt-free marinades in use, a thermometer used routinely, and lean cuts replacing fattier ones in two regular meals."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Buy a digital probe thermometer and check it in boiling water"
                - "Marinate chicken breast in yoghurt, lemon and garlic without salt"
                - "Cook to the safe temperature and rest the meat before slicing"
                - "Swap a fattier cut for a lean one in two regular meals"
            - name: Lower-salt soups and stews with full flavour
              description: |-
                ## Purpose
                Soups and stews are where salt hides most, from stock cubes, bacon, cheese rinds and seasoning to taste. Building them on unsalted stock, browned aromatics, herbs and a finishing acid keeps the comfort food of winter while taking out much of its salt.

                ## Milestones
                1. One soup and one stew chosen from the household's regulars.
                2. Each made on home-made unsalted stock and a browned base.
                3. Salt added only at the end, measured and tasted first.
                4. Both recipes rewritten with the new method and measured salt.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One soup and one stew rewritten on unsalted stock with measured end-of-cooking salt, and both cooked at least twice."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose one soup and one stew the household eats every winter"
                - "Cook each on unsalted stock with a browned onion and garlic base"
                - "Add salt only at the end, measuring and tasting first"
                - "Rewrite both recipes with the method and the measured salt"
            - name: Bread, cereal and spread salt swaps
              description: |-
                ## Purpose
                Bread and breakfast cereals are eaten so often that even a modest amount of salt per slice or bowl adds up to a large share of the day. Comparing the household's usual loaf, cereal and spreads against two or three alternatives finds lower-salt options nobody will mind.

                ## Milestones
                1. The usual bread, cereal and spreads listed with salt per 100 grams.
                2. Two or three alternatives compared for each in the shop or online.
                3. A blind taste test of the current and lower-salt bread.
                4. Swaps made for at least two of the three.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Salt per 100 grams compared for bread, cereal and spreads, with lower-salt swaps adopted for at least two of them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the salt per 100 grams on the usual bread, cereal and spreads"
                - "Compare two alternatives for each on the next shop"
                - "Run a blind taste test of the old and lower-salt loaf"
                - "Switch to the lower-salt option for at least two of the three"
            - name: Stock, gravy and table sauce swaps
              description: |-
                ## Purpose
                Gravy granules, stock pots, ketchup, brown sauce, mayonnaise and soy sauce are small amounts used often, and they add up. Comparing lower-salt and lower-fat versions, and deciding which to make at home instead, removes a steady trickle of salt from every week.

                ## Milestones
                1. Every stock, gravy and table sauce in use listed with salt per serving.
                2. Reduced-salt versions or home-made alternatives found for each.
                3. A home-made gravy method from meat juices or unsalted stock learned.
                4. At least four products swapped or dropped.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least four stock, gravy or table sauce products swapped for lower-salt versions or replaced by home-made ones."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every stock, gravy and table sauce with its salt per serving"
                - "Find a reduced-salt version or home-made alternative for each"
                - "Make gravy from unsalted stock and pan juices"
                - "Swap or drop at least four of the products"
            - name: Processed meat and cheese cut-back plan
              description: |-
                ## Purpose
                Bacon, ham, sausages, salami and hard cheese are high in both salt and saturated fat, and they tend to appear at every meal once they are in the fridge. Planning a gradual cut-back, with specific replacements for breakfasts, sandwiches and pasta, works better than a ban.

                ## Milestones
                1. Every meal where processed meat or cheese appears in a typical week listed.
                2. A replacement chosen for each: eggs, leftover roast meat, hummus, pulses or a strongly flavoured cheese used sparingly.
                3. Processed meat and cheese meals halved over four weeks.
                4. The new sandwich and breakfast options written down.

                ## Notes
                A small amount of a strong cheese such as Parmesan or mature cheddar gives more flavour per gram than a mild one, so less is needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Weekly meals containing processed meat or cheese halved from the starting count after four weeks, with replacements written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Count how many meals in a normal week contain processed meat or cheese"
                - "Choose a replacement for each breakfast, sandwich and pasta use"
                - "Roast a lean joint or chicken for sandwich slices instead of ham"
                - "Recount after four weeks and compare with the start"
            - name: Takeaway favourites rebuilt at home
              description: |-
                ## Purpose
                A single takeaway curry, pizza or Chinese meal can carry most of a day's salt and a lot of saturated fat. Rebuilding the household's two favourite takeaways at home, with the same spices and textures but control over salt and oil, keeps Friday night special.

                ## Milestones
                1. The household's two most ordered takeaway dishes identified.
                2. A home version of each cooked with measured salt and less oil.
                3. Each home version rated against the original by the household.
                4. Takeaway orders reduced to an agreed number a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two home versions of favourite takeaways written up and rated, with takeaway orders held to the agreed monthly number for two months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the order history to find the two most ordered takeaway dishes"
                - "Ask the agent to draft a lower-salt home version of each"
                - "Cook both and ask the household to rate them against the originals"
                - "Agree how many takeaways a month the household wants to keep"
            - name: Tinned and frozen staples with no added salt
              description: |-
                ## Purpose
                Tinned beans, vegetables, tomatoes and fish make quick meals possible, but many come in brine or with added salt. Finding the no-added-salt versions of the six tins and frozen items the household uses most keeps convenience food in the cupboard without the salt.

                ## Milestones
                1. The six most used tins and frozen staples listed.
                2. A no-added-salt or water-packed version found for each, or a note that none is available.
                3. The habit of draining and rinsing tinned pulses when no alternative exists.
                4. The shopping list updated with the exact products.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Six staple products checked, with a no-added-salt alternative on the shopping list for at least four of them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the six tins and frozen items used most each month"
                - "Find a no-added-salt or water-packed version of each"
                - "Drain and rinse tinned pulses where no alternative exists"
                - "Write the exact products on the regular shopping list"
            - name: Low-fat cooking equipment choice
              description: |-
                ## Purpose
                A good non-stick pan, a steamer basket, an oil spray bottle or an air fryer can make lower-fat cooking easier, but kitchens fill up with gadgets that are used twice. Choosing one or two pieces against how you actually cook, and what you would stop doing with them, avoids an expensive cupboard of good intentions.

                ## Milestones
                1. The cooking method you want to change named: frying, roasting or deep-fat frying.
                2. Two or three pieces of equipment compared on price, space and the change they enable.
                3. One item bought or borrowed.
                4. The item used at least twice a week for a month.

                ## Notes
                Start from the **Purchase decision** template. A steamer basket that fits a pan you already own is often the cheapest useful change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One piece of equipment chosen against a named cooking change, bought and used at least twice a week for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the cooking habit you want the equipment to change"
                - "Compare two or three options on price, space and use"
                - "Buy or borrow the chosen item"
                - "Use it for at least two meals a week for a month"
            - name: Home-made unsalted snacks to replace crisps
              description: |-
                ## Purpose
                Crisps, salted nuts, crackers and cheese biscuits are among the easiest ways to add salt between meals. A small rotation of home-made alternatives such as spiced roasted chickpeas, plain popcorn with smoked paprika and unsalted nuts with dried fruit gives the same crunch without the salt.

                ## Milestones
                1. The salty snacks the household eats in a normal week listed.
                2. Three unsalted snack recipes made and tasted.
                3. A snack tin kept stocked with the home-made options.
                4. Bought salty snacks halved over a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three home-made unsalted snacks in rotation and bought salty snacks halved from the starting count over a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Count the packets of salty snacks bought in a normal week"
                - "Roast a tray of chickpeas with smoked paprika and cumin"
                - "Pop plain popcorn in a pan and season it with spice instead of salt"
                - "Keep a snack tin stocked with the home-made options"
            - name: Eight-week household lower-salt challenge
              description: |-
                ## Purpose
                Changes stick better when everyone in the house is in on them and there is a finish line. An eight-week challenge with a start date, a weekly target, a tally on the fridge and a celebration meal at the end turns lower-salt cooking from one person's diet into a shared project.

                ## Milestones
                1. A start date, weekly targets and a finishing meal agreed by the household.
                2. A tally chart on the fridge for home-cooked dinners, fish nights and takeaways.
                3. Each person choosing one personal swap for the eight weeks.
                4. A celebration meal cooked at the end with the household's favourite new recipe.
              priority: medium
              deadlineOffsetDays: 70
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Eight weeks of tallies completed on the fridge and a celebration meal held, with each person's swap recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree a start date and the three things the household will tally"
                - "Put a tally chart on the fridge"
                - "Ask each person to pick one personal swap for the eight weeks"
                - "Plan the celebration meal for the end of week eight"
            - name: Lower-salt festive dinner
              description: |-
                ## Purpose
                Festive meals pile up salt from brined meat, stuffing, gravy, cured sides, cheese boards and nibbles, often for several days running. Planning one year's big celebration meal with lower-salt versions of its centrepieces keeps the tradition while sparing the person with the heart condition from a week of exceptions.

                ## Milestones
                1. The festive menu written with each dish's main salt source marked.
                2. Lower-salt versions chosen for the gravy, stuffing and one side.
                3. Pre-brined or cured meat replaced with an unbrined joint seasoned with herbs and citrus.
                4. The meal cooked and the household's verdict noted for next year.

                ## Notes
                Keep one traditional dish exactly as it is. People accept changes more readily when their favourite is left alone.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A festive meal served with at least three dishes in lower-salt versions, and a note of what to keep for next year."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write out last year's festive menu and mark each dish's salt source"
                - "Choose lower-salt versions of the gravy, stuffing and one side"
                - "Order an unbrined joint and plan a herb and citrus seasoning"
                - "Start the festive menu plan six weeks before the date @recurring(yearly)"
            - name: Heart-healthy dinner for guests
              description: |-
                ## Purpose
                Hosting is where people slip back to butter, cream and salty canapés, worried that guests will find the food plain. Planning one dinner for friends with a menu built on herbs, citrus, roasting and good olive oil proves to you that the new way of cooking holds up in company.

                ## Milestones
                1. A three-course menu chosen with no dish relying on cream, butter or added salt for flavour.
                2. Each dish cooked once as a trial before the evening.
                3. A prep timeline written so the cook is at the table.
                4. The dinner held and the dishes worth repeating noted.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dinner for guests held with a three-course menu cooked without cream, butter or added salt as the main flavour."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a date and invite two to four guests"
                - "Choose a three-course menu built on herbs, citrus and roasting"
                - "Trial each dish once in the fortnight before"
                - "Write down which dishes guests asked about afterwards"
            - name: Salt-free rubs and marinades for barbecue season
              description: |-
                ## Purpose
                Summer brings sausages, burgers, cured meats, shop marinades and salty sides to every gathering. Preparing a few salt-free rubs and marinades, and a plan for vegetables and fish on the grill, before the first barbecue of the season keeps outdoor eating in line with the rest of the year.

                ## Milestones
                1. Two salt-free rubs and two salt-free marinades written and tested.
                2. Fish, chicken and vegetable skewers planned as the main grill items.
                3. A lower-salt side salad and dip chosen to bring to other people's barbecues.
                4. Rubs mixed and stored before the first warm weekend.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two rubs and two marinades without added salt tested and stored before the season's first barbecue, with a side dish ready to bring."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Write two salt-free rubs using smoked paprika, garlic, herbs and citrus zest"
                - "Test a yoghurt marinade and an oil and lemon marinade on chicken"
                - "Choose a salad and dip to bring to other people's barbecues"
                - "Mix fresh rubs before the first warm weekend of the year @recurring(yearly)"
            - name: Cooking changes summary for your next health review
              description: |-
                ## Purpose
                Clinicians usually ask what has changed since the last appointment, and a vague answer wastes the chance to talk about what is working. Taking one page to the next cholesterol or blood pressure review, listing the cooking changes made and when, helps your clinician read the results in context and decide what happens next.

                ## Milestones
                1. The date of the next relevant review confirmed.
                2. A one-page summary of the main cooking changes and when each started.
                3. Two questions about diet written for the clinician.
                4. The clinician's response and any new goal written on your goals page.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page cooking changes summary taken to a review appointment, with the clinician's response recorded on your goals page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the date of your next cholesterol or blood pressure review"
                - "Ask the agent to summarise your kitchen log into one page of changes and dates"
                - "Write two questions about diet for the appointment"
                - "Refresh the summary before each yearly review @recurring(yearly)"
            - name: Freezer of lower-salt meals before a hospital stay
              description: |-
                ## Purpose
                After a heart procedure or operation, the first weeks at home are tiring, and ready meals and takeaways become the default just when the diet matters most. Filling the freezer with labelled lower-salt portions before admission means recovery starts with the right food already cooked.

                ## Milestones
                1. The likely recovery period and any diet instructions from the hospital noted.
                2. Ten to fourteen lower-salt main meals cooked and frozen in single portions.
                3. Each portion labelled with the dish, date and reheating method.
                4. A list on the freezer door so whoever is helping can choose.

                ## Notes
                Ask the ward or discharge team whether any fluid or food limits will apply when you get home, and cook to those.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least ten labelled lower-salt single portions are in the freezer before admission, with a list on the freezer door."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the hospital team what diet instructions will apply after discharge"
                - "Choose five lower-salt dishes that freeze and reheat well"
                - "Cook and freeze at least ten single portions with labels"
                - "Tape a list of the frozen meals to the freezer door"
            - name: Cooking after a heart attack or heart failure diagnosis
              description: |-
                ## Purpose
                After a heart attack, a stent or a heart failure diagnosis, people are often given diet advice in a rush at discharge and then left to work it out. Turning the cardiac rehabilitation or dietitian advice into a written kitchen plan, with the first fortnight's meals decided, gets the changes into the pans while motivation is highest.

                ## Milestones
                1. The written diet advice from the hospital, rehab team or dietitian gathered in one place.
                2. Any salt, fluid or food limits copied onto your goals page.
                3. A two-week meal plan written to fit those limits.
                4. Questions about food taken to the first rehab session or follow-up.

                ## Notes
                Heart failure plans sometimes include fluid limits that affect soups, stews and drinks. Follow your own team's instructions over any general advice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written kitchen plan built from your own team's advice, with a two-week meal plan cooked and food questions asked at the first follow-up."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Gather every leaflet and letter with diet advice from the hospital"
                - "Ask to be referred to cardiac rehabilitation or a dietitian if not already"
                - "Write a two-week meal plan that fits the limits you were given"
                - "Take a list of food questions to the first follow-up"
            - name: Lower-salt cooking for one or two in retirement
              description: |-
                ## Purpose
                Taste and smell often dull with age, so food can seem bland and the salt goes on more heavily, while recipes for four lead to leftovers and ready meals. Building a small set of lower-salt dishes scaled for one or two, with stronger herbs, citrus and spice, keeps meals enjoyable without the extra salt.

                ## Milestones
                1. Six lower-salt recipes scaled for one or two people.
                2. Stronger flavourings such as fresh herbs, chilli, garlic and citrus used in each.
                3. A cook-once, eat-twice night each week, with the second portion frozen or kept for tomorrow.
                4. Ready meals reduced to an agreed number a week.

                ## Notes
                A noticeable change in taste or smell is worth mentioning to your doctor, as some medicines and conditions cause it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six scaled lower-salt recipes in regular use and a weekly cook-once, eat-twice night kept for a month."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose six favourite dishes and scale each recipe for one or two"
                - "Add fresh herbs, chilli or citrus to each in place of extra salt"
                - "Cook a double batch and save the second portion @recurring(weekly:tue)"
                - "Agree a weekly limit on ready meals"
            - name: Cooking for an older parent on a low-salt diet
              description: |-
                ## Purpose
                Adult children and carers often end up cooking for a parent whose doctor has asked them to cut salt, while the parent misses the food they grew up with. Planning a weekly delivery of labelled lower-salt portions built around their favourite dishes keeps them eating well without arguments over the salt cellar.

                ## Milestones
                1. Your parent's dietary instructions from their doctor or dietitian confirmed with them.
                2. Five of their favourite dishes adapted to lower salt and tested with them.
                3. A weekly cook and delivery of labelled single portions.
                4. A check after a month on what they ate, left or wanted changed.

                ## Notes
                Agree changes with your parent rather than for them. Food that is refused does more harm than food that is a little saltier than ideal.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Four consecutive weeks of labelled lower-salt portions delivered, built on five favourite dishes your parent has approved."
                cadence: rolling
              tasks:
                - "Ask your parent which dishes they miss most and which they still enjoy"
                - "Adapt five favourites to lower salt and taste them together"
                - "Cook and deliver the week's labelled portions @recurring(weekly:thu)"
                - "Ask after a month what they ate, left and want changed"
            - name: One lower-salt dinner for the whole household
              description: |-
                ## Purpose
                Cooking a separate low-salt meal for one person while everyone else eats the usual food is tiring and makes the change feel like a punishment. Cooking one lower-salt dinner for all, with flavour added at the table through herbs, chilli and lemon, protects everyone's long-term health, children included.

                ## Milestones
                1. The household agreed to eat one dinner rather than two.
                2. Table toppings chosen so each person can add flavour without salt.
                3. Children's and teenagers' favourite meals adapted first.
                4. A month of single shared dinners without separate low-salt cooking.

                ## Notes
                Babies and young children have much lower salt needs than adults, so shared lower-salt cooking suits them well. Check your health service's guidance for very young children.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A month of shared dinners cooked once for the whole household, with a table toppings tray in use."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Talk at dinner about cooking one meal for everyone"
                - "Set up a table tray of chilli flakes, lemon, herbs and pepper"
                - "Adapt each child's favourite dinner to lower salt first"
                - "Stop cooking a separate low-salt plate after the first week"
            - name: Twenty-minute lower-salt weeknight meals
              description: |-
                ## Purpose
                Long working days and shift patterns are when instant noodles, frozen pizza and takeaways take over. A short list of dinners that take twenty minutes from a stocked cupboard, using no-added-salt tins, frozen vegetables, eggs, fish and pre-cooked pulses, gives a fast lower-salt answer for the worst nights.

                ## Milestones
                1. Six dinners written that take twenty minutes or less with no packet sauce.
                2. The cupboard and freezer stocked for at least three of them at all times.
                3. Each meal timed once and adjusted.
                4. Takeaways on work nights reduced to an agreed number.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six timed twenty-minute lower-salt dinners on a written list, with ingredients for three always in stock."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write six dinners that can be made in twenty minutes without packet sauces"
                - "Stock the cupboard and freezer for three of them"
                - "Time each meal once and adjust the method"
                - "Stick the list inside a cupboard door"
            - name: Heritage dishes cooked with less salt
              description: |-
                ## Purpose
                Many family cuisines rely on salted fish, soy and fermented sauces, pickles, cured meats or stock cubes, and asking someone to give up those dishes asks them to give up part of home. Working with relatives to adapt three heritage dishes, keeping their character and cutting their salt, protects both health and tradition.

                ## Milestones
                1. Three heritage dishes chosen with the relatives who cook them best.
                2. The main salt sources in each identified, such as soaking water, sauces or cured ingredients.
                3. Each dish cooked side by side in its usual and lower-salt versions.
                4. The adapted recipes written down and approved by the family cook.

                ## Notes
                Soaking salted fish or cured meat in several changes of water and using less of the strongest sauce often keeps the character of a dish while cutting salt.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three heritage dishes adapted to lower salt, cooked side by side with the originals and approved in writing by the family cook."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask a relative which three family dishes matter most to them"
                - "Cook one dish together and note where the salt comes from"
                - "Make the usual and lower-salt versions side by side"
                - "Write down each adapted recipe and ask the family cook to approve it"
            - name: Salt per portion for your core recipes
              description: |-
                ## Purpose
                Experienced cooks reach a point where guessing is no longer good enough and they want to know what each portion actually contains. Working out salt and saturated fat per portion for the ten recipes eaten most often, using label figures and a nutrition database, shows exactly which dishes still need work and which are already well within your goals.

                ## Milestones
                1. Ten core recipes written with exact weights of every ingredient.
                2. Salt and saturated fat per portion calculated for each.
                3. Each recipe compared with the goals your clinician agreed.
                4. The two highest recipes reworked and recalculated.

                ## Notes
                Use the label figure for branded ingredients such as bread, stock and sauces. Database averages can be well off for those.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of salt and saturated fat per portion for ten core recipes, with the two highest reworked and recalculated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Weigh every ingredient the next time you cook each core recipe"
                - "Ask the agent to calculate salt and saturated fat per portion from the weights and labels"
                - "Compare each figure with your agreed goals"
                - "Rework and recalculate the two highest recipes"
            - name: Safe limits on cutting salt in pickles and cures
              description: |-
                ## Purpose
                In pickles, brined vegetables, ferments and cured meat, salt is part of what keeps the food safe, not only a flavour. Before cutting salt in any preserved food, knowing which recipes are tested at lower salt and which must stay as written prevents an unsafe batch.

                ## Milestones
                1. The preserved foods the household makes or buys listed.
                2. Tested lower-salt recipes found from a food safety or extension service source, or a note that none exist.
                3. A household rule written: never reduce salt in a preserving recipe that was not tested at that level.
                4. Portions of salty preserved foods reduced rather than the salt in the recipe.

                ## Notes
                When in doubt, eat a smaller amount of the properly salted version. Reduced-salt home cures and ferments are where food poisoning risks rise.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written household rule on salt in preserving, with tested lower-salt recipes or a smaller-portion plan for each preserved food used."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every pickle, ferment and cured food the household makes or buys"
                - "Look for tested lower-salt preserving recipes from a food safety source"
                - "Write the rule about never reducing salt in untested preserving recipes"
                - "Decide a smaller serving size for each salty preserved food"
            - name: Household lower-salt recipe book
              description: |-
                ## Purpose
                After a year of trials, the recipes that worked are scattered across notes, screenshots and memory. Gathering them into one book with measured salt, tested methods and the household's ratings gives every cook in the house, and any relative who helps out, the same reliable set to cook from.

                ## Milestones
                1. Every kept recipe from trials, reworks and heritage adaptations gathered in one place.
                2. Each recipe written in a standard format with measured salt and the flavour boosters used.
                3. Recipes grouped by weeknight, batch, guests and festive.
                4. A copy shared with anyone else who cooks for the household.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A recipe book of at least twenty tested lower-salt recipes in a standard format, shared with everyone who cooks for the household."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect every kept recipe from notes, screenshots and ratings"
                - "Ask the agent to put the recipes into one standard format"
                - "Group the recipes by weeknight, batch, guests and festive"
                - "Add the quarter's new keepers to the book @recurring(quarterly)"
---

# Low-Salt Heart-Healthy Cooking

This area is for anyone cooking with less salt and saturated fat because a clinician asked them to, a partner had a scare, or the numbers at the last check-up were heading the wrong way, and it is written with retirees in mind as much as busy households. It starts with the foundations (a salt diary, goals from your clinician, a cupboard sweep, a flavour shelf and a slow step-down for the palate), then the weekly cooking routines, the techniques that put flavour back without the salt cellar, the swaps for bread, stock, cheese and takeaways, dated meals and appointments to prepare for, versions for retirees, carers, families and people recovering from a heart event, and finally the specialist work of costing salt per portion and writing a household recipe book.

What repeats is a Sunday dinner plan, a monthly unsalted stock day, a midweek pot of pulses, oily fish twice a week, a daily fibre breakfast, a Saturday sauce batch, a monthly new recipe and basket check, and a quarterly review of how the cooking is going. The Purchase decision, Weekly meal plan, Habit tracker and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
