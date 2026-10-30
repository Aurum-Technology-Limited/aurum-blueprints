---
id: food-nutrition.high-protein-eating-for-training
name: High-Protein Eating for Training
description: "Enough protein to match your training, mostly from real food: a figure agreed with a professional, a training-week meal plan, post-session and pre-bed routines, and versions for vegetarians, masters, teens and competitors."
category: personal
version: 1.0.0
tags: [food-nutrition, high-protein-eating-for-training, athlete, protein, sports-nutrition, muscle-gain, recovery, strength-training]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: High-Protein Eating for Training
          description: "Hitting daily protein targets with real food and sensible supplements to support muscle gain and recovery for people who train."
          projects:
            - name: Three-day protein intake snapshot
              description: |-
                ## Purpose
                Most people who train guess their protein intake and guess high, usually because dinner is generous while breakfast and lunch are thin. Writing down everything eaten on two training days and one rest day, with a rough protein figure for each meal, shows where the gaps really are before any target is set.

                ## Milestones
                1. Every meal, snack and shake recorded for two training days and one rest day.
                2. A protein figure estimated for each meal from packet labels or a food database.
                3. A daily total for each of the three days written at the bottom of the sheet.
                4. The two meals with the least protein circled as the first ones to fix.

                ## Notes
                This is a snapshot, not a tracking habit. Eat as you normally would; changing your meals because you are writing them down makes the numbers useless.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-day sheet with per-meal protein estimates and daily totals exists, with the two weakest meals identified."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick two training days and one rest day in the coming week to record"
                - "Write down every meal, snack and shake with rough portion sizes"
                - "Look up the protein in each item on the label or a food database"
                - "Total each day and circle the two lowest-protein meals"
            - name: Daily protein figure agreed with a professional
              description: |-
                ## Purpose
                Sports nutrition position stands give a range of grams of protein per kilogram of body weight per day, and where you sit in it depends on your training, your goal, your age and whether you are also trying to lose fat. Agreeing one figure with a sports dietitian, registered nutritionist or well-qualified coach turns a vague plan to eat more protein into a number you can build meals around.

                ## Milestones
                1. Your current body weight, weekly training hours and goal written on one page.
                2. The three-day snapshot brought to the conversation.
                3. A daily protein figure and a rough per-meal figure agreed and written down.
                4. A date set to revisit the figure, such as the end of the next training block.

                ## Notes
                Targets based on total body weight can overshoot for people carrying a lot of body fat; a professional may base yours on a goal weight or lean mass instead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A daily and a per-meal protein figure, agreed with a qualified professional, are written in your plan with a date to review them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a sports dietitian, registered nutritionist or qualified coach you can ask"
                - "Write your weight, weekly training hours and goal on one page"
                - "Ask for a daily protein figure and a per-meal figure that suit you"
                - "Record both figures and a review date at the top of your meal plan"
            - name: Health check before raising protein intake
              description: |-
                ## Purpose
                For most healthy adults a higher protein intake is unremarkable, but kidney disease, some medicines, gout and pregnancy change the picture. A short conversation with your doctor before a big change, especially if you live with any long-term condition, rules out the cases where the plan needs adjusting.

                ## Milestones
                1. Any long-term conditions and regular medicines listed.
                2. Your doctor or practice nurse told about the planned change and asked whether it suits you.
                3. Recent kidney function results checked, or a test requested if your doctor thinks it worthwhile.
                4. The answer, and any limits given, written at the top of the plan.

                ## Notes
                If you already have kidney disease, do not raise your protein intake without your kidney team's agreement.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated record of your doctor's view on raising protein, including any limits, exists from before the change began."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List your long-term conditions and regular medicines"
                - "Book a short appointment or send a message to your practice"
                - "Ask whether a higher protein intake is suitable for you"
                - "Write down any limits or tests your doctor suggests"
                - "Mention your protein intake at your yearly check-up @recurring(yearly)"
            - name: Training week and meal timing map
              description: |-
                ## Purpose
                A protein plan that ignores a 6am swim or a 7pm club session falls apart by Wednesday. Mapping the week's sessions, commute and work blocks shows where four protein feeds can realistically fit and which sessions need food carried in a bag.

                ## Milestones
                1. Every regular training session placed on a weekly grid with start and finish times.
                2. Work, commute and sleep blocks added around them.
                3. Four realistic feeding slots marked on each day, a few hours apart.
                4. Sessions that need food carried with you flagged.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page weekly grid shows sessions, work, sleep and four marked protein feeding slots for each day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every regular session with its day and time"
                - "Add work, commute and usual sleep times to a weekly grid"
                - "Mark four feeding slots a few hours apart on each day"
                - "Flag the sessions where a meal will have to travel with you"
            - name: Protein food reference card
              description: |-
                ## Purpose
                Knowing that a pot of skyr carries roughly 15g of protein and a slice of bread about 4g makes planning a meal a matter of seconds. A card of the twenty foods you actually eat, with protein per usual portion, does the arithmetic once so you never need an app at the table.

                ## Milestones
                1. Your twenty most-eaten protein foods listed.
                2. Each one weighed once at your usual portion, with protein per portion noted.
                3. Foods ordered from most to least protein per portion.
                4. The card stuck on the fridge door or saved on your phone.

                ## Notes
                Weigh meat after cooking and dry foods such as oats and rice before; mixing the two is the commonest source of error.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card listing at least twenty foods with protein per usual portion is on the fridge or saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the twenty protein foods you eat most often"
                - "Weigh your usual portion of each one on a kitchen scale"
                - "Write protein per portion from the label or a food database"
                - "Add new regular foods to the card and remove dropped ones @recurring(quarterly)"
            - name: Core high-protein staples list
              description: |-
                ## Purpose
                When the fridge is empty after a long session, the default becomes toast or a takeaway. A short list of fifteen staples that keep for a week or longer, such as eggs, tinned fish, frozen prawns, Greek yoghurt, frozen edamame, dried lentils and firm tofu, means a decent protein meal is always ten minutes away.

                ## Milestones
                1. Fifteen protein staples chosen across fridge, freezer and cupboard.
                2. Each staple matched to at least one ten-minute meal.
                3. The list added to your regular shopping list or online order favourites.
                4. A minimum quantity set for each, so it is reordered before it runs out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of fifteen protein staples, each with a ten-minute meal and a reorder level, is saved in your shopping list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick five fridge, five freezer and five cupboard protein staples"
                - "Write a ten-minute meal next to each one"
                - "Add the list to your shopping app or online order favourites"
                - "Set a reorder level for each staple"
            - name: Protein-forward breakfast rotation
              description: |-
                ## Purpose
                Breakfast is where most training diets come up short: cereal, toast and coffee rarely get past 10g of protein. Building a rotation of five breakfasts that each reach your per-meal figure, including two you can eat on the move, closes the biggest gap of the day.

                ## Milestones
                1. Five breakfasts chosen that each reach your per-meal protein figure.
                2. At least two of them portable or ready in under five minutes.
                3. Each one eaten at least once and kept or replaced.
                4. The rotation written into the weekly meal plan.

                ## Notes
                Eggs, Greek yoghurt or skyr with oats, cottage cheese on toast, and overnight oats made with milk and a scoop of powder are reliable starting points.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five breakfasts reaching your per-meal protein figure are on the meal plan, and one of them is eaten on most days."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work out the protein in your usual breakfast"
                - "Pick five breakfasts that reach your per-meal figure"
                - "Try each one within the next two weeks"
                - "Swap one breakfast in the rotation for a new one @recurring(monthly:7)"
            - name: Body weight and strength baseline
              description: |-
                ## Purpose
                Without a starting point you cannot tell whether extra protein is doing anything, and scale weight swings by a kilogram or more from day to day with water and food. A two-week average weight, a few tape measurements and your current working weights or times give a fair baseline to compare against in three months.

                ## Milestones
                1. Morning weight recorded on at least ten days over two weeks, and averaged.
                2. Waist, hips, thigh and upper arm measured once with the same tape.
                3. Working weights or benchmark times recorded for three key exercises.
                4. All of it saved in one dated log.

                ## Notes
                Start from the **Metrics log** template. If weighing yourself makes food feel harder, skip the scale and rely on measurements and performance.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline log holds a two-week weight average, four tape measurements and three performance benchmarks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a log from the metrics log template"
                - "Weigh yourself on waking, after the toilet, on at least ten days"
                - "Measure waist, hips, thigh and upper arm with a tape"
                - "Record working weights or times for three benchmark exercises"
            - name: Weekly high-protein meal plan for the training week
              description: |-
                ## Purpose
                Protein targets are met in the plan, not at the fridge door. Twenty minutes each Friday matching next week's sessions to meals, with a protein figure beside each, means the shop buys the right things and heavy training days get the bigger plates.

                ## Milestones
                1. A plan with sessions, meals and a protein column set up.
                2. Each day's planned total checked against your figure before shopping.
                3. Heavy and rest days given different meals rather than the same seven.
                4. Four consecutive weeks planned and shopped for.

                ## Notes
                Start from the **Weekly meal plan** template. Build on the household's meals and add protein to them rather than cooking a separate dinner.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly plans exist, each with daily protein totals at or close to your agreed figure."
                cadence: rolling
              tasks:
                - "Set up a weekly plan from the weekly meal plan template"
                - "Add a protein column and a daily total row"
                - "Draft next week's plan around the training timetable @recurring(weekly:fri)"
                - "Order or buy the protein foods on the plan @recurring(weekly:sat)"
            - name: Sunday protein component prep
              description: |-
                ## Purpose
                Cooking a full meal after an evening session is the point where most plans give way. An hour on Sunday cooking two or three plain protein components, such as a tray of chicken thighs, a pot of lentils and a dozen boiled eggs, gives the week building blocks that become a meal in five minutes.

                ## Milestones
                1. A one-hour Sunday routine producing two or three protein components.
                2. Components stored in labelled containers with the cook date.
                3. A small midweek top-up cook so Thursday and Friday are covered.
                4. Four weeks run without a component going in the bin.

                ## Notes
                Cooked meat and fish keep in the fridge for a limited time only; follow your food safety agency's guidance and freeze what you will not eat in time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two or more cooked protein components are in the fridge by Sunday evening for four weeks running, with none thrown away."
                cadence: rolling
              tasks:
                - "Choose two protein components to cook this Sunday"
                - "Buy enough labelled containers for four days of portions"
                - "Cook and portion this week's protein components @recurring(weekly:sun)"
                - "Cook a small top-up batch for the end of the week @recurring(weekly:wed)"
            - name: Post-training meal routine
              description: |-
                ## Purpose
                The anabolic window is wider than gym folklore claims, but a proper meal within a couple of hours of training still matters, especially after early sessions done on an empty stomach. Deciding a default post-training meal for each session type removes the nightly question and stops the vending machine becoming dinner.

                ## Milestones
                1. A default meal or shake chosen for each regular session type.
                2. Each default reaching your per-meal protein figure, with carbohydrate added after harder sessions.
                3. Ingredients for every default kept in stock.
                4. The default eaten within two hours of at least four in five sessions for a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A default post-training meal exists for each session type and was eaten within two hours of at least 80% of sessions in a month."
                cadence: rolling
              tasks:
                - "List your regular session types and when each one ends"
                - "Pick a default meal or shake for each session type"
                - "Add the ingredients for each default to the staples list"
                - "Set out the post-training food before leaving for each session"
            - name: Pre-bed protein snack routine
              description: |-
                ## Purpose
                Overnight is the longest stretch of the day without food, and studies in trained people suggest a protein snack before bed supports muscle repair while you sleep. A slow-digesting option such as Greek yoghurt, cottage cheese, a glass of milk or casein powder makes the last feed of the day easy to repeat.

                ## Milestones
                1. Two or three pre-bed options chosen that sit well with your sleep.
                2. Each option checked for its protein content.
                3. The snack eaten on at least five nights a week for four weeks.
                4. Any effect on sleep or morning appetite noted.

                ## Notes
                Start from the **Habit tracker** template. If late eating disturbs your sleep or causes reflux, move the snack earlier in the evening.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-bed protein snack was eaten on at least five nights a week for four consecutive weeks, recorded in a habit tracker."
                cadence: rolling
              tasks:
                - "Pick two or three pre-bed protein options you enjoy"
                - "Set up a habit tracker for the evening snack"
                - "Have your pre-bed protein snack @recurring(daily)"
                - "Note any change in sleep or morning appetite after two weeks"
            - name: Protein spread across four meals
              description: |-
                ## Purpose
                Eating most of the day's protein at dinner is common, and research suggests muscle repair responds better when intake is spread over several meals of similar size. Rebalancing so breakfast, lunch, the post-training meal and dinner each carry a fair share often reaches the target without eating more overall.

                ## Milestones
                1. The current split across meals worked out from the three-day snapshot.
                2. A per-meal figure set for four daily feeds.
                3. Breakfast and lunch strengthened, with the dinner portion of meat trimmed if needed.
                4. Three weeks in which at least three meals a day reached the per-meal figure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive weeks, at least three meals a day reached the agreed per-meal protein figure on most days."
                cadence: rolling
              tasks:
                - "Work out your protein split across meals from the snapshot"
                - "Decide which meal needs more and which can carry less"
                - "Tick each meal that reached your per-meal protein figure @recurring(daily)"
                - "Review the ticks at the end of three weeks"
            - name: Gym bag fuel kit
              description: |-
                ## Purpose
                Sessions straight from work, or a long Saturday ride, leave hours between meals unless food travels with you. A packed kit with a shaker, a pre-measured powder portion, a protein snack that survives a warm bag and a water bottle means the gap is covered every time.

                ## Milestones
                1. A kit list of four or five items that keep without a fridge.
                2. A small tub or bag for pre-measured powder portions bought.
                3. The kit restocked weekly so it is never empty.
                4. A month of sessions without buying food on the way home.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The kit has been restocked every week for a month and no post-session food was bought on the way home."
                cadence: rolling
              tasks:
                - "Write a kit list of items that keep without a fridge"
                - "Buy a small powder tub and a leakproof shaker"
                - "Restock the fuel kit and wash the shaker @recurring(weekly:thu)"
                - "Note any session where the kit ran short"
            - name: Weekly protein hit-rate review
              description: |-
                ## Purpose
                Counting every gram forever is tiring and rarely needed once meals are settled. A two-minute Monday check, scoring how many of the last seven days reached your figure, keeps the plan honest without daily logging and shows which day of the week keeps slipping.

                ## Milestones
                1. A simple rule for what counts as a hit, judged against your planned meals.
                2. A weekly score out of seven recorded.
                3. The day that misses most often identified after four weeks.
                4. One change made to that day's plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly scores out of seven are recorded, with the most-missed day named and a fix in place."
                cadence: rolling
              tasks:
                - "Decide what counts as a hit for a day"
                - "Score last week's protein days out of seven @recurring(weekly:mon)"
                - "Find the day of the week that misses most often"
                - "Change that day's plan and check it the following week"
            - name: Monthly gains and intake review
              description: |-
                ## Purpose
                Protein is a means: the point is whether you are getting stronger, recovering well and changing shape in the direction you want. Once a month, putting the weight trend, measurements and performance beside your protein hit rate shows whether the plan is working or whether calories, sleep or training are the real bottleneck.

                ## Milestones
                1. Weekly weights entered in the log and a monthly average worked out.
                2. Measurements and benchmark lifts or times updated each month.
                3. A short verdict each month: on track, adjust the food, or look elsewhere.
                4. Three monthly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly reviews are in the log, each comparing weight trend, measurements and performance with protein hit rate and ending in a decision."
                cadence: rolling
              tasks:
                - "Add a monthly review row to your metrics log"
                - "Weigh yourself on waking and log the number @recurring(weekly:tue)"
                - "Review weight trend, lifts and protein hit rate together @recurring(monthly:4)"
                - "Write one decision at the end of each review"
            - name: Cost per 20g of protein tracker
              description: |-
                ## Purpose
                Protein is the most expensive part of a training diet, and the cheapest sources are rarely the ones in the sports aisle. Working out the price of 20g of protein from each staple, from dried lentils and eggs to whey and chicken breast, shows where the money goes and which swap saves the most.

                ## Milestones
                1. Price per 20g of protein worked out for every staple you buy.
                2. The list sorted from cheapest to dearest.
                3. Two swaps made from expensive sources to cheaper ones of similar quality.
                4. Monthly protein spend compared with the month before.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A sorted list of price per 20g of protein covers every staple, with two swaps made and a monthly spend recorded."
                cadence: rolling
              tasks:
                - "Note pack price, weight and protein per 100g for each staple"
                - "Work out the cost of 20g of protein for each one"
                - "Swap the two dearest staples for cheaper ones of similar quality"
                - "Update prices and the monthly protein spend @recurring(monthly:18)"
            - name: Nutrition check at the end of each training block
              description: |-
                ## Purpose
                Training usually runs in blocks of four to eight weeks ending in a deload, a test or a race. Closing each block with a short look at what you ate, what you lifted or ran and how you recovered means the next block's food changes with the training instead of staying frozen.

                ## Milestones
                1. A review note covering protein hit rate, energy, soreness and performance for the block.
                2. One thing kept, one dropped and one to try in the next block.
                3. The meal plan adjusted for the next block's load.
                4. Three block reviews kept together in one note.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Three end-of-block review notes exist, each naming one thing kept, dropped and tried, with the meal plan updated to match."
                cadence: cyclic
              tasks:
                - "Mark the last week of the current training block in your calendar"
                - "Write a block review covering protein, energy, soreness and results @recurring(monthly:28)"
                - "Pick one thing to keep, drop and try in the next block"
                - "Ask the agent to compare your last three block reviews and list the patterns"
            - name: Protein quality, leucine and complete proteins
              description: |-
                ## Purpose
                Twenty grams of protein from whey, beans or bread do different amounts of work, because foods differ in their amino acid make-up and how well they are digested. Understanding complete proteins, the role of leucine and how combining plant foods closes the gap lets you judge any meal or product without an app.

                ## Milestones
                1. A one-page note explaining essential amino acids, leucine and digestibility in your own words.
                2. Your ten most-eaten protein foods ranked as higher or lower quality.
                3. Two plant food combinations noted that improve a meal's profile.
                4. One regular meal adjusted using what you learned.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on protein quality exists and at least one regular meal has been changed because of it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a reputable explainer on essential amino acids and leucine"
                - "Write a one-page summary in your own words"
                - "Rank your ten most-eaten protein foods by quality"
                - "Change one regular meal based on the ranking"
            - name: Reading a sports nutrition position stand
              description: |-
                ## Purpose
                Most protein claims online trace back to a handful of position stands from sports nutrition and dietetic bodies, and they are often misquoted. Reading one in full, or at least its summary statements, gives you the actual ranges, the evidence on timing and the caveats, so the next forum argument can be settled in five minutes.

                ## Milestones
                1. One current position stand on protein and exercise downloaded.
                2. Its key statements summarised in ten bullet points.
                3. Three claims you had believed checked against it.
                4. The summary saved alongside your training notes.

                ## Notes
                Look for statements from recognised professional bodies in sports nutrition or dietetics, and check the publication date; older ones may have been replaced.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-point summary of a current protein position stand is saved, with three previously held claims checked against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a current position stand on protein and exercise"
                - "Read the summary statements and practical recommendations"
                - "Ask the agent to turn your highlights into a ten-point summary"
                - "Check three claims you believed against the summary"
            - name: Reading protein labels and spotting protein-washed snacks
              description: |-
                ## Purpose
                A bar shouting high protein can carry 10g of protein beside 25g of sugar, and a branded protein yoghurt may cost twice as much as plain Greek yoghurt for a similar amount. Learning to read protein per 100g, protein per 100 kcal and the ingredient list turns supermarket marketing into a quick comparison.

                ## Milestones
                1. The difference between per serving and per 100g figures understood and noted.
                2. A protein per 100 kcal rule of thumb worked out for snacks.
                3. Five products you buy compared with a plainer alternative.
                4. Any product that fails the check dropped or swapped.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five regularly bought products have been compared on protein per 100g and per 100 kcal, with failing ones swapped."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the labels of five protein products you buy"
                - "Work out protein per 100 kcal for each one"
                - "Compare each with a plain food alternative"
                - "Drop or swap any product that fails the comparison"
            - name: Cooking lean meat and fish so it stays juicy
              description: |-
                ## Purpose
                Dry chicken breast is the reason many training diets are abandoned by March. A probe thermometer, a quick brine, resting the meat and knowing when to take fish off the heat make lean protein worth eating five days a week.

                ## Milestones
                1. A probe thermometer bought, with safe internal temperatures for chicken, pork and fish noted from your food safety agency.
                2. Chicken breast cooked three ways, in a pan, in the oven and poached, after a simple brine.
                3. Salmon and a white fish cooked without drying out.
                4. Two methods chosen as your weekly defaults.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Chicken, salmon and a white fish have each been cooked to temperature by thermometer, and two default methods are written in your recipe notes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Buy a probe thermometer"
                - "Look up safe internal temperatures from your food safety agency"
                - "Brine chicken breast and cook it in a pan, the oven and a poaching pot"
                - "Cook salmon and a white fish, checking the temperature as you go"
            - name: Tofu, tempeh and pulses for mixed diets
              description: |-
                ## Purpose
                Even meat eaters gain from cheaper, fibre-rich protein, but soggy tofu and bland lentils put most people off for good. Learning to press and crisp tofu, steam and marinate tempeh, and cook lentils and beans with real flavour adds three or four plant meals a week without anyone feeling short-changed.

                ## Milestones
                1. Tofu pressed and cooked crisp in a pan or oven.
                2. Tempeh steamed, marinated and cooked.
                3. Dried lentils and a batch of beans cooked from scratch and well seasoned.
                4. Three plant protein meals added to the regular rotation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tofu, tempeh or pulse meals that the household will happily eat again are in the regular meal plan rotation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Buy a block of firm tofu and a pack of tempeh"
                - "Press the tofu and pan-fry it until crisp"
                - "Steam and marinate the tempeh before cooking"
                - "Cook dried lentils from scratch and season them properly"
            - name: Quark, skyr and cottage cheese repertoire
              description: |-
                ## Purpose
                Strained dairy carries roughly 10 to 12g of protein per 100g, costs less than most protein products and works in savoury and sweet food alike. A repertoire of eight uses, from cottage cheese pancakes to quark stirred into pasta sauce and skyr dips, keeps it from becoming the same bowl every night.

                ## Milestones
                1. Eight recipes or uses collected, at least four of them savoury.
                2. Each one tried once and rated.
                3. Five favourites added to the meal plan rotation.
                4. Lactose-free alternatives noted if anyone in the house needs them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five tested quark, skyr or cottage cheese dishes are in the rotation, at least two of them savoury."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect eight quark, skyr or cottage cheese recipes"
                - "Cook two savoury and two sweet ones this fortnight"
                - "Rate each one and keep the best five"
                - "Try one new strained dairy recipe @recurring(monthly:21)"
            - name: Tinned fish and seafood quick meals
              description: |-
                ## Purpose
                A tin of tuna, sardines or salmon is about the cheapest, longest-keeping complete protein there is, and frozen prawns cook in four minutes. Six quick meals built around them give you an answer for the night the plan collapses and add oily fish to the week.

                ## Milestones
                1. Six tinned or frozen seafood meals that take fifteen minutes or less written up.
                2. Tins and frozen prawns added to the staples list.
                3. Each meal cooked once and timed.
                4. Two fish meals a week on the plan for a month.

                ## Notes
                Pregnant people and young children have specific advice on some fish; check your health service's guidance on tuna and oily fish.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Six seafood meals under fifteen minutes are written up, and two appear on the plan each week for a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick six quick recipes using tinned fish or frozen prawns"
                - "Add your chosen tins and frozen seafood to the staples list"
                - "Cook each recipe once and note how long it took"
                - "Put two fish meals on next week's plan"
            - name: Home-made high-protein snacks
              description: |-
                ## Purpose
                Shop-bought protein snacks are expensive and often more sweet than useful. Five home-made options, such as baked egg muffins, roasted chickpeas, cottage cheese pots, salted edamame and a no-bake oat and powder bar, give cheaper snacks whose contents you control.

                ## Milestones
                1. Five snack recipes chosen, with protein per portion worked out.
                2. Each one made once and its keeping time noted.
                3. Two favourites made at least fortnightly.
                4. Shop-bought snack spend compared before and after.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five home-made snacks have been made and costed, and two are made at least once a fortnight."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose five home-made protein snacks to try"
                - "Work out the protein per portion of each"
                - "Make two of them this weekend and note how long they keep"
                - "Compare your snack spend before and after one month"
            - name: Choosing a protein powder that suits you
              description: |-
                ## Purpose
                Powder is a convenience, not a requirement, but for many people it is the cheapest way to cover a post-training feed. Choosing between whey concentrate, whey isolate, casein or a plant blend on protein per serving, ingredients, price and independent testing avoids paying for marketing or a tub that upsets your stomach.

                ## Milestones
                1. Your reason for using powder written in one sentence.
                2. Three products shortlisted with protein per serving, price per 20g and testing status.
                3. A sample or small tub tried for two weeks.
                4. One powder chosen and added to the staples list.

                ## Notes
                Start from the **Purchase decision** template. Prefer products certified by an independent testing scheme for banned substances, even if you never compete.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One protein powder is chosen from a scored shortlist of three, with its testing certification and price per 20g recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down why you want a protein powder and when you would use it"
                - "Shortlist three powders and note protein per serving and price"
                - "Check each one against an independent testing scheme"
                - "Buy a small tub or sample of the front runner"
            - name: Creatine decision with your clinician
              description: |-
                ## Purpose
                Creatine monohydrate is the most studied supplement in strength sport, and people often start it on a forum's say-so. Deciding with your doctor or pharmacist whether it suits you, given your kidneys, medicines and sport, and choosing a tested product means the decision is made once and on purpose.

                ## Milestones
                1. What creatine does and does not do summarised from a reputable source.
                2. Your doctor or pharmacist asked whether it is suitable for you.
                3. A product certified by an independent testing scheme identified, if you go ahead.
                4. The decision, yes or no, recorded with the reason.

                ## Notes
                Follow the product label and your clinician's advice on how much to take. A small rise in scale weight at the start is usually water, not fat.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded yes or no on creatine exists, with the reason and your clinician's input, and a tested product named if the answer is yes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a reputable summary of creatine for training"
                - "Ask your doctor or pharmacist whether creatine suits you"
                - "Find a creatine product certified by an independent testing scheme"
                - "Record your decision and the reason for it"
            - name: Protein bar and shake audit
              description: |-
                ## Purpose
                Bars and ready-to-drink shakes creep into a training diet one multipack at a time, and some cost more per gram of protein than steak. Auditing every one you buy on protein per 100 kcal, sugar alcohols that upset digestion and price decides which few are worth keeping for travel and long days.

                ## Milestones
                1. Every bar and shake you buy listed with protein, calories and price.
                2. Each one marked keep, occasional or drop.
                3. No more than three kept as regular buys.
                4. The saving over the next month noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A scored list of bars and shakes exists, with no more than three kept as regular buys and a month's saving noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every protein bar and shake you bought last month"
                - "Note protein, calories, sugar alcohols and price for each"
                - "Mark each one keep, occasional or drop"
                - "Note what you saved after a month"
            - name: Cutting back on processed meat as a protein source
              description: |-
                ## Purpose
                Ham, bacon, salami and sausages are easy protein, but health agencies advise limiting processed meat and it brings a lot of salt with it. Replacing most of it with eggs, fresh chicken, fish, dairy or pulses keeps the protein and loses the downside without a fight at the breakfast table.

                ## Milestones
                1. Processed meat meals in a normal week counted.
                2. A replacement chosen for each one.
                3. Processed meat cut to an occasional meal for four weeks.
                4. The replacements added to the staples list.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Processed meat appears in no more than two meals a week for four consecutive weeks, with replacements on the staples list."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count the meals with processed meat in a normal week"
                - "Choose a fresh or plant replacement for each one"
                - "Rewrite next week's plan with the replacements"
                - "Add the replacements to the staples list"
            - name: Eating enough on high-volume training weeks
              description: |-
                ## Purpose
                Big training weeks blunt appetite at the very moment the body needs more food, and protein slips because there is simply no room. Planning denser meals, liquid options such as milk-based smoothies and an extra snack on the hardest days keeps intake up without forcing down huge plates.

                ## Milestones
                1. The weeks with the highest training load in the next block identified.
                2. Three dense meals or drinks that carry plenty of protein and energy ready for those weeks.
                3. An extra feed added to the hardest days.
                4. Weight and energy checked at the end of the heavy week.

                ## Notes
                Persistent loss of appetite, weight loss or exhaustion during heavy training is worth raising with a doctor or sports dietitian.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A heavy-week eating plan with three dense options and an extra feed was used in the last high-volume week, with weight held steady."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark the heaviest training weeks in the next block"
                - "Pick three dense meals or drinks that are easy to get down"
                - "Add an extra feed to the plan for the hardest days"
                - "Check weight and energy at the end of the heavy week"
            - name: Digestive comfort as protein goes up
              description: |-
                ## Purpose
                More protein often means more dairy, more powder and less room for vegetables, and bloating, wind or constipation follow for some people. Noting which foods cause trouble, trying lactose-free or isolate options and keeping fibre and fluids up usually settles it without dropping the target.

                ## Milestones
                1. Two weeks of digestive symptoms noted beside protein foods and powders.
                2. Likely culprits identified, such as lactose, sugar alcohols or a sudden drop in fibre.
                3. One change tried at a time, for a week each.
                4. Persistent or severe symptoms taken to your doctor.

                ## Notes
                Blood in stools, unexplained weight loss or ongoing pain need a doctor, not a food swap.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-week symptom note exists, the likely culprit has been tested with single changes, and symptoms have settled or been taken to a doctor."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Note digestive symptoms beside protein foods for two weeks"
                - "Look for patterns with dairy, powders or bars"
                - "Change one thing at a time for a week each"
                - "Book a doctor's appointment if symptoms persist"
            - name: Default high-protein orders when eating out
              description: |-
                ## Purpose
                Eating out does not have to cost a day's protein if you already know what to order. A default order at the six places you actually go, such as the café near work, the usual takeaway and the motorway services, makes social meals and travel days easy to fit in.

                ## Milestones
                1. Six places you eat at or order from regularly listed.
                2. A default order at each that reaches your per-meal figure.
                3. The orders saved on your phone.
                4. Each default used at least once.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Default high-protein orders for six regular eating-out places are saved on your phone and each has been used once."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the six places you eat out or order from most"
                - "Check each menu for a dish that reaches your per-meal figure"
                - "Ask the agent to suggest protein add-ons for the weaker menus"
                - "Save the default orders in a note on your phone"
            - name: Twelve-week lean muscle gain block
              description: |-
                ## Purpose
                Building muscle needs enough food overall as well as enough protein, and a modest surplus with a planned end date tends to add less fat than open-ended bulking. A twelve-week block, with calorie and protein figures agreed with your coach or dietitian and a check every four weeks, turns the goal into a time-boxed experiment.

                ## Milestones
                1. Calorie and protein figures for the block agreed with a coach or dietitian.
                2. A target rate of weight gain written down.
                3. Check-ins at weeks four and eight held, with any adjustments recorded.
                4. A week-twelve review comparing weight, measurements and lifts with the baseline.

                ## Notes
                Not a fit if you are also trying to lose fat, are under 18 without a parent and coach involved, or have a history of disordered eating.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A twelve-week block is completed with figures agreed at the start, two recorded check-ins and a final review against the baseline."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree calorie and protein figures for the block with your coach or dietitian"
                - "Write the target rate of weight gain at the top of the log"
                - "Put check-in dates for weeks four and eight in your calendar"
                - "Compare weight, measurements and lifts with the baseline at week twelve"
            - name: First appointment with a sports dietitian
              description: |-
                ## Purpose
                One session with a sports dietitian can settle questions that years of reading never do, but only if you arrive with a food record, your training plan and specific questions. Preparing well turns an expensive hour into a written plan you can follow for months.

                ## Milestones
                1. A registered sports dietitian found and booked.
                2. A three-day food record and weekly training plan sent ahead.
                3. Five specific questions written down.
                4. The plan and next steps written up within a day of the session.

                ## Notes
                Start from the **Meeting notes** template. Check the professional is registered with a recognised dietetic or nutrition body.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A session with a registered sports dietitian has taken place and a written summary of the plan was saved within a day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search a professional register for a sports dietitian, local or online"
                - "Book the first appointment"
                - "Send your food record and training plan ahead of time"
                - "Write five questions to ask in the session"
                - "Write up the plan within a day of the session"
            - name: Competition day food plan
              description: |-
                ## Purpose
                Race, match and meet days are the wrong time to experiment, yet nerves, early starts and venue food push people into it. Writing out the whole day's eating, from the night before to the post-event meal, and rehearsing it before a hard session means nothing new happens on the day.

                ## Milestones
                1. The event timetable written out from wake-up to finish.
                2. Meals and snacks placed around it, including the post-event protein meal.
                3. The plan rehearsed around a hard session at least two weeks before.
                4. Food packed in a labelled bag the night before.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written event-day food plan was rehearsed in training at least two weeks before the event and followed on the day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the event day timetable from wake-up to finish"
                - "Place meals and snacks around the timetable"
                - "Rehearse the plan around a hard training session"
                - "Pack the event food bag the night before"
            - name: Travel and training camp protein plan
              description: |-
                ## Purpose
                Hotels, flights and training camps take away your kitchen, your staples and your routine, and a week of pastries and pasta adds up. Planning what to pack, what to buy on arrival and what to choose at the buffet keeps protein steady through a trip of a few days to two weeks.

                ## Milestones
                1. Packable protein listed for the trip, such as powder portions, tinned fish, jerky and nuts.
                2. A supermarket near the accommodation located.
                3. Default buffet and restaurant choices written down.
                4. The trip completed with protein on target on most days.

                ## Notes
                Check customs rules before carrying meat products or powders across borders.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A packing and eating plan for the trip existed before departure, and protein was on target on most days away."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether the accommodation has a fridge, kettle or kitchen"
                - "Pack powder portions and long-life protein snacks"
                - "Find the nearest supermarket to the accommodation"
                - "Write default buffet choices for breakfast and dinner"
            - name: Ramadan training and protein plan
              description: |-
                ## Purpose
                Training while fasting from dawn to sunset squeezes every meal into a few evening and pre-dawn hours, and protein is easy to lose among dates, sweets and family feasts. Planning suhoor and iftar around your protein figure, and moving sessions to suit the fast, keeps strength and recovery up through the month.

                ## Milestones
                1. Training moved to a time that suits the fast, such as just before or after iftar.
                2. Suhoor and iftar plans that each carry a good share of the day's protein.
                3. A protein snack added between iftar and sleep.
                4. Strength and energy checked at the end of the month.

                ## Notes
                Talk to your doctor before fasting if you have a medical condition or take medicines, and follow your own religious guidance on exemptions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Training times, suhoor and iftar plans with protein figures were written before the month began, and strength was checked at the end."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Decide when to train during the fasting month"
                - "Plan five suhoor meals that carry plenty of protein"
                - "Plan iftar so protein comes early after breaking the fast"
                - "Check strength and energy at the end of the month"
            - name: Vegetarian lifter protein plan
              description: |-
                ## Purpose
                Vegetarians who lift can reach the same targets as meat eaters, but it takes more planning: eggs, dairy, tofu, tempeh, seitan and pulses each need a regular slot. A plan naming a protein anchor for every feed, with lower-quality sources combined, keeps a vegetarian training diet from leaning on bread and cheese.

                ## Milestones
                1. A protein anchor named for each of your four daily feeds.
                2. A weekly plan built with at least three different anchors a day.
                3. Any shortfall in daily protein covered by a tested dairy or plant powder.
                4. Iron checks discussed with your doctor if you feel unusually tired.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four weeks of vegetarian meal plans reach your protein figure, with an anchor named at every feed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the vegetarian protein anchors you enjoy"
                - "Assign an anchor to each daily feed in next week's plan"
                - "Try one new vegetarian protein recipe @recurring(monthly:25)"
                - "Ask your doctor about an iron check if you feel unusually tired"
            - name: Masters athlete protein for strength over fifty
              description: |-
                ## Purpose
                Muscle responds less to each meal with age, so older athletes may need a larger protein serving per meal to get the same effect. Masters runners, rowers and lifters who keep eating the plate they ate at thirty can lose strength they are training hard to keep.

                ## Milestones
                1. Your per-meal figure revisited with a professional, with age in mind.
                2. Breakfast and lunch checked, as these are where older adults most often fall short.
                3. Resistance sessions in the weekly plan agreed with your coach.
                4. Strength benchmarks rechecked after three months.

                ## Notes
                If appetite is poor or weight is falling without trying, see your doctor before changing the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A per-meal protein figure reviewed with age in mind is in the plan, and strength benchmarks have been rechecked after three months."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your dietitian or doctor whether your per-meal figure should change with age"
                - "Check the protein at breakfast and lunch against that figure"
                - "Add a protein-rich food to whichever meal falls short"
                - "Recheck your strength benchmarks after three months"
            - name: Feeding a teenage athlete at home
              description: |-
                ## Purpose
                Teenagers training several times a week are still growing, often need far more food than parents expect, and are targeted online with powders and supplements. Planning family meals, school-day snacks and post-training food around their timetable, with a food-first approach agreed with their coach, covers their needs without a cupboard of supplements.

                ## Milestones
                1. Their weekly training and school timetable mapped.
                2. After-school and post-training snacks that travel well kept in stock.
                3. Family dinners on training nights checked for a decent protein portion.
                4. Any supplement use discussed with their doctor or a sports dietitian first.

                ## Notes
                Watch for skipped meals, rapid weight change or anxiety about food, and talk to their doctor early if you see them.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A training-week food plan for your teenager is in use, and no supplement has been started without professional advice."
                cadence: rolling
              tasks:
                - "Map your teenager's training and school timetable for the week"
                - "Stock three after-school snacks that survive a school bag"
                - "Ask their coach how the club approaches food and supplements"
                - "Check in with your teenager about training food and energy @recurring(monthly:12)"
            - name: Night shift training and protein timing
              description: |-
                ## Purpose
                Shift workers train at odd hours, eat at odd hours and often lean on vending machines and ward biscuits by 3am. Anchoring meals to your waking day rather than the clock, and packing protein for the shift, keeps intake steady across a rotating rota.

                ## Milestones
                1. A meal pattern written for day shifts, night shifts and days off.
                2. A packed shift kit holding two protein feeds.
                3. Training placed where it fits the rota without cutting into sleep.
                4. Four weeks of shifts with protein on target on most days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Meal patterns for each shift type are written down, and four weeks of shifts show protein on target on most days."
                cadence: rolling
              tasks:
                - "Write a meal pattern for day shifts, nights and days off"
                - "Pack two protein feeds for your next run of shifts"
                - "Fit training into the rota without cutting into sleep"
                - "Plan protein meals around next week's rota @recurring(weekly:sat)"
            - name: Protein for endurance runners and cyclists
              description: |-
                ## Purpose
                Endurance athletes tend to fuel carbohydrate well and protein as an afterthought, yet long sessions break muscle down too and recovery between back-to-back days depends on repair. Adding protein to recovery drinks, long-session food and the meals after hard sessions supports that repair without shortchanging the carbohydrate you need.

                ## Milestones
                1. The protein in your current recovery routine checked after long and hard sessions.
                2. A recovery drink or meal with both carbohydrate and protein chosen.
                3. A protein option added to long-ride or long-run food where practical.
                4. A month of notes on how you recover between back-to-back days.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A carbohydrate and protein recovery routine is in place after long and hard sessions, with a month of recovery notes."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check the protein in what you eat after your long session"
                - "Choose a recovery drink or meal with carbohydrate and protein"
                - "Add a protein option to your long session food"
                - "Note how you feel the day after hard sessions for a month"
            - name: Injury layoff protein plan
              description: |-
                ## Purpose
                An injury that stops training is when muscle is lost fastest, and many people cut food and protein together because they feel they have not earned it. Keeping protein up while overall portions come down a little, and training whatever your physiotherapist allows, protects muscle for the comeback.

                ## Milestones
                1. The expected layoff and the activity still allowed agreed with your physiotherapist or doctor.
                2. Protein kept at your figure while other portions are adjusted for lower activity.
                3. Allowed training scheduled for the uninjured parts of the body.
                4. Weight and measurements checked every two weeks during the layoff.

                ## Notes
                Do not start a new supplement for healing without asking your doctor, especially after surgery.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Through the layoff, protein stayed at the agreed figure, permitted training continued and fortnightly checks are recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physiotherapist what training is still allowed and for how long"
                - "Keep the protein figure and trim other portions to match lower activity"
                - "Schedule the training that is still allowed"
                - "Check weight and measurements every two weeks during the layoff"
            - name: Spotting under-fuelling with a sports doctor
              description: |-
                ## Purpose
                Training hard while eating too little, known as relative energy deficiency in sport, affects men and women and can show up as stalled progress, repeated injury, frequent illness, low mood or missed periods. Knowing the warning signs and having a doctor lined up protects health and performance far more than any protein figure.

                ## Milestones
                1. The common warning signs of under-fuelling written on one page from a reputable source.
                2. A monthly self-check against the list set up.
                3. A sports doctor or GP named to contact if two or more signs appear.
                4. Your coach told that you use the list.

                ## Notes
                Missed or stopped periods, repeated stress fractures or rapid weight loss are reasons to see a doctor promptly, not to adjust protein.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A one-page warning signs list is saved, a monthly self-check is running and a named doctor is ready to contact."
                cadence: rolling
              tasks:
                - "Read a reputable summary of under-fuelling in sport"
                - "Write the warning signs on one page"
                - "Run through the under-fuelling warning signs list @recurring(monthly:22)"
                - "Note the doctor or clinic you would contact if signs appear"
            - name: Making weight safely for a weight-class sport
              description: |-
                ## Purpose
                Boxers, judoka, lightweight rowers and powerlifters face weigh-ins, and crash cuts in the final days cost strength and can be dangerous. A gradual plan agreed with your coach and a sports dietitian, with protein held high while weight comes down slowly, gets you to the scale without dehydrating.

                ## Milestones
                1. Your current weight, target class and weigh-in date written down.
                2. A plan agreed with your coach and a sports dietitian, with a weekly target rate.
                3. Protein kept at the agreed figure throughout.
                4. A refuelling meal and drinks planned for after the weigh-in.

                ## Notes
                Severe fluid restriction, saunas and sweat suits are where weight cutting turns dangerous; agree any final-week plan with a professional.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A weight plan agreed with a coach and sports dietitian was followed to the weigh-in, with protein held at the agreed figure."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your current weight, target class and weigh-in date"
                - "Book time with your coach and a sports dietitian to agree the plan"
                - "Set a weekly target rate and check progress against it each week"
                - "Plan the meal and drinks for after the weigh-in"
            - name: Supplement checks for drug-tested sport
              description: |-
                ## Purpose
                Athletes in tested sport are responsible for anything found in their body, and contaminated supplements cause a steady stream of failed tests. Checking every powder, bar and capsule against an independent batch-testing scheme and your anti-doping agency's prohibited list, and keeping receipts and batch numbers, protects your eligibility.

                ## Milestones
                1. Every supplement and sports food you use listed with brand and batch number.
                2. Each batch checked on an independent testing scheme.
                3. Every ingredient checked against your anti-doping agency's prohibited list.
                4. Receipts, batch numbers and label photos kept in one folder.

                ## Notes
                Prescribed medicines need checking too; most anti-doping agencies run an online medicine checker.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds every supplement you use with batch numbers, proof of batch testing and a check against the prohibited list."
                cadence: rolling
              tasks:
                - "List every supplement and sports food you use with brand and batch"
                - "Check each batch on an independent testing scheme website"
                - "Save label photos, receipts and batch numbers in one folder"
                - "Recheck your supplements against the updated prohibited list @recurring(yearly)"
            - name: Body composition scan every six months
              description: |-
                ## Purpose
                Scales cannot tell muscle from fat, and tape measurements only hint at it. A body composition scan, such as DEXA, taken at the same clinic under the same conditions twice a year shows whether lean mass is actually rising and helps decide whether to change protein, calories or training.

                ## Milestones
                1. A scanning provider chosen, with the cost and preparation rules noted.
                2. A first scan taken under the conditions the provider advises.
                3. Lean mass and fat mass recorded in the metrics log.
                4. A second scan taken six months later under the same conditions.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two scans taken six months apart under matching conditions are recorded in the log with a note on what changed."
                cadence: cyclic
              tasks:
                - "Find a scanning provider and note the cost and preparation rules"
                - "Book a morning scan after a rest day"
                - "Record lean and fat mass in your metrics log"
                - "Book the next scan for six months later under the same conditions"
            - name: Personal high-protein recipe book
              description: |-
                ## Purpose
                After a year of training meals most people have thirty dishes that work, scattered across screenshots, notes and memory. Collecting them in one book with protein per portion, prep time and freezing notes makes planning quicker and gives you something to hand a partner or training mate.

                ## Milestones
                1. Thirty tested recipes gathered in one place.
                2. Protein per portion, prep time and freezing notes added to each.
                3. Recipes tagged by meal slot: breakfast, post-training, dinner or pre-bed.
                4. The book shared with one other person who trains.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recipe book of thirty tested dishes, each with protein per portion and prep time, exists and has been shared once."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather every high-protein recipe you have cooked more than twice"
                - "Ask the agent to format them with protein per portion and prep time"
                - "Tag each recipe by meal slot"
                - "Share the finished book with a partner or training mate"
            - name: Club training night fuelling station
              description: |-
                ## Purpose
                Clubs and small squads often train straight after school or work, and half the group turns up having eaten nothing since lunch. A simple fuelling station with milk, yoghurt pots, fruit and a few bars, costed and funded through subs, helps everyone recover and is a practical job for a volunteer.

                ## Milestones
                1. The station and a budget agreed with the coaches and committee.
                2. A stock list of cheap options with low allergy risk agreed.
                3. Allergy information gathered through the club's welfare lead.
                4. The station run for a full term with costs reported.

                ## Notes
                Label everything clearly for allergens and keep chilled items cold. Ask the welfare lead about any rules for young members.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A fuelling station has run for a full term within the agreed budget, with allergens labelled and costs reported to the committee."
                cadence: rolling
              tasks:
                - "Propose the station and a budget to the coaches and committee"
                - "Agree a stock list with clear allergen labels"
                - "Collect allergy information through the club's welfare lead"
                - "Restock the club fuelling box @recurring(monthly:15)"
---

# High-Protein Eating for Training

This area is for anyone who trains, from gym regulars and club players to runners, riders and fighters, and wants their eating to match the work. It starts with the foundations (a three-day snapshot, a protein figure agreed with a professional, a health check, a timing map, a food reference card and a stronger breakfast), then the weekly machinery of planning, prepping and post-training and pre-bed routines, the cooking skills that make lean protein worth eating, decisions about powders, creatine, bars and a muscle gain block, dated events such as a dietitian appointment, competition day, travel and Ramadan, versions for vegetarians, masters athletes, teenagers, shift workers, endurance athletes and the injured, and finally the specialist work of making weight, tested supplements, body composition scans and fuelling a club.

What repeats is a Friday meal plan and Saturday shop, a Sunday protein prep with a Wednesday top-up, a Thursday gym bag restock, a Monday hit-rate score, a monthly review of weight, lifts and intake, and a check at the end of every training block. The Metrics log, Weekly meal plan, Habit tracker, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
