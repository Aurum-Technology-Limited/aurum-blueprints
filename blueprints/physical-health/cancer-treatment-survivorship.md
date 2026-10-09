---
id: physical-health.cancer-treatment-survivorship
name: Cancer Treatment & Survivorship
description: "A clear record of your diagnosis and team, a treatment calendar, side effect and safety routines, the big decisions prepared for, and a survivorship plan for the years after."
category: personal
version: 1.0.0
tags: [physical-health, cancer-treatment-survivorship, everyone, oncology, chemotherapy, radiotherapy, survivorship, carers]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - weekly-meal-plan
    - monthly-budget-bills
    - habit-tracker
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Cancer Treatment & Survivorship
          description: "Coordinating cancer treatment from diagnosis through chemotherapy, radiotherapy or surgery, then the follow-up scans and long-term survivorship plan afterwards."
          projects:
            - name: Diagnosis summary sheet in your own words
              description: |-
                ## Purpose
                In the first weeks after a diagnosis, people are told the cancer type, stage, grade and plan while still in shock, and most remember a fraction of it. A one-page summary, checked with your clinical nurse specialist, becomes the thing you read before every appointment and hand to every new professional.

                ## Milestones
                1. The cancer type, where it started and any spread written in plain words.
                2. Stage, grade and any receptor or biomarker results recorded exactly as the letter gives them.
                3. The intent of treatment (curative, controlling or symptom relief) noted, as your team described it.
                4. The sheet checked for accuracy by your nurse specialist or oncologist.

                ## Notes
                Ask for copies of every clinic letter. Most teams will send them to you as well as to your doctor, and the letters are where the exact wording lives.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page diagnosis summary exists, matches the clinic letters, and has been checked by a member of your cancer team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the cancer team to copy you into every clinic letter"
                - "Write the cancer type, stage and grade from your latest letter onto one page"
                - "Add the stated aim of treatment and the planned treatments in order"
                - "Bring the sheet to your nurse specialist and ask them to correct it"
            - name: Cancer team contacts and key worker
              description: |-
                ## Purpose
                Cancer care involves surgeons, oncologists, radiographers, a nurse specialist, a chemotherapy unit and often a hospice or community team, each with a different phone number. Naming your key worker and putting every number in one list means you call the right person first time instead of ringing the hospital switchboard.

                ## Milestones
                1. Your key worker or clinical nurse specialist named, with direct line and working hours.
                2. Numbers for the consultant's secretary, chemotherapy or radiotherapy unit and pharmacy listed.
                3. Your hospital number and health service, insurance or patient ID written at the top.
                4. The list saved on your phone and printed for whoever helps you.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact list naming your key worker and at least four team numbers is saved on your phone and shared with one helper."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask at your next appointment who your key worker is"
                - "Copy every phone number from your letters into one list"
                - "Add your hospital number and patient ID to the top of the list"
                - "Send the list to the person who helps you most"
            - name: Acute oncology hotline card and when to call
              description: |-
                ## Purpose
                Chemotherapy and some other treatments can lower your defences against infection, and a fever during that time can become an emergency within hours. Every treating centre runs a 24-hour hotline with its own rules for when to call, and having those rules on a card by the thermometer removes the hesitation at 2am.

                ## Milestones
                1. The 24-hour hotline number saved in your phone and written on a card.
                2. The temperature and symptoms your team says need an immediate call written on the card in their words.
                3. A digital thermometer in the house, with spare batteries.
                4. A bag and a plan for getting to hospital at night, including who drives.

                ## Notes
                Do not wait to see if a fever settles or take paracetamol to bring it down before calling. Follow your own team's instructions exactly, since thresholds differ between centres.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hotline card with your centre's call criteria sits by a working thermometer, and one other adult knows where both are."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your chemotherapy nurse for the hotline number and the call criteria"
                - "Buy a digital thermometer and test it today"
                - "Write the hotline card and keep it next to the thermometer"
                - "Agree who drives you to hospital if you have to go in at night"
            - name: Questions for the first oncology appointment
              description: |-
                ## Purpose
                The first meeting with an oncologist sets the plan for months, and it usually lasts less than half an hour. Arriving with a written list, sorted by what matters most to you, means the questions that keep you awake get answered while the person who can answer them is in the room.

                ## Milestones
                1. A list of questions grouped under diagnosis, treatment, side effects and daily life.
                2. Your top three questions marked so they are asked first.
                3. Answers written down during or straight after the appointment.
                4. Questions left unanswered passed to your nurse specialist within a week.

                ## Notes
                Useful questions include what the aim of treatment is, how long it will last, how it will affect work, and what you should call about. Start from the **Meeting notes** template.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written question list was taken to the first oncology appointment and the answers to the top three are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write every question you have, without sorting, in one sitting"
                - "Group them and star the three that matter most"
                - "Ask the agent to turn your list into a one-page appointment sheet"
                - "Pass anything left unanswered to your nurse specialist"
            - name: Appointment companion and note-taking plan
              description: |-
                ## Purpose
                Bad news and complex plans are hard to absorb alone, and many people walk out unsure what was said. Agreeing in advance who comes with you, what their job is, and whether you may record the conversation turns each appointment into something you can go back to.

                ## Milestones
                1. A named companion for the key appointments, with a backup.
                2. Their role agreed: listening, writing notes or asking the questions you forget.
                3. Permission asked to record consultations on your phone, and the answer noted.
                4. A shared place where notes from each appointment are kept.

                ## Notes
                Start from the **Meeting notes** template so every appointment's notes look the same and are easy to compare.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes or recordings exist for every key appointment, taken by you or an agreed companion."
                cadence: rolling
              tasks:
                - "Ask one person to come to your next oncology appointment"
                - "Agree what you want them to do while they are there"
                - "Ask the clinician at the start whether you may record the consultation"
                - "File the notes in your treatment folder the same day"
            - name: Treatment calendar from first cycle to last
              description: |-
                ## Purpose
                Chemotherapy cycles, blood tests the day before, radiotherapy fractions and scans all have fixed dates that knock on to work, childcare and lifts. A single calendar from the first treatment to the last, with the expected low days shaded, lets you and everyone helping plan around the treatment rather than react to it.

                ## Milestones
                1. Every planned treatment date, blood test and scan entered in one calendar.
                2. The days your team says you are likely to feel worst marked for each cycle.
                3. The calendar shared with the people who drive, cover childcare or cover at work.
                4. Changes from delayed or reduced cycles updated within a day of being told.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calendar shows every planned treatment, blood test and scan to the end of the current treatment plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the unit for your full schedule of planned cycles or fractions"
                - "Enter every treatment, blood test and scan into one calendar"
                - "Shade the days you are expected to feel lowest after each cycle"
                - "Share the calendar with your drivers and anyone covering for you"
            - name: Cancer treatment folder for letters and scans
              description: |-
                ## Purpose
                Cancer generates a remarkable amount of paper: clinic letters, consent forms, chemotherapy diaries, appointment slips and scan reports. One folder, paper or digital, in date order, saves the hour lost hunting for a letter while a nurse waits on the phone.

                ## Milestones
                1. One folder with sections for letters, results, treatment records and appointments.
                2. Everything received so far filed in date order.
                3. Your diagnosis summary and contact list at the front.
                4. A monthly filing habit running through treatment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every cancer letter and report received is filed in one folder in date order, with no loose paper older than a month."
                cadence: rolling
              tasks:
                - "Buy a ring binder with dividers or set up one digital folder"
                - "Gather every cancer letter in the house and file it by date"
                - "Put your diagnosis summary and contact list at the front"
                - "File the month's cancer post and portal letters @recurring(monthly:3)"
            - name: Work, income and sick pay through treatment
              description: |-
                ## Purpose
                Treatment can mean months of reduced or no work, and sick pay, benefits and insurance claims all have deadlines that are easy to miss while unwell. Sorting out what you are entitled to in the first month protects income when you can least chase it.

                ## Milestones
                1. Your employer's sick pay policy and your contract terms read and summarised.
                2. Any income protection, critical illness or mortgage protection policies found and checked.
                3. Claims started for any policy that pays on a cancer diagnosis.
                4. A cancer charity benefits adviser or welfare service contacted about state support.

                ## Notes
                Cancer is usually treated as a disability under employment law in many countries, which can give rights to adjustments. A cancer charity's benefits advisers can check your entitlements for free.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every income source and policy is listed with its status, and any claim payable on diagnosis has been submitted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find your employment contract and sick pay policy"
                - "Search your paperwork and bank statements for insurance that pays on diagnosis"
                - "Book a call with a cancer charity benefits adviser"
                - "Submit any critical illness claim with the diagnosis letter attached"
            - name: Who to tell, and who tells whom
              description: |-
                ## Purpose
                Repeating the diagnosis to every friend and colleague is exhausting, and people hearing it second-hand can hurt. Deciding who you tell yourself, who passes the news on, and what you want shared keeps the story yours.

                ## Milestones
                1. A list of people split into those you tell yourself and those someone else tells.
                2. One or two sentences agreed for others to use when passing the news on.
                3. Your manager or HR told what you want them to know, and what to keep private.
                4. One channel set up for updates, such as a group message or a private page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Everyone on your list has been told, by you or your named messenger, using wording you agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the names of everyone who should hear the news"
                - "Mark the ones you will tell yourself"
                - "Agree the wording your messenger will use with everyone else"
                - "Set up one group or page for treatment updates"
            - name: Dental check before cancer treatment starts
              description: |-
                ## Purpose
                Chemotherapy, head and neck radiotherapy and some bone-strengthening drugs used in cancer care raise the risk of mouth infections and jaw problems, and dental work during treatment is harder to arrange. A check-up before the first treatment, with the dentist told your plan, sorts problems while it is still simple.

                ## Milestones
                1. Your oncology team asked whether a dental check is needed before treatment.
                2. A dental appointment booked, with the dentist told about your planned treatment.
                3. Any urgent work done or scheduled before treatment starts.
                4. The dentist's advice for the treatment period written down.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A dental check took place before the first treatment, or your team confirmed in writing that none is needed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your oncology team whether you need a dental check before treatment"
                - "Book the dentist and tell them your treatment start date"
                - "Get any urgent dental work done before the first cycle"
                - "Write down the dentist's advice for the months of treatment"
            - name: Daily temperature and symptom diary on chemotherapy
              description: |-
                ## Purpose
                Many chemotherapy units give you a diary and ask you to check your temperature and note symptoms every day, because a rising temperature or a new symptom is often the first sign of trouble. A two-minute daily check gives the hotline nurse facts instead of guesses when you call.

                ## Milestones
                1. A diary, paper or app, with columns for temperature, symptoms and anything you ate or took.
                2. Temperature checked at the same time each day through treatment.
                3. Anything matching your hotline card acted on the same day.
                4. The diary brought to each pre-treatment appointment.

                ## Notes
                If your unit gave you its own diary, use that one: the nurses know where to look in it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily temperature and symptom entry exists for at least 90 percent of days in each treatment cycle."
                cadence: rolling
              tasks:
                - "Ask the chemotherapy unit whether they provide a treatment diary"
                - "Choose a fixed time each day for the temperature check"
                - "Take and record your temperature and symptoms @recurring(daily)"
                - "Show the diary to the nurse at each pre-treatment check"
            - name: Weekly side effect summary for the treatment team
              description: |-
                ## Purpose
                Side effects that are mentioned can often be eased with medicines, dose changes or practical tips, but people tend to minimise them in a short appointment. A weekly summary graded mild, moderate or severe gives your team a clear picture before they decide on the next cycle.

                ## Milestones
                1. A short list of the side effects your treatment commonly causes, from your information sheet.
                2. A weekly entry grading each one and noting what helped.
                3. The summary read out or handed over at each review.
                4. Changes the team made in response noted alongside.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly side effect summary exists for every week of treatment, and each review appointment has one to hand."
                cadence: rolling
              tasks:
                - "List the common side effects from your treatment information sheet"
                - "Grade this week's side effects and note what helped @recurring(weekly:fri)"
                - "Hand the summary to the doctor or nurse at each review"
                - "Record any change the team makes to tablets or doses"
            - name: Blood counts and tumour marker tracker
              description: |-
                ## Purpose
                Your blood is checked before every cycle, and white cells, haemoglobin, platelets, kidney and liver results decide whether treatment goes ahead. For some cancers a tumour marker is tracked too. A simple table of each result over time helps you understand a delay and ask better questions.

                ## Milestones
                1. The tests your team checks before each cycle listed, with the units they use.
                2. Each set of results added to a table within a few days.
                3. Delays or dose changes noted beside the results that triggered them.
                4. Questions about trends taken to your next review rather than worried over alone.

                ## Notes
                Start from the **Metrics log** template. A single tumour marker result can move for many reasons; ask your team how much weight they give it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A table holds every pre-cycle blood result and any tumour marker since treatment began, updated within a week of each test."
                cadence: rolling
              tasks:
                - "Ask which blood tests are checked before each treatment"
                - "Set up a results table with one column per test"
                - "Add the latest blood results from the portal or letters @recurring(monthly:12)"
                - "Mark any delayed or reduced cycle beside its results"
            - name: Practical help rota for treatment weeks
              description: |-
                ## Purpose
                Friends often say let me know if I can help, and then never hear, because asking is hard when you feel ill. A rota of specific jobs (lifts, school runs, meals, dog walks) matched to the treatment calendar turns goodwill into the help you need in the worst week of each cycle.

                ## Milestones
                1. A list of concrete jobs that need doing in a typical treatment week.
                2. Helpers matched to jobs and days, with a coordinator who is not you.
                3. The rota shared in one place everyone can see.
                4. Gaps for the coming week spotted and filled each weekend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lift, meal and caring job for the coming week has a named helper by Sunday evening throughout treatment."
                cadence: rolling
              tasks:
                - "List the jobs that need doing in your hardest treatment week"
                - "Ask one friend to coordinate the rota instead of you"
                - "Share the rota in a group chat or shared calendar"
                - "Check next week's rota for gaps @recurring(weekly:sun)"
            - name: Mouth care routine during treatment
              description: |-
                ## Purpose
                Sore mouth and ulcers are among the most common side effects of chemotherapy and of radiotherapy to the head and neck, and they can stop you eating. A gentle routine using the products your unit recommends, started before symptoms appear, makes them less likely and easier to spot early.

                ## Milestones
                1. The mouthwash, toothbrush and toothpaste your unit recommends in the bathroom.
                2. A twice-daily routine running from the first day of treatment.
                3. Your mouth checked in a mirror daily for redness, white patches or ulcers.
                4. Any soreness that stops eating or drinking reported to the hotline.

                ## Notes
                Many shop mouthwashes contain alcohol, which stings a sore mouth. Ask your unit what to use.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twice-daily mouth care routine is followed throughout treatment and any ulcers are reported within a day of appearing."
                cadence: rolling
              tasks:
                - "Ask the chemotherapy nurse which mouth care products they recommend"
                - "Buy a soft toothbrush and the recommended mouthwash"
                - "Clean your mouth and check it in the mirror @recurring(daily)"
                - "Report soreness that stops you eating to the hotline the same day"
            - name: Infection precautions at home on low-count days
              description: |-
                ## Purpose
                In the days when white cells are lowest, ordinary germs in the kitchen, garden or a visitor's cold can cause serious illness. A short set of household precautions, agreed with your team and known by everyone at home, cuts risk without turning the house into a hospital.

                ## Milestones
                1. Your team's advice on food safety, visitors and pets written as a short house list.
                2. Hand gel by the front door and in the kitchen.
                3. Visitors told to stay away if they have a cold, sickness or stomach bug.
                4. A weekly kitchen and towel change routine running through treatment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written house list of infection precautions is on the fridge and followed by everyone in the household during treatment."
                cadence: rolling
              tasks:
                - "Ask your team which foods and activities to avoid on low-count days"
                - "Write a short house list and put it on the fridge"
                - "Send visitors a message asking them to stay away when unwell"
                - "Replace kitchen cloths, towels and toothbrush covers @recurring(weekly:wed)"
            - name: Weight and appetite log through treatment
              description: |-
                ## Purpose
                Taste changes, nausea and fatigue can cause steady weight loss during treatment, and losing too much can delay or weaken it. A weekly weight and a note on appetite tell the team early when a dietitian, anti-sickness medicine or supplement drinks would help.

                ## Milestones
                1. A starting weight recorded before treatment begins.
                2. Weekly weight and a one-line appetite note logged on the same scale.
                3. Loss beyond the amount your team flags reported promptly.
                4. A dietitian referral asked for if eating becomes hard.

                ## Notes
                Start from the **Weekly meal plan** template to plan small, frequent meals for the low days of each cycle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly weight and appetite entry exists for every week of treatment, and any flagged loss was reported within a week."
                cadence: rolling
              tasks:
                - "Weigh yourself today and write it as the starting weight"
                - "Ask your team how much weight loss they want to hear about"
                - "Weigh in and note appetite and taste changes @recurring(weekly:mon)"
                - "Plan easy meals for the low days of the next cycle"
            - name: Fatigue and gentle activity log
              description: |-
                ## Purpose
                Cancer-related fatigue is not ordinary tiredness and does not lift with a night's sleep, yet gentle activity is one of the few things shown to ease it. Logging energy and a short walk each week shows patterns across cycles and helps you plan important things for your better days.

                ## Milestones
                1. A simple energy score recorded alongside any walk or movement.
                2. The pattern of better and worse days in each cycle noticed and written down.
                3. Important tasks and visits planned into the usual better days.
                4. Fatigue that stops washing, dressing or eating reported to the team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly energy and activity log covers the whole treatment period and shows the better days of each cycle."
                cadence: rolling
              tasks:
                - "Choose a 0 to 10 energy score you can record in seconds"
                - "Take a short walk on a better day and note how it felt"
                - "Review the week's energy scores and walks @recurring(weekly:sat)"
                - "Move one important task into next cycle's better days"
            - name: Monthly cancer costs and claims record
              description: |-
                ## Purpose
                Travel to treatment, hospital parking, prescriptions, wigs, extra heating and lost earnings add up fast, and many are claimable or refundable if you keep receipts. A monthly record shows the real cost of treatment and makes grant, benefit and insurance applications quicker.

                ## Milestones
                1. A list of cancer-related costs grouped as travel, prescriptions, equipment and household.
                2. Receipts kept together and totalled each month.
                3. Help checked for: parking concessions, travel refunds, prescription exemptions and charity grants.
                4. Claims submitted and their outcome recorded.

                ## Notes
                Start from the **Monthly budget and bills** template. Many hospitals offer free or reduced parking for patients on regular treatment, but only if you ask.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly record of cancer costs exists for each month of treatment, with every eligible claim submitted."
                cadence: rolling
              tasks:
                - "Ask the treatment unit about parking concessions and travel refunds"
                - "Check whether your country offers free prescriptions for people with cancer"
                - "Total the month's cancer costs and file the receipts @recurring(monthly:17)"
                - "Apply for any charity grant you qualify for"
            - name: Reading your pathology report with your team
              description: |-
                ## Purpose
                The pathology report decides much of what happens next: the type, grade, margins, lymph nodes and markers that guide treatment. Going through it line by line with your nurse specialist turns a page of jargon into a short list of facts you understand.

                ## Milestones
                1. A copy of your pathology report in your folder.
                2. Every unfamiliar term looked up in a reputable cancer charity glossary.
                3. The report reviewed with your nurse specialist or consultant.
                4. A plain-language summary of what each finding means for your treatment added to your diagnosis sheet.

                ## Notes
                Avoid forums for interpreting your own report. The same word can mean different things in different cancers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your pathology report has been reviewed with a member of your team and a plain-language summary of it is filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your team for a copy of the pathology report"
                - "Highlight every term you do not understand"
                - "Look up each highlighted term in a cancer charity glossary"
                - "Go through the report with your nurse specialist"
            - name: How your chemotherapy or immunotherapy works
              description: |-
                ## Purpose
                Knowing the names of your drugs, how they are given and what they commonly cause makes side effects less frightening and easier to report. A short personal guide built from your regimen's information sheet, not general reading, keeps the facts specific to you.

                ## Milestones
                1. The name of your regimen and each drug in it written down.
                2. How and how often each is given, and for how many cycles.
                3. The common, the serious and the late side effects listed from the official sheet.
                4. Any interactions with your other medicines or supplements checked with the oncology pharmacist.

                ## Notes
                Immunotherapy side effects can appear months after a dose and affect almost any organ. Tell any doctor who sees you that you have had immunotherapy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to your regimen exists, built from its official information sheet and checked with the oncology pharmacist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the unit for the information sheet for your exact regimen"
                - "Write your drug names, schedule and cycle count on one page"
                - "List the side effects the sheet says need a call"
                - "Ask the oncology pharmacist to check your other medicines and supplements"
            - name: What happens at radiotherapy planning and treatment
              description: |-
                ## Purpose
                Radiotherapy starts with a planning scan, sometimes small skin marks or a mask, then a course of daily sessions that can run for several weeks. Knowing the sequence and what you need to do (a full bladder, holding still, breathing instructions) makes the first sessions calmer and less likely to be repeated.

                ## Milestones
                1. The number of sessions, start date and treatment site written down.
                2. Any preparation such as bladder filling, bowel preparation or breath holding practised at home.
                3. The planning scan attended, and any marks or mask explained.
                4. The side effects expected during and after the course listed from your leaflet.

                ## Notes
                Side effects often peak a week or two after the last session, not during it. Keep the support in place until then.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can state your session count, preparation steps and expected side effects, and the planning scan has taken place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the radiographers for your session count and preparation instructions"
                - "Practise any bladder or breathing preparation at home"
                - "Arrange transport for the full course of daily sessions"
                - "List the side effects your leaflet says to expect after the course ends"
            - name: Skin care in the radiotherapy area
              description: |-
                ## Purpose
                Skin in the treatment area can become red, dry, itchy or broken during radiotherapy, and centres differ in what they want you to put on it. Learning your centre's rules before the first session saves soreness and keeps you from using a product that interferes with treatment.

                ## Milestones
                1. Your centre's advice on washing, moisturisers, deodorants and shaving written down.
                2. The recommended products bought and anything to avoid put away.
                3. Loose, soft clothing ready for the treated area.
                4. Skin changes reported to the radiographers at each session.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your centre's skin care rules are written down, the right products are at home, and skin changes are reported at sessions."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask the radiographers what you may put on the treated skin"
                - "Set aside any products your centre asks you to avoid"
                - "Lay out loose cotton clothing for the treatment weeks"
                - "Point out any skin change to the radiographer at your next session"
            - name: Looking after a PICC line or port at home
              description: |-
                ## Purpose
                Many people on longer courses of chemotherapy have a PICC line or an implanted port, which needs regular flushing and dressing and can become infected or blocked. Knowing how to protect it, what to look for and when it is due a flush prevents an avoidable emergency admission.

                ## Milestones
                1. The type of line, its insertion date and the unit that maintains it written down.
                2. A waterproof cover and a plan for showering without wetting the line.
                3. The warning signs your team gave you (redness, swelling, pain, fever) on your hotline card.
                4. Every flush and dressing change booked and attended.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every scheduled flush and dressing change for your line or port is attended, with no missed appointments."
                cadence: rolling
              tasks:
                - "Write the line type, insertion date and maintaining unit in your folder"
                - "Buy a waterproof shower cover for the line"
                - "Add the line warning signs to your hotline card"
                - "Check the next flush or dressing appointment is booked @recurring(weekly:tue)"
            - name: Reading scan reports and response terms
              description: |-
                ## Purpose
                Scan reports during and after treatment use words such as stable disease, partial response, indeterminate or no evidence of disease, and a portal often shows them before anyone has explained them. Learning what these terms usually mean, and agreeing with your team how you want results given, prevents a lonely evening reading a report alone.

                ## Milestones
                1. The common response and follow-up terms in your reports looked up and listed.
                2. A decision made about whether you read results on the portal before the appointment.
                3. Each scan report discussed with your oncologist before you draw conclusions.
                4. Your team's interpretation written next to each report in your folder.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of the terms used in your own scan reports exists, and each report has your team's interpretation filed with it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Collect the scan reports you have so far"
                - "Look up each response term in a cancer charity glossary"
                - "Decide whether you will open portal results before the appointment"
                - "Write your oncologist's interpretation beside each report"
            - name: Working round chemo brain and memory changes
              description: |-
                ## Purpose
                Many people notice poorer memory, slower thinking and trouble concentrating during and after cancer treatment, which can be frightening at work and at home. Learning the practical workarounds (one notebook, alarms, single-tasking, rest before hard thinking) keeps daily life running while it improves.

                ## Milestones
                1. The changes you notice described in a short list with examples.
                2. Three workarounds chosen and used for a month.
                3. The changes mentioned to your team so other causes such as anaemia or poor sleep can be checked.
                4. Adjustments asked for at work if needed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three named memory workarounds have been used for a month and the changes have been raised with your team."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down three recent examples of memory or concentration slips"
                - "Set up one notebook or phone note for everything you need to remember"
                - "Mention the changes at your next review and ask about other causes"
                - "Ask your manager for written instructions and fewer interruptions"
            - name: Treatment options decision with the multidisciplinary team
              description: |-
                ## Purpose
                Most cancer plans are agreed by a multidisciplinary team meeting, and you are often offered a choice: surgery first or chemotherapy first, more or less treatment, or watchful waiting. Laying out the options with their expected benefit, side effects and impact on your life lets you make a decision you can stand behind.

                ## Milestones
                1. The options your team recommends written down, including doing less or nothing.
                2. The expected benefit of each, in numbers if the team can give them.
                3. Short and long-term side effects of each listed.
                4. What matters most to you (time, function, fertility, work, appearance) ranked.
                5. Your decision recorded and told to your team.

                ## Notes
                Ask what would happen with no treatment, and how much each option adds. These are the numbers decisions turn on.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of your treatment options exists and your decision has been communicated to your team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your consultant what the multidisciplinary team recommended and why"
                - "Write each option with its benefit and side effects side by side"
                - "Rank what matters most to you in the next few years"
                - "Tell your team your decision and any conditions you attach to it"
            - name: Second opinion on the diagnosis or treatment plan
              description: |-
                ## Purpose
                A second opinion is a normal request in cancer care, especially for rare cancers, borderline pathology or a plan with life-changing side effects. Organising one properly, with your scans and slides sent ahead, gets a useful answer without delaying treatment by weeks.

                ## Milestones
                1. A clear question written for the second opinion to answer.
                2. A specialist centre or consultant chosen, with a referral route agreed.
                3. Scans, pathology slides and letters sent before the appointment.
                4. The second opinion compared with the first and a decision recorded.

                ## Notes
                Ask your own team how long you can safely wait for a second opinion before treatment needs to start.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A second opinion letter is in your folder and your decision after reading it is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the one question you want a second opinion to answer"
                - "Ask your consultant or doctor to refer you to a specialist centre"
                - "Request that your scans and pathology slides are sent ahead"
                - "Compare the two opinions and note your decision"
            - name: Clinical trial search and eligibility questions
              description: |-
                ## Purpose
                Trials can offer access to new treatments and are part of standard care in some cancers, but most people only hear about them if they ask. Checking the public trial registers and asking your oncologist specific questions takes a few hours and answers whether a trial is worth considering.

                ## Milestones
                1. Your oncologist asked whether any trials are open to you.
                2. Public trial registers searched by cancer type, stage and location.
                3. A shortlist of trials with eligibility, location and what joining involves.
                4. A decision recorded on each trial, with reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your oncologist's view on trials is recorded, and every shortlisted trial has a yes, no or not yet decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your oncologist whether any clinical trials suit you"
                - "Search a public trial register for your cancer type and region"
                - "Ask the agent to summarise each shortlisted trial's eligibility in plain words"
                - "Record your decision on each trial and the reason"
            - name: Fertility preservation decision before treatment
              description: |-
                ## Purpose
                Chemotherapy, pelvic radiotherapy and some surgery can affect fertility, and options such as egg, embryo or sperm freezing usually have to happen before treatment starts. Raising it in the first week, even if you are unsure about future children, keeps the choice open.

                ## Milestones
                1. Your oncologist asked how your treatment may affect fertility.
                2. A fertility specialist referral made urgently if you want to consider preservation.
                3. Options, timing and any funding rules understood.
                4. A decision made and recorded before the first treatment.

                ## Notes
                Fertility services usually fast-track people about to start cancer treatment. Say clearly that you have a start date.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fertility decision is recorded before treatment begins, with a specialist seen if preservation was wanted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your oncologist today whether treatment could affect fertility"
                - "Request an urgent fertility referral if you want options"
                - "Check what funding rules apply to fertility preservation"
                - "Write down your decision before the first treatment"
            - name: Scalp cooling, wig and headwear choices
              description: |-
                ## Purpose
                Hair loss is the side effect many people dread most, and not every treatment causes it. Finding out early whether your regimen does, whether scalp cooling is offered and suitable, and where to get a wig or headwear lets you decide calmly rather than in the week your hair falls.

                ## Milestones
                1. Your team asked whether your treatment usually causes hair loss.
                2. Scalp cooling availability and suitability checked for your regimen.
                3. Wig, scarf and hat options seen, with any funding or vouchers claimed.
                4. A plan chosen for the first weeks of hair loss, such as a short cut beforehand.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A hair loss plan is chosen before the first cycle, with scalp cooling decided and headwear in the house if wanted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your team whether your regimen causes hair loss"
                - "Ask whether scalp cooling is offered and suitable for you"
                - "Book a wig or headwear fitting before treatment starts"
                - "Claim any wig voucher or charity help available"
            - name: Complementary therapies checked with the oncology team
              description: |-
                ## Purpose
                Massage, acupuncture, mindfulness and supplements are widely offered to people with cancer, and some herbal products and high-dose supplements can interact with treatment. Checking each one with your oncology pharmacist before starting keeps the comforting ones and drops the risky ones.

                ## Milestones
                1. Every supplement, herbal product and therapy you use or plan to use listed.
                2. The list reviewed by your oncology pharmacist or nurse.
                3. Anything advised against stopped and noted.
                4. Free complementary therapies at your hospital or a cancer support centre found.

                ## Notes
                Be wary of anything sold as a cure or as a replacement for treatment, especially if it costs a lot.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every supplement and therapy you use has been checked with the oncology team and the advice is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every supplement, herbal product and therapy you use"
                - "Ask the oncology pharmacist to review the list"
                - "Stop and note anything the pharmacist advises against"
                - "Find out what free therapies your local cancer support centre offers"
            - name: First chemotherapy day plan and bag
              description: |-
                ## Purpose
                A first chemotherapy session can last from an hour to most of a day, starting with blood checks and a wait for pharmacy. Arriving with a packed bag, a lift home and the right questions makes the day predictable, and the bag is ready for every cycle after.

                ## Milestones
                1. Start time, expected length and location of the first session confirmed.
                2. A lift there and back, and a companion if allowed.
                3. A bag packed with snacks, water, layers, chargers, medicines list and something to do.
                4. Take-home medicines and their instructions understood before leaving.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first chemotherapy session is attended with a packed bag, a lift home and the take-home medicine instructions written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the time, place and expected length of your first session"
                - "Arrange a lift there and back"
                - "Pack the chemotherapy day bag and leave it by the door"
                - "Ask the nurse to go through the take-home medicines before you leave"
            - name: Last treatment day and end-of-treatment appointment
              description: |-
                ## Purpose
                The end of active treatment is often expected to feel like relief, yet many people feel suddenly unsupported when hospital visits stop. Planning the last day and booking an end-of-treatment conversation sets out what happens next, who to call and what to watch for.

                ## Milestones
                1. The date of the last treatment confirmed and marked.
                2. An end-of-treatment appointment booked with your nurse specialist or consultant.
                3. Your follow-up schedule, warning signs and contacts written down at that appointment.
                4. A small, chosen way of marking the day, if you want one.

                ## Notes
                Some centres give this conversation a formal name and others do not. Ask for the conversation, whatever it is called locally.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An end-of-treatment appointment has taken place and your follow-up schedule and contacts are written in your folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the date of your last planned treatment"
                - "Book an end-of-treatment appointment with your nurse specialist"
                - "Write down your follow-up schedule and who to call afterwards"
                - "Decide whether and how you want to mark the last day"
            - name: Surveillance scan and results wait plan
              description: |-
                ## Purpose
                Follow-up scans and tests after treatment bring a predictable wave of anxiety in the days before results. Knowing the schedule, booking the results conversation at the same time as the scan, and planning something for the waiting days makes each round easier to get through.

                ## Milestones
                1. Your follow-up schedule (scans, tests and clinic visits) for the next two years written down.
                2. Each scan booked with a results date agreed at the same time.
                3. A plan for the waiting days, such as company, distraction or a support line.
                4. Missed or late scans chased within two weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every surveillance scan in the schedule is booked with a results date, and none has gone more than two weeks overdue."
                cadence: cyclic
              tasks:
                - "Ask your team for the follow-up schedule for the next two years"
                - "Check the next surveillance scan and results date are booked @recurring(quarterly)"
                - "Plan one thing for the days between scan and results"
                - "Chase any scan invitation that is two weeks late"
            - name: Phased return to work after treatment
              description: |-
                ## Purpose
                Going straight back to full hours after months of treatment often ends in another spell off sick. A phased return agreed with your employer and, where available, occupational health, with adjusted hours and duties, gives your energy and concentration time to catch up.

                ## Milestones
                1. A return date and phased hours plan agreed with your manager.
                2. An occupational health referral made if your employer has one.
                3. Adjustments written down, such as hours, home working or time off for follow-up appointments.
                4. A review meeting held four weeks into the return.

                ## Notes
                Ask your doctor for a fit note that mentions a phased return and the adjustments you need.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written phased return plan with adjustments is agreed with your employer and reviewed four weeks after you start back."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your doctor for a fit note recommending a phased return"
                - "Request an occupational health referral through your manager or HR"
                - "Draft the hours and adjustments you want for the first eight weeks"
                - "Book a review meeting for four weeks after your return date"
            - name: Talking to children about a parent's cancer
              description: |-
                ## Purpose
                Children usually sense when something is wrong, and silence often frightens them more than honest, age-appropriate facts. Planning what to say, using the word cancer, and preparing them for visible changes like hair loss helps them cope and keeps their trust.

                ## Milestones
                1. What each child will be told agreed between the adults, by age.
                2. The first conversation held, with time for questions.
                3. School or nursery told, with a named contact.
                4. Children prepared for treatment changes before they happen.

                ## Notes
                Cancer charities publish free guides and story books for different ages. Your nurse specialist or a hospital family support worker can help too.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Each child has been told about the cancer in words agreed by the adults, and their school has a named contact."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get a cancer charity guide for talking to children of each age"
                - "Agree with the other adults what each child will be told"
                - "Hold the first conversation somewhere quiet with time for questions"
                - "Tell the school or nursery and name one contact there"
            - name: Supporting someone through cancer treatment as their carer
              description: |-
                ## Purpose
                Partners, adult children and friends who care for someone through treatment often run the calendar, the medicines and the worry while still working. Getting the practical permissions in place and looking after your own health means you can keep going for the months treatment lasts.

                ## Milestones
                1. The person's consent recorded so the team can speak to you.
                2. You registered as a carer with your own doctor and employer, where that applies.
                3. A carer's assessment or local carers' support contacted.
                4. One protected break each week in place for yourself.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Written consent for the team to talk to you is on file and you have taken a weekly break for at least eight weeks."
                cadence: rolling
              tasks:
                - "Ask the person to tell the team in writing that they may speak to you"
                - "Tell your own doctor that you are now a carer"
                - "Contact a local carers' service about an assessment or support"
                - "Book one protected hour off for yourself @recurring(weekly:sat)"
            - name: Going through treatment while living alone
              description: |-
                ## Purpose
                Living alone during cancer treatment raises practical questions others do not face: who notices if you develop a fever at night, who drives you home after sedation, who picks up prescriptions. A small safety net agreed in advance covers the gaps without giving up independence.

                ## Milestones
                1. Two people agreed as daily check-in contacts on low days.
                2. A spare key with a trusted neighbour or a key safe fitted.
                3. Lifts arranged for any appointment where you cannot drive afterwards.
                4. Food and medicines stocked before each cycle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two named check-in contacts, a spare key arrangement and lifts for every sedation or treatment day are in place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask two people to message or call you daily on low days"
                - "Leave a spare key with a neighbour or fit a key safe"
                - "Arrange lifts for every appointment where driving is not allowed"
                - "Stock easy food and medicines in the days before each cycle"
            - name: Older adult treatment planning and fitness assessment
              description: |-
                ## Purpose
                For older people, the right cancer treatment depends as much on fitness, other conditions, medicines and what matters to them as on age itself. Asking for a geriatric or fitness assessment and bringing a clear medicines list helps the team offer treatment that fits the person, not the birth date.

                ## Milestones
                1. A full medicines list and list of other conditions given to the oncology team.
                2. A fitness, frailty or geriatric oncology assessment asked for.
                3. Priorities such as independence, staying at home or time with family stated to the team.
                4. Support at home planned for during treatment.

                ## Notes
                Age alone should not rule treatment in or out. If it seems to, ask what the decision was based on.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A fitness assessment has been requested and the team has a written list of medicines, conditions and personal priorities."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a full list of current medicines and other conditions"
                - "Ask the oncologist whether a fitness or geriatric assessment is available"
                - "Tell the team in writing what matters most during treatment"
                - "Arrange help at home for the weeks of treatment"
            - name: Studying or starting a career through cancer treatment
              description: |-
                ## Purpose
                Teenagers and young adults with cancer face treatment while exams, university places, first jobs and friendships carry on without them. Telling the college or employer early, asking for deferrals and adjustments, and connecting with a teenage and young adult cancer service keeps options open.

                ## Milestones
                1. The school, college or university told, with a named support contact.
                2. Deferrals, exam adjustments or reduced study load agreed in writing.
                3. A teenage and young adult cancer service or peer group contacted.
                4. A plan for staying in touch with friends during treatment.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written adjustments or a deferral are agreed with your place of study or work, and you are in contact with a young adult cancer service."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Email your tutor or student support team about your diagnosis"
                - "Ask in writing for exam adjustments or a deferral"
                - "Ask your team about a teenage and young adult cancer service"
                - "Choose one way to keep friends updated during treatment"
            - name: Survivorship care plan and treatment summary
              description: |-
                ## Purpose
                When treatment ends, the details of what you had (drugs, doses, radiotherapy fields, surgery) decide which late effects to watch for, and they are hard to piece together years later. A treatment summary and survivorship care plan, written by your team and copied to your doctor, is the document every future clinician will want.

                ## Milestones
                1. A treatment summary requested from your cancer team.
                2. The summary lists each treatment, dates, and drugs or radiotherapy areas.
                3. A care plan states your follow-up schedule, possible late effects and who to contact.
                4. Copies held by you and your doctor.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written treatment summary and survivorship plan from your team are in your folder and on file with your doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your nurse specialist for a treatment summary and care plan"
                - "Check the summary includes every drug, date and radiotherapy area"
                - "Make sure your doctor has a copy on file"
                - "File the summary at the front of your treatment folder"
            - name: Late effects watch list from your treatment summary
              description: |-
                ## Purpose
                Some treatments carry risks that appear years later, such as effects on the heart, bones, thyroid, hearing or fertility, or a raised risk of a second cancer. A personal watch list taken from your treatment summary, with the checks your team recommends, means those checks happen on schedule.

                ## Milestones
                1. Each late effect your team mentions listed against the treatment that causes it.
                2. The recommended checks and how often written beside each one.
                3. The checks booked or added to your annual review.
                4. Any new symptom on the list reported to your doctor promptly.

                ## Notes
                Your watch list belongs to your treatment, not to your cancer type. Two people with the same cancer can need very different checks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A watch list of late effects and recommended checks exists, agreed with your team, and every check due this year is booked."
                cadence: cyclic
              tasks:
                - "Ask your team which late effects your treatments can cause"
                - "List each one with the check and interval they recommend"
                - "Book the checks that are due this year"
                - "Review the late effects list against your treatment summary @recurring(yearly)"
            - name: Lymphoedema early warning routine
              description: |-
                ## Purpose
                After surgery or radiotherapy to lymph nodes, swelling in an arm, leg or other area can appear months or years later, and it is easier to manage when caught early. A monthly check for tightness, swelling or heaviness, and knowing who to tell, gets you to a lymphoedema service before it becomes established.

                ## Milestones
                1. Your team asked whether you are at risk and which area to watch.
                2. A baseline measurement or photo of the at-risk limb recorded.
                3. A monthly check for swelling, tightness or heaviness running.
                4. The lymphoedema service contact on your list, ready for any change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly limb check is recorded for a year and any change was reported to the team within two weeks."
                cadence: rolling
              tasks:
                - "Ask your team whether you are at risk of lymphoedema and where"
                - "Photograph or measure the at-risk limb as a baseline"
                - "Check the at-risk area for swelling or tightness @recurring(monthly:8)"
                - "Add the lymphoedema service contact to your team list"
            - name: Long-term hormone therapy routine
              description: |-
                ## Purpose
                Hormone therapies for breast, prostate and some other cancers are often taken for five to ten years, and many people stop early because of side effects or simply forgetting. A daily routine, repeat prescriptions that never run out and a way to raise side effects keeps the treatment working as planned.

                ## Milestones
                1. The name, purpose and planned length of your hormone therapy written down.
                2. A fixed daily time and a prompt for the tablet.
                3. Repeat prescriptions set up so you never run short.
                4. Side effects raised with your team rather than stopping on your own.

                ## Notes
                Start from the **Habit tracker** template. If side effects are hard to live with, ask about alternatives: there is often more than one option.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The hormone therapy is taken daily with no gaps in supply for a year, and side effects are logged and raised at reviews."
                cadence: rolling
              tasks:
                - "Write the drug name, purpose and planned length in your folder"
                - "Take the hormone therapy tablet at your fixed time @recurring(daily)"
                - "Order the repeat prescription before supply runs low @recurring(monthly:24)"
                - "Note side effects to raise at your next review"
            - name: Fear of recurrence plan
              description: |-
                ## Purpose
                Worry that the cancer will come back is the most common long-term concern among survivors, and it often flares around scans, anniversaries and new aches. A plan that separates symptoms worth reporting from everyday aches, with named sources of support, makes the worry smaller and easier to act on.

                ## Milestones
                1. The symptoms your team says to report written down.
                2. A rule agreed for new aches, such as reporting anything that lasts beyond a set number of weeks.
                3. A support option chosen: a survivorship course, counselling, a support group or a helpline.
                4. A monthly note of how much worry is getting in the way.

                ## Notes
                If worry is stopping sleep, work or relationships, ask your doctor or cancer team about psychological support. It is a recognised part of survivorship care.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of report-worthy symptoms and a chosen support option exist, with twelve monthly worry check-ins recorded."
                cadence: rolling
              tasks:
                - "Ask your team which symptoms you should report after treatment"
                - "Agree with your team how long to wait with a new ache before calling"
                - "Contact one support option such as a group, course or counsellor"
                - "Rate how much worry got in the way this month @recurring(monthly:28)"
            - name: Annual survivorship review with your doctor
              description: |-
                ## Purpose
                Once hospital follow-up ends, long-term care usually passes to your own doctor, who may see many patients with many histories. A yearly review that you prepare for, bringing your treatment summary and late effects list, keeps the checks going and catches new problems early.

                ## Milestones
                1. A yearly review booked with your doctor or practice nurse.
                2. Your treatment summary, watch list and any new symptoms brought along.
                3. Agreed checks booked and their results followed up.
                4. Changes to your plan recorded in your folder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A survivorship review with your doctor takes place every year, with the agreed checks booked within a month of it."
                cadence: cyclic
              tasks:
                - "Ask your doctor's practice whether they run cancer care reviews"
                - "Book the yearly survivorship review @recurring(yearly)"
                - "Bring your treatment summary and late effects list to the review"
                - "Book every check agreed at the review within a month"
            - name: Rebuilding fitness after cancer treatment
              description: |-
                ## Purpose
                Treatment often leaves muscles weaker, stamina lower and confidence shaken, and regular activity after treatment is linked to better energy and recovery. A gradual programme, cleared with your team and ideally through a cancer exercise service, rebuilds strength without flare-ups.

                ## Milestones
                1. Your team's view on safe activity, including any limits from surgery or a line, recorded.
                2. A cancer rehabilitation or exercise referral asked about.
                3. A starting level set and a twelve-week plan written.
                4. Strength and walking sessions logged twice a week.

                ## Notes
                Start low and build slowly. A good week followed by a crash usually means the step up was too big.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-week activity plan cleared by your team is followed, with at least two sessions logged in most weeks."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your team what activity is safe and what to avoid"
                - "Ask whether a cancer rehabilitation or exercise service is available"
                - "Write a twelve-week plan that starts below what feels easy"
                - "Do and log a strength or walking session @recurring(weekly:mon,thu)"
            - name: Sexual health and intimacy after cancer treatment
              description: |-
                ## Purpose
                Changes to desire, body image, erections, vaginal dryness or early menopause are common after cancer treatment, and few people raise them unprompted. Naming the problem to your team opens the door to treatments, specialist clinics and practical help that many survivors never hear about.

                ## Milestones
                1. The changes you have noticed written down privately.
                2. The subject raised with your nurse specialist or doctor.
                3. A referral to a specialist clinic or psychosexual service made if wanted.
                4. A conversation with your partner, if you have one, about what has changed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Sexual health changes have been raised with a clinician and a treatment or referral decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down privately the changes you have noticed"
                - "Raise the changes with your nurse specialist at the next contact"
                - "Ask about a specialist or psychosexual clinic referral"
                - "Choose a quiet time to talk with your partner about what has changed"
            - name: Living with advanced cancer and treatment priorities
              description: |-
                ## Purpose
                When cancer cannot be cured, treatment often becomes a series of lines aimed at control, and each change brings a decision about benefit, side effects and time. Setting down your priorities, involving a palliative care team early and making an advance care plan means future decisions follow your wishes.

                ## Milestones
                1. Your goals and what matters most written in your own words.
                2. A palliative or supportive care referral made for symptom help.
                3. An advance care plan or statement of wishes completed and shared.
                4. A lasting power of attorney or equivalent for health decisions in place.
                5. Your priorities reviewed with your oncologist at each change of treatment.

                ## Notes
                Palliative care is not only for the last days. Early referral is linked to better symptom control and quality of life.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written statement of priorities and an advance care plan exist, are shared with your team, and a palliative care referral has been made."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a page on what matters most to you in the months ahead"
                - "Ask your oncologist for a palliative or supportive care referral"
                - "Complete an advance care plan and give copies to your team"
                - "Raise your priorities with your oncologist whenever treatment changes"
---

# Cancer Treatment & Survivorship

This area is for anyone who has just been told they have cancer, is in the middle of treatment, or has finished and is wondering what comes next, and for the people standing beside them. It starts with the foundations (your diagnosis in writing, the team and the hotline, a treatment calendar and the money), then the daily and weekly routines that keep you safe during treatment, the things worth understanding, the big decisions, the dated days to prepare for, the situations that change the picture, and finally survivorship: late effects, follow-up and life after.

What repeats during treatment is a daily temperature and symptom check, mouth care, a weekly side effect summary and help rota, and monthly blood results and costs; after treatment, the rhythm becomes quarterly surveillance checks and a yearly survivorship review. The Meeting notes, Metrics log, Weekly meal plan, Monthly budget and bills and Habit tracker templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
