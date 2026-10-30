---
id: food-nutrition.macro-calorie-tracking
name: Macro & Calorie Tracking
description: "Accurate food logging for a set period: the right app and scale, an honest baseline, daily and weekly routines, portion skills, and the data reviews that move you toward a body composition goal."
category: personal
version: 1.0.0
tags: [food-nutrition, macro-calorie-tracking, athlete, everyone, food-logging, macros, portion-sizes, body-composition]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - habit-tracker
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Macro & Calorie Tracking
          description: "Logging food intake, macronutrients and calories accurately for a defined period to learn portion sizes and reach a body composition goal."
          projects:
            - name: Tracking goal and time box decision
              description: |-
                ## Purpose
                Tracking works best as a time-limited experiment with a clear question, such as learning what 30 g of peanut butter looks like or reaching a leaner race weight before a rowing season. Writing down the goal, the length of the tracking period and what will count as done stops logging from drifting into an open-ended chore that nobody enjoys.

                ## Milestones
                1. A one-line goal written in terms of a body composition change, a portion skill, or both.
                2. A start date and a fixed end date for the tracking period, usually between four and sixteen weeks apart.
                3. Two or three measures chosen that will show whether the goal was met.
                4. The reason for tracking now written down, ready to reread on a low-motivation day.

                ## Notes
                If the honest goal is to lose weight as fast as possible, read the health check project first. A slower goal you can keep beats an aggressive one abandoned in week two.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written goal, a start and end date for tracking, and two or three named measures of success are saved in the area."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write one sentence on what you want tracking to teach you or change"
                - "Pick a start date and an end date between four and sixteen weeks apart"
                - "Choose two or three measures that will show whether it worked"
                - "Save the goal where you will see it each time you open your log"
            - name: Health check before counting calories
              description: |-
                ## Purpose
                Counting can be unhelpful or unsafe for some people: anyone with a history of disordered eating, people who are pregnant or breastfeeding, those on insulin or other medicines affected by food intake, and anyone under 18. A short conversation with your doctor or a registered dietitian before you start settles whether tracking suits you and whether any limits apply.

                ## Milestones
                1. Your own history checked against the situations where tracking needs professional input.
                2. A doctor or registered dietitian asked whether calorie and macro tracking is suitable, if any situation applies.
                3. Any limits, such as a minimum intake or foods to keep in, written down.
                4. A personal stop rule agreed: the signs that mean you pause tracking and ask for help.

                ## Notes
                Warning signs worth taking seriously include anxiety when a food cannot be logged, skipping social meals to protect the numbers, and guilt over a single day. If they appear, stop logging and talk to a professional.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on whether tracking is suitable, with any professional advice and a personal stop rule, is recorded before the first day of logging."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read through the situations where tracking needs professional advice"
                - "Book a doctor or dietitian appointment if any of them apply to you"
                - "Write a stop rule naming the signs that mean you pause logging"
                - "Revisit your stop rule and whether tracking still suits you @recurring(yearly)"
            - name: Food tracking app choice
              description: |-
                ## Purpose
                Apps differ more than their adverts suggest: some databases are full of user-entered duplicates, some charge for barcode scanning or custom macro targets, and only a few let you export your history. Choosing on database quality, logging speed and export before you enter a single meal saves migrating months of data later.

                ## Milestones
                1. Three apps shortlisted and each used to log the same full day.
                2. Each app scored on database accuracy, logging speed, recipe builder, export and price.
                3. One app chosen and set up with units in grams and kilocalories or kilojoules.
                4. The subscription cost, if any, and its renewal date noted.

                ## Notes
                Favour an app that marks verified entries separately from user-submitted ones. That single feature removes most database errors.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One app is chosen after logging the same day in three candidates, with a written score for each on accuracy, speed, recipes, export and cost."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three tracking apps that offer barcode scanning and data export"
                - "Log yesterday's meals in each app and time how long it takes"
                - "Score each app on accuracy, speed, recipes, export and price"
                - "Set the chosen app to grams and note any renewal date"
            - name: Digital kitchen scale and measuring kit
              description: |-
                ## Purpose
                Weighing is the single biggest step up in logging accuracy, because spoons and cups hide large differences: a heaped tablespoon of peanut butter can be double a level one. A scale that reads in 1 g steps, has a tare button and takes a dinner plate makes weighing quick enough to keep doing for months.

                ## Milestones
                1. Requirements written: 1 g resolution, tare button, at least 5 kg capacity and a flat platform.
                2. Two or three scales compared on price, battery type and platform size.
                3. A scale living on the counter where food is plated, plus a small spoon scale if you log spices or supplements.
                4. The scale checked against a known weight such as an unopened 500 g packet.

                ## Notes
                Start from the **Purchase decision** template. A second cheap scale at work or in a gym bag makes weighing lunches realistic.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scale with 1 g resolution and a tare button sits where food is plated and has been checked against a packet of known weight."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the four features your kitchen scale must have"
                - "Compare two or three scales that meet all four"
                - "Buy the scale and keep it beside the plates, not in a cupboard"
                - "Check the scale against an unopened packet of known weight @recurring(quarterly)"
            - name: Starting body measurements and photos
              description: |-
                ## Purpose
                Scale weight alone cannot tell fat loss from muscle gain or a salty dinner, so a useful baseline needs more than one number. Recording weight, waist, hips and a few standard photos on day one, under conditions you can repeat exactly, gives every later check-in something honest to compare against.

                ## Milestones
                1. Morning weight taken after the toilet and before food or drink.
                2. Waist at the navel, narrowest waist and hips measured with a soft tape, each recorded twice.
                3. Front, side and back photos taken in the same spot, light and clothing.
                4. All figures saved in a single dated log with the conditions noted.

                ## Notes
                Start from the **Metrics log** template. Athletes can add one performance marker, such as a 2 km row time or a top set, so composition changes can be read alongside strength.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline of morning weight, three tape measurements and three standard photos is saved in one log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a spot with even light for progress photos"
                - "Weigh yourself first thing in the morning and record it"
                - "Measure waist and hips twice each with a soft tape"
                - "Take front, side and back photos and file them by date"
            - name: Estimated daily energy needs as a starting point
              description: |-
                ## Purpose
                Every online calculator gives a guess built from height, weight, age and an activity level that most people overrate. Treating the figure as a starting range, to be checked against what your own logs and weight trend show over the following weeks, avoids building a target on a number that is several hundred calories out.

                ## Milestones
                1. A maintenance estimate worked out with two different calculators and the results compared.
                2. An honest activity level chosen, backed by average steps and weekly training sessions.
                3. The estimate written down as a range rather than a single figure.
                4. A dated note to check the range against four weeks of real data.

                ## Notes
                Ask a dietitian or coach to confirm the range if you are in heavy training or have a medical condition.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written maintenance range from two calculators, with activity inputs noted and a dated plan to check it against logged data."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note your average daily steps and weekly training sessions"
                - "Run two maintenance calculators with the same honest inputs"
                - "Write down the range between the two estimates"
                - "Mark the date four weeks from now to test the estimate against your trend"
            - name: Calorie and macro targets set in the app
              description: |-
                ## Purpose
                Targets turn a log into feedback, but they only help if they come from your goal and from someone qualified to judge it. Agreeing a daily calorie figure and protein, carbohydrate and fat targets with a dietitian or coach, then entering them in the app, means each day's log can be read at a glance.

                ## Milestones
                1. A calorie target agreed with a dietitian, coach or doctor, or chosen cautiously from your own estimate if no one is available.
                2. Protein, carbohydrate and fat targets set in grams, not only as percentages.
                3. Targets entered in the app, with any training-day variation noted.
                4. The date of the first target review written beside them.

                ## Notes
                Work to ranges, such as within 100 kcal and 10 g of protein, rather than exact figures. Landing in range most days teaches more than chasing a precise number.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Calorie and gram-based macro targets with acceptable ranges are entered in the app and recorded with a first review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Bring your goal and maintenance range to a dietitian or coach"
                - "Agree daily calorie, protein, carbohydrate and fat targets in grams"
                - "Enter the targets and acceptable ranges in your app"
                - "Write the first review date next to the targets"
            - name: Seven-day logging baseline with no changes
              description: |-
                ## Purpose
                People who start tracking tend to eat their best for the first week, which hides the real pattern. Logging seven ordinary days, weekend included, without trying to hit any target shows where your calories and protein actually come from and which meals are hardest to record.

                ## Milestones
                1. Seven consecutive days logged, including a weekend, with nothing deliberately changed.
                2. Each day's calorie, protein, carbohydrate and fat totals noted.
                3. The five biggest calorie sources across the week identified.
                4. The three hardest meals to log named, with the reason for each.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Seven consecutive unchanged days are logged, with daily totals, a list of the top five calorie sources and three hard-to-log meals recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Log everything you eat and drink today, exactly as normal"
                - "Keep logging for seven days including one full weekend"
                - "Ask the agent to rank your top five calorie sources from the export"
                - "Note the three meals you found hardest to log and why"
            - name: Personal library of your twenty most eaten foods
              description: |-
                ## Purpose
                Most people eat the same twenty or thirty foods week after week, so correcting those entries once removes most logging errors. A checked personal library, with each item matched to the packet or a trusted reference table, also makes daily logging faster because the right entry is always at the top.

                ## Milestones
                1. Your twenty most frequently logged foods listed from the app history.
                2. Each entry checked against the packet label or a national food composition table.
                3. Wrong or duplicate entries replaced with a single saved custom food.
                4. New staples added to the library as they appear in your shopping.

                ## Notes
                Many governments publish food composition tables for fresh foods with no label. They are a better reference than user-submitted entries for fruit, vegetables, meat and fish.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty frequently eaten foods are saved as checked custom entries in the app, each matched to a label or reference table."
                cadence: rolling
              tasks:
                - "Pull your most logged foods from the app history"
                - "Check each one against its packet label or a food composition table"
                - "Save a corrected custom entry and stop using the duplicates"
                - "Add any new staple to your checked library @recurring(monthly:7)"
            - name: Family recipes entered by cooked weight
              description: |-
                ## Purpose
                Home-cooked dishes are where logs most often go wrong, because a bowl of chilli or curry matches no database entry. Weighing raw ingredients into a recipe, then weighing the finished pot, lets you log any portion by grams with real accuracy, however the dish was shared out.

                ## Milestones
                1. The empty weight of your main pans and dishes written on a card or label.
                2. Five regular dishes entered as recipes from weighed raw ingredients.
                3. The cooked weight of each pot recorded so any portion can be logged in grams.
                4. Each recipe saved with its date and any variations noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five regular home dishes are saved in the app as recipes with a recorded total cooked weight."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Weigh your three most used pans empty and label them"
                - "Weigh every ingredient into tonight's dinner as you cook"
                - "Weigh the finished pot, subtract the pan and save the recipe"
                - "Repeat the process for four more of your regular dishes"
            - name: Log-before-you-eat daily routine
              description: |-
                ## Purpose
                Logging after the fact relies on memory, and the forgotten handful of nuts or second spoon of rice adds up across a week. Weighing and entering food as it is plated, before the first bite, keeps the log complete and turns each entry into a moment to decide whether this is the portion you want.

                ## Milestones
                1. A trigger chosen, such as plating up, with the phone and scale within reach.
                2. Meals logged before eating on at least five days in seven for four weeks.
                3. A fallback agreed for meals where logging first is awkward, such as a photo to log later.
                4. Fully logged days ticked off in a tracker each week.

                ## Notes
                Start from the **Habit tracker** template. A missed entry is information, not a failure: log your best estimate and carry on.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Meals are logged before eating on at least five days a week for four consecutive weeks, shown in the habit tracker."
                cadence: rolling
              tasks:
                - "Put the scale and a phone stand where you plate food"
                - "Weigh and log each meal before you start eating @recurring(daily)"
                - "Photograph any meal you cannot log straight away"
                - "Tick the habit tracker for each day logged in full"
            - name: Morning weigh-in and trend weight
              description: |-
                ## Purpose
                Daily weight swings by a kilogram or two with water, salt, carbohydrate and digestion, which makes any single reading misleading. Weighing at the same time each morning and following a seven-day average or smoothed trend line shows the real direction underneath the noise.

                ## Milestones
                1. A fixed weighing routine: after the toilet, before food or drink, same clothing or none.
                2. Daily readings entered in the app or a trend weight tool.
                3. A seven-day average or smoothed trend shown alongside the daily figures.
                4. A written rule for ignoring single-day jumps.

                ## Notes
                If daily weighing makes you anxious, switch to three mornings a week and use their average. Identical conditions matter more than frequency.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Morning weights are recorded at least five days a week with a seven-day average visible, for the whole tracking period."
                cadence: rolling
              tasks:
                - "Choose a trend weight app or a spreadsheet with a seven-day average"
                - "Weigh after the toilet and before breakfast @recurring(daily)"
                - "Enter the reading and read only the trend line"
                - "Write a one-line rule for how you treat a sudden jump"
            - name: Sunday tracking review
              description: |-
                ## Purpose
                A log nobody reads is just data entry. Fifteen minutes each Sunday comparing the week's average intake with your targets, alongside the trend weight, catches drift early and settles the one thing to change in the coming week.

                ## Milestones
                1. A short review routine with the same five questions every week.
                2. Average calories, protein and number of days logged recorded for each week.
                3. One change for the next week chosen and written down.
                4. Twelve weekly reviews completed across the tracking period.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly averages and one chosen change are recorded every Sunday for twelve consecutive weeks."
                cadence: rolling
              tasks:
                - "Write the five questions you will answer every Sunday"
                - "Review the week's averages against your targets @recurring(weekly:sun)"
                - "Ask the agent to compare this week with last and flag any drift"
                - "Write down the single change you will make next week"
            - name: Monthly waist, hips and progress photos
              description: |-
                ## Purpose
                Tape measurements and photos change more slowly than the scale but say more about body composition, especially for anyone lifting weights. Repeating the baseline measures once a month, under identical conditions, shows whether the trend weight reflects fat, muscle or neither.

                ## Milestones
                1. Measurements taken at the same sites and time of day as the baseline.
                2. Photos taken in the same spot, light and pose.
                3. Each month's figures added beside the baseline in the log.
                4. A side-by-side photo comparison saved every three months.

                ## Notes
                Start from the **Metrics log** template if you did not use it for the baseline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly measurements and photos are recorded under baseline conditions for every month of the tracking period."
                cadence: rolling
              tasks:
                - "Describe each measurement site in your log so it can be repeated"
                - "Measure waist and hips and take photos before breakfast @recurring(monthly:3)"
                - "Add the figures to the log beside the previous month"
                - "Make a side-by-side photo comparison every third month"
            - name: Missed-day and logging gap rule
              description: |-
                ## Purpose
                Almost everyone misses days, and the usual response is either to abandon tracking or to leave a guilty blank that drags the average down. A rule agreed in advance, such as logging a best estimate the next morning and marking the day as estimated, keeps weekly averages honest and the habit intact.

                ## Milestones
                1. A written rule for a missed meal, a missed day and a missed week.
                2. A way to mark estimated days in the app or log.
                3. A threshold set for when gaps mean the tracking plan itself needs rethinking.
                4. The rule shared with whoever reviews your logs, if anyone does.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written missed-day rule, an estimated-day marker and a rethink threshold exist before the second week of tracking."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write what you will do after a missed meal, day and week"
                - "Choose a tag or note that marks a day as estimated"
                - "Set the number of missed days a month that triggers a plan rethink"
                - "Send the rule to your coach or review partner, if you have one"
            - name: Weekend and social eating logging plan
              description: |-
                ## Purpose
                Weekday logs often sit close to target while Friday to Sunday quietly adds back much of the difference. A plan for meals out, drinks and gatherings, made before the weekend starts, gives you a realistic number to aim for without skipping the social part.

                ## Milestones
                1. Weekday and weekend averages compared from at least two weeks of logs.
                2. A weekend approach chosen, such as banking a little on weekdays or working to a higher weekend range.
                3. Known weekend meals pre-logged with estimates.
                4. Weekend logging completeness tracked for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekend days are logged as completely as weekdays for four weeks, with a written weekend approach in place."
                cadence: rolling
              tasks:
                - "Compare your weekday and weekend averages from the last two weeks"
                - "Write down how you will handle weekends from now on"
                - "Pre-log any known weekend meals out with estimates @recurring(weekly:fri)"
                - "Log the whole weekend, using estimates where you cannot weigh"
            - name: Monthly target review with your coach or dietitian
              description: |-
                ## Purpose
                Targets set on day one are educated guesses, and the right numbers move as weight, training and goals change. A monthly look at four weeks of average intake against the trend weight, ideally with a coach or dietitian, adjusts targets in small steps based on what actually happened.

                ## Milestones
                1. Four-week average intake and trend weight change pulled from the logs.
                2. Adherence noted, since targets cannot be judged on half-logged weeks.
                3. Any change to calories or macros agreed and entered in the app.
                4. The reason for each change recorded in a target history.

                ## Notes
                Change one thing at a time and give it at least two weeks. Adjusting every few days makes it impossible to tell what worked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A target history shows a dated monthly review, with averages and the reason for every change, across the whole tracking period."
                cadence: cyclic
              tasks:
                - "Start a target history page with today's targets and date"
                - "Pull four-week averages and trend change for review @recurring(monthly:20)"
                - "Agree any target change with your coach or dietitian"
                - "Record the new targets and the reason in the history"
            - name: Prep-day weighing of cooked staples
              description: |-
                ## Purpose
                Cooked rice, pasta and meat vary in water content from batch to batch, so a generic entry for cooked chicken can be well off. Weighing the raw total and the cooked total on prep day gives an exact conversion for that batch, so every tub in the fridge can be logged in grams.

                ## Milestones
                1. Raw weight of each batch staple recorded before cooking.
                2. Cooked weight recorded and a raw-to-cooked factor worked out for the batch.
                3. Portions weighed into containers with grams and calories written on each lid.
                4. The routine kept for four consecutive prep days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Batch staples are logged from their own raw-to-cooked factors on four consecutive prep days, with labelled portions."
                cadence: rolling
              tasks:
                - "Weigh the raw rice and meat before your next batch cook"
                - "Weigh the cooked totals and work out each conversion factor"
                - "Write the weight and calories on each container lid"
                - "Weigh and label batch-cooked staples on prep day @recurring(weekly:sat)"
            - name: Quarterly check on whether tracking still helps
              description: |-
                ## Purpose
                Tracking is a tool, and after a few months it either keeps teaching you something or becomes a chore that costs more than it gives. A quarterly check on progress, time spent logging and how you feel about food decides whether to continue, lighten the method or stop.

                ## Milestones
                1. Progress toward the written goal reviewed against the baseline.
                2. Average daily minutes spent logging estimated.
                3. Your relationship with food checked honestly against the stop rule.
                4. A decision recorded: continue, switch to a lighter method or stop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated decision to continue, lighten or stop tracking is recorded each quarter, with the reasons."
                cadence: cyclic
              tasks:
                - "Note roughly how many minutes a day logging takes"
                - "Review the goal, the stop rule and your logs together @recurring(quarterly)"
                - "Decide whether to continue, lighten or stop tracking"
                - "Record the decision and the date of the next check"
            - name: Monthly spot check of database entries
              description: |-
                ## Purpose
                Shared food databases carry entries with missing fat, wrong serving sizes or values copied from a different brand. Checking five random entries from your log each month against the packet or a reference table catches errors that would otherwise sit inside your averages for months.

                ## Milestones
                1. Five entries picked at random from the month's log.
                2. Each one compared with the packet label or a food composition table.
                3. Any wrong entry corrected or replaced with a verified version.
                4. A running count of errors found, showing whether the log is getting cleaner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five entries are checked against labels or reference tables every month, with errors corrected and a running count kept."
                cadence: rolling
              tasks:
                - "Bookmark a food composition table for foods without labels"
                - "Spot-check five random entries against their labels @recurring(monthly:11)"
                - "Replace any wrong entry with a verified version"
                - "Add the number of errors found to a running count"
            - name: Reading nutrition labels per 100 g and per serving
              description: |-
                ## Purpose
                Labels quote energy per 100 g and per serving, and the manufacturer's serving is often smaller than what people actually eat. Learning to read the per 100 g column, convert between kilojoules and kilocalories, and spot the serving-size trap makes every barcode entry checkable.

                ## Milestones
                1. The difference between per 100 g and per serving figures explained in your own words.
                2. Kilojoule to kilocalorie conversion understood, with 4.184 kJ to 1 kcal noted.
                3. Five cupboard foods re-logged using per 100 g figures and a weighed portion.
                4. Label tolerances understood, so small mismatches are not chased.

                ## Notes
                Labels are allowed a margin of error, often around 20 percent for energy in many countries. Weighing still beats guessing, but do not expect perfect agreement with the packet.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five regular foods are re-logged from per 100 g figures and weighed portions, with the serving-size difference noted for each."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Compare the serving and per 100 g columns on five cupboard packets"
                - "Weigh your usual portion of each and work out the real figures"
                - "Note the kilojoule to kilocalorie conversion at the top of your log"
                - "Read how food label tolerances work where you live"
            - name: Raw and cooked weights for meat, rice and pasta
              description: |-
                ## Purpose
                Rice roughly triples in weight when cooked and meat loses a quarter or more, so logging cooked food against a raw entry, or the reverse, is one of the commonest large errors in any log. Learning which state each entry describes, and weighing consistently in that state, fixes it for good.

                ## Milestones
                1. A rule chosen: weigh raw where possible, and use only entries marked cooked when you cannot.
                2. Raw-to-cooked ratios measured at home for rice, pasta, chicken and minced meat.
                3. The ratios written on a card kept by the scale.
                4. Your saved entries relabelled to show raw or cooked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Home-measured raw-to-cooked ratios for four staples are written by the scale, and saved entries are labelled raw or cooked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your saved entries for rice and chicken are raw or cooked"
                - "Weigh 100 g of dry rice and weigh it again once cooked"
                - "Repeat the test for pasta, chicken breast and minced meat"
                - "Write the ratios on a card and keep it by the scale"
            - name: Portion calibration by guessing then weighing
              description: |-
                ## Purpose
                The lasting value of a tracking period is a calibrated eye that can judge portions once the scale is put away. Guessing the weight of a portion before it goes on the scale, and recording the gap, trains that judgement within a few weeks.

                ## Milestones
                1. A guess-then-weigh log with columns for food, guess, actual weight and gap.
                2. Twenty guesses recorded across energy-dense foods such as oils, nuts, cheese, rice and cereal.
                3. Average error worked out for each food.
                4. A second round showing smaller errors on the three worst-estimated foods.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Forty guess-then-weigh entries are logged across two rounds, with the average error falling for the three worst foods."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Start a log with columns for food, guess, actual weight and gap"
                - "Guess then weigh two portions a day for ten days"
                - "Work out your average error for each food"
                - "Run a second round on your three worst-estimated foods"
            - name: Hand-portion estimates for days without a scale
              description: |-
                ## Purpose
                Holidays, work canteens and friends' houses rarely come with a kitchen scale. Learning to estimate with your palm, fist, cupped hand and thumb, checked once against your own scale, keeps the log usable when weighing is impossible.

                ## Milestones
                1. Your palm, fist, cupped hand and thumb matched to weighed portions of four foods.
                2. A card of personal hand equivalents saved on your phone.
                3. Three days logged by hand estimates and compared with similar weighed days.
                4. A note on which foods hand estimates handle poorly.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal hand-portion card exists and three hand-estimated days have been compared with weighed equivalents."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Weigh a palm of chicken, a fist of rice, a cupped hand of nuts and a thumb of butter"
                - "Save your hand equivalents as a note on your phone"
                - "Log three days by hand estimates alone"
                - "Compare the hand-estimated days with similar weighed days"
            - name: Cooking oils, butter and dressings measured properly
              description: |-
                ## Purpose
                Fat carries 9 kcal per gram against 4 for protein and carbohydrate, and a free pour of olive oil can easily be 20 to 40 g. Weighing the bottle before and after cooking, or switching to a measuring spoon, closes the largest hidden gap in most logs.

                ## Milestones
                1. A week of oil, butter and dressing use measured by weighing the bottle or tub before and after.
                2. Your typical free pour weighed so you know what it really is.
                3. A measuring spoon or spray chosen for everyday use.
                4. Shared dishes logged with your share of the cooking fat.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A week of cooking fat is measured by bottle weight, and your typical free pour is recorded in grams."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Weigh your oil bottle before cooking tonight and again afterwards"
                - "Pour oil as you normally would onto the scale and note the weight"
                - "Keep a measuring spoon next to the oil bottle"
                - "Divide the fat in shared dishes by the number of portions when logging"
            - name: Estimating restaurant and takeaway meals
              description: |-
                ## Purpose
                Restaurant food usually carries more fat and larger portions than the home version, and many places publish no figures at all. A consistent method, using chain nutrition data where it exists and building the plate from its parts where it does not, keeps eating out in the log without guesswork spiralling.

                ## Milestones
                1. Nutrition information found for the chains and takeaways you use most.
                2. A component method written: protein, starch, vegetables and sauce, plus a fixed cooking fat allowance.
                3. Five recent meals out logged with the method.
                4. Saved entries created for repeat orders.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your five most used restaurants or takeaways have saved entries, and a written component method covers places without figures."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the five places you eat out or order from most"
                - "Find any published nutrition figures for those menus"
                - "Write your component method with a fixed allowance for cooking fat"
                - "Save entries for your usual orders at each place"
            - name: Water weight, glycogen and scale swings explained
              description: |-
                ## Purpose
                A salty meal, a hard leg session, a new tub of creatine or the menstrual cycle can each move the scale by a kilogram overnight. Understanding why stops people cutting food after a jump that has nothing to do with fat, which is one of the main reasons tracking periods collapse.

                ## Milestones
                1. The roles of glycogen, salt, gut contents and muscle soreness in short-term weight change written up in a few lines.
                2. Your own pattern noted: which events produced the biggest jumps in your log.
                3. For those who menstruate, weights marked by cycle phase for two cycles.
                4. A personal list of reasons to wait a week before reacting to a jump.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written explainer and your own five biggest overnight scale jumps, each with a likely cause, are saved in the log."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a reliable explainer on glycogen and water weight"
                - "Mark the five biggest overnight jumps in your weight log"
                - "Note what happened the day before each jump"
                - "Write your list of reasons to wait a week before reacting"
            - name: Fibre and micronutrients alongside the macros
              description: |-
                ## Purpose
                Hitting calories and macros says nothing about vegetables, fibre or iron, and a day built from protein bars can look perfect on the dashboard. Turning on fibre and a few micronutrient columns in the app shows whether the diet behind the numbers is varied enough.

                ## Milestones
                1. Fibre and two or three micronutrients made visible in the app's daily view.
                2. A week's average for each compared with general reference intakes.
                3. Any persistent gap raised with a dietitian or doctor.
                4. Two food changes made to close the clearest gap.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fibre and selected micronutrients are visible in the app, with a monthly average recorded and any persistent gap raised with a professional."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Turn on fibre and a few micronutrient columns in your app"
                - "Note this week's average for fibre and each micronutrient"
                - "Ask your dietitian or doctor about any gap that persists"
                - "Check the monthly fibre average in your log @recurring(monthly:25)"
            - name: Logging alcohol, coffee drinks and smoothies
              description: |-
                ## Purpose
                Drinks are the easiest calories to forget: a large latte, two glasses of wine and a shop smoothie can add several hundred kilocalories to a day that looks on target. A week of logging every drink, then setting up quick entries for the regular ones, brings them back into the averages.

                ## Milestones
                1. Every drink logged for seven days, including the milk in tea.
                2. Calories from drinks totalled as a share of daily intake.
                3. Saved entries made for your regular coffee, alcohol and smoothie orders.
                4. A decision taken on which drink, if any, to change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A week of drinks is logged in full, the share of calories from drinks is known and a decision on one drink is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Log every drink you have today, including the milk in tea"
                - "Total the week's calories from drinks as a share of intake"
                - "Save entries for your regular coffee order and usual drinks"
                - "Choose one drink to change or keep, and note why"
            - name: Pre-logging the next day's meals
              description: |-
                ## Purpose
                Planning the day's food in the app the evening before turns the log from a report into a plan, and leaves room to fit in a dinner out or a big training day. It also exposes problems such as a protein shortfall while there is still time to change the shopping.

                ## Milestones
                1. Tomorrow's meals entered the night before on at least two evenings a week.
                2. Planned and actual intake compared for two weeks.
                3. Adjustments made at the planning stage rather than late in the evening.
                4. A decision recorded on whether pre-logging suits you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Next-day meals are pre-logged at least twice a week for two weeks, with planned and actual intake compared."
                cadence: rolling
              tasks:
                - "Enter tomorrow's meals in the app tonight"
                - "Pre-log the next day's meals in the evening @recurring(weekly:sun,wed)"
                - "Compare planned and actual intake at the end of each week"
                - "Decide after two weeks whether to keep pre-logging"
            - name: Saved meals for repeat breakfasts and lunches
              description: |-
                ## Purpose
                If breakfast is the same oats, milk and berries most days, logging it item by item is wasted effort and a source of slips. Saving your regular meals as one-tap entries cuts daily logging to a couple of minutes, which is what makes a long tracking period bearable.

                ## Milestones
                1. Your five most repeated meals identified from the log.
                2. Each saved as a single meal entry with weighed quantities.
                3. Daily logging time measured before and after.
                4. Saved meals updated whenever a recipe or brand changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five regular meals are saved as one-tap entries and daily logging time is recorded before and after."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your five most repeated meals in the log history"
                - "Weigh each meal once and save it as a single entry"
                - "Time how long a full day's logging takes now"
                - "Update a saved meal whenever a brand or quantity changes"
            - name: Hunger and energy notes beside the log
              description: |-
                ## Purpose
                Two days with identical calories can feel completely different depending on protein, fibre and meal timing. A one-to-five hunger and energy score beside each day shows which patterns keep you full and training well, which matters more over a long tracking period than any single target.

                ## Milestones
                1. A daily hunger and energy score added to the log.
                2. Three weeks of scores collected.
                3. The best and worst five days compared for protein, fibre and meal timing.
                4. One pattern from the best days adopted as a default.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three weeks of hunger and energy scores are compared against intake, with one adopted pattern written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add hunger and energy scores to the log's daily notes"
                - "Score each day at bedtime for three weeks"
                - "Ask the agent to compare your best and worst scored days"
                - "Choose one pattern from the best days to repeat"
            - name: Exercise calories from a smartwatch decision
              description: |-
                ## Purpose
                Wearables can overestimate calories burned in exercise by a wide margin, and many apps add them straight back onto your daily target. Deciding in advance whether to eat back none, some or all of those calories avoids a target that quietly rises every time you train.

                ## Milestones
                1. Your app's handling of exercise calories checked and understood.
                2. Watch estimates compared with what your trend data implies over four weeks.
                3. A rule agreed with your coach, such as using a fixed activity level and ignoring the watch.
                4. The rule set in the app's settings.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule on exercise calories, based on four weeks of trend data, is set in the app."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your app adds exercise calories to your target"
                - "Turn off automatic exercise calorie syncing while you decide"
                - "Compare four weeks of watch estimates with your trend weight"
                - "Agree a rule with your coach and set it in the app"
            - name: Weighed day versus estimated day accuracy test
              description: |-
                ## Purpose
                Most people believe their estimates are close until they test them. Logging the same day twice, once by eye and once by weighing, shows how far estimates drift and which few foods account for most of the gap.

                ## Milestones
                1. Three test days completed, each with an estimated log and a weighed log.
                2. The difference in calories and each macro worked out for every day.
                3. The foods behind most of the gap identified.
                4. A list made of foods that must always be weighed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three days of estimated and weighed logs are compared, with a written list of foods that must always be weighed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate and log today's breakfast by eye before weighing it"
                - "Weigh the same food and log it in a second diary"
                - "Repeat for three full days and total the differences"
                - "List the foods you will always weigh from now on"
            - name: Lighter tracking method after the first month
              description: |-
                ## Purpose
                Full logging of every gram is the best way to learn, but few people want to do it for a year. After the first month, choosing a lighter method, such as logging only calories and protein, a photo log, or weighing only energy-dense foods, keeps most of the value for a fraction of the effort.

                ## Milestones
                1. Three lighter methods compared for effort and for what each would miss.
                2. One method trialled for two weeks.
                3. Trend weight and adherence compared with the full-logging month.
                4. A decision recorded to keep the lighter method or return to full logging.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lighter tracking method is trialled for two weeks and a recorded decision compares it with full logging."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List three lighter tracking methods you would consider"
                - "Trial one method for two weeks"
                - "Compare trend weight and adherence with the full-logging month"
                - "Record whether you keep the lighter method and why"
            - name: Thirty-day logging block with a fixed end date
              description: |-
                ## Purpose
                Some people learn best from a short, strict block rather than a long loose one. Thirty days with a start date, a clear daily standard and an end-of-block review give a complete picture of portions and habits without committing to months of logging.

                ## Milestones
                1. Start and end dates set, with no holiday or major event inside the block.
                2. A daily standard defined, such as every item weighed and logged before eating.
                3. At least 27 of the 30 days logged to the standard.
                4. An end-of-block review written with three lessons.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A thirty-day block is completed with at least 27 days logged to the written standard and a written review."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Pick thirty clear days and mark the start and end in your calendar"
                - "Write the daily standard you will hold yourself to"
                - "Log every day of the block to that standard"
                - "Write three lessons in an end-of-block review"
            - name: Holiday and travel week tracking plan
              description: |-
                ## Purpose
                Travel brings hotel breakfasts, unfamiliar food and no scale, and most people simply stop logging and lose the thread for weeks. Deciding before you go whether to track lightly, aim for maintenance or pause on purpose keeps the holiday enjoyable and the restart easy.

                ## Milestones
                1. A choice made: track lightly, aim for maintenance, or pause with a restart date.
                2. A travel kit packed if tracking, such as a small scale or the hand-portion card.
                3. The restart date in the calendar.
                4. The first full week home logged in detail.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written travel choice and restart date exist before departure, and the first week home is fully logged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide whether to track lightly, maintain or pause on this trip"
                - "Pack a travel scale or your hand-portion card if you will track"
                - "Put the restart date in your calendar"
                - "Log the first full week home in detail"
            - name: Twelve-week body composition check-in
              description: |-
                ## Purpose
                Twelve weeks is long enough for real change to show through the noise of daily weight. Repeating every baseline measure under the same conditions and setting the results beside twelve weeks of logs answers whether the plan worked and what to change next.

                ## Milestones
                1. Trend weight, tape measurements and photos repeated under baseline conditions.
                2. Average intake and adherence for the twelve weeks summarised.
                3. Results compared with the goal written at the start.
                4. Next steps agreed: continue, adjust targets or end the tracking period.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A twelve-week comparison of all baseline measures against average intake is written up, with next steps agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a quiet morning in week twelve for measurements"
                - "Repeat the baseline weight, tape and photo measures"
                - "Summarise twelve weeks of average intake and adherence"
                - "Review the results with your coach or dietitian and agree next steps"
            - name: Professional body composition scan
              description: |-
                ## Purpose
                Tape and scale cannot separate fat mass from lean mass precisely, and athletes in particular may want a better measure. A clinic DEXA scan or a validated bioimpedance device, repeated under the same conditions, gives two comparable data points across a tracking period.

                ## Milestones
                1. Local options compared for cost, method and how repeatable the conditions are.
                2. A first scan booked with standard preparation: fasted, normally hydrated, no training that morning.
                3. Results saved with the method and conditions.
                4. A second scan by the same method booked for the end of the tracking period.

                ## Notes
                Home bioimpedance scales shift a lot with hydration. Use them for trends at best, never as a single verdict.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two scans by the same method and under the same conditions are recorded, one near the start and one at the end."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the scanning options near you and their prices"
                - "Book a first scan and note the preparation rules"
                - "Save the results with the date, method and conditions"
                - "Book a repeat scan for the end of the tracking period"
            - name: Ending the tracking period and moving to maintenance
              description: |-
                ## Purpose
                Many people stop tracking abruptly and drift back to old portions within weeks. Finishing the period on purpose, with a few weeks at maintenance intake while still logging and a short list of rules to keep afterwards, protects the result you worked for.

                ## Milestones
                1. A maintenance target agreed with your coach or dietitian.
                2. Two to four weeks logged at maintenance with a steady trend weight.
                3. Five portion rules written to keep once logging stops.
                4. A monthly check chosen to catch drift, such as one fully logged day and a weigh-in.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two to four weeks at a steady maintenance trend are logged and five written portion rules exist before daily logging stops."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree a maintenance target with your coach or dietitian"
                - "Log at maintenance until the trend weight holds steady"
                - "Write five portion rules to keep after you stop logging"
                - "Log one full day and check the trend weight @recurring(monthly:15)"
            - name: Training day and rest day targets for athletes
              description: |-
                ## Purpose
                An athlete training twice on Tuesday and resting on Sunday rarely needs the same intake on both days. Setting separate training-day and rest-day targets with a sports dietitian or coach, then logging against the right one, keeps fuelling matched to the week's load.

                ## Milestones
                1. Training and rest day calorie and carbohydrate targets agreed with a qualified professional.
                2. Both target sets saved in the app, or a schedule showing which to use.
                3. Each day of the week tagged by type at the start of the week.
                4. Four weeks of logs reviewed against session quality and recovery.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Training and rest day targets are in the app and four weeks of logs have been reviewed against performance and recovery."
                cadence: rolling
              tasks:
                - "Write out your typical week of sessions with length and intensity"
                - "Agree training and rest day targets with a sports dietitian or coach"
                - "Tag each day as training or rest in the app @recurring(weekly:mon)"
                - "Review four weeks of logs against session quality and recovery"
            - name: Fuel logging for long endurance sessions
              description: |-
                ## Purpose
                Long rides, runs and swims are where under-fuelling hides, because gels, drinks and bars taken on the move rarely make it into the log. Recording carbohydrate per hour in every session over 90 minutes shows whether fuelling matches the plan your coach or dietitian set.

                ## Milestones
                1. A simple per-session note: duration, carbohydrate taken, fluid and how the session felt.
                2. Every session over 90 minutes logged for four weeks.
                3. Carbohydrate per hour compared with the target your coach or dietitian set.
                4. One fuelling change tested in training before any race.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four weeks of long sessions are logged with carbohydrate per hour compared against a target set by a coach or dietitian."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note the carbohydrate per serving of every gel, drink and bar you use"
                - "Log carbohydrate, fluid and feel after each session over 90 minutes"
                - "Compare four weeks of per-hour figures with your coach's target"
                - "Test one fuelling change in training before a race"
            - name: Tracking as a shift worker or with irregular meals
              description: |-
                ## Purpose
                Night shifts, split shifts and on-call weeks break the idea of breakfast, lunch and dinner, and a log organised by calendar day can look chaotic. Logging by waking period rather than midnight, with saved entries for shift food, makes the numbers readable again.

                ## Milestones
                1. A method chosen for shift days: calendar day or waking period.
                2. Saved entries for food eaten on shift, including canteen and vending options.
                3. Weekly averages used instead of daily totals to judge progress.
                4. One full shift cycle reviewed for where most unplanned eating happens.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written shift logging method, saved shift foods and a review of one full shift cycle exist."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether you will log by calendar day or by waking period"
                - "Save entries for the food you usually eat on shift"
                - "Judge progress on weekly averages rather than single days"
                - "Review one shift cycle for where unplanned eating happens"
            - name: Logging your own portion from family meals
              description: |-
                ## Purpose
                When one person tracks and everyone else just eats, the tracker either cooks separately or logs guesses. Weighing the whole dish, then your own plate, lets you share family food while keeping an accurate log, and nobody else at the table has to count anything.

                ## Milestones
                1. Serving dishes weighed empty and their weights noted.
                2. Your portion weighed from the shared dish at each family dinner.
                3. Separate cooking reduced to the occasional side dish at most.
                4. Partners and children kept out of the counting, with no numbers mentioned at the table.

                ## Notes
                Children pick up adult food talk quickly. Keep the scale and the app out of family conversation and let the meal be a meal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your share of family meals is logged by weight for four weeks without cooking separate dinners."
                cadence: rolling
              tasks:
                - "Weigh your serving dishes empty and note the weights"
                - "Weigh the filled dish, then your plate, and log your share"
                - "Note one family meal a week that is hard to portion and plan how to log it"
                - "Keep numbers and the app out of conversation at the table"
            - name: Tracking through an injury or training layoff
              description: |-
                ## Purpose
                When training stops for an injury, an intake that suited a heavy training load can suddenly run high, yet cutting hard may slow healing. Agreeing adjusted targets with your physio, doctor or dietitian, and logging through the layoff, keeps body composition steadier until you return.

                ## Milestones
                1. Your physio or doctor asked about intake during recovery.
                2. Layoff targets set in the app with an expected end date.
                3. Logging kept going through the layoff, at least in a lighter form.
                4. Training targets restored in stages as sessions return.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Layoff targets agreed with a professional are set in the app and logging continues until full training resumes."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio or doctor whether your intake should change while you heal"
                - "Set layoff targets in the app with an expected end date"
                - "Keep logging in a lighter form through the layoff"
                - "Restore training targets in stages as sessions return"
            - name: Weight-class sport weigh-in plan with a coach
              description: |-
                ## Purpose
                Boxers, rowers, judoka and powerlifters often need to be under a set weight on a set day, and last-minute cutting carries real health and performance risks. Planning the approach months ahead with a qualified coach and sports dietitian, and tracking steadily toward it, keeps any cut small and supervised.

                ## Milestones
                1. The weigh-in date, weight class and timing rules recorded.
                2. Current trend weight compared with the class limit and the gap judged with your coach.
                3. A written plan from a qualified professional covering intake, timing and any final-week steps.
                4. Weekly trend weight tracked against the plan until the event.
                5. A post-weigh-in refuelling plan written and practised in training.

                ## Notes
                Never attempt rapid dehydration, sauna cutting or fasting for a weigh-in without qualified medical and coaching supervision. Junior athletes should not cut weight at all unless their coach, parents and a doctor are involved.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A professionally written weigh-in plan exists months ahead, with weekly trend weight tracked against it until the event."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the weigh-in date, weight class and timing rules"
                - "Book a session with your coach and a sports dietitian about the gap"
                - "Track weekly trend weight against the written plan"
                - "Practise the post-weigh-in refuelling plan in training"
            - name: Your own energy expenditure from four weeks of data
              description: |-
                ## Purpose
                Once you have four or more weeks of consistent logs and trend weights, you can estimate your real maintenance intake instead of trusting a calculator. A simple spreadsheet combining average intake with trend change gives a personal figure that sharpens every month.

                ## Milestones
                1. At least four weeks of logs with no more than two estimated days in any week.
                2. A spreadsheet that turns trend weight change and average intake into an expenditure estimate.
                3. The estimate compared with the calculator range from the start.
                4. The sheet updated monthly with the latest data.

                ## Notes
                Converting weight change to energy is an approximation, especially early in a diet or after a change in training. Treat the result as a range and review it with your coach.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spreadsheet gives an expenditure estimate from at least four weeks of your own data and is updated every month."
                cadence: rolling
              tasks:
                - "Export four weeks of daily intake and morning weights"
                - "Ask the agent to build a sheet estimating expenditure from intake and trend"
                - "Compare the result with your original calculator range"
                - "Add last month's data to the expenditure sheet @recurring(monthly:28)"
            - name: Diet break or reverse phase planned with a coach
              description: |-
                ## Purpose
                Long spells in a calorie deficit bring hunger, fatigue and stalled training, so experienced trackers often plan a week or two at maintenance, or a gradual increase after a cut. Planning that phase with a coach in advance, with the numbers in the app, stops it turning into an unlogged free-for-all.

                ## Milestones
                1. The reason for the break or reverse phase agreed with a coach or dietitian.
                2. Start date, length and target intake for the phase written down.
                3. The phase logged in full at the agreed targets.
                4. A review after the phase deciding what comes next.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A coach-agreed break or reverse phase with dates and targets is logged in full and reviewed when it ends."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note the signs that prompted you to consider a break"
                - "Agree the length and intake of the phase with your coach or dietitian"
                - "Enter the phase targets in the app with an end date"
                - "Review energy, training and trend weight when the phase ends"
            - name: A year of tracking data exported and analysed
              description: |-
                ## Purpose
                After a year of logs you hold a detailed record of what you ate, what you weighed and how both shifted with seasons, training blocks and life events. Exporting and analysing it reveals patterns no weekly review can, such as which months always drift and which habits held up.

                ## Milestones
                1. A year of food, weight and measurement data exported to one spreadsheet.
                2. Monthly averages charted for calories, protein, trend weight and days logged.
                3. The three best and three worst periods of adherence identified, with their causes.
                4. Three lessons written for the next year of tracking or maintenance.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A year of exported data is charted by month and three written lessons are saved for the following year."
                cadence: cyclic
              tasks:
                - "Check your app's export options and run a full export"
                - "Combine food, weight and measurement data in one spreadsheet"
                - "Ask the agent to chart monthly averages and flag outlier months"
                - "Write three lessons from the year's data @recurring(yearly)"
            - name: Physique competition prep logging with a coach
              description: |-
                ## Purpose
                Bodybuilding and physique competitors log more precisely than anyone, often for 16 to 24 weeks, with frequent target changes and weekly check-ins. Organising that log, the check-in format and the medical stop rules in advance keeps a demanding prep as safe and well recorded as possible.

                ## Milestones
                1. A qualified coach engaged and the show date set.
                2. A check-in format agreed: weekly weights, photos, adherence and notes in one place.
                3. Every target change recorded with its date and reason.
                4. Health markers and stop rules agreed with your doctor before the final weeks.
                5. A post-show intake plan written before show week.

                ## Notes
                Long, deep deficits affect hormones, mood and sleep. Involve your doctor and blood tests, and treat the weeks after the show as part of the prep.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full prep log with weekly check-ins, dated target changes, medical checks and a written post-show plan exists by show day."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write down the show date and count back to the prep start"
                - "Agree a weekly check-in format with your coach"
                - "Book blood tests with your doctor before and after the prep"
                - "Write the post-show intake plan before show week begins"
---

# Macro & Calorie Tracking

This area is for anyone logging what they eat for a set period, whether to learn what a portion really looks like, to reach a body composition goal or, for athletes, to match fuel to training. It starts with the foundations (a goal and time box, a health check, the app, the scale, a baseline and targets), then the daily and weekly routines that keep the log honest, the skills of weighing and estimating, the decisions that make logging lighter and smarter, dated check-ins and events, versions for athletes, shift workers and families, and finally the specialist work of calculating your own expenditure and analysing a year of data.

What repeats is a log before each meal and a morning weigh-in, a Sunday review, a Friday weekend plan, a Saturday prep-day weigh, monthly measurements, entry checks and target reviews on different days, and a quarterly look at whether tracking still earns its keep. The Purchase decision, Metrics log and Habit tracker templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
