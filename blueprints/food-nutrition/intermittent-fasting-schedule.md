---
id: food-nutrition.intermittent-fasting-schedule
name: Intermittent Fasting Schedule
description: "A careful way to try fasting: a safety check with your doctor, baseline markers, a gentle first pattern, a daily log of hunger and energy, and regular reviews that decide whether to keep, change or stop."
category: personal
version: 1.0.0
tags: [food-nutrition, intermittent-fasting-schedule, everyone, time-restricted-eating, eating-window, fasting-log, health-markers, hunger]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - weekly-meal-plan
    - sleep-review
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Intermittent Fasting Schedule
          description: "Trying time-restricted eating or other fasting patterns safely, tracking how they affect energy, hunger and health markers."
          projects:
            - name: Fasting safety screen with your doctor
              description: |-
                ## Purpose
                Time-restricted eating is not safe for everyone: people who are pregnant or breastfeeding, under 18, living with type 1 diabetes, taking insulin or certain other medicines, or with a past eating disorder are usually advised not to fast without close supervision. A short appointment before you start, with a written list of your conditions and medicines, turns a guess into a clear yes, a yes with conditions, or a no.

                ## Milestones
                1. A one-page list of your conditions, medicines and supplements prepared.
                2. Your doctor or practice nurse asked directly whether fasting is safe for you and which pattern they would accept.
                3. Any conditions they set, such as a maximum fast length or readings to watch, written down.
                4. Their answer recorded at the top of your fasting log with the date.

                ## Notes
                If you have ever had an eating disorder, say so plainly. Fasting rules can restart restrictive patterns, and many clinicians will suggest a different approach altogether.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note of your clinician's answer on whether you may fast, with any conditions they set, sits at the top of your fasting log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every condition, medicine and supplement you take on one page"
                - "Book a short appointment or phone review with your doctor or practice nurse"
                - "Ask which fasting pattern, if any, they consider safe for you"
                - "Write their answer and any conditions at the top of your fasting log"
            - name: Your reasons and stop rules for fasting
              description: |-
                ## Purpose
                People who start fasting because a colleague lost weight often drift off it within a month, or carry on long after it stopped helping. Writing down one or two specific reasons, how you will know at eight weeks whether it is working, and the signs that mean you stop, gives every later review a fixed point to measure against.

                ## Milestones
                1. One or two reasons for fasting written in a sentence each, such as fewer evening snacks or steadier afternoon energy.
                2. A measurable sign of success attached to each reason.
                3. A list of stop signs agreed, including dizziness, fainting, obsessive thoughts about food or a clinician's advice to stop.
                4. The page pinned to the front of your fasting log.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page statement of reasons, success measures and stop rules exists before the first fasting day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down in one sentence why you want to try fasting"
                - "Choose a measure for each reason that you can check at eight weeks"
                - "List the warning signs that will make you stop and seek advice"
                - "Pin the page to the front of your fasting log"
            - name: Two-week record of when you eat now
              description: |-
                ## Purpose
                Most people underestimate how long their eating day already is: a milky coffee at seven, a biscuit at ten and a handful of crisps at eleven at night make a sixteen-hour eating day. Recording the time of every bite and every drink with milk or sugar for two ordinary weeks shows your real window and where the easiest hours to trim are hiding.

                ## Milestones
                1. Fourteen days of first and last intake times recorded, including drinks with milk or sugar.
                2. Your average current eating window worked out in hours.
                3. The two or three habits that stretch the window most, such as late snacking, identified.
                4. A realistic starting window chosen from what the record shows.

                ## Notes
                Do not change anything during these two weeks. The point is an honest picture of a normal fortnight.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fourteen days of recorded first and last intake times exist with an average eating window calculated in hours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a phone note for recording your first and last bite or drink each day"
                - "Record every intake time for fourteen ordinary days"
                - "Work out your average daily eating window from the record"
                - "Circle the habits that stretch the window the most"
            - name: Baseline health markers before fasting
              description: |-
                ## Purpose
                Without a starting point, there is no honest way to say at eight weeks whether fasting changed anything. Recording weight, waist, blood pressure and, if your doctor thinks it useful, a recent blood test before the first fasting day gives you numbers to compare instead of impressions.

                ## Milestones
                1. Weight and waist measured on two mornings in the same week, under the same conditions.
                2. Blood pressure recorded from a home monitor or your most recent clinic reading.
                3. Your doctor asked whether any blood results, such as glucose or cholesterol, are worth having on file first.
                4. All baseline numbers entered on one dated row of your log.

                ## Notes
                Measure your waist at the same point each time, usually level with the navel, and write down where you measured.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One dated baseline row holding weight, waist and any blood pressure or blood results is in the log before fasting starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Weigh yourself on waking on two mornings this week"
                - "Measure your waist at the navel and note where you measured"
                - "Ask your doctor whether a blood test before starting would be useful"
                - "Enter every baseline number on one dated row in your log"
            - name: Choosing a first fasting pattern
              description: |-
                ## Purpose
                The common patterns ask very different things: 12:12 is a closed kitchen after dinner, 16:8 drops a meal every day, 5:2 means two much smaller days a week, and alternate-day fasting is hard for most people to keep. Choosing deliberately, against your safety screen, your week and your reasons, means starting with something you can hold for a month rather than the most extreme version you read about.

                ## Milestones
                1. The main patterns compared on one page by daily hours, how the week feels and who they suit.
                2. Patterns your clinician ruled out crossed off.
                3. One starting pattern chosen, with a sentence on why it fits your week.
                4. A next step written down for if the first month goes well.

                ## Notes
                A gentle start is the sensible default. Most people who move straight to long fasts give up within a fortnight.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One starting pattern is chosen and recorded with a sentence on why it fits, checked against your clinician's conditions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare 12:12, 14:10, 16:8 and 5:2 patterns on one page"
                - "Cross off any pattern your clinician advised against"
                - "Choose one pattern and write why it suits your week"
                - "Note what you would try next if the first month goes well"
            - name: Eating window fitted to your real week
              description: |-
                ## Purpose
                A window that looks right on paper fails the first time it clashes with the school run, a team lunch or Thursday football. Laying your actual weekly commitments over the chosen pattern shows where the window should open and close, and which days need a different time.

                ## Milestones
                1. A week's fixed commitments listed: work hours, family meals, training and regular social events.
                2. Opening and closing times chosen that keep the main shared meal inside the window.
                3. Days needing a different window marked in advance.
                4. The window times saved where you will see them each day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Opening and closing times for each day of the week are written down, including any day-specific exceptions."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the fixed meals and commitments in a normal week"
                - "Choose opening and closing times that keep the main family meal inside"
                - "Mark the days that need a different window"
                - "Save the window times as a phone reminder or a note on the fridge"
            - name: Fasting log with hunger and energy columns
              description: |-
                ## Purpose
                An app streak tells you how many days you fasted, but not whether you slept worse, snapped at people or felt sharper by mid-morning. A simple log with start and end times, hunger, energy, mood and a notes column captures how fasting affects you, not only whether you did it.

                ## Milestones
                1. A log with columns for date, window start, window end, fast length, hunger, energy, mood and notes.
                2. A 1 to 5 scale defined in writing so ratings mean the same thing each day.
                3. Your clinician's conditions and your stop rules copied to the top.
                4. A back-up copy saved somewhere other than your phone.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A log with time, rating and notes columns exists and holds at least seven consecutive days of entries."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create the fasting log from the metrics log template"
                - "Define what 1 and 5 mean for hunger, energy and mood"
                - "Copy your clinician's conditions and your stop rules to the top"
                - "Back up the fasting log to a second location @recurring(monthly:28)"
            - name: Fasting-window drinks list
              description: |-
                ## Purpose
                Arguments about whether a splash of milk breaks a fast waste more energy than they deserve, but you do need one consistent rule so your log means something. Deciding in advance which drinks are fine during the fast, which wait until the window opens, and how you will keep fluids up avoids both accidental grazing and dehydration headaches.

                ## Milestones
                1. A list of drinks you will have during the fast, such as water, sparkling water, black coffee and plain tea.
                2. A list of drinks that wait for the eating window, including milky coffee, juice, smoothies and alcohol.
                3. A decision on sweetened zero-calorie drinks recorded with your reason.
                4. A water bottle routine in place for the fasting hours.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list sorts your usual drinks into fasting hours and eating hours, with a rule for sweetened drinks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every drink you have in a normal week"
                - "Sort each drink into fasting hours or eating hours"
                - "Decide your rule for sweetened zero-calorie drinks and write the reason"
                - "Put a filled water bottle where you work each morning"
            - name: Household agreement on fasting and family meals
              description: |-
                ## Purpose
                Fasting changes when you eat, but the household still has breakfasts, packed lunches and a dinner to share. Agreeing with the people you live with what changes and what does not, especially that children and teenagers do not fast, keeps family meals intact and avoids confusing messages about food.

                ## Milestones
                1. The people you live with told what you are trying and for how long.
                2. Shared meals that stay shared agreed, even if you only have a drink at some of them.
                3. A plan for who cooks and serves the meals that fall outside your window.
                4. A clear line, said out loud, that children in the house are not fasting.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A household agreement on shared meals and cooking duties is written on the fridge or the family calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Tell the people you live with what you are trying and for how long"
                - "Agree which shared meals stay shared whatever your window"
                - "Settle who cooks the meals that fall outside your window"
                - "Revisit the household agreement each school term @recurring(quarterly)"
            - name: First fortnight on a twelve-hour overnight fast
              description: |-
                ## Purpose
                Twelve hours from dinner to breakfast is the gentlest form of time-restricted eating and, for many people, simply means no snacks after the evening meal. Holding it for fourteen days before attempting anything longer shows how your body, sleep and mood respond, and builds the habit of a closed kitchen.

                ## Milestones
                1. Fourteen days of twelve-hour overnight fasts logged.
                2. Evening snacking triggers noted and a replacement, such as a herbal tea, chosen.
                3. Hunger, energy and sleep ratings compared with your baseline fortnight.
                4. A decision written down: hold at twelve hours, or lengthen.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Fourteen logged days of twelve-hour overnight fasts and a written decision on whether to hold or lengthen."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick tonight's kitchen closing time and set a reminder"
                - "Swap your usual evening snack for a drink on your fasting list"
                - "Log each overnight fast for fourteen days"
                - "Compare the fortnight's ratings with your baseline and decide the next step"
            - name: Daily window open and close routine
              description: |-
                ## Purpose
                Fasting schedules fail quietly when the closing time slides by twenty minutes a night until it disappears. A fixed daily routine, with a reminder before the window closes and a two-second note of your first and last bite, keeps the schedule honest without turning it into a project.

                ## Milestones
                1. Two daily phone reminders set: thirty minutes before the window closes and at the opening time.
                2. First and last bite times logged on at least 21 of 30 days.
                3. Days the window slipped noted with a one-line reason.
                4. The routine running without needing to think about it.

                ## Notes
                Start from the **Habit tracker** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "First and last bite times are logged on at least 21 of the last 30 days."
                cadence: rolling
              tasks:
                - "Set a reminder thirty minutes before your closing time"
                - "Log your first and last bite times @recurring(daily)"
                - "Note a one-line reason on days the window slipped"
                - "Count the logged days at the end of each month"
            - name: End-of-day hunger, energy and mood rating
              description: |-
                ## Purpose
                Hunger and energy are the two things fasting changes most, and memory is a poor witness: by Friday nobody remembers how Tuesday felt. A ten-second rating at the end of each day, on the same 1 to 5 scale, builds the evidence the eight-week verdict will need.

                ## Milestones
                1. A rating for hunger, energy and mood recorded at the same time each evening.
                2. A note added on any day with a headache, dizziness or poor sleep.
                3. Four weeks of ratings in the log.
                4. The ratings used in each weekly review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hunger, energy and mood ratings exist for at least 25 of the last 28 days."
                cadence: rolling
              tasks:
                - "Tie the rating to a fixed evening moment, such as brushing your teeth"
                - "Rate hunger, energy and mood from 1 to 5 in the log @recurring(daily)"
                - "Add a short note on any day with a headache, dizziness or poor sleep"
                - "Look at what came before any day that scored 1 on energy"
            - name: Weekly fasting review
              description: |-
                ## Purpose
                Once a week is often enough to spot a pattern and soon enough to fix it before it becomes the new normal. A fifteen-minute Sunday review of how many days held, the average fast length and the ratings turns seven log lines into one decision for next week.

                ## Milestones
                1. Days on schedule, average fast length and average ratings counted each week.
                2. One thing that helped and one that got in the way written down.
                3. One adjustment chosen for next week, or a decision to hold steady.
                4. Twelve weekly reviews completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly summary line with days on schedule, average fast length and one adjustment exists for each of the last eight weeks."
                cadence: rolling
              tasks:
                - "Block fifteen minutes on Sunday evening for the review"
                - "Count the days on schedule and the average fast length @recurring(weekly:sun)"
                - "Write one thing that helped and one that got in the way"
                - "Choose a single adjustment for the coming week"
            - name: Weekly meal plan for the eating window
              description: |-
                ## Purpose
                Fewer meals means each one has to carry more, and a window that opens onto an empty fridge ends in toast and crisps. Planning the week's meals to fit the window, with protein, vegetables and fibre at every main meal, makes the eating hours as deliberate as the fasting ones.

                ## Milestones
                1. A weekly plan listing the meals that fall inside each day's window.
                2. Every main meal checked for a protein source, vegetables and a fibre-rich carbohydrate.
                3. A first meal of the day chosen that is ready within five minutes of the window opening.
                4. A shopping list written from the plan.

                ## Notes
                Start from the **Weekly meal plan** template. Plan only what changes for you; the household's own meals stay as they are.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A meal plan matching each day's eating window is written for at least four weeks in a row."
                cadence: rolling
              tasks:
                - "Write next week's eating windows across the top of the plan"
                - "Plan the meals that fall inside each window @recurring(weekly:sat)"
                - "Check each main meal has protein, vegetables and fibre"
                - "Prepare one quick first meal ahead for the busiest day"
            - name: Monthly body markers check
              description: |-
                ## Purpose
                Daily weighing during fasting mostly measures water and the timing of the last meal, which can make a good week look bad. Measuring weight, waist and, where you have a monitor, blood pressure on the same morning each month gives a trend you can trust and a clear picture for your doctor.

                ## Milestones
                1. A fixed monthly measuring morning chosen, before eating and after the toilet.
                2. Weight, waist and any blood pressure reading recorded on that morning.
                3. Each month compared with the baseline row.
                4. Any unexpected change, such as rising blood pressure, raised with your doctor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Monthly weight and waist readings, and blood pressure where available, sit beside the baseline for at least three months."
                cadence: rolling
              tasks:
                - "Choose your monthly measuring morning and put it in the calendar"
                - "Record weight, waist and blood pressure on measuring morning @recurring(monthly:12)"
                - "Compare this month's row with the baseline row"
                - "Flag any reading that moves the wrong way to your doctor"
            - name: Sleep and last-meal timing review
              description: |-
                ## Purpose
                A late heavy meal can disturb sleep, and going to bed hungry can do the same, but both are easy to miss without looking. Comparing a month of sleep notes with your last-meal times shows whether your closing time helps or hurts your nights.

                ## Milestones
                1. Bedtime, waking time and a sleep quality rating noted beside each day's last-meal time.
                2. Poor nights matched against how long before bed you last ate.
                3. A closing time chosen that leaves a comfortable gap before bed.
                4. The comparison repeated after any change of window.

                ## Notes
                Start from the **Sleep review** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A monthly sleep review compares sleep ratings with last-meal times and records any change made to the closing time."
                cadence: rolling
              tasks:
                - "Add bedtime and a sleep quality rating to the fasting log"
                - "Compare poor nights with the gap between last meal and bed @recurring(monthly:20)"
                - "Move the closing time if poor nights cluster around it"
                - "Note any change of closing time and its date in the log"
            - name: Planned flex days and a restart rule
              description: |-
                ## Purpose
                Rigid schedules break on birthdays, weddings and a friend's visit, and the guilt that follows often ends the whole effort. Choosing your flex days in advance each month, and a simple rule for restarting the next morning, keeps one late dinner from becoming a lost fortnight.

                ## Milestones
                1. A monthly limit on planned flex days agreed with yourself.
                2. Known events for the month marked as flex days in the calendar.
                3. A restart rule written: back to the normal window the next day, without compensating.
                4. Flex days shown in a different colour in the log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's flex days are marked in the calendar in advance and the log shows a return to the normal window the following day."
                cadence: rolling
              tasks:
                - "Decide how many flex days a month fit your goals"
                - "Mark this month's flex days in the calendar @recurring(monthly:2)"
                - "Write your restart rule at the top of the log"
                - "Check after each flex day that the next day was back to normal"
            - name: Hydration routine through the fasting hours
              description: |-
                ## Purpose
                Plenty of early fasting headaches, tiredness and constipation trace back to drinking less, because food supplies a good share of daily fluid and the usual mid-morning cup has gone. A simple routine tied to fixed points in the day keeps fluids up without counting glasses.

                ## Milestones
                1. Three fixed drinking points in the fasting hours chosen, such as waking, arriving at work and mid-morning.
                2. A bottle or jug you can see through the day in place.
                3. Headache notes compared for the fortnight before and after the routine.
                4. Your clinician asked about fluid limits if you have a kidney or heart condition or take water tablets.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three daily drinking points are set and the log shows fewer headache notes over two weeks than the fortnight before."
                cadence: rolling
              tasks:
                - "Choose three fixed points in the fasting hours to drink a glass of water"
                - "Keep a bottle you can see on the desk or worktop"
                - "Compare headache notes before and after a fortnight of the routine"
                - "Ask your clinician about fluid limits if you have a heart or kidney condition"
            - name: Quarterly keep, change or stop review
              description: |-
                ## Purpose
                Fasting is a tool, not an identity, and the right answer after three months can be to stop. A quarterly review against your written reasons, the marker trend and the ratings forces a clear decision instead of drifting along on habit.

                ## Milestones
                1. Three months of weekly summaries and monthly markers read together.
                2. Each written reason scored as met, partly met or not met.
                3. A decision recorded: keep, change the pattern, or stop.
                4. The next review date set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated keep, change or stop decision is recorded each quarter with the evidence behind it."
                cadence: cyclic
              tasks:
                - "Gather the last three months of weekly summaries and markers"
                - "Ask the agent to summarise the quarter's log into five lines"
                - "Score each written reason as met, partly met or not met"
                - "Record a keep, change or stop decision with its evidence @recurring(quarterly)"
            - name: Fasting summary for the annual check-up
              description: |-
                ## Purpose
                Your doctor sees you once a year for a few minutes, and a year of fasting is easy to forget to mention or hard to explain on the spot. Bringing a one-page summary of your pattern, markers and any side effects means it is weighed properly alongside your blood results and medicines.

                ## Milestones
                1. A one-page summary of the year: pattern, typical window, marker trend and side effects.
                2. The summary brought to the annual check-up.
                3. Your doctor's view on carrying on written in the log.
                4. Any change to medicines or conditions checked against your fasting plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page fasting summary is shared at the annual check-up and the doctor's view is recorded in the log."
                cadence: cyclic
              tasks:
                - "Book your annual check-up and note the date in the log @recurring(yearly)"
                - "Write a one-page summary of the year's pattern, markers and side effects"
                - "Hand the summary to your doctor at the appointment"
                - "Record your doctor's view on carrying on"
            - name: How hunger behaves during a fast
              description: |-
                ## Purpose
                Hunger in the first weeks of fasting tends to arrive in waves at your old meal times and pass within twenty to thirty minutes, rather than building steadily all morning. Knowing that pattern, and testing a few ways to ride a wave out, is the difference between a fast you finish and one you abandon at eleven every morning.

                ## Milestones
                1. A reliable explainer on hunger hormones and meal-time habits read and summarised in five lines.
                2. The times your hunger waves arrive recorded for one week.
                3. Three ways to ride out a wave tried, such as a walk, a drink or a short task.
                4. The method that worked best written into your log.

                ## Notes
                Hunger that keeps growing, or comes with shakiness, sweating or confusion, is not a wave. Eat, and mention it to your doctor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One week of hunger-wave times is recorded and the most effective coping method is written in the log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read one reliable explainer on hunger hormones and meal-time habits"
                - "Record the time of each hunger wave for one week"
                - "Try a walk, a drink and a short task when a wave arrives"
                - "Write down which method shortened the wave most"
            - name: What the research says about time-restricted eating
              description: |-
                ## Purpose
                Trials of time-restricted eating show mixed results, and many striking claims come from animal studies or very short human trials. Spending a few hours with good summaries, rather than social media clips, sets fair expectations about what fasting is likely to change for you and what remains unproven.

                ## Milestones
                1. Two or three recent review articles or summaries from health services or universities read.
                2. A one-page note of what the evidence supports, what is uncertain and what is unproven.
                3. Your written reasons for fasting checked against that note.
                4. Expectations adjusted wherever they went beyond the evidence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page evidence note separating supported, uncertain and unproven claims is filed with your reasons for fasting."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find two recent review articles or health service summaries on time-restricted eating"
                - "Note what each finds on weight, blood sugar and blood pressure"
                - "Ask the agent to draft a one-page note of supported and unproven claims"
                - "Check your written reasons against the note and adjust them"
            - name: Spotting misleading fasting claims and products
              description: |-
                ## Purpose
                Supplements, so-called fasting-safe snacks, paid challenges and bold promises about longevity and detox all attach themselves to fasting. A short checklist for judging a claim, asking who funded it, whether it was tested in people and what it is selling, saves money and keeps your plan grounded.

                ## Milestones
                1. A five-question checklist for judging fasting claims written.
                2. Three claims you have seen tested against the checklist.
                3. Any fasting product or subscription you pay for reviewed against it.
                4. Products that failed the checklist cancelled or left on the shelf.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-question claim checklist exists and every paid fasting product or subscription has been judged against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five questions to ask of any fasting claim"
                - "Test three claims you have seen online against the questions"
                - "List any fasting products or subscriptions you pay for"
                - "Cancel anything that fails the checklist"
            - name: Getting enough nutrition in fewer meals
              description: |-
                ## Purpose
                Squeezing the day into two meals makes it easy to fall short on protein, fibre, calcium and fruit and vegetables without noticing. Learning what a well-built meal looks like for your window, and checking a typical week against it, protects the quality of what you eat while the timing changes.

                ## Milestones
                1. A typical week inside the window written out meal by meal.
                2. Each meal checked for protein, vegetables or fruit, a fibre-rich carbohydrate and a calcium source.
                3. Two or three gaps identified, such as no fruit on the longest fasting days.
                4. A swap planned for each gap and added to the meal plan.

                ## Notes
                If you also follow a restrictive diet or have a medical condition, a registered dietitian can check the plan properly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A typical week of window meals is checked against four food groups and at least two gaps have planned swaps."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write out what you ate inside your window for one typical week"
                - "Check each meal for protein, vegetables, fibre and calcium"
                - "List the two or three most common gaps"
                - "Add a swap for each gap to next week's meal plan"
            - name: Early side effects and when to stop
              description: |-
                ## Purpose
                Headaches, irritability, poor concentration, constipation and broken sleep are common early on and often settle within two weeks, but some symptoms are warnings rather than adjustment. Knowing in advance which is which, and what you will do about each, stops you pushing through something that needs attention.

                ## Milestones
                1. A list of common early side effects and simple responses written in the log.
                2. A separate list of warning signs that mean stop and seek advice, such as fainting, palpitations or confusion.
                3. Your doctor or pharmacist asked whether your medicines add any signs to watch.
                4. The out-of-hours number for your health service kept with the log.

                ## Notes
                This organises the advice of your own health service; it does not replace it.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two written lists, common side effects with responses and warning signs with actions, are in the log and checked with a pharmacist or doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your health service's guidance on fasting side effects"
                - "Write common side effects and simple responses on one list"
                - "Write the warning signs that mean stop and seek help on a second list"
                - "Ask your pharmacist whether your medicines add any signs to watch"
            - name: Opening the window without overeating
              description: |-
                ## Purpose
                After sixteen hours, the first meal can disappear in five minutes and be followed by an afternoon of grazing that undoes the point of the schedule. Practising a planned, slower first meal, plated rather than eaten from the packet and started with protein and vegetables, makes the window opening calmer.

                ## Milestones
                1. A standard first meal planned and ready before the window opens.
                2. The first meal eaten sitting down, from a plate, over at least fifteen minutes on most days.
                3. Afternoon grazing compared for two weeks before and after.
                4. The approach that worked recorded as your default.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "On at least ten of fourteen days the first meal is planned, plated and eaten seated, with grazing notes compared before and after."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Plan a standard first meal you can have ready before the window opens"
                - "Eat the first meal sitting down, from a plate, for fourteen days"
                - "Note any afternoon grazing in the log"
                - "Compare grazing notes from before and after the fortnight"
            - name: Reading your own fasting data
              description: |-
                ## Purpose
                One bad week sticks in the memory, and a month of log lines can be read to prove almost anything. Learning a few simple habits, using weekly averages, comparing like with like and changing one thing at a time, lets you draw honest conclusions from your own numbers.

                ## Milestones
                1. Weekly averages calculated for fast length, ratings and markers.
                2. A simple chart of the weekly averages made in a spreadsheet.
                3. A rule written: change one thing at a time and give it two weeks.
                4. One conclusion from the data written and checked against the chart.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chart of weekly averages exists and one written conclusion is supported by at least four weeks of data."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a weekly average row for fast length and each rating"
                - "Chart the weekly averages in a spreadsheet"
                - "Write the one-change-at-a-time rule at the top of the log"
                - "Write one conclusion and check it against the chart"
            - name: Early versus late eating window trial
              description: |-
                ## Purpose
                Some studies suggest an earlier window, such as eight until four, suits blood sugar and sleep better than a late one, but an early window can also mean missing the family dinner. A trial of two fortnights, one on each window and logged the same way, lets your own ratings and your life decide instead of a headline.

                ## Milestones
                1. Two windows of the same length chosen, one early and one late.
                2. Two weeks lived on each, with ratings logged daily.
                3. Average hunger, energy, sleep and days held compared for each fortnight.
                4. The window you will keep chosen and recorded with the reason.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two fortnights of logs on early and late windows are compared and the chosen window is recorded with its reason."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose an early and a late window of the same length"
                - "Live two weeks on the early window and log every day"
                - "Live two weeks on the late window and log every day"
                - "Compare the two fortnights and record which window you keep"
            - name: Lengthening the fast in half-hour steps
              description: |-
                ## Purpose
                Jumping from twelve hours to sixteen overnight is the most common reason people give up in the first week. Adding thirty minutes every few days, and only moving on when the current length feels routine, reaches a longer fast with far less hunger and irritability.

                ## Milestones
                1. A step plan written from your current fast length to a target within any limit your clinician set.
                2. Each step held for at least three days with ratings logged.
                3. Any step that pushed ratings down held longer before moving on.
                4. The target length reached, or a lower ceiling chosen deliberately.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The log shows fast length increasing in thirty-minute steps of at least three days each to a recorded target or ceiling."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the steps from your current fast length to the target in thirty-minute increments"
                - "Hold each step for at least three days"
                - "Hold a step longer whenever the ratings drop"
                - "Record the final length you settled on and why"
            - name: Trying two reduced-intake days a week
              description: |-
                ## Purpose
                For people whose daily routine clashes with a fixed window, two reduced-intake days a week with normal eating on the other five can fit better. Trialling it for six weeks, with the intake level and the days agreed with your doctor or a dietitian, shows whether it suits you more than a daily schedule.

                ## Milestones
                1. Your doctor or a dietitian asked to agree the intake level and whether the pattern suits you.
                2. Two non-consecutive low days chosen that avoid heavy work or training days.
                3. Simple low-day meals planned for the first two weeks.
                4. Six weeks logged and compared with your daily-window weeks.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Six weeks on a two-low-days pattern are logged and compared with the daily window, with a recorded choice between them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your doctor or a dietitian to agree the low-day intake for you"
                - "Pick two non-consecutive low days that avoid training or heavy work"
                - "Plan simple meals for the first two weeks of low days"
                - "Compare six weeks of logs with your daily-window weeks"
            - name: Fixing weekend window drift
              description: |-
                ## Purpose
                Weekday schedules often hold well and then dissolve between Friday night drinks and a late Sunday brunch, leaving Monday the hardest fasting day of the week. Deciding a separate, realistic weekend window in advance is usually easier than forcing the weekday one onto Saturday.

                ## Milestones
                1. Four weekends of actual window times reviewed.
                2. A weekend window chosen that includes the meals you want to keep, such as a late breakfast.
                3. Monday ratings compared before and after the change.
                4. The weekend window written into your plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A separate weekend window is written down and held on at least three of the next four weekends."
                cadence: rolling
              tasks:
                - "Look back at four weekends of actual window times"
                - "Choose a weekend window that keeps the meals you enjoy"
                - "Set Saturday and Sunday window times each Friday @recurring(weekly:fri)"
                - "Compare Monday ratings before and after the change"
            - name: Choosing a fasting timer app or a paper log
              description: |-
                ## Purpose
                Apps for fasting range from free timers to subscriptions with coaching, and some push longer fasts, streaks and paid challenges you did not ask for. Deciding between an app and a plain paper or spreadsheet log, against what you actually need to record, avoids paying for features that work against your plan.

                ## Milestones
                1. What you need to record written down: times, ratings, notes and markers.
                2. Two or three apps compared with a spreadsheet on cost, privacy and data export.
                3. The data-sharing settings of your preferred option checked.
                4. One tool chosen and set up, with any free trial end date noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One logging tool is chosen against a written list of needs, with privacy settings checked and any trial end date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what you need to record each day"
                - "Compare two apps with a spreadsheet on cost, privacy and data export"
                - "Check the data-sharing settings of the option you prefer"
                - "Put any free trial end date in the calendar"
            - name: Eight-week verdict on whether fasting is working
              description: |-
                ## Purpose
                Eight weeks is long enough for the early adjustment to pass and short enough that you have not invested years in something that is not helping. Comparing the log with your baseline and your written reasons produces a clear verdict you can explain to your doctor.

                ## Milestones
                1. Eight weeks of window times, ratings and monthly markers gathered.
                2. Each written reason checked against its success measure.
                3. Any side effects or stop signs from the period listed.
                4. A verdict written: continue, adjust or stop, with the evidence.
              priority: high
              deadlineOffsetDays: 70
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written eight-week verdict compares each reason with its measure and states continue, adjust or stop."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather eight weeks of log entries and the baseline row"
                - "Check each written reason against its success measure"
                - "List any side effects or stop signs from the period"
                - "Write the verdict and the evidence behind it"
            - name: Work meals, dinners out and drinks on a schedule
              description: |-
                ## Purpose
                Client lunches, after-work drinks and dinners with friends are where most schedules bend, and deciding on the spot usually means abandoning the day. Agreeing a few rules in advance, which events you move the window for and which you join with a drink only, lets you take part without renegotiating every time.

                ## Milestones
                1. The regular social and work meals in a typical month listed.
                2. A rule chosen for each: move the window, have a drink only, or treat it as a flex day.
                3. A short, easy line ready for when someone asks why you are not eating.
                4. The rules tested for a month and adjusted.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written rules cover each regular social or work meal type and have been used for at least a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the work and social meals in a typical month"
                - "Choose a rule for each: shift the window, drink only, or flex day"
                - "Prepare a short line for when someone asks why you are not eating"
                - "Review how the rules held after a month"
            - name: Pausing or stopping fasting without a rebound
              description: |-
                ## Purpose
                Stopping a fasting schedule without a plan often swings straight into all-day grazing, which can reverse whatever you gained. Moving back to regular meals deliberately, with set meal times and a reason recorded, makes stopping a decision rather than a lapse.

                ## Milestones
                1. The reason for pausing or stopping written in the log.
                2. A regular meal pattern chosen for the following weeks, with set meal times.
                3. Markers checked one month after stopping.
                4. A note of what you would do differently if you start again.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated stop or pause note, a regular meal pattern and a one-month marker check are recorded in the log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down why you are pausing or stopping"
                - "Choose set meal times for the next four weeks"
                - "Check your markers one month after stopping"
                - "Note what you would change if you start again"
            - name: Thirty-day time-restricted eating trial
              description: |-
                ## Purpose
                Committing to a defined thirty-day trial, with a start date, an end date and a review already booked, is easier than an open-ended plan and easier to judge. It gives you a month of clean data and a natural point to choose whether to carry on.

                ## Milestones
                1. A start date chosen that avoids holidays, big deadlines and festivals.
                2. The month's flex days and known events marked in advance.
                3. Thirty days logged with times and ratings.
                4. A review held within three days of the end date and the outcome written down.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Thirty consecutive days are logged and a review is written within three days of the trial ending."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a thirty-day stretch without holidays or big deadlines"
                - "Mark the start, end and review dates in the calendar"
                - "Log every day of the trial"
                - "Hold the review and write down the outcome"
            - name: Fasting plan for travel and time zone changes
              description: |-
                ## Purpose
                Long flights, hotel breakfasts and a five-hour time difference make the usual window meaningless, and keeping home time abroad rarely works. A short plan before you go, often pausing on travel days and restarting on local time, avoids fasting through a long-haul flight while jet-lagged and dehydrated.

                ## Milestones
                1. Travel days and time zone changes listed for the trip.
                2. A decision made for each travel day: pause, or a simple local-time window.
                3. Water and an easy meal planned for the flights and transfers.
                4. A restart date on local time written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written travel plan shows a pause or window rule for each travel day and a restart date on local time."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the travel days and time differences for the trip"
                - "Decide whether to pause or keep a local window on each travel day"
                - "Pack water and an easy meal for the flights and transfers"
                - "Write the restart date on local time in the log"
            - name: Festive season pause and restart
              description: |-
                ## Purpose
                Christmas, Diwali, Eid celebrations, Thanksgiving and the new year are built around shared meals, and fasting through them tends to cause friction and a sense of failure. Planning a deliberate pause with a restart date usually works better than a running battle with every family meal.

                ## Milestones
                1. Festive dates and family gatherings for the season listed.
                2. A full pause or a lighter pattern chosen for the period.
                3. A restart date written in the calendar.
                4. The restart week planned with simple, familiar meals.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Festive pause dates and a restart date are in the calendar and the restart week is planned before the season begins."
                cadence: cyclic
              tasks:
                - "Mark the festive pause dates in the calendar @recurring(yearly)"
                - "Decide between a full pause and a lighter pattern for the season"
                - "Write the restart date in the calendar"
                - "Plan simple meals for the restart week"
            - name: Following clinic fasting instructions before a test
              description: |-
                ## Purpose
                Blood tests, scans, endoscopies and operations may come with their own fasting instructions, and these override any personal schedule. Writing them down exactly, including which medicines and drinks are allowed and until when, avoids a cancelled appointment or an unsafe gap for people on diabetes or other medicines.

                ## Milestones
                1. The clinic's written fasting instructions found and copied into the log.
                2. Rules for medicines, water and other drinks confirmed with the clinic or pharmacist.
                3. Your personal schedule paused or adjusted so you are not fasting longer than asked.
                4. A first meal planned for after the appointment.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The clinic's fasting instructions, including medicine rules, are written down and followed for the appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy the clinic's fasting instructions into the log word for word"
                - "Ask the clinic or pharmacist which medicines and drinks are allowed"
                - "Pause your own schedule so you do not fast longer than asked"
                - "Pack a snack and water for after the appointment"
            - name: Three-month fasting review with your doctor
              description: |-
                ## Purpose
                Three months in is when any effect on weight, blood pressure or blood results should show, and when a doctor can say whether to carry on, change course or stop. Booking the review at the start, and arriving with a one-page summary, makes the appointment useful rather than a passing mention.

                ## Milestones
                1. The review booked roughly three months after your first fasting day.
                2. Any blood test your doctor wants booked in time for the results.
                3. A one-page summary of the pattern, markers, side effects and verdict prepared.
                4. The doctor's advice recorded in the log.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A review with your doctor is held around three months in, with a summary shared and their advice recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a review with your doctor for about three months after you start"
                - "Ask whether a blood test should be done before the review"
                - "Ask the agent to draft a one-page summary from the log"
                - "Record your doctor's advice in the log after the appointment"
            - name: Fasting around night shifts and rotating rotas
              description: |-
                ## Purpose
                Shift workers already eat at odd hours, and a clock-time window built for a nine-to-five day collides with nights, earlies and lates. Anchoring the window to your sleep rather than the clock, and planning it rota by rota, gives a schedule that bends with the shifts.

                ## Milestones
                1. A month of shifts and sleep times mapped on one page.
                2. A window rule written for each shift type, relative to when you wake.
                3. A plan for the main meal on night shifts that avoids heavy food in the small hours.
                4. Changeover days between shift types marked as flex days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Window rules tied to sleep times are written for each shift type and applied to the next published rota."
                cadence: rolling
              tasks:
                - "Map a month of shifts and sleep times on one page"
                - "Write a window rule for each shift type based on when you wake"
                - "Mark changeover days between shifts as flex days"
                - "Set the next rota's eating windows when it is published @recurring(monthly:24)"
            - name: Fasting as a parent of young children
              description: |-
                ## Purpose
                Children notice who skips breakfast and who says they are not eating, and they copy. Fasting as a parent works best when your window still includes shared meals, food talk stays neutral and children hear nothing about skipping meals being good.

                ## Milestones
                1. Your window arranged so at least one daily family meal sits inside it.
                2. Weekend family breakfasts or brunches kept.
                3. A neutral answer agreed for when children ask why you are not eating.
                4. The children's own meals and snacks checked to be unchanged by your schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least one shared family meal a day sits inside your window and weekend family breakfasts continue."
                cadence: rolling
              tasks:
                - "Move your window so one family meal a day falls inside it"
                - "Agree a neutral answer for when children ask why you are not eating"
                - "Hold a family breakfast or brunch together at the weekend @recurring(weekly:sat)"
                - "Check that the children's meals and snacks have not changed"
            - name: Gentle fasting after sixty
              description: |-
                ## Purpose
                Later in life appetite often falls, muscle is harder to keep and more medicines need to be taken with food, so a long daily fast carries more trade-offs. Agreeing a gentle pattern with your doctor, and checking that your meals still provide enough protein, keeps fasting from quietly speeding up muscle loss.

                ## Milestones
                1. Your doctor asked whether fasting suits you, given your medicines and your bone and muscle health.
                2. A gentle overnight pattern chosen within any limit they set.
                3. Protein at each meal checked and topped up where low.
                4. A simple strength measure, such as the time for five chair stands, noted every three months.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gentle pattern agreed with your doctor is in use, with protein checked at each meal and a strength measure noted each quarter."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor whether fasting suits your medicines and muscle health"
                - "Choose a gentle overnight fast within any limit they set"
                - "Check each meal includes a source of protein"
                - "Time five chair stands and note the result in the log"
            - name: Medicine timing review with a pharmacist
              description: |-
                ## Purpose
                Some medicines must be taken with food, some on an empty stomach, and some, including several for diabetes and blood pressure, can cause problems when meals are skipped. A pharmacist can check every medicine against your window in a few minutes and tell you which timings need to change.

                ## Milestones
                1. A list of every medicine and supplement with its usual time taken to the pharmacist.
                2. Each medicine's food requirement checked against your window.
                3. Any timing change written down and agreed with the prescriber where needed.
                4. The updated medicine times added to your phone reminders.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pharmacist has checked every medicine against your eating window and the agreed times are written in the log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every medicine and supplement with the time you take it"
                - "Ask your pharmacist to check each one against your eating window"
                - "Write down any timing changes and confirm them with your prescriber"
                - "Recheck medicine timings with the pharmacist each year @recurring(yearly)"
            - name: Fasting across the menstrual cycle and perimenopause
              description: |-
                ## Purpose
                Hunger, energy and sleep can shift through the menstrual cycle, and more unpredictably in perimenopause, and some people find long fasts harder in the days before a period. Logging cycle days beside your fasting data shows whether a shorter window in certain weeks would make the schedule easier to keep.

                ## Milestones
                1. A cycle day or perimenopause symptom column added to the log.
                2. Three cycles of fasting data logged with cycle days.
                3. Any weeks with consistently higher hunger or lower energy identified.
                4. A shorter or flexible window planned for those weeks if the pattern is clear.

                ## Notes
                Any change in your periods after starting fasting is worth raising with your doctor.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three cycles of fasting data are logged with cycle days and any planned window changes are written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add a cycle day or symptom column to the fasting log"
                - "Log fasting and cycle data for three cycles"
                - "Look for weeks where hunger rises or energy falls"
                - "Plan a shorter window for those weeks if the pattern is clear"
            - name: Religious fasts alongside your usual schedule
              description: |-
                ## Purpose
                Ramadan, Lent, Yom Kippur, Navratri and other religious fasts have their own rules, timings and community meals, and they take precedence over a personal schedule. Planning ahead, pausing your own pattern and preparing the pre-dawn and fast-breaking meals lets you observe the fast well and return to your routine afterwards.

                ## Milestones
                1. The dates and rules of the coming religious fast written down.
                2. Your personal schedule paused in the log for the period.
                3. Simple pre-dawn and fast-breaking meals planned with fluids in mind.
                4. Your doctor asked about medicines and health conditions before the fast, where relevant.
                5. A restart date for your usual schedule set.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The religious fast dates, a plan for its meals and a restart date for your usual schedule are written down before it begins."
                cadence: cyclic
              tasks:
                - "Check the dates of the next religious fast you observe @recurring(yearly)"
                - "Pause your personal schedule in the log for the period"
                - "Plan simple pre-dawn and fast-breaking meals with plenty of fluids"
                - "Ask your doctor about medicines and timings before the fast begins"
            - name: Fasting alongside regular training
              description: |-
                ## Purpose
                Hard sessions after a long fast can feel flat, and training late after closing the window can leave recovery without fuel. Placing the window around your training, rather than the other way round, keeps sessions strong while you keep the schedule.

                ## Milestones
                1. A week of training sessions mapped against the window.
                2. Key sessions placed inside the window or within a few hours of it opening.
                3. A meal planned inside the window after each hard session.
                4. Session quality rated for four weeks and compared with before.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Key training sessions sit inside or close to the window and four weeks of session ratings are logged."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Map this week's training sessions against your eating window"
                - "Move the window or the sessions so hard sessions fall near eating hours"
                - "Plan a meal inside the window after each hard session"
                - "Rate last week's sessions and note fast length beside each @recurring(weekly:mon)"
            - name: Two-week glucose monitor experiment with your clinician
              description: |-
                ## Purpose
                Continuous glucose monitors are now sold direct to consumers, and wearing one for two weeks can show how your window and first meal affect blood sugar. The curves are easy to misread without a clinician's input, so agreeing the experiment and how to interpret it with them first makes the data worth having.

                ## Milestones
                1. Your clinician asked whether the experiment is worthwhile and how they would read the results.
                2. A two-week sensor worn alongside a log of window times and meals.
                3. Readings around each window opening and first meal summarised.
                4. The summary discussed with your clinician and any change recorded.

                ## Notes
                If you live with diabetes, any change to your fasting or monitoring belongs with your diabetes team.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two weeks of sensor data matched to window and meal times are summarised and reviewed with your clinician."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician whether a two-week glucose sensor trial would be useful"
                - "Wear the sensor for fourteen days while logging window and meal times"
                - "Summarise readings around each window opening and first meal"
                - "Book time with your clinician to go through the summary"
            - name: Supervised longer fasts, a decision with your clinician
              description: |-
                ## Purpose
                Fasts of a day or more carry real risks, including dehydration, dizziness, interactions with medicines and refeeding problems after very long fasts. Experienced fasters sometimes consider them, and the only sound way to decide is with a clinician who knows your history, in writing, before you try one.

                ## Milestones
                1. Your reasons for wanting a longer fast written down.
                2. An appointment held with your clinician to discuss whether it is appropriate for you.
                3. Their decision and any conditions, monitoring or limits recorded.
                4. If they advise against it, the reasoning noted and the idea dropped.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A clinician's yes or no on longer fasts, with any conditions, is recorded before any fast over 24 hours is attempted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down why you want to try a fast longer than a day"
                - "Book an appointment to discuss it with your clinician"
                - "Record their decision and any conditions or monitoring"
                - "Drop the idea if they advise against it, and note why"
            - name: Personal fasting playbook
              description: |-
                ## Purpose
                After six months or more you know things no general guide can tell you: the window that suits your week, the first meal that holds you, the warning signs specific to you. A short written playbook captures it, so a restart after illness, a new job or a new baby takes days rather than months of trial and error.

                ## Milestones
                1. Your current pattern, window and drinks rules on one page.
                2. Your best first meals, coping methods and flex rules listed.
                3. Your personal warning signs and your clinician's conditions included.
                4. A five-step restart plan for after a break written.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook of no more than three pages covers your pattern, meals, flex rules, warning signs and a five-step restart plan."
                cadence: rolling
              tasks:
                - "Write your current pattern, window and drinks rules on one page"
                - "List your best first meals, coping methods and flex rules"
                - "Add your personal warning signs and your clinician's conditions"
                - "Update the playbook after each quarterly review @recurring(quarterly)"
---

# Intermittent Fasting Schedule

This area is for anyone curious about time-restricted eating or another fasting pattern who wants to try it carefully and judge it on their own evidence, not a friend's results. It starts with the foundations (a safety check with your doctor, written reasons and stop rules, a record of when you eat now, baseline markers, a first pattern and a gentle twelve-hour fortnight), then the daily and weekly routines that keep the schedule honest, the skills of riding out hunger and reading your own data, the trials and decisions about window timing and length, dated events such as a thirty-day trial and a clinic fast, versions for shift workers, parents, older adults, people who train and religious fasts, and finally the specialist work of glucose experiments, supervised longer fasts and a personal playbook.

What repeats is a daily note of your first and last bite with an evening rating, a Saturday meal plan and a Sunday review, a monthly measuring morning and sleep check, a quarterly keep, change or stop decision and the annual check-up with your doctor. The Metrics log, Habit tracker, Weekly meal plan and Sleep review templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
