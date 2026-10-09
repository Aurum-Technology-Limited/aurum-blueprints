---
id: physical-health.chronic-fatigue-long-covid
name: Chronic Fatigue & Long Covid
description: "Pacing that prevents crashes, a symptom diary your clinician can use, specialist appointments prepared for, and careful, agreed steps up in activity for ME, chronic fatigue syndrome and long covid."
category: personal
version: 1.0.0
tags: [physical-health, chronic-fatigue-long-covid, everyone, me-cfs, long-covid, pacing, post-exertional-malaise]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - meeting-notes
    - sleep-review
    - weekly-meal-plan
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Chronic Fatigue & Long Covid
          description: "Living with ME, chronic fatigue syndrome or long covid through energy pacing, symptom tracking, specialist care and gradual, careful increases in activity."
          projects:
            - name: Four-week symptom and activity diary
              description: |-
                ## Purpose
                Most people with ME or long covid can describe a bad week but not what caused it, because the crash usually lands 24 to 72 hours after the activity that triggered it. Four weeks of a simple daily diary, recording activity, rest, sleep and the three symptoms that matter most to you, is usually enough to see that delay and give your clinician something better than memory.

                ## Milestones
                1. A diary format chosen with columns for activity, rest, sleep, symptom scores and notes.
                2. Twenty-eight consecutive days recorded, even if some entries are a single line.
                3. Every crash in the four weeks marked, with the activities of the three days before it circled.
                4. A one-paragraph summary of what the diary showed, ready for your next appointment.

                ## Notes
                Start from the **Metrics log** template. Keep each entry under two minutes; a diary that costs too much energy is usually abandoned by week two.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A diary covering 28 consecutive days with symptom scores and every crash marked, summarised in one paragraph."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick your three main symptoms and a 0 to 10 scale for each"
                - "Set up the diary with columns for activity, rest, sleep and symptoms"
                - "Fill in each day in under two minutes, ideally at the same time"
                - "Mark each crash and look back at the three days before it"
                - "Write the one-paragraph summary for your clinician"
            - name: Recognising your own post-exertional malaise
              description: |-
                ## Purpose
                Post-exertional malaise is the defining feature of ME and common in long covid: a worsening of symptoms after physical, mental or emotional effort that is often delayed and can last days or weeks. Learning your own version of it, which symptoms flare, how long after and for how long, is what makes pacing possible rather than guesswork.

                ## Milestones
                1. A plain description of post-exertional malaise read from a patient organisation or clinical guideline.
                2. Your own early warning symptoms listed in the order they usually appear.
                3. Your typical delay between trigger and crash written down in hours.
                4. Your typical recovery time noted, alongside the longest crash so far.

                ## Notes
                Physical effort is not the only trigger. Concentration, a difficult conversation, a noisy shop or standing in a queue can all count.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written description of your own post-exertional malaise, including warning signs, typical delay and recovery time."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a patient organisation's explanation of post-exertional malaise"
                - "List the symptoms that get worse for you after too much effort"
                - "Note how many hours after an activity a crash usually starts"
                - "Write down how long your recent crashes have lasted"
                - "Share the description with one person who lives with you"
            - name: Finding your current energy envelope
              description: |-
                ## Purpose
                Pacing works by staying inside the amount of activity you can do without triggering a crash, often called the energy envelope. Estimating yours from the diary, then testing it with a few weeks of deliberately conservative days, gives you a working limit for standing, walking, screen time and talking that you can plan around.

                ## Milestones
                1. Your diary reviewed for the activity levels on days that did not lead to a crash.
                2. A working daily limit written for upright time, walking, screen time and social contact.
                3. Two to three weeks lived inside those limits with symptoms recorded.
                4. Any limit that still led to crashes lowered, and the final version dated.

                ## Notes
                Most people overestimate their envelope at first. Setting limits slightly below what feels possible usually means fewer crashes and, over time, a steadier baseline.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Written daily limits for upright time, walking, screens and social contact, tested for at least two weeks and dated."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Highlight the diary days that were not followed by a crash"
                - "Estimate daily limits for standing, walking, screens and talking"
                - "Live inside those limits for two weeks and keep recording"
                - "Lower any limit that still led to a crash"
                - "Date the final version and keep it with your pacing plan"
            - name: Checking other causes of fatigue with your doctor
              description: |-
                ## Purpose
                Clinicians are expected to rule out other treatable causes of persistent fatigue, such as thyroid problems, anaemia, diabetes, coeliac disease or sleep apnoea, before settling on ME or long covid. Going in with a clear history and a list of tests already done makes it more likely the right ones are ordered once, not spread over a year.

                ## Milestones
                1. A one-page history of when the fatigue started, any infection before it, and how it has changed.
                2. A list of blood tests and investigations already done, with dates.
                3. An appointment held where your doctor agreed which further tests are needed.
                4. Results reviewed with your doctor and their working diagnosis written down.

                ## Notes
                Ask whether results will be discussed at a follow-up or only if something is abnormal, so you know when to chase.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A working diagnosis recorded after your doctor has reviewed results from the tests they chose to rule out other causes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page history of how and when the fatigue began"
                - "List the blood tests you have already had and when"
                - "Book an appointment to discuss what else needs ruling out"
                - "Ask how and when you will hear about the results"
                - "Write down your doctor's working diagnosis after the review"
            - name: One-page illness summary for new clinicians
              description: |-
                ## Purpose
                Every new doctor, physiotherapist or assessor starts from zero, and repeating the whole story costs energy you do not have on appointment days. A single page covering onset, diagnosis, post-exertional malaise, current function and what makes you worse lets you hand over the facts and spend the appointment on the question you came with.

                ## Milestones
                1. A one-page summary covering onset, diagnosis, main symptoms and current function.
                2. A short section on how post-exertional malaise affects you and what triggers it.
                3. A list of treatments tried, with what helped and what made things worse.
                4. Printed and phone copies ready to hand to any new clinician.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page illness summary, dated within the last three months, available on paper and on your phone."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page summary from your diary and history notes"
                - "Add a short section on your post-exertional malaise and triggers"
                - "List treatments tried with what helped and what did not"
                - "Save a copy on your phone and print two more"
                - "Update the summary after any major change @recurring(quarterly)"
            - name: Functional baseline score at the start
              description: |-
                ## Purpose
                Feeling better or worse is hard to judge over months, especially with brain fog. Scoring your function now on a recognised scale, alongside plain measures such as hours upright a day and your longest walk, gives a fixed point to compare against at every review and in any later claim.

                ## Milestones
                1. A functional scale agreed with your clinician or chosen from a patient organisation's resources.
                2. Your score on that scale recorded with the date.
                3. Hours upright per day, longest walk and screen time averaged over one week.
                4. The baseline saved where you keep your diary summaries.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline showing a functional scale score plus average daily upright hours, walking distance and screen time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician which functional scale they would like you to use"
                - "Score yourself on the scale and record the date"
                - "Average your upright hours, walking and screen time over one week"
                - "Save the baseline next to your diary summaries"
            - name: Crash plan for post-exertional flares
              description: |-
                ## Purpose
                When a crash hits, thinking clearly and asking for help both get harder, so decisions made in advance spare you from making them at your worst. A written crash plan says what stops, who takes over which jobs, what you eat with no effort, and which symptoms mean calling a doctor rather than resting it out.

                ## Milestones
                1. A list of everything that stops during a crash, including work, admin and visitors.
                2. Named people who will cover meals, children, pets or school runs.
                3. A stock of easy food, drinks and medicines kept for crash days.
                4. Symptoms that need urgent medical advice, such as chest pain or new weakness, written at the top.
                5. The plan shared with everyone named in it.

                ## Notes
                Keep it to one side of paper and put it somewhere obvious. Nobody reads a five-page plan during a crash.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page crash plan with named helpers, a stocked crash shelf and urgent warning signs, shared with everyone named in it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everything you will stop doing during a crash"
                - "Ask two people whether they can cover named jobs on crash days"
                - "Stock a shelf with no-effort food, drinks and medicines"
                - "Write the symptoms that mean calling a doctor at the top"
                - "Send the plan to everyone named in it"
            - name: Energy-saving changes around the home
              description: |-
                ## Purpose
                Small physical changes at home can save dozens of standing minutes a day: a perching stool in the kitchen, a shower seat, a second set of cleaning things upstairs, everyday items moved to waist height. An occupational therapist can assess this formally, but a one-hour walk-through with a notepad gets most of the gains in the meantime.

                ## Milestones
                1. A room-by-room list of tasks that make you stand, bend, reach or climb stairs.
                2. The five most costly tasks chosen for a change.
                3. Equipment such as a perching stool or shower seat obtained or ordered.
                4. An occupational therapy referral requested if bigger adaptations look needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least five energy-saving changes made at home, with an occupational therapy referral requested if larger adaptations are needed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk through each room and list tasks that need standing or stairs"
                - "Pick the five tasks that cost you most energy"
                - "Order a perching stool, shower seat or grabber for the worst ones"
                - "Move everyday items to waist height"
                - "Ask your doctor about an occupational therapy assessment"
            - name: Explaining the illness to the people close to you
              description: |-
                ## Purpose
                Friends and family often mean well and still say the wrong thing, from suggesting you push through to assuming one good afternoon means you are better. A short written explanation of post-exertional malaise, what helps and what costs you saves having the same draining conversation ten times over.

                ## Milestones
                1. A half-page explanation of the illness and post-exertional malaise in plain words.
                2. Three things that help and three things that make you worse listed.
                3. The explanation sent or given to the people you see most.
                4. One follow-up conversation held with anyone who still has questions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written explanation sent to the people you see most, with at least one follow-up conversation held."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a half-page explanation of the illness in plain words"
                - "Add three things that help and three that make you worse"
                - "Send it to the people you see most often"
                - "Arrange one short follow-up with anyone who has questions"
            - name: Daily pacing plan with planned rests
              description: |-
                ## Purpose
                Pacing is easier to keep when the day is planned the evening before, with rests booked before you need them rather than after you are exhausted. Five minutes each evening to place the essential tasks, spread the hard ones across the week and put rests between them is the core routine of this whole area.

                ## Milestones
                1. A simple daily planning sheet with slots for tasks and rests.
                2. Rests scheduled before and after any demanding activity.
                3. The plan made on most evenings for four weeks.
                4. Crash numbers compared with the first diary month.

                ## Notes
                Start from the **Habit tracker** template. Split heavy tasks over several days, alternate physical and mental work, and sit for anything that can be done sitting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily pacing plan made on at least 20 evenings a month, with rests booked around every demanding activity."
                cadence: rolling
              tasks:
                - "Set up a daily plan with slots for essential tasks and rests"
                - "Plan tomorrow's tasks and rests in five minutes each evening @recurring(daily)"
                - "Book a rest before and after each demanding activity"
                - "Compare crash numbers with your first diary month after four weeks"
            - name: Weekly energy budget review
              description: |-
                ## Purpose
                Looking back over a week shows patterns that a single day hides, such as Tuesdays always going badly because of the shopping trip. A ten-minute weekly review of the diary, any crashes and the week ahead lets you move demanding things before they collide.

                ## Milestones
                1. A ten-minute review slot fixed on the same day each week.
                2. Each review noting the hardest day, any crash and what came before it.
                3. The coming week's demanding tasks spread so no two fall on the same day.
                4. A running list of patterns kept from week to week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review completed on at least three weeks in four, each one moving or dropping something in the coming week."
                cadence: rolling
              tasks:
                - "Choose a fixed day and time for a ten-minute review"
                - "Review the week's diary, crashes and the week ahead @recurring(weekly:sun)"
                - "Move any two demanding tasks that fall on the same day"
                - "Add new patterns to a running list"
            - name: Monthly symptom trend summary
              description: |-
                ## Purpose
                Clinicians rarely have time to read a month of daily notes, but they will read five lines. Turning each month's diary into a short summary of average scores, number of crashes and anything new builds the record you need for reviews and benefit claims, and helps you notice slow change.

                ## Milestones
                1. A one-paragraph summary written for each month.
                2. Average scores for your main symptoms and the number of crashes recorded.
                3. New symptoms and any medicine changes noted.
                4. All summaries kept together in date order.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly summary with average symptom scores and crash count exists for at least ten of the last twelve months."
                cadence: rolling
              tasks:
                - "Create one document to hold all monthly summaries"
                - "Write the month's summary from your diary @recurring(monthly:9)"
                - "Note any new symptoms or medicine changes"
                - "Highlight any month that looks clearly better or worse"
            - name: Heart rate pacing from a resting baseline
              description: |-
                ## Purpose
                Some people use a heart rate monitor to warn them when they are drifting into exertion that will cost them later, a method several ME organisations describe. Working out your resting heart rate and a ceiling with your clinician, then setting an alert, turns an invisible limit into a buzz on the wrist.

                ## Milestones
                1. Your resting heart rate measured on waking for seven days and averaged.
                2. A working ceiling agreed with your clinician and written down.
                3. An alert on a watch or chest strap set to that ceiling.
                4. A month of alerts compared with the diary to see whether they lined up with crashes.

                ## Notes
                A heart rate ceiling is a guide, not a guarantee: mental effort and orthostatic problems can trigger crashes without much rise in heart rate. Some medicines also change heart rate, so check with your clinician.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A heart rate ceiling agreed with your clinician, with a working alert, reviewed against one month of diary entries."
                cadence: rolling
              tasks:
                - "Measure your resting heart rate on waking for seven days"
                - "Ask your clinician about a sensible heart rate ceiling for you"
                - "Set an alert on your watch or strap at that ceiling"
                - "Recheck your resting heart rate over three mornings @recurring(monthly:14)"
            - name: Quarterly review with your doctor or long covid clinic
              description: |-
                ## Purpose
                Without regular reviews, care for these conditions tends to drift: symptoms change, new treatments appear and nobody checks. A review every three months, prepared with your monthly summaries and three questions, keeps the clinical side moving even when nothing dramatic has happened.

                ## Milestones
                1. A review booked every three months with your doctor or clinic.
                2. Monthly summaries and three questions sent or brought to each review.
                3. Agreed actions written down at the end of each appointment.
                4. Actions from the last review checked off before the next one.

                ## Notes
                Start from the **Meeting notes** template. Ask for a phone or video appointment if travelling would cost you a crash.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four reviews held in a year, each with prepared questions and written agreed actions."
                cadence: cyclic
              tasks:
                - "Ask whether reviews can be held as phone or video calls"
                - "Book the next three-monthly review @recurring(quarterly)"
                - "Prepare three questions and the latest monthly summaries"
                - "Write down the agreed actions before the call ends"
            - name: Sleep and rest routine that respects the illness
              description: |-
                ## Purpose
                Unrefreshing sleep is one of the core symptoms, and the usual advice to avoid all daytime rest does not fit people who need rest to function. A routine that keeps a regular wake time, separates planned daytime rest from long naps and records sleep quality gives you and your clinician something to work with.

                ## Milestones
                1. A regular wake time chosen and kept on most days.
                2. Planned daytime rests marked separately from long daytime sleeps in the diary.
                3. Two weeks of sleep quality recorded alongside symptoms.
                4. Any signs of a separate sleep disorder, such as loud snoring or gasping, raised with your doctor.

                ## Notes
                Start from the **Sleep review** template. Suspected sleep apnoea or another sleep disorder needs its own assessment, so mention it rather than assuming it is part of the illness.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A regular wake time kept on at least five days a week for a month, with sleep quality recorded weekly."
                cadence: rolling
              tasks:
                - "Choose a wake time you can keep on most days"
                - "Mark planned rests and long sleeps differently in the diary"
                - "Rate the week's sleep quality and total rest time @recurring(weekly:wed)"
                - "Mention snoring, gasping or leg jerks to your doctor"
            - name: Low-energy meal plan and batch cooking
              description: |-
                ## Purpose
                Cooking from scratch every day can cost more energy than anything else in the house. Planning a week of simple meals, cooking double while sitting down on a good day, and keeping a freezer stock means you still eat properly through a crash.

                ## Milestones
                1. A list of ten meals that take under fifteen minutes of standing.
                2. A weekly meal plan written on the same day each week.
                3. A freezer stock of at least six portions kept up.
                4. Grocery delivery or click and collect set up.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly meal plan written on at least three weeks in four, with at least six frozen portions kept in stock."
                cadence: rolling
              tasks:
                - "List ten meals that need under fifteen minutes on your feet"
                - "Set up a grocery delivery or click and collect account"
                - "Write next week's meal plan and order the shopping @recurring(weekly:fri)"
                - "Cook double sitting down on a good day and freeze the rest"
            - name: Light, noise and sensory load plan
              description: |-
                ## Purpose
                Light, noise and busy places drain energy for many people with ME and long covid, sometimes as much as walking does. Knowing your worst sensory triggers and having the kit to reduce them, from earplugs and sunglasses to quieter shopping times, protects energy for the things you care about.

                ## Milestones
                1. Your top five sensory triggers listed from the diary.
                2. Earplugs, noise-cancelling headphones, an eye mask and tinted glasses kept to hand.
                3. Lower-stimulation options found for shops, appointments and family gatherings.
                4. Screen brightness and notification settings turned down on your phone and computer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of five sensory triggers with a reduction step for each, and the kit kept in your bag and by your bed."
                cadence: rolling
              tasks:
                - "List the five sensory triggers that cost you most"
                - "Put earplugs, an eye mask and sunglasses in your bag"
                - "Ask shops and clinics about quieter times or waiting areas"
                - "Review which sensory triggers cost most this month @recurring(monthly:20)"
            - name: Cognitive energy budget for screens and admin
              description: |-
                ## Purpose
                Thinking, reading and screen work use energy too, and brain fog makes admin slower, so a morning of forms can cost as much as a walk. Batching admin into short, planned slots and capping screen time stops paperwork quietly eating the whole energy budget.

                ## Milestones
                1. A daily screen and admin cap set from your energy envelope.
                2. Admin batched into one or two short slots a week.
                3. Timers or app limits set to hold the cap.
                4. A list of admin that others can take on, such as phone calls and forms.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Admin done in no more than two planned slots a week for a month, with a daily screen cap in place."
                cadence: rolling
              tasks:
                - "Set a daily screen and admin limit that fits your envelope"
                - "Turn on app limits or a timer to hold the cap"
                - "List admin jobs someone else could do for you"
                - "Batch the week's forms and calls into one short slot @recurring(weekly:mon)"
            - name: Understanding ME, CFS and long covid diagnoses
              description: |-
                ## Purpose
                Long covid and ME overlap but are not the same, and the criteria used to diagnose them differ between countries and guidelines. Knowing which criteria your clinician used, and what the label means for the support you can access, helps you ask better questions and spot advice that does not fit you.

                ## Milestones
                1. A patient version of a current ME clinical guideline read.
                2. The difference between long covid and ME written in two or three sentences.
                3. The diagnosis on your record and the criteria behind it confirmed with your doctor.
                4. Services or support that depend on the diagnosis listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your recorded diagnosis and the criteria behind it are written down, with a two-sentence note on how ME and long covid differ."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a patient version of a current ME clinical guideline"
                - "Write two sentences on how long covid and ME differ"
                - "Ask your doctor which diagnosis is on your record and why"
                - "List the services that depend on that diagnosis"
            - name: Breaking the boom and bust cycle
              description: |-
                ## Purpose
                Boom and bust is the pattern of doing too much on a good day, crashing, then resting until the next good day comes. Spotting it in your diary and adopting a rule for good days, such as doing only what you would do on an average one, is one of the most useful habits to learn early.

                ## Milestones
                1. Boom and bust periods marked in your diary.
                2. A personal rule written for good days.
                3. The rule followed on at least three good days.
                4. Symptoms after those days compared with earlier good days.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written good-day rule followed on at least three good days, with the outcome compared in the diary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark each boom and bust in your diary in two colours"
                - "Write a rule for what you will and will not do on good days"
                - "Follow the rule on your next three good days"
                - "Compare symptoms after those days with earlier good days"
            - name: Practising true rest
              description: |-
                ## Purpose
                Rest that counts for the body is lying down with eyes closed and as little input as possible, not scrolling on the sofa or watching television. Practising short, deep rests at set times, even when you do not feel tired, is one of the main tools for staying inside the envelope.

                ## Milestones
                1. A quiet place set up for lying-down rest, with an eye mask and earplugs.
                2. One or two rest times fixed in the day.
                3. Twenty-minute rests kept on most days for four weeks.
                4. Any change in afternoon symptoms noted in the diary.

                ## Notes
                Some people find a guided body scan or breathing recording helps; others need total silence. Try both before deciding.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Lying-down rests with no screens kept on at least 20 days in four weeks, with afternoon symptom scores compared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up a quiet resting spot with an eye mask and earplugs"
                - "Fix one or two rest times that suit your day"
                - "Take a twenty-minute lying-down rest with no screens @recurring(daily)"
                - "Compare afternoon symptom scores before and after four weeks"
            - name: Reading treatment news without being misled
              description: |-
                ## Purpose
                Headlines about cures, supplements and small trials appear every week, and some come with expensive products attached. Learning a few questions to ask of any claim, such as how many people were studied, whether there was a comparison group and who paid, protects both your money and your hope.

                ## Milestones
                1. A short checklist of questions to ask about any new treatment claim.
                2. Two or three trusted sources chosen, such as a patient charity's research summaries.
                3. The checklist tried on one recent headline.
                4. A rule set to discuss new treatments with your clinician before trying them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written checklist for judging treatment claims, tested on at least one recent headline."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five questions to ask of any treatment claim"
                - "Choose two trusted sources for research summaries"
                - "Test the checklist on a recent headline or advert"
                - "Agree with yourself to raise new treatments with your clinician first"
            - name: Breathing pattern retraining for long covid
              description: |-
                ## Purpose
                Breathlessness and a disordered breathing pattern are common after covid even when scans and lung tests come back normal. A specialist respiratory physiotherapist can assess this and teach breathing retraining, which works best in short, gentle sessions that sit inside your energy limits.

                ## Milestones
                1. Your doctor asked whether the breathlessness has been investigated and whether a referral fits.
                2. An assessment with a respiratory physiotherapist attended or booked.
                3. Prescribed breathing exercises practised in short sessions.
                4. Changes in breathlessness recorded in the diary.

                ## Notes
                New or worsening breathlessness, chest pain or breathlessness at rest need prompt medical assessment, not breathing exercises.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A respiratory physiotherapy assessment completed and the prescribed breathing exercises practised for at least four weeks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your doctor whether your breathlessness has been fully investigated"
                - "Request a referral to a respiratory physiotherapist if appropriate"
                - "Practise the exercises you are given in short sessions"
                - "Score your breathlessness once a week in the diary"
            - name: Brain fog workarounds for everyday memory
              description: |-
                ## Purpose
                Brain fog makes it harder to remember appointments, follow conversations and finish tasks, and trying harder usually costs more energy. External supports such as one list, phone alarms, a fixed place for keys and doing one thing at a time take the load off memory.

                ## Milestones
                1. One capture list used for everything, on paper or phone.
                2. Alarms set for medicines, appointments and rests.
                3. Fixed places chosen for keys, glasses and phone.
                4. Two weeks of use reviewed and the system simplified where it felt like extra work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A single capture list, alarms for medicines and appointments, and fixed places for everyday items, in use for two weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose one list for all reminders and stop using the others"
                - "Set phone alarms for medicines, rests and appointments"
                - "Pick fixed places for keys, glasses and phone"
                - "Remove any part of the system that feels like extra work"
            - name: Saying no without spending energy on guilt
              description: |-
                ## Purpose
                Protecting your energy means turning down invitations, requests and favours, which can feel harder than the activity itself. A few ready phrases and a rule about when to answer, rather than agreeing on the spot, save both the energy of the activity and the energy of worrying about it.

                ## Milestones
                1. Three short phrases written for declining or postponing.
                2. A rule adopted to answer non-urgent requests the next day, not on the spot.
                3. A list of lower-energy things you can offer instead, such as a short call.
                4. The phrases used at least three times.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three ready phrases and a next-day answer rule written down and used at least three times."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write three short phrases for declining or postponing"
                - "Adopt a rule to reply to non-urgent requests the next day"
                - "List lower-energy alternatives you can offer"
                - "Note how you felt after using the phrases three times"
            - name: Active stand test for orthostatic intolerance
              description: |-
                ## Purpose
                Dizziness, a racing heart or heavier fatigue when standing are common in ME and long covid and can point to orthostatic intolerance or postural tachycardia. An active stand test, where heart rate and blood pressure are measured lying down and then standing for about ten minutes, is a simple first check your doctor or nurse can arrange.

                ## Milestones
                1. Symptoms on standing listed, with when they tend to happen.
                2. An active stand test or lean test arranged with your doctor or nurse.
                3. The readings and your clinician's interpretation written down.
                4. Any agreed next steps, such as a referral or management plan, recorded.

                ## Notes
                Do not run the test alone at home if you have ever fainted; ask for it to be done in clinic or with someone present.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An active stand test completed with a clinician, with the readings, their interpretation and next steps written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what happens to you when you stand for several minutes"
                - "Ask your doctor or nurse to arrange an active stand test"
                - "Write down the readings and what your clinician says they mean"
                - "Record any referral or management plan agreed"
            - name: Choosing a mobility aid to save energy
              description: |-
                ## Purpose
                Wheelchairs, rollators and folding stools are not a sign of giving up; for many people with ME and long covid they turn an outing that causes a crash into one that does not. Comparing options for the trips that matter most, such as appointments or the school gate, makes the choice practical rather than emotional.

                ## Milestones
                1. The outings that most often cause a crash listed.
                2. A folding stool, rollator and wheelchair compared on weight, cost and storage.
                3. Loan, hire or funded schemes checked before buying.
                4. A choice made and tried on one real outing.

                ## Notes
                Start from the **Purchase decision** template. Many areas run wheelchair services or hire schemes that let you try before you buy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A mobility aid chosen against written criteria and used on at least one real outing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the outings that most often lead to a crash"
                - "Compare a stool, rollator and wheelchair for those outings"
                - "Check loan, hire or funded schemes near you"
                - "Try the chosen aid on one real outing and note the result"
            - name: One-at-a-time symptom treatment trials
              description: |-
                ## Purpose
                Doctors may suggest medicines for specific symptoms such as pain, sleep, headaches or orthostatic problems, and starting several at once makes it impossible to tell what helped. Trying one change at a time, agreed with your doctor and logged against your diary, turns each trial into a clear yes or no.

                ## Milestones
                1. A shortlist of symptom treatments agreed with your doctor, in the order to try them.
                2. Each trial given a start date, a length and a definition of what counts as helping.
                3. Symptoms and side effects logged during each trial.
                4. A clear keep or stop decision recorded for each one.

                ## Notes
                Many people with ME are sensitive to medicines, so ask whether starting low makes sense. Never change prescribed medicines without your prescriber.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every symptom treatment tried has a start date, a logged trial period and a keep or stop decision agreed with your doctor."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your doctor which symptom treatments are worth trying first"
                - "Agree how long each trial will run and what counts as helping"
                - "Log symptoms and side effects in the diary during each trial"
                - "Record the keep or stop decision before starting the next one"
            - name: Weighing a private clinic or unproven treatment
              description: |-
                ## Purpose
                Private clinics offering infusions, supplements or rehabilitation programmes for long covid and ME can cost thousands, and the evidence for many of them is thin. A structured decision, with written questions about evidence, cost, risks and what happens if it makes you worse, lets you choose without regret either way.

                ## Milestones
                1. The treatment, its total cost and the claims made for it written down.
                2. Questions on evidence, risks and refunds sent to the provider.
                3. The option discussed with your own clinician.
                4. A decision recorded with the reasons.

                ## Notes
                Be wary of any programme that pushes steadily increasing exercise regardless of symptoms, or that asks for large payments up front.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written go or no-go decision on the treatment, made after the provider answered your questions and your clinician gave a view."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the treatment, total cost and what it claims to do"
                - "Send the provider your questions on evidence, risks and refunds"
                - "Ask your own clinician for their view on it"
                - "Record your decision and the reasons behind it"
            - name: Deciding whether to reduce, pause or stop work
              description: |-
                ## Purpose
                Pushing on at full hours is a common reason people with ME and long covid get worse, but cutting hours carries money and identity costs. Laying out the options, from reduced hours or home working to sick leave, against your diary and your finances makes it a decision you have weighed rather than one forced by a crash.

                ## Milestones
                1. Your diary reviewed for how work days affect symptoms.
                2. Options listed, including reduced hours, home working, sick leave and ill-health retirement where relevant.
                3. The income effect of each option worked out.
                4. A decision made and discussed with your doctor and employer.

                ## Notes
                Check your employment contract, sick pay policy and any income protection insurance before you decide. An employment adviser or union representative can help.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on working hours, with the income effect of each option written down and discussed with your employer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Look at what your diary shows about work days and crashes"
                - "List your options from reduced hours to sick leave"
                - "Find your sick pay policy and any income protection policy"
                - "Work out the income effect of each option"
                - "Discuss your chosen option with your doctor and employer"
            - name: Benefit or insurance claim evidence pack
              description: |-
                ## Purpose
                Claims for disability benefits or income protection often fail because forms describe the best day rather than the typical week, or leave out post-exertional malaise altogether. An evidence pack built from your diary, monthly summaries and supporting letters shows what you can do reliably, repeatedly and without a crash afterwards.

                ## Milestones
                1. The claim's rules and deadline read and noted.
                2. Diary extracts and monthly summaries chosen to show a typical week, including crash days.
                3. Supporting letters requested from your doctor and anyone who helps you.
                4. Forms completed describing what you can do repeatedly and what it costs afterwards.
                5. A full copy of everything sent kept with the date it went.

                ## Notes
                Many charities and advice services help with these forms for free. Ask for help before the deadline, not after a refusal.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete claim submitted on time with diary evidence and at least one supporting letter, and a dated copy kept."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Note the claim deadline and the evidence it asks for"
                - "Ask an advice service or charity for help with the forms"
                - "Request supporting letters from your doctor and a carer"
                - "Ask the agent to draft answers from your diary showing a typical week"
                - "Keep a dated copy of everything you send"
            - name: Reasonable adjustments request at work
              description: |-
                ## Purpose
                Employers in many countries must consider adjustments for long-term health conditions, but they can only act on what they are told. A written request naming specific changes, such as later starts, home working, rest breaks or fewer meetings, gets further than a general conversation about feeling tired.

                ## Milestones
                1. A list of work tasks and times of day that cost you most energy.
                2. A specific adjustment written for each, with how it helps.
                3. The request sent to your manager or HR in writing.
                4. Agreed adjustments confirmed in writing with a review date.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Agreed workplace adjustments confirmed in writing by your employer, with a review date set."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the work tasks and times that drain you most"
                - "Write one specific adjustment for each item on the list"
                - "Send the request to your manager or HR in writing"
                - "Review how the adjustments are working with your manager @recurring(quarterly)"
            - name: Careful activity increases from a stable baseline
              description: |-
                ## Purpose
                Increasing activity is only worth considering once symptoms have been stable for some weeks, and then in small steps that stop at the first sign of post-exertional malaise. Agreed with your clinician, this is very different from graded exercise programmes that push on regardless, which current ME guidelines advise against.

                ## Milestones
                1. Several stable weeks without crashes confirmed in the diary.
                2. One small increase chosen with your clinician, such as two extra minutes of walking.
                3. The new level held for at least a week while symptoms are watched.
                4. A written rule for stepping back to the previous level if symptoms rise.

                ## Notes
                If symptoms worsen, return to the last level that was stable. Plateaus are normal, not a failure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each activity increase is agreed with your clinician, logged with a start date, and reversed if post-exertional symptoms appear."
                cadence: phased
              tasks:
                - "Check your diary for several stable weeks before changing anything"
                - "Agree one small increase with your clinician"
                - "Hold the new level for at least a week and keep recording"
                - "Decide whether the last month was stable enough for a small step @recurring(monthly:3)"
            - name: Preparing for a first specialist clinic appointment
              description: |-
                ## Purpose
                Waits for ME and long covid services can be long, and the first appointment may be the only long one you get. Arriving with your one-page summary, diary highlights, a medicines list and your top three questions, with rest planned on either side, gets far more out of it.

                ## Milestones
                1. Summary, diary highlights and medicines list ready a week before.
                2. Three priority questions written in order.
                3. Rest planned for the day before and the two days after.
                4. Answers and agreed next steps written down during or straight after.

                ## Notes
                Start from the **Meeting notes** template. Ask whether someone can come with you to take notes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first specialist appointment attended with summary and questions prepared, and next steps written down the same day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather your summary, diary highlights and medicines list"
                - "Write your top three questions in order of importance"
                - "Block rest in the diary the day before and two days after"
                - "Ask someone to come with you to take notes"
                - "Write up the answers and next steps the same day"
            - name: Hospital stay or procedure plan for someone with ME
              description: |-
                ## Purpose
                Hospitals are bright, noisy and full of waiting, and staff may not know how post-exertional malaise affects care. A short sheet for the ward, covering noise and light, rest, help with washing and eating, and orthostatic problems, helps a stay or procedure pass without a long crash afterwards.

                ## Milestones
                1. A one-page ME needs sheet written for ward staff.
                2. A side room, quiet bay or limited visiting requested in advance where possible.
                3. An eye mask, earplugs, easy food and chargers packed.
                4. Recovery time after discharge planned, with help at home.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A one-page ME needs sheet written and given to the ward, with recovery help arranged at home."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page needs sheet for ward staff"
                - "Ask the hospital in advance about a quieter room or bay"
                - "Pack an eye mask, earplugs, easy food and chargers"
                - "Arrange help at home for the week after discharge"
            - name: Getting through a wedding, holiday or family event
              description: |-
                ## Purpose
                Big events are where pacing breaks down: travel, standing, noise and late nights all at once. Choosing which parts to attend, building in rest before and after, and arranging a quiet room and an exit plan lets you be there for the part that matters most.

                ## Milestones
                1. The parts of the event that matter most chosen, and the rest let go.
                2. Quieter days planned for three days before and after.
                3. A quiet room, seat or early exit arranged with the host.
                4. Transport arranged so you are not driving home exhausted.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for the event with chosen parts, quiet days before and after, and an agreed quiet space or exit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the one or two parts of the event that matter most"
                - "Block three quieter days before and after it"
                - "Ask the host for a quiet room or a seat near the exit"
                - "Arrange transport there and back"
            - name: Occupational health assessment preparation
              description: |-
                ## Purpose
                An occupational health appointment can shape what your employer offers, from adjustments to a phased return or ill-health retirement. Going in with your illness summary, a list of what you can do reliably and the adjustments you need makes the report reflect your real situation rather than a good hour.

                ## Milestones
                1. Your illness summary and recent monthly summaries ready.
                2. A list of tasks you can do reliably and those that cause crashes.
                3. The adjustments you want considered written down.
                4. A copy of the report requested and checked for accuracy.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The occupational health assessment attended with prepared notes, and a copy of the report received and checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether the appointment can be by phone or video"
                - "List tasks you can do reliably and those that cause crashes"
                - "Write down the adjustments you want considered"
                - "Ask for a copy of the report and correct any errors"
            - name: Benefit or insurance assessment day plan
              description: |-
                ## Purpose
                Assessments for benefits or insurance claims can involve travel, waiting and an hour of questions, and assessors often see you running on adrenaline. Planning the day, asking for a home or phone assessment and a companion, and recording the crash that follows protects both your health and your claim.

                ## Milestones
                1. A home, phone or video assessment requested if travel would cause a crash.
                2. A companion arranged to come with you and take notes.
                3. Examples of typical and bad days written down to refer to.
                4. The effects over the following week recorded and reported if relevant.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The assessment attended with a companion and prepared examples, and its after-effects recorded in the diary for a week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask whether the assessment can be at home, by phone or video"
                - "Arrange a companion to come and take notes"
                - "Write examples of a typical day and a bad day to refer to"
                - "Record how you feel for a week after the assessment"
            - name: School plan for a child or teenager with ME
              description: |-
                ## Purpose
                Children and young people with ME or long covid often need a reduced timetable, rest breaks and work sent home, and schools vary in how quickly they respond. For parents, a written education plan agreed with the school, the doctor and your child keeps learning going without trading it for their health.

                ## Milestones
                1. A letter from your child's doctor describing the condition and its effects.
                2. A meeting held with the school to agree a reduced timetable and rest arrangements.
                3. Exam arrangements or home tuition requested if needed.
                4. A review date set for the plan each term.

                ## Notes
                Your child's own view of which lessons and friendships matter most should shape the plan.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written education plan agreed with the school, covering timetable, rest and exams, with a termly review date."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your child's doctor for a letter for the school"
                - "Ask your child which lessons and friends matter most"
                - "Request a meeting with the school to agree a plan"
                - "Ask about exam arrangements and home tuition"
                - "Review the plan with the school each term @recurring(quarterly)"
            - name: Course and exam adjustments for students
              description: |-
                ## Purpose
                Students with ME or long covid can usually get extra time, rest breaks, recorded lectures or a reduced study load, but only after registering with the disability or student support service. Doing that early in the term, with medical evidence, avoids the scramble before exams and the risk of failing a module because of a crash.

                ## Milestones
                1. Registration with the disability or student support service completed.
                2. Medical evidence supplied.
                3. An agreed support plan covering lectures, deadlines and exams.
                4. A known process for requesting an extension if a crash hits near a deadline.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written study support plan agreed with your institution, including exam arrangements and an extension process."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Contact the disability or student support service to register"
                - "Ask your doctor for supporting medical evidence"
                - "Agree arrangements for lectures, deadlines and exams"
                - "Find out how to request an extension during a crash"
            - name: Parenting with limited energy
              description: |-
                ## Purpose
                Parents with ME or long covid cannot simply rest when a child is ill, bored or needs collecting. A weekly plan that names backup helpers, low-energy play and the jobs older children can take on keeps family life going without costing you the next week in bed.

                ## Milestones
                1. A list of activities you can do with your children while sitting or lying down.
                2. Backup helpers named for school runs and sick days.
                3. Age-appropriate jobs shared with older children.
                4. A short explanation of the illness given to the children at their level.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly family plan with named backup helpers in use for a month, and at least five low-energy activities listed."
                cadence: rolling
              tasks:
                - "List five things you can do with the children sitting or lying down"
                - "Ask two people to be backups for school runs and sick days"
                - "Plan the week's pick-ups and helpers @recurring(weekly:thu)"
                - "Explain the illness to the children in words that suit their age"
            - name: Caring for a partner or relative with ME
              description: |-
                ## Purpose
                Carers of people with moderate or severe ME often take on cooking, appointments and paperwork while shielding the person from noise and visitors, and burn out quietly. A plan that covers the person's needs and the carer's own rest, respite and support makes the arrangement last for years rather than months.

                ## Milestones
                1. A list of tasks the carer covers, with those others could share marked.
                2. A carer's assessment or local carer support requested where available.
                3. Regular time off for the carer arranged.
                4. An agreed way for the person with ME and the carer to raise problems.

                ## Notes
                Many countries offer carers their own assessment or allowance; a local carers' organisation can tell you what applies.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A care task list with shared jobs, a carer's assessment requested, and at least one regular break a week for the carer."
                cadence: rolling
              tasks:
                - "List every care task and mark the ones others could share"
                - "Contact a local carers' organisation about support and assessment"
                - "Arrange one regular break a week for the carer"
                - "Check in on how the carer is coping @recurring(weekly:tue)"
            - name: Severe ME care plan
              description: |-
                ## Purpose
                People with severe or very severe ME may be housebound or bedbound, unable to tolerate light, sound or touch, and dependent on others for daily care. A written care plan, agreed with the person, their carers and their clinicians, protects them from avoidable harm, including well-meant visits and care routines that trigger relapse.

                ## Milestones
                1. A care plan covering positioning, washing, food and fluids, sensory needs and communication.
                2. Home visits arranged instead of clinic appointments where possible.
                3. The plan given to every carer and visiting professional.
                4. Signs that need urgent medical attention written into the plan.
                5. A review date set with the clinical team.

                ## Notes
                Even short conversations can be too much at this level. Agree a simple signal system, such as hand signals or cards, before it is needed.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written severe ME care plan agreed with the person and their clinicians, given to every carer, with a review date set."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down current needs for washing, food, positioning and sensory load"
                - "Ask the clinical team for home visits instead of clinic trips"
                - "Agree a simple signal system for communication"
                - "Give the plan to every carer and visiting professional"
                - "Review the care plan with carers and clinicians @recurring(quarterly)"
            - name: Long covid in later life alongside other conditions
              description: |-
                ## Purpose
                In later life, fatigue, breathlessness and brain fog after covid can overlap with heart, lung, thyroid or memory problems, and one can be missed behind another. A clear before and after record and a separate list of new symptoms helps your doctor decide which need their own investigation.

                ## Milestones
                1. A note of what you could do before the infection compared with now.
                2. New symptoms listed separately from long-standing ones.
                3. Your doctor asked to consider which need separate checks.
                4. Agreed investigations and their results recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A before and after comparison and new symptom list reviewed with your doctor, with agreed investigations recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write what you could do before the infection and what you can do now"
                - "List new symptoms separately from long-standing ones"
                - "Ask your doctor which symptoms need separate checks"
                - "Record the investigations agreed and their results"
            - name: Phased return to work plan
              description: |-
                ## Purpose
                Returning to work too quickly after long covid or an ME relapse is one of the commonest causes of a setback. A written phased return, starting well below your envelope with fixed review points and permission to pause, gives you and your employer a shared plan rather than a test of willpower.

                ## Milestones
                1. A starting pattern agreed, such as two short days a week, well inside your envelope.
                2. Review points every two to four weeks written into the plan.
                3. A rule agreed for pausing or stepping back if symptoms rise.
                4. The plan signed off by your employer, with occupational health or your doctor involved.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written phased return plan with review points and a step-back rule, agreed with your employer before the first day back."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft a starting pattern well inside your energy envelope"
                - "Add review points every two to four weeks"
                - "Agree a step-back rule for when symptoms rise"
                - "Get the plan agreed by your employer before the first day back"
            - name: Two-year symptom and function trend review
              description: |-
                ## Purpose
                Recovery, plateaus and slow decline all look the same from one month to the next. Looking at two years of monthly summaries and functional scores together shows the real direction, which matters for treatment choices, work decisions and long-term claims.

                ## Milestones
                1. Two years of monthly summaries and functional scores gathered.
                2. A simple chart of crash counts and functional scores over time.
                3. Turning points matched to events such as infections, work changes or new treatments.
                4. The findings shared with your clinician.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-year chart of functional scores and crash counts with annotated turning points, shared with your clinician."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather two years of monthly summaries and functional scores"
                - "Ask the agent to chart crash counts and scores by month"
                - "Mark infections, work changes and new treatments on the chart"
                - "Share the chart with your clinician at the next review"
            - name: Joining a research study or patient registry
              description: |-
                ## Purpose
                Research into ME and long covid depends on patients taking part, and many studies now run by post or online so that people with limited energy can join. Choosing a study that fits your capacity, and knowing exactly what it will ask of you, lets you contribute without paying for it with a crash.

                ## Milestones
                1. Current studies and registries found through patient charities or research networks.
                2. One study chosen whose demands fit your energy envelope.
                3. The participant information read, including time needed and any travel.
                4. A consent decision made and the study's contact details saved.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision recorded on joining a specific study or registry, made after reading its participant information."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up current studies through a patient charity or research network"
                - "Check how much time and travel each one needs"
                - "Read the participant information for your chosen study"
                - "Save the study contacts and your decision"
            - name: Plan for reinfection or a new virus
              description: |-
                ## Purpose
                Many people with long covid or ME find that a new infection, whether covid, flu or a heavy cold, sets off a relapse. A plan agreed with your doctor, covering how you reduce exposure, which tests to keep at home, when to seek treatment and how to rest hard if it happens, limits the damage.

                ## Milestones
                1. Your doctor's advice on vaccines and early treatment options recorded.
                2. Home test kits and supplies kept in stock.
                3. Your own exposure-reduction steps for crowded places written down.
                4. A rest-first plan for the first two weeks of any new infection.

                ## Notes
                Ask your doctor about vaccination rather than following general online advice; timing and choices depend on your circumstances.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written reinfection plan with your doctor's advice on vaccines and treatment, a stocked test kit and a two-week rest plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your doctor about vaccines and early treatment for you"
                - "Write down your exposure-reduction steps for crowded places"
                - "Write a rest-first plan for the first two weeks of any infection"
                - "Restock home test kits and masks @recurring(yearly)"
            - name: Peer support within your energy limits
              description: |-
                ## Purpose
                Talking to people with the same illness can ease isolation and bring practical tips clinicians do not have, but online groups can also be draining or full of unproven cures. Choosing one well-moderated group and setting a limit on time spent keeps the benefit without the cost.

                ## Milestones
                1. Two or three groups run by patient charities or well-moderated forums found.
                2. One group chosen and joined.
                3. A limit set on time spent, and a rule for when to step away.
                4. One useful tip from the group tried and logged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Membership of one moderated peer group with a written time limit, attended at least once a month."
                cadence: rolling
              tasks:
                - "Find two or three groups run by patient charities"
                - "Join the one that feels calmest and best moderated"
                - "Set a time limit for reading and posting"
                - "Join one online peer meeting if your energy allows @recurring(monthly:16)"
            - name: Annual self-management plan review
              description: |-
                ## Purpose
                Once a year it is worth gathering everything in this area, the pacing plan, crash plan, adjustments, care plan and treatment record, and checking it all still fits your life. An annual review with your clinician turns a pile of documents into one current self-management plan.

                ## Milestones
                1. All current plans and summaries gathered in one place.
                2. Each plan marked as current, needing an update or retired.
                3. An annual review held with your doctor or clinic.
                4. One updated self-management plan saved and shared with the people who need it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "One self-management plan updated within the last twelve months, reviewed with a clinician and shared with carers."
                cadence: cyclic
              tasks:
                - "Gather your pacing, crash, care and work plans in one folder"
                - "Mark each plan as current, out of date or retired"
                - "Book an annual self-management review with your doctor @recurring(yearly)"
                - "Share the updated plan with your carers and helpers"
---

# Chronic Fatigue & Long Covid

This area is for anyone living with ME, chronic fatigue syndrome or long covid, and for the parents, partners and carers around them. It starts with the foundations (a symptom diary, learning your own post-exertional malaise, finding your energy envelope and writing a crash plan), then the daily and weekly pacing routines, the skills of real rest and working around brain fog, the decisions about work, treatments and claims, the appointments and events that need planning, the situations of children, students, parents, carers and severe illness, and finally the long view of trends and research.

What repeats is an evening pacing plan and a daily lying-down rest, a weekly energy review and meal plan, a monthly symptom summary, a review with your doctor or clinic each quarter and a yearly self-management review. The Metrics log, Habit tracker, Meeting notes, Sleep review, Weekly meal plan and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
