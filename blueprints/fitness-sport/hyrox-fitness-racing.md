---
id: fitness-sport.hyrox-fitness-racing
name: Hyrox & Fitness Racing
description: "A first race and division chosen well, the standards learned, eight runs and eight stations trained week by week, splits that show your weakest link, and a route from first finish to Pro weights and qualification."
category: personal
version: 1.0.0
tags: [fitness-sport, hyrox-fitness-racing, athlete, hyrox, fitness-racing, compromised-running, sled-training, wall-balls]
author: Aurum Technology
starter_structure:
  templates:
    - training-program
    - metrics-log
    - purchase-decision
    - operational-checklist
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Hyrox & Fitness Racing
          description: "Preparing for Hyrox and similar indoor fitness races that mix running with sled, rower, ski erg and wall ball stations."
          projects:
            - name: Choosing your first Hyrox race and division
              description: |-
                ## Purpose
                Picking the event and division first fixes the date, the weights you will push and whether you train alone or with a partner. Most people do best with a first race twelve to sixteen weeks away, entered in the Open division or as a doubles pair, so the build has room for a cold or a busy month without panic.

                ## Milestones
                1. Two or three races within travelling distance listed with dates, venues and entry prices.
                2. Open, Pro, Doubles and Relay compared against your current running and strength.
                3. One race and one division chosen, with the date written into your calendar.
                4. Entry confirmed, or the date and time ticket sales open recorded.

                ## Notes
                Popular city races sell out weeks ahead and individual waves fill first, so note when tickets open as well as the race date. If you are unsure about the weights, Open or Doubles is the safer first choice.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One race and division chosen from a shortlist of at least two, with the date entered in your calendar and entry confirmed or the sale date recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the fitness races within a day's travel over the next six months"
                - "Compare the Open, Pro, Doubles and Relay weights against what you lift now"
                - "Check the race date against work, family and holiday plans"
                - "Buy your ticket or note the exact time sales open"
            - name: Season rulebook and movement standards
              description: |-
                ## Purpose
                Every station has a standard that judges enforce, and a no-rep on a wall ball or a lunge where the knee did not touch costs more time than any training tweak. Reading the current season's rulebook before you train the stations means you practise the movement that will count, at the weights and target heights for your division.

                ## Milestones
                1. The current season's rulebook downloaded and read in full.
                2. The weights, distances and target heights for your division written on one page.
                3. The standard for each station noted in a sentence, including what earns a penalty.
                4. Any rule you are unsure about checked with an experienced racer or the event's help desk.

                ## Notes
                Weights and standards are sometimes revised between seasons, so check the rulebook for the season your race falls in, not an old video.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your division's weights, distances, target heights and penalty rules, taken from the current season's rulebook."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the rulebook for the season your race falls in"
                - "Write your division's weights, distances and target heights on one page"
                - "Note the standard and the penalty for each of the eight stations"
                - "Check the new season's rulebook for changed weights or standards @recurring(yearly)"
            - name: Health questions before high-intensity race training
              description: |-
                ## Purpose
                Hyrox asks for an hour or more near your limit, with heavy sleds that spike heart rate and blood pressure. Anyone with a heart, lung or joint condition, on regular medicines, or returning after a long break should answer a standard pre-exercise questionnaire and take any yes to their doctor before the hard sessions start.

                ## Milestones
                1. A standard pre-exercise readiness questionnaire completed honestly.
                2. Any yes answers, symptoms or medicines listed for your doctor or nurse.
                3. Your clinician's view on hard intervals and heavy sled work written down.
                4. Any limits they set noted at the top of your training log.

                ## Notes
                Chest pain, fainting or unusual breathlessness during training means stop and seek medical help, not finish the set. This project prepares the conversation; it does not replace it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed readiness questionnaire, with any yes answers taken to a clinician and their advice recorded in your training log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Complete a standard pre-exercise readiness questionnaire"
                - "List any symptoms, conditions or medicines that raised a yes"
                - "Book an appointment to ask about hard intervals and heavy sled work"
                - "Repeat the readiness questionnaire at the start of each season @recurring(yearly)"
            - name: Gym with sleds, a SkiErg and wall ball targets
              description: |-
                ## Purpose
                Without a sled on turf, a SkiErg and a wall ball target at the right height, three of the eight stations can only be guessed at until race day. Finding a gym that has all of them, at hours you can actually use, matters more than any programme you will follow.

                ## Milestones
                1. Gyms within twenty minutes checked for a sled track, SkiErg, rower and wall ball targets.
                2. Peak hours, sled booking rules and any Hyrox classes noted for each.
                3. A trial session done at the best one or two options.
                4. A membership chosen, or a workaround agreed for any missing station.

                ## Notes
                Ask how long the sled track is and what surface it has. A short track on fast turf feels very different from a 12.5 metre lane on race carpet.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gym with a sled track, SkiErg, rower and wall ball target chosen after a trial session, or a written workaround for each missing station."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List gyms within twenty minutes that advertise sleds or Hyrox training"
                - "Ask each about sled track length, surface and booking rules"
                - "Book a trial session at the two best options"
                - "Join one gym and note the quiet hours for sled work"
            - name: Baseline 1 km run and station test
              description: |-
                ## Purpose
                Knowing your fresh 1 km time, your 1000 m ski and row, and how long 100 wall balls take tells you where the race will be won and lost. Testing over two sessions in the first fortnight gives a starting line every later simulation can be measured against.

                ## Milestones
                1. A fresh 1 km run time recorded on a track or flat measured route.
                2. 1000 m SkiErg and 1000 m row times recorded with the damper settings used.
                3. Time for 100 wall balls at your division's weight and target recorded.
                4. A short sled push and pull at race weight timed, or the heaviest load you could move noted.
                5. All results entered on the first page of your training log.

                ## Notes
                Spread the tests over two days so tired legs from the sled do not spoil the run. The aim is a fair starting point, not a personal best.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Baseline times for a 1 km run, 1000 m ski, 1000 m row, 100 wall balls and a sled push and pull, recorded with settings in your log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run a fresh 1 km time trial on a track or measured route"
                - "Ski and row 1000 m each on separate efforts and note the damper"
                - "Time 100 wall balls at your division's weight and height"
                - "Push and pull the sled 50 m at race weight and record the time"
                - "Enter every baseline result on page one of your log"
            - name: Target finish time built from station splits
              description: |-
                ## Purpose
                Finish times picked from a social media post mean nothing; one built from your own 1 km pace plus a realistic time for each station and the Roxzone gives every session a purpose. Running usually makes up around half of the total, so the target shows straight away whether more running or more station work buys the most minutes.

                ## Milestones
                1. A race run pace set from your baseline 1 km, slowed for running off stations.
                2. A realistic time written for each of the eight stations.
                3. An allowance for Roxzone transitions added.
                4. A target finish time and a stretch time written at the top of your log.

                ## Notes
                Published results from your target race let you see what people near your baseline actually ran. Ask the agent to lay your numbers out as a sixteen-row split table you can print.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A split table with a target for all eight runs, eight stations and the Roxzone, adding up to a stated finish time and a stretch time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a race run pace about 10 to 20 percent slower than your fresh 1 km"
                - "Write a realistic time against each station from your baseline"
                - "Add a Roxzone allowance from published results at your venue"
                - "Ask the agent to lay the targets out as a printable split table"
            - name: Weekly Hyrox training week template
              description: |-
                ## Purpose
                Most first-timers either run too little or turn every session into a mini race. A fixed weekly shape with easy running, one threshold session, one compromised session, strength and station practice, set against the slots your diary really has, makes the hard work repeatable for twelve weeks.

                ## Milestones
                1. The number of sessions you can keep each week agreed with yourself and your household.
                2. Each slot assigned: easy run, threshold run, compromised session, strength, stations.
                3. Hard days separated by at least one easier day.
                4. The week saved as a template you copy forward each Sunday.

                ## Notes
                Start from the **Training program** template. Four to six sessions is plenty; consistency over months beats a heroic fortnight.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written weekly template naming the day and type of every session, with no two hard sessions on consecutive days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the training slots your diary really has each week"
                - "Assign each slot a session type from the training week"
                - "Move sessions until no two hard days sit back to back"
                - "Save the week as a template from the training program"
            - name: Hyrox split and session log
              description: |-
                ## Purpose
                Feelings after a hard session are poor evidence; a log of run paces, station times, weights and heart rate shows whether the sled is actually getting faster. Recording sessions in the same columns every time makes simulations comparable and turns the monthly review into a ten-minute job.

                ## Milestones
                1. A log with columns for date, session type, run splits, station times, loads and notes.
                2. Baseline test results entered as the first rows.
                3. Every simulation logged with all sixteen splits plus Roxzone time.
                4. Weekly totals of running distance and station work kept at the foot of each week.

                ## Notes
                Start from the **Metrics log** template. Note the gym and sled surface beside sled times; the same load can feel twice as heavy on a different floor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A training log holding at least eight weeks of sessions, with every simulation recorded split by split."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a log from the metrics log template with split columns"
                - "Enter your baseline test results as the first rows"
                - "Add a column for gym and sled surface beside sled times"
                - "Total the week's running distance and station work @recurring(weekly:sun)"
            - name: Shoes that grip on sled turf and still run 8 km
              description: |-
                ## Purpose
                Shoes chosen only for running can slip on the sled push, while flat lifting shoes punish eight kilometres of running. Choosing one pair with enough grip and cushioning, tested on your gym's turf, removes a common race day problem.

                ## Milestones
                1. Your gym's sled surface and your usual running surface noted.
                2. Two or three shoes shortlisted for grip, cushioning and stability in lunges.
                3. A sled push and a 1 km run done in the preferred pair before the return window closes.
                4. One pair chosen, with the purchase date written in your log.

                ## Notes
                Start from the **Purchase decision** template. Avoid very high stack or carbon-plated racing shoes for lunges and burpee broad jumps unless you have trained in them.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One pair of shoes chosen after a sled push and a run test, with model and purchase date in your log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Watch how your current shoes behave on a heavy sled push"
                - "Shortlist three shoes with grippy outsoles and moderate cushioning"
                - "Test the favourite on a sled push and a 1 km run indoors"
                - "Check tread wear and mileage on your race shoes @recurring(monthly:20)"
            - name: Weekly long easy run for an 8 km race
              description: |-
                ## Purpose
                Eight kilometres sounds short, but running it between stations at high heart rate depends on an aerobic base most gym-goers lack. One long easy run each week, building from 40 to around 75 or 90 minutes at conversational pace, does more for the back half of the race than extra intervals.

                ## Milestones
                1. A long run slot fixed in the week, on a day before a lighter one.
                2. The long run built gradually, with every fourth week shorter.
                3. Pace kept conversational, checked by talk test or heart rate.
                4. Twelve weeks of long runs logged with duration and how you felt.

                ## Notes
                Easy means you could hold a conversation. Most people run their easy days too fast and then cannot hit their threshold pace.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of logged long runs at conversational pace, the longest reaching at least 75 minutes."
                cadence: rolling
              tasks:
                - "Plan two flat long run routes that start from your door"
                - "Run the weekly long easy run at conversational pace @recurring(weekly:sun)"
                - "Make every fourth long run about a third shorter"
                - "Log the duration and a one-line note after each long run"
            - name: Weekly 1 km threshold repeats
              description: |-
                ## Purpose
                Holding your goal run pace on run seven, with burning legs from the sled and lunges, depends on a raised lactate threshold. A weekly set of 1 km repeats at comfortably hard pace with short recoveries rehearses the exact distance of each race segment.

                ## Milestones
                1. A threshold pace set from your baseline 1 km or a recent 5K.
                2. A starting set of four to five 1 km repeats with 60 to 90 seconds of recovery.
                3. The set grown to six to eight repeats over the block.
                4. Repeat times logged, with the spread between first and last noted.

                ## Notes
                Aim for even splits; the last repeat should be as quick as the first. If it is slower by more than a few seconds, the pace was too fast.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly threshold session logged for at least ten weeks, reaching six or more 1 km repeats within five seconds of each other."
                cadence: rolling
              tasks:
                - "Work out your threshold pace from a recent 5K or 1 km time"
                - "Find a flat loop or track where 1 km is easy to measure"
                - "Run 1 km threshold repeats with short recoveries @recurring(weekly:tue)"
                - "Log each repeat time and the gap between first and last"
            - name: Compromised running after stations
              description: |-
                ## Purpose
                Running after a sled push feels nothing like running fresh: legs are heavy, breathing is ragged and pace drifts for the first few hundred metres. A weekly session that pairs a station with a hard run straight afterwards teaches your body to settle quickly, which is the single skill that most separates good Hyrox racers.

                ## Milestones
                1. A set of station and run pairings written for the block, rotating through all eight stations.
                2. Run pace off each station compared with your fresh pace.
                3. The pairings that cost you the most time identified.
                4. Ten weekly sessions logged with run splits after each station.

                ## Notes
                Keep the station efforts at race intensity, not maximal. The point is to practise running well after the station, not to win the station.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten logged compromised sessions covering all eight stations, with the slowest run-off-station pairing named."
                cadence: rolling
              tasks:
                - "Write a rotation pairing each station with a 1 km run"
                - "Do a compromised station and run session @recurring(weekly:thu)"
                - "Note how many metres it takes your pace to settle after each station"
                - "Mark the two pairings that slow your running most"
            - name: Twice-weekly strength for sleds and lunges
              description: |-
                ## Purpose
                Heavy sled pushes and 100 metres of loaded lunges come down to leg and trunk strength more than fitness. Two short strength sessions a week built around squats, split squats, hinges and pulls keep the sled moving and protect knees and backs through long blocks of running.

                ## Milestones
                1. Two strength sessions of 40 to 50 minutes written around squat, lunge, hinge and pull patterns.
                2. Starting loads recorded for each main lift.
                3. Loads progressed in small steps across a four-week cycle.
                4. Strength held through race week with a lighter session rather than dropped.

                ## Notes
                Keep strength sessions away from the day before threshold running. Heavy legs make for poor intervals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two strength sessions a week completed for at least ten weeks, with loads logged and progressed on the main lifts."
                cadence: rolling
              tasks:
                - "Write two strength sessions built on squat, lunge, hinge and pull"
                - "Record a starting load for each main lift"
                - "Complete the two weekly strength sessions @recurring(weekly:mon,fri)"
                - "Add a small load to a lift only after every set felt controlled"
            - name: Weekly sled session on the gym turf
              description: |-
                ## Purpose
                Sled push and pull are the stations where untrained racers lose the most time, and the feel of a heavy sled only comes from regular contact with one. One short weekly session at and above race weight builds both the strength and the technique, without the volume that would wreck your running.

                ## Milestones
                1. A sled slot booked at a quiet time each week.
                2. Race-weight pushes and pulls timed over 50 m at the start of the block.
                3. Heavier and lighter loads used across the weeks for strength and speed.
                4. Race-weight times logged with the gym surface noted.

                ## Notes
                Gym turf is often faster than the race carpet. If your race-weight times feel easy, add load rather than assume you are ready.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly sled session logged for ten weeks, with 50 m race-weight push and pull times improved from the first to the last."
                cadence: rolling
              tasks:
                - "Book a weekly sled slot at your gym's quietest hour"
                - "Time a 50 m push and pull at race weight as a starting mark"
                - "Do the weekly sled push and pull session @recurring(weekly:sat)"
                - "Retime 50 m at race weight at the end of each four-week cycle"
            - name: Wall ball volume built week by week
              description: |-
                ## Purpose
                Wall balls come last, when legs and shoulders are already spent, and 100 reps with no-reps can take over ten minutes for someone underprepared. A short weekly block that adds sets gradually, ideally after running, builds the capacity to finish in a few unbroken sets.

                ## Milestones
                1. Your current unbroken set at race weight and height recorded.
                2. A weekly progression written, adding total reps or reducing rest.
                3. At least one session a month done straight after a run or lunges.
                4. 100 reps completed in five sets or fewer with no no-reps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "100 wall balls at your division's weight and height completed in five sets or fewer with no no-reps, logged with the time."
                cadence: rolling
              tasks:
                - "Record your biggest unbroken wall ball set at race standard"
                - "Write a weekly progression for total reps and rest"
                - "Do the short wall ball block after a run or lunges @recurring(weekly:wed)"
                - "Film one set a month to check depth and target contact"
            - name: Monthly half simulation of four runs and four stations
              description: |-
                ## Purpose
                Doing a full race simulation every week would bury you, but never stringing runs and stations together leaves pacing a guess. Once a month, running four 1 km runs with four stations at goal pace shows whether your split targets are realistic and keeps the race feeling familiar.

                ## Milestones
                1. Two half simulations written: the first four stations and the last four.
                2. Each half done at target race pace, not flat out.
                3. Every split recorded and compared with your target table.
                4. One change to training or target pacing decided after each simulation.

                ## Notes
                Alternate the halves each month. The second half, with lunges and wall balls, is usually where targets prove optimistic.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A half simulation done each month for at least three months, each logged against the target split table with one change recorded."
                cadence: rolling
              tasks:
                - "Write the two half simulations with distances and loads"
                - "Run a half simulation at goal pace and record all splits @recurring(monthly:14)"
                - "Compare each split with your target table"
                - "Write one change to pacing or training after each simulation"
            - name: Quarterly full race simulation
              description: |-
                ## Purpose
                Only a full eight-run, eight-station effort shows how the last three stations feel when the first five were paced properly. Doing one every three months, and one about three to four weeks before race day, tests the pacing plan, the kit and the fuelling before they matter.

                ## Milestones
                1. A full simulation day booked with gym space for every station.
                2. Race kit, shoes and pre-race meal used as planned for the day.
                3. All sixteen splits and Roxzone time recorded.
                4. The finish time compared with your target and the gap explained in a sentence.

                ## Notes
                Do not schedule a full simulation in the last two weeks before a race. It takes longer to recover from than most people expect.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full race simulation completed every quarter, with all sixteen splits logged and the gap to target explained."
                cadence: cyclic
              tasks:
                - "Ask your gym when all eight stations can be used in one session"
                - "Run a full eight-station simulation in race kit @recurring(quarterly)"
                - "Record all sixteen splits and total Roxzone time"
                - "Write one sentence on why the result differed from target"
            - name: Monthly Hyrox block review
              description: |-
                ## Purpose
                Four weeks of logged training is long enough for patterns to show: missed sessions, a stuck sled time or easy runs creeping too fast. A short month-end review of the log, against the target table, keeps the plan honest and catches overreaching before it becomes injury.

                ## Milestones
                1. Sessions planned and completed counted for the month.
                2. Run, sled and wall ball numbers compared with the previous month.
                3. Niggles, sleep and energy noted in a line each.
                4. One change for the next block written at the top of the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written monthly review for each block, recording completion rate, key numbers and one change for the next block."
                cadence: rolling
              tasks:
                - "Count planned and completed sessions for the month"
                - "Compare this month's key numbers with last month's"
                - "Review the block and write one change for the next @recurring(monthly:28)"
                - "Note any niggle lasting more than a week for a physio check"
            - name: SkiErg technique for 1000 m at race pace
              description: |-
                ## Purpose
                The SkiErg opens the race, and pulling with arms alone burns out shoulders and spikes heart rate before the sled. Learning to hinge and use body weight, with a damper setting and stroke rate that suit you, makes the first station efficient and steady.

                ## Milestones
                1. The hinge and arm sequence learned from a coach or reliable video.
                2. A damper setting chosen and written in your log.
                3. A target pace per 500 m set for 1000 m at race effort.
                4. 1000 m completed at target pace with a heart rate that settles on the next run.

                ## Notes
                Film a few strokes from the side. Knees bending too much turns it into a squat; a good stroke looks like a quick hip hinge.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 1000 m SkiErg effort at your target pace per 500 m, with the damper setting and stroke rate recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Watch a SkiErg technique breakdown and note the stroke sequence"
                - "Film five strokes from the side and compare"
                - "Try three damper settings over 250 m each and pick one"
                - "Ski 1000 m at target pace then run 1 km and log both"
            - name: Sled push technique and body angle
              description: |-
                ## Purpose
                A heavy sled stalls when the body is too upright or the steps are too long, and restarting a stalled sled costs far more than steady pushing. Practising a low body angle, short driving steps and the turn at each end of the lane makes the push station predictable.

                ## Milestones
                1. Arm position chosen, locked out or bent, after trying both.
                2. A low body angle and short steps practised at race weight.
                3. The turn at the end of each lane rehearsed without stopping.
                4. A 50 m push completed at race weight without a stall.

                ## Notes
                Practise on the heaviest surface you can find. If a lane stalls in the race, small steps to restart beat a big lunge.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 50 m sled push at race weight completed without a stall, with the arm position and approach you will race written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Push a light sled with arms locked and then with arms bent"
                - "Practise short driving steps with a low body angle"
                - "Rehearse the turnaround at the end of each lane"
                - "Film a race-weight push and compare body angle with a good example"
            - name: Sled pull rope technique and footwork
              description: |-
                ## Purpose
                Racers lose minutes on the sled pull by arm-pulling with straight legs, then tangling the rope. A hand-over-hand pull driven by the legs and a sit-back, while staying inside the box and laying the rope out behind, keeps the sled coming in a steady line.

                ## Milestones
                1. The rules for standing position and rope handling read and understood.
                2. A leg-driven sit-back pull practised at light weight.
                3. A rope-laying routine that avoids tangles rehearsed.
                4. A 50 m pull at race weight completed with no rule breach.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 50 m sled pull at race weight completed with legs doing the work, no tangle and no foot outside the box."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the sled pull rules on standing position and rope"
                - "Practise a sit-back pull with a light sled"
                - "Lay the rope behind you in loops as you pull"
                - "Time a 50 m pull at race weight and log any tangles"
            - name: Burpee broad jumps over 80 metres
              description: |-
                ## Purpose
                Eighty metres of burpee broad jumps is where pacing falls apart: a fast start leaves you face down by halfway. Finding a steady rhythm, a stepped-up or jumped-up recovery that suits your build, and a jump length you can hold turns it into a predictable four to eight minutes.

                ## Milestones
                1. The chest and thigh contact standard and the two-foot jump rule understood.
                2. Step-up and jump-up recoveries tried and one chosen.
                3. A steady jump count per 10 m worked out.
                4. 80 m completed at a constant pace with the time logged.

                ## Notes
                A slightly shorter jump with no pauses is usually faster overall than big jumps with rests between.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "80 m of burpee broad jumps completed at a steady pace, with the jump count per 10 m and total time logged."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Do 20 m stepping up from the floor, then 20 m jumping up"
                - "Count your jumps per 10 m at a pace you could hold"
                - "Complete 80 m at that pace and record the time"
                - "Run 1 km straight after and note how your legs respond"
            - name: Rowing 1000 m without wrecking the carry
              description: |-
                ## Purpose
                The row comes after the burpee broad jumps and just before the farmers carry, so pulling too hard with the arms leaves grip and legs short for what follows. Rowing a controlled 1000 m with legs leading, at a split you could hold for longer, saves time over the next two stations.

                ## Milestones
                1. The legs, body, arms sequence checked by a coach or on video.
                2. A damper setting and target split per 500 m chosen.
                3. 1000 m rowed at target split followed directly by a farmers carry.
                4. Grip and leg feel on the carry noted after each try.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 1000 m row at target split followed by a 200 m farmers carry with no drop, logged with damper and split."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Film your stroke and check the legs lead the drive"
                - "Choose a damper setting and target 500 m split"
                - "Row 1000 m at target split then go straight into a carry"
                - "Log how your grip held on the carry after each row"
            - name: Farmers carry for 200 metres without drops
              description: |-
                ## Purpose
                Every time the handles go down in the farmers carry you lose seconds to the reset, and grip is already tired from the row. Building grip endurance with heavy carries and holds, plus a quick walking stride, makes 200 m at race weight a single unbroken effort.

                ## Milestones
                1. Your current unbroken carry distance at race weight recorded.
                2. Two grip finishers a week added to existing sessions.
                3. A fast walking stride with short steps practised.
                4. 200 m at race weight completed with no drops.

                ## Notes
                Check the rulebook for whether gloves are allowed in your division before relying on them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A 200 m farmers carry at your division's weight completed without putting the handles down, logged with time."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Carry race-weight handles until the first drop and note the distance"
                - "Add a heavy hold or carry finisher to two sessions @recurring(weekly:tue,fri)"
                - "Practise a quick short-stride walk with the handles"
                - "Retest 200 m at race weight at the end of the block"
            - name: Sandbag lunges for 100 metres to standard
              description: |-
                ## Purpose
                Lunges come second to last, and a back knee that does not touch the floor earns penalties when legs are tired. Training 100 m of continuous lunges with the sandbag positioned the way you will race, and a rest pattern planned in advance, keeps you moving to standard.

                ## Milestones
                1. The knee touch and stand-up standard confirmed from the rulebook.
                2. A sandbag position across the shoulders chosen and practised.
                3. A lunge count per rest planned for 100 m.
                4. 100 m completed to standard straight after a 1 km run.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "100 m of sandbag lunges completed to standard after a 1 km run, with the rest pattern and time logged."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check the knee touch and stand-up rule in the rulebook"
                - "Try two sandbag positions over 20 m each and pick one"
                - "Plan how many lunges you will do between short pauses"
                - "Run 1 km then lunge 100 m to standard and log the time"
            - name: Wall ball standards, sets and breathing
              description: |-
                ## Purpose
                Depth and target contact are judged on every rep, and a no-rep at rep 90 is soul-destroying. Learning a squat below parallel that you can repeat, a release that hits the target cleanly, and a breathing rhythm for each set keeps the final station clean.

                ## Milestones
                1. The squat depth and target standards checked against the rulebook.
                2. Your depth checked on video from the side.
                3. A breathing pattern per rep chosen and practised.
                4. A set plan for 100 reps written, such as 25, 20, 20, 15, 10, 10.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A filmed set of at least 20 wall balls with every rep to depth and target, plus a written set plan for 100 reps."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Film a set of wall balls from the side to check depth"
                - "Pick a breathing rhythm and hold it for a set of 20"
                - "Write a set plan that adds up to 100 reps"
                - "Ask a training partner to judge a set strictly"
            - name: Roxzone transitions and station flow
              description: |-
                ## Purpose
                The Roxzone, the area between the running track and each station, quietly adds several minutes for first-timers who walk it, hunt for their lane or stop to drink. Knowing the venue layout and practising quick, calm transitions is the cheapest time you will ever find.

                ## Milestones
                1. The venue layout from the athlete guide studied, with the station order marked.
                2. Where to drink and where to keep moving decided in advance.
                3. Transitions practised by jogging from a run straight into each station.
                4. Roxzone time measured in a simulation and compared with your allowance.

                ## Notes
                Lap counting catches out many racers. Know how many laps of the track make each 1 km at your venue.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written plan for every transition at your venue, with Roxzone time in a simulation within your target allowance."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Download the athlete guide for your venue and find the layout"
                - "Mark how many laps make up each 1 km run"
                - "Decide where you will drink and where you will keep moving"
                - "Time your transitions in the next simulation"
            - name: Pacing the first run and the whole race
              description: |-
                ## Purpose
                Adrenaline and a crowded start make the first 1 km the fastest of the day for almost everyone, and that overspend shows up as a slow sled and a collapse on the lunges. A written pacing plan with a ceiling for run one and an effort cue for each station keeps the whole hour even.

                ## Milestones
                1. A pace ceiling for run one written, slower than your goal run pace.
                2. An effort cue for each station noted in a few words.
                3. The plan tested in a full simulation.
                4. A short version written on a wristband or memorised.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written pacing plan with a run one ceiling and station cues, tested in a simulation where the slowest and fastest runs differ by under 30 seconds."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set a ceiling for run one about five seconds per km slower than goal"
                - "Write a three-word effort cue for each station"
                - "Test the plan in your next full simulation"
                - "Write the short version on a wristband card"
            - name: Finding your weakest station from split data
              description: |-
                ## Purpose
                Most people train what they enjoy, not what costs them time. Comparing your simulation splits with published results from racers near your finish time shows which station or run is furthest behind, and that is where the next block's extra session should go.

                ## Milestones
                1. Your latest simulation or race splits entered beside your target table.
                2. Splits for ten racers near your finish time gathered from published results.
                3. The two stations or runs with the biggest gap identified.
                4. One extra weekly session for the weakest link added to the plan.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The two biggest time gaps against racers near your level identified in writing, with one extra weekly session added to address them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put your latest splits beside your target table"
                - "Collect splits from ten racers near your finish time"
                - "Rank each station and run by the time you are losing"
                - "Add one weekly session aimed at the biggest gap"
            - name: Running or stations for the extra training hours
              description: |-
                ## Purpose
                With only so many hours a week, adding a session means choosing between more running and more station work. Looking at what share of your race time is running, and how much your run pace drops off stations, settles which one will move the finish time most.

                ## Milestones
                1. Your running share of total time worked out from a simulation or race.
                2. The drop from fresh pace to race run pace measured.
                3. A decision recorded on where the next extra session goes.
                4. The decision rechecked after the next simulation.

                ## Notes
                If your race runs are more than about 20 percent slower than your fresh 1 km, the problem is usually aerobic fitness rather than station strength.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether the next extra weekly session goes to running or stations, backed by your running share and run pace drop."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out what share of your race time was running"
                - "Compare your race run pace with your fresh 1 km pace"
                - "Decide where the next extra session goes and note why"
                - "Recheck the decision after your next simulation"
            - name: Coach, online plan or gym Hyrox class
              description: |-
                ## Purpose
                A coach sees technique faults you cannot, an online plan is cheap and flexible, and a gym class gives you sleds and company. Comparing the three against your budget, schedule and weakest stations before the build starts avoids switching plans halfway.

                ## Milestones
                1. Two or three options of each type listed with monthly cost.
                2. Each scored on technique feedback, flexibility, station access and cost.
                3. A trial or sample week tried for the top choice.
                4. One option chosen and its start date set.

                ## Notes
                A hybrid works well for many: an online plan for running plus a monthly session with a coach for sled and wall ball technique.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One coaching option chosen after scoring at least three against cost, feedback, flexibility and station access."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List coaches, online plans and gym classes with monthly costs"
                - "Score each on feedback, flexibility, station access and cost"
                - "Try a sample week or trial class of the top option"
                - "Sign up and set a start date"
            - name: Watch set up to lap all sixteen segments
              description: |-
                ## Purpose
                Indoor tracks confuse GPS, so race run splits from a watch are often wrong unless it is set up for the venue. A watch profile with a manual lap for each run and station, and a screen showing lap time and heart rate, gives you live pacing and clean data afterwards.

                ## Milestones
                1. A dedicated race profile created with GPS settings suited to an indoor hall.
                2. Manual laps tested for runs, stations and Roxzone.
                3. A data screen chosen showing lap time and heart rate.
                4. The profile used in a full simulation and the exported splits checked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A watch profile that records sixteen manual laps, tested in a full simulation with exported splits that match the log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a separate race profile on your watch"
                - "Turn off auto-lap and practise manual laps in a session"
                - "Choose one data screen with lap time and heart rate"
                - "Export the simulation splits and check them against your log"
            - name: Minimum home kit for station practice
              description: |-
                ## Purpose
                Not every week can include the gym, and a wall ball, a sandbag and a pair of heavy kettlebells cover three stations at home or in a park. Choosing the minimum kit that matches race weights, and that fits where you live, keeps station practice going on busy weeks.

                ## Milestones
                1. The stations you can realistically practise at home listed.
                2. A wall ball, sandbag and carry weights shortlisted at race weight.
                3. Storage space and a safe outdoor or indoor spot checked.
                4. The kit bought, borrowed or ruled out, with the reason noted.

                ## Notes
                Start from the **Purchase decision** template. Check your wall ball target height against something solid outside; a garden wall rarely matches.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision recorded on home kit for wall balls, lunges and carries, with items bought or ruled out against race weights."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the stations you could practise at home"
                - "Price a wall ball, sandbag and kettlebells at race weight"
                - "Find a safe spot with a wall ball target at the right height"
                - "Buy, borrow or rule out each item and note the reason"
            - name: Twelve-week build to your first Hyrox
              description: |-
                ## Purpose
                Twelve weeks is enough to take a regular gym-goer to a confident first finish if the build has a clear shape. Three four-week blocks, base then specific then race-sharp, each ending with a lighter week and a test, turn the weekly template into a plan that peaks on race day.

                ## Milestones
                1. The race date written as week twelve, with weeks counted back.
                2. Three four-week blocks outlined with their focus.
                3. A lighter week and a simulation placed at the end of each block.
                4. The final two weeks set as taper and race week.
                5. The build completed with at least 80 percent of sessions done.

                ## Notes
                Start from the **Training program** template. If you have fewer than twelve weeks, shorten the base block rather than the race-specific one.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A twelve-week plan with three blocks, lighter weeks and simulations, completed with at least 80 percent of sessions logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Count back twelve weeks from race day in your calendar"
                - "Outline the base, specific and race-sharp blocks"
                - "Place a lighter week and a simulation at the end of each block"
                - "Set the last two weeks as taper and race week"
            - name: Race week taper and logistics checklist
              description: |-
                ## Purpose
                Most race week mistakes are logistics: a forgotten wave time, a missed bag drop, new shoes, or a hard session on Wednesday. A checklist that cuts volume but keeps some intensity, and covers kit, travel and timings, means you arrive fresh and calm.

                ## Milestones
                1. Training volume cut by about half with two short sharp sessions kept.
                2. Wave start time, check-in window and venue entry confirmed.
                3. Kit laid out and checked against the list two days before.
                4. Travel and arrival time planned with a margin of an hour.

                ## Notes
                Start from the **Operational checklist** template. Nothing new on race day: shoes, breakfast and gloves should all be tried in training.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed race week checklist covering taper sessions, wave time, kit and travel, ticked off before race morning."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Build a race week checklist from the operational checklist template"
                - "Confirm your wave time and check-in window from the athlete email"
                - "Lay out race kit two days before and tick it against the list"
                - "Plan travel to arrive at least an hour before check-in closes"
            - name: Race morning warm-up and wave start plan
              description: |-
                ## Purpose
                Waves run to a tight schedule in a noisy hall, and many first-timers either warm up an hour too early or not at all. A timed plan for breakfast, check-in, a 15 to 20 minute warm-up that touches the sled and wall ball, and the final minutes in the start pen settles nerves.

                ## Milestones
                1. Breakfast time and contents set from what worked in simulations.
                2. A warm-up of jogging, drills and a few station reps written and timed.
                3. The plan worked back from your wave start in five-minute blocks.
                4. The plan rehearsed before your last full simulation.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written race morning plan timed back from your wave start, rehearsed once before a full simulation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write breakfast and arrival times backwards from your wave start"
                - "Plan a 15 to 20 minute warm-up with drills and a few station reps"
                - "Rehearse the whole morning before your final full simulation"
                - "Pack a spare top to stay warm in the start pen"
            - name: Travelling to an away race weekend
              description: |-
                ## Purpose
                Many people race in another city or country, which adds a hotel, hours of travel and unfamiliar food the day before. Planning the trip like part of the race, with arrival the day before and a known evening meal, protects twelve weeks of training.

                ## Milestones
                1. Travel and accommodation booked near the venue for the night before.
                2. An evening meal and race breakfast planned that match what you eat in training.
                3. Kit packed in hand luggage if flying.
                4. A short shakeout run route found near where you stay.

                ## Notes
                Start from the **Trip** template. Hotels near big race venues sell out early, so book as soon as you enter.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip plan with travel, accommodation, meals and a shakeout route booked or set before race week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book accommodation within easy reach of the venue"
                - "Plan the evening meal and breakfast around what you eat in training"
                - "Pack race shoes and kit in hand luggage if flying"
                - "Find a ten-minute shakeout route near where you stay"
            - name: Post-race split analysis and debrief
              description: |-
                ## Purpose
                Official results give you every run, station and Roxzone time, which is a free coaching report most people glance at once. Going through them within a week, while the race is fresh, turns one result into a clear plan for the next build.

                ## Milestones
                1. Official splits downloaded and set beside your target table.
                2. The three biggest gaps and the one best surprise noted.
                3. What went right and wrong on pacing, kit and logistics written in a few lines.
                4. Three changes for the next build recorded at the top of your log.

                ## Notes
                Ask the agent to turn your splits and notes into a one-page debrief with the three changes at the top.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page debrief written within a week of the race, comparing splits with targets and listing three changes for the next build."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your official splits from the results page"
                - "Mark the three biggest gaps against your target table"
                - "Ask the agent to turn your notes into a one-page debrief"
                - "Write three changes for the next build at the top of the log"
            - name: Trying DEKA or another fitness race format
              description: |-
                ## Purpose
                Other indoor fitness races use different zones, distances and movements, such as shorter runs, box jumps or a ram, and they reward slightly different strengths. Racing one between Hyrox seasons gives you a new benchmark and keeps training fresh without a full twelve-week build.

                ## Milestones
                1. Two other fitness race formats compared for distance, movements and dates.
                2. One chosen that fits between your Hyrox races.
                3. The movements that differ from Hyrox practised for three or four weeks.
                4. The race completed and the result logged beside your Hyrox times.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One different fitness race format entered and completed, with its movements practised and the result logged."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Compare two fitness race formats for movements and dates"
                - "Choose one that sits between your Hyrox races"
                - "Practise the movements that differ from Hyrox for three weeks"
                - "Log your result beside your Hyrox times"
            - name: Doubles race with a partner
              description: |-
                ## Purpose
                In doubles both partners run all eight kilometres together and split the station work however they like, so the pair is only as fast as its plan. Agreeing who does which share of each station, and training together at least weekly, turns two individual athletes into one team.

                ## Milestones
                1. Each partner's baseline times for runs and stations shared.
                2. A split plan agreed for every station, such as alternating sets of wall balls.
                3. A shared run pace set to suit the slower runner.
                4. A full simulation done together with handovers timed.

                ## Notes
                Agree in advance what you will say when one of you is struggling. Mid-race arguments cost more time than any station.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written station split plan agreed by both partners, rehearsed in a joint full simulation before race day."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Share baseline run and station times with your partner"
                - "Agree how you will split the work at each station"
                - "Train together on stations and handovers @recurring(weekly:sat)"
                - "Run a full simulation together and time each handover"
            - name: Captaining a relay team of four
              description: |-
                ## Purpose
                Relay teams are four people with different strengths, each running two kilometres and doing two stations, and someone has to pick the order and keep everyone turning up. Organising the team well makes relay a sociable first race for a gym group or workplace.

                ## Milestones
                1. Four teammates confirmed and the entry paid.
                2. Each person's best stations collected and the running order agreed.
                3. A shared message group with training dates and race day plan set up.
                4. One team practice of handovers held before race week.

                ## Notes
                Put the strongest pusher on the sled and the best runner where the run follows a hard station. Check the rulebook for which stations each leg covers.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A relay team of four entered, with the running order agreed in writing and one handover practice completed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm four teammates and collect entry money"
                - "Ask each teammate for their strongest and weakest stations"
                - "Set the running order and share it in the team group"
                - "Book one team practice for handovers before race week"
            - name: Runner adding strength for Hyrox stations
              description: |-
                ## Purpose
                Runners arrive at Hyrox with a fast 1 km and then lose minutes on the sled, lunges and wall balls. Swapping two easy runs a week for strength and station work, without losing the running that is your advantage, is the shortest route to a good first time.

                ## Milestones
                1. Two easy runs a week replaced with strength or station sessions.
                2. Squat and lunge loads recorded and progressed for eight weeks.
                3. Sled and wall ball times retested against the baseline.
                4. Weekly running kept to at least two thirds of previous volume.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight weeks with two strength or station sessions in place of easy runs, with sled and wall ball times improved on retest."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose two easy runs a week to swap for strength"
                - "Record your starting squat and lunge loads"
                - "Book a sled technique session with a coach or gym class"
                - "Retest sled and wall ball times after eight weeks"
            - name: Lifter or CrossFitter learning to run 8 km
              description: |-
                ## Purpose
                Gym athletes often handle the stations easily and then walk parts of the later runs. Building to four runs a week, mostly easy, over ten to twelve weeks gives the aerobic base needed to run all eight kilometres at a steady pace.

                ## Milestones
                1. Current running ability tested with an easy 3 to 5 km.
                2. A plan written to build from two to four runs a week.
                3. Heavy leg sessions reduced to make room for running.
                4. A continuous 8 km run completed at a steady pace.

                ## Notes
                Shin and calf soreness is common when heavier athletes add running quickly. Build total running by small amounts and use soft surfaces when you can.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A continuous 8 km run completed after a plan building from two to four runs a week, logged with pace and heart rate."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Run an easy 3 to 5 km and note how you feel"
                - "Write a plan building from two to four runs a week"
                - "Cut one heavy leg session to make room for running"
                - "Run a continuous 8 km at steady pace and log it"
            - name: Hyrox training on four hours a week
              description: |-
                ## Purpose
                Parents, shift workers and anyone with a demanding job can still race well on four focused hours. Combining runs with stations in the same session, and training at home when the gym is out of reach, keeps every hour doing double duty.

                ## Milestones
                1. Four one-hour slots agreed with your household or rota.
                2. Each session combining running with at least one station.
                3. A home or park version written for weeks when the gym is impossible.
                4. Eight weeks completed with at least three sessions a week.

                ## Notes
                Missing a session is fine; trying to make it up by doubling the next one is not.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight consecutive weeks with at least three combined sessions a week logged, within a four-hour weekly budget."
                cadence: phased
                effort_hours_estimate: "32"
              tasks:
                - "Agree four one-hour training slots with your household"
                - "Write four sessions that combine running with a station"
                - "Write a home version for weeks without the gym"
                - "Plan the coming week's slots each Sunday evening @recurring(weekly:sun)"
            - name: Racing Hyrox in an older age group
              description: |-
                ## Purpose
                Age groups give older racers a fair comparison, and many in their fifties and sixties finish well ahead of younger racers. Training for Hyrox past 50 means more recovery between hard sessions, steady strength work, and checking which age group you fall into on race day.

                ## Milestones
                1. Your age group for race day confirmed from the rulebook.
                2. Published times for your age group at a recent race reviewed.
                3. Hard sessions limited to two a week with easier days between.
                4. A realistic age group target set and written in your log.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An age group target set from published results for your category, with a training week holding no more than two hard sessions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm which age group you race in on race day"
                - "Look up finish times for your age group at a recent race"
                - "Set a realistic target for your category"
                - "Limit hard sessions to two a week with easy days between"
            - name: Moving up from Open to Pro weights
              description: |-
                ## Purpose
                Pro weights make the sleds, carries, sandbag and wall ball markedly heavier, and the step up catches out strong Open racers. Testing each station at Pro weight before entering, and giving the heavier stations a full block, shows whether you are ready or need another season.

                ## Milestones
                1. The Pro weights for your division listed from the rulebook.
                2. Each loaded station tested at Pro weight and timed.
                3. A training block of eight weeks spent on the heaviest gaps.
                4. A decision recorded on whether to enter Pro next race.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every loaded station tested at Pro weight before and after an eight-week block, with a recorded decision on entering Pro."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the Pro weights for your division from the rulebook"
                - "Time the sled, carry, lunges and wall balls at Pro weight"
                - "Retest one loaded station at Pro weight each month @recurring(monthly:9)"
                - "Decide whether to enter Pro and write down why"
            - name: Age group World Championship qualification
              description: |-
                ## Purpose
                Strong age group racers can qualify for the World Championships through results at qualifying races, but slots and rules change each season. Knowing exactly how qualification works, and which races give you the best chance, turns a vague ambition into a targeted season.

                ## Milestones
                1. The current season's qualification rules and slot allocation read.
                2. Winning and qualifying times in your age group at recent races gathered.
                3. Two or three target qualifying races chosen.
                4. A training plan built backwards from the first of them.

                ## Notes
                Slots can roll down if qualifiers decline, so find out how and when roll-down places are offered.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written qualification plan naming target races and the time needed in your age group, from the current season's rules."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Read the current season's qualification rules in full"
                - "Collect qualifying times in your age group from recent races"
                - "Choose two or three qualifying races for the season"
                - "Recheck the qualification rules when the new season opens @recurring(yearly)"
            - name: Breaking your next finish time barrier
              description: |-
                ## Purpose
                After a first finish, the next big drop rarely comes from training harder at everything. Picking a specific barrier, such as ten minutes faster or under 75 minutes, and working out exactly which segments must shrink and by how much makes a second season sharper than the first.

                ## Milestones
                1. A target barrier chosen from your last race result.
                2. The required time saving broken down by run, station and Roxzone.
                3. A block plan written that targets the three largest savings.
                4. A full simulation within two minutes of the barrier logged before race day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A segment-by-segment plan to the new barrier, with a full simulation logged within two minutes of it before race day."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick a finish time barrier from your last result"
                - "Break the needed saving down by run, station and Roxzone"
                - "Write a block that targets the three largest savings"
                - "Run a full simulation and compare it with the barrier"
            - name: Racing individual and doubles on one weekend
              description: |-
                ## Purpose
                Many experienced racers enter an individual race on Saturday and doubles or relay on Sunday. Planning the recovery in between, the fuelling, sleep and a lighter role in the second race if needed, means both results count rather than the second becoming a survival exercise.

                ## Milestones
                1. Wave times for both races checked for the gap between them.
                2. An evening recovery plan written for food, fluids and sleep.
                3. The partner briefed on how your station share may change on day two.
                4. Both races completed and the second-day splits compared with the first.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both races of a double weekend completed, with a written recovery plan used between them and splits compared."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the time gap between your two waves"
                - "Write an evening plan for food, fluids and sleep"
                - "Agree with your partner how day two station shares might change"
                - "Compare day two splits with day one in your log"
            - name: Coaching a Hyrox class at your gym
              description: |-
                ## Purpose
                Gyms increasingly run Hyrox classes, and experienced racers are often asked to lead them. Planning a class that scales sleds and wall balls for mixed abilities, keeps a busy turf lane safe, and builds over weeks toward a group race gives members a real result.

                ## Milestones
                1. The class format, length and maximum numbers agreed with the gym.
                2. A twelve-week class progression written with scaling for each station.
                3. A safety brief for sled lanes and wall ball spacing prepared.
                4. A group simulation or race entry set as the class goal.

                ## Notes
                Check whether your gym needs you to hold a coaching or personal training qualification and insurance before you lead sessions.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A twelve-week class plan with scaling for every station, a safety brief and a group goal, agreed with the gym."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree class format, length and numbers with the gym manager"
                - "Write a twelve-week progression with scaling for each station"
                - "Prepare a sled lane and wall ball spacing safety brief"
                - "Write next week's class plan and share it with members @recurring(weekly:fri)"
---

# Hyrox & Fitness Racing

This area is for anyone preparing for Hyrox or a similar indoor fitness race, where eight 1 km runs alternate with the SkiErg, sled push, sled pull, burpee broad jumps, rower, farmers carry, sandbag lunges and wall balls. It opens with the foundations (a race and division, the rulebook, a baseline test, a gym with the right kit and a training week), then the weekly machinery of easy running, threshold repeats, compromised running, strength and station work, the technique of each station and the Roxzone, the decisions that follow from your splits, race weeks and debriefs, versions for doubles pairs, relay captains, runners, lifters and busy parents, and finally Pro weights, qualification and coaching others.

What repeats is a Sunday long easy run, Tuesday threshold repeats, a Thursday compromised session, two strength sessions, a Saturday sled session and a short wall ball block, plus a monthly half simulation, a quarterly full simulation, a month-end block review and a yearly check of the season's rules. The Training program, Metrics log, Purchase decision, Operational checklist and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
