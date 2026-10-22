---
id: physical-health.blood-pressure-management
name: Blood Pressure Management
description: "Home readings you can trust, a target agreed with your clinician, medicine routines and reviews, and the salt and lifestyle changes that bring the numbers down."
category: personal
version: 1.0.0
tags: [physical-health, blood-pressure-management, everyone, retiree, hypertension, home-monitoring, salt, medication]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - habit-tracker
    - weekly-meal-plan
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Blood Pressure Management
          description: "Monitoring and lowering high blood pressure through home readings, medication reviews and lifestyle changes, for anyone diagnosed with or at risk of hypertension."
          projects:
            - name: Choosing a validated home blood pressure monitor
              description: |-
                ## Purpose
                Many monitors on sale have never been independently checked for accuracy, and a monitor that reads five points out will mislead every decision made from it. Choosing one from a published validated list, with an upper-arm cuff in your size, is the cheapest way to make home readings worth acting on.

                ## Milestones
                1. A validated device list from a recognised blood pressure organisation consulted.
                2. Two or three upper-arm monitors shortlisted with prices and cuff sizes.
                3. A monitor bought or borrowed that appears on the validated list.
                4. The monitor's model number and purchase date written in your reading log.

                ## Notes
                Start from the **Purchase decision** template. Wrist and finger devices are harder to use accurately; most clinicians prefer an upper-arm cuff.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An upper-arm monitor that appears on a published validated device list is in the house, with its model recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a published list of validated home blood pressure monitors"
                - "Shortlist three upper-arm models in your price range"
                - "Check which cuff sizes each model offers"
                - "Buy or borrow the validated monitor you chose"
            - name: Cuff size and measuring arm check
              description: |-
                ## Purpose
                A cuff that is too small for your arm can make readings look several points higher than they are, and the two arms can differ. Measuring your arm and checking both sides once tells you which cuff to use and which arm to measure from now on.

                ## Milestones
                1. Mid upper-arm circumference measured and matched to the right cuff size.
                2. Readings taken from both arms on the same occasion.
                3. The higher-reading arm chosen as your measuring arm, unless your clinician says otherwise.
                4. Any large difference between arms mentioned to your clinician.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your cuff size and measuring arm are written at the top of your reading log, with any large arm difference reported."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Measure around the middle of your upper arm with a tape"
                - "Match the measurement to the cuff sizes your monitor offers"
                - "Take readings from both arms one after the other"
                - "Write your cuff size and measuring arm at the top of the log"
            - name: Seven-day home blood pressure baseline
              description: |-
                ## Purpose
                Single readings bounce around with stress, caffeine and the time of day, so clinicians usually ask for a week of home readings before deciding anything. Taking two readings morning and evening for seven days gives an average that reflects your real blood pressure, not the moment of measuring.

                ## Milestones
                1. Two readings a minute apart taken each morning and evening for seven days.
                2. Every reading written down with date and time.
                3. The first day left out and the remaining readings averaged, if your clinician uses that method.
                4. The average sent to your practice or brought to your appointment.

                ## Notes
                Ask your practice how they want the week recorded. Many use a standard sheet or an online form.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed seven-day reading sheet with an average, shared with your practice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your practice how they want a week of home readings recorded"
                - "Take two morning and two evening readings for seven days"
                - "Work out the average of the readings the practice asks for"
                - "Send the average and the full sheet to your practice"
            - name: Clinic versus home readings comparison
              description: |-
                ## Purpose
                Some people read high only in the clinic and normal at home, while others are the reverse, with normal clinic readings hiding high pressure the rest of the day. Comparing the two sets side by side helps your clinician decide whether treatment is needed at all, or whether it is needed more than it seemed.

                ## Milestones
                1. Your last three clinic readings gathered from your record.
                2. A recent home average set beside them.
                3. The difference between clinic and home noted.
                4. Your clinician's view on what the difference means written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A side-by-side comparison of clinic and home readings, discussed with your clinician and their conclusion recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your last three clinic readings on the patient portal"
                - "Put them beside your latest seven-day home average"
                - "Ask your clinician whether the difference changes the plan"
                - "Record what your clinician concluded"
            - name: Agreeing your blood pressure target
              description: |-
                ## Purpose
                Targets differ with age, other conditions and whether readings are taken at home or in clinic, and many people treated for years have never been told theirs. Agreeing a written target for home readings makes every later number meaningful and every review shorter.

                ## Milestones
                1. Your clinician asked for a target for both home and clinic readings.
                2. The target written at the top of your reading log.
                3. The reasons for that target noted in a sentence.
                4. A date agreed for the next review of the target.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A home blood pressure target agreed with your clinician, written in your log with a review date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician what your target is for home readings"
                - "Ask how that differs from the clinic target and why"
                - "Write the target at the top of your reading log"
                - "Confirm the target is still right at each annual review @recurring(yearly)"
            - name: Blood pressure reading log
              description: |-
                ## Purpose
                Readings stored only inside a monitor's memory are lost at the next battery change and impossible to share. A simple log with date, time, both readings and a note column turns home monitoring into evidence your clinician can use.

                ## Milestones
                1. A log with columns for date, time, systolic, diastolic, pulse and notes.
                2. Your target, cuff size and measuring arm written at the top.
                3. Past readings from the monitor's memory copied in.
                4. The log shared with your practice at least once.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reading log holding at least one month of dated readings, shared once with your practice."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a reading log from the metrics log template"
                - "Add columns for date, time, both readings, pulse and notes"
                - "Send the log to your practice before your next appointment"
                - "Copy the readings from the monitor memory into the log @recurring(monthly:27)"
            - name: Urgent warning signs card
              description: |-
                ## Purpose
                A very high reading with symptoms such as chest pain, a sudden severe headache, confusion, weakness on one side or difficulty speaking needs emergency care, not another reading. Writing down what your health service says counts as urgent, and what to do, means nobody in the house has to work it out in a panic.

                ## Milestones
                1. Your health service's published urgent signs for high blood pressure found.
                2. A one-page card written with the signs and the number to call.
                3. The card kept next to the monitor and shared with your household.
                4. Your clinician asked whether any personal thresholds apply to you.

                ## Notes
                Use your own health service's wording. This card organises their advice; it does not replace it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A warning signs card, written from your health service's guidance, is next to the monitor and the household knows where it is."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's urgent signs for very high blood pressure"
                - "Write the signs and the emergency number on one card"
                - "Keep the card next to the monitor"
                - "Show the card to everyone you live with"
                - "Check the card is still by the monitor and up to date @recurring(yearly)"
            - name: First four weeks on blood pressure medicine
              description: |-
                ## Purpose
                Starting a blood pressure tablet raises questions in the first month: dizziness, a cough, swollen ankles, whether readings are dropping fast enough. Planning those weeks, with readings, a symptom note and the follow-up blood test or review already booked, means problems are raised early rather than tablets quietly stopped.

                ## Milestones
                1. The name, dose and timing of the new medicine written in your log.
                2. Home readings taken a few times a week through the first month.
                3. Any new symptom written down with the date it started.
                4. The follow-up blood test or review attended and its outcome recorded.

                ## Notes
                Never stop or change a blood pressure medicine without speaking to your clinician or pharmacist, even if you feel unwell on it.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of readings and symptom notes recorded, with the scheduled follow-up attended and its outcome written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the new medicine's name, dose and time in your log"
                - "Book the follow-up blood test or review before the first week ends"
                - "Note any new symptom and the date it began"
                - "Bring four weeks of readings to the follow-up appointment"
            - name: Monthly reading review
              description: |-
                ## Purpose
                Taking readings is only half the job; someone has to look at them. A short monthly review of your average against your target shows whether things are steady, improving or drifting, and tells you when to contact your clinician instead of waiting for the annual review.

                ## Milestones
                1. A monthly slot in the calendar for the review.
                2. The month's average worked out and compared with your target.
                3. A rule written down for when to contact the practice between reviews.
                4. Six consecutive monthly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews, each recording the average against the target and any action taken."
                cadence: rolling
              tasks:
                - "Ask your clinician when a monthly average should prompt a call"
                - "Work out the month's average reading and compare it with your target @recurring(monthly:6)"
                - "Write one line on any change since last month"
            - name: Home monitoring week each quarter
              description: |-
                ## Purpose
                Once readings are stable, daily measuring is rarely needed and can make people anxious. A full monitoring week every three months gives a reliable average with far less effort, and it is the format many clinicians prefer for reviews.

                ## Milestones
                1. Your clinician's preferred monitoring schedule confirmed.
                2. A monitoring week in the calendar every quarter.
                3. Each week's average added to the reading log.
                4. Four quarterly averages completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly monitoring weeks completed in twelve months, each with an average in the log."
                cadence: rolling
              tasks:
                - "Confirm with your clinician how often you need a monitoring week"
                - "Run a seven-day monitoring week and record the average @recurring(quarterly)"
                - "Send the quarterly average to the practice if they ask for it"
            - name: Annual hypertension review
              description: |-
                ## Purpose
                Most health systems offer people with high blood pressure a yearly review covering readings, medicines, blood tests and other risks. Treating it as a fixed date with preparation, rather than waiting for a letter, keeps treatment current and catches side effects before they become reasons to stop.

                ## Milestones
                1. The review month fixed and the appointment booked.
                2. The last quarter's average, medicine list and questions prepared.
                3. Any blood tests done in time for results to be discussed.
                4. Changes agreed at the review written down and acted on.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual review held for two consecutive years, each with prepared readings and written outcomes."
                cadence: cyclic
              tasks:
                - "Book the annual blood pressure review and its blood tests @recurring(yearly)"
                - "Prepare the latest average, medicine list and three questions"
                - "Write down every change agreed at the review"
            - name: Daily medicine timing routine
              description: |-
                ## Purpose
                Missed doses are one of the commonest reasons blood pressure stays high on treatment, and they are usually forgotten rather than skipped. Attaching the tablet to something you already do every day, and ticking it off, makes taking it as automatic as brushing your teeth.

                ## Milestones
                1. A fixed time chosen, attached to an existing daily habit.
                2. A pill organiser or blister pack in use if it helps.
                3. Doses ticked off daily for a month.
                4. Fewer than two missed doses in a month.

                ## Notes
                Start from the **Habit tracker** template. Ask your pharmacist whether morning or evening suits your particular medicine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily doses ticked off with no more than one missed."
                cadence: rolling
              tasks:
                - "Ask your pharmacist whether your medicine is best taken morning or evening"
                - "Choose the daily habit you will take the tablet alongside"
                - "Take your blood pressure medicine and tick it off @recurring(daily)"
            - name: Annual blood tests for blood pressure medicines
              description: |-
                ## Purpose
                Several common blood pressure medicines affect kidney function and salt levels in the blood, so most clinicians check these at least yearly and after dose changes. Knowing which tests apply to your medicines, and booking them before the review, makes sure they are not missed.

                ## Milestones
                1. The routine tests linked to your medicines confirmed with your clinician or pharmacist.
                2. Tests booked a week or two before the annual review.
                3. Results read and any change discussed.
                4. Extra tests after any dose change booked when advised.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The blood tests your medicines need are done every year and after each dose change, with results reviewed."
                cadence: cyclic
              tasks:
                - "Ask which blood tests your blood pressure medicines need and how often"
                - "Book the yearly tests two weeks before your review @recurring(yearly)"
                - "Read the results on the portal before the appointment"
            - name: Side effect diary during dose changes
              description: |-
                ## Purpose
                Ankle swelling, a dry cough, dizziness on standing and tiredness can all follow a new medicine or dose, and they are easier to fix when they are recorded clearly. A short diary kept for a month after each change gives your clinician what they need to adjust the treatment instead of you giving up on it.

                ## Milestones
                1. A diary format with date, symptom, severity and timing.
                2. The diary kept for four weeks after every change.
                3. Readings on the same days noted alongside.
                4. The diary brought to the follow-up appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A four-week side effect diary completed after the most recent medicine change and discussed with a clinician."
                cadence: rolling
              tasks:
                - "Create a simple side effect diary with date, symptom and severity"
                - "Start the diary on the day any blood pressure medicine changes"
                - "Bring the diary to the follow-up appointment"
                - "Bring up any lingering side effect at the next review @recurring(quarterly)"
            - name: Monitor upkeep and accuracy check
              description: |-
                ## Purpose
                Home monitors drift with age and wear, and a worn cuff or flat batteries can quietly distort readings. A yearly check against the clinic's device, plus fresh batteries and an inspected cuff, keeps the numbers you rely on honest.

                ## Milestones
                1. The monitor's age and manufacturer's recommended check interval noted.
                2. The monitor compared once against a clinic reading.
                3. Batteries replaced and the cuff checked for wear.
                4. A replacement planned if the monitor no longer agrees.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The monitor has been compared against a clinic device within the last year and its cuff is in good condition."
                cadence: cyclic
              tasks:
                - "Check the manual for how often the monitor should be recalibrated"
                - "Bring the monitor to an appointment and compare it with the clinic reading @recurring(yearly)"
                - "Replace the batteries and check the cuff tubing for cracks"
            - name: Weekly lower-salt meal plan
              description: |-
                ## Purpose
                Most salt comes from bread, ready meals, sauces and takeaways rather than the salt cellar, so cutting it is mostly about what gets planned and bought. A weekly plan with mostly home-cooked, lower-salt meals is the single most practical lever many people have on their readings.

                ## Milestones
                1. A weekly plan with at least five home-cooked dinners.
                2. Shopping lists built from the plan.
                3. Lower-salt versions of the household's favourite meals found.
                4. The plan kept for eight weeks.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly meal plans, each with at least five home-cooked lower-salt dinners."
                cadence: rolling
              tasks:
                - "Create a weekly meal plan from the template"
                - "Plan the week's lower-salt dinners and write the shopping list @recurring(weekly:sun)"
                - "Find lower-salt versions of three meals the household already likes"
            - name: Stress and readings weekly check-in
              description: |-
                ## Purpose
                Stressful weeks, bad nights and pain all push readings up, and it helps to see the pattern rather than worry about a single high number. A brief weekly note on sleep, stress and anything unusual, kept beside the readings, explains the spikes and shows what helps.

                ## Milestones
                1. A note column added to the reading log for sleep and stress.
                2. A weekly check-in kept for eight weeks.
                3. Any pattern between stressful weeks and readings written down.
                4. One change tried in response to the pattern.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly check-ins recorded, with one observed pattern written down and one change tried."
                cadence: rolling
              tasks:
                - "Add a sleep and stress note column to your reading log"
                - "Write a two-line note on the week's sleep and stress @recurring(weekly:fri)"
                - "Look for a link between stressful weeks and higher readings after two months"
            - name: Weekly movement target agreed with your clinician
              description: |-
                ## Purpose
                Regular aerobic activity lowers blood pressure for many people, and some strength exercises may help too, but the right amount depends on your readings, heart and joints. Agreeing a weekly target with your clinician and tracking it makes exercise part of the treatment plan rather than a vague intention.

                ## Milestones
                1. A weekly activity target agreed with your clinician, including anything to avoid.
                2. Two or three activities chosen that you can actually keep up.
                3. Weekly minutes recorded for two months.
                4. Readings compared before and after the two months.

                ## Notes
                Ask specifically about heavy lifting and breath-holding exercises if your readings are very high.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two months of weekly activity recorded against a target your clinician agreed, with readings compared before and after."
                cadence: rolling
              tasks:
                - "Ask your clinician what weekly activity target is safe for you"
                - "Choose two activities that fit your week"
                - "Add up your active minutes and compare them with the target @recurring(weekly:sun)"
            - name: Taking an accurate home reading
              description: |-
                ## Purpose
                Talking, a full bladder, crossed legs, a cold room or an unsupported arm can each push a reading up by several points. Learning the standard method once, and following it every time, is what makes home readings trustworthy enough for decisions about treatment.

                ## Milestones
                1. The standard home measurement method read from a reputable source.
                2. Your own one-line routine written: seated, back supported, feet flat, arm at heart level, five minutes rest.
                3. The method checked by a nurse or pharmacist watching you measure.
                4. Every reading in the log taken with the method.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A nurse or pharmacist has watched you take a reading and confirmed the method is correct."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's guide to measuring blood pressure at home"
                - "Write the method as a one-line routine and stick it by the monitor"
                - "Ask a nurse or pharmacist to watch you take a reading"
            - name: Understanding your diagnosis and stage
              description: |-
                ## Purpose
                High blood pressure is described in stages, and the stage, along with your other risks, shapes what treatment is offered and how fast. Understanding your own stage and why it was chosen makes the advice you are given make sense and helps you ask about what would change it.

                ## Milestones
                1. Your diagnosis and stage written down in plain words.
                2. The readings it was based on noted.
                3. Other risks your clinician took into account listed.
                4. What would move you to a different stage, in either direction, written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language note of your stage, the readings behind it and the other risks considered, checked with your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician which stage of high blood pressure you have"
                - "Read your health service's explanation of the stages"
                - "List the other risks your clinician considered"
                - "Write a short plain-language summary and check it with your clinician"
            - name: Reading food labels for salt
              description: |-
                ## Purpose
                Labels give salt, or sometimes sodium, per hundred grams and per portion, and the two are easy to confuse. Learning to read them in a few seconds lets you compare two loaves, two sauces or two soups in the shop and pick the lower one without thinking about it.

                ## Milestones
                1. The difference between salt and sodium figures understood.
                2. Your health service's high and low salt thresholds per hundred grams written down.
                3. Ten everyday products compared in the shop or cupboard.
                4. Lower-salt swaps chosen for at least three of them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten everyday products compared by label, with lower-salt swaps adopted for at least three."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up how to convert a sodium figure into salt"
                - "Write down the high and low salt thresholds your health service uses"
                - "Compare the salt figures on ten products in your cupboard"
                - "Choose lower-salt swaps for three of them"
            - name: How your blood pressure medicines work
              description: |-
                ## Purpose
                Blood pressure medicines work in several different ways, and knowing which kind you take explains its common side effects, the tests it needs and the situations where you might be told to pause it. Twenty minutes with the leaflet and a pharmacist turns a tablet you take on trust into one you understand.

                ## Milestones
                1. Each blood pressure medicine you take listed with its group.
                2. How each one works written in a sentence.
                3. Common side effects and needed blood tests noted.
                4. Questions answered by a pharmacist in a medicines review.

                ## Notes
                Your pharmacist can usually do a short structured review of your medicines at no cost. Ask for one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note for each of your blood pressure medicines covering how it works, common side effects and required tests, checked by a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each blood pressure medicine you take"
                - "Read each patient leaflet and note the medicine group"
                - "Write one sentence on how each medicine works"
                - "Ask your pharmacist for a short medicines review"
            - name: Working with averages, not single readings
              description: |-
                ## Purpose
                One high reading after a coffee or an argument can cause days of worry, while a steady rise over months can go unnoticed. Learning to judge your blood pressure by weekly averages, and to repeat a surprising reading calmly, makes home monitoring a source of reassurance rather than alarm.

                ## Milestones
                1. The habit of taking two readings and recording both.
                2. A simple way to work out a weekly average.
                3. A personal rule for what to do after an unexpectedly high reading.
                4. The rule checked with your clinician.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rule for handling unexpected readings, agreed with your clinician, and weekly averages used in your log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set up a weekly average row in your reading log"
                - "Write a rule for what to do after one surprising reading"
                - "Check the rule with your clinician or practice nurse"
            - name: Slow breathing practice
              description: |-
                ## Purpose
                Plenty of people find that a few minutes of slow breathing lowers their readings, at least in the short term, and helps with the anxiety of measuring. Trying a simple practice for a month, with readings before and after, tells you whether it is worth keeping.

                ## Milestones
                1. A simple slow breathing method chosen from a reputable source.
                2. Ten minutes practised on most days for four weeks.
                3. Readings taken before and after a few sessions.
                4. A decision made to keep, adjust or drop the practice.

                ## Notes
                Treat this as an addition to the plan your clinician agreed, not a replacement for medicines.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Four weeks of practice logged, readings compared before and after, and a keep or drop decision recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a slow breathing method from a reputable health source"
                - "Practise for ten minutes on five days a week for a month"
                - "Take readings before and after three of the sessions"
                - "Decide whether to keep the practice and note why"
            - name: Lower-salt cooking that still tastes good
              description: |-
                ## Purpose
                Cutting salt fails when food tastes flat, and taste adapts within a few weeks if the change is gradual. Learning to season with acid, herbs, spices and aromatics, and reducing salt step by step, keeps meals enjoyable while the numbers come down.

                ## Milestones
                1. Five flavour swaps learned: citrus, vinegar, herbs, spices and aromatics.
                2. Salt in three regular recipes cut by a quarter, then by half.
                3. Stock cubes and sauces replaced with lower-salt versions or home-made ones.
                4. The household's verdict on each recipe noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three regular household recipes cooked with half their original salt and still eaten happily."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick three recipes your household cooks most often"
                - "Cut the salt in each by a quarter this month"
                - "Try lemon, vinegar or herbs to replace the flavour"
                - "Swap one stock cube or sauce for a lower-salt version"
            - name: Checking your pulse for an irregular rhythm
              description: |-
                ## Purpose
                Many home monitors flag an irregular heartbeat, and an irregular rhythm such as atrial fibrillation raises stroke risk alongside high blood pressure. Learning to check your own pulse, and knowing what the monitor's symbol means, helps you raise it promptly rather than ignoring a warning light.

                ## Milestones
                1. Your monitor's irregular heartbeat symbol and what it means looked up.
                2. Pulse checking at the wrist practised for thirty seconds.
                3. A rule written for when to mention an irregular pulse to the practice.
                4. Any repeated irregular reading reported.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can check your pulse, know what the monitor's irregular symbol means, and any repeated flag has been reported."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up what the irregular heartbeat symbol on your monitor means"
                - "Practise feeling your pulse at the wrist for thirty seconds"
                - "Write down when you will report an irregular pulse to the practice"
            - name: Salt audit of the weekly shop
              description: |-
                ## Purpose
                Three quarters of the salt people eat is already in food when it is bought, so the shopping basket is where most of it can be cut. Going through one normal week's shop and ranking items by salt shows exactly where the biggest, easiest reductions are.

                ## Milestones
                1. One normal week's shop listed in full.
                2. The salt per portion of each item noted from labels.
                3. The five biggest sources identified.
                4. Lower-salt swaps chosen for the top five and bought the following week.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The five saltiest items in a normal weekly shop identified, with lower-salt swaps in the next shop."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Keep the receipt from this week's food shop"
                - "Note the salt per portion for each item from its label"
                - "Rank the items and circle the five saltiest"
                - "Buy lower-salt swaps for those five next week"
            - name: Lifestyle-first or medicine-now decision
              description: |-
                ## Purpose
                For some readings and risk levels clinicians offer a period of lifestyle change before medicines; for others they recommend starting treatment straight away. Understanding the options, your overall risk and what would trigger a change of approach lets you make the decision with your clinician rather than have it made for you.

                ## Milestones
                1. Your clinician's recommendation and the reasons for it written down.
                2. What a lifestyle-first trial would involve, and for how long, agreed if offered.
                3. A date and a reading level that would trigger starting medicine noted.
                4. The decision recorded with its review date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on starting treatment, with the reasons, a review date and a reading level that would change it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician what they recommend and why"
                - "Ask what overall risk figure the recommendation is based on"
                - "Agree the reading level and date that would change the plan"
                - "Write the decision and its review date in your log"
            - name: Adding or changing a blood pressure medicine
              description: |-
                ## Purpose
                Readings that stay above target on one medicine usually mean the next step is a dose increase or a second medicine, and there are often several reasonable options. Preparing for that conversation with your readings, side effects and preferences makes the choice a shared one.

                ## Milestones
                1. Three months of readings showing the gap from target gathered.
                2. Missed doses and side effects honestly noted.
                3. The options your clinician offers written down with their main trade-offs.
                4. The chosen change started, with a follow-up date.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A medicine change agreed at an appointment using your readings, with the follow-up date written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather three months of averages showing the gap from target"
                - "Note honestly any missed doses or side effects"
                - "Write down each option your clinician offers and its trade-off"
                - "Book the follow-up for after the change has had time to work"
            - name: Switching a medicine that causes side effects
              description: |-
                ## Purpose
                Persistent side effects are a common reason people stop blood pressure treatment altogether, often without telling anyone. Raising the side effect, asking about alternatives in a different medicine group and planning the switch keeps you treated and comfortable.

                ## Milestones
                1. The side effect described with when it started and how much it bothers you.
                2. Alternatives discussed with your clinician or pharmacist.
                3. A switch plan agreed, including when to stop one and start the other.
                4. Readings and symptoms tracked for a month after the switch.

                ## Notes
                Do not stop a medicine on your own; some need to be changed in a particular order.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A troublesome side effect raised, an alternative agreed and a month of readings recorded after the switch."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down the side effect, when it started and how much it bothers you"
                - "Book an appointment to discuss an alternative"
                - "Write down the switch plan your clinician gives you"
                - "Track readings and symptoms for a month after switching"
            - name: Over-the-counter medicines that raise blood pressure
              description: |-
                ## Purpose
                Some cold and flu remedies, decongestants, anti-inflammatory painkillers and soluble tablets high in sodium can raise blood pressure or interfere with treatment. A short check of your medicine cabinet with a pharmacist removes surprises the next time you buy something at the counter.

                ## Milestones
                1. Every over-the-counter medicine and supplement in the house listed.
                2. A pharmacist asked which ones are a problem with your blood pressure or medicines.
                3. Safer alternatives noted for the problem ones.
                4. A note added to your phone to mention your blood pressure when buying medicines.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every over-the-counter medicine at home checked with a pharmacist, with safer alternatives noted for any problem ones."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every over-the-counter medicine and supplement in the house"
                - "Ask a pharmacist which of them affect blood pressure"
                - "Write safer alternatives next to any problem medicine"
                - "Clear out expired medicines and recheck the cabinet with the pharmacist @recurring(yearly)"
            - name: Caffeine and readings experiment
              description: |-
                ## Purpose
                Caffeine raises blood pressure briefly in some people and hardly at all in others. A simple two-week comparison, with readings taken before coffee and at a fixed time after it, shows whether your own intake is worth changing.

                ## Milestones
                1. Usual daily caffeine written down by drink.
                2. One week of readings taken before and an hour after your first caffeinated drink.
                3. A second week with reduced caffeine and the same readings.
                4. A conclusion written on whether caffeine matters for you.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two weeks of before-and-after readings compared, with a written conclusion on your own response to caffeine."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down every caffeinated drink you have on a normal day"
                - "Measure before and an hour after your first coffee for a week"
                - "Repeat the week with half your usual caffeine"
                - "Compare the two weeks and write a one-line conclusion"
            - name: Potassium-rich food swaps
              description: |-
                ## Purpose
                Eating more fruit, vegetables and pulses tends to help blood pressure, partly through potassium, but some blood pressure medicines and kidney problems make extra potassium unsafe. Checking with your clinician first, then making a few specific swaps, gets the benefit without the risk.

                ## Milestones
                1. Your clinician asked whether extra potassium is safe with your medicines and kidney function.
                2. If agreed, five potassium-rich foods chosen that you like.
                3. Two daily swaps made into your normal meals.
                4. The swaps kept for two months.

                ## Notes
                Do not use potassium-based salt substitutes until a clinician has confirmed they are safe for you.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Clinician agreement recorded, then two daily potassium-rich swaps kept for two months."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician whether extra potassium is safe for you"
                - "Choose five fruits, vegetables or pulses you enjoy"
                - "Build two of them into your daily meals"
            - name: Lower-salt workday lunches
              description: |-
                ## Purpose
                Shop-bought sandwiches, soups and canteen meals are among the saltiest things many people eat, five days a week. Planning a handful of lower-salt lunches you can make or buy cuts a large share of weekly salt without touching dinner.

                ## Milestones
                1. Your usual workday lunches listed with their salt content.
                2. Four lower-salt lunch options found, bought or prepared.
                3. Lower-salt lunches eaten on at least three workdays a week.
                4. The routine kept for six weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Lower-salt lunches on at least three workdays a week for six weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check the salt on the labels of your usual workday lunches"
                - "Find four lower-salt lunches you can make or buy"
                - "Prepare lower-salt lunches for three workdays this week"
                - "Plan next week's lower-salt lunches @recurring(weekly:thu)"
            - name: Twenty-four-hour ambulatory monitor day
              description: |-
                ## Purpose
                An ambulatory monitor takes readings every half hour through a day and night, and it is often used to confirm a diagnosis or check readings during sleep. A little preparation, from what to wear to keeping an activity diary, makes the day produce a clean result rather than a repeat appointment.

                ## Milestones
                1. The fitting appointment booked on a normal working day.
                2. Loose sleeves, a diary and a plan for showering arranged.
                3. An activity and symptom diary kept for the full day.
                4. Results discussed and the conclusion recorded.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full twenty-four-hour recording completed with a diary, and the results discussed with a clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the ambulatory monitor fitting on a typical working day"
                - "Wear a loose-sleeved top and plan around washing"
                - "Keep a diary of activity, sleep and symptoms through the day"
                - "Book the results appointment before returning the monitor"
            - name: Blood pressure check before planned surgery
              description: |-
                ## Purpose
                Raised blood pressure at a pre-operative assessment can postpone an operation on the day. Checking your readings and medicine plan a few weeks before surgery, and asking which medicines to take on the morning, avoids a cancellation you could have prevented.

                ## Milestones
                1. Home readings checked four to six weeks before the surgery date.
                2. Any high average raised with your clinician in time to act.
                3. Instructions for blood pressure medicines on the day of surgery confirmed.
                4. Your recent readings brought to the pre-operative assessment.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Readings checked and medicine instructions for the day confirmed before the pre-operative assessment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Run a home monitoring week a month before the surgery date"
                - "Raise any high average with your clinician straight away"
                - "Ask the surgical team which blood pressure medicines to take on the day"
                - "Bring your recent readings to the pre-operative assessment"
            - name: Travelling with blood pressure medicines
              description: |-
                ## Purpose
                Running out abroad, crossing time zones and hot climates are the three things that disrupt blood pressure treatment on holiday. Packing enough medicine, planning dose times across time zones and carrying a medicine list keeps treatment steady while you are away.

                ## Milestones
                1. Enough medicine for the trip plus a week's spare ordered in time.
                2. Medicines packed in hand luggage with a printed list.
                3. A plan for dose times across any time zone change agreed with your pharmacist.
                4. Advice on hot weather and dehydration noted for your medicines.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip completed with no missed doses and the spare supply and medicine list carried in hand luggage."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Order enough medicine for the trip plus a week's spare"
                - "Print a medicine list with generic names to carry with your passport"
                - "Ask your pharmacist how to time doses across the time zone change"
                - "Pack all blood pressure medicines in hand luggage"
            - name: Sick day and heatwave plan for blood pressure medicines
              description: |-
                ## Purpose
                When you are dehydrated from vomiting, diarrhoea, fever or a heatwave, some blood pressure medicines can lower pressure too far or strain the kidneys. Many health services advise a sick day plan; agreeing yours in advance means you know what to do when you are too unwell to look it up.

                ## Milestones
                1. Your clinician or pharmacist asked which of your medicines need a sick day plan.
                2. The plan written on one page: which medicines, when to pause, when to restart.
                3. The plan kept with your medicines and shared with your household.
                4. The plan reviewed whenever a medicine changes.

                ## Notes
                Only follow a plan your clinician or pharmacist has agreed for you. Do not pause medicines based on general advice alone.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page sick day plan agreed with a clinician or pharmacist, kept with your medicines."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your pharmacist whether any of your medicines need a sick day plan"
                - "Write the agreed plan on one page"
                - "Keep the plan with your medicines and tell your household where it is"
                - "Review the sick day plan before summer and after any medicine change @recurring(yearly)"
            - name: Follow-up after a high reading at a pharmacy
              description: |-
                ## Purpose
                Pharmacy checks, workplace screenings and charity stalls often hand people a high reading and a leaflet, and the follow-up depends entirely on them. Turning that slip of paper into a home baseline and a practice appointment within a few weeks is how hidden high blood pressure gets found.

                ## Milestones
                1. The screening reading and date written down.
                2. A seven-day home baseline completed.
                3. The practice contacted with both sets of readings.
                4. The outcome recorded: no action, monitoring or diagnosis.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within a month of a high screening reading, a home baseline is done and the practice has reviewed both."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the screening reading and where it was taken"
                - "Borrow or use a validated monitor for a seven-day baseline"
                - "Send both sets of readings to your practice"
                - "Record what the practice decides"
            - name: High blood pressure diagnosed under forty
              description: |-
                ## Purpose
                Early high blood pressure often leads clinicians to look for an underlying cause such as a kidney or hormone problem before settling on long-term treatment. Asking whether those checks are appropriate, and planning around a long horizon of treatment, matters more in your thirties than in your seventies.

                ## Milestones
                1. Your clinician asked whether tests for an underlying cause are appropriate.
                2. Any recommended tests completed and results discussed.
                3. Family history of early high blood pressure or stroke noted.
                4. A long-term plan agreed that fits work, family plans and contraception choices.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Underlying causes considered with your clinician, any tests completed, and a long-term plan written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician whether tests for a secondary cause are appropriate"
                - "Note any early high blood pressure or stroke in close relatives"
                - "Complete any recommended tests"
                - "Ask how family plans or contraception affect your treatment options"
            - name: Dizziness on standing in later life
              description: |-
                ## Purpose
                In older adults, blood pressure that drops sharply on standing can cause dizziness and falls, especially with several medicines. Measuring lying or sitting and then standing, and raising it with a clinician, can lead to a medicine review that prevents a fall.

                ## Milestones
                1. Dizzy episodes written down with time of day and what you were doing.
                2. Sitting and standing readings taken with help, as your clinician advises.
                3. A medicine review requested with the readings.
                4. Practical steps for standing up safely agreed.

                ## Notes
                Have someone with you when taking standing readings, and sit down at once if you feel faint.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Sitting and standing readings shared with a clinician, and a medicine review held to address dizziness on standing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down each dizzy spell with the time and what you were doing"
                - "Ask your clinician how to take sitting and standing readings safely"
                - "Request a medicine review and bring the readings"
                - "Practise rising slowly from bed and chairs"
            - name: Managing a parent's blood pressure readings
              description: |-
                ## Purpose
                Once an older parent's readings, tablets and appointments start to slip, a family member often ends up holding the details without a system. A shared log, agreed with the parent, keeps everyone working from the same numbers and lets the parent stay in charge as far as they want.

                ## Milestones
                1. Your parent's agreement on what help they want and who sees their readings.
                2. A shared reading log both of you can open.
                3. A regular slot to look at readings together.
                4. You recorded with the practice as a carer or nominated contact, with consent.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A shared log in use for three months, reviewed together with your parent at least monthly."
                cadence: rolling
              tasks:
                - "Ask your parent how much help they want with their blood pressure"
                - "Set up a reading log you can both open"
                - "Look at the readings together with your parent @recurring(monthly:15)"
                - "Ask the practice how to be recorded as a nominated contact"
            - name: Blood pressure in pregnancy and after birth
              description: |-
                ## Purpose
                Blood pressure is checked at every antenatal appointment because high readings in pregnancy can signal a serious condition. Knowing the warning symptoms, keeping appointments and continuing checks after birth, when risk persists for a time, protects both parent and baby.

                ## Milestones
                1. The warning symptoms your maternity team gives you written down and shared with your partner.
                2. Every antenatal blood pressure check attended and the reading noted.
                3. A plan for any home monitoring agreed with the maternity team if they request it.
                4. Postnatal blood pressure checks completed and any medicine plan reviewed.

                ## Notes
                Contact your maternity unit straight away about severe headache, vision changes or sudden swelling of face, hands or feet. Use their numbers, not this page.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every antenatal and postnatal blood pressure check attended, with warning symptoms written down and shared."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the warning symptoms your maternity team gives you"
                - "Share the warning symptoms and the unit's phone number with your partner"
                - "Note each antenatal blood pressure reading in your log"
                - "Book the postnatal blood pressure check before leaving hospital"
            - name: Reading times that fit a shift pattern
              description: |-
                ## Purpose
                Standard advice to measure morning and evening assumes a day schedule. For shift workers, readings timed to waking and before sleep, whatever the clock says, are more comparable, and the clinician needs to know which pattern produced them.

                ## Milestones
                1. Measuring times defined by waking and sleeping rather than the clock.
                2. Each reading labelled with the shift you were on.
                3. Readings on days, nights and rest days compared.
                4. The pattern explained to your clinician alongside the log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of readings labelled by shift type, discussed with your clinician."
                cadence: rolling
              tasks:
                - "Write a measuring rule based on waking and bedtime rather than clock time"
                - "Add a shift type column to your reading log"
                - "Compare readings across day, night and rest days after a month"
            - name: Family blood pressure check for relatives
              description: |-
                ## Purpose
                High blood pressure runs in families and often has no symptoms, so your diagnosis is a useful prompt for parents, siblings and adult children to get checked. Telling them, and suggesting a pharmacy or practice check, is a small act that can find it early in someone else.

                ## Milestones
                1. Close relatives who should know listed.
                2. Each told about your diagnosis in your own words.
                3. A simple suggestion given for where to get checked.
                4. Any relative who wants help booking a check supported.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every close adult relative told about your diagnosis and given a way to get checked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List parents, siblings and adult children who should know"
                - "Tell each one about your diagnosis and why it matters to them"
                - "Suggest a pharmacy or practice check they can book easily"
            - name: Investigating resistant high blood pressure
              description: |-
                ## Purpose
                When readings stay above target despite three medicines taken properly, clinicians call it resistant and usually look harder at causes, measurement and adherence. Preparing honest evidence on all three helps a specialist find what is driving it.

                ## Milestones
                1. Missed doses and timing honestly checked for a month.
                2. Home measurement technique confirmed by a nurse.
                3. A referral or further tests discussed with your clinician.
                4. Specialist findings and the new plan written down.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Adherence and technique checked, further investigation agreed, and the resulting plan recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a nurse to check your measuring technique again"
                - "Ask your clinician about a specialist referral or further tests"
                - "Write down the specialist's findings and the new plan"
                - "Check your dose record for any missed doses @recurring(weekly:sat)"
            - name: Home readings report for a specialist
              description: |-
                ## Purpose
                Specialists see a referral letter and a clinic reading, but your months of home readings tell a fuller story. A short report with your averages, medicine changes and notable events on one page makes the first appointment far more productive.

                ## Milestones
                1. Monthly averages for the last six to twelve months gathered.
                2. Medicine changes marked on the same timeline.
                3. Notable events, illnesses and side effects added.
                4. The one-page report brought to or sent before the appointment.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page timeline of averages, medicine changes and events, shared with a specialist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect monthly averages for the last six to twelve months"
                - "Mark every medicine change on the same timeline"
                - "Ask the agent to draft a one-page summary from the log"
                - "Send the report to the specialist clinic before the appointment"
            - name: Two-year home readings trend review
              description: |-
                ## Purpose
                Blood pressure tends to rise with age, and seasonal patterns are common, with readings often higher in winter. Looking across two years of home averages shows seasonal swings and slow drift that monthly reviews miss, and it informs a better-timed review.

                ## Milestones
                1. Two years of monthly averages laid out in one table.
                2. Seasonal patterns and any steady drift marked.
                3. Medicine changes and life events linked to shifts.
                4. Findings discussed at the annual review.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-year table of averages with seasonal patterns noted and discussed at an annual review."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put two years of monthly averages into one table"
                - "Mark any seasonal pattern or steady rise"
                - "Link each shift to a medicine change or life event"
                - "Raise the findings at your next annual review"
            - name: Written self-management plan with your clinician
              description: |-
                ## Purpose
                Experienced home monitors can sometimes agree a written plan with their clinician covering what to do at different average readings, when to call and, in some services, approved dose adjustments. A plan like this turns monitoring into well-defined action and cuts unnecessary appointments.

                ## Milestones
                1. Your clinician asked whether a self-management plan suits you.
                2. Thresholds for action written down in their words.
                3. Any approved actions, and the limits on them, recorded exactly.
                4. The plan reviewed at each annual review.

                ## Notes
                Only act on thresholds and changes your clinician has written down for you. Never adjust doses on your own initiative.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written self-management plan, agreed and signed off by your clinician, kept with your reading log."
                cadence: rolling
              tasks:
                - "Ask your clinician whether a written self-management plan suits you"
                - "Write down the thresholds and actions exactly as agreed"
                - "Keep the plan at the front of your reading log"
                - "Review the plan at each annual review"
            - name: Supporting a partner newly diagnosed
              description: |-
                ## Purpose
                Diagnoses land on a household, not one person: meals, routines and worries change for everyone. Learning the basics together, sharing the cooking changes and agreeing how much help is wanted makes treatment easier to stick to without turning a partner into a nurse.

                ## Milestones
                1. A conversation held on what kind of support is wanted and what is not.
                2. The basics of readings, target and medicines learned together.
                3. Household meal changes agreed and shared.
                4. A check-in after three months on how the support is working.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Agreed support in place, shared meal changes running, and a three-month check-in held."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your partner what support they want and what they would rather handle alone"
                - "Read the basics of home readings and targets together"
                - "Agree three household meal changes you will both make"
                - "Check in after three months on how it is going"
---

# Blood Pressure Management

This area is for anyone told their blood pressure is high, borderline or worth watching, and for the people who help them. It starts with the foundations (a validated monitor, the right cuff, a seven-day baseline and a target agreed with your clinician), then the routines that keep readings and medicines on track, the skills that make home numbers trustworthy, the decisions about salt, medicines and side effects, the events that need planning, the situations that change the picture, and finally the work of an experienced self-manager.

What repeats is a monthly look at your averages, a monitoring week each quarter, a daily medicine time, the annual review with its blood tests, and a weekly lower-salt meal plan. The Purchase decision, Metrics log, Habit tracker and Weekly meal plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
