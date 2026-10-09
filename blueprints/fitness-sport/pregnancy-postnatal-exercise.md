---
id: fitness-sport.pregnancy-postnatal-exercise
name: Pregnancy & Postnatal Exercise
description: "Activity through pregnancy agreed with your midwife, daily pelvic floor work, core restoration after birth and a graded, test-based return to running, lifting and sport."
category: personal
version: 1.0.0
tags: [fitness-sport, pregnancy-postnatal-exercise, parent, pregnancy, postnatal, pelvic-floor, core-restoration, return-to-running]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - habit-tracker
    - training-program
    - meeting-notes
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Pregnancy & Postnatal Exercise
          description: "Staying active safely through pregnancy and rebuilding afterwards, with pelvic floor work, core restoration and a gradual return to running or lifting."
          projects:
            - name: Exercise conversation with your midwife or doctor
              description: |-
                ## Purpose
                Most people with an uncomplicated pregnancy are encouraged to stay active, but the right limits depend on your history, your sport and anything found at scans and check-ups. A planned five-minute conversation at an early antenatal appointment, with your current routine written down, turns vague reassurance into specific, recorded answers you can train by.

                ## Milestones
                1. A one-page summary of your current weekly activity, sports and intensity brought to an antenatal appointment.
                2. Your midwife or doctor's view recorded on what to continue, what to change and anything to stop.
                3. Any finding that changes the advice, such as placenta position or blood pressure, noted with who to ask next.
                4. A point agreed for revisiting the answers later in pregnancy.

                ## Notes
                Ask early, even if you feel fine. Advice can change after the mid-pregnancy scan, so treat the answers as current rather than permanent.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated record of what your midwife or doctor said you may continue, adapt or stop is kept at the front of your training log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-page summary of your current weekly training and sports"
                - "Add three specific questions about your sport for the next antenatal appointment"
                - "Record the answers in your training log the same day"
                - "Ask again after the mid-pregnancy scan whether anything has changed"
            - name: Pregnancy exercise stop signs card
              description: |-
                ## Purpose
                Bleeding, fluid leaking, chest pain, dizziness, a painful swollen calf, regular painful tightenings or a baby moving less are signs to stop and get checked, not to push through. Writing your maternity service's own list and its phone number on one card, kept in your gym bag and on your phone, means nobody has to remember it mid-session.

                ## Milestones
                1. Your maternity service's published warning signs for exercise in pregnancy found.
                2. A card written with those signs and the maternity triage or assessment unit number.
                3. Copies in your gym bag, in your phone notes and with your partner.
                4. Your midwife asked whether any extra signs apply to you.

                ## Notes
                Use your own service's wording. Most maternity services ask you to call the same day about reduced baby movements rather than waiting to see.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stop signs card written from your maternity service's guidance is in your gym bag and on your phone, and your partner knows where it is."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your maternity service's warning signs for exercise in pregnancy"
                - "Write the signs and the maternity triage number on one card"
                - "Save a copy of the card in your phone notes"
                - "Show the card to your partner or training buddy"
            - name: Pre-pregnancy activity baseline record
              description: |-
                ## Purpose
                Guidance usually says to carry on with what your body is used to, which only helps if you know what that was. Recording your usual weekly minutes, working weights, paces and sports from the months around conception gives a reference point for every later decision, and a realistic picture of what the postnatal rebuild is aiming back towards.

                ## Milestones
                1. Typical weekly minutes of moderate and vigorous activity written down.
                2. Recent working weights, paces or class levels for your main sessions recorded.
                3. Sports and classes you did regularly listed with how often.
                4. The baseline saved at the front of your training log.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline of weekly minutes, main training loads and regular sports sits at the front of your training log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Scroll back through your watch or app for the last three months of sessions"
                - "Write your typical weekly minutes and main sessions in one note"
                - "Record recent working weights, paces or class levels"
                - "Save the baseline at the front of your training log"
            - name: Pregnancy and postnatal training log
              description: |-
                ## Purpose
                Memory is unreliable when sleep is short, and a midwife or physio can help far more when they see what you actually did. A simple log with date, session, an effort score and any symptom such as leaking, pelvic pain or heaviness shows patterns over weeks rather than one bad day.

                ## Milestones
                1. A log with columns for date, session, duration, effort out of ten and symptoms.
                2. Your baseline and your midwife's advice written at the top.
                3. Every session logged for a month.
                4. A monthly summary line written that you could read out at an appointment.

                ## Notes
                Start from the **Metrics log** template. Keep the symptom column even when it is blank: a run of blanks is useful evidence too.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A training log holding at least one month of sessions with effort scores, symptom notes and a monthly summary line."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a training log from the metrics log template"
                - "Add columns for effort out of ten and symptoms"
                - "Log each session on the day you do it for the next four weeks"
                - "Write a one-line summary of the month's log @recurring(monthly:28)"
            - name: Briefing your coach, trainer or class instructor
              description: |-
                ## Purpose
                Instructors can only adapt a session they know needs adapting, and many people delay telling them until the bump makes it obvious. A short private briefing, as soon as you are ready to share the news, gets substitutions planned before a class throws in burpees, box jumps or a heavy single.

                ## Milestones
                1. Every coach, trainer or instructor you train with regularly listed.
                2. Each one told about the pregnancy and the advice from your midwife.
                3. A short list of agreed substitutions for the moves you are dropping.
                4. Each instructor's pregnancy or postnatal qualification asked about and noted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every regular coach or instructor has been briefed and has agreed substitutions for the moves you are dropping."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every coach, trainer and class you train with each month"
                - "Decide when you are comfortable telling each of them"
                - "Ask each instructor whether they hold a pregnancy exercise qualification"
                - "Agree substitutions for jumps, inversions and maximal lifts you are dropping"
            - name: Maternity sports kit that fits as you grow
              description: |-
                ## Purpose
                Breasts, ribcage, feet and bump can all change size within weeks, and a sports bra that fitted in spring may dig in by summer. Buying kit in stages, with a professional bra fitting and a support belt only if your midwife or physio suggests one, saves money and keeps sessions comfortable.

                ## Milestones
                1. A sports bra fitted for your current size, with a recheck planned each trimester.
                2. Leggings or shorts with a stretch waistband that sit comfortably under or over the bump.
                3. Trainers checked for fit, since feet can swell and lengthen in pregnancy.
                4. A support belt bought only on the advice of your midwife or physio.

                ## Notes
                Start from the **Purchase decision** template. A nursing sports bra with clip-down straps keeps being useful after birth, so it can be the second purchase rather than the first.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fitted sports bra, stretch-waist training wear and properly fitting trainers are in use, with a recheck date noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a sports bra fitting at a shop with a trained fitter"
                - "Try trainers on later in the day when feet are largest"
                - "Ask your midwife or physio whether a support belt would help you"
                - "Check sports bra and trainer fit as your size changes @recurring(monthly:9)"
            - name: Finding a women's health physiotherapist
              description: |-
                ## Purpose
                Pelvic health physiotherapists assess the pelvic floor and abdominal wall properly, and in some countries a postnatal appointment with one is routine while in others it has to be sought out. Finding one in pregnancy, before the sleepless weeks, means pelvic girdle pain can be treated now and the postnatal booking is a phone call, not a search.

                ## Milestones
                1. Whether your health service offers pelvic health physiotherapy, and how referral works, established.
                2. Two or three public or private options listed with cost, waiting time and postnatal experience.
                3. One physiotherapist chosen and their contact details saved.
                4. A first appointment booked in pregnancy or pencilled in for after birth.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named pelvic health physiotherapist is chosen with contact details saved, and an appointment or referral route is confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your midwife how pelvic health physio referrals work locally"
                - "Search a professional register for women's health physiotherapists near you"
                - "Compare cost, waiting time and postnatal experience for three options"
                - "Save the chosen physio's details in your phone and your log"
            - name: Keep, adapt or pause decision for your current sport
              description: |-
                ## Purpose
                Contact and collision sports, sports with a high fall risk, scuba diving and training at altitude are commonly flagged in pregnancy guidance, while most other training can be adapted rather than stopped. Going through your sports one by one with your midwife's input gives a clear decision for each, instead of quitting everything out of worry or carrying on without thinking.

                ## Milestones
                1. Every sport and session type you do listed.
                2. Each one marked keep, adapt or pause, with the reason.
                3. Adaptations written for the adapt list, such as dropping sparring or switching to a static bike.
                4. The decisions checked with your midwife and revisited at the start of the third trimester.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each of your sports is marked keep, adapt or pause with a reason, checked with your midwife and dated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every sport, class and session type you did in the last month"
                - "Mark each one keep, adapt or pause with a one-line reason"
                - "Check the pause list against your country's pregnancy activity guidance"
                - "Ask your midwife about anything you are unsure of at the next appointment"
            - name: First trimester movement plan around nausea and fatigue
              description: |-
                ## Purpose
                Exhaustion and sickness often arrive in the first twelve weeks, before anyone else knows you are pregnant, and plans built for normal energy collapse. A minimum plan, such as two short walks and one easy session a week, keeps the habit alive on bad days without guilt about the sessions that do not happen.

                ## Milestones
                1. A minimum week defined that you could manage even on bad days.
                2. The times of day you feel least sick noted and sessions moved into them.
                3. A snack and water plan for sessions in place.
                4. Eight weeks of at least the minimum week completed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks in which at least the agreed minimum week of movement was completed and logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down a minimum week you could manage on your worst days"
                - "Note which time of day nausea is lightest for one week"
                - "Move your sessions into that window"
                - "Pack a small snack and a water bottle for every session"
            - name: Daily pelvic floor muscle training
              description: |-
                ## Purpose
                Squeezing and lifting the pelvic floor daily in pregnancy is linked in research to less leaking late in pregnancy and after birth, and it costs nothing but a few minutes. Done every day, with both long holds and quick squeezes, and tied to something you already do, it becomes automatic before the baby arrives, when remembering anything gets harder.

                ## Milestones
                1. The correct squeeze checked with your midwife or physio, or against your health service's instructions.
                2. A daily set of long holds and quick squeezes chosen with them.
                3. The set attached to a fixed daily cue such as brushing your teeth.
                4. Twelve weeks of daily sets ticked off with only a few missed.

                ## Notes
                Start from the **Habit tracker** template. If you cannot feel the muscles working, or it hurts, ask for a physio assessment rather than squeezing harder.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of daily pelvic floor sets ticked off in a habit tracker, with technique checked by a midwife or physio."
                cadence: rolling
              tasks:
                - "Read your health service's pelvic floor exercise instructions"
                - "Ask your midwife or physio to confirm you are squeezing the right muscles"
                - "Pick the daily cue you will attach the set to"
                - "Do your pelvic floor set and tick it off @recurring(daily)"
            - name: Weekly pregnancy activity minutes
              description: |-
                ## Purpose
                Many countries' guidelines suggest around 150 minutes of moderate activity a week in pregnancy, spread across most days, plus some strength work. Adding up your week every Sunday shows whether you are near that, well over it or slipping, and makes the conversation with your midwife factual.

                ## Milestones
                1. Your guideline's weekly target, or your midwife's adjusted target, written in your log.
                2. Each week's moderate minutes added up from your log or watch.
                3. Weeks well below or well above the target marked with a reason.
                4. Sixteen weekly totals recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen weekly totals of moderate activity are recorded against the target your midwife agreed."
                cadence: rolling
              tasks:
                - "Write your agreed weekly activity target at the top of your log"
                - "Add up the week's moderate activity minutes @recurring(weekly:sun)"
                - "Mark any week far off target with a one-line reason"
            - name: Twice-weekly pregnancy strength session
              description: |-
                ## Purpose
                Strength work through pregnancy helps with carrying a growing bump now and with lifting a baby, a car seat and a pram later. Two short full-body sessions a week, using loads you can move with steady breathing and no straining or doming, keep strength without chasing records.

                ## Milestones
                1. Two full-body sessions written, covering legs, back, upper body and carrying.
                2. Each exercise given a pregnancy-friendly variation for later trimesters.
                3. Loads set so every rep is possible while breathing out on the effort.
                4. Sessions done twice a week for twelve weeks and logged.

                ## Notes
                Start from the **Training program** template. Stop any exercise that brings on pain, leaking, heaviness or a ridge down the middle of your tummy, and ask your physio about it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty-four strength sessions logged over twelve weeks, with no session continued through pain, leaking or doming."
                cadence: rolling
              tasks:
                - "Write two full-body sessions using the training program template"
                - "Choose a later-pregnancy variation for every exercise"
                - "Complete one of your two strength sessions @recurring(weekly:tue,fri)"
                - "Note any exercise that caused doming or discomfort"
            - name: Monthly bump check of exercises to adapt
              description: |-
                ## Purpose
                What feels fine at 14 weeks can feel wrong at 26, as balance shifts, ligaments loosen and the bump gets in the way. A monthly pass through your routine, asking which moves now cause discomfort, pressure or awkwardness, catches the changes before they turn into pain.

                ## Milestones
                1. A list of every exercise in your current routine.
                2. Each exercise rated comfortable, adapt or drop every month.
                3. Replacements written for anything marked adapt or drop.
                4. Changes noted in your training log with the week of pregnancy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly adapt-or-drop review is recorded in the log for every month from the second trimester to birth."
                cadence: rolling
              tasks:
                - "List every exercise in your current weekly routine"
                - "Rate each exercise comfortable, adapt or drop @recurring(monthly:12)"
                - "Write a replacement for each move you drop"
            - name: Pre-session heat and hydration routine
              description: |-
                ## Purpose
                Pregnancy raises resting heart rate and changes how you handle heat, and guidance generally warns against hot yoga, saunas and very hot, humid sessions. A short pre-session routine covering water, a snack, the room temperature and the stop signs card makes every session start the same sensible way.

                ## Milestones
                1. A pre-session checklist written with water, food, temperature and kit.
                2. Hot classes and very hot outdoor sessions swapped for cooler options.
                3. A water bottle and snack packed for every session.
                4. The checklist kept in your gym bag beside the stop signs card.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pre-session checklist is in your gym bag and every hot session has been replaced with a cooler alternative."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a five-line checklist to run before every session"
                - "Swap any hot yoga or heated class for a cooler alternative"
                - "Move summer outdoor sessions to early morning or evening"
                - "Keep the checklist with the stop signs card in your gym bag"
            - name: Antenatal appointment activity update
              description: |-
                ## Purpose
                Antenatal appointments are short, and exercise rarely comes up unless you bring it. A one-line monthly summary of what you are doing and any symptoms, ready to read out, makes sure your midwife hears about pelvic pain, breathlessness or leaking while there is still time to act.

                ## Milestones
                1. A standing note on your phone holding the current activity summary.
                2. The summary updated each month from your log.
                3. The summary read out or shown at each antenatal appointment.
                4. Anything your midwife changed written into the log the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every antenatal appointment from booking to birth included your activity summary, with any changes recorded."
                cadence: rolling
              tasks:
                - "Create a phone note titled activity summary for the midwife"
                - "Ask the agent to turn the month's log into a two-line summary @recurring(monthly:20)"
                - "Read the summary out at your next antenatal appointment"
                - "Write any change your midwife suggests into the log"
            - name: Daily pram walk build-up
              description: |-
                ## Purpose
                Walking is usually the first exercise new parents are encouraged back to, and pushing a pram up a hill is harder work than it looks. Building from a few minutes around the block to a regular 30 minute walk, adding a little each week as bleeding, pain and tiredness allow, gives a base for everything that follows.

                ## Milestones
                1. A first short walking loop planned near home with a place to stop.
                2. Walk length increased gradually week by week and logged.
                3. Any increase in bleeding, pain or heaviness noted and the next walk shortened.
                4. A regular walk of around 30 minutes reached on most days.

                ## Notes
                Ask your midwife or health visitor how soon to start and what to watch for. Bleeding that becomes heavier or redder after walking is a common sign you did too much.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Most days of the week include a logged pram walk of around 30 minutes, reached without symptoms getting worse."
                cadence: rolling
              tasks:
                - "Plan a ten-minute flat loop from your front door"
                - "Ask your midwife when to start walking and what to watch for"
                - "Log the week's walks and add five minutes to the longest @recurring(weekly:sat)"
                - "Map a longer route with a cafe or bench halfway"
            - name: Weekly postnatal rebuild planner
              description: |-
                ## Purpose
                After birth the week is shaped by feeds, naps and appointments, so fixed training days rarely survive. Planning each week on Monday, with two or three realistic slots and a ten-minute fallback for each, keeps the rebuild moving when the day goes sideways.

                ## Milestones
                1. A weekly planning slot fixed on Monday morning or Sunday night.
                2. Two or three session slots chosen around the baby's current routine.
                3. A ten-minute fallback version written for each session.
                4. Twelve weeks of plans made, with each session marked done or swapped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly plans written, each with session slots and fallbacks, and the outcome of each session recorded."
                cadence: rolling
              tasks:
                - "Write a ten-minute fallback version of each rebuild session"
                - "Plan the week's two or three session slots around the baby @recurring(weekly:mon)"
                - "Mark each slot done, swapped or missed in the log"
            - name: Pelvic floor symptom check after harder sessions
              description: |-
                ## Purpose
                Leaking, a dragging or heavy feeling, pelvic pain or doming down the middle of the tummy during or after training are signals that load has outrun recovery. A monthly look back at which sessions brought symptoms, and how long they lasted, tells you and your physio what to scale back and what is ready to progress.

                ## Milestones
                1. Symptoms after each session scored in the log as none, mild or clear.
                2. A monthly review linking symptoms to the sessions before them.
                3. Sessions that reliably caused symptoms scaled back.
                4. Any symptom that persisted or worsened taken to your physio.

                ## Notes
                Symptoms like these are common and treatable. They are a reason to see a pelvic health physio, not a reason to stop exercising altogether.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly symptom reviews recorded, each naming any session scaled back and any symptom referred to a physio."
                cadence: rolling
              tasks:
                - "Add a none, mild or clear symptom score to every logged session"
                - "Review which sessions led to symptoms this month @recurring(monthly:3)"
                - "Scale back the session that most often caused symptoms"
                - "Book your physio if any symptom lasts more than a couple of days"
            - name: Training rules for broken-sleep weeks
              description: |-
                ## Purpose
                Teething, growth spurts and night feeds produce weeks when four hours is a good night, and hard sessions on that little sleep raise injury risk while rarely building fitness. Writing simple rules in advance, such as swapping intensity for a walk below a set amount of sleep, takes the decision away from a tired brain.

                ## Milestones
                1. A sleep threshold chosen below which hard sessions are swapped.
                2. An easy alternative written for each harder session.
                3. A rule for how many easy weeks in a row prompt a rethink of the plan.
                4. The rules reviewed monthly against how the weeks actually went.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Written broken-sleep rules sit in the log and have been reviewed monthly for at least three months."
                cadence: rolling
              tasks:
                - "Write the hours of sleep below which you swap a hard session"
                - "Pair each hard session with an easy alternative"
                - "Check last month's swaps against how you felt @recurring(monthly:16)"
            - name: Connection breath for the pelvic floor and deep core
              description: |-
                ## Purpose
                The diaphragm, deep abdominals and pelvic floor work as a team, and many physios start both pregnancy lifting and postnatal rehab with one pattern: let the belly and pelvic floor relax on the in-breath, then gently lift and draw in on the out-breath. Practised lying, sitting and standing, it becomes the pattern you use when lifting the baby or the bar.

                ## Milestones
                1. The breath pattern learnt from a physio, your health service or a physio-led video.
                2. Five slow breaths practised lying, sitting and standing.
                3. The out-breath used during everyday lifts such as the car seat and the shopping.
                4. The pattern checked once by a physio.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can perform the connection breath in three positions and use it during lifts, confirmed once by a physio."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Watch one physio-led video on diaphragm and pelvic floor breathing"
                - "Practise five connection breaths before getting out of bed @recurring(daily)"
                - "Use the out-breath on every car seat and pram lift this week"
                - "Ask your physio to check your breath pattern"
            - name: Abdominal separation self-check with your physio
              description: |-
                ## Purpose
                Some separation of the long tummy muscles is normal by the end of pregnancy, and for most people it narrows in the months after birth. Learning to check the gap and the tension of the tissue with your physio's help, then repeating it monthly, gives a factual picture of healing instead of worry about the shape in the mirror.

                ## Milestones
                1. The self-check taught or confirmed by a physio or midwife.
                2. A baseline width and depth noted at points above, at and below the belly button.
                3. Monthly repeat checks recorded in the log.
                4. Your physio's view on the trend written down.

                ## Notes
                Width alone does not tell the whole story; how firm the tissue feels when you engage your core matters too. Let a professional interpret the numbers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A physio-confirmed baseline and at least three monthly self-check results are recorded with the physio's comment on the trend."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your physio or midwife to show you the abdominal separation check"
                - "Record the baseline gap at three points along the midline"
                - "Repeat the self-check and note the result @recurring(monthly:14)"
                - "Share the trend with your physio at the next appointment"
            - name: Lifting babies, car seats and prams with less strain
              description: |-
                ## Purpose
                A new parent lifts a growing baby dozens of times a day, plus a car seat at awkward angles and a pram into a boot, often while still healing. Learning a few set-ups, such as getting close, hinging from the hips, breathing out on the effort and climbing into the back seat rather than twisting, protects the back, the pelvic floor and any caesarean scar.

                ## Milestones
                1. The five heaviest or most awkward lifts in your day listed.
                2. A better set-up worked out for each with your physio or midwife.
                3. Cot, changing surface and car seat positions adjusted where possible.
                4. Each lift practised until the new set-up is the default.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written set-up exists for each of your five heaviest daily lifts, with the changing surface or car arranged to support them."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the five heaviest or most awkward lifts in your day"
                - "Ask your physio to watch you do the two hardest ones"
                - "Raise the changing surface to roughly hip height"
                - "Practise climbing into the back seat to lift the car seat out"
            - name: Adapting exercises as the bump grows
              description: |-
                ## Purpose
                Later in pregnancy some positions become uncomfortable or are commonly advised against, such as long spells flat on your back, deep twists, breath-holding under heavy load and moves with a high fall risk. Learning the usual substitutions, like incline benches, side-lying work and box squats, lets you keep training the same muscles rather than dropping whole sessions.

                ## Milestones
                1. A list of the positions your guidance or midwife suggests limiting, with the reasons.
                2. A substitute written for every floor, twisting or jumping move in your routine.
                3. Balance-heavy moves swapped for supported versions.
                4. The substitutions tried in a session and kept in the log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every lying, twisting, jumping or balance-heavy move in your routine has a written substitute that you have tried."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your midwife which positions to limit later in pregnancy and why"
                - "Find an incline or side-lying swap for every flat-on-your-back exercise"
                - "Replace jumps with step-ups or marching versions"
                - "Try all the swaps in one session and note how each felt"
            - name: Pelvic girdle pain recognition and everyday adjustments
              description: |-
                ## Purpose
                Pain at the front of the pubic bone, in the buttocks or around the hips is common in pregnancy and often treatable, yet many people are told it is just part of being pregnant. Knowing what it feels like, which movements typically aggravate it, such as wide stances, stairs and turning in bed, and getting physio help early keeps you mobile and training.

                ## Milestones
                1. The typical signs of pelvic girdle pain learnt from your health service's information.
                2. Movements that trigger your pain, if any, noted in the log.
                3. Everyday adjustments in use, such as knees together when turning in bed and one step at a time on stairs.
                4. A physio assessment booked promptly if pain appears.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pain triggers, if any, are logged, everyday adjustments are in use and any pelvic pain was assessed by a physio within two weeks of starting."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's leaflet on pelvic girdle pain"
                - "Note which movements trigger pain in your log for one week"
                - "Practise turning in bed with your knees together"
                - "Ask your midwife for a physio referral as soon as pain starts"
            - name: Birth preparation positions and breathing practice
              description: |-
                ## Purpose
                Upright and forward-leaning positions, rocking on a ball and slow breathing are commonly taught for labour, and they feel more natural when practised in the weeks before. Short practice sessions from the third trimester, ideally with your birth partner, make the positions familiar rather than something read about once.

                ## Milestones
                1. The positions and breathing approaches taught by your antenatal class or midwife written down.
                2. A birth ball or cushions set up for practice at home.
                3. Short practice sessions done weekly from around 32 weeks.
                4. Your birth partner able to prompt the positions and the breathing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Weekly practice from around 32 weeks is logged and your birth partner can name and prompt three positions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down the labour positions your antenatal class covered"
                - "Set up a birth ball and cushions in a quiet room"
                - "Practise three positions with slow breathing for ten minutes"
                - "Run one practice session with your birth partner prompting you"
            - name: Reading your country's pregnancy and postpartum activity guidance
              description: |-
                ## Purpose
                Official guidance on physical activity in pregnancy and after birth exists in most countries, from health ministry infographics to obstetric college statements, and it is clearer than most forum threads. Reading the actual source and noting its key points gives you a shared reference with your midwife and a filter for conflicting advice online.

                ## Milestones
                1. The current national or professional guidance found and saved.
                2. Its key points on weekly activity, strength work and things to avoid summarised on one page.
                3. Any point that conflicts with what you have been told listed as a question.
                4. The questions taken to your midwife and the answers noted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of your country's official pregnancy and postpartum activity guidance exists, with open questions answered by your midwife."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your health service's current guidance on activity in pregnancy"
                - "Ask the agent to summarise the guidance into one page of key points"
                - "List anything that conflicts with advice you have been given"
                - "Take the conflicting points to your midwife"
            - name: Postnatal core restoration progressions
              description: |-
                ## Purpose
                Rebuilding the abdominal wall after birth works best as a ladder: breathing and gentle activation first, then heel slides, dead bug variations and side planks, then loaded carries and full planks once there is no doming or leaking. Climbing the ladder with your physio, one rung at a time, avoids both rushing to crunches and staying on breathing drills for a year.

                ## Milestones
                1. A progression ladder of five or six levels agreed with your physio.
                2. A clear test for moving up a level, such as no doming or leaking across all reps.
                3. Short core sessions logged each week with the current level.
                4. The top level reached, or a physio review booked if progress stalls.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Your current core level is logged weekly and you have moved up at least three levels using the agreed test."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree a five-level core progression ladder with your physio"
                - "Write the pass test for moving up each level"
                - "Do a core session at your current level and log it @recurring(weekly:wed)"
                - "Book a physio review if you stay on one level for six weeks"
            - name: Choosing a pregnancy or postnatal exercise class
              description: |-
                ## Purpose
                Aquanatal, pregnancy yoga and Pilates, buggy fitness and parent and baby classes vary hugely in how qualified the instructor is and how much the session is truly adapted. Comparing a few local options against the same criteria, and trying one before paying for a block, gets you a class that suits your stage and your budget.

                ## Milestones
                1. Four or five local classes listed with stage, time, cost and baby-friendliness.
                2. Each instructor's pregnancy or postnatal qualification checked.
                3. Two taster sessions attended.
                4. One class chosen and a block booked.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One class chosen from at least four compared options, with the instructor's qualification checked and a block booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List four local pregnancy or postnatal classes with times and prices"
                - "Ask each instructor about their pregnancy or postnatal qualification"
                - "Book two taster sessions"
                - "Book a block at the class that suited you best"
            - name: Swapping running for lower-impact cardio
              description: |-
                ## Purpose
                Some people run comfortably until late pregnancy, while others find that bladder pressure, pelvic pain or a heavy bump make it miserable from mid-pregnancy. Deciding in advance what would make you switch, and which alternatives you would switch to, such as swimming, a static bike or a cross-trainer, keeps your fitness going instead of stopping altogether.

                ## Milestones
                1. The signs that would make you stop running written down.
                2. Two or three low-impact alternatives chosen and access arranged.
                3. A test session of each alternative completed.
                4. The switch made, if needed, without a gap in weekly cardio.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Switch criteria and two tested low-impact alternatives are written in your log, and weekly cardio continued after any switch."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the three signs that would make you stop running"
                - "Check pool times or gym access for a bike or cross-trainer"
                - "Try one session on each low-impact alternative"
                - "Move your running sessions to the alternative when a sign appears"
            - name: Running buggy choice
              description: |-
                ## Purpose
                A standard pram is not built for running, and most running buggy makers give a minimum age, often around six months, before you run with the baby in it. Choosing one with a lockable front wheel, a handbrake and a wrist strap, at the right point, makes buggy running a real option rather than an expensive mistake.

                ## Milestones
                1. The manufacturer's minimum running age checked for each candidate.
                2. Three buggies compared on brake, wheels, fold size and price.
                3. Second-hand options checked for recalls and wear.
                4. One buggy chosen and the first walk with it done.

                ## Notes
                Start from the **Purchase decision** template. Running with the baby in a buggy usually comes well after your own return to running, so this decision can wait.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A running buggy is chosen from three compared options, with the manufacturer's minimum running age noted in your log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the minimum running age each buggy maker gives"
                - "Compare three buggies on handbrake, front wheel lock and fold size"
                - "Check any second-hand buggy against product recall lists"
                - "Walk the buggy round your usual route before running with it"
            - name: Fitting sessions around feeds, naps and childcare
              description: |-
                ## Purpose
                Training time after a baby rarely appears by itself; it is negotiated with a partner, a grandparent, a crèche or the nap schedule. Working out which slots are truly available, and who covers which, gives a realistic number of sessions a week instead of a plan that fails by Wednesday.

                ## Milestones
                1. The baby's current feed and nap pattern written down.
                2. Every possible training slot in a typical week listed.
                3. Cover agreed for at least two slots with a partner, relative or crèche.
                4. A realistic weekly session count chosen and revisited when the routine changes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly schedule shows at least two covered training slots, agreed with whoever provides the cover."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the baby's feed and nap pattern for three days"
                - "List every slot in the week when a session could fit"
                - "Ask your partner or a relative to cover two slots a week"
                - "Choose a weekly session count you can keep for a month"
            - name: Feeding and training logistics
              description: |-
                ## Purpose
                Whether you breastfeed, bottle feed or combine both, sessions go better when feeding is planned around them. Simple logistics, such as feeding or expressing before a session, a supportive nursing sports bra, extra water and a snack, remove most of the discomfort that puts people off training in the early months.

                ## Milestones
                1. A pre-session feeding or expressing routine that works for you.
                2. A supportive bra suited to feeding in your kit bag.
                3. Water and snacks for training days planned.
                4. Any feeding concern raised with your midwife, health visitor or a feeding specialist.

                ## Notes
                If you notice any change in feeding after training, raise it with a feeding specialist rather than guessing at the cause.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written pre-session feeding routine, a suitable bra and a training-day water plan have been in use for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Time your next session to start just after a feed"
                - "Buy or borrow one supportive nursing sports bra"
                - "Fill a large water bottle before each session"
                - "Raise any feeding change after training with your health visitor"
            - name: Nap-time home workout kit on a small budget
              description: |-
                ## Purpose
                Getting to a gym with a newborn can take longer than the session, so many parents train at home in 20 minute nap windows. A small kit chosen for those sessions, such as a mat, a kettlebell or adjustable dumbbells and a resistance band, costs less than a few months of membership and gets used when it lives in the living room.

                ## Milestones
                1. A budget set for home kit.
                2. Three or four pieces chosen that cover the planned sessions.
                3. A storage spot found within earshot of where the baby naps.
                4. Three 20 minute home sessions written to use the kit.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Home kit within budget is bought and stored, and three 20 minute nap-time sessions are written to use it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set a budget for home training kit"
                - "Choose three or four pieces that cover your planned sessions"
                - "Clear a storage spot within earshot of the nap room"
                - "Write three 20 minute sessions that use only that kit"
            - name: Gym membership freeze, switch or keep decision
              description: |-
                ## Purpose
                Gym contracts often allow a medical or maternity freeze, while cancelling can mean paying a joining fee again later. Checking your contract's terms, and whether any nearby gym or leisure centre runs a crèche, lets you freeze, switch or keep paying with a real plan to go.

                ## Milestones
                1. Your contract's freeze, pause and cancellation terms read.
                2. Nearby gyms and leisure centres with a crèche listed with prices and hours.
                3. A decision made to freeze, switch or keep the membership.
                4. The change actioned and a reminder set for when any freeze ends.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to freeze, switch or keep your gym membership is actioned, with any freeze end date in your calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your gym contract's freeze and cancellation terms"
                - "List nearby gyms or leisure centres that run a crèche"
                - "Decide whether to freeze, switch or keep the membership"
                - "Put the freeze end date in your calendar"
            - name: Final four weeks before the due date
              description: |-
                ## Purpose
                From around 36 weeks, sleep, comfort and energy can change from one week to the next, and many people want a gentle plan rather than an abrupt stop. Setting a simple routine for the last month, with walks, mobility, pelvic floor work and birth position practice, keeps you moving while leaving plenty of room to rest.

                ## Milestones
                1. A last-month routine written with walks, mobility and pelvic floor work.
                2. Anything that now feels wrong dropped without debate.
                3. Your midwife's view on the routine checked at the 36 week appointment.
                4. The routine kept up most days until birth, or set aside when your midwife advises.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written last-month routine, checked with your midwife at 36 weeks, is logged on most days until the birth."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a gentle daily routine for the last four weeks"
                - "Bring the routine to your 36 week appointment"
                - "Drop any move that now causes pain or pressure"
                - "Log each day's routine in a single line"
            - name: First six weeks after birth gentle movement plan
              description: |-
                ## Purpose
                The early weeks are for healing, and guidance usually limits activity to walking, pelvic floor work, breathing and gentle mobility until the postnatal check. Having that plan written before the birth means you neither lie still for six weeks nor rush back to classes because you feel fine on day ten.

                ## Milestones
                1. A written plan for weeks one to six covering walks, pelvic floor, breathing and mobility.
                2. Activities to avoid before your postnatal check listed, as advised by your midwife.
                3. Signs to call your midwife about, such as heavier bleeding or wound problems, written on the plan.
                4. The plan followed and each week logged in one line.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A six-week postnatal movement plan was written before the birth and each of the six weeks is logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a week-by-week gentle movement plan for the first six weeks"
                - "Ask your midwife which activities to avoid before your postnatal check"
                - "Add the call-your-midwife signs to the plan"
                - "Log one line on each week's movement and healing"
            - name: Postnatal check exercise questions
              description: |-
                ## Purpose
                Six to eight weeks after birth most health services offer a postnatal check, and it can be quick, focused on the baby and over before exercise is mentioned. Writing your questions in advance, about returning to running or lifting, leaking, scars and your abdominal gap, makes sure you leave with answers or a referral.

                ## Milestones
                1. Questions about exercise, pelvic floor, scars and abdominal separation written in advance.
                2. Symptoms from the training log summarised in three lines.
                3. The check attended and the answers recorded.
                4. A pelvic health physio referral requested if any symptom is present.

                ## Notes
                Start from the **Meeting notes** template. Being signed off at this check is usually about general recovery, not clearance for running or heavy lifting.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The postnatal check was attended with written questions, and the answers or referral are recorded in your notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five questions about exercise and recovery for the postnatal check"
                - "Summarise any symptoms from your log in three lines"
                - "Ask directly for a pelvic health physio referral if you have symptoms"
                - "Record the answers in your meeting notes the same day"
            - name: Postnatal pelvic health physio assessment
              description: |-
                ## Purpose
                Pelvic health physios can assess pelvic floor strength and coordination, abdominal separation and any scar, then set a rehab plan that general check-ups do not cover. Booking the assessment for around six to twelve weeks after birth, ideally before returning to running or lifting, turns guesswork about readiness into a measured starting point.

                ## Milestones
                1. An assessment booked for six to twelve weeks after birth.
                2. Your training log, symptoms and goals brought to the appointment.
                3. Findings on pelvic floor, abdominal wall and any scar recorded.
                4. A written rehab plan with a review date.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A postnatal pelvic health physio assessment is completed, with findings and a written rehab plan saved in your log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Call the physio you chose and book a postnatal assessment"
                - "Write your return-to-sport goals to bring to the appointment"
                - "Record the findings on pelvic floor, abdomen and scar"
                - "Book the follow-up review before you leave"
            - name: Return-to-running readiness tests
              description: |-
                ## Purpose
                Published return-to-running guidance after childbirth commonly suggests waiting until around twelve weeks and first passing a set of load and impact tests, such as brisk walking, single-leg balance and squats, jogging on the spot and hopping, all without leaking, heaviness or pain. Running the tests with your physio gives a clear yes, a not yet, or a list of what to work on.

                ## Milestones
                1. The load and impact tests your physio uses written in your log.
                2. Strength and pelvic floor work done until the tests look achievable.
                3. The tests performed without leaking, heaviness or pain, or the failing tests noted.
                4. A walk-run plan agreed for the first four weeks back.

                ## Notes
                Passing these tests is the start of a graded return, not permission to run your old weekly distance.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The return-to-running tests are passed and recorded with your physio, and a four-week walk-run plan is written."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your physio which return-to-running tests they use"
                - "Practise single-leg balance and squats until they feel easy"
                - "Book a physio session to run the tests"
                - "Write a four-week walk-run plan from the result"
            - name: First heavy lifting session back after birth
              description: |-
                ## Purpose
                Lifters often want to know when they can squat or deadlift heavy again, and the honest answer is when breathing, pelvic floor and abdominal wall can manage the load, which varies a lot between people. Planning a first heavier session with conservative loads, a pass test for each lift and your physio's input makes it a checkpoint rather than a gamble.

                ## Milestones
                1. Your physio's view on readiness for heavier loads recorded.
                2. Starting loads agreed well below your pre-pregnancy numbers.
                3. A pass test written for each lift, such as no leaking, heaviness or doming.
                4. The first session completed and logged, with the next step decided.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first heavier lifting session after birth is completed at agreed loads and logged with symptom notes and a next step."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a physio or coach session the week before your first heavy day"
                - "Agree starting loads for each lift with your physio or coach"
                - "Write a pass test for each lift"
                - "Log the session and decide the next week's loads"
            - name: First postnatal race or buggy run event
              description: |-
                ## Purpose
                Picking a dated target, like a local 5K, a free weekly timed run with the buggy or a charity fun run, gives the rebuild a focus and a reason to protect sessions. Choosing one at least eight weeks after you start running again, and entering only once the readiness tests are passed, keeps the goal motivating rather than pressuring.

                ## Milestones
                1. An event chosen at least eight weeks after your return to running.
                2. Return-to-running tests passed before entering.
                3. A training plan to the event written from the walk-run build.
                4. The event completed, with or without the buggy, and logged.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A chosen postnatal race or timed run is completed and logged, entered only after the return-to-running tests were passed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Shortlist two local events at least eight weeks after you restart running"
                - "Check whether each event allows running buggies"
                - "Enter the event once your readiness tests are passed"
                - "Write your result and how you felt in the log"
            - name: Exercise recovery after a caesarean birth
              description: |-
                ## Purpose
                Caesarean birth is major abdominal surgery, and recovery usually needs more time and a gentler start than a vaginal birth, with lifting and driving restrictions in the early weeks. Planning the first three months around the wound, the scar and core rebuilding, with your midwife and a physio, avoids both overprotecting and overdoing it.

                ## Milestones
                1. Your surgical team's or midwife's guidance on lifting, driving and activity written down.
                2. A week-by-week walking and breathing plan for the first six weeks.
                3. Scar care and gentle scar mobilisation taught by a physio once the wound has healed.
                4. A physio-led core and return-to-exercise plan in place by around twelve weeks.

                ## Notes
                Pain, redness, discharge or a fever around the wound needs a call to your midwife or doctor the same day.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written caesarean recovery plan covers six weeks of walking and breathing, scar care and a physio-led core plan by twelve weeks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the ward or your midwife for written caesarean recovery guidance"
                - "Note the lifting and driving restrictions and when they end"
                - "Ask a physio to teach scar mobilisation once the wound has healed"
                - "Plan a twelve-week core and exercise return with your physio"
            - name: Recovery after a perineal tear or assisted birth
              description: |-
                ## Purpose
                Stitches, bruising and swelling after a tear, a forceps or a ventouse birth affect sitting, walking and pelvic floor training for weeks, and more severe tears usually come with a specialist follow-up. Planning a slower start and making sure the follow-up and physio appointments happen protects long-term bladder, bowel and pelvic floor function.

                ## Milestones
                1. The type of tear or assisted birth, and any follow-up offered, noted from your discharge notes.
                2. Pelvic floor work restarted when your midwife or physio says, with a gentler build.
                3. Any specialist or physio follow-up attended.
                4. Bladder, bowel or pain symptoms that persist reported promptly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Discharge details are recorded, follow-up appointments attended and pelvic floor training restarted at the pace your midwife or physio set."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your discharge notes and write down the type of tear or assisted birth"
                - "Check that any specialist follow-up appointment has been booked"
                - "Ask your midwife when to restart pelvic floor exercises"
                - "Report any bladder or bowel symptom at your postnatal check"
            - name: Training through a pregnancy with a toddler at home
              description: |-
                ## Purpose
                Second and later pregnancies come with less rest, more lifting and a small person who does not care that you are tired. Building sessions that include the toddler, such as park walks, playground circuits and dancing in the kitchen, and protecting one solo session a week, keeps you active without needing extra childcare for every session.

                ## Milestones
                1. One solo session a week protected with childcare cover.
                2. Two activities that include the toddler planned each week.
                3. Toddler lifting adapted as the bump grows, such as lifting from a step.
                4. The week's activity logged even when it was mostly playground.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks logged with one solo session and two toddler-inclusive activities in most weeks."
                cadence: rolling
              tasks:
                - "Arrange cover for one solo session each week"
                - "Plan two activities that include the toddler @recurring(weekly:wed)"
                - "Teach the toddler to climb onto a step before you lift them"
                - "Log toddler-inclusive activity as real sessions"
            - name: Pregnancy complications and specialist-guided activity
              description: |-
                ## Purpose
                Conditions such as gestational diabetes, high blood pressure, a low-lying placenta, a twin pregnancy or a history of early labour change what is sensible, sometimes encouraging more activity and sometimes far less. Taking your training plan to the specialist team, and writing down exactly what they say, means you neither abandon exercise unnecessarily nor carry on with something you have been told to stop.

                ## Milestones
                1. Your condition and specialist team noted, with their contact details.
                2. Your current training plan shown to them and their response recorded.
                3. A revised plan written within their limits.
                4. The plan rechecked whenever the condition or the advice changes.

                ## Notes
                Your own team's advice always outranks general pregnancy guidance, including anything elsewhere in this area.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A revised activity plan is written within your specialist team's stated limits, with the date of their advice recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down your condition and your specialist team's contact details"
                - "Bring your current training plan to the next specialist appointment"
                - "Write a revised plan within the limits they set"
                - "Recheck the plan with the team whenever advice changes"
            - name: Partner support for training time and recovery
              description: |-
                ## Purpose
                Partners can make or break a postnatal return to exercise, by covering feeds and nappies, carrying the heavy car seat in the early weeks and noticing when symptoms are being ignored. Agreeing practical roles before and after birth, and checking in weekly, turns good intentions into protected sessions for both of you.

                ## Milestones
                1. The heavy lifting and household tasks your partner takes on in the early weeks agreed.
                2. Weekly training slots for both of you planned together.
                3. Your partner able to name the stop signs and when to call the midwife.
                4. A weekly ten-minute check-in kept for three months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three months of weekly check-ins held, with each partner's training slots planned and early-weeks lifting duties agreed in writing."
                cadence: rolling
              tasks:
                - "Agree which lifting and chores your partner covers in the first six weeks"
                - "Walk your partner through the stop signs and when to call the midwife"
                - "Hold a ten-minute weekly planning chat with your partner @recurring(weekly:sun)"
                - "Plan one training slot a week for each of you"
            - name: Movement and mood in the postnatal year
              description: |-
                ## Purpose
                Low mood, anxiety and exhaustion are common in the year after birth, and gentle regular activity, especially outdoors or with other parents, is often part of what helps. Tracking mood alongside sessions shows what lifts you, and a clear line for when to speak to your health visitor or doctor stops postnatal depression being mistaken for tiredness.

                ## Milestones
                1. A simple weekly mood and energy rating added to your log.
                2. One social or outdoor activity a week, such as a buggy walk group.
                3. A written threshold for speaking to your health visitor or doctor about mood.
                4. Three months of ratings reviewed for patterns.

                ## Notes
                If you have thoughts of harming yourself or your baby, contact your doctor or emergency services straight away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of weekly mood ratings sit beside your sessions, with a written threshold for seeking help and a social activity in most weeks."
                cadence: rolling
              tasks:
                - "Find a local buggy walk group or parent and baby class"
                - "Rate mood and energy beside the week's sessions @recurring(weekly:thu)"
                - "Write down the point at which you will call your health visitor or doctor"
                - "Look back over three months of ratings for patterns"
            - name: Competitive athlete pregnancy and comeback plan
              description: |-
                ## Purpose
                Athletes who compete face extra decisions: telling a coach, club or governing body, handling funding or selection, scaling high training volumes and planning a realistic return to competition. A joint plan with your coach, midwife and a sports or pelvic health physio, reviewed monthly, keeps training purposeful through pregnancy and turns the comeback into staged checkpoints rather than a race back to old numbers.

                ## Milestones
                1. Coach, club and any governing body or funder informed on your own timeline.
                2. A pregnancy training plan with volumes agreed between coach and midwife.
                3. A staged postnatal comeback plan with physio-led checkpoints.
                4. Monthly reviews with your coach recorded.
                5. A first target competition chosen only after the checkpoints are passed.

                ## Notes
                Check your sport's governing body and any funding body for maternity policies on selection, ranking protection and support.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written pregnancy and comeback plan is agreed by your coach and a physio, with monthly reviews recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Decide when and how to tell your coach, club and funders"
                - "Agree pregnancy training volumes with your coach and midwife"
                - "Write staged comeback checkpoints with a sports or pelvic health physio"
                - "Review the plan with your coach @recurring(monthly:25)"
            - name: Prolapse-aware training with a pelvic health physio
              description: |-
                ## Purpose
                Pelvic organ prolapse after childbirth is more common than many realise, and a diagnosis does not automatically mean giving up running or lifting. Working with a pelvic health physio on pelvic floor strength, load management and, where offered, a pessary fitted for exercise lets many people keep training with symptoms managed and monitored.

                ## Milestones
                1. The diagnosis and its grade recorded from a pelvic health physio or gynaecologist.
                2. A training plan adjusted with their input on impact and heavy load.
                3. Options such as a pessary for exercise discussed and a decision recorded.
                4. Symptoms tracked against training and reviewed every quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly physio reviews are held and training loads adjusted to keep prolapse symptoms stable or improving in the log."
                cadence: rolling
              tasks:
                - "Write down your diagnosis and the advice you were given"
                - "Ask your physio which sessions to modify and how"
                - "Ask whether a pessary for exercise is an option for you"
                - "Book a pelvic health physio review @recurring(quarterly)"
            - name: Return to high-impact and contact sport after birth
              description: |-
                ## Purpose
                Netball, football, rugby, martial arts, CrossFit and similar sports combine jumping, cutting, contact and heavy lifting, so they come after running and lifting are going well. Rebuilding sport-specific demands in stages, from solo skills to non-contact training to full matches, with a physio's or coach's check between stages, gets you back on the team sheet without setbacks.

                ## Milestones
                1. Running and strength return stages completed without symptoms.
                2. Sport-specific stages written, from solo skills to full contact or competition.
                3. A physio or coach check passed between each stage.
                4. The first full match or competition played and logged.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The first full match or competition after birth has been played, after a recorded check was passed at each return stage."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the movement demands of your sport, such as jumps, sprints and contact"
                - "Write three return stages from solo skills to full matches"
                - "Agree the check for each stage with your physio or coach"
                - "Tell your captain or coach which stage you are at"
---

# Pregnancy & Postnatal Exercise

This area is for parents-to-be and new parents who want to keep moving through pregnancy and rebuild properly afterwards, whether that means walks and swimming or keeping a running, lifting or team sport habit alive. It starts with the foundations (a planned conversation with your midwife, a stop signs card, a baseline and a log, kit that fits, a pelvic health physio found early), then the weekly machinery of pelvic floor work, activity minutes, adapted strength sessions and symptom checks, the skills of breathing, lifting and adapting as the bump grows, the decisions about classes, buggies and childcare, the dated checks and tests after birth, the situations that change the route, and finally specialist work for competitive athletes and anyone managing prolapse.

What repeats is a daily pelvic floor set and a few connection breaths, a weekly activity tally and two strength sessions in pregnancy, a weekly rebuild plan and pram walk log after birth, and monthly checks of your log, your symptoms and which exercises need adapting. The Metrics log, Purchase decision, Habit tracker, Training program and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
