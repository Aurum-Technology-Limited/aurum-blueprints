---
id: physical-health.menstrual-health-endometriosis
name: Menstrual Health & Endometriosis
description: "Cycle and symptom records clinicians can act on, a clear route to diagnosis for endometriosis or PCOS, and treatment routines and reviews for heavy or painful periods."
category: personal
version: 1.0.0
tags: [physical-health, menstrual-health-endometriosis, everyone, student, endometriosis, pcos, heavy-periods, cycle-tracking]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - meeting-notes
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Menstrual Health & Endometriosis
          description: "Tracking cycles and symptoms, seeking diagnosis for endometriosis or PCOS, and managing heavy or painful periods with clinicians, for anyone who menstruates."
          projects:
            - name: Choosing how to track your cycle
              description: |-
                ## Purpose
                Period apps, a paper diary and a spreadsheet all work, but they differ in what they record, where your data goes and how easily you can show a clinician. Deciding once, with privacy settings checked and an export tested, means the next three months of records end up somewhere you can actually use them.

                ## Milestones
                1. Two or three tracking options compared on what they record, export and share.
                2. The privacy policy of any app checked for data selling, cloud storage and deletion.
                3. One method chosen that records bleeding, pain and other symptoms by date.
                4. A sample week exported or photographed in a form a clinician could read.

                ## Notes
                Choose whatever you will keep using on a bad day. A simple method used daily beats a detailed one abandoned after a fortnight.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tracking method is chosen, its privacy settings are checked, and a sample week has been exported or photographed in a readable form."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what you want to record: bleeding, pain, mood, bowel and bladder symptoms"
                - "Compare two period apps with a paper or spreadsheet option"
                - "Read the privacy settings of any app before entering data"
                - "Export or photograph one sample week to check it is readable"
            - name: Daily cycle and pain log
              description: |-
                ## Purpose
                Memory is unreliable about pain: a bad day three weeks ago blurs into an average. A thirty-second entry each evening, covering bleeding, a pain score and anything that stopped you doing something, builds the record that gets symptoms taken seriously.

                ## Milestones
                1. A log with columns for date, cycle day, flow, pain score, painkillers taken and notes.
                2. An evening reminder set at a time you are reliably free.
                3. Entries made on at least 25 days of the month, including days with no symptoms.
                4. Three complete cycles logged without gaps longer than two days.

                ## Notes
                Start from the **Metrics log** template. Log the good days too; a record that only shows bad days looks like constant pain.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive cycles logged, with entries on at least 25 days in each month."
                cadence: rolling
              tasks:
                - "Create the log with columns for flow, pain score, painkillers and notes"
                - "Set an evening reminder for the log at a time you are usually free"
                - "Log today's bleeding, pain score and anything you had to cancel @recurring(daily)"
            - name: Three-cycle symptom baseline
              description: |-
                ## Purpose
                Clinicians usually want to see a pattern over at least three cycles before deciding how to investigate, and a summary saves ten minutes of a ten-minute appointment. Turning your daily log into one page of cycle lengths, heaviest days, pain days and days missed gives them that pattern at a glance.

                ## Milestones
                1. Three full cycles recorded, each from the first day of bleeding to the day before the next.
                2. Cycle length, bleeding days and heaviest days listed for each cycle.
                3. Pain days, worst pain score and days missed from study or work counted.
                4. A one-page summary printed or saved to bring to appointments.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary of three consecutive cycles, with lengths, heavy days, pain days and days missed, ready for an appointment."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark the first day of your next period as cycle day one"
                - "Count cycle length, bleeding days and pain days at the end of each cycle"
                - "Note days missed from study, work or plans in each cycle"
                - "Write the three cycles up on one page with the averages"
            - name: Measuring how heavy your bleeding is
              description: |-
                ## Purpose
                Heavy is hard to judge when your own periods are the only ones you know. Counting products, noting how often you change them overnight, and recording flooding or clots larger than a coin turns a vague sense of heaviness into facts a clinician can compare with what they usually see.

                ## Milestones
                1. The number and absorbency of products used each day recorded for one period.
                2. Night-time changes, flooding through clothes and clot size noted.
                3. A pictorial bleeding chart completed for one period, if your clinician uses one.
                4. Tiredness or breathlessness on stairs noted alongside the bleeding record.

                ## Notes
                Changing a pad or tampon every hour or two, bleeding for more than about seven days, or flooding through to clothes are often described as signs of heavy bleeding. Ask your clinician which measures they use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One full period recorded with product counts, night changes, flooding and clot size, ready to show a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the absorbency of the products you usually use"
                - "Count products used each day through your next period"
                - "Record night changes, flooding and any clots larger than a coin"
                - "Ask your clinician whether they use a pictorial bleeding chart"
            - name: Describing pain in a way clinicians record
              description: |-
                ## Purpose
                A vague description of painful periods often gets the same reply it got last time. Describing pain by where it is, when in the cycle it starts, its score out of ten, what you tried and what it stopped you doing gives a clinician the details that separate ordinary cramps from something worth investigating.

                ## Milestones
                1. A pain scale chosen and used the same way in every log entry.
                2. Pain locations noted, including lower back, legs, bowel or bladder.
                3. Timing recorded: before bleeding, during, mid-cycle or after sex.
                4. Painkillers tried, and whether they helped, listed.
                5. A three-line pain description written for appointments.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written three-line pain description covering location, timing, score, painkillers tried and effect on daily life."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick a 0 to 10 pain scale and write what 3, 6 and 9 mean for you"
                - "Note where the pain sits during your next period, including back and legs"
                - "List every painkiller you have tried and whether it helped"
                - "Write a three-line description of your pain for appointments"
            - name: Period pain relief plan checked with a pharmacist
              description: |-
                ## Purpose
                Many people take painkillers too late, too irregularly or in combinations they have never checked. Agreeing a written plan with a pharmacist, covering which medicines suit you, when to start them and what to avoid with your other conditions, means the first heavy day starts with a plan rather than a search.

                ## Milestones
                1. Current medicines, allergies and conditions such as asthma or stomach problems listed.
                2. A pharmacist asked which over-the-counter options suit you and when to start them.
                3. Heat, rest and timing ideas added to the same page.
                4. A clear point written down for when pain means seeing a clinician instead.

                ## Notes
                The plan records your pharmacist's advice; it is not a dosing guide. Some anti-inflammatory painkillers are unsuitable with certain conditions, which is why the check matters.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page pain relief plan agreed with a pharmacist, listing suitable medicines, when to start them and when to seek a clinician."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List your current medicines, allergies and long-term conditions"
                - "Ask a pharmacist which period pain medicines suit you and when to start"
                - "Write the plan on one page and keep a copy with your period supplies"
                - "Note the pain level at which you will contact a clinician"
            - name: Urgent period symptoms card
              description: |-
                ## Purpose
                Some symptoms need same-day care rather than another painkiller: soaking through protection every hour for several hours, fainting or feeling faint, sudden severe pelvic pain, pain with a fever, or pain when you could be pregnant. A card written from your health service's guidance means you, or the people you live with, do not have to judge it in the moment.

                ## Milestones
                1. Your health service's guidance on urgent pelvic pain and heavy bleeding found.
                2. The signs and the numbers to call written on one card or phone note.
                3. The card shared with a housemate, partner or parent.
                4. Your clinician asked whether any personal warning signs apply to you.

                ## Notes
                Copy your health service's own wording; the card is a reminder of their advice, not a substitute for it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card listing urgent symptoms from your health service and the numbers to call, saved on your phone and shared with one other person."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's guidance on urgent pelvic pain and bleeding"
                - "Write the warning signs and numbers to call in one phone note"
                - "Show the note to someone you live with or a parent"
                - "Check the card against current guidance @recurring(yearly)"
            - name: Menstrual health history on one page
              description: |-
                ## Purpose
                Every new clinician asks the same questions: age at first period, how long cycles last, what has been tried, any pregnancies, and whether relatives have endometriosis or heavy bleeding. Having the answers on one page shortens appointments and stops important history being forgotten under pressure.

                ## Milestones
                1. Age at first period and how cycles have changed since written down.
                2. Past treatments, including hormonal ones, listed with dates and why they stopped.
                3. Relevant family history gathered from a parent or relative where possible.
                4. Previous scans, tests and diagnoses listed with dates.
                5. The page saved where it can be shared before appointments.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page menstrual health history with treatments, tests and family history, saved and ready to share."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your age at first period and how cycles have changed"
                - "List past treatments with dates and why each one stopped"
                - "Ask a parent or relative about endometriosis or heavy periods in the family"
                - "Add previous scans, tests and diagnoses with their dates"
            - name: First doctor's appointment about period problems
              description: |-
                ## Purpose
                A first appointment often decides whether you leave with investigations or with advice to keep a diary. Arriving with your three-cycle summary, your pain description and three clear questions makes it far more likely you leave with a plan, a test booked or a referral.

                ## Milestones
                1. The appointment booked, with a longer slot requested if one is available.
                2. Three-cycle summary, pain description and history page brought along.
                3. Questions asked about examination, blood tests, an ultrasound and possible causes.
                4. The agreed plan, tests ordered and next review date written down.

                ## Notes
                Start from the **Meeting notes** template. You can ask for a clinician of a particular gender, or bring someone with you.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The appointment is attended with summary and questions, and the agreed plan, tests and review date are written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a doctor's appointment specifically about your periods"
                - "Write the three questions you most need answered"
                - "Ask what tests or examinations would rule causes in or out"
                - "Note the plan and the date of the next review before leaving"
            - name: Irregular or missed periods check
              description: |-
                ## Purpose
                Periods that come months apart, stop altogether, or swing from three weeks to two months are worth raising, because causes range from stress and weight change to thyroid problems and PCOS. Ruling out pregnancy first and then bringing dated records to a clinician makes the right blood tests more likely on the first visit.

                ## Milestones
                1. A pregnancy test done if there is any chance of pregnancy.
                2. Dates of the last six periods, or as many as are known, written down.
                3. Changes in weight, exercise, stress, medicines, hair or skin noted.
                4. A clinician seen and the tests they ordered recorded.

                ## Notes
                Many clinicians want to hear about periods that have stopped for three months or more, even when you feel well.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Dates of recent periods and relevant changes are recorded and a clinician has reviewed them, with any tests ordered written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Take a pregnancy test if there is any chance of pregnancy"
                - "Write down the dates of your last six periods"
                - "Note changes in weight, training load, stress, hair or skin"
                - "Book a clinician appointment and record the tests ordered"
            - name: Monthly cycle review
              description: |-
                ## Purpose
                Logging without looking turns into a chore with no payoff. Ten minutes once a month to compare cycle length, heavy days and pain days with your baseline shows whether a treatment is working, whether things are getting worse, and when to call before the next routine review.

                ## Milestones
                1. A monthly slot fixed in the calendar.
                2. Cycle length, heavy days, pain days and days missed compared with the baseline.
                3. A rule agreed with your clinician for when a change is worth reporting.
                4. Six monthly reviews completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews, each comparing cycle length, heavy days and pain days with the baseline."
                cadence: rolling
              tasks:
                - "Ask your clinician what change between reviews should prompt a call"
                - "Compare this month's cycle, heavy days and pain days with your baseline @recurring(monthly:3)"
                - "Write one line on what changed since last month"
            - name: Week-ahead planning for expected period days
              description: |-
                ## Purpose
                Knowing your heavy or painful days are likely to land on Thursday changes how you plan Thursday. A short Sunday look at your tracker's prediction lets you move a long shift, pack supplies or keep an evening free, rather than being caught out.

                ## Milestones
                1. Your tracker's predicted dates checked against how accurate they have been.
                2. A weekly look at the coming seven days in the calendar.
                3. Supplies, pain relief and lighter plans arranged ahead of expected heavy days.
                4. Four weeks in a row with expected days planned for.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly checks in which expected heavy or painful days were planned for in the calendar."
                cadence: rolling
              tasks:
                - "Check how close your tracker's last three predictions were"
                - "Look at the coming week against your predicted period days @recurring(weekly:sun)"
                - "Move or lighten one demanding commitment on an expected heavy day"
            - name: Flare day plan for severe pain
              description: |-
                ## Purpose
                On the worst days it is hard to think clearly, so decisions made in advance help: what to take and when, who to message, what to cancel, and the point at which you go to urgent care. Writing the plan on a calm day, and sharing it with the people you rely on, makes bad days shorter and less frightening.

                ## Milestones
                1. A written plan covering pain relief, heat, rest and easy food.
                2. A short message drafted for work, tutors or friends.
                3. A threshold for seeking urgent care, taken from the urgent symptoms card.
                4. The plan shared with one person who can help.
                5. The plan reviewed after each time it has been used.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written flare day plan, including a ready message and an urgent care threshold, shared with at least one person."
                cadence: rolling
              tasks:
                - "Write what you will take, use and cancel on a severe pain day"
                - "Draft a short message for work, tutors or friends to send on a flare day"
                - "Share the plan with one person who can help"
                - "Read through the flare plan and update anything that changed @recurring(quarterly)"
            - name: Daily treatment routine with breakthrough bleeding notes
              description: |-
                ## Purpose
                Hormonal treatments for heavy or painful periods usually work best when taken at the same time every day, and unexpected bleeding in the first months is common enough that clinicians want to know its pattern. Linking the dose to an existing habit, and noting any spotting in the same place, gives you both consistency and evidence for the next review.

                ## Milestones
                1. A fixed daily time linked to an existing habit.
                2. A daily tick recorded for one month with fewer than two missed.
                3. Any spotting or breakthrough bleeding noted with dates.
                4. The missed-dose instructions from the leaflet confirmed with your pharmacist.

                ## Notes
                Start from the **Habit tracker** template. Missed-dose rules differ between products, so follow the leaflet and your pharmacist rather than general advice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily doses ticked off with no more than one missed, and every spotting day recorded."
                cadence: rolling
              tasks:
                - "Choose the daily habit your treatment will be taken alongside"
                - "Save the missed-dose section of the leaflet to your phone"
                - "Take today's treatment and note any spotting @recurring(daily)"
            - name: First three months on a new period treatment
              description: |-
                ## Purpose
                Whether it is a hormonal pill, a coil or a non-hormonal tablet for heavy bleeding, most treatments need about three months before anyone can judge them. Planning those months, with the log kept, side effects noted and a review booked at the end, stops a treatment being dropped too early or kept long after it has failed.

                ## Milestones
                1. Treatment name, start date and what it is expected to change written down.
                2. The daily log continued, with side effects noted by date.
                3. A review appointment booked for around the three-month mark.
                4. A decision recorded at review: continue, adjust or try something else.

                ## Notes
                Do not stop a prescribed treatment without speaking to the prescriber or a pharmacist, even if the first weeks are difficult.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Three months of logs on the new treatment reviewed with the prescriber, and a continue, adjust or change decision recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the treatment name, start date and expected effect in your log"
                - "Book a review for around three months after starting"
                - "Note any side effect with the date it began"
                - "Bring the three months of logs and your baseline to the review"
            - name: Quarterly check that treatment still fits your goals
              description: |-
                ## Purpose
                What you need from treatment changes over time: lighter bleeding before exams, fewer pain days before a new job, or fewer side effects once the main symptom settles. A short quarterly look at whether the current treatment still matches what matters to you now gives you something specific to raise, instead of drifting along for years.

                ## Milestones
                1. Your top two goals for treatment written down.
                2. A quarterly comparison of logs against those goals.
                3. Side effects you have been tolerating listed honestly.
                4. Any mismatch raised with your clinician within a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks in a year, each recording your goals, whether treatment meets them and any action taken."
                cadence: rolling
              tasks:
                - "Write your top two goals for treatment right now"
                - "Compare the last three months of logs with your treatment goals @recurring(quarterly)"
                - "List the side effects you have been putting up with"
            - name: Annual menstrual health review
              description: |-
                ## Purpose
                Long-term conditions such as endometriosis, adenomyosis or PCOS benefit from a yearly look at symptoms, treatment, side effects and plans, even when things are stable. Booking it as a fixed date, and preparing a twelve-month summary, keeps treatment current and catches slow changes that monthly reviews can miss.

                ## Milestones
                1. A review month chosen and the appointment booked.
                2. A twelve-month summary of cycles, pain days and treatment changes prepared.
                3. Any blood tests or checks that are due done before the appointment.
                4. Changes agreed at the review written down and acted on.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual review held for two consecutive years, each with a prepared summary and written outcomes."
                cadence: cyclic
              tasks:
                - "Book your yearly review of periods and treatment @recurring(yearly)"
                - "Prepare a twelve-month summary of cycles, pain days and treatment changes"
                - "Ask whether any blood tests are due before the review"
                - "Act on each change agreed at the review within a month"
            - name: Restocking period products and repeat prescriptions
              description: |-
                ## Purpose
                Running out of pads on a heavy night or of tablets on a weekend is avoidable. A monthly check of products, pain relief and repeat prescriptions, done well before your next expected period, means supplies are bought and ordered with time to spare.

                ## Milestones
                1. A short list of the products and medicines you use each cycle.
                2. A repeat prescription ordering method set up.
                3. A monthly stock check done before supplies run low.
                4. Three months with no emergency trips or missed doses.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months with no run-outs of period products, pain relief or prescribed treatment."
                cadence: rolling
              tasks:
                - "List the products and medicines you use in a typical cycle"
                - "Set up online repeat prescription ordering if your practice offers it"
                - "Check stock and order products and repeat prescriptions @recurring(monthly:24)"
            - name: Pelvic physiotherapy home programme
              description: |-
                ## Purpose
                Long-standing pelvic pain often brings tight pelvic floor muscles that add pain of their own, especially with sex, internal examinations or bowel movements. A home programme set by a pelvic health physiotherapist, done twice a week and reviewed, is one of the few treatments with no hormonal side effects.

                ## Milestones
                1. A pelvic health physiotherapist seen and a written programme received.
                2. Exercises done on two fixed days each week.
                3. Pain and ease of movement scored at the start and after six weeks.
                4. A follow-up booked to adjust the programme.

                ## Notes
                Pelvic floor work for pain usually focuses on relaxing muscles, not strengthening them, so follow the physiotherapist's programme rather than generic exercises.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weeks of the physiotherapist's programme done on at least two days a week, with before and after scores recorded."
                cadence: rolling
              tasks:
                - "Ask for a referral to a pelvic health physiotherapist"
                - "Put the programme's exercises on two fixed days in your calendar"
                - "Do the pelvic physiotherapy exercises @recurring(weekly:tue,fri)"
                - "Score pain and ease of movement at the start and after six weeks"
            - name: What a typical cycle looks like
              description: |-
                ## Purpose
                Many people have no idea whether their own periods are unusual, because nobody ever explained the range. Learning the commonly quoted ranges for cycle length, days of bleeding and amount of pain, and how cycles vary in the first years after periods start, makes it easier to spot what is worth mentioning.

                ## Milestones
                1. Commonly quoted adult ranges for cycle length and bleeding days noted from a reliable health source.
                2. How cycles vary in the teenage years and with stress or illness understood.
                3. Your own three-cycle baseline compared with those ranges.
                4. Anything outside the ranges listed to raise with a clinician.

                ## Notes
                Many sources describe an adult cycle of roughly 21 to 35 days with bleeding of up to about seven days, but your clinician decides what matters for you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note comparing your own cycle length, bleeding days and pain with ranges from a reliable health source."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a reliable health service page on normal menstrual cycles"
                - "Note the ranges it gives for cycle length and bleeding days"
                - "Compare your own baseline with those ranges"
                - "List anything outside the ranges to raise at your next appointment"
            - name: How endometriosis is diagnosed
              description: |-
                ## Purpose
                Endometriosis is commonly reported to take seven years or more to diagnose, partly because symptoms are dismissed and partly because the routes are poorly explained. Understanding what each step can and cannot show, from symptom history and examination to specialist ultrasound, MRI and laparoscopy, lets you ask for the right next step and not be reassured by a test that was never going to find it.

                ## Milestones
                1. The main symptoms clinicians associate with endometriosis listed against your own.
                2. What a routine ultrasound, a specialist endometriosis scan and MRI can each show noted.
                3. When laparoscopy is used to diagnose and treat understood.
                4. Your current step on the route identified, with the next one written down.

                ## Notes
                A normal ultrasound does not rule out endometriosis, because small surface patches rarely show on scans.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of the diagnostic route, what each test can show and the next step you will ask for."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's page on endometriosis symptoms and diagnosis"
                - "Tick the listed symptoms you recognise from your log"
                - "Note what a specialist endometriosis scan can show that a routine one may not"
                - "Write down the next diagnostic step you will ask for"
            - name: Understanding the PCOS diagnosis criteria
              description: |-
                ## Purpose
                Polycystic ovary syndrome is usually diagnosed when two of three features are present: irregular or absent ovulation, signs or blood tests showing higher androgens, and polycystic ovaries on ultrasound or, in some services, a raised AMH blood test. Knowing the criteria explains why some tests are needed, why others are skipped in teenagers, and what to ask if the answer seems uncertain.

                ## Milestones
                1. The three diagnostic features written down in plain words.
                2. Your own cycles, skin and hair changes and any test results set against them.
                3. Other conditions that can look like PCOS, such as thyroid or prolactin problems, noted.
                4. Questions about missing tests or uncertain results prepared.

                ## Notes
                Ultrasound is often not used for diagnosis in the first years after periods start, because ovaries naturally look different then.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of your records and results against the three PCOS features, with questions for your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the three PCOS features in your own words"
                - "Set your cycle records and any results against each feature"
                - "Ask your clinician which other conditions have been ruled out"
                - "Note any test that has not been done and the reason given"
            - name: Other causes of heavy or painful periods
              description: |-
                ## Purpose
                Heavy or painful periods have several possible causes besides endometriosis: adenomyosis, fibroids, polyps, thyroid problems and inherited bleeding disorders, and some need different tests and treatments. Knowing the list helps you ask what has been ruled out rather than assuming the first label is the whole story.

                ## Milestones
                1. The common causes listed with the test usually used for each.
                2. Heavy bleeding since your very first period flagged as a reason to ask about bleeding disorders.
                3. What your clinician has already ruled out written down.
                4. Any gap raised at the next appointment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of possible causes, each marked as ruled out, confirmed or still open, checked with your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List adenomyosis, fibroids, polyps, thyroid and bleeding disorders as possible causes"
                - "Note the test usually used to check each one"
                - "Mark which causes your clinician has already ruled out"
                - "Ask about a bleeding disorder test if periods have been heavy since they began"
            - name: A sixty-second symptom summary
              description: |-
                ## Purpose
                Appointments are short and the first minute shapes the rest. Practising a sixty-second summary of how long it has been going on, the worst symptoms, what has been tried and what you want from today means the clinician hears the important parts before the clock runs down.

                ## Milestones
                1. A written summary of no more than about 120 words.
                2. One clear request included, such as a scan, a referral or a treatment change.
                3. The summary practised aloud and timed.
                4. The summary used at an appointment and refined afterwards.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A spoken summary of under sixty seconds, including one clear request, used at a real appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write how long symptoms have lasted, the worst three and what you tried"
                - "Ask the agent to tighten the summary into plain words"
                - "Add one clear request for the appointment"
                - "Time yourself saying it aloud and cut it to sixty seconds"
            - name: Reading your scan or surgery report
              description: |-
                ## Purpose
                Reports use words like endometrioma, adenomyosis, adhesions, deep endometriosis or a stage number, and the stage often does not match how much pain you have. Working through your own report, and writing down what you still do not understand, turns the follow-up appointment into a conversation about what it means for treatment.

                ## Milestones
                1. A copy of the scan or operation report requested and received.
                2. Unfamiliar terms looked up in a reliable health source.
                3. Questions about what the findings mean for treatment written down.
                4. The answers recorded after the follow-up appointment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your report is on file with every unfamiliar term explained and your questions answered at follow-up."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request a copy of your latest scan or operation report"
                - "Underline every term you do not understand"
                - "Look up each term in a reliable health source"
                - "Ask at follow-up what the findings mean for treatment"
            - name: Bowel and bladder symptoms that follow your cycle
              description: |-
                ## Purpose
                Pain opening your bowels, bloating, or pain passing urine that gets worse around your period can point to endometriosis affecting the bowel or bladder, and it changes which scans and specialists are needed. Recording these symptoms by cycle day for two cycles gives the specialist the information they need to plan.

                ## Milestones
                1. Bowel and bladder columns added to the daily log.
                2. Two cycles recorded with symptoms marked by cycle day.
                3. Any blood in urine or stools reported to a clinician promptly.
                4. The pattern summarised for your next appointment.

                ## Notes
                Blood in urine or stools always needs checking, whatever you think the cause is.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two cycles of bowel and bladder symptoms recorded by cycle day and summarised for a clinician."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add bowel and bladder columns to your daily log"
                - "Record bowel pain, bloating and urinary pain by cycle day for two cycles"
                - "Summarise whether these symptoms peak around your period"
                - "Report any blood in urine or stools to a clinician the same week"
            - name: Premenstrual mood tracking for two cycles
              description: |-
                ## Purpose
                Low mood, anger or anxiety that arrives in the week or two before a period and lifts once bleeding starts may be premenstrual dysphoric disorder, which clinicians usually diagnose from daily ratings over at least two cycles. Keeping those ratings now saves months later and separates a cyclical pattern from mood problems that do not follow the cycle.

                ## Milestones
                1. A daily mood and irritability score added to the log.
                2. Two full cycles rated without gaps.
                3. Whether symptoms rise before bleeding and settle after it made clear by the record.
                4. The record shared with a clinician.

                ## Notes
                If low mood includes thoughts of harming yourself, contact a clinician or a crisis line now rather than waiting for two cycles of data.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two cycles of daily mood ratings recorded and reviewed with a clinician."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add a daily mood and irritability score to your log"
                - "Rate mood every day for two full cycles"
                - "Mark the first day of bleeding on the mood record"
                - "Share the two-cycle record with your clinician"
            - name: Non-drug pain relief trial
              description: |-
                ## Purpose
                Heat, a TENS machine, gentle movement and positions that ease cramping help many people alongside medicines, but it is hard to know which help you without testing one at a time. Trying each method across a period and scoring it gives you a short list of what is worth packing for a flare.

                ## Milestones
                1. Three methods chosen to try, such as heat, TENS or gentle stretching.
                2. Each tried for at least one period, with pain scored before and after.
                3. The methods that made a difference added to your flare plan.
                4. Any device bought only after trying one first.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three non-drug methods tried and scored, with the useful ones added to your flare day plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose three non-drug methods to try over the next periods"
                - "Score pain before and 30 minutes after each method"
                - "Borrow or rent a TENS machine before buying one"
                - "Add the methods that helped to your flare day plan"
            - name: Period products that match your flow
              description: |-
                ## Purpose
                Products that cannot cope with your heaviest day lead to leaks, broken sleep and avoided plans. Comparing pads, tampons, cups, discs and period underwear on capacity, comfort, cost per cycle and what you can change at school or work finds a combination that matches each day of your period.

                ## Milestones
                1. Your heaviest and lightest days matched to the capacity each product type needs.
                2. Three or four options compared on capacity, comfort, cost and convenience.
                3. A combination chosen for heavy days, light days and nights.
                4. Tampon absorbency set at the lowest that copes, in line with the pack leaflet.

                ## Notes
                Start from the **Purchase decision** template. Needing to change a product every hour or two is itself a sign of heavy bleeding worth mentioning to a clinician.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen set of products for heavy days, light days and nights, compared on capacity, comfort and cost."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note how often you change products on your heaviest day"
                - "Compare pads, tampons, cups, discs and period underwear on capacity and cost"
                - "Try one new option during your next period"
                - "Read the toxic shock syndrome section of any tampon or cup leaflet"
            - name: Choosing a treatment for heavy periods
              description: |-
                ## Purpose
                Treatments for heavy periods include non-hormonal tablets taken during bleeding, hormonal pills, a hormone-releasing coil and, for some people, procedures, and each suits different plans and health histories. Comparing the options your clinician offers on how well they work, side effects and future pregnancy plans leads to a choice you understand and can stick with.

                ## Milestones
                1. Tests for causes of heavy bleeding, including a blood count, done or booked.
                2. The options your clinician offers listed with how each works.
                3. Each option compared on effectiveness, side effects and pregnancy plans.
                4. A treatment chosen and a review date agreed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A heavy period treatment chosen with your clinician after comparing options, with a review date agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask whether a blood count has been checked for your heavy periods"
                - "List every option your clinician offers for heavy periods"
                - "Compare each option on effect, side effects and pregnancy plans"
                - "Agree a treatment and a date to review it"
            - name: Hormonal treatment options for endometriosis
              description: |-
                ## Purpose
                Hormonal treatments do not cure endometriosis but can reduce pain by quietening or stopping periods, and the choices differ in side effects, how they are taken and what happens when you stop. Working through the options with your clinician, with your goals and side effect limits written down first, avoids trying them one after another without a plan.

                ## Milestones
                1. Your goals, and the side effects you would not accept, written down.
                2. Options offered by your clinician listed with how each is taken.
                3. Effects on bone health, mood and future pregnancy plans asked about.
                4. A first choice agreed with a review point.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A hormonal treatment chosen for endometriosis after comparing offered options against written goals, with a review date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your treatment goals and the side effects you will not accept"
                - "Ask your clinician to list the hormonal options suitable for you"
                - "Ask how each option affects bone health, mood and pregnancy plans"
                - "Record the treatment chosen and when it will be reviewed"
            - name: Asking again when period pain is dismissed
              description: |-
                ## Purpose
                Being told that period pain is normal, or to come back in six months, is one of the main reasons diagnosis takes so long. Going back with your records, asking for the reasoning to be written in your notes, and requesting a referral or a second opinion is a reasonable, polite way to keep things moving.

                ## Milestones
                1. Your three-cycle summary and the impact on study or work ready to show.
                2. A follow-up appointment booked with the same or a different clinician.
                3. A specific request made: a scan, a trial of treatment or a gynaecology referral.
                4. The clinician's decision and reasoning recorded in your notes and your own file.
                5. A second opinion or complaint route identified if the answer still does not fit.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A follow-up appointment held with a specific request made, and the decision and reasoning recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what you were told and the date"
                - "Book a follow-up with the same or another clinician"
                - "Ask for a scan, a treatment trial or a gynaecology referral"
                - "Ask for the decision and reasoning to be recorded in your notes"
            - name: Finding an endometriosis specialist centre
              description: |-
                ## Purpose
                Complex or deep endometriosis is best treated by teams that see a lot of it, often called specialist endometriosis centres, which bring together surgeons, pain specialists and pelvic physiotherapists. Finding which centres you can be referred to, and how long they take, lets you ask for the right referral rather than a general clinic first.

                ## Milestones
                1. Specialist centres you could be referred to identified.
                2. Waiting times and referral routes for each noted.
                3. Whether each centre has surgeons experienced in excision and bowel surgery recorded.
                4. A preferred centre named in your referral request.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A preferred specialist endometriosis centre chosen, with waiting time and referral route noted, and named in a referral request."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for specialist endometriosis centres you could be referred to"
                - "Note each centre's waiting time and referral route"
                - "Ask your clinician whether your case needs a specialist centre"
                - "Name your preferred centre when the referral is made"
            - name: Diagnostic laparoscopy decision
              description: |-
                ## Purpose
                Laparoscopy is keyhole surgery that can confirm endometriosis and often treat it at the same time, but it carries surgical risks and recovery time, and some people try hormonal treatment first. Deciding with your specialist, with clear answers about what will be done if endometriosis is found, means you consent to an operation you understand.

                ## Milestones
                1. Reasons for and against surgery now written down with your specialist's view.
                2. Questions answered on excision, risks, and what happens if bowel or bladder is involved.
                3. The surgeon's experience with endometriosis asked about.
                4. A decision recorded: surgery, treatment first, or wait and review.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on laparoscopy, made after the surgeon answered written questions on extent, risks and experience."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the reasons you are considering surgery now"
                - "Ask what will be done if endometriosis is found during the operation"
                - "Ask how many endometriosis operations the surgeon does each year"
                - "Record your decision and what would make you revisit it"
            - name: PCOS symptom priorities with your clinician
              description: |-
                ## Purpose
                PCOS shows up differently in each person, with irregular periods, acne, excess hair growth, hair thinning, weight changes or low mood, and no single treatment covers them all. Choosing the two symptoms that matter most to you now, and agreeing a plan for those with your clinician, gives treatment a clear target and a way to judge it.

                ## Milestones
                1. Every PCOS symptom you have listed and scored for how much it affects you.
                2. The top two chosen as current priorities.
                3. Options for those two discussed with your clinician.
                4. A plan with a review date agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two priority PCOS symptoms chosen and a written plan with a review date agreed with your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every PCOS symptom you have and score its impact out of ten"
                - "Choose the two symptoms that matter most right now"
                - "Ask your clinician what options exist for those two"
                - "Write the PCOS plan and its review date in your log"
            - name: Pain medicine review beyond over-the-counter relief
              description: |-
                ## Purpose
                When pharmacy painkillers no longer get you through the worst days, people often increase them on their own or combine them in risky ways. A dedicated review with your clinician, bringing a record of what you take and how well it works, leads to a safer plan and sometimes a referral to a pain service.

                ## Milestones
                1. A two-cycle record of every painkiller taken and its effect.
                2. A review appointment booked specifically about pain control.
                3. Options and risks discussed, including referral to a pain service.
                4. A written plan with limits on what to take and when to seek help.

                ## Notes
                Never go beyond the limits on a medicine's leaflet, and tell your clinician if you have needed to.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pain control review held with a two-cycle medicine record, and a written plan agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record every painkiller you take and how well it works for two cycles"
                - "Book an appointment specifically to review pain control"
                - "Ask whether a referral to a pain service would help"
                - "Keep the agreed pain plan with your flare day plan"
            - name: Pelvic ultrasound appointment preparation
              description: |-
                ## Purpose
                Pelvic scans are often done internally because that view is clearer, and whether a scan looks for endometriosis in detail depends on who does it. Knowing what will happen, and asking whether timing in your cycle matters and whether a specialist scan is possible, makes the result more useful and the appointment less stressful.

                ## Milestones
                1. The scan type and any preparation, such as a full bladder, confirmed.
                2. Whether timing in your cycle matters checked with the department.
                3. A chaperone or companion arranged if you want one.
                4. The report requested and the follow-up appointment booked.

                ## Notes
                You can ask for an abdominal scan instead, or to stop at any point. Tell the sonographer if internal examinations are difficult for you.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pelvic scan attended with preparation done, and a copy of the report and a follow-up date secured."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Phone the scanning department to confirm preparation and timing"
                - "Ask whether the scan will look for endometriosis specifically"
                - "Arrange a companion or chaperone if you want one"
                - "Book the follow-up appointment to discuss the report"
            - name: First specialist gynaecology appointment
              description: |-
                ## Purpose
                Specialist appointments may come after months of waiting and may be the only one for a while, so it is worth arriving ready. Bringing your history page, cycle summary, scan reports and a ranked question list means the time goes on decisions, not on repeating what is already in the referral.

                ## Milestones
                1. Referral letter, history page, cycle summary and reports gathered.
                2. Questions ranked so the top three come first.
                3. Examination, test and treatment options discussed and noted.
                4. A written plan with the next appointment or test date.

                ## Notes
                Start from the **Meeting notes** template. Ask for a copy of the clinic letter that goes to your doctor.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The specialist appointment attended with documents and ranked questions, and a written plan with next dates recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather the referral letter, history page, summary and scan reports"
                - "Rank your questions so the three most important come first"
                - "Write down every option the specialist mentions"
                - "Ask for a copy of the clinic letter sent to your doctor"
            - name: Laparoscopy preparation and recovery fortnight
              description: |-
                ## Purpose
                Keyhole surgery for endometriosis usually means a short hospital stay followed by a recovery that ranges from days to several weeks, depending on what was done. Planning time off, help at home and the questions for the results appointment before the date arrives makes recovery calmer and the findings easier to act on.

                ## Milestones
                1. Time off from study or work arranged for the recovery your surgeon expects.
                2. Someone available to take you home and help for the first days.
                3. Questions about wound care, warning signs and returning to exercise answered.
                4. The operation report requested and the results appointment booked.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Time off, help at home and a results appointment arranged before surgery, with the operation report obtained afterwards."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask how long recovery usually takes for the surgery planned"
                - "Arrange time off and someone to stay for the first nights"
                - "Write down the warning signs after surgery and who to call"
                - "Book the results appointment and request the operation report"
            - name: Exams or big events when a period is due
              description: |-
                ## Purpose
                Students with heavy or painful periods often find their worst day lands on an exam, a performance or a match. Checking predicted dates against the timetable early, then talking to your clinician and your school or university about options, gives time to arrange support instead of sitting an exam in severe pain.

                ## Milestones
                1. Exam or event dates compared with predicted period dates.
                2. Your clinician asked whether any options exist to manage timing or symptoms.
                3. Arrangements such as rest breaks or a seat near the toilets requested through the exams office.
                4. A kit for the day packed: products, pain relief, water and a heat patch.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Period dates checked against the exam timetable, with any arrangements requested and confirmed by the exams office."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare your exam timetable with your predicted period dates"
                - "Ask your clinician about options if a heavy day falls on an exam"
                - "Request rest breaks or other arrangements from the exams office"
                - "Pack a kit for exam day with products and pain relief"
            - name: Periods at university or college
              description: |-
                ## Purpose
                Moving away to study means a new doctor, new routines and no one nearby who knows your history. Registering locally, transferring your treatment and records, and finding the student support service before the first bad month makes it far easier to keep treatment going and get help with deadlines.

                ## Milestones
                1. Registered with a doctor near your term-time address.
                2. Repeat prescriptions moved or arranged so they do not lapse.
                3. Your history page shared with the new practice.
                4. The student support or disability service contacted about endometriosis or severe periods, if relevant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Registered with a local doctor, prescriptions continuing without a gap, and the student support service aware of your condition if needed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Register with a doctor near your term-time address"
                - "Arrange for repeat prescriptions to continue at the new practice"
                - "Send your menstrual health history to the new practice"
                - "Contact student support about extensions for severe period days"
            - name: Painful periods at secondary school
              description: |-
                ## Purpose
                Teenagers with severe period pain often miss lessons, sport and exams without anyone joining up the pattern, and many are told it will settle. A plan made with a parent or trusted adult, covering a simple log, a doctor's appointment and what the school knows, means pain that keeps someone out of school gets checked rather than accepted.

                ## Milestones
                1. A simple log kept for three periods, with school days missed.
                2. A doctor's appointment attended with the log.
                3. The school told what it needs to know, such as toilet access or a rest space.
                4. A period kit for the school bag sorted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three periods logged with missed school days, a doctor's appointment attended and the school's arrangements agreed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree with a parent or trusted adult how to keep a simple period log"
                - "Count school days missed or cut short in the last three periods"
                - "Book a doctor's appointment and bring the log"
                - "Check the school bag period kit at the start of each term @recurring(quarterly)"
            - name: Workplace adjustments for endometriosis
              description: |-
                ## Purpose
                Endometriosis and severe periods can affect work for days each month, and in some countries a long-term condition like endometriosis may qualify for legal protection and reasonable adjustments. Deciding what to share, asking for specific changes such as flexible start times or home working on flare days, and keeping a record protects both your health and your job.

                ## Milestones
                1. Your employer's policies on sickness, flexible working and health conditions read.
                2. A short list of adjustments that would help, with reasons.
                3. A conversation held with your manager or occupational health, with notes kept.
                4. Agreed adjustments confirmed in writing and reviewed.

                ## Notes
                Employment rights vary by country; an employee advice service or union can explain what applies to you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Specific workplace adjustments requested and confirmed in writing, with a date set to review them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your employer's sickness absence and flexible working policies"
                - "List three adjustments that would help on flare days"
                - "Book a conversation with your manager or occupational health"
                - "Review the agreed adjustments with your manager @recurring(yearly)"
            - name: Painful sex and endometriosis
              description: |-
                ## Purpose
                Deep pain during or after sex is a common endometriosis symptom that many people never mention to a clinician, even though it can guide diagnosis and there are treatments that help. Recording when it happens, raising it at an appointment and having one honest conversation with a partner turns a private worry into something with a plan.

                ## Milestones
                1. When pain happens, and how long it lasts afterwards, noted in your log.
                2. The symptom raised with your clinician or specialist.
                3. A referral to pelvic physiotherapy or psychosexual support considered.
                4. A conversation with a partner about what helps.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Pain with sex recorded, raised with a clinician, and the agreed next step written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a private note column for pain during or after sex"
                - "Raise the symptom at your next appointment"
                - "Ask whether pelvic physiotherapy could help with pain during sex"
                - "Talk with your partner about what makes it easier"
            - name: Family plans in endometriosis treatment choices
              description: |-
                ## Purpose
                Some endometriosis and PCOS treatments pause the chance of pregnancy while they are used, and surgery on the ovaries can affect egg reserve, so future family plans belong in treatment decisions even if they are years away. Raising them early means choices are made with your plans in mind rather than discovered afterwards.

                ## Milestones
                1. Your plans, or uncertainty, about future pregnancy written down.
                2. Your clinician asked how each treatment option affects those plans.
                3. The effect of any planned ovarian surgery on egg reserve discussed.
                4. Your plans noted in your records so future clinicians know.

                ## Notes
                Fertility tests and treatment belong with a fertility service; this is about making endometriosis or PCOS choices with your plans in view.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Family plans recorded and discussed with your clinician, with the effect of each treatment option on them noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your plans or uncertainty about future pregnancy"
                - "Ask how each treatment option affects those plans"
                - "Ask about egg reserve before any surgery on the ovaries"
                - "Revisit your family plans with your clinician @recurring(yearly)"
            - name: Menstrual care for trans and non-binary people
              description: |-
                ## Purpose
                Trans and non-binary people who menstruate can face clinics and forms that assume otherwise, and periods can bring dysphoria on top of pain. Finding a service that respects your identity, and knowing which questions to ask about bleeding on testosterone or endometriosis symptoms, keeps care focused on the symptoms rather than the paperwork.

                ## Milestones
                1. A clinic or clinician with experience of trans patients identified.
                2. Your name and pronouns recorded correctly in your notes.
                3. Bleeding patterns on or off testosterone recorded and raised.
                4. Product and pain options that reduce dysphoria explored.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A respectful clinic identified, records updated, and bleeding or pain questions raised at an appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search for local clinics with experience of trans patients"
                - "Ask the practice to update your name and pronouns in your notes"
                - "Record any bleeding on testosterone and raise it with your clinician"
                - "Try a product that feels less dysphoric, such as period underwear"
            - name: Long-term PCOS health checks
              description: |-
                ## Purpose
                PCOS raises the long-term risk of type 2 diabetes, raised cholesterol and high blood pressure, and very infrequent periods can affect the lining of the womb. Knowing which checks your clinician recommends, and booking them each year, catches changes early while they are easiest to manage.

                ## Milestones
                1. The checks recommended for you, such as blood sugar, cholesterol and blood pressure, confirmed.
                2. A yearly date fixed for them.
                3. Results recorded in one place beside the previous year's.
                4. Your clinician asked what to do if periods become very infrequent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The recommended PCOS health checks done every year for two years, with results recorded beside the previous ones."
                cadence: cyclic
              tasks:
                - "Ask your clinician which long-term checks they recommend for PCOS"
                - "Book the yearly PCOS blood tests and blood pressure check @recurring(yearly)"
                - "Record each year's results beside the last ones"
                - "Ask what to do if periods become very infrequent"
            - name: Specialist pain team plan for endometriosis
              description: |-
                ## Purpose
                For some people pain continues after surgery or hormones, because long-standing pain changes how nerves and muscles respond. Specialist pain teams combine medicines, physiotherapy, psychological approaches and pacing into one plan, and working with them turns repeated crises into a managed condition.

                ## Milestones
                1. A referral to a pain service or specialist centre team made.
                2. Your pain history, treatments tried and goals summarised for them.
                3. A written plan agreed covering medicines, physiotherapy and pacing.
                4. The plan reviewed after six months against your logs.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written multidisciplinary pain plan agreed with a specialist team and reviewed against six months of logs."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your specialist for a referral to a pain management service"
                - "Summarise your pain history, treatments tried and goals on one page"
                - "Agree a written plan covering medicines, physiotherapy and pacing"
                - "Review the plan against six months of logs with the team"
            - name: Recurrence watch after endometriosis surgery
              description: |-
                ## Purpose
                Symptoms can return after surgery, and pain that creeps back slowly is easy to miss until it matches the old pattern. Comparing your pain days and scores with your pre-surgery baseline every quarter gives early, dated evidence if it returns.

                ## Milestones
                1. The pre-surgery three-cycle baseline kept with the operation report.
                2. A quarterly comparison of pain days and worst scores against it.
                3. A rule agreed with your specialist for when returning symptoms need review.
                4. Any sustained change reported with the comparison attached.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly comparisons with the pre-surgery baseline recorded for a year, and any sustained change reported."
                cadence: rolling
              tasks:
                - "File your pre-surgery baseline with the operation report"
                - "Compare pain days and worst scores with the pre-surgery baseline @recurring(quarterly)"
                - "Ask your specialist what change in symptoms should prompt a review"
            - name: Endometriosis care summary for new clinicians
              description: |-
                ## Purpose
                After years of appointments, the history is spread across letters, reports and memory, and every new clinician, emergency department or physiotherapist starts from scratch. A two-page care summary covering diagnosis, surgeries, current treatment, what has failed and your flare plan makes every handover faster and safer.

                ## Milestones
                1. Diagnosis and the dates and findings of every scan and surgery listed.
                2. Current treatment, past treatments and why each stopped recorded.
                3. Your flare plan and urgent care threshold included.
                4. The summary stored on your phone and shared with your main clinician.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page care summary with diagnoses, surgeries, treatments and flare plan, saved on your phone and shared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather your clinic letters, scan reports and operation notes"
                - "Write the diagnosis and surgery history on one page"
                - "Add current and past treatments with the reasons they changed"
                - "Update the care summary with the year's letters @recurring(yearly)"
---

# Menstrual Health & Endometriosis

This area is for anyone who menstruates and suspects their periods are heavier, more painful or more irregular than they should be, including students fitting care around lectures and exams. It starts with the foundations (a tracking method, a daily log, a three-cycle baseline, a pain relief plan and a well-prepared first appointment), then the routines that keep records and treatment on track, the knowledge that makes diagnosis of endometriosis, adenomyosis or PCOS less of a mystery, the treatment and referral decisions, the appointments and surgery worth preparing for, the situations at school, university and work, and finally the long-term work of living with a diagnosis.

What repeats is a short daily log, a Sunday look at the week ahead, a monthly cycle review and restock, quarterly checks on treatment and the flare plan, twice-weekly pelvic physiotherapy exercises, and a yearly review with any PCOS health checks. The Metrics log, Habit tracker, Meeting notes and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
