---
id: physical-health.autoimmune-condition-management
name: Autoimmune Condition Management
description: "A written flare plan, safe routines for infusions, injections and monitoring bloods, organised specialist appointments and the decisions about treatment, work and family, for living with lupus, MS, Crohn's or another autoimmune condition."
category: personal
version: 1.0.0
tags: [physical-health, autoimmune-condition-management, everyone, lupus, multiple-sclerosis, crohns-disease, immunosuppression, biologics]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - meeting-notes
    - reading-queue
    - trip
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Autoimmune Condition Management
          description: "Managing lupus, multiple sclerosis, Crohn's or another autoimmune condition with infusion or medication schedules, blood monitoring, flare logs and specialist teams."
          projects:
            - name: Urgent symptoms and infection warning card
              description: |-
                ## Purpose
                Immune-suppressing treatment can blunt the usual signs of a serious infection, and some autoimmune conditions have their own emergencies, such as sudden vision loss, new weakness, chest pain or a rapidly worsening flare. A single card that lists the signs your team says need same-day help, and who to call, means nobody in the house has to judge a fever at two in the morning from memory.

                ## Milestones
                1. Your specialist team asked which symptoms need same-day or emergency care for your condition and medicines.
                2. A one-page card listing those signs, the helpline number and the emergency number.
                3. A copy in your wallet or phone and one where the household can find it.
                4. Everyone you live with shown the card and told where it is kept.

                ## Notes
                Use your own team's and health service's wording. The card organises their advice; it does not replace it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card listing the urgent signs your team gave you, with the numbers to call, is in your wallet and at home, and your household has seen it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your specialist nurse which symptoms mean you should call the same day"
                - "Write the signs, the helpline and the emergency number on one card"
                - "Put a photo of the card in your phone and a copy in your wallet"
                - "Show the card to everyone you live with"
                - "Check the card still matches your current medicines @recurring(yearly)"
            - name: One-page diagnosis summary
              description: |-
                ## Purpose
                Autoimmune diagnoses often take years and several specialists, and the details end up scattered across letters: the antibodies found, the organs involved, the date treatment began. A one-page summary you can hand to any new doctor, dentist or emergency team saves twenty minutes of retelling and stops important facts being missed.

                ## Milestones
                1. The formal name of your condition and the date and place of diagnosis recorded.
                2. Key test findings that confirmed it, such as antibodies, scans or biopsies, listed in plain words.
                3. Organs or systems involved, and any complications so far, noted.
                4. Current medicines, allergies and your lead specialist's name added.
                5. The summary checked for accuracy by your specialist nurse or doctor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page diagnosis summary exists in print and on your phone, and your specialist team has confirmed it is accurate."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather your diagnosis letter and the last two clinic letters"
                - "Ask the agent to draft a one-page summary from those letters"
                - "Correct the draft and add current medicines and allergies"
                - "Ask your specialist nurse to check the summary at your next contact"
            - name: Specialist team and helpline contact sheet
              description: |-
                ## Purpose
                Most autoimmune care is shared between a specialist consultant, a specialist nurse, an infusion or day unit, a homecare medicine company and your family doctor, and each handles different questions. Knowing who to ring for a flare, a missed delivery or an abnormal blood result means problems reach the right person on the first call.

                ## Milestones
                1. Every service in your care listed with phone number, email and opening hours.
                2. Next to each, the kinds of question it handles written in a line.
                3. The out-of-hours route for urgent problems noted.
                4. The sheet saved in your phone contacts and printed beside the urgent card.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact sheet lists every service in your care with what each handles and an out-of-hours route, saved on your phone and printed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every clinic, unit and company involved in your treatment"
                - "Find the specialist nurse helpline number and its response times"
                - "Write one line next to each contact on what to call them about"
                - "Save every number in your phone under a shared prefix"
            - name: Written flare action plan
              description: |-
                ## Purpose
                Flares are where most avoidable harm happens: people wait too long hoping it settles, or start leftover steroids without telling anyone. A plan agreed with your team in a calm month, saying what counts as a flare for you, what you may start yourself and when to call, turns a frightening week into a set of steps.

                ## Milestones
                1. Your team's definition of a flare for your condition written in your own words.
                2. What you may do yourself, such as a rescue medicine if prescribed, recorded with limits.
                3. The point at which you call the helpline, and the point at which you seek emergency care, written down.
                4. The plan signed off by your specialist nurse or doctor and a copy kept with your card.

                ## Notes
                Never start, stop or change an immune-suppressing medicine on your own unless the written plan from your team says you can.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A flare plan agreed with your specialist team, stating what you can do yourself and when to call, is written down and stored with the urgent card."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what your last flare looked like and what helped"
                - "Ask your team what they want you to do at the first signs of a flare"
                - "Turn their answers into a one-page plan with three clear steps"
                - "Send the plan to your specialist nurse to confirm it is right"
            - name: Treatment and monitoring plan in writing
              description: |-
                ## Purpose
                Many people on long-term treatment could not say which medicine is for what, which blood tests each one needs, or what to do after a missed dose. Writing it down once, with your team's answers, makes every later routine in this area easier and helps anyone who has to step in when you are unwell.

                ## Milestones
                1. Each current medicine listed with its purpose, dose schedule and how it is given.
                2. The monitoring each medicine needs, and how often, recorded beside it.
                3. Your team's advice on missed doses written for each medicine.
                4. The plan reviewed and updated after the most recent clinic letter.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan names every autoimmune medicine with its purpose, monitoring schedule and missed-dose advice, matching the latest clinic letter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every medicine you take for the condition with dose and schedule"
                - "Ask the pharmacist or specialist nurse which blood tests each one needs"
                - "Ask what to do after a missed or late dose of each medicine"
                - "Check the plan against your latest clinic letter and correct it"
            - name: Vaccinations before immune-suppressing treatment
              description: |-
                ## Purpose
                Some vaccines, especially live ones, may not be safe once certain treatments start, and others work better if given before the immune system is dampened. Checking your vaccine record with the team before a new biologic, infusion or high-dose steroid course avoids a gap that can be hard to close later.

                ## Milestones
                1. Your vaccination history gathered from your doctor's record or personal card.
                2. Your specialist team asked which vaccines they recommend before the new treatment and how long before.
                3. Any blood tests for immunity, such as for chickenpox or hepatitis B, done if advised.
                4. The agreed vaccines given and their dates recorded in your treatment plan.

                ## Notes
                Household members may also need certain vaccines to protect you. Ask your team whether any apply.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The vaccines your team recommended before your treatment are given or deliberately declined, with dates recorded in your plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request your vaccination record from your doctor's practice"
                - "Ask your team which vaccines to have before the new treatment starts"
                - "Book the recommended vaccines and any immunity blood tests"
                - "Ask whether anyone in your household should be vaccinated too"
            - name: Steroid emergency card and safety basics
              description: |-
                ## Purpose
                Several months of steroid tablets, or repeated courses, can leave the body unable to make enough of its own stress hormone, so a sudden stop, a serious illness or an operation can become dangerous. Carrying the card your health service issues, and knowing the basic rules your team gives you, protects you when you cannot explain it yourself.

                ## Milestones
                1. Your team asked whether your steroid use means you should carry a steroid emergency card.
                2. The card obtained and kept in your wallet, with a photo on your phone.
                3. Your team's rules on never stopping suddenly and on illness written in your treatment plan.
                4. Your household and dentist told that you take steroids.

                ## Notes
                Rules differ between health services and between people. Follow the specific advice your prescriber gives you.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your team has confirmed whether you need a steroid card, and if so it is in your wallet and the rules are written in your plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your prescriber whether you need a steroid emergency card"
                - "Get the card from your pharmacy or clinic and keep it in your wallet"
                - "Write your team's steroid rules for illness into your treatment plan"
                - "Tell your dentist and household that you take steroids"
            - name: Sick-day rules for immune-suppressing medicines
              description: |-
                ## Purpose
                When you have a fever, vomiting or an infection needing antibiotics, some teams advise pausing certain medicines until you recover, while others must never be paused. Getting those rules written down for each of your medicines before you are ill means you can act quickly and correctly when you feel worst.

                ## Milestones
                1. For each medicine, your team's instruction during an infection recorded: continue, pause or call.
                2. The point at which to restart after a pause written down.
                3. The rules added to your flare plan and urgent card.
                4. A thermometer in the house and its location known.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written sick-day instructions from your team cover every immune-suppressing medicine you take, stored with your flare plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your specialist nurse what to do with each medicine during an infection"
                - "Ask when it is safe to restart anything you pause"
                - "Add the sick-day rules to your flare plan"
                - "Buy a digital thermometer if the house does not have one"
            - name: Flare and symptom log set-up
              description: |-
                ## Purpose
                Memory is a poor witness to a fluctuating condition: by clinic day, a bad fortnight two months ago has blurred into a vague sense of being unwell. A simple log with date, symptoms, a severity score, medicines taken and possible triggers gives your team evidence instead of impressions.

                ## Milestones
                1. A log with columns for date, main symptoms, severity out of ten, medicines and notes.
                2. Condition-specific measures added, such as stool frequency, walking distance, joint count or rash.
                3. The first two weeks of entries completed.
                4. The log format shown to your specialist nurse and adjusted if they suggest.

                ## Notes
                Start from the **Metrics log** template. Keep it short enough to fill in on a bad day; two minutes is the limit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A flare and symptom log with condition-specific columns holds at least two weeks of entries and has been shown to your team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a symptom log from the metrics log template"
                - "Ask your team which one or two measures matter most for your condition"
                - "Fill in the log every evening for the first two weeks"
                - "Show the log to your specialist nurse at the next contact"
            - name: Baseline snapshot during a settled spell
              description: |-
                ## Purpose
                Knowing what your normal looks like on a good month makes it far easier to prove when something has changed. Recording a handful of measures while the condition is settled, such as weight, blood pressure, inflammation markers, walking distance or daily energy, gives a reference point for every later flare and treatment decision.

                ## Milestones
                1. Your team asked which measures best show your condition's activity.
                2. Each measure recorded on a settled week, with the date.
                3. Your latest blood results copied beside them.
                4. The snapshot stored at the front of your symptom log.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated baseline of at least five measures taken in a settled spell sits at the front of your symptom log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your team which measures best track your disease activity"
                - "Record weight, blood pressure and energy on a settled week"
                - "Copy your most recent blood results beside the measures"
                - "Time a familiar walk or task to set a function baseline"
            - name: Blood monitoring calendar for your medicines
              description: |-
                ## Purpose
                Drugs such as methotrexate, azathioprine, mycophenolate and several biologics need regular blood tests to catch effects on the liver, kidneys or blood count before they cause harm, and many prescriptions stop being issued if tests lapse. A calendar that books each test before it falls due keeps both your safety and your supply intact.

                ## Milestones
                1. The required test interval for each medicine confirmed.
                2. Every test due in the next six months entered in the calendar.
                3. Each result checked on the portal or with the team within a week.
                4. No prescription delayed by a missed test for six months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months in which every required monitoring blood test was done on time and its result checked."
                cadence: cyclic
              tasks:
                - "Enter every monitoring blood test due in the next six months in your calendar"
                - "Check the next monitoring blood test is booked and in the diary @recurring(monthly:12)"
                - "Look up each result within a week and note anything flagged"
                - "Ask the team what happens if a result comes back out of range"
            - name: Infusion cycle routine
              description: |-
                ## Purpose
                Infusions every few weeks or months, for treatments used in MS, Crohn's, lupus and vasculitis, depend on a chain of bookings, pre-infusion bloods and a free afternoon, and one broken link can push a dose late. A routine that confirms each slot, the bloods before it and the time off work keeps treatment on schedule.

                ## Milestones
                1. Your infusion interval and the bloods needed before each one recorded.
                2. The next infusion slot booked before you leave the unit each time.
                3. Time off or transport arranged for each infusion day.
                4. A year of infusions given within the window your team allows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every infusion in the last twelve months was given within your team's allowed window, with pre-infusion bloods done."
                cadence: rolling
              tasks:
                - "Ask the infusion unit how late a dose can safely be given"
                - "Book the next infusion before leaving the unit each visit"
                - "Check the next infusion slot, bloods and transport are arranged @recurring(monthly:3)"
                - "Block the infusion afternoon in your work calendar"
            - name: Home injection routine and site rotation
              description: |-
                ## Purpose
                Self-injected biologics work best when doses are on time and sites are rotated, yet weekly or fortnightly schedules are easy to lose track of. A simple routine with a fixed injection day, a rotation pattern and a log means you always know when the last dose went in and where.

                ## Milestones
                1. A fixed injection day and time agreed with your team's schedule.
                2. A rotation pattern of sites chosen and written down.
                3. Each injection logged with date and site.
                4. Three months of doses with none more than a day late.

                ## Notes
                Start from the **Habit tracker** template. Return used pens and syringes in the sharps bin your homecare company or pharmacy provides.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of injections logged with date and site, none more than a day late."
                cadence: rolling
              tasks:
                - "Choose a fixed injection day that fits your weekly routine"
                - "Write a rotation pattern of injection sites in your tracker"
                - "Check the injection log and that the next dose is in the fridge @recurring(weekly:sun)"
                - "Book a sharps bin collection when the bin is two thirds full"
            - name: Daily tablet routine for long-term medicines
              description: |-
                ## Purpose
                Tablets such as hydroxychloroquine, mesalazine or azathioprine often show their benefit slowly and their absence slowly too, so missed doses rarely feel urgent until a flare arrives. Tying them to an existing habit and ticking them off makes adherence automatic rather than heroic.

                ## Milestones
                1. Each daily medicine attached to an existing habit such as breakfast.
                2. A pill organiser filled weekly if you take several.
                3. Doses ticked off daily for a month.
                4. Fewer than two missed doses a month.

                ## Notes
                Some medicines need to be taken apart from food or other tablets. Ask your pharmacist about timing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily tablet doses ticked off with no more than one missed."
                cadence: rolling
              tasks:
                - "Ask your pharmacist about the best timing for each daily tablet"
                - "Pick the existing habit each tablet will follow"
                - "Take your daily autoimmune tablets and tick them off @recurring(daily)"
                - "Fill a weekly pill organiser if you take more than two tablets"
            - name: Homecare delivery and specialist medicine supply
              description: |-
                ## Purpose
                Many biologics arrive by homecare delivery rather than from a local pharmacy, and a missed delivery, a lapsed prescription or a fridge failure can leave you without a dose. Confirming each delivery, checking stock and keeping the medicine fridge at the right temperature closes the gaps before they matter.

                ## Milestones
                1. The homecare company's contact details and delivery cycle recorded.
                2. Two weeks of spare doses kept where your team allows.
                3. A fridge thermometer in place and the storage range written on the fridge.
                4. Six months of deliveries with no missed dose.

                ## Notes
                Ask the homecare company what to do if medicine is left out of the fridge. Many products tolerate a limited time at room temperature, but the limit varies.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of specialist medicine deliveries confirmed with no dose missed and fridge temperatures within range."
                cadence: rolling
              tasks:
                - "Save the homecare company's number and your patient reference"
                - "Put a thermometer in the fridge where the medicine is stored"
                - "Confirm the next delivery date and count the doses in stock @recurring(monthly:20)"
                - "Ask how long your medicine can stay out of the fridge"
            - name: Weekly flare and symptom check-in
              description: |-
                ## Purpose
                Flares often build over a week or two before they are obvious, and a short weekly look at the log catches the drift. Five minutes each Friday comparing this week to the last two gives you a reason to call early, or the reassurance not to.

                ## Milestones
                1. A weekly slot set for the check-in.
                2. Each week's severity average compared with the previous two.
                3. Your flare plan opened whenever the trend crosses its threshold.
                4. Eight weekly check-ins completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly check-ins recorded, each comparing the week with the previous two."
                cadence: rolling
              tasks:
                - "Set a weekly reminder for a five-minute symptom check-in"
                - "Compare this week's log with the previous two weeks @recurring(weekly:fri)"
                - "Open your flare plan if the trend crosses its threshold"
            - name: Monthly disease activity summary
              description: |-
                ## Purpose
                Clinic appointments are often months apart, and teams make better decisions from a short monthly record than from a recollection. Summarising each month in three lines (good days, flare days, anything new) builds a history you can send ahead of clinic or use to spot seasonal patterns.

                ## Milestones
                1. A three-line monthly summary format agreed with yourself.
                2. Each month's summary written within a few days of month end.
                3. Six summaries collected in one place.
                4. Any pattern across the months noted for your team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly summaries recorded, each with good days, flare days and anything new."
                cadence: rolling
              tasks:
                - "Create a page for monthly summaries at the front of your log"
                - "Write the month's good days, flare days and anything new @recurring(monthly:28)"
                - "Look across six summaries for seasonal or trigger patterns"
            - name: Specialist clinic preparation routine
              description: |-
                ## Purpose
                Specialist appointments are short and spaced far apart, and it is common to remember the important question in the car park. Arriving with a summary of the months since last time, your top three questions and an up-to-date medicine list means the time goes on decisions.

                ## Milestones
                1. A standard preparation sheet with summary, questions and medicine list.
                2. The sheet sent to the team or brought to every appointment.
                3. Decisions and next steps written down at each visit.
                4. The clinic letter checked against your notes when it arrives.

                ## Notes
                Start from the **Meeting notes** template. Ask whether you can be copied into clinic letters if you are not already.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "The last two specialist appointments each had a prepared sheet and written outcomes checked against the clinic letter."
                cadence: cyclic
              tasks:
                - "Create a clinic preparation sheet from the meeting notes template"
                - "Draft the summary and three questions a week before clinic @recurring(quarterly)"
                - "Write down every decision before leaving the room"
                - "Compare the clinic letter with your notes when it arrives"
            - name: Urine and organ checks your team asks for
              description: |-
                ## Purpose
                Lupus, vasculitis and some treatments can affect the kidneys, lungs or eyes quietly, long before symptoms appear, so teams often ask for urine samples, blood pressure readings or breathing tests between clinics. Keeping these on a schedule means organ involvement is caught when it is easiest to treat.

                ## Milestones
                1. The organ checks your team wants, and how often, written in your treatment plan.
                2. Urine sample pots or dipsticks kept in stock if your team uses them.
                3. Each check done on time and its result recorded.
                4. Any abnormal result reported to the team within the time they set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every organ check your team requested in the last six months was done on schedule and recorded, with any abnormal result reported."
                cadence: cyclic
              tasks:
                - "Ask your team which urine, blood pressure or other organ checks they want"
                - "Do this month's requested organ checks and record the results @recurring(monthly:16)"
                - "Report any abnormal result to the specialist nurse within the agreed time"
            - name: Annual autoimmune review and safety screens
              description: |-
                ## Purpose
                Long-term treatment brings its own yearly checks: eye screening on hydroxychloroquine, bone health on steroids, skin checks on some immunosuppressants, cervical screening intervals that may be shorter. Gathering them into one annual review means none quietly slips for three years.

                ## Milestones
                1. The yearly safety checks linked to your medicines confirmed with your team.
                2. Each check booked in the same quarter every year.
                3. Results added to your diagnosis summary.
                4. Two consecutive years with every safety screen completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every yearly safety screen your team listed was completed in each of the last two years, with results recorded."
                cadence: cyclic
              tasks:
                - "Ask your team which yearly safety screens your medicines need"
                - "Book this year's safety screens and the annual review @recurring(yearly)"
                - "Add each result to your diagnosis summary"
            - name: Vaccine timing around your treatment cycle
              description: |-
                ## Purpose
                Flu, covid and pneumococcal vaccines are often recommended for people on immune-suppressing treatment, but some infusions blunt the response if the vaccine is given at the wrong point in the cycle. Planning each autumn's vaccines around your dose dates gives them the best chance of working.

                ## Milestones
                1. Your team asked the best window for vaccines relative to your infusion or injection.
                2. This season's vaccines booked inside that window.
                3. Dates recorded in your treatment plan.
                4. Household members reminded about their own seasonal vaccines.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "This year's recommended seasonal vaccines were given inside the window your team advised, with dates recorded."
                cadence: cyclic
              tasks:
                - "Ask your team the best timing for vaccines around your doses"
                - "Book seasonal vaccines inside the window your team advised @recurring(yearly)"
                - "Record each vaccine date in your treatment plan"
            - name: Reading your autoimmune blood results
              description: |-
                ## Purpose
                Results such as CRP, ESR, complement levels, anti-dsDNA, faecal calprotectin, white cell count and liver enzymes arrive with ranges and flags that are hard to interpret alone. Learning what each measures, and which ones your team actually watches for you, makes results a source of understanding rather than anxiety.

                ## Milestones
                1. A list of the blood and stool tests you have regularly, with what each measures.
                2. Your team asked which results they track most closely in your case.
                3. Your own trend for the main two or three markers charted over the past year.
                4. A note of which changes your team wants to hear about between clinics.

                ## Notes
                Ranges and flags differ between laboratories. Ask your team to interpret any result rather than relying on a search engine.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to your regular tests, with a year's trend for your main markers and the changes your team wants reported."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every test that appears on your monitoring blood forms"
                - "Read a patient charity's guide to what each test measures"
                - "Ask your team which two or three markers matter most for you"
                - "Chart a year of results for those markers"
            - name: Learning how your condition behaves over time
              description: |-
                ## Purpose
                Patient organisations for lupus, MS, inflammatory bowel disease and other conditions publish clear, checked guides that most people never read beyond the first leaflet. Working through a short reading list over a couple of months gives you the vocabulary to follow clinic conversations and to spot what is and is not usual.

                ## Milestones
                1. Five trusted sources chosen, such as a national patient charity and your hospital's leaflets.
                2. Each source read and three key points noted.
                3. A list of questions the reading raised taken to clinic.
                4. One unreliable source recognised and set aside.

                ## Notes
                Start from the **Reading queue** template. Prefer charities and hospital materials over forums for facts; forums are for experience.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five trusted sources on your condition read, with notes and a question list taken to your next appointment."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create a reading list from the reading queue template"
                - "Add your condition's national patient charity guides to the list"
                - "Note three key points from each guide as you finish it"
                - "Bring the questions the reading raised to your next appointment"
            - name: Self-injection technique with the specialist nurse
              description: |-
                ## Purpose
                A first self-injection is daunting, and poor technique leads to wasted doses, bruising and avoidance. A supervised session with the specialist nurse, followed by a few doses with written steps beside you, builds a skill that most people find routine within a month.

                ## Milestones
                1. A training session booked with the specialist nurse or homecare nurse.
                2. Your first dose given under supervision.
                3. Written step-by-step instructions kept by the fridge.
                4. Four doses given at home with confidence.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One supervised injection and four independent home injections completed, with written steps kept by the fridge."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Book an injection training session with the specialist nurse"
                - "Watch the manufacturer's training video before the session"
                - "Write the steps in your own words and keep them by the fridge"
                - "Note any bruising or reaction after each of the first four doses"
            - name: Early flare signs from your own history
              description: |-
                ## Purpose
                Many people have a personal warning pattern before a flare, perhaps a particular ache, mouth ulcers, a change in bowel habit or a dip in energy, but it only becomes visible when you look back at several flares together. Reading your own log for those signs gives you days of warning next time.

                ## Milestones
                1. The last three or more flares marked in your log.
                2. The two weeks before each flare read for repeated early signs.
                3. A short list of your personal early warning signs written.
                4. The list added to your flare plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of personal early warning signs, drawn from at least three past flares, is part of your flare plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark the start date of your last three flares in your log"
                - "Read the two weeks before each flare for repeated signs"
                - "Write your early warning signs as a short list"
                - "Add the list to the top of your flare plan"
            - name: Fatigue diary to separate flare from other causes
              description: |-
                ## Purpose
                Fatigue is one of the commonest complaints in autoimmune conditions, but it can come from disease activity, anaemia, an underactive thyroid, poor sleep, low mood or medicines. A four-week diary set beside your blood results helps your team work out which, so the right thing gets treated.

                ## Milestones
                1. Daily fatigue scores and sleep hours recorded for four weeks.
                2. Possible contributors noted alongside, such as flare symptoms, poor nights or new medicines.
                3. The diary taken to clinic with a request to check common causes.
                4. Your team's conclusion on the main driver written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A four-week fatigue diary discussed with your team, with their view on the main cause and any tests done recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a fatigue score and sleep hours column to your log"
                - "Record fatigue and sleep every evening for four weeks"
                - "Ask your team whether anaemia, thyroid or vitamin levels should be checked"
                - "Write down what your team thinks is driving the fatigue"
            - name: Diet claims checked against evidence
              description: |-
                ## Purpose
                Autoimmune conditions attract more diet claims than almost any other area, from elimination protocols to supplements, and some are expensive or risk nutritional gaps. Checking a claim with a registered dietitian before trying it protects your health and your budget, and in conditions such as Crohn's or coeliac disease diet can be part of treatment that needs supervision.

                ## Milestones
                1. The diet or supplement you are considering written down with its claims.
                2. Your team or a registered dietitian asked about it.
                3. A decision recorded: try it with a time limit, change it, or drop it.
                4. Any trial run with a start date, end date and measure of effect.

                ## Notes
                Some supplements interact with immune-suppressing medicines. Tell your pharmacist before starting any.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on one diet or supplement claim, made with a dietitian or your team, is recorded with its reasons."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the diet or supplement claim you are considering"
                - "Ask your team for a referral to a registered dietitian"
                - "Check with your pharmacist for interactions with your medicines"
                - "Record your decision and, if trying it, an end date to review"
            - name: Treatment options for your condition, step by step
              description: |-
                ## Purpose
                Most autoimmune conditions have a recognised sequence of treatments, from first-line tablets to biologics and newer targeted drugs, and knowing where you sit makes conversations about switching far easier. Learning the outline of that sequence, and asking your team where you are on it, prepares you for decisions before they are urgent.

                ## Milestones
                1. The main treatment groups for your condition listed from a trusted source.
                2. Your team asked where you are in the usual sequence and what might come next.
                3. The usual reasons for moving to the next step noted.
                4. A one-page overview kept with your treatment plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page overview of the treatment sequence for your condition, with your current position confirmed by your team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your patient charity's overview of treatments for your condition"
                - "List the main treatment groups in the order they are usually used"
                - "Ask your team where you are in the sequence and what could come next"
                - "Keep the overview with your treatment plan"
            - name: Infection habits for daily life on immune suppression
              description: |-
                ## Purpose
                Everyday sources of infection such as undercooked food, garden soil, cat litter and crowded winter spaces matter more when your immune system is dampened. Learning a short set of practical habits from your team's advice lets you live normally while cutting the avoidable risks.

                ## Milestones
                1. Your team's or charity's infection advice for your medicines read.
                2. Kitchen habits adjusted, such as avoiding unpasteurised and undercooked foods if advised.
                3. Gloves used for gardening and litter trays.
                4. A plan for winter outbreaks in your household or workplace agreed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written list of five infection habits drawn from your team's advice, followed for two months."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your team's infection advice for people on your medicines"
                - "Write a list of five habits you will follow at home"
                - "Buy gardening gloves and keep them by the back door"
                - "Agree what the household will do when someone has a stomach bug"
            - name: Choosing a disease-modifying or biologic medicine
              description: |-
                ## Purpose
                When a first treatment is not enough, you may be offered a choice between medicines that differ in how they are given, how often, what monitoring they need and their risks. Preparing a simple comparison and your own priorities before the decision appointment means the choice reflects your life, not just the first option mentioned.

                ## Milestones
                1. The options your team is offering listed by name.
                2. For each, the route, frequency, monitoring and main risks noted from the team's materials.
                3. Your own priorities ranked, such as travel, pregnancy plans, needle comfort or infusion time.
                4. A decision made with your team and recorded with its reasons.

                ## Notes
                Ask for decision aids. Many specialist services have written comparisons for exactly this choice.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A medicine chosen with your specialist team, recorded with the comparison and the three reasons that decided it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your team for written information on each medicine offered"
                - "Compare route, frequency, monitoring and risks in a simple table"
                - "Rank the three things that matter most to you in a treatment"
                - "Record the decision and its reasons in your treatment plan"
            - name: Switching to a biosimilar
              description: |-
                ## Purpose
                Health services often move patients from an original biologic to a biosimilar, a closely matched version that costs less, and the letter can arrive with little notice. Understanding what changes, such as the device, the delivery company or the injection technique, and agreeing how to report any problem, makes the switch uneventful.

                ## Milestones
                1. Your team asked what is changing and why.
                2. The new device and its instructions reviewed before the first dose.
                3. Your symptom log kept closely for the first three months after the switch.
                4. Any concern raised with the team with dates and details.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The biosimilar switch completed with three months of symptom records and any concerns raised with the team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your team what the switch changes for you in practice"
                - "Ask for a demonstration if the injection device is different"
                - "Mark the switch date clearly in your symptom log"
                - "Report any new symptom to the specialist nurse with dates"
            - name: Steroid taper plan with your team
              description: |-
                ## Purpose
                Steroids often calm a flare quickly, but coming off them is where symptoms rebound and side effects linger. A written taper schedule with your team, with a symptom check at each step and a clear point to call, makes reducing safer and less guesswork.

                ## Milestones
                1. A written taper schedule from your prescriber with dates for each step.
                2. Symptoms recorded at each step.
                3. A clear rule for what to do if symptoms return during the taper.
                4. The taper completed or adjusted with your team's agreement.

                ## Notes
                Never stop steroids suddenly or change the schedule without speaking to your prescriber.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A steroid taper followed to its written schedule, with symptoms recorded at each step and any change agreed with your team."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your prescriber for the taper schedule in writing with dates"
                - "Mark each dose step in your calendar"
                - "Record symptoms on the day before each step down"
                - "Call the helpline if symptoms return as the plan describes"
            - name: Second opinion at a specialist centre
              description: |-
                ## Purpose
                Rare autoimmune conditions, unusual organ involvement or a treatment that keeps failing can benefit from a team that sees many such cases. Asking for a referral to a specialist centre, with your records organised, is a reasonable request and often leads to options a general clinic does not offer.

                ## Milestones
                1. The reason for wanting a second opinion written in two sentences.
                2. Your current specialist asked for a referral to a named centre.
                3. Your diagnosis summary, treatment history and recent results sent ahead.
                4. The second opinion's recommendations recorded and discussed with your main team.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A second opinion obtained from a specialist centre, with its recommendations shared with your main team and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write two sentences on why you want a second opinion"
                - "Find the specialist centres for your condition through the patient charity"
                - "Ask your specialist for a referral to the centre you prefer"
                - "Send your summary and treatment history ahead of the appointment"
            - name: Workplace adjustments for appointments and flares
              description: |-
                ## Purpose
                Regular infusions, monitoring bloods and unpredictable flares collide with rigid working hours, and many people hide their condition until a crisis forces a conversation. Asking for specific adjustments, such as flexible start times, home working on bad days or protected infusion afternoons, while you are well puts the arrangement in place before you need it.

                ## Milestones
                1. The adjustments that would help written as a short list.
                2. What you are willing to share about the condition decided.
                3. A meeting held with your manager or occupational health.
                4. Agreed adjustments confirmed in writing.

                ## Notes
                Many countries treat long-term autoimmune conditions as disabilities in employment law. Check your country's guidance or an employment adviser if unsure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Workplace adjustments agreed with your employer and confirmed in writing, with a date set to review them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the three adjustments that would help most at work"
                - "Decide what you want to share about the condition and with whom"
                - "Request a meeting with your manager or occupational health"
                - "Review how the adjustments are working with your manager @recurring(quarterly)"
            - name: Funding or insurance approval for a specialist medicine
              description: |-
                ## Purpose
                Biologics and newer targeted medicines often need a funding application, an insurer's prior approval or an appeal before the first dose, and gaps in paperwork cause weeks of delay. Tracking each step, the evidence requested and the deadline means the medicine your team chose actually reaches you.

                ## Milestones
                1. Who must approve the medicine, and what they need, confirmed with your team.
                2. Every form, letter and result requested gathered and copied.
                3. The application submitted and its reference number recorded.
                4. An appeal prepared within the deadline if the first request is refused.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A funding or insurance approval obtained or appealed, with every document and reference number filed in one place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your team who needs to approve the new medicine and what they need"
                - "Gather the clinic letters and results the approval requires"
                - "Record the application reference number and expected decision date"
                - "Ask the agent to draft an appeal letter if the request is refused"
            - name: First infusion day
              description: |-
                ## Purpose
                A first infusion can take most of a day, sometimes with pre-medicines, observation afterwards and the possibility of a reaction. Knowing what to expect, what to bring and how you will get home makes the day calmer and lets you focus on reporting how you feel.

                ## Milestones
                1. The unit asked how long the first infusion takes and what happens.
                2. Pre-infusion bloods or checks done in time.
                3. A bag packed with food, water, layers, charger and your medicine list.
                4. Transport home arranged and the next infusion booked before leaving.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first infusion completed with pre-checks done, transport arranged and the next dose booked before leaving."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the infusion unit how long the first session will take"
                - "Pack food, water, a warm layer, a charger and your medicine list"
                - "Arrange a lift home in case you feel drowsy afterwards"
                - "Book the next infusion before you leave the unit"
            - name: Monitoring scan day preparation
              description: |-
                ## Purpose
                MRI scans for MS, bowel imaging for Crohn's and other monitoring scans often need preparation such as fasting, a drink, contrast or removing metal, and a cancelled scan can delay a treatment decision by months. Preparing properly and noting when the result will be discussed keeps monitoring on track.

                ## Milestones
                1. The preparation instructions read and any questions asked.
                2. Implants, allergies and kidney function checked if contrast is used.
                3. The scan attended with preparation completed.
                4. A date fixed for when the result will be discussed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The monitoring scan completed as prepared, with a date set for discussing the result."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the scan letter's preparation instructions in full"
                - "Call the imaging department with any question about contrast or implants"
                - "Arrange the time off and transport for the scan"
                - "Ask when and how the result will be discussed with you"
            - name: Hospital bag for a severe flare
              description: |-
                ## Purpose
                Severe flares of Crohn's, lupus, vasculitis or MS sometimes mean an unplanned admission, often at the worst moment. A packed bag and a one-page handover for whoever looks after the home, children or pets means an admission does not also become a household crisis.

                ## Milestones
                1. A bag packed with clothes, chargers, toiletries and a copy of your summary.
                2. A medicine list and a few days of your own medicines ready to take.
                3. A handover note written for children, pets and bills.
                4. The bag's contents checked and refreshed each year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed hospital bag and a written household handover note are ready, with the bag checked within the last year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pack a bag with clothes, toiletries, a charger and your diagnosis summary"
                - "Write a handover note for children, pets and anything due that week"
                - "Tell one trusted person where the bag and note are kept"
                - "Refresh the bag's contents and medicines list @recurring(yearly)"
            - name: Travelling with specialist medicines
              description: |-
                ## Purpose
                Biologics that need refrigeration, infusion dates that clash with a holiday and travel insurance that excludes pre-existing conditions all catch people out. Planning the trip around your treatment, with a letter, a cool bag and a declared condition, means the holiday does not cost you a dose or an uninsured hospital bill.

                ## Milestones
                1. Travel dates checked against infusion or injection dates with the team.
                2. A doctor's letter listing your medicines and devices obtained.
                3. Insurance bought with the condition declared.
                4. Cold storage for the travel days and at the destination arranged.

                ## Notes
                Start from the **Trip** template. Ask your team about live travel vaccines, which some treatments rule out.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip completed with every dose given on time, medicines stored correctly and insurance covering the declared condition."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the travel dates against your next doses with your team"
                - "Request a letter listing your medicines and injection devices"
                - "Buy travel insurance that covers your declared condition"
                - "Buy a travel cool bag suited to your medicine's storage range"
            - name: Medicine hold plan for surgery or dental work
              description: |-
                ## Purpose
                Before an operation or major dental work, some immune-suppressing medicines are paused to lower infection risk and help healing, and steroids may need extra cover. Getting a single written plan agreed between the surgeon and your specialist team avoids last-minute cancellations and conflicting instructions.

                ## Milestones
                1. The surgeon or dentist told about every autoimmune medicine you take.
                2. Your specialist team's advice on pausing and restarting each one obtained.
                3. Steroid cover arrangements confirmed if you take steroids.
                4. The written plan shared with both teams and followed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written medicine hold and restart plan, agreed by both the surgical and specialist teams, was followed around the procedure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tell the surgeon or dentist about every autoimmune medicine you take"
                - "Ask your specialist team when to pause and restart each medicine"
                - "Confirm whether you need extra steroid cover on the day"
                - "Send the agreed plan to both teams in writing"
            - name: First 90 days after an autoimmune diagnosis
              description: |-
                ## Purpose
                A new diagnosis brings a flood of appointments, unfamiliar medicines and often relief mixed with fear. Using the first three months to learn the essentials, set up the basic records and agree a treatment plan gives you a stable footing, rather than months of reacting to each letter as it comes.

                ## Milestones
                1. The diagnosis explained to you in plain words and written down.
                2. Your specialist nurse contact and helpline saved.
                3. A first treatment plan agreed and any pre-treatment tests done.
                4. A patient charity contacted for newly diagnosed resources.
                5. Questions for the first follow-up written and taken.

                ## Notes
                It is common to feel overwhelmed. Most patient charities run helplines staffed by people who have heard every question before.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within 90 days of diagnosis you have a written explanation, a treatment plan, the helpline saved and a question list for the first follow-up."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your specialist to explain the diagnosis while you write it down"
                - "Save the specialist nurse helpline in your phone"
                - "Order the newly diagnosed pack from your condition's patient charity"
                - "Write ten questions to bring to the first follow-up appointment"
            - name: Pregnancy planning on immune-suppressing treatment
              description: |-
                ## Purpose
                Some autoimmune medicines must be stopped months before conception, others are considered compatible with pregnancy, and many teams prefer the condition to be settled before trying. A planned conversation with your specialist, ideally well ahead of time, protects both your health and a future pregnancy, and the same review applies to partners on some medicines.

                ## Milestones
                1. Your specialist told of your plans and a pre-conception review booked.
                2. Each current medicine's status for pregnancy and breastfeeding confirmed.
                3. Any switch of medicine made and the condition watched while settled.
                4. A shared plan agreed between your specialist and maternity team.

                ## Notes
                Do not stop any medicine on your own when you find out you are pregnant. Contact your team straight away.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-conception review held with your specialist, with each medicine's pregnancy status confirmed and a written plan agreed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tell your specialist you are thinking about pregnancy in the next year or two"
                - "Ask which of your medicines need to change before conception"
                - "Ask whether your partner's medicines also matter"
                - "Record the agreed timeline in your treatment plan"
            - name: Moving from children's to adult specialist care
              description: |-
                ## Purpose
                Young people diagnosed in childhood with conditions such as juvenile lupus or paediatric Crohn's move to adult services in their late teens, and this handover is a known point where treatment lapses. Learning to book your own appointments, order your own medicines and speak for yourself in clinic before the move makes adult care feel familiar.

                ## Milestones
                1. The transition date and the adult team named.
                2. At least one clinic visit where you speak to the team on your own first.
                3. Your own repeat prescriptions and blood tests booked without a parent.
                4. Your diagnosis summary written and shared with the adult team.

                ## Notes
                Parents can help with the early steps and then step back. The aim is a young adult who knows their condition and their contacts by heart.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The move to adult care completed, with the young person booking their own tests and prescriptions and the adult team holding their summary."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the children's team for the transition date and adult team name"
                - "Spend the first part of the next clinic visit alone with the team"
                - "Book the next blood test and prescription yourself"
                - "Send your diagnosis summary to the adult team before the first visit"
            - name: Supporting a partner or relative with an autoimmune condition
              description: |-
                ## Purpose
                Partners and relatives of someone with lupus, MS or Crohn's often see the flares first and carry the extra load on bad weeks, without being sure what helps. Agreeing with the person how you can support them, what you should know and when to step in makes help welcome rather than intrusive.

                ## Milestones
                1. A conversation held about what kind of help is wanted and what is not.
                2. The urgent card and flare plan read and understood.
                3. Practical tasks you take on during flares agreed.
                4. A regular check-in held with the person to adjust the arrangement.

                ## Notes
                Look after yourself too. Many patient charities offer resources for families and carers.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A support arrangement agreed with the person, written down, and reviewed together at least three times."
                cadence: rolling
              tasks:
                - "Ask the person how they would like you to help on bad days"
                - "Read their urgent card and flare plan"
                - "Agree three practical tasks you will take on during a flare"
                - "Check in with them about how the support arrangement is working @recurring(monthly:22)"
            - name: Student disability support plan for college or university
              description: |-
                ## Purpose
                Students with autoimmune conditions juggle lectures, exams and placements with infusions, flares and fatigue, often far from home. Registering with the disability service and agreeing exam and deadline adjustments early in the year avoids pleading for extensions in the middle of a flare.

                ## Milestones
                1. Registered with the institution's disability or student support service.
                2. Supporting evidence from your specialist provided.
                3. Adjustments agreed, such as extra exam time, rest breaks or flexible deadlines.
                4. A local doctor registration and a route to your specialist team arranged.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written support plan from the student disability service is in place, with a local doctor registered and specialist care arranged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Contact the student disability service before term begins"
                - "Ask your specialist for a supporting letter about the condition"
                - "Agree exam and deadline adjustments in writing"
                - "Register with a doctor near your term-time address"
            - name: Later life with autoimmune disease and other conditions
              description: |-
                ## Purpose
                After sixty, an autoimmune condition often sits alongside high blood pressure, thinning bones, diabetes or heart disease, with several specialists who may not talk to each other. Bringing the whole picture together once a year, with a medicines review and a named coordinator, reduces clashing advice and unnecessary tablets.

                ## Milestones
                1. Every specialist and condition listed on one page.
                2. A named clinician agreed as the coordinator of your overall care.
                3. A structured medicines review held with a pharmacist.
                4. Bone, falls and infection risks discussed and actions recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page overview of all conditions and specialists exists, with a coordinator named and a yearly medicines review held."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every condition you have and the specialist who manages it"
                - "Ask your family doctor who should coordinate your overall care"
                - "Book a structured medicines review with your pharmacist @recurring(yearly)"
                - "Ask whether a bone density or falls assessment is due"
            - name: Treatment history with reasons each medicine stopped
              description: |-
                ## Purpose
                After several years, few people can remember which medicines they have tried, at what dose, for how long, and why each was stopped. A clear history matters every time a new treatment is considered, because a side effect or failure on one drug often shapes the next choice and the funding rules.

                ## Milestones
                1. Every medicine tried for the condition listed with start and stop dates.
                2. The dose reached and the reason for stopping noted for each.
                3. Allergic reactions and serious side effects highlighted.
                4. The history attached to your diagnosis summary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A treatment history lists every medicine tried with dates, dose and reason for stopping, attached to your diagnosis summary."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request copies of past clinic letters that mention treatment changes"
                - "List each medicine with start date, stop date and dose reached"
                - "Write the reason each medicine was stopped in one line"
                - "Attach the history to your diagnosis summary"
            - name: Dose reduction talk in sustained remission
              description: |-
                ## Purpose
                Once a condition has been quiet for a long stretch, some teams will discuss reducing or spacing out treatment, while others advise staying on it. Preparing for that conversation with your records and your own view on risk lets you weigh fewer infusions or tablets against the chance of a flare.

                ## Milestones
                1. The length and evidence of your remission summarised from your log and results.
                2. Your team asked whether dose reduction or spacing is an option for you.
                3. The risks of flare and how it would be caught written down.
                4. A decision recorded, with a monitoring plan if dosing changes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on dose reduction made with your team, with a monitoring plan written if treatment changes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Summarise how long the condition has been quiet and the evidence for it"
                - "Ask your team whether reducing or spacing doses is an option"
                - "Ask how a returning flare would be detected and treated"
                - "Record the decision and any extra monitoring agreed"
            - name: Clinical trials and patient registries
              description: |-
                ## Purpose
                Research in lupus, MS, inflammatory bowel disease and rarer autoimmune conditions depends on patients joining trials and long-term registries, and some trials offer access to treatments not yet widely available. Knowing which ones you might qualify for, and discussing them with your team, turns your experience into evidence that helps the next person.

                ## Milestones
                1. Your team asked whether they run or know of suitable studies.
                2. A public trials registry searched for your condition and location.
                3. One registry or study joined, or a reason for declining recorded.
                4. Consent forms and study contacts filed with your records.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Suitable trials and registries reviewed with your team, with one joined or a reason for declining recorded."
                cadence: rolling
              tasks:
                - "Ask your team whether they recruit for any studies"
                - "Search a public clinical trials registry for your condition and area @recurring(yearly)"
                - "Read the participant information before agreeing to anything"
                - "File consent forms and study contacts with your records"
            - name: Patient panel or peer support volunteering
              description: |-
                ## Purpose
                Experienced patients are wanted on hospital patient panels, research advisory groups and charity peer support lines, and the role often gives back as much as it asks. Offering a few hours a month helps others newly diagnosed and gives you a voice in how services are run.

                ## Milestones
                1. Two or three volunteering options found through your hospital or patient charity.
                2. The time commitment and training required confirmed.
                3. One role started with any required training completed.
                4. Boundaries set on how much you give during your own flares.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One patient panel or peer support role started, with training done and a written limit for flare periods."
                cadence: rolling
              tasks:
                - "Ask your hospital whether it has a patient panel for your specialty"
                - "Look up peer support volunteering with your condition's charity"
                - "Complete the training for the role you choose"
                - "Agree with the organiser how you step back during a flare"
---

# Autoimmune Condition Management

This area is for anyone living with lupus, multiple sclerosis, Crohn's or ulcerative colitis, vasculitis, Sjögren's or another autoimmune condition, where the work is less about one dramatic decision and more about running a long treatment well. It starts with the foundations (an urgent signs card, a diagnosis summary, a contact sheet, a flare plan and the safety rules for steroids, vaccines and sick days), then the routines that keep infusions, injections, tablets and monitoring bloods on track, the skills of reading results and spotting a flare early, the decisions about medicines, steroids, work and funding, the dated events such as a first infusion or a trip abroad, the situations of a new diagnosis, pregnancy, moving to adult care, caring and later life, and finally the work of an experienced patient.

What repeats is a daily tablet tick, a weekly injection check and symptom check-in, monthly checks on bloods, infusion slots, deliveries, organ tests and disease activity, a quarterly clinic preparation and workplace review, and the yearly review, vaccine timing and safety checks. The Metrics log, Habit tracker, Meeting notes, Reading queue and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
