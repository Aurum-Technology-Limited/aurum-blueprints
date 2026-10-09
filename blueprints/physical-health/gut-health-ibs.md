---
id: physical-health.gut-health-ibs
name: Gut Health & IBS Management
description: "A symptom diary, a red flag card and the right first tests, then low FODMAP and fibre trials, reflux and toilet routines, gastroenterology visits, flare plans and the gut-brain skills that settle symptoms."
category: personal
version: 1.0.0
tags: [physical-health, gut-health-ibs, everyone, ibs, reflux, low-fodmap, inflammatory-bowel-disease, symptom-diary]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - weekly-meal-plan
    - purchase-decision
    - meeting-notes
    - trip
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Gut Health & IBS Management
          description: "Investigating and managing digestive symptoms, IBS, reflux or inflammatory bowel disease with symptom diaries, tests, gastroenterology visits and treatment trials."
          projects:
            - name: Two-week bowel and symptom diary
              description: |-
                ## Purpose
                Memory is a poor witness when a doctor asks how often, how bad and after what. Two weeks of short daily entries covering stool form, frequency, pain, bloating, urgency, meals and sleep turn a vague complaint into a pattern a clinician can work with, and they are the baseline every later diet or treatment trial is measured against.

                ## Milestones
                1. A diary with columns for date, stool type and count, pain score, bloating, urgency, meals, stress and sleep.
                2. Fourteen consecutive days recorded, including weekends and any bad days.
                3. A short summary of averages and the clearest patterns written at the end.
                4. The diary kept somewhere you can show it at an appointment.

                ## Notes
                Start from the **Metrics log** template. Keep each entry under two minutes or the diary will not survive the first week.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A diary with fourteen consecutive days of entries and a written summary of the main patterns."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a symptom diary from the metrics log template"
                - "Add a 0 to 10 pain score and a Bristol stool type column"
                - "Record every bowel movement, meal and symptom for fourteen days"
                - "Ask the agent to summarise the fourteen days into a one-page pattern summary"
            - name: Red flag bowel symptoms card
              description: |-
                ## Purpose
                Some gut symptoms are not IBS and should be seen quickly: blood in the stool, unexplained weight loss, waking at night to open your bowels, a lasting change in habit later in life, a lump or difficulty swallowing. A card written from your health service's own guidance means you know which symptoms need a prompt appointment and which can wait for the routine review.

                ## Milestones
                1. Your health service's published warning signs for bowel and stomach symptoms found.
                2. A one-page card listing the signs, who to contact and how quickly.
                3. Any family history of bowel cancer, coeliac disease or IBD added to the card.
                4. The card kept with your diary and checked once a year.

                ## Notes
                This card organises your health service's advice; it does not replace a clinician's judgement. If in doubt, ask.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A red flag card based on your health service's guidance, with contact routes and family history, kept with your symptom diary."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's warning signs for bowel symptoms"
                - "Write the signs and the right contact for each on one card"
                - "Ask close relatives about bowel cancer, coeliac disease or IBD in the family"
                - "Reread the card and update the family history @recurring(yearly)"
            - name: First appointment about gut symptoms
              description: |-
                ## Purpose
                Ten minutes is not long to explain months of cramps and urgency, and the things that matter most often get forgotten in the room. Arriving with a one-page timeline, your diary summary and three questions gives the doctor what they need to decide on tests, and gives you a clear next step to leave with.

                ## Milestones
                1. A one-page timeline of when symptoms started and how they have changed.
                2. The diary summary and a list of everything already tried attached.
                3. Three priority questions written in order of importance.
                4. The doctor's plan, tests ordered and follow-up date written down after the visit.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An appointment attended with a one-page summary, and the agreed plan, tests and follow-up date recorded the same day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment with your doctor about ongoing gut symptoms"
                - "Write a one-page timeline of symptoms and what you have tried"
                - "List your three most important questions in order"
                - "Write down the plan and any tests ordered before leaving the surgery"
            - name: Tests to ask about before an IBS label
              description: |-
                ## Purpose
                IBS is usually diagnosed once a few other conditions have been ruled out, and those checks are easy to skip. Knowing which ones your clinician may consider, such as a coeliac blood test, a full blood count, inflammation markers or a stool calprotectin test, lets you ask the right question and avoid doing the wrong thing first, like cutting out gluten before a coeliac test.

                ## Milestones
                1. Your clinician asked which first-line tests apply to your symptoms and age.
                2. Advice on whether to keep eating gluten before a coeliac test confirmed.
                3. Each test booked, done and its result recorded with the date.
                4. A short note of what each result means for the diagnosis, in your clinician's words.

                ## Notes
                Do not start a gluten-free diet before coeliac testing unless your clinician advises it: it can make the test falsely reassuring.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every first-line test your clinician recommends has a recorded result and a one-line explanation of what it rules in or out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your clinician which tests they want before calling it IBS"
                - "Confirm whether you should keep eating gluten until the coeliac test"
                - "Book the blood and stool tests your clinician requested"
                - "Record each result with its date and the explanation you were given"
            - name: Medicines and supplements that affect the gut
              description: |-
                ## Purpose
                Iron tablets, strong painkillers, some diabetes and blood pressure medicines, antibiotics and even magnesium supplements can cause constipation, diarrhoea or reflux. A complete list reviewed once with a pharmacist sometimes explains symptoms that have been blamed on food for years.

                ## Milestones
                1. A list of every prescribed, bought and herbal product you take, with when you started each.
                2. Anything started around the time symptoms began marked.
                3. The list reviewed with a pharmacist or prescriber for gut side effects.
                4. Any change they suggest recorded, with a date to check whether it helped.

                ## Notes
                Never stop a prescribed medicine on your own because you suspect it; ask the prescriber first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A full medicines and supplements list reviewed by a pharmacist or prescriber, with their comments on gut effects recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every medicine, supplement and remedy in the house onto one list"
                - "Mark anything started in the months before symptoms began"
                - "Ask a pharmacist which items on the list commonly affect the bowels"
                - "Write down any change agreed with your prescriber and when to review it"
            - name: Usual eating and drinking pattern snapshot
              description: |-
                ## Purpose
                Before changing anything, it helps to know what normal actually looks like: skipped breakfasts, a large late dinner, five coffees, two litres of fizzy drinks or very little fibre. A one-week snapshot of meal times, portions, drinks and fibre sources shows which simple first-line changes are worth trying and stops you blaming the wrong food.

                ## Milestones
                1. Seven days of meal times, rough portions and all drinks recorded.
                2. Daily caffeine, alcohol and fizzy drink counts totalled.
                3. Main fibre sources listed and a rough daily picture noted.
                4. Two or three obvious pattern changes chosen to try first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-week eating and drinking snapshot with daily caffeine and fizzy drink totals and two or three chosen changes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the time and contents of every meal and drink for seven days"
                - "Total your daily coffee, tea, fizzy drinks and alcohol"
                - "List where most of your fibre currently comes from"
                - "Pick two or three changes to test before any stricter diet"
            - name: Agreeing a working diagnosis
              description: |-
                ## Purpose
                Many people leave appointments with a shrug rather than a diagnosis, which makes every later decision harder. Getting a named working diagnosis in writing, whether IBS with a subtype (constipation, diarrhoea or mixed), functional dyspepsia, reflux, bile acid diarrhoea or IBD, tells you which treatments, specialists and patient groups actually apply to you.

                ## Milestones
                1. The working diagnosis and any subtype named by your clinician.
                2. The tests that supported it listed beside it.
                3. What would make the clinician reconsider the diagnosis noted.
                4. The diagnosis written at the front of your gut health notes.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named working diagnosis with subtype, supporting tests and reasons to revisit it, recorded in your notes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician to name the working diagnosis and its subtype"
                - "Ask which results support it and which symptoms would change it"
                - "Write the diagnosis and its supporting tests at the front of your notes"
            - name: First-line diet changes for four weeks
              description: |-
                ## Purpose
                Before anything strict, most guidance suggests simple changes: regular meals, less caffeine, alcohol and fizzy drinks, fewer very fatty or spicy meals, adjusting insoluble fibre and drinking enough fluid. Trying them deliberately for four weeks, with the diary running, shows whether they are enough on their own and saves many people from a restrictive diet they did not need.

                ## Milestones
                1. Two or three first-line changes chosen from your eating snapshot.
                2. The changes started on a set date with the diary running.
                3. Four weeks completed and symptom scores compared with the baseline.
                4. A decision written down: keep, adjust, or move to a dietitian-led approach.

                ## Notes
                Change one or two things at a time. Changing everything at once makes it impossible to tell what helped.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Four weeks of first-line changes completed with diary scores compared against baseline and a written decision on next steps."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose the two changes most likely to help from your snapshot"
                - "Set a start date and tell anyone you share meals with"
                - "Keep scoring symptoms in the diary for four weeks"
                - "Compare week four scores with the baseline and record the decision"
            - name: Toilet access and emergency kit plan
              description: |-
                ## Purpose
                Urgency shrinks lives quietly: people stop taking the train, skip the school run or turn down events because they do not know where the nearest toilet is. A plan for the routes you use most, an accessible toilet key or a toilet card where your country offers one, and a small kit in your bag gives back the confidence to go out.

                ## Milestones
                1. Toilets mapped on your three most common routes.
                2. A toilet access card or accessible toilet key obtained where available.
                3. A discreet kit packed with wipes, spare underwear and any rescue medicine your clinician agreed.
                4. One avoided trip or outing attempted with the plan in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Toilets mapped on three regular routes, a packed emergency kit and one previously avoided outing completed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark the toilets on your commute and two other regular routes"
                - "Find out whether a toilet access card or key scheme exists where you live"
                - "Pack a small emergency kit for your everyday bag"
                - "Restock and check the emergency kit @recurring(monthly:5)"
            - name: Weekly symptom score
              description: |-
                ## Purpose
                Once the baseline diary ends, a full daily diary is too much to keep up, but symptoms still need watching. A one-minute weekly score for pain, bloating, bowel habit and quality of life keeps a running line you can compare across months and bring to any appointment.

                ## Milestones
                1. Four scores chosen, each on the same 0 to 10 scale.
                2. A weekly slot set for scoring.
                3. Twelve consecutive weeks of scores recorded.
                4. Any week scoring well above usual marked with a likely reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly scores for pain, bloating, bowel habit and quality of life recorded in one place."
                cadence: rolling
              tasks:
                - "Choose four symptoms to score weekly on a 0 to 10 scale"
                - "Score the past week's pain, bloating, bowel habit and quality of life @recurring(weekly:sun)"
                - "Note a likely reason beside any unusually bad week"
            - name: Regular meal times routine
              description: |-
                ## Purpose
                The gut responds to rhythm: long gaps followed by a large meal are a common trigger for cramps and urgency, and skipped breakfasts often go with constipation. Eating three meals and planned snacks at roughly the same times each day is one of the cheapest things to try, and a simple tracker shows whether it sticks.

                ## Milestones
                1. Target times set for breakfast, lunch, dinner and any snack.
                2. A tracker in place to tick off meals eaten near the target time.
                3. Four weeks of tracking completed.
                4. Weekly symptom scores compared before and after the routine began.

                ## Notes
                Start from the **Habit tracker** template. A window of about an hour either side of each time is enough.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of tracked meal times with at least 80 percent of meals eaten within an hour of the target."
                cadence: rolling
              tasks:
                - "Set target times for each meal that fit your working day"
                - "Create a meal timing tracker from the habit tracker template"
                - "Tick off each meal eaten within an hour of its target time @recurring(daily)"
                - "Compare weekly symptom scores before and after starting"
            - name: Morning toilet routine for constipation
              description: |-
                ## Purpose
                The bowel is most active shortly after waking and after breakfast, and that window is often lost to a rushed morning. Building in ten unhurried minutes after breakfast, with feet raised on a small stool, takes advantage of the natural reflex and is one of the first things clinicians suggest for constipation.

                ## Milestones
                1. Breakfast moved early enough to leave ten free minutes afterwards.
                2. A footstool placed in the toilet you use most.
                3. Three weeks of the routine kept on most weekdays.
                4. Stool frequency and straining compared with the baseline diary.

                ## Notes
                Do not sit and strain for long periods. If nothing happens after about ten minutes, leave it and try again later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three weeks of a post-breakfast toilet routine kept on most weekdays, with frequency and straining compared to baseline."
                cadence: rolling
              tasks:
                - "Put a small footstool in front of the toilet"
                - "Move your alarm or breakfast to free ten minutes afterwards"
                - "Sit for up to ten unhurried minutes after breakfast @recurring(daily)"
                - "Compare frequency and straining with your baseline after three weeks"
            - name: Monthly gut symptom trend review
              description: |-
                ## Purpose
                Weekly scores only help if someone looks at them across time. A short monthly review of the last four weeks against your baseline shows whether a change is working, whether you are drifting into a flare, and when it is time to contact your clinician instead of waiting for the yearly review.

                ## Milestones
                1. A rule agreed with your clinician for when a worsening trend should prompt contact.
                2. A monthly review slot in the calendar.
                3. Each month's average compared with baseline in one line.
                4. Six consecutive monthly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews, each comparing the month's average scores with baseline and noting any action."
                cadence: rolling
              tasks:
                - "Ask your clinician what kind of change should prompt a call"
                - "Compare the last four weekly scores with your baseline @recurring(monthly:12)"
                - "Write one line on what changed and what you will try next"
            - name: Gut medicines repeat prescription routine
              description: |-
                ## Purpose
                Running out of an antispasmodic, laxative, reflux tablet or IBD medicine on a Friday night is avoidable. A fixed monthly reorder date, with stock counted first, keeps regular and as-needed gut medicines in the house and catches anything that has quietly expired.

                ## Milestones
                1. Every regular and as-needed gut medicine listed with its reorder route.
                2. A monthly reorder date set a week before stock usually runs low.
                3. Expired or unused items returned to a pharmacy.
                4. Three months with no gaps in supply.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months with every regular gut medicine reordered before running out and expired stock returned."
                cadence: rolling
              tasks:
                - "List each gut medicine with how and where you reorder it"
                - "Count stock and reorder anything due within two weeks @recurring(monthly:20)"
                - "Take expired or unused medicines back to a pharmacy"
            - name: Evening routine for reflux
              description: |-
                ## Purpose
                Night-time heartburn and a sour taste on waking are often driven by what happens in the three hours before bed. An evening routine covering the timing and size of the last meal, late drinks and the angle you sleep at, kept and logged for a month, shows how much can change before anyone talks about stronger medicines.

                ## Milestones
                1. The last meal moved to around three hours before bed on most nights.
                2. The head of the bed raised or a wedge pillow tried, if your clinician agrees.
                3. A month of nights logged as reflux or no reflux.
                4. The log reviewed and discussed at your next appointment.

                ## Notes
                Heartburn with difficulty swallowing, vomiting or weight loss belongs on your red flag card, not in a routine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of nightly reflux entries with an earlier last meal on most nights, reviewed with your clinician."
                cadence: rolling
              tasks:
                - "Set a latest time for your evening meal three hours before bed"
                - "Try raising the head of the bed by a few centimetres"
                - "Mark each night as reflux or no reflux in your log"
                - "Count the reflux nights for the month and note any pattern @recurring(monthly:24)"
            - name: Weekly gut-friendly meal plan
              description: |-
                ## Purpose
                Symptoms often flare in the weeks when food is grabbed rather than planned: takeaways, late dinners and whatever is in the cupboard. Planning the week's meals around foods you know you tolerate, with a shopping list to match, keeps the gains from any diet change and cuts the evening decisions that lead to trouble.

                ## Milestones
                1. A list of at least fifteen meals you know you tolerate well.
                2. A weekly planning slot with a matching shopping list.
                3. Eight weeks of plans written and mostly followed.
                4. Two new tolerated meals added to the list each month.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly meal plans built from a list of at least fifteen tolerated meals."
                cadence: rolling
              tasks:
                - "List fifteen meals you know your gut tolerates"
                - "Plan next week's meals and write the shopping list @recurring(weekly:sat)"
                - "Try one new recipe a fortnight and note how it went"
            - name: Stress and gut weekly check-in
              description: |-
                ## Purpose
                The gut and brain talk constantly, and a stressful week shows up in the bowels for many people with IBS. A five-minute weekly check-in linking the week's stress, sleep and symptoms makes the connection visible and helps you plan protection before a known hard week rather than after it.

                ## Milestones
                1. A weekly stress score added beside your symptom score.
                2. Twelve weeks of paired scores recorded.
                3. Any clear link between stressful weeks and flares written down.
                4. One protective step planned before each predictable busy week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of paired stress and symptom scores with any link written down and protective steps planned for busy weeks."
                cadence: rolling
              tasks:
                - "Add a weekly stress and sleep score beside your symptom scores"
                - "Score the week's stress and look ahead to next week's pressures @recurring(weekly:fri)"
                - "Plan one protective step before any week you expect to be hard"
            - name: Flare log and quarterly pattern review
              description: |-
                ## Purpose
                Flares feel random in the moment, but a log kept over months often shows the same few causes: a missed routine, a particular meal out, a period, an infection, a deadline or a medicine change. Recording each flare briefly and reviewing the log every quarter turns hindsight into a short list of things to plan around.

                ## Milestones
                1. A flare log with start date, length, worst symptoms, suspected trigger and what helped.
                2. Every flare over three months recorded.
                3. A quarterly review listing the most common suspected triggers.
                4. One change made in response to each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A flare log covering at least three months with a quarterly review naming the top triggers and one change made."
                cadence: rolling
              tasks:
                - "Set up a flare log with date, length, symptoms, trigger and what helped"
                - "Record each flare within a day of it starting"
                - "Review the flare log and list the three commonest triggers @recurring(quarterly)"
            - name: Annual gut condition review
              description: |-
                ## Purpose
                Long-term gut conditions drift: medicines that worked stop working, new symptoms appear, and treatments started as short trials quietly become permanent. A yearly review with your doctor or specialist team, prepared with your trend summary and medicine list, keeps the diagnosis, treatments and plans current.

                ## Milestones
                1. A year's symptom trend and flare summary prepared beforehand.
                2. The current medicine list checked against what you actually take.
                3. The review attended and any changes recorded.
                4. The next review date set.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A yearly review attended with a prepared trend summary, and the agreed changes and next review date recorded."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Book your yearly gut condition review @recurring(yearly)"
                - "Summarise the year's monthly reviews and flare log on one page"
                - "Check the medicine list against what you actually take"
                - "Record the changes agreed and the next review date"
            - name: Reading the Bristol stool chart accurately
              description: |-
                ## Purpose
                Doctors and dietitians describe stools using a seven-point chart, and most diet and medicine trials are judged against it. Learning to score consistently, and knowing which types point towards constipation or diarrhoea, makes your diary entries comparable and your descriptions quick and unembarrassed.

                ## Milestones
                1. The seven stool types and what each usually indicates understood.
                2. A copy of the chart kept somewhere private but handy.
                3. A week of entries scored using the chart.
                4. Your usual range and subtype pattern written in a sentence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A week of diary entries scored by Bristol type and a one-sentence description of your usual range."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a reputable explanation of the seven Bristol stool types"
                - "Save a copy of the chart where you will see it"
                - "Score each bowel movement by Bristol type for a week"
                - "Write one sentence describing your usual range"
            - name: How the gut-brain connection drives IBS
              description: |-
                ## Purpose
                IBS is not imaginary and it is not only about food: an oversensitive gut, changes in how fast it moves and signals between gut and brain all play a part. Understanding that model explains why stress, sleep and anxiety about symptoms can make pain worse, and why psychological therapies count as real treatment rather than a brush-off.

                ## Milestones
                1. One reputable patient guide on the gut-brain axis read.
                2. Visceral hypersensitivity and altered motility explained in your own words.
                3. Two examples from your own diary that fit the model noted.
                4. Questions about gut-directed therapies written for your next appointment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page note explaining the gut-brain model in your own words, with two personal examples and questions for your clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a patient guide on the gut-brain axis from a national IBS charity"
                - "Explain visceral hypersensitivity in two sentences of your own"
                - "Find two episodes in your diary that fit the model"
                - "Write questions about gut-directed therapy for your next appointment"
            - name: Understanding FODMAPs before you start
              description: |-
                ## Purpose
                FODMAPs are groups of fermentable carbohydrates found in onion, garlic, wheat, beans, some fruits, milk and sweeteners, and they are the basis of the best-studied IBS diet. Knowing what the groups are, why they cause wind and bloating, and why the diet is a temporary test rather than a way of life, prevents the commonest mistake: cutting foods out for good.

                ## Milestones
                1. The main FODMAP groups and a few common sources of each listed.
                2. The three phases of elimination, reintroduction and personalisation understood.
                3. A reputable FODMAP food app or guide chosen.
                4. Your clinician or a dietitian asked whether the diet suits you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of FODMAP groups and phases, a chosen food guide, and your clinician's view on whether to start."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a dietitian-written introduction to the low FODMAP diet"
                - "List the FODMAP groups with three common foods for each"
                - "Install or buy a FODMAP food guide from a university or dietitian source"
                - "Ask your clinician whether a dietitian referral is available"
            - name: Spotting trigger ingredients on food labels
              description: |-
                ## Purpose
                Garlic and onion powder, inulin or chicory root fibre, sorbitol and other sugar alcohols, honey and high fructose syrups hide in sauces, stock cubes, protein bars and sugar-free sweets. Knowing the names and where they turn up makes shopping safer during any diet trial and explains a lot of mystery flares.

                ## Milestones
                1. A pocket list of trigger ingredient names relevant to you.
                2. Ten regular products in your cupboard checked against it.
                3. Safe swaps found for any product that fails.
                4. One full shop done using the list without a flare traced to it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pocket list of trigger ingredients and ten regular products checked, with swaps found for any that fail."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a pocket list of trigger ingredient names to watch for"
                - "Check the labels of ten products you buy every week"
                - "Find a safer swap for each product that fails the check"
            - name: Abdominal breathing and relaxation for gut pain
              description: |-
                ## Purpose
                Slow belly breathing and progressive muscle relaxation calm the stress response and can ease cramping, and they are often the first step in gut-directed therapy programmes. Practising for a few minutes a day over four weeks builds a skill you can use on a train, before a meeting or in the middle of a flare.

                ## Milestones
                1. A short guided breathing or relaxation recording chosen.
                2. Five minutes practised on most days for four weeks.
                3. The technique used at least three times during actual symptoms.
                4. A note on whether it reduced pain or urgency, and when it works best.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Four weeks of practice on most days and a written note on its effect during at least three real episodes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose a five-minute guided belly breathing recording"
                - "Practise it after the same daily anchor, such as brushing your teeth"
                - "Use it during the next three episodes of cramping or urgency"
                - "Write down when it helped and when it did not"
            - name: Toilet posture and emptying without straining
              description: |-
                ## Purpose
                Straining, holding your breath and sitting for long periods make constipation, haemorrhoids and the feeling of incomplete emptying worse. A better position, knees above hips with a relaxed belly and slow breathing out, is a small physical skill that many people are never shown.

                ## Milestones
                1. The recommended sitting position and breathing pattern understood.
                2. A footstool used every time for two weeks.
                3. Time on the toilet kept under ten minutes.
                4. Straining and incomplete emptying compared with the baseline diary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Two weeks of using the recommended posture with toilet time under ten minutes and straining compared to baseline."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a continence service guide to toilet posture"
                - "Practise leaning forward with a relaxed belly and slow out-breath"
                - "Keep each visit under ten minutes for two weeks"
                - "Compare straining scores with your baseline diary"
            - name: Knowing the medicine options to ask about
              description: |-
                ## Purpose
                Medicines for IBS and reflux are chosen by symptom: antispasmodics for cramps, different laxative types for constipation, antidiarrhoeals for urgency, low-dose gut-brain medicines for persistent pain, and acid suppressants for reflux. Knowing the families exist, without choosing one yourself, lets you have a better conversation about what has and has not been tried.

                ## Milestones
                1. The main medicine families for your symptom pattern listed.
                2. What you have already tried, for how long and with what effect recorded.
                3. Two or three questions about untried options written.
                4. The answers from your clinician or pharmacist noted.

                ## Notes
                This is for preparing questions, not for choosing or dosing medicines yourself.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of tried and untried medicine families for your symptoms, with your clinician's answers to your questions recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every gut medicine you have tried with duration and effect"
                - "Read a charity guide to IBS or reflux medicine families"
                - "Write two or three questions about options you have not tried"
                - "Record your clinician's or pharmacist's answers"
            - name: Eating out with a sensitive gut
              description: |-
                ## Purpose
                Restaurants, work lunches and dinners at friends' houses are where diets fall apart and anxiety builds. A few practised moves, such as checking menus ahead, a short polite request about onion and garlic, and a list of usually safe dishes by cuisine, make social eating possible without a flare or a long explanation.

                ## Milestones
                1. A list of usually tolerated dishes for four common cuisines.
                2. A one-line request you are comfortable saying to staff.
                3. Three meals out completed using the approach.
                4. Each meal out scored in your diary the following day.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three meals out completed with a pre-checked menu and the next day's symptoms recorded each time."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a list of usually safe dishes for four cuisines you eat often"
                - "Practise a one-line request about onion, garlic or portion size"
                - "Check the menu online before your next three meals out"
                - "Score your symptoms the day after each meal out"
            - name: Low FODMAP elimination phase with a dietitian
              description: |-
                ## Purpose
                Strict low FODMAP eating for two to six weeks shows whether FODMAPs drive your symptoms, and it works best with a dietitian's support so nutrition and fibre stay adequate. Running it as a time-boxed test with diary scores before and after gives a clear answer instead of an open-ended restriction.

                ## Milestones
                1. A dietitian appointment booked or a dietitian-written programme chosen.
                2. Two weeks of low FODMAP meal plans and a shopping list ready before the start date.
                3. The elimination phase completed for the agreed length.
                4. Symptom scores compared with baseline and a decision made on whether to reintroduce.

                ## Notes
                Start from the **Weekly meal plan** template. Not suitable for everyone, including people with a history of disordered eating: check with your clinician first.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An elimination phase completed for the length your dietitian agreed, with scores compared to baseline and a recorded decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your doctor for a dietitian referral or find a registered dietitian"
                - "Plan two weeks of low FODMAP meals before your start date"
                - "Clear or label high FODMAP foods in the cupboard"
                - "Compare end-of-phase symptom scores with your baseline"
            - name: FODMAP reintroduction challenges
              description: |-
                ## Purpose
                Elimination only tells you that FODMAPs matter; reintroduction tells you which ones and how much. Testing one group at a time over three days, with gaps between tests, usually shows that some foods are fine, some are fine in small amounts, and only a few really need avoiding.

                ## Milestones
                1. A challenge schedule covering each FODMAP group, agreed with your dietitian.
                2. Each group tested over three days with symptoms scored.
                3. A washout gap kept between tests.
                4. A table of each group marked tolerated, tolerated in small amounts or not tolerated.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every FODMAP group tested and marked tolerated, partly tolerated or not tolerated in a single results table."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree the order of challenge foods with your dietitian"
                - "Run a three-day challenge for the first FODMAP group"
                - "Leave symptom-free days before the next challenge"
                - "Fill in the results table after each challenge"
            - name: Personalised long-term eating plan
              description: |-
                ## Purpose
                Any elimination diet should end with the widest diet you can tolerate, not the narrowest. Turning reintroduction results into a written personal plan, with foods to enjoy freely, foods to limit and the few to avoid, protects fibre, gut bacteria and enjoyment, and stops the restricted list growing by stealth.

                ## Milestones
                1. Foods grouped into eat freely, limit and avoid, based on challenge results.
                2. The plan checked by your dietitian for gaps in fibre, calcium or variety.
                3. Restricted foods re-tested every few months, since tolerance can change.
                4. The avoid list kept to the shortest it can be.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written eat freely, limit and avoid plan reviewed by a dietitian, with restricted foods re-tested at least twice a year."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Sort your challenge results into eat freely, limit and avoid"
                - "Ask your dietitian to check the plan for nutritional gaps"
                - "Re-test one food from the avoid list in a small portion @recurring(quarterly)"
            - name: Soluble fibre build-up for constipation
              description: |-
                ## Purpose
                Soluble fibre from oats, linseed, psyllium and some fruit and vegetables softens stools and is gentler on IBS than bran, which can increase bloating. Adding it gradually over several weeks, with enough fluid alongside, gives the gut time to adjust and makes the effect easier to judge.

                ## Milestones
                1. Your clinician or pharmacist asked whether a soluble fibre trial suits you.
                2. Sources chosen and a gradual build-up schedule written.
                3. Fluid intake increased alongside the extra fibre.
                4. Six weeks completed and stool form compared with baseline.

                ## Notes
                Increase slowly: a sudden jump in fibre is a common cause of extra wind and bloating.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A six-week soluble fibre build-up completed with stool form compared to baseline and a keep or stop decision recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your pharmacist whether a soluble fibre trial is sensible for you"
                - "Choose two soluble fibre sources you would eat most days"
                - "Write a week-by-week build-up schedule"
                - "Compare stool form after six weeks and record whether to continue"
            - name: Deciding whether to try a probiotic
              description: |-
                ## Purpose
                Probiotic shelves are full of strong claims, and the evidence varies by strain, product and symptom. Choosing one product deliberately, trying it for a set period with your diary running and a stop rule written in advance, gives an honest answer and stops money draining away on something that is not helping.

                ## Milestones
                1. Your clinician or pharmacist asked whether a probiotic trial is reasonable.
                2. One product chosen with its strains and the evidence noted.
                3. A trial period of about twelve weeks completed with weekly scores.
                4. A written keep or stop decision based on the scores.

                ## Notes
                Start from the **Purchase decision** template. Try one product at a time, and stop if scores have not improved by the end.
              priority: low
              deadlineOffsetDays: 98
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A single-product trial of about twelve weeks completed, with a recorded keep or stop decision based on weekly scores."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your pharmacist whether a probiotic trial makes sense for your symptoms"
                - "Compare two or three products by strain and published evidence"
                - "Write the stop rule before taking the first dose"
                - "Record the keep or stop decision after twelve weeks"
            - name: Gut-directed hypnotherapy or CBT decision
              description: |-
                ## Purpose
                Gut-directed hypnotherapy and cognitive behavioural therapy for IBS have some of the strongest evidence of any IBS treatment, yet few people are offered them. Comparing what is available through your health service, private practitioners and app-based programmes lets you make a considered choice on cost, waiting time and format.

                ## Milestones
                1. Your clinician asked about referral routes for psychological IBS therapies.
                2. Options compared on cost, waiting time, format and practitioner training.
                3. A choice made and the first session or module booked.
                4. A date set to judge the effect against your weekly scores.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three therapy options compared on cost, wait and format, with one chosen and the first session booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor whether gut-directed therapy is available locally"
                - "Compare a health service, a private and an app-based option"
                - "Check the practitioner or programme is IBS-specific"
                - "Book the first session or start the first module"
            - name: Lactose trial agreed with your clinician
              description: |-
                ## Purpose
                Lactose intolerance can mimic or add to IBS, and many people cut out dairy entirely without ever testing it, losing an easy source of calcium. A short, clinician-agreed trial of lactose-free alternatives followed by a planned re-challenge gives a clearer answer than guesswork.

                ## Milestones
                1. The trial approach agreed with your clinician or dietitian.
                2. Two weeks of lactose-free swaps with calcium sources kept up.
                3. A planned re-challenge with a normal dairy portion and symptoms scored.
                4. A decision recorded on whether lactose matters for you, and how much.
              priority: low
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-week lactose-free period and a scored re-challenge completed, with a recorded decision on lactose."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician or dietitian whether a lactose trial is worthwhile"
                - "Swap to lactose-free milk and yogurt for two weeks"
                - "Re-challenge with a normal glass of milk and score the next day"
                - "Record whether lactose affects you and at what amount"
            - name: Long-term reflux medicine review
              description: |-
                ## Purpose
                Acid-suppressing tablets are often started for a few weeks and then repeated for years without anyone asking whether they are still needed at that strength. A planned review with your prescriber decides whether to continue, step down to the lowest effective dose or switch to as-needed use, and what to do if symptoms rebound.

                ## Milestones
                1. How long you have taken the reflux medicine and why it was started written down.
                2. A review booked with your prescriber or pharmacist.
                3. The agreed plan recorded: continue, step down or as needed.
                4. A rebound plan written in case symptoms return during any change.

                ## Notes
                Rebound heartburn after reducing these medicines is common and usually settles; agree in advance what to do so you do not abandon the plan in the first week.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision from your prescriber on continuing, stepping down or as-needed use, with a rebound plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down when and why your reflux medicine was started"
                - "Ask your prescriber whether a step-down is appropriate"
                - "Agree what to do if heartburn rebounds during any change"
                - "Ask whether the plan still fits at your yearly review @recurring(yearly)"
            - name: Gastroenterology appointment preparation
              description: |-
                ## Purpose
                Specialist appointments are rare and often months apart, so arriving unprepared wastes one of the few chances to change the plan. Sending or bringing a concise summary, with trends, tests already done and treatments tried, means the gastroenterologist spends the time deciding rather than gathering history.

                ## Milestones
                1. A one-page summary with diagnosis, trends, results and treatments tried.
                2. The three questions that matter most to you written down.
                3. Someone you trust invited to come along or join by phone.
                4. The specialist's plan, tests and follow-up written up the same day.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A specialist appointment attended with a one-page summary, and a write-up of the plan made the same day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page summary from your diary, reviews and results"
                - "Write your three most important questions for the gastroenterologist"
                - "Ask someone you trust to come with you or join by phone"
                - "Write up the plan and follow-up date from the meeting notes template"
            - name: Colonoscopy or endoscopy preparation week
              description: |-
                ## Purpose
                A camera test goes better when the week before is planned: diet changes, bowel preparation timing, medicines to pause on advice, transport home after sedation and time off. A clear checklist reduces the chance of a cancelled or repeated procedure because the bowel was not clear or a medicine instruction was missed.

                ## Milestones
                1. The hospital's instructions read in full and questions asked.
                2. Any medicine changes confirmed with the unit or your prescriber.
                3. Diet, preparation timing, transport and time off arranged.
                4. The procedure attended and the results and follow-up written down.

                ## Notes
                Follow your unit's instructions exactly, as preparation schedules differ. Call them, not a search engine, with any doubts.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A procedure completed as booked, with no cancellation for preparation, and results and follow-up recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the unit's preparation instructions and list your questions"
                - "Ask the unit which of your medicines need pausing, if any"
                - "Arrange someone to take you home after sedation"
                - "Buy the low-residue foods and clear fluids on the instruction sheet"
                - "Write down what the doctor said and when results follow"
            - name: Stool, blood and breath test logistics
              description: |-
                ## Purpose
                Gut tests fail for practical reasons more often than people expect: a stool sample delivered too late, a breath test taken after the wrong meal, or a coeliac test after weeks without gluten. Checking the instructions for each test in advance and planning collection and drop-off means the result is usable the first time.

                ## Milestones
                1. Each test's preparation and timing rules written on one sheet.
                2. Kits collected and drop-off times confirmed.
                3. Samples taken and delivered within the required window.
                4. Results requested and recorded when available.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every requested gut test completed first time within its timing rules, with results recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write each test's preparation rules on one sheet"
                - "Confirm drop-off times for stool samples with the surgery or lab"
                - "Plan the meal and fasting times before any breath test"
                - "Ask for results two weeks after the last sample"
            - name: Travelling with IBS or IBD
              description: |-
                ## Purpose
                Long flights and drives, unfamiliar food, time zones and uncertain toilets make travel a common trigger, and some people stop travelling altogether. A trip plan covering medicines and letters, safe snacks, seat choice, insurance that declares your condition and where to get help abroad makes going away realistic again.

                ## Milestones
                1. Enough medicine for the trip plus spare, packed in hand luggage with a clinician letter if needed.
                2. Travel insurance confirmed to cover your declared gut condition.
                3. Safe snacks and an aisle seat or toilet-friendly route planned.
                4. A local doctor or clinic for the destination noted.

                ## Notes
                Start from the **Trip** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip completed with medicines, insurance covering the condition, safe food and a destination contact all arranged beforehand."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a trip plan from the trip template"
                - "Check your travel insurance covers your declared gut condition"
                - "Pack medicines and a spare supply in hand luggage"
                - "Book an aisle seat and pack safe snacks for travelling"
            - name: Big day plan for a wedding, exam or interview
              description: |-
                ## Purpose
                Weddings, exams and interviews are often the days when anticipation alone sets the gut off. Planning the two days before and the day itself, with tolerated meals, timing, toilet locations and any rescue medicine your clinician has agreed, takes much of the fear out and lets you focus on the occasion.

                ## Milestones
                1. The meals and drinks for the day before and the day itself decided.
                2. Toilet locations at the venue and on the route found.
                3. Rescue medicine or emergency kit packed, if agreed with your clinician.
                4. A short breathing routine planned for the hour before.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan covering food, toilets, kit and a calming routine, used on the day of the occasion."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose tolerated meals for the day before and the day itself"
                - "Find the toilets at the venue and on the way there"
                - "Pack the emergency kit and any agreed rescue medicine"
                - "Plan a breathing routine for the hour before"
            - name: Workplace adjustments for a gut condition
              description: |-
                ## Purpose
                Urgency, frequent toilet trips and fatigue during flares are hard to manage with fixed meetings, long commutes or a desk far from the toilet. Asking for practical adjustments, such as flexible start times, home working during flares or a nearby desk, is often easier than expected and can protect both your health and your job.

                ## Milestones
                1. Your rights and your employer's policy on reasonable adjustments checked.
                2. A short list of the adjustments that would help most written.
                3. A conversation held with your manager or occupational health.
                4. Agreed adjustments confirmed in writing and reviewed yearly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Agreed workplace adjustments confirmed in writing by your manager or occupational health."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your employer's policy on health-related adjustments"
                - "Write down the three adjustments that would help most"
                - "Ask the agent to draft a short, factual request to your manager"
                - "Review the agreed adjustments with your manager @recurring(yearly)"
            - name: Gut symptoms in pregnancy and after birth
              description: |-
                ## Purpose
                Pregnancy hormones slow the gut, iron supplements add to constipation and heartburn often peaks in the third trimester, while existing IBS or IBD needs its medicines checked for safety. Raising your gut condition with your midwife or doctor early, and planning for the weeks after birth, avoids stopping treatment without advice.

                ## Milestones
                1. Your gut condition and current medicines raised with your midwife or doctor.
                2. Advice on which gut medicines are suitable in pregnancy recorded.
                3. A plan for constipation and heartburn agreed with your midwife.
                4. A postnatal check of bowel symptoms booked.

                ## Notes
                Do not stop or start any gut medicine in pregnancy without asking your midwife, doctor or pharmacist first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Gut medicines reviewed for pregnancy, a constipation and heartburn plan agreed, and a postnatal bowel check booked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Tell your midwife about your gut condition and current medicines"
                - "Ask which remedies for constipation and heartburn are suitable now"
                - "Record the advice in your gut health notes"
                - "Book a check of bowel symptoms after the birth"
            - name: A child with recurrent tummy pain
              description: |-
                ## Purpose
                Recurrent tummy pain is common in school-age children and usually not serious, but it can cost school days and worry the whole family. A simple diary kept with your child, a doctor visit with the right questions and a plan with school for toilet access and pain days make it manageable for everyone.

                ## Milestones
                1. Two weeks of a child-friendly pain, bowel and school diary.
                2. A doctor visit attended with the diary and questions about warning signs.
                3. A school plan agreed for toilet access and what to do on pain days.
                4. The plan updated at the start of each school year.

                ## Notes
                Weight loss, poor growth, night-time pain, blood in the stool or vomiting are reasons to see the doctor promptly.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two-week diary taken to the doctor and a written school plan for toilet access and pain days in place."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Make a simple pain and bowel diary your child can help fill in"
                - "Take the diary to the doctor and ask which signs need urgent attention"
                - "Agree toilet access and a pain day plan with your child's school"
                - "Update the school plan with the new teacher @recurring(yearly)"
            - name: Gut routine on shifts or student schedules
              description: |-
                ## Purpose
                Night shifts, rotating rotas and student life scramble meal times, sleep and toilet habits, and the gut often protests first. Anchoring two meals and a toilet window to waking time rather than the clock, and keeping tolerated food at work or in halls, keeps some rhythm when the schedule has none.

                ## Milestones
                1. Meals anchored to waking time rather than clock time.
                2. Tolerated food stocked at work, in a locker or in halls.
                3. A toilet window built in after the first meal of each shift or day.
                4. Four weeks of the routine compared with weekly symptom scores.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of meals and a toilet window anchored to waking time, with weekly symptom scores compared."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set meal times as hours after waking rather than clock times"
                - "Stock a shelf or locker with tolerated snacks and meals"
                - "Batch cook two tolerated meals before each run of shifts"
                - "Compare four weeks of scores with the weeks before"
            - name: New bowel changes after fifty
              description: |-
                ## Purpose
                A lasting change in bowel habit that starts later in life should be checked rather than assumed to be IBS, because new IBS is less common after fifty and other causes need ruling out. Getting the change seen promptly, with a clear description and any family history, is the single most important step in this area for older adults.

                ## Milestones
                1. The change described: what, since when, how often, and any blood or weight loss.
                2. An appointment booked promptly rather than at the next routine check.
                3. The tests the doctor recommends completed.
                4. The outcome and any follow-up recorded.

                ## Notes
                Routine screening programmes are separate from investigating symptoms; a recent normal screening test does not rule out the need to report new symptoms.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A new bowel change over fifty reported to a doctor, recommended tests completed and the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what has changed, since when and how often"
                - "Book an appointment rather than waiting for a routine check"
                - "Complete the tests the doctor recommends"
                - "Record the outcome and any follow-up date"
            - name: Supporting someone with a gut condition
              description: |-
                ## Purpose
                Partners, parents and adult children often see the cancelled plans and the stress before the person themselves says anything. A supporter who understands the diagnosis, knows the red flags and the flare plan, and asks rather than assumes, can make day-to-day life far easier without taking over.

                ## Milestones
                1. The diagnosis and flare plan explained to you by the person you support.
                2. The red flag card read and where it is kept known.
                3. Two or three practical ways to help agreed together.
                4. A regular check-in agreed so needs can change over time.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Two or three agreed ways to help in place, with the flare plan and red flag card known and a monthly check-in held."
                cadence: rolling
              tasks:
                - "Ask the person you support to walk you through their flare plan"
                - "Read their red flag card and note where it is kept"
                - "Agree two or three practical ways you can help"
                - "Check in on what is helping and what is not @recurring(monthly:15)"
            - name: IBD flare action plan with your IBD team
              description: |-
                ## Purpose
                People with Crohn's disease or ulcerative colitis do better when they know exactly what to do at the first signs of a flare: who to call, which tests to send and what not to wait on. A written plan agreed with your IBD team, kept by the phone, turns a frightening week into a set of steps.

                ## Milestones
                1. Your early flare signs and severe flare signs listed.
                2. The IBD advice line number and opening hours recorded.
                3. Steps agreed with the team, such as sending a stool sample or starting a rescue treatment.
                4. Out-of-hours and emergency routes written down.
                5. The plan reviewed with the team each year.

                ## Notes
                Any rescue treatment on the plan must be prescribed and agreed by your IBD team; the plan records their instructions.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written IBD flare plan agreed with your team, listing signs, contacts and steps, reviewed at least yearly."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "List your early and severe flare signs from past flares"
                - "Ask your IBD nurse to agree the steps for a flare in writing"
                - "Save the advice line number and out-of-hours route in your phone"
                - "Review the flare plan with your IBD team @recurring(yearly)"
            - name: Surveillance colonoscopy schedule for long-standing colitis
              description: |-
                ## Purpose
                People who have had ulcerative colitis or Crohn's colitis for many years are usually offered regular surveillance colonoscopies, at intervals set by their specialist. Knowing your interval, when the next one is due and who books it stops surveillance quietly slipping after a change of hospital or consultant.

                ## Milestones
                1. Your surveillance interval confirmed with your specialist.
                2. The date of your last colonoscopy and the next due date recorded.
                3. Who is responsible for booking the next one confirmed.
                4. A yearly check that the next procedure is still on the list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your surveillance interval, last and next colonoscopy dates and booking route recorded and checked yearly."
                cadence: cyclic
                effort_hours_estimate: "1"
              tasks:
                - "Ask your specialist what surveillance interval applies to you"
                - "Record your last colonoscopy date and the next due date"
                - "Confirm whether the hospital or you start the booking"
                - "Check the next surveillance procedure is on the waiting list @recurring(yearly)"
            - name: Investigating possible bile acid diarrhoea
              description: |-
                ## Purpose
                Bile acid diarrhoea is thought to explain a share of what is labelled diarrhoea-predominant IBS, particularly after gallbladder removal, and it responds to different treatment. If persistent watery diarrhoea has not improved with first-line measures, asking whether testing or a treatment trial is appropriate can change the picture.

                ## Milestones
                1. Your diarrhoea pattern and any gallbladder or bowel surgery summarised.
                2. Your clinician asked whether bile acid diarrhoea should be considered.
                3. Any test or treatment trial completed and its effect recorded.
                4. The outcome added to your working diagnosis.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Bile acid diarrhoea discussed with your clinician, with any test or trial and its outcome recorded in your diagnosis notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Summarise your diarrhoea pattern and any past abdominal surgery"
                - "Ask your clinician whether bile acid diarrhoea has been considered"
                - "Record the result of any test or treatment trial"
                - "Update your working diagnosis notes with the outcome"
            - name: Pelvic floor and biofeedback referral for stubborn constipation
              description: |-
                ## Purpose
                Some long-term constipation is not about slow bowels but about the pelvic floor muscles not relaxing properly during emptying. When fibre, fluids, posture and laxatives have not worked, asking about anorectal tests and biofeedback therapy with a specialist physiotherapist or nurse can open a route most people never hear of.

                ## Milestones
                1. A record of everything tried for constipation, with durations.
                2. Your clinician asked about pelvic floor assessment or anorectal testing.
                3. Any referral made and the first assessment attended.
                4. Home exercises from the therapist built into a weekly routine.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A referral for pelvic floor assessment requested, the first assessment attended and the home programme recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every constipation treatment tried and how long for"
                - "Ask your doctor whether pelvic floor assessment or biofeedback fits"
                - "Attend the first assessment and write down the home exercises"
                - "Schedule the home exercises into your week"
---

# Gut Health & IBS Management

This area is for anyone whose bowels, stomach or reflux have started to run their day: the person with cramps and urgency before every commute, the one who has been constipated for years, and the people living with a diagnosed bowel condition. It starts with the foundations (a two-week diary, a red flag card, the first appointment and the tests worth asking about before anything is called IBS), then the routines that keep symptoms steady, the skills behind FODMAPs, labels and gut-directed relaxation, the diet and treatment decisions, the tests and occasions that need planning, situations such as pregnancy, a child with tummy pain or work, and finally specialist work on IBD flares, surveillance and harder-to-treat symptoms.

What repeats is a weekly symptom score and a weekly gut-friendly meal plan, regular meal times and a morning toilet routine, a monthly trend review and prescription reorder, a quarterly look at your flare log and a yearly review of your diagnosis, medicines and plans. The Metrics log, Habit tracker, Weekly meal plan, Purchase decision, Meeting notes and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
