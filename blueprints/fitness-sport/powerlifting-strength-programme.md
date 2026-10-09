---
id: fitness-sport.powerlifting-strength-programme
name: Powerlifting Strength Programme
description: "A powerlifting system from federation choice and baseline maxes to periodised blocks, technique work on squat, bench and deadlift, attempt selection and meet day."
category: personal
version: 1.0.0
tags: [fitness-sport, powerlifting-strength-programme, athlete, powerlifting, squat, bench-press, deadlift, meet-preparation]
author: Aurum Technology
starter_structure:
  templates:
    - training-program
    - purchase-decision
    - metrics-log
    - vendor
    - operational-checklist
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Powerlifting Strength Programme
          description: "Building squat, bench press and deadlift strength through periodised programming, technique work and meet preparation for gym-goers and competitive lifters."
          projects:
            - name: Federation, division and tested status choice
              description: |-
                ## Purpose
                Powerlifting is split across several federations with different rules on kit, drug testing, weigh-in timing and commands, and the one you choose shapes how you train for the next few years. Deciding early between a tested or untested federation and a raw or equipped division means your programme, belt and attempts are built for the platform you will actually lift on.

                ## Milestones
                1. The federations running meets within a day's travel listed with their testing policy.
                2. Raw (classic) and equipped divisions compared for the kit each allows.
                3. Weigh-in timing for each federation noted, two-hour or twenty-four-hour.
                4. One federation and division chosen, with the reason written in a sentence.

                ## Notes
                Many lifters start in a tested classic division because the kit is cheapest and the meets most common. You can always join a second federation later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A federation and division chosen and recorded, with its testing policy, weigh-in timing and permitted kit written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the federations holding meets within a day's travel"
                - "Read each federation's testing policy and membership fee"
                - "Compare the kit permitted in raw and equipped divisions"
                - "Write down your chosen federation and division with one reason"
            - name: Rep-max baseline for squat, bench and deadlift
              description: |-
                ## Purpose
                Every percentage in a programme hangs off a number, and guessing your max tends to mean either crushing weeks or wasted ones. Working up to a solid three-rep or five-rep max on each lift, filmed and to competition depth, gives an estimated one-rep max you can programme from without the risk of a true max test in your first week.

                ## Milestones
                1. A clean, to-depth rep max recorded for the squat with the load and reps.
                2. A paused bench press rep max recorded the same week.
                3. A deadlift rep max recorded with no hitching.
                4. An estimated one-rep max worked out for each lift with one formula, used consistently.
                5. The three estimates added into a starting estimated total.

                ## Notes
                Stop each test set when form breaks, not when you fail. A grinding, ugly rep makes the estimate optimistic.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Filmed rep maxes for squat, paused bench and deadlift logged, with an estimated one-rep max and estimated total from one formula."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one max estimation formula and note it in your log"
                - "Work up to a three to five rep max on the squat, filmed side on"
                - "Test a paused bench press rep max later the same week"
                - "Test a deadlift rep max and work out all three estimates"
            - name: Choosing a periodised strength programme
              description: |-
                ## Purpose
                Novice linear progression, block periodisation, daily undulating and RPE-based templates all work, but they suit different schedules, recovery and experience. Picking one deliberately, for a fixed run of at least two blocks, stops the programme hopping that leaves many gym-goers lifting the same weights a year later.

                ## Milestones
                1. Your training age, available days and session length written down.
                2. Three programme styles compared for frequency per lift and weekly volume.
                3. One programme chosen and loaded with your baseline numbers.
                4. A commitment recorded to run it for at least two full blocks before judging it.

                ## Notes
                Start from the **Training program** template. If your lifts still go up every session, a simple linear programme will outpace anything clever for now.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One named programme chosen, loaded with your baseline numbers and committed to for at least two full blocks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down your training days, session length and training age"
                - "Compare three programme styles for frequency and weekly volume"
                - "Load the chosen programme with your estimated maxes"
                - "Put the end date of the second block in your calendar"
            - name: Filmed technique audit against competition standards
              description: |-
                ## Purpose
                Lifts that pass in the gym often fail on the platform: squats a few centimetres high, bench presses that move before the press command, deadlifts that ramp up the thighs. Filming every lift from the referees' angles and checking each against your federation's rules finds these faults while they are cheap to fix.

                ## Milestones
                1. Side and front videos of a working set on each lift.
                2. Squat depth checked frame by frame against the hip crease rule.
                3. Bench press checked for a visible pause and buttocks staying on the bench.
                4. Deadlift checked for hitching and full lockout.
                5. A short list of faults ranked by how likely each is to cost a red light.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of technique faults on each lift, ranked by red-light risk, made from side and front video checked against the rulebook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up your phone at hip height to the side of the rack"
                - "Film a working set of each lift from the side and the front"
                - "Pause each squat video at the bottom to check hip crease depth"
                - "Rank the faults you find by how likely each is to be red-lighted"
            - name: Belt, lifting shoes and wrist wraps purchase
              description: |-
                ## Purpose
                A lever or prong belt, flat or raised-heel shoes and a pair of wrist wraps are the kit almost every raw lifter ends up owning, and the wrong thickness or a non-approved brand can be refused at equipment check. Buying once, against your federation's approved list, avoids paying twice.

                ## Milestones
                1. Your federation's approved kit rules and brand list checked.
                2. Belt thickness, width and closure type decided.
                3. Squat shoe heel height chosen to suit your squat style.
                4. All three items bought and worn in training before any meet.

                ## Notes
                Start from the **Purchase decision** template. A 10 mm belt suits most lifters and is easier to brace into than a 13 mm one.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Belt, shoes and wrist wraps bought that comply with your federation's approved kit list, each used in at least three sessions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download your federation's approved equipment list"
                - "Measure your waist where the belt will sit"
                - "Shortlist belts by thickness, width and closure type"
                - "Wear the new kit for three training sessions before relying on it"
            - name: Gym equipment check for powerlifting
              description: |-
                ## Purpose
                Not every gym suits powerlifting: some ban chalk, lack a bench with a proper rack height, have no deadlift platform or only own bumper plates that change how a pull feels. Checking what your gym has, and what it allows, tells you whether to stay, ask for changes or find a strength gym nearby.

                ## Milestones
                1. A checklist of rack, bench, bar, plate, platform and chalk availability completed.
                2. Busy hours for the squat racks noted.
                3. Gaps raised with the gym, or a strength gym within reach found.
                4. A decision recorded: stay, ask for changes or move.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A completed equipment checklist for your gym and a recorded decision to stay, ask for changes or move."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the rack, bench and bar types at your gym"
                - "Ask the staff about chalk and deadlift drop rules"
                - "Count free squat racks at your usual training time"
                - "Find any strength gym within thirty minutes for comparison"
            - name: Powerlifting log with e1RM and RPE columns
              description: |-
                ## Purpose
                Sessions recorded only as sets and reps cannot show whether a lift is moving. A log that records the load, reps and RPE of every top set and the estimated one-rep max it implies turns each session into a data point, and makes block reviews and coach check-ins take minutes rather than an evening.

                ## Milestones
                1. A log with columns for date, lift, load, reps, RPE, estimated max and notes.
                2. Your baseline rep maxes entered as the first rows.
                3. An estimated max calculated automatically from load, reps and RPE.
                4. Four weeks of sessions entered in full.

                ## Notes
                Start from the **Metrics log** template. Keep variations on their own rows so a pause squat never inflates your competition squat estimate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A log holding four consecutive weeks of sessions, with RPE and an estimated one-rep max on every top set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create columns for lift, load, reps, RPE and estimated max"
                - "Enter your baseline rep maxes as the first rows"
                - "Add a formula that estimates a max from load, reps and RPE"
                - "Log every top set within an hour of finishing the session"
            - name: Warm-up ramp for the three lifts
              description: |-
                ## Purpose
                Warm-up sets that are too few leave the first working set feeling heavy, and too many sap the strength you came to use. Writing a fixed ramp of jumps from the empty bar to your top set for each lift makes training days consistent and becomes the basis of your warm-up room plan on meet day.

                ## Milestones
                1. A written ramp for each lift from empty bar to top set, in five to seven jumps.
                2. Rest times between warm-up sets noted.
                3. The ramps tested over two weeks and adjusted.
                4. A shortened ramp ready for days when time is tight.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written warm-up ramps for squat, bench and deadlift, tested over two weeks, with a shortened version for short sessions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a ramp from empty bar to your squat top set"
                - "Write matching ramps for bench press and deadlift"
                - "Time each ramp during two weeks of training"
                - "Write a shorter ramp for days with less time"
            - name: Starting weight class decision
              description: |-
                ## Purpose
                Weight classes decide who you compete against and which records and qualifying totals apply. For a first meet most coaches suggest lifting in the class you already sit in, so the decision is mainly about knowing your weekly average and where the class limits fall, not about cutting.

                ## Milestones
                1. Your federation's weight classes for your sex and age written down.
                2. Two weeks of morning weigh-ins averaged.
                3. The class you naturally sit in identified, with the margin to the limit.
                4. A decision recorded on whether to enter that class or the next one up.

                ## Notes
                Avoid planning a weight cut for a first meet. Lifting in your natural class keeps the focus on technique and attempts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A weight class chosen and written down, based on a two-week bodyweight average and the margin to the class limit."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy your federation's weight classes into your log"
                - "Weigh yourself on the same scales for fourteen mornings"
                - "Compare the average with the nearest class limits"
                - "Record the class you will enter and why"
            - name: Weekly squat, bench and deadlift training plan
              description: |-
                ## Purpose
                Most intermediate lifters train each competition lift two or three times a week, and the plan falls apart when sessions are improvised around a busy diary. Fixing which days are heavy squat, volume bench or deadlift, and planning loads every Sunday, means you walk in knowing the top set rather than deciding by mood.

                ## Milestones
                1. Training days fixed in the calendar with the main lift for each.
                2. Each week's top sets and back-off sets planned before Monday.
                3. Missed sessions moved within the week, not stacked onto the next.
                4. Twelve consecutive weeks run to plan with no more than two missed sessions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks run with loads planned in advance and no more than two missed sessions."
                cadence: rolling
              tasks:
                - "Fix your training days and the main lift for each"
                - "Plan next week's top sets and back-off sets @recurring(weekly:sun)"
                - "Move a missed session to a free day in the same week"
                - "Mark each completed session in the log"
            - name: Autoregulation rules for heavy days
              description: |-
                ## Purpose
                Some days a prescribed top set at RPE 8 feels like RPE 9.5, and pushing through every time builds fatigue that stalls the block. Writing simple rules in advance, such as dropping back-off sets when a top set overshoots by a full point, lets you adjust on the day without guessing or ego.

                ## Milestones
                1. Written rules for overshooting and undershooting a target RPE.
                2. A rule for when to end a session early.
                3. Each adjustment noted in the log with the reason.
                4. A review after one block showing how often the rules were used.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written autoregulation rules followed for one full block, with every adjustment logged and reviewed at the block end."
                cadence: rolling
              tasks:
                - "Write a rule for top sets that overshoot the target RPE"
                - "Write a rule for days when the bar moves faster than planned"
                - "Note each adjustment and its reason in the log"
                - "Review the week's RPE overshoots and what caused them @recurring(weekly:fri)"
            - name: Monthly lift video review
              description: |-
                ## Purpose
                Technique drifts slowly, especially as loads climb, and you cannot feel a bar path that has moved five centimetres forward. Filming top sets once a month and comparing them with last month's clips catches drift early, and gives a coach or training partner something concrete to comment on.

                ## Milestones
                1. Top sets of all three lifts filmed from the same angle each month.
                2. Clips stored in one folder, named by date and lift.
                3. Each month's clips compared with the previous month's.
                4. One technique cue chosen for the coming month from what the video shows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of filmed top sets stored by date, each with a recorded cue for the following month."
                cadence: rolling
              tasks:
                - "Create a folder for lift videos named by date and lift"
                - "Film top sets of squat, bench and deadlift @recurring(monthly:12)"
                - "Compare the new clips with last month's side by side @recurring(monthly:14)"
                - "Write one cue to focus on for the month"
            - name: End-of-block review and next block plan
              description: |-
                ## Purpose
                Blocks of four to six weeks only work if the end of each one is used to decide what comes next. Comparing estimated maxes, RPE at matched loads and how your joints felt at the start and end of a block tells you whether to repeat it, raise volume or change the main variations.

                ## Milestones
                1. Start and end estimated maxes for each lift compared.
                2. RPE at the same loads compared across the block.
                3. What worked and what did not written in three lines each.
                4. The next block's focus, variations and volume decided.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written review at the end of each block, comparing start and end estimated maxes and stating the next block's focus."
                cadence: cyclic
              tasks:
                - "Pull start and end estimated maxes for each lift from the log"
                - "Ask the agent to summarise RPE trends across the block from your log"
                - "Write three lines on what worked and three on what did not"
                - "Decide the next block's focus and main variations"
            - name: Accessory rotation for weak points
              description: |-
                ## Purpose
                Accessories such as close-grip bench, Romanian deadlifts and rows are there to fix specific weaknesses, but many lifters keep the same ones for years after they stop helping. Linking each accessory to a named weak point, and swapping it when it stops progressing, keeps the extra work earning its place.

                ## Milestones
                1. Each accessory linked in writing to the weakness it targets.
                2. Progress on each accessory tracked across a block.
                3. Stalled accessories swapped for a new variation.
                4. No more than four accessories in any one session.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every accessory in the programme linked to a named weakness, with stalled ones swapped at least once over two blocks."
                cadence: rolling
              tasks:
                - "List your current accessories beside the weakness each targets"
                - "Drop any accessory with no clear purpose"
                - "Check which accessories are still progressing @recurring(monthly:5)"
                - "Swap a stalled accessory for a related variation"
            - name: Weekly bodyweight average for your class
              description: |-
                ## Purpose
                Daily bodyweight swings by a kilogram or more with water, salt and food, so a single reading says little about whether you are drifting out of your class. A morning weigh-in and a weekly average shows the real trend months before a meet, when any change can still be slow and comfortable.

                ## Milestones
                1. A morning weigh-in routine in place, same scales, same conditions.
                2. A weekly average recorded each Monday.
                3. The average compared with your class limit.
                4. Twelve weeks of averages showing the trend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly bodyweight averages recorded beside your class limit."
                cadence: rolling
              tasks:
                - "Put the scales somewhere you pass every morning"
                - "Weigh in each morning after waking @recurring(daily)"
                - "Record the weekly average beside your class limit @recurring(weekly:mon)"
                - "Flag any month where the average drifts toward the limit"
            - name: Spotter, safety arms and collar habits
              description: |-
                ## Purpose
                Heavy squats and bench presses are the two lifts where a missed rep can pin you, and most gym accidents come from no safety arms, no collars or a spotter who did not know the plan. Agreeing a standard set-up and spotter brief, and using it on every heavy set, removes the risk without slowing training.

                ## Milestones
                1. Safety arm heights set and written down for squat and bench.
                2. Collars used on every working set.
                3. A spotter brief agreed: number of reps, hand-off, when to take the bar.
                4. Bailing out of a missed squat practised with a light load.

                ## Notes
                Never bench heavy alone with collars on and no safety arms: if the bar pins you, you need to be able to tip the plates off.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Safety arm heights recorded, collars on every working set and a spotter brief agreed and used for one full block."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set and note the safety arm height for squat and bench"
                - "Pack a pair of collars in your gym bag"
                - "Agree the hand-off and spotting calls with your training partner"
                - "Practise dumping a missed squat onto the safeties with light weight"
            - name: Quarterly estimated total review
              description: |-
                ## Purpose
                Session to session numbers are noisy, but the total of your three best estimated maxes each quarter shows the real direction. A quarterly check against your own last total, and against the class standards you are aiming at, keeps the long-term goal in view and shows when a programme change is due.

                ## Milestones
                1. Your best estimated max for each lift this quarter recorded.
                2. The estimated total compared with last quarter's.
                3. Your bodyweight and class noted beside the total.
                4. Four quarterly totals recorded in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four quarterly estimated totals recorded in a year, each compared with the previous quarter and your class target."
                cadence: cyclic
              tasks:
                - "Find the best estimated max for each lift this quarter"
                - "Record your estimated total and bodyweight @recurring(quarterly)"
                - "Compare the total with last quarter's"
                - "Note whether the rate of gain calls for a programme change"
            - name: Annual training year with two meets
              description: |-
                ## Purpose
                Lifters who compete once or twice a year progress better when the year is planned backwards from those dates: off-season blocks for building muscle and fixing weaknesses, then strength blocks, then a peak. Laying out the year in blocks stops meets arriving at the wrong point in a cycle.

                ## Milestones
                1. One or two target meets chosen for the year.
                2. The year divided into off-season, strength and peaking blocks.
                3. Holidays and busy work periods marked so heavy blocks avoid them.
                4. Entry dates for each meet in the calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page training year showing target meets, block types and entry dates, rebuilt at least once a year."
                cadence: cyclic
              tasks:
                - "Choose one or two meets to target this year"
                - "Divide the weeks before each meet into block types"
                - "Check entry windows for upcoming meets @recurring(monthly:3)"
                - "Rebuild the training year plan from the meet calendar @recurring(yearly)"
            - name: Bracing and belt tightness practice
              description: |-
                ## Purpose
                Bracing, a big breath into the belly held against a tight belt, is what keeps the torso rigid under a heavy squat or deadlift, and few lifters are taught it properly. Practising the breath and finding the right belt notch with lighter loads makes it automatic before it is tested near a max.

                ## Milestones
                1. The breath-and-brace sequence written as three cues.
                2. Belt notch chosen for squat and for deadlift.
                3. Bracing practised on warm-up sets for four weeks.
                4. Video showing a stable torso on top sets.

                ## Notes
                If you have high blood pressure, a hernia or are pregnant, check with your clinician before holding your breath under heavy loads.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Belt notches recorded for squat and deadlift and four weeks of bracing practice logged, with video showing a stable torso on top sets."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write your bracing sequence as three short cues"
                - "Find the belt notch that lets you push your belly into it"
                - "Run belted brace holds before squatting @recurring(weekly:mon,thu)"
                - "Film a top set to check your torso stays still"
            - name: Low-bar or high-bar squat trial
              description: |-
                ## Purpose
                Low-bar squatting lets many lifters move more weight with a more forward torso, while high-bar suits others with long legs or sore shoulders. Running each style for a few weeks with matched effort, and comparing estimated maxes and comfort, settles the question with your own numbers instead of internet arguments.

                ## Milestones
                1. Both bar positions practised with light loads for two weeks.
                2. A rep max tested in each style.
                3. Shoulder, elbow and hip comfort noted for each.
                4. One style chosen for the next year of training.
              priority: low
              deadlineOffsetDays: 42
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A squat style chosen and recorded, based on rep max tests and comfort notes from both bar positions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Film a light set in each bar position"
                - "Run two weeks of each style at matched effort"
                - "Test a rep max in each style and log it"
                - "Record the style you will keep and why"
            - name: Bench press setup, arch and leg drive
              description: |-
                ## Purpose
                A good bench press is mostly built before the bar leaves the rack: shoulder blades pulled back and down, a legal arch, feet planted and a hand-off you trust. Learning a fixed setup routine shortens the range of motion within the rules, keeps the shoulders in a safer position and makes heavy singles repeatable.

                ## Milestones
                1. A setup routine written as five ordered steps.
                2. Foot position and grip width measured and noted.
                3. Setup rehearsed on every warm-up set for four weeks.
                4. Video of top sets showing buttocks on the bench and a stable arch.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A five-step bench setup written down, rehearsed for four weeks and confirmed on video with buttocks on the bench."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write your bench setup as five steps in order"
                - "Mark your grip width relative to the rings on the bar"
                - "Rehearse the full setup on warm-up sets each bench day @recurring(weekly:tue,sat)"
                - "Film a top set from the side and check your buttocks stay down"
            - name: Sumo or conventional deadlift trial
              description: |-
                ## Purpose
                Neither stance is easier in general: sumo shortens the range of motion and suits some hip structures, while conventional suits lifters with longer arms or a strong back. A matched trial of both, with filmed sets and rep max tests, picks the stance your build favours.

                ## Milestones
                1. A sumo stance width and hand position found with light pulls.
                2. Four weeks of each stance run at matched effort.
                3. A rep max tested in each stance.
                4. One stance chosen as your competition deadlift.
              priority: low
              deadlineOffsetDays: 70
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A competition deadlift stance chosen and recorded, based on rep max tests in both stances after four weeks of each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a sumo stance width with five light pulls"
                - "Run four weeks of each stance at the same RPE"
                - "Test a three-rep max in both stances"
                - "Choose your competition stance and note the numbers"
            - name: Deadlift lockout to the rulebook standard
              description: |-
                ## Purpose
                Deadlifts are red-lighted for hitching, for resting the bar on the thighs, or for lowering before the down signal, and these faults often appear only on heavy pulls. Practising a clean lockout, holding it still and lowering under control on the command makes the last few centimetres of a max as legal as the first.

                ## Milestones
                1. The rule wording on hitching, lockout and lowering read.
                2. Heavy singles filmed and checked for hitching.
                3. Top sets held at lockout until a partner gives the down command.
                4. Every heavy pull lowered under control with hands on the bar.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four consecutive weeks of heavy pulls filmed with no hitching and every top set held for a partner's down command."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your rulebook's wording on deadlift lockout and lowering"
                - "Film heavy singles and check for any upward hitching"
                - "Hold every top set at lockout until a partner says down"
                - "Lower the bar under control instead of dropping it"
            - name: Learning the RPE and reps-in-reserve scales
              description: |-
                ## Purpose
                RPE on a ten-point scale, or reps in reserve, lets a programme prescribe effort rather than a fixed load, but it only works once your ratings match reality. Calibrating by predicting RPE and then checking the reps you actually had left turns a vague feeling into a reliable gauge within a couple of months.

                ## Milestones
                1. The RPE and reps-in-reserve scales written at the front of your log.
                2. Predicted RPE written before and actual RPE after top sets.
                3. Occasional reps-to-failure checks on safe lifts compared with your ratings.
                4. Ratings within half a point of reality on most top sets.

                ## Notes
                Test true reps in reserve on safer movements such as leg press or machine rows, not on heavy squats.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight weeks of predicted and actual RPE logged, with most top-set ratings within half a point of reality."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Copy the RPE and reps-in-reserve scale into your log"
                - "Write a predicted RPE before each top set"
                - "Compare predicted and actual RPE on one top set @recurring(weekly:thu)"
                - "Test reps to failure on a machine lift to check your ratings"
            - name: Reading your federation's technical rulebook
              description: |-
                ## Purpose
                Most lifters lose attempts at their first meet to rules they never read: racking before the command, moving the feet on the bench, unapproved socks or the wrong singlet. An evening with the technical rules, turned into a one-page summary, saves kilos on the day.

                ## Milestones
                1. The current technical rulebook downloaded.
                2. Rules and commands for each lift summarised in plain words.
                3. Kit rules summarised, including socks, singlet and knee sleeves.
                4. Questions you could not answer sent to a referee or coach.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page summary of the commands, lift rules and kit rules for your division, with open questions answered by a referee or coach."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the current technical rulebook for your federation"
                - "Summarise the commands and rules for each lift on one page"
                - "List the kit rules that apply to your division"
                - "Send any unclear points to a referee or experienced coach"
            - name: Periodisation basics for strength
              description: |-
                ## Purpose
                Programmes make more sense once you understand why volume falls as intensity rises, why fatigue hides fitness, and what accumulation, intensification and realisation blocks are for. A few weeks of reading from a credible strength textbook means you can judge a programme instead of following it blindly.

                ## Milestones
                1. One credible book or course on strength periodisation chosen.
                2. Notes made on volume, intensity, fatigue and specificity.
                3. Your current programme mapped onto those ideas.
                4. Three questions about your own training answered from the reading.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes on periodisation and a one-page map of your current programme's blocks, answering three questions about your training."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one credible strength periodisation book or course"
                - "Read a chapter a week and note the key ideas"
                - "Map your current programme onto the block types you read about"
                - "Answer three questions about your own training from the notes"
            - name: Bench press sticking point fix
              description: |-
                ## Purpose
                Bench presses that fail a few centimetres off the chest are a different problem from ones that stall halfway or near lockout, and each needs different work. Finding where your misses happen on video, then running one block of targeted variations such as long-pause bench, Spoto press or board presses, fixes the right weakness.

                ## Milestones
                1. Three recent missed or grinding reps reviewed on video.
                2. The sticking point named: off the chest, mid-range or lockout.
                3. One block of two matching variations run.
                4. The sticking point rechecked on video at the block end.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A named bench sticking point, one block of matching variations completed and a before and after video comparison recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find three grinding bench reps on video and mark where they slow"
                - "Name the sticking point in your log"
                - "Pick two variations that load that range"
                - "Recheck the same range on video at the end of the block"
            - name: Squat strength out of the hole
              description: |-
                ## Purpose
                Squats that stall just above parallel usually point to weak quads, a lost brace or a bounce that disappears under heavy loads. A block built around pause squats and pin squats teaches you to drive out of the bottom without the stretch reflex, which is what a near-max squat demands.

                ## Milestones
                1. The point where heavy squats slow identified on video.
                2. Pause squats and pin squats programmed for one block.
                3. Loads and RPE on both variations logged weekly.
                4. Competition squat retested after the block.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One block of pause and pin squats completed and logged, with the competition squat rep max retested at the end."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark where your heaviest squats slow on video"
                - "Add pause squats to one squat day for a block"
                - "Set pins just below the sticking point for pin squats"
                - "Retest your competition squat rep max after the block"
            - name: Deadlift speed off the floor
              description: |-
                ## Purpose
                If heavy pulls are slow to break the floor, the lockout never gets a chance. Deficit deadlifts, deadlifts paused just below the knee and a check of your start position build strength in the first few centimetres, where most failed conventional pulls stall.

                ## Milestones
                1. Start position checked on video for hips, shoulders and bar over midfoot.
                2. One floor-focused variation chosen for a block.
                3. Variation loads and bar speed notes logged.
                4. Floor speed compared on video before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One block of a floor-focused deadlift variation logged, with a before and after video of floor speed compared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Film your setup and first pull from the side"
                - "Choose deficit or paused deadlifts for the next block"
                - "Log the variation load and bar speed each week"
                - "Compare floor speed on video at the block end"
            - name: Hiring an online powerlifting coach
              description: |-
                ## Purpose
                A good coach writes the programme, reviews your videos weekly and handles attempts on meet day, and for many intermediate lifters that is worth more than any template. Interviewing two or three coaches against the same questions, on price, check-in format and meet experience, avoids paying monthly for a spreadsheet you could have downloaded.

                ## Milestones
                1. What you want from a coach written down: programme, video review, meet handling.
                2. Three coaches shortlisted with prices and check-in format.
                3. A call or message exchange with each about their method.
                4. One coach chosen, or the decision to stay self-coached recorded.

                ## Notes
                Start from the **Vendor** template. Ask each coach how many lifters they have taken through a meet in your federation.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three coaches compared on price, check-in format and meet experience, with a coach hired or a reasoned decision to stay self-coached."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what you want a coach to handle"
                - "Shortlist three coaches and note their monthly price"
                - "Ask each how weekly check-ins and video feedback work"
                - "Record your choice and agree a first check-in date"
            - name: Gaining into the next weight class
              description: |-
                ## Purpose
                Once your total is near the top of your class, moving up with more muscle often adds more to the total than another year at the same bodyweight. A slow, planned gain over several months, checked against the weekly average and agreed with a dietitian if you have health conditions, keeps the added weight mostly useful.

                ## Milestones
                1. A target class and target gain rate agreed.
                2. Food intake adjusted and recorded for a month.
                3. Weekly averages tracking within the planned rate.
                4. The new class reached with your estimated total recorded.

                ## Notes
                A registered dietitian or sports nutritionist can set intake targets. This project organises the plan, not the numbers.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The new weight class reached at the planned rate, with weekly averages logged and the estimated total retested."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Decide the class you are moving into and by when"
                - "Ask a sports dietitian or nutritionist about a sensible gain rate"
                - "Track the weekly average against the planned rate"
                - "Retest your estimated total once you reach the new class"
            - name: Hook grip or mixed grip for deadlifts
              description: |-
                ## Purpose
                Double-overhand grip usually fails first as deadlifts get heavy, and lifters then choose between mixed grip, which is quick to learn but loads the arms unevenly, and hook grip, which is painful for weeks but symmetrical. Testing both over a block and building grip with holds settles which one you will pull with on the platform.

                ## Milestones
                1. The heaviest double-overhand pull you can hold recorded.
                2. Mixed grip and hook grip each practised for three weeks.
                3. Heavy holds added at the end of deadlift sessions.
                4. A competition grip chosen and used on all heavy pulls.

                ## Notes
                If you choose mixed grip, alternate which hand is under on lighter sets to keep the load balanced.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A competition grip chosen after three weeks of each option and used on every heavy pull for a full block."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the heaviest pull you can hold double overhand"
                - "Practise hook grip on warm-up sets for three weeks"
                - "Add two sets of heavy holds at the end of deadlift day @recurring(weekly:wed)"
                - "Choose the grip you will use on the platform"
            - name: First meet entry and membership
              description: |-
                ## Purpose
                Entering a first meet gives every block a date to aim at, and novice and local meets exist for exactly this. Joining the federation, entering early before the meet fills and booking travel turns a vague plan to compete someday into a dated commitment.

                ## Milestones
                1. A local or novice meet chosen 12 to 16 weeks away.
                2. Federation membership bought and any testing registration done.
                3. Entry submitted and confirmation received.
                4. Travel and accommodation booked if needed.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Federation membership held and an entry confirmed for a meet 12 to 16 weeks away, with travel booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find novice or local meets 12 to 16 weeks away"
                - "Buy federation membership and complete any testing registration"
                - "Submit the entry and save the confirmation"
                - "Book travel and a bed for the night before if needed"
            - name: Twelve-week meet preparation block
              description: |-
                ## Purpose
                The twelve weeks before a meet move from higher volume with variations toward heavy singles on the competition lifts with competition commands. Planning those phases against the meet date, with fixed checkpoints, means the heaviest work lands three to four weeks out rather than in meet week.

                ## Milestones
                1. Twelve weeks counted back from the meet and split into phases.
                2. Variations phased out and competition lifts phased in.
                3. Heavy singles with commands scheduled from week eight.
                4. Checkpoint estimated maxes recorded at weeks four and eight.
              priority: high
              deadlineOffsetDays: 112
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of meet preparation completed to plan, with checkpoint estimated maxes logged at weeks four and eight."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Count twelve weeks back from the meet date in your calendar"
                - "Split the weeks into volume, strength and peaking phases"
                - "Schedule singles with competition commands from week eight"
                - "Record checkpoint estimated maxes at weeks four and eight"
            - name: Peak and taper for the final three weeks
              description: |-
                ## Purpose
                Fatigue drops faster than strength in the last weeks before a meet, which is why a taper raises performance. Cutting volume in planned steps while keeping some heavy singles, and trying nothing new, lets you arrive fresh without losing the feel of a heavy bar.

                ## Milestones
                1. A heaviest single day set about three weeks out.
                2. Volume cut in planned steps over the final two weeks.
                3. The last heavy session placed several days before the meet.
                4. Meet week reduced to light opener practice.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written three-week taper followed to the meet, with the last heavy session and meet-week loads logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark the heaviest single day about three weeks out"
                - "Write the planned volume for each of the final two weeks"
                - "Set the date of your last heavy session"
                - "Plan meet week as light opener practice only"
            - name: Attempt selection plan
              description: |-
                ## Purpose
                Three attempts per lift, nine in all, and many first meets are spoiled by openers that were too heavy. Choosing openers you could triple on a bad day, a second you are confident of and a third that depends on how the second moved, written down before meet day, keeps decisions calm when adrenaline is high.

                ## Milestones
                1. Openers chosen that you have done for a triple in training.
                2. Second attempts set at weights you have hit recently.
                3. Third attempt options written for a fast second and a slow second.
                4. Attempts rounded to the increments your federation allows.

                ## Notes
                Many coaches put openers around 90 percent of a current max. Know the time limit for submitting attempt changes, and who will submit them.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written attempt plan for all nine lifts, with openers proven in training and two options for each third attempt."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick openers you have tripled recently in training"
                - "Set second attempts at weights hit in the last month"
                - "Write a faster and a slower third attempt option for each lift"
                - "Round every attempt to your federation's minimum increment"
            - name: Meet-day timeline and kit bag
              description: |-
                ## Purpose
                Meet days run from an early weigh-in to a late deadlift, often ten hours, and a forgotten singlet, the wrong socks or no food in the warm-up room cost more lifters than weakness. A timeline from alarm to last pull and a packed, checked kit bag takes the logistics out of your head.

                ## Milestones
                1. A timeline written: travel, weigh-in, rack heights, flights, warm-up start times.
                2. Kit bag packed against your federation's kit rules.
                3. Food and drinks for the day packed in measured portions.
                4. Rack heights and safety settings known before the first flight.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written meet-day timeline and a kit bag packed and checked against the federation's kit rules the night before."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a timeline from alarm to last deadlift"
                - "Pack singlet, socks, belt, sleeves and wraps against the kit rules"
                - "Pack food and drinks for a ten-hour day"
                - "Note your squat and bench rack heights for the scorer's table"
            - name: Mock meet in the gym
              description: |-
                ## Purpose
                Taking openers and seconds under meet conditions three to four weeks out shows whether your plan is realistic and whether you can wait for commands. Running a mock meet with a training partner calling squat, rack, start, press and down rehearses the day while there is still time to adjust.

                ## Milestones
                1. A date set about three to four weeks before the meet.
                2. A partner briefed to give competition commands.
                3. Openers and seconds taken with full warm-up timing.
                4. The attempt plan adjusted from the results.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mock meet held three to four weeks out with commands given, results logged and the attempt plan updated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a mock meet date three to four weeks before the meet"
                - "Brief a partner on squat, rack, start, press and down commands"
                - "Take openers and seconds with timed warm-ups"
                - "Adjust the attempt plan from what you lifted"
            - name: Making weight for weigh-in
              description: |-
                ## Purpose
                Missing weight means lifting in the next class up or not lifting at all, and a large, fast cut before a two-hour weigh-in can wreck performance and health. Planning the final weeks so you arrive comfortably inside the limit, with any final-week changes agreed with a qualified professional, protects both the result and you.

                ## Milestones
                1. Your weigh-in type and time confirmed, two-hour or twenty-four-hour.
                2. Weekly average inside or near the limit four weeks out.
                3. Any final-week plan agreed with a dietitian or clinician.
                4. A post weigh-in meal and drink packed.

                ## Notes
                Do not attempt a large water cut without qualified guidance. For a first meet, entering a class you already sit inside is the safest choice.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Weigh-in made inside the class limit, with any final-week plan agreed in advance with a qualified professional."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the weigh-in type and start time for your meet"
                - "Check your weekly average against the limit four weeks out"
                - "Book a session with a sports dietitian if a cut is needed"
                - "Pack a snack and a drink to have straight after weigh-in"
            - name: Post-meet review and lighter week
              description: |-
                ## Purpose
                The week after a meet is the best time to learn from it, before memories soften. Writing down attempts made and missed, referee calls, what went wrong in the warm-up room and how the peak felt, then taking a lighter week, sets up the next block with real information.

                ## Milestones
                1. Every attempt recorded with result and any referee reason.
                2. Three things to keep and three to change written down.
                3. One lighter week of training taken.
                4. The next target meet or block focus chosen.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page meet report with all nine attempts, referee calls and three changes for next time, written within a week of the meet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the official results and referee calls into your log"
                - "Write three things to keep and three to change"
                - "Ask the agent to draft a one-page meet report from your notes"
                - "Pick the next meet or block focus"
            - name: Three-session week for busy seasons
              description: |-
                ## Purpose
                Work deadlines, exams or a new baby can cut training to three short sessions, and lifters often stop altogether rather than scale down. A three-day template that trains each lift at least once, with an extra bench slot if time allows, holds strength for months and keeps the habit alive.

                ## Milestones
                1. A three-day template written with all three lifts each week.
                2. Sessions fitting in under an hour.
                3. Three sessions a week kept for eight weeks.
                4. Estimated maxes held within a few percent over the period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of three sessions completed, with estimated maxes within five percent of where they started."
                cadence: rolling
              tasks:
                - "Write a three-day template covering all three lifts"
                - "Trim each session to fit under an hour"
                - "Book the three session slots into your calendar @recurring(weekly:sat)"
                - "Compare estimated maxes at the start and end of the busy period"
            - name: Lifting around shift work
              description: |-
                ## Purpose
                Nurses, warehouse staff, emergency workers and anyone on a rota cannot train on fixed weekdays, and night shifts affect both strength and sleep. Planning sessions from the rota a month ahead, putting heavy days after proper sleep and keeping lighter days for tired shifts, keeps a powerlifting programme workable.

                ## Milestones
                1. Next month's rota mapped against training days.
                2. Heavy days placed after full nights of sleep.
                3. A shorter session written for days after night shifts.
                4. Three or more sessions a week kept for two months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two months of training planned from the rota, with heavy days after full sleep and at least three sessions a week."
                cadence: rolling
              tasks:
                - "Map next month's rota onto training days @recurring(monthly:22)"
                - "Mark which days follow a full night's sleep"
                - "Put heavy top sets on those days"
                - "Write a 45-minute session for days after night shifts"
            - name: Student lifter on a budget
              description: |-
                ## Purpose
                Students often have cheap university gym access, a barbell club and very little money, plus exam weeks and long holidays away from campus. Using the club for coaching and meet entries, and planning holiday training near home, keeps progress going through the academic year.

                ## Milestones
                1. University barbell or powerlifting club joined.
                2. Club-subsidised meets or university championships noted.
                3. Exam weeks planned as lower-volume weeks.
                4. A holiday training option found near home.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Club membership held, exam weeks marked as lower-volume in the plan and a priced holiday gym option recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find your university barbell or powerlifting club"
                - "Ask the club about subsidised meet entries and kit"
                - "Mark exam weeks as lower-volume weeks in your plan"
                - "Find a gym near home for the holidays and note its day-pass price"
            - name: Masters age category meet plan
              description: |-
                ## Purpose
                Federations run masters categories from age 40 in ten-year bands, with their own records and qualifying totals, and lifters in their forties and fifties often find these the most rewarding meets. Planning around your masters category means setting targets against age-group records and allowing more time between heavy sessions.

                ## Milestones
                1. Your masters category and its current records checked.
                2. A target total set against the category's standards.
                3. Heavy sessions spaced for longer recovery between them.
                4. A masters meet or masters flight entered.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target total set against your masters category records, with a masters meet entered and heavy days spaced in the plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the masters age bands in your federation's rules"
                - "Set a target total against the category standards"
                - "Space heavy days with an extra rest day between them"
                - "Check updated masters records and meet dates @recurring(yearly)"
            - name: Back to the platform after a long break
              description: |-
                ## Purpose
                After a year or more away, for work, family or simply life, lifters tend to return to old numbers too quickly and get beaten up. Rebuilding with new rep maxes, a gradual volume ramp and a modest first meet total restores strength faster than chasing old personal bests in the first month.

                ## Milestones
                1. New rep maxes tested rather than old maxes assumed.
                2. Weekly volume built up over six weeks.
                3. Old personal bests set aside as targets for a later block.
                4. A comeback meet entered with a realistic total.

                ## Notes
                If you stopped because of an injury, follow your physiotherapist's return plan first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six weeks of ramped training logged from fresh rep maxes, with a comeback meet entered at a written target total."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Test new five-rep maxes on all three lifts"
                - "Write a six-week ramp of weekly sets"
                - "Move your old personal bests to a later-block target list"
                - "Pick a comeback meet with a modest target total"
            - name: Equipped lifting trial with suit and shirt
              description: |-
                ## Purpose
                Equipped powerlifting uses single-ply or multi-ply squat suits, bench shirts and deadlift suits, with technique and loads quite different from raw lifting. A supervised trial with borrowed kit and an experienced equipped lifter shows whether the division suits you before buying gear that costs hundreds.

                ## Milestones
                1. An experienced equipped lifter or club found to supervise.
                2. A suit and shirt borrowed in roughly your size.
                3. Three supervised sessions completed with the kit.
                4. A decision recorded on whether to enter an equipped division.

                ## Notes
                Never try a bench shirt without trained spotters: the bar path changes sharply and misses happen fast.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three supervised sessions in borrowed equipped kit completed, with a recorded decision on entering an equipped division."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find an equipped lifter or club willing to supervise"
                - "Borrow a squat suit and bench shirt near your size"
                - "Book three supervised sessions with the kit"
                - "Record whether you will enter an equipped division"
            - name: Chasing a national qualifying total
              description: |-
                ## Purpose
                National championships require a qualifying total in your class, set at a sanctioned meet within a fixed window. Knowing the exact standard, the qualifying window and the gap from your current best total turns a vague ambition into a dated plan across one or two meets.

                ## Milestones
                1. Qualifying total, window and sanctioned meet rules checked.
                2. The gap between your best total and the standard measured.
                3. One or two qualifying meets chosen inside the window.
                4. Qualifying total achieved, or the remaining gap recorded for next season.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A qualifying total achieved at a sanctioned meet inside the window, or the remaining gap recorded with a plan for next season."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Look up the qualifying total for your class and division"
                - "Measure the gap between your best total and the standard"
                - "Choose qualifying meets inside the window"
                - "Check qualifying deadlines and standards for changes @recurring(quarterly)"
            - name: Referee certification and first meets judged
              description: |-
                ## Purpose
                Meets rely on volunteer referees, and qualifying as one teaches you the rules from the other side of the platform. Passing the federation's referee course, then judging at local meets, sharpens your own lifting and gives something back to the sport.

                ## Milestones
                1. The federation's referee pathway and exam requirements read.
                2. Course or exam booked and passed.
                3. Two local meets refereed under supervision.
                4. Rule changes reviewed each year.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A referee qualification passed and at least two local meets judged under supervision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read your federation's referee pathway"
                - "Book the referee course or exam"
                - "Volunteer to judge two local meets"
                - "Review the latest technical rule changes @recurring(yearly)"
            - name: Handling a teammate on meet day
              description: |-
                ## Purpose
                Handlers wrap knees, track the flight, submit attempt changes in time and keep a nervous lifter fed and calm, and good handling can add kilos to a total. Preparing a handler sheet with the lifter's attempts, warm-up timings and rack heights makes you useful from weigh-in to the last deadlift.

                ## Milestones
                1. The lifter's attempt plan, rack heights and warm-ups on one sheet.
                2. Attempt submission rules and time limits known.
                3. Warm-up timings counted from the flight order.
                4. A short debrief held with the lifter after the meet.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A handler sheet prepared for a teammate, every attempt change submitted in time and a debrief held within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the lifter's attempts, rack heights and warm-up plan"
                - "Learn the attempt card submission time limit"
                - "Count warm-up timing from the flight order on the day"
                - "Debrief with the lifter within a week"
            - name: Self-coached block from your own log data
              description: |-
                ## Purpose
                Experienced lifters with two or three years of honest logs have something no template has: evidence of what volume, frequency and variations actually moved their own lifts. Writing a block from that data, and testing it against the previous best block, is how many advanced lifters stop relying on someone else's spreadsheet.

                ## Milestones
                1. Past blocks ranked by estimated max gain per lift.
                2. Common features of the best blocks identified: volume, frequency, variations.
                3. A new block written from those features.
                4. The new block's results compared with the previous best.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A six-week block written from ranked past blocks, run in full and its gains compared with the previous best block."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Rank past blocks by estimated max gain for each lift"
                - "Ask the agent to find common features of your three best blocks"
                - "Write a six-week block using those features"
                - "Compare the new block's gains with your previous best"
---

# Powerlifting Strength Programme

Powerlifting rewards patience and paperwork as much as effort: the squat, bench press and deadlift go up when the programme, the log and the technique all agree. This area starts with the foundations (federation and division, baseline maxes, a programme, kit and warm-ups), then the weekly machinery that keeps blocks honest, technique skills for each lift, weak-point blocks and decisions, meet preparation from entry to post-meet review, versions for busy seasons, shift workers, students, masters lifters and comebacks, and finally specialist work such as equipped lifting, national qualifying totals, refereeing and writing your own blocks.

The rhythms that repeat are a Sunday plan for the coming training week, a morning weigh-in with a Monday average, filmed top sets on the 12th of each month and a quarterly estimated total. The Training program, Purchase decision, Metrics log, Vendor and Operational checklist templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
