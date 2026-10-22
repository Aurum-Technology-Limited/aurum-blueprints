---
id: fitness-sport.hiit-metabolic-conditioning
name: HIIT & Metabolic Conditioning
description: "Intervals that keep paying off: a readiness check, a capped hard-day schedule, protocols matched to your goal, rep-by-rep logging, and blocks for fat loss, sport and work capacity."
category: personal
version: 1.0.0
tags: [fitness-sport, hiit-metabolic-conditioning, everyone, athlete, intervals, conditioning, fat-loss, work-capacity]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - purchase-decision
    - training-program
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: HIIT & Metabolic Conditioning
          description: "Programming high-intensity interval training and conditioning circuits for fitness, fat loss and work capacity without overdoing intensity."
          projects:
            - name: Health readiness check before hard intervals
              description: |-
                ## Purpose
                Near-maximal efforts push heart rate and blood pressure higher than almost anything else in ordinary training, so anyone with a heart condition, chest pain on exertion, fainting episodes, high blood pressure or blood pressure medicines should talk to a clinician before starting. A standard pre-exercise questionnaire takes ten minutes and tells you whether you can start straight away or need that conversation first.

                ## Milestones
                1. A recognised pre-exercise readiness questionnaire completed honestly.
                2. Any yes answers taken to your doctor or practice nurse, with their view recorded.
                3. A short list of personal stop signs written down: chest pain, unusual breathlessness, dizziness, palpitations.
                4. A clear go, go with limits, or wait decision written at the top of your session log.

                ## Notes
                Stop a session and seek medical help for chest pain, fainting or an irregular heartbeat during or after effort. This project organises the check; the clinician makes the call.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed readiness questionnaire and a recorded go, go with limits, or wait decision, with clinician advice noted for any yes answer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Complete a standard pre-exercise readiness questionnaire"
                - "Book a GP or nurse appointment if any answer is yes"
                - "Write your personal stop signs on the first page of your log"
                - "Repeat the questionnaire after any new diagnosis or new medicine @recurring(yearly)"
            - name: Choosing your main goal for interval training
              description: |-
                ## Purpose
                Intervals for fat loss, for a fitter heart and lungs, for a sport, or for surviving a hard class all look similar on a timer but need different doses, rest periods and support around them. Picking one main goal for the next three months stops you mixing every protocol on the internet and lets you judge progress against one honest number.

                ## Milestones
                1. One primary goal chosen from fat loss, aerobic fitness, sport conditioning or general work capacity.
                2. A single measure attached to that goal, such as baseline session output, waist measurement or a sport-specific test.
                3. A secondary goal named, or a deliberate decision to have none.
                4. The goal and measure written where you will see them before each session.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One primary interval goal and one measure for it are written in the session log, with a three-month review date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List what you want intervals to do for you in the next three months"
                - "Pick the one goal that matters most and cross out the rest"
                - "Choose a single measure that will show progress toward it"
                - "Write the goal, measure and review date at the top of the log"
            - name: Picking your interval mode for joints, space and budget
              description: |-
                ## Purpose
                Sprinting on a track, an air bike, a rower, a ski erg and a bodyweight circuit can all deliver hard intervals, but they load joints very differently and some need kit or a gym. Matching the main mode to your body, your space and your timetable is what decides whether you are still doing intervals in month four.

                ## Milestones
                1. Three candidate modes tried for one short test session each.
                2. Each mode scored for joint comfort, access, noise and how hard you could honestly push it.
                3. One main mode and one backup chosen for days the first is unavailable.
                4. Any kit or membership needed priced and either bought or ruled out.

                ## Notes
                Cycling and rowing let most people reach high effort with far less impact than running sprints. Running intervals are excellent if your legs already tolerate regular running.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main and a backup interval mode are chosen and recorded, each scored on joint comfort, access and achievable intensity."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the modes you can realistically reach each week"
                - "Try three of them for six short efforts each over one week"
                - "Score each for joint comfort, access and how hard you could push"
                - "Record your main mode and a backup in the log"
            - name: Calibrating effort with a ten-point RPE scale
              description: |-
                ## Purpose
                Most interval sessions are written in effort terms, and most people misjudge them: the first reps go too hard and the last ones fall apart. Learning a ten-point rating of perceived exertion, anchored to the talk test and to how long you could hold the pace, gives every protocol in this area a common language you can use on any machine.

                ## Milestones
                1. The ten-point scale written out with your own description for 3, 5, 7, 9 and 10.
                2. Talk-test anchors noted: full sentences, broken phrases, single words, nothing.
                3. Three sessions rated rep by rep, with the rating written next to each rep.
                4. A note of where your ratings and your numbers disagreed, and what you learned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your own written RPE scale with talk-test anchors, and three sessions logged with a rating against every rep."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a ten-point effort scale in your own words"
                - "Add talk-test anchors to levels 3, 5, 7 and 9"
                - "Rate every rep of your next three interval sessions"
                - "Compare the ratings with your output numbers and note mismatches"
            - name: Work-to-rest ratios and what each one trains
              description: |-
                ## Purpose
                A 20-second effort with 10 seconds rest, a 30-second sprint with four minutes rest and a four-minute effort with three minutes easy are all called HIIT, yet they train different systems and feel nothing alike. Understanding the main ratios lets you read any workout and know whether it suits your goal, rather than doing whatever the class or app serves up.

                ## Milestones
                1. A one-page summary of short sprint, short interval, long interval and circuit formats, with typical work and rest times.
                2. Each format matched to what it mainly develops: speed and power, anaerobic capacity or aerobic power.
                3. Your current weekly sessions labelled by format.
                4. One format identified that your goal needs more of, and one you can drop.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of interval formats and ratios exists, and every current session is labelled by format and purpose."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a reputable coaching guide to interval formats and rest ratios"
                - "Summarise four formats on one page with typical work and rest times"
                - "Label each of your current sessions with its format"
                - "Mark one format to add and one to drop for your goal"
            - name: Ramp warm-up for interval days
              description: |-
                ## Purpose
                Going from a cold start into an all-out first rep is how hamstrings get pulled and why the first interval often feels awful. A fixed ten-minute ramp, easy movement, joint preparation and two or three short build-ups toward session pace, makes the first rep as good as the third and takes the thinking out of the start.

                ## Milestones
                1. A ten-minute warm-up written as three stages: easy movement, joint preparation, build-ups.
                2. A version for each of your main and backup modes.
                3. The warm-up used before five consecutive interval sessions.
                4. First-rep output compared with the session average to confirm it is no longer the worst rep.

                ## Notes
                Cold weather and early mornings need a longer first stage, not a harder one.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written ten-minute ramp warm-up has been used before five sessions in a row, with first-rep output within the session's normal range."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a ten-minute warm-up with easy, mobility and build-up stages"
                - "Adapt it for your backup mode"
                - "Save it as the first card in your interval timer app"
                - "Compare first-rep output with the session average after five sessions"
            - name: Repeatable baseline interval session
              description: |-
                ## Purpose
                Without a fixed reference session you cannot tell whether a block worked or you simply had a good day. Choosing one standard session, such as eight rounds of 30 seconds hard and 90 seconds easy on your main machine, and recording output for every rep gives you a number to beat and a drop-off figure that shows fatigue resistance.

                ## Milestones
                1. One baseline protocol chosen and written with exact machine settings, work and rest times.
                2. The session completed after your standard warm-up, with output recorded for every rep.
                3. Average output and drop-off from best to worst rep calculated.
                4. Conditions recorded: time of day, last meal, sleep, so retests can match them.

                ## Notes
                Keep the protocol identical every time. Changing the damper, seat height or rest period makes old numbers useless.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A baseline session with fixed settings is recorded rep by rep, with average output and drop-off percentage calculated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a baseline protocol and write the exact machine settings"
                - "Complete it after the ramp warm-up and record every rep"
                - "Calculate average output and best-to-worst drop-off"
                - "Note sleep, meal timing and time of day beside the result"
            - name: Rep-by-rep interval session log
              description: |-
                ## Purpose
                Writing only 'did HIIT, 25 minutes' hides everything that matters: whether output held across reps, how hard it felt, and whether recovery between sessions was enough. A log with one row per rep, plus a line for effort, sleep and mood, turns a vague habit into data you can act on at the Sunday review.

                ## Milestones
                1. A log with columns for date, protocol, rep number, output, heart rate if used, and RPE.
                2. Session-level fields for sleep, soreness, last meal and notes.
                3. Two weeks of sessions entered in full.
                4. A simple chart or summary showing average output per session over time.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rep-level interval log holds at least two weeks of complete sessions and shows average output per session over time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a session log from the metrics log template"
                - "Add per-rep columns for output, heart rate and RPE"
                - "Ask the agent to add a running average of output per session"
                - "Export or back up the log from your watch or app @recurring(monthly:28)"
            - name: Hard-day cap and weekly placement
              description: |-
                ## Purpose
                The usual way people overdo intensity is not one brutal session but five medium-hard ones every week, with no day easy enough to recover from. Setting a firm cap, typically two or three genuinely hard sessions, and placing them at least 48 hours apart and away from heavy leg days, protects both the quality of the intervals and everything else in your week.

                ## Milestones
                1. A maximum number of hard sessions per week chosen for your level and written down.
                2. Hard days fixed in the calendar with at least one easier day between each.
                3. Leg strength sessions, matches or long runs placed so they do not sit the day before an interval session.
                4. One fortnight completed within the cap.

                ## Notes
                Beginners and people over 50 usually do best on two hard sessions a week. Classes that are labelled HIIT count toward the cap.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly cap on hard sessions, fixed calendar days for them, and two consecutive weeks completed without breaking the cap."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count how many hard sessions you did in each of the last two weeks"
                - "Set a weekly cap of two or three hard sessions"
                - "Block the hard days in your calendar with easy days between"
                - "Move any heavy leg session away from the day before intervals"
            - name: Interval timer presets and session cards
              description: |-
                ## Purpose
                Fiddling with a timer between reps or forgetting whether today is 30 on, 30 off or 40 on, 20 off wastes the session's focus. Saving every protocol you use as a named preset, with a short card noting settings and targets, means you start each session in under a minute and run it exactly as planned.

                ## Milestones
                1. An interval timer app or gym clock chosen and its presets understood.
                2. Every protocol in your current plan saved as a named preset including warm-up and cool-down.
                3. A one-line card per protocol with machine settings and target output.
                4. Presets checked against the written plan after the next protocol change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All current protocols are saved as named timer presets, each with a matching card stating settings and target output."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose one interval timer app and turn on audible cues"
                - "Save each current protocol as a named preset"
                - "Write a one-line card per preset with settings and targets"
                - "Delete presets you no longer use"
            - name: Two fixed interval slots each week
              description: |-
                ## Purpose
                Intervals that happen 'when there is time' tend to drift into three sessions one week and none the next. Two fixed slots, the same days and roughly the same time, take the decision out of it and make your Sunday numbers comparable from week to week.

                ## Milestones
                1. Two weekly slots chosen with at least one full day between them.
                2. Both slots blocked in your calendar for the next three months.
                3. A fallback slot agreed for weeks when one is lost.
                4. Eight consecutive weeks with both slots used or moved to the fallback.

                ## Notes
                Start from the **Habit tracker** template to mark each slot as done, moved or missed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two interval slots are blocked weekly and the habit tracker shows at least fourteen of sixteen slots completed over eight weeks."
                cadence: rolling
              tasks:
                - "Pick two days with a rest day between them and block the time"
                - "Set up a habit tracker with done, moved and missed"
                - "Agree one fallback slot for weeks that go wrong"
                - "Complete the scheduled interval session @recurring(weekly:tue,fri)"
            - name: Easy movement days between hard sessions
              description: |-
                ## Purpose
                Hard intervals give the stimulus; easy days are when the fitness actually arrives, and many HIIT fans skip them because easy feels pointless. Twenty to forty minutes of walking, easy cycling or swimming at a pace where you can chat speeds recovery and adds aerobic base without stealing from the next hard day.

                ## Milestones
                1. Easy days defined by a ceiling you can check: conversational pace or RPE 3 or below.
                2. Two or three easy sessions placed between hard days each week.
                3. Four weeks completed without an easy day turning into a hard one.
                4. Notes on whether interval quality improved after easy weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks include at least two easy sessions logged at RPE 3 or below, with none exceeding the ceiling."
                cadence: rolling
              tasks:
                - "Write your easy-day ceiling at the top of the log"
                - "Pick an easy activity you enjoy enough to repeat"
                - "Do a 30-minute easy session at chatting pace @recurring(weekly:mon,thu)"
                - "Flag any easy day that crept above RPE 3 at the weekly review"
            - name: Go, modify or swap rule for hard days
              description: |-
                ## Purpose
                Some days a hard session is exactly right and some days it only digs a deeper hole: after a broken night, with a cold, or with legs still sore from the weekend. A simple pre-session rule decided in advance, based on sleep, soreness, illness and morning pulse, removes the guesswork when you are standing next to the bike feeling flat.

                ## Milestones
                1. Three or four readiness questions written with a clear threshold for each.
                2. A rule stating when to go as planned, cut reps by a third, or swap to an easy session.
                3. An illness rule written: no hard intervals with a fever or chest symptoms.
                4. The rule used for one month, with each decision logged.

                ## Notes
                Above-the-neck cold symptoms may allow easy movement; anything in the chest, a fever or body aches means rest. Ask your doctor if unsure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written go, modify or swap rule has been applied before every hard session for one month, with each decision recorded."
                cadence: rolling
              tasks:
                - "Write four readiness questions with a threshold for each"
                - "Define what a modified session looks like for your main protocol"
                - "Check morning resting pulse against your usual range @recurring(weekly:tue,fri)"
                - "Log the go, modify or swap decision with each session"
            - name: Sunday interval numbers review
              description: |-
                ## Purpose
                Ten minutes each Sunday, looking at average output, drop-off, effort ratings and how many hard days actually happened, is enough to spot a stall or creeping fatigue a fortnight before it becomes a lost month. A log nobody reads changes nothing.

                ## Milestones
                1. A short review checklist: sessions done, average output, drop-off, RPE trend, sleep.
                2. A weekly line in the log with one observation and one adjustment.
                3. Eight reviews completed in a row.
                4. At least one change to the plan made because of what a review showed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews are written in the log, each with an observation and an adjustment."
                cadence: rolling
              tasks:
                - "Write a five-line weekly review checklist"
                - "Review the week's interval numbers and write one adjustment @recurring(weekly:sun)"
                - "Highlight any week with more hard sessions than your cap"
                - "Carry each adjustment into next week's calendar"
            - name: Four-week protocol rotation
              description: |-
                ## Purpose
                Running the same 30-second protocol twice a week for six months stops producing much, but changing everything every session means nothing gets better either. One main protocol for four weeks, progressed, then a rotation to a different format keeps adaptation going and boredom away.

                ## Milestones
                1. A rotation of three or four protocols chosen to suit your goal.
                2. A progression rule for each: one extra rep, five more seconds, or slightly shorter rest each week.
                3. The current protocol and week number shown in the log.
                4. Two full rotations completed with outputs recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written rotation of at least three protocols with progression rules, and two four-week blocks completed and logged."
                cadence: cyclic
              tasks:
                - "Choose three protocols that fit your main goal"
                - "Write a weekly progression rule for each"
                - "Switch to the next protocol in the rotation @recurring(monthly:3)"
                - "Note which protocol produced the biggest gain"
            - name: Monthly baseline session retest
              description: |-
                ## Purpose
                Retesting too often adds a hard day you did not need, and too rarely means a stalled block goes unnoticed for a season. Repeating the baseline session once a month, under the same conditions, gives a clean progress line and an early warning when output or drop-off moves the wrong way.

                ## Milestones
                1. A monthly retest day fixed in place of one normal interval session.
                2. Conditions matched to the original baseline: settings, warm-up, time of day.
                3. Average output and drop-off charted month by month.
                4. A rule written for what two flat or falling months in a row will trigger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly retests of the baseline session are logged with matching conditions and charted against the original result."
                cadence: rolling
              tasks:
                - "Copy the baseline settings and conditions onto a retest card"
                - "Replace one interval session with the baseline retest @recurring(monthly:17)"
                - "Chart average output and drop-off against previous months"
                - "Write what you will change if two retests in a row stall"
            - name: Cool-down and refuel routine after intervals
              description: |-
                ## Purpose
                Stopping dead after the last rep and rushing to the car leaves some people light-headed, and skipping food afterward makes the next session worse. A five-minute easy cool-down, a drink, and a planned meal or snack within a couple of hours closes each session the same way and supports the next one.

                ## Milestones
                1. A five-minute easy cool-down added to the end of every timer preset.
                2. A drink and a simple post-session food option kept where you train.
                3. Notes on light-headedness, nausea or a long-lasting heavy feeling after sessions.
                4. Any persistent symptoms raised with your doctor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every logged session for a month ends with a recorded cool-down, and any repeated post-session symptoms have been noted and discussed."
                cadence: rolling
              tasks:
                - "Add a five-minute easy cool-down to each timer preset"
                - "Keep a water bottle and a simple snack in your training bag"
                - "Note any dizziness or nausea after sessions in the log"
                - "Book a doctor's appointment if symptoms repeat"
            - name: Food timing around interval sessions
              description: |-
                ## Purpose
                Hard intervals on a full stomach make people sick, and intervals after a long fast often fade by rep four. Finding the gap between your last meal and your session, and what kind of food sits well, is personal and worth testing deliberately rather than learning by being sick in the gym toilets.

                ## Milestones
                1. Meal timing and content recorded before ten interval sessions.
                2. Sessions where you felt sick or faded early matched to what you ate and when.
                3. A personal rule for the minimum gap and the foods that sit well.
                4. A dietitian consulted first if you have diabetes, an eating disorder history or another medical reason.

                ## Notes
                This project organises your own observations. For specific nutrition targets, speak to a registered dietitian.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten sessions are logged with meal timing, and a personal pre-session food rule is written in the log."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add a last meal and time column to your session log"
                - "Record what you ate before your next ten sessions"
                - "Match sick or faded sessions to meal timing"
                - "Write your personal pre-session food rule"
            - name: Quarterly conditioning block plan
              description: |-
                ## Purpose
                Without a plan, conditioning drifts toward whatever hurts most rather than what your goal needs. A one-page plan every quarter, naming the main protocols, the weekly hard-day count, a lighter week and the retest dates, keeps intervals pointed at something and makes it obvious when life has pushed you off course.

                ## Milestones
                1. A one-page plan for the next twelve weeks with protocols, hard-day count and retest dates.
                2. One lighter week scheduled roughly every fourth week.
                3. Known disruptions such as holidays or busy work weeks marked in advance.
                4. The previous quarter's results summarised in three lines before the next plan is written.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page twelve-week conditioning plan exists for the current quarter, with lighter weeks and retest dates marked."
                cadence: cyclic
              tasks:
                - "Summarise last quarter's interval results in three lines"
                - "Draft the next twelve weeks on one page @recurring(quarterly)"
                - "Mark holidays and busy weeks before choosing lighter weeks"
                - "Put the retest dates in your calendar"
            - name: True Tabata at genuine all-out effort
              description: |-
                ## Purpose
                Most classes call any 20 seconds on, 10 seconds off circuit Tabata, yet the original protocol was done on a bike, for just four minutes, at an intensity well above what most people reach. Learning what the real thing involves, and when a gentler 20/10 circuit is more sensible, helps you choose honestly instead of doing a moderate circuit and wondering why it feels easy.

                ## Milestones
                1. The original protocol's work, rest, rounds and intensity summarised from a reliable source.
                2. The difference between true Tabata and a 20/10 circuit written in two sentences.
                3. Two sessions of genuine 20/10 on a bike completed with output per round recorded.
                4. A decision on whether it fits your goal and readiness, or whether a gentler format suits better.

                ## Notes
                Genuine all-out efforts are not where beginners or anyone with a cardiac history should start.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the original protocol and two logged 20/10 bike sessions, ending in a recorded keep or drop decision."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a reliable summary of the original 20/10 study protocol"
                - "Write the difference from a class circuit in two sentences"
                - "Do two 20/10 bike sessions and record output for each round"
                - "Decide whether to keep it in your rotation"
            - name: EMOM and AMRAP conditioning circuits
              description: |-
                ## Purpose
                Every minute on the minute and as many rounds as possible are the two formats most circuit sessions are built from, and both go wrong in predictable ways: EMOMs packed so full there is no rest, AMRAPs started at a pace you cannot hold. Learning to set the work so rest actually exists, and to pace an AMRAP evenly, makes these sessions conditioning rather than a scramble.

                ## Milestones
                1. An EMOM written where work takes 35 to 45 seconds of each minute.
                2. A 12-minute AMRAP completed with the round time noted for each round.
                3. Round times within a few seconds of each other on a repeat attempt.
                4. Two personal EMOM and two AMRAP templates saved for the rotation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four saved circuit templates exist, and a repeat 12-minute AMRAP shows round times within ten seconds of each other."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write an EMOM with work lasting about 40 seconds per minute"
                - "Do a 12-minute AMRAP and note the time of each round"
                - "Repeat the AMRAP aiming for even round times"
                - "Save two EMOM and two AMRAP templates to your timer"
            - name: Norwegian 4x4 intervals for aerobic power
              description: |-
                ## Purpose
                Four rounds of four minutes hard with three minutes active recovery is one of the best-studied interval formats for raising aerobic fitness, and it suits people who dislike all-out sprints. Learning to hold the hard minutes at a strong but sustainable effort, rather than sprinting the first minute, is the skill that makes it work.

                ## Milestones
                1. Target effort for the hard minutes set as RPE 8 to 9, or heart rate guidance agreed if you use it.
                2. One full 4x4 completed with output recorded minute by minute.
                3. A session where the fourth interval's output matched the first.
                4. Six weeks of one 4x4 per week completed and compared with the baseline session.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six weekly 4x4 sessions are logged, with at least one showing the fourth interval within five percent of the first."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set your 4x4 effort target in RPE or heart rate"
                - "Do one 4x4 recording output for every minute"
                - "Pace the first hard minute deliberately below your best"
                - "Compare your baseline retest after six weekly 4x4 sessions"
            - name: Short sprint intervals on an air bike
              description: |-
                ## Purpose
                Sprint interval training, a handful of efforts of 10 to 30 seconds with long full recoveries, takes very little total time but is genuinely maximal and needs proper rest to work. An air bike or a fan bike is the safest place to learn it, because there is no ground impact and no risk of falling at top speed.

                ## Milestones
                1. A protocol written with 4 to 6 efforts of 10 to 20 seconds and at least two minutes easy between each.
                2. Peak and average power recorded for every sprint.
                3. Rest extended whenever output drops more than 15 percent from the first sprint.
                4. Four sessions logged, with peak power compared across them.

                ## Notes
                Only take this on after the readiness check is clear and you have several weeks of regular intervals behind you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four sprint interval sessions are logged with peak and average power per sprint and full recovery between efforts."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a sprint protocol with long full recoveries"
                - "Set a timer preset with two-minute easy spins between sprints"
                - "Record peak and average power for every sprint"
                - "Stop the session when output falls more than 15 percent"
            - name: Pacing repeats so the last rep matches the first
              description: |-
                ## Purpose
                The commonest interval mistake is a heroic first rep followed by a slow collapse, which delivers less total work than an even effort. Practising a set pace, slightly below your best for the first two reps, and aiming for the final rep to match or beat them, raises the quality of every session you do.

                ## Milestones
                1. A target output per rep set at about 95 percent of your best single rep.
                2. Three sessions completed with the first two reps held deliberately at target.
                3. Drop-off from best to worst rep reduced compared with the baseline.
                4. A pacing note added to each saved session card.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three logged sessions show best-to-worst drop-off lower than the baseline session's figure."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Calculate a per-rep target at 95 percent of your best rep"
                - "Hold the first two reps exactly at target next session"
                - "Compare drop-off with your baseline figure"
                - "Add a pacing note to each session card"
            - name: Recovering between reps with breathing and posture
              description: |-
                ## Purpose
                What you do in the 60 seconds between efforts decides how much of the next rep you can give. Walking or spinning easily, standing tall rather than folding over a bar, and slowing the breath on purpose bring heart rate and breathing down faster, which shows up as better output late in the session.

                ## Milestones
                1. An active recovery default chosen for each mode: easy spin, walk or slow row.
                2. A breathing pattern practised for the rest periods, such as long exhales.
                3. Two sessions compared, one with deliberate recovery and one without.
                4. Recovery heart rate or RPE at the end of each rest noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two comparable sessions are logged with and without deliberate recovery, and the effect on late-rep output is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose an active recovery for each mode you use"
                - "Practise long slow exhales during the next session's rests"
                - "Compare late-rep output with and without deliberate recovery"
                - "Write your recovery routine on the session card"
            - name: Equipment-free bodyweight conditioning circuit
              description: |-
                ## Purpose
                Floor space alone is enough for a proper session if you have a circuit ready, so a hotel room, a living room or a park still counts. Building one around movements you can do with good form, such as squats, step-back lunges, mountain climbers and burpees, with easier and harder versions of each, gives you a session that works on every level of energy.

                ## Milestones
                1. Five or six movements chosen that need no kit and suit your joints.
                2. An easier and a harder version written for each movement.
                3. The circuit timed as a 15 to 20 minute session with set work and rest.
                4. Three runs of it logged with rounds completed and version used.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written equipment-free circuit with scaled versions of each movement has been completed and logged three times."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List six no-kit movements you can do with good form"
                - "Write an easier and harder version of each"
                - "Set the circuit up as a timer preset"
                - "Log rounds and versions for your first three runs"
            - name: Landing and jumping mechanics for plyometric circuits
              description: |-
                ## Purpose
                Jump squats, skater hops and burpee jumps are a staple of conditioning circuits, and repeated stiff, noisy landings with knees caving in are a common route to shin and knee pain. Learning to land quietly, knees tracking over toes, and keeping jump volume sensible lets you keep these movements without paying for them later.

                ## Milestones
                1. Landing basics practised: soft, quiet, hips back, knees over toes.
                2. A filmed set of jump squats reviewed from the front and side.
                3. A cap on total jumps per session written for your current level.
                4. A low-impact swap chosen for every jumping movement in your circuits.

                ## Notes
                Hard floors and worn trainers make landings harsher. Train on a mat or sprung floor where you can.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A filmed landing check has been reviewed, a per-session jump cap is written, and every jump in your circuits has a low-impact swap."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Practise ten quiet landings from a small hop"
                - "Film a set of jump squats from the front and side"
                - "Set a total jump cap per session for your level"
                - "Write a low-impact swap for each jumping movement"
            - name: Low-impact interval options for sore joints
              description: |-
                ## Purpose
                Knee, hip or ankle niggles do not have to stop interval training, but they usually mean changing the mode rather than pushing through. A short menu of low-impact options, cycling, rowing, ski erg, pool intervals, incline walking, with a matching protocol for each, keeps conditioning going while a joint settles.

                ## Milestones
                1. Four low-impact modes listed with where you can access each.
                2. One protocol written for each, matched in effort to your usual session.
                3. Each tried once with joint comfort rated during and the next day.
                4. A rule for when joint pain means seeing a physiotherapist rather than switching mode.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written menu of four low-impact interval modes with a protocol each, all tested once and rated for next-day joint comfort."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List four low-impact modes you can get to"
                - "Write a matching protocol for each"
                - "Try each once and rate joint comfort the next morning"
                - "Write when pain means booking a physiotherapist instead"
            - name: Pulling back from HIIT every day
              description: |-
                ## Purpose
                Daily high-intensity sessions, often a different class or app workout each day, are a fast route to flat performance, poor sleep, nagging injuries and dread before training. If you recognise that pattern, cutting back to a capped number of hard days and filling the gaps with easy work usually brings output and enthusiasm back within a few weeks.

                ## Milestones
                1. The last four weeks counted: hard, moderate and easy sessions.
                2. Warning signs listed honestly: rising resting pulse, poor sleep, falling output, aches, low mood.
                3. A three-week reset plan with two hard sessions a week and easy days between.
                4. Baseline session retested at the end of the reset and compared.

                ## Notes
                If fatigue, low mood or sleep problems persist after easing off, speak to your doctor. These can have causes other than training.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A three-week reset with no more than two hard sessions a week is completed, followed by a baseline retest compared with the previous result."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Count hard, moderate and easy sessions in the last four weeks"
                - "Write down which warning signs you have noticed"
                - "Plan three weeks with two hard sessions a week"
                - "Count the past month's hard sessions against your cap @recurring(monthly:10)"
            - name: Where intervals fit in a fat-loss plan
              description: |-
                ## Purpose
                Interval sessions burn fewer calories than people expect, and two hard sessions a week will not outrun eating patterns or a mostly seated day. Seeing HIIT as one part of a plan, alongside daily steps, food habits and strength work, sets realistic expectations and stops the trap of adding more intensity when the scales stall.

                ## Milestones
                1. Current weekly steps, interval sessions and strength sessions written down.
                2. A realistic weekly picture agreed: interval sessions capped, steps and strength given equal weight.
                3. A non-scale measure chosen alongside weight, such as waist or how clothes fit.
                4. Support from a doctor or registered dietitian arranged if you have significant weight to lose or a medical condition.

                ## Notes
                This project organises the plan. Agree any weight target and eating changes with a qualified professional.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written weekly fat-loss plan that caps interval sessions and includes steps, strength work and one non-scale measure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your current steps, interval and strength sessions"
                - "Draft a weekly plan with capped intervals and a daily step target"
                - "Choose one non-scale measure to track"
                - "Record your weekly average step count @recurring(weekly:mon)"
            - name: Group HIIT class or self-coached intervals
              description: |-
                ## Purpose
                Studio HIIT classes offer energy, accountability and coaching, but the programming is shared and the intensity often runs higher and more often than your plan wants. Comparing a membership against self-coached sessions on cost, travel time, quality of coaching and fit with your hard-day cap gives you an answer you will not regret at renewal.

                ## Milestones
                1. Two or three local class options and a self-coached option listed with monthly cost.
                2. One trial class attended at each shortlisted studio.
                3. Each option scored on coaching, scaling, fit with your cap and travel time.
                4. A decision recorded with a date to review it.

                ## Notes
                Start from the **Purchase decision** template. Ask how often the class programme repeats formats and whether coaches will scale for you.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between class membership and self-coached intervals, with each option scored on the same four criteria."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List local class options and their monthly prices"
                - "Book a trial class at the top two studios"
                - "Score each option on coaching, scaling, fit and travel time"
                - "Check attendance against the membership cost @recurring(quarterly)"
            - name: Measuring intervals by heart rate, power or feel
              description: |-
                ## Purpose
                Heart rate lags behind short efforts, so it is a poor guide for 30-second reps but useful for four-minute intervals; power and pace respond instantly but need the right machine. Choosing what you will measure, and for which protocols, avoids chasing a heart rate number that cannot possibly respond in the time available.

                ## Milestones
                1. Each current protocol labelled with the measure that suits it: power, pace, heart rate or RPE.
                2. Any device needed, such as a chest strap, priced or ruled out.
                3. Heart rate readings checked for accuracy against a second source if you rely on a wrist sensor.
                4. The chosen measures written on each session card.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every protocol in the rotation has a named primary measure written on its session card, with any device decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Label each protocol with the measure that suits its length"
                - "Compare wrist and chest strap readings in one session"
                - "Decide whether a chest strap is worth buying"
                - "Replace the chest strap battery and check the pairing @recurring(yearly)"
            - name: Replacing random circuits with planned intervals
              description: |-
                ## Purpose
                Doing a different app workout every day feels varied but makes it impossible to know whether anything is improving. Swapping random sessions for the planned rotation, while keeping one free-choice session a fortnight for fun, gives you progress you can measure without losing the enjoyment.

                ## Milestones
                1. Last month's sessions listed and marked planned or random.
                2. Random sessions replaced by protocols from the rotation.
                3. One free-choice session every two weeks kept deliberately.
                4. Four weeks completed with baseline output compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four weeks of mostly planned sessions are logged, with no more than two free-choice sessions and a before and after baseline comparison."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark last month's sessions as planned or random"
                - "Replace random sessions with rotation protocols for four weeks"
                - "Pick one free-choice session every second week"
                - "Compare baseline output before and after the four weeks"
            - name: Diagnosing the session that always fades
              description: |-
                ## Purpose
                If one session type always falls apart after the third or fourth rep, the cause is usually one of a few things: rest too short for the effort, a first rep that is too fast, poor food timing, or accumulated fatigue from earlier in the week. Working through them one at a time finds the cause instead of blaming fitness.

                ## Milestones
                1. The fading session identified and its last four attempts pulled from the log.
                2. Pacing, rest length, food timing and previous-day load checked for each attempt.
                3. One variable changed at a time over the next three attempts.
                4. The cause recorded with the fix written on the session card.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The cause of a repeatedly fading session is identified by changing one variable at a time, and the fix is written on its session card."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the last four attempts at the fading session from the log"
                - "Ask the agent to compare pacing, rest, food timing and prior load"
                - "Change one variable for the next attempt"
                - "Write the confirmed fix on the session card"
            - name: Running intervals and lifting in the same week
              description: |-
                ## Purpose
                Hard conditioning and heavy strength work compete for the same recovery, and badly placed intervals can stall your squat or deadlift. Separating them by six hours or more, putting the priority first in the day or week, and choosing cycling over running for intervals when legs matter most lets you keep both moving.

                ## Milestones
                1. Your priority for the next block chosen: strength or conditioning.
                2. A weekly schedule with heavy leg days and hard intervals separated by at least a day where possible.
                3. Same-day sessions ordered with the priority first and several hours between.
                4. Six weeks of lifts and interval output both tracked without either falling.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written weekly schedule separating heavy legs and hard intervals, with six weeks of lifts and interval output both holding or improving."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose strength or conditioning as this block's priority"
                - "Separate heavy leg days and hard intervals in the weekly plan"
                - "Order any same-day sessions with the priority first"
                - "Check both lift numbers and interval output at week six"
            - name: First six-week interval block
              description: |-
                ## Purpose
                For someone new to intervals, six weeks of two sessions a week on one mode, starting gently and building reps or shortening rest each week, is enough to feel a clear difference and prove the habit fits. Treating it as a block with a start date, a finish date and a retest gives it the shape that open-ended plans lack.

                ## Milestones
                1. A six-week plan written: weeks one and two easier, three to five progressing, six a lighter week with a retest.
                2. Start date set and every session in the calendar.
                3. At least ten of twelve sessions completed and logged.
                4. Baseline retest done in week six and compared with the starting result.

                ## Notes
                Start with fewer reps than you think you can manage. The block works by finishing it, not by winning week one.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Ten of twelve planned sessions are logged within six weeks and the week-six baseline retest is compared with the starting result."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a six-week plan with a lighter retest week at the end"
                - "Put all twelve sessions in the calendar"
                - "Add one rep or cut rest by five seconds each progressing week"
                - "Retest the baseline session in week six"
            - name: Eight-week pre-season conditioning block
              description: |-
                ## Purpose
                Players who turn up to the first training of the season unfit spend the first month sore, slow and at risk of soft-tissue injury. Eight weeks of conditioning that builds from aerobic intervals toward short repeated efforts like the sport demands means you arrive able to train fully from day one.

                ## Milestones
                1. The first training or fixture date fixed as the end point.
                2. Weeks one to three built on longer aerobic intervals, weeks four to seven on shorter repeated efforts.
                3. A sport-relevant test done in week one and week eight.
                4. The final week lighter so you start the season fresh.

                ## Notes
                Ask your club's coach which tests they use, so your numbers line up with theirs.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An eight-week block is completed before the first training date, with a sport-relevant test recorded in week one and week eight."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find the date of your first pre-season training"
                - "Ask your coach which fitness tests the club uses"
                - "Plan three aerobic weeks, four repeated-effort weeks and a light week"
                - "Do the club's test in week one and again in week eight"
            - name: End-of-block retest and debrief
              description: |-
                ## Purpose
                Ending a block without a debrief means the next one repeats the same mistakes. A retest under baseline conditions, a look back at attendance, readiness decisions and any niggles, and three written lessons turns each block into a better starting point for the next.

                ## Milestones
                1. Baseline session retested under matching conditions.
                2. Attendance, number of modified sessions and any pain noted for the block.
                3. Three lessons written: one to keep, one to change, one to try.
                4. The lessons carried into the next quarterly plan.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written debrief with retest results, attendance figures and three lessons exists and is referenced in the next block plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Retest the baseline session under matching conditions"
                - "Count attendance and modified sessions for the block"
                - "Ask the agent to summarise the block log into three lessons"
                - "Copy the lessons into the next quarterly plan"
            - name: Conditioning challenge day with friends or your gym
              description: |-
                ## Purpose
                Months of interval training benefit from a dated target and a reason to bring other people in: a 100-burpee test, a 2,000-calorie team bike relay or a charity rowing event. Picking one, preparing for it over eight weeks and recording the result makes a fitness milestone you can look back on.

                ## Milestones
                1. One challenge chosen with a date at least eight weeks away.
                2. A trial of a scaled version done to set a target.
                3. Training adjusted so two of the weekly interval sessions build toward the challenge.
                4. The challenge completed and the result recorded with who took part.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A conditioning challenge is completed on its planned date, with the result and participants recorded in the log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a challenge and set a date eight or more weeks away"
                - "Invite friends or gym mates to join"
                - "Do a scaled trial and set a target"
                - "Record the result and the team on the day"
            - name: Four-week lunchtime interval challenge at work
              description: |-
                ## Purpose
                Colleagues who would never join a class will often try a short, opt-in challenge of two 20-minute sessions a week in a meeting room, car park or nearby gym. Running it with clear scaling, a readiness questionnaire and no leaderboards for weight keeps it inclusive and safe.

                ## Milestones
                1. Permission and a space agreed with your manager or facilities team.
                2. A sign-up note with a readiness questionnaire and a no-pressure scaling message.
                3. Eight sessions delivered over four weeks with attendance noted.
                4. Feedback gathered and a decision made on whether to continue.

                ## Notes
                Keep it about attendance and enjoyment. Leading others does not make you responsible for their medical clearance, so ask everyone to complete the questionnaire themselves.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Eight lunchtime sessions are delivered over four weeks, with attendance recorded and a continue or stop decision made."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your manager about a space and a lunchtime slot"
                - "Ask the agent to draft a friendly sign-up note with scaling options"
                - "Write two scalable 20-minute session plans"
                - "Collect feedback after week four"
            - name: Fifteen-minute home intervals for busy parents
              description: |-
                ## Purpose
                With small children, a 45-minute gym trip is often impossible, but fifteen minutes in the living room during a nap or after bedtime usually is. A short, quiet session with no jumping that wakes anyone, ready to start in under a minute, keeps parents training through the years when time is the scarcest thing they have.

                ## Milestones
                1. Two quiet fifteen-minute sessions written with low-noise movements.
                2. A spot at home cleared where you can start without moving furniture.
                3. Two sessions a week completed for four weeks around nap or bedtime.
                4. A backup plan for weeks when illness or night feeds take over.

                ## Notes
                Postnatal parents should follow their own clinician's guidance on returning to impact and high-intensity work first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two quiet fifteen-minute home sessions are written and at least seven of eight planned sessions are logged over four weeks."
                cadence: rolling
              tasks:
                - "Write two fifteen-minute sessions with no jumping"
                - "Clear a training spot that needs no setting up"
                - "Do a fifteen-minute session after bedtime @recurring(weekly:mon,wed)"
                - "Decide what counts as enough in a week of broken nights"
            - name: Interval training around rotating shifts
              description: |-
                ## Purpose
                Shift workers face a moving target: hard sessions after a night shift feel terrible and can wreck the sleep they need. Planning interval slots each time the rota comes out, putting them on days off or before early shifts and never straight after nights, keeps training consistent without fighting your body clock.

                ## Milestones
                1. Rules written for which shift patterns allow a hard session and which only allow easy work.
                2. Interval slots planned for the whole rota period as soon as it is published.
                3. A short version of each protocol for days with less time.
                4. Two rota cycles completed with session timing and sleep noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Interval slots are planned for two full rota cycles under written shift rules, with sleep logged around every hard session."
                cadence: rolling
              tasks:
                - "Write which shifts allow hard, easy or no training"
                - "Plan this rota's interval slots when it is published @recurring(monthly:20)"
                - "Write a short version of each protocol for tight days"
                - "Note sleep before and after each hard session"
            - name: Starting intervals after 50 or a long break
              description: |-
                ## Purpose
                Intervals suit older adults well, with good evidence for heart and lung fitness, but tendons, joints and recovery need a gentler start than a 25-year-old's programme. Beginning with longer, moderate intervals on a bike or rower, two sessions a week and more easy days, lets you build the base that harder sessions later rely on.

                ## Milestones
                1. The readiness check completed and any clinician advice recorded.
                2. A starting protocol of moderate intervals, such as one minute brisk and two minutes easy, on a low-impact machine.
                3. Six weeks of two sessions completed with no lingering joint pain.
                4. A decision on whether and how to progress toward harder efforts.

                ## Notes
                Recovery between hard sessions often takes longer after 50. Two days between hard sessions is a sensible default.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six weeks of twice-weekly moderate intervals are logged on a low-impact machine, ending in a written progression decision."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Complete the readiness questionnaire before the first session"
                - "Choose a low-impact machine you can reach twice a week"
                - "Start with one minute brisk and two minutes easy for 20 minutes"
                - "Decide on progression after six weeks"
            - name: Joint-friendly intervals while carrying extra weight
              description: |-
                ## Purpose
                Burpees, jumping and running sprints place a lot of load through knees and ankles when you are carrying extra weight, and the soreness that follows makes people give up. Building intervals around cycling, incline walking, rowing or water, where the effort is real but the impact is low, gives the same fitness benefit without the setback.

                ## Milestones
                1. Two low-impact modes chosen that feel comfortable for at least ten minutes.
                2. A walking or cycling interval protocol written, such as two minutes brisk incline and two minutes easy.
                3. Four weeks completed without joint pain the following day.
                4. Progress measured by distance, output or a non-scale measure rather than weight alone.

                ## Notes
                If you have joint pain, diabetes or a heart condition, agree the starting plan with your doctor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four weeks of low-impact interval sessions are logged without next-day joint pain, with output or distance tracked weekly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Try cycling, incline walking and rowing for ten minutes each"
                - "Write a two minutes brisk, two minutes easy protocol"
                - "Rate joint comfort the morning after each session"
                - "Measure your waist and note how clothes fit @recurring(monthly:8)"
            - name: Exercise snacks for long desk days
              description: |-
                ## Purpose
                On days when a full session will not happen, a few very short bursts, such as a brisk climb of three flights of stairs or twenty fast chair-stands, spread through the day still raise heart rate and break up long sitting. They are not a replacement for planned intervals, but they keep the habit alive on the worst days.

                ## Milestones
                1. Three exercise snack options chosen that fit your building and clothing.
                2. Snack times attached to existing cues such as coffee breaks or the end of meetings.
                3. Three snacks done on at least four days a week for a month.
                4. A note on whether snacks helped energy or interval output.

                ## Notes
                Start from the **Habit tracker** template if you want to tick off each day.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three exercise snacks are logged on at least four days a week for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Find a staircase or space you can use during the work day"
                - "Choose three snacks lasting under a minute each"
                - "Do three exercise snacks between meetings @recurring(daily)"
                - "Note any change in afternoon energy after a month"
            - name: Hotel room and travel interval sessions
              description: |-
                ## Purpose
                Travel weeks often wipe out training because the hotel gym is a single treadmill and a bent dumbbell. Having two short sessions ready that need only floor space, plus one for whatever cardio machine turns up, means a work trip or holiday costs you nothing more than a slightly different week.

                ## Milestones
                1. Two floor-space-only sessions written that are quiet enough for a hotel room.
                2. One flexible protocol written for any treadmill, bike or rower.
                3. The sessions saved on your phone with timer presets.
                4. One trip completed with at least two sessions done.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three travel sessions are saved on your phone and at least two were completed during your next trip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write two quiet floor-only interval sessions"
                - "Write one protocol that works on any cardio machine"
                - "Save all three as presets on your phone"
                - "Pack trainers and a skipping rope for the next trip"
            - name: VO2max intervals for runners, cyclists and rowers
              description: |-
                ## Purpose
                Endurance athletes who already train mostly easy often benefit from one well-placed session of three to five minute intervals near maximal aerobic effort each week. Getting the dose right, enough reps to accumulate 12 to 20 minutes of hard work without wrecking the next key session, is what separates useful intervals from fatigue.

                ## Milestones
                1. One weekly slot chosen that does not clash with the long session or race-specific work.
                2. A protocol set, such as five reps of four minutes with equal easy recovery.
                3. Target pace or power taken from a recent test, not guessed.
                4. Six weeks completed with time trial or test results compared before and after.

                ## Notes
                Keep this to one session a week inside an otherwise easy programme. More rarely helps.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six weekly VO2max sessions are logged with paces or power from a recent test, and a before and after test result is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a weekly slot away from your long session"
                - "Set rep targets from a recent test result"
                - "Do five reps of four minutes with equal easy recovery"
                - "Compare a test result before and after six weeks"
            - name: Repeated sprint ability for field and court sports
              description: |-
                ## Purpose
                Football, rugby, hockey and court sports are decided by how well you can sprint again after a short recovery, late in the game. Repeated sprint training, sets of six short sprints with brief recoveries, measured by how much your times slow across the set, trains exactly that quality in a way steady running never will.

                ## Milestones
                1. A repeated sprint test set: for example six sprints of 30 metres starting every 20 seconds.
                2. Best time, average time and percentage decrement recorded.
                3. A weekly repeated sprint session added for six weeks, away from match days.
                4. The test repeated and decrement compared.

                ## Notes
                Sprint only after a full warm-up and on a surface you know. Hamstrings are the usual casualty of rushed sprint work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A repeated sprint test is recorded before and after six weekly sessions, with the decrement percentage compared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure out a 30 metre lane on a safe surface"
                - "Run the six-sprint test and record every time"
                - "Calculate best, average and decrement"
                - "Retest after six weeks of weekly sessions"
            - name: Session RPE load tracking across a block
              description: |-
                ## Purpose
                Multiplying each session's overall effort rating by its minutes gives a simple training load number that coaches in many sports use to spot sudden spikes. Tracking it weekly shows when a week jumped far above the previous month's average, which is often when fatigue, illness or niggles follow.

                ## Milestones
                1. Session RPE recorded thirty minutes after every session, interval and otherwise.
                2. Weekly load calculated as the sum of RPE times minutes.
                3. Each week compared with the average of the previous four.
                4. A personal rule set for what size of jump triggers an easier week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of session RPE load are logged, each compared with the previous four-week average, with a written spike rule."
                cadence: rolling
              tasks:
                - "Add a session RPE and minutes column to your log"
                - "Rate every session thirty minutes after finishing"
                - "Total the week's session load and compare with the last month @recurring(weekly:mon)"
                - "Write the jump size that triggers an easier week"
            - name: Designing your own twelve-week conditioning programme
              description: |-
                ## Purpose
                Once you understand the formats, your own numbers and how you recover, the next step is writing a programme for yourself rather than borrowing one. Twelve weeks in three phases, with a clear goal, a progression rule, planned lighter weeks and retests, is the specialist skill that ties the whole area together.

                ## Milestones
                1. A goal and a test chosen for the end of week twelve.
                2. Three four-week phases written, each with a main protocol and progression rule.
                3. Lighter weeks and retest days placed before training starts.
                4. The programme completed with a final test and written review.

                ## Notes
                Start from the **Training program** template. Plan the lighter weeks first, then fill in the hard ones.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written twelve-week programme with three phases, lighter weeks and retests exists before week one, and a final test result is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set the goal and the week-twelve test"
                - "Ask the agent to draft three four-week phases from your log"
                - "Place lighter weeks and retest days before filling hard sessions"
                - "Review progress at the end of each four-week phase @recurring(monthly:24)"
---

# HIIT & Metabolic Conditioning

This area is for anyone using short, hard efforts to get fitter, lose fat or build the work capacity a sport demands, from the person doing their first bike intervals to the field-sport player preparing for pre-season. It starts with foundations (a readiness check, a goal, a mode, an effort scale and a repeatable baseline session), moves through the weekly machinery and the protocols worth learning properly, then covers the decisions, dated blocks, life situations and the specialist work of designing your own conditioning programme.

The rhythm is two fixed interval slots a week with easy days between them, a Sunday look at the numbers, a monthly protocol rotation and baseline retest, and a quarterly block plan. The **Metrics log**, **Habit tracker**, **Purchase decision** and **Training program** templates pair with the session log, the weekly slots, the class decision and the twelve-week programme. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
