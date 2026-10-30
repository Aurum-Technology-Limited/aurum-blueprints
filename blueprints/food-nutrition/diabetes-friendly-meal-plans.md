---
id: food-nutrition.diabetes-friendly-meal-plans
name: Diabetes-Friendly Meal Plans
description: "Meals that keep blood sugar steadier: guidance from your diabetes team, carbohydrate awareness, a weekly plan and shop, favourite recipes reworked, and plans for festivals, travel, fasting and later life."
category: personal
version: 1.0.0
tags: [food-nutrition, diabetes-friendly-meal-plans, everyone, retiree, blood-sugar, carbohydrate, prediabetes, meal-planning]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - weekly-meal-plan
    - metrics-log
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Diabetes-Friendly Meal Plans
          description: "Planning meals that keep blood sugar steady, with carbohydrate awareness and recipes that suit people with diabetes or prediabetes."
          projects:
            - name: Eating plan brief from your diabetes team
              description: |-
                ## Purpose
                Diabetes advice varies more than most people expect: some teams favour carbohydrate counting, others a plate model or a reduced-carbohydrate pattern, and the right choice depends on your type of diabetes and your medicines. Asking your clinician or nurse for their view in writing, before changing anything at home, means every later meal plan is built on guidance that fits you rather than a magazine article.

                ## Milestones
                1. Five questions about food prepared before the appointment.
                2. The eating approach your team recommends written down in their words.
                3. Any medicine that makes low blood sugar more likely identified, with what that means for meal timing.
                4. A referral to a dietitian or education course requested if one has not been offered.

                ## Notes
                Ask specifically whether cutting carbohydrate quickly could affect your current medicines. Some need adjusting before the diet changes, not after.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written note of the eating approach your diabetes team recommends, including any medicine that affects meal timing, kept with your meal plans."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five questions about food to bring to your next diabetes appointment"
                - "Ask which eating approach the team recommends for you and why"
                - "Ask whether any of your medicines can cause low blood sugar if a meal is late"
                - "Request a dietitian referral if one has not been offered"
            - name: Structured diabetes education course place
              description: |-
                ## Purpose
                Many health services run free group courses for people with type 1 or type 2 diabetes that cover carbohydrate, labels, portions and eating out over a few sessions. People who attend tend to plan meals with far more confidence, yet places often go unclaimed because nobody chased the referral. Securing a place and finishing it gives the rest of this area a shared vocabulary with your team.

                ## Milestones
                1. The courses offered locally, including online versions, identified.
                2. A referral made and every session date in the calendar.
                3. All sessions attended or watched.
                4. The three most useful lessons written down for your meal plans.

                ## Notes
                Courses are usually run through primary care or hospital diabetes services. Ask what is offered for your type of diabetes, and whether a carer or partner can come too.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A structured diabetes education course completed, with the three most useful lessons written beside your meal plans."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask your practice which diabetes education courses are offered locally"
                - "Request a referral and put the session dates in your calendar"
                - "Arrange transport or an online login for every session"
                - "Write the three most useful things you learned after the final session"
            - name: Three-day food and drink diary
              description: |-
                ## Purpose
                Before changing anything, it helps to see what you actually eat and drink, when, and how big the portions are. Three days written down honestly, including one weekend day, show where most of the carbohydrate comes from and which meals already work, which is exactly what a dietitian will ask for at the first appointment.

                ## Milestones
                1. Three days recorded with times, foods, drinks and rough amounts.
                2. At least one weekend or day off included.
                3. The main carbohydrate foods circled on each day.
                4. A one-page summary ready to share with your dietitian or nurse.

                ## Notes
                Write it as you go rather than from memory in the evening. Milk in tea, drinks and late snacks are the items most often missed.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-day food and drink diary, including one day off, with carbohydrate foods marked and a one-page summary ready for your team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose three days, including one day off, to record everything you eat and drink"
                - "Write down each meal, snack and drink with the time and rough amount"
                - "Circle the foods on each day that are mainly carbohydrate"
                - "Ask the agent to summarise the diary into meals, snacks and drinks by time of day"
            - name: Carbohydrate map of your regular meals
              description: |-
                ## Purpose
                Most households rotate around fifteen to twenty meals, and knowing roughly how much carbohydrate each one carries is more useful than any app database. Mapping your real meals, with your real portions, turns carbohydrate awareness from a calculation at every meal into a list you already know by heart.

                ## Milestones
                1. The fifteen meals the household eats most often listed.
                2. The main carbohydrate food and usual portion noted for each.
                3. A rough carbohydrate figure per portion worked out for every meal.
                4. Meals sorted into lighter, moderate and heavier carbohydrate groups.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of at least fifteen regular meals, each with its main carbohydrate food, portion and estimated grams per portion."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the fifteen meals your household eats most often"
                - "Note the main carbohydrate food and usual portion in each meal"
                - "Estimate the carbohydrate per portion using labels or a carbohydrate guide"
                - "Sort the meals into lighter, moderate and heavier carbohydrate groups"
            - name: Plate model for everyday dinners
              description: |-
                ## Purpose
                Filling half the plate with non-starchy vegetables, a quarter with protein and a quarter with starchy carbohydrate is the simplest visual guide many diabetes services teach, and it needs no scales or apps. Setting up your plates and serving habits around it makes portion control automatic for the whole household, rather than a special diet for one person.

                ## Milestones
                1. Dinner plates of a sensible size chosen for everyday use.
                2. Ten non-starchy vegetables the household happily eats listed.
                3. Dinners served using the half, quarter, quarter layout for two weeks.
                4. Three photographed dinners checked against the layout.

                ## Notes
                Ask your team whether the plate model is the right starting point for you. People who match insulin to carbohydrate usually need counting as well.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two weeks of dinners served on the plate model, with three photographed plates showing half vegetables, a quarter protein and a quarter starch."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Measure your dinner plates and set aside ones around 23 to 25 cm across"
                - "List ten non-starchy vegetables the household will happily eat"
                - "Serve the vegetables first, then the protein, then the starchy portion"
                - "Photograph three dinners after a fortnight to check the proportions"
            - name: Choosing kitchen scales and portion tools
              description: |-
                ## Purpose
                Weighing a few portions of rice, pasta, cereal and bread is the fastest way to calibrate your eye, and it needs a scale that reads in single grams with a tare button. A set of measuring cups and a marked serving spoon then let you repeat the right portion without weighing every time.

                ## Milestones
                1. A short list of requirements written: gram precision, tare and a readable display.
                2. Three digital scales compared on price, display and battery.
                3. A scale and measuring cups bought.
                4. One serving spoon or ladle marked as the usual starch portion.

                ## Notes
                Start from the **Purchase decision** template. A large, high-contrast display matters more than extra features if eyesight is a concern.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gram-precise digital scale with a tare button is in the kitchen, and one serving spoon is marked as the usual starch portion."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what the scale needs: gram precision, tare and a readable display"
                - "Compare three digital scales on price, display and battery type"
                - "Buy the scale and one set of measuring cups"
                - "Weigh a usual portion of rice and mark the serving spoon that holds it"
            - name: Kitchen cupboard carbohydrate audit
              description: |-
                ## Purpose
                The foods that quietly push blood sugar up are often the ones bought on autopilot: sweetened cereals, white crackers, cordial and jars of sauce. Going through the cupboards once, label by label, shows which staples to replace and gives you a short swap list for the next shop.

                ## Milestones
                1. Every cupboard and fridge item checked for carbohydrate and sugars per 100 g.
                2. The ten items you most want to replace listed.
                3. A realistic swap chosen for each of the ten.
                4. The swaps added to the core shopping list.

                ## Notes
                Do not throw food away to make a point. Use up what is there and stop rebuying it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written swap list of ten cupboard staples, each with a replacement already added to the shopping list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull out every cereal, cracker, sauce and drink from one cupboard at a time"
                - "Check total carbohydrate and sugars per 100 g on each label"
                - "List the ten items you would most like to replace"
                - "Choose one swap for each and add it to the next shopping list"
            - name: Regular meal times that suit your medicines
              description: |-
                ## Purpose
                Skipped or very late meals cause the biggest swings for many people, and for anyone on insulin or certain tablets they can lead to a low. Agreeing a rough daily pattern of meal times, fitted around work, sleep and medicines, gives the body a predictable rhythm and makes planning the week much easier.

                ## Milestones
                1. Your current eating times on a working day and a day off written down.
                2. Your pharmacist or team asked how your medicine timing relates to meals.
                3. A target window for each main meal written on the meal plan.
                4. A fallback written for what to eat when a meal will be late.

                ## Notes
                Do not move or skip medicine doses to fit a new meal pattern without checking with your clinician or pharmacist first.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written daily meal pattern with a time window for each main meal and a fallback for late meals, checked against your medicines."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the times you usually eat on a working day and a day off"
                - "Ask your pharmacist how your medicine timing relates to meals"
                - "Set a time window for breakfast, lunch and the evening meal"
                - "Write what to eat if a meal is going to be more than an hour late"
            - name: Hypo treatment supplies in the kitchen, bag and car
              description: |-
                ## Purpose
                If you take insulin or tablets that can cause low blood sugar, the treatment your team recommends needs to be within reach wherever you eat, not just in the kitchen drawer. Stocking measured fast-acting supplies in three places, and telling the household where they are, takes an hour and removes a real risk.

                ## Milestones
                1. Your team's advice on what to use for a low, and how much, written down.
                2. Measured supplies stocked in the kitchen, your bag and the car or bedside.
                3. Everyone at home shown where the supplies are kept.
                4. Supplies checked and restocked every month.

                ## Notes
                Follow your own team's hypo plan for what to take and when to recheck. If your treatment does not carry a risk of lows, your team may tell you this project is not needed.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Hypo treatment recommended by your team is stocked in three places, and everyone at home can say where it is kept."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your diabetes team what to use to treat a low and how much"
                - "Pack the recommended treatment in your bag, car and bedside drawer"
                - "Show everyone at home where the supplies are kept"
                - "Check hypo supplies are stocked and in date @recurring(monthly:3)"
            - name: Weekly diabetes-friendly meal plan
              description: |-
                ## Purpose
                Planning the week is where good intentions become dinners: without a plan, the fallback is usually toast, a takeaway or a ready meal heavy in refined carbohydrate. Twenty minutes each weekend to plan the evening meals, balanced across lighter and heavier carbohydrate days, makes the rest of the week easy.

                ## Milestones
                1. A fixed weekly slot for planning in the calendar.
                2. Each plan covering seven evening meals and the week's lunches.
                3. Every dinner checked against the plate model and your carbohydrate map.
                4. Eight consecutive weekly plans completed.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly meal plans, each with seven evening meals checked against the plate model."
                cadence: rolling
              tasks:
                - "Create a weekly meal plan from the template"
                - "Plan next week's meals using the plate model and your carbohydrate map @recurring(weekly:sun)"
                - "Mark one evening a week as a simple fallback meal from the freezer"
            - name: Steady-carb shopping list
              description: |-
                ## Purpose
                A list written from the meal plan, grouped by aisle, keeps the trolley full of vegetables, pulses, whole grains and protein and empty of the impulse buys that turn into evening snacks. Keeping a standing core list of diabetes-friendly staples means you only add the week's extras.

                ## Milestones
                1. A core list of about twenty staples always kept in the house.
                2. The list ordered by the aisles of your usual shop or online order.
                3. Each week's list built from that week's meal plan.
                4. Impulse purchases noted and fewer after a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A core staples list exists and eight weekly shopping lists have been built from the meal plan, with impulse buys noted."
                cadence: rolling
              tasks:
                - "Write a core list of twenty staples you always want in the house"
                - "Build the shopping list from the meal plan @recurring(weekly:fri)"
                - "Note any impulse purchase in the margin to spot patterns after a month"
            - name: Five-breakfast rotation for steady mornings
              description: |-
                ## Purpose
                Breakfast is the meal many people find hardest, because cereals, toast and juice are quick and often heavy in fast carbohydrate. Settling on five breakfasts you like, each with protein or fibre, and always having their ingredients in, removes the morning decision altogether.

                ## Milestones
                1. Your usual weekday breakfast written down with its portion.
                2. Five breakfasts chosen that each include protein or fibre.
                3. Each tried at least once over two weeks.
                4. The ingredients for the rotation on the core shopping list.

                ## Notes
                If readings are often high after breakfast, mention it to your team. Morning readings can rise for reasons other than food.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rotation of five breakfasts, each with protein or fibre, eaten on most mornings for a month with ingredients always in stock."
                cadence: rolling
              tasks:
                - "Write down what you eat for breakfast on a usual weekday"
                - "Choose five breakfasts that each include protein or fibre"
                - "Try each breakfast once over two weeks and keep the ones you enjoy"
                - "Restock the ingredients for the breakfast rotation @recurring(weekly:thu)"
            - name: Freezer meals labelled with carbohydrate per portion
              description: |-
                ## Purpose
                Home-cooked freezer meals beat most ready meals on sugar and salt, but a frozen tub labelled only 'stew' is hard to plan around. Labelling each portion with its date and approximate carbohydrate turns the freezer into a store of meals you can drop straight into a plan on a tired evening.

                ## Milestones
                1. A label format with dish, date and carbohydrate per portion.
                2. One batch of a diabetes-friendly meal cooked and frozen each month.
                3. At least six labelled portions in the freezer at any time.
                4. A freezer list on the door kept up to date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The freezer holds at least six portions, each labelled with dish, date and carbohydrate, for three months running."
                cadence: rolling
              tasks:
                - "Choose a label format with dish, date and carbohydrate per portion"
                - "Cook and freeze one labelled batch of a diabetes-friendly meal @recurring(monthly:14)"
                - "Keep a freezer list on the door and cross portions off as they are eaten"
            - name: Weekly snack box with measured portions
              description: |-
                ## Purpose
                Snacks eaten straight from the packet are where portions drift, especially in the evening. Portioning a week of snacks into small boxes on one day, with nuts, cheese, vegetables, fruit and wholegrain crackers in sensible amounts, keeps between-meal eating deliberate.

                ## Milestones
                1. Your team asked whether your medicines mean you need planned snacks.
                2. Eight snacks you enjoy listed with a portion size for each.
                3. A week of snacks portioned on the same day each week.
                4. Open packets moved out of sight in the cupboard.

                ## Notes
                Some people need planned snacks because of their medicines and others do not need them at all. Ask which applies to you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of pre-portioned snack boxes made, based on a snack list with a portion size for each item."
                cadence: rolling
              tasks:
                - "Ask your team whether your medicines mean you need planned snacks"
                - "List eight snacks you enjoy with a portion size for each"
                - "Portion the week's snacks into small boxes @recurring(weekly:mon)"
                - "Keep the snack boxes at eye level and the open packets out of sight"
            - name: Meal response checks with a metrics log
              description: |-
                ## Purpose
                If you test your glucose or wear a sensor, checking before and a couple of hours after a new meal shows how your body handles it, which no general food list can tell you. Logging meals and readings side by side, at the times your team suggests, builds evidence for which meals to keep and which to adjust.

                ## Milestones
                1. Your team asked whether and when testing around meals is useful for you.
                2. A log with meal, portion, reading before and reading after set up.
                3. Ten meal and reading pairs recorded.
                4. Three meals adjusted or dropped because of what the log showed.

                ## Notes
                Start from the **Metrics log** template. Test only as often as your team advises; extra finger pricks are not needed for everyone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A meal log holding at least ten meal and reading pairs, reviewed monthly, with three meals changed as a result."
                cadence: rolling
              tasks:
                - "Ask your team whether testing before and after meals is useful for you"
                - "Set up a log with meal, portion, reading before and reading after"
                - "Log readings around one new or changed meal each week"
                - "Review the meal log and mark meals to keep or adjust @recurring(monthly:9)"
            - name: Monthly meal plan review
              description: |-
                ## Purpose
                Plans drift: favourite meals creep back in larger portions, new ones never get tried, and the weekly plan quietly becomes the same four dinners. A short monthly look at what was actually eaten, how energy and any readings felt and what was wasted keeps the plan honest without becoming a chore.

                ## Milestones
                1. A monthly review slot fixed in the calendar.
                2. Each month's plans compared with what was actually eaten.
                3. One meal dropped, one adjusted and one new one chosen each month.
                4. Six monthly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews recorded, each naming one meal dropped, one adjusted and one added."
                cadence: rolling
              tasks:
                - "Compare the month's meal plans with what was actually eaten @recurring(monthly:18)"
                - "Choose one meal to drop, one to adjust and one to try next month"
                - "Write a three-line note on energy, hunger and any readings that stood out"
            - name: Fibre count week each quarter
              description: |-
                ## Purpose
                Fibre slows how fast carbohydrate is absorbed, and most adults eat well below the amount health services recommend. Counting fibre for one ordinary week each quarter shows whether the swaps to whole grains, pulses and vegetables are sticking, without logging every day of the year.

                ## Milestones
                1. Your health service's recommended daily fibre for adults written down.
                2. One ordinary week of fibre counted each quarter.
                3. The weekly average compared with the recommendation.
                4. One higher-fibre food added to the plan after each count.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly fibre count weeks completed in a year, each with an average and one higher-fibre addition to the plan."
                cadence: cyclic
              tasks:
                - "Look up your health service's recommended daily fibre for adults"
                - "Count fibre for seven ordinary days and work out the average @recurring(quarterly)"
                - "Add one higher-fibre food to the weekly plan after each count week"
            - name: Drinks swap plan
              description: |-
                ## Purpose
                Sugary drinks, fruit juice, smoothies, sweetened coffees and large milky drinks can carry as much carbohydrate as a meal while barely registering as food. Listing everything you drink in a week and swapping the heaviest few is one of the quickest changes with a visible effect on readings for many people.

                ## Milestones
                1. A week of drinks listed, including coffee shop orders.
                2. The carbohydrate in each drink estimated.
                3. Three swaps chosen and made.
                4. The swaps still in place after a month.

                ## Notes
                Juice and sugary drinks are often part of hypo treatment precisely because they act fast, which is also why they make a poor everyday drink. Check your own plan before removing them from the house.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three higher-carbohydrate drinks replaced with lower-carbohydrate swaps and still replaced one month later."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List every drink you have in a normal week, including coffee shop orders"
                - "Check the carbohydrate in each drink on its label or the chain's website"
                - "Choose three swaps, such as water, unsweetened tea or diet versions"
                - "Keep a jug of water or sparkling water chilled in the fridge"
            - name: Seasonal recipe refresh
              description: |-
                ## Purpose
                Eating the same safe meals for months is the commonest reason people drift back to old habits. Adding three new diabetes-friendly recipes each season, built around what is cheap and fresh at that time of year, keeps the plan interesting while the principles stay the same.

                ## Milestones
                1. Three new recipes found at the start of each season.
                2. Each recipe cooked once with portion and carbohydrate noted.
                3. The favourite of the three added to the regular rotation.
                4. Four seasons of refreshes completed in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve new recipes tested in a year, with at least four added to the regular meal rotation."
                cadence: cyclic
              tasks:
                - "Find three diabetes-friendly recipes using vegetables in season now @recurring(quarterly)"
                - "Cook each new recipe once and note the portion and carbohydrate"
                - "Add the favourite of the three to the regular meal rotation"
            - name: Reading nutrition labels for carbohydrate
              description: |-
                ## Purpose
                Labels give carbohydrate per 100 g and per portion, list sugars separately, and depending on the country count fibre inside or outside the total, which changes the sum. Learning to read the panel quickly, and to compare like with like, makes every shop and every new product easier to judge.

                ## Milestones
                1. Total carbohydrate, sugars and fibre found confidently on any label.
                2. Five pairs of similar products compared using the per 100 g column.
                3. How your country treats fibre in the carbohydrate figure confirmed.
                4. Front-of-pack colour codes and ingredient order understood.

                ## Notes
                Labelling rules differ between countries. A product imported from elsewhere may use a different convention from the rest of your cupboard.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five product pairs compared in writing using the per 100 g figures, with the better choice for each recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find a label and identify total carbohydrate, sugars and fibre"
                - "Compare five pairs of similar products using the per 100 g column"
                - "Look up whether your country includes fibre in the carbohydrate total"
                - "Practise reading the ingredient list order on three breakfast cereals"
            - name: Carbohydrate counting basics
              description: |-
                ## Purpose
                Carbohydrate counting means estimating the grams in a meal; for people adjusting insulin it is a core skill, and for others it is a useful way to understand portions. Working through a carbohydrate guide, weighing common foods and checking your estimates against labels builds real accuracy in a few weeks.

                ## Milestones
                1. A carbohydrate reference book or app chosen, ideally one your team recommends.
                2. Twenty common foods weighed and their usual portion's carbohydrate learned.
                3. Five meal estimates checked against labels and scales.
                4. The trickiest estimates taken to your dietitian.

                ## Notes
                Insulin-to-carbohydrate ratios are set by your diabetes team. This project is about estimating carbohydrate accurately, not about calculating doses.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal list of twenty foods with weighed portions and carbohydrate, plus five checked meal estimates."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a carbohydrate reference book or app recommended by your team"
                - "Weigh twenty common foods and note the carbohydrate in your usual portion"
                - "Guess the carbohydrate in five meals, then check against labels and scales"
                - "Take your trickiest estimates to the dietitian"
            - name: Glycaemic index and load in practice
              description: |-
                ## Purpose
                The glycaemic index ranks how fast a food raises blood sugar, but portion size, cooking, ripeness and what it is eaten with all change the real effect, which is why glycaemic load is often more useful. Understanding both lets you choose between similar foods, such as different breads or rices, without treating any list as a rulebook.

                ## Milestones
                1. The difference between glycaemic index and load explained in your own words.
                2. The glycaemic index of ten staples you buy looked up.
                3. Three lower-index swaps among similar foods chosen.
                4. Notes made on how each swap works at home.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note listing ten staples with their glycaemic index and three chosen swaps, with how each worked in practice."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a reputable explanation of glycaemic index and glycaemic load"
                - "Look up the glycaemic index of ten carbohydrate staples you buy"
                - "Pick three lower-index swaps among similar foods, such as bread or rice"
                - "Note how each swap works in practice at home"
            - name: Cooking starches for a gentler rise
              description: |-
                ## Purpose
                How pasta, rice and potatoes are cooked and served changes how quickly they are digested: pasta cooked al dente, starch served beside vegetables and protein, and starches cooked then cooled all tend to produce a gentler rise. Practising these methods in your own kitchen, and checking them if you monitor, gives you more freedom with foods you might otherwise avoid.

                ## Milestones
                1. Al dente timing for your usual pasta learned by taste.
                2. A batch of rice or potatoes cooked, cooled and reheated safely.
                3. Starches served as a side rather than the base for two weeks.
                4. Any difference in fullness or readings noted.

                ## Notes
                Cooked rice must be cooled quickly and kept in the fridge to avoid food poisoning. Reheat it once only, until piping hot.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three cooking methods for starch tried at home over two weeks, with notes on taste, fullness and any readings."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Cook your usual pasta two minutes less than the packet says and taste it"
                - "Cook, cool and refrigerate a batch of rice or potatoes within an hour"
                - "Serve starches beside vegetables and protein rather than as the base"
                - "Note any difference you see in readings or fullness"
            - name: Sauces and dressings without hidden sugar
              description: |-
                ## Purpose
                Ketchup, sweet chilli, barbecue sauce, stir-fry jars and bottled dressings often carry more sugar than people realise. Learning five house sauces and dressings from scratch, balanced with acid, spice and herbs instead of sugar, removes a hidden source of carbohydrate from dozens of meals a month.

                ## Milestones
                1. The sugar per serving of every sauce and dressing in the fridge checked.
                2. Five homemade sauces and dressings made at least once.
                3. Sweetness balanced with vinegar, citrus, spice or roasted vegetables.
                4. The five recipes written on one card kept by the hob.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five homemade sauces and dressings in regular use, with their recipes on one card, replacing bought versions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check the sugar per serving on every sauce and dressing in the fridge"
                - "Make a vinaigrette, a tomato sauce and a yoghurt dressing from scratch"
                - "Make a stir-fry sauce and a marinade balanced with vinegar, garlic and chilli"
                - "Write the five recipes on one card kept by the hob"
            - name: Baking with less sugar and more fibre
              description: |-
                ## Purpose
                Cakes and biscuits do not have to disappear, but standard recipes are built on white flour and sugar. Learning which swaps actually work, such as part wholemeal or ground almond flour, fruit for some of the sweetness and smaller slices, lets you bake for family occasions without making a separate dessert for one person.

                ## Milestones
                1. Three family bakes chosen to adapt.
                2. An adapted version of each baked and tasted.
                3. The carbohydrate per slice of the best version worked out.
                4. The winning recipe baked for a real family occasion.

                ## Notes
                Reduced-sugar bakes are still carbohydrate. Slice size matters as much as the recipe.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three family bakes adapted, with carbohydrate per slice recorded for the best one and that recipe baked for an occasion."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose three family bakes you would miss most"
                - "Bake an adapted version of each with part wholemeal flour and less sugar"
                - "Work out the carbohydrate per slice of the best version"
                - "Bake the winning recipe for the next family occasion"
            - name: Estimating carbohydrate when eating out
              description: |-
                ## Purpose
                Restaurant portions of rice, pasta, chips and bread are often far larger than at home, and there is no label to read. Practising visual estimates, using chain restaurant nutrition pages and having a go-to dish at the places you visit most makes eating out a pleasure rather than a guess.

                ## Milestones
                1. Published nutrition information found for three places you eat at most.
                2. A go-to dish chosen at each that fits your plate model.
                3. Portion estimates practised against your hand and plate.
                4. Two phrases ready for asking to swap chips or rice for vegetables.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note listing three regular eating places, each with a go-to dish and its estimated carbohydrate."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find published nutrition information for three places you eat at most"
                - "Choose a go-to dish at each that fits your plate model"
                - "Practise estimating portions by comparing them with your hand and plate"
                - "Write two phrases for asking to swap chips or rice for vegetables or salad"
            - name: Pairing carbohydrate with protein, fat and fibre
              description: |-
                ## Purpose
                Carbohydrate eaten alone, such as toast, fruit or crackers on their own, tends to raise blood sugar faster than the same food eaten alongside protein, fat or fibre. Learning simple pairings, and trying the vegetables-first order at meals that some studies support, is an easy change that keeps favourite foods on the menu.

                ## Milestones
                1. The times you eat carbohydrate on its own during a normal day listed.
                2. A protein or fibre partner chosen for each.
                3. Vegetables and protein eaten before starch at dinner for two weeks.
                4. The pairings worth keeping written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of at least five carbohydrate pairings in daily use after a two-week trial."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the times you eat carbohydrate on its own during a normal day"
                - "Choose a protein or fibre partner for each, such as fruit with nuts"
                - "Try eating vegetables and protein before the starch at dinner for two weeks"
                - "Write down which pairings you would keep"
            - name: Sweeteners and sugar alternatives decision
              description: |-
                ## Purpose
                Artificial and natural sweeteners can make the move away from sugary drinks and desserts easier, but evidence on long-term use is mixed and people differ in taste and tolerance. Reading what your health service says, trying the options and deciding where you will and will not use them avoids both blind acceptance and needless worry.

                ## Milestones
                1. Your health service's guidance on sweeteners read.
                2. Three sweeteners tried in drinks, yoghurt or baking.
                3. Any digestive effects from sugar-free products noted.
                4. A short written rule for where you will use sweeteners.

                ## Notes
                Sugar alcohols, common in sugar-free sweets, can cause digestive upset in larger amounts.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on which sweeteners you will use, and where, based on your health service's guidance and your own trial."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's guidance on sweeteners and diabetes"
                - "Try three sweeteners in tea, yoghurt or baking"
                - "Note any digestive effects from sugar-free sweets"
                - "Write where you will use sweeteners and where you would rather cut sweetness"
            - name: Diabetic-labelled foods and shakes review
              description: |-
                ## Purpose
                Products marketed for people with diabetes, from special chocolate to meal replacement shakes, are often expensive, and many health services advise against the specialist sweets. Reviewing what you buy or are tempted to buy, against what your team recommends, frees up money and avoids foods with laxative sweeteners.

                ## Milestones
                1. Every diabetic-labelled or meal replacement product you buy listed.
                2. Your team's view on specialist diabetic foods checked.
                3. The monthly cost of these products worked out.
                4. A keep, replace or stop decision recorded for each.

                ## Notes
                Meal replacement programmes used for type 2 remission are a separate, supervised approach. See the remission project rather than trying them on your own.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of specialist diabetic products with a recorded keep, replace or stop decision and the monthly saving."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List any diabetic-labelled or meal replacement products you buy"
                - "Check what your diabetes team says about specialist diabetic foods"
                - "Work out what these products cost you each month"
                - "Decide which to keep, replace with ordinary food or stop buying"
            - name: Whole grain switch for the household
              description: |-
                ## Purpose
                Swapping white bread, white rice and refined cereals for whole grain versions adds fibre and slows digestion, and it is easier when the whole household switches gradually rather than one person eating different food. Changing one staple a fortnight, with the family's verdict recorded, avoids the revolt a sudden switch can cause.

                ## Milestones
                1. The refined grain staples bought every week listed.
                2. One staple swapped to a whole grain version every two weeks.
                3. The household's verdict on each swap recorded.
                4. At least four swaps kept permanently on the shopping list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least four household staples permanently switched to whole grain versions, with the household's verdicts recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the refined grain staples your household buys every week"
                - "Swap one staple to a whole grain version every two weeks"
                - "Ask the household to rate each swap after a week"
                - "Keep the swaps everyone accepted on the core shopping list"
            - name: Rebuilding three family favourite meals
              description: |-
                ## Purpose
                Lasagne, curry with rice, fish and chips and roast dinners are often what people miss most after a diagnosis. Reworking three favourites, with smaller starch portions, extra vegetables or a part swap such as half cauliflower rice, keeps the meals that matter to the household while changing what is on the plate.

                ## Milestones
                1. Three favourite meals chosen by the household.
                2. An adapted recipe written for each.
                3. Carbohydrate per portion estimated before and after.
                4. Each adapted meal cooked and approved by the household.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three adapted family recipes written with carbohydrate per portion before and after, each cooked and approved by the household."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the household which three meals they would least want to lose"
                - "Ask the agent to suggest lower-carbohydrate adaptations of each recipe"
                - "Cook each adapted version and note the household's verdict"
                - "Write the final recipes with carbohydrate per portion"
            - name: Alcohol plan agreed with your team
              description: |-
                ## Purpose
                Alcohol can lower blood sugar for hours afterwards in people on insulin or certain tablets, while beer, cider and mixers add carbohydrate of their own. Asking your team how alcohol interacts with your treatment and writing a plain plan for social occasions means drinking, if you choose to, is planned rather than risky.

                ## Milestones
                1. Your team asked how alcohol affects your medicines and blood sugar.
                2. The carbohydrate in your usual drinks and mixers noted.
                3. A short plan for nights out written, including eating alongside drinks.
                4. One friend told what a low looks like.

                ## Notes
                The signs of a low can be mistaken for drunkenness. Make sure the people you drink with know you have diabetes and where your treatment is.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan for drinking occasions, based on your team's advice, shared with at least one person you drink with."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your team how alcohol affects your medicines and blood sugar"
                - "Check the carbohydrate in your usual drinks and mixers"
                - "Write a short plan for nights out, including eating alongside drinks"
                - "Tell one friend you drink with what a low looks like"
            - name: Reduced-carbohydrate approach discussion with your clinician
              description: |-
                ## Purpose
                Lower-carbohydrate eating is used by some people with type 2 diabetes and prediabetes, and some health services now support it, but it can lower blood sugar fast enough to need medicine changes first. Weighing it as a decision with your clinician, rather than starting it from a forum post, lets you try it safely or rule it out with reasons.

                ## Milestones
                1. Your reasons for considering fewer carbohydrates written down.
                2. An appointment held to discuss it before any change.
                3. Any medicine adjustments needed agreed in advance.
                4. The decision recorded with a review date.

                ## Notes
                This project is about deciding with your team. For running a ketogenic diet day to day, the Keto and Low-Carb Eating area goes further.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on reduced-carbohydrate eating made with your clinician, recorded with any medicine changes and a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what attracts you to eating fewer carbohydrates"
                - "Book an appointment to discuss it before changing your diet"
                - "Ask whether any medicines would need changing first"
                - "Record the decision and a date to review how it is going"
            - name: Fruit choices and portions
              description: |-
                ## Purpose
                Fruit is often cut out entirely after a diagnosis, losing fibre and vitamins for no good reason, while others eat large amounts believing it cannot affect blood sugar. Agreeing sensible portions, spreading fruit through the day and favouring whole fruit over juice and dried fruit gives a clear middle path.

                ## Milestones
                1. A normal week's fruit, dried fruit and juice listed.
                2. A standard portion looked up for each.
                3. Fruit spread across the day in the meal plan.
                4. Juice and dried fruit swapped for whole fruit where possible.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written fruit plan with portion sizes and timing across the day, reflected in the weekly meal plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the fruit you eat in a normal week, including dried fruit and juice"
                - "Look up a standard portion for each in a carbohydrate guide"
                - "Plan fruit across the day rather than all at once"
                - "Swap dried fruit and juice for whole fruit where you can"
            - name: Festive season eating plan
              description: |-
                ## Purpose
                Christmas, Diwali, Eid, Thanksgiving and family celebrations bring rich food, irregular meal times and well-meaning hosts. Planning the season a few weeks ahead, choosing which treats matter most and bringing a dish you know works lets you enjoy the occasions without weeks of high readings or feeling left out.

                ## Milestones
                1. The season's festive meals and gatherings listed.
                2. The two or three treats that matter most chosen in advance.
                3. A diabetes-friendly dish offered for at least one gathering.
                4. A short note after the season on what to repeat next year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A festive season plan written six weeks ahead each year, with chosen treats, a contributed dish and a note afterwards."
                cadence: cyclic
              tasks:
                - "List the festive meals and gatherings coming up this season"
                - "Choose the two or three treats that matter most to you"
                - "Offer to bring a diabetes-friendly dish you know works"
                - "Plan the festive season meals and contributions six weeks ahead @recurring(yearly)"
            - name: Holiday eating plan for travel abroad
              description: |-
                ## Purpose
                Different cuisines, time zones, long flights and unfamiliar portions all change how meals work on holiday. Researching local dishes, packing snacks and any hypo treatment for the flight or drive, and carrying a translated note about your diabetes makes travel relaxed rather than improvised.

                ## Milestones
                1. Five local dishes researched with their likely carbohydrate.
                2. Snacks and hypo treatment for the flight or drive packed in hand luggage.
                3. A translated card explaining you have diabetes printed.
                4. Your team's advice on meal and medicine timing across time zones written down.

                ## Notes
                Start from the **Trip** template. Ask your team well before departure about timing medicines across time zones.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A holiday food plan with researched dishes, packed travel food and a translated diabetes card ready before departure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Research five local dishes at your destination and their likely carbohydrate"
                - "Pack snacks and any hypo treatment in hand luggage"
                - "Ask the agent to translate a short card explaining you have diabetes"
                - "Ask your team how to time meals and medicines across time zones"
            - name: Religious fasting with diabetes
              description: |-
                ## Purpose
                Ramadan, Yom Kippur, Lent and other fasts change meal times dramatically, and for some people with diabetes fasting carries real risk. A conversation with your team six to eight weeks beforehand, then a plan for the meal before dawn and the meal that breaks the fast, lets you take part as safely as your health allows.

                ## Milestones
                1. A review with your team held six to eight weeks before the fast.
                2. Whether fasting is safe for you this year recorded.
                3. A plan for slow-release pre-dawn meals and gentle fast-breaking meals.
                4. The readings or symptoms at which you must break the fast written down.

                ## Notes
                Many faiths exempt people whose health would be harmed by fasting. Your team can help you think this through alongside your religious adviser.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fasting plan agreed with your team before each fast, including meal plans and written rules for breaking the fast."
                cadence: cyclic
              tasks:
                - "Book a review with your team six to eight weeks before the fast @recurring(yearly)"
                - "Ask whether fasting is safe for you this year and what to change"
                - "Plan slow-release meals for before dawn and a gentle meal to break the fast"
                - "Write down the readings or symptoms at which you must break the fast"
            - name: Celebration meal at a restaurant or wedding
              description: |-
                ## Purpose
                Set menus, late serving times and long receptions are hard to plan around because you choose neither the food nor the clock. Checking the menu and timings in advance, eating a small planned snack if dinner will be late, and deciding beforehand about dessert and drinks keeps a big day a happy one.

                ## Milestones
                1. The menu and serving times known in advance.
                2. A snack planned if the main meal will be later than usual.
                3. Choices about bread, dessert and drinks made beforehand.
                4. Any request passed to the venue before the day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The menu, timings and your choices for a celebration meal confirmed in writing before the day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the host or venue for the menu and serving times"
                - "Plan a small snack if the main meal will be later than usual"
                - "Decide in advance on dessert, bread and drinks"
                - "Let the venue know of any request, such as vegetables instead of potatoes"
            - name: Fasting before a procedure or blood test
              description: |-
                ## Purpose
                Fasting for an operation, scan or blood test can be risky when you take medicines that lower blood sugar, and the instructions you receive are often generic. Asking the clinic for diabetes-specific instructions, planning the last meal and the first one afterwards, and packing something to eat on the way home prevents a low on the day.

                ## Milestones
                1. Diabetes-specific fasting and medicine instructions obtained from the clinic.
                2. The last meal before the fast and the end time planned.
                3. A snack and drink packed for straight after the procedure.
                4. The instructions written where you will see them that morning.

                ## Notes
                Follow the instructions you are given for your medicines on the day. If none mention diabetes, ring the clinic and ask.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Diabetes-specific fasting instructions obtained and followed for the procedure, with a post-procedure snack packed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ring the clinic to ask for fasting instructions that cover your diabetes"
                - "Plan the last meal before the fast starts and what time it ends"
                - "Pack a snack and drink for straight after the procedure"
                - "Write the clinic's medicine instructions where you will see them that morning"
            - name: Cooking for a partner newly diagnosed
              description: |-
                ## Purpose
                When one person in a couple is diagnosed, the other is often the main cook and suddenly unsure what to make. Learning the basics together, agreeing which household meals change, and steering clear of food policing keeps both the relationship and the meal plan in good shape.

                ## Milestones
                1. Your partner asked what help they want and what they would rather manage.
                2. One appointment or education session attended together, if invited.
                3. The household meals that change, and those that stay, agreed.
                4. A signal agreed for when comments about food feel unhelpful.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "An agreed list of household meal changes made with your partner, plus a signal for unhelpful food comments, in use for a month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your partner what help they want with food and what they would rather manage"
                - "Attend one diabetes appointment or education session together if invited"
                - "Agree which household meals will change and which stay as they are"
                - "Agree a signal for when comments about food feel unhelpful"
            - name: Diabetes-friendly cooking for one in retirement
              description: |-
                ## Purpose
                Living alone in later life often means toast, biscuits and tea through the day, especially after a partner who did the cooking has gone. A small repertoire of simple meals for one, cooked in doubles with the second portion frozen, keeps meals regular and carbohydrate steady without hours at the stove.

                ## Milestones
                1. Five simple meals for one chosen that take twenty minutes or less.
                2. A double portion cooked and the second frozen each week.
                3. Backup foods such as eggs, tinned fish and frozen vegetables always in.
                4. Three regular meals a day kept for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of three regular meals a day, supported by five simple recipes for one and a weekly double portion frozen."
                cadence: rolling
              tasks:
                - "Choose five simple meals for one you enjoy and can cook in twenty minutes"
                - "Cook a double portion and freeze the second @recurring(weekly:tue)"
                - "Keep tinned fish, eggs, frozen vegetables and oats in as backup"
            - name: Meals for an older relative with diabetes
              description: |-
                ## Purpose
                Older people with diabetes may lose appetite, forget meals or struggle to cook, and eating too little while on certain medicines can cause lows. Helping a parent or relative with planned meals, easy snacks and a quick weekly look in the fridge supports their independence while catching problems early.

                ## Milestones
                1. Your relative asked what they find hardest about meals now.
                2. Easy meals and snacks that need little cooking stocked.
                3. A weekly check of the fridge and cupboards in place.
                4. Any poor appetite or skipped meals raised with their team, with their permission.

                ## Notes
                Poor appetite or weight loss in an older person on diabetes medicines is worth raising with their clinician, as treatment targets are often relaxed in later life.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Eight weekly food checks completed for your relative, with easy meals stocked and any concerns passed to their team."
                cadence: rolling
              tasks:
                - "Ask your relative what they find hardest about meals now"
                - "Stock easy meals and snacks that need little or no cooking"
                - "Check their fridge and cupboards for food eaten and food going off @recurring(weekly:sat)"
                - "Raise poor appetite or skipped meals with their diabetes team, with their permission"
            - name: Prediabetes first twelve weeks
              description: |-
                ## Purpose
                A prediabetes result is a warning with room to act: for many people, changes to food, activity and weight reduce the chance of developing type 2 diabetes. Twelve weeks of steady changes, starting with drinks, breakfast and starch portions, followed by the repeat test your clinician advises, shows whether it is working.

                ## Milestones
                1. Your test result and recheck date written down.
                2. Eligibility for a diabetes prevention programme checked.
                3. Three food changes made in the first four weeks.
                4. Twelve weeks of meal plans completed.
                5. The repeat blood test booked.

                ## Notes
                Many health services run free prevention programmes for people with prediabetes. Ask whether you qualify.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twelve weeks of meal plans completed after a prediabetes result, with three food changes in place and the repeat test booked."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down your test result and when your clinician wants to recheck it"
                - "Ask whether a diabetes prevention programme is available to you"
                - "Make three food changes in the first four weeks, starting with drinks"
                - "Book the repeat blood test your clinician recommended"
            - name: Gestational diabetes meal plan
              description: |-
                ## Purpose
                Gestational diabetes is usually found in mid-pregnancy and leaves a few months to manage meals around appointments, cravings and nausea. Working with the antenatal diabetes team on a plan for breakfasts, regular snacks and starch portions, and logging meals alongside readings, makes each appointment more useful.

                ## Milestones
                1. A dietitian appointment through the antenatal diabetes team attended.
                2. A meal and snack plan based on the team's portion guidance.
                3. Meals logged next to readings and brought to each appointment.
                4. The date of the follow-up glucose test after the birth noted.

                ## Notes
                Do not restrict food heavily in pregnancy without your team's guidance. Ask about the follow-up test after the birth, as gestational diabetes raises the later risk of type 2.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A meal plan agreed with the antenatal diabetes team followed to the birth, with meals logged against readings for each appointment."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the antenatal diabetes team for a dietitian appointment"
                - "Plan breakfasts and snacks using the team's portion guidance"
                - "Log meals next to your readings to bring to each appointment"
                - "Note when the follow-up glucose test after the birth is due"
            - name: Shift work meal timing with diabetes
              description: |-
                ## Purpose
                Night and rotating shifts scramble meal times, sleep and medicine routines, and the canteen at three in the morning rarely helps. Planning meals for each shift pattern with your team, and packing food that keeps without a fridge, spreads carbohydrate across your waking hours rather than piling it into one meal.

                ## Milestones
                1. Each shift pattern written out with its sleep times.
                2. Your team's advice on meals and medicines for night shifts recorded.
                3. A meal timetable for day, night and rest days.
                4. A list of packed meals and snacks that keep without a fridge.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written meal timetable for each shift type, checked with your team, and a packed food list in use for a full rota cycle."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write out your shift patterns and when you sleep on each"
                - "Ask your team how to time meals and medicines on night shifts"
                - "Draw a meal timetable for day, night and rest days"
                - "List packed meals and snacks that keep without a fridge"
            - name: Personal food response library
              description: |-
                ## Purpose
                Experienced people with diabetes, especially those using a continuous glucose monitor, learn that their own response to porridge, rice or pizza can differ from any published list. Curating a library of tested meals, each with portion, timing and typical response, turns months of readings into a reference you and your team can use.

                ## Milestones
                1. A library format with meal, portion, time of day and typical response.
                2. Twenty tested meals in the library.
                3. Meals that behave differently at breakfast and dinner marked.
                4. The library shared with your team at a review.

                ## Notes
                Discuss surprising patterns with your team rather than adjusting medicines on your own.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A food response library of at least twenty tested meals, shared with your diabetes team at a review."
                cadence: rolling
              tasks:
                - "Set up a library with meal, portion, time of day and typical response"
                - "Add tested meals from your meal response log @recurring(monthly:26)"
                - "Mark meals that behave differently at breakfast and dinner"
                - "Share the library with your team at the next review"
            - name: Remission programme discussion with your clinician
              description: |-
                ## Purpose
                Some people with type 2 diabetes, particularly within a few years of diagnosis, achieve remission through substantial weight loss, sometimes using supervised low-calorie meal replacement programmes. These need clinical supervision because medicines often have to change from the first day. Whether you are a candidate, and what support exists, is a decision to make with your clinician.

                ## Milestones
                1. Your health service's information on remission read.
                2. Your clinician asked whether you could be a candidate.
                3. The supervised programmes available locally identified.
                4. A decision recorded with the support you would need.

                ## Notes
                Never start a very low-calorie programme while on glucose-lowering medicines without your clinician's supervision.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on pursuing type 2 remission, made with your clinician, naming the programme and support if you go ahead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's information on type 2 diabetes remission"
                - "Ask your clinician whether you could be a candidate"
                - "Find out which supervised programmes are available locally"
                - "Record the decision and the support you would need"
            - name: Meal timing around exercise days
              description: |-
                ## Purpose
                Activity lowers blood sugar during and for hours after, which helps but can cause lows for people on insulin or certain tablets, while a walk after a heavy meal can smooth the rise. Planning meals and snacks around your regular active days, with your team's advice, makes exercise easier to keep up.

                ## Milestones
                1. Your regular active days and times marked on the meal plan.
                2. Your team asked whether you need food before or after exercise.
                3. Meals and snacks planned around those sessions.
                4. A short walk after the evening meal tried for two weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A meal plan that marks active days with planned food around them, plus a two-week trial of walking after the evening meal."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark your regular active days and the times you exercise"
                - "Ask your team whether you need extra food before or after exercise"
                - "Plan meals and snacks around those active times"
                - "Try a fifteen-minute walk after the evening meal for two weeks"
            - name: Tested household recipe book
              description: |-
                ## Purpose
                Recipes scattered across magazines, apps and screenshots are easy to lose. A household book of meals you have actually cooked, each with servings, carbohydrate per portion and a note on what worked, becomes the core of every weekly plan and something to pass on to whoever cooks next.

                ## Milestones
                1. One place chosen for the recipe book, paper or digital.
                2. Twenty tested recipes added, each with carbohydrate per portion.
                3. Recipes organised into sections by meal type.
                4. A copy shared with anyone else who cooks for you.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recipe book of at least twenty tested meals, each with carbohydrate per portion, shared with anyone else who cooks for you."
                cadence: rolling
              tasks:
                - "Choose a single place for the recipe book, paper or digital"
                - "Add one tested recipe with its carbohydrate per portion @recurring(monthly:11)"
                - "Ask the agent to format the collection into sections by meal type"
                - "Print or share a copy with anyone else who cooks for you"
            - name: Annual eating plan review with a dietitian
              description: |-
                ## Purpose
                Needs change with age, medicines, weight and new conditions, and an eating plan agreed at diagnosis can be years out of date. A yearly review with a dietitian or diabetes nurse, prepared with your meal plans, food response library and questions, keeps the plan matched to your current treatment.

                ## Milestones
                1. The review requested at the same time each year.
                2. A week of meal plans, the library and three questions prepared.
                3. Every change agreed at the review written down.
                4. The weekly plan updated within a fortnight of the review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A dietitian or nurse review of your eating plan held each year, with agreed changes written down and reflected in the weekly plan."
                cadence: cyclic
              tasks:
                - "Ask for a yearly dietitian or nurse review of your eating plan @recurring(yearly)"
                - "Bring a week of meal plans, the food response library and three questions"
                - "Write down every change agreed and update the weekly plan"
---

# Diabetes-Friendly Meal Plans

This area is for anyone planning meals around type 1, type 2 or gestational diabetes or a prediabetes result, and for the partners and adult children who cook for them. It starts with the foundations (your team's guidance, an education course, a food diary, a carbohydrate map of your meals, the plate model and hypo supplies), then the weekly machinery of planning, shopping, breakfasts, snacks and freezer meals, the skills of label reading, carbohydrate counting and cooking starches, the decisions about sweeteners, alcohol, fruit and lower-carbohydrate eating, the festivals, trips and procedures that need a plan, versions for retirees, carers, shift workers and pregnancy, and finally the food response library and remission conversations of an experienced self-manager.

What repeats is a Sunday meal plan, a Friday shopping list, a Monday snack box, a monthly batch of labelled freezer meals, a monthly plan review and meal log check, a quarterly fibre week and recipe refresh, and the yearly festive, fasting and dietitian reviews. The Purchase decision, Weekly meal plan, Metrics log and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
