---
id: food-nutrition.keto-low-carb-eating
name: Keto & Low-Carb Eating
description: "A careful low-carb set-up: a medical check, a chosen carb level, baseline tests, electrolytes and a keto flu plan, weekly menus and ketone logs, and regular reviews of how your body and blood results respond."
category: personal
version: 1.0.0
tags: [food-nutrition, keto-low-carb-eating, everyone, ketogenic, low-carb, ketones, electrolytes, net-carbs]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - weekly-meal-plan
    - metrics-log
    - habit-tracker
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Keto & Low-Carb Eating
          description: "Following a ketogenic or low-carbohydrate diet with planned meals, nutrient balance and monitoring of how the body responds."
          projects:
            - name: Medical safety check before starting keto
              description: |-
                ## Purpose
                A very low-carb diet changes blood sugar, blood pressure and fluid balance within days, which matters if you take insulin, diabetes tablets, water tablets, blood pressure medicines or lithium. A short appointment before you start, with a list of your medicines and conditions, turns a risky experiment into a supervised one and tells you which numbers to watch.

                ## Milestones
                1. A list of every medicine, supplement and long-term condition written on one page.
                2. Your doctor or pharmacist asked whether any medicine needs adjusting before carbs drop.
                3. Any reasons to avoid keto, such as pregnancy, past eating disorder, pancreatitis or gallbladder disease, discussed and recorded.
                4. A written note of the warning signs that mean stop and call, and who to call.

                ## Notes
                People with type 1 diabetes, or anyone taking an SGLT2 inhibitor tablet, can develop ketoacidosis with near-normal glucose readings. Do not start without your diabetes team agreeing the plan.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A clinician has reviewed your medicines and conditions and their go-ahead, changes and warning signs are written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of every medicine, supplement and condition you have"
                - "Book a medicines conversation with your doctor or pharmacist"
                - "Ask which medicines might need a lower dose once carbs drop"
                - "Write down the warning signs that mean stop and seek help"
            - name: Choosing your carb level and reasons
              description: |-
                ## Purpose
                Strict keto at around 20 to 30 grams of net carbs a day and moderate low-carb at 50 to 100 grams are different diets with different food lists, side effects and staying power. Writing down why you are doing it and which level suits that reason stops the target drifting every week and gives you something to measure against at the twelve-week review.

                ## Milestones
                1. Your main reason written in one sentence, such as weight, blood sugar, energy or a clinician's suggestion.
                2. A daily carb ceiling chosen and the reason for that level noted.
                3. Two or three outcomes you will judge the diet on listed with how to measure them.
                4. A date set to decide whether to continue, loosen or stop.

                ## Notes
                If your clinician suggested a low-carb diet for a condition, ask them which level they had in mind before choosing your own.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page note records your reason, a daily carb ceiling in grams, the outcomes you will judge and a review date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your main reason for going low-carb in one sentence"
                - "Pick a daily net carb ceiling and note why it fits that reason"
                - "List the outcomes you will judge the diet on"
                - "Re-read your reasons and check they still hold @recurring(quarterly)"
            - name: Baseline measurements before the first low-carb week
              description: |-
                ## Purpose
                Without starting numbers you cannot tell whether keto is helping, and some changes, such as a rise in LDL cholesterol, only show up in a blood test. Recording weight, waist, blood pressure and a recent blood panel before the first week gives every later review something real to compare against.

                ## Milestones
                1. Weight and waist measured on the same morning and written down.
                2. Blood pressure recorded at home or at the pharmacy.
                3. A recent lipid panel, glucose or HbA1c and kidney result requested through your clinician.
                4. Energy, sleep, digestion and hunger each scored out of ten for the week before you start.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A baseline sheet holds weight, waist, blood pressure, a dated blood panel and four symptom scores, all taken before day one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure your weight and waist on one morning before breakfast"
                - "Ask your clinician for a lipid, glucose and kidney blood test"
                - "Score energy, sleep, digestion and hunger for the week before"
                - "Save every baseline number on one dated sheet"
            - name: Reading labels for net carbs
              description: |-
                ## Purpose
                Labels differ by country: in the UK and EU the carbohydrate figure already excludes fibre, while in the US and some other markets total carbohydrate includes it and fibre has to be subtracted. Getting this wrong can double or halve your count, so learning to read one label correctly in ten seconds is worth an evening.

                ## Milestones
                1. The labelling rule for your country confirmed: whether fibre is already excluded.
                2. Ten products from your cupboard read and their net carbs per portion written down.
                3. Sugar alcohols and added fibres on bars and sweets understood and counted the way you chose.
                4. A one-line rule for reading carbs written on your shopping list.

                ## Notes
                Portion sizes on labels are often smaller than what people eat. Weigh one real portion before trusting the per-portion figure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can state the net carbs in one real portion of ten common products, using the correct rule for your country's labels."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether fibre is included in the carb figure on your local labels"
                - "Read ten cupboard labels and note net carbs per portion"
                - "Weigh one real portion of cereal, yoghurt and a sauce"
                - "Write your label rule at the top of the shopping list"
            - name: Low-carb kitchen clear-out and restock
              description: |-
                ## Purpose
                Willpower lasts about as long as the biscuit tin, and the first week is hardest when bread, pasta and cereal are in easy reach. Moving high-carb food out of sight, or giving it away, and filling the gap with eggs, meat, fish, cheese, nuts and low-carb vegetables makes the default choice the right one.

                ## Milestones
                1. Cupboards, fridge and freezer sorted into keep, move and give away.
                2. Shared household food moved to a separate shelf rather than thrown out.
                3. A first low-carb shop done covering proteins, fats, vegetables and snacks.
                4. A short list of emergency snacks kept at home, at work and in the bag.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your own shelves hold no high-carb staples and a written restock list covers proteins, fats, vegetables and snacks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sort cupboards, fridge and freezer into keep, move and give away"
                - "Agree a separate shelf for household members not eating low-carb"
                - "Write a restock list grouped into proteins, fats, vegetables and snacks"
                - "Pack an emergency snack pouch for work and the car"
            - name: Electrolyte plan for the first month
              description: |-
                ## Purpose
                Cutting carbs makes the kidneys release more sodium and water, which is behind much of the headache, cramp and light-headedness people blame on keto. Agreeing with your clinician how to replace sodium, potassium and magnesium, rather than guessing from the internet, matters most if you have high blood pressure, heart or kidney disease.

                ## Milestones
                1. Your clinician or pharmacist asked whether extra salt, potassium or magnesium is safe for you.
                2. Food sources of each electrolyte you will actually eat listed.
                3. A daily routine for broth, salted water or a product your clinician agreed written down.
                4. Cramps, headaches and dizziness noted daily for the first four weeks.

                ## Notes
                Potassium supplements can be dangerous with some blood pressure and kidney medicines. Food sources are the safer default unless your clinician says otherwise.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An electrolyte routine agreed with a clinician or pharmacist is written down and followed for the first four weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your pharmacist whether extra salt or potassium is safe with your medicines"
                - "List foods rich in sodium, potassium and magnesium that you like"
                - "Write a daily electrolyte routine you can follow at work"
                - "Note any cramps, headaches or dizziness for four weeks"
            - name: Keto flu plan for the first fortnight
              description: |-
                ## Purpose
                Days three to ten are when most people feel tired, foggy, headachy and irritable, and many quit then without realising it usually passes. Planning an easy fortnight, with lighter training, simple meals cooked ahead and an evening rating, gets you through the dip and tells you whether something more serious is going on.

                ## Milestones
                1. A start date chosen that avoids a big work deadline, travel or a celebration.
                2. Simple meals for the first ten days decided and their ingredients bought.
                3. Hard training swapped for walking or easy sessions for two weeks.
                4. Symptoms rated each evening and anything severe or lasting raised with your clinician.

                ## Notes
                Vomiting, rapid breathing, confusion or severe abdominal pain are not keto flu. Seek urgent care, especially if you have diabetes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Fourteen days completed with a rating each evening and any severe symptom raised with a clinician the same day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a start date clear of deadlines, travel and celebrations"
                - "Cook and freeze four simple meals for the first ten days"
                - "Swap hard training sessions for walks for two weeks"
                - "Rate energy, headache and mood each evening for fourteen days"
            - name: Ten dependable keto dinners
              description: |-
                ## Purpose
                Most people who stay low-carb for a year rely on a short list of meals they can cook tired, not on a new recipe every night. Building a tested set of ten dinners, each with its net carbs per portion worked out once, removes the nightly decision and the risk of reaching for toast.

                ## Milestones
                1. Ten dinners chosen across chicken, red meat, fish, eggs and one vegetarian option.
                2. Each cooked at least once and kept, changed or replaced.
                3. Net carbs per portion worked out for every dinner.
                4. The ten written on one card with a shopping list for each.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card lists ten tested dinners, each under your carb ceiling per portion, with its own shopping list."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose ten dinners covering at least five protein sources"
                - "Cook two of the dinners this week and note what to change"
                - "Work out net carbs per portion for each dinner"
                - "Write the final ten on one card with shopping lists"
            - name: Choosing a ketone meter
              description: |-
                ## Purpose
                Urine strips are cheap but become unreliable after a few weeks as the body adapts, breath meters cost more up front, and blood meters are accurate but the strips add up. Deciding which method answers your question, and what it will cost a month, avoids buying a gadget you stop using or a number you cannot trust.

                ## Milestones
                1. The question you want ketones to answer written down, such as checking you are in ketosis or tracking a medical target.
                2. Urine, breath and blood options compared on accuracy, upfront cost and monthly cost.
                3. A method chosen, or a decision recorded not to measure ketones at all.
                4. The device model and strip cost noted in your log.

                ## Notes
                Start from the **Purchase decision** template. If you have diabetes, ask your team which meter they want you to use, since some glucose meters also read blood ketones.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names a ketone method or none, with its expected monthly cost and the reason."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what you want ketone readings to tell you"
                - "Compare urine, breath and blood options on accuracy and monthly cost"
                - "Ask your diabetes team which meter to use, if you have one"
                - "Record the chosen method and strip cost in your log"
            - name: Breakfast rotation beyond bacon and eggs
              description: |-
                ## Purpose
                Eggs every morning is where many keto diets get boring by week three, and boredom is a common reason people slide back to cereal and toast. A rotation of six or seven breakfasts, including a few that can be made the night before or eaten at a desk, keeps mornings easy and protein steady.

                ## Milestones
                1. Seven breakfasts listed, at least three of them egg-free.
                2. Two make-ahead options tested, such as chia pots or a frittata cut into portions.
                3. Net carbs and protein per breakfast noted.
                4. The rotation stuck on the fridge or saved in your meal plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rotation of seven tested breakfasts, three of them egg-free, is on the fridge with carbs and protein noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List seven breakfasts you would happily eat, three without eggs"
                - "Make one frittata and cut it into portions for the week"
                - "Try a full-fat yoghurt or chia pot and check its carbs"
                - "Put the final rotation on the fridge door"
            - name: Weekly keto meal plan
              description: |-
                ## Purpose
                Low-carb eating goes wrong on the evenings when nothing is planned and the quickest food is bread or a takeaway. Fifteen minutes on Sunday choosing dinners and lunches, checking them against your carb ceiling and writing the shop keeps the week on track without daily thought.

                ## Milestones
                1. A fixed planning slot each week, with the plan kept in one place.
                2. Dinners and lunches chosen for seven days, using your ten dependable dinners.
                3. Each day checked against your carb ceiling before shopping.
                4. Leftovers planned into at least two lunches.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written plan exists for at least three weeks out of every four, with each day under your carb ceiling."
                cadence: rolling
              tasks:
                - "Create a weekly plan page from the meal plan template"
                - "Plan next week's dinners and lunches against your carb ceiling @recurring(weekly:sun)"
                - "Mark two dinners that will make the next day's lunch"
                - "Write the shopping list straight from the plan"
            - name: Carb and ketone log
              description: |-
                ## Purpose
                Most people underestimate carbs from sauces, nuts and dairy, and a log is the only way to find where they are hiding. Recording net carbs most days, and ketones twice a week if you chose to measure them, shows whether the diet you think you are eating is the one you are actually eating.

                ## Milestones
                1. A log with columns for date, net carbs, ketone reading, time of reading and notes.
                2. Net carbs logged on at least five days a week for the first month.
                3. Ketones measured at the same time of day each reading.
                4. The log summarised monthly into an average and the highest-carb foods.

                ## Notes
                Start from the **Metrics log** template. Measure ketones at a consistent time, as readings swing through the day and after meals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log with net carbs on at least twenty days a month and twice-weekly ketone readings at a consistent time."
                cadence: rolling
              tasks:
                - "Set up a carb and ketone log from the metrics log template"
                - "Take a ketone reading before breakfast @recurring(weekly:mon,thu)"
                - "Note the three highest-carb foods in the log each month @recurring(monthly:28)"
                - "Add a notes column for illness, alcohol and late meals"
            - name: Daily water and electrolyte routine
              description: |-
                ## Purpose
                Thirst and the salt shaker are easy to forget once the first fortnight is over, yet low fluid and sodium still explain many of the afternoon slumps and night cramps months later. Pairing a glass of water and your agreed electrolyte habit with something you already do makes it automatic.

                ## Milestones
                1. The routine your clinician agreed tied to two fixed points in the day.
                2. A full water bottle kept at your desk or in your bag.
                3. The routine ticked daily for four weeks.
                4. Cramps or headaches cross-checked against missed days.

                ## Notes
                Start from the **Habit tracker** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The agreed water and electrolyte routine is ticked on at least twenty-four days in each of the first two months."
                cadence: rolling
              tasks:
                - "Create a habit tracker with your agreed electrolyte routine"
                - "Fill a water bottle and leave it where you work"
                - "Tick off your water and electrolyte routine @recurring(daily)"
                - "Compare cramp days with missed routine days after a month"
            - name: Low-carb vegetable and fibre habit
              description: |-
                ## Purpose
                A keto plate that is mostly meat and cheese leaves out the fibre that keeps digestion regular and feeds gut bacteria. Building a habit of leafy greens, brassicas, courgettes, peppers, avocado and seeds into every main meal fixes constipation before it starts and keeps the diet broader than it looks.

                ## Milestones
                1. Fifteen low-carb vegetables you like listed with net carbs per portion.
                2. At least two portions of vegetables on every lunch and dinner plate.
                3. A weekly count of different plants eaten.
                4. Ground flax, chia or psyllium tried if fibre is still low, after checking with your clinician.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two vegetable portions appear on four out of five main meals across a month, with a weekly plant count logged."
                cadence: rolling
              tasks:
                - "List fifteen low-carb vegetables you will actually eat"
                - "Add two vegetable portions to tonight's dinner"
                - "Count the different plants you ate this week @recurring(weekly:wed)"
                - "Try a spoon of ground flax or chia in yoghurt"
            - name: Saturday protein and vegetable prep session
              description: |-
                ## Purpose
                On keto the meals that save the week are cooked proteins and washed vegetables waiting in the fridge, not frozen dinners. An hour each weekend roasting a tray of chicken thighs, boiling eggs and cutting vegetables means lunch takes two minutes and a tired evening still ends in a low-carb plate.

                ## Milestones
                1. A standard prep list of two proteins, three vegetables and one sauce written.
                2. A one-hour prep slot kept on most weekends.
                3. Containers labelled with contents and day cooked.
                4. Anything uneaten by day four frozen or used, not left to spoil.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekend prep session runs on at least three weekends a month, with labelled protein and vegetables in the fridge."
                cadence: rolling
              tasks:
                - "Write a standard prep list of two proteins, three vegetables and a sauce"
                - "Roast proteins and prepare vegetables for the week @recurring(weekly:sat)"
                - "Buy a set of containers that stack in your fridge"
                - "Label every box with contents and the day it was cooked"
            - name: Monthly body response review
              description: |-
                ## Purpose
                Keto affects people very differently: some feel sharper and sleep better, others feel flat, constipated or train worse. A short monthly review of weight, waist, energy, sleep, digestion and mood against your baseline shows how your own body is responding, and gives you facts to take to your clinician.

                ## Milestones
                1. Weight and waist measured on a fixed morning each month.
                2. Energy, sleep, digestion and hunger scored on the same scale as the baseline.
                3. One change chosen for the coming month based on what the review shows.
                4. Anything worrying, such as palpitations or ongoing dizziness, raised with your clinician.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly review against baseline exists for at least ten months of the year, each ending in one chosen change."
                cadence: rolling
              tasks:
                - "Copy your baseline scores into a monthly review page"
                - "Measure and score yourself against your baseline @recurring(monthly:14)"
                - "Choose one change to try before next month's review"
                - "Book a clinician appointment if any score has worsened for two months"
            - name: Monthly low-carb pantry restock
              description: |-
                ## Purpose
                Nut flours, seeds, olive oil, tinned fish and sugar-free stock are what turn plain protein into proper meals, and running out of them is when people reach for pasta. A once-a-month restock against a fixed list keeps the cupboard ready and lets you buy the dearer items when they are on offer.

                ## Milestones
                1. A pantry list of low-carb staples with a minimum quantity for each.
                2. A monthly check done against the list.
                3. Dearer items such as nuts and nut flours bought in bulk or on offer.
                4. Items that never get used crossed off the list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pantry list has a minimum quantity per item and is checked and restocked in at least ten months a year."
                cadence: rolling
              tasks:
                - "Write a pantry list of low-carb staples with minimum quantities"
                - "Check the pantry against the list and order what is low @recurring(monthly:3)"
                - "Store nuts and nut flours in the fridge or freezer so they keep"
                - "Cross off staples that have sat unopened for three months"
            - name: Blood tests in the first year on keto
              description: |-
                ## Purpose
                Most people see triglycerides fall and HDL rise on keto, but LDL cholesterol rises sharply in a minority, and kidney, liver and uric acid results can shift too. Agreeing a testing schedule with your clinician for the first year means changes are caught and discussed rather than found by chance years later.

                ## Milestones
                1. A testing schedule for the first year agreed with your clinician.
                2. Lipid, kidney, liver and glucose results from each test saved beside the baseline.
                3. Each set of results discussed with your clinician, with their view written down.
                4. A longer-term schedule agreed once results are stable.

                ## Notes
                Ask whether the lab measures LDL directly or calculates it, as the calculation can be less accurate when triglycerides are very low.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three dated sets of blood results in the first year are saved beside the baseline, each with your clinician's comment."
                cadence: cyclic
              tasks:
                - "Ask your clinician how often to test lipids, kidney and liver in year one"
                - "Book the next blood test and the review that follows it @recurring(quarterly)"
                - "Save each result set beside your baseline numbers"
                - "Write down your clinician's view after each set of results"
            - name: One new low-carb recipe a month
              description: |-
                ## Purpose
                Diets that last are the ones where the food keeps getting better. Trying one new low-carb recipe each month, from a different cuisine or technique, adds twelve dishes a year to the repertoire and makes the diet something you cook, not something you put up with.

                ## Milestones
                1. A list of recipes to try kept in one place.
                2. One new recipe cooked each month and rated.
                3. Keepers added to the ten dependable dinners or breakfast rotation.
                4. At least three cuisines represented by the end of the year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten new recipes are cooked and rated in a year, and at least four of them are added to your regular rotation."
                cadence: rolling
              tasks:
                - "Start a list of low-carb recipes you want to try"
                - "Cook and rate one new low-carb recipe @recurring(monthly:22)"
                - "Add any recipe rated eight or higher to your rotation"
                - "Pick next month's recipe from a cuisine you have not tried"
            - name: Understanding ketosis and your meter readings
              description: |-
                ## Purpose
                Nutritional ketosis is often described as a blood ketone level of roughly 0.5 to 3 mmol per litre, but higher is not better and readings swing with exercise, protein and the time of day. Knowing what the numbers mean, and how ketosis differs from ketoacidosis, stops you chasing a reading and tells you when a number is a warning.

                ## Milestones
                1. The difference between nutritional ketosis and ketoacidosis explained in your own words.
                2. The commonly quoted ranges for your meter type written in your log.
                3. Three things that raise or lower readings during a day noted from your own data.
                4. Your clinician's advice on any reading that should prompt a call written down.

                ## Notes
                Ketoacidosis is a medical emergency, mainly in people with type 1 diabetes or on certain diabetes tablets. If you have diabetes, your team's thresholds override anything general.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your log states the ranges for your meter, three factors that move your readings and the threshold your clinician gave."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a reputable explainer on nutritional ketosis and ketoacidosis"
                - "Write the ranges for your meter type at the top of your log"
                - "Take readings before and after a walk to see the effect"
                - "Ask your clinician which reading should prompt a call"
            - name: Low-carb swaps for rice, pasta, bread and potatoes
              description: |-
                ## Purpose
                Missing the starch on the plate is the most common complaint in the first month, and good swaps make familiar meals possible again. Learning to make cauliflower rice, courgette noodles, celeriac mash and a decent low-carb wrap means curry night, bolognese and burgers stay on the menu.

                ## Milestones
                1. Cauliflower rice made two ways and the better method chosen.
                2. Courgette or cabbage noodles cooked without going watery.
                3. A mash from celeriac, swede or cauliflower that the household will eat.
                4. One bread or wrap substitute tested and its carbs per portion noted.

                ## Notes
                Swede and celeriac carry more carbs than cauliflower, so they fit moderate low-carb better than strict keto.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four swaps are tested and written up with method and net carbs per portion, and each has been served at a normal meal."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Make cauliflower rice by grating and by food processor"
                - "Salt and drain courgette noodles before cooking them"
                - "Cook a celeriac or cauliflower mash for the household"
                - "Test one low-carb wrap recipe and note its carbs"
            - name: Keto baking with nut and seed flours
              description: |-
                ## Purpose
                Almond flour, coconut flour and psyllium behave nothing like wheat: coconut flour drinks liquid, almond flour browns fast and nothing forms gluten. Learning three reliable bakes, one bread, one savoury and one sweet, gives you birthday and lunchbox options without ever-more expensive packaged keto products.

                ## Milestones
                1. One loaf or roll recipe using psyllium baked until it holds a sandwich.
                2. One savoury bake, such as crackers or a pizza base, perfected.
                3. One sweet bake suitable for a celebration tested.
                4. Carbs per slice or portion worked out for all three.

                ## Notes
                Nut flours are calorie-dense, so keto baking is easy to overeat. Keep it as a treat rather than a daily staple if weight is your goal.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three nut or seed flour recipes, one bread, one savoury and one sweet, are written up with carbs per portion."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Buy small bags of almond flour, coconut flour and psyllium husk"
                - "Bake a psyllium loaf and note how the crumb holds"
                - "Make a batch of seed crackers for the week's lunches"
                - "Test one celebration bake and record carbs per slice"
            - name: Sweetener and sugar alcohol tolerance test
              description: |-
                ## Purpose
                Erythritol, xylitol, maltitol, stevia and allulose all behave differently: maltitol raises blood sugar more than most, several cause bloating at larger amounts, and xylitol is dangerous to dogs. Testing which ones you tolerate, in small amounts and one at a time, saves expensive products and miserable afternoons.

                ## Milestones
                1. The sweeteners in the products you buy identified from the ingredients.
                2. Each sweetener tried alone in a small amount, with any symptoms noted.
                3. A short list of the sweeteners you will use and the ones you will avoid.
                4. Xylitol stored out of reach if you have a dog.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list names the sweeteners you tolerate and avoid, based on single trials with symptoms recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the ingredients of every sweetened product in the cupboard"
                - "Try one sweetener alone in a small amount and note symptoms"
                - "Write a keep and avoid list for sweeteners"
                - "Move any xylitol products out of a dog's reach"
            - name: Getting protein right on keto
              description: |-
                ## Purpose
                Some keto advice says to keep protein low for fear of knocking you out of ketosis, which can leave people losing muscle along with fat. Agreeing a sensible daily protein range with a dietitian or clinician, then spreading it across meals, protects muscle and keeps hunger down, especially if you are older or training.

                ## Milestones
                1. A daily protein range agreed with a dietitian or clinician for your body and goals.
                2. Protein per portion known for your ten most-eaten foods.
                3. Protein spread across at least three meals rather than one large dinner.
                4. Kidney results checked with your clinician before any large increase.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A protein range agreed with a professional is written down, and a week of logs shows it met across at least three meals a day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a dietitian or your clinician for a daily protein range"
                - "Note the protein per portion of your ten most-eaten foods"
                - "Rework breakfast so it carries a fair share of the day's protein"
                - "Log protein for one week and check it meets the range"
            - name: Ordering low-carb at restaurants and takeaways
              description: |-
                ## Purpose
                Eating out is where most low-carb weeks come undone, usually through bread baskets, sweet sauces and sides nobody asked about. Knowing the safe order at the places you actually go, from the curry house to the burger chain, lets you join in without negotiating with the menu every time.

                ## Milestones
                1. Your five most-visited restaurants and takeaways listed.
                2. A low-carb order worked out for each, using published nutrition information where available.
                3. Three polite phrases ready for swapping chips, rice or bread for salad or vegetables.
                4. One meal out eaten using the plan, with what worked noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved note lists a low-carb order for each of your five most-visited places, used at least once."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the five restaurants and takeaways you use most"
                - "Check each menu's nutrition information for hidden sugar"
                - "Write one low-carb order for each place on your phone"
                - "Try one planned order and note how it went"
            - name: Sauces, dressings and gravies without sugar or flour
              description: |-
                ## Purpose
                Shop-bought sauces are one of the biggest sources of hidden sugar and starch, and a dry plate of chicken is why many people give up. Learning to thicken with reduction, cream, butter or a pinch of xanthan gum, and to balance acid and fat without sugar, makes plain protein feel like a proper meal.

                ## Milestones
                1. A pan sauce made by reducing stock, wine or cream without flour.
                2. A vinaigrette and a creamy dressing you make from memory.
                3. A gravy thickened with xanthan gum or reduction that the family accepts.
                4. Three sauces written up with net carbs per portion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three home-made sauces or dressings are written up with method and net carbs per portion and served at least twice each."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Make a pan sauce by reducing stock and finishing with butter"
                - "Whisk a vinaigrette and taste it for acid and salt"
                - "Thicken a gravy with a small pinch of xanthan gum"
                - "Write up three sauces with their carbs per portion"
            - name: Hidden carb audit of sauces and condiments
              description: |-
                ## Purpose
                Ketchup, sweet chilli, barbecue sauce, balsamic glaze and many salad dressings carry several grams of sugar per spoon, enough to use a large share of a strict keto allowance. Checking the condiment shelf once and replacing the worst offenders often explains a stalled log faster than anything else.

                ## Milestones
                1. Every jar and bottle in the fridge door checked for carbs per typical serving.
                2. The five highest-carb condiments replaced or rationed.
                3. Low-sugar alternatives tasted and the keepers noted on the pantry list.
                4. Spice blends and stock cubes checked for added sugar and starch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every condiment in the kitchen has been checked, and the five highest-carb ones replaced or rationed on a written list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the carbs per tablespoon of every condiment in the fridge"
                - "Mark the five worst offenders and decide replace or ration"
                - "Taste two low-sugar alternatives before buying in bulk"
                - "Check spice blends and stock cubes for sugar and starch"
            - name: Choosing fats with your cholesterol results in mind
              description: |-
                ## Purpose
                Keto is often eaten as butter, cream, bacon and cheese, but the same diet can be built mostly on olive oil, avocado, nuts and oily fish. If your LDL rose on your first blood test, shifting the balance of fats is one of the first things to discuss with your clinician before deciding anything more drastic.

                ## Milestones
                1. Your main fat sources over a typical week listed from your log.
                2. The split between mostly saturated and mostly unsaturated fats estimated.
                3. Your clinician asked whether your lipid results call for a change.
                4. A revised fat list chosen, and a repeat test booked to see its effect.

                ## Notes
                This is a conversation to have with your clinician using your own results, not a reason to stop or start any cholesterol medicine on your own.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on your main fat sources, made with your clinician using your own lipid results, with a repeat test date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your main fat sources from a week of your log"
                - "Estimate how much comes from butter, cream, cheese and fatty meat"
                - "Take your lipid results and fat list to your clinician"
                - "Book a repeat lipid test after any change you make"
            - name: Constipation and digestion fixes on low-carb
              description: |-
                ## Purpose
                Constipation is one of the most common complaints in the first months of keto, usually from less fibre, less fluid and fewer fruits and grains. Working through fluid, salt, vegetables, seeds and magnesium-rich foods in order usually fixes it, and knowing when to see a doctor stops a nuisance from becoming a problem.

                ## Milestones
                1. Bowel habit before and after starting keto noted honestly.
                2. Fluid, vegetables and seeds increased one at a time over two weeks.
                3. Any supplement or laxative chosen only after asking your pharmacist.
                4. Pain, bleeding or a change lasting more than a few weeks raised with your doctor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-week record shows fluid and fibre raised step by step, with any persistent change discussed with a doctor or pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note how often you went before keto and how often now"
                - "Add an extra glass of water and a vegetable portion each day"
                - "Add a spoon of chia or ground flax in the second week"
                - "Ask your pharmacist before taking any laxative or magnesium product"
            - name: Deciding where alcohol fits
              description: |-
                ## Purpose
                Beer, cider and sweet mixers are carb-heavy, dry spirits and dry wine carry few carbs, and many people find alcohol hits harder on keto. Deciding in advance what you will drink, how much and when, rather than at the bar, protects the diet and avoids an unexpectedly rough evening.

                ## Milestones
                1. Your usual drinks listed with approximate carbs per serving.
                2. A personal rule written, such as dry wine only at weekends or alcohol-free for the first month.
                3. Low-carb mixers or alcohol-free options bought for home.
                4. Effects on sleep and next-day ketones noted after the first few drinking occasions.

                ## Notes
                Alcohol can cause low blood sugar in people on insulin or some diabetes tablets, especially with low carbohydrate intake. Ask your clinician before drinking if that applies to you.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written personal alcohol rule exists, and its effect on sleep and readings is noted for at least three occasions."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List your usual drinks and their carbs per serving"
                - "Write a personal alcohol rule for the next three months"
                - "Buy a low-carb mixer or alcohol-free option for home"
                - "Note sleep and next-morning readings after drinking"
            - name: Weight-loss plateau troubleshooting
              description: |-
                ## Purpose
                Early keto weight loss is partly water, so a stall after six to ten weeks is normal and often misread as failure. Working through the usual causes in order, from creeping carbs and extra cheese and nuts to sleep, stress and new medicines, finds the real one instead of cutting carbs further on a guess.

                ## Milestones
                1. The stall confirmed over at least three weeks of waist and weight data, not a few days.
                2. Two weeks of careful logging compared with the early weeks.
                3. Likely causes ranked, such as nut and cheese portions, drinks, sleep or a medicine change.
                4. One change made at a time, with its effect checked after three weeks.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note ranks the likely causes of the stall from logged data and records the one change tried and its result."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Plot three weeks of weight and waist to confirm the stall"
                - "Weigh nuts, cheese and cream for two weeks of logging"
                - "Rank the likely causes from your log and sleep notes"
                - "Change one thing and check the effect in three weeks"
            - name: Strict keto or moderate low-carb at twelve weeks
              description: |-
                ## Purpose
                Twelve weeks is long enough to see how strict keto suits you and short enough to change course before habits set. Comparing your results, blood tests and quality of life against the reasons you wrote down at the start leads to a clear decision: stay strict, loosen to moderate low-carb, or stop.

                ## Milestones
                1. Twelve weeks of logs, monthly reviews and any blood results gathered in one place.
                2. Results compared with the outcomes you said you would judge the diet on.
                3. Your clinician's view sought if blood results or medicines changed.
                4. A decision recorded with a new carb ceiling and review date.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision at about twelve weeks states stay, loosen or stop, the new carb ceiling and the next review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather twelve weeks of logs, reviews and blood results"
                - "Score each original outcome as better, same or worse"
                - "List what you would miss and what you would gladly drop"
                - "Record the decision with a new carb ceiling and review date"
            - name: A session with a dietitian who knows low-carb
              description: |-
                ## Purpose
                Registered dietitians can check a low-carb plan for gaps in fibre, calcium, folate and other nutrients, and tailor protein and carbs to your health and medicines. One session, with your log and blood results in hand, is often worth more than months of online forums.

                ## Milestones
                1. A registered dietitian with low-carb experience found, through your doctor or privately.
                2. A week of food logs and recent blood results sent ahead.
                3. Questions on nutrient gaps, protein and supplements prepared.
                4. Their recommendations written down and the first one acted on.

                ## Notes
                Check the title is protected where you live. In many countries anyone can call themselves a nutritionist, but dietitian is a regulated profession.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A session with a registered dietitian has taken place and their written recommendations are saved, with the first one acted on."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor for a dietitian referral or search the register"
                - "Send a week of food logs and recent blood results ahead"
                - "Write five questions about nutrient gaps and protein"
                - "Act on the dietitian's first recommendation within a week"
            - name: Thirty-day keto trial
              description: |-
                ## Purpose
                A defined thirty-day trial, with a start date, a finish date and a verdict, is easier to commit to than an open-ended lifestyle change. It gets you past the first fortnight and into the weeks where most people start to see whether low-carb suits them.

                ## Milestones
                1. Start and end dates on the calendar, avoiding holidays and big events.
                2. Meals for the first week planned and bought before day one.
                3. Daily carbs logged for at least twenty-five of the thirty days.
                4. A verdict written on day thirty: continue, adjust or stop.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Thirty consecutive days are completed with at least twenty-five days logged and a written verdict on day thirty."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Put the start and end dates in your calendar"
                - "Plan and buy the first week's meals before day one"
                - "Tell the people you eat with what you are trying and why"
                - "Write a continue, adjust or stop verdict on day thirty"
            - name: Twelve-week review with your clinician
              description: |-
                ## Purpose
                Blood sugar, blood pressure and lipids can all move enough in three months to change medicines or the plan itself. Booking the review before you start, and bringing a one-page summary, means the conversation happens on schedule and is based on data rather than memory.

                ## Milestones
                1. An appointment booked for around twelve weeks after your start date.
                2. Any blood tests your clinician wants done a week or two before it.
                3. A one-page summary of logs, readings and symptoms prepared.
                4. Changes to medicines or the plan written down after the appointment.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A clinician review takes place about twelve weeks in, with blood results, a one-page summary and recorded outcomes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the twelve-week review appointment now"
                - "Book any blood tests for a week before the review"
                - "Ask the agent to draft a one-page summary from your logs and reviews"
                - "Write down every change agreed at the appointment"
            - name: Low-carb plan for a celebration meal
              description: |-
                ## Purpose
                Birthdays, weddings and festival meals are built around bread, rice, potatoes and dessert, and arriving without a plan usually ends in eating everything or nothing. Deciding beforehand what you will eat, what you will bring and whether this is a day off makes it possible to enjoy the occasion and return to the plan the next morning.

                ## Milestones
                1. The occasion and its likely menu known in advance.
                2. A decision made: stay low-carb, or a planned day off with a clear return.
                3. One low-carb dish offered to the host or brought along.
                4. The next morning's breakfast and the following day's meals already planned.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The celebration passes with a decision made in advance and low-carb meals logged from the next morning."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the host what is on the menu"
                - "Decide in advance whether this is a low-carb day or a planned day off"
                - "Offer to bring one low-carb dish everyone can share"
                - "Plan the next day's breakfast before you go"
            - name: Travelling on keto
              description: |-
                ## Purpose
                Airports, motorway services and hotel breakfasts are full of bread, pastries and sweet snacks, and a long travel day is where most people break the plan. Packing the right food, researching meals at the destination and accepting a looser target for some days keeps a trip enjoyable rather than a fight.

                ## Milestones
                1. Travel day food packed that survives without a fridge.
                2. A few low-carb meal options found near where you are staying.
                3. Your meter, strips and any medicines packed with spares in hand luggage.
                4. A realistic carb target for the trip set, with a return-to-plan day.

                ## Notes
                Start from the **Trip** template. Check the destination's rules before packing meat or cheese across borders.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The trip is completed with packed travel food, a chosen trip carb target and the return-to-plan day kept."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a trip page from the trip template"
                - "Pack nuts, cheese, jerky or boiled eggs for the travel day"
                - "Find three low-carb meal options near your accommodation"
                - "Pack your meter and medicines with spares in hand luggage"
            - name: Keto and an upcoming operation or procedure
              description: |-
                ## Purpose
                Surgical teams ask about diet for a reason: fasting before an operation on top of keto, especially with certain diabetes tablets, can lead to ketoacidosis, and bowel preparation can upset electrolytes. Telling the team early, and following their instructions on when to pause or change the diet, makes the day safer.

                ## Milestones
                1. The pre-operation team told you follow a ketogenic or low-carb diet.
                2. Written instructions received on diet and medicines before and after the procedure.
                3. Easy recovery meals that fit those instructions planned and stocked.
                4. A plan agreed for when and how to restart low-carb eating.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your surgical team knows about your diet and you hold their written instructions for before and after the procedure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tell the pre-operation team you follow a low-carb diet"
                - "Ask for written instructions on diet and medicines around the procedure"
                - "Stock simple recovery meals that fit those instructions"
                - "Agree when you can return to low-carb eating"
            - name: Keto alongside diabetes medicines
              description: |-
                ## Purpose
                Low-carb diets can lower blood sugar quickly, which is part of their appeal for type 2 diabetes but can cause hypoglycaemia on insulin or sulfonylureas, and ketoacidosis risk on SGLT2 inhibitors. Working out a monitoring and medicine plan with your diabetes team before and during the change keeps the benefits without the danger.

                ## Milestones
                1. Your diabetes team aware of the plan and agreeing a start date.
                2. Written instructions on which medicines change, and when, before carbs drop.
                3. Glucose and, if advised, ketone checks done at the times your team set.
                4. A plan for low readings, illness days and who to call, kept by the fridge.

                ## Notes
                Never reduce or stop a diabetes medicine on your own. Your team will tell you how to adjust as your readings change.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your diabetes team has written instructions for medicines and monitoring on low-carb, and readings are recorded as they asked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book an appointment with your diabetes team before starting"
                - "Ask for written medicine changes and an illness-day plan"
                - "Record glucose at the times your team set @recurring(daily)"
                - "Keep the low-reading and sick-day plan on the fridge"
            - name: One base meal, two ways for a mixed household
              description: |-
                ## Purpose
                Cooking two separate dinners every night is the quickest way for a parent to give up on low-carb. Building meals around a shared protein and vegetables, with rice, pasta, potatoes or bread added on the side for those who want them, keeps one pan on the hob and the family eating together.

                ## Milestones
                1. Six family dinners chosen where the carb element can sit on the side.
                2. A rule agreed with the household that nobody else has to eat keto.
                3. Children's snacks and treats kept on their own shelf.
                4. Each meal tested once and the family's verdict noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six family dinners with a separate carb side are tested and written up, and cooked on most weeknights."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List six family dinners where the carbs can sit on the side"
                - "Agree with the household that nobody else has to eat keto"
                - "Set aside a shelf for children's snacks and treats"
                - "Note the family's verdict after each meal is tested"
            - name: Keto on a tight budget
              description: |-
                ## Purpose
                Keto looks expensive when it means steak, salmon, nut flours and branded snacks, but eggs, tinned fish, chicken thighs, mince, cabbage and frozen vegetables are some of the cheapest foods in the shop. Building a budget version around them makes low-carb workable for students, renters and squeezed families.

                ## Milestones
                1. A weekly food budget set and current spending checked against it.
                2. A cheap staples list built around eggs, tinned fish, cheaper cuts and frozen vegetables.
                3. Packaged keto products replaced by home-made or dropped.
                4. A month of spending compared with the budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A month of low-carb eating is costed and comes in at or under the weekly food budget you set."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set a weekly food budget for low-carb eating"
                - "Write a cheap staples list of eggs, tinned fish and frozen vegetables"
                - "Price your three priciest keto products against home-made versions"
                - "Total the month's food spending against the budget @recurring(monthly:9)"
            - name: Vegetarian keto with enough protein
              description: |-
                ## Purpose
                Without meat or fish, keto leans heavily on eggs, dairy, tofu, tempeh, nuts and seeds, and protein, iron, B12 and variety can fall short. Planning a vegetarian low-carb week deliberately, and checking it with a dietitian if you can, keeps it balanced rather than a diet of cheese.

                ## Milestones
                1. Protein sources that fit both vegetarian and low-carb listed with protein per portion.
                2. A full vegetarian low-carb week planned and cooked.
                3. Protein checked against your agreed daily range.
                4. Iron and B12 raised with your clinician at the next blood test.

                ## Notes
                Vegan keto is possible but tight. A dietitian review is strongly worth it before trying.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A vegetarian low-carb week is planned, cooked and logged, meeting your protein range on at least five of seven days."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List vegetarian low-carb proteins with protein per portion"
                - "Plan seven vegetarian low-carb dinners"
                - "Log protein for that week against your range"
                - "Ask about iron and B12 at your next blood test"
            - name: Low-carb eating for people who train
              description: |-
                ## Purpose
                Strength and endurance often drop for the first few weeks of keto, and high-intensity sessions can stay harder for longer. Planning the adaptation period, tracking a few key sessions and deciding whether to add carbs around hard training lets athletes judge the diet on performance rather than on forum claims.

                ## Milestones
                1. Two benchmark sessions recorded before starting, such as a timed run and a main lift.
                2. Training eased for the first three weeks of adaptation.
                3. Benchmarks repeated at six and twelve weeks.
                4. A decision made, with a coach or sports dietitian if possible, on carbs around training.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Benchmark sessions are recorded before starting and at six and twelve weeks, with a written decision on carbs around training."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record a timed run and a main lift as benchmarks"
                - "Ease training load for the first three weeks"
                - "Note session quality after each hard workout @recurring(weekly:tue)"
                - "Repeat both benchmarks at six and twelve weeks"
            - name: Pausing keto for pregnancy and breastfeeding
              description: |-
                ## Purpose
                Strict ketogenic diets are generally not recommended during pregnancy or breastfeeding without specialist supervision, as the needs of the baby change the picture. Planning how to step out of keto when trying to conceive or on a positive test, with your midwife or doctor, avoids an abrupt change and keeps eating balanced.

                ## Milestones
                1. Your midwife or doctor told you have been eating keto or low-carb.
                2. Their advice on carbohydrate, folate and other nutrients written down.
                3. A gentle plan to bring carbs back over a couple of weeks agreed.
                4. A decision on when, if ever, to revisit low-carb after breastfeeding recorded.

                ## Notes
                If you have diabetes and are pregnant or planning to be, your diabetes and maternity teams should set the plan together.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your midwife or doctor's advice on stepping out of keto is written down and a carb reintroduction plan is agreed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Tell your midwife or doctor you eat a keto or low-carb diet"
                - "Write down their advice on carbs, folate and supplements"
                - "Plan which carbs to bring back first over two weeks"
                - "Record when you will revisit the question after breastfeeding"
            - name: Low-carb eating in later life
              description: |-
                ## Purpose
                Older adults on low-carb diets risk losing muscle and weight they cannot spare, and dizziness from fluid and salt loss can lead to falls. Adapting the diet with enough protein, softer foods if chewing is hard, and a closer eye on weight and medicines keeps the benefits while protecting strength and independence.

                ## Milestones
                1. Your doctor asked about keto alongside current medicines, bones and kidneys.
                2. Protein at every meal, including easy-to-chew options such as eggs, fish and soft cheese.
                3. Weight checked monthly to catch unwanted loss early.
                4. Dizziness on standing or any fall reported to your doctor promptly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A doctor has reviewed the plan, protein appears at every meal and monthly weights show no unplanned loss over six months."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book a review of keto with your medicines and kidneys"
                - "Plan soft, protein-rich options for every meal"
                - "Weigh yourself to catch any unplanned loss @recurring(monthly:25)"
                - "Report any dizziness on standing to your doctor"
            - name: Supporting a child on a medical ketogenic diet
              description: |-
                ## Purpose
                Ketogenic diets are a recognised treatment for some childhood epilepsies, run by a hospital team with recipes calculated to the gram. Parents and carers carry the daily weighing, cooking and recording, and a well-organised kitchen and diary make the regime safer and far less exhausting.

                ## Milestones
                1. The hospital team's prescription, recipes and emergency plan filed in one place.
                2. Accurate gram scales and dedicated equipment in the kitchen.
                3. A daily diary of meals, ketones and seizures kept as the team asked.
                4. Grandparents, school and any carers briefed on what the child can and cannot eat.

                ## Notes
                A medical ketogenic diet must only be run under a specialist team. Never adapt the prescription from general keto advice.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The team's plan is filed, a daily diary is kept, and every adult who feeds the child has been briefed in writing."
                cadence: rolling
              tasks:
                - "File the hospital team's prescription, recipes and emergency plan together"
                - "Buy gram-accurate scales and keep them for the child's food"
                - "Send the diary summary to the keto team @recurring(monthly:17)"
                - "Write a one-page briefing for school, grandparents and carers"
            - name: Glucose and ketone pattern experiment
              description: |-
                ## Purpose
                Experienced low-carb eaters sometimes want to know which meals, workouts and sleep patterns move their own glucose and ketones. A planned two-week experiment, with a short-term glucose sensor or finger-prick readings and a ketone meter, answers specific questions instead of producing a pile of numbers nobody reads.

                ## Milestones
                1. Three specific questions written down before any device is bought.
                2. Readings taken at agreed times alongside meals, sleep and exercise.
                3. Results summarised against each question.
                4. One change to diet or routine made on the strength of the results.

                ## Notes
                If you have diabetes, your team should agree any experiment, and their targets apply. Without diabetes, small glucose rises after meals are normal and not a reason to restrict further.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary answers three written questions using two weeks of glucose and ketone readings, and names one change made."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write three questions the experiment should answer"
                - "Choose a sensor or finger-prick schedule that fits those questions"
                - "Log meals, sleep and exercise beside every reading"
                - "Summarise the answers and choose one change"
            - name: Cyclical or targeted carb experiment
              description: |-
                ## Purpose
                Some experienced keto eaters add carbs around hard training or on one day a week to support performance or make the diet easier to live with. Running it as a defined experiment, with your benchmarks, ketone readings and how you feel recorded, shows whether it helps you or just reopens the cravings.

                ## Milestones
                1. One approach chosen: carbs around training sessions or a weekly higher-carb day.
                2. The amount and type of carbs set in advance.
                3. Four weeks of performance, ketones, hunger and weight recorded.
                4. A decision recorded to keep, adjust or drop the approach.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A four-week experiment with planned carbs is logged and ends in a written keep, adjust or drop decision."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose between carbs around training or a weekly higher-carb day"
                - "Set the amount and type of carbs before starting"
                - "Log performance, ketones, hunger and weight for four weeks"
                - "Record a keep, adjust or drop decision"
            - name: Coming off keto with a carb reintroduction plan
              description: |-
                ## Purpose
                Stopping keto overnight often brings a quick water weight rebound, bloating and a return to old eating, which feels like failure even when it is not. Bringing carbs back in steps, starting with fruit, legumes and whole grains, and watching weight and waist for a few weeks, makes for a calm exit into a sustainable way of eating.

                ## Milestones
                1. A target way of eating chosen for after keto, with a rough daily carb range.
                2. Carbs reintroduced in steps over four to six weeks, starting with whole foods.
                3. Weight, waist and digestion noted weekly through the transition.
                4. Your clinician told if you take medicines that were adjusted for low-carb.

                ## Notes
                Expect a small weight rise in the first week as glycogen and water return. It is not fat regain.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Carbs are reintroduced over at least four weeks to a chosen range, with weekly measures and any medicines reviewed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose the way of eating and carb range you are moving to"
                - "Plan which whole-food carbs to add each week"
                - "Tell your clinician before changing carbs if medicines were adjusted"
                - "Note weight, waist and digestion each week of the transition"
            - name: Personal low-carb playbook
              description: |-
                ## Purpose
                After a year, the useful knowledge is scattered across logs, notes and memory: your carb ceiling, the meals that work, the warning signs, the blood results and what your clinician said. Pulling it into one short playbook means you can restart after a holiday, illness or break in a day rather than relearning it.

                ## Milestones
                1. Your carb ceiling, protein range and electrolyte routine on one page.
                2. Favourite meals, swaps and restaurant orders listed.
                3. Blood result trends and your clinician's standing advice summarised.
                4. A restart plan for after holidays, illness or a break written.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook of no more than four pages covers targets, meals, results, advice and a restart plan, reviewed yearly."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather your targets, routines and favourite meals in one document"
                - "Summarise your blood result trends and clinician advice"
                - "Write a three-day restart plan for after a break"
                - "Review and update the playbook @recurring(yearly)"
---

# Keto & Low-Carb Eating

This area is for anyone trying a ketogenic or lower-carbohydrate diet who wants to do it with a plan, real food and an honest record of how their body responds. It starts with the foundations (a medical check, a chosen carb level, baseline tests, a stocked kitchen, electrolytes and a keto flu plan), then the weekly routines of planning, prepping, logging and reviewing, the cooking and label-reading skills, the decisions about fats, alcohol and how strict to stay, dated events such as the twelve-week review, versions for families, budgets, vegetarians, people who train, pregnancy and later life, and finally specialist work such as supporting a child on a medical ketogenic diet and coming off keto well.

What repeats is a Sunday meal plan and a Saturday prep session, ketone readings twice a week, a daily water and electrolyte tick, a monthly body review and pantry restock, one new recipe a month and blood tests each quarter in the first year. The Purchase decision, Weekly meal plan, Metrics log, Habit tracker and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
