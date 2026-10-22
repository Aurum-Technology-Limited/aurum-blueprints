---
id: physical-health.arthritis-joint-care
name: Arthritis & Joint Care
description: "Joint protection, exercise that eases pain, safe medicine and monitoring routines, flare plans and well-prepared rheumatology appointments, for living with osteoarthritis or rheumatoid arthritis."
category: personal
version: 1.0.0
tags: [physical-health, arthritis-joint-care, retiree, everyone, osteoarthritis, rheumatoid-arthritis, joint-protection, rheumatology]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - training-program
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
        - name: Arthritis & Joint Care
          description: "Living with osteoarthritis or rheumatoid arthritis: joint protection, medication, flare tracking, physiotherapy and rheumatology appointments, so daily movement stays possible for longer."
          projects:
            - name: Urgent joint symptoms card
              description: |-
                ## Purpose
                A single hot, red, swollen joint with a fever, a joint that suddenly cannot bear weight, or new weakness or numbness alongside neck pain needs same-day medical help, not a wait for the next appointment. Writing down your health service's urgent signs and who to call, before you ever need them, means nobody in the house has to decide in a panic.

                ## Milestones
                1. Your health service's guidance on urgent joint symptoms found and read.
                2. A one-page card listing the urgent signs and the number to call.
                3. The card kept where the household can find it, with a copy in your bag.
                4. Your rheumatology team asked whether your treatment adds signs to watch, such as infection while on immune-suppressing medicines.

                ## Notes
                Use your own health service's wording. The card organises their advice; it does not replace it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card listing urgent joint symptoms and the number to call, written from your health service's guidance, is kept where the household can find it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's guidance on a hot, swollen or suddenly painful joint"
                - "Write the urgent signs and the number to call on one card"
                - "Ask your team whether your medicines change which infection signs are urgent"
                - "Show the card to everyone you live with"
            - name: Joint symptom history for your first appointment
              description: |-
                ## Purpose
                Appointments for joint pain are short, and the details that point towards wear-related or inflammatory arthritis are easy to forget once you are in the room: which joints, how long morning stiffness lasts, whether joints swell, and who in the family has had arthritis or psoriasis. One page written beforehand lets your clinician spend the time examining you rather than taking notes.

                ## Milestones
                1. Every affected joint marked on a simple body outline.
                2. How long morning stiffness lasts on a typical day, timed rather than guessed.
                3. Swelling, warmth, rashes, eye or bowel symptoms and family history noted in one place.
                4. The one-page history taken to the appointment and a copy left with the clinician.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page joint history covering affected joints, stiffness time, swelling and family history is taken to the first appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark every painful or swollen joint on a printed body outline"
                - "Time how long morning stiffness lasts on three separate days"
                - "Ask close relatives about arthritis, psoriasis or gout in the family"
                - "Write the history on one page and print two copies"
            - name: Two-week joint pain and stiffness diary
              description: |-
                ## Purpose
                Pain that eases with gentle use and worsens late in the day tells a different story from stiffness that lasts all morning and swelling that comes and goes. Fourteen days of short entries show the pattern your clinician needs, and they become the baseline every later treatment is judged against.

                ## Milestones
                1. A diary format with pain score, stiffness minutes, swollen joints, activity and sleep.
                2. Fourteen consecutive days recorded, including at least two bad days.
                3. A short summary of the pattern written at the end.
                4. The summary shared with your clinician or brought to the next appointment.

                ## Notes
                Start from the **Metrics log** template. Two lines a day is enough; long diaries are abandoned by day five.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fourteen consecutive days of pain, stiffness and swelling entries, with a written summary shared with your clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a diary from the metrics log template with five columns"
                - "Record pain, stiffness minutes and any swollen joints each evening for 14 days"
                - "Note what you were doing on the worst two days"
                - "Write a five-line summary of the pattern for your clinician"
            - name: Getting a clear diagnosis of your joint pain
              description: |-
                ## Purpose
                Osteoarthritis, rheumatoid arthritis, gout and psoriatic arthritis are treated very differently, and inflammatory types tend to do best when treatment starts early. If joints are swollen, stiff for more than half an hour in the morning, or several small joints are affected, asking directly whether a rheumatology referral is needed can save months.

                ## Milestones
                1. Your clinician asked which type of arthritis they think is most likely, and why.
                2. Any blood tests or X-rays they order completed and the results discussed.
                3. A referral to rheumatology made, or the reason it is not needed written down.
                4. A working diagnosis recorded in your own notes with the date it was given.

                ## Notes
                Persistent joint swelling is worth raising promptly. If a referral is made, ask how long the wait is and who to call if things get worse while you wait.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A working diagnosis, with the tests behind it and a referral decision, is written in your notes and dated."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Book an appointment and say on booking that joints are swollen or stiff"
                - "Ask which type of arthritis is most likely and what would confirm it"
                - "Ask directly whether a rheumatology referral is needed"
                - "Write down the working diagnosis and the date it was given"
            - name: Arthritis treatment plan agreed with your clinician
              description: |-
                ## Purpose
                Once a diagnosis is clear, most people leave with a prescription but no written plan: what the treatment aims to achieve, how long to give it, which tests go with it and when it will be reviewed. Agreeing those four points turns a vague course of tablets into something you can check progress against.

                ## Milestones
                1. The goal of treatment written in your words, such as less morning stiffness or walking to the shops.
                2. Each treatment listed with how long it needs before it can be judged.
                3. Any monitoring tests and their intervals written down.
                4. A review date agreed and in the calendar.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page plan listing treatment goals, how long each treatment needs, monitoring tests and a review date, agreed with your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician what this treatment should change and by when"
                - "Ask which blood tests or checks go with each medicine"
                - "Write the plan on one page with the review date"
                - "Put the review date in your calendar"
            - name: Arthritis care team contact sheet
              description: |-
                ## Purpose
                Arthritis care is spread across a GP, a rheumatology department, a specialist nurse advice line, a physiotherapist, an occupational therapist and a pharmacist, and in a flare it is easy to call the wrong one. A single sheet with each name, number, opening hours and what to call them about saves hours on hold.

                ## Milestones
                1. Every professional involved listed with name, role and number.
                2. The rheumatology advice line number and its hours confirmed.
                3. A line for each saying what to contact them about.
                4. The sheet kept with your treatment plan and saved on your phone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact sheet listing every member of your arthritis care team with numbers, hours and what to call each about, saved on paper and phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every professional involved in your joint care"
                - "Ask the rheumatology department for its advice line number and hours"
                - "Write one line per person on what to call them about"
                - "Check every number on the contact sheet still works @recurring(yearly)"
            - name: Baseline sit-to-stand, walking and grip measures
              description: |-
                ## Purpose
                Scores for pain move with mood and weather, but how many times you can stand from a chair in thirty seconds, how long a set walk takes and whether you can open a jar are harder to argue with. Recording three simple function measures now gives you something solid to compare after exercise, treatment or surgery.

                ## Milestones
                1. A thirty-second chair stand count recorded on a standard-height chair.
                2. The time for a fixed indoor or outdoor walk recorded.
                3. A simple hand task, such as opening a jar or doing up buttons, rated for difficulty.
                4. All three written in your log with the date, ready to repeat.

                ## Notes
                Do these on an ordinary day, not your best or worst. Stop if anything causes sharp pain and mention it to your physiotherapist.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three dated function measures, chair stands, a timed walk and a hand task, are recorded in your log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count how many times you can stand from a chair in thirty seconds"
                - "Time a fixed walk you can repeat, such as to the end of the road"
                - "Rate how hard it is to open a jar and do up buttons"
                - "Write all three in your log with today's date"
            - name: Three everyday tasks arthritis is making harder
              description: |-
                ## Purpose
                Treatment goals such as reducing inflammation mean little day to day; getting in and out of the bath, kneeling in the garden or carrying shopping up the stairs mean a great deal. Naming three tasks that matter to you gives your physiotherapist and rheumatology team something concrete to aim at.

                ## Milestones
                1. Three specific tasks named that pain or stiffness now limits.
                2. Each rated from 0 to 10 for how hard it is today.
                3. The three tasks shared with your physiotherapist or clinician.
                4. The ratings repeated after three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three named everyday tasks, each with a dated difficulty rating, shared with your care team and rerated after three months."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Write down three everyday tasks that your joints now make difficult"
                - "Rate each from 0 to 10 for difficulty today"
                - "Share the three tasks at your next physio or clinic appointment"
                - "Rerate the three tasks after three months"
            - name: Home walk-through for quick joint-friendly fixes
              description: |-
                ## Purpose
                Small changes cost little and remove dozens of painful movements a day: a raised toilet seat, lever taps, a perching stool by the hob, the heaviest pans moved to waist height. A room-by-room walk through the house, noting every task that hurts, shows which fixes are worth doing first.

                ## Milestones
                1. Every room walked through with a note of each task that strains a joint.
                2. A list of fixes ranked by how often the task happens.
                3. The three cheapest, most frequent fixes made.
                4. Bigger changes passed on to an occupational therapy assessment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A room-by-room list of joint-straining tasks exists and the top three fixes are in place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk each room and note every task that strains a joint"
                - "Move heavy everyday items to between waist and shoulder height"
                - "Rank the remaining fixes by how often the task happens"
                - "Make the three cheapest high-frequency fixes this month"
            - name: Daily range-of-motion routine for stiff joints
              description: |-
                ## Purpose
                Stiff joints lose movement quietly, and a few minutes of gentle movement through each joint's full range, done most days, is one of the most consistent recommendations for both osteoarthritis and rheumatoid arthritis. Linking it to a fixed moment, such as after a warm shower, makes it a habit rather than a resolution.

                ## Milestones
                1. A ten-minute set of movements agreed with your physiotherapist or taken from a reputable arthritis charity.
                2. The routine linked to a fixed daily moment.
                3. Five days a week completed for four weeks.
                4. Any movement that makes pain worse for more than two hours raised with your physiotherapist.

                ## Notes
                Start from the **Habit tracker** template. Gentle and regular beats long and occasional.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The range-of-motion routine is done on at least five days a week for four consecutive weeks, tracked in a habit tracker."
                cadence: rolling
              tasks:
                - "Ask your physiotherapist for a ten-minute joint movement routine"
                - "Choose the daily moment the routine will follow"
                - "Do the joint movement routine after your morning shower @recurring(daily)"
                - "Note any movement that leaves pain worse two hours later"
            - name: Twice-weekly strength sessions for knees and hips
              description: |-
                ## Purpose
                Strong thigh and hip muscles take load off arthritic knees and hips, and strengthening exercise is a first-line treatment in most osteoarthritis guidance. Two short sessions a week, built up slowly with your physiotherapist's advice, usually make more difference to pain on the stairs than any gadget.

                ## Milestones
                1. Five or six exercises chosen with a physiotherapist or from a reputable programme.
                2. Two sessions a week booked in the calendar on fixed days.
                3. Repetitions or resistance increased at least once a month.
                4. Twelve weeks completed and the chair stand count repeated.

                ## Notes
                Start from the **Training program** template. Some pain during exercise is common; ask your physiotherapist what level is acceptable and what means stop.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of twice-weekly strength sessions logged, with at least three progressions and a repeated chair stand count."
                cadence: rolling
              tasks:
                - "Ask your physiotherapist which strength exercises suit your joints"
                - "Set up a session plan from the training program template"
                - "Do your knee and hip strength session @recurring(weekly:tue,fri)"
                - "Add repetitions or resistance when the last set feels easy"
            - name: Low-impact cardio that spares the joints
              description: |-
                ## Purpose
                Walking, swimming, water exercise and cycling build fitness and help mood and sleep without pounding sore joints. Finding one option you enjoy and can reach easily, then doing it every week, keeps the rest of the body healthy while arthritis limits other activity.

                ## Milestones
                1. Two or three low-impact options tried once each.
                2. One chosen for convenience, cost and enjoyment.
                3. A weekly slot booked and kept for eight weeks.
                4. Any joint that flares after a session noted and discussed with your physiotherapist.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One low-impact activity chosen and done weekly for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Find the times of water exercise or gentle swim sessions near you"
                - "Try two low-impact activities in the next fortnight"
                - "Go to your chosen low-impact session @recurring(weekly:sat)"
                - "Note any joint that is sore the day after a session"
            - name: Weekly flare and symptom check-in
              description: |-
                ## Purpose
                Flares that are written down can be shown; flares that are only remembered shrink or grow with time. A five-minute check-in each weekend, noting swollen joints, stiffness, fatigue and any days lost, gives your rheumatology team evidence rather than an impression.

                ## Milestones
                1. A short weekly entry format with the same five questions each time.
                2. A weekly slot in the calendar.
                3. Twelve consecutive weeks recorded.
                4. The weekly entries summarised before each appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly check-ins recorded, each with swollen joints, stiffness, fatigue and days affected."
                cadence: rolling
              tasks:
                - "Write the five questions your weekly check-in will answer"
                - "Record swollen joints, stiffness, fatigue and days lost this week @recurring(weekly:sun)"
                - "Summarise the last twelve weeks before your next clinic visit"
            - name: Safe routine for once-weekly arthritis tablets
              description: |-
                ## Purpose
                Some arthritis medicines are taken once a week rather than daily, and mixing up the day or taking them daily by mistake is a known cause of serious harm. A fixed day, a written note of which tablets are weekly and a tick each week make that mistake very unlikely.

                ## Milestones
                1. Your pharmacist asked to confirm which of your medicines are weekly and which are daily.
                2. One fixed day of the week agreed for weekly tablets.
                3. The day written on the box, the medicines list and the calendar.
                4. Anyone who helps with your medicines told the routine.

                ## Notes
                Never change the day, the dose or the timing without checking with your prescriber or pharmacist. Any companion tablet prescribed alongside follows its own instructions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly arthritis tablets are taken on one agreed day and ticked off each week, with the day written on the box and the medicines list."
                cadence: rolling
              tasks:
                - "Ask your pharmacist which of your medicines are weekly and which are daily"
                - "Write the weekly day on the box and on your medicines list"
                - "Tick off the weekly arthritis tablets on your agreed day @recurring(weekly)"
                - "Tell anyone who helps with your medicines which day is the weekly day"
            - name: Monitoring blood tests for arthritis medicines
              description: |-
                ## Purpose
                Several disease-modifying arthritis medicines need regular blood tests to check the liver, kidneys and blood count, and prescriptions can be paused if a test is missed. Knowing your interval, booking the next test before leaving the last one and checking results are back keeps treatment uninterrupted.

                ## Milestones
                1. The monitoring interval for each medicine written down from your rheumatology team.
                2. Where tests are done, and how to book them, confirmed.
                3. Each test booked before leaving the previous one.
                4. Results checked as they arrive and any abnormal flag followed up.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every monitoring blood test is done within the interval your team set for twelve months, with no prescription paused for a missed test."
                cadence: rolling
              tasks:
                - "Ask your rheumatology team for the monitoring interval of each medicine"
                - "Find out where monitoring bloods are taken and how to book"
                - "Check your next monitoring blood test is booked @recurring(monthly:14)"
                - "Ask who will contact you if a result needs action"
            - name: Monthly joint function review
              description: |-
                ## Purpose
                Weekly notes are only useful if someone looks across them. Fifteen minutes a month comparing pain, stiffness and your three everyday tasks against the month before shows whether treatment is working, slipping or needs a call to the advice line before the next scheduled visit.

                ## Milestones
                1. A monthly slot in the calendar.
                2. The month's weekly check-ins summarised in three lines.
                3. A rule written down, agreed with your team, for when a change means calling.
                4. Six consecutive monthly reviews completed.

                ## Notes
                Start from the **Metrics log** template if you want one row per month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews recorded, each comparing the month with the last and noting any action taken."
                cadence: rolling
              tasks:
                - "Ask your team what change between reviews should prompt a call"
                - "Summarise the month's joint symptoms and function in three lines @recurring(monthly:9)"
                - "Note whether your three everyday tasks are easier or harder"
            - name: Pacing housework and errands around sore joints
              description: |-
                ## Purpose
                Many people with arthritis do everything on a good day and pay for it with two bad ones. Planning the week so heavy jobs are spread out, broken into shorter spells and alternated with lighter tasks keeps more days usable and fewer days lost to flares.

                ## Milestones
                1. A week of activity and pain noted to see the boom and bust pattern.
                2. Heavy tasks such as vacuuming, gardening and the big shop spread across the week.
                3. Long tasks split into shorter spells with rests planned in.
                4. Four weeks planned this way, with flare days compared to before.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks planned with heavy tasks spread out and broken up, with flare days counted against the previous month."
                cadence: rolling
              tasks:
                - "List the heavy household jobs you usually do in one go"
                - "Split the biggest job into two or three shorter spells"
                - "Plan the week's heavier jobs across different days @recurring(weekly:mon)"
                - "Count flare days this month and compare with last month"
            - name: Written flare plan for arthritis
              description: |-
                ## Purpose
                Flare-ups arrive without warning, often at weekends, and decisions made in pain tend to be poor ones. A written plan agreed with your rheumatology team, covering what to try at home, what to cancel, when to call the advice line and when a flare needs urgent help, makes the first day of a flare calmer.

                ## Milestones
                1. Your team's advice on managing a flare at home written down.
                2. The point at which to call the advice line agreed.
                3. A list of things to cancel or hand over during a flare.
                4. The plan kept with the urgent symptoms card and reviewed yearly.

                ## Notes
                Rest, heat or cold and simple pacing are common parts of a flare plan, but any medicine steps must come from your own team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written flare plan agreed with your rheumatology team, including when to call the advice line, is kept with your urgent symptoms card."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your team what you should do at home in the first days of a flare"
                - "Agree when a flare means calling the advice line"
                - "List the commitments to cancel or hand over during a flare"
                - "Review the flare plan with your team @recurring(yearly)"
            - name: Quarterly treatment plan check
              description: |-
                ## Purpose
                Treatment plans drift: a medicine that was meant to be reviewed at three months is still running at a year, or physiotherapy stopped and nobody noticed. A short quarterly check against your written plan catches the gaps while they are still small.

                ## Milestones
                1. The written plan reread each quarter.
                2. Each treatment marked as on track, stalled or due for review.
                3. Any overdue review or referral chased.
                4. Four quarterly checks completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks in a year, each recording the status of every treatment and any review chased."
                cadence: rolling
              tasks:
                - "Reread your treatment plan and mark each item on track or overdue @recurring(quarterly)"
                - "Chase any review or referral that is overdue"
                - "Update the plan with any change agreed since the last check"
            - name: Walking aids, splints and insoles kept in working order
              description: |-
                ## Purpose
                Worn stick ferrules slip, splints that no longer fit rub and stop being worn, and insoles flatten without anyone noticing. A quick check every few months keeps the equipment that protects your joints safe and actually in use.

                ## Milestones
                1. Every aid, splint and insole you use listed with where it came from.
                2. Stick height checked with a physiotherapist or against the supplier's guidance.
                3. Worn ferrules, straps or insoles replaced.
                4. Ill-fitting splints taken back to the service that supplied them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every walking aid, splint and insole is listed and checked each quarter, with worn parts replaced."
                cadence: rolling
              tasks:
                - "List every walking aid, splint and insole you use"
                - "Ask a physiotherapist to check your stick height and which hand to use"
                - "Check ferrules, straps and insoles for wear @recurring(quarterly)"
                - "Book a refit for any splint that rubs or no longer fits"
            - name: How osteoarthritis and rheumatoid arthritis differ
              description: |-
                ## Purpose
                Osteoarthritis is mainly about cartilage and bone changing under load over time, while rheumatoid arthritis is the immune system attacking the joint lining, and the two call for different treatments, tests and expectations. Understanding which you have, and why the difference matters, makes every appointment and leaflet easier to follow.

                ## Milestones
                1. A reputable arthritis charity's guide to your type of arthritis read.
                2. Three questions about your own condition written down.
                3. The questions answered by your clinician or specialist nurse.
                4. A short note in your own words on what your type of arthritis means for you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-paragraph note in your own words on your type of arthritis, with three questions answered by your clinician."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a national arthritis charity's guide to your type of arthritis"
                - "Write three questions the guide raised about your own joints"
                - "Ask the questions at your next appointment"
                - "Write a paragraph explaining your type of arthritis in plain words"
            - name: Joint protection in everyday tasks
              description: |-
                ## Purpose
                Joint protection is a set of practical techniques taught by occupational therapists: using bigger and stronger joints, spreading load across both hands, avoiding a tight grip held for long, and using gadgets for twisting. Practising a few in your own kitchen and bathroom reduces strain on small joints every day.

                ## Milestones
                1. The main joint protection principles learned from an occupational therapist or charity guide.
                2. Five everyday tasks identified where a principle applies.
                3. Each of the five done the new way for two weeks.
                4. The techniques that stuck written on a card in the kitchen.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five everyday tasks done using joint protection techniques for two weeks, with the ones that stuck written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an occupational therapy guide to joint protection"
                - "Choose five daily tasks where you grip, twist or carry"
                - "Practise doing each task with palms, forearms or both hands"
                - "Write the techniques that stuck on a card by the kettle"
            - name: Hand and thumb exercises for arthritic fingers
              description: |-
                ## Purpose
                Hand osteoarthritis and rheumatoid arthritis both make fine tasks such as buttons, keys and jar lids harder, and specific hand exercises help keep grip and movement. Learning a short set properly from a hand therapist or physiotherapist, then practising it, protects the tasks that keep you independent.

                ## Milestones
                1. A hand exercise set taught by a hand therapist, physiotherapist or reputable charity video.
                2. Correct form checked by a professional once.
                3. Exercises done three times a week for six weeks.
                4. Grip tasks from your baseline rerated.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Six weeks of hand exercises three times a week completed, with grip tasks rerated against your baseline."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your GP or physiotherapist about a hand therapy referral"
                - "Learn a short hand and thumb exercise set from a trusted source"
                - "Do your hand and thumb exercises @recurring(weekly:mon,wed,fri)"
                - "Rerate buttons, keys and jar lids after six weeks"
            - name: Spotting the early signs of a rheumatoid flare
              description: |-
                ## Purpose
                Many people with inflammatory arthritis notice the same warning signs before each flare: tiredness, a familiar joint warming up, rings feeling tight, stiffness lasting longer. Learning your own pattern from past flares lets you start your flare plan earlier and call the team sooner.

                ## Milestones
                1. The last three flares looked back on using your weekly check-ins.
                2. Two or three personal early signs identified.
                3. The early signs added to the top of your flare plan.
                4. The pattern discussed with your specialist nurse.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two or three personal early flare signs, drawn from past check-ins, are written at the top of your flare plan."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look back at your last three flares in your check-in notes"
                - "Write what you noticed in the days before each one"
                - "Add your two or three early signs to the flare plan"
                - "Ask your specialist nurse whether the pattern fits your condition"
            - name: Making sense of your arthritis tests and X-rays
              description: |-
                ## Purpose
                Results letters mention CRP, ESR, rheumatoid factor, anti-CCP or joint space narrowing, often without saying what they mean for you. Learning what each test measures, and asking how your results fit your diagnosis, stops numbers causing either worry or false comfort.

                ## Milestones
                1. Copies of your recent blood results and imaging reports gathered.
                2. What each test measures looked up on a reputable health site.
                3. Questions about your own results written and answered by your clinician.
                4. Key results recorded with dates so trends are visible.

                ## Notes
                X-ray changes often do not match how much a joint hurts. Ask your clinician how they read yours rather than going by the report alone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your recent arthritis test results recorded with dates and your clinician's explanation of what they mean for you."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Download your latest blood results and X-ray reports from the patient portal"
                - "Look up what each named test measures on a reputable health site"
                - "Write questions about your own results for your clinician"
                - "Record key results and dates in your log"
            - name: Arthritis self-management course
              description: |-
                ## Purpose
                Health services and arthritis charities often run free group or online courses on living with arthritis, covering exercise, pain, fatigue and mood. Doing one alongside others with the same condition gives practical tips no leaflet carries, and often a local group to keep going with afterwards.

                ## Milestones
                1. Courses available locally or online found, with dates and costs.
                2. One course booked.
                3. All sessions attended or completed online.
                4. Three changes you will keep written down at the end.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One arthritis self-management course completed, with three practical changes written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Search a national arthritis charity's site for courses near you"
                - "Ask your physiotherapist about any group programme for joint pain"
                - "Book onto one course that fits your week"
                - "Write three changes you will keep after the last session"
            - name: Understanding DMARD and biologic options before clinic
              description: |-
                ## Purpose
                If rheumatoid or psoriatic arthritis is not controlled, a rheumatologist may suggest a disease-modifying drug, a biologic or a targeted tablet, each with different routines, monitoring and infection precautions. Reading the patient information beforehand means the clinic time is spent on your questions rather than the basics.

                ## Milestones
                1. Patient information leaflets for the options mentioned obtained.
                2. Practical differences noted: tablet or injection, how often, what monitoring.
                3. Questions written on side effects, infections, vaccines and family plans.
                4. Your preferences shared at the appointment.

                ## Notes
                This prepares you for a shared decision. The choice of medicine is made with your rheumatology team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of the treatment options offered, with your questions, taken to the rheumatology appointment."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your specialist nurse for leaflets on the options being considered"
                - "Note for each option how it is taken and what monitoring it needs"
                - "Write your questions on infections, vaccines and family plans"
                - "Take the comparison page to the appointment"
            - name: Grip aids and kitchen tools for arthritic hands
              description: |-
                ## Purpose
                Jar openers, thick-handled cutlery, tap turners, kettle tippers and key turners are cheap, but buying them at random fills drawers with things that do not help. Choosing for your three hardest hand tasks, ideally after trying them, gets the right few into daily use.

                ## Milestones
                1. Your three hardest hand tasks named.
                2. Two options for each task compared on grip, weight and price.
                3. Aids tried in a shop, a demonstration centre or with an occupational therapist where possible.
                4. The chosen aids bought and in daily use for a month.

                ## Notes
                Start from the **Purchase decision** template. Some services lend or supply aids after an occupational therapy assessment, so ask before buying larger items.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Aids bought for your three hardest hand tasks, each chosen against at least one alternative and used for a month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the three hand tasks that hurt most each day"
                - "Compare two aids for each task on grip, weight and price"
                - "Ask whether a local service lends or demonstrates daily living aids"
                - "Buy the chosen aids and keep them where the task happens"
            - name: Painkillers and anti-inflammatory gels review with your pharmacist
              description: |-
                ## Purpose
                People with arthritis often build up a mix of tablets, gels and shop-bought remedies over the years, some of which interact or carry stomach, kidney or heart risks with long use. A sit-down review with your pharmacist confirms what is worth continuing, what to stop and what is safe to combine.

                ## Milestones
                1. Every pain medicine, gel and remedy you use listed, including shop-bought ones.
                2. The list reviewed with a pharmacist or prescriber.
                3. Agreed changes written down.
                4. A follow-up a month later to see whether pain control held.

                ## Notes
                Do not stop prescribed medicines or add new ones without that conversation. Anti-inflammatory tablets in particular need checking against your other conditions.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pain medicine list reviewed with a pharmacist or prescriber, with agreed changes written down and checked a month later."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every painkiller, gel and remedy you use, including shop-bought ones"
                - "Book a medicines review with your pharmacist"
                - "Write down every change agreed at the review"
                - "Bring the updated pain medicine list to a pharmacist review @recurring(yearly)"
            - name: Supplement claims checked with your pharmacist
              description: |-
                ## Purpose
                Glucosamine, chondroitin, turmeric, fish oil and collagen are heavily marketed for joints, cost real money over a year, and some interact with prescribed medicines. Checking the evidence and the interactions before buying, or before continuing, decides whether each one earns its place in the cupboard.

                ## Milestones
                1. Every supplement you take or are considering listed with its monthly cost.
                2. Independent evidence for each looked up on a reputable health site.
                3. Interactions with your prescribed medicines checked with a pharmacist.
                4. A keep, stop or trial decision recorded for each.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each joint supplement you take or considered has a recorded keep, stop or trial decision checked against your medicines."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each joint supplement with what it costs you a month"
                - "Look up independent evidence for each on a reputable health site"
                - "Ask your pharmacist whether any interact with your prescriptions"
                - "Record a keep, stop or time-limited trial decision for each"
            - name: Weighing a steroid joint injection offer
              description: |-
                ## Purpose
                A steroid injection into a knee, hip, shoulder or thumb can ease a bad patch for weeks or months, but the benefit varies and there are usually limits on how often a joint can be injected. Asking the same few questions every time one is offered makes the decision yours rather than a reflex.

                ## Milestones
                1. Questions asked about expected benefit, how long it lasts and side effects.
                2. How many injections that joint can have, and over what period, written down.
                3. A decision made and recorded with the reasons.
                4. If injected, the effect noted at two, six and twelve weeks.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the injection offer, with the answers behind it and, if injected, the effect noted at two, six and twelve weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask how much relief is likely and for how long"
                - "Ask how many injections that joint can safely have"
                - "Record your decision and the reasons in your notes"
                - "Rate the joint at two, six and twelve weeks after any injection"
            - name: Occupational therapy assessment for home and daily tasks
              description: |-
                ## Purpose
                An occupational therapist looks at how you manage washing, dressing, cooking and getting about, and can recommend or arrange equipment and adaptations such as bath boards, rails and raised furniture. Asking for an assessment before tasks become impossible keeps you independent with less strain.

                ## Milestones
                1. A referral or self-referral to an occupational therapy service made.
                2. Your hard tasks list and home walk-through notes ready for the visit.
                3. The assessment completed and its recommendations written down.
                4. Recommended equipment or adaptations in place or on order.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An occupational therapy assessment completed, with each recommendation recorded and either in place or on order."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your GP or local council how to get an occupational therapy assessment"
                - "Gather your hard tasks list and walk-through notes for the visit"
                - "Write down each recommendation made during the assessment"
                - "Chase any equipment not delivered within six weeks"
            - name: First three months on a new DMARD or biologic
              description: |-
                ## Purpose
                Disease-modifying medicines and biologics take weeks to months to work, need monitoring from the start, and come with infection and side effect rules that matter most early on. Planning the first twelve weeks, with tests booked, a symptom note and a date to judge the effect, means problems are raised quickly and the medicine gets a fair trial.

                ## Milestones
                1. Start date, how it is taken and the monitoring schedule written in your plan.
                2. The first monitoring tests booked before the first dose.
                3. New symptoms and any infections noted with dates.
                4. The effect judged against your diary at the agreed review.

                ## Notes
                If you are unwell with an infection, ask your team whether to pause before the next dose rather than deciding alone.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks on the new medicine with all monitoring tests done, symptoms noted and the agreed review attended."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the start date, timing and monitoring schedule in your plan"
                - "Book the first monitoring blood tests before the first dose"
                - "Note any new symptom or infection with the date it started"
                - "Bring your diary to the review to judge whether the medicine is working"
            - name: Weighing a knee or hip replacement recommendation
              description: |-
                ## Purpose
                Joint replacement is usually offered when pain and lost function from osteoarthritis are no longer manageable with exercise, weight and medicines. Getting clear answers on expected benefit, risks for someone with your health, recovery time and what happens if you wait lets you decide on your own priorities, not the length of a waiting list.

                ## Milestones
                1. Your current pain, function measures and three hard tasks summarised for the consultation.
                2. Answers recorded on benefit, risks, recovery and the alternative of waiting.
                3. A second opinion, or a talk with someone who has had the operation, if wanted.
                4. A decision recorded, with what would make you revisit it.

                ## Notes
                If you decide to go ahead, the preparation and recovery work belongs with surgery preparation. This project ends at the decision.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on joint replacement, with answers on benefit, risk, recovery and waiting written down and a trigger to revisit it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise your pain, function scores and hardest tasks on one page"
                - "Ask the surgeon what benefit and risks to expect for someone like you"
                - "Ask what happens to the joint and your function if you wait a year"
                - "Record your decision and what would make you revisit it"
            - name: Rheumatology appointment preparation
              description: |-
                ## Purpose
                Rheumatology reviews are often months apart and fifteen minutes long, so arriving with a summary of what has changed, your blood results and your top three questions makes them count. Writing down the answers before you leave the building matters as much as the questions.

                ## Milestones
                1. A summary of symptoms, flares and function since the last visit.
                2. Recent blood results and your medicines list brought along.
                3. Your three most important questions written at the top.
                4. Decisions and next steps written down before leaving.

                ## Notes
                Start from the **Meeting notes** template. Bringing someone with you to listen and take notes helps.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each rheumatology appointment attended with a written summary and three questions, and the decisions recorded the same day."
                cadence: cyclic
              tasks:
                - "Summarise symptoms, flares and function since your last visit"
                - "Write your three most important questions at the top of the page"
                - "Ask someone to come with you and take notes"
                - "Write down every decision and next step before leaving the hospital"
            - name: Getting the most from an arthritis physiotherapy referral
              description: |-
                ## Purpose
                Physiotherapy for arthritis is often a handful of sessions, and what you take away from them matters more than what happens in the room. Going in with your goals, coming out with a written home programme and knowing how to progress it on your own makes a short course last.

                ## Milestones
                1. Your three everyday tasks and baseline measures brought to the first session.
                2. A written or filmed home programme received.
                3. How to progress each exercise, and when, understood.
                4. A plan for after discharge agreed, including how to get back in if needed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written home exercise programme with progression steps and a discharge plan, received from your physiotherapist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Take your three hard tasks and baseline measures to the first session"
                - "Ask for the home programme in writing or on video"
                - "Ask how and when to make each exercise harder"
                - "Ask how to get back to physiotherapy after discharge"
            - name: Annual arthritis review
              description: |-
                ## Purpose
                Once arthritis is stable, a yearly review is where treatment, monitoring, bone health, heart risk and mood get looked at together. Preparing a year's summary of flares, function and medicines beforehand turns a routine check into a proper stock-take.

                ## Milestones
                1. A year's summary of flares, function measures and medicine changes prepared.
                2. Questions about bone, heart, mood and fatigue added.
                3. The review attended and its outcomes recorded.
                4. Next year's review date in the calendar.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual review is attended with a written year summary, and its outcomes and next date are recorded."
                cadence: cyclic
              tasks:
                - "Write a one-page summary of the year's flares, function and medicines"
                - "Add questions about bone health, heart risk, mood and fatigue"
                - "Book your annual arthritis review @recurring(yearly)"
                - "Record the review's outcomes and next date"
            - name: Vaccine check before immune-suppressing treatment
              description: |-
                ## Purpose
                Some arthritis treatments lower the immune response, certain vaccines are best given before starting, and live vaccines may need to be avoided afterwards. Checking your vaccine record with your rheumatology team before the first dose avoids a delayed start or a missed protection.

                ## Milestones
                1. Your vaccination record gathered from your practice.
                2. Your team asked which vaccines they recommend before and during treatment.
                3. Recommended vaccines given and dated.
                4. A note on live vaccines added to your medicines list, if your team advises it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your vaccine record reviewed with the rheumatology team before treatment starts, with recommended vaccines given and dated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request your vaccination record from your practice"
                - "Ask your rheumatology team which vaccines to have before starting"
                - "Book the recommended vaccines and record the dates"
                - "Add your team's advice on live vaccines to your medicines list"
            - name: Holiday or long trip with arthritis
              description: |-
                ## Purpose
                Airports, long drives and unfamiliar beds are hard on stiff joints, and injectable medicines that need a fridge make packing harder. Planning assistance, rest stops and medicine storage before booking means the trip is remembered for the place, not the pain.

                ## Milestones
                1. Mobility assistance booked with the airline or rail operator where needed.
                2. Rest stops planned at least every two hours on long drives.
                3. Medicines, a cool bag if needed and a letter from your team packed.
                4. Accommodation checked for stairs, bed height and a walk-in shower.

                ## Notes
                Start from the **Trip** template. Check that travel insurance covers your arthritis and its medicines.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip completed with assistance, medicine storage and accommodation access arranged before departure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book mobility assistance when you book the travel"
                - "Ask your team for a letter about your medicines and any injections"
                - "Check the accommodation for stairs, bed height and shower access"
                - "Confirm travel insurance covers your arthritis and its medicines"
            - name: Cold-weather plan for stiff joints
              description: |-
                ## Purpose
                Plenty of people with arthritis find mornings harder in cold, damp months, and icy pavements raise the stakes of a fall. Getting ready before winter, with warm layers for hands and knees, grips for icy days, an indoor exercise option and help with heavy outdoor jobs, keeps the season from becoming three months indoors.

                ## Milestones
                1. Warm gloves, knee layers and thermal wear checked before winter.
                2. An indoor exercise option arranged for icy or wet weeks.
                3. Grips for shoes or an ice ferrule for your stick in the house.
                4. Heavy winter jobs, such as clearing leaves or snow, handed over or arranged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before each winter, warm layers, an indoor exercise option, ice grips and help with heavy outdoor jobs are all in place."
                cadence: cyclic
              tasks:
                - "Check gloves, knee warmers and thermal layers before the cold starts"
                - "Find an indoor exercise class or video for icy weeks"
                - "Buy ice grips for your shoes or stick"
                - "Arrange help with leaves, snow and gritting before winter @recurring(yearly)"
            - name: Staying in work with inflammatory arthritis
              description: |-
                ## Purpose
                Fatigue, morning stiffness and hospital appointments make a standard working week hard, yet most people with inflammatory arthritis can stay in work with the right adjustments. Agreeing changes such as later starts, home working on bad days, voice software or a better chair, and putting them in writing, protects both health and income.

                ## Milestones
                1. The tasks and times of day arthritis affects most at work listed.
                2. Possible adjustments researched, including any government-funded workplace support scheme.
                3. A meeting held with your manager or occupational health and changes agreed in writing.
                4. The adjustments reviewed after three months.

                ## Notes
                Your rights to adjustments depend on your country's employment law. An arthritis charity or occupational health service can explain them.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Workplace adjustments agreed in writing with your employer and reviewed after three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the work tasks and times of day arthritis affects most"
                - "Look up workplace adjustment support schemes in your country"
                - "Ask for a meeting with your manager or occupational health"
                - "Review the agreed adjustments after three months"
            - name: Keeping active with arthritis in early retirement
              description: |-
                ## Purpose
                Retirement removes the commute and the walk round the office, and for people with arthritis that drop in daily movement often shows up as stiffer joints within a year. Building new regular activity into the week, such as a walking group, water exercise or tai chi, replaces what work used to provide.

                ## Milestones
                1. Your typical week of movement before retirement written down.
                2. Two group activities suited to sore joints tried.
                3. One weekly activity kept up for three months.
                4. Chair stand and walk times rechecked against your baseline.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One weekly group activity suited to arthritis kept up for three months, with function measures rechecked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the movement your working week used to include"
                - "Try a tai chi class and a walking group for people with joint pain"
                - "Go to your chosen weekly group activity @recurring(weekly:wed)"
                - "Recheck chair stands and walk time after three months"
            - name: Living alone with arthritis safety plan
              description: |-
                ## Purpose
                Living alone with arthritis means a fall, a bad flare or a jar you cannot open has nobody on hand to help. A plan that covers how you would raise the alarm, who checks in, how you get shopping and medicines on bad days and what makes the house safer keeps independence realistic.

                ## Milestones
                1. A way to call for help from the floor arranged, such as a personal alarm or a phone kept on you.
                2. Two people agreed as regular check-in contacts.
                3. A backup plan for shopping and prescriptions during a flare.
                4. Trip hazards removed and rails fitted where needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan naming check-in contacts, a way to raise the alarm, flare-day shopping cover and fall hazards dealt with."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide how you would call for help if you could not get up"
                - "Ask two people to be regular check-in contacts"
                - "Set up prescription delivery and an online shop for flare days"
                - "Test the personal alarm or phone you would use in a fall @recurring(monthly:20)"
            - name: Driving comfortably and safely with arthritis
              description: |-
                ## Purpose
                Stiff necks make checking blind spots hard, sore hands struggle with keys and handbrakes, and painful knees slow an emergency stop. Being honest about which movements are getting harder, and looking at aids, car adaptations or a driving assessment, keeps you driving safely for longer.

                ## Milestones
                1. Driving movements that are now hard listed.
                2. Simple aids considered, such as a wide mirror, key turner or swivel cushion.
                3. Whether your licensing authority needs to know about your condition checked.
                4. A professional driving assessment booked if movements are significantly limited.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on driving aids or an assessment, with the licensing authority's requirements for your condition checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the driving movements that have become hard"
                - "Look up whether your licensing authority needs to know about your arthritis"
                - "Try a key turner, swivel cushion or wide-angle mirror"
                - "Ask about a driving assessment centre if movements are limited"
            - name: Planning a pregnancy with inflammatory arthritis
              description: |-
                ## Purpose
                Some arthritis medicines must be stopped months before trying to conceive while others are considered compatible with pregnancy, and well-controlled arthritis tends to make for an easier pregnancy. Telling your rheumatology team early, ideally a year before trying, gives time to switch treatment safely.

                ## Milestones
                1. Your rheumatology team told of your plans well before trying.
                2. Each current medicine reviewed for pregnancy and breastfeeding, including any a partner takes.
                3. A treatment plan for before, during and after pregnancy agreed in writing.
                4. Arthritis at the level of control your team wants before trying.

                ## Notes
                Do not stop any medicine on your own if you find you are pregnant; contact your team straight away.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan for arthritis treatment before, during and after pregnancy, agreed with the rheumatology team before trying to conceive."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tell your rheumatology team you are planning a pregnancy"
                - "Ask which of your medicines need changing and how far ahead"
                - "Ask whether any of your partner's medicines matter too"
                - "Write down the agreed plan for before, during and after pregnancy"
            - name: Supporting a partner or parent with arthritis
              description: |-
                ## Purpose
                Partners and adult children often help with lids, laces and lifts without ever talking about it, which can slide into doing too much or too little. Agreeing what help is wanted, learning the flare plan and sharing the heavier jobs keeps support useful without taking away independence.

                ## Milestones
                1. A conversation held about what help is wanted and what is not.
                2. The flare plan and urgent symptoms card read together.
                3. Heavier household jobs shared out in a way you both accept.
                4. A check-in after three months on how it is working.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Agreed support in place, the flare plan known to both of you, and a three-month check-in held."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask what help is wanted and what they would rather do themselves"
                - "Read the flare plan and urgent symptoms card together"
                - "Agree who does the heaviest household jobs"
                - "Check in after three months on how the support feels"
            - name: Disease activity score log with your rheumatology team
              description: |-
                ## Purpose
                Rheumatology teams often track inflammatory arthritis with a disease activity score built from tender and swollen joint counts, a blood marker and your own rating. Keeping your scores in a log alongside medicine changes shows clearly whether treatment is reaching the target your team has set.

                ## Milestones
                1. Your team asked which score they use and what your target is.
                2. Every score since diagnosis gathered from letters or the portal.
                3. Scores logged with the date and the medicine at the time.
                4. The trend discussed at the next appointment.

                ## Notes
                Some teams teach patients to count their own tender and swollen joints between visits. Ask whether yours does before trying it.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated log of every disease activity score with the medicine at the time, discussed with your rheumatology team."
                cadence: rolling
              tasks:
                - "Ask your team which activity score they use and your target"
                - "Gather past scores from clinic letters and the patient portal"
                - "Check the portal for new scores and add them to the log @recurring(monthly:25)"
                - "Ask at your next appointment what the trend means"
            - name: Discussing reduced treatment in sustained remission
              description: |-
                ## Purpose
                When inflammatory arthritis has been in remission for a long time, some rheumatology teams discuss carefully reducing or spacing out medicines. Going into that conversation knowing the chance of a flare, how it would be spotted and how quickly treatment could be restarted lets you weigh the trade-off on your own terms.

                ## Milestones
                1. Your remission history summarised from your activity score log.
                2. Your team asked whether reducing treatment is an option for you.
                3. Answers recorded on flare risk, monitoring and restarting.
                4. A decision recorded, with the plan if a flare follows.

                ## Notes
                Never reduce or stop a medicine yourself. This is a decision made with your team.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on reducing treatment, made with your rheumatology team, with the flare and restart plan written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Summarise how long you have been in remission from your score log"
                - "Ask your team whether reducing treatment is an option"
                - "Ask how a flare would be spotted and how fast treatment restarts"
                - "Record the decision and the flare plan that goes with it"
            - name: Arthritis research and clinical trial participation
              description: |-
                ## Purpose
                Arthritis research depends on patients joining studies, and taking part can bring closer monitoring and early access to new approaches. Finding trials that fit your type of arthritis and asking your team about them lets you decide with full information.

                ## Milestones
                1. Trial registries and charity research pages searched for your condition.
                2. Two or three studies that fit you shortlisted.
                3. Your team asked whether any of them suits you.
                4. A decision recorded and, if joining, the study contact saved on your care team sheet.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of suitable studies reviewed with your rheumatology team and a decision on taking part recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search a public trials registry for studies on your type of arthritis"
                - "Shortlist two or three studies you appear eligible for"
                - "Ask your team whether any of the studies suits you"
                - "Record your decision and any study contact details"
            - name: Two-year joint function trend review
              description: |-
                ## Purpose
                Year to year, arthritis changes slowly enough that gradual decline or steady improvement can go unnoticed. Comparing two years of function measures, flare counts and medicine changes shows which efforts made a difference and gives your team a clear picture before any big decision.

                ## Milestones
                1. Two years of function measures, flare counts and activity scores gathered.
                2. A simple chart or table of each over time.
                3. Three conclusions written on what helped and what did not.
                4. The summary shared with your rheumatology team or physiotherapist.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-year summary of function, flares and treatment with three written conclusions, shared with your care team."
                cadence: cyclic
              tasks:
                - "Gather two years of function measures, flare counts and scores"
                - "Put each measure in a table or chart over time"
                - "Write three conclusions on what helped and what did not"
                - "Repeat the trend review with the latest year added @recurring(yearly)"
---

# Arthritis & Joint Care

This area is for anyone living with osteoarthritis, rheumatoid arthritis or another form of joint disease, and especially for older adults who want everyday movement to stay possible for longer. It starts with the foundations (an urgent symptoms card, a clear history and diary, a diagnosis and a written treatment plan), then the routines that keep joints moving and medicines safe, the skills of joint protection and flare spotting, the decisions about aids, injections, new medicines and joint replacement, the appointments and seasons that need planning, the situations of work, retirement and living alone, and finally the work of an experienced self-manager.

What repeats is a daily joint movement routine, strength sessions twice a week, a weekly check-in and weekly medicine tick, a monthly check that monitoring bloods are booked, a monthly review, a quarterly plan and equipment check, and the annual review. The Metrics log, Habit tracker, Training program, Purchase decision, Meeting notes and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
