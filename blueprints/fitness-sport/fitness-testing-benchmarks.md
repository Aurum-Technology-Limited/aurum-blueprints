---
id: fitness-sport.fitness-testing-benchmarks
name: Fitness Testing & Benchmarks
description: "A short battery of fitness tests with written protocols, fixed test-day conditions and a results register, retested at every block end so time trials, max lifts and VO2 estimates show real progress, not noise."
category: personal
version: 1.0.0
tags: [fitness-sport, fitness-testing-benchmarks, athlete, time-trials, one-rep-max, vo2-max, field-tests, test-protocols]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Fitness Testing & Benchmarks
          description: "Running regular fitness tests such as time trials, max lifts and VO2 estimates to measure progress objectively between training blocks."
          projects:
            - name: Picking four tests that match your training goal
              description: |-
                ## Purpose
                Most athletes test whatever their app or gym happens to offer, then wonder why the results never change a training decision. Four tests chosen on purpose, one for each quality your goal depends on, give a short battery you can repeat every block without it swallowing a training week. A runner might pick a 3 km time trial, a 30-minute threshold run, a countermovement jump and a single-leg calf raise count; a lifter would choose very differently.

                ## Milestones
                1. Your main goal for the next six months written in one sentence.
                2. The three or four physical qualities that goal depends on listed in order of importance.
                3. One repeatable test chosen for each quality, with the reason noted beside it.
                4. Any test that needs a lab, a partner or special kit flagged before the baseline week.

                ## Notes
                Fewer tests run well beat a dozen run badly. If a result would not change what you do next block, the test does not belong in the battery.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of three or four named tests, each matched to a quality your goal depends on, with the reason for choosing it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your main training goal for the next six months in one sentence"
                - "List the physical qualities that goal depends on, most important first"
                - "Pick one repeatable test for each quality on the list"
                - "Note what kit, venue or helper each chosen test needs"
            - name: Pre-test health screen and stop rules
              description: |-
                ## Purpose
                Maximal tests ask more of the heart and joints than almost any training session, which is why clubs and labs use a short pre-exercise questionnaire before them. Answering a recognised screening form honestly, and taking any yes answer to your doctor before testing, turns an unknown risk into a known one. Writing down the signs that end a test on the spot means nobody has to decide mid-effort.

                ## Milestones
                1. A recognised pre-exercise screening questionnaire completed and dated.
                2. Any yes answer discussed with your doctor and their advice recorded.
                3. A short stop list written on every protocol card: chest pain, unusual breathlessness, dizziness, palpitations, sharp joint pain.
                4. A training partner or staff member told where the stop list is and what to do.

                ## Notes
                This organises the screening; it does not replace medical advice. If you have a heart condition, diabetes, high blood pressure or a recent illness, agree any maximal testing with your clinician first.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated screening questionnaire, any follow-up advice from your doctor recorded, and a stop list printed on every protocol card."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find a recognised pre-exercise screening questionnaire from a sports medicine body"
                - "Answer every question honestly and date the form"
                - "Book a doctor's appointment for any question you answered yes"
                - "Write the stop signs at the top of each protocol card"
                - "Repeat the screening questionnaire before your first test of the year @recurring(yearly)"
            - name: Written protocol card for each test
              description: |-
                ## Purpose
                Two 3 km time trials, one on a windy road after a hard week and one on a still track after two easy days, are different tests that happen to share a name. A protocol card fixes the warm-up, the course or equipment, the settings, the scoring rule and what counts as a failed attempt, so next block's number can sit beside today's. It takes half an hour per test and protects every comparison afterwards.

                ## Milestones
                1. One card per test listing warm-up, venue, equipment settings, start signal and scoring rule.
                2. Rules for a no-lift, a false start or a paused effort written down.
                3. Each card tried once and corrected wherever it was vague.
                4. Cards stored where you will find them on test day, on paper and on your phone.

                ## Notes
                Copy wording from a published protocol where one exists, such as a lifting federation's rules or an erg maker's test guide, rather than inventing your own.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every test in your battery has a written card covering warm-up, setup, execution and scoring, used unchanged for at least two test weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a protocol card for your most important test today"
                - "Copy the setup and scoring rules from a published version of each test"
                - "Add the rule for a failed, paused or restarted attempt"
                - "Ask the agent to turn your rough notes into tidy one-page cards"
                - "Print the cards and save a copy on your phone"
            - name: Standard conditions checklist for test days
              description: |-
                ## Purpose
                Sleep, caffeine, the last meal, the time of day and the previous 48 hours of training can move a test result by more than a month of real progress. A checklist completed before every test either confirms that conditions matched last time or tells you to read the result with caution. It is the cheapest accuracy gain in the whole area.

                ## Milestones
                1. A checklist covering sleep, last meal, caffeine, time of day, temperature, kit and the two previous training days.
                2. A rule for how much training is allowed in the 48 hours before a test.
                3. A pass mark agreed: which mismatches mean you postpone and which you only note.
                4. The completed checklist filed with each test result.

                ## Notes
                Start from the **Operational checklist** template. Keep the time of day within about an hour of the baseline test, since strength and power often read higher later in the day.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test-day conditions checklist exists and has been completed and filed alongside every result recorded since the baseline week."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the eight conditions you will check before every test"
                - "Decide how hard you may train in the 48 hours before a test"
                - "Mark which mismatches mean postponing the test"
                - "Note the time of day you will always test at"
            - name: Course, venue and equipment check
              description: |-
                ## Purpose
                Courses and machines mislead quietly: a 400 m loop that is really 412 m, a bathroom scale that drifts by a kilo, or a rowing machine on a different drag factor will show progress or decline where none exists. Measuring the course and checking each piece of kit before the baseline, then again before every test week, removes the error you can control. Writing the settings on the protocol card makes the next check quick.

                ## Milestones
                1. Any outdoor course measured with a wheel or replaced by a certified track, with start and finish marked.
                2. Machine settings such as drag factor, resistance level or treadmill incline recorded.
                3. Power meters zeroed and scales checked against a known weight.
                4. The exact kit used, down to shoes and bar, listed on each protocol card.
              priority: medium
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every test venue and device has recorded settings or measurements on its protocol card, checked again before each test week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose one fixed venue or course for each outdoor test"
                - "Measure the outdoor course or confirm it is a certified track"
                - "Record machine settings such as drag factor or resistance level"
                - "Check the scales against a known weight and zero the power meter"
                - "Repeat the course and equipment check before each test week @recurring(quarterly)"
            - name: Test results register with conditions noted
              description: |-
                ## Purpose
                Results scattered across a watch app, whiteboard photos and memory cannot be compared, and the conditions behind each number are forgotten within weeks. A single register with one row per test attempt, holding the score, the checklist outcome and a note, becomes the record every later decision draws on. It sits apart from the daily training log: only tests go here.

                ## Milestones
                1. A register with columns for date, test, score, unit, conditions met, venue and notes.
                2. Baseline results entered as the first rows.
                3. Older results you trust back-filled with a flag saying where they came from.
                4. Failed and aborted attempts recorded with the reason, not left out.

                ## Notes
                Start from the **Metrics log** template. Enter each result within a day; the details you forget first are the ones that explain odd numbers later.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test register holds every result since the baseline, each with its conditions outcome and venue, including failed attempts."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a test register from the metrics log template"
                - "Add columns for conditions met, venue and failed attempts"
                - "Back-fill older results you trust, flagged by source"
                - "Enter each new test result within a day of the test"
            - name: Baseline test week
              description: |-
                ## Purpose
                Every later result needs a starting point measured the same way, and a first test week often reveals that a protocol is unworkable or that two tests interfere. Running the full battery across one lighter week, in a fixed order with the hardest efforts at least 48 hours apart, produces the baseline and a corrected plan for next time. Do it at the start of a training block, not at the end of a hard one.

                ## Milestones
                1. A test week planned with the most fatiguing tests at least 48 hours apart.
                2. Training volume in that week cut so you arrive fresh.
                3. Every test completed under its protocol card, or the reason for skipping it recorded.
                4. Baseline results entered in the register with conditions checklists attached.
                5. A note of what to change about the order or protocols next time.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every test in the battery has a baseline result recorded within one seven-day week, each taken under its written protocol."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the week for baseline testing at the start of your next block"
                - "Order the tests so the most fatiguing ones are 48 hours apart"
                - "Plan light training on the non-test days of that week"
                - "Run each test using its protocol card and conditions checklist"
                - "Write down what you would change about the week next time"
            - name: Testing calendar tied to block ends
              description: |-
                ## Purpose
                Tests that happen whenever you remember land in hard weeks, straight after holidays or a fortnight before a race, and the numbers mean little. Fixing test weeks at the end of each training block, usually every 6 to 12 weeks, makes each result a verdict on the block just finished. The calendar also stops testing from colliding with races and deloads.

                ## Milestones
                1. Training blocks for the next six months marked with start and end dates.
                2. A test week placed at the end of each block, clear of priority races.
                3. Which tests run in each test week decided, since not every test needs to run every time.
                4. Test weeks entered in your main calendar with a reminder a week ahead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A six-month calendar with at least two dated test weeks, each at a block end and at least ten days clear of any priority race."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark the start and end of your next three training blocks"
                - "Place a test week at the end of each block"
                - "Move any test week that falls within ten days of a priority race"
                - "Add each test week to your calendar with a one-week reminder"
                - "Compare the testing calendar with any changed race dates @recurring(monthly:3)"
            - name: Standard warm-up used before every test
              description: |-
                ## Purpose
                Warm-ups vary more than people admit: a ten-minute jog before one 3 km test and a twenty-five minute routine with strides before the next can be worth several seconds on their own. One fixed warm-up per test type, written and timed, makes it part of the protocol rather than a matter of mood on the day. It also lowers the chance of a pulled muscle on a maximal effort.

                ## Milestones
                1. A warm-up written for each type of test: endurance, strength, and jump or sprint.
                2. Each warm-up timed to finish a set number of minutes before the start.
                3. Lifting warm-ups set as a ladder of loads and reps leading to the first attempt.
                4. Each warm-up rehearsed once in training before the baseline week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written, timed warm-up exists for each test type and has been used unchanged on at least two test days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a timed warm-up for your endurance tests"
                - "Build a warm-up ladder for each lift you will test"
                - "Set the gap between the end of the warm-up and the test start"
                - "Rehearse each warm-up in a normal training session"
            - name: End-of-block retest week
              description: |-
                ## Purpose
                Once a baseline exists, the point of testing is a regular verdict: did the block you just finished move the qualities it was meant to? Repeating the chosen tests in the last week of each block, under the same protocols and conditions, gives that verdict four or five times a year. Treat the week as part of training, with its own reduced load, not as an extra on top.

                ## Milestones
                1. Each block ends with a retest week run under the original protocols.
                2. Training load in the retest week reduced by an agreed amount.
                3. Every result entered within a day and set beside the previous round.
                4. Any skipped test given a reason and a make-up date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three retest weeks completed in a year, each with every result entered and set beside the previous round."
                cadence: cyclic
              tasks:
                - "Decide how much to cut training load during a retest week"
                - "Run the retest week in the last week of each block @recurring(quarterly)"
                - "Rerun the conditions checklist before each test of the week"
                - "Book a make-up date for any test you missed"
            - name: Rotating monthly benchmark
              description: |-
                ## Purpose
                Waiting three months between tests leaves a long gap in which a block can drift off course unnoticed. Running one test from the battery each month, in rotation, gives a lighter check-in that costs a single session and keeps the protocols familiar. Over a year each test comes round three or four times without needing an extra test week.

                ## Milestones
                1. A rotation order set so each test comes round every three or four months.
                2. One session in each month reserved for the benchmark.
                3. Each monthly result entered beside that test's previous score.
                4. A rule written for what result prompts an early full test week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One benchmark test completed and recorded in at least ten of the last twelve months, rotating through the battery."
                cadence: rolling
              tasks:
                - "Set the order in which your tests rotate through the months"
                - "Reserve one session in each month for the benchmark"
                - "Run this month's benchmark under its protocol card @recurring(monthly:20)"
                - "Write down what result would trigger an early full test week"
            - name: Monthly submaximal check at a fixed workload
              description: |-
                ## Purpose
                Submaximal checks tell you a lot for very little cost: hold the same pace, power or load each time and record heart rate, perceived effort or bar speed. Over months, a lower heart rate at the same pace is one of the clearest signs of aerobic progress, and the session fits inside a normal easy day. Nothing about it needs a test week or a full recovery.

                ## Milestones
                1. One fixed workload chosen, such as 20 minutes at a set treadmill pace or erg power.
                2. Heart rate averaged over the final ten minutes and effort rated each time.
                3. Temperature and caffeine noted, since both move heart rate.
                4. Six months of results plotted as a simple line.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fixed-workload check done in at least five of the last six months, with average heart rate and effort recorded each time."
                cadence: rolling
              tasks:
                - "Pick a pace, power or load you can hold easily for 20 minutes"
                - "Do the fixed-workload session in a cool, consistent setting @recurring(monthly:9)"
                - "Average heart rate over the final ten minutes of each check"
                - "Plot the monthly averages on one line"
            - name: Weekly jump test as a freshness signal
              description: |-
                ## Purpose
                Countermovement jumps measured with a phone app or contact mat take two minutes and often drop as fatigue builds, sometimes before you feel it. Three jumps at the start of the first session each week give a running measure of freshness that sits between full tests. A result well below your usual range is a prompt to look at sleep and load, not a verdict on its own.

                ## Milestones
                1. A jump method chosen: phone app, contact mat or a chalk mark on a wall.
                2. Three jumps recorded at the start of each week's first session, best and average kept.
                3. A normal range set from the first four weeks of results.
                4. A personal rule written for what to do after two weeks below that range.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly jump results recorded for at least eight of the last ten weeks, with a normal range written on the sheet."
                cadence: rolling
              tasks:
                - "Choose how you will measure jump height and try it once"
                - "Do three countermovement jumps at your first session of the week @recurring(weekly:mon)"
                - "Set your normal range from four weeks of results"
                - "Write what you will do after two weeks below that range"
            - name: Post-test review and next-block decisions
              description: |-
                ## Purpose
                Numbers that sit in a register without a conclusion change nothing. A short written review within three days of each test week, comparing results with the last round and with the size of change you can trust, ends with two or three decisions for the coming block. Fifteen minutes is enough if the register is up to date.

                ## Milestones
                1. Each result compared with the previous round and with the baseline.
                2. Changes smaller than the test's normal variation marked as no real change.
                3. Two or three decisions for the next block written down.
                4. Targets for the next test week set where a target is realistic.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written review with at least two decisions for the next block exists for every test week in the past year, dated within three days of testing."
                cadence: cyclic
              tasks:
                - "Set each new result beside the previous round and the baseline"
                - "Mark any change smaller than the test's usual variation as no change"
                - "Write two or three decisions for the next training block"
                - "Hold a 15-minute review within three days of each test week @recurring(quarterly)"
            - name: Quarterly body composition under fixed conditions
              description: |-
                ## Purpose
                Body weight and body fat estimates swing with hydration, food and time of day, so occasional readings mostly measure the morning they were taken. Measuring once a quarter, after waking and before food, with the same device and a tape for waist and limb girths, gives a trend worth discussing. Smart-scale body fat figures are rough; weight and girths repeat far better.

                ## Milestones
                1. One method and device chosen and written on a protocol card.
                2. Weight, waist and two limb girths measured under the same morning conditions.
                3. Results entered in the register each quarter.
                4. Any target agreed with a qualified professional rather than read off a chart.

                ## Notes
                This project is optional. If weight or body shape is a sensitive subject for you, leave it archived.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weight and girth measurements taken under the same morning conditions in each of the last four quarters and entered in the register."
                cadence: cyclic
              tasks:
                - "Write the morning conditions you will measure under"
                - "Mark the tape positions for waist and limb girths"
                - "Take weight and girth measurements in the first week of the quarter @recurring(quarterly)"
                - "Enter the measurements beside the previous quarter's"
            - name: Annual full test battery and year comparison
              description: |-
                ## Purpose
                Block-end tests show only part of the battery and only short-term change. Once a year, run every test including the ones you rotate out, then put the year's results side by side with last year's and the baseline. This is where slow trends appear, such as strength holding while endurance drifts.

                ## Milestones
                1. Every test in the battery completed in one test week each year.
                2. A table setting this year's results beside last year's and the baseline.
                3. One quality that improved and one that slipped named, with the likely reason.
                4. The year's main trend written as a short paragraph.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A full test battery completed once a year, with a year-on-year comparison table and a written note on the main trend."
                cadence: cyclic
              tasks:
                - "Choose a quiet week for the full battery, clear of races"
                - "Run every test in the battery, including rotated ones @recurring(yearly)"
                - "Build a table of this year's results beside last year's and the baseline"
                - "Write one sentence on what improved and one on what slipped"
            - name: Protocol drift audit
              description: |-
                ## Purpose
                Protocols drift quietly: a warm-up grows, squat depth gets shallower, a time trial moves to a faster route. Comparing how you actually ran the last test week with what the protocol cards say, using video and timing notes, catches the drift before it fakes a trend. Where a change is deliberate, record it so earlier results are read with that in mind.

                ## Milestones
                1. Video or notes from the last test week set beside each protocol card.
                2. Every difference between card and practice listed.
                3. Each difference either corrected or written into the card as a dated change.
                4. Results affected by a protocol change flagged in the register.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each protocol card carries an audit date from the last six months, with any changes dated and the affected results flagged."
                cadence: rolling
              tasks:
                - "Film your next test attempt from the side"
                - "Compare the footage and notes with the protocol card"
                - "Correct the drift or record the change on the card with a date"
                - "Audit each protocol card against your last test week @recurring(quarterly)"
            - name: How VO2 max estimates are made and where they mislead
              description: |-
                ## Purpose
                Watches, apps, treadmill tables and field tests all report a VO2 max, and they can disagree by several points for the same person. Learning what each method actually measures, from heart rate and pace models to the gas analysis of a lab test, tells you which figure to trust and which to ignore. Expect a couple of evenings of reading and an afternoon comparing your own numbers.

                ## Milestones
                1. The difference between a measured and an estimated VO2 max explained in your own words.
                2. The inputs your watch uses for its estimate listed, such as max heart rate and pace.
                3. Two field tests that estimate VO2 max noted, with their typical error.
                4. A decision on which figure you will track, written in the register.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explaining the VO2 max methods you have access to, their likely error, and which one you will track."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read how your watch maker says its VO2 max estimate is calculated"
                - "List the inputs that estimate depends on, such as max heart rate"
                - "Find the typical error of two field tests that estimate VO2 max"
                - "Write one page on which figure you will track and why"
            - name: Pacing a time trial evenly
              description: |-
                ## Purpose
                Most time trials are lost in the first quarter, when adrenaline pushes the pace well above what can be held. Practising even or slightly negative splits in shorter efforts, with a target for each lap or kilometre, makes your result a measure of fitness rather than of how badly you started. It is a learnable skill that improves within a few deliberate sessions.

                ## Milestones
                1. A target split for each lap or kilometre worked out from your last result.
                2. Two training efforts at test pace run with splits checked every lap.
                3. A first-quarter split within a few seconds of target in practice.
                4. Splits from the next real time trial recorded and compared with target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Splits from your next time trial show no quarter more than 3% slower than the average quarter."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work out target splits from your last time trial result"
                - "Run two shorter efforts at test pace, checking each split"
                - "Set your watch or erg screen to show split pace, not total time"
                - "Compare the next time trial's splits with your targets"
            - name: Running a safe one-rep max test session
              description: |-
                ## Purpose
                Of all strength tests, a true one-rep max is the most direct and the one most likely to go wrong when it is rushed, attempted alone or chased with failing technique. A planned session, with a warm-up ladder, three chosen attempts, spotters or safety arms and a firm rule on what counts as a good rep, gets an honest number without risking a dropped bar. If you have never maxed a lift, learn this before the baseline week.

                ## Milestones
                1. Attempts planned: an opener you could triple, a second near your current best, a third only if the second moved well.
                2. Safety arms set or two trained spotters briefed for squat and bench.
                3. Depth, pause and lockout standards written and checked on video.
                4. Rest of three to five minutes between heavy attempts timed, not guessed.
                5. Results recorded only for reps that met the standard.

                ## Notes
                Do not max a lift you cannot yet perform with consistent technique. A three or five rep-max test is a sensible alternative for newer lifters.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-rep max session completed with planned attempts, spotters or safety arms in place, and only standard-meeting reps recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your opener, second and third attempt for each lift"
                - "Set the safety arms or brief two spotters before the first heavy single"
                - "Write the depth and lockout standard each rep must meet"
                - "Film each heavy attempt from the side to check the standard"
                - "Time three to five minutes of rest between attempts"
            - name: Field threshold tests for power and pace
              description: |-
                ## Purpose
                Lab threshold tests need blood samples and equipment, but field versions such as a 20-minute cycling power test or a 30-minute solo run give a usable estimate on your own. Each has assumptions built in, like the 95% correction many cyclists apply to a 20-minute effort, which suit some athletes and not others. Knowing how they are run and where they mislead lets you test threshold every block without a lab.

                ## Milestones
                1. The field threshold test that suits your sport chosen and its protocol written.
                2. The correction or calculation the test uses noted, with its known weaknesses.
                3. One practice attempt done to learn pacing before the test that counts.
                4. A threshold estimate recorded with its method beside it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A threshold estimate from a written field protocol is in the register, labelled with the test used and any correction factor."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose the field threshold test that matches your sport"
                - "Write its protocol, including any correction it applies"
                - "Do one practice attempt to learn the pacing"
                - "Record the threshold estimate with the method beside it"
            - name: Reading norms and percentiles without fooling yourself
              description: |-
                ## Purpose
                Online tables will tell you your VO2 max is excellent or your deadlift is intermediate, but many are built from small, unrepresentative or self-reported samples. Knowing who a norms table was drawn from, and whether its protocol matches yours, decides whether the comparison means anything. Your own previous result is nearly always the better benchmark.

                ## Milestones
                1. Two or three norms tables found for your main tests, with their source population noted.
                2. Each table's protocol checked against your own.
                3. Your results placed on the tables that match your protocol, with caveats alongside.
                4. A note on which comparisons you will stop making.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note listing the norms tables you use, each with its source population and protocol, and where your results sit on them."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find two norms tables for your most important test"
                - "Note who each table was measured on and how many people"
                - "Check whether each table's protocol matches yours"
                - "Write which comparisons you will keep and which you will drop"
            - name: Sprint and jump timing with a phone camera
              description: |-
                ## Purpose
                Hand timing with a stopwatch usually reads faster than the true time by a tenth of a second or more, which is larger than most improvements over 10 m or 30 m. Filming at a high frame rate and counting frames, or using a validated sprint or jump app, comes close to timing gates for the price of a tripod. The skill lies in the setup: camera position, start rule and careful frame counting.

                ## Milestones
                1. Phone set to its highest slow-motion frame rate and mounted on a tripod.
                2. A start rule decided, such as first movement of the back foot.
                3. Camera placed square to the finish line to avoid parallax error.
                4. Three sprints or jumps timed twice from the footage, with the two timings agreeing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sprints or jumps measured from video, each timed twice from the footage with readings agreeing within 0.02 seconds."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set your phone to its highest slow-motion frame rate"
                - "Mount the phone on a tripod square to the finish line"
                - "Write the start rule you will use for every timing"
                - "Time three sprints from video twice and compare the readings"
            - name: Push-up, pull-up and plank endurance tests
              description: |-
                ## Purpose
                Max-rep tests look simple, yet results swing widely with the rep standard: chest to the floor or to a fist, dead hang or a slight bend, plank held straight or sagging. Strict written standards and a pause rule, with only clean reps counted, turn them into fair tests of muscular endurance that need nothing beyond a bar. They also appear in many selection standards.

                ## Milestones
                1. A written rep standard for each test, with a video of a good rep.
                2. A pause rule set, such as no rest longer than two seconds at the top.
                3. A partner or video used so reps are counted, not estimated.
                4. Results recorded with the standard used, so they are never compared with looser counts.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Push-up, pull-up and plank results recorded under written rep standards, each confirmed on video at least once."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the rep standard for each test, down to depth and lockout"
                - "Film a set of each to check the reps meet the standard"
                - "Ask a partner to count and call any rep that misses the standard"
                - "Retest all three under the same standards @recurring(monthly:13)"
            - name: What happens in a lab VO2 max and lactate test
              description: |-
                ## Purpose
                Lab tests sound precise, but the result depends on the protocol, the ergometer and how well you know what to expect. Knowing in advance how a ramp or step test runs, what the mask feels like, how blood lactate samples are taken and what the report contains lets you choose a good lab and give a true maximal effort. Read this before deciding whether to book.

                ## Milestones
                1. The difference between ramp and step protocols understood.
                2. The measures a typical report includes listed: VO2 max, thresholds, heart rate and economy.
                3. Questions for a lab written down, including which ergometer they use and whether a retest is included.
                4. One sample report from a sports science lab read through.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of questions for a lab and a summary of what a VO2 max and lactate report contains, prepared before any booking."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a sports science lab's description of its VO2 max protocol"
                - "Find a sample lab report and list what it measures"
                - "Write the questions you would ask before booking"
                - "Note whether the lab tests on your sport's ergometer"
            - name: Lab test booking, worth the money or not
              description: |-
                ## Purpose
                Paying for a lab VO2 max and lactate test can cost as much as a month of coaching, and the numbers are only worth it if they will change how you train. Setting what a lab would tell you against what your field tests already show, and pricing two or three providers, ends in a clear yes or no. University sports science departments sometimes test for less than private clinics.

                ## Milestones
                1. What you would do differently with lab numbers written down.
                2. Two or three labs compared on price, protocol, ergometer and retest offer.
                3. A decision recorded: book, wait, or rely on field tests.
                4. If booking, a date chosen at the end of a training block.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on lab testing, with at least two providers compared on price, protocol and ergometer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write what you would change in training with lab results"
                - "Compare price, protocol and ergometer for two or three labs"
                - "Ask each lab whether a retest is included or discounted"
                - "Record your decision and the reason"
            - name: Rep-max test or true one-rep max for each lift
              description: |-
                ## Purpose
                Singles are the purest strength measure but carry more risk and fatigue, while a three or five rep-max is easier to recover from and safer for less experienced lifters. The right choice can differ by lift: many athletes test a single on the deadlift but a rep-max on the overhead press. Deciding once, lift by lift, keeps future results comparable.

                ## Milestones
                1. Each tested lift listed with your experience and technique confidence on it.
                2. A test type chosen per lift: single, triple or five-rep max.
                3. The formula for converting rep-maxes noted, if you use one.
                4. The choice written onto each lift's protocol card.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each tested lift has a chosen test type written on its protocol card, with the reason in one sentence."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List each lift you test and how confident your technique is"
                - "Choose a single, triple or five-rep max for each lift"
                - "Note the conversion formula you will use, if any"
                - "Add the chosen test type to each lift's protocol card"
            - name: Watch VO2 max estimate versus a field test
              description: |-
                ## Purpose
                Your watch updates a VO2 max figure after runs or rides, which feels like free testing, but the estimate can lag, drift with heat and rest on a max heart rate setting that may be wrong. Recording the watch figure each month beside a proper field test for a few months shows whether the two move together. If they do, the watch is a fair cheap signal; if not, you know to ignore it.

                ## Milestones
                1. Your watch's max heart rate setting checked against your highest recorded value.
                2. The watch estimate recorded monthly beside the nearest field test result.
                3. Three months of paired results compared.
                4. A verdict written: trust as a trend, use with caution, or ignore.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three months of watch estimates recorded beside field test results, with a written verdict on how far to trust the watch."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check the max heart rate setting your watch uses"
                - "Note the watch VO2 max estimate in the register @recurring(monthly:28)"
                - "Compare three months of watch figures with your field results"
                - "Write whether you will keep tracking the watch figure"
            - name: How often to test without costing training
              description: |-
                ## Purpose
                Every maximal test costs a training day or two either side, and testing too often shows mostly noise while eating into the work that drives progress. Counting the sessions testing removed from your last block and setting a ceiling, such as one maximal test a fortnight, protects training. Submaximal checks can fill the gaps.

                ## Milestones
                1. Days lost to testing in the last block counted, including recovery days.
                2. A ceiling set for maximal tests per block.
                3. Tests that could become a submaximal check identified.
                4. The testing calendar adjusted to the new ceiling.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written ceiling on maximal tests per block, applied to the testing calendar for the next two blocks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count training days lost to testing in your last block"
                - "Set a ceiling on maximal tests per training block"
                - "Mark tests that could become a submaximal check"
                - "Adjust the testing calendar to the new ceiling"
            - name: Retiring a test that no longer tells you anything
              description: |-
                ## Purpose
                Some tests stop earning their place: a beginner's strength standard you now pass easily, a sprint you no longer train for, or a test that has caused two niggles. Asking each test once a year whether it changed a decision, and replacing the ones that did not, keeps the battery short and relevant. Keep the old results; just stop adding to them.

                ## Milestones
                1. Each test checked for whether its last three results changed any training decision.
                2. Tests with a ceiling effect, an injury history or no link to your goal listed.
                3. A replacement chosen for each retired test, with a new protocol card.
                4. Retired tests marked in the register with the date they ended.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each test in the battery has a keep or retire verdict dated in the last year, with any replacement on a new protocol card."
                cadence: cyclic
              tasks:
                - "Ask whether each test's last three results changed a decision"
                - "List tests you now pass easily or that have caused niggles"
                - "Write a protocol card for any replacement test"
                - "Review whether each test still earns its place @recurring(yearly)"
            - name: Turning the weakest result into the next block's priority
              description: |-
                ## Purpose
                Test results are most useful when they show where you are relatively weakest, for example strong legs but a slow 3 km, or a big engine but a poor jump. Ranking each result against your own history and the needs of your sport, then giving the weakest quality a defined share of the next block, turns testing into programming. The next test week then judges whether the change worked.

                ## Milestones
                1. Each result ranked against your history and the demands of your sport.
                2. The single weakest quality that matters for your goal named.
                3. A specific change to the next block written, such as one extra session a week.
                4. The test that will judge the change marked on the testing calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One weakest quality named from test results, with a specific change to the next block written and the judging test scheduled."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rank each result against your own history"
                - "Name the weakest quality that matters for your goal"
                - "Ask the agent to suggest two ways to fit more of it into the next block"
                - "Write the change and the test that will judge it"
            - name: Choosing between stopwatch, timing gates and apps
              description: |-
                ## Purpose
                The timing method sets a floor on what you can detect: hand timing errs by a tenth of a second or more, phone video by a frame, and timing gates by a few hundredths. For a 3 km run a stopwatch is fine; for a 10 m sprint it hides any change. Matching the method to the size of change you expect avoids buying gates you do not need, or trusting a stopwatch where it misleads.

                ## Milestones
                1. Each timed test listed with the smallest change you expect to see.
                2. Methods compared on accuracy, cost and whether they need a helper.
                3. A method chosen for each test and written on its protocol card.
                4. Any purchase or club loan arranged before the next test week.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each timed test has a chosen timing method on its protocol card, matched to the size of change you expect to detect."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each timed test and the change you hope to see"
                - "Compare stopwatch, phone video and gates on accuracy and cost"
                - "Ask your club whether it lends timing gates"
                - "Write the chosen timing method on each protocol card"
            - name: Booking and preparing for a lab test day
              description: |-
                ## Purpose
                Treat a lab test like a small race: a bad night or a heavy session the day before wastes the fee and the result. Booking it at a block end, keeping the two days before easy, following the lab's food and caffeine rules and arriving with questions gets full value from the visit. Ask for the raw data as well as the report.

                ## Milestones
                1. The test booked for the end of a training block, not mid-block.
                2. The lab's instructions on food, caffeine and training before the test followed.
                3. Your own shoes, pedals or saddle settings arranged where the lab allows.
                4. The report and raw data received and filed with your register.
                5. Any targets from the report agreed with your coach, if you have one.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A lab test completed with the lab's pre-test instructions followed and the full report and raw data filed within a week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book the lab test for the last week of a training block"
                - "Copy the lab's pre-test instructions into your calendar"
                - "Pack your own shoes, pedals or saddle settings if allowed"
                - "Ask the lab to send the raw data with the report"
            - name: Club pre-season fitness test preparation
              description: |-
                ## Purpose
                Many clubs and squads run a shuttle test such as the multistage beep test or the yo-yo intermittent recovery test in pre-season, and the result can affect selection. Knowing the exact test, practising the turns and pacing, and arriving fresh is worth several shuttles on the day. Six to eight weeks of build-up is enough for most players.

                ## Milestones
                1. The exact test, version and pass mark confirmed with the coach.
                2. A practice run done on a correctly measured 20 m course.
                3. Turn technique and level pacing practised in two short sessions.
                4. The two days before the test kept light.
                5. The result recorded with the level and shuttle reached.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The club pre-season test completed, with the result at or above your practice score and recorded with level and shuttle."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the coach which test, version and pass mark will be used"
                - "Measure out a 20 m course and get the audio track"
                - "Do one full practice run of the test"
                - "Practise turns on the line in two short sessions"
                - "Keep the two days before the test light"
            - name: Entrance fitness test for a service or academy
              description: |-
                ## Purpose
                Police, fire, military and some sports academy or scholarship applications include a fitness test with fixed standards, and failing it can delay an application by months. Getting the official test description, testing yourself against it early and training around the gap gives you time to pass with room to spare. Practise under the exact standards, because assessors count strictly.

                ## Milestones
                1. The official test description and pass standards obtained from the organisation.
                2. A practice attempt of every element done under those standards.
                3. The gap between your score and the pass mark written down for each element.
                4. A training plan built around the weakest element.
                5. A full practice attempt passed at least two weeks before the real test.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full practice attempt meeting every official standard completed at least two weeks before the real entrance test."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download the official test description and standards"
                - "Practise every element once under the official standards"
                - "Write the gap to the pass mark for each element"
                - "Build the next eight weeks of training around the weakest element"
                - "Schedule a full dress rehearsal two weeks before the test"
            - name: Timed public 5 km as a free benchmark
              description: |-
                ## Purpose
                Free, timed weekly 5 km runs in parks give a measured course, a start signal and other runners to pace off, which makes them a decent benchmark for anyone whose sport involves running. Using one fixed course once a month, at an honest effort and in similar weather, builds a long record at no cost. Note the weather and ground, since mud and wind can cost a minute.

                ## Milestones
                1. One local timed course chosen and kept for every benchmark.
                2. An effort rule set: full effort on benchmark weeks, not a social jog.
                3. Weather and underfoot conditions noted with each result.
                4. Six months of monthly results in the register.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least six monthly timed 5 km results on the same course recorded, each with weather and ground notes."
                cadence: rolling
              tasks:
                - "Register for the free timed 5 km run nearest you"
                - "Pick one course to use for every benchmark"
                - "Run the timed 5 km at full effort this month @recurring(monthly:6)"
                - "Write the weather and ground conditions beside each time"
            - name: Goal race result checked against your test predictions
              description: |-
                ## Purpose
                Field tests often predict a race result, such as a 5 km time trial pointing to a half marathon time or a threshold power pointing to a 40 km time trial. Writing the prediction before a goal race and comparing it with what happened shows whether your tests flatter you or undersell you. That correction makes the next prediction, and your race pacing, more accurate.

                ## Milestones
                1. A predicted result written before the race, with the test and formula it came from.
                2. The race result recorded with weather, course and how the pacing went.
                3. The gap between prediction and result worked out as a percentage.
                4. A personal correction noted for next time.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written race prediction from test results, the actual result and the percentage gap recorded together, with a correction noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your predicted race result and the test it comes from"
                - "Record the race result with weather and course notes"
                - "Work out the gap between prediction and result as a percentage"
                - "Note the correction to apply to your next prediction"
            - name: Testing before and after a training camp
              description: |-
                ## Purpose
                Training camps and heavy fortnights cost leave and money, and without a test either side you cannot tell what they did. A short pre-camp test, a post-camp test once fatigue has cleared, usually 7 to 14 days later, and a note on what you actually trained shows the effect. Testing the day you return mostly measures tiredness.

                ## Milestones
                1. One or two tests chosen that match what the camp will train.
                2. A pre-camp result taken under the usual conditions in the week before.
                3. A post-camp test scheduled after enough recovery, not on return.
                4. The difference recorded with notes on the camp's content.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Pre and post camp results on the same tests recorded, with the post test taken at least seven days after the camp ended."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose one or two tests that match the camp's focus"
                - "Test in the week before you leave"
                - "Schedule the post-camp test 7 to 14 days after returning"
                - "Note what the camp actually included beside the results"
            - name: Twenty-minute test set for athletes short of time
              description: |-
                ## Purpose
                Parents, shift workers and anyone fitting training around a demanding job rarely have a spare test week. A minimal battery that fits inside twenty minutes of a normal session, such as a jump, a one-minute max-rep test and a short time trial, still gives a monthly signal. It trades some precision for something you will actually do.

                ## Milestones
                1. Three tests chosen that together fit inside twenty minutes including warm-up.
                2. One protocol card written for the set, with the order fixed.
                3. The set slotted into one regular session a month.
                4. Six months of results recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The twenty-minute test set completed in at least five of the last six months and recorded in the register."
                cadence: rolling
              tasks:
                - "Pick three tests that fit inside twenty minutes with warm-up"
                - "Write one protocol card for the whole set"
                - "Choose the regular session each month that will host it"
                - "Run the twenty-minute test set @recurring(monthly:25)"
            - name: Hybrid athletes testing strength and endurance in one week
              description: |-
                ## Purpose
                Athletes who train both, for example lifters who run or fitness racers, find that a hard 5 km dulls the next day's squat and heavy leg work slows the next run. Ordering the tests with power and strength first after rest, endurance last, and a day between the heaviest, keeps each result clean. Write the order once and use it every time.

                ## Milestones
                1. Strength, power and endurance tests listed with how fatiguing each is.
                2. A fixed order set across the week, with an easy day between heavy tests.
                3. The order used in two test weeks without changes.
                4. Any interference noted, such as a slower run after a heavy lifting day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fixed test order for strength, power and endurance tests used unchanged in two consecutive test weeks."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List your strength, power and endurance tests by how tiring each is"
                - "Set the order with jumps and lifts first and the longest effort last"
                - "Put an easy day between the two heaviest tests"
                - "Note any result that looks blunted by the test before it"
            - name: Recording cycle phase alongside test results
              description: |-
                ## Purpose
                Some athletes notice that strength, endurance or how hard a test feels varies across the menstrual cycle, while others see no pattern at all. Logging cycle day, any symptoms and contraception type beside each result for a few cycles shows whether a pattern exists for you, and whether to plan test weeks around it. The answer is individual, so collect your own data.

                ## Milestones
                1. Cycle day, symptoms and contraception type added as columns in the register.
                2. At least three cycles of test results recorded with those fields.
                3. Any pattern, or the lack of one, written down.
                4. A decision on whether to schedule test weeks by cycle phase.

                ## Notes
                Talk to your doctor about heavy, painful or missed periods. Changes in the cycle can be a sign of low energy availability in athletes training hard.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three cycles of test results logged with cycle day and symptoms, ending in a written decision on whether to plan test weeks around the cycle."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add cycle day and symptom columns to the test register"
                - "Record cycle day beside every test result for three cycles"
                - "Look for any pattern across the three cycles"
                - "Decide whether test weeks will follow your cycle phase"
            - name: Age-graded results for athletes over 40
              description: |-
                ## Purpose
                Masters athletes can keep improving in age-graded terms while raw times slow, and comparing a 10 km at 48 with one at 35 says little on its own. Converting results with published age-grading tables, and setting goals as age-graded percentages, keeps testing honest and motivating. Strength sports publish similar age coefficients.

                ## Milestones
                1. Age-grading tables or coefficients found for your sport.
                2. Past results converted and set beside raw times.
                3. The trend in age-graded terms written down.
                4. Targets for the next year set as age-graded percentages.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every result from the last two years converted to an age-graded figure, with next year's targets expressed in the same terms."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find age-grading tables or coefficients for your sport"
                - "Convert your last two years of results to age-graded figures"
                - "Plot raw and age-graded results on the same chart"
                - "Update your age-graded targets on your birthday @recurring(yearly)"
            - name: Testing in heat, altitude or an unfamiliar venue
              description: |-
                ## Purpose
                Heat, altitude and unfamiliar equipment can make a time trial several percent slower without any loss of fitness. When a test has to happen away from home conditions, recording temperature, humidity, altitude and equipment, and labelling the result as off-protocol, stops it being compared as if it were normal. Some athletes keep a separate column for travel tests.

                ## Milestones
                1. A rule written for which conditions make a result off-protocol.
                2. Temperature, humidity, altitude and equipment recorded for every away test.
                3. Off-protocol results flagged in the register.
                4. A home retest scheduled once you are back.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every test taken away from home conditions is flagged off-protocol with temperature, humidity and altitude recorded, and followed by a home retest."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the temperature and altitude limits beyond which a test is off-protocol"
                - "Add temperature, humidity and altitude columns to the register"
                - "Flag every away result as off-protocol"
                - "Book a home retest within two weeks of returning"
            - name: Coaching a squad through a testing session
              description: |-
                ## Purpose
                Coaches of a club squad or small group need results they can trust across fifteen athletes, which means one protocol, consistent instructions and data kept privately. A testing session planned around stations, with a scorer at each and a short note on consent and privacy, gives every athlete a result and the coach a picture of the group. Share individual results privately, never on a public board.

                ## Milestones
                1. A squad test battery and station layout planned.
                2. Athletes, and parents of juniors, told what will be tested and how results are stored.
                3. Scorers briefed on the standard at each station.
                4. Individual results shared privately with each athlete within a week.
                5. A squad summary used to plan the next block.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A squad testing session held each quarter, with every athlete receiving their own results privately within a week."
                cadence: cyclic
              tasks:
                - "Plan the squad's test stations and the order athletes rotate"
                - "Write a short note on what is tested and how results are stored"
                - "Brief each scorer on the standard at their station"
                - "Run the squad testing session @recurring(quarterly)"
                - "Send each athlete their own results privately"
            - name: Repeatability trial for your main test
              description: |-
                ## Purpose
                Every test has noise: run it twice a week apart with no change in fitness and the scores will still differ. Running your main test twice under identical conditions gives a personal estimate of that noise, so a later change has to beat it before you call it progress. Experienced athletes find this the single most useful number they hold about their own testing.

                ## Milestones
                1. Two attempts of the main test run five to seven days apart with no change in training.
                2. The difference between them worked out as a percentage.
                3. A threshold for real change set at roughly one and a half to two times that difference.
                4. The threshold written on the protocol card.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two repeat attempts of your main test recorded a week apart, with a written threshold for real change on the protocol card."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Plan two attempts of your main test a week apart in a steady week"
                - "Hold training and conditions the same between the two attempts"
                - "Work out the percentage difference between the two scores"
                - "Write the real-change threshold on the protocol card"
            - name: Critical power or critical speed from three efforts
              description: |-
                ## Purpose
                Critical power for cyclists and rowers, or critical speed for runners and swimmers, marks the boundary above which fatigue builds quickly, and it can be estimated from three maximal efforts of different lengths, such as 3, 7 and 12 minutes. The same calculation gives a reserve above that boundary, often called W prime, which explains how long you can surge. Done once a block, it yields two numbers that guide pacing and training alike.

                ## Milestones
                1. Three maximal efforts of different durations completed on separate days.
                2. Critical power or speed and the reserve calculated with a spreadsheet or calculator.
                3. The fit of the model checked, with the three points close to a straight line.
                4. Results compared with your field threshold estimate.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Critical power or speed and its reserve calculated from three dated maximal efforts, with the fit checked and both numbers in the register."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose three effort durations between 3 and 15 minutes"
                - "Complete each effort on a separate day under its protocol card"
                - "Calculate critical power or speed with a spreadsheet or calculator"
                - "Compare the result with your field threshold estimate"
            - name: Power-duration or speed-duration profile
              description: |-
                ## Purpose
                One test shows one point; a profile of your best efforts from 5 seconds to an hour shows the shape of your fitness, sprinter or diesel, and where a block moved it. Building it from the best values already in your training files plus a few dedicated efforts, then refreshing one point each month, gives a living picture without a test week. Compare the shape with the demands of your goal event.

                ## Milestones
                1. Best efforts at 5 seconds, 1 minute, 5 minutes, 20 minutes and 60 minutes, or their running and swimming equivalents, collected.
                2. Missing durations filled with dedicated efforts.
                3. The profile plotted and compared with the demands of your goal event.
                4. One duration refreshed with a new effort each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A profile with best efforts at five or more durations, each dated within the last six months."
                cadence: rolling
              tasks:
                - "Pull your best efforts at five durations from your training files"
                - "Fill any missing duration with a dedicated maximal effort"
                - "Plot the profile and mark the demands of your goal event"
                - "Refresh one duration on the profile with a new effort @recurring(monthly:15)"
            - name: Force-velocity profile from loaded jumps
              description: |-
                ## Purpose
                Two athletes with the same jump height can be limited by different things: one by force, the other by speed. Jumping with four or five loads, from bodyweight up to a heavy bar, and measuring jump height or bar speed at each gives a force-velocity profile that suggests which side to train. It needs a validated jump app or a linear position transducer, and careful technique.

                ## Milestones
                1. Loads chosen from bodyweight upwards, matched to your strength and experience.
                2. Three jumps at each load measured with a validated app or device.
                3. The profile calculated and compared with published reference values.
                4. A training emphasis, force or velocity, chosen for the next block, with a retest date.

                ## Notes
                Only load jumps well below what you squat comfortably with good technique, and consider a coach for the first session.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A force-velocity profile calculated from at least four loads, with a training emphasis chosen and a retest dated on the calendar."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose four or five jump loads you can handle with good technique"
                - "Measure three jumps at each load with a validated app or device"
                - "Calculate the profile with a spreadsheet or the app's own tool"
                - "Pick force or velocity as the next block's emphasis and date a retest"
            - name: Portable lactate analyser step test
              description: |-
                ## Purpose
                Handheld lactate meters let coaches and experienced athletes run a step test outside a lab: rising stages of three to five minutes, a finger or earlobe sample at the end of each, and a curve that shows where lactate starts to climb. The value lies in repeating the same protocol each block and watching the curve shift. It needs careful hygiene, a helper and a reliable stage protocol.

                ## Milestones
                1. Meter, strips, lancets, gloves and a sharps container gathered.
                2. A step protocol written with stage length, increments and sampling point.
                3. One practice test run to settle sampling technique and timing.
                4. A lactate curve plotted and the chosen threshold markers recorded.
                5. A repeat test on the same protocol scheduled for the next block end.

                ## Notes
                Use single-use lancets, gloves and a proper sharps container, and follow local rules for disposing of them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lactate curve from a written step protocol plotted and recorded, with a repeat test on the same protocol dated."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the step protocol with stage length and increments"
                - "Gather the meter, strips, lancets, gloves and a sharps container"
                - "Run a practice test with a helper to settle sampling timing"
                - "Plot the lactate curve and record your threshold markers"
            - name: Thirty-second all-out test for anaerobic capacity
              description: |-
                ## Purpose
                Sports built on repeated hard efforts, such as track cycling, rowing, combat sports and team sports, depend on anaerobic capacity, which a 30-second all-out effort on a bike or erg measures as peak power, mean power and the drop between them. It is brutally hard, so it suits experienced athletes who have screened, warmed up properly and have someone nearby. Run twice a year, it shows whether the top end is keeping pace with the engine.

                ## Milestones
                1. Ergometer, resistance setting and start procedure written on a protocol card.
                2. Peak power, mean power and the drop from peak to finish recorded.
                3. A helper present and a cool-down of at least ten minutes completed.
                4. A retest on the same machine scheduled six months later.

                ## Notes
                Expect nausea in the minutes afterwards. Keep moving gently through the cool-down and never do this test alone.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Peak power, mean power and fatigue drop from a 30-second all-out test recorded, with a retest on the same machine dated six months later."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set the ergometer and resistance you will always use"
                - "Write the start procedure, rolling or standing, on the card"
                - "Arrange a helper to be present for the whole test"
                - "Record peak power, mean power and the drop to the finish"
---

# Fitness Testing & Benchmarks

This area is for athletes who want an objective answer to whether training is working, from time trials and max lifts to jumps and VO2 estimates, run the same way every time. It starts with foundations (choosing a short battery, screening, protocol cards, test-day conditions, venues and kit, a results register, the baseline week, a testing calendar and fixed warm-ups), then the machinery of block-end retests, monthly rotations, submaximal and jump check-ins, reviews and audits, the skills of pacing, maxing safely and reading estimates and norms, decisions about labs, test types, timing and frequency, test events from lab days to entrance tests, versions for busy, hybrid and older athletes and for coaches, and finally repeatability trials, critical power, duration profiles, lactate curves and anaerobic tests.

What repeats is a Monday jump check, monthly benchmarks, submaximal checks, a short test set and a timed 5 km spread across different days, quarterly retest weeks with their review, equipment checks, protocol audits and squad sessions, and a yearly full battery with screening and a keep or retire verdict on each test. The Operational checklist, Metrics log and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
