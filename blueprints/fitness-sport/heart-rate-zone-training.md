---
id: fitness-sport.heart-rate-zone-training
name: Heart Rate Zone Training
description: "Heart rate zones you can trust, from sensor choice and threshold test to one model on every device, with weekly intensity checks, monthly aerobic benchmarks and base blocks for running, cycling, swimming and rowing."
category: personal
version: 1.0.0
tags: [fitness-sport, heart-rate-zone-training, athlete, everyone, zone-2, aerobic-base, heart-rate-monitor, endurance]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - habit-tracker
    - training-program
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Heart Rate Zone Training
          description: "Using heart rate zones and easy aerobic base building to improve endurance across running, cycling, swimming and rowing."
          projects:
            - name: Choosing between a chest strap and a wrist sensor
              description: |-
                ## Purpose
                Wrist optical sensors are convenient but often lag at the start of intervals, read poorly in the cold and can lock onto running cadence, producing a smooth line at 165 that has nothing to do with your heart. A chest strap measures the electrical signal directly and is still the reference most coaches trust for zone work. Deciding which sensor you will train with, and for which sports, comes before any zone is worth setting.

                ## Milestones
                1. Your sports and the watch or bike computer each sensor would pair with listed.
                2. Two or three sensors compared on accuracy, connection type (Bluetooth, ANT+ or both), water use and comfort.
                3. One sensor chosen for zone work, with the reason written in a sentence.
                4. The sensor bought or borrowed and paired to your main device.

                ## Notes
                Start from the **Purchase decision** template. If you swim, check whether the strap stores data underwater, because a live signal rarely reaches the watch through water.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One heart rate sensor chosen for zone training, recorded with its model and the reason, and paired to your main training device."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the sports you train and the watch or computer you use for each"
                - "Compare three sensors on accuracy, connection type and water use"
                - "Read two independent accuracy reviews of your shortlisted sensor"
                - "Buy or borrow the sensor and pair it with your main device"
            - name: Heart rate data quality check
              description: |-
                ## Purpose
                Before trusting any zone, it is worth knowing your sensor tells the truth. Dry strap contacts, a loose watch band, synthetic tops on a dry day and weak batteries all produce spikes to 200 in the first ten minutes or flat lines mid-session. Two side-by-side sessions and a short routine catch these faults while they are still easy to fix.

                ## Milestones
                1. One easy session recorded with a chest strap and a wrist sensor at the same time.
                2. The two traces compared for spikes, dropouts and lag at the start of efforts.
                3. A pre-session routine written: moisten the contacts, snug the strap, check the battery.
                4. A rule noted for ignoring clearly faulty data rather than letting it set your zones.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two sensors compared on the same session, with a written pre-session routine and a rule for handling faulty heart rate data."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Wear both sensors on one easy session and save both files"
                - "Overlay the two traces and mark any spikes or dropouts"
                - "Write a three-step strap routine to follow before each session"
                - "Decide how you will flag sessions with faulty heart rate data"
            - name: Two-week resting heart rate baseline
              description: |-
                ## Purpose
                Resting heart rate is one half of the heart rate reserve calculation and a useful marker of aerobic change over months. A single morning reading is noisy, so fourteen mornings measured the same way, lying still before getting up, give a number you can build zones on. Doing it during a normal training fortnight, not after a race or an illness, keeps the baseline honest.

                ## Milestones
                1. One measuring method chosen: a timed minute on waking, or the overnight lowest value from your watch.
                2. Fourteen consecutive mornings recorded in a log.
                3. The fourteen-day average and range worked out.
                4. The average written beside your zone settings as the resting value to use.

                ## Notes
                Start from the **Metrics log** template. Leave out mornings after alcohol, a broken night or the first sign of a cold, and note why.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fourteen-day resting heart rate average, measured one consistent way, written into your zone settings."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose whether you will count on waking or use the watch's overnight lowest"
                - "Create a resting heart rate log from the metrics log template"
                - "Record resting heart rate each morning for fourteen days"
                - "Work out the average and range and note any excluded days"
            - name: Medical check before maximal heart rate efforts
              description: |-
                ## Purpose
                Testing for maximum or threshold heart rate means working very hard, which is not the right first step for everyone. Anyone with a known heart condition, high blood pressure, chest pain or fainting during exercise, a family history of sudden cardiac death, or medicines that change heart rate should speak to a clinician before any all-out test. A short conversation now decides which tests are sensible and which zone method suits you.

                ## Milestones
                1. A standard pre-exercise screening questionnaire, like those used by gyms and clubs, completed honestly.
                2. Any yes answer discussed with your doctor or practice nurse before testing.
                3. Your clinician's view on maximal efforts and any heart rate limits written down.
                4. Warning signs that mean stopping a session immediately listed in your training notes.

                ## Notes
                Chest pain, unusual breathlessness, palpitations, dizziness or fainting during exercise mean stop and seek medical help, whatever your zones say.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed pre-exercise screening questionnaire, with any flagged answer discussed with a clinician and their advice on hard testing recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Complete a standard pre-exercise screening questionnaire"
                - "Book a doctor or nurse appointment if any answer is yes"
                - "Ask whether all-out heart rate tests are suitable for you"
                - "Write the stop signs at the front of your training notes"
            - name: Finding a realistic maximum heart rate
              description: |-
                ## Purpose
                Age formulas such as 220 minus age are averages from large groups, and for any one person they are often ten or more beats out, which shifts every zone built on them. Your highest reliably recorded value from hard races or sessions is usually a better guide than any formula. Gathering that evidence before setting zones avoids weeks of training too hard or too easy.

                ## Milestones
                1. A formula estimate written down only as a starting point.
                2. The highest clean heart rate values from the last six months pulled from your files, with spikes ruled out.
                3. A separate maximum noted for each sport you train, since they differ.
                4. One working maximum agreed for each sport, with its date and source recorded.

                ## Notes
                Only push for a true maximum if the medical check said it is safe. For most people a threshold test is more useful than a maximum test anyway.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A working maximum heart rate for each sport you train, sourced from recorded hard efforts rather than a formula alone, written with its date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out a formula estimate as a rough starting point only"
                - "Search six months of files for the highest clean heart rate values"
                - "Rule out any value that sits on an obvious spike or dropout"
                - "Record a working maximum for each sport with its source"
            - name: Threshold heart rate field test
              description: |-
                ## Purpose
                Lactate threshold heart rate is the most practical anchor for zones because it can be found without going to an absolute maximum. The common field protocol is a well-paced 30-minute solo effort, taking the average heart rate of the final 20 minutes. Running it on a flat route or a trainer, rested and fuelled, gives a number your zones can hang from.

                ## Milestones
                1. A flat, uninterrupted route or an indoor trainer chosen for the test.
                2. The test done after an easy day, with a 15-minute warm-up and an even-paced 30 minutes.
                3. The average heart rate of the last 20 minutes recorded as your threshold estimate.
                4. Conditions on the day noted: temperature, sleep, caffeine and time of day.

                ## Notes
                Test running and cycling separately; most people's bike threshold sits several beats below their running one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A threshold heart rate from a 30-minute field test recorded for your main sport, with the test conditions written beside it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a flat route or trainer set-up for a 30-minute effort"
                - "Schedule the test after an easy or rest day"
                - "Do the test and save the file with a clear name"
                - "Calculate the average heart rate of the final 20 minutes"
            - name: Choosing one zone model
              description: |-
                ## Purpose
                Three-zone, five-zone and seven-zone systems, built from maximum, heart rate reserve or threshold, all describe the same physiology with different labels. Mixing them, so your watch says zone 3 when your plan means zone 2, is the commonest reason easy days drift too hard. Choosing one model and one anchor, and writing down the boundaries, gives every later session a shared language.

                ## Milestones
                1. The models used by your watch, your app and any plan or coach listed.
                2. One model chosen, built from maximum, heart rate reserve or threshold.
                3. Zone boundaries calculated in beats per minute for your main sport.
                4. A one-line description of how each zone should feel written beside its numbers.

                ## Notes
                With a threshold test in hand, a threshold-based model is usually the most stable. Without one, heart rate reserve tends to fit better than a plain percentage of maximum.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One zone model chosen and its boundaries written in beats per minute for your main sport, with a feel description for each zone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the zone models your watch, app and training plan each use"
                - "Choose one model and the anchor value it will be built from"
                - "Calculate each zone boundary in beats per minute"
                - "Write a short description of how each zone should feel"
            - name: One set of zones across watch and apps
              description: |-
                ## Purpose
                Watches, bike computers, training platforms and phone apps each keep their own zone settings, and many recalculate them automatically from your age or a detected maximum. Unless they all match, time-in-zone totals contradict each other and alerts fire at the wrong moment. Entering the same boundaries everywhere, and switching off automatic detection where it overrides you, makes every chart agree.

                ## Milestones
                1. Every device and app that shows heart rate zones listed.
                2. Your chosen boundaries entered manually in each one.
                3. Automatic maximum or threshold detection turned off or confirmed harmless.
                4. One session checked to show the same time in zone on the watch and the analysis app.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Identical zone boundaries entered on every device and app you use, confirmed by one session showing matching time in zone across them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every device and app that displays heart rate zones"
                - "Enter your zone boundaries manually on each one"
                - "Turn off automatic zone detection where it overrides your settings"
                - "Compare time in zone for one session across watch and app"
            - name: Calibrating zones against the talk test
              description: |-
                ## Purpose
                Numbers can be wrong, but breathing rarely lies. At the top of the easy aerobic zone most people can still speak in full sentences, near threshold only a few words come out, and above it talking stops. Checking your calculated boundaries against these cues over a few sessions shows whether the zones fit your body or need moving.

                ## Milestones
                1. The talk test cue for the top of each zone written down.
                2. Three sessions done with heart rate noted at each change in breathing.
                3. Any gap between the cues and your calculated boundaries recorded.
                4. Each boundary adjusted or confirmed, with the reason noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Calculated zone boundaries compared with talk test cues across three sessions, each boundary confirmed or adjusted with the reason written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the talk test cue for the top of each zone"
                - "Say a full sentence aloud at each step of a gradual warm-up and note heart rate"
                - "Repeat the check on two more sessions on different days"
                - "Adjust or confirm each zone boundary and note why"
            - name: Separate zones for each sport you train
              description: |-
                ## Purpose
                Heart rate at the same effort is usually lower on a bike than running, and lower again in the pool, because less muscle is working and the body is supported or cooled. Using running zones on the bike or in the water makes easy sessions too hard and hard ones impossible to reach. A zone sheet per sport, even if some are estimates for now, fixes that.

                ## Milestones
                1. Each sport you train listed with any tested threshold or maximum for it.
                2. Zones calculated separately for each sport, with estimated ones marked as such.
                3. Each sport's zones loaded into the matching sport profile on your watch.
                4. A date set to test any sport whose zones are still estimates.

                ## Notes
                Erg rowing often sits close to running values, while swimming commonly runs 10 to 15 beats lower. Treat these as starting points to test, not facts about you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A zone sheet for each sport you train, loaded into the matching watch profiles, with estimated zones marked and a test date set for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each sport you train and any tested values you hold for it"
                - "Calculate a zone sheet for each sport and mark the estimates"
                - "Load each sheet into the matching sport profile on your watch"
                - "Put a test date in the calendar for each estimated sport"
            - name: Weekly intensity distribution review
              description: |-
                ## Purpose
                Most endurance athletes who stall are doing too much in the middle: easy days a little too hard, hard days not hard enough. Adding up the week's time in each intensity band every Monday shows whether roughly four fifths of your training really was easy, the pattern most successful endurance programmes share. Ten minutes a week catches drift before it becomes a flat season.

                ## Milestones
                1. A simple table of weekly minutes in low, moderate and high intensity.
                2. A target split chosen, such as around 80 percent low intensity.
                3. Eight consecutive weekly reviews recorded.
                4. One change made to the coming week whenever the split drifted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews logged, each showing time in low, moderate and high intensity against your target split."
                cadence: rolling
              tasks:
                - "Set up a weekly table of minutes in low, moderate and high zones"
                - "Choose your target split and write it above the table"
                - "Add up last week's time in each band and compare it with the target @recurring(weekly:mon)"
                - "Note one change for the coming week whenever the split drifts"
            - name: Keeping easy sessions under the zone 2 ceiling
              description: |-
                ## Purpose
                Easy days fail quietly: a faster training partner, a hill or a good song pushes heart rate a few beats over the ceiling, and the session becomes moderate. A fixed ceiling in beats, a watch alert set to it and a habit of checking each easy session afterwards keep base work doing its job, which is building aerobic capacity without piling up fatigue.

                ## Milestones
                1. A zone 2 ceiling in beats written for each sport.
                2. A watch alert or data field showing distance from the ceiling.
                3. Easy sessions ticked off when average heart rate stayed under the ceiling.
                4. Four weeks in a row with every easy session under the ceiling.

                ## Notes
                Start from the **Habit tracker** template. Walking a hill to stay under the ceiling is part of the method, not a failure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks in which every planned easy session finished with average heart rate under the zone 2 ceiling."
                cadence: rolling
              tasks:
                - "Write your zone 2 ceiling for each sport on one card"
                - "Add a heart rate alert or data field set to the ceiling"
                - "Tick off each easy session that stayed under the ceiling in the habit tracker"
                - "Count the week's easy sessions that went over and note why @recurring(weekly:sat)"
            - name: Resting heart rate trend as a training signal
              description: |-
                ## Purpose
                Over months of base training, resting heart rate often drifts down a few beats, one of the few visible signs of aerobic change. Over days, a rise of five or more beats above your usual average can point to illness, poor sleep or accumulated fatigue, and is a sensible prompt to keep the next session easy. Logging a weekly average turns the overnight number your watch already records into something you act on.

                ## Milestones
                1. Your fourteen-day baseline written at the top of the log.
                2. A seven-day average recorded every week.
                3. A personal rule written for when a raised reading swaps a hard session for an easy one.
                4. A month-by-month line showing whether resting heart rate has changed over the base period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly resting heart rate averages logged against your baseline, with a written rule for adjusting training when it rises."
                cadence: rolling
              tasks:
                - "Write your personal rule for a raised morning heart rate"
                - "Record the seven-day average resting heart rate in the log @recurring(weekly:tue)"
                - "Plot the monthly average to see the long-term trend @recurring(monthly:28)"
            - name: Monthly aerobic decoupling check
              description: |-
                ## Purpose
                On a long steady session, heart rate creeps upward even though pace or power stays the same, and how much it drifts says a lot about aerobic fitness for that duration. Comparing pace or power per heartbeat in the first and second halves of one long session a month gives a percentage that should shrink as the base improves. Under about five percent is often read as a sign the duration sits well within your aerobic range.

                ## Milestones
                1. One steady long session a month chosen for the check, on similar terrain each time.
                2. First-half and second-half pace or power per heartbeat calculated.
                3. The decoupling percentage logged each month with temperature and fuelling noted.
                4. Three months of results compared to see the trend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly decoupling results logged from comparable long sessions, with conditions noted for each."
                cadence: rolling
              tasks:
                - "Choose a long steady session format you can repeat each month"
                - "Calculate first-half and second-half pace or power per heartbeat @recurring(monthly:12)"
                - "Log the decoupling percentage with temperature and fuelling notes"
                - "Compare the last three months and write one sentence on the trend"
            - name: Fixed heart rate benchmark session
              description: |-
                ## Purpose
                Holding one heart rate, for example the top of zone 2, on the same flat route each month and recording the pace or power it produces is the simplest proof that base training works. As you get fitter, the same heartbeat buys more speed. The session doubles as an easy aerobic workout, so it costs nothing in recovery.

                ## Milestones
                1. A flat route or trainer set-up and a fixed target heart rate chosen.
                2. A first benchmark recorded: pace or power for each segment at the target.
                3. The benchmark repeated monthly in similar conditions.
                4. Six months of results showing the direction of change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly benchmark sessions at the same heart rate on the same route, each with pace or power recorded."
                cadence: rolling
              tasks:
                - "Pick the route and the heart rate you will hold for the benchmark"
                - "Do the first benchmark and record pace or power per segment"
                - "Repeat the benchmark at the same heart rate on the same route @recurring(monthly:9)"
                - "Note weather and time of day beside each result"
            - name: Quarterly zone review and re-test
              description: |-
                ## Purpose
                Zones drift as fitness changes: threshold heart rate can rise with training and fall after a long break, and a maximum recorded two years ago may no longer apply. Re-testing threshold, or at least checking it against recent hard efforts, every three months keeps the zones you train by matched to the body you have now.

                ## Milestones
                1. A quarterly re-test week booked in the calendar, away from races.
                2. A threshold re-test or a review of recent hard efforts done each quarter.
                3. Zones updated on every device whenever the anchor moves by more than a few beats.
                4. A dated history of anchor values kept.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly zone reviews completed in a year, each recording the anchor value used and whether the zones changed."
                cadence: cyclic
              tasks:
                - "Choose a re-test week each quarter that avoids your key events"
                - "Re-test or review your threshold heart rate @recurring(quarterly)"
                - "Update zones on every device if the anchor moved by more than three beats"
                - "Add the new anchor and its date to your zone history"
            - name: Planning the week by zone
              description: |-
                ## Purpose
                Planning only by distance or time leaves intensity to chance on the day. Writing each session with its target zone and a ceiling before the week starts makes it obvious when three moderate sessions have crept in, and leaves room for genuinely hard work. It also tells training partners what kind of run, ride or swim you need from them.

                ## Milestones
                1. A weekly template with columns for day, sport, duration, zone and ceiling.
                2. Each week's sessions written into it before Monday.
                3. Hard sessions separated by at least one easy day where the plan allows.
                4. Eight weeks planned in advance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks planned in advance with a target zone and ceiling written for every session."
                cadence: rolling
              tasks:
                - "Build a weekly template with day, sport, duration, zone and ceiling"
                - "Write next week's sessions with their target zones @recurring(weekly:sun)"
                - "Share the plan with anyone you regularly train with"
                - "Mark any session that changed zone on the day, and why"
            - name: Heart rate strap care routine
              description: |-
                ## Purpose
                Sweat salt dries on the electrode pads and corrodes the snap contacts, which is why straps that worked perfectly start dropping out after a few months. A rinse after each use, a proper wash every month and a battery change before it dies mid-race make the sensor last years instead of one season.

                ## Milestones
                1. The manufacturer's washing instructions read and noted.
                2. A rinse after each session built into your post-training routine.
                3. A monthly hand wash and contact check done.
                4. A spare battery kept with your kit and swapped on a fixed date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A year of strap care completed, with monthly washes done and the battery replaced before it failed."
                cadence: rolling
              tasks:
                - "Read the washing instructions for your strap and note them"
                - "Hand-wash the strap and check the contacts for corrosion @recurring(monthly:20)"
                - "Buy a spare coin battery and keep it in your kit bag"
                - "Replace the sensor battery before it runs out @recurring(yearly)"
            - name: Monthly zone 2 volume target
              description: |-
                ## Purpose
                Aerobic base grows with accumulated easy time, and it grows best when that time rises gradually. Setting a monthly target for zone 2 hours, raising it modestly month to month with a lighter month every so often, turns base building into something you can see and plan rather than a vague intention to go slowly.

                ## Milestones
                1. Last month's zone 2 hours worked out as the starting figure.
                2. A monthly target set no more than about ten percent above the previous month.
                3. A lighter month built in every third or fourth month.
                4. Six months of targets and actual hours recorded side by side.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of zone 2 targets and actual hours recorded side by side, including at least one planned lighter month."
                cadence: rolling
              tasks:
                - "Work out last month's total time in zone 2"
                - "Set this month's zone 2 hours target and write it in your plan @recurring(monthly:3)"
                - "Mark which of the next four months will be lighter"
                - "Record actual zone 2 hours against the target when each month closes"
            - name: What each heart rate zone trains
              description: |-
                ## Purpose
                Knowing why long easy work builds mitochondria and capillaries, why threshold sessions raise sustainable pace, and why short hard efforts lift your aerobic ceiling makes it far easier to resist turning every session into a moderate one. A few hours with a reputable endurance physiology book or course gives you the reasons behind the plan.

                ## Milestones
                1. One reputable book or course on endurance training chosen.
                2. A one-page summary written of what each zone develops and roughly how long it takes to adapt.
                3. The difference between aerobic threshold and lactate threshold explained in your own words.
                4. Your current week checked against what you learned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary in your own words of what each zone develops, including the difference between aerobic and lactate threshold."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose one endurance physiology book or course to work through"
                - "Write a one-page summary of what each zone trains"
                - "Ask the agent to quiz you on the summary and correct any gaps"
                - "Check this week's sessions against your summary"
            - name: Pacing hills by heart rate
              description: |-
                ## Purpose
                Running or riding uphill at the same pace can push heart rate 20 beats higher, so an easy session on rolling terrain often turns into a tempo session on every climb. Learning to shorten your stride, drop a gear or walk to hold the ceiling, and to let heart rate settle on the descents, keeps hilly routes inside the zone you planned.

                ## Milestones
                1. A hilly route chosen for practice.
                2. Three sessions done holding the ceiling on every climb, walking where needed.
                3. The pace cost of holding the ceiling on climbs noted.
                4. Average heart rate for the hilly route inside the planned zone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three hilly sessions completed with average heart rate inside the planned zone and no climb more than five beats over the ceiling."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose a rolling route you can repeat"
                - "Set a ceiling alert before the first hill session"
                - "Walk or change gear whenever the alert sounds on a climb"
                - "Review each climb's peak heart rate after the session"
            - name: Heart rate lag in interval sessions
              description: |-
                ## Purpose
                Heart rate takes a minute or more to catch up with a sudden rise in effort, so in a 60-second rep it is still climbing when the rep ends. Steering short intervals by heart rate makes people sprint the first reps to move the number, then fade badly. Learning which sessions to pace by heart rate and which by effort, pace or power avoids that mistake.

                ## Milestones
                1. One interval session examined for how long heart rate took to rise in each rep.
                2. A rule written for which rep lengths are paced by heart rate and which by effort, pace or power.
                3. Short intervals paced by effort, with heart rate checked only afterwards.
                4. Reps of five minutes or more capped by heart rate where the plan says so.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rule for which interval lengths are paced by heart rate, applied to four consecutive interval sessions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Open a recent interval file and time how long heart rate took to rise"
                - "Write your rule for pacing short reps versus long reps"
                - "Pace the next short interval session by effort and check heart rate only afterwards"
                - "Review whether the later reps matched the early ones in effort"
            - name: Reading cardiac drift on long sessions
              description: |-
                ## Purpose
                Heat, dehydration and fatigue all make heart rate climb through a long session at a steady pace, so a run that starts in zone 2 can finish in zone 3 without speeding up. Understanding drift tells you when to slow down to hold the zone, when to accept a small rise, and what the drift itself says about the conditions.

                ## Milestones
                1. The main causes of cardiac drift noted from a reputable source.
                2. Three long sessions examined for how much heart rate rose at steady output.
                3. A personal rule written for when to slow down to stay in zone.
                4. Drift compared between a cool day and a warm day.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Drift measured on three long sessions, including one cool and one warm day, with a written rule for when to slow to stay in zone."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a reputable explanation of cardiac drift"
                - "Measure the heart rate rise at steady output on your last long session"
                - "Write your rule for slowing down when drift takes you out of zone"
                - "Compare drift on a cool day with drift on a warm day"
            - name: Heart rate in the swimming pool
              description: |-
                ## Purpose
                Wrist optical sensors struggle in water, a live chest strap signal rarely reaches the watch, and pool heart rate usually sits lower than on land at the same effort. Swimmers who want zones need a strap that stores data and uploads it afterwards, or a quick and reliable pulse count at the wall. Learning both lets swim sets be steered by heart rate rather than guesswork.

                ## Milestones
                1. A way to record pool heart rate chosen: a storing chest strap, a dependable wrist reading or a manual count.
                2. A ten-second pulse count at the wall practised until it is quick and repeatable.
                3. An easy aerobic swim set done with heart rate checked at each rest.
                4. A swim zone sheet started from these readings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Heart rate recorded on three aerobic swim sets by strap or wall pulse count, with a first swim zone sheet written from them."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check whether your strap stores data underwater and uploads afterwards"
                - "Practise a ten-second pulse count at the wall until it is quick"
                - "Swim an aerobic set and record heart rate at each rest"
                - "Start a swim zone sheet from the readings"
            - name: Steady-state erg pieces by heart rate
              description: |-
                ## Purpose
                Rowing coaches have long used heart rate bands for steady-state work, often labelled UT2 and UT1, because the split alone hides how tired you are. Learning to hold a long piece inside a band by adjusting stroke rate and pressure, rather than chasing a split, builds the aerobic base that makes rowing races and erg tests faster.

                ## Milestones
                1. Your rowing heart rate bands written from your erg zones.
                2. A first 30-minute steady-state piece held inside the lower band.
                3. Stroke rate and split noted at the top of the band.
                4. Pieces extended toward 60 minutes inside the band over several weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 60-minute erg piece completed with average heart rate inside the lower steady-state band and stroke rate recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your erg heart rate bands on a card by the monitor"
                - "Row 30 minutes holding the lower band at a low stroke rate"
                - "Note the split and stroke rate at the top of the band"
                - "Add ten minutes to the steady piece each week until you reach 60"
            - name: Cross-training on the bike at the right heart rate
              description: |-
                ## Purpose
                Runners who use cycling for extra aerobic volume or while injured often ride far too gently, because running zones feel impossible to reach in the saddle. Setting bike-specific zones and learning what zone 2 feels like on a bike makes cross-training count toward the aerobic base rather than being a pleasant spin.

                ## Milestones
                1. Bike heart rate zones set, estimated a few beats below running if untested.
                2. Two indoor rides done at bike zone 2 with cadence noted.
                3. An outdoor ride done holding the same zone on varied terrain.
                4. Bike zone 2 minutes counted in your weekly aerobic total.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three rides completed at bike-specific zone 2, with those minutes included in your weekly aerobic total."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set bike-specific zones in your watch's cycling profile"
                - "Ride 45 minutes indoors at bike zone 2 and note your cadence"
                - "Hold the same zone on an outdoor ride with some hills"
                - "Add bike zone 2 minutes to your weekly aerobic total"
            - name: Matching effort ratings to each zone
              description: |-
                ## Purpose
                A rating of perceived exertion on a 1 to 10 scale is the backup for when the strap fails, the heat distorts heart rate or a medicine flattens it. Rating every session and comparing the rating with heart rate for a month teaches you what each zone feels like, so you can train well even without a sensor.

                ## Milestones
                1. A 1 to 10 effort scale written with a description for each number.
                2. Every session rated within an hour of finishing for four weeks.
                3. Ratings set beside average heart rate to find your range for each zone.
                4. One session done by feel alone, then checked against heart rate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four weeks of sessions rated for effort and paired with heart rate, giving a written effort range for each zone."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a 1 to 10 effort scale with a description for each number"
                - "Rate every session's effort within an hour of finishing"
                - "Set four weeks of ratings beside heart rate and find each zone's range"
                - "Do one session by feel alone and check it against heart rate"
            - name: Accepting the slow zone 2 pace
              description: |-
                ## Purpose
                Many people starting heart rate training find their easy pace drops by a minute or more per kilometre, and plenty give up within a fortnight because it feels embarrassing. Committing in advance to eight weeks, with run-walk where needed and a benchmark at each end, gives the method a fair trial before you judge it.

                ## Milestones
                1. Your current easy pace and your zone 2 pace both written down.
                2. An eight-week commitment made, with run-walk allowed where needed.
                3. A fixed heart rate benchmark recorded at the start.
                4. The benchmark repeated at week eight and a decision recorded on whether to continue.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Eight weeks of easy sessions completed under the zone 2 ceiling, with start and finish benchmarks compared and a written decision on continuing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down your current easy pace and your zone 2 pace"
                - "Decide on run-walk intervals for when you cannot stay under the ceiling"
                - "Record a fixed heart rate benchmark this week"
                - "Repeat the benchmark at week eight and record your decision"
            - name: Polarised or pyramidal intensity split
              description: |-
                ## Purpose
                Two patterns dominate endurance training: polarised, with most work easy and the rest genuinely hard, and pyramidal, with a larger share of threshold work. Both can work, and the better choice depends on your event, your weekly hours and how you respond. Comparing them against your goals and history leads to a deliberate split rather than whatever happens.

                ## Milestones
                1. The two patterns summarised with what each looks like in a typical week.
                2. Your event, weekly hours and recent intensity split written down.
                3. One pattern chosen for the next block, with the reason.
                4. A review date set to judge whether it suited you.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One intensity distribution chosen for the next training block, with your reasons and a review date written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise what a polarised week and a pyramidal week look like"
                - "Work out your intensity split over the last eight weeks"
                - "Choose the pattern for your next block and write why"
                - "Set a date to review whether the pattern suited you"
            - name: Fixing an easy heart rate that runs too high
              description: |-
                ## Purpose
                Some people find heart rate shoots over the zone 2 ceiling even at a slow jog. The cause is often fixable: a sensor fault, heat, dehydration, short sleep, caffeine, stress, a very low cadence, or simply a young aerobic base. Working through the likely causes one at a time, and talking to a doctor if nothing explains it, beats abandoning the zones.

                ## Milestones
                1. Sensor faults ruled out with a chest strap check.
                2. Context recorded for two weeks: temperature, sleep, caffeine and stress.
                3. One change tested at a time, such as walking breaks, a quicker cadence or cooler times of day.
                4. A doctor consulted if heart rate stays unusually high with no clear cause.

                ## Notes
                Unexplained high heart rate with breathlessness, dizziness or palpitations is a reason to see a doctor before training further.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Likely causes of a high easy heart rate tested one at a time over four weeks, with the cause found or a doctor consulted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check the readings with a chest strap to rule out a sensor fault"
                - "Note temperature, sleep, caffeine and stress beside each easy session for two weeks"
                - "Test one change at a time, starting with a quicker cadence"
                - "Book a doctor's appointment if no cause explains the high readings"
            - name: Building a weekly long aerobic session
              description: |-
                ## Purpose
                One longer session each week, held in zone 2, does more for endurance than spreading the same minutes across short runs or rides. Extending it gradually, by around 10 to 15 minutes every week or two, with a shorter week every so often, builds the aerobic engine that every endurance event depends on.

                ## Milestones
                1. A starting duration set from your current longest easy session.
                2. A weekly long session slot fixed in the calendar.
                3. Duration increased gradually with a shorter week every third or fourth week.
                4. A target duration reached with average heart rate still in zone 2.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A weekly long session extended to your target duration over at least eight weeks, finishing with average heart rate in zone 2."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Find your longest easy session in the last month"
                - "Choose the day and time for a weekly long session"
                - "Add 10 to 15 minutes to the long session every week or two"
                - "Take water and food on any long session over 90 minutes"
            - name: Indoor versus outdoor heart rate
              description: |-
                ## Purpose
                Treadmills and turbo trainers usually push heart rate higher at the same effort, mainly because there is no moving air to cool you. Without a fan, an indoor zone 2 session can drift into zone 3 within half an hour. Setting up cooling and comparing indoor and outdoor readings at matched pace or power makes indoor sessions count properly.

                ## Milestones
                1. One indoor and one outdoor session done at the same pace or power.
                2. The heart rate difference between them recorded.
                3. A fan, ventilation and fluid set-up in place for indoor sessions.
                4. A repeat indoor session showing a smaller difference.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Indoor and outdoor heart rate compared at matched pace or power, with a cooling set-up in place and a repeat test recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Do one indoor and one outdoor session at the same pace or power"
                - "Record the heart rate difference between the two"
                - "Set up a fan and a bottle within reach of the treadmill or trainer"
                - "Repeat the indoor session with cooling and compare again"
            - name: Heart rate alerts that help rather than nag
              description: |-
                ## Purpose
                A watch beeping every 30 seconds is soon switched off, and then nothing stops easy days drifting. Choosing which sessions get an alert, setting a small buffer and a delay so short spikes are ignored, and building a data screen that shows the zone at a glance gives just enough feedback to stay honest.

                ## Milestones
                1. The alert options on your device read and noted.
                2. Alerts set for easy sessions with a ceiling, a small buffer and a delay if available.
                3. A data screen built showing heart rate, zone and elapsed time.
                4. Alerts reviewed after two weeks and adjusted if they nag or never fire.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Heart rate alerts and a zone data screen configured for easy sessions and adjusted after two weeks of use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the alert settings available on your watch"
                - "Set a ceiling alert for easy sessions with a short delay"
                - "Build a data screen with heart rate, zone and elapsed time"
                - "Adjust the alerts after two weeks of use"
            - name: Cutting grey zone minutes
              description: |-
                ## Purpose
                Moderate intensity, just above easy and below threshold, feels productive but leaves you too tired to train hard and not rested enough to adapt from easy work. Finding where these minutes come from, usually group sessions, commutes or hurried easy days, and moving them deliberately to one side or the other sharpens both ends of your training.

                ## Milestones
                1. Eight weeks of sessions tagged by where moderate minutes came from.
                2. The two biggest sources of grey zone time named.
                3. A change made for each source, such as a slower group or a gentler commute route.
                4. Moderate time held at the share your chosen intensity split allows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Moderate intensity time reduced to the share your chosen split allows and held there for two consecutive months."
                cadence: rolling
              tasks:
                - "Tag eight weeks of sessions by where any moderate minutes came from"
                - "Name the two biggest sources of grey zone time"
                - "Make one change to each source, such as joining a slower group"
                - "Check the month's moderate minutes against your target split @recurring(monthly:16)"
            - name: Racing an event under a heart rate ceiling
              description: |-
                ## Purpose
                Going out too fast is the classic way to ruin a long race, and adrenaline makes pace feel easier than it is for the first half hour. Setting a heart rate ceiling for the opening third of a half marathon, a long ride or a long swim, and rehearsing it in training, protects the finish. It suits newer athletes and anyone who has blown up before.

                ## Milestones
                1. A target event chosen and a ceiling for its opening third set from your zones.
                2. The ceiling rehearsed in two long training sessions.
                3. A race-day screen and alert set up and tested.
                4. The race done with the ceiling held, and splits and heart rate reviewed afterwards.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A race completed with heart rate held under the planned ceiling for its opening third, followed by a written review of splits and heart rate."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the event and write a ceiling for its opening third"
                - "Rehearse the ceiling in two long sessions before the race"
                - "Set up and test a race-day screen with heart rate and the ceiling"
                - "Review splits and heart rate within a week of the race"
            - name: Twelve-week aerobic base block
              description: |-
                ## Purpose
                Before a season of harder training, twelve weeks of mostly zone 2 work, with gradual volume increases, short strides or hill sprints for leg speed and a lighter week every third or fourth, builds the platform the hard sessions stand on. Planning it as a dated block with a benchmark at each end turns base building into a measurable project.

                ## Milestones
                1. Start and end dates set, finishing at least eight weeks before your key event.
                2. A week-by-week plan written with volume, long session and lighter weeks.
                3. A fixed heart rate benchmark recorded in week one.
                4. Eleven of the twelve weeks completed close to plan.
                5. The benchmark repeated in week twelve and compared.

                ## Notes
                Start from the **Training program** template.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A twelve-week base block completed with at least eleven weeks close to plan and benchmark results from week one and week twelve compared."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Set the block's start and end dates around your key event"
                - "Write a week-by-week plan from the training program template"
                - "Hold your benchmark heart rate on the test route in week one"
                - "Test again in week twelve and write a one-paragraph review"
            - name: Heart rate plan for a hot or high training trip
              description: |-
                ## Purpose
                In heat or at altitude, heart rate at a given pace climbs, often by ten beats or more in the first days, and the usual pace targets become risky. A trip plan that switches to heart rate and effort, eases volume for the first few days and adds fluid and cooling keeps a training camp or active holiday productive rather than a setback.

                ## Milestones
                1. Expected temperature, humidity and altitude for the trip noted.
                2. Sessions for the first three to five days planned by heart rate and effort only, with reduced volume.
                3. Fluid, electrolyte and cooling plans written for each session.
                4. Heart rate at a familiar easy pace logged daily to watch it settle.

                ## Notes
                Anyone with a heart or lung condition should ask their doctor before training at altitude.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip training plan written with heart-rate-led sessions for the first days, and easy-pace heart rate logged daily during the trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the expected temperature and altitude for the trip"
                - "Plan the first five days by heart rate and effort with reduced volume"
                - "Write a fluid and cooling plan for each session"
                - "Log heart rate at a familiar easy pace each day of the trip"
            - name: Booking a lab test to set your zones
              description: |-
                ## Purpose
                Laboratory lactate or gas exchange testing, offered by sports science labs and some clinics, measures where your aerobic and lactate thresholds sit in beats per minute and removes most of the guesswork from zone setting. It costs money and needs preparation, so it suits athletes whose field tests give confusing results or who want precise boundaries for a big season.

                ## Milestones
                1. Two or three providers compared on test type, sport, price and what the report includes.
                2. A test booked for a rested week, with the pre-test instructions followed.
                3. Both thresholds in beats per minute recorded from the report.
                4. Zones rebuilt on the lab thresholds and loaded into every device.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A lab threshold test completed and zones rebuilt from its reported thresholds in beats per minute, loaded into every device."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare three local labs or clinics on test type and price"
                - "Book the test for a week with no hard sessions beforehand"
                - "Follow the pre-test food, caffeine and training instructions"
                - "Rebuild your zones from the reported thresholds"
            - name: First 90-minute continuous zone 2 session
              description: |-
                ## Purpose
                Ninety minutes held entirely in zone 2, without drifting out on hills or in the final half hour, is a clear marker that the aerobic base is real. Planning it as a milestone with a route, fuel and a pacing strategy, after several weeks of gradual long-session increases, gives a satisfying and checkable result.

                ## Milestones
                1. Several weeks of long sessions building toward 90 minutes completed.
                2. A route chosen that suits steady effort, or a trainer or treadmill session planned.
                3. Fuel and fluid packed and a ceiling alert set.
                4. Ninety minutes completed with at least 90 percent of the time in zone 2.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 90-minute session completed with at least 90 percent of the time recorded in zone 2."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check your recent long sessions are within 20 minutes of 90 minutes"
                - "Choose a steady route or an indoor set-up for the session"
                - "Pack fuel and fluid and set the ceiling alert"
                - "Check the time-in-zone percentage after the session"
            - name: Run-walk heart rate start for beginners
              description: |-
                ## Purpose
                For people new to endurance exercise, or returning after years away, almost any running sends heart rate high. Starting with walk and jog intervals capped by heart rate, three times a week, builds the base without the breathless misery that makes most beginners stop. The jog sections lengthen as heart rate stays down.

                ## Milestones
                1. A heart rate cap set for the jog intervals and checked with the talk test.
                2. Three run-walk sessions a week completed for four weeks.
                3. Jog intervals lengthened whenever heart rate stayed under the cap.
                4. Twenty minutes of continuous easy jogging under the cap.

                ## Notes
                Complete the medical check project first if you have any health condition or have been inactive for a long time.
              priority: medium
              deadlineOffsetDays: 84
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twenty minutes of continuous jogging completed with heart rate under the cap, after at least four weeks of run-walk sessions."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Set your jog heart rate cap and check it with the talk test"
                - "Do a run-walk session holding the cap @recurring(weekly:tue,thu,sat)"
                - "Lengthen the jog intervals by a minute when heart rate stays under the cap"
                - "Record the longest continuous jog each week"
            - name: Zones when medication changes your heart rate
              description: |-
                ## Purpose
                Beta blockers and some other medicines lower heart rate and blunt its rise during exercise, so formula zones and even old test results stop applying. People taking them, or managing a heart condition, need limits agreed with their clinician or cardiac rehabilitation team, with effort ratings carrying more of the load. Getting this right keeps exercise both safe and useful.

                ## Milestones
                1. Your medicines that affect heart rate confirmed with your clinician or pharmacist.
                2. Exercise heart rate limits or an effort range agreed with your clinician.
                3. Zones on your devices replaced with the agreed limits.
                4. The plan reviewed whenever a dose or medicine changes.

                ## Notes
                Never change or stop a medicine to make training easier. Ask your clinician whether a supervised exercise test or rehabilitation programme is right for you.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Exercise heart rate limits or an effort range agreed with your clinician, loaded on your devices and reviewed after any medicine change."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your pharmacist which of your medicines affect heart rate"
                - "Book an appointment to agree exercise heart rate limits with your clinician"
                - "Replace the zones on your devices with the agreed limits"
                - "Review your exercise limits with your clinician @recurring(yearly)"
            - name: Zone training on three hours a week
              description: |-
                ## Purpose
                Parents, carers and people with long working days often have three hours a week at most, and the classic advice of many long easy hours does not fit. With little time, a slightly higher share of quality work makes sense, alongside one longer easy session and short easy ones where they fit. Planning around the hours you really have removes the guilt of a plan built for someone else.

                ## Milestones
                1. Your realistic weekly training hours and fixed slots written down.
                2. A weekly pattern chosen: one longer easy session, one quality session and short easy ones.
                3. Active commutes and family activities counted where heart rate stayed in zone.
                4. Eight weeks completed with the pattern and the fixed heart rate benchmark repeated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight weeks of a three-hour weekly pattern completed with at least one longer easy session each week and a repeated benchmark."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write down your realistic weekly hours and the slots you can count on"
                - "Choose a pattern with one longer easy session and one quality session"
                - "Confirm the weekend long session slot in the family calendar @recurring(weekly:fri)"
                - "Count active commutes in zone toward the weekly total"
            - name: Off-season aerobic base for team sport players
              description: |-
                ## Purpose
                Football, rugby, hockey and basketball players need an aerobic base to recover between sprints, yet many off-seasons are either total rest or random hard gym circuits. Six to eight weeks of zone 2 running, cycling or rowing before pre-season raises the floor, so pre-season fitness work starts higher and the jump in load is smaller.

                ## Milestones
                1. The off-season window and pre-season start date written down.
                2. Three zone 2 sessions a week planned across running and lower-impact options.
                3. A fixed heart rate route test done at the start and end of the window.
                4. Pre-season started with the base block completed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six weeks or more of zone 2 sessions completed before pre-season, with route test results from the start and end of the window."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the off-season window and the pre-season start date"
                - "Plan three zone 2 sessions a week mixing running with cycling or rowing"
                - "Run the fixed heart rate route test in the first off-season week"
                - "Test again on the same route the week before pre-season starts"
            - name: Brisk walking by heart rate
              description: |-
                ## Purpose
                Walking briskly enough to reach the lower aerobic zone is a real endurance session for many older adults, people carrying extra weight and anyone not ready to run. Using heart rate to find the pace that counts, and building toward a daily brisk walk, brings the same zone discipline runners use without the impact.

                ## Milestones
                1. A walking heart rate target agreed, with your clinician if you have a health condition.
                2. The walking pace that reaches the target found on a flat route.
                3. A daily brisk walk kept for four weeks.
                4. Hills or longer walks added once the flat route no longer reaches the target.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of daily brisk walks, each reaching the agreed walking heart rate target for at least 20 minutes."
                cadence: rolling
              tasks:
                - "Agree a walking heart rate target, with your clinician if needed"
                - "Find the pace that reaches the target on a flat route"
                - "Take a brisk walk of at least 20 minutes in the target zone @recurring(daily)"
                - "Add a hill or ten extra minutes once the flat route feels too easy"
            - name: Heart rate zones around shift work
              description: |-
                ## Purpose
                Night shifts, early starts and rotating rotas raise resting heart rate and push exercise heart rate up for the same effort, which makes fixed zones misleading on the wrong days. Planning which shift days suit easy sessions and which suit hard ones, and how to read heart rate after a night shift, keeps training consistent when sleep is not.

                ## Milestones
                1. Your rota pattern mapped against your training week.
                2. Hard sessions placed only on days after normal sleep.
                3. A rule written for adjusting zones or switching to effort after a night shift.
                4. Four rota cycles completed with the plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four rota cycles trained with hard sessions only after normal sleep and a written rule for post-night-shift sessions followed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Map your shift rota against a normal training week"
                - "Place hard sessions only on days after normal sleep"
                - "Write your rule for training after a night shift"
                - "Review how the plan held up after four rota cycles"
            - name: Aerobic threshold from heart rate variability
              description: |-
                ## Purpose
                Recent research suggests that a heart rate variability index called DFA alpha 1, calculated from beat-to-beat data during exercise, falls to around 0.75 near the first threshold. With a chest strap that records beat-to-beat intervals and an app that calculates the index, a gradual ramp can estimate your aerobic threshold without a lab. It is promising but still being validated, so treat it as one input among several.

                ## Milestones
                1. A strap that records beat-to-beat intervals and a compatible app set up.
                2. A gradual ramp session completed with clean data.
                3. The heart rate where the index crossed about 0.75 recorded.
                4. The result compared with your talk test and any lab or field values.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An aerobic threshold estimate from a beat-to-beat ramp test recorded and compared with at least one other method."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check that your strap records beat-to-beat intervals"
                - "Install an app that calculates the index during exercise"
                - "Do a gradual ramp session and save the data"
                - "Repeat the ramp test and compare with earlier results @recurring(quarterly)"
            - name: Heart rate based training load
              description: |-
                ## Purpose
                Training impulse, or TRIMP, scores each session by how long you spent at each heart rate, weighting harder zones more heavily, so a long easy ride and a short hard run can sit on one scale. Tracking weekly heart rate load alongside time in zone helps spot weeks that rise too fast, especially across several sports where distance means nothing.

                ## Milestones
                1. One load method chosen, such as zone-weighted minutes.
                2. The method set up in your analysis app or a spreadsheet.
                3. Eight weeks of weekly load recorded.
                4. A personal limit written for week-on-week increases.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Eight weeks of heart-rate-based weekly load recorded with one method, and a personal limit for weekly increases written down."
                cadence: rolling
              tasks:
                - "Choose a zone-weighted load method and write its formula"
                - "Set the method up in your app or a spreadsheet"
                - "Ask the agent to check your formula against a worked example"
                - "Compare this month's weekly loads with your increase limit @recurring(monthly:24)"
            - name: Comparing heart rate with power or pace zones
              description: |-
                ## Purpose
                Pace, power and heart rate describe the same session from different angles: heart rate shows the internal cost, pace and power the output. When their zones disagree, for example zone 2 power producing zone 3 heart rate, it points to mis-set zones, fatigue, heat or improving fitness. Lining them up session by session helps experienced athletes decide which signal to trust and when.

                ## Milestones
                1. Pace or power zones and heart rate zones built from tests done in the same month.
                2. Ten sessions reviewed for where the two disagreed.
                3. The usual reasons for disagreement in your data named.
                4. A written rule for which signal leads in each session type.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten sessions reviewed for agreement between heart rate and pace or power zones, with a written rule for which signal leads in each session type."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm your pace or power zones and heart rate zones come from tests in the same month"
                - "Review ten sessions and mark where the zones disagreed"
                - "Name the main reasons for disagreement in your data"
                - "Write which signal leads for easy, threshold and interval sessions"
            - name: Setting zones for a training group
              description: |-
                ## Purpose
                Run club leaders, coaches and experienced friends are often asked to help others set zones, and getting it wrong for a beginner or someone on heart rate medicines matters. A simple, careful process, from health screening to a field or talk test and a written zone sheet for each person, lets you help others safely and consistently.

                ## Milestones
                1. A short intake form with screening questions and current training.
                2. A field test or talk test protocol chosen for the group.
                3. A zone sheet produced for each person, showing how it was set.
                4. Anyone with a health flag referred to their doctor before testing.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Zone sheets produced for every member of the group, each with its method recorded and any health flags referred before testing."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a short intake form with screening questions"
                - "Choose one field or talk test protocol for the group"
                - "Produce a zone sheet for each person showing how it was set"
                - "Refer anyone with a health flag to their doctor before testing"
            - name: Year-on-year aerobic efficiency review
              description: |-
                ## Purpose
                Efficiency factor, the pace or power you produce per heartbeat on steady sessions, is one of the clearest long-term records of aerobic fitness. Comparing it by month across two or more years shows which blocks moved it, what age and life events cost, and what to repeat. An annual review gives experienced athletes the evidence to plan the next base season.

                ## Milestones
                1. Efficiency factor calculated for steady sessions over the past year.
                2. Monthly averages plotted against the same months the year before.
                3. The blocks and events linked to the biggest changes named.
                4. Three lessons for next year's base season written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An annual efficiency factor review completed, comparing monthly averages across two years and recording three lessons for the next base season."
                cadence: cyclic
              tasks:
                - "Export steady sessions from the past year with pace or power and heart rate"
                - "Calculate the monthly average efficiency factor"
                - "Compare this year's months with the same months last year"
                - "Write three lessons for next year's base season @recurring(yearly)"
---

# Heart Rate Zone Training

This area is for runners, cyclists, swimmers and rowers, newcomers and seasoned athletes alike, who want their easy days to be genuinely easy and their aerobic base to grow in a way they can measure. It starts with the foundations (choosing and checking a sensor, resting, maximum and threshold heart rate, one zone model loaded everywhere and separate zones for each sport), then the weekly and monthly routines that keep intensity honest, the skills of pacing hills, intervals, drift, pools and ergs by heart rate, decisions about intensity split and troubleshooting, dated milestones such as a base block, a lab test or a heart-rate-capped race, versions for beginners, people on heart rate medicines, time-poor parents, team players, walkers and shift workers, and finally the specialist work of threshold estimates from beat-to-beat data, heart rate load and long-term efficiency.

What repeats is a Sunday plan by zone, a Monday intensity review, a Tuesday resting heart rate average and a Saturday easy-session check, monthly volume targets, benchmarks, decoupling, grey zone and load checks spread across different days, a quarterly zone re-test and a yearly efficiency review. The Purchase decision, Metrics log, Habit tracker and Training program templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
