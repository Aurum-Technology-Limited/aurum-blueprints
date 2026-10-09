---
id: physical-health.chronic-back-neck-pain
name: Chronic Back & Neck Pain
description: "A pain history and diary your clinician can use, a written flare-up plan, a daily exercise prescription you actually keep, and paced, confident steps back to the work and activities pain has taken."
category: personal
version: 1.0.0
tags: [physical-health, chronic-back-neck-pain, everyone, knowledge-worker, low-back-pain, neck-pain, pacing, flare-ups]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - purchase-decision
    - meeting-notes
    - training-program
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Chronic Back & Neck Pain
          description: "Managing persistent back or neck pain through exercise prescriptions, pacing, specialist appointments and flare-up plans, for desk workers, manual workers and anyone living with pain."
          projects:
            - name: Red flag symptoms card for back and neck pain
              description: |-
                ## Purpose
                Almost all persistent back and neck pain is not dangerous, but a small set of symptoms needs same-day medical attention, such as new numbness around the saddle area, changes in bladder or bowel control, or weakness that is getting worse. Having the list written down, with the number to call, means you act quickly on the rare day it matters and stop worrying on all the others.

                ## Milestones
                1. The urgent warning signs for your back or neck confirmed with your doctor or physiotherapist.
                2. A one-page card listing those signs and who to contact, day and night.
                3. Copies kept by the bed, in your bag and on your phone.
                4. Anyone you live with shown where the card is and what it means.

                ## Notes
                Ask your clinician which signs apply to you. The card is a prompt to seek help, not a way to diagnose yourself.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A red flag card confirmed by a clinician is printed, saved on your phone and known to everyone in the household."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your doctor or physiotherapist which warning signs need urgent help"
                - "Write the signs and the urgent contact number on one page"
                - "Put a photo of the card in your phone's favourites album"
                - "Reread the card and update any phone numbers @recurring(yearly)"
            - name: Back pain history for your first appointment
              description: |-
                ## Purpose
                Ten-minute appointments vanish while you try to remember when the pain started and what you have already tried. A one-page history, covering onset, pattern, what helps, what makes it worse and every treatment so far, lets the clinician spend the time on thinking rather than questioning.

                ## Milestones
                1. The date and circumstances the pain started written down, with any earlier episodes.
                2. A body sketch marking where it hurts and where any pain, pins and needles or numbness spreads.
                3. Every treatment, medicine and practitioner tried so far listed with the result.
                4. Your three main questions for the appointment at the bottom of the page.

                ## Notes
                Describe the pain in your own words: aching, burning, shooting, stiff. Those words help the clinician more than a score alone.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page pain history with a body sketch, a treatment list and three questions is ready before the next appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down when the pain began and what you were doing at the time"
                - "Shade a body outline where the pain sits and where it travels"
                - "List every treatment and medicine tried, with what happened"
                - "Ask the agent to tidy your notes into a one-page summary"
            - name: Two-week pain and activity diary
              description: |-
                ## Purpose
                Memory is a poor witness to pain: a bad Tuesday colours the whole month. Two weeks of short entries, morning and evening, show the real pattern of pain against sitting, walking, sleep, work and stress, and give you and your clinician something to plan from.

                ## Milestones
                1. A diary with columns for date, time, pain score, activity, sleep and notes.
                2. Fourteen days of morning and evening entries completed.
                3. The best and worst times of day, and the activities linked to each, picked out.
                4. The diary summary shared with your GP or physiotherapist.

                ## Notes
                Start from the **Metrics log** template. Use the same 0 to 10 scale throughout and write one line, not an essay.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fourteen consecutive days of morning and evening pain entries exist, with a short summary of patterns shared with a clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a pain diary from the metrics log template"
                - "Add a phone reminder for a morning and an evening entry"
                - "Fill in the diary twice a day for fourteen days"
                - "Circle the three activities most often linked with higher scores"
            - name: Getting a proper assessment of persistent pain
              description: |-
                ## Purpose
                Once pain has lasted beyond six weeks, it deserves a structured assessment from a GP or physiotherapist, including a physical examination and a check of nerves, rather than another repeat prescription. A good assessment gives you a working explanation, rules out the rare serious causes and points you at the right treatment.

                ## Milestones
                1. An appointment booked specifically to assess persistent back or neck pain.
                2. Your pain history and diary summary taken to the appointment.
                3. A physical examination completed, including strength, reflexes and sensation where relevant.
                4. The clinician's explanation and next steps written down before you leave.

                ## Notes
                In many countries you can see a physiotherapist directly without a doctor's referral. Ask your practice whether that option exists locally.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An in-person assessment of persistent pain has taken place and its findings and next steps are recorded in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your practice whether you can self-refer to a physiotherapist"
                - "Book an appointment and say it is for pain lasting over six weeks"
                - "Pack your pain history, diary summary and medicine list"
                - "Write up the clinician's explanation within a day of the visit"
            - name: Working diagnosis and plan agreed with your clinician
              description: |-
                ## Purpose
                Many people leave appointments with a vague label and no plan, then piece one together from the internet. Agreeing a working diagnosis, the main treatment, what to expect over the next three months and when to come back gives every later project a fixed starting point.

                ## Milestones
                1. A working diagnosis in plain words, such as non-specific low back pain or nerve root pain, recorded.
                2. The main treatment approach for the next three months agreed.
                3. What progress should look like by the review date noted.
                4. A review appointment booked or a clear trigger for returning agreed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan names the working diagnosis, the main treatment, expected progress and a review date agreed with your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician to name the working diagnosis in plain words"
                - "Ask what improvement is realistic in the next three months"
                - "Write the plan and the review date on one page"
                - "Book the review appointment before you leave the surgery"
            - name: Pain relief plan agreed with your prescriber
              description: |-
                ## Purpose
                Painkillers taken at random, or doubled up across brands, can do more harm than good, and some commonly used ones help back pain far less than people expect. Agreeing what to take, when, for how long and what to avoid turns medicines into one planned part of treatment rather than the whole of it.

                ## Milestones
                1. Every medicine, cream and supplement you use for pain listed, including over-the-counter ones.
                2. A plan from your doctor or pharmacist covering what to take day to day and on bad days.
                3. Any medicines to avoid with your other conditions written down.
                4. A date set to review whether the plan is helping.

                ## Notes
                Bring the actual packets to the appointment. Combination products often contain the same ingredient twice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written pain relief plan from your doctor or pharmacist covers everyday use, bad days, things to avoid and a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every pain medicine and cream in the house into one bag"
                - "Book a medicine review with your pharmacist or doctor"
                - "Ask which medicines are worth using for your type of pain"
                - "Write the agreed plan inside the cabinet door"
            - name: Three everyday goals pain is blocking
              description: |-
                ## Purpose
                Scores on a pain scale rarely change quickly, but what you can do often improves first. Naming three specific activities, such as sitting through a film, carrying the shopping from the car or a full day at your desk without stopping, gives treatment a target you care about and a way to see progress.

                ## Milestones
                1. Three concrete activities chosen that pain currently stops or limits.
                2. Each rated today on a 0 to 10 scale for how well you can do it.
                3. The goals shared with your physiotherapist or doctor.
                4. A date three months out set for re-rating all three.

                ## Notes
                This mirrors a common clinical measure where you score your own chosen activities. Keep the wording identical each time you re-rate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three named activity goals with baseline scores are written down and shared with a clinician."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three activities that pain stops you doing well"
                - "Score each from 0 to 10 for how well you manage it now"
                - "Share the three goals at your next appointment"
                - "Put a reminder in three months to re-score them"
            - name: Home exercise corner and kit
              description: |-
                ## Purpose
                Exercises get skipped when the mat is in the loft and the band is lost. A small, permanent space with a mat, a resistance band, a sturdy chair and your printed exercise sheet removes the setting-up step that kills most home programmes in week two.

                ## Milestones
                1. A floor space of about two metres by one cleared and kept clear.
                2. A mat, a resistance band and any kit your physiotherapist named in place.
                3. The current exercise sheet pinned at eye height.
                4. A timer or phone stand within reach.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dedicated exercise space with mat, band and the current exercise sheet is set up and stays clear for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a spot at home with room to lie flat"
                - "Check what kit your physiotherapist actually wants you to use"
                - "Buy or borrow a mat and a resistance band"
                - "Pin the current exercise sheet on the wall beside it"
            - name: Back pain care team contact sheet
              description: |-
                ## Purpose
                Over a few years the people involved in back pain multiply: a GP, a physiotherapist, a pharmacist, perhaps a pain clinic and an occupational health adviser at work. One sheet with names, numbers, reference numbers and the best way to reach each saves the frantic search during a flare.

                ## Milestones
                1. Each professional involved listed with role, phone, email and how to book.
                2. Hospital or clinic reference numbers added.
                3. Out-of-hours and urgent care numbers included.
                4. The sheet saved on your phone and printed with your flare-up plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact sheet listing every professional involved, with reference numbers and urgent contacts, is saved on your phone and printed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every clinician and service involved in your back or neck care"
                - "Add phone numbers, booking routes and reference numbers"
                - "Save the sheet to your phone and print one copy"
                - "Check every number on the sheet still works @recurring(yearly)"
            - name: Daily home exercise prescription
              description: |-
                ## Purpose
                The exercises a physiotherapist prescribes only work if they are done most days for weeks, and most people stop within a fortnight. Fixing a time, keeping the session to 15 minutes and ticking it off makes the prescription a habit rather than a good intention.

                ## Milestones
                1. The current prescription written out with sets, repetitions and any holds.
                2. A fixed daily time chosen, attached to something you already do.
                3. Thirty days ticked off with at least 25 sessions completed.
                4. Any exercise that reliably worsens pain reported to your physiotherapist.

                ## Notes
                Start from the **Habit tracker** template. Some discomfort during exercise is common and usually safe; agree with your physiotherapist how much is acceptable.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The prescribed exercises are logged on at least 25 of every 30 days for three consecutive months."
                cadence: rolling
              tasks:
                - "Copy your current exercises into a habit tracker"
                - "Pick a daily time after an existing routine like the morning coffee"
                - "Do the prescribed exercises and tick them off @recurring(daily)"
                - "Note any exercise that flares pain to raise at the next session"
            - name: Weekly pain and function check-in
              description: |-
                ## Purpose
                Daily diaries are useful for two weeks but exhausting for a year. A five-minute weekly check-in, scoring average pain, your three goals and sleep, keeps a long-term record that shows trends without making pain the centre of every day.

                ## Milestones
                1. A weekly check-in sheet with the same five questions every time.
                2. Average pain, worst pain, sleep and your three goals scored each week.
                3. Twelve weeks of check-ins completed in a row.
                4. The twelve-week trend brought to a review appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly check-ins with the same five scores are recorded and shared at a review."
                cadence: rolling
              tasks:
                - "Write the five weekly questions at the top of a new log"
                - "Score the week's pain, sleep and three goals @recurring(weekly:sun)"
                - "Mark weeks with a flare so they stand out in the trend"
                - "Bring the last twelve weeks to your next review"
            - name: Activity pacing with baselines
              description: |-
                ## Purpose
                Boom and bust is the classic pattern in persistent pain: a good day leads to doing everything, followed by three days flat out. Pacing sets a comfortable baseline for key activities, such as minutes of sitting, walking or gardening, then raises it in small planned steps regardless of how the day feels.

                ## Milestones
                1. Three key activities chosen, with a baseline of about 80 percent of what you can manage on an average day.
                2. Baselines written down and kept to on good and bad days alike.
                3. A rule agreed for increases, such as 10 percent every one or two weeks.
                4. Six weeks of paced activity completed with increases recorded.

                ## Notes
                The hardest part is stopping on a good day. Use a timer rather than waiting until pain tells you to stop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three activities have written baselines and at least four recorded step-ups over six weeks without a boom and bust cycle."
                cadence: rolling
              tasks:
                - "Time how long you can sit, walk and do one chore on an average day"
                - "Set each baseline at about 80 percent of that time"
                - "Use a phone timer to stop at the baseline even on good days"
                - "Decide whether to raise each baseline for the coming week @recurring(weekly:wed)"
            - name: Movement breaks through the working day
              description: |-
                ## Purpose
                For desk-based knowledge workers, back and neck pain is often worst after long unbroken stretches in one position rather than from any single posture. Short, frequent changes of position, two or three minutes every half hour, tend to ease stiffness more than any perfect chair, and they fit around meetings if they are planned.

                ## Milestones
                1. A break rhythm chosen that fits your meetings, such as every 30 or 45 minutes.
                2. Two or three movements your physiotherapist approves picked for the breaks.
                3. Calendar or app reminders set for working hours.
                4. Four weeks of breaks kept on most working days, with the effect on end-of-day pain noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Movement breaks are taken at least every 45 minutes on four out of five working days for four weeks, with end-of-day pain noted."
                cadence: rolling
              tasks:
                - "Choose two movements your physiotherapist is happy for you to do at work"
                - "Set a recurring reminder every 30 to 45 minutes in working hours"
                - "Take standing or walking calls where your role allows"
                - "Take your movement breaks through the working day @recurring(daily)"
            - name: Written flare-up plan
              description: |-
                ## Purpose
                Flare-ups are a normal part of persistent pain, but without a plan they lead to panic, bed rest and emergency appointments. A written plan for the first 72 hours, covering what to take, which movements to keep doing, how to adjust work and when to seek help, shortens flares and keeps fear out of the decisions.

                ## Milestones
                1. The plan drafted with your physiotherapist or doctor, covering the first three days.
                2. Medicines, positions of ease and gentle movements listed for flare days.
                3. Work and family adjustments agreed in advance.
                4. The point at which to seek help, and who to call, written clearly.
                5. Copies on your phone, by the bed and with your red flag card.

                ## Notes
                Most flares settle within days to a couple of weeks. Gentle movement usually helps more than prolonged rest; agree what that means for you.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page flare-up plan reviewed by a clinician covers the first 72 hours, work adjustments and when to seek help."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what helped and what did not in your last flare"
                - "Draft a first 72 hours plan and take it to your physiotherapist"
                - "Agree with your manager or family what changes on a flare day"
                - "Reread and update the flare-up plan after each flare or once a year @recurring(yearly)"
            - name: Monthly progress review against your goals
              description: |-
                ## Purpose
                Week to week, persistent pain can feel unchanged even when function is slowly improving. Once a month, compare your weekly check-ins and goal scores with the month before so that real progress is noticed and stalls are raised with your clinician early.

                ## Milestones
                1. A monthly summary line: average pain, best week, worst week and goal scores.
                2. Three months of summaries side by side.
                3. Any goal that has not moved in three months flagged for discussion.
                4. One change to the plan chosen each month, or a decision to keep going as is.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly summary line exists for each of the last three months, with any stalled goal raised with a clinician."
                cadence: rolling
              tasks:
                - "Add a monthly summary row to the end of your weekly log"
                - "Compare this month's goal scores with last month's @recurring(monthly:12)"
                - "Write one thing to change, or keep, for the coming month"
                - "Email your physiotherapist if a goal has stalled for three months"
            - name: Getting the most from each physio session
              description: |-
                ## Purpose
                A block of physiotherapy is often only four to six sessions, so each one counts. Arriving with a summary of how the exercises went, leaving with a clear updated sheet and asking what should change by next time turns a short course into real progress.

                ## Milestones
                1. A short pre-session note on what improved, what flared and which exercises were hard.
                2. An updated written or video exercise sheet after every session.
                3. The goal for the next session agreed before leaving.
                4. A discharge plan in writing at the final session, including what to do if pain returns.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every physiotherapy session in the current course has a pre-session note and an updated exercise sheet, ending in a written discharge plan."
                cadence: rolling
              tasks:
                - "Write a three-line note on the last week before each session"
                - "Ask to film the new exercises on your phone during the session"
                - "Ask what should be different by the next appointment"
                - "Request a written discharge plan at the last session"
            - name: Twice-weekly back and core strength sessions
              description: |-
                ## Purpose
                Stretching alone rarely builds a back that copes with daily life; gradually loaded strength work for the trunk, hips and legs is one of the better-supported approaches for persistent low back pain. Two short sessions a week, progressed slowly, build capacity long after the physiotherapy course ends.

                ## Milestones
                1. Four to six strength exercises agreed with your physiotherapist.
                2. Starting loads or repetitions recorded for each.
                3. Two sessions a week kept for eight weeks.
                4. At least one progression recorded for every exercise.

                ## Notes
                Being sore the day after a new exercise is common. Pain that is much worse the next morning means the step up was too big, not that strength work is wrong for you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen strength sessions are logged over eight weeks with at least one progression recorded for every exercise."
                cadence: rolling
              tasks:
                - "Ask your physiotherapist for four to six strength exercises"
                - "Record the starting weight or repetitions for each"
                - "Do the strength session and log the loads @recurring(weekly:tue,fri)"
                - "Raise one exercise a small step when it feels comfortably easy"
            - name: Pain medicine log and quarterly review
              description: |-
                ## Purpose
                Use of pain medicines tends to creep: an extra dose here, a stronger box there, until nobody remembers why. Logging what you actually take and reviewing it every three months with your pharmacist or doctor keeps use matched to benefit and catches side effects such as constipation, drowsiness or stomach problems.

                ## Milestones
                1. A simple log of the pain medicines taken each day.
                2. Monthly totals worked out for each medicine.
                3. A quarterly conversation with your pharmacist or doctor about benefit and side effects.
                4. Any change agreed written into your pain relief plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A medicine log exists for the last quarter and has been reviewed with a pharmacist or doctor, with any change recorded."
                cadence: rolling
              tasks:
                - "Start a log of each pain medicine dose you take"
                - "Add up each month's total for every medicine"
                - "Review the log with your pharmacist or doctor @recurring(quarterly)"
                - "Update your pain relief plan with anything agreed"
            - name: Morning stiffness loosening routine
              description: |-
                ## Purpose
                Many people with back or neck pain are stiffest in the first hour of the day, which colours their mood and plans. Five minutes of gentle movement before getting up or straight after, agreed with your physiotherapist, often eases that first hour and sets a calmer tone for the day.

                ## Milestones
                1. Three or four gentle movements chosen that can be done in or beside the bed.
                2. The routine written on a card on the bedside table.
                3. Three weeks of mornings completed.
                4. Morning stiffness before and after the three weeks compared.

                ## Notes
                Stiffness that lasts well over an hour every morning, especially in a younger adult, is worth mentioning to your doctor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-minute morning routine is done on at least 18 of 21 days, with stiffness duration compared before and after."
                cadence: rolling
              tasks:
                - "Ask your physiotherapist for three gentle morning movements"
                - "Write them on a card and leave it on the bedside table"
                - "Note how many minutes your morning stiffness lasts today"
                - "Do the five-minute loosening routine before getting dressed @recurring(daily)"
            - name: How persistent pain works
              description: |-
                ## Purpose
                After a few months, pain is often driven as much by an oversensitive nervous system as by tissue damage, which is why it can flare with stress or poor sleep and why scans often do not match symptoms. Understanding this is one of the more helpful treatments in its own right, because it makes movement feel safer and flares less frightening.

                ## Milestones
                1. One reputable book, course or video series on pain science chosen and finished.
                2. A one-paragraph explanation of your own pain written in your own words.
                3. Three things that seem to turn your pain volume up identified.
                4. Questions about what you learned taken to your clinician.

                ## Notes
                Choose material written or recommended by pain clinicians or physiotherapists. Be wary of anything that promises a cure or sells a single product.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One recognised pain science resource is completed and a written explanation of your own pain has been checked with a clinician."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your physiotherapist to recommend one pain science resource"
                - "Work through the resource over two weeks"
                - "Write a paragraph explaining your own pain in plain language"
                - "List the three things that most turn your pain up"
            - name: Neck exercise set with correct form
              description: |-
                ## Purpose
                Neck exercises such as deep neck flexor holds, shoulder blade setting and gentle rotations are easy to do slightly wrong, which makes them useless or uncomfortable. Learning each one properly with feedback, then filming yourself, gives a set you can trust for years.

                ## Milestones
                1. Your neck exercises demonstrated by a physiotherapist and checked as you do them.
                2. A short video of each exercise saved on your phone.
                3. Two weeks of practice followed by a form check.
                4. Common mistakes for each exercise written beside it on your sheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each prescribed neck exercise has been form-checked by a physiotherapist and has a reference video saved on your phone."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your physiotherapist to watch you do each neck exercise"
                - "Film each exercise on your phone during the session"
                - "Practise in front of a mirror for two weeks"
                - "Book a short form check at the end of the two weeks"
            - name: Lifting, bending and carrying without fear
              description: |-
                ## Purpose
                Many people with back pain avoid bending altogether, which tends to make the back stiffer and more sensitive over time. Practising lifting and bending with a physiotherapist, starting light and building to everyday loads such as shopping, laundry and children, rebuilds both capacity and confidence.

                ## Milestones
                1. The everyday lifts you avoid listed, from lightest to heaviest.
                2. Lifting practised with a physiotherapist starting from the lightest.
                3. A weekly practice plan that builds towards your heaviest everyday load.
                4. At least three avoided lifts done again in daily life.

                ## Notes
                There is no single correct way to lift. Varied, relaxed movement usually serves people better than a rigid technique held under tension.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three everyday lifts that were being avoided are back in regular use, built up through a recorded practice plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the lifts and bends you currently avoid, lightest first"
                - "Practise the lightest lift with your physiotherapist watching"
                - "Write a weekly plan that adds a little weight each week"
                - "Tick off each avoided lift once it is back in daily use"
            - name: Relaxation and breathing for muscle guarding
              description: |-
                ## Purpose
                Pain often brings bracing: shoulders hitched, jaw clenched, back held rigid, which adds its own ache. Learning a short breathing and relaxation routine, and using it during work and before sleep, gives you something to do when pain spikes besides tensing against it.

                ## Milestones
                1. One relaxation method chosen, such as slow breathing, a body scan or progressive relaxation.
                2. Ten minutes practised on most days for three weeks.
                3. A one-minute version learned for use at your desk or in the car.
                4. The effect on tension and sleep noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A relaxation routine has been practised on at least 15 of 21 days and a one-minute version is in regular use."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick one relaxation method and a guided recording to follow"
                - "Practise for ten minutes before bed for three weeks"
                - "Learn a one-minute version you can do at your desk"
                - "Practise the full relaxation routine @recurring(weekly:mon,thu)"
            - name: Heat, cold and self-massage at home
              description: |-
                ## Purpose
                Simple self-treatments such as a heat pack, a cold pack after unusual activity or a massage ball against a wall cost little and can take the edge off pain enough to keep moving. Knowing which ones help you, and how to use them safely, gives you options on bad days without another appointment.

                ## Milestones
                1. Heat, cold and self-massage each tried on at least three occasions.
                2. The effect of each on pain and movement scored.
                3. A short list of what helps you added to the flare-up plan.
                4. Safety points such as time limits and skin protection written down.

                ## Notes
                Never sleep on a heat pad and always put a cloth between skin and a hot or cold pack. Ask about creams or devices before buying.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three self-treatments have each been tested at least three times and the ones that help are recorded in the flare-up plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy or make a reusable heat pack and a cold pack"
                - "Try heat for 20 minutes on a stiff day and score the effect"
                - "Try a massage ball against the wall on tight muscles"
                - "Add what helped to the flare-up plan"
            - name: Making sense of your scan report
              description: |-
                ## Purpose
                Scan reports are written for doctors and are full of words like degeneration, bulge and desiccation that sound alarming but are common in people with no pain at all. Going through the report with a clinician, word by word, prevents months of fear built on a misreading.

                ## Milestones
                1. A copy of the full radiology report obtained.
                2. Each unfamiliar term listed with a plain-language meaning.
                3. The report discussed with the clinician who requested it.
                4. A one-sentence summary written of what the findings mean for your plan.

                ## Notes
                Findings such as disc bulges and wear are very common in adults without pain. Ask how your findings relate to your symptoms, not just what they are.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The full scan report has been discussed with a clinician and a one-sentence plain summary of its meaning for treatment is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request a copy of the full radiology report"
                - "Highlight every term you do not understand"
                - "Ask the clinician how each finding relates to your symptoms"
                - "Write a one-sentence summary of what it means for your plan"
            - name: Graded return to feared movements
              description: |-
                ## Purpose
                Some movements, such as bending to tie shoes, twisting to reverse the car or looking up at a high shelf, become frightening after a bad episode and get avoided for years. Working through them in small, planned steps, ideally with a physiotherapist, steadily shrinks the list of things pain has taken.

                ## Milestones
                1. A list of feared or avoided movements, each rated for how worrying it feels.
                2. A step-by-step plan for the least feared movement agreed with your physiotherapist.
                3. That movement practised until the worry rating drops by half.
                4. The next two movements on the list started.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three previously avoided movements have each been practised until their worry rating has fallen by at least half."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the movements you avoid and rate each for fear from 0 to 10"
                - "Agree small steps for the least feared one with your physiotherapist"
                - "Practise that step daily until it feels routine"
                - "Re-rate the whole list after four weeks"
            - name: Scan or no scan decision
              description: |-
                ## Purpose
                Most people with persistent back or neck pain do not need an MRI or X-ray, because scans rarely change treatment unless specific signs are present, and incidental findings can add worry. Discussing openly with your clinician whether imaging would change anything leads to a decision you understand either way.

                ## Milestones
                1. Your reasons for wanting, or not wanting, a scan written down.
                2. Your clinician's view on whether a scan would change treatment recorded.
                3. A clear decision made, with the reason.
                4. If a scan is booked, a follow-up appointment to discuss the result arranged.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on imaging, with the clinician's reasoning, and a results appointment if a scan is booked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what you hope a scan would show"
                - "Ask your clinician whether a scan would change your treatment"
                - "Record the decision and the reason given"
                - "Book a results discussion if a scan goes ahead"
            - name: Mattress and pillow choice for back and neck pain
              description: |-
                ## Purpose
                No mattress cures back pain, but one that is sagging or wrong for your size can make mornings worse, and a pillow at the wrong height can leave the neck aching. Comparing a few options against your sleep position, with a trial period, avoids an expensive purchase made in desperation.

                ## Milestones
                1. The age and condition of your current mattress and pillow checked.
                2. Your main sleep position and any morning pain pattern noted.
                3. Three options compared on firmness, trial period and returns policy.
                4. A choice made, with the trial end date in your calendar.

                ## Notes
                Start from the **Purchase decision** template. Medium-firm is a common starting point; a long home trial matters more than showroom impressions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A mattress or pillow choice is recorded with three compared options and a trial end date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check your mattress for dips and note its age"
                - "Note your usual sleep position and how mornings feel"
                - "Compare three options with home trials of at least 30 nights"
                - "Put the trial end date in your calendar"
            - name: Choosing between physio, osteopath and chiropractor
              description: |-
                ## Purpose
                Faced with persistent pain, many people book whichever manual therapist a friend used and stay for years of maintenance visits. Comparing professions, qualifications, what a course should involve and how progress will be measured lets you choose a practitioner who will make you more independent, not less.

                ## Milestones
                1. The registration body for each profession in your country checked.
                2. Two or three local practitioners compared on approach, cost and session length.
                3. Each asked how they measure progress and when they expect to discharge.
                4. One chosen, with a planned number of sessions and a review point.

                ## Notes
                A good practitioner of any profession will give you exercises to do at home and talk about discharge from the start.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A registered practitioner is chosen after comparing at least two, with an agreed number of sessions and a review point."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check each practitioner is on their profession's official register"
                - "Ask each how many sessions they usually expect for your problem"
                - "Ask how they will measure whether treatment is working"
                - "Agree a review point after the first four sessions"
            - name: Trying Pilates, yoga or tai chi for eight weeks
              description: |-
                ## Purpose
                Group classes such as Pilates, yoga and tai chi help some people with persistent back or neck pain, partly through movement and partly through confidence and company. A fair eight-week trial of one class, with before and after scores, tells you whether it belongs in your long-term routine.

                ## Milestones
                1. One class type chosen with a teacher experienced in back pain.
                2. Your goal scores recorded before the first class.
                3. Eight weeks of classes attended.
                4. Scores compared and a decision made to continue, switch or stop.

                ## Notes
                Tell the teacher about your pain before the first class. Beginner or therapeutic classes are a better start than general sessions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Eight weeks of one class type are completed and a recorded decision to continue, switch or stop is based on before and after scores."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Find local or online beginner classes in one discipline"
                - "Ask the teacher about experience with back or neck pain"
                - "Score your three goals before the first class"
                - "Re-score after eight weeks and decide whether to continue"
            - name: Workplace adjustments for back and neck pain
              description: |-
                ## Purpose
                Persistent pain can affect concentration, meetings and travel as much as sitting, and many employers will agree reasonable adjustments if asked clearly. Preparing a short request, ideally supported by your clinician or occupational health, covers things like flexible hours, hybrid days, extra breaks or a change of duties for manual roles.

                ## Milestones
                1. A list of the work tasks and patterns that make pain worse.
                2. Specific adjustments proposed for each, with the benefit to the work.
                3. A meeting held with your manager or occupational health.
                4. Agreed adjustments confirmed in writing, with a review date.

                ## Notes
                Workplace rights differ by country. Your employer's HR policy or an employee advice service can explain what applies to you.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written confirmation of agreed workplace adjustments exists, with a date set to review them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the work tasks and hours that make your pain worse"
                - "Draft three specific adjustments with the benefit of each"
                - "Ask for a meeting with your manager or occupational health"
                - "Review how the adjustments are working with your manager @recurring(quarterly)"
            - name: Weighing a spinal injection offer
              description: |-
                ## Purpose
                Injections such as epidural steroid or facet joint injections are sometimes offered for nerve pain or specific joint pain, with benefits that vary from person to person and often wear off. Asking structured questions about likely benefit, duration, risks and what happens next lets you decide rather than simply agree.

                ## Milestones
                1. The exact injection proposed and its purpose written down.
                2. Likely benefit, how long it may last and the main risks asked about.
                3. How the injection fits with exercise and other treatment clarified.
                4. A decision recorded, with the reasons.

                ## Notes
                A useful question is what proportion of people like you get meaningful relief, and for how long.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the injection offered, based on written answers about benefit, duration, risks and next steps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask for the name and purpose of the injection in writing"
                - "Prepare questions on benefit, duration, risks and alternatives"
                - "Discuss the answers with someone you trust"
                - "Record your decision and the reasons behind it"
            - name: Reducing strong painkillers with your prescriber
              description: |-
                ## Purpose
                Strong painkillers such as opioids or nerve pain medicines are sometimes started during a bad episode and continued long after they stopped helping much. A supervised, gradual reduction planned with your prescriber can bring fewer side effects and clearer thinking, and should never be done abruptly on your own.

                ## Milestones
                1. Each strong painkiller listed with when and why it was started.
                2. A conversation held with your prescriber about benefits and side effects now.
                3. A written reduction plan agreed, if your prescriber supports one.
                4. Each step completed and its effect on pain, sleep and mood noted.

                ## Notes
                Stopping some of these medicines suddenly can cause withdrawal effects. Every change should be agreed with your prescriber.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A prescriber-agreed reduction plan is in writing and each completed step has its effect on pain and sleep recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List your strong painkillers with start dates and reasons"
                - "Book an appointment to discuss whether they still help"
                - "Ask for any reduction plan in writing, step by step"
                - "Note pain, sleep and mood a week after each step"
            - name: Spinal specialist appointment preparation
              description: |-
                ## Purpose
                Spinal and orthopaedic or pain specialist appointments often follow months of waiting and can last only 15 minutes. Arriving with a one-page summary, your scan reports, a list of treatments tried and your top three questions makes sure the wait was worth it.

                ## Milestones
                1. A one-page summary of symptoms, treatments tried and current function.
                2. Scan reports and letters gathered in one folder.
                3. Three priority questions written down.
                4. Notes taken during the appointment and the plan confirmed before leaving.

                ## Notes
                Start from the **Meeting notes** template. Bring someone with you if you can; a second listener catches what you miss.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The specialist appointment is attended with a one-page summary and three questions, and the outcome is recorded in written notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Update your pain history to one page for the specialist"
                - "Gather scan reports and clinic letters into one folder"
                - "Write your three most important questions"
                - "Type up your notes and the agreed plan the same day"
            - name: Long trip with back or neck pain
              description: |-
                ## Purpose
                Flights, long drives and train rides combine hours of sitting, carrying luggage and broken sleep, the classic recipe for a flare. Planning seat choice, breaks, luggage, medicines and a first-day recovery routine means the trip is spent at the destination, not in the hotel bed.

                ## Milestones
                1. Seats chosen with aisle access or legroom where possible.
                2. Luggage planned to avoid heavy lifting, using wheels and assistance.
                3. Medicines, heat pack and exercise sheet packed in hand luggage.
                4. Movement breaks planned at least every hour of travel.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A long trip is completed with planned seats, light luggage, packed pain kit and hourly movement breaks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an aisle seat or one with extra legroom"
                - "Pack a light bag and arrange help with heavy cases"
                - "Put medicines, heat pack and exercise sheet in hand luggage"
                - "Plan a short walk or stretch for every hour of travel"
            - name: House move or DIY weekend without a flare
              description: |-
                ## Purpose
                Moving house, decorating or a big garden clear-out are among the most common triggers for a back or neck flare, usually because everything is done in one push. Splitting the work over more days, getting help with the heaviest items and pacing as you would any other activity keeps the project from costing you a fortnight of pain.

                ## Milestones
                1. The heavy and awkward jobs listed and shared out or outsourced.
                2. The work split into paced blocks across several days.
                3. Rest and exercise time protected in the plan.
                4. The project finished without a flare lasting more than a few days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A move or large DIY job is completed in paced blocks over several days, with heavy items handled by others."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every heavy or overhead job in the project"
                - "Book help or a removal service for the heaviest items"
                - "Split the remaining work into two-hour blocks over several days"
                - "Keep your daily exercises going throughout the project"
            - name: Returning to work after a back pain absence
              description: |-
                ## Purpose
                The longer someone is off work with back pain, the harder the return becomes, so planning it early matters as much as the treatment. A phased return with agreed hours, duties and adjustments, discussed before the first day back, protects both recovery and your job.

                ## Milestones
                1. A fit note or clinician advice on what you can do, not only what you cannot.
                2. A return plan agreed with your manager or occupational health, with phased hours.
                3. Temporary adjustments to duties written into the plan.
                4. A review meeting held after the first two weeks back.

                ## Notes
                Ask your clinician to describe what you can do in the fit note or letter. It makes adjustments much easier to agree.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written phased return plan is agreed before the first day back and reviewed with your manager after two weeks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your clinician to note which work you can do in the fit note"
                - "Request a return to work meeting before your first day"
                - "Agree phased hours and duties in writing"
                - "Book a review with your manager two weeks after returning"
            - name: Annual review of your back pain plan
              description: |-
                ## Purpose
                A plan written during one bad year can still be running three years later, with outdated exercises and medicines nobody has questioned. A yearly review of goals, exercises, medicines, the flare-up plan and how many flares you had keeps everything matched to where you are now.

                ## Milestones
                1. The year's weekly check-ins and flare count summarised.
                2. Goals, exercises and medicines reviewed and updated.
                3. The flare-up plan and red flag card checked.
                4. Next year's focus written in one sentence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly review note covers flares, goals, exercises and medicines, with next year's focus written down."
                cadence: cyclic
              tasks:
                - "Count the flares and their length over the past twelve months"
                - "Review your three goals and replace any you have achieved"
                - "Book a check-in with your GP or physiotherapist for the yearly review @recurring(yearly)"
                - "Write one sentence on next year's focus"
            - name: Neck pain on long screen days
              description: |-
                ## Purpose
                For knowledge workers, neck and upper back pain often tracks the shape of the working week: back-to-back video calls, laptop work on the sofa, late evenings on the phone. Linking your pain scores to the pattern of your days shows which work habits matter for you, so you change those and not everything at once.

                ## Milestones
                1. Two weeks of neck pain scores logged against hours of calls, laptop and phone use.
                2. The two work patterns most linked with bad days identified.
                3. One change made to each, such as call-free blocks or no laptop on the sofa.
                4. Neck pain over the following month compared with the baseline.

                ## Notes
                Workstation set-up belongs to a separate project. This one is about the rhythm of your days.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two work patterns linked to neck pain are identified from a two-week log and one change to each is in place for a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Log neck pain each evening alongside hours of calls and laptop use"
                - "Find the two work patterns linked with your worst days"
                - "Block one call-free hour a day in your calendar"
                - "Compare this month's neck pain with the start of the log @recurring(monthly:3)"
            - name: Back pain in a physical job
              description: |-
                ## Purpose
                Builders, nurses, warehouse staff and care workers cannot simply avoid lifting, so their plan has to build capacity for the job rather than remove the job. Mapping your heaviest regular tasks, building strength towards them and using the handling equipment available keeps you working with fewer flares.

                ## Milestones
                1. Your five most physically demanding regular tasks listed.
                2. Strength exercises chosen with your physiotherapist to match those tasks.
                3. Lifting aids and team lifts available at work identified and used.
                4. A plan for flare days agreed with your supervisor.

                ## Notes
                Manual handling training at work is a starting point, but strength and fitness for your specific tasks matter at least as much.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of your five hardest work tasks is matched to strength exercises and a flare-day plan agreed with your supervisor."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down the five hardest physical tasks in your working week"
                - "Ask your physiotherapist for exercises that match those tasks"
                - "Find out which lifting aids are available at work"
                - "Check the lifting aids at your workplace are where they should be @recurring(monthly:8)"
            - name: Back and pelvic pain in pregnancy and after birth
              description: |-
                ## Purpose
                Back and pelvic girdle pain is common in pregnancy and after birth, and is often dismissed as something to put up with. Raising it early with your midwife or doctor, getting a referral to a physiotherapist who specialises in pregnancy, and planning lifting and feeding positions makes both pregnancy and the early months easier.

                ## Milestones
                1. Back or pelvic pain raised with your midwife or doctor.
                2. A referral to a pregnancy or pelvic health physiotherapist made.
                3. Comfortable positions for sleeping, feeding and lifting the baby agreed.
                4. A postnatal check that includes your back and pelvis booked.

                ## Notes
                Check every medicine and cream with your midwife, doctor or pharmacist during pregnancy and breastfeeding.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pelvic health physiotherapy referral is in place and positions for sleep, feeding and lifting are written down."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Mention your back or pelvic pain at the next antenatal appointment"
                - "Ask for a referral to a pelvic health physiotherapist"
                - "Practise lifting and feeding positions you were shown"
                - "Ask for your back to be checked at the postnatal appointment"
            - name: Lifting children with a sore back
              description: |-
                ## Purpose
                Parents of babies and toddlers lift a moving, unpredictable load dozens of times a day, often from the floor, the cot or a car seat. Rearranging the most frequent lifts, such as raising the changing area, teaching toddlers to climb up to you and choosing an easier car seat position, takes a surprising amount of strain out of the day.

                ## Milestones
                1. The five most frequent child lifts in a typical day listed.
                2. At least three of them changed to reduce bending or twisting.
                3. Toddler climbing steps or games introduced where age allows.
                4. Back pain on busy days compared before and after the changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three of the five most frequent child lifts have been changed and pain on busy days compared before and after."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Count the child lifts in one typical day and note the hardest"
                - "Raise the changing surface or move it to a better height"
                - "Teach a toddler to climb onto a step before you lift"
                - "Ask your physiotherapist about lifting a car seat or buggy"
            - name: Staying active with back pain after sixty
              description: |-
                ## Purpose
                In later life, back pain often leads to doing less, which costs strength and balance and makes falls more likely. Keeping walking, strength and balance work going, adjusted for your back, protects independence and is something a physiotherapist or community exercise class can tailor.

                ## Milestones
                1. Your current weekly walking, strength and balance activity written down.
                2. A physiotherapist or class leader asked to adapt exercises for your back.
                3. Two strength and balance sessions a week established.
                4. Your three goals re-scored after twelve weeks.

                ## Notes
                New back pain in later life, especially with weight loss, fever or night pain, should be checked by your doctor before starting new exercise.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two adapted strength and balance sessions a week have been kept for twelve weeks and goal scores re-rated."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down how much walking and strength work you do each week"
                - "Look for a local strength and balance class for older adults"
                - "Tell the class leader about your back before the first session"
                - "Re-score your three goals after twelve weeks"
            - name: Sciatica episode plan
              description: |-
                ## Purpose
                Sciatica, pain shooting down the leg from an irritated nerve in the lower back, can be intense and frightening, though many episodes settle over weeks to months. A plan agreed with your clinician for pain relief, positions of ease, activity, work and the warning signs that need urgent review means you know what to do from day one.

                ## Milestones
                1. The pattern of your leg pain, numbness and any weakness described to a clinician.
                2. A written plan for pain relief, positions and staying active agreed.
                3. Warning signs needing urgent review, such as worsening weakness, added to your red flag card.
                4. A review point agreed if the leg pain is not settling.

                ## Notes
                Bed rest is no longer recommended for most people with sciatica. Gentle activity within comfort usually helps more.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clinician-agreed sciatica plan covers pain relief, activity, warning signs and a review point, and is filed with the flare-up plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Describe how far down the leg pain and numbness travel"
                - "Ask your clinician for a written plan for sciatica episodes"
                - "Add the sciatica warning signs to your red flag card"
                - "Agree when to come back if the leg pain does not settle"
            - name: Mood, sleep and worry alongside long-term pain
              description: |-
                ## Purpose
                Persistent pain and low mood, poor sleep and worry feed each other, and many people only mention the pain. Tracking all four together for a month and raising them as one picture with your doctor opens up support such as talking therapies or pain-focused psychology that can reduce how much pain runs your life.

                ## Milestones
                1. A month of weekly scores for pain, mood, sleep and worry.
                2. The links between them noticed and written down.
                3. Mood and sleep raised alongside pain at an appointment.
                4. Any support offered, such as talking therapy, started or a decision recorded.

                ## Notes
                If low mood includes thoughts of harming yourself, contact your doctor or an urgent helpline the same day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A month of combined pain, mood, sleep and worry scores has been discussed with a doctor and a decision on support recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add mood, sleep and worry scores to your weekly check-in"
                - "Write down the weeks when all four were worst"
                - "Raise mood and sleep, not only pain, at your next appointment"
                - "Look back over the month's mood and pain scores together @recurring(monthly:24)"
            - name: Supporting a partner living with back pain
              description: |-
                ## Purpose
                Partners and family often swing between doing everything for the person in pain and quietly resenting it, and neither helps recovery. Agreeing together what support is useful, which jobs to share and how to talk about bad days keeps the household fair and the person with pain active.

                ## Milestones
                1. A conversation held about what kinds of help are and are not useful.
                2. Household jobs reshared, keeping some lifting with the person in pain where safe.
                3. A short plan for how the household runs on a flare day.
                4. A regular moment set aside to check how the arrangement is going.

                ## Notes
                Being overprotective can reinforce fear of movement. Encourage paced activity rather than taking over everything.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A shared plan of household jobs and flare day arrangements exists and is checked together at least once a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your partner which kinds of help feel useful and which do not"
                - "Reshare household jobs so each of you keeps some active tasks"
                - "Write a short plan for how the house runs on a flare day"
                - "Check in together on how the arrangement is working @recurring(monthly:28)"
            - name: Pain management programme referral
              description: |-
                ## Purpose
                When pain has lasted many months despite exercise and medicines, a specialist pain management programme, usually a group course run by physiotherapists and psychologists, can help people do more and suffer less, even when pain does not disappear. Asking for a referral and preparing well makes the most of a scarce place.

                ## Milestones
                1. Pain management programme options available locally identified.
                2. A referral requested from your GP or specialist.
                3. Your goals, diary summary and current plan ready for the assessment.
                4. The programme completed, with a personal plan to keep going afterwards.

                ## Notes
                These programmes aim at function and quality of life rather than a cure. Going in with that expectation helps.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: event-completion
                success_criteria: "A referral to a pain management programme is made, the programme is attended and a written plan for afterwards exists."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your GP whether a pain management programme runs locally"
                - "Request a referral and note the expected waiting time"
                - "Prepare your goals and diary summary for the assessment"
                - "Write your own maintenance plan in the final week of the course"
            - name: Weighing a spinal surgery recommendation
              description: |-
                ## Purpose
                Spinal surgery helps some people with specific problems, such as persistent sciatica from a disc or nerve compression, but is rarely the answer for general back pain and has real risks and recovery time. Gathering the surgeon's reasoning, the expected benefit, the alternatives and, where useful, a second opinion leads to a decision you can stand behind.

                ## Milestones
                1. The proposed operation, its aim and the problem it addresses written down.
                2. Expected benefit, success rate, risks and recovery time asked about.
                3. Non-surgical alternatives and the effect of waiting discussed.
                4. A second opinion obtained if the decision is unclear.
                5. A decision recorded with the reasons.

                ## Notes
                If you go ahead, practical preparation for the operation itself sits in a separate surgery project.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on spinal surgery is based on written answers about benefit, risks, recovery and alternatives."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the surgeon what the operation aims to fix and how likely it is to work"
                - "Ask about risks, recovery time and what happens if you wait"
                - "Consider asking for a second opinion from another spinal surgeon"
                - "Write down your decision and the reasons"
            - name: Twelve-week progressive loading block
              description: |-
                ## Purpose
                Once pain is steadier, many experienced self-managers move from rehab exercises to proper strength training, such as deadlift variations, carries and rows, to build a back that copes with anything life throws at it. A structured twelve-week block with planned progressions and a deload week turns that ambition into a programme.

                ## Milestones
                1. A twelve-week plan with four to six lifts, progressions and a deload week.
                2. The plan checked by a physiotherapist or qualified coach who knows your history.
                3. Every session logged with loads and any pain response.
                4. Week twelve loads compared with week one and the next block planned.

                ## Notes
                Start from the **Training program** template. Progress the load slowly and treat a clearly worse next morning as a signal to step back, not to stop.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-week loading block is completed with every session logged and week twelve loads higher than week one."
                cadence: phased
                effort_hours_estimate: "36"
              tasks:
                - "Write a twelve-week plan from the training program template"
                - "Ask a physiotherapist or coach who knows your history to check it"
                - "Log loads and next-morning pain after every session"
                - "Plan the next block after comparing week one and week twelve"
            - name: Two-year pain and function trend review
              description: |-
                ## Purpose
                With two years of weekly check-ins, flare records and goal scores, you can see things no single appointment shows: seasonal patterns, the effect of a job change, which treatments actually moved the numbers. Summarising that trend on one page gives a specialist or new clinician the clearest possible picture.

                ## Milestones
                1. Two years of weekly scores and flare records gathered in one place.
                2. A simple chart of average pain and goal scores over time.
                3. Treatments and life events marked against the chart.
                4. A one-page summary of what helped, what did not and what to try next.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page two-year trend summary with a chart and marked treatments is shared with your main clinician."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect two years of weekly check-ins and flare notes"
                - "Chart average pain and goal scores month by month"
                - "Mark treatment changes and major life events on the chart"
                - "Write a one-page summary of what helped and what to try next"
---

# Chronic Back & Neck Pain

This area is for anyone whose back or neck has hurt for more than a few weeks, whether you sit at a laptop all day, lift for a living or simply cannot remember the last pain-free morning. It starts with the foundations (a red flag card, a pain history, a two-week diary, a proper assessment and a plan agreed with your clinician), then the routines that keep exercise, pacing and flare-ups under control, the skills that make movement feel safe again, the decisions about scans, treatments and equipment, the events that need planning around a sore back, the situations that change the picture, and finally the work of someone who has lived with pain for years.

What repeats is a short daily exercise prescription, movement breaks on desk days, a weekly pain and function check-in, twice-weekly strength sessions, a monthly progress review against your goals, a quarterly look at painkiller use, and a yearly review of the whole plan. The Metrics log, Habit tracker, Purchase decision, Meeting notes and Training program templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
