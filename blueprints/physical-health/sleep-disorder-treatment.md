---
id: physical-health.sleep-disorder-treatment
name: Sleep Disorder Treatment
description: "From first symptoms to long-term care for sleep apnoea, chronic insomnia, restless legs and narcolepsy: diaries, sleep studies, CPAP routines, insomnia therapy and specialist follow-ups."
category: personal
version: 1.0.0
tags: [physical-health, sleep-disorder-treatment, everyone, sleep-apnoea, insomnia, cpap, restless-legs, narcolepsy]
author: Aurum Technology
starter_structure:
  templates:
    - sleep-review
    - metrics-log
    - habit-tracker
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Sleep Disorder Treatment
          description: "Getting diagnosed and treated for sleep apnoea, chronic insomnia, restless legs or narcolepsy, including sleep studies, CPAP routines and specialist follow-ups."
          projects:
            - name: Two-week sleep diary before the first appointment
              description: |-
                ## Purpose
                Doctors deciding between insomnia, sleep apnoea, restless legs and a body clock problem start with the same question: what actually happens each night? A two-week diary of bedtimes, wake times, night wakings, naps, caffeine and alcohol turns a vague 'I sleep badly' into a pattern a clinician can read in two minutes, and it often shortens the route to the right test.

                ## Milestones
                1. A diary format chosen, on paper or in an app, with the same columns every day.
                2. Fourteen consecutive nights recorded, including weekends.
                3. Naps, caffeine, alcohol and evening screen time noted alongside each night.
                4. Average time in bed, time asleep and number of wakings worked out and written at the top.

                ## Notes
                Start from the **Sleep review** template. Fill it in each morning from memory rather than checking the clock during the night, which feeds insomnia.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fourteen consecutive nights of diary entries with averages summarised, ready to hand to a clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a diary page with columns for bedtime, wake time, wakings, naps and drinks"
                - "Fill in the first morning's entry before breakfast"
                - "Add up the averages after night fourteen"
                - "Ask the agent to turn the fourteen nights into a one-paragraph summary for the doctor"
            - name: Sleepiness and insomnia questionnaires scored at home
              description: |-
                ## Purpose
                Sleep clinics rely on short validated questionnaires: the Epworth Sleepiness Scale for daytime sleepiness, STOP-Bang for apnoea risk and the Insomnia Severity Index for insomnia. Scoring them yourself before the appointment gives the doctor numbers to compare against later, and a high score can change how quickly a referral is made.

                ## Milestones
                1. Epworth, STOP-Bang and Insomnia Severity Index scores completed and dated.
                2. Answers checked with a bed partner where a question asks about snoring or dozing.
                3. Scores saved in the records folder with the date.
                4. Any score in the high range flagged for the first appointment.

                ## Notes
                These questionnaires screen rather than diagnose. A low score alongside worrying symptoms still deserves an appointment.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three questionnaire scores, dated and saved, brought to the first sleep appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the Epworth Sleepiness Scale on a sleep charity or clinic website and score it"
                - "Score the STOP-Bang and Insomnia Severity Index questionnaires"
                - "Ask your partner to check the snoring and dozing answers"
                - "Save all three scores with today's date"
            - name: Night-time recording of snoring and breathing pauses
              description: |-
                ## Purpose
                People with sleep apnoea rarely know they stop breathing; the evidence usually comes from whoever sleeps next to them. A few nights of phone audio and a partner's written notes about gasps, choking and pauses give the doctor something concrete, and recordings are especially useful for anyone who sleeps alone.

                ## Milestones
                1. Three nights of audio recorded with a snoring app or voice recorder.
                2. Clips of the loudest snoring and any silent pauses followed by gasps saved.
                3. A bed partner's notes on how long pauses last and how often they happen written down.
                4. The clips ready to play on a phone at the appointment.

                ## Notes
                A recording is not a diagnosis. Its job is to help the doctor decide which sleep study you need.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three nights of recordings with labelled clips and written partner notes ready for the appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Install a snoring recorder app or set up a voice recorder by the bed"
                - "Record three nights and label the clips with the date"
                - "Ask your bed partner to note any pauses and roughly how long they last"
                - "Pick the two clearest clips to play to the doctor"
            - name: First sleep appointment with your doctor
              description: |-
                ## Purpose
                Ten minutes with a family doctor decides whether you get a sleep study, a therapy referral, blood tests or a wait-and-see. Arriving with the diary, the questionnaire scores, the recordings and a short list of what the tiredness is costing you at work and at home makes it far more likely the appointment ends with a clear next step.

                ## Milestones
                1. The appointment booked, with a longer slot requested if the practice offers one.
                2. Diary summary, scores, recordings and current medicine list in one folder.
                3. The three questions that matter most written at the top of a page.
                4. The outcome written down: test, referral, treatment or review date.

                ## Notes
                Mention driving, falling asleep at work and any morning headaches plainly. These are the details that change how urgently a referral is made.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An appointment held with the prepared folder, and its outcome and next step recorded the same day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a doctor's appointment about your sleep and ask for a longer slot"
                - "Write the three questions you most need answered"
                - "Put the diary, scores, recordings and medicine list in one folder"
                - "Record the outcome and next step within an hour of leaving"
            - name: Drowsiness safety plan for driving and work
              description: |-
                ## Purpose
                Untreated sleep apnoea and narcolepsy raise the risk of crashes, and many licensing authorities expect drivers to report a diagnosis that causes excessive daytime sleepiness. Knowing the rule where you live, and agreeing a simple personal rule about when you do not drive or operate machinery, protects you, other people and your insurance.

                ## Milestones
                1. The licensing authority's guidance for your condition read, for example the DVLA's in the UK.
                2. A decision recorded on whether you need to notify them, and when.
                3. A personal no-drive rule written down for days of sleepiness.
                4. Workplace tasks involving driving, heights or machinery reviewed with your manager if needed.

                ## Notes
                Rules often differ between private and professional licences. Ask your clinician how they apply to you if the wording is unclear.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written note of the licensing rule that applies, the notification decision taken, and a personal no-drive rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your licensing authority's guidance on sleep conditions and driving"
                - "Ask your doctor whether your symptoms mean you must notify them"
                - "Write your personal rule for days you will not drive"
                - "Check the licensing guidance again in case it has changed @recurring(yearly)"
            - name: Medicine review for drugs that disturb sleep
              description: |-
                ## Purpose
                Some common medicines keep people awake, cause vivid dreams, worsen restless legs or relax the airway enough to make apnoea worse: certain antidepressants, antihistamines, decongestants, steroids and sedatives among them. A pharmacist can check your full list against your symptoms in one short conversation, before you start adding new treatments on top.

                ## Milestones
                1. A complete list of prescribed, bought and herbal medicines with the times you take them.
                2. A pharmacist's or doctor's view recorded on which ones could affect sleep.
                3. Any change to timing or medicine agreed with the prescriber, not made alone.
                4. Over-the-counter sleep aids and antihistamines reviewed in the same conversation.

                ## Notes
                Never stop a prescribed medicine to see if sleep improves. Ask first: some need to be reduced slowly.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A medicine list reviewed by a pharmacist or doctor for sleep effects, with any agreed change written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every medicine, supplement and herbal remedy you take, with the time of day"
                - "Book a medicine review with a pharmacist and mention your sleep problem"
                - "Ask which items could worsen insomnia, restless legs or apnoea"
                - "Write down any timing change the prescriber agrees"
            - name: Sleep disorder records folder
              description: |-
                ## Purpose
                Over a few years a sleep disorder produces study reports, machine settings, mask sizes, specialist letters, prescriptions and questionnaire scores. Keeping them in one folder, paper or digital, means a new clinician, a replacement machine or a licensing form can be dealt with in minutes instead of weeks.

                ## Milestones
                1. One folder created with sections for studies, letters, equipment and medicines.
                2. Existing reports and letters collected and filed, newest first.
                3. A front page listing diagnosis, date, machine model, pressure prescription and mask size.
                4. New paperwork filed within a week of arriving.

                ## Notes
                Ask for a copy of every sleep study report, not just the letter. The full report holds the numbers future clinicians want.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder holding every sleep study, letter and equipment detail, with a one-page summary at the front."
                cadence: rolling
              tasks:
                - "Create a folder with sections for studies, letters, equipment and medicines"
                - "Request a full copy of your sleep study report from the clinic"
                - "Write a one-page summary of diagnosis, machine and mask details"
                - "File any new letters, reports and prescriptions @recurring(quarterly)"
            - name: First thirty nights on CPAP
              description: |-
                ## Purpose
                Whether CPAP becomes a lifelong habit is largely decided in the first month, when mask discomfort, dry mouth and the strangeness of the airflow make it tempting to pull it off at 2am. Treating the first thirty nights as a deliberate settling-in period, with problems logged and raised quickly, gets most people past the point where they would otherwise give up.

                ## Milestones
                1. The mask worn for part of every night from the first night, even if not all night.
                2. Problems logged as they happen: leaks, dryness, bloating, pressure, waking.
                3. The sleep team contacted within the first two weeks about anything not improving.
                4. Nightly use reaching the level the sleep team asked for by night thirty, or a plan agreed if not.

                ## Notes
                Wearing the mask for half an hour while reading or watching television in the evening helps the face and the brain get used to it before bedtime.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty nights completed with a log of problems raised, and average nightly use recorded from the machine data."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Wear the mask for half an hour while awake this evening"
                - "Start a short log of comfort problems and what helped"
                - "Phone the sleep team about any problem lasting more than a week"
                - "Read the thirty-night usage average from the machine app"
            - name: Weekly CPAP data check
              description: |-
                ## Purpose
                Most modern CPAP machines record hours of use, mask leak and the residual apnoea index every night, and sleep teams often see the same data remotely. A five-minute weekly look catches a creeping leak, a worn cushion or a slide in usage weeks before the annual review would.

                ## Milestones
                1. The machine's app or online account set up and linked to the machine.
                2. Three numbers chosen to watch: usage hours, leak and residual events per hour.
                3. The ranges your sleep team wants to see noted.
                4. A weekly check done for eight weeks in a row, with anything unusual written down.

                ## Notes
                Start from the **Metrics log** template. The residual index shown by the machine is an estimate; a rising trend matters more than any single night.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly entries of usage, leak and residual events, with any action taken noted."
                cadence: rolling
              tasks:
                - "Install the machine's app and pair it with your CPAP"
                - "Ask the sleep team what leak and residual index figures they want to see"
                - "Review the week's usage, leak and residual events and log them @recurring(weekly:sun)"
            - name: CPAP mask, filter and tubing replacement schedule
              description: |-
                ## Purpose
                Mask cushions soften and leak, filters clog and tubing cracks, and each one quietly reduces how well the treatment works. A replacement schedule matched to the manufacturer's guidance and to whatever your health service or insurer will fund keeps the kit working without waiting for it to fail at night.

                ## Milestones
                1. Replacement intervals for cushion, mask frame, headgear, filter and tubing written down.
                2. The supply route confirmed: clinic, insurer, supplier or self-funded.
                3. Spare filters and one spare cushion kept at home.
                4. Each replacement dated in the records folder.

                ## Notes
                Insurers and health services often fund replacements only at set intervals. Ordering on the first eligible day avoids gaps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written replacement schedule in use, with each part replaced on time for six months running."
                cadence: rolling
              tasks:
                - "Write down the replacement interval for each CPAP part from the manual"
                - "Confirm how replacements are supplied and funded"
                - "Replace the CPAP air filter @recurring(monthly:12)"
                - "Inspect the mask cushion and order a new one if it is worn @recurring(quarterly)"
            - name: CPAP cleaning routine
              description: |-
                ## Purpose
                Skin oil on the cushion breaks the seal, and a humidifier tank left with old water grows a film you do not want to breathe through. A daily empty-and-dry of the tank and a weekly wash in mild soapy water, done on a fixed day, keeps the mask sealing and the air clean, and costs far less than the gadgets sold for the job.

                ## Milestones
                1. The manufacturer's cleaning instructions read and the approved products noted.
                2. A daily habit of emptying the humidifier and leaving it to air-dry.
                3. A fixed weekly day for washing cushion, tube and tank.
                4. Eight weeks of weekly washes done without a miss.

                ## Notes
                Check the manual before buying sanitising devices: some manufacturers say ozone cleaners can damage parts or affect the warranty.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly wash of mask, tube and tank done for eight weeks in a row, following the manufacturer's instructions."
                cadence: rolling
              tasks:
                - "Read the cleaning section of the CPAP and mask manuals"
                - "Set up a drying spot for the tube out of direct sunlight"
                - "Wash the mask cushion, tube and humidifier tank @recurring(weekly:sat)"
            - name: Annual sleep clinic review
              description: |-
                ## Purpose
                Pressure needs change with weight, age, new medicines and other conditions, and insomnia or restless legs treatment needs re-checking too. A yearly review, prepared with your data and questions, keeps treatment tuned and is often where problems you have learned to tolerate finally get fixed.

                ## Milestones
                1. The review month fixed and booked, or a reminder set to chase the clinic.
                2. Twelve months of usage data, a recent sleepiness score and questions prepared.
                3. Any change to settings, mask or medicine written down at the review.
                4. Next year's review date recorded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual review held with prepared data and questions, and its outcomes written down, two years running."
                cadence: cyclic
              tasks:
                - "Book or chase the annual sleep clinic review @recurring(yearly)"
                - "Export a year of machine data or bring the app summary"
                - "Fill in the Epworth questionnaire the week before the review"
                - "Write down every change agreed at the review"
            - name: Fixed wake time every day of the week
              description: |-
                ## Purpose
                A fixed wake time, kept at weekends and after bad nights, is the anchor most insomnia treatment is built on. It steadies the body clock and builds sleep pressure for the following night, and it is the habit sleep therapists most often find people resist and most often find works.

                ## Milestones
                1. A wake time chosen that is realistic seven days a week.
                2. An alarm placed across the room, with daylight and breakfast straight after waking.
                3. The wake time kept on at least six days a week for four weeks.
                4. Weekend lie-ins limited and recorded.

                ## Notes
                Start from the **Habit tracker** template. If you are on a therapist-led programme, use the wake time they agree with you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The chosen wake time kept on at least 24 of 28 days, recorded in a tracker."
                cadence: rolling
              tasks:
                - "Choose a wake time you can keep on workdays and weekends"
                - "Move the alarm to the far side of the bedroom"
                - "Get up at the agreed wake time, even after a poor night @recurring(daily)"
            - name: Restless legs symptom and iron log
              description: |-
                ## Purpose
                Restless legs symptoms come and go with iron levels, medicines, caffeine, pregnancy and the time of year, and some treatments can make symptoms gradually worse over months, a pattern called augmentation. A weekly log of severity and timing, alongside the iron results your clinician orders, shows whether treatment is working or drifting.

                ## Milestones
                1. A simple weekly rating chosen, such as a score out of ten and the time symptoms start.
                2. Recent ferritin and iron results recorded, with the level your clinician is aiming for.
                3. Possible triggers noted alongside each week.
                4. Any shift to earlier start times or spread to the arms flagged to the clinician.

                ## Notes
                Symptoms starting earlier in the day than before can be a sign of augmentation. Report it rather than taking more medicine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of severity and timing ratings logged, with iron results recorded and reviewed with the clinician."
                cadence: rolling
              tasks:
                - "Choose a weekly rating and a time-of-onset column for the log"
                - "Record your most recent ferritin result and its date"
                - "Rate this week's restless legs symptoms and when they started @recurring(weekly:mon)"
                - "Ask the clinician when iron levels should be checked again"
            - name: Scheduled naps and medicine timetable for narcolepsy
              description: |-
                ## Purpose
                Short planned naps and well-timed medicines are the backbone of day-to-day narcolepsy management, but they only work if they fit around work, study and driving. A written timetable agreed with the sleep team, and kept consistently, reduces sleep attacks and makes it easier to explain your needs to employers and tutors.

                ## Milestones
                1. Nap times and lengths agreed with the sleep specialist.
                2. Medicine times written alongside naps, meals and driving.
                3. A quiet place to nap at work or college arranged.
                4. Two weeks of the timetable kept, with sleep attacks counted before and after.

                ## Notes
                Never change medicine timing without the prescriber: several narcolepsy medicines must be taken at strict times.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written nap and medicine timetable in use for at least two weeks, with sleep attacks counted."
                cadence: rolling
              tasks:
                - "Ask the sleep specialist how many naps to take and for how long"
                - "Write a weekday timetable of naps, medicines, meals and driving"
                - "Arrange a quiet place to nap at work or college"
                - "Take the planned midday nap @recurring(daily)"
            - name: Monthly sleep diary summary
              description: |-
                ## Purpose
                Once treatment starts, it is easy to lose sight of whether things are actually better. A monthly summary of average time asleep, night wakings and daytime sleepiness gives an honest answer, and three months of summaries is exactly what a clinician wants to see before changing anything.

                ## Milestones
                1. The few numbers to summarise chosen and fixed.
                2. A monthly summary written for three months running.
                3. Trends compared with the original two-week diary.
                4. Summaries kept in the records folder for the next review.

                ## Notes
                Keep the summary short: three numbers and one sentence beats a page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly summaries written and compared against the original baseline diary."
                cadence: rolling
              tasks:
                - "Choose the three numbers your monthly summary will track"
                - "Write the month's sleep summary from your diary or tracker @recurring(monthly:3)"
                - "Compare this month with your original two-week diary"
            - name: Repeat prescriptions for sleep medicines
              description: |-
                ## Purpose
                Running out of a narcolepsy, restless legs or insomnia medicine can mean rebound symptoms within a day or two, and some of these medicines are controlled drugs with stricter prescribing rules and shorter supplies. A fixed reorder rhythm, set well ahead of the last dose, takes the panic out of public holidays and pharmacy shortages.

                ## Milestones
                1. Each sleep medicine listed with its supply length and any controlled-drug rules.
                2. Reorder lead time agreed with the surgery and pharmacy.
                3. A reminder set to request repeats well before the last dose.
                4. A plan written for what to do if the pharmacy cannot supply.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months with no gap in any sleep medicine, each repeat requested before the last week of supply."
                cadence: rolling
              tasks:
                - "List each sleep medicine with how long one supply lasts"
                - "Ask the pharmacy how much notice they need for each item"
                - "Request the next repeat prescription for sleep medicines @recurring(monthly:24)"
                - "Write down what to do if a medicine is out of stock"
            - name: Reading your sleep study report
              description: |-
                ## Purpose
                A sleep study report is dense with abbreviations: AHI, ODI, lowest oxygen saturation, sleep efficiency, periodic limb movements, REM latency. Understanding what each one measures, and which numbers led to your diagnosis, turns the specialist conversation into a discussion rather than a lecture and helps you spot when later results change.

                ## Milestones
                1. A full copy of the report obtained.
                2. Each abbreviation on it looked up and written in plain words.
                3. The two or three numbers that drove the diagnosis identified.
                4. Questions about anything unclear asked at the clinic.

                ## Notes
                Severity bands differ slightly between guidelines. Ask the clinic which they use rather than comparing with charts found online.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plain-language glossary of your own sleep study results, with open questions answered by the clinic."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request the full sleep study report, not just the summary letter"
                - "List every abbreviation on the report"
                - "Ask the agent to explain each term in plain words, then check it against the clinic's leaflet"
                - "Take your questions about the report to the next appointment"
            - name: CPAP mask fitting and leak troubleshooting
              description: |-
                ## Purpose
                Leaks are the commonest reason CPAP stops working well: they cause noise, dry eyes and red marks, and they wake you or your partner. Learning to fit the mask lying down in your sleeping position, adjust the headgear lightly and recognise where a leak is coming from fixes most problems without a clinic visit.

                ## Milestones
                1. The mask fitted lying down, with the machine running, as the clinic showed.
                2. The three common leak causes checked: overtight straps, worn cushion, wrong size.
                3. Leak figures from the machine data compared before and after adjustments.
                4. A short list of the fixes that work for you written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Mask leak in the machine data brought within the range the clinic suggests, with the fixes that worked written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Watch the manufacturer's fitting video for your exact mask"
                - "Refit the mask lying in your usual sleeping position with the machine on"
                - "Loosen the headgear one notch and check the leak figure the next morning"
                - "Write down the fixes that reduced your leak"
            - name: Sleep restriction with a sleep window
              description: |-
                ## Purpose
                Sleep restriction is one of the most effective parts of cognitive behavioural therapy for insomnia: time in bed is cut back to match the time you actually sleep, then widened as sleep consolidates. It feels worse for a week or two before it gets better, which is why it works best with a therapist or structured programme setting the window.

                ## Milestones
                1. A starting window agreed with a therapist or programme, based on the diary.
                2. The window kept for a full week before any change.
                3. Sleep efficiency worked out weekly and the window widened as agreed.
                4. A final window reached that gives solid sleep with little time awake in bed.

                ## Notes
                Sleep restriction is not suitable for everyone, including people with bipolar disorder, epilepsy, untreated sleep apnoea or jobs where sleepiness is dangerous. Agree it with a clinician first and do not drive when sleepy.
              priority: high
              deadlineOffsetDays: 56
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A sleep window agreed, kept and adjusted weekly for at least six weeks, with sleep efficiency recorded each week."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your clinician or therapist whether sleep restriction is suitable for you"
                - "Agree a starting bedtime and wake time from your diary"
                - "Work out last week's sleep efficiency and agree any change to the window @recurring(weekly:fri)"
                - "Plan quiet evening activities that keep you awake until the window opens"
            - name: Stimulus control for a bed that means sleep
              description: |-
                ## Purpose
                After months of insomnia, the bed itself can become a cue for wakefulness and worry. Stimulus control rebuilds the link: go to bed only when sleepy, get up if sleep has not come in what feels like twenty minutes, and keep the bed for sleep and sex rather than phones, work or television.

                ## Milestones
                1. The rules written down and agreed with anyone you share a bed with.
                2. A warm, dim place set up to go to when you get up in the night.
                3. The rules followed on most nights for three weeks.
                4. Changes in how long it takes to fall asleep noted in the diary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Stimulus control rules followed on at least 15 of 21 nights, with time to fall asleep recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the stimulus control rules on a card by the bed"
                - "Set up a chair, low lamp and undemanding book in another room"
                - "Move the phone charger out of the bedroom"
                - "Note in the diary each night you got up and went back"
            - name: Handling night wakings without clock-watching
              description: |-
                ## Purpose
                Waking at 3am is normal; lying there calculating how many hours are left is what turns it into insomnia. A small set of rehearsed responses, such as turning the clock away, a scheduled worry time earlier in the evening and a calm way to get up, lowers the arousal that keeps people awake.

                ## Milestones
                1. Clocks and phones turned away or out of sight from the bed.
                2. A fifteen-minute worry time set for early evening, with a notebook.
                3. One wind-down technique practised in daytime until it feels familiar.
                4. A written plan for what to do on waking, kept by the bed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written night-waking plan by the bed and two weeks of evening worry time recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn the bedroom clock to face the wall"
                - "Set a fifteen-minute worry slot in the early evening with a notebook"
                - "Practise a slow breathing or body scan exercise in daytime"
                - "Write your night-waking plan on one card"
            - name: How sleeping tablets work and where they fall short
              description: |-
                ## Purpose
                Sleeping tablets can help in a crisis, but most are intended for short courses, lose effect with regular use and carry next-morning drowsiness and fall risks, especially in later life. Understanding what your prescription is meant to do, for how long, and what the plan is for stopping, lets you ask better questions and avoid drifting into years of use.

                ## Milestones
                1. The name, type and intended length of any sleep medicine you take written down.
                2. Next-morning effects on driving and alertness checked with the pharmacist.
                3. The plan for stopping or reviewing agreed with the prescriber.
                4. Non-drug treatments for insomnia discussed at the same appointment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of each sleep medicine's purpose, intended duration and review date, agreed with the prescriber."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the patient leaflet for any sleep medicine you take"
                - "Ask the pharmacist about next-morning effects on driving"
                - "Ask the prescriber when this medicine will be reviewed"
                - "Note the review date in the records folder"
            - name: Recognising cataplexy and sleep attacks
              description: |-
                ## Purpose
                Narcolepsy is often missed for years because cataplexy, a sudden loss of muscle tone set off by laughter or surprise, is mistaken for clumsiness or fainting. Learning what cataplexy, sleep paralysis, vivid hallucinations at sleep onset and sleep attacks look like, and logging episodes, gives a specialist the history that diagnosis depends on.

                ## Milestones
                1. The main narcolepsy symptoms read about from a specialist charity or clinic source.
                2. Two weeks of episodes logged with time, trigger and what happened.
                3. A family member's or friend's description of any cataplexy episode recorded.
                4. The log shared with the doctor or sleep specialist.

                ## Notes
                With your permission, someone else can film an episode. A short clip helps a specialist more than a description.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-week episode log with witness descriptions, shared with a doctor or sleep specialist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a narcolepsy charity's guide to cataplexy and sleep paralysis"
                - "Start an episode log with time, trigger and what happened"
                - "Ask someone close to describe or film an episode if one occurs"
                - "Bring the episode log to your next appointment"
            - name: Restless legs triggers and non-drug relief
              description: |-
                ## Purpose
                Before or alongside medicine, many people with restless legs find their symptoms shift with caffeine, alcohol, some antihistamines and antidepressants, long periods sitting, and iron levels. A structured month of testing likely triggers and simple relief measures such as walking, stretching and leg massage shows what helps you specifically.

                ## Milestones
                1. A list of suspected triggers made from the diary and medicine list.
                2. One trigger changed at a time for a week, with symptoms rated.
                3. Two or three relief measures tried during symptoms and rated.
                4. A short personal list of what helps shared with the clinician.

                ## Notes
                Some cold and allergy remedies worsen restless legs. Check with a pharmacist before buying them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four weeks of one-at-a-time trigger tests with ratings, and a personal list of helpful measures."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List suspected triggers from your diary and medicines"
                - "Cut evening caffeine for one week and rate the symptoms"
                - "Try walking or calf stretches when symptoms start and rate the effect"
                - "Share your list of what helps with the clinician"
            - name: Choosing a CPAP mask style
              description: |-
                ## Purpose
                Nasal pillows, nasal masks and full-face masks suit different faces, mouth breathers, beards and sleeping positions, and the wrong one is behind many abandoned CPAP attempts. Trying at least two styles and judging them on leak, comfort and how you sleep makes a better choice than sticking with whatever was issued first.

                ## Milestones
                1. The three mask styles and who they suit understood.
                2. At least two styles trialled for several nights each.
                3. Each scored on leak, comfort, marks and noise.
                4. A preferred mask and size chosen and supplied.

                ## Notes
                Many clinics and suppliers will swap a mask in the first weeks. Ask before buying one yourself.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two mask styles compared on the same four criteria and a preferred mask chosen and in use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note whether you breathe through your mouth and how you usually sleep"
                - "Ask the clinic or supplier which mask styles you can trial"
                - "Score each mask on leak, comfort, marks and noise"
                - "Record the chosen mask model and size in the records folder"
            - name: Buying or renting a CPAP machine
              description: |-
                ## Purpose
                Where the health service does not supply a machine, or you want a travel unit, the choice between buying, renting and insurer-funded options turns on price, data access, humidifier, noise and after-sales support. A side-by-side comparison avoids paying for features you will not use or a machine your clinic cannot read.

                ## Milestones
                1. The prescription and any required features confirmed with the clinic.
                2. Three options compared on cost, data access, noise, warranty and support.
                3. Funding checked with your insurer or health service.
                4. A machine bought, rented or confirmed as supplied, with the warranty filed.

                ## Notes
                Start from the **Purchase decision** template. Avoid second-hand machines unless the clinic can check and set them for your prescription.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three options and a recorded decision, with the warranty and receipt filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the clinic which machine features your prescription needs"
                - "Check whether your insurer or health service funds a machine"
                - "Compare three options on cost, data, noise, warranty and support"
                - "File the receipt and warranty in the records folder"
            - name: Mandibular advancement device as an alternative to CPAP
              description: |-
                ## Purpose
                For mild to moderate sleep apnoea, or for people who cannot tolerate CPAP, a custom mouthpiece that holds the lower jaw forward is a recognised option. It needs a dentist with sleep training, a fitting period and a follow-up sleep test to prove it works, so it is a project of months rather than a purchase.

                ## Milestones
                1. The sleep specialist's view recorded on whether a device suits your apnoea.
                2. A dentist with sleep apnoea experience found and a fitting booked.
                3. The device adjusted over several weeks until comfortable.
                4. A follow-up sleep test done with the device in place.

                ## Notes
                Shop-bought boil-and-bite snoring guards are not the same thing. Without a follow-up test you cannot know whether a device is treating the apnoea.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision recorded with the specialist and, if pursued, a follow-up sleep test showing the device's effect."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your sleep specialist whether a mandibular device suits your apnoea"
                - "Find a dentist with sleep apnoea training and ask about costs"
                - "Book the follow-up sleep test once the device is adjusted"
                - "Book a dentist check of the device and your bite @recurring(yearly)"
            - name: Positional therapy for back-sleeping apnoea
              description: |-
                ## Purpose
                In some people apnoea is much worse lying on their back, and the sleep study report shows this as a difference between supine and non-supine events. If yours does, a positional device or vibrating trainer may reduce events enough to help, alone or alongside other treatment, as long as a test shows it works.

                ## Milestones
                1. The study report checked for a back versus side difference.
                2. The specialist's view recorded on whether positional therapy is worth trying.
                3. A device or trainer used nightly for four weeks.
                4. Its effect checked with a repeat test or machine data.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A four-week positional therapy trial completed and its effect reviewed with the specialist."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the supine and non-supine figures on your study report"
                - "Ask the specialist whether positional therapy is worth a trial"
                - "Use the positional device every night for four weeks and note comfort"
                - "Ask how the effect of the trial will be checked"
            - name: Coming off long-term sleeping tablets
              description: |-
                ## Purpose
                Many people take sleeping tablets for years after being started on them for a short spell, and stopping suddenly can cause rebound insomnia and withdrawal effects. A gradual reduction planned with your doctor, paired with insomnia therapy, gives the best chance of sleeping as well or better without them.

                ## Milestones
                1. A reduction plan agreed with the prescriber, with step dates written down.
                2. Insomnia therapy started before or alongside the reduction.
                3. Sleep and withdrawal effects noted in the diary at each step.
                4. The final step reached, or the plan paused and reviewed with the doctor.

                ## Notes
                Do not reduce faster than agreed. If withdrawal effects are strong, the usual answer is to slow down with the doctor's help, not to abandon the plan.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written reduction plan agreed with the prescriber, with every step and its effect recorded until completed or reviewed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book an appointment to discuss reducing your sleeping tablets"
                - "Write the agreed reduction steps and dates on one page"
                - "Start insomnia therapy before the first reduction step"
                - "Note sleep and any withdrawal effects at each step"
            - name: Choosing a route into CBT for insomnia
              description: |-
                ## Purpose
                Cognitive behavioural therapy for insomnia is the first-line treatment in most guidelines, ahead of tablets, and it comes in several forms: digital programmes, group courses, one-to-one therapists and structured books. Comparing what is available to you on cost, wait, format and evidence gets you started in weeks rather than months.

                ## Milestones
                1. Options available through your doctor, health service or insurer listed.
                2. Each compared on cost, wait, format and published evidence.
                3. The route that fits your schedule and budget chosen.
                4. The first session booked or the programme started.

                ## Notes
                Check that any app or programme is specifically CBT for insomnia delivered over several weeks, not a general relaxation or sleep sounds app.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A route into CBT for insomnia chosen from at least three compared options, with the first session booked or started."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor which CBT for insomnia options they can refer you to"
                - "Look up digital programmes with published trial evidence"
                - "Compare three options on cost, wait and format"
                - "Book the first session or start the programme"
            - name: CPAP comfort fixes for dryness, bloating and pressure
              description: |-
                ## Purpose
                Dry mouth, a blocked nose, swallowed air and the feeling of too much pressure when breathing out are common and usually fixable. Heated humidification, a ramp setting, exhale pressure relief, a chin strap or a different mask can all help, but the settings belong to your sleep team, so the work is noticing, recording and asking.

                ## Milestones
                1. Each comfort problem written down with when it happens.
                2. The settings your patient menu allows checked against the manual.
                3. The sleep team contacted with the list and any setting changes agreed.
                4. A two-week check done on whether the changes helped.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every recorded comfort problem raised with the sleep team, with agreed changes tried and reviewed after two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down each comfort problem and when it happens"
                - "Check which comfort settings the patient menu lets you change"
                - "Send the list to the sleep team and ask what to adjust"
                - "Review after two weeks whether each problem has improved"
            - name: Home sleep apnoea test night
              description: |-
                ## Purpose
                Home sleep tests use a small recorder with a finger probe, nasal tube and chest belt, and a single badly fitted sensor can mean repeating the test weeks later. Preparing the night properly, following the clinic's instructions exactly and noting anything unusual gives a usable result the first time.

                ## Milestones
                1. The kit collected or delivered and the instructions read the day before.
                2. A typical night planned: usual bedtime, and alcohol or sleeping tablets only as the clinic advises.
                3. The kit worn as instructed, with wake times and any sensor that came off noted.
                4. The kit returned and the results appointment booked.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A home sleep test completed on the first attempt, returned on time, with a results appointment booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the test instructions the day before and ask the clinic about anything unclear"
                - "Practise putting the sensors on before bed"
                - "Write down bedtime, wake time and any sensor that slipped"
                - "Return the kit and book the results appointment"
            - name: Overnight sleep study in a sleep lab
              description: |-
                ## Purpose
                Polysomnography records brain waves, breathing, oxygen, heart rhythm and leg movements overnight in a sleep lab, and is used when a home test is inconclusive or narcolepsy, parasomnias or limb movements are suspected. Knowing what happens and packing as for a night away makes it more likely you sleep enough for a useful result.

                ## Milestones
                1. Date, arrival time and instructions about medicines and caffeine confirmed.
                2. An overnight bag packed with usual nightwear, pillow and any CPAP kit.
                3. The night completed, with notes on how it compared with a normal night.
                4. A results appointment booked before leaving.

                ## Notes
                Tell the technician in the morning if you slept much worse than usual. They can note it on the report.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A lab sleep study attended, with a note on how typical the night was and a results appointment booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the date and ask which medicines to take or pause beforehand"
                - "Pack nightwear, your own pillow and any CPAP equipment"
                - "Write down how the night compared with a normal one"
                - "Book the results appointment before you leave the lab"
            - name: Daytime nap test for suspected narcolepsy
              description: |-
                ## Purpose
                The multiple sleep latency test measures how quickly you fall asleep across five daytime nap opportunities, usually the day after an overnight study. Results can be distorted by too little sleep beforehand or by some medicines, so the weeks before the test matter as much as the day itself.

                ## Milestones
                1. Written instructions from the specialist about which medicines to continue or pause.
                2. Two weeks of regular sleep recorded with a sleep diary or wrist tracker.
                3. Food, activities and transport planned for a long day at the clinic.
                4. The results appointment booked.

                ## Notes
                Do not stop any medicine to prepare for this test unless the specialist has told you to, and how.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A nap test attended after two weeks of recorded regular sleep, with medicine instructions followed and results booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the specialist for written instructions about your medicines before the test"
                - "Keep a sleep diary for the two weeks before the test"
                - "Arrange transport home, since you may be too sleepy to drive"
                - "Pack food, a book and a phone charger for the day"
            - name: CPAP set-up appointment
              description: |-
                ## Purpose
                The appointment where you collect the machine is your best chance to get the right mask, learn the controls and ask what good data looks like. Going in with written questions, and trying the mask lying down rather than sitting up, prevents most of the problems people struggle with alone in the first week.

                ## Milestones
                1. Questions written in advance about masks, settings, data and cleaning.
                2. The mask tried lying down with the machine running.
                3. Contact details for the sleep team and the equipment supplier saved.
                4. Machine model, pressure prescription and mask size recorded in the folder.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The machine collected with the mask fitted lying down, contacts saved and settings recorded in the records folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your questions about masks, data and cleaning before the appointment"
                - "Ask to try the mask lying down with the machine running"
                - "Save the sleep team and supplier contact details in your phone"
                - "Record the machine model, mask size and settings in the folder"
            - name: Flying and travelling with a CPAP machine
              description: |-
                ## Purpose
                Most airlines treat CPAP as a medical device that can be carried in addition to cabin bags, but rules on in-flight use, power and batteries vary. Checking a few weeks ahead, with a doctor's letter and the right plug adaptor, avoids a night without treatment or a machine damaged in the hold.

                ## Milestones
                1. The airline's policy on carrying and using CPAP checked and saved.
                2. A letter from the sleep team or doctor packed with the machine.
                3. Power, adaptor and water arrangements made for the destination.
                4. The machine carried in the cabin rather than checked in.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip completed with the CPAP used every night, after checking airline policy and packing a doctor's letter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the airline's medical device policy for CPAP"
                - "Ask the sleep team for a letter confirming you need the machine"
                - "Pack a plug adaptor and check the destination voltage"
                - "Label the CPAP bag as a medical device for the cabin"
            - name: Hospital stay or anaesthetic with sleep apnoea
              description: |-
                ## Purpose
                Anaesthetics, strong painkillers and sedatives can make sleep apnoea worse, so anaesthetists want to know about it and usually want your machine with you. Telling the pre-operative team early and packing the CPAP for any overnight stay is a small step with a real safety benefit.

                ## Milestones
                1. Sleep apnoea and CPAP use noted on the pre-operative questionnaire.
                2. The anaesthetist's plan for your machine confirmed.
                3. The CPAP labelled with your name and packed for the stay.
                4. The ward told about the machine on arrival.

                ## Notes
                If you think you might have apnoea but have not been tested, mention the snoring and sleepiness to the pre-operative team anyway.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A hospital stay or procedure completed with the anaesthetic team informed and the CPAP used as planned."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write sleep apnoea and CPAP use on the pre-operative questionnaire"
                - "Ask the anaesthetist whether to bring your machine"
                - "Label the machine, mask and power lead with your name"
                - "Remind the ward staff about the machine when you arrive"
            - name: Shift work and sleep disorder treatment
              description: |-
                ## Purpose
                Night and rotating shifts collide with almost every sleep treatment: CPAP has to be used for day sleep too, sleep windows move with the rota, and narcolepsy timetables need rewriting each week. Planning sleep around each new rota, with the sleep team's input, keeps treatment working when the hours keep changing.

                ## Milestones
                1. The sleep team told about your shift pattern and its advice recorded.
                2. Main sleep and nap times planned for day, evening and night shifts.
                3. Blackout, noise and CPAP arrangements in place for daytime sleep.
                4. A drowsy driving plan for the commute home after nights.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sleep, CPAP and commute plans written for each shift type and applied to at least one full rota."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tell the sleep team your shift pattern and ask how to adapt treatment"
                - "Write a sleep plan for each type of shift"
                - "Fit blackout blinds or use an eye mask for daytime sleep"
                - "Plan sleep and CPAP times for the next rota once it is published @recurring(monthly:26)"
            - name: Restless legs in pregnancy
              description: |-
                ## Purpose
                Restless legs often appear or worsen in pregnancy, especially in the third trimester, partly because of lower iron. Many restless legs medicines are not used in pregnancy, so the work is checking iron, adjusting habits and planning with the midwife or obstetrician rather than reaching for treatment alone.

                ## Milestones
                1. Symptoms described to the midwife or doctor and iron tests arranged if advised.
                2. Every current medicine and supplement checked for safety in pregnancy.
                3. Simple relief measures tried in the evenings and rated.
                4. A note made to review symptoms after the birth, when they usually ease.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Symptoms reviewed with the midwife or doctor, iron checked if advised, and a written plan for the rest of pregnancy."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Describe your restless legs symptoms to the midwife at the next visit"
                - "Ask whether your iron levels should be checked"
                - "Check every medicine and supplement with the pharmacist for pregnancy safety"
                - "Note which evening relief measures help"
            - name: Helping an older parent keep using CPAP
              description: |-
                ## Purpose
                Older adults with arthritis, hearing loss, dentures or memory problems often struggle with mask straps, settings and cleaning, and quietly stop using the machine. A helper who checks the data weekly, simplifies the routine and knows who to call can keep the treatment going, always with the person's permission.

                ## Milestones
                1. Permission given to see the machine data or help with the routine.
                2. A mask and headgear chosen that can be fitted with stiff hands.
                3. A simple large-print routine kept by the bed.
                4. A weekly check of usage and leak, with problems passed to the sleep team.

                ## Notes
                Taking dentures out at night can change mask fit. Ask the clinic about mask options for people who remove them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Weekly usage checks done for two months with the person's permission, and any problems raised with the sleep team."
                cadence: rolling
              tasks:
                - "Ask your parent for permission to help with the CPAP routine and data"
                - "Write a large-print routine for putting the mask on and cleaning it"
                - "Ask the clinic about masks that are easier for stiff hands"
                - "Check the machine data and mask fit with them @recurring(weekly:wed)"
            - name: Supporting a partner through sleep treatment
              description: |-
                ## Purpose
                Sharing a bed means sharing the disorder: snoring before diagnosis, mask noise or leaks after, or someone getting up in the night during insomnia therapy. Agreeing together how you will handle the first months makes the treatment easier to stick with and protects both people's sleep.

                ## Milestones
                1. A conversation held about what each person needs at night.
                2. A plan agreed for mask noise, leaks and getting up at night.
                3. Separate sleeping arranged temporarily if needed, without blame.
                4. A check-in after a month on how both people are sleeping.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A night-time plan agreed by both partners and reviewed together after one month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Talk with your partner about how the treatment affects their sleep"
                - "Agree what to do about mask noise or leaks at night"
                - "Decide where the person getting up in the night will go"
                - "Set a date a month from now to talk about how it is going"
            - name: Exams and studies with narcolepsy
              description: |-
                ## Purpose
                Students with narcolepsy or idiopathic hypersomnia may be entitled to adjustments such as rest breaks in exams, a nap room, recorded lectures and extensions, but only once the institution has the evidence. Getting the specialist letter and a support plan in place early in the academic year avoids a scramble before exams.

                ## Milestones
                1. A specialist letter describing the condition and its effects obtained.
                2. A meeting held with the disability or student support service.
                3. Agreed adjustments written into a support plan.
                4. Nap and medicine slots built into the term timetable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written support plan with agreed adjustments in place before the next exam period."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the sleep specialist for a letter describing your condition and needs"
                - "Book a meeting with the disability or student support service"
                - "Ask for the agreed adjustments in writing"
                - "Update the timetable with nap and medicine slots for the new term @recurring(quarterly)"
            - name: Workplace adjustments for a sleep disorder
              description: |-
                ## Purpose
                Untreated or partly treated sleep disorders affect concentration, driving duties and early starts, and many employers will make reasonable adjustments if asked clearly. Deciding what to share, what to ask for and how to put it in writing gets you a fair arrangement without oversharing medical detail.

                ## Milestones
                1. What you are willing to disclose decided.
                2. Specific adjustments listed, such as start times, breaks or driving duties.
                3. A meeting held with your manager or occupational health.
                4. Agreed adjustments confirmed in writing with a review date.

                ## Notes
                Employment protections differ by country. An occupational health assessment often makes adjustments easier to agree.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Workplace adjustments agreed and confirmed in writing, with a review date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide how much about your condition you want to share at work"
                - "List the adjustments that would make the most difference"
                - "Ask the agent to draft a short, factual request to your manager"
                - "Put the agreed review date in your calendar"
            - name: Child's loud snoring and paused breathing
              description: |-
                ## Purpose
                Children who snore loudly most nights, breathe through their mouth or pause and gasp in sleep may have obstructive sleep apnoea, often linked to enlarged tonsils or adenoids. In children it can show up as behaviour, concentration or bedwetting problems rather than sleepiness, so a parent's recordings and observations matter.

                ## Milestones
                1. A week of observations recorded: snoring nights, pauses, mouth breathing, restless sleep.
                2. A short audio or video clip taken of a typical night.
                3. Daytime behaviour, school concerns and bedwetting noted.
                4. The child seen by a doctor and the next step written down.

                ## Notes
                Any child who struggles to breathe, turns blue or is very hard to wake needs urgent medical help, not a recording.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A week of observations and a recording shown to a doctor, with the outcome written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note each night this week whether your child snores, pauses or mouth-breathes"
                - "Film or record a short clip of a typical night"
                - "Ask the school whether they have noticed tiredness or poor concentration"
                - "Book a doctor's appointment and bring the notes and clip"
            - name: Residual sleepiness despite good CPAP use
              description: |-
                ## Purpose
                Some people use CPAP every night with excellent data and are still sleepy. That deserves investigation rather than acceptance: the cause may be too little sleep, a second sleep disorder, low mood, medicines or residual sleepiness that has its own treatments, and the specialist needs good evidence to tell them apart.

                ## Milestones
                1. Three months of usage data showing consistent use collected.
                2. Sleepiness scores tracked to show the problem is persistent.
                3. Total sleep time and other possible causes reviewed with the specialist.
                4. Further tests or treatment options agreed and written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Persistent sleepiness documented with three months of data and scores, and a specialist plan recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Export three months of CPAP usage data"
                - "Repeat the sleepiness questionnaire and add it to the trend @recurring(quarterly)"
                - "Book a specialist review about ongoing sleepiness"
                - "Write down each further test or option discussed"
            - name: Surgery and implant options when CPAP fails
              description: |-
                ## Purpose
                If CPAP and mouthpieces have genuinely been tried and failed, specialist centres may consider upper airway surgery, nasal surgery to make CPAP easier, or a hypoglossal nerve stimulator implant for selected people. These need assessment by an ear, nose and throat or sleep surgery team, often including a sleep endoscopy, so the project is about getting the right referral and asking the right questions.

                ## Milestones
                1. A record of what has been tried, for how long and why it failed.
                2. Referral to an ear, nose and throat or sleep surgery team discussed with the specialist.
                3. Eligibility criteria for each option understood.
                4. A decision recorded after assessment, with risks and expected benefit written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A specialist assessment of surgical or implant options completed and a decision recorded with risks and expected benefit."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a summary of every treatment tried, for how long and why it failed"
                - "Ask your sleep specialist whether a surgical assessment is appropriate"
                - "List questions about risks, recovery and success rates for the surgeon"
                - "Record the outcome of the assessment and your decision"
            - name: REM sleep behaviour disorder safety and follow-up
              description: |-
                ## Purpose
                Acting out dreams by shouting, punching or leaping from bed can injure the sleeper and their partner. REM sleep behaviour disorder needs a sleep study to confirm it, a safer bedroom in the meantime, and long-term follow-up, because it can be an early sign of some neurological conditions that specialists now monitor for.

                ## Milestones
                1. Episodes described by a bed partner and logged.
                2. The bedroom made safer: padding, a lower bed, sharp objects and lamps moved.
                3. A sleep study arranged to confirm the diagnosis.
                4. Regular follow-up with the sleep or neurology team in place.

                ## Notes
                Sleeping apart for a while is a sensible safety step, not a judgement on the relationship.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A safer bedroom set up, the diagnosis confirmed or ruled out by a sleep study, and a follow-up schedule agreed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your bed partner to note episodes and what happened"
                - "Move bedside tables, lamps and sharp objects away from the bed"
                - "Ask your doctor about a referral for a sleep study"
                - "Book the sleep or neurology follow-up @recurring(yearly)"
            - name: Delayed body clock and circadian rhythm disorders
              description: |-
                ## Purpose
                Delayed sleep phase disorder, common in teenagers and young adults, means being unable to fall asleep until the early hours and struggling to wake, which is easily mistaken for insomnia or laziness. Treatment centres on carefully timed light and sometimes melatonin under a clinician's guidance, so getting the timing right matters more than the method.

                ## Milestones
                1. Two weeks of free-schedule sleep times recorded, such as during a holiday.
                2. A clinician's assessment of whether this is a body clock disorder.
                3. A timed light or medicine plan agreed with the clinician.
                4. Wake time moved earlier in agreed steps, with progress recorded.

                ## Notes
                Timing is everything with light and melatonin: the wrong time can shift the clock the wrong way. Get the schedule from a clinician.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A body clock assessment completed and a timed plan followed for four weeks, with wake times recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Record sleep and wake times during a period without an alarm"
                - "Ask your doctor whether a body clock disorder could explain your pattern"
                - "Write the agreed light and medicine timings on one page"
                - "Note the actual wake time each day of the plan"
            - name: Five-year review of sleep treatment
              description: |-
                ## Purpose
                Long-term treatment drifts: machines are replaced, pressure needs change, insomnia returns in stressful years and new medicines arrive. Looking back over five years of data, letters and diaries shows what has held, what has slipped and what to raise with the specialist next.

                ## Milestones
                1. Usage, pressure, sleepiness scores and diary summaries pulled together for the period.
                2. Changes in machine, mask, medicine and life circumstances listed with dates.
                3. Two or three trends identified, good or bad.
                4. A one-page summary taken to the next specialist review.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of five years of sleep treatment trends shared at a specialist review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather five years of machine data, letters and diary summaries"
                - "List every change in equipment, medicine and circumstance with its date"
                - "Ask the agent to summarise the trends into one page"
                - "Bring the summary to the next specialist review"
---

# Sleep Disorder Treatment

This area is for anyone whose nights are disrupted by snoring and breathing pauses, insomnia that will not shift, restless legs or overwhelming daytime sleepiness, and for the people who share their bed or home. It starts with the foundations (a sleep diary, questionnaire scores, recordings, a well-prepared first appointment and a drowsy driving plan), then the routines that keep CPAP and other treatment working, the skills of insomnia therapy and reading your own results, decisions about masks, mouthpieces and tablets, the sleep studies and appointments to prepare for, situations such as shift work, pregnancy, study and caring, and finally the specialist work for when first-line treatment falls short.

What repeats is a weekly look at CPAP data and a weekly wash of the kit, monthly filter changes and diary summaries, a daily fixed wake time, quarterly checks of sleepiness and supplies, and the annual sleep clinic review. The Sleep review, Metrics log, Habit tracker and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
