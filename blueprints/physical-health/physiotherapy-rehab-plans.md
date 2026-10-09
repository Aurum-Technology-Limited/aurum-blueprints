---
id: physical-health.physiotherapy-rehab-plans
name: Physiotherapy Rehab Plans
description: "A rehab programme you can follow: referral and first assessment, baseline measures and written goals, a daily home routine, honest progress checks and a planned return to work, sport and everyday life."
category: personal
version: 1.0.0
tags: [physical-health, physiotherapy-rehab-plans, everyone, athlete, rehabilitation, home-exercise, injury-recovery, return-to-sport]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - training-program
    - purchase-decision
    - habit-tracker
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Physiotherapy Rehab Plans
          description: "Following a physiotherapy or rehab programme after injury or illness, with exercise schedules, progress measures and appointments, for people rebuilding everyday function."
          projects:
            - name: Getting a physiotherapy referral or self-referral
              description: |-
                ## Purpose
                Many people wait weeks for a doctor's appointment without knowing that their local service or insurer accepts self-referral for physiotherapy. Finding out which route applies to you, and what each one needs, can take a fortnight off the wait before rehab even starts.

                ## Milestones
                1. The referral routes open to you listed: self-referral, doctor referral, workplace scheme or insurer.
                2. The quickest suitable route chosen, with any forms or pre-authorisation numbers it needs.
                3. A referral or self-referral submitted, with the date written down.
                4. An expected first appointment date, or a date to chase if none arrives.

                ## Notes
                If you have new weakness, numbness, loss of bladder or bowel control or a suspected fracture, seek urgent medical care rather than waiting for a physiotherapy slot.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A physiotherapy referral or self-referral has been submitted, its date recorded and a chase date set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your local service or insurer accepts physiotherapy self-referral"
                - "Ask your doctor or insurer what a referral needs from you"
                - "Submit the referral or self-referral form"
                - "Write the submission date and a chase date in your diary"
            - name: Choosing a physiotherapist for your injury
              description: |-
                ## Purpose
                Physiotherapists specialise: a knee reconstruction, a dislocated shoulder and pelvic pain after birth each suit a different clinician. Where you have a choice, picking someone with experience of your injury, at a clinic you can reach twice a week if needed, makes the next three months easier to sustain.

                ## Milestones
                1. Two or three clinics or practitioners shortlisted, each checked on the professional register for physiotherapists.
                2. Each one's experience with your injury, session length, price and gym access noted.
                3. Travel time and appointment availability compared against your working week.
                4. One physiotherapist chosen and the first appointment booked.

                ## Notes
                Start from the **Vendor** template. Check registration with your country's professional body for physiotherapists before booking anyone.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One registered physiotherapist chosen against written criteria, with the first appointment booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the clinics within reasonable travel of home or work"
                - "Check each practitioner on the professional register"
                - "Ask each clinic who sees your type of injury most often"
                - "Compare price, session length and evening availability"
                - "Book the first appointment with your chosen physiotherapist"
            - name: Preparing for the first physiotherapy assessment
              description: |-
                ## Purpose
                A first assessment usually runs 45 to 60 minutes, and much of it is the physio asking questions you could answer better with notes in hand. Writing down how the injury happened, what makes it worse, what you can no longer do and what you want back gets you a sharper assessment and a programme built around your real life.

                ## Milestones
                1. A one-page injury timeline: date, how it happened, treatment so far and any scans.
                2. A list of the three movements or tasks that hurt most or that you cannot do.
                3. Your goal written in one sentence, such as carrying shopping upstairs or running 5 km.
                4. Clothing that exposes the injured area packed, with your current medicine list.

                ## Notes
                Bring any scan reports, discharge letters and surgical notes. Wear shorts for a leg injury or a vest top for a shoulder.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You attend the first assessment with a written injury timeline, a goal and your scan reports, and leave with a working diagnosis recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-page timeline of how and when the injury happened"
                - "List the three tasks the injury stops you doing"
                - "Gather scan reports, discharge letters and your medicine list"
                - "Write down the diagnosis and plan before you leave the clinic"
            - name: Baseline function measures before rehab starts
              description: |-
                ## Purpose
                Rehab progress is slow enough that you stop noticing it, which is when people give up. Recording a handful of measures at the start, such as how far the knee bends, how long you can stand on one leg and a 0 to 10 score for each problem task, gives you numbers to compare against in six weeks.

                ## Milestones
                1. Three to five measures agreed with your physio, each with the testing method written down.
                2. Baseline values recorded with the date, for example range of movement, single-leg stand time and sit-to-stand count.
                3. A score from 0 to 10 for each of your three problem tasks.
                4. Photos or a short video of the movement taken from the angle you will use later.

                ## Notes
                Start from the **Metrics log** template. Measure at the same time of day each time, because stiffness changes from morning to evening.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated log holds baseline values for three to five agreed measures, each with its testing method."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio which three to five measures suit your injury"
                - "Set up a metrics log with the measures and how to test them"
                - "Record your baseline values and the time of day"
                - "Film the main movement from a fixed angle for later comparison"
            - name: Rehab goals agreed in writing with your physio
              description: |-
                ## Purpose
                Ask ten people what they want from rehab and most say to be back to normal, which no one can measure. Turning that into two or three specific goals with a rough timescale, agreed with your physio, decides what the exercises are for and tells you when you have finished.

                ## Milestones
                1. A main goal written in specific terms, such as climbing two flights of stairs without the rail.
                2. One or two supporting goals for work, sport or caring duties.
                3. A realistic timescale for each goal, as your physio judges it.
                4. The goals written at the top of your exercise programme and dated.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two or three specific, dated rehab goals are written down and confirmed by your physiotherapist."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write what you want to be able to do again in three sentences"
                - "Ask your physio to turn them into goals you can measure"
                - "Agree a rough timescale for each goal"
                - "Copy the goals onto the first page of your exercise programme"
            - name: Home exercise programme written down and filmed
              description: |-
                ## Purpose
                Most rehab happens at home between sessions, and an exercise half remembered from the clinic is often done wrongly or not at all. A programme with each exercise named, the sets, repetitions, rest and frequency your physio set, and a short phone video of you doing it under supervision, removes the guesswork.

                ## Milestones
                1. Every prescribed exercise listed with sets, repetitions, holds and how many times a week.
                2. A short video of you doing each exercise correctly, filmed during a session.
                3. The cue your physio gave for each exercise noted in a sentence.
                4. A printed or phone copy kept where you exercise.

                ## Notes
                Start from the **Training program** template. Ask before filming in the clinic; most physios are happy to help.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written home programme lists every prescribed exercise with sets, reps and cues, and each has a reference video."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio to write down the sets, reps and frequency for each exercise"
                - "Film yourself doing each exercise while your physio watches"
                - "Add the key coaching cue under each exercise"
                - "Print the programme or save it to your phone home screen"
            - name: Stop signs card for home exercise
              description: |-
                ## Purpose
                Some symptoms during rehab mean stop and get advice today rather than push through: calf pain and swelling after surgery or a leg injury, new numbness, a joint giving way, fever or a wound that changes. Asking your physio for the list that applies to you and keeping it on a card stops you guessing at the worst moment.

                ## Milestones
                1. Your physio's list of warning signs for your injury written down in their words.
                2. For each sign, who to contact: the physio, your doctor, the surgical team or emergency services.
                3. Phone numbers for the clinic and out-of-hours help on the same card.
                4. The card kept with your exercise programme and shown to someone at home.

                ## Notes
                Calf pain with swelling, sudden breathlessness or chest pain can signal a blood clot and need urgent care, not a call back next week.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card listing your warning signs and who to call for each sits with your exercise programme."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your physio which symptoms mean stop exercising and seek help"
                - "Write the signs and the right contact for each on one card"
                - "Add the clinic and out-of-hours numbers"
                - "Show the card to the person you live with"
            - name: Home rehab corner and basic equipment
              description: |-
                ## Purpose
                Exercises happen more often when the band, mat and step are already out than when they live in a cupboard. Setting aside a small space and buying only the kit your programme actually uses, often a mat, a set of bands and a sturdy step, costs little and removes a daily excuse.

                ## Milestones
                1. A space with room to lie down and a wall or chair to hold, cleared and kept clear.
                2. The equipment your programme names listed, with anything you already own ticked off.
                3. Missing items bought within a set budget, at the resistance levels your physio suggested.
                4. Everything stored within reach of the exercise space.

                ## Notes
                Start from the **Purchase decision** template. Ask before buying heavier weights or a machine; many programmes need neither in the first months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cleared exercise space holds every item your current programme needs, bought within a budget you set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a spot with floor space and a sturdy chair or wall"
                - "List the equipment named in your programme"
                - "Ask your physio which band resistances to start with"
                - "Buy the missing items within your budget"
            - name: Physiotherapy funding and session count
              description: |-
                ## Purpose
                Insurance policies often cap physiotherapy at a set number of sessions or a yearly amount, and public services may offer a fixed block. Knowing your limit at the start lets you and your physio spread sessions sensibly, for example weekly at first and then monthly, rather than running out at the hardest stage.

                ## Milestones
                1. Your session limit, excess and any pre-authorisation rules written down.
                2. The cost per session and how payment or claims work confirmed with the clinic.
                3. A session plan agreed with your physio that fits within the limit.
                4. A running count of sessions used kept in your rehab folder.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your session allowance and costs are recorded and a session plan that fits within them is agreed with your physio."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the physiotherapy section of your policy or service letter"
                - "Ask the clinic how claims and pre-authorisation work"
                - "Agree with your physio how to spread the available sessions"
                - "Update the count of sessions used against your limit @recurring(monthly:18)"
            - name: Rehab folder for letters, scans and exercise sheets
              description: |-
                ## Purpose
                Over a rehab programme you collect scan reports, surgeon letters, updated exercise sheets and receipts, usually spread across email, paper and several apps. One folder, paper or digital, in a simple order means you can hand a new clinician the whole story in minutes.

                ## Milestones
                1. One folder created with sections for letters, scans, exercise sheets, session notes and receipts.
                2. Every document you already have filed in date order.
                3. The current exercise programme kept at the front, older versions behind it.
                4. A digital copy of key letters saved where you can reach it from your phone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder holds all rehab letters, reports and programmes in date order, with key letters also on your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a folder with five labelled sections"
                - "Gather letters and reports from email and drawers into it"
                - "Photograph key letters so they are on your phone"
                - "File new letters and updated exercise sheets @recurring(monthly:25)"
            - name: Daily home exercise session
              description: |-
                ## Purpose
                Programmes work through repetition, and most people manage the first fortnight then start skipping as the novelty fades and the pain eases. A fixed time and place each day, linked to something you already do such as breakfast, and a simple tick chart help the routine survive busy weeks.

                ## Milestones
                1. A fixed daily time and place for the programme chosen.
                2. The session linked to an existing routine so it starts without a decision.
                3. A tick chart in use, with at least five of seven days marked for four straight weeks.
                4. A missed day followed by a session the next day rather than a lost week.

                ## Notes
                Start from the **Habit tracker** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tick chart shows the home programme done on at least five days a week for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Pick the time of day you will do the programme"
                - "Set up a habit tracker with one row per exercise day"
                - "Link the session to something you already do every day"
                - "Do your home exercise programme and tick the chart @recurring(daily)"
            - name: Evening pain and stiffness check
              description: |-
                ## Purpose
                Physios often judge whether exercise load is right by how you feel that evening and the next morning, not during the session. A ten-second score at night and on waking, written beside what you did that day, shows whether to hold, progress or ease back, and gives your physio facts rather than impressions.

                ## Milestones
                1. A 0 to 10 scale and the limits your physio considers acceptable written at the top of the diary.
                2. Evening and next-morning scores recorded beside the day's exercise and activity.
                3. Any spike above your agreed limit marked with what preceded it.
                4. Two weeks of scores shown to your physio at the next session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two weeks of evening and morning pain scores, beside the day's activity, have been reviewed with your physio."
                cadence: rolling
              tasks:
                - "Start a diary with columns for activity, evening score and morning score"
                - "Copy your agreed pain limits to the top of the diary"
                - "Score your pain and stiffness before bed and note the day's activity @recurring(daily)"
                - "Bring the last two weeks of scores to your next session"
            - name: Weekly re-test of your progress measures
              description: |-
                ## Purpose
                Re-testing the baseline measures once a week, in the same way and at the same time of day, turns progress you cannot feel into numbers you can see. It also flags a plateau early, while there is still time to change the programme.

                ## Milestones
                1. Each baseline measure re-tested weekly using the method written in the log.
                2. Results entered beside the baseline so the change is visible.
                3. Any measure that has not moved in three weeks flagged for your physio.
                4. A simple chart of the main measure updated each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The metrics log shows weekly values for every baseline measure for at least eight weeks."
                cadence: rolling
              tasks:
                - "Re-test your baseline measures and log the results @recurring(weekly:sun)"
                - "Mark any measure unchanged for three weeks"
                - "Chart your main measure against the baseline"
                - "Raise flagged measures at your next physio session"
            - name: Exercise progression log
              description: |-
                ## Purpose
                Rehab only moves forward if exercises get harder at the right pace: more repetitions, more resistance, a less stable surface or less support. Logging what you actually lifted or held each week, and the rule your physio gave for stepping up, stops you either stalling for months or jumping ahead too soon.

                ## Milestones
                1. Your physio's rule for progressing each exercise written down, for example three sessions at the top of the rep range with acceptable pain.
                2. The load, reps and level of each exercise recorded weekly.
                3. Each progression logged with the date and the next-day response.
                4. Exercises that have not progressed in a month listed for review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each exercise has a written progression rule and at least six weekly entries showing load and level."
                cadence: rolling
              tasks:
                - "Ask your physio when and how to make each exercise harder"
                - "Add columns for load and level to your programme sheet"
                - "Record this week's load, reps and level for each exercise @recurring(weekly:wed)"
                - "List exercises stuck at the same level for a month"
            - name: Notes after every physio session
              description: |-
                ## Purpose
                Within a day most people remember only half of what the physio said, and the details are often what matters: a new cue, a changed rep range, a warning about one movement. Five minutes of notes straight after each session, in the same format, gives you a record to check later and share with anyone else treating you.

                ## Milestones
                1. A standard note format: date, what was assessed, programme changes, advice and next appointment.
                2. Notes written within an hour of every session.
                3. Programme changes copied into your home exercise sheet the same day.
                4. Questions for the next session added to the bottom as they come up.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every physiotherapy session since the start of the programme has a dated note recording any programme changes."
                cadence: rolling
              tasks:
                - "Set up a session note page from the meeting notes template"
                - "Write notes within an hour of leaving your next session"
                - "Copy any programme changes into your exercise sheet that day"
                - "Keep a running list of questions for the next appointment"
            - name: Weekly rehab plan around work and family
              description: |-
                ## Purpose
                A programme that assumes an empty diary falls apart at the first late shift or school run. Sitting down once a week to place exercise sessions, appointments, rest days and heavier activities such as a long drive or a day of childcare keeps the load steady and the sessions realistic.

                ## Milestones
                1. Exercise sessions placed in the week's diary around fixed commitments.
                2. Physio appointments and travel time blocked out.
                3. Days with heavy activity identified and the programme adjusted for them as your physio advised.
                4. One easier day each week protected, if your programme includes one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks a written weekly plan shows exercise sessions, appointments and lighter days in the diary."
                cadence: rolling
              tasks:
                - "Plan next week's exercise sessions and appointments in your diary @recurring(weekly:fri)"
                - "Mark days with long drives, lifting or childcare"
                - "Ask your physio how to adjust the programme on heavy days"
                - "Tell the people at home which times are your exercise slots"
            - name: Monthly rehab progress review
              description: |-
                ## Purpose
                Weekly numbers wobble, while a monthly look shows the direction. Comparing this month's measures, pain diary and attendance against your goals tells you whether rehab is on track, and turns a vague sense of being stuck into a specific question for your physio.

                ## Milestones
                1. Measures, pain scores and sessions completed summarised for the month.
                2. Each goal marked as on track, behind or achieved.
                3. One thing that helped and one that got in the way written down.
                4. Questions for the physio drafted from the review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A one-paragraph monthly summary with the status of each goal is written for at least three consecutive months."
                cadence: rolling
              tasks:
                - "Summarise the month's measures, pain scores and sessions @recurring(monthly:12)"
                - "Mark each goal as on track, behind or achieved"
                - "Ask the agent to draft questions for your physio from the summary"
                - "Bring the questions to your next appointment"
            - name: Flare-up and setback plan
              description: |-
                ## Purpose
                Nearly everyone in rehab has a bad week: a long day on your feet, a stumble or a session pushed too hard. A written plan agreed in advance, covering how far to drop back, what to keep doing, how long to wait and when to call the clinic, stops one bad day turning into a fortnight of doing nothing.

                ## Milestones
                1. The signs that count as a flare for you, as your physio describes them, written down.
                2. The step-back version of your programme agreed, for example the previous week's level.
                3. A time limit after which you contact the clinic if things have not settled.
                4. The plan kept beside the exercise programme and the stop signs card.

                ## Notes
                A flare is different from a warning sign. Keep the stop signs card for symptoms that need medical attention.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page flare-up plan with step-back levels and a trigger for contacting the clinic is agreed with your physio and filed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your physio what a flare looks like for your injury"
                - "Write the step-back version of your programme"
                - "Note how many days to wait before calling the clinic"
                - "Read the plan through and update it with your physio @recurring(quarterly)"
            - name: Appointment booking and attendance routine
              description: |-
                ## Purpose
                Popular clinics fill their evening slots weeks ahead, and a missed booking can leave a gap of a fortnight at the stage where supervision matters most. Booking the next appointment before you leave, and checking each month that the next four weeks are covered, keeps sessions at the frequency your physio planned.

                ## Milestones
                1. The next appointment booked before leaving each session.
                2. All booked appointments in your calendar with travel time.
                3. The clinic's cancellation policy and late-cancellation fee noted.
                4. A monthly check confirming the coming four weeks are booked.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every planned session for the next four weeks is booked and in your calendar at each monthly check."
                cadence: rolling
              tasks:
                - "Book the next appointment before leaving each session"
                - "Note the clinic's cancellation policy and fee"
                - "Add every booked session to your calendar with travel time"
                - "Check the next four weeks of appointments are booked @recurring(monthly:3)"
            - name: Keeping fit around an injury
              description: |-
                ## Purpose
                Weeks of resting one injured joint can cost a lot of general fitness, which makes the return harder. Asking your physio which activities are safe now, such as an upper-body session for a leg injury or cycling for a wrist fracture, keeps heart, lungs and the rest of the body working while the injured part recovers.

                ## Milestones
                1. A list of activities your physio says are safe at your current stage.
                2. One or two cross-training sessions a week placed in your plan.
                3. Any activity that aggravates the injury noted and dropped.
                4. The list updated after each re-assessment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one physio-approved cross-training session a week has been completed for six consecutive weeks."
                cadence: rolling
              tasks:
                - "Ask your physio which activities are safe at this stage"
                - "Pick one or two you can do near home or work"
                - "Do a cross-training session your physio approved @recurring(weekly:tue,sat)"
                - "Note any session that aggravates the injury"
            - name: Correct form for each prescribed exercise
              description: |-
                ## Purpose
                Small form errors, such as a knee drifting inwards on a step-down or a shoulder hitching during a raise, can shift the work away from the tissue you are trying to strengthen. Learning the two or three key cues for each exercise, and checking yourself on video, means the work you do at home is the work your physio prescribed.

                ## Milestones
                1. The key cues for each exercise written beside it.
                2. A video of yourself doing each exercise compared with the reference video.
                3. Any differences shown to your physio and corrected.
                4. Each exercise done to your physio's satisfaction without prompting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your physio has watched you perform every exercise in the programme and confirmed the form without corrections."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the key cues under each exercise on your sheet"
                - "Film yourself doing the whole programme at home"
                - "Compare your video with the clinic reference videos"
                - "Ask your physio to check the exercises that looked different"
            - name: Understanding your injury and healing timeline
              description: |-
                ## Purpose
                Different tissues heal at different speeds: muscle strains often settle in weeks, while tendons, ligaments and bone can take months. Knowing roughly where you are in that timeline, as your physio explains it for your injury, makes slow progress less alarming and keeps you from loading too hard in the early weeks.

                ## Milestones
                1. Your diagnosis written in plain words, with the tissue involved named.
                2. The typical healing stages for your injury explained by your physio and noted.
                3. Your current stage and the expected time to the next one recorded.
                4. One reliable source, such as your clinic's leaflet or a professional body's patient page, saved.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page note explains your diagnosis, the tissue involved, your current healing stage and the expected timeline."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio to name the tissue injured and its healing stages"
                - "Write a plain-language note of where you are now"
                - "Save one patient leaflet from your clinic or a professional body"
                - "Add the expected date of the next stage to your calendar"
            - name: Using a pain scale to judge exercise load
              description: |-
                ## Purpose
                Hurt does not always mean harm in rehab, and many programmes allow some discomfort during exercise as long as it settles within a set time. Learning the scale your physio uses and the limits they set for you replaces fear or bravado with a rule you can apply on your own.

                ## Milestones
                1. The pain scale your physio uses written down, with what each band means.
                2. Your personal limits for pain during exercise and the next morning noted.
                3. Two or three sessions scored and checked against those limits.
                4. Any confusion about the rule cleared up at the next appointment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your written pain limits for during and after exercise are agreed with your physio and applied in your diary."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your physio which pain scale and limits apply to you"
                - "Write the limits on the front of your programme"
                - "Score your next three sessions against the limits"
                - "Raise any session where the rule felt unclear"
            - name: Rating effort with RPE and reps in reserve
              description: |-
                ## Purpose
                Later in rehab, strength work needs real effort, and a set of ten that felt easy does far less than one that left two repetitions in the tank. Learning to rate effort on a 1 to 10 scale, or by counting the reps you had left, lets you and your physio set loads that are hard enough without guessing at weights.

                ## Milestones
                1. The effort scale your physio prefers understood and written on your sheet.
                2. Target effort levels for each strength exercise recorded.
                3. Two weeks of sessions logged with effort ratings.
                4. Loads adjusted with your physio where ratings were too easy or too hard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two weeks of strength sessions carry an effort rating for each exercise, reviewed with your physio."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio which effort scale to use and the target for each exercise"
                - "Add an effort column to your progression log"
                - "Rate the effort of each set for two weeks"
                - "Review the ratings with your physio and adjust loads"
            - name: Safe use of resistance bands and home weights
              description: |-
                ## Purpose
                Snapped bands, slipping door anchors and dropped dumbbells can set rehab back by weeks. Learning how to check bands for nicks, anchor them securely and keep weights within easy reach takes half an hour and protects the injury you are trying to fix.

                ## Milestones
                1. Each band checked for nicks and thinning, with damaged ones thrown away.
                2. A secure anchor point chosen and tested for band exercises.
                3. Weights stored at waist height or on a stable surface to avoid awkward lifts.
                4. Band colours and their resistance levels noted on your programme.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every band has been inspected, an anchor point tested and band resistances recorded on your programme."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Inspect each band for nicks and thin patches"
                - "Test a door anchor or fixed point before full use"
                - "Write each band colour and its resistance on your programme"
                - "Move weights to a surface you can reach without bending"
            - name: Balance and proprioception practice
              description: |-
                ## Purpose
                Ankle sprains, knee injuries and spells in bed often dull the body's sense of joint position, which is one reason the same injury comes back. Practising the balance exercises your physio prescribes, from standing on one leg to stepping onto a soft surface, rebuilds that sense through short, regular sessions over a few weeks.

                ## Milestones
                1. Your balance exercises listed in order of difficulty, as your physio set them.
                2. A safe set-up beside a counter or wall used for every session.
                3. Hold times or step counts recorded twice a week.
                4. Each level passed using the test your physio gave before moving on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Balance hold times or levels are recorded twice a week for six weeks, with each progression checked by your physio."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your physio for your balance exercises in order of difficulty"
                - "Set up beside a kitchen counter or wall for support"
                - "Do your balance exercises and record the hold times @recurring(weekly:mon,thu)"
                - "Show your physio the record before moving up a level"
            - name: Reading scan reports and clinic letters
              description: |-
                ## Purpose
                Scan reports are written for doctors, and words like effusion, partial thickness tear or degenerative change can sound worse than they are, or better. Going through your report with your physio or doctor, and writing down what each finding means for your rehab, stops you lying awake over a phrase.

                ## Milestones
                1. Unfamiliar terms in each report underlined.
                2. Each term explained by your physio or doctor and noted in plain words.
                3. What the findings mean for your rehab, if anything, recorded.
                4. The annotated report filed in your rehab folder.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each scan report you hold has a plain-language note of its findings, confirmed by a clinician."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Underline every unfamiliar term in your scan reports"
                - "Ask your physio or doctor to explain the underlined terms"
                - "Write what the findings mean for your rehab"
                - "File the annotated report in your rehab folder"
            - name: Public waiting list or private physiotherapy
              description: |-
                ## Purpose
                Where public physiotherapy has a waiting list of several weeks, paying privately or using a workplace scheme can start rehab sooner, at a cost. Comparing the wait, total cost and continuity of each option for your injury lets you decide on facts rather than frustration.

                ## Milestones
                1. The public waiting time for your referral confirmed.
                2. Private or insured options priced for the likely number of sessions.
                3. Any workplace, union or sports club scheme checked.
                4. A choice made and recorded, with a review point if the wait changes.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of public, private and workplace options with waits and costs ends in a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the public service for your expected waiting time"
                - "Price a course of private sessions at two clinics"
                - "Check whether your employer, union or club offers physiotherapy"
                - "Record which route you chose and why"
            - name: Brace, support or taping decision
              description: |-
                ## Purpose
                Braces, sleeves and tape are sold for almost every joint, and some help in the short term while others can keep a joint weak if worn too long. Asking your physio whether a support suits your injury, when to wear it and when to stop gives you a plan instead of a habit.

                ## Milestones
                1. Your physio's view on whether a support or taping suits your injury recorded.
                2. If yes, the type, fit and when to wear it written down.
                3. A plan for weaning off the support agreed.
                4. The date you stopped using it noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on using a brace, sleeve or tape, with wearing rules and a weaning plan if one is used."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your physio whether a brace, sleeve or tape would help now"
                - "Get fitted for the type they suggest, if any"
                - "Write down when to wear it and when not to"
                - "Agree the signs that mean you can stop using it"
            - name: Weaning off crutches or a walking aid
              description: |-
                ## Purpose
                Coming off crutches too fast can bring back a limp that is hard to lose, while staying on them too long delays the return of strength. Following the stages your physio sets, often two crutches, then one, then a stick or nothing indoors, with a check at each stage, gets you walking evenly sooner.

                ## Milestones
                1. The stages and the test for moving between them written down with your physio.
                2. Each stage reached and dated.
                3. Walking indoors without an aid and without a limp, as your physio judges it.
                4. Outdoor walking without the aid agreed, and the aid returned or stored.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "You walk without an aid indoors and outdoors, with each stage dated and the final step confirmed by your physio."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your physio for the stages for reducing your walking aid"
                - "Practise the next stage indoors along a hallway"
                - "Date each stage as you reach it"
                - "Return borrowed crutches to the hospital or clinic"
            - name: Phased return to work plan
              description: |-
                ## Purpose
                Going back to full hours and full duties on the first day is a common cause of setbacks, especially in physical jobs. A written plan agreed with your employer and informed by your physio, with reduced hours or adjusted tasks for a set number of weeks, lets rehab continue while you earn.

                ## Milestones
                1. Your physio's view on the tasks and hours you can manage now recorded.
                2. A fit note or work capability note obtained from your doctor, if your system requires one.
                3. A phased plan agreed with your manager or occupational health, with dates.
                4. Time for exercises and appointments built into the working week.
                5. A review date set for moving to full duties.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dated phased return plan is agreed in writing with your employer and includes time for rehab appointments."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your physio which tasks and hours are realistic now"
                - "Request a fit note or work note from your doctor if needed"
                - "Ask the agent to draft a phased return proposal for your manager"
                - "Agree the plan and a review date with your manager"
            - name: Return to driving after a limb injury
              description: |-
                ## Purpose
                Driving with a weak leg, a cast or a stiff shoulder can be unsafe and may affect your insurance, yet clear rules are rare. Checking with your clinician what you need to be able to do, such as braking hard and turning to look over your shoulder, and telling your insurer if required, means you get back behind the wheel on solid ground.

                ## Milestones
                1. Your clinician's view on when driving is reasonable for your injury recorded.
                2. Your insurer's position checked and noted.
                3. The movements needed, such as pressing the brake firmly and turning to check blind spots, tried while parked.
                4. A first short drive completed with another driver in the car.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on returning to driving, with your clinician's view and your insurer's position noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio or surgeon what you must be able to do before driving"
                - "Call your insurer to check their rules after an injury"
                - "Try the pedals and steering while parked"
                - "Arrange a short first drive with another driver beside you"
            - name: Trimming a long exercise list to the essentials
              description: |-
                ## Purpose
                Twelve exercises taking an hour is the list that gets abandoned, and programmes tend to grow as rehab goes on. Asking your physio to rank them and pick the four that matter most for your goals gives you a short version for busy days and a full version for when time allows.

                ## Milestones
                1. Your full programme timed from start to finish.
                2. Exercises ranked by your physio in order of importance for your goals.
                3. A short version of three or four exercises written out.
                4. A rule agreed for how often the full version must still be done.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranked programme with a short version of three or four exercises is agreed with your physio."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Time your full programme from start to finish"
                - "Ask your physio to rank the exercises by importance"
                - "Write out a short version of the top four"
                - "Agree how many full sessions a week you still need"
            - name: Second opinion when progress stalls
              description: |-
                ## Purpose
                If measures have not moved for six weeks despite doing the programme, something may need rethinking: the diagnosis, the dose or the approach. Raising it directly, asking what else could explain the plateau and, where reasonable, getting a review from a senior physio or a sports and exercise doctor beats months more of the same.

                ## Milestones
                1. Evidence of the plateau gathered: weekly measures, attendance and pain diary.
                2. The plateau raised with your physio and their explanation recorded.
                3. A changed plan, a scan or a referral for a second opinion agreed.
                4. The outcome of any second opinion filed and shared with your physio.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A plateau of six weeks or more has been raised with evidence and led to a recorded change of plan or second opinion."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pull together six weeks of measures and attendance"
                - "Ask your physio directly what could explain the plateau"
                - "Ask whether a senior review or specialist opinion would help"
                - "Share the second opinion with your treating physio"
            - name: Moving from home exercises to a gym
              description: |-
                ## Purpose
                Bands and body weight stop being enough in the later stages of rehab, and heavier loading usually means a gym. Moving across with a written programme from your physio, an induction on the machines you need and a check that your form holds under load keeps progress going once home exercises run out of challenge.

                ## Milestones
                1. A gym near home or work chosen, with the equipment your physio named.
                2. A gym version of your programme written by your physio.
                3. An induction completed on the machines and free weights you will use.
                4. One filmed or supervised session checked by your physio for form under load.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "You train from a physio-written gym programme, with form under load checked by your physio at least once."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your physio to write a gym version of your programme"
                - "Find a gym near home or work with the kit it needs"
                - "Book an induction on the machines you will use"
                - "Film a gym session for your physio to check"
            - name: Six-week re-assessment with your physio
              description: |-
                ## Purpose
                Around six weeks in is a natural point to measure properly against the baseline and decide the next phase. Preparing your log, diary and questions turns the session into a review of real data, and it should end with an updated programme and a revised timescale for your goals.

                ## Milestones
                1. Baseline and current measures laid side by side before the appointment.
                2. Pain diary and attendance summarised on one page.
                3. Measures re-tested in the clinic and compared.
                4. An updated programme and revised goal timescales recorded.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A re-assessment has compared current measures with the baseline and produced an updated programme and goal dates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a longer re-assessment slot around week six"
                - "Put baseline and current measures side by side"
                - "Write three questions about the next phase"
                - "File the updated programme in your rehab folder"
            - name: Surgeon or fracture clinic review during rehab
              description: |-
                ## Purpose
                Fracture clinic and post-operative reviews often decide what you are allowed to do next, such as full weight-bearing or removing a brace, and those decisions change your physio programme. Bringing a short rehab summary and passing the outcome straight to your physio stops a week being lost between the two.

                ## Milestones
                1. A half-page summary of your rehab progress prepared for the consultant.
                2. Questions about load limits, restrictions and next steps written down.
                3. The consultant's decisions recorded during or straight after the review.
                4. The outcome sent to your physio within two days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The outcome of the surgical or fracture clinic review is written down and passed to your physio within two days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a half-page summary of rehab progress so far"
                - "List questions about what you can now load or stop wearing"
                - "Note the consultant's decisions before you leave"
                - "Send the outcome to your physio within two days"
            - name: First hydrotherapy pool session
              description: |-
                ## Purpose
                Hydrotherapy lets you move and walk with the water taking some of your weight, which can let rehab start earlier for some injuries. A first session goes better when you know the access arrangements, what to bring and whether a wound or dressing needs to be cleared first.

                ## Milestones
                1. Clearance for pool use confirmed, including any wound or dressing checks.
                2. Access, changing arrangements and help getting in and out confirmed with the pool.
                3. Kit packed: costume, non-slip shoes, towel and water bottle.
                4. The first session's exercises noted for your programme.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You have attended a first hydrotherapy session with clearance confirmed and its exercises added to your programme."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio or surgeon whether you are cleared for the pool"
                - "Call the pool about access and changing arrangements"
                - "Pack a costume, non-slip shoes and a towel"
                - "Add the pool exercises to your programme sheet"
            - name: First run back after a leg injury
              description: |-
                ## Purpose
                The first run after a lower limb injury carries a lot of hope and some risk. Agreeing in advance what you must pass first, such as a set number of single-leg hops or calf raises, then planning a short walk-run on a flat route, makes it a milestone you can repeat rather than a test you fail.

                ## Milestones
                1. Readiness checks agreed with your physio and passed, for example hops and calf raises.
                2. A walk-run plan for the first session and the following two weeks written down.
                3. A flat, familiar route of a known distance chosen.
                4. The first session done and the next-morning response recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You pass your physio's readiness checks and complete a first walk-run session, with the next-day response logged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio which tests you must pass before running"
                - "Write the walk-run plan for the first two weeks"
                - "Choose a flat route of known distance"
                - "Log how the leg feels the morning after the first run"
            - name: Discharge appointment and maintenance handover
              description: |-
                ## Purpose
                Discharge is when supervision ends, and the exercises often stop the week you feel better, which is how many injuries come back. Going into the final session with questions about maintenance, warning signs and how to get back in quickly, and leaving with a written long-term programme, protects the work of the past months.

                ## Milestones
                1. Goals reviewed against the baseline and marked achieved or carried forward.
                2. A written maintenance programme with how often to do it.
                3. Signs that mean you should come back, and how to self-refer, written down.
                4. Final measures recorded for future comparison.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You leave the final session with a written maintenance programme, final measures recorded and a way to return if needed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio for a written maintenance programme"
                - "Record your final measures beside the baseline"
                - "Ask how to get back in quickly if symptoms return"
                - "Book a check-in three months after discharge if one is offered"
            - name: Rehab after a hospital stay or serious illness
              description: |-
                ## Purpose
                After a week or more in hospital, especially in intensive care, many people lose strength fast enough that stairs, getting out of a chair or a walk to the shops become hard. A graded programme from the hospital or community physio, with a simple measure such as how many times you can stand from a chair in 30 seconds, rebuilds everyday function at a pace your recovery allows.

                ## Milestones
                1. A discharge exercise plan obtained from the hospital or community physio.
                2. A simple everyday measure, such as chair stands in 30 seconds, recorded weekly.
                3. Everyday tasks ranked from easiest to hardest and tackled in order.
                4. A follow-up with a community physio or rehab service arranged if needed.

                ## Notes
                Recovery after critical illness is often slower than people expect, and tiredness can lag behind strength. Ask the team what pace is reasonable for you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly record of an everyday function measure shows the trend over eight weeks after hospital discharge."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the ward or community team for a written exercise plan"
                - "Count chair stands in 30 seconds and write the number down"
                - "List daily tasks from easiest to hardest"
                - "Ask your doctor about a community rehab referral if progress stalls"
            - name: Club athlete rehab with coach and physio together
              description: |-
                ## Purpose
                Club athletes often have a coach pushing for a return, a physio urging patience and a fixture list in between. Getting the two to agree a single plan, with clear criteria for each stage of the return to training, a weekly load update and one person deciding readiness, stops you being pulled in two directions.

                ## Milestones
                1. Your physio and coach introduced, with your permission to share information.
                2. A staged return-to-training plan with entry criteria for each stage agreed by both.
                3. A weekly update on training load and symptoms sent to both.
                4. One named person agreed as the decision-maker for match readiness.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A staged return-to-training plan is agreed by both coach and physio, with weekly load updates sent for at least four weeks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Give your physio permission to talk to your coach"
                - "Ask them to agree one staged return plan between them"
                - "Send coach and physio a training load and symptom update @recurring(weekly:mon)"
                - "Agree who decides when you are match ready"
            - name: Rehab around shift work or a demanding job
              description: |-
                ## Purpose
                Shift workers, carers and people with long commutes rarely have the same free hour every day. Splitting the programme into short blocks that fit around a rota, keeping a kit bag at work and booking appointments on days off makes the plan survive a working life rather than depend on a quiet one.

                ## Milestones
                1. Your programme split into blocks of ten to fifteen minutes with your physio's agreement.
                2. An exercise slot identified for each type of shift or day.
                3. A small kit bag with a band and your programme kept at work or in the car.
                4. Appointments booked on days off or around shifts for the next month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four weeks the exercise record shows sessions completed on both work days and rest days within your rota."
                cadence: rolling
              tasks:
                - "Ask your physio whether the programme can be split into short blocks"
                - "Map an exercise slot to each type of shift"
                - "Pack a band and your programme sheet in a work bag"
                - "Book physio slots around next month's rota"
            - name: Supporting a child or teenager through physiotherapy
              description: |-
                ## Purpose
                Children and teenagers recovering from sports injuries, fractures or growth-related knee and heel pain usually need a parent to book, drive, remind and encourage. Keeping exercises short and visible, agreeing with the physio what school sport is allowed and telling the school keeps rehab moving without daily battles.

                ## Milestones
                1. The physio's advice on school sport and play written down and sent to the school.
                2. The home exercises turned into a short routine your child can do in ten minutes.
                3. A tick chart or small reward agreed with your child, if it suits their age.
                4. Appointments arranged around school, with any absence notified.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The school has written guidance on allowed sport, and your child's home exercises are logged on at least four days a week for a month."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the physio what PE and club sport your child can do"
                - "Email the school the physio's advice on sport"
                - "Agree a short daily exercise time with your child"
                - "Book appointments outside lessons where possible"
            - name: Helping an older parent keep up their rehab
              description: |-
                ## Purpose
                Older adults recovering from a fall, a fracture or an illness often have exercises they forget, worry about or cannot read clearly. If you help a parent, a large-print programme, a weekly call or visit to do the exercises together and a note of what changes can be the difference between regaining independence and losing it.

                ## Milestones
                1. Your parent's agreement to your involvement and to you talking with their physio.
                2. Their programme rewritten in large print with simple pictures.
                3. A weekly time to do or check the exercises together.
                4. Changes in walking, balance or confidence noted and passed to the physio.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your parent's programme is in large print and a weekly exercise check has happened for six weeks, with notes shared with the physio."
                cadence: rolling
              tasks:
                - "Ask your parent how they would like you to help"
                - "Rewrite their programme in large print with pictures"
                - "Call or visit to go through the exercises together @recurring(weekly:sun)"
                - "Pass any change in walking or balance to their physio"
            - name: Pelvic health physiotherapy in pregnancy and after birth
              description: |-
                ## Purpose
                Pelvic girdle pain in pregnancy, leaking after birth and separation of the abdominal muscles are common and treatable, yet many people are never referred. Asking for a pelvic health physiotherapist, then keeping up the pelvic floor and core programme they set, supports a safe return to lifting, running and exercise.

                ## Milestones
                1. A referral to a pelvic health physiotherapist requested.
                2. An assessment completed and the programme written down.
                3. Pelvic floor exercises done as prescribed for at least twelve weeks.
                4. A return-to-exercise plan agreed before resuming running or heavy lifting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pelvic health physiotherapy assessment is completed and the prescribed programme logged daily for twelve weeks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your midwife or doctor for a pelvic health physio referral"
                - "Write down the programme from your first session"
                - "Do your pelvic floor exercises as prescribed @recurring(daily)"
                - "Agree a return-to-running plan before you start running"
            - name: Return-to-sport testing and criteria
              description: |-
                ## Purpose
                Returning to sport on a date rather than on criteria is a common route to re-injury. Agreeing with your physio the tests you must pass, such as strength close to the uninjured side, hop tests and sport-specific drills, and recording each result, makes the decision objective and easier to explain to a coach.

                ## Milestones
                1. A written set of return-to-sport criteria agreed with your physio.
                2. Strength and hop tests completed and compared with the uninjured side.
                3. Sport-specific drills completed at full speed without symptoms.
                4. A recorded decision on return, with a plan for the first four weeks back.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every agreed return-to-sport criterion has a recorded test result, and the return decision is written down with your physio."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your physio to write down your return-to-sport criteria"
                - "Book strength and hop testing at the clinic"
                - "Record each result against the uninjured side"
                - "Agree a reduced first month of training and matches"
            - name: Ligament reconstruction rehab phase tracker
              description: |-
                ## Purpose
                Ligament reconstruction rehab, such as after ACL surgery, typically runs nine to twelve months through phases from regaining full straightening to running, cutting and contact. Tracking which phase you are in, the criteria to leave it and the date each was met keeps a long programme from drifting in the middle months, when motivation dips.

                ## Milestones
                1. The phases of your surgeon's or physio's protocol listed with the criteria to leave each.
                2. The date each phase began and ended recorded.
                3. A monthly check of where you are against the expected timeline.
                4. Any delay discussed with your physio and the plan adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each protocol phase has a start date, an exit date and the criteria met, recorded from surgery to return to sport."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask for a copy of your surgeon's rehab protocol"
                - "List each phase with its exit criteria"
                - "Compare your current phase with the expected timeline @recurring(monthly:20)"
                - "Raise any delay of more than a month with your physio"
            - name: Injury prevention warm-up after discharge
              description: |-
                ## Purpose
                Structured warm-ups built around strength, balance and landing control have been shown to reduce knee and ankle injuries in team sports. Asking your physio to adapt one to your sport and previous injury, then doing it before every training session, keeps the gains from rehab after supervision ends.

                ## Milestones
                1. A warm-up programme chosen and adapted to your sport and previous injury by your physio.
                2. The routine timed at fifteen to twenty minutes and written on one card.
                3. The warm-up done before training sessions and ticked off each week.
                4. Your coach or team told about it, and ideally doing it too.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The adapted warm-up has been done before at least 80% of training sessions over eight weeks."
                cadence: rolling
              tasks:
                - "Ask your physio to adapt an injury prevention warm-up to your sport"
                - "Write the routine on a card for your kit bag"
                - "Do the injury prevention warm-up before training @recurring(weekly:tue,thu)"
                - "Show the routine to your coach"
            - name: Annual re-check of an old injury
              description: |-
                ## Purpose
                Old injuries tend to come back when strength quietly fades in the years after discharge. A yearly re-test of the measures from your final session, plus a review of your maintenance programme, catches a slide early and tells you whether a single physio check-up is worth booking.

                ## Milestones
                1. Your final discharge measures found in the rehab folder.
                2. The same measures re-tested once a year, in the same way.
                3. Any notable drop discussed with a physio.
                4. The maintenance programme refreshed for the year ahead.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A yearly re-test of discharge measures is recorded beside the originals, with any drop followed up with a physio."
                cadence: cyclic
              tasks:
                - "Find your discharge measures in the rehab folder"
                - "Re-test your discharge measures and compare them @recurring(yearly)"
                - "Book a single physio check-up if any measure has dropped"
                - "Refresh your maintenance programme for the year ahead"
---

# Physiotherapy Rehab Plans

This area is for anyone following a physiotherapy or rehab programme after an injury, an operation or a spell of illness, and for athletes working back to their sport. It starts with the foundations (getting referred, preparing for the first assessment, baseline measures, written goals and a home programme you can follow), then the routines that keep exercise, measures and appointments going, the skills that make home sessions safe and effective, the decisions about funding, walking aids, work and driving, the appointments worth preparing for, the situations that change the plan, and finally return-to-sport testing and long-term protection of the injury.

What repeats is a daily home session with an evening pain score, a weekly re-test, progression log and planning slot, a monthly progress review and session count, and a yearly re-check after discharge. The Vendor, Metrics log, Training program, Purchase decision, Habit tracker and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
