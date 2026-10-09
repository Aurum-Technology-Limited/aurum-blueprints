---
id: physical-health.migraine-headache-management
name: Migraine & Headache Management
description: "A daily headache diary your clinician can read, a written attack plan, a monthly guard against painkiller overuse, and fair, one-at-a-time trials of triggers and preventive treatments."
category: personal
version: 1.0.0
tags: [physical-health, migraine-headache-management, everyone, migraine, headache-diary, triggers, preventive-treatment, attack-plan]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - sleep-review
    - habit-tracker
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Migraine & Headache Management
          description: "Logging migraines and headaches, finding triggers, testing preventive treatments and building attack plans, for anyone whose work or family life is disrupted by them."
          projects:
            - name: Headache warning signs card
              description: |-
                ## Purpose
                Most headaches, including severe migraines, are not dangerous, but a few patterns need emergency care: a sudden headache that peaks within a minute, headache with fever and a stiff neck, new weakness, confusion or loss of speech, or a headache after a head injury. Writing your health service's list on one card, with the number to call, means you or the people around you act fast on the rare day it matters and stop second-guessing on all the others.

                ## Milestones
                1. Your health service's published list of urgent headache symptoms found and copied out.
                2. A one-page card with those signs and the emergency and out-of-hours numbers.
                3. Copies kept by the bed, in your bag and on your phone.
                4. Everyone you live with shown the card and told how it differs from your usual attacks.
                5. Your clinician asked whether anything about your own history should be added.

                ## Notes
                An aura that is new, lasts much longer than usual or comes with weakness on one side should be checked urgently, even if you have had auras before. Use your own health service's wording on the card; it organises their advice and does not replace it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A warning signs card written from your health service's guidance is by the bed, in your bag and on your phone, and the household has seen it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's list of headache symptoms that need urgent care"
                - "Write the signs and the numbers to call on one card"
                - "Put copies by the bed, in your bag and on your phone"
                - "Show the card to everyone you live with"
                - "Check the card still matches your health service's advice @recurring(yearly)"
            - name: Daily headache diary
              description: |-
                ## Purpose
                Memory is a poor witness for headaches: people routinely underestimate how many days they lose and how often they reach for painkillers. A short daily entry, filled in on good days as well as bad, becomes the evidence every later decision rests on, from naming the headache type to judging whether a preventive is working.

                ## Milestones
                1. A diary with columns for date, headache yes or no, severity out of three, duration, medicines taken and notes.
                2. An entry made every day, headache-free days included, for the first four weeks.
                3. Period days, sleep and anything unusual noted where relevant.
                4. The diary in a form you can show a clinician, on a phone or on paper.

                ## Notes
                Start from the **Metrics log** template. Many headache charities publish a free paper diary or recommend an app; use whichever you will actually fill in, and keep it to under a minute a day.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty-eight consecutive days of diary entries, headache-free days included, with medicines recorded for every headache day."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Create a headache diary from the metrics log template"
                - "Add columns for severity, duration, medicines taken and notes"
                - "Set a phone reminder for the same time each evening"
                - "Fill in today's diary line, even if there was no headache @recurring(daily)"
            - name: Headache history on one page
              description: |-
                ## Purpose
                First appointments for headache are short, and the clinician's most useful tool is a clear story: when the headaches began, what they feel like, how long they last, what comes before them and what you have already tried. Writing that history once, on a single page, saves ten minutes of recall in the room and stops the important details being lost.

                ## Milestones
                1. When the headaches started and how the pattern has changed written in a few lines.
                2. A typical attack described: where the pain sits, what it feels like, how long it lasts and what comes with it.
                3. Every treatment tried so far listed with what happened.
                4. Family history of migraine or other headaches noted.
                5. The page saved where you can hand it over or read from it at any appointment.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page headache history covering onset, a typical attack, treatments tried and family history, ready to hand to a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down when your headaches started and what has changed since"
                - "Describe a typical attack from first sign to full recovery"
                - "List every headache treatment you have tried and how it went"
                - "Ask close relatives whether anyone in the family has migraines"
                - "Ask the agent to tidy your notes into a single readable page"
            - name: Naming your headache type with your doctor
              description: |-
                ## Purpose
                Migraine, tension-type headache, cluster headache and headache caused by overusing painkillers each have different treatments, yet many people treat themselves for years without a diagnosis. An appointment booked for headaches alone, with your diary and history in hand, is the step that turns guesswork into a plan.

                ## Milestones
                1. An appointment booked for headaches alone, not added to the end of another visit.
                2. At least four weeks of diary and the one-page history brought along.
                3. The diagnosis written down in your doctor's own words.
                4. Any tests or referrals recorded with who is arranging them.
                5. The next step agreed, with a date for review.

                ## Notes
                Most headache diagnoses are made from the history rather than from scans. If a scan is not offered, ask what would change that decision instead of assuming something has been missed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A diagnosis of your headache type recorded in your doctor's words, with the agreed next step and review date written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book an appointment with your doctor about headaches only"
                - "Pack four weeks of diary and your one-page history for the visit"
                - "Write down the diagnosis exactly as your doctor names it"
                - "Record any test or referral and who is arranging it"
            - name: Painkiller day count for the last three months
              description: |-
                ## Purpose
                Using acute headache medicines on too many days a month can itself make headaches more frequent, a pattern called medication overuse headache, and it usually builds quietly. Counting the days you took anything for a headache over the last three months, from receipts, repeat prescriptions and memory, shows your clinician whether this needs tackling before anything else is tried.

                ## Milestones
                1. Every medicine you take for headaches listed, over-the-counter and combination products included.
                2. The number of days each was used in each of the last three months estimated.
                3. Your clinician told the totals and asked what monthly limit applies to your medicines.
                4. That limit written at the top of your diary.

                ## Notes
                Combination products bought off the shelf often contain codeine or caffeine, so read the ingredients, not just the brand name. If you use them on most days, do not cut down suddenly on your own; ask for a plan first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-month count of acute medicine days, discussed with your clinician, with the monthly limit for your medicines written in your diary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every tablet, powder and spray you use for headaches"
                - "Read the ingredients on each pack and note any codeine or caffeine"
                - "Estimate the days each was used in each of the last three months"
                - "Ask your clinician what monthly limit applies to your medicines"
            - name: Written migraine attack plan
              description: |-
                ## Purpose
                How an attack ends depends heavily on what you do in the first hour, and pain makes clear thinking hard. A plan agreed with your clinician and written in plain steps (what to take at the first sign, when a second dose is allowed, what to add for nausea and when to seek help) lets you act early and the same way every time.

                ## Milestones
                1. Your acute medicines and how to take them confirmed with your clinician or pharmacist.
                2. The plan written as numbered steps from first sign to recovery.
                3. The point at which to call a doctor or seek urgent care written in.
                4. Copies on your phone, in your migraine kit and with one person at home.
                5. The plan used for three attacks and adjusted at the next appointment.

                ## Notes
                Every dose and timing in the plan must come from your prescriber. Show them the written version so they can confirm it says what they meant.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A step-by-step attack plan, checked by the prescriber, is on your phone and in your kit and has been used for at least three attacks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your prescriber to confirm how and when to take each acute medicine"
                - "Write the plan as numbered steps from first sign to recovery"
                - "Add when to call a doctor and when to seek urgent care"
                - "Save the plan on your phone and give a copy to one person at home"
                - "Bring the plan to your next appointment after three attacks"
            - name: Migraine kit for bag, desk and car
              description: |-
                ## Purpose
                Attacks that start at work, on the school run or on a train are often worse because the medicine is at home. A small kit in each place you spend long hours, holding your acute medicines, any anti-sickness option your clinician approved, water, a snack, an eye mask and a copy of your plan, keeps the first step of the plan within reach.

                ## Milestones
                1. A kit list agreed against the steps of your attack plan.
                2. Kits made up for your bag and at least one other place you spend long hours.
                3. The earliest medicine expiry date written on a label inside each kit.
                4. Kits restocked within a week of being used.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two kits matching your attack plan are packed, labelled with expiry dates and restocked after each use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the kit list from the steps in your attack plan"
                - "Pack a kit for your bag and one for work or the car"
                - "Label each kit with the earliest medicine expiry date"
                - "Check both kits are complete and in date @recurring(monthly:24)"
            - name: Headache impact score baseline
              description: |-
                ## Purpose
                Clinicians decide about preventive treatment partly on how much headaches disrupt work, study and family life, not only on how often they happen. A validated disability questionnaire such as MIDAS or HIT-6 gives a score that can be compared over time and tells a busy clinician in seconds how serious the problem is.

                ## Milestones
                1. A validated headache impact questionnaire completed honestly for the last three months.
                2. The score and date written in your diary.
                3. Days missed from work, study or family plans in the same period counted separately.
                4. The score shared at your next appointment.
                5. The questionnaire repeated each quarter so change is visible.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated headache impact score recorded, shared with your clinician and repeated at least once three months later."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Find a free version of a validated headache impact questionnaire"
                - "Complete it for the last three months and write the score in your diary"
                - "Count the days missed from work, study or plans separately"
                - "Repeat the questionnaire and compare the scores @recurring(quarterly)"
            - name: What helps when I have a migraine
              description: |-
                ## Purpose
                People who live or work with you usually want to help but do not know whether to bring tea, turn off the lights or leave you alone, and an attack is the worst moment to explain. A short note written while you are well, covering what an attack looks like, what helps and what to do if it seems different, saves everyone the guessing.

                ## Milestones
                1. A one-page note describing what your attacks look like from the outside.
                2. The three things that help most, and the things that make it worse, listed.
                3. Clear instructions for when someone should call for help.
                4. The note shared with your household and one trusted colleague.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page note on what helps during an attack has been shared with your household and at least one colleague."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List what an attack looks like to someone watching"
                - "Write the three things that help most and what makes it worse"
                - "Add when someone should call for help on your behalf"
                - "Share the note with your household and one trusted colleague"
            - name: Dark recovery room at home
              description: |-
                ## Purpose
                Light, noise and smells make most migraine attacks worse, and lying down somewhere truly dark and quiet shortens them for many people. One room that can be made dark in a minute, with earplugs, a cool pack, water and a sick bowl close by, means you can retreat straight away instead of hunting for things with your eyes shut.

                ## Milestones
                1. One room chosen that can be made dark and quiet.
                2. Blackout blinds, heavy curtains or an eye mask in place.
                3. A bedside box with earplugs, a cool pack, water and a sick bowl.
                4. A household agreement on keeping noise down when the door is shut.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One room can be made fully dark within a minute and has a bedside box with earplugs, a cool pack, water and a sick bowl."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the room that is easiest to make dark and quiet"
                - "Fit blackout blinds or heavy curtains in that room"
                - "Fill a bedside box with earplugs, a cool pack and a sick bowl"
                - "Agree a quiet-door signal with the people you live with"
            - name: Weekly headache diary review
              description: |-
                ## Purpose
                Ten minutes each week to count headache days, note medicine days and spot anything unusual keeps the diary honest. A diary that is filled in but never read becomes a chore with no payoff, while a weekly look catches a rising pattern months before the next appointment would.

                ## Milestones
                1. A fixed weekly slot in the calendar for the review.
                2. Headache days and medicine days for the week counted.
                3. One line written on anything that stood out.
                4. Twelve consecutive weekly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews, each recording headache days, medicine days and one observation."
                cadence: rolling
              tasks:
                - "Pick a fixed ten-minute slot for the weekly review"
                - "Count the week's headache days and medicine days @recurring(weekly:sun)"
                - "Write one line on anything that stood out this week"
            - name: Monthly headache and medicine day tally
              description: |-
                ## Purpose
                Two numbers matter more than any others in migraine care: headache days per month and days on acute medicine. Tallying both on a fixed date, and checking medicine days against the limit your clinician gave you, is the simplest guard against medication overuse and the clearest measure of whether treatment is working.

                ## Milestones
                1. A monthly table with headache days, migraine days and acute medicine days.
                2. The medicine day limit from your clinician written above the table.
                3. A rule written down for who to contact if the limit is passed two months running.
                4. Six months of totals in the table.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly tallies of headache days and medicine days, each checked against the limit your clinician set."
                cadence: rolling
              tasks:
                - "Set up a monthly table for headache, migraine and medicine days"
                - "Write the medicine day limit your clinician gave you above the table"
                - "Add up last month's headache and medicine days @recurring(monthly:3)"
                - "Contact your clinician if medicine days pass the limit twice in a row"
            - name: Steady sleep and wake times
              description: |-
                ## Purpose
                Both short nights and long lie-ins are well-known migraine triggers, which is one reason weekend attacks are so common. Keeping your wake time within about an hour every day of the week is among the lifestyle changes headache specialists suggest most often, and a weekly check shows whether it is holding.

                ## Milestones
                1. A target wake time and bedtime chosen for every day of the week.
                2. Actual times noted for four weeks.
                3. Weekend wake times within an hour of weekday ones for a month.
                4. Any link between late or short nights and attacks noted from the diary.

                ## Notes
                Start from the **Sleep review** template. If you snore heavily, stop breathing in your sleep or wake with a headache most mornings, tell your doctor, as a sleep problem may need its own investigation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks with weekend wake times within one hour of weekday ones, recorded in a weekly sleep review."
                cadence: rolling
              tasks:
                - "Choose a wake time you can keep seven days a week"
                - "Set the same alarm time for weekends"
                - "Fill in the weekly sleep review against your target times @recurring(weekly:mon)"
            - name: Regular meals and water through the day
              description: |-
                ## Purpose
                Skipped meals and dehydration are among the triggers people report most, and they are easy to fix once noticed. Three regular meals and a water routine built into busy days, with a simple daily tick, remove two common triggers and make the rest of the diary easier to read.

                ## Milestones
                1. Fixed times for breakfast, lunch and an evening meal that fit your working day.
                2. A water bottle kept at your desk or in your bag.
                3. Meals and water ticked off daily for a month.
                4. Days with missed meals compared with attack days in the diary.

                ## Notes
                Start from the **Habit tracker** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily ticks showing three meals and your planned water on at least 25 days."
                cadence: rolling
              tasks:
                - "Write down meal times that fit your usual working day"
                - "Keep a filled water bottle at your desk or in your bag"
                - "Tick off three meals and your water for the day @recurring(daily)"
            - name: Caffeine kept steady
              description: |-
                ## Purpose
                Caffeine can help an attack in small amounts, but a lot of it, or a sudden drop at weekends, can bring headaches on. Recording how much you have and keeping the amount steady from day to day, rather than cutting out coffee overnight, shows what part caffeine plays for you.

                ## Milestones
                1. Your usual daily caffeine from coffee, tea, cola, energy drinks and tablets added up.
                2. A steady daily amount chosen and kept at weekends too.
                3. Any reduction made gradually over several weeks.
                4. Four weeks of caffeine totals compared with the diary.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of daily caffeine totals recorded at a steady level and compared with headache days in the diary."
                cadence: rolling
              tasks:
                - "Add up the caffeine from every drink and tablet on a normal day"
                - "Choose a steady daily amount and keep it the same at weekends"
                - "Compare the week's caffeine with headache days @recurring(weekly:thu)"
            - name: Migraine medicine supply check
              description: |-
                ## Purpose
                Running out of an acute or preventive medicine is a common cause of a bad week, especially when repeat prescriptions take several days and some treatments need a specialist to renew. A monthly count of what is left, with reorders placed in good time, keeps the supply continuous.

                ## Milestones
                1. Every migraine medicine listed with how it is supplied and how long a reorder takes.
                2. A monthly check date in the calendar.
                3. Reorders placed with at least a week's supply in hand.
                4. Six months with no gap in any migraine medicine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months without running out of any acute or preventive migraine medicine."
                cadence: rolling
              tasks:
                - "List each migraine medicine with how it is reordered and how long it takes"
                - "Count what is left and reorder anything under two weeks' supply @recurring(monthly:18)"
                - "Ask the pharmacy whether any medicine can go on automatic repeat"
            - name: Quarterly preventive treatment check
              description: |-
                ## Purpose
                Preventive treatments are judged over months, not days, and doses or choices often need adjusting along the way. A short check every three months, comparing headache days with the previous quarter and listing side effects, gives you a clear answer to bring to your clinician about whether to continue, adjust or stop.

                ## Milestones
                1. The quarter's headache and medicine days compared with the quarter before.
                2. Side effects noticed in the quarter listed.
                3. A one-line verdict: better, same or worse.
                4. The verdict shared with your clinician whenever it points to a change.

                ## Notes
                Do not stop a preventive abruptly because one quarter was disappointing. Some need tapering, and your clinician may want to adjust the dose first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks in a year, each with a headache day comparison, a side effect list and a one-line verdict."
                cadence: rolling
              tasks:
                - "Compare this quarter's headache days with the last quarter @recurring(quarterly)"
                - "List any side effects you noticed this quarter"
                - "Send the verdict to your clinician if it points to a change"
            - name: Annual migraine review
              description: |-
                ## Purpose
                Migraine shifts over a lifetime with hormones, work, sleep and age, and treatment that suited you three years ago may no longer be the best fit. A yearly appointment prepared with twelve months of tallies, your impact score and a short list of questions keeps the plan current rather than repeated out of habit.

                ## Milestones
                1. The review booked at the same time each year.
                2. Twelve monthly tallies, the latest impact score and your medicine list brought along.
                3. Three questions written in advance.
                4. Every change agreed written down and acted on within a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Two consecutive annual reviews held, each with a year of tallies brought and the agreed changes written down."
                cadence: cyclic
              tasks:
                - "Book your yearly migraine review with your doctor @recurring(yearly)"
                - "Gather twelve monthly tallies, your impact score and medicine list"
                - "Write three questions to ask at the review"
                - "Record every change agreed before you leave the room"
            - name: Debrief after an attack that broke the plan
              description: |-
                ## Purpose
                An attack that broke through the plan, lasted more than a day or sent you to urgent care holds lessons that fade within a week. A short debrief written while it is fresh, covering what happened, when you treated, what worked and what to change, turns the worst days into improvements.

                ## Milestones
                1. A debrief format of five questions at the back of the diary.
                2. A debrief written within two days of any attack that broke the plan.
                3. Patterns across three debriefs noted.
                4. One change to the attack plan proposed to your clinician from the debriefs.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Debriefs written for three bad attacks, with one resulting change to the attack plan discussed with your clinician."
                cadence: rolling
              tasks:
                - "Write five debrief questions at the back of your diary"
                - "Debrief any attack that broke the plan within two days"
                - "Look for patterns once three debriefs are written"
                - "Propose one change to your attack plan at your next appointment"
            - name: Twice-weekly aerobic exercise for migraine
              description: |-
                ## Purpose
                Regular moderate aerobic exercise is linked with fewer migraine days for many people, yet a sudden hard session can also set off an attack. Building up gently to a steady routine, with a warm-up, food and water beforehand, gives the benefit without the backlash.

                ## Milestones
                1. Your clinician asked whether any kind of exercise should be avoided.
                2. An activity chosen that you can do twice a week, such as brisk walking, cycling or swimming.
                3. Sessions built up slowly over eight weeks, with a warm-up every time.
                4. Any attacks after exercise noted, with what came before them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of twice-weekly sessions recorded, with any exercise-linked attacks noted alongside what preceded them."
                cadence: rolling
              tasks:
                - "Ask your clinician whether any exercise should be avoided"
                - "Choose an activity you can do twice a week"
                - "Do a warmed-up session of your chosen activity @recurring(weekly:tue,sat)"
                - "Note any attack within a day of exercise and what came before it"
            - name: The four phases of a migraine attack
              description: |-
                ## Purpose
                A migraine is more than the headache: many people have a warning phase hours before, some have an aura, and most feel drained for a day afterwards. Understanding the phases explains symptoms that seemed unrelated and shows where each step of your attack plan fits.

                ## Milestones
                1. The prodrome, aura, headache and postdrome phases read about from a headache charity or health service.
                2. Your own symptoms in each phase written down.
                3. The phases you do and do not experience noted.
                4. Each step of your attack plan marked with the phase it belongs to.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of your own symptoms in each of the four phases, linked to the steps of your attack plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a headache charity's explanation of the four migraine phases"
                - "Write down your own symptoms for each phase"
                - "Mark which phase each step of your attack plan belongs to"
            - name: Spotting your early warning signs
              description: |-
                ## Purpose
                Yawning, neck stiffness, food cravings, irritability and needing the toilet more often can all appear hours before the pain, and recognising them buys time to prepare. Two months of noting how you felt the day before each attack usually reveals your personal set of early signs.

                ## Milestones
                1. A column for day-before feelings added to the diary.
                2. Early signs recorded before at least six attacks.
                3. Your two or three most reliable warning signs named.
                4. What you will do when they appear, such as cancelling a late night, written into your attack plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your most reliable early warning signs identified from at least six attacks and written into your attack plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a column for how you felt the day before each attack"
                - "Note early signs before each of the next six attacks"
                - "Name your two or three most reliable warning signs"
                - "Add what you will do when they appear to your attack plan"
            - name: Timing acute treatment early
              description: |-
                ## Purpose
                Many acute migraine medicines work best taken while the headache is still mild, and less well once pain is severe or nausea has set in. Learning when your own medicines should be taken, and practising acting on the first twinge rather than waiting to see, is often the biggest single improvement in how attacks end.

                ## Milestones
                1. Your prescriber's advice on the best moment to take each acute medicine written down.
                2. Time from first pain to treatment recorded in the diary for six attacks.
                3. Outcomes compared between early and late treatment.
                4. Any reluctance to treat early, such as fear of running out, discussed with your clinician.

                ## Notes
                Treating early does not mean treating more often. Your monthly medicine day limit still applies, which is why early treatment and the monthly tally go together.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six attacks recorded with time to treatment, and a written comparison of how early and late treated attacks ended."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your prescriber when in an attack each medicine works best"
                - "Record minutes from first pain to treatment for the next six attacks"
                - "Compare how early and late treated attacks ended"
            - name: Medication overuse headache explained
              description: |-
                ## Purpose
                Few people are told that the tablets they rely on can make headaches more frequent when used on too many days, and many find out only after years of near-daily pain. Understanding how it develops, how it is recognised and how it is usually treated makes the monthly tally make sense and the conversation with your clinician much easier.

                ## Milestones
                1. A reputable explanation of medication overuse headache read.
                2. Which of your own medicines carry the risk noted.
                3. Your questions written down and asked.
                4. A plain-words summary of how it applies to you saved in your diary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short plain-words summary of medication overuse headache and how it applies to your medicines, checked with your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a headache charity's guide to medication overuse headache"
                - "Note which of your medicines are mentioned in it"
                - "Write your questions and ask them at your next appointment"
                - "Save a plain-words summary at the front of your diary"
            - name: Triggers versus early warning symptoms
              description: |-
                ## Purpose
                Some things blamed as triggers are really early symptoms: craving chocolate or feeling dazzled by light can be the attack beginning, not its cause. Learning the difference stops you cutting out foods and activities for nothing and focuses attention on the triggers that are real for you.

                ## Milestones
                1. The difference between a trigger and a premonitory symptom understood.
                2. Your current list of suspected triggers written down.
                3. Each one labelled as probable trigger, possible early symptom or unknown.
                4. Only the probable triggers carried forward for testing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your suspected triggers each labelled as probable trigger, early symptom or unknown, with a shortlist chosen for testing."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down every trigger you currently avoid"
                - "Read how premonitory symptoms can be mistaken for triggers"
                - "Label each one as probable trigger, early symptom or unknown"
                - "Choose the probable triggers worth testing properly"
            - name: Relaxation training for migraine prevention
              description: |-
                ## Purpose
                Relaxation training, biofeedback and similar behavioural approaches have good evidence for reducing migraine frequency in some people, and they carry no side effects. Learning one method properly and practising it three times a week for two months is a fair test of whether it earns a place in your routine.

                ## Milestones
                1. A method chosen, such as progressive muscle relaxation or guided breathing, from a headache service or clinician.
                2. Sessions held at least three times a week for eight weeks.
                3. Headache days before and during the eight weeks compared.
                4. A decision recorded to keep, change or drop the method.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Eight weeks of practice logged at least three times a week, with headache days compared and a keep or drop decision recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a relaxation method recommended by a headache service"
                - "Practise a fifteen-minute relaxation session @recurring(weekly:mon,wed,fri)"
                - "Compare headache days before and during the eight weeks"
                - "Decide whether to keep the method and note why"
            - name: Knowing your migraine medicines
              description: |-
                ## Purpose
                Acute and preventive migraine medicines come from several different groups, each with its own side effects, interactions and situations where it should not be used. A short note on each medicine you take, checked with a pharmacist, helps you spot problems early and answer confidently when another clinician prescribes something new.

                ## Milestones
                1. Each migraine medicine listed and marked as acute or preventive.
                2. The medicine group and how it works written in a sentence for each.
                3. Common side effects and important interactions noted from the leaflet.
                4. The notes checked in a pharmacist medicines review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note for each migraine medicine covering its group, side effects and interactions, checked by a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each migraine medicine and mark it acute or preventive"
                - "Read each patient leaflet and note side effects and interactions"
                - "Ask your pharmacist for a short review of your notes"
            - name: Living with the fear of the next attack
              description: |-
                ## Purpose
                Frequent migraine can leave people anxious about the next attack, cancelling plans just in case and losing more of life than the attacks themselves take. Psychological approaches such as cognitive behavioural therapy for headache are offered by some services, and even the basics help you plan for attacks without being ruled by them.

                ## Milestones
                1. The plans and activities you have dropped because of migraine listed.
                2. Your clinician asked about psychological support for headache available locally.
                3. One reputable self-help course or book on coping with chronic headache completed.
                4. Two dropped activities brought back with a backup plan in place.

                ## Notes
                Low mood and anxiety are common alongside migraine. If either is affecting daily life, raise it with your doctor as a health problem in its own right.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two previously avoided activities resumed with a backup plan, and psychological support options discussed with your clinician."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the plans you have dropped because of migraine"
                - "Ask your clinician about psychological support for headache"
                - "Work through one reputable course on coping with chronic headache"
                - "Bring back one dropped activity with a written backup plan"
            - name: Two-month test of one suspected trigger
              description: |-
                ## Purpose
                Avoiding a long list of possible triggers makes life smaller and rarely proves anything. Testing one probable trigger at a time, by avoiding it or keeping it constant for two months while the diary runs, gives a much clearer answer about whether it matters for you.

                ## Milestones
                1. One probable trigger chosen from your shortlist.
                2. A clear rule written for how it will be avoided or kept constant.
                3. The rule followed for two months with the diary running.
                4. Headache days compared with the two months before.
                5. A verdict written: keep avoiding, stop worrying or retest.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One suspected trigger tested for two months with diary data, ending in a written verdict on whether to keep avoiding it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick one probable trigger from your shortlist to test"
                - "Write the rule you will follow for the next two months"
                - "Keep the diary running every day of the test"
                - "Compare headache days with the two months before and write a verdict"
            - name: Deciding on preventive treatment
              description: |-
                ## Purpose
                Preventive treatment is usually discussed when attacks are frequent, long, disabling or poorly controlled by acute medicines, and the options range from tablets first used for other conditions to newer migraine-specific medicines and non-drug approaches. Going into the conversation with your monthly tallies, impact score and priorities, such as pregnancy plans or side effects you most want to avoid, lets you choose together rather than accept the first suggestion.

                ## Milestones
                1. Three months of tallies and your impact score ready to show.
                2. Your priorities and side effect concerns written down.
                3. The options your clinician suggests listed with their main pros and cons.
                4. A first preventive chosen, with a start date and the date of its first review.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A preventive treatment decision made with your clinician, with the choice, its start date and first review date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Bring three months of tallies and your impact score to the appointment"
                - "Write down the side effects and situations that matter most to you"
                - "List each option your clinician suggests with its pros and cons"
                - "Record the choice, start date and first review date"
            - name: Fair three-month trial of a preventive
              description: |-
                ## Purpose
                Preventive medicines often take weeks to work and their side effects are usually worst at the start, so many are abandoned before they have had a chance. Running each trial for the length your clinician advises, with the diary kept throughout, gives a fair verdict and stops you cycling through options too quickly.

                ## Milestones
                1. The trial length, target and any dose steps agreed with your clinician.
                2. Headache days for the month before the start written down as a baseline.
                3. Diary and side effects recorded throughout the trial.
                4. Headache days at the end compared with the baseline.
                5. A verdict agreed with your clinician: continue, adjust or switch.

                ## Notes
                A drop of about half in headache days is a common benchmark, but agree your own target with your clinician before you start so the verdict is not decided by mood on the day.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A preventive trial run for the agreed length with diary data throughout, ending in a recorded verdict agreed with your clinician."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree the trial length and target with your clinician before starting"
                - "Write down last month's headache days as the baseline"
                - "Note side effects in the diary through the first four weeks"
                - "Book the end-of-trial review before the trial starts"
            - name: Supported withdrawal from overused painkillers
              description: |-
                ## Purpose
                When acute medicines have been used on too many days for months, cutting them down is often the step that lets preventive treatment work, but it can mean a hard few weeks. Doing it with a written plan from your clinician, a support person and a cleared calendar makes success far more likely.

                ## Milestones
                1. Medication overuse discussed with your clinician and a withdrawal plan written down.
                2. A start date chosen in a quieter fortnight, with work and family told.
                3. Daily diary entries kept through the withdrawal period.
                4. A follow-up appointment attended to review headache days afterwards.

                ## Notes
                Some medicines must be reduced gradually rather than stopped outright. Follow your clinician's plan, and ask in advance what to do if headaches become severe during withdrawal.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A clinician-supervised withdrawal completed as planned, with a follow-up review of headache days attended."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your clinician whether medication overuse applies to you"
                - "Get the withdrawal plan in writing, including what to do on bad days"
                - "Choose a quieter fortnight to start and tell work and family"
                - "Book the follow-up appointment before you begin"
            - name: When your usual acute treatment stops working
              description: |-
                ## Purpose
                If attacks no longer ease within a couple of hours, or return the next day, the acute treatment may need changing rather than more of the same. Several options exist, including other medicines in the same group, different forms such as nasal sprays or injections, and newer migraine-specific medicines, and your diary shows the clinician exactly what is failing.

                ## Milestones
                1. Six attacks recorded with time to relief and whether the headache came back.
                2. The problem described in one sentence, such as slow relief, recurrence or side effects.
                3. Alternative acute options discussed with your clinician.
                4. A new option agreed and tested over at least three attacks.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A diary-backed request for a change in acute treatment made, with a new option agreed and tested over three attacks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Record time to relief and recurrence for the next six attacks"
                - "Write one sentence on what is going wrong with your acute treatment"
                - "Ask your clinician about other acute options and forms"
                - "Test the new option on three attacks and record the results"
            - name: Choosing a migraine neuromodulation device
              description: |-
                ## Purpose
                Several non-drug devices that stimulate nerves through the skin are approved in some countries for treating or preventing migraine, and they can suit people who cannot take certain medicines. They are often expensive and the evidence varies by device, so a structured comparison with your clinician's input avoids an impulse buy.

                ## Milestones
                1. Your clinician asked whether a device is worth considering for you.
                2. Two or three devices compared on approval status, evidence, cost and returns policy.
                3. Any trial period or funding route checked.
                4. A decision recorded to try one, wait or rule devices out.

                ## Notes
                Start from the **Purchase decision** template. Be wary of devices sold with health claims that no regulator has approved.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether to try a neuromodulation device, based on a comparison of at least two devices and your clinician's view."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your clinician whether a device could suit you"
                - "Compare two or three devices on approval, evidence, cost and returns"
                - "Check whether a trial period or funding is available"
                - "Record your decision and the reason for it"
            - name: Light and glare audit at home and work
              description: |-
                ## Purpose
                Bright, flickering or glaring light is one of the commonest attack triggers and makes attacks worse once they start. A walk-through of the places you spend most time, noting harsh overhead lights, screen glare and flicker, usually turns up a few cheap changes worth making.

                ## Milestones
                1. The rooms where you spend most hours listed.
                2. Each one checked for glare, flicker, harsh overheads and window brightness.
                3. Three changes made, such as warmer bulbs, a desk lamp or blinds.
                4. Attack days before and after the changes compared over two months.

                ## Notes
                Tinted lenses are sometimes suggested for light sensitivity; ask an optometrist rather than buying online, and see one anyway if headaches come on with reading or screen work.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three lighting changes made in the places you spend most time, with two months of attack days compared before and after."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the rooms where you spend most of your hours"
                - "Check each one for glare, flicker and harsh overhead light"
                - "Make three lighting changes, starting with the worst room"
                - "Compare attack days for two months before and after"
            - name: Supplements question for your clinician
              description: |-
                ## Purpose
                Some supplements, such as magnesium, riboflavin and coenzyme Q10, appear in headache guidelines, and shops are full of products with bolder claims. Taking the question to your clinician or pharmacist, with your other medicines and any pregnancy plans in mind, gives a clear yes or no instead of a cupboard full of half-used bottles.

                ## Milestones
                1. Any supplement you take or are considering listed.
                2. Your clinician or pharmacist asked which, if any, suit you and how to judge them.
                3. A trial length and a way to measure the result agreed for anything you start.
                4. A keep or stop decision recorded at the end of the trial.

                ## Notes
                Supplements can interact with prescription medicines and some are unsuitable in pregnancy. Do not start one without checking first.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for each supplement considered, made with a clinician or pharmacist, with any trial reviewed at its end."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every supplement you take or are thinking about"
                - "Ask your pharmacist which are suitable alongside your other medicines"
                - "Agree a trial length before starting anything"
                - "Record a keep or stop decision when the trial ends"
            - name: Contraception and migraine with aura check
              description: |-
                ## Purpose
                Migraine with aura can affect which hormonal contraception is considered safe, because some combined methods carry a higher stroke risk for people who have aura. If you use or are considering hormonal contraception, telling your prescriber exactly what your aura is like makes sure the method you rely on is the right one.

                ## Milestones
                1. Your aura described in writing: what you see or feel, how long it lasts and how often it comes.
                2. Your current or planned contraception listed.
                3. Your prescriber told about the aura and asked whether your method is suitable.
                4. Their answer, and any change, recorded.

                ## Notes
                Do not stop contraception suddenly on your own. Get advice first so you are not left unprotected.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your prescriber has been told about your aura and has confirmed or changed your contraception, with the answer recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a description of your aura and how long it lasts"
                - "Note the contraception you use or are considering"
                - "Book a contraception review and mention your aura first"
                - "Record what your prescriber advised"
            - name: Headache clinic or neurology appointment
              description: |-
                ## Purpose
                Specialist headache appointments can take months to come round and may be the only one for a year, so walking in unprepared wastes a rare chance. A summary of the last three months, your history, a list of everything tried and your top three questions make the time count.

                ## Milestones
                1. The appointment date, location and any forms to complete noted.
                2. A summary of three months of tallies and your impact score prepared.
                3. Every acute and preventive treatment tried listed with dates and results.
                4. Three questions written in priority order.
                5. The outcome and next steps written up within a day.

                ## Notes
                Start from the **Meeting notes** template. Bring someone with you if attacks affect your memory or concentration.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A specialist appointment attended with a prepared summary and questions, and the outcome written up within a day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the appointment date and any forms to send back"
                - "Prepare a summary of three months of tallies and your impact score"
                - "List every treatment tried with dates and results"
                - "Write three questions in priority order"
                - "Write up the outcome within a day using the meeting notes template"
            - name: Travelling without losing the trip to migraine
              description: |-
                ## Purpose
                Travel stacks up classic triggers: early starts, missed meals, dehydration, time zone changes and bright unfamiliar places. A migraine-specific packing and timing plan, with medicines in hand luggage and the first day kept light, protects the trip you have paid for.

                ## Milestones
                1. Enough acute and preventive medicine for the trip, plus spare, packed in hand luggage.
                2. A letter or prescription copy carried for any medicine that may be questioned at a border.
                3. Meals, water and sleep planned around the travel day.
                4. The first day of the trip kept light.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip completed with medicines in hand luggage, a prescription copy carried and the first day planned light."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count medicines for the trip and pack extra in hand luggage"
                - "Check whether any medicine needs a letter at your destination"
                - "Plan meals and water around the travel day"
                - "Keep the first day of the trip free of big plans"
            - name: Plan for a day that cannot be missed
              description: |-
                ## Purpose
                A wedding, an exam, a big presentation or a long-awaited holiday is exactly when a migraine feels most likely, partly because stress and its let-down are both triggers. Planning the week around the day, and asking your clinician in advance whether any short-term approach is appropriate, gives you the best chance of being there in full.

                ## Milestones
                1. The date written in the diary with the week before and after marked.
                2. Sleep, meals and caffeine kept steady through that week.
                3. Your clinician asked in advance whether any short-term prevention suits you.
                4. A backup plan written in case an attack comes anyway.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The important day reached with a written week plan, a backup plan and any clinician advice recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the day and the week either side in your diary"
                - "Ask your clinician whether any short-term prevention suits you"
                - "Plan steady sleep, meals and caffeine for that week"
                - "Write a backup plan in case an attack comes anyway"
            - name: Workplace adjustments for migraine
              description: |-
                ## Purpose
                In many countries frequent migraine can count as a disability or long-term condition under employment law, and reasonable adjustments such as screen filters, flexible start times or a quiet room can keep you working. A prepared conversation with your manager or occupational health turns a list of sick days into a plan.

                ## Milestones
                1. The adjustments that would help most listed, each with the reason.
                2. A short summary of the pattern prepared, sharing only what you choose.
                3. A meeting held with your manager or occupational health.
                4. Agreed adjustments confirmed in writing.
                5. A review date set to check they are working.

                ## Notes
                Check your employer's policy and your country's rules on long-term conditions before the meeting. A union representative or employee helpline can advise.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Adjustments agreed with your employer and confirmed in writing, with a review date set."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the three adjustments that would help you most"
                - "Prepare a short summary of how migraine affects your work"
                - "Book a meeting with your manager or occupational health"
                - "Ask for the agreed adjustments to be confirmed in writing"
                - "Review whether the adjustments are still working @recurring(yearly)"
            - name: Holiday season and let-down migraine plan
              description: |-
                ## Purpose
                Plenty of people get attacks at the start of a holiday or at weekends, when stress drops and routines slip, and the festive season adds late nights, alcohol and rich food. A plan for the season, written before it starts, keeps the routines that protect you without ruling out the fun.

                ## Milestones
                1. Last year's diary checked for attacks during holidays and weekends.
                2. Two or three routines chosen to keep through the season, such as wake time and meals.
                3. A personal approach to alcohol decided from what the diary shows.
                4. Attacks during the season compared with the year before.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for the holiday season, with attacks counted afterwards and compared with the previous year's."
                cadence: cyclic
              tasks:
                - "Check last year's diary for attacks during holidays"
                - "Choose the routines you will keep through the season"
                - "Decide your approach to alcohol from what the diary shows"
                - "Write the plan before the holiday season starts @recurring(yearly)"
            - name: Migraine and your menstrual cycle
              description: |-
                ## Purpose
                Attacks linked to periods are common, often longer and harder to treat, and recognising the link opens up cycle-specific options your clinician can discuss. Recording period days alongside headaches for at least three cycles is usually what it takes to confirm the pattern.

                ## Milestones
                1. Period start and end days marked in the headache diary.
                2. Three full cycles recorded.
                3. Attacks in the days around a period counted against attacks at other times.
                4. The pattern shown to your clinician with a question about cycle-specific options.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three cycles of period days and attacks recorded and shown to a clinician, with their advice written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add a period column to your headache diary"
                - "Mark the first day of each period"
                - "Count attacks around your period against the rest of the month @recurring(monthly:12)"
                - "Show three cycles of data to your clinician"
            - name: Migraine medicines before pregnancy
              description: |-
                ## Purpose
                Several common migraine treatments, including some preventive tablets and newer injectable medicines, are not recommended in pregnancy or need stopping well before trying to conceive. Reviewing every medicine with your prescriber before you start trying, rather than after a positive test, avoids a rushed and worrying change.

                ## Milestones
                1. Every migraine medicine and supplement listed.
                2. A pre-conception review booked with your prescriber.
                3. A plan agreed for each medicine: continue, change or stop, and when.
                4. Acute options considered suitable in pregnancy written into a revised attack plan.

                ## Notes
                If you become pregnant unexpectedly while on a migraine medicine, contact your prescriber promptly rather than stopping on your own.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-conception medicine plan agreed with your prescriber and a revised attack plan written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every migraine medicine and supplement you take"
                - "Book a review with your prescriber before trying to conceive"
                - "Record the plan for each medicine and when it changes"
                - "Rewrite your attack plan with the options agreed for pregnancy"
            - name: School migraine plan for a child or teenager
              description: |-
                ## Purpose
                Migraine is common in children and teenagers, and in younger children attacks may be shorter, bring tummy pain or sickness, and be mistaken for ordinary illness. A short written plan agreed with the school, covering what an attack looks like, the medicine allowed, a quiet place to rest and who to call, keeps your child safe and stops missed lessons piling up.

                ## Milestones
                1. Your child's attacks described in a short note with what helps.
                2. Medicine arrangements agreed with the school nurse or office, following school policy.
                3. A quiet place to rest identified.
                4. Teachers and the school office given a copy.
                5. The plan updated at the start of each school year.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written migraine plan agreed with the school, held by the office and teachers, and updated at the start of each school year."
                cadence: cyclic
              tasks:
                - "Write a short note on what your child's attacks look like"
                - "Ask the school about its policy for medicines in school"
                - "Agree a quiet rest place and who calls you"
                - "Give copies to teachers and the school office"
                - "Update the plan before each school year starts @recurring(yearly)"
            - name: Migraine on shift work
              description: |-
                ## Purpose
                Rotating shifts and night work disrupt the regular sleep and meals that help keep migraine quiet, and the usual advice to keep a fixed wake time does not fit. Planning sleep, meals and caffeine around each rota, and tagging the diary by shift, shows which patterns hit you hardest and gives evidence for asking for a better rota.

                ## Milestones
                1. Shift type added as a column in the diary.
                2. A sleep, meal and caffeine plan written for day, late and night shifts.
                3. Attacks compared across shift types over two months.
                4. The evidence used to discuss rota changes if one shift type is clearly worse.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two months of diary entries tagged by shift type, with a written plan for each shift and any rota request made."
                cadence: rolling
              tasks:
                - "Add a shift type column to your diary"
                - "Write a sleep, meal and caffeine plan for each shift type"
                - "Plan next week's sleep and meals around the rota @recurring(weekly:fri)"
                - "Compare attacks by shift type after two months"
            - name: Childcare backup for attack days
              description: |-
                ## Purpose
                Parents with migraine often push through attacks because nobody else can do the school run or bedtime, which tends to make attacks longer. Arranging backup in advance, with a named person who can step in at short notice and a plan the children understand, means you can follow your attack plan instead of soldiering on.

                ## Milestones
                1. Two people identified who can help at short notice.
                2. A simple message ready to send them when an attack starts.
                3. The children told, in words suited to their age, what happens when you have a migraine.
                4. Quiet activities ready for younger children while you rest.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two named backup helpers agreed, a ready-to-send message saved and a box of quiet activities prepared for the children."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask two people whether they can help at short notice"
                - "Save a ready-to-send message asking for help"
                - "Explain to the children what happens when you have a migraine"
                - "Put together a box of quiet activities for younger children"
            - name: Chronic migraine and specialist-only treatments
              description: |-
                ## Purpose
                When headaches are present on most days of the month, the picture is often called chronic migraine, and specialist treatments such as botulinum toxin injections or migraine-specific antibody medicines may be considered once other preventives have been tried. Access criteria vary by health system, so a well-documented record of headache days and failed treatments is usually what opens the door.

                ## Milestones
                1. The local criteria for specialist migraine treatments found or asked about.
                2. Headache days for the last three months documented from the diary.
                3. Each preventive tried listed with how long it was taken and why it stopped.
                4. A specialist discussion requested with the evidence attached.
                5. A decision recorded on the treatment offered, with how its effect will be judged.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A specialist decision on chronic migraine treatment recorded, supported by three months of diary data and a list of preventives tried."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your doctor what criteria apply for specialist migraine treatments"
                - "Document three months of headache days from your diary"
                - "List each preventive tried, how long you took it and why it stopped"
                - "Request a specialist discussion with the evidence attached"
            - name: Cluster headache bout plan
              description: |-
                ## Purpose
                Cluster headache is a different condition from migraine: very severe one-sided attacks around the eye, often at the same times of day, arriving in bouts that can last weeks. Its treatments differ too, including high-flow oxygen in some health systems, so if this matches your attacks, a specialist diagnosis and a dedicated plan for each bout matter a great deal.

                ## Milestones
                1. Your attacks compared with a published description of cluster headache.
                2. A specialist opinion sought if they match.
                3. A bout plan written with your specialist, including any home oxygen arrangements.
                4. Bout start and end dates recorded so the next one can be anticipated.

                ## Notes
                Usual migraine treatments often do not work for cluster headache. Ask for a plan between bouts rather than waiting for the next one to start.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cluster headache bout plan written with a specialist, with bout dates recorded so the next can be anticipated."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Compare your attacks with a headache charity's description of cluster headache"
                - "Ask your doctor for a specialist opinion if they match"
                - "Write a bout plan with your specialist, including any oxygen supply"
                - "Record the start and end date of every bout"
            - name: Migraine treatment history for new clinicians
              description: |-
                ## Purpose
                Anyone who has lived with migraine for years ends up seeing new doctors, moving area or switching health systems, and each time the first question is what has already been tried. A two-page record of diagnoses, every acute and preventive treatment with dates and outcome, and the current plan saves months of repeating options that failed.

                ## Milestones
                1. Every headache diagnosis listed with its date and who made it.
                2. Every acute and preventive treatment listed with dates, how long it was tried and the outcome.
                3. The current plan and monthly headache days on the first page.
                4. The record updated each year and shared with every new clinician.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page treatment history covering diagnoses and every treatment with dates and outcomes, updated within the last year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every headache diagnosis with its date and who made it"
                - "List every acute and preventive treatment with dates and outcome"
                - "Put the current plan and monthly headache days on the first page"
                - "Update the history after your annual review @recurring(yearly)"
---

# Migraine & Headache Management

This area is for anyone whose migraines or regular headaches cost them working days, family plans or simply the confidence to commit to things. It starts with the foundations (a warning signs card, a daily diary, a clear history, a diagnosis, a painkiller count and a written attack plan), then the routines that keep sleep, meals, caffeine, supplies and reviews steady, the skills that help you treat early and tell triggers from warning signs, the decisions about trigger tests and preventive treatment, the dates worth planning around, the situations that change the picture from pregnancy to shift work, and finally the specialist work of chronic migraine and cluster headache.

What repeats is a one-minute daily diary entry and a daily meal and water tick, a weekly diary review, sleep check and caffeine look, a monthly tally of headache and medicine days alongside a supply check, a quarterly preventive check and impact score, and a yearly migraine review. The Metrics log, Sleep review, Habit tracker, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
