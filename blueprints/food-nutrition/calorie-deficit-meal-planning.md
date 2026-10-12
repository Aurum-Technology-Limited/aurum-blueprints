---
id: food-nutrition.calorie-deficit-meal-planning
name: Calorie Deficit Meal Planning
description: "A calorie target you can live with: a safe rate agreed with your clinician, filling meals that fit the numbers, weekly plans and weight trends, and a planned route back to maintenance."
category: personal
version: 1.0.0
tags: [food-nutrition, calorie-deficit-meal-planning, everyone, fat-loss, meal-planning, satiety, portion-control, weight-maintenance]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Calorie Deficit Meal Planning
          description: "Planning filling, sustainable meals within a calorie target for steady fat loss without crash dieting or constant hunger."
          projects:
            - name: Health check before starting a calorie deficit
              description: |-
                ## Purpose
                Anyone taking diabetes medicines, blood pressure tablets or blood thinners, anyone pregnant or breastfeeding, and anyone with a history of disordered eating needs a conversation with a doctor before cutting food intake. Even without those, a short appointment gives you a weight, a blood pressure reading and a professional view of a sensible target, which makes everything that follows safer and easier to adjust.

                ## Milestones
                1. An appointment booked with your doctor, practice nurse or a registered dietitian.
                2. A list of current medicines and conditions brought to the appointment.
                3. Their view on a safe rate of loss and any lower calorie limit written down.
                4. Any blood tests or checks they suggest booked or completed.

                ## Notes
                If counting food has ever made you anxious or led to bingeing, say so at this appointment. A dietitian can plan a deficit that does not rely on daily numbers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A doctor or dietitian has been consulted before the first deficit week, and their advice on rate of loss and any limits is written in your plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of your current medicines, supplements and conditions"
                - "Book an appointment with your doctor, practice nurse or a registered dietitian"
                - "Ask whether any of your medicines need watching as you eat less"
                - "Record their advice on a safe rate of loss in your plan"
            - name: Three-day snapshot of what you eat now
              description: |-
                ## Purpose
                Most people underestimate what they eat by a wide margin, and the gap is usually in drinks, cooking oil, finishing the children's plates and weekend evenings. Writing down everything eaten on two weekdays and one weekend day, without changing anything, shows where a deficit can come from with the least pain.

                ## Milestones
                1. Everything eaten and drunk on two weekdays and one weekend day written down with rough amounts.
                2. Each day entered into a calorie app or nutrition database for an estimated total.
                3. The five highest-calorie items or habits across the three days listed.
                4. Two or three easy cuts chosen from that list for the first deficit week.

                ## Notes
                Eat exactly as usual during these three days. Recording a tidier version of your diet hides the habits you most need to see.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three days of normal eating are recorded with estimated totals, and the five biggest calorie sources are listed with two or three chosen cuts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick two typical weekdays and one weekend day for the snapshot"
                - "Photograph or note everything you eat and drink on those days, including tastes"
                - "Enter the three days into a calorie app or nutrition database for estimated totals"
                - "List the five items or habits that added the most calories"
            - name: Maintenance calories and a starting target
              description: |-
                ## Purpose
                Your deficit is measured from maintenance, the intake that keeps your weight steady, and online calculators can be out by several hundred calories either way. Pairing a calculator estimate with your three-day snapshot and recent weight trend gives a starting figure grounded in your own body, which you then check with your clinician.

                ## Milestones
                1. A maintenance estimate from a recognised calculator using your height, weight, age and activity.
                2. That estimate compared with your three-day snapshot total and recent weight trend.
                3. A starting daily calorie target and the weekly total it implies written down.
                4. The target checked with your doctor or dietitian if you have any medical conditions.

                ## Notes
                Pick the lower activity level if in doubt. Most people overestimate how active they are, and the error shows up as a deficit that never appears on the scale.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A maintenance estimate and a starting calorie target are written in your plan, with the method used and the date they were set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Run your details through a maintenance calorie calculator at a lower activity level"
                - "Compare the result with your three-day snapshot total"
                - "Write down a starting daily target and the weekly total it implies"
                - "Note today's date so you can judge the target after four weeks"
            - name: Safe rate of loss and a first twelve-week goal
              description: |-
                ## Purpose
                Crash diets fail because the rate they demand cannot be held through a normal month of birthdays, illness and tiredness. Setting a modest weekly rate with your clinician and a twelve-week goal, rather than a final weight a year away, gives you a target close enough to plan meals for and a checkpoint to adjust at.

                ## Milestones
                1. A weekly rate of loss agreed with your clinician or taken from published guidance.
                2. A twelve-week goal weight or waist measurement set from that rate.
                3. A review date twelve weeks out written in your calendar.
                4. A note of what you will do if progress is faster or slower than planned.

                ## Notes
                Expect week one to drop more than the rest because of water and food in the gut. Judge the rate from week three onwards.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weekly rate of loss and a twelve-week goal are written in your plan, with the review date already in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician what weekly rate of loss suits you"
                - "Multiply that rate by twelve to set a first goal"
                - "Put the twelve-week review date in your calendar"
                - "Write what you will change if progress is too fast or too slow"
            - name: Starting weight, waist and photo baseline
              description: |-
                ## Purpose
                Daily weight swings by a kilo or more with salt, hormones and what is still in your gut, so a single weigh-in on day one is a poor starting point. A seven-day average, a waist measurement and two photos give you three separate baselines, which matters on the weeks when the scale stalls and the tape measure does not.

                ## Milestones
                1. Seven morning weigh-ins taken under the same conditions and averaged.
                2. Waist measured at the navel and recorded with the date.
                3. Front and side photos taken in the same light and clothing.
                4. All three baselines saved in one log you will keep using.

                ## Notes
                Start from the **Metrics log** template. Weigh after the toilet and before eating or drinking, on a hard floor, so every later reading is comparable.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A seven-day average weight, a dated waist measurement and two baseline photos are saved together in one log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Put the bathroom scale on a hard floor and check it reads steadily"
                - "Weigh each morning for seven days before eating or drinking"
                - "Measure your waist at the navel and write down the figure"
                - "Take front and side photos in the same spot and light"
            - name: Choosing how precisely to count calories
              description: |-
                ## Purpose
                Some people do best weighing every ingredient, while others lose weight with no app at all by following a fixed menu or a plate method. Choosing your level of precision deliberately, rather than defaulting to the strictest, makes it far more likely you are still planning meals this way in month four.

                ## Milestones
                1. Three approaches compared: weighing and counting, a counted fixed menu, and a portion plate method.
                2. Each judged against your time, temperament and any history of food anxiety.
                3. One approach chosen for the first eight weeks.
                4. A digital kitchen scale in the kitchen if the chosen approach needs one.

                ## Notes
                Detailed daily food logging has its own area. Here the question is only how much measuring your meal plan needs before you can trust it.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One counting approach is chosen for the first eight weeks and written in your plan, with any equipment it needs already in the kitchen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what you liked and hated about any past diets that involved counting"
                - "Try the plate method for one dinner and a counted recipe for another"
                - "Choose the approach you will use for the next eight weeks"
                - "Buy a digital kitchen scale that reads in single grams if you need one"
            - name: Calorie budget split across meals and snacks
              description: |-
                ## Purpose
                A daily target only becomes a meal plan once you decide how it is shared out, and a split that leaves a tiny dinner when the family eats together at seven will not last. Dividing the budget around when you are hungriest, and where shared meals sit, gives every recipe a number to fit.

                ## Milestones
                1. Your hungriest times of day noted from the three-day snapshot.
                2. A per-meal and snack budget written for weekdays.
                3. A separate split written for weekends if your days differ.
                4. A small unallocated buffer kept for milk, condiments and tastes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of the daily calorie target across meals and snacks exists for weekdays and weekends, with a named buffer."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark the times of day you felt hungriest in your snapshot"
                - "Give your main shared meal its budget first"
                - "Divide the rest between breakfast, lunch and any snacks"
                - "Set aside a small buffer for milk in drinks, sauces and tastes"
            - name: Ten filling meals within your per-meal budget
              description: |-
                ## Purpose
                Meal plans fall apart when the only meals that fit the numbers are ones you do not want to eat. Building a short list of ten meals you already like, each adjusted and costed to sit inside your per-meal budget with a generous plate of food, gives the weekly plan something to draw on from day one.

                ## Milestones
                1. Ten meals listed across breakfast, lunch and dinner that you genuinely enjoy.
                2. Each meal's calories estimated from weighed ingredients for one portion.
                3. Meals over budget adjusted with more vegetables, leaner protein or less fat rather than smaller plates.
                4. The ten meals written on one page with portion weights and calorie estimates.

                ## Notes
                Aim for meals that look generous. A plate that looks mean is a plate you will top up later from the cupboard.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page list of ten enjoyed meals exists, each with portion weights and a calorie estimate inside your per-meal budget."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down ten meals you would happily eat every fortnight"
                - "Weigh the ingredients the next time you cook each one"
                - "Estimate the calories per portion with a recipe calculator"
                - "Rework any meal over budget by adding vegetables or cutting the fat"
            - name: Kitchen and cupboard reset for the deficit
              description: |-
                ## Purpose
                Willpower is weakest at nine in the evening when the biscuits are at eye level. Spending an hour moving high-calorie snacks out of sight, putting fruit and prepared vegetables where you look first, and stocking a few low-calorie staples changes what you reach for without a single decision.

                ## Milestones
                1. Snack foods moved to a high cupboard, an opaque box or out of the house.
                2. Fruit and ready-to-eat vegetables placed at eye level in the fridge and on the counter.
                3. A short list of low-calorie staples stocked, such as broth, tinned tomatoes, eggs and frozen vegetables.
                4. Everyday plates and bowls chosen at a size that makes a planned portion look full.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Snack foods are out of sight, fruit and vegetables are at eye level, and a written list of low-calorie staples is stocked in the kitchen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Move biscuits, crisps and chocolate into one closed box on a high shelf"
                - "Wash and cut a tub of crunchy vegetables for the front of the fridge"
                - "Stock tinned tomatoes, broth, eggs and two bags of frozen vegetables"
                - "Swap oversized dinner plates for a smaller set you already own"
            - name: First week of deficit meals planned in full
              description: |-
                ## Purpose
                The first seven days decide whether the plan feels possible, so they deserve more care than any later week. Writing every meal and snack for the week from your ten-meal list, with the shop done and the first day's food prepared, means the week starts with nothing left to decide.

                ## Milestones
                1. Breakfast, lunch, dinner and snacks written for seven days, inside your daily targets.
                2. A shopping list built from the plan and the shop done.
                3. Day one's meals prepared or ready to cook.
                4. A note at the end of the week of which meals worked and which left you hungry.

                ## Notes
                Start from the **Weekly meal plan** template. Repeat meals freely in week one; variety can come later.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A full seven-day meal plan within target has been written, shopped for and followed, with a short review written at the end of the week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a start day that is not a birthday, holiday or late work night"
                - "Fill in seven days of meals from your ten-meal list"
                - "Build the shopping list from the plan and do the shop"
                - "Write down which meals left you hungry at the end of the week"
            - name: Weekly deficit meal plan and shop
              description: |-
                ## Purpose
                Once the first week is done the plan has to happen every week, in about thirty minutes, or it lapses. A fixed Saturday slot to plan from your meal list, check the week against your calorie budget and order the shop keeps the deficit running through busy and boring weeks alike.

                ## Milestones
                1. A standing weekly planning slot in your calendar.
                2. Each week's plan built mostly from tested meals, with at most one new recipe.
                3. The week's planned total checked against your weekly budget before shopping.
                4. A shopping list that matches the plan, with no unplanned snack lines.

                ## Notes
                Start from the **Weekly meal plan** template. Planning to the week rather than the day lets a bigger Saturday dinner be balanced by lighter weekday lunches.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A meal plan within the weekly calorie budget has been written before the shop for at least eleven of the last twelve weeks."
                cadence: rolling
              tasks:
                - "Write next week's meals and snacks from your tested list @recurring(weekly:sat)"
                - "Order or do the weekly shop from the plan @recurring(weekly:sun)"
                - "Check the planned week adds up to no more than your weekly calorie budget"
                - "Keep a running list of meals to try so planning starts with ideas"
            - name: Weekly weight trend review
              description: |-
                ## Purpose
                Judging progress from one weigh-in leads to panic on heavy days and complacency on light ones. Weighing each morning and comparing weekly averages smooths out water and salt, so the decision to change anything rests on a trend rather than a mood.

                ## Milestones
                1. Morning weights recorded on most days under the same conditions.
                2. A weekly average worked out and compared with the previous week's.
                3. A rolling four-week trend visible in a chart or table.
                4. A rule written for when to act, for example three flat weeks in a row.

                ## Notes
                Start from the **Metrics log** template. If daily weighing makes you anxious, weigh twice a week instead and average those.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly average weight has been recorded for at least ten of the last twelve weeks, with a four-week trend visible in the log."
                cadence: rolling
              tasks:
                - "Weigh on waking before eating and write the number down @recurring(daily)"
                - "Work out last week's average and compare it with the week before @recurring(weekly:mon)"
                - "Set up a simple chart of weekly averages"
                - "Write the rule you will follow if the trend is flat for three weeks"
            - name: Monthly progress review and target adjustment
              description: |-
                ## Purpose
                Every month the numbers need looking at together, because the right calorie target at the start is not the right one three months later. A short monthly review of the weight trend, waist, hunger and how often the plan held decides whether to keep going, adjust the target slightly or take a break.

                ## Milestones
                1. Four weeks of averages, waist and adherence notes reviewed in one sitting.
                2. One decision recorded: hold, adjust the target, or plan a maintenance break.
                3. Any target change kept small and dated.
                4. Questions for your doctor or dietitian noted if progress is worrying.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly review note with one recorded decision exists for each of the last three months."
                cadence: rolling
              tasks:
                - "Review the month's weight trend, waist and missed days together @recurring(monthly:3)"
                - "Record one decision: hold, adjust, or plan a break"
                - "Change the target by no more than one small step at a time"
                - "Ask the agent to summarise the month's log into three lines for your records"
            - name: Weekly prep of low-calorie volume foods
              description: |-
                ## Purpose
                Hunger in a deficit is easiest to handle when something filling and light is already made. An hour each Sunday making a pot of vegetable soup, a tub of chopped salad and a tray of roast vegetables means there is always a bowl to reach for before the biscuits.

                ## Milestones
                1. A pot of soup, a salad tub and a tray of roast vegetables made in one session.
                2. Each item portioned and labelled with the date.
                3. The prepped food placed at the front of the fridge.
                4. Last week's leftovers used or frozen before new prep goes in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Volume foods are prepped and in the fridge by Sunday evening in at least nine of the last twelve weeks."
                cadence: rolling
              tasks:
                - "Make a pot of vegetable soup, a salad tub and a tray of roast vegetables @recurring(weekly:sun)"
                - "Portion and date everything you prepped"
                - "Clear last week's prep before stacking the new tubs"
                - "Note which prepped item ran out first so you make more of it next time"
            - name: Pre-portioned snack tubs for the week
              description: |-
                ## Purpose
                Snacks eaten from the bag are the hardest calories to plan for, because nobody knows when to stop. Weighing the week's snacks into small labelled tubs once a week turns them into fixed, planned amounts that fit the budget.

                ## Milestones
                1. The week's snacks chosen from your plan.
                2. Each portion weighed and boxed with its calorie estimate.
                3. Tubs stored in one place, with the bulk packet put away.
                4. A count at the end of the week of how many unplanned snacks were eaten.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Snacks are portioned into labelled tubs at the start of the week for at least eight of the last twelve weeks."
                cadence: rolling
              tasks:
                - "Weigh the week's snacks into small labelled tubs @recurring(weekly:mon)"
                - "Write the calorie estimate on the lid of each tub"
                - "Put the bulk packets in a cupboard you rarely open"
                - "Count any extra snacks eaten at the end of the week"
            - name: Weekend calorie plan made on Thursday
              description: |-
                ## Purpose
                Weekends undo more deficits than weekdays, with takeaways, drinks and later meals adding a day's worth of calories or more across two days. Looking at the weekend on Thursday, while there is still time to lighten Friday lunch or choose the takeaway order, keeps Saturday and Sunday inside the week's budget.

                ## Milestones
                1. The weekend's meals, outings and drinks written down by Thursday evening.
                2. Calories for known events estimated and placed in the weekly budget.
                3. Lighter options chosen for the meals around a big one.
                4. A Monday note on how the weekend matched the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekend plan is written by Thursday evening in at least eight of the last twelve weeks, and the weekly budget held on most of those weekends."
                cadence: rolling
              tasks:
                - "List the weekend's meals, plans and drinks every Thursday evening @recurring(weekly:thu)"
                - "Estimate the calories for any meal out or takeaway"
                - "Choose lighter lunches around the biggest meal of the weekend"
                - "Write a one-line Monday note on how the weekend went"
            - name: Evening kitchen close routine
              description: |-
                ## Purpose
                For many people the deficit holds all day and leaks after dinner, a handful at a time. A clear signal that the kitchen is closed, such as wiping down, brushing teeth and making a hot drink, gives the evening a full stop and turns grazing into a deliberate choice rather than a habit.

                ## Milestones
                1. A closing time set for the kitchen on weeknights.
                2. A two or three step close-down routine chosen.
                3. The routine done on most evenings for four weeks.
                4. Any planned evening snack portioned before the kitchen closes.

                ## Notes
                Start from the **Habit tracker** template. If you are genuinely hungry at night, move calories from earlier in the day rather than fighting it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The kitchen close routine is ticked off on at least twenty of the last twenty-eight evenings in the habit tracker."
                cadence: rolling
              tasks:
                - "Choose the time your kitchen closes on weeknights"
                - "Close the kitchen, wipe down and make a hot drink @recurring(daily)"
                - "Portion any planned evening snack before closing"
                - "Review the tracker after four weeks and move the time if needed"
            - name: Monthly waist and progress photo check
              description: |-
                ## Purpose
                The scale can stall for weeks while your waist keeps shrinking, especially if you have started lifting weights or your cycle is affecting water. A monthly tape measure and photo on the same day, in the same place, catches progress the weekly weight trend misses.

                ## Milestones
                1. Waist, hips and one other site measured on a fixed day each month.
                2. Front and side photos taken in matching light and clothing.
                3. Measurements entered in the same log as your weight.
                4. Photos compared with the baseline every third month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly measurements and photos have been recorded for each of the last three months alongside your weight log."
                cadence: rolling
              tasks:
                - "Measure waist, hips and one other site on the same day each month @recurring(monthly:15)"
                - "Take front and side photos in the baseline spot"
                - "Enter the measurements next to your weight averages"
                - "Put the baseline and latest photo side by side every third month"
            - name: Planned diet breaks at maintenance
              description: |-
                ## Purpose
                Months of continuous dieting wear down patience, sleep and training, and many people quit at exactly that point. Planning a week or two at maintenance calories every couple of months, on purpose and in the calendar, gives you a rest while practising the eating you will need when the diet ends.

                ## Milestones
                1. Diet break weeks placed in the calendar for the next six months.
                2. A maintenance target for break weeks written down.
                3. A week of maintenance meals planned for the first break.
                4. A note after each break on weight change and how hard returning felt.

                ## Notes
                Expect a small rise on the scale in a break week from extra food and water. It usually settles within days of returning to the deficit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one planned maintenance week has been completed in the last three months, with a note on weight change and the return to the deficit."
                cadence: cyclic
              tasks:
                - "Mark the next two diet break weeks in your calendar"
                - "Write your maintenance calorie target for break weeks"
                - "Plan the meals for the next break week from your tested list"
                - "Review how the deficit is going and schedule the next break @recurring(quarterly)"
            - name: One new filling recipe each month
              description: |-
                ## Purpose
                Eating the same ten meals for six months is how a sensible plan turns into a boring one that gets abandoned. Trying one new lower-calorie recipe a month, and keeping only the ones that are filling and easy, grows the rotation slowly without making every week an experiment.

                ## Milestones
                1. One new recipe chosen and cooked each month.
                2. Each trial scored for fullness, effort and whether the household ate it.
                3. Keepers added to your tested meal list with calorie estimates.
                4. Failures noted so they are not tried again.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three new recipes have been trialled in the last three months, each scored, with keepers added to the meal list."
                cadence: rolling
              tasks:
                - "Pick one new lower-calorie recipe to try this month @recurring(monthly:20)"
                - "Weigh the ingredients and estimate the calories per portion"
                - "Score the recipe for fullness, effort and family approval"
                - "Add the keepers to your tested meal list"
            - name: Energy density and volume eating
              description: |-
                ## Purpose
                Two hundred calories can be a small handful of nuts or a large bowl of vegetable soup with a slice of bread, and that difference in volume is what keeps people full on fewer calories. Learning which foods carry a lot of calories per gram and which carry few lets you build bigger plates without changing your target.

                ## Milestones
                1. Calories per 100 grams checked for ten foods you eat often.
                2. Your regular foods grouped into low, medium and high energy density.
                3. Three meals rebuilt to swap part of a high density food for a low one.
                4. A note on which swaps actually left you fuller.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten regular foods are listed with calories per 100 grams in three groups, and three meals have been rebuilt using lower density swaps."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Look up calories per 100 grams for ten foods you eat every week"
                - "Sort them into low, medium and high energy density"
                - "Rebuild three regular meals with half the pasta or rice swapped for vegetables"
                - "Note which rebuilt meals kept you full until the next one"
            - name: Reading labels for calories per real portion
              description: |-
                ## Purpose
                Labels often quote a serving far smaller than anyone actually eats, such as 30 grams of cereal or a third of a pizza. Learning to read the per 100 gram column and weigh what you really pour turns the label into an accurate number for your meal plan.

                ## Milestones
                1. Per serving and per 100 gram columns compared on five packets.
                2. Your usual portion of cereal, pasta, cheese and spreads weighed once.
                3. The gap between label serving and real portion noted for each.
                4. Corrected calorie figures written into your tested meal list.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five regular packaged foods have been weighed at your real portion size, and their corrected calorie figures are written in your meal list."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pour your normal bowl of cereal and weigh it against the label serving"
                - "Weigh your usual portions of pasta, cheese and spread"
                - "Work out the calories from the per 100 gram column for each"
                - "Update your meal list with the real figures"
            - name: Measuring the oil, butter and dressings
              description: |-
                ## Purpose
                A tablespoon of oil carries around 120 calories, and a free pour into a hot pan is often two or three. Measuring fats, nut butters and dressings for a few weeks, and learning to cook with less, is usually the largest saving available without eating any less food.

                ## Milestones
                1. The oil you pour freely measured once to see how much it really is.
                2. Measuring spoons or an oil spray kept beside the hob.
                3. Recipes in your meal list updated with measured fat quantities.
                4. Two low-fat cooking methods practised, such as a non-stick pan with a splash of water or oven roasting on baking paper.

                ## Notes
                Fat is not the enemy, and some is needed for flavour and for absorbing certain vitamins. The aim is to know how much is going in, not to cut it out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Fats are measured in every recipe on your tested meal list, and two low-fat cooking methods have each been used at least three times."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pour oil into a pan as you normally would, then tip it into a measuring spoon"
                - "Keep a set of measuring spoons in a pot beside the hob"
                - "Rewrite your meal list recipes with measured fat amounts"
                - "Cook three meals in a non-stick pan with a splash of water instead of oil"
            - name: Protein and fibre at each meal for fullness
              description: |-
                ## Purpose
                Meals built around protein and fibre tend to keep people full for longer than the same calories from refined starch and fat, which is why a deficit on a mostly beige plate feels so hard. Learning a few reliable protein and fibre sources for each meal of the day, at amounts that fit your budget, makes hunger a smaller problem.

                ## Milestones
                1. A protein source and a fibre source identified for each of your regular meals.
                2. Five lean protein options listed with calories per portion.
                3. Five high-fibre foods you will actually eat listed.
                4. A two-week comparison noted of hunger after balanced meals versus your old versions.

                ## Notes
                Protein targets for training belong in a different area. Here the question is only which foods keep you full inside a calorie budget; check any big change with your doctor if you have kidney disease.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each regular meal on your list names a protein and a fibre source, and a two-week hunger comparison is written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark the protein and fibre source in each meal on your list"
                - "List five lean proteins with calories per portion"
                - "List five high-fibre foods you enjoy"
                - "Rate your hunger two hours after meals for two weeks"
            - name: Lighter versions of five household favourites
              description: |-
                ## Purpose
                Lasagne, curry, fish and chips and the Sunday roast do not need to disappear for months; they need a version that fits the budget. Reworking five favourites, with leaner mince, more vegetables in the sauce, oven chips or a lighter topping, keeps the meals the household looks forward to on the plan.

                ## Milestones
                1. Five household favourites chosen.
                2. Each one cooked in a lighter version with weighed ingredients.
                3. Calories per portion compared between old and new versions.
                4. The versions the household accepted written up as recipes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five favourite meals have lighter tested recipes with calories per portion recorded, and at least three are on the regular plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the household which five meals they would miss most"
                - "Find one change for each that cuts fat or adds vegetables"
                - "Cook each lighter version and weigh the ingredients"
                - "Write up the versions everyone ate as recipes"
            - name: Estimating calories when eating out and ordering in
              description: |-
                ## Purpose
                Restaurant meals usually carry far more fat than the home version and are hard to estimate, which is why many diets avoid them entirely and then break at the first dinner invitation. Practising estimates with chain menus that publish calories trains your eye for the places that do not.

                ## Milestones
                1. Published calories looked up for your five most frequent takeaway or restaurant orders.
                2. Two or three lower calorie orders identified at each place.
                3. Estimates practised at independent places by comparing with similar chain dishes.
                4. A short list of go-to orders saved on your phone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A phone note lists go-to lower calorie orders with estimates for at least five regular takeaways or restaurants."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Look up the published calories for your five most frequent orders"
                - "Choose two lower calorie alternatives at each place"
                - "Estimate an independent restaurant dish by comparing it with a similar chain dish"
                - "Save your go-to orders in a phone note"
            - name: Calories in drinks, from lattes to wine
              description: |-
                ## Purpose
                Drinks are the easiest calories to forget: a large milky coffee, two glasses of wine and a fruit juice can add up to a small meal without any feeling of having eaten. Listing what you drink in a normal week and looking up each one shows whether drinks are quietly taking a large share of your budget.

                ## Milestones
                1. A normal week of drinks listed, including coffee shop orders, alcohol and juice.
                2. Calories estimated for each drink.
                3. A weekly total for drinks compared with your daily target.
                4. Two swaps chosen, such as a smaller milk size or a low-calorie mixer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A week of drinks is listed with calorie estimates and a weekly total, and two specific swaps are recorded in the plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every drink you had last week, including sips of other people's"
                - "Look up calories for your usual coffee shop orders"
                - "Add up the week's drinks and compare the total with one day's target"
                - "Choose two swaps and write them into your plan"
            - name: Breakfasts that last until lunch
              description: |-
                ## Purpose
                Breakfast that leaves you starving by ten o'clock costs more calories by lunchtime than it saved. Testing five breakfasts, such as eggs with vegetables, yoghurt with fruit and oats, or porridge made with milk, and noting how long each keeps you full, gives you a short and reliable rotation.

                ## Milestones
                1. Five breakfasts within your morning budget chosen to test.
                2. Each eaten on at least two mornings with the time hunger returned noted.
                3. The three that lasted longest kept as your breakfast rotation.
                4. Ingredients for the rotation added to the standing shopping list.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five breakfasts have been tested twice each with hunger times noted, and a three-breakfast rotation is on the meal plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose five breakfasts that fit your morning budget"
                - "Note the time hunger returns after each one"
                - "Keep the three that lasted longest as your rotation"
                - "Add their ingredients to your regular shopping list"
            - name: Soups and broth-based meals that fill you up
              description: |-
                ## Purpose
                Soup eaten as a starter or as the meal itself is one of the most reliable ways to feel full on fewer calories, because the water stays in the food. Learning three or four base soups, such as blended vegetable, bean and tomato, chicken broth with noodles and a lentil dal, gives you cheap, freezable meals that fit almost any budget.

                ## Milestones
                1. Three or four base soup recipes cooked and costed in calories per bowl.
                2. A way to make each one more filling tested, such as beans, lentils or lean meat.
                3. Single bowls frozen with labels.
                4. A soup starter served before dinner on at least two nights a week.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Four soup recipes have tested calorie figures per bowl, and single portions are kept in the freezer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Cook a blended vegetable soup and weigh the finished batch"
                - "Make a lentil or bean soup that works as a main meal"
                - "Freeze single portions in labelled tubs"
                - "Serve a cup of soup before dinner on two nights this week"
            - name: Trigger food rules for the house
              description: |-
                ## Purpose
                Most people have two or three foods they cannot stop at one portion of, and no meal plan survives them sitting in the cupboard. Naming those foods and deciding for each one whether it stays out of the house, comes in single portions or is eaten only when out keeps them from wrecking the week without banning them for ever.

                ## Milestones
                1. Your two to five trigger foods named.
                2. A rule chosen for each: not in the house, single portions only, or only when out.
                3. The household told about any items that will no longer be kept.
                4. A monthly check that the rules still hold.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each named trigger food has a written rule, and the household has agreed any changes to what is kept at home."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the foods you struggle to stop eating once opened"
                - "Choose a rule for each one"
                - "Tell the household which items will be bought in single portions"
                - "Check the cupboards against your rules @recurring(monthly:10)"
            - name: Planned treats instead of cheat days
              description: |-
                ## Purpose
                Cheat days can wipe out most of a week's deficit in one sitting, and the guilt that follows often turns into a second one. Planning a treat or two into the weekly budget, chosen in advance and enjoyed without negotiation, keeps favourite foods in your life and removes the all-or-nothing swing.

                ## Milestones
                1. A weekly treat allowance set in calories.
                2. One or two treats chosen in advance each week.
                3. The treats eaten sitting down and without guilt.
                4. A four-week note on whether planned treats reduced unplanned eating.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Planned treats appear in at least four consecutive weekly plans, with a note comparing unplanned eating before and after."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Set a treat allowance inside your weekly budget"
                - "Choose next week's treat while writing the meal plan"
                - "Buy the treat as a single portion rather than a multipack"
                - "Compare unplanned eating before and after four weeks of planned treats"
            - name: Alcohol rules for the deficit
              description: |-
                ## Purpose
                Alcohol carries calories without filling you up, lowers resolve at the exact moment the snacks come out and disturbs sleep, which raises hunger the next day. Deciding clear rules for how often and how much you drink while in a deficit, before the next invitation, saves making the decision on the spot.

                ## Milestones
                1. Your current weekly drinking and its calories estimated.
                2. Rules chosen for nights in and nights out.
                3. Lower calorie drink options listed for pubs, restaurants and home.
                4. The rules shared with a partner or friend who drinks with you.

                ## Notes
                If you find it hard to cut down, or drink most days, talk to your doctor. That is a health conversation, not a diet one, and support is available.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written alcohol rules for nights in and nights out are in your plan, with a list of lower calorie choices you would order."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count last week's drinks and estimate their calories"
                - "Set your rule for drinking at home and on nights out"
                - "List three lower calorie drinks you would actually order"
                - "Tell the person you usually drink with about the new rules"
            - name: Ready meals and meal replacement shakes decision
              description: |-
                ## Purpose
                Calorie-counted ready meals and shakes take the arithmetic out of a meal, which helps some people through long workdays and fails others within a fortnight. Trying them for a limited number of meals, and talking to your doctor before any very low calorie programme, settles whether they belong in your plan.

                ## Milestones
                1. Three ready meals or shakes tried, each replacing one meal.
                2. Each scored for fullness, cost and taste against your usual meal.
                3. A decision on which meals, if any, they will replace.
                4. Any total meal replacement programme discussed with your doctor before starting.

                ## Notes
                Total diet replacement programmes can work well but are usually run with medical supervision. Do not start one on your own.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision records whether and where ready meals or shakes fit your plan, with any total replacement programme cleared by your doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy three calorie-counted ready meals or shakes to test"
                - "Use each one to replace a weekday lunch"
                - "Score fullness, cost and taste against your usual lunch"
                - "Write down where, if anywhere, they fit your plan"
            - name: Hunger rescue plan for hard days
              description: |-
                ## Purpose
                Some days hunger arrives early and will not go away, after poor sleep, a hard workout or a stressful afternoon. A written rescue plan, with a short list of low-calorie foods and a rule for when to simply eat more, stops one hungry day from turning into a lost week.

                ## Milestones
                1. Your usual hard-day triggers named, such as short sleep or a long shift.
                2. Five rescue foods of around 100 calories each listed and kept in stock.
                3. A rule written for when to eat at maintenance for the day instead of pushing on.
                4. The plan saved on your phone where you will see it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written hunger rescue plan, with five stocked foods and a maintenance day rule, is saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what was going on the last three times hunger beat the plan"
                - "List five filling foods of around 100 calories each"
                - "Decide the rule for when you eat at maintenance for the day"
                - "Save the plan as a note on your phone's home screen"
            - name: Plateau investigation after three flat weeks
              description: |-
                ## Purpose
                Three weeks without a downward trend usually means portion creep, less daily movement or a target that has not followed your lower weight, rather than a broken metabolism. Checking those causes one at a time, before cutting calories further, finds the real reason and avoids an unnecessarily harsh diet.

                ## Milestones
                1. The weight trend confirmed as flat for three weeks, not a single heavy reading.
                2. Portion sizes re-weighed for a few days to check for creep.
                3. Oils, sauces, drinks and weekend eating checked against the plan.
                4. One change chosen and tested for three more weeks.

                ## Notes
                Water retention can hide fat loss for a week or two, especially after starting a new exercise routine or around a menstrual cycle. Rule that out before changing anything.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written plateau check lists each likely cause examined and one chosen change, with a date three weeks out to retest."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the weekly averages to confirm three flat weeks"
                - "Re-weigh every portion for three days, including oils and sauces"
                - "Compare weekend eating with the weekend plans you wrote"
                - "Ask the agent to compare your meal plans with the re-weighed portions and list likely gaps"
            - name: Celebration countdown without crash dieting
              description: |-
                ## Purpose
                Weddings, reunions and big birthdays tempt people into a crash diet that leaves them tired, irritable and heavier a month later. Working backwards from the date with your normal deficit, a realistic goal and a plan for the day itself gets you there feeling well and keeps the progress afterwards.

                ## Milestones
                1. The event date and a realistic goal for it set from your usual rate of loss.
                2. A weekly plan to the date written, with no extra cuts in the final fortnight.
                3. Outfit fittings or purchases timed for the last few weeks rather than the first.
                4. A plan for eating and drinking on the day and in the week after.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You reach the event date on your normal deficit with no crash week in the final month, and the week after the event is already planned."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count the weeks to the event and multiply by your usual weekly rate"
                - "Write down the goal that rate gives you, not the one you wish for"
                - "Schedule outfit fittings for the last three weeks"
                - "Plan the meals for the day after the event in advance"
            - name: Holiday and travel week eating plan
              description: |-
                ## Purpose
                Holidays usually mean buffets, eating out and no kitchen scale, and most people either diet miserably or abandon the plan entirely. Deciding in advance to aim for maintenance, with a few simple rules for buffets and drinks, lets you enjoy the trip and come home close to where you left.

                ## Milestones
                1. A goal for the trip set, usually maintenance rather than loss.
                2. Three or four simple rules for buffets, drinks and snacks written down.
                3. A walking or activity plan for most days of the trip.
                4. The first week home planned, with meals and the shop already decided.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written trip eating plan with maintenance as the goal exists before departure, and the first week home is planned."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether your aim for the trip is maintenance or a slower loss"
                - "Write three rules for buffets, drinks and snacks"
                - "Plan the first week of meals for when you get home"
                - "Book a grocery delivery for the day after you return"
            - name: Festive season plan to hold your weight
              description: |-
                ## Purpose
                The big festive weeks of your year, whether that is December, Eid or Diwali, bring parties, family feasts and tins of sweets, and many people regain a month's progress in them. Choosing to hold your weight rather than lose it, and deciding which events matter most, makes the season enjoyable and turns the month after into a continuation rather than a restart.

                ## Milestones
                1. The season's events listed with the ones that matter most marked.
                2. A goal of holding your weight for the period written down.
                3. Normal planned meals kept on the days between events.
                4. A date for restarting the deficit written in the calendar.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The season ends within a kilo of its starting average weight, with the date for restarting the deficit already in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every party, meal and gathering in the season"
                - "Mark the three events you most want to enjoy freely"
                - "Plan ordinary meals for the days between events"
                - "Put the deficit restart date in your calendar"
            - name: Reaching goal weight and stepping up to maintenance
              description: |-
                ## Purpose
                Hitting the goal is the moment most diets fail, because people stop planning and drift back to old portions within months. Raising calories in steps to your new maintenance, while keeping the weekly plan and weigh-ins going, turns a finished diet into a settled way of eating.

                ## Milestones
                1. The goal reached and confirmed by a four-week average, not a single reading.
                2. Calories raised in small steps over several weeks until weight holds.
                3. A new maintenance figure written down.
                4. Weekly planning and weigh-ins kept going for at least three months afterwards.

                ## Notes
                Expect a small rise in scale weight as food and water in the body increase. Judge maintenance by the trend over a month.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new maintenance calorie figure is recorded, and weight has held within a small band for twelve weeks after the goal was reached."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the goal with a four-week weight average"
                - "Add a small amount to your daily calories and hold it for two weeks"
                - "Repeat the step until the weekly average stops falling"
                - "Write down your new maintenance figure"
            - name: One family dinner while you are in a deficit
              description: |-
                ## Purpose
                Parents in a deficit often end up cooking two dinners, or eating the children's leftovers on top of their own. Planning one family meal and plating it differently, with more vegetables and less rice or pasta on your plate and nothing finished from anyone else's, keeps the household eating together without extra work.

                ## Milestones
                1. Five family dinners on the plan that work with a different plate for you.
                2. A plating rule written: what goes on your plate and what is added for others.
                3. A rule for leftovers on children's plates.
                4. A month of family dinners cooked once, with no separate diet meal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For four weeks every family dinner has been cooked once, with your portion plated to the rule and no separate meal made."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose five family dinners where the carbs or sauce can be served separately"
                - "Write your plating rule on a note on the fridge"
                - "Scrape children's leftovers straight into a tub or the bin"
                - "Serve yourself first before adding extras for the rest of the family"
            - name: Living with a partner who is not dieting
              description: |-
                ## Purpose
                Sharing a kitchen with someone who eats more, snacks in the evening and orders takeaway on Fridays can make every day a test. Agreeing which meals you share, where their snacks are kept and how takeaway night works respects their eating while protecting your plan.

                ## Milestones
                1. A conversation held about what support would help and what would not.
                2. Shared meals agreed for the week, with portions served separately.
                3. Their snacks stored somewhere you do not see.
                4. A takeaway night arrangement that fits your budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Shared meals, snack storage and takeaway night are agreed with your partner and have held for four weeks."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Tell your partner what would help and what would make it harder"
                - "Agree with your partner which dinners you will share next week @recurring(weekly:fri)"
                - "Give their snacks a shelf or box you do not open"
                - "Pick a usual takeaway order that fits your budget"
            - name: Deficit meal planning on a tight food budget
              description: |-
                ## Purpose
                Lean meat, fresh berries and ready-made salads make dieting look expensive, but the cheapest foods in the shop include some of the most filling: oats, eggs, lentils, tinned fish, potatoes and frozen vegetables. Building a week of deficit meals around them shows that losing weight does not need to raise the food bill, which matters for students and anyone squeezed.

                ## Milestones
                1. A list of ten cheap filling foods with price and calories per portion.
                2. A week of deficit meals planned around those foods.
                3. The week's food cost compared with your usual shop.
                4. The cheapest three meals added to your tested list.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A full week of deficit meals is planned from low cost staples and costs no more than your usual weekly food spend."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Price ten cheap filling foods at your usual shop"
                - "Plan a week of meals around oats, eggs, lentils and frozen vegetables"
                - "Compare the week's cost with your normal shop"
                - "Add the cheapest three meals to your tested list"
            - name: Calorie planning around shift work
              description: |-
                ## Purpose
                Night and rotating shifts scramble hunger signals and push eating into the small hours, when vending machines and takeaways are the only options. Planning meals around the shift rather than the clock, with a main meal before work and a light packed meal on shift, keeps the budget intact across rota changes.

                ## Milestones
                1. Meal times written for each shift pattern you work.
                2. A packed meal and snack set for night shifts within budget.
                3. A rule for eating after a night shift before sleeping.
                4. A plan for rota-change days when you switch between days and nights.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written meal timetable exists for each shift pattern, and packed meals were taken on at least four of the last five night shifts."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the hours you are awake and working on each shift pattern"
                - "Set a main meal before each shift starts"
                - "Pack a light meal and snack for the night shift"
                - "Decide what you eat after a night shift before sleep"
            - name: Calorie planning through perimenopause and menopause
              description: |-
                ## Purpose
                Many women find that weight moves towards the middle and appetite and sleep change around menopause, and that the eating that worked at 35 no longer does. Planning a deficit with your doctor's input, keeping protein and calcium in the plan and accepting a slower rate makes progress possible without fighting your own body.

                ## Milestones
                1. A conversation with your doctor about weight, symptoms and any treatment that affects appetite.
                2. Your target and rate of loss reviewed in light of that conversation.
                3. Calcium and protein sources checked on each day of your meal plan.
                4. Sleep and symptom notes kept alongside the weight trend for two months.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your calorie target and rate have been reviewed with your doctor, and two months of weight, sleep and symptom notes are recorded together."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a menopause or general review with your doctor"
                - "Write down the symptoms that affect your appetite and sleep"
                - "Check each day of your meal plan for calcium and protein sources"
                - "Note sleep quality alongside your weekly weight average"
            - name: Weight loss later in life with muscle in mind
              description: |-
                ## Purpose
                After about sixty, losing weight too fast can take muscle and bone with it, and those matter more than the number on the scale. Planning a gentle deficit with your doctor, keeping protein at every meal and pairing it with strength exercise protects the strength needed for stairs, shopping and balance.

                ## Milestones
                1. Your doctor's view on whether weight loss is advisable and at what rate.
                2. A gentle deficit target set from that advice.
                3. Protein included at breakfast, lunch and dinner on the meal plan.
                4. A strength or balance class or programme started alongside the diet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your doctor has agreed the weight loss plan, the meal plan includes protein at every meal, and a strength activity is booked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor whether losing weight is right for you now"
                - "Set a gentle target from their advice"
                - "Add a protein source to each meal of your plan"
                - "Book a strength or balance class near you"
            - name: Meal planning alongside weight loss medication
              description: |-
                ## Purpose
                Weight loss injections and tablets can cut appetite so far that people eat too little protein and too few vegetables, and lose muscle as well as fat. Planning small, nutrient-dense meals with your prescriber's guidance, and keeping notes on appetite and side effects for each review, makes the most of the medicine and prepares you for the day it stops.

                ## Milestones
                1. Your prescriber's guidance on eating, protein and side effects written down.
                2. A meal plan of smaller meals with protein and vegetables first on the plate.
                3. Weekly notes on appetite, nausea and portions eaten kept for each review.
                4. A plan agreed with your prescriber for eating if the medicine is reduced or stopped.

                ## Notes
                Never change your dose based on how much you are eating. Bring your notes to the prescriber and let them decide.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Weekly appetite and side effect notes exist for every week since starting, and a plan for coming off the medicine is agreed with your prescriber."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your prescriber what they want you to eat and avoid"
                - "Rewrite your meal plan as smaller meals with protein first"
                - "Note appetite, nausea and portions eaten each week @recurring(weekly:wed)"
                - "Ask at your next review what happens to eating when the medicine stops"
            - name: Recalculating your target as weight comes off
              description: |-
                ## Purpose
                Smaller bodies need fewer calories, so a target set at the start slowly shrinks into maintenance as weight comes off. Recalculating maintenance after every five kilos lost, or every three months, and setting a fresh target keeps the deficit real without guessing.

                ## Milestones
                1. A recalculation rule set: every five kilos or every three months, whichever comes first.
                2. Maintenance re-estimated from the calculator and your actual weight trend.
                3. A new target written down with the date and current weight.
                4. A history of targets kept so changes can be seen over time.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated history of at least two recalculated targets exists, each with the weight and method used."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write your recalculation rule at the top of your plan"
                - "Re-run the maintenance calculator with your current weekly average @recurring(quarterly)"
                - "Compare it with what your weight trend says you are eating"
                - "Add the new target and date to your target history"
            - name: Personal deficit cookbook of thirty tested meals
              description: |-
                ## Purpose
                After a few months the meals that genuinely work are scattered across apps, screenshots and memory. Collecting thirty tested meals into one cookbook, each with weighed ingredients, calories per portion and a fullness score, makes planning faster and gives you a reference for maintenance and for any future deficit.

                ## Milestones
                1. Thirty meals chosen from your tested list across breakfast, lunch, dinner and snacks.
                2. Each written with weighed ingredients, method, calories per portion and fullness score.
                3. The collection organised by meal and by cooking time.
                4. A printed or shared copy kept in the kitchen.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cookbook of thirty tested meals with weighed ingredients and calories per portion exists and is used for weekly planning."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick thirty meals from your tested list and favourites"
                - "Ask the agent to format each recipe with ingredients, method and calories"
                - "Organise the recipes by meal type and cooking time"
                - "Print a copy for the kitchen drawer"
            - name: Year one of maintenance after weight loss
              description: |-
                ## Purpose
                Most regain happens in the first year after a diet ends, as the planning and weighing that produced the loss quietly stop. Keeping a lighter version of the system, a weekly plan, a monthly weight check against a set range and a rule for what to do if you drift, protects the result through the year that matters most.

                ## Milestones
                1. A maintenance weight range set, a little either side of your goal.
                2. A lighter weekly planning routine kept going.
                3. A monthly check of the weight average against the range.
                4. A written action for when the range is exceeded two months running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly weight averages for twelve months after the goal are recorded, and any time out of range has a documented response."
                cadence: cyclic
              tasks:
                - "Write your maintenance range on the first page of your log"
                - "Compare this month's weight average with your range @recurring(monthly:28)"
                - "Decide the action you will take if you go over the range two months running"
                - "Mark the first anniversary of reaching your goal in your calendar"
            - name: Helping a friend plan their first deficit
              description: |-
                ## Purpose
                Once people see your results, someone usually asks how you did it, and the honest answer is a set of habits rather than a diet. Sitting down with a friend or relative to share your meal list, planning method and early mistakes, while pointing them to their own doctor for a target, passes on what worked without playing dietitian.

                ## Milestones
                1. An hour arranged with the friend who asked.
                2. Your planning method and ten best meals shared in a format they can use.
                3. The mistakes you made in the first month explained.
                4. A suggestion made that they agree their target with their own doctor.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A friend has received your meal list and planning method in writing, and has been pointed to their own doctor for a target."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Arrange an hour with the friend who asked"
                - "Copy your ten best meals and planning method into a shareable note"
                - "Write down the three mistakes you made in the first month"
                - "Suggest they check their target with their own doctor"
---

# Calorie Deficit Meal Planning

This area is for anyone who wants to lose fat steadily by planning meals inside a calorie target, without crash diets, constant hunger or giving up the food they love. It starts with the foundations (a health check, a snapshot of current eating, a maintenance estimate, a safe rate and a first fully planned week), then the weekly machinery of planning, prepping and reviewing, the skills of eating more food for fewer calories, decisions about treats, alcohol and plateaus, dated plans for celebrations, holidays and the festive season, versions for parents, partners, shift workers, later life and people on weight loss medication, and finally the longer work of recalculating targets, writing your own cookbook and keeping the weight off for a year.

What repeats is a Saturday plan and Sunday shop, Sunday prep of soups and vegetables, Monday snack tubs and weight averages, a Thursday look at the weekend, a nightly kitchen close, monthly reviews, measurements and new recipes, and a quarterly diet break and target recalculation. The Metrics log, Weekly meal plan and Habit tracker templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
