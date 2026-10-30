---
id: family-parenting.pregnancy-antenatal-planning
name: Pregnancy & Antenatal Planning
description: "Appointments, scans, screening choices, antenatal classes, workplace notice and the practical preparations both parents need, from the positive test to the due date."
category: personal
version: 1.0.0
tags: [family-parenting, pregnancy-antenatal-planning, parent, pregnancy, antenatal-appointments, scans, antenatal-classes, workplace-notice]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
    - purchase-decision
    - trip
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Pregnancy & Antenatal Planning
          description: "Organising pregnancy appointments, scans, antenatal classes, workplace notifications and preparations for both parents from positive test to due date."
          projects:
            - name: Confirming the pregnancy and booking in with maternity care
              description: |-
                ## Purpose
                A positive home test is usually all the evidence needed, and the next step is getting into the maternity system early, ideally before 10 weeks, so the booking appointment and first-trimester screening windows are not missed. Depending on where you live, that means calling your doctor's surgery, filling in a midwife self-referral form or contacting a private obstetrician. One phone call or form this week starts every appointment that follows.

                ## Milestones
                1. The first day of your last period and the date of the positive test written down.
                2. The way your local service accepts new pregnancies found: doctor, midwife self-referral or private clinic.
                3. A referral or self-referral submitted, with the confirmation saved.
                4. A booking appointment date in both parents' calendars.

                ## Notes
                Pain on one side, bleeding or feeling faint in early pregnancy needs your doctor, an early pregnancy unit or emergency services now, not the booking appointment.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A maternity referral has been submitted and a booking appointment date is confirmed in a calendar both parents can see."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the first day of your last period and the date of the positive test"
                - "Find out how your local maternity service accepts new pregnancies"
                - "Submit the referral or self-referral form and save the confirmation"
                - "Add the booking appointment to both parents' calendars"
            - name: Due date and week-by-week pregnancy timeline
              description: |-
                ## Purpose
                Almost every pregnancy decision has a window attached: screening tests, the mid-pregnancy scan, telling your employer, booking classes, travel cut-offs. Building one timeline from your estimated due date, with each window marked by week, means nothing arrives as a surprise and both parents can see what is coming next month. Expect the dates to shift once the dating scan confirms or corrects your due date.

                ## Milestones
                1. A provisional due date worked out from your last period and marked as provisional.
                2. A list of every week from now to 42 weeks with its calendar date beside it.
                3. Screening, scan, vaccination, workplace notice and class-booking windows marked on it.
                4. The timeline updated with the scan-confirmed due date.

                ## Notes
                Only a small share of babies arrive on the due date itself. Plan for anything from 37 to 42 weeks rather than one day.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated week-by-week timeline to 42 weeks exists, showing every screening, scan, vaccine and notice window, updated after the dating scan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out a provisional due date from the first day of your last period"
                - "List every week from now to 42 weeks with its calendar date"
                - "Mark the screening, scan and workplace notice windows on the timeline"
                - "Update the timeline with the due date from the dating scan"
            - name: Booking appointment preparation for both parents
              description: |-
                ## Purpose
                Usually the longest appointment of the pregnancy, often an hour or more, the booking visit covers both biological parents' medical and family history, previous pregnancies, medicines, work and home life. Gathering the answers beforehand, including conditions on the other parent's side of the family, means risk factors are picked up at the start and any extra care is offered early.

                ## Milestones
                1. A list of both parents' medical conditions, operations, allergies and current medicines.
                2. Family history notes for both sides, including inherited conditions, twins and diabetes.
                3. Details of any previous pregnancies and births written down.
                4. Questions for the midwife written on one page.
                5. The appointment attended and the date booking blood results are due noted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page booking summary covering both parents' history and your questions was taken to the booking appointment and filed afterwards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask close relatives on both sides about inherited conditions and family pregnancy history"
                - "List both parents' current medicines, allergies and past operations"
                - "Write your top five questions for the booking appointment"
                - "Ask the agent to turn your notes into a one-page booking summary"
                - "Note when the booking blood test results will be ready"
            - name: Medicines and supplements check in early pregnancy
              description: |-
                ## Purpose
                Prescriptions, over-the-counter painkillers, herbal remedies and gym supplements that were fine before can need changing now, and some long-term medicines must never be stopped suddenly. A single review with your doctor or pharmacist, with every packet on the table, settles what to keep, change or pause and which pregnancy supplements your health service recommends.

                ## Milestones
                1. Every medicine, supplement and remedy in the house listed with its strength.
                2. The list reviewed with a doctor, midwife or pharmacist.
                3. A written note of what to continue, change or stop, in the clinician's words.
                4. The recommended pregnancy supplements bought.

                ## Notes
                Do not stop a prescribed medicine on your own because you are pregnant. Ask first, the same day if you are worried.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every current medicine and supplement has been reviewed by a clinician, with a written continue, change or stop decision for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every medicine, supplement and herbal product into one bag"
                - "Book a medicines review with your doctor or pharmacist"
                - "Write down what to continue, change or stop as they explain it"
                - "Buy the pregnancy supplements your health service recommends"
            - name: Maternity triage number and urgent symptoms card
              description: |-
                ## Purpose
                Most maternity units run a triage or assessment line for anyone pregnant, and their list of reasons to call is specific: bleeding, fluid leaking, a severe headache or blurred vision, a baby moving less than usual, severe pain or intense itching. A card with the number, the symptoms in your unit's own wording and the hospital address means nobody hesitates or searches online at two in the morning.

                ## Milestones
                1. Your maternity unit's triage or assessment number found and saved in both phones.
                2. The unit's list of symptoms that need a call copied onto one card.
                3. The hospital address, parking and out-of-hours entrance noted.
                4. The card on the fridge and a photo of it in both phones.

                ## Notes
                Use your own unit's wording rather than a list from the internet, because units differ in what they want you to call about.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card with the triage number, your unit's urgent symptoms and the hospital address is on the fridge and photographed in both phones."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your maternity unit's triage phone number and save it in both phones"
                - "Copy the unit's list of reasons to call onto one card"
                - "Add the hospital address, parking and out-of-hours entrance to the card"
                - "Put the card on the fridge and send a photo of it to your partner"
            - name: Shared pregnancy records folder
              description: |-
                ## Purpose
                Pregnancy produces a surprising amount of paper and data: handheld notes or an app, blood results, scan pictures, letters, a pregnancy certificate for work and receipts. Keeping it in one folder that both parents can reach, with paper and digital copies mirrored, means the right document is to hand at an unplanned triage visit or when a clinician asks what was said at 20 weeks.

                ## Milestones
                1. One physical folder and one shared digital folder set up with the same sections.
                2. Sections for notes, results, scans, work documents and receipts.
                3. Everything received so far filed.
                4. Both parents able to open the maternity app or digital notes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared folder holds every letter, result and scan report received so far, and both parents can open it and the maternity notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a shared digital folder with sections for notes, results, scans, work and receipts"
                - "Photograph paper letters and results into the digital folder"
                - "Make sure both parents can log in to the maternity app or notes"
                - "File new letters, results and scan pictures @recurring(monthly:14)"
            - name: Antenatal appointments mapped in a shared calendar
              description: |-
                ## Purpose
                For a first pregnancy without complications, expect around ten midwife appointments plus two scans, and more if extra monitoring is needed. Putting the expected schedule into a shared calendar now, as placeholders to confirm later, lets both parents plan work and childcare around them and shows straight away when an appointment has not been booked.

                ## Milestones
                1. Your service's usual appointment schedule for your situation obtained from the midwife or notes.
                2. A placeholder for each expected appointment in a shared calendar.
                3. Each placeholder replaced with a confirmed date and time as it is booked.
                4. Travel time and who attends added to each entry.

                ## Notes
                Schedules differ between countries and between first and later pregnancies. Use your own service's schedule, not a generic one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every expected antenatal appointment to 41 weeks sits in a shared calendar, with confirmed ones marked and attendees named."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your midwife for the usual appointment schedule for your pregnancy"
                - "Add a placeholder event for each expected appointment"
                - "Mark which appointments the partner wants to attend"
                - "Confirm each placeholder as soon as the real date arrives"
            - name: Partner's involvement plan for appointments and classes
              description: |-
                ## Purpose
                Partners who are not pregnant often feel like spectators, and work makes it easy to miss everything except the scans. Agreeing which appointments, classes and decisions they will be part of, and requesting the time off early, gives them a real role and puts a second pair of ears in the room when results are discussed.

                ## Milestones
                1. A list of the appointments and classes the partner will attend.
                2. Time off booked or requested for each one.
                3. A role agreed for appointments, such as note taker or question asker.
                4. A short list of topics the partner wants to learn about before the birth.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The partner's attendance at named appointments and classes is agreed, with time off requested for each and a role decided."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Go through the appointment calendar together and choose which to attend as a pair"
                - "Request time off for the scans and the classes first"
                - "Agree who takes notes and who asks questions in appointments"
                - "List three topics the partner wants to understand before the birth"
            - name: Pregnancy costs budget from test to due date
              description: |-
                ## Purpose
                Costs before the baby arrives add up quietly: travel and parking for appointments, maternity clothes, classes, supplements, kit, possibly private scans and a drop in income later. A simple budget for the months until the due date, checked monthly, shows what can come from income, what needs saving and where borrowed or second-hand items make sense.

                ## Milestones
                1. Expected costs listed by month until the due date.
                2. Known entitlements, such as free prescriptions or dental care where they apply, taken into account.
                3. A monthly amount to set aside agreed by both parents.
                4. Spending compared with the budget at the end of each month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A month-by-month pregnancy budget to the due date exists, with an agreed monthly saving and at least three monthly comparisons recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the costs you expect between now and the due date, month by month"
                - "Mark which items could be borrowed, gifted or bought second-hand"
                - "Agree a monthly amount to set aside together"
                - "Compare the month's pregnancy spending with the budget @recurring(monthly:24)"
            - name: Deciding when and how to share the news
              description: |-
                ## Purpose
                Many parents wait until after the first scan, others tell close family straight away for support, and the order matters to people: grandparents first, a best friend, colleagues, social media. Agreeing who hears when, and who you would lean on if there were bad news, avoids one parent telling someone the other wanted to tell themselves.

                ## Milestones
                1. A shared decision on whether to tell anyone before the first scan.
                2. A list of people in the order you want to tell them.
                3. An agreement on whether and when to post anything online.
                4. Two or three people named who would support you if the pregnancy ended early.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written order of who will be told and when is agreed by both parents, including a decision about social media."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Talk through who you each want to tell before the first scan"
                - "Write the list of people in the order you will tell them"
                - "Agree whether and when anything goes on social media"
                - "Name the people you would lean on if there were bad news"
            - name: Weekly pregnancy check-in as a couple
              description: |-
                ## Purpose
                Pregnancy changes week by week, and so do the worries: money, the birth, work, sleep, how the other parent is coping. A fifteen-minute check-in each weekend, with the timeline open, turns those into a short list of actions and stops one parent carrying all the planning in their head.

                ## Milestones
                1. A fixed weekly slot agreed.
                2. A three-question format in use: how are you, what is coming up, what needs deciding.
                3. Actions from each check-in written into the relevant project.
                4. Twelve check-ins held.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly check-ins have been held, each leaving at least one dated action in a project."
                cadence: rolling
              tasks:
                - "Agree a fixed fifteen-minute slot each weekend"
                - "Write the three check-in questions where you both can see them"
                - "Hold the weekly pregnancy check-in with the timeline open @recurring(weekly:sun)"
                - "Move each agreed action into the right project the same day"
            - name: Before and after every antenatal appointment
              description: |-
                ## Purpose
                Appointments are short and it is easy to come out remembering half of what was said. A small routine, with questions written the day before and readings and next steps noted straight after, builds a running record of blood pressure, urine results, bump measurements and plans that is invaluable if care changes hands.

                ## Milestones
                1. A running question list kept between appointments.
                2. A one-page note after each appointment with readings, results and next steps.
                3. Every follow-up action given a date.
                4. Notes from at least four appointments in the records folder.

                ## Notes
                Start from the **Meeting notes** template for each appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written notes with readings and next steps exist for at least four consecutive antenatal appointments."
                cadence: rolling
              tasks:
                - "Start a running question list in your phone"
                - "Note readings, results and next steps straight after each appointment"
                - "Book any follow-up the clinician asked for before leaving the building"
                - "Tidy the question list and drop the answered questions @recurring(monthly:2)"
            - name: Pregnancy symptom and wellbeing log
              description: |-
                ## Purpose
                Nausea, tiredness, headaches, swelling, heartburn and low mood come and go, and without notes it is hard to tell a clinician whether something is new, worse or steady. A weekly log of symptoms, sleep and mood takes five minutes and lets you answer how have you been with dates instead of guesses.

                ## Milestones
                1. A log with columns for date, week of pregnancy, symptoms, sleep, mood and notes.
                2. An entry for every week since the log began.
                3. Anything that worsened flagged for the next appointment.
                4. The log brought to appointments.

                ## Notes
                Start from the **Metrics log** template. The log is for patterns; anything sudden or severe goes to triage, not the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds at least eight consecutive weekly entries, and worsening symptoms have been raised at an appointment."
                cadence: rolling
              tasks:
                - "Create a symptom log from the metrics log template"
                - "Fill in the week's symptoms, sleep and mood @recurring(weekly:wed)"
                - "Flag any symptom that has worsened for the next appointment"
                - "Ask the agent to summarise the last month of entries before an appointment"
            - name: Knowing your baby's movement pattern
              description: |-
                ## Purpose
                From around 16 to 24 weeks you start to feel movements, and by the third trimester most babies have a pattern of their own. Health services now ask parents to learn that pattern rather than count to a fixed number, and to call the maternity unit straight away if movements slow, change or stop. A daily moment of attention, with the triage number ready, is the whole routine.

                ## Milestones
                1. The date of first movements noted.
                2. Your baby's usual active times written down by about 28 weeks.
                3. The call-straight-away rule agreed by both parents.
                4. Any change reported to triage the same day.

                ## Notes
                Do not wait until the next day and do not rely on a home heartbeat device for reassurance. If you are unsure, call.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your baby's usual active times are written down and both parents have agreed that any reduced movement means calling triage the same day."
                cadence: rolling
              tasks:
                - "Note the date you first feel movements"
                - "Write down when your baby is usually most active"
                - "Spend a few minutes noticing movements at a usual active time @recurring(daily)"
                - "Agree that any reduced movement means calling triage the same day"
            - name: Daily supplement and prescription routine
              description: |-
                ## Purpose
                The supplements your health service recommends work only if taken regularly, and pregnancy tiredness makes daily tablets easy to forget. Tying them to an existing habit, with repeat prescriptions ordered before they run out, removes one daily decision and keeps any prescribed medicine uninterrupted.

                ## Milestones
                1. Each supplement and medicine tied to a fixed time and an existing habit.
                2. A visible place to keep them.
                3. Repeat prescriptions ordered with a week's supply still left.
                4. Changes made only after asking the clinician.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No missed repeat prescriptions over three months, and supplements taken on at least six days in seven."
                cadence: rolling
              tasks:
                - "Choose one existing daily habit to pair the supplements with"
                - "Take the supplements your clinician recommended @recurring(daily)"
                - "Order repeat prescriptions with a week's supply left @recurring(monthly:18)"
                - "Ask at each appointment whether the supplements should change"
            - name: Weekly meal plan with pregnancy food safety
              description: |-
                ## Purpose
                Food advice in pregnancy covers things to avoid, such as certain soft cheeses, raw or undercooked foods and some fish, as well as eating well when nausea or heartburn limit what you can face. Planning the week's meals against your health service's list, with easy options for bad days, makes the safe choice the default for whoever cooks.

                ## Milestones
                1. Your health service's foods-to-avoid list saved where the cook can see it.
                2. A weekly meal plan with two easy nausea-day options.
                3. A shopping list built from each plan.
                4. Eight weeks of meal plans completed.

                ## Notes
                Start from the **Weekly meal plan** template. Lists differ a little between countries; follow your own health service's version.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly meal plans have been written against the foods-to-avoid list, each with two easy options for bad days."
                cadence: rolling
              tasks:
                - "Put your health service's list of foods to avoid on the fridge"
                - "Plan the week's meals with two easy options for bad days @recurring(weekly:sat)"
                - "Build the shopping list from the meal plan"
                - "Ask your midwife about any food you are unsure of"
            - name: Pregnancy-safe exercise routine
              description: |-
                ## Purpose
                Staying active usually helps with sleep, back pain and mood, but what suits you depends on your pregnancy and your fitness before it. Agreeing a routine with your midwife, then booking it twice a week like an appointment, keeps it going through tiredness and lets it change as the bump grows.

                ## Milestones
                1. Your midwife or doctor asked what activity suits your pregnancy.
                2. Two weekly sessions chosen, such as walking, swimming or a pregnancy class.
                3. Instructors told you are pregnant and how many weeks.
                4. The routine adapted at least once as pregnancy progresses.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two exercise sessions a week, cleared by your midwife, have been kept for at least eight weeks."
                cadence: rolling
              tasks:
                - "Ask your midwife what exercise suits your pregnancy"
                - "Choose two weekly sessions you would enjoy"
                - "Tell any instructor how many weeks pregnant you are"
                - "Do a planned pregnancy-safe exercise session @recurring(weekly:mon,thu)"
            - name: Pelvic floor exercise habit
              description: |-
                ## Purpose
                Pelvic floor exercises in pregnancy reduce the chance of leaking afterwards, yet many people do them wrongly or give up after a fortnight. Learning the technique from a midwife or pelvic health physiotherapist and attaching a short daily set to something you already do makes it stick before the birth, when it is easiest to start.

                ## Milestones
                1. Technique checked by a midwife or physiotherapist.
                2. A daily set linked to an existing habit.
                3. A month of daily sets logged.
                4. A plan to restart the sets after the birth written down.

                ## Notes
                Start from the **Habit tracker** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Technique has been checked by a professional and a daily set has been logged on at least 25 days of a month."
                cadence: rolling
              tasks:
                - "Ask your midwife or a pelvic health physiotherapist to check your technique"
                - "Link the exercises to something you already do every day"
                - "Do one set of pelvic floor exercises @recurring(daily)"
                - "Tick off each day in the habit tracker"
            - name: Monthly look ahead on the pregnancy timeline
              description: |-
                ## Purpose
                Windows close without warning: a screening test can only be done in certain weeks, classes fill months ahead and the workplace notice has a legal deadline in many countries. Ten minutes at the start of each month comparing the timeline with what is booked catches anything due in the next six weeks while there is still time to arrange it.

                ## Milestones
                1. A monthly slot in the calendar.
                2. Each review listing what falls due in the next six weeks.
                3. Anything unbooked booked or given to one parent with a date.
                4. Monthly reviews held until 36 weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly look ahead has been held every month until 36 weeks, with no screening, notice or vaccine window missed."
                cadence: rolling
              tasks:
                - "Set a monthly calendar slot for the timeline review"
                - "List everything due in the next six weeks @recurring(monthly:5)"
                - "Give each unbooked item to one parent with a date"
            - name: Screening and diagnostic test choices
              description: |-
                ## Purpose
                Early in pregnancy you will be offered screening for conditions such as Down's syndrome and sometimes further diagnostic tests, each with its own window, accuracy and risk. Understanding the options before the dating scan, and deciding together what you do and do not want, means the choice is yours rather than made in a rushed appointment. Declining screening is a valid choice too.

                ## Milestones
                1. Your service's screening information read by both parents.
                2. The difference between a screening result and a diagnostic test understood.
                3. Questions about accuracy, timing and next steps answered by your midwife.
                4. A joint decision on each test recorded in your notes.
                5. The windows for the chosen tests marked on the timeline.

                ## Notes
                If a result comes back as a higher chance, ask for time and for a screening specialist midwife or genetic counsellor before deciding anything further.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A joint accept or decline decision for each offered screening test is recorded in the notes before the dating scan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your maternity service's screening leaflet together"
                - "Write down what you would each want to know and why"
                - "Ask the midwife how accurate each test is and what follows a higher-chance result"
                - "Record your decision on each test and mark its window on the timeline"
            - name: Reading scan reports and test results
              description: |-
                ## Purpose
                Results arrive as numbers and abbreviations: blood group and antibodies, haemoglobin, a screening chance written as 1 in 2,500, crown-rump length, placenta position. Learning what each line refers to, and asking what it means for you, turns a worrying letter into a clear question for the next appointment.

                ## Milestones
                1. A plain-words glossary of the terms on your own reports.
                2. Each result filed with a one-line meaning given by your clinician.
                3. Questions about any unclear result raised at the next appointment.
                4. Your blood group and rhesus status known by both parents.

                ## Notes
                A glossary explains words, not your situation. What a result means for you is your clinician's call.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every result received so far is filed with a one-line explanation from your clinician, and both parents know the blood group and rhesus status."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Collect every result and scan report you have so far"
                - "Ask the agent to explain each abbreviation in plain words"
                - "Underline anything you want your midwife to explain"
                - "Write your clinician's explanation beside each result"
            - name: Choosing and booking antenatal classes
              description: |-
                ## Purpose
                Free health service classes, private courses, hypnobirthing, active birth sessions and online programmes differ in cost, size, timing and how much they cover feeding and the first weeks. Popular courses fill months ahead, so comparing them in the first half of pregnancy and booking for roughly 30 to 34 weeks gives the best chance of a place.

                ## Milestones
                1. Free local classes and two or three paid options listed with dates and prices.
                2. Each compared on topics covered, group size and partner involvement.
                3. One course chosen together.
                4. Places booked and every session in both calendars.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An antenatal course has been chosen from a written comparison and booked, with every session in both parents' calendars."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your midwife which free antenatal classes run locally"
                - "List two or three paid or online courses with dates and prices"
                - "Compare what each covers on labour, feeding and the first weeks"
                - "Book the chosen course and add every session to both calendars"
            - name: Getting the most from antenatal classes
              description: |-
                ## Purpose
                Classes cram a lot into a few evenings and much of it is forgotten by the birth. Going with questions, keeping one shared page of notes per session and swapping numbers with two or three couples due at the same time turns them into lasting knowledge and a local support group.

                ## Milestones
                1. The three topics you most want covered raised at the first session.
                2. One shared page of notes per session.
                3. Contact details swapped with at least two other expectant parents.
                4. The notes re-read together at around 36 weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Shared notes exist for every class session and you have contact details for at least two other parents due near you."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the three topics you most want the classes to cover"
                - "Keep one shared page of notes for each session"
                - "Swap numbers with at least two other parents due near you"
                - "Re-read the class notes together before the 36-week appointment"
            - name: Birth partner's guide to recognising labour
              description: |-
                ## Purpose
                Birth partners are often the ones deciding when to phone the maternity unit, timing contractions and remembering what the midwife said on the call. Learning the signs of early labour, waters breaking and the reasons to go in straight away, from the classes and your unit's guidance, lets them act calmly instead of guessing.

                ## Milestones
                1. Signs of early and established labour described in the partner's own words.
                2. Your unit's guidance on when to call written down.
                3. A contraction timer app chosen and practised.
                4. The reasons to call immediately known without looking them up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The birth partner can explain the signs of labour and your unit's call-now reasons without notes, and has a contraction timer set up."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your unit's guidance on when to call in labour together"
                - "Explain the signs of early labour back to your partner in your own words"
                - "Install a contraction timer and practise with a few test entries"
                - "Add the call-straight-away labour signs to the triage card"
            - name: Infant feeding preparation before the birth
              description: |-
                ## Purpose
                Whether you plan to breastfeed, formula feed or combine them, the first days go better when you already know the basics and who to call. An antenatal feeding session, a look at positioning or safe bottle preparation, and local feeding support numbers saved now, before sleep runs out, make the first feeds less of a scramble.

                ## Milestones
                1. An antenatal infant feeding session attended.
                2. Both parents able to describe a good latch or a safely made-up bottle.
                3. Local feeding support contacts saved, such as an infant feeding team or helpline.
                4. Only the equipment your chosen method needs bought.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both parents have attended a feeding session and have local feeding support numbers saved before 36 weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book an antenatal infant feeding session"
                - "Watch your health service's feeding videos together"
                - "Save the local feeding support helpline in both phones"
                - "Buy only the feeding equipment your chosen method needs"
            - name: Perinatal mental health awareness for both parents
              description: |-
                ## Purpose
                Anxiety and depression in pregnancy are common, affect partners too, and are often missed because people put them down to hormones or nerves. Knowing the signs, telling each other honestly how you are, and knowing that your midwife will ask and can refer you means help comes early rather than months after the birth.

                ## Milestones
                1. Both parents able to name the common signs of perinatal anxiety and depression.
                2. An honest answer given when the midwife asks about mood.
                3. A list of support routes saved, from the midwife to specialist perinatal services.
                4. A monthly mood conversation between parents taking place.

                ## Notes
                If either of you has thoughts of harming yourself, contact your doctor, midwife or emergency services the same day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both parents can name the common signs, support routes are saved, and a monthly mood conversation has happened at least three times."
                cadence: rolling
              tasks:
                - "Read your health service's page on mental health in pregnancy together"
                - "Tell your midwife about any past anxiety or depression"
                - "Save the support routes your midwife gives you"
                - "Ask each other honestly how your mood has been this month @recurring(monthly:11)"
            - name: Safe sleep space ready before the birth
              description: |-
                ## Purpose
                Newborns sleep for much of the day, and the safe sleep basics, a firm flat mattress, baby on their back, no pillows or bumpers, a smoke-free room, are far easier to set up calmly in pregnancy than at three in the morning. Learning the guidance and preparing the cot or crib before 36 weeks means the space is ready whenever the baby comes.

                ## Milestones
                1. Your health service's safe sleep guidance read by both parents.
                2. A cot, crib or Moses basket with a new, well-fitting firm mattress in place.
                3. Bedding chosen that fits the guidance.
                4. The sleep space set up in the room where you will sleep.

                ## Notes
                Most guidance advises the baby sleeps in your room for at least the first six months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sleep space meeting your health service's safe sleep guidance is set up in your bedroom before 36 weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's safe sleep guidance together"
                - "Check the mattress fits the cot with no gap at the edges"
                - "Remove pillows, bumpers and soft toys from the sleep space"
                - "Set the sleep space up beside your bed before 36 weeks"
            - name: Choosing your antenatal care route
              description: |-
                ## Purpose
                Depending on where you live and your health, pregnancy care may be led by a community midwife, an obstetric consultant, a shared-care arrangement or a private obstetrician, and some areas offer continuity teams where you see the same midwife throughout. Knowing which options exist and which suit your history lets you ask for them early, before the default is fixed.

                ## Milestones
                1. The care models available locally listed.
                2. Your midwife asked which suits your medical history.
                3. Costs and insurance cover checked for any private option.
                4. A decision made and your named care team recorded in the folder.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A model of antenatal care has been chosen with your midwife's input, and your named midwife or consultant is recorded with contact details."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your midwife which models of antenatal care are offered locally"
                - "Ask whether your history means consultant-led care is advised"
                - "Check the cost and insurance cover of any private option"
                - "Write down your named midwife or consultant and how to reach them"
            - name: Telling your employer and giving formal pregnancy notice
              description: |-
                ## Purpose
                Many countries set a deadline for telling your employer in writing, and meeting it protects your rights to paid time off for appointments and to leave; in the UK, for example, it falls 15 weeks before the week the baby is due. Choosing when to tell your manager, then putting it in writing with the pregnancy certificate your midwife provides, secures those rights and starts the workplace risk assessment.

                ## Milestones
                1. Your country's notice deadline and required documents found.
                2. A date chosen to tell your manager, comfortably before the deadline.
                3. Written notice sent with your expected due week.
                4. The pregnancy certificate from your midwife sent to HR.
                5. Your employer's written acknowledgement filed in the records folder.

                ## Notes
                The notice only needs what your employer's policy and the law require. You do not have to decide everything about leave in the same letter unless the rules say so.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written pregnancy notice and the midwife's certificate were sent to your employer before the legal deadline, with acknowledgement filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the pregnancy notice deadline and paperwork for your country and employer"
                - "Choose when and how to tell your manager in person"
                - "Send written notice with your expected due week"
                - "Ask your midwife for the pregnancy certificate and send it to HR"
            - name: Workplace pregnancy risk assessment and adjustments
              description: |-
                ## Purpose
                Lifting, long shifts, standing all day, night work, chemicals and stress can all need adjusting in pregnancy, and in many countries employers must assess the risks once told. Preparing your own list of what is harder now, and reviewing it as the bump grows, turns the assessment into practical changes rather than a form filed and forgotten.

                ## Milestones
                1. Your own list of tasks that feel harder or riskier now.
                2. A risk assessment meeting held with your manager.
                3. Agreed adjustments written down, such as seating, breaks, hours or duties.
                4. The assessment reviewed again in the third trimester.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written pregnancy risk assessment with agreed adjustments exists and has been reviewed at least once in the third trimester."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the parts of your job that feel harder or riskier now"
                - "Ask your manager for a pregnancy risk assessment meeting"
                - "Get the agreed adjustments confirmed in writing"
                - "Review the adjustments with your manager @recurring(monthly:16)"
            - name: Time off work for antenatal appointments
              description: |-
                ## Purpose
                In many countries a pregnant employee has a right to paid time off for antenatal care, and partners may be entitled to attend some appointments too. Knowing the rules for both of you and keeping a simple log of appointments taken avoids awkward conversations and disputes about pay deductions.

                ## Milestones
                1. Both parents' entitlements to time off for appointments found.
                2. A short log of each appointment taken, with date and hours.
                3. Appointment letters kept as evidence if requested.
                4. Payslips checked for any deduction for antenatal time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A log of every antenatal appointment taken during work hours exists, and payslips show no unexpected deductions for them."
                cadence: rolling
              tasks:
                - "Look up both parents' rights to time off for antenatal appointments"
                - "Start a log of appointment dates and hours away from work"
                - "Keep each appointment letter in the work section of the folder"
                - "Check the payslip shows no deductions for antenatal time @recurring(monthly:28)"
            - name: Pregnancy entitlements, grants and free care check
              description: |-
                ## Purpose
                Depending on where you live, pregnancy can bring free prescriptions and dental care, a one-off grant, food vouchers, tax credits or an allowance if you do not qualify for employer pay. Many are claimed with a form signed by a midwife and some have deadlines tied to your due date, so checking the list once, early, catches money that is otherwise missed.

                ## Milestones
                1. A list of pregnancy entitlements in your country with eligibility and deadlines.
                2. The ones that apply to you marked.
                3. Forms completed, with a midwife signature where needed.
                4. Each claim's outcome recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every pregnancy entitlement you appear to qualify for has been claimed or ruled out, with outcomes recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your government's pregnancy entitlements pages and list each benefit"
                - "Mark the ones you appear to qualify for and their deadlines"
                - "Ask your midwife to sign any forms that need it"
                - "Record the outcome of each claim"
            - name: Essential baby kit list for the first six weeks
              description: |-
                ## Purpose
                Shop lists and baby fairs suggest dozens of items, many of which go unused. Writing your own list of what the first six weeks need, for sleeping, feeding, changing, clothing and travel, split into must have before the birth and can wait, keeps spending down and the house clear.

                ## Milestones
                1. A kit list split into before the birth and can wait.
                2. Items others offered to lend or give matched against the list.
                3. A budget set for each section.
                4. Every before-the-birth item in the house by 36 weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A kit list split into before-the-birth and can-wait exists, and every before-the-birth item is in the house by 36 weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft a kit list with sections for sleeping, feeding, changing, clothes and travel"
                - "Mark each item as needed before the birth or can wait"
                - "Ask family and friends what they can lend or pass on"
                - "Tick off items as they arrive and note the gaps"
            - name: Choosing a car seat and pushchair
              description: |-
                ## Purpose
                Car seats are the one item many hospitals expect to see before you drive home, and each must suit both the baby and your car. Comparing a few seats and pushchairs on safety standard, fit in your vehicle, weight, fold size and price, and trying them in a shop, prevents an expensive mistake.

                ## Milestones
                1. Two or three car seats shortlisted that meet your country's current safety standard.
                2. Fit in your car checked, including base or seat belt installation.
                3. A pushchair chosen that suits your home, car boot and daily routes.
                4. The car seat fitted and checked well before 36 weeks.

                ## Notes
                Start from the **Purchase decision** template. Avoid second-hand car seats unless you know their full history.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A car seat meeting the current safety standard is fitted and checked in your car, and a pushchair is chosen, before 36 weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist car seats that meet your country's current safety standard"
                - "Check each shortlisted seat fits your car"
                - "Measure your car boot and hallway before choosing a pushchair"
                - "Have the car seat fitting checked by a trained fitter or retailer"
            - name: Safety checks for second-hand and borrowed kit
              description: |-
                ## Purpose
                Borrowed and second-hand baby kit saves a lot of money, but a few items carry real risks: used cot mattresses, car seats with unknown histories, recalled products and old cots with wide bar gaps. A quick check of each item before it comes home keeps the savings without the hazards.

                ## Milestones
                1. A list of items you will only buy new.
                2. Each borrowed item checked against your country's product recall list.
                3. Cots checked for bar spacing, stability and missing parts.
                4. Instructions found or downloaded for each piece of equipment.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every second-hand or borrowed item has been checked against the recall list and inspected, with instructions on file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide which items you will only buy new"
                - "Check each second-hand item against the product recall list"
                - "Inspect any borrowed cot for loose parts and bar spacing"
                - "Download the instructions for each borrowed item"
            - name: Baby names shortlist
              description: |-
                ## Purpose
                Names are one of the few pregnancy decisions that can be pure fun, and one of the most argued over. A shared shortlist built over a few months, tested aloud with the surname and initials, gets you to the birth with two or three names you both like. Most countries set a deadline for registering the birth, so arriving with a shortlist helps.

                ## Milestones
                1. Each parent's long list of ten names.
                2. A joint shortlist of names you both like.
                3. Each shortlisted name tried with the surname, initials and likely nicknames.
                4. A rule agreed on whether to share names before the birth.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A shortlist of two or three names both parents like is written down before 37 weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Each write a long list of ten names you love"
                - "Merge the lists and keep only names you both like"
                - "Say each shortlisted name aloud with the surname and initials"
                - "Agree whether you will share the names before the birth"
            - name: Dating scan day
              description: |-
                ## Purpose
                The first scan, usually between 11 and 14 weeks, confirms the due date and the number of babies and often includes a screening measurement. Planning the day, with who comes, the eating or drinking instructions, questions ready and printouts paid for, lets you take it in rather than juggle logistics.

                ## Milestones
                1. Scan date, time and preparation instructions confirmed.
                2. Partner's time off booked.
                3. Questions written, including any about screening.
                4. The confirmed due date entered on the timeline and the scan report filed.

                ## Notes
                Scans occasionally bring unexpected news. Talk beforehand about how you would want that moment handled and who you would call.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The dating scan has been attended, the confirmed due date is on the timeline and the report is filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the scan time and any instructions about eating or drinking"
                - "Book the partner's time off for the scan"
                - "Write the questions you want to ask the sonographer"
                - "Update the due date on the timeline and file the scan report"
            - name: Mid-pregnancy anatomy scan
              description: |-
                ## Purpose
                The scan at around 18 to 21 weeks checks the baby's organs and growth, the placenta position and the fluid around the baby, and it is the scan most likely to lead to follow-up appointments. Knowing what it looks for, deciding beforehand whether you want to know the sex, and planning what happens after makes it a prepared appointment rather than a nervous one.

                ## Milestones
                1. Scan booked within the window your service uses.
                2. A decision made on whether to find out the sex, and the sonographer told.
                3. Questions written about anything flagged earlier.
                4. Findings and any follow-up appointments recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The anatomy scan has been attended within the service's window, with findings and any follow-up dates recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the scan is booked within your service's window"
                - "Decide together whether to find out the sex"
                - "Write questions about anything flagged at earlier appointments"
                - "Record the findings and any follow-up dates"
            - name: Glucose tolerance test appointment
              description: |-
                ## Purpose
                If you have risk factors for gestational diabetes, such as a raised BMI, a previous large baby or a family history, you may be offered a glucose tolerance test, usually between 24 and 28 weeks. It involves fasting and around two hours at the clinic, so planning the morning, food afterwards and time off makes the day far easier.

                ## Milestones
                1. Whether you need the test confirmed with your midwife.
                2. Fasting instructions and appointment time written down.
                3. Something to pass two hours and a snack for afterwards packed.
                4. Results date noted and results filed.
              priority: low
              deadlineOffsetDays: 170
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Either the test is confirmed as not needed, or it has been completed and the result is filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your midwife whether you need a glucose tolerance test"
                - "Write down the fasting instructions and appointment time"
                - "Pack a snack, water and something to pass two hours"
                - "Note when results are due and file them when they arrive"
            - name: Pregnancy vaccinations booked and recorded
              description: |-
                ## Purpose
                Several health services offer vaccines in pregnancy, commonly whooping cough, flu in season and in some places RSV, timed to pass protection to the baby before birth. Finding out which are offered and when, booking each in the right week and keeping a record means the baby is protected from day one and nothing slips through a busy clinic.

                ## Milestones
                1. The vaccines offered in your pregnancy and their recommended weeks listed.
                2. Questions about them answered by your midwife or pharmacist.
                3. Each chosen vaccine booked within its window.
                4. Dates given recorded in your notes and records folder.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each pregnancy vaccine offered has been either given within its window or declined, with dates recorded in the notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your midwife which vaccines are offered in pregnancy and in which weeks"
                - "Mark each vaccine window on the timeline"
                - "Book each chosen vaccine at the surgery or pharmacy"
                - "Record the vaccine dates in the records folder"
            - name: Travel and a babymoon while pregnant
              description: |-
                ## Purpose
                Airlines restrict flying in later pregnancy, often asking for a letter from about 28 weeks and refusing travel from around 36, and travel insurance must cover pregnancy explicitly. Planning a break in the second trimester, with insurance, a copy of your notes and the nearest maternity unit at your destination noted, keeps a last trip from becoming a worry.

                ## Milestones
                1. Your midwife asked whether travel suits your pregnancy.
                2. Airline or ferry pregnancy rules checked for your travel dates.
                3. Travel insurance confirmed to cover pregnancy and a baby born early.
                4. A copy of your notes and the destination maternity unit's details packed.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The trip happens with written pregnancy cover in the insurance policy and the destination maternity unit's details packed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the pregnancy travel rules of your airline or ferry company"
                - "Ask your midwife whether travel suits your pregnancy"
                - "Confirm in writing that the travel insurance covers pregnancy"
                - "Pack a copy of your notes and the destination's maternity unit address"
            - name: 36-week readiness review
              description: |-
                ## Purpose
                By 36 weeks a baby can come at any time, and the last month is the worst time to be ordering a car seat or hunting for paperwork. One review of everything still open in this area, run as a couple a week or two before 36 weeks, shows what is left while there is still energy to do it.

                ## Milestones
                1. A checklist built from the open items across your pregnancy projects.
                2. Every essential item marked done, booked or dropped.
                3. Triage, midwife team and key family numbers in both phones.
                4. The remaining antenatal appointments to 41 weeks in the calendar.
              priority: high
              deadlineOffsetDays: 200
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By 36 weeks every open pregnancy item is marked done, booked or dropped, and the remaining appointments are in the calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every open item from your pregnancy projects"
                - "Mark each item done, booked or dropped"
                - "Check triage and midwife numbers are saved in both phones"
                - "Confirm the remaining antenatal appointments are in the calendar"
            - name: Pregnancy with a toddler or older children at home
              description: |-
                ## Purpose
                Second and third pregnancies come with less rest, appointments to fit around nursery or school runs, and a child who needs preparing for a sibling. Planning cover for appointments, deciding how and when to tell each child, and reading about babies together over the months makes the change gradual for them and manageable for you.

                ## Milestones
                1. Cover arranged for each appointment children cannot attend.
                2. A plan for when and how to tell each child, suited to their age.
                3. Books or play about new babies part of the weekly routine.
                4. Any big change for the older child, such as a new bed or room, done well before the birth.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each child has been told in a planned way, appointment cover is arranged, and big changes for older children are done two months before the due date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Arrange cover for the appointments the children cannot come to"
                - "Choose when and how to tell each child about the baby"
                - "Read a book about a new baby together @recurring(weekly:thu)"
                - "Make big changes for the older child at least two months before the due date"
            - name: Pregnancy after miscarriage or loss
              description: |-
                ## Purpose
                After a miscarriage, stillbirth or termination, a new pregnancy often brings as much fear as joy, and the early weeks can feel very long. Telling your midwife your history at booking, asking what extra reassurance, scans or named contact are available, and finding specialist support for both parents can make the months ahead more bearable.

                ## Milestones
                1. Previous losses discussed with your midwife at booking.
                2. Any extra scans, early pregnancy unit visits or consultant appointments agreed.
                3. A named contact to call with worries between appointments.
                4. A specialist support organisation or counsellor found for both parents.

                ## Notes
                Partners grieve and worry too, often quietly. Make sure both of you have somewhere to talk.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your history is in the notes, any extra care is agreed in writing, and both parents have a named source of support."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Tell your midwife about previous losses at or before booking"
                - "Ask what extra scans or reassurance appointments are offered"
                - "Save the number of a named contact for worries between appointments"
                - "Find a pregnancy loss support service for both parents"
            - name: Moving from fertility treatment to maternity care
              description: |-
                ## Purpose
                After IVF or other fertility treatment, care moves from a clinic you know well to a maternity service that may know nothing of your history, often at around 8 to 12 weeks. Making sure the clinic's discharge letter, embryo transfer date and medicines plan reach the midwife avoids a wrong due date and a gap in any hormone support.

                ## Milestones
                1. The fertility clinic's discharge letter received.
                2. Your due date calculated from the transfer date and confirmed with the midwife.
                3. The clinic's plan for stopping any fertility medicines in writing.
                4. Your maternity team aware of your treatment history.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The fertility clinic's discharge letter and medicines plan are in your maternity notes and the due date is agreed from the transfer date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the fertility clinic for a discharge letter for your midwife"
                - "Confirm your due date from the transfer date with the midwife"
                - "Get the clinic's plan for any medicines in writing"
                - "Bring the discharge letter to the booking appointment"
            - name: Self-employed parent's pregnancy plan
              description: |-
                ## Purpose
                Freelancers and business owners have no HR team, no automatic pregnancy pay and clients who expect continuity. Checking which state allowances you can claim, saving towards the income gap, blocking appointments out of your work diary and choosing when to tell clients protects both income and reputation.

                ## Milestones
                1. The allowances self-employed parents can claim in your country found, with eligibility.
                2. A savings target to cover the income gap set.
                3. Antenatal appointments blocked out of your work calendar.
                4. A date chosen to tell key clients.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your allowance claim is submitted or ruled out, a savings target is set and key clients have a date by which they will be told."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Look up the pregnancy allowances self-employed parents can claim"
                - "Set aside a monthly amount towards the income gap @recurring(monthly:9)"
                - "Block antenatal appointments out of your work calendar"
                - "Decide when and how to tell your main clients"
            - name: Solo parent support plan for pregnancy
              description: |-
                ## Purpose
                Going through pregnancy without a partner, by choice or circumstance, means every appointment, decision and late-night worry needs someone else lined up. Naming a small support team, who comes to scans, who is on call in the last weeks and who you can phone at night, makes sure you are not alone at the moments that count.

                ## Milestones
                1. Two or three people named as your pregnancy support team.
                2. A support person agreed for each scan and class.
                3. A birth partner chosen and their availability from 37 weeks confirmed.
                4. A weekly call or visit with one of the team in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named support team covers every scan and class, and one person has agreed to be on call from 37 weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the names of two or three people you would like on your support team"
                - "Ask who can come to each scan and class"
                - "Ask one person to be on call from 37 weeks"
                - "Arrange a weekly call or visit with someone from the team @recurring(weekly:tue)"
            - name: Higher-risk pregnancy with extra monitoring
              description: |-
                ## Purpose
                Twins, raised blood pressure, a long-term condition, a previous caesarean or being older can all mean consultant-led care, more scans and sometimes readings at home. Keeping a clear list of who leads which part of your care, what is being watched and what triggers a call turns a complicated schedule into one you can follow.

                ## Milestones
                1. A list of every clinic and clinician involved and what each is monitoring.
                2. The readings or symptoms that mean call the unit written down in the team's words.
                3. Home readings, if requested, recorded and shared on the agreed schedule.
                4. Each growth scan or clinic result filed with the plan that followed.

                ## Notes
                Thresholds and targets come from your care team. This project records them; it does not set them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written care map names every clinician and call threshold, and requested home readings have been sent on schedule for eight weeks."
                cadence: rolling
              tasks:
                - "List every clinic and clinician involved and what each is monitoring"
                - "Ask the team to write down which readings or symptoms mean call straight away"
                - "Send any requested home readings to the team @recurring(weekly:mon)"
                - "File each growth scan and clinic letter with the plan that followed"
            - name: Gestational diabetes routine
              description: |-
                ## Purpose
                A diagnosis of gestational diabetes usually means testing blood sugar several times a day, changing meals and sometimes starting medicine, with frequent reviews by a diabetes team. Setting up the testing log, a meal pattern agreed with the dietitian and a weekly send to the team makes the remaining weeks a routine rather than a scramble.

                ## Milestones
                1. Testing times and target ranges written down exactly as the diabetes team gave them.
                2. A log of every reading with meals noted.
                3. A meal pattern agreed with the dietitian.
                4. Readings sent to the team every week and any changes recorded.

                ## Notes
                Targets and medicines are for the diabetes team to set. Change them only on their instruction.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reading is logged with meals noted, and the log has been sent to the diabetes team each week until the birth."
                cadence: rolling
              tasks:
                - "Write the testing times and target ranges the team gave you"
                - "Record each reading with what you ate before it"
                - "Send the week's readings to the diabetes team @recurring(weekly:fri)"
                - "Write down any change the team makes to your plan"
            - name: Preparing for appointments after 40 weeks
              description: |-
                ## Purpose
                Plenty of first babies are still not here at 41 weeks, when many services offer a membrane sweep, extra monitoring or an induction date. Understanding these options in advance, with your own questions about timing and alternatives, means you make an informed choice instead of deciding on the spot at the appointment.

                ## Milestones
                1. Your unit's usual plan after 40 weeks found.
                2. Questions on sweeps, monitoring and induction timing written down.
                3. The benefits and drawbacks of each option discussed with your midwife.
                4. Your decision and any booked dates recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your preferences for care after 40 weeks were discussed with your midwife and the resulting decision and dates are recorded in the notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your midwife what your unit usually offers after 40 weeks"
                - "Write your questions about sweeps, extra monitoring and induction timing"
                - "Discuss the options and your preferences at the 40-week appointment"
                - "Record your decision and any booked dates in the records folder"
---

# Pregnancy & Antenatal Planning

This area takes you from a positive test to the due date, organising the appointments, scans, classes, workplace paperwork and preparations both parents need along the way. It starts with the foundations (booking in, a dated timeline, a medicines check, the triage card and a shared records folder), then the weekly and monthly routines, the things worth learning before the birth, the decisions about care, work, money and kit, the scans and dated appointments, the situations that change the picture, such as a previous loss, fertility treatment or older children at home, and finally higher-risk care and the weeks past the due date.

What repeats is a weekly couple check-in, a weekly symptom log and meal plan, daily supplements, pelvic floor sets and attention to the baby's movements, and a monthly look ahead at the timeline and the budget. The Meeting notes, Metrics log, Weekly meal plan, Habit tracker, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
